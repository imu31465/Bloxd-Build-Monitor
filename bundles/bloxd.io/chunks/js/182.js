export const id = 182;
export const ids = [182];
export const modules = {
  8776: (bb, cb) => {
    cb.discordURLBuilder = function(bb) {
      var cb;
      const sb = (null === (cb = null === window || void 0 === window ? void 0 : window.location) || void 0 === cb ? void 0 : cb.hostname) || "localhost",
        kb = bb.hostname.split("."),
        Wb = !bb.hostname.includes("trycloudflare.com") && !bb.hostname.includes("discordsays.com") && kb.length > 2 ? `/${kb[0]}` : "";
      return bb.pathname.startsWith("/.proxy") ? `${bb.protocol}//${sb}${Wb}${bb.pathname}${bb.search}` : `${bb.protocol}//${sb}/.proxy/colyseus${Wb}${bb.pathname}${bb.search}`
    }
  },
  8766: (bb, cb, sb) => {
    var kb, Wb, ab, Tb, Ub = sb(8686),
      Ib = sb(8769),
      Hb = sb(8742);
    kb = new WeakMap, Wb = new WeakMap, ab = new WeakMap, Tb = new WeakMap, cb.Auth = class {
      constructor(bb) {
        this.http = bb, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, kb.set(this, !1), Wb.set(this, void 0), ab.set(this, void 0), Tb.set(this, Hb.createNanoEvents()), Ib.getItem(this.settings.key, (bb => this.token = bb))
      }
      set token(bb) {
        this.http.authToken = bb
      }
      get token() {
        return this.http.authToken
      }
      onChange(bb) {
        const cb = Ub.__classPrivateFieldGet(this, Tb, "f").on("change", bb);
        return Ub.__classPrivateFieldGet(this, kb, "f") || Ub.__classPrivateFieldSet(this, Wb, new Promise(((bb, cb) => {
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
        })), "f"), Ub.__classPrivateFieldSet(this, kb, !0, "f"), cb
      }
      getUserData() {
        return Ub.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(bb, cb, sb) {
        return Ub.__awaiter(this, void 0, void 0, (function*() {
          const kb = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: bb,
              password: cb,
              options: sb
            }
          })).data;
          return this.emitChange(kb), kb
        }))
      }
      signInWithEmailAndPassword(bb, cb) {
        return Ub.__awaiter(this, void 0, void 0, (function*() {
          const sb = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: bb,
              password: cb
            }
          })).data;
          return this.emitChange(sb), sb
        }))
      }
      signInAnonymously(bb) {
        return Ub.__awaiter(this, void 0, void 0, (function*() {
          const cb = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: bb
            }
          })).data;
          return this.emitChange(cb), cb
        }))
      }
      sendPasswordResetEmail(bb) {
        return Ub.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: bb
            }
          })).data
        }))
      }
      signInWithProvider(bb) {
        return Ub.__awaiter(this, arguments, void 0, (function*(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((sb, kb) => {
            const Wb = cb.width || 480,
              Tb = cb.height || 768,
              Ib = this.token ? `?token=${this.token}` : "",
              Hb = `Login with ${bb[0].toUpperCase()+bb.substring(1)}`,
              fb = this.http.client.getHttpEndpoint(`${cb.prefix||`${this.settings.path}/provider`}/${bb}${Ib}`),
              Mb = screen.width / 2 - Wb / 2,
              Xb = screen.height / 2 - Tb / 2;
            Ub.__classPrivateFieldSet(this, ab, window.open(fb, Hb, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Wb + ", height=" + Tb + ", top=" + Xb + ", left=" + Mb), "f");
            const nb = bb => {
                void 0 === bb.data.user && void 0 === bb.data.token || (clearInterval(mb), Ub.__classPrivateFieldGet(this, ab, "f").close(), Ub.__classPrivateFieldSet(this, ab, void 0, "f"), window.removeEventListener("message", nb), void 0 !== bb.data.error ? kb(bb.data.error) : (sb(bb.data), this.emitChange(bb.data)))
              },
              mb = setInterval((() => {
                Ub.__classPrivateFieldGet(this, ab, "f") && !Ub.__classPrivateFieldGet(this, ab, "f").closed || (Ub.__classPrivateFieldSet(this, ab, void 0, "f"), kb("Gs"), window.removeEventListener("message", nb))
              }), 200);
            window.addEventListener("message", nb)
          }))
        }))
      }
      signOut() {
        return Ub.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(bb) {
        void 0 !== bb.token && (this.token = bb.token, null === bb.token ? Ib.removeItem(this.settings.key) : Ib.setItem(this.settings.key, bb.token)), Ub.__classPrivateFieldGet(this, Tb, "f").emit("change", bb)
      }
    }
  },
  8683: (bb, cb, sb) => {
    var kb, Wb = sb(8686),
      ab = sb(8689),
      Tb = sb(8695),
      Ub = sb(8759),
      Ib = sb(8766),
      Hb = sb(8776);
    class fb extends Error {
      constructor(bb, cb) {
        super(bb), this.code = cb, this.name = "MatchMakeError", Object.setPrototypeOf(this, fb.prototype)
      }
    }
    const Mb = "undefined" !== typeof window && "undefined" !== typeof(null === (kb = null === window || void 0 === window ? void 0 : window.location) || void 0 === kb ? void 0 : kb.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Xb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mb,
          cb = arguments.length > 1 ? arguments[1] : void 0;
        var sb, kb;
        if ("string" === typeof bb) {
          const cb = bb.startsWith("/") ? new URL(bb, Mb) : new URL(bb),
            sb = "https:" === cb.protocol || "wss:" === cb.protocol,
            kb = Number(cb.port || (sb ? 443 : 80));
          this.settings = {
            hostname: cb.hostname,
            pathname: cb.pathname,
            port: kb,
            secure: sb,
            searchParams: cb.searchParams.toString() || void 0
          }
        } else void 0 === bb.port && (bb.port = bb.secure ? 443 : 80), void 0 === bb.pathname && (bb.pathname = ""), this.settings = bb;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Ub.HTTP(this, (null === cb || void 0 === cb ? void 0 : cb.headers) || {}), this.auth = new Ib.Auth(this.http), this.urlBuilder = null === cb || void 0 === cb ? void 0 : cb.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (kb = null === (sb = null === window || void 0 === window ? void 0 : window.location) || void 0 === sb ? void 0 : sb.hostname) || void 0 === kb ? void 0 : kb.includes("discordsays.com")) && (this.urlBuilder = Hb.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(bb) {
        return Wb.__awaiter(this, arguments, void 0, (function*(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            sb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", bb, cb, sb)
        }))
      }
      create(bb) {
        return Wb.__awaiter(this, arguments, void 0, (function*(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            sb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", bb, cb, sb)
        }))
      }
      join(bb) {
        return Wb.__awaiter(this, arguments, void 0, (function*(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            sb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", bb, cb, sb)
        }))
      }
      joinById(bb) {
        return Wb.__awaiter(this, arguments, void 0, (function*(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            sb = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", bb, cb, sb)
        }))
      }
      reconnect(bb, cb) {
        return Wb.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof bb && "string" === typeof cb) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [sb, kb] = bb.split(":");
          if (!sb || !kb) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", sb, {
            reconnectionToken: kb
          }, cb)
        }))
      }
      consumeSeatReservation(bb, cb, sb) {
        return Wb.__awaiter(this, void 0, void 0, (function*() {
          const kb = this.createRoom(bb.room.name, cb);
          kb.roomId = bb.room.roomId, kb.sessionId = bb.sessionId;
          const Tb = {
            sessionId: kb.sessionId
          };
          bb.reconnectionToken && (Tb.reconnectionToken = bb.reconnectionToken);
          const Ub = sb || kb;
          return kb.connect(this.buildEndpoint(bb.room, Tb, bb.protocol), bb.devMode && (() => Wb.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${kb.roomId}'...`);
            let sb = 0;
            const ab = () => Wb.__awaiter(this, void 0, void 0, (function*() {
              sb++;
              try {
                yield this.consumeSeatReservation(bb, cb, Ub), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${kb.roomId}'`)
              } catch (Wb) {
                sb < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${sb} out of 8)`), setTimeout(ab, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(ab, 2e3)
          }))), Ub, bb, this.http.headers), new Promise(((bb, cb) => {
            const sb = (bb, sb) => cb(new ab.ServerError(bb, sb));
            Ub.onError.once(sb), Ub.onJoin.once((() => {
              Ub.onError.remove(sb), setTimeout((() => {
                try {
                  const bb = [141, 56, 86, 101, 253, 220, 201, 166, 141, 79, 179, 74, 197, 208, 102, 129, 163, 98, 16, 23];
                  bb && Ub.RV(128, new Uint8Array(bb))
                } catch {}
              }), 3e3), bb(Ub)
            }))
          }))
        }))
      }
      createMatchMakeRequest(bb, cb) {
        return Wb.__awaiter(this, arguments, void 0, (function*(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            kb = arguments.length > 3 ? arguments[3] : void 0,
            Wb = arguments.length > 4 ? arguments[4] : void 0;
          const ab = (yield this.http.post(`matchmake/${bb}/${cb}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(sb)
          })).data;
          if (ab.error) throw new fb(ab.error, ab.code);
          return "reconnect" === bb && (ab.reconnectionToken = sb.reconnectionToken), yield this.consumeSeatReservation(ab, kb, Wb)
        }))
      }
      createRoom(bb, cb) {
        return new Tb.bX(bb, cb)
      }
      buildEndpoint(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          kb = this.settings.searchParams || "";
        this.http.authToken && (cb._authToken = this.http.authToken);
        for (const Tb in cb) cb.hasOwnProperty(Tb) && (kb += (kb ? "&" : "") + `${Tb}=${cb[Tb]}`);
        "h3" === sb && (sb = "http");
        let Wb = this.settings.secure ? `${sb}s://` : `${sb}://`;
        bb.publicAddress ? Wb += `${bb.publicAddress}` : Wb += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const ab = `${Wb}/${bb.processId}/${bb.roomId}?${kb}`;
        return this.urlBuilder ? this.urlBuilder(new URL(ab)) : ab
      }
      getHttpEndpoint() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const cb = bb.startsWith("/") ? bb : `/${bb}`;
        let sb = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${cb}`;
        return this.settings.searchParams && (sb += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(sb)) : sb
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Xb.VERSION = "0.16.22", cb.Client = Xb, cb.MatchMakeError = fb
  },
  8699: (bb, cb, sb) => {
    var kb = sb(8707),
      Wb = sb(8719);
    cb.Connection = class {
      constructor(bb) {
        if (this.events = {}, "h3" === bb) this.transport = new kb.H3TransportTransport(this.events);
        else this.transport = new Wb.WebSocketTransport(this.events)
      }
      connect(bb, cb) {
        this.transport.connect.call(this.transport, bb, cb)
      }
      send(bb) {
        this.transport.send(bb)
      }
      sendUnreliable(bb) {
        this.transport.sendUnreliable(bb)
      }
      close(bb, cb) {
        this.transport.close(bb, cb)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8759: (bb, cb, sb) => {
    var kb = sb(8689);

    function Wb(bb) {
      var cb = Object.create(null);
      return bb && Object.keys(bb).forEach((function(sb) {
        if ("default" !== sb) {
          var kb = Object.getOwnPropertyDescriptor(bb, sb);
          Object.defineProperty(cb, sb, kb.get ? kb : {
            enumerable: !0,
            get: function() {
              return bb[sb]
            }
          })
        }
      })), cb.default = bb, Object.freeze(cb)
    }
    var ab = Wb(sb(8762));
    cb.HTTP = class {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = bb, this.headers = cb
      }
      get(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", bb, cb)
      }
      post(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", bb, cb)
      }
      del(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", bb, cb)
      }
      put(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", bb, cb)
      }
      request(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return ab[bb](this.client.getHttpEndpoint(cb), this.getOptions(sb)).catch((bb => {
          var cb;
          if (bb.aborted) throw new kb.AbortError("Request aborted");
          const sb = bb.statusCode,
            Wb = (null === (cb = bb.data) || void 0 === cb ? void 0 : cb.error) || bb.statusMessage || bb.message;
          if (!sb && !Wb) throw bb;
          throw new kb.ServerError(sb, Wb)
        }))
      }
      getOptions(bb) {
        return bb.headers = Object.assign({}, this.headers, bb.headers), this.authToken && (bb.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (bb.withCredentials = !0), bb
      }
    }
  },
  8735: (bb, cb) => {
    var sb, kb;
    cb.Protocol = void 0, (sb = cb.Protocol || (cb.Protocol = {}))[sb.HANDSHAKE = 9] = "HANDSHAKE", sb[sb.JOIN_ROOM = 10] = "JOIN_ROOM", sb[sb.ERROR = 11] = "ERROR", sb[sb.LEAVE_ROOM = 12] = "LEAVE_ROOM", sb[sb.ROOM_DATA = 13] = "ROOM_DATA", sb[sb.ROOM_STATE = 14] = "ROOM_STATE", sb[sb.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", sb[sb.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", sb[sb.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", cb.ErrorCode = void 0, (kb = cb.ErrorCode || (cb.ErrorCode = {}))[kb.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", kb[kb.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", kb[kb.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", kb[kb.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", kb[kb.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", kb[kb.AUTH_FAILED = 4215] = "AUTH_FAILED", kb[kb.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8695: (bb, cb, sb) => {
    var kb = sb(8699),
      Wb = sb(8735),
      ab = sb(8740),
      Tb = sb(8742),
      Ub = sb(8746),
      Ib = sb(8713),
      Hb = sb(8752),
      fb = sb(8689),
      Mb = sb(8757);
    class Xb {
      constructor(bb, cb) {
        this.onStateChange = Ub.createSignal(), this.onError = Ub.createSignal(), this.hN = Ub.createSignal(), this.onJoin = Ub.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Tb.createNanoEvents(), this.roomId = null, this.name = bb, this.packr = new Mb.Packr, this.packr.encode(void 0), cb && (this.lC = new(ab.getSerializer("schema")), this.rootSchema = cb, this.lC.state = new cb), this.onError(((bb, cb) => {
          var sb;
          return null === (sb = console.warn) || void 0 === sb ? void 0 : sb.call(console, `colyseus.js - onError => (${bb}) ${cb}`)
        })), this.hN((() => this.mC()))
      }
      connect(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Wb = arguments.length > 3 ? arguments[3] : void 0,
          ab = arguments.length > 4 ? arguments[4] : void 0;
        const Tb = new kb.Connection(Wb.protocol);
        if (sb.connection = Tb, Tb.events.onmessage = Xb.prototype.onMessageCallback.bind(sb), Tb.events.onclose = function(bb) {
            var kb;
            if (!sb.hasJoined) return null === (kb = console.warn) || void 0 === kb || kb.call(console, `Room connection was closed unexpectedly (${bb.code}): ${bb.reason}`), void sb.onError.invoke(bb.code, bb.reason);
            bb.code === fb.CloseCode.DEVMODE_RESTART && cb ? cb() : (sb.hN.invoke(bb.code, bb.reason), sb.destroy())
          }, Tb.events.onerror = function(bb) {
            var cb;
            null === (cb = console.warn) || void 0 === cb || cb.call(console, `Room, onError (${bb.code}): ${bb.reason}`), sb.onError.invoke(bb.code, bb.reason)
          }, "h3" === Wb.protocol) {
          const cb = new URL(bb);
          Tb.connect(cb.origin, Wb)
        } else Tb.connect(bb, ab)
      }
      leave() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((cb => {
          this.hN((bb => cb(bb))), this.connection ? bb ? (this.packr.buffer[0] = Wb.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.hN.invoke(fb.CloseCode.CONSENTED)
        }))
      }
      mN(bb, cb) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(bb), cb)
      }
      send(bb, cb) {
        const sb = {
          offset: 1
        };
        this.packr.buffer[0] = Wb.Protocol.ROOM_DATA, "string" === typeof bb ? Ib.encode.string(this.packr.buffer, bb, sb) : Ib.encode.number(this.packr.buffer, bb, sb), this.packr.position = 0;
        const kb = void 0 !== cb ? this.packr.pack(cb, 2048 + sb.offset) : this.packr.buffer.subarray(0, sb.offset);
        this.connection.send(kb)
      }
      sendUnreliable(bb, cb) {
        const sb = {
          offset: 1
        };
        this.packr.buffer[0] = Wb.Protocol.ROOM_DATA, "string" === typeof bb ? Ib.encode.string(this.packr.buffer, bb, sb) : Ib.encode.number(this.packr.buffer, bb, sb), this.packr.position = 0;
        const kb = void 0 !== cb ? this.packr.pack(cb, 2048 + sb.offset) : this.packr.buffer.subarray(0, sb.offset);
        this.connection.sendUnreliable(kb)
      }
      RV(bb, cb) {
        const sb = {
          offset: 1
        };
        if (this.packr.buffer[0] = Wb.Protocol.ROOM_DATA_BYTES, "string" === typeof bb ? Ib.encode.string(this.packr.buffer, bb, sb) : Ib.encode.number(this.packr.buffer, bb, sb), cb.byteLength + sb.offset > this.packr.buffer.byteLength) {
          const bb = new Uint8Array(sb.offset + cb.byteLength);
          bb.set(this.packr.buffer), this.packr.useBuffer(bb)
        }
        this.packr.buffer.set(cb, sb.offset), this.connection.send(this.packr.buffer.subarray(0, sb.offset + cb.byteLength))
      }
      get state() {
        return this.lC.getState()
      }
      mC() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.hN.clear(), this.onMessageHandlers.events = {}, this.lC instanceof Hb.aY && (this.lC.Vm.root.callbacks = {})
      }
      onMessageCallback(bb) {
        const cb = new Uint8Array(bb.data),
          sb = {
            offset: 1
          },
          kb = cb[0];
        if (kb === Wb.Protocol.JOIN_ROOM) {
          const bb = Ib.decode.utf8Read(cb, sb, cb[sb.offset++]);
          if (this.serializerId = Ib.decode.utf8Read(cb, sb, cb[sb.offset++]), !this.lC) {
            const bb = ab.getSerializer(this.serializerId);
            this.lC = new bb
          }
          cb.byteLength > sb.offset && this.lC.handshake && this.lC.handshake(cb, sb), this.reconnectionToken = `${this.roomId}:${bb}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Wb.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (kb === Wb.Protocol.ERROR) {
          const bb = Ib.decode.number(cb, sb),
            kb = Ib.decode.string(cb, sb);
          this.onError.invoke(bb, kb)
        } else if (kb === Wb.Protocol.LEAVE_ROOM) this.leave();
        else if (kb === Wb.Protocol.ROOM_STATE) this.lC.setState(cb, sb), this.onStateChange.invoke(this.lC.getState());
        else if (kb === Wb.Protocol.ROOM_STATE_PATCH) this.lC.patch(cb, sb), this.onStateChange.invoke(this.lC.getState());
        else if (kb === Wb.Protocol.ROOM_DATA) {
          const bb = Ib.decode.stringCheck(cb, sb) ? Ib.decode.string(cb, sb) : Ib.decode.number(cb, sb),
            kb = cb.byteLength > sb.offset ? Mb.unpack(cb, {
              start: sb.offset
            }) : void 0;
          this.dispatchMessage(bb, kb)
        } else if (kb === Wb.Protocol.ROOM_DATA_BYTES) {
          const bb = Ib.decode.stringCheck(cb, sb) ? Ib.decode.string(cb, sb) : Ib.decode.number(cb, sb);
          this.dispatchMessage(bb, cb.subarray(sb.offset))
        }
      }
      dispatchMessage(bb, cb) {
        var sb;
        const kb = this.getMessageHandlerKey(bb);
        this.onMessageHandlers.events[kb] ? this.onMessageHandlers.emit(kb, cb) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", bb, cb) : null === (sb = console.warn) || void 0 === sb || sb.call(console, `colyseus.js: onMessage() not registered for type '${bb}'.`)
      }
      destroy() {
        this.lC && this.lC.teardown()
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
    cb.bX = Xb
  },
  8769: (bb, cb, sb) => {
    var kb = sb(8686);
    let Wb;

    function ab() {
      if (!Wb) try {
        Wb = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (bb) {}
      return Wb || "undefined" === typeof globalThis.indexedDB || (Wb = new Tb), Wb || (Wb = {
        cache: {},
        setItem: function(bb, cb) {
          this.cache[bb] = cb
        },
        getItem: function(bb) {
          this.cache[bb]
        },
        removeItem: function(bb) {
          delete this.cache[bb]
        }
      }), Wb
    }
    class Tb {
      constructor() {
        this.dbPromise = new Promise((bb => {
          const cb = indexedDB.open("_colyseus_storage", 1);
          cb.onupgradeneeded = () => cb.result.createObjectStore("store"), cb.onsuccess = () => bb(cb.result)
        }))
      }
      tx(bb, cb) {
        return kb.__awaiter(this, void 0, void 0, (function*() {
          const sb = (yield this.dbPromise).transaction("store", bb).objectStore("store");
          return cb(sb)
        }))
      }
      setItem(bb, cb) {
        return this.tx("readwrite", (sb => sb.put(cb, bb))).then()
      }
      getItem(bb) {
        return kb.__awaiter(this, void 0, void 0, (function*() {
          const cb = yield this.tx("readonly", (cb => cb.get(bb)));
          return new Promise((bb => {
            cb.onsuccess = () => bb(cb.result)
          }))
        }))
      }
      removeItem(bb) {
        return this.tx("readwrite", (cb => cb.delete(bb))).then()
      }
    }
    cb.getItem = function(bb, cb) {
      const sb = ab().getItem(bb);
      "undefined" !== typeof Promise && sb instanceof Promise ? sb.then((bb => cb(bb))) : cb(sb)
    }, cb.removeItem = function(bb) {
      ab().removeItem(bb)
    }, cb.setItem = function(bb, cb) {
      ab().setItem(bb, cb)
    }
  },
  8742: (bb, cb) => {
    cb.createNanoEvents = () => ({
      emit(bb) {
        let cb = this.events[bb] || [];
        for (var sb = arguments.length, kb = new Array(sb > 1 ? sb - 1 : 0), Wb = 1; Wb < sb; Wb++) kb[Wb - 1] = arguments[Wb];
        for (let ab = 0, Tb = cb.length; ab < Tb; ab++) cb[ab](...kb)
      },
      events: {},
      on(bb, cb) {
        var sb;
        return (null === (sb = this.events[bb]) || void 0 === sb ? void 0 : sb.push(cb)) || (this.events[bb] = [cb]), () => {
          var sb;
          this.events[bb] = null === (sb = this.events[bb]) || void 0 === sb ? void 0 : sb.filter((bb => cb !== bb))
        }
      }
    })
  },
  8746: (bb, cb) => {
    class sb {
      constructor() {
        this.handlers = []
      }
      register(bb) {
        return this.handlers.push(bb), this
      }
      invoke() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        this.handlers.forEach((bb => bb.apply(this, cb)))
      }
      invokeAsync() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        return Promise.all(this.handlers.map((bb => bb.apply(this, cb))))
      }
      remove(bb) {
        const cb = this.handlers.indexOf(bb);
        this.handlers[cb] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    cb.EventEmitter = sb, cb.createSignal = function() {
      const bb = new sb;

      function cb(cb) {
        return bb.register(cb, null === this)
      }
      return cb.once = cb => {
        const sb = function() {
          for (var kb = arguments.length, Wb = new Array(kb), ab = 0; ab < kb; ab++) Wb[ab] = arguments[ab];
          cb.apply(this, Wb), bb.remove(sb)
        };
        bb.register(sb)
      }, cb.remove = cb => bb.remove(cb), cb.invoke = function() {
        return bb.invoke(...arguments)
      }, cb.invokeAsync = function() {
        return bb.invokeAsync(...arguments)
      }, cb.clear = () => bb.clear(), cb
    }
  },
  8689: (bb, cb) => {
    var sb;
    cb.CloseCode = void 0, (sb = cb.CloseCode || (cb.CloseCode = {}))[sb.CONSENTED = 4e3] = "CONSENTED", sb[sb.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class kb extends Error {
      constructor(bb, cb) {
        super(cb), this.name = "ServerError", this.code = bb
      }
    }
    class Wb extends Error {
      constructor(bb) {
        super(bb), this.name = "AbortError"
      }
    }
    cb.AbortError = Wb, cb.ServerError = kb
  },
  8677: (bb, cb, sb) => {
    sb(8681);
    var kb = sb(8683),
      Wb = sb(8735),
      ab = sb(8695),
      Tb = sb(8766),
      Ub = sb(8689),
      Ib = sb(8752),
      Hb = sb(8785),
      fb = sb(8740);
    fb.registerSerializer("schema", Ib.aY), fb.registerSerializer("none", Hb.NoneSerializer), cb.Client = kb.Client, cb.MatchMakeError = kb.MatchMakeError, Object.defineProperty(cb, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Wb.ErrorCode
      }
    }), Object.defineProperty(cb, "Protocol", {
      enumerable: !0,
      get: function() {
        return Wb.Protocol
      }
    }), cb.bX = ab.bX, cb.Auth = Tb.Auth, cb.ServerError = Ub.ServerError, cb.aY = Ib.aY, cb.getStateCallbacks = Ib.getStateCallbacks, cb.registerSerializer = fb.registerSerializer
  },
  8681: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = bb => null !== bb && "object" === typeof bb && bb.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8785: (bb, cb) => {
    cb.NoneSerializer = class {
      setState(bb) {}
      getState() {
        return null
      }
      patch(bb) {}
      teardown() {}
      handshake(bb) {}
    }
  },
  8752: (bb, cb, sb) => {
    var kb = sb(8713);
    cb.aY = class {
      setState(bb, cb) {
        this.Vm.decode(bb, cb)
      }
      getState() {
        return this.state
      }
      patch(bb, cb) {
        return this.Vm.decode(bb, cb)
      }
      teardown() {
        this.Vm.root.clearRefs()
      }
      handshake(bb, cb) {
        this.state ? (kb.Reflection.decode(bb, cb), this.Vm = new kb.Decoder(this.state)) : (this.Vm = kb.Reflection.decode(bb, cb), this.state = this.Vm.state)
      }
    }, cb.getStateCallbacks = function(bb) {
      try {
        return kb.getDecoderStateCallbacks(bb.lC.Vm)
      } catch (cb) {
        return
      }
    }
  },
  8740: (bb, cb) => {
    const sb = {};
    cb.getSerializer = function(bb) {
      const cb = sb[bb];
      if (!cb) throw new Error("missing serializer: " + bb);
      return cb
    }, cb.registerSerializer = function(bb, cb) {
      sb[bb] = cb
    }
  },
  8707: (bb, cb, sb) => {
    var kb = sb(8686),
      Wb = sb(8713);
    cb.H3TransportTransport = class {
      constructor(bb) {
        this.events = bb, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sb = cb.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(cb.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(bb, sb), this.wt.ready.then((bb => {
          console.log("WebTransport ready!", bb), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((bb => {
            this.reader = bb.value.readable.getReader(), this.writer = bb.value.writable.getWriter(), this.sendSeatReservation(cb.room.roomId, cb.sessionId, cb.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const cb = Wb.encode.number(this.lengthPrefixBuffer, bb.length, {
            offset: 0
          }),
          sb = new Uint8Array(cb + bb.length);
        sb.set(this.lengthPrefixBuffer.subarray(0, cb), 0), sb.set(bb, cb), this.writer.write(sb)
      }
      sendUnreliable(bb) {
        const cb = Wb.encode.number(this.lengthPrefixBuffer, bb.length, {
            offset: 0
          }),
          sb = new Uint8Array(cb + bb.length);
        sb.set(this.lengthPrefixBuffer.subarray(0, cb), 0), sb.set(bb, cb), this.unreliableWriter.write(sb)
      }
      close(bb, cb) {
        try {
          this.wt.close({
            closeCode: bb,
            reason: cb
          })
        } catch (sb) {
          console.error(sb)
        }
      }
      readIncomingData() {
        return kb.__awaiter(this, void 0, void 0, (function*() {
          let bb;
          for (; this.isOpen;) {
            try {
              bb = yield this.reader.read();
              const cb = bb.value,
                sb = {
                  offset: 0
                };
              do {
                const bb = Wb.decode.number(cb, sb);
                this.events.onmessage({
                  data: cb.subarray(sb.offset, sb.offset + bb)
                }), sb.offset += bb
              } while (sb.offset < cb.length)
            } catch (cb) {
              -1 === cb.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", cb);
              break
            }
            if (bb.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return kb.__awaiter(this, void 0, void 0, (function*() {
          let bb;
          for (; this.isOpen;) {
            try {
              bb = yield this.unreliableReader.read();
              const cb = bb.value,
                sb = {
                  offset: 0
                };
              do {
                const bb = Wb.decode.number(cb, sb);
                this.events.onmessage({
                  data: cb.subarray(sb.offset, sb.offset + bb)
                }), sb.offset += bb
              } while (sb.offset < cb.length)
            } catch (cb) {
              -1 === cb.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", cb);
              break
            }
            if (bb.done) break
          }
        }))
      }
      sendSeatReservation(bb, cb, sb) {
        const kb = {
            offset: 0
          },
          ab = [];
        Wb.encode.string(ab, bb, kb), Wb.encode.string(ab, cb, kb), sb && Wb.encode.string(ab, sb, kb), this.writer.write(new Uint8Array(ab).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8719: (bb, cb, sb) => {
    var kb = sb(8726);
    const Wb = globalThis.WebSocket || kb;
    cb.WebSocketTransport = class {
      constructor(bb) {
        this.events = bb
      }
      send(bb) {
        this.ws.send(bb)
      }
      sendUnreliable(bb) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(bb, cb) {
        try {
          this.ws = new Wb(bb, {
            headers: cb,
            protocols: this.protocols
          })
        } catch (sb) {
          this.ws = new Wb(bb, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(bb, cb) {
        this.ws.close(bb, cb)
      }
      get isOpen() {
        return this.ws.readyState === Wb.OPEN
      }
    }
  },
  8726: bb => {
    bb.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8762: (bb, cb, sb) => {
    function kb(bb, cb) {
      cb.headers = bb.headers || {}, cb.statusMessage = bb.statusText, cb.statusCode = bb.status, cb.data = bb.response
    }

    function Wb(bb, cb, sb) {
      return new Promise((function(Wb, ab) {
        sb = sb || {};
        var Tb, Ub, Ib, Hb = new XMLHttpRequest,
          fb = sb.body,
          Mb = sb.headers || {};
        for (Tb in sb.timeout && (Hb.timeout = sb.timeout), Hb.ontimeout = Hb.onerror = function(bb) {
            bb.timeout = "timeout" == bb.type, ab(bb)
          }, Hb.onabort = function(bb) {
            bb.aborted = !0, ab(bb)
          }, Hb.open(bb, cb.href || cb), Hb.onload = function() {
            for (Ib = Hb.getAllResponseHeaders().trim().split(/[\r\n]+/), kb(Hb, Hb); Ub = Ib.shift();) Ub = Ub.split(": "), Hb.headers[Ub.shift().toLowerCase()] = Ub.join(": ");
            if ((Ub = Hb.headers["content-type"]) && ~Ub.indexOf("application/json")) try {
              Hb.data = JSON.parse(Hb.data, sb.reviver)
            } catch (bb) {
              return kb(Hb, bb), ab(bb)
            }(Hb.status >= 400 ? ab : Wb)(Hb)
          }, typeof FormData < "u" && fb instanceof FormData || fb && "object" == typeof fb && (Mb["content-type"] = "application/json", fb = JSON.stringify(fb)), Hb.withCredentials = !!sb.withCredentials, Mb) Hb.setRequestHeader(Tb, Mb[Tb]);
        Hb.send(fb), sb.signal && sb.signal.addEventListener("abort", (function() {
          Hb.abort()
        }))
      }))
    }
    sb.r(cb), sb.d(cb, {
      del: () => Ib,
      get: () => ab,
      patch: () => Ub,
      post: () => Tb,
      put: () => Hb,
      send: () => Wb
    });
    var ab = Wb.bind(Wb, "GET"),
      Tb = Wb.bind(Wb, "POST"),
      Ub = Wb.bind(Wb, "PATCH"),
      Ib = Wb.bind(Wb, "DELETE"),
      Hb = Wb.bind(Wb, "PUT")
  },
  8757: (bb, cb, sb) => {
    var kb, Wb, ab;
    sb.r(cb), sb.d(cb, {
      ALWAYS: () => Sc,
      C1: () => Lb,
      DECIMAL_FIT: () => vc,
      DECIMAL_ROUND: () => Rc,
      Decoder: () => Ic,
      Encoder: () => rc,
      FLOAT32_OPTIONS: () => nc,
      NEVER: () => oc,
      Packr: () => ic,
      RESERVE_START_SPACE: () => jc,
      RESET_BUFFER_MODE: () => xc,
      REUSE_BUFFER_MODE: () => Fc,
      Unpackr: () => Bb,
      addExtension: () => zc,
      clearSource: () => Tc,
      decode: () => Xc,
      decodeIter: () => pc,
      encode: () => wc,
      encodeIter: () => bs,
      isNativeAccelerationEnabled: () => qb,
      mapsAsObjects: () => ss,
      pack: () => Ac,
      roundFloat32: () => Nc,
      unpack: () => fc,
      unpackMultiple: () => Mc,
      useRecords: () => cs
    });
    try {
      kb = new TextDecoder
    } catch (ks) {}
    var Tb = 0;
    const Ub = [];
    var Ib, Hb, fb, Mb, Xb, nb = Ub,
      mb = 0,
      lb = {},
      Qb = 0,
      eb = 0,
      Cb = [],
      Nb = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class Vb {}
    const Lb = new Vb;
    Lb.name = "MessagePack 0xC1";
    var ub, Yb, hb, Jb = !1,
      gb = 2;
    try {
      new Function("")
    } catch (ks) {
      gb = 1 / 0
    }
    class Bb {
      constructor(bb) {
        bb && (!1 === bb.useRecords && void 0 === bb.mapsAsObjects && (bb.mapsAsObjects = !0), bb.sequential && !1 !== bb.trusted && (bb.trusted = !0, bb.structures || 0 == bb.useRecords || (bb.structures = [], bb.maxSharedStructures || (bb.maxSharedStructures = 0))), bb.structures ? bb.structures.sharedLength = bb.structures.length : bb.getStructures && ((bb.structures = []).uninitialized = !0, bb.structures.sharedLength = 0), bb.int64AsNumber && (bb.int64AsType = "number")), Object.assign(this, bb)
      }
      unpack(bb, cb) {
        if (Wb) return ac((() => (Tc(), this ? this.unpack(bb, cb) : Bb.prototype.unpack.call(Nb, bb, cb))));
        bb.buffer || bb.constructor !== ArrayBuffer || (bb = "undefined" !== typeof Buffer ? Buffer.from(bb) : new Uint8Array(bb)), "object" === typeof cb ? (ab = cb.end || bb.length, Tb = cb.start || 0) : (Tb = 0, ab = cb > -1 ? cb : bb.length), mb = 0, eb = 0, Hb = null, nb = Ub, fb = null, Wb = bb;
        try {
          Xb = bb.dataView || (bb.dataView = new DataView(bb.buffer, bb.byteOffset, bb.byteLength))
        } catch (ks) {
          if (Wb = null, bb instanceof Uint8Array) throw ks;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (bb && "object" == typeof bb ? bb.constructor.name : typeof bb))
        }
        if (this instanceof Bb) {
          if (lb = this, this.structures) return Ib = this.structures, tb(cb);
          (!Ib || Ib.length > 0) && (Ib = [])
        } else lb = Nb, (!Ib || Ib.length > 0) && (Ib = []);
        return tb(cb)
      }
      unpackMultiple(bb, cb) {
        let sb, kb = 0;
        try {
          Jb = !0;
          let Wb = bb.length,
            ab = this ? this.unpack(bb, Wb) : Hc.unpack(bb, Wb);
          if (!cb) {
            for (sb = [ab]; Tb < Wb;) kb = Tb, sb.push(tb());
            return sb
          }
          if (!1 === cb(ab, kb, Tb)) return;
          for (; Tb < Wb;)
            if (kb = Tb, !1 === cb(tb(), kb, Tb)) return
        } catch (ks) {
          throw ks.lastPosition = kb, ks.values = sb, ks
        } finally {
          Jb = !1, Tc()
        }
      }
      _mergeStructures(bb, cb) {
        Yb && (bb = Yb.call(this, bb)), bb = bb || [], Object.isFrozen(bb) && (bb = bb.map((bb => bb.slice(0))));
        for (let sb = 0, kb = bb.length; sb < kb; sb++) {
          let cb = bb[sb];
          cb && (cb.isShared = !0, sb >= 32 && (cb.highByte = sb - 32 >> 5))
        }
        bb.sharedLength = bb.length;
        for (let sb in cb || [])
          if (sb >= 0) {
            let kb = bb[sb],
              Wb = cb[sb];
            Wb && (kb && ((bb.restoreStructures || (bb.restoreStructures = []))[sb] = kb), bb[sb] = Wb)
          } return this.structures = bb
      }
      decode(bb, cb) {
        return this.unpack(bb, cb)
      }
    }

    function tb(bb) {
      try {
        if (!lb.trusted && !Jb) {
          let bb = Ib.sharedLength || 0;
          bb < Ib.length && (Ib.length = bb)
        }
        let cb;
        if (lb.randomAccessStructure && Wb[Tb] < 64 && Wb[Tb] >= 32 && ub ? (cb = ub(Wb, Tb, ab, lb), Wb = null, bb && bb.lazy || !cb || (cb = cb.toJSON()), Tb = ab) : cb = Pb(), fb && (Tb = fb.postBundlePosition, fb = null), Jb && (Ib.restoreStructures = null), Tb == ab) Ib && Ib.restoreStructures && yb(), Ib = null, Wb = null, Mb && (Mb = null);
        else {
          if (Tb > ab) throw new Error("Unexpected end of MessagePack data");
          if (!Jb) {
            let bb;
            try {
              bb = JSON.stringify(cb, ((bb, cb) => "bigint" === typeof cb ? `${cb}n` : cb)).slice(0, 100)
            } catch (ks) {
              bb = "(JSON view not available " + ks + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + bb)
          }
        }
        return cb
      } catch (ks) {
        throw Ib && Ib.restoreStructures && yb(), Tc(), (ks instanceof RangeError || ks.message.startsWith("Unexpected end of buffer") || Tb > ab) && (ks.incomplete = !0), ks
      }
    }

    function yb() {
      for (let bb in Ib.restoreStructures) Ib[bb] = Ib.restoreStructures[bb];
      Ib.restoreStructures = null
    }

    function Pb() {
      let bb = Wb[Tb++];
      if (bb < 160) {
        if (bb < 128) {
          if (bb < 64) return bb;
          {
            let cb = Ib[63 & bb] || lb.getStructures && Ob()[63 & bb];
            return cb ? (cb.read || (cb.read = Eb(cb, 63 & bb)), cb.read()) : bb
          }
        }
        if (bb < 144) {
          if (bb -= 128, lb.mapsAsObjects) {
            let cb = {};
            for (let sb = 0; sb < bb; sb++) {
              let bb = jb();
              "__proto__" === bb && (bb = "__proto_"), cb[bb] = Pb()
            }
            return cb
          } {
            let cb = new Map;
            for (let sb = 0; sb < bb; sb++) cb.set(Pb(), Pb());
            return cb
          }
        } {
          bb -= 144;
          let cb = new Array(bb);
          for (let sb = 0; sb < bb; sb++) cb[sb] = Pb();
          return lb.freezeData ? Object.freeze(cb) : cb
        }
      }
      if (bb < 192) {
        let cb = bb - 160;
        if (eb >= Tb) return Hb.slice(Tb - Qb, (Tb += cb) - Qb);
        if (0 == eb && ab < 140) {
          let bb = cb < 16 ? Sb(cb) : ob(cb);
          if (null != bb) return bb
        }
        return Gb(cb)
      } {
        let cb;
        switch (bb) {
          case 192:
            return null;
          case 193:
            return fb ? (cb = Pb(), cb > 0 ? fb[1].slice(fb.position1, fb.position1 += cb) : fb[0].slice(fb.position0, fb.position0 -= cb)) : Lb;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (cb = Wb[Tb++], void 0 === cb) throw new Error("Unexpected end of buffer");
            return vb(cb);
          case 197:
            return cb = Xb.getUint16(Tb), Tb += 2, vb(cb);
          case 198:
            return cb = Xb.getUint32(Tb), Tb += 4, vb(cb);
          case 199:
            return Fb(Wb[Tb++]);
          case 200:
            return cb = Xb.getUint16(Tb), Tb += 2, Fb(cb);
          case 201:
            return cb = Xb.getUint32(Tb), Tb += 4, Fb(cb);
          case 202:
            if (cb = Xb.getFloat32(Tb), lb.useFloat32 > 2) {
              let bb = Uc[(127 & Wb[Tb]) << 1 | Wb[Tb + 1] >> 7];
              return Tb += 4, (bb * cb + (cb > 0 ? .5 : -.5) | 0) / bb
            }
            return Tb += 4, cb;
          case 203:
            return cb = Xb.getFloat64(Tb), Tb += 8, cb;
          case 204:
            return Wb[Tb++];
          case 205:
            return cb = Xb.getUint16(Tb), Tb += 2, cb;
          case 206:
            return cb = Xb.getUint32(Tb), Tb += 4, cb;
          case 207:
            return "number" === lb.int64AsType ? (cb = 4294967296 * Xb.getUint32(Tb), cb += Xb.getUint32(Tb + 4)) : "string" === lb.int64AsType ? cb = Xb.getBigUint64(Tb).toString() : "auto" === lb.int64AsType ? (cb = Xb.getBigUint64(Tb), cb <= BigInt(2) << BigInt(52) && (cb = Number(cb))) : cb = Xb.getBigUint64(Tb), Tb += 8, cb;
          case 208:
            return Xb.getInt8(Tb++);
          case 209:
            return cb = Xb.getInt16(Tb), Tb += 2, cb;
          case 210:
            return cb = Xb.getInt32(Tb), Tb += 4, cb;
          case 211:
            return "number" === lb.int64AsType ? (cb = 4294967296 * Xb.getInt32(Tb), cb += Xb.getUint32(Tb + 4)) : "string" === lb.int64AsType ? cb = Xb.getBigInt64(Tb).toString() : "auto" === lb.int64AsType ? (cb = Xb.getBigInt64(Tb), cb >= BigInt(-2) << BigInt(52) && cb <= BigInt(2) << BigInt(52) && (cb = Number(cb))) : cb = Xb.getBigInt64(Tb), Tb += 8, cb;
          case 212:
            if (cb = Wb[Tb++], 114 == cb) return bc(63 & Wb[Tb++]);
            {
              let bb = Cb[cb];
              if (bb) return bb.read ? (Tb++, bb.read(Pb())) : bb.noBuffer ? (Tb++, bb()) : bb(Wb.subarray(Tb, ++Tb));
              throw new Error("Unknown extension " + cb)
            }
          case 213:
            return cb = Wb[Tb], 114 == cb ? (Tb++, bc(63 & Wb[Tb++], Wb[Tb++])) : Fb(2);
          case 214:
            return Fb(4);
          case 215:
            return Fb(8);
          case 216:
            return Fb(16);
          case 217:
            return cb = Wb[Tb++], eb >= Tb ? Hb.slice(Tb - Qb, (Tb += cb) - Qb) : Kb(cb);
          case 218:
            return cb = Xb.getUint16(Tb), eb >= (Tb += 2) ? Hb.slice(Tb - Qb, (Tb += cb) - Qb) : Zb(cb);
          case 219:
            return cb = Xb.getUint32(Tb), eb >= (Tb += 4) ? Hb.slice(Tb - Qb, (Tb += cb) - Qb) : zb(cb);
          case 220:
            return cb = Xb.getUint16(Tb), Tb += 2, Ab(cb);
          case 221:
            return cb = Xb.getUint32(Tb), Tb += 4, Ab(cb);
          case 222:
            return cb = Xb.getUint16(Tb), Tb += 2, wb(cb);
          case 223:
            return cb = Xb.getUint32(Tb), Tb += 4, wb(cb);
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
    const Db = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function Eb(bb, cb) {
      function sb() {
        if (sb.count++ > gb) {
          let sb = bb.read = new Function("r", "return function(){return " + (lb.freezeData ? "Object.freeze" : "") + "({" + bb.map((bb => "__proto__" === bb ? "__proto_:r()" : Db.test(bb) ? bb + ":r()" : "[" + JSON.stringify(bb) + "]:r()")).join(",") + "})}")(Pb);
          return 0 === bb.highByte && (bb.read = ib(cb, bb.read)), sb()
        }
        let kb = {};
        for (let cb = 0, sb = bb.length; cb < sb; cb++) {
          let sb = bb[cb];
          "__proto__" === sb && (sb = "__proto_"), kb[sb] = Pb()
        }
        return lb.freezeData ? Object.freeze(kb) : kb
      }
      return sb.count = 0, 0 === bb.highByte ? ib(cb, sb) : sb
    }
    const ib = (bb, cb) => function() {
      let sb = Wb[Tb++];
      if (0 === sb) return cb();
      let kb = bb < 32 ? -(bb + (sb << 5)) : bb + (sb << 5),
        ab = Ib[kb] || Ob()[kb];
      if (!ab) throw new Error("Record id is not defined for " + kb);
      return ab.read || (ab.read = Eb(ab, bb)), ab.read()
    };

    function Ob() {
      let bb = ac((() => (Wb = null, lb.getStructures())));
      return Ib = lb._mergeStructures(bb, Ib)
    }
    var Gb = db,
      Kb = db,
      Zb = db,
      zb = db;
    let qb = !1;

    function db(bb) {
      let cb;
      if (bb < 16 && (cb = Sb(bb))) return cb;
      if (bb > 64 && kb) return kb.decode(Wb.subarray(Tb, Tb += bb));
      const sb = Tb + bb,
        ab = [];
      for (cb = ""; Tb < sb;) {
        const bb = Wb[Tb++];
        if (0 === (128 & bb)) ab.push(bb);
        else if (192 === (224 & bb)) {
          const cb = 63 & Wb[Tb++];
          ab.push((31 & bb) << 6 | cb)
        } else if (224 === (240 & bb)) {
          const cb = 63 & Wb[Tb++],
            sb = 63 & Wb[Tb++];
          ab.push((31 & bb) << 12 | cb << 6 | sb)
        } else if (240 === (248 & bb)) {
          let cb = (7 & bb) << 18 | (63 & Wb[Tb++]) << 12 | (63 & Wb[Tb++]) << 6 | 63 & Wb[Tb++];
          cb > 65535 && (cb -= 65536, ab.push(cb >>> 10 & 1023 | 55296), cb = 56320 | 1023 & cb), ab.push(cb)
        } else ab.push(bb);
        ab.length >= 4096 && (cb += rb.apply(String, ab), ab.length = 0)
      }
      return ab.length > 0 && (cb += rb.apply(String, ab)), cb
    }

    function Ab(bb) {
      let cb = new Array(bb);
      for (let sb = 0; sb < bb; sb++) cb[sb] = Pb();
      return lb.freezeData ? Object.freeze(cb) : cb
    }

    function wb(bb) {
      if (lb.mapsAsObjects) {
        let cb = {};
        for (let sb = 0; sb < bb; sb++) {
          let bb = jb();
          "__proto__" === bb && (bb = "__proto_"), cb[bb] = Pb()
        }
        return cb
      } {
        let cb = new Map;
        for (let sb = 0; sb < bb; sb++) cb.set(Pb(), Pb());
        return cb
      }
    }
    var rb = String.fromCharCode;

    function ob(bb) {
      let cb = Tb,
        sb = new Array(bb);
      for (let kb = 0; kb < bb; kb++) {
        const bb = Wb[Tb++];
        if ((128 & bb) > 0) return void(Tb = cb);
        sb[kb] = bb
      }
      return rb.apply(String, sb)
    }

    function Sb(bb) {
      if (bb < 4) {
        if (bb < 2) {
          if (0 === bb) return "";
          {
            let bb = Wb[Tb++];
            return (128 & bb) > 1 ? void(Tb -= 1) : rb(bb)
          }
        } {
          let cb = Wb[Tb++],
            sb = Wb[Tb++];
          if ((128 & cb) > 0 || (128 & sb) > 0) return void(Tb -= 2);
          if (bb < 3) return rb(cb, sb);
          let kb = Wb[Tb++];
          return (128 & kb) > 0 ? void(Tb -= 3) : rb(cb, sb, kb)
        }
      } {
        let cb = Wb[Tb++],
          sb = Wb[Tb++],
          kb = Wb[Tb++],
          ab = Wb[Tb++];
        if ((128 & cb) > 0 || (128 & sb) > 0 || (128 & kb) > 0 || (128 & ab) > 0) return void(Tb -= 4);
        if (bb < 6) {
          if (4 === bb) return rb(cb, sb, kb, ab);
          {
            let bb = Wb[Tb++];
            return (128 & bb) > 0 ? void(Tb -= 5) : rb(cb, sb, kb, ab, bb)
          }
        }
        if (bb < 8) {
          let Ub = Wb[Tb++],
            Ib = Wb[Tb++];
          if ((128 & Ub) > 0 || (128 & Ib) > 0) return void(Tb -= 6);
          if (bb < 7) return rb(cb, sb, kb, ab, Ub, Ib);
          let Hb = Wb[Tb++];
          return (128 & Hb) > 0 ? void(Tb -= 7) : rb(cb, sb, kb, ab, Ub, Ib, Hb)
        } {
          let Ub = Wb[Tb++],
            Ib = Wb[Tb++],
            Hb = Wb[Tb++],
            fb = Wb[Tb++];
          if ((128 & Ub) > 0 || (128 & Ib) > 0 || (128 & Hb) > 0 || (128 & fb) > 0) return void(Tb -= 8);
          if (bb < 10) {
            if (8 === bb) return rb(cb, sb, kb, ab, Ub, Ib, Hb, fb);
            {
              let bb = Wb[Tb++];
              return (128 & bb) > 0 ? void(Tb -= 9) : rb(cb, sb, kb, ab, Ub, Ib, Hb, fb, bb)
            }
          }
          if (bb < 12) {
            let Mb = Wb[Tb++],
              Xb = Wb[Tb++];
            if ((128 & Mb) > 0 || (128 & Xb) > 0) return void(Tb -= 10);
            if (bb < 11) return rb(cb, sb, kb, ab, Ub, Ib, Hb, fb, Mb, Xb);
            let nb = Wb[Tb++];
            return (128 & nb) > 0 ? void(Tb -= 11) : rb(cb, sb, kb, ab, Ub, Ib, Hb, fb, Mb, Xb, nb)
          } {
            let Mb = Wb[Tb++],
              Xb = Wb[Tb++],
              nb = Wb[Tb++],
              mb = Wb[Tb++];
            if ((128 & Mb) > 0 || (128 & Xb) > 0 || (128 & nb) > 0 || (128 & mb) > 0) return void(Tb -= 12);
            if (bb < 14) {
              if (12 === bb) return rb(cb, sb, kb, ab, Ub, Ib, Hb, fb, Mb, Xb, nb, mb);
              {
                let bb = Wb[Tb++];
                return (128 & bb) > 0 ? void(Tb -= 13) : rb(cb, sb, kb, ab, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, bb)
              }
            } {
              let lb = Wb[Tb++],
                Qb = Wb[Tb++];
              if ((128 & lb) > 0 || (128 & Qb) > 0) return void(Tb -= 14);
              if (bb < 15) return rb(cb, sb, kb, ab, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb);
              let eb = Wb[Tb++];
              return (128 & eb) > 0 ? void(Tb -= 15) : rb(cb, sb, kb, ab, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb)
            }
          }
        }
      }
    }

    function Rb() {
      let bb, cb = Wb[Tb++];
      if (cb < 192) bb = cb - 160;
      else switch (cb) {
        case 217:
          bb = Wb[Tb++];
          break;
        case 218:
          bb = Xb.getUint16(Tb), Tb += 2;
          break;
        case 219:
          bb = Xb.getUint32(Tb), Tb += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return db(bb)
    }

    function vb(bb) {
      return lb.copyBuffers ? Uint8Array.prototype.slice.call(Wb, Tb, Tb += bb) : Wb.subarray(Tb, Tb += bb)
    }

    function Fb(bb) {
      let cb = Wb[Tb++];
      if (Cb[cb]) {
        let sb;
        return Cb[cb](Wb.subarray(Tb, sb = Tb += bb), (bb => {
          Tb = bb;
          try {
            return Pb()
          } finally {
            Tb = sb
          }
        }))
      }
      throw new Error("Unknown extension type " + cb)
    }
    var xb = new Array(4096);

    function jb() {
      let bb = Wb[Tb++];
      if (!(bb >= 160 && bb < 192)) return Tb--, pb(Pb());
      if (bb -= 160, eb >= Tb) return Hb.slice(Tb - Qb, (Tb += bb) - Qb);
      if (!(0 == eb && ab < 180)) return Gb(bb);
      let cb, sb = 4095 & (bb << 5 ^ (bb > 1 ? Xb.getUint16(Tb) : bb > 0 ? Wb[Tb] : 0)),
        kb = xb[sb],
        Ub = Tb,
        Ib = Tb + bb - 3,
        fb = 0;
      if (kb && kb.bytes == bb) {
        for (; Ub < Ib;) {
          if (cb = Xb.getUint32(Ub), cb != kb[fb++]) {
            Ub = 1879048192;
            break
          }
          Ub += 4
        }
        for (Ib += 3; Ub < Ib;)
          if (cb = Wb[Ub++], cb != kb[fb++]) {
            Ub = 1879048192;
            break
          } if (Ub === Ib) return Tb = Ub, kb.string;
        Ib -= 3, Ub = Tb
      }
      for (kb = [], xb[sb] = kb, kb.bytes = bb; Ub < Ib;) cb = Xb.getUint32(Ub), kb.push(cb), Ub += 4;
      for (Ib += 3; Ub < Ib;) cb = Wb[Ub++], kb.push(cb);
      let Mb = bb < 16 ? Sb(bb) : ob(bb);
      return kb.string = null != Mb ? Mb : Gb(bb)
    }

    function pb(bb) {
      if ("string" === typeof bb) return bb;
      if ("number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb) return bb.toString();
      if (null == bb) return bb + "";
      if (lb.allowArraysInMapKeys && Array.isArray(bb) && bb.flat().every((bb => ["string", "number", "boolean", "bigint"].includes(typeof bb)))) return bb.flat().toString();
      throw new Error("Invalid property type for record: " + typeof bb)
    }
    const bc = (bb, cb) => {
      let sb = Pb().map(pb),
        kb = bb;
      void 0 !== cb && (bb = bb < 32 ? -((cb << 5) + bb) : (cb << 5) + bb, sb.highByte = cb);
      let Wb = Ib[bb];
      return Wb && (Wb.isShared || Jb) && ((Ib.restoreStructures || (Ib.restoreStructures = []))[bb] = Wb), Ib[bb] = sb, sb.read = Eb(sb, kb), sb.read()
    };
    Cb[0] = () => {}, Cb[0].noBuffer = !0, Cb[66] = bb => {
      let cb = bb.length,
        sb = BigInt(128 & bb[0] ? bb[0] - 256 : bb[0]);
      for (let kb = 1; kb < cb; kb++) sb <<= BigInt(8), sb += BigInt(bb[kb]);
      return sb
    };
    let cc = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Cb[101] = () => {
      let bb = Pb();
      return (cc[bb[0]] || Error)(bb[1], {
        cause: bb[2]
      })
    }, Cb[105] = bb => {
      if (!1 === lb.structuredClone) throw new Error("Structured clone extension is disabled");
      let cb = Xb.getUint32(Tb - 4);
      Mb || (Mb = new Map);
      let sb, kb = Wb[Tb];
      sb = kb >= 144 && kb < 160 || 220 == kb || 221 == kb ? [] : {};
      let ab = {
        target: sb
      };
      Mb.set(cb, ab);
      let Ub = Pb();
      return ab.used ? Object.assign(sb, Ub) : (ab.target = Ub, Ub)
    }, Cb[112] = bb => {
      if (!1 === lb.structuredClone) throw new Error("Structured clone extension is disabled");
      let cb = Xb.getUint32(Tb - 4),
        sb = Mb.get(cb);
      return sb.used = !0, sb.target
    }, Cb[115] = () => new Set(Pb());
    const sc = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((bb => bb + "Array"));
    let kc = "object" === typeof globalThis ? globalThis : window;
    Cb[116] = bb => {
      let cb = bb[0],
        sb = sc[cb];
      if (!sb) {
        if (16 === cb) {
          let cb = new ArrayBuffer(bb.length - 1);
          return new Uint8Array(cb).set(bb.subarray(1)), cb
        }
        throw new Error("Could not find typed array for code " + cb)
      }
      return new kc[sb](Uint8Array.prototype.slice.call(bb, 1).buffer)
    }, Cb[120] = () => {
      let bb = Pb();
      return new RegExp(bb[0], bb[1])
    };
    const Wc = [];

    function ac(bb) {
      hb && hb();
      let cb = ab,
        sb = Tb,
        kb = mb,
        Ub = Qb,
        Cb = eb,
        Nb = Hb,
        Vb = nb,
        Lb = Mb,
        ub = fb,
        Yb = new Uint8Array(Wb.slice(0, ab)),
        gb = Ib,
        Bb = Ib.slice(0, Ib.length),
        tb = lb,
        yb = Jb,
        Pb = bb();
      return ab = cb, Tb = sb, mb = kb, Qb = Ub, eb = Cb, Hb = Nb, nb = Vb, Mb = Lb, fb = ub, Wb = Yb, Jb = yb, (Ib = gb).splice(0, Ib.length, ...Bb), lb = tb, Xb = new DataView(Wb.buffer, Wb.byteOffset, Wb.byteLength), Pb
    }

    function Tc() {
      Wb = null, Mb = null, Ib = null
    }
    Cb[98] = bb => {
      let cb = (bb[0] << 24) + (bb[1] << 16) + (bb[2] << 8) + bb[3],
        sb = Tb;
      return Tb += cb - bb.length, fb = Wc, (fb = [Rb(), Rb()]).position0 = 0, fb.position1 = 0, fb.postBundlePosition = Tb, Tb = sb, Pb()
    }, Cb[255] = bb => 4 == bb.length ? new Date(1e3 * (16777216 * bb[0] + (bb[1] << 16) + (bb[2] << 8) + bb[3])) : 8 == bb.length ? new Date(((bb[0] << 22) + (bb[1] << 14) + (bb[2] << 6) + (bb[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & bb[3]) + 16777216 * bb[4] + (bb[5] << 16) + (bb[6] << 8) + bb[7])) : 12 == bb.length ? new Date(((bb[0] << 24) + (bb[1] << 16) + (bb[2] << 8) + bb[3]) / 1e6 + 1e3 * ((128 & bb[4] ? -281474976710656 : 0) + 1099511627776 * bb[6] + 4294967296 * bb[7] + 16777216 * bb[8] + (bb[9] << 16) + (bb[10] << 8) + bb[11])) : new Date("invalid");
    const Uc = new Array(147);
    for (let Ws = 0; Ws < 256; Ws++) Uc[Ws] = +("1e" + Math.floor(45.15 - .30103 * Ws));
    const Ic = Bb;
    var Hc = new Bb({
      useRecords: !1
    });
    const fc = Hc.unpack,
      Mc = Hc.unpackMultiple,
      Xc = Hc.unpack,
      nc = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let mc, lc, Qc, ec = new Float32Array(1),
      Cc = new Uint8Array(ec.buffer, 0, 4);

    function Nc(bb) {
      ec[0] = bb;
      let cb = Uc[(127 & Cc[3]) << 1 | Cc[2] >> 7];
      return (cb * bb + (bb > 0 ? .5 : -.5) | 0) / cb
    }
    try {
      mc = new TextEncoder
    } catch (ks) {}
    const Vc = "undefined" !== typeof Buffer,
      Lc = Vc ? function(bb) {
        return Buffer.allocUnsafeSlow(bb)
      } : Uint8Array,
      uc = Vc ? Buffer : Uint8Array,
      Yc = Vc ? 4294967296 : 2144337920;
    let hc, Jc, gc, Bc, tc, yc = 0,
      Pc = null;
    const Dc = /[\u0080-\uFFFF]/,
      Ec = Symbol("record-id");
    class ic extends Bb {
      constructor(bb) {
        let cb, sb, kb, Wb;
        super(bb), this.offset = 0;
        let ab = uc.prototype.utf8Write ? function(bb, cb) {
            return hc.utf8Write(bb, cb, hc.byteLength - cb)
          } : !(!mc || !mc.encodeInto) && function(bb, cb) {
            return mc.encodeInto(bb, hc.subarray(cb)).written
          },
          Tb = this;
        bb || (bb = {});
        let Ub = bb && bb.sequential,
          Ib = bb.structures || bb.saveStructures,
          Hb = bb.maxSharedStructures;
        if (null == Hb && (Hb = Ib ? 32 : 0), Hb > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        bb.structuredClone && void 0 == bb.moreTypes && (this.moreTypes = !0);
        let fb = bb.maxOwnStructures;
        null == fb && (fb = Ib ? 32 : 64), this.structures || 0 == bb.useRecords || (this.structures = []);
        let Mb = Hb > 32 || fb + Hb > 64,
          Xb = Hb + 64,
          nb = Hb + fb + 64;
        if (nb > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let mb = [],
          lb = 0,
          Qb = 0;
        this.pack = this.encode = function(bb, ab) {
          if (hc || (hc = new Lc(8192), gc = hc.dataView || (hc.dataView = new DataView(hc.buffer, 0, 8192)), yc = 0), Bc = hc.length - 10, Bc - yc < 2048 ? (hc = new Lc(hc.length), gc = hc.dataView || (hc.dataView = new DataView(hc.buffer, 0, hc.length)), Bc = hc.length - 10, yc = 0) : yc = yc + 7 & 2147483640, cb = yc, ab & jc && (yc += 255 & ab), Wb = Tb.structuredClone ? new Map : null, Tb.bundleStrings && "string" !== typeof bb ? (Pc = [], Pc.size = 1 / 0) : Pc = null, kb = Tb.structures, kb) {
            kb.uninitialized && (kb = Tb._mergeStructures(Tb.getStructures()));
            let bb = kb.sharedLength || 0;
            if (bb > Hb) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + kb.sharedLength);
            if (!kb.transitions) {
              kb.transitions = Object.create(null);
              for (let cb = 0; cb < bb; cb++) {
                let bb = kb[cb];
                if (!bb) continue;
                let sb, Wb = kb.transitions;
                for (let cb = 0, kb = bb.length; cb < kb; cb++) {
                  let kb = bb[cb];
                  sb = Wb[kb], sb || (sb = Wb[kb] = Object.create(null)), Wb = sb
                }
                Wb[Ec] = cb + 64
              }
              this.lastNamedStructuresLength = bb
            }
            Ub || (kb.nextId = bb + 64)
          }
          let Ib;
          sb && (sb = !1);
          try {
            Tb.randomAccessStructure && bb && bb.constructor && bb.constructor === Object ? Bb(bb) : Nb(bb);
            let sb = Pc;
            if (Pc && Zc(cb, Nb, 0), Wb && Wb.idsToInsert) {
              let bb = Wb.idsToInsert.sort(((bb, cb) => bb.offset > cb.offset ? 1 : -1)),
                kb = bb.length,
                ab = -1;
              for (; sb && kb > 0;) {
                let Wb = bb[--kb].offset + cb;
                Wb < sb.stringsPosition + cb && -1 === ab && (ab = 0), Wb > sb.position + cb ? ab >= 0 && (ab += 6) : (ab >= 0 && (gc.setUint32(sb.position + cb, gc.getUint32(sb.position + cb) + ab), ab = -1), sb = sb.previous, kb++)
              }
              ab >= 0 && sb && gc.setUint32(sb.position + cb, gc.getUint32(sb.position + cb) + ab), yc += 6 * bb.length, yc > Bc && hb(yc), Tb.offset = yc;
              let Ub = function(bb, cb) {
                let sb, kb = 6 * cb.length,
                  Wb = bb.length - kb;
                for (; sb = cb.pop();) {
                  let cb = sb.offset,
                    ab = sb.id;
                  bb.copyWithin(cb + kb, cb, Wb), kb -= 6;
                  let Tb = cb + kb;
                  bb[Tb++] = 214, bb[Tb++] = 105, bb[Tb++] = ab >> 24, bb[Tb++] = ab >> 16 & 255, bb[Tb++] = ab >> 8 & 255, bb[Tb++] = 255 & ab, Wb = cb
                }
                return bb
              }(hc.subarray(cb, yc), bb);
              return Wb = null, Ub
            }
            return Tb.offset = yc, ab & Fc ? (hc.start = cb, hc.end = yc, hc) : hc.subarray(cb, yc)
          } catch (ks) {
            throw Ib = ks, ks
          } finally {
            if (kb && (eb(), sb && Tb.saveStructures)) {
              let sb = kb.sharedLength || 0,
                Wb = hc.subarray(cb, yc),
                Ub = qc(kb, Tb);
              if (!Ib) return !1 === Tb.saveStructures(Ub, Ub.isCompatible) ? Tb.pack(bb, ab) : (Tb.lastNamedStructuresLength = sb, hc.length > 1073741824 && (hc = null), Wb)
            }
            hc.length > 1073741824 && (hc = null), ab & xc && (yc = cb)
          }
        };
        const eb = () => {
            Qb < 10 && Qb++;
            let bb = kb.sharedLength || 0;
            if (kb.length > bb && !Ub && (kb.length = bb), lb > 1e4) kb.transitions = null, Qb = 0, lb = 0, mb.length > 0 && (mb = []);
            else if (mb.length > 0 && !Ub) {
              for (let bb = 0, cb = mb.length; bb < cb; bb++) mb[bb][Ec] = 0;
              mb = []
            }
          },
          Cb = bb => {
            var cb = bb.length;
            cb < 16 ? hc[yc++] = 144 | cb : cb < 65536 ? (hc[yc++] = 220, hc[yc++] = cb >> 8, hc[yc++] = 255 & cb) : (hc[yc++] = 221, gc.setUint32(yc, cb), yc += 4);
            for (let sb = 0; sb < cb; sb++) Nb(bb[sb])
          },
          Nb = bb => {
            yc > Bc && (hc = hb(yc));
            var sb, kb = typeof bb;
            if ("string" === kb) {
              let kb, Wb = bb.length;
              if (Pc && Wb >= 4 && Wb < 4096) {
                if ((Pc.size += Wb) > 21760) {
                  let bb, sb, kb = (Pc[0] ? 3 * Pc[0].length + Pc[1].length : 0) + 10;
                  yc + kb > Bc && (hc = hb(yc + kb)), Pc.position ? (sb = Pc, hc[yc] = 200, yc += 3, hc[yc++] = 98, bb = yc - cb, yc += 4, Zc(cb, Nb, 0), gc.setUint16(bb + cb - 3, yc - cb - bb)) : (hc[yc++] = 214, hc[yc++] = 98, bb = yc - cb, yc += 4), Pc = ["", ""], Pc.previous = sb, Pc.size = 0, Pc.position = bb
                }
                let sb = Dc.test(bb);
                return Pc[sb ? 0 : 1] += bb, hc[yc++] = 193, void Nb(sb ? -Wb : Wb)
              }
              kb = Wb < 32 ? 1 : Wb < 256 ? 2 : Wb < 65536 ? 3 : 5;
              let Tb = 3 * Wb;
              if (yc + Tb > Bc && (hc = hb(yc + Tb)), Wb < 64 || !ab) {
                let cb, ab, Tb, Ub = yc + kb;
                for (cb = 0; cb < Wb; cb++) ab = bb.charCodeAt(cb), ab < 128 ? hc[Ub++] = ab : ab < 2048 ? (hc[Ub++] = ab >> 6 | 192, hc[Ub++] = 63 & ab | 128) : 55296 === (64512 & ab) && 56320 === (64512 & (Tb = bb.charCodeAt(cb + 1))) ? (ab = 65536 + ((1023 & ab) << 10) + (1023 & Tb), cb++, hc[Ub++] = ab >> 18 | 240, hc[Ub++] = ab >> 12 & 63 | 128, hc[Ub++] = ab >> 6 & 63 | 128, hc[Ub++] = 63 & ab | 128) : (hc[Ub++] = ab >> 12 | 224, hc[Ub++] = ab >> 6 & 63 | 128, hc[Ub++] = 63 & ab | 128);
                sb = Ub - yc - kb
              } else sb = ab(bb, yc + kb);
              sb < 32 ? hc[yc++] = 160 | sb : sb < 256 ? (kb < 2 && hc.copyWithin(yc + 2, yc + 1, yc + 1 + sb), hc[yc++] = 217, hc[yc++] = sb) : sb < 65536 ? (kb < 3 && hc.copyWithin(yc + 3, yc + 2, yc + 2 + sb), hc[yc++] = 218, hc[yc++] = sb >> 8, hc[yc++] = 255 & sb) : (kb < 5 && hc.copyWithin(yc + 5, yc + 3, yc + 3 + sb), hc[yc++] = 219, gc.setUint32(yc, sb), yc += 4), yc += sb
            } else if ("number" === kb)
              if (bb >>> 0 === bb) bb < 32 || bb < 128 && !1 === this.useRecords || bb < 64 && !this.randomAccessStructure ? hc[yc++] = bb : bb < 256 ? (hc[yc++] = 204, hc[yc++] = bb) : bb < 65536 ? (hc[yc++] = 205, hc[yc++] = bb >> 8, hc[yc++] = 255 & bb) : (hc[yc++] = 206, gc.setUint32(yc, bb), yc += 4);
              else if ((bb | 0) === bb) bb >= -32 ? hc[yc++] = 256 + bb : bb >= -128 ? (hc[yc++] = 208, hc[yc++] = bb + 256) : bb >= -32768 ? (hc[yc++] = 209, gc.setInt16(yc, bb), yc += 2) : (hc[yc++] = 210, gc.setInt32(yc, bb), yc += 4);
            else {
              let cb;
              if ((cb = this.useFloat32) > 0 && bb < 4294967296 && bb >= -2147483648) {
                let sb;
                if (hc[yc++] = 202, gc.setFloat32(yc, bb), cb < 4 || ((sb = bb * Uc[(127 & hc[yc]) << 1 | hc[yc + 1] >> 7]) | 0) === sb) return void(yc += 4);
                yc--
              }
              hc[yc++] = 203, gc.setFloat64(yc, bb), yc += 8
            } else if ("object" === kb || "function" === kb)
              if (bb) {
                if (Wb) {
                  let sb = Wb.get(bb);
                  if (sb) {
                    if (!sb.id) {
                      let bb = Wb.idsToInsert || (Wb.idsToInsert = []);
                      sb.id = bb.push(sb)
                    }
                    return hc[yc++] = 214, hc[yc++] = 112, gc.setUint32(yc, sb.id), void(yc += 4)
                  }
                  Wb.set(bb, {
                    offset: yc - cb
                  })
                }
                let ab = bb.constructor;
                if (ab === Object) Yb(bb);
                else if (ab === Array) Cb(bb);
                else if (ab === Map)
                  if (this.mapAsEmptyObject) hc[yc++] = 128;
                  else {
                    (sb = bb.size) < 16 ? hc[yc++] = 128 | sb : sb < 65536 ? (hc[yc++] = 222, hc[yc++] = sb >> 8, hc[yc++] = 255 & sb) : (hc[yc++] = 223, gc.setUint32(yc, sb), yc += 4);
                    for (let [cb, sb] of bb) Nb(cb), Nb(sb)
                  }
                else {
                  for (let cb = 0, sb = lc.length; cb < sb; cb++) {
                    if (bb instanceof Qc[cb]) {
                      let sb = lc[cb];
                      if (sb.write) {
                        sb.type && (hc[yc++] = 212, hc[yc++] = sb.type, hc[yc++] = 0);
                        let cb = sb.write.call(this, bb);
                        return void(cb === bb ? Array.isArray(bb) ? Cb(bb) : Yb(bb) : Nb(cb))
                      }
                      let kb, Wb = hc,
                        ab = gc,
                        Tb = yc;
                      hc = null;
                      try {
                        kb = sb.pack.call(this, bb, (bb => (hc = Wb, Wb = null, yc += bb, yc > Bc && hb(yc), {
                          target: hc,
                          targetView: gc,
                          position: yc - bb
                        })), Nb)
                      } finally {
                        Wb && (hc = Wb, gc = ab, yc = Tb, Bc = hc.length - 10)
                      }
                      return void(kb && (kb.length + yc > Bc && hb(kb.length + yc), yc = Kc(kb, hc, yc, sb.type)))
                    }
                  }
                  if (Array.isArray(bb)) Cb(bb);
                  else {
                    if (bb.toJSON) {
                      const cb = bb.toJSON();
                      if (cb !== bb) return Nb(cb)
                    }
                    if ("function" === kb) return Nb(this.writeFunction && this.writeFunction(bb));
                    Yb(bb)
                  }
                }
              } else hc[yc++] = 192;
            else if ("boolean" === kb) hc[yc++] = bb ? 195 : 194;
            else if ("bigint" === kb) {
              if (bb < BigInt(1) << BigInt(63) && bb >= -(BigInt(1) << BigInt(63))) hc[yc++] = 211, gc.setBigInt64(yc, bb);
              else if (bb < BigInt(1) << BigInt(64) && bb > 0) hc[yc++] = 207, gc.setBigUint64(yc, bb);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Nb(bb.toString());
                  if (this.useBigIntExtension && bb < BigInt(2) ** BigInt(1023) && bb > -(BigInt(2) ** BigInt(1023))) {
                    hc[yc++] = 199, yc++, hc[yc++] = 66;
                    let cb, sb = [];
                    do {
                      let kb = bb & BigInt(255);
                      cb = (kb & BigInt(128)) === (bb < BigInt(0) ? BigInt(128) : BigInt(0)), sb.push(kb), bb >>= BigInt(8)
                    } while (bb !== BigInt(0) && bb !== BigInt(-1) || !cb);
                    hc[yc - 2] = sb.length;
                    for (let bb = sb.length; bb > 0;) hc[yc++] = Number(sb[--bb]);
                    return
                  }
                  throw new RangeError(bb + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                hc[yc++] = 203, gc.setFloat64(yc, Number(bb))
              }
              yc += 8
            } else {
              if ("undefined" !== kb) throw new Error("Unknown type: " + kb);
              this.encodeUndefinedAsNil ? hc[yc++] = 192 : (hc[yc++] = 212, hc[yc++] = 0, hc[yc++] = 0)
            }
          },
          Vb = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? bb => {
            let cb;
            if (this.skipValues) {
              cb = [];
              for (let sb in bb) "function" === typeof bb.hasOwnProperty && !bb.hasOwnProperty(sb) || this.skipValues.includes(bb[sb]) || cb.push(sb)
            } else cb = Object.keys(bb);
            let sb, kb = cb.length;
            if (kb < 16 ? hc[yc++] = 128 | kb : kb < 65536 ? (hc[yc++] = 222, hc[yc++] = kb >> 8, hc[yc++] = 255 & kb) : (hc[yc++] = 223, gc.setUint32(yc, kb), yc += 4), this.coercibleKeyAsNumber)
              for (let Wb = 0; Wb < kb; Wb++) {
                sb = cb[Wb];
                let kb = Number(sb);
                Nb(isNaN(kb) ? sb : kb), Nb(bb[sb])
              } else
                for (let Wb = 0; Wb < kb; Wb++) Nb(sb = cb[Wb]), Nb(bb[sb])
          } : bb => {
            hc[yc++] = 222;
            let sb = yc - cb;
            yc += 2;
            let kb = 0;
            for (let cb in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(cb)) && (Nb(cb), Nb(bb[cb]), kb++);
            if (kb > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            hc[sb++ + cb] = kb >> 8, hc[sb + cb] = 255 & kb
          },
          Lb = !1 === this.useRecords ? Vb : bb.progressiveRecords && !Mb ? bb => {
            let sb, Wb, ab = kb.transitions || (kb.transitions = Object.create(null)),
              Tb = yc++ - cb;
            for (let Ub in bb)
              if ("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(Ub)) {
                if (sb = ab[Ub], sb) ab = sb;
                else {
                  let Ib = Object.keys(bb),
                    Hb = ab;
                  ab = kb.transitions;
                  let fb = 0;
                  for (let bb = 0, cb = Ib.length; bb < cb; bb++) {
                    let cb = Ib[bb];
                    sb = ab[cb], sb || (sb = ab[cb] = Object.create(null), fb++), ab = sb
                  }
                  Tb + cb + 1 == yc ? (yc--, Jb(ab, Ib, fb)) : gb(ab, Ib, Tb, fb), Wb = !0, ab = Hb[Ub]
                }
                Nb(bb[Ub])
              } if (!Wb) {
              let sb = ab[Ec];
              sb ? hc[Tb + cb] = sb : gb(ab, Object.keys(bb), Tb, 0)
            }
          } : bb => {
            let cb, sb = kb.transitions || (kb.transitions = Object.create(null)),
              Wb = 0;
            for (let kb in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(kb)) && (cb = sb[kb], cb || (cb = sb[kb] = Object.create(null), Wb++), sb = cb);
            let ab = sb[Ec];
            ab ? ab >= 96 && Mb ? (hc[yc++] = 96 + (31 & (ab -= 96)), hc[yc++] = ab >> 5) : hc[yc++] = ab : Jb(sb, sb.__keys__ || Object.keys(bb), Wb);
            for (let kb in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(kb)) && Nb(bb[kb])
          },
          ub = "function" == typeof this.useRecords && this.useRecords,
          Yb = ub ? bb => {
            ub(bb) ? Lb(bb) : Vb(bb)
          } : Lb,
          hb = bb => {
            let sb;
            if (bb > 16777216) {
              if (bb - cb > Yc) throw new Error("Packed buffer would be larger than maximum buffer size");
              sb = Math.min(Yc, 4096 * Math.round(Math.max((bb - cb) * (bb > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else sb = 1 + (Math.max(bb - cb << 2, hc.length - 1) >> 12) << 12;
            let kb = new Lc(sb);
            return gc = kb.dataView || (kb.dataView = new DataView(kb.buffer, 0, sb)), bb = Math.min(bb, hc.length), hc.copy ? hc.copy(kb, 0, cb, bb) : kb.set(hc.slice(cb, bb)), yc -= cb, cb = 0, Bc = kb.length - 10, hc = kb
          },
          Jb = (bb, cb, Wb) => {
            let ab = kb.nextId;
            ab || (ab = 64), ab < Xb && this.shouldShareStructure && !this.shouldShareStructure(cb) ? (ab = kb.nextOwnId, ab < nb || (ab = Xb), kb.nextOwnId = ab + 1) : (ab >= nb && (ab = Xb), kb.nextId = ab + 1);
            let Tb = cb.highByte = ab >= 96 && Mb ? ab - 96 >> 5 : -1;
            bb[Ec] = ab, bb.__keys__ = cb, kb[ab - 64] = cb, ab < Xb ? (cb.isShared = !0, kb.sharedLength = ab - 63, sb = !0, Tb >= 0 ? (hc[yc++] = 96 + (31 & ab), hc[yc++] = Tb) : hc[yc++] = ab) : (Tb >= 0 ? (hc[yc++] = 213, hc[yc++] = 114, hc[yc++] = 96 + (31 & ab), hc[yc++] = Tb) : (hc[yc++] = 212, hc[yc++] = 114, hc[yc++] = ab), Wb && (lb += Qb * Wb), mb.length >= fb && (mb.shift()[Ec] = 0), mb.push(bb), Nb(cb))
          },
          gb = (bb, sb, kb, Wb) => {
            let ab = hc,
              Tb = yc,
              Ub = Bc,
              Ib = cb;
            hc = Jc, yc = 0, cb = 0, hc || (Jc = hc = new Lc(8192)), Bc = hc.length - 10, Jb(bb, sb, Wb), Jc = hc;
            let Hb = yc;
            if (hc = ab, yc = Tb, Bc = Ub, cb = Ib, Hb > 1) {
              let bb = yc + Hb - 1;
              bb > Bc && hb(bb);
              let sb = kb + cb;
              hc.copyWithin(sb + Hb, sb + 1, yc), hc.set(Jc.slice(0, Hb), sb), yc = bb
            } else hc[kb + cb] = Jc[0]
          },
          Bb = bb => {
            let Wb = tc(bb, hc, cb, yc, kb, hb, ((bb, cb, kb) => {
              if (kb) return sb = !0;
              yc = cb;
              let Wb = hc;
              return Nb(bb), eb(), Wb !== hc ? {
                position: yc,
                targetView: gc,
                target: hc
              } : yc
            }), this);
            if (0 === Wb) return Yb(bb);
            yc = Wb
          }
      }
      useBuffer(bb) {
        hc = bb, gc = hc.dataView || (hc.dataView = new DataView(hc.buffer, hc.byteOffset, hc.byteLength)), yc = 0
      }
      set position(bb) {
        yc = bb
      }
      get position() {
        return yc
      }
      set buffer(bb) {
        hc = bb
      }
      get buffer() {
        return hc
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function Oc(bb, cb, sb, kb) {
      let Wb = bb.byteLength;
      if (Wb + 1 < 256) {
        var {
          target: ab,
          position: Tb
        } = sb(4 + Wb);
        ab[Tb++] = 199, ab[Tb++] = Wb + 1
      } else if (Wb + 1 < 65536) {
        var {
          target: ab,
          position: Tb
        } = sb(5 + Wb);
        ab[Tb++] = 200, ab[Tb++] = Wb + 1 >> 8, ab[Tb++] = Wb + 1 & 255
      } else {
        var {
          target: ab,
          position: Tb,
          targetView: Ub
        } = sb(7 + Wb);
        ab[Tb++] = 201, Ub.setUint32(Tb, Wb + 1), Tb += 4
      }
      ab[Tb++] = 116, ab[Tb++] = cb, bb.buffer || (bb = new Uint8Array(bb)), ab.set(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength), Tb)
    }

    function Gc(bb, cb) {
      let sb = bb.byteLength;
      var kb, Wb;
      if (sb < 256) {
        var {
          target: kb,
          position: Wb
        } = cb(sb + 2);
        kb[Wb++] = 196, kb[Wb++] = sb
      } else if (sb < 65536) {
        var {
          target: kb,
          position: Wb
        } = cb(sb + 3);
        kb[Wb++] = 197, kb[Wb++] = sb >> 8, kb[Wb++] = 255 & sb
      } else {
        var {
          target: kb,
          position: Wb,
          targetView: ab
        } = cb(sb + 5);
        kb[Wb++] = 198, ab.setUint32(Wb, sb), Wb += 4
      }
      kb.set(bb, Wb)
    }

    function Kc(bb, cb, sb, kb) {
      let Wb = bb.length;
      switch (Wb) {
        case 1:
          cb[sb++] = 212;
          break;
        case 2:
          cb[sb++] = 213;
          break;
        case 4:
          cb[sb++] = 214;
          break;
        case 8:
          cb[sb++] = 215;
          break;
        case 16:
          cb[sb++] = 216;
          break;
        default:
          Wb < 256 ? (cb[sb++] = 199, cb[sb++] = Wb) : Wb < 65536 ? (cb[sb++] = 200, cb[sb++] = Wb >> 8, cb[sb++] = 255 & Wb) : (cb[sb++] = 201, cb[sb++] = Wb >> 24, cb[sb++] = Wb >> 16 & 255, cb[sb++] = Wb >> 8 & 255, cb[sb++] = 255 & Wb)
      }
      return cb[sb++] = kb, cb.set(bb, sb), sb += Wb
    }

    function Zc(bb, cb, sb) {
      if (Pc.length > 0) {
        gc.setUint32(Pc.position + bb, yc + sb - Pc.position - bb), Pc.stringsPosition = yc - bb;
        let kb = Pc;
        Pc = null, cb(kb[0]), cb(kb[1])
      }
    }

    function zc(bb) {
      if (bb.Class) {
        if (!bb.pack && !bb.write) throw new Error("Extension has no pack or write function");
        if (bb.pack && !bb.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        Qc.unshift(bb.Class), lc.unshift(bb)
      }! function(bb) {
        bb.unpack ? Cb[bb.type] = bb.unpack : Cb[bb.type] = bb
      }(bb)
    }

    function qc(bb, cb) {
      return bb.isCompatible = bb => {
        let sb = !bb || (cb.lastNamedStructuresLength || 0) === bb.length;
        return sb || cb._mergeStructures(bb), sb
      }, bb
    }
    Qc = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Vb], lc = [{
      pack(bb, cb, sb) {
        let kb = bb.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === bb.getMilliseconds()) && kb >= 0 && kb < 4294967296) {
          let {
            target: bb,
            targetView: sb,
            position: Wb
          } = cb(6);
          bb[Wb++] = 214, bb[Wb++] = 255, sb.setUint32(Wb, kb)
        } else if (kb > 0 && kb < 4294967296) {
          let {
            target: sb,
            targetView: Wb,
            position: ab
          } = cb(10);
          sb[ab++] = 215, sb[ab++] = 255, Wb.setUint32(ab, 4e6 * bb.getMilliseconds() + (kb / 1e3 / 4294967296 | 0)), Wb.setUint32(ab + 4, kb)
        } else if (isNaN(kb)) {
          if (this.onInvalidDate) return cb(0), sb(this.onInvalidDate());
          let {
            target: bb,
            targetView: kb,
            position: Wb
          } = cb(3);
          bb[Wb++] = 212, bb[Wb++] = 255, bb[Wb++] = 255
        } else {
          let {
            target: sb,
            targetView: Wb,
            position: ab
          } = cb(15);
          sb[ab++] = 199, sb[ab++] = 12, sb[ab++] = 255, Wb.setUint32(ab, 1e6 * bb.getMilliseconds()), Wb.setBigInt64(ab + 4, BigInt(Math.floor(kb)))
        }
      }
    }, {
      pack(bb, cb, sb) {
        if (this.setAsEmptyObject) return cb(0), sb({});
        let kb = Array.from(bb),
          {
            target: Wb,
            position: ab
          } = cb(this.moreTypes ? 3 : 0);
        this.moreTypes && (Wb[ab++] = 212, Wb[ab++] = 115, Wb[ab++] = 0), sb(kb)
      }
    }, {
      pack(bb, cb, sb) {
        let {
          target: kb,
          position: Wb
        } = cb(this.moreTypes ? 3 : 0);
        this.moreTypes && (kb[Wb++] = 212, kb[Wb++] = 101, kb[Wb++] = 0), sb([bb.name, bb.message, bb.cause])
      }
    }, {
      pack(bb, cb, sb) {
        let {
          target: kb,
          position: Wb
        } = cb(this.moreTypes ? 3 : 0);
        this.moreTypes && (kb[Wb++] = 212, kb[Wb++] = 120, kb[Wb++] = 0), sb([bb.source, bb.flags])
      }
    }, {
      pack(bb, cb) {
        this.moreTypes ? Oc(bb, 16, cb) : Gc(Vc ? Buffer.from(bb) : new Uint8Array(bb), cb)
      }
    }, {
      pack(bb, cb) {
        let sb = bb.constructor;
        sb !== uc && this.moreTypes ? Oc(bb, sc.indexOf(sb.name), cb) : Gc(bb, cb)
      }
    }, {
      pack(bb, cb) {
        let {
          target: sb,
          position: kb
        } = cb(1);
        sb[kb] = 193
      }
    }];
    let dc = new ic({
      useRecords: !1
    });
    const Ac = dc.pack,
      wc = dc.pack,
      rc = ic,
      {
        NEVER: oc,
        ALWAYS: Sc,
        DECIMAL_ROUND: Rc,
        DECIMAL_FIT: vc
      } = nc,
      Fc = 512,
      xc = 1024,
      jc = 2048;
    const pc = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!bb || "object" !== typeof bb) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const sb = new Bb(cb);
        let kb;
        const Wb = bb => {
          let cb;
          kb && (bb = Buffer.concat([kb, bb]), kb = void 0);
          try {
            cb = sb.unpackMultiple(bb)
          } catch (Wb) {
            if (!Wb.incomplete) throw Wb;
            kb = bb.slice(Wb.lastPosition), cb = Wb.values
          }
          return cb
        };
        return "function" === typeof bb[Symbol.iterator] ? function*() {
          for (const cb of bb) yield* Wb(cb)
        }() : "function" === typeof bb[Symbol.asyncIterator] ? async function*() {
          for await (const cb of bb) yield* Wb(cb)
        }(): void 0
      },
      bs = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (bb && "object" === typeof bb) {
          if ("function" === typeof bb[Symbol.iterator]) return function*(bb, cb) {
            const sb = new ic(cb);
            for (const kb of bb) yield sb.pack(kb)
          }(bb, cb);
          if ("function" === typeof bb.then || "function" === typeof bb[Symbol.asyncIterator]) return async function*(bb, cb) {
            const sb = new ic(cb);
            for await (const kb of bb) yield sb.pack(kb)
          }(bb, cb);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      cs = !1,
      ss = !0
  },
  8713: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      $changes: () => lb,
      $childType: () => Qb,
      $decoder: () => fb,
      $deleteByIndex: () => nb,
      $encoder: () => Hb,
      $filter: () => Mb,
      $getByIndex: () => Xb,
      $numFields: () => gb,
      $refId: () => Ub,
      $track: () => Ib,
      $values: () => Lb,
      ArraySchema: () => Wk,
      Callbacks: () => aW,
      ChangeTree: () => Ps,
      CollectionSchema: () => Uk,
      Decoder: () => xk,
      Encoder: () => Sk,
      FieldBuilder: () => fk,
      MapSchema: () => Tk,
      Metadata: () => Rc,
      OPERATION: () => Wb,
      Reflection: () => cW,
      ReflectionField: () => pk,
      ReflectionType: () => bW,
      Root: () => Ek,
      Schema: () => Pk,
      SetSchema: () => Ik,
      StateCallbackStrategy: () => WW,
      StateView: () => Zk,
      StreamSchema: () => Hk,
      TypeContext: () => qc,
      createPool: () => UW,
      decode: () => Nc,
      decodeKeyValueOperation: () => xs,
      decodeSchemaOperation: () => Fs,
      defineCustomTypes: () => Yc,
      defineTypes: () => Bk,
      deprecated: () => Jk,
      dumpChanges: () => yk,
      encode: () => cc,
      encodeArray: () => zs,
      encodeIndexedEntry: () => Ks,
      encodeKeyValueOperation: () => Zs,
      encodeMapEntry: () => Gs,
      encodeSchemaOperation: () => Os,
      hm: () => ek,
      fullStateOnly: () => Lk,
      getDecoderStateCallbacks: () => sW,
      getEncodeDescriptor: () => bs,
      getRawChangesCallback: () => kW,
      isBuilder: () => Mk,
      patchOnly: () => Vk,
      registerType: () => uc,
      schema: () => tk,
      t: () => lk,
      type: () => uk,
      unreliable: () => Nk,
      view: () => Ck
    });
    const kb = 255;
    var Wb;

    function ab(bb) {
      Object.defineProperty(bb, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(bb) {
      bb[bb.ADD = 128] = "ADD", bb[bb.REPLACE = 0] = "REPLACE", bb[bb.DELETE = 64] = "DELETE", bb[bb.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", bb[bb.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", bb[bb.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", bb[bb.CLEAR = 10] = "CLEAR", bb[bb.REVERSE = 15] = "REVERSE", bb[bb.MOVE = 32] = "MOVE", bb[bb.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", bb[bb.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Wb || (Wb = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Tb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const bb = "colyseus.symbolRegistry",
        cb = Tb[bb] || (Tb[bb] = Object.create(null));
      Symbol.for = function(bb) {
        return cb[bb] || (cb[bb] = Symbol(bb))
      }, Symbol.keyFor = function(bb) {
        for (const sb in cb)
          if (cb[sb] === bb) return sb
      }
    }
    const Ub = Symbol.for("$refId"),
      Ib = "~track",
      Hb = "~encoder",
      fb = "~decoder",
      Mb = "~filter",
      Xb = "~getByIndex",
      nb = "~deleteByIndex",
      mb = "~resyncPrune",
      lb = Symbol.for("$changes"),
      Qb = Symbol.for("$childType"),
      eb = Symbol.for("$proxyTarget"),
      Cb = "~onEncodeEnd",
      Nb = "~reset",
      Vb = "~onDecodeEnd",
      Lb = Symbol.for("$values"),
      ub = "~builder",
      Yb = "~descriptors",
      hb = "~__encodeDescriptor",
      Jb = "~encoders",
      gb = "~__numFields",
      Bb = "~__refTypeFieldIndexes",
      tb = "~__viewFieldIndexes",
      yb = "$__fieldIndexesByViewTag",
      Pb = "~__unreliableFieldIndexes",
      Db = "~__patchOnlyFieldIndexes",
      Eb = "~__fullSyncSkipIndexes",
      ib = "~__fullStateOnlyFieldIndexes",
      Ob = "~__streamFieldIndexes",
      Gb = "~__streamPriorities";
    let Kb;
    try {
      Kb = new TextEncoder
    } catch (IW) {}
    const Zb = new ArrayBuffer(8),
      zb = new Int32Array(Zb),
      qb = new Float32Array(Zb),
      db = new Float64Array(Zb),
      Ab = new BigInt64Array(Zb),
      wb = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(bb, cb) {
        for (var sb = 0, kb = 0, Wb = 0, ab = bb.length; Wb < ab; Wb++)(sb = bb.charCodeAt(Wb)) < 128 ? kb += 1 : sb < 2048 ? kb += 2 : sb < 55296 || sb >= 57344 ? kb += 3 : (Wb++, kb += 4);
        return kb
      };

    function rb(bb, cb, sb) {
      for (var kb = 0, Wb = 0, ab = cb.length; Wb < ab; Wb++)(kb = cb.charCodeAt(Wb)) < 128 ? bb[sb.offset++] = kb : kb < 2048 ? (bb[sb.offset] = 192 | kb >> 6, bb[sb.offset + 1] = 128 | 63 & kb, sb.offset += 2) : kb < 55296 || kb >= 57344 ? (bb[sb.offset] = 224 | kb >> 12, bb[sb.offset + 1] = 128 | kb >> 6 & 63, bb[sb.offset + 2] = 128 | 63 & kb, sb.offset += 3) : (Wb++, kb = 65536 + ((1023 & kb) << 10 | 1023 & cb.charCodeAt(Wb)), bb[sb.offset] = 240 | kb >> 18, bb[sb.offset + 1] = 128 | kb >> 12 & 63, bb[sb.offset + 2] = 128 | kb >> 6 & 63, bb[sb.offset + 3] = 128 | 63 & kb, sb.offset += 4)
    }

    function ob(bb, cb, sb) {
      bb[sb.offset++] = 255 & cb
    }

    function Sb(bb, cb, sb) {
      bb[sb.offset++] = 255 & cb, bb[sb.offset++] = cb >> 8 & 255
    }

    function Rb(bb, cb, sb) {
      bb[sb.offset++] = 255 & cb, bb[sb.offset++] = cb >> 8 & 255
    }

    function vb(bb, cb, sb) {
      bb[sb.offset++] = 255 & cb, bb[sb.offset++] = cb >> 8 & 255, bb[sb.offset++] = cb >> 16 & 255, bb[sb.offset++] = cb >> 24 & 255
    }

    function Fb(bb, cb, sb) {
      const kb = cb >> 24,
        Wb = cb >> 16,
        ab = cb >> 8,
        Tb = cb;
      bb[sb.offset++] = 255 & Tb, bb[sb.offset++] = 255 & ab, bb[sb.offset++] = 255 & Wb, bb[sb.offset++] = 255 & kb
    }

    function xb(bb, cb, sb) {
      const kb = Math.floor(cb / Math.pow(2, 32));
      Fb(bb, cb >>> 0, sb), Fb(bb, kb, sb)
    }

    function jb(bb, cb, sb) {
      const kb = cb / Math.pow(2, 32) | 0;
      Fb(bb, cb >>> 0, sb), Fb(bb, kb, sb)
    }

    function pb(bb, cb, sb) {
      qb[0] = cb, vb(bb, zb[0], sb)
    }

    function bc(bb, cb, sb) {
      db[0] = cb, vb(bb, zb[0], sb), vb(bb, zb[1], sb)
    }
    const cc = {
        int8: ob,
        uint8: function(bb, cb, sb) {
          bb[sb.offset++] = 255 & cb
        },
        int16: Sb,
        uint16: Rb,
        int32: vb,
        uint32: Fb,
        int64: xb,
        uint64: jb,
        bigint64: function(bb, cb, sb) {
          Ab[0] = BigInt.asIntN(64, cb), vb(bb, zb[0], sb), vb(bb, zb[1], sb)
        },
        biguint64: function(bb, cb, sb) {
          Ab[0] = BigInt.asIntN(64, cb), vb(bb, zb[0], sb), vb(bb, zb[1], sb)
        },
        float32: pb,
        float64: bc,
        boolean: function(bb, cb, sb) {
          bb[sb.offset++] = cb ? 1 : 0
        },
        string: function(bb, cb, sb) {
          cb || (cb = "");
          let kb = wb(cb, "utf8"),
            Wb = 0;
          if (kb < 32) bb[sb.offset++] = 160 | kb, Wb = 1;
          else if (kb < 256) bb[sb.offset++] = 217, bb[sb.offset++] = kb, Wb = 2;
          else if (kb < 65536) bb[sb.offset++] = 218, Rb(bb, kb, sb), Wb = 3;
          else {
            if (!(kb < 4294967296)) throw new Error("String too long");
            bb[sb.offset++] = 219, Fb(bb, kb, sb), Wb = 5
          }
          return rb(bb, cb, sb), Wb + kb
        },
        number: function bb(cb, sb, kb) {
          return isNaN(sb) ? bb(cb, 0, kb) : isFinite(sb) ? sb !== (0 | sb) ? Math.abs(sb) <= 34028235e31 && (qb[0] = sb, Math.abs(Math.abs(qb[0]) - Math.abs(sb)) < 1e-4) ? (cb[kb.offset++] = 202, pb(cb, sb, kb), 5) : (cb[kb.offset++] = 203, bc(cb, sb, kb), 9) : sb >= 0 ? sb < 128 ? (cb[kb.offset++] = 255 & sb, 1) : sb < 256 ? (cb[kb.offset++] = 204, cb[kb.offset++] = 255 & sb, 2) : sb < 65536 ? (cb[kb.offset++] = 205, Rb(cb, sb, kb), 3) : sb < 4294967296 ? (cb[kb.offset++] = 206, Fb(cb, sb, kb), 5) : (cb[kb.offset++] = 207, jb(cb, sb, kb), 9) : sb >= -32 ? (cb[kb.offset++] = 224 | sb + 32, 1) : sb >= -128 ? (cb[kb.offset++] = 208, ob(cb, sb, kb), 2) : sb >= -32768 ? (cb[kb.offset++] = 209, Sb(cb, sb, kb), 3) : sb >= -2147483648 ? (cb[kb.offset++] = 210, vb(cb, sb, kb), 5) : (cb[kb.offset++] = 211, xb(cb, sb, kb), 9) : bb(cb, sb > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, kb)
        },
        utf8Write: rb,
        utf8Length: wb
      },
      sc = new ArrayBuffer(8),
      kc = new Int32Array(sc),
      Wc = new Float32Array(sc),
      ac = new Float64Array(sc),
      Tc = new BigUint64Array(sc),
      Uc = new BigInt64Array(sc);

    function Ic(bb, cb, sb) {
      sb > bb.length - cb.offset && (sb = bb.length - cb.offset);
      for (var kb = "", Wb = 0, ab = cb.offset, Tb = cb.offset + sb; ab < Tb; ab++) {
        var Ub = bb[ab];
        if (0 !== (128 & Ub))
          if (192 !== (224 & Ub))
            if (224 !== (240 & Ub)) {
              if (240 !== (248 & Ub)) {
                console.error("decode.utf8Read(): Invalid byte " + Ub + " at offset " + ab + ". Skip to end of string: " + (cb.offset + sb));
                break
              }(Wb = (7 & Ub) << 18 | (63 & bb[++ab]) << 12 | (63 & bb[++ab]) << 6 | 63 & bb[++ab]) >= 65536 ? (Wb -= 65536, kb += String.fromCharCode(55296 + (Wb >>> 10), 56320 + (1023 & Wb))) : kb += String.fromCharCode(Wb)
            } else kb += String.fromCharCode((15 & Ub) << 12 | (63 & bb[++ab]) << 6 | 63 & bb[++ab]);
        else kb += String.fromCharCode((31 & Ub) << 6 | 63 & bb[++ab]);
        else kb += String.fromCharCode(Ub)
      }
      return cb.offset += sb, kb
    }

    function Hc(bb, cb) {
      return fc(bb, cb) << 24 >> 24
    }

    function fc(bb, cb) {
      return bb[cb.offset++]
    }

    function Mc(bb, cb) {
      return Xc(bb, cb) << 16 >> 16
    }

    function Xc(bb, cb) {
      return bb[cb.offset++] | bb[cb.offset++] << 8
    }

    function nc(bb, cb) {
      return bb[cb.offset++] | bb[cb.offset++] << 8 | bb[cb.offset++] << 16 | bb[cb.offset++] << 24
    }

    function mc(bb, cb) {
      return nc(bb, cb) >>> 0
    }

    function lc(bb, cb) {
      return kc[0] = nc(bb, cb), Wc[0]
    }

    function Qc(bb, cb) {
      return kc[0] = nc(bb, cb), kc[1] = nc(bb, cb), ac[0]
    }

    function ec(bb, cb) {
      const sb = mc(bb, cb);
      return nc(bb, cb) * Math.pow(2, 32) + sb
    }

    function Cc(bb, cb) {
      const sb = mc(bb, cb);
      return mc(bb, cb) * Math.pow(2, 32) + sb
    }
    const Nc = {
        utf8Read: Ic,
        int8: Hc,
        uint8: fc,
        int16: Mc,
        uint16: Xc,
        int32: nc,
        uint32: mc,
        float32: lc,
        float64: Qc,
        int64: ec,
        uint64: Cc,
        bigint64: function(bb, cb) {
          return kc[0] = nc(bb, cb), kc[1] = nc(bb, cb), Uc[0]
        },
        biguint64: function(bb, cb) {
          return kc[0] = nc(bb, cb), kc[1] = nc(bb, cb), Tc[0]
        },
        boolean: function(bb, cb) {
          return fc(bb, cb) > 0
        },
        string: function(bb, cb) {
          const sb = bb[cb.offset++];
          let kb;
          return sb < 192 ? kb = 31 & sb : 217 === sb ? kb = fc(bb, cb) : 218 === sb ? kb = Xc(bb, cb) : 219 === sb && (kb = mc(bb, cb)), Ic(bb, cb, kb)
        },
        number: function(bb, cb) {
          const sb = bb[cb.offset++];
          return sb < 128 ? sb : 202 === sb ? lc(bb, cb) : 203 === sb ? Qc(bb, cb) : 204 === sb ? fc(bb, cb) : 205 === sb ? Xc(bb, cb) : 206 === sb ? mc(bb, cb) : 207 === sb ? Cc(bb, cb) : 208 === sb ? Hc(bb, cb) : 209 === sb ? Mc(bb, cb) : 210 === sb ? nc(bb, cb) : 211 === sb ? ec(bb, cb) : sb > 223 ? -1 * (255 - sb + 1) : void 0
        },
        stringCheck: function(bb, cb) {
          const sb = bb[cb.offset];
          return sb < 192 && sb > 160 || 217 === sb || 218 === sb || 219 === sb
        }
      },
      Vc = {},
      Lc = new Map;

    function uc(bb, cb) {
      cb.constructor && (Object.prototype.hasOwnProperty.call(cb, "constructor") && null == cb.constructor[Symbol.metadata] && ab(cb.constructor), Lc.set(cb.constructor, bb), Vc[bb] = cb), cb.encode && (cc[bb] = cb.encode), cb.decode && (Nc[bb] = cb.decode)
    }

    function Yc(bb) {
      for (const cb in bb) uc(cb, bb[cb]);
      return bb => uk(bb)
    }
    const hc = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function Jc() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function gc(bb) {
      return bb._stream ??= Jc()
    }

    function Bc(bb, cb, sb) {
      0 === cb.activeViews.size && gc(bb).broadcastPending.add(sb)
    }

    function tc(bb, cb, sb, kb) {
      const ab = bb._stream;
      if (void 0 === ab) return !0;
      let Tb = !1;
      return ab.broadcastPending.delete(kb) ? Tb = !0 : ab.sentBroadcast.delete(kb) && ab.broadcastDeletes.add(kb), cb.forEachActiveView((bb => {
        const cb = ab.pendingByView.get(bb.id);
        if (cb?.has(kb)) return cb.delete(kb), void(Tb = !0);
        const Ub = ab.sentByView.get(bb.id);
        if (Ub?.has(kb)) {
          Ub.delete(kb);
          let cb = bb.changes.get(sb);
          void 0 === cb && (cb = new Map, bb.changes.set(sb, cb)), cb.set(kb, Wb.DELETE)
        }
      })), Tb
    }

    function yc(bb, cb) {
      const sb = bb._stream?.pendingByView;
      if (void 0 === sb) return !1;
      for (const [kb, Wb] of sb)
        if (Wb.size > 0 && void 0 !== cb.activeViews.get(kb)?.deref()) return !0;
      return !1
    }

    function Pc(bb) {
      const cb = bb._stream;
      return void 0 !== cb && (cb.broadcastPending.size > 0 || cb.broadcastDeletes.size > 0)
    }

    function Dc(bb, cb, sb) {
      const kb = gc(bb);
      let Wb = kb.pendingByView.get(cb);
      void 0 === Wb && (Wb = new Set, kb.pendingByView.set(cb, Wb)), Wb.add(sb)
    }

    function Ec(bb, cb) {
      const sb = bb._stream;
      void 0 !== sb && (sb.pendingByView.delete(cb), sb.sentByView.delete(cb), sb.priorityByView?.delete(cb))
    }
    const ic = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function Oc(bb) {
      if (null == bb || "object" !== typeof bb) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: cb,
        max: sb
      } = bb;
      if ("number" !== typeof cb || "number" !== typeof sb || !(sb > cb) || !Number.isFinite(cb) || !Number.isFinite(sb)) throw new Error(`t.quantized(): require finite min < max (got min=${cb}, max=${sb}).`);
      const kb = bb.bits ?? 16;
      if (8 !== kb && 16 !== kb && 32 !== kb) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${kb}).`);
      const Wb = bb.mode ?? "clamp";
      if ("clamp" !== Wb && "wrap" !== Wb) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Wb)}).`);
      const ab = "wrap" === Wb,
        Tb = Math.pow(2, kb);
      return {
        min: cb,
        max: sb,
        bits: kb,
        wrap: ab,
        wire: ic[kb],
        range: sb - cb,
        span: ab ? Tb : cb === -sb ? Tb - 2 : Tb - 1
      }
    }

    function Gc(bb) {
      return null !== bb && "object" === typeof bb && void 0 !== bb.quantized
    }

    function Kc(bb, cb) {
      if (bb.wrap) {
        if (!Number.isFinite(cb)) return 0;
        const sb = bb.range;
        let kb = (cb - bb.min) % sb;
        kb < 0 && (kb += sb);
        const Wb = bb.span;
        return Math.floor(kb / sb * Wb + .5) % Wb
      }
      if (cb !== cb) return 0;
      const sb = cb < bb.min ? bb.min : cb > bb.max ? bb.max : cb;
      return Math.floor((sb - bb.min) / bb.range * bb.span + .5)
    }

    function Zc(bb, cb) {
      return bb.min + cb / bb.span * bb.range
    }

    function zc(bb) {
      const cb = cc[bb.wire];
      return (sb, kb, Wb) => cb(sb, Kc(bb, kb), Wb)
    }
    class qc {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(bb) {
        const cb = Object.getPrototypeOf(bb);
        if (cb !== Pk) {
          let sb = qc.inheritedTypes.get(cb);
          sb || (sb = new Set, qc.inheritedTypes.set(cb, sb)), sb.add(bb)
        }
      }
      static cache(bb) {
        let cb = qc.cachedContexts.get(bb);
        return cb || (cb = new qc(bb), qc.cachedContexts.set(bb, cb)), cb
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(bb) && (this.types[cb] = bb, null == bb[Symbol.metadata] && Rc.initialize(bb), this.schemas.set(bb, cb), !0)
      }
      getTypeId(bb) {
        return this.schemas.get(bb)
      }
      discoverTypes(bb) {
        if (!this.add(bb)) return;
        qc.inheritedTypes.get(bb)?.forEach((bb => {
          this.discoverTypes(bb)
        }));
        let cb = bb;
        for (;
          (cb = Object.getPrototypeOf(cb)) && cb !== Pk && cb !== Function.prototype;) this.discoverTypes(cb);
        const sb = bb[Symbol.metadata];
        (sb[tb] || sb[Ob]) && (this.hasFilters = !0);
        for (const kb in sb) {
          const bb = sb[kb].type;
          if ("string" !== typeof bb && !Gc(bb))
            if ("function" === typeof bb) this.discoverTypes(bb);
            else {
              const cb = Object.values(bb)[0];
              if ("string" === typeof cb) continue;
              this.discoverTypes(cb)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function dc(bb) {
      const cb = wc(bb);
      return cb ? {
        complexTypeKlass: Vc[cb],
        childType: bb[cb]
      } : {
        complexTypeKlass: !1,
        childType: bb
      }
    }

    function Ac(bb, cb) {
      const sb = rc(bb),
        kb = wc(sb),
        Wb = kb && wc(sb[kb]);
      if (Wb) throw new Error(`${cb?`${cb}: `:""}@colyseus/schema: nested collections are not supported ("${kb}" of "${Wb}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Wb} in a Schema class.`);
      return sb
    }

    function wc(bb) {
      return "object" === typeof bb && null !== bb ? Object.keys(bb).find((bb => void 0 !== Vc[bb])) : void 0
    }

    function rc(bb) {
      if ("object" !== typeof bb || null === bb) return bb;
      if (Array.isArray(bb)) return {
        array: rc(bb[0])
      };
      const cb = function(bb) {
        const cb = Object.keys(bb),
          sb = cb.filter((bb => /\d+/.test(bb)));
        if (sb.length > 0 && sb.length === cb.length / 2 && bb[bb[sb[0]]] == sb[0]) return "number";
        if (cb.length > 0 && cb.every((cb => bb[cb] === cb))) return "string"
      }(bb);
      if (cb) return cb;
      if (Gc(bb)) return "string" === typeof bb.quantized.wire ? bb : {
        quantized: Oc(bb.quantized)
      };
      if (void 0 !== bb.type) return rc(bb.type);
      const sb = wc(bb);
      return sb && (bb[sb] = rc(bb[sb])), bb
    }
    const oc = [Bb, Pb, Db, Eb, ib, Ob, Jb];

    function Sc(bb, cb, sb) {
      bb[cb] || Object.defineProperty(bb, cb, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), bb[cb].push(sb)
    }
    const Rc = {
        addField(bb, cb, sb, kb, Wb) {
          if (cb >= 63) throw new Error(`Can't define field '${sb}'.\nSchema instances may only have up to 63 fields.`);
          bb[cb] = Object.assign(bb[cb] || {}, {
            type: kb,
            index: cb,
            name: sb
          }), Object.defineProperty(bb, Yb, {
            value: bb[Yb] || {},
            enumerable: !1,
            configurable: !0
          }), bb[Yb][sb] = Wb || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(bb, gb, {
            value: cb,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(bb, sb, {
            value: cb,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof bb[cb].type || Gc(bb[cb].type) || (void 0 === bb[Bb] && Object.defineProperty(bb, Bb, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), bb[Bb].push(cb));
          const ab = bb[cb].type;
          if (ab && "object" === typeof ab && void 0 !== ab.stream) {
            if (void 0 !== ab.array) throw new Error(hc);
            bb[cb].stream = !0, bb[Ob] || Object.defineProperty(bb, Ob, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), bb[Ob].includes(cb) || bb[Ob].push(cb);
            const Wb = kb?.priority;
            "function" === typeof Wb && Rc.setStreamPriority(bb, sb, Wb)
          }
        },
        setTag(bb, cb, sb) {
          const kb = bb[cb];
          if (bb[kb].tag = sb, bb[tb] || (Object.defineProperty(bb, tb, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(bb, yb, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), bb[tb].push(kb), sb < 0) bb[yb][sb] || (bb[yb][sb] = []), bb[yb][sb].push(kb);
          else
            for (let Wb = sb; Wb > 0; Wb &= Wb - 1) {
              const cb = Wb & -Wb;
              bb[yb][cb] || (bb[yb][cb] = []), bb[yb][cb].push(kb)
            }
        },
        setUnreliable(bb, cb) {
          const sb = bb[cb];
          if ("string" !== typeof bb[sb].type) throw new Error(`@unreliable cannot be applied to ref-type field "${cb}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          bb[sb].unreliable = !0, bb[Pb] || Object.defineProperty(bb, Pb, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[Pb].push(sb)
        },
        setPatchOnly(bb, cb) {
          const sb = bb[cb];
          if (bb[sb].fullStateOnly) throw new Error(`field "${cb}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          bb[sb].patchOnly = !0, Sc(bb, Db, sb), Sc(bb, Eb, sb)
        },
        setDeprecated(bb, cb) {
          const sb = bb[cb];
          bb[sb].deprecated = !0, Sc(bb, Eb, sb), Object.defineProperty(bb, sb, {
            value: bb[sb],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(bb, cb) {
          const sb = bb[cb];
          if (bb[sb].patchOnly) throw new Error(`field "${cb}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          bb[sb].fullStateOnly = !0, Sc(bb, ib, sb)
        },
        setStream(bb, cb) {
          const sb = bb[cb];
          bb[sb].stream = !0, bb[Ob] || Object.defineProperty(bb, Ob, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[Ob].push(sb)
        },
        setStreamPriority(bb, cb, sb) {
          const kb = bb[cb];
          bb[Gb] || Object.defineProperty(bb, Gb, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[Gb][kb] = sb
        },
        getStreamPriority: (bb, cb) => bb?.[Gb]?.[cb],
        defineField(bb, cb, sb, kb, Wb) {
          const ab = Ac(Wb, `${bb.name}.${kb}`),
            {
              complexTypeKlass: Tb,
              childType: Ub
            } = dc(ab);
          Rc.addField(cb, sb, kb, ab, hk(kb, sb, Ub, Tb)), cb[Yb][kb] && Object.defineProperty(bb.prototype, kb, cb[Yb][kb]), ("string" === typeof ab || Gc(ab)) && (cb[Jb] || Object.defineProperty(cb, Jb, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), cb[Jb][sb] = "string" === typeof ab ? cc[ab] : zc(ab.quantized))
        },
        setFields(bb, cb) {
          const sb = bb.prototype.constructor;
          qc.register(sb);
          const kb = Object.getPrototypeOf(sb),
            Wb = kb && kb[Symbol.metadata],
            ab = Rc.initialize(sb);
          sb[Ib] || (sb[Ib] = Pk[Ib]), sb[Hb] || (sb[Hb] = Pk[Hb]), sb[fb] || (sb[fb] = Pk[fb]), sb.prototype.toJSON || (sb.prototype.toJSON = Pk.prototype.toJSON);
          let Tb = ab[gb] ?? (Wb && Wb[gb]) ?? -1;
          Tb++, ab[Jb] || Object.defineProperty(ab, Jb, {
            value: Wb?.[Jb] ? [...Wb[Jb]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const Ub in cb) {
            if (void 0 !== ab[Ub]) throw new Error(`@colyseus/schema: Duplicate '${Ub}' definition on '${sb.name||"(anonymous)"}'.`);
            Rc.defineField(sb, ab, Tb, Ub, cb[Ub]), Tb++
          }
          return bb
        },
        isDeprecated: (bb, cb) => !0 === bb[cb].deprecated,
        initialize(bb) {
          const cb = Object.getPrototypeOf(bb),
            sb = cb[Symbol.metadata];
          let kb = bb[Symbol.metadata] ?? Object.create(null);
          if (cb !== Pk && kb === sb && (kb = Object.create(null), sb)) {
            Object.setPrototypeOf(kb, sb), Object.defineProperty(kb, gb, {
              value: sb[gb],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== sb[tb] && (Object.defineProperty(kb, tb, {
              value: [...sb[tb]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(kb, yb, {
              value: {
                ...sb[yb]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const bb of oc) {
              const cb = sb[bb];
              void 0 !== cb && Object.defineProperty(kb, bb, {
                value: [...cb],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(kb, Yb, {
              value: {
                ...sb[Yb]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(bb, Symbol.metadata, {
            value: kb,
            writable: !1,
            configurable: !0
          }), kb
        },
        isValidInstance: bb => bb.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(bb.constructor[Symbol.metadata], gb),
        getFields(bb) {
          const cb = bb[Symbol.metadata],
            sb = {};
          for (let kb = 0; kb <= cb[gb]; kb++) sb[cb[kb].name] = cb[kb].type;
          return sb
        },
        hasViewTagAtIndex: (bb, cb) => bb?.[tb]?.includes(cb),
        hasUnreliableAtIndex: (bb, cb) => bb?.[Pb]?.includes(cb),
        hasPatchOnlyAtIndex: (bb, cb) => bb?.[Db]?.includes(cb),
        hasFullStateOnlyAtIndex: (bb, cb) => bb?.[ib]?.includes(cb),
        hasStreamAtIndex: (bb, cb) => bb?.[Ob]?.includes(cb)
      },
      vc = (bb, cb, sb) => bb(cb, sb);
    class Fc {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(bb) {
        this.ops = new Uint8Array(Math.max(bb + 1, 1))
      }
      record(bb, cb) {
        const sb = this.ops[bb];
        0 === sb ? this.ops[bb] = cb : (sb === Wb.DELETE || sb === Wb.ADD && cb === Wb.DELETE_AND_ADD) && (this.ops[bb] = Wb.DELETE_AND_ADD), bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      recordDelete(bb, cb) {
        this.ops[bb] = cb, bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      recordRaw(bb, cb) {
        this.record(bb, cb)
      }
      operationAt(bb) {
        const cb = this.ops[bb];
        return 0 === cb ? void 0 : cb
      }
      setOperationAt(bb, cb) {
        this.ops[bb] = cb
      }
      forEach(bb) {
        this.forEachWithCtx(bb, vc)
      }
      forEachWithCtx(bb, cb) {
        let sb = this.dirtyLow,
          kb = this.dirtyHigh;
        const Wb = this.ops;
        for (; 0 !== sb;) {
          const kb = sb & -sb,
            ab = 31 - Math.clz32(kb);
          sb ^= kb, cb(bb, ab, Wb[ab])
        }
        for (; 0 !== kb;) {
          const sb = kb & -kb,
            ab = 31 - Math.clz32(sb) + 32;
          kb ^= sb, cb(bb, ab, Wb[ab])
        }
      }
      size() {
        return jc(this.dirtyLow) + jc(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class xc {
      sl = new Map;
      pureOps = [];
      record(bb, cb) {
        const sb = this.sl.get(bb);
        void 0 === sb ? this.sl.set(bb, cb) : (sb === Wb.DELETE || sb === Wb.ADD && cb === Wb.DELETE_AND_ADD) && this.sl.set(bb, Wb.DELETE_AND_ADD)
      }
      recordDelete(bb, cb) {
        this.sl.set(bb, cb)
      }
      recordRaw(bb, cb) {
        this.sl.set(bb, cb)
      }
      recordPure(bb) {
        this.pureOps.push([this.sl.size, bb])
      }
      operationAt(bb) {
        return this.sl.get(bb)
      }
      setOperationAt(bb, cb) {
        this.sl.has(bb) && this.sl.set(bb, cb)
      }
      forEach(bb) {
        this.forEachWithCtx(bb, vc)
      }
      forEachWithCtx(bb, cb) {
        const sb = this.pureOps;
        if (sb.length > 0) {
          let kb = 0,
            Wb = 0;
          for (const [ab, Tb] of this.sl) {
            for (; kb < sb.length && sb[kb][0] <= Wb;) {
              const Wb = sb[kb++][1];
              cb(bb, -Wb, Wb)
            }
            cb(bb, ab, Tb), Wb++
          }
          for (; kb < sb.length;) {
            const Wb = sb[kb++][1];
            cb(bb, -Wb, Wb)
          }
        } else
          for (const [kb, Wb] of this.sl) cb(bb, kb, Wb)
      }
      size() {
        return this.sl.size + this.pureOps.length
      }
      has() {
        return this.sl.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.sl.clear(), this.pureOps.length = 0
      }
      shift(bb) {
        const cb = new Map;
        for (const [sb, kb] of this.sl) cb.set(sb + bb, kb);
        this.sl = cb
      }
    }

    function jc(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }

    function pc(bb) {
      if (void 0 === bb) return 0;
      let cb = 0;
      for (let sb = 0, kb = bb.length; sb < kb; sb++) {
        const kb = bb[sb];
        kb < 32 && (cb |= 1 << kb)
      }
      return cb
    }

    function bs(bb) {
      const cb = bb.constructor;
      if (Object.prototype.hasOwnProperty.call(cb, hb)) return cb[hb];
      const sb = cb[Symbol.metadata],
        kb = Rc.isValidInstance(bb),
        Wb = (sb?.[tb]?.length ?? 0) > 0,
        ab = function(bb) {
          const cb = [],
            sb = [],
            kb = [],
            Wb = [],
            ab = bb?.[gb];
          if (void 0 === ab) return {
            names: cb,
            types: sb,
            tags: kb,
            encoders: Wb
          };
          const Tb = bb[Jb];
          for (let Ub = 0; Ub <= ab; Ub++) {
            const ab = bb[Ub];
            void 0 !== ab ? (cb[Ub] = ab.name, sb[Ub] = ab.type, kb[Ub] = ab.tag, Wb[Ub] = Tb?.[Ub]) : (cb[Ub] = void 0, sb[Ub] = void 0, kb[Ub] = void 0, Wb[Ub] = void 0)
          }
          return {
            names: cb,
            types: sb,
            tags: kb,
            encoders: Wb
          }
        }(sb),
        Tb = kb && !Wb ? void 0 : cb[Mb],
        Ub = {
          encoder: cb[Hb],
          filter: Tb,
          metadata: sb,
          isSchema: kb,
          filterBitmask: kb ? pc(sb?.[tb]) : 0,
          hasAnyFullStateOnly: (sb?.[ib]?.length ?? 0) > 0,
          hasAnyUnreliable: (sb?.[Pb]?.length ?? 0) > 0,
          hasAnyStream: (sb?.[Ob]?.length ?? 0) > 0,
          hasAnyView: Wb,
          fullStateOnlyBitmask: pc(sb?.[ib]),
          unreliableBitmask: pc(sb?.[Pb]),
          streamBitmask: pc(sb?.[Ob]),
          names: ab.names,
          types: ab.types,
          tags: ab.tags,
          encoders: ab.encoders
        };
      return Object.defineProperty(cb, hb, {
        value: Ub,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), Ub
    }

    function cs(bb, cb) {
      if (void 0 !== bb.parentRef && cb(bb.parentRef, bb._parentIndex)) return !0;
      for (let sb = bb.extraParents; void 0 !== sb; sb = sb.next)
        if (cb(sb.ref, sb.index)) return !0;
      return !1
    }
    const ss = (bb, cb) => {
        bb.isFieldUnreliable(cb) ? bb.ensureUnreliableRecorder().record(cb, Wb.ADD) : bb.record(cb, Wb.ADD)
      },
      ks = (bb, cb) => bb(cb);

    function Ws(bb, cb, sb) {
      const kb = bb.refTarget;
      if (void 0 !== kb[Qb]) {
        if (bb.isPatchOnly) return;
        if (Array.isArray(kb.items)) {
          const bb = kb.items;
          for (let kb = 0, Wb = bb.length; kb < Wb; kb++) void 0 !== bb[kb] && sb(cb, kb)
        } else if (void 0 !== kb.journal)
          for (const [bb, Wb] of kb.journal.keyByIndex) kb.$items.has(Wb) && sb(cb, bb);
        else if (void 0 !== kb.$items)
          for (const bb of kb.$items.keys()) sb(cb, bb)
      } else {
        const Wb = bb.metadata;
        if (!Wb) return;
        const ab = Wb[gb] ?? -1,
          Tb = Wb[Eb],
          Ub = bb.encDescriptor.names;
        for (let bb = 0; bb <= ab; bb++) {
          const Wb = Ub[bb];
          if (void 0 === Wb) continue;
          if (Tb && Tb.includes(bb)) continue;
          const ab = kb[Wb];
          void 0 !== ab && null !== ab && sb(cb, bb)
        }
      }
    }

    function as(bb, cb, sb, kb) {
      ! function(bb, cb, sb) {
        if (!cb) return;
        const kb = cb[lb],
          Wb = !kb._isSchema;
        let ab;
        Wb ? (cb = kb.parent, sb = kb.parentIndex, ab = cb?.[lb].metadata) : ab = kb.metadata;
        const Tb = (ab?.[Db]?.includes(sb) ? hs : 0) | (ab?.[ib]?.includes(sb) ? gs : 0),
          Ub = kb.flags & ys | Tb,
          Ib = bb.flags;
        bb.flags = Ib | Ub;
        Ub & ~Ib & gs && (bb.reset(), bb.unreliableRecorder?.reset());
        const Hb = bb.root?.types;
        if (!Hb?.hasFilters) return;
        const fb = ab?.[tb]?.includes(sb) ?? !1,
          Mb = ab?.[Ob]?.includes(sb) ?? !1,
          Xb = kb.isFiltered || fb || Mb;
        if (bb.isFiltered = Xb, Mb && !Wb) {
          bb.isStreamCollection = !0;
          const cb = gc(bb.ref);
          if (void 0 === cb.priority) {
            const bb = Rc.getStreamPriority(ab, sb);
            void 0 !== bb && (cb.priority = bb)
          }
          bb.root?.registerStream(bb.ref)
        }
        if (Xb) {
          const cb = Us(bb);
          bb.isVisibilitySharedWithParent = kb.isFiltered && cb && !Mb && (!fb || Wb && ab[sb].tag !== Qk)
        }
      }(bb, cb, sb), bb.isFullStateOnly || (bb.has() && bb.root?.enqueueChangeTree(bb), bb.unreliableRecorder?.has() && bb.root?.enqueueUnreliable(bb), bb.has() || bb.unreliableRecorder?.has() || bb.root?.enqueueChangeTree(bb))
    }

    function Ts(bb) {
      const cb = bb.pendingFilterRefresh;
      for (let sb = 0; sb < cb.length; sb++) {
        const bb = cb[sb];
        0 !== (bb.flags & ts) && Is(bb)
      }
      cb.length = 0
    }

    function Us(bb) {
      return bb._isSchema || "string" !== typeof bb.refTarget[Qb]
    }

    function Is(bb) {
      bb.flags &= ~ts;
      const cb = bb.root;
      if (void 0 === cb || void 0 === bb.parentRef) return;
      const sb = Us(bb);
      let kb = ns(bb, bb.parentRef, bb._parentIndex, sb);
      for (let ab = bb.extraParents; void 0 !== ab && kb !== Xs; ab = ab.next) kb |= ns(bb, ab.ref, ab.index, sb);
      if (0 === kb) return;
      bb.isVisibilitySharedWithParent = 0 !== (kb & Ms);
      const Wb = 0 === (kb & fs);
      Wb !== bb.isFiltered && (bb.isFiltered = Wb, Wb || bb.isFullStateOnly || (bb.forEachLiveWithCtx(bb, ss), bb.has() && cb.enqueueChangeTree(bb), bb.unreliableRecorder?.has() && cb.enqueueUnreliable(bb)), bb.forEachChildWithCtx(bb, ms))
    }
    const Hs = 1,
      fs = 2,
      Ms = 4,
      Xs = Hs | fs | Ms;

    function ns(bb, cb, sb, kb) {
      const Wb = cb[lb];
      if (Wb.root !== bb.root || ! function(bb, cb, sb) {
          const kb = cb.refTarget;
          if (cb.isArray) {
            const cb = kb.items,
              Wb = cb[sb];
            if (void 0 !== Wb && Wb[lb] === bb) return !0;
            for (let sb = 0, kb = cb.length; sb < kb; sb++) {
              const kb = cb[sb];
              if (void 0 !== kb && kb[lb] === bb) return !0
            }
            return !1
          }
          const Wb = cb.getValue(sb);
          return void 0 !== Wb && Wb[lb] === bb
        }(bb, Wb, sb)) return 0;
      Wb.flags & ts && Is(Wb);
      let ab = Hs;
      if (Wb._isSchema) {
        void 0 !== Wb.encDescriptor.tags[sb] || Wb.isFieldStream(sb) || (Wb.isFiltered ? kb && (ab |= Ms) : ab |= fs)
      } else if (Wb.isFiltered) {
        if (kb && !Wb.isStreamCollection) {
          const bb = Wb.parent?.[lb];
          (bb?._isSchema ? bb.encDescriptor.tags[Wb.parentIndex] : void 0) !== Qk && (ab |= Ms)
        }
      } else ab |= fs;
      return ab
    }
    const ms = (bb, cb, sb) => {
      Is(cb)
    };

    function ls(bb, cb, sb, kb) {
      if (bb.addParent(cb, kb), !sb) return;
      const Wb = sb.add(bb);
      sb !== bb.root && (bb.root = sb, as(bb, cb, kb));
      const ab = cb?.[lb];
      if (void 0 !== ab && void 0 !== ab.subscribedViews && void 0 !== cb[Qb] && function(bb, cb, sb, kb) {
          const Wb = bb.subscribedViews;
          if (void 0 === Wb) return;
          const ab = bb.isStreamCollection,
            Tb = ab ? bb.ref : void 0,
            Ub = ab ? void 0 : sb[lb];
          for (let Ib = 0, Hb = Wb.length; Ib < Hb; Ib++) {
            let bb = Wb[Ib];
            for (; 0 !== bb;) {
              const sb = bb & -bb;
              bb ^= sb;
              const Hb = 32 * Ib + (31 - Math.clz32(sb)),
                fb = kb.activeViews.get(Hb),
                Mb = fb?.deref();
              void 0 !== Mb ? ab ? Dc(Tb, Hb, cb) : void 0 !== Ub && Mb.markVisible(Ub) : Wb[Ib] &= ~sb
            }
          }
        }(ab, kb, bb.ref, sb), Wb) {
        let cb = Ns[Vs];
        void 0 === cb && (cb = {
          parentRef: void 0,
          root: void 0
        }, Ns[Vs] = cb), cb.parentRef = bb.ref, cb.root = sb, Vs++, es(bb, cb, Ls), Vs--
      }
    }

    function Qs(bb, cb, sb) {
      bb(cb, sb)
    }

    function es(bb, cb, sb) {
      const kb = bb.refTarget;
      if (kb[Qb]) {
        if ("string" !== typeof kb[Qb]) {
          const bb = kb.items;
          if (void 0 !== bb)
            for (let kb = 0, Wb = bb.length; kb < Wb; kb++) {
              const Wb = bb[kb];
              Wb && sb(cb, Wb[lb], kb)
            } else {
              const bb = kb.$items,
                Wb = kb._collectionIndexes;
              for (const kb of bb.keys()) {
                const ab = bb.get(kb);
                ab && sb(cb, ab[lb], Wb?.[kb] ?? kb)
              }
            }
        }
      } else {
        const Wb = bb.metadata,
          ab = Wb?.[Bb];
        if (!ab) return;
        const Tb = bb.encDescriptor.names;
        for (let bb = 0, Ub = ab.length; bb < Ub; bb++) {
          const Wb = ab[bb],
            Ub = kb[Tb[Wb]];
          Ub && sb(cb, Ub[lb], Wb)
        }
      }
    }

    function Cs(bb, cb, sb) {
      cb.root !== bb ? cb.setRoot(bb) : bb.add(cb)
    }
    const Ns = [];
    let Vs = 0;

    function Ls(bb, cb, sb) {
      if (cb.root === bb.root) return bb.root.add(cb), void bb.root.moveNextToParent(cb);
      cb.setParent(bb.parentRef, bb.root, sb)
    }

    function us(bb, cb, sb) {
      const kb = (3 & sb) << 3;
      return sb < 4 ? bb >>> kb & 255 : cb >>> kb & 255
    }
    const Ys = (bb, cb, sb) => bb(cb, sb);
    const hs = 16,
      gs = 32,
      Bs = 128,
      ts = 256,
      ys = hs | gs;
    class Ps {
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
        return 0 !== (this.flags & hs)
      }
      set isPatchOnly(bb) {
        this.flags = bb ? this.flags | hs : this.flags & ~hs
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & gs)
      }
      set isFullStateOnly(bb) {
        this.flags = bb ? this.flags | gs : this.flags & ~gs
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(bb) {
        this.flags = bb ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Bs)
      }
      set needsRestage(bb) {
        this.flags = bb ? this.flags | Bs : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Fc(this.metadata?.[gb] ?? 0) : new xc), this.unreliableRecorder
      }
      isFieldUnreliable(bb) {
        const cb = this.encDescriptor;
        return !!cb.hasAnyUnreliable && (bb < 32 ? 0 !== (cb.unreliableBitmask & 1 << bb) : Rc.hasUnreliableAtIndex(this.metadata, bb))
      }
      isFieldFullStateOnly(bb) {
        if (this.isFullStateOnly) return !0;
        const cb = this.encDescriptor;
        return !!cb.hasAnyFullStateOnly && (bb < 32 ? 0 !== (cb.fullStateOnlyBitmask & 1 << bb) : Rc.hasFullStateOnlyAtIndex(this.metadata, bb))
      }
      isFieldStream(bb) {
        const cb = this.encDescriptor;
        return !!cb.hasAnyStream && (bb < 32 ? 0 !== (cb.streamBitmask & 1 << bb) : Rc.hasStreamAtIndex(this.metadata, bb))
      }
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        this.ref = bb, this.refTarget = cb;
        const sb = bs(bb);
        this.encDescriptor = sb, this.metadata = sb.metadata;
        const kb = sb.isSchema;
        if (this._isSchema = kb, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, kb) {
          const bb = this.metadata?.[gb] ?? 0;
          bb > 7 && (this.ops = new Uint8Array(bb + 1))
        } else this.collDirty = new Map
      }
      _opAt(bb) {
        const cb = this.ops;
        if (void 0 !== cb) return cb[bb];
        const sb = (3 & bb) << 3;
        return bb < 4 ? this.opsLow >>> sb & 255 : this.opsHigh >>> sb & 255
      }
      _opPut(bb, cb) {
        const sb = this.ops;
        if (void 0 !== sb) return void(sb[bb] = cb);
        const kb = (3 & bb) << 3,
          Wb = ~(255 << kb);
        bb < 4 ? this.opsLow = this.opsLow & Wb | cb << kb : this.opsHigh = this.opsHigh & Wb | cb << kb
      }
      _markDirty(bb) {
        bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      record(bb, cb) {
        if (this._isSchema) {
          const sb = this._opAt(bb);
          0 === sb ? this._opPut(bb, cb) : (sb === Wb.DELETE || sb === Wb.ADD && cb === Wb.DELETE_AND_ADD) && this._opPut(bb, Wb.DELETE_AND_ADD), this._markDirty(bb)
        } else {
          const sb = this.collDirty,
            kb = sb.get(bb);
          let ab;
          ab = void 0 === kb ? cb : kb === Wb.DELETE || kb === Wb.ADD && cb === Wb.DELETE_AND_ADD ? Wb.DELETE_AND_ADD : kb, sb.set(bb, ab)
        }
      }
      recordDelete(bb, cb) {
        this._isSchema ? (this._opPut(bb, cb), this._markDirty(bb)) : this.collDirty.set(bb, cb)
      }
      recordRaw(bb, cb) {
        this._isSchema ? (this._opPut(bb, cb), this._markDirty(bb)) : this.collDirty.set(bb, cb)
      }
      recordPure(bb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, bb])
      }
      operationAt(bb) {
        if (this._isSchema) {
          const cb = this._opAt(bb);
          return 0 === cb ? void 0 : cb
        }
        return this.collDirty.get(bb)
      }
      setOperationAt(bb, cb) {
        if (this._isSchema) this._opPut(bb, cb);
        else {
          const sb = this.collDirty;
          sb.has(bb) && sb.set(bb, cb)
        }
      }
      forEach(bb) {
        this.forEachWithCtx(bb, Ys)
      }
      forEachWithCtx(bb, cb) {
        if (this._isSchema) {
          let sb = this.dirtyLow,
            kb = this.dirtyHigh;
          const Wb = this.ops;
          if (void 0 !== Wb) {
            for (; 0 !== sb;) {
              const kb = sb & -sb,
                ab = 31 - Math.clz32(kb);
              sb ^= kb, cb(bb, ab, Wb[ab])
            }
            for (; 0 !== kb;) {
              const sb = kb & -kb,
                ab = 31 - Math.clz32(sb) + 32;
              kb ^= sb, cb(bb, ab, Wb[ab])
            }
          } else {
            const kb = this.opsLow,
              Wb = this.opsHigh;
            for (; 0 !== sb;) {
              const ab = sb & -sb,
                Tb = 31 - Math.clz32(ab);
              sb ^= ab, cb(bb, Tb, us(kb, Wb, Tb))
            }
          }
          return
        }
        const sb = this.collDirty,
          kb = this.collPureOps;
        if (void 0 !== kb && kb.length > 0) {
          let Wb = 0,
            ab = 0;
          for (const [Tb, Ub] of sb) {
            for (; Wb < kb.length && kb[Wb][0] <= ab;) {
              const sb = kb[Wb++][1];
              cb(bb, -sb, sb)
            }
            cb(bb, Tb, Ub), ab++
          }
          for (; Wb < kb.length;) {
            const sb = kb[Wb++][1];
            cb(bb, -sb, sb)
          }
        } else
          for (const [Wb, ab] of sb) cb(bb, Wb, ab)
      }
      size() {
        return this._isSchema ? jc(this.dirtyLow) + jc(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(bb, cb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const sb = this.collDirty,
          kb = new Map,
          ab = !this.paused && !this.isFullStateOnly;
        if (bb > 0)
          for (const [Wb, Tb] of sb) Wb < bb && kb.set(Wb, Tb);
        if (ab)
          for (let Tb = 0; Tb < cb; Tb++) kb.set(bb + Tb, Wb.ADD);
        for (const [Wb, Tb] of sb) Wb >= bb && kb.set(Wb + cb, Tb);
        this.collDirty = kb, ab && this.root?.enqueueChangeTree(this)
      }
      removeAt(bb, cb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const sb = this.collDirty,
          kb = bb + cb;
        let Wb = !1;
        for (const Tb of sb.keys())
          if (Tb >= kb) {
            Wb = !0;
            break
          } if (!Wb) {
          for (let cb = bb; cb < kb; cb++) sb.delete(cb);
          return
        }
        const ab = new Map;
        for (const [Tb, Ub] of sb) Tb < bb ? ab.set(Tb, Ub) : Tb >= kb && ab.set(Tb - cb, Ub);
        this.collDirty = ab
      }
      unshift(bb) {
        this.insertAt(0, bb)
      }
      setRoot(bb) {
        ! function(bb, cb) {
          bb.root = cb;
          const sb = cb.add(bb);
          as(bb, bb.parent, bb.parentIndex), sb && es(bb, cb, Cs)
        }(this, bb)
      }
      setParent(bb, cb, sb) {
        ls(this, bb, cb, sb)
      }
      forEachChild(bb) {
        es(this, bb, Qs)
      }
      forEachChildWithCtx(bb, cb) {
        es(this, bb, cb)
      }
      forEachLive(bb) {
        Ws(this, bb, ks)
      }
      forEachLiveWithCtx(bb, cb) {
        Ws(this, bb, cb)
      }
      operation(bb) {
        this.paused || this.isFullStateOnly || (this.recordPure(bb), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(bb, cb, sb) {
        if (!this.paused && !this.isFieldFullStateOnly(bb)) {
          if (this.isFieldUnreliable(bb) && !this.isNew) {
            const kb = this.ensureUnreliableRecorder();
            return sb ? kb.recordRaw(bb, cb) : kb.record(bb, cb), void this.root?.enqueueUnreliable(this)
          }
          sb ? this.recordRaw(bb, cb) : this.record(bb, cb), this.root?.enqueueChangeTree(this)
        }
      }
      change(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wb.ADD;
        this._routeAndRecord(bb, cb, !1)
      }
      indexedOperation(bb, cb) {
        this._routeAndRecord(bb, cb, !0)
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
        const cb = this.paused;
        this.paused = !0;
        try {
          return bb()
        } finally {
          this.paused = cb
        }
      }
      markDirty(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wb.ADD;
        const sb = this.paused;
        this.paused = !1;
        try {
          this.change(bb, cb)
        } finally {
          this.paused = sb
        }
      }
      getValue(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Xb](bb, cb)
      }
      delete(bb, cb) {
        if (void 0 === bb) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${bb}'`)
          } catch (IW) {
            console.warn(IW)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(bb)) return this.getValue(bb);
        const sb = this.isFieldUnreliable(bb) && !this.isNew;
        sb ? this.ensureUnreliableRecorder().recordDelete(bb, cb ?? Wb.DELETE) : this.recordDelete(bb, cb ?? Wb.DELETE);
        const kb = this.getValue(bb);
        return kb && kb[lb] && this.root?.remove(kb[lb]), sb ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), kb
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Cb]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Cb]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Cb]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const bb = bb => {
          if (bb < 0) return;
          const cb = this.getValue(bb);
          cb && cb[lb] && cb[lb].discardAll()
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
      addParent(bb, cb) {
        ! function(bb, cb, sb) {
          if (bb.parentRef) {
            if (bb.parentRef[lb] === cb[lb]) return void(bb._parentIndex = sb);
            if (cs(bb, ((bb, sb) => bb[lb] === cb[lb]))) return void(bb._parentIndex = sb)
          }
          void 0 === bb.parentRef ? (bb.parentRef = cb, bb._parentIndex = sb) : (bb.extraParents = {
            ref: bb.parentRef,
            index: bb._parentIndex,
            next: bb.extraParents
          }, bb.parentRef = cb, bb._parentIndex = sb)
        }(this, bb, cb)
      }
      setParentIndex(bb, cb) {
        ! function(bb, cb, sb) {
          if (void 0 !== bb.extraParents)
            if (bb.parentRef[lb] !== cb[lb]) {
              for (let kb = bb.extraParents; void 0 !== kb; kb = kb.next)
                if (kb.ref[lb] === cb[lb]) return void(kb.index = sb)
            } else bb._parentIndex = sb;
          else bb._parentIndex = sb
        }(this, bb, cb)
      }
      removeParent() {
        return function(bb, cb) {
          if (bb.parentRef && bb.parentRef[lb] === cb[lb]) return bb.extraParents ? (bb.parentRef = bb.extraParents.ref, bb._parentIndex = bb.extraParents.index, bb.extraParents = bb.extraParents.next) : (bb.parentRef = void 0, bb._parentIndex = void 0), !0;
          let sb = bb.extraParents,
            kb = null;
          for (; sb;) {
            if (sb.ref[lb] === cb[lb]) return kb ? kb.next = sb.next : bb.extraParents = sb.next, !0;
            kb = sb, sb = sb.next
          }
          return void 0 === bb.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(bb) {
        return function(bb, cb) {
          if (void 0 !== bb.parentRef && cb(bb.parentRef, bb._parentIndex)) return {
            ref: bb.parentRef,
            index: bb._parentIndex
          };
          for (let sb = bb.extraParents; void 0 !== sb; sb = sb.next)
            if (cb(sb.ref, sb.index)) return {
              ref: sb.ref,
              index: sb.index
            }
        }(this, bb)
      }
      hasParent(bb) {
        return cs(this, bb)
      }
      indexInParent(bb) {
        return function(bb, cb) {
          if (bb.parentRef && bb.parentRef[lb] === cb[lb]) return bb._parentIndex;
          for (let sb = bb.extraParents; void 0 !== sb; sb = sb.next)
            if (sb.ref[lb] === cb[lb]) return sb.index
        }(this, bb)
      }
      getAllParents() {
        return function(bb) {
          const cb = [];
          bb.parentRef && cb.push({
            ref: bb.parentRef,
            index: bb._parentIndex
          });
          let sb = bb.extraParents;
          for (; sb;) cb.push({
            ref: sb.ref,
            index: sb.index
          }), sb = sb.next;
          return cb
        }(this)
      }
    }
    class Ds {
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
        const cb = this.ref;
        if (cb[Qb]) {
          if ("string" !== typeof cb[Qb])
            for (const [sb, kb] of cb.entries()) kb && bb(kb[lb], cb._collectionIndexes?.[sb] ?? sb);
          return
        }
        const sb = cb.constructor,
          kb = sb?.[Symbol.metadata];
        if (!kb) return;
        const Wb = kb[Bb] ?? [];
        for (let ab = 0; ab < Wb.length; ab++) {
          const sb = Wb[ab],
            Tb = cb[kb[sb].name];
          Tb && bb(Tb[lb], sb)
        }
      }
      forEachChildWithCtx(bb, cb) {
        this.forEachChild(((sb, kb) => cb(bb, sb, kb)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Es(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
      var sb;
      Object.defineProperty(bb, lb, {
        value: (sb = cb, new Ds(sb)),
        enumerable: !1,
        writable: !0
      })
    }

    function is(bb, cb, sb, kb, ab, Tb, Ib) {
      void 0 !== Ib ? Ib(cb, kb, Tb) : "string" === typeof sb ? cc[sb]?.(cb, kb, Tb) : null != sb[Symbol.metadata] ? (cc.number(cb, kb[Ub], Tb), (ab & Wb.ADD) === Wb.ADD && bb.tryEncodeTypeId(cb, sb, kb.constructor, Tb)) : cc.number(cb, kb[Ub], Tb)
    }
    const Os = function(bb, cb, sb, kb, ab, Tb, Ub, Ib) {
        if (cb[Tb.offset++] = 255 & (kb | ab), ab === Wb.DELETE) return;
        const Hb = sb.encDescriptor,
          fb = sb.ref,
          Mb = fb[Lb][kb] ?? fb[Hb.names[kb]];
        is(bb, cb, Hb.types[kb], Mb, ab, Tb, Hb.encoders[kb])
      },
      Gs = function(bb, cb, sb, kb, ab, Tb) {
        if (cb[Tb.offset++] = 255 & ab, cc.number(cb, kb, Tb), ab === Wb.DELETE) return;
        const Ub = sb.ref;
        if ((ab & Wb.ADD) === Wb.ADD) {
          const bb = Ub.$indexes.get(kb);
          cc.string(cb, bb, Tb)
        }
        is(bb, cb, Ub[Qb], Ub[Xb](kb), ab, Tb)
      },
      Ks = function(bb, cb, sb, kb, ab, Tb) {
        if (cb[Tb.offset++] = 255 & ab, cc.number(cb, kb, Tb), ab === Wb.DELETE) return;
        const Ub = sb.ref;
        is(bb, cb, Ub[Qb], Ub[Xb](kb), ab, Tb)
      },
      Zs = function(bb, cb, sb, kb, ab, Tb) {
        const Ub = sb.ref;
        (ab & Wb.ADD) === Wb.ADD && "function" === typeof Ub.set ? Gs(bb, cb, sb, kb, ab, Tb) : Ks(bb, cb, sb, kb, ab, Tb)
      },
      zs = function(bb, cb, sb, kb, ab, Tb, Ib, Hb) {
        const fb = sb.refTarget,
          Mb = fb[Qb],
          nb = "string" !== typeof Mb;
        let mb;
        if (Hb && sb.isFiltered && nb) {
          const bb = fb.tmpItems[kb];
          if (!bb) return;
          if (mb = bb[Ub], ab === Wb.DELETE) ab = Wb.DELETE_BY_REFID;
          else if ((ab & Wb.ADD) === Wb.ADD) ab = Wb.ADD_BY_REFID;
          else if ((ab & Wb.MOVE) === Wb.MOVE) return
        } else if (ab === Wb.DELETE && nb) {
          const bb = fb.tmpItems[kb];
          if (!bb) return;
          mb = bb[Ub], ab = Wb.DELETE_BY_REFID
        } else mb = kb;
        if (cb[Tb.offset++] = 255 & ab, cc.number(cb, mb, Tb), ab === Wb.DELETE || ab === Wb.DELETE_BY_REFID) return;
        is(bb, cb, Mb, fb[Xb](kb, Ib), ab, Tb)
      };

    function qs(bb, cb, sb, kb, ab, Tb, Ib) {
      const Hb = bb.resyncVisited;
      let fb = Hb.get(bb.currentRefId);
      if (void 0 === fb && Hb.set(bb.currentRefId, fb = new Set), fb.add(kb), void 0 !== ab && sb === Wb.ADD && ab !== Tb) {
        const sb = ab[Ub];
        void 0 !== sb && (bb.root.removeRef(sb), Ib?.push({
          ref: cb,
          refId: bb.currentRefId,
          op: Wb.DELETE,
          dynamicIndex: kb,
          value: void 0,
          previousValue: ab
        }))
      }
    }

    function ds(bb, cb, sb, kb) {
      const Wb = cb[Ub];
      if (void 0 === Wb || sb.has(Wb)) return;
      sb.add(Wb);
      const ab = cb.constructor[Symbol.metadata],
        Tb = ab?.[Bb];
      if (void 0 === Tb) return;
      const Ib = ab[Db];
      for (let Ub = 0; Ub < Tb.length; Ub++) {
        const Wb = Tb[Ub];
        if (void 0 !== Ib && Ib.includes(Wb)) continue;
        const Hb = ab[Wb],
          fb = cb[Hb.name];
        fb && (Pk.is(Hb.type) ? ds(bb, fb, sb, kb) : As(bb, fb, sb, kb))
      }
    }

    function As(bb, cb, sb, kb) {
      const ab = cb[eb] ?? cb,
        Tb = ab[Ub];
      if (void 0 === Tb || sb.has(Tb)) return;
      sb.add(Tb);
      const Ib = bb.resyncVisited.get(Tb);
      if (void 0 === Ib) return;
      const Hb = bb.root;
      ab[mb](Ib, ((bb, sb) => {
        kb?.push({
          ref: cb,
          refId: Tb,
          op: Wb.DELETE,
          dynamicIndex: sb,
          value: void 0,
          previousValue: bb
        });
        const ab = bb?.[Ub];
        void 0 !== ab && Hb.removeRef(ab)
      }), (cb => {
        Pk.isSchema(cb) && ds(bb, cb, sb, kb)
      }))
    }
    const ws = 1,
      rs = 2,
      os = 3,
      Ss = 4,
      Rs = 5;

    function vs(bb, cb, sb, kb, ab, Tb, Ib, Hb, fb) {
      const Mb = bb.root;
      let Xb;
      if ((cb & Wb.DELETE) === Wb.DELETE) {
        const bb = ab?.[Ub];
        void 0 !== bb && Mb.removeRef(bb), cb !== Wb.DELETE_AND_ADD && sb[nb](kb), Xb = void 0
      }
      if (cb === Wb.DELETE);
      else if ("string" === typeof Tb) Xb = Nc[Tb](Ib, Hb);
      else if (Gc(Tb)) Xb = function(bb, cb, sb) {
        return Zc(bb, (0, Nc[bb.wire])(cb, sb))
      }(Tb.quantized, Ib, Hb);
      else if (Pk.is(Tb)) {
        const sb = Nc.number(Ib, Hb);
        if (Xb = Mb.refs.get(sb), (cb & Wb.ADD) === Wb.ADD) {
          const kb = bb.getInstanceType(Ib, Hb, Tb);
          Xb || (Xb = bb.createInstanceOfType(kb)), Mb.addRef(sb, Xb, Xb !== ab || cb === Wb.DELETE_AND_ADD && Xb === ab)
        }
      } else {
        const sb = (mb = Object.keys(Tb)[0], Vc[mb]),
          kb = Nc.number(Ib, Hb);
        null !== bb.resyncVisited && function(bb, cb) {
          const sb = bb.resyncVisited;
          sb.has(cb) || sb.set(cb, new Set)
        }(bb, kb);
        const nb = Mb.refs.has(kb) ? ab || Mb.refs.get(kb) : sb.constructor.initializeForDecoder();
        if (Xb = nb.clone(!0), Xb[Qb] = Object.values(Tb)[0], ab) {
          let bb = ab[Ub];
          if (void 0 !== bb && kb !== bb) {
            (cb & Wb.DELETE) !== Wb.DELETE && Mb.removeRef(bb);
            const sb = ab.entries();
            let kb;
            for (;
              (kb = sb.next()) && !kb.done;) {
              const [cb, sb] = kb.value;
              "object" === typeof sb && (bb = sb[Ub]), fb?.push({
                ref: ab,
                refId: bb,
                op: Wb.DELETE,
                field: cb,
                value: void 0,
                previousValue: sb
              })
            }
          }
        }
        Mb.addRef(kb, Xb, nb !== ab || cb === Wb.DELETE_AND_ADD && nb === ab)
      }
      var mb;
      return Xb
    }
    const Fs = function(bb, cb, sb, kb, Wb) {
        const ab = cb[sb.offset++],
          Tb = kb.constructor[Symbol.metadata],
          Ub = ab >> 6 << 6,
          Ib = ab % (Ub || 255),
          Hb = Tb[Ib];
        if (void 0 === Hb) return console.warn("@colyseus/schema: field not defined at", {
          index: Ib,
          ref: kb.constructor.name,
          metadata: Tb
        }), -1;
        const fb = !0 === Hb.deprecated,
          Mb = fb ? void 0 : kb[Xb](Ib),
          nb = vs(bb, Ub, kb, Ib, Mb, Hb.type, cb, sb, Wb);
        fb || (null !== nb && void 0 !== nb && (kb[Hb.name] = nb), Mb !== nb && Wb?.push({
          ref: kb,
          refId: bb.currentRefId,
          op: Ub,
          field: Hb.name,
          value: nb,
          previousValue: Mb
        }))
      },
      xs = function(bb, cb, sb, kb, ab) {
        const Tb = kb[eb] ?? kb,
          Ub = cb[sb.offset++];
        if (Ub === Wb.CLEAR) return bb.removeChildRefs(Tb, ab), void Tb.clear();
        const Ib = Nc.number(cb, sb),
          Hb = Tb[Qb],
          fb = Tb.constructor.COLLECTION_KIND;
        let Mb;
        (Ub & Wb.ADD) === Wb.ADD ? fb === ws ? (Mb = Nc.string(cb, sb), Tb.setIndex(Ib, Mb)) : Mb = Ib : Mb = Tb.getIndex(Ib);
        const nb = Tb[Xb](Ib),
          mb = vs(bb, Ub, kb, Ib, nb, Hb, cb, sb, ab);
        if (null !== bb.resyncVisited && qs(bb, kb, Ub, Mb, nb, mb, ab), null !== mb && void 0 !== mb) switch (fb) {
          case ws:
            Tb.$items.set(Mb, mb);
            break;
          case rs:
            Tb.$setAt(Ib, mb, null !== bb.resyncVisited && Ub === Wb.ADD ? Wb.REPLACE : Ub);
            break;
          case os:
          case Ss:
          case Rs:
            Tb.$items.has(Ib) || (Tb.$items.set(Ib, mb), "number" === typeof Tb.$refId && Ib >= Tb.$refId && (Tb.$refId = Ib + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Tb.constructor?.name} \u2014 item at index ${Ib} was not stored.`)
        }
        nb !== mb && ab?.push({
          ref: kb,
          refId: bb.currentRefId,
          op: Ub,
          dynamicIndex: Mb,
          value: mb,
          previousValue: nb
        })
      },
      ps = function(bb, cb, sb, kb, ab) {
        const Tb = kb[eb] ?? kb;
        let Ub, Ib = cb[sb.offset++];
        if (Ib === Wb.CLEAR) return bb.removeChildRefs(Tb, ab), void Tb.clear();
        if (Ib === Wb.REVERSE) return void Tb.items.reverse();
        if (Ib === Wb.DELETE_BY_REFID) {
          const Ib = Nc.number(cb, sb),
            Hb = bb.root.refs.get(Ib);
          if (void 0 === Hb) return;
          if (bb.root.removeRef(Ib), Ub = Tb.findIndex((bb => bb === Hb)), -1 === Ub) return;
          return Tb[nb](Ub), void ab?.push({
            ref: kb,
            refId: bb.currentRefId,
            op: Wb.DELETE,
            dynamicIndex: Ub,
            value: void 0,
            previousValue: Hb
          })
        }
        if (Ib === Wb.ADD_BY_REFID) {
          const kb = Nc.number(cb, sb),
            Wb = bb.root.refs.get(kb);
          Wb && (Ub = Tb.findIndex((bb => bb === Wb))), -1 !== Ub && void 0 !== Ub || (Ub = Tb.length)
        } else Ub = Nc.number(cb, sb);
        const Hb = Tb[Qb];
        let fb = Ub;
        const Mb = Tb.items[Ub],
          Xb = vs(bb, Ib, kb, Ub, Mb, Hb, cb, sb, ab);
        null !== bb.resyncVisited && qs(bb, kb, Ib, Ub, Mb, Xb, ab), null !== Xb && void 0 !== Xb && Xb !== Mb && Tb.$setAt(Ub, Xb, null !== bb.resyncVisited && Ib === Wb.ADD ? Wb.REPLACE : Ib), Mb !== Xb && ab?.push({
          ref: kb,
          refId: bb.currentRefId,
          op: Ib,
          dynamicIndex: fb,
          value: Xb,
          previousValue: Mb
        })
      };
    class bk extends Error {}

    function ck(bb, cb, sb, kb) {
      if (!(bb instanceof cb)) throw new bk(`a '${cb.name}' was expected, but '${bb&&bb.constructor.name}' was provided in ${sb.constructor.name}#${kb}`)
    }
    const sk = (bb, cb) => {
        const sb = bb.toString(),
          kb = cb.toString();
        return sb < kb ? -1 : sb > kb ? 1 : 0
      },
      kk = {
        get: (bb, cb) => "symbol" === typeof cb || isNaN(cb) ? Reflect.get(bb, cb) : bb.items[cb],
        set: (bb, cb, sb) => {
          if ("symbol" !== typeof cb && !isNaN(cb)) {
            if (void 0 === sb || null === sb) bb.$deleteAt(cb);
            else {
              let kb;
              if (sb[lb]) {
                ck(sb, bb[Qb], bb, cb);
                const ab = bb.items[cb];
                bb.isMovingItems ? (kb = bb.$wireIndex(Number(cb)), void 0 !== ab ? sb[lb].isNew ? bb[lb].indexedOperation(kb, Wb.MOVE_AND_ADD) : (bb[lb].getChange(kb) & Wb.DELETE) === Wb.DELETE ? bb[lb].indexedOperation(kb, Wb.DELETE_AND_MOVE) : bb[lb].indexedOperation(kb, Wb.MOVE) : sb[lb].isNew && bb[lb].indexedOperation(kb, Wb.ADD), sb[lb].setParent(bb, bb[lb].root, kb)) : kb = bb.$changeAt(Number(cb), sb), void 0 !== ab && ab[lb].root?.remove(ab[lb])
              } else kb = bb.$changeAt(Number(cb), sb);
              bb.items[cb] = sb, void 0 !== kb && (bb.tmpItems[kb] = sb)
            }
            return !0
          }
          return Reflect.set(bb, cb, sb)
        },
        deleteProperty: (bb, cb) => ("number" === typeof cb ? bb.$deleteAt(cb) : delete bb[cb], !0),
        has: (bb, cb) => "symbol" === typeof cb || isNaN(Number(cb)) ? Reflect.has(bb, cb) : Reflect.has(bb.items, cb)
      };
    class Wk {
      [lb];
      [Ub];
      [eb];
      [Qb];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Hb] = zs;
      static[fb] = ps;
      static COLLECTION_KIND = rs;
      static[Mb](bb, cb, sb) {
        if (!sb) return !0;
        const kb = bb[eb] ?? bb;
        return "string" === typeof kb[Qb] || sb.isChangeTreeVisible(kb.tmpItems[cb]?.[lb])
      }
      static is(bb) {
        return Array.isArray(bb) || void 0 !== bb.array
      }
      static from(bb) {
        return new Wk(...Array.from(bb))
      }
      constructor() {
        this[Qb] = void 0, this[eb] = this;
        const bb = new Proxy(this, kk);
        return Object.defineProperty(this, lb, {
          value: new Ps(bb, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), bb
      }
      static initializeForDecoder() {
        const bb = Object.create(Wk.prototype);
        bb.items = [], bb.isMovingItems = !1, bb._needsCompaction = !1, bb[Qb] = void 0, bb[eb] = bb;
        const cb = new Proxy(bb, kk);
        return Es(bb, cb), cb
      }
      set length(bb) {
        0 === bb ? this.clear() : bb < this.items.length ? this.splice(bb, this.length - bb) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[lb].pause()
      }
      resumeTracking() {
        this[lb].resume()
      }
      untracked(bb) {
        return this[lb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[lb].paused
      }
      push() {
        const bb = this[eb],
          cb = bb.items,
          sb = bb.tmpItems,
          kb = bb[lb],
          ab = bb[Qb];
        let Tb = sb.length;
        for (let Ub = 0, Ib = arguments.length; Ub < Ib; Ub++, Tb++) {
          const Ib = Ub < 0 || arguments.length <= Ub ? void 0 : arguments[Ub];
          if (void 0 === Ib || null === Ib) return;
          "object" === typeof Ib && ab && ck(Ib, ab, bb, Ub), kb.indexedOperation(Tb, Wb.ADD), cb.push(Ib), sb.push(Ib), Ib[lb]?.setParent(this, kb.root, Tb)
        }
        return Tb
      }
      pop() {
        const bb = this[eb],
          cb = bb.tmpItems,
          sb = bb.deletedIndexes;
        let kb = -1;
        for (let ab = cb.length - 1; ab >= 0; ab--)
          if (!0 !== sb[ab]) {
            kb = ab;
            break
          } if (kb < 0) return;
        const Wb = bb.$isUnsentAdd(kb);
        return bb[lb].delete(kb), Wb ? bb.$cancelAdd(kb) : sb[kb] = !0, bb.items.pop()
      }
      at(bb) {
        return bb < 0 && (bb += this.length), this.items[bb]
      }
      $wireIndex(bb) {
        const cb = this.deletedIndexes;
        if (0 === cb.length) return bb;
        const sb = this.tmpItems;
        let kb = 0;
        for (let Wb = 0; Wb < sb.length; Wb++)
          if (!0 !== cb[Wb]) {
            if (kb === bb) return Wb;
            kb++
          } return sb.length + (bb - kb)
      }
      $isUnsentAdd(bb) {
        const cb = this[lb];
        return 0 === (576 & cb.flags) && !cb.paused && "string" !== typeof this[Qb] && cb.operationAt(bb) === Wb.ADD
      }
      $cancelAdd(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const sb = this[lb],
          kb = this.tmpItems[bb];
        this.tmpItems.splice(bb, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(bb, 1), sb.removeAt(bb, 1);
        const Wb = kb?.[lb];
        void 0 !== Wb && void 0 === Wb.root && Wb.removeParent(this), cb && this.$reindexChildren(bb)
      }
      $reindexChildren(bb, cb) {
        if (!this[lb].hasFilteredFields) return;
        if ("string" === typeof this[Qb]) return;
        const sb = this.tmpItems,
          kb = sb.length;
        if (void 0 !== cb)
          for (; bb < kb && sb[bb] === cb[bb];) bb++;
        for (let Wb = bb; Wb < kb; Wb++) sb[Wb]?.[lb]?.setParentIndex(this, Wb)
      }
      $changeAt(bb, cb) {
        if (void 0 === cb || null === cb) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[bb] === cb) return;
        const sb = void 0 !== this.items[bb] ? "object" === typeof cb ? Wb.DELETE_AND_ADD : Wb.REPLACE : Wb.ADD,
          kb = this.$wireIndex(bb),
          ab = this[lb];
        return ab.change(kb, sb), cb[lb]?.setParent(this, ab.root, kb), kb
      }
      $deleteAt(bb, cb) {
        this[lb].delete(this.$wireIndex(bb), cb)
      }
      $setAt(bb, cb, sb) {
        sb === Wb.ADD && void 0 !== this.items[bb] ? this.items.splice(bb, 0, cb) : sb === Wb.DELETE_AND_MOVE ? (this.items.splice(bb, 1), this.items[bb] = cb) : (bb > this.items.length && (this._needsCompaction = !0), this.items[bb] = cb)
      }
      clear() {
        const bb = this[eb];
        if (0 === bb.items.length) return;
        const cb = bb[lb];
        cb.forEachChild(((bb, sb) => {
          cb.root?.remove(bb)
        })), cb.discard(), cb.operation(Wb.CLEAR), bb.items.length = 0, bb.tmpItems.length = 0
      } [Nb]() {
        const bb = this[eb] ?? this,
          cb = bb[lb];
        if (cb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const sb = bb.items;
        for (let kb = 0; kb < sb.length; kb++) sb[kb]?.[Nb]?.();
        bb.items.length = 0, bb.tmpItems.length = 0, bb.deletedIndexes.length = 0, cb.recycle(), bb[Ub] = void 0
      }
      concat() {
        return new Wk(...this.items.concat(...arguments))
      }
      join(bb) {
        return this.items.join(bb)
      }
      reverse() {
        const bb = this[eb],
          cb = bb[lb];
        if (cb.has() || bb.deletedIndexes.length > 0) {
          const cb = bb.items.slice().reverse();
          return this.clear(), this.push(...cb), this
        }
        return cb.operation(Wb.REVERSE), bb.items.reverse(), bb.tmpItems.reverse(), bb.$reindexChildren(0), this
      }
      shift() {
        const bb = this[eb],
          cb = bb.items;
        if (0 === cb.length) return;
        const sb = bb[lb],
          kb = bb.deletedIndexes;
        let ab = 0;
        for (; !0 === kb[ab];) ab++;
        const Tb = bb.$isUnsentAdd(ab);
        return sb.delete(ab, Wb.DELETE), Tb ? bb.$cancelAdd(ab) : kb[ab] = !0, cb.shift()
      }
      slice(bb, cb) {
        const sb = new Wk;
        return sb.push(...this.items.slice(bb, cb)), sb
      }
      sort() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sk;
        const cb = this[eb];
        cb.isMovingItems = !0;
        const sb = cb[lb];
        return cb.items.sort(bb).forEach(((bb, cb) => sb.change(cb, Wb.REPLACE))), cb.tmpItems.sort(bb), cb.$reindexChildren(0), cb.isMovingItems = !1, this
      }
      splice(bb, cb) {
        const sb = this[eb],
          kb = sb[lb],
          ab = sb.items,
          Tb = sb.tmpItems,
          Ub = sb.deletedIndexes,
          Ib = ab.length,
          Hb = Tb.length;
        for (var fb = arguments.length, Mb = new Array(fb > 2 ? fb - 2 : 0), Xb = 2; Xb < fb; Xb++) Mb[Xb - 2] = arguments[Xb];
        const nb = Mb.length,
          mb = [];
        for (let Wb = 0; Wb < Hb; Wb++) !0 !== Ub[Wb] && mb.push(Wb);
        let Qb;
        if (Ib > bb) {
          void 0 === cb && (cb = Ib - bb);
          for (let ab = bb; ab < bb + cb; ab++) {
            const bb = mb[ab],
              cb = sb.$isUnsentAdd(bb);
            kb.delete(bb, Wb.DELETE), cb ? (Qb ??= []).push(bb) : Ub[bb] = !0
          }
        } else cb = 0;
        if (nb > 0) {
          const ab = mb[bb] ?? Ib,
            Hb = Math.min(nb, cb);
          for (let bb = 0; bb < Hb; bb++) {
            const cb = ab + bb;
            let sb;
            const Ib = void 0 !== Qb ? Qb.indexOf(cb) : -1; - 1 !== Ib ? (Qb.splice(Ib, 1), sb = Wb.ADD) : sb = Ub[cb] ? Wb.DELETE_AND_ADD : Wb.ADD, kb.indexedOperation(cb, sb), Tb[cb] = Mb[bb], Ub[cb] = !1, Mb[bb][lb]?.setParent(this, kb.root, cb)
          }
          const fb = nb - Hb;
          if (fb > 0) {
            const bb = ab + Hb;
            kb.insertAt(bb, fb);
            for (let cb = 0; cb < fb; cb++) Mb[Hb + cb][lb]?.setParent(this, kb.root, bb + cb);
            Ub.length > 0 && Ub.splice(bb, 0, ...new Array(fb).fill(!1)), Tb.splice(bb, 0, ...Mb.slice(Hb)), sb.$reindexChildren(bb + fb)
          }
        }
        if (void 0 !== Qb && Qb.length > 0) {
          for (let bb = Qb.length - 1; bb >= 0; bb--) sb.$cancelAdd(Qb[bb], !1);
          sb.$reindexChildren(Qb[0])
        }
        return kb.root?.enqueueChangeTree(kb), ab.splice(bb, cb, ...Mb)
      }
      unshift() {
        const bb = this[eb],
          cb = bb[lb];
        cb.unshift(arguments.length);
        for (let kb = 0; kb < arguments.length; kb++)(kb < 0 || arguments.length <= kb ? void 0 : arguments[kb])?.[lb]?.setParent(this, cb.root, kb);
        const sb = bb.deletedIndexes;
        return sb.length > 0 && sb.unshift(...new Array(arguments.length).fill(!1)), bb.tmpItems.unshift(...arguments), bb.$reindexChildren(arguments.length), bb.items.unshift(...arguments)
      }
      indexOf(bb, cb) {
        return this.items.indexOf(bb, cb)
      }
      lastIndexOf(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(bb, cb)
      }
      every(bb, cb) {
        return this.items.every(bb, cb)
      }
      some(bb, cb) {
        return this.items.some(bb, cb)
      }
      forEach(bb, cb) {
        return this.items.forEach(bb, cb)
      }
      map(bb, cb) {
        return this.items.map(bb, cb)
      }
      filter(bb, cb) {
        return this.items.filter(bb, cb)
      }
      reduce(bb, cb) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(bb, cb) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(bb, cb) {
        return this.items.find(bb, cb)
      }
      findIndex(bb, cb) {
        return this.items.findIndex(bb, cb)
      }
      fill(bb, cb, sb) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(bb, cb, sb) {
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
        return Wk
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
      includes(bb, cb) {
        return this.items.includes(bb, cb)
      }
      flatMap(bb, cb) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(bb) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(bb, cb) {
        const sb = this.items.slice();
        return bb < 0 && (bb += this.length), sb[bb] = cb, new Wk(...sb)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(bb) {
        return this.items.slice().sort(bb)
      }
      toSpliced(bb, cb) {
        for (var sb = arguments.length, kb = new Array(sb > 2 ? sb - 2 : 0), Wb = 2; Wb < sb; Wb++) kb[Wb - 2] = arguments[Wb];
        const ab = this.items.slice();
        return ab.splice.apply(ab, arguments), ab
      }
      shuffle() {
        return this.move((bb => {
          let cb = this.items.length;
          for (; 0 != cb;) {
            let bb = Math.floor(Math.random() * cb);
            cb--, [this[cb], this[bb]] = [this[bb], this[cb]]
          }
        }))
      }
      move(bb) {
        return this.isMovingItems = !0, bb(this), this.isMovingItems = !1, this
      } [Xb](bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = this[eb] ?? this;
        return cb || sb.deletedIndexes[bb] ? sb.items[bb] : sb.tmpItems[bb] || sb.items[bb]
      } [nb](bb) {
        const cb = this[eb] ?? this;
        cb.items[bb] = void 0, cb._needsCompaction = !0
      } [Cb]() {
        const bb = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, bb), this.deletedIndexes.length = 0)
      } [Vb]() {
        const bb = this[eb] ?? this;
        bb._needsCompaction && (bb._needsCompaction = !1, bb.items = bb.items.filter((bb => void 0 !== bb)))
      } [mb](bb, cb, sb) {
        const kb = this[eb] ?? this,
          Wb = kb.items;
        let ab = !1;
        for (let Tb = 0; Tb < Wb.length; Tb++) {
          const Ub = Wb[Tb];
          bb.has(Tb) ? sb(Ub) : (ab = !0, cb(Ub, Tb), kb[nb](Tb))
        }
        ab && kb[Vb]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((bb => "function" === typeof bb.toJSON ? bb.toJSON() : bb))
      }
      clone(bb) {
        let cb;
        return bb ? (cb = new Wk, cb.push(...this.items)) : cb = new Wk(...this.map((bb => bb[lb] ? bb.clone() : bb))), cb
      }
    }
    uc("array", {
      constructor: Wk
    });
    class ak {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(bb) {
        const cb = this.indexByKey[bb];
        return void 0 === cb ? void 0 : cb
      }
      assign(bb) {
        const cb = this.nextIndex++;
        return this.indexByKey[bb] = cb, this.keyByIndex.set(cb, bb), cb
      }
      snapshot(bb, cb) {
        (this.snapshots ??= new Map).set(bb, cb)
      }
      forgetSnapshot(bb) {
        this.snapshots?.delete(bb)
      }
      snapshotAt(bb) {
        return this.snapshots?.get(bb)
      }
      setIndex(bb, cb) {
        this.keyByIndex.set(bb, cb), this.indexByKey[cb] = bb
      }
      keyOf(bb) {
        return this.keyByIndex.get(bb)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [bb] of this.snapshots) {
            const cb = this.keyByIndex.get(bb);
            void 0 !== cb && (delete this.indexByKey[cb], this.keyByIndex.delete(bb))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Tk {
      [lb];
      [Ub];
      childType;
      [Qb];
      $items = new Map;
      journal = new ak;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= Jc()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= Jc()).priority = bb
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Hb] = Gs;
      static[fb] = xs;
      static COLLECTION_KIND = ws;
      static[Mb](bb, cb, sb) {
        if (!sb || "string" === typeof bb[Qb]) return !0;
        const kb = bb[Xb](cb) ?? bb.journal.snapshotAt(cb);
        return sb.isChangeTreeVisible(kb[lb])
      }
      static is(bb) {
        return void 0 !== bb.map
      }
      constructor(bb) {
        if (Object.defineProperty(this, lb, {
            value: new Ps(this),
            enumerable: !1,
            writable: !0
          }), this[Qb] = void 0, bb)
          if (bb instanceof Map || bb instanceof Tk) bb.forEach(((bb, cb) => this.set(cb, bb)));
          else
            for (const cb in bb) this.set(cb, bb[cb])
      }
      static initializeForDecoder() {
        const bb = Object.create(Tk.prototype);
        return bb.$items = new Map, bb.journal = new ak, bb[Qb] = void 0, Es(bb), bb
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Tk
      }
      set(bb, cb) {
        if (void 0 === cb || null === cb) throw new Error(`MapSchema#set('${bb}', ${cb}): trying to set ${cb} value on '${bb}'.`);
        "object" === typeof cb && this[Qb] && ck(cb, this[Qb], this, bb), bb = bb.toString();
        const sb = this[lb],
          kb = void 0 !== cb[lb],
          ab = this.journal;
        let Tb, Ub = ab.indexOf(bb);
        if (void 0 !== Ub) {
          Tb = Wb.REPLACE;
          const sb = this.$items.get(bb);
          if (sb === cb) return;
          kb && (Tb = Wb.DELETE_AND_ADD, void 0 !== sb && sb[lb].root?.remove(sb[lb])), void 0 !== ab.snapshotAt(Ub) && ab.forgetSnapshot(Ub)
        } else Ub = ab.assign(bb), Tb = Wb.ADD;
        return this.$items.set(bb, cb), Tb === Wb.ADD && sb.isStreamCollection ? void 0 !== sb.root && Bc(this, sb.root, Ub) : sb.change(Ub, Tb), kb && cb[lb].setParent(this, sb.root, Ub), this
      }
      get(bb) {
        return this.$items.get(bb)
      }
      getOrInsert(bb, cb) {
        return this.$items.has(bb) ? this.$items.get(bb) : (this.set(bb, cb), cb)
      }
      getOrInsertComputed(bb, cb) {
        if (this.$items.has(bb)) return this.$items.get(bb);
        const sb = cb(bb);
        return this.set(bb, sb), sb
      }
      delete(bb) {
        if (!this.$items.has(bb)) return !1;
        const cb = this.journal.indexOf(bb),
          sb = this.$items.get(bb),
          kb = this[lb];
        if (kb.isStreamCollection) {
          const Wb = kb.root;
          let ab = !1;
          return void 0 !== Wb && (ab = tc(this, Wb, this[Ub], cb)), void 0 !== sb?.[lb] && Wb?.remove(sb[lb]), this.$items.delete(bb), ab || this.journal.snapshot(cb, sb), !0
        }
        return this.journal.snapshot(cb, sb), kb.delete(cb), this.$items.delete(bb)
      }
      clear() {
        const bb = this[lb];
        bb.discard(), bb.forEachChild(((cb, sb) => {
          bb.root?.remove(cb)
        })), this.journal.reset(), this.$items.clear(), bb.operation(Wb.CLEAR)
      } [Nb]() {
        const bb = this[lb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[Nb]?.())), this.$items.clear(), this.journal.reset(), bb.recycle(), this[Ub] = void 0
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
        this[lb].pause()
      }
      resumeTracking() {
        this[lb].resume()
      }
      untracked(bb) {
        return this[lb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[lb].paused
      }
      setIndex(bb, cb) {
        this.journal.setIndex(bb, cb)
      }
      getIndex(bb) {
        return this.journal.keyOf(bb)
      } [Xb](bb) {
        const cb = this.journal.keyOf(bb);
        return void 0 !== cb ? this.$items.get(cb) : void 0
      } [nb](bb) {
        const cb = this.journal.keyOf(bb);
        void 0 !== cb && (this.$items.delete(cb), this.journal.keyByIndex.delete(bb))
      } [mb](bb, cb, sb) {
        let kb = null;
        if (this.$items.forEach(((Wb, ab) => {
            bb.has(ab) ? sb(Wb) : ((kb ??= new Set).add(ab), cb(Wb, ab))
          })), null !== kb) {
          kb.forEach((bb => {
            this.$items.delete(bb), delete this.journal.indexByKey[bb]
          }));
          const bb = [];
          this.journal.keyByIndex.forEach(((cb, sb) => {
            kb.has(cb) && bb.push(sb)
          }));
          for (let cb = 0; cb < bb.length; cb++) this.journal.keyByIndex.delete(bb[cb])
        }
      } [Cb]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(bb) {
        Ec(this, bb)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (bb => {
          let [cb, sb] = bb;
          return [cb, "function" === typeof sb.toJSON ? sb.toJSON() : sb]
        })))
      }
      clone(bb) {
        let cb;
        return bb ? cb = Object.assign(new Tk, this) : (cb = new Tk, this.forEach(((bb, sb) => {
          bb[lb] ? cb.set(sb, bb.clone()) : cb.set(sb, bb)
        }))), cb
      }
    }
    uc("map", {
      constructor: Tk
    });
    class Uk {
      [lb];
      [Ub];
      [Qb];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= Jc()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= Jc()).priority = bb
      }
      static[Hb] = Ks;
      static[fb] = xs;
      static COLLECTION_KIND = Ss;
      static[Mb](bb, cb, sb) {
        return !sb || "string" === typeof bb[Qb] || sb.isChangeTreeVisible((bb[Xb](cb) ?? bb.deletedItems[cb])[lb])
      }
      static is(bb) {
        return void 0 !== bb.collection
      }
      constructor(bb) {
        Object.defineProperty(this, lb, {
          value: new Ps(this),
          enumerable: !1,
          writable: !0
        }), this[Qb] = void 0, bb && bb.forEach((bb => this.add(bb)))
      }
      static initializeForDecoder() {
        const bb = Object.create(Uk.prototype);
        return bb.$items = new Map, bb.deletedItems = {}, bb.$refId = 0, bb[Qb] = void 0, Es(bb), bb
      }
      add(bb) {
        const cb = this.$refId++,
          sb = this[lb];
        return this.$items.set(cb, bb), sb.isStreamCollection ? void 0 !== sb.root && Bc(this, sb.root, cb) : sb.change(cb), void 0 !== bb[lb] && bb[lb].setParent(this, sb.root, cb), cb
      }
      at(bb) {
        const cb = Array.from(this.$items.keys())[bb];
        return this.$items.get(cb)
      }
      entries() {
        return this.$items.entries()
      }
      delete(bb) {
        const cb = this.$items.entries();
        let sb, kb;
        for (;
          (kb = cb.next()) && !kb.done;)
          if (bb === kb.value[1]) {
            sb = kb.value[0];
            break
          } if (void 0 === sb) return !1;
        const Wb = this[lb];
        if (Wb.isStreamCollection) {
          const bb = Wb.root,
            cb = this.$items.get(sb);
          return void 0 !== bb && tc(this, bb, this[Ub], sb), void 0 !== cb?.[lb] && bb?.remove(cb[lb]), this.deletedItems[sb] = cb, this.$items.delete(sb)
        }
        return this.deletedItems[sb] = Wb.delete(sb), this.$items.delete(sb)
      }
      clear() {
        const bb = this[lb];
        bb.discard(), bb.forEachChild(((cb, sb) => {
          bb.root?.remove(cb)
        })), this.$items.clear(), bb.operation(Wb.CLEAR)
      } [Nb]() {
        const bb = this[lb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[Nb]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, bb.recycle(), this[Ub] = void 0
      }
      has(bb) {
        return Array.from(this.$items.values()).some((cb => cb === bb))
      }
      forEach(bb) {
        this.$items.forEach(((cb, sb, kb) => bb(cb, sb, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[lb].pause()
      }
      resumeTracking() {
        this[lb].resume()
      }
      untracked(bb) {
        return this[lb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[lb].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(bb, cb) {}
      getIndex(bb) {
        return bb
      } [Xb](bb) {
        return this.$items.get(bb)
      } [nb](bb) {
        this.$items.delete(bb)
      } [mb](bb, cb, sb) {
        let kb = null;
        if (this.$items.forEach(((Wb, ab) => {
            bb.has(ab) ? sb(Wb) : ((kb ??= []).push(ab), cb(Wb, ab))
          })), null !== kb)
          for (let Wb = 0; Wb < kb.length; Wb++) this[nb](kb[Wb])
      } [Cb]() {
        for (const bb in this.deletedItems) delete this.deletedItems[bb]
      }
      _dropView(bb) {
        Ec(this, bb)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach(((cb, sb) => {
          bb.push("function" === typeof cb.toJSON ? cb.toJSON() : cb)
        })), bb
      }
      clone(bb) {
        let cb;
        return bb ? cb = Object.assign(new Uk, this) : (cb = new Uk, this.forEach((bb => {
          bb[lb] ? cb.add(bb.clone()) : cb.add(bb)
        }))), cb
      }
    }
    uc("collection", {
      constructor: Uk
    });
    class Ik {
      [lb];
      [Ub];
      [Qb];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= Jc()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= Jc()).priority = bb
      }
      static[Hb] = Ks;
      static[fb] = xs;
      static COLLECTION_KIND = os;
      static[Mb](bb, cb, sb) {
        return !sb || "string" === typeof bb[Qb] || sb.isVisible((bb[Xb](cb) ?? bb.deletedItems[cb])[lb])
      }
      static is(bb) {
        return void 0 !== bb.set
      }
      constructor(bb) {
        Object.defineProperty(this, lb, {
          value: new Ps(this),
          enumerable: !1,
          writable: !0
        }), this[Qb] = void 0, bb && bb.forEach((bb => this.add(bb)))
      }
      static initializeForDecoder() {
        const bb = Object.create(Ik.prototype);
        return bb.$items = new Map, bb.deletedItems = {}, bb.$refId = 0, bb[Qb] = void 0, Es(bb), bb
      }
      add(bb) {
        if (this.has(bb)) return !1;
        const cb = this.$refId++,
          sb = this[lb];
        return this.$items.set(cb, bb), sb.isStreamCollection ? void 0 !== sb.root && Bc(this, sb.root, cb) : sb.change(cb, Wb.ADD), void 0 !== bb[lb] && bb[lb].setParent(this, sb.root, cb), cb
      }
      entries() {
        return this.$items.entries()
      }
      delete(bb) {
        const cb = this.$items.entries();
        let sb, kb;
        for (;
          (kb = cb.next()) && !kb.done;)
          if (bb === kb.value[1]) {
            sb = kb.value[0];
            break
          } if (void 0 === sb) return !1;
        const Wb = this[lb];
        if (Wb.isStreamCollection) {
          const bb = Wb.root,
            cb = this.$items.get(sb);
          return void 0 !== bb && tc(this, bb, this[Ub], sb), void 0 !== cb?.[lb] && bb?.remove(cb[lb]), this.deletedItems[sb] = cb, this.$items.delete(sb)
        }
        return this.deletedItems[sb] = Wb.delete(sb), this.$items.delete(sb)
      }
      clear() {
        const bb = this[lb];
        bb.discard(), this.$items.clear(), bb.operation(Wb.CLEAR)
      } [Nb]() {
        const bb = this[lb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[Nb]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, bb.recycle(), this[Ub] = void 0
      }
      has(bb) {
        const cb = this.$items.values();
        let sb, kb = !1;
        for (;
          (sb = cb.next()) && !sb.done;)
          if (bb === sb.value) {
            kb = !0;
            break
          } return kb
      }
      forEach(bb) {
        this.$items.forEach(((cb, sb, kb) => bb(cb, sb, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[lb].pause()
      }
      resumeTracking() {
        this[lb].resume()
      }
      untracked(bb) {
        return this[lb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[lb].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(bb, cb) {}
      getIndex(bb) {
        return bb
      } [Xb](bb) {
        return this.$items.get(bb)
      } [nb](bb) {
        this.$items.delete(bb)
      } [mb](bb, cb, sb) {
        let kb = null;
        if (this.$items.forEach(((Wb, ab) => {
            bb.has(ab) ? sb(Wb) : ((kb ??= []).push(ab), cb(Wb, ab))
          })), null !== kb)
          for (let Wb = 0; Wb < kb.length; Wb++) this[nb](kb[Wb])
      } [Cb]() {
        for (const bb in this.deletedItems) delete this.deletedItems[bb]
      }
      _dropView(bb) {
        Ec(this, bb)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach(((cb, sb) => {
          bb.push("function" === typeof cb.toJSON ? cb.toJSON() : cb)
        })), bb
      }
      clone(bb) {
        let cb;
        return bb ? cb = Object.assign(new Ik, this) : (cb = new Ik, this.forEach((bb => {
          bb[lb] ? cb.add(bb.clone()) : cb.add(bb)
        }))), cb
      }
    }
    uc("set", {
      constructor: Ik
    });
    class Hk {
      [lb];
      [Ub];
      [Qb];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= Jc()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= Jc()).priority = bb
      }
      static $isStream = !0;
      static[Hb] = Ks;
      static[fb] = xs;
      static COLLECTION_KIND = Rs;
      static[Mb](bb, cb, sb) {
        if (!sb) return !0;
        const kb = bb[Xb](cb);
        return void 0 !== kb && sb.isVisible(kb[lb])
      }
      static is(bb) {
        return bb && void 0 !== bb.stream
      }
      constructor() {
        Object.defineProperty(this, lb, {
          value: new Ps(this),
          enumerable: !1,
          writable: !0
        }), this[Qb] = void 0
      }
      static initializeForDecoder() {
        const bb = Object.create(Hk.prototype);
        return bb.$items = new Map, bb.$nextPosition = 0, bb._itemIndex = new Map, bb[Qb] = void 0, Es(bb), bb
      }
      add(bb) {
        if (this._itemIndex.has(bb)) return -1;
        const cb = this.$nextPosition++;
        this.$items.set(cb, bb), this._itemIndex.set(bb, cb);
        const sb = this[lb].root;
        return void 0 !== bb[lb] && bb[lb].setParent(this, sb, cb), void 0 !== sb && Bc(this, sb, cb), cb
      }
      remove(bb) {
        const cb = this._itemIndex.get(bb);
        if (void 0 === cb) return !1;
        this._itemIndex.delete(bb), this.$items.delete(cb);
        const sb = this[lb].root;
        return void 0 !== sb && (tc(this, sb, this[Ub], cb), void 0 !== bb[lb] && sb.remove(bb[lb])), !0
      }
      has(bb) {
        return this._itemIndex.has(bb)
      }
      clear() {
        const bb = this[lb].root;
        if (void 0 !== bb) {
          ! function(bb, cb, sb) {
            const kb = bb._stream;
            if (void 0 !== kb) {
              kb.broadcastPending.clear();
              for (const bb of kb.sentBroadcast) kb.broadcastDeletes.add(bb);
              kb.sentBroadcast.clear(), cb.forEachActiveView((bb => {
                kb.pendingByView.get(bb.id)?.clear();
                const cb = kb.sentByView.get(bb.id);
                if (void 0 !== cb && cb.size > 0) {
                  let kb = bb.changes.get(sb);
                  void 0 === kb && (kb = new Map, bb.changes.set(sb, kb));
                  for (const bb of cb) kb.set(bb, Wb.DELETE);
                  cb.clear()
                }
              }))
            }
          }(this, bb, this[Ub]);
          for (const cb of this.$items.values()) void 0 !== cb[lb] && bb.remove(cb[lb])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(bb) {
        for (const [cb, sb] of this.$items) bb(sb, cb, this)
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
      setIndex(bb, cb) {}
      getIndex(bb) {
        return bb
      } [Xb](bb) {
        return this.$items.get(bb)
      } [nb](bb) {
        const cb = this.$items.get(bb);
        void 0 !== cb && (this._itemIndex.delete(cb), this.$items.delete(bb))
      } [mb]() {} [Cb]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach((cb => {
          bb.push("function" === typeof cb?.toJSON ? cb.toJSON() : cb)
        })), bb
      }
      clone(bb) {
        if (bb) {
          return Object.assign(new Hk, this)
        }
        const cb = new Hk;
        return cb.maxPerTick = this.maxPerTick, this.forEach((bb => {
          cb.add("function" === typeof bb?.clone ? bb.clone() : bb)
        })), cb
      }
      _dropView(bb) {
        Ec(this, bb)
      }
      _unregister() {}
    }
    uc("stream", {
      constructor: Hk
    });
    class fk {
      [ub] = !0;
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
        if (bb && "object" === typeof bb && void 0 !== bb.array) throw new Error(hc);
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

    function Mk(bb) {
      return null != bb && !0 === bb[ub]
    }

    function Xk(bb) {
      return () => new fk(bb)
    }

    function nk(bb) {
      if (Mk(bb)) {
        const cb = bb._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof cb?`use the type name instead: t.array("${cb}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return bb
    }

    function mk(bb) {
      return new fk({
        quantized: Oc(bb)
      })
    }
    const lk = Object.freeze({
        string: Xk("string"),
        number: Xk("number"),
        boolean: Xk("boolean"),
        int8: Xk("int8"),
        uint8: Xk("uint8"),
        int16: Xk("int16"),
        uint16: Xk("uint16"),
        int32: Xk("int32"),
        uint32: Xk("uint32"),
        int64: Xk("int64"),
        uint64: Xk("uint64"),
        float32: Xk("float32"),
        float64: Xk("float64"),
        bigint64: Xk("bigint64"),
        biguint64: Xk("biguint64"),
        ref: bb => new fk(bb),
        array: bb => new fk({
          array: nk(bb)
        }),
        map: bb => new fk({
          map: nk(bb)
        }),
        set: bb => new fk({
          set: nk(bb)
        }),
        collection: bb => new fk({
          collection: nk(bb)
        }),
        stream: bb => {
          const cb = new fk({
            stream: nk(bb)
          });
          return cb._stream = !0, cb
        },
        quantized: mk,
        angle: bb => mk({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: bb?.bits ?? 16
        })
      }),
      Qk = -1;

    function ek(bb) {
      return qc.register(bb), bb
    }

    function Ck() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qk;
      return function(cb, sb) {
        const kb = Rc.initialize(cb.constructor);
        Rc.setTag(kb, sb, bb)
      }
    }

    function Nk(bb, cb) {
      const sb = Rc.initialize(bb.constructor);
      Rc.setUnreliable(sb, cb)
    }

    function Vk(bb, cb) {
      const sb = Rc.initialize(bb.constructor);
      Rc.setPatchOnly(sb, cb)
    }

    function Lk(bb, cb) {
      const sb = Rc.initialize(bb.constructor);
      Rc.setFullStateOnly(sb, cb)
    }

    function uk(bb, cb) {
      return function(sb, kb) {
        const Wb = sb.constructor;
        if (!bb) throw new Error(`${Wb.name}: @type() reference provided for "${kb}" is undefined. Make sure you don't have any circular dependencies.`);
        bb = Ac(bb, `${Wb.name}.${kb}`), qc.register(Wb);
        const ab = Object.getPrototypeOf(Wb)[Symbol.metadata],
          Tb = Rc.initialize(Wb);
        let Ub = Tb[kb];
        if (void 0 !== Tb[Ub]) {
          if (Tb[Ub].deprecated) return;
          if (void 0 !== Tb[Ub].type) {
            const bb = new Error(`@colyseus/schema: Duplicate '${kb}' definition on '${Wb.name}'.\nCheck @type() annotation`);
            throw new Error(`${bb.message} ${bb.stack.split("\n")[4].trim()}`)
          }
        } else Ub = Tb[gb] ?? (ab && ab[gb]) ?? -1, Ub++;
        if (cb && cb.manual) Rc.addField(Tb, Ub, kb, bb, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: cb,
            childType: sb
          } = dc(bb);
          Rc.addField(Tb, Ub, kb, bb, hk(kb, Ub, sb, cb))
        }
        Tb[Yb][kb] && Object.defineProperty(sb, kb, Tb[Yb][kb]), ("string" === typeof bb || Gc(bb)) && (Tb[Jb] || Object.defineProperty(Tb, Jb, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Tb[Jb][Ub] = "string" === typeof bb ? cc[bb] : zc(bb.quantized))
      }
    }
    const Yk = {
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

    function hk(bb, cb, sb, kb) {
      let ab;
      return ab = kb ? function(bb, cb, sb, kb) {
        const ab = kb.constructor === Wk,
          Tb = kb.constructor === Tk;
        return function(bb) {
          const kb = this[Lb],
            Ub = kb[cb];
          if (bb !== Ub) {
            if (void 0 !== bb && null !== bb) {
              if (!ab || bb instanceof Wk)
                if (!Tb || bb instanceof Tk) bb[Qb] = sb;
                else {
                  const cb = new Tk;
                  if (cb[Qb] = sb, bb instanceof Map) bb.forEach(((bb, sb) => cb.set(sb, bb)));
                  else
                    for (const sb in bb) cb.set(sb, bb[sb]);
                  bb = cb
                }
              else {
                const cb = new Wk;
                cb[Qb] = sb, cb.push(...bb), bb = cb
              }
              const kb = this[lb],
                Hb = this.constructor;
              void 0 !== Ub && null !== Ub && Ub[lb] ? (kb.root?.remove(Ub[lb]), Hb[Ib](kb, cb, Wb.DELETE_AND_ADD)) : Hb[Ib](kb, cb, Wb.ADD), bb[lb]?.setParent(this, kb.root, cb)
            } else void 0 !== Ub && null !== Ub && this[lb].delete(cb);
            kb[cb] = bb
          }
        }
      }(0, cb, sb, kb) : "string" === typeof sb ? function(bb, cb, sb) {
        const kb = Yk[sb],
          ab = "string" === sb,
          Tb = "boolean" === sb;
        return function(sb) {
          const Ub = this[Lb],
            Hb = Ub[cb];
          if (sb !== Hb) {
            if (void 0 !== sb && null !== sb) {
              if (!Tb && void 0 !== kb && typeof sb !== kb && (!ab || null !== sb)) {
                const cb = sb && sb.constructor ? ` (${sb.constructor.name})` : "";
                throw new bk(`a '${kb}' was expected, but '${JSON.stringify(sb)}'${cb} was provided in ${this.constructor.name}#${bb}`)
              }
              this.constructor[Ib](this[lb], cb, Wb.ADD)
            } else void 0 !== Hb && null !== Hb && this[lb].delete(cb);
            Ub[cb] = sb
          }
        }
      }(bb, cb, sb) : Gc(sb) ? function(bb, cb, sb) {
        return function(kb) {
          const ab = this[Lb],
            Tb = ab[cb];
          if (void 0 !== kb && null !== kb) {
            if ("number" !== typeof kb) throw new bk(`a 'number' was expected, but '${JSON.stringify(kb)}' was provided in ${this.constructor.name}#${bb}`);
            if ((kb = Zc(sb, Kc(sb, kb))) === Tb) return;
            this.constructor[Ib](this[lb], cb, Wb.ADD)
          } else {
            if (kb === Tb) return;
            void 0 !== Tb && null !== Tb && this[lb].delete(cb)
          }
          ab[cb] = kb
        }
      }(bb, cb, sb.quantized) : function(bb, cb, sb) {
        return function(kb) {
          const ab = this[Lb],
            Tb = ab[cb];
          if (kb !== Tb) {
            if (void 0 !== kb && null !== kb) {
              ck(kb, sb, this, bb);
              const ab = this[lb],
                Ub = this.constructor;
              void 0 !== Tb && null !== Tb && Tb[lb] ? (ab.root?.remove(Tb[lb]), Ub[Ib](ab, cb, Wb.DELETE_AND_ADD)) : Ub[Ib](ab, cb, Wb.ADD), kb[lb]?.setParent(this, ab.root, cb)
            } else void 0 !== Tb && null !== Tb && this[lb].delete(cb);
            ab[cb] = kb
          }
        }
      }(bb, cb, sb), {
        get: function() {
          return this[Lb][cb]
        },
        set: ab,
        enumerable: !0,
        configurable: !0
      }
    }

    function Jk() {
      let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(cb, sb) {
        const kb = Rc.initialize(cb.constructor);
        Rc.setDeprecated(kb, sb), bb && (kb[Yb] ??= {}, kb[Yb][sb] = {
          get: function() {
            throw new Error(`${sb} is deprecated.`)
          },
          set: function(bb) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(cb, sb, kb[Yb][sb]))
      }
    }
    let gk = !1;

    function Bk(bb, cb, sb) {
      gk || (gk = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let kb in cb) uk(cb[kb], sb)(bb.prototype, kb);
      return bb
    }

    function tk(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pk;
      if (null == bb || "object" !== typeof bb) throw new Error(`schema(): first argument must be a fields object (got ${typeof bb}).`);
      const kb = {},
        Wb = {},
        ab = {},
        Tb = {},
        Ub = (bb, cb) => {
          if (cb.hasDefault)((bb, cb) => {
            "function" === typeof cb ? Tb[bb] = cb : cb && "function" === typeof cb.clone ? Tb[bb] = () => cb.clone() : ab[bb] = cb
          })(bb, cb.default);
          else if (!cb.optional) {
            const sb = function(bb) {
              if (bb && "object" === typeof bb) {
                if (void 0 !== bb.array) return () => new Wk;
                if (void 0 !== bb.map) return () => new Tk;
                if (void 0 !== bb.set) return () => new Ik;
                if (void 0 !== bb.collection) return () => new Uk;
                if (void 0 !== bb.stream) return () => new Hk
              } else if ("function" === typeof bb && Pk.is(bb) && (!bb.prototype.initialize || 0 === bb.prototype.initialize.length)) return () => new bb
            }(cb.type);
            sb && (Tb[bb] = sb)
          }
        },
        Ib = {},
        Hb = [],
        fb = [],
        Mb = {},
        Xb = [],
        nb = [],
        mb = {},
        lb = [];
      for (const Lb in bb) {
        const sb = bb[Lb],
          ab = `schema(${cb?`'${cb}'`:""}): field '${Lb}'`;
        if (Mk(sb)) {
          const bb = sb.toDefinition();
          if (bb.noSync) {
            if (void 0 !== bb.view || bb.unreliable || bb.patchOnly || bb.fullStateOnly || bb.stream) throw new Error(`${ab} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            Ub(Lb, bb);
            continue
          }
          if (bb.patchOnly && bb.fullStateOnly) throw new Error(`${ab} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const cb = Ac(bb.type, ab);
          if ("function" === typeof cb && !Pk.is(cb)) throw new Error(`${ab} is a synced ref to non-Schema class '${cb.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          kb[Lb] = cb, void 0 !== bb.view && (Ib[Lb] = bb.view), bb.unreliable && Hb.push(Lb), bb.patchOnly && fb.push(Lb), bb.deprecated && (Mb[Lb] = bb.deprecatedThrows), bb.fullStateOnly && Xb.push(Lb), bb.stream && nb.push(Lb), void 0 !== bb.streamPriority && (mb[Lb] = bb.streamPriority), bb.optional && lb.push(Lb), Ub(Lb, bb)
        } else {
          if ("function" !== typeof sb) throw new Error(`${ab} must be a t.* builder, Schema subclass, or method (got ${typeof sb}).`);
          Pk.is(sb) ? (kb[Lb] = sb, sb.prototype.initialize && 0 !== sb.prototype.initialize.length || (Tb[Lb] = () => new sb)) : Wb[Lb] = sb
        }
      }
      const Qb = bb => {
          for (const cb in ab) bb[cb] = ab[cb];
          for (const cb in Tb) bb[cb] = Tb[cb]()
        },
        eb = () => {
          const bb = {};
          return Qb(bb), bb
        },
        Cb = "function" === typeof Wb.initialize,
        Nb = Wb.initialize ?? sb._initialize,
        Vb = class extends sb {
          constructor() {
            for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
            const Wb = cb[0];
            void 0 === Wb ? (super(), Qb(this)) : super(Object.assign(eb(), Cb ? (bb => {
              const cb = Object.keys(kb),
                sb = {};
              for (const kb in bb) cb.includes(kb) || (sb[kb] = bb[kb]);
              return sb
            })(Wb) : Wb)), Nb && new.target === Vb && Nb.apply(this, cb)
          }
        };
      cb && Object.defineProperty(Vb, "name", {
        value: cb
      }), Rc.setFields(Vb, kb), Vb._getDefaultValues = eb, Vb._initialize = Nb, Object.assign(Vb.prototype, Wb);
      for (const Lb in Ib) Ck(Ib[Lb])(Vb.prototype, Lb);
      for (const Lb of Hb) Nk(Vb.prototype, Lb);
      for (const Lb of fb) Vk(Vb.prototype, Lb);
      for (const Lb in Mb) Jk(Mb[Lb])(Vb.prototype, Lb);
      if (Xb.length > 0 || nb.length > 0) {
        const bb = Vb[Symbol.metadata];
        for (const cb of Xb) Rc.setFullStateOnly(bb, cb);
        for (const cb of nb) Rc.setStream(bb, cb);
        for (const cb in mb) Rc.setStreamPriority(bb, cb, mb[cb])
      }
      if (lb.length > 0) {
        const bb = Vb[Symbol.metadata];
        for (const cb of lb) bb[bb[cb]].optional = !0
      }
      return Vb.extend = (bb, cb) => tk(bb, cb, Vb), Vb
    }

    function yk(bb) {
      const cb = bb[lb].root,
        sb = {
          ops: {},
          refs: []
        };
      let kb = cb.changes.next;
      for (; kb;) {
        const bb = kb.changeTree;
        void 0 !== bb ? (sb.refs.push(`refId#${bb.ref[Ub]}`), bb.forEach(((bb, cb) => {
          if (bb < 0 || !cb) return;
          const kb = Wb[cb];
          sb.ops[kb] || (sb.ops[kb] = 0), sb.ops[kb]++
        })), kb = kb.next) : kb = kb.next
      }
      return sb
    }
    class Pk {
      static[Hb] = Os;
      static[fb] = Fs;
      [Ub];
      [Lb];
      static initialize(bb) {
        Object.defineProperty(bb, lb, {
          value: new Ps(bb),
          enumerable: !1,
          writable: !0
        }), bb[Lb] = []
      }
      static initializeForDecoder() {
        const bb = Object.create(this.prototype);
        return Es(bb), bb[Lb] = [], bb
      }
      static reset(bb) {
        const cb = bb?.[lb];
        if (void 0 === cb || "function" !== typeof cb.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== cb.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${bb.constructor.name}) with multiple parents.`);
        bb[Nb]()
      } [Nb]() {
        const bb = this.constructor[Symbol.metadata],
          cb = bb?.[Bb] ?? [],
          sb = this[Lb];
        for (let kb = 0; kb < cb.length; kb++) {
          const bb = sb[cb[kb]];
          bb?.[Nb]?.()
        }
        this[lb].recycle(), this[Ub] = void 0
      }
      static is(bb) {
        const cb = bb[Symbol.metadata];
        return "object" === typeof cb && null !== cb
      }
      static isSchema(bb) {
        return "function" === typeof bb?.assign
      }
      static[Ib](bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wb.ADD;
        bb.change(cb, sb)
      }
      static[Mb](bb, cb, sb) {
        const kb = bb.constructor[Symbol.metadata],
          Wb = kb[cb]?.tag;
        return void 0 === sb ? void 0 === Wb : void 0 === Wb || (Wb === Qk ? sb.isChangeTreeVisible(bb[lb]) : sb.hasTagOnTree(bb[lb], Wb))
      }
      constructor(bb) {
        Pk.initialize(this), bb && Pk.assignProps(this, bb)
      }
      assign(bb) {
        return Pk.assignProps(this, bb), this
      }
      static assignProps(bb, cb) {
        const sb = bb.constructor[Symbol.metadata];
        if (sb && void 0 !== sb[gb])
          for (let Wb = 0; Wb <= sb[gb]; Wb++) {
            const kb = sb[Wb];
            if (!kb) continue;
            const ab = cb[kb.name];
            void 0 !== ab && (bb[kb.name] = ab)
          }
        const kb = Object.keys(cb);
        for (let Wb = 0; Wb < kb.length; Wb++) {
          const ab = kb[Wb];
          sb && void 0 !== sb[ab] || (bb[ab] = cb[ab])
        }
      }
      restore(bb) {
        const cb = this.constructor[Symbol.metadata];
        for (const sb in cb) {
          const kb = cb[sb],
            Wb = kb.name,
            ab = kb.type,
            Tb = bb[Wb];
          if (void 0 !== Tb && null !== Tb)
            if ("string" === typeof ab) this[Wb] = Tb;
            else if (Pk.is(ab)) {
            const bb = new ab;
            bb.restore(Tb), this[Wb] = bb
          } else if ("object" === typeof ab) {
            const bb = Object.keys(ab)[0],
              cb = ab[bb];
            if ("map" === bb) {
              const bb = this[Wb];
              for (const sb in Tb)
                if (Pk.is(cb)) {
                  const kb = new cb;
                  kb.restore(Tb[sb]), bb.set(sb, kb)
                } else bb.set(sb, Tb[sb])
            } else if ("array" === bb) {
              const bb = this[Wb];
              for (let sb = 0; sb < Tb.length; sb++)
                if (Pk.is(cb)) {
                  const kb = new cb;
                  kb.restore(Tb[sb]), bb.push(kb)
                } else bb.push(Tb[sb])
            }
          }
        }
        return this
      }
      setDirty(bb, cb) {
        const sb = this.constructor[Symbol.metadata];
        this[lb].change(sb[sb[bb]].index, cb)
      }
      pauseTracking() {
        this[lb].pause()
      }
      resumeTracking() {
        this[lb].resume()
      }
      untracked(bb) {
        return this[lb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[lb].paused
      }
      clone() {
        const bb = Object.create(this.constructor.prototype);
        Pk.initialize(bb);
        const cb = this.constructor[Symbol.metadata];
        for (const sb in cb) {
          const kb = cb[sb].name;
          "object" === typeof this[kb] && "function" === typeof this[kb]?.clone ? bb[kb] = this[kb].clone() : bb[kb] = this[kb]
        }
        return bb
      }
      toJSON() {
        const bb = {},
          cb = this.constructor[Symbol.metadata];
        for (const sb in cb) {
          const kb = cb[sb],
            Wb = kb.name;
          kb.deprecated || null === this[Wb] || "undefined" === typeof this[Wb] || (bb[Wb] = "function" === typeof this[Wb].toJSON ? this[Wb].toJSON() : this[Wb])
        }
        return bb
      }
      discardAllChanges() {
        this[lb].discardAll()
      } [Xb](bb) {
        return this[this.constructor[Symbol.metadata][bb].name]
      } [nb](bb) {
        this[this.constructor[Symbol.metadata][bb].name] = void 0
      }
      static debugRefIds(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 ? arguments[3] : void 0,
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const ab = cb ? ` - ${JSON.stringify(bb.toJSON())}` : "",
          Tb = bb[lb],
          Ib = bb[Ub],
          Hb = kb ? kb.root.refCount[Ib] : Tb.refCount,
          fb = Hb > 1 ? ` [\xd7${Hb}]` : "";
        let Mb = `${function(bb){return new Array(bb).fill(0).map(((cb,sb)=>sb===bb-1?"\u2514\u2500 ":"   ")).join("")}(sb)}${Wb}${bb.constructor.name} (refId: ${Ib})${fb}${ab}\n`;
        return Tb.forEachChild(((Wb, ab) => {
          let Tb = ab;
          "number" === typeof ab && bb.$indexes && (Tb = bb.$indexes.get(ab) ?? ab);
          const Ub = void 0 !== bb.forEach && void 0 !== Tb ? `["${Tb}"]: ` : "";
          Mb += this.debugRefIds(Wb.ref, cb, sb + 1, kb, Ub)
        })), Mb
      }
      static debugRefIdEncodingOrder(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const sb = [],
          kb = bb[lb];
        if ("changes" === cb) {
          let bb = kb.root.changes?.next;
          for (; bb;) bb.changeTree && sb.push(bb.changeTree.ref[Ub]), bb = bb.next;
          return sb
        }
        const Wb = "allFilteredChanges" === cb,
          ab = new Set,
          Tb = bb => {
            ab.has(bb) || (ab.add(bb), bb.isFiltered === Wb && sb.push(bb.ref[Ub]), bb.forEachChild(((bb, cb) => Tb(bb))))
          };
        return Tb(kb), sb
      }
      static debugRefIdsFromDecoder(bb) {
        return this.debugRefIds(bb.state, !1, 0, bb)
      }
      static debugChanges(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = bb[lb],
          kb = cb ? "allChanges" : "changes";
        let ab = `${bb.constructor.name} (${bb[Ub]}) -> .${kb}:\n`;
        return cb ? sb.forEachLive((bb => {
          ab += `- [${bb}]: ADD (${JSON.stringify(sb.getValue(Number(bb),!0))})\n`
        })) : sb.forEach(((bb, cb) => {
          bb < 0 || !cb || (ab += `- [${bb}]: ${Wb[cb]} (${JSON.stringify(sb.getValue(Number(bb),!1))})\n`)
        })), ab
      }
    }
    ab(Pk);
    const Dk = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Ek {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const bb = {};
        for (const cb in this.changeTrees) bb[cb] = this.changeTrees[cb].refCount;
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
        this.types.hasFilters && (bb.flags & ts || (bb.flags |= ts, this.pendingFilterRefresh.push(bb)))
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
        const cb = bb.id;
        for (const sb of this.streamTrees) sb._dropView(cb)
      }
      forEachActiveView(bb) {
        for (const [cb, sb] of this.activeViews) {
          const kb = sb.deref();
          if (void 0 !== kb) bb(kb);
          else {
            this.activeViews.delete(cb);
            for (const bb of this.streamTrees) bb._dropView(cb)
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = bb, this.nextUniqueId = cb
      }
      add(bb) {
        const cb = bb.ref;
        void 0 === cb[Ub] && (Dk.value = this.nextUniqueId++, Object.defineProperty(cb, Ub, Dk));
        const sb = cb[Ub],
          kb = void 0 === this.changeTrees[sb];
        kb && (this.changeTrees[sb] = bb), bb.needsRestage && (bb.needsRestage = !1, bb.forEachLiveWithCtx(bb, ss));
        const Wb = kb ? 0 : bb.refCount;
        return bb.refCount = Wb + 1, Wb > 0 && this.enqueueFilterRefresh(bb), kb
      }
      remove(bb) {
        const cb = bb.refCount - 1;
        if (cb <= 0) {
          if (bb.root = void 0, delete this.changeTrees[bb.ref[Ub]], bb.isStreamCollection) {
            const cb = bb.ref;
            cb._unregister?.(), this.unregisterStream(cb)
          }
          this.removeFromQueue(bb), this.removeFromUnreliableQueue(bb), bb.refCount = 0, bb.needsRestage = !0, bb.forEachChild(((cb, sb) => {
            cb.removeParent(bb.ref) && (void 0 === cb.parentRef || cb.refCount > 0 ? this.remove(cb) : this.moveNextToParent(cb))
          }))
        } else bb.refCount = cb, this.enqueueFilterRefresh(bb), this.recursivelyMoveNextToParent(bb);
        return cb
      }
      recursivelyMoveNextToParent(bb) {
        this.moveNextToParent(bb), bb.forEachChild(((bb, cb) => this.recursivelyMoveNextToParent(bb)))
      }
      moveNextToParent(bb) {
        bb.changesNode && this._moveNextToParentInList(this.changes, bb, bb.changesNode, "changesNode"), bb.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, bb, bb.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(bb, cb, sb, kb) {
        const Wb = cb.parent;
        if (!Wb || !Wb[lb]) return;
        const ab = Wb[lb][kb];
        ab && ab !== sb && (sb.position > ab.position || (sb.prev ? sb.prev.next = sb.next : bb.next = sb.next, sb.next ? sb.next.prev = sb.prev : bb.tail = sb.prev, sb.prev = bb.tail, sb.next = void 0, bb.tail.next = sb, bb.tail = sb, sb.position = bb.nextPosition++))
      }
      enqueueChangeTree(bb) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.changesNode) || (bb.changesNode = this._appendToList(this.changes, bb))
      }
      enqueueUnreliable(bb) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.unreliableChangesNode) || (bb.unreliableChangesNode = this._appendToList(this.unreliableChanges, bb))
      }
      _appendToList(bb, cb) {
        const sb = this._nodePool;
        let kb;
        return sb.length > 0 ? (kb = sb.pop(), kb.changeTree = cb, kb.next = void 0, kb.prev = void 0) : kb = {
          changeTree: cb,
          next: void 0,
          prev: void 0,
          position: 0
        }, bb.next ? (kb.prev = bb.tail, bb.tail.next = kb, bb.tail = kb) : (bb.nextPosition = 0, bb.next = kb, bb.tail = kb), kb.position = bb.nextPosition++, kb
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
      _removeNode(bb, cb, sb, kb) {
        return !(!sb || sb.changeTree !== cb) && (sb.prev ? sb.prev.next = sb.next : bb.next = sb.next, sb.next ? sb.next.prev = sb.prev : bb.tail = sb.prev, cb[kb] = void 0, this.releaseNode(sb), !0)
      }
    }

    function ik(bb, cb) {
      if (-1 === cb || cb >= bb.length) return !1;
      const sb = bb.length - 1;
      for (let kb = cb; kb < sb; kb++) bb[kb] = bb[kb + 1];
      return bb.length = sb, !0
    }

    function Ok(bb, cb, sb) {
      const kb = ~sb,
        Wb = bb.changeTrees;
      for (const ab in Wb) {
        const bb = Wb[ab],
          sb = bb.visibleViews;
        void 0 !== sb && cb < sb.length && (sb[cb] &= kb);
        const Tb = bb.subscribedViews;
        void 0 !== Tb && cb < Tb.length && (Tb[cb] &= kb);
        const Ub = bb.tagViews;
        void 0 !== Ub && Ub.forEach((bb => {
          cb < bb.length && (bb[cb] &= kb)
        }))
      }
    }
    const Gk = new FinalizationRegistry((bb => {
      let {
        root: cb,
        id: sb,
        slot: kb,
        bit: Wb
      } = bb;
      Ok(cb, kb, Wb), cb.activeViews.delete(sb);
      for (const ab of cb.streamTrees) ab._dropView(sb);
      cb.releaseViewId(sb)
    }));

    function Kk(bb) {
      if (void 0 === bb) return "undefined";
      if (null === bb) return "null";
      const cb = typeof bb;
      return "string" === cb ? JSON.stringify(bb.length > 30 ? `${bb.slice(0,30)}\u2026` : bb) : "object" !== cb && "function" !== cb ? `${cb} ${String(bb)}` : Array.isArray(bb) ? `Array(${bb.length})` : bb.constructor?.name ?? "Object"
    }
    class Zk {
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
        void 0 === this._root && (this._root = bb, this.id = bb.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), bb.registerView(this), Gk.register(this, {
          root: bb,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), Ok(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), Gk.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(bb) {
        const cb = bb.visibleViews,
          sb = this._slot;
        return void 0 !== cb && sb < cb.length && 0 !== (cb[sb] & this._bit)
      }
      markVisible(bb) {
        const cb = this._slot;
        let sb = bb.visibleViews;
        for (void 0 === sb && (sb = bb.visibleViews = []); sb.length <= cb;) sb.push(0);
        sb[cb] |= this._bit
      }
      unmarkVisible(bb) {
        const cb = bb.visibleViews;
        if (void 0 === cb) return;
        const sb = this._slot;
        sb < cb.length && (cb[sb] &= ~this._bit)
      }
      isSubscribed(bb) {
        const cb = bb.subscribedViews,
          sb = this._slot;
        return void 0 !== cb && sb < cb.length && 0 !== (cb[sb] & this._bit)
      }
      _setSubscribed(bb) {
        const cb = this._slot;
        let sb = bb.subscribedViews;
        for (void 0 === sb && (sb = bb.subscribedViews = []); sb.length <= cb;) sb.push(0);
        sb[cb] |= this._bit
      }
      _clearSubscribed(bb) {
        const cb = bb.subscribedViews;
        if (void 0 === cb) return;
        const sb = this._slot;
        sb < cb.length && (cb[sb] &= ~this._bit)
      }
      hasTagOnTree(bb, cb) {
        const sb = bb.tagViews;
        if (void 0 === sb) return !1;
        const kb = this._slot,
          Wb = this._bit;
        for (let ab = cb; 0 !== ab; ab &= ab - 1) {
          const bb = sb.get(ab & -ab);
          if (void 0 !== bb && kb < bb.length && 0 !== (bb[kb] & Wb)) return !0
        }
        return !1
      }
      addTag(bb, cb) {
        if (cb === Qk) return;
        let sb = bb.tagViews;
        void 0 === sb && (sb = bb.tagViews = new Map);
        const kb = this._slot,
          Wb = this._bit;
        for (let ab = cb; ab > 0; ab &= ab - 1) {
          const bb = ab & -ab;
          let cb = sb.get(bb);
          for (void 0 === cb && (cb = [], sb.set(bb, cb)); cb.length <= kb;) cb.push(0);
          cb[kb] |= Wb
        }
      }
      removeTag(bb, cb) {
        if (cb === Qk) return;
        const sb = bb.tagViews;
        if (void 0 === sb) return;
        const kb = this._slot,
          Wb = ~this._bit;
        for (let ab = cb; ab > 0; ab &= ab - 1) {
          const bb = sb.get(ab & -ab);
          void 0 !== bb && kb < bb.length && (bb[kb] &= Wb)
        }
      }
      removeAllTagsOnTree(bb) {
        const cb = bb.tagViews;
        if (void 0 === cb) return;
        const sb = this._slot,
          kb = ~this._bit;
        cb.forEach((bb => {
          sb < bb.length && (bb[sb] &= kb)
        }))
      }
      add(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qk,
          sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(bb, cb, sb, !1)
      }
      _addImmediate(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qk;
        this._add(bb, cb, !0, !0)
      }
      _add(bb, cb, sb, kb) {
        const ab = bb?.[lb];
        if (!ab) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${Kk(bb)}`), !1;
        const Tb = ab.parent;
        if (!Tb && 0 !== bb[Ub]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${ab.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== ab.root && this._bindRoot(ab.root);
        const Ib = Tb?.[lb];
        if (!kb && Ib?.isStreamCollection) return Dc(Tb, this.id, ab.parentIndex), !0;
        const Hb = bb.constructor[Symbol.metadata],
          fb = this.isVisible(ab);
        if (!this.iterable || !sb || fb && -1 !== this.items.indexOf(bb) || this.items.push(bb), this.markVisible(ab), sb && Tb && this.addParentOf(ab, cb), !kb && ab.isStreamCollection) return !0;
        if (cb === Qk && ab.isNew) return this._markSubtreeVisible(ab, cb), !1;
        let Mb = this.changes.get(bb[Ub]);
        void 0 === Mb && (Mb = new Map, this.changes.set(bb[Ub], Mb));
        let Xb = !1;
        const nb = ab.encDescriptor.tags;
        if (ab.forEachChild(((bb, sb) => {
            const kb = nb[sb];
            if (void 0 !== kb) {
              if (!(kb === Qk || cb !== Qk && 0 !== (kb & cb))) return
            }
            this.add(bb.ref, cb, !1) && (Xb = !0)
          })), cb !== Qk) {
          this.addTag(ab, cb);
          const bb = Hb?.[yb];
          if (void 0 !== bb)
            for (let sb = cb; sb > 0; sb &= sb - 1) bb[sb & -sb]?.forEach((bb => {
              ab.getChange(bb) !== Wb.DELETE && Mb.set(bb, Wb.ADD)
            }))
        }
        if ((cb === Qk || !fb) && (!ab.isNew || Xb))
          if (ab.isArray && "string" !== typeof ab.refTarget[Qb]) ab.refTarget.items.length > 0 && (Mb.set(-1, Wb.ADD), Xb = !0);
          else {
            const bb = ab.encDescriptor.tags;
            ab.forEachLive((sb => {
              const kb = bb[sb];
              (void 0 === kb || kb === Qk || cb !== Qk && 0 !== (kb & cb)) && (Mb.set(sb, Wb.ADD), Xb = !0)
            }))
          } return Xb
      }
      _markSubtreeVisible(bb, cb) {
        const sb = bb.encDescriptor.tags;
        bb.forEachChild(((bb, kb) => {
          const Wb = sb[kb];
          if (void 0 !== Wb) {
            if (!(Wb === Qk || cb !== Qk && 0 !== (Wb & cb))) return
          }
          bb.isNew ? (this.markVisible(bb), this._markSubtreeVisible(bb, cb)) : this._add(bb.ref, cb, !1, !1)
        }))
      }
      addParentOf(bb, cb) {
        const sb = bb.parent[lb],
          kb = bb.parentIndex;
        this.isVisible(sb) || this.markVisible(sb);
        const ab = sb.parent?.[lb];
        if (ab && this.addParentOf(sb, cb), sb.hasFilteredFields && sb.getChange(kb) !== Wb.DELETE) {
          let ab = this.changes.get(sb.ref[Ub]);
          void 0 === ab && (ab = new Map, this.changes.set(sb.ref[Ub], ab));
          const Tb = sb.encDescriptor.tags[kb];
          void 0 !== Tb && Tb !== Qk && 0 !== (Tb & cb) && this.addTag(sb, cb), ab.set(sb.isArray ? bb : kb, Wb.ADD)
        }
      }
      _touchAncestorsOf(bb) {
        let cb = bb.parent?.[lb];
        if (void 0 === cb) return;
        const sb = [];
        for (; void 0 !== cb;) {
          if (cb.hasFilteredFields) {
            const bb = cb.ref[Ub];
            if (this.changes.has(bb)) break;
            sb.push(cb)
          }
          cb = cb.parent?.[lb]
        }
        for (let kb = sb.length - 1; kb >= 0; kb--) this.changes.set(sb[kb].ref[Ub], new Map)
      }
      remove(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qk,
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = bb?.[lb];
        if (!kb) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${Kk(bb)}`), this;
        const ab = kb.parent?.[lb];
        if (ab?.isStreamCollection) return this.unmarkVisible(kb), this.iterable && !sb && ik(this.items, this.items.indexOf(bb)),
          function(bb, cb, sb, kb, ab) {
            const Tb = bb._stream;
            if (void 0 === Tb) return !1;
            const Ub = Tb.pendingByView.get(cb);
            if (Ub?.has(kb)) return Ub.delete(kb), !1;
            const Ib = Tb.sentByView.get(cb);
            if (Ib?.has(kb)) {
              Ib.delete(kb);
              let bb = ab.get(sb);
              return void 0 === bb && (bb = new Map, ab.set(sb, bb)), bb.set(kb, Wb.DELETE), !0
            }
          }(kb.parent, this.id, kb.parent[Ub], kb.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(kb), this;
        if (kb.isStreamCollection) {
          this.unmarkVisible(kb), this.iterable && !sb && ik(this.items, this.items.indexOf(bb));
          const cb = kb.ref,
            ab = cb._stream;
          if (void 0 !== ab) {
            ab.pendingByView.get(this.id)?.clear();
            const bb = ab.sentByView.get(this.id);
            if (void 0 !== bb && bb.size > 0) {
              const sb = cb[Ub];
              let kb = this.changes.get(sb);
              void 0 === kb && (kb = new Map, this.changes.set(sb, kb));
              for (const cb of bb) kb.set(cb, Wb.DELETE);
              bb.clear()
            }
          }
          return this
        }
        this.unmarkVisible(kb), this.iterable && !sb && ik(this.items, this.items.indexOf(bb));
        const Tb = kb.ref,
          Ib = Tb.constructor[Symbol.metadata],
          Hb = Tb[Ub];
        this._touchAncestorsOf(kb);
        let fb = this.changes.get(Hb);
        if (void 0 === fb && (fb = new Map, this.changes.set(Hb, fb)), cb === Qk) {
          const bb = kb.parent;
          if (bb && !Rc.isValidInstance(bb) && kb.isFiltered) {
            const cb = ab.isArray ? kb : kb.parentIndex,
              sb = bb[Ub];
            let Tb = this.changes.get(sb);
            void 0 === Tb ? (Tb = new Map, this.changes.set(sb, Tb)) : Tb.get(cb) === Wb.ADD && this._dropPendingEntries(kb), Tb.set(cb, Wb.DELETE), this._recursiveDeleteVisibleChangeTree(kb)
          } else Ib?.[tb]?.forEach((bb => this._removeViewField(kb, fb, bb)))
        } else {
          const bb = Ib?.[yb];
          if (void 0 !== bb)
            for (let sb = cb; sb > 0; sb &= sb - 1) bb[sb & -sb]?.forEach((bb => this._removeViewField(kb, fb, bb)))
        }
        return void 0 === cb ? this.removeAllTagsOnTree(kb) : this.removeTag(kb, cb), this
      }
      has(bb) {
        return this.isVisible(bb[lb])
      }
      hasTag(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qk;
        return this.hasTagOnTree(bb[lb], cb)
      }
      subscribe(bb, cb) {
        const sb = bb?.[lb];
        if (!sb) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${Kk(bb)}`), this;
        if (void 0 === this._root && void 0 !== sb.root && this._bindRoot(sb.root), void 0 !== cb)
          if (sb.isStreamCollection) {
            const sb = gc(bb);
            null === cb ? sb.priorityByView?.delete(this.id) : (sb.priorityByView ??= new Map).set(this.id, cb)
          } else {
            const cb = bb?.constructor?.name ?? "collection",
              kb = sb.parent;
            if (void 0 === kb) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${cb} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const bb = kb?.constructor?.[Symbol.metadata]?.[sb.parentIndex]?.name,
                Wb = bb ? `${kb.constructor.name}#${bb}` : cb;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Wb} is a ${cb}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(sb)) return this;
        const kb = void 0 !== sb.parent && !this.isVisible(sb);
        if (kb ? (this.addParentOf(sb, Qk), this._add(bb, Qk, !1, !1)) : this.markVisible(sb), this._setSubscribed(sb), sb.isStreamCollection) {
          const cb = bb;
          sb.forEachChild(((bb, sb) => {
            Dc(cb, this.id, sb)
          }))
        } else kb || sb.forEachChild((bb => {
          this.markVisible(bb)
        }));
        return this
      }
      unsubscribe(bb) {
        const cb = bb?.[lb];
        if (!cb) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${Kk(bb)}`), this;
        if (!this.isSubscribed(cb)) return this;
        this._clearSubscribed(cb);
        const sb = cb.ref[Ub];
        if (cb.isStreamCollection) {
          const cb = bb._stream;
          if (void 0 !== cb) {
            cb.pendingByView.get(this.id)?.clear();
            const bb = cb.sentByView.get(this.id);
            if (void 0 !== bb && bb.size > 0) {
              let cb = this.changes.get(sb);
              void 0 === cb && (cb = new Map, this.changes.set(sb, cb));
              for (const sb of bb) cb.set(sb, Wb.DELETE);
              bb.clear()
            }
          }
        } else {
          const bb = cb.isArray;
          let kb = this.changes.get(sb);
          cb.forEachChild(((cb, ab) => {
            void 0 === kb && (kb = new Map, this.changes.set(sb, kb)), kb.set(bb ? cb : ab, Wb.DELETE), this.unmarkVisible(cb)
          }))
        }
        return this.unmarkVisible(cb), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let bb = 0, cb = this.items.length; bb < cb; bb++) this.remove(this.items[bb], Qk, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(bb) {
        let cb = this.isVisible(bb);
        if (!cb && bb.isVisibilitySharedWithParent)
          if (this.isVisible(bb.parent[lb])) this.markVisible(bb), cb = !0;
          else
            for (let sb = bb.extraParents; void 0 !== sb; sb = sb.next) {
              const kb = sb.ref[lb];
              if (kb.isFiltered && this.isVisible(kb)) {
                this.markVisible(bb), cb = !0;
                break
              }
            }
        return cb
      }
      _recursiveDeleteVisibleChangeTree(bb) {
        bb.forEachChild((bb => {
          this.unmarkVisible(bb), this._recursiveDeleteVisibleChangeTree(bb)
        }))
      }
      _dropPendingEntries(bb) {
        this.changes.delete(bb.ref[Ub]), bb.forEachChild((bb => this._dropPendingEntries(bb)))
      }
      _removeViewField(bb, cb, sb) {
        const kb = cb.get(sb) === Wb.ADD;
        cb.set(sb, Wb.DELETE);
        const ab = bb.ref[bb.encDescriptor.names[sb]],
          Tb = ab?.[lb];
        Tb && (this.unmarkVisible(Tb), this._recursiveDeleteVisibleChangeTree(Tb), kb && this._dropPendingEntries(Tb))
      }
    }

    function zk(bb) {
      bb.structSwitchEmitted || (bb.shouldEmitSwitch && (bb.buffer[bb.it.offset++] = 255, cc.number(bb.buffer, bb.ref[Ub], bb.it)), bb.structSwitchEmitted = !0)
    }

    function qk(bb, cb) {
      wk(bb, cb, Wb.ADD)
    }

    function dk(bb, cb) {
      if (cb._fullSyncGen === bb.gen) return;
      cb._fullSyncGen = bb.gen;
      if (!bb.hasView || bb.view.isChangeTreeVisible(cb)) {
        const sb = cb.encDescriptor;
        bb.changeTree = cb, bb.ref = cb.ref, bb.encoder = sb.encoder, bb.filter = sb.filter, bb.metadata = sb.metadata, bb.treeIsFiltered = cb.isFiltered, bb.isSchema = sb.isSchema, bb.filterBitmask = sb.filterBitmask, bb.tags = sb.tags, bb.structSwitchEmitted = !1, bb.shouldEmitSwitch = bb.hasView || bb.it.offset > bb.initialOffset || cb !== bb.rootChangeTree, cb.isArray && cb.collDirty.size > 0 && (cb.flags |= 512), Ws(cb, bb, qk)
      }
      es(cb, bb, Ak)
    }

    function Ak(bb, cb, sb) {
      dk(bb, cb)
    }

    function wk(bb, cb, sb) {
      if (cb < 0) {
        if (bb.treeIsFiltered !== bb.emitFiltered) return;
        return zk(bb), void(bb.buffer[bb.it.offset++] = 255 & Math.abs(cb))
      }
      if ((bb.isSchema ? bb.treeIsFiltered || (cb < 32 ? 0 !== (bb.filterBitmask & 1 << cb) : void 0 !== bb.tags[cb]) : bb.treeIsFiltered) !== bb.emitFiltered) return;
      const kb = bb.isEncodeAll ? Wb.ADD : sb;
      void 0 !== kb && (void 0 === bb.filter || bb.filter(bb.ref, cb, bb.view)) && (zk(bb), bb.encoder(bb.self, bb.buffer, bb.changeTree, cb, kb, bb.it, bb.isEncodeAll, bb.hasView, bb.metadata))
    }

    function rk(bb, cb) {
      const sb = new Uint8Array(bb.length + cb.length);
      return sb.set(bb, 0), sb.set(cb, bb.length), sb
    }
    class Sk {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(Sk.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(bb, cb) {
        this.context = qc.cache(bb.constructor), this.root = cb ?? new Ek(this.context), this.setState(bb)
      }
      setState(bb) {
        this.state = bb, this.state[lb].setRoot(this.root)
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
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.offset;
        return this._encodeChannel(bb, cb, sb, kb, !1)
      }
      encodeUnreliable() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.offset;
        return this._encodeChannel(bb, cb, sb, kb, !0)
      }
      _encodeChannel(bb, cb, sb, kb, Wb) {
        this.root.pendingFilterRefresh.length > 0 && Ts(this.root);
        const ab = void 0 !== cb,
          Tb = this.state[lb],
          Ub = this._encodeCtx;
        Ub.self = this, Ub.buffer = sb, Ub.it = bb, Ub.view = cb, Ub.isEncodeAll = !1, Ub.hasView = ab, Ub.emitFiltered = ab;
        let Ib = Wb ? this.root.unreliableChanges : this.root.changes;
        for (; Ib = Ib.next;) {
          const sb = Ib.changeTree;
          if (ab && !cb.isChangeTreeVisible(sb)) continue;
          const Hb = Wb ? sb.unreliableRecorder : sb;
          if (!Hb || !Hb.has()) continue;
          const fb = sb.encDescriptor;
          Ub.changeTree = sb, Ub.ref = sb.ref, Ub.encoder = fb.encoder, Ub.filter = fb.filter, Ub.metadata = fb.metadata, Ub.treeIsFiltered = sb.isFiltered, Ub.isSchema = fb.isSchema, Ub.filterBitmask = fb.filterBitmask, Ub.tags = fb.tags, Ub.structSwitchEmitted = !1, Ub.isRootTree = sb === Tb, Ub.shouldEmitSwitch = ab || bb.offset > kb || !Ub.isRootTree, Hb.forEachWithCtx(Ub, wk)
        }
        return Wb || ab || !this._isStreamBroadcastMode || this._emitStreamBroadcast(sb, bb), bb.offset > sb.byteLength ? (sb = this._resizeBuffer(sb, bb.offset), bb.offset = kb, this._encodeChannel(bb, cb, sb, kb, Wb)) : sb.subarray(0, bb.offset)
      }
      encodeFullSync(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.offset;
        this.root.pendingFilterRefresh.length > 0 && Ts(this.root);
        const ab = void 0 !== kb,
          Tb = this.state[lb],
          Ub = this._encodeCtx;
        return Ub.self = this, Ub.buffer = cb, Ub.it = bb, Ub.view = kb, Ub.isEncodeAll = !0, Ub.hasView = ab, Ub.emitFiltered = sb, Ub.gen = ++this._fullSyncGen, Ub.initialOffset = Wb, Ub.rootChangeTree = Tb, dk(Ub, Tb), bb.offset > cb.byteLength ? (cb = this._resizeBuffer(cb, bb.offset), bb.offset = Wb, this.encodeFullSync(bb, cb, sb, kb, Wb)) : cb.subarray(0, bb.offset)
      }
      _resizeBuffer(bb, cb) {
        const sb = Math.ceil(cb / Sk.BUFFER_SIZE) * Sk.BUFFER_SIZE,
          kb = new Uint8Array(sb);
        return kb.set(bb), bb === this.sharedBuffer && (this.sharedBuffer = kb), kb
      }
      encodeAll() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(bb, cb, !1)
      }
      encodeAllView(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Wb = sb.offset;
        return kb = this.encodeFullSync(sb, kb, !0, bb, Wb), rk(kb.subarray(0, cb), kb.subarray(Wb, sb.offset))
      }
      ensureCapacity(bb, cb) {
        if (cb + Sk.BUFFER_SIZE <= bb.byteLength) return bb;
        const sb = Math.ceil((cb + Sk.BUFFER_SIZE) / Sk.BUFFER_SIZE) * Sk.BUFFER_SIZE,
          kb = new Uint8Array(sb);
        return kb.set(bb.subarray(0, cb)), bb === this.sharedBuffer && (this.sharedBuffer = kb), kb
      }
      encodeView(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          ab = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Tb = sb.offset;
        this._emitStreamPriority(bb);
        for (const Ib of bb.changes.keys()) {
          const cb = bb.changes.get(Ib),
            ab = this.root.changeTrees[Ib];
          if (void 0 === ab) {
            bb.changes.delete(Ib);
            continue
          }
          if (0 === cb.size) continue;
          const Tb = ab.encDescriptor,
            Hb = Tb.encoder,
            fb = Tb.metadata,
            Mb = ab.ref,
            nb = ab.refTarget;
          kb = this.ensureCapacity(kb, sb.offset), kb[sb.offset++] = 255, cc.number(kb, Mb[Ub], sb);
          for (const [Ib, mb] of cb) {
            let cb;
            if (-1 === Ib) {
              const bb = nb.tmpItems,
                cb = nb.deletedIndexes;
              for (let Tb = 0; Tb < bb.length; Tb++) void 0 !== bb[Tb] && !0 !== cb[Tb] && Hb(this, kb, ab, Tb, Wb.ADD, sb, !1, !0, fb);
              continue
            }
            if ("number" === typeof Ib) cb = Ib;
            else {
              const sb = Ib.indexInParent(Mb);
              if (void 0 === sb) continue;
              if (cb = sb, mb === Wb.ADD && ab.getChange(cb) === Wb.DELETE) {
                bb.changes.delete(Ib.ref[Ub]);
                continue
              }
            }
            Hb(this, kb, ab, cb, void 0 !== nb[Xb](cb) && mb || Wb.DELETE, sb, !1, !0, fb)
          }
        }
        return bb.changes.clear(), kb = this.encode(sb, bb, kb), ab ? rk(kb.subarray(0, cb), kb.subarray(Tb, sb.offset)) : kb.subarray(Tb, sb.offset)
      }
      encodeUnreliableView(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Wb = sb.offset;
        return kb = this.encodeUnreliable(sb, bb, kb, Wb), rk(kb.subarray(0, cb), kb.subarray(Wb, sb.offset))
      }
      _emitStreamBroadcast(bb, cb) {
        const sb = this.root.streamTrees;
        for (const kb of sb) {
          const sb = kb,
            ab = sb[lb],
            Tb = sb[Ub];
          if (void 0 === Tb) continue;
          const Ib = sb._stream,
            Hb = Ib.broadcastDeletes,
            fb = Ib.broadcastPending,
            Mb = Ib.sentBroadcast,
            nb = Hb.size > 0,
            mb = fb.size > 0,
            Qb = ab.encDescriptor,
            eb = Qb.encoder,
            Cb = Qb.metadata;
          if (nb || mb) {
            if (bb[cb.offset++] = 255, cc.number(bb, Tb, cb), nb) {
              for (const sb of Hb) eb(this, bb, ab, sb, Wb.DELETE, cb, !1, !1, Cb);
              Hb.clear()
            }
            const kb = Ib.maxPerTick,
              mb = [];
            let Qb = 0;
            const Nb = [];
            for (const Tb of fb) {
              if (Qb >= kb) break;
              const Ub = sb[Xb](Tb);
              void 0 !== Ub ? (eb(this, bb, ab, Tb, Wb.ADD, cb, !1, !1, Cb), Mb.add(Tb), mb.push(Ub), Nb.push(Tb), Qb++) : Nb.push(Tb)
            }
            for (const bb of Nb) fb.delete(bb);
            for (const sb of mb) {
              const kb = sb[lb];
              if (void 0 === kb) continue;
              const ab = sb[Ub];
              if (void 0 === ab) continue;
              bb[cb.offset++] = 255, cc.number(bb, ab, cb);
              const Tb = kb.encDescriptor,
                Ib = Tb.encoder,
                Hb = Tb.metadata;
              kb.forEachLive((sb => {
                Rc.hasUnreliableAtIndex(Hb, sb) || Ib(this, bb, kb, sb, Wb.ADD, cb, !1, !1, Hb)
              }))
            }
          }
          for (const kb of Mb) {
            const Wb = sb[Xb](kb);
            if (void 0 === Wb) continue;
            const ab = Wb[lb];
            if (void 0 === ab || !ab.has()) continue;
            const Tb = Wb[Ub];
            if (void 0 === Tb) continue;
            bb[cb.offset++] = 255, cc.number(bb, Tb, cb);
            const Ib = ab.encDescriptor,
              Hb = Ib.encoder,
              fb = Ib.metadata;
            ab.forEach(((sb, kb) => {
              sb < 0 || Rc.hasUnreliableAtIndex(fb, sb) || Hb(this, bb, ab, sb, kb, cb, !1, !1, fb)
            }))
          }
        }
      }
      _emitStreamPriority(bb) {
        const cb = this.root.streamTrees;
        if (0 === cb.size) return;
        const sb = bb.id;
        for (const kb of cb) {
          const cb = kb,
            ab = cb._stream,
            Tb = ab.pendingByView.get(sb);
          if (void 0 === Tb || 0 === Tb.size) continue;
          const Ib = ab.priorityByView?.get(sb),
            Hb = void 0 !== Ib,
            fb = ab.priority,
            Mb = ab.maxPerTick,
            nb = [],
            mb = [];
          if (Hb || void 0 !== fb) {
            const sb = [],
              kb = [];
            let Wb = 0;
            for (const ab of Tb) {
              const Tb = cb[Xb](ab);
              if (void 0 === Tb) {
                mb.push(ab);
                continue
              }
              const Ub = Hb ? Ib(Tb) : fb(bb, Tb);
              if (Wb < Mb) {
                let bb = Wb++;
                for (; bb > 0 && kb[bb - 1] < Ub;) kb[bb] = kb[bb - 1], sb[bb] = sb[bb - 1], bb--;
                kb[bb] = Ub, sb[bb] = ab
              } else if (Ub > kb[Mb - 1]) {
                let bb = Mb - 1;
                for (; bb > 0 && kb[bb - 1] < Ub;) kb[bb] = kb[bb - 1], sb[bb] = sb[bb - 1], bb--;
                kb[bb] = Ub, sb[bb] = ab
              }
            }
            for (let bb = 0; bb < Wb; bb++) nb.push(sb[bb])
          } else
            for (const bb of Tb) {
              if (nb.length >= Mb) break;
              nb.push(bb)
            }
          for (const bb of mb) Tb.delete(bb);
          const Qb = nb.length;
          let eb = ab.sentByView.get(sb);
          void 0 === eb && (eb = new Set, ab.sentByView.set(sb, eb));
          for (let sb = 0; sb < Qb; sb++) {
            const kb = nb[sb],
              ab = cb[Xb](kb);
            if (void 0 === ab) {
              Tb.delete(kb);
              continue
            }
            bb._addImmediate(ab);
            const Ib = ab[lb];
            if (void 0 !== Ib) {
              const cb = ab[Ub];
              let sb = bb.changes.get(cb);
              void 0 === sb && (sb = new Map, bb.changes.set(cb, sb));
              const kb = Ib.metadata;
              Ib.forEachLive((bb => {
                Rc.hasUnreliableAtIndex(kb, bb) || sb.set(bb, Wb.ADD)
              }))
            }
            Tb.delete(kb), eb.add(kb)
          }
        }
      }
      discardChanges() {
        const bb = this.root.changes;
        let cb = bb.next;
        const sb = this.root;
        for (; cb;) {
          const bb = cb.next;
          cb.changeTree.endEncode(), sb.releaseNode(cb), cb = bb
        }
        bb.next = void 0, bb.tail = void 0
      }
      discardUnreliableChanges() {
        const bb = this.root.unreliableChanges;
        let cb = bb.next;
        const sb = this.root;
        for (; cb;) {
          const bb = cb.next;
          cb.changeTree.endEncodeUnreliable(), sb.releaseNode(cb), cb = bb
        }
        bb.next = void 0, bb.tail = void 0
      }
      tryEncodeTypeId(bb, cb, sb, kb) {
        const Wb = this.context.getTypeId(cb),
          ab = this.context.getTypeId(sb);
        void 0 !== ab ? Wb !== ab && (bb[kb.offset++] = 213, cc.number(bb, ab, kb)) : console.warn(`@colyseus/schema WARNING: Class "${sb.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const cb = 0 === bb.activeViews.size;
        for (const sb of bb.streamTrees)
          if (cb ? Pc(sb) : yc(sb, bb)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class Rk extends Error {
      constructor(bb) {
        super(bb), this.name = "DecodingWarning"
      }
    }
    const vk = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Fk {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(bb, cb), void 0 === cb[Ub] ? (vk.value = bb, Object.defineProperty(cb, Ub, vk)) : cb[Ub] !== bb && (cb[Ub] = bb), sb && (this.refCount[bb] = (this.refCount[bb] || 0) + 1), this.deletedRefs.has(bb) && this.deletedRefs.delete(bb)
      }
      removeRef(bb) {
        const cb = this.refCount[bb];
        if (void 0 !== cb)
          if (0 !== cb)(this.refCount[bb] = cb - 1) <= 0 && this.deletedRefs.add(bb);
          else try {
            const cb = this.refs.get(bb);
            throw new Rk(`trying to remove refId '${bb}' with 0 refCount (${cb.constructor.name}: ${JSON.stringify(cb)})`)
          } catch (IW) {
            console.warn(IW)
          } else try {
            throw new Rk("trying to remove refId that doesn't exist: " + bb)
          } catch (IW) {
            console.warn(IW)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((bb => {
          if (this.refCount[bb] > 0) return;
          const cb = this.refs.get(bb),
            sb = cb.constructor[Symbol.metadata];
          if (null != sb)
            for (const kb in sb) {
              const bb = cb[sb[kb].name];
              if ("object" === typeof bb && bb) {
                const cb = bb[Ub];
                void 0 === cb || this.deletedRefs.has(cb) || this.removeRef(cb)
              }
            } else "function" === typeof cb[Qb] && Array.from(cb.values()).forEach((bb => {
              const cb = bb[Ub];
              void 0 === cb || this.deletedRefs.has(cb) || this.removeRef(cb)
            }));
          this.refs.delete(bb), delete this.refCount[bb], delete this.callbacks[bb]
        })), this.deletedRefs.clear()
      }
      addCallback(bb, cb, sb) {
        if (void 0 === bb) {
          const bb = "number" === typeof cb ? Wb[cb] : cb;
          throw new Error(`Can't addCallback on '${bb}' (refId is undefined)`)
        }
        return this.callbacks[bb] || (this.callbacks[bb] = {}), this.callbacks[bb][cb] || (this.callbacks[bb][cb] = []), this.callbacks[bb][cb].push(sb), () => this.removeCallback(bb, cb, sb)
      }
      removeCallback(bb, cb, sb) {
        const kb = this.callbacks?.[bb]?.[cb]?.indexOf(sb);
        void 0 !== kb && -1 !== kb && ik(this.callbacks[bb][cb], kb)
      }
    }
    class xk {
      context;
      state;
      root;
      currentRefId = 0;
      TY;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(bb, cb) {
        this.setState(bb), this.context = cb || new qc(bb.constructor)
      }
      setState(bb) {
        this.state = bb, this.root = new Fk, this.root.addRef(0, bb)
      }
      decode(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Wb = void 0 !== this.TY ? [] : null,
          ab = this.root,
          Tb = bb.byteLength;
        let Ub = sb.constructor[fb];
        for (this.currentRefId = 0; cb.offset < Tb;) {
          if (bb[cb.offset] == kb) {
            cb.offset++, sb[Vb]?.();
            const kb = Nc.number(bb, cb),
              Wb = ab.refs.get(kb);
            Wb ? (sb = Wb, Ub = sb.constructor[fb], this.currentRefId = kb) : (console.error(`"refId" not found: ${kb}`, {
              previousRef: sb,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(bb, cb, Tb));
            continue
          } - 1 !== Ub(this, bb, cb, sb, Wb) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(bb, cb, Tb))
        }
        return sb[Vb]?.(), null !== this.resyncVisited && function(bb, cb) {
          bb.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : ds(bb, bb.state, new Set, cb)
        }(this, Wb), null !== Wb && this.TY?.(Wb), ab.garbageCollectDeletedRefs(), Wb
      }
      decodeResync(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(bb, cb)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(bb, cb, sb) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Wb = {
          offset: cb.offset
        };
        for (; cb.offset < sb && (bb[cb.offset] !== kb || (Wb.offset = cb.offset + 1, !this.root.refs.has(Nc.number(bb, Wb))));) cb.offset++
      }
      getInstanceType(bb, cb, sb) {
        let kb;
        if (213 === bb[cb.offset]) {
          cb.offset++;
          const sb = Nc.number(bb, cb);
          kb = this.context.get(sb)
        }
        return kb || sb
      }
      createInstanceOfType(bb) {
        return bb.initializeForDecoder()
      }
      removeChildRefs(bb, cb) {
        const sb = "string" !== typeof bb[Qb],
          kb = bb[Ub];
        bb.forEach(((ab, Tb) => {
          cb?.push({
            ref: bb,
            refId: kb,
            op: Wb.DELETE,
            field: Tb,
            value: void 0,
            previousValue: ab
          }), sb && this.root.removeRef(ab[Ub])
        }))
      }
    }
    const jk = tk({
        min: lk.float64(),
        max: lk.float64(),
        bits: lk.uint8(),
        mode: lk.uint8()
      }, "QuantizedDescriptor"),
      pk = tk({
        name: lk.string(),
        type: lk.string(),
        referencedType: lk.number(),
        childPrimitive: lk.string(),
        quantized: lk.ref(jk).optional()
      }, "ReflectionField"),
      bW = tk({
        id: lk.number(),
        extendsId: lk.number(),
        fields: lk.array(pk)
      }, "ReflectionType"),
      cW = tk({
        types: lk.array(bW),
        rootType: lk.number()
      }, "Reflection");

    function sW(bb) {
      const cb = bb.root,
        sb = cb.callbacks,
        kb = new WeakMap;
      let ab;

      function Tb(bb, sb) {
        let Hb = sb.instance?.constructor[Symbol.metadata] || bb,
          fb = sb.instance && "function" === typeof sb.instance.forEach || bb && !Pk.is(bb);
        if (Hb && !fb) {
          const bb = function(bb, Wb, Tb, Ib) {
            return Ib && void 0 !== sb.instance[Wb] && !kb.has(ab) && Tb(sb.instance[Wb], void 0), cb.addCallback(bb[Ub], Wb, Tb)
          };
          return new Proxy({
            listen: function(cb, Wb) {
              let Tb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (sb.instance) return bb(sb.instance, cb, Wb, Tb);
              {
                let Ub = () => {};
                return sb.onInstanceAvailable(((sb, Ib) => {
                  Ub = bb(sb, cb, Wb, Tb && Ib && !kb.has(ab))
                })), () => Ub()
              }
            },
            onChange: function(bb) {
              return cb.addCallback(sb.instance[Ub], Wb.REPLACE, bb)
            },
            bindTo: function(bb, kb) {
              return kb || (kb = Object.keys(Hb).map((bb => Hb[bb].name))), cb.addCallback(sb.instance[Ub], Wb.REPLACE, (() => {
                kb.forEach((cb => bb[cb] = sb.instance[cb]))
              }))
            }
          }, {
            get(bb, cb) {
              const kb = Hb[Hb[cb]];
              if (kb) {
                const bb = sb.instance?.[cb],
                  Wb = kb => {
                    const Wb = Ib(sb.instance).listen(cb, ((bb, cb) => {
                      kb(bb, !1), Wb?.()
                    }), !1);
                    void 0 !== bb?.[Ub] && kb(bb, !0)
                  };
                return Tb(kb.type, {
                  instance: void 0 !== bb?.[Ub] && bb,
                  parentInstance: sb.instance,
                  onInstanceAvailable: Wb
                })
              }
              return bb[cb]
            },
            has: (bb, cb) => void 0 !== Hb[cb],
            set(bb, cb, sb) {
              throw new Error("not allowed")
            },
            deleteProperty(bb, cb) {
              throw new Error("not allowed")
            }
          })
        } {
          const bb = function(bb, sb, Tb) {
              return Tb && bb.forEach(((bb, cb) => sb(bb, cb))), cb.addCallback(bb[Ub], Wb.ADD, ((bb, cb) => {
                kb.set(sb, !0), ab = sb, sb(bb, cb), kb.delete(sb), ab = void 0
              }))
            },
            Tb = function(bb, sb) {
              return cb.addCallback(bb[Ub], Wb.DELETE, sb)
            },
            Ib = function(bb, sb) {
              return cb.addCallback(bb[Ub], Wb.REPLACE, sb)
            };
          return new Proxy({
            ZN: function(cb) {
              let Wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (sb.instance) return bb(sb.instance, cb, Wb && !kb.has(ab));
              if (sb.onInstanceAvailable) {
                let Tb = () => {};
                return sb.onInstanceAvailable(((sb, Ub) => {
                  Tb = bb(sb, cb, Wb && Ub && !kb.has(ab))
                })), () => Tb()
              }
            },
            wL: function(bb) {
              if (sb.instance) return Tb(sb.instance, bb);
              if (sb.onInstanceAvailable) {
                let cb = () => {};
                return sb.onInstanceAvailable((sb => {
                  cb = Tb(sb, bb)
                })), () => cb()
              }
            },
            onChange: function(bb) {
              if (sb.instance) return Ib(sb.instance, bb);
              if (sb.onInstanceAvailable) {
                let cb = () => {};
                return sb.onInstanceAvailable((sb => {
                  cb = Ib(sb, bb)
                })), () => cb()
              }
            }
          }, {
            get(bb, cb) {
              if (!bb[cb]) throw new Error(`Can't access '${cb}' through callback proxy. access the instance directly.`);
              return bb[cb]
            },
            has: (bb, cb) => void 0 !== bb[cb],
            set(bb, cb, sb) {
              throw new Error("not allowed")
            },
            deleteProperty(bb, cb) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Ib(bb) {
        return Tb(void 0, {
          instance: bb
        })
      }
      return bb.TY = function(bb) {
        const cb = new Set;
        for (let kb = 0, ab = bb.length; kb < ab; kb++) {
          const ab = bb[kb],
            Tb = ab.refId,
            Ib = ab.ref,
            Hb = sb[Tb];
          if (Hb) {
            if ((ab.op & Wb.DELETE) === Wb.DELETE && Pk.isSchema(ab.previousValue)) {
              const bb = sb[ab.previousValue[Ub]]?.[Wb.DELETE];
              for (let cb = bb?.length - 1; cb >= 0; cb--) bb[cb]()
            }
            if (Pk.isSchema(Ib)) {
              if (!cb.has(Tb)) {
                const bb = Hb?.[Wb.REPLACE];
                for (let cb = bb?.length - 1; cb >= 0; cb--) bb[cb]()
              }
              if (Hb.hasOwnProperty(ab.field)) {
                const bb = Hb[ab.field];
                for (let cb = bb?.length - 1; cb >= 0; cb--) bb[cb](ab.value, ab.previousValue)
              }
            } else {
              if ((ab.op & Wb.DELETE) === Wb.DELETE) {
                if (void 0 !== ab.previousValue) {
                  const bb = Hb[Wb.DELETE];
                  for (let cb = bb?.length - 1; cb >= 0; cb--) bb[cb](ab.previousValue, ab.dynamicIndex ?? ab.field)
                }
                if ((ab.op & Wb.ADD) === Wb.ADD) {
                  const bb = Hb[Wb.ADD];
                  for (let cb = bb?.length - 1; cb >= 0; cb--) bb[cb](ab.value, ab.dynamicIndex ?? ab.field)
                }
              } else if ((ab.op & Wb.ADD) === Wb.ADD && ab.previousValue !== ab.value) {
                const bb = Hb[Wb.ADD];
                for (let cb = bb?.length - 1; cb >= 0; cb--) bb[cb](ab.value, ab.dynamicIndex ?? ab.field)
              }
              if (ab.value !== ab.previousValue && (void 0 !== ab.value || void 0 !== ab.previousValue)) {
                const bb = Hb[Wb.REPLACE];
                for (let cb = bb?.length - 1; cb >= 0; cb--) bb[cb](ab.value, ab.dynamicIndex ?? ab.field)
              }
            }
            cb.add(Tb)
          }
        }
      }, Ib
    }

    function kW(bb, cb) {
      bb.TY = cb
    }
    cW.encode = function(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const sb = bb.context,
        kb = new cW,
        Wb = new Sk(kb),
        ab = sb.schemas.get(bb.state.constructor);
      ab > 0 && (kb.rootType = ab);
      const Tb = new Set,
        Ub = {},
        Ib = bb => {
          if (void 0 === bb.extendsId || Tb.has(bb.extendsId)) {
            Tb.add(bb.id), kb.types.push(bb);
            const cb = Ub[bb.id];
            void 0 !== cb && (delete Ub[bb.id], cb.forEach((bb => Ib(bb))))
          } else void 0 === Ub[bb.extendsId] && (Ub[bb.extendsId] = []), Ub[bb.extendsId].push(bb)
        };
      sb.schemas.forEach(((bb, cb) => {
        const kb = new bW;
        kb.id = Number(bb);
        const Wb = Object.getPrototypeOf(cb);
        Wb !== Pk && (kb.extendsId = sb.schemas.get(Wb));
        const ab = cb[Symbol.metadata];
        if (ab !== Wb[Symbol.metadata]) {
          const bb = ab[gb] ?? -1;
          for (let cb = 0; cb <= bb; cb++) {
            const bb = ab[cb];
            if (void 0 === bb) continue;
            const Wb = bb.name;
            if (!Object.prototype.hasOwnProperty.call(ab, Wb)) continue;
            const Tb = new pk;
            let Ub;
            if (Tb.name = Wb, "string" === typeof bb.type) Ub = bb.type;
            else if (Gc(bb.type)) {
              const cb = bb.type.quantized;
              Ub = "quantized";
              const sb = new jk;
              sb.min = cb.min, sb.max = cb.max, sb.bits = cb.bits, sb.mode = cb.wrap ? 1 : 0, Tb.quantized = sb
            } else {
              let cb;
              Pk.is(bb.type) ? (Ub = "ref", cb = bb.type) : (Ub = Object.keys(bb.type)[0], "string" === typeof bb.type[Ub] ? Tb.childPrimitive = bb.type[Ub] : cb = bb.type[Ub]), Tb.referencedType = cb ? sb.getTypeId(cb) : -1
            }
            Tb.type = Ub, kb.fields.push(Tb)
          }
        }
        Ib(kb)
      }));
      for (const Hb in Ub) Ub[Hb].forEach((bb => kb.types.push(bb)));
      return Wb.encodeAll(cb).slice(0, cb.offset)
    }, cW.decode = function(bb, cb) {
      const sb = new cW;
      new xk(sb).decode(bb, cb);
      const kb = new qc;
      sb.types.forEach((bb => {
        const cb = kb.get(bb.extendsId) ?? Pk,
          sb = class extends cb {};
        qc.register(sb), kb.add(sb, bb.id)
      }), {});
      sb.types.forEach((bb => {
        const cb = kb.get(bb.id),
          Wb = Rc.initialize(cb),
          ab = [];
        let Tb = bb;
        do {
          ab.push(Tb), Tb = sb.types.find((bb => bb.id === Tb.extendsId))
        } while (Tb);
        let Ub = 0;
        ab.reverse().forEach((bb => {
          ((bb, cb, sb) => {
            cb.fields.forEach(((cb, Wb) => {
              const ab = sb + Wb;
              if (void 0 !== cb.quantized) {
                const sb = cb.quantized;
                Rc.addField(bb, ab, cb.name, {
                  quantized: Oc({
                    min: sb.min,
                    max: sb.max,
                    bits: sb.bits,
                    mode: 1 === sb.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== cb.referencedType) {
                const sb = cb.type,
                  Wb = kb.get(cb.referencedType) ?? cb.childPrimitive;
                "ref" === sb ? Rc.addField(bb, ab, cb.name, Wb) : Rc.addField(bb, ab, cb.name, {
                  [sb]: Wb
                })
              } else Rc.addField(bb, ab, cb.name, cb.type)
            }))
          })(Wb, bb, Ub), Ub += bb.fields.length
        }))
      }));
      const Wb = new(kb.get(sb.rootType || 0));
      return new xk(Wb, kb)
    }, cW.makeEncodable = function(bb) {
      const cb = bb[Symbol.metadata];
      if (!cb) return bb;
      const sb = cb[gb];
      if (void 0 === sb) return bb;
      for (let kb = 0; kb <= sb; kb++) {
        const sb = cb[kb];
        sb && Rc.defineField(bb, cb, kb, sb.name, sb.type)
      }
      return Object.prototype.hasOwnProperty.call(bb, hb) && delete bb[hb], bb
    };
    class WW {
      Vm;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(bb) {
        this.Vm = bb, this.Vm.TY = this.TY.bind(this)
      }
      get callbacks() {
        return this.Vm.root.callbacks
      }
      get state() {
        return this.Vm.state
      }
      addCallback(bb, cb, sb) {
        return this.Vm.root.addCallback(bb, cb, sb)
      }
      addCallbackOrWaitCollectionAvailable(bb, cb, sb, kb) {
        let ab = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Tb = () => {};
        const Ib = () => Tb(),
          Hb = bb[cb];
        if (Hb && void 0 !== Hb[Ub]) return ab = ab && !1 === this.isTriggering, sb === Wb.ADD && ab && Hb.forEach(((bb, cb) => {
          kb(bb, cb)
        })), this.addCallback(Hb[Ub], sb, kb);
        {
          let Wb;
          return Wb = this.addCallback(bb[Ub], cb, ((bb, cb) => {
            null !== bb && void 0 !== bb && (Wb(), Tb = this.addCallback(bb[Ub], sb, kb))
          })), Tb = Wb, Ib
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(bb, cb, sb) {
        let kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        kb = kb && !1 === this.isTriggering;
        const Wb = bb[cb];
        return kb && null !== Wb && void 0 !== Wb && sb(Wb, void 0), this.addCallback(bb[Ub], cb, sb)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const bb = arguments.length <= 0 ? void 0 : arguments[0],
            cb = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(bb[Ub], Wb.REPLACE, cb)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Wb.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Wb.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      ZN() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Wb.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Wb.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      wL() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Wb.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Wb.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(bb, cb, sb) {
        let kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const ab = bb.constructor[Symbol.metadata];
        sb || (sb = Object.keys(ab).filter((bb => !isNaN(Number(bb)))).map((bb => ab[bb].name)));
        const Tb = () => {
          for (const kb of sb) {
            const sb = bb[kb];
            void 0 !== sb && (cb[kb] = sb)
          }
        };
        return kb && Tb(), this.addCallback(bb[Ub], Wb.REPLACE, Tb)
      }
      TY(bb) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let cb = 0, sb = bb.length; cb < sb; cb++) {
          const sb = bb[cb],
            kb = sb.refId,
            ab = sb.ref,
            Tb = this.callbacks[kb];
          if (Tb) {
            if ((sb.op & Wb.DELETE) === Wb.DELETE && Pk.isSchema(sb.previousValue)) {
              const bb = sb.previousValue[Ub],
                cb = this.callbacks[bb]?.[Wb.DELETE];
              if (cb)
                for (let sb = cb.length - 1; sb >= 0; sb--) try {
                  cb[sb]()
                } catch (IW) {
                  console.error(IW)
                }
            }
            if (Pk.isSchema(ab)) {
              if (!this.uniqueRefIds.has(kb)) {
                const bb = Tb[Wb.REPLACE];
                if (bb)
                  for (let cb = bb.length - 1; cb >= 0; cb--) try {
                    bb[cb]()
                  } catch (IW) {
                    console.error(IW)
                  }
              }
              const bb = Tb[sb.field];
              if (bb)
                for (let cb = bb.length - 1; cb >= 0; cb--) try {
                  bb[cb](sb.value, sb.previousValue)
                } catch (IW) {
                  console.error(IW)
                }
            } else {
              const bb = sb.dynamicIndex ?? sb.field;
              if ((sb.op & Wb.DELETE) === Wb.DELETE) {
                if (void 0 !== sb.previousValue) {
                  const cb = Tb[Wb.DELETE];
                  if (cb)
                    for (let kb = cb.length - 1; kb >= 0; kb--) try {
                      cb[kb](sb.previousValue, bb)
                    } catch (IW) {
                      console.error(IW)
                    }
                }
                if ((sb.op & Wb.ADD) === Wb.ADD) {
                  const cb = Tb[Wb.ADD];
                  if (cb)
                    for (let kb = cb.length - 1; kb >= 0; kb--) try {
                      cb[kb](sb.value, bb)
                    } catch (IW) {
                      console.error(IW)
                    }
                }
              } else if ((sb.op & Wb.ADD) === Wb.ADD && sb.previousValue !== sb.value) {
                const cb = Tb[Wb.ADD];
                if (cb)
                  for (let kb = cb.length - 1; kb >= 0; kb--) try {
                    cb[kb](sb.value, bb)
                  } catch (IW) {
                    console.error(IW)
                  }
              }
              if (sb.value !== sb.previousValue) {
                const cb = Tb[Wb.REPLACE];
                if (cb)
                  for (let kb = cb.length - 1; kb >= 0; kb--) try {
                    cb[kb](bb, sb.value)
                  } catch (IW) {
                    console.error(IW)
                  }
              }
            }
            this.uniqueRefIds.add(kb)
          }
        }
        this.isTriggering = !1
      }
    }
    const aW = {
      get(bb) {
        if (bb instanceof xk) return new WW(bb);
        if ("Vm" in bb.lC) return new WW(bb.lC.Vm);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(bb) {
        if (bb instanceof xk) return sW(bb);
        if ("Vm" in bb.lC) return sW(bb.lC.Vm);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (bb, cb) => kW(bb, cb)
    };
    class TW {
      _free = [];
      _factory;
      _maxSize;
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = bb, this._maxSize = cb.maxSize ?? 1 / 0;
        const sb = cb.preallocate ?? 0;
        for (let kb = 0; kb < sb; kb++) this._free.push(bb())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(bb) {
        Pk.reset(bb), this._free.length < this._maxSize && this._free.push(bb)
      }
      get size() {
        return this._free.length
      }
    }

    function UW(bb) {
      return new TW((() => new bb), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    uc("map", {
      constructor: Tk
    }), uc("array", {
      constructor: Wk
    }), uc("set", {
      constructor: Ik
    }), uc("collection", {
      constructor: Uk
    })
  },
  8686: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      __addDisposableResource: () => Gb,
      __assign: () => ab,
      __asyncDelegator: () => Jb,
      __asyncGenerator: () => hb,
      __asyncValues: () => gb,
      __await: () => Yb,
      __awaiter: () => mb,
      __classPrivateFieldGet: () => Eb,
      __classPrivateFieldIn: () => Ob,
      __classPrivateFieldSet: () => ib,
      __createBinding: () => Qb,
      __decorate: () => Ub,
      __disposeResources: () => Zb,
      __esDecorate: () => Hb,
      __exportStar: () => eb,
      __extends: () => Wb,
      __generator: () => lb,
      __importDefault: () => Db,
      __importStar: () => Pb,
      __makeTemplateObject: () => Bb,
      __metadata: () => nb,
      __param: () => Ib,
      __propKey: () => Mb,
      __read: () => Nb,
      __rest: () => Tb,
      __rewriteRelativeImportExtension: () => zb,
      __runInitializers: () => fb,
      __setFunctionName: () => Xb,
      __spread: () => Vb,
      __spreadArray: () => ub,
      __spreadArrays: () => Lb,
      __values: () => Cb,
      default: () => qb
    });
    var kb = function(bb, cb) {
      return kb = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(bb, cb) {
        bb.__proto__ = cb
      } || function(bb, cb) {
        for (var sb in cb) Object.prototype.hasOwnProperty.call(cb, sb) && (bb[sb] = cb[sb])
      }, kb(bb, cb)
    };

    function Wb(bb, cb) {
      if ("function" !== typeof cb && null !== cb) throw new TypeError("Class extends value " + String(cb) + " is not a constructor or null");

      function sb() {
        this.constructor = bb
      }
      kb(bb, cb), bb.prototype = null === cb ? Object.create(cb) : (sb.prototype = cb.prototype, new sb)
    }
    var ab = function() {
      return ab = Object.assign || function(bb) {
        for (var cb, sb = 1, kb = arguments.length; sb < kb; sb++)
          for (var Wb in cb = arguments[sb]) Object.prototype.hasOwnProperty.call(cb, Wb) && (bb[Wb] = cb[Wb]);
        return bb
      }, ab.apply(this, arguments)
    };

    function Tb(bb, cb) {
      var sb = {};
      for (var kb in bb) Object.prototype.hasOwnProperty.call(bb, kb) && cb.indexOf(kb) < 0 && (sb[kb] = bb[kb]);
      if (null != bb && "function" === typeof Object.getOwnPropertySymbols) {
        var Wb = 0;
        for (kb = Object.getOwnPropertySymbols(bb); Wb < kb.length; Wb++) cb.indexOf(kb[Wb]) < 0 && Object.prototype.propertyIsEnumerable.call(bb, kb[Wb]) && (sb[kb[Wb]] = bb[kb[Wb]])
      }
      return sb
    }

    function Ub(bb, cb, sb, kb) {
      var Wb, ab = arguments.length,
        Tb = ab < 3 ? cb : null === kb ? kb = Object.getOwnPropertyDescriptor(cb, sb) : kb;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Tb = Reflect.decorate(bb, cb, sb, kb);
      else
        for (var Ub = bb.length - 1; Ub >= 0; Ub--)(Wb = bb[Ub]) && (Tb = (ab < 3 ? Wb(Tb) : ab > 3 ? Wb(cb, sb, Tb) : Wb(cb, sb)) || Tb);
      return ab > 3 && Tb && Object.defineProperty(cb, sb, Tb), Tb
    }

    function Ib(bb, cb) {
      return function(sb, kb) {
        cb(sb, kb, bb)
      }
    }

    function Hb(bb, cb, sb, kb, Wb, ab) {
      function Tb(bb) {
        if (void 0 !== bb && "function" !== typeof bb) throw new TypeError("Function expected");
        return bb
      }
      for (var Ub, Ib = kb.kind, Hb = "getter" === Ib ? "get" : "setter" === Ib ? "set" : "value", fb = !cb && bb ? kb.static ? bb : bb.prototype : null, Mb = cb || (fb ? Object.getOwnPropertyDescriptor(fb, kb.name) : {}), Xb = !1, nb = sb.length - 1; nb >= 0; nb--) {
        var mb = {};
        for (var lb in kb) mb[lb] = "access" === lb ? {} : kb[lb];
        for (var lb in kb.access) mb.access[lb] = kb.access[lb];
        mb.addInitializer = function(bb) {
          if (Xb) throw new TypeError("Cannot add initializers after decoration has completed");
          ab.push(Tb(bb || null))
        };
        var Qb = (0, sb[nb])("accessor" === Ib ? {
          get: Mb.get,
          set: Mb.set
        } : Mb[Hb], mb);
        if ("accessor" === Ib) {
          if (void 0 === Qb) continue;
          if (null === Qb || "object" !== typeof Qb) throw new TypeError("Object expected");
          (Ub = Tb(Qb.get)) && (Mb.get = Ub), (Ub = Tb(Qb.set)) && (Mb.set = Ub), (Ub = Tb(Qb.init)) && Wb.unshift(Ub)
        } else(Ub = Tb(Qb)) && ("field" === Ib ? Wb.unshift(Ub) : Mb[Hb] = Ub)
      }
      fb && Object.defineProperty(fb, kb.name, Mb), Xb = !0
    }

    function fb(bb, cb, sb) {
      for (var kb = arguments.length > 2, Wb = 0; Wb < cb.length; Wb++) sb = kb ? cb[Wb].call(bb, sb) : cb[Wb].call(bb);
      return kb ? sb : void 0
    }

    function Mb(bb) {
      return "symbol" === typeof bb ? bb : "".concat(bb)
    }

    function Xb(bb, cb, sb) {
      return "symbol" === typeof cb && (cb = cb.description ? "[".concat(cb.description, "]") : ""), Object.defineProperty(bb, "name", {
        configurable: !0,
        value: sb ? "".concat(sb, " ", cb) : cb
      })
    }

    function nb(bb, cb) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(bb, cb)
    }

    function mb(bb, cb, sb, kb) {
      return new(sb || (sb = Promise))((function(Wb, ab) {
        function Tb(bb) {
          try {
            Ib(kb.next(bb))
          } catch (cb) {
            ab(cb)
          }
        }

        function Ub(bb) {
          try {
            Ib(kb.throw(bb))
          } catch (cb) {
            ab(cb)
          }
        }

        function Ib(bb) {
          var cb;
          bb.done ? Wb(bb.value) : (cb = bb.value, cb instanceof sb ? cb : new sb((function(bb) {
            bb(cb)
          }))).then(Tb, Ub)
        }
        Ib((kb = kb.apply(bb, cb || [])).next())
      }))
    }

    function lb(bb, cb) {
      var sb, kb, Wb, ab = {
          label: 0,
          sent: function() {
            if (1 & Wb[0]) throw Wb[1];
            return Wb[1]
          },
          trys: [],
          ops: []
        },
        Tb = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Tb.next = Ub(0), Tb.throw = Ub(1), Tb.return = Ub(2), "function" === typeof Symbol && (Tb[Symbol.iterator] = function() {
        return this
      }), Tb;

      function Ub(Ub) {
        return function(Ib) {
          return function(Ub) {
            if (sb) throw new TypeError("Generator is already executing.");
            for (; Tb && (Tb = 0, Ub[0] && (ab = 0)), ab;) try {
              if (sb = 1, kb && (Wb = 2 & Ub[0] ? kb.return : Ub[0] ? kb.throw || ((Wb = kb.return) && Wb.call(kb), 0) : kb.next) && !(Wb = Wb.call(kb, Ub[1])).done) return Wb;
              switch (kb = 0, Wb && (Ub = [2 & Ub[0], Wb.value]), Ub[0]) {
                case 0:
                case 1:
                  Wb = Ub;
                  break;
                case 4:
                  return ab.label++, {
                    value: Ub[1],
                    done: !1
                  };
                case 5:
                  ab.label++, kb = Ub[1], Ub = [0];
                  continue;
                case 7:
                  Ub = ab.ops.pop(), ab.trys.pop();
                  continue;
                default:
                  if (!(Wb = (Wb = ab.trys).length > 0 && Wb[Wb.length - 1]) && (6 === Ub[0] || 2 === Ub[0])) {
                    ab = 0;
                    continue
                  }
                  if (3 === Ub[0] && (!Wb || Ub[1] > Wb[0] && Ub[1] < Wb[3])) {
                    ab.label = Ub[1];
                    break
                  }
                  if (6 === Ub[0] && ab.label < Wb[1]) {
                    ab.label = Wb[1], Wb = Ub;
                    break
                  }
                  if (Wb && ab.label < Wb[2]) {
                    ab.label = Wb[2], ab.ops.push(Ub);
                    break
                  }
                  Wb[2] && ab.ops.pop(), ab.trys.pop();
                  continue
              }
              Ub = cb.call(bb, ab)
            } catch (Ib) {
              Ub = [6, Ib], kb = 0
            } finally {
              sb = Wb = 0
            }
            if (5 & Ub[0]) throw Ub[1];
            return {
              value: Ub[0] ? Ub[1] : void 0,
              done: !0
            }
          }([Ub, Ib])
        }
      }
    }
    var Qb = Object.create ? function(bb, cb, sb, kb) {
      void 0 === kb && (kb = sb);
      var Wb = Object.getOwnPropertyDescriptor(cb, sb);
      Wb && !("get" in Wb ? !cb.__esModule : Wb.writable || Wb.configurable) || (Wb = {
        enumerable: !0,
        get: function() {
          return cb[sb]
        }
      }), Object.defineProperty(bb, kb, Wb)
    } : function(bb, cb, sb, kb) {
      void 0 === kb && (kb = sb), bb[kb] = cb[sb]
    };

    function eb(bb, cb) {
      for (var sb in bb) "default" === sb || Object.prototype.hasOwnProperty.call(cb, sb) || Qb(cb, bb, sb)
    }

    function Cb(bb) {
      var cb = "function" === typeof Symbol && Symbol.iterator,
        sb = cb && bb[cb],
        kb = 0;
      if (sb) return sb.call(bb);
      if (bb && "number" === typeof bb.length) return {
        next: function() {
          return bb && kb >= bb.length && (bb = void 0), {
            value: bb && bb[kb++],
            done: !bb
          }
        }
      };
      throw new TypeError(cb ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Nb(bb, cb) {
      var sb = "function" === typeof Symbol && bb[Symbol.iterator];
      if (!sb) return bb;
      var kb, Wb, ab = sb.call(bb),
        Tb = [];
      try {
        for (;
          (void 0 === cb || cb-- > 0) && !(kb = ab.next()).done;) Tb.push(kb.value)
      } catch (Ub) {
        Wb = {
          error: Ub
        }
      } finally {
        try {
          kb && !kb.done && (sb = ab.return) && sb.call(ab)
        } finally {
          if (Wb) throw Wb.error
        }
      }
      return Tb
    }

    function Vb() {
      for (var bb = [], cb = 0; cb < arguments.length; cb++) bb = bb.concat(Nb(arguments[cb]));
      return bb
    }

    function Lb() {
      for (var bb = 0, cb = 0, sb = arguments.length; cb < sb; cb++) bb += arguments[cb].length;
      var kb = Array(bb),
        Wb = 0;
      for (cb = 0; cb < sb; cb++)
        for (var ab = arguments[cb], Tb = 0, Ub = ab.length; Tb < Ub; Tb++, Wb++) kb[Wb] = ab[Tb];
      return kb
    }

    function ub(bb, cb, sb) {
      if (sb || 2 === arguments.length)
        for (var kb, Wb = 0, ab = cb.length; Wb < ab; Wb++) !kb && Wb in cb || (kb || (kb = Array.prototype.slice.call(cb, 0, Wb)), kb[Wb] = cb[Wb]);
      return bb.concat(kb || Array.prototype.slice.call(cb))
    }

    function Yb(bb) {
      return this instanceof Yb ? (this.v = bb, this) : new Yb(bb)
    }

    function hb(bb, cb, sb) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var kb, Wb = sb.apply(bb, cb || []),
        ab = [];
      return kb = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Tb("next"), Tb("throw"), Tb("return", (function(bb) {
        return function(cb) {
          return Promise.resolve(cb).then(bb, Hb)
        }
      })), kb[Symbol.asyncIterator] = function() {
        return this
      }, kb;

      function Tb(bb, cb) {
        Wb[bb] && (kb[bb] = function(cb) {
          return new Promise((function(sb, kb) {
            ab.push([bb, cb, sb, kb]) > 1 || Ub(bb, cb)
          }))
        }, cb && (kb[bb] = cb(kb[bb])))
      }

      function Ub(bb, cb) {
        try {
          (sb = Wb[bb](cb)).value instanceof Yb ? Promise.resolve(sb.value.v).then(Ib, Hb) : fb(ab[0][2], sb)
        } catch (kb) {
          fb(ab[0][3], kb)
        }
        var sb
      }

      function Ib(bb) {
        Ub("next", bb)
      }

      function Hb(bb) {
        Ub("throw", bb)
      }

      function fb(bb, cb) {
        bb(cb), ab.shift(), ab.length && Ub(ab[0][0], ab[0][1])
      }
    }

    function Jb(bb) {
      var cb, sb;
      return cb = {}, kb("next"), kb("throw", (function(bb) {
        throw bb
      })), kb("return"), cb[Symbol.iterator] = function() {
        return this
      }, cb;

      function kb(kb, Wb) {
        cb[kb] = bb[kb] ? function(cb) {
          return (sb = !sb) ? {
            value: Yb(bb[kb](cb)),
            done: !1
          } : Wb ? Wb(cb) : cb
        } : Wb
      }
    }

    function gb(bb) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var cb, sb = bb[Symbol.asyncIterator];
      return sb ? sb.call(bb) : (bb = Cb(bb), cb = {}, kb("next"), kb("throw"), kb("return"), cb[Symbol.asyncIterator] = function() {
        return this
      }, cb);

      function kb(sb) {
        cb[sb] = bb[sb] && function(cb) {
          return new Promise((function(kb, Wb) {
            (function(bb, cb, sb, kb) {
              Promise.resolve(kb).then((function(cb) {
                bb({
                  value: cb,
                  done: sb
                })
              }), cb)
            })(kb, Wb, (cb = bb[sb](cb)).done, cb.value)
          }))
        }
      }
    }

    function Bb(bb, cb) {
      return Object.defineProperty ? Object.defineProperty(bb, "raw", {
        value: cb
      }) : bb.raw = cb, bb
    }
    var tb = Object.create ? function(bb, cb) {
        Object.defineProperty(bb, "default", {
          enumerable: !0,
          value: cb
        })
      } : function(bb, cb) {
        bb.default = cb
      },
      yb = function(bb) {
        return yb = Object.getOwnPropertyNames || function(bb) {
          var cb = [];
          for (var sb in bb) Object.prototype.hasOwnProperty.call(bb, sb) && (cb[cb.length] = sb);
          return cb
        }, yb(bb)
      };

    function Pb(bb) {
      if (bb && bb.__esModule) return bb;
      var cb = {};
      if (null != bb)
        for (var sb = yb(bb), kb = 0; kb < sb.length; kb++) "default" !== sb[kb] && Qb(cb, bb, sb[kb]);
      return tb(cb, bb), cb
    }

    function Db(bb) {
      return bb && bb.__esModule ? bb : {
        default: bb
      }
    }

    function Eb(bb, cb, sb, kb) {
      if ("a" === sb && !kb) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof cb ? bb !== cb || !kb : !cb.has(bb)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === sb ? kb : "a" === sb ? kb.call(bb) : kb ? kb.value : cb.get(bb)
    }

    function ib(bb, cb, sb, kb, Wb) {
      if ("m" === kb) throw new TypeError("Private method is not writable");
      if ("a" === kb && !Wb) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof cb ? bb !== cb || !Wb : !cb.has(bb)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === kb ? Wb.call(bb, sb) : Wb ? Wb.value = sb : cb.set(bb, sb), sb
    }

    function Ob(bb, cb) {
      if (null === cb || "object" !== typeof cb && "function" !== typeof cb) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof bb ? cb === bb : bb.has(cb)
    }

    function Gb(bb, cb, sb) {
      if (null !== cb && void 0 !== cb) {
        if ("object" !== typeof cb && "function" !== typeof cb) throw new TypeError("Object expected.");
        var kb, Wb;
        if (sb) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          kb = cb[Symbol.asyncDispose]
        }
        if (void 0 === kb) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          kb = cb[Symbol.dispose], sb && (Wb = kb)
        }
        if ("function" !== typeof kb) throw new TypeError("Object not disposable.");
        Wb && (kb = function() {
          try {
            Wb.call(this)
          } catch (bb) {
            return Promise.reject(bb)
          }
        }), bb.stack.push({
          value: cb,
          dispose: kb,
          async: sb
        })
      } else sb && bb.stack.push({
        async: !0
      });
      return cb
    }
    var Kb = "function" === typeof SuppressedError ? SuppressedError : function(bb, cb, sb) {
      var kb = new Error(sb);
      return kb.name = "SuppressedError", kb.error = bb, kb.suppressed = cb, kb
    };

    function Zb(bb) {
      function cb(cb) {
        bb.error = bb.hasError ? new Kb(cb, bb.error, "An error was suppressed during disposal.") : cb, bb.hasError = !0
      }
      var sb, kb = 0;
      return function Wb() {
        for (; sb = bb.stack.pop();) try {
          if (!sb.async && 1 === kb) return kb = 0, bb.stack.push(sb), Promise.resolve().then(Wb);
          if (sb.dispose) {
            var ab = sb.dispose.call(sb.value);
            if (sb.async) return kb |= 2, Promise.resolve(ab).then(Wb, (function(bb) {
              return cb(bb), Wb()
            }))
          } else kb |= 1
        } catch (Tb) {
          cb(Tb)
        }
        if (1 === kb) return bb.hasError ? Promise.reject(bb.error) : Promise.resolve();
        if (bb.hasError) throw bb.error
      }()
    }

    function zb(bb, cb) {
      return "string" === typeof bb && /^\.\.?\//.test(bb) ? bb.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(bb, sb, kb, Wb, ab) {
        return sb ? cb ? ".jsx" : ".js" : !kb || Wb && ab ? kb + Wb + "." + ab.toLowerCase() + "js" : bb
      })) : bb
    }
    const qb = {
      __extends: Wb,
      __assign: ab,
      __rest: Tb,
      __decorate: Ub,
      __param: Ib,
      __esDecorate: Hb,
      __runInitializers: fb,
      __propKey: Mb,
      __setFunctionName: Xb,
      __metadata: nb,
      __awaiter: mb,
      __generator: lb,
      __createBinding: Qb,
      __exportStar: eb,
      __values: Cb,
      __read: Nb,
      __spread: Vb,
      __spreadArrays: Lb,
      __spreadArray: ub,
      __await: Yb,
      __asyncGenerator: hb,
      __asyncDelegator: Jb,
      __asyncValues: gb,
      __makeTemplateObject: Bb,
      __importStar: Pb,
      __importDefault: Db,
      __classPrivateFieldGet: Eb,
      __classPrivateFieldSet: ib,
      __classPrivateFieldIn: Ob,
      __addDisposableResource: Gb,
      __disposeResources: Zb,
      __rewriteRelativeImportExtension: zb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);