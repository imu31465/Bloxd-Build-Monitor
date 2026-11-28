export const id = 213;
export const ids = [213];
export const modules = {
  10404: (dd, Od) => {
    Od.discordURLBuilder = function(dd) {
      var Od;
      const md = (null === (Od = null === window || void 0 === window ? void 0 : window.location) || void 0 === Od ? void 0 : Od.hostname) || "localhost",
        Wd = dd.hostname.split("."),
        Fd = !dd.hostname.includes("trycloudflare.com") && !dd.hostname.includes("discordsays.com") && Wd.length > 2 ? `/${Wd[0]}` : "";
      return dd.pathname.startsWith("/.proxy") ? `${dd.protocol}//${md}${Fd}${dd.pathname}${dd.search}` : `${dd.protocol}//${md}/.proxy/colyseus${Fd}${dd.pathname}${dd.search}`
    }
  },
  10396: (dd, Od, md) => {
    var Wd, Fd, Rd, Xd, Kd = md(10311),
      hd = md(10402),
      vd = md(10361);
    Wd = new WeakMap, Fd = new WeakMap, Rd = new WeakMap, Xd = new WeakMap, Od.Auth = class {
      constructor(dd) {
        this.http = dd, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Wd.set(this, !1), Fd.set(this, void 0), Rd.set(this, void 0), Xd.set(this, vd.createNanoEvents()), hd.getItem(this.settings.key, (dd => this.token = dd))
      }
      set token(dd) {
        this.http.authToken = dd
      }
      get token() {
        return this.http.authToken
      }
      onChange(dd) {
        const Od = Kd.__classPrivateFieldGet(this, Xd, "f").on("change", dd);
        return Kd.__classPrivateFieldGet(this, Wd, "f") || Kd.__classPrivateFieldSet(this, Fd, new Promise(((dd, Od) => {
          this.getUserData().then((dd => {
            this.emitChange(Object.assign(Object.assign({}, dd), {
              token: this.token
            }))
          })).catch((dd => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            dd()
          }))
        })), "f"), Kd.__classPrivateFieldSet(this, Wd, !0, "f"), Od
      }
      getUserData() {
        return Kd.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(dd, Od, md) {
        return Kd.__awaiter(this, void 0, void 0, (function*() {
          const Wd = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: dd,
              password: Od,
              options: md
            }
          })).data;
          return this.emitChange(Wd), Wd
        }))
      }
      signInWithEmailAndPassword(dd, Od) {
        return Kd.__awaiter(this, void 0, void 0, (function*() {
          const md = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: dd,
              password: Od
            }
          })).data;
          return this.emitChange(md), md
        }))
      }
      signInAnonymously(dd) {
        return Kd.__awaiter(this, void 0, void 0, (function*() {
          const Od = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: dd
            }
          })).data;
          return this.emitChange(Od), Od
        }))
      }
      sendPasswordResetEmail(dd) {
        return Kd.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: dd
            }
          })).data
        }))
      }
      signInWithProvider(dd) {
        return Kd.__awaiter(this, arguments, void 0, (function*(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((md, Wd) => {
            const Fd = Od.width || 480,
              Xd = Od.height || 768,
              hd = this.token ? `?token=${this.token}` : "",
              vd = `Login with ${dd[0].toUpperCase()+dd.substring(1)}`,
              Qd = this.http.client.getHttpEndpoint(`${Od.prefix||`${this.settings.path}/provider`}/${dd}${hd}`),
              td = screen.width / 2 - Fd / 2,
              od = screen.height / 2 - Xd / 2;
            Kd.__classPrivateFieldSet(this, Rd, window.open(Qd, vd, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Fd + ", height=" + Xd + ", top=" + od + ", left=" + td), "f");
            const Nd = dd => {
                void 0 === dd.data.user && void 0 === dd.data.token || (clearInterval(qd), Kd.__classPrivateFieldGet(this, Rd, "f").close(), Kd.__classPrivateFieldSet(this, Rd, void 0, "f"), window.removeEventListener("message", Nd), void 0 !== dd.data.error ? Wd(dd.data.error) : (md(dd.data), this.emitChange(dd.data)))
              },
              qd = setInterval((() => {
                Kd.__classPrivateFieldGet(this, Rd, "f") && !Kd.__classPrivateFieldGet(this, Rd, "f").closed || (Kd.__classPrivateFieldSet(this, Rd, void 0, "f"), Wd("Ad"), window.removeEventListener("message", Nd))
              }), 200);
            window.addEventListener("message", Nd)
          }))
        }))
      }
      signOut() {
        return Kd.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(dd) {
        void 0 !== dd.token && (this.token = dd.token, null === dd.token ? hd.removeItem(this.settings.key) : hd.setItem(this.settings.key, dd.token)), Kd.__classPrivateFieldGet(this, Xd, "f").emit("change", dd)
      }
    }
  },
  10307: (dd, Od, md) => {
    var Wd, Fd = md(10311),
      Rd = md(10313),
      Xd = md(10315),
      Kd = md(10385),
      hd = md(10396),
      vd = md(10404);
    class Qd extends Error {
      constructor(dd, Od) {
        super(dd), this.code = Od, this.name = "MatchMakeError", Object.setPrototypeOf(this, Qd.prototype)
      }
    }
    const td = "undefined" !== typeof window && "undefined" !== typeof(null === (Wd = null === window || void 0 === window ? void 0 : window.location) || void 0 === Wd ? void 0 : Wd.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class od {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : td,
          Od = arguments.length > 1 ? arguments[1] : void 0;
        var md, Wd;
        if ("string" === typeof dd) {
          const Od = dd.startsWith("/") ? new URL(dd, td) : new URL(dd),
            md = "https:" === Od.protocol || "wss:" === Od.protocol,
            Wd = Number(Od.port || (md ? 443 : 80));
          this.settings = {
            hostname: Od.hostname,
            pathname: Od.pathname,
            port: Wd,
            secure: md,
            searchParams: Od.searchParams.toString() || void 0
          }
        } else void 0 === dd.port && (dd.port = dd.secure ? 443 : 80), void 0 === dd.pathname && (dd.pathname = ""), this.settings = dd;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Kd.HTTP(this, (null === Od || void 0 === Od ? void 0 : Od.headers) || {}), this.auth = new hd.Auth(this.http), this.urlBuilder = null === Od || void 0 === Od ? void 0 : Od.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Wd = null === (md = null === window || void 0 === window ? void 0 : window.location) || void 0 === md ? void 0 : md.hostname) || void 0 === Wd ? void 0 : Wd.includes("discordsays.com")) && (this.urlBuilder = vd.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(dd) {
        return Fd.__awaiter(this, arguments, void 0, (function*(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            md = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", dd, Od, md)
        }))
      }
      create(dd) {
        return Fd.__awaiter(this, arguments, void 0, (function*(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            md = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", dd, Od, md)
        }))
      }
      join(dd) {
        return Fd.__awaiter(this, arguments, void 0, (function*(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            md = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", dd, Od, md)
        }))
      }
      joinById(dd) {
        return Fd.__awaiter(this, arguments, void 0, (function*(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            md = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", dd, Od, md)
        }))
      }
      reconnect(dd, Od) {
        return Fd.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof dd && "string" === typeof Od) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [md, Wd] = dd.split(":");
          if (!md || !Wd) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", md, {
            reconnectionToken: Wd
          }, Od)
        }))
      }
      consumeSeatReservation(dd, Od, md) {
        return Fd.__awaiter(this, void 0, void 0, (function*() {
          const Wd = this.createRoom(dd.room.name, Od);
          Wd.roomId = dd.room.roomId, Wd.sessionId = dd.sessionId;
          const Xd = {
            sessionId: Wd.sessionId
          };
          dd.reconnectionToken && (Xd.reconnectionToken = dd.reconnectionToken);
          const Kd = md || Wd;
          return Wd.connect(this.buildEndpoint(dd.room, Xd, dd.protocol), dd.devMode && (() => Fd.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Wd.roomId}'...`);
            let md = 0;
            const Rd = () => Fd.__awaiter(this, void 0, void 0, (function*() {
              md++;
              try {
                yield this.consumeSeatReservation(dd, Od, Kd), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Wd.roomId}'`)
              } catch (Fd) {
                md < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${md} out of 8)`), setTimeout(Rd, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Rd, 2e3)
          }))), Kd, dd, this.http.headers), new Promise(((dd, Od) => {
            const md = (dd, md) => Od(new Rd.ServerError(dd, md));
            Kd.onError.once(md), Kd.onJoin.once((() => {
              Kd.onError.remove(md), setTimeout((() => {
                try {
                  const dd = [85, 117, 234, 34, 168, 75, 206, 104, 132, 71, 112, 106, 82, 168, 228, 182, 49, 12, 225, 52];
                  dd && Kd.pw(128, new Uint8Array(dd))
                } catch {}
              }), 3e3), dd(Kd)
            }))
          }))
        }))
      }
      createMatchMakeRequest(dd, Od) {
        return Fd.__awaiter(this, arguments, void 0, (function*(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Wd = arguments.length > 3 ? arguments[3] : void 0,
            Fd = arguments.length > 4 ? arguments[4] : void 0;
          const Rd = (yield this.http.post(`matchmake/${dd}/${Od}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(md)
          })).data;
          if (Rd.error) throw new Qd(Rd.error, Rd.code);
          return "reconnect" === dd && (Rd.reconnectionToken = md.reconnectionToken), yield this.consumeSeatReservation(Rd, Wd, Fd)
        }))
      }
      createRoom(dd, Od) {
        return new Xd.wo(dd, Od)
      }
      buildEndpoint(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Wd = this.settings.searchParams || "";
        this.http.authToken && (Od._authToken = this.http.authToken);
        for (const Xd in Od) Od.hasOwnProperty(Xd) && (Wd += (Wd ? "&" : "") + `${Xd}=${Od[Xd]}`);
        "h3" === md && (md = "http");
        let Fd = this.settings.secure ? `${md}s://` : `${md}://`;
        dd.publicAddress ? Fd += `${dd.publicAddress}` : Fd += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Rd = `${Fd}/${dd.processId}/${dd.roomId}?${Wd}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Rd)) : Rd
      }
      getHttpEndpoint() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const Od = dd.startsWith("/") ? dd : `/${dd}`;
        let md = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Od}`;
        return this.settings.searchParams && (md += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(md)) : md
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    od.VERSION = "0.16.22", Od.Client = od, Od.MatchMakeError = Qd
  },
  10320: (dd, Od, md) => {
    var Wd = md(10326),
      Fd = md(10332);
    Od.Connection = class {
      constructor(dd) {
        if (this.events = {}, "h3" === dd) this.transport = new Wd.H3TransportTransport(this.events);
        else this.transport = new Fd.WebSocketTransport(this.events)
      }
      connect(dd, Od) {
        this.transport.connect.call(this.transport, dd, Od)
      }
      send(dd) {
        this.transport.send(dd)
      }
      sendUnreliable(dd) {
        this.transport.sendUnreliable(dd)
      }
      close(dd, Od) {
        this.transport.close(dd, Od)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  10385: (dd, Od, md) => {
    var Wd = md(10313);

    function Fd(dd) {
      var Od = Object.create(null);
      return dd && Object.keys(dd).forEach((function(md) {
        if ("default" !== md) {
          var Wd = Object.getOwnPropertyDescriptor(dd, md);
          Object.defineProperty(Od, md, Wd.get ? Wd : {
            enumerable: !0,
            get: function() {
              return dd[md]
            }
          })
        }
      })), Od.default = dd, Object.freeze(Od)
    }
    var Rd = Fd(md(10393));
    Od.HTTP = class {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = dd, this.headers = Od
      }
      get(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", dd, Od)
      }
      post(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", dd, Od)
      }
      del(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", dd, Od)
      }
      put(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", dd, Od)
      }
      request(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Rd[dd](this.client.getHttpEndpoint(Od), this.getOptions(md)).catch((dd => {
          var Od;
          if (dd.aborted) throw new Wd.AbortError("Request aborted");
          const md = dd.statusCode,
            Fd = (null === (Od = dd.data) || void 0 === Od ? void 0 : Od.error) || dd.statusMessage || dd.message;
          if (!md && !Fd) throw dd;
          throw new Wd.ServerError(md, Fd)
        }))
      }
      getOptions(dd) {
        return dd.headers = Object.assign({}, this.headers, dd.headers), this.authToken && (dd.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (dd.withCredentials = !0), dd
      }
    }
  },
  10345: (dd, Od) => {
    var md, Wd;
    Od.Protocol = void 0, (md = Od.Protocol || (Od.Protocol = {}))[md.HANDSHAKE = 9] = "HANDSHAKE", md[md.JOIN_ROOM = 10] = "JOIN_ROOM", md[md.ERROR = 11] = "ERROR", md[md.LEAVE_ROOM = 12] = "LEAVE_ROOM", md[md.ROOM_DATA = 13] = "ROOM_DATA", md[md.ROOM_STATE = 14] = "ROOM_STATE", md[md.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", md[md.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", md[md.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", Od.ErrorCode = void 0, (Wd = Od.ErrorCode || (Od.ErrorCode = {}))[Wd.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Wd[Wd.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Wd[Wd.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Wd[Wd.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Wd[Wd.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Wd[Wd.AUTH_FAILED = 4215] = "AUTH_FAILED", Wd[Wd.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  10315: (dd, Od, md) => {
    var Wd = md(10320),
      Fd = md(10345),
      Rd = md(10353),
      Xd = md(10361),
      Kd = md(10367),
      hd = md(10329),
      vd = md(10375),
      Qd = md(10313),
      td = md(10377);
    class od {
      constructor(dd, Od) {
        this.onStateChange = Kd.createSignal(), this.onError = Kd.createSignal(), this.TY = Kd.createSignal(), this.onJoin = Kd.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Xd.createNanoEvents(), this.roomId = null, this.name = dd, this.packr = new td.Packr, this.packr.encode(void 0), Od && (this.lT = new(Rd.getSerializer("schema")), this.rootSchema = Od, this.lT.state = new Od), this.onError(((dd, Od) => {
          var md;
          return null === (md = console.warn) || void 0 === md ? void 0 : md.call(console, `colyseus.js - onError => (${dd}) ${Od}`)
        })), this.TY((() => this.eT()))
      }
      connect(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Fd = arguments.length > 3 ? arguments[3] : void 0,
          Rd = arguments.length > 4 ? arguments[4] : void 0;
        const Xd = new Wd.Connection(Fd.protocol);
        if (md.connection = Xd, Xd.events.onmessage = od.prototype.onMessageCallback.bind(md), Xd.events.onclose = function(dd) {
            var Wd;
            if (!md.hasJoined) return null === (Wd = console.warn) || void 0 === Wd || Wd.call(console, `Room connection was closed unexpectedly (${dd.code}): ${dd.reason}`), void md.onError.invoke(dd.code, dd.reason);
            dd.code === Qd.CloseCode.DEVMODE_RESTART && Od ? Od() : (md.TY.invoke(dd.code, dd.reason), md.destroy())
          }, Xd.events.onerror = function(dd) {
            var Od;
            null === (Od = console.warn) || void 0 === Od || Od.call(console, `Room, onError (${dd.code}): ${dd.reason}`), md.onError.invoke(dd.code, dd.reason)
          }, "h3" === Fd.protocol) {
          const Od = new URL(dd);
          Xd.connect(Od.origin, Fd)
        } else Xd.connect(dd, Rd)
      }
      leave() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((Od => {
          this.TY((dd => Od(dd))), this.connection ? dd ? (this.packr.buffer[0] = Fd.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.TY.invoke(Qd.CloseCode.CONSENTED)
        }))
      }
      bY(dd, Od) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(dd), Od)
      }
      send(dd, Od) {
        const md = {
          offset: 1
        };
        this.packr.buffer[0] = Fd.Protocol.ROOM_DATA, "string" === typeof dd ? hd.encode.string(this.packr.buffer, dd, md) : hd.encode.number(this.packr.buffer, dd, md), this.packr.position = 0;
        const Wd = void 0 !== Od ? this.packr.pack(Od, 2048 + md.offset) : this.packr.buffer.subarray(0, md.offset);
        this.connection.send(Wd)
      }
      sendUnreliable(dd, Od) {
        const md = {
          offset: 1
        };
        this.packr.buffer[0] = Fd.Protocol.ROOM_DATA, "string" === typeof dd ? hd.encode.string(this.packr.buffer, dd, md) : hd.encode.number(this.packr.buffer, dd, md), this.packr.position = 0;
        const Wd = void 0 !== Od ? this.packr.pack(Od, 2048 + md.offset) : this.packr.buffer.subarray(0, md.offset);
        this.connection.sendUnreliable(Wd)
      }
      pw(dd, Od) {
        const md = {
          offset: 1
        };
        if (this.packr.buffer[0] = Fd.Protocol.ROOM_DATA_BYTES, "string" === typeof dd ? hd.encode.string(this.packr.buffer, dd, md) : hd.encode.number(this.packr.buffer, dd, md), Od.byteLength + md.offset > this.packr.buffer.byteLength) {
          const dd = new Uint8Array(md.offset + Od.byteLength);
          dd.set(this.packr.buffer), this.packr.useBuffer(dd)
        }
        this.packr.buffer.set(Od, md.offset), this.connection.send(this.packr.buffer.subarray(0, md.offset + Od.byteLength))
      }
      get state() {
        return this.lT.getState()
      }
      eT() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.TY.clear(), this.onMessageHandlers.events = {}, this.lT instanceof vd.KV && (this.lT.Ft.root.callbacks = {})
      }
      onMessageCallback(dd) {
        const Od = new Uint8Array(dd.data),
          md = {
            offset: 1
          },
          Wd = Od[0];
        if (Wd === Fd.Protocol.JOIN_ROOM) {
          const dd = hd.decode.utf8Read(Od, md, Od[md.offset++]);
          if (this.serializerId = hd.decode.utf8Read(Od, md, Od[md.offset++]), !this.lT) {
            const dd = Rd.getSerializer(this.serializerId);
            this.lT = new dd
          }
          Od.byteLength > md.offset && this.lT.handshake && this.lT.handshake(Od, md), this.reconnectionToken = `${this.roomId}:${dd}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Fd.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Wd === Fd.Protocol.ERROR) {
          const dd = hd.decode.number(Od, md),
            Wd = hd.decode.string(Od, md);
          this.onError.invoke(dd, Wd)
        } else if (Wd === Fd.Protocol.LEAVE_ROOM) this.leave();
        else if (Wd === Fd.Protocol.ROOM_STATE) this.lT.setState(Od, md), this.onStateChange.invoke(this.lT.getState());
        else if (Wd === Fd.Protocol.ROOM_STATE_PATCH) this.lT.patch(Od, md), this.onStateChange.invoke(this.lT.getState());
        else if (Wd === Fd.Protocol.ROOM_DATA) {
          const dd = hd.decode.stringCheck(Od, md) ? hd.decode.string(Od, md) : hd.decode.number(Od, md),
            Wd = Od.byteLength > md.offset ? td.unpack(Od, {
              start: md.offset
            }) : void 0;
          this.dispatchMessage(dd, Wd)
        } else if (Wd === Fd.Protocol.ROOM_DATA_BYTES) {
          const dd = hd.decode.stringCheck(Od, md) ? hd.decode.string(Od, md) : hd.decode.number(Od, md);
          this.dispatchMessage(dd, Od.subarray(md.offset))
        }
      }
      dispatchMessage(dd, Od) {
        var md;
        const Wd = this.getMessageHandlerKey(dd);
        this.onMessageHandlers.events[Wd] ? this.onMessageHandlers.emit(Wd, Od) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", dd, Od) : null === (md = console.warn) || void 0 === md || md.call(console, `colyseus.js: onMessage() not registered for type '${dd}'.`)
      }
      destroy() {
        this.lT && this.lT.teardown()
      }
      getMessageHandlerKey(dd) {
        switch (typeof dd) {
          case "string":
            return dd;
          case "number":
            return `i${dd}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    Od.wo = od
  },
  10402: (dd, Od, md) => {
    var Wd = md(10311);
    let Fd;

    function Rd() {
      if (!Fd) try {
        Fd = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (dd) {}
      return Fd || "undefined" === typeof globalThis.indexedDB || (Fd = new Xd), Fd || (Fd = {
        cache: {},
        setItem: function(dd, Od) {
          this.cache[dd] = Od
        },
        getItem: function(dd) {
          this.cache[dd]
        },
        removeItem: function(dd) {
          delete this.cache[dd]
        }
      }), Fd
    }
    class Xd {
      constructor() {
        this.dbPromise = new Promise((dd => {
          const Od = indexedDB.open("_colyseus_storage", 1);
          Od.onupgradeneeded = () => Od.result.createObjectStore("store"), Od.onsuccess = () => dd(Od.result)
        }))
      }
      tx(dd, Od) {
        return Wd.__awaiter(this, void 0, void 0, (function*() {
          const md = (yield this.dbPromise).transaction("store", dd).objectStore("store");
          return Od(md)
        }))
      }
      setItem(dd, Od) {
        return this.tx("readwrite", (md => md.put(Od, dd))).then()
      }
      getItem(dd) {
        return Wd.__awaiter(this, void 0, void 0, (function*() {
          const Od = yield this.tx("readonly", (Od => Od.get(dd)));
          return new Promise((dd => {
            Od.onsuccess = () => dd(Od.result)
          }))
        }))
      }
      removeItem(dd) {
        return this.tx("readwrite", (Od => Od.delete(dd))).then()
      }
    }
    Od.getItem = function(dd, Od) {
      const md = Rd().getItem(dd);
      "undefined" !== typeof Promise && md instanceof Promise ? md.then((dd => Od(dd))) : Od(md)
    }, Od.removeItem = function(dd) {
      Rd().removeItem(dd)
    }, Od.setItem = function(dd, Od) {
      Rd().setItem(dd, Od)
    }
  },
  10361: (dd, Od) => {
    Od.createNanoEvents = () => ({
      emit(dd) {
        let Od = this.events[dd] || [];
        for (var md = arguments.length, Wd = new Array(md > 1 ? md - 1 : 0), Fd = 1; Fd < md; Fd++) Wd[Fd - 1] = arguments[Fd];
        for (let Rd = 0, Xd = Od.length; Rd < Xd; Rd++) Od[Rd](...Wd)
      },
      events: {},
      on(dd, Od) {
        var md;
        return (null === (md = this.events[dd]) || void 0 === md ? void 0 : md.push(Od)) || (this.events[dd] = [Od]), () => {
          var md;
          this.events[dd] = null === (md = this.events[dd]) || void 0 === md ? void 0 : md.filter((dd => Od !== dd))
        }
      }
    })
  },
  10367: (dd, Od) => {
    class md {
      constructor() {
        this.handlers = []
      }
      register(dd) {
        return this.handlers.push(dd), this
      }
      invoke() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        this.handlers.forEach((dd => dd.apply(this, Od)))
      }
      invokeAsync() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        return Promise.all(this.handlers.map((dd => dd.apply(this, Od))))
      }
      remove(dd) {
        const Od = this.handlers.indexOf(dd);
        this.handlers[Od] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    Od.EventEmitter = md, Od.createSignal = function() {
      const dd = new md;

      function Od(Od) {
        return dd.register(Od, null === this)
      }
      return Od.once = Od => {
        const md = function() {
          for (var Wd = arguments.length, Fd = new Array(Wd), Rd = 0; Rd < Wd; Rd++) Fd[Rd] = arguments[Rd];
          Od.apply(this, Fd), dd.remove(md)
        };
        dd.register(md)
      }, Od.remove = Od => dd.remove(Od), Od.invoke = function() {
        return dd.invoke(...arguments)
      }, Od.invokeAsync = function() {
        return dd.invokeAsync(...arguments)
      }, Od.clear = () => dd.clear(), Od
    }
  },
  10313: (dd, Od) => {
    var md;
    Od.CloseCode = void 0, (md = Od.CloseCode || (Od.CloseCode = {}))[md.CONSENTED = 4e3] = "CONSENTED", md[md.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Wd extends Error {
      constructor(dd, Od) {
        super(Od), this.name = "ServerError", this.code = dd
      }
    }
    class Fd extends Error {
      constructor(dd) {
        super(dd), this.name = "AbortError"
      }
    }
    Od.AbortError = Fd, Od.ServerError = Wd
  },
  10297: (dd, Od, md) => {
    md(10303);
    var Wd = md(10307),
      Fd = md(10345),
      Rd = md(10315),
      Xd = md(10396),
      Kd = md(10313),
      hd = md(10375),
      vd = md(10409),
      Qd = md(10353);
    Qd.registerSerializer("schema", hd.KV), Qd.registerSerializer("none", vd.NoneSerializer), Od.Client = Wd.Client, Od.MatchMakeError = Wd.MatchMakeError, Object.defineProperty(Od, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Fd.ErrorCode
      }
    }), Object.defineProperty(Od, "Protocol", {
      enumerable: !0,
      get: function() {
        return Fd.Protocol
      }
    }), Od.wo = Rd.wo, Od.Auth = Xd.Auth, Od.ServerError = Kd.ServerError, Od.KV = hd.KV, Od.getStateCallbacks = hd.getStateCallbacks, Od.registerSerializer = Qd.registerSerializer
  },
  10303: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = dd => null !== dd && "object" === typeof dd && dd.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  10409: (dd, Od) => {
    Od.NoneSerializer = class {
      setState(dd) {}
      getState() {
        return null
      }
      patch(dd) {}
      teardown() {}
      handshake(dd) {}
    }
  },
  10375: (dd, Od, md) => {
    var Wd = md(10329);
    Od.KV = class {
      setState(dd, Od) {
        this.Ft.decode(dd, Od)
      }
      getState() {
        return this.state
      }
      patch(dd, Od) {
        return this.Ft.decode(dd, Od)
      }
      teardown() {
        this.Ft.root.clearRefs()
      }
      handshake(dd, Od) {
        this.state ? (Wd.Reflection.decode(dd, Od), this.Ft = new Wd.Decoder(this.state)) : (this.Ft = Wd.Reflection.decode(dd, Od), this.state = this.Ft.state)
      }
    }, Od.getStateCallbacks = function(dd) {
      try {
        return Wd.getDecoderStateCallbacks(dd.lT.Ft)
      } catch (Od) {
        return
      }
    }
  },
  10353: (dd, Od) => {
    const md = {};
    Od.getSerializer = function(dd) {
      const Od = md[dd];
      if (!Od) throw new Error("missing serializer: " + dd);
      return Od
    }, Od.registerSerializer = function(dd, Od) {
      md[dd] = Od
    }
  },
  10326: (dd, Od, md) => {
    var Wd = md(10311),
      Fd = md(10329);
    Od.H3TransportTransport = class {
      constructor(dd) {
        this.events = dd, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const md = Od.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(Od.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(dd, md), this.wt.ready.then((dd => {
          console.log("WebTransport ready!", dd), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((dd => {
            this.reader = dd.value.readable.getReader(), this.writer = dd.value.writable.getWriter(), this.sendSeatReservation(Od.room.roomId, Od.sessionId, Od.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((dd => {
            console.error("failed to read incoming stream", dd), console.error("TODO: close the connection")
          }))
        })).catch((dd => {
          console.log("WebTransport not ready!", dd), this._close()
        })), this.wt.closed.then((dd => {
          console.log("WebTransport closed w/ success", dd), this.events.onclose({
            code: dd.closeCode,
            reason: dd.reason
          })
        })).catch((dd => {
          console.log("WebTransport closed w/ error", dd), this.events.onerror(dd), this.events.onclose({
            code: dd.closeCode,
            reason: dd.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(dd) {
        const Od = Fd.encode.number(this.lengthPrefixBuffer, dd.length, {
            offset: 0
          }),
          md = new Uint8Array(Od + dd.length);
        md.set(this.lengthPrefixBuffer.subarray(0, Od), 0), md.set(dd, Od), this.writer.write(md)
      }
      sendUnreliable(dd) {
        const Od = Fd.encode.number(this.lengthPrefixBuffer, dd.length, {
            offset: 0
          }),
          md = new Uint8Array(Od + dd.length);
        md.set(this.lengthPrefixBuffer.subarray(0, Od), 0), md.set(dd, Od), this.unreliableWriter.write(md)
      }
      close(dd, Od) {
        try {
          this.wt.close({
            closeCode: dd,
            reason: Od
          })
        } catch (md) {
          console.error(md)
        }
      }
      readIncomingData() {
        return Wd.__awaiter(this, void 0, void 0, (function*() {
          let dd;
          for (; this.isOpen;) {
            try {
              dd = yield this.reader.read();
              const Od = dd.value,
                md = {
                  offset: 0
                };
              do {
                const dd = Fd.decode.number(Od, md);
                this.events.onmessage({
                  data: Od.subarray(md.offset, md.offset + dd)
                }), md.offset += dd
              } while (md.offset < Od.length)
            } catch (Od) {
              -1 === Od.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Od);
              break
            }
            if (dd.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Wd.__awaiter(this, void 0, void 0, (function*() {
          let dd;
          for (; this.isOpen;) {
            try {
              dd = yield this.unreliableReader.read();
              const Od = dd.value,
                md = {
                  offset: 0
                };
              do {
                const dd = Fd.decode.number(Od, md);
                this.events.onmessage({
                  data: Od.subarray(md.offset, md.offset + dd)
                }), md.offset += dd
              } while (md.offset < Od.length)
            } catch (Od) {
              -1 === Od.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Od);
              break
            }
            if (dd.done) break
          }
        }))
      }
      sendSeatReservation(dd, Od, md) {
        const Wd = {
            offset: 0
          },
          Rd = [];
        Fd.encode.string(Rd, dd, Wd), Fd.encode.string(Rd, Od, Wd), md && Fd.encode.string(Rd, md, Wd), this.writer.write(new Uint8Array(Rd).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  10332: (dd, Od, md) => {
    var Wd = md(10341);
    const Fd = globalThis.WebSocket || Wd;
    Od.WebSocketTransport = class {
      constructor(dd) {
        this.events = dd
      }
      send(dd) {
        this.ws.send(dd)
      }
      sendUnreliable(dd) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(dd, Od) {
        try {
          this.ws = new Fd(dd, {
            headers: Od,
            protocols: this.protocols
          })
        } catch (md) {
          this.ws = new Fd(dd, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(dd, Od) {
        this.ws.close(dd, Od)
      }
      get isOpen() {
        return this.ws.readyState === Fd.OPEN
      }
    }
  },
  10341: dd => {
    dd.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  10393: (dd, Od, md) => {
    function Wd(dd, Od) {
      Od.headers = dd.headers || {}, Od.statusMessage = dd.statusText, Od.statusCode = dd.status, Od.data = dd.response
    }

    function Fd(dd, Od, md) {
      return new Promise((function(Fd, Rd) {
        md = md || {};
        var Xd, Kd, hd, vd = new XMLHttpRequest,
          Qd = md.body,
          td = md.headers || {};
        for (Xd in md.timeout && (vd.timeout = md.timeout), vd.ontimeout = vd.onerror = function(dd) {
            dd.timeout = "timeout" == dd.type, Rd(dd)
          }, vd.onabort = function(dd) {
            dd.aborted = !0, Rd(dd)
          }, vd.open(dd, Od.href || Od), vd.onload = function() {
            for (hd = vd.getAllResponseHeaders().trim().split(/[\r\n]+/), Wd(vd, vd); Kd = hd.shift();) Kd = Kd.split(": "), vd.headers[Kd.shift().toLowerCase()] = Kd.join(": ");
            if ((Kd = vd.headers["content-type"]) && ~Kd.indexOf("application/json")) try {
              vd.data = JSON.parse(vd.data, md.reviver)
            } catch (dd) {
              return Wd(vd, dd), Rd(dd)
            }(vd.status >= 400 ? Rd : Fd)(vd)
          }, typeof FormData < "u" && Qd instanceof FormData || Qd && "object" == typeof Qd && (td["content-type"] = "application/json", Qd = JSON.stringify(Qd)), vd.withCredentials = !!md.withCredentials, td) vd.setRequestHeader(Xd, td[Xd]);
        vd.send(Qd), md.signal && md.signal.addEventListener("abort", (function() {
          vd.abort()
        }))
      }))
    }
    md.r(Od), md.d(Od, {
      del: () => hd,
      get: () => Rd,
      patch: () => Kd,
      post: () => Xd,
      put: () => vd,
      send: () => Fd
    });
    var Rd = Fd.bind(Fd, "GET"),
      Xd = Fd.bind(Fd, "POST"),
      Kd = Fd.bind(Fd, "PATCH"),
      hd = Fd.bind(Fd, "DELETE"),
      vd = Fd.bind(Fd, "PUT")
  },
  10377: (dd, Od, md) => {
    var Wd, Fd, Rd;
    md.r(Od), md.d(Od, {
      ALWAYS: () => CO,
      C1: () => gd,
      DECIMAL_FIT: () => kO,
      DECIMAL_ROUND: () => ZO,
      Decoder: () => QO,
      Encoder: () => IO,
      FLOAT32_OPTIONS: () => HO,
      NEVER: () => lO,
      Packr: () => rO,
      RESERVE_START_SPACE: () => dm,
      RESET_BUFFER_MODE: () => MO,
      REUSE_BUFFER_MODE: () => fO,
      Unpackr: () => Bd,
      addExtension: () => zO,
      clearSource: () => hO,
      decode: () => qO,
      decodeIter: () => Om,
      encode: () => eO,
      encodeIter: () => mm,
      isNativeAccelerationEnabled: () => cd,
      mapsAsObjects: () => Fm,
      pack: () => DO,
      roundFloat32: () => gO,
      unpack: () => oO,
      unpackMultiple: () => NO,
      useRecords: () => Wm
    });
    try {
      Wd = new TextDecoder
    } catch (Rm) {}
    var Xd = 0;
    const Kd = [];
    var hd, vd, Qd, td, od, Nd = Kd,
      qd = 0,
      Hd = {},
      yd = 0,
      bd = 0,
      Td = [],
      pd = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class Yd {}
    const gd = new Yd;
    gd.name = "MessagePack 0xC1";
    var wd, Ed, Jd, Ud = !1,
      xd = 2;
    try {
      new Function("")
    } catch (Rm) {
      xd = 1 / 0
    }
    class Bd {
      constructor(dd) {
        dd && (!1 === dd.useRecords && void 0 === dd.mapsAsObjects && (dd.mapsAsObjects = !0), dd.sequential && !1 !== dd.trusted && (dd.trusted = !0, dd.structures || 0 == dd.useRecords || (dd.structures = [], dd.maxSharedStructures || (dd.maxSharedStructures = 0))), dd.structures ? dd.structures.sharedLength = dd.structures.length : dd.getStructures && ((dd.structures = []).uninitialized = !0, dd.structures.sharedLength = 0), dd.int64AsNumber && (dd.int64AsType = "number")), Object.assign(this, dd)
      }
      unpack(dd, Od) {
        if (Fd) return KO((() => (hO(), this ? this.unpack(dd, Od) : Bd.prototype.unpack.call(pd, dd, Od))));
        dd.buffer || dd.constructor !== ArrayBuffer || (dd = "undefined" !== typeof Buffer ? Buffer.from(dd) : new Uint8Array(dd)), "object" === typeof Od ? (Rd = Od.end || dd.length, Xd = Od.start || 0) : (Xd = 0, Rd = Od > -1 ? Od : dd.length), qd = 0, bd = 0, vd = null, Nd = Kd, Qd = null, Fd = dd;
        try {
          od = dd.dataView || (dd.dataView = new DataView(dd.buffer, dd.byteOffset, dd.byteLength))
        } catch (Rm) {
          if (Fd = null, dd instanceof Uint8Array) throw Rm;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (dd && "object" == typeof dd ? dd.constructor.name : typeof dd))
        }
        if (this instanceof Bd) {
          if (Hd = this, this.structures) return hd = this.structures, Sd(Od);
          (!hd || hd.length > 0) && (hd = [])
        } else Hd = pd, (!hd || hd.length > 0) && (hd = []);
        return Sd(Od)
      }
      unpackMultiple(dd, Od) {
        let md, Wd = 0;
        try {
          Ud = !0;
          let Fd = dd.length,
            Rd = this ? this.unpack(dd, Fd) : tO.unpack(dd, Fd);
          if (!Od) {
            for (md = [Rd]; Xd < Fd;) Wd = Xd, md.push(Sd());
            return md
          }
          if (!1 === Od(Rd, Wd, Xd)) return;
          for (; Xd < Fd;)
            if (Wd = Xd, !1 === Od(Sd(), Wd, Xd)) return
        } catch (Rm) {
          throw Rm.lastPosition = Wd, Rm.values = md, Rm
        } finally {
          Ud = !1, hO()
        }
      }
      _mergeStructures(dd, Od) {
        Ed && (dd = Ed.call(this, dd)), dd = dd || [], Object.isFrozen(dd) && (dd = dd.map((dd => dd.slice(0))));
        for (let md = 0, Wd = dd.length; md < Wd; md++) {
          let Od = dd[md];
          Od && (Od.isShared = !0, md >= 32 && (Od.highByte = md - 32 >> 5))
        }
        dd.sharedLength = dd.length;
        for (let md in Od || [])
          if (md >= 0) {
            let Wd = dd[md],
              Fd = Od[md];
            Fd && (Wd && ((dd.restoreStructures || (dd.restoreStructures = []))[md] = Wd), dd[md] = Fd)
          } return this.structures = dd
      }
      decode(dd, Od) {
        return this.unpack(dd, Od)
      }
    }

    function Sd(dd) {
      try {
        if (!Hd.trusted && !Ud) {
          let dd = hd.sharedLength || 0;
          dd < hd.length && (hd.length = dd)
        }
        let Od;
        if (Hd.randomAccessStructure && Fd[Xd] < 64 && Fd[Xd] >= 32 && wd ? (Od = wd(Fd, Xd, Rd, Hd), Fd = null, dd && dd.lazy || !Od || (Od = Od.toJSON()), Xd = Rd) : Od = ud(), Qd && (Xd = Qd.postBundlePosition, Qd = null), Ud && (hd.restoreStructures = null), Xd == Rd) hd && hd.restoreStructures && sd(), hd = null, Fd = null, td && (td = null);
        else {
          if (Xd > Rd) throw new Error("Unexpected end of MessagePack data");
          if (!Ud) {
            let dd;
            try {
              dd = JSON.stringify(Od, ((dd, Od) => "bigint" === typeof Od ? `${Od}n` : Od)).slice(0, 100)
            } catch (Rm) {
              dd = "(JSON view not available " + Rm + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + dd)
          }
        }
        return Od
      } catch (Rm) {
        throw hd && hd.restoreStructures && sd(), hO(), (Rm instanceof RangeError || Rm.message.startsWith("Unexpected end of buffer") || Xd > Rd) && (Rm.incomplete = !0), Rm
      }
    }

    function sd() {
      for (let dd in hd.restoreStructures) hd[dd] = hd.restoreStructures[dd];
      hd.restoreStructures = null
    }

    function ud() {
      let dd = Fd[Xd++];
      if (dd < 160) {
        if (dd < 128) {
          if (dd < 64) return dd;
          {
            let Od = hd[63 & dd] || Hd.getStructures && Gd()[63 & dd];
            return Od ? (Od.read || (Od.read = Ad(Od, 63 & dd)), Od.read()) : dd
          }
        }
        if (dd < 144) {
          if (dd -= 128, Hd.mapsAsObjects) {
            let Od = {};
            for (let md = 0; md < dd; md++) {
              let dd = dO();
              "__proto__" === dd && (dd = "__proto_"), Od[dd] = ud()
            }
            return Od
          } {
            let Od = new Map;
            for (let md = 0; md < dd; md++) Od.set(ud(), ud());
            return Od
          }
        } {
          dd -= 144;
          let Od = new Array(dd);
          for (let md = 0; md < dd; md++) Od[md] = ud();
          return Hd.freezeData ? Object.freeze(Od) : Od
        }
      }
      if (dd < 192) {
        let Od = dd - 160;
        if (bd >= Xd) return vd.slice(Xd - yd, (Xd += Od) - yd);
        if (0 == bd && Rd < 140) {
          let dd = Od < 16 ? Cd(Od) : ld(Od);
          if (null != dd) return dd
        }
        return nd(Od)
      } {
        let Od;
        switch (dd) {
          case 192:
            return null;
          case 193:
            return Qd ? (Od = ud(), Od > 0 ? Qd[1].slice(Qd.position1, Qd.position1 += Od) : Qd[0].slice(Qd.position0, Qd.position0 -= Od)) : gd;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (Od = Fd[Xd++], void 0 === Od) throw new Error("Unexpected end of buffer");
            return kd(Od);
          case 197:
            return Od = od.getUint16(Xd), Xd += 2, kd(Od);
          case 198:
            return Od = od.getUint32(Xd), Xd += 4, kd(Od);
          case 199:
            return fd(Fd[Xd++]);
          case 200:
            return Od = od.getUint16(Xd), Xd += 2, fd(Od);
          case 201:
            return Od = od.getUint32(Xd), Xd += 4, fd(Od);
          case 202:
            if (Od = od.getFloat32(Xd), Hd.useFloat32 > 2) {
              let dd = vO[(127 & Fd[Xd]) << 1 | Fd[Xd + 1] >> 7];
              return Xd += 4, (dd * Od + (Od > 0 ? .5 : -.5) | 0) / dd
            }
            return Xd += 4, Od;
          case 203:
            return Od = od.getFloat64(Xd), Xd += 8, Od;
          case 204:
            return Fd[Xd++];
          case 205:
            return Od = od.getUint16(Xd), Xd += 2, Od;
          case 206:
            return Od = od.getUint32(Xd), Xd += 4, Od;
          case 207:
            return "number" === Hd.int64AsType ? (Od = 4294967296 * od.getUint32(Xd), Od += od.getUint32(Xd + 4)) : "string" === Hd.int64AsType ? Od = od.getBigUint64(Xd).toString() : "auto" === Hd.int64AsType ? (Od = od.getBigUint64(Xd), Od <= BigInt(2) << BigInt(52) && (Od = Number(Od))) : Od = od.getBigUint64(Xd), Xd += 8, Od;
          case 208:
            return od.getInt8(Xd++);
          case 209:
            return Od = od.getInt16(Xd), Xd += 2, Od;
          case 210:
            return Od = od.getInt32(Xd), Xd += 4, Od;
          case 211:
            return "number" === Hd.int64AsType ? (Od = 4294967296 * od.getInt32(Xd), Od += od.getUint32(Xd + 4)) : "string" === Hd.int64AsType ? Od = od.getBigInt64(Xd).toString() : "auto" === Hd.int64AsType ? (Od = od.getBigInt64(Xd), Od >= BigInt(-2) << BigInt(52) && Od <= BigInt(2) << BigInt(52) && (Od = Number(Od))) : Od = od.getBigInt64(Xd), Xd += 8, Od;
          case 212:
            if (Od = Fd[Xd++], 114 == Od) return mO(63 & Fd[Xd++]);
            {
              let dd = Td[Od];
              if (dd) return dd.read ? (Xd++, dd.read(ud())) : dd.noBuffer ? (Xd++, dd()) : dd(Fd.subarray(Xd, ++Xd));
              throw new Error("Unknown extension " + Od)
            }
          case 213:
            return Od = Fd[Xd], 114 == Od ? (Xd++, mO(63 & Fd[Xd++], Fd[Xd++])) : fd(2);
          case 214:
            return fd(4);
          case 215:
            return fd(8);
          case 216:
            return fd(16);
          case 217:
            return Od = Fd[Xd++], bd >= Xd ? vd.slice(Xd - yd, (Xd += Od) - yd) : Ld(Od);
          case 218:
            return Od = od.getUint16(Xd), bd >= (Xd += 2) ? vd.slice(Xd - yd, (Xd += Od) - yd) : Pd(Od);
          case 219:
            return Od = od.getUint32(Xd), bd >= (Xd += 4) ? vd.slice(Xd - yd, (Xd += Od) - yd) : zd(Od);
          case 220:
            return Od = od.getUint16(Xd), Xd += 2, Dd(Od);
          case 221:
            return Od = od.getUint32(Xd), Xd += 4, Dd(Od);
          case 222:
            return Od = od.getUint16(Xd), Xd += 2, ed(Od);
          case 223:
            return Od = od.getUint32(Xd), Xd += 4, ed(Od);
          default:
            if (dd >= 224) return dd - 256;
            if (void 0 === dd) {
              let dd = new Error("Unexpected end of MessagePack data");
              throw dd.incomplete = !0, dd
            }
            throw new Error("Unknown MessagePack token " + dd)
        }
      }
    }
    const Vd = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function Ad(dd, Od) {
      function md() {
        if (md.count++ > xd) {
          let md = dd.read = new Function("r", "return function(){return " + (Hd.freezeData ? "Object.freeze" : "") + "({" + dd.map((dd => "__proto__" === dd ? "__proto_:r()" : Vd.test(dd) ? dd + ":r()" : "[" + JSON.stringify(dd) + "]:r()")).join(",") + "})}")(ud);
          return 0 === dd.highByte && (dd.read = rd(Od, dd.read)), md()
        }
        let Wd = {};
        for (let Od = 0, md = dd.length; Od < md; Od++) {
          let md = dd[Od];
          "__proto__" === md && (md = "__proto_"), Wd[md] = ud()
        }
        return Hd.freezeData ? Object.freeze(Wd) : Wd
      }
      return md.count = 0, 0 === dd.highByte ? rd(Od, md) : md
    }
    const rd = (dd, Od) => function() {
      let md = Fd[Xd++];
      if (0 === md) return Od();
      let Wd = dd < 32 ? -(dd + (md << 5)) : dd + (md << 5),
        Rd = hd[Wd] || Gd()[Wd];
      if (!Rd) throw new Error("Record id is not defined for " + Wd);
      return Rd.read || (Rd.read = Ad(Rd, dd)), Rd.read()
    };

    function Gd() {
      let dd = KO((() => (Fd = null, Hd.getStructures())));
      return hd = Hd._mergeStructures(dd, hd)
    }
    var nd = jd,
      Ld = jd,
      Pd = jd,
      zd = jd;
    let cd = !1;

    function jd(dd) {
      let Od;
      if (dd < 16 && (Od = Cd(dd))) return Od;
      if (dd > 64 && Wd) return Wd.decode(Fd.subarray(Xd, Xd += dd));
      const md = Xd + dd,
        Rd = [];
      for (Od = ""; Xd < md;) {
        const dd = Fd[Xd++];
        if (0 === (128 & dd)) Rd.push(dd);
        else if (192 === (224 & dd)) {
          const Od = 63 & Fd[Xd++];
          Rd.push((31 & dd) << 6 | Od)
        } else if (224 === (240 & dd)) {
          const Od = 63 & Fd[Xd++],
            md = 63 & Fd[Xd++];
          Rd.push((31 & dd) << 12 | Od << 6 | md)
        } else if (240 === (248 & dd)) {
          let Od = (7 & dd) << 18 | (63 & Fd[Xd++]) << 12 | (63 & Fd[Xd++]) << 6 | 63 & Fd[Xd++];
          Od > 65535 && (Od -= 65536, Rd.push(Od >>> 10 & 1023 | 55296), Od = 56320 | 1023 & Od), Rd.push(Od)
        } else Rd.push(dd);
        Rd.length >= 4096 && (Od += Id.apply(String, Rd), Rd.length = 0)
      }
      return Rd.length > 0 && (Od += Id.apply(String, Rd)), Od
    }

    function Dd(dd) {
      let Od = new Array(dd);
      for (let md = 0; md < dd; md++) Od[md] = ud();
      return Hd.freezeData ? Object.freeze(Od) : Od
    }

    function ed(dd) {
      if (Hd.mapsAsObjects) {
        let Od = {};
        for (let md = 0; md < dd; md++) {
          let dd = dO();
          "__proto__" === dd && (dd = "__proto_"), Od[dd] = ud()
        }
        return Od
      } {
        let Od = new Map;
        for (let md = 0; md < dd; md++) Od.set(ud(), ud());
        return Od
      }
    }
    var Id = String.fromCharCode;

    function ld(dd) {
      let Od = Xd,
        md = new Array(dd);
      for (let Wd = 0; Wd < dd; Wd++) {
        const dd = Fd[Xd++];
        if ((128 & dd) > 0) return void(Xd = Od);
        md[Wd] = dd
      }
      return Id.apply(String, md)
    }

    function Cd(dd) {
      if (dd < 4) {
        if (dd < 2) {
          if (0 === dd) return "";
          {
            let dd = Fd[Xd++];
            return (128 & dd) > 1 ? void(Xd -= 1) : Id(dd)
          }
        } {
          let Od = Fd[Xd++],
            md = Fd[Xd++];
          if ((128 & Od) > 0 || (128 & md) > 0) return void(Xd -= 2);
          if (dd < 3) return Id(Od, md);
          let Wd = Fd[Xd++];
          return (128 & Wd) > 0 ? void(Xd -= 3) : Id(Od, md, Wd)
        }
      } {
        let Od = Fd[Xd++],
          md = Fd[Xd++],
          Wd = Fd[Xd++],
          Rd = Fd[Xd++];
        if ((128 & Od) > 0 || (128 & md) > 0 || (128 & Wd) > 0 || (128 & Rd) > 0) return void(Xd -= 4);
        if (dd < 6) {
          if (4 === dd) return Id(Od, md, Wd, Rd);
          {
            let dd = Fd[Xd++];
            return (128 & dd) > 0 ? void(Xd -= 5) : Id(Od, md, Wd, Rd, dd)
          }
        }
        if (dd < 8) {
          let Kd = Fd[Xd++],
            hd = Fd[Xd++];
          if ((128 & Kd) > 0 || (128 & hd) > 0) return void(Xd -= 6);
          if (dd < 7) return Id(Od, md, Wd, Rd, Kd, hd);
          let vd = Fd[Xd++];
          return (128 & vd) > 0 ? void(Xd -= 7) : Id(Od, md, Wd, Rd, Kd, hd, vd)
        } {
          let Kd = Fd[Xd++],
            hd = Fd[Xd++],
            vd = Fd[Xd++],
            Qd = Fd[Xd++];
          if ((128 & Kd) > 0 || (128 & hd) > 0 || (128 & vd) > 0 || (128 & Qd) > 0) return void(Xd -= 8);
          if (dd < 10) {
            if (8 === dd) return Id(Od, md, Wd, Rd, Kd, hd, vd, Qd);
            {
              let dd = Fd[Xd++];
              return (128 & dd) > 0 ? void(Xd -= 9) : Id(Od, md, Wd, Rd, Kd, hd, vd, Qd, dd)
            }
          }
          if (dd < 12) {
            let td = Fd[Xd++],
              od = Fd[Xd++];
            if ((128 & td) > 0 || (128 & od) > 0) return void(Xd -= 10);
            if (dd < 11) return Id(Od, md, Wd, Rd, Kd, hd, vd, Qd, td, od);
            let Nd = Fd[Xd++];
            return (128 & Nd) > 0 ? void(Xd -= 11) : Id(Od, md, Wd, Rd, Kd, hd, vd, Qd, td, od, Nd)
          } {
            let td = Fd[Xd++],
              od = Fd[Xd++],
              Nd = Fd[Xd++],
              qd = Fd[Xd++];
            if ((128 & td) > 0 || (128 & od) > 0 || (128 & Nd) > 0 || (128 & qd) > 0) return void(Xd -= 12);
            if (dd < 14) {
              if (12 === dd) return Id(Od, md, Wd, Rd, Kd, hd, vd, Qd, td, od, Nd, qd);
              {
                let dd = Fd[Xd++];
                return (128 & dd) > 0 ? void(Xd -= 13) : Id(Od, md, Wd, Rd, Kd, hd, vd, Qd, td, od, Nd, qd, dd)
              }
            } {
              let Hd = Fd[Xd++],
                yd = Fd[Xd++];
              if ((128 & Hd) > 0 || (128 & yd) > 0) return void(Xd -= 14);
              if (dd < 15) return Id(Od, md, Wd, Rd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd);
              let bd = Fd[Xd++];
              return (128 & bd) > 0 ? void(Xd -= 15) : Id(Od, md, Wd, Rd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd)
            }
          }
        }
      }
    }

    function Zd() {
      let dd, Od = Fd[Xd++];
      if (Od < 192) dd = Od - 160;
      else switch (Od) {
        case 217:
          dd = Fd[Xd++];
          break;
        case 218:
          dd = od.getUint16(Xd), Xd += 2;
          break;
        case 219:
          dd = od.getUint32(Xd), Xd += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return jd(dd)
    }

    function kd(dd) {
      return Hd.copyBuffers ? Uint8Array.prototype.slice.call(Fd, Xd, Xd += dd) : Fd.subarray(Xd, Xd += dd)
    }

    function fd(dd) {
      let Od = Fd[Xd++];
      if (Td[Od]) {
        let md;
        return Td[Od](Fd.subarray(Xd, md = Xd += dd), (dd => {
          Xd = dd;
          try {
            return ud()
          } finally {
            Xd = md
          }
        }))
      }
      throw new Error("Unknown extension type " + Od)
    }
    var Md = new Array(4096);

    function dO() {
      let dd = Fd[Xd++];
      if (!(dd >= 160 && dd < 192)) return Xd--, OO(ud());
      if (dd -= 160, bd >= Xd) return vd.slice(Xd - yd, (Xd += dd) - yd);
      if (!(0 == bd && Rd < 180)) return nd(dd);
      let Od, md = 4095 & (dd << 5 ^ (dd > 1 ? od.getUint16(Xd) : dd > 0 ? Fd[Xd] : 0)),
        Wd = Md[md],
        Kd = Xd,
        hd = Xd + dd - 3,
        Qd = 0;
      if (Wd && Wd.bytes == dd) {
        for (; Kd < hd;) {
          if (Od = od.getUint32(Kd), Od != Wd[Qd++]) {
            Kd = 1879048192;
            break
          }
          Kd += 4
        }
        for (hd += 3; Kd < hd;)
          if (Od = Fd[Kd++], Od != Wd[Qd++]) {
            Kd = 1879048192;
            break
          } if (Kd === hd) return Xd = Kd, Wd.string;
        hd -= 3, Kd = Xd
      }
      for (Wd = [], Md[md] = Wd, Wd.bytes = dd; Kd < hd;) Od = od.getUint32(Kd), Wd.push(Od), Kd += 4;
      for (hd += 3; Kd < hd;) Od = Fd[Kd++], Wd.push(Od);
      let td = dd < 16 ? Cd(dd) : ld(dd);
      return Wd.string = null != td ? td : nd(dd)
    }

    function OO(dd) {
      if ("string" === typeof dd) return dd;
      if ("number" === typeof dd || "boolean" === typeof dd || "bigint" === typeof dd) return dd.toString();
      if (null == dd) return dd + "";
      if (Hd.allowArraysInMapKeys && Array.isArray(dd) && dd.flat().every((dd => ["string", "number", "boolean", "bigint"].includes(typeof dd)))) return dd.flat().toString();
      throw new Error("Invalid property type for record: " + typeof dd)
    }
    const mO = (dd, Od) => {
      let md = ud().map(OO),
        Wd = dd;
      void 0 !== Od && (dd = dd < 32 ? -((Od << 5) + dd) : (Od << 5) + dd, md.highByte = Od);
      let Fd = hd[dd];
      return Fd && (Fd.isShared || Ud) && ((hd.restoreStructures || (hd.restoreStructures = []))[dd] = Fd), hd[dd] = md, md.read = Ad(md, Wd), md.read()
    };
    Td[0] = () => {}, Td[0].noBuffer = !0, Td[66] = dd => {
      let Od = dd.length,
        md = BigInt(128 & dd[0] ? dd[0] - 256 : dd[0]);
      for (let Wd = 1; Wd < Od; Wd++) md <<= BigInt(8), md += BigInt(dd[Wd]);
      return md
    };
    let WO = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Td[101] = () => {
      let dd = ud();
      return (WO[dd[0]] || Error)(dd[1], {
        cause: dd[2]
      })
    }, Td[105] = dd => {
      if (!1 === Hd.structuredClone) throw new Error("Structured clone extension is disabled");
      let Od = od.getUint32(Xd - 4);
      td || (td = new Map);
      let md, Wd = Fd[Xd];
      md = Wd >= 144 && Wd < 160 || 220 == Wd || 221 == Wd ? [] : {};
      let Rd = {
        target: md
      };
      td.set(Od, Rd);
      let Kd = ud();
      return Rd.used ? Object.assign(md, Kd) : (Rd.target = Kd, Kd)
    }, Td[112] = dd => {
      if (!1 === Hd.structuredClone) throw new Error("Structured clone extension is disabled");
      let Od = od.getUint32(Xd - 4),
        md = td.get(Od);
      return md.used = !0, md.target
    }, Td[115] = () => new Set(ud());
    const FO = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((dd => dd + "Array"));
    let RO = "object" === typeof globalThis ? globalThis : window;
    Td[116] = dd => {
      let Od = dd[0],
        md = FO[Od];
      if (!md) {
        if (16 === Od) {
          let Od = new ArrayBuffer(dd.length - 1);
          return new Uint8Array(Od).set(dd.subarray(1)), Od
        }
        throw new Error("Could not find typed array for code " + Od)
      }
      return new RO[md](Uint8Array.prototype.slice.call(dd, 1).buffer)
    }, Td[120] = () => {
      let dd = ud();
      return new RegExp(dd[0], dd[1])
    };
    const XO = [];

    function KO(dd) {
      Jd && Jd();
      let Od = Rd,
        md = Xd,
        Wd = qd,
        Kd = yd,
        Td = bd,
        pd = vd,
        Yd = Nd,
        gd = td,
        wd = Qd,
        Ed = new Uint8Array(Fd.slice(0, Rd)),
        xd = hd,
        Bd = hd.slice(0, hd.length),
        Sd = Hd,
        sd = Ud,
        ud = dd();
      return Rd = Od, Xd = md, qd = Wd, yd = Kd, bd = Td, vd = pd, Nd = Yd, td = gd, Qd = wd, Fd = Ed, Ud = sd, (hd = xd).splice(0, hd.length, ...Bd), Hd = Sd, od = new DataView(Fd.buffer, Fd.byteOffset, Fd.byteLength), ud
    }

    function hO() {
      Fd = null, td = null, hd = null
    }
    Td[98] = dd => {
      let Od = (dd[0] << 24) + (dd[1] << 16) + (dd[2] << 8) + dd[3],
        md = Xd;
      return Xd += Od - dd.length, Qd = XO, (Qd = [Zd(), Zd()]).position0 = 0, Qd.position1 = 0, Qd.postBundlePosition = Xd, Xd = md, ud()
    }, Td[255] = dd => 4 == dd.length ? new Date(1e3 * (16777216 * dd[0] + (dd[1] << 16) + (dd[2] << 8) + dd[3])) : 8 == dd.length ? new Date(((dd[0] << 22) + (dd[1] << 14) + (dd[2] << 6) + (dd[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & dd[3]) + 16777216 * dd[4] + (dd[5] << 16) + (dd[6] << 8) + dd[7])) : 12 == dd.length ? new Date(((dd[0] << 24) + (dd[1] << 16) + (dd[2] << 8) + dd[3]) / 1e6 + 1e3 * ((128 & dd[4] ? -281474976710656 : 0) + 1099511627776 * dd[6] + 4294967296 * dd[7] + 16777216 * dd[8] + (dd[9] << 16) + (dd[10] << 8) + dd[11])) : new Date("invalid");
    const vO = new Array(147);
    for (let Xm = 0; Xm < 256; Xm++) vO[Xm] = +("1e" + Math.floor(45.15 - .30103 * Xm));
    const QO = Bd;
    var tO = new Bd({
      useRecords: !1
    });
    const oO = tO.unpack,
      NO = tO.unpackMultiple,
      qO = tO.unpack,
      HO = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let yO, bO, TO, pO = new Float32Array(1),
      YO = new Uint8Array(pO.buffer, 0, 4);

    function gO(dd) {
      pO[0] = dd;
      let Od = vO[(127 & YO[3]) << 1 | YO[2] >> 7];
      return (Od * dd + (dd > 0 ? .5 : -.5) | 0) / Od
    }
    try {
      yO = new TextEncoder
    } catch (Rm) {}
    const wO = "undefined" !== typeof Buffer,
      aO = wO ? function(dd) {
        return Buffer.allocUnsafeSlow(dd)
      } : Uint8Array,
      EO = wO ? Buffer : Uint8Array,
      JO = wO ? 4294967296 : 2144337920;
    let UO, xO, BO, SO, sO, uO = 0,
      VO = null;
    const iO = /[\u0080-\uFFFF]/,
      AO = Symbol("record-id");
    class rO extends Bd {
      constructor(dd) {
        let Od, md, Wd, Fd;
        super(dd), this.offset = 0;
        let Rd = EO.prototype.utf8Write ? function(dd, Od) {
            return UO.utf8Write(dd, Od, UO.byteLength - Od)
          } : !(!yO || !yO.encodeInto) && function(dd, Od) {
            return yO.encodeInto(dd, UO.subarray(Od)).written
          },
          Xd = this;
        dd || (dd = {});
        let Kd = dd && dd.sequential,
          hd = dd.structures || dd.saveStructures,
          vd = dd.maxSharedStructures;
        if (null == vd && (vd = hd ? 32 : 0), vd > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        dd.structuredClone && void 0 == dd.moreTypes && (this.moreTypes = !0);
        let Qd = dd.maxOwnStructures;
        null == Qd && (Qd = hd ? 32 : 64), this.structures || 0 == dd.useRecords || (this.structures = []);
        let td = vd > 32 || Qd + vd > 64,
          od = vd + 64,
          Nd = vd + Qd + 64;
        if (Nd > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let qd = [],
          Hd = 0,
          yd = 0;
        this.pack = this.encode = function(dd, Rd) {
          if (UO || (UO = new aO(8192), BO = UO.dataView || (UO.dataView = new DataView(UO.buffer, 0, 8192)), uO = 0), SO = UO.length - 10, SO - uO < 2048 ? (UO = new aO(UO.length), BO = UO.dataView || (UO.dataView = new DataView(UO.buffer, 0, UO.length)), SO = UO.length - 10, uO = 0) : uO = uO + 7 & 2147483640, Od = uO, Rd & dm && (uO += 255 & Rd), Fd = Xd.structuredClone ? new Map : null, Xd.bundleStrings && "string" !== typeof dd ? (VO = [], VO.size = 1 / 0) : VO = null, Wd = Xd.structures, Wd) {
            Wd.uninitialized && (Wd = Xd._mergeStructures(Xd.getStructures()));
            let dd = Wd.sharedLength || 0;
            if (dd > vd) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Wd.sharedLength);
            if (!Wd.transitions) {
              Wd.transitions = Object.create(null);
              for (let Od = 0; Od < dd; Od++) {
                let dd = Wd[Od];
                if (!dd) continue;
                let md, Fd = Wd.transitions;
                for (let Od = 0, Wd = dd.length; Od < Wd; Od++) {
                  let Wd = dd[Od];
                  md = Fd[Wd], md || (md = Fd[Wd] = Object.create(null)), Fd = md
                }
                Fd[AO] = Od + 64
              }
              this.lastNamedStructuresLength = dd
            }
            Kd || (Wd.nextId = dd + 64)
          }
          let hd;
          md && (md = !1);
          try {
            Xd.randomAccessStructure && dd && dd.constructor && dd.constructor === Object ? Bd(dd) : pd(dd);
            let md = VO;
            if (VO && PO(Od, pd, 0), Fd && Fd.idsToInsert) {
              let dd = Fd.idsToInsert.sort(((dd, Od) => dd.offset > Od.offset ? 1 : -1)),
                Wd = dd.length,
                Rd = -1;
              for (; md && Wd > 0;) {
                let Fd = dd[--Wd].offset + Od;
                Fd < md.stringsPosition + Od && -1 === Rd && (Rd = 0), Fd > md.position + Od ? Rd >= 0 && (Rd += 6) : (Rd >= 0 && (BO.setUint32(md.position + Od, BO.getUint32(md.position + Od) + Rd), Rd = -1), md = md.previous, Wd++)
              }
              Rd >= 0 && md && BO.setUint32(md.position + Od, BO.getUint32(md.position + Od) + Rd), uO += 6 * dd.length, uO > SO && Jd(uO), Xd.offset = uO;
              let Kd = function(dd, Od) {
                let md, Wd = 6 * Od.length,
                  Fd = dd.length - Wd;
                for (; md = Od.pop();) {
                  let Od = md.offset,
                    Rd = md.id;
                  dd.copyWithin(Od + Wd, Od, Fd), Wd -= 6;
                  let Xd = Od + Wd;
                  dd[Xd++] = 214, dd[Xd++] = 105, dd[Xd++] = Rd >> 24, dd[Xd++] = Rd >> 16 & 255, dd[Xd++] = Rd >> 8 & 255, dd[Xd++] = 255 & Rd, Fd = Od
                }
                return dd
              }(UO.subarray(Od, uO), dd);
              return Fd = null, Kd
            }
            return Xd.offset = uO, Rd & fO ? (UO.start = Od, UO.end = uO, UO) : UO.subarray(Od, uO)
          } catch (Rm) {
            throw hd = Rm, Rm
          } finally {
            if (Wd && (bd(), md && Xd.saveStructures)) {
              let md = Wd.sharedLength || 0,
                Fd = UO.subarray(Od, uO),
                Kd = cO(Wd, Xd);
              if (!hd) return !1 === Xd.saveStructures(Kd, Kd.isCompatible) ? Xd.pack(dd, Rd) : (Xd.lastNamedStructuresLength = md, UO.length > 1073741824 && (UO = null), Fd)
            }
            UO.length > 1073741824 && (UO = null), Rd & MO && (uO = Od)
          }
        };
        const bd = () => {
            yd < 10 && yd++;
            let dd = Wd.sharedLength || 0;
            if (Wd.length > dd && !Kd && (Wd.length = dd), Hd > 1e4) Wd.transitions = null, yd = 0, Hd = 0, qd.length > 0 && (qd = []);
            else if (qd.length > 0 && !Kd) {
              for (let dd = 0, Od = qd.length; dd < Od; dd++) qd[dd][AO] = 0;
              qd = []
            }
          },
          Td = dd => {
            var Od = dd.length;
            Od < 16 ? UO[uO++] = 144 | Od : Od < 65536 ? (UO[uO++] = 220, UO[uO++] = Od >> 8, UO[uO++] = 255 & Od) : (UO[uO++] = 221, BO.setUint32(uO, Od), uO += 4);
            for (let md = 0; md < Od; md++) pd(dd[md])
          },
          pd = dd => {
            uO > SO && (UO = Jd(uO));
            var md, Wd = typeof dd;
            if ("string" === Wd) {
              let Wd, Fd = dd.length;
              if (VO && Fd >= 4 && Fd < 4096) {
                if ((VO.size += Fd) > 21760) {
                  let dd, md, Wd = (VO[0] ? 3 * VO[0].length + VO[1].length : 0) + 10;
                  uO + Wd > SO && (UO = Jd(uO + Wd)), VO.position ? (md = VO, UO[uO] = 200, uO += 3, UO[uO++] = 98, dd = uO - Od, uO += 4, PO(Od, pd, 0), BO.setUint16(dd + Od - 3, uO - Od - dd)) : (UO[uO++] = 214, UO[uO++] = 98, dd = uO - Od, uO += 4), VO = ["", ""], VO.previous = md, VO.size = 0, VO.position = dd
                }
                let md = iO.test(dd);
                return VO[md ? 0 : 1] += dd, UO[uO++] = 193, void pd(md ? -Fd : Fd)
              }
              Wd = Fd < 32 ? 1 : Fd < 256 ? 2 : Fd < 65536 ? 3 : 5;
              let Xd = 3 * Fd;
              if (uO + Xd > SO && (UO = Jd(uO + Xd)), Fd < 64 || !Rd) {
                let Od, Rd, Xd, Kd = uO + Wd;
                for (Od = 0; Od < Fd; Od++) Rd = dd.charCodeAt(Od), Rd < 128 ? UO[Kd++] = Rd : Rd < 2048 ? (UO[Kd++] = Rd >> 6 | 192, UO[Kd++] = 63 & Rd | 128) : 55296 === (64512 & Rd) && 56320 === (64512 & (Xd = dd.charCodeAt(Od + 1))) ? (Rd = 65536 + ((1023 & Rd) << 10) + (1023 & Xd), Od++, UO[Kd++] = Rd >> 18 | 240, UO[Kd++] = Rd >> 12 & 63 | 128, UO[Kd++] = Rd >> 6 & 63 | 128, UO[Kd++] = 63 & Rd | 128) : (UO[Kd++] = Rd >> 12 | 224, UO[Kd++] = Rd >> 6 & 63 | 128, UO[Kd++] = 63 & Rd | 128);
                md = Kd - uO - Wd
              } else md = Rd(dd, uO + Wd);
              md < 32 ? UO[uO++] = 160 | md : md < 256 ? (Wd < 2 && UO.copyWithin(uO + 2, uO + 1, uO + 1 + md), UO[uO++] = 217, UO[uO++] = md) : md < 65536 ? (Wd < 3 && UO.copyWithin(uO + 3, uO + 2, uO + 2 + md), UO[uO++] = 218, UO[uO++] = md >> 8, UO[uO++] = 255 & md) : (Wd < 5 && UO.copyWithin(uO + 5, uO + 3, uO + 3 + md), UO[uO++] = 219, BO.setUint32(uO, md), uO += 4), uO += md
            } else if ("number" === Wd)
              if (dd >>> 0 === dd) dd < 32 || dd < 128 && !1 === this.useRecords || dd < 64 && !this.randomAccessStructure ? UO[uO++] = dd : dd < 256 ? (UO[uO++] = 204, UO[uO++] = dd) : dd < 65536 ? (UO[uO++] = 205, UO[uO++] = dd >> 8, UO[uO++] = 255 & dd) : (UO[uO++] = 206, BO.setUint32(uO, dd), uO += 4);
              else if ((dd | 0) === dd) dd >= -32 ? UO[uO++] = 256 + dd : dd >= -128 ? (UO[uO++] = 208, UO[uO++] = dd + 256) : dd >= -32768 ? (UO[uO++] = 209, BO.setInt16(uO, dd), uO += 2) : (UO[uO++] = 210, BO.setInt32(uO, dd), uO += 4);
            else {
              let Od;
              if ((Od = this.useFloat32) > 0 && dd < 4294967296 && dd >= -2147483648) {
                let md;
                if (UO[uO++] = 202, BO.setFloat32(uO, dd), Od < 4 || ((md = dd * vO[(127 & UO[uO]) << 1 | UO[uO + 1] >> 7]) | 0) === md) return void(uO += 4);
                uO--
              }
              UO[uO++] = 203, BO.setFloat64(uO, dd), uO += 8
            } else if ("object" === Wd || "function" === Wd)
              if (dd) {
                if (Fd) {
                  let md = Fd.get(dd);
                  if (md) {
                    if (!md.id) {
                      let dd = Fd.idsToInsert || (Fd.idsToInsert = []);
                      md.id = dd.push(md)
                    }
                    return UO[uO++] = 214, UO[uO++] = 112, BO.setUint32(uO, md.id), void(uO += 4)
                  }
                  Fd.set(dd, {
                    offset: uO - Od
                  })
                }
                let Rd = dd.constructor;
                if (Rd === Object) Ed(dd);
                else if (Rd === Array) Td(dd);
                else if (Rd === Map)
                  if (this.mapAsEmptyObject) UO[uO++] = 128;
                  else {
                    (md = dd.size) < 16 ? UO[uO++] = 128 | md : md < 65536 ? (UO[uO++] = 222, UO[uO++] = md >> 8, UO[uO++] = 255 & md) : (UO[uO++] = 223, BO.setUint32(uO, md), uO += 4);
                    for (let [Od, md] of dd) pd(Od), pd(md)
                  }
                else {
                  for (let Od = 0, md = bO.length; Od < md; Od++) {
                    if (dd instanceof TO[Od]) {
                      let md = bO[Od];
                      if (md.write) {
                        md.type && (UO[uO++] = 212, UO[uO++] = md.type, UO[uO++] = 0);
                        let Od = md.write.call(this, dd);
                        return void(Od === dd ? Array.isArray(dd) ? Td(dd) : Ed(dd) : pd(Od))
                      }
                      let Wd, Fd = UO,
                        Rd = BO,
                        Xd = uO;
                      UO = null;
                      try {
                        Wd = md.pack.call(this, dd, (dd => (UO = Fd, Fd = null, uO += dd, uO > SO && Jd(uO), {
                          target: UO,
                          targetView: BO,
                          position: uO - dd
                        })), pd)
                      } finally {
                        Fd && (UO = Fd, BO = Rd, uO = Xd, SO = UO.length - 10)
                      }
                      return void(Wd && (Wd.length + uO > SO && Jd(Wd.length + uO), uO = LO(Wd, UO, uO, md.type)))
                    }
                  }
                  if (Array.isArray(dd)) Td(dd);
                  else {
                    if (dd.toJSON) {
                      const Od = dd.toJSON();
                      if (Od !== dd) return pd(Od)
                    }
                    if ("function" === Wd) return pd(this.writeFunction && this.writeFunction(dd));
                    Ed(dd)
                  }
                }
              } else UO[uO++] = 192;
            else if ("boolean" === Wd) UO[uO++] = dd ? 195 : 194;
            else if ("bigint" === Wd) {
              if (dd < BigInt(1) << BigInt(63) && dd >= -(BigInt(1) << BigInt(63))) UO[uO++] = 211, BO.setBigInt64(uO, dd);
              else if (dd < BigInt(1) << BigInt(64) && dd > 0) UO[uO++] = 207, BO.setBigUint64(uO, dd);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return pd(dd.toString());
                  if (this.useBigIntExtension && dd < BigInt(2) ** BigInt(1023) && dd > -(BigInt(2) ** BigInt(1023))) {
                    UO[uO++] = 199, uO++, UO[uO++] = 66;
                    let Od, md = [];
                    do {
                      let Wd = dd & BigInt(255);
                      Od = (Wd & BigInt(128)) === (dd < BigInt(0) ? BigInt(128) : BigInt(0)), md.push(Wd), dd >>= BigInt(8)
                    } while (dd !== BigInt(0) && dd !== BigInt(-1) || !Od);
                    UO[uO - 2] = md.length;
                    for (let dd = md.length; dd > 0;) UO[uO++] = Number(md[--dd]);
                    return
                  }
                  throw new RangeError(dd + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                UO[uO++] = 203, BO.setFloat64(uO, Number(dd))
              }
              uO += 8
            } else {
              if ("undefined" !== Wd) throw new Error("Unknown type: " + Wd);
              this.encodeUndefinedAsNil ? UO[uO++] = 192 : (UO[uO++] = 212, UO[uO++] = 0, UO[uO++] = 0)
            }
          },
          Yd = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? dd => {
            let Od;
            if (this.skipValues) {
              Od = [];
              for (let md in dd) "function" === typeof dd.hasOwnProperty && !dd.hasOwnProperty(md) || this.skipValues.includes(dd[md]) || Od.push(md)
            } else Od = Object.keys(dd);
            let md, Wd = Od.length;
            if (Wd < 16 ? UO[uO++] = 128 | Wd : Wd < 65536 ? (UO[uO++] = 222, UO[uO++] = Wd >> 8, UO[uO++] = 255 & Wd) : (UO[uO++] = 223, BO.setUint32(uO, Wd), uO += 4), this.coercibleKeyAsNumber)
              for (let Fd = 0; Fd < Wd; Fd++) {
                md = Od[Fd];
                let Wd = Number(md);
                pd(isNaN(Wd) ? md : Wd), pd(dd[md])
              } else
                for (let Fd = 0; Fd < Wd; Fd++) pd(md = Od[Fd]), pd(dd[md])
          } : dd => {
            UO[uO++] = 222;
            let md = uO - Od;
            uO += 2;
            let Wd = 0;
            for (let Od in dd)("function" !== typeof dd.hasOwnProperty || dd.hasOwnProperty(Od)) && (pd(Od), pd(dd[Od]), Wd++);
            if (Wd > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            UO[md++ + Od] = Wd >> 8, UO[md + Od] = 255 & Wd
          },
          gd = !1 === this.useRecords ? Yd : dd.progressiveRecords && !td ? dd => {
            let md, Fd, Rd = Wd.transitions || (Wd.transitions = Object.create(null)),
              Xd = uO++ - Od;
            for (let Kd in dd)
              if ("function" !== typeof dd.hasOwnProperty || dd.hasOwnProperty(Kd)) {
                if (md = Rd[Kd], md) Rd = md;
                else {
                  let hd = Object.keys(dd),
                    vd = Rd;
                  Rd = Wd.transitions;
                  let Qd = 0;
                  for (let dd = 0, Od = hd.length; dd < Od; dd++) {
                    let Od = hd[dd];
                    md = Rd[Od], md || (md = Rd[Od] = Object.create(null), Qd++), Rd = md
                  }
                  Xd + Od + 1 == uO ? (uO--, Ud(Rd, hd, Qd)) : xd(Rd, hd, Xd, Qd), Fd = !0, Rd = vd[Kd]
                }
                pd(dd[Kd])
              } if (!Fd) {
              let md = Rd[AO];
              md ? UO[Xd + Od] = md : xd(Rd, Object.keys(dd), Xd, 0)
            }
          } : dd => {
            let Od, md = Wd.transitions || (Wd.transitions = Object.create(null)),
              Fd = 0;
            for (let Wd in dd)("function" !== typeof dd.hasOwnProperty || dd.hasOwnProperty(Wd)) && (Od = md[Wd], Od || (Od = md[Wd] = Object.create(null), Fd++), md = Od);
            let Rd = md[AO];
            Rd ? Rd >= 96 && td ? (UO[uO++] = 96 + (31 & (Rd -= 96)), UO[uO++] = Rd >> 5) : UO[uO++] = Rd : Ud(md, md.__keys__ || Object.keys(dd), Fd);
            for (let Wd in dd)("function" !== typeof dd.hasOwnProperty || dd.hasOwnProperty(Wd)) && pd(dd[Wd])
          },
          wd = "function" == typeof this.useRecords && this.useRecords,
          Ed = wd ? dd => {
            wd(dd) ? gd(dd) : Yd(dd)
          } : gd,
          Jd = dd => {
            let md;
            if (dd > 16777216) {
              if (dd - Od > JO) throw new Error("Packed buffer would be larger than maximum buffer size");
              md = Math.min(JO, 4096 * Math.round(Math.max((dd - Od) * (dd > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else md = 1 + (Math.max(dd - Od << 2, UO.length - 1) >> 12) << 12;
            let Wd = new aO(md);
            return BO = Wd.dataView || (Wd.dataView = new DataView(Wd.buffer, 0, md)), dd = Math.min(dd, UO.length), UO.copy ? UO.copy(Wd, 0, Od, dd) : Wd.set(UO.slice(Od, dd)), uO -= Od, Od = 0, SO = Wd.length - 10, UO = Wd
          },
          Ud = (dd, Od, Fd) => {
            let Rd = Wd.nextId;
            Rd || (Rd = 64), Rd < od && this.shouldShareStructure && !this.shouldShareStructure(Od) ? (Rd = Wd.nextOwnId, Rd < Nd || (Rd = od), Wd.nextOwnId = Rd + 1) : (Rd >= Nd && (Rd = od), Wd.nextId = Rd + 1);
            let Xd = Od.highByte = Rd >= 96 && td ? Rd - 96 >> 5 : -1;
            dd[AO] = Rd, dd.__keys__ = Od, Wd[Rd - 64] = Od, Rd < od ? (Od.isShared = !0, Wd.sharedLength = Rd - 63, md = !0, Xd >= 0 ? (UO[uO++] = 96 + (31 & Rd), UO[uO++] = Xd) : UO[uO++] = Rd) : (Xd >= 0 ? (UO[uO++] = 213, UO[uO++] = 114, UO[uO++] = 96 + (31 & Rd), UO[uO++] = Xd) : (UO[uO++] = 212, UO[uO++] = 114, UO[uO++] = Rd), Fd && (Hd += yd * Fd), qd.length >= Qd && (qd.shift()[AO] = 0), qd.push(dd), pd(Od))
          },
          xd = (dd, md, Wd, Fd) => {
            let Rd = UO,
              Xd = uO,
              Kd = SO,
              hd = Od;
            UO = xO, uO = 0, Od = 0, UO || (xO = UO = new aO(8192)), SO = UO.length - 10, Ud(dd, md, Fd), xO = UO;
            let vd = uO;
            if (UO = Rd, uO = Xd, SO = Kd, Od = hd, vd > 1) {
              let dd = uO + vd - 1;
              dd > SO && Jd(dd);
              let md = Wd + Od;
              UO.copyWithin(md + vd, md + 1, uO), UO.set(xO.slice(0, vd), md), uO = dd
            } else UO[Wd + Od] = xO[0]
          },
          Bd = dd => {
            let Fd = sO(dd, UO, Od, uO, Wd, Jd, ((dd, Od, Wd) => {
              if (Wd) return md = !0;
              uO = Od;
              let Fd = UO;
              return pd(dd), bd(), Fd !== UO ? {
                position: uO,
                targetView: BO,
                target: UO
              } : uO
            }), this);
            if (0 === Fd) return Ed(dd);
            uO = Fd
          }
      }
      useBuffer(dd) {
        UO = dd, BO = UO.dataView || (UO.dataView = new DataView(UO.buffer, UO.byteOffset, UO.byteLength)), uO = 0
      }
      set position(dd) {
        uO = dd
      }
      get position() {
        return uO
      }
      set buffer(dd) {
        UO = dd
      }
      get buffer() {
        return UO
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function GO(dd, Od, md, Wd) {
      let Fd = dd.byteLength;
      if (Fd + 1 < 256) {
        var {
          target: Rd,
          position: Xd
        } = md(4 + Fd);
        Rd[Xd++] = 199, Rd[Xd++] = Fd + 1
      } else if (Fd + 1 < 65536) {
        var {
          target: Rd,
          position: Xd
        } = md(5 + Fd);
        Rd[Xd++] = 200, Rd[Xd++] = Fd + 1 >> 8, Rd[Xd++] = Fd + 1 & 255
      } else {
        var {
          target: Rd,
          position: Xd,
          targetView: Kd
        } = md(7 + Fd);
        Rd[Xd++] = 201, Kd.setUint32(Xd, Fd + 1), Xd += 4
      }
      Rd[Xd++] = 116, Rd[Xd++] = Od, dd.buffer || (dd = new Uint8Array(dd)), Rd.set(new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength), Xd)
    }

    function nO(dd, Od) {
      let md = dd.byteLength;
      var Wd, Fd;
      if (md < 256) {
        var {
          target: Wd,
          position: Fd
        } = Od(md + 2);
        Wd[Fd++] = 196, Wd[Fd++] = md
      } else if (md < 65536) {
        var {
          target: Wd,
          position: Fd
        } = Od(md + 3);
        Wd[Fd++] = 197, Wd[Fd++] = md >> 8, Wd[Fd++] = 255 & md
      } else {
        var {
          target: Wd,
          position: Fd,
          targetView: Rd
        } = Od(md + 5);
        Wd[Fd++] = 198, Rd.setUint32(Fd, md), Fd += 4
      }
      Wd.set(dd, Fd)
    }

    function LO(dd, Od, md, Wd) {
      let Fd = dd.length;
      switch (Fd) {
        case 1:
          Od[md++] = 212;
          break;
        case 2:
          Od[md++] = 213;
          break;
        case 4:
          Od[md++] = 214;
          break;
        case 8:
          Od[md++] = 215;
          break;
        case 16:
          Od[md++] = 216;
          break;
        default:
          Fd < 256 ? (Od[md++] = 199, Od[md++] = Fd) : Fd < 65536 ? (Od[md++] = 200, Od[md++] = Fd >> 8, Od[md++] = 255 & Fd) : (Od[md++] = 201, Od[md++] = Fd >> 24, Od[md++] = Fd >> 16 & 255, Od[md++] = Fd >> 8 & 255, Od[md++] = 255 & Fd)
      }
      return Od[md++] = Wd, Od.set(dd, md), md += Fd
    }

    function PO(dd, Od, md) {
      if (VO.length > 0) {
        BO.setUint32(VO.position + dd, uO + md - VO.position - dd), VO.stringsPosition = uO - dd;
        let Wd = VO;
        VO = null, Od(Wd[0]), Od(Wd[1])
      }
    }

    function zO(dd) {
      if (dd.Class) {
        if (!dd.pack && !dd.write) throw new Error("Extension has no pack or write function");
        if (dd.pack && !dd.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        TO.unshift(dd.Class), bO.unshift(dd)
      }! function(dd) {
        dd.unpack ? Td[dd.type] = dd.unpack : Td[dd.type] = dd
      }(dd)
    }

    function cO(dd, Od) {
      return dd.isCompatible = dd => {
        let md = !dd || (Od.lastNamedStructuresLength || 0) === dd.length;
        return md || Od._mergeStructures(dd), md
      }, dd
    }
    TO = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Yd], bO = [{
      pack(dd, Od, md) {
        let Wd = dd.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === dd.getMilliseconds()) && Wd >= 0 && Wd < 4294967296) {
          let {
            target: dd,
            targetView: md,
            position: Fd
          } = Od(6);
          dd[Fd++] = 214, dd[Fd++] = 255, md.setUint32(Fd, Wd)
        } else if (Wd > 0 && Wd < 4294967296) {
          let {
            target: md,
            targetView: Fd,
            position: Rd
          } = Od(10);
          md[Rd++] = 215, md[Rd++] = 255, Fd.setUint32(Rd, 4e6 * dd.getMilliseconds() + (Wd / 1e3 / 4294967296 | 0)), Fd.setUint32(Rd + 4, Wd)
        } else if (isNaN(Wd)) {
          if (this.onInvalidDate) return Od(0), md(this.onInvalidDate());
          let {
            target: dd,
            targetView: Wd,
            position: Fd
          } = Od(3);
          dd[Fd++] = 212, dd[Fd++] = 255, dd[Fd++] = 255
        } else {
          let {
            target: md,
            targetView: Fd,
            position: Rd
          } = Od(15);
          md[Rd++] = 199, md[Rd++] = 12, md[Rd++] = 255, Fd.setUint32(Rd, 1e6 * dd.getMilliseconds()), Fd.setBigInt64(Rd + 4, BigInt(Math.floor(Wd)))
        }
      }
    }, {
      pack(dd, Od, md) {
        if (this.setAsEmptyObject) return Od(0), md({});
        let Wd = Array.from(dd),
          {
            target: Fd,
            position: Rd
          } = Od(this.moreTypes ? 3 : 0);
        this.moreTypes && (Fd[Rd++] = 212, Fd[Rd++] = 115, Fd[Rd++] = 0), md(Wd)
      }
    }, {
      pack(dd, Od, md) {
        let {
          target: Wd,
          position: Fd
        } = Od(this.moreTypes ? 3 : 0);
        this.moreTypes && (Wd[Fd++] = 212, Wd[Fd++] = 101, Wd[Fd++] = 0), md([dd.name, dd.message, dd.cause])
      }
    }, {
      pack(dd, Od, md) {
        let {
          target: Wd,
          position: Fd
        } = Od(this.moreTypes ? 3 : 0);
        this.moreTypes && (Wd[Fd++] = 212, Wd[Fd++] = 120, Wd[Fd++] = 0), md([dd.source, dd.flags])
      }
    }, {
      pack(dd, Od) {
        this.moreTypes ? GO(dd, 16, Od) : nO(wO ? Buffer.from(dd) : new Uint8Array(dd), Od)
      }
    }, {
      pack(dd, Od) {
        let md = dd.constructor;
        md !== EO && this.moreTypes ? GO(dd, FO.indexOf(md.name), Od) : nO(dd, Od)
      }
    }, {
      pack(dd, Od) {
        let {
          target: md,
          position: Wd
        } = Od(1);
        md[Wd] = 193
      }
    }];
    let jO = new rO({
      useRecords: !1
    });
    const DO = jO.pack,
      eO = jO.pack,
      IO = rO,
      {
        NEVER: lO,
        ALWAYS: CO,
        DECIMAL_ROUND: ZO,
        DECIMAL_FIT: kO
      } = HO,
      fO = 512,
      MO = 1024,
      dm = 2048;
    const Om = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!dd || "object" !== typeof dd) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const md = new Bd(Od);
        let Wd;
        const Fd = dd => {
          let Od;
          Wd && (dd = Buffer.concat([Wd, dd]), Wd = void 0);
          try {
            Od = md.unpackMultiple(dd)
          } catch (Fd) {
            if (!Fd.incomplete) throw Fd;
            Wd = dd.slice(Fd.lastPosition), Od = Fd.values
          }
          return Od
        };
        return "function" === typeof dd[Symbol.iterator] ? function*() {
          for (const Od of dd) yield* Fd(Od)
        }() : "function" === typeof dd[Symbol.asyncIterator] ? async function*() {
          for await (const Od of dd) yield* Fd(Od)
        }(): void 0
      },
      mm = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (dd && "object" === typeof dd) {
          if ("function" === typeof dd[Symbol.iterator]) return function*(dd, Od) {
            const md = new rO(Od);
            for (const Wd of dd) yield md.pack(Wd)
          }(dd, Od);
          if ("function" === typeof dd.then || "function" === typeof dd[Symbol.asyncIterator]) return async function*(dd, Od) {
            const md = new rO(Od);
            for await (const Wd of dd) yield md.pack(Wd)
          }(dd, Od);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Wm = !1,
      Fm = !0
  },
  10329: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      $changes: () => Hd,
      $childType: () => yd,
      $decoder: () => Qd,
      $deleteByIndex: () => Nd,
      $encoder: () => vd,
      $filter: () => td,
      $getByIndex: () => od,
      $numFields: () => xd,
      $refId: () => Kd,
      $track: () => hd,
      $values: () => gd,
      ArraySchema: () => RW,
      Callbacks: () => RF,
      ChangeTree: () => Vm,
      CollectionSchema: () => hW,
      Decoder: () => kW,
      Encoder: () => IW,
      FieldBuilder: () => tW,
      MapSchema: () => KW,
      Metadata: () => ZO,
      OPERATION: () => Fd,
      Reflection: () => OF,
      ReflectionField: () => MW,
      ReflectionType: () => dF,
      Root: () => iW,
      Schema: () => uW,
      SetSchema: () => vW,
      StateCallbackStrategy: () => FF,
      StateView: () => LW,
      StreamSchema: () => QW,
      TypeContext: () => cO,
      createPool: () => KF,
      decode: () => gO,
      decodeKeyValueOperation: () => Mm,
      decodeSchemaOperation: () => fm,
      defineCustomTypes: () => JO,
      defineTypes: () => BW,
      deprecated: () => UW,
      dumpChanges: () => sW,
      encode: () => WO,
      encodeArray: () => zm,
      encodeIndexedEntry: () => Lm,
      encodeKeyValueOperation: () => Pm,
      encodeMapEntry: () => nm,
      encodeSchemaOperation: () => Gm,
      xq: () => TW,
      fullStateOnly: () => wW,
      getDecoderStateCallbacks: () => mF,
      getEncodeDescriptor: () => mm,
      getRawChangesCallback: () => WF,
      isBuilder: () => oW,
      patchOnly: () => gW,
      registerType: () => EO,
      schema: () => SW,
      t: () => yW,
      type: () => aW,
      unreliable: () => YW,
      view: () => pW
    });
    const Wd = 255;
    var Fd;

    function Rd(dd) {
      Object.defineProperty(dd, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(dd) {
      dd[dd.ADD = 128] = "ADD", dd[dd.REPLACE = 0] = "REPLACE", dd[dd.DELETE = 64] = "DELETE", dd[dd.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", dd[dd.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", dd[dd.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", dd[dd.CLEAR = 10] = "CLEAR", dd[dd.REVERSE = 15] = "REVERSE", dd[dd.MOVE = 32] = "MOVE", dd[dd.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", dd[dd.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Fd || (Fd = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Xd = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const dd = "colyseus.symbolRegistry",
        Od = Xd[dd] || (Xd[dd] = Object.create(null));
      Symbol.for = function(dd) {
        return Od[dd] || (Od[dd] = Symbol(dd))
      }, Symbol.keyFor = function(dd) {
        for (const md in Od)
          if (Od[md] === dd) return md
      }
    }
    const Kd = Symbol.for("$refId"),
      hd = "~track",
      vd = "~encoder",
      Qd = "~decoder",
      td = "~filter",
      od = "~getByIndex",
      Nd = "~deleteByIndex",
      qd = "~resyncPrune",
      Hd = Symbol.for("$changes"),
      yd = Symbol.for("$childType"),
      bd = Symbol.for("$proxyTarget"),
      Td = "~onEncodeEnd",
      pd = "~reset",
      Yd = "~onDecodeEnd",
      gd = Symbol.for("$values"),
      wd = "~builder",
      Ed = "~descriptors",
      Jd = "~__encodeDescriptor",
      Ud = "~encoders",
      xd = "~__numFields",
      Bd = "~__refTypeFieldIndexes",
      Sd = "~__viewFieldIndexes",
      sd = "$__fieldIndexesByViewTag",
      ud = "~__unreliableFieldIndexes",
      Vd = "~__patchOnlyFieldIndexes",
      Ad = "~__fullSyncSkipIndexes",
      rd = "~__fullStateOnlyFieldIndexes",
      Gd = "~__streamFieldIndexes",
      nd = "~__streamPriorities";
    let Ld;
    try {
      Ld = new TextEncoder
    } catch (hF) {}
    const Pd = new ArrayBuffer(8),
      zd = new Int32Array(Pd),
      cd = new Float32Array(Pd),
      jd = new Float64Array(Pd),
      Dd = new BigInt64Array(Pd),
      ed = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(dd, Od) {
        for (var md = 0, Wd = 0, Fd = 0, Rd = dd.length; Fd < Rd; Fd++)(md = dd.charCodeAt(Fd)) < 128 ? Wd += 1 : md < 2048 ? Wd += 2 : md < 55296 || md >= 57344 ? Wd += 3 : (Fd++, Wd += 4);
        return Wd
      };

    function Id(dd, Od, md) {
      for (var Wd = 0, Fd = 0, Rd = Od.length; Fd < Rd; Fd++)(Wd = Od.charCodeAt(Fd)) < 128 ? dd[md.offset++] = Wd : Wd < 2048 ? (dd[md.offset] = 192 | Wd >> 6, dd[md.offset + 1] = 128 | 63 & Wd, md.offset += 2) : Wd < 55296 || Wd >= 57344 ? (dd[md.offset] = 224 | Wd >> 12, dd[md.offset + 1] = 128 | Wd >> 6 & 63, dd[md.offset + 2] = 128 | 63 & Wd, md.offset += 3) : (Fd++, Wd = 65536 + ((1023 & Wd) << 10 | 1023 & Od.charCodeAt(Fd)), dd[md.offset] = 240 | Wd >> 18, dd[md.offset + 1] = 128 | Wd >> 12 & 63, dd[md.offset + 2] = 128 | Wd >> 6 & 63, dd[md.offset + 3] = 128 | 63 & Wd, md.offset += 4)
    }

    function ld(dd, Od, md) {
      dd[md.offset++] = 255 & Od
    }

    function Cd(dd, Od, md) {
      dd[md.offset++] = 255 & Od, dd[md.offset++] = Od >> 8 & 255
    }

    function Zd(dd, Od, md) {
      dd[md.offset++] = 255 & Od, dd[md.offset++] = Od >> 8 & 255
    }

    function kd(dd, Od, md) {
      dd[md.offset++] = 255 & Od, dd[md.offset++] = Od >> 8 & 255, dd[md.offset++] = Od >> 16 & 255, dd[md.offset++] = Od >> 24 & 255
    }

    function fd(dd, Od, md) {
      const Wd = Od >> 24,
        Fd = Od >> 16,
        Rd = Od >> 8,
        Xd = Od;
      dd[md.offset++] = 255 & Xd, dd[md.offset++] = 255 & Rd, dd[md.offset++] = 255 & Fd, dd[md.offset++] = 255 & Wd
    }

    function Md(dd, Od, md) {
      const Wd = Math.floor(Od / Math.pow(2, 32));
      fd(dd, Od >>> 0, md), fd(dd, Wd, md)
    }

    function dO(dd, Od, md) {
      const Wd = Od / Math.pow(2, 32) | 0;
      fd(dd, Od >>> 0, md), fd(dd, Wd, md)
    }

    function OO(dd, Od, md) {
      cd[0] = Od, kd(dd, zd[0], md)
    }

    function mO(dd, Od, md) {
      jd[0] = Od, kd(dd, zd[0], md), kd(dd, zd[1], md)
    }
    const WO = {
        int8: ld,
        uint8: function(dd, Od, md) {
          dd[md.offset++] = 255 & Od
        },
        int16: Cd,
        uint16: Zd,
        int32: kd,
        uint32: fd,
        int64: Md,
        uint64: dO,
        bigint64: function(dd, Od, md) {
          Dd[0] = BigInt.asIntN(64, Od), kd(dd, zd[0], md), kd(dd, zd[1], md)
        },
        biguint64: function(dd, Od, md) {
          Dd[0] = BigInt.asIntN(64, Od), kd(dd, zd[0], md), kd(dd, zd[1], md)
        },
        float32: OO,
        float64: mO,
        boolean: function(dd, Od, md) {
          dd[md.offset++] = Od ? 1 : 0
        },
        string: function(dd, Od, md) {
          Od || (Od = "");
          let Wd = ed(Od, "utf8"),
            Fd = 0;
          if (Wd < 32) dd[md.offset++] = 160 | Wd, Fd = 1;
          else if (Wd < 256) dd[md.offset++] = 217, dd[md.offset++] = Wd, Fd = 2;
          else if (Wd < 65536) dd[md.offset++] = 218, Zd(dd, Wd, md), Fd = 3;
          else {
            if (!(Wd < 4294967296)) throw new Error("String too long");
            dd[md.offset++] = 219, fd(dd, Wd, md), Fd = 5
          }
          return Id(dd, Od, md), Fd + Wd
        },
        number: function dd(Od, md, Wd) {
          return isNaN(md) ? dd(Od, 0, Wd) : isFinite(md) ? md !== (0 | md) ? Math.abs(md) <= 34028235e31 && (cd[0] = md, Math.abs(Math.abs(cd[0]) - Math.abs(md)) < 1e-4) ? (Od[Wd.offset++] = 202, OO(Od, md, Wd), 5) : (Od[Wd.offset++] = 203, mO(Od, md, Wd), 9) : md >= 0 ? md < 128 ? (Od[Wd.offset++] = 255 & md, 1) : md < 256 ? (Od[Wd.offset++] = 204, Od[Wd.offset++] = 255 & md, 2) : md < 65536 ? (Od[Wd.offset++] = 205, Zd(Od, md, Wd), 3) : md < 4294967296 ? (Od[Wd.offset++] = 206, fd(Od, md, Wd), 5) : (Od[Wd.offset++] = 207, dO(Od, md, Wd), 9) : md >= -32 ? (Od[Wd.offset++] = 224 | md + 32, 1) : md >= -128 ? (Od[Wd.offset++] = 208, ld(Od, md, Wd), 2) : md >= -32768 ? (Od[Wd.offset++] = 209, Cd(Od, md, Wd), 3) : md >= -2147483648 ? (Od[Wd.offset++] = 210, kd(Od, md, Wd), 5) : (Od[Wd.offset++] = 211, Md(Od, md, Wd), 9) : dd(Od, md > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Wd)
        },
        utf8Write: Id,
        utf8Length: ed
      },
      FO = new ArrayBuffer(8),
      RO = new Int32Array(FO),
      XO = new Float32Array(FO),
      KO = new Float64Array(FO),
      hO = new BigUint64Array(FO),
      vO = new BigInt64Array(FO);

    function QO(dd, Od, md) {
      md > dd.length - Od.offset && (md = dd.length - Od.offset);
      for (var Wd = "", Fd = 0, Rd = Od.offset, Xd = Od.offset + md; Rd < Xd; Rd++) {
        var Kd = dd[Rd];
        if (0 !== (128 & Kd))
          if (192 !== (224 & Kd))
            if (224 !== (240 & Kd)) {
              if (240 !== (248 & Kd)) {
                console.error("decode.utf8Read(): Invalid byte " + Kd + " at offset " + Rd + ". Skip to end of string: " + (Od.offset + md));
                break
              }(Fd = (7 & Kd) << 18 | (63 & dd[++Rd]) << 12 | (63 & dd[++Rd]) << 6 | 63 & dd[++Rd]) >= 65536 ? (Fd -= 65536, Wd += String.fromCharCode(55296 + (Fd >>> 10), 56320 + (1023 & Fd))) : Wd += String.fromCharCode(Fd)
            } else Wd += String.fromCharCode((15 & Kd) << 12 | (63 & dd[++Rd]) << 6 | 63 & dd[++Rd]);
        else Wd += String.fromCharCode((31 & Kd) << 6 | 63 & dd[++Rd]);
        else Wd += String.fromCharCode(Kd)
      }
      return Od.offset += md, Wd
    }

    function tO(dd, Od) {
      return oO(dd, Od) << 24 >> 24
    }

    function oO(dd, Od) {
      return dd[Od.offset++]
    }

    function NO(dd, Od) {
      return qO(dd, Od) << 16 >> 16
    }

    function qO(dd, Od) {
      return dd[Od.offset++] | dd[Od.offset++] << 8
    }

    function HO(dd, Od) {
      return dd[Od.offset++] | dd[Od.offset++] << 8 | dd[Od.offset++] << 16 | dd[Od.offset++] << 24
    }

    function yO(dd, Od) {
      return HO(dd, Od) >>> 0
    }

    function bO(dd, Od) {
      return RO[0] = HO(dd, Od), XO[0]
    }

    function TO(dd, Od) {
      return RO[0] = HO(dd, Od), RO[1] = HO(dd, Od), KO[0]
    }

    function pO(dd, Od) {
      const md = yO(dd, Od);
      return HO(dd, Od) * Math.pow(2, 32) + md
    }

    function YO(dd, Od) {
      const md = yO(dd, Od);
      return yO(dd, Od) * Math.pow(2, 32) + md
    }
    const gO = {
        utf8Read: QO,
        int8: tO,
        uint8: oO,
        int16: NO,
        uint16: qO,
        int32: HO,
        uint32: yO,
        float32: bO,
        float64: TO,
        int64: pO,
        uint64: YO,
        bigint64: function(dd, Od) {
          return RO[0] = HO(dd, Od), RO[1] = HO(dd, Od), vO[0]
        },
        biguint64: function(dd, Od) {
          return RO[0] = HO(dd, Od), RO[1] = HO(dd, Od), hO[0]
        },
        boolean: function(dd, Od) {
          return oO(dd, Od) > 0
        },
        string: function(dd, Od) {
          const md = dd[Od.offset++];
          let Wd;
          return md < 192 ? Wd = 31 & md : 217 === md ? Wd = oO(dd, Od) : 218 === md ? Wd = qO(dd, Od) : 219 === md && (Wd = yO(dd, Od)), QO(dd, Od, Wd)
        },
        number: function(dd, Od) {
          const md = dd[Od.offset++];
          return md < 128 ? md : 202 === md ? bO(dd, Od) : 203 === md ? TO(dd, Od) : 204 === md ? oO(dd, Od) : 205 === md ? qO(dd, Od) : 206 === md ? yO(dd, Od) : 207 === md ? YO(dd, Od) : 208 === md ? tO(dd, Od) : 209 === md ? NO(dd, Od) : 210 === md ? HO(dd, Od) : 211 === md ? pO(dd, Od) : md > 223 ? -1 * (255 - md + 1) : void 0
        },
        stringCheck: function(dd, Od) {
          const md = dd[Od.offset];
          return md < 192 && md > 160 || 217 === md || 218 === md || 219 === md
        }
      },
      wO = {},
      aO = new Map;

    function EO(dd, Od) {
      Od.constructor && (Object.prototype.hasOwnProperty.call(Od, "constructor") && null == Od.constructor[Symbol.metadata] && Rd(Od.constructor), aO.set(Od.constructor, dd), wO[dd] = Od), Od.encode && (WO[dd] = Od.encode), Od.decode && (gO[dd] = Od.decode)
    }

    function JO(dd) {
      for (const Od in dd) EO(Od, dd[Od]);
      return dd => aW(dd)
    }
    const UO = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function xO() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function BO(dd) {
      return dd._stream ??= xO()
    }

    function SO(dd, Od, md) {
      0 === Od.activeViews.size && BO(dd).broadcastPending.add(md)
    }

    function sO(dd, Od, md, Wd) {
      const Rd = dd._stream;
      if (void 0 === Rd) return !0;
      let Xd = !1;
      return Rd.broadcastPending.delete(Wd) ? Xd = !0 : Rd.sentBroadcast.delete(Wd) && Rd.broadcastDeletes.add(Wd), Od.forEachActiveView((dd => {
        const Od = Rd.pendingByView.get(dd.id);
        if (Od?.has(Wd)) return Od.delete(Wd), void(Xd = !0);
        const Kd = Rd.sentByView.get(dd.id);
        if (Kd?.has(Wd)) {
          Kd.delete(Wd);
          let Od = dd.changes.get(md);
          void 0 === Od && (Od = new Map, dd.changes.set(md, Od)), Od.set(Wd, Fd.DELETE)
        }
      })), Xd
    }

    function uO(dd, Od) {
      const md = dd._stream?.pendingByView;
      if (void 0 === md) return !1;
      for (const [Wd, Fd] of md)
        if (Fd.size > 0 && void 0 !== Od.activeViews.get(Wd)?.deref()) return !0;
      return !1
    }

    function VO(dd) {
      const Od = dd._stream;
      return void 0 !== Od && (Od.broadcastPending.size > 0 || Od.broadcastDeletes.size > 0)
    }

    function iO(dd, Od, md) {
      const Wd = BO(dd);
      let Fd = Wd.pendingByView.get(Od);
      void 0 === Fd && (Fd = new Set, Wd.pendingByView.set(Od, Fd)), Fd.add(md)
    }

    function AO(dd, Od) {
      const md = dd._stream;
      void 0 !== md && (md.pendingByView.delete(Od), md.sentByView.delete(Od), md.priorityByView?.delete(Od))
    }
    const rO = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function GO(dd) {
      if (null == dd || "object" !== typeof dd) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: Od,
        max: md
      } = dd;
      if ("number" !== typeof Od || "number" !== typeof md || !(md > Od) || !Number.isFinite(Od) || !Number.isFinite(md)) throw new Error(`t.quantized(): require finite min < max (got min=${Od}, max=${md}).`);
      const Wd = dd.bits ?? 16;
      if (8 !== Wd && 16 !== Wd && 32 !== Wd) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Wd}).`);
      const Fd = dd.mode ?? "clamp";
      if ("clamp" !== Fd && "wrap" !== Fd) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Fd)}).`);
      const Rd = "wrap" === Fd,
        Xd = Math.pow(2, Wd);
      return {
        min: Od,
        max: md,
        bits: Wd,
        wrap: Rd,
        wire: rO[Wd],
        range: md - Od,
        span: Rd ? Xd : Od === -md ? Xd - 2 : Xd - 1
      }
    }

    function nO(dd) {
      return null !== dd && "object" === typeof dd && void 0 !== dd.quantized
    }

    function LO(dd, Od) {
      if (dd.wrap) {
        if (!Number.isFinite(Od)) return 0;
        const md = dd.range;
        let Wd = (Od - dd.min) % md;
        Wd < 0 && (Wd += md);
        const Fd = dd.span;
        return Math.floor(Wd / md * Fd + .5) % Fd
      }
      if (Od !== Od) return 0;
      const md = Od < dd.min ? dd.min : Od > dd.max ? dd.max : Od;
      return Math.floor((md - dd.min) / dd.range * dd.span + .5)
    }

    function PO(dd, Od) {
      return dd.min + Od / dd.span * dd.range
    }

    function zO(dd) {
      const Od = WO[dd.wire];
      return (md, Wd, Fd) => Od(md, LO(dd, Wd), Fd)
    }
    class cO {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(dd) {
        const Od = Object.getPrototypeOf(dd);
        if (Od !== uW) {
          let md = cO.inheritedTypes.get(Od);
          md || (md = new Set, cO.inheritedTypes.set(Od, md)), md.add(dd)
        }
      }
      static cache(dd) {
        let Od = cO.cachedContexts.get(dd);
        return Od || (Od = new cO(dd), cO.cachedContexts.set(dd, Od)), Od
      }
      constructor(dd) {
        dd && this.discoverTypes(dd)
      }
      has(dd) {
        return this.schemas.has(dd)
      }
      get(dd) {
        return this.types[dd]
      }
      add(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(dd) && (this.types[Od] = dd, null == dd[Symbol.metadata] && ZO.initialize(dd), this.schemas.set(dd, Od), !0)
      }
      getTypeId(dd) {
        return this.schemas.get(dd)
      }
      discoverTypes(dd) {
        if (!this.add(dd)) return;
        cO.inheritedTypes.get(dd)?.forEach((dd => {
          this.discoverTypes(dd)
        }));
        let Od = dd;
        for (;
          (Od = Object.getPrototypeOf(Od)) && Od !== uW && Od !== Function.prototype;) this.discoverTypes(Od);
        const md = dd[Symbol.metadata];
        (md[Sd] || md[Gd]) && (this.hasFilters = !0);
        for (const Wd in md) {
          const dd = md[Wd].type;
          if ("string" !== typeof dd && !nO(dd))
            if ("function" === typeof dd) this.discoverTypes(dd);
            else {
              const Od = Object.values(dd)[0];
              if ("string" === typeof Od) continue;
              this.discoverTypes(Od)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function jO(dd) {
      const Od = eO(dd);
      return Od ? {
        complexTypeKlass: wO[Od],
        childType: dd[Od]
      } : {
        complexTypeKlass: !1,
        childType: dd
      }
    }

    function DO(dd, Od) {
      const md = IO(dd),
        Wd = eO(md),
        Fd = Wd && eO(md[Wd]);
      if (Fd) throw new Error(`${Od?`${Od}: `:""}@colyseus/schema: nested collections are not supported ("${Wd}" of "${Fd}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Fd} in a Schema class.`);
      return md
    }

    function eO(dd) {
      return "object" === typeof dd && null !== dd ? Object.keys(dd).find((dd => void 0 !== wO[dd])) : void 0
    }

    function IO(dd) {
      if ("object" !== typeof dd || null === dd) return dd;
      if (Array.isArray(dd)) return {
        array: IO(dd[0])
      };
      const Od = function(dd) {
        const Od = Object.keys(dd),
          md = Od.filter((dd => /\d+/.test(dd)));
        if (md.length > 0 && md.length === Od.length / 2 && dd[dd[md[0]]] == md[0]) return "number";
        if (Od.length > 0 && Od.every((Od => dd[Od] === Od))) return "string"
      }(dd);
      if (Od) return Od;
      if (nO(dd)) return "string" === typeof dd.quantized.wire ? dd : {
        quantized: GO(dd.quantized)
      };
      if (void 0 !== dd.type) return IO(dd.type);
      const md = eO(dd);
      return md && (dd[md] = IO(dd[md])), dd
    }
    const lO = [Bd, ud, Vd, Ad, rd, Gd, Ud];

    function CO(dd, Od, md) {
      dd[Od] || Object.defineProperty(dd, Od, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), dd[Od].push(md)
    }
    const ZO = {
        addField(dd, Od, md, Wd, Fd) {
          if (Od >= 63) throw new Error(`Can't define field '${md}'.\nSchema instances may only have up to 63 fields.`);
          dd[Od] = Object.assign(dd[Od] || {}, {
            type: Wd,
            index: Od,
            name: md
          }), Object.defineProperty(dd, Ed, {
            value: dd[Ed] || {},
            enumerable: !1,
            configurable: !0
          }), dd[Ed][md] = Fd || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(dd, xd, {
            value: Od,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(dd, md, {
            value: Od,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof dd[Od].type || nO(dd[Od].type) || (void 0 === dd[Bd] && Object.defineProperty(dd, Bd, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), dd[Bd].push(Od));
          const Rd = dd[Od].type;
          if (Rd && "object" === typeof Rd && void 0 !== Rd.stream) {
            if (void 0 !== Rd.array) throw new Error(UO);
            dd[Od].stream = !0, dd[Gd] || Object.defineProperty(dd, Gd, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), dd[Gd].includes(Od) || dd[Gd].push(Od);
            const Fd = Wd?.priority;
            "function" === typeof Fd && ZO.setStreamPriority(dd, md, Fd)
          }
        },
        setTag(dd, Od, md) {
          const Wd = dd[Od];
          if (dd[Wd].tag = md, dd[Sd] || (Object.defineProperty(dd, Sd, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(dd, sd, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), dd[Sd].push(Wd), md < 0) dd[sd][md] || (dd[sd][md] = []), dd[sd][md].push(Wd);
          else
            for (let Fd = md; Fd > 0; Fd &= Fd - 1) {
              const Od = Fd & -Fd;
              dd[sd][Od] || (dd[sd][Od] = []), dd[sd][Od].push(Wd)
            }
        },
        setUnreliable(dd, Od) {
          const md = dd[Od];
          if ("string" !== typeof dd[md].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Od}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          dd[md].unreliable = !0, dd[ud] || Object.defineProperty(dd, ud, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), dd[ud].push(md)
        },
        setPatchOnly(dd, Od) {
          const md = dd[Od];
          if (dd[md].fullStateOnly) throw new Error(`field "${Od}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          dd[md].patchOnly = !0, CO(dd, Vd, md), CO(dd, Ad, md)
        },
        setDeprecated(dd, Od) {
          const md = dd[Od];
          dd[md].deprecated = !0, CO(dd, Ad, md), Object.defineProperty(dd, md, {
            value: dd[md],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(dd, Od) {
          const md = dd[Od];
          if (dd[md].patchOnly) throw new Error(`field "${Od}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          dd[md].fullStateOnly = !0, CO(dd, rd, md)
        },
        setStream(dd, Od) {
          const md = dd[Od];
          dd[md].stream = !0, dd[Gd] || Object.defineProperty(dd, Gd, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), dd[Gd].push(md)
        },
        setStreamPriority(dd, Od, md) {
          const Wd = dd[Od];
          dd[nd] || Object.defineProperty(dd, nd, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), dd[nd][Wd] = md
        },
        getStreamPriority: (dd, Od) => dd?.[nd]?.[Od],
        defineField(dd, Od, md, Wd, Fd) {
          const Rd = DO(Fd, `${dd.name}.${Wd}`),
            {
              complexTypeKlass: Xd,
              childType: Kd
            } = jO(Rd);
          ZO.addField(Od, md, Wd, Rd, JW(Wd, md, Kd, Xd)), Od[Ed][Wd] && Object.defineProperty(dd.prototype, Wd, Od[Ed][Wd]), ("string" === typeof Rd || nO(Rd)) && (Od[Ud] || Object.defineProperty(Od, Ud, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Od[Ud][md] = "string" === typeof Rd ? WO[Rd] : zO(Rd.quantized))
        },
        setFields(dd, Od) {
          const md = dd.prototype.constructor;
          cO.register(md);
          const Wd = Object.getPrototypeOf(md),
            Fd = Wd && Wd[Symbol.metadata],
            Rd = ZO.initialize(md);
          md[hd] || (md[hd] = uW[hd]), md[vd] || (md[vd] = uW[vd]), md[Qd] || (md[Qd] = uW[Qd]), md.prototype.toJSON || (md.prototype.toJSON = uW.prototype.toJSON);
          let Xd = Rd[xd] ?? (Fd && Fd[xd]) ?? -1;
          Xd++, Rd[Ud] || Object.defineProperty(Rd, Ud, {
            value: Fd?.[Ud] ? [...Fd[Ud]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const Kd in Od) {
            if (void 0 !== Rd[Kd]) throw new Error(`@colyseus/schema: Duplicate '${Kd}' definition on '${md.name||"(anonymous)"}'.`);
            ZO.defineField(md, Rd, Xd, Kd, Od[Kd]), Xd++
          }
          return dd
        },
        isDeprecated: (dd, Od) => !0 === dd[Od].deprecated,
        initialize(dd) {
          const Od = Object.getPrototypeOf(dd),
            md = Od[Symbol.metadata];
          let Wd = dd[Symbol.metadata] ?? Object.create(null);
          if (Od !== uW && Wd === md && (Wd = Object.create(null), md)) {
            Object.setPrototypeOf(Wd, md), Object.defineProperty(Wd, xd, {
              value: md[xd],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== md[Sd] && (Object.defineProperty(Wd, Sd, {
              value: [...md[Sd]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Wd, sd, {
              value: {
                ...md[sd]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const dd of lO) {
              const Od = md[dd];
              void 0 !== Od && Object.defineProperty(Wd, dd, {
                value: [...Od],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Wd, Ed, {
              value: {
                ...md[Ed]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(dd, Symbol.metadata, {
            value: Wd,
            writable: !1,
            configurable: !0
          }), Wd
        },
        isValidInstance: dd => dd.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(dd.constructor[Symbol.metadata], xd),
        getFields(dd) {
          const Od = dd[Symbol.metadata],
            md = {};
          for (let Wd = 0; Wd <= Od[xd]; Wd++) md[Od[Wd].name] = Od[Wd].type;
          return md
        },
        hasViewTagAtIndex: (dd, Od) => dd?.[Sd]?.includes(Od),
        hasUnreliableAtIndex: (dd, Od) => dd?.[ud]?.includes(Od),
        hasPatchOnlyAtIndex: (dd, Od) => dd?.[Vd]?.includes(Od),
        hasFullStateOnlyAtIndex: (dd, Od) => dd?.[rd]?.includes(Od),
        hasStreamAtIndex: (dd, Od) => dd?.[Gd]?.includes(Od)
      },
      kO = (dd, Od, md) => dd(Od, md);
    class fO {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(dd) {
        this.ops = new Uint8Array(Math.max(dd + 1, 1))
      }
      record(dd, Od) {
        const md = this.ops[dd];
        0 === md ? this.ops[dd] = Od : (md === Fd.DELETE || md === Fd.ADD && Od === Fd.DELETE_AND_ADD) && (this.ops[dd] = Fd.DELETE_AND_ADD), dd < 32 ? this.dirtyLow |= 1 << dd : this.dirtyHigh |= 1 << dd - 32
      }
      recordDelete(dd, Od) {
        this.ops[dd] = Od, dd < 32 ? this.dirtyLow |= 1 << dd : this.dirtyHigh |= 1 << dd - 32
      }
      recordRaw(dd, Od) {
        this.record(dd, Od)
      }
      operationAt(dd) {
        const Od = this.ops[dd];
        return 0 === Od ? void 0 : Od
      }
      setOperationAt(dd, Od) {
        this.ops[dd] = Od
      }
      forEach(dd) {
        this.forEachWithCtx(dd, kO)
      }
      forEachWithCtx(dd, Od) {
        let md = this.dirtyLow,
          Wd = this.dirtyHigh;
        const Fd = this.ops;
        for (; 0 !== md;) {
          const Wd = md & -md,
            Rd = 31 - Math.clz32(Wd);
          md ^= Wd, Od(dd, Rd, Fd[Rd])
        }
        for (; 0 !== Wd;) {
          const md = Wd & -Wd,
            Rd = 31 - Math.clz32(md) + 32;
          Wd ^= md, Od(dd, Rd, Fd[Rd])
        }
      }
      size() {
        return dm(this.dirtyLow) + dm(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class MO {
      dH = new Map;
      pureOps = [];
      record(dd, Od) {
        const md = this.dH.get(dd);
        void 0 === md ? this.dH.set(dd, Od) : (md === Fd.DELETE || md === Fd.ADD && Od === Fd.DELETE_AND_ADD) && this.dH.set(dd, Fd.DELETE_AND_ADD)
      }
      recordDelete(dd, Od) {
        this.dH.set(dd, Od)
      }
      recordRaw(dd, Od) {
        this.dH.set(dd, Od)
      }
      recordPure(dd) {
        this.pureOps.push([this.dH.size, dd])
      }
      operationAt(dd) {
        return this.dH.get(dd)
      }
      setOperationAt(dd, Od) {
        this.dH.has(dd) && this.dH.set(dd, Od)
      }
      forEach(dd) {
        this.forEachWithCtx(dd, kO)
      }
      forEachWithCtx(dd, Od) {
        const md = this.pureOps;
        if (md.length > 0) {
          let Wd = 0,
            Fd = 0;
          for (const [Rd, Xd] of this.dH) {
            for (; Wd < md.length && md[Wd][0] <= Fd;) {
              const Fd = md[Wd++][1];
              Od(dd, -Fd, Fd)
            }
            Od(dd, Rd, Xd), Fd++
          }
          for (; Wd < md.length;) {
            const Fd = md[Wd++][1];
            Od(dd, -Fd, Fd)
          }
        } else
          for (const [Wd, Fd] of this.dH) Od(dd, Wd, Fd)
      }
      size() {
        return this.dH.size + this.pureOps.length
      }
      has() {
        return this.dH.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.dH.clear(), this.pureOps.length = 0
      }
      shift(dd) {
        const Od = new Map;
        for (const [md, Wd] of this.dH) Od.set(md + dd, Wd);
        this.dH = Od
      }
    }

    function dm(dd) {
      return 16843009 * ((dd = (858993459 & (dd -= dd >>> 1 & 1431655765)) + (dd >>> 2 & 858993459)) + (dd >>> 4) & 252645135) >>> 24
    }

    function Om(dd) {
      if (void 0 === dd) return 0;
      let Od = 0;
      for (let md = 0, Wd = dd.length; md < Wd; md++) {
        const Wd = dd[md];
        Wd < 32 && (Od |= 1 << Wd)
      }
      return Od
    }

    function mm(dd) {
      const Od = dd.constructor;
      if (Object.prototype.hasOwnProperty.call(Od, Jd)) return Od[Jd];
      const md = Od[Symbol.metadata],
        Wd = ZO.isValidInstance(dd),
        Fd = (md?.[Sd]?.length ?? 0) > 0,
        Rd = function(dd) {
          const Od = [],
            md = [],
            Wd = [],
            Fd = [],
            Rd = dd?.[xd];
          if (void 0 === Rd) return {
            names: Od,
            types: md,
            tags: Wd,
            encoders: Fd
          };
          const Xd = dd[Ud];
          for (let Kd = 0; Kd <= Rd; Kd++) {
            const Rd = dd[Kd];
            void 0 !== Rd ? (Od[Kd] = Rd.name, md[Kd] = Rd.type, Wd[Kd] = Rd.tag, Fd[Kd] = Xd?.[Kd]) : (Od[Kd] = void 0, md[Kd] = void 0, Wd[Kd] = void 0, Fd[Kd] = void 0)
          }
          return {
            names: Od,
            types: md,
            tags: Wd,
            encoders: Fd
          }
        }(md),
        Xd = Wd && !Fd ? void 0 : Od[td],
        Kd = {
          encoder: Od[vd],
          filter: Xd,
          metadata: md,
          isSchema: Wd,
          filterBitmask: Wd ? Om(md?.[Sd]) : 0,
          hasAnyFullStateOnly: (md?.[rd]?.length ?? 0) > 0,
          hasAnyUnreliable: (md?.[ud]?.length ?? 0) > 0,
          hasAnyStream: (md?.[Gd]?.length ?? 0) > 0,
          hasAnyView: Fd,
          fullStateOnlyBitmask: Om(md?.[rd]),
          unreliableBitmask: Om(md?.[ud]),
          streamBitmask: Om(md?.[Gd]),
          names: Rd.names,
          types: Rd.types,
          tags: Rd.tags,
          encoders: Rd.encoders
        };
      return Object.defineProperty(Od, Jd, {
        value: Kd,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), Kd
    }

    function Wm(dd, Od) {
      if (void 0 !== dd.parentRef && Od(dd.parentRef, dd._parentIndex)) return !0;
      for (let md = dd.extraParents; void 0 !== md; md = md.next)
        if (Od(md.ref, md.index)) return !0;
      return !1
    }
    const Fm = (dd, Od) => {
        dd.isFieldUnreliable(Od) ? dd.ensureUnreliableRecorder().record(Od, Fd.ADD) : dd.record(Od, Fd.ADD)
      },
      Rm = (dd, Od) => dd(Od);

    function Xm(dd, Od, md) {
      const Wd = dd.refTarget;
      if (void 0 !== Wd[yd]) {
        if (dd.isPatchOnly) return;
        if (Array.isArray(Wd.items)) {
          const dd = Wd.items;
          for (let Wd = 0, Fd = dd.length; Wd < Fd; Wd++) void 0 !== dd[Wd] && md(Od, Wd)
        } else if (void 0 !== Wd.journal)
          for (const [dd, Fd] of Wd.journal.keyByIndex) Wd.$items.has(Fd) && md(Od, dd);
        else if (void 0 !== Wd.$items)
          for (const dd of Wd.$items.keys()) md(Od, dd)
      } else {
        const Fd = dd.metadata;
        if (!Fd) return;
        const Rd = Fd[xd] ?? -1,
          Xd = Fd[Ad],
          Kd = dd.encDescriptor.names;
        for (let dd = 0; dd <= Rd; dd++) {
          const Fd = Kd[dd];
          if (void 0 === Fd) continue;
          if (Xd && Xd.includes(dd)) continue;
          const Rd = Wd[Fd];
          void 0 !== Rd && null !== Rd && md(Od, dd)
        }
      }
    }

    function Km(dd, Od, md, Wd) {
      ! function(dd, Od, md) {
        if (!Od) return;
        const Wd = Od[Hd],
          Fd = !Wd._isSchema;
        let Rd;
        Fd ? (Od = Wd.parent, md = Wd.parentIndex, Rd = Od?.[Hd].metadata) : Rd = Wd.metadata;
        const Xd = (Rd?.[Vd]?.includes(md) ? xm : 0) | (Rd?.[rd]?.includes(md) ? Bm : 0),
          Kd = Wd.flags & um | Xd,
          hd = dd.flags;
        dd.flags = hd | Kd;
        Kd & ~hd & Bm && (dd.reset(), dd.unreliableRecorder?.reset());
        const vd = dd.root?.types;
        if (!vd?.hasFilters) return;
        const Qd = Rd?.[Sd]?.includes(md) ?? !1,
          td = Rd?.[Gd]?.includes(md) ?? !1,
          od = Wd.isFiltered || Qd || td;
        if (dd.isFiltered = od, td && !Fd) {
          dd.isStreamCollection = !0;
          const Od = BO(dd.ref);
          if (void 0 === Od.priority) {
            const dd = ZO.getStreamPriority(Rd, md);
            void 0 !== dd && (Od.priority = dd)
          }
          dd.root?.registerStream(dd.ref)
        }
        if (od) {
          const Od = Qm(dd);
          dd.isVisibilitySharedWithParent = Wd.isFiltered && Od && !td && (!Qd || Fd && Rd[md].tag !== bW)
        }
      }(dd, Od, md), dd.isFullStateOnly || (dd.has() && dd.root?.enqueueChangeTree(dd), dd.unreliableRecorder?.has() && dd.root?.enqueueUnreliable(dd), dd.has() || dd.unreliableRecorder?.has() || dd.root?.enqueueChangeTree(dd))
    }

    function hm(dd) {
      const Od = dd.pendingFilterRefresh;
      for (let md = 0; md < Od.length; md++) {
        const dd = Od[md];
        0 !== (dd.flags & sm) && tm(dd)
      }
      Od.length = 0
    }

    function Qm(dd) {
      return dd._isSchema || "string" !== typeof dd.refTarget[yd]
    }

    function tm(dd) {
      dd.flags &= ~sm;
      const Od = dd.root;
      if (void 0 === Od || void 0 === dd.parentRef) return;
      const md = Qm(dd);
      let Wd = ym(dd, dd.parentRef, dd._parentIndex, md);
      for (let Rd = dd.extraParents; void 0 !== Rd && Wd !== Hm; Rd = Rd.next) Wd |= ym(dd, Rd.ref, Rd.index, md);
      if (0 === Wd) return;
      dd.isVisibilitySharedWithParent = 0 !== (Wd & qm);
      const Fd = 0 === (Wd & Nm);
      Fd !== dd.isFiltered && (dd.isFiltered = Fd, Fd || dd.isFullStateOnly || (dd.forEachLiveWithCtx(dd, Fm), dd.has() && Od.enqueueChangeTree(dd), dd.unreliableRecorder?.has() && Od.enqueueUnreliable(dd)), dd.forEachChildWithCtx(dd, bm))
    }
    const om = 1,
      Nm = 2,
      qm = 4,
      Hm = om | Nm | qm;

    function ym(dd, Od, md, Wd) {
      const Fd = Od[Hd];
      if (Fd.root !== dd.root || ! function(dd, Od, md) {
          const Wd = Od.refTarget;
          if (Od.isArray) {
            const Od = Wd.items,
              Fd = Od[md];
            if (void 0 !== Fd && Fd[Hd] === dd) return !0;
            for (let md = 0, Wd = Od.length; md < Wd; md++) {
              const Wd = Od[md];
              if (void 0 !== Wd && Wd[Hd] === dd) return !0
            }
            return !1
          }
          const Fd = Od.getValue(md);
          return void 0 !== Fd && Fd[Hd] === dd
        }(dd, Fd, md)) return 0;
      Fd.flags & sm && tm(Fd);
      let Rd = om;
      if (Fd._isSchema) {
        void 0 !== Fd.encDescriptor.tags[md] || Fd.isFieldStream(md) || (Fd.isFiltered ? Wd && (Rd |= qm) : Rd |= Nm)
      } else if (Fd.isFiltered) {
        if (Wd && !Fd.isStreamCollection) {
          const dd = Fd.parent?.[Hd];
          (dd?._isSchema ? dd.encDescriptor.tags[Fd.parentIndex] : void 0) !== bW && (Rd |= qm)
        }
      } else Rd |= Nm;
      return Rd
    }
    const bm = (dd, Od, md) => {
      tm(Od)
    };

    function Tm(dd, Od, md, Wd) {
      if (dd.addParent(Od, Wd), !md) return;
      const Fd = md.add(dd);
      md !== dd.root && (dd.root = md, Km(dd, Od, Wd));
      const Rd = Od?.[Hd];
      if (void 0 !== Rd && void 0 !== Rd.subscribedViews && void 0 !== Od[yd] && function(dd, Od, md, Wd) {
          const Fd = dd.subscribedViews;
          if (void 0 === Fd) return;
          const Rd = dd.isStreamCollection,
            Xd = Rd ? dd.ref : void 0,
            Kd = Rd ? void 0 : md[Hd];
          for (let hd = 0, vd = Fd.length; hd < vd; hd++) {
            let dd = Fd[hd];
            for (; 0 !== dd;) {
              const md = dd & -dd;
              dd ^= md;
              const vd = 32 * hd + (31 - Math.clz32(md)),
                Qd = Wd.activeViews.get(vd),
                td = Qd?.deref();
              void 0 !== td ? Rd ? iO(Xd, vd, Od) : void 0 !== Kd && td.markVisible(Kd) : Fd[hd] &= ~md
            }
          }
        }(Rd, Wd, dd.ref, md), Fd) {
        let Od = wm[am];
        void 0 === Od && (Od = {
          parentRef: void 0,
          root: void 0
        }, wm[am] = Od), Od.parentRef = dd.ref, Od.root = md, am++, Ym(dd, Od, Em), am--
      }
    }

    function pm(dd, Od, md) {
      dd(Od, md)
    }

    function Ym(dd, Od, md) {
      const Wd = dd.refTarget;
      if (Wd[yd]) {
        if ("string" !== typeof Wd[yd]) {
          const dd = Wd.items;
          if (void 0 !== dd)
            for (let Wd = 0, Fd = dd.length; Wd < Fd; Wd++) {
              const Fd = dd[Wd];
              Fd && md(Od, Fd[Hd], Wd)
            } else {
              const dd = Wd.$items,
                Fd = Wd._collectionIndexes;
              for (const Wd of dd.keys()) {
                const Rd = dd.get(Wd);
                Rd && md(Od, Rd[Hd], Fd?.[Wd] ?? Wd)
              }
            }
        }
      } else {
        const Fd = dd.metadata,
          Rd = Fd?.[Bd];
        if (!Rd) return;
        const Xd = dd.encDescriptor.names;
        for (let dd = 0, Kd = Rd.length; dd < Kd; dd++) {
          const Fd = Rd[dd],
            Kd = Wd[Xd[Fd]];
          Kd && md(Od, Kd[Hd], Fd)
        }
      }
    }

    function gm(dd, Od, md) {
      Od.root !== dd ? Od.setRoot(dd) : dd.add(Od)
    }
    const wm = [];
    let am = 0;

    function Em(dd, Od, md) {
      if (Od.root === dd.root) return dd.root.add(Od), void dd.root.moveNextToParent(Od);
      Od.setParent(dd.parentRef, dd.root, md)
    }

    function Jm(dd, Od, md) {
      const Wd = (3 & md) << 3;
      return md < 4 ? dd >>> Wd & 255 : Od >>> Wd & 255
    }
    const Um = (dd, Od, md) => dd(Od, md);
    const xm = 16,
      Bm = 32,
      Sm = 128,
      sm = 256,
      um = xm | Bm;
    class Vm {
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
      set isFiltered(dd) {
        this.flags = dd ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(dd) {
        this.flags = dd ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(dd) {
        this.flags = dd ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(dd) {
        this.flags = dd ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & xm)
      }
      set isPatchOnly(dd) {
        this.flags = dd ? this.flags | xm : this.flags & ~xm
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & Bm)
      }
      set isFullStateOnly(dd) {
        this.flags = dd ? this.flags | Bm : this.flags & ~Bm
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(dd) {
        this.flags = dd ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Sm)
      }
      set needsRestage(dd) {
        this.flags = dd ? this.flags | Sm : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new fO(this.metadata?.[xd] ?? 0) : new MO), this.unreliableRecorder
      }
      isFieldUnreliable(dd) {
        const Od = this.encDescriptor;
        return !!Od.hasAnyUnreliable && (dd < 32 ? 0 !== (Od.unreliableBitmask & 1 << dd) : ZO.hasUnreliableAtIndex(this.metadata, dd))
      }
      isFieldFullStateOnly(dd) {
        if (this.isFullStateOnly) return !0;
        const Od = this.encDescriptor;
        return !!Od.hasAnyFullStateOnly && (dd < 32 ? 0 !== (Od.fullStateOnlyBitmask & 1 << dd) : ZO.hasFullStateOnlyAtIndex(this.metadata, dd))
      }
      isFieldStream(dd) {
        const Od = this.encDescriptor;
        return !!Od.hasAnyStream && (dd < 32 ? 0 !== (Od.streamBitmask & 1 << dd) : ZO.hasStreamAtIndex(this.metadata, dd))
      }
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        this.ref = dd, this.refTarget = Od;
        const md = mm(dd);
        this.encDescriptor = md, this.metadata = md.metadata;
        const Wd = md.isSchema;
        if (this._isSchema = Wd, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Wd) {
          const dd = this.metadata?.[xd] ?? 0;
          dd > 7 && (this.ops = new Uint8Array(dd + 1))
        } else this.collDirty = new Map
      }
      _opAt(dd) {
        const Od = this.ops;
        if (void 0 !== Od) return Od[dd];
        const md = (3 & dd) << 3;
        return dd < 4 ? this.opsLow >>> md & 255 : this.opsHigh >>> md & 255
      }
      _opPut(dd, Od) {
        const md = this.ops;
        if (void 0 !== md) return void(md[dd] = Od);
        const Wd = (3 & dd) << 3,
          Fd = ~(255 << Wd);
        dd < 4 ? this.opsLow = this.opsLow & Fd | Od << Wd : this.opsHigh = this.opsHigh & Fd | Od << Wd
      }
      _markDirty(dd) {
        dd < 32 ? this.dirtyLow |= 1 << dd : this.dirtyHigh |= 1 << dd - 32
      }
      record(dd, Od) {
        if (this._isSchema) {
          const md = this._opAt(dd);
          0 === md ? this._opPut(dd, Od) : (md === Fd.DELETE || md === Fd.ADD && Od === Fd.DELETE_AND_ADD) && this._opPut(dd, Fd.DELETE_AND_ADD), this._markDirty(dd)
        } else {
          const md = this.collDirty,
            Wd = md.get(dd);
          let Rd;
          Rd = void 0 === Wd ? Od : Wd === Fd.DELETE || Wd === Fd.ADD && Od === Fd.DELETE_AND_ADD ? Fd.DELETE_AND_ADD : Wd, md.set(dd, Rd)
        }
      }
      recordDelete(dd, Od) {
        this._isSchema ? (this._opPut(dd, Od), this._markDirty(dd)) : this.collDirty.set(dd, Od)
      }
      recordRaw(dd, Od) {
        this._isSchema ? (this._opPut(dd, Od), this._markDirty(dd)) : this.collDirty.set(dd, Od)
      }
      recordPure(dd) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, dd])
      }
      operationAt(dd) {
        if (this._isSchema) {
          const Od = this._opAt(dd);
          return 0 === Od ? void 0 : Od
        }
        return this.collDirty.get(dd)
      }
      setOperationAt(dd, Od) {
        if (this._isSchema) this._opPut(dd, Od);
        else {
          const md = this.collDirty;
          md.has(dd) && md.set(dd, Od)
        }
      }
      forEach(dd) {
        this.forEachWithCtx(dd, Um)
      }
      forEachWithCtx(dd, Od) {
        if (this._isSchema) {
          let md = this.dirtyLow,
            Wd = this.dirtyHigh;
          const Fd = this.ops;
          if (void 0 !== Fd) {
            for (; 0 !== md;) {
              const Wd = md & -md,
                Rd = 31 - Math.clz32(Wd);
              md ^= Wd, Od(dd, Rd, Fd[Rd])
            }
            for (; 0 !== Wd;) {
              const md = Wd & -Wd,
                Rd = 31 - Math.clz32(md) + 32;
              Wd ^= md, Od(dd, Rd, Fd[Rd])
            }
          } else {
            const Wd = this.opsLow,
              Fd = this.opsHigh;
            for (; 0 !== md;) {
              const Rd = md & -md,
                Xd = 31 - Math.clz32(Rd);
              md ^= Rd, Od(dd, Xd, Jm(Wd, Fd, Xd))
            }
          }
          return
        }
        const md = this.collDirty,
          Wd = this.collPureOps;
        if (void 0 !== Wd && Wd.length > 0) {
          let Fd = 0,
            Rd = 0;
          for (const [Xd, Kd] of md) {
            for (; Fd < Wd.length && Wd[Fd][0] <= Rd;) {
              const md = Wd[Fd++][1];
              Od(dd, -md, md)
            }
            Od(dd, Xd, Kd), Rd++
          }
          for (; Fd < Wd.length;) {
            const md = Wd[Fd++][1];
            Od(dd, -md, md)
          }
        } else
          for (const [Fd, Rd] of md) Od(dd, Fd, Rd)
      }
      size() {
        return this._isSchema ? dm(this.dirtyLow) + dm(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(dd, Od) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const md = this.collDirty,
          Wd = new Map,
          Rd = !this.paused && !this.isFullStateOnly;
        if (dd > 0)
          for (const [Fd, Xd] of md) Fd < dd && Wd.set(Fd, Xd);
        if (Rd)
          for (let Xd = 0; Xd < Od; Xd++) Wd.set(dd + Xd, Fd.ADD);
        for (const [Fd, Xd] of md) Fd >= dd && Wd.set(Fd + Od, Xd);
        this.collDirty = Wd, Rd && this.root?.enqueueChangeTree(this)
      }
      removeAt(dd, Od) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const md = this.collDirty,
          Wd = dd + Od;
        let Fd = !1;
        for (const Xd of md.keys())
          if (Xd >= Wd) {
            Fd = !0;
            break
          } if (!Fd) {
          for (let Od = dd; Od < Wd; Od++) md.delete(Od);
          return
        }
        const Rd = new Map;
        for (const [Xd, Kd] of md) Xd < dd ? Rd.set(Xd, Kd) : Xd >= Wd && Rd.set(Xd - Od, Kd);
        this.collDirty = Rd
      }
      unshift(dd) {
        this.insertAt(0, dd)
      }
      setRoot(dd) {
        ! function(dd, Od) {
          dd.root = Od;
          const md = Od.add(dd);
          Km(dd, dd.parent, dd.parentIndex), md && Ym(dd, Od, gm)
        }(this, dd)
      }
      setParent(dd, Od, md) {
        Tm(this, dd, Od, md)
      }
      forEachChild(dd) {
        Ym(this, dd, pm)
      }
      forEachChildWithCtx(dd, Od) {
        Ym(this, dd, Od)
      }
      forEachLive(dd) {
        Xm(this, dd, Rm)
      }
      forEachLiveWithCtx(dd, Od) {
        Xm(this, dd, Od)
      }
      operation(dd) {
        this.paused || this.isFullStateOnly || (this.recordPure(dd), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(dd, Od, md) {
        if (!this.paused && !this.isFieldFullStateOnly(dd)) {
          if (this.isFieldUnreliable(dd) && !this.isNew) {
            const Wd = this.ensureUnreliableRecorder();
            return md ? Wd.recordRaw(dd, Od) : Wd.record(dd, Od), void this.root?.enqueueUnreliable(this)
          }
          md ? this.recordRaw(dd, Od) : this.record(dd, Od), this.root?.enqueueChangeTree(this)
        }
      }
      change(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd.ADD;
        this._routeAndRecord(dd, Od, !1)
      }
      indexedOperation(dd, Od) {
        this._routeAndRecord(dd, Od, !0)
      }
      getChange(dd) {
        return this.operationAt(dd)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(dd) {
        const Od = this.paused;
        this.paused = !0;
        try {
          return dd()
        } finally {
          this.paused = Od
        }
      }
      markDirty(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd.ADD;
        const md = this.paused;
        this.paused = !1;
        try {
          this.change(dd, Od)
        } finally {
          this.paused = md
        }
      }
      getValue(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[od](dd, Od)
      }
      delete(dd, Od) {
        if (void 0 === dd) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${dd}'`)
          } catch (hF) {
            console.warn(hF)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(dd)) return this.getValue(dd);
        const md = this.isFieldUnreliable(dd) && !this.isNew;
        md ? this.ensureUnreliableRecorder().recordDelete(dd, Od ?? Fd.DELETE) : this.recordDelete(dd, Od ?? Fd.DELETE);
        const Wd = this.getValue(dd);
        return Wd && Wd[Hd] && this.root?.remove(Wd[Hd]), md ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Wd
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Td]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Td]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Td]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const dd = dd => {
          if (dd < 0) return;
          const Od = this.getValue(dd);
          Od && Od[Hd] && Od[Hd].discardAll()
        };
        this.forEach(dd), this.unreliableRecorder?.forEach(dd), this.discard()
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
      addParent(dd, Od) {
        ! function(dd, Od, md) {
          if (dd.parentRef) {
            if (dd.parentRef[Hd] === Od[Hd]) return void(dd._parentIndex = md);
            if (Wm(dd, ((dd, md) => dd[Hd] === Od[Hd]))) return void(dd._parentIndex = md)
          }
          void 0 === dd.parentRef ? (dd.parentRef = Od, dd._parentIndex = md) : (dd.extraParents = {
            ref: dd.parentRef,
            index: dd._parentIndex,
            next: dd.extraParents
          }, dd.parentRef = Od, dd._parentIndex = md)
        }(this, dd, Od)
      }
      setParentIndex(dd, Od) {
        ! function(dd, Od, md) {
          if (void 0 !== dd.extraParents)
            if (dd.parentRef[Hd] !== Od[Hd]) {
              for (let Wd = dd.extraParents; void 0 !== Wd; Wd = Wd.next)
                if (Wd.ref[Hd] === Od[Hd]) return void(Wd.index = md)
            } else dd._parentIndex = md;
          else dd._parentIndex = md
        }(this, dd, Od)
      }
      removeParent() {
        return function(dd, Od) {
          if (dd.parentRef && dd.parentRef[Hd] === Od[Hd]) return dd.extraParents ? (dd.parentRef = dd.extraParents.ref, dd._parentIndex = dd.extraParents.index, dd.extraParents = dd.extraParents.next) : (dd.parentRef = void 0, dd._parentIndex = void 0), !0;
          let md = dd.extraParents,
            Wd = null;
          for (; md;) {
            if (md.ref[Hd] === Od[Hd]) return Wd ? Wd.next = md.next : dd.extraParents = md.next, !0;
            Wd = md, md = md.next
          }
          return void 0 === dd.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(dd) {
        return function(dd, Od) {
          if (void 0 !== dd.parentRef && Od(dd.parentRef, dd._parentIndex)) return {
            ref: dd.parentRef,
            index: dd._parentIndex
          };
          for (let md = dd.extraParents; void 0 !== md; md = md.next)
            if (Od(md.ref, md.index)) return {
              ref: md.ref,
              index: md.index
            }
        }(this, dd)
      }
      hasParent(dd) {
        return Wm(this, dd)
      }
      indexInParent(dd) {
        return function(dd, Od) {
          if (dd.parentRef && dd.parentRef[Hd] === Od[Hd]) return dd._parentIndex;
          for (let md = dd.extraParents; void 0 !== md; md = md.next)
            if (md.ref[Hd] === Od[Hd]) return md.index
        }(this, dd)
      }
      getAllParents() {
        return function(dd) {
          const Od = [];
          dd.parentRef && Od.push({
            ref: dd.parentRef,
            index: dd._parentIndex
          });
          let md = dd.extraParents;
          for (; md;) Od.push({
            ref: md.ref,
            index: md.index
          }), md = md.next;
          return Od
        }(this)
      }
    }
    class im {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(dd) {
        this.ref = dd
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
      untracked(dd) {
        return dd()
      }
      markDirty() {}
      forEachChild(dd) {
        const Od = this.ref;
        if (Od[yd]) {
          if ("string" !== typeof Od[yd])
            for (const [md, Wd] of Od.entries()) Wd && dd(Wd[Hd], Od._collectionIndexes?.[md] ?? md);
          return
        }
        const md = Od.constructor,
          Wd = md?.[Symbol.metadata];
        if (!Wd) return;
        const Fd = Wd[Bd] ?? [];
        for (let Rd = 0; Rd < Fd.length; Rd++) {
          const md = Fd[Rd],
            Xd = Od[Wd[md].name];
          Xd && dd(Xd[Hd], md)
        }
      }
      forEachChildWithCtx(dd, Od) {
        this.forEachChild(((md, Wd) => Od(dd, md, Wd)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Am(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
      var md;
      Object.defineProperty(dd, Hd, {
        value: (md = Od, new im(md)),
        enumerable: !1,
        writable: !0
      })
    }

    function rm(dd, Od, md, Wd, Rd, Xd, hd) {
      void 0 !== hd ? hd(Od, Wd, Xd) : "string" === typeof md ? WO[md]?.(Od, Wd, Xd) : null != md[Symbol.metadata] ? (WO.number(Od, Wd[Kd], Xd), (Rd & Fd.ADD) === Fd.ADD && dd.tryEncodeTypeId(Od, md, Wd.constructor, Xd)) : WO.number(Od, Wd[Kd], Xd)
    }
    const Gm = function(dd, Od, md, Wd, Rd, Xd, Kd, hd) {
        if (Od[Xd.offset++] = 255 & (Wd | Rd), Rd === Fd.DELETE) return;
        const vd = md.encDescriptor,
          Qd = md.ref,
          td = Qd[gd][Wd] ?? Qd[vd.names[Wd]];
        rm(dd, Od, vd.types[Wd], td, Rd, Xd, vd.encoders[Wd])
      },
      nm = function(dd, Od, md, Wd, Rd, Xd) {
        if (Od[Xd.offset++] = 255 & Rd, WO.number(Od, Wd, Xd), Rd === Fd.DELETE) return;
        const Kd = md.ref;
        if ((Rd & Fd.ADD) === Fd.ADD) {
          const dd = Kd.$indexes.get(Wd);
          WO.string(Od, dd, Xd)
        }
        rm(dd, Od, Kd[yd], Kd[od](Wd), Rd, Xd)
      },
      Lm = function(dd, Od, md, Wd, Rd, Xd) {
        if (Od[Xd.offset++] = 255 & Rd, WO.number(Od, Wd, Xd), Rd === Fd.DELETE) return;
        const Kd = md.ref;
        rm(dd, Od, Kd[yd], Kd[od](Wd), Rd, Xd)
      },
      Pm = function(dd, Od, md, Wd, Rd, Xd) {
        const Kd = md.ref;
        (Rd & Fd.ADD) === Fd.ADD && "function" === typeof Kd.set ? nm(dd, Od, md, Wd, Rd, Xd) : Lm(dd, Od, md, Wd, Rd, Xd)
      },
      zm = function(dd, Od, md, Wd, Rd, Xd, hd, vd) {
        const Qd = md.refTarget,
          td = Qd[yd],
          Nd = "string" !== typeof td;
        let qd;
        if (vd && md.isFiltered && Nd) {
          const dd = Qd.tmpItems[Wd];
          if (!dd) return;
          if (qd = dd[Kd], Rd === Fd.DELETE) Rd = Fd.DELETE_BY_REFID;
          else if ((Rd & Fd.ADD) === Fd.ADD) Rd = Fd.ADD_BY_REFID;
          else if ((Rd & Fd.MOVE) === Fd.MOVE) return
        } else if (Rd === Fd.DELETE && Nd) {
          const dd = Qd.tmpItems[Wd];
          if (!dd) return;
          qd = dd[Kd], Rd = Fd.DELETE_BY_REFID
        } else qd = Wd;
        if (Od[Xd.offset++] = 255 & Rd, WO.number(Od, qd, Xd), Rd === Fd.DELETE || Rd === Fd.DELETE_BY_REFID) return;
        rm(dd, Od, td, Qd[od](Wd, hd), Rd, Xd)
      };

    function cm(dd, Od, md, Wd, Rd, Xd, hd) {
      const vd = dd.resyncVisited;
      let Qd = vd.get(dd.currentRefId);
      if (void 0 === Qd && vd.set(dd.currentRefId, Qd = new Set), Qd.add(Wd), void 0 !== Rd && md === Fd.ADD && Rd !== Xd) {
        const md = Rd[Kd];
        void 0 !== md && (dd.root.removeRef(md), hd?.push({
          ref: Od,
          refId: dd.currentRefId,
          op: Fd.DELETE,
          dynamicIndex: Wd,
          value: void 0,
          previousValue: Rd
        }))
      }
    }

    function jm(dd, Od, md, Wd) {
      const Fd = Od[Kd];
      if (void 0 === Fd || md.has(Fd)) return;
      md.add(Fd);
      const Rd = Od.constructor[Symbol.metadata],
        Xd = Rd?.[Bd];
      if (void 0 === Xd) return;
      const hd = Rd[Vd];
      for (let Kd = 0; Kd < Xd.length; Kd++) {
        const Fd = Xd[Kd];
        if (void 0 !== hd && hd.includes(Fd)) continue;
        const vd = Rd[Fd],
          Qd = Od[vd.name];
        Qd && (uW.is(vd.type) ? jm(dd, Qd, md, Wd) : Dm(dd, Qd, md, Wd))
      }
    }

    function Dm(dd, Od, md, Wd) {
      const Rd = Od[bd] ?? Od,
        Xd = Rd[Kd];
      if (void 0 === Xd || md.has(Xd)) return;
      md.add(Xd);
      const hd = dd.resyncVisited.get(Xd);
      if (void 0 === hd) return;
      const vd = dd.root;
      Rd[qd](hd, ((dd, md) => {
        Wd?.push({
          ref: Od,
          refId: Xd,
          op: Fd.DELETE,
          dynamicIndex: md,
          value: void 0,
          previousValue: dd
        });
        const Rd = dd?.[Kd];
        void 0 !== Rd && vd.removeRef(Rd)
      }), (Od => {
        uW.isSchema(Od) && jm(dd, Od, md, Wd)
      }))
    }
    const em = 1,
      Im = 2,
      lm = 3,
      Cm = 4,
      Zm = 5;

    function km(dd, Od, md, Wd, Rd, Xd, hd, vd, Qd) {
      const td = dd.root;
      let od;
      if ((Od & Fd.DELETE) === Fd.DELETE) {
        const dd = Rd?.[Kd];
        void 0 !== dd && td.removeRef(dd), Od !== Fd.DELETE_AND_ADD && md[Nd](Wd), od = void 0
      }
      if (Od === Fd.DELETE);
      else if ("string" === typeof Xd) od = gO[Xd](hd, vd);
      else if (nO(Xd)) od = function(dd, Od, md) {
        return PO(dd, (0, gO[dd.wire])(Od, md))
      }(Xd.quantized, hd, vd);
      else if (uW.is(Xd)) {
        const md = gO.number(hd, vd);
        if (od = td.refs.get(md), (Od & Fd.ADD) === Fd.ADD) {
          const Wd = dd.getInstanceType(hd, vd, Xd);
          od || (od = dd.createInstanceOfType(Wd)), td.addRef(md, od, od !== Rd || Od === Fd.DELETE_AND_ADD && od === Rd)
        }
      } else {
        const md = (qd = Object.keys(Xd)[0], wO[qd]),
          Wd = gO.number(hd, vd);
        null !== dd.resyncVisited && function(dd, Od) {
          const md = dd.resyncVisited;
          md.has(Od) || md.set(Od, new Set)
        }(dd, Wd);
        const Nd = td.refs.has(Wd) ? Rd || td.refs.get(Wd) : md.constructor.initializeForDecoder();
        if (od = Nd.clone(!0), od[yd] = Object.values(Xd)[0], Rd) {
          let dd = Rd[Kd];
          if (void 0 !== dd && Wd !== dd) {
            (Od & Fd.DELETE) !== Fd.DELETE && td.removeRef(dd);
            const md = Rd.entries();
            let Wd;
            for (;
              (Wd = md.next()) && !Wd.done;) {
              const [Od, md] = Wd.value;
              "object" === typeof md && (dd = md[Kd]), Qd?.push({
                ref: Rd,
                refId: dd,
                op: Fd.DELETE,
                field: Od,
                value: void 0,
                previousValue: md
              })
            }
          }
        }
        td.addRef(Wd, od, Nd !== Rd || Od === Fd.DELETE_AND_ADD && Nd === Rd)
      }
      var qd;
      return od
    }
    const fm = function(dd, Od, md, Wd, Fd) {
        const Rd = Od[md.offset++],
          Xd = Wd.constructor[Symbol.metadata],
          Kd = Rd >> 6 << 6,
          hd = Rd % (Kd || 255),
          vd = Xd[hd];
        if (void 0 === vd) return console.warn("@colyseus/schema: field not defined at", {
          index: hd,
          ref: Wd.constructor.name,
          metadata: Xd
        }), -1;
        const Qd = !0 === vd.deprecated,
          td = Qd ? void 0 : Wd[od](hd),
          Nd = km(dd, Kd, Wd, hd, td, vd.type, Od, md, Fd);
        Qd || (null !== Nd && void 0 !== Nd && (Wd[vd.name] = Nd), td !== Nd && Fd?.push({
          ref: Wd,
          refId: dd.currentRefId,
          op: Kd,
          field: vd.name,
          value: Nd,
          previousValue: td
        }))
      },
      Mm = function(dd, Od, md, Wd, Rd) {
        const Xd = Wd[bd] ?? Wd,
          Kd = Od[md.offset++];
        if (Kd === Fd.CLEAR) return dd.removeChildRefs(Xd, Rd), void Xd.clear();
        const hd = gO.number(Od, md),
          vd = Xd[yd],
          Qd = Xd.constructor.COLLECTION_KIND;
        let td;
        (Kd & Fd.ADD) === Fd.ADD ? Qd === em ? (td = gO.string(Od, md), Xd.setIndex(hd, td)) : td = hd : td = Xd.getIndex(hd);
        const Nd = Xd[od](hd),
          qd = km(dd, Kd, Wd, hd, Nd, vd, Od, md, Rd);
        if (null !== dd.resyncVisited && cm(dd, Wd, Kd, td, Nd, qd, Rd), null !== qd && void 0 !== qd) switch (Qd) {
          case em:
            Xd.$items.set(td, qd);
            break;
          case Im:
            Xd.$setAt(hd, qd, null !== dd.resyncVisited && Kd === Fd.ADD ? Fd.REPLACE : Kd);
            break;
          case lm:
          case Cm:
          case Zm:
            Xd.$items.has(hd) || (Xd.$items.set(hd, qd), "number" === typeof Xd.$refId && hd >= Xd.$refId && (Xd.$refId = hd + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Xd.constructor?.name} \u2014 item at index ${hd} was not stored.`)
        }
        Nd !== qd && Rd?.push({
          ref: Wd,
          refId: dd.currentRefId,
          op: Kd,
          dynamicIndex: td,
          value: qd,
          previousValue: Nd
        })
      },
      dW = function(dd, Od, md, Wd, Rd) {
        const Xd = Wd[bd] ?? Wd;
        let Kd, hd = Od[md.offset++];
        if (hd === Fd.CLEAR) return dd.removeChildRefs(Xd, Rd), void Xd.clear();
        if (hd === Fd.REVERSE) return void Xd.items.reverse();
        if (hd === Fd.DELETE_BY_REFID) {
          const hd = gO.number(Od, md),
            vd = dd.root.refs.get(hd);
          if (void 0 === vd) return;
          if (dd.root.removeRef(hd), Kd = Xd.findIndex((dd => dd === vd)), -1 === Kd) return;
          return Xd[Nd](Kd), void Rd?.push({
            ref: Wd,
            refId: dd.currentRefId,
            op: Fd.DELETE,
            dynamicIndex: Kd,
            value: void 0,
            previousValue: vd
          })
        }
        if (hd === Fd.ADD_BY_REFID) {
          const Wd = gO.number(Od, md),
            Fd = dd.root.refs.get(Wd);
          Fd && (Kd = Xd.findIndex((dd => dd === Fd))), -1 !== Kd && void 0 !== Kd || (Kd = Xd.length)
        } else Kd = gO.number(Od, md);
        const vd = Xd[yd];
        let Qd = Kd;
        const td = Xd.items[Kd],
          od = km(dd, hd, Wd, Kd, td, vd, Od, md, Rd);
        null !== dd.resyncVisited && cm(dd, Wd, hd, Kd, td, od, Rd), null !== od && void 0 !== od && od !== td && Xd.$setAt(Kd, od, null !== dd.resyncVisited && hd === Fd.ADD ? Fd.REPLACE : hd), td !== od && Rd?.push({
          ref: Wd,
          refId: dd.currentRefId,
          op: hd,
          dynamicIndex: Qd,
          value: od,
          previousValue: td
        })
      };
    class OW extends Error {}

    function mW(dd, Od, md, Wd) {
      if (!(dd instanceof Od)) throw new OW(`a '${Od.name}' was expected, but '${dd&&dd.constructor.name}' was provided in ${md.constructor.name}#${Wd}`)
    }
    const WW = (dd, Od) => {
        const md = dd.toString(),
          Wd = Od.toString();
        return md < Wd ? -1 : md > Wd ? 1 : 0
      },
      FW = {
        get: (dd, Od) => "symbol" === typeof Od || isNaN(Od) ? Reflect.get(dd, Od) : dd.items[Od],
        set: (dd, Od, md) => {
          if ("symbol" !== typeof Od && !isNaN(Od)) {
            if (void 0 === md || null === md) dd.$deleteAt(Od);
            else {
              let Wd;
              if (md[Hd]) {
                mW(md, dd[yd], dd, Od);
                const Rd = dd.items[Od];
                dd.isMovingItems ? (Wd = dd.$wireIndex(Number(Od)), void 0 !== Rd ? md[Hd].isNew ? dd[Hd].indexedOperation(Wd, Fd.MOVE_AND_ADD) : (dd[Hd].getChange(Wd) & Fd.DELETE) === Fd.DELETE ? dd[Hd].indexedOperation(Wd, Fd.DELETE_AND_MOVE) : dd[Hd].indexedOperation(Wd, Fd.MOVE) : md[Hd].isNew && dd[Hd].indexedOperation(Wd, Fd.ADD), md[Hd].setParent(dd, dd[Hd].root, Wd)) : Wd = dd.$changeAt(Number(Od), md), void 0 !== Rd && Rd[Hd].root?.remove(Rd[Hd])
              } else Wd = dd.$changeAt(Number(Od), md);
              dd.items[Od] = md, void 0 !== Wd && (dd.tmpItems[Wd] = md)
            }
            return !0
          }
          return Reflect.set(dd, Od, md)
        },
        deleteProperty: (dd, Od) => ("number" === typeof Od ? dd.$deleteAt(Od) : delete dd[Od], !0),
        has: (dd, Od) => "symbol" === typeof Od || isNaN(Number(Od)) ? Reflect.has(dd, Od) : Reflect.has(dd.items, Od)
      };
    class RW {
      [Hd];
      [Kd];
      [bd];
      [yd];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[vd] = zm;
      static[Qd] = dW;
      static COLLECTION_KIND = Im;
      static[td](dd, Od, md) {
        if (!md) return !0;
        const Wd = dd[bd] ?? dd;
        return "string" === typeof Wd[yd] || md.isChangeTreeVisible(Wd.tmpItems[Od]?.[Hd])
      }
      static is(dd) {
        return Array.isArray(dd) || void 0 !== dd.array
      }
      static from(dd) {
        return new RW(...Array.from(dd))
      }
      constructor() {
        this[yd] = void 0, this[bd] = this;
        const dd = new Proxy(this, FW);
        return Object.defineProperty(this, Hd, {
          value: new Vm(dd, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), dd
      }
      static initializeForDecoder() {
        const dd = Object.create(RW.prototype);
        dd.items = [], dd.isMovingItems = !1, dd._needsCompaction = !1, dd[yd] = void 0, dd[bd] = dd;
        const Od = new Proxy(dd, FW);
        return Am(dd, Od), Od
      }
      set length(dd) {
        0 === dd ? this.clear() : dd < this.items.length ? this.splice(dd, this.length - dd) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Hd].pause()
      }
      resumeTracking() {
        this[Hd].resume()
      }
      untracked(dd) {
        return this[Hd].untracked(dd)
      }
      get isTrackingPaused() {
        return this[Hd].paused
      }
      push() {
        const dd = this[bd],
          Od = dd.items,
          md = dd.tmpItems,
          Wd = dd[Hd],
          Rd = dd[yd];
        let Xd = md.length;
        for (let Kd = 0, hd = arguments.length; Kd < hd; Kd++, Xd++) {
          const hd = Kd < 0 || arguments.length <= Kd ? void 0 : arguments[Kd];
          if (void 0 === hd || null === hd) return;
          "object" === typeof hd && Rd && mW(hd, Rd, dd, Kd), Wd.indexedOperation(Xd, Fd.ADD), Od.push(hd), md.push(hd), hd[Hd]?.setParent(this, Wd.root, Xd)
        }
        return Xd
      }
      pop() {
        const dd = this[bd],
          Od = dd.tmpItems,
          md = dd.deletedIndexes;
        let Wd = -1;
        for (let Rd = Od.length - 1; Rd >= 0; Rd--)
          if (!0 !== md[Rd]) {
            Wd = Rd;
            break
          } if (Wd < 0) return;
        const Fd = dd.$isUnsentAdd(Wd);
        return dd[Hd].delete(Wd), Fd ? dd.$cancelAdd(Wd) : md[Wd] = !0, dd.items.pop()
      }
      at(dd) {
        return dd < 0 && (dd += this.length), this.items[dd]
      }
      $wireIndex(dd) {
        const Od = this.deletedIndexes;
        if (0 === Od.length) return dd;
        const md = this.tmpItems;
        let Wd = 0;
        for (let Fd = 0; Fd < md.length; Fd++)
          if (!0 !== Od[Fd]) {
            if (Wd === dd) return Fd;
            Wd++
          } return md.length + (dd - Wd)
      }
      $isUnsentAdd(dd) {
        const Od = this[Hd];
        return 0 === (576 & Od.flags) && !Od.paused && "string" !== typeof this[yd] && Od.operationAt(dd) === Fd.ADD
      }
      $cancelAdd(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const md = this[Hd],
          Wd = this.tmpItems[dd];
        this.tmpItems.splice(dd, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(dd, 1), md.removeAt(dd, 1);
        const Fd = Wd?.[Hd];
        void 0 !== Fd && void 0 === Fd.root && Fd.removeParent(this), Od && this.$reindexChildren(dd)
      }
      $reindexChildren(dd, Od) {
        if (!this[Hd].hasFilteredFields) return;
        if ("string" === typeof this[yd]) return;
        const md = this.tmpItems,
          Wd = md.length;
        if (void 0 !== Od)
          for (; dd < Wd && md[dd] === Od[dd];) dd++;
        for (let Fd = dd; Fd < Wd; Fd++) md[Fd]?.[Hd]?.setParentIndex(this, Fd)
      }
      $changeAt(dd, Od) {
        if (void 0 === Od || null === Od) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[dd] === Od) return;
        const md = void 0 !== this.items[dd] ? "object" === typeof Od ? Fd.DELETE_AND_ADD : Fd.REPLACE : Fd.ADD,
          Wd = this.$wireIndex(dd),
          Rd = this[Hd];
        return Rd.change(Wd, md), Od[Hd]?.setParent(this, Rd.root, Wd), Wd
      }
      $deleteAt(dd, Od) {
        this[Hd].delete(this.$wireIndex(dd), Od)
      }
      $setAt(dd, Od, md) {
        md === Fd.ADD && void 0 !== this.items[dd] ? this.items.splice(dd, 0, Od) : md === Fd.DELETE_AND_MOVE ? (this.items.splice(dd, 1), this.items[dd] = Od) : (dd > this.items.length && (this._needsCompaction = !0), this.items[dd] = Od)
      }
      clear() {
        const dd = this[bd];
        if (0 === dd.items.length) return;
        const Od = dd[Hd];
        Od.forEachChild(((dd, md) => {
          Od.root?.remove(dd)
        })), Od.discard(), Od.operation(Fd.CLEAR), dd.items.length = 0, dd.tmpItems.length = 0
      } [pd]() {
        const dd = this[bd] ?? this,
          Od = dd[Hd];
        if (Od.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const md = dd.items;
        for (let Wd = 0; Wd < md.length; Wd++) md[Wd]?.[pd]?.();
        dd.items.length = 0, dd.tmpItems.length = 0, dd.deletedIndexes.length = 0, Od.recycle(), dd[Kd] = void 0
      }
      concat() {
        return new RW(...this.items.concat(...arguments))
      }
      join(dd) {
        return this.items.join(dd)
      }
      reverse() {
        const dd = this[bd],
          Od = dd[Hd];
        if (Od.has() || dd.deletedIndexes.length > 0) {
          const Od = dd.items.slice().reverse();
          return this.clear(), this.push(...Od), this
        }
        return Od.operation(Fd.REVERSE), dd.items.reverse(), dd.tmpItems.reverse(), dd.$reindexChildren(0), this
      }
      shift() {
        const dd = this[bd],
          Od = dd.items;
        if (0 === Od.length) return;
        const md = dd[Hd],
          Wd = dd.deletedIndexes;
        let Rd = 0;
        for (; !0 === Wd[Rd];) Rd++;
        const Xd = dd.$isUnsentAdd(Rd);
        return md.delete(Rd, Fd.DELETE), Xd ? dd.$cancelAdd(Rd) : Wd[Rd] = !0, Od.shift()
      }
      slice(dd, Od) {
        const md = new RW;
        return md.push(...this.items.slice(dd, Od)), md
      }
      sort() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WW;
        const Od = this[bd];
        Od.isMovingItems = !0;
        const md = Od[Hd];
        return Od.items.sort(dd).forEach(((dd, Od) => md.change(Od, Fd.REPLACE))), Od.tmpItems.sort(dd), Od.$reindexChildren(0), Od.isMovingItems = !1, this
      }
      splice(dd, Od) {
        const md = this[bd],
          Wd = md[Hd],
          Rd = md.items,
          Xd = md.tmpItems,
          Kd = md.deletedIndexes,
          hd = Rd.length,
          vd = Xd.length;
        for (var Qd = arguments.length, td = new Array(Qd > 2 ? Qd - 2 : 0), od = 2; od < Qd; od++) td[od - 2] = arguments[od];
        const Nd = td.length,
          qd = [];
        for (let Fd = 0; Fd < vd; Fd++) !0 !== Kd[Fd] && qd.push(Fd);
        let yd;
        if (hd > dd) {
          void 0 === Od && (Od = hd - dd);
          for (let Rd = dd; Rd < dd + Od; Rd++) {
            const dd = qd[Rd],
              Od = md.$isUnsentAdd(dd);
            Wd.delete(dd, Fd.DELETE), Od ? (yd ??= []).push(dd) : Kd[dd] = !0
          }
        } else Od = 0;
        if (Nd > 0) {
          const Rd = qd[dd] ?? hd,
            vd = Math.min(Nd, Od);
          for (let dd = 0; dd < vd; dd++) {
            const Od = Rd + dd;
            let md;
            const hd = void 0 !== yd ? yd.indexOf(Od) : -1; - 1 !== hd ? (yd.splice(hd, 1), md = Fd.ADD) : md = Kd[Od] ? Fd.DELETE_AND_ADD : Fd.ADD, Wd.indexedOperation(Od, md), Xd[Od] = td[dd], Kd[Od] = !1, td[dd][Hd]?.setParent(this, Wd.root, Od)
          }
          const Qd = Nd - vd;
          if (Qd > 0) {
            const dd = Rd + vd;
            Wd.insertAt(dd, Qd);
            for (let Od = 0; Od < Qd; Od++) td[vd + Od][Hd]?.setParent(this, Wd.root, dd + Od);
            Kd.length > 0 && Kd.splice(dd, 0, ...new Array(Qd).fill(!1)), Xd.splice(dd, 0, ...td.slice(vd)), md.$reindexChildren(dd + Qd)
          }
        }
        if (void 0 !== yd && yd.length > 0) {
          for (let dd = yd.length - 1; dd >= 0; dd--) md.$cancelAdd(yd[dd], !1);
          md.$reindexChildren(yd[0])
        }
        return Wd.root?.enqueueChangeTree(Wd), Rd.splice(dd, Od, ...td)
      }
      unshift() {
        const dd = this[bd],
          Od = dd[Hd];
        Od.unshift(arguments.length);
        for (let Wd = 0; Wd < arguments.length; Wd++)(Wd < 0 || arguments.length <= Wd ? void 0 : arguments[Wd])?.[Hd]?.setParent(this, Od.root, Wd);
        const md = dd.deletedIndexes;
        return md.length > 0 && md.unshift(...new Array(arguments.length).fill(!1)), dd.tmpItems.unshift(...arguments), dd.$reindexChildren(arguments.length), dd.items.unshift(...arguments)
      }
      indexOf(dd, Od) {
        return this.items.indexOf(dd, Od)
      }
      lastIndexOf(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(dd, Od)
      }
      every(dd, Od) {
        return this.items.every(dd, Od)
      }
      some(dd, Od) {
        return this.items.some(dd, Od)
      }
      forEach(dd, Od) {
        return this.items.forEach(dd, Od)
      }
      map(dd, Od) {
        return this.items.map(dd, Od)
      }
      filter(dd, Od) {
        return this.items.filter(dd, Od)
      }
      reduce(dd, Od) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(dd, Od) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(dd, Od) {
        return this.items.find(dd, Od)
      }
      findIndex(dd, Od) {
        return this.items.findIndex(dd, Od)
      }
      fill(dd, Od, md) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(dd, Od, md) {
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
        return RW
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
      includes(dd, Od) {
        return this.items.includes(dd, Od)
      }
      flatMap(dd, Od) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(dd) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(dd, Od) {
        const md = this.items.slice();
        return dd < 0 && (dd += this.length), md[dd] = Od, new RW(...md)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(dd) {
        return this.items.slice().sort(dd)
      }
      toSpliced(dd, Od) {
        for (var md = arguments.length, Wd = new Array(md > 2 ? md - 2 : 0), Fd = 2; Fd < md; Fd++) Wd[Fd - 2] = arguments[Fd];
        const Rd = this.items.slice();
        return Rd.splice.apply(Rd, arguments), Rd
      }
      shuffle() {
        return this.move((dd => {
          let Od = this.items.length;
          for (; 0 != Od;) {
            let dd = Math.floor(Math.random() * Od);
            Od--, [this[Od], this[dd]] = [this[dd], this[Od]]
          }
        }))
      }
      move(dd) {
        return this.isMovingItems = !0, dd(this), this.isMovingItems = !1, this
      } [od](dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = this[bd] ?? this;
        return Od || md.deletedIndexes[dd] ? md.items[dd] : md.tmpItems[dd] || md.items[dd]
      } [Nd](dd) {
        const Od = this[bd] ?? this;
        Od.items[dd] = void 0, Od._needsCompaction = !0
      } [Td]() {
        const dd = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, dd), this.deletedIndexes.length = 0)
      } [Yd]() {
        const dd = this[bd] ?? this;
        dd._needsCompaction && (dd._needsCompaction = !1, dd.items = dd.items.filter((dd => void 0 !== dd)))
      } [qd](dd, Od, md) {
        const Wd = this[bd] ?? this,
          Fd = Wd.items;
        let Rd = !1;
        for (let Xd = 0; Xd < Fd.length; Xd++) {
          const Kd = Fd[Xd];
          dd.has(Xd) ? md(Kd) : (Rd = !0, Od(Kd, Xd), Wd[Nd](Xd))
        }
        Rd && Wd[Yd]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((dd => "function" === typeof dd.toJSON ? dd.toJSON() : dd))
      }
      clone(dd) {
        let Od;
        return dd ? (Od = new RW, Od.push(...this.items)) : Od = new RW(...this.map((dd => dd[Hd] ? dd.clone() : dd))), Od
      }
    }
    EO("array", {
      constructor: RW
    });
    class XW {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(dd) {
        const Od = this.indexByKey[dd];
        return void 0 === Od ? void 0 : Od
      }
      assign(dd) {
        const Od = this.nextIndex++;
        return this.indexByKey[dd] = Od, this.keyByIndex.set(Od, dd), Od
      }
      snapshot(dd, Od) {
        (this.snapshots ??= new Map).set(dd, Od)
      }
      forgetSnapshot(dd) {
        this.snapshots?.delete(dd)
      }
      snapshotAt(dd) {
        return this.snapshots?.get(dd)
      }
      setIndex(dd, Od) {
        this.keyByIndex.set(dd, Od), this.indexByKey[Od] = dd
      }
      keyOf(dd) {
        return this.keyByIndex.get(dd)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [dd] of this.snapshots) {
            const Od = this.keyByIndex.get(dd);
            void 0 !== Od && (delete this.indexByKey[Od], this.keyByIndex.delete(dd))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class KW {
      [Hd];
      [Kd];
      childType;
      [yd];
      $items = new Map;
      journal = new XW;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(dd) {
        (this._stream ??= xO()).maxPerTick = dd
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(dd) {
        (this._stream ??= xO()).priority = dd
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[vd] = nm;
      static[Qd] = Mm;
      static COLLECTION_KIND = em;
      static[td](dd, Od, md) {
        if (!md || "string" === typeof dd[yd]) return !0;
        const Wd = dd[od](Od) ?? dd.journal.snapshotAt(Od);
        return md.isChangeTreeVisible(Wd[Hd])
      }
      static is(dd) {
        return void 0 !== dd.map
      }
      constructor(dd) {
        if (Object.defineProperty(this, Hd, {
            value: new Vm(this),
            enumerable: !1,
            writable: !0
          }), this[yd] = void 0, dd)
          if (dd instanceof Map || dd instanceof KW) dd.forEach(((dd, Od) => this.set(Od, dd)));
          else
            for (const Od in dd) this.set(Od, dd[Od])
      }
      static initializeForDecoder() {
        const dd = Object.create(KW.prototype);
        return dd.$items = new Map, dd.journal = new XW, dd[yd] = void 0, Am(dd), dd
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return KW
      }
      set(dd, Od) {
        if (void 0 === Od || null === Od) throw new Error(`MapSchema#set('${dd}', ${Od}): trying to set ${Od} value on '${dd}'.`);
        "object" === typeof Od && this[yd] && mW(Od, this[yd], this, dd), dd = dd.toString();
        const md = this[Hd],
          Wd = void 0 !== Od[Hd],
          Rd = this.journal;
        let Xd, Kd = Rd.indexOf(dd);
        if (void 0 !== Kd) {
          Xd = Fd.REPLACE;
          const md = this.$items.get(dd);
          if (md === Od) return;
          Wd && (Xd = Fd.DELETE_AND_ADD, void 0 !== md && md[Hd].root?.remove(md[Hd])), void 0 !== Rd.snapshotAt(Kd) && Rd.forgetSnapshot(Kd)
        } else Kd = Rd.assign(dd), Xd = Fd.ADD;
        return this.$items.set(dd, Od), Xd === Fd.ADD && md.isStreamCollection ? void 0 !== md.root && SO(this, md.root, Kd) : md.change(Kd, Xd), Wd && Od[Hd].setParent(this, md.root, Kd), this
      }
      get(dd) {
        return this.$items.get(dd)
      }
      getOrInsert(dd, Od) {
        return this.$items.has(dd) ? this.$items.get(dd) : (this.set(dd, Od), Od)
      }
      getOrInsertComputed(dd, Od) {
        if (this.$items.has(dd)) return this.$items.get(dd);
        const md = Od(dd);
        return this.set(dd, md), md
      }
      delete(dd) {
        if (!this.$items.has(dd)) return !1;
        const Od = this.journal.indexOf(dd),
          md = this.$items.get(dd),
          Wd = this[Hd];
        if (Wd.isStreamCollection) {
          const Fd = Wd.root;
          let Rd = !1;
          return void 0 !== Fd && (Rd = sO(this, Fd, this[Kd], Od)), void 0 !== md?.[Hd] && Fd?.remove(md[Hd]), this.$items.delete(dd), Rd || this.journal.snapshot(Od, md), !0
        }
        return this.journal.snapshot(Od, md), Wd.delete(Od), this.$items.delete(dd)
      }
      clear() {
        const dd = this[Hd];
        dd.discard(), dd.forEachChild(((Od, md) => {
          dd.root?.remove(Od)
        })), this.journal.reset(), this.$items.clear(), dd.operation(Fd.CLEAR)
      } [pd]() {
        const dd = this[Hd];
        if (dd.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((dd => dd?.[pd]?.())), this.$items.clear(), this.journal.reset(), dd.recycle(), this[Kd] = void 0
      }
      has(dd) {
        return this.$items.has(dd)
      }
      forEach(dd) {
        this.$items.forEach(dd)
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
        this[Hd].pause()
      }
      resumeTracking() {
        this[Hd].resume()
      }
      untracked(dd) {
        return this[Hd].untracked(dd)
      }
      get isTrackingPaused() {
        return this[Hd].paused
      }
      setIndex(dd, Od) {
        this.journal.setIndex(dd, Od)
      }
      getIndex(dd) {
        return this.journal.keyOf(dd)
      } [od](dd) {
        const Od = this.journal.keyOf(dd);
        return void 0 !== Od ? this.$items.get(Od) : void 0
      } [Nd](dd) {
        const Od = this.journal.keyOf(dd);
        void 0 !== Od && (this.$items.delete(Od), this.journal.keyByIndex.delete(dd))
      } [qd](dd, Od, md) {
        let Wd = null;
        if (this.$items.forEach(((Fd, Rd) => {
            dd.has(Rd) ? md(Fd) : ((Wd ??= new Set).add(Rd), Od(Fd, Rd))
          })), null !== Wd) {
          Wd.forEach((dd => {
            this.$items.delete(dd), delete this.journal.indexByKey[dd]
          }));
          const dd = [];
          this.journal.keyByIndex.forEach(((Od, md) => {
            Wd.has(Od) && dd.push(md)
          }));
          for (let Od = 0; Od < dd.length; Od++) this.journal.keyByIndex.delete(dd[Od])
        }
      } [Td]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(dd) {
        AO(this, dd)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (dd => {
          let [Od, md] = dd;
          return [Od, "function" === typeof md.toJSON ? md.toJSON() : md]
        })))
      }
      clone(dd) {
        let Od;
        return dd ? Od = Object.assign(new KW, this) : (Od = new KW, this.forEach(((dd, md) => {
          dd[Hd] ? Od.set(md, dd.clone()) : Od.set(md, dd)
        }))), Od
      }
    }
    EO("map", {
      constructor: KW
    });
    class hW {
      [Hd];
      [Kd];
      [yd];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(dd) {
        (this._stream ??= xO()).maxPerTick = dd
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(dd) {
        (this._stream ??= xO()).priority = dd
      }
      static[vd] = Lm;
      static[Qd] = Mm;
      static COLLECTION_KIND = Cm;
      static[td](dd, Od, md) {
        return !md || "string" === typeof dd[yd] || md.isChangeTreeVisible((dd[od](Od) ?? dd.deletedItems[Od])[Hd])
      }
      static is(dd) {
        return void 0 !== dd.collection
      }
      constructor(dd) {
        Object.defineProperty(this, Hd, {
          value: new Vm(this),
          enumerable: !1,
          writable: !0
        }), this[yd] = void 0, dd && dd.forEach((dd => this.add(dd)))
      }
      static initializeForDecoder() {
        const dd = Object.create(hW.prototype);
        return dd.$items = new Map, dd.deletedItems = {}, dd.$refId = 0, dd[yd] = void 0, Am(dd), dd
      }
      add(dd) {
        const Od = this.$refId++,
          md = this[Hd];
        return this.$items.set(Od, dd), md.isStreamCollection ? void 0 !== md.root && SO(this, md.root, Od) : md.change(Od), void 0 !== dd[Hd] && dd[Hd].setParent(this, md.root, Od), Od
      }
      at(dd) {
        const Od = Array.from(this.$items.keys())[dd];
        return this.$items.get(Od)
      }
      entries() {
        return this.$items.entries()
      }
      delete(dd) {
        const Od = this.$items.entries();
        let md, Wd;
        for (;
          (Wd = Od.next()) && !Wd.done;)
          if (dd === Wd.value[1]) {
            md = Wd.value[0];
            break
          } if (void 0 === md) return !1;
        const Fd = this[Hd];
        if (Fd.isStreamCollection) {
          const dd = Fd.root,
            Od = this.$items.get(md);
          return void 0 !== dd && sO(this, dd, this[Kd], md), void 0 !== Od?.[Hd] && dd?.remove(Od[Hd]), this.deletedItems[md] = Od, this.$items.delete(md)
        }
        return this.deletedItems[md] = Fd.delete(md), this.$items.delete(md)
      }
      clear() {
        const dd = this[Hd];
        dd.discard(), dd.forEachChild(((Od, md) => {
          dd.root?.remove(Od)
        })), this.$items.clear(), dd.operation(Fd.CLEAR)
      } [pd]() {
        const dd = this[Hd];
        if (dd.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((dd => dd?.[pd]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, dd.recycle(), this[Kd] = void 0
      }
      has(dd) {
        return Array.from(this.$items.values()).some((Od => Od === dd))
      }
      forEach(dd) {
        this.$items.forEach(((Od, md, Wd) => dd(Od, md, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Hd].pause()
      }
      resumeTracking() {
        this[Hd].resume()
      }
      untracked(dd) {
        return this[Hd].untracked(dd)
      }
      get isTrackingPaused() {
        return this[Hd].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(dd, Od) {}
      getIndex(dd) {
        return dd
      } [od](dd) {
        return this.$items.get(dd)
      } [Nd](dd) {
        this.$items.delete(dd)
      } [qd](dd, Od, md) {
        let Wd = null;
        if (this.$items.forEach(((Fd, Rd) => {
            dd.has(Rd) ? md(Fd) : ((Wd ??= []).push(Rd), Od(Fd, Rd))
          })), null !== Wd)
          for (let Fd = 0; Fd < Wd.length; Fd++) this[Nd](Wd[Fd])
      } [Td]() {
        for (const dd in this.deletedItems) delete this.deletedItems[dd]
      }
      _dropView(dd) {
        AO(this, dd)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const dd = [];
        return this.forEach(((Od, md) => {
          dd.push("function" === typeof Od.toJSON ? Od.toJSON() : Od)
        })), dd
      }
      clone(dd) {
        let Od;
        return dd ? Od = Object.assign(new hW, this) : (Od = new hW, this.forEach((dd => {
          dd[Hd] ? Od.add(dd.clone()) : Od.add(dd)
        }))), Od
      }
    }
    EO("collection", {
      constructor: hW
    });
    class vW {
      [Hd];
      [Kd];
      [yd];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(dd) {
        (this._stream ??= xO()).maxPerTick = dd
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(dd) {
        (this._stream ??= xO()).priority = dd
      }
      static[vd] = Lm;
      static[Qd] = Mm;
      static COLLECTION_KIND = lm;
      static[td](dd, Od, md) {
        return !md || "string" === typeof dd[yd] || md.isVisible((dd[od](Od) ?? dd.deletedItems[Od])[Hd])
      }
      static is(dd) {
        return void 0 !== dd.set
      }
      constructor(dd) {
        Object.defineProperty(this, Hd, {
          value: new Vm(this),
          enumerable: !1,
          writable: !0
        }), this[yd] = void 0, dd && dd.forEach((dd => this.add(dd)))
      }
      static initializeForDecoder() {
        const dd = Object.create(vW.prototype);
        return dd.$items = new Map, dd.deletedItems = {}, dd.$refId = 0, dd[yd] = void 0, Am(dd), dd
      }
      add(dd) {
        if (this.has(dd)) return !1;
        const Od = this.$refId++,
          md = this[Hd];
        return this.$items.set(Od, dd), md.isStreamCollection ? void 0 !== md.root && SO(this, md.root, Od) : md.change(Od, Fd.ADD), void 0 !== dd[Hd] && dd[Hd].setParent(this, md.root, Od), Od
      }
      entries() {
        return this.$items.entries()
      }
      delete(dd) {
        const Od = this.$items.entries();
        let md, Wd;
        for (;
          (Wd = Od.next()) && !Wd.done;)
          if (dd === Wd.value[1]) {
            md = Wd.value[0];
            break
          } if (void 0 === md) return !1;
        const Fd = this[Hd];
        if (Fd.isStreamCollection) {
          const dd = Fd.root,
            Od = this.$items.get(md);
          return void 0 !== dd && sO(this, dd, this[Kd], md), void 0 !== Od?.[Hd] && dd?.remove(Od[Hd]), this.deletedItems[md] = Od, this.$items.delete(md)
        }
        return this.deletedItems[md] = Fd.delete(md), this.$items.delete(md)
      }
      clear() {
        const dd = this[Hd];
        dd.discard(), this.$items.clear(), dd.operation(Fd.CLEAR)
      } [pd]() {
        const dd = this[Hd];
        if (dd.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((dd => dd?.[pd]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, dd.recycle(), this[Kd] = void 0
      }
      has(dd) {
        const Od = this.$items.values();
        let md, Wd = !1;
        for (;
          (md = Od.next()) && !md.done;)
          if (dd === md.value) {
            Wd = !0;
            break
          } return Wd
      }
      forEach(dd) {
        this.$items.forEach(((Od, md, Wd) => dd(Od, md, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Hd].pause()
      }
      resumeTracking() {
        this[Hd].resume()
      }
      untracked(dd) {
        return this[Hd].untracked(dd)
      }
      get isTrackingPaused() {
        return this[Hd].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(dd, Od) {}
      getIndex(dd) {
        return dd
      } [od](dd) {
        return this.$items.get(dd)
      } [Nd](dd) {
        this.$items.delete(dd)
      } [qd](dd, Od, md) {
        let Wd = null;
        if (this.$items.forEach(((Fd, Rd) => {
            dd.has(Rd) ? md(Fd) : ((Wd ??= []).push(Rd), Od(Fd, Rd))
          })), null !== Wd)
          for (let Fd = 0; Fd < Wd.length; Fd++) this[Nd](Wd[Fd])
      } [Td]() {
        for (const dd in this.deletedItems) delete this.deletedItems[dd]
      }
      _dropView(dd) {
        AO(this, dd)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const dd = [];
        return this.forEach(((Od, md) => {
          dd.push("function" === typeof Od.toJSON ? Od.toJSON() : Od)
        })), dd
      }
      clone(dd) {
        let Od;
        return dd ? Od = Object.assign(new vW, this) : (Od = new vW, this.forEach((dd => {
          dd[Hd] ? Od.add(dd.clone()) : Od.add(dd)
        }))), Od
      }
    }
    EO("set", {
      constructor: vW
    });
    class QW {
      [Hd];
      [Kd];
      [yd];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(dd) {
        (this._stream ??= xO()).maxPerTick = dd
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(dd) {
        (this._stream ??= xO()).priority = dd
      }
      static $isStream = !0;
      static[vd] = Lm;
      static[Qd] = Mm;
      static COLLECTION_KIND = Zm;
      static[td](dd, Od, md) {
        if (!md) return !0;
        const Wd = dd[od](Od);
        return void 0 !== Wd && md.isVisible(Wd[Hd])
      }
      static is(dd) {
        return dd && void 0 !== dd.stream
      }
      constructor() {
        Object.defineProperty(this, Hd, {
          value: new Vm(this),
          enumerable: !1,
          writable: !0
        }), this[yd] = void 0
      }
      static initializeForDecoder() {
        const dd = Object.create(QW.prototype);
        return dd.$items = new Map, dd.$nextPosition = 0, dd._itemIndex = new Map, dd[yd] = void 0, Am(dd), dd
      }
      add(dd) {
        if (this._itemIndex.has(dd)) return -1;
        const Od = this.$nextPosition++;
        this.$items.set(Od, dd), this._itemIndex.set(dd, Od);
        const md = this[Hd].root;
        return void 0 !== dd[Hd] && dd[Hd].setParent(this, md, Od), void 0 !== md && SO(this, md, Od), Od
      }
      remove(dd) {
        const Od = this._itemIndex.get(dd);
        if (void 0 === Od) return !1;
        this._itemIndex.delete(dd), this.$items.delete(Od);
        const md = this[Hd].root;
        return void 0 !== md && (sO(this, md, this[Kd], Od), void 0 !== dd[Hd] && md.remove(dd[Hd])), !0
      }
      has(dd) {
        return this._itemIndex.has(dd)
      }
      clear() {
        const dd = this[Hd].root;
        if (void 0 !== dd) {
          ! function(dd, Od, md) {
            const Wd = dd._stream;
            if (void 0 !== Wd) {
              Wd.broadcastPending.clear();
              for (const dd of Wd.sentBroadcast) Wd.broadcastDeletes.add(dd);
              Wd.sentBroadcast.clear(), Od.forEachActiveView((dd => {
                Wd.pendingByView.get(dd.id)?.clear();
                const Od = Wd.sentByView.get(dd.id);
                if (void 0 !== Od && Od.size > 0) {
                  let Wd = dd.changes.get(md);
                  void 0 === Wd && (Wd = new Map, dd.changes.set(md, Wd));
                  for (const dd of Od) Wd.set(dd, Fd.DELETE);
                  Od.clear()
                }
              }))
            }
          }(this, dd, this[Kd]);
          for (const Od of this.$items.values()) void 0 !== Od[Hd] && dd.remove(Od[Hd])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(dd) {
        for (const [Od, md] of this.$items) dd(md, Od, this)
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
      setIndex(dd, Od) {}
      getIndex(dd) {
        return dd
      } [od](dd) {
        return this.$items.get(dd)
      } [Nd](dd) {
        const Od = this.$items.get(dd);
        void 0 !== Od && (this._itemIndex.delete(Od), this.$items.delete(dd))
      } [qd]() {} [Td]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const dd = [];
        return this.forEach((Od => {
          dd.push("function" === typeof Od?.toJSON ? Od.toJSON() : Od)
        })), dd
      }
      clone(dd) {
        if (dd) {
          return Object.assign(new QW, this)
        }
        const Od = new QW;
        return Od.maxPerTick = this.maxPerTick, this.forEach((dd => {
          Od.add("function" === typeof dd?.clone ? dd.clone() : dd)
        })), Od
      }
      _dropView(dd) {
        AO(this, dd)
      }
      _unregister() {}
    }
    EO("stream", {
      constructor: QW
    });
    class tW {
      [wd] = !0;
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
      constructor(dd) {
        this._type = dd
      }
      default (dd) {
        return this._default = dd, this._hasDefault = !0, this
      }
      view(dd) {
        return this._view = dd ?? -1, this
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
        const dd = this._type;
        if (dd && "object" === typeof dd && void 0 !== dd.array) throw new Error(UO);
        return this._stream = !0, this
      }
      priority(dd) {
        return this._streamPriority = dd, this
      }
      deprecated() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = dd, this
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

    function oW(dd) {
      return null != dd && !0 === dd[wd]
    }

    function NW(dd) {
      return () => new tW(dd)
    }

    function qW(dd) {
      if (oW(dd)) {
        const Od = dd._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Od?`use the type name instead: t.array("${Od}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return dd
    }

    function HW(dd) {
      return new tW({
        quantized: GO(dd)
      })
    }
    const yW = Object.freeze({
        string: NW("string"),
        number: NW("number"),
        boolean: NW("boolean"),
        int8: NW("int8"),
        uint8: NW("uint8"),
        int16: NW("int16"),
        uint16: NW("uint16"),
        int32: NW("int32"),
        uint32: NW("uint32"),
        int64: NW("int64"),
        uint64: NW("uint64"),
        float32: NW("float32"),
        float64: NW("float64"),
        bigint64: NW("bigint64"),
        biguint64: NW("biguint64"),
        ref: dd => new tW(dd),
        array: dd => new tW({
          array: qW(dd)
        }),
        map: dd => new tW({
          map: qW(dd)
        }),
        set: dd => new tW({
          set: qW(dd)
        }),
        collection: dd => new tW({
          collection: qW(dd)
        }),
        stream: dd => {
          const Od = new tW({
            stream: qW(dd)
          });
          return Od._stream = !0, Od
        },
        quantized: HW,
        angle: dd => HW({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: dd?.bits ?? 16
        })
      }),
      bW = -1;

    function TW(dd) {
      return cO.register(dd), dd
    }

    function pW() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bW;
      return function(Od, md) {
        const Wd = ZO.initialize(Od.constructor);
        ZO.setTag(Wd, md, dd)
      }
    }

    function YW(dd, Od) {
      const md = ZO.initialize(dd.constructor);
      ZO.setUnreliable(md, Od)
    }

    function gW(dd, Od) {
      const md = ZO.initialize(dd.constructor);
      ZO.setPatchOnly(md, Od)
    }

    function wW(dd, Od) {
      const md = ZO.initialize(dd.constructor);
      ZO.setFullStateOnly(md, Od)
    }

    function aW(dd, Od) {
      return function(md, Wd) {
        const Fd = md.constructor;
        if (!dd) throw new Error(`${Fd.name}: @type() reference provided for "${Wd}" is undefined. Make sure you don't have any circular dependencies.`);
        dd = DO(dd, `${Fd.name}.${Wd}`), cO.register(Fd);
        const Rd = Object.getPrototypeOf(Fd)[Symbol.metadata],
          Xd = ZO.initialize(Fd);
        let Kd = Xd[Wd];
        if (void 0 !== Xd[Kd]) {
          if (Xd[Kd].deprecated) return;
          if (void 0 !== Xd[Kd].type) {
            const dd = new Error(`@colyseus/schema: Duplicate '${Wd}' definition on '${Fd.name}'.\nCheck @type() annotation`);
            throw new Error(`${dd.message} ${dd.stack.split("\n")[4].trim()}`)
          }
        } else Kd = Xd[xd] ?? (Rd && Rd[xd]) ?? -1, Kd++;
        if (Od && Od.manual) ZO.addField(Xd, Kd, Wd, dd, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: Od,
            childType: md
          } = jO(dd);
          ZO.addField(Xd, Kd, Wd, dd, JW(Wd, Kd, md, Od))
        }
        Xd[Ed][Wd] && Object.defineProperty(md, Wd, Xd[Ed][Wd]), ("string" === typeof dd || nO(dd)) && (Xd[Ud] || Object.defineProperty(Xd, Ud, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Xd[Ud][Kd] = "string" === typeof dd ? WO[dd] : zO(dd.quantized))
      }
    }
    const EW = {
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

    function JW(dd, Od, md, Wd) {
      let Rd;
      return Rd = Wd ? function(dd, Od, md, Wd) {
        const Rd = Wd.constructor === RW,
          Xd = Wd.constructor === KW;
        return function(dd) {
          const Wd = this[gd],
            Kd = Wd[Od];
          if (dd !== Kd) {
            if (void 0 !== dd && null !== dd) {
              if (!Rd || dd instanceof RW)
                if (!Xd || dd instanceof KW) dd[yd] = md;
                else {
                  const Od = new KW;
                  if (Od[yd] = md, dd instanceof Map) dd.forEach(((dd, md) => Od.set(md, dd)));
                  else
                    for (const md in dd) Od.set(md, dd[md]);
                  dd = Od
                }
              else {
                const Od = new RW;
                Od[yd] = md, Od.push(...dd), dd = Od
              }
              const Wd = this[Hd],
                vd = this.constructor;
              void 0 !== Kd && null !== Kd && Kd[Hd] ? (Wd.root?.remove(Kd[Hd]), vd[hd](Wd, Od, Fd.DELETE_AND_ADD)) : vd[hd](Wd, Od, Fd.ADD), dd[Hd]?.setParent(this, Wd.root, Od)
            } else void 0 !== Kd && null !== Kd && this[Hd].delete(Od);
            Wd[Od] = dd
          }
        }
      }(0, Od, md, Wd) : "string" === typeof md ? function(dd, Od, md) {
        const Wd = EW[md],
          Rd = "string" === md,
          Xd = "boolean" === md;
        return function(md) {
          const Kd = this[gd],
            vd = Kd[Od];
          if (md !== vd) {
            if (void 0 !== md && null !== md) {
              if (!Xd && void 0 !== Wd && typeof md !== Wd && (!Rd || null !== md)) {
                const Od = md && md.constructor ? ` (${md.constructor.name})` : "";
                throw new OW(`a '${Wd}' was expected, but '${JSON.stringify(md)}'${Od} was provided in ${this.constructor.name}#${dd}`)
              }
              this.constructor[hd](this[Hd], Od, Fd.ADD)
            } else void 0 !== vd && null !== vd && this[Hd].delete(Od);
            Kd[Od] = md
          }
        }
      }(dd, Od, md) : nO(md) ? function(dd, Od, md) {
        return function(Wd) {
          const Rd = this[gd],
            Xd = Rd[Od];
          if (void 0 !== Wd && null !== Wd) {
            if ("number" !== typeof Wd) throw new OW(`a 'number' was expected, but '${JSON.stringify(Wd)}' was provided in ${this.constructor.name}#${dd}`);
            if ((Wd = PO(md, LO(md, Wd))) === Xd) return;
            this.constructor[hd](this[Hd], Od, Fd.ADD)
          } else {
            if (Wd === Xd) return;
            void 0 !== Xd && null !== Xd && this[Hd].delete(Od)
          }
          Rd[Od] = Wd
        }
      }(dd, Od, md.quantized) : function(dd, Od, md) {
        return function(Wd) {
          const Rd = this[gd],
            Xd = Rd[Od];
          if (Wd !== Xd) {
            if (void 0 !== Wd && null !== Wd) {
              mW(Wd, md, this, dd);
              const Rd = this[Hd],
                Kd = this.constructor;
              void 0 !== Xd && null !== Xd && Xd[Hd] ? (Rd.root?.remove(Xd[Hd]), Kd[hd](Rd, Od, Fd.DELETE_AND_ADD)) : Kd[hd](Rd, Od, Fd.ADD), Wd[Hd]?.setParent(this, Rd.root, Od)
            } else void 0 !== Xd && null !== Xd && this[Hd].delete(Od);
            Rd[Od] = Wd
          }
        }
      }(dd, Od, md), {
        get: function() {
          return this[gd][Od]
        },
        set: Rd,
        enumerable: !0,
        configurable: !0
      }
    }

    function UW() {
      let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(Od, md) {
        const Wd = ZO.initialize(Od.constructor);
        ZO.setDeprecated(Wd, md), dd && (Wd[Ed] ??= {}, Wd[Ed][md] = {
          get: function() {
            throw new Error(`${md} is deprecated.`)
          },
          set: function(dd) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(Od, md, Wd[Ed][md]))
      }
    }
    let xW = !1;

    function BW(dd, Od, md) {
      xW || (xW = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Wd in Od) aW(Od[Wd], md)(dd.prototype, Wd);
      return dd
    }

    function SW(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uW;
      if (null == dd || "object" !== typeof dd) throw new Error(`schema(): first argument must be a fields object (got ${typeof dd}).`);
      const Wd = {},
        Fd = {},
        Rd = {},
        Xd = {},
        Kd = (dd, Od) => {
          if (Od.hasDefault)((dd, Od) => {
            "function" === typeof Od ? Xd[dd] = Od : Od && "function" === typeof Od.clone ? Xd[dd] = () => Od.clone() : Rd[dd] = Od
          })(dd, Od.default);
          else if (!Od.optional) {
            const md = function(dd) {
              if (dd && "object" === typeof dd) {
                if (void 0 !== dd.array) return () => new RW;
                if (void 0 !== dd.map) return () => new KW;
                if (void 0 !== dd.set) return () => new vW;
                if (void 0 !== dd.collection) return () => new hW;
                if (void 0 !== dd.stream) return () => new QW
              } else if ("function" === typeof dd && uW.is(dd) && (!dd.prototype.initialize || 0 === dd.prototype.initialize.length)) return () => new dd
            }(Od.type);
            md && (Xd[dd] = md)
          }
        },
        hd = {},
        vd = [],
        Qd = [],
        td = {},
        od = [],
        Nd = [],
        qd = {},
        Hd = [];
      for (const gd in dd) {
        const md = dd[gd],
          Rd = `schema(${Od?`'${Od}'`:""}): field '${gd}'`;
        if (oW(md)) {
          const dd = md.toDefinition();
          if (dd.noSync) {
            if (void 0 !== dd.view || dd.unreliable || dd.patchOnly || dd.fullStateOnly || dd.stream) throw new Error(`${Rd} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            Kd(gd, dd);
            continue
          }
          if (dd.patchOnly && dd.fullStateOnly) throw new Error(`${Rd} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const Od = DO(dd.type, Rd);
          if ("function" === typeof Od && !uW.is(Od)) throw new Error(`${Rd} is a synced ref to non-Schema class '${Od.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Wd[gd] = Od, void 0 !== dd.view && (hd[gd] = dd.view), dd.unreliable && vd.push(gd), dd.patchOnly && Qd.push(gd), dd.deprecated && (td[gd] = dd.deprecatedThrows), dd.fullStateOnly && od.push(gd), dd.stream && Nd.push(gd), void 0 !== dd.streamPriority && (qd[gd] = dd.streamPriority), dd.optional && Hd.push(gd), Kd(gd, dd)
        } else {
          if ("function" !== typeof md) throw new Error(`${Rd} must be a t.* builder, Schema subclass, or method (got ${typeof md}).`);
          uW.is(md) ? (Wd[gd] = md, md.prototype.initialize && 0 !== md.prototype.initialize.length || (Xd[gd] = () => new md)) : Fd[gd] = md
        }
      }
      const yd = dd => {
          for (const Od in Rd) dd[Od] = Rd[Od];
          for (const Od in Xd) dd[Od] = Xd[Od]()
        },
        bd = () => {
          const dd = {};
          return yd(dd), dd
        },
        Td = "function" === typeof Fd.initialize,
        pd = Fd.initialize ?? md._initialize,
        Yd = class extends md {
          constructor() {
            for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
            const Fd = Od[0];
            void 0 === Fd ? (super(), yd(this)) : super(Object.assign(bd(), Td ? (dd => {
              const Od = Object.keys(Wd),
                md = {};
              for (const Wd in dd) Od.includes(Wd) || (md[Wd] = dd[Wd]);
              return md
            })(Fd) : Fd)), pd && new.target === Yd && pd.apply(this, Od)
          }
        };
      Od && Object.defineProperty(Yd, "name", {
        value: Od
      }), ZO.setFields(Yd, Wd), Yd._getDefaultValues = bd, Yd._initialize = pd, Object.assign(Yd.prototype, Fd);
      for (const gd in hd) pW(hd[gd])(Yd.prototype, gd);
      for (const gd of vd) YW(Yd.prototype, gd);
      for (const gd of Qd) gW(Yd.prototype, gd);
      for (const gd in td) UW(td[gd])(Yd.prototype, gd);
      if (od.length > 0 || Nd.length > 0) {
        const dd = Yd[Symbol.metadata];
        for (const Od of od) ZO.setFullStateOnly(dd, Od);
        for (const Od of Nd) ZO.setStream(dd, Od);
        for (const Od in qd) ZO.setStreamPriority(dd, Od, qd[Od])
      }
      if (Hd.length > 0) {
        const dd = Yd[Symbol.metadata];
        for (const Od of Hd) dd[dd[Od]].optional = !0
      }
      return Yd.extend = (dd, Od) => SW(dd, Od, Yd), Yd
    }

    function sW(dd) {
      const Od = dd[Hd].root,
        md = {
          ops: {},
          refs: []
        };
      let Wd = Od.changes.next;
      for (; Wd;) {
        const dd = Wd.changeTree;
        void 0 !== dd ? (md.refs.push(`refId#${dd.ref[Kd]}`), dd.forEach(((dd, Od) => {
          if (dd < 0 || !Od) return;
          const Wd = Fd[Od];
          md.ops[Wd] || (md.ops[Wd] = 0), md.ops[Wd]++
        })), Wd = Wd.next) : Wd = Wd.next
      }
      return md
    }
    class uW {
      static[vd] = Gm;
      static[Qd] = fm;
      [Kd];
      [gd];
      static initialize(dd) {
        Object.defineProperty(dd, Hd, {
          value: new Vm(dd),
          enumerable: !1,
          writable: !0
        }), dd[gd] = []
      }
      static initializeForDecoder() {
        const dd = Object.create(this.prototype);
        return Am(dd), dd[gd] = [], dd
      }
      static reset(dd) {
        const Od = dd?.[Hd];
        if (void 0 === Od || "function" !== typeof Od.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== Od.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${dd.constructor.name}) with multiple parents.`);
        dd[pd]()
      } [pd]() {
        const dd = this.constructor[Symbol.metadata],
          Od = dd?.[Bd] ?? [],
          md = this[gd];
        for (let Wd = 0; Wd < Od.length; Wd++) {
          const dd = md[Od[Wd]];
          dd?.[pd]?.()
        }
        this[Hd].recycle(), this[Kd] = void 0
      }
      static is(dd) {
        const Od = dd[Symbol.metadata];
        return "object" === typeof Od && null !== Od
      }
      static isSchema(dd) {
        return "function" === typeof dd?.assign
      }
      static[hd](dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fd.ADD;
        dd.change(Od, md)
      }
      static[td](dd, Od, md) {
        const Wd = dd.constructor[Symbol.metadata],
          Fd = Wd[Od]?.tag;
        return void 0 === md ? void 0 === Fd : void 0 === Fd || (Fd === bW ? md.isChangeTreeVisible(dd[Hd]) : md.hasTagOnTree(dd[Hd], Fd))
      }
      constructor(dd) {
        uW.initialize(this), dd && uW.assignProps(this, dd)
      }
      assign(dd) {
        return uW.assignProps(this, dd), this
      }
      static assignProps(dd, Od) {
        const md = dd.constructor[Symbol.metadata];
        if (md && void 0 !== md[xd])
          for (let Fd = 0; Fd <= md[xd]; Fd++) {
            const Wd = md[Fd];
            if (!Wd) continue;
            const Rd = Od[Wd.name];
            void 0 !== Rd && (dd[Wd.name] = Rd)
          }
        const Wd = Object.keys(Od);
        for (let Fd = 0; Fd < Wd.length; Fd++) {
          const Rd = Wd[Fd];
          md && void 0 !== md[Rd] || (dd[Rd] = Od[Rd])
        }
      }
      restore(dd) {
        const Od = this.constructor[Symbol.metadata];
        for (const md in Od) {
          const Wd = Od[md],
            Fd = Wd.name,
            Rd = Wd.type,
            Xd = dd[Fd];
          if (void 0 !== Xd && null !== Xd)
            if ("string" === typeof Rd) this[Fd] = Xd;
            else if (uW.is(Rd)) {
            const dd = new Rd;
            dd.restore(Xd), this[Fd] = dd
          } else if ("object" === typeof Rd) {
            const dd = Object.keys(Rd)[0],
              Od = Rd[dd];
            if ("map" === dd) {
              const dd = this[Fd];
              for (const md in Xd)
                if (uW.is(Od)) {
                  const Wd = new Od;
                  Wd.restore(Xd[md]), dd.set(md, Wd)
                } else dd.set(md, Xd[md])
            } else if ("array" === dd) {
              const dd = this[Fd];
              for (let md = 0; md < Xd.length; md++)
                if (uW.is(Od)) {
                  const Wd = new Od;
                  Wd.restore(Xd[md]), dd.push(Wd)
                } else dd.push(Xd[md])
            }
          }
        }
        return this
      }
      setDirty(dd, Od) {
        const md = this.constructor[Symbol.metadata];
        this[Hd].change(md[md[dd]].index, Od)
      }
      pauseTracking() {
        this[Hd].pause()
      }
      resumeTracking() {
        this[Hd].resume()
      }
      untracked(dd) {
        return this[Hd].untracked(dd)
      }
      get isTrackingPaused() {
        return this[Hd].paused
      }
      clone() {
        const dd = Object.create(this.constructor.prototype);
        uW.initialize(dd);
        const Od = this.constructor[Symbol.metadata];
        for (const md in Od) {
          const Wd = Od[md].name;
          "object" === typeof this[Wd] && "function" === typeof this[Wd]?.clone ? dd[Wd] = this[Wd].clone() : dd[Wd] = this[Wd]
        }
        return dd
      }
      toJSON() {
        const dd = {},
          Od = this.constructor[Symbol.metadata];
        for (const md in Od) {
          const Wd = Od[md],
            Fd = Wd.name;
          Wd.deprecated || null === this[Fd] || "undefined" === typeof this[Fd] || (dd[Fd] = "function" === typeof this[Fd].toJSON ? this[Fd].toJSON() : this[Fd])
        }
        return dd
      }
      discardAllChanges() {
        this[Hd].discardAll()
      } [od](dd) {
        return this[this.constructor[Symbol.metadata][dd].name]
      } [Nd](dd) {
        this[this.constructor[Symbol.metadata][dd].name] = void 0
      }
      static debugRefIds(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Rd = Od ? ` - ${JSON.stringify(dd.toJSON())}` : "",
          Xd = dd[Hd],
          hd = dd[Kd],
          vd = Wd ? Wd.root.refCount[hd] : Xd.refCount,
          Qd = vd > 1 ? ` [\xd7${vd}]` : "";
        let td = `${function(dd){return new Array(dd).fill(0).map(((Od,md)=>md===dd-1?"\u2514\u2500 ":"   ")).join("")}(md)}${Fd}${dd.constructor.name} (refId: ${hd})${Qd}${Rd}\n`;
        return Xd.forEachChild(((Fd, Rd) => {
          let Xd = Rd;
          "number" === typeof Rd && dd.$indexes && (Xd = dd.$indexes.get(Rd) ?? Rd);
          const Kd = void 0 !== dd.forEach && void 0 !== Xd ? `["${Xd}"]: ` : "";
          td += this.debugRefIds(Fd.ref, Od, md + 1, Wd, Kd)
        })), td
      }
      static debugRefIdEncodingOrder(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const md = [],
          Wd = dd[Hd];
        if ("changes" === Od) {
          let dd = Wd.root.changes?.next;
          for (; dd;) dd.changeTree && md.push(dd.changeTree.ref[Kd]), dd = dd.next;
          return md
        }
        const Fd = "allFilteredChanges" === Od,
          Rd = new Set,
          Xd = dd => {
            Rd.has(dd) || (Rd.add(dd), dd.isFiltered === Fd && md.push(dd.ref[Kd]), dd.forEachChild(((dd, Od) => Xd(dd))))
          };
        return Xd(Wd), md
      }
      static debugRefIdsFromDecoder(dd) {
        return this.debugRefIds(dd.state, !1, 0, dd)
      }
      static debugChanges(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = dd[Hd],
          Wd = Od ? "allChanges" : "changes";
        let Rd = `${dd.constructor.name} (${dd[Kd]}) -> .${Wd}:\n`;
        return Od ? md.forEachLive((dd => {
          Rd += `- [${dd}]: ADD (${JSON.stringify(md.getValue(Number(dd),!0))})\n`
        })) : md.forEach(((dd, Od) => {
          dd < 0 || !Od || (Rd += `- [${dd}]: ${Fd[Od]} (${JSON.stringify(md.getValue(Number(dd),!1))})\n`)
        })), Rd
      }
    }
    Rd(uW);
    const VW = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class iW {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const dd = {};
        for (const Od in this.changeTrees) dd[Od] = this.changeTrees[Od].refCount;
        return dd
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
      enqueueFilterRefresh(dd) {
        this.types.hasFilters && (dd.flags & sm || (dd.flags |= sm, this.pendingFilterRefresh.push(dd)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(dd) {
        this._freeViewIds.push(dd)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(dd) {
        this.activeViews.set(dd.id, new WeakRef(dd))
      }
      unregisterView(dd) {
        this.activeViews.delete(dd.id);
        const Od = dd.id;
        for (const md of this.streamTrees) md._dropView(Od)
      }
      forEachActiveView(dd) {
        for (const [Od, md] of this.activeViews) {
          const Wd = md.deref();
          if (void 0 !== Wd) dd(Wd);
          else {
            this.activeViews.delete(Od);
            for (const dd of this.streamTrees) dd._dropView(Od)
          }
        }
      }
      registerStream(dd) {
        this.streamTrees.add(dd)
      }
      unregisterStream(dd) {
        this.streamTrees.delete(dd)
      }
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = dd, this.nextUniqueId = Od
      }
      add(dd) {
        const Od = dd.ref;
        void 0 === Od[Kd] && (VW.value = this.nextUniqueId++, Object.defineProperty(Od, Kd, VW));
        const md = Od[Kd],
          Wd = void 0 === this.changeTrees[md];
        Wd && (this.changeTrees[md] = dd), dd.needsRestage && (dd.needsRestage = !1, dd.forEachLiveWithCtx(dd, Fm));
        const Fd = Wd ? 0 : dd.refCount;
        return dd.refCount = Fd + 1, Fd > 0 && this.enqueueFilterRefresh(dd), Wd
      }
      remove(dd) {
        const Od = dd.refCount - 1;
        if (Od <= 0) {
          if (dd.root = void 0, delete this.changeTrees[dd.ref[Kd]], dd.isStreamCollection) {
            const Od = dd.ref;
            Od._unregister?.(), this.unregisterStream(Od)
          }
          this.removeFromQueue(dd), this.removeFromUnreliableQueue(dd), dd.refCount = 0, dd.needsRestage = !0, dd.forEachChild(((Od, md) => {
            Od.removeParent(dd.ref) && (void 0 === Od.parentRef || Od.refCount > 0 ? this.remove(Od) : this.moveNextToParent(Od))
          }))
        } else dd.refCount = Od, this.enqueueFilterRefresh(dd), this.recursivelyMoveNextToParent(dd);
        return Od
      }
      recursivelyMoveNextToParent(dd) {
        this.moveNextToParent(dd), dd.forEachChild(((dd, Od) => this.recursivelyMoveNextToParent(dd)))
      }
      moveNextToParent(dd) {
        dd.changesNode && this._moveNextToParentInList(this.changes, dd, dd.changesNode, "changesNode"), dd.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, dd, dd.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(dd, Od, md, Wd) {
        const Fd = Od.parent;
        if (!Fd || !Fd[Hd]) return;
        const Rd = Fd[Hd][Wd];
        Rd && Rd !== md && (md.position > Rd.position || (md.prev ? md.prev.next = md.next : dd.next = md.next, md.next ? md.next.prev = md.prev : dd.tail = md.prev, md.prev = dd.tail, md.next = void 0, dd.tail.next = md, dd.tail = md, md.position = dd.nextPosition++))
      }
      enqueueChangeTree(dd) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.changesNode) || (dd.changesNode = this._appendToList(this.changes, dd))
      }
      enqueueUnreliable(dd) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.unreliableChangesNode) || (dd.unreliableChangesNode = this._appendToList(this.unreliableChanges, dd))
      }
      _appendToList(dd, Od) {
        const md = this._nodePool;
        let Wd;
        return md.length > 0 ? (Wd = md.pop(), Wd.changeTree = Od, Wd.next = void 0, Wd.prev = void 0) : Wd = {
          changeTree: Od,
          next: void 0,
          prev: void 0,
          position: 0
        }, dd.next ? (Wd.prev = dd.tail, dd.tail.next = Wd, dd.tail = Wd) : (dd.nextPosition = 0, dd.next = Wd, dd.tail = Wd), Wd.position = dd.nextPosition++, Wd
      }
      releaseNode(dd) {
        dd.changeTree = void 0, dd.prev = void 0, dd.next = void 0, this._nodePool.push(dd)
      }
      removeFromQueue(dd) {
        return this._removeNode(this.changes, dd, dd.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(dd) {
        return this._removeNode(this.unreliableChanges, dd, dd.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(dd, Od, md, Wd) {
        return !(!md || md.changeTree !== Od) && (md.prev ? md.prev.next = md.next : dd.next = md.next, md.next ? md.next.prev = md.prev : dd.tail = md.prev, Od[Wd] = void 0, this.releaseNode(md), !0)
      }
    }

    function AW(dd, Od) {
      if (-1 === Od || Od >= dd.length) return !1;
      const md = dd.length - 1;
      for (let Wd = Od; Wd < md; Wd++) dd[Wd] = dd[Wd + 1];
      return dd.length = md, !0
    }

    function rW(dd, Od, md) {
      const Wd = ~md,
        Fd = dd.changeTrees;
      for (const Rd in Fd) {
        const dd = Fd[Rd],
          md = dd.visibleViews;
        void 0 !== md && Od < md.length && (md[Od] &= Wd);
        const Xd = dd.subscribedViews;
        void 0 !== Xd && Od < Xd.length && (Xd[Od] &= Wd);
        const Kd = dd.tagViews;
        void 0 !== Kd && Kd.forEach((dd => {
          Od < dd.length && (dd[Od] &= Wd)
        }))
      }
    }
    const GW = new FinalizationRegistry((dd => {
      let {
        root: Od,
        id: md,
        slot: Wd,
        bit: Fd
      } = dd;
      rW(Od, Wd, Fd), Od.activeViews.delete(md);
      for (const Rd of Od.streamTrees) Rd._dropView(md);
      Od.releaseViewId(md)
    }));

    function nW(dd) {
      if (void 0 === dd) return "undefined";
      if (null === dd) return "null";
      const Od = typeof dd;
      return "string" === Od ? JSON.stringify(dd.length > 30 ? `${dd.slice(0,30)}\u2026` : dd) : "object" !== Od && "function" !== Od ? `${Od} ${String(dd)}` : Array.isArray(dd) ? `Array(${dd.length})` : dd.constructor?.name ?? "Object"
    }
    class LW {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = dd, dd && (this.items = [])
      }
      _bindRoot(dd) {
        void 0 === this._root && (this._root = dd, this.id = dd.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), dd.registerView(this), GW.register(this, {
          root: dd,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), rW(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), GW.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(dd) {
        const Od = dd.visibleViews,
          md = this._slot;
        return void 0 !== Od && md < Od.length && 0 !== (Od[md] & this._bit)
      }
      markVisible(dd) {
        const Od = this._slot;
        let md = dd.visibleViews;
        for (void 0 === md && (md = dd.visibleViews = []); md.length <= Od;) md.push(0);
        md[Od] |= this._bit
      }
      unmarkVisible(dd) {
        const Od = dd.visibleViews;
        if (void 0 === Od) return;
        const md = this._slot;
        md < Od.length && (Od[md] &= ~this._bit)
      }
      isSubscribed(dd) {
        const Od = dd.subscribedViews,
          md = this._slot;
        return void 0 !== Od && md < Od.length && 0 !== (Od[md] & this._bit)
      }
      _setSubscribed(dd) {
        const Od = this._slot;
        let md = dd.subscribedViews;
        for (void 0 === md && (md = dd.subscribedViews = []); md.length <= Od;) md.push(0);
        md[Od] |= this._bit
      }
      _clearSubscribed(dd) {
        const Od = dd.subscribedViews;
        if (void 0 === Od) return;
        const md = this._slot;
        md < Od.length && (Od[md] &= ~this._bit)
      }
      hasTagOnTree(dd, Od) {
        const md = dd.tagViews;
        if (void 0 === md) return !1;
        const Wd = this._slot,
          Fd = this._bit;
        for (let Rd = Od; 0 !== Rd; Rd &= Rd - 1) {
          const dd = md.get(Rd & -Rd);
          if (void 0 !== dd && Wd < dd.length && 0 !== (dd[Wd] & Fd)) return !0
        }
        return !1
      }
      addTag(dd, Od) {
        if (Od === bW) return;
        let md = dd.tagViews;
        void 0 === md && (md = dd.tagViews = new Map);
        const Wd = this._slot,
          Fd = this._bit;
        for (let Rd = Od; Rd > 0; Rd &= Rd - 1) {
          const dd = Rd & -Rd;
          let Od = md.get(dd);
          for (void 0 === Od && (Od = [], md.set(dd, Od)); Od.length <= Wd;) Od.push(0);
          Od[Wd] |= Fd
        }
      }
      removeTag(dd, Od) {
        if (Od === bW) return;
        const md = dd.tagViews;
        if (void 0 === md) return;
        const Wd = this._slot,
          Fd = ~this._bit;
        for (let Rd = Od; Rd > 0; Rd &= Rd - 1) {
          const dd = md.get(Rd & -Rd);
          void 0 !== dd && Wd < dd.length && (dd[Wd] &= Fd)
        }
      }
      removeAllTagsOnTree(dd) {
        const Od = dd.tagViews;
        if (void 0 === Od) return;
        const md = this._slot,
          Wd = ~this._bit;
        Od.forEach((dd => {
          md < dd.length && (dd[md] &= Wd)
        }))
      }
      add(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW,
          md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(dd, Od, md, !1)
      }
      _addImmediate(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW;
        this._add(dd, Od, !0, !0)
      }
      _add(dd, Od, md, Wd) {
        const Rd = dd?.[Hd];
        if (!Rd) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${nW(dd)}`), !1;
        const Xd = Rd.parent;
        if (!Xd && 0 !== dd[Kd]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Rd.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Rd.root && this._bindRoot(Rd.root);
        const hd = Xd?.[Hd];
        if (!Wd && hd?.isStreamCollection) return iO(Xd, this.id, Rd.parentIndex), !0;
        const vd = dd.constructor[Symbol.metadata],
          Qd = this.isVisible(Rd);
        if (!this.iterable || !md || Qd && -1 !== this.items.indexOf(dd) || this.items.push(dd), this.markVisible(Rd), md && Xd && this.addParentOf(Rd, Od), !Wd && Rd.isStreamCollection) return !0;
        if (Od === bW && Rd.isNew) return this._markSubtreeVisible(Rd, Od), !1;
        let td = this.changes.get(dd[Kd]);
        void 0 === td && (td = new Map, this.changes.set(dd[Kd], td));
        let od = !1;
        const Nd = Rd.encDescriptor.tags;
        if (Rd.forEachChild(((dd, md) => {
            const Wd = Nd[md];
            if (void 0 !== Wd) {
              if (!(Wd === bW || Od !== bW && 0 !== (Wd & Od))) return
            }
            this.add(dd.ref, Od, !1) && (od = !0)
          })), Od !== bW) {
          this.addTag(Rd, Od);
          const dd = vd?.[sd];
          if (void 0 !== dd)
            for (let md = Od; md > 0; md &= md - 1) dd[md & -md]?.forEach((dd => {
              Rd.getChange(dd) !== Fd.DELETE && td.set(dd, Fd.ADD)
            }))
        }
        if ((Od === bW || !Qd) && (!Rd.isNew || od))
          if (Rd.isArray && "string" !== typeof Rd.refTarget[yd]) Rd.refTarget.items.length > 0 && (td.set(-1, Fd.ADD), od = !0);
          else {
            const dd = Rd.encDescriptor.tags;
            Rd.forEachLive((md => {
              const Wd = dd[md];
              (void 0 === Wd || Wd === bW || Od !== bW && 0 !== (Wd & Od)) && (td.set(md, Fd.ADD), od = !0)
            }))
          } return od
      }
      _markSubtreeVisible(dd, Od) {
        const md = dd.encDescriptor.tags;
        dd.forEachChild(((dd, Wd) => {
          const Fd = md[Wd];
          if (void 0 !== Fd) {
            if (!(Fd === bW || Od !== bW && 0 !== (Fd & Od))) return
          }
          dd.isNew ? (this.markVisible(dd), this._markSubtreeVisible(dd, Od)) : this._add(dd.ref, Od, !1, !1)
        }))
      }
      addParentOf(dd, Od) {
        const md = dd.parent[Hd],
          Wd = dd.parentIndex;
        this.isVisible(md) || this.markVisible(md);
        const Rd = md.parent?.[Hd];
        if (Rd && this.addParentOf(md, Od), md.hasFilteredFields && md.getChange(Wd) !== Fd.DELETE) {
          let Rd = this.changes.get(md.ref[Kd]);
          void 0 === Rd && (Rd = new Map, this.changes.set(md.ref[Kd], Rd));
          const Xd = md.encDescriptor.tags[Wd];
          void 0 !== Xd && Xd !== bW && 0 !== (Xd & Od) && this.addTag(md, Od), Rd.set(md.isArray ? dd : Wd, Fd.ADD)
        }
      }
      _touchAncestorsOf(dd) {
        let Od = dd.parent?.[Hd];
        if (void 0 === Od) return;
        const md = [];
        for (; void 0 !== Od;) {
          if (Od.hasFilteredFields) {
            const dd = Od.ref[Kd];
            if (this.changes.has(dd)) break;
            md.push(Od)
          }
          Od = Od.parent?.[Hd]
        }
        for (let Wd = md.length - 1; Wd >= 0; Wd--) this.changes.set(md[Wd].ref[Kd], new Map)
      }
      remove(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW,
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = dd?.[Hd];
        if (!Wd) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${nW(dd)}`), this;
        const Rd = Wd.parent?.[Hd];
        if (Rd?.isStreamCollection) return this.unmarkVisible(Wd), this.iterable && !md && AW(this.items, this.items.indexOf(dd)),
          function(dd, Od, md, Wd, Rd) {
            const Xd = dd._stream;
            if (void 0 === Xd) return !1;
            const Kd = Xd.pendingByView.get(Od);
            if (Kd?.has(Wd)) return Kd.delete(Wd), !1;
            const hd = Xd.sentByView.get(Od);
            if (hd?.has(Wd)) {
              hd.delete(Wd);
              let dd = Rd.get(md);
              return void 0 === dd && (dd = new Map, Rd.set(md, dd)), dd.set(Wd, Fd.DELETE), !0
            }
          }(Wd.parent, this.id, Wd.parent[Kd], Wd.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Wd), this;
        if (Wd.isStreamCollection) {
          this.unmarkVisible(Wd), this.iterable && !md && AW(this.items, this.items.indexOf(dd));
          const Od = Wd.ref,
            Rd = Od._stream;
          if (void 0 !== Rd) {
            Rd.pendingByView.get(this.id)?.clear();
            const dd = Rd.sentByView.get(this.id);
            if (void 0 !== dd && dd.size > 0) {
              const md = Od[Kd];
              let Wd = this.changes.get(md);
              void 0 === Wd && (Wd = new Map, this.changes.set(md, Wd));
              for (const Od of dd) Wd.set(Od, Fd.DELETE);
              dd.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Wd), this.iterable && !md && AW(this.items, this.items.indexOf(dd));
        const Xd = Wd.ref,
          hd = Xd.constructor[Symbol.metadata],
          vd = Xd[Kd];
        this._touchAncestorsOf(Wd);
        let Qd = this.changes.get(vd);
        if (void 0 === Qd && (Qd = new Map, this.changes.set(vd, Qd)), Od === bW) {
          const dd = Wd.parent;
          if (dd && !ZO.isValidInstance(dd) && Wd.isFiltered) {
            const Od = Rd.isArray ? Wd : Wd.parentIndex,
              md = dd[Kd];
            let Xd = this.changes.get(md);
            void 0 === Xd ? (Xd = new Map, this.changes.set(md, Xd)) : Xd.get(Od) === Fd.ADD && this._dropPendingEntries(Wd), Xd.set(Od, Fd.DELETE), this._recursiveDeleteVisibleChangeTree(Wd)
          } else hd?.[Sd]?.forEach((dd => this._removeViewField(Wd, Qd, dd)))
        } else {
          const dd = hd?.[sd];
          if (void 0 !== dd)
            for (let md = Od; md > 0; md &= md - 1) dd[md & -md]?.forEach((dd => this._removeViewField(Wd, Qd, dd)))
        }
        return void 0 === Od ? this.removeAllTagsOnTree(Wd) : this.removeTag(Wd, Od), this
      }
      has(dd) {
        return this.isVisible(dd[Hd])
      }
      hasTag(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW;
        return this.hasTagOnTree(dd[Hd], Od)
      }
      subscribe(dd, Od) {
        const md = dd?.[Hd];
        if (!md) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${nW(dd)}`), this;
        if (void 0 === this._root && void 0 !== md.root && this._bindRoot(md.root), void 0 !== Od)
          if (md.isStreamCollection) {
            const md = BO(dd);
            null === Od ? md.priorityByView?.delete(this.id) : (md.priorityByView ??= new Map).set(this.id, Od)
          } else {
            const Od = dd?.constructor?.name ?? "collection",
              Wd = md.parent;
            if (void 0 === Wd) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Od} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const dd = Wd?.constructor?.[Symbol.metadata]?.[md.parentIndex]?.name,
                Fd = dd ? `${Wd.constructor.name}#${dd}` : Od;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Fd} is a ${Od}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(md)) return this;
        const Wd = void 0 !== md.parent && !this.isVisible(md);
        if (Wd ? (this.addParentOf(md, bW), this._add(dd, bW, !1, !1)) : this.markVisible(md), this._setSubscribed(md), md.isStreamCollection) {
          const Od = dd;
          md.forEachChild(((dd, md) => {
            iO(Od, this.id, md)
          }))
        } else Wd || md.forEachChild((dd => {
          this.markVisible(dd)
        }));
        return this
      }
      unsubscribe(dd) {
        const Od = dd?.[Hd];
        if (!Od) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${nW(dd)}`), this;
        if (!this.isSubscribed(Od)) return this;
        this._clearSubscribed(Od);
        const md = Od.ref[Kd];
        if (Od.isStreamCollection) {
          const Od = dd._stream;
          if (void 0 !== Od) {
            Od.pendingByView.get(this.id)?.clear();
            const dd = Od.sentByView.get(this.id);
            if (void 0 !== dd && dd.size > 0) {
              let Od = this.changes.get(md);
              void 0 === Od && (Od = new Map, this.changes.set(md, Od));
              for (const md of dd) Od.set(md, Fd.DELETE);
              dd.clear()
            }
          }
        } else {
          const dd = Od.isArray;
          let Wd = this.changes.get(md);
          Od.forEachChild(((Od, Rd) => {
            void 0 === Wd && (Wd = new Map, this.changes.set(md, Wd)), Wd.set(dd ? Od : Rd, Fd.DELETE), this.unmarkVisible(Od)
          }))
        }
        return this.unmarkVisible(Od), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let dd = 0, Od = this.items.length; dd < Od; dd++) this.remove(this.items[dd], bW, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(dd) {
        let Od = this.isVisible(dd);
        if (!Od && dd.isVisibilitySharedWithParent)
          if (this.isVisible(dd.parent[Hd])) this.markVisible(dd), Od = !0;
          else
            for (let md = dd.extraParents; void 0 !== md; md = md.next) {
              const Wd = md.ref[Hd];
              if (Wd.isFiltered && this.isVisible(Wd)) {
                this.markVisible(dd), Od = !0;
                break
              }
            }
        return Od
      }
      _recursiveDeleteVisibleChangeTree(dd) {
        dd.forEachChild((dd => {
          this.unmarkVisible(dd), this._recursiveDeleteVisibleChangeTree(dd)
        }))
      }
      _dropPendingEntries(dd) {
        this.changes.delete(dd.ref[Kd]), dd.forEachChild((dd => this._dropPendingEntries(dd)))
      }
      _removeViewField(dd, Od, md) {
        const Wd = Od.get(md) === Fd.ADD;
        Od.set(md, Fd.DELETE);
        const Rd = dd.ref[dd.encDescriptor.names[md]],
          Xd = Rd?.[Hd];
        Xd && (this.unmarkVisible(Xd), this._recursiveDeleteVisibleChangeTree(Xd), Wd && this._dropPendingEntries(Xd))
      }
    }

    function PW(dd) {
      dd.structSwitchEmitted || (dd.shouldEmitSwitch && (dd.buffer[dd.it.offset++] = 255, WO.number(dd.buffer, dd.ref[Kd], dd.it)), dd.structSwitchEmitted = !0)
    }

    function zW(dd, Od) {
      DW(dd, Od, Fd.ADD)
    }

    function cW(dd, Od) {
      if (Od._fullSyncGen === dd.gen) return;
      Od._fullSyncGen = dd.gen;
      if (!dd.hasView || dd.view.isChangeTreeVisible(Od)) {
        const md = Od.encDescriptor;
        dd.changeTree = Od, dd.ref = Od.ref, dd.encoder = md.encoder, dd.filter = md.filter, dd.metadata = md.metadata, dd.treeIsFiltered = Od.isFiltered, dd.isSchema = md.isSchema, dd.filterBitmask = md.filterBitmask, dd.tags = md.tags, dd.structSwitchEmitted = !1, dd.shouldEmitSwitch = dd.hasView || dd.it.offset > dd.initialOffset || Od !== dd.rootChangeTree, Od.isArray && Od.collDirty.size > 0 && (Od.flags |= 512), Xm(Od, dd, zW)
      }
      Ym(Od, dd, jW)
    }

    function jW(dd, Od, md) {
      cW(dd, Od)
    }

    function DW(dd, Od, md) {
      if (Od < 0) {
        if (dd.treeIsFiltered !== dd.emitFiltered) return;
        return PW(dd), void(dd.buffer[dd.it.offset++] = 255 & Math.abs(Od))
      }
      if ((dd.isSchema ? dd.treeIsFiltered || (Od < 32 ? 0 !== (dd.filterBitmask & 1 << Od) : void 0 !== dd.tags[Od]) : dd.treeIsFiltered) !== dd.emitFiltered) return;
      const Wd = dd.isEncodeAll ? Fd.ADD : md;
      void 0 !== Wd && (void 0 === dd.filter || dd.filter(dd.ref, Od, dd.view)) && (PW(dd), dd.encoder(dd.self, dd.buffer, dd.changeTree, Od, Wd, dd.it, dd.isEncodeAll, dd.hasView, dd.metadata))
    }

    function eW(dd, Od) {
      const md = new Uint8Array(dd.length + Od.length);
      return md.set(dd, 0), md.set(Od, dd.length), md
    }
    class IW {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(IW.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(dd, Od) {
        this.context = cO.cache(dd.constructor), this.root = Od ?? new iW(this.context), this.setState(dd)
      }
      setState(dd) {
        this.state = dd, this.state[Hd].setRoot(this.root)
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
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.offset;
        return this._encodeChannel(dd, Od, md, Wd, !1)
      }
      encodeUnreliable() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.offset;
        return this._encodeChannel(dd, Od, md, Wd, !0)
      }
      _encodeChannel(dd, Od, md, Wd, Fd) {
        this.root.pendingFilterRefresh.length > 0 && hm(this.root);
        const Rd = void 0 !== Od,
          Xd = this.state[Hd],
          Kd = this._encodeCtx;
        Kd.self = this, Kd.buffer = md, Kd.it = dd, Kd.view = Od, Kd.isEncodeAll = !1, Kd.hasView = Rd, Kd.emitFiltered = Rd;
        let hd = Fd ? this.root.unreliableChanges : this.root.changes;
        for (; hd = hd.next;) {
          const md = hd.changeTree;
          if (Rd && !Od.isChangeTreeVisible(md)) continue;
          const vd = Fd ? md.unreliableRecorder : md;
          if (!vd || !vd.has()) continue;
          const Qd = md.encDescriptor;
          Kd.changeTree = md, Kd.ref = md.ref, Kd.encoder = Qd.encoder, Kd.filter = Qd.filter, Kd.metadata = Qd.metadata, Kd.treeIsFiltered = md.isFiltered, Kd.isSchema = Qd.isSchema, Kd.filterBitmask = Qd.filterBitmask, Kd.tags = Qd.tags, Kd.structSwitchEmitted = !1, Kd.isRootTree = md === Xd, Kd.shouldEmitSwitch = Rd || dd.offset > Wd || !Kd.isRootTree, vd.forEachWithCtx(Kd, DW)
        }
        return Fd || Rd || !this._isStreamBroadcastMode || this._emitStreamBroadcast(md, dd), dd.offset > md.byteLength ? (md = this._resizeBuffer(md, dd.offset), dd.offset = Wd, this._encodeChannel(dd, Od, md, Wd, Fd)) : md.subarray(0, dd.offset)
      }
      encodeFullSync(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dd.offset;
        this.root.pendingFilterRefresh.length > 0 && hm(this.root);
        const Rd = void 0 !== Wd,
          Xd = this.state[Hd],
          Kd = this._encodeCtx;
        return Kd.self = this, Kd.buffer = Od, Kd.it = dd, Kd.view = Wd, Kd.isEncodeAll = !0, Kd.hasView = Rd, Kd.emitFiltered = md, Kd.gen = ++this._fullSyncGen, Kd.initialOffset = Fd, Kd.rootChangeTree = Xd, cW(Kd, Xd), dd.offset > Od.byteLength ? (Od = this._resizeBuffer(Od, dd.offset), dd.offset = Fd, this.encodeFullSync(dd, Od, md, Wd, Fd)) : Od.subarray(0, dd.offset)
      }
      _resizeBuffer(dd, Od) {
        const md = Math.ceil(Od / IW.BUFFER_SIZE) * IW.BUFFER_SIZE,
          Wd = new Uint8Array(md);
        return Wd.set(dd), dd === this.sharedBuffer && (this.sharedBuffer = Wd), Wd
      }
      encodeAll() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(dd, Od, !1)
      }
      encodeAllView(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Fd = md.offset;
        return Wd = this.encodeFullSync(md, Wd, !0, dd, Fd), eW(Wd.subarray(0, Od), Wd.subarray(Fd, md.offset))
      }
      ensureCapacity(dd, Od) {
        if (Od + IW.BUFFER_SIZE <= dd.byteLength) return dd;
        const md = Math.ceil((Od + IW.BUFFER_SIZE) / IW.BUFFER_SIZE) * IW.BUFFER_SIZE,
          Wd = new Uint8Array(md);
        return Wd.set(dd.subarray(0, Od)), dd === this.sharedBuffer && (this.sharedBuffer = Wd), Wd
      }
      encodeView(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Rd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Xd = md.offset;
        this._emitStreamPriority(dd);
        for (const hd of dd.changes.keys()) {
          const Od = dd.changes.get(hd),
            Rd = this.root.changeTrees[hd];
          if (void 0 === Rd) {
            dd.changes.delete(hd);
            continue
          }
          if (0 === Od.size) continue;
          const Xd = Rd.encDescriptor,
            vd = Xd.encoder,
            Qd = Xd.metadata,
            td = Rd.ref,
            Nd = Rd.refTarget;
          Wd = this.ensureCapacity(Wd, md.offset), Wd[md.offset++] = 255, WO.number(Wd, td[Kd], md);
          for (const [hd, qd] of Od) {
            let Od;
            if (-1 === hd) {
              const dd = Nd.tmpItems,
                Od = Nd.deletedIndexes;
              for (let Xd = 0; Xd < dd.length; Xd++) void 0 !== dd[Xd] && !0 !== Od[Xd] && vd(this, Wd, Rd, Xd, Fd.ADD, md, !1, !0, Qd);
              continue
            }
            if ("number" === typeof hd) Od = hd;
            else {
              const md = hd.indexInParent(td);
              if (void 0 === md) continue;
              if (Od = md, qd === Fd.ADD && Rd.getChange(Od) === Fd.DELETE) {
                dd.changes.delete(hd.ref[Kd]);
                continue
              }
            }
            vd(this, Wd, Rd, Od, void 0 !== Nd[od](Od) && qd || Fd.DELETE, md, !1, !0, Qd)
          }
        }
        return dd.changes.clear(), Wd = this.encode(md, dd, Wd), Rd ? eW(Wd.subarray(0, Od), Wd.subarray(Xd, md.offset)) : Wd.subarray(Xd, md.offset)
      }
      encodeUnreliableView(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Fd = md.offset;
        return Wd = this.encodeUnreliable(md, dd, Wd, Fd), eW(Wd.subarray(0, Od), Wd.subarray(Fd, md.offset))
      }
      _emitStreamBroadcast(dd, Od) {
        const md = this.root.streamTrees;
        for (const Wd of md) {
          const md = Wd,
            Rd = md[Hd],
            Xd = md[Kd];
          if (void 0 === Xd) continue;
          const hd = md._stream,
            vd = hd.broadcastDeletes,
            Qd = hd.broadcastPending,
            td = hd.sentBroadcast,
            Nd = vd.size > 0,
            qd = Qd.size > 0,
            yd = Rd.encDescriptor,
            bd = yd.encoder,
            Td = yd.metadata;
          if (Nd || qd) {
            if (dd[Od.offset++] = 255, WO.number(dd, Xd, Od), Nd) {
              for (const md of vd) bd(this, dd, Rd, md, Fd.DELETE, Od, !1, !1, Td);
              vd.clear()
            }
            const Wd = hd.maxPerTick,
              qd = [];
            let yd = 0;
            const pd = [];
            for (const Xd of Qd) {
              if (yd >= Wd) break;
              const Kd = md[od](Xd);
              void 0 !== Kd ? (bd(this, dd, Rd, Xd, Fd.ADD, Od, !1, !1, Td), td.add(Xd), qd.push(Kd), pd.push(Xd), yd++) : pd.push(Xd)
            }
            for (const dd of pd) Qd.delete(dd);
            for (const md of qd) {
              const Wd = md[Hd];
              if (void 0 === Wd) continue;
              const Rd = md[Kd];
              if (void 0 === Rd) continue;
              dd[Od.offset++] = 255, WO.number(dd, Rd, Od);
              const Xd = Wd.encDescriptor,
                hd = Xd.encoder,
                vd = Xd.metadata;
              Wd.forEachLive((md => {
                ZO.hasUnreliableAtIndex(vd, md) || hd(this, dd, Wd, md, Fd.ADD, Od, !1, !1, vd)
              }))
            }
          }
          for (const Wd of td) {
            const Fd = md[od](Wd);
            if (void 0 === Fd) continue;
            const Rd = Fd[Hd];
            if (void 0 === Rd || !Rd.has()) continue;
            const Xd = Fd[Kd];
            if (void 0 === Xd) continue;
            dd[Od.offset++] = 255, WO.number(dd, Xd, Od);
            const hd = Rd.encDescriptor,
              vd = hd.encoder,
              Qd = hd.metadata;
            Rd.forEach(((md, Wd) => {
              md < 0 || ZO.hasUnreliableAtIndex(Qd, md) || vd(this, dd, Rd, md, Wd, Od, !1, !1, Qd)
            }))
          }
        }
      }
      _emitStreamPriority(dd) {
        const Od = this.root.streamTrees;
        if (0 === Od.size) return;
        const md = dd.id;
        for (const Wd of Od) {
          const Od = Wd,
            Rd = Od._stream,
            Xd = Rd.pendingByView.get(md);
          if (void 0 === Xd || 0 === Xd.size) continue;
          const hd = Rd.priorityByView?.get(md),
            vd = void 0 !== hd,
            Qd = Rd.priority,
            td = Rd.maxPerTick,
            Nd = [],
            qd = [];
          if (vd || void 0 !== Qd) {
            const md = [],
              Wd = [];
            let Fd = 0;
            for (const Rd of Xd) {
              const Xd = Od[od](Rd);
              if (void 0 === Xd) {
                qd.push(Rd);
                continue
              }
              const Kd = vd ? hd(Xd) : Qd(dd, Xd);
              if (Fd < td) {
                let dd = Fd++;
                for (; dd > 0 && Wd[dd - 1] < Kd;) Wd[dd] = Wd[dd - 1], md[dd] = md[dd - 1], dd--;
                Wd[dd] = Kd, md[dd] = Rd
              } else if (Kd > Wd[td - 1]) {
                let dd = td - 1;
                for (; dd > 0 && Wd[dd - 1] < Kd;) Wd[dd] = Wd[dd - 1], md[dd] = md[dd - 1], dd--;
                Wd[dd] = Kd, md[dd] = Rd
              }
            }
            for (let dd = 0; dd < Fd; dd++) Nd.push(md[dd])
          } else
            for (const dd of Xd) {
              if (Nd.length >= td) break;
              Nd.push(dd)
            }
          for (const dd of qd) Xd.delete(dd);
          const yd = Nd.length;
          let bd = Rd.sentByView.get(md);
          void 0 === bd && (bd = new Set, Rd.sentByView.set(md, bd));
          for (let md = 0; md < yd; md++) {
            const Wd = Nd[md],
              Rd = Od[od](Wd);
            if (void 0 === Rd) {
              Xd.delete(Wd);
              continue
            }
            dd._addImmediate(Rd);
            const hd = Rd[Hd];
            if (void 0 !== hd) {
              const Od = Rd[Kd];
              let md = dd.changes.get(Od);
              void 0 === md && (md = new Map, dd.changes.set(Od, md));
              const Wd = hd.metadata;
              hd.forEachLive((dd => {
                ZO.hasUnreliableAtIndex(Wd, dd) || md.set(dd, Fd.ADD)
              }))
            }
            Xd.delete(Wd), bd.add(Wd)
          }
        }
      }
      discardChanges() {
        const dd = this.root.changes;
        let Od = dd.next;
        const md = this.root;
        for (; Od;) {
          const dd = Od.next;
          Od.changeTree.endEncode(), md.releaseNode(Od), Od = dd
        }
        dd.next = void 0, dd.tail = void 0
      }
      discardUnreliableChanges() {
        const dd = this.root.unreliableChanges;
        let Od = dd.next;
        const md = this.root;
        for (; Od;) {
          const dd = Od.next;
          Od.changeTree.endEncodeUnreliable(), md.releaseNode(Od), Od = dd
        }
        dd.next = void 0, dd.tail = void 0
      }
      tryEncodeTypeId(dd, Od, md, Wd) {
        const Fd = this.context.getTypeId(Od),
          Rd = this.context.getTypeId(md);
        void 0 !== Rd ? Fd !== Rd && (dd[Wd.offset++] = 213, WO.number(dd, Rd, Wd)) : console.warn(`@colyseus/schema WARNING: Class "${md.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const dd = this.root;
        if (0 === dd.streamTrees.size) return !1;
        const Od = 0 === dd.activeViews.size;
        for (const md of dd.streamTrees)
          if (Od ? VO(md) : uO(md, dd)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class lW extends Error {
      constructor(dd) {
        super(dd), this.name = "DecodingWarning"
      }
    }
    const CW = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class ZW {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(dd, Od), void 0 === Od[Kd] ? (CW.value = dd, Object.defineProperty(Od, Kd, CW)) : Od[Kd] !== dd && (Od[Kd] = dd), md && (this.refCount[dd] = (this.refCount[dd] || 0) + 1), this.deletedRefs.has(dd) && this.deletedRefs.delete(dd)
      }
      removeRef(dd) {
        const Od = this.refCount[dd];
        if (void 0 !== Od)
          if (0 !== Od)(this.refCount[dd] = Od - 1) <= 0 && this.deletedRefs.add(dd);
          else try {
            const Od = this.refs.get(dd);
            throw new lW(`trying to remove refId '${dd}' with 0 refCount (${Od.constructor.name}: ${JSON.stringify(Od)})`)
          } catch (hF) {
            console.warn(hF)
          } else try {
            throw new lW("trying to remove refId that doesn't exist: " + dd)
          } catch (hF) {
            console.warn(hF)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((dd => {
          if (this.refCount[dd] > 0) return;
          const Od = this.refs.get(dd),
            md = Od.constructor[Symbol.metadata];
          if (null != md)
            for (const Wd in md) {
              const dd = Od[md[Wd].name];
              if ("object" === typeof dd && dd) {
                const Od = dd[Kd];
                void 0 === Od || this.deletedRefs.has(Od) || this.removeRef(Od)
              }
            } else "function" === typeof Od[yd] && Array.from(Od.values()).forEach((dd => {
              const Od = dd[Kd];
              void 0 === Od || this.deletedRefs.has(Od) || this.removeRef(Od)
            }));
          this.refs.delete(dd), delete this.refCount[dd], delete this.callbacks[dd]
        })), this.deletedRefs.clear()
      }
      addCallback(dd, Od, md) {
        if (void 0 === dd) {
          const dd = "number" === typeof Od ? Fd[Od] : Od;
          throw new Error(`Can't addCallback on '${dd}' (refId is undefined)`)
        }
        return this.callbacks[dd] || (this.callbacks[dd] = {}), this.callbacks[dd][Od] || (this.callbacks[dd][Od] = []), this.callbacks[dd][Od].push(md), () => this.removeCallback(dd, Od, md)
      }
      removeCallback(dd, Od, md) {
        const Wd = this.callbacks?.[dd]?.[Od]?.indexOf(md);
        void 0 !== Wd && -1 !== Wd && AW(this.callbacks[dd][Od], Wd)
      }
    }
    class kW {
      context;
      state;
      root;
      currentRefId = 0;
      hV;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(dd, Od) {
        this.setState(dd), this.context = Od || new cO(dd.constructor)
      }
      setState(dd) {
        this.state = dd, this.root = new ZW, this.root.addRef(0, dd)
      }
      decode(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Fd = void 0 !== this.hV ? [] : null,
          Rd = this.root,
          Xd = dd.byteLength;
        let Kd = md.constructor[Qd];
        for (this.currentRefId = 0; Od.offset < Xd;) {
          if (dd[Od.offset] == Wd) {
            Od.offset++, md[Yd]?.();
            const Wd = gO.number(dd, Od),
              Fd = Rd.refs.get(Wd);
            Fd ? (md = Fd, Kd = md.constructor[Qd], this.currentRefId = Wd) : (console.error(`"refId" not found: ${Wd}`, {
              previousRef: md,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(dd, Od, Xd));
            continue
          } - 1 !== Kd(this, dd, Od, md, Fd) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(dd, Od, Xd))
        }
        return md[Yd]?.(), null !== this.resyncVisited && function(dd, Od) {
          dd.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : jm(dd, dd.state, new Set, Od)
        }(this, Fd), null !== Fd && this.hV?.(Fd), Rd.garbageCollectDeletedRefs(), Fd
      }
      decodeResync(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(dd, Od)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(dd, Od, md) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Fd = {
          offset: Od.offset
        };
        for (; Od.offset < md && (dd[Od.offset] !== Wd || (Fd.offset = Od.offset + 1, !this.root.refs.has(gO.number(dd, Fd))));) Od.offset++
      }
      getInstanceType(dd, Od, md) {
        let Wd;
        if (213 === dd[Od.offset]) {
          Od.offset++;
          const md = gO.number(dd, Od);
          Wd = this.context.get(md)
        }
        return Wd || md
      }
      createInstanceOfType(dd) {
        return dd.initializeForDecoder()
      }
      removeChildRefs(dd, Od) {
        const md = "string" !== typeof dd[yd],
          Wd = dd[Kd];
        dd.forEach(((Rd, Xd) => {
          Od?.push({
            ref: dd,
            refId: Wd,
            op: Fd.DELETE,
            field: Xd,
            value: void 0,
            previousValue: Rd
          }), md && this.root.removeRef(Rd[Kd])
        }))
      }
    }
    const fW = SW({
        min: yW.float64(),
        max: yW.float64(),
        bits: yW.uint8(),
        mode: yW.uint8()
      }, "QuantizedDescriptor"),
      MW = SW({
        name: yW.string(),
        type: yW.string(),
        referencedType: yW.number(),
        childPrimitive: yW.string(),
        quantized: yW.ref(fW).optional()
      }, "ReflectionField"),
      dF = SW({
        id: yW.number(),
        extendsId: yW.number(),
        fields: yW.array(MW)
      }, "ReflectionType"),
      OF = SW({
        types: yW.array(dF),
        rootType: yW.number()
      }, "Reflection");

    function mF(dd) {
      const Od = dd.root,
        md = Od.callbacks,
        Wd = new WeakMap;
      let Rd;

      function Xd(dd, md) {
        let vd = md.instance?.constructor[Symbol.metadata] || dd,
          Qd = md.instance && "function" === typeof md.instance.forEach || dd && !uW.is(dd);
        if (vd && !Qd) {
          const dd = function(dd, Fd, Xd, hd) {
            return hd && void 0 !== md.instance[Fd] && !Wd.has(Rd) && Xd(md.instance[Fd], void 0), Od.addCallback(dd[Kd], Fd, Xd)
          };
          return new Proxy({
            listen: function(Od, Fd) {
              let Xd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (md.instance) return dd(md.instance, Od, Fd, Xd);
              {
                let Kd = () => {};
                return md.onInstanceAvailable(((md, hd) => {
                  Kd = dd(md, Od, Fd, Xd && hd && !Wd.has(Rd))
                })), () => Kd()
              }
            },
            onChange: function(dd) {
              return Od.addCallback(md.instance[Kd], Fd.REPLACE, dd)
            },
            bindTo: function(dd, Wd) {
              return Wd || (Wd = Object.keys(vd).map((dd => vd[dd].name))), Od.addCallback(md.instance[Kd], Fd.REPLACE, (() => {
                Wd.forEach((Od => dd[Od] = md.instance[Od]))
              }))
            }
          }, {
            get(dd, Od) {
              const Wd = vd[vd[Od]];
              if (Wd) {
                const dd = md.instance?.[Od],
                  Fd = Wd => {
                    const Fd = hd(md.instance).listen(Od, ((dd, Od) => {
                      Wd(dd, !1), Fd?.()
                    }), !1);
                    void 0 !== dd?.[Kd] && Wd(dd, !0)
                  };
                return Xd(Wd.type, {
                  instance: void 0 !== dd?.[Kd] && dd,
                  parentInstance: md.instance,
                  onInstanceAvailable: Fd
                })
              }
              return dd[Od]
            },
            has: (dd, Od) => void 0 !== vd[Od],
            set(dd, Od, md) {
              throw new Error("not allowed")
            },
            deleteProperty(dd, Od) {
              throw new Error("not allowed")
            }
          })
        } {
          const dd = function(dd, md, Xd) {
              return Xd && dd.forEach(((dd, Od) => md(dd, Od))), Od.addCallback(dd[Kd], Fd.ADD, ((dd, Od) => {
                Wd.set(md, !0), Rd = md, md(dd, Od), Wd.delete(md), Rd = void 0
              }))
            },
            Xd = function(dd, md) {
              return Od.addCallback(dd[Kd], Fd.DELETE, md)
            },
            hd = function(dd, md) {
              return Od.addCallback(dd[Kd], Fd.REPLACE, md)
            };
          return new Proxy({
            QE: function(Od) {
              let Fd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (md.instance) return dd(md.instance, Od, Fd && !Wd.has(Rd));
              if (md.onInstanceAvailable) {
                let Xd = () => {};
                return md.onInstanceAvailable(((md, Kd) => {
                  Xd = dd(md, Od, Fd && Kd && !Wd.has(Rd))
                })), () => Xd()
              }
            },
            qS: function(dd) {
              if (md.instance) return Xd(md.instance, dd);
              if (md.onInstanceAvailable) {
                let Od = () => {};
                return md.onInstanceAvailable((md => {
                  Od = Xd(md, dd)
                })), () => Od()
              }
            },
            onChange: function(dd) {
              if (md.instance) return hd(md.instance, dd);
              if (md.onInstanceAvailable) {
                let Od = () => {};
                return md.onInstanceAvailable((md => {
                  Od = hd(md, dd)
                })), () => Od()
              }
            }
          }, {
            get(dd, Od) {
              if (!dd[Od]) throw new Error(`Can't access '${Od}' through callback proxy. access the instance directly.`);
              return dd[Od]
            },
            has: (dd, Od) => void 0 !== dd[Od],
            set(dd, Od, md) {
              throw new Error("not allowed")
            },
            deleteProperty(dd, Od) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function hd(dd) {
        return Xd(void 0, {
          instance: dd
        })
      }
      return dd.hV = function(dd) {
        const Od = new Set;
        for (let Wd = 0, Rd = dd.length; Wd < Rd; Wd++) {
          const Rd = dd[Wd],
            Xd = Rd.refId,
            hd = Rd.ref,
            vd = md[Xd];
          if (vd) {
            if ((Rd.op & Fd.DELETE) === Fd.DELETE && uW.isSchema(Rd.previousValue)) {
              const dd = md[Rd.previousValue[Kd]]?.[Fd.DELETE];
              for (let Od = dd?.length - 1; Od >= 0; Od--) dd[Od]()
            }
            if (uW.isSchema(hd)) {
              if (!Od.has(Xd)) {
                const dd = vd?.[Fd.REPLACE];
                for (let Od = dd?.length - 1; Od >= 0; Od--) dd[Od]()
              }
              if (vd.hasOwnProperty(Rd.field)) {
                const dd = vd[Rd.field];
                for (let Od = dd?.length - 1; Od >= 0; Od--) dd[Od](Rd.value, Rd.previousValue)
              }
            } else {
              if ((Rd.op & Fd.DELETE) === Fd.DELETE) {
                if (void 0 !== Rd.previousValue) {
                  const dd = vd[Fd.DELETE];
                  for (let Od = dd?.length - 1; Od >= 0; Od--) dd[Od](Rd.previousValue, Rd.dynamicIndex ?? Rd.field)
                }
                if ((Rd.op & Fd.ADD) === Fd.ADD) {
                  const dd = vd[Fd.ADD];
                  for (let Od = dd?.length - 1; Od >= 0; Od--) dd[Od](Rd.value, Rd.dynamicIndex ?? Rd.field)
                }
              } else if ((Rd.op & Fd.ADD) === Fd.ADD && Rd.previousValue !== Rd.value) {
                const dd = vd[Fd.ADD];
                for (let Od = dd?.length - 1; Od >= 0; Od--) dd[Od](Rd.value, Rd.dynamicIndex ?? Rd.field)
              }
              if (Rd.value !== Rd.previousValue && (void 0 !== Rd.value || void 0 !== Rd.previousValue)) {
                const dd = vd[Fd.REPLACE];
                for (let Od = dd?.length - 1; Od >= 0; Od--) dd[Od](Rd.value, Rd.dynamicIndex ?? Rd.field)
              }
            }
            Od.add(Xd)
          }
        }
      }, hd
    }

    function WF(dd, Od) {
      dd.hV = Od
    }
    OF.encode = function(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const md = dd.context,
        Wd = new OF,
        Fd = new IW(Wd),
        Rd = md.schemas.get(dd.state.constructor);
      Rd > 0 && (Wd.rootType = Rd);
      const Xd = new Set,
        Kd = {},
        hd = dd => {
          if (void 0 === dd.extendsId || Xd.has(dd.extendsId)) {
            Xd.add(dd.id), Wd.types.push(dd);
            const Od = Kd[dd.id];
            void 0 !== Od && (delete Kd[dd.id], Od.forEach((dd => hd(dd))))
          } else void 0 === Kd[dd.extendsId] && (Kd[dd.extendsId] = []), Kd[dd.extendsId].push(dd)
        };
      md.schemas.forEach(((dd, Od) => {
        const Wd = new dF;
        Wd.id = Number(dd);
        const Fd = Object.getPrototypeOf(Od);
        Fd !== uW && (Wd.extendsId = md.schemas.get(Fd));
        const Rd = Od[Symbol.metadata];
        if (Rd !== Fd[Symbol.metadata]) {
          const dd = Rd[xd] ?? -1;
          for (let Od = 0; Od <= dd; Od++) {
            const dd = Rd[Od];
            if (void 0 === dd) continue;
            const Fd = dd.name;
            if (!Object.prototype.hasOwnProperty.call(Rd, Fd)) continue;
            const Xd = new MW;
            let Kd;
            if (Xd.name = Fd, "string" === typeof dd.type) Kd = dd.type;
            else if (nO(dd.type)) {
              const Od = dd.type.quantized;
              Kd = "quantized";
              const md = new fW;
              md.min = Od.min, md.max = Od.max, md.bits = Od.bits, md.mode = Od.wrap ? 1 : 0, Xd.quantized = md
            } else {
              let Od;
              uW.is(dd.type) ? (Kd = "ref", Od = dd.type) : (Kd = Object.keys(dd.type)[0], "string" === typeof dd.type[Kd] ? Xd.childPrimitive = dd.type[Kd] : Od = dd.type[Kd]), Xd.referencedType = Od ? md.getTypeId(Od) : -1
            }
            Xd.type = Kd, Wd.fields.push(Xd)
          }
        }
        hd(Wd)
      }));
      for (const vd in Kd) Kd[vd].forEach((dd => Wd.types.push(dd)));
      return Fd.encodeAll(Od).slice(0, Od.offset)
    }, OF.decode = function(dd, Od) {
      const md = new OF;
      new kW(md).decode(dd, Od);
      const Wd = new cO;
      md.types.forEach((dd => {
        const Od = Wd.get(dd.extendsId) ?? uW,
          md = class extends Od {};
        cO.register(md), Wd.add(md, dd.id)
      }), {});
      md.types.forEach((dd => {
        const Od = Wd.get(dd.id),
          Fd = ZO.initialize(Od),
          Rd = [];
        let Xd = dd;
        do {
          Rd.push(Xd), Xd = md.types.find((dd => dd.id === Xd.extendsId))
        } while (Xd);
        let Kd = 0;
        Rd.reverse().forEach((dd => {
          ((dd, Od, md) => {
            Od.fields.forEach(((Od, Fd) => {
              const Rd = md + Fd;
              if (void 0 !== Od.quantized) {
                const md = Od.quantized;
                ZO.addField(dd, Rd, Od.name, {
                  quantized: GO({
                    min: md.min,
                    max: md.max,
                    bits: md.bits,
                    mode: 1 === md.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== Od.referencedType) {
                const md = Od.type,
                  Fd = Wd.get(Od.referencedType) ?? Od.childPrimitive;
                "ref" === md ? ZO.addField(dd, Rd, Od.name, Fd) : ZO.addField(dd, Rd, Od.name, {
                  [md]: Fd
                })
              } else ZO.addField(dd, Rd, Od.name, Od.type)
            }))
          })(Fd, dd, Kd), Kd += dd.fields.length
        }))
      }));
      const Fd = new(Wd.get(md.rootType || 0));
      return new kW(Fd, Wd)
    }, OF.makeEncodable = function(dd) {
      const Od = dd[Symbol.metadata];
      if (!Od) return dd;
      const md = Od[xd];
      if (void 0 === md) return dd;
      for (let Wd = 0; Wd <= md; Wd++) {
        const md = Od[Wd];
        md && ZO.defineField(dd, Od, Wd, md.name, md.type)
      }
      return Object.prototype.hasOwnProperty.call(dd, Jd) && delete dd[Jd], dd
    };
    class FF {
      Ft;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(dd) {
        this.Ft = dd, this.Ft.hV = this.hV.bind(this)
      }
      get callbacks() {
        return this.Ft.root.callbacks
      }
      get state() {
        return this.Ft.state
      }
      addCallback(dd, Od, md) {
        return this.Ft.root.addCallback(dd, Od, md)
      }
      addCallbackOrWaitCollectionAvailable(dd, Od, md, Wd) {
        let Rd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xd = () => {};
        const hd = () => Xd(),
          vd = dd[Od];
        if (vd && void 0 !== vd[Kd]) return Rd = Rd && !1 === this.isTriggering, md === Fd.ADD && Rd && vd.forEach(((dd, Od) => {
          Wd(dd, Od)
        })), this.addCallback(vd[Kd], md, Wd);
        {
          let Fd;
          return Fd = this.addCallback(dd[Kd], Od, ((dd, Od) => {
            null !== dd && void 0 !== dd && (Fd(), Xd = this.addCallback(dd[Kd], md, Wd))
          })), Xd = Fd, hd
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(dd, Od, md) {
        let Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Wd = Wd && !1 === this.isTriggering;
        const Fd = dd[Od];
        return Wd && null !== Fd && void 0 !== Fd && md(Fd, void 0), this.addCallback(dd[Kd], Od, md)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const dd = arguments.length <= 0 ? void 0 : arguments[0],
            Od = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(dd[Kd], Fd.REPLACE, Od)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Fd.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Fd.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      QE() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Fd.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Fd.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      qS() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Fd.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Fd.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(dd, Od, md) {
        let Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Rd = dd.constructor[Symbol.metadata];
        md || (md = Object.keys(Rd).filter((dd => !isNaN(Number(dd)))).map((dd => Rd[dd].name)));
        const Xd = () => {
          for (const Wd of md) {
            const md = dd[Wd];
            void 0 !== md && (Od[Wd] = md)
          }
        };
        return Wd && Xd(), this.addCallback(dd[Kd], Fd.REPLACE, Xd)
      }
      hV(dd) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let Od = 0, md = dd.length; Od < md; Od++) {
          const md = dd[Od],
            Wd = md.refId,
            Rd = md.ref,
            Xd = this.callbacks[Wd];
          if (Xd) {
            if ((md.op & Fd.DELETE) === Fd.DELETE && uW.isSchema(md.previousValue)) {
              const dd = md.previousValue[Kd],
                Od = this.callbacks[dd]?.[Fd.DELETE];
              if (Od)
                for (let md = Od.length - 1; md >= 0; md--) try {
                  Od[md]()
                } catch (hF) {
                  console.error(hF)
                }
            }
            if (uW.isSchema(Rd)) {
              if (!this.uniqueRefIds.has(Wd)) {
                const dd = Xd[Fd.REPLACE];
                if (dd)
                  for (let Od = dd.length - 1; Od >= 0; Od--) try {
                    dd[Od]()
                  } catch (hF) {
                    console.error(hF)
                  }
              }
              const dd = Xd[md.field];
              if (dd)
                for (let Od = dd.length - 1; Od >= 0; Od--) try {
                  dd[Od](md.value, md.previousValue)
                } catch (hF) {
                  console.error(hF)
                }
            } else {
              const dd = md.dynamicIndex ?? md.field;
              if ((md.op & Fd.DELETE) === Fd.DELETE) {
                if (void 0 !== md.previousValue) {
                  const Od = Xd[Fd.DELETE];
                  if (Od)
                    for (let Wd = Od.length - 1; Wd >= 0; Wd--) try {
                      Od[Wd](md.previousValue, dd)
                    } catch (hF) {
                      console.error(hF)
                    }
                }
                if ((md.op & Fd.ADD) === Fd.ADD) {
                  const Od = Xd[Fd.ADD];
                  if (Od)
                    for (let Wd = Od.length - 1; Wd >= 0; Wd--) try {
                      Od[Wd](md.value, dd)
                    } catch (hF) {
                      console.error(hF)
                    }
                }
              } else if ((md.op & Fd.ADD) === Fd.ADD && md.previousValue !== md.value) {
                const Od = Xd[Fd.ADD];
                if (Od)
                  for (let Wd = Od.length - 1; Wd >= 0; Wd--) try {
                    Od[Wd](md.value, dd)
                  } catch (hF) {
                    console.error(hF)
                  }
              }
              if (md.value !== md.previousValue) {
                const Od = Xd[Fd.REPLACE];
                if (Od)
                  for (let Wd = Od.length - 1; Wd >= 0; Wd--) try {
                    Od[Wd](dd, md.value)
                  } catch (hF) {
                    console.error(hF)
                  }
              }
            }
            this.uniqueRefIds.add(Wd)
          }
        }
        this.isTriggering = !1
      }
    }
    const RF = {
      get(dd) {
        if (dd instanceof kW) return new FF(dd);
        if ("Ft" in dd.lT) return new FF(dd.lT.Ft);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(dd) {
        if (dd instanceof kW) return mF(dd);
        if ("Ft" in dd.lT) return mF(dd.lT.Ft);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (dd, Od) => WF(dd, Od)
    };
    class XF {
      _free = [];
      _factory;
      _maxSize;
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = dd, this._maxSize = Od.maxSize ?? 1 / 0;
        const md = Od.preallocate ?? 0;
        for (let Wd = 0; Wd < md; Wd++) this._free.push(dd())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(dd) {
        uW.reset(dd), this._free.length < this._maxSize && this._free.push(dd)
      }
      get size() {
        return this._free.length
      }
    }

    function KF(dd) {
      return new XF((() => new dd), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    EO("map", {
      constructor: KW
    }), EO("array", {
      constructor: RW
    }), EO("set", {
      constructor: vW
    }), EO("collection", {
      constructor: hW
    })
  },
  10311: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      __addDisposableResource: () => nd,
      __assign: () => Rd,
      __asyncDelegator: () => Ud,
      __asyncGenerator: () => Jd,
      __asyncValues: () => xd,
      __await: () => Ed,
      __awaiter: () => qd,
      __classPrivateFieldGet: () => Ad,
      __classPrivateFieldIn: () => Gd,
      __classPrivateFieldSet: () => rd,
      __createBinding: () => yd,
      __decorate: () => Kd,
      __disposeResources: () => Pd,
      __esDecorate: () => vd,
      __exportStar: () => bd,
      __extends: () => Fd,
      __generator: () => Hd,
      __importDefault: () => Vd,
      __importStar: () => ud,
      __makeTemplateObject: () => Bd,
      __metadata: () => Nd,
      __param: () => hd,
      __propKey: () => td,
      __read: () => pd,
      __rest: () => Xd,
      __rewriteRelativeImportExtension: () => zd,
      __runInitializers: () => Qd,
      __setFunctionName: () => od,
      __spread: () => Yd,
      __spreadArray: () => wd,
      __spreadArrays: () => gd,
      __values: () => Td,
      default: () => cd
    });
    var Wd = function(dd, Od) {
      return Wd = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(dd, Od) {
        dd.__proto__ = Od
      } || function(dd, Od) {
        for (var md in Od) Object.prototype.hasOwnProperty.call(Od, md) && (dd[md] = Od[md])
      }, Wd(dd, Od)
    };

    function Fd(dd, Od) {
      if ("function" !== typeof Od && null !== Od) throw new TypeError("Class extends value " + String(Od) + " is not a constructor or null");

      function md() {
        this.constructor = dd
      }
      Wd(dd, Od), dd.prototype = null === Od ? Object.create(Od) : (md.prototype = Od.prototype, new md)
    }
    var Rd = function() {
      return Rd = Object.assign || function(dd) {
        for (var Od, md = 1, Wd = arguments.length; md < Wd; md++)
          for (var Fd in Od = arguments[md]) Object.prototype.hasOwnProperty.call(Od, Fd) && (dd[Fd] = Od[Fd]);
        return dd
      }, Rd.apply(this, arguments)
    };

    function Xd(dd, Od) {
      var md = {};
      for (var Wd in dd) Object.prototype.hasOwnProperty.call(dd, Wd) && Od.indexOf(Wd) < 0 && (md[Wd] = dd[Wd]);
      if (null != dd && "function" === typeof Object.getOwnPropertySymbols) {
        var Fd = 0;
        for (Wd = Object.getOwnPropertySymbols(dd); Fd < Wd.length; Fd++) Od.indexOf(Wd[Fd]) < 0 && Object.prototype.propertyIsEnumerable.call(dd, Wd[Fd]) && (md[Wd[Fd]] = dd[Wd[Fd]])
      }
      return md
    }

    function Kd(dd, Od, md, Wd) {
      var Fd, Rd = arguments.length,
        Xd = Rd < 3 ? Od : null === Wd ? Wd = Object.getOwnPropertyDescriptor(Od, md) : Wd;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Xd = Reflect.decorate(dd, Od, md, Wd);
      else
        for (var Kd = dd.length - 1; Kd >= 0; Kd--)(Fd = dd[Kd]) && (Xd = (Rd < 3 ? Fd(Xd) : Rd > 3 ? Fd(Od, md, Xd) : Fd(Od, md)) || Xd);
      return Rd > 3 && Xd && Object.defineProperty(Od, md, Xd), Xd
    }

    function hd(dd, Od) {
      return function(md, Wd) {
        Od(md, Wd, dd)
      }
    }

    function vd(dd, Od, md, Wd, Fd, Rd) {
      function Xd(dd) {
        if (void 0 !== dd && "function" !== typeof dd) throw new TypeError("Function expected");
        return dd
      }
      for (var Kd, hd = Wd.kind, vd = "getter" === hd ? "get" : "setter" === hd ? "set" : "value", Qd = !Od && dd ? Wd.static ? dd : dd.prototype : null, td = Od || (Qd ? Object.getOwnPropertyDescriptor(Qd, Wd.name) : {}), od = !1, Nd = md.length - 1; Nd >= 0; Nd--) {
        var qd = {};
        for (var Hd in Wd) qd[Hd] = "access" === Hd ? {} : Wd[Hd];
        for (var Hd in Wd.access) qd.access[Hd] = Wd.access[Hd];
        qd.addInitializer = function(dd) {
          if (od) throw new TypeError("Cannot add initializers after decoration has completed");
          Rd.push(Xd(dd || null))
        };
        var yd = (0, md[Nd])("accessor" === hd ? {
          get: td.get,
          set: td.set
        } : td[vd], qd);
        if ("accessor" === hd) {
          if (void 0 === yd) continue;
          if (null === yd || "object" !== typeof yd) throw new TypeError("Object expected");
          (Kd = Xd(yd.get)) && (td.get = Kd), (Kd = Xd(yd.set)) && (td.set = Kd), (Kd = Xd(yd.init)) && Fd.unshift(Kd)
        } else(Kd = Xd(yd)) && ("field" === hd ? Fd.unshift(Kd) : td[vd] = Kd)
      }
      Qd && Object.defineProperty(Qd, Wd.name, td), od = !0
    }

    function Qd(dd, Od, md) {
      for (var Wd = arguments.length > 2, Fd = 0; Fd < Od.length; Fd++) md = Wd ? Od[Fd].call(dd, md) : Od[Fd].call(dd);
      return Wd ? md : void 0
    }

    function td(dd) {
      return "symbol" === typeof dd ? dd : "".concat(dd)
    }

    function od(dd, Od, md) {
      return "symbol" === typeof Od && (Od = Od.description ? "[".concat(Od.description, "]") : ""), Object.defineProperty(dd, "name", {
        configurable: !0,
        value: md ? "".concat(md, " ", Od) : Od
      })
    }

    function Nd(dd, Od) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(dd, Od)
    }

    function qd(dd, Od, md, Wd) {
      return new(md || (md = Promise))((function(Fd, Rd) {
        function Xd(dd) {
          try {
            hd(Wd.next(dd))
          } catch (Od) {
            Rd(Od)
          }
        }

        function Kd(dd) {
          try {
            hd(Wd.throw(dd))
          } catch (Od) {
            Rd(Od)
          }
        }

        function hd(dd) {
          var Od;
          dd.done ? Fd(dd.value) : (Od = dd.value, Od instanceof md ? Od : new md((function(dd) {
            dd(Od)
          }))).then(Xd, Kd)
        }
        hd((Wd = Wd.apply(dd, Od || [])).next())
      }))
    }

    function Hd(dd, Od) {
      var md, Wd, Fd, Rd = {
          label: 0,
          sent: function() {
            if (1 & Fd[0]) throw Fd[1];
            return Fd[1]
          },
          trys: [],
          ops: []
        },
        Xd = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Xd.next = Kd(0), Xd.throw = Kd(1), Xd.return = Kd(2), "function" === typeof Symbol && (Xd[Symbol.iterator] = function() {
        return this
      }), Xd;

      function Kd(Kd) {
        return function(hd) {
          return function(Kd) {
            if (md) throw new TypeError("Generator is already executing.");
            for (; Xd && (Xd = 0, Kd[0] && (Rd = 0)), Rd;) try {
              if (md = 1, Wd && (Fd = 2 & Kd[0] ? Wd.return : Kd[0] ? Wd.throw || ((Fd = Wd.return) && Fd.call(Wd), 0) : Wd.next) && !(Fd = Fd.call(Wd, Kd[1])).done) return Fd;
              switch (Wd = 0, Fd && (Kd = [2 & Kd[0], Fd.value]), Kd[0]) {
                case 0:
                case 1:
                  Fd = Kd;
                  break;
                case 4:
                  return Rd.label++, {
                    value: Kd[1],
                    done: !1
                  };
                case 5:
                  Rd.label++, Wd = Kd[1], Kd = [0];
                  continue;
                case 7:
                  Kd = Rd.ops.pop(), Rd.trys.pop();
                  continue;
                default:
                  if (!(Fd = (Fd = Rd.trys).length > 0 && Fd[Fd.length - 1]) && (6 === Kd[0] || 2 === Kd[0])) {
                    Rd = 0;
                    continue
                  }
                  if (3 === Kd[0] && (!Fd || Kd[1] > Fd[0] && Kd[1] < Fd[3])) {
                    Rd.label = Kd[1];
                    break
                  }
                  if (6 === Kd[0] && Rd.label < Fd[1]) {
                    Rd.label = Fd[1], Fd = Kd;
                    break
                  }
                  if (Fd && Rd.label < Fd[2]) {
                    Rd.label = Fd[2], Rd.ops.push(Kd);
                    break
                  }
                  Fd[2] && Rd.ops.pop(), Rd.trys.pop();
                  continue
              }
              Kd = Od.call(dd, Rd)
            } catch (hd) {
              Kd = [6, hd], Wd = 0
            } finally {
              md = Fd = 0
            }
            if (5 & Kd[0]) throw Kd[1];
            return {
              value: Kd[0] ? Kd[1] : void 0,
              done: !0
            }
          }([Kd, hd])
        }
      }
    }
    var yd = Object.create ? function(dd, Od, md, Wd) {
      void 0 === Wd && (Wd = md);
      var Fd = Object.getOwnPropertyDescriptor(Od, md);
      Fd && !("get" in Fd ? !Od.__esModule : Fd.writable || Fd.configurable) || (Fd = {
        enumerable: !0,
        get: function() {
          return Od[md]
        }
      }), Object.defineProperty(dd, Wd, Fd)
    } : function(dd, Od, md, Wd) {
      void 0 === Wd && (Wd = md), dd[Wd] = Od[md]
    };

    function bd(dd, Od) {
      for (var md in dd) "default" === md || Object.prototype.hasOwnProperty.call(Od, md) || yd(Od, dd, md)
    }

    function Td(dd) {
      var Od = "function" === typeof Symbol && Symbol.iterator,
        md = Od && dd[Od],
        Wd = 0;
      if (md) return md.call(dd);
      if (dd && "number" === typeof dd.length) return {
        next: function() {
          return dd && Wd >= dd.length && (dd = void 0), {
            value: dd && dd[Wd++],
            done: !dd
          }
        }
      };
      throw new TypeError(Od ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function pd(dd, Od) {
      var md = "function" === typeof Symbol && dd[Symbol.iterator];
      if (!md) return dd;
      var Wd, Fd, Rd = md.call(dd),
        Xd = [];
      try {
        for (;
          (void 0 === Od || Od-- > 0) && !(Wd = Rd.next()).done;) Xd.push(Wd.value)
      } catch (Kd) {
        Fd = {
          error: Kd
        }
      } finally {
        try {
          Wd && !Wd.done && (md = Rd.return) && md.call(Rd)
        } finally {
          if (Fd) throw Fd.error
        }
      }
      return Xd
    }

    function Yd() {
      for (var dd = [], Od = 0; Od < arguments.length; Od++) dd = dd.concat(pd(arguments[Od]));
      return dd
    }

    function gd() {
      for (var dd = 0, Od = 0, md = arguments.length; Od < md; Od++) dd += arguments[Od].length;
      var Wd = Array(dd),
        Fd = 0;
      for (Od = 0; Od < md; Od++)
        for (var Rd = arguments[Od], Xd = 0, Kd = Rd.length; Xd < Kd; Xd++, Fd++) Wd[Fd] = Rd[Xd];
      return Wd
    }

    function wd(dd, Od, md) {
      if (md || 2 === arguments.length)
        for (var Wd, Fd = 0, Rd = Od.length; Fd < Rd; Fd++) !Wd && Fd in Od || (Wd || (Wd = Array.prototype.slice.call(Od, 0, Fd)), Wd[Fd] = Od[Fd]);
      return dd.concat(Wd || Array.prototype.slice.call(Od))
    }

    function Ed(dd) {
      return this instanceof Ed ? (this.v = dd, this) : new Ed(dd)
    }

    function Jd(dd, Od, md) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Wd, Fd = md.apply(dd, Od || []),
        Rd = [];
      return Wd = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Xd("next"), Xd("throw"), Xd("return", (function(dd) {
        return function(Od) {
          return Promise.resolve(Od).then(dd, vd)
        }
      })), Wd[Symbol.asyncIterator] = function() {
        return this
      }, Wd;

      function Xd(dd, Od) {
        Fd[dd] && (Wd[dd] = function(Od) {
          return new Promise((function(md, Wd) {
            Rd.push([dd, Od, md, Wd]) > 1 || Kd(dd, Od)
          }))
        }, Od && (Wd[dd] = Od(Wd[dd])))
      }

      function Kd(dd, Od) {
        try {
          (md = Fd[dd](Od)).value instanceof Ed ? Promise.resolve(md.value.v).then(hd, vd) : Qd(Rd[0][2], md)
        } catch (Wd) {
          Qd(Rd[0][3], Wd)
        }
        var md
      }

      function hd(dd) {
        Kd("next", dd)
      }

      function vd(dd) {
        Kd("throw", dd)
      }

      function Qd(dd, Od) {
        dd(Od), Rd.shift(), Rd.length && Kd(Rd[0][0], Rd[0][1])
      }
    }

    function Ud(dd) {
      var Od, md;
      return Od = {}, Wd("next"), Wd("throw", (function(dd) {
        throw dd
      })), Wd("return"), Od[Symbol.iterator] = function() {
        return this
      }, Od;

      function Wd(Wd, Fd) {
        Od[Wd] = dd[Wd] ? function(Od) {
          return (md = !md) ? {
            value: Ed(dd[Wd](Od)),
            done: !1
          } : Fd ? Fd(Od) : Od
        } : Fd
      }
    }

    function xd(dd) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Od, md = dd[Symbol.asyncIterator];
      return md ? md.call(dd) : (dd = Td(dd), Od = {}, Wd("next"), Wd("throw"), Wd("return"), Od[Symbol.asyncIterator] = function() {
        return this
      }, Od);

      function Wd(md) {
        Od[md] = dd[md] && function(Od) {
          return new Promise((function(Wd, Fd) {
            (function(dd, Od, md, Wd) {
              Promise.resolve(Wd).then((function(Od) {
                dd({
                  value: Od,
                  done: md
                })
              }), Od)
            })(Wd, Fd, (Od = dd[md](Od)).done, Od.value)
          }))
        }
      }
    }

    function Bd(dd, Od) {
      return Object.defineProperty ? Object.defineProperty(dd, "raw", {
        value: Od
      }) : dd.raw = Od, dd
    }
    var Sd = Object.create ? function(dd, Od) {
        Object.defineProperty(dd, "default", {
          enumerable: !0,
          value: Od
        })
      } : function(dd, Od) {
        dd.default = Od
      },
      sd = function(dd) {
        return sd = Object.getOwnPropertyNames || function(dd) {
          var Od = [];
          for (var md in dd) Object.prototype.hasOwnProperty.call(dd, md) && (Od[Od.length] = md);
          return Od
        }, sd(dd)
      };

    function ud(dd) {
      if (dd && dd.__esModule) return dd;
      var Od = {};
      if (null != dd)
        for (var md = sd(dd), Wd = 0; Wd < md.length; Wd++) "default" !== md[Wd] && yd(Od, dd, md[Wd]);
      return Sd(Od, dd), Od
    }

    function Vd(dd) {
      return dd && dd.__esModule ? dd : {
        default: dd
      }
    }

    function Ad(dd, Od, md, Wd) {
      if ("a" === md && !Wd) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Od ? dd !== Od || !Wd : !Od.has(dd)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === md ? Wd : "a" === md ? Wd.call(dd) : Wd ? Wd.value : Od.get(dd)
    }

    function rd(dd, Od, md, Wd, Fd) {
      if ("m" === Wd) throw new TypeError("Private method is not writable");
      if ("a" === Wd && !Fd) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Od ? dd !== Od || !Fd : !Od.has(dd)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Wd ? Fd.call(dd, md) : Fd ? Fd.value = md : Od.set(dd, md), md
    }

    function Gd(dd, Od) {
      if (null === Od || "object" !== typeof Od && "function" !== typeof Od) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof dd ? Od === dd : dd.has(Od)
    }

    function nd(dd, Od, md) {
      if (null !== Od && void 0 !== Od) {
        if ("object" !== typeof Od && "function" !== typeof Od) throw new TypeError("Object expected.");
        var Wd, Fd;
        if (md) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Wd = Od[Symbol.asyncDispose]
        }
        if (void 0 === Wd) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Wd = Od[Symbol.dispose], md && (Fd = Wd)
        }
        if ("function" !== typeof Wd) throw new TypeError("Object not disposable.");
        Fd && (Wd = function() {
          try {
            Fd.call(this)
          } catch (dd) {
            return Promise.reject(dd)
          }
        }), dd.stack.push({
          value: Od,
          dispose: Wd,
          async: md
        })
      } else md && dd.stack.push({
        async: !0
      });
      return Od
    }
    var Ld = "function" === typeof SuppressedError ? SuppressedError : function(dd, Od, md) {
      var Wd = new Error(md);
      return Wd.name = "SuppressedError", Wd.error = dd, Wd.suppressed = Od, Wd
    };

    function Pd(dd) {
      function Od(Od) {
        dd.error = dd.hasError ? new Ld(Od, dd.error, "An error was suppressed during disposal.") : Od, dd.hasError = !0
      }
      var md, Wd = 0;
      return function Fd() {
        for (; md = dd.stack.pop();) try {
          if (!md.async && 1 === Wd) return Wd = 0, dd.stack.push(md), Promise.resolve().then(Fd);
          if (md.dispose) {
            var Rd = md.dispose.call(md.value);
            if (md.async) return Wd |= 2, Promise.resolve(Rd).then(Fd, (function(dd) {
              return Od(dd), Fd()
            }))
          } else Wd |= 1
        } catch (Xd) {
          Od(Xd)
        }
        if (1 === Wd) return dd.hasError ? Promise.reject(dd.error) : Promise.resolve();
        if (dd.hasError) throw dd.error
      }()
    }

    function zd(dd, Od) {
      return "string" === typeof dd && /^\.\.?\//.test(dd) ? dd.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(dd, md, Wd, Fd, Rd) {
        return md ? Od ? ".jsx" : ".js" : !Wd || Fd && Rd ? Wd + Fd + "." + Rd.toLowerCase() + "js" : dd
      })) : dd
    }
    const cd = {
      __extends: Fd,
      __assign: Rd,
      __rest: Xd,
      __decorate: Kd,
      __param: hd,
      __esDecorate: vd,
      __runInitializers: Qd,
      __propKey: td,
      __setFunctionName: od,
      __metadata: Nd,
      __awaiter: qd,
      __generator: Hd,
      __createBinding: yd,
      __exportStar: bd,
      __values: Td,
      __read: pd,
      __spread: Yd,
      __spreadArrays: gd,
      __spreadArray: wd,
      __await: Ed,
      __asyncGenerator: Jd,
      __asyncDelegator: Ud,
      __asyncValues: xd,
      __makeTemplateObject: Bd,
      __importStar: ud,
      __importDefault: Vd,
      __classPrivateFieldGet: Ad,
      __classPrivateFieldSet: rd,
      __classPrivateFieldIn: Gd,
      __addDisposableResource: nd,
      __disposeResources: Pd,
      __rewriteRelativeImportExtension: zd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);