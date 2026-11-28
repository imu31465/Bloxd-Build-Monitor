export const id = 213;
export const ids = [213];
export const modules = {
  10593: (bb, wb) => {
    wb.discordURLBuilder = function(bb) {
      var wb;
      const Mb = (null === (wb = null === window || void 0 === window ? void 0 : window.location) || void 0 === wb ? void 0 : wb.hostname) || "localhost",
        eb = bb.hostname.split("."),
        Hb = !bb.hostname.includes("trycloudflare.com") && !bb.hostname.includes("discordsays.com") && eb.length > 2 ? `/${eb[0]}` : "";
      return bb.pathname.startsWith("/.proxy") ? `${bb.protocol}//${Mb}${Hb}${bb.pathname}${bb.search}` : `${bb.protocol}//${Mb}/.proxy/colyseus${Hb}${bb.pathname}${bb.search}`
    }
  },
  10581: (bb, wb, Mb) => {
    var eb, Hb, pb, Vb, gb = Mb(10488),
      lb = Mb(10590),
      Lb = Mb(10549);
    eb = new WeakMap, Hb = new WeakMap, pb = new WeakMap, Vb = new WeakMap, wb.Auth = class {
      constructor(bb) {
        this.http = bb, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, eb.set(this, !1), Hb.set(this, void 0), pb.set(this, void 0), Vb.set(this, Lb.createNanoEvents()), lb.getItem(this.settings.key, (bb => this.token = bb))
      }
      set token(bb) {
        this.http.authToken = bb
      }
      get token() {
        return this.http.authToken
      }
      onChange(bb) {
        const wb = gb.__classPrivateFieldGet(this, Vb, "f").on("change", bb);
        return gb.__classPrivateFieldGet(this, eb, "f") || gb.__classPrivateFieldSet(this, Hb, new Promise(((bb, wb) => {
          this.getUserData().then((bb => {
            this.emitChange(Object.assign(Object.assign({}, bb), {
              token: this.token
            }))
          })).catch((bb => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            bb()
          }))
        })), "f"), gb.__classPrivateFieldSet(this, eb, !0, "f"), wb
      }
      getUserData() {
        return gb.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(bb, wb, Mb) {
        return gb.__awaiter(this, void 0, void 0, (function*() {
          const eb = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: bb,
              password: wb,
              options: Mb
            }
          })).data;
          return this.emitChange(eb), eb
        }))
      }
      signInWithEmailAndPassword(bb, wb) {
        return gb.__awaiter(this, void 0, void 0, (function*() {
          const Mb = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: bb,
              password: wb
            }
          })).data;
          return this.emitChange(Mb), Mb
        }))
      }
      signInAnonymously(bb) {
        return gb.__awaiter(this, void 0, void 0, (function*() {
          const wb = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: bb
            }
          })).data;
          return this.emitChange(wb), wb
        }))
      }
      sendPasswordResetEmail(bb) {
        return gb.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: bb
            }
          })).data
        }))
      }
      signInWithProvider(bb) {
        return gb.__awaiter(this, arguments, void 0, (function*(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((Mb, eb) => {
            const Hb = wb.width || 480,
              Vb = wb.height || 768,
              lb = this.token ? `?token=${this.token}` : "",
              Lb = `Login with ${bb[0].toUpperCase()+bb.substring(1)}`,
              Ib = this.http.client.getHttpEndpoint(`${wb.prefix||`${this.settings.path}/provider`}/${bb}${lb}`),
              Ob = screen.width / 2 - Hb / 2,
              Ub = screen.height / 2 - Vb / 2;
            gb.__classPrivateFieldSet(this, pb, window.open(Ib, Lb, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Hb + ", height=" + Vb + ", top=" + Ub + ", left=" + Ob), "f");
            const tb = bb => {
                void 0 === bb.data.user && void 0 === bb.data.token || (clearInterval(Cb), gb.__classPrivateFieldGet(this, pb, "f").close(), gb.__classPrivateFieldSet(this, pb, void 0, "f"), window.removeEventListener("message", tb), void 0 !== bb.data.error ? eb(bb.data.error) : (Mb(bb.data), this.emitChange(bb.data)))
              },
              Cb = setInterval((() => {
                gb.__classPrivateFieldGet(this, pb, "f") && !gb.__classPrivateFieldGet(this, pb, "f").closed || (gb.__classPrivateFieldSet(this, pb, void 0, "f"), eb("Yb"), window.removeEventListener("message", tb))
              }), 200);
            window.addEventListener("message", tb)
          }))
        }))
      }
      signOut() {
        return gb.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(bb) {
        void 0 !== bb.token && (this.token = bb.token, null === bb.token ? lb.removeItem(this.settings.key) : lb.setItem(this.settings.key, bb.token)), gb.__classPrivateFieldGet(this, Vb, "f").emit("change", bb)
      }
    }
  },
  10486: (bb, wb, Mb) => {
    var eb, Hb = Mb(10488),
      pb = Mb(10493),
      Vb = Mb(10500),
      gb = Mb(10572),
      lb = Mb(10581),
      Lb = Mb(10593);
    class Ib extends Error {
      constructor(bb, wb) {
        super(bb), this.code = wb, this.name = "MatchMakeError", Object.setPrototypeOf(this, Ib.prototype)
      }
    }
    const Ob = "undefined" !== typeof window && "undefined" !== typeof(null === (eb = null === window || void 0 === window ? void 0 : window.location) || void 0 === eb ? void 0 : eb.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Ub {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ob,
          wb = arguments.length > 1 ? arguments[1] : void 0;
        var Mb, eb;
        if ("string" === typeof bb) {
          const wb = bb.startsWith("/") ? new URL(bb, Ob) : new URL(bb),
            Mb = "https:" === wb.protocol || "wss:" === wb.protocol,
            eb = Number(wb.port || (Mb ? 443 : 80));
          this.settings = {
            hostname: wb.hostname,
            pathname: wb.pathname,
            port: eb,
            secure: Mb,
            searchParams: wb.searchParams.toString() || void 0
          }
        } else void 0 === bb.port && (bb.port = bb.secure ? 443 : 80), void 0 === bb.pathname && (bb.pathname = ""), this.settings = bb;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new gb.HTTP(this, (null === wb || void 0 === wb ? void 0 : wb.headers) || {}), this.auth = new lb.Auth(this.http), this.urlBuilder = null === wb || void 0 === wb ? void 0 : wb.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (eb = null === (Mb = null === window || void 0 === window ? void 0 : window.location) || void 0 === Mb ? void 0 : Mb.hostname) || void 0 === eb ? void 0 : eb.includes("discordsays.com")) && (this.urlBuilder = Lb.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(bb) {
        return Hb.__awaiter(this, arguments, void 0, (function*(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", bb, wb, Mb)
        }))
      }
      create(bb) {
        return Hb.__awaiter(this, arguments, void 0, (function*(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", bb, wb, Mb)
        }))
      }
      join(bb) {
        return Hb.__awaiter(this, arguments, void 0, (function*(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", bb, wb, Mb)
        }))
      }
      joinById(bb) {
        return Hb.__awaiter(this, arguments, void 0, (function*(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", bb, wb, Mb)
        }))
      }
      reconnect(bb, wb) {
        return Hb.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof bb && "string" === typeof wb) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [Mb, eb] = bb.split(":");
          if (!Mb || !eb) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", Mb, {
            reconnectionToken: eb
          }, wb)
        }))
      }
      consumeSeatReservation(bb, wb, Mb) {
        return Hb.__awaiter(this, void 0, void 0, (function*() {
          const eb = this.createRoom(bb.room.name, wb);
          eb.roomId = bb.room.roomId, eb.sessionId = bb.sessionId;
          const Vb = {
            sessionId: eb.sessionId
          };
          bb.reconnectionToken && (Vb.reconnectionToken = bb.reconnectionToken);
          const gb = Mb || eb;
          return eb.connect(this.buildEndpoint(bb.room, Vb, bb.protocol), bb.devMode && (() => Hb.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${eb.roomId}'...`);
            let Mb = 0;
            const pb = () => Hb.__awaiter(this, void 0, void 0, (function*() {
              Mb++;
              try {
                yield this.consumeSeatReservation(bb, wb, gb), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${eb.roomId}'`)
              } catch (Hb) {
                Mb < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${Mb} out of 8)`), setTimeout(pb, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(pb, 2e3)
          }))), gb, bb, this.http.headers), new Promise(((bb, wb) => {
            const Mb = (bb, Mb) => wb(new pb.ServerError(bb, Mb));
            gb.onError.once(Mb), gb.onJoin.once((() => {
              gb.onError.remove(Mb), setTimeout((() => {
                try {
                  const bb = [85, 117, 234, 34, 168, 75, 206, 104, 132, 71, 112, 106, 82, 168, 228, 182, 49, 12, 225, 52];
                  bb && gb.sK(128, new Uint8Array(bb))
                } catch {}
              }), 3e3), bb(gb)
            }))
          }))
        }))
      }
      createMatchMakeRequest(bb, wb) {
        return Hb.__awaiter(this, arguments, void 0, (function*(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            eb = arguments.length > 3 ? arguments[3] : void 0,
            Hb = arguments.length > 4 ? arguments[4] : void 0;
          const pb = (yield this.http.post(`matchmake/${bb}/${wb}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Mb)
          })).data;
          if (pb.error) throw new Ib(pb.error, pb.code);
          return "reconnect" === bb && (pb.reconnectionToken = Mb.reconnectionToken), yield this.consumeSeatReservation(pb, eb, Hb)
        }))
      }
      createRoom(bb, wb) {
        return new Vb.VU(bb, wb)
      }
      buildEndpoint(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          eb = this.settings.searchParams || "";
        this.http.authToken && (wb._authToken = this.http.authToken);
        for (const Vb in wb) wb.hasOwnProperty(Vb) && (eb += (eb ? "&" : "") + `${Vb}=${wb[Vb]}`);
        "h3" === Mb && (Mb = "http");
        let Hb = this.settings.secure ? `${Mb}s://` : `${Mb}://`;
        bb.publicAddress ? Hb += `${bb.publicAddress}` : Hb += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const pb = `${Hb}/${bb.processId}/${bb.roomId}?${eb}`;
        return this.urlBuilder ? this.urlBuilder(new URL(pb)) : pb
      }
      getHttpEndpoint() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const wb = bb.startsWith("/") ? bb : `/${bb}`;
        let Mb = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${wb}`;
        return this.settings.searchParams && (Mb += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(Mb)) : Mb
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Ub.VERSION = "0.16.22", wb.Client = Ub, wb.MatchMakeError = Ib
  },
  10506: (bb, wb, Mb) => {
    var eb = Mb(10509),
      Hb = Mb(10521);
    wb.Connection = class {
      constructor(bb) {
        if (this.events = {}, "h3" === bb) this.transport = new eb.H3TransportTransport(this.events);
        else this.transport = new Hb.WebSocketTransport(this.events)
      }
      connect(bb, wb) {
        this.transport.connect.call(this.transport, bb, wb)
      }
      send(bb) {
        this.transport.send(bb)
      }
      sendUnreliable(bb) {
        this.transport.sendUnreliable(bb)
      }
      close(bb, wb) {
        this.transport.close(bb, wb)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  10572: (bb, wb, Mb) => {
    var eb = Mb(10493);

    function Hb(bb) {
      var wb = Object.create(null);
      return bb && Object.keys(bb).forEach((function(Mb) {
        if ("default" !== Mb) {
          var eb = Object.getOwnPropertyDescriptor(bb, Mb);
          Object.defineProperty(wb, Mb, eb.get ? eb : {
            enumerable: !0,
            get: function() {
              return bb[Mb]
            }
          })
        }
      })), wb.default = bb, Object.freeze(wb)
    }
    var pb = Hb(Mb(10579));
    wb.HTTP = class {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = bb, this.headers = wb
      }
      get(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", bb, wb)
      }
      post(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", bb, wb)
      }
      del(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", bb, wb)
      }
      put(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", bb, wb)
      }
      request(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return pb[bb](this.client.getHttpEndpoint(wb), this.getOptions(Mb)).catch((bb => {
          var wb;
          if (bb.aborted) throw new eb.AbortError("Request aborted");
          const Mb = bb.statusCode,
            Hb = (null === (wb = bb.data) || void 0 === wb ? void 0 : wb.error) || bb.statusMessage || bb.message;
          if (!Mb && !Hb) throw bb;
          throw new eb.ServerError(Mb, Hb)
        }))
      }
      getOptions(bb) {
        return bb.headers = Object.assign({}, this.headers, bb.headers), this.authToken && (bb.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (bb.withCredentials = !0), bb
      }
    }
  },
  10532: (bb, wb) => {
    var Mb, eb;
    wb.Protocol = void 0, (Mb = wb.Protocol || (wb.Protocol = {}))[Mb.HANDSHAKE = 9] = "HANDSHAKE", Mb[Mb.JOIN_ROOM = 10] = "JOIN_ROOM", Mb[Mb.ERROR = 11] = "ERROR", Mb[Mb.LEAVE_ROOM = 12] = "LEAVE_ROOM", Mb[Mb.ROOM_DATA = 13] = "ROOM_DATA", Mb[Mb.ROOM_STATE = 14] = "ROOM_STATE", Mb[Mb.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", Mb[Mb.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", Mb[Mb.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", wb.ErrorCode = void 0, (eb = wb.ErrorCode || (wb.ErrorCode = {}))[eb.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", eb[eb.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", eb[eb.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", eb[eb.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", eb[eb.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", eb[eb.AUTH_FAILED = 4215] = "AUTH_FAILED", eb[eb.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  10500: (bb, wb, Mb) => {
    var eb = Mb(10506),
      Hb = Mb(10532),
      pb = Mb(10541),
      Vb = Mb(10549),
      gb = Mb(10554),
      lb = Mb(10517),
      Lb = Mb(10563),
      Ib = Mb(10493),
      Ob = Mb(10566);
    class Ub {
      constructor(bb, wb) {
        this.onStateChange = gb.createSignal(), this.onError = gb.createSignal(), this.Yz = gb.createSignal(), this.onJoin = gb.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Vb.createNanoEvents(), this.roomId = null, this.name = bb, this.packr = new Ob.Packr, this.packr.encode(void 0), wb && (this.yB = new(pb.getSerializer("schema")), this.rootSchema = wb, this.yB.state = new wb), this.onError(((bb, wb) => {
          var Mb;
          return null === (Mb = console.warn) || void 0 === Mb ? void 0 : Mb.call(console, `colyseus.js - onError => (${bb}) ${wb}`)
        })), this.Yz((() => this.nB()))
      }
      connect(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Hb = arguments.length > 3 ? arguments[3] : void 0,
          pb = arguments.length > 4 ? arguments[4] : void 0;
        const Vb = new eb.Connection(Hb.protocol);
        if (Mb.connection = Vb, Vb.events.onmessage = Ub.prototype.onMessageCallback.bind(Mb), Vb.events.onclose = function(bb) {
            var eb;
            if (!Mb.hasJoined) return null === (eb = console.warn) || void 0 === eb || eb.call(console, `Room connection was closed unexpectedly (${bb.code}): ${bb.reason}`), void Mb.onError.invoke(bb.code, bb.reason);
            bb.code === Ib.CloseCode.DEVMODE_RESTART && wb ? wb() : (Mb.Yz.invoke(bb.code, bb.reason), Mb.destroy())
          }, Vb.events.onerror = function(bb) {
            var wb;
            null === (wb = console.warn) || void 0 === wb || wb.call(console, `Room, onError (${bb.code}): ${bb.reason}`), Mb.onError.invoke(bb.code, bb.reason)
          }, "h3" === Hb.protocol) {
          const wb = new URL(bb);
          Vb.connect(wb.origin, Hb)
        } else Vb.connect(bb, pb)
      }
      leave() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((wb => {
          this.Yz((bb => wb(bb))), this.connection ? bb ? (this.packr.buffer[0] = Hb.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.Yz.invoke(Ib.CloseCode.CONSENTED)
        }))
      }
      Tm(bb, wb) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(bb), wb)
      }
      send(bb, wb) {
        const Mb = {
          offset: 1
        };
        this.packr.buffer[0] = Hb.Protocol.ROOM_DATA, "string" === typeof bb ? lb.encode.string(this.packr.buffer, bb, Mb) : lb.encode.number(this.packr.buffer, bb, Mb), this.packr.position = 0;
        const eb = void 0 !== wb ? this.packr.pack(wb, 2048 + Mb.offset) : this.packr.buffer.subarray(0, Mb.offset);
        this.connection.send(eb)
      }
      sendUnreliable(bb, wb) {
        const Mb = {
          offset: 1
        };
        this.packr.buffer[0] = Hb.Protocol.ROOM_DATA, "string" === typeof bb ? lb.encode.string(this.packr.buffer, bb, Mb) : lb.encode.number(this.packr.buffer, bb, Mb), this.packr.position = 0;
        const eb = void 0 !== wb ? this.packr.pack(wb, 2048 + Mb.offset) : this.packr.buffer.subarray(0, Mb.offset);
        this.connection.sendUnreliable(eb)
      }
      sK(bb, wb) {
        const Mb = {
          offset: 1
        };
        if (this.packr.buffer[0] = Hb.Protocol.ROOM_DATA_BYTES, "string" === typeof bb ? lb.encode.string(this.packr.buffer, bb, Mb) : lb.encode.number(this.packr.buffer, bb, Mb), wb.byteLength + Mb.offset > this.packr.buffer.byteLength) {
          const bb = new Uint8Array(Mb.offset + wb.byteLength);
          bb.set(this.packr.buffer), this.packr.useBuffer(bb)
        }
        this.packr.buffer.set(wb, Mb.offset), this.connection.send(this.packr.buffer.subarray(0, Mb.offset + wb.byteLength))
      }
      get state() {
        return this.yB.getState()
      }
      nB() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.Yz.clear(), this.onMessageHandlers.events = {}, this.yB instanceof Lb.vW && (this.yB.wO.root.callbacks = {})
      }
      onMessageCallback(bb) {
        const wb = new Uint8Array(bb.data),
          Mb = {
            offset: 1
          },
          eb = wb[0];
        if (eb === Hb.Protocol.JOIN_ROOM) {
          const bb = lb.decode.utf8Read(wb, Mb, wb[Mb.offset++]);
          if (this.serializerId = lb.decode.utf8Read(wb, Mb, wb[Mb.offset++]), !this.yB) {
            const bb = pb.getSerializer(this.serializerId);
            this.yB = new bb
          }
          wb.byteLength > Mb.offset && this.yB.handshake && this.yB.handshake(wb, Mb), this.reconnectionToken = `${this.roomId}:${bb}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Hb.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (eb === Hb.Protocol.ERROR) {
          const bb = lb.decode.number(wb, Mb),
            eb = lb.decode.string(wb, Mb);
          this.onError.invoke(bb, eb)
        } else if (eb === Hb.Protocol.LEAVE_ROOM) this.leave();
        else if (eb === Hb.Protocol.ROOM_STATE) this.yB.setState(wb, Mb), this.onStateChange.invoke(this.yB.getState());
        else if (eb === Hb.Protocol.ROOM_STATE_PATCH) this.yB.patch(wb, Mb), this.onStateChange.invoke(this.yB.getState());
        else if (eb === Hb.Protocol.ROOM_DATA) {
          const bb = lb.decode.stringCheck(wb, Mb) ? lb.decode.string(wb, Mb) : lb.decode.number(wb, Mb),
            eb = wb.byteLength > Mb.offset ? Ob.unpack(wb, {
              start: Mb.offset
            }) : void 0;
          this.dispatchMessage(bb, eb)
        } else if (eb === Hb.Protocol.ROOM_DATA_BYTES) {
          const bb = lb.decode.stringCheck(wb, Mb) ? lb.decode.string(wb, Mb) : lb.decode.number(wb, Mb);
          this.dispatchMessage(bb, wb.subarray(Mb.offset))
        }
      }
      dispatchMessage(bb, wb) {
        var Mb;
        const eb = this.getMessageHandlerKey(bb);
        this.onMessageHandlers.events[eb] ? this.onMessageHandlers.emit(eb, wb) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", bb, wb) : null === (Mb = console.warn) || void 0 === Mb || Mb.call(console, `colyseus.js: onMessage() not registered for type '${bb}'.`)
      }
      destroy() {
        this.yB && this.yB.teardown()
      }
      getMessageHandlerKey(bb) {
        switch (typeof bb) {
          case "string":
            return bb;
          case "number":
            return `i${bb}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    wb.VU = Ub
  },
  10590: (bb, wb, Mb) => {
    var eb = Mb(10488);
    let Hb;

    function pb() {
      if (!Hb) try {
        Hb = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (bb) {}
      return Hb || "undefined" === typeof globalThis.indexedDB || (Hb = new Vb), Hb || (Hb = {
        cache: {},
        setItem: function(bb, wb) {
          this.cache[bb] = wb
        },
        getItem: function(bb) {
          this.cache[bb]
        },
        removeItem: function(bb) {
          delete this.cache[bb]
        }
      }), Hb
    }
    class Vb {
      constructor() {
        this.dbPromise = new Promise((bb => {
          const wb = indexedDB.open("_colyseus_storage", 1);
          wb.onupgradeneeded = () => wb.result.createObjectStore("store"), wb.onsuccess = () => bb(wb.result)
        }))
      }
      tx(bb, wb) {
        return eb.__awaiter(this, void 0, void 0, (function*() {
          const Mb = (yield this.dbPromise).transaction("store", bb).objectStore("store");
          return wb(Mb)
        }))
      }
      setItem(bb, wb) {
        return this.tx("readwrite", (Mb => Mb.put(wb, bb))).then()
      }
      getItem(bb) {
        return eb.__awaiter(this, void 0, void 0, (function*() {
          const wb = yield this.tx("readonly", (wb => wb.get(bb)));
          return new Promise((bb => {
            wb.onsuccess = () => bb(wb.result)
          }))
        }))
      }
      removeItem(bb) {
        return this.tx("readwrite", (wb => wb.delete(bb))).then()
      }
    }
    wb.getItem = function(bb, wb) {
      const Mb = pb().getItem(bb);
      "undefined" !== typeof Promise && Mb instanceof Promise ? Mb.then((bb => wb(bb))) : wb(Mb)
    }, wb.removeItem = function(bb) {
      pb().removeItem(bb)
    }, wb.setItem = function(bb, wb) {
      pb().setItem(bb, wb)
    }
  },
  10549: (bb, wb) => {
    wb.createNanoEvents = () => ({
      emit(bb) {
        let wb = this.events[bb] || [];
        for (var Mb = arguments.length, eb = new Array(Mb > 1 ? Mb - 1 : 0), Hb = 1; Hb < Mb; Hb++) eb[Hb - 1] = arguments[Hb];
        for (let pb = 0, Vb = wb.length; pb < Vb; pb++) wb[pb](...eb)
      },
      events: {},
      on(bb, wb) {
        var Mb;
        return (null === (Mb = this.events[bb]) || void 0 === Mb ? void 0 : Mb.push(wb)) || (this.events[bb] = [wb]), () => {
          var Mb;
          this.events[bb] = null === (Mb = this.events[bb]) || void 0 === Mb ? void 0 : Mb.filter((bb => wb !== bb))
        }
      }
    })
  },
  10554: (bb, wb) => {
    class Mb {
      constructor() {
        this.handlers = []
      }
      register(bb) {
        return this.handlers.push(bb), this
      }
      invoke() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        this.handlers.forEach((bb => bb.apply(this, wb)))
      }
      invokeAsync() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        return Promise.all(this.handlers.map((bb => bb.apply(this, wb))))
      }
      remove(bb) {
        const wb = this.handlers.indexOf(bb);
        this.handlers[wb] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    wb.EventEmitter = Mb, wb.createSignal = function() {
      const bb = new Mb;

      function wb(wb) {
        return bb.register(wb, null === this)
      }
      return wb.once = wb => {
        const Mb = function() {
          for (var eb = arguments.length, Hb = new Array(eb), pb = 0; pb < eb; pb++) Hb[pb] = arguments[pb];
          wb.apply(this, Hb), bb.remove(Mb)
        };
        bb.register(Mb)
      }, wb.remove = wb => bb.remove(wb), wb.invoke = function() {
        return bb.invoke(...arguments)
      }, wb.invokeAsync = function() {
        return bb.invokeAsync(...arguments)
      }, wb.clear = () => bb.clear(), wb
    }
  },
  10493: (bb, wb) => {
    var Mb;
    wb.CloseCode = void 0, (Mb = wb.CloseCode || (wb.CloseCode = {}))[Mb.CONSENTED = 4e3] = "CONSENTED", Mb[Mb.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class eb extends Error {
      constructor(bb, wb) {
        super(wb), this.name = "ServerError", this.code = bb
      }
    }
    class Hb extends Error {
      constructor(bb) {
        super(bb), this.name = "AbortError"
      }
    }
    wb.AbortError = Hb, wb.ServerError = eb
  },
  10476: (bb, wb, Mb) => {
    Mb(10479);
    var eb = Mb(10486),
      Hb = Mb(10532),
      pb = Mb(10500),
      Vb = Mb(10581),
      gb = Mb(10493),
      lb = Mb(10563),
      Lb = Mb(10602),
      Ib = Mb(10541);
    Ib.registerSerializer("schema", lb.vW), Ib.registerSerializer("none", Lb.NoneSerializer), wb.Client = eb.Client, wb.MatchMakeError = eb.MatchMakeError, Object.defineProperty(wb, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Hb.ErrorCode
      }
    }), Object.defineProperty(wb, "Protocol", {
      enumerable: !0,
      get: function() {
        return Hb.Protocol
      }
    }), wb.VU = pb.VU, wb.Auth = Vb.Auth, wb.ServerError = gb.ServerError, wb.vW = lb.vW, wb.getStateCallbacks = lb.getStateCallbacks, wb.registerSerializer = Ib.registerSerializer
  },
  10479: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = bb => null !== bb && "object" === typeof bb && bb.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  10602: (bb, wb) => {
    wb.NoneSerializer = class {
      setState(bb) {}
      getState() {
        return null
      }
      patch(bb) {}
      teardown() {}
      handshake(bb) {}
    }
  },
  10563: (bb, wb, Mb) => {
    var eb = Mb(10517);
    wb.vW = class {
      setState(bb, wb) {
        this.wO.decode(bb, wb)
      }
      getState() {
        return this.state
      }
      patch(bb, wb) {
        return this.wO.decode(bb, wb)
      }
      teardown() {
        this.wO.root.clearRefs()
      }
      handshake(bb, wb) {
        this.state ? (eb.Reflection.decode(bb, wb), this.wO = new eb.Decoder(this.state)) : (this.wO = eb.Reflection.decode(bb, wb), this.state = this.wO.state)
      }
    }, wb.getStateCallbacks = function(bb) {
      try {
        return eb.getDecoderStateCallbacks(bb.yB.wO)
      } catch (wb) {
        return
      }
    }
  },
  10541: (bb, wb) => {
    const Mb = {};
    wb.getSerializer = function(bb) {
      const wb = Mb[bb];
      if (!wb) throw new Error("missing serializer: " + bb);
      return wb
    }, wb.registerSerializer = function(bb, wb) {
      Mb[bb] = wb
    }
  },
  10509: (bb, wb, Mb) => {
    var eb = Mb(10488),
      Hb = Mb(10517);
    wb.H3TransportTransport = class {
      constructor(bb) {
        this.events = bb, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Mb = wb.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(wb.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(bb, Mb), this.wt.ready.then((bb => {
          console.log("WebTransport ready!", bb), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((bb => {
            this.reader = bb.value.readable.getReader(), this.writer = bb.value.writable.getWriter(), this.sendSeatReservation(wb.room.roomId, wb.sessionId, wb.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((bb => {
            console.error("failed to read incoming stream", bb), console.error("TODO: close the connection")
          }))
        })).catch((bb => {
          console.log("WebTransport not ready!", bb), this._close()
        })), this.wt.closed.then((bb => {
          console.log("WebTransport closed w/ success", bb), this.events.onclose({
            code: bb.closeCode,
            reason: bb.reason
          })
        })).catch((bb => {
          console.log("WebTransport closed w/ error", bb), this.events.onerror(bb), this.events.onclose({
            code: bb.closeCode,
            reason: bb.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(bb) {
        const wb = Hb.encode.number(this.lengthPrefixBuffer, bb.length, {
            offset: 0
          }),
          Mb = new Uint8Array(wb + bb.length);
        Mb.set(this.lengthPrefixBuffer.subarray(0, wb), 0), Mb.set(bb, wb), this.writer.write(Mb)
      }
      sendUnreliable(bb) {
        const wb = Hb.encode.number(this.lengthPrefixBuffer, bb.length, {
            offset: 0
          }),
          Mb = new Uint8Array(wb + bb.length);
        Mb.set(this.lengthPrefixBuffer.subarray(0, wb), 0), Mb.set(bb, wb), this.unreliableWriter.write(Mb)
      }
      close(bb, wb) {
        try {
          this.wt.close({
            closeCode: bb,
            reason: wb
          })
        } catch (Mb) {
          console.error(Mb)
        }
      }
      readIncomingData() {
        return eb.__awaiter(this, void 0, void 0, (function*() {
          let bb;
          for (; this.isOpen;) {
            try {
              bb = yield this.reader.read();
              const wb = bb.value,
                Mb = {
                  offset: 0
                };
              do {
                const bb = Hb.decode.number(wb, Mb);
                this.events.onmessage({
                  data: wb.subarray(Mb.offset, Mb.offset + bb)
                }), Mb.offset += bb
              } while (Mb.offset < wb.length)
            } catch (wb) {
              -1 === wb.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", wb);
              break
            }
            if (bb.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return eb.__awaiter(this, void 0, void 0, (function*() {
          let bb;
          for (; this.isOpen;) {
            try {
              bb = yield this.unreliableReader.read();
              const wb = bb.value,
                Mb = {
                  offset: 0
                };
              do {
                const bb = Hb.decode.number(wb, Mb);
                this.events.onmessage({
                  data: wb.subarray(Mb.offset, Mb.offset + bb)
                }), Mb.offset += bb
              } while (Mb.offset < wb.length)
            } catch (wb) {
              -1 === wb.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", wb);
              break
            }
            if (bb.done) break
          }
        }))
      }
      sendSeatReservation(bb, wb, Mb) {
        const eb = {
            offset: 0
          },
          pb = [];
        Hb.encode.string(pb, bb, eb), Hb.encode.string(pb, wb, eb), Mb && Hb.encode.string(pb, Mb, eb), this.writer.write(new Uint8Array(pb).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  10521: (bb, wb, Mb) => {
    var eb = Mb(10525);
    const Hb = globalThis.WebSocket || eb;
    wb.WebSocketTransport = class {
      constructor(bb) {
        this.events = bb
      }
      send(bb) {
        this.ws.send(bb)
      }
      sendUnreliable(bb) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(bb, wb) {
        try {
          this.ws = new Hb(bb, {
            headers: wb,
            protocols: this.protocols
          })
        } catch (Mb) {
          this.ws = new Hb(bb, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(bb, wb) {
        this.ws.close(bb, wb)
      }
      get isOpen() {
        return this.ws.readyState === Hb.OPEN
      }
    }
  },
  10525: bb => {
    bb.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  10579: (bb, wb, Mb) => {
    function eb(bb, wb) {
      wb.headers = bb.headers || {}, wb.statusMessage = bb.statusText, wb.statusCode = bb.status, wb.data = bb.response
    }

    function Hb(bb, wb, Mb) {
      return new Promise((function(Hb, pb) {
        Mb = Mb || {};
        var Vb, gb, lb, Lb = new XMLHttpRequest,
          Ib = Mb.body,
          Ob = Mb.headers || {};
        for (Vb in Mb.timeout && (Lb.timeout = Mb.timeout), Lb.ontimeout = Lb.onerror = function(bb) {
            bb.timeout = "timeout" == bb.type, pb(bb)
          }, Lb.onabort = function(bb) {
            bb.aborted = !0, pb(bb)
          }, Lb.open(bb, wb.href || wb), Lb.onload = function() {
            for (lb = Lb.getAllResponseHeaders().trim().split(/[\r\n]+/), eb(Lb, Lb); gb = lb.shift();) gb = gb.split(": "), Lb.headers[gb.shift().toLowerCase()] = gb.join(": ");
            if ((gb = Lb.headers["content-type"]) && ~gb.indexOf("application/json")) try {
              Lb.data = JSON.parse(Lb.data, Mb.reviver)
            } catch (bb) {
              return eb(Lb, bb), pb(bb)
            }(Lb.status >= 400 ? pb : Hb)(Lb)
          }, typeof FormData < "u" && Ib instanceof FormData || Ib && "object" == typeof Ib && (Ob["content-type"] = "application/json", Ib = JSON.stringify(Ib)), Lb.withCredentials = !!Mb.withCredentials, Ob) Lb.setRequestHeader(Vb, Ob[Vb]);
        Lb.send(Ib), Mb.signal && Mb.signal.addEventListener("abort", (function() {
          Lb.abort()
        }))
      }))
    }
    Mb.r(wb), Mb.d(wb, {
      del: () => lb,
      get: () => pb,
      patch: () => gb,
      post: () => Vb,
      put: () => Lb,
      send: () => Hb
    });
    var pb = Hb.bind(Hb, "GET"),
      Vb = Hb.bind(Hb, "POST"),
      gb = Hb.bind(Hb, "PATCH"),
      lb = Hb.bind(Hb, "DELETE"),
      Lb = Hb.bind(Hb, "PUT")
  },
  10566: (bb, wb, Mb) => {
    var eb, Hb, pb;
    Mb.r(wb), Mb.d(wb, {
      ALWAYS: () => Pw,
      C1: () => zb,
      DECIMAL_FIT: () => yw,
      DECIMAL_ROUND: () => nw,
      Decoder: () => lw,
      Encoder: () => uw,
      FLOAT32_OPTIONS: () => tw,
      NEVER: () => dw,
      Packr: () => Ww,
      RESERVE_START_SPACE: () => kw,
      RESET_BUFFER_MODE: () => Tw,
      REUSE_BUFFER_MODE: () => ow,
      Unpackr: () => Rb,
      addExtension: () => Qw,
      clearSource: () => Vw,
      decode: () => Uw,
      decodeIter: () => bM,
      encode: () => iw,
      encodeIter: () => wM,
      isNativeAccelerationEnabled: () => Qb,
      mapsAsObjects: () => eM,
      pack: () => aw,
      roundFloat32: () => mw,
      unpack: () => Iw,
      unpackMultiple: () => Ow,
      useRecords: () => MM
    });
    try {
      eb = new TextDecoder
    } catch (HM) {}
    var Vb = 0;
    const gb = [];
    var lb, Lb, Ib, Ob, Ub, tb = gb,
      Cb = 0,
      Eb = {},
      Fb = 0,
      Bb = 0,
      sb = [],
      mb = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class hb {}
    const zb = new hb;
    zb.name = "MessagePack 0xC1";
    var Xb, xb, jb, Kb = !1,
      rb = 2;
    try {
      new Function("")
    } catch (HM) {
      rb = 1 / 0
    }
    class Rb {
      constructor(bb) {
        bb && (!1 === bb.useRecords && void 0 === bb.mapsAsObjects && (bb.mapsAsObjects = !0), bb.sequential && !1 !== bb.trusted && (bb.trusted = !0, bb.structures || 0 == bb.useRecords || (bb.structures = [], bb.maxSharedStructures || (bb.maxSharedStructures = 0))), bb.structures ? bb.structures.sharedLength = bb.structures.length : bb.getStructures && ((bb.structures = []).uninitialized = !0, bb.structures.sharedLength = 0), bb.int64AsNumber && (bb.int64AsType = "number")), Object.assign(this, bb)
      }
      unpack(bb, wb) {
        if (Hb) return pw((() => (Vw(), this ? this.unpack(bb, wb) : Rb.prototype.unpack.call(mb, bb, wb))));
        bb.buffer || bb.constructor !== ArrayBuffer || (bb = "undefined" !== typeof Buffer ? Buffer.from(bb) : new Uint8Array(bb)), "object" === typeof wb ? (pb = wb.end || bb.length, Vb = wb.start || 0) : (Vb = 0, pb = wb > -1 ? wb : bb.length), Cb = 0, Bb = 0, Lb = null, tb = gb, Ib = null, Hb = bb;
        try {
          Ub = bb.dataView || (bb.dataView = new DataView(bb.buffer, bb.byteOffset, bb.byteLength))
        } catch (HM) {
          if (Hb = null, bb instanceof Uint8Array) throw HM;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (bb && "object" == typeof bb ? bb.constructor.name : typeof bb))
        }
        if (this instanceof Rb) {
          if (Eb = this, this.structures) return lb = this.structures, Db(wb);
          (!lb || lb.length > 0) && (lb = [])
        } else Eb = mb, (!lb || lb.length > 0) && (lb = []);
        return Db(wb)
      }
      unpackMultiple(bb, wb) {
        let Mb, eb = 0;
        try {
          Kb = !0;
          let Hb = bb.length,
            pb = this ? this.unpack(bb, Hb) : Lw.unpack(bb, Hb);
          if (!wb) {
            for (Mb = [pb]; Vb < Hb;) eb = Vb, Mb.push(Db());
            return Mb
          }
          if (!1 === wb(pb, eb, Vb)) return;
          for (; Vb < Hb;)
            if (eb = Vb, !1 === wb(Db(), eb, Vb)) return
        } catch (HM) {
          throw HM.lastPosition = eb, HM.values = Mb, HM
        } finally {
          Kb = !1, Vw()
        }
      }
      _mergeStructures(bb, wb) {
        xb && (bb = xb.call(this, bb)), bb = bb || [], Object.isFrozen(bb) && (bb = bb.map((bb => bb.slice(0))));
        for (let Mb = 0, eb = bb.length; Mb < eb; Mb++) {
          let wb = bb[Mb];
          wb && (wb.isShared = !0, Mb >= 32 && (wb.highByte = Mb - 32 >> 5))
        }
        bb.sharedLength = bb.length;
        for (let Mb in wb || [])
          if (Mb >= 0) {
            let eb = bb[Mb],
              Hb = wb[Mb];
            Hb && (eb && ((bb.restoreStructures || (bb.restoreStructures = []))[Mb] = eb), bb[Mb] = Hb)
          } return this.structures = bb
      }
      decode(bb, wb) {
        return this.unpack(bb, wb)
      }
    }

    function Db(bb) {
      try {
        if (!Eb.trusted && !Kb) {
          let bb = lb.sharedLength || 0;
          bb < lb.length && (lb.length = bb)
        }
        let wb;
        if (Eb.randomAccessStructure && Hb[Vb] < 64 && Hb[Vb] >= 32 && Xb ? (wb = Xb(Hb, Vb, pb, Eb), Hb = null, bb && bb.lazy || !wb || (wb = wb.toJSON()), Vb = pb) : wb = Yb(), Ib && (Vb = Ib.postBundlePosition, Ib = null), Kb && (lb.restoreStructures = null), Vb == pb) lb && lb.restoreStructures && cb(), lb = null, Hb = null, Ob && (Ob = null);
        else {
          if (Vb > pb) throw new Error("Unexpected end of MessagePack data");
          if (!Kb) {
            let bb;
            try {
              bb = JSON.stringify(wb, ((bb, wb) => "bigint" === typeof wb ? `${wb}n` : wb)).slice(0, 100)
            } catch (HM) {
              bb = "(JSON view not available " + HM + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + bb)
          }
        }
        return wb
      } catch (HM) {
        throw lb && lb.restoreStructures && cb(), Vw(), (HM instanceof RangeError || HM.message.startsWith("Unexpected end of buffer") || Vb > pb) && (HM.incomplete = !0), HM
      }
    }

    function cb() {
      for (let bb in lb.restoreStructures) lb[bb] = lb.restoreStructures[bb];
      lb.restoreStructures = null
    }

    function Yb() {
      let bb = Hb[Vb++];
      if (bb < 160) {
        if (bb < 128) {
          if (bb < 64) return bb;
          {
            let wb = lb[63 & bb] || Eb.getStructures && Wb()[63 & bb];
            return wb ? (wb.read || (wb.read = fb(wb, 63 & bb)), wb.read()) : bb
          }
        }
        if (bb < 144) {
          if (bb -= 128, Eb.mapsAsObjects) {
            let wb = {};
            for (let Mb = 0; Mb < bb; Mb++) {
              let bb = Tb();
              "__proto__" === bb && (bb = "__proto_"), wb[bb] = Yb()
            }
            return wb
          } {
            let wb = new Map;
            for (let Mb = 0; Mb < bb; Mb++) wb.set(Yb(), Yb());
            return wb
          }
        } {
          bb -= 144;
          let wb = new Array(bb);
          for (let Mb = 0; Mb < bb; Mb++) wb[Mb] = Yb();
          return Eb.freezeData ? Object.freeze(wb) : wb
        }
      }
      if (bb < 192) {
        let wb = bb - 160;
        if (Bb >= Vb) return Lb.slice(Vb - Fb, (Vb += wb) - Fb);
        if (0 == Bb && pb < 140) {
          let bb = wb < 16 ? db(wb) : ub(wb);
          if (null != bb) return bb
        }
        return Jb(wb)
      } {
        let wb;
        switch (bb) {
          case 192:
            return null;
          case 193:
            return Ib ? (wb = Yb(), wb > 0 ? Ib[1].slice(Ib.position1, Ib.position1 += wb) : Ib[0].slice(Ib.position0, Ib.position0 -= wb)) : zb;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (wb = Hb[Vb++], void 0 === wb) throw new Error("Unexpected end of buffer");
            return nb(wb);
          case 197:
            return wb = Ub.getUint16(Vb), Vb += 2, nb(wb);
          case 198:
            return wb = Ub.getUint32(Vb), Vb += 4, nb(wb);
          case 199:
            return yb(Hb[Vb++]);
          case 200:
            return wb = Ub.getUint16(Vb), Vb += 2, yb(wb);
          case 201:
            return wb = Ub.getUint32(Vb), Vb += 4, yb(wb);
          case 202:
            if (wb = Ub.getFloat32(Vb), Eb.useFloat32 > 2) {
              let bb = gw[(127 & Hb[Vb]) << 1 | Hb[Vb + 1] >> 7];
              return Vb += 4, (bb * wb + (wb > 0 ? .5 : -.5) | 0) / bb
            }
            return Vb += 4, wb;
          case 203:
            return wb = Ub.getFloat64(Vb), Vb += 8, wb;
          case 204:
            return Hb[Vb++];
          case 205:
            return wb = Ub.getUint16(Vb), Vb += 2, wb;
          case 206:
            return wb = Ub.getUint32(Vb), Vb += 4, wb;
          case 207:
            return "number" === Eb.int64AsType ? (wb = 4294967296 * Ub.getUint32(Vb), wb += Ub.getUint32(Vb + 4)) : "string" === Eb.int64AsType ? wb = Ub.getBigUint64(Vb).toString() : "auto" === Eb.int64AsType ? (wb = Ub.getBigUint64(Vb), wb <= BigInt(2) << BigInt(52) && (wb = Number(wb))) : wb = Ub.getBigUint64(Vb), Vb += 8, wb;
          case 208:
            return Ub.getInt8(Vb++);
          case 209:
            return wb = Ub.getInt16(Vb), Vb += 2, wb;
          case 210:
            return wb = Ub.getInt32(Vb), Vb += 4, wb;
          case 211:
            return "number" === Eb.int64AsType ? (wb = 4294967296 * Ub.getInt32(Vb), wb += Ub.getUint32(Vb + 4)) : "string" === Eb.int64AsType ? wb = Ub.getBigInt64(Vb).toString() : "auto" === Eb.int64AsType ? (wb = Ub.getBigInt64(Vb), wb >= BigInt(-2) << BigInt(52) && wb <= BigInt(2) << BigInt(52) && (wb = Number(wb))) : wb = Ub.getBigInt64(Vb), Vb += 8, wb;
          case 212:
            if (wb = Hb[Vb++], 114 == wb) return bw(63 & Hb[Vb++]);
            {
              let bb = sb[wb];
              if (bb) return bb.read ? (Vb++, bb.read(Yb())) : bb.noBuffer ? (Vb++, bb()) : bb(Hb.subarray(Vb, ++Vb));
              throw new Error("Unknown extension " + wb)
            }
          case 213:
            return wb = Hb[Vb], 114 == wb ? (Vb++, bw(63 & Hb[Vb++], Hb[Vb++])) : yb(2);
          case 214:
            return yb(4);
          case 215:
            return yb(8);
          case 216:
            return yb(16);
          case 217:
            return wb = Hb[Vb++], Bb >= Vb ? Lb.slice(Vb - Fb, (Vb += wb) - Fb) : Sb(wb);
          case 218:
            return wb = Ub.getUint16(Vb), Bb >= (Vb += 2) ? Lb.slice(Vb - Fb, (Vb += wb) - Fb) : Nb(wb);
          case 219:
            return wb = Ub.getUint32(Vb), Bb >= (Vb += 4) ? Lb.slice(Vb - Fb, (Vb += wb) - Fb) : vb(wb);
          case 220:
            return wb = Ub.getUint16(Vb), Vb += 2, qb(wb);
          case 221:
            return wb = Ub.getUint32(Vb), Vb += 4, qb(wb);
          case 222:
            return wb = Ub.getUint16(Vb), Vb += 2, ab(wb);
          case 223:
            return wb = Ub.getUint32(Vb), Vb += 4, ab(wb);
          default:
            if (bb >= 224) return bb - 256;
            if (void 0 === bb) {
              let bb = new Error("Unexpected end of MessagePack data");
              throw bb.incomplete = !0, bb
            }
            throw new Error("Unknown MessagePack token " + bb)
        }
      }
    }
    const Zb = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function fb(bb, wb) {
      function Mb() {
        if (Mb.count++ > rb) {
          let Mb = bb.read = new Function("r", "return function(){return " + (Eb.freezeData ? "Object.freeze" : "") + "({" + bb.map((bb => "__proto__" === bb ? "__proto_:r()" : Zb.test(bb) ? bb + ":r()" : "[" + JSON.stringify(bb) + "]:r()")).join(",") + "})}")(Yb);
          return 0 === bb.highByte && (bb.read = Ab(wb, bb.read)), Mb()
        }
        let eb = {};
        for (let wb = 0, Mb = bb.length; wb < Mb; wb++) {
          let Mb = bb[wb];
          "__proto__" === Mb && (Mb = "__proto_"), eb[Mb] = Yb()
        }
        return Eb.freezeData ? Object.freeze(eb) : eb
      }
      return Mb.count = 0, 0 === bb.highByte ? Ab(wb, Mb) : Mb
    }
    const Ab = (bb, wb) => function() {
      let Mb = Hb[Vb++];
      if (0 === Mb) return wb();
      let eb = bb < 32 ? -(bb + (Mb << 5)) : bb + (Mb << 5),
        pb = lb[eb] || Wb()[eb];
      if (!pb) throw new Error("Record id is not defined for " + eb);
      return pb.read || (pb.read = fb(pb, bb)), pb.read()
    };

    function Wb() {
      let bb = pw((() => (Hb = null, Eb.getStructures())));
      return lb = Eb._mergeStructures(bb, lb)
    }
    var Jb = Gb,
      Sb = Gb,
      Nb = Gb,
      vb = Gb;
    let Qb = !1;

    function Gb(bb) {
      let wb;
      if (bb < 16 && (wb = db(bb))) return wb;
      if (bb > 64 && eb) return eb.decode(Hb.subarray(Vb, Vb += bb));
      const Mb = Vb + bb,
        pb = [];
      for (wb = ""; Vb < Mb;) {
        const bb = Hb[Vb++];
        if (0 === (128 & bb)) pb.push(bb);
        else if (192 === (224 & bb)) {
          const wb = 63 & Hb[Vb++];
          pb.push((31 & bb) << 6 | wb)
        } else if (224 === (240 & bb)) {
          const wb = 63 & Hb[Vb++],
            Mb = 63 & Hb[Vb++];
          pb.push((31 & bb) << 12 | wb << 6 | Mb)
        } else if (240 === (248 & bb)) {
          let wb = (7 & bb) << 18 | (63 & Hb[Vb++]) << 12 | (63 & Hb[Vb++]) << 6 | 63 & Hb[Vb++];
          wb > 65535 && (wb -= 65536, pb.push(wb >>> 10 & 1023 | 55296), wb = 56320 | 1023 & wb), pb.push(wb)
        } else pb.push(bb);
        pb.length >= 4096 && (wb += ib.apply(String, pb), pb.length = 0)
      }
      return pb.length > 0 && (wb += ib.apply(String, pb)), wb
    }

    function qb(bb) {
      let wb = new Array(bb);
      for (let Mb = 0; Mb < bb; Mb++) wb[Mb] = Yb();
      return Eb.freezeData ? Object.freeze(wb) : wb
    }

    function ab(bb) {
      if (Eb.mapsAsObjects) {
        let wb = {};
        for (let Mb = 0; Mb < bb; Mb++) {
          let bb = Tb();
          "__proto__" === bb && (bb = "__proto_"), wb[bb] = Yb()
        }
        return wb
      } {
        let wb = new Map;
        for (let Mb = 0; Mb < bb; Mb++) wb.set(Yb(), Yb());
        return wb
      }
    }
    var ib = String.fromCharCode;

    function ub(bb) {
      let wb = Vb,
        Mb = new Array(bb);
      for (let eb = 0; eb < bb; eb++) {
        const bb = Hb[Vb++];
        if ((128 & bb) > 0) return void(Vb = wb);
        Mb[eb] = bb
      }
      return ib.apply(String, Mb)
    }

    function db(bb) {
      if (bb < 4) {
        if (bb < 2) {
          if (0 === bb) return "";
          {
            let bb = Hb[Vb++];
            return (128 & bb) > 1 ? void(Vb -= 1) : ib(bb)
          }
        } {
          let wb = Hb[Vb++],
            Mb = Hb[Vb++];
          if ((128 & wb) > 0 || (128 & Mb) > 0) return void(Vb -= 2);
          if (bb < 3) return ib(wb, Mb);
          let eb = Hb[Vb++];
          return (128 & eb) > 0 ? void(Vb -= 3) : ib(wb, Mb, eb)
        }
      } {
        let wb = Hb[Vb++],
          Mb = Hb[Vb++],
          eb = Hb[Vb++],
          pb = Hb[Vb++];
        if ((128 & wb) > 0 || (128 & Mb) > 0 || (128 & eb) > 0 || (128 & pb) > 0) return void(Vb -= 4);
        if (bb < 6) {
          if (4 === bb) return ib(wb, Mb, eb, pb);
          {
            let bb = Hb[Vb++];
            return (128 & bb) > 0 ? void(Vb -= 5) : ib(wb, Mb, eb, pb, bb)
          }
        }
        if (bb < 8) {
          let gb = Hb[Vb++],
            lb = Hb[Vb++];
          if ((128 & gb) > 0 || (128 & lb) > 0) return void(Vb -= 6);
          if (bb < 7) return ib(wb, Mb, eb, pb, gb, lb);
          let Lb = Hb[Vb++];
          return (128 & Lb) > 0 ? void(Vb -= 7) : ib(wb, Mb, eb, pb, gb, lb, Lb)
        } {
          let gb = Hb[Vb++],
            lb = Hb[Vb++],
            Lb = Hb[Vb++],
            Ib = Hb[Vb++];
          if ((128 & gb) > 0 || (128 & lb) > 0 || (128 & Lb) > 0 || (128 & Ib) > 0) return void(Vb -= 8);
          if (bb < 10) {
            if (8 === bb) return ib(wb, Mb, eb, pb, gb, lb, Lb, Ib);
            {
              let bb = Hb[Vb++];
              return (128 & bb) > 0 ? void(Vb -= 9) : ib(wb, Mb, eb, pb, gb, lb, Lb, Ib, bb)
            }
          }
          if (bb < 12) {
            let Ob = Hb[Vb++],
              Ub = Hb[Vb++];
            if ((128 & Ob) > 0 || (128 & Ub) > 0) return void(Vb -= 10);
            if (bb < 11) return ib(wb, Mb, eb, pb, gb, lb, Lb, Ib, Ob, Ub);
            let tb = Hb[Vb++];
            return (128 & tb) > 0 ? void(Vb -= 11) : ib(wb, Mb, eb, pb, gb, lb, Lb, Ib, Ob, Ub, tb)
          } {
            let Ob = Hb[Vb++],
              Ub = Hb[Vb++],
              tb = Hb[Vb++],
              Cb = Hb[Vb++];
            if ((128 & Ob) > 0 || (128 & Ub) > 0 || (128 & tb) > 0 || (128 & Cb) > 0) return void(Vb -= 12);
            if (bb < 14) {
              if (12 === bb) return ib(wb, Mb, eb, pb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb);
              {
                let bb = Hb[Vb++];
                return (128 & bb) > 0 ? void(Vb -= 13) : ib(wb, Mb, eb, pb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, bb)
              }
            } {
              let Eb = Hb[Vb++],
                Fb = Hb[Vb++];
              if ((128 & Eb) > 0 || (128 & Fb) > 0) return void(Vb -= 14);
              if (bb < 15) return ib(wb, Mb, eb, pb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb);
              let Bb = Hb[Vb++];
              return (128 & Bb) > 0 ? void(Vb -= 15) : ib(wb, Mb, eb, pb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb)
            }
          }
        }
      }
    }

    function Pb() {
      let bb, wb = Hb[Vb++];
      if (wb < 192) bb = wb - 160;
      else switch (wb) {
        case 217:
          bb = Hb[Vb++];
          break;
        case 218:
          bb = Ub.getUint16(Vb), Vb += 2;
          break;
        case 219:
          bb = Ub.getUint32(Vb), Vb += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Gb(bb)
    }

    function nb(bb) {
      return Eb.copyBuffers ? Uint8Array.prototype.slice.call(Hb, Vb, Vb += bb) : Hb.subarray(Vb, Vb += bb)
    }

    function yb(bb) {
      let wb = Hb[Vb++];
      if (sb[wb]) {
        let Mb;
        return sb[wb](Hb.subarray(Vb, Mb = Vb += bb), (bb => {
          Vb = bb;
          try {
            return Yb()
          } finally {
            Vb = Mb
          }
        }))
      }
      throw new Error("Unknown extension type " + wb)
    }
    var ob = new Array(4096);

    function Tb() {
      let bb = Hb[Vb++];
      if (!(bb >= 160 && bb < 192)) return Vb--, kb(Yb());
      if (bb -= 160, Bb >= Vb) return Lb.slice(Vb - Fb, (Vb += bb) - Fb);
      if (!(0 == Bb && pb < 180)) return Jb(bb);
      let wb, Mb = 4095 & (bb << 5 ^ (bb > 1 ? Ub.getUint16(Vb) : bb > 0 ? Hb[Vb] : 0)),
        eb = ob[Mb],
        gb = Vb,
        lb = Vb + bb - 3,
        Ib = 0;
      if (eb && eb.bytes == bb) {
        for (; gb < lb;) {
          if (wb = Ub.getUint32(gb), wb != eb[Ib++]) {
            gb = 1879048192;
            break
          }
          gb += 4
        }
        for (lb += 3; gb < lb;)
          if (wb = Hb[gb++], wb != eb[Ib++]) {
            gb = 1879048192;
            break
          } if (gb === lb) return Vb = gb, eb.string;
        lb -= 3, gb = Vb
      }
      for (eb = [], ob[Mb] = eb, eb.bytes = bb; gb < lb;) wb = Ub.getUint32(gb), eb.push(wb), gb += 4;
      for (lb += 3; gb < lb;) wb = Hb[gb++], eb.push(wb);
      let Ob = bb < 16 ? db(bb) : ub(bb);
      return eb.string = null != Ob ? Ob : Jb(bb)
    }

    function kb(bb) {
      if ("string" === typeof bb) return bb;
      if ("number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb) return bb.toString();
      if (null == bb) return bb + "";
      if (Eb.allowArraysInMapKeys && Array.isArray(bb) && bb.flat().every((bb => ["string", "number", "boolean", "bigint"].includes(typeof bb)))) return bb.flat().toString();
      throw new Error("Invalid property type for record: " + typeof bb)
    }
    const bw = (bb, wb) => {
      let Mb = Yb().map(kb),
        eb = bb;
      void 0 !== wb && (bb = bb < 32 ? -((wb << 5) + bb) : (wb << 5) + bb, Mb.highByte = wb);
      let Hb = lb[bb];
      return Hb && (Hb.isShared || Kb) && ((lb.restoreStructures || (lb.restoreStructures = []))[bb] = Hb), lb[bb] = Mb, Mb.read = fb(Mb, eb), Mb.read()
    };
    sb[0] = () => {}, sb[0].noBuffer = !0, sb[66] = bb => {
      let wb = bb.length,
        Mb = BigInt(128 & bb[0] ? bb[0] - 256 : bb[0]);
      for (let eb = 1; eb < wb; eb++) Mb <<= BigInt(8), Mb += BigInt(bb[eb]);
      return Mb
    };
    let ww = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    sb[101] = () => {
      let bb = Yb();
      return (ww[bb[0]] || Error)(bb[1], {
        cause: bb[2]
      })
    }, sb[105] = bb => {
      if (!1 === Eb.structuredClone) throw new Error("Structured clone extension is disabled");
      let wb = Ub.getUint32(Vb - 4);
      Ob || (Ob = new Map);
      let Mb, eb = Hb[Vb];
      Mb = eb >= 144 && eb < 160 || 220 == eb || 221 == eb ? [] : {};
      let pb = {
        target: Mb
      };
      Ob.set(wb, pb);
      let gb = Yb();
      return pb.used ? Object.assign(Mb, gb) : (pb.target = gb, gb)
    }, sb[112] = bb => {
      if (!1 === Eb.structuredClone) throw new Error("Structured clone extension is disabled");
      let wb = Ub.getUint32(Vb - 4),
        Mb = Ob.get(wb);
      return Mb.used = !0, Mb.target
    }, sb[115] = () => new Set(Yb());
    const Mw = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((bb => bb + "Array"));
    let ew = "object" === typeof globalThis ? globalThis : window;
    sb[116] = bb => {
      let wb = bb[0],
        Mb = Mw[wb];
      if (!Mb) {
        if (16 === wb) {
          let wb = new ArrayBuffer(bb.length - 1);
          return new Uint8Array(wb).set(bb.subarray(1)), wb
        }
        throw new Error("Could not find typed array for code " + wb)
      }
      return new ew[Mb](Uint8Array.prototype.slice.call(bb, 1).buffer)
    }, sb[120] = () => {
      let bb = Yb();
      return new RegExp(bb[0], bb[1])
    };
    const Hw = [];

    function pw(bb) {
      jb && jb();
      let wb = pb,
        Mb = Vb,
        eb = Cb,
        gb = Fb,
        sb = Bb,
        mb = Lb,
        hb = tb,
        zb = Ob,
        Xb = Ib,
        xb = new Uint8Array(Hb.slice(0, pb)),
        rb = lb,
        Rb = lb.slice(0, lb.length),
        Db = Eb,
        cb = Kb,
        Yb = bb();
      return pb = wb, Vb = Mb, Cb = eb, Fb = gb, Bb = sb, Lb = mb, tb = hb, Ob = zb, Ib = Xb, Hb = xb, Kb = cb, (lb = rb).splice(0, lb.length, ...Rb), Eb = Db, Ub = new DataView(Hb.buffer, Hb.byteOffset, Hb.byteLength), Yb
    }

    function Vw() {
      Hb = null, Ob = null, lb = null
    }
    sb[98] = bb => {
      let wb = (bb[0] << 24) + (bb[1] << 16) + (bb[2] << 8) + bb[3],
        Mb = Vb;
      return Vb += wb - bb.length, Ib = Hw, (Ib = [Pb(), Pb()]).position0 = 0, Ib.position1 = 0, Ib.postBundlePosition = Vb, Vb = Mb, Yb()
    }, sb[255] = bb => 4 == bb.length ? new Date(1e3 * (16777216 * bb[0] + (bb[1] << 16) + (bb[2] << 8) + bb[3])) : 8 == bb.length ? new Date(((bb[0] << 22) + (bb[1] << 14) + (bb[2] << 6) + (bb[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & bb[3]) + 16777216 * bb[4] + (bb[5] << 16) + (bb[6] << 8) + bb[7])) : 12 == bb.length ? new Date(((bb[0] << 24) + (bb[1] << 16) + (bb[2] << 8) + bb[3]) / 1e6 + 1e3 * ((128 & bb[4] ? -281474976710656 : 0) + 1099511627776 * bb[6] + 4294967296 * bb[7] + 16777216 * bb[8] + (bb[9] << 16) + (bb[10] << 8) + bb[11])) : new Date("invalid");
    const gw = new Array(147);
    for (let pM = 0; pM < 256; pM++) gw[pM] = +("1e" + Math.floor(45.15 - .30103 * pM));
    const lw = Rb;
    var Lw = new Rb({
      useRecords: !1
    });
    const Iw = Lw.unpack,
      Ow = Lw.unpackMultiple,
      Uw = Lw.unpack,
      tw = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let Cw, Ew, Fw, Bw = new Float32Array(1),
      sw = new Uint8Array(Bw.buffer, 0, 4);

    function mw(bb) {
      Bw[0] = bb;
      let wb = gw[(127 & sw[3]) << 1 | sw[2] >> 7];
      return (wb * bb + (bb > 0 ? .5 : -.5) | 0) / wb
    }
    try {
      Cw = new TextEncoder
    } catch (HM) {}
    const hw = "undefined" !== typeof Buffer,
      zw = hw ? function(bb) {
        return Buffer.allocUnsafeSlow(bb)
      } : Uint8Array,
      Xw = hw ? Buffer : Uint8Array,
      xw = hw ? 4294967296 : 2144337920;
    let jw, Kw, rw, Rw, Dw, Yw = 0,
      Zw = null;
    const fw = /[\u0080-\uFFFF]/,
      Aw = Symbol("record-id");
    class Ww extends Rb {
      constructor(bb) {
        let wb, Mb, eb, Hb;
        super(bb), this.offset = 0;
        let pb = Xw.prototype.utf8Write ? function(bb, wb) {
            return jw.utf8Write(bb, wb, jw.byteLength - wb)
          } : !(!Cw || !Cw.encodeInto) && function(bb, wb) {
            return Cw.encodeInto(bb, jw.subarray(wb)).written
          },
          Vb = this;
        bb || (bb = {});
        let gb = bb && bb.sequential,
          lb = bb.structures || bb.saveStructures,
          Lb = bb.maxSharedStructures;
        if (null == Lb && (Lb = lb ? 32 : 0), Lb > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        bb.structuredClone && void 0 == bb.moreTypes && (this.moreTypes = !0);
        let Ib = bb.maxOwnStructures;
        null == Ib && (Ib = lb ? 32 : 64), this.structures || 0 == bb.useRecords || (this.structures = []);
        let Ob = Lb > 32 || Ib + Lb > 64,
          Ub = Lb + 64,
          tb = Lb + Ib + 64;
        if (tb > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let Cb = [],
          Eb = 0,
          Fb = 0;
        this.pack = this.encode = function(bb, pb) {
          if (jw || (jw = new zw(8192), rw = jw.dataView || (jw.dataView = new DataView(jw.buffer, 0, 8192)), Yw = 0), Rw = jw.length - 10, Rw - Yw < 2048 ? (jw = new zw(jw.length), rw = jw.dataView || (jw.dataView = new DataView(jw.buffer, 0, jw.length)), Rw = jw.length - 10, Yw = 0) : Yw = Yw + 7 & 2147483640, wb = Yw, pb & kw && (Yw += 255 & pb), Hb = Vb.structuredClone ? new Map : null, Vb.bundleStrings && "string" !== typeof bb ? (Zw = [], Zw.size = 1 / 0) : Zw = null, eb = Vb.structures, eb) {
            eb.uninitialized && (eb = Vb._mergeStructures(Vb.getStructures()));
            let bb = eb.sharedLength || 0;
            if (bb > Lb) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + eb.sharedLength);
            if (!eb.transitions) {
              eb.transitions = Object.create(null);
              for (let wb = 0; wb < bb; wb++) {
                let bb = eb[wb];
                if (!bb) continue;
                let Mb, Hb = eb.transitions;
                for (let wb = 0, eb = bb.length; wb < eb; wb++) {
                  let eb = bb[wb];
                  Mb = Hb[eb], Mb || (Mb = Hb[eb] = Object.create(null)), Hb = Mb
                }
                Hb[Aw] = wb + 64
              }
              this.lastNamedStructuresLength = bb
            }
            gb || (eb.nextId = bb + 64)
          }
          let lb;
          Mb && (Mb = !1);
          try {
            Vb.randomAccessStructure && bb && bb.constructor && bb.constructor === Object ? Rb(bb) : mb(bb);
            let Mb = Zw;
            if (Zw && vw(wb, mb, 0), Hb && Hb.idsToInsert) {
              let bb = Hb.idsToInsert.sort(((bb, wb) => bb.offset > wb.offset ? 1 : -1)),
                eb = bb.length,
                pb = -1;
              for (; Mb && eb > 0;) {
                let Hb = bb[--eb].offset + wb;
                Hb < Mb.stringsPosition + wb && -1 === pb && (pb = 0), Hb > Mb.position + wb ? pb >= 0 && (pb += 6) : (pb >= 0 && (rw.setUint32(Mb.position + wb, rw.getUint32(Mb.position + wb) + pb), pb = -1), Mb = Mb.previous, eb++)
              }
              pb >= 0 && Mb && rw.setUint32(Mb.position + wb, rw.getUint32(Mb.position + wb) + pb), Yw += 6 * bb.length, Yw > Rw && jb(Yw), Vb.offset = Yw;
              let gb = function(bb, wb) {
                let Mb, eb = 6 * wb.length,
                  Hb = bb.length - eb;
                for (; Mb = wb.pop();) {
                  let wb = Mb.offset,
                    pb = Mb.id;
                  bb.copyWithin(wb + eb, wb, Hb), eb -= 6;
                  let Vb = wb + eb;
                  bb[Vb++] = 214, bb[Vb++] = 105, bb[Vb++] = pb >> 24, bb[Vb++] = pb >> 16 & 255, bb[Vb++] = pb >> 8 & 255, bb[Vb++] = 255 & pb, Hb = wb
                }
                return bb
              }(jw.subarray(wb, Yw), bb);
              return Hb = null, gb
            }
            return Vb.offset = Yw, pb & ow ? (jw.start = wb, jw.end = Yw, jw) : jw.subarray(wb, Yw)
          } catch (HM) {
            throw lb = HM, HM
          } finally {
            if (eb && (Bb(), Mb && Vb.saveStructures)) {
              let Mb = eb.sharedLength || 0,
                Hb = jw.subarray(wb, Yw),
                gb = Gw(eb, Vb);
              if (!lb) return !1 === Vb.saveStructures(gb, gb.isCompatible) ? Vb.pack(bb, pb) : (Vb.lastNamedStructuresLength = Mb, jw.length > 1073741824 && (jw = null), Hb)
            }
            jw.length > 1073741824 && (jw = null), pb & Tw && (Yw = wb)
          }
        };
        const Bb = () => {
            Fb < 10 && Fb++;
            let bb = eb.sharedLength || 0;
            if (eb.length > bb && !gb && (eb.length = bb), Eb > 1e4) eb.transitions = null, Fb = 0, Eb = 0, Cb.length > 0 && (Cb = []);
            else if (Cb.length > 0 && !gb) {
              for (let bb = 0, wb = Cb.length; bb < wb; bb++) Cb[bb][Aw] = 0;
              Cb = []
            }
          },
          sb = bb => {
            var wb = bb.length;
            wb < 16 ? jw[Yw++] = 144 | wb : wb < 65536 ? (jw[Yw++] = 220, jw[Yw++] = wb >> 8, jw[Yw++] = 255 & wb) : (jw[Yw++] = 221, rw.setUint32(Yw, wb), Yw += 4);
            for (let Mb = 0; Mb < wb; Mb++) mb(bb[Mb])
          },
          mb = bb => {
            Yw > Rw && (jw = jb(Yw));
            var Mb, eb = typeof bb;
            if ("string" === eb) {
              let eb, Hb = bb.length;
              if (Zw && Hb >= 4 && Hb < 4096) {
                if ((Zw.size += Hb) > 21760) {
                  let bb, Mb, eb = (Zw[0] ? 3 * Zw[0].length + Zw[1].length : 0) + 10;
                  Yw + eb > Rw && (jw = jb(Yw + eb)), Zw.position ? (Mb = Zw, jw[Yw] = 200, Yw += 3, jw[Yw++] = 98, bb = Yw - wb, Yw += 4, vw(wb, mb, 0), rw.setUint16(bb + wb - 3, Yw - wb - bb)) : (jw[Yw++] = 214, jw[Yw++] = 98, bb = Yw - wb, Yw += 4), Zw = ["", ""], Zw.previous = Mb, Zw.size = 0, Zw.position = bb
                }
                let Mb = fw.test(bb);
                return Zw[Mb ? 0 : 1] += bb, jw[Yw++] = 193, void mb(Mb ? -Hb : Hb)
              }
              eb = Hb < 32 ? 1 : Hb < 256 ? 2 : Hb < 65536 ? 3 : 5;
              let Vb = 3 * Hb;
              if (Yw + Vb > Rw && (jw = jb(Yw + Vb)), Hb < 64 || !pb) {
                let wb, pb, Vb, gb = Yw + eb;
                for (wb = 0; wb < Hb; wb++) pb = bb.charCodeAt(wb), pb < 128 ? jw[gb++] = pb : pb < 2048 ? (jw[gb++] = pb >> 6 | 192, jw[gb++] = 63 & pb | 128) : 55296 === (64512 & pb) && 56320 === (64512 & (Vb = bb.charCodeAt(wb + 1))) ? (pb = 65536 + ((1023 & pb) << 10) + (1023 & Vb), wb++, jw[gb++] = pb >> 18 | 240, jw[gb++] = pb >> 12 & 63 | 128, jw[gb++] = pb >> 6 & 63 | 128, jw[gb++] = 63 & pb | 128) : (jw[gb++] = pb >> 12 | 224, jw[gb++] = pb >> 6 & 63 | 128, jw[gb++] = 63 & pb | 128);
                Mb = gb - Yw - eb
              } else Mb = pb(bb, Yw + eb);
              Mb < 32 ? jw[Yw++] = 160 | Mb : Mb < 256 ? (eb < 2 && jw.copyWithin(Yw + 2, Yw + 1, Yw + 1 + Mb), jw[Yw++] = 217, jw[Yw++] = Mb) : Mb < 65536 ? (eb < 3 && jw.copyWithin(Yw + 3, Yw + 2, Yw + 2 + Mb), jw[Yw++] = 218, jw[Yw++] = Mb >> 8, jw[Yw++] = 255 & Mb) : (eb < 5 && jw.copyWithin(Yw + 5, Yw + 3, Yw + 3 + Mb), jw[Yw++] = 219, rw.setUint32(Yw, Mb), Yw += 4), Yw += Mb
            } else if ("number" === eb)
              if (bb >>> 0 === bb) bb < 32 || bb < 128 && !1 === this.useRecords || bb < 64 && !this.randomAccessStructure ? jw[Yw++] = bb : bb < 256 ? (jw[Yw++] = 204, jw[Yw++] = bb) : bb < 65536 ? (jw[Yw++] = 205, jw[Yw++] = bb >> 8, jw[Yw++] = 255 & bb) : (jw[Yw++] = 206, rw.setUint32(Yw, bb), Yw += 4);
              else if ((bb | 0) === bb) bb >= -32 ? jw[Yw++] = 256 + bb : bb >= -128 ? (jw[Yw++] = 208, jw[Yw++] = bb + 256) : bb >= -32768 ? (jw[Yw++] = 209, rw.setInt16(Yw, bb), Yw += 2) : (jw[Yw++] = 210, rw.setInt32(Yw, bb), Yw += 4);
            else {
              let wb;
              if ((wb = this.useFloat32) > 0 && bb < 4294967296 && bb >= -2147483648) {
                let Mb;
                if (jw[Yw++] = 202, rw.setFloat32(Yw, bb), wb < 4 || ((Mb = bb * gw[(127 & jw[Yw]) << 1 | jw[Yw + 1] >> 7]) | 0) === Mb) return void(Yw += 4);
                Yw--
              }
              jw[Yw++] = 203, rw.setFloat64(Yw, bb), Yw += 8
            } else if ("object" === eb || "function" === eb)
              if (bb) {
                if (Hb) {
                  let Mb = Hb.get(bb);
                  if (Mb) {
                    if (!Mb.id) {
                      let bb = Hb.idsToInsert || (Hb.idsToInsert = []);
                      Mb.id = bb.push(Mb)
                    }
                    return jw[Yw++] = 214, jw[Yw++] = 112, rw.setUint32(Yw, Mb.id), void(Yw += 4)
                  }
                  Hb.set(bb, {
                    offset: Yw - wb
                  })
                }
                let pb = bb.constructor;
                if (pb === Object) xb(bb);
                else if (pb === Array) sb(bb);
                else if (pb === Map)
                  if (this.mapAsEmptyObject) jw[Yw++] = 128;
                  else {
                    (Mb = bb.size) < 16 ? jw[Yw++] = 128 | Mb : Mb < 65536 ? (jw[Yw++] = 222, jw[Yw++] = Mb >> 8, jw[Yw++] = 255 & Mb) : (jw[Yw++] = 223, rw.setUint32(Yw, Mb), Yw += 4);
                    for (let [wb, Mb] of bb) mb(wb), mb(Mb)
                  }
                else {
                  for (let wb = 0, Mb = Ew.length; wb < Mb; wb++) {
                    if (bb instanceof Fw[wb]) {
                      let Mb = Ew[wb];
                      if (Mb.write) {
                        Mb.type && (jw[Yw++] = 212, jw[Yw++] = Mb.type, jw[Yw++] = 0);
                        let wb = Mb.write.call(this, bb);
                        return void(wb === bb ? Array.isArray(bb) ? sb(bb) : xb(bb) : mb(wb))
                      }
                      let eb, Hb = jw,
                        pb = rw,
                        Vb = Yw;
                      jw = null;
                      try {
                        eb = Mb.pack.call(this, bb, (bb => (jw = Hb, Hb = null, Yw += bb, Yw > Rw && jb(Yw), {
                          target: jw,
                          targetView: rw,
                          position: Yw - bb
                        })), mb)
                      } finally {
                        Hb && (jw = Hb, rw = pb, Yw = Vb, Rw = jw.length - 10)
                      }
                      return void(eb && (eb.length + Yw > Rw && jb(eb.length + Yw), Yw = Nw(eb, jw, Yw, Mb.type)))
                    }
                  }
                  if (Array.isArray(bb)) sb(bb);
                  else {
                    if (bb.toJSON) {
                      const wb = bb.toJSON();
                      if (wb !== bb) return mb(wb)
                    }
                    if ("function" === eb) return mb(this.writeFunction && this.writeFunction(bb));
                    xb(bb)
                  }
                }
              } else jw[Yw++] = 192;
            else if ("boolean" === eb) jw[Yw++] = bb ? 195 : 194;
            else if ("bigint" === eb) {
              if (bb < BigInt(1) << BigInt(63) && bb >= -(BigInt(1) << BigInt(63))) jw[Yw++] = 211, rw.setBigInt64(Yw, bb);
              else if (bb < BigInt(1) << BigInt(64) && bb > 0) jw[Yw++] = 207, rw.setBigUint64(Yw, bb);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return mb(bb.toString());
                  if (this.useBigIntExtension && bb < BigInt(2) ** BigInt(1023) && bb > -(BigInt(2) ** BigInt(1023))) {
                    jw[Yw++] = 199, Yw++, jw[Yw++] = 66;
                    let wb, Mb = [];
                    do {
                      let eb = bb & BigInt(255);
                      wb = (eb & BigInt(128)) === (bb < BigInt(0) ? BigInt(128) : BigInt(0)), Mb.push(eb), bb >>= BigInt(8)
                    } while (bb !== BigInt(0) && bb !== BigInt(-1) || !wb);
                    jw[Yw - 2] = Mb.length;
                    for (let bb = Mb.length; bb > 0;) jw[Yw++] = Number(Mb[--bb]);
                    return
                  }
                  throw new RangeError(bb + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                jw[Yw++] = 203, rw.setFloat64(Yw, Number(bb))
              }
              Yw += 8
            } else {
              if ("undefined" !== eb) throw new Error("Unknown type: " + eb);
              this.encodeUndefinedAsNil ? jw[Yw++] = 192 : (jw[Yw++] = 212, jw[Yw++] = 0, jw[Yw++] = 0)
            }
          },
          hb = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? bb => {
            let wb;
            if (this.skipValues) {
              wb = [];
              for (let Mb in bb) "function" === typeof bb.hasOwnProperty && !bb.hasOwnProperty(Mb) || this.skipValues.includes(bb[Mb]) || wb.push(Mb)
            } else wb = Object.keys(bb);
            let Mb, eb = wb.length;
            if (eb < 16 ? jw[Yw++] = 128 | eb : eb < 65536 ? (jw[Yw++] = 222, jw[Yw++] = eb >> 8, jw[Yw++] = 255 & eb) : (jw[Yw++] = 223, rw.setUint32(Yw, eb), Yw += 4), this.coercibleKeyAsNumber)
              for (let Hb = 0; Hb < eb; Hb++) {
                Mb = wb[Hb];
                let eb = Number(Mb);
                mb(isNaN(eb) ? Mb : eb), mb(bb[Mb])
              } else
                for (let Hb = 0; Hb < eb; Hb++) mb(Mb = wb[Hb]), mb(bb[Mb])
          } : bb => {
            jw[Yw++] = 222;
            let Mb = Yw - wb;
            Yw += 2;
            let eb = 0;
            for (let wb in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(wb)) && (mb(wb), mb(bb[wb]), eb++);
            if (eb > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            jw[Mb++ + wb] = eb >> 8, jw[Mb + wb] = 255 & eb
          },
          zb = !1 === this.useRecords ? hb : bb.progressiveRecords && !Ob ? bb => {
            let Mb, Hb, pb = eb.transitions || (eb.transitions = Object.create(null)),
              Vb = Yw++ - wb;
            for (let gb in bb)
              if ("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(gb)) {
                if (Mb = pb[gb], Mb) pb = Mb;
                else {
                  let lb = Object.keys(bb),
                    Lb = pb;
                  pb = eb.transitions;
                  let Ib = 0;
                  for (let bb = 0, wb = lb.length; bb < wb; bb++) {
                    let wb = lb[bb];
                    Mb = pb[wb], Mb || (Mb = pb[wb] = Object.create(null), Ib++), pb = Mb
                  }
                  Vb + wb + 1 == Yw ? (Yw--, Kb(pb, lb, Ib)) : rb(pb, lb, Vb, Ib), Hb = !0, pb = Lb[gb]
                }
                mb(bb[gb])
              } if (!Hb) {
              let Mb = pb[Aw];
              Mb ? jw[Vb + wb] = Mb : rb(pb, Object.keys(bb), Vb, 0)
            }
          } : bb => {
            let wb, Mb = eb.transitions || (eb.transitions = Object.create(null)),
              Hb = 0;
            for (let eb in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(eb)) && (wb = Mb[eb], wb || (wb = Mb[eb] = Object.create(null), Hb++), Mb = wb);
            let pb = Mb[Aw];
            pb ? pb >= 96 && Ob ? (jw[Yw++] = 96 + (31 & (pb -= 96)), jw[Yw++] = pb >> 5) : jw[Yw++] = pb : Kb(Mb, Mb.__keys__ || Object.keys(bb), Hb);
            for (let eb in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(eb)) && mb(bb[eb])
          },
          Xb = "function" == typeof this.useRecords && this.useRecords,
          xb = Xb ? bb => {
            Xb(bb) ? zb(bb) : hb(bb)
          } : zb,
          jb = bb => {
            let Mb;
            if (bb > 16777216) {
              if (bb - wb > xw) throw new Error("Packed buffer would be larger than maximum buffer size");
              Mb = Math.min(xw, 4096 * Math.round(Math.max((bb - wb) * (bb > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else Mb = 1 + (Math.max(bb - wb << 2, jw.length - 1) >> 12) << 12;
            let eb = new zw(Mb);
            return rw = eb.dataView || (eb.dataView = new DataView(eb.buffer, 0, Mb)), bb = Math.min(bb, jw.length), jw.copy ? jw.copy(eb, 0, wb, bb) : eb.set(jw.slice(wb, bb)), Yw -= wb, wb = 0, Rw = eb.length - 10, jw = eb
          },
          Kb = (bb, wb, Hb) => {
            let pb = eb.nextId;
            pb || (pb = 64), pb < Ub && this.shouldShareStructure && !this.shouldShareStructure(wb) ? (pb = eb.nextOwnId, pb < tb || (pb = Ub), eb.nextOwnId = pb + 1) : (pb >= tb && (pb = Ub), eb.nextId = pb + 1);
            let Vb = wb.highByte = pb >= 96 && Ob ? pb - 96 >> 5 : -1;
            bb[Aw] = pb, bb.__keys__ = wb, eb[pb - 64] = wb, pb < Ub ? (wb.isShared = !0, eb.sharedLength = pb - 63, Mb = !0, Vb >= 0 ? (jw[Yw++] = 96 + (31 & pb), jw[Yw++] = Vb) : jw[Yw++] = pb) : (Vb >= 0 ? (jw[Yw++] = 213, jw[Yw++] = 114, jw[Yw++] = 96 + (31 & pb), jw[Yw++] = Vb) : (jw[Yw++] = 212, jw[Yw++] = 114, jw[Yw++] = pb), Hb && (Eb += Fb * Hb), Cb.length >= Ib && (Cb.shift()[Aw] = 0), Cb.push(bb), mb(wb))
          },
          rb = (bb, Mb, eb, Hb) => {
            let pb = jw,
              Vb = Yw,
              gb = Rw,
              lb = wb;
            jw = Kw, Yw = 0, wb = 0, jw || (Kw = jw = new zw(8192)), Rw = jw.length - 10, Kb(bb, Mb, Hb), Kw = jw;
            let Lb = Yw;
            if (jw = pb, Yw = Vb, Rw = gb, wb = lb, Lb > 1) {
              let bb = Yw + Lb - 1;
              bb > Rw && jb(bb);
              let Mb = eb + wb;
              jw.copyWithin(Mb + Lb, Mb + 1, Yw), jw.set(Kw.slice(0, Lb), Mb), Yw = bb
            } else jw[eb + wb] = Kw[0]
          },
          Rb = bb => {
            let Hb = Dw(bb, jw, wb, Yw, eb, jb, ((bb, wb, eb) => {
              if (eb) return Mb = !0;
              Yw = wb;
              let Hb = jw;
              return mb(bb), Bb(), Hb !== jw ? {
                position: Yw,
                targetView: rw,
                target: jw
              } : Yw
            }), this);
            if (0 === Hb) return xb(bb);
            Yw = Hb
          }
      }
      useBuffer(bb) {
        jw = bb, rw = jw.dataView || (jw.dataView = new DataView(jw.buffer, jw.byteOffset, jw.byteLength)), Yw = 0
      }
      set position(bb) {
        Yw = bb
      }
      get position() {
        return Yw
      }
      set buffer(bb) {
        jw = bb
      }
      get buffer() {
        return jw
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function Jw(bb, wb, Mb, eb) {
      let Hb = bb.byteLength;
      if (Hb + 1 < 256) {
        var {
          target: pb,
          position: Vb
        } = Mb(4 + Hb);
        pb[Vb++] = 199, pb[Vb++] = Hb + 1
      } else if (Hb + 1 < 65536) {
        var {
          target: pb,
          position: Vb
        } = Mb(5 + Hb);
        pb[Vb++] = 200, pb[Vb++] = Hb + 1 >> 8, pb[Vb++] = Hb + 1 & 255
      } else {
        var {
          target: pb,
          position: Vb,
          targetView: gb
        } = Mb(7 + Hb);
        pb[Vb++] = 201, gb.setUint32(Vb, Hb + 1), Vb += 4
      }
      pb[Vb++] = 116, pb[Vb++] = wb, bb.buffer || (bb = new Uint8Array(bb)), pb.set(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength), Vb)
    }

    function Sw(bb, wb) {
      let Mb = bb.byteLength;
      var eb, Hb;
      if (Mb < 256) {
        var {
          target: eb,
          position: Hb
        } = wb(Mb + 2);
        eb[Hb++] = 196, eb[Hb++] = Mb
      } else if (Mb < 65536) {
        var {
          target: eb,
          position: Hb
        } = wb(Mb + 3);
        eb[Hb++] = 197, eb[Hb++] = Mb >> 8, eb[Hb++] = 255 & Mb
      } else {
        var {
          target: eb,
          position: Hb,
          targetView: pb
        } = wb(Mb + 5);
        eb[Hb++] = 198, pb.setUint32(Hb, Mb), Hb += 4
      }
      eb.set(bb, Hb)
    }

    function Nw(bb, wb, Mb, eb) {
      let Hb = bb.length;
      switch (Hb) {
        case 1:
          wb[Mb++] = 212;
          break;
        case 2:
          wb[Mb++] = 213;
          break;
        case 4:
          wb[Mb++] = 214;
          break;
        case 8:
          wb[Mb++] = 215;
          break;
        case 16:
          wb[Mb++] = 216;
          break;
        default:
          Hb < 256 ? (wb[Mb++] = 199, wb[Mb++] = Hb) : Hb < 65536 ? (wb[Mb++] = 200, wb[Mb++] = Hb >> 8, wb[Mb++] = 255 & Hb) : (wb[Mb++] = 201, wb[Mb++] = Hb >> 24, wb[Mb++] = Hb >> 16 & 255, wb[Mb++] = Hb >> 8 & 255, wb[Mb++] = 255 & Hb)
      }
      return wb[Mb++] = eb, wb.set(bb, Mb), Mb += Hb
    }

    function vw(bb, wb, Mb) {
      if (Zw.length > 0) {
        rw.setUint32(Zw.position + bb, Yw + Mb - Zw.position - bb), Zw.stringsPosition = Yw - bb;
        let eb = Zw;
        Zw = null, wb(eb[0]), wb(eb[1])
      }
    }

    function Qw(bb) {
      if (bb.Class) {
        if (!bb.pack && !bb.write) throw new Error("Extension has no pack or write function");
        if (bb.pack && !bb.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        Fw.unshift(bb.Class), Ew.unshift(bb)
      }! function(bb) {
        bb.unpack ? sb[bb.type] = bb.unpack : sb[bb.type] = bb
      }(bb)
    }

    function Gw(bb, wb) {
      return bb.isCompatible = bb => {
        let Mb = !bb || (wb.lastNamedStructuresLength || 0) === bb.length;
        return Mb || wb._mergeStructures(bb), Mb
      }, bb
    }
    Fw = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, hb], Ew = [{
      pack(bb, wb, Mb) {
        let eb = bb.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === bb.getMilliseconds()) && eb >= 0 && eb < 4294967296) {
          let {
            target: bb,
            targetView: Mb,
            position: Hb
          } = wb(6);
          bb[Hb++] = 214, bb[Hb++] = 255, Mb.setUint32(Hb, eb)
        } else if (eb > 0 && eb < 4294967296) {
          let {
            target: Mb,
            targetView: Hb,
            position: pb
          } = wb(10);
          Mb[pb++] = 215, Mb[pb++] = 255, Hb.setUint32(pb, 4e6 * bb.getMilliseconds() + (eb / 1e3 / 4294967296 | 0)), Hb.setUint32(pb + 4, eb)
        } else if (isNaN(eb)) {
          if (this.onInvalidDate) return wb(0), Mb(this.onInvalidDate());
          let {
            target: bb,
            targetView: eb,
            position: Hb
          } = wb(3);
          bb[Hb++] = 212, bb[Hb++] = 255, bb[Hb++] = 255
        } else {
          let {
            target: Mb,
            targetView: Hb,
            position: pb
          } = wb(15);
          Mb[pb++] = 199, Mb[pb++] = 12, Mb[pb++] = 255, Hb.setUint32(pb, 1e6 * bb.getMilliseconds()), Hb.setBigInt64(pb + 4, BigInt(Math.floor(eb)))
        }
      }
    }, {
      pack(bb, wb, Mb) {
        if (this.setAsEmptyObject) return wb(0), Mb({});
        let eb = Array.from(bb),
          {
            target: Hb,
            position: pb
          } = wb(this.moreTypes ? 3 : 0);
        this.moreTypes && (Hb[pb++] = 212, Hb[pb++] = 115, Hb[pb++] = 0), Mb(eb)
      }
    }, {
      pack(bb, wb, Mb) {
        let {
          target: eb,
          position: Hb
        } = wb(this.moreTypes ? 3 : 0);
        this.moreTypes && (eb[Hb++] = 212, eb[Hb++] = 101, eb[Hb++] = 0), Mb([bb.name, bb.message, bb.cause])
      }
    }, {
      pack(bb, wb, Mb) {
        let {
          target: eb,
          position: Hb
        } = wb(this.moreTypes ? 3 : 0);
        this.moreTypes && (eb[Hb++] = 212, eb[Hb++] = 120, eb[Hb++] = 0), Mb([bb.source, bb.flags])
      }
    }, {
      pack(bb, wb) {
        this.moreTypes ? Jw(bb, 16, wb) : Sw(hw ? Buffer.from(bb) : new Uint8Array(bb), wb)
      }
    }, {
      pack(bb, wb) {
        let Mb = bb.constructor;
        Mb !== Xw && this.moreTypes ? Jw(bb, Mw.indexOf(Mb.name), wb) : Sw(bb, wb)
      }
    }, {
      pack(bb, wb) {
        let {
          target: Mb,
          position: eb
        } = wb(1);
        Mb[eb] = 193
      }
    }];
    let qw = new Ww({
      useRecords: !1
    });
    const aw = qw.pack,
      iw = qw.pack,
      uw = Ww,
      {
        NEVER: dw,
        ALWAYS: Pw,
        DECIMAL_ROUND: nw,
        DECIMAL_FIT: yw
      } = tw,
      ow = 512,
      Tw = 1024,
      kw = 2048;
    const bM = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!bb || "object" !== typeof bb) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const Mb = new Rb(wb);
        let eb;
        const Hb = bb => {
          let wb;
          eb && (bb = Buffer.concat([eb, bb]), eb = void 0);
          try {
            wb = Mb.unpackMultiple(bb)
          } catch (Hb) {
            if (!Hb.incomplete) throw Hb;
            eb = bb.slice(Hb.lastPosition), wb = Hb.values
          }
          return wb
        };
        return "function" === typeof bb[Symbol.iterator] ? function*() {
          for (const wb of bb) yield* Hb(wb)
        }() : "function" === typeof bb[Symbol.asyncIterator] ? async function*() {
          for await (const wb of bb) yield* Hb(wb)
        }(): void 0
      },
      wM = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (bb && "object" === typeof bb) {
          if ("function" === typeof bb[Symbol.iterator]) return function*(bb, wb) {
            const Mb = new Ww(wb);
            for (const eb of bb) yield Mb.pack(eb)
          }(bb, wb);
          if ("function" === typeof bb.then || "function" === typeof bb[Symbol.asyncIterator]) return async function*(bb, wb) {
            const Mb = new Ww(wb);
            for await (const eb of bb) yield Mb.pack(eb)
          }(bb, wb);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      MM = !1,
      eM = !0
  },
  10517: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      $changes: () => Eb,
      $childType: () => Fb,
      $decoder: () => Ib,
      $deleteByIndex: () => tb,
      $encoder: () => Lb,
      $filter: () => Ob,
      $getByIndex: () => Ub,
      $numFields: () => rb,
      $refId: () => gb,
      $track: () => lb,
      $values: () => zb,
      ArraySchema: () => ee,
      Callbacks: () => eH,
      ChangeTree: () => YM,
      CollectionSchema: () => Ve,
      Decoder: () => ne,
      Encoder: () => ie,
      FieldBuilder: () => Le,
      MapSchema: () => pe,
      Metadata: () => nw,
      OPERATION: () => Hb,
      Reflection: () => ke,
      ReflectionField: () => oe,
      ReflectionType: () => Te,
      Root: () => Ze,
      Schema: () => ce,
      SetSchema: () => ge,
      StateCallbackStrategy: () => MH,
      StateView: () => Se,
      StreamSchema: () => le,
      TypeContext: () => Gw,
      createPool: () => pH,
      decode: () => mw,
      decodeKeyValueOperation: () => oM,
      decodeSchemaOperation: () => yM,
      defineCustomTypes: () => xw,
      defineTypes: () => re,
      deprecated: () => je,
      dumpChanges: () => De,
      encode: () => ww,
      encodeArray: () => vM,
      encodeIndexedEntry: () => SM,
      encodeKeyValueOperation: () => NM,
      encodeMapEntry: () => JM,
      encodeSchemaOperation: () => WM,
      OC: () => Fe,
      fullStateOnly: () => he,
      getDecoderStateCallbacks: () => bH,
      getEncodeDescriptor: () => wM,
      getRawChangesCallback: () => wH,
      isBuilder: () => Ie,
      patchOnly: () => me,
      registerType: () => Xw,
      schema: () => Re,
      t: () => Ce,
      type: () => ze,
      unreliable: () => se,
      view: () => Be
    });
    const eb = 255;
    var Hb;

    function pb(bb) {
      Object.defineProperty(bb, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(bb) {
      bb[bb.ADD = 128] = "ADD", bb[bb.REPLACE = 0] = "REPLACE", bb[bb.DELETE = 64] = "DELETE", bb[bb.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", bb[bb.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", bb[bb.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", bb[bb.CLEAR = 10] = "CLEAR", bb[bb.REVERSE = 15] = "REVERSE", bb[bb.MOVE = 32] = "MOVE", bb[bb.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", bb[bb.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Hb || (Hb = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Vb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const bb = "colyseus.symbolRegistry",
        wb = Vb[bb] || (Vb[bb] = Object.create(null));
      Symbol.for = function(bb) {
        return wb[bb] || (wb[bb] = Symbol(bb))
      }, Symbol.keyFor = function(bb) {
        for (const Mb in wb)
          if (wb[Mb] === bb) return Mb
      }
    }
    const gb = Symbol.for("$refId"),
      lb = "~track",
      Lb = "~encoder",
      Ib = "~decoder",
      Ob = "~filter",
      Ub = "~getByIndex",
      tb = "~deleteByIndex",
      Cb = "~resyncPrune",
      Eb = Symbol.for("$changes"),
      Fb = Symbol.for("$childType"),
      Bb = Symbol.for("$proxyTarget"),
      sb = "~onEncodeEnd",
      mb = "~reset",
      hb = "~onDecodeEnd",
      zb = Symbol.for("$values"),
      Xb = "~builder",
      xb = "~descriptors",
      jb = "~__encodeDescriptor",
      Kb = "~encoders",
      rb = "~__numFields",
      Rb = "~__refTypeFieldIndexes",
      Db = "~__viewFieldIndexes",
      cb = "$__fieldIndexesByViewTag",
      Yb = "~__unreliableFieldIndexes",
      Zb = "~__patchOnlyFieldIndexes",
      fb = "~__fullSyncSkipIndexes",
      Ab = "~__fullStateOnlyFieldIndexes",
      Wb = "~__streamFieldIndexes",
      Jb = "~__streamPriorities";
    let Sb;
    try {
      Sb = new TextEncoder
    } catch (VH) {}
    const Nb = new ArrayBuffer(8),
      vb = new Int32Array(Nb),
      Qb = new Float32Array(Nb),
      Gb = new Float64Array(Nb),
      qb = new BigInt64Array(Nb),
      ab = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(bb, wb) {
        for (var Mb = 0, eb = 0, Hb = 0, pb = bb.length; Hb < pb; Hb++)(Mb = bb.charCodeAt(Hb)) < 128 ? eb += 1 : Mb < 2048 ? eb += 2 : Mb < 55296 || Mb >= 57344 ? eb += 3 : (Hb++, eb += 4);
        return eb
      };

    function ib(bb, wb, Mb) {
      for (var eb = 0, Hb = 0, pb = wb.length; Hb < pb; Hb++)(eb = wb.charCodeAt(Hb)) < 128 ? bb[Mb.offset++] = eb : eb < 2048 ? (bb[Mb.offset] = 192 | eb >> 6, bb[Mb.offset + 1] = 128 | 63 & eb, Mb.offset += 2) : eb < 55296 || eb >= 57344 ? (bb[Mb.offset] = 224 | eb >> 12, bb[Mb.offset + 1] = 128 | eb >> 6 & 63, bb[Mb.offset + 2] = 128 | 63 & eb, Mb.offset += 3) : (Hb++, eb = 65536 + ((1023 & eb) << 10 | 1023 & wb.charCodeAt(Hb)), bb[Mb.offset] = 240 | eb >> 18, bb[Mb.offset + 1] = 128 | eb >> 12 & 63, bb[Mb.offset + 2] = 128 | eb >> 6 & 63, bb[Mb.offset + 3] = 128 | 63 & eb, Mb.offset += 4)
    }

    function ub(bb, wb, Mb) {
      bb[Mb.offset++] = 255 & wb
    }

    function db(bb, wb, Mb) {
      bb[Mb.offset++] = 255 & wb, bb[Mb.offset++] = wb >> 8 & 255
    }

    function Pb(bb, wb, Mb) {
      bb[Mb.offset++] = 255 & wb, bb[Mb.offset++] = wb >> 8 & 255
    }

    function nb(bb, wb, Mb) {
      bb[Mb.offset++] = 255 & wb, bb[Mb.offset++] = wb >> 8 & 255, bb[Mb.offset++] = wb >> 16 & 255, bb[Mb.offset++] = wb >> 24 & 255
    }

    function yb(bb, wb, Mb) {
      const eb = wb >> 24,
        Hb = wb >> 16,
        pb = wb >> 8,
        Vb = wb;
      bb[Mb.offset++] = 255 & Vb, bb[Mb.offset++] = 255 & pb, bb[Mb.offset++] = 255 & Hb, bb[Mb.offset++] = 255 & eb
    }

    function ob(bb, wb, Mb) {
      const eb = Math.floor(wb / Math.pow(2, 32));
      yb(bb, wb >>> 0, Mb), yb(bb, eb, Mb)
    }

    function Tb(bb, wb, Mb) {
      const eb = wb / Math.pow(2, 32) | 0;
      yb(bb, wb >>> 0, Mb), yb(bb, eb, Mb)
    }

    function kb(bb, wb, Mb) {
      Qb[0] = wb, nb(bb, vb[0], Mb)
    }

    function bw(bb, wb, Mb) {
      Gb[0] = wb, nb(bb, vb[0], Mb), nb(bb, vb[1], Mb)
    }
    const ww = {
        int8: ub,
        uint8: function(bb, wb, Mb) {
          bb[Mb.offset++] = 255 & wb
        },
        int16: db,
        uint16: Pb,
        int32: nb,
        uint32: yb,
        int64: ob,
        uint64: Tb,
        bigint64: function(bb, wb, Mb) {
          qb[0] = BigInt.asIntN(64, wb), nb(bb, vb[0], Mb), nb(bb, vb[1], Mb)
        },
        biguint64: function(bb, wb, Mb) {
          qb[0] = BigInt.asIntN(64, wb), nb(bb, vb[0], Mb), nb(bb, vb[1], Mb)
        },
        float32: kb,
        float64: bw,
        boolean: function(bb, wb, Mb) {
          bb[Mb.offset++] = wb ? 1 : 0
        },
        string: function(bb, wb, Mb) {
          wb || (wb = "");
          let eb = ab(wb, "utf8"),
            Hb = 0;
          if (eb < 32) bb[Mb.offset++] = 160 | eb, Hb = 1;
          else if (eb < 256) bb[Mb.offset++] = 217, bb[Mb.offset++] = eb, Hb = 2;
          else if (eb < 65536) bb[Mb.offset++] = 218, Pb(bb, eb, Mb), Hb = 3;
          else {
            if (!(eb < 4294967296)) throw new Error("String too long");
            bb[Mb.offset++] = 219, yb(bb, eb, Mb), Hb = 5
          }
          return ib(bb, wb, Mb), Hb + eb
        },
        number: function bb(wb, Mb, eb) {
          return isNaN(Mb) ? bb(wb, 0, eb) : isFinite(Mb) ? Mb !== (0 | Mb) ? Math.abs(Mb) <= 34028235e31 && (Qb[0] = Mb, Math.abs(Math.abs(Qb[0]) - Math.abs(Mb)) < 1e-4) ? (wb[eb.offset++] = 202, kb(wb, Mb, eb), 5) : (wb[eb.offset++] = 203, bw(wb, Mb, eb), 9) : Mb >= 0 ? Mb < 128 ? (wb[eb.offset++] = 255 & Mb, 1) : Mb < 256 ? (wb[eb.offset++] = 204, wb[eb.offset++] = 255 & Mb, 2) : Mb < 65536 ? (wb[eb.offset++] = 205, Pb(wb, Mb, eb), 3) : Mb < 4294967296 ? (wb[eb.offset++] = 206, yb(wb, Mb, eb), 5) : (wb[eb.offset++] = 207, Tb(wb, Mb, eb), 9) : Mb >= -32 ? (wb[eb.offset++] = 224 | Mb + 32, 1) : Mb >= -128 ? (wb[eb.offset++] = 208, ub(wb, Mb, eb), 2) : Mb >= -32768 ? (wb[eb.offset++] = 209, db(wb, Mb, eb), 3) : Mb >= -2147483648 ? (wb[eb.offset++] = 210, nb(wb, Mb, eb), 5) : (wb[eb.offset++] = 211, ob(wb, Mb, eb), 9) : bb(wb, Mb > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, eb)
        },
        utf8Write: ib,
        utf8Length: ab
      },
      Mw = new ArrayBuffer(8),
      ew = new Int32Array(Mw),
      Hw = new Float32Array(Mw),
      pw = new Float64Array(Mw),
      Vw = new BigUint64Array(Mw),
      gw = new BigInt64Array(Mw);

    function lw(bb, wb, Mb) {
      Mb > bb.length - wb.offset && (Mb = bb.length - wb.offset);
      for (var eb = "", Hb = 0, pb = wb.offset, Vb = wb.offset + Mb; pb < Vb; pb++) {
        var gb = bb[pb];
        if (0 !== (128 & gb))
          if (192 !== (224 & gb))
            if (224 !== (240 & gb)) {
              if (240 !== (248 & gb)) {
                console.error("decode.utf8Read(): Invalid byte " + gb + " at offset " + pb + ". Skip to end of string: " + (wb.offset + Mb));
                break
              }(Hb = (7 & gb) << 18 | (63 & bb[++pb]) << 12 | (63 & bb[++pb]) << 6 | 63 & bb[++pb]) >= 65536 ? (Hb -= 65536, eb += String.fromCharCode(55296 + (Hb >>> 10), 56320 + (1023 & Hb))) : eb += String.fromCharCode(Hb)
            } else eb += String.fromCharCode((15 & gb) << 12 | (63 & bb[++pb]) << 6 | 63 & bb[++pb]);
        else eb += String.fromCharCode((31 & gb) << 6 | 63 & bb[++pb]);
        else eb += String.fromCharCode(gb)
      }
      return wb.offset += Mb, eb
    }

    function Lw(bb, wb) {
      return Iw(bb, wb) << 24 >> 24
    }

    function Iw(bb, wb) {
      return bb[wb.offset++]
    }

    function Ow(bb, wb) {
      return Uw(bb, wb) << 16 >> 16
    }

    function Uw(bb, wb) {
      return bb[wb.offset++] | bb[wb.offset++] << 8
    }

    function tw(bb, wb) {
      return bb[wb.offset++] | bb[wb.offset++] << 8 | bb[wb.offset++] << 16 | bb[wb.offset++] << 24
    }

    function Cw(bb, wb) {
      return tw(bb, wb) >>> 0
    }

    function Ew(bb, wb) {
      return ew[0] = tw(bb, wb), Hw[0]
    }

    function Fw(bb, wb) {
      return ew[0] = tw(bb, wb), ew[1] = tw(bb, wb), pw[0]
    }

    function Bw(bb, wb) {
      const Mb = Cw(bb, wb);
      return tw(bb, wb) * Math.pow(2, 32) + Mb
    }

    function sw(bb, wb) {
      const Mb = Cw(bb, wb);
      return Cw(bb, wb) * Math.pow(2, 32) + Mb
    }
    const mw = {
        utf8Read: lw,
        int8: Lw,
        uint8: Iw,
        int16: Ow,
        uint16: Uw,
        int32: tw,
        uint32: Cw,
        float32: Ew,
        float64: Fw,
        int64: Bw,
        uint64: sw,
        bigint64: function(bb, wb) {
          return ew[0] = tw(bb, wb), ew[1] = tw(bb, wb), gw[0]
        },
        biguint64: function(bb, wb) {
          return ew[0] = tw(bb, wb), ew[1] = tw(bb, wb), Vw[0]
        },
        boolean: function(bb, wb) {
          return Iw(bb, wb) > 0
        },
        string: function(bb, wb) {
          const Mb = bb[wb.offset++];
          let eb;
          return Mb < 192 ? eb = 31 & Mb : 217 === Mb ? eb = Iw(bb, wb) : 218 === Mb ? eb = Uw(bb, wb) : 219 === Mb && (eb = Cw(bb, wb)), lw(bb, wb, eb)
        },
        number: function(bb, wb) {
          const Mb = bb[wb.offset++];
          return Mb < 128 ? Mb : 202 === Mb ? Ew(bb, wb) : 203 === Mb ? Fw(bb, wb) : 204 === Mb ? Iw(bb, wb) : 205 === Mb ? Uw(bb, wb) : 206 === Mb ? Cw(bb, wb) : 207 === Mb ? sw(bb, wb) : 208 === Mb ? Lw(bb, wb) : 209 === Mb ? Ow(bb, wb) : 210 === Mb ? tw(bb, wb) : 211 === Mb ? Bw(bb, wb) : Mb > 223 ? -1 * (255 - Mb + 1) : void 0
        },
        stringCheck: function(bb, wb) {
          const Mb = bb[wb.offset];
          return Mb < 192 && Mb > 160 || 217 === Mb || 218 === Mb || 219 === Mb
        }
      },
      hw = {},
      zw = new Map;

    function Xw(bb, wb) {
      wb.constructor && (Object.prototype.hasOwnProperty.call(wb, "constructor") && null == wb.constructor[Symbol.metadata] && pb(wb.constructor), zw.set(wb.constructor, bb), hw[bb] = wb), wb.encode && (ww[bb] = wb.encode), wb.decode && (mw[bb] = wb.decode)
    }

    function xw(bb) {
      for (const wb in bb) Xw(wb, bb[wb]);
      return bb => ze(bb)
    }
    const jw = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function Kw() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function rw(bb) {
      return bb._stream ??= Kw()
    }

    function Rw(bb, wb, Mb) {
      0 === wb.activeViews.size && rw(bb).broadcastPending.add(Mb)
    }

    function Dw(bb, wb, Mb, eb) {
      const pb = bb._stream;
      if (void 0 === pb) return !0;
      let Vb = !1;
      return pb.broadcastPending.delete(eb) ? Vb = !0 : pb.sentBroadcast.delete(eb) && pb.broadcastDeletes.add(eb), wb.forEachActiveView((bb => {
        const wb = pb.pendingByView.get(bb.id);
        if (wb?.has(eb)) return wb.delete(eb), void(Vb = !0);
        const gb = pb.sentByView.get(bb.id);
        if (gb?.has(eb)) {
          gb.delete(eb);
          let wb = bb.changes.get(Mb);
          void 0 === wb && (wb = new Map, bb.changes.set(Mb, wb)), wb.set(eb, Hb.DELETE)
        }
      })), Vb
    }

    function Yw(bb, wb) {
      const Mb = bb._stream?.pendingByView;
      if (void 0 === Mb) return !1;
      for (const [eb, Hb] of Mb)
        if (Hb.size > 0 && void 0 !== wb.activeViews.get(eb)?.deref()) return !0;
      return !1
    }

    function Zw(bb) {
      const wb = bb._stream;
      return void 0 !== wb && (wb.broadcastPending.size > 0 || wb.broadcastDeletes.size > 0)
    }

    function fw(bb, wb, Mb) {
      const eb = rw(bb);
      let Hb = eb.pendingByView.get(wb);
      void 0 === Hb && (Hb = new Set, eb.pendingByView.set(wb, Hb)), Hb.add(Mb)
    }

    function Aw(bb, wb) {
      const Mb = bb._stream;
      void 0 !== Mb && (Mb.pendingByView.delete(wb), Mb.sentByView.delete(wb), Mb.priorityByView?.delete(wb))
    }
    const Ww = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function Jw(bb) {
      if (null == bb || "object" !== typeof bb) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: wb,
        max: Mb
      } = bb;
      if ("number" !== typeof wb || "number" !== typeof Mb || !(Mb > wb) || !Number.isFinite(wb) || !Number.isFinite(Mb)) throw new Error(`t.quantized(): require finite min < max (got min=${wb}, max=${Mb}).`);
      const eb = bb.bits ?? 16;
      if (8 !== eb && 16 !== eb && 32 !== eb) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${eb}).`);
      const Hb = bb.mode ?? "clamp";
      if ("clamp" !== Hb && "wrap" !== Hb) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Hb)}).`);
      const pb = "wrap" === Hb,
        Vb = Math.pow(2, eb);
      return {
        min: wb,
        max: Mb,
        bits: eb,
        wrap: pb,
        wire: Ww[eb],
        range: Mb - wb,
        span: pb ? Vb : wb === -Mb ? Vb - 2 : Vb - 1
      }
    }

    function Sw(bb) {
      return null !== bb && "object" === typeof bb && void 0 !== bb.quantized
    }

    function Nw(bb, wb) {
      if (bb.wrap) {
        if (!Number.isFinite(wb)) return 0;
        const Mb = bb.range;
        let eb = (wb - bb.min) % Mb;
        eb < 0 && (eb += Mb);
        const Hb = bb.span;
        return Math.floor(eb / Mb * Hb + .5) % Hb
      }
      if (wb !== wb) return 0;
      const Mb = wb < bb.min ? bb.min : wb > bb.max ? bb.max : wb;
      return Math.floor((Mb - bb.min) / bb.range * bb.span + .5)
    }

    function vw(bb, wb) {
      return bb.min + wb / bb.span * bb.range
    }

    function Qw(bb) {
      const wb = ww[bb.wire];
      return (Mb, eb, Hb) => wb(Mb, Nw(bb, eb), Hb)
    }
    class Gw {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(bb) {
        const wb = Object.getPrototypeOf(bb);
        if (wb !== ce) {
          let Mb = Gw.inheritedTypes.get(wb);
          Mb || (Mb = new Set, Gw.inheritedTypes.set(wb, Mb)), Mb.add(bb)
        }
      }
      static cache(bb) {
        let wb = Gw.cachedContexts.get(bb);
        return wb || (wb = new Gw(bb), Gw.cachedContexts.set(bb, wb)), wb
      }
      constructor(bb) {
        bb && this.discoverTypes(bb)
      }
      has(bb) {
        return this.schemas.has(bb)
      }
      get(bb) {
        return this.types[bb]
      }
      add(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(bb) && (this.types[wb] = bb, null == bb[Symbol.metadata] && nw.initialize(bb), this.schemas.set(bb, wb), !0)
      }
      getTypeId(bb) {
        return this.schemas.get(bb)
      }
      discoverTypes(bb) {
        if (!this.add(bb)) return;
        Gw.inheritedTypes.get(bb)?.forEach((bb => {
          this.discoverTypes(bb)
        }));
        let wb = bb;
        for (;
          (wb = Object.getPrototypeOf(wb)) && wb !== ce && wb !== Function.prototype;) this.discoverTypes(wb);
        const Mb = bb[Symbol.metadata];
        (Mb[Db] || Mb[Wb]) && (this.hasFilters = !0);
        for (const eb in Mb) {
          const bb = Mb[eb].type;
          if ("string" !== typeof bb && !Sw(bb))
            if ("function" === typeof bb) this.discoverTypes(bb);
            else {
              const wb = Object.values(bb)[0];
              if ("string" === typeof wb) continue;
              this.discoverTypes(wb)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function qw(bb) {
      const wb = iw(bb);
      return wb ? {
        complexTypeKlass: hw[wb],
        childType: bb[wb]
      } : {
        complexTypeKlass: !1,
        childType: bb
      }
    }

    function aw(bb, wb) {
      const Mb = uw(bb),
        eb = iw(Mb),
        Hb = eb && iw(Mb[eb]);
      if (Hb) throw new Error(`${wb?`${wb}: `:""}@colyseus/schema: nested collections are not supported ("${eb}" of "${Hb}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Hb} in a Schema class.`);
      return Mb
    }

    function iw(bb) {
      return "object" === typeof bb && null !== bb ? Object.keys(bb).find((bb => void 0 !== hw[bb])) : void 0
    }

    function uw(bb) {
      if ("object" !== typeof bb || null === bb) return bb;
      if (Array.isArray(bb)) return {
        array: uw(bb[0])
      };
      const wb = function(bb) {
        const wb = Object.keys(bb),
          Mb = wb.filter((bb => /\d+/.test(bb)));
        if (Mb.length > 0 && Mb.length === wb.length / 2 && bb[bb[Mb[0]]] == Mb[0]) return "number";
        if (wb.length > 0 && wb.every((wb => bb[wb] === wb))) return "string"
      }(bb);
      if (wb) return wb;
      if (Sw(bb)) return "string" === typeof bb.quantized.wire ? bb : {
        quantized: Jw(bb.quantized)
      };
      if (void 0 !== bb.type) return uw(bb.type);
      const Mb = iw(bb);
      return Mb && (bb[Mb] = uw(bb[Mb])), bb
    }
    const dw = [Rb, Yb, Zb, fb, Ab, Wb, Kb];

    function Pw(bb, wb, Mb) {
      bb[wb] || Object.defineProperty(bb, wb, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), bb[wb].push(Mb)
    }
    const nw = {
        addField(bb, wb, Mb, eb, Hb) {
          if (wb >= 63) throw new Error(`Can't define field '${Mb}'.\nSchema instances may only have up to 63 fields.`);
          bb[wb] = Object.assign(bb[wb] || {}, {
            type: eb,
            index: wb,
            name: Mb
          }), Object.defineProperty(bb, xb, {
            value: bb[xb] || {},
            enumerable: !1,
            configurable: !0
          }), bb[xb][Mb] = Hb || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(bb, rb, {
            value: wb,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(bb, Mb, {
            value: wb,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof bb[wb].type || Sw(bb[wb].type) || (void 0 === bb[Rb] && Object.defineProperty(bb, Rb, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), bb[Rb].push(wb));
          const pb = bb[wb].type;
          if (pb && "object" === typeof pb && void 0 !== pb.stream) {
            if (void 0 !== pb.array) throw new Error(jw);
            bb[wb].stream = !0, bb[Wb] || Object.defineProperty(bb, Wb, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), bb[Wb].includes(wb) || bb[Wb].push(wb);
            const Hb = eb?.priority;
            "function" === typeof Hb && nw.setStreamPriority(bb, Mb, Hb)
          }
        },
        setTag(bb, wb, Mb) {
          const eb = bb[wb];
          if (bb[eb].tag = Mb, bb[Db] || (Object.defineProperty(bb, Db, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(bb, cb, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), bb[Db].push(eb), Mb < 0) bb[cb][Mb] || (bb[cb][Mb] = []), bb[cb][Mb].push(eb);
          else
            for (let Hb = Mb; Hb > 0; Hb &= Hb - 1) {
              const wb = Hb & -Hb;
              bb[cb][wb] || (bb[cb][wb] = []), bb[cb][wb].push(eb)
            }
        },
        setUnreliable(bb, wb) {
          const Mb = bb[wb];
          if ("string" !== typeof bb[Mb].type) throw new Error(`@unreliable cannot be applied to ref-type field "${wb}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          bb[Mb].unreliable = !0, bb[Yb] || Object.defineProperty(bb, Yb, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[Yb].push(Mb)
        },
        setPatchOnly(bb, wb) {
          const Mb = bb[wb];
          if (bb[Mb].fullStateOnly) throw new Error(`field "${wb}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          bb[Mb].patchOnly = !0, Pw(bb, Zb, Mb), Pw(bb, fb, Mb)
        },
        setDeprecated(bb, wb) {
          const Mb = bb[wb];
          bb[Mb].deprecated = !0, Pw(bb, fb, Mb), Object.defineProperty(bb, Mb, {
            value: bb[Mb],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(bb, wb) {
          const Mb = bb[wb];
          if (bb[Mb].patchOnly) throw new Error(`field "${wb}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          bb[Mb].fullStateOnly = !0, Pw(bb, Ab, Mb)
        },
        setStream(bb, wb) {
          const Mb = bb[wb];
          bb[Mb].stream = !0, bb[Wb] || Object.defineProperty(bb, Wb, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[Wb].push(Mb)
        },
        setStreamPriority(bb, wb, Mb) {
          const eb = bb[wb];
          bb[Jb] || Object.defineProperty(bb, Jb, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[Jb][eb] = Mb
        },
        getStreamPriority: (bb, wb) => bb?.[Jb]?.[wb],
        defineField(bb, wb, Mb, eb, Hb) {
          const pb = aw(Hb, `${bb.name}.${eb}`),
            {
              complexTypeKlass: Vb,
              childType: gb
            } = qw(pb);
          nw.addField(wb, Mb, eb, pb, xe(eb, Mb, gb, Vb)), wb[xb][eb] && Object.defineProperty(bb.prototype, eb, wb[xb][eb]), ("string" === typeof pb || Sw(pb)) && (wb[Kb] || Object.defineProperty(wb, Kb, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), wb[Kb][Mb] = "string" === typeof pb ? ww[pb] : Qw(pb.quantized))
        },
        setFields(bb, wb) {
          const Mb = bb.prototype.constructor;
          Gw.register(Mb);
          const eb = Object.getPrototypeOf(Mb),
            Hb = eb && eb[Symbol.metadata],
            pb = nw.initialize(Mb);
          Mb[lb] || (Mb[lb] = ce[lb]), Mb[Lb] || (Mb[Lb] = ce[Lb]), Mb[Ib] || (Mb[Ib] = ce[Ib]), Mb.prototype.toJSON || (Mb.prototype.toJSON = ce.prototype.toJSON);
          let Vb = pb[rb] ?? (Hb && Hb[rb]) ?? -1;
          Vb++, pb[Kb] || Object.defineProperty(pb, Kb, {
            value: Hb?.[Kb] ? [...Hb[Kb]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const gb in wb) {
            if (void 0 !== pb[gb]) throw new Error(`@colyseus/schema: Duplicate '${gb}' definition on '${Mb.name||"(anonymous)"}'.`);
            nw.defineField(Mb, pb, Vb, gb, wb[gb]), Vb++
          }
          return bb
        },
        isDeprecated: (bb, wb) => !0 === bb[wb].deprecated,
        initialize(bb) {
          const wb = Object.getPrototypeOf(bb),
            Mb = wb[Symbol.metadata];
          let eb = bb[Symbol.metadata] ?? Object.create(null);
          if (wb !== ce && eb === Mb && (eb = Object.create(null), Mb)) {
            Object.setPrototypeOf(eb, Mb), Object.defineProperty(eb, rb, {
              value: Mb[rb],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== Mb[Db] && (Object.defineProperty(eb, Db, {
              value: [...Mb[Db]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(eb, cb, {
              value: {
                ...Mb[cb]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const bb of dw) {
              const wb = Mb[bb];
              void 0 !== wb && Object.defineProperty(eb, bb, {
                value: [...wb],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(eb, xb, {
              value: {
                ...Mb[xb]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(bb, Symbol.metadata, {
            value: eb,
            writable: !1,
            configurable: !0
          }), eb
        },
        isValidInstance: bb => bb.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(bb.constructor[Symbol.metadata], rb),
        getFields(bb) {
          const wb = bb[Symbol.metadata],
            Mb = {};
          for (let eb = 0; eb <= wb[rb]; eb++) Mb[wb[eb].name] = wb[eb].type;
          return Mb
        },
        hasViewTagAtIndex: (bb, wb) => bb?.[Db]?.includes(wb),
        hasUnreliableAtIndex: (bb, wb) => bb?.[Yb]?.includes(wb),
        hasPatchOnlyAtIndex: (bb, wb) => bb?.[Zb]?.includes(wb),
        hasFullStateOnlyAtIndex: (bb, wb) => bb?.[Ab]?.includes(wb),
        hasStreamAtIndex: (bb, wb) => bb?.[Wb]?.includes(wb)
      },
      yw = (bb, wb, Mb) => bb(wb, Mb);
    class ow {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(bb) {
        this.ops = new Uint8Array(Math.max(bb + 1, 1))
      }
      record(bb, wb) {
        const Mb = this.ops[bb];
        0 === Mb ? this.ops[bb] = wb : (Mb === Hb.DELETE || Mb === Hb.ADD && wb === Hb.DELETE_AND_ADD) && (this.ops[bb] = Hb.DELETE_AND_ADD), bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      recordDelete(bb, wb) {
        this.ops[bb] = wb, bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      recordRaw(bb, wb) {
        this.record(bb, wb)
      }
      operationAt(bb) {
        const wb = this.ops[bb];
        return 0 === wb ? void 0 : wb
      }
      setOperationAt(bb, wb) {
        this.ops[bb] = wb
      }
      forEach(bb) {
        this.forEachWithCtx(bb, yw)
      }
      forEachWithCtx(bb, wb) {
        let Mb = this.dirtyLow,
          eb = this.dirtyHigh;
        const Hb = this.ops;
        for (; 0 !== Mb;) {
          const eb = Mb & -Mb,
            pb = 31 - Math.clz32(eb);
          Mb ^= eb, wb(bb, pb, Hb[pb])
        }
        for (; 0 !== eb;) {
          const Mb = eb & -eb,
            pb = 31 - Math.clz32(Mb) + 32;
          eb ^= Mb, wb(bb, pb, Hb[pb])
        }
      }
      size() {
        return kw(this.dirtyLow) + kw(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Tw {
      JC = new Map;
      pureOps = [];
      record(bb, wb) {
        const Mb = this.JC.get(bb);
        void 0 === Mb ? this.JC.set(bb, wb) : (Mb === Hb.DELETE || Mb === Hb.ADD && wb === Hb.DELETE_AND_ADD) && this.JC.set(bb, Hb.DELETE_AND_ADD)
      }
      recordDelete(bb, wb) {
        this.JC.set(bb, wb)
      }
      recordRaw(bb, wb) {
        this.JC.set(bb, wb)
      }
      recordPure(bb) {
        this.pureOps.push([this.JC.size, bb])
      }
      operationAt(bb) {
        return this.JC.get(bb)
      }
      setOperationAt(bb, wb) {
        this.JC.has(bb) && this.JC.set(bb, wb)
      }
      forEach(bb) {
        this.forEachWithCtx(bb, yw)
      }
      forEachWithCtx(bb, wb) {
        const Mb = this.pureOps;
        if (Mb.length > 0) {
          let eb = 0,
            Hb = 0;
          for (const [pb, Vb] of this.JC) {
            for (; eb < Mb.length && Mb[eb][0] <= Hb;) {
              const Hb = Mb[eb++][1];
              wb(bb, -Hb, Hb)
            }
            wb(bb, pb, Vb), Hb++
          }
          for (; eb < Mb.length;) {
            const Hb = Mb[eb++][1];
            wb(bb, -Hb, Hb)
          }
        } else
          for (const [eb, Hb] of this.JC) wb(bb, eb, Hb)
      }
      size() {
        return this.JC.size + this.pureOps.length
      }
      has() {
        return this.JC.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.JC.clear(), this.pureOps.length = 0
      }
      shift(bb) {
        const wb = new Map;
        for (const [Mb, eb] of this.JC) wb.set(Mb + bb, eb);
        this.JC = wb
      }
    }

    function kw(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }

    function bM(bb) {
      if (void 0 === bb) return 0;
      let wb = 0;
      for (let Mb = 0, eb = bb.length; Mb < eb; Mb++) {
        const eb = bb[Mb];
        eb < 32 && (wb |= 1 << eb)
      }
      return wb
    }

    function wM(bb) {
      const wb = bb.constructor;
      if (Object.prototype.hasOwnProperty.call(wb, jb)) return wb[jb];
      const Mb = wb[Symbol.metadata],
        eb = nw.isValidInstance(bb),
        Hb = (Mb?.[Db]?.length ?? 0) > 0,
        pb = function(bb) {
          const wb = [],
            Mb = [],
            eb = [],
            Hb = [],
            pb = bb?.[rb];
          if (void 0 === pb) return {
            names: wb,
            types: Mb,
            tags: eb,
            encoders: Hb
          };
          const Vb = bb[Kb];
          for (let gb = 0; gb <= pb; gb++) {
            const pb = bb[gb];
            void 0 !== pb ? (wb[gb] = pb.name, Mb[gb] = pb.type, eb[gb] = pb.tag, Hb[gb] = Vb?.[gb]) : (wb[gb] = void 0, Mb[gb] = void 0, eb[gb] = void 0, Hb[gb] = void 0)
          }
          return {
            names: wb,
            types: Mb,
            tags: eb,
            encoders: Hb
          }
        }(Mb),
        Vb = eb && !Hb ? void 0 : wb[Ob],
        gb = {
          encoder: wb[Lb],
          filter: Vb,
          metadata: Mb,
          isSchema: eb,
          filterBitmask: eb ? bM(Mb?.[Db]) : 0,
          hasAnyFullStateOnly: (Mb?.[Ab]?.length ?? 0) > 0,
          hasAnyUnreliable: (Mb?.[Yb]?.length ?? 0) > 0,
          hasAnyStream: (Mb?.[Wb]?.length ?? 0) > 0,
          hasAnyView: Hb,
          fullStateOnlyBitmask: bM(Mb?.[Ab]),
          unreliableBitmask: bM(Mb?.[Yb]),
          streamBitmask: bM(Mb?.[Wb]),
          names: pb.names,
          types: pb.types,
          tags: pb.tags,
          encoders: pb.encoders
        };
      return Object.defineProperty(wb, jb, {
        value: gb,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), gb
    }

    function MM(bb, wb) {
      if (void 0 !== bb.parentRef && wb(bb.parentRef, bb._parentIndex)) return !0;
      for (let Mb = bb.extraParents; void 0 !== Mb; Mb = Mb.next)
        if (wb(Mb.ref, Mb.index)) return !0;
      return !1
    }
    const eM = (bb, wb) => {
        bb.isFieldUnreliable(wb) ? bb.ensureUnreliableRecorder().record(wb, Hb.ADD) : bb.record(wb, Hb.ADD)
      },
      HM = (bb, wb) => bb(wb);

    function pM(bb, wb, Mb) {
      const eb = bb.refTarget;
      if (void 0 !== eb[Fb]) {
        if (bb.isPatchOnly) return;
        if (Array.isArray(eb.items)) {
          const bb = eb.items;
          for (let eb = 0, Hb = bb.length; eb < Hb; eb++) void 0 !== bb[eb] && Mb(wb, eb)
        } else if (void 0 !== eb.journal)
          for (const [bb, Hb] of eb.journal.keyByIndex) eb.$items.has(Hb) && Mb(wb, bb);
        else if (void 0 !== eb.$items)
          for (const bb of eb.$items.keys()) Mb(wb, bb)
      } else {
        const Hb = bb.metadata;
        if (!Hb) return;
        const pb = Hb[rb] ?? -1,
          Vb = Hb[fb],
          gb = bb.encDescriptor.names;
        for (let bb = 0; bb <= pb; bb++) {
          const Hb = gb[bb];
          if (void 0 === Hb) continue;
          if (Vb && Vb.includes(bb)) continue;
          const pb = eb[Hb];
          void 0 !== pb && null !== pb && Mb(wb, bb)
        }
      }
    }

    function VM(bb, wb, Mb, eb) {
      ! function(bb, wb, Mb) {
        if (!wb) return;
        const eb = wb[Eb],
          Hb = !eb._isSchema;
        let pb;
        Hb ? (wb = eb.parent, Mb = eb.parentIndex, pb = wb?.[Eb].metadata) : pb = eb.metadata;
        const Vb = (pb?.[Zb]?.includes(Mb) ? KM : 0) | (pb?.[Ab]?.includes(Mb) ? rM : 0),
          gb = eb.flags & cM | Vb,
          lb = bb.flags;
        bb.flags = lb | gb;
        gb & ~lb & rM && (bb.reset(), bb.unreliableRecorder?.reset());
        const Lb = bb.root?.types;
        if (!Lb?.hasFilters) return;
        const Ib = pb?.[Db]?.includes(Mb) ?? !1,
          Ob = pb?.[Wb]?.includes(Mb) ?? !1,
          Ub = eb.isFiltered || Ib || Ob;
        if (bb.isFiltered = Ub, Ob && !Hb) {
          bb.isStreamCollection = !0;
          const wb = rw(bb.ref);
          if (void 0 === wb.priority) {
            const bb = nw.getStreamPriority(pb, Mb);
            void 0 !== bb && (wb.priority = bb)
          }
          bb.root?.registerStream(bb.ref)
        }
        if (Ub) {
          const wb = lM(bb);
          bb.isVisibilitySharedWithParent = eb.isFiltered && wb && !Ob && (!Ib || Hb && pb[Mb].tag !== Ee)
        }
      }(bb, wb, Mb), bb.isFullStateOnly || (bb.has() && bb.root?.enqueueChangeTree(bb), bb.unreliableRecorder?.has() && bb.root?.enqueueUnreliable(bb), bb.has() || bb.unreliableRecorder?.has() || bb.root?.enqueueChangeTree(bb))
    }

    function gM(bb) {
      const wb = bb.pendingFilterRefresh;
      for (let Mb = 0; Mb < wb.length; Mb++) {
        const bb = wb[Mb];
        0 !== (bb.flags & DM) && LM(bb)
      }
      wb.length = 0
    }

    function lM(bb) {
      return bb._isSchema || "string" !== typeof bb.refTarget[Fb]
    }

    function LM(bb) {
      bb.flags &= ~DM;
      const wb = bb.root;
      if (void 0 === wb || void 0 === bb.parentRef) return;
      const Mb = lM(bb);
      let eb = CM(bb, bb.parentRef, bb._parentIndex, Mb);
      for (let pb = bb.extraParents; void 0 !== pb && eb !== tM; pb = pb.next) eb |= CM(bb, pb.ref, pb.index, Mb);
      if (0 === eb) return;
      bb.isVisibilitySharedWithParent = 0 !== (eb & UM);
      const Hb = 0 === (eb & OM);
      Hb !== bb.isFiltered && (bb.isFiltered = Hb, Hb || bb.isFullStateOnly || (bb.forEachLiveWithCtx(bb, eM), bb.has() && wb.enqueueChangeTree(bb), bb.unreliableRecorder?.has() && wb.enqueueUnreliable(bb)), bb.forEachChildWithCtx(bb, EM))
    }
    const IM = 1,
      OM = 2,
      UM = 4,
      tM = IM | OM | UM;

    function CM(bb, wb, Mb, eb) {
      const Hb = wb[Eb];
      if (Hb.root !== bb.root || ! function(bb, wb, Mb) {
          const eb = wb.refTarget;
          if (wb.isArray) {
            const wb = eb.items,
              Hb = wb[Mb];
            if (void 0 !== Hb && Hb[Eb] === bb) return !0;
            for (let Mb = 0, eb = wb.length; Mb < eb; Mb++) {
              const eb = wb[Mb];
              if (void 0 !== eb && eb[Eb] === bb) return !0
            }
            return !1
          }
          const Hb = wb.getValue(Mb);
          return void 0 !== Hb && Hb[Eb] === bb
        }(bb, Hb, Mb)) return 0;
      Hb.flags & DM && LM(Hb);
      let pb = IM;
      if (Hb._isSchema) {
        void 0 !== Hb.encDescriptor.tags[Mb] || Hb.isFieldStream(Mb) || (Hb.isFiltered ? eb && (pb |= UM) : pb |= OM)
      } else if (Hb.isFiltered) {
        if (eb && !Hb.isStreamCollection) {
          const bb = Hb.parent?.[Eb];
          (bb?._isSchema ? bb.encDescriptor.tags[Hb.parentIndex] : void 0) !== Ee && (pb |= UM)
        }
      } else pb |= OM;
      return pb
    }
    const EM = (bb, wb, Mb) => {
      LM(wb)
    };

    function FM(bb, wb, Mb, eb) {
      if (bb.addParent(wb, eb), !Mb) return;
      const Hb = Mb.add(bb);
      Mb !== bb.root && (bb.root = Mb, VM(bb, wb, eb));
      const pb = wb?.[Eb];
      if (void 0 !== pb && void 0 !== pb.subscribedViews && void 0 !== wb[Fb] && function(bb, wb, Mb, eb) {
          const Hb = bb.subscribedViews;
          if (void 0 === Hb) return;
          const pb = bb.isStreamCollection,
            Vb = pb ? bb.ref : void 0,
            gb = pb ? void 0 : Mb[Eb];
          for (let lb = 0, Lb = Hb.length; lb < Lb; lb++) {
            let bb = Hb[lb];
            for (; 0 !== bb;) {
              const Mb = bb & -bb;
              bb ^= Mb;
              const Lb = 32 * lb + (31 - Math.clz32(Mb)),
                Ib = eb.activeViews.get(Lb),
                Ob = Ib?.deref();
              void 0 !== Ob ? pb ? fw(Vb, Lb, wb) : void 0 !== gb && Ob.markVisible(gb) : Hb[lb] &= ~Mb
            }
          }
        }(pb, eb, bb.ref, Mb), Hb) {
        let wb = hM[zM];
        void 0 === wb && (wb = {
          parentRef: void 0,
          root: void 0
        }, hM[zM] = wb), wb.parentRef = bb.ref, wb.root = Mb, zM++, sM(bb, wb, XM), zM--
      }
    }

    function BM(bb, wb, Mb) {
      bb(wb, Mb)
    }

    function sM(bb, wb, Mb) {
      const eb = bb.refTarget;
      if (eb[Fb]) {
        if ("string" !== typeof eb[Fb]) {
          const bb = eb.items;
          if (void 0 !== bb)
            for (let eb = 0, Hb = bb.length; eb < Hb; eb++) {
              const Hb = bb[eb];
              Hb && Mb(wb, Hb[Eb], eb)
            } else {
              const bb = eb.$items,
                Hb = eb._collectionIndexes;
              for (const eb of bb.keys()) {
                const pb = bb.get(eb);
                pb && Mb(wb, pb[Eb], Hb?.[eb] ?? eb)
              }
            }
        }
      } else {
        const Hb = bb.metadata,
          pb = Hb?.[Rb];
        if (!pb) return;
        const Vb = bb.encDescriptor.names;
        for (let bb = 0, gb = pb.length; bb < gb; bb++) {
          const Hb = pb[bb],
            gb = eb[Vb[Hb]];
          gb && Mb(wb, gb[Eb], Hb)
        }
      }
    }

    function mM(bb, wb, Mb) {
      wb.root !== bb ? wb.setRoot(bb) : bb.add(wb)
    }
    const hM = [];
    let zM = 0;

    function XM(bb, wb, Mb) {
      if (wb.root === bb.root) return bb.root.add(wb), void bb.root.moveNextToParent(wb);
      wb.setParent(bb.parentRef, bb.root, Mb)
    }

    function xM(bb, wb, Mb) {
      const eb = (3 & Mb) << 3;
      return Mb < 4 ? bb >>> eb & 255 : wb >>> eb & 255
    }
    const jM = (bb, wb, Mb) => bb(wb, Mb);
    const KM = 16,
      rM = 32,
      RM = 128,
      DM = 256,
      cM = KM | rM;
    class YM {
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
      set isFiltered(bb) {
        this.flags = bb ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(bb) {
        this.flags = bb ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(bb) {
        this.flags = bb ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(bb) {
        this.flags = bb ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & KM)
      }
      set isPatchOnly(bb) {
        this.flags = bb ? this.flags | KM : this.flags & ~KM
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & rM)
      }
      set isFullStateOnly(bb) {
        this.flags = bb ? this.flags | rM : this.flags & ~rM
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(bb) {
        this.flags = bb ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & RM)
      }
      set needsRestage(bb) {
        this.flags = bb ? this.flags | RM : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new ow(this.metadata?.[rb] ?? 0) : new Tw), this.unreliableRecorder
      }
      isFieldUnreliable(bb) {
        const wb = this.encDescriptor;
        return !!wb.hasAnyUnreliable && (bb < 32 ? 0 !== (wb.unreliableBitmask & 1 << bb) : nw.hasUnreliableAtIndex(this.metadata, bb))
      }
      isFieldFullStateOnly(bb) {
        if (this.isFullStateOnly) return !0;
        const wb = this.encDescriptor;
        return !!wb.hasAnyFullStateOnly && (bb < 32 ? 0 !== (wb.fullStateOnlyBitmask & 1 << bb) : nw.hasFullStateOnlyAtIndex(this.metadata, bb))
      }
      isFieldStream(bb) {
        const wb = this.encDescriptor;
        return !!wb.hasAnyStream && (bb < 32 ? 0 !== (wb.streamBitmask & 1 << bb) : nw.hasStreamAtIndex(this.metadata, bb))
      }
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        this.ref = bb, this.refTarget = wb;
        const Mb = wM(bb);
        this.encDescriptor = Mb, this.metadata = Mb.metadata;
        const eb = Mb.isSchema;
        if (this._isSchema = eb, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, eb) {
          const bb = this.metadata?.[rb] ?? 0;
          bb > 7 && (this.ops = new Uint8Array(bb + 1))
        } else this.collDirty = new Map
      }
      _opAt(bb) {
        const wb = this.ops;
        if (void 0 !== wb) return wb[bb];
        const Mb = (3 & bb) << 3;
        return bb < 4 ? this.opsLow >>> Mb & 255 : this.opsHigh >>> Mb & 255
      }
      _opPut(bb, wb) {
        const Mb = this.ops;
        if (void 0 !== Mb) return void(Mb[bb] = wb);
        const eb = (3 & bb) << 3,
          Hb = ~(255 << eb);
        bb < 4 ? this.opsLow = this.opsLow & Hb | wb << eb : this.opsHigh = this.opsHigh & Hb | wb << eb
      }
      _markDirty(bb) {
        bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      record(bb, wb) {
        if (this._isSchema) {
          const Mb = this._opAt(bb);
          0 === Mb ? this._opPut(bb, wb) : (Mb === Hb.DELETE || Mb === Hb.ADD && wb === Hb.DELETE_AND_ADD) && this._opPut(bb, Hb.DELETE_AND_ADD), this._markDirty(bb)
        } else {
          const Mb = this.collDirty,
            eb = Mb.get(bb);
          let pb;
          pb = void 0 === eb ? wb : eb === Hb.DELETE || eb === Hb.ADD && wb === Hb.DELETE_AND_ADD ? Hb.DELETE_AND_ADD : eb, Mb.set(bb, pb)
        }
      }
      recordDelete(bb, wb) {
        this._isSchema ? (this._opPut(bb, wb), this._markDirty(bb)) : this.collDirty.set(bb, wb)
      }
      recordRaw(bb, wb) {
        this._isSchema ? (this._opPut(bb, wb), this._markDirty(bb)) : this.collDirty.set(bb, wb)
      }
      recordPure(bb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, bb])
      }
      operationAt(bb) {
        if (this._isSchema) {
          const wb = this._opAt(bb);
          return 0 === wb ? void 0 : wb
        }
        return this.collDirty.get(bb)
      }
      setOperationAt(bb, wb) {
        if (this._isSchema) this._opPut(bb, wb);
        else {
          const Mb = this.collDirty;
          Mb.has(bb) && Mb.set(bb, wb)
        }
      }
      forEach(bb) {
        this.forEachWithCtx(bb, jM)
      }
      forEachWithCtx(bb, wb) {
        if (this._isSchema) {
          let Mb = this.dirtyLow,
            eb = this.dirtyHigh;
          const Hb = this.ops;
          if (void 0 !== Hb) {
            for (; 0 !== Mb;) {
              const eb = Mb & -Mb,
                pb = 31 - Math.clz32(eb);
              Mb ^= eb, wb(bb, pb, Hb[pb])
            }
            for (; 0 !== eb;) {
              const Mb = eb & -eb,
                pb = 31 - Math.clz32(Mb) + 32;
              eb ^= Mb, wb(bb, pb, Hb[pb])
            }
          } else {
            const eb = this.opsLow,
              Hb = this.opsHigh;
            for (; 0 !== Mb;) {
              const pb = Mb & -Mb,
                Vb = 31 - Math.clz32(pb);
              Mb ^= pb, wb(bb, Vb, xM(eb, Hb, Vb))
            }
          }
          return
        }
        const Mb = this.collDirty,
          eb = this.collPureOps;
        if (void 0 !== eb && eb.length > 0) {
          let Hb = 0,
            pb = 0;
          for (const [Vb, gb] of Mb) {
            for (; Hb < eb.length && eb[Hb][0] <= pb;) {
              const Mb = eb[Hb++][1];
              wb(bb, -Mb, Mb)
            }
            wb(bb, Vb, gb), pb++
          }
          for (; Hb < eb.length;) {
            const Mb = eb[Hb++][1];
            wb(bb, -Mb, Mb)
          }
        } else
          for (const [Hb, pb] of Mb) wb(bb, Hb, pb)
      }
      size() {
        return this._isSchema ? kw(this.dirtyLow) + kw(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(bb, wb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const Mb = this.collDirty,
          eb = new Map,
          pb = !this.paused && !this.isFullStateOnly;
        if (bb > 0)
          for (const [Hb, Vb] of Mb) Hb < bb && eb.set(Hb, Vb);
        if (pb)
          for (let Vb = 0; Vb < wb; Vb++) eb.set(bb + Vb, Hb.ADD);
        for (const [Hb, Vb] of Mb) Hb >= bb && eb.set(Hb + wb, Vb);
        this.collDirty = eb, pb && this.root?.enqueueChangeTree(this)
      }
      removeAt(bb, wb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const Mb = this.collDirty,
          eb = bb + wb;
        let Hb = !1;
        for (const Vb of Mb.keys())
          if (Vb >= eb) {
            Hb = !0;
            break
          } if (!Hb) {
          for (let wb = bb; wb < eb; wb++) Mb.delete(wb);
          return
        }
        const pb = new Map;
        for (const [Vb, gb] of Mb) Vb < bb ? pb.set(Vb, gb) : Vb >= eb && pb.set(Vb - wb, gb);
        this.collDirty = pb
      }
      unshift(bb) {
        this.insertAt(0, bb)
      }
      setRoot(bb) {
        ! function(bb, wb) {
          bb.root = wb;
          const Mb = wb.add(bb);
          VM(bb, bb.parent, bb.parentIndex), Mb && sM(bb, wb, mM)
        }(this, bb)
      }
      setParent(bb, wb, Mb) {
        FM(this, bb, wb, Mb)
      }
      forEachChild(bb) {
        sM(this, bb, BM)
      }
      forEachChildWithCtx(bb, wb) {
        sM(this, bb, wb)
      }
      forEachLive(bb) {
        pM(this, bb, HM)
      }
      forEachLiveWithCtx(bb, wb) {
        pM(this, bb, wb)
      }
      operation(bb) {
        this.paused || this.isFullStateOnly || (this.recordPure(bb), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(bb, wb, Mb) {
        if (!this.paused && !this.isFieldFullStateOnly(bb)) {
          if (this.isFieldUnreliable(bb) && !this.isNew) {
            const eb = this.ensureUnreliableRecorder();
            return Mb ? eb.recordRaw(bb, wb) : eb.record(bb, wb), void this.root?.enqueueUnreliable(this)
          }
          Mb ? this.recordRaw(bb, wb) : this.record(bb, wb), this.root?.enqueueChangeTree(this)
        }
      }
      change(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb.ADD;
        this._routeAndRecord(bb, wb, !1)
      }
      indexedOperation(bb, wb) {
        this._routeAndRecord(bb, wb, !0)
      }
      getChange(bb) {
        return this.operationAt(bb)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(bb) {
        const wb = this.paused;
        this.paused = !0;
        try {
          return bb()
        } finally {
          this.paused = wb
        }
      }
      markDirty(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb.ADD;
        const Mb = this.paused;
        this.paused = !1;
        try {
          this.change(bb, wb)
        } finally {
          this.paused = Mb
        }
      }
      getValue(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Ub](bb, wb)
      }
      delete(bb, wb) {
        if (void 0 === bb) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${bb}'`)
          } catch (VH) {
            console.warn(VH)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(bb)) return this.getValue(bb);
        const Mb = this.isFieldUnreliable(bb) && !this.isNew;
        Mb ? this.ensureUnreliableRecorder().recordDelete(bb, wb ?? Hb.DELETE) : this.recordDelete(bb, wb ?? Hb.DELETE);
        const eb = this.getValue(bb);
        return eb && eb[Eb] && this.root?.remove(eb[Eb]), Mb ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), eb
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[sb]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[sb]?.()
      }
      discard() {
        this._isSchema || this.refTarget[sb]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const bb = bb => {
          if (bb < 0) return;
          const wb = this.getValue(bb);
          wb && wb[Eb] && wb[Eb].discardAll()
        };
        this.forEach(bb), this.unreliableRecorder?.forEach(bb), this.discard()
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
      addParent(bb, wb) {
        ! function(bb, wb, Mb) {
          if (bb.parentRef) {
            if (bb.parentRef[Eb] === wb[Eb]) return void(bb._parentIndex = Mb);
            if (MM(bb, ((bb, Mb) => bb[Eb] === wb[Eb]))) return void(bb._parentIndex = Mb)
          }
          void 0 === bb.parentRef ? (bb.parentRef = wb, bb._parentIndex = Mb) : (bb.extraParents = {
            ref: bb.parentRef,
            index: bb._parentIndex,
            next: bb.extraParents
          }, bb.parentRef = wb, bb._parentIndex = Mb)
        }(this, bb, wb)
      }
      setParentIndex(bb, wb) {
        ! function(bb, wb, Mb) {
          if (void 0 !== bb.extraParents)
            if (bb.parentRef[Eb] !== wb[Eb]) {
              for (let eb = bb.extraParents; void 0 !== eb; eb = eb.next)
                if (eb.ref[Eb] === wb[Eb]) return void(eb.index = Mb)
            } else bb._parentIndex = Mb;
          else bb._parentIndex = Mb
        }(this, bb, wb)
      }
      removeParent() {
        return function(bb, wb) {
          if (bb.parentRef && bb.parentRef[Eb] === wb[Eb]) return bb.extraParents ? (bb.parentRef = bb.extraParents.ref, bb._parentIndex = bb.extraParents.index, bb.extraParents = bb.extraParents.next) : (bb.parentRef = void 0, bb._parentIndex = void 0), !0;
          let Mb = bb.extraParents,
            eb = null;
          for (; Mb;) {
            if (Mb.ref[Eb] === wb[Eb]) return eb ? eb.next = Mb.next : bb.extraParents = Mb.next, !0;
            eb = Mb, Mb = Mb.next
          }
          return void 0 === bb.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(bb) {
        return function(bb, wb) {
          if (void 0 !== bb.parentRef && wb(bb.parentRef, bb._parentIndex)) return {
            ref: bb.parentRef,
            index: bb._parentIndex
          };
          for (let Mb = bb.extraParents; void 0 !== Mb; Mb = Mb.next)
            if (wb(Mb.ref, Mb.index)) return {
              ref: Mb.ref,
              index: Mb.index
            }
        }(this, bb)
      }
      hasParent(bb) {
        return MM(this, bb)
      }
      indexInParent(bb) {
        return function(bb, wb) {
          if (bb.parentRef && bb.parentRef[Eb] === wb[Eb]) return bb._parentIndex;
          for (let Mb = bb.extraParents; void 0 !== Mb; Mb = Mb.next)
            if (Mb.ref[Eb] === wb[Eb]) return Mb.index
        }(this, bb)
      }
      getAllParents() {
        return function(bb) {
          const wb = [];
          bb.parentRef && wb.push({
            ref: bb.parentRef,
            index: bb._parentIndex
          });
          let Mb = bb.extraParents;
          for (; Mb;) wb.push({
            ref: Mb.ref,
            index: Mb.index
          }), Mb = Mb.next;
          return wb
        }(this)
      }
    }
    class ZM {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(bb) {
        this.ref = bb
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
      untracked(bb) {
        return bb()
      }
      markDirty() {}
      forEachChild(bb) {
        const wb = this.ref;
        if (wb[Fb]) {
          if ("string" !== typeof wb[Fb])
            for (const [Mb, eb] of wb.entries()) eb && bb(eb[Eb], wb._collectionIndexes?.[Mb] ?? Mb);
          return
        }
        const Mb = wb.constructor,
          eb = Mb?.[Symbol.metadata];
        if (!eb) return;
        const Hb = eb[Rb] ?? [];
        for (let pb = 0; pb < Hb.length; pb++) {
          const Mb = Hb[pb],
            Vb = wb[eb[Mb].name];
          Vb && bb(Vb[Eb], Mb)
        }
      }
      forEachChildWithCtx(bb, wb) {
        this.forEachChild(((Mb, eb) => wb(bb, Mb, eb)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function fM(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
      var Mb;
      Object.defineProperty(bb, Eb, {
        value: (Mb = wb, new ZM(Mb)),
        enumerable: !1,
        writable: !0
      })
    }

    function AM(bb, wb, Mb, eb, pb, Vb, lb) {
      void 0 !== lb ? lb(wb, eb, Vb) : "string" === typeof Mb ? ww[Mb]?.(wb, eb, Vb) : null != Mb[Symbol.metadata] ? (ww.number(wb, eb[gb], Vb), (pb & Hb.ADD) === Hb.ADD && bb.tryEncodeTypeId(wb, Mb, eb.constructor, Vb)) : ww.number(wb, eb[gb], Vb)
    }
    const WM = function(bb, wb, Mb, eb, pb, Vb, gb, lb) {
        if (wb[Vb.offset++] = 255 & (eb | pb), pb === Hb.DELETE) return;
        const Lb = Mb.encDescriptor,
          Ib = Mb.ref,
          Ob = Ib[zb][eb] ?? Ib[Lb.names[eb]];
        AM(bb, wb, Lb.types[eb], Ob, pb, Vb, Lb.encoders[eb])
      },
      JM = function(bb, wb, Mb, eb, pb, Vb) {
        if (wb[Vb.offset++] = 255 & pb, ww.number(wb, eb, Vb), pb === Hb.DELETE) return;
        const gb = Mb.ref;
        if ((pb & Hb.ADD) === Hb.ADD) {
          const bb = gb.$indexes.get(eb);
          ww.string(wb, bb, Vb)
        }
        AM(bb, wb, gb[Fb], gb[Ub](eb), pb, Vb)
      },
      SM = function(bb, wb, Mb, eb, pb, Vb) {
        if (wb[Vb.offset++] = 255 & pb, ww.number(wb, eb, Vb), pb === Hb.DELETE) return;
        const gb = Mb.ref;
        AM(bb, wb, gb[Fb], gb[Ub](eb), pb, Vb)
      },
      NM = function(bb, wb, Mb, eb, pb, Vb) {
        const gb = Mb.ref;
        (pb & Hb.ADD) === Hb.ADD && "function" === typeof gb.set ? JM(bb, wb, Mb, eb, pb, Vb) : SM(bb, wb, Mb, eb, pb, Vb)
      },
      vM = function(bb, wb, Mb, eb, pb, Vb, lb, Lb) {
        const Ib = Mb.refTarget,
          Ob = Ib[Fb],
          tb = "string" !== typeof Ob;
        let Cb;
        if (Lb && Mb.isFiltered && tb) {
          const bb = Ib.tmpItems[eb];
          if (!bb) return;
          if (Cb = bb[gb], pb === Hb.DELETE) pb = Hb.DELETE_BY_REFID;
          else if ((pb & Hb.ADD) === Hb.ADD) pb = Hb.ADD_BY_REFID;
          else if ((pb & Hb.MOVE) === Hb.MOVE) return
        } else if (pb === Hb.DELETE && tb) {
          const bb = Ib.tmpItems[eb];
          if (!bb) return;
          Cb = bb[gb], pb = Hb.DELETE_BY_REFID
        } else Cb = eb;
        if (wb[Vb.offset++] = 255 & pb, ww.number(wb, Cb, Vb), pb === Hb.DELETE || pb === Hb.DELETE_BY_REFID) return;
        AM(bb, wb, Ob, Ib[Ub](eb, lb), pb, Vb)
      };

    function QM(bb, wb, Mb, eb, pb, Vb, lb) {
      const Lb = bb.resyncVisited;
      let Ib = Lb.get(bb.currentRefId);
      if (void 0 === Ib && Lb.set(bb.currentRefId, Ib = new Set), Ib.add(eb), void 0 !== pb && Mb === Hb.ADD && pb !== Vb) {
        const Mb = pb[gb];
        void 0 !== Mb && (bb.root.removeRef(Mb), lb?.push({
          ref: wb,
          refId: bb.currentRefId,
          op: Hb.DELETE,
          dynamicIndex: eb,
          value: void 0,
          previousValue: pb
        }))
      }
    }

    function GM(bb, wb, Mb, eb) {
      const Hb = wb[gb];
      if (void 0 === Hb || Mb.has(Hb)) return;
      Mb.add(Hb);
      const pb = wb.constructor[Symbol.metadata],
        Vb = pb?.[Rb];
      if (void 0 === Vb) return;
      const lb = pb[Zb];
      for (let gb = 0; gb < Vb.length; gb++) {
        const Hb = Vb[gb];
        if (void 0 !== lb && lb.includes(Hb)) continue;
        const Lb = pb[Hb],
          Ib = wb[Lb.name];
        Ib && (ce.is(Lb.type) ? GM(bb, Ib, Mb, eb) : qM(bb, Ib, Mb, eb))
      }
    }

    function qM(bb, wb, Mb, eb) {
      const pb = wb[Bb] ?? wb,
        Vb = pb[gb];
      if (void 0 === Vb || Mb.has(Vb)) return;
      Mb.add(Vb);
      const lb = bb.resyncVisited.get(Vb);
      if (void 0 === lb) return;
      const Lb = bb.root;
      pb[Cb](lb, ((bb, Mb) => {
        eb?.push({
          ref: wb,
          refId: Vb,
          op: Hb.DELETE,
          dynamicIndex: Mb,
          value: void 0,
          previousValue: bb
        });
        const pb = bb?.[gb];
        void 0 !== pb && Lb.removeRef(pb)
      }), (wb => {
        ce.isSchema(wb) && GM(bb, wb, Mb, eb)
      }))
    }
    const aM = 1,
      iM = 2,
      uM = 3,
      dM = 4,
      PM = 5;

    function nM(bb, wb, Mb, eb, pb, Vb, lb, Lb, Ib) {
      const Ob = bb.root;
      let Ub;
      if ((wb & Hb.DELETE) === Hb.DELETE) {
        const bb = pb?.[gb];
        void 0 !== bb && Ob.removeRef(bb), wb !== Hb.DELETE_AND_ADD && Mb[tb](eb), Ub = void 0
      }
      if (wb === Hb.DELETE);
      else if ("string" === typeof Vb) Ub = mw[Vb](lb, Lb);
      else if (Sw(Vb)) Ub = function(bb, wb, Mb) {
        return vw(bb, (0, mw[bb.wire])(wb, Mb))
      }(Vb.quantized, lb, Lb);
      else if (ce.is(Vb)) {
        const Mb = mw.number(lb, Lb);
        if (Ub = Ob.refs.get(Mb), (wb & Hb.ADD) === Hb.ADD) {
          const eb = bb.getInstanceType(lb, Lb, Vb);
          Ub || (Ub = bb.createInstanceOfType(eb)), Ob.addRef(Mb, Ub, Ub !== pb || wb === Hb.DELETE_AND_ADD && Ub === pb)
        }
      } else {
        const Mb = (Cb = Object.keys(Vb)[0], hw[Cb]),
          eb = mw.number(lb, Lb);
        null !== bb.resyncVisited && function(bb, wb) {
          const Mb = bb.resyncVisited;
          Mb.has(wb) || Mb.set(wb, new Set)
        }(bb, eb);
        const tb = Ob.refs.has(eb) ? pb || Ob.refs.get(eb) : Mb.constructor.initializeForDecoder();
        if (Ub = tb.clone(!0), Ub[Fb] = Object.values(Vb)[0], pb) {
          let bb = pb[gb];
          if (void 0 !== bb && eb !== bb) {
            (wb & Hb.DELETE) !== Hb.DELETE && Ob.removeRef(bb);
            const Mb = pb.entries();
            let eb;
            for (;
              (eb = Mb.next()) && !eb.done;) {
              const [wb, Mb] = eb.value;
              "object" === typeof Mb && (bb = Mb[gb]), Ib?.push({
                ref: pb,
                refId: bb,
                op: Hb.DELETE,
                field: wb,
                value: void 0,
                previousValue: Mb
              })
            }
          }
        }
        Ob.addRef(eb, Ub, tb !== pb || wb === Hb.DELETE_AND_ADD && tb === pb)
      }
      var Cb;
      return Ub
    }
    const yM = function(bb, wb, Mb, eb, Hb) {
        const pb = wb[Mb.offset++],
          Vb = eb.constructor[Symbol.metadata],
          gb = pb >> 6 << 6,
          lb = pb % (gb || 255),
          Lb = Vb[lb];
        if (void 0 === Lb) return console.warn("@colyseus/schema: field not defined at", {
          index: lb,
          ref: eb.constructor.name,
          metadata: Vb
        }), -1;
        const Ib = !0 === Lb.deprecated,
          Ob = Ib ? void 0 : eb[Ub](lb),
          tb = nM(bb, gb, eb, lb, Ob, Lb.type, wb, Mb, Hb);
        Ib || (null !== tb && void 0 !== tb && (eb[Lb.name] = tb), Ob !== tb && Hb?.push({
          ref: eb,
          refId: bb.currentRefId,
          op: gb,
          field: Lb.name,
          value: tb,
          previousValue: Ob
        }))
      },
      oM = function(bb, wb, Mb, eb, pb) {
        const Vb = eb[Bb] ?? eb,
          gb = wb[Mb.offset++];
        if (gb === Hb.CLEAR) return bb.removeChildRefs(Vb, pb), void Vb.clear();
        const lb = mw.number(wb, Mb),
          Lb = Vb[Fb],
          Ib = Vb.constructor.COLLECTION_KIND;
        let Ob;
        (gb & Hb.ADD) === Hb.ADD ? Ib === aM ? (Ob = mw.string(wb, Mb), Vb.setIndex(lb, Ob)) : Ob = lb : Ob = Vb.getIndex(lb);
        const tb = Vb[Ub](lb),
          Cb = nM(bb, gb, eb, lb, tb, Lb, wb, Mb, pb);
        if (null !== bb.resyncVisited && QM(bb, eb, gb, Ob, tb, Cb, pb), null !== Cb && void 0 !== Cb) switch (Ib) {
          case aM:
            Vb.$items.set(Ob, Cb);
            break;
          case iM:
            Vb.$setAt(lb, Cb, null !== bb.resyncVisited && gb === Hb.ADD ? Hb.REPLACE : gb);
            break;
          case uM:
          case dM:
          case PM:
            Vb.$items.has(lb) || (Vb.$items.set(lb, Cb), "number" === typeof Vb.$refId && lb >= Vb.$refId && (Vb.$refId = lb + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Vb.constructor?.name} \u2014 item at index ${lb} was not stored.`)
        }
        tb !== Cb && pb?.push({
          ref: eb,
          refId: bb.currentRefId,
          op: gb,
          dynamicIndex: Ob,
          value: Cb,
          previousValue: tb
        })
      },
      TM = function(bb, wb, Mb, eb, pb) {
        const Vb = eb[Bb] ?? eb;
        let gb, lb = wb[Mb.offset++];
        if (lb === Hb.CLEAR) return bb.removeChildRefs(Vb, pb), void Vb.clear();
        if (lb === Hb.REVERSE) return void Vb.items.reverse();
        if (lb === Hb.DELETE_BY_REFID) {
          const lb = mw.number(wb, Mb),
            Lb = bb.root.refs.get(lb);
          if (void 0 === Lb) return;
          if (bb.root.removeRef(lb), gb = Vb.findIndex((bb => bb === Lb)), -1 === gb) return;
          return Vb[tb](gb), void pb?.push({
            ref: eb,
            refId: bb.currentRefId,
            op: Hb.DELETE,
            dynamicIndex: gb,
            value: void 0,
            previousValue: Lb
          })
        }
        if (lb === Hb.ADD_BY_REFID) {
          const eb = mw.number(wb, Mb),
            Hb = bb.root.refs.get(eb);
          Hb && (gb = Vb.findIndex((bb => bb === Hb))), -1 !== gb && void 0 !== gb || (gb = Vb.length)
        } else gb = mw.number(wb, Mb);
        const Lb = Vb[Fb];
        let Ib = gb;
        const Ob = Vb.items[gb],
          Ub = nM(bb, lb, eb, gb, Ob, Lb, wb, Mb, pb);
        null !== bb.resyncVisited && QM(bb, eb, lb, gb, Ob, Ub, pb), null !== Ub && void 0 !== Ub && Ub !== Ob && Vb.$setAt(gb, Ub, null !== bb.resyncVisited && lb === Hb.ADD ? Hb.REPLACE : lb), Ob !== Ub && pb?.push({
          ref: eb,
          refId: bb.currentRefId,
          op: lb,
          dynamicIndex: Ib,
          value: Ub,
          previousValue: Ob
        })
      };
    class kM extends Error {}

    function be(bb, wb, Mb, eb) {
      if (!(bb instanceof wb)) throw new kM(`a '${wb.name}' was expected, but '${bb&&bb.constructor.name}' was provided in ${Mb.constructor.name}#${eb}`)
    }
    const we = (bb, wb) => {
        const Mb = bb.toString(),
          eb = wb.toString();
        return Mb < eb ? -1 : Mb > eb ? 1 : 0
      },
      Me = {
        get: (bb, wb) => "symbol" === typeof wb || isNaN(wb) ? Reflect.get(bb, wb) : bb.items[wb],
        set: (bb, wb, Mb) => {
          if ("symbol" !== typeof wb && !isNaN(wb)) {
            if (void 0 === Mb || null === Mb) bb.$deleteAt(wb);
            else {
              let eb;
              if (Mb[Eb]) {
                be(Mb, bb[Fb], bb, wb);
                const pb = bb.items[wb];
                bb.isMovingItems ? (eb = bb.$wireIndex(Number(wb)), void 0 !== pb ? Mb[Eb].isNew ? bb[Eb].indexedOperation(eb, Hb.MOVE_AND_ADD) : (bb[Eb].getChange(eb) & Hb.DELETE) === Hb.DELETE ? bb[Eb].indexedOperation(eb, Hb.DELETE_AND_MOVE) : bb[Eb].indexedOperation(eb, Hb.MOVE) : Mb[Eb].isNew && bb[Eb].indexedOperation(eb, Hb.ADD), Mb[Eb].setParent(bb, bb[Eb].root, eb)) : eb = bb.$changeAt(Number(wb), Mb), void 0 !== pb && pb[Eb].root?.remove(pb[Eb])
              } else eb = bb.$changeAt(Number(wb), Mb);
              bb.items[wb] = Mb, void 0 !== eb && (bb.tmpItems[eb] = Mb)
            }
            return !0
          }
          return Reflect.set(bb, wb, Mb)
        },
        deleteProperty: (bb, wb) => ("number" === typeof wb ? bb.$deleteAt(wb) : delete bb[wb], !0),
        has: (bb, wb) => "symbol" === typeof wb || isNaN(Number(wb)) ? Reflect.has(bb, wb) : Reflect.has(bb.items, wb)
      };
    class ee {
      [Eb];
      [gb];
      [Bb];
      [Fb];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Lb] = vM;
      static[Ib] = TM;
      static COLLECTION_KIND = iM;
      static[Ob](bb, wb, Mb) {
        if (!Mb) return !0;
        const eb = bb[Bb] ?? bb;
        return "string" === typeof eb[Fb] || Mb.isChangeTreeVisible(eb.tmpItems[wb]?.[Eb])
      }
      static is(bb) {
        return Array.isArray(bb) || void 0 !== bb.array
      }
      static from(bb) {
        return new ee(...Array.from(bb))
      }
      constructor() {
        this[Fb] = void 0, this[Bb] = this;
        const bb = new Proxy(this, Me);
        return Object.defineProperty(this, Eb, {
          value: new YM(bb, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), bb
      }
      static initializeForDecoder() {
        const bb = Object.create(ee.prototype);
        bb.items = [], bb.isMovingItems = !1, bb._needsCompaction = !1, bb[Fb] = void 0, bb[Bb] = bb;
        const wb = new Proxy(bb, Me);
        return fM(bb, wb), wb
      }
      set length(bb) {
        0 === bb ? this.clear() : bb < this.items.length ? this.splice(bb, this.length - bb) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Eb].pause()
      }
      resumeTracking() {
        this[Eb].resume()
      }
      untracked(bb) {
        return this[Eb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[Eb].paused
      }
      push() {
        const bb = this[Bb],
          wb = bb.items,
          Mb = bb.tmpItems,
          eb = bb[Eb],
          pb = bb[Fb];
        let Vb = Mb.length;
        for (let gb = 0, lb = arguments.length; gb < lb; gb++, Vb++) {
          const lb = gb < 0 || arguments.length <= gb ? void 0 : arguments[gb];
          if (void 0 === lb || null === lb) return;
          "object" === typeof lb && pb && be(lb, pb, bb, gb), eb.indexedOperation(Vb, Hb.ADD), wb.push(lb), Mb.push(lb), lb[Eb]?.setParent(this, eb.root, Vb)
        }
        return Vb
      }
      pop() {
        const bb = this[Bb],
          wb = bb.tmpItems,
          Mb = bb.deletedIndexes;
        let eb = -1;
        for (let pb = wb.length - 1; pb >= 0; pb--)
          if (!0 !== Mb[pb]) {
            eb = pb;
            break
          } if (eb < 0) return;
        const Hb = bb.$isUnsentAdd(eb);
        return bb[Eb].delete(eb), Hb ? bb.$cancelAdd(eb) : Mb[eb] = !0, bb.items.pop()
      }
      at(bb) {
        return bb < 0 && (bb += this.length), this.items[bb]
      }
      $wireIndex(bb) {
        const wb = this.deletedIndexes;
        if (0 === wb.length) return bb;
        const Mb = this.tmpItems;
        let eb = 0;
        for (let Hb = 0; Hb < Mb.length; Hb++)
          if (!0 !== wb[Hb]) {
            if (eb === bb) return Hb;
            eb++
          } return Mb.length + (bb - eb)
      }
      $isUnsentAdd(bb) {
        const wb = this[Eb];
        return 0 === (576 & wb.flags) && !wb.paused && "string" !== typeof this[Fb] && wb.operationAt(bb) === Hb.ADD
      }
      $cancelAdd(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Mb = this[Eb],
          eb = this.tmpItems[bb];
        this.tmpItems.splice(bb, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(bb, 1), Mb.removeAt(bb, 1);
        const Hb = eb?.[Eb];
        void 0 !== Hb && void 0 === Hb.root && Hb.removeParent(this), wb && this.$reindexChildren(bb)
      }
      $reindexChildren(bb, wb) {
        if (!this[Eb].hasFilteredFields) return;
        if ("string" === typeof this[Fb]) return;
        const Mb = this.tmpItems,
          eb = Mb.length;
        if (void 0 !== wb)
          for (; bb < eb && Mb[bb] === wb[bb];) bb++;
        for (let Hb = bb; Hb < eb; Hb++) Mb[Hb]?.[Eb]?.setParentIndex(this, Hb)
      }
      $changeAt(bb, wb) {
        if (void 0 === wb || null === wb) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[bb] === wb) return;
        const Mb = void 0 !== this.items[bb] ? "object" === typeof wb ? Hb.DELETE_AND_ADD : Hb.REPLACE : Hb.ADD,
          eb = this.$wireIndex(bb),
          pb = this[Eb];
        return pb.change(eb, Mb), wb[Eb]?.setParent(this, pb.root, eb), eb
      }
      $deleteAt(bb, wb) {
        this[Eb].delete(this.$wireIndex(bb), wb)
      }
      $setAt(bb, wb, Mb) {
        Mb === Hb.ADD && void 0 !== this.items[bb] ? this.items.splice(bb, 0, wb) : Mb === Hb.DELETE_AND_MOVE ? (this.items.splice(bb, 1), this.items[bb] = wb) : (bb > this.items.length && (this._needsCompaction = !0), this.items[bb] = wb)
      }
      clear() {
        const bb = this[Bb];
        if (0 === bb.items.length) return;
        const wb = bb[Eb];
        wb.forEachChild(((bb, Mb) => {
          wb.root?.remove(bb)
        })), wb.discard(), wb.operation(Hb.CLEAR), bb.items.length = 0, bb.tmpItems.length = 0
      } [mb]() {
        const bb = this[Bb] ?? this,
          wb = bb[Eb];
        if (wb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const Mb = bb.items;
        for (let eb = 0; eb < Mb.length; eb++) Mb[eb]?.[mb]?.();
        bb.items.length = 0, bb.tmpItems.length = 0, bb.deletedIndexes.length = 0, wb.recycle(), bb[gb] = void 0
      }
      concat() {
        return new ee(...this.items.concat(...arguments))
      }
      join(bb) {
        return this.items.join(bb)
      }
      reverse() {
        const bb = this[Bb],
          wb = bb[Eb];
        if (wb.has() || bb.deletedIndexes.length > 0) {
          const wb = bb.items.slice().reverse();
          return this.clear(), this.push(...wb), this
        }
        return wb.operation(Hb.REVERSE), bb.items.reverse(), bb.tmpItems.reverse(), bb.$reindexChildren(0), this
      }
      shift() {
        const bb = this[Bb],
          wb = bb.items;
        if (0 === wb.length) return;
        const Mb = bb[Eb],
          eb = bb.deletedIndexes;
        let pb = 0;
        for (; !0 === eb[pb];) pb++;
        const Vb = bb.$isUnsentAdd(pb);
        return Mb.delete(pb, Hb.DELETE), Vb ? bb.$cancelAdd(pb) : eb[pb] = !0, wb.shift()
      }
      slice(bb, wb) {
        const Mb = new ee;
        return Mb.push(...this.items.slice(bb, wb)), Mb
      }
      sort() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we;
        const wb = this[Bb];
        wb.isMovingItems = !0;
        const Mb = wb[Eb];
        return wb.items.sort(bb).forEach(((bb, wb) => Mb.change(wb, Hb.REPLACE))), wb.tmpItems.sort(bb), wb.$reindexChildren(0), wb.isMovingItems = !1, this
      }
      splice(bb, wb) {
        const Mb = this[Bb],
          eb = Mb[Eb],
          pb = Mb.items,
          Vb = Mb.tmpItems,
          gb = Mb.deletedIndexes,
          lb = pb.length,
          Lb = Vb.length;
        for (var Ib = arguments.length, Ob = new Array(Ib > 2 ? Ib - 2 : 0), Ub = 2; Ub < Ib; Ub++) Ob[Ub - 2] = arguments[Ub];
        const tb = Ob.length,
          Cb = [];
        for (let Hb = 0; Hb < Lb; Hb++) !0 !== gb[Hb] && Cb.push(Hb);
        let Fb;
        if (lb > bb) {
          void 0 === wb && (wb = lb - bb);
          for (let pb = bb; pb < bb + wb; pb++) {
            const bb = Cb[pb],
              wb = Mb.$isUnsentAdd(bb);
            eb.delete(bb, Hb.DELETE), wb ? (Fb ??= []).push(bb) : gb[bb] = !0
          }
        } else wb = 0;
        if (tb > 0) {
          const pb = Cb[bb] ?? lb,
            Lb = Math.min(tb, wb);
          for (let bb = 0; bb < Lb; bb++) {
            const wb = pb + bb;
            let Mb;
            const lb = void 0 !== Fb ? Fb.indexOf(wb) : -1; - 1 !== lb ? (Fb.splice(lb, 1), Mb = Hb.ADD) : Mb = gb[wb] ? Hb.DELETE_AND_ADD : Hb.ADD, eb.indexedOperation(wb, Mb), Vb[wb] = Ob[bb], gb[wb] = !1, Ob[bb][Eb]?.setParent(this, eb.root, wb)
          }
          const Ib = tb - Lb;
          if (Ib > 0) {
            const bb = pb + Lb;
            eb.insertAt(bb, Ib);
            for (let wb = 0; wb < Ib; wb++) Ob[Lb + wb][Eb]?.setParent(this, eb.root, bb + wb);
            gb.length > 0 && gb.splice(bb, 0, ...new Array(Ib).fill(!1)), Vb.splice(bb, 0, ...Ob.slice(Lb)), Mb.$reindexChildren(bb + Ib)
          }
        }
        if (void 0 !== Fb && Fb.length > 0) {
          for (let bb = Fb.length - 1; bb >= 0; bb--) Mb.$cancelAdd(Fb[bb], !1);
          Mb.$reindexChildren(Fb[0])
        }
        return eb.root?.enqueueChangeTree(eb), pb.splice(bb, wb, ...Ob)
      }
      unshift() {
        const bb = this[Bb],
          wb = bb[Eb];
        wb.unshift(arguments.length);
        for (let eb = 0; eb < arguments.length; eb++)(eb < 0 || arguments.length <= eb ? void 0 : arguments[eb])?.[Eb]?.setParent(this, wb.root, eb);
        const Mb = bb.deletedIndexes;
        return Mb.length > 0 && Mb.unshift(...new Array(arguments.length).fill(!1)), bb.tmpItems.unshift(...arguments), bb.$reindexChildren(arguments.length), bb.items.unshift(...arguments)
      }
      indexOf(bb, wb) {
        return this.items.indexOf(bb, wb)
      }
      lastIndexOf(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(bb, wb)
      }
      every(bb, wb) {
        return this.items.every(bb, wb)
      }
      some(bb, wb) {
        return this.items.some(bb, wb)
      }
      forEach(bb, wb) {
        return this.items.forEach(bb, wb)
      }
      map(bb, wb) {
        return this.items.map(bb, wb)
      }
      filter(bb, wb) {
        return this.items.filter(bb, wb)
      }
      reduce(bb, wb) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(bb, wb) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(bb, wb) {
        return this.items.find(bb, wb)
      }
      findIndex(bb, wb) {
        return this.items.findIndex(bb, wb)
      }
      fill(bb, wb, Mb) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(bb, wb, Mb) {
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
        return ee
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
      includes(bb, wb) {
        return this.items.includes(bb, wb)
      }
      flatMap(bb, wb) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(bb) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(bb, wb) {
        const Mb = this.items.slice();
        return bb < 0 && (bb += this.length), Mb[bb] = wb, new ee(...Mb)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(bb) {
        return this.items.slice().sort(bb)
      }
      toSpliced(bb, wb) {
        for (var Mb = arguments.length, eb = new Array(Mb > 2 ? Mb - 2 : 0), Hb = 2; Hb < Mb; Hb++) eb[Hb - 2] = arguments[Hb];
        const pb = this.items.slice();
        return pb.splice.apply(pb, arguments), pb
      }
      shuffle() {
        return this.move((bb => {
          let wb = this.items.length;
          for (; 0 != wb;) {
            let bb = Math.floor(Math.random() * wb);
            wb--, [this[wb], this[bb]] = [this[bb], this[wb]]
          }
        }))
      }
      move(bb) {
        return this.isMovingItems = !0, bb(this), this.isMovingItems = !1, this
      } [Ub](bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = this[Bb] ?? this;
        return wb || Mb.deletedIndexes[bb] ? Mb.items[bb] : Mb.tmpItems[bb] || Mb.items[bb]
      } [tb](bb) {
        const wb = this[Bb] ?? this;
        wb.items[bb] = void 0, wb._needsCompaction = !0
      } [sb]() {
        const bb = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, bb), this.deletedIndexes.length = 0)
      } [hb]() {
        const bb = this[Bb] ?? this;
        bb._needsCompaction && (bb._needsCompaction = !1, bb.items = bb.items.filter((bb => void 0 !== bb)))
      } [Cb](bb, wb, Mb) {
        const eb = this[Bb] ?? this,
          Hb = eb.items;
        let pb = !1;
        for (let Vb = 0; Vb < Hb.length; Vb++) {
          const gb = Hb[Vb];
          bb.has(Vb) ? Mb(gb) : (pb = !0, wb(gb, Vb), eb[tb](Vb))
        }
        pb && eb[hb]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((bb => "function" === typeof bb.toJSON ? bb.toJSON() : bb))
      }
      clone(bb) {
        let wb;
        return bb ? (wb = new ee, wb.push(...this.items)) : wb = new ee(...this.map((bb => bb[Eb] ? bb.clone() : bb))), wb
      }
    }
    Xw("array", {
      constructor: ee
    });
    class He {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(bb) {
        const wb = this.indexByKey[bb];
        return void 0 === wb ? void 0 : wb
      }
      assign(bb) {
        const wb = this.nextIndex++;
        return this.indexByKey[bb] = wb, this.keyByIndex.set(wb, bb), wb
      }
      snapshot(bb, wb) {
        (this.snapshots ??= new Map).set(bb, wb)
      }
      forgetSnapshot(bb) {
        this.snapshots?.delete(bb)
      }
      snapshotAt(bb) {
        return this.snapshots?.get(bb)
      }
      setIndex(bb, wb) {
        this.keyByIndex.set(bb, wb), this.indexByKey[wb] = bb
      }
      keyOf(bb) {
        return this.keyByIndex.get(bb)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [bb] of this.snapshots) {
            const wb = this.keyByIndex.get(bb);
            void 0 !== wb && (delete this.indexByKey[wb], this.keyByIndex.delete(bb))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class pe {
      [Eb];
      [gb];
      childType;
      [Fb];
      $items = new Map;
      journal = new He;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= Kw()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= Kw()).priority = bb
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Lb] = JM;
      static[Ib] = oM;
      static COLLECTION_KIND = aM;
      static[Ob](bb, wb, Mb) {
        if (!Mb || "string" === typeof bb[Fb]) return !0;
        const eb = bb[Ub](wb) ?? bb.journal.snapshotAt(wb);
        return Mb.isChangeTreeVisible(eb[Eb])
      }
      static is(bb) {
        return void 0 !== bb.map
      }
      constructor(bb) {
        if (Object.defineProperty(this, Eb, {
            value: new YM(this),
            enumerable: !1,
            writable: !0
          }), this[Fb] = void 0, bb)
          if (bb instanceof Map || bb instanceof pe) bb.forEach(((bb, wb) => this.set(wb, bb)));
          else
            for (const wb in bb) this.set(wb, bb[wb])
      }
      static initializeForDecoder() {
        const bb = Object.create(pe.prototype);
        return bb.$items = new Map, bb.journal = new He, bb[Fb] = void 0, fM(bb), bb
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return pe
      }
      set(bb, wb) {
        if (void 0 === wb || null === wb) throw new Error(`MapSchema#set('${bb}', ${wb}): trying to set ${wb} value on '${bb}'.`);
        "object" === typeof wb && this[Fb] && be(wb, this[Fb], this, bb), bb = bb.toString();
        const Mb = this[Eb],
          eb = void 0 !== wb[Eb],
          pb = this.journal;
        let Vb, gb = pb.indexOf(bb);
        if (void 0 !== gb) {
          Vb = Hb.REPLACE;
          const Mb = this.$items.get(bb);
          if (Mb === wb) return;
          eb && (Vb = Hb.DELETE_AND_ADD, void 0 !== Mb && Mb[Eb].root?.remove(Mb[Eb])), void 0 !== pb.snapshotAt(gb) && pb.forgetSnapshot(gb)
        } else gb = pb.assign(bb), Vb = Hb.ADD;
        return this.$items.set(bb, wb), Vb === Hb.ADD && Mb.isStreamCollection ? void 0 !== Mb.root && Rw(this, Mb.root, gb) : Mb.change(gb, Vb), eb && wb[Eb].setParent(this, Mb.root, gb), this
      }
      get(bb) {
        return this.$items.get(bb)
      }
      getOrInsert(bb, wb) {
        return this.$items.has(bb) ? this.$items.get(bb) : (this.set(bb, wb), wb)
      }
      getOrInsertComputed(bb, wb) {
        if (this.$items.has(bb)) return this.$items.get(bb);
        const Mb = wb(bb);
        return this.set(bb, Mb), Mb
      }
      delete(bb) {
        if (!this.$items.has(bb)) return !1;
        const wb = this.journal.indexOf(bb),
          Mb = this.$items.get(bb),
          eb = this[Eb];
        if (eb.isStreamCollection) {
          const Hb = eb.root;
          let pb = !1;
          return void 0 !== Hb && (pb = Dw(this, Hb, this[gb], wb)), void 0 !== Mb?.[Eb] && Hb?.remove(Mb[Eb]), this.$items.delete(bb), pb || this.journal.snapshot(wb, Mb), !0
        }
        return this.journal.snapshot(wb, Mb), eb.delete(wb), this.$items.delete(bb)
      }
      clear() {
        const bb = this[Eb];
        bb.discard(), bb.forEachChild(((wb, Mb) => {
          bb.root?.remove(wb)
        })), this.journal.reset(), this.$items.clear(), bb.operation(Hb.CLEAR)
      } [mb]() {
        const bb = this[Eb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[mb]?.())), this.$items.clear(), this.journal.reset(), bb.recycle(), this[gb] = void 0
      }
      has(bb) {
        return this.$items.has(bb)
      }
      forEach(bb) {
        this.$items.forEach(bb)
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
        this[Eb].pause()
      }
      resumeTracking() {
        this[Eb].resume()
      }
      untracked(bb) {
        return this[Eb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[Eb].paused
      }
      setIndex(bb, wb) {
        this.journal.setIndex(bb, wb)
      }
      getIndex(bb) {
        return this.journal.keyOf(bb)
      } [Ub](bb) {
        const wb = this.journal.keyOf(bb);
        return void 0 !== wb ? this.$items.get(wb) : void 0
      } [tb](bb) {
        const wb = this.journal.keyOf(bb);
        void 0 !== wb && (this.$items.delete(wb), this.journal.keyByIndex.delete(bb))
      } [Cb](bb, wb, Mb) {
        let eb = null;
        if (this.$items.forEach(((Hb, pb) => {
            bb.has(pb) ? Mb(Hb) : ((eb ??= new Set).add(pb), wb(Hb, pb))
          })), null !== eb) {
          eb.forEach((bb => {
            this.$items.delete(bb), delete this.journal.indexByKey[bb]
          }));
          const bb = [];
          this.journal.keyByIndex.forEach(((wb, Mb) => {
            eb.has(wb) && bb.push(Mb)
          }));
          for (let wb = 0; wb < bb.length; wb++) this.journal.keyByIndex.delete(bb[wb])
        }
      } [sb]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(bb) {
        Aw(this, bb)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (bb => {
          let [wb, Mb] = bb;
          return [wb, "function" === typeof Mb.toJSON ? Mb.toJSON() : Mb]
        })))
      }
      clone(bb) {
        let wb;
        return bb ? wb = Object.assign(new pe, this) : (wb = new pe, this.forEach(((bb, Mb) => {
          bb[Eb] ? wb.set(Mb, bb.clone()) : wb.set(Mb, bb)
        }))), wb
      }
    }
    Xw("map", {
      constructor: pe
    });
    class Ve {
      [Eb];
      [gb];
      [Fb];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= Kw()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= Kw()).priority = bb
      }
      static[Lb] = SM;
      static[Ib] = oM;
      static COLLECTION_KIND = dM;
      static[Ob](bb, wb, Mb) {
        return !Mb || "string" === typeof bb[Fb] || Mb.isChangeTreeVisible((bb[Ub](wb) ?? bb.deletedItems[wb])[Eb])
      }
      static is(bb) {
        return void 0 !== bb.collection
      }
      constructor(bb) {
        Object.defineProperty(this, Eb, {
          value: new YM(this),
          enumerable: !1,
          writable: !0
        }), this[Fb] = void 0, bb && bb.forEach((bb => this.add(bb)))
      }
      static initializeForDecoder() {
        const bb = Object.create(Ve.prototype);
        return bb.$items = new Map, bb.deletedItems = {}, bb.$refId = 0, bb[Fb] = void 0, fM(bb), bb
      }
      add(bb) {
        const wb = this.$refId++,
          Mb = this[Eb];
        return this.$items.set(wb, bb), Mb.isStreamCollection ? void 0 !== Mb.root && Rw(this, Mb.root, wb) : Mb.change(wb), void 0 !== bb[Eb] && bb[Eb].setParent(this, Mb.root, wb), wb
      }
      at(bb) {
        const wb = Array.from(this.$items.keys())[bb];
        return this.$items.get(wb)
      }
      entries() {
        return this.$items.entries()
      }
      delete(bb) {
        const wb = this.$items.entries();
        let Mb, eb;
        for (;
          (eb = wb.next()) && !eb.done;)
          if (bb === eb.value[1]) {
            Mb = eb.value[0];
            break
          } if (void 0 === Mb) return !1;
        const Hb = this[Eb];
        if (Hb.isStreamCollection) {
          const bb = Hb.root,
            wb = this.$items.get(Mb);
          return void 0 !== bb && Dw(this, bb, this[gb], Mb), void 0 !== wb?.[Eb] && bb?.remove(wb[Eb]), this.deletedItems[Mb] = wb, this.$items.delete(Mb)
        }
        return this.deletedItems[Mb] = Hb.delete(Mb), this.$items.delete(Mb)
      }
      clear() {
        const bb = this[Eb];
        bb.discard(), bb.forEachChild(((wb, Mb) => {
          bb.root?.remove(wb)
        })), this.$items.clear(), bb.operation(Hb.CLEAR)
      } [mb]() {
        const bb = this[Eb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[mb]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, bb.recycle(), this[gb] = void 0
      }
      has(bb) {
        return Array.from(this.$items.values()).some((wb => wb === bb))
      }
      forEach(bb) {
        this.$items.forEach(((wb, Mb, eb) => bb(wb, Mb, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Eb].pause()
      }
      resumeTracking() {
        this[Eb].resume()
      }
      untracked(bb) {
        return this[Eb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[Eb].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(bb, wb) {}
      getIndex(bb) {
        return bb
      } [Ub](bb) {
        return this.$items.get(bb)
      } [tb](bb) {
        this.$items.delete(bb)
      } [Cb](bb, wb, Mb) {
        let eb = null;
        if (this.$items.forEach(((Hb, pb) => {
            bb.has(pb) ? Mb(Hb) : ((eb ??= []).push(pb), wb(Hb, pb))
          })), null !== eb)
          for (let Hb = 0; Hb < eb.length; Hb++) this[tb](eb[Hb])
      } [sb]() {
        for (const bb in this.deletedItems) delete this.deletedItems[bb]
      }
      _dropView(bb) {
        Aw(this, bb)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach(((wb, Mb) => {
          bb.push("function" === typeof wb.toJSON ? wb.toJSON() : wb)
        })), bb
      }
      clone(bb) {
        let wb;
        return bb ? wb = Object.assign(new Ve, this) : (wb = new Ve, this.forEach((bb => {
          bb[Eb] ? wb.add(bb.clone()) : wb.add(bb)
        }))), wb
      }
    }
    Xw("collection", {
      constructor: Ve
    });
    class ge {
      [Eb];
      [gb];
      [Fb];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= Kw()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= Kw()).priority = bb
      }
      static[Lb] = SM;
      static[Ib] = oM;
      static COLLECTION_KIND = uM;
      static[Ob](bb, wb, Mb) {
        return !Mb || "string" === typeof bb[Fb] || Mb.isVisible((bb[Ub](wb) ?? bb.deletedItems[wb])[Eb])
      }
      static is(bb) {
        return void 0 !== bb.set
      }
      constructor(bb) {
        Object.defineProperty(this, Eb, {
          value: new YM(this),
          enumerable: !1,
          writable: !0
        }), this[Fb] = void 0, bb && bb.forEach((bb => this.add(bb)))
      }
      static initializeForDecoder() {
        const bb = Object.create(ge.prototype);
        return bb.$items = new Map, bb.deletedItems = {}, bb.$refId = 0, bb[Fb] = void 0, fM(bb), bb
      }
      add(bb) {
        if (this.has(bb)) return !1;
        const wb = this.$refId++,
          Mb = this[Eb];
        return this.$items.set(wb, bb), Mb.isStreamCollection ? void 0 !== Mb.root && Rw(this, Mb.root, wb) : Mb.change(wb, Hb.ADD), void 0 !== bb[Eb] && bb[Eb].setParent(this, Mb.root, wb), wb
      }
      entries() {
        return this.$items.entries()
      }
      delete(bb) {
        const wb = this.$items.entries();
        let Mb, eb;
        for (;
          (eb = wb.next()) && !eb.done;)
          if (bb === eb.value[1]) {
            Mb = eb.value[0];
            break
          } if (void 0 === Mb) return !1;
        const Hb = this[Eb];
        if (Hb.isStreamCollection) {
          const bb = Hb.root,
            wb = this.$items.get(Mb);
          return void 0 !== bb && Dw(this, bb, this[gb], Mb), void 0 !== wb?.[Eb] && bb?.remove(wb[Eb]), this.deletedItems[Mb] = wb, this.$items.delete(Mb)
        }
        return this.deletedItems[Mb] = Hb.delete(Mb), this.$items.delete(Mb)
      }
      clear() {
        const bb = this[Eb];
        bb.discard(), this.$items.clear(), bb.operation(Hb.CLEAR)
      } [mb]() {
        const bb = this[Eb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[mb]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, bb.recycle(), this[gb] = void 0
      }
      has(bb) {
        const wb = this.$items.values();
        let Mb, eb = !1;
        for (;
          (Mb = wb.next()) && !Mb.done;)
          if (bb === Mb.value) {
            eb = !0;
            break
          } return eb
      }
      forEach(bb) {
        this.$items.forEach(((wb, Mb, eb) => bb(wb, Mb, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Eb].pause()
      }
      resumeTracking() {
        this[Eb].resume()
      }
      untracked(bb) {
        return this[Eb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[Eb].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(bb, wb) {}
      getIndex(bb) {
        return bb
      } [Ub](bb) {
        return this.$items.get(bb)
      } [tb](bb) {
        this.$items.delete(bb)
      } [Cb](bb, wb, Mb) {
        let eb = null;
        if (this.$items.forEach(((Hb, pb) => {
            bb.has(pb) ? Mb(Hb) : ((eb ??= []).push(pb), wb(Hb, pb))
          })), null !== eb)
          for (let Hb = 0; Hb < eb.length; Hb++) this[tb](eb[Hb])
      } [sb]() {
        for (const bb in this.deletedItems) delete this.deletedItems[bb]
      }
      _dropView(bb) {
        Aw(this, bb)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach(((wb, Mb) => {
          bb.push("function" === typeof wb.toJSON ? wb.toJSON() : wb)
        })), bb
      }
      clone(bb) {
        let wb;
        return bb ? wb = Object.assign(new ge, this) : (wb = new ge, this.forEach((bb => {
          bb[Eb] ? wb.add(bb.clone()) : wb.add(bb)
        }))), wb
      }
    }
    Xw("set", {
      constructor: ge
    });
    class le {
      [Eb];
      [gb];
      [Fb];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= Kw()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= Kw()).priority = bb
      }
      static $isStream = !0;
      static[Lb] = SM;
      static[Ib] = oM;
      static COLLECTION_KIND = PM;
      static[Ob](bb, wb, Mb) {
        if (!Mb) return !0;
        const eb = bb[Ub](wb);
        return void 0 !== eb && Mb.isVisible(eb[Eb])
      }
      static is(bb) {
        return bb && void 0 !== bb.stream
      }
      constructor() {
        Object.defineProperty(this, Eb, {
          value: new YM(this),
          enumerable: !1,
          writable: !0
        }), this[Fb] = void 0
      }
      static initializeForDecoder() {
        const bb = Object.create(le.prototype);
        return bb.$items = new Map, bb.$nextPosition = 0, bb._itemIndex = new Map, bb[Fb] = void 0, fM(bb), bb
      }
      add(bb) {
        if (this._itemIndex.has(bb)) return -1;
        const wb = this.$nextPosition++;
        this.$items.set(wb, bb), this._itemIndex.set(bb, wb);
        const Mb = this[Eb].root;
        return void 0 !== bb[Eb] && bb[Eb].setParent(this, Mb, wb), void 0 !== Mb && Rw(this, Mb, wb), wb
      }
      remove(bb) {
        const wb = this._itemIndex.get(bb);
        if (void 0 === wb) return !1;
        this._itemIndex.delete(bb), this.$items.delete(wb);
        const Mb = this[Eb].root;
        return void 0 !== Mb && (Dw(this, Mb, this[gb], wb), void 0 !== bb[Eb] && Mb.remove(bb[Eb])), !0
      }
      has(bb) {
        return this._itemIndex.has(bb)
      }
      clear() {
        const bb = this[Eb].root;
        if (void 0 !== bb) {
          ! function(bb, wb, Mb) {
            const eb = bb._stream;
            if (void 0 !== eb) {
              eb.broadcastPending.clear();
              for (const bb of eb.sentBroadcast) eb.broadcastDeletes.add(bb);
              eb.sentBroadcast.clear(), wb.forEachActiveView((bb => {
                eb.pendingByView.get(bb.id)?.clear();
                const wb = eb.sentByView.get(bb.id);
                if (void 0 !== wb && wb.size > 0) {
                  let eb = bb.changes.get(Mb);
                  void 0 === eb && (eb = new Map, bb.changes.set(Mb, eb));
                  for (const bb of wb) eb.set(bb, Hb.DELETE);
                  wb.clear()
                }
              }))
            }
          }(this, bb, this[gb]);
          for (const wb of this.$items.values()) void 0 !== wb[Eb] && bb.remove(wb[Eb])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(bb) {
        for (const [wb, Mb] of this.$items) bb(Mb, wb, this)
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
      setIndex(bb, wb) {}
      getIndex(bb) {
        return bb
      } [Ub](bb) {
        return this.$items.get(bb)
      } [tb](bb) {
        const wb = this.$items.get(bb);
        void 0 !== wb && (this._itemIndex.delete(wb), this.$items.delete(bb))
      } [Cb]() {} [sb]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach((wb => {
          bb.push("function" === typeof wb?.toJSON ? wb.toJSON() : wb)
        })), bb
      }
      clone(bb) {
        if (bb) {
          return Object.assign(new le, this)
        }
        const wb = new le;
        return wb.maxPerTick = this.maxPerTick, this.forEach((bb => {
          wb.add("function" === typeof bb?.clone ? bb.clone() : bb)
        })), wb
      }
      _dropView(bb) {
        Aw(this, bb)
      }
      _unregister() {}
    }
    Xw("stream", {
      constructor: le
    });
    class Le {
      [Xb] = !0;
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
      constructor(bb) {
        this._type = bb
      }
      default (bb) {
        return this._default = bb, this._hasDefault = !0, this
      }
      view(bb) {
        return this._view = bb ?? -1, this
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
        const bb = this._type;
        if (bb && "object" === typeof bb && void 0 !== bb.array) throw new Error(jw);
        return this._stream = !0, this
      }
      priority(bb) {
        return this._streamPriority = bb, this
      }
      deprecated() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = bb, this
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

    function Ie(bb) {
      return null != bb && !0 === bb[Xb]
    }

    function Oe(bb) {
      return () => new Le(bb)
    }

    function Ue(bb) {
      if (Ie(bb)) {
        const wb = bb._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof wb?`use the type name instead: t.array("${wb}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return bb
    }

    function te(bb) {
      return new Le({
        quantized: Jw(bb)
      })
    }
    const Ce = Object.freeze({
        string: Oe("string"),
        number: Oe("number"),
        boolean: Oe("boolean"),
        int8: Oe("int8"),
        uint8: Oe("uint8"),
        int16: Oe("int16"),
        uint16: Oe("uint16"),
        int32: Oe("int32"),
        uint32: Oe("uint32"),
        int64: Oe("int64"),
        uint64: Oe("uint64"),
        float32: Oe("float32"),
        float64: Oe("float64"),
        bigint64: Oe("bigint64"),
        biguint64: Oe("biguint64"),
        ref: bb => new Le(bb),
        array: bb => new Le({
          array: Ue(bb)
        }),
        map: bb => new Le({
          map: Ue(bb)
        }),
        set: bb => new Le({
          set: Ue(bb)
        }),
        collection: bb => new Le({
          collection: Ue(bb)
        }),
        stream: bb => {
          const wb = new Le({
            stream: Ue(bb)
          });
          return wb._stream = !0, wb
        },
        quantized: te,
        angle: bb => te({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: bb?.bits ?? 16
        })
      }),
      Ee = -1;

    function Fe(bb) {
      return Gw.register(bb), bb
    }

    function Be() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee;
      return function(wb, Mb) {
        const eb = nw.initialize(wb.constructor);
        nw.setTag(eb, Mb, bb)
      }
    }

    function se(bb, wb) {
      const Mb = nw.initialize(bb.constructor);
      nw.setUnreliable(Mb, wb)
    }

    function me(bb, wb) {
      const Mb = nw.initialize(bb.constructor);
      nw.setPatchOnly(Mb, wb)
    }

    function he(bb, wb) {
      const Mb = nw.initialize(bb.constructor);
      nw.setFullStateOnly(Mb, wb)
    }

    function ze(bb, wb) {
      return function(Mb, eb) {
        const Hb = Mb.constructor;
        if (!bb) throw new Error(`${Hb.name}: @type() reference provided for "${eb}" is undefined. Make sure you don't have any circular dependencies.`);
        bb = aw(bb, `${Hb.name}.${eb}`), Gw.register(Hb);
        const pb = Object.getPrototypeOf(Hb)[Symbol.metadata],
          Vb = nw.initialize(Hb);
        let gb = Vb[eb];
        if (void 0 !== Vb[gb]) {
          if (Vb[gb].deprecated) return;
          if (void 0 !== Vb[gb].type) {
            const bb = new Error(`@colyseus/schema: Duplicate '${eb}' definition on '${Hb.name}'.\nCheck @type() annotation`);
            throw new Error(`${bb.message} ${bb.stack.split("\n")[4].trim()}`)
          }
        } else gb = Vb[rb] ?? (pb && pb[rb]) ?? -1, gb++;
        if (wb && wb.manual) nw.addField(Vb, gb, eb, bb, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: wb,
            childType: Mb
          } = qw(bb);
          nw.addField(Vb, gb, eb, bb, xe(eb, gb, Mb, wb))
        }
        Vb[xb][eb] && Object.defineProperty(Mb, eb, Vb[xb][eb]), ("string" === typeof bb || Sw(bb)) && (Vb[Kb] || Object.defineProperty(Vb, Kb, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Vb[Kb][gb] = "string" === typeof bb ? ww[bb] : Qw(bb.quantized))
      }
    }
    const Xe = {
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

    function xe(bb, wb, Mb, eb) {
      let pb;
      return pb = eb ? function(bb, wb, Mb, eb) {
        const pb = eb.constructor === ee,
          Vb = eb.constructor === pe;
        return function(bb) {
          const eb = this[zb],
            gb = eb[wb];
          if (bb !== gb) {
            if (void 0 !== bb && null !== bb) {
              if (!pb || bb instanceof ee)
                if (!Vb || bb instanceof pe) bb[Fb] = Mb;
                else {
                  const wb = new pe;
                  if (wb[Fb] = Mb, bb instanceof Map) bb.forEach(((bb, Mb) => wb.set(Mb, bb)));
                  else
                    for (const Mb in bb) wb.set(Mb, bb[Mb]);
                  bb = wb
                }
              else {
                const wb = new ee;
                wb[Fb] = Mb, wb.push(...bb), bb = wb
              }
              const eb = this[Eb],
                Lb = this.constructor;
              void 0 !== gb && null !== gb && gb[Eb] ? (eb.root?.remove(gb[Eb]), Lb[lb](eb, wb, Hb.DELETE_AND_ADD)) : Lb[lb](eb, wb, Hb.ADD), bb[Eb]?.setParent(this, eb.root, wb)
            } else void 0 !== gb && null !== gb && this[Eb].delete(wb);
            eb[wb] = bb
          }
        }
      }(0, wb, Mb, eb) : "string" === typeof Mb ? function(bb, wb, Mb) {
        const eb = Xe[Mb],
          pb = "string" === Mb,
          Vb = "boolean" === Mb;
        return function(Mb) {
          const gb = this[zb],
            Lb = gb[wb];
          if (Mb !== Lb) {
            if (void 0 !== Mb && null !== Mb) {
              if (!Vb && void 0 !== eb && typeof Mb !== eb && (!pb || null !== Mb)) {
                const wb = Mb && Mb.constructor ? ` (${Mb.constructor.name})` : "";
                throw new kM(`a '${eb}' was expected, but '${JSON.stringify(Mb)}'${wb} was provided in ${this.constructor.name}#${bb}`)
              }
              this.constructor[lb](this[Eb], wb, Hb.ADD)
            } else void 0 !== Lb && null !== Lb && this[Eb].delete(wb);
            gb[wb] = Mb
          }
        }
      }(bb, wb, Mb) : Sw(Mb) ? function(bb, wb, Mb) {
        return function(eb) {
          const pb = this[zb],
            Vb = pb[wb];
          if (void 0 !== eb && null !== eb) {
            if ("number" !== typeof eb) throw new kM(`a 'number' was expected, but '${JSON.stringify(eb)}' was provided in ${this.constructor.name}#${bb}`);
            if ((eb = vw(Mb, Nw(Mb, eb))) === Vb) return;
            this.constructor[lb](this[Eb], wb, Hb.ADD)
          } else {
            if (eb === Vb) return;
            void 0 !== Vb && null !== Vb && this[Eb].delete(wb)
          }
          pb[wb] = eb
        }
      }(bb, wb, Mb.quantized) : function(bb, wb, Mb) {
        return function(eb) {
          const pb = this[zb],
            Vb = pb[wb];
          if (eb !== Vb) {
            if (void 0 !== eb && null !== eb) {
              be(eb, Mb, this, bb);
              const pb = this[Eb],
                gb = this.constructor;
              void 0 !== Vb && null !== Vb && Vb[Eb] ? (pb.root?.remove(Vb[Eb]), gb[lb](pb, wb, Hb.DELETE_AND_ADD)) : gb[lb](pb, wb, Hb.ADD), eb[Eb]?.setParent(this, pb.root, wb)
            } else void 0 !== Vb && null !== Vb && this[Eb].delete(wb);
            pb[wb] = eb
          }
        }
      }(bb, wb, Mb), {
        get: function() {
          return this[zb][wb]
        },
        set: pb,
        enumerable: !0,
        configurable: !0
      }
    }

    function je() {
      let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(wb, Mb) {
        const eb = nw.initialize(wb.constructor);
        nw.setDeprecated(eb, Mb), bb && (eb[xb] ??= {}, eb[xb][Mb] = {
          get: function() {
            throw new Error(`${Mb} is deprecated.`)
          },
          set: function(bb) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(wb, Mb, eb[xb][Mb]))
      }
    }
    let Ke = !1;

    function re(bb, wb, Mb) {
      Ke || (Ke = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let eb in wb) ze(wb[eb], Mb)(bb.prototype, eb);
      return bb
    }

    function Re(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ce;
      if (null == bb || "object" !== typeof bb) throw new Error(`schema(): first argument must be a fields object (got ${typeof bb}).`);
      const eb = {},
        Hb = {},
        pb = {},
        Vb = {},
        gb = (bb, wb) => {
          if (wb.hasDefault)((bb, wb) => {
            "function" === typeof wb ? Vb[bb] = wb : wb && "function" === typeof wb.clone ? Vb[bb] = () => wb.clone() : pb[bb] = wb
          })(bb, wb.default);
          else if (!wb.optional) {
            const Mb = function(bb) {
              if (bb && "object" === typeof bb) {
                if (void 0 !== bb.array) return () => new ee;
                if (void 0 !== bb.map) return () => new pe;
                if (void 0 !== bb.set) return () => new ge;
                if (void 0 !== bb.collection) return () => new Ve;
                if (void 0 !== bb.stream) return () => new le
              } else if ("function" === typeof bb && ce.is(bb) && (!bb.prototype.initialize || 0 === bb.prototype.initialize.length)) return () => new bb
            }(wb.type);
            Mb && (Vb[bb] = Mb)
          }
        },
        lb = {},
        Lb = [],
        Ib = [],
        Ob = {},
        Ub = [],
        tb = [],
        Cb = {},
        Eb = [];
      for (const zb in bb) {
        const Mb = bb[zb],
          pb = `schema(${wb?`'${wb}'`:""}): field '${zb}'`;
        if (Ie(Mb)) {
          const bb = Mb.toDefinition();
          if (bb.noSync) {
            if (void 0 !== bb.view || bb.unreliable || bb.patchOnly || bb.fullStateOnly || bb.stream) throw new Error(`${pb} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            gb(zb, bb);
            continue
          }
          if (bb.patchOnly && bb.fullStateOnly) throw new Error(`${pb} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const wb = aw(bb.type, pb);
          if ("function" === typeof wb && !ce.is(wb)) throw new Error(`${pb} is a synced ref to non-Schema class '${wb.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          eb[zb] = wb, void 0 !== bb.view && (lb[zb] = bb.view), bb.unreliable && Lb.push(zb), bb.patchOnly && Ib.push(zb), bb.deprecated && (Ob[zb] = bb.deprecatedThrows), bb.fullStateOnly && Ub.push(zb), bb.stream && tb.push(zb), void 0 !== bb.streamPriority && (Cb[zb] = bb.streamPriority), bb.optional && Eb.push(zb), gb(zb, bb)
        } else {
          if ("function" !== typeof Mb) throw new Error(`${pb} must be a t.* builder, Schema subclass, or method (got ${typeof Mb}).`);
          ce.is(Mb) ? (eb[zb] = Mb, Mb.prototype.initialize && 0 !== Mb.prototype.initialize.length || (Vb[zb] = () => new Mb)) : Hb[zb] = Mb
        }
      }
      const Fb = bb => {
          for (const wb in pb) bb[wb] = pb[wb];
          for (const wb in Vb) bb[wb] = Vb[wb]()
        },
        Bb = () => {
          const bb = {};
          return Fb(bb), bb
        },
        sb = "function" === typeof Hb.initialize,
        mb = Hb.initialize ?? Mb._initialize,
        hb = class extends Mb {
          constructor() {
            for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
            const Hb = wb[0];
            void 0 === Hb ? (super(), Fb(this)) : super(Object.assign(Bb(), sb ? (bb => {
              const wb = Object.keys(eb),
                Mb = {};
              for (const eb in bb) wb.includes(eb) || (Mb[eb] = bb[eb]);
              return Mb
            })(Hb) : Hb)), mb && new.target === hb && mb.apply(this, wb)
          }
        };
      wb && Object.defineProperty(hb, "name", {
        value: wb
      }), nw.setFields(hb, eb), hb._getDefaultValues = Bb, hb._initialize = mb, Object.assign(hb.prototype, Hb);
      for (const zb in lb) Be(lb[zb])(hb.prototype, zb);
      for (const zb of Lb) se(hb.prototype, zb);
      for (const zb of Ib) me(hb.prototype, zb);
      for (const zb in Ob) je(Ob[zb])(hb.prototype, zb);
      if (Ub.length > 0 || tb.length > 0) {
        const bb = hb[Symbol.metadata];
        for (const wb of Ub) nw.setFullStateOnly(bb, wb);
        for (const wb of tb) nw.setStream(bb, wb);
        for (const wb in Cb) nw.setStreamPriority(bb, wb, Cb[wb])
      }
      if (Eb.length > 0) {
        const bb = hb[Symbol.metadata];
        for (const wb of Eb) bb[bb[wb]].optional = !0
      }
      return hb.extend = (bb, wb) => Re(bb, wb, hb), hb
    }

    function De(bb) {
      const wb = bb[Eb].root,
        Mb = {
          ops: {},
          refs: []
        };
      let eb = wb.changes.next;
      for (; eb;) {
        const bb = eb.changeTree;
        void 0 !== bb ? (Mb.refs.push(`refId#${bb.ref[gb]}`), bb.forEach(((bb, wb) => {
          if (bb < 0 || !wb) return;
          const eb = Hb[wb];
          Mb.ops[eb] || (Mb.ops[eb] = 0), Mb.ops[eb]++
        })), eb = eb.next) : eb = eb.next
      }
      return Mb
    }
    class ce {
      static[Lb] = WM;
      static[Ib] = yM;
      [gb];
      [zb];
      static initialize(bb) {
        Object.defineProperty(bb, Eb, {
          value: new YM(bb),
          enumerable: !1,
          writable: !0
        }), bb[zb] = []
      }
      static initializeForDecoder() {
        const bb = Object.create(this.prototype);
        return fM(bb), bb[zb] = [], bb
      }
      static reset(bb) {
        const wb = bb?.[Eb];
        if (void 0 === wb || "function" !== typeof wb.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== wb.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${bb.constructor.name}) with multiple parents.`);
        bb[mb]()
      } [mb]() {
        const bb = this.constructor[Symbol.metadata],
          wb = bb?.[Rb] ?? [],
          Mb = this[zb];
        for (let eb = 0; eb < wb.length; eb++) {
          const bb = Mb[wb[eb]];
          bb?.[mb]?.()
        }
        this[Eb].recycle(), this[gb] = void 0
      }
      static is(bb) {
        const wb = bb[Symbol.metadata];
        return "object" === typeof wb && null !== wb
      }
      static isSchema(bb) {
        return "function" === typeof bb?.assign
      }
      static[lb](bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hb.ADD;
        bb.change(wb, Mb)
      }
      static[Ob](bb, wb, Mb) {
        const eb = bb.constructor[Symbol.metadata],
          Hb = eb[wb]?.tag;
        return void 0 === Mb ? void 0 === Hb : void 0 === Hb || (Hb === Ee ? Mb.isChangeTreeVisible(bb[Eb]) : Mb.hasTagOnTree(bb[Eb], Hb))
      }
      constructor(bb) {
        ce.initialize(this), bb && ce.assignProps(this, bb)
      }
      assign(bb) {
        return ce.assignProps(this, bb), this
      }
      static assignProps(bb, wb) {
        const Mb = bb.constructor[Symbol.metadata];
        if (Mb && void 0 !== Mb[rb])
          for (let Hb = 0; Hb <= Mb[rb]; Hb++) {
            const eb = Mb[Hb];
            if (!eb) continue;
            const pb = wb[eb.name];
            void 0 !== pb && (bb[eb.name] = pb)
          }
        const eb = Object.keys(wb);
        for (let Hb = 0; Hb < eb.length; Hb++) {
          const pb = eb[Hb];
          Mb && void 0 !== Mb[pb] || (bb[pb] = wb[pb])
        }
      }
      restore(bb) {
        const wb = this.constructor[Symbol.metadata];
        for (const Mb in wb) {
          const eb = wb[Mb],
            Hb = eb.name,
            pb = eb.type,
            Vb = bb[Hb];
          if (void 0 !== Vb && null !== Vb)
            if ("string" === typeof pb) this[Hb] = Vb;
            else if (ce.is(pb)) {
            const bb = new pb;
            bb.restore(Vb), this[Hb] = bb
          } else if ("object" === typeof pb) {
            const bb = Object.keys(pb)[0],
              wb = pb[bb];
            if ("map" === bb) {
              const bb = this[Hb];
              for (const Mb in Vb)
                if (ce.is(wb)) {
                  const eb = new wb;
                  eb.restore(Vb[Mb]), bb.set(Mb, eb)
                } else bb.set(Mb, Vb[Mb])
            } else if ("array" === bb) {
              const bb = this[Hb];
              for (let Mb = 0; Mb < Vb.length; Mb++)
                if (ce.is(wb)) {
                  const eb = new wb;
                  eb.restore(Vb[Mb]), bb.push(eb)
                } else bb.push(Vb[Mb])
            }
          }
        }
        return this
      }
      setDirty(bb, wb) {
        const Mb = this.constructor[Symbol.metadata];
        this[Eb].change(Mb[Mb[bb]].index, wb)
      }
      pauseTracking() {
        this[Eb].pause()
      }
      resumeTracking() {
        this[Eb].resume()
      }
      untracked(bb) {
        return this[Eb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[Eb].paused
      }
      clone() {
        const bb = Object.create(this.constructor.prototype);
        ce.initialize(bb);
        const wb = this.constructor[Symbol.metadata];
        for (const Mb in wb) {
          const eb = wb[Mb].name;
          "object" === typeof this[eb] && "function" === typeof this[eb]?.clone ? bb[eb] = this[eb].clone() : bb[eb] = this[eb]
        }
        return bb
      }
      toJSON() {
        const bb = {},
          wb = this.constructor[Symbol.metadata];
        for (const Mb in wb) {
          const eb = wb[Mb],
            Hb = eb.name;
          eb.deprecated || null === this[Hb] || "undefined" === typeof this[Hb] || (bb[Hb] = "function" === typeof this[Hb].toJSON ? this[Hb].toJSON() : this[Hb])
        }
        return bb
      }
      discardAllChanges() {
        this[Eb].discardAll()
      } [Ub](bb) {
        return this[this.constructor[Symbol.metadata][bb].name]
      } [tb](bb) {
        this[this.constructor[Symbol.metadata][bb].name] = void 0
      }
      static debugRefIds(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 ? arguments[3] : void 0,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const pb = wb ? ` - ${JSON.stringify(bb.toJSON())}` : "",
          Vb = bb[Eb],
          lb = bb[gb],
          Lb = eb ? eb.root.refCount[lb] : Vb.refCount,
          Ib = Lb > 1 ? ` [\xd7${Lb}]` : "";
        let Ob = `${function(bb){return new Array(bb).fill(0).map(((wb,Mb)=>Mb===bb-1?"\u2514\u2500 ":"   ")).join("")}(Mb)}${Hb}${bb.constructor.name} (refId: ${lb})${Ib}${pb}\n`;
        return Vb.forEachChild(((Hb, pb) => {
          let Vb = pb;
          "number" === typeof pb && bb.$indexes && (Vb = bb.$indexes.get(pb) ?? pb);
          const gb = void 0 !== bb.forEach && void 0 !== Vb ? `["${Vb}"]: ` : "";
          Ob += this.debugRefIds(Hb.ref, wb, Mb + 1, eb, gb)
        })), Ob
      }
      static debugRefIdEncodingOrder(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const Mb = [],
          eb = bb[Eb];
        if ("changes" === wb) {
          let bb = eb.root.changes?.next;
          for (; bb;) bb.changeTree && Mb.push(bb.changeTree.ref[gb]), bb = bb.next;
          return Mb
        }
        const Hb = "allFilteredChanges" === wb,
          pb = new Set,
          Vb = bb => {
            pb.has(bb) || (pb.add(bb), bb.isFiltered === Hb && Mb.push(bb.ref[gb]), bb.forEachChild(((bb, wb) => Vb(bb))))
          };
        return Vb(eb), Mb
      }
      static debugRefIdsFromDecoder(bb) {
        return this.debugRefIds(bb.state, !1, 0, bb)
      }
      static debugChanges(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = bb[Eb],
          eb = wb ? "allChanges" : "changes";
        let pb = `${bb.constructor.name} (${bb[gb]}) -> .${eb}:\n`;
        return wb ? Mb.forEachLive((bb => {
          pb += `- [${bb}]: ADD (${JSON.stringify(Mb.getValue(Number(bb),!0))})\n`
        })) : Mb.forEach(((bb, wb) => {
          bb < 0 || !wb || (pb += `- [${bb}]: ${Hb[wb]} (${JSON.stringify(Mb.getValue(Number(bb),!1))})\n`)
        })), pb
      }
    }
    pb(ce);
    const Ye = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Ze {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const bb = {};
        for (const wb in this.changeTrees) bb[wb] = this.changeTrees[wb].refCount;
        return bb
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
      enqueueFilterRefresh(bb) {
        this.types.hasFilters && (bb.flags & DM || (bb.flags |= DM, this.pendingFilterRefresh.push(bb)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(bb) {
        this._freeViewIds.push(bb)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(bb) {
        this.activeViews.set(bb.id, new WeakRef(bb))
      }
      unregisterView(bb) {
        this.activeViews.delete(bb.id);
        const wb = bb.id;
        for (const Mb of this.streamTrees) Mb._dropView(wb)
      }
      forEachActiveView(bb) {
        for (const [wb, Mb] of this.activeViews) {
          const eb = Mb.deref();
          if (void 0 !== eb) bb(eb);
          else {
            this.activeViews.delete(wb);
            for (const bb of this.streamTrees) bb._dropView(wb)
          }
        }
      }
      registerStream(bb) {
        this.streamTrees.add(bb)
      }
      unregisterStream(bb) {
        this.streamTrees.delete(bb)
      }
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = bb, this.nextUniqueId = wb
      }
      add(bb) {
        const wb = bb.ref;
        void 0 === wb[gb] && (Ye.value = this.nextUniqueId++, Object.defineProperty(wb, gb, Ye));
        const Mb = wb[gb],
          eb = void 0 === this.changeTrees[Mb];
        eb && (this.changeTrees[Mb] = bb), bb.needsRestage && (bb.needsRestage = !1, bb.forEachLiveWithCtx(bb, eM));
        const Hb = eb ? 0 : bb.refCount;
        return bb.refCount = Hb + 1, Hb > 0 && this.enqueueFilterRefresh(bb), eb
      }
      remove(bb) {
        const wb = bb.refCount - 1;
        if (wb <= 0) {
          if (bb.root = void 0, delete this.changeTrees[bb.ref[gb]], bb.isStreamCollection) {
            const wb = bb.ref;
            wb._unregister?.(), this.unregisterStream(wb)
          }
          this.removeFromQueue(bb), this.removeFromUnreliableQueue(bb), bb.refCount = 0, bb.needsRestage = !0, bb.forEachChild(((wb, Mb) => {
            wb.removeParent(bb.ref) && (void 0 === wb.parentRef || wb.refCount > 0 ? this.remove(wb) : this.moveNextToParent(wb))
          }))
        } else bb.refCount = wb, this.enqueueFilterRefresh(bb), this.recursivelyMoveNextToParent(bb);
        return wb
      }
      recursivelyMoveNextToParent(bb) {
        this.moveNextToParent(bb), bb.forEachChild(((bb, wb) => this.recursivelyMoveNextToParent(bb)))
      }
      moveNextToParent(bb) {
        bb.changesNode && this._moveNextToParentInList(this.changes, bb, bb.changesNode, "changesNode"), bb.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, bb, bb.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(bb, wb, Mb, eb) {
        const Hb = wb.parent;
        if (!Hb || !Hb[Eb]) return;
        const pb = Hb[Eb][eb];
        pb && pb !== Mb && (Mb.position > pb.position || (Mb.prev ? Mb.prev.next = Mb.next : bb.next = Mb.next, Mb.next ? Mb.next.prev = Mb.prev : bb.tail = Mb.prev, Mb.prev = bb.tail, Mb.next = void 0, bb.tail.next = Mb, bb.tail = Mb, Mb.position = bb.nextPosition++))
      }
      enqueueChangeTree(bb) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.changesNode) || (bb.changesNode = this._appendToList(this.changes, bb))
      }
      enqueueUnreliable(bb) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.unreliableChangesNode) || (bb.unreliableChangesNode = this._appendToList(this.unreliableChanges, bb))
      }
      _appendToList(bb, wb) {
        const Mb = this._nodePool;
        let eb;
        return Mb.length > 0 ? (eb = Mb.pop(), eb.changeTree = wb, eb.next = void 0, eb.prev = void 0) : eb = {
          changeTree: wb,
          next: void 0,
          prev: void 0,
          position: 0
        }, bb.next ? (eb.prev = bb.tail, bb.tail.next = eb, bb.tail = eb) : (bb.nextPosition = 0, bb.next = eb, bb.tail = eb), eb.position = bb.nextPosition++, eb
      }
      releaseNode(bb) {
        bb.changeTree = void 0, bb.prev = void 0, bb.next = void 0, this._nodePool.push(bb)
      }
      removeFromQueue(bb) {
        return this._removeNode(this.changes, bb, bb.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(bb) {
        return this._removeNode(this.unreliableChanges, bb, bb.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(bb, wb, Mb, eb) {
        return !(!Mb || Mb.changeTree !== wb) && (Mb.prev ? Mb.prev.next = Mb.next : bb.next = Mb.next, Mb.next ? Mb.next.prev = Mb.prev : bb.tail = Mb.prev, wb[eb] = void 0, this.releaseNode(Mb), !0)
      }
    }

    function fe(bb, wb) {
      if (-1 === wb || wb >= bb.length) return !1;
      const Mb = bb.length - 1;
      for (let eb = wb; eb < Mb; eb++) bb[eb] = bb[eb + 1];
      return bb.length = Mb, !0
    }

    function Ae(bb, wb, Mb) {
      const eb = ~Mb,
        Hb = bb.changeTrees;
      for (const pb in Hb) {
        const bb = Hb[pb],
          Mb = bb.visibleViews;
        void 0 !== Mb && wb < Mb.length && (Mb[wb] &= eb);
        const Vb = bb.subscribedViews;
        void 0 !== Vb && wb < Vb.length && (Vb[wb] &= eb);
        const gb = bb.tagViews;
        void 0 !== gb && gb.forEach((bb => {
          wb < bb.length && (bb[wb] &= eb)
        }))
      }
    }
    const We = new FinalizationRegistry((bb => {
      let {
        root: wb,
        id: Mb,
        slot: eb,
        bit: Hb
      } = bb;
      Ae(wb, eb, Hb), wb.activeViews.delete(Mb);
      for (const pb of wb.streamTrees) pb._dropView(Mb);
      wb.releaseViewId(Mb)
    }));

    function Je(bb) {
      if (void 0 === bb) return "undefined";
      if (null === bb) return "null";
      const wb = typeof bb;
      return "string" === wb ? JSON.stringify(bb.length > 30 ? `${bb.slice(0,30)}\u2026` : bb) : "object" !== wb && "function" !== wb ? `${wb} ${String(bb)}` : Array.isArray(bb) ? `Array(${bb.length})` : bb.constructor?.name ?? "Object"
    }
    class Se {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = bb, bb && (this.items = [])
      }
      _bindRoot(bb) {
        void 0 === this._root && (this._root = bb, this.id = bb.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), bb.registerView(this), We.register(this, {
          root: bb,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), Ae(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), We.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(bb) {
        const wb = bb.visibleViews,
          Mb = this._slot;
        return void 0 !== wb && Mb < wb.length && 0 !== (wb[Mb] & this._bit)
      }
      markVisible(bb) {
        const wb = this._slot;
        let Mb = bb.visibleViews;
        for (void 0 === Mb && (Mb = bb.visibleViews = []); Mb.length <= wb;) Mb.push(0);
        Mb[wb] |= this._bit
      }
      unmarkVisible(bb) {
        const wb = bb.visibleViews;
        if (void 0 === wb) return;
        const Mb = this._slot;
        Mb < wb.length && (wb[Mb] &= ~this._bit)
      }
      isSubscribed(bb) {
        const wb = bb.subscribedViews,
          Mb = this._slot;
        return void 0 !== wb && Mb < wb.length && 0 !== (wb[Mb] & this._bit)
      }
      _setSubscribed(bb) {
        const wb = this._slot;
        let Mb = bb.subscribedViews;
        for (void 0 === Mb && (Mb = bb.subscribedViews = []); Mb.length <= wb;) Mb.push(0);
        Mb[wb] |= this._bit
      }
      _clearSubscribed(bb) {
        const wb = bb.subscribedViews;
        if (void 0 === wb) return;
        const Mb = this._slot;
        Mb < wb.length && (wb[Mb] &= ~this._bit)
      }
      hasTagOnTree(bb, wb) {
        const Mb = bb.tagViews;
        if (void 0 === Mb) return !1;
        const eb = this._slot,
          Hb = this._bit;
        for (let pb = wb; 0 !== pb; pb &= pb - 1) {
          const bb = Mb.get(pb & -pb);
          if (void 0 !== bb && eb < bb.length && 0 !== (bb[eb] & Hb)) return !0
        }
        return !1
      }
      addTag(bb, wb) {
        if (wb === Ee) return;
        let Mb = bb.tagViews;
        void 0 === Mb && (Mb = bb.tagViews = new Map);
        const eb = this._slot,
          Hb = this._bit;
        for (let pb = wb; pb > 0; pb &= pb - 1) {
          const bb = pb & -pb;
          let wb = Mb.get(bb);
          for (void 0 === wb && (wb = [], Mb.set(bb, wb)); wb.length <= eb;) wb.push(0);
          wb[eb] |= Hb
        }
      }
      removeTag(bb, wb) {
        if (wb === Ee) return;
        const Mb = bb.tagViews;
        if (void 0 === Mb) return;
        const eb = this._slot,
          Hb = ~this._bit;
        for (let pb = wb; pb > 0; pb &= pb - 1) {
          const bb = Mb.get(pb & -pb);
          void 0 !== bb && eb < bb.length && (bb[eb] &= Hb)
        }
      }
      removeAllTagsOnTree(bb) {
        const wb = bb.tagViews;
        if (void 0 === wb) return;
        const Mb = this._slot,
          eb = ~this._bit;
        wb.forEach((bb => {
          Mb < bb.length && (bb[Mb] &= eb)
        }))
      }
      add(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ee,
          Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(bb, wb, Mb, !1)
      }
      _addImmediate(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ee;
        this._add(bb, wb, !0, !0)
      }
      _add(bb, wb, Mb, eb) {
        const pb = bb?.[Eb];
        if (!pb) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${Je(bb)}`), !1;
        const Vb = pb.parent;
        if (!Vb && 0 !== bb[gb]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${pb.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== pb.root && this._bindRoot(pb.root);
        const lb = Vb?.[Eb];
        if (!eb && lb?.isStreamCollection) return fw(Vb, this.id, pb.parentIndex), !0;
        const Lb = bb.constructor[Symbol.metadata],
          Ib = this.isVisible(pb);
        if (!this.iterable || !Mb || Ib && -1 !== this.items.indexOf(bb) || this.items.push(bb), this.markVisible(pb), Mb && Vb && this.addParentOf(pb, wb), !eb && pb.isStreamCollection) return !0;
        if (wb === Ee && pb.isNew) return this._markSubtreeVisible(pb, wb), !1;
        let Ob = this.changes.get(bb[gb]);
        void 0 === Ob && (Ob = new Map, this.changes.set(bb[gb], Ob));
        let Ub = !1;
        const tb = pb.encDescriptor.tags;
        if (pb.forEachChild(((bb, Mb) => {
            const eb = tb[Mb];
            if (void 0 !== eb) {
              if (!(eb === Ee || wb !== Ee && 0 !== (eb & wb))) return
            }
            this.add(bb.ref, wb, !1) && (Ub = !0)
          })), wb !== Ee) {
          this.addTag(pb, wb);
          const bb = Lb?.[cb];
          if (void 0 !== bb)
            for (let Mb = wb; Mb > 0; Mb &= Mb - 1) bb[Mb & -Mb]?.forEach((bb => {
              pb.getChange(bb) !== Hb.DELETE && Ob.set(bb, Hb.ADD)
            }))
        }
        if ((wb === Ee || !Ib) && (!pb.isNew || Ub))
          if (pb.isArray && "string" !== typeof pb.refTarget[Fb]) pb.refTarget.items.length > 0 && (Ob.set(-1, Hb.ADD), Ub = !0);
          else {
            const bb = pb.encDescriptor.tags;
            pb.forEachLive((Mb => {
              const eb = bb[Mb];
              (void 0 === eb || eb === Ee || wb !== Ee && 0 !== (eb & wb)) && (Ob.set(Mb, Hb.ADD), Ub = !0)
            }))
          } return Ub
      }
      _markSubtreeVisible(bb, wb) {
        const Mb = bb.encDescriptor.tags;
        bb.forEachChild(((bb, eb) => {
          const Hb = Mb[eb];
          if (void 0 !== Hb) {
            if (!(Hb === Ee || wb !== Ee && 0 !== (Hb & wb))) return
          }
          bb.isNew ? (this.markVisible(bb), this._markSubtreeVisible(bb, wb)) : this._add(bb.ref, wb, !1, !1)
        }))
      }
      addParentOf(bb, wb) {
        const Mb = bb.parent[Eb],
          eb = bb.parentIndex;
        this.isVisible(Mb) || this.markVisible(Mb);
        const pb = Mb.parent?.[Eb];
        if (pb && this.addParentOf(Mb, wb), Mb.hasFilteredFields && Mb.getChange(eb) !== Hb.DELETE) {
          let pb = this.changes.get(Mb.ref[gb]);
          void 0 === pb && (pb = new Map, this.changes.set(Mb.ref[gb], pb));
          const Vb = Mb.encDescriptor.tags[eb];
          void 0 !== Vb && Vb !== Ee && 0 !== (Vb & wb) && this.addTag(Mb, wb), pb.set(Mb.isArray ? bb : eb, Hb.ADD)
        }
      }
      _touchAncestorsOf(bb) {
        let wb = bb.parent?.[Eb];
        if (void 0 === wb) return;
        const Mb = [];
        for (; void 0 !== wb;) {
          if (wb.hasFilteredFields) {
            const bb = wb.ref[gb];
            if (this.changes.has(bb)) break;
            Mb.push(wb)
          }
          wb = wb.parent?.[Eb]
        }
        for (let eb = Mb.length - 1; eb >= 0; eb--) this.changes.set(Mb[eb].ref[gb], new Map)
      }
      remove(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ee,
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = bb?.[Eb];
        if (!eb) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${Je(bb)}`), this;
        const pb = eb.parent?.[Eb];
        if (pb?.isStreamCollection) return this.unmarkVisible(eb), this.iterable && !Mb && fe(this.items, this.items.indexOf(bb)),
          function(bb, wb, Mb, eb, pb) {
            const Vb = bb._stream;
            if (void 0 === Vb) return !1;
            const gb = Vb.pendingByView.get(wb);
            if (gb?.has(eb)) return gb.delete(eb), !1;
            const lb = Vb.sentByView.get(wb);
            if (lb?.has(eb)) {
              lb.delete(eb);
              let bb = pb.get(Mb);
              return void 0 === bb && (bb = new Map, pb.set(Mb, bb)), bb.set(eb, Hb.DELETE), !0
            }
          }(eb.parent, this.id, eb.parent[gb], eb.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(eb), this;
        if (eb.isStreamCollection) {
          this.unmarkVisible(eb), this.iterable && !Mb && fe(this.items, this.items.indexOf(bb));
          const wb = eb.ref,
            pb = wb._stream;
          if (void 0 !== pb) {
            pb.pendingByView.get(this.id)?.clear();
            const bb = pb.sentByView.get(this.id);
            if (void 0 !== bb && bb.size > 0) {
              const Mb = wb[gb];
              let eb = this.changes.get(Mb);
              void 0 === eb && (eb = new Map, this.changes.set(Mb, eb));
              for (const wb of bb) eb.set(wb, Hb.DELETE);
              bb.clear()
            }
          }
          return this
        }
        this.unmarkVisible(eb), this.iterable && !Mb && fe(this.items, this.items.indexOf(bb));
        const Vb = eb.ref,
          lb = Vb.constructor[Symbol.metadata],
          Lb = Vb[gb];
        this._touchAncestorsOf(eb);
        let Ib = this.changes.get(Lb);
        if (void 0 === Ib && (Ib = new Map, this.changes.set(Lb, Ib)), wb === Ee) {
          const bb = eb.parent;
          if (bb && !nw.isValidInstance(bb) && eb.isFiltered) {
            const wb = pb.isArray ? eb : eb.parentIndex,
              Mb = bb[gb];
            let Vb = this.changes.get(Mb);
            void 0 === Vb ? (Vb = new Map, this.changes.set(Mb, Vb)) : Vb.get(wb) === Hb.ADD && this._dropPendingEntries(eb), Vb.set(wb, Hb.DELETE), this._recursiveDeleteVisibleChangeTree(eb)
          } else lb?.[Db]?.forEach((bb => this._removeViewField(eb, Ib, bb)))
        } else {
          const bb = lb?.[cb];
          if (void 0 !== bb)
            for (let Mb = wb; Mb > 0; Mb &= Mb - 1) bb[Mb & -Mb]?.forEach((bb => this._removeViewField(eb, Ib, bb)))
        }
        return void 0 === wb ? this.removeAllTagsOnTree(eb) : this.removeTag(eb, wb), this
      }
      has(bb) {
        return this.isVisible(bb[Eb])
      }
      hasTag(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ee;
        return this.hasTagOnTree(bb[Eb], wb)
      }
      subscribe(bb, wb) {
        const Mb = bb?.[Eb];
        if (!Mb) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${Je(bb)}`), this;
        if (void 0 === this._root && void 0 !== Mb.root && this._bindRoot(Mb.root), void 0 !== wb)
          if (Mb.isStreamCollection) {
            const Mb = rw(bb);
            null === wb ? Mb.priorityByView?.delete(this.id) : (Mb.priorityByView ??= new Map).set(this.id, wb)
          } else {
            const wb = bb?.constructor?.name ?? "collection",
              eb = Mb.parent;
            if (void 0 === eb) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${wb} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const bb = eb?.constructor?.[Symbol.metadata]?.[Mb.parentIndex]?.name,
                Hb = bb ? `${eb.constructor.name}#${bb}` : wb;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Hb} is a ${wb}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(Mb)) return this;
        const eb = void 0 !== Mb.parent && !this.isVisible(Mb);
        if (eb ? (this.addParentOf(Mb, Ee), this._add(bb, Ee, !1, !1)) : this.markVisible(Mb), this._setSubscribed(Mb), Mb.isStreamCollection) {
          const wb = bb;
          Mb.forEachChild(((bb, Mb) => {
            fw(wb, this.id, Mb)
          }))
        } else eb || Mb.forEachChild((bb => {
          this.markVisible(bb)
        }));
        return this
      }
      unsubscribe(bb) {
        const wb = bb?.[Eb];
        if (!wb) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${Je(bb)}`), this;
        if (!this.isSubscribed(wb)) return this;
        this._clearSubscribed(wb);
        const Mb = wb.ref[gb];
        if (wb.isStreamCollection) {
          const wb = bb._stream;
          if (void 0 !== wb) {
            wb.pendingByView.get(this.id)?.clear();
            const bb = wb.sentByView.get(this.id);
            if (void 0 !== bb && bb.size > 0) {
              let wb = this.changes.get(Mb);
              void 0 === wb && (wb = new Map, this.changes.set(Mb, wb));
              for (const Mb of bb) wb.set(Mb, Hb.DELETE);
              bb.clear()
            }
          }
        } else {
          const bb = wb.isArray;
          let eb = this.changes.get(Mb);
          wb.forEachChild(((wb, pb) => {
            void 0 === eb && (eb = new Map, this.changes.set(Mb, eb)), eb.set(bb ? wb : pb, Hb.DELETE), this.unmarkVisible(wb)
          }))
        }
        return this.unmarkVisible(wb), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let bb = 0, wb = this.items.length; bb < wb; bb++) this.remove(this.items[bb], Ee, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(bb) {
        let wb = this.isVisible(bb);
        if (!wb && bb.isVisibilitySharedWithParent)
          if (this.isVisible(bb.parent[Eb])) this.markVisible(bb), wb = !0;
          else
            for (let Mb = bb.extraParents; void 0 !== Mb; Mb = Mb.next) {
              const eb = Mb.ref[Eb];
              if (eb.isFiltered && this.isVisible(eb)) {
                this.markVisible(bb), wb = !0;
                break
              }
            }
        return wb
      }
      _recursiveDeleteVisibleChangeTree(bb) {
        bb.forEachChild((bb => {
          this.unmarkVisible(bb), this._recursiveDeleteVisibleChangeTree(bb)
        }))
      }
      _dropPendingEntries(bb) {
        this.changes.delete(bb.ref[gb]), bb.forEachChild((bb => this._dropPendingEntries(bb)))
      }
      _removeViewField(bb, wb, Mb) {
        const eb = wb.get(Mb) === Hb.ADD;
        wb.set(Mb, Hb.DELETE);
        const pb = bb.ref[bb.encDescriptor.names[Mb]],
          Vb = pb?.[Eb];
        Vb && (this.unmarkVisible(Vb), this._recursiveDeleteVisibleChangeTree(Vb), eb && this._dropPendingEntries(Vb))
      }
    }

    function Ne(bb) {
      bb.structSwitchEmitted || (bb.shouldEmitSwitch && (bb.buffer[bb.it.offset++] = 255, ww.number(bb.buffer, bb.ref[gb], bb.it)), bb.structSwitchEmitted = !0)
    }

    function ve(bb, wb) {
      qe(bb, wb, Hb.ADD)
    }

    function Qe(bb, wb) {
      if (wb._fullSyncGen === bb.gen) return;
      wb._fullSyncGen = bb.gen;
      if (!bb.hasView || bb.view.isChangeTreeVisible(wb)) {
        const Mb = wb.encDescriptor;
        bb.changeTree = wb, bb.ref = wb.ref, bb.encoder = Mb.encoder, bb.filter = Mb.filter, bb.metadata = Mb.metadata, bb.treeIsFiltered = wb.isFiltered, bb.isSchema = Mb.isSchema, bb.filterBitmask = Mb.filterBitmask, bb.tags = Mb.tags, bb.structSwitchEmitted = !1, bb.shouldEmitSwitch = bb.hasView || bb.it.offset > bb.initialOffset || wb !== bb.rootChangeTree, wb.isArray && wb.collDirty.size > 0 && (wb.flags |= 512), pM(wb, bb, ve)
      }
      sM(wb, bb, Ge)
    }

    function Ge(bb, wb, Mb) {
      Qe(bb, wb)
    }

    function qe(bb, wb, Mb) {
      if (wb < 0) {
        if (bb.treeIsFiltered !== bb.emitFiltered) return;
        return Ne(bb), void(bb.buffer[bb.it.offset++] = 255 & Math.abs(wb))
      }
      if ((bb.isSchema ? bb.treeIsFiltered || (wb < 32 ? 0 !== (bb.filterBitmask & 1 << wb) : void 0 !== bb.tags[wb]) : bb.treeIsFiltered) !== bb.emitFiltered) return;
      const eb = bb.isEncodeAll ? Hb.ADD : Mb;
      void 0 !== eb && (void 0 === bb.filter || bb.filter(bb.ref, wb, bb.view)) && (Ne(bb), bb.encoder(bb.self, bb.buffer, bb.changeTree, wb, eb, bb.it, bb.isEncodeAll, bb.hasView, bb.metadata))
    }

    function ae(bb, wb) {
      const Mb = new Uint8Array(bb.length + wb.length);
      return Mb.set(bb, 0), Mb.set(wb, bb.length), Mb
    }
    class ie {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(ie.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(bb, wb) {
        this.context = Gw.cache(bb.constructor), this.root = wb ?? new Ze(this.context), this.setState(bb)
      }
      setState(bb) {
        this.state = bb, this.state[Eb].setRoot(this.root)
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.offset;
        return this._encodeChannel(bb, wb, Mb, eb, !1)
      }
      encodeUnreliable() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.offset;
        return this._encodeChannel(bb, wb, Mb, eb, !0)
      }
      _encodeChannel(bb, wb, Mb, eb, Hb) {
        this.root.pendingFilterRefresh.length > 0 && gM(this.root);
        const pb = void 0 !== wb,
          Vb = this.state[Eb],
          gb = this._encodeCtx;
        gb.self = this, gb.buffer = Mb, gb.it = bb, gb.view = wb, gb.isEncodeAll = !1, gb.hasView = pb, gb.emitFiltered = pb;
        let lb = Hb ? this.root.unreliableChanges : this.root.changes;
        for (; lb = lb.next;) {
          const Mb = lb.changeTree;
          if (pb && !wb.isChangeTreeVisible(Mb)) continue;
          const Lb = Hb ? Mb.unreliableRecorder : Mb;
          if (!Lb || !Lb.has()) continue;
          const Ib = Mb.encDescriptor;
          gb.changeTree = Mb, gb.ref = Mb.ref, gb.encoder = Ib.encoder, gb.filter = Ib.filter, gb.metadata = Ib.metadata, gb.treeIsFiltered = Mb.isFiltered, gb.isSchema = Ib.isSchema, gb.filterBitmask = Ib.filterBitmask, gb.tags = Ib.tags, gb.structSwitchEmitted = !1, gb.isRootTree = Mb === Vb, gb.shouldEmitSwitch = pb || bb.offset > eb || !gb.isRootTree, Lb.forEachWithCtx(gb, qe)
        }
        return Hb || pb || !this._isStreamBroadcastMode || this._emitStreamBroadcast(Mb, bb), bb.offset > Mb.byteLength ? (Mb = this._resizeBuffer(Mb, bb.offset), bb.offset = eb, this._encodeChannel(bb, wb, Mb, eb, Hb)) : Mb.subarray(0, bb.offset)
      }
      encodeFullSync(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.offset;
        this.root.pendingFilterRefresh.length > 0 && gM(this.root);
        const pb = void 0 !== eb,
          Vb = this.state[Eb],
          gb = this._encodeCtx;
        return gb.self = this, gb.buffer = wb, gb.it = bb, gb.view = eb, gb.isEncodeAll = !0, gb.hasView = pb, gb.emitFiltered = Mb, gb.gen = ++this._fullSyncGen, gb.initialOffset = Hb, gb.rootChangeTree = Vb, Qe(gb, Vb), bb.offset > wb.byteLength ? (wb = this._resizeBuffer(wb, bb.offset), bb.offset = Hb, this.encodeFullSync(bb, wb, Mb, eb, Hb)) : wb.subarray(0, bb.offset)
      }
      _resizeBuffer(bb, wb) {
        const Mb = Math.ceil(wb / ie.BUFFER_SIZE) * ie.BUFFER_SIZE,
          eb = new Uint8Array(Mb);
        return eb.set(bb), bb === this.sharedBuffer && (this.sharedBuffer = eb), eb
      }
      encodeAll() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(bb, wb, !1)
      }
      encodeAllView(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Hb = Mb.offset;
        return eb = this.encodeFullSync(Mb, eb, !0, bb, Hb), ae(eb.subarray(0, wb), eb.subarray(Hb, Mb.offset))
      }
      ensureCapacity(bb, wb) {
        if (wb + ie.BUFFER_SIZE <= bb.byteLength) return bb;
        const Mb = Math.ceil((wb + ie.BUFFER_SIZE) / ie.BUFFER_SIZE) * ie.BUFFER_SIZE,
          eb = new Uint8Array(Mb);
        return eb.set(bb.subarray(0, wb)), bb === this.sharedBuffer && (this.sharedBuffer = eb), eb
      }
      encodeView(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          pb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Vb = Mb.offset;
        this._emitStreamPriority(bb);
        for (const lb of bb.changes.keys()) {
          const wb = bb.changes.get(lb),
            pb = this.root.changeTrees[lb];
          if (void 0 === pb) {
            bb.changes.delete(lb);
            continue
          }
          if (0 === wb.size) continue;
          const Vb = pb.encDescriptor,
            Lb = Vb.encoder,
            Ib = Vb.metadata,
            Ob = pb.ref,
            tb = pb.refTarget;
          eb = this.ensureCapacity(eb, Mb.offset), eb[Mb.offset++] = 255, ww.number(eb, Ob[gb], Mb);
          for (const [lb, Cb] of wb) {
            let wb;
            if (-1 === lb) {
              const bb = tb.tmpItems,
                wb = tb.deletedIndexes;
              for (let Vb = 0; Vb < bb.length; Vb++) void 0 !== bb[Vb] && !0 !== wb[Vb] && Lb(this, eb, pb, Vb, Hb.ADD, Mb, !1, !0, Ib);
              continue
            }
            if ("number" === typeof lb) wb = lb;
            else {
              const Mb = lb.indexInParent(Ob);
              if (void 0 === Mb) continue;
              if (wb = Mb, Cb === Hb.ADD && pb.getChange(wb) === Hb.DELETE) {
                bb.changes.delete(lb.ref[gb]);
                continue
              }
            }
            Lb(this, eb, pb, wb, void 0 !== tb[Ub](wb) && Cb || Hb.DELETE, Mb, !1, !0, Ib)
          }
        }
        return bb.changes.clear(), eb = this.encode(Mb, bb, eb), pb ? ae(eb.subarray(0, wb), eb.subarray(Vb, Mb.offset)) : eb.subarray(Vb, Mb.offset)
      }
      encodeUnreliableView(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Hb = Mb.offset;
        return eb = this.encodeUnreliable(Mb, bb, eb, Hb), ae(eb.subarray(0, wb), eb.subarray(Hb, Mb.offset))
      }
      _emitStreamBroadcast(bb, wb) {
        const Mb = this.root.streamTrees;
        for (const eb of Mb) {
          const Mb = eb,
            pb = Mb[Eb],
            Vb = Mb[gb];
          if (void 0 === Vb) continue;
          const lb = Mb._stream,
            Lb = lb.broadcastDeletes,
            Ib = lb.broadcastPending,
            Ob = lb.sentBroadcast,
            tb = Lb.size > 0,
            Cb = Ib.size > 0,
            Fb = pb.encDescriptor,
            Bb = Fb.encoder,
            sb = Fb.metadata;
          if (tb || Cb) {
            if (bb[wb.offset++] = 255, ww.number(bb, Vb, wb), tb) {
              for (const Mb of Lb) Bb(this, bb, pb, Mb, Hb.DELETE, wb, !1, !1, sb);
              Lb.clear()
            }
            const eb = lb.maxPerTick,
              Cb = [];
            let Fb = 0;
            const mb = [];
            for (const Vb of Ib) {
              if (Fb >= eb) break;
              const gb = Mb[Ub](Vb);
              void 0 !== gb ? (Bb(this, bb, pb, Vb, Hb.ADD, wb, !1, !1, sb), Ob.add(Vb), Cb.push(gb), mb.push(Vb), Fb++) : mb.push(Vb)
            }
            for (const bb of mb) Ib.delete(bb);
            for (const Mb of Cb) {
              const eb = Mb[Eb];
              if (void 0 === eb) continue;
              const pb = Mb[gb];
              if (void 0 === pb) continue;
              bb[wb.offset++] = 255, ww.number(bb, pb, wb);
              const Vb = eb.encDescriptor,
                lb = Vb.encoder,
                Lb = Vb.metadata;
              eb.forEachLive((Mb => {
                nw.hasUnreliableAtIndex(Lb, Mb) || lb(this, bb, eb, Mb, Hb.ADD, wb, !1, !1, Lb)
              }))
            }
          }
          for (const eb of Ob) {
            const Hb = Mb[Ub](eb);
            if (void 0 === Hb) continue;
            const pb = Hb[Eb];
            if (void 0 === pb || !pb.has()) continue;
            const Vb = Hb[gb];
            if (void 0 === Vb) continue;
            bb[wb.offset++] = 255, ww.number(bb, Vb, wb);
            const lb = pb.encDescriptor,
              Lb = lb.encoder,
              Ib = lb.metadata;
            pb.forEach(((Mb, eb) => {
              Mb < 0 || nw.hasUnreliableAtIndex(Ib, Mb) || Lb(this, bb, pb, Mb, eb, wb, !1, !1, Ib)
            }))
          }
        }
      }
      _emitStreamPriority(bb) {
        const wb = this.root.streamTrees;
        if (0 === wb.size) return;
        const Mb = bb.id;
        for (const eb of wb) {
          const wb = eb,
            pb = wb._stream,
            Vb = pb.pendingByView.get(Mb);
          if (void 0 === Vb || 0 === Vb.size) continue;
          const lb = pb.priorityByView?.get(Mb),
            Lb = void 0 !== lb,
            Ib = pb.priority,
            Ob = pb.maxPerTick,
            tb = [],
            Cb = [];
          if (Lb || void 0 !== Ib) {
            const Mb = [],
              eb = [];
            let Hb = 0;
            for (const pb of Vb) {
              const Vb = wb[Ub](pb);
              if (void 0 === Vb) {
                Cb.push(pb);
                continue
              }
              const gb = Lb ? lb(Vb) : Ib(bb, Vb);
              if (Hb < Ob) {
                let bb = Hb++;
                for (; bb > 0 && eb[bb - 1] < gb;) eb[bb] = eb[bb - 1], Mb[bb] = Mb[bb - 1], bb--;
                eb[bb] = gb, Mb[bb] = pb
              } else if (gb > eb[Ob - 1]) {
                let bb = Ob - 1;
                for (; bb > 0 && eb[bb - 1] < gb;) eb[bb] = eb[bb - 1], Mb[bb] = Mb[bb - 1], bb--;
                eb[bb] = gb, Mb[bb] = pb
              }
            }
            for (let bb = 0; bb < Hb; bb++) tb.push(Mb[bb])
          } else
            for (const bb of Vb) {
              if (tb.length >= Ob) break;
              tb.push(bb)
            }
          for (const bb of Cb) Vb.delete(bb);
          const Fb = tb.length;
          let Bb = pb.sentByView.get(Mb);
          void 0 === Bb && (Bb = new Set, pb.sentByView.set(Mb, Bb));
          for (let Mb = 0; Mb < Fb; Mb++) {
            const eb = tb[Mb],
              pb = wb[Ub](eb);
            if (void 0 === pb) {
              Vb.delete(eb);
              continue
            }
            bb._addImmediate(pb);
            const lb = pb[Eb];
            if (void 0 !== lb) {
              const wb = pb[gb];
              let Mb = bb.changes.get(wb);
              void 0 === Mb && (Mb = new Map, bb.changes.set(wb, Mb));
              const eb = lb.metadata;
              lb.forEachLive((bb => {
                nw.hasUnreliableAtIndex(eb, bb) || Mb.set(bb, Hb.ADD)
              }))
            }
            Vb.delete(eb), Bb.add(eb)
          }
        }
      }
      discardChanges() {
        const bb = this.root.changes;
        let wb = bb.next;
        const Mb = this.root;
        for (; wb;) {
          const bb = wb.next;
          wb.changeTree.endEncode(), Mb.releaseNode(wb), wb = bb
        }
        bb.next = void 0, bb.tail = void 0
      }
      discardUnreliableChanges() {
        const bb = this.root.unreliableChanges;
        let wb = bb.next;
        const Mb = this.root;
        for (; wb;) {
          const bb = wb.next;
          wb.changeTree.endEncodeUnreliable(), Mb.releaseNode(wb), wb = bb
        }
        bb.next = void 0, bb.tail = void 0
      }
      tryEncodeTypeId(bb, wb, Mb, eb) {
        const Hb = this.context.getTypeId(wb),
          pb = this.context.getTypeId(Mb);
        void 0 !== pb ? Hb !== pb && (bb[eb.offset++] = 213, ww.number(bb, pb, eb)) : console.warn(`@colyseus/schema WARNING: Class "${Mb.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const bb = this.root;
        if (0 === bb.streamTrees.size) return !1;
        const wb = 0 === bb.activeViews.size;
        for (const Mb of bb.streamTrees)
          if (wb ? Zw(Mb) : Yw(Mb, bb)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class ue extends Error {
      constructor(bb) {
        super(bb), this.name = "DecodingWarning"
      }
    }
    const de = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Pe {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(bb, wb), void 0 === wb[gb] ? (de.value = bb, Object.defineProperty(wb, gb, de)) : wb[gb] !== bb && (wb[gb] = bb), Mb && (this.refCount[bb] = (this.refCount[bb] || 0) + 1), this.deletedRefs.has(bb) && this.deletedRefs.delete(bb)
      }
      removeRef(bb) {
        const wb = this.refCount[bb];
        if (void 0 !== wb)
          if (0 !== wb)(this.refCount[bb] = wb - 1) <= 0 && this.deletedRefs.add(bb);
          else try {
            const wb = this.refs.get(bb);
            throw new ue(`trying to remove refId '${bb}' with 0 refCount (${wb.constructor.name}: ${JSON.stringify(wb)})`)
          } catch (VH) {
            console.warn(VH)
          } else try {
            throw new ue("trying to remove refId that doesn't exist: " + bb)
          } catch (VH) {
            console.warn(VH)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((bb => {
          if (this.refCount[bb] > 0) return;
          const wb = this.refs.get(bb),
            Mb = wb.constructor[Symbol.metadata];
          if (null != Mb)
            for (const eb in Mb) {
              const bb = wb[Mb[eb].name];
              if ("object" === typeof bb && bb) {
                const wb = bb[gb];
                void 0 === wb || this.deletedRefs.has(wb) || this.removeRef(wb)
              }
            } else "function" === typeof wb[Fb] && Array.from(wb.values()).forEach((bb => {
              const wb = bb[gb];
              void 0 === wb || this.deletedRefs.has(wb) || this.removeRef(wb)
            }));
          this.refs.delete(bb), delete this.refCount[bb], delete this.callbacks[bb]
        })), this.deletedRefs.clear()
      }
      addCallback(bb, wb, Mb) {
        if (void 0 === bb) {
          const bb = "number" === typeof wb ? Hb[wb] : wb;
          throw new Error(`Can't addCallback on '${bb}' (refId is undefined)`)
        }
        return this.callbacks[bb] || (this.callbacks[bb] = {}), this.callbacks[bb][wb] || (this.callbacks[bb][wb] = []), this.callbacks[bb][wb].push(Mb), () => this.removeCallback(bb, wb, Mb)
      }
      removeCallback(bb, wb, Mb) {
        const eb = this.callbacks?.[bb]?.[wb]?.indexOf(Mb);
        void 0 !== eb && -1 !== eb && fe(this.callbacks[bb][wb], eb)
      }
    }
    class ne {
      context;
      state;
      root;
      currentRefId = 0;
      iW;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(bb, wb) {
        this.setState(bb), this.context = wb || new Gw(bb.constructor)
      }
      setState(bb) {
        this.state = bb, this.root = new Pe, this.root.addRef(0, bb)
      }
      decode(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Hb = void 0 !== this.iW ? [] : null,
          pb = this.root,
          Vb = bb.byteLength;
        let gb = Mb.constructor[Ib];
        for (this.currentRefId = 0; wb.offset < Vb;) {
          if (bb[wb.offset] == eb) {
            wb.offset++, Mb[hb]?.();
            const eb = mw.number(bb, wb),
              Hb = pb.refs.get(eb);
            Hb ? (Mb = Hb, gb = Mb.constructor[Ib], this.currentRefId = eb) : (console.error(`"refId" not found: ${eb}`, {
              previousRef: Mb,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(bb, wb, Vb));
            continue
          } - 1 !== gb(this, bb, wb, Mb, Hb) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(bb, wb, Vb))
        }
        return Mb[hb]?.(), null !== this.resyncVisited && function(bb, wb) {
          bb.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : GM(bb, bb.state, new Set, wb)
        }(this, Hb), null !== Hb && this.iW?.(Hb), pb.garbageCollectDeletedRefs(), Hb
      }
      decodeResync(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(bb, wb)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(bb, wb, Mb) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Hb = {
          offset: wb.offset
        };
        for (; wb.offset < Mb && (bb[wb.offset] !== eb || (Hb.offset = wb.offset + 1, !this.root.refs.has(mw.number(bb, Hb))));) wb.offset++
      }
      getInstanceType(bb, wb, Mb) {
        let eb;
        if (213 === bb[wb.offset]) {
          wb.offset++;
          const Mb = mw.number(bb, wb);
          eb = this.context.get(Mb)
        }
        return eb || Mb
      }
      createInstanceOfType(bb) {
        return bb.initializeForDecoder()
      }
      removeChildRefs(bb, wb) {
        const Mb = "string" !== typeof bb[Fb],
          eb = bb[gb];
        bb.forEach(((pb, Vb) => {
          wb?.push({
            ref: bb,
            refId: eb,
            op: Hb.DELETE,
            field: Vb,
            value: void 0,
            previousValue: pb
          }), Mb && this.root.removeRef(pb[gb])
        }))
      }
    }
    const ye = Re({
        min: Ce.float64(),
        max: Ce.float64(),
        bits: Ce.uint8(),
        mode: Ce.uint8()
      }, "QuantizedDescriptor"),
      oe = Re({
        name: Ce.string(),
        type: Ce.string(),
        referencedType: Ce.number(),
        childPrimitive: Ce.string(),
        quantized: Ce.ref(ye).optional()
      }, "ReflectionField"),
      Te = Re({
        id: Ce.number(),
        extendsId: Ce.number(),
        fields: Ce.array(oe)
      }, "ReflectionType"),
      ke = Re({
        types: Ce.array(Te),
        rootType: Ce.number()
      }, "Reflection");

    function bH(bb) {
      const wb = bb.root,
        Mb = wb.callbacks,
        eb = new WeakMap;
      let pb;

      function Vb(bb, Mb) {
        let Lb = Mb.instance?.constructor[Symbol.metadata] || bb,
          Ib = Mb.instance && "function" === typeof Mb.instance.forEach || bb && !ce.is(bb);
        if (Lb && !Ib) {
          const bb = function(bb, Hb, Vb, lb) {
            return lb && void 0 !== Mb.instance[Hb] && !eb.has(pb) && Vb(Mb.instance[Hb], void 0), wb.addCallback(bb[gb], Hb, Vb)
          };
          return new Proxy({
            listen: function(wb, Hb) {
              let Vb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (Mb.instance) return bb(Mb.instance, wb, Hb, Vb);
              {
                let gb = () => {};
                return Mb.onInstanceAvailable(((Mb, lb) => {
                  gb = bb(Mb, wb, Hb, Vb && lb && !eb.has(pb))
                })), () => gb()
              }
            },
            onChange: function(bb) {
              return wb.addCallback(Mb.instance[gb], Hb.REPLACE, bb)
            },
            bindTo: function(bb, eb) {
              return eb || (eb = Object.keys(Lb).map((bb => Lb[bb].name))), wb.addCallback(Mb.instance[gb], Hb.REPLACE, (() => {
                eb.forEach((wb => bb[wb] = Mb.instance[wb]))
              }))
            }
          }, {
            get(bb, wb) {
              const eb = Lb[Lb[wb]];
              if (eb) {
                const bb = Mb.instance?.[wb],
                  Hb = eb => {
                    const Hb = lb(Mb.instance).listen(wb, ((bb, wb) => {
                      eb(bb, !1), Hb?.()
                    }), !1);
                    void 0 !== bb?.[gb] && eb(bb, !0)
                  };
                return Vb(eb.type, {
                  instance: void 0 !== bb?.[gb] && bb,
                  parentInstance: Mb.instance,
                  onInstanceAvailable: Hb
                })
              }
              return bb[wb]
            },
            has: (bb, wb) => void 0 !== Lb[wb],
            set(bb, wb, Mb) {
              throw new Error("not allowed")
            },
            deleteProperty(bb, wb) {
              throw new Error("not allowed")
            }
          })
        } {
          const bb = function(bb, Mb, Vb) {
              return Vb && bb.forEach(((bb, wb) => Mb(bb, wb))), wb.addCallback(bb[gb], Hb.ADD, ((bb, wb) => {
                eb.set(Mb, !0), pb = Mb, Mb(bb, wb), eb.delete(Mb), pb = void 0
              }))
            },
            Vb = function(bb, Mb) {
              return wb.addCallback(bb[gb], Hb.DELETE, Mb)
            },
            lb = function(bb, Mb) {
              return wb.addCallback(bb[gb], Hb.REPLACE, Mb)
            };
          return new Proxy({
            bR: function(wb) {
              let Hb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (Mb.instance) return bb(Mb.instance, wb, Hb && !eb.has(pb));
              if (Mb.onInstanceAvailable) {
                let Vb = () => {};
                return Mb.onInstanceAvailable(((Mb, gb) => {
                  Vb = bb(Mb, wb, Hb && gb && !eb.has(pb))
                })), () => Vb()
              }
            },
            FW: function(bb) {
              if (Mb.instance) return Vb(Mb.instance, bb);
              if (Mb.onInstanceAvailable) {
                let wb = () => {};
                return Mb.onInstanceAvailable((Mb => {
                  wb = Vb(Mb, bb)
                })), () => wb()
              }
            },
            onChange: function(bb) {
              if (Mb.instance) return lb(Mb.instance, bb);
              if (Mb.onInstanceAvailable) {
                let wb = () => {};
                return Mb.onInstanceAvailable((Mb => {
                  wb = lb(Mb, bb)
                })), () => wb()
              }
            }
          }, {
            get(bb, wb) {
              if (!bb[wb]) throw new Error(`Can't access '${wb}' through callback proxy. access the instance directly.`);
              return bb[wb]
            },
            has: (bb, wb) => void 0 !== bb[wb],
            set(bb, wb, Mb) {
              throw new Error("not allowed")
            },
            deleteProperty(bb, wb) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function lb(bb) {
        return Vb(void 0, {
          instance: bb
        })
      }
      return bb.iW = function(bb) {
        const wb = new Set;
        for (let eb = 0, pb = bb.length; eb < pb; eb++) {
          const pb = bb[eb],
            Vb = pb.refId,
            lb = pb.ref,
            Lb = Mb[Vb];
          if (Lb) {
            if ((pb.op & Hb.DELETE) === Hb.DELETE && ce.isSchema(pb.previousValue)) {
              const bb = Mb[pb.previousValue[gb]]?.[Hb.DELETE];
              for (let wb = bb?.length - 1; wb >= 0; wb--) bb[wb]()
            }
            if (ce.isSchema(lb)) {
              if (!wb.has(Vb)) {
                const bb = Lb?.[Hb.REPLACE];
                for (let wb = bb?.length - 1; wb >= 0; wb--) bb[wb]()
              }
              if (Lb.hasOwnProperty(pb.field)) {
                const bb = Lb[pb.field];
                for (let wb = bb?.length - 1; wb >= 0; wb--) bb[wb](pb.value, pb.previousValue)
              }
            } else {
              if ((pb.op & Hb.DELETE) === Hb.DELETE) {
                if (void 0 !== pb.previousValue) {
                  const bb = Lb[Hb.DELETE];
                  for (let wb = bb?.length - 1; wb >= 0; wb--) bb[wb](pb.previousValue, pb.dynamicIndex ?? pb.field)
                }
                if ((pb.op & Hb.ADD) === Hb.ADD) {
                  const bb = Lb[Hb.ADD];
                  for (let wb = bb?.length - 1; wb >= 0; wb--) bb[wb](pb.value, pb.dynamicIndex ?? pb.field)
                }
              } else if ((pb.op & Hb.ADD) === Hb.ADD && pb.previousValue !== pb.value) {
                const bb = Lb[Hb.ADD];
                for (let wb = bb?.length - 1; wb >= 0; wb--) bb[wb](pb.value, pb.dynamicIndex ?? pb.field)
              }
              if (pb.value !== pb.previousValue && (void 0 !== pb.value || void 0 !== pb.previousValue)) {
                const bb = Lb[Hb.REPLACE];
                for (let wb = bb?.length - 1; wb >= 0; wb--) bb[wb](pb.value, pb.dynamicIndex ?? pb.field)
              }
            }
            wb.add(Vb)
          }
        }
      }, lb
    }

    function wH(bb, wb) {
      bb.iW = wb
    }
    ke.encode = function(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const Mb = bb.context,
        eb = new ke,
        Hb = new ie(eb),
        pb = Mb.schemas.get(bb.state.constructor);
      pb > 0 && (eb.rootType = pb);
      const Vb = new Set,
        gb = {},
        lb = bb => {
          if (void 0 === bb.extendsId || Vb.has(bb.extendsId)) {
            Vb.add(bb.id), eb.types.push(bb);
            const wb = gb[bb.id];
            void 0 !== wb && (delete gb[bb.id], wb.forEach((bb => lb(bb))))
          } else void 0 === gb[bb.extendsId] && (gb[bb.extendsId] = []), gb[bb.extendsId].push(bb)
        };
      Mb.schemas.forEach(((bb, wb) => {
        const eb = new Te;
        eb.id = Number(bb);
        const Hb = Object.getPrototypeOf(wb);
        Hb !== ce && (eb.extendsId = Mb.schemas.get(Hb));
        const pb = wb[Symbol.metadata];
        if (pb !== Hb[Symbol.metadata]) {
          const bb = pb[rb] ?? -1;
          for (let wb = 0; wb <= bb; wb++) {
            const bb = pb[wb];
            if (void 0 === bb) continue;
            const Hb = bb.name;
            if (!Object.prototype.hasOwnProperty.call(pb, Hb)) continue;
            const Vb = new oe;
            let gb;
            if (Vb.name = Hb, "string" === typeof bb.type) gb = bb.type;
            else if (Sw(bb.type)) {
              const wb = bb.type.quantized;
              gb = "quantized";
              const Mb = new ye;
              Mb.min = wb.min, Mb.max = wb.max, Mb.bits = wb.bits, Mb.mode = wb.wrap ? 1 : 0, Vb.quantized = Mb
            } else {
              let wb;
              ce.is(bb.type) ? (gb = "ref", wb = bb.type) : (gb = Object.keys(bb.type)[0], "string" === typeof bb.type[gb] ? Vb.childPrimitive = bb.type[gb] : wb = bb.type[gb]), Vb.referencedType = wb ? Mb.getTypeId(wb) : -1
            }
            Vb.type = gb, eb.fields.push(Vb)
          }
        }
        lb(eb)
      }));
      for (const Lb in gb) gb[Lb].forEach((bb => eb.types.push(bb)));
      return Hb.encodeAll(wb).slice(0, wb.offset)
    }, ke.decode = function(bb, wb) {
      const Mb = new ke;
      new ne(Mb).decode(bb, wb);
      const eb = new Gw;
      Mb.types.forEach((bb => {
        const wb = eb.get(bb.extendsId) ?? ce,
          Mb = class extends wb {};
        Gw.register(Mb), eb.add(Mb, bb.id)
      }), {});
      Mb.types.forEach((bb => {
        const wb = eb.get(bb.id),
          Hb = nw.initialize(wb),
          pb = [];
        let Vb = bb;
        do {
          pb.push(Vb), Vb = Mb.types.find((bb => bb.id === Vb.extendsId))
        } while (Vb);
        let gb = 0;
        pb.reverse().forEach((bb => {
          ((bb, wb, Mb) => {
            wb.fields.forEach(((wb, Hb) => {
              const pb = Mb + Hb;
              if (void 0 !== wb.quantized) {
                const Mb = wb.quantized;
                nw.addField(bb, pb, wb.name, {
                  quantized: Jw({
                    min: Mb.min,
                    max: Mb.max,
                    bits: Mb.bits,
                    mode: 1 === Mb.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== wb.referencedType) {
                const Mb = wb.type,
                  Hb = eb.get(wb.referencedType) ?? wb.childPrimitive;
                "ref" === Mb ? nw.addField(bb, pb, wb.name, Hb) : nw.addField(bb, pb, wb.name, {
                  [Mb]: Hb
                })
              } else nw.addField(bb, pb, wb.name, wb.type)
            }))
          })(Hb, bb, gb), gb += bb.fields.length
        }))
      }));
      const Hb = new(eb.get(Mb.rootType || 0));
      return new ne(Hb, eb)
    }, ke.makeEncodable = function(bb) {
      const wb = bb[Symbol.metadata];
      if (!wb) return bb;
      const Mb = wb[rb];
      if (void 0 === Mb) return bb;
      for (let eb = 0; eb <= Mb; eb++) {
        const Mb = wb[eb];
        Mb && nw.defineField(bb, wb, eb, Mb.name, Mb.type)
      }
      return Object.prototype.hasOwnProperty.call(bb, jb) && delete bb[jb], bb
    };
    class MH {
      wO;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(bb) {
        this.wO = bb, this.wO.iW = this.iW.bind(this)
      }
      get callbacks() {
        return this.wO.root.callbacks
      }
      get state() {
        return this.wO.state
      }
      addCallback(bb, wb, Mb) {
        return this.wO.root.addCallback(bb, wb, Mb)
      }
      addCallbackOrWaitCollectionAvailable(bb, wb, Mb, eb) {
        let pb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Vb = () => {};
        const lb = () => Vb(),
          Lb = bb[wb];
        if (Lb && void 0 !== Lb[gb]) return pb = pb && !1 === this.isTriggering, Mb === Hb.ADD && pb && Lb.forEach(((bb, wb) => {
          eb(bb, wb)
        })), this.addCallback(Lb[gb], Mb, eb);
        {
          let Hb;
          return Hb = this.addCallback(bb[gb], wb, ((bb, wb) => {
            null !== bb && void 0 !== bb && (Hb(), Vb = this.addCallback(bb[gb], Mb, eb))
          })), Vb = Hb, lb
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(bb, wb, Mb) {
        let eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        eb = eb && !1 === this.isTriggering;
        const Hb = bb[wb];
        return eb && null !== Hb && void 0 !== Hb && Mb(Hb, void 0), this.addCallback(bb[gb], wb, Mb)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const bb = arguments.length <= 0 ? void 0 : arguments[0],
            wb = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(bb[gb], Hb.REPLACE, wb)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Hb.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Hb.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bR() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Hb.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Hb.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      FW() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Hb.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Hb.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(bb, wb, Mb) {
        let eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const pb = bb.constructor[Symbol.metadata];
        Mb || (Mb = Object.keys(pb).filter((bb => !isNaN(Number(bb)))).map((bb => pb[bb].name)));
        const Vb = () => {
          for (const eb of Mb) {
            const Mb = bb[eb];
            void 0 !== Mb && (wb[eb] = Mb)
          }
        };
        return eb && Vb(), this.addCallback(bb[gb], Hb.REPLACE, Vb)
      }
      iW(bb) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let wb = 0, Mb = bb.length; wb < Mb; wb++) {
          const Mb = bb[wb],
            eb = Mb.refId,
            pb = Mb.ref,
            Vb = this.callbacks[eb];
          if (Vb) {
            if ((Mb.op & Hb.DELETE) === Hb.DELETE && ce.isSchema(Mb.previousValue)) {
              const bb = Mb.previousValue[gb],
                wb = this.callbacks[bb]?.[Hb.DELETE];
              if (wb)
                for (let Mb = wb.length - 1; Mb >= 0; Mb--) try {
                  wb[Mb]()
                } catch (VH) {
                  console.error(VH)
                }
            }
            if (ce.isSchema(pb)) {
              if (!this.uniqueRefIds.has(eb)) {
                const bb = Vb[Hb.REPLACE];
                if (bb)
                  for (let wb = bb.length - 1; wb >= 0; wb--) try {
                    bb[wb]()
                  } catch (VH) {
                    console.error(VH)
                  }
              }
              const bb = Vb[Mb.field];
              if (bb)
                for (let wb = bb.length - 1; wb >= 0; wb--) try {
                  bb[wb](Mb.value, Mb.previousValue)
                } catch (VH) {
                  console.error(VH)
                }
            } else {
              const bb = Mb.dynamicIndex ?? Mb.field;
              if ((Mb.op & Hb.DELETE) === Hb.DELETE) {
                if (void 0 !== Mb.previousValue) {
                  const wb = Vb[Hb.DELETE];
                  if (wb)
                    for (let eb = wb.length - 1; eb >= 0; eb--) try {
                      wb[eb](Mb.previousValue, bb)
                    } catch (VH) {
                      console.error(VH)
                    }
                }
                if ((Mb.op & Hb.ADD) === Hb.ADD) {
                  const wb = Vb[Hb.ADD];
                  if (wb)
                    for (let eb = wb.length - 1; eb >= 0; eb--) try {
                      wb[eb](Mb.value, bb)
                    } catch (VH) {
                      console.error(VH)
                    }
                }
              } else if ((Mb.op & Hb.ADD) === Hb.ADD && Mb.previousValue !== Mb.value) {
                const wb = Vb[Hb.ADD];
                if (wb)
                  for (let eb = wb.length - 1; eb >= 0; eb--) try {
                    wb[eb](Mb.value, bb)
                  } catch (VH) {
                    console.error(VH)
                  }
              }
              if (Mb.value !== Mb.previousValue) {
                const wb = Vb[Hb.REPLACE];
                if (wb)
                  for (let eb = wb.length - 1; eb >= 0; eb--) try {
                    wb[eb](bb, Mb.value)
                  } catch (VH) {
                    console.error(VH)
                  }
              }
            }
            this.uniqueRefIds.add(eb)
          }
        }
        this.isTriggering = !1
      }
    }
    const eH = {
      get(bb) {
        if (bb instanceof ne) return new MH(bb);
        if ("wO" in bb.yB) return new MH(bb.yB.wO);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(bb) {
        if (bb instanceof ne) return bH(bb);
        if ("wO" in bb.yB) return bH(bb.yB.wO);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (bb, wb) => wH(bb, wb)
    };
    class HH {
      _free = [];
      _factory;
      _maxSize;
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = bb, this._maxSize = wb.maxSize ?? 1 / 0;
        const Mb = wb.preallocate ?? 0;
        for (let eb = 0; eb < Mb; eb++) this._free.push(bb())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(bb) {
        ce.reset(bb), this._free.length < this._maxSize && this._free.push(bb)
      }
      get size() {
        return this._free.length
      }
    }

    function pH(bb) {
      return new HH((() => new bb), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Xw("map", {
      constructor: pe
    }), Xw("array", {
      constructor: ee
    }), Xw("set", {
      constructor: ge
    }), Xw("collection", {
      constructor: Ve
    })
  },
  10488: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      __addDisposableResource: () => Jb,
      __assign: () => pb,
      __asyncDelegator: () => Kb,
      __asyncGenerator: () => jb,
      __asyncValues: () => rb,
      __await: () => xb,
      __awaiter: () => Cb,
      __classPrivateFieldGet: () => fb,
      __classPrivateFieldIn: () => Wb,
      __classPrivateFieldSet: () => Ab,
      __createBinding: () => Fb,
      __decorate: () => gb,
      __disposeResources: () => Nb,
      __esDecorate: () => Lb,
      __exportStar: () => Bb,
      __extends: () => Hb,
      __generator: () => Eb,
      __importDefault: () => Zb,
      __importStar: () => Yb,
      __makeTemplateObject: () => Rb,
      __metadata: () => tb,
      __param: () => lb,
      __propKey: () => Ob,
      __read: () => mb,
      __rest: () => Vb,
      __rewriteRelativeImportExtension: () => vb,
      __runInitializers: () => Ib,
      __setFunctionName: () => Ub,
      __spread: () => hb,
      __spreadArray: () => Xb,
      __spreadArrays: () => zb,
      __values: () => sb,
      default: () => Qb
    });
    var eb = function(bb, wb) {
      return eb = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(bb, wb) {
        bb.__proto__ = wb
      } || function(bb, wb) {
        for (var Mb in wb) Object.prototype.hasOwnProperty.call(wb, Mb) && (bb[Mb] = wb[Mb])
      }, eb(bb, wb)
    };

    function Hb(bb, wb) {
      if ("function" !== typeof wb && null !== wb) throw new TypeError("Class extends value " + String(wb) + " is not a constructor or null");

      function Mb() {
        this.constructor = bb
      }
      eb(bb, wb), bb.prototype = null === wb ? Object.create(wb) : (Mb.prototype = wb.prototype, new Mb)
    }
    var pb = function() {
      return pb = Object.assign || function(bb) {
        for (var wb, Mb = 1, eb = arguments.length; Mb < eb; Mb++)
          for (var Hb in wb = arguments[Mb]) Object.prototype.hasOwnProperty.call(wb, Hb) && (bb[Hb] = wb[Hb]);
        return bb
      }, pb.apply(this, arguments)
    };

    function Vb(bb, wb) {
      var Mb = {};
      for (var eb in bb) Object.prototype.hasOwnProperty.call(bb, eb) && wb.indexOf(eb) < 0 && (Mb[eb] = bb[eb]);
      if (null != bb && "function" === typeof Object.getOwnPropertySymbols) {
        var Hb = 0;
        for (eb = Object.getOwnPropertySymbols(bb); Hb < eb.length; Hb++) wb.indexOf(eb[Hb]) < 0 && Object.prototype.propertyIsEnumerable.call(bb, eb[Hb]) && (Mb[eb[Hb]] = bb[eb[Hb]])
      }
      return Mb
    }

    function gb(bb, wb, Mb, eb) {
      var Hb, pb = arguments.length,
        Vb = pb < 3 ? wb : null === eb ? eb = Object.getOwnPropertyDescriptor(wb, Mb) : eb;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Vb = Reflect.decorate(bb, wb, Mb, eb);
      else
        for (var gb = bb.length - 1; gb >= 0; gb--)(Hb = bb[gb]) && (Vb = (pb < 3 ? Hb(Vb) : pb > 3 ? Hb(wb, Mb, Vb) : Hb(wb, Mb)) || Vb);
      return pb > 3 && Vb && Object.defineProperty(wb, Mb, Vb), Vb
    }

    function lb(bb, wb) {
      return function(Mb, eb) {
        wb(Mb, eb, bb)
      }
    }

    function Lb(bb, wb, Mb, eb, Hb, pb) {
      function Vb(bb) {
        if (void 0 !== bb && "function" !== typeof bb) throw new TypeError("Function expected");
        return bb
      }
      for (var gb, lb = eb.kind, Lb = "getter" === lb ? "get" : "setter" === lb ? "set" : "value", Ib = !wb && bb ? eb.static ? bb : bb.prototype : null, Ob = wb || (Ib ? Object.getOwnPropertyDescriptor(Ib, eb.name) : {}), Ub = !1, tb = Mb.length - 1; tb >= 0; tb--) {
        var Cb = {};
        for (var Eb in eb) Cb[Eb] = "access" === Eb ? {} : eb[Eb];
        for (var Eb in eb.access) Cb.access[Eb] = eb.access[Eb];
        Cb.addInitializer = function(bb) {
          if (Ub) throw new TypeError("Cannot add initializers after decoration has completed");
          pb.push(Vb(bb || null))
        };
        var Fb = (0, Mb[tb])("accessor" === lb ? {
          get: Ob.get,
          set: Ob.set
        } : Ob[Lb], Cb);
        if ("accessor" === lb) {
          if (void 0 === Fb) continue;
          if (null === Fb || "object" !== typeof Fb) throw new TypeError("Object expected");
          (gb = Vb(Fb.get)) && (Ob.get = gb), (gb = Vb(Fb.set)) && (Ob.set = gb), (gb = Vb(Fb.init)) && Hb.unshift(gb)
        } else(gb = Vb(Fb)) && ("field" === lb ? Hb.unshift(gb) : Ob[Lb] = gb)
      }
      Ib && Object.defineProperty(Ib, eb.name, Ob), Ub = !0
    }

    function Ib(bb, wb, Mb) {
      for (var eb = arguments.length > 2, Hb = 0; Hb < wb.length; Hb++) Mb = eb ? wb[Hb].call(bb, Mb) : wb[Hb].call(bb);
      return eb ? Mb : void 0
    }

    function Ob(bb) {
      return "symbol" === typeof bb ? bb : "".concat(bb)
    }

    function Ub(bb, wb, Mb) {
      return "symbol" === typeof wb && (wb = wb.description ? "[".concat(wb.description, "]") : ""), Object.defineProperty(bb, "name", {
        configurable: !0,
        value: Mb ? "".concat(Mb, " ", wb) : wb
      })
    }

    function tb(bb, wb) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(bb, wb)
    }

    function Cb(bb, wb, Mb, eb) {
      return new(Mb || (Mb = Promise))((function(Hb, pb) {
        function Vb(bb) {
          try {
            lb(eb.next(bb))
          } catch (wb) {
            pb(wb)
          }
        }

        function gb(bb) {
          try {
            lb(eb.throw(bb))
          } catch (wb) {
            pb(wb)
          }
        }

        function lb(bb) {
          var wb;
          bb.done ? Hb(bb.value) : (wb = bb.value, wb instanceof Mb ? wb : new Mb((function(bb) {
            bb(wb)
          }))).then(Vb, gb)
        }
        lb((eb = eb.apply(bb, wb || [])).next())
      }))
    }

    function Eb(bb, wb) {
      var Mb, eb, Hb, pb = {
          label: 0,
          sent: function() {
            if (1 & Hb[0]) throw Hb[1];
            return Hb[1]
          },
          trys: [],
          ops: []
        },
        Vb = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Vb.next = gb(0), Vb.throw = gb(1), Vb.return = gb(2), "function" === typeof Symbol && (Vb[Symbol.iterator] = function() {
        return this
      }), Vb;

      function gb(gb) {
        return function(lb) {
          return function(gb) {
            if (Mb) throw new TypeError("Generator is already executing.");
            for (; Vb && (Vb = 0, gb[0] && (pb = 0)), pb;) try {
              if (Mb = 1, eb && (Hb = 2 & gb[0] ? eb.return : gb[0] ? eb.throw || ((Hb = eb.return) && Hb.call(eb), 0) : eb.next) && !(Hb = Hb.call(eb, gb[1])).done) return Hb;
              switch (eb = 0, Hb && (gb = [2 & gb[0], Hb.value]), gb[0]) {
                case 0:
                case 1:
                  Hb = gb;
                  break;
                case 4:
                  return pb.label++, {
                    value: gb[1],
                    done: !1
                  };
                case 5:
                  pb.label++, eb = gb[1], gb = [0];
                  continue;
                case 7:
                  gb = pb.ops.pop(), pb.trys.pop();
                  continue;
                default:
                  if (!(Hb = (Hb = pb.trys).length > 0 && Hb[Hb.length - 1]) && (6 === gb[0] || 2 === gb[0])) {
                    pb = 0;
                    continue
                  }
                  if (3 === gb[0] && (!Hb || gb[1] > Hb[0] && gb[1] < Hb[3])) {
                    pb.label = gb[1];
                    break
                  }
                  if (6 === gb[0] && pb.label < Hb[1]) {
                    pb.label = Hb[1], Hb = gb;
                    break
                  }
                  if (Hb && pb.label < Hb[2]) {
                    pb.label = Hb[2], pb.ops.push(gb);
                    break
                  }
                  Hb[2] && pb.ops.pop(), pb.trys.pop();
                  continue
              }
              gb = wb.call(bb, pb)
            } catch (lb) {
              gb = [6, lb], eb = 0
            } finally {
              Mb = Hb = 0
            }
            if (5 & gb[0]) throw gb[1];
            return {
              value: gb[0] ? gb[1] : void 0,
              done: !0
            }
          }([gb, lb])
        }
      }
    }
    var Fb = Object.create ? function(bb, wb, Mb, eb) {
      void 0 === eb && (eb = Mb);
      var Hb = Object.getOwnPropertyDescriptor(wb, Mb);
      Hb && !("get" in Hb ? !wb.__esModule : Hb.writable || Hb.configurable) || (Hb = {
        enumerable: !0,
        get: function() {
          return wb[Mb]
        }
      }), Object.defineProperty(bb, eb, Hb)
    } : function(bb, wb, Mb, eb) {
      void 0 === eb && (eb = Mb), bb[eb] = wb[Mb]
    };

    function Bb(bb, wb) {
      for (var Mb in bb) "default" === Mb || Object.prototype.hasOwnProperty.call(wb, Mb) || Fb(wb, bb, Mb)
    }

    function sb(bb) {
      var wb = "function" === typeof Symbol && Symbol.iterator,
        Mb = wb && bb[wb],
        eb = 0;
      if (Mb) return Mb.call(bb);
      if (bb && "number" === typeof bb.length) return {
        next: function() {
          return bb && eb >= bb.length && (bb = void 0), {
            value: bb && bb[eb++],
            done: !bb
          }
        }
      };
      throw new TypeError(wb ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function mb(bb, wb) {
      var Mb = "function" === typeof Symbol && bb[Symbol.iterator];
      if (!Mb) return bb;
      var eb, Hb, pb = Mb.call(bb),
        Vb = [];
      try {
        for (;
          (void 0 === wb || wb-- > 0) && !(eb = pb.next()).done;) Vb.push(eb.value)
      } catch (gb) {
        Hb = {
          error: gb
        }
      } finally {
        try {
          eb && !eb.done && (Mb = pb.return) && Mb.call(pb)
        } finally {
          if (Hb) throw Hb.error
        }
      }
      return Vb
    }

    function hb() {
      for (var bb = [], wb = 0; wb < arguments.length; wb++) bb = bb.concat(mb(arguments[wb]));
      return bb
    }

    function zb() {
      for (var bb = 0, wb = 0, Mb = arguments.length; wb < Mb; wb++) bb += arguments[wb].length;
      var eb = Array(bb),
        Hb = 0;
      for (wb = 0; wb < Mb; wb++)
        for (var pb = arguments[wb], Vb = 0, gb = pb.length; Vb < gb; Vb++, Hb++) eb[Hb] = pb[Vb];
      return eb
    }

    function Xb(bb, wb, Mb) {
      if (Mb || 2 === arguments.length)
        for (var eb, Hb = 0, pb = wb.length; Hb < pb; Hb++) !eb && Hb in wb || (eb || (eb = Array.prototype.slice.call(wb, 0, Hb)), eb[Hb] = wb[Hb]);
      return bb.concat(eb || Array.prototype.slice.call(wb))
    }

    function xb(bb) {
      return this instanceof xb ? (this.v = bb, this) : new xb(bb)
    }

    function jb(bb, wb, Mb) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var eb, Hb = Mb.apply(bb, wb || []),
        pb = [];
      return eb = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Vb("next"), Vb("throw"), Vb("return", (function(bb) {
        return function(wb) {
          return Promise.resolve(wb).then(bb, Lb)
        }
      })), eb[Symbol.asyncIterator] = function() {
        return this
      }, eb;

      function Vb(bb, wb) {
        Hb[bb] && (eb[bb] = function(wb) {
          return new Promise((function(Mb, eb) {
            pb.push([bb, wb, Mb, eb]) > 1 || gb(bb, wb)
          }))
        }, wb && (eb[bb] = wb(eb[bb])))
      }

      function gb(bb, wb) {
        try {
          (Mb = Hb[bb](wb)).value instanceof xb ? Promise.resolve(Mb.value.v).then(lb, Lb) : Ib(pb[0][2], Mb)
        } catch (eb) {
          Ib(pb[0][3], eb)
        }
        var Mb
      }

      function lb(bb) {
        gb("next", bb)
      }

      function Lb(bb) {
        gb("throw", bb)
      }

      function Ib(bb, wb) {
        bb(wb), pb.shift(), pb.length && gb(pb[0][0], pb[0][1])
      }
    }

    function Kb(bb) {
      var wb, Mb;
      return wb = {}, eb("next"), eb("throw", (function(bb) {
        throw bb
      })), eb("return"), wb[Symbol.iterator] = function() {
        return this
      }, wb;

      function eb(eb, Hb) {
        wb[eb] = bb[eb] ? function(wb) {
          return (Mb = !Mb) ? {
            value: xb(bb[eb](wb)),
            done: !1
          } : Hb ? Hb(wb) : wb
        } : Hb
      }
    }

    function rb(bb) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var wb, Mb = bb[Symbol.asyncIterator];
      return Mb ? Mb.call(bb) : (bb = sb(bb), wb = {}, eb("next"), eb("throw"), eb("return"), wb[Symbol.asyncIterator] = function() {
        return this
      }, wb);

      function eb(Mb) {
        wb[Mb] = bb[Mb] && function(wb) {
          return new Promise((function(eb, Hb) {
            (function(bb, wb, Mb, eb) {
              Promise.resolve(eb).then((function(wb) {
                bb({
                  value: wb,
                  done: Mb
                })
              }), wb)
            })(eb, Hb, (wb = bb[Mb](wb)).done, wb.value)
          }))
        }
      }
    }

    function Rb(bb, wb) {
      return Object.defineProperty ? Object.defineProperty(bb, "raw", {
        value: wb
      }) : bb.raw = wb, bb
    }
    var Db = Object.create ? function(bb, wb) {
        Object.defineProperty(bb, "default", {
          enumerable: !0,
          value: wb
        })
      } : function(bb, wb) {
        bb.default = wb
      },
      cb = function(bb) {
        return cb = Object.getOwnPropertyNames || function(bb) {
          var wb = [];
          for (var Mb in bb) Object.prototype.hasOwnProperty.call(bb, Mb) && (wb[wb.length] = Mb);
          return wb
        }, cb(bb)
      };

    function Yb(bb) {
      if (bb && bb.__esModule) return bb;
      var wb = {};
      if (null != bb)
        for (var Mb = cb(bb), eb = 0; eb < Mb.length; eb++) "default" !== Mb[eb] && Fb(wb, bb, Mb[eb]);
      return Db(wb, bb), wb
    }

    function Zb(bb) {
      return bb && bb.__esModule ? bb : {
        default: bb
      }
    }

    function fb(bb, wb, Mb, eb) {
      if ("a" === Mb && !eb) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof wb ? bb !== wb || !eb : !wb.has(bb)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Mb ? eb : "a" === Mb ? eb.call(bb) : eb ? eb.value : wb.get(bb)
    }

    function Ab(bb, wb, Mb, eb, Hb) {
      if ("m" === eb) throw new TypeError("Private method is not writable");
      if ("a" === eb && !Hb) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof wb ? bb !== wb || !Hb : !wb.has(bb)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === eb ? Hb.call(bb, Mb) : Hb ? Hb.value = Mb : wb.set(bb, Mb), Mb
    }

    function Wb(bb, wb) {
      if (null === wb || "object" !== typeof wb && "function" !== typeof wb) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof bb ? wb === bb : bb.has(wb)
    }

    function Jb(bb, wb, Mb) {
      if (null !== wb && void 0 !== wb) {
        if ("object" !== typeof wb && "function" !== typeof wb) throw new TypeError("Object expected.");
        var eb, Hb;
        if (Mb) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          eb = wb[Symbol.asyncDispose]
        }
        if (void 0 === eb) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          eb = wb[Symbol.dispose], Mb && (Hb = eb)
        }
        if ("function" !== typeof eb) throw new TypeError("Object not disposable.");
        Hb && (eb = function() {
          try {
            Hb.call(this)
          } catch (bb) {
            return Promise.reject(bb)
          }
        }), bb.stack.push({
          value: wb,
          dispose: eb,
          async: Mb
        })
      } else Mb && bb.stack.push({
        async: !0
      });
      return wb
    }
    var Sb = "function" === typeof SuppressedError ? SuppressedError : function(bb, wb, Mb) {
      var eb = new Error(Mb);
      return eb.name = "SuppressedError", eb.error = bb, eb.suppressed = wb, eb
    };

    function Nb(bb) {
      function wb(wb) {
        bb.error = bb.hasError ? new Sb(wb, bb.error, "An error was suppressed during disposal.") : wb, bb.hasError = !0
      }
      var Mb, eb = 0;
      return function Hb() {
        for (; Mb = bb.stack.pop();) try {
          if (!Mb.async && 1 === eb) return eb = 0, bb.stack.push(Mb), Promise.resolve().then(Hb);
          if (Mb.dispose) {
            var pb = Mb.dispose.call(Mb.value);
            if (Mb.async) return eb |= 2, Promise.resolve(pb).then(Hb, (function(bb) {
              return wb(bb), Hb()
            }))
          } else eb |= 1
        } catch (Vb) {
          wb(Vb)
        }
        if (1 === eb) return bb.hasError ? Promise.reject(bb.error) : Promise.resolve();
        if (bb.hasError) throw bb.error
      }()
    }

    function vb(bb, wb) {
      return "string" === typeof bb && /^\.\.?\//.test(bb) ? bb.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(bb, Mb, eb, Hb, pb) {
        return Mb ? wb ? ".jsx" : ".js" : !eb || Hb && pb ? eb + Hb + "." + pb.toLowerCase() + "js" : bb
      })) : bb
    }
    const Qb = {
      __extends: Hb,
      __assign: pb,
      __rest: Vb,
      __decorate: gb,
      __param: lb,
      __esDecorate: Lb,
      __runInitializers: Ib,
      __propKey: Ob,
      __setFunctionName: Ub,
      __metadata: tb,
      __awaiter: Cb,
      __generator: Eb,
      __createBinding: Fb,
      __exportStar: Bb,
      __values: sb,
      __read: mb,
      __spread: hb,
      __spreadArrays: zb,
      __spreadArray: Xb,
      __await: xb,
      __asyncGenerator: jb,
      __asyncDelegator: Kb,
      __asyncValues: rb,
      __makeTemplateObject: Rb,
      __importStar: Yb,
      __importDefault: Zb,
      __classPrivateFieldGet: fb,
      __classPrivateFieldSet: Ab,
      __classPrivateFieldIn: Wb,
      __addDisposableResource: Jb,
      __disposeResources: Nb,
      __rewriteRelativeImportExtension: vb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);