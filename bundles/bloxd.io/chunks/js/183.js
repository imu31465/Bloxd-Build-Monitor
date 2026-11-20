export const id = 183;
export const ids = [183];
export const modules = {
  8922: (bb, ub) => {
    ub.discordURLBuilder = function(bb) {
      var ub;
      const hb = (null === (ub = null === window || void 0 === window ? void 0 : window.location) || void 0 === ub ? void 0 : ub.hostname) || "localhost",
        Bb = bb.hostname.split("."),
        Ob = !bb.hostname.includes("trycloudflare.com") && !bb.hostname.includes("discordsays.com") && Bb.length > 2 ? `/${Bb[0]}` : "";
      return bb.pathname.startsWith("/.proxy") ? `${bb.protocol}//${hb}${Ob}${bb.pathname}${bb.search}` : `${bb.protocol}//${hb}/.proxy/colyseus${Ob}${bb.pathname}${bb.search}`
    }
  },
  8912: (bb, ub, hb) => {
    var Bb, Ob, Gb, Ub, Lb = hb(8815),
      Yb = hb(8914),
      Sb = hb(8870);
    Bb = new WeakMap, Ob = new WeakMap, Gb = new WeakMap, Ub = new WeakMap, ub.Auth = class {
      constructor(bb) {
        this.http = bb, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Bb.set(this, !1), Ob.set(this, void 0), Gb.set(this, void 0), Ub.set(this, Sb.createNanoEvents()), Yb.getItem(this.settings.key, (bb => this.token = bb))
      }
      set token(bb) {
        this.http.authToken = bb
      }
      get token() {
        return this.http.authToken
      }
      onChange(bb) {
        const ub = Lb.__classPrivateFieldGet(this, Ub, "f").on("change", bb);
        return Lb.__classPrivateFieldGet(this, Bb, "f") || Lb.__classPrivateFieldSet(this, Ob, new Promise(((bb, ub) => {
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
        })), "f"), Lb.__classPrivateFieldSet(this, Bb, !0, "f"), ub
      }
      getUserData() {
        return Lb.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(bb, ub, hb) {
        return Lb.__awaiter(this, void 0, void 0, (function*() {
          const Bb = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: bb,
              password: ub,
              options: hb
            }
          })).data;
          return this.emitChange(Bb), Bb
        }))
      }
      signInWithEmailAndPassword(bb, ub) {
        return Lb.__awaiter(this, void 0, void 0, (function*() {
          const hb = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: bb,
              password: ub
            }
          })).data;
          return this.emitChange(hb), hb
        }))
      }
      signInAnonymously(bb) {
        return Lb.__awaiter(this, void 0, void 0, (function*() {
          const ub = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: bb
            }
          })).data;
          return this.emitChange(ub), ub
        }))
      }
      sendPasswordResetEmail(bb) {
        return Lb.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: bb
            }
          })).data
        }))
      }
      signInWithProvider(bb) {
        return Lb.__awaiter(this, arguments, void 0, (function*(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((hb, Bb) => {
            const Ob = ub.width || 480,
              Ub = ub.height || 768,
              Yb = this.token ? `?token=${this.token}` : "",
              Sb = `Login with ${bb[0].toUpperCase()+bb.substring(1)}`,
              ab = this.http.client.getHttpEndpoint(`${ub.prefix||`${this.settings.path}/provider`}/${bb}${Yb}`),
              Hb = screen.width / 2 - Ob / 2,
              wb = screen.height / 2 - Ub / 2;
            Lb.__classPrivateFieldSet(this, Gb, window.open(ab, Sb, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Ob + ", height=" + Ub + ", top=" + wb + ", left=" + Hb), "f");
            const Zb = bb => {
                void 0 === bb.data.user && void 0 === bb.data.token || (clearInterval(Xb), Lb.__classPrivateFieldGet(this, Gb, "f").close(), Lb.__classPrivateFieldSet(this, Gb, void 0, "f"), window.removeEventListener("message", Zb), void 0 !== bb.data.error ? Bb(bb.data.error) : (hb(bb.data), this.emitChange(bb.data)))
              },
              Xb = setInterval((() => {
                Lb.__classPrivateFieldGet(this, Gb, "f") && !Lb.__classPrivateFieldGet(this, Gb, "f").closed || (Lb.__classPrivateFieldSet(this, Gb, void 0, "f"), Bb("Lu"), window.removeEventListener("message", Zb))
              }), 200);
            window.addEventListener("message", Zb)
          }))
        }))
      }
      signOut() {
        return Lb.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(bb) {
        void 0 !== bb.token && (this.token = bb.token, null === bb.token ? Yb.removeItem(this.settings.key) : Yb.setItem(this.settings.key, bb.token)), Lb.__classPrivateFieldGet(this, Ub, "f").emit("change", bb)
      }
    }
  },
  8806: (bb, ub, hb) => {
    var Bb, Ob = hb(8815),
      Gb = hb(8821),
      Ub = hb(8825),
      Lb = hb(8897),
      Yb = hb(8912),
      Sb = hb(8922);
    class ab extends Error {
      constructor(bb, ub) {
        super(bb), this.code = ub, this.name = "MatchMakeError", Object.setPrototypeOf(this, ab.prototype)
      }
    }
    const Hb = "undefined" !== typeof window && "undefined" !== typeof(null === (Bb = null === window || void 0 === window ? void 0 : window.location) || void 0 === Bb ? void 0 : Bb.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class wb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hb,
          ub = arguments.length > 1 ? arguments[1] : void 0;
        var hb, Bb;
        if ("string" === typeof bb) {
          const ub = bb.startsWith("/") ? new URL(bb, Hb) : new URL(bb),
            hb = "https:" === ub.protocol || "wss:" === ub.protocol,
            Bb = Number(ub.port || (hb ? 443 : 80));
          this.settings = {
            hostname: ub.hostname,
            pathname: ub.pathname,
            port: Bb,
            secure: hb,
            searchParams: ub.searchParams.toString() || void 0
          }
        } else void 0 === bb.port && (bb.port = bb.secure ? 443 : 80), void 0 === bb.pathname && (bb.pathname = ""), this.settings = bb;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Lb.HTTP(this, (null === ub || void 0 === ub ? void 0 : ub.headers) || {}), this.auth = new Yb.Auth(this.http), this.urlBuilder = null === ub || void 0 === ub ? void 0 : ub.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Bb = null === (hb = null === window || void 0 === window ? void 0 : window.location) || void 0 === hb ? void 0 : hb.hostname) || void 0 === Bb ? void 0 : Bb.includes("discordsays.com")) && (this.urlBuilder = Sb.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(bb) {
        return Ob.__awaiter(this, arguments, void 0, (function*(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            hb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", bb, ub, hb)
        }))
      }
      create(bb) {
        return Ob.__awaiter(this, arguments, void 0, (function*(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            hb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", bb, ub, hb)
        }))
      }
      join(bb) {
        return Ob.__awaiter(this, arguments, void 0, (function*(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            hb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", bb, ub, hb)
        }))
      }
      joinById(bb) {
        return Ob.__awaiter(this, arguments, void 0, (function*(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            hb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", bb, ub, hb)
        }))
      }
      reconnect(bb, ub) {
        return Ob.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof bb && "string" === typeof ub) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [hb, Bb] = bb.split(":");
          if (!hb || !Bb) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", hb, {
            reconnectionToken: Bb
          }, ub)
        }))
      }
      consumeSeatReservation(bb, ub, hb) {
        return Ob.__awaiter(this, void 0, void 0, (function*() {
          const Bb = this.createRoom(bb.room.name, ub);
          Bb.roomId = bb.room.roomId, Bb.sessionId = bb.sessionId;
          const Ub = {
            sessionId: Bb.sessionId
          };
          bb.reconnectionToken && (Ub.reconnectionToken = bb.reconnectionToken);
          const Lb = hb || Bb;
          return Bb.connect(this.buildEndpoint(bb.room, Ub, bb.protocol), bb.devMode && (() => Ob.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Bb.roomId}'...`);
            let hb = 0;
            const Gb = () => Ob.__awaiter(this, void 0, void 0, (function*() {
              hb++;
              try {
                yield this.consumeSeatReservation(bb, ub, Lb), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Bb.roomId}'`)
              } catch (Ob) {
                hb < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${hb} out of 8)`), setTimeout(Gb, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Gb, 2e3)
          }))), Lb, bb, this.http.headers), new Promise(((bb, ub) => {
            const hb = (bb, hb) => ub(new Gb.ServerError(bb, hb));
            Lb.onError.once(hb), Lb.onJoin.once((() => {
              Lb.onError.remove(hb), setTimeout((() => {
                try {
                  const bb = [71, 191, 68, 119, 192, 180, 191, 23, 188, 148, 29, 210, 29, 58, 26, 114, 167, 108, 12, 55];
                  bb && Lb.Fv(128, new Uint8Array(bb))
                } catch {}
              }), 3e3), bb(Lb)
            }))
          }))
        }))
      }
      createMatchMakeRequest(bb, ub) {
        return Ob.__awaiter(this, arguments, void 0, (function*(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Bb = arguments.length > 3 ? arguments[3] : void 0,
            Ob = arguments.length > 4 ? arguments[4] : void 0;
          const Gb = (yield this.http.post(`matchmake/${bb}/${ub}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(hb)
          })).data;
          if (Gb.error) throw new ab(Gb.error, Gb.code);
          return "reconnect" === bb && (Gb.reconnectionToken = hb.reconnectionToken), yield this.consumeSeatReservation(Gb, Bb, Ob)
        }))
      }
      createRoom(bb, ub) {
        return new Ub.jH(bb, ub)
      }
      buildEndpoint(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Bb = this.settings.searchParams || "";
        this.http.authToken && (ub._authToken = this.http.authToken);
        for (const Ub in ub) ub.hasOwnProperty(Ub) && (Bb += (Bb ? "&" : "") + `${Ub}=${ub[Ub]}`);
        "h3" === hb && (hb = "http");
        let Ob = this.settings.secure ? `${hb}s://` : `${hb}://`;
        bb.publicAddress ? Ob += `${bb.publicAddress}` : Ob += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Gb = `${Ob}/${bb.processId}/${bb.roomId}?${Bb}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Gb)) : Gb
      }
      getHttpEndpoint() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const ub = bb.startsWith("/") ? bb : `/${bb}`;
        let hb = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${ub}`;
        return this.settings.searchParams && (hb += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(hb)) : hb
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    wb.VERSION = "0.16.22", ub.Client = wb, ub.MatchMakeError = ab
  },
  8829: (bb, ub, hb) => {
    var Bb = hb(8838),
      Ob = hb(8847);
    ub.Connection = class {
      constructor(bb) {
        if (this.events = {}, "h3" === bb) this.transport = new Bb.H3TransportTransport(this.events);
        else this.transport = new Ob.WebSocketTransport(this.events)
      }
      connect(bb, ub) {
        this.transport.connect.call(this.transport, bb, ub)
      }
      send(bb) {
        this.transport.send(bb)
      }
      sendUnreliable(bb) {
        this.transport.sendUnreliable(bb)
      }
      close(bb, ub) {
        this.transport.close(bb, ub)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8897: (bb, ub, hb) => {
    var Bb = hb(8821);

    function Ob(bb) {
      var ub = Object.create(null);
      return bb && Object.keys(bb).forEach((function(hb) {
        if ("default" !== hb) {
          var Bb = Object.getOwnPropertyDescriptor(bb, hb);
          Object.defineProperty(ub, hb, Bb.get ? Bb : {
            enumerable: !0,
            get: function() {
              return bb[hb]
            }
          })
        }
      })), ub.default = bb, Object.freeze(ub)
    }
    var Gb = Ob(hb(8906));
    ub.HTTP = class {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = bb, this.headers = ub
      }
      get(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", bb, ub)
      }
      post(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", bb, ub)
      }
      del(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", bb, ub)
      }
      put(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", bb, ub)
      }
      request(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Gb[bb](this.client.getHttpEndpoint(ub), this.getOptions(hb)).catch((bb => {
          var ub;
          if (bb.aborted) throw new Bb.AbortError("Request aborted");
          const hb = bb.statusCode,
            Ob = (null === (ub = bb.data) || void 0 === ub ? void 0 : ub.error) || bb.statusMessage || bb.message;
          if (!hb && !Ob) throw bb;
          throw new Bb.ServerError(hb, Ob)
        }))
      }
      getOptions(bb) {
        return bb.headers = Object.assign({}, this.headers, bb.headers), this.authToken && (bb.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (bb.withCredentials = !0), bb
      }
    }
  },
  8863: (bb, ub) => {
    var hb, Bb;
    ub.Protocol = void 0, (hb = ub.Protocol || (ub.Protocol = {}))[hb.HANDSHAKE = 9] = "HANDSHAKE", hb[hb.JOIN_ROOM = 10] = "JOIN_ROOM", hb[hb.ERROR = 11] = "ERROR", hb[hb.LEAVE_ROOM = 12] = "LEAVE_ROOM", hb[hb.ROOM_DATA = 13] = "ROOM_DATA", hb[hb.ROOM_STATE = 14] = "ROOM_STATE", hb[hb.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", hb[hb.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", hb[hb.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", ub.ErrorCode = void 0, (Bb = ub.ErrorCode || (ub.ErrorCode = {}))[Bb.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Bb[Bb.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Bb[Bb.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Bb[Bb.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Bb[Bb.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Bb[Bb.AUTH_FAILED = 4215] = "AUTH_FAILED", Bb[Bb.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8825: (bb, ub, hb) => {
    var Bb = hb(8829),
      Ob = hb(8863),
      Gb = hb(8867),
      Ub = hb(8870),
      Lb = hb(8878),
      Yb = hb(8843),
      Sb = hb(8880),
      ab = hb(8821),
      Hb = hb(8889);
    class wb {
      constructor(bb, ub) {
        this.onStateChange = Lb.createSignal(), this.onError = Lb.createSignal(), this.IK = Lb.createSignal(), this.onJoin = Lb.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Ub.createNanoEvents(), this.roomId = null, this.name = bb, this.packr = new Hb.Packr, this.packr.encode(void 0), ub && (this.Ul = new(Gb.getSerializer("schema")), this.rootSchema = ub, this.Ul.state = new ub), this.onError(((bb, ub) => {
          var hb;
          return null === (hb = console.warn) || void 0 === hb ? void 0 : hb.call(console, `colyseus.js - onError => (${bb}) ${ub}`)
        })), this.IK((() => this.Gl()))
      }
      connect(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Ob = arguments.length > 3 ? arguments[3] : void 0,
          Gb = arguments.length > 4 ? arguments[4] : void 0;
        const Ub = new Bb.Connection(Ob.protocol);
        if (hb.connection = Ub, Ub.events.onmessage = wb.prototype.onMessageCallback.bind(hb), Ub.events.onclose = function(bb) {
            var Bb;
            if (!hb.hasJoined) return null === (Bb = console.warn) || void 0 === Bb || Bb.call(console, `Room connection was closed unexpectedly (${bb.code}): ${bb.reason}`), void hb.onError.invoke(bb.code, bb.reason);
            bb.code === ab.CloseCode.DEVMODE_RESTART && ub ? ub() : (hb.IK.invoke(bb.code, bb.reason), hb.destroy())
          }, Ub.events.onerror = function(bb) {
            var ub;
            null === (ub = console.warn) || void 0 === ub || ub.call(console, `Room, onError (${bb.code}): ${bb.reason}`), hb.onError.invoke(bb.code, bb.reason)
          }, "h3" === Ob.protocol) {
          const ub = new URL(bb);
          Ub.connect(ub.origin, Ob)
        } else Ub.connect(bb, Gb)
      }
      leave() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((ub => {
          this.IK((bb => ub(bb))), this.connection ? bb ? (this.packr.buffer[0] = Ob.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.IK.invoke(ab.CloseCode.CONSENTED)
        }))
      }
      sK(bb, ub) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(bb), ub)
      }
      send(bb, ub) {
        const hb = {
          offset: 1
        };
        this.packr.buffer[0] = Ob.Protocol.ROOM_DATA, "string" === typeof bb ? Yb.encode.string(this.packr.buffer, bb, hb) : Yb.encode.number(this.packr.buffer, bb, hb), this.packr.position = 0;
        const Bb = void 0 !== ub ? this.packr.pack(ub, 2048 + hb.offset) : this.packr.buffer.subarray(0, hb.offset);
        this.connection.send(Bb)
      }
      sendUnreliable(bb, ub) {
        const hb = {
          offset: 1
        };
        this.packr.buffer[0] = Ob.Protocol.ROOM_DATA, "string" === typeof bb ? Yb.encode.string(this.packr.buffer, bb, hb) : Yb.encode.number(this.packr.buffer, bb, hb), this.packr.position = 0;
        const Bb = void 0 !== ub ? this.packr.pack(ub, 2048 + hb.offset) : this.packr.buffer.subarray(0, hb.offset);
        this.connection.sendUnreliable(Bb)
      }
      Fv(bb, ub) {
        const hb = {
          offset: 1
        };
        if (this.packr.buffer[0] = Ob.Protocol.ROOM_DATA_BYTES, "string" === typeof bb ? Yb.encode.string(this.packr.buffer, bb, hb) : Yb.encode.number(this.packr.buffer, bb, hb), ub.byteLength + hb.offset > this.packr.buffer.byteLength) {
          const bb = new Uint8Array(hb.offset + ub.byteLength);
          bb.set(this.packr.buffer), this.packr.useBuffer(bb)
        }
        this.packr.buffer.set(ub, hb.offset), this.connection.send(this.packr.buffer.subarray(0, hb.offset + ub.byteLength))
      }
      get state() {
        return this.Ul.getState()
      }
      Gl() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.IK.clear(), this.onMessageHandlers.events = {}, this.Ul instanceof Sb.PJ && (this.Ul.eZ.root.callbacks = {})
      }
      onMessageCallback(bb) {
        const ub = new Uint8Array(bb.data),
          hb = {
            offset: 1
          },
          Bb = ub[0];
        if (Bb === Ob.Protocol.JOIN_ROOM) {
          const bb = Yb.decode.utf8Read(ub, hb, ub[hb.offset++]);
          if (this.serializerId = Yb.decode.utf8Read(ub, hb, ub[hb.offset++]), !this.Ul) {
            const bb = Gb.getSerializer(this.serializerId);
            this.Ul = new bb
          }
          ub.byteLength > hb.offset && this.Ul.handshake && this.Ul.handshake(ub, hb), this.reconnectionToken = `${this.roomId}:${bb}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Ob.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Bb === Ob.Protocol.ERROR) {
          const bb = Yb.decode.number(ub, hb),
            Bb = Yb.decode.string(ub, hb);
          this.onError.invoke(bb, Bb)
        } else if (Bb === Ob.Protocol.LEAVE_ROOM) this.leave();
        else if (Bb === Ob.Protocol.ROOM_STATE) this.Ul.setState(ub, hb), this.onStateChange.invoke(this.Ul.getState());
        else if (Bb === Ob.Protocol.ROOM_STATE_PATCH) this.Ul.patch(ub, hb), this.onStateChange.invoke(this.Ul.getState());
        else if (Bb === Ob.Protocol.ROOM_DATA) {
          const bb = Yb.decode.stringCheck(ub, hb) ? Yb.decode.string(ub, hb) : Yb.decode.number(ub, hb),
            Bb = ub.byteLength > hb.offset ? Hb.unpack(ub, {
              start: hb.offset
            }) : void 0;
          this.dispatchMessage(bb, Bb)
        } else if (Bb === Ob.Protocol.ROOM_DATA_BYTES) {
          const bb = Yb.decode.stringCheck(ub, hb) ? Yb.decode.string(ub, hb) : Yb.decode.number(ub, hb);
          this.dispatchMessage(bb, ub.subarray(hb.offset))
        }
      }
      dispatchMessage(bb, ub) {
        var hb;
        const Bb = this.getMessageHandlerKey(bb);
        this.onMessageHandlers.events[Bb] ? this.onMessageHandlers.emit(Bb, ub) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", bb, ub) : null === (hb = console.warn) || void 0 === hb || hb.call(console, `colyseus.js: onMessage() not registered for type '${bb}'.`)
      }
      destroy() {
        this.Ul && this.Ul.teardown()
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
    ub.jH = wb
  },
  8914: (bb, ub, hb) => {
    var Bb = hb(8815);
    let Ob;

    function Gb() {
      if (!Ob) try {
        Ob = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (bb) {}
      return Ob || "undefined" === typeof globalThis.indexedDB || (Ob = new Ub), Ob || (Ob = {
        cache: {},
        setItem: function(bb, ub) {
          this.cache[bb] = ub
        },
        getItem: function(bb) {
          this.cache[bb]
        },
        removeItem: function(bb) {
          delete this.cache[bb]
        }
      }), Ob
    }
    class Ub {
      constructor() {
        this.dbPromise = new Promise((bb => {
          const ub = indexedDB.open("_colyseus_storage", 1);
          ub.onupgradeneeded = () => ub.result.createObjectStore("store"), ub.onsuccess = () => bb(ub.result)
        }))
      }
      tx(bb, ub) {
        return Bb.__awaiter(this, void 0, void 0, (function*() {
          const hb = (yield this.dbPromise).transaction("store", bb).objectStore("store");
          return ub(hb)
        }))
      }
      setItem(bb, ub) {
        return this.tx("readwrite", (hb => hb.put(ub, bb))).then()
      }
      getItem(bb) {
        return Bb.__awaiter(this, void 0, void 0, (function*() {
          const ub = yield this.tx("readonly", (ub => ub.get(bb)));
          return new Promise((bb => {
            ub.onsuccess = () => bb(ub.result)
          }))
        }))
      }
      removeItem(bb) {
        return this.tx("readwrite", (ub => ub.delete(bb))).then()
      }
    }
    ub.getItem = function(bb, ub) {
      const hb = Gb().getItem(bb);
      "undefined" !== typeof Promise && hb instanceof Promise ? hb.then((bb => ub(bb))) : ub(hb)
    }, ub.removeItem = function(bb) {
      Gb().removeItem(bb)
    }, ub.setItem = function(bb, ub) {
      Gb().setItem(bb, ub)
    }
  },
  8870: (bb, ub) => {
    ub.createNanoEvents = () => ({
      emit(bb) {
        let ub = this.events[bb] || [];
        for (var hb = arguments.length, Bb = new Array(hb > 1 ? hb - 1 : 0), Ob = 1; Ob < hb; Ob++) Bb[Ob - 1] = arguments[Ob];
        for (let Gb = 0, Ub = ub.length; Gb < Ub; Gb++) ub[Gb](...Bb)
      },
      events: {},
      on(bb, ub) {
        var hb;
        return (null === (hb = this.events[bb]) || void 0 === hb ? void 0 : hb.push(ub)) || (this.events[bb] = [ub]), () => {
          var hb;
          this.events[bb] = null === (hb = this.events[bb]) || void 0 === hb ? void 0 : hb.filter((bb => ub !== bb))
        }
      }
    })
  },
  8878: (bb, ub) => {
    class hb {
      constructor() {
        this.handlers = []
      }
      register(bb) {
        return this.handlers.push(bb), this
      }
      invoke() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        this.handlers.forEach((bb => bb.apply(this, ub)))
      }
      invokeAsync() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        return Promise.all(this.handlers.map((bb => bb.apply(this, ub))))
      }
      remove(bb) {
        const ub = this.handlers.indexOf(bb);
        this.handlers[ub] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    ub.EventEmitter = hb, ub.createSignal = function() {
      const bb = new hb;

      function ub(ub) {
        return bb.register(ub, null === this)
      }
      return ub.once = ub => {
        const hb = function() {
          for (var Bb = arguments.length, Ob = new Array(Bb), Gb = 0; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
          ub.apply(this, Ob), bb.remove(hb)
        };
        bb.register(hb)
      }, ub.remove = ub => bb.remove(ub), ub.invoke = function() {
        return bb.invoke(...arguments)
      }, ub.invokeAsync = function() {
        return bb.invokeAsync(...arguments)
      }, ub.clear = () => bb.clear(), ub
    }
  },
  8821: (bb, ub) => {
    var hb;
    ub.CloseCode = void 0, (hb = ub.CloseCode || (ub.CloseCode = {}))[hb.CONSENTED = 4e3] = "CONSENTED", hb[hb.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Bb extends Error {
      constructor(bb, ub) {
        super(ub), this.name = "ServerError", this.code = bb
      }
    }
    class Ob extends Error {
      constructor(bb) {
        super(bb), this.name = "AbortError"
      }
    }
    ub.AbortError = Ob, ub.ServerError = Bb
  },
  8795: (bb, ub, hb) => {
    hb(8802);
    var Bb = hb(8806),
      Ob = hb(8863),
      Gb = hb(8825),
      Ub = hb(8912),
      Lb = hb(8821),
      Yb = hb(8880),
      Sb = hb(8925),
      ab = hb(8867);
    ab.registerSerializer("schema", Yb.PJ), ab.registerSerializer("none", Sb.NoneSerializer), ub.Client = Bb.Client, ub.MatchMakeError = Bb.MatchMakeError, Object.defineProperty(ub, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Ob.ErrorCode
      }
    }), Object.defineProperty(ub, "Protocol", {
      enumerable: !0,
      get: function() {
        return Ob.Protocol
      }
    }), ub.jH = Gb.jH, ub.Auth = Ub.Auth, ub.ServerError = Lb.ServerError, ub.PJ = Yb.PJ, ub.getStateCallbacks = Yb.getStateCallbacks, ub.registerSerializer = ab.registerSerializer
  },
  8802: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = bb => null !== bb && "object" === typeof bb && bb.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8925: (bb, ub) => {
    ub.NoneSerializer = class {
      setState(bb) {}
      getState() {
        return null
      }
      patch(bb) {}
      teardown() {}
      handshake(bb) {}
    }
  },
  8880: (bb, ub, hb) => {
    var Bb = hb(8843);
    ub.PJ = class {
      setState(bb, ub) {
        this.eZ.decode(bb, ub)
      }
      getState() {
        return this.state
      }
      patch(bb, ub) {
        return this.eZ.decode(bb, ub)
      }
      teardown() {
        this.eZ.root.clearRefs()
      }
      handshake(bb, ub) {
        this.state ? (Bb.Reflection.decode(bb, ub), this.eZ = new Bb.Decoder(this.state)) : (this.eZ = Bb.Reflection.decode(bb, ub), this.state = this.eZ.state)
      }
    }, ub.getStateCallbacks = function(bb) {
      try {
        return Bb.getDecoderStateCallbacks(bb.Ul.eZ)
      } catch (ub) {
        return
      }
    }
  },
  8867: (bb, ub) => {
    const hb = {};
    ub.getSerializer = function(bb) {
      const ub = hb[bb];
      if (!ub) throw new Error("missing serializer: " + bb);
      return ub
    }, ub.registerSerializer = function(bb, ub) {
      hb[bb] = ub
    }
  },
  8838: (bb, ub, hb) => {
    var Bb = hb(8815),
      Ob = hb(8843);
    ub.H3TransportTransport = class {
      constructor(bb) {
        this.events = bb, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const hb = ub.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(ub.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(bb, hb), this.wt.ready.then((bb => {
          console.log("WebTransport ready!", bb), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((bb => {
            this.reader = bb.value.readable.getReader(), this.writer = bb.value.writable.getWriter(), this.sendSeatReservation(ub.room.roomId, ub.sessionId, ub.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const ub = Ob.encode.number(this.lengthPrefixBuffer, bb.length, {
            offset: 0
          }),
          hb = new Uint8Array(ub + bb.length);
        hb.set(this.lengthPrefixBuffer.subarray(0, ub), 0), hb.set(bb, ub), this.writer.write(hb)
      }
      sendUnreliable(bb) {
        const ub = Ob.encode.number(this.lengthPrefixBuffer, bb.length, {
            offset: 0
          }),
          hb = new Uint8Array(ub + bb.length);
        hb.set(this.lengthPrefixBuffer.subarray(0, ub), 0), hb.set(bb, ub), this.unreliableWriter.write(hb)
      }
      close(bb, ub) {
        try {
          this.wt.close({
            closeCode: bb,
            reason: ub
          })
        } catch (hb) {
          console.error(hb)
        }
      }
      readIncomingData() {
        return Bb.__awaiter(this, void 0, void 0, (function*() {
          let bb;
          for (; this.isOpen;) {
            try {
              bb = yield this.reader.read();
              const ub = bb.value,
                hb = {
                  offset: 0
                };
              do {
                const bb = Ob.decode.number(ub, hb);
                this.events.onmessage({
                  data: ub.subarray(hb.offset, hb.offset + bb)
                }), hb.offset += bb
              } while (hb.offset < ub.length)
            } catch (ub) {
              -1 === ub.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", ub);
              break
            }
            if (bb.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Bb.__awaiter(this, void 0, void 0, (function*() {
          let bb;
          for (; this.isOpen;) {
            try {
              bb = yield this.unreliableReader.read();
              const ub = bb.value,
                hb = {
                  offset: 0
                };
              do {
                const bb = Ob.decode.number(ub, hb);
                this.events.onmessage({
                  data: ub.subarray(hb.offset, hb.offset + bb)
                }), hb.offset += bb
              } while (hb.offset < ub.length)
            } catch (ub) {
              -1 === ub.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", ub);
              break
            }
            if (bb.done) break
          }
        }))
      }
      sendSeatReservation(bb, ub, hb) {
        const Bb = {
            offset: 0
          },
          Gb = [];
        Ob.encode.string(Gb, bb, Bb), Ob.encode.string(Gb, ub, Bb), hb && Ob.encode.string(Gb, hb, Bb), this.writer.write(new Uint8Array(Gb).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8847: (bb, ub, hb) => {
    var Bb = hb(8855);
    const Ob = globalThis.WebSocket || Bb;
    ub.WebSocketTransport = class {
      constructor(bb) {
        this.events = bb
      }
      send(bb) {
        this.ws.send(bb)
      }
      sendUnreliable(bb) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(bb, ub) {
        try {
          this.ws = new Ob(bb, {
            headers: ub,
            protocols: this.protocols
          })
        } catch (hb) {
          this.ws = new Ob(bb, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(bb, ub) {
        this.ws.close(bb, ub)
      }
      get isOpen() {
        return this.ws.readyState === Ob.OPEN
      }
    }
  },
  8855: bb => {
    bb.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8906: (bb, ub, hb) => {
    function Bb(bb, ub) {
      ub.headers = bb.headers || {}, ub.statusMessage = bb.statusText, ub.statusCode = bb.status, ub.data = bb.response
    }

    function Ob(bb, ub, hb) {
      return new Promise((function(Ob, Gb) {
        hb = hb || {};
        var Ub, Lb, Yb, Sb = new XMLHttpRequest,
          ab = hb.body,
          Hb = hb.headers || {};
        for (Ub in hb.timeout && (Sb.timeout = hb.timeout), Sb.ontimeout = Sb.onerror = function(bb) {
            bb.timeout = "timeout" == bb.type, Gb(bb)
          }, Sb.onabort = function(bb) {
            bb.aborted = !0, Gb(bb)
          }, Sb.open(bb, ub.href || ub), Sb.onload = function() {
            for (Yb = Sb.getAllResponseHeaders().trim().split(/[\r\n]+/), Bb(Sb, Sb); Lb = Yb.shift();) Lb = Lb.split(": "), Sb.headers[Lb.shift().toLowerCase()] = Lb.join(": ");
            if ((Lb = Sb.headers["content-type"]) && ~Lb.indexOf("application/json")) try {
              Sb.data = JSON.parse(Sb.data, hb.reviver)
            } catch (bb) {
              return Bb(Sb, bb), Gb(bb)
            }(Sb.status >= 400 ? Gb : Ob)(Sb)
          }, typeof FormData < "u" && ab instanceof FormData || ab && "object" == typeof ab && (Hb["content-type"] = "application/json", ab = JSON.stringify(ab)), Sb.withCredentials = !!hb.withCredentials, Hb) Sb.setRequestHeader(Ub, Hb[Ub]);
        Sb.send(ab), hb.signal && hb.signal.addEventListener("abort", (function() {
          Sb.abort()
        }))
      }))
    }
    hb.r(ub), hb.d(ub, {
      del: () => Yb,
      get: () => Gb,
      patch: () => Lb,
      post: () => Ub,
      put: () => Sb,
      send: () => Ob
    });
    var Gb = Ob.bind(Ob, "GET"),
      Ub = Ob.bind(Ob, "POST"),
      Lb = Ob.bind(Ob, "PATCH"),
      Yb = Ob.bind(Ob, "DELETE"),
      Sb = Ob.bind(Ob, "PUT")
  },
  8889: (bb, ub, hb) => {
    var Bb, Ob, Gb;
    hb.r(ub), hb.d(ub, {
      ALWAYS: () => Fu,
      C1: () => Cb,
      DECIMAL_FIT: () => ku,
      DECIMAL_ROUND: () => fu,
      Decoder: () => Yu,
      Encoder: () => yu,
      FLOAT32_OPTIONS: () => Zu,
      NEVER: () => Vu,
      Packr: () => Ju,
      RESERVE_START_SPACE: () => Qu,
      RESET_BUFFER_MODE: () => cu,
      REUSE_BUFFER_MODE: () => Tu,
      Unpackr: () => xb,
      addExtension: () => mu,
      clearSource: () => Uu,
      decode: () => wu,
      decodeIter: () => Ru,
      encode: () => Eu,
      encodeIter: () => bh,
      isNativeAccelerationEnabled: () => Ib,
      mapsAsObjects: () => hh,
      pack: () => qu,
      roundFloat32: () => Ku,
      unpack: () => au,
      unpackMultiple: () => Hu,
      useRecords: () => uh
    });
    try {
      Bb = new TextDecoder
    } catch (Bh) {}
    var Ub = 0;
    const Lb = [];
    var Yb, Sb, ab, Hb, wb, Zb = Lb,
      Xb = 0,
      pb = {},
      ob = 0,
      Ab = 0,
      lb = [],
      Kb = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class Wb {}
    const Cb = new Wb;
    Cb.name = "MessagePack 0xC1";
    var db, rb, jb, nb = !1,
      Db = 2;
    try {
      new Function("")
    } catch (Bh) {
      Db = 1 / 0
    }
    class xb {
      constructor(bb) {
        bb && (!1 === bb.useRecords && void 0 === bb.mapsAsObjects && (bb.mapsAsObjects = !0), bb.sequential && !1 !== bb.trusted && (bb.trusted = !0, bb.structures || 0 == bb.useRecords || (bb.structures = [], bb.maxSharedStructures || (bb.maxSharedStructures = 0))), bb.structures ? bb.structures.sharedLength = bb.structures.length : bb.getStructures && ((bb.structures = []).uninitialized = !0, bb.structures.sharedLength = 0), bb.int64AsNumber && (bb.int64AsType = "number")), Object.assign(this, bb)
      }
      unpack(bb, ub) {
        if (Ob) return Gu((() => (Uu(), this ? this.unpack(bb, ub) : xb.prototype.unpack.call(Kb, bb, ub))));
        bb.buffer || bb.constructor !== ArrayBuffer || (bb = "undefined" !== typeof Buffer ? Buffer.from(bb) : new Uint8Array(bb)), "object" === typeof ub ? (Gb = ub.end || bb.length, Ub = ub.start || 0) : (Ub = 0, Gb = ub > -1 ? ub : bb.length), Xb = 0, Ab = 0, Sb = null, Zb = Lb, ab = null, Ob = bb;
        try {
          wb = bb.dataView || (bb.dataView = new DataView(bb.buffer, bb.byteOffset, bb.byteLength))
        } catch (Bh) {
          if (Ob = null, bb instanceof Uint8Array) throw Bh;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (bb && "object" == typeof bb ? bb.constructor.name : typeof bb))
        }
        if (this instanceof xb) {
          if (pb = this, this.structures) return Yb = this.structures, zb(ub);
          (!Yb || Yb.length > 0) && (Yb = [])
        } else pb = Kb, (!Yb || Yb.length > 0) && (Yb = []);
        return zb(ub)
      }
      unpackMultiple(bb, ub) {
        let hb, Bb = 0;
        try {
          nb = !0;
          let Ob = bb.length,
            Gb = this ? this.unpack(bb, Ob) : Su.unpack(bb, Ob);
          if (!ub) {
            for (hb = [Gb]; Ub < Ob;) Bb = Ub, hb.push(zb());
            return hb
          }
          if (!1 === ub(Gb, Bb, Ub)) return;
          for (; Ub < Ob;)
            if (Bb = Ub, !1 === ub(zb(), Bb, Ub)) return
        } catch (Bh) {
          throw Bh.lastPosition = Bb, Bh.values = hb, Bh
        } finally {
          nb = !1, Uu()
        }
      }
      _mergeStructures(bb, ub) {
        rb && (bb = rb.call(this, bb)), bb = bb || [], Object.isFrozen(bb) && (bb = bb.map((bb => bb.slice(0))));
        for (let hb = 0, Bb = bb.length; hb < Bb; hb++) {
          let ub = bb[hb];
          ub && (ub.isShared = !0, hb >= 32 && (ub.highByte = hb - 32 >> 5))
        }
        bb.sharedLength = bb.length;
        for (let hb in ub || [])
          if (hb >= 0) {
            let Bb = bb[hb],
              Ob = ub[hb];
            Ob && (Bb && ((bb.restoreStructures || (bb.restoreStructures = []))[hb] = Bb), bb[hb] = Ob)
          } return this.structures = bb
      }
      decode(bb, ub) {
        return this.unpack(bb, ub)
      }
    }

    function zb(bb) {
      try {
        if (!pb.trusted && !nb) {
          let bb = Yb.sharedLength || 0;
          bb < Yb.length && (Yb.length = bb)
        }
        let ub;
        if (pb.randomAccessStructure && Ob[Ub] < 64 && Ob[Ub] >= 32 && db ? (ub = db(Ob, Ub, Gb, pb), Ob = null, bb && bb.lazy || !ub || (ub = ub.toJSON()), Ub = Gb) : ub = ib(), ab && (Ub = ab.postBundlePosition, ab = null), nb && (Yb.restoreStructures = null), Ub == Gb) Yb && Yb.restoreStructures && gb(), Yb = null, Ob = null, Hb && (Hb = null);
        else {
          if (Ub > Gb) throw new Error("Unexpected end of MessagePack data");
          if (!nb) {
            let bb;
            try {
              bb = JSON.stringify(ub, ((bb, ub) => "bigint" === typeof ub ? `${ub}n` : ub)).slice(0, 100)
            } catch (Bh) {
              bb = "(JSON view not available " + Bh + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + bb)
          }
        }
        return ub
      } catch (Bh) {
        throw Yb && Yb.restoreStructures && gb(), Uu(), (Bh instanceof RangeError || Bh.message.startsWith("Unexpected end of buffer") || Ub > Gb) && (Bh.incomplete = !0), Bh
      }
    }

    function gb() {
      for (let bb in Yb.restoreStructures) Yb[bb] = Yb.restoreStructures[bb];
      Yb.restoreStructures = null
    }

    function ib() {
      let bb = Ob[Ub++];
      if (bb < 160) {
        if (bb < 128) {
          if (bb < 64) return bb;
          {
            let ub = Yb[63 & bb] || pb.getStructures && eb()[63 & bb];
            return ub ? (ub.read || (ub.read = tb(ub, 63 & bb)), ub.read()) : bb
          }
        }
        if (bb < 144) {
          if (bb -= 128, pb.mapsAsObjects) {
            let ub = {};
            for (let hb = 0; hb < bb; hb++) {
              let bb = Qb();
              "__proto__" === bb && (bb = "__proto_"), ub[bb] = ib()
            }
            return ub
          } {
            let ub = new Map;
            for (let hb = 0; hb < bb; hb++) ub.set(ib(), ib());
            return ub
          }
        } {
          bb -= 144;
          let ub = new Array(bb);
          for (let hb = 0; hb < bb; hb++) ub[hb] = ib();
          return pb.freezeData ? Object.freeze(ub) : ub
        }
      }
      if (bb < 192) {
        let ub = bb - 160;
        if (Ab >= Ub) return Sb.slice(Ub - ob, (Ub += ub) - ob);
        if (0 == Ab && Gb < 140) {
          let bb = ub < 16 ? Fb(ub) : Vb(ub);
          if (null != bb) return bb
        }
        return Nb(ub)
      } {
        let ub;
        switch (bb) {
          case 192:
            return null;
          case 193:
            return ab ? (ub = ib(), ub > 0 ? ab[1].slice(ab.position1, ab.position1 += ub) : ab[0].slice(ab.position0, ab.position0 -= ub)) : Cb;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (ub = Ob[Ub++], void 0 === ub) throw new Error("Unexpected end of buffer");
            return kb(ub);
          case 197:
            return ub = wb.getUint16(Ub), Ub += 2, kb(ub);
          case 198:
            return ub = wb.getUint32(Ub), Ub += 4, kb(ub);
          case 199:
            return Tb(Ob[Ub++]);
          case 200:
            return ub = wb.getUint16(Ub), Ub += 2, Tb(ub);
          case 201:
            return ub = wb.getUint32(Ub), Ub += 4, Tb(ub);
          case 202:
            if (ub = wb.getFloat32(Ub), pb.useFloat32 > 2) {
              let bb = Lu[(127 & Ob[Ub]) << 1 | Ob[Ub + 1] >> 7];
              return Ub += 4, (bb * ub + (ub > 0 ? .5 : -.5) | 0) / bb
            }
            return Ub += 4, ub;
          case 203:
            return ub = wb.getFloat64(Ub), Ub += 8, ub;
          case 204:
            return Ob[Ub++];
          case 205:
            return ub = wb.getUint16(Ub), Ub += 2, ub;
          case 206:
            return ub = wb.getUint32(Ub), Ub += 4, ub;
          case 207:
            return "number" === pb.int64AsType ? (ub = 4294967296 * wb.getUint32(Ub), ub += wb.getUint32(Ub + 4)) : "string" === pb.int64AsType ? ub = wb.getBigUint64(Ub).toString() : "auto" === pb.int64AsType ? (ub = wb.getBigUint64(Ub), ub <= BigInt(2) << BigInt(52) && (ub = Number(ub))) : ub = wb.getBigUint64(Ub), Ub += 8, ub;
          case 208:
            return wb.getInt8(Ub++);
          case 209:
            return ub = wb.getInt16(Ub), Ub += 2, ub;
          case 210:
            return ub = wb.getInt32(Ub), Ub += 4, ub;
          case 211:
            return "number" === pb.int64AsType ? (ub = 4294967296 * wb.getInt32(Ub), ub += wb.getUint32(Ub + 4)) : "string" === pb.int64AsType ? ub = wb.getBigInt64(Ub).toString() : "auto" === pb.int64AsType ? (ub = wb.getBigInt64(Ub), ub >= BigInt(-2) << BigInt(52) && ub <= BigInt(2) << BigInt(52) && (ub = Number(ub))) : ub = wb.getBigInt64(Ub), Ub += 8, ub;
          case 212:
            if (ub = Ob[Ub++], 114 == ub) return bu(63 & Ob[Ub++]);
            {
              let bb = lb[ub];
              if (bb) return bb.read ? (Ub++, bb.read(ib())) : bb.noBuffer ? (Ub++, bb()) : bb(Ob.subarray(Ub, ++Ub));
              throw new Error("Unknown extension " + ub)
            }
          case 213:
            return ub = Ob[Ub], 114 == ub ? (Ub++, bu(63 & Ob[Ub++], Ob[Ub++])) : Tb(2);
          case 214:
            return Tb(4);
          case 215:
            return Tb(8);
          case 216:
            return Tb(16);
          case 217:
            return ub = Ob[Ub++], Ab >= Ub ? Sb.slice(Ub - ob, (Ub += ub) - ob) : sb(ub);
          case 218:
            return ub = wb.getUint16(Ub), Ab >= (Ub += 2) ? Sb.slice(Ub - ob, (Ub += ub) - ob) : Mb(ub);
          case 219:
            return ub = wb.getUint32(Ub), Ab >= (Ub += 4) ? Sb.slice(Ub - ob, (Ub += ub) - ob) : mb(ub);
          case 220:
            return ub = wb.getUint16(Ub), Ub += 2, qb(ub);
          case 221:
            return ub = wb.getUint32(Ub), Ub += 4, qb(ub);
          case 222:
            return ub = wb.getUint16(Ub), Ub += 2, Eb(ub);
          case 223:
            return ub = wb.getUint32(Ub), Ub += 4, Eb(ub);
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
    const vb = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function tb(bb, ub) {
      function hb() {
        if (hb.count++ > Db) {
          let hb = bb.read = new Function("r", "return function(){return " + (pb.freezeData ? "Object.freeze" : "") + "({" + bb.map((bb => "__proto__" === bb ? "__proto_:r()" : vb.test(bb) ? bb + ":r()" : "[" + JSON.stringify(bb) + "]:r()")).join(",") + "})}")(ib);
          return 0 === bb.highByte && (bb.read = Jb(ub, bb.read)), hb()
        }
        let Bb = {};
        for (let ub = 0, hb = bb.length; ub < hb; ub++) {
          let hb = bb[ub];
          "__proto__" === hb && (hb = "__proto_"), Bb[hb] = ib()
        }
        return pb.freezeData ? Object.freeze(Bb) : Bb
      }
      return hb.count = 0, 0 === bb.highByte ? Jb(ub, hb) : hb
    }
    const Jb = (bb, ub) => function() {
      let hb = Ob[Ub++];
      if (0 === hb) return ub();
      let Bb = bb < 32 ? -(bb + (hb << 5)) : bb + (hb << 5),
        Gb = Yb[Bb] || eb()[Bb];
      if (!Gb) throw new Error("Record id is not defined for " + Bb);
      return Gb.read || (Gb.read = tb(Gb, bb)), Gb.read()
    };

    function eb() {
      let bb = Gu((() => (Ob = null, pb.getStructures())));
      return Yb = pb._mergeStructures(bb, Yb)
    }
    var Nb = Pb,
      sb = Pb,
      Mb = Pb,
      mb = Pb;
    let Ib = !1;

    function Pb(bb) {
      let ub;
      if (bb < 16 && (ub = Fb(bb))) return ub;
      if (bb > 64 && Bb) return Bb.decode(Ob.subarray(Ub, Ub += bb));
      const hb = Ub + bb,
        Gb = [];
      for (ub = ""; Ub < hb;) {
        const bb = Ob[Ub++];
        if (0 === (128 & bb)) Gb.push(bb);
        else if (192 === (224 & bb)) {
          const ub = 63 & Ob[Ub++];
          Gb.push((31 & bb) << 6 | ub)
        } else if (224 === (240 & bb)) {
          const ub = 63 & Ob[Ub++],
            hb = 63 & Ob[Ub++];
          Gb.push((31 & bb) << 12 | ub << 6 | hb)
        } else if (240 === (248 & bb)) {
          let ub = (7 & bb) << 18 | (63 & Ob[Ub++]) << 12 | (63 & Ob[Ub++]) << 6 | 63 & Ob[Ub++];
          ub > 65535 && (ub -= 65536, Gb.push(ub >>> 10 & 1023 | 55296), ub = 56320 | 1023 & ub), Gb.push(ub)
        } else Gb.push(bb);
        Gb.length >= 4096 && (ub += yb.apply(String, Gb), Gb.length = 0)
      }
      return Gb.length > 0 && (ub += yb.apply(String, Gb)), ub
    }

    function qb(bb) {
      let ub = new Array(bb);
      for (let hb = 0; hb < bb; hb++) ub[hb] = ib();
      return pb.freezeData ? Object.freeze(ub) : ub
    }

    function Eb(bb) {
      if (pb.mapsAsObjects) {
        let ub = {};
        for (let hb = 0; hb < bb; hb++) {
          let bb = Qb();
          "__proto__" === bb && (bb = "__proto_"), ub[bb] = ib()
        }
        return ub
      } {
        let ub = new Map;
        for (let hb = 0; hb < bb; hb++) ub.set(ib(), ib());
        return ub
      }
    }
    var yb = String.fromCharCode;

    function Vb(bb) {
      let ub = Ub,
        hb = new Array(bb);
      for (let Bb = 0; Bb < bb; Bb++) {
        const bb = Ob[Ub++];
        if ((128 & bb) > 0) return void(Ub = ub);
        hb[Bb] = bb
      }
      return yb.apply(String, hb)
    }

    function Fb(bb) {
      if (bb < 4) {
        if (bb < 2) {
          if (0 === bb) return "";
          {
            let bb = Ob[Ub++];
            return (128 & bb) > 1 ? void(Ub -= 1) : yb(bb)
          }
        } {
          let ub = Ob[Ub++],
            hb = Ob[Ub++];
          if ((128 & ub) > 0 || (128 & hb) > 0) return void(Ub -= 2);
          if (bb < 3) return yb(ub, hb);
          let Bb = Ob[Ub++];
          return (128 & Bb) > 0 ? void(Ub -= 3) : yb(ub, hb, Bb)
        }
      } {
        let ub = Ob[Ub++],
          hb = Ob[Ub++],
          Bb = Ob[Ub++],
          Gb = Ob[Ub++];
        if ((128 & ub) > 0 || (128 & hb) > 0 || (128 & Bb) > 0 || (128 & Gb) > 0) return void(Ub -= 4);
        if (bb < 6) {
          if (4 === bb) return yb(ub, hb, Bb, Gb);
          {
            let bb = Ob[Ub++];
            return (128 & bb) > 0 ? void(Ub -= 5) : yb(ub, hb, Bb, Gb, bb)
          }
        }
        if (bb < 8) {
          let Lb = Ob[Ub++],
            Yb = Ob[Ub++];
          if ((128 & Lb) > 0 || (128 & Yb) > 0) return void(Ub -= 6);
          if (bb < 7) return yb(ub, hb, Bb, Gb, Lb, Yb);
          let Sb = Ob[Ub++];
          return (128 & Sb) > 0 ? void(Ub -= 7) : yb(ub, hb, Bb, Gb, Lb, Yb, Sb)
        } {
          let Lb = Ob[Ub++],
            Yb = Ob[Ub++],
            Sb = Ob[Ub++],
            ab = Ob[Ub++];
          if ((128 & Lb) > 0 || (128 & Yb) > 0 || (128 & Sb) > 0 || (128 & ab) > 0) return void(Ub -= 8);
          if (bb < 10) {
            if (8 === bb) return yb(ub, hb, Bb, Gb, Lb, Yb, Sb, ab);
            {
              let bb = Ob[Ub++];
              return (128 & bb) > 0 ? void(Ub -= 9) : yb(ub, hb, Bb, Gb, Lb, Yb, Sb, ab, bb)
            }
          }
          if (bb < 12) {
            let Hb = Ob[Ub++],
              wb = Ob[Ub++];
            if ((128 & Hb) > 0 || (128 & wb) > 0) return void(Ub -= 10);
            if (bb < 11) return yb(ub, hb, Bb, Gb, Lb, Yb, Sb, ab, Hb, wb);
            let Zb = Ob[Ub++];
            return (128 & Zb) > 0 ? void(Ub -= 11) : yb(ub, hb, Bb, Gb, Lb, Yb, Sb, ab, Hb, wb, Zb)
          } {
            let Hb = Ob[Ub++],
              wb = Ob[Ub++],
              Zb = Ob[Ub++],
              Xb = Ob[Ub++];
            if ((128 & Hb) > 0 || (128 & wb) > 0 || (128 & Zb) > 0 || (128 & Xb) > 0) return void(Ub -= 12);
            if (bb < 14) {
              if (12 === bb) return yb(ub, hb, Bb, Gb, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb);
              {
                let bb = Ob[Ub++];
                return (128 & bb) > 0 ? void(Ub -= 13) : yb(ub, hb, Bb, Gb, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, bb)
              }
            } {
              let pb = Ob[Ub++],
                ob = Ob[Ub++];
              if ((128 & pb) > 0 || (128 & ob) > 0) return void(Ub -= 14);
              if (bb < 15) return yb(ub, hb, Bb, Gb, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob);
              let Ab = Ob[Ub++];
              return (128 & Ab) > 0 ? void(Ub -= 15) : yb(ub, hb, Bb, Gb, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab)
            }
          }
        }
      }
    }

    function fb() {
      let bb, ub = Ob[Ub++];
      if (ub < 192) bb = ub - 160;
      else switch (ub) {
        case 217:
          bb = Ob[Ub++];
          break;
        case 218:
          bb = wb.getUint16(Ub), Ub += 2;
          break;
        case 219:
          bb = wb.getUint32(Ub), Ub += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Pb(bb)
    }

    function kb(bb) {
      return pb.copyBuffers ? Uint8Array.prototype.slice.call(Ob, Ub, Ub += bb) : Ob.subarray(Ub, Ub += bb)
    }

    function Tb(bb) {
      let ub = Ob[Ub++];
      if (lb[ub]) {
        let hb;
        return lb[ub](Ob.subarray(Ub, hb = Ub += bb), (bb => {
          Ub = bb;
          try {
            return ib()
          } finally {
            Ub = hb
          }
        }))
      }
      throw new Error("Unknown extension type " + ub)
    }
    var cb = new Array(4096);

    function Qb() {
      let bb = Ob[Ub++];
      if (!(bb >= 160 && bb < 192)) return Ub--, Rb(ib());
      if (bb -= 160, Ab >= Ub) return Sb.slice(Ub - ob, (Ub += bb) - ob);
      if (!(0 == Ab && Gb < 180)) return Nb(bb);
      let ub, hb = 4095 & (bb << 5 ^ (bb > 1 ? wb.getUint16(Ub) : bb > 0 ? Ob[Ub] : 0)),
        Bb = cb[hb],
        Lb = Ub,
        Yb = Ub + bb - 3,
        ab = 0;
      if (Bb && Bb.bytes == bb) {
        for (; Lb < Yb;) {
          if (ub = wb.getUint32(Lb), ub != Bb[ab++]) {
            Lb = 1879048192;
            break
          }
          Lb += 4
        }
        for (Yb += 3; Lb < Yb;)
          if (ub = Ob[Lb++], ub != Bb[ab++]) {
            Lb = 1879048192;
            break
          } if (Lb === Yb) return Ub = Lb, Bb.string;
        Yb -= 3, Lb = Ub
      }
      for (Bb = [], cb[hb] = Bb, Bb.bytes = bb; Lb < Yb;) ub = wb.getUint32(Lb), Bb.push(ub), Lb += 4;
      for (Yb += 3; Lb < Yb;) ub = Ob[Lb++], Bb.push(ub);
      let Hb = bb < 16 ? Fb(bb) : Vb(bb);
      return Bb.string = null != Hb ? Hb : Nb(bb)
    }

    function Rb(bb) {
      if ("string" === typeof bb) return bb;
      if ("number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb) return bb.toString();
      if (null == bb) return bb + "";
      if (pb.allowArraysInMapKeys && Array.isArray(bb) && bb.flat().every((bb => ["string", "number", "boolean", "bigint"].includes(typeof bb)))) return bb.flat().toString();
      throw new Error("Invalid property type for record: " + typeof bb)
    }
    const bu = (bb, ub) => {
      let hb = ib().map(Rb),
        Bb = bb;
      void 0 !== ub && (bb = bb < 32 ? -((ub << 5) + bb) : (ub << 5) + bb, hb.highByte = ub);
      let Ob = Yb[bb];
      return Ob && (Ob.isShared || nb) && ((Yb.restoreStructures || (Yb.restoreStructures = []))[bb] = Ob), Yb[bb] = hb, hb.read = tb(hb, Bb), hb.read()
    };
    lb[0] = () => {}, lb[0].noBuffer = !0, lb[66] = bb => {
      let ub = bb.length,
        hb = BigInt(128 & bb[0] ? bb[0] - 256 : bb[0]);
      for (let Bb = 1; Bb < ub; Bb++) hb <<= BigInt(8), hb += BigInt(bb[Bb]);
      return hb
    };
    let uu = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    lb[101] = () => {
      let bb = ib();
      return (uu[bb[0]] || Error)(bb[1], {
        cause: bb[2]
      })
    }, lb[105] = bb => {
      if (!1 === pb.structuredClone) throw new Error("Structured clone extension is disabled");
      let ub = wb.getUint32(Ub - 4);
      Hb || (Hb = new Map);
      let hb, Bb = Ob[Ub];
      hb = Bb >= 144 && Bb < 160 || 220 == Bb || 221 == Bb ? [] : {};
      let Gb = {
        target: hb
      };
      Hb.set(ub, Gb);
      let Lb = ib();
      return Gb.used ? Object.assign(hb, Lb) : (Gb.target = Lb, Lb)
    }, lb[112] = bb => {
      if (!1 === pb.structuredClone) throw new Error("Structured clone extension is disabled");
      let ub = wb.getUint32(Ub - 4),
        hb = Hb.get(ub);
      return hb.used = !0, hb.target
    }, lb[115] = () => new Set(ib());
    const hu = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((bb => bb + "Array"));
    let Bu = "object" === typeof globalThis ? globalThis : window;
    lb[116] = bb => {
      let ub = bb[0],
        hb = hu[ub];
      if (!hb) {
        if (16 === ub) {
          let ub = new ArrayBuffer(bb.length - 1);
          return new Uint8Array(ub).set(bb.subarray(1)), ub
        }
        throw new Error("Could not find typed array for code " + ub)
      }
      return new Bu[hb](Uint8Array.prototype.slice.call(bb, 1).buffer)
    }, lb[120] = () => {
      let bb = ib();
      return new RegExp(bb[0], bb[1])
    };
    const Ou = [];

    function Gu(bb) {
      jb && jb();
      let ub = Gb,
        hb = Ub,
        Bb = Xb,
        Lb = ob,
        lb = Ab,
        Kb = Sb,
        Wb = Zb,
        Cb = Hb,
        db = ab,
        rb = new Uint8Array(Ob.slice(0, Gb)),
        Db = Yb,
        xb = Yb.slice(0, Yb.length),
        zb = pb,
        gb = nb,
        ib = bb();
      return Gb = ub, Ub = hb, Xb = Bb, ob = Lb, Ab = lb, Sb = Kb, Zb = Wb, Hb = Cb, ab = db, Ob = rb, nb = gb, (Yb = Db).splice(0, Yb.length, ...xb), pb = zb, wb = new DataView(Ob.buffer, Ob.byteOffset, Ob.byteLength), ib
    }

    function Uu() {
      Ob = null, Hb = null, Yb = null
    }
    lb[98] = bb => {
      let ub = (bb[0] << 24) + (bb[1] << 16) + (bb[2] << 8) + bb[3],
        hb = Ub;
      return Ub += ub - bb.length, ab = Ou, (ab = [fb(), fb()]).position0 = 0, ab.position1 = 0, ab.postBundlePosition = Ub, Ub = hb, ib()
    }, lb[255] = bb => 4 == bb.length ? new Date(1e3 * (16777216 * bb[0] + (bb[1] << 16) + (bb[2] << 8) + bb[3])) : 8 == bb.length ? new Date(((bb[0] << 22) + (bb[1] << 14) + (bb[2] << 6) + (bb[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & bb[3]) + 16777216 * bb[4] + (bb[5] << 16) + (bb[6] << 8) + bb[7])) : 12 == bb.length ? new Date(((bb[0] << 24) + (bb[1] << 16) + (bb[2] << 8) + bb[3]) / 1e6 + 1e3 * ((128 & bb[4] ? -281474976710656 : 0) + 1099511627776 * bb[6] + 4294967296 * bb[7] + 16777216 * bb[8] + (bb[9] << 16) + (bb[10] << 8) + bb[11])) : new Date("invalid");
    const Lu = new Array(147);
    for (let Oh = 0; Oh < 256; Oh++) Lu[Oh] = +("1e" + Math.floor(45.15 - .30103 * Oh));
    const Yu = xb;
    var Su = new xb({
      useRecords: !1
    });
    const au = Su.unpack,
      Hu = Su.unpackMultiple,
      wu = Su.unpack,
      Zu = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let Xu, pu, ou, Au = new Float32Array(1),
      lu = new Uint8Array(Au.buffer, 0, 4);

    function Ku(bb) {
      Au[0] = bb;
      let ub = Lu[(127 & lu[3]) << 1 | lu[2] >> 7];
      return (ub * bb + (bb > 0 ? .5 : -.5) | 0) / ub
    }
    try {
      Xu = new TextEncoder
    } catch (Bh) {}
    const Wu = "undefined" !== typeof Buffer,
      Cu = Wu ? function(bb) {
        return Buffer.allocUnsafeSlow(bb)
      } : Uint8Array,
      du = Wu ? Buffer : Uint8Array,
      ru = Wu ? 4294967296 : 2144337920;
    let ju, nu, Du, xu, zu, gu = 0,
      iu = null;
    const vu = /[\u0080-\uFFFF]/,
      tu = Symbol("record-id");
    class Ju extends xb {
      constructor(bb) {
        let ub, hb, Bb, Ob;
        super(bb), this.offset = 0;
        let Gb = du.prototype.utf8Write ? function(bb, ub) {
            return ju.utf8Write(bb, ub, ju.byteLength - ub)
          } : !(!Xu || !Xu.encodeInto) && function(bb, ub) {
            return Xu.encodeInto(bb, ju.subarray(ub)).written
          },
          Ub = this;
        bb || (bb = {});
        let Lb = bb && bb.sequential,
          Yb = bb.structures || bb.saveStructures,
          Sb = bb.maxSharedStructures;
        if (null == Sb && (Sb = Yb ? 32 : 0), Sb > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        bb.structuredClone && void 0 == bb.moreTypes && (this.moreTypes = !0);
        let ab = bb.maxOwnStructures;
        null == ab && (ab = Yb ? 32 : 64), this.structures || 0 == bb.useRecords || (this.structures = []);
        let Hb = Sb > 32 || ab + Sb > 64,
          wb = Sb + 64,
          Zb = Sb + ab + 64;
        if (Zb > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let Xb = [],
          pb = 0,
          ob = 0;
        this.pack = this.encode = function(bb, Gb) {
          if (ju || (ju = new Cu(8192), Du = ju.dataView || (ju.dataView = new DataView(ju.buffer, 0, 8192)), gu = 0), xu = ju.length - 10, xu - gu < 2048 ? (ju = new Cu(ju.length), Du = ju.dataView || (ju.dataView = new DataView(ju.buffer, 0, ju.length)), xu = ju.length - 10, gu = 0) : gu = gu + 7 & 2147483640, ub = gu, Gb & Qu && (gu += 255 & Gb), Ob = Ub.structuredClone ? new Map : null, Ub.bundleStrings && "string" !== typeof bb ? (iu = [], iu.size = 1 / 0) : iu = null, Bb = Ub.structures, Bb) {
            Bb.uninitialized && (Bb = Ub._mergeStructures(Ub.getStructures()));
            let bb = Bb.sharedLength || 0;
            if (bb > Sb) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Bb.sharedLength);
            if (!Bb.transitions) {
              Bb.transitions = Object.create(null);
              for (let ub = 0; ub < bb; ub++) {
                let bb = Bb[ub];
                if (!bb) continue;
                let hb, Ob = Bb.transitions;
                for (let ub = 0, Bb = bb.length; ub < Bb; ub++) {
                  let Bb = bb[ub];
                  hb = Ob[Bb], hb || (hb = Ob[Bb] = Object.create(null)), Ob = hb
                }
                Ob[tu] = ub + 64
              }
              this.lastNamedStructuresLength = bb
            }
            Lb || (Bb.nextId = bb + 64)
          }
          let Yb;
          hb && (hb = !1);
          try {
            Ub.randomAccessStructure && bb && bb.constructor && bb.constructor === Object ? xb(bb) : Kb(bb);
            let hb = iu;
            if (iu && Mu(ub, Kb, 0), Ob && Ob.idsToInsert) {
              let bb = Ob.idsToInsert.sort(((bb, ub) => bb.offset > ub.offset ? 1 : -1)),
                Bb = bb.length,
                Gb = -1;
              for (; hb && Bb > 0;) {
                let Ob = bb[--Bb].offset + ub;
                Ob < hb.stringsPosition + ub && -1 === Gb && (Gb = 0), Ob > hb.position + ub ? Gb >= 0 && (Gb += 6) : (Gb >= 0 && (Du.setUint32(hb.position + ub, Du.getUint32(hb.position + ub) + Gb), Gb = -1), hb = hb.previous, Bb++)
              }
              Gb >= 0 && hb && Du.setUint32(hb.position + ub, Du.getUint32(hb.position + ub) + Gb), gu += 6 * bb.length, gu > xu && jb(gu), Ub.offset = gu;
              let Lb = function(bb, ub) {
                let hb, Bb = 6 * ub.length,
                  Ob = bb.length - Bb;
                for (; hb = ub.pop();) {
                  let ub = hb.offset,
                    Gb = hb.id;
                  bb.copyWithin(ub + Bb, ub, Ob), Bb -= 6;
                  let Ub = ub + Bb;
                  bb[Ub++] = 214, bb[Ub++] = 105, bb[Ub++] = Gb >> 24, bb[Ub++] = Gb >> 16 & 255, bb[Ub++] = Gb >> 8 & 255, bb[Ub++] = 255 & Gb, Ob = ub
                }
                return bb
              }(ju.subarray(ub, gu), bb);
              return Ob = null, Lb
            }
            return Ub.offset = gu, Gb & Tu ? (ju.start = ub, ju.end = gu, ju) : ju.subarray(ub, gu)
          } catch (Bh) {
            throw Yb = Bh, Bh
          } finally {
            if (Bb && (Ab(), hb && Ub.saveStructures)) {
              let hb = Bb.sharedLength || 0,
                Ob = ju.subarray(ub, gu),
                Lb = Iu(Bb, Ub);
              if (!Yb) return !1 === Ub.saveStructures(Lb, Lb.isCompatible) ? Ub.pack(bb, Gb) : (Ub.lastNamedStructuresLength = hb, ju.length > 1073741824 && (ju = null), Ob)
            }
            ju.length > 1073741824 && (ju = null), Gb & cu && (gu = ub)
          }
        };
        const Ab = () => {
            ob < 10 && ob++;
            let bb = Bb.sharedLength || 0;
            if (Bb.length > bb && !Lb && (Bb.length = bb), pb > 1e4) Bb.transitions = null, ob = 0, pb = 0, Xb.length > 0 && (Xb = []);
            else if (Xb.length > 0 && !Lb) {
              for (let bb = 0, ub = Xb.length; bb < ub; bb++) Xb[bb][tu] = 0;
              Xb = []
            }
          },
          lb = bb => {
            var ub = bb.length;
            ub < 16 ? ju[gu++] = 144 | ub : ub < 65536 ? (ju[gu++] = 220, ju[gu++] = ub >> 8, ju[gu++] = 255 & ub) : (ju[gu++] = 221, Du.setUint32(gu, ub), gu += 4);
            for (let hb = 0; hb < ub; hb++) Kb(bb[hb])
          },
          Kb = bb => {
            gu > xu && (ju = jb(gu));
            var hb, Bb = typeof bb;
            if ("string" === Bb) {
              let Bb, Ob = bb.length;
              if (iu && Ob >= 4 && Ob < 4096) {
                if ((iu.size += Ob) > 21760) {
                  let bb, hb, Bb = (iu[0] ? 3 * iu[0].length + iu[1].length : 0) + 10;
                  gu + Bb > xu && (ju = jb(gu + Bb)), iu.position ? (hb = iu, ju[gu] = 200, gu += 3, ju[gu++] = 98, bb = gu - ub, gu += 4, Mu(ub, Kb, 0), Du.setUint16(bb + ub - 3, gu - ub - bb)) : (ju[gu++] = 214, ju[gu++] = 98, bb = gu - ub, gu += 4), iu = ["", ""], iu.previous = hb, iu.size = 0, iu.position = bb
                }
                let hb = vu.test(bb);
                return iu[hb ? 0 : 1] += bb, ju[gu++] = 193, void Kb(hb ? -Ob : Ob)
              }
              Bb = Ob < 32 ? 1 : Ob < 256 ? 2 : Ob < 65536 ? 3 : 5;
              let Ub = 3 * Ob;
              if (gu + Ub > xu && (ju = jb(gu + Ub)), Ob < 64 || !Gb) {
                let ub, Gb, Ub, Lb = gu + Bb;
                for (ub = 0; ub < Ob; ub++) Gb = bb.charCodeAt(ub), Gb < 128 ? ju[Lb++] = Gb : Gb < 2048 ? (ju[Lb++] = Gb >> 6 | 192, ju[Lb++] = 63 & Gb | 128) : 55296 === (64512 & Gb) && 56320 === (64512 & (Ub = bb.charCodeAt(ub + 1))) ? (Gb = 65536 + ((1023 & Gb) << 10) + (1023 & Ub), ub++, ju[Lb++] = Gb >> 18 | 240, ju[Lb++] = Gb >> 12 & 63 | 128, ju[Lb++] = Gb >> 6 & 63 | 128, ju[Lb++] = 63 & Gb | 128) : (ju[Lb++] = Gb >> 12 | 224, ju[Lb++] = Gb >> 6 & 63 | 128, ju[Lb++] = 63 & Gb | 128);
                hb = Lb - gu - Bb
              } else hb = Gb(bb, gu + Bb);
              hb < 32 ? ju[gu++] = 160 | hb : hb < 256 ? (Bb < 2 && ju.copyWithin(gu + 2, gu + 1, gu + 1 + hb), ju[gu++] = 217, ju[gu++] = hb) : hb < 65536 ? (Bb < 3 && ju.copyWithin(gu + 3, gu + 2, gu + 2 + hb), ju[gu++] = 218, ju[gu++] = hb >> 8, ju[gu++] = 255 & hb) : (Bb < 5 && ju.copyWithin(gu + 5, gu + 3, gu + 3 + hb), ju[gu++] = 219, Du.setUint32(gu, hb), gu += 4), gu += hb
            } else if ("number" === Bb)
              if (bb >>> 0 === bb) bb < 32 || bb < 128 && !1 === this.useRecords || bb < 64 && !this.randomAccessStructure ? ju[gu++] = bb : bb < 256 ? (ju[gu++] = 204, ju[gu++] = bb) : bb < 65536 ? (ju[gu++] = 205, ju[gu++] = bb >> 8, ju[gu++] = 255 & bb) : (ju[gu++] = 206, Du.setUint32(gu, bb), gu += 4);
              else if ((bb | 0) === bb) bb >= -32 ? ju[gu++] = 256 + bb : bb >= -128 ? (ju[gu++] = 208, ju[gu++] = bb + 256) : bb >= -32768 ? (ju[gu++] = 209, Du.setInt16(gu, bb), gu += 2) : (ju[gu++] = 210, Du.setInt32(gu, bb), gu += 4);
            else {
              let ub;
              if ((ub = this.useFloat32) > 0 && bb < 4294967296 && bb >= -2147483648) {
                let hb;
                if (ju[gu++] = 202, Du.setFloat32(gu, bb), ub < 4 || ((hb = bb * Lu[(127 & ju[gu]) << 1 | ju[gu + 1] >> 7]) | 0) === hb) return void(gu += 4);
                gu--
              }
              ju[gu++] = 203, Du.setFloat64(gu, bb), gu += 8
            } else if ("object" === Bb || "function" === Bb)
              if (bb) {
                if (Ob) {
                  let hb = Ob.get(bb);
                  if (hb) {
                    if (!hb.id) {
                      let bb = Ob.idsToInsert || (Ob.idsToInsert = []);
                      hb.id = bb.push(hb)
                    }
                    return ju[gu++] = 214, ju[gu++] = 112, Du.setUint32(gu, hb.id), void(gu += 4)
                  }
                  Ob.set(bb, {
                    offset: gu - ub
                  })
                }
                let Gb = bb.constructor;
                if (Gb === Object) rb(bb);
                else if (Gb === Array) lb(bb);
                else if (Gb === Map)
                  if (this.mapAsEmptyObject) ju[gu++] = 128;
                  else {
                    (hb = bb.size) < 16 ? ju[gu++] = 128 | hb : hb < 65536 ? (ju[gu++] = 222, ju[gu++] = hb >> 8, ju[gu++] = 255 & hb) : (ju[gu++] = 223, Du.setUint32(gu, hb), gu += 4);
                    for (let [ub, hb] of bb) Kb(ub), Kb(hb)
                  }
                else {
                  for (let ub = 0, hb = pu.length; ub < hb; ub++) {
                    if (bb instanceof ou[ub]) {
                      let hb = pu[ub];
                      if (hb.write) {
                        hb.type && (ju[gu++] = 212, ju[gu++] = hb.type, ju[gu++] = 0);
                        let ub = hb.write.call(this, bb);
                        return void(ub === bb ? Array.isArray(bb) ? lb(bb) : rb(bb) : Kb(ub))
                      }
                      let Bb, Ob = ju,
                        Gb = Du,
                        Ub = gu;
                      ju = null;
                      try {
                        Bb = hb.pack.call(this, bb, (bb => (ju = Ob, Ob = null, gu += bb, gu > xu && jb(gu), {
                          target: ju,
                          targetView: Du,
                          position: gu - bb
                        })), Kb)
                      } finally {
                        Ob && (ju = Ob, Du = Gb, gu = Ub, xu = ju.length - 10)
                      }
                      return void(Bb && (Bb.length + gu > xu && jb(Bb.length + gu), gu = su(Bb, ju, gu, hb.type)))
                    }
                  }
                  if (Array.isArray(bb)) lb(bb);
                  else {
                    if (bb.toJSON) {
                      const ub = bb.toJSON();
                      if (ub !== bb) return Kb(ub)
                    }
                    if ("function" === Bb) return Kb(this.writeFunction && this.writeFunction(bb));
                    rb(bb)
                  }
                }
              } else ju[gu++] = 192;
            else if ("boolean" === Bb) ju[gu++] = bb ? 195 : 194;
            else if ("bigint" === Bb) {
              if (bb < BigInt(1) << BigInt(63) && bb >= -(BigInt(1) << BigInt(63))) ju[gu++] = 211, Du.setBigInt64(gu, bb);
              else if (bb < BigInt(1) << BigInt(64) && bb > 0) ju[gu++] = 207, Du.setBigUint64(gu, bb);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Kb(bb.toString());
                  if (this.useBigIntExtension && bb < BigInt(2) ** BigInt(1023) && bb > -(BigInt(2) ** BigInt(1023))) {
                    ju[gu++] = 199, gu++, ju[gu++] = 66;
                    let ub, hb = [];
                    do {
                      let Bb = bb & BigInt(255);
                      ub = (Bb & BigInt(128)) === (bb < BigInt(0) ? BigInt(128) : BigInt(0)), hb.push(Bb), bb >>= BigInt(8)
                    } while (bb !== BigInt(0) && bb !== BigInt(-1) || !ub);
                    ju[gu - 2] = hb.length;
                    for (let bb = hb.length; bb > 0;) ju[gu++] = Number(hb[--bb]);
                    return
                  }
                  throw new RangeError(bb + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                ju[gu++] = 203, Du.setFloat64(gu, Number(bb))
              }
              gu += 8
            } else {
              if ("undefined" !== Bb) throw new Error("Unknown type: " + Bb);
              this.encodeUndefinedAsNil ? ju[gu++] = 192 : (ju[gu++] = 212, ju[gu++] = 0, ju[gu++] = 0)
            }
          },
          Wb = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? bb => {
            let ub;
            if (this.skipValues) {
              ub = [];
              for (let hb in bb) "function" === typeof bb.hasOwnProperty && !bb.hasOwnProperty(hb) || this.skipValues.includes(bb[hb]) || ub.push(hb)
            } else ub = Object.keys(bb);
            let hb, Bb = ub.length;
            if (Bb < 16 ? ju[gu++] = 128 | Bb : Bb < 65536 ? (ju[gu++] = 222, ju[gu++] = Bb >> 8, ju[gu++] = 255 & Bb) : (ju[gu++] = 223, Du.setUint32(gu, Bb), gu += 4), this.coercibleKeyAsNumber)
              for (let Ob = 0; Ob < Bb; Ob++) {
                hb = ub[Ob];
                let Bb = Number(hb);
                Kb(isNaN(Bb) ? hb : Bb), Kb(bb[hb])
              } else
                for (let Ob = 0; Ob < Bb; Ob++) Kb(hb = ub[Ob]), Kb(bb[hb])
          } : bb => {
            ju[gu++] = 222;
            let hb = gu - ub;
            gu += 2;
            let Bb = 0;
            for (let ub in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(ub)) && (Kb(ub), Kb(bb[ub]), Bb++);
            if (Bb > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            ju[hb++ + ub] = Bb >> 8, ju[hb + ub] = 255 & Bb
          },
          Cb = !1 === this.useRecords ? Wb : bb.progressiveRecords && !Hb ? bb => {
            let hb, Ob, Gb = Bb.transitions || (Bb.transitions = Object.create(null)),
              Ub = gu++ - ub;
            for (let Lb in bb)
              if ("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(Lb)) {
                if (hb = Gb[Lb], hb) Gb = hb;
                else {
                  let Yb = Object.keys(bb),
                    Sb = Gb;
                  Gb = Bb.transitions;
                  let ab = 0;
                  for (let bb = 0, ub = Yb.length; bb < ub; bb++) {
                    let ub = Yb[bb];
                    hb = Gb[ub], hb || (hb = Gb[ub] = Object.create(null), ab++), Gb = hb
                  }
                  Ub + ub + 1 == gu ? (gu--, nb(Gb, Yb, ab)) : Db(Gb, Yb, Ub, ab), Ob = !0, Gb = Sb[Lb]
                }
                Kb(bb[Lb])
              } if (!Ob) {
              let hb = Gb[tu];
              hb ? ju[Ub + ub] = hb : Db(Gb, Object.keys(bb), Ub, 0)
            }
          } : bb => {
            let ub, hb = Bb.transitions || (Bb.transitions = Object.create(null)),
              Ob = 0;
            for (let Bb in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(Bb)) && (ub = hb[Bb], ub || (ub = hb[Bb] = Object.create(null), Ob++), hb = ub);
            let Gb = hb[tu];
            Gb ? Gb >= 96 && Hb ? (ju[gu++] = 96 + (31 & (Gb -= 96)), ju[gu++] = Gb >> 5) : ju[gu++] = Gb : nb(hb, hb.__keys__ || Object.keys(bb), Ob);
            for (let Bb in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(Bb)) && Kb(bb[Bb])
          },
          db = "function" == typeof this.useRecords && this.useRecords,
          rb = db ? bb => {
            db(bb) ? Cb(bb) : Wb(bb)
          } : Cb,
          jb = bb => {
            let hb;
            if (bb > 16777216) {
              if (bb - ub > ru) throw new Error("Packed buffer would be larger than maximum buffer size");
              hb = Math.min(ru, 4096 * Math.round(Math.max((bb - ub) * (bb > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else hb = 1 + (Math.max(bb - ub << 2, ju.length - 1) >> 12) << 12;
            let Bb = new Cu(hb);
            return Du = Bb.dataView || (Bb.dataView = new DataView(Bb.buffer, 0, hb)), bb = Math.min(bb, ju.length), ju.copy ? ju.copy(Bb, 0, ub, bb) : Bb.set(ju.slice(ub, bb)), gu -= ub, ub = 0, xu = Bb.length - 10, ju = Bb
          },
          nb = (bb, ub, Ob) => {
            let Gb = Bb.nextId;
            Gb || (Gb = 64), Gb < wb && this.shouldShareStructure && !this.shouldShareStructure(ub) ? (Gb = Bb.nextOwnId, Gb < Zb || (Gb = wb), Bb.nextOwnId = Gb + 1) : (Gb >= Zb && (Gb = wb), Bb.nextId = Gb + 1);
            let Ub = ub.highByte = Gb >= 96 && Hb ? Gb - 96 >> 5 : -1;
            bb[tu] = Gb, bb.__keys__ = ub, Bb[Gb - 64] = ub, Gb < wb ? (ub.isShared = !0, Bb.sharedLength = Gb - 63, hb = !0, Ub >= 0 ? (ju[gu++] = 96 + (31 & Gb), ju[gu++] = Ub) : ju[gu++] = Gb) : (Ub >= 0 ? (ju[gu++] = 213, ju[gu++] = 114, ju[gu++] = 96 + (31 & Gb), ju[gu++] = Ub) : (ju[gu++] = 212, ju[gu++] = 114, ju[gu++] = Gb), Ob && (pb += ob * Ob), Xb.length >= ab && (Xb.shift()[tu] = 0), Xb.push(bb), Kb(ub))
          },
          Db = (bb, hb, Bb, Ob) => {
            let Gb = ju,
              Ub = gu,
              Lb = xu,
              Yb = ub;
            ju = nu, gu = 0, ub = 0, ju || (nu = ju = new Cu(8192)), xu = ju.length - 10, nb(bb, hb, Ob), nu = ju;
            let Sb = gu;
            if (ju = Gb, gu = Ub, xu = Lb, ub = Yb, Sb > 1) {
              let bb = gu + Sb - 1;
              bb > xu && jb(bb);
              let hb = Bb + ub;
              ju.copyWithin(hb + Sb, hb + 1, gu), ju.set(nu.slice(0, Sb), hb), gu = bb
            } else ju[Bb + ub] = nu[0]
          },
          xb = bb => {
            let Ob = zu(bb, ju, ub, gu, Bb, jb, ((bb, ub, Bb) => {
              if (Bb) return hb = !0;
              gu = ub;
              let Ob = ju;
              return Kb(bb), Ab(), Ob !== ju ? {
                position: gu,
                targetView: Du,
                target: ju
              } : gu
            }), this);
            if (0 === Ob) return rb(bb);
            gu = Ob
          }
      }
      useBuffer(bb) {
        ju = bb, Du = ju.dataView || (ju.dataView = new DataView(ju.buffer, ju.byteOffset, ju.byteLength)), gu = 0
      }
      set position(bb) {
        gu = bb
      }
      get position() {
        return gu
      }
      set buffer(bb) {
        ju = bb
      }
      get buffer() {
        return ju
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function eu(bb, ub, hb, Bb) {
      let Ob = bb.byteLength;
      if (Ob + 1 < 256) {
        var {
          target: Gb,
          position: Ub
        } = hb(4 + Ob);
        Gb[Ub++] = 199, Gb[Ub++] = Ob + 1
      } else if (Ob + 1 < 65536) {
        var {
          target: Gb,
          position: Ub
        } = hb(5 + Ob);
        Gb[Ub++] = 200, Gb[Ub++] = Ob + 1 >> 8, Gb[Ub++] = Ob + 1 & 255
      } else {
        var {
          target: Gb,
          position: Ub,
          targetView: Lb
        } = hb(7 + Ob);
        Gb[Ub++] = 201, Lb.setUint32(Ub, Ob + 1), Ub += 4
      }
      Gb[Ub++] = 116, Gb[Ub++] = ub, bb.buffer || (bb = new Uint8Array(bb)), Gb.set(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength), Ub)
    }

    function Nu(bb, ub) {
      let hb = bb.byteLength;
      var Bb, Ob;
      if (hb < 256) {
        var {
          target: Bb,
          position: Ob
        } = ub(hb + 2);
        Bb[Ob++] = 196, Bb[Ob++] = hb
      } else if (hb < 65536) {
        var {
          target: Bb,
          position: Ob
        } = ub(hb + 3);
        Bb[Ob++] = 197, Bb[Ob++] = hb >> 8, Bb[Ob++] = 255 & hb
      } else {
        var {
          target: Bb,
          position: Ob,
          targetView: Gb
        } = ub(hb + 5);
        Bb[Ob++] = 198, Gb.setUint32(Ob, hb), Ob += 4
      }
      Bb.set(bb, Ob)
    }

    function su(bb, ub, hb, Bb) {
      let Ob = bb.length;
      switch (Ob) {
        case 1:
          ub[hb++] = 212;
          break;
        case 2:
          ub[hb++] = 213;
          break;
        case 4:
          ub[hb++] = 214;
          break;
        case 8:
          ub[hb++] = 215;
          break;
        case 16:
          ub[hb++] = 216;
          break;
        default:
          Ob < 256 ? (ub[hb++] = 199, ub[hb++] = Ob) : Ob < 65536 ? (ub[hb++] = 200, ub[hb++] = Ob >> 8, ub[hb++] = 255 & Ob) : (ub[hb++] = 201, ub[hb++] = Ob >> 24, ub[hb++] = Ob >> 16 & 255, ub[hb++] = Ob >> 8 & 255, ub[hb++] = 255 & Ob)
      }
      return ub[hb++] = Bb, ub.set(bb, hb), hb += Ob
    }

    function Mu(bb, ub, hb) {
      if (iu.length > 0) {
        Du.setUint32(iu.position + bb, gu + hb - iu.position - bb), iu.stringsPosition = gu - bb;
        let Bb = iu;
        iu = null, ub(Bb[0]), ub(Bb[1])
      }
    }

    function mu(bb) {
      if (bb.Class) {
        if (!bb.pack && !bb.write) throw new Error("Extension has no pack or write function");
        if (bb.pack && !bb.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        ou.unshift(bb.Class), pu.unshift(bb)
      }! function(bb) {
        bb.unpack ? lb[bb.type] = bb.unpack : lb[bb.type] = bb
      }(bb)
    }

    function Iu(bb, ub) {
      return bb.isCompatible = bb => {
        let hb = !bb || (ub.lastNamedStructuresLength || 0) === bb.length;
        return hb || ub._mergeStructures(bb), hb
      }, bb
    }
    ou = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Wb], pu = [{
      pack(bb, ub, hb) {
        let Bb = bb.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === bb.getMilliseconds()) && Bb >= 0 && Bb < 4294967296) {
          let {
            target: bb,
            targetView: hb,
            position: Ob
          } = ub(6);
          bb[Ob++] = 214, bb[Ob++] = 255, hb.setUint32(Ob, Bb)
        } else if (Bb > 0 && Bb < 4294967296) {
          let {
            target: hb,
            targetView: Ob,
            position: Gb
          } = ub(10);
          hb[Gb++] = 215, hb[Gb++] = 255, Ob.setUint32(Gb, 4e6 * bb.getMilliseconds() + (Bb / 1e3 / 4294967296 | 0)), Ob.setUint32(Gb + 4, Bb)
        } else if (isNaN(Bb)) {
          if (this.onInvalidDate) return ub(0), hb(this.onInvalidDate());
          let {
            target: bb,
            targetView: Bb,
            position: Ob
          } = ub(3);
          bb[Ob++] = 212, bb[Ob++] = 255, bb[Ob++] = 255
        } else {
          let {
            target: hb,
            targetView: Ob,
            position: Gb
          } = ub(15);
          hb[Gb++] = 199, hb[Gb++] = 12, hb[Gb++] = 255, Ob.setUint32(Gb, 1e6 * bb.getMilliseconds()), Ob.setBigInt64(Gb + 4, BigInt(Math.floor(Bb)))
        }
      }
    }, {
      pack(bb, ub, hb) {
        if (this.setAsEmptyObject) return ub(0), hb({});
        let Bb = Array.from(bb),
          {
            target: Ob,
            position: Gb
          } = ub(this.moreTypes ? 3 : 0);
        this.moreTypes && (Ob[Gb++] = 212, Ob[Gb++] = 115, Ob[Gb++] = 0), hb(Bb)
      }
    }, {
      pack(bb, ub, hb) {
        let {
          target: Bb,
          position: Ob
        } = ub(this.moreTypes ? 3 : 0);
        this.moreTypes && (Bb[Ob++] = 212, Bb[Ob++] = 101, Bb[Ob++] = 0), hb([bb.name, bb.message, bb.cause])
      }
    }, {
      pack(bb, ub, hb) {
        let {
          target: Bb,
          position: Ob
        } = ub(this.moreTypes ? 3 : 0);
        this.moreTypes && (Bb[Ob++] = 212, Bb[Ob++] = 120, Bb[Ob++] = 0), hb([bb.source, bb.flags])
      }
    }, {
      pack(bb, ub) {
        this.moreTypes ? eu(bb, 16, ub) : Nu(Wu ? Buffer.from(bb) : new Uint8Array(bb), ub)
      }
    }, {
      pack(bb, ub) {
        let hb = bb.constructor;
        hb !== du && this.moreTypes ? eu(bb, hu.indexOf(hb.name), ub) : Nu(bb, ub)
      }
    }, {
      pack(bb, ub) {
        let {
          target: hb,
          position: Bb
        } = ub(1);
        hb[Bb] = 193
      }
    }];
    let Pu = new Ju({
      useRecords: !1
    });
    const qu = Pu.pack,
      Eu = Pu.pack,
      yu = Ju,
      {
        NEVER: Vu,
        ALWAYS: Fu,
        DECIMAL_ROUND: fu,
        DECIMAL_FIT: ku
      } = Zu,
      Tu = 512,
      cu = 1024,
      Qu = 2048;
    const Ru = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!bb || "object" !== typeof bb) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const hb = new xb(ub);
        let Bb;
        const Ob = bb => {
          let ub;
          Bb && (bb = Buffer.concat([Bb, bb]), Bb = void 0);
          try {
            ub = hb.unpackMultiple(bb)
          } catch (Ob) {
            if (!Ob.incomplete) throw Ob;
            Bb = bb.slice(Ob.lastPosition), ub = Ob.values
          }
          return ub
        };
        return "function" === typeof bb[Symbol.iterator] ? function*() {
          for (const ub of bb) yield* Ob(ub)
        }() : "function" === typeof bb[Symbol.asyncIterator] ? async function*() {
          for await (const ub of bb) yield* Ob(ub)
        }(): void 0
      },
      bh = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (bb && "object" === typeof bb) {
          if ("function" === typeof bb[Symbol.iterator]) return function*(bb, ub) {
            const hb = new Ju(ub);
            for (const Bb of bb) yield hb.pack(Bb)
          }(bb, ub);
          if ("function" === typeof bb.then || "function" === typeof bb[Symbol.asyncIterator]) return async function*(bb, ub) {
            const hb = new Ju(ub);
            for await (const Bb of bb) yield hb.pack(Bb)
          }(bb, ub);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      uh = !1,
      hh = !0
  },
  8843: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      $changes: () => pb,
      $childType: () => ob,
      $decoder: () => ab,
      $deleteByIndex: () => Zb,
      $encoder: () => Sb,
      $filter: () => Hb,
      $getByIndex: () => wb,
      $numFields: () => Db,
      $refId: () => Lb,
      $track: () => Yb,
      $values: () => Cb,
      ArraySchema: () => hB,
      Callbacks: () => hO,
      ChangeTree: () => gh,
      CollectionSchema: () => GB,
      Decoder: () => fB,
      Encoder: () => EB,
      FieldBuilder: () => YB,
      MapSchema: () => OB,
      Metadata: () => fu,
      OPERATION: () => Ob,
      Reflection: () => QB,
      ReflectionField: () => TB,
      ReflectionType: () => cB,
      Root: () => iB,
      Schema: () => zB,
      SetSchema: () => UB,
      StateCallbackStrategy: () => uO,
      StateView: () => NB,
      StreamSchema: () => LB,
      TypeContext: () => Iu,
      createPool: () => OO,
      decode: () => Ku,
      decodeKeyValueOperation: () => Th,
      decodeSchemaOperation: () => kh,
      defineCustomTypes: () => ru,
      defineTypes: () => nB,
      deprecated: () => rB,
      dumpChanges: () => xB,
      encode: () => uu,
      encodeArray: () => Mh,
      encodeIndexedEntry: () => Nh,
      encodeKeyValueOperation: () => sh,
      encodeMapEntry: () => eh,
      encodeSchemaOperation: () => Jh,
      mZ: () => pB,
      fullStateOnly: () => KB,
      getDecoderStateCallbacks: () => RB,
      getEncodeDescriptor: () => bh,
      getRawChangesCallback: () => bO,
      isBuilder: () => SB,
      patchOnly: () => lB,
      registerType: () => du,
      schema: () => DB,
      t: () => ZB,
      type: () => WB,
      unreliable: () => AB,
      view: () => oB
    });
    const Bb = 255;
    var Ob;

    function Gb(bb) {
      Object.defineProperty(bb, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(bb) {
      bb[bb.ADD = 128] = "ADD", bb[bb.REPLACE = 0] = "REPLACE", bb[bb.DELETE = 64] = "DELETE", bb[bb.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", bb[bb.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", bb[bb.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", bb[bb.CLEAR = 10] = "CLEAR", bb[bb.REVERSE = 15] = "REVERSE", bb[bb.MOVE = 32] = "MOVE", bb[bb.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", bb[bb.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Ob || (Ob = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Ub = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const bb = "colyseus.symbolRegistry",
        ub = Ub[bb] || (Ub[bb] = Object.create(null));
      Symbol.for = function(bb) {
        return ub[bb] || (ub[bb] = Symbol(bb))
      }, Symbol.keyFor = function(bb) {
        for (const hb in ub)
          if (ub[hb] === bb) return hb
      }
    }
    const Lb = Symbol.for("$refId"),
      Yb = "~track",
      Sb = "~encoder",
      ab = "~decoder",
      Hb = "~filter",
      wb = "~getByIndex",
      Zb = "~deleteByIndex",
      Xb = "~resyncPrune",
      pb = Symbol.for("$changes"),
      ob = Symbol.for("$childType"),
      Ab = Symbol.for("$proxyTarget"),
      lb = "~onEncodeEnd",
      Kb = "~reset",
      Wb = "~onDecodeEnd",
      Cb = Symbol.for("$values"),
      db = "~builder",
      rb = "~descriptors",
      jb = "~__encodeDescriptor",
      nb = "~encoders",
      Db = "~__numFields",
      xb = "~__refTypeFieldIndexes",
      zb = "~__viewFieldIndexes",
      gb = "$__fieldIndexesByViewTag",
      ib = "~__unreliableFieldIndexes",
      vb = "~__patchOnlyFieldIndexes",
      tb = "~__fullSyncSkipIndexes",
      Jb = "~__fullStateOnlyFieldIndexes",
      eb = "~__streamFieldIndexes",
      Nb = "~__streamPriorities";
    let sb;
    try {
      sb = new TextEncoder
    } catch (GO) {}
    const Mb = new ArrayBuffer(8),
      mb = new Int32Array(Mb),
      Ib = new Float32Array(Mb),
      Pb = new Float64Array(Mb),
      qb = new BigInt64Array(Mb),
      Eb = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(bb, ub) {
        for (var hb = 0, Bb = 0, Ob = 0, Gb = bb.length; Ob < Gb; Ob++)(hb = bb.charCodeAt(Ob)) < 128 ? Bb += 1 : hb < 2048 ? Bb += 2 : hb < 55296 || hb >= 57344 ? Bb += 3 : (Ob++, Bb += 4);
        return Bb
      };

    function yb(bb, ub, hb) {
      for (var Bb = 0, Ob = 0, Gb = ub.length; Ob < Gb; Ob++)(Bb = ub.charCodeAt(Ob)) < 128 ? bb[hb.offset++] = Bb : Bb < 2048 ? (bb[hb.offset] = 192 | Bb >> 6, bb[hb.offset + 1] = 128 | 63 & Bb, hb.offset += 2) : Bb < 55296 || Bb >= 57344 ? (bb[hb.offset] = 224 | Bb >> 12, bb[hb.offset + 1] = 128 | Bb >> 6 & 63, bb[hb.offset + 2] = 128 | 63 & Bb, hb.offset += 3) : (Ob++, Bb = 65536 + ((1023 & Bb) << 10 | 1023 & ub.charCodeAt(Ob)), bb[hb.offset] = 240 | Bb >> 18, bb[hb.offset + 1] = 128 | Bb >> 12 & 63, bb[hb.offset + 2] = 128 | Bb >> 6 & 63, bb[hb.offset + 3] = 128 | 63 & Bb, hb.offset += 4)
    }

    function Vb(bb, ub, hb) {
      bb[hb.offset++] = 255 & ub
    }

    function Fb(bb, ub, hb) {
      bb[hb.offset++] = 255 & ub, bb[hb.offset++] = ub >> 8 & 255
    }

    function fb(bb, ub, hb) {
      bb[hb.offset++] = 255 & ub, bb[hb.offset++] = ub >> 8 & 255
    }

    function kb(bb, ub, hb) {
      bb[hb.offset++] = 255 & ub, bb[hb.offset++] = ub >> 8 & 255, bb[hb.offset++] = ub >> 16 & 255, bb[hb.offset++] = ub >> 24 & 255
    }

    function Tb(bb, ub, hb) {
      const Bb = ub >> 24,
        Ob = ub >> 16,
        Gb = ub >> 8,
        Ub = ub;
      bb[hb.offset++] = 255 & Ub, bb[hb.offset++] = 255 & Gb, bb[hb.offset++] = 255 & Ob, bb[hb.offset++] = 255 & Bb
    }

    function cb(bb, ub, hb) {
      const Bb = Math.floor(ub / Math.pow(2, 32));
      Tb(bb, ub >>> 0, hb), Tb(bb, Bb, hb)
    }

    function Qb(bb, ub, hb) {
      const Bb = ub / Math.pow(2, 32) | 0;
      Tb(bb, ub >>> 0, hb), Tb(bb, Bb, hb)
    }

    function Rb(bb, ub, hb) {
      Ib[0] = ub, kb(bb, mb[0], hb)
    }

    function bu(bb, ub, hb) {
      Pb[0] = ub, kb(bb, mb[0], hb), kb(bb, mb[1], hb)
    }
    const uu = {
        int8: Vb,
        uint8: function(bb, ub, hb) {
          bb[hb.offset++] = 255 & ub
        },
        int16: Fb,
        uint16: fb,
        int32: kb,
        uint32: Tb,
        int64: cb,
        uint64: Qb,
        bigint64: function(bb, ub, hb) {
          qb[0] = BigInt.asIntN(64, ub), kb(bb, mb[0], hb), kb(bb, mb[1], hb)
        },
        biguint64: function(bb, ub, hb) {
          qb[0] = BigInt.asIntN(64, ub), kb(bb, mb[0], hb), kb(bb, mb[1], hb)
        },
        float32: Rb,
        float64: bu,
        boolean: function(bb, ub, hb) {
          bb[hb.offset++] = ub ? 1 : 0
        },
        string: function(bb, ub, hb) {
          ub || (ub = "");
          let Bb = Eb(ub, "utf8"),
            Ob = 0;
          if (Bb < 32) bb[hb.offset++] = 160 | Bb, Ob = 1;
          else if (Bb < 256) bb[hb.offset++] = 217, bb[hb.offset++] = Bb, Ob = 2;
          else if (Bb < 65536) bb[hb.offset++] = 218, fb(bb, Bb, hb), Ob = 3;
          else {
            if (!(Bb < 4294967296)) throw new Error("String too long");
            bb[hb.offset++] = 219, Tb(bb, Bb, hb), Ob = 5
          }
          return yb(bb, ub, hb), Ob + Bb
        },
        number: function bb(ub, hb, Bb) {
          return isNaN(hb) ? bb(ub, 0, Bb) : isFinite(hb) ? hb !== (0 | hb) ? Math.abs(hb) <= 34028235e31 && (Ib[0] = hb, Math.abs(Math.abs(Ib[0]) - Math.abs(hb)) < 1e-4) ? (ub[Bb.offset++] = 202, Rb(ub, hb, Bb), 5) : (ub[Bb.offset++] = 203, bu(ub, hb, Bb), 9) : hb >= 0 ? hb < 128 ? (ub[Bb.offset++] = 255 & hb, 1) : hb < 256 ? (ub[Bb.offset++] = 204, ub[Bb.offset++] = 255 & hb, 2) : hb < 65536 ? (ub[Bb.offset++] = 205, fb(ub, hb, Bb), 3) : hb < 4294967296 ? (ub[Bb.offset++] = 206, Tb(ub, hb, Bb), 5) : (ub[Bb.offset++] = 207, Qb(ub, hb, Bb), 9) : hb >= -32 ? (ub[Bb.offset++] = 224 | hb + 32, 1) : hb >= -128 ? (ub[Bb.offset++] = 208, Vb(ub, hb, Bb), 2) : hb >= -32768 ? (ub[Bb.offset++] = 209, Fb(ub, hb, Bb), 3) : hb >= -2147483648 ? (ub[Bb.offset++] = 210, kb(ub, hb, Bb), 5) : (ub[Bb.offset++] = 211, cb(ub, hb, Bb), 9) : bb(ub, hb > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Bb)
        },
        utf8Write: yb,
        utf8Length: Eb
      },
      hu = new ArrayBuffer(8),
      Bu = new Int32Array(hu),
      Ou = new Float32Array(hu),
      Gu = new Float64Array(hu),
      Uu = new BigUint64Array(hu),
      Lu = new BigInt64Array(hu);

    function Yu(bb, ub, hb) {
      hb > bb.length - ub.offset && (hb = bb.length - ub.offset);
      for (var Bb = "", Ob = 0, Gb = ub.offset, Ub = ub.offset + hb; Gb < Ub; Gb++) {
        var Lb = bb[Gb];
        if (0 !== (128 & Lb))
          if (192 !== (224 & Lb))
            if (224 !== (240 & Lb)) {
              if (240 !== (248 & Lb)) {
                console.error("decode.utf8Read(): Invalid byte " + Lb + " at offset " + Gb + ". Skip to end of string: " + (ub.offset + hb));
                break
              }(Ob = (7 & Lb) << 18 | (63 & bb[++Gb]) << 12 | (63 & bb[++Gb]) << 6 | 63 & bb[++Gb]) >= 65536 ? (Ob -= 65536, Bb += String.fromCharCode(55296 + (Ob >>> 10), 56320 + (1023 & Ob))) : Bb += String.fromCharCode(Ob)
            } else Bb += String.fromCharCode((15 & Lb) << 12 | (63 & bb[++Gb]) << 6 | 63 & bb[++Gb]);
        else Bb += String.fromCharCode((31 & Lb) << 6 | 63 & bb[++Gb]);
        else Bb += String.fromCharCode(Lb)
      }
      return ub.offset += hb, Bb
    }

    function Su(bb, ub) {
      return au(bb, ub) << 24 >> 24
    }

    function au(bb, ub) {
      return bb[ub.offset++]
    }

    function Hu(bb, ub) {
      return wu(bb, ub) << 16 >> 16
    }

    function wu(bb, ub) {
      return bb[ub.offset++] | bb[ub.offset++] << 8
    }

    function Zu(bb, ub) {
      return bb[ub.offset++] | bb[ub.offset++] << 8 | bb[ub.offset++] << 16 | bb[ub.offset++] << 24
    }

    function Xu(bb, ub) {
      return Zu(bb, ub) >>> 0
    }

    function pu(bb, ub) {
      return Bu[0] = Zu(bb, ub), Ou[0]
    }

    function ou(bb, ub) {
      return Bu[0] = Zu(bb, ub), Bu[1] = Zu(bb, ub), Gu[0]
    }

    function Au(bb, ub) {
      const hb = Xu(bb, ub);
      return Zu(bb, ub) * Math.pow(2, 32) + hb
    }

    function lu(bb, ub) {
      const hb = Xu(bb, ub);
      return Xu(bb, ub) * Math.pow(2, 32) + hb
    }
    const Ku = {
        utf8Read: Yu,
        int8: Su,
        uint8: au,
        int16: Hu,
        uint16: wu,
        int32: Zu,
        uint32: Xu,
        float32: pu,
        float64: ou,
        int64: Au,
        uint64: lu,
        bigint64: function(bb, ub) {
          return Bu[0] = Zu(bb, ub), Bu[1] = Zu(bb, ub), Lu[0]
        },
        biguint64: function(bb, ub) {
          return Bu[0] = Zu(bb, ub), Bu[1] = Zu(bb, ub), Uu[0]
        },
        boolean: function(bb, ub) {
          return au(bb, ub) > 0
        },
        string: function(bb, ub) {
          const hb = bb[ub.offset++];
          let Bb;
          return hb < 192 ? Bb = 31 & hb : 217 === hb ? Bb = au(bb, ub) : 218 === hb ? Bb = wu(bb, ub) : 219 === hb && (Bb = Xu(bb, ub)), Yu(bb, ub, Bb)
        },
        number: function(bb, ub) {
          const hb = bb[ub.offset++];
          return hb < 128 ? hb : 202 === hb ? pu(bb, ub) : 203 === hb ? ou(bb, ub) : 204 === hb ? au(bb, ub) : 205 === hb ? wu(bb, ub) : 206 === hb ? Xu(bb, ub) : 207 === hb ? lu(bb, ub) : 208 === hb ? Su(bb, ub) : 209 === hb ? Hu(bb, ub) : 210 === hb ? Zu(bb, ub) : 211 === hb ? Au(bb, ub) : hb > 223 ? -1 * (255 - hb + 1) : void 0
        },
        stringCheck: function(bb, ub) {
          const hb = bb[ub.offset];
          return hb < 192 && hb > 160 || 217 === hb || 218 === hb || 219 === hb
        }
      },
      Wu = {},
      Cu = new Map;

    function du(bb, ub) {
      ub.constructor && (Object.prototype.hasOwnProperty.call(ub, "constructor") && null == ub.constructor[Symbol.metadata] && Gb(ub.constructor), Cu.set(ub.constructor, bb), Wu[bb] = ub), ub.encode && (uu[bb] = ub.encode), ub.decode && (Ku[bb] = ub.decode)
    }

    function ru(bb) {
      for (const ub in bb) du(ub, bb[ub]);
      return bb => WB(bb)
    }
    const ju = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function nu() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Du(bb) {
      return bb._stream ??= nu()
    }

    function xu(bb, ub, hb) {
      0 === ub.activeViews.size && Du(bb).broadcastPending.add(hb)
    }

    function zu(bb, ub, hb, Bb) {
      const Gb = bb._stream;
      if (void 0 === Gb) return !0;
      let Ub = !1;
      return Gb.broadcastPending.delete(Bb) ? Ub = !0 : Gb.sentBroadcast.delete(Bb) && Gb.broadcastDeletes.add(Bb), ub.forEachActiveView((bb => {
        const ub = Gb.pendingByView.get(bb.id);
        if (ub?.has(Bb)) return ub.delete(Bb), void(Ub = !0);
        const Lb = Gb.sentByView.get(bb.id);
        if (Lb?.has(Bb)) {
          Lb.delete(Bb);
          let ub = bb.changes.get(hb);
          void 0 === ub && (ub = new Map, bb.changes.set(hb, ub)), ub.set(Bb, Ob.DELETE)
        }
      })), Ub
    }

    function gu(bb, ub) {
      const hb = bb._stream?.pendingByView;
      if (void 0 === hb) return !1;
      for (const [Bb, Ob] of hb)
        if (Ob.size > 0 && void 0 !== ub.activeViews.get(Bb)?.deref()) return !0;
      return !1
    }

    function iu(bb) {
      const ub = bb._stream;
      return void 0 !== ub && (ub.broadcastPending.size > 0 || ub.broadcastDeletes.size > 0)
    }

    function vu(bb, ub, hb) {
      const Bb = Du(bb);
      let Ob = Bb.pendingByView.get(ub);
      void 0 === Ob && (Ob = new Set, Bb.pendingByView.set(ub, Ob)), Ob.add(hb)
    }

    function tu(bb, ub) {
      const hb = bb._stream;
      void 0 !== hb && (hb.pendingByView.delete(ub), hb.sentByView.delete(ub), hb.priorityByView?.delete(ub))
    }
    const Ju = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function eu(bb) {
      if (null == bb || "object" !== typeof bb) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: ub,
        max: hb
      } = bb;
      if ("number" !== typeof ub || "number" !== typeof hb || !(hb > ub) || !Number.isFinite(ub) || !Number.isFinite(hb)) throw new Error(`t.quantized(): require finite min < max (got min=${ub}, max=${hb}).`);
      const Bb = bb.bits ?? 16;
      if (8 !== Bb && 16 !== Bb && 32 !== Bb) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Bb}).`);
      const Ob = bb.mode ?? "clamp";
      if ("clamp" !== Ob && "wrap" !== Ob) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Ob)}).`);
      const Gb = "wrap" === Ob,
        Ub = Math.pow(2, Bb);
      return {
        min: ub,
        max: hb,
        bits: Bb,
        wrap: Gb,
        wire: Ju[Bb],
        range: hb - ub,
        span: Gb ? Ub : ub === -hb ? Ub - 2 : Ub - 1
      }
    }

    function Nu(bb) {
      return null !== bb && "object" === typeof bb && void 0 !== bb.quantized
    }

    function su(bb, ub) {
      if (bb.wrap) {
        if (!Number.isFinite(ub)) return 0;
        const hb = bb.range;
        let Bb = (ub - bb.min) % hb;
        Bb < 0 && (Bb += hb);
        const Ob = bb.span;
        return Math.floor(Bb / hb * Ob + .5) % Ob
      }
      if (ub !== ub) return 0;
      const hb = ub < bb.min ? bb.min : ub > bb.max ? bb.max : ub;
      return Math.floor((hb - bb.min) / bb.range * bb.span + .5)
    }

    function Mu(bb, ub) {
      return bb.min + ub / bb.span * bb.range
    }

    function mu(bb) {
      const ub = uu[bb.wire];
      return (hb, Bb, Ob) => ub(hb, su(bb, Bb), Ob)
    }
    class Iu {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(bb) {
        const ub = Object.getPrototypeOf(bb);
        if (ub !== zB) {
          let hb = Iu.inheritedTypes.get(ub);
          hb || (hb = new Set, Iu.inheritedTypes.set(ub, hb)), hb.add(bb)
        }
      }
      static cache(bb) {
        let ub = Iu.cachedContexts.get(bb);
        return ub || (ub = new Iu(bb), Iu.cachedContexts.set(bb, ub)), ub
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
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(bb) && (this.types[ub] = bb, null == bb[Symbol.metadata] && fu.initialize(bb), this.schemas.set(bb, ub), !0)
      }
      getTypeId(bb) {
        return this.schemas.get(bb)
      }
      discoverTypes(bb) {
        if (!this.add(bb)) return;
        Iu.inheritedTypes.get(bb)?.forEach((bb => {
          this.discoverTypes(bb)
        }));
        let ub = bb;
        for (;
          (ub = Object.getPrototypeOf(ub)) && ub !== zB && ub !== Function.prototype;) this.discoverTypes(ub);
        const hb = bb[Symbol.metadata];
        (hb[zb] || hb[eb]) && (this.hasFilters = !0);
        for (const Bb in hb) {
          const bb = hb[Bb].type;
          if ("string" !== typeof bb && !Nu(bb))
            if ("function" === typeof bb) this.discoverTypes(bb);
            else {
              const ub = Object.values(bb)[0];
              if ("string" === typeof ub) continue;
              this.discoverTypes(ub)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Pu(bb) {
      const ub = Eu(bb);
      return ub ? {
        complexTypeKlass: Wu[ub],
        childType: bb[ub]
      } : {
        complexTypeKlass: !1,
        childType: bb
      }
    }

    function qu(bb, ub) {
      const hb = yu(bb),
        Bb = Eu(hb),
        Ob = Bb && Eu(hb[Bb]);
      if (Ob) throw new Error(`${ub?`${ub}: `:""}@colyseus/schema: nested collections are not supported ("${Bb}" of "${Ob}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Ob} in a Schema class.`);
      return hb
    }

    function Eu(bb) {
      return "object" === typeof bb && null !== bb ? Object.keys(bb).find((bb => void 0 !== Wu[bb])) : void 0
    }

    function yu(bb) {
      if ("object" !== typeof bb || null === bb) return bb;
      if (Array.isArray(bb)) return {
        array: yu(bb[0])
      };
      const ub = function(bb) {
        const ub = Object.keys(bb),
          hb = ub.filter((bb => /\d+/.test(bb)));
        if (hb.length > 0 && hb.length === ub.length / 2 && bb[bb[hb[0]]] == hb[0]) return "number";
        if (ub.length > 0 && ub.every((ub => bb[ub] === ub))) return "string"
      }(bb);
      if (ub) return ub;
      if (Nu(bb)) return "string" === typeof bb.quantized.wire ? bb : {
        quantized: eu(bb.quantized)
      };
      if (void 0 !== bb.type) return yu(bb.type);
      const hb = Eu(bb);
      return hb && (bb[hb] = yu(bb[hb])), bb
    }
    const Vu = [xb, ib, vb, tb, Jb, eb, nb];

    function Fu(bb, ub, hb) {
      bb[ub] || Object.defineProperty(bb, ub, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), bb[ub].push(hb)
    }
    const fu = {
        addField(bb, ub, hb, Bb, Ob) {
          if (ub >= 63) throw new Error(`Can't define field '${hb}'.\nSchema instances may only have up to 63 fields.`);
          bb[ub] = Object.assign(bb[ub] || {}, {
            type: Bb,
            index: ub,
            name: hb
          }), Object.defineProperty(bb, rb, {
            value: bb[rb] || {},
            enumerable: !1,
            configurable: !0
          }), bb[rb][hb] = Ob || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(bb, Db, {
            value: ub,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(bb, hb, {
            value: ub,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof bb[ub].type || Nu(bb[ub].type) || (void 0 === bb[xb] && Object.defineProperty(bb, xb, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), bb[xb].push(ub));
          const Gb = bb[ub].type;
          if (Gb && "object" === typeof Gb && void 0 !== Gb.stream) {
            if (void 0 !== Gb.array) throw new Error(ju);
            bb[ub].stream = !0, bb[eb] || Object.defineProperty(bb, eb, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), bb[eb].includes(ub) || bb[eb].push(ub);
            const Ob = Bb?.priority;
            "function" === typeof Ob && fu.setStreamPriority(bb, hb, Ob)
          }
        },
        setTag(bb, ub, hb) {
          const Bb = bb[ub];
          if (bb[Bb].tag = hb, bb[zb] || (Object.defineProperty(bb, zb, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(bb, gb, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), bb[zb].push(Bb), hb < 0) bb[gb][hb] || (bb[gb][hb] = []), bb[gb][hb].push(Bb);
          else
            for (let Ob = hb; Ob > 0; Ob &= Ob - 1) {
              const ub = Ob & -Ob;
              bb[gb][ub] || (bb[gb][ub] = []), bb[gb][ub].push(Bb)
            }
        },
        setUnreliable(bb, ub) {
          const hb = bb[ub];
          if ("string" !== typeof bb[hb].type) throw new Error(`@unreliable cannot be applied to ref-type field "${ub}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          bb[hb].unreliable = !0, bb[ib] || Object.defineProperty(bb, ib, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[ib].push(hb)
        },
        setPatchOnly(bb, ub) {
          const hb = bb[ub];
          if (bb[hb].fullStateOnly) throw new Error(`field "${ub}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          bb[hb].patchOnly = !0, Fu(bb, vb, hb), Fu(bb, tb, hb)
        },
        setDeprecated(bb, ub) {
          const hb = bb[ub];
          bb[hb].deprecated = !0, Fu(bb, tb, hb), Object.defineProperty(bb, hb, {
            value: bb[hb],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(bb, ub) {
          const hb = bb[ub];
          if (bb[hb].patchOnly) throw new Error(`field "${ub}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          bb[hb].fullStateOnly = !0, Fu(bb, Jb, hb)
        },
        setStream(bb, ub) {
          const hb = bb[ub];
          bb[hb].stream = !0, bb[eb] || Object.defineProperty(bb, eb, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[eb].push(hb)
        },
        setStreamPriority(bb, ub, hb) {
          const Bb = bb[ub];
          bb[Nb] || Object.defineProperty(bb, Nb, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[Nb][Bb] = hb
        },
        getStreamPriority: (bb, ub) => bb?.[Nb]?.[ub],
        defineField(bb, ub, hb, Bb, Ob) {
          const Gb = qu(Ob, `${bb.name}.${Bb}`),
            {
              complexTypeKlass: Ub,
              childType: Lb
            } = Pu(Gb);
          fu.addField(ub, hb, Bb, Gb, dB(Bb, hb, Lb, Ub)), ub[rb][Bb] && Object.defineProperty(bb.prototype, Bb, ub[rb][Bb]), ("string" === typeof Gb || Nu(Gb)) && (ub[nb] || Object.defineProperty(ub, nb, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), ub[nb][hb] = "string" === typeof Gb ? uu[Gb] : mu(Gb.quantized))
        },
        setFields(bb, ub) {
          const hb = bb.prototype.constructor;
          Iu.register(hb);
          const Bb = Object.getPrototypeOf(hb),
            Ob = Bb && Bb[Symbol.metadata],
            Gb = fu.initialize(hb);
          hb[Yb] || (hb[Yb] = zB[Yb]), hb[Sb] || (hb[Sb] = zB[Sb]), hb[ab] || (hb[ab] = zB[ab]), hb.prototype.toJSON || (hb.prototype.toJSON = zB.prototype.toJSON);
          let Ub = Gb[Db] ?? (Ob && Ob[Db]) ?? -1;
          Ub++, Gb[nb] || Object.defineProperty(Gb, nb, {
            value: Ob?.[nb] ? [...Ob[nb]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const Lb in ub) {
            if (void 0 !== Gb[Lb]) throw new Error(`@colyseus/schema: Duplicate '${Lb}' definition on '${hb.name||"(anonymous)"}'.`);
            fu.defineField(hb, Gb, Ub, Lb, ub[Lb]), Ub++
          }
          return bb
        },
        isDeprecated: (bb, ub) => !0 === bb[ub].deprecated,
        initialize(bb) {
          const ub = Object.getPrototypeOf(bb),
            hb = ub[Symbol.metadata];
          let Bb = bb[Symbol.metadata] ?? Object.create(null);
          if (ub !== zB && Bb === hb && (Bb = Object.create(null), hb)) {
            Object.setPrototypeOf(Bb, hb), Object.defineProperty(Bb, Db, {
              value: hb[Db],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== hb[zb] && (Object.defineProperty(Bb, zb, {
              value: [...hb[zb]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Bb, gb, {
              value: {
                ...hb[gb]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const bb of Vu) {
              const ub = hb[bb];
              void 0 !== ub && Object.defineProperty(Bb, bb, {
                value: [...ub],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Bb, rb, {
              value: {
                ...hb[rb]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(bb, Symbol.metadata, {
            value: Bb,
            writable: !1,
            configurable: !0
          }), Bb
        },
        isValidInstance: bb => bb.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(bb.constructor[Symbol.metadata], Db),
        getFields(bb) {
          const ub = bb[Symbol.metadata],
            hb = {};
          for (let Bb = 0; Bb <= ub[Db]; Bb++) hb[ub[Bb].name] = ub[Bb].type;
          return hb
        },
        hasViewTagAtIndex: (bb, ub) => bb?.[zb]?.includes(ub),
        hasUnreliableAtIndex: (bb, ub) => bb?.[ib]?.includes(ub),
        hasPatchOnlyAtIndex: (bb, ub) => bb?.[vb]?.includes(ub),
        hasFullStateOnlyAtIndex: (bb, ub) => bb?.[Jb]?.includes(ub),
        hasStreamAtIndex: (bb, ub) => bb?.[eb]?.includes(ub)
      },
      ku = (bb, ub, hb) => bb(ub, hb);
    class Tu {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(bb) {
        this.ops = new Uint8Array(Math.max(bb + 1, 1))
      }
      record(bb, ub) {
        const hb = this.ops[bb];
        0 === hb ? this.ops[bb] = ub : (hb === Ob.DELETE || hb === Ob.ADD && ub === Ob.DELETE_AND_ADD) && (this.ops[bb] = Ob.DELETE_AND_ADD), bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      recordDelete(bb, ub) {
        this.ops[bb] = ub, bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      recordRaw(bb, ub) {
        this.record(bb, ub)
      }
      operationAt(bb) {
        const ub = this.ops[bb];
        return 0 === ub ? void 0 : ub
      }
      setOperationAt(bb, ub) {
        this.ops[bb] = ub
      }
      forEach(bb) {
        this.forEachWithCtx(bb, ku)
      }
      forEachWithCtx(bb, ub) {
        let hb = this.dirtyLow,
          Bb = this.dirtyHigh;
        const Ob = this.ops;
        for (; 0 !== hb;) {
          const Bb = hb & -hb,
            Gb = 31 - Math.clz32(Bb);
          hb ^= Bb, ub(bb, Gb, Ob[Gb])
        }
        for (; 0 !== Bb;) {
          const hb = Bb & -Bb,
            Gb = 31 - Math.clz32(hb) + 32;
          Bb ^= hb, ub(bb, Gb, Ob[Gb])
        }
      }
      size() {
        return Qu(this.dirtyLow) + Qu(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class cu {
      ZX = new Map;
      pureOps = [];
      record(bb, ub) {
        const hb = this.ZX.get(bb);
        void 0 === hb ? this.ZX.set(bb, ub) : (hb === Ob.DELETE || hb === Ob.ADD && ub === Ob.DELETE_AND_ADD) && this.ZX.set(bb, Ob.DELETE_AND_ADD)
      }
      recordDelete(bb, ub) {
        this.ZX.set(bb, ub)
      }
      recordRaw(bb, ub) {
        this.ZX.set(bb, ub)
      }
      recordPure(bb) {
        this.pureOps.push([this.ZX.size, bb])
      }
      operationAt(bb) {
        return this.ZX.get(bb)
      }
      setOperationAt(bb, ub) {
        this.ZX.has(bb) && this.ZX.set(bb, ub)
      }
      forEach(bb) {
        this.forEachWithCtx(bb, ku)
      }
      forEachWithCtx(bb, ub) {
        const hb = this.pureOps;
        if (hb.length > 0) {
          let Bb = 0,
            Ob = 0;
          for (const [Gb, Ub] of this.ZX) {
            for (; Bb < hb.length && hb[Bb][0] <= Ob;) {
              const Ob = hb[Bb++][1];
              ub(bb, -Ob, Ob)
            }
            ub(bb, Gb, Ub), Ob++
          }
          for (; Bb < hb.length;) {
            const Ob = hb[Bb++][1];
            ub(bb, -Ob, Ob)
          }
        } else
          for (const [Bb, Ob] of this.ZX) ub(bb, Bb, Ob)
      }
      size() {
        return this.ZX.size + this.pureOps.length
      }
      has() {
        return this.ZX.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.ZX.clear(), this.pureOps.length = 0
      }
      shift(bb) {
        const ub = new Map;
        for (const [hb, Bb] of this.ZX) ub.set(hb + bb, Bb);
        this.ZX = ub
      }
    }

    function Qu(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }

    function Ru(bb) {
      if (void 0 === bb) return 0;
      let ub = 0;
      for (let hb = 0, Bb = bb.length; hb < Bb; hb++) {
        const Bb = bb[hb];
        Bb < 32 && (ub |= 1 << Bb)
      }
      return ub
    }

    function bh(bb) {
      const ub = bb.constructor;
      if (Object.prototype.hasOwnProperty.call(ub, jb)) return ub[jb];
      const hb = ub[Symbol.metadata],
        Bb = fu.isValidInstance(bb),
        Ob = (hb?.[zb]?.length ?? 0) > 0,
        Gb = function(bb) {
          const ub = [],
            hb = [],
            Bb = [],
            Ob = [],
            Gb = bb?.[Db];
          if (void 0 === Gb) return {
            names: ub,
            types: hb,
            tags: Bb,
            encoders: Ob
          };
          const Ub = bb[nb];
          for (let Lb = 0; Lb <= Gb; Lb++) {
            const Gb = bb[Lb];
            void 0 !== Gb ? (ub[Lb] = Gb.name, hb[Lb] = Gb.type, Bb[Lb] = Gb.tag, Ob[Lb] = Ub?.[Lb]) : (ub[Lb] = void 0, hb[Lb] = void 0, Bb[Lb] = void 0, Ob[Lb] = void 0)
          }
          return {
            names: ub,
            types: hb,
            tags: Bb,
            encoders: Ob
          }
        }(hb),
        Ub = Bb && !Ob ? void 0 : ub[Hb],
        Lb = {
          encoder: ub[Sb],
          filter: Ub,
          metadata: hb,
          isSchema: Bb,
          filterBitmask: Bb ? Ru(hb?.[zb]) : 0,
          hasAnyFullStateOnly: (hb?.[Jb]?.length ?? 0) > 0,
          hasAnyUnreliable: (hb?.[ib]?.length ?? 0) > 0,
          hasAnyStream: (hb?.[eb]?.length ?? 0) > 0,
          hasAnyView: Ob,
          fullStateOnlyBitmask: Ru(hb?.[Jb]),
          unreliableBitmask: Ru(hb?.[ib]),
          streamBitmask: Ru(hb?.[eb]),
          names: Gb.names,
          types: Gb.types,
          tags: Gb.tags,
          encoders: Gb.encoders
        };
      return Object.defineProperty(ub, jb, {
        value: Lb,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), Lb
    }

    function uh(bb, ub) {
      if (void 0 !== bb.parentRef && ub(bb.parentRef, bb._parentIndex)) return !0;
      for (let hb = bb.extraParents; void 0 !== hb; hb = hb.next)
        if (ub(hb.ref, hb.index)) return !0;
      return !1
    }
    const hh = (bb, ub) => {
        bb.isFieldUnreliable(ub) ? bb.ensureUnreliableRecorder().record(ub, Ob.ADD) : bb.record(ub, Ob.ADD)
      },
      Bh = (bb, ub) => bb(ub);

    function Oh(bb, ub, hb) {
      const Bb = bb.refTarget;
      if (void 0 !== Bb[ob]) {
        if (bb.isPatchOnly) return;
        if (Array.isArray(Bb.items)) {
          const bb = Bb.items;
          for (let Bb = 0, Ob = bb.length; Bb < Ob; Bb++) void 0 !== bb[Bb] && hb(ub, Bb)
        } else if (void 0 !== Bb.journal)
          for (const [bb, Ob] of Bb.journal.keyByIndex) Bb.$items.has(Ob) && hb(ub, bb);
        else if (void 0 !== Bb.$items)
          for (const bb of Bb.$items.keys()) hb(ub, bb)
      } else {
        const Ob = bb.metadata;
        if (!Ob) return;
        const Gb = Ob[Db] ?? -1,
          Ub = Ob[tb],
          Lb = bb.encDescriptor.names;
        for (let bb = 0; bb <= Gb; bb++) {
          const Ob = Lb[bb];
          if (void 0 === Ob) continue;
          if (Ub && Ub.includes(bb)) continue;
          const Gb = Bb[Ob];
          void 0 !== Gb && null !== Gb && hb(ub, bb)
        }
      }
    }

    function Gh(bb, ub, hb, Bb) {
      ! function(bb, ub, hb) {
        if (!ub) return;
        const Bb = ub[pb],
          Ob = !Bb._isSchema;
        let Gb;
        Ob ? (ub = Bb.parent, hb = Bb.parentIndex, Gb = ub?.[pb].metadata) : Gb = Bb.metadata;
        const Ub = (Gb?.[vb]?.includes(hb) ? jh : 0) | (Gb?.[Jb]?.includes(hb) ? nh : 0),
          Lb = Bb.flags & zh | Ub,
          Yb = bb.flags;
        bb.flags = Yb | Lb;
        Lb & ~Yb & nh && (bb.reset(), bb.unreliableRecorder?.reset());
        const Sb = bb.root?.types;
        if (!Sb?.hasFilters) return;
        const ab = Gb?.[zb]?.includes(hb) ?? !1,
          Hb = Gb?.[eb]?.includes(hb) ?? !1,
          wb = Bb.isFiltered || ab || Hb;
        if (bb.isFiltered = wb, Hb && !Ob) {
          bb.isStreamCollection = !0;
          const ub = Du(bb.ref);
          if (void 0 === ub.priority) {
            const bb = fu.getStreamPriority(Gb, hb);
            void 0 !== bb && (ub.priority = bb)
          }
          bb.root?.registerStream(bb.ref)
        }
        if (wb) {
          const ub = Lh(bb);
          bb.isVisibilitySharedWithParent = Bb.isFiltered && ub && !Hb && (!ab || Ob && Gb[hb].tag !== XB)
        }
      }(bb, ub, hb), bb.isFullStateOnly || (bb.has() && bb.root?.enqueueChangeTree(bb), bb.unreliableRecorder?.has() && bb.root?.enqueueUnreliable(bb), bb.has() || bb.unreliableRecorder?.has() || bb.root?.enqueueChangeTree(bb))
    }

    function Uh(bb) {
      const ub = bb.pendingFilterRefresh;
      for (let hb = 0; hb < ub.length; hb++) {
        const bb = ub[hb];
        0 !== (bb.flags & xh) && Yh(bb)
      }
      ub.length = 0
    }

    function Lh(bb) {
      return bb._isSchema || "string" !== typeof bb.refTarget[ob]
    }

    function Yh(bb) {
      bb.flags &= ~xh;
      const ub = bb.root;
      if (void 0 === ub || void 0 === bb.parentRef) return;
      const hb = Lh(bb);
      let Bb = Zh(bb, bb.parentRef, bb._parentIndex, hb);
      for (let Gb = bb.extraParents; void 0 !== Gb && Bb !== wh; Gb = Gb.next) Bb |= Zh(bb, Gb.ref, Gb.index, hb);
      if (0 === Bb) return;
      bb.isVisibilitySharedWithParent = 0 !== (Bb & Hh);
      const Ob = 0 === (Bb & ah);
      Ob !== bb.isFiltered && (bb.isFiltered = Ob, Ob || bb.isFullStateOnly || (bb.forEachLiveWithCtx(bb, hh), bb.has() && ub.enqueueChangeTree(bb), bb.unreliableRecorder?.has() && ub.enqueueUnreliable(bb)), bb.forEachChildWithCtx(bb, Xh))
    }
    const Sh = 1,
      ah = 2,
      Hh = 4,
      wh = Sh | ah | Hh;

    function Zh(bb, ub, hb, Bb) {
      const Ob = ub[pb];
      if (Ob.root !== bb.root || ! function(bb, ub, hb) {
          const Bb = ub.refTarget;
          if (ub.isArray) {
            const ub = Bb.items,
              Ob = ub[hb];
            if (void 0 !== Ob && Ob[pb] === bb) return !0;
            for (let hb = 0, Bb = ub.length; hb < Bb; hb++) {
              const Bb = ub[hb];
              if (void 0 !== Bb && Bb[pb] === bb) return !0
            }
            return !1
          }
          const Ob = ub.getValue(hb);
          return void 0 !== Ob && Ob[pb] === bb
        }(bb, Ob, hb)) return 0;
      Ob.flags & xh && Yh(Ob);
      let Gb = Sh;
      if (Ob._isSchema) {
        void 0 !== Ob.encDescriptor.tags[hb] || Ob.isFieldStream(hb) || (Ob.isFiltered ? Bb && (Gb |= Hh) : Gb |= ah)
      } else if (Ob.isFiltered) {
        if (Bb && !Ob.isStreamCollection) {
          const bb = Ob.parent?.[pb];
          (bb?._isSchema ? bb.encDescriptor.tags[Ob.parentIndex] : void 0) !== XB && (Gb |= Hh)
        }
      } else Gb |= ah;
      return Gb
    }
    const Xh = (bb, ub, hb) => {
      Yh(ub)
    };

    function ph(bb, ub, hb, Bb) {
      if (bb.addParent(ub, Bb), !hb) return;
      const Ob = hb.add(bb);
      hb !== bb.root && (bb.root = hb, Gh(bb, ub, Bb));
      const Gb = ub?.[pb];
      if (void 0 !== Gb && void 0 !== Gb.subscribedViews && void 0 !== ub[ob] && function(bb, ub, hb, Bb) {
          const Ob = bb.subscribedViews;
          if (void 0 === Ob) return;
          const Gb = bb.isStreamCollection,
            Ub = Gb ? bb.ref : void 0,
            Lb = Gb ? void 0 : hb[pb];
          for (let Yb = 0, Sb = Ob.length; Yb < Sb; Yb++) {
            let bb = Ob[Yb];
            for (; 0 !== bb;) {
              const hb = bb & -bb;
              bb ^= hb;
              const Sb = 32 * Yb + (31 - Math.clz32(hb)),
                ab = Bb.activeViews.get(Sb),
                Hb = ab?.deref();
              void 0 !== Hb ? Gb ? vu(Ub, Sb, ub) : void 0 !== Lb && Hb.markVisible(Lb) : Ob[Yb] &= ~hb
            }
          }
        }(Gb, Bb, bb.ref, hb), Ob) {
        let ub = Kh[Wh];
        void 0 === ub && (ub = {
          parentRef: void 0,
          root: void 0
        }, Kh[Wh] = ub), ub.parentRef = bb.ref, ub.root = hb, Wh++, Ah(bb, ub, Ch), Wh--
      }
    }

    function oh(bb, ub, hb) {
      bb(ub, hb)
    }

    function Ah(bb, ub, hb) {
      const Bb = bb.refTarget;
      if (Bb[ob]) {
        if ("string" !== typeof Bb[ob]) {
          const bb = Bb.items;
          if (void 0 !== bb)
            for (let Bb = 0, Ob = bb.length; Bb < Ob; Bb++) {
              const Ob = bb[Bb];
              Ob && hb(ub, Ob[pb], Bb)
            } else {
              const bb = Bb.$items,
                Ob = Bb._collectionIndexes;
              for (const Bb of bb.keys()) {
                const Gb = bb.get(Bb);
                Gb && hb(ub, Gb[pb], Ob?.[Bb] ?? Bb)
              }
            }
        }
      } else {
        const Ob = bb.metadata,
          Gb = Ob?.[xb];
        if (!Gb) return;
        const Ub = bb.encDescriptor.names;
        for (let bb = 0, Lb = Gb.length; bb < Lb; bb++) {
          const Ob = Gb[bb],
            Lb = Bb[Ub[Ob]];
          Lb && hb(ub, Lb[pb], Ob)
        }
      }
    }

    function lh(bb, ub, hb) {
      ub.root !== bb ? ub.setRoot(bb) : bb.add(ub)
    }
    const Kh = [];
    let Wh = 0;

    function Ch(bb, ub, hb) {
      if (ub.root === bb.root) return bb.root.add(ub), void bb.root.moveNextToParent(ub);
      ub.setParent(bb.parentRef, bb.root, hb)
    }

    function dh(bb, ub, hb) {
      const Bb = (3 & hb) << 3;
      return hb < 4 ? bb >>> Bb & 255 : ub >>> Bb & 255
    }
    const rh = (bb, ub, hb) => bb(ub, hb);
    const jh = 16,
      nh = 32,
      Dh = 128,
      xh = 256,
      zh = jh | nh;
    class gh {
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
        return 0 !== (this.flags & jh)
      }
      set isPatchOnly(bb) {
        this.flags = bb ? this.flags | jh : this.flags & ~jh
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & nh)
      }
      set isFullStateOnly(bb) {
        this.flags = bb ? this.flags | nh : this.flags & ~nh
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(bb) {
        this.flags = bb ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Dh)
      }
      set needsRestage(bb) {
        this.flags = bb ? this.flags | Dh : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Tu(this.metadata?.[Db] ?? 0) : new cu), this.unreliableRecorder
      }
      isFieldUnreliable(bb) {
        const ub = this.encDescriptor;
        return !!ub.hasAnyUnreliable && (bb < 32 ? 0 !== (ub.unreliableBitmask & 1 << bb) : fu.hasUnreliableAtIndex(this.metadata, bb))
      }
      isFieldFullStateOnly(bb) {
        if (this.isFullStateOnly) return !0;
        const ub = this.encDescriptor;
        return !!ub.hasAnyFullStateOnly && (bb < 32 ? 0 !== (ub.fullStateOnlyBitmask & 1 << bb) : fu.hasFullStateOnlyAtIndex(this.metadata, bb))
      }
      isFieldStream(bb) {
        const ub = this.encDescriptor;
        return !!ub.hasAnyStream && (bb < 32 ? 0 !== (ub.streamBitmask & 1 << bb) : fu.hasStreamAtIndex(this.metadata, bb))
      }
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        this.ref = bb, this.refTarget = ub;
        const hb = bh(bb);
        this.encDescriptor = hb, this.metadata = hb.metadata;
        const Bb = hb.isSchema;
        if (this._isSchema = Bb, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Bb) {
          const bb = this.metadata?.[Db] ?? 0;
          bb > 7 && (this.ops = new Uint8Array(bb + 1))
        } else this.collDirty = new Map
      }
      _opAt(bb) {
        const ub = this.ops;
        if (void 0 !== ub) return ub[bb];
        const hb = (3 & bb) << 3;
        return bb < 4 ? this.opsLow >>> hb & 255 : this.opsHigh >>> hb & 255
      }
      _opPut(bb, ub) {
        const hb = this.ops;
        if (void 0 !== hb) return void(hb[bb] = ub);
        const Bb = (3 & bb) << 3,
          Ob = ~(255 << Bb);
        bb < 4 ? this.opsLow = this.opsLow & Ob | ub << Bb : this.opsHigh = this.opsHigh & Ob | ub << Bb
      }
      _markDirty(bb) {
        bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      record(bb, ub) {
        if (this._isSchema) {
          const hb = this._opAt(bb);
          0 === hb ? this._opPut(bb, ub) : (hb === Ob.DELETE || hb === Ob.ADD && ub === Ob.DELETE_AND_ADD) && this._opPut(bb, Ob.DELETE_AND_ADD), this._markDirty(bb)
        } else {
          const hb = this.collDirty,
            Bb = hb.get(bb);
          let Gb;
          Gb = void 0 === Bb ? ub : Bb === Ob.DELETE || Bb === Ob.ADD && ub === Ob.DELETE_AND_ADD ? Ob.DELETE_AND_ADD : Bb, hb.set(bb, Gb)
        }
      }
      recordDelete(bb, ub) {
        this._isSchema ? (this._opPut(bb, ub), this._markDirty(bb)) : this.collDirty.set(bb, ub)
      }
      recordRaw(bb, ub) {
        this._isSchema ? (this._opPut(bb, ub), this._markDirty(bb)) : this.collDirty.set(bb, ub)
      }
      recordPure(bb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, bb])
      }
      operationAt(bb) {
        if (this._isSchema) {
          const ub = this._opAt(bb);
          return 0 === ub ? void 0 : ub
        }
        return this.collDirty.get(bb)
      }
      setOperationAt(bb, ub) {
        if (this._isSchema) this._opPut(bb, ub);
        else {
          const hb = this.collDirty;
          hb.has(bb) && hb.set(bb, ub)
        }
      }
      forEach(bb) {
        this.forEachWithCtx(bb, rh)
      }
      forEachWithCtx(bb, ub) {
        if (this._isSchema) {
          let hb = this.dirtyLow,
            Bb = this.dirtyHigh;
          const Ob = this.ops;
          if (void 0 !== Ob) {
            for (; 0 !== hb;) {
              const Bb = hb & -hb,
                Gb = 31 - Math.clz32(Bb);
              hb ^= Bb, ub(bb, Gb, Ob[Gb])
            }
            for (; 0 !== Bb;) {
              const hb = Bb & -Bb,
                Gb = 31 - Math.clz32(hb) + 32;
              Bb ^= hb, ub(bb, Gb, Ob[Gb])
            }
          } else {
            const Bb = this.opsLow,
              Ob = this.opsHigh;
            for (; 0 !== hb;) {
              const Gb = hb & -hb,
                Ub = 31 - Math.clz32(Gb);
              hb ^= Gb, ub(bb, Ub, dh(Bb, Ob, Ub))
            }
          }
          return
        }
        const hb = this.collDirty,
          Bb = this.collPureOps;
        if (void 0 !== Bb && Bb.length > 0) {
          let Ob = 0,
            Gb = 0;
          for (const [Ub, Lb] of hb) {
            for (; Ob < Bb.length && Bb[Ob][0] <= Gb;) {
              const hb = Bb[Ob++][1];
              ub(bb, -hb, hb)
            }
            ub(bb, Ub, Lb), Gb++
          }
          for (; Ob < Bb.length;) {
            const hb = Bb[Ob++][1];
            ub(bb, -hb, hb)
          }
        } else
          for (const [Ob, Gb] of hb) ub(bb, Ob, Gb)
      }
      size() {
        return this._isSchema ? Qu(this.dirtyLow) + Qu(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(bb, ub) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const hb = this.collDirty,
          Bb = new Map,
          Gb = !this.paused && !this.isFullStateOnly;
        if (bb > 0)
          for (const [Ob, Ub] of hb) Ob < bb && Bb.set(Ob, Ub);
        if (Gb)
          for (let Ub = 0; Ub < ub; Ub++) Bb.set(bb + Ub, Ob.ADD);
        for (const [Ob, Ub] of hb) Ob >= bb && Bb.set(Ob + ub, Ub);
        this.collDirty = Bb, Gb && this.root?.enqueueChangeTree(this)
      }
      removeAt(bb, ub) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const hb = this.collDirty,
          Bb = bb + ub;
        let Ob = !1;
        for (const Ub of hb.keys())
          if (Ub >= Bb) {
            Ob = !0;
            break
          } if (!Ob) {
          for (let ub = bb; ub < Bb; ub++) hb.delete(ub);
          return
        }
        const Gb = new Map;
        for (const [Ub, Lb] of hb) Ub < bb ? Gb.set(Ub, Lb) : Ub >= Bb && Gb.set(Ub - ub, Lb);
        this.collDirty = Gb
      }
      unshift(bb) {
        this.insertAt(0, bb)
      }
      setRoot(bb) {
        ! function(bb, ub) {
          bb.root = ub;
          const hb = ub.add(bb);
          Gh(bb, bb.parent, bb.parentIndex), hb && Ah(bb, ub, lh)
        }(this, bb)
      }
      setParent(bb, ub, hb) {
        ph(this, bb, ub, hb)
      }
      forEachChild(bb) {
        Ah(this, bb, oh)
      }
      forEachChildWithCtx(bb, ub) {
        Ah(this, bb, ub)
      }
      forEachLive(bb) {
        Oh(this, bb, Bh)
      }
      forEachLiveWithCtx(bb, ub) {
        Oh(this, bb, ub)
      }
      operation(bb) {
        this.paused || this.isFullStateOnly || (this.recordPure(bb), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(bb, ub, hb) {
        if (!this.paused && !this.isFieldFullStateOnly(bb)) {
          if (this.isFieldUnreliable(bb) && !this.isNew) {
            const Bb = this.ensureUnreliableRecorder();
            return hb ? Bb.recordRaw(bb, ub) : Bb.record(bb, ub), void this.root?.enqueueUnreliable(this)
          }
          hb ? this.recordRaw(bb, ub) : this.record(bb, ub), this.root?.enqueueChangeTree(this)
        }
      }
      change(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ob.ADD;
        this._routeAndRecord(bb, ub, !1)
      }
      indexedOperation(bb, ub) {
        this._routeAndRecord(bb, ub, !0)
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
        const ub = this.paused;
        this.paused = !0;
        try {
          return bb()
        } finally {
          this.paused = ub
        }
      }
      markDirty(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ob.ADD;
        const hb = this.paused;
        this.paused = !1;
        try {
          this.change(bb, ub)
        } finally {
          this.paused = hb
        }
      }
      getValue(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[wb](bb, ub)
      }
      delete(bb, ub) {
        if (void 0 === bb) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${bb}'`)
          } catch (GO) {
            console.warn(GO)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(bb)) return this.getValue(bb);
        const hb = this.isFieldUnreliable(bb) && !this.isNew;
        hb ? this.ensureUnreliableRecorder().recordDelete(bb, ub ?? Ob.DELETE) : this.recordDelete(bb, ub ?? Ob.DELETE);
        const Bb = this.getValue(bb);
        return Bb && Bb[pb] && this.root?.remove(Bb[pb]), hb ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Bb
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[lb]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[lb]?.()
      }
      discard() {
        this._isSchema || this.refTarget[lb]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const bb = bb => {
          if (bb < 0) return;
          const ub = this.getValue(bb);
          ub && ub[pb] && ub[pb].discardAll()
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
      addParent(bb, ub) {
        ! function(bb, ub, hb) {
          if (bb.parentRef) {
            if (bb.parentRef[pb] === ub[pb]) return void(bb._parentIndex = hb);
            if (uh(bb, ((bb, hb) => bb[pb] === ub[pb]))) return void(bb._parentIndex = hb)
          }
          void 0 === bb.parentRef ? (bb.parentRef = ub, bb._parentIndex = hb) : (bb.extraParents = {
            ref: bb.parentRef,
            index: bb._parentIndex,
            next: bb.extraParents
          }, bb.parentRef = ub, bb._parentIndex = hb)
        }(this, bb, ub)
      }
      setParentIndex(bb, ub) {
        ! function(bb, ub, hb) {
          if (void 0 !== bb.extraParents)
            if (bb.parentRef[pb] !== ub[pb]) {
              for (let Bb = bb.extraParents; void 0 !== Bb; Bb = Bb.next)
                if (Bb.ref[pb] === ub[pb]) return void(Bb.index = hb)
            } else bb._parentIndex = hb;
          else bb._parentIndex = hb
        }(this, bb, ub)
      }
      removeParent() {
        return function(bb, ub) {
          if (bb.parentRef && bb.parentRef[pb] === ub[pb]) return bb.extraParents ? (bb.parentRef = bb.extraParents.ref, bb._parentIndex = bb.extraParents.index, bb.extraParents = bb.extraParents.next) : (bb.parentRef = void 0, bb._parentIndex = void 0), !0;
          let hb = bb.extraParents,
            Bb = null;
          for (; hb;) {
            if (hb.ref[pb] === ub[pb]) return Bb ? Bb.next = hb.next : bb.extraParents = hb.next, !0;
            Bb = hb, hb = hb.next
          }
          return void 0 === bb.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(bb) {
        return function(bb, ub) {
          if (void 0 !== bb.parentRef && ub(bb.parentRef, bb._parentIndex)) return {
            ref: bb.parentRef,
            index: bb._parentIndex
          };
          for (let hb = bb.extraParents; void 0 !== hb; hb = hb.next)
            if (ub(hb.ref, hb.index)) return {
              ref: hb.ref,
              index: hb.index
            }
        }(this, bb)
      }
      hasParent(bb) {
        return uh(this, bb)
      }
      indexInParent(bb) {
        return function(bb, ub) {
          if (bb.parentRef && bb.parentRef[pb] === ub[pb]) return bb._parentIndex;
          for (let hb = bb.extraParents; void 0 !== hb; hb = hb.next)
            if (hb.ref[pb] === ub[pb]) return hb.index
        }(this, bb)
      }
      getAllParents() {
        return function(bb) {
          const ub = [];
          bb.parentRef && ub.push({
            ref: bb.parentRef,
            index: bb._parentIndex
          });
          let hb = bb.extraParents;
          for (; hb;) ub.push({
            ref: hb.ref,
            index: hb.index
          }), hb = hb.next;
          return ub
        }(this)
      }
    }
    class ih {
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
        const ub = this.ref;
        if (ub[ob]) {
          if ("string" !== typeof ub[ob])
            for (const [hb, Bb] of ub.entries()) Bb && bb(Bb[pb], ub._collectionIndexes?.[hb] ?? hb);
          return
        }
        const hb = ub.constructor,
          Bb = hb?.[Symbol.metadata];
        if (!Bb) return;
        const Ob = Bb[xb] ?? [];
        for (let Gb = 0; Gb < Ob.length; Gb++) {
          const hb = Ob[Gb],
            Ub = ub[Bb[hb].name];
          Ub && bb(Ub[pb], hb)
        }
      }
      forEachChildWithCtx(bb, ub) {
        this.forEachChild(((hb, Bb) => ub(bb, hb, Bb)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function vh(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
      var hb;
      Object.defineProperty(bb, pb, {
        value: (hb = ub, new ih(hb)),
        enumerable: !1,
        writable: !0
      })
    }

    function th(bb, ub, hb, Bb, Gb, Ub, Yb) {
      void 0 !== Yb ? Yb(ub, Bb, Ub) : "string" === typeof hb ? uu[hb]?.(ub, Bb, Ub) : null != hb[Symbol.metadata] ? (uu.number(ub, Bb[Lb], Ub), (Gb & Ob.ADD) === Ob.ADD && bb.tryEncodeTypeId(ub, hb, Bb.constructor, Ub)) : uu.number(ub, Bb[Lb], Ub)
    }
    const Jh = function(bb, ub, hb, Bb, Gb, Ub, Lb, Yb) {
        if (ub[Ub.offset++] = 255 & (Bb | Gb), Gb === Ob.DELETE) return;
        const Sb = hb.encDescriptor,
          ab = hb.ref,
          Hb = ab[Cb][Bb] ?? ab[Sb.names[Bb]];
        th(bb, ub, Sb.types[Bb], Hb, Gb, Ub, Sb.encoders[Bb])
      },
      eh = function(bb, ub, hb, Bb, Gb, Ub) {
        if (ub[Ub.offset++] = 255 & Gb, uu.number(ub, Bb, Ub), Gb === Ob.DELETE) return;
        const Lb = hb.ref;
        if ((Gb & Ob.ADD) === Ob.ADD) {
          const bb = Lb.$indexes.get(Bb);
          uu.string(ub, bb, Ub)
        }
        th(bb, ub, Lb[ob], Lb[wb](Bb), Gb, Ub)
      },
      Nh = function(bb, ub, hb, Bb, Gb, Ub) {
        if (ub[Ub.offset++] = 255 & Gb, uu.number(ub, Bb, Ub), Gb === Ob.DELETE) return;
        const Lb = hb.ref;
        th(bb, ub, Lb[ob], Lb[wb](Bb), Gb, Ub)
      },
      sh = function(bb, ub, hb, Bb, Gb, Ub) {
        const Lb = hb.ref;
        (Gb & Ob.ADD) === Ob.ADD && "function" === typeof Lb.set ? eh(bb, ub, hb, Bb, Gb, Ub) : Nh(bb, ub, hb, Bb, Gb, Ub)
      },
      Mh = function(bb, ub, hb, Bb, Gb, Ub, Yb, Sb) {
        const ab = hb.refTarget,
          Hb = ab[ob],
          Zb = "string" !== typeof Hb;
        let Xb;
        if (Sb && hb.isFiltered && Zb) {
          const bb = ab.tmpItems[Bb];
          if (!bb) return;
          if (Xb = bb[Lb], Gb === Ob.DELETE) Gb = Ob.DELETE_BY_REFID;
          else if ((Gb & Ob.ADD) === Ob.ADD) Gb = Ob.ADD_BY_REFID;
          else if ((Gb & Ob.MOVE) === Ob.MOVE) return
        } else if (Gb === Ob.DELETE && Zb) {
          const bb = ab.tmpItems[Bb];
          if (!bb) return;
          Xb = bb[Lb], Gb = Ob.DELETE_BY_REFID
        } else Xb = Bb;
        if (ub[Ub.offset++] = 255 & Gb, uu.number(ub, Xb, Ub), Gb === Ob.DELETE || Gb === Ob.DELETE_BY_REFID) return;
        th(bb, ub, Hb, ab[wb](Bb, Yb), Gb, Ub)
      };

    function mh(bb, ub, hb, Bb, Gb, Ub, Yb) {
      const Sb = bb.resyncVisited;
      let ab = Sb.get(bb.currentRefId);
      if (void 0 === ab && Sb.set(bb.currentRefId, ab = new Set), ab.add(Bb), void 0 !== Gb && hb === Ob.ADD && Gb !== Ub) {
        const hb = Gb[Lb];
        void 0 !== hb && (bb.root.removeRef(hb), Yb?.push({
          ref: ub,
          refId: bb.currentRefId,
          op: Ob.DELETE,
          dynamicIndex: Bb,
          value: void 0,
          previousValue: Gb
        }))
      }
    }

    function Ih(bb, ub, hb, Bb) {
      const Ob = ub[Lb];
      if (void 0 === Ob || hb.has(Ob)) return;
      hb.add(Ob);
      const Gb = ub.constructor[Symbol.metadata],
        Ub = Gb?.[xb];
      if (void 0 === Ub) return;
      const Yb = Gb[vb];
      for (let Lb = 0; Lb < Ub.length; Lb++) {
        const Ob = Ub[Lb];
        if (void 0 !== Yb && Yb.includes(Ob)) continue;
        const Sb = Gb[Ob],
          ab = ub[Sb.name];
        ab && (zB.is(Sb.type) ? Ih(bb, ab, hb, Bb) : Ph(bb, ab, hb, Bb))
      }
    }

    function Ph(bb, ub, hb, Bb) {
      const Gb = ub[Ab] ?? ub,
        Ub = Gb[Lb];
      if (void 0 === Ub || hb.has(Ub)) return;
      hb.add(Ub);
      const Yb = bb.resyncVisited.get(Ub);
      if (void 0 === Yb) return;
      const Sb = bb.root;
      Gb[Xb](Yb, ((bb, hb) => {
        Bb?.push({
          ref: ub,
          refId: Ub,
          op: Ob.DELETE,
          dynamicIndex: hb,
          value: void 0,
          previousValue: bb
        });
        const Gb = bb?.[Lb];
        void 0 !== Gb && Sb.removeRef(Gb)
      }), (ub => {
        zB.isSchema(ub) && Ih(bb, ub, hb, Bb)
      }))
    }
    const qh = 1,
      Eh = 2,
      yh = 3,
      Vh = 4,
      Fh = 5;

    function fh(bb, ub, hb, Bb, Gb, Ub, Yb, Sb, ab) {
      const Hb = bb.root;
      let wb;
      if ((ub & Ob.DELETE) === Ob.DELETE) {
        const bb = Gb?.[Lb];
        void 0 !== bb && Hb.removeRef(bb), ub !== Ob.DELETE_AND_ADD && hb[Zb](Bb), wb = void 0
      }
      if (ub === Ob.DELETE);
      else if ("string" === typeof Ub) wb = Ku[Ub](Yb, Sb);
      else if (Nu(Ub)) wb = function(bb, ub, hb) {
        return Mu(bb, (0, Ku[bb.wire])(ub, hb))
      }(Ub.quantized, Yb, Sb);
      else if (zB.is(Ub)) {
        const hb = Ku.number(Yb, Sb);
        if (wb = Hb.refs.get(hb), (ub & Ob.ADD) === Ob.ADD) {
          const Bb = bb.getInstanceType(Yb, Sb, Ub);
          wb || (wb = bb.createInstanceOfType(Bb)), Hb.addRef(hb, wb, wb !== Gb || ub === Ob.DELETE_AND_ADD && wb === Gb)
        }
      } else {
        const hb = (Xb = Object.keys(Ub)[0], Wu[Xb]),
          Bb = Ku.number(Yb, Sb);
        null !== bb.resyncVisited && function(bb, ub) {
          const hb = bb.resyncVisited;
          hb.has(ub) || hb.set(ub, new Set)
        }(bb, Bb);
        const Zb = Hb.refs.has(Bb) ? Gb || Hb.refs.get(Bb) : hb.constructor.initializeForDecoder();
        if (wb = Zb.clone(!0), wb[ob] = Object.values(Ub)[0], Gb) {
          let bb = Gb[Lb];
          if (void 0 !== bb && Bb !== bb) {
            (ub & Ob.DELETE) !== Ob.DELETE && Hb.removeRef(bb);
            const hb = Gb.entries();
            let Bb;
            for (;
              (Bb = hb.next()) && !Bb.done;) {
              const [ub, hb] = Bb.value;
              "object" === typeof hb && (bb = hb[Lb]), ab?.push({
                ref: Gb,
                refId: bb,
                op: Ob.DELETE,
                field: ub,
                value: void 0,
                previousValue: hb
              })
            }
          }
        }
        Hb.addRef(Bb, wb, Zb !== Gb || ub === Ob.DELETE_AND_ADD && Zb === Gb)
      }
      var Xb;
      return wb
    }
    const kh = function(bb, ub, hb, Bb, Ob) {
        const Gb = ub[hb.offset++],
          Ub = Bb.constructor[Symbol.metadata],
          Lb = Gb >> 6 << 6,
          Yb = Gb % (Lb || 255),
          Sb = Ub[Yb];
        if (void 0 === Sb) return console.warn("@colyseus/schema: field not defined at", {
          index: Yb,
          ref: Bb.constructor.name,
          metadata: Ub
        }), -1;
        const ab = !0 === Sb.deprecated,
          Hb = ab ? void 0 : Bb[wb](Yb),
          Zb = fh(bb, Lb, Bb, Yb, Hb, Sb.type, ub, hb, Ob);
        ab || (null !== Zb && void 0 !== Zb && (Bb[Sb.name] = Zb), Hb !== Zb && Ob?.push({
          ref: Bb,
          refId: bb.currentRefId,
          op: Lb,
          field: Sb.name,
          value: Zb,
          previousValue: Hb
        }))
      },
      Th = function(bb, ub, hb, Bb, Gb) {
        const Ub = Bb[Ab] ?? Bb,
          Lb = ub[hb.offset++];
        if (Lb === Ob.CLEAR) return bb.removeChildRefs(Ub, Gb), void Ub.clear();
        const Yb = Ku.number(ub, hb),
          Sb = Ub[ob],
          ab = Ub.constructor.COLLECTION_KIND;
        let Hb;
        (Lb & Ob.ADD) === Ob.ADD ? ab === qh ? (Hb = Ku.string(ub, hb), Ub.setIndex(Yb, Hb)) : Hb = Yb : Hb = Ub.getIndex(Yb);
        const Zb = Ub[wb](Yb),
          Xb = fh(bb, Lb, Bb, Yb, Zb, Sb, ub, hb, Gb);
        if (null !== bb.resyncVisited && mh(bb, Bb, Lb, Hb, Zb, Xb, Gb), null !== Xb && void 0 !== Xb) switch (ab) {
          case qh:
            Ub.$items.set(Hb, Xb);
            break;
          case Eh:
            Ub.$setAt(Yb, Xb, null !== bb.resyncVisited && Lb === Ob.ADD ? Ob.REPLACE : Lb);
            break;
          case yh:
          case Vh:
          case Fh:
            Ub.$items.has(Yb) || (Ub.$items.set(Yb, Xb), "number" === typeof Ub.$refId && Yb >= Ub.$refId && (Ub.$refId = Yb + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Ub.constructor?.name} \u2014 item at index ${Yb} was not stored.`)
        }
        Zb !== Xb && Gb?.push({
          ref: Bb,
          refId: bb.currentRefId,
          op: Lb,
          dynamicIndex: Hb,
          value: Xb,
          previousValue: Zb
        })
      },
      ch = function(bb, ub, hb, Bb, Gb) {
        const Ub = Bb[Ab] ?? Bb;
        let Lb, Yb = ub[hb.offset++];
        if (Yb === Ob.CLEAR) return bb.removeChildRefs(Ub, Gb), void Ub.clear();
        if (Yb === Ob.REVERSE) return void Ub.items.reverse();
        if (Yb === Ob.DELETE_BY_REFID) {
          const Yb = Ku.number(ub, hb),
            Sb = bb.root.refs.get(Yb);
          if (void 0 === Sb) return;
          if (bb.root.removeRef(Yb), Lb = Ub.findIndex((bb => bb === Sb)), -1 === Lb) return;
          return Ub[Zb](Lb), void Gb?.push({
            ref: Bb,
            refId: bb.currentRefId,
            op: Ob.DELETE,
            dynamicIndex: Lb,
            value: void 0,
            previousValue: Sb
          })
        }
        if (Yb === Ob.ADD_BY_REFID) {
          const Bb = Ku.number(ub, hb),
            Ob = bb.root.refs.get(Bb);
          Ob && (Lb = Ub.findIndex((bb => bb === Ob))), -1 !== Lb && void 0 !== Lb || (Lb = Ub.length)
        } else Lb = Ku.number(ub, hb);
        const Sb = Ub[ob];
        let ab = Lb;
        const Hb = Ub.items[Lb],
          wb = fh(bb, Yb, Bb, Lb, Hb, Sb, ub, hb, Gb);
        null !== bb.resyncVisited && mh(bb, Bb, Yb, Lb, Hb, wb, Gb), null !== wb && void 0 !== wb && wb !== Hb && Ub.$setAt(Lb, wb, null !== bb.resyncVisited && Yb === Ob.ADD ? Ob.REPLACE : Yb), Hb !== wb && Gb?.push({
          ref: Bb,
          refId: bb.currentRefId,
          op: Yb,
          dynamicIndex: ab,
          value: wb,
          previousValue: Hb
        })
      };
    class Qh extends Error {}

    function Rh(bb, ub, hb, Bb) {
      if (!(bb instanceof ub)) throw new Qh(`a '${ub.name}' was expected, but '${bb&&bb.constructor.name}' was provided in ${hb.constructor.name}#${Bb}`)
    }
    const bB = (bb, ub) => {
        const hb = bb.toString(),
          Bb = ub.toString();
        return hb < Bb ? -1 : hb > Bb ? 1 : 0
      },
      uB = {
        get: (bb, ub) => "symbol" === typeof ub || isNaN(ub) ? Reflect.get(bb, ub) : bb.items[ub],
        set: (bb, ub, hb) => {
          if ("symbol" !== typeof ub && !isNaN(ub)) {
            if (void 0 === hb || null === hb) bb.$deleteAt(ub);
            else {
              let Bb;
              if (hb[pb]) {
                Rh(hb, bb[ob], bb, ub);
                const Gb = bb.items[ub];
                bb.isMovingItems ? (Bb = bb.$wireIndex(Number(ub)), void 0 !== Gb ? hb[pb].isNew ? bb[pb].indexedOperation(Bb, Ob.MOVE_AND_ADD) : (bb[pb].getChange(Bb) & Ob.DELETE) === Ob.DELETE ? bb[pb].indexedOperation(Bb, Ob.DELETE_AND_MOVE) : bb[pb].indexedOperation(Bb, Ob.MOVE) : hb[pb].isNew && bb[pb].indexedOperation(Bb, Ob.ADD), hb[pb].setParent(bb, bb[pb].root, Bb)) : Bb = bb.$changeAt(Number(ub), hb), void 0 !== Gb && Gb[pb].root?.remove(Gb[pb])
              } else Bb = bb.$changeAt(Number(ub), hb);
              bb.items[ub] = hb, void 0 !== Bb && (bb.tmpItems[Bb] = hb)
            }
            return !0
          }
          return Reflect.set(bb, ub, hb)
        },
        deleteProperty: (bb, ub) => ("number" === typeof ub ? bb.$deleteAt(ub) : delete bb[ub], !0),
        has: (bb, ub) => "symbol" === typeof ub || isNaN(Number(ub)) ? Reflect.has(bb, ub) : Reflect.has(bb.items, ub)
      };
    class hB {
      [pb];
      [Lb];
      [Ab];
      [ob];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Sb] = Mh;
      static[ab] = ch;
      static COLLECTION_KIND = Eh;
      static[Hb](bb, ub, hb) {
        if (!hb) return !0;
        const Bb = bb[Ab] ?? bb;
        return "string" === typeof Bb[ob] || hb.isChangeTreeVisible(Bb.tmpItems[ub]?.[pb])
      }
      static is(bb) {
        return Array.isArray(bb) || void 0 !== bb.array
      }
      static from(bb) {
        return new hB(...Array.from(bb))
      }
      constructor() {
        this[ob] = void 0, this[Ab] = this;
        const bb = new Proxy(this, uB);
        return Object.defineProperty(this, pb, {
          value: new gh(bb, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), bb
      }
      static initializeForDecoder() {
        const bb = Object.create(hB.prototype);
        bb.items = [], bb.isMovingItems = !1, bb._needsCompaction = !1, bb[ob] = void 0, bb[Ab] = bb;
        const ub = new Proxy(bb, uB);
        return vh(bb, ub), ub
      }
      set length(bb) {
        0 === bb ? this.clear() : bb < this.items.length ? this.splice(bb, this.length - bb) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[pb].pause()
      }
      resumeTracking() {
        this[pb].resume()
      }
      untracked(bb) {
        return this[pb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[pb].paused
      }
      push() {
        const bb = this[Ab],
          ub = bb.items,
          hb = bb.tmpItems,
          Bb = bb[pb],
          Gb = bb[ob];
        let Ub = hb.length;
        for (let Lb = 0, Yb = arguments.length; Lb < Yb; Lb++, Ub++) {
          const Yb = Lb < 0 || arguments.length <= Lb ? void 0 : arguments[Lb];
          if (void 0 === Yb || null === Yb) return;
          "object" === typeof Yb && Gb && Rh(Yb, Gb, bb, Lb), Bb.indexedOperation(Ub, Ob.ADD), ub.push(Yb), hb.push(Yb), Yb[pb]?.setParent(this, Bb.root, Ub)
        }
        return Ub
      }
      pop() {
        const bb = this[Ab],
          ub = bb.tmpItems,
          hb = bb.deletedIndexes;
        let Bb = -1;
        for (let Gb = ub.length - 1; Gb >= 0; Gb--)
          if (!0 !== hb[Gb]) {
            Bb = Gb;
            break
          } if (Bb < 0) return;
        const Ob = bb.$isUnsentAdd(Bb);
        return bb[pb].delete(Bb), Ob ? bb.$cancelAdd(Bb) : hb[Bb] = !0, bb.items.pop()
      }
      at(bb) {
        return bb < 0 && (bb += this.length), this.items[bb]
      }
      $wireIndex(bb) {
        const ub = this.deletedIndexes;
        if (0 === ub.length) return bb;
        const hb = this.tmpItems;
        let Bb = 0;
        for (let Ob = 0; Ob < hb.length; Ob++)
          if (!0 !== ub[Ob]) {
            if (Bb === bb) return Ob;
            Bb++
          } return hb.length + (bb - Bb)
      }
      $isUnsentAdd(bb) {
        const ub = this[pb];
        return 0 === (576 & ub.flags) && !ub.paused && "string" !== typeof this[ob] && ub.operationAt(bb) === Ob.ADD
      }
      $cancelAdd(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const hb = this[pb],
          Bb = this.tmpItems[bb];
        this.tmpItems.splice(bb, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(bb, 1), hb.removeAt(bb, 1);
        const Ob = Bb?.[pb];
        void 0 !== Ob && void 0 === Ob.root && Ob.removeParent(this), ub && this.$reindexChildren(bb)
      }
      $reindexChildren(bb, ub) {
        if (!this[pb].hasFilteredFields) return;
        if ("string" === typeof this[ob]) return;
        const hb = this.tmpItems,
          Bb = hb.length;
        if (void 0 !== ub)
          for (; bb < Bb && hb[bb] === ub[bb];) bb++;
        for (let Ob = bb; Ob < Bb; Ob++) hb[Ob]?.[pb]?.setParentIndex(this, Ob)
      }
      $changeAt(bb, ub) {
        if (void 0 === ub || null === ub) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[bb] === ub) return;
        const hb = void 0 !== this.items[bb] ? "object" === typeof ub ? Ob.DELETE_AND_ADD : Ob.REPLACE : Ob.ADD,
          Bb = this.$wireIndex(bb),
          Gb = this[pb];
        return Gb.change(Bb, hb), ub[pb]?.setParent(this, Gb.root, Bb), Bb
      }
      $deleteAt(bb, ub) {
        this[pb].delete(this.$wireIndex(bb), ub)
      }
      $setAt(bb, ub, hb) {
        hb === Ob.ADD && void 0 !== this.items[bb] ? this.items.splice(bb, 0, ub) : hb === Ob.DELETE_AND_MOVE ? (this.items.splice(bb, 1), this.items[bb] = ub) : (bb > this.items.length && (this._needsCompaction = !0), this.items[bb] = ub)
      }
      clear() {
        const bb = this[Ab];
        if (0 === bb.items.length) return;
        const ub = bb[pb];
        ub.forEachChild(((bb, hb) => {
          ub.root?.remove(bb)
        })), ub.discard(), ub.operation(Ob.CLEAR), bb.items.length = 0, bb.tmpItems.length = 0
      } [Kb]() {
        const bb = this[Ab] ?? this,
          ub = bb[pb];
        if (ub.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const hb = bb.items;
        for (let Bb = 0; Bb < hb.length; Bb++) hb[Bb]?.[Kb]?.();
        bb.items.length = 0, bb.tmpItems.length = 0, bb.deletedIndexes.length = 0, ub.recycle(), bb[Lb] = void 0
      }
      concat() {
        return new hB(...this.items.concat(...arguments))
      }
      join(bb) {
        return this.items.join(bb)
      }
      reverse() {
        const bb = this[Ab],
          ub = bb[pb];
        if (ub.has() || bb.deletedIndexes.length > 0) {
          const ub = bb.items.slice().reverse();
          return this.clear(), this.push(...ub), this
        }
        return ub.operation(Ob.REVERSE), bb.items.reverse(), bb.tmpItems.reverse(), bb.$reindexChildren(0), this
      }
      shift() {
        const bb = this[Ab],
          ub = bb.items;
        if (0 === ub.length) return;
        const hb = bb[pb],
          Bb = bb.deletedIndexes;
        let Gb = 0;
        for (; !0 === Bb[Gb];) Gb++;
        const Ub = bb.$isUnsentAdd(Gb);
        return hb.delete(Gb, Ob.DELETE), Ub ? bb.$cancelAdd(Gb) : Bb[Gb] = !0, ub.shift()
      }
      slice(bb, ub) {
        const hb = new hB;
        return hb.push(...this.items.slice(bb, ub)), hb
      }
      sort() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bB;
        const ub = this[Ab];
        ub.isMovingItems = !0;
        const hb = ub[pb];
        return ub.items.sort(bb).forEach(((bb, ub) => hb.change(ub, Ob.REPLACE))), ub.tmpItems.sort(bb), ub.$reindexChildren(0), ub.isMovingItems = !1, this
      }
      splice(bb, ub) {
        const hb = this[Ab],
          Bb = hb[pb],
          Gb = hb.items,
          Ub = hb.tmpItems,
          Lb = hb.deletedIndexes,
          Yb = Gb.length,
          Sb = Ub.length;
        for (var ab = arguments.length, Hb = new Array(ab > 2 ? ab - 2 : 0), wb = 2; wb < ab; wb++) Hb[wb - 2] = arguments[wb];
        const Zb = Hb.length,
          Xb = [];
        for (let Ob = 0; Ob < Sb; Ob++) !0 !== Lb[Ob] && Xb.push(Ob);
        let ob;
        if (Yb > bb) {
          void 0 === ub && (ub = Yb - bb);
          for (let Gb = bb; Gb < bb + ub; Gb++) {
            const bb = Xb[Gb],
              ub = hb.$isUnsentAdd(bb);
            Bb.delete(bb, Ob.DELETE), ub ? (ob ??= []).push(bb) : Lb[bb] = !0
          }
        } else ub = 0;
        if (Zb > 0) {
          const Gb = Xb[bb] ?? Yb,
            Sb = Math.min(Zb, ub);
          for (let bb = 0; bb < Sb; bb++) {
            const ub = Gb + bb;
            let hb;
            const Yb = void 0 !== ob ? ob.indexOf(ub) : -1; - 1 !== Yb ? (ob.splice(Yb, 1), hb = Ob.ADD) : hb = Lb[ub] ? Ob.DELETE_AND_ADD : Ob.ADD, Bb.indexedOperation(ub, hb), Ub[ub] = Hb[bb], Lb[ub] = !1, Hb[bb][pb]?.setParent(this, Bb.root, ub)
          }
          const ab = Zb - Sb;
          if (ab > 0) {
            const bb = Gb + Sb;
            Bb.insertAt(bb, ab);
            for (let ub = 0; ub < ab; ub++) Hb[Sb + ub][pb]?.setParent(this, Bb.root, bb + ub);
            Lb.length > 0 && Lb.splice(bb, 0, ...new Array(ab).fill(!1)), Ub.splice(bb, 0, ...Hb.slice(Sb)), hb.$reindexChildren(bb + ab)
          }
        }
        if (void 0 !== ob && ob.length > 0) {
          for (let bb = ob.length - 1; bb >= 0; bb--) hb.$cancelAdd(ob[bb], !1);
          hb.$reindexChildren(ob[0])
        }
        return Bb.root?.enqueueChangeTree(Bb), Gb.splice(bb, ub, ...Hb)
      }
      unshift() {
        const bb = this[Ab],
          ub = bb[pb];
        ub.unshift(arguments.length);
        for (let Bb = 0; Bb < arguments.length; Bb++)(Bb < 0 || arguments.length <= Bb ? void 0 : arguments[Bb])?.[pb]?.setParent(this, ub.root, Bb);
        const hb = bb.deletedIndexes;
        return hb.length > 0 && hb.unshift(...new Array(arguments.length).fill(!1)), bb.tmpItems.unshift(...arguments), bb.$reindexChildren(arguments.length), bb.items.unshift(...arguments)
      }
      indexOf(bb, ub) {
        return this.items.indexOf(bb, ub)
      }
      lastIndexOf(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(bb, ub)
      }
      every(bb, ub) {
        return this.items.every(bb, ub)
      }
      some(bb, ub) {
        return this.items.some(bb, ub)
      }
      forEach(bb, ub) {
        return this.items.forEach(bb, ub)
      }
      map(bb, ub) {
        return this.items.map(bb, ub)
      }
      filter(bb, ub) {
        return this.items.filter(bb, ub)
      }
      reduce(bb, ub) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(bb, ub) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(bb, ub) {
        return this.items.find(bb, ub)
      }
      findIndex(bb, ub) {
        return this.items.findIndex(bb, ub)
      }
      fill(bb, ub, hb) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(bb, ub, hb) {
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
        return hB
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
      includes(bb, ub) {
        return this.items.includes(bb, ub)
      }
      flatMap(bb, ub) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(bb) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(bb, ub) {
        const hb = this.items.slice();
        return bb < 0 && (bb += this.length), hb[bb] = ub, new hB(...hb)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(bb) {
        return this.items.slice().sort(bb)
      }
      toSpliced(bb, ub) {
        for (var hb = arguments.length, Bb = new Array(hb > 2 ? hb - 2 : 0), Ob = 2; Ob < hb; Ob++) Bb[Ob - 2] = arguments[Ob];
        const Gb = this.items.slice();
        return Gb.splice.apply(Gb, arguments), Gb
      }
      shuffle() {
        return this.move((bb => {
          let ub = this.items.length;
          for (; 0 != ub;) {
            let bb = Math.floor(Math.random() * ub);
            ub--, [this[ub], this[bb]] = [this[bb], this[ub]]
          }
        }))
      }
      move(bb) {
        return this.isMovingItems = !0, bb(this), this.isMovingItems = !1, this
      } [wb](bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = this[Ab] ?? this;
        return ub || hb.deletedIndexes[bb] ? hb.items[bb] : hb.tmpItems[bb] || hb.items[bb]
      } [Zb](bb) {
        const ub = this[Ab] ?? this;
        ub.items[bb] = void 0, ub._needsCompaction = !0
      } [lb]() {
        const bb = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, bb), this.deletedIndexes.length = 0)
      } [Wb]() {
        const bb = this[Ab] ?? this;
        bb._needsCompaction && (bb._needsCompaction = !1, bb.items = bb.items.filter((bb => void 0 !== bb)))
      } [Xb](bb, ub, hb) {
        const Bb = this[Ab] ?? this,
          Ob = Bb.items;
        let Gb = !1;
        for (let Ub = 0; Ub < Ob.length; Ub++) {
          const Lb = Ob[Ub];
          bb.has(Ub) ? hb(Lb) : (Gb = !0, ub(Lb, Ub), Bb[Zb](Ub))
        }
        Gb && Bb[Wb]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((bb => "function" === typeof bb.toJSON ? bb.toJSON() : bb))
      }
      clone(bb) {
        let ub;
        return bb ? (ub = new hB, ub.push(...this.items)) : ub = new hB(...this.map((bb => bb[pb] ? bb.clone() : bb))), ub
      }
    }
    du("array", {
      constructor: hB
    });
    class BB {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(bb) {
        const ub = this.indexByKey[bb];
        return void 0 === ub ? void 0 : ub
      }
      assign(bb) {
        const ub = this.nextIndex++;
        return this.indexByKey[bb] = ub, this.keyByIndex.set(ub, bb), ub
      }
      snapshot(bb, ub) {
        (this.snapshots ??= new Map).set(bb, ub)
      }
      forgetSnapshot(bb) {
        this.snapshots?.delete(bb)
      }
      snapshotAt(bb) {
        return this.snapshots?.get(bb)
      }
      setIndex(bb, ub) {
        this.keyByIndex.set(bb, ub), this.indexByKey[ub] = bb
      }
      keyOf(bb) {
        return this.keyByIndex.get(bb)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [bb] of this.snapshots) {
            const ub = this.keyByIndex.get(bb);
            void 0 !== ub && (delete this.indexByKey[ub], this.keyByIndex.delete(bb))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class OB {
      [pb];
      [Lb];
      childType;
      [ob];
      $items = new Map;
      journal = new BB;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= nu()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= nu()).priority = bb
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Sb] = eh;
      static[ab] = Th;
      static COLLECTION_KIND = qh;
      static[Hb](bb, ub, hb) {
        if (!hb || "string" === typeof bb[ob]) return !0;
        const Bb = bb[wb](ub) ?? bb.journal.snapshotAt(ub);
        return hb.isChangeTreeVisible(Bb[pb])
      }
      static is(bb) {
        return void 0 !== bb.map
      }
      constructor(bb) {
        if (Object.defineProperty(this, pb, {
            value: new gh(this),
            enumerable: !1,
            writable: !0
          }), this[ob] = void 0, bb)
          if (bb instanceof Map || bb instanceof OB) bb.forEach(((bb, ub) => this.set(ub, bb)));
          else
            for (const ub in bb) this.set(ub, bb[ub])
      }
      static initializeForDecoder() {
        const bb = Object.create(OB.prototype);
        return bb.$items = new Map, bb.journal = new BB, bb[ob] = void 0, vh(bb), bb
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return OB
      }
      set(bb, ub) {
        if (void 0 === ub || null === ub) throw new Error(`MapSchema#set('${bb}', ${ub}): trying to set ${ub} value on '${bb}'.`);
        "object" === typeof ub && this[ob] && Rh(ub, this[ob], this, bb), bb = bb.toString();
        const hb = this[pb],
          Bb = void 0 !== ub[pb],
          Gb = this.journal;
        let Ub, Lb = Gb.indexOf(bb);
        if (void 0 !== Lb) {
          Ub = Ob.REPLACE;
          const hb = this.$items.get(bb);
          if (hb === ub) return;
          Bb && (Ub = Ob.DELETE_AND_ADD, void 0 !== hb && hb[pb].root?.remove(hb[pb])), void 0 !== Gb.snapshotAt(Lb) && Gb.forgetSnapshot(Lb)
        } else Lb = Gb.assign(bb), Ub = Ob.ADD;
        return this.$items.set(bb, ub), Ub === Ob.ADD && hb.isStreamCollection ? void 0 !== hb.root && xu(this, hb.root, Lb) : hb.change(Lb, Ub), Bb && ub[pb].setParent(this, hb.root, Lb), this
      }
      get(bb) {
        return this.$items.get(bb)
      }
      getOrInsert(bb, ub) {
        return this.$items.has(bb) ? this.$items.get(bb) : (this.set(bb, ub), ub)
      }
      getOrInsertComputed(bb, ub) {
        if (this.$items.has(bb)) return this.$items.get(bb);
        const hb = ub(bb);
        return this.set(bb, hb), hb
      }
      delete(bb) {
        if (!this.$items.has(bb)) return !1;
        const ub = this.journal.indexOf(bb),
          hb = this.$items.get(bb),
          Bb = this[pb];
        if (Bb.isStreamCollection) {
          const Ob = Bb.root;
          let Gb = !1;
          return void 0 !== Ob && (Gb = zu(this, Ob, this[Lb], ub)), void 0 !== hb?.[pb] && Ob?.remove(hb[pb]), this.$items.delete(bb), Gb || this.journal.snapshot(ub, hb), !0
        }
        return this.journal.snapshot(ub, hb), Bb.delete(ub), this.$items.delete(bb)
      }
      clear() {
        const bb = this[pb];
        bb.discard(), bb.forEachChild(((ub, hb) => {
          bb.root?.remove(ub)
        })), this.journal.reset(), this.$items.clear(), bb.operation(Ob.CLEAR)
      } [Kb]() {
        const bb = this[pb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[Kb]?.())), this.$items.clear(), this.journal.reset(), bb.recycle(), this[Lb] = void 0
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
        this[pb].pause()
      }
      resumeTracking() {
        this[pb].resume()
      }
      untracked(bb) {
        return this[pb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[pb].paused
      }
      setIndex(bb, ub) {
        this.journal.setIndex(bb, ub)
      }
      getIndex(bb) {
        return this.journal.keyOf(bb)
      } [wb](bb) {
        const ub = this.journal.keyOf(bb);
        return void 0 !== ub ? this.$items.get(ub) : void 0
      } [Zb](bb) {
        const ub = this.journal.keyOf(bb);
        void 0 !== ub && (this.$items.delete(ub), this.journal.keyByIndex.delete(bb))
      } [Xb](bb, ub, hb) {
        let Bb = null;
        if (this.$items.forEach(((Ob, Gb) => {
            bb.has(Gb) ? hb(Ob) : ((Bb ??= new Set).add(Gb), ub(Ob, Gb))
          })), null !== Bb) {
          Bb.forEach((bb => {
            this.$items.delete(bb), delete this.journal.indexByKey[bb]
          }));
          const bb = [];
          this.journal.keyByIndex.forEach(((ub, hb) => {
            Bb.has(ub) && bb.push(hb)
          }));
          for (let ub = 0; ub < bb.length; ub++) this.journal.keyByIndex.delete(bb[ub])
        }
      } [lb]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(bb) {
        tu(this, bb)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (bb => {
          let [ub, hb] = bb;
          return [ub, "function" === typeof hb.toJSON ? hb.toJSON() : hb]
        })))
      }
      clone(bb) {
        let ub;
        return bb ? ub = Object.assign(new OB, this) : (ub = new OB, this.forEach(((bb, hb) => {
          bb[pb] ? ub.set(hb, bb.clone()) : ub.set(hb, bb)
        }))), ub
      }
    }
    du("map", {
      constructor: OB
    });
    class GB {
      [pb];
      [Lb];
      [ob];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= nu()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= nu()).priority = bb
      }
      static[Sb] = Nh;
      static[ab] = Th;
      static COLLECTION_KIND = Vh;
      static[Hb](bb, ub, hb) {
        return !hb || "string" === typeof bb[ob] || hb.isChangeTreeVisible((bb[wb](ub) ?? bb.deletedItems[ub])[pb])
      }
      static is(bb) {
        return void 0 !== bb.collection
      }
      constructor(bb) {
        Object.defineProperty(this, pb, {
          value: new gh(this),
          enumerable: !1,
          writable: !0
        }), this[ob] = void 0, bb && bb.forEach((bb => this.add(bb)))
      }
      static initializeForDecoder() {
        const bb = Object.create(GB.prototype);
        return bb.$items = new Map, bb.deletedItems = {}, bb.$refId = 0, bb[ob] = void 0, vh(bb), bb
      }
      add(bb) {
        const ub = this.$refId++,
          hb = this[pb];
        return this.$items.set(ub, bb), hb.isStreamCollection ? void 0 !== hb.root && xu(this, hb.root, ub) : hb.change(ub), void 0 !== bb[pb] && bb[pb].setParent(this, hb.root, ub), ub
      }
      at(bb) {
        const ub = Array.from(this.$items.keys())[bb];
        return this.$items.get(ub)
      }
      entries() {
        return this.$items.entries()
      }
      delete(bb) {
        const ub = this.$items.entries();
        let hb, Bb;
        for (;
          (Bb = ub.next()) && !Bb.done;)
          if (bb === Bb.value[1]) {
            hb = Bb.value[0];
            break
          } if (void 0 === hb) return !1;
        const Ob = this[pb];
        if (Ob.isStreamCollection) {
          const bb = Ob.root,
            ub = this.$items.get(hb);
          return void 0 !== bb && zu(this, bb, this[Lb], hb), void 0 !== ub?.[pb] && bb?.remove(ub[pb]), this.deletedItems[hb] = ub, this.$items.delete(hb)
        }
        return this.deletedItems[hb] = Ob.delete(hb), this.$items.delete(hb)
      }
      clear() {
        const bb = this[pb];
        bb.discard(), bb.forEachChild(((ub, hb) => {
          bb.root?.remove(ub)
        })), this.$items.clear(), bb.operation(Ob.CLEAR)
      } [Kb]() {
        const bb = this[pb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[Kb]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, bb.recycle(), this[Lb] = void 0
      }
      has(bb) {
        return Array.from(this.$items.values()).some((ub => ub === bb))
      }
      forEach(bb) {
        this.$items.forEach(((ub, hb, Bb) => bb(ub, hb, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[pb].pause()
      }
      resumeTracking() {
        this[pb].resume()
      }
      untracked(bb) {
        return this[pb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[pb].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(bb, ub) {}
      getIndex(bb) {
        return bb
      } [wb](bb) {
        return this.$items.get(bb)
      } [Zb](bb) {
        this.$items.delete(bb)
      } [Xb](bb, ub, hb) {
        let Bb = null;
        if (this.$items.forEach(((Ob, Gb) => {
            bb.has(Gb) ? hb(Ob) : ((Bb ??= []).push(Gb), ub(Ob, Gb))
          })), null !== Bb)
          for (let Ob = 0; Ob < Bb.length; Ob++) this[Zb](Bb[Ob])
      } [lb]() {
        for (const bb in this.deletedItems) delete this.deletedItems[bb]
      }
      _dropView(bb) {
        tu(this, bb)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach(((ub, hb) => {
          bb.push("function" === typeof ub.toJSON ? ub.toJSON() : ub)
        })), bb
      }
      clone(bb) {
        let ub;
        return bb ? ub = Object.assign(new GB, this) : (ub = new GB, this.forEach((bb => {
          bb[pb] ? ub.add(bb.clone()) : ub.add(bb)
        }))), ub
      }
    }
    du("collection", {
      constructor: GB
    });
    class UB {
      [pb];
      [Lb];
      [ob];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= nu()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= nu()).priority = bb
      }
      static[Sb] = Nh;
      static[ab] = Th;
      static COLLECTION_KIND = yh;
      static[Hb](bb, ub, hb) {
        return !hb || "string" === typeof bb[ob] || hb.isVisible((bb[wb](ub) ?? bb.deletedItems[ub])[pb])
      }
      static is(bb) {
        return void 0 !== bb.set
      }
      constructor(bb) {
        Object.defineProperty(this, pb, {
          value: new gh(this),
          enumerable: !1,
          writable: !0
        }), this[ob] = void 0, bb && bb.forEach((bb => this.add(bb)))
      }
      static initializeForDecoder() {
        const bb = Object.create(UB.prototype);
        return bb.$items = new Map, bb.deletedItems = {}, bb.$refId = 0, bb[ob] = void 0, vh(bb), bb
      }
      add(bb) {
        if (this.has(bb)) return !1;
        const ub = this.$refId++,
          hb = this[pb];
        return this.$items.set(ub, bb), hb.isStreamCollection ? void 0 !== hb.root && xu(this, hb.root, ub) : hb.change(ub, Ob.ADD), void 0 !== bb[pb] && bb[pb].setParent(this, hb.root, ub), ub
      }
      entries() {
        return this.$items.entries()
      }
      delete(bb) {
        const ub = this.$items.entries();
        let hb, Bb;
        for (;
          (Bb = ub.next()) && !Bb.done;)
          if (bb === Bb.value[1]) {
            hb = Bb.value[0];
            break
          } if (void 0 === hb) return !1;
        const Ob = this[pb];
        if (Ob.isStreamCollection) {
          const bb = Ob.root,
            ub = this.$items.get(hb);
          return void 0 !== bb && zu(this, bb, this[Lb], hb), void 0 !== ub?.[pb] && bb?.remove(ub[pb]), this.deletedItems[hb] = ub, this.$items.delete(hb)
        }
        return this.deletedItems[hb] = Ob.delete(hb), this.$items.delete(hb)
      }
      clear() {
        const bb = this[pb];
        bb.discard(), this.$items.clear(), bb.operation(Ob.CLEAR)
      } [Kb]() {
        const bb = this[pb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[Kb]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, bb.recycle(), this[Lb] = void 0
      }
      has(bb) {
        const ub = this.$items.values();
        let hb, Bb = !1;
        for (;
          (hb = ub.next()) && !hb.done;)
          if (bb === hb.value) {
            Bb = !0;
            break
          } return Bb
      }
      forEach(bb) {
        this.$items.forEach(((ub, hb, Bb) => bb(ub, hb, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[pb].pause()
      }
      resumeTracking() {
        this[pb].resume()
      }
      untracked(bb) {
        return this[pb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[pb].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(bb, ub) {}
      getIndex(bb) {
        return bb
      } [wb](bb) {
        return this.$items.get(bb)
      } [Zb](bb) {
        this.$items.delete(bb)
      } [Xb](bb, ub, hb) {
        let Bb = null;
        if (this.$items.forEach(((Ob, Gb) => {
            bb.has(Gb) ? hb(Ob) : ((Bb ??= []).push(Gb), ub(Ob, Gb))
          })), null !== Bb)
          for (let Ob = 0; Ob < Bb.length; Ob++) this[Zb](Bb[Ob])
      } [lb]() {
        for (const bb in this.deletedItems) delete this.deletedItems[bb]
      }
      _dropView(bb) {
        tu(this, bb)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach(((ub, hb) => {
          bb.push("function" === typeof ub.toJSON ? ub.toJSON() : ub)
        })), bb
      }
      clone(bb) {
        let ub;
        return bb ? ub = Object.assign(new UB, this) : (ub = new UB, this.forEach((bb => {
          bb[pb] ? ub.add(bb.clone()) : ub.add(bb)
        }))), ub
      }
    }
    du("set", {
      constructor: UB
    });
    class LB {
      [pb];
      [Lb];
      [ob];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= nu()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= nu()).priority = bb
      }
      static $isStream = !0;
      static[Sb] = Nh;
      static[ab] = Th;
      static COLLECTION_KIND = Fh;
      static[Hb](bb, ub, hb) {
        if (!hb) return !0;
        const Bb = bb[wb](ub);
        return void 0 !== Bb && hb.isVisible(Bb[pb])
      }
      static is(bb) {
        return bb && void 0 !== bb.stream
      }
      constructor() {
        Object.defineProperty(this, pb, {
          value: new gh(this),
          enumerable: !1,
          writable: !0
        }), this[ob] = void 0
      }
      static initializeForDecoder() {
        const bb = Object.create(LB.prototype);
        return bb.$items = new Map, bb.$nextPosition = 0, bb._itemIndex = new Map, bb[ob] = void 0, vh(bb), bb
      }
      add(bb) {
        if (this._itemIndex.has(bb)) return -1;
        const ub = this.$nextPosition++;
        this.$items.set(ub, bb), this._itemIndex.set(bb, ub);
        const hb = this[pb].root;
        return void 0 !== bb[pb] && bb[pb].setParent(this, hb, ub), void 0 !== hb && xu(this, hb, ub), ub
      }
      remove(bb) {
        const ub = this._itemIndex.get(bb);
        if (void 0 === ub) return !1;
        this._itemIndex.delete(bb), this.$items.delete(ub);
        const hb = this[pb].root;
        return void 0 !== hb && (zu(this, hb, this[Lb], ub), void 0 !== bb[pb] && hb.remove(bb[pb])), !0
      }
      has(bb) {
        return this._itemIndex.has(bb)
      }
      clear() {
        const bb = this[pb].root;
        if (void 0 !== bb) {
          ! function(bb, ub, hb) {
            const Bb = bb._stream;
            if (void 0 !== Bb) {
              Bb.broadcastPending.clear();
              for (const bb of Bb.sentBroadcast) Bb.broadcastDeletes.add(bb);
              Bb.sentBroadcast.clear(), ub.forEachActiveView((bb => {
                Bb.pendingByView.get(bb.id)?.clear();
                const ub = Bb.sentByView.get(bb.id);
                if (void 0 !== ub && ub.size > 0) {
                  let Bb = bb.changes.get(hb);
                  void 0 === Bb && (Bb = new Map, bb.changes.set(hb, Bb));
                  for (const bb of ub) Bb.set(bb, Ob.DELETE);
                  ub.clear()
                }
              }))
            }
          }(this, bb, this[Lb]);
          for (const ub of this.$items.values()) void 0 !== ub[pb] && bb.remove(ub[pb])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(bb) {
        for (const [ub, hb] of this.$items) bb(hb, ub, this)
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
      setIndex(bb, ub) {}
      getIndex(bb) {
        return bb
      } [wb](bb) {
        return this.$items.get(bb)
      } [Zb](bb) {
        const ub = this.$items.get(bb);
        void 0 !== ub && (this._itemIndex.delete(ub), this.$items.delete(bb))
      } [Xb]() {} [lb]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach((ub => {
          bb.push("function" === typeof ub?.toJSON ? ub.toJSON() : ub)
        })), bb
      }
      clone(bb) {
        if (bb) {
          return Object.assign(new LB, this)
        }
        const ub = new LB;
        return ub.maxPerTick = this.maxPerTick, this.forEach((bb => {
          ub.add("function" === typeof bb?.clone ? bb.clone() : bb)
        })), ub
      }
      _dropView(bb) {
        tu(this, bb)
      }
      _unregister() {}
    }
    du("stream", {
      constructor: LB
    });
    class YB {
      [db] = !0;
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
        if (bb && "object" === typeof bb && void 0 !== bb.array) throw new Error(ju);
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

    function SB(bb) {
      return null != bb && !0 === bb[db]
    }

    function aB(bb) {
      return () => new YB(bb)
    }

    function HB(bb) {
      if (SB(bb)) {
        const ub = bb._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof ub?`use the type name instead: t.array("${ub}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return bb
    }

    function wB(bb) {
      return new YB({
        quantized: eu(bb)
      })
    }
    const ZB = Object.freeze({
        string: aB("string"),
        number: aB("number"),
        boolean: aB("boolean"),
        int8: aB("int8"),
        uint8: aB("uint8"),
        int16: aB("int16"),
        uint16: aB("uint16"),
        int32: aB("int32"),
        uint32: aB("uint32"),
        int64: aB("int64"),
        uint64: aB("uint64"),
        float32: aB("float32"),
        float64: aB("float64"),
        bigint64: aB("bigint64"),
        biguint64: aB("biguint64"),
        ref: bb => new YB(bb),
        array: bb => new YB({
          array: HB(bb)
        }),
        map: bb => new YB({
          map: HB(bb)
        }),
        set: bb => new YB({
          set: HB(bb)
        }),
        collection: bb => new YB({
          collection: HB(bb)
        }),
        stream: bb => {
          const ub = new YB({
            stream: HB(bb)
          });
          return ub._stream = !0, ub
        },
        quantized: wB,
        angle: bb => wB({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: bb?.bits ?? 16
        })
      }),
      XB = -1;

    function pB(bb) {
      return Iu.register(bb), bb
    }

    function oB() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XB;
      return function(ub, hb) {
        const Bb = fu.initialize(ub.constructor);
        fu.setTag(Bb, hb, bb)
      }
    }

    function AB(bb, ub) {
      const hb = fu.initialize(bb.constructor);
      fu.setUnreliable(hb, ub)
    }

    function lB(bb, ub) {
      const hb = fu.initialize(bb.constructor);
      fu.setPatchOnly(hb, ub)
    }

    function KB(bb, ub) {
      const hb = fu.initialize(bb.constructor);
      fu.setFullStateOnly(hb, ub)
    }

    function WB(bb, ub) {
      return function(hb, Bb) {
        const Ob = hb.constructor;
        if (!bb) throw new Error(`${Ob.name}: @type() reference provided for "${Bb}" is undefined. Make sure you don't have any circular dependencies.`);
        bb = qu(bb, `${Ob.name}.${Bb}`), Iu.register(Ob);
        const Gb = Object.getPrototypeOf(Ob)[Symbol.metadata],
          Ub = fu.initialize(Ob);
        let Lb = Ub[Bb];
        if (void 0 !== Ub[Lb]) {
          if (Ub[Lb].deprecated) return;
          if (void 0 !== Ub[Lb].type) {
            const bb = new Error(`@colyseus/schema: Duplicate '${Bb}' definition on '${Ob.name}'.\nCheck @type() annotation`);
            throw new Error(`${bb.message} ${bb.stack.split("\n")[4].trim()}`)
          }
        } else Lb = Ub[Db] ?? (Gb && Gb[Db]) ?? -1, Lb++;
        if (ub && ub.manual) fu.addField(Ub, Lb, Bb, bb, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: ub,
            childType: hb
          } = Pu(bb);
          fu.addField(Ub, Lb, Bb, bb, dB(Bb, Lb, hb, ub))
        }
        Ub[rb][Bb] && Object.defineProperty(hb, Bb, Ub[rb][Bb]), ("string" === typeof bb || Nu(bb)) && (Ub[nb] || Object.defineProperty(Ub, nb, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Ub[nb][Lb] = "string" === typeof bb ? uu[bb] : mu(bb.quantized))
      }
    }
    const CB = {
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

    function dB(bb, ub, hb, Bb) {
      let Gb;
      return Gb = Bb ? function(bb, ub, hb, Bb) {
        const Gb = Bb.constructor === hB,
          Ub = Bb.constructor === OB;
        return function(bb) {
          const Bb = this[Cb],
            Lb = Bb[ub];
          if (bb !== Lb) {
            if (void 0 !== bb && null !== bb) {
              if (!Gb || bb instanceof hB)
                if (!Ub || bb instanceof OB) bb[ob] = hb;
                else {
                  const ub = new OB;
                  if (ub[ob] = hb, bb instanceof Map) bb.forEach(((bb, hb) => ub.set(hb, bb)));
                  else
                    for (const hb in bb) ub.set(hb, bb[hb]);
                  bb = ub
                }
              else {
                const ub = new hB;
                ub[ob] = hb, ub.push(...bb), bb = ub
              }
              const Bb = this[pb],
                Sb = this.constructor;
              void 0 !== Lb && null !== Lb && Lb[pb] ? (Bb.root?.remove(Lb[pb]), Sb[Yb](Bb, ub, Ob.DELETE_AND_ADD)) : Sb[Yb](Bb, ub, Ob.ADD), bb[pb]?.setParent(this, Bb.root, ub)
            } else void 0 !== Lb && null !== Lb && this[pb].delete(ub);
            Bb[ub] = bb
          }
        }
      }(0, ub, hb, Bb) : "string" === typeof hb ? function(bb, ub, hb) {
        const Bb = CB[hb],
          Gb = "string" === hb,
          Ub = "boolean" === hb;
        return function(hb) {
          const Lb = this[Cb],
            Sb = Lb[ub];
          if (hb !== Sb) {
            if (void 0 !== hb && null !== hb) {
              if (!Ub && void 0 !== Bb && typeof hb !== Bb && (!Gb || null !== hb)) {
                const ub = hb && hb.constructor ? ` (${hb.constructor.name})` : "";
                throw new Qh(`a '${Bb}' was expected, but '${JSON.stringify(hb)}'${ub} was provided in ${this.constructor.name}#${bb}`)
              }
              this.constructor[Yb](this[pb], ub, Ob.ADD)
            } else void 0 !== Sb && null !== Sb && this[pb].delete(ub);
            Lb[ub] = hb
          }
        }
      }(bb, ub, hb) : Nu(hb) ? function(bb, ub, hb) {
        return function(Bb) {
          const Gb = this[Cb],
            Ub = Gb[ub];
          if (void 0 !== Bb && null !== Bb) {
            if ("number" !== typeof Bb) throw new Qh(`a 'number' was expected, but '${JSON.stringify(Bb)}' was provided in ${this.constructor.name}#${bb}`);
            if ((Bb = Mu(hb, su(hb, Bb))) === Ub) return;
            this.constructor[Yb](this[pb], ub, Ob.ADD)
          } else {
            if (Bb === Ub) return;
            void 0 !== Ub && null !== Ub && this[pb].delete(ub)
          }
          Gb[ub] = Bb
        }
      }(bb, ub, hb.quantized) : function(bb, ub, hb) {
        return function(Bb) {
          const Gb = this[Cb],
            Ub = Gb[ub];
          if (Bb !== Ub) {
            if (void 0 !== Bb && null !== Bb) {
              Rh(Bb, hb, this, bb);
              const Gb = this[pb],
                Lb = this.constructor;
              void 0 !== Ub && null !== Ub && Ub[pb] ? (Gb.root?.remove(Ub[pb]), Lb[Yb](Gb, ub, Ob.DELETE_AND_ADD)) : Lb[Yb](Gb, ub, Ob.ADD), Bb[pb]?.setParent(this, Gb.root, ub)
            } else void 0 !== Ub && null !== Ub && this[pb].delete(ub);
            Gb[ub] = Bb
          }
        }
      }(bb, ub, hb), {
        get: function() {
          return this[Cb][ub]
        },
        set: Gb,
        enumerable: !0,
        configurable: !0
      }
    }

    function rB() {
      let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(ub, hb) {
        const Bb = fu.initialize(ub.constructor);
        fu.setDeprecated(Bb, hb), bb && (Bb[rb] ??= {}, Bb[rb][hb] = {
          get: function() {
            throw new Error(`${hb} is deprecated.`)
          },
          set: function(bb) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(ub, hb, Bb[rb][hb]))
      }
    }
    let jB = !1;

    function nB(bb, ub, hb) {
      jB || (jB = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Bb in ub) WB(ub[Bb], hb)(bb.prototype, Bb);
      return bb
    }

    function DB(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zB;
      if (null == bb || "object" !== typeof bb) throw new Error(`schema(): first argument must be a fields object (got ${typeof bb}).`);
      const Bb = {},
        Ob = {},
        Gb = {},
        Ub = {},
        Lb = (bb, ub) => {
          if (ub.hasDefault)((bb, ub) => {
            "function" === typeof ub ? Ub[bb] = ub : ub && "function" === typeof ub.clone ? Ub[bb] = () => ub.clone() : Gb[bb] = ub
          })(bb, ub.default);
          else if (!ub.optional) {
            const hb = function(bb) {
              if (bb && "object" === typeof bb) {
                if (void 0 !== bb.array) return () => new hB;
                if (void 0 !== bb.map) return () => new OB;
                if (void 0 !== bb.set) return () => new UB;
                if (void 0 !== bb.collection) return () => new GB;
                if (void 0 !== bb.stream) return () => new LB
              } else if ("function" === typeof bb && zB.is(bb) && (!bb.prototype.initialize || 0 === bb.prototype.initialize.length)) return () => new bb
            }(ub.type);
            hb && (Ub[bb] = hb)
          }
        },
        Yb = {},
        Sb = [],
        ab = [],
        Hb = {},
        wb = [],
        Zb = [],
        Xb = {},
        pb = [];
      for (const Cb in bb) {
        const hb = bb[Cb],
          Gb = `schema(${ub?`'${ub}'`:""}): field '${Cb}'`;
        if (SB(hb)) {
          const bb = hb.toDefinition();
          if (bb.noSync) {
            if (void 0 !== bb.view || bb.unreliable || bb.patchOnly || bb.fullStateOnly || bb.stream) throw new Error(`${Gb} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            Lb(Cb, bb);
            continue
          }
          if (bb.patchOnly && bb.fullStateOnly) throw new Error(`${Gb} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const ub = qu(bb.type, Gb);
          if ("function" === typeof ub && !zB.is(ub)) throw new Error(`${Gb} is a synced ref to non-Schema class '${ub.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Bb[Cb] = ub, void 0 !== bb.view && (Yb[Cb] = bb.view), bb.unreliable && Sb.push(Cb), bb.patchOnly && ab.push(Cb), bb.deprecated && (Hb[Cb] = bb.deprecatedThrows), bb.fullStateOnly && wb.push(Cb), bb.stream && Zb.push(Cb), void 0 !== bb.streamPriority && (Xb[Cb] = bb.streamPriority), bb.optional && pb.push(Cb), Lb(Cb, bb)
        } else {
          if ("function" !== typeof hb) throw new Error(`${Gb} must be a t.* builder, Schema subclass, or method (got ${typeof hb}).`);
          zB.is(hb) ? (Bb[Cb] = hb, hb.prototype.initialize && 0 !== hb.prototype.initialize.length || (Ub[Cb] = () => new hb)) : Ob[Cb] = hb
        }
      }
      const ob = bb => {
          for (const ub in Gb) bb[ub] = Gb[ub];
          for (const ub in Ub) bb[ub] = Ub[ub]()
        },
        Ab = () => {
          const bb = {};
          return ob(bb), bb
        },
        lb = "function" === typeof Ob.initialize,
        Kb = Ob.initialize ?? hb._initialize,
        Wb = class extends hb {
          constructor() {
            for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
            const Ob = ub[0];
            void 0 === Ob ? (super(), ob(this)) : super(Object.assign(Ab(), lb ? (bb => {
              const ub = Object.keys(Bb),
                hb = {};
              for (const Bb in bb) ub.includes(Bb) || (hb[Bb] = bb[Bb]);
              return hb
            })(Ob) : Ob)), Kb && new.target === Wb && Kb.apply(this, ub)
          }
        };
      ub && Object.defineProperty(Wb, "name", {
        value: ub
      }), fu.setFields(Wb, Bb), Wb._getDefaultValues = Ab, Wb._initialize = Kb, Object.assign(Wb.prototype, Ob);
      for (const Cb in Yb) oB(Yb[Cb])(Wb.prototype, Cb);
      for (const Cb of Sb) AB(Wb.prototype, Cb);
      for (const Cb of ab) lB(Wb.prototype, Cb);
      for (const Cb in Hb) rB(Hb[Cb])(Wb.prototype, Cb);
      if (wb.length > 0 || Zb.length > 0) {
        const bb = Wb[Symbol.metadata];
        for (const ub of wb) fu.setFullStateOnly(bb, ub);
        for (const ub of Zb) fu.setStream(bb, ub);
        for (const ub in Xb) fu.setStreamPriority(bb, ub, Xb[ub])
      }
      if (pb.length > 0) {
        const bb = Wb[Symbol.metadata];
        for (const ub of pb) bb[bb[ub]].optional = !0
      }
      return Wb.extend = (bb, ub) => DB(bb, ub, Wb), Wb
    }

    function xB(bb) {
      const ub = bb[pb].root,
        hb = {
          ops: {},
          refs: []
        };
      let Bb = ub.changes.next;
      for (; Bb;) {
        const bb = Bb.changeTree;
        void 0 !== bb ? (hb.refs.push(`refId#${bb.ref[Lb]}`), bb.forEach(((bb, ub) => {
          if (bb < 0 || !ub) return;
          const Bb = Ob[ub];
          hb.ops[Bb] || (hb.ops[Bb] = 0), hb.ops[Bb]++
        })), Bb = Bb.next) : Bb = Bb.next
      }
      return hb
    }
    class zB {
      static[Sb] = Jh;
      static[ab] = kh;
      [Lb];
      [Cb];
      static initialize(bb) {
        Object.defineProperty(bb, pb, {
          value: new gh(bb),
          enumerable: !1,
          writable: !0
        }), bb[Cb] = []
      }
      static initializeForDecoder() {
        const bb = Object.create(this.prototype);
        return vh(bb), bb[Cb] = [], bb
      }
      static reset(bb) {
        const ub = bb?.[pb];
        if (void 0 === ub || "function" !== typeof ub.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== ub.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${bb.constructor.name}) with multiple parents.`);
        bb[Kb]()
      } [Kb]() {
        const bb = this.constructor[Symbol.metadata],
          ub = bb?.[xb] ?? [],
          hb = this[Cb];
        for (let Bb = 0; Bb < ub.length; Bb++) {
          const bb = hb[ub[Bb]];
          bb?.[Kb]?.()
        }
        this[pb].recycle(), this[Lb] = void 0
      }
      static is(bb) {
        const ub = bb[Symbol.metadata];
        return "object" === typeof ub && null !== ub
      }
      static isSchema(bb) {
        return "function" === typeof bb?.assign
      }
      static[Yb](bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ob.ADD;
        bb.change(ub, hb)
      }
      static[Hb](bb, ub, hb) {
        const Bb = bb.constructor[Symbol.metadata],
          Ob = Bb[ub]?.tag;
        return void 0 === hb ? void 0 === Ob : void 0 === Ob || (Ob === XB ? hb.isChangeTreeVisible(bb[pb]) : hb.hasTagOnTree(bb[pb], Ob))
      }
      constructor(bb) {
        zB.initialize(this), bb && zB.assignProps(this, bb)
      }
      assign(bb) {
        return zB.assignProps(this, bb), this
      }
      static assignProps(bb, ub) {
        const hb = bb.constructor[Symbol.metadata];
        if (hb && void 0 !== hb[Db])
          for (let Ob = 0; Ob <= hb[Db]; Ob++) {
            const Bb = hb[Ob];
            if (!Bb) continue;
            const Gb = ub[Bb.name];
            void 0 !== Gb && (bb[Bb.name] = Gb)
          }
        const Bb = Object.keys(ub);
        for (let Ob = 0; Ob < Bb.length; Ob++) {
          const Gb = Bb[Ob];
          hb && void 0 !== hb[Gb] || (bb[Gb] = ub[Gb])
        }
      }
      restore(bb) {
        const ub = this.constructor[Symbol.metadata];
        for (const hb in ub) {
          const Bb = ub[hb],
            Ob = Bb.name,
            Gb = Bb.type,
            Ub = bb[Ob];
          if (void 0 !== Ub && null !== Ub)
            if ("string" === typeof Gb) this[Ob] = Ub;
            else if (zB.is(Gb)) {
            const bb = new Gb;
            bb.restore(Ub), this[Ob] = bb
          } else if ("object" === typeof Gb) {
            const bb = Object.keys(Gb)[0],
              ub = Gb[bb];
            if ("map" === bb) {
              const bb = this[Ob];
              for (const hb in Ub)
                if (zB.is(ub)) {
                  const Bb = new ub;
                  Bb.restore(Ub[hb]), bb.set(hb, Bb)
                } else bb.set(hb, Ub[hb])
            } else if ("array" === bb) {
              const bb = this[Ob];
              for (let hb = 0; hb < Ub.length; hb++)
                if (zB.is(ub)) {
                  const Bb = new ub;
                  Bb.restore(Ub[hb]), bb.push(Bb)
                } else bb.push(Ub[hb])
            }
          }
        }
        return this
      }
      setDirty(bb, ub) {
        const hb = this.constructor[Symbol.metadata];
        this[pb].change(hb[hb[bb]].index, ub)
      }
      pauseTracking() {
        this[pb].pause()
      }
      resumeTracking() {
        this[pb].resume()
      }
      untracked(bb) {
        return this[pb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[pb].paused
      }
      clone() {
        const bb = Object.create(this.constructor.prototype);
        zB.initialize(bb);
        const ub = this.constructor[Symbol.metadata];
        for (const hb in ub) {
          const Bb = ub[hb].name;
          "object" === typeof this[Bb] && "function" === typeof this[Bb]?.clone ? bb[Bb] = this[Bb].clone() : bb[Bb] = this[Bb]
        }
        return bb
      }
      toJSON() {
        const bb = {},
          ub = this.constructor[Symbol.metadata];
        for (const hb in ub) {
          const Bb = ub[hb],
            Ob = Bb.name;
          Bb.deprecated || null === this[Ob] || "undefined" === typeof this[Ob] || (bb[Ob] = "function" === typeof this[Ob].toJSON ? this[Ob].toJSON() : this[Ob])
        }
        return bb
      }
      discardAllChanges() {
        this[pb].discardAll()
      } [wb](bb) {
        return this[this.constructor[Symbol.metadata][bb].name]
      } [Zb](bb) {
        this[this.constructor[Symbol.metadata][bb].name] = void 0
      }
      static debugRefIds(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Gb = ub ? ` - ${JSON.stringify(bb.toJSON())}` : "",
          Ub = bb[pb],
          Yb = bb[Lb],
          Sb = Bb ? Bb.root.refCount[Yb] : Ub.refCount,
          ab = Sb > 1 ? ` [\xd7${Sb}]` : "";
        let Hb = `${function(bb){return new Array(bb).fill(0).map(((ub,hb)=>hb===bb-1?"\u2514\u2500 ":"   ")).join("")}(hb)}${Ob}${bb.constructor.name} (refId: ${Yb})${ab}${Gb}\n`;
        return Ub.forEachChild(((Ob, Gb) => {
          let Ub = Gb;
          "number" === typeof Gb && bb.$indexes && (Ub = bb.$indexes.get(Gb) ?? Gb);
          const Lb = void 0 !== bb.forEach && void 0 !== Ub ? `["${Ub}"]: ` : "";
          Hb += this.debugRefIds(Ob.ref, ub, hb + 1, Bb, Lb)
        })), Hb
      }
      static debugRefIdEncodingOrder(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const hb = [],
          Bb = bb[pb];
        if ("changes" === ub) {
          let bb = Bb.root.changes?.next;
          for (; bb;) bb.changeTree && hb.push(bb.changeTree.ref[Lb]), bb = bb.next;
          return hb
        }
        const Ob = "allFilteredChanges" === ub,
          Gb = new Set,
          Ub = bb => {
            Gb.has(bb) || (Gb.add(bb), bb.isFiltered === Ob && hb.push(bb.ref[Lb]), bb.forEachChild(((bb, ub) => Ub(bb))))
          };
        return Ub(Bb), hb
      }
      static debugRefIdsFromDecoder(bb) {
        return this.debugRefIds(bb.state, !1, 0, bb)
      }
      static debugChanges(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = bb[pb],
          Bb = ub ? "allChanges" : "changes";
        let Gb = `${bb.constructor.name} (${bb[Lb]}) -> .${Bb}:\n`;
        return ub ? hb.forEachLive((bb => {
          Gb += `- [${bb}]: ADD (${JSON.stringify(hb.getValue(Number(bb),!0))})\n`
        })) : hb.forEach(((bb, ub) => {
          bb < 0 || !ub || (Gb += `- [${bb}]: ${Ob[ub]} (${JSON.stringify(hb.getValue(Number(bb),!1))})\n`)
        })), Gb
      }
    }
    Gb(zB);
    const gB = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class iB {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const bb = {};
        for (const ub in this.changeTrees) bb[ub] = this.changeTrees[ub].refCount;
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
        this.types.hasFilters && (bb.flags & xh || (bb.flags |= xh, this.pendingFilterRefresh.push(bb)))
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
        const ub = bb.id;
        for (const hb of this.streamTrees) hb._dropView(ub)
      }
      forEachActiveView(bb) {
        for (const [ub, hb] of this.activeViews) {
          const Bb = hb.deref();
          if (void 0 !== Bb) bb(Bb);
          else {
            this.activeViews.delete(ub);
            for (const bb of this.streamTrees) bb._dropView(ub)
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
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = bb, this.nextUniqueId = ub
      }
      add(bb) {
        const ub = bb.ref;
        void 0 === ub[Lb] && (gB.value = this.nextUniqueId++, Object.defineProperty(ub, Lb, gB));
        const hb = ub[Lb],
          Bb = void 0 === this.changeTrees[hb];
        Bb && (this.changeTrees[hb] = bb), bb.needsRestage && (bb.needsRestage = !1, bb.forEachLiveWithCtx(bb, hh));
        const Ob = Bb ? 0 : bb.refCount;
        return bb.refCount = Ob + 1, Ob > 0 && this.enqueueFilterRefresh(bb), Bb
      }
      remove(bb) {
        const ub = bb.refCount - 1;
        if (ub <= 0) {
          if (bb.root = void 0, delete this.changeTrees[bb.ref[Lb]], bb.isStreamCollection) {
            const ub = bb.ref;
            ub._unregister?.(), this.unregisterStream(ub)
          }
          this.removeFromQueue(bb), this.removeFromUnreliableQueue(bb), bb.refCount = 0, bb.needsRestage = !0, bb.forEachChild(((ub, hb) => {
            ub.removeParent(bb.ref) && (void 0 === ub.parentRef || ub.refCount > 0 ? this.remove(ub) : this.moveNextToParent(ub))
          }))
        } else bb.refCount = ub, this.enqueueFilterRefresh(bb), this.recursivelyMoveNextToParent(bb);
        return ub
      }
      recursivelyMoveNextToParent(bb) {
        this.moveNextToParent(bb), bb.forEachChild(((bb, ub) => this.recursivelyMoveNextToParent(bb)))
      }
      moveNextToParent(bb) {
        bb.changesNode && this._moveNextToParentInList(this.changes, bb, bb.changesNode, "changesNode"), bb.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, bb, bb.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(bb, ub, hb, Bb) {
        const Ob = ub.parent;
        if (!Ob || !Ob[pb]) return;
        const Gb = Ob[pb][Bb];
        Gb && Gb !== hb && (hb.position > Gb.position || (hb.prev ? hb.prev.next = hb.next : bb.next = hb.next, hb.next ? hb.next.prev = hb.prev : bb.tail = hb.prev, hb.prev = bb.tail, hb.next = void 0, bb.tail.next = hb, bb.tail = hb, hb.position = bb.nextPosition++))
      }
      enqueueChangeTree(bb) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.changesNode) || (bb.changesNode = this._appendToList(this.changes, bb))
      }
      enqueueUnreliable(bb) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.unreliableChangesNode) || (bb.unreliableChangesNode = this._appendToList(this.unreliableChanges, bb))
      }
      _appendToList(bb, ub) {
        const hb = this._nodePool;
        let Bb;
        return hb.length > 0 ? (Bb = hb.pop(), Bb.changeTree = ub, Bb.next = void 0, Bb.prev = void 0) : Bb = {
          changeTree: ub,
          next: void 0,
          prev: void 0,
          position: 0
        }, bb.next ? (Bb.prev = bb.tail, bb.tail.next = Bb, bb.tail = Bb) : (bb.nextPosition = 0, bb.next = Bb, bb.tail = Bb), Bb.position = bb.nextPosition++, Bb
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
      _removeNode(bb, ub, hb, Bb) {
        return !(!hb || hb.changeTree !== ub) && (hb.prev ? hb.prev.next = hb.next : bb.next = hb.next, hb.next ? hb.next.prev = hb.prev : bb.tail = hb.prev, ub[Bb] = void 0, this.releaseNode(hb), !0)
      }
    }

    function vB(bb, ub) {
      if (-1 === ub || ub >= bb.length) return !1;
      const hb = bb.length - 1;
      for (let Bb = ub; Bb < hb; Bb++) bb[Bb] = bb[Bb + 1];
      return bb.length = hb, !0
    }

    function tB(bb, ub, hb) {
      const Bb = ~hb,
        Ob = bb.changeTrees;
      for (const Gb in Ob) {
        const bb = Ob[Gb],
          hb = bb.visibleViews;
        void 0 !== hb && ub < hb.length && (hb[ub] &= Bb);
        const Ub = bb.subscribedViews;
        void 0 !== Ub && ub < Ub.length && (Ub[ub] &= Bb);
        const Lb = bb.tagViews;
        void 0 !== Lb && Lb.forEach((bb => {
          ub < bb.length && (bb[ub] &= Bb)
        }))
      }
    }
    const JB = new FinalizationRegistry((bb => {
      let {
        root: ub,
        id: hb,
        slot: Bb,
        bit: Ob
      } = bb;
      tB(ub, Bb, Ob), ub.activeViews.delete(hb);
      for (const Gb of ub.streamTrees) Gb._dropView(hb);
      ub.releaseViewId(hb)
    }));

    function eB(bb) {
      if (void 0 === bb) return "undefined";
      if (null === bb) return "null";
      const ub = typeof bb;
      return "string" === ub ? JSON.stringify(bb.length > 30 ? `${bb.slice(0,30)}\u2026` : bb) : "object" !== ub && "function" !== ub ? `${ub} ${String(bb)}` : Array.isArray(bb) ? `Array(${bb.length})` : bb.constructor?.name ?? "Object"
    }
    class NB {
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
        void 0 === this._root && (this._root = bb, this.id = bb.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), bb.registerView(this), JB.register(this, {
          root: bb,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), tB(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), JB.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(bb) {
        const ub = bb.visibleViews,
          hb = this._slot;
        return void 0 !== ub && hb < ub.length && 0 !== (ub[hb] & this._bit)
      }
      markVisible(bb) {
        const ub = this._slot;
        let hb = bb.visibleViews;
        for (void 0 === hb && (hb = bb.visibleViews = []); hb.length <= ub;) hb.push(0);
        hb[ub] |= this._bit
      }
      unmarkVisible(bb) {
        const ub = bb.visibleViews;
        if (void 0 === ub) return;
        const hb = this._slot;
        hb < ub.length && (ub[hb] &= ~this._bit)
      }
      isSubscribed(bb) {
        const ub = bb.subscribedViews,
          hb = this._slot;
        return void 0 !== ub && hb < ub.length && 0 !== (ub[hb] & this._bit)
      }
      _setSubscribed(bb) {
        const ub = this._slot;
        let hb = bb.subscribedViews;
        for (void 0 === hb && (hb = bb.subscribedViews = []); hb.length <= ub;) hb.push(0);
        hb[ub] |= this._bit
      }
      _clearSubscribed(bb) {
        const ub = bb.subscribedViews;
        if (void 0 === ub) return;
        const hb = this._slot;
        hb < ub.length && (ub[hb] &= ~this._bit)
      }
      hasTagOnTree(bb, ub) {
        const hb = bb.tagViews;
        if (void 0 === hb) return !1;
        const Bb = this._slot,
          Ob = this._bit;
        for (let Gb = ub; 0 !== Gb; Gb &= Gb - 1) {
          const bb = hb.get(Gb & -Gb);
          if (void 0 !== bb && Bb < bb.length && 0 !== (bb[Bb] & Ob)) return !0
        }
        return !1
      }
      addTag(bb, ub) {
        if (ub === XB) return;
        let hb = bb.tagViews;
        void 0 === hb && (hb = bb.tagViews = new Map);
        const Bb = this._slot,
          Ob = this._bit;
        for (let Gb = ub; Gb > 0; Gb &= Gb - 1) {
          const bb = Gb & -Gb;
          let ub = hb.get(bb);
          for (void 0 === ub && (ub = [], hb.set(bb, ub)); ub.length <= Bb;) ub.push(0);
          ub[Bb] |= Ob
        }
      }
      removeTag(bb, ub) {
        if (ub === XB) return;
        const hb = bb.tagViews;
        if (void 0 === hb) return;
        const Bb = this._slot,
          Ob = ~this._bit;
        for (let Gb = ub; Gb > 0; Gb &= Gb - 1) {
          const bb = hb.get(Gb & -Gb);
          void 0 !== bb && Bb < bb.length && (bb[Bb] &= Ob)
        }
      }
      removeAllTagsOnTree(bb) {
        const ub = bb.tagViews;
        if (void 0 === ub) return;
        const hb = this._slot,
          Bb = ~this._bit;
        ub.forEach((bb => {
          hb < bb.length && (bb[hb] &= Bb)
        }))
      }
      add(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XB,
          hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(bb, ub, hb, !1)
      }
      _addImmediate(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XB;
        this._add(bb, ub, !0, !0)
      }
      _add(bb, ub, hb, Bb) {
        const Gb = bb?.[pb];
        if (!Gb) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${eB(bb)}`), !1;
        const Ub = Gb.parent;
        if (!Ub && 0 !== bb[Lb]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Gb.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Gb.root && this._bindRoot(Gb.root);
        const Yb = Ub?.[pb];
        if (!Bb && Yb?.isStreamCollection) return vu(Ub, this.id, Gb.parentIndex), !0;
        const Sb = bb.constructor[Symbol.metadata],
          ab = this.isVisible(Gb);
        if (!this.iterable || !hb || ab && -1 !== this.items.indexOf(bb) || this.items.push(bb), this.markVisible(Gb), hb && Ub && this.addParentOf(Gb, ub), !Bb && Gb.isStreamCollection) return !0;
        if (ub === XB && Gb.isNew) return this._markSubtreeVisible(Gb, ub), !1;
        let Hb = this.changes.get(bb[Lb]);
        void 0 === Hb && (Hb = new Map, this.changes.set(bb[Lb], Hb));
        let wb = !1;
        const Zb = Gb.encDescriptor.tags;
        if (Gb.forEachChild(((bb, hb) => {
            const Bb = Zb[hb];
            if (void 0 !== Bb) {
              if (!(Bb === XB || ub !== XB && 0 !== (Bb & ub))) return
            }
            this.add(bb.ref, ub, !1) && (wb = !0)
          })), ub !== XB) {
          this.addTag(Gb, ub);
          const bb = Sb?.[gb];
          if (void 0 !== bb)
            for (let hb = ub; hb > 0; hb &= hb - 1) bb[hb & -hb]?.forEach((bb => {
              Gb.getChange(bb) !== Ob.DELETE && Hb.set(bb, Ob.ADD)
            }))
        }
        if ((ub === XB || !ab) && (!Gb.isNew || wb))
          if (Gb.isArray && "string" !== typeof Gb.refTarget[ob]) Gb.refTarget.items.length > 0 && (Hb.set(-1, Ob.ADD), wb = !0);
          else {
            const bb = Gb.encDescriptor.tags;
            Gb.forEachLive((hb => {
              const Bb = bb[hb];
              (void 0 === Bb || Bb === XB || ub !== XB && 0 !== (Bb & ub)) && (Hb.set(hb, Ob.ADD), wb = !0)
            }))
          } return wb
      }
      _markSubtreeVisible(bb, ub) {
        const hb = bb.encDescriptor.tags;
        bb.forEachChild(((bb, Bb) => {
          const Ob = hb[Bb];
          if (void 0 !== Ob) {
            if (!(Ob === XB || ub !== XB && 0 !== (Ob & ub))) return
          }
          bb.isNew ? (this.markVisible(bb), this._markSubtreeVisible(bb, ub)) : this._add(bb.ref, ub, !1, !1)
        }))
      }
      addParentOf(bb, ub) {
        const hb = bb.parent[pb],
          Bb = bb.parentIndex;
        this.isVisible(hb) || this.markVisible(hb);
        const Gb = hb.parent?.[pb];
        if (Gb && this.addParentOf(hb, ub), hb.hasFilteredFields && hb.getChange(Bb) !== Ob.DELETE) {
          let Gb = this.changes.get(hb.ref[Lb]);
          void 0 === Gb && (Gb = new Map, this.changes.set(hb.ref[Lb], Gb));
          const Ub = hb.encDescriptor.tags[Bb];
          void 0 !== Ub && Ub !== XB && 0 !== (Ub & ub) && this.addTag(hb, ub), Gb.set(hb.isArray ? bb : Bb, Ob.ADD)
        }
      }
      _touchAncestorsOf(bb) {
        let ub = bb.parent?.[pb];
        if (void 0 === ub) return;
        const hb = [];
        for (; void 0 !== ub;) {
          if (ub.hasFilteredFields) {
            const bb = ub.ref[Lb];
            if (this.changes.has(bb)) break;
            hb.push(ub)
          }
          ub = ub.parent?.[pb]
        }
        for (let Bb = hb.length - 1; Bb >= 0; Bb--) this.changes.set(hb[Bb].ref[Lb], new Map)
      }
      remove(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XB,
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = bb?.[pb];
        if (!Bb) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${eB(bb)}`), this;
        const Gb = Bb.parent?.[pb];
        if (Gb?.isStreamCollection) return this.unmarkVisible(Bb), this.iterable && !hb && vB(this.items, this.items.indexOf(bb)),
          function(bb, ub, hb, Bb, Gb) {
            const Ub = bb._stream;
            if (void 0 === Ub) return !1;
            const Lb = Ub.pendingByView.get(ub);
            if (Lb?.has(Bb)) return Lb.delete(Bb), !1;
            const Yb = Ub.sentByView.get(ub);
            if (Yb?.has(Bb)) {
              Yb.delete(Bb);
              let bb = Gb.get(hb);
              return void 0 === bb && (bb = new Map, Gb.set(hb, bb)), bb.set(Bb, Ob.DELETE), !0
            }
          }(Bb.parent, this.id, Bb.parent[Lb], Bb.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Bb), this;
        if (Bb.isStreamCollection) {
          this.unmarkVisible(Bb), this.iterable && !hb && vB(this.items, this.items.indexOf(bb));
          const ub = Bb.ref,
            Gb = ub._stream;
          if (void 0 !== Gb) {
            Gb.pendingByView.get(this.id)?.clear();
            const bb = Gb.sentByView.get(this.id);
            if (void 0 !== bb && bb.size > 0) {
              const hb = ub[Lb];
              let Bb = this.changes.get(hb);
              void 0 === Bb && (Bb = new Map, this.changes.set(hb, Bb));
              for (const ub of bb) Bb.set(ub, Ob.DELETE);
              bb.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Bb), this.iterable && !hb && vB(this.items, this.items.indexOf(bb));
        const Ub = Bb.ref,
          Yb = Ub.constructor[Symbol.metadata],
          Sb = Ub[Lb];
        this._touchAncestorsOf(Bb);
        let ab = this.changes.get(Sb);
        if (void 0 === ab && (ab = new Map, this.changes.set(Sb, ab)), ub === XB) {
          const bb = Bb.parent;
          if (bb && !fu.isValidInstance(bb) && Bb.isFiltered) {
            const ub = Gb.isArray ? Bb : Bb.parentIndex,
              hb = bb[Lb];
            let Ub = this.changes.get(hb);
            void 0 === Ub ? (Ub = new Map, this.changes.set(hb, Ub)) : Ub.get(ub) === Ob.ADD && this._dropPendingEntries(Bb), Ub.set(ub, Ob.DELETE), this._recursiveDeleteVisibleChangeTree(Bb)
          } else Yb?.[zb]?.forEach((bb => this._removeViewField(Bb, ab, bb)))
        } else {
          const bb = Yb?.[gb];
          if (void 0 !== bb)
            for (let hb = ub; hb > 0; hb &= hb - 1) bb[hb & -hb]?.forEach((bb => this._removeViewField(Bb, ab, bb)))
        }
        return void 0 === ub ? this.removeAllTagsOnTree(Bb) : this.removeTag(Bb, ub), this
      }
      has(bb) {
        return this.isVisible(bb[pb])
      }
      hasTag(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XB;
        return this.hasTagOnTree(bb[pb], ub)
      }
      subscribe(bb, ub) {
        const hb = bb?.[pb];
        if (!hb) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${eB(bb)}`), this;
        if (void 0 === this._root && void 0 !== hb.root && this._bindRoot(hb.root), void 0 !== ub)
          if (hb.isStreamCollection) {
            const hb = Du(bb);
            null === ub ? hb.priorityByView?.delete(this.id) : (hb.priorityByView ??= new Map).set(this.id, ub)
          } else {
            const ub = bb?.constructor?.name ?? "collection",
              Bb = hb.parent;
            if (void 0 === Bb) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${ub} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const bb = Bb?.constructor?.[Symbol.metadata]?.[hb.parentIndex]?.name,
                Ob = bb ? `${Bb.constructor.name}#${bb}` : ub;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Ob} is a ${ub}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(hb)) return this;
        const Bb = void 0 !== hb.parent && !this.isVisible(hb);
        if (Bb ? (this.addParentOf(hb, XB), this._add(bb, XB, !1, !1)) : this.markVisible(hb), this._setSubscribed(hb), hb.isStreamCollection) {
          const ub = bb;
          hb.forEachChild(((bb, hb) => {
            vu(ub, this.id, hb)
          }))
        } else Bb || hb.forEachChild((bb => {
          this.markVisible(bb)
        }));
        return this
      }
      unsubscribe(bb) {
        const ub = bb?.[pb];
        if (!ub) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${eB(bb)}`), this;
        if (!this.isSubscribed(ub)) return this;
        this._clearSubscribed(ub);
        const hb = ub.ref[Lb];
        if (ub.isStreamCollection) {
          const ub = bb._stream;
          if (void 0 !== ub) {
            ub.pendingByView.get(this.id)?.clear();
            const bb = ub.sentByView.get(this.id);
            if (void 0 !== bb && bb.size > 0) {
              let ub = this.changes.get(hb);
              void 0 === ub && (ub = new Map, this.changes.set(hb, ub));
              for (const hb of bb) ub.set(hb, Ob.DELETE);
              bb.clear()
            }
          }
        } else {
          const bb = ub.isArray;
          let Bb = this.changes.get(hb);
          ub.forEachChild(((ub, Gb) => {
            void 0 === Bb && (Bb = new Map, this.changes.set(hb, Bb)), Bb.set(bb ? ub : Gb, Ob.DELETE), this.unmarkVisible(ub)
          }))
        }
        return this.unmarkVisible(ub), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let bb = 0, ub = this.items.length; bb < ub; bb++) this.remove(this.items[bb], XB, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(bb) {
        let ub = this.isVisible(bb);
        if (!ub && bb.isVisibilitySharedWithParent)
          if (this.isVisible(bb.parent[pb])) this.markVisible(bb), ub = !0;
          else
            for (let hb = bb.extraParents; void 0 !== hb; hb = hb.next) {
              const Bb = hb.ref[pb];
              if (Bb.isFiltered && this.isVisible(Bb)) {
                this.markVisible(bb), ub = !0;
                break
              }
            }
        return ub
      }
      _recursiveDeleteVisibleChangeTree(bb) {
        bb.forEachChild((bb => {
          this.unmarkVisible(bb), this._recursiveDeleteVisibleChangeTree(bb)
        }))
      }
      _dropPendingEntries(bb) {
        this.changes.delete(bb.ref[Lb]), bb.forEachChild((bb => this._dropPendingEntries(bb)))
      }
      _removeViewField(bb, ub, hb) {
        const Bb = ub.get(hb) === Ob.ADD;
        ub.set(hb, Ob.DELETE);
        const Gb = bb.ref[bb.encDescriptor.names[hb]],
          Ub = Gb?.[pb];
        Ub && (this.unmarkVisible(Ub), this._recursiveDeleteVisibleChangeTree(Ub), Bb && this._dropPendingEntries(Ub))
      }
    }

    function sB(bb) {
      bb.structSwitchEmitted || (bb.shouldEmitSwitch && (bb.buffer[bb.it.offset++] = 255, uu.number(bb.buffer, bb.ref[Lb], bb.it)), bb.structSwitchEmitted = !0)
    }

    function MB(bb, ub) {
      PB(bb, ub, Ob.ADD)
    }

    function mB(bb, ub) {
      if (ub._fullSyncGen === bb.gen) return;
      ub._fullSyncGen = bb.gen;
      if (!bb.hasView || bb.view.isChangeTreeVisible(ub)) {
        const hb = ub.encDescriptor;
        bb.changeTree = ub, bb.ref = ub.ref, bb.encoder = hb.encoder, bb.filter = hb.filter, bb.metadata = hb.metadata, bb.treeIsFiltered = ub.isFiltered, bb.isSchema = hb.isSchema, bb.filterBitmask = hb.filterBitmask, bb.tags = hb.tags, bb.structSwitchEmitted = !1, bb.shouldEmitSwitch = bb.hasView || bb.it.offset > bb.initialOffset || ub !== bb.rootChangeTree, ub.isArray && ub.collDirty.size > 0 && (ub.flags |= 512), Oh(ub, bb, MB)
      }
      Ah(ub, bb, IB)
    }

    function IB(bb, ub, hb) {
      mB(bb, ub)
    }

    function PB(bb, ub, hb) {
      if (ub < 0) {
        if (bb.treeIsFiltered !== bb.emitFiltered) return;
        return sB(bb), void(bb.buffer[bb.it.offset++] = 255 & Math.abs(ub))
      }
      if ((bb.isSchema ? bb.treeIsFiltered || (ub < 32 ? 0 !== (bb.filterBitmask & 1 << ub) : void 0 !== bb.tags[ub]) : bb.treeIsFiltered) !== bb.emitFiltered) return;
      const Bb = bb.isEncodeAll ? Ob.ADD : hb;
      void 0 !== Bb && (void 0 === bb.filter || bb.filter(bb.ref, ub, bb.view)) && (sB(bb), bb.encoder(bb.self, bb.buffer, bb.changeTree, ub, Bb, bb.it, bb.isEncodeAll, bb.hasView, bb.metadata))
    }

    function qB(bb, ub) {
      const hb = new Uint8Array(bb.length + ub.length);
      return hb.set(bb, 0), hb.set(ub, bb.length), hb
    }
    class EB {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(EB.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(bb, ub) {
        this.context = Iu.cache(bb.constructor), this.root = ub ?? new iB(this.context), this.setState(bb)
      }
      setState(bb) {
        this.state = bb, this.state[pb].setRoot(this.root)
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
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.offset;
        return this._encodeChannel(bb, ub, hb, Bb, !1)
      }
      encodeUnreliable() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.offset;
        return this._encodeChannel(bb, ub, hb, Bb, !0)
      }
      _encodeChannel(bb, ub, hb, Bb, Ob) {
        this.root.pendingFilterRefresh.length > 0 && Uh(this.root);
        const Gb = void 0 !== ub,
          Ub = this.state[pb],
          Lb = this._encodeCtx;
        Lb.self = this, Lb.buffer = hb, Lb.it = bb, Lb.view = ub, Lb.isEncodeAll = !1, Lb.hasView = Gb, Lb.emitFiltered = Gb;
        let Yb = Ob ? this.root.unreliableChanges : this.root.changes;
        for (; Yb = Yb.next;) {
          const hb = Yb.changeTree;
          if (Gb && !ub.isChangeTreeVisible(hb)) continue;
          const Sb = Ob ? hb.unreliableRecorder : hb;
          if (!Sb || !Sb.has()) continue;
          const ab = hb.encDescriptor;
          Lb.changeTree = hb, Lb.ref = hb.ref, Lb.encoder = ab.encoder, Lb.filter = ab.filter, Lb.metadata = ab.metadata, Lb.treeIsFiltered = hb.isFiltered, Lb.isSchema = ab.isSchema, Lb.filterBitmask = ab.filterBitmask, Lb.tags = ab.tags, Lb.structSwitchEmitted = !1, Lb.isRootTree = hb === Ub, Lb.shouldEmitSwitch = Gb || bb.offset > Bb || !Lb.isRootTree, Sb.forEachWithCtx(Lb, PB)
        }
        return Ob || Gb || !this._isStreamBroadcastMode || this._emitStreamBroadcast(hb, bb), bb.offset > hb.byteLength ? (hb = this._resizeBuffer(hb, bb.offset), bb.offset = Bb, this._encodeChannel(bb, ub, hb, Bb, Ob)) : hb.subarray(0, bb.offset)
      }
      encodeFullSync(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.offset;
        this.root.pendingFilterRefresh.length > 0 && Uh(this.root);
        const Gb = void 0 !== Bb,
          Ub = this.state[pb],
          Lb = this._encodeCtx;
        return Lb.self = this, Lb.buffer = ub, Lb.it = bb, Lb.view = Bb, Lb.isEncodeAll = !0, Lb.hasView = Gb, Lb.emitFiltered = hb, Lb.gen = ++this._fullSyncGen, Lb.initialOffset = Ob, Lb.rootChangeTree = Ub, mB(Lb, Ub), bb.offset > ub.byteLength ? (ub = this._resizeBuffer(ub, bb.offset), bb.offset = Ob, this.encodeFullSync(bb, ub, hb, Bb, Ob)) : ub.subarray(0, bb.offset)
      }
      _resizeBuffer(bb, ub) {
        const hb = Math.ceil(ub / EB.BUFFER_SIZE) * EB.BUFFER_SIZE,
          Bb = new Uint8Array(hb);
        return Bb.set(bb), bb === this.sharedBuffer && (this.sharedBuffer = Bb), Bb
      }
      encodeAll() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(bb, ub, !1)
      }
      encodeAllView(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Ob = hb.offset;
        return Bb = this.encodeFullSync(hb, Bb, !0, bb, Ob), qB(Bb.subarray(0, ub), Bb.subarray(Ob, hb.offset))
      }
      ensureCapacity(bb, ub) {
        if (ub + EB.BUFFER_SIZE <= bb.byteLength) return bb;
        const hb = Math.ceil((ub + EB.BUFFER_SIZE) / EB.BUFFER_SIZE) * EB.BUFFER_SIZE,
          Bb = new Uint8Array(hb);
        return Bb.set(bb.subarray(0, ub)), bb === this.sharedBuffer && (this.sharedBuffer = Bb), Bb
      }
      encodeView(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Gb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Ub = hb.offset;
        this._emitStreamPriority(bb);
        for (const Yb of bb.changes.keys()) {
          const ub = bb.changes.get(Yb),
            Gb = this.root.changeTrees[Yb];
          if (void 0 === Gb) {
            bb.changes.delete(Yb);
            continue
          }
          if (0 === ub.size) continue;
          const Ub = Gb.encDescriptor,
            Sb = Ub.encoder,
            ab = Ub.metadata,
            Hb = Gb.ref,
            Zb = Gb.refTarget;
          Bb = this.ensureCapacity(Bb, hb.offset), Bb[hb.offset++] = 255, uu.number(Bb, Hb[Lb], hb);
          for (const [Yb, Xb] of ub) {
            let ub;
            if (-1 === Yb) {
              const bb = Zb.tmpItems,
                ub = Zb.deletedIndexes;
              for (let Ub = 0; Ub < bb.length; Ub++) void 0 !== bb[Ub] && !0 !== ub[Ub] && Sb(this, Bb, Gb, Ub, Ob.ADD, hb, !1, !0, ab);
              continue
            }
            if ("number" === typeof Yb) ub = Yb;
            else {
              const hb = Yb.indexInParent(Hb);
              if (void 0 === hb) continue;
              if (ub = hb, Xb === Ob.ADD && Gb.getChange(ub) === Ob.DELETE) {
                bb.changes.delete(Yb.ref[Lb]);
                continue
              }
            }
            Sb(this, Bb, Gb, ub, void 0 !== Zb[wb](ub) && Xb || Ob.DELETE, hb, !1, !0, ab)
          }
        }
        return bb.changes.clear(), Bb = this.encode(hb, bb, Bb), Gb ? qB(Bb.subarray(0, ub), Bb.subarray(Ub, hb.offset)) : Bb.subarray(Ub, hb.offset)
      }
      encodeUnreliableView(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Ob = hb.offset;
        return Bb = this.encodeUnreliable(hb, bb, Bb, Ob), qB(Bb.subarray(0, ub), Bb.subarray(Ob, hb.offset))
      }
      _emitStreamBroadcast(bb, ub) {
        const hb = this.root.streamTrees;
        for (const Bb of hb) {
          const hb = Bb,
            Gb = hb[pb],
            Ub = hb[Lb];
          if (void 0 === Ub) continue;
          const Yb = hb._stream,
            Sb = Yb.broadcastDeletes,
            ab = Yb.broadcastPending,
            Hb = Yb.sentBroadcast,
            Zb = Sb.size > 0,
            Xb = ab.size > 0,
            ob = Gb.encDescriptor,
            Ab = ob.encoder,
            lb = ob.metadata;
          if (Zb || Xb) {
            if (bb[ub.offset++] = 255, uu.number(bb, Ub, ub), Zb) {
              for (const hb of Sb) Ab(this, bb, Gb, hb, Ob.DELETE, ub, !1, !1, lb);
              Sb.clear()
            }
            const Bb = Yb.maxPerTick,
              Xb = [];
            let ob = 0;
            const Kb = [];
            for (const Ub of ab) {
              if (ob >= Bb) break;
              const Lb = hb[wb](Ub);
              void 0 !== Lb ? (Ab(this, bb, Gb, Ub, Ob.ADD, ub, !1, !1, lb), Hb.add(Ub), Xb.push(Lb), Kb.push(Ub), ob++) : Kb.push(Ub)
            }
            for (const bb of Kb) ab.delete(bb);
            for (const hb of Xb) {
              const Bb = hb[pb];
              if (void 0 === Bb) continue;
              const Gb = hb[Lb];
              if (void 0 === Gb) continue;
              bb[ub.offset++] = 255, uu.number(bb, Gb, ub);
              const Ub = Bb.encDescriptor,
                Yb = Ub.encoder,
                Sb = Ub.metadata;
              Bb.forEachLive((hb => {
                fu.hasUnreliableAtIndex(Sb, hb) || Yb(this, bb, Bb, hb, Ob.ADD, ub, !1, !1, Sb)
              }))
            }
          }
          for (const Bb of Hb) {
            const Ob = hb[wb](Bb);
            if (void 0 === Ob) continue;
            const Gb = Ob[pb];
            if (void 0 === Gb || !Gb.has()) continue;
            const Ub = Ob[Lb];
            if (void 0 === Ub) continue;
            bb[ub.offset++] = 255, uu.number(bb, Ub, ub);
            const Yb = Gb.encDescriptor,
              Sb = Yb.encoder,
              ab = Yb.metadata;
            Gb.forEach(((hb, Bb) => {
              hb < 0 || fu.hasUnreliableAtIndex(ab, hb) || Sb(this, bb, Gb, hb, Bb, ub, !1, !1, ab)
            }))
          }
        }
      }
      _emitStreamPriority(bb) {
        const ub = this.root.streamTrees;
        if (0 === ub.size) return;
        const hb = bb.id;
        for (const Bb of ub) {
          const ub = Bb,
            Gb = ub._stream,
            Ub = Gb.pendingByView.get(hb);
          if (void 0 === Ub || 0 === Ub.size) continue;
          const Yb = Gb.priorityByView?.get(hb),
            Sb = void 0 !== Yb,
            ab = Gb.priority,
            Hb = Gb.maxPerTick,
            Zb = [],
            Xb = [];
          if (Sb || void 0 !== ab) {
            const hb = [],
              Bb = [];
            let Ob = 0;
            for (const Gb of Ub) {
              const Ub = ub[wb](Gb);
              if (void 0 === Ub) {
                Xb.push(Gb);
                continue
              }
              const Lb = Sb ? Yb(Ub) : ab(bb, Ub);
              if (Ob < Hb) {
                let bb = Ob++;
                for (; bb > 0 && Bb[bb - 1] < Lb;) Bb[bb] = Bb[bb - 1], hb[bb] = hb[bb - 1], bb--;
                Bb[bb] = Lb, hb[bb] = Gb
              } else if (Lb > Bb[Hb - 1]) {
                let bb = Hb - 1;
                for (; bb > 0 && Bb[bb - 1] < Lb;) Bb[bb] = Bb[bb - 1], hb[bb] = hb[bb - 1], bb--;
                Bb[bb] = Lb, hb[bb] = Gb
              }
            }
            for (let bb = 0; bb < Ob; bb++) Zb.push(hb[bb])
          } else
            for (const bb of Ub) {
              if (Zb.length >= Hb) break;
              Zb.push(bb)
            }
          for (const bb of Xb) Ub.delete(bb);
          const ob = Zb.length;
          let Ab = Gb.sentByView.get(hb);
          void 0 === Ab && (Ab = new Set, Gb.sentByView.set(hb, Ab));
          for (let hb = 0; hb < ob; hb++) {
            const Bb = Zb[hb],
              Gb = ub[wb](Bb);
            if (void 0 === Gb) {
              Ub.delete(Bb);
              continue
            }
            bb._addImmediate(Gb);
            const Yb = Gb[pb];
            if (void 0 !== Yb) {
              const ub = Gb[Lb];
              let hb = bb.changes.get(ub);
              void 0 === hb && (hb = new Map, bb.changes.set(ub, hb));
              const Bb = Yb.metadata;
              Yb.forEachLive((bb => {
                fu.hasUnreliableAtIndex(Bb, bb) || hb.set(bb, Ob.ADD)
              }))
            }
            Ub.delete(Bb), Ab.add(Bb)
          }
        }
      }
      discardChanges() {
        const bb = this.root.changes;
        let ub = bb.next;
        const hb = this.root;
        for (; ub;) {
          const bb = ub.next;
          ub.changeTree.endEncode(), hb.releaseNode(ub), ub = bb
        }
        bb.next = void 0, bb.tail = void 0
      }
      discardUnreliableChanges() {
        const bb = this.root.unreliableChanges;
        let ub = bb.next;
        const hb = this.root;
        for (; ub;) {
          const bb = ub.next;
          ub.changeTree.endEncodeUnreliable(), hb.releaseNode(ub), ub = bb
        }
        bb.next = void 0, bb.tail = void 0
      }
      tryEncodeTypeId(bb, ub, hb, Bb) {
        const Ob = this.context.getTypeId(ub),
          Gb = this.context.getTypeId(hb);
        void 0 !== Gb ? Ob !== Gb && (bb[Bb.offset++] = 213, uu.number(bb, Gb, Bb)) : console.warn(`@colyseus/schema WARNING: Class "${hb.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const ub = 0 === bb.activeViews.size;
        for (const hb of bb.streamTrees)
          if (ub ? iu(hb) : gu(hb, bb)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class yB extends Error {
      constructor(bb) {
        super(bb), this.name = "DecodingWarning"
      }
    }
    const VB = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class FB {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(bb, ub), void 0 === ub[Lb] ? (VB.value = bb, Object.defineProperty(ub, Lb, VB)) : ub[Lb] !== bb && (ub[Lb] = bb), hb && (this.refCount[bb] = (this.refCount[bb] || 0) + 1), this.deletedRefs.has(bb) && this.deletedRefs.delete(bb)
      }
      removeRef(bb) {
        const ub = this.refCount[bb];
        if (void 0 !== ub)
          if (0 !== ub)(this.refCount[bb] = ub - 1) <= 0 && this.deletedRefs.add(bb);
          else try {
            const ub = this.refs.get(bb);
            throw new yB(`trying to remove refId '${bb}' with 0 refCount (${ub.constructor.name}: ${JSON.stringify(ub)})`)
          } catch (GO) {
            console.warn(GO)
          } else try {
            throw new yB("trying to remove refId that doesn't exist: " + bb)
          } catch (GO) {
            console.warn(GO)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((bb => {
          if (this.refCount[bb] > 0) return;
          const ub = this.refs.get(bb),
            hb = ub.constructor[Symbol.metadata];
          if (null != hb)
            for (const Bb in hb) {
              const bb = ub[hb[Bb].name];
              if ("object" === typeof bb && bb) {
                const ub = bb[Lb];
                void 0 === ub || this.deletedRefs.has(ub) || this.removeRef(ub)
              }
            } else "function" === typeof ub[ob] && Array.from(ub.values()).forEach((bb => {
              const ub = bb[Lb];
              void 0 === ub || this.deletedRefs.has(ub) || this.removeRef(ub)
            }));
          this.refs.delete(bb), delete this.refCount[bb], delete this.callbacks[bb]
        })), this.deletedRefs.clear()
      }
      addCallback(bb, ub, hb) {
        if (void 0 === bb) {
          const bb = "number" === typeof ub ? Ob[ub] : ub;
          throw new Error(`Can't addCallback on '${bb}' (refId is undefined)`)
        }
        return this.callbacks[bb] || (this.callbacks[bb] = {}), this.callbacks[bb][ub] || (this.callbacks[bb][ub] = []), this.callbacks[bb][ub].push(hb), () => this.removeCallback(bb, ub, hb)
      }
      removeCallback(bb, ub, hb) {
        const Bb = this.callbacks?.[bb]?.[ub]?.indexOf(hb);
        void 0 !== Bb && -1 !== Bb && vB(this.callbacks[bb][ub], Bb)
      }
    }
    class fB {
      context;
      state;
      root;
      currentRefId = 0;
      qJ;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(bb, ub) {
        this.setState(bb), this.context = ub || new Iu(bb.constructor)
      }
      setState(bb) {
        this.state = bb, this.root = new FB, this.root.addRef(0, bb)
      }
      decode(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Ob = void 0 !== this.qJ ? [] : null,
          Gb = this.root,
          Ub = bb.byteLength;
        let Lb = hb.constructor[ab];
        for (this.currentRefId = 0; ub.offset < Ub;) {
          if (bb[ub.offset] == Bb) {
            ub.offset++, hb[Wb]?.();
            const Bb = Ku.number(bb, ub),
              Ob = Gb.refs.get(Bb);
            Ob ? (hb = Ob, Lb = hb.constructor[ab], this.currentRefId = Bb) : (console.error(`"refId" not found: ${Bb}`, {
              previousRef: hb,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(bb, ub, Ub));
            continue
          } - 1 !== Lb(this, bb, ub, hb, Ob) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(bb, ub, Ub))
        }
        return hb[Wb]?.(), null !== this.resyncVisited && function(bb, ub) {
          bb.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Ih(bb, bb.state, new Set, ub)
        }(this, Ob), null !== Ob && this.qJ?.(Ob), Gb.garbageCollectDeletedRefs(), Ob
      }
      decodeResync(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(bb, ub)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(bb, ub, hb) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Ob = {
          offset: ub.offset
        };
        for (; ub.offset < hb && (bb[ub.offset] !== Bb || (Ob.offset = ub.offset + 1, !this.root.refs.has(Ku.number(bb, Ob))));) ub.offset++
      }
      getInstanceType(bb, ub, hb) {
        let Bb;
        if (213 === bb[ub.offset]) {
          ub.offset++;
          const hb = Ku.number(bb, ub);
          Bb = this.context.get(hb)
        }
        return Bb || hb
      }
      createInstanceOfType(bb) {
        return bb.initializeForDecoder()
      }
      removeChildRefs(bb, ub) {
        const hb = "string" !== typeof bb[ob],
          Bb = bb[Lb];
        bb.forEach(((Gb, Ub) => {
          ub?.push({
            ref: bb,
            refId: Bb,
            op: Ob.DELETE,
            field: Ub,
            value: void 0,
            previousValue: Gb
          }), hb && this.root.removeRef(Gb[Lb])
        }))
      }
    }
    const kB = DB({
        min: ZB.float64(),
        max: ZB.float64(),
        bits: ZB.uint8(),
        mode: ZB.uint8()
      }, "QuantizedDescriptor"),
      TB = DB({
        name: ZB.string(),
        type: ZB.string(),
        referencedType: ZB.number(),
        childPrimitive: ZB.string(),
        quantized: ZB.ref(kB).optional()
      }, "ReflectionField"),
      cB = DB({
        id: ZB.number(),
        extendsId: ZB.number(),
        fields: ZB.array(TB)
      }, "ReflectionType"),
      QB = DB({
        types: ZB.array(cB),
        rootType: ZB.number()
      }, "Reflection");

    function RB(bb) {
      const ub = bb.root,
        hb = ub.callbacks,
        Bb = new WeakMap;
      let Gb;

      function Ub(bb, hb) {
        let Sb = hb.instance?.constructor[Symbol.metadata] || bb,
          ab = hb.instance && "function" === typeof hb.instance.forEach || bb && !zB.is(bb);
        if (Sb && !ab) {
          const bb = function(bb, Ob, Ub, Yb) {
            return Yb && void 0 !== hb.instance[Ob] && !Bb.has(Gb) && Ub(hb.instance[Ob], void 0), ub.addCallback(bb[Lb], Ob, Ub)
          };
          return new Proxy({
            listen: function(ub, Ob) {
              let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (hb.instance) return bb(hb.instance, ub, Ob, Ub);
              {
                let Lb = () => {};
                return hb.onInstanceAvailable(((hb, Yb) => {
                  Lb = bb(hb, ub, Ob, Ub && Yb && !Bb.has(Gb))
                })), () => Lb()
              }
            },
            onChange: function(bb) {
              return ub.addCallback(hb.instance[Lb], Ob.REPLACE, bb)
            },
            bindTo: function(bb, Bb) {
              return Bb || (Bb = Object.keys(Sb).map((bb => Sb[bb].name))), ub.addCallback(hb.instance[Lb], Ob.REPLACE, (() => {
                Bb.forEach((ub => bb[ub] = hb.instance[ub]))
              }))
            }
          }, {
            get(bb, ub) {
              const Bb = Sb[Sb[ub]];
              if (Bb) {
                const bb = hb.instance?.[ub],
                  Ob = Bb => {
                    const Ob = Yb(hb.instance).listen(ub, ((bb, ub) => {
                      Bb(bb, !1), Ob?.()
                    }), !1);
                    void 0 !== bb?.[Lb] && Bb(bb, !0)
                  };
                return Ub(Bb.type, {
                  instance: void 0 !== bb?.[Lb] && bb,
                  parentInstance: hb.instance,
                  onInstanceAvailable: Ob
                })
              }
              return bb[ub]
            },
            has: (bb, ub) => void 0 !== Sb[ub],
            set(bb, ub, hb) {
              throw new Error("not allowed")
            },
            deleteProperty(bb, ub) {
              throw new Error("not allowed")
            }
          })
        } {
          const bb = function(bb, hb, Ub) {
              return Ub && bb.forEach(((bb, ub) => hb(bb, ub))), ub.addCallback(bb[Lb], Ob.ADD, ((bb, ub) => {
                Bb.set(hb, !0), Gb = hb, hb(bb, ub), Bb.delete(hb), Gb = void 0
              }))
            },
            Ub = function(bb, hb) {
              return ub.addCallback(bb[Lb], Ob.DELETE, hb)
            },
            Yb = function(bb, hb) {
              return ub.addCallback(bb[Lb], Ob.REPLACE, hb)
            };
          return new Proxy({
            UW: function(ub) {
              let Ob = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (hb.instance) return bb(hb.instance, ub, Ob && !Bb.has(Gb));
              if (hb.onInstanceAvailable) {
                let Ub = () => {};
                return hb.onInstanceAvailable(((hb, Lb) => {
                  Ub = bb(hb, ub, Ob && Lb && !Bb.has(Gb))
                })), () => Ub()
              }
            },
            gJ: function(bb) {
              if (hb.instance) return Ub(hb.instance, bb);
              if (hb.onInstanceAvailable) {
                let ub = () => {};
                return hb.onInstanceAvailable((hb => {
                  ub = Ub(hb, bb)
                })), () => ub()
              }
            },
            onChange: function(bb) {
              if (hb.instance) return Yb(hb.instance, bb);
              if (hb.onInstanceAvailable) {
                let ub = () => {};
                return hb.onInstanceAvailable((hb => {
                  ub = Yb(hb, bb)
                })), () => ub()
              }
            }
          }, {
            get(bb, ub) {
              if (!bb[ub]) throw new Error(`Can't access '${ub}' through callback proxy. access the instance directly.`);
              return bb[ub]
            },
            has: (bb, ub) => void 0 !== bb[ub],
            set(bb, ub, hb) {
              throw new Error("not allowed")
            },
            deleteProperty(bb, ub) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Yb(bb) {
        return Ub(void 0, {
          instance: bb
        })
      }
      return bb.qJ = function(bb) {
        const ub = new Set;
        for (let Bb = 0, Gb = bb.length; Bb < Gb; Bb++) {
          const Gb = bb[Bb],
            Ub = Gb.refId,
            Yb = Gb.ref,
            Sb = hb[Ub];
          if (Sb) {
            if ((Gb.op & Ob.DELETE) === Ob.DELETE && zB.isSchema(Gb.previousValue)) {
              const bb = hb[Gb.previousValue[Lb]]?.[Ob.DELETE];
              for (let ub = bb?.length - 1; ub >= 0; ub--) bb[ub]()
            }
            if (zB.isSchema(Yb)) {
              if (!ub.has(Ub)) {
                const bb = Sb?.[Ob.REPLACE];
                for (let ub = bb?.length - 1; ub >= 0; ub--) bb[ub]()
              }
              if (Sb.hasOwnProperty(Gb.field)) {
                const bb = Sb[Gb.field];
                for (let ub = bb?.length - 1; ub >= 0; ub--) bb[ub](Gb.value, Gb.previousValue)
              }
            } else {
              if ((Gb.op & Ob.DELETE) === Ob.DELETE) {
                if (void 0 !== Gb.previousValue) {
                  const bb = Sb[Ob.DELETE];
                  for (let ub = bb?.length - 1; ub >= 0; ub--) bb[ub](Gb.previousValue, Gb.dynamicIndex ?? Gb.field)
                }
                if ((Gb.op & Ob.ADD) === Ob.ADD) {
                  const bb = Sb[Ob.ADD];
                  for (let ub = bb?.length - 1; ub >= 0; ub--) bb[ub](Gb.value, Gb.dynamicIndex ?? Gb.field)
                }
              } else if ((Gb.op & Ob.ADD) === Ob.ADD && Gb.previousValue !== Gb.value) {
                const bb = Sb[Ob.ADD];
                for (let ub = bb?.length - 1; ub >= 0; ub--) bb[ub](Gb.value, Gb.dynamicIndex ?? Gb.field)
              }
              if (Gb.value !== Gb.previousValue && (void 0 !== Gb.value || void 0 !== Gb.previousValue)) {
                const bb = Sb[Ob.REPLACE];
                for (let ub = bb?.length - 1; ub >= 0; ub--) bb[ub](Gb.value, Gb.dynamicIndex ?? Gb.field)
              }
            }
            ub.add(Ub)
          }
        }
      }, Yb
    }

    function bO(bb, ub) {
      bb.qJ = ub
    }
    QB.encode = function(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const hb = bb.context,
        Bb = new QB,
        Ob = new EB(Bb),
        Gb = hb.schemas.get(bb.state.constructor);
      Gb > 0 && (Bb.rootType = Gb);
      const Ub = new Set,
        Lb = {},
        Yb = bb => {
          if (void 0 === bb.extendsId || Ub.has(bb.extendsId)) {
            Ub.add(bb.id), Bb.types.push(bb);
            const ub = Lb[bb.id];
            void 0 !== ub && (delete Lb[bb.id], ub.forEach((bb => Yb(bb))))
          } else void 0 === Lb[bb.extendsId] && (Lb[bb.extendsId] = []), Lb[bb.extendsId].push(bb)
        };
      hb.schemas.forEach(((bb, ub) => {
        const Bb = new cB;
        Bb.id = Number(bb);
        const Ob = Object.getPrototypeOf(ub);
        Ob !== zB && (Bb.extendsId = hb.schemas.get(Ob));
        const Gb = ub[Symbol.metadata];
        if (Gb !== Ob[Symbol.metadata]) {
          const bb = Gb[Db] ?? -1;
          for (let ub = 0; ub <= bb; ub++) {
            const bb = Gb[ub];
            if (void 0 === bb) continue;
            const Ob = bb.name;
            if (!Object.prototype.hasOwnProperty.call(Gb, Ob)) continue;
            const Ub = new TB;
            let Lb;
            if (Ub.name = Ob, "string" === typeof bb.type) Lb = bb.type;
            else if (Nu(bb.type)) {
              const ub = bb.type.quantized;
              Lb = "quantized";
              const hb = new kB;
              hb.min = ub.min, hb.max = ub.max, hb.bits = ub.bits, hb.mode = ub.wrap ? 1 : 0, Ub.quantized = hb
            } else {
              let ub;
              zB.is(bb.type) ? (Lb = "ref", ub = bb.type) : (Lb = Object.keys(bb.type)[0], "string" === typeof bb.type[Lb] ? Ub.childPrimitive = bb.type[Lb] : ub = bb.type[Lb]), Ub.referencedType = ub ? hb.getTypeId(ub) : -1
            }
            Ub.type = Lb, Bb.fields.push(Ub)
          }
        }
        Yb(Bb)
      }));
      for (const Sb in Lb) Lb[Sb].forEach((bb => Bb.types.push(bb)));
      return Ob.encodeAll(ub).slice(0, ub.offset)
    }, QB.decode = function(bb, ub) {
      const hb = new QB;
      new fB(hb).decode(bb, ub);
      const Bb = new Iu;
      hb.types.forEach((bb => {
        const ub = Bb.get(bb.extendsId) ?? zB,
          hb = class extends ub {};
        Iu.register(hb), Bb.add(hb, bb.id)
      }), {});
      hb.types.forEach((bb => {
        const ub = Bb.get(bb.id),
          Ob = fu.initialize(ub),
          Gb = [];
        let Ub = bb;
        do {
          Gb.push(Ub), Ub = hb.types.find((bb => bb.id === Ub.extendsId))
        } while (Ub);
        let Lb = 0;
        Gb.reverse().forEach((bb => {
          ((bb, ub, hb) => {
            ub.fields.forEach(((ub, Ob) => {
              const Gb = hb + Ob;
              if (void 0 !== ub.quantized) {
                const hb = ub.quantized;
                fu.addField(bb, Gb, ub.name, {
                  quantized: eu({
                    min: hb.min,
                    max: hb.max,
                    bits: hb.bits,
                    mode: 1 === hb.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== ub.referencedType) {
                const hb = ub.type,
                  Ob = Bb.get(ub.referencedType) ?? ub.childPrimitive;
                "ref" === hb ? fu.addField(bb, Gb, ub.name, Ob) : fu.addField(bb, Gb, ub.name, {
                  [hb]: Ob
                })
              } else fu.addField(bb, Gb, ub.name, ub.type)
            }))
          })(Ob, bb, Lb), Lb += bb.fields.length
        }))
      }));
      const Ob = new(Bb.get(hb.rootType || 0));
      return new fB(Ob, Bb)
    }, QB.makeEncodable = function(bb) {
      const ub = bb[Symbol.metadata];
      if (!ub) return bb;
      const hb = ub[Db];
      if (void 0 === hb) return bb;
      for (let Bb = 0; Bb <= hb; Bb++) {
        const hb = ub[Bb];
        hb && fu.defineField(bb, ub, Bb, hb.name, hb.type)
      }
      return Object.prototype.hasOwnProperty.call(bb, jb) && delete bb[jb], bb
    };
    class uO {
      eZ;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(bb) {
        this.eZ = bb, this.eZ.qJ = this.qJ.bind(this)
      }
      get callbacks() {
        return this.eZ.root.callbacks
      }
      get state() {
        return this.eZ.state
      }
      addCallback(bb, ub, hb) {
        return this.eZ.root.addCallback(bb, ub, hb)
      }
      addCallbackOrWaitCollectionAvailable(bb, ub, hb, Bb) {
        let Gb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ub = () => {};
        const Yb = () => Ub(),
          Sb = bb[ub];
        if (Sb && void 0 !== Sb[Lb]) return Gb = Gb && !1 === this.isTriggering, hb === Ob.ADD && Gb && Sb.forEach(((bb, ub) => {
          Bb(bb, ub)
        })), this.addCallback(Sb[Lb], hb, Bb);
        {
          let Ob;
          return Ob = this.addCallback(bb[Lb], ub, ((bb, ub) => {
            null !== bb && void 0 !== bb && (Ob(), Ub = this.addCallback(bb[Lb], hb, Bb))
          })), Ub = Ob, Yb
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(bb, ub, hb) {
        let Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Bb = Bb && !1 === this.isTriggering;
        const Ob = bb[ub];
        return Bb && null !== Ob && void 0 !== Ob && hb(Ob, void 0), this.addCallback(bb[Lb], ub, hb)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const bb = arguments.length <= 0 ? void 0 : arguments[0],
            ub = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(bb[Lb], Ob.REPLACE, ub)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Ob.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Ob.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      UW() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Ob.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Ob.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      gJ() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Ob.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Ob.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(bb, ub, hb) {
        let Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Gb = bb.constructor[Symbol.metadata];
        hb || (hb = Object.keys(Gb).filter((bb => !isNaN(Number(bb)))).map((bb => Gb[bb].name)));
        const Ub = () => {
          for (const Bb of hb) {
            const hb = bb[Bb];
            void 0 !== hb && (ub[Bb] = hb)
          }
        };
        return Bb && Ub(), this.addCallback(bb[Lb], Ob.REPLACE, Ub)
      }
      qJ(bb) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let ub = 0, hb = bb.length; ub < hb; ub++) {
          const hb = bb[ub],
            Bb = hb.refId,
            Gb = hb.ref,
            Ub = this.callbacks[Bb];
          if (Ub) {
            if ((hb.op & Ob.DELETE) === Ob.DELETE && zB.isSchema(hb.previousValue)) {
              const bb = hb.previousValue[Lb],
                ub = this.callbacks[bb]?.[Ob.DELETE];
              if (ub)
                for (let hb = ub.length - 1; hb >= 0; hb--) try {
                  ub[hb]()
                } catch (GO) {
                  console.error(GO)
                }
            }
            if (zB.isSchema(Gb)) {
              if (!this.uniqueRefIds.has(Bb)) {
                const bb = Ub[Ob.REPLACE];
                if (bb)
                  for (let ub = bb.length - 1; ub >= 0; ub--) try {
                    bb[ub]()
                  } catch (GO) {
                    console.error(GO)
                  }
              }
              const bb = Ub[hb.field];
              if (bb)
                for (let ub = bb.length - 1; ub >= 0; ub--) try {
                  bb[ub](hb.value, hb.previousValue)
                } catch (GO) {
                  console.error(GO)
                }
            } else {
              const bb = hb.dynamicIndex ?? hb.field;
              if ((hb.op & Ob.DELETE) === Ob.DELETE) {
                if (void 0 !== hb.previousValue) {
                  const ub = Ub[Ob.DELETE];
                  if (ub)
                    for (let Bb = ub.length - 1; Bb >= 0; Bb--) try {
                      ub[Bb](hb.previousValue, bb)
                    } catch (GO) {
                      console.error(GO)
                    }
                }
                if ((hb.op & Ob.ADD) === Ob.ADD) {
                  const ub = Ub[Ob.ADD];
                  if (ub)
                    for (let Bb = ub.length - 1; Bb >= 0; Bb--) try {
                      ub[Bb](hb.value, bb)
                    } catch (GO) {
                      console.error(GO)
                    }
                }
              } else if ((hb.op & Ob.ADD) === Ob.ADD && hb.previousValue !== hb.value) {
                const ub = Ub[Ob.ADD];
                if (ub)
                  for (let Bb = ub.length - 1; Bb >= 0; Bb--) try {
                    ub[Bb](hb.value, bb)
                  } catch (GO) {
                    console.error(GO)
                  }
              }
              if (hb.value !== hb.previousValue) {
                const ub = Ub[Ob.REPLACE];
                if (ub)
                  for (let Bb = ub.length - 1; Bb >= 0; Bb--) try {
                    ub[Bb](bb, hb.value)
                  } catch (GO) {
                    console.error(GO)
                  }
              }
            }
            this.uniqueRefIds.add(Bb)
          }
        }
        this.isTriggering = !1
      }
    }
    const hO = {
      get(bb) {
        if (bb instanceof fB) return new uO(bb);
        if ("eZ" in bb.Ul) return new uO(bb.Ul.eZ);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(bb) {
        if (bb instanceof fB) return RB(bb);
        if ("eZ" in bb.Ul) return RB(bb.Ul.eZ);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (bb, ub) => bO(bb, ub)
    };
    class BO {
      _free = [];
      _factory;
      _maxSize;
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = bb, this._maxSize = ub.maxSize ?? 1 / 0;
        const hb = ub.preallocate ?? 0;
        for (let Bb = 0; Bb < hb; Bb++) this._free.push(bb())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(bb) {
        zB.reset(bb), this._free.length < this._maxSize && this._free.push(bb)
      }
      get size() {
        return this._free.length
      }
    }

    function OO(bb) {
      return new BO((() => new bb), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    du("map", {
      constructor: OB
    }), du("array", {
      constructor: hB
    }), du("set", {
      constructor: UB
    }), du("collection", {
      constructor: GB
    })
  },
  8815: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      __addDisposableResource: () => Nb,
      __assign: () => Gb,
      __asyncDelegator: () => nb,
      __asyncGenerator: () => jb,
      __asyncValues: () => Db,
      __await: () => rb,
      __awaiter: () => Xb,
      __classPrivateFieldGet: () => tb,
      __classPrivateFieldIn: () => eb,
      __classPrivateFieldSet: () => Jb,
      __createBinding: () => ob,
      __decorate: () => Lb,
      __disposeResources: () => Mb,
      __esDecorate: () => Sb,
      __exportStar: () => Ab,
      __extends: () => Ob,
      __generator: () => pb,
      __importDefault: () => vb,
      __importStar: () => ib,
      __makeTemplateObject: () => xb,
      __metadata: () => Zb,
      __param: () => Yb,
      __propKey: () => Hb,
      __read: () => Kb,
      __rest: () => Ub,
      __rewriteRelativeImportExtension: () => mb,
      __runInitializers: () => ab,
      __setFunctionName: () => wb,
      __spread: () => Wb,
      __spreadArray: () => db,
      __spreadArrays: () => Cb,
      __values: () => lb,
      default: () => Ib
    });
    var Bb = function(bb, ub) {
      return Bb = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(bb, ub) {
        bb.__proto__ = ub
      } || function(bb, ub) {
        for (var hb in ub) Object.prototype.hasOwnProperty.call(ub, hb) && (bb[hb] = ub[hb])
      }, Bb(bb, ub)
    };

    function Ob(bb, ub) {
      if ("function" !== typeof ub && null !== ub) throw new TypeError("Class extends value " + String(ub) + " is not a constructor or null");

      function hb() {
        this.constructor = bb
      }
      Bb(bb, ub), bb.prototype = null === ub ? Object.create(ub) : (hb.prototype = ub.prototype, new hb)
    }
    var Gb = function() {
      return Gb = Object.assign || function(bb) {
        for (var ub, hb = 1, Bb = arguments.length; hb < Bb; hb++)
          for (var Ob in ub = arguments[hb]) Object.prototype.hasOwnProperty.call(ub, Ob) && (bb[Ob] = ub[Ob]);
        return bb
      }, Gb.apply(this, arguments)
    };

    function Ub(bb, ub) {
      var hb = {};
      for (var Bb in bb) Object.prototype.hasOwnProperty.call(bb, Bb) && ub.indexOf(Bb) < 0 && (hb[Bb] = bb[Bb]);
      if (null != bb && "function" === typeof Object.getOwnPropertySymbols) {
        var Ob = 0;
        for (Bb = Object.getOwnPropertySymbols(bb); Ob < Bb.length; Ob++) ub.indexOf(Bb[Ob]) < 0 && Object.prototype.propertyIsEnumerable.call(bb, Bb[Ob]) && (hb[Bb[Ob]] = bb[Bb[Ob]])
      }
      return hb
    }

    function Lb(bb, ub, hb, Bb) {
      var Ob, Gb = arguments.length,
        Ub = Gb < 3 ? ub : null === Bb ? Bb = Object.getOwnPropertyDescriptor(ub, hb) : Bb;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Ub = Reflect.decorate(bb, ub, hb, Bb);
      else
        for (var Lb = bb.length - 1; Lb >= 0; Lb--)(Ob = bb[Lb]) && (Ub = (Gb < 3 ? Ob(Ub) : Gb > 3 ? Ob(ub, hb, Ub) : Ob(ub, hb)) || Ub);
      return Gb > 3 && Ub && Object.defineProperty(ub, hb, Ub), Ub
    }

    function Yb(bb, ub) {
      return function(hb, Bb) {
        ub(hb, Bb, bb)
      }
    }

    function Sb(bb, ub, hb, Bb, Ob, Gb) {
      function Ub(bb) {
        if (void 0 !== bb && "function" !== typeof bb) throw new TypeError("Function expected");
        return bb
      }
      for (var Lb, Yb = Bb.kind, Sb = "getter" === Yb ? "get" : "setter" === Yb ? "set" : "value", ab = !ub && bb ? Bb.static ? bb : bb.prototype : null, Hb = ub || (ab ? Object.getOwnPropertyDescriptor(ab, Bb.name) : {}), wb = !1, Zb = hb.length - 1; Zb >= 0; Zb--) {
        var Xb = {};
        for (var pb in Bb) Xb[pb] = "access" === pb ? {} : Bb[pb];
        for (var pb in Bb.access) Xb.access[pb] = Bb.access[pb];
        Xb.addInitializer = function(bb) {
          if (wb) throw new TypeError("Cannot add initializers after decoration has completed");
          Gb.push(Ub(bb || null))
        };
        var ob = (0, hb[Zb])("accessor" === Yb ? {
          get: Hb.get,
          set: Hb.set
        } : Hb[Sb], Xb);
        if ("accessor" === Yb) {
          if (void 0 === ob) continue;
          if (null === ob || "object" !== typeof ob) throw new TypeError("Object expected");
          (Lb = Ub(ob.get)) && (Hb.get = Lb), (Lb = Ub(ob.set)) && (Hb.set = Lb), (Lb = Ub(ob.init)) && Ob.unshift(Lb)
        } else(Lb = Ub(ob)) && ("field" === Yb ? Ob.unshift(Lb) : Hb[Sb] = Lb)
      }
      ab && Object.defineProperty(ab, Bb.name, Hb), wb = !0
    }

    function ab(bb, ub, hb) {
      for (var Bb = arguments.length > 2, Ob = 0; Ob < ub.length; Ob++) hb = Bb ? ub[Ob].call(bb, hb) : ub[Ob].call(bb);
      return Bb ? hb : void 0
    }

    function Hb(bb) {
      return "symbol" === typeof bb ? bb : "".concat(bb)
    }

    function wb(bb, ub, hb) {
      return "symbol" === typeof ub && (ub = ub.description ? "[".concat(ub.description, "]") : ""), Object.defineProperty(bb, "name", {
        configurable: !0,
        value: hb ? "".concat(hb, " ", ub) : ub
      })
    }

    function Zb(bb, ub) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(bb, ub)
    }

    function Xb(bb, ub, hb, Bb) {
      return new(hb || (hb = Promise))((function(Ob, Gb) {
        function Ub(bb) {
          try {
            Yb(Bb.next(bb))
          } catch (ub) {
            Gb(ub)
          }
        }

        function Lb(bb) {
          try {
            Yb(Bb.throw(bb))
          } catch (ub) {
            Gb(ub)
          }
        }

        function Yb(bb) {
          var ub;
          bb.done ? Ob(bb.value) : (ub = bb.value, ub instanceof hb ? ub : new hb((function(bb) {
            bb(ub)
          }))).then(Ub, Lb)
        }
        Yb((Bb = Bb.apply(bb, ub || [])).next())
      }))
    }

    function pb(bb, ub) {
      var hb, Bb, Ob, Gb = {
          label: 0,
          sent: function() {
            if (1 & Ob[0]) throw Ob[1];
            return Ob[1]
          },
          trys: [],
          ops: []
        },
        Ub = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Ub.next = Lb(0), Ub.throw = Lb(1), Ub.return = Lb(2), "function" === typeof Symbol && (Ub[Symbol.iterator] = function() {
        return this
      }), Ub;

      function Lb(Lb) {
        return function(Yb) {
          return function(Lb) {
            if (hb) throw new TypeError("Generator is already executing.");
            for (; Ub && (Ub = 0, Lb[0] && (Gb = 0)), Gb;) try {
              if (hb = 1, Bb && (Ob = 2 & Lb[0] ? Bb.return : Lb[0] ? Bb.throw || ((Ob = Bb.return) && Ob.call(Bb), 0) : Bb.next) && !(Ob = Ob.call(Bb, Lb[1])).done) return Ob;
              switch (Bb = 0, Ob && (Lb = [2 & Lb[0], Ob.value]), Lb[0]) {
                case 0:
                case 1:
                  Ob = Lb;
                  break;
                case 4:
                  return Gb.label++, {
                    value: Lb[1],
                    done: !1
                  };
                case 5:
                  Gb.label++, Bb = Lb[1], Lb = [0];
                  continue;
                case 7:
                  Lb = Gb.ops.pop(), Gb.trys.pop();
                  continue;
                default:
                  if (!(Ob = (Ob = Gb.trys).length > 0 && Ob[Ob.length - 1]) && (6 === Lb[0] || 2 === Lb[0])) {
                    Gb = 0;
                    continue
                  }
                  if (3 === Lb[0] && (!Ob || Lb[1] > Ob[0] && Lb[1] < Ob[3])) {
                    Gb.label = Lb[1];
                    break
                  }
                  if (6 === Lb[0] && Gb.label < Ob[1]) {
                    Gb.label = Ob[1], Ob = Lb;
                    break
                  }
                  if (Ob && Gb.label < Ob[2]) {
                    Gb.label = Ob[2], Gb.ops.push(Lb);
                    break
                  }
                  Ob[2] && Gb.ops.pop(), Gb.trys.pop();
                  continue
              }
              Lb = ub.call(bb, Gb)
            } catch (Yb) {
              Lb = [6, Yb], Bb = 0
            } finally {
              hb = Ob = 0
            }
            if (5 & Lb[0]) throw Lb[1];
            return {
              value: Lb[0] ? Lb[1] : void 0,
              done: !0
            }
          }([Lb, Yb])
        }
      }
    }
    var ob = Object.create ? function(bb, ub, hb, Bb) {
      void 0 === Bb && (Bb = hb);
      var Ob = Object.getOwnPropertyDescriptor(ub, hb);
      Ob && !("get" in Ob ? !ub.__esModule : Ob.writable || Ob.configurable) || (Ob = {
        enumerable: !0,
        get: function() {
          return ub[hb]
        }
      }), Object.defineProperty(bb, Bb, Ob)
    } : function(bb, ub, hb, Bb) {
      void 0 === Bb && (Bb = hb), bb[Bb] = ub[hb]
    };

    function Ab(bb, ub) {
      for (var hb in bb) "default" === hb || Object.prototype.hasOwnProperty.call(ub, hb) || ob(ub, bb, hb)
    }

    function lb(bb) {
      var ub = "function" === typeof Symbol && Symbol.iterator,
        hb = ub && bb[ub],
        Bb = 0;
      if (hb) return hb.call(bb);
      if (bb && "number" === typeof bb.length) return {
        next: function() {
          return bb && Bb >= bb.length && (bb = void 0), {
            value: bb && bb[Bb++],
            done: !bb
          }
        }
      };
      throw new TypeError(ub ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Kb(bb, ub) {
      var hb = "function" === typeof Symbol && bb[Symbol.iterator];
      if (!hb) return bb;
      var Bb, Ob, Gb = hb.call(bb),
        Ub = [];
      try {
        for (;
          (void 0 === ub || ub-- > 0) && !(Bb = Gb.next()).done;) Ub.push(Bb.value)
      } catch (Lb) {
        Ob = {
          error: Lb
        }
      } finally {
        try {
          Bb && !Bb.done && (hb = Gb.return) && hb.call(Gb)
        } finally {
          if (Ob) throw Ob.error
        }
      }
      return Ub
    }

    function Wb() {
      for (var bb = [], ub = 0; ub < arguments.length; ub++) bb = bb.concat(Kb(arguments[ub]));
      return bb
    }

    function Cb() {
      for (var bb = 0, ub = 0, hb = arguments.length; ub < hb; ub++) bb += arguments[ub].length;
      var Bb = Array(bb),
        Ob = 0;
      for (ub = 0; ub < hb; ub++)
        for (var Gb = arguments[ub], Ub = 0, Lb = Gb.length; Ub < Lb; Ub++, Ob++) Bb[Ob] = Gb[Ub];
      return Bb
    }

    function db(bb, ub, hb) {
      if (hb || 2 === arguments.length)
        for (var Bb, Ob = 0, Gb = ub.length; Ob < Gb; Ob++) !Bb && Ob in ub || (Bb || (Bb = Array.prototype.slice.call(ub, 0, Ob)), Bb[Ob] = ub[Ob]);
      return bb.concat(Bb || Array.prototype.slice.call(ub))
    }

    function rb(bb) {
      return this instanceof rb ? (this.v = bb, this) : new rb(bb)
    }

    function jb(bb, ub, hb) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Bb, Ob = hb.apply(bb, ub || []),
        Gb = [];
      return Bb = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Ub("next"), Ub("throw"), Ub("return", (function(bb) {
        return function(ub) {
          return Promise.resolve(ub).then(bb, Sb)
        }
      })), Bb[Symbol.asyncIterator] = function() {
        return this
      }, Bb;

      function Ub(bb, ub) {
        Ob[bb] && (Bb[bb] = function(ub) {
          return new Promise((function(hb, Bb) {
            Gb.push([bb, ub, hb, Bb]) > 1 || Lb(bb, ub)
          }))
        }, ub && (Bb[bb] = ub(Bb[bb])))
      }

      function Lb(bb, ub) {
        try {
          (hb = Ob[bb](ub)).value instanceof rb ? Promise.resolve(hb.value.v).then(Yb, Sb) : ab(Gb[0][2], hb)
        } catch (Bb) {
          ab(Gb[0][3], Bb)
        }
        var hb
      }

      function Yb(bb) {
        Lb("next", bb)
      }

      function Sb(bb) {
        Lb("throw", bb)
      }

      function ab(bb, ub) {
        bb(ub), Gb.shift(), Gb.length && Lb(Gb[0][0], Gb[0][1])
      }
    }

    function nb(bb) {
      var ub, hb;
      return ub = {}, Bb("next"), Bb("throw", (function(bb) {
        throw bb
      })), Bb("return"), ub[Symbol.iterator] = function() {
        return this
      }, ub;

      function Bb(Bb, Ob) {
        ub[Bb] = bb[Bb] ? function(ub) {
          return (hb = !hb) ? {
            value: rb(bb[Bb](ub)),
            done: !1
          } : Ob ? Ob(ub) : ub
        } : Ob
      }
    }

    function Db(bb) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var ub, hb = bb[Symbol.asyncIterator];
      return hb ? hb.call(bb) : (bb = lb(bb), ub = {}, Bb("next"), Bb("throw"), Bb("return"), ub[Symbol.asyncIterator] = function() {
        return this
      }, ub);

      function Bb(hb) {
        ub[hb] = bb[hb] && function(ub) {
          return new Promise((function(Bb, Ob) {
            (function(bb, ub, hb, Bb) {
              Promise.resolve(Bb).then((function(ub) {
                bb({
                  value: ub,
                  done: hb
                })
              }), ub)
            })(Bb, Ob, (ub = bb[hb](ub)).done, ub.value)
          }))
        }
      }
    }

    function xb(bb, ub) {
      return Object.defineProperty ? Object.defineProperty(bb, "raw", {
        value: ub
      }) : bb.raw = ub, bb
    }
    var zb = Object.create ? function(bb, ub) {
        Object.defineProperty(bb, "default", {
          enumerable: !0,
          value: ub
        })
      } : function(bb, ub) {
        bb.default = ub
      },
      gb = function(bb) {
        return gb = Object.getOwnPropertyNames || function(bb) {
          var ub = [];
          for (var hb in bb) Object.prototype.hasOwnProperty.call(bb, hb) && (ub[ub.length] = hb);
          return ub
        }, gb(bb)
      };

    function ib(bb) {
      if (bb && bb.__esModule) return bb;
      var ub = {};
      if (null != bb)
        for (var hb = gb(bb), Bb = 0; Bb < hb.length; Bb++) "default" !== hb[Bb] && ob(ub, bb, hb[Bb]);
      return zb(ub, bb), ub
    }

    function vb(bb) {
      return bb && bb.__esModule ? bb : {
        default: bb
      }
    }

    function tb(bb, ub, hb, Bb) {
      if ("a" === hb && !Bb) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof ub ? bb !== ub || !Bb : !ub.has(bb)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === hb ? Bb : "a" === hb ? Bb.call(bb) : Bb ? Bb.value : ub.get(bb)
    }

    function Jb(bb, ub, hb, Bb, Ob) {
      if ("m" === Bb) throw new TypeError("Private method is not writable");
      if ("a" === Bb && !Ob) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof ub ? bb !== ub || !Ob : !ub.has(bb)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Bb ? Ob.call(bb, hb) : Ob ? Ob.value = hb : ub.set(bb, hb), hb
    }

    function eb(bb, ub) {
      if (null === ub || "object" !== typeof ub && "function" !== typeof ub) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof bb ? ub === bb : bb.has(ub)
    }

    function Nb(bb, ub, hb) {
      if (null !== ub && void 0 !== ub) {
        if ("object" !== typeof ub && "function" !== typeof ub) throw new TypeError("Object expected.");
        var Bb, Ob;
        if (hb) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Bb = ub[Symbol.asyncDispose]
        }
        if (void 0 === Bb) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Bb = ub[Symbol.dispose], hb && (Ob = Bb)
        }
        if ("function" !== typeof Bb) throw new TypeError("Object not disposable.");
        Ob && (Bb = function() {
          try {
            Ob.call(this)
          } catch (bb) {
            return Promise.reject(bb)
          }
        }), bb.stack.push({
          value: ub,
          dispose: Bb,
          async: hb
        })
      } else hb && bb.stack.push({
        async: !0
      });
      return ub
    }
    var sb = "function" === typeof SuppressedError ? SuppressedError : function(bb, ub, hb) {
      var Bb = new Error(hb);
      return Bb.name = "SuppressedError", Bb.error = bb, Bb.suppressed = ub, Bb
    };

    function Mb(bb) {
      function ub(ub) {
        bb.error = bb.hasError ? new sb(ub, bb.error, "An error was suppressed during disposal.") : ub, bb.hasError = !0
      }
      var hb, Bb = 0;
      return function Ob() {
        for (; hb = bb.stack.pop();) try {
          if (!hb.async && 1 === Bb) return Bb = 0, bb.stack.push(hb), Promise.resolve().then(Ob);
          if (hb.dispose) {
            var Gb = hb.dispose.call(hb.value);
            if (hb.async) return Bb |= 2, Promise.resolve(Gb).then(Ob, (function(bb) {
              return ub(bb), Ob()
            }))
          } else Bb |= 1
        } catch (Ub) {
          ub(Ub)
        }
        if (1 === Bb) return bb.hasError ? Promise.reject(bb.error) : Promise.resolve();
        if (bb.hasError) throw bb.error
      }()
    }

    function mb(bb, ub) {
      return "string" === typeof bb && /^\.\.?\//.test(bb) ? bb.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(bb, hb, Bb, Ob, Gb) {
        return hb ? ub ? ".jsx" : ".js" : !Bb || Ob && Gb ? Bb + Ob + "." + Gb.toLowerCase() + "js" : bb
      })) : bb
    }
    const Ib = {
      __extends: Ob,
      __assign: Gb,
      __rest: Ub,
      __decorate: Lb,
      __param: Yb,
      __esDecorate: Sb,
      __runInitializers: ab,
      __propKey: Hb,
      __setFunctionName: wb,
      __metadata: Zb,
      __awaiter: Xb,
      __generator: pb,
      __createBinding: ob,
      __exportStar: Ab,
      __values: lb,
      __read: Kb,
      __spread: Wb,
      __spreadArrays: Cb,
      __spreadArray: db,
      __await: rb,
      __asyncGenerator: jb,
      __asyncDelegator: nb,
      __asyncValues: Db,
      __makeTemplateObject: xb,
      __importStar: ib,
      __importDefault: vb,
      __classPrivateFieldGet: tb,
      __classPrivateFieldSet: Jb,
      __classPrivateFieldIn: eb,
      __addDisposableResource: Nb,
      __disposeResources: Mb,
      __rewriteRelativeImportExtension: mb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);