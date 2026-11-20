export const id = 182;
export const ids = [182];
export const modules = {
  8752: (bb, ab) => {
    ab.discordURLBuilder = function(bb) {
      var ab;
      const Ub = (null === (ab = null === window || void 0 === window ? void 0 : window.location) || void 0 === ab ? void 0 : ab.hostname) || "localhost",
        Ab = bb.hostname.split("."),
        Mb = !bb.hostname.includes("trycloudflare.com") && !bb.hostname.includes("discordsays.com") && Ab.length > 2 ? `/${Ab[0]}` : "";
      return bb.pathname.startsWith("/.proxy") ? `${bb.protocol}//${Ub}${Mb}${bb.pathname}${bb.search}` : `${bb.protocol}//${Ub}/.proxy/colyseus${Mb}${bb.pathname}${bb.search}`
    }
  },
  8747: (bb, ab, Ub) => {
    var Ab, Mb, Tb, Eb, Yb = Ub(8665),
      Bb = Ub(8749),
      eb = Ub(8721);
    Ab = new WeakMap, Mb = new WeakMap, Tb = new WeakMap, Eb = new WeakMap, ab.Auth = class {
      constructor(bb) {
        this.http = bb, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Ab.set(this, !1), Mb.set(this, void 0), Tb.set(this, void 0), Eb.set(this, eb.createNanoEvents()), Bb.getItem(this.settings.key, (bb => this.token = bb))
      }
      set token(bb) {
        this.http.authToken = bb
      }
      get token() {
        return this.http.authToken
      }
      onChange(bb) {
        const ab = Yb.__classPrivateFieldGet(this, Eb, "f").on("change", bb);
        return Yb.__classPrivateFieldGet(this, Ab, "f") || Yb.__classPrivateFieldSet(this, Mb, new Promise(((bb, ab) => {
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
        })), "f"), Yb.__classPrivateFieldSet(this, Ab, !0, "f"), ab
      }
      getUserData() {
        return Yb.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(bb, ab, Ub) {
        return Yb.__awaiter(this, void 0, void 0, (function*() {
          const Ab = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: bb,
              password: ab,
              options: Ub
            }
          })).data;
          return this.emitChange(Ab), Ab
        }))
      }
      signInWithEmailAndPassword(bb, ab) {
        return Yb.__awaiter(this, void 0, void 0, (function*() {
          const Ub = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: bb,
              password: ab
            }
          })).data;
          return this.emitChange(Ub), Ub
        }))
      }
      signInAnonymously(bb) {
        return Yb.__awaiter(this, void 0, void 0, (function*() {
          const ab = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: bb
            }
          })).data;
          return this.emitChange(ab), ab
        }))
      }
      sendPasswordResetEmail(bb) {
        return Yb.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: bb
            }
          })).data
        }))
      }
      signInWithProvider(bb) {
        return Yb.__awaiter(this, arguments, void 0, (function*(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((Ub, Ab) => {
            const Mb = ab.width || 480,
              Eb = ab.height || 768,
              Bb = this.token ? `?token=${this.token}` : "",
              eb = `Login with ${bb[0].toUpperCase()+bb.substring(1)}`,
              vb = this.http.client.getHttpEndpoint(`${ab.prefix||`${this.settings.path}/provider`}/${bb}${Bb}`),
              Lb = screen.width / 2 - Mb / 2,
              Pb = screen.height / 2 - Eb / 2;
            Yb.__classPrivateFieldSet(this, Tb, window.open(vb, eb, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Mb + ", height=" + Eb + ", top=" + Pb + ", left=" + Lb), "f");
            const Xb = bb => {
                void 0 === bb.data.user && void 0 === bb.data.token || (clearInterval(jb), Yb.__classPrivateFieldGet(this, Tb, "f").close(), Yb.__classPrivateFieldSet(this, Tb, void 0, "f"), window.removeEventListener("message", Xb), void 0 !== bb.data.error ? Ab(bb.data.error) : (Ub(bb.data), this.emitChange(bb.data)))
              },
              jb = setInterval((() => {
                Yb.__classPrivateFieldGet(this, Tb, "f") && !Yb.__classPrivateFieldGet(this, Tb, "f").closed || (Yb.__classPrivateFieldSet(this, Tb, void 0, "f"), Ab("xU"), window.removeEventListener("message", Xb))
              }), 200);
            window.addEventListener("message", Xb)
          }))
        }))
      }
      signOut() {
        return Yb.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(bb) {
        void 0 !== bb.token && (this.token = bb.token, null === bb.token ? Bb.removeItem(this.settings.key) : Bb.setItem(this.settings.key, bb.token)), Yb.__classPrivateFieldGet(this, Eb, "f").emit("change", bb)
      }
    }
  },
  8663: (bb, ab, Ub) => {
    var Ab, Mb = Ub(8665),
      Tb = Ub(8670),
      Eb = Ub(8678),
      Yb = Ub(8740),
      Bb = Ub(8747),
      eb = Ub(8752);
    class vb extends Error {
      constructor(bb, ab) {
        super(bb), this.code = ab, this.name = "MatchMakeError", Object.setPrototypeOf(this, vb.prototype)
      }
    }
    const Lb = "undefined" !== typeof window && "undefined" !== typeof(null === (Ab = null === window || void 0 === window ? void 0 : window.location) || void 0 === Ab ? void 0 : Ab.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Pb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lb,
          ab = arguments.length > 1 ? arguments[1] : void 0;
        var Ub, Ab;
        if ("string" === typeof bb) {
          const ab = bb.startsWith("/") ? new URL(bb, Lb) : new URL(bb),
            Ub = "https:" === ab.protocol || "wss:" === ab.protocol,
            Ab = Number(ab.port || (Ub ? 443 : 80));
          this.settings = {
            hostname: ab.hostname,
            pathname: ab.pathname,
            port: Ab,
            secure: Ub,
            searchParams: ab.searchParams.toString() || void 0
          }
        } else void 0 === bb.port && (bb.port = bb.secure ? 443 : 80), void 0 === bb.pathname && (bb.pathname = ""), this.settings = bb;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Yb.HTTP(this, (null === ab || void 0 === ab ? void 0 : ab.headers) || {}), this.auth = new Bb.Auth(this.http), this.urlBuilder = null === ab || void 0 === ab ? void 0 : ab.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Ab = null === (Ub = null === window || void 0 === window ? void 0 : window.location) || void 0 === Ub ? void 0 : Ub.hostname) || void 0 === Ab ? void 0 : Ab.includes("discordsays.com")) && (this.urlBuilder = eb.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(bb) {
        return Mb.__awaiter(this, arguments, void 0, (function*(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Ub = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", bb, ab, Ub)
        }))
      }
      create(bb) {
        return Mb.__awaiter(this, arguments, void 0, (function*(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Ub = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", bb, ab, Ub)
        }))
      }
      join(bb) {
        return Mb.__awaiter(this, arguments, void 0, (function*(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Ub = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", bb, ab, Ub)
        }))
      }
      joinById(bb) {
        return Mb.__awaiter(this, arguments, void 0, (function*(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Ub = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", bb, ab, Ub)
        }))
      }
      reconnect(bb, ab) {
        return Mb.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof bb && "string" === typeof ab) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [Ub, Ab] = bb.split(":");
          if (!Ub || !Ab) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", Ub, {
            reconnectionToken: Ab
          }, ab)
        }))
      }
      consumeSeatReservation(bb, ab, Ub) {
        return Mb.__awaiter(this, void 0, void 0, (function*() {
          const Ab = this.createRoom(bb.room.name, ab);
          Ab.roomId = bb.room.roomId, Ab.sessionId = bb.sessionId;
          const Eb = {
            sessionId: Ab.sessionId
          };
          bb.reconnectionToken && (Eb.reconnectionToken = bb.reconnectionToken);
          const Yb = Ub || Ab;
          return Ab.connect(this.buildEndpoint(bb.room, Eb, bb.protocol), bb.devMode && (() => Mb.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Ab.roomId}'...`);
            let Ub = 0;
            const Tb = () => Mb.__awaiter(this, void 0, void 0, (function*() {
              Ub++;
              try {
                yield this.consumeSeatReservation(bb, ab, Yb), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Ab.roomId}'`)
              } catch (Mb) {
                Ub < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${Ub} out of 8)`), setTimeout(Tb, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Tb, 2e3)
          }))), Yb, bb, this.http.headers), new Promise(((bb, ab) => {
            const Ub = (bb, Ub) => ab(new Tb.ServerError(bb, Ub));
            Yb.onError.once(Ub), Yb.onJoin.once((() => {
              Yb.onError.remove(Ub), setTimeout((() => {
                try {
                  const bb = [141, 56, 86, 101, 253, 220, 201, 166, 141, 79, 179, 74, 197, 208, 102, 129, 163, 98, 16, 23];
                  bb && Yb.Am(128, new Uint8Array(bb))
                } catch {}
              }), 3e3), bb(Yb)
            }))
          }))
        }))
      }
      createMatchMakeRequest(bb, ab) {
        return Mb.__awaiter(this, arguments, void 0, (function*(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Ab = arguments.length > 3 ? arguments[3] : void 0,
            Mb = arguments.length > 4 ? arguments[4] : void 0;
          const Tb = (yield this.http.post(`matchmake/${bb}/${ab}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Ub)
          })).data;
          if (Tb.error) throw new vb(Tb.error, Tb.code);
          return "reconnect" === bb && (Tb.reconnectionToken = Ub.reconnectionToken), yield this.consumeSeatReservation(Tb, Ab, Mb)
        }))
      }
      createRoom(bb, ab) {
        return new Eb.IL(bb, ab)
      }
      buildEndpoint(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Ab = this.settings.searchParams || "";
        this.http.authToken && (ab._authToken = this.http.authToken);
        for (const Eb in ab) ab.hasOwnProperty(Eb) && (Ab += (Ab ? "&" : "") + `${Eb}=${ab[Eb]}`);
        "h3" === Ub && (Ub = "http");
        let Mb = this.settings.secure ? `${Ub}s://` : `${Ub}://`;
        bb.publicAddress ? Mb += `${bb.publicAddress}` : Mb += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Tb = `${Mb}/${bb.processId}/${bb.roomId}?${Ab}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Tb)) : Tb
      }
      getHttpEndpoint() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const ab = bb.startsWith("/") ? bb : `/${bb}`;
        let Ub = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${ab}`;
        return this.settings.searchParams && (Ub += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(Ub)) : Ub
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Pb.VERSION = "0.16.22", ab.Client = Pb, ab.MatchMakeError = vb
  },
  8682: (bb, ab, Ub) => {
    var Ab = Ub(8687),
      Mb = Ub(8697);
    ab.Connection = class {
      constructor(bb) {
        if (this.events = {}, "h3" === bb) this.transport = new Ab.H3TransportTransport(this.events);
        else this.transport = new Mb.WebSocketTransport(this.events)
      }
      connect(bb, ab) {
        this.transport.connect.call(this.transport, bb, ab)
      }
      send(bb) {
        this.transport.send(bb)
      }
      sendUnreliable(bb) {
        this.transport.sendUnreliable(bb)
      }
      close(bb, ab) {
        this.transport.close(bb, ab)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8740: (bb, ab, Ub) => {
    var Ab = Ub(8670);

    function Mb(bb) {
      var ab = Object.create(null);
      return bb && Object.keys(bb).forEach((function(Ub) {
        if ("default" !== Ub) {
          var Ab = Object.getOwnPropertyDescriptor(bb, Ub);
          Object.defineProperty(ab, Ub, Ab.get ? Ab : {
            enumerable: !0,
            get: function() {
              return bb[Ub]
            }
          })
        }
      })), ab.default = bb, Object.freeze(ab)
    }
    var Tb = Mb(Ub(8745));
    ab.HTTP = class {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = bb, this.headers = ab
      }
      get(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", bb, ab)
      }
      post(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", bb, ab)
      }
      del(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", bb, ab)
      }
      put(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", bb, ab)
      }
      request(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Tb[bb](this.client.getHttpEndpoint(ab), this.getOptions(Ub)).catch((bb => {
          var ab;
          if (bb.aborted) throw new Ab.AbortError("Request aborted");
          const Ub = bb.statusCode,
            Mb = (null === (ab = bb.data) || void 0 === ab ? void 0 : ab.error) || bb.statusMessage || bb.message;
          if (!Ub && !Mb) throw bb;
          throw new Ab.ServerError(Ub, Mb)
        }))
      }
      getOptions(bb) {
        return bb.headers = Object.assign({}, this.headers, bb.headers), this.authToken && (bb.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (bb.withCredentials = !0), bb
      }
    }
  },
  8706: (bb, ab) => {
    var Ub, Ab;
    ab.Protocol = void 0, (Ub = ab.Protocol || (ab.Protocol = {}))[Ub.HANDSHAKE = 9] = "HANDSHAKE", Ub[Ub.JOIN_ROOM = 10] = "JOIN_ROOM", Ub[Ub.ERROR = 11] = "ERROR", Ub[Ub.LEAVE_ROOM = 12] = "LEAVE_ROOM", Ub[Ub.ROOM_DATA = 13] = "ROOM_DATA", Ub[Ub.ROOM_STATE = 14] = "ROOM_STATE", Ub[Ub.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", Ub[Ub.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", Ub[Ub.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", ab.ErrorCode = void 0, (Ab = ab.ErrorCode || (ab.ErrorCode = {}))[Ab.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Ab[Ab.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Ab[Ab.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Ab[Ab.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Ab[Ab.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Ab[Ab.AUTH_FAILED = 4215] = "AUTH_FAILED", Ab[Ab.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8678: (bb, ab, Ub) => {
    var Ab = Ub(8682),
      Mb = Ub(8706),
      Tb = Ub(8713),
      Eb = Ub(8721),
      Yb = Ub(8725),
      Bb = Ub(8695),
      eb = Ub(8727),
      vb = Ub(8670),
      Lb = Ub(8733);
    class Pb {
      constructor(bb, ab) {
        this.onStateChange = Yb.createSignal(), this.onError = Yb.createSignal(), this.xZ = Yb.createSignal(), this.onJoin = Yb.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Eb.createNanoEvents(), this.roomId = null, this.name = bb, this.packr = new Lb.Packr, this.packr.encode(void 0), ab && (this.Vk = new(Tb.getSerializer("schema")), this.rootSchema = ab, this.Vk.state = new ab), this.onError(((bb, ab) => {
          var Ub;
          return null === (Ub = console.warn) || void 0 === Ub ? void 0 : Ub.call(console, `colyseus.js - onError => (${bb}) ${ab}`)
        })), this.xZ((() => this.Fk()))
      }
      connect(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Mb = arguments.length > 3 ? arguments[3] : void 0,
          Tb = arguments.length > 4 ? arguments[4] : void 0;
        const Eb = new Ab.Connection(Mb.protocol);
        if (Ub.connection = Eb, Eb.events.onmessage = Pb.prototype.onMessageCallback.bind(Ub), Eb.events.onclose = function(bb) {
            var Ab;
            if (!Ub.hasJoined) return null === (Ab = console.warn) || void 0 === Ab || Ab.call(console, `Room connection was closed unexpectedly (${bb.code}): ${bb.reason}`), void Ub.onError.invoke(bb.code, bb.reason);
            bb.code === vb.CloseCode.DEVMODE_RESTART && ab ? ab() : (Ub.xZ.invoke(bb.code, bb.reason), Ub.destroy())
          }, Eb.events.onerror = function(bb) {
            var ab;
            null === (ab = console.warn) || void 0 === ab || ab.call(console, `Room, onError (${bb.code}): ${bb.reason}`), Ub.onError.invoke(bb.code, bb.reason)
          }, "h3" === Mb.protocol) {
          const ab = new URL(bb);
          Eb.connect(ab.origin, Mb)
        } else Eb.connect(bb, Tb)
      }
      leave() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((ab => {
          this.xZ((bb => ab(bb))), this.connection ? bb ? (this.packr.buffer[0] = Mb.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.xZ.invoke(vb.CloseCode.CONSENTED)
        }))
      }
      ZZ(bb, ab) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(bb), ab)
      }
      send(bb, ab) {
        const Ub = {
          offset: 1
        };
        this.packr.buffer[0] = Mb.Protocol.ROOM_DATA, "string" === typeof bb ? Bb.encode.string(this.packr.buffer, bb, Ub) : Bb.encode.number(this.packr.buffer, bb, Ub), this.packr.position = 0;
        const Ab = void 0 !== ab ? this.packr.pack(ab, 2048 + Ub.offset) : this.packr.buffer.subarray(0, Ub.offset);
        this.connection.send(Ab)
      }
      sendUnreliable(bb, ab) {
        const Ub = {
          offset: 1
        };
        this.packr.buffer[0] = Mb.Protocol.ROOM_DATA, "string" === typeof bb ? Bb.encode.string(this.packr.buffer, bb, Ub) : Bb.encode.number(this.packr.buffer, bb, Ub), this.packr.position = 0;
        const Ab = void 0 !== ab ? this.packr.pack(ab, 2048 + Ub.offset) : this.packr.buffer.subarray(0, Ub.offset);
        this.connection.sendUnreliable(Ab)
      }
      Am(bb, ab) {
        const Ub = {
          offset: 1
        };
        if (this.packr.buffer[0] = Mb.Protocol.ROOM_DATA_BYTES, "string" === typeof bb ? Bb.encode.string(this.packr.buffer, bb, Ub) : Bb.encode.number(this.packr.buffer, bb, Ub), ab.byteLength + Ub.offset > this.packr.buffer.byteLength) {
          const bb = new Uint8Array(Ub.offset + ab.byteLength);
          bb.set(this.packr.buffer), this.packr.useBuffer(bb)
        }
        this.packr.buffer.set(ab, Ub.offset), this.connection.send(this.packr.buffer.subarray(0, Ub.offset + ab.byteLength))
      }
      get state() {
        return this.Vk.getState()
      }
      Fk() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.xZ.clear(), this.onMessageHandlers.events = {}, this.Vk instanceof eb.ZN && (this.Vk.rX.root.callbacks = {})
      }
      onMessageCallback(bb) {
        const ab = new Uint8Array(bb.data),
          Ub = {
            offset: 1
          },
          Ab = ab[0];
        if (Ab === Mb.Protocol.JOIN_ROOM) {
          const bb = Bb.decode.utf8Read(ab, Ub, ab[Ub.offset++]);
          if (this.serializerId = Bb.decode.utf8Read(ab, Ub, ab[Ub.offset++]), !this.Vk) {
            const bb = Tb.getSerializer(this.serializerId);
            this.Vk = new bb
          }
          ab.byteLength > Ub.offset && this.Vk.handshake && this.Vk.handshake(ab, Ub), this.reconnectionToken = `${this.roomId}:${bb}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Mb.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Ab === Mb.Protocol.ERROR) {
          const bb = Bb.decode.number(ab, Ub),
            Ab = Bb.decode.string(ab, Ub);
          this.onError.invoke(bb, Ab)
        } else if (Ab === Mb.Protocol.LEAVE_ROOM) this.leave();
        else if (Ab === Mb.Protocol.ROOM_STATE) this.Vk.setState(ab, Ub), this.onStateChange.invoke(this.Vk.getState());
        else if (Ab === Mb.Protocol.ROOM_STATE_PATCH) this.Vk.patch(ab, Ub), this.onStateChange.invoke(this.Vk.getState());
        else if (Ab === Mb.Protocol.ROOM_DATA) {
          const bb = Bb.decode.stringCheck(ab, Ub) ? Bb.decode.string(ab, Ub) : Bb.decode.number(ab, Ub),
            Ab = ab.byteLength > Ub.offset ? Lb.unpack(ab, {
              start: Ub.offset
            }) : void 0;
          this.dispatchMessage(bb, Ab)
        } else if (Ab === Mb.Protocol.ROOM_DATA_BYTES) {
          const bb = Bb.decode.stringCheck(ab, Ub) ? Bb.decode.string(ab, Ub) : Bb.decode.number(ab, Ub);
          this.dispatchMessage(bb, ab.subarray(Ub.offset))
        }
      }
      dispatchMessage(bb, ab) {
        var Ub;
        const Ab = this.getMessageHandlerKey(bb);
        this.onMessageHandlers.events[Ab] ? this.onMessageHandlers.emit(Ab, ab) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", bb, ab) : null === (Ub = console.warn) || void 0 === Ub || Ub.call(console, `colyseus.js: onMessage() not registered for type '${bb}'.`)
      }
      destroy() {
        this.Vk && this.Vk.teardown()
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
    ab.IL = Pb
  },
  8749: (bb, ab, Ub) => {
    var Ab = Ub(8665);
    let Mb;

    function Tb() {
      if (!Mb) try {
        Mb = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (bb) {}
      return Mb || "undefined" === typeof globalThis.indexedDB || (Mb = new Eb), Mb || (Mb = {
        cache: {},
        setItem: function(bb, ab) {
          this.cache[bb] = ab
        },
        getItem: function(bb) {
          this.cache[bb]
        },
        removeItem: function(bb) {
          delete this.cache[bb]
        }
      }), Mb
    }
    class Eb {
      constructor() {
        this.dbPromise = new Promise((bb => {
          const ab = indexedDB.open("_colyseus_storage", 1);
          ab.onupgradeneeded = () => ab.result.createObjectStore("store"), ab.onsuccess = () => bb(ab.result)
        }))
      }
      tx(bb, ab) {
        return Ab.__awaiter(this, void 0, void 0, (function*() {
          const Ub = (yield this.dbPromise).transaction("store", bb).objectStore("store");
          return ab(Ub)
        }))
      }
      setItem(bb, ab) {
        return this.tx("readwrite", (Ub => Ub.put(ab, bb))).then()
      }
      getItem(bb) {
        return Ab.__awaiter(this, void 0, void 0, (function*() {
          const ab = yield this.tx("readonly", (ab => ab.get(bb)));
          return new Promise((bb => {
            ab.onsuccess = () => bb(ab.result)
          }))
        }))
      }
      removeItem(bb) {
        return this.tx("readwrite", (ab => ab.delete(bb))).then()
      }
    }
    ab.getItem = function(bb, ab) {
      const Ub = Tb().getItem(bb);
      "undefined" !== typeof Promise && Ub instanceof Promise ? Ub.then((bb => ab(bb))) : ab(Ub)
    }, ab.removeItem = function(bb) {
      Tb().removeItem(bb)
    }, ab.setItem = function(bb, ab) {
      Tb().setItem(bb, ab)
    }
  },
  8721: (bb, ab) => {
    ab.createNanoEvents = () => ({
      emit(bb) {
        let ab = this.events[bb] || [];
        for (var Ub = arguments.length, Ab = new Array(Ub > 1 ? Ub - 1 : 0), Mb = 1; Mb < Ub; Mb++) Ab[Mb - 1] = arguments[Mb];
        for (let Tb = 0, Eb = ab.length; Tb < Eb; Tb++) ab[Tb](...Ab)
      },
      events: {},
      on(bb, ab) {
        var Ub;
        return (null === (Ub = this.events[bb]) || void 0 === Ub ? void 0 : Ub.push(ab)) || (this.events[bb] = [ab]), () => {
          var Ub;
          this.events[bb] = null === (Ub = this.events[bb]) || void 0 === Ub ? void 0 : Ub.filter((bb => ab !== bb))
        }
      }
    })
  },
  8725: (bb, ab) => {
    class Ub {
      constructor() {
        this.handlers = []
      }
      register(bb) {
        return this.handlers.push(bb), this
      }
      invoke() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        this.handlers.forEach((bb => bb.apply(this, ab)))
      }
      invokeAsync() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        return Promise.all(this.handlers.map((bb => bb.apply(this, ab))))
      }
      remove(bb) {
        const ab = this.handlers.indexOf(bb);
        this.handlers[ab] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    ab.EventEmitter = Ub, ab.createSignal = function() {
      const bb = new Ub;

      function ab(ab) {
        return bb.register(ab, null === this)
      }
      return ab.once = ab => {
        const Ub = function() {
          for (var Ab = arguments.length, Mb = new Array(Ab), Tb = 0; Tb < Ab; Tb++) Mb[Tb] = arguments[Tb];
          ab.apply(this, Mb), bb.remove(Ub)
        };
        bb.register(Ub)
      }, ab.remove = ab => bb.remove(ab), ab.invoke = function() {
        return bb.invoke(...arguments)
      }, ab.invokeAsync = function() {
        return bb.invokeAsync(...arguments)
      }, ab.clear = () => bb.clear(), ab
    }
  },
  8670: (bb, ab) => {
    var Ub;
    ab.CloseCode = void 0, (Ub = ab.CloseCode || (ab.CloseCode = {}))[Ub.CONSENTED = 4e3] = "CONSENTED", Ub[Ub.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Ab extends Error {
      constructor(bb, ab) {
        super(ab), this.name = "ServerError", this.code = bb
      }
    }
    class Mb extends Error {
      constructor(bb) {
        super(bb), this.name = "AbortError"
      }
    }
    ab.AbortError = Mb, ab.ServerError = Ab
  },
  8650: (bb, ab, Ub) => {
    Ub(8659);
    var Ab = Ub(8663),
      Mb = Ub(8706),
      Tb = Ub(8678),
      Eb = Ub(8747),
      Yb = Ub(8670),
      Bb = Ub(8727),
      eb = Ub(8760),
      vb = Ub(8713);
    vb.registerSerializer("schema", Bb.ZN), vb.registerSerializer("none", eb.NoneSerializer), ab.Client = Ab.Client, ab.MatchMakeError = Ab.MatchMakeError, Object.defineProperty(ab, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Mb.ErrorCode
      }
    }), Object.defineProperty(ab, "Protocol", {
      enumerable: !0,
      get: function() {
        return Mb.Protocol
      }
    }), ab.IL = Tb.IL, ab.Auth = Eb.Auth, ab.ServerError = Yb.ServerError, ab.ZN = Bb.ZN, ab.getStateCallbacks = Bb.getStateCallbacks, ab.registerSerializer = vb.registerSerializer
  },
  8659: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = bb => null !== bb && "object" === typeof bb && bb.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8760: (bb, ab) => {
    ab.NoneSerializer = class {
      setState(bb) {}
      getState() {
        return null
      }
      patch(bb) {}
      teardown() {}
      handshake(bb) {}
    }
  },
  8727: (bb, ab, Ub) => {
    var Ab = Ub(8695);
    ab.ZN = class {
      setState(bb, ab) {
        this.rX.decode(bb, ab)
      }
      getState() {
        return this.state
      }
      patch(bb, ab) {
        return this.rX.decode(bb, ab)
      }
      teardown() {
        this.rX.root.clearRefs()
      }
      handshake(bb, ab) {
        this.state ? (Ab.Reflection.decode(bb, ab), this.rX = new Ab.Decoder(this.state)) : (this.rX = Ab.Reflection.decode(bb, ab), this.state = this.rX.state)
      }
    }, ab.getStateCallbacks = function(bb) {
      try {
        return Ab.getDecoderStateCallbacks(bb.Vk.rX)
      } catch (ab) {
        return
      }
    }
  },
  8713: (bb, ab) => {
    const Ub = {};
    ab.getSerializer = function(bb) {
      const ab = Ub[bb];
      if (!ab) throw new Error("missing serializer: " + bb);
      return ab
    }, ab.registerSerializer = function(bb, ab) {
      Ub[bb] = ab
    }
  },
  8687: (bb, ab, Ub) => {
    var Ab = Ub(8665),
      Mb = Ub(8695);
    ab.H3TransportTransport = class {
      constructor(bb) {
        this.events = bb, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ub = ab.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(ab.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(bb, Ub), this.wt.ready.then((bb => {
          console.log("WebTransport ready!", bb), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((bb => {
            this.reader = bb.value.readable.getReader(), this.writer = bb.value.writable.getWriter(), this.sendSeatReservation(ab.room.roomId, ab.sessionId, ab.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const ab = Mb.encode.number(this.lengthPrefixBuffer, bb.length, {
            offset: 0
          }),
          Ub = new Uint8Array(ab + bb.length);
        Ub.set(this.lengthPrefixBuffer.subarray(0, ab), 0), Ub.set(bb, ab), this.writer.write(Ub)
      }
      sendUnreliable(bb) {
        const ab = Mb.encode.number(this.lengthPrefixBuffer, bb.length, {
            offset: 0
          }),
          Ub = new Uint8Array(ab + bb.length);
        Ub.set(this.lengthPrefixBuffer.subarray(0, ab), 0), Ub.set(bb, ab), this.unreliableWriter.write(Ub)
      }
      close(bb, ab) {
        try {
          this.wt.close({
            closeCode: bb,
            reason: ab
          })
        } catch (Ub) {
          console.error(Ub)
        }
      }
      readIncomingData() {
        return Ab.__awaiter(this, void 0, void 0, (function*() {
          let bb;
          for (; this.isOpen;) {
            try {
              bb = yield this.reader.read();
              const ab = bb.value,
                Ub = {
                  offset: 0
                };
              do {
                const bb = Mb.decode.number(ab, Ub);
                this.events.onmessage({
                  data: ab.subarray(Ub.offset, Ub.offset + bb)
                }), Ub.offset += bb
              } while (Ub.offset < ab.length)
            } catch (ab) {
              -1 === ab.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", ab);
              break
            }
            if (bb.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Ab.__awaiter(this, void 0, void 0, (function*() {
          let bb;
          for (; this.isOpen;) {
            try {
              bb = yield this.unreliableReader.read();
              const ab = bb.value,
                Ub = {
                  offset: 0
                };
              do {
                const bb = Mb.decode.number(ab, Ub);
                this.events.onmessage({
                  data: ab.subarray(Ub.offset, Ub.offset + bb)
                }), Ub.offset += bb
              } while (Ub.offset < ab.length)
            } catch (ab) {
              -1 === ab.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", ab);
              break
            }
            if (bb.done) break
          }
        }))
      }
      sendSeatReservation(bb, ab, Ub) {
        const Ab = {
            offset: 0
          },
          Tb = [];
        Mb.encode.string(Tb, bb, Ab), Mb.encode.string(Tb, ab, Ab), Ub && Mb.encode.string(Tb, Ub, Ab), this.writer.write(new Uint8Array(Tb).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8697: (bb, ab, Ub) => {
    var Ab = Ub(8701);
    const Mb = globalThis.WebSocket || Ab;
    ab.WebSocketTransport = class {
      constructor(bb) {
        this.events = bb
      }
      send(bb) {
        this.ws.send(bb)
      }
      sendUnreliable(bb) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(bb, ab) {
        try {
          this.ws = new Mb(bb, {
            headers: ab,
            protocols: this.protocols
          })
        } catch (Ub) {
          this.ws = new Mb(bb, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(bb, ab) {
        this.ws.close(bb, ab)
      }
      get isOpen() {
        return this.ws.readyState === Mb.OPEN
      }
    }
  },
  8701: bb => {
    bb.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8745: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      ab.headers = bb.headers || {}, ab.statusMessage = bb.statusText, ab.statusCode = bb.status, ab.data = bb.response
    }

    function Mb(bb, ab, Ub) {
      return new Promise((function(Mb, Tb) {
        Ub = Ub || {};
        var Eb, Yb, Bb, eb = new XMLHttpRequest,
          vb = Ub.body,
          Lb = Ub.headers || {};
        for (Eb in Ub.timeout && (eb.timeout = Ub.timeout), eb.ontimeout = eb.onerror = function(bb) {
            bb.timeout = "timeout" == bb.type, Tb(bb)
          }, eb.onabort = function(bb) {
            bb.aborted = !0, Tb(bb)
          }, eb.open(bb, ab.href || ab), eb.onload = function() {
            for (Bb = eb.getAllResponseHeaders().trim().split(/[\r\n]+/), Ab(eb, eb); Yb = Bb.shift();) Yb = Yb.split(": "), eb.headers[Yb.shift().toLowerCase()] = Yb.join(": ");
            if ((Yb = eb.headers["content-type"]) && ~Yb.indexOf("application/json")) try {
              eb.data = JSON.parse(eb.data, Ub.reviver)
            } catch (bb) {
              return Ab(eb, bb), Tb(bb)
            }(eb.status >= 400 ? Tb : Mb)(eb)
          }, typeof FormData < "u" && vb instanceof FormData || vb && "object" == typeof vb && (Lb["content-type"] = "application/json", vb = JSON.stringify(vb)), eb.withCredentials = !!Ub.withCredentials, Lb) eb.setRequestHeader(Eb, Lb[Eb]);
        eb.send(vb), Ub.signal && Ub.signal.addEventListener("abort", (function() {
          eb.abort()
        }))
      }))
    }
    Ub.r(ab), Ub.d(ab, {
      del: () => Bb,
      get: () => Tb,
      patch: () => Yb,
      post: () => Eb,
      put: () => eb,
      send: () => Mb
    });
    var Tb = Mb.bind(Mb, "GET"),
      Eb = Mb.bind(Mb, "POST"),
      Yb = Mb.bind(Mb, "PATCH"),
      Bb = Mb.bind(Mb, "DELETE"),
      eb = Mb.bind(Mb, "PUT")
  },
  8733: (bb, ab, Ub) => {
    var Ab, Mb, Tb;
    Ub.r(ab), Ub.d(ab, {
      ALWAYS: () => Ca,
      C1: () => xb,
      DECIMAL_FIT: () => Oa,
      DECIMAL_ROUND: () => Va,
      Decoder: () => Ba,
      Encoder: () => sa,
      FLOAT32_OPTIONS: () => Xa,
      NEVER: () => ga,
      Packr: () => Ga,
      RESERVE_START_SPACE: () => na,
      RESET_BUFFER_MODE: () => Ja,
      REUSE_BUFFER_MODE: () => ca,
      Unpackr: () => Wb,
      addExtension: () => Ka,
      clearSource: () => Ea,
      decode: () => Pa,
      decodeIter: () => Sa,
      encode: () => wa,
      encodeIter: () => bU,
      isNativeAccelerationEnabled: () => ob,
      mapsAsObjects: () => UU,
      pack: () => ta,
      roundFloat32: () => Da,
      unpack: () => va,
      unpackMultiple: () => La,
      useRecords: () => aU
    });
    try {
      Ab = new TextDecoder
    } catch (AU) {}
    var Eb = 0;
    const Yb = [];
    var Bb, eb, vb, Lb, Pb, Xb = Yb,
      jb = 0,
      Rb = {},
      kb = 0,
      yb = 0,
      Zb = [],
      Db = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class zb {}
    const xb = new zb;
    xb.name = "MessagePack 0xC1";
    var ib, fb, mb, pb = !1,
      Nb = 2;
    try {
      new Function("")
    } catch (AU) {
      Nb = 1 / 0
    }
    class Wb {
      constructor(bb) {
        bb && (!1 === bb.useRecords && void 0 === bb.mapsAsObjects && (bb.mapsAsObjects = !0), bb.sequential && !1 !== bb.trusted && (bb.trusted = !0, bb.structures || 0 == bb.useRecords || (bb.structures = [], bb.maxSharedStructures || (bb.maxSharedStructures = 0))), bb.structures ? bb.structures.sharedLength = bb.structures.length : bb.getStructures && ((bb.structures = []).uninitialized = !0, bb.structures.sharedLength = 0), bb.int64AsNumber && (bb.int64AsType = "number")), Object.assign(this, bb)
      }
      unpack(bb, ab) {
        if (Mb) return Ta((() => (Ea(), this ? this.unpack(bb, ab) : Wb.prototype.unpack.call(Db, bb, ab))));
        bb.buffer || bb.constructor !== ArrayBuffer || (bb = "undefined" !== typeof Buffer ? Buffer.from(bb) : new Uint8Array(bb)), "object" === typeof ab ? (Tb = ab.end || bb.length, Eb = ab.start || 0) : (Eb = 0, Tb = ab > -1 ? ab : bb.length), jb = 0, yb = 0, eb = null, Xb = Yb, vb = null, Mb = bb;
        try {
          Pb = bb.dataView || (bb.dataView = new DataView(bb.buffer, bb.byteOffset, bb.byteLength))
        } catch (AU) {
          if (Mb = null, bb instanceof Uint8Array) throw AU;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (bb && "object" == typeof bb ? bb.constructor.name : typeof bb))
        }
        if (this instanceof Wb) {
          if (Rb = this, this.structures) return Bb = this.structures, Hb(ab);
          (!Bb || Bb.length > 0) && (Bb = [])
        } else Rb = Db, (!Bb || Bb.length > 0) && (Bb = []);
        return Hb(ab)
      }
      unpackMultiple(bb, ab) {
        let Ub, Ab = 0;
        try {
          pb = !0;
          let Mb = bb.length,
            Tb = this ? this.unpack(bb, Mb) : ea.unpack(bb, Mb);
          if (!ab) {
            for (Ub = [Tb]; Eb < Mb;) Ab = Eb, Ub.push(Hb());
            return Ub
          }
          if (!1 === ab(Tb, Ab, Eb)) return;
          for (; Eb < Mb;)
            if (Ab = Eb, !1 === ab(Hb(), Ab, Eb)) return
        } catch (AU) {
          throw AU.lastPosition = Ab, AU.values = Ub, AU
        } finally {
          pb = !1, Ea()
        }
      }
      _mergeStructures(bb, ab) {
        fb && (bb = fb.call(this, bb)), bb = bb || [], Object.isFrozen(bb) && (bb = bb.map((bb => bb.slice(0))));
        for (let Ub = 0, Ab = bb.length; Ub < Ab; Ub++) {
          let ab = bb[Ub];
          ab && (ab.isShared = !0, Ub >= 32 && (ab.highByte = Ub - 32 >> 5))
        }
        bb.sharedLength = bb.length;
        for (let Ub in ab || [])
          if (Ub >= 0) {
            let Ab = bb[Ub],
              Mb = ab[Ub];
            Mb && (Ab && ((bb.restoreStructures || (bb.restoreStructures = []))[Ub] = Ab), bb[Ub] = Mb)
          } return this.structures = bb
      }
      decode(bb, ab) {
        return this.unpack(bb, ab)
      }
    }

    function Hb(bb) {
      try {
        if (!Rb.trusted && !pb) {
          let bb = Bb.sharedLength || 0;
          bb < Bb.length && (Bb.length = bb)
        }
        let ab;
        if (Rb.randomAccessStructure && Mb[Eb] < 64 && Mb[Eb] >= 32 && ib ? (ab = ib(Mb, Eb, Tb, Rb), Mb = null, bb && bb.lazy || !ab || (ab = ab.toJSON()), Eb = Tb) : ab = db(), vb && (Eb = vb.postBundlePosition, vb = null), pb && (Bb.restoreStructures = null), Eb == Tb) Bb && Bb.restoreStructures && Ib(), Bb = null, Mb = null, Lb && (Lb = null);
        else {
          if (Eb > Tb) throw new Error("Unexpected end of MessagePack data");
          if (!pb) {
            let bb;
            try {
              bb = JSON.stringify(ab, ((bb, ab) => "bigint" === typeof ab ? `${ab}n` : ab)).slice(0, 100)
            } catch (AU) {
              bb = "(JSON view not available " + AU + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + bb)
          }
        }
        return ab
      } catch (AU) {
        throw Bb && Bb.restoreStructures && Ib(), Ea(), (AU instanceof RangeError || AU.message.startsWith("Unexpected end of buffer") || Eb > Tb) && (AU.incomplete = !0), AU
      }
    }

    function Ib() {
      for (let bb in Bb.restoreStructures) Bb[bb] = Bb.restoreStructures[bb];
      Bb.restoreStructures = null
    }

    function db() {
      let bb = Mb[Eb++];
      if (bb < 160) {
        if (bb < 128) {
          if (bb < 64) return bb;
          {
            let ab = Bb[63 & bb] || Rb.getStructures && Qb()[63 & bb];
            return ab ? (ab.read || (ab.read = hb(ab, 63 & bb)), ab.read()) : bb
          }
        }
        if (bb < 144) {
          if (bb -= 128, Rb.mapsAsObjects) {
            let ab = {};
            for (let Ub = 0; Ub < bb; Ub++) {
              let bb = nb();
              "__proto__" === bb && (bb = "__proto_"), ab[bb] = db()
            }
            return ab
          } {
            let ab = new Map;
            for (let Ub = 0; Ub < bb; Ub++) ab.set(db(), db());
            return ab
          }
        } {
          bb -= 144;
          let ab = new Array(bb);
          for (let Ub = 0; Ub < bb; Ub++) ab[Ub] = db();
          return Rb.freezeData ? Object.freeze(ab) : ab
        }
      }
      if (bb < 192) {
        let ab = bb - 160;
        if (yb >= Eb) return eb.slice(Eb - kb, (Eb += ab) - kb);
        if (0 == yb && Tb < 140) {
          let bb = ab < 16 ? Cb(ab) : gb(ab);
          if (null != bb) return bb
        }
        return qb(ab)
      } {
        let ab;
        switch (bb) {
          case 192:
            return null;
          case 193:
            return vb ? (ab = db(), ab > 0 ? vb[1].slice(vb.position1, vb.position1 += ab) : vb[0].slice(vb.position0, vb.position0 -= ab)) : xb;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (ab = Mb[Eb++], void 0 === ab) throw new Error("Unexpected end of buffer");
            return Ob(ab);
          case 197:
            return ab = Pb.getUint16(Eb), Eb += 2, Ob(ab);
          case 198:
            return ab = Pb.getUint32(Eb), Eb += 4, Ob(ab);
          case 199:
            return cb(Mb[Eb++]);
          case 200:
            return ab = Pb.getUint16(Eb), Eb += 2, cb(ab);
          case 201:
            return ab = Pb.getUint32(Eb), Eb += 4, cb(ab);
          case 202:
            if (ab = Pb.getFloat32(Eb), Rb.useFloat32 > 2) {
              let bb = Ya[(127 & Mb[Eb]) << 1 | Mb[Eb + 1] >> 7];
              return Eb += 4, (bb * ab + (ab > 0 ? .5 : -.5) | 0) / bb
            }
            return Eb += 4, ab;
          case 203:
            return ab = Pb.getFloat64(Eb), Eb += 8, ab;
          case 204:
            return Mb[Eb++];
          case 205:
            return ab = Pb.getUint16(Eb), Eb += 2, ab;
          case 206:
            return ab = Pb.getUint32(Eb), Eb += 4, ab;
          case 207:
            return "number" === Rb.int64AsType ? (ab = 4294967296 * Pb.getUint32(Eb), ab += Pb.getUint32(Eb + 4)) : "string" === Rb.int64AsType ? ab = Pb.getBigUint64(Eb).toString() : "auto" === Rb.int64AsType ? (ab = Pb.getBigUint64(Eb), ab <= BigInt(2) << BigInt(52) && (ab = Number(ab))) : ab = Pb.getBigUint64(Eb), Eb += 8, ab;
          case 208:
            return Pb.getInt8(Eb++);
          case 209:
            return ab = Pb.getInt16(Eb), Eb += 2, ab;
          case 210:
            return ab = Pb.getInt32(Eb), Eb += 4, ab;
          case 211:
            return "number" === Rb.int64AsType ? (ab = 4294967296 * Pb.getInt32(Eb), ab += Pb.getUint32(Eb + 4)) : "string" === Rb.int64AsType ? ab = Pb.getBigInt64(Eb).toString() : "auto" === Rb.int64AsType ? (ab = Pb.getBigInt64(Eb), ab >= BigInt(-2) << BigInt(52) && ab <= BigInt(2) << BigInt(52) && (ab = Number(ab))) : ab = Pb.getBigInt64(Eb), Eb += 8, ab;
          case 212:
            if (ab = Mb[Eb++], 114 == ab) return ba(63 & Mb[Eb++]);
            {
              let bb = Zb[ab];
              if (bb) return bb.read ? (Eb++, bb.read(db())) : bb.noBuffer ? (Eb++, bb()) : bb(Mb.subarray(Eb, ++Eb));
              throw new Error("Unknown extension " + ab)
            }
          case 213:
            return ab = Mb[Eb], 114 == ab ? (Eb++, ba(63 & Mb[Eb++], Mb[Eb++])) : cb(2);
          case 214:
            return cb(4);
          case 215:
            return cb(8);
          case 216:
            return cb(16);
          case 217:
            return ab = Mb[Eb++], yb >= Eb ? eb.slice(Eb - kb, (Eb += ab) - kb) : ub(ab);
          case 218:
            return ab = Pb.getUint16(Eb), yb >= (Eb += 2) ? eb.slice(Eb - kb, (Eb += ab) - kb) : rb(ab);
          case 219:
            return ab = Pb.getUint32(Eb), yb >= (Eb += 4) ? eb.slice(Eb - kb, (Eb += ab) - kb) : Kb(ab);
          case 220:
            return ab = Pb.getUint16(Eb), Eb += 2, tb(ab);
          case 221:
            return ab = Pb.getUint32(Eb), Eb += 4, tb(ab);
          case 222:
            return ab = Pb.getUint16(Eb), Eb += 2, wb(ab);
          case 223:
            return ab = Pb.getUint32(Eb), Eb += 4, wb(ab);
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
    const Fb = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function hb(bb, ab) {
      function Ub() {
        if (Ub.count++ > Nb) {
          let Ub = bb.read = new Function("r", "return function(){return " + (Rb.freezeData ? "Object.freeze" : "") + "({" + bb.map((bb => "__proto__" === bb ? "__proto_:r()" : Fb.test(bb) ? bb + ":r()" : "[" + JSON.stringify(bb) + "]:r()")).join(",") + "})}")(db);
          return 0 === bb.highByte && (bb.read = Gb(ab, bb.read)), Ub()
        }
        let Ab = {};
        for (let ab = 0, Ub = bb.length; ab < Ub; ab++) {
          let Ub = bb[ab];
          "__proto__" === Ub && (Ub = "__proto_"), Ab[Ub] = db()
        }
        return Rb.freezeData ? Object.freeze(Ab) : Ab
      }
      return Ub.count = 0, 0 === bb.highByte ? Gb(ab, Ub) : Ub
    }
    const Gb = (bb, ab) => function() {
      let Ub = Mb[Eb++];
      if (0 === Ub) return ab();
      let Ab = bb < 32 ? -(bb + (Ub << 5)) : bb + (Ub << 5),
        Tb = Bb[Ab] || Qb()[Ab];
      if (!Tb) throw new Error("Record id is not defined for " + Ab);
      return Tb.read || (Tb.read = hb(Tb, bb)), Tb.read()
    };

    function Qb() {
      let bb = Ta((() => (Mb = null, Rb.getStructures())));
      return Bb = Rb._mergeStructures(bb, Bb)
    }
    var qb = lb,
      ub = lb,
      rb = lb,
      Kb = lb;
    let ob = !1;

    function lb(bb) {
      let ab;
      if (bb < 16 && (ab = Cb(bb))) return ab;
      if (bb > 64 && Ab) return Ab.decode(Mb.subarray(Eb, Eb += bb));
      const Ub = Eb + bb,
        Tb = [];
      for (ab = ""; Eb < Ub;) {
        const bb = Mb[Eb++];
        if (0 === (128 & bb)) Tb.push(bb);
        else if (192 === (224 & bb)) {
          const ab = 63 & Mb[Eb++];
          Tb.push((31 & bb) << 6 | ab)
        } else if (224 === (240 & bb)) {
          const ab = 63 & Mb[Eb++],
            Ub = 63 & Mb[Eb++];
          Tb.push((31 & bb) << 12 | ab << 6 | Ub)
        } else if (240 === (248 & bb)) {
          let ab = (7 & bb) << 18 | (63 & Mb[Eb++]) << 12 | (63 & Mb[Eb++]) << 6 | 63 & Mb[Eb++];
          ab > 65535 && (ab -= 65536, Tb.push(ab >>> 10 & 1023 | 55296), ab = 56320 | 1023 & ab), Tb.push(ab)
        } else Tb.push(bb);
        Tb.length >= 4096 && (ab += sb.apply(String, Tb), Tb.length = 0)
      }
      return Tb.length > 0 && (ab += sb.apply(String, Tb)), ab
    }

    function tb(bb) {
      let ab = new Array(bb);
      for (let Ub = 0; Ub < bb; Ub++) ab[Ub] = db();
      return Rb.freezeData ? Object.freeze(ab) : ab
    }

    function wb(bb) {
      if (Rb.mapsAsObjects) {
        let ab = {};
        for (let Ub = 0; Ub < bb; Ub++) {
          let bb = nb();
          "__proto__" === bb && (bb = "__proto_"), ab[bb] = db()
        }
        return ab
      } {
        let ab = new Map;
        for (let Ub = 0; Ub < bb; Ub++) ab.set(db(), db());
        return ab
      }
    }
    var sb = String.fromCharCode;

    function gb(bb) {
      let ab = Eb,
        Ub = new Array(bb);
      for (let Ab = 0; Ab < bb; Ab++) {
        const bb = Mb[Eb++];
        if ((128 & bb) > 0) return void(Eb = ab);
        Ub[Ab] = bb
      }
      return sb.apply(String, Ub)
    }

    function Cb(bb) {
      if (bb < 4) {
        if (bb < 2) {
          if (0 === bb) return "";
          {
            let bb = Mb[Eb++];
            return (128 & bb) > 1 ? void(Eb -= 1) : sb(bb)
          }
        } {
          let ab = Mb[Eb++],
            Ub = Mb[Eb++];
          if ((128 & ab) > 0 || (128 & Ub) > 0) return void(Eb -= 2);
          if (bb < 3) return sb(ab, Ub);
          let Ab = Mb[Eb++];
          return (128 & Ab) > 0 ? void(Eb -= 3) : sb(ab, Ub, Ab)
        }
      } {
        let ab = Mb[Eb++],
          Ub = Mb[Eb++],
          Ab = Mb[Eb++],
          Tb = Mb[Eb++];
        if ((128 & ab) > 0 || (128 & Ub) > 0 || (128 & Ab) > 0 || (128 & Tb) > 0) return void(Eb -= 4);
        if (bb < 6) {
          if (4 === bb) return sb(ab, Ub, Ab, Tb);
          {
            let bb = Mb[Eb++];
            return (128 & bb) > 0 ? void(Eb -= 5) : sb(ab, Ub, Ab, Tb, bb)
          }
        }
        if (bb < 8) {
          let Yb = Mb[Eb++],
            Bb = Mb[Eb++];
          if ((128 & Yb) > 0 || (128 & Bb) > 0) return void(Eb -= 6);
          if (bb < 7) return sb(ab, Ub, Ab, Tb, Yb, Bb);
          let eb = Mb[Eb++];
          return (128 & eb) > 0 ? void(Eb -= 7) : sb(ab, Ub, Ab, Tb, Yb, Bb, eb)
        } {
          let Yb = Mb[Eb++],
            Bb = Mb[Eb++],
            eb = Mb[Eb++],
            vb = Mb[Eb++];
          if ((128 & Yb) > 0 || (128 & Bb) > 0 || (128 & eb) > 0 || (128 & vb) > 0) return void(Eb -= 8);
          if (bb < 10) {
            if (8 === bb) return sb(ab, Ub, Ab, Tb, Yb, Bb, eb, vb);
            {
              let bb = Mb[Eb++];
              return (128 & bb) > 0 ? void(Eb -= 9) : sb(ab, Ub, Ab, Tb, Yb, Bb, eb, vb, bb)
            }
          }
          if (bb < 12) {
            let Lb = Mb[Eb++],
              Pb = Mb[Eb++];
            if ((128 & Lb) > 0 || (128 & Pb) > 0) return void(Eb -= 10);
            if (bb < 11) return sb(ab, Ub, Ab, Tb, Yb, Bb, eb, vb, Lb, Pb);
            let Xb = Mb[Eb++];
            return (128 & Xb) > 0 ? void(Eb -= 11) : sb(ab, Ub, Ab, Tb, Yb, Bb, eb, vb, Lb, Pb, Xb)
          } {
            let Lb = Mb[Eb++],
              Pb = Mb[Eb++],
              Xb = Mb[Eb++],
              jb = Mb[Eb++];
            if ((128 & Lb) > 0 || (128 & Pb) > 0 || (128 & Xb) > 0 || (128 & jb) > 0) return void(Eb -= 12);
            if (bb < 14) {
              if (12 === bb) return sb(ab, Ub, Ab, Tb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb);
              {
                let bb = Mb[Eb++];
                return (128 & bb) > 0 ? void(Eb -= 13) : sb(ab, Ub, Ab, Tb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, bb)
              }
            } {
              let Rb = Mb[Eb++],
                kb = Mb[Eb++];
              if ((128 & Rb) > 0 || (128 & kb) > 0) return void(Eb -= 14);
              if (bb < 15) return sb(ab, Ub, Ab, Tb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb);
              let yb = Mb[Eb++];
              return (128 & yb) > 0 ? void(Eb -= 15) : sb(ab, Ub, Ab, Tb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb)
            }
          }
        }
      }
    }

    function Vb() {
      let bb, ab = Mb[Eb++];
      if (ab < 192) bb = ab - 160;
      else switch (ab) {
        case 217:
          bb = Mb[Eb++];
          break;
        case 218:
          bb = Pb.getUint16(Eb), Eb += 2;
          break;
        case 219:
          bb = Pb.getUint32(Eb), Eb += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return lb(bb)
    }

    function Ob(bb) {
      return Rb.copyBuffers ? Uint8Array.prototype.slice.call(Mb, Eb, Eb += bb) : Mb.subarray(Eb, Eb += bb)
    }

    function cb(bb) {
      let ab = Mb[Eb++];
      if (Zb[ab]) {
        let Ub;
        return Zb[ab](Mb.subarray(Eb, Ub = Eb += bb), (bb => {
          Eb = bb;
          try {
            return db()
          } finally {
            Eb = Ub
          }
        }))
      }
      throw new Error("Unknown extension type " + ab)
    }
    var Jb = new Array(4096);

    function nb() {
      let bb = Mb[Eb++];
      if (!(bb >= 160 && bb < 192)) return Eb--, Sb(db());
      if (bb -= 160, yb >= Eb) return eb.slice(Eb - kb, (Eb += bb) - kb);
      if (!(0 == yb && Tb < 180)) return qb(bb);
      let ab, Ub = 4095 & (bb << 5 ^ (bb > 1 ? Pb.getUint16(Eb) : bb > 0 ? Mb[Eb] : 0)),
        Ab = Jb[Ub],
        Yb = Eb,
        Bb = Eb + bb - 3,
        vb = 0;
      if (Ab && Ab.bytes == bb) {
        for (; Yb < Bb;) {
          if (ab = Pb.getUint32(Yb), ab != Ab[vb++]) {
            Yb = 1879048192;
            break
          }
          Yb += 4
        }
        for (Bb += 3; Yb < Bb;)
          if (ab = Mb[Yb++], ab != Ab[vb++]) {
            Yb = 1879048192;
            break
          } if (Yb === Bb) return Eb = Yb, Ab.string;
        Bb -= 3, Yb = Eb
      }
      for (Ab = [], Jb[Ub] = Ab, Ab.bytes = bb; Yb < Bb;) ab = Pb.getUint32(Yb), Ab.push(ab), Yb += 4;
      for (Bb += 3; Yb < Bb;) ab = Mb[Yb++], Ab.push(ab);
      let Lb = bb < 16 ? Cb(bb) : gb(bb);
      return Ab.string = null != Lb ? Lb : qb(bb)
    }

    function Sb(bb) {
      if ("string" === typeof bb) return bb;
      if ("number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb) return bb.toString();
      if (null == bb) return bb + "";
      if (Rb.allowArraysInMapKeys && Array.isArray(bb) && bb.flat().every((bb => ["string", "number", "boolean", "bigint"].includes(typeof bb)))) return bb.flat().toString();
      throw new Error("Invalid property type for record: " + typeof bb)
    }
    const ba = (bb, ab) => {
      let Ub = db().map(Sb),
        Ab = bb;
      void 0 !== ab && (bb = bb < 32 ? -((ab << 5) + bb) : (ab << 5) + bb, Ub.highByte = ab);
      let Mb = Bb[bb];
      return Mb && (Mb.isShared || pb) && ((Bb.restoreStructures || (Bb.restoreStructures = []))[bb] = Mb), Bb[bb] = Ub, Ub.read = hb(Ub, Ab), Ub.read()
    };
    Zb[0] = () => {}, Zb[0].noBuffer = !0, Zb[66] = bb => {
      let ab = bb.length,
        Ub = BigInt(128 & bb[0] ? bb[0] - 256 : bb[0]);
      for (let Ab = 1; Ab < ab; Ab++) Ub <<= BigInt(8), Ub += BigInt(bb[Ab]);
      return Ub
    };
    let aa = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Zb[101] = () => {
      let bb = db();
      return (aa[bb[0]] || Error)(bb[1], {
        cause: bb[2]
      })
    }, Zb[105] = bb => {
      if (!1 === Rb.structuredClone) throw new Error("Structured clone extension is disabled");
      let ab = Pb.getUint32(Eb - 4);
      Lb || (Lb = new Map);
      let Ub, Ab = Mb[Eb];
      Ub = Ab >= 144 && Ab < 160 || 220 == Ab || 221 == Ab ? [] : {};
      let Tb = {
        target: Ub
      };
      Lb.set(ab, Tb);
      let Yb = db();
      return Tb.used ? Object.assign(Ub, Yb) : (Tb.target = Yb, Yb)
    }, Zb[112] = bb => {
      if (!1 === Rb.structuredClone) throw new Error("Structured clone extension is disabled");
      let ab = Pb.getUint32(Eb - 4),
        Ub = Lb.get(ab);
      return Ub.used = !0, Ub.target
    }, Zb[115] = () => new Set(db());
    const Ua = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((bb => bb + "Array"));
    let Aa = "object" === typeof globalThis ? globalThis : window;
    Zb[116] = bb => {
      let ab = bb[0],
        Ub = Ua[ab];
      if (!Ub) {
        if (16 === ab) {
          let ab = new ArrayBuffer(bb.length - 1);
          return new Uint8Array(ab).set(bb.subarray(1)), ab
        }
        throw new Error("Could not find typed array for code " + ab)
      }
      return new Aa[Ub](Uint8Array.prototype.slice.call(bb, 1).buffer)
    }, Zb[120] = () => {
      let bb = db();
      return new RegExp(bb[0], bb[1])
    };
    const Ma = [];

    function Ta(bb) {
      mb && mb();
      let ab = Tb,
        Ub = Eb,
        Ab = jb,
        Yb = kb,
        Zb = yb,
        Db = eb,
        zb = Xb,
        xb = Lb,
        ib = vb,
        fb = new Uint8Array(Mb.slice(0, Tb)),
        Nb = Bb,
        Wb = Bb.slice(0, Bb.length),
        Hb = Rb,
        Ib = pb,
        db = bb();
      return Tb = ab, Eb = Ub, jb = Ab, kb = Yb, yb = Zb, eb = Db, Xb = zb, Lb = xb, vb = ib, Mb = fb, pb = Ib, (Bb = Nb).splice(0, Bb.length, ...Wb), Rb = Hb, Pb = new DataView(Mb.buffer, Mb.byteOffset, Mb.byteLength), db
    }

    function Ea() {
      Mb = null, Lb = null, Bb = null
    }
    Zb[98] = bb => {
      let ab = (bb[0] << 24) + (bb[1] << 16) + (bb[2] << 8) + bb[3],
        Ub = Eb;
      return Eb += ab - bb.length, vb = Ma, (vb = [Vb(), Vb()]).position0 = 0, vb.position1 = 0, vb.postBundlePosition = Eb, Eb = Ub, db()
    }, Zb[255] = bb => 4 == bb.length ? new Date(1e3 * (16777216 * bb[0] + (bb[1] << 16) + (bb[2] << 8) + bb[3])) : 8 == bb.length ? new Date(((bb[0] << 22) + (bb[1] << 14) + (bb[2] << 6) + (bb[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & bb[3]) + 16777216 * bb[4] + (bb[5] << 16) + (bb[6] << 8) + bb[7])) : 12 == bb.length ? new Date(((bb[0] << 24) + (bb[1] << 16) + (bb[2] << 8) + bb[3]) / 1e6 + 1e3 * ((128 & bb[4] ? -281474976710656 : 0) + 1099511627776 * bb[6] + 4294967296 * bb[7] + 16777216 * bb[8] + (bb[9] << 16) + (bb[10] << 8) + bb[11])) : new Date("invalid");
    const Ya = new Array(147);
    for (let MU = 0; MU < 256; MU++) Ya[MU] = +("1e" + Math.floor(45.15 - .30103 * MU));
    const Ba = Wb;
    var ea = new Wb({
      useRecords: !1
    });
    const va = ea.unpack,
      La = ea.unpackMultiple,
      Pa = ea.unpack,
      Xa = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let ja, Ra, ka, ya = new Float32Array(1),
      Za = new Uint8Array(ya.buffer, 0, 4);

    function Da(bb) {
      ya[0] = bb;
      let ab = Ya[(127 & Za[3]) << 1 | Za[2] >> 7];
      return (ab * bb + (bb > 0 ? .5 : -.5) | 0) / ab
    }
    try {
      ja = new TextEncoder
    } catch (AU) {}
    const za = "undefined" !== typeof Buffer,
      xa = za ? function(bb) {
        return Buffer.allocUnsafeSlow(bb)
      } : Uint8Array,
      ia = za ? Buffer : Uint8Array,
      fa = za ? 4294967296 : 2144337920;
    let ma, pa, Na, Wa, Ha, Ia = 0,
      da = null;
    const Fa = /[\u0080-\uFFFF]/,
      ha = Symbol("record-id");
    class Ga extends Wb {
      constructor(bb) {
        let ab, Ub, Ab, Mb;
        super(bb), this.offset = 0;
        let Tb = ia.prototype.utf8Write ? function(bb, ab) {
            return ma.utf8Write(bb, ab, ma.byteLength - ab)
          } : !(!ja || !ja.encodeInto) && function(bb, ab) {
            return ja.encodeInto(bb, ma.subarray(ab)).written
          },
          Eb = this;
        bb || (bb = {});
        let Yb = bb && bb.sequential,
          Bb = bb.structures || bb.saveStructures,
          eb = bb.maxSharedStructures;
        if (null == eb && (eb = Bb ? 32 : 0), eb > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        bb.structuredClone && void 0 == bb.moreTypes && (this.moreTypes = !0);
        let vb = bb.maxOwnStructures;
        null == vb && (vb = Bb ? 32 : 64), this.structures || 0 == bb.useRecords || (this.structures = []);
        let Lb = eb > 32 || vb + eb > 64,
          Pb = eb + 64,
          Xb = eb + vb + 64;
        if (Xb > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let jb = [],
          Rb = 0,
          kb = 0;
        this.pack = this.encode = function(bb, Tb) {
          if (ma || (ma = new xa(8192), Na = ma.dataView || (ma.dataView = new DataView(ma.buffer, 0, 8192)), Ia = 0), Wa = ma.length - 10, Wa - Ia < 2048 ? (ma = new xa(ma.length), Na = ma.dataView || (ma.dataView = new DataView(ma.buffer, 0, ma.length)), Wa = ma.length - 10, Ia = 0) : Ia = Ia + 7 & 2147483640, ab = Ia, Tb & na && (Ia += 255 & Tb), Mb = Eb.structuredClone ? new Map : null, Eb.bundleStrings && "string" !== typeof bb ? (da = [], da.size = 1 / 0) : da = null, Ab = Eb.structures, Ab) {
            Ab.uninitialized && (Ab = Eb._mergeStructures(Eb.getStructures()));
            let bb = Ab.sharedLength || 0;
            if (bb > eb) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Ab.sharedLength);
            if (!Ab.transitions) {
              Ab.transitions = Object.create(null);
              for (let ab = 0; ab < bb; ab++) {
                let bb = Ab[ab];
                if (!bb) continue;
                let Ub, Mb = Ab.transitions;
                for (let ab = 0, Ab = bb.length; ab < Ab; ab++) {
                  let Ab = bb[ab];
                  Ub = Mb[Ab], Ub || (Ub = Mb[Ab] = Object.create(null)), Mb = Ub
                }
                Mb[ha] = ab + 64
              }
              this.lastNamedStructuresLength = bb
            }
            Yb || (Ab.nextId = bb + 64)
          }
          let Bb;
          Ub && (Ub = !1);
          try {
            Eb.randomAccessStructure && bb && bb.constructor && bb.constructor === Object ? Wb(bb) : Db(bb);
            let Ub = da;
            if (da && ra(ab, Db, 0), Mb && Mb.idsToInsert) {
              let bb = Mb.idsToInsert.sort(((bb, ab) => bb.offset > ab.offset ? 1 : -1)),
                Ab = bb.length,
                Tb = -1;
              for (; Ub && Ab > 0;) {
                let Mb = bb[--Ab].offset + ab;
                Mb < Ub.stringsPosition + ab && -1 === Tb && (Tb = 0), Mb > Ub.position + ab ? Tb >= 0 && (Tb += 6) : (Tb >= 0 && (Na.setUint32(Ub.position + ab, Na.getUint32(Ub.position + ab) + Tb), Tb = -1), Ub = Ub.previous, Ab++)
              }
              Tb >= 0 && Ub && Na.setUint32(Ub.position + ab, Na.getUint32(Ub.position + ab) + Tb), Ia += 6 * bb.length, Ia > Wa && mb(Ia), Eb.offset = Ia;
              let Yb = function(bb, ab) {
                let Ub, Ab = 6 * ab.length,
                  Mb = bb.length - Ab;
                for (; Ub = ab.pop();) {
                  let ab = Ub.offset,
                    Tb = Ub.id;
                  bb.copyWithin(ab + Ab, ab, Mb), Ab -= 6;
                  let Eb = ab + Ab;
                  bb[Eb++] = 214, bb[Eb++] = 105, bb[Eb++] = Tb >> 24, bb[Eb++] = Tb >> 16 & 255, bb[Eb++] = Tb >> 8 & 255, bb[Eb++] = 255 & Tb, Mb = ab
                }
                return bb
              }(ma.subarray(ab, Ia), bb);
              return Mb = null, Yb
            }
            return Eb.offset = Ia, Tb & ca ? (ma.start = ab, ma.end = Ia, ma) : ma.subarray(ab, Ia)
          } catch (AU) {
            throw Bb = AU, AU
          } finally {
            if (Ab && (yb(), Ub && Eb.saveStructures)) {
              let Ub = Ab.sharedLength || 0,
                Mb = ma.subarray(ab, Ia),
                Yb = oa(Ab, Eb);
              if (!Bb) return !1 === Eb.saveStructures(Yb, Yb.isCompatible) ? Eb.pack(bb, Tb) : (Eb.lastNamedStructuresLength = Ub, ma.length > 1073741824 && (ma = null), Mb)
            }
            ma.length > 1073741824 && (ma = null), Tb & Ja && (Ia = ab)
          }
        };
        const yb = () => {
            kb < 10 && kb++;
            let bb = Ab.sharedLength || 0;
            if (Ab.length > bb && !Yb && (Ab.length = bb), Rb > 1e4) Ab.transitions = null, kb = 0, Rb = 0, jb.length > 0 && (jb = []);
            else if (jb.length > 0 && !Yb) {
              for (let bb = 0, ab = jb.length; bb < ab; bb++) jb[bb][ha] = 0;
              jb = []
            }
          },
          Zb = bb => {
            var ab = bb.length;
            ab < 16 ? ma[Ia++] = 144 | ab : ab < 65536 ? (ma[Ia++] = 220, ma[Ia++] = ab >> 8, ma[Ia++] = 255 & ab) : (ma[Ia++] = 221, Na.setUint32(Ia, ab), Ia += 4);
            for (let Ub = 0; Ub < ab; Ub++) Db(bb[Ub])
          },
          Db = bb => {
            Ia > Wa && (ma = mb(Ia));
            var Ub, Ab = typeof bb;
            if ("string" === Ab) {
              let Ab, Mb = bb.length;
              if (da && Mb >= 4 && Mb < 4096) {
                if ((da.size += Mb) > 21760) {
                  let bb, Ub, Ab = (da[0] ? 3 * da[0].length + da[1].length : 0) + 10;
                  Ia + Ab > Wa && (ma = mb(Ia + Ab)), da.position ? (Ub = da, ma[Ia] = 200, Ia += 3, ma[Ia++] = 98, bb = Ia - ab, Ia += 4, ra(ab, Db, 0), Na.setUint16(bb + ab - 3, Ia - ab - bb)) : (ma[Ia++] = 214, ma[Ia++] = 98, bb = Ia - ab, Ia += 4), da = ["", ""], da.previous = Ub, da.size = 0, da.position = bb
                }
                let Ub = Fa.test(bb);
                return da[Ub ? 0 : 1] += bb, ma[Ia++] = 193, void Db(Ub ? -Mb : Mb)
              }
              Ab = Mb < 32 ? 1 : Mb < 256 ? 2 : Mb < 65536 ? 3 : 5;
              let Eb = 3 * Mb;
              if (Ia + Eb > Wa && (ma = mb(Ia + Eb)), Mb < 64 || !Tb) {
                let ab, Tb, Eb, Yb = Ia + Ab;
                for (ab = 0; ab < Mb; ab++) Tb = bb.charCodeAt(ab), Tb < 128 ? ma[Yb++] = Tb : Tb < 2048 ? (ma[Yb++] = Tb >> 6 | 192, ma[Yb++] = 63 & Tb | 128) : 55296 === (64512 & Tb) && 56320 === (64512 & (Eb = bb.charCodeAt(ab + 1))) ? (Tb = 65536 + ((1023 & Tb) << 10) + (1023 & Eb), ab++, ma[Yb++] = Tb >> 18 | 240, ma[Yb++] = Tb >> 12 & 63 | 128, ma[Yb++] = Tb >> 6 & 63 | 128, ma[Yb++] = 63 & Tb | 128) : (ma[Yb++] = Tb >> 12 | 224, ma[Yb++] = Tb >> 6 & 63 | 128, ma[Yb++] = 63 & Tb | 128);
                Ub = Yb - Ia - Ab
              } else Ub = Tb(bb, Ia + Ab);
              Ub < 32 ? ma[Ia++] = 160 | Ub : Ub < 256 ? (Ab < 2 && ma.copyWithin(Ia + 2, Ia + 1, Ia + 1 + Ub), ma[Ia++] = 217, ma[Ia++] = Ub) : Ub < 65536 ? (Ab < 3 && ma.copyWithin(Ia + 3, Ia + 2, Ia + 2 + Ub), ma[Ia++] = 218, ma[Ia++] = Ub >> 8, ma[Ia++] = 255 & Ub) : (Ab < 5 && ma.copyWithin(Ia + 5, Ia + 3, Ia + 3 + Ub), ma[Ia++] = 219, Na.setUint32(Ia, Ub), Ia += 4), Ia += Ub
            } else if ("number" === Ab)
              if (bb >>> 0 === bb) bb < 32 || bb < 128 && !1 === this.useRecords || bb < 64 && !this.randomAccessStructure ? ma[Ia++] = bb : bb < 256 ? (ma[Ia++] = 204, ma[Ia++] = bb) : bb < 65536 ? (ma[Ia++] = 205, ma[Ia++] = bb >> 8, ma[Ia++] = 255 & bb) : (ma[Ia++] = 206, Na.setUint32(Ia, bb), Ia += 4);
              else if ((bb | 0) === bb) bb >= -32 ? ma[Ia++] = 256 + bb : bb >= -128 ? (ma[Ia++] = 208, ma[Ia++] = bb + 256) : bb >= -32768 ? (ma[Ia++] = 209, Na.setInt16(Ia, bb), Ia += 2) : (ma[Ia++] = 210, Na.setInt32(Ia, bb), Ia += 4);
            else {
              let ab;
              if ((ab = this.useFloat32) > 0 && bb < 4294967296 && bb >= -2147483648) {
                let Ub;
                if (ma[Ia++] = 202, Na.setFloat32(Ia, bb), ab < 4 || ((Ub = bb * Ya[(127 & ma[Ia]) << 1 | ma[Ia + 1] >> 7]) | 0) === Ub) return void(Ia += 4);
                Ia--
              }
              ma[Ia++] = 203, Na.setFloat64(Ia, bb), Ia += 8
            } else if ("object" === Ab || "function" === Ab)
              if (bb) {
                if (Mb) {
                  let Ub = Mb.get(bb);
                  if (Ub) {
                    if (!Ub.id) {
                      let bb = Mb.idsToInsert || (Mb.idsToInsert = []);
                      Ub.id = bb.push(Ub)
                    }
                    return ma[Ia++] = 214, ma[Ia++] = 112, Na.setUint32(Ia, Ub.id), void(Ia += 4)
                  }
                  Mb.set(bb, {
                    offset: Ia - ab
                  })
                }
                let Tb = bb.constructor;
                if (Tb === Object) fb(bb);
                else if (Tb === Array) Zb(bb);
                else if (Tb === Map)
                  if (this.mapAsEmptyObject) ma[Ia++] = 128;
                  else {
                    (Ub = bb.size) < 16 ? ma[Ia++] = 128 | Ub : Ub < 65536 ? (ma[Ia++] = 222, ma[Ia++] = Ub >> 8, ma[Ia++] = 255 & Ub) : (ma[Ia++] = 223, Na.setUint32(Ia, Ub), Ia += 4);
                    for (let [ab, Ub] of bb) Db(ab), Db(Ub)
                  }
                else {
                  for (let ab = 0, Ub = Ra.length; ab < Ub; ab++) {
                    if (bb instanceof ka[ab]) {
                      let Ub = Ra[ab];
                      if (Ub.write) {
                        Ub.type && (ma[Ia++] = 212, ma[Ia++] = Ub.type, ma[Ia++] = 0);
                        let ab = Ub.write.call(this, bb);
                        return void(ab === bb ? Array.isArray(bb) ? Zb(bb) : fb(bb) : Db(ab))
                      }
                      let Ab, Mb = ma,
                        Tb = Na,
                        Eb = Ia;
                      ma = null;
                      try {
                        Ab = Ub.pack.call(this, bb, (bb => (ma = Mb, Mb = null, Ia += bb, Ia > Wa && mb(Ia), {
                          target: ma,
                          targetView: Na,
                          position: Ia - bb
                        })), Db)
                      } finally {
                        Mb && (ma = Mb, Na = Tb, Ia = Eb, Wa = ma.length - 10)
                      }
                      return void(Ab && (Ab.length + Ia > Wa && mb(Ab.length + Ia), Ia = ua(Ab, ma, Ia, Ub.type)))
                    }
                  }
                  if (Array.isArray(bb)) Zb(bb);
                  else {
                    if (bb.toJSON) {
                      const ab = bb.toJSON();
                      if (ab !== bb) return Db(ab)
                    }
                    if ("function" === Ab) return Db(this.writeFunction && this.writeFunction(bb));
                    fb(bb)
                  }
                }
              } else ma[Ia++] = 192;
            else if ("boolean" === Ab) ma[Ia++] = bb ? 195 : 194;
            else if ("bigint" === Ab) {
              if (bb < BigInt(1) << BigInt(63) && bb >= -(BigInt(1) << BigInt(63))) ma[Ia++] = 211, Na.setBigInt64(Ia, bb);
              else if (bb < BigInt(1) << BigInt(64) && bb > 0) ma[Ia++] = 207, Na.setBigUint64(Ia, bb);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Db(bb.toString());
                  if (this.useBigIntExtension && bb < BigInt(2) ** BigInt(1023) && bb > -(BigInt(2) ** BigInt(1023))) {
                    ma[Ia++] = 199, Ia++, ma[Ia++] = 66;
                    let ab, Ub = [];
                    do {
                      let Ab = bb & BigInt(255);
                      ab = (Ab & BigInt(128)) === (bb < BigInt(0) ? BigInt(128) : BigInt(0)), Ub.push(Ab), bb >>= BigInt(8)
                    } while (bb !== BigInt(0) && bb !== BigInt(-1) || !ab);
                    ma[Ia - 2] = Ub.length;
                    for (let bb = Ub.length; bb > 0;) ma[Ia++] = Number(Ub[--bb]);
                    return
                  }
                  throw new RangeError(bb + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                ma[Ia++] = 203, Na.setFloat64(Ia, Number(bb))
              }
              Ia += 8
            } else {
              if ("undefined" !== Ab) throw new Error("Unknown type: " + Ab);
              this.encodeUndefinedAsNil ? ma[Ia++] = 192 : (ma[Ia++] = 212, ma[Ia++] = 0, ma[Ia++] = 0)
            }
          },
          zb = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? bb => {
            let ab;
            if (this.skipValues) {
              ab = [];
              for (let Ub in bb) "function" === typeof bb.hasOwnProperty && !bb.hasOwnProperty(Ub) || this.skipValues.includes(bb[Ub]) || ab.push(Ub)
            } else ab = Object.keys(bb);
            let Ub, Ab = ab.length;
            if (Ab < 16 ? ma[Ia++] = 128 | Ab : Ab < 65536 ? (ma[Ia++] = 222, ma[Ia++] = Ab >> 8, ma[Ia++] = 255 & Ab) : (ma[Ia++] = 223, Na.setUint32(Ia, Ab), Ia += 4), this.coercibleKeyAsNumber)
              for (let Mb = 0; Mb < Ab; Mb++) {
                Ub = ab[Mb];
                let Ab = Number(Ub);
                Db(isNaN(Ab) ? Ub : Ab), Db(bb[Ub])
              } else
                for (let Mb = 0; Mb < Ab; Mb++) Db(Ub = ab[Mb]), Db(bb[Ub])
          } : bb => {
            ma[Ia++] = 222;
            let Ub = Ia - ab;
            Ia += 2;
            let Ab = 0;
            for (let ab in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(ab)) && (Db(ab), Db(bb[ab]), Ab++);
            if (Ab > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            ma[Ub++ + ab] = Ab >> 8, ma[Ub + ab] = 255 & Ab
          },
          xb = !1 === this.useRecords ? zb : bb.progressiveRecords && !Lb ? bb => {
            let Ub, Mb, Tb = Ab.transitions || (Ab.transitions = Object.create(null)),
              Eb = Ia++ - ab;
            for (let Yb in bb)
              if ("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(Yb)) {
                if (Ub = Tb[Yb], Ub) Tb = Ub;
                else {
                  let Bb = Object.keys(bb),
                    eb = Tb;
                  Tb = Ab.transitions;
                  let vb = 0;
                  for (let bb = 0, ab = Bb.length; bb < ab; bb++) {
                    let ab = Bb[bb];
                    Ub = Tb[ab], Ub || (Ub = Tb[ab] = Object.create(null), vb++), Tb = Ub
                  }
                  Eb + ab + 1 == Ia ? (Ia--, pb(Tb, Bb, vb)) : Nb(Tb, Bb, Eb, vb), Mb = !0, Tb = eb[Yb]
                }
                Db(bb[Yb])
              } if (!Mb) {
              let Ub = Tb[ha];
              Ub ? ma[Eb + ab] = Ub : Nb(Tb, Object.keys(bb), Eb, 0)
            }
          } : bb => {
            let ab, Ub = Ab.transitions || (Ab.transitions = Object.create(null)),
              Mb = 0;
            for (let Ab in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(Ab)) && (ab = Ub[Ab], ab || (ab = Ub[Ab] = Object.create(null), Mb++), Ub = ab);
            let Tb = Ub[ha];
            Tb ? Tb >= 96 && Lb ? (ma[Ia++] = 96 + (31 & (Tb -= 96)), ma[Ia++] = Tb >> 5) : ma[Ia++] = Tb : pb(Ub, Ub.__keys__ || Object.keys(bb), Mb);
            for (let Ab in bb)("function" !== typeof bb.hasOwnProperty || bb.hasOwnProperty(Ab)) && Db(bb[Ab])
          },
          ib = "function" == typeof this.useRecords && this.useRecords,
          fb = ib ? bb => {
            ib(bb) ? xb(bb) : zb(bb)
          } : xb,
          mb = bb => {
            let Ub;
            if (bb > 16777216) {
              if (bb - ab > fa) throw new Error("Packed buffer would be larger than maximum buffer size");
              Ub = Math.min(fa, 4096 * Math.round(Math.max((bb - ab) * (bb > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else Ub = 1 + (Math.max(bb - ab << 2, ma.length - 1) >> 12) << 12;
            let Ab = new xa(Ub);
            return Na = Ab.dataView || (Ab.dataView = new DataView(Ab.buffer, 0, Ub)), bb = Math.min(bb, ma.length), ma.copy ? ma.copy(Ab, 0, ab, bb) : Ab.set(ma.slice(ab, bb)), Ia -= ab, ab = 0, Wa = Ab.length - 10, ma = Ab
          },
          pb = (bb, ab, Mb) => {
            let Tb = Ab.nextId;
            Tb || (Tb = 64), Tb < Pb && this.shouldShareStructure && !this.shouldShareStructure(ab) ? (Tb = Ab.nextOwnId, Tb < Xb || (Tb = Pb), Ab.nextOwnId = Tb + 1) : (Tb >= Xb && (Tb = Pb), Ab.nextId = Tb + 1);
            let Eb = ab.highByte = Tb >= 96 && Lb ? Tb - 96 >> 5 : -1;
            bb[ha] = Tb, bb.__keys__ = ab, Ab[Tb - 64] = ab, Tb < Pb ? (ab.isShared = !0, Ab.sharedLength = Tb - 63, Ub = !0, Eb >= 0 ? (ma[Ia++] = 96 + (31 & Tb), ma[Ia++] = Eb) : ma[Ia++] = Tb) : (Eb >= 0 ? (ma[Ia++] = 213, ma[Ia++] = 114, ma[Ia++] = 96 + (31 & Tb), ma[Ia++] = Eb) : (ma[Ia++] = 212, ma[Ia++] = 114, ma[Ia++] = Tb), Mb && (Rb += kb * Mb), jb.length >= vb && (jb.shift()[ha] = 0), jb.push(bb), Db(ab))
          },
          Nb = (bb, Ub, Ab, Mb) => {
            let Tb = ma,
              Eb = Ia,
              Yb = Wa,
              Bb = ab;
            ma = pa, Ia = 0, ab = 0, ma || (pa = ma = new xa(8192)), Wa = ma.length - 10, pb(bb, Ub, Mb), pa = ma;
            let eb = Ia;
            if (ma = Tb, Ia = Eb, Wa = Yb, ab = Bb, eb > 1) {
              let bb = Ia + eb - 1;
              bb > Wa && mb(bb);
              let Ub = Ab + ab;
              ma.copyWithin(Ub + eb, Ub + 1, Ia), ma.set(pa.slice(0, eb), Ub), Ia = bb
            } else ma[Ab + ab] = pa[0]
          },
          Wb = bb => {
            let Mb = Ha(bb, ma, ab, Ia, Ab, mb, ((bb, ab, Ab) => {
              if (Ab) return Ub = !0;
              Ia = ab;
              let Mb = ma;
              return Db(bb), yb(), Mb !== ma ? {
                position: Ia,
                targetView: Na,
                target: ma
              } : Ia
            }), this);
            if (0 === Mb) return fb(bb);
            Ia = Mb
          }
      }
      useBuffer(bb) {
        ma = bb, Na = ma.dataView || (ma.dataView = new DataView(ma.buffer, ma.byteOffset, ma.byteLength)), Ia = 0
      }
      set position(bb) {
        Ia = bb
      }
      get position() {
        return Ia
      }
      set buffer(bb) {
        ma = bb
      }
      get buffer() {
        return ma
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function Qa(bb, ab, Ub, Ab) {
      let Mb = bb.byteLength;
      if (Mb + 1 < 256) {
        var {
          target: Tb,
          position: Eb
        } = Ub(4 + Mb);
        Tb[Eb++] = 199, Tb[Eb++] = Mb + 1
      } else if (Mb + 1 < 65536) {
        var {
          target: Tb,
          position: Eb
        } = Ub(5 + Mb);
        Tb[Eb++] = 200, Tb[Eb++] = Mb + 1 >> 8, Tb[Eb++] = Mb + 1 & 255
      } else {
        var {
          target: Tb,
          position: Eb,
          targetView: Yb
        } = Ub(7 + Mb);
        Tb[Eb++] = 201, Yb.setUint32(Eb, Mb + 1), Eb += 4
      }
      Tb[Eb++] = 116, Tb[Eb++] = ab, bb.buffer || (bb = new Uint8Array(bb)), Tb.set(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength), Eb)
    }

    function qa(bb, ab) {
      let Ub = bb.byteLength;
      var Ab, Mb;
      if (Ub < 256) {
        var {
          target: Ab,
          position: Mb
        } = ab(Ub + 2);
        Ab[Mb++] = 196, Ab[Mb++] = Ub
      } else if (Ub < 65536) {
        var {
          target: Ab,
          position: Mb
        } = ab(Ub + 3);
        Ab[Mb++] = 197, Ab[Mb++] = Ub >> 8, Ab[Mb++] = 255 & Ub
      } else {
        var {
          target: Ab,
          position: Mb,
          targetView: Tb
        } = ab(Ub + 5);
        Ab[Mb++] = 198, Tb.setUint32(Mb, Ub), Mb += 4
      }
      Ab.set(bb, Mb)
    }

    function ua(bb, ab, Ub, Ab) {
      let Mb = bb.length;
      switch (Mb) {
        case 1:
          ab[Ub++] = 212;
          break;
        case 2:
          ab[Ub++] = 213;
          break;
        case 4:
          ab[Ub++] = 214;
          break;
        case 8:
          ab[Ub++] = 215;
          break;
        case 16:
          ab[Ub++] = 216;
          break;
        default:
          Mb < 256 ? (ab[Ub++] = 199, ab[Ub++] = Mb) : Mb < 65536 ? (ab[Ub++] = 200, ab[Ub++] = Mb >> 8, ab[Ub++] = 255 & Mb) : (ab[Ub++] = 201, ab[Ub++] = Mb >> 24, ab[Ub++] = Mb >> 16 & 255, ab[Ub++] = Mb >> 8 & 255, ab[Ub++] = 255 & Mb)
      }
      return ab[Ub++] = Ab, ab.set(bb, Ub), Ub += Mb
    }

    function ra(bb, ab, Ub) {
      if (da.length > 0) {
        Na.setUint32(da.position + bb, Ia + Ub - da.position - bb), da.stringsPosition = Ia - bb;
        let Ab = da;
        da = null, ab(Ab[0]), ab(Ab[1])
      }
    }

    function Ka(bb) {
      if (bb.Class) {
        if (!bb.pack && !bb.write) throw new Error("Extension has no pack or write function");
        if (bb.pack && !bb.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        ka.unshift(bb.Class), Ra.unshift(bb)
      }! function(bb) {
        bb.unpack ? Zb[bb.type] = bb.unpack : Zb[bb.type] = bb
      }(bb)
    }

    function oa(bb, ab) {
      return bb.isCompatible = bb => {
        let Ub = !bb || (ab.lastNamedStructuresLength || 0) === bb.length;
        return Ub || ab._mergeStructures(bb), Ub
      }, bb
    }
    ka = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, zb], Ra = [{
      pack(bb, ab, Ub) {
        let Ab = bb.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === bb.getMilliseconds()) && Ab >= 0 && Ab < 4294967296) {
          let {
            target: bb,
            targetView: Ub,
            position: Mb
          } = ab(6);
          bb[Mb++] = 214, bb[Mb++] = 255, Ub.setUint32(Mb, Ab)
        } else if (Ab > 0 && Ab < 4294967296) {
          let {
            target: Ub,
            targetView: Mb,
            position: Tb
          } = ab(10);
          Ub[Tb++] = 215, Ub[Tb++] = 255, Mb.setUint32(Tb, 4e6 * bb.getMilliseconds() + (Ab / 1e3 / 4294967296 | 0)), Mb.setUint32(Tb + 4, Ab)
        } else if (isNaN(Ab)) {
          if (this.onInvalidDate) return ab(0), Ub(this.onInvalidDate());
          let {
            target: bb,
            targetView: Ab,
            position: Mb
          } = ab(3);
          bb[Mb++] = 212, bb[Mb++] = 255, bb[Mb++] = 255
        } else {
          let {
            target: Ub,
            targetView: Mb,
            position: Tb
          } = ab(15);
          Ub[Tb++] = 199, Ub[Tb++] = 12, Ub[Tb++] = 255, Mb.setUint32(Tb, 1e6 * bb.getMilliseconds()), Mb.setBigInt64(Tb + 4, BigInt(Math.floor(Ab)))
        }
      }
    }, {
      pack(bb, ab, Ub) {
        if (this.setAsEmptyObject) return ab(0), Ub({});
        let Ab = Array.from(bb),
          {
            target: Mb,
            position: Tb
          } = ab(this.moreTypes ? 3 : 0);
        this.moreTypes && (Mb[Tb++] = 212, Mb[Tb++] = 115, Mb[Tb++] = 0), Ub(Ab)
      }
    }, {
      pack(bb, ab, Ub) {
        let {
          target: Ab,
          position: Mb
        } = ab(this.moreTypes ? 3 : 0);
        this.moreTypes && (Ab[Mb++] = 212, Ab[Mb++] = 101, Ab[Mb++] = 0), Ub([bb.name, bb.message, bb.cause])
      }
    }, {
      pack(bb, ab, Ub) {
        let {
          target: Ab,
          position: Mb
        } = ab(this.moreTypes ? 3 : 0);
        this.moreTypes && (Ab[Mb++] = 212, Ab[Mb++] = 120, Ab[Mb++] = 0), Ub([bb.source, bb.flags])
      }
    }, {
      pack(bb, ab) {
        this.moreTypes ? Qa(bb, 16, ab) : qa(za ? Buffer.from(bb) : new Uint8Array(bb), ab)
      }
    }, {
      pack(bb, ab) {
        let Ub = bb.constructor;
        Ub !== ia && this.moreTypes ? Qa(bb, Ua.indexOf(Ub.name), ab) : qa(bb, ab)
      }
    }, {
      pack(bb, ab) {
        let {
          target: Ub,
          position: Ab
        } = ab(1);
        Ub[Ab] = 193
      }
    }];
    let la = new Ga({
      useRecords: !1
    });
    const ta = la.pack,
      wa = la.pack,
      sa = Ga,
      {
        NEVER: ga,
        ALWAYS: Ca,
        DECIMAL_ROUND: Va,
        DECIMAL_FIT: Oa
      } = Xa,
      ca = 512,
      Ja = 1024,
      na = 2048;
    const Sa = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!bb || "object" !== typeof bb) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const Ub = new Wb(ab);
        let Ab;
        const Mb = bb => {
          let ab;
          Ab && (bb = Buffer.concat([Ab, bb]), Ab = void 0);
          try {
            ab = Ub.unpackMultiple(bb)
          } catch (Mb) {
            if (!Mb.incomplete) throw Mb;
            Ab = bb.slice(Mb.lastPosition), ab = Mb.values
          }
          return ab
        };
        return "function" === typeof bb[Symbol.iterator] ? function*() {
          for (const ab of bb) yield* Mb(ab)
        }() : "function" === typeof bb[Symbol.asyncIterator] ? async function*() {
          for await (const ab of bb) yield* Mb(ab)
        }(): void 0
      },
      bU = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (bb && "object" === typeof bb) {
          if ("function" === typeof bb[Symbol.iterator]) return function*(bb, ab) {
            const Ub = new Ga(ab);
            for (const Ab of bb) yield Ub.pack(Ab)
          }(bb, ab);
          if ("function" === typeof bb.then || "function" === typeof bb[Symbol.asyncIterator]) return async function*(bb, ab) {
            const Ub = new Ga(ab);
            for await (const Ab of bb) yield Ub.pack(Ab)
          }(bb, ab);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      aU = !1,
      UU = !0
  },
  8695: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      $changes: () => Rb,
      $childType: () => kb,
      $decoder: () => vb,
      $deleteByIndex: () => Xb,
      $encoder: () => eb,
      $filter: () => Lb,
      $getByIndex: () => Pb,
      $numFields: () => Nb,
      $refId: () => Yb,
      $track: () => Bb,
      $values: () => xb,
      ArraySchema: () => UA,
      Callbacks: () => UM,
      ChangeTree: () => IU,
      CollectionSchema: () => TA,
      Decoder: () => VA,
      Encoder: () => wA,
      FieldBuilder: () => BA,
      MapSchema: () => MA,
      Metadata: () => Va,
      OPERATION: () => Mb,
      Reflection: () => nA,
      ReflectionField: () => cA,
      ReflectionType: () => JA,
      Root: () => dA,
      Schema: () => HA,
      SetSchema: () => EA,
      StateCallbackStrategy: () => aM,
      StateView: () => qA,
      StreamSchema: () => YA,
      TypeContext: () => oa,
      createPool: () => MM,
      decode: () => Da,
      decodeKeyValueOperation: () => cU,
      decodeSchemaOperation: () => OU,
      defineCustomTypes: () => fa,
      defineTypes: () => pA,
      deprecated: () => fA,
      dumpChanges: () => WA,
      encode: () => aa,
      encodeArray: () => rU,
      encodeIndexedEntry: () => qU,
      encodeKeyValueOperation: () => uU,
      encodeMapEntry: () => QU,
      encodeSchemaOperation: () => GU,
      tX: () => RA,
      fullStateOnly: () => DA,
      getDecoderStateCallbacks: () => SA,
      getEncodeDescriptor: () => bU,
      getRawChangesCallback: () => bM,
      isBuilder: () => eA,
      patchOnly: () => ZA,
      registerType: () => ia,
      schema: () => NA,
      t: () => XA,
      type: () => zA,
      unreliable: () => yA,
      view: () => kA
    });
    const Ab = 255;
    var Mb;

    function Tb(bb) {
      Object.defineProperty(bb, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(bb) {
      bb[bb.ADD = 128] = "ADD", bb[bb.REPLACE = 0] = "REPLACE", bb[bb.DELETE = 64] = "DELETE", bb[bb.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", bb[bb.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", bb[bb.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", bb[bb.CLEAR = 10] = "CLEAR", bb[bb.REVERSE = 15] = "REVERSE", bb[bb.MOVE = 32] = "MOVE", bb[bb.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", bb[bb.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Mb || (Mb = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Eb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const bb = "colyseus.symbolRegistry",
        ab = Eb[bb] || (Eb[bb] = Object.create(null));
      Symbol.for = function(bb) {
        return ab[bb] || (ab[bb] = Symbol(bb))
      }, Symbol.keyFor = function(bb) {
        for (const Ub in ab)
          if (ab[Ub] === bb) return Ub
      }
    }
    const Yb = Symbol.for("$refId"),
      Bb = "~track",
      eb = "~encoder",
      vb = "~decoder",
      Lb = "~filter",
      Pb = "~getByIndex",
      Xb = "~deleteByIndex",
      jb = "~resyncPrune",
      Rb = Symbol.for("$changes"),
      kb = Symbol.for("$childType"),
      yb = Symbol.for("$proxyTarget"),
      Zb = "~onEncodeEnd",
      Db = "~reset",
      zb = "~onDecodeEnd",
      xb = Symbol.for("$values"),
      ib = "~builder",
      fb = "~descriptors",
      mb = "~__encodeDescriptor",
      pb = "~encoders",
      Nb = "~__numFields",
      Wb = "~__refTypeFieldIndexes",
      Hb = "~__viewFieldIndexes",
      Ib = "$__fieldIndexesByViewTag",
      db = "~__unreliableFieldIndexes",
      Fb = "~__patchOnlyFieldIndexes",
      hb = "~__fullSyncSkipIndexes",
      Gb = "~__fullStateOnlyFieldIndexes",
      Qb = "~__streamFieldIndexes",
      qb = "~__streamPriorities";
    let ub;
    try {
      ub = new TextEncoder
    } catch (TM) {}
    const rb = new ArrayBuffer(8),
      Kb = new Int32Array(rb),
      ob = new Float32Array(rb),
      lb = new Float64Array(rb),
      tb = new BigInt64Array(rb),
      wb = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(bb, ab) {
        for (var Ub = 0, Ab = 0, Mb = 0, Tb = bb.length; Mb < Tb; Mb++)(Ub = bb.charCodeAt(Mb)) < 128 ? Ab += 1 : Ub < 2048 ? Ab += 2 : Ub < 55296 || Ub >= 57344 ? Ab += 3 : (Mb++, Ab += 4);
        return Ab
      };

    function sb(bb, ab, Ub) {
      for (var Ab = 0, Mb = 0, Tb = ab.length; Mb < Tb; Mb++)(Ab = ab.charCodeAt(Mb)) < 128 ? bb[Ub.offset++] = Ab : Ab < 2048 ? (bb[Ub.offset] = 192 | Ab >> 6, bb[Ub.offset + 1] = 128 | 63 & Ab, Ub.offset += 2) : Ab < 55296 || Ab >= 57344 ? (bb[Ub.offset] = 224 | Ab >> 12, bb[Ub.offset + 1] = 128 | Ab >> 6 & 63, bb[Ub.offset + 2] = 128 | 63 & Ab, Ub.offset += 3) : (Mb++, Ab = 65536 + ((1023 & Ab) << 10 | 1023 & ab.charCodeAt(Mb)), bb[Ub.offset] = 240 | Ab >> 18, bb[Ub.offset + 1] = 128 | Ab >> 12 & 63, bb[Ub.offset + 2] = 128 | Ab >> 6 & 63, bb[Ub.offset + 3] = 128 | 63 & Ab, Ub.offset += 4)
    }

    function gb(bb, ab, Ub) {
      bb[Ub.offset++] = 255 & ab
    }

    function Cb(bb, ab, Ub) {
      bb[Ub.offset++] = 255 & ab, bb[Ub.offset++] = ab >> 8 & 255
    }

    function Vb(bb, ab, Ub) {
      bb[Ub.offset++] = 255 & ab, bb[Ub.offset++] = ab >> 8 & 255
    }

    function Ob(bb, ab, Ub) {
      bb[Ub.offset++] = 255 & ab, bb[Ub.offset++] = ab >> 8 & 255, bb[Ub.offset++] = ab >> 16 & 255, bb[Ub.offset++] = ab >> 24 & 255
    }

    function cb(bb, ab, Ub) {
      const Ab = ab >> 24,
        Mb = ab >> 16,
        Tb = ab >> 8,
        Eb = ab;
      bb[Ub.offset++] = 255 & Eb, bb[Ub.offset++] = 255 & Tb, bb[Ub.offset++] = 255 & Mb, bb[Ub.offset++] = 255 & Ab
    }

    function Jb(bb, ab, Ub) {
      const Ab = Math.floor(ab / Math.pow(2, 32));
      cb(bb, ab >>> 0, Ub), cb(bb, Ab, Ub)
    }

    function nb(bb, ab, Ub) {
      const Ab = ab / Math.pow(2, 32) | 0;
      cb(bb, ab >>> 0, Ub), cb(bb, Ab, Ub)
    }

    function Sb(bb, ab, Ub) {
      ob[0] = ab, Ob(bb, Kb[0], Ub)
    }

    function ba(bb, ab, Ub) {
      lb[0] = ab, Ob(bb, Kb[0], Ub), Ob(bb, Kb[1], Ub)
    }
    const aa = {
        int8: gb,
        uint8: function(bb, ab, Ub) {
          bb[Ub.offset++] = 255 & ab
        },
        int16: Cb,
        uint16: Vb,
        int32: Ob,
        uint32: cb,
        int64: Jb,
        uint64: nb,
        bigint64: function(bb, ab, Ub) {
          tb[0] = BigInt.asIntN(64, ab), Ob(bb, Kb[0], Ub), Ob(bb, Kb[1], Ub)
        },
        biguint64: function(bb, ab, Ub) {
          tb[0] = BigInt.asIntN(64, ab), Ob(bb, Kb[0], Ub), Ob(bb, Kb[1], Ub)
        },
        float32: Sb,
        float64: ba,
        boolean: function(bb, ab, Ub) {
          bb[Ub.offset++] = ab ? 1 : 0
        },
        string: function(bb, ab, Ub) {
          ab || (ab = "");
          let Ab = wb(ab, "utf8"),
            Mb = 0;
          if (Ab < 32) bb[Ub.offset++] = 160 | Ab, Mb = 1;
          else if (Ab < 256) bb[Ub.offset++] = 217, bb[Ub.offset++] = Ab, Mb = 2;
          else if (Ab < 65536) bb[Ub.offset++] = 218, Vb(bb, Ab, Ub), Mb = 3;
          else {
            if (!(Ab < 4294967296)) throw new Error("String too long");
            bb[Ub.offset++] = 219, cb(bb, Ab, Ub), Mb = 5
          }
          return sb(bb, ab, Ub), Mb + Ab
        },
        number: function bb(ab, Ub, Ab) {
          return isNaN(Ub) ? bb(ab, 0, Ab) : isFinite(Ub) ? Ub !== (0 | Ub) ? Math.abs(Ub) <= 34028235e31 && (ob[0] = Ub, Math.abs(Math.abs(ob[0]) - Math.abs(Ub)) < 1e-4) ? (ab[Ab.offset++] = 202, Sb(ab, Ub, Ab), 5) : (ab[Ab.offset++] = 203, ba(ab, Ub, Ab), 9) : Ub >= 0 ? Ub < 128 ? (ab[Ab.offset++] = 255 & Ub, 1) : Ub < 256 ? (ab[Ab.offset++] = 204, ab[Ab.offset++] = 255 & Ub, 2) : Ub < 65536 ? (ab[Ab.offset++] = 205, Vb(ab, Ub, Ab), 3) : Ub < 4294967296 ? (ab[Ab.offset++] = 206, cb(ab, Ub, Ab), 5) : (ab[Ab.offset++] = 207, nb(ab, Ub, Ab), 9) : Ub >= -32 ? (ab[Ab.offset++] = 224 | Ub + 32, 1) : Ub >= -128 ? (ab[Ab.offset++] = 208, gb(ab, Ub, Ab), 2) : Ub >= -32768 ? (ab[Ab.offset++] = 209, Cb(ab, Ub, Ab), 3) : Ub >= -2147483648 ? (ab[Ab.offset++] = 210, Ob(ab, Ub, Ab), 5) : (ab[Ab.offset++] = 211, Jb(ab, Ub, Ab), 9) : bb(ab, Ub > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Ab)
        },
        utf8Write: sb,
        utf8Length: wb
      },
      Ua = new ArrayBuffer(8),
      Aa = new Int32Array(Ua),
      Ma = new Float32Array(Ua),
      Ta = new Float64Array(Ua),
      Ea = new BigUint64Array(Ua),
      Ya = new BigInt64Array(Ua);

    function Ba(bb, ab, Ub) {
      Ub > bb.length - ab.offset && (Ub = bb.length - ab.offset);
      for (var Ab = "", Mb = 0, Tb = ab.offset, Eb = ab.offset + Ub; Tb < Eb; Tb++) {
        var Yb = bb[Tb];
        if (0 !== (128 & Yb))
          if (192 !== (224 & Yb))
            if (224 !== (240 & Yb)) {
              if (240 !== (248 & Yb)) {
                console.error("decode.utf8Read(): Invalid byte " + Yb + " at offset " + Tb + ". Skip to end of string: " + (ab.offset + Ub));
                break
              }(Mb = (7 & Yb) << 18 | (63 & bb[++Tb]) << 12 | (63 & bb[++Tb]) << 6 | 63 & bb[++Tb]) >= 65536 ? (Mb -= 65536, Ab += String.fromCharCode(55296 + (Mb >>> 10), 56320 + (1023 & Mb))) : Ab += String.fromCharCode(Mb)
            } else Ab += String.fromCharCode((15 & Yb) << 12 | (63 & bb[++Tb]) << 6 | 63 & bb[++Tb]);
        else Ab += String.fromCharCode((31 & Yb) << 6 | 63 & bb[++Tb]);
        else Ab += String.fromCharCode(Yb)
      }
      return ab.offset += Ub, Ab
    }

    function ea(bb, ab) {
      return va(bb, ab) << 24 >> 24
    }

    function va(bb, ab) {
      return bb[ab.offset++]
    }

    function La(bb, ab) {
      return Pa(bb, ab) << 16 >> 16
    }

    function Pa(bb, ab) {
      return bb[ab.offset++] | bb[ab.offset++] << 8
    }

    function Xa(bb, ab) {
      return bb[ab.offset++] | bb[ab.offset++] << 8 | bb[ab.offset++] << 16 | bb[ab.offset++] << 24
    }

    function ja(bb, ab) {
      return Xa(bb, ab) >>> 0
    }

    function Ra(bb, ab) {
      return Aa[0] = Xa(bb, ab), Ma[0]
    }

    function ka(bb, ab) {
      return Aa[0] = Xa(bb, ab), Aa[1] = Xa(bb, ab), Ta[0]
    }

    function ya(bb, ab) {
      const Ub = ja(bb, ab);
      return Xa(bb, ab) * Math.pow(2, 32) + Ub
    }

    function Za(bb, ab) {
      const Ub = ja(bb, ab);
      return ja(bb, ab) * Math.pow(2, 32) + Ub
    }
    const Da = {
        utf8Read: Ba,
        int8: ea,
        uint8: va,
        int16: La,
        uint16: Pa,
        int32: Xa,
        uint32: ja,
        float32: Ra,
        float64: ka,
        int64: ya,
        uint64: Za,
        bigint64: function(bb, ab) {
          return Aa[0] = Xa(bb, ab), Aa[1] = Xa(bb, ab), Ya[0]
        },
        biguint64: function(bb, ab) {
          return Aa[0] = Xa(bb, ab), Aa[1] = Xa(bb, ab), Ea[0]
        },
        boolean: function(bb, ab) {
          return va(bb, ab) > 0
        },
        string: function(bb, ab) {
          const Ub = bb[ab.offset++];
          let Ab;
          return Ub < 192 ? Ab = 31 & Ub : 217 === Ub ? Ab = va(bb, ab) : 218 === Ub ? Ab = Pa(bb, ab) : 219 === Ub && (Ab = ja(bb, ab)), Ba(bb, ab, Ab)
        },
        number: function(bb, ab) {
          const Ub = bb[ab.offset++];
          return Ub < 128 ? Ub : 202 === Ub ? Ra(bb, ab) : 203 === Ub ? ka(bb, ab) : 204 === Ub ? va(bb, ab) : 205 === Ub ? Pa(bb, ab) : 206 === Ub ? ja(bb, ab) : 207 === Ub ? Za(bb, ab) : 208 === Ub ? ea(bb, ab) : 209 === Ub ? La(bb, ab) : 210 === Ub ? Xa(bb, ab) : 211 === Ub ? ya(bb, ab) : Ub > 223 ? -1 * (255 - Ub + 1) : void 0
        },
        stringCheck: function(bb, ab) {
          const Ub = bb[ab.offset];
          return Ub < 192 && Ub > 160 || 217 === Ub || 218 === Ub || 219 === Ub
        }
      },
      za = {},
      xa = new Map;

    function ia(bb, ab) {
      ab.constructor && (Object.prototype.hasOwnProperty.call(ab, "constructor") && null == ab.constructor[Symbol.metadata] && Tb(ab.constructor), xa.set(ab.constructor, bb), za[bb] = ab), ab.encode && (aa[bb] = ab.encode), ab.decode && (Da[bb] = ab.decode)
    }

    function fa(bb) {
      for (const ab in bb) ia(ab, bb[ab]);
      return bb => zA(bb)
    }
    const ma = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function pa() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Na(bb) {
      return bb._stream ??= pa()
    }

    function Wa(bb, ab, Ub) {
      0 === ab.activeViews.size && Na(bb).broadcastPending.add(Ub)
    }

    function Ha(bb, ab, Ub, Ab) {
      const Tb = bb._stream;
      if (void 0 === Tb) return !0;
      let Eb = !1;
      return Tb.broadcastPending.delete(Ab) ? Eb = !0 : Tb.sentBroadcast.delete(Ab) && Tb.broadcastDeletes.add(Ab), ab.forEachActiveView((bb => {
        const ab = Tb.pendingByView.get(bb.id);
        if (ab?.has(Ab)) return ab.delete(Ab), void(Eb = !0);
        const Yb = Tb.sentByView.get(bb.id);
        if (Yb?.has(Ab)) {
          Yb.delete(Ab);
          let ab = bb.changes.get(Ub);
          void 0 === ab && (ab = new Map, bb.changes.set(Ub, ab)), ab.set(Ab, Mb.DELETE)
        }
      })), Eb
    }

    function Ia(bb, ab) {
      const Ub = bb._stream?.pendingByView;
      if (void 0 === Ub) return !1;
      for (const [Ab, Mb] of Ub)
        if (Mb.size > 0 && void 0 !== ab.activeViews.get(Ab)?.deref()) return !0;
      return !1
    }

    function da(bb) {
      const ab = bb._stream;
      return void 0 !== ab && (ab.broadcastPending.size > 0 || ab.broadcastDeletes.size > 0)
    }

    function Fa(bb, ab, Ub) {
      const Ab = Na(bb);
      let Mb = Ab.pendingByView.get(ab);
      void 0 === Mb && (Mb = new Set, Ab.pendingByView.set(ab, Mb)), Mb.add(Ub)
    }

    function ha(bb, ab) {
      const Ub = bb._stream;
      void 0 !== Ub && (Ub.pendingByView.delete(ab), Ub.sentByView.delete(ab), Ub.priorityByView?.delete(ab))
    }
    const Ga = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function Qa(bb) {
      if (null == bb || "object" !== typeof bb) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: ab,
        max: Ub
      } = bb;
      if ("number" !== typeof ab || "number" !== typeof Ub || !(Ub > ab) || !Number.isFinite(ab) || !Number.isFinite(Ub)) throw new Error(`t.quantized(): require finite min < max (got min=${ab}, max=${Ub}).`);
      const Ab = bb.bits ?? 16;
      if (8 !== Ab && 16 !== Ab && 32 !== Ab) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Ab}).`);
      const Mb = bb.mode ?? "clamp";
      if ("clamp" !== Mb && "wrap" !== Mb) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Mb)}).`);
      const Tb = "wrap" === Mb,
        Eb = Math.pow(2, Ab);
      return {
        min: ab,
        max: Ub,
        bits: Ab,
        wrap: Tb,
        wire: Ga[Ab],
        range: Ub - ab,
        span: Tb ? Eb : ab === -Ub ? Eb - 2 : Eb - 1
      }
    }

    function qa(bb) {
      return null !== bb && "object" === typeof bb && void 0 !== bb.quantized
    }

    function ua(bb, ab) {
      if (bb.wrap) {
        if (!Number.isFinite(ab)) return 0;
        const Ub = bb.range;
        let Ab = (ab - bb.min) % Ub;
        Ab < 0 && (Ab += Ub);
        const Mb = bb.span;
        return Math.floor(Ab / Ub * Mb + .5) % Mb
      }
      if (ab !== ab) return 0;
      const Ub = ab < bb.min ? bb.min : ab > bb.max ? bb.max : ab;
      return Math.floor((Ub - bb.min) / bb.range * bb.span + .5)
    }

    function ra(bb, ab) {
      return bb.min + ab / bb.span * bb.range
    }

    function Ka(bb) {
      const ab = aa[bb.wire];
      return (Ub, Ab, Mb) => ab(Ub, ua(bb, Ab), Mb)
    }
    class oa {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(bb) {
        const ab = Object.getPrototypeOf(bb);
        if (ab !== HA) {
          let Ub = oa.inheritedTypes.get(ab);
          Ub || (Ub = new Set, oa.inheritedTypes.set(ab, Ub)), Ub.add(bb)
        }
      }
      static cache(bb) {
        let ab = oa.cachedContexts.get(bb);
        return ab || (ab = new oa(bb), oa.cachedContexts.set(bb, ab)), ab
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(bb) && (this.types[ab] = bb, null == bb[Symbol.metadata] && Va.initialize(bb), this.schemas.set(bb, ab), !0)
      }
      getTypeId(bb) {
        return this.schemas.get(bb)
      }
      discoverTypes(bb) {
        if (!this.add(bb)) return;
        oa.inheritedTypes.get(bb)?.forEach((bb => {
          this.discoverTypes(bb)
        }));
        let ab = bb;
        for (;
          (ab = Object.getPrototypeOf(ab)) && ab !== HA && ab !== Function.prototype;) this.discoverTypes(ab);
        const Ub = bb[Symbol.metadata];
        (Ub[Hb] || Ub[Qb]) && (this.hasFilters = !0);
        for (const Ab in Ub) {
          const bb = Ub[Ab].type;
          if ("string" !== typeof bb && !qa(bb))
            if ("function" === typeof bb) this.discoverTypes(bb);
            else {
              const ab = Object.values(bb)[0];
              if ("string" === typeof ab) continue;
              this.discoverTypes(ab)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function la(bb) {
      const ab = wa(bb);
      return ab ? {
        complexTypeKlass: za[ab],
        childType: bb[ab]
      } : {
        complexTypeKlass: !1,
        childType: bb
      }
    }

    function ta(bb, ab) {
      const Ub = sa(bb),
        Ab = wa(Ub),
        Mb = Ab && wa(Ub[Ab]);
      if (Mb) throw new Error(`${ab?`${ab}: `:""}@colyseus/schema: nested collections are not supported ("${Ab}" of "${Mb}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Mb} in a Schema class.`);
      return Ub
    }

    function wa(bb) {
      return "object" === typeof bb && null !== bb ? Object.keys(bb).find((bb => void 0 !== za[bb])) : void 0
    }

    function sa(bb) {
      if ("object" !== typeof bb || null === bb) return bb;
      if (Array.isArray(bb)) return {
        array: sa(bb[0])
      };
      const ab = function(bb) {
        const ab = Object.keys(bb),
          Ub = ab.filter((bb => /\d+/.test(bb)));
        if (Ub.length > 0 && Ub.length === ab.length / 2 && bb[bb[Ub[0]]] == Ub[0]) return "number";
        if (ab.length > 0 && ab.every((ab => bb[ab] === ab))) return "string"
      }(bb);
      if (ab) return ab;
      if (qa(bb)) return "string" === typeof bb.quantized.wire ? bb : {
        quantized: Qa(bb.quantized)
      };
      if (void 0 !== bb.type) return sa(bb.type);
      const Ub = wa(bb);
      return Ub && (bb[Ub] = sa(bb[Ub])), bb
    }
    const ga = [Wb, db, Fb, hb, Gb, Qb, pb];

    function Ca(bb, ab, Ub) {
      bb[ab] || Object.defineProperty(bb, ab, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), bb[ab].push(Ub)
    }
    const Va = {
        addField(bb, ab, Ub, Ab, Mb) {
          if (ab >= 63) throw new Error(`Can't define field '${Ub}'.\nSchema instances may only have up to 63 fields.`);
          bb[ab] = Object.assign(bb[ab] || {}, {
            type: Ab,
            index: ab,
            name: Ub
          }), Object.defineProperty(bb, fb, {
            value: bb[fb] || {},
            enumerable: !1,
            configurable: !0
          }), bb[fb][Ub] = Mb || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(bb, Nb, {
            value: ab,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(bb, Ub, {
            value: ab,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof bb[ab].type || qa(bb[ab].type) || (void 0 === bb[Wb] && Object.defineProperty(bb, Wb, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), bb[Wb].push(ab));
          const Tb = bb[ab].type;
          if (Tb && "object" === typeof Tb && void 0 !== Tb.stream) {
            if (void 0 !== Tb.array) throw new Error(ma);
            bb[ab].stream = !0, bb[Qb] || Object.defineProperty(bb, Qb, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), bb[Qb].includes(ab) || bb[Qb].push(ab);
            const Mb = Ab?.priority;
            "function" === typeof Mb && Va.setStreamPriority(bb, Ub, Mb)
          }
        },
        setTag(bb, ab, Ub) {
          const Ab = bb[ab];
          if (bb[Ab].tag = Ub, bb[Hb] || (Object.defineProperty(bb, Hb, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(bb, Ib, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), bb[Hb].push(Ab), Ub < 0) bb[Ib][Ub] || (bb[Ib][Ub] = []), bb[Ib][Ub].push(Ab);
          else
            for (let Mb = Ub; Mb > 0; Mb &= Mb - 1) {
              const ab = Mb & -Mb;
              bb[Ib][ab] || (bb[Ib][ab] = []), bb[Ib][ab].push(Ab)
            }
        },
        setUnreliable(bb, ab) {
          const Ub = bb[ab];
          if ("string" !== typeof bb[Ub].type) throw new Error(`@unreliable cannot be applied to ref-type field "${ab}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          bb[Ub].unreliable = !0, bb[db] || Object.defineProperty(bb, db, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[db].push(Ub)
        },
        setPatchOnly(bb, ab) {
          const Ub = bb[ab];
          if (bb[Ub].fullStateOnly) throw new Error(`field "${ab}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          bb[Ub].patchOnly = !0, Ca(bb, Fb, Ub), Ca(bb, hb, Ub)
        },
        setDeprecated(bb, ab) {
          const Ub = bb[ab];
          bb[Ub].deprecated = !0, Ca(bb, hb, Ub), Object.defineProperty(bb, Ub, {
            value: bb[Ub],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(bb, ab) {
          const Ub = bb[ab];
          if (bb[Ub].patchOnly) throw new Error(`field "${ab}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          bb[Ub].fullStateOnly = !0, Ca(bb, Gb, Ub)
        },
        setStream(bb, ab) {
          const Ub = bb[ab];
          bb[Ub].stream = !0, bb[Qb] || Object.defineProperty(bb, Qb, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[Qb].push(Ub)
        },
        setStreamPriority(bb, ab, Ub) {
          const Ab = bb[ab];
          bb[qb] || Object.defineProperty(bb, qb, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[qb][Ab] = Ub
        },
        getStreamPriority: (bb, ab) => bb?.[qb]?.[ab],
        defineField(bb, ab, Ub, Ab, Mb) {
          const Tb = ta(Mb, `${bb.name}.${Ab}`),
            {
              complexTypeKlass: Eb,
              childType: Yb
            } = la(Tb);
          Va.addField(ab, Ub, Ab, Tb, iA(Ab, Ub, Yb, Eb)), ab[fb][Ab] && Object.defineProperty(bb.prototype, Ab, ab[fb][Ab]), ("string" === typeof Tb || qa(Tb)) && (ab[pb] || Object.defineProperty(ab, pb, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), ab[pb][Ub] = "string" === typeof Tb ? aa[Tb] : Ka(Tb.quantized))
        },
        setFields(bb, ab) {
          const Ub = bb.prototype.constructor;
          oa.register(Ub);
          const Ab = Object.getPrototypeOf(Ub),
            Mb = Ab && Ab[Symbol.metadata],
            Tb = Va.initialize(Ub);
          Ub[Bb] || (Ub[Bb] = HA[Bb]), Ub[eb] || (Ub[eb] = HA[eb]), Ub[vb] || (Ub[vb] = HA[vb]), Ub.prototype.toJSON || (Ub.prototype.toJSON = HA.prototype.toJSON);
          let Eb = Tb[Nb] ?? (Mb && Mb[Nb]) ?? -1;
          Eb++, Tb[pb] || Object.defineProperty(Tb, pb, {
            value: Mb?.[pb] ? [...Mb[pb]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const Yb in ab) {
            if (void 0 !== Tb[Yb]) throw new Error(`@colyseus/schema: Duplicate '${Yb}' definition on '${Ub.name||"(anonymous)"}'.`);
            Va.defineField(Ub, Tb, Eb, Yb, ab[Yb]), Eb++
          }
          return bb
        },
        isDeprecated: (bb, ab) => !0 === bb[ab].deprecated,
        initialize(bb) {
          const ab = Object.getPrototypeOf(bb),
            Ub = ab[Symbol.metadata];
          let Ab = bb[Symbol.metadata] ?? Object.create(null);
          if (ab !== HA && Ab === Ub && (Ab = Object.create(null), Ub)) {
            Object.setPrototypeOf(Ab, Ub), Object.defineProperty(Ab, Nb, {
              value: Ub[Nb],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== Ub[Hb] && (Object.defineProperty(Ab, Hb, {
              value: [...Ub[Hb]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Ab, Ib, {
              value: {
                ...Ub[Ib]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const bb of ga) {
              const ab = Ub[bb];
              void 0 !== ab && Object.defineProperty(Ab, bb, {
                value: [...ab],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Ab, fb, {
              value: {
                ...Ub[fb]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(bb, Symbol.metadata, {
            value: Ab,
            writable: !1,
            configurable: !0
          }), Ab
        },
        isValidInstance: bb => bb.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(bb.constructor[Symbol.metadata], Nb),
        getFields(bb) {
          const ab = bb[Symbol.metadata],
            Ub = {};
          for (let Ab = 0; Ab <= ab[Nb]; Ab++) Ub[ab[Ab].name] = ab[Ab].type;
          return Ub
        },
        hasViewTagAtIndex: (bb, ab) => bb?.[Hb]?.includes(ab),
        hasUnreliableAtIndex: (bb, ab) => bb?.[db]?.includes(ab),
        hasPatchOnlyAtIndex: (bb, ab) => bb?.[Fb]?.includes(ab),
        hasFullStateOnlyAtIndex: (bb, ab) => bb?.[Gb]?.includes(ab),
        hasStreamAtIndex: (bb, ab) => bb?.[Qb]?.includes(ab)
      },
      Oa = (bb, ab, Ub) => bb(ab, Ub);
    class ca {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(bb) {
        this.ops = new Uint8Array(Math.max(bb + 1, 1))
      }
      record(bb, ab) {
        const Ub = this.ops[bb];
        0 === Ub ? this.ops[bb] = ab : (Ub === Mb.DELETE || Ub === Mb.ADD && ab === Mb.DELETE_AND_ADD) && (this.ops[bb] = Mb.DELETE_AND_ADD), bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      recordDelete(bb, ab) {
        this.ops[bb] = ab, bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      recordRaw(bb, ab) {
        this.record(bb, ab)
      }
      operationAt(bb) {
        const ab = this.ops[bb];
        return 0 === ab ? void 0 : ab
      }
      setOperationAt(bb, ab) {
        this.ops[bb] = ab
      }
      forEach(bb) {
        this.forEachWithCtx(bb, Oa)
      }
      forEachWithCtx(bb, ab) {
        let Ub = this.dirtyLow,
          Ab = this.dirtyHigh;
        const Mb = this.ops;
        for (; 0 !== Ub;) {
          const Ab = Ub & -Ub,
            Tb = 31 - Math.clz32(Ab);
          Ub ^= Ab, ab(bb, Tb, Mb[Tb])
        }
        for (; 0 !== Ab;) {
          const Ub = Ab & -Ab,
            Tb = 31 - Math.clz32(Ub) + 32;
          Ab ^= Ub, ab(bb, Tb, Mb[Tb])
        }
      }
      size() {
        return na(this.dirtyLow) + na(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Ja {
      yj = new Map;
      pureOps = [];
      record(bb, ab) {
        const Ub = this.yj.get(bb);
        void 0 === Ub ? this.yj.set(bb, ab) : (Ub === Mb.DELETE || Ub === Mb.ADD && ab === Mb.DELETE_AND_ADD) && this.yj.set(bb, Mb.DELETE_AND_ADD)
      }
      recordDelete(bb, ab) {
        this.yj.set(bb, ab)
      }
      recordRaw(bb, ab) {
        this.yj.set(bb, ab)
      }
      recordPure(bb) {
        this.pureOps.push([this.yj.size, bb])
      }
      operationAt(bb) {
        return this.yj.get(bb)
      }
      setOperationAt(bb, ab) {
        this.yj.has(bb) && this.yj.set(bb, ab)
      }
      forEach(bb) {
        this.forEachWithCtx(bb, Oa)
      }
      forEachWithCtx(bb, ab) {
        const Ub = this.pureOps;
        if (Ub.length > 0) {
          let Ab = 0,
            Mb = 0;
          for (const [Tb, Eb] of this.yj) {
            for (; Ab < Ub.length && Ub[Ab][0] <= Mb;) {
              const Mb = Ub[Ab++][1];
              ab(bb, -Mb, Mb)
            }
            ab(bb, Tb, Eb), Mb++
          }
          for (; Ab < Ub.length;) {
            const Mb = Ub[Ab++][1];
            ab(bb, -Mb, Mb)
          }
        } else
          for (const [Ab, Mb] of this.yj) ab(bb, Ab, Mb)
      }
      size() {
        return this.yj.size + this.pureOps.length
      }
      has() {
        return this.yj.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.yj.clear(), this.pureOps.length = 0
      }
      shift(bb) {
        const ab = new Map;
        for (const [Ub, Ab] of this.yj) ab.set(Ub + bb, Ab);
        this.yj = ab
      }
    }

    function na(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }

    function Sa(bb) {
      if (void 0 === bb) return 0;
      let ab = 0;
      for (let Ub = 0, Ab = bb.length; Ub < Ab; Ub++) {
        const Ab = bb[Ub];
        Ab < 32 && (ab |= 1 << Ab)
      }
      return ab
    }

    function bU(bb) {
      const ab = bb.constructor;
      if (Object.prototype.hasOwnProperty.call(ab, mb)) return ab[mb];
      const Ub = ab[Symbol.metadata],
        Ab = Va.isValidInstance(bb),
        Mb = (Ub?.[Hb]?.length ?? 0) > 0,
        Tb = function(bb) {
          const ab = [],
            Ub = [],
            Ab = [],
            Mb = [],
            Tb = bb?.[Nb];
          if (void 0 === Tb) return {
            names: ab,
            types: Ub,
            tags: Ab,
            encoders: Mb
          };
          const Eb = bb[pb];
          for (let Yb = 0; Yb <= Tb; Yb++) {
            const Tb = bb[Yb];
            void 0 !== Tb ? (ab[Yb] = Tb.name, Ub[Yb] = Tb.type, Ab[Yb] = Tb.tag, Mb[Yb] = Eb?.[Yb]) : (ab[Yb] = void 0, Ub[Yb] = void 0, Ab[Yb] = void 0, Mb[Yb] = void 0)
          }
          return {
            names: ab,
            types: Ub,
            tags: Ab,
            encoders: Mb
          }
        }(Ub),
        Eb = Ab && !Mb ? void 0 : ab[Lb],
        Yb = {
          encoder: ab[eb],
          filter: Eb,
          metadata: Ub,
          isSchema: Ab,
          filterBitmask: Ab ? Sa(Ub?.[Hb]) : 0,
          hasAnyFullStateOnly: (Ub?.[Gb]?.length ?? 0) > 0,
          hasAnyUnreliable: (Ub?.[db]?.length ?? 0) > 0,
          hasAnyStream: (Ub?.[Qb]?.length ?? 0) > 0,
          hasAnyView: Mb,
          fullStateOnlyBitmask: Sa(Ub?.[Gb]),
          unreliableBitmask: Sa(Ub?.[db]),
          streamBitmask: Sa(Ub?.[Qb]),
          names: Tb.names,
          types: Tb.types,
          tags: Tb.tags,
          encoders: Tb.encoders
        };
      return Object.defineProperty(ab, mb, {
        value: Yb,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), Yb
    }

    function aU(bb, ab) {
      if (void 0 !== bb.parentRef && ab(bb.parentRef, bb._parentIndex)) return !0;
      for (let Ub = bb.extraParents; void 0 !== Ub; Ub = Ub.next)
        if (ab(Ub.ref, Ub.index)) return !0;
      return !1
    }
    const UU = (bb, ab) => {
        bb.isFieldUnreliable(ab) ? bb.ensureUnreliableRecorder().record(ab, Mb.ADD) : bb.record(ab, Mb.ADD)
      },
      AU = (bb, ab) => bb(ab);

    function MU(bb, ab, Ub) {
      const Ab = bb.refTarget;
      if (void 0 !== Ab[kb]) {
        if (bb.isPatchOnly) return;
        if (Array.isArray(Ab.items)) {
          const bb = Ab.items;
          for (let Ab = 0, Mb = bb.length; Ab < Mb; Ab++) void 0 !== bb[Ab] && Ub(ab, Ab)
        } else if (void 0 !== Ab.journal)
          for (const [bb, Mb] of Ab.journal.keyByIndex) Ab.$items.has(Mb) && Ub(ab, bb);
        else if (void 0 !== Ab.$items)
          for (const bb of Ab.$items.keys()) Ub(ab, bb)
      } else {
        const Mb = bb.metadata;
        if (!Mb) return;
        const Tb = Mb[Nb] ?? -1,
          Eb = Mb[hb],
          Yb = bb.encDescriptor.names;
        for (let bb = 0; bb <= Tb; bb++) {
          const Mb = Yb[bb];
          if (void 0 === Mb) continue;
          if (Eb && Eb.includes(bb)) continue;
          const Tb = Ab[Mb];
          void 0 !== Tb && null !== Tb && Ub(ab, bb)
        }
      }
    }

    function TU(bb, ab, Ub, Ab) {
      ! function(bb, ab, Ub) {
        if (!ab) return;
        const Ab = ab[Rb],
          Mb = !Ab._isSchema;
        let Tb;
        Mb ? (ab = Ab.parent, Ub = Ab.parentIndex, Tb = ab?.[Rb].metadata) : Tb = Ab.metadata;
        const Eb = (Tb?.[Fb]?.includes(Ub) ? mU : 0) | (Tb?.[Gb]?.includes(Ub) ? pU : 0),
          Yb = Ab.flags & HU | Eb,
          Bb = bb.flags;
        bb.flags = Bb | Yb;
        Yb & ~Bb & pU && (bb.reset(), bb.unreliableRecorder?.reset());
        const eb = bb.root?.types;
        if (!eb?.hasFilters) return;
        const vb = Tb?.[Hb]?.includes(Ub) ?? !1,
          Lb = Tb?.[Qb]?.includes(Ub) ?? !1,
          Pb = Ab.isFiltered || vb || Lb;
        if (bb.isFiltered = Pb, Lb && !Mb) {
          bb.isStreamCollection = !0;
          const ab = Na(bb.ref);
          if (void 0 === ab.priority) {
            const bb = Va.getStreamPriority(Tb, Ub);
            void 0 !== bb && (ab.priority = bb)
          }
          bb.root?.registerStream(bb.ref)
        }
        if (Pb) {
          const ab = YU(bb);
          bb.isVisibilitySharedWithParent = Ab.isFiltered && ab && !Lb && (!vb || Mb && Tb[Ub].tag !== jA)
        }
      }(bb, ab, Ub), bb.isFullStateOnly || (bb.has() && bb.root?.enqueueChangeTree(bb), bb.unreliableRecorder?.has() && bb.root?.enqueueUnreliable(bb), bb.has() || bb.unreliableRecorder?.has() || bb.root?.enqueueChangeTree(bb))
    }

    function EU(bb) {
      const ab = bb.pendingFilterRefresh;
      for (let Ub = 0; Ub < ab.length; Ub++) {
        const bb = ab[Ub];
        0 !== (bb.flags & WU) && BU(bb)
      }
      ab.length = 0
    }

    function YU(bb) {
      return bb._isSchema || "string" !== typeof bb.refTarget[kb]
    }

    function BU(bb) {
      bb.flags &= ~WU;
      const ab = bb.root;
      if (void 0 === ab || void 0 === bb.parentRef) return;
      const Ub = YU(bb);
      let Ab = XU(bb, bb.parentRef, bb._parentIndex, Ub);
      for (let Tb = bb.extraParents; void 0 !== Tb && Ab !== PU; Tb = Tb.next) Ab |= XU(bb, Tb.ref, Tb.index, Ub);
      if (0 === Ab) return;
      bb.isVisibilitySharedWithParent = 0 !== (Ab & LU);
      const Mb = 0 === (Ab & vU);
      Mb !== bb.isFiltered && (bb.isFiltered = Mb, Mb || bb.isFullStateOnly || (bb.forEachLiveWithCtx(bb, UU), bb.has() && ab.enqueueChangeTree(bb), bb.unreliableRecorder?.has() && ab.enqueueUnreliable(bb)), bb.forEachChildWithCtx(bb, jU))
    }
    const eU = 1,
      vU = 2,
      LU = 4,
      PU = eU | vU | LU;

    function XU(bb, ab, Ub, Ab) {
      const Mb = ab[Rb];
      if (Mb.root !== bb.root || ! function(bb, ab, Ub) {
          const Ab = ab.refTarget;
          if (ab.isArray) {
            const ab = Ab.items,
              Mb = ab[Ub];
            if (void 0 !== Mb && Mb[Rb] === bb) return !0;
            for (let Ub = 0, Ab = ab.length; Ub < Ab; Ub++) {
              const Ab = ab[Ub];
              if (void 0 !== Ab && Ab[Rb] === bb) return !0
            }
            return !1
          }
          const Mb = ab.getValue(Ub);
          return void 0 !== Mb && Mb[Rb] === bb
        }(bb, Mb, Ub)) return 0;
      Mb.flags & WU && BU(Mb);
      let Tb = eU;
      if (Mb._isSchema) {
        void 0 !== Mb.encDescriptor.tags[Ub] || Mb.isFieldStream(Ub) || (Mb.isFiltered ? Ab && (Tb |= LU) : Tb |= vU)
      } else if (Mb.isFiltered) {
        if (Ab && !Mb.isStreamCollection) {
          const bb = Mb.parent?.[Rb];
          (bb?._isSchema ? bb.encDescriptor.tags[Mb.parentIndex] : void 0) !== jA && (Tb |= LU)
        }
      } else Tb |= vU;
      return Tb
    }
    const jU = (bb, ab, Ub) => {
      BU(ab)
    };

    function RU(bb, ab, Ub, Ab) {
      if (bb.addParent(ab, Ab), !Ub) return;
      const Mb = Ub.add(bb);
      Ub !== bb.root && (bb.root = Ub, TU(bb, ab, Ab));
      const Tb = ab?.[Rb];
      if (void 0 !== Tb && void 0 !== Tb.subscribedViews && void 0 !== ab[kb] && function(bb, ab, Ub, Ab) {
          const Mb = bb.subscribedViews;
          if (void 0 === Mb) return;
          const Tb = bb.isStreamCollection,
            Eb = Tb ? bb.ref : void 0,
            Yb = Tb ? void 0 : Ub[Rb];
          for (let Bb = 0, eb = Mb.length; Bb < eb; Bb++) {
            let bb = Mb[Bb];
            for (; 0 !== bb;) {
              const Ub = bb & -bb;
              bb ^= Ub;
              const eb = 32 * Bb + (31 - Math.clz32(Ub)),
                vb = Ab.activeViews.get(eb),
                Lb = vb?.deref();
              void 0 !== Lb ? Tb ? Fa(Eb, eb, ab) : void 0 !== Yb && Lb.markVisible(Yb) : Mb[Bb] &= ~Ub
            }
          }
        }(Tb, Ab, bb.ref, Ub), Mb) {
        let ab = DU[zU];
        void 0 === ab && (ab = {
          parentRef: void 0,
          root: void 0
        }, DU[zU] = ab), ab.parentRef = bb.ref, ab.root = Ub, zU++, yU(bb, ab, xU), zU--
      }
    }

    function kU(bb, ab, Ub) {
      bb(ab, Ub)
    }

    function yU(bb, ab, Ub) {
      const Ab = bb.refTarget;
      if (Ab[kb]) {
        if ("string" !== typeof Ab[kb]) {
          const bb = Ab.items;
          if (void 0 !== bb)
            for (let Ab = 0, Mb = bb.length; Ab < Mb; Ab++) {
              const Mb = bb[Ab];
              Mb && Ub(ab, Mb[Rb], Ab)
            } else {
              const bb = Ab.$items,
                Mb = Ab._collectionIndexes;
              for (const Ab of bb.keys()) {
                const Tb = bb.get(Ab);
                Tb && Ub(ab, Tb[Rb], Mb?.[Ab] ?? Ab)
              }
            }
        }
      } else {
        const Mb = bb.metadata,
          Tb = Mb?.[Wb];
        if (!Tb) return;
        const Eb = bb.encDescriptor.names;
        for (let bb = 0, Yb = Tb.length; bb < Yb; bb++) {
          const Mb = Tb[bb],
            Yb = Ab[Eb[Mb]];
          Yb && Ub(ab, Yb[Rb], Mb)
        }
      }
    }

    function ZU(bb, ab, Ub) {
      ab.root !== bb ? ab.setRoot(bb) : bb.add(ab)
    }
    const DU = [];
    let zU = 0;

    function xU(bb, ab, Ub) {
      if (ab.root === bb.root) return bb.root.add(ab), void bb.root.moveNextToParent(ab);
      ab.setParent(bb.parentRef, bb.root, Ub)
    }

    function iU(bb, ab, Ub) {
      const Ab = (3 & Ub) << 3;
      return Ub < 4 ? bb >>> Ab & 255 : ab >>> Ab & 255
    }
    const fU = (bb, ab, Ub) => bb(ab, Ub);
    const mU = 16,
      pU = 32,
      NU = 128,
      WU = 256,
      HU = mU | pU;
    class IU {
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
        return 0 !== (this.flags & mU)
      }
      set isPatchOnly(bb) {
        this.flags = bb ? this.flags | mU : this.flags & ~mU
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & pU)
      }
      set isFullStateOnly(bb) {
        this.flags = bb ? this.flags | pU : this.flags & ~pU
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(bb) {
        this.flags = bb ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & NU)
      }
      set needsRestage(bb) {
        this.flags = bb ? this.flags | NU : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new ca(this.metadata?.[Nb] ?? 0) : new Ja), this.unreliableRecorder
      }
      isFieldUnreliable(bb) {
        const ab = this.encDescriptor;
        return !!ab.hasAnyUnreliable && (bb < 32 ? 0 !== (ab.unreliableBitmask & 1 << bb) : Va.hasUnreliableAtIndex(this.metadata, bb))
      }
      isFieldFullStateOnly(bb) {
        if (this.isFullStateOnly) return !0;
        const ab = this.encDescriptor;
        return !!ab.hasAnyFullStateOnly && (bb < 32 ? 0 !== (ab.fullStateOnlyBitmask & 1 << bb) : Va.hasFullStateOnlyAtIndex(this.metadata, bb))
      }
      isFieldStream(bb) {
        const ab = this.encDescriptor;
        return !!ab.hasAnyStream && (bb < 32 ? 0 !== (ab.streamBitmask & 1 << bb) : Va.hasStreamAtIndex(this.metadata, bb))
      }
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        this.ref = bb, this.refTarget = ab;
        const Ub = bU(bb);
        this.encDescriptor = Ub, this.metadata = Ub.metadata;
        const Ab = Ub.isSchema;
        if (this._isSchema = Ab, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Ab) {
          const bb = this.metadata?.[Nb] ?? 0;
          bb > 7 && (this.ops = new Uint8Array(bb + 1))
        } else this.collDirty = new Map
      }
      _opAt(bb) {
        const ab = this.ops;
        if (void 0 !== ab) return ab[bb];
        const Ub = (3 & bb) << 3;
        return bb < 4 ? this.opsLow >>> Ub & 255 : this.opsHigh >>> Ub & 255
      }
      _opPut(bb, ab) {
        const Ub = this.ops;
        if (void 0 !== Ub) return void(Ub[bb] = ab);
        const Ab = (3 & bb) << 3,
          Mb = ~(255 << Ab);
        bb < 4 ? this.opsLow = this.opsLow & Mb | ab << Ab : this.opsHigh = this.opsHigh & Mb | ab << Ab
      }
      _markDirty(bb) {
        bb < 32 ? this.dirtyLow |= 1 << bb : this.dirtyHigh |= 1 << bb - 32
      }
      record(bb, ab) {
        if (this._isSchema) {
          const Ub = this._opAt(bb);
          0 === Ub ? this._opPut(bb, ab) : (Ub === Mb.DELETE || Ub === Mb.ADD && ab === Mb.DELETE_AND_ADD) && this._opPut(bb, Mb.DELETE_AND_ADD), this._markDirty(bb)
        } else {
          const Ub = this.collDirty,
            Ab = Ub.get(bb);
          let Tb;
          Tb = void 0 === Ab ? ab : Ab === Mb.DELETE || Ab === Mb.ADD && ab === Mb.DELETE_AND_ADD ? Mb.DELETE_AND_ADD : Ab, Ub.set(bb, Tb)
        }
      }
      recordDelete(bb, ab) {
        this._isSchema ? (this._opPut(bb, ab), this._markDirty(bb)) : this.collDirty.set(bb, ab)
      }
      recordRaw(bb, ab) {
        this._isSchema ? (this._opPut(bb, ab), this._markDirty(bb)) : this.collDirty.set(bb, ab)
      }
      recordPure(bb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, bb])
      }
      operationAt(bb) {
        if (this._isSchema) {
          const ab = this._opAt(bb);
          return 0 === ab ? void 0 : ab
        }
        return this.collDirty.get(bb)
      }
      setOperationAt(bb, ab) {
        if (this._isSchema) this._opPut(bb, ab);
        else {
          const Ub = this.collDirty;
          Ub.has(bb) && Ub.set(bb, ab)
        }
      }
      forEach(bb) {
        this.forEachWithCtx(bb, fU)
      }
      forEachWithCtx(bb, ab) {
        if (this._isSchema) {
          let Ub = this.dirtyLow,
            Ab = this.dirtyHigh;
          const Mb = this.ops;
          if (void 0 !== Mb) {
            for (; 0 !== Ub;) {
              const Ab = Ub & -Ub,
                Tb = 31 - Math.clz32(Ab);
              Ub ^= Ab, ab(bb, Tb, Mb[Tb])
            }
            for (; 0 !== Ab;) {
              const Ub = Ab & -Ab,
                Tb = 31 - Math.clz32(Ub) + 32;
              Ab ^= Ub, ab(bb, Tb, Mb[Tb])
            }
          } else {
            const Ab = this.opsLow,
              Mb = this.opsHigh;
            for (; 0 !== Ub;) {
              const Tb = Ub & -Ub,
                Eb = 31 - Math.clz32(Tb);
              Ub ^= Tb, ab(bb, Eb, iU(Ab, Mb, Eb))
            }
          }
          return
        }
        const Ub = this.collDirty,
          Ab = this.collPureOps;
        if (void 0 !== Ab && Ab.length > 0) {
          let Mb = 0,
            Tb = 0;
          for (const [Eb, Yb] of Ub) {
            for (; Mb < Ab.length && Ab[Mb][0] <= Tb;) {
              const Ub = Ab[Mb++][1];
              ab(bb, -Ub, Ub)
            }
            ab(bb, Eb, Yb), Tb++
          }
          for (; Mb < Ab.length;) {
            const Ub = Ab[Mb++][1];
            ab(bb, -Ub, Ub)
          }
        } else
          for (const [Mb, Tb] of Ub) ab(bb, Mb, Tb)
      }
      size() {
        return this._isSchema ? na(this.dirtyLow) + na(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(bb, ab) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const Ub = this.collDirty,
          Ab = new Map,
          Tb = !this.paused && !this.isFullStateOnly;
        if (bb > 0)
          for (const [Mb, Eb] of Ub) Mb < bb && Ab.set(Mb, Eb);
        if (Tb)
          for (let Eb = 0; Eb < ab; Eb++) Ab.set(bb + Eb, Mb.ADD);
        for (const [Mb, Eb] of Ub) Mb >= bb && Ab.set(Mb + ab, Eb);
        this.collDirty = Ab, Tb && this.root?.enqueueChangeTree(this)
      }
      removeAt(bb, ab) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const Ub = this.collDirty,
          Ab = bb + ab;
        let Mb = !1;
        for (const Eb of Ub.keys())
          if (Eb >= Ab) {
            Mb = !0;
            break
          } if (!Mb) {
          for (let ab = bb; ab < Ab; ab++) Ub.delete(ab);
          return
        }
        const Tb = new Map;
        for (const [Eb, Yb] of Ub) Eb < bb ? Tb.set(Eb, Yb) : Eb >= Ab && Tb.set(Eb - ab, Yb);
        this.collDirty = Tb
      }
      unshift(bb) {
        this.insertAt(0, bb)
      }
      setRoot(bb) {
        ! function(bb, ab) {
          bb.root = ab;
          const Ub = ab.add(bb);
          TU(bb, bb.parent, bb.parentIndex), Ub && yU(bb, ab, ZU)
        }(this, bb)
      }
      setParent(bb, ab, Ub) {
        RU(this, bb, ab, Ub)
      }
      forEachChild(bb) {
        yU(this, bb, kU)
      }
      forEachChildWithCtx(bb, ab) {
        yU(this, bb, ab)
      }
      forEachLive(bb) {
        MU(this, bb, AU)
      }
      forEachLiveWithCtx(bb, ab) {
        MU(this, bb, ab)
      }
      operation(bb) {
        this.paused || this.isFullStateOnly || (this.recordPure(bb), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(bb, ab, Ub) {
        if (!this.paused && !this.isFieldFullStateOnly(bb)) {
          if (this.isFieldUnreliable(bb) && !this.isNew) {
            const Ab = this.ensureUnreliableRecorder();
            return Ub ? Ab.recordRaw(bb, ab) : Ab.record(bb, ab), void this.root?.enqueueUnreliable(this)
          }
          Ub ? this.recordRaw(bb, ab) : this.record(bb, ab), this.root?.enqueueChangeTree(this)
        }
      }
      change(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mb.ADD;
        this._routeAndRecord(bb, ab, !1)
      }
      indexedOperation(bb, ab) {
        this._routeAndRecord(bb, ab, !0)
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
        const ab = this.paused;
        this.paused = !0;
        try {
          return bb()
        } finally {
          this.paused = ab
        }
      }
      markDirty(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mb.ADD;
        const Ub = this.paused;
        this.paused = !1;
        try {
          this.change(bb, ab)
        } finally {
          this.paused = Ub
        }
      }
      getValue(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Pb](bb, ab)
      }
      delete(bb, ab) {
        if (void 0 === bb) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${bb}'`)
          } catch (TM) {
            console.warn(TM)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(bb)) return this.getValue(bb);
        const Ub = this.isFieldUnreliable(bb) && !this.isNew;
        Ub ? this.ensureUnreliableRecorder().recordDelete(bb, ab ?? Mb.DELETE) : this.recordDelete(bb, ab ?? Mb.DELETE);
        const Ab = this.getValue(bb);
        return Ab && Ab[Rb] && this.root?.remove(Ab[Rb]), Ub ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Ab
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Zb]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Zb]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Zb]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const bb = bb => {
          if (bb < 0) return;
          const ab = this.getValue(bb);
          ab && ab[Rb] && ab[Rb].discardAll()
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
      addParent(bb, ab) {
        ! function(bb, ab, Ub) {
          if (bb.parentRef) {
            if (bb.parentRef[Rb] === ab[Rb]) return void(bb._parentIndex = Ub);
            if (aU(bb, ((bb, Ub) => bb[Rb] === ab[Rb]))) return void(bb._parentIndex = Ub)
          }
          void 0 === bb.parentRef ? (bb.parentRef = ab, bb._parentIndex = Ub) : (bb.extraParents = {
            ref: bb.parentRef,
            index: bb._parentIndex,
            next: bb.extraParents
          }, bb.parentRef = ab, bb._parentIndex = Ub)
        }(this, bb, ab)
      }
      setParentIndex(bb, ab) {
        ! function(bb, ab, Ub) {
          if (void 0 !== bb.extraParents)
            if (bb.parentRef[Rb] !== ab[Rb]) {
              for (let Ab = bb.extraParents; void 0 !== Ab; Ab = Ab.next)
                if (Ab.ref[Rb] === ab[Rb]) return void(Ab.index = Ub)
            } else bb._parentIndex = Ub;
          else bb._parentIndex = Ub
        }(this, bb, ab)
      }
      removeParent() {
        return function(bb, ab) {
          if (bb.parentRef && bb.parentRef[Rb] === ab[Rb]) return bb.extraParents ? (bb.parentRef = bb.extraParents.ref, bb._parentIndex = bb.extraParents.index, bb.extraParents = bb.extraParents.next) : (bb.parentRef = void 0, bb._parentIndex = void 0), !0;
          let Ub = bb.extraParents,
            Ab = null;
          for (; Ub;) {
            if (Ub.ref[Rb] === ab[Rb]) return Ab ? Ab.next = Ub.next : bb.extraParents = Ub.next, !0;
            Ab = Ub, Ub = Ub.next
          }
          return void 0 === bb.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(bb) {
        return function(bb, ab) {
          if (void 0 !== bb.parentRef && ab(bb.parentRef, bb._parentIndex)) return {
            ref: bb.parentRef,
            index: bb._parentIndex
          };
          for (let Ub = bb.extraParents; void 0 !== Ub; Ub = Ub.next)
            if (ab(Ub.ref, Ub.index)) return {
              ref: Ub.ref,
              index: Ub.index
            }
        }(this, bb)
      }
      hasParent(bb) {
        return aU(this, bb)
      }
      indexInParent(bb) {
        return function(bb, ab) {
          if (bb.parentRef && bb.parentRef[Rb] === ab[Rb]) return bb._parentIndex;
          for (let Ub = bb.extraParents; void 0 !== Ub; Ub = Ub.next)
            if (Ub.ref[Rb] === ab[Rb]) return Ub.index
        }(this, bb)
      }
      getAllParents() {
        return function(bb) {
          const ab = [];
          bb.parentRef && ab.push({
            ref: bb.parentRef,
            index: bb._parentIndex
          });
          let Ub = bb.extraParents;
          for (; Ub;) ab.push({
            ref: Ub.ref,
            index: Ub.index
          }), Ub = Ub.next;
          return ab
        }(this)
      }
    }
    class dU {
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
        const ab = this.ref;
        if (ab[kb]) {
          if ("string" !== typeof ab[kb])
            for (const [Ub, Ab] of ab.entries()) Ab && bb(Ab[Rb], ab._collectionIndexes?.[Ub] ?? Ub);
          return
        }
        const Ub = ab.constructor,
          Ab = Ub?.[Symbol.metadata];
        if (!Ab) return;
        const Mb = Ab[Wb] ?? [];
        for (let Tb = 0; Tb < Mb.length; Tb++) {
          const Ub = Mb[Tb],
            Eb = ab[Ab[Ub].name];
          Eb && bb(Eb[Rb], Ub)
        }
      }
      forEachChildWithCtx(bb, ab) {
        this.forEachChild(((Ub, Ab) => ab(bb, Ub, Ab)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function FU(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
      var Ub;
      Object.defineProperty(bb, Rb, {
        value: (Ub = ab, new dU(Ub)),
        enumerable: !1,
        writable: !0
      })
    }

    function hU(bb, ab, Ub, Ab, Tb, Eb, Bb) {
      void 0 !== Bb ? Bb(ab, Ab, Eb) : "string" === typeof Ub ? aa[Ub]?.(ab, Ab, Eb) : null != Ub[Symbol.metadata] ? (aa.number(ab, Ab[Yb], Eb), (Tb & Mb.ADD) === Mb.ADD && bb.tryEncodeTypeId(ab, Ub, Ab.constructor, Eb)) : aa.number(ab, Ab[Yb], Eb)
    }
    const GU = function(bb, ab, Ub, Ab, Tb, Eb, Yb, Bb) {
        if (ab[Eb.offset++] = 255 & (Ab | Tb), Tb === Mb.DELETE) return;
        const eb = Ub.encDescriptor,
          vb = Ub.ref,
          Lb = vb[xb][Ab] ?? vb[eb.names[Ab]];
        hU(bb, ab, eb.types[Ab], Lb, Tb, Eb, eb.encoders[Ab])
      },
      QU = function(bb, ab, Ub, Ab, Tb, Eb) {
        if (ab[Eb.offset++] = 255 & Tb, aa.number(ab, Ab, Eb), Tb === Mb.DELETE) return;
        const Yb = Ub.ref;
        if ((Tb & Mb.ADD) === Mb.ADD) {
          const bb = Yb.$indexes.get(Ab);
          aa.string(ab, bb, Eb)
        }
        hU(bb, ab, Yb[kb], Yb[Pb](Ab), Tb, Eb)
      },
      qU = function(bb, ab, Ub, Ab, Tb, Eb) {
        if (ab[Eb.offset++] = 255 & Tb, aa.number(ab, Ab, Eb), Tb === Mb.DELETE) return;
        const Yb = Ub.ref;
        hU(bb, ab, Yb[kb], Yb[Pb](Ab), Tb, Eb)
      },
      uU = function(bb, ab, Ub, Ab, Tb, Eb) {
        const Yb = Ub.ref;
        (Tb & Mb.ADD) === Mb.ADD && "function" === typeof Yb.set ? QU(bb, ab, Ub, Ab, Tb, Eb) : qU(bb, ab, Ub, Ab, Tb, Eb)
      },
      rU = function(bb, ab, Ub, Ab, Tb, Eb, Bb, eb) {
        const vb = Ub.refTarget,
          Lb = vb[kb],
          Xb = "string" !== typeof Lb;
        let jb;
        if (eb && Ub.isFiltered && Xb) {
          const bb = vb.tmpItems[Ab];
          if (!bb) return;
          if (jb = bb[Yb], Tb === Mb.DELETE) Tb = Mb.DELETE_BY_REFID;
          else if ((Tb & Mb.ADD) === Mb.ADD) Tb = Mb.ADD_BY_REFID;
          else if ((Tb & Mb.MOVE) === Mb.MOVE) return
        } else if (Tb === Mb.DELETE && Xb) {
          const bb = vb.tmpItems[Ab];
          if (!bb) return;
          jb = bb[Yb], Tb = Mb.DELETE_BY_REFID
        } else jb = Ab;
        if (ab[Eb.offset++] = 255 & Tb, aa.number(ab, jb, Eb), Tb === Mb.DELETE || Tb === Mb.DELETE_BY_REFID) return;
        hU(bb, ab, Lb, vb[Pb](Ab, Bb), Tb, Eb)
      };

    function KU(bb, ab, Ub, Ab, Tb, Eb, Bb) {
      const eb = bb.resyncVisited;
      let vb = eb.get(bb.currentRefId);
      if (void 0 === vb && eb.set(bb.currentRefId, vb = new Set), vb.add(Ab), void 0 !== Tb && Ub === Mb.ADD && Tb !== Eb) {
        const Ub = Tb[Yb];
        void 0 !== Ub && (bb.root.removeRef(Ub), Bb?.push({
          ref: ab,
          refId: bb.currentRefId,
          op: Mb.DELETE,
          dynamicIndex: Ab,
          value: void 0,
          previousValue: Tb
        }))
      }
    }

    function oU(bb, ab, Ub, Ab) {
      const Mb = ab[Yb];
      if (void 0 === Mb || Ub.has(Mb)) return;
      Ub.add(Mb);
      const Tb = ab.constructor[Symbol.metadata],
        Eb = Tb?.[Wb];
      if (void 0 === Eb) return;
      const Bb = Tb[Fb];
      for (let Yb = 0; Yb < Eb.length; Yb++) {
        const Mb = Eb[Yb];
        if (void 0 !== Bb && Bb.includes(Mb)) continue;
        const eb = Tb[Mb],
          vb = ab[eb.name];
        vb && (HA.is(eb.type) ? oU(bb, vb, Ub, Ab) : lU(bb, vb, Ub, Ab))
      }
    }

    function lU(bb, ab, Ub, Ab) {
      const Tb = ab[yb] ?? ab,
        Eb = Tb[Yb];
      if (void 0 === Eb || Ub.has(Eb)) return;
      Ub.add(Eb);
      const Bb = bb.resyncVisited.get(Eb);
      if (void 0 === Bb) return;
      const eb = bb.root;
      Tb[jb](Bb, ((bb, Ub) => {
        Ab?.push({
          ref: ab,
          refId: Eb,
          op: Mb.DELETE,
          dynamicIndex: Ub,
          value: void 0,
          previousValue: bb
        });
        const Tb = bb?.[Yb];
        void 0 !== Tb && eb.removeRef(Tb)
      }), (ab => {
        HA.isSchema(ab) && oU(bb, ab, Ub, Ab)
      }))
    }
    const tU = 1,
      wU = 2,
      sU = 3,
      gU = 4,
      CU = 5;

    function VU(bb, ab, Ub, Ab, Tb, Eb, Bb, eb, vb) {
      const Lb = bb.root;
      let Pb;
      if ((ab & Mb.DELETE) === Mb.DELETE) {
        const bb = Tb?.[Yb];
        void 0 !== bb && Lb.removeRef(bb), ab !== Mb.DELETE_AND_ADD && Ub[Xb](Ab), Pb = void 0
      }
      if (ab === Mb.DELETE);
      else if ("string" === typeof Eb) Pb = Da[Eb](Bb, eb);
      else if (qa(Eb)) Pb = function(bb, ab, Ub) {
        return ra(bb, (0, Da[bb.wire])(ab, Ub))
      }(Eb.quantized, Bb, eb);
      else if (HA.is(Eb)) {
        const Ub = Da.number(Bb, eb);
        if (Pb = Lb.refs.get(Ub), (ab & Mb.ADD) === Mb.ADD) {
          const Ab = bb.getInstanceType(Bb, eb, Eb);
          Pb || (Pb = bb.createInstanceOfType(Ab)), Lb.addRef(Ub, Pb, Pb !== Tb || ab === Mb.DELETE_AND_ADD && Pb === Tb)
        }
      } else {
        const Ub = (jb = Object.keys(Eb)[0], za[jb]),
          Ab = Da.number(Bb, eb);
        null !== bb.resyncVisited && function(bb, ab) {
          const Ub = bb.resyncVisited;
          Ub.has(ab) || Ub.set(ab, new Set)
        }(bb, Ab);
        const Xb = Lb.refs.has(Ab) ? Tb || Lb.refs.get(Ab) : Ub.constructor.initializeForDecoder();
        if (Pb = Xb.clone(!0), Pb[kb] = Object.values(Eb)[0], Tb) {
          let bb = Tb[Yb];
          if (void 0 !== bb && Ab !== bb) {
            (ab & Mb.DELETE) !== Mb.DELETE && Lb.removeRef(bb);
            const Ub = Tb.entries();
            let Ab;
            for (;
              (Ab = Ub.next()) && !Ab.done;) {
              const [ab, Ub] = Ab.value;
              "object" === typeof Ub && (bb = Ub[Yb]), vb?.push({
                ref: Tb,
                refId: bb,
                op: Mb.DELETE,
                field: ab,
                value: void 0,
                previousValue: Ub
              })
            }
          }
        }
        Lb.addRef(Ab, Pb, Xb !== Tb || ab === Mb.DELETE_AND_ADD && Xb === Tb)
      }
      var jb;
      return Pb
    }
    const OU = function(bb, ab, Ub, Ab, Mb) {
        const Tb = ab[Ub.offset++],
          Eb = Ab.constructor[Symbol.metadata],
          Yb = Tb >> 6 << 6,
          Bb = Tb % (Yb || 255),
          eb = Eb[Bb];
        if (void 0 === eb) return console.warn("@colyseus/schema: field not defined at", {
          index: Bb,
          ref: Ab.constructor.name,
          metadata: Eb
        }), -1;
        const vb = !0 === eb.deprecated,
          Lb = vb ? void 0 : Ab[Pb](Bb),
          Xb = VU(bb, Yb, Ab, Bb, Lb, eb.type, ab, Ub, Mb);
        vb || (null !== Xb && void 0 !== Xb && (Ab[eb.name] = Xb), Lb !== Xb && Mb?.push({
          ref: Ab,
          refId: bb.currentRefId,
          op: Yb,
          field: eb.name,
          value: Xb,
          previousValue: Lb
        }))
      },
      cU = function(bb, ab, Ub, Ab, Tb) {
        const Eb = Ab[yb] ?? Ab,
          Yb = ab[Ub.offset++];
        if (Yb === Mb.CLEAR) return bb.removeChildRefs(Eb, Tb), void Eb.clear();
        const Bb = Da.number(ab, Ub),
          eb = Eb[kb],
          vb = Eb.constructor.COLLECTION_KIND;
        let Lb;
        (Yb & Mb.ADD) === Mb.ADD ? vb === tU ? (Lb = Da.string(ab, Ub), Eb.setIndex(Bb, Lb)) : Lb = Bb : Lb = Eb.getIndex(Bb);
        const Xb = Eb[Pb](Bb),
          jb = VU(bb, Yb, Ab, Bb, Xb, eb, ab, Ub, Tb);
        if (null !== bb.resyncVisited && KU(bb, Ab, Yb, Lb, Xb, jb, Tb), null !== jb && void 0 !== jb) switch (vb) {
          case tU:
            Eb.$items.set(Lb, jb);
            break;
          case wU:
            Eb.$setAt(Bb, jb, null !== bb.resyncVisited && Yb === Mb.ADD ? Mb.REPLACE : Yb);
            break;
          case sU:
          case gU:
          case CU:
            Eb.$items.has(Bb) || (Eb.$items.set(Bb, jb), "number" === typeof Eb.$refId && Bb >= Eb.$refId && (Eb.$refId = Bb + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Eb.constructor?.name} \u2014 item at index ${Bb} was not stored.`)
        }
        Xb !== jb && Tb?.push({
          ref: Ab,
          refId: bb.currentRefId,
          op: Yb,
          dynamicIndex: Lb,
          value: jb,
          previousValue: Xb
        })
      },
      JU = function(bb, ab, Ub, Ab, Tb) {
        const Eb = Ab[yb] ?? Ab;
        let Yb, Bb = ab[Ub.offset++];
        if (Bb === Mb.CLEAR) return bb.removeChildRefs(Eb, Tb), void Eb.clear();
        if (Bb === Mb.REVERSE) return void Eb.items.reverse();
        if (Bb === Mb.DELETE_BY_REFID) {
          const Bb = Da.number(ab, Ub),
            eb = bb.root.refs.get(Bb);
          if (void 0 === eb) return;
          if (bb.root.removeRef(Bb), Yb = Eb.findIndex((bb => bb === eb)), -1 === Yb) return;
          return Eb[Xb](Yb), void Tb?.push({
            ref: Ab,
            refId: bb.currentRefId,
            op: Mb.DELETE,
            dynamicIndex: Yb,
            value: void 0,
            previousValue: eb
          })
        }
        if (Bb === Mb.ADD_BY_REFID) {
          const Ab = Da.number(ab, Ub),
            Mb = bb.root.refs.get(Ab);
          Mb && (Yb = Eb.findIndex((bb => bb === Mb))), -1 !== Yb && void 0 !== Yb || (Yb = Eb.length)
        } else Yb = Da.number(ab, Ub);
        const eb = Eb[kb];
        let vb = Yb;
        const Lb = Eb.items[Yb],
          Pb = VU(bb, Bb, Ab, Yb, Lb, eb, ab, Ub, Tb);
        null !== bb.resyncVisited && KU(bb, Ab, Bb, Yb, Lb, Pb, Tb), null !== Pb && void 0 !== Pb && Pb !== Lb && Eb.$setAt(Yb, Pb, null !== bb.resyncVisited && Bb === Mb.ADD ? Mb.REPLACE : Bb), Lb !== Pb && Tb?.push({
          ref: Ab,
          refId: bb.currentRefId,
          op: Bb,
          dynamicIndex: vb,
          value: Pb,
          previousValue: Lb
        })
      };
    class nU extends Error {}

    function SU(bb, ab, Ub, Ab) {
      if (!(bb instanceof ab)) throw new nU(`a '${ab.name}' was expected, but '${bb&&bb.constructor.name}' was provided in ${Ub.constructor.name}#${Ab}`)
    }
    const bA = (bb, ab) => {
        const Ub = bb.toString(),
          Ab = ab.toString();
        return Ub < Ab ? -1 : Ub > Ab ? 1 : 0
      },
      aA = {
        get: (bb, ab) => "symbol" === typeof ab || isNaN(ab) ? Reflect.get(bb, ab) : bb.items[ab],
        set: (bb, ab, Ub) => {
          if ("symbol" !== typeof ab && !isNaN(ab)) {
            if (void 0 === Ub || null === Ub) bb.$deleteAt(ab);
            else {
              let Ab;
              if (Ub[Rb]) {
                SU(Ub, bb[kb], bb, ab);
                const Tb = bb.items[ab];
                bb.isMovingItems ? (Ab = bb.$wireIndex(Number(ab)), void 0 !== Tb ? Ub[Rb].isNew ? bb[Rb].indexedOperation(Ab, Mb.MOVE_AND_ADD) : (bb[Rb].getChange(Ab) & Mb.DELETE) === Mb.DELETE ? bb[Rb].indexedOperation(Ab, Mb.DELETE_AND_MOVE) : bb[Rb].indexedOperation(Ab, Mb.MOVE) : Ub[Rb].isNew && bb[Rb].indexedOperation(Ab, Mb.ADD), Ub[Rb].setParent(bb, bb[Rb].root, Ab)) : Ab = bb.$changeAt(Number(ab), Ub), void 0 !== Tb && Tb[Rb].root?.remove(Tb[Rb])
              } else Ab = bb.$changeAt(Number(ab), Ub);
              bb.items[ab] = Ub, void 0 !== Ab && (bb.tmpItems[Ab] = Ub)
            }
            return !0
          }
          return Reflect.set(bb, ab, Ub)
        },
        deleteProperty: (bb, ab) => ("number" === typeof ab ? bb.$deleteAt(ab) : delete bb[ab], !0),
        has: (bb, ab) => "symbol" === typeof ab || isNaN(Number(ab)) ? Reflect.has(bb, ab) : Reflect.has(bb.items, ab)
      };
    class UA {
      [Rb];
      [Yb];
      [yb];
      [kb];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[eb] = rU;
      static[vb] = JU;
      static COLLECTION_KIND = wU;
      static[Lb](bb, ab, Ub) {
        if (!Ub) return !0;
        const Ab = bb[yb] ?? bb;
        return "string" === typeof Ab[kb] || Ub.isChangeTreeVisible(Ab.tmpItems[ab]?.[Rb])
      }
      static is(bb) {
        return Array.isArray(bb) || void 0 !== bb.array
      }
      static from(bb) {
        return new UA(...Array.from(bb))
      }
      constructor() {
        this[kb] = void 0, this[yb] = this;
        const bb = new Proxy(this, aA);
        return Object.defineProperty(this, Rb, {
          value: new IU(bb, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), bb
      }
      static initializeForDecoder() {
        const bb = Object.create(UA.prototype);
        bb.items = [], bb.isMovingItems = !1, bb._needsCompaction = !1, bb[kb] = void 0, bb[yb] = bb;
        const ab = new Proxy(bb, aA);
        return FU(bb, ab), ab
      }
      set length(bb) {
        0 === bb ? this.clear() : bb < this.items.length ? this.splice(bb, this.length - bb) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Rb].pause()
      }
      resumeTracking() {
        this[Rb].resume()
      }
      untracked(bb) {
        return this[Rb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[Rb].paused
      }
      push() {
        const bb = this[yb],
          ab = bb.items,
          Ub = bb.tmpItems,
          Ab = bb[Rb],
          Tb = bb[kb];
        let Eb = Ub.length;
        for (let Yb = 0, Bb = arguments.length; Yb < Bb; Yb++, Eb++) {
          const Bb = Yb < 0 || arguments.length <= Yb ? void 0 : arguments[Yb];
          if (void 0 === Bb || null === Bb) return;
          "object" === typeof Bb && Tb && SU(Bb, Tb, bb, Yb), Ab.indexedOperation(Eb, Mb.ADD), ab.push(Bb), Ub.push(Bb), Bb[Rb]?.setParent(this, Ab.root, Eb)
        }
        return Eb
      }
      pop() {
        const bb = this[yb],
          ab = bb.tmpItems,
          Ub = bb.deletedIndexes;
        let Ab = -1;
        for (let Tb = ab.length - 1; Tb >= 0; Tb--)
          if (!0 !== Ub[Tb]) {
            Ab = Tb;
            break
          } if (Ab < 0) return;
        const Mb = bb.$isUnsentAdd(Ab);
        return bb[Rb].delete(Ab), Mb ? bb.$cancelAdd(Ab) : Ub[Ab] = !0, bb.items.pop()
      }
      at(bb) {
        return bb < 0 && (bb += this.length), this.items[bb]
      }
      $wireIndex(bb) {
        const ab = this.deletedIndexes;
        if (0 === ab.length) return bb;
        const Ub = this.tmpItems;
        let Ab = 0;
        for (let Mb = 0; Mb < Ub.length; Mb++)
          if (!0 !== ab[Mb]) {
            if (Ab === bb) return Mb;
            Ab++
          } return Ub.length + (bb - Ab)
      }
      $isUnsentAdd(bb) {
        const ab = this[Rb];
        return 0 === (576 & ab.flags) && !ab.paused && "string" !== typeof this[kb] && ab.operationAt(bb) === Mb.ADD
      }
      $cancelAdd(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Ub = this[Rb],
          Ab = this.tmpItems[bb];
        this.tmpItems.splice(bb, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(bb, 1), Ub.removeAt(bb, 1);
        const Mb = Ab?.[Rb];
        void 0 !== Mb && void 0 === Mb.root && Mb.removeParent(this), ab && this.$reindexChildren(bb)
      }
      $reindexChildren(bb, ab) {
        if (!this[Rb].hasFilteredFields) return;
        if ("string" === typeof this[kb]) return;
        const Ub = this.tmpItems,
          Ab = Ub.length;
        if (void 0 !== ab)
          for (; bb < Ab && Ub[bb] === ab[bb];) bb++;
        for (let Mb = bb; Mb < Ab; Mb++) Ub[Mb]?.[Rb]?.setParentIndex(this, Mb)
      }
      $changeAt(bb, ab) {
        if (void 0 === ab || null === ab) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[bb] === ab) return;
        const Ub = void 0 !== this.items[bb] ? "object" === typeof ab ? Mb.DELETE_AND_ADD : Mb.REPLACE : Mb.ADD,
          Ab = this.$wireIndex(bb),
          Tb = this[Rb];
        return Tb.change(Ab, Ub), ab[Rb]?.setParent(this, Tb.root, Ab), Ab
      }
      $deleteAt(bb, ab) {
        this[Rb].delete(this.$wireIndex(bb), ab)
      }
      $setAt(bb, ab, Ub) {
        Ub === Mb.ADD && void 0 !== this.items[bb] ? this.items.splice(bb, 0, ab) : Ub === Mb.DELETE_AND_MOVE ? (this.items.splice(bb, 1), this.items[bb] = ab) : (bb > this.items.length && (this._needsCompaction = !0), this.items[bb] = ab)
      }
      clear() {
        const bb = this[yb];
        if (0 === bb.items.length) return;
        const ab = bb[Rb];
        ab.forEachChild(((bb, Ub) => {
          ab.root?.remove(bb)
        })), ab.discard(), ab.operation(Mb.CLEAR), bb.items.length = 0, bb.tmpItems.length = 0
      } [Db]() {
        const bb = this[yb] ?? this,
          ab = bb[Rb];
        if (ab.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const Ub = bb.items;
        for (let Ab = 0; Ab < Ub.length; Ab++) Ub[Ab]?.[Db]?.();
        bb.items.length = 0, bb.tmpItems.length = 0, bb.deletedIndexes.length = 0, ab.recycle(), bb[Yb] = void 0
      }
      concat() {
        return new UA(...this.items.concat(...arguments))
      }
      join(bb) {
        return this.items.join(bb)
      }
      reverse() {
        const bb = this[yb],
          ab = bb[Rb];
        if (ab.has() || bb.deletedIndexes.length > 0) {
          const ab = bb.items.slice().reverse();
          return this.clear(), this.push(...ab), this
        }
        return ab.operation(Mb.REVERSE), bb.items.reverse(), bb.tmpItems.reverse(), bb.$reindexChildren(0), this
      }
      shift() {
        const bb = this[yb],
          ab = bb.items;
        if (0 === ab.length) return;
        const Ub = bb[Rb],
          Ab = bb.deletedIndexes;
        let Tb = 0;
        for (; !0 === Ab[Tb];) Tb++;
        const Eb = bb.$isUnsentAdd(Tb);
        return Ub.delete(Tb, Mb.DELETE), Eb ? bb.$cancelAdd(Tb) : Ab[Tb] = !0, ab.shift()
      }
      slice(bb, ab) {
        const Ub = new UA;
        return Ub.push(...this.items.slice(bb, ab)), Ub
      }
      sort() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bA;
        const ab = this[yb];
        ab.isMovingItems = !0;
        const Ub = ab[Rb];
        return ab.items.sort(bb).forEach(((bb, ab) => Ub.change(ab, Mb.REPLACE))), ab.tmpItems.sort(bb), ab.$reindexChildren(0), ab.isMovingItems = !1, this
      }
      splice(bb, ab) {
        const Ub = this[yb],
          Ab = Ub[Rb],
          Tb = Ub.items,
          Eb = Ub.tmpItems,
          Yb = Ub.deletedIndexes,
          Bb = Tb.length,
          eb = Eb.length;
        for (var vb = arguments.length, Lb = new Array(vb > 2 ? vb - 2 : 0), Pb = 2; Pb < vb; Pb++) Lb[Pb - 2] = arguments[Pb];
        const Xb = Lb.length,
          jb = [];
        for (let Mb = 0; Mb < eb; Mb++) !0 !== Yb[Mb] && jb.push(Mb);
        let kb;
        if (Bb > bb) {
          void 0 === ab && (ab = Bb - bb);
          for (let Tb = bb; Tb < bb + ab; Tb++) {
            const bb = jb[Tb],
              ab = Ub.$isUnsentAdd(bb);
            Ab.delete(bb, Mb.DELETE), ab ? (kb ??= []).push(bb) : Yb[bb] = !0
          }
        } else ab = 0;
        if (Xb > 0) {
          const Tb = jb[bb] ?? Bb,
            eb = Math.min(Xb, ab);
          for (let bb = 0; bb < eb; bb++) {
            const ab = Tb + bb;
            let Ub;
            const Bb = void 0 !== kb ? kb.indexOf(ab) : -1; - 1 !== Bb ? (kb.splice(Bb, 1), Ub = Mb.ADD) : Ub = Yb[ab] ? Mb.DELETE_AND_ADD : Mb.ADD, Ab.indexedOperation(ab, Ub), Eb[ab] = Lb[bb], Yb[ab] = !1, Lb[bb][Rb]?.setParent(this, Ab.root, ab)
          }
          const vb = Xb - eb;
          if (vb > 0) {
            const bb = Tb + eb;
            Ab.insertAt(bb, vb);
            for (let ab = 0; ab < vb; ab++) Lb[eb + ab][Rb]?.setParent(this, Ab.root, bb + ab);
            Yb.length > 0 && Yb.splice(bb, 0, ...new Array(vb).fill(!1)), Eb.splice(bb, 0, ...Lb.slice(eb)), Ub.$reindexChildren(bb + vb)
          }
        }
        if (void 0 !== kb && kb.length > 0) {
          for (let bb = kb.length - 1; bb >= 0; bb--) Ub.$cancelAdd(kb[bb], !1);
          Ub.$reindexChildren(kb[0])
        }
        return Ab.root?.enqueueChangeTree(Ab), Tb.splice(bb, ab, ...Lb)
      }
      unshift() {
        const bb = this[yb],
          ab = bb[Rb];
        ab.unshift(arguments.length);
        for (let Ab = 0; Ab < arguments.length; Ab++)(Ab < 0 || arguments.length <= Ab ? void 0 : arguments[Ab])?.[Rb]?.setParent(this, ab.root, Ab);
        const Ub = bb.deletedIndexes;
        return Ub.length > 0 && Ub.unshift(...new Array(arguments.length).fill(!1)), bb.tmpItems.unshift(...arguments), bb.$reindexChildren(arguments.length), bb.items.unshift(...arguments)
      }
      indexOf(bb, ab) {
        return this.items.indexOf(bb, ab)
      }
      lastIndexOf(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(bb, ab)
      }
      every(bb, ab) {
        return this.items.every(bb, ab)
      }
      some(bb, ab) {
        return this.items.some(bb, ab)
      }
      forEach(bb, ab) {
        return this.items.forEach(bb, ab)
      }
      map(bb, ab) {
        return this.items.map(bb, ab)
      }
      filter(bb, ab) {
        return this.items.filter(bb, ab)
      }
      reduce(bb, ab) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(bb, ab) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(bb, ab) {
        return this.items.find(bb, ab)
      }
      findIndex(bb, ab) {
        return this.items.findIndex(bb, ab)
      }
      fill(bb, ab, Ub) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(bb, ab, Ub) {
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
        return UA
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
      includes(bb, ab) {
        return this.items.includes(bb, ab)
      }
      flatMap(bb, ab) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(bb) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(bb, ab) {
        const Ub = this.items.slice();
        return bb < 0 && (bb += this.length), Ub[bb] = ab, new UA(...Ub)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(bb) {
        return this.items.slice().sort(bb)
      }
      toSpliced(bb, ab) {
        for (var Ub = arguments.length, Ab = new Array(Ub > 2 ? Ub - 2 : 0), Mb = 2; Mb < Ub; Mb++) Ab[Mb - 2] = arguments[Mb];
        const Tb = this.items.slice();
        return Tb.splice.apply(Tb, arguments), Tb
      }
      shuffle() {
        return this.move((bb => {
          let ab = this.items.length;
          for (; 0 != ab;) {
            let bb = Math.floor(Math.random() * ab);
            ab--, [this[ab], this[bb]] = [this[bb], this[ab]]
          }
        }))
      }
      move(bb) {
        return this.isMovingItems = !0, bb(this), this.isMovingItems = !1, this
      } [Pb](bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = this[yb] ?? this;
        return ab || Ub.deletedIndexes[bb] ? Ub.items[bb] : Ub.tmpItems[bb] || Ub.items[bb]
      } [Xb](bb) {
        const ab = this[yb] ?? this;
        ab.items[bb] = void 0, ab._needsCompaction = !0
      } [Zb]() {
        const bb = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, bb), this.deletedIndexes.length = 0)
      } [zb]() {
        const bb = this[yb] ?? this;
        bb._needsCompaction && (bb._needsCompaction = !1, bb.items = bb.items.filter((bb => void 0 !== bb)))
      } [jb](bb, ab, Ub) {
        const Ab = this[yb] ?? this,
          Mb = Ab.items;
        let Tb = !1;
        for (let Eb = 0; Eb < Mb.length; Eb++) {
          const Yb = Mb[Eb];
          bb.has(Eb) ? Ub(Yb) : (Tb = !0, ab(Yb, Eb), Ab[Xb](Eb))
        }
        Tb && Ab[zb]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((bb => "function" === typeof bb.toJSON ? bb.toJSON() : bb))
      }
      clone(bb) {
        let ab;
        return bb ? (ab = new UA, ab.push(...this.items)) : ab = new UA(...this.map((bb => bb[Rb] ? bb.clone() : bb))), ab
      }
    }
    ia("array", {
      constructor: UA
    });
    class AA {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(bb) {
        const ab = this.indexByKey[bb];
        return void 0 === ab ? void 0 : ab
      }
      assign(bb) {
        const ab = this.nextIndex++;
        return this.indexByKey[bb] = ab, this.keyByIndex.set(ab, bb), ab
      }
      snapshot(bb, ab) {
        (this.snapshots ??= new Map).set(bb, ab)
      }
      forgetSnapshot(bb) {
        this.snapshots?.delete(bb)
      }
      snapshotAt(bb) {
        return this.snapshots?.get(bb)
      }
      setIndex(bb, ab) {
        this.keyByIndex.set(bb, ab), this.indexByKey[ab] = bb
      }
      keyOf(bb) {
        return this.keyByIndex.get(bb)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [bb] of this.snapshots) {
            const ab = this.keyByIndex.get(bb);
            void 0 !== ab && (delete this.indexByKey[ab], this.keyByIndex.delete(bb))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class MA {
      [Rb];
      [Yb];
      childType;
      [kb];
      $items = new Map;
      journal = new AA;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= pa()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= pa()).priority = bb
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[eb] = QU;
      static[vb] = cU;
      static COLLECTION_KIND = tU;
      static[Lb](bb, ab, Ub) {
        if (!Ub || "string" === typeof bb[kb]) return !0;
        const Ab = bb[Pb](ab) ?? bb.journal.snapshotAt(ab);
        return Ub.isChangeTreeVisible(Ab[Rb])
      }
      static is(bb) {
        return void 0 !== bb.map
      }
      constructor(bb) {
        if (Object.defineProperty(this, Rb, {
            value: new IU(this),
            enumerable: !1,
            writable: !0
          }), this[kb] = void 0, bb)
          if (bb instanceof Map || bb instanceof MA) bb.forEach(((bb, ab) => this.set(ab, bb)));
          else
            for (const ab in bb) this.set(ab, bb[ab])
      }
      static initializeForDecoder() {
        const bb = Object.create(MA.prototype);
        return bb.$items = new Map, bb.journal = new AA, bb[kb] = void 0, FU(bb), bb
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return MA
      }
      set(bb, ab) {
        if (void 0 === ab || null === ab) throw new Error(`MapSchema#set('${bb}', ${ab}): trying to set ${ab} value on '${bb}'.`);
        "object" === typeof ab && this[kb] && SU(ab, this[kb], this, bb), bb = bb.toString();
        const Ub = this[Rb],
          Ab = void 0 !== ab[Rb],
          Tb = this.journal;
        let Eb, Yb = Tb.indexOf(bb);
        if (void 0 !== Yb) {
          Eb = Mb.REPLACE;
          const Ub = this.$items.get(bb);
          if (Ub === ab) return;
          Ab && (Eb = Mb.DELETE_AND_ADD, void 0 !== Ub && Ub[Rb].root?.remove(Ub[Rb])), void 0 !== Tb.snapshotAt(Yb) && Tb.forgetSnapshot(Yb)
        } else Yb = Tb.assign(bb), Eb = Mb.ADD;
        return this.$items.set(bb, ab), Eb === Mb.ADD && Ub.isStreamCollection ? void 0 !== Ub.root && Wa(this, Ub.root, Yb) : Ub.change(Yb, Eb), Ab && ab[Rb].setParent(this, Ub.root, Yb), this
      }
      get(bb) {
        return this.$items.get(bb)
      }
      getOrInsert(bb, ab) {
        return this.$items.has(bb) ? this.$items.get(bb) : (this.set(bb, ab), ab)
      }
      getOrInsertComputed(bb, ab) {
        if (this.$items.has(bb)) return this.$items.get(bb);
        const Ub = ab(bb);
        return this.set(bb, Ub), Ub
      }
      delete(bb) {
        if (!this.$items.has(bb)) return !1;
        const ab = this.journal.indexOf(bb),
          Ub = this.$items.get(bb),
          Ab = this[Rb];
        if (Ab.isStreamCollection) {
          const Mb = Ab.root;
          let Tb = !1;
          return void 0 !== Mb && (Tb = Ha(this, Mb, this[Yb], ab)), void 0 !== Ub?.[Rb] && Mb?.remove(Ub[Rb]), this.$items.delete(bb), Tb || this.journal.snapshot(ab, Ub), !0
        }
        return this.journal.snapshot(ab, Ub), Ab.delete(ab), this.$items.delete(bb)
      }
      clear() {
        const bb = this[Rb];
        bb.discard(), bb.forEachChild(((ab, Ub) => {
          bb.root?.remove(ab)
        })), this.journal.reset(), this.$items.clear(), bb.operation(Mb.CLEAR)
      } [Db]() {
        const bb = this[Rb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[Db]?.())), this.$items.clear(), this.journal.reset(), bb.recycle(), this[Yb] = void 0
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
        this[Rb].pause()
      }
      resumeTracking() {
        this[Rb].resume()
      }
      untracked(bb) {
        return this[Rb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[Rb].paused
      }
      setIndex(bb, ab) {
        this.journal.setIndex(bb, ab)
      }
      getIndex(bb) {
        return this.journal.keyOf(bb)
      } [Pb](bb) {
        const ab = this.journal.keyOf(bb);
        return void 0 !== ab ? this.$items.get(ab) : void 0
      } [Xb](bb) {
        const ab = this.journal.keyOf(bb);
        void 0 !== ab && (this.$items.delete(ab), this.journal.keyByIndex.delete(bb))
      } [jb](bb, ab, Ub) {
        let Ab = null;
        if (this.$items.forEach(((Mb, Tb) => {
            bb.has(Tb) ? Ub(Mb) : ((Ab ??= new Set).add(Tb), ab(Mb, Tb))
          })), null !== Ab) {
          Ab.forEach((bb => {
            this.$items.delete(bb), delete this.journal.indexByKey[bb]
          }));
          const bb = [];
          this.journal.keyByIndex.forEach(((ab, Ub) => {
            Ab.has(ab) && bb.push(Ub)
          }));
          for (let ab = 0; ab < bb.length; ab++) this.journal.keyByIndex.delete(bb[ab])
        }
      } [Zb]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(bb) {
        ha(this, bb)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (bb => {
          let [ab, Ub] = bb;
          return [ab, "function" === typeof Ub.toJSON ? Ub.toJSON() : Ub]
        })))
      }
      clone(bb) {
        let ab;
        return bb ? ab = Object.assign(new MA, this) : (ab = new MA, this.forEach(((bb, Ub) => {
          bb[Rb] ? ab.set(Ub, bb.clone()) : ab.set(Ub, bb)
        }))), ab
      }
    }
    ia("map", {
      constructor: MA
    });
    class TA {
      [Rb];
      [Yb];
      [kb];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= pa()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= pa()).priority = bb
      }
      static[eb] = qU;
      static[vb] = cU;
      static COLLECTION_KIND = gU;
      static[Lb](bb, ab, Ub) {
        return !Ub || "string" === typeof bb[kb] || Ub.isChangeTreeVisible((bb[Pb](ab) ?? bb.deletedItems[ab])[Rb])
      }
      static is(bb) {
        return void 0 !== bb.collection
      }
      constructor(bb) {
        Object.defineProperty(this, Rb, {
          value: new IU(this),
          enumerable: !1,
          writable: !0
        }), this[kb] = void 0, bb && bb.forEach((bb => this.add(bb)))
      }
      static initializeForDecoder() {
        const bb = Object.create(TA.prototype);
        return bb.$items = new Map, bb.deletedItems = {}, bb.$refId = 0, bb[kb] = void 0, FU(bb), bb
      }
      add(bb) {
        const ab = this.$refId++,
          Ub = this[Rb];
        return this.$items.set(ab, bb), Ub.isStreamCollection ? void 0 !== Ub.root && Wa(this, Ub.root, ab) : Ub.change(ab), void 0 !== bb[Rb] && bb[Rb].setParent(this, Ub.root, ab), ab
      }
      at(bb) {
        const ab = Array.from(this.$items.keys())[bb];
        return this.$items.get(ab)
      }
      entries() {
        return this.$items.entries()
      }
      delete(bb) {
        const ab = this.$items.entries();
        let Ub, Ab;
        for (;
          (Ab = ab.next()) && !Ab.done;)
          if (bb === Ab.value[1]) {
            Ub = Ab.value[0];
            break
          } if (void 0 === Ub) return !1;
        const Mb = this[Rb];
        if (Mb.isStreamCollection) {
          const bb = Mb.root,
            ab = this.$items.get(Ub);
          return void 0 !== bb && Ha(this, bb, this[Yb], Ub), void 0 !== ab?.[Rb] && bb?.remove(ab[Rb]), this.deletedItems[Ub] = ab, this.$items.delete(Ub)
        }
        return this.deletedItems[Ub] = Mb.delete(Ub), this.$items.delete(Ub)
      }
      clear() {
        const bb = this[Rb];
        bb.discard(), bb.forEachChild(((ab, Ub) => {
          bb.root?.remove(ab)
        })), this.$items.clear(), bb.operation(Mb.CLEAR)
      } [Db]() {
        const bb = this[Rb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[Db]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, bb.recycle(), this[Yb] = void 0
      }
      has(bb) {
        return Array.from(this.$items.values()).some((ab => ab === bb))
      }
      forEach(bb) {
        this.$items.forEach(((ab, Ub, Ab) => bb(ab, Ub, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Rb].pause()
      }
      resumeTracking() {
        this[Rb].resume()
      }
      untracked(bb) {
        return this[Rb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[Rb].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(bb, ab) {}
      getIndex(bb) {
        return bb
      } [Pb](bb) {
        return this.$items.get(bb)
      } [Xb](bb) {
        this.$items.delete(bb)
      } [jb](bb, ab, Ub) {
        let Ab = null;
        if (this.$items.forEach(((Mb, Tb) => {
            bb.has(Tb) ? Ub(Mb) : ((Ab ??= []).push(Tb), ab(Mb, Tb))
          })), null !== Ab)
          for (let Mb = 0; Mb < Ab.length; Mb++) this[Xb](Ab[Mb])
      } [Zb]() {
        for (const bb in this.deletedItems) delete this.deletedItems[bb]
      }
      _dropView(bb) {
        ha(this, bb)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach(((ab, Ub) => {
          bb.push("function" === typeof ab.toJSON ? ab.toJSON() : ab)
        })), bb
      }
      clone(bb) {
        let ab;
        return bb ? ab = Object.assign(new TA, this) : (ab = new TA, this.forEach((bb => {
          bb[Rb] ? ab.add(bb.clone()) : ab.add(bb)
        }))), ab
      }
    }
    ia("collection", {
      constructor: TA
    });
    class EA {
      [Rb];
      [Yb];
      [kb];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= pa()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= pa()).priority = bb
      }
      static[eb] = qU;
      static[vb] = cU;
      static COLLECTION_KIND = sU;
      static[Lb](bb, ab, Ub) {
        return !Ub || "string" === typeof bb[kb] || Ub.isVisible((bb[Pb](ab) ?? bb.deletedItems[ab])[Rb])
      }
      static is(bb) {
        return void 0 !== bb.set
      }
      constructor(bb) {
        Object.defineProperty(this, Rb, {
          value: new IU(this),
          enumerable: !1,
          writable: !0
        }), this[kb] = void 0, bb && bb.forEach((bb => this.add(bb)))
      }
      static initializeForDecoder() {
        const bb = Object.create(EA.prototype);
        return bb.$items = new Map, bb.deletedItems = {}, bb.$refId = 0, bb[kb] = void 0, FU(bb), bb
      }
      add(bb) {
        if (this.has(bb)) return !1;
        const ab = this.$refId++,
          Ub = this[Rb];
        return this.$items.set(ab, bb), Ub.isStreamCollection ? void 0 !== Ub.root && Wa(this, Ub.root, ab) : Ub.change(ab, Mb.ADD), void 0 !== bb[Rb] && bb[Rb].setParent(this, Ub.root, ab), ab
      }
      entries() {
        return this.$items.entries()
      }
      delete(bb) {
        const ab = this.$items.entries();
        let Ub, Ab;
        for (;
          (Ab = ab.next()) && !Ab.done;)
          if (bb === Ab.value[1]) {
            Ub = Ab.value[0];
            break
          } if (void 0 === Ub) return !1;
        const Mb = this[Rb];
        if (Mb.isStreamCollection) {
          const bb = Mb.root,
            ab = this.$items.get(Ub);
          return void 0 !== bb && Ha(this, bb, this[Yb], Ub), void 0 !== ab?.[Rb] && bb?.remove(ab[Rb]), this.deletedItems[Ub] = ab, this.$items.delete(Ub)
        }
        return this.deletedItems[Ub] = Mb.delete(Ub), this.$items.delete(Ub)
      }
      clear() {
        const bb = this[Rb];
        bb.discard(), this.$items.clear(), bb.operation(Mb.CLEAR)
      } [Db]() {
        const bb = this[Rb];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((bb => bb?.[Db]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, bb.recycle(), this[Yb] = void 0
      }
      has(bb) {
        const ab = this.$items.values();
        let Ub, Ab = !1;
        for (;
          (Ub = ab.next()) && !Ub.done;)
          if (bb === Ub.value) {
            Ab = !0;
            break
          } return Ab
      }
      forEach(bb) {
        this.$items.forEach(((ab, Ub, Ab) => bb(ab, Ub, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Rb].pause()
      }
      resumeTracking() {
        this[Rb].resume()
      }
      untracked(bb) {
        return this[Rb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[Rb].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(bb, ab) {}
      getIndex(bb) {
        return bb
      } [Pb](bb) {
        return this.$items.get(bb)
      } [Xb](bb) {
        this.$items.delete(bb)
      } [jb](bb, ab, Ub) {
        let Ab = null;
        if (this.$items.forEach(((Mb, Tb) => {
            bb.has(Tb) ? Ub(Mb) : ((Ab ??= []).push(Tb), ab(Mb, Tb))
          })), null !== Ab)
          for (let Mb = 0; Mb < Ab.length; Mb++) this[Xb](Ab[Mb])
      } [Zb]() {
        for (const bb in this.deletedItems) delete this.deletedItems[bb]
      }
      _dropView(bb) {
        ha(this, bb)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach(((ab, Ub) => {
          bb.push("function" === typeof ab.toJSON ? ab.toJSON() : ab)
        })), bb
      }
      clone(bb) {
        let ab;
        return bb ? ab = Object.assign(new EA, this) : (ab = new EA, this.forEach((bb => {
          bb[Rb] ? ab.add(bb.clone()) : ab.add(bb)
        }))), ab
      }
    }
    ia("set", {
      constructor: EA
    });
    class YA {
      [Rb];
      [Yb];
      [kb];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(bb) {
        (this._stream ??= pa()).maxPerTick = bb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(bb) {
        (this._stream ??= pa()).priority = bb
      }
      static $isStream = !0;
      static[eb] = qU;
      static[vb] = cU;
      static COLLECTION_KIND = CU;
      static[Lb](bb, ab, Ub) {
        if (!Ub) return !0;
        const Ab = bb[Pb](ab);
        return void 0 !== Ab && Ub.isVisible(Ab[Rb])
      }
      static is(bb) {
        return bb && void 0 !== bb.stream
      }
      constructor() {
        Object.defineProperty(this, Rb, {
          value: new IU(this),
          enumerable: !1,
          writable: !0
        }), this[kb] = void 0
      }
      static initializeForDecoder() {
        const bb = Object.create(YA.prototype);
        return bb.$items = new Map, bb.$nextPosition = 0, bb._itemIndex = new Map, bb[kb] = void 0, FU(bb), bb
      }
      add(bb) {
        if (this._itemIndex.has(bb)) return -1;
        const ab = this.$nextPosition++;
        this.$items.set(ab, bb), this._itemIndex.set(bb, ab);
        const Ub = this[Rb].root;
        return void 0 !== bb[Rb] && bb[Rb].setParent(this, Ub, ab), void 0 !== Ub && Wa(this, Ub, ab), ab
      }
      remove(bb) {
        const ab = this._itemIndex.get(bb);
        if (void 0 === ab) return !1;
        this._itemIndex.delete(bb), this.$items.delete(ab);
        const Ub = this[Rb].root;
        return void 0 !== Ub && (Ha(this, Ub, this[Yb], ab), void 0 !== bb[Rb] && Ub.remove(bb[Rb])), !0
      }
      has(bb) {
        return this._itemIndex.has(bb)
      }
      clear() {
        const bb = this[Rb].root;
        if (void 0 !== bb) {
          ! function(bb, ab, Ub) {
            const Ab = bb._stream;
            if (void 0 !== Ab) {
              Ab.broadcastPending.clear();
              for (const bb of Ab.sentBroadcast) Ab.broadcastDeletes.add(bb);
              Ab.sentBroadcast.clear(), ab.forEachActiveView((bb => {
                Ab.pendingByView.get(bb.id)?.clear();
                const ab = Ab.sentByView.get(bb.id);
                if (void 0 !== ab && ab.size > 0) {
                  let Ab = bb.changes.get(Ub);
                  void 0 === Ab && (Ab = new Map, bb.changes.set(Ub, Ab));
                  for (const bb of ab) Ab.set(bb, Mb.DELETE);
                  ab.clear()
                }
              }))
            }
          }(this, bb, this[Yb]);
          for (const ab of this.$items.values()) void 0 !== ab[Rb] && bb.remove(ab[Rb])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(bb) {
        for (const [ab, Ub] of this.$items) bb(Ub, ab, this)
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
      setIndex(bb, ab) {}
      getIndex(bb) {
        return bb
      } [Pb](bb) {
        return this.$items.get(bb)
      } [Xb](bb) {
        const ab = this.$items.get(bb);
        void 0 !== ab && (this._itemIndex.delete(ab), this.$items.delete(bb))
      } [jb]() {} [Zb]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const bb = [];
        return this.forEach((ab => {
          bb.push("function" === typeof ab?.toJSON ? ab.toJSON() : ab)
        })), bb
      }
      clone(bb) {
        if (bb) {
          return Object.assign(new YA, this)
        }
        const ab = new YA;
        return ab.maxPerTick = this.maxPerTick, this.forEach((bb => {
          ab.add("function" === typeof bb?.clone ? bb.clone() : bb)
        })), ab
      }
      _dropView(bb) {
        ha(this, bb)
      }
      _unregister() {}
    }
    ia("stream", {
      constructor: YA
    });
    class BA {
      [ib] = !0;
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
        if (bb && "object" === typeof bb && void 0 !== bb.array) throw new Error(ma);
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

    function eA(bb) {
      return null != bb && !0 === bb[ib]
    }

    function vA(bb) {
      return () => new BA(bb)
    }

    function LA(bb) {
      if (eA(bb)) {
        const ab = bb._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof ab?`use the type name instead: t.array("${ab}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return bb
    }

    function PA(bb) {
      return new BA({
        quantized: Qa(bb)
      })
    }
    const XA = Object.freeze({
        string: vA("string"),
        number: vA("number"),
        boolean: vA("boolean"),
        int8: vA("int8"),
        uint8: vA("uint8"),
        int16: vA("int16"),
        uint16: vA("uint16"),
        int32: vA("int32"),
        uint32: vA("uint32"),
        int64: vA("int64"),
        uint64: vA("uint64"),
        float32: vA("float32"),
        float64: vA("float64"),
        bigint64: vA("bigint64"),
        biguint64: vA("biguint64"),
        ref: bb => new BA(bb),
        array: bb => new BA({
          array: LA(bb)
        }),
        map: bb => new BA({
          map: LA(bb)
        }),
        set: bb => new BA({
          set: LA(bb)
        }),
        collection: bb => new BA({
          collection: LA(bb)
        }),
        stream: bb => {
          const ab = new BA({
            stream: LA(bb)
          });
          return ab._stream = !0, ab
        },
        quantized: PA,
        angle: bb => PA({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: bb?.bits ?? 16
        })
      }),
      jA = -1;

    function RA(bb) {
      return oa.register(bb), bb
    }

    function kA() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jA;
      return function(ab, Ub) {
        const Ab = Va.initialize(ab.constructor);
        Va.setTag(Ab, Ub, bb)
      }
    }

    function yA(bb, ab) {
      const Ub = Va.initialize(bb.constructor);
      Va.setUnreliable(Ub, ab)
    }

    function ZA(bb, ab) {
      const Ub = Va.initialize(bb.constructor);
      Va.setPatchOnly(Ub, ab)
    }

    function DA(bb, ab) {
      const Ub = Va.initialize(bb.constructor);
      Va.setFullStateOnly(Ub, ab)
    }

    function zA(bb, ab) {
      return function(Ub, Ab) {
        const Mb = Ub.constructor;
        if (!bb) throw new Error(`${Mb.name}: @type() reference provided for "${Ab}" is undefined. Make sure you don't have any circular dependencies.`);
        bb = ta(bb, `${Mb.name}.${Ab}`), oa.register(Mb);
        const Tb = Object.getPrototypeOf(Mb)[Symbol.metadata],
          Eb = Va.initialize(Mb);
        let Yb = Eb[Ab];
        if (void 0 !== Eb[Yb]) {
          if (Eb[Yb].deprecated) return;
          if (void 0 !== Eb[Yb].type) {
            const bb = new Error(`@colyseus/schema: Duplicate '${Ab}' definition on '${Mb.name}'.\nCheck @type() annotation`);
            throw new Error(`${bb.message} ${bb.stack.split("\n")[4].trim()}`)
          }
        } else Yb = Eb[Nb] ?? (Tb && Tb[Nb]) ?? -1, Yb++;
        if (ab && ab.manual) Va.addField(Eb, Yb, Ab, bb, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: ab,
            childType: Ub
          } = la(bb);
          Va.addField(Eb, Yb, Ab, bb, iA(Ab, Yb, Ub, ab))
        }
        Eb[fb][Ab] && Object.defineProperty(Ub, Ab, Eb[fb][Ab]), ("string" === typeof bb || qa(bb)) && (Eb[pb] || Object.defineProperty(Eb, pb, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Eb[pb][Yb] = "string" === typeof bb ? aa[bb] : Ka(bb.quantized))
      }
    }
    const xA = {
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

    function iA(bb, ab, Ub, Ab) {
      let Tb;
      return Tb = Ab ? function(bb, ab, Ub, Ab) {
        const Tb = Ab.constructor === UA,
          Eb = Ab.constructor === MA;
        return function(bb) {
          const Ab = this[xb],
            Yb = Ab[ab];
          if (bb !== Yb) {
            if (void 0 !== bb && null !== bb) {
              if (!Tb || bb instanceof UA)
                if (!Eb || bb instanceof MA) bb[kb] = Ub;
                else {
                  const ab = new MA;
                  if (ab[kb] = Ub, bb instanceof Map) bb.forEach(((bb, Ub) => ab.set(Ub, bb)));
                  else
                    for (const Ub in bb) ab.set(Ub, bb[Ub]);
                  bb = ab
                }
              else {
                const ab = new UA;
                ab[kb] = Ub, ab.push(...bb), bb = ab
              }
              const Ab = this[Rb],
                eb = this.constructor;
              void 0 !== Yb && null !== Yb && Yb[Rb] ? (Ab.root?.remove(Yb[Rb]), eb[Bb](Ab, ab, Mb.DELETE_AND_ADD)) : eb[Bb](Ab, ab, Mb.ADD), bb[Rb]?.setParent(this, Ab.root, ab)
            } else void 0 !== Yb && null !== Yb && this[Rb].delete(ab);
            Ab[ab] = bb
          }
        }
      }(0, ab, Ub, Ab) : "string" === typeof Ub ? function(bb, ab, Ub) {
        const Ab = xA[Ub],
          Tb = "string" === Ub,
          Eb = "boolean" === Ub;
        return function(Ub) {
          const Yb = this[xb],
            eb = Yb[ab];
          if (Ub !== eb) {
            if (void 0 !== Ub && null !== Ub) {
              if (!Eb && void 0 !== Ab && typeof Ub !== Ab && (!Tb || null !== Ub)) {
                const ab = Ub && Ub.constructor ? ` (${Ub.constructor.name})` : "";
                throw new nU(`a '${Ab}' was expected, but '${JSON.stringify(Ub)}'${ab} was provided in ${this.constructor.name}#${bb}`)
              }
              this.constructor[Bb](this[Rb], ab, Mb.ADD)
            } else void 0 !== eb && null !== eb && this[Rb].delete(ab);
            Yb[ab] = Ub
          }
        }
      }(bb, ab, Ub) : qa(Ub) ? function(bb, ab, Ub) {
        return function(Ab) {
          const Tb = this[xb],
            Eb = Tb[ab];
          if (void 0 !== Ab && null !== Ab) {
            if ("number" !== typeof Ab) throw new nU(`a 'number' was expected, but '${JSON.stringify(Ab)}' was provided in ${this.constructor.name}#${bb}`);
            if ((Ab = ra(Ub, ua(Ub, Ab))) === Eb) return;
            this.constructor[Bb](this[Rb], ab, Mb.ADD)
          } else {
            if (Ab === Eb) return;
            void 0 !== Eb && null !== Eb && this[Rb].delete(ab)
          }
          Tb[ab] = Ab
        }
      }(bb, ab, Ub.quantized) : function(bb, ab, Ub) {
        return function(Ab) {
          const Tb = this[xb],
            Eb = Tb[ab];
          if (Ab !== Eb) {
            if (void 0 !== Ab && null !== Ab) {
              SU(Ab, Ub, this, bb);
              const Tb = this[Rb],
                Yb = this.constructor;
              void 0 !== Eb && null !== Eb && Eb[Rb] ? (Tb.root?.remove(Eb[Rb]), Yb[Bb](Tb, ab, Mb.DELETE_AND_ADD)) : Yb[Bb](Tb, ab, Mb.ADD), Ab[Rb]?.setParent(this, Tb.root, ab)
            } else void 0 !== Eb && null !== Eb && this[Rb].delete(ab);
            Tb[ab] = Ab
          }
        }
      }(bb, ab, Ub), {
        get: function() {
          return this[xb][ab]
        },
        set: Tb,
        enumerable: !0,
        configurable: !0
      }
    }

    function fA() {
      let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(ab, Ub) {
        const Ab = Va.initialize(ab.constructor);
        Va.setDeprecated(Ab, Ub), bb && (Ab[fb] ??= {}, Ab[fb][Ub] = {
          get: function() {
            throw new Error(`${Ub} is deprecated.`)
          },
          set: function(bb) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(ab, Ub, Ab[fb][Ub]))
      }
    }
    let mA = !1;

    function pA(bb, ab, Ub) {
      mA || (mA = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Ab in ab) zA(ab[Ab], Ub)(bb.prototype, Ab);
      return bb
    }

    function NA(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HA;
      if (null == bb || "object" !== typeof bb) throw new Error(`schema(): first argument must be a fields object (got ${typeof bb}).`);
      const Ab = {},
        Mb = {},
        Tb = {},
        Eb = {},
        Yb = (bb, ab) => {
          if (ab.hasDefault)((bb, ab) => {
            "function" === typeof ab ? Eb[bb] = ab : ab && "function" === typeof ab.clone ? Eb[bb] = () => ab.clone() : Tb[bb] = ab
          })(bb, ab.default);
          else if (!ab.optional) {
            const Ub = function(bb) {
              if (bb && "object" === typeof bb) {
                if (void 0 !== bb.array) return () => new UA;
                if (void 0 !== bb.map) return () => new MA;
                if (void 0 !== bb.set) return () => new EA;
                if (void 0 !== bb.collection) return () => new TA;
                if (void 0 !== bb.stream) return () => new YA
              } else if ("function" === typeof bb && HA.is(bb) && (!bb.prototype.initialize || 0 === bb.prototype.initialize.length)) return () => new bb
            }(ab.type);
            Ub && (Eb[bb] = Ub)
          }
        },
        Bb = {},
        eb = [],
        vb = [],
        Lb = {},
        Pb = [],
        Xb = [],
        jb = {},
        Rb = [];
      for (const xb in bb) {
        const Ub = bb[xb],
          Tb = `schema(${ab?`'${ab}'`:""}): field '${xb}'`;
        if (eA(Ub)) {
          const bb = Ub.toDefinition();
          if (bb.noSync) {
            if (void 0 !== bb.view || bb.unreliable || bb.patchOnly || bb.fullStateOnly || bb.stream) throw new Error(`${Tb} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            Yb(xb, bb);
            continue
          }
          if (bb.patchOnly && bb.fullStateOnly) throw new Error(`${Tb} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const ab = ta(bb.type, Tb);
          if ("function" === typeof ab && !HA.is(ab)) throw new Error(`${Tb} is a synced ref to non-Schema class '${ab.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Ab[xb] = ab, void 0 !== bb.view && (Bb[xb] = bb.view), bb.unreliable && eb.push(xb), bb.patchOnly && vb.push(xb), bb.deprecated && (Lb[xb] = bb.deprecatedThrows), bb.fullStateOnly && Pb.push(xb), bb.stream && Xb.push(xb), void 0 !== bb.streamPriority && (jb[xb] = bb.streamPriority), bb.optional && Rb.push(xb), Yb(xb, bb)
        } else {
          if ("function" !== typeof Ub) throw new Error(`${Tb} must be a t.* builder, Schema subclass, or method (got ${typeof Ub}).`);
          HA.is(Ub) ? (Ab[xb] = Ub, Ub.prototype.initialize && 0 !== Ub.prototype.initialize.length || (Eb[xb] = () => new Ub)) : Mb[xb] = Ub
        }
      }
      const kb = bb => {
          for (const ab in Tb) bb[ab] = Tb[ab];
          for (const ab in Eb) bb[ab] = Eb[ab]()
        },
        yb = () => {
          const bb = {};
          return kb(bb), bb
        },
        Zb = "function" === typeof Mb.initialize,
        Db = Mb.initialize ?? Ub._initialize,
        zb = class extends Ub {
          constructor() {
            for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
            const Mb = ab[0];
            void 0 === Mb ? (super(), kb(this)) : super(Object.assign(yb(), Zb ? (bb => {
              const ab = Object.keys(Ab),
                Ub = {};
              for (const Ab in bb) ab.includes(Ab) || (Ub[Ab] = bb[Ab]);
              return Ub
            })(Mb) : Mb)), Db && new.target === zb && Db.apply(this, ab)
          }
        };
      ab && Object.defineProperty(zb, "name", {
        value: ab
      }), Va.setFields(zb, Ab), zb._getDefaultValues = yb, zb._initialize = Db, Object.assign(zb.prototype, Mb);
      for (const xb in Bb) kA(Bb[xb])(zb.prototype, xb);
      for (const xb of eb) yA(zb.prototype, xb);
      for (const xb of vb) ZA(zb.prototype, xb);
      for (const xb in Lb) fA(Lb[xb])(zb.prototype, xb);
      if (Pb.length > 0 || Xb.length > 0) {
        const bb = zb[Symbol.metadata];
        for (const ab of Pb) Va.setFullStateOnly(bb, ab);
        for (const ab of Xb) Va.setStream(bb, ab);
        for (const ab in jb) Va.setStreamPriority(bb, ab, jb[ab])
      }
      if (Rb.length > 0) {
        const bb = zb[Symbol.metadata];
        for (const ab of Rb) bb[bb[ab]].optional = !0
      }
      return zb.extend = (bb, ab) => NA(bb, ab, zb), zb
    }

    function WA(bb) {
      const ab = bb[Rb].root,
        Ub = {
          ops: {},
          refs: []
        };
      let Ab = ab.changes.next;
      for (; Ab;) {
        const bb = Ab.changeTree;
        void 0 !== bb ? (Ub.refs.push(`refId#${bb.ref[Yb]}`), bb.forEach(((bb, ab) => {
          if (bb < 0 || !ab) return;
          const Ab = Mb[ab];
          Ub.ops[Ab] || (Ub.ops[Ab] = 0), Ub.ops[Ab]++
        })), Ab = Ab.next) : Ab = Ab.next
      }
      return Ub
    }
    class HA {
      static[eb] = GU;
      static[vb] = OU;
      [Yb];
      [xb];
      static initialize(bb) {
        Object.defineProperty(bb, Rb, {
          value: new IU(bb),
          enumerable: !1,
          writable: !0
        }), bb[xb] = []
      }
      static initializeForDecoder() {
        const bb = Object.create(this.prototype);
        return FU(bb), bb[xb] = [], bb
      }
      static reset(bb) {
        const ab = bb?.[Rb];
        if (void 0 === ab || "function" !== typeof ab.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== ab.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${bb.constructor.name}) with multiple parents.`);
        bb[Db]()
      } [Db]() {
        const bb = this.constructor[Symbol.metadata],
          ab = bb?.[Wb] ?? [],
          Ub = this[xb];
        for (let Ab = 0; Ab < ab.length; Ab++) {
          const bb = Ub[ab[Ab]];
          bb?.[Db]?.()
        }
        this[Rb].recycle(), this[Yb] = void 0
      }
      static is(bb) {
        const ab = bb[Symbol.metadata];
        return "object" === typeof ab && null !== ab
      }
      static isSchema(bb) {
        return "function" === typeof bb?.assign
      }
      static[Bb](bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mb.ADD;
        bb.change(ab, Ub)
      }
      static[Lb](bb, ab, Ub) {
        const Ab = bb.constructor[Symbol.metadata],
          Mb = Ab[ab]?.tag;
        return void 0 === Ub ? void 0 === Mb : void 0 === Mb || (Mb === jA ? Ub.isChangeTreeVisible(bb[Rb]) : Ub.hasTagOnTree(bb[Rb], Mb))
      }
      constructor(bb) {
        HA.initialize(this), bb && HA.assignProps(this, bb)
      }
      assign(bb) {
        return HA.assignProps(this, bb), this
      }
      static assignProps(bb, ab) {
        const Ub = bb.constructor[Symbol.metadata];
        if (Ub && void 0 !== Ub[Nb])
          for (let Mb = 0; Mb <= Ub[Nb]; Mb++) {
            const Ab = Ub[Mb];
            if (!Ab) continue;
            const Tb = ab[Ab.name];
            void 0 !== Tb && (bb[Ab.name] = Tb)
          }
        const Ab = Object.keys(ab);
        for (let Mb = 0; Mb < Ab.length; Mb++) {
          const Tb = Ab[Mb];
          Ub && void 0 !== Ub[Tb] || (bb[Tb] = ab[Tb])
        }
      }
      restore(bb) {
        const ab = this.constructor[Symbol.metadata];
        for (const Ub in ab) {
          const Ab = ab[Ub],
            Mb = Ab.name,
            Tb = Ab.type,
            Eb = bb[Mb];
          if (void 0 !== Eb && null !== Eb)
            if ("string" === typeof Tb) this[Mb] = Eb;
            else if (HA.is(Tb)) {
            const bb = new Tb;
            bb.restore(Eb), this[Mb] = bb
          } else if ("object" === typeof Tb) {
            const bb = Object.keys(Tb)[0],
              ab = Tb[bb];
            if ("map" === bb) {
              const bb = this[Mb];
              for (const Ub in Eb)
                if (HA.is(ab)) {
                  const Ab = new ab;
                  Ab.restore(Eb[Ub]), bb.set(Ub, Ab)
                } else bb.set(Ub, Eb[Ub])
            } else if ("array" === bb) {
              const bb = this[Mb];
              for (let Ub = 0; Ub < Eb.length; Ub++)
                if (HA.is(ab)) {
                  const Ab = new ab;
                  Ab.restore(Eb[Ub]), bb.push(Ab)
                } else bb.push(Eb[Ub])
            }
          }
        }
        return this
      }
      setDirty(bb, ab) {
        const Ub = this.constructor[Symbol.metadata];
        this[Rb].change(Ub[Ub[bb]].index, ab)
      }
      pauseTracking() {
        this[Rb].pause()
      }
      resumeTracking() {
        this[Rb].resume()
      }
      untracked(bb) {
        return this[Rb].untracked(bb)
      }
      get isTrackingPaused() {
        return this[Rb].paused
      }
      clone() {
        const bb = Object.create(this.constructor.prototype);
        HA.initialize(bb);
        const ab = this.constructor[Symbol.metadata];
        for (const Ub in ab) {
          const Ab = ab[Ub].name;
          "object" === typeof this[Ab] && "function" === typeof this[Ab]?.clone ? bb[Ab] = this[Ab].clone() : bb[Ab] = this[Ab]
        }
        return bb
      }
      toJSON() {
        const bb = {},
          ab = this.constructor[Symbol.metadata];
        for (const Ub in ab) {
          const Ab = ab[Ub],
            Mb = Ab.name;
          Ab.deprecated || null === this[Mb] || "undefined" === typeof this[Mb] || (bb[Mb] = "function" === typeof this[Mb].toJSON ? this[Mb].toJSON() : this[Mb])
        }
        return bb
      }
      discardAllChanges() {
        this[Rb].discardAll()
      } [Pb](bb) {
        return this[this.constructor[Symbol.metadata][bb].name]
      } [Xb](bb) {
        this[this.constructor[Symbol.metadata][bb].name] = void 0
      }
      static debugRefIds(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Tb = ab ? ` - ${JSON.stringify(bb.toJSON())}` : "",
          Eb = bb[Rb],
          Bb = bb[Yb],
          eb = Ab ? Ab.root.refCount[Bb] : Eb.refCount,
          vb = eb > 1 ? ` [\xd7${eb}]` : "";
        let Lb = `${function(bb){return new Array(bb).fill(0).map(((ab,Ub)=>Ub===bb-1?"\u2514\u2500 ":"   ")).join("")}(Ub)}${Mb}${bb.constructor.name} (refId: ${Bb})${vb}${Tb}\n`;
        return Eb.forEachChild(((Mb, Tb) => {
          let Eb = Tb;
          "number" === typeof Tb && bb.$indexes && (Eb = bb.$indexes.get(Tb) ?? Tb);
          const Yb = void 0 !== bb.forEach && void 0 !== Eb ? `["${Eb}"]: ` : "";
          Lb += this.debugRefIds(Mb.ref, ab, Ub + 1, Ab, Yb)
        })), Lb
      }
      static debugRefIdEncodingOrder(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const Ub = [],
          Ab = bb[Rb];
        if ("changes" === ab) {
          let bb = Ab.root.changes?.next;
          for (; bb;) bb.changeTree && Ub.push(bb.changeTree.ref[Yb]), bb = bb.next;
          return Ub
        }
        const Mb = "allFilteredChanges" === ab,
          Tb = new Set,
          Eb = bb => {
            Tb.has(bb) || (Tb.add(bb), bb.isFiltered === Mb && Ub.push(bb.ref[Yb]), bb.forEachChild(((bb, ab) => Eb(bb))))
          };
        return Eb(Ab), Ub
      }
      static debugRefIdsFromDecoder(bb) {
        return this.debugRefIds(bb.state, !1, 0, bb)
      }
      static debugChanges(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = bb[Rb],
          Ab = ab ? "allChanges" : "changes";
        let Tb = `${bb.constructor.name} (${bb[Yb]}) -> .${Ab}:\n`;
        return ab ? Ub.forEachLive((bb => {
          Tb += `- [${bb}]: ADD (${JSON.stringify(Ub.getValue(Number(bb),!0))})\n`
        })) : Ub.forEach(((bb, ab) => {
          bb < 0 || !ab || (Tb += `- [${bb}]: ${Mb[ab]} (${JSON.stringify(Ub.getValue(Number(bb),!1))})\n`)
        })), Tb
      }
    }
    Tb(HA);
    const IA = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class dA {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const bb = {};
        for (const ab in this.changeTrees) bb[ab] = this.changeTrees[ab].refCount;
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
        this.types.hasFilters && (bb.flags & WU || (bb.flags |= WU, this.pendingFilterRefresh.push(bb)))
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
        const ab = bb.id;
        for (const Ub of this.streamTrees) Ub._dropView(ab)
      }
      forEachActiveView(bb) {
        for (const [ab, Ub] of this.activeViews) {
          const Ab = Ub.deref();
          if (void 0 !== Ab) bb(Ab);
          else {
            this.activeViews.delete(ab);
            for (const bb of this.streamTrees) bb._dropView(ab)
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = bb, this.nextUniqueId = ab
      }
      add(bb) {
        const ab = bb.ref;
        void 0 === ab[Yb] && (IA.value = this.nextUniqueId++, Object.defineProperty(ab, Yb, IA));
        const Ub = ab[Yb],
          Ab = void 0 === this.changeTrees[Ub];
        Ab && (this.changeTrees[Ub] = bb), bb.needsRestage && (bb.needsRestage = !1, bb.forEachLiveWithCtx(bb, UU));
        const Mb = Ab ? 0 : bb.refCount;
        return bb.refCount = Mb + 1, Mb > 0 && this.enqueueFilterRefresh(bb), Ab
      }
      remove(bb) {
        const ab = bb.refCount - 1;
        if (ab <= 0) {
          if (bb.root = void 0, delete this.changeTrees[bb.ref[Yb]], bb.isStreamCollection) {
            const ab = bb.ref;
            ab._unregister?.(), this.unregisterStream(ab)
          }
          this.removeFromQueue(bb), this.removeFromUnreliableQueue(bb), bb.refCount = 0, bb.needsRestage = !0, bb.forEachChild(((ab, Ub) => {
            ab.removeParent(bb.ref) && (void 0 === ab.parentRef || ab.refCount > 0 ? this.remove(ab) : this.moveNextToParent(ab))
          }))
        } else bb.refCount = ab, this.enqueueFilterRefresh(bb), this.recursivelyMoveNextToParent(bb);
        return ab
      }
      recursivelyMoveNextToParent(bb) {
        this.moveNextToParent(bb), bb.forEachChild(((bb, ab) => this.recursivelyMoveNextToParent(bb)))
      }
      moveNextToParent(bb) {
        bb.changesNode && this._moveNextToParentInList(this.changes, bb, bb.changesNode, "changesNode"), bb.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, bb, bb.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(bb, ab, Ub, Ab) {
        const Mb = ab.parent;
        if (!Mb || !Mb[Rb]) return;
        const Tb = Mb[Rb][Ab];
        Tb && Tb !== Ub && (Ub.position > Tb.position || (Ub.prev ? Ub.prev.next = Ub.next : bb.next = Ub.next, Ub.next ? Ub.next.prev = Ub.prev : bb.tail = Ub.prev, Ub.prev = bb.tail, Ub.next = void 0, bb.tail.next = Ub, bb.tail = Ub, Ub.position = bb.nextPosition++))
      }
      enqueueChangeTree(bb) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.changesNode) || (bb.changesNode = this._appendToList(this.changes, bb))
      }
      enqueueUnreliable(bb) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.unreliableChangesNode) || (bb.unreliableChangesNode = this._appendToList(this.unreliableChanges, bb))
      }
      _appendToList(bb, ab) {
        const Ub = this._nodePool;
        let Ab;
        return Ub.length > 0 ? (Ab = Ub.pop(), Ab.changeTree = ab, Ab.next = void 0, Ab.prev = void 0) : Ab = {
          changeTree: ab,
          next: void 0,
          prev: void 0,
          position: 0
        }, bb.next ? (Ab.prev = bb.tail, bb.tail.next = Ab, bb.tail = Ab) : (bb.nextPosition = 0, bb.next = Ab, bb.tail = Ab), Ab.position = bb.nextPosition++, Ab
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
      _removeNode(bb, ab, Ub, Ab) {
        return !(!Ub || Ub.changeTree !== ab) && (Ub.prev ? Ub.prev.next = Ub.next : bb.next = Ub.next, Ub.next ? Ub.next.prev = Ub.prev : bb.tail = Ub.prev, ab[Ab] = void 0, this.releaseNode(Ub), !0)
      }
    }

    function FA(bb, ab) {
      if (-1 === ab || ab >= bb.length) return !1;
      const Ub = bb.length - 1;
      for (let Ab = ab; Ab < Ub; Ab++) bb[Ab] = bb[Ab + 1];
      return bb.length = Ub, !0
    }

    function hA(bb, ab, Ub) {
      const Ab = ~Ub,
        Mb = bb.changeTrees;
      for (const Tb in Mb) {
        const bb = Mb[Tb],
          Ub = bb.visibleViews;
        void 0 !== Ub && ab < Ub.length && (Ub[ab] &= Ab);
        const Eb = bb.subscribedViews;
        void 0 !== Eb && ab < Eb.length && (Eb[ab] &= Ab);
        const Yb = bb.tagViews;
        void 0 !== Yb && Yb.forEach((bb => {
          ab < bb.length && (bb[ab] &= Ab)
        }))
      }
    }
    const GA = new FinalizationRegistry((bb => {
      let {
        root: ab,
        id: Ub,
        slot: Ab,
        bit: Mb
      } = bb;
      hA(ab, Ab, Mb), ab.activeViews.delete(Ub);
      for (const Tb of ab.streamTrees) Tb._dropView(Ub);
      ab.releaseViewId(Ub)
    }));

    function QA(bb) {
      if (void 0 === bb) return "undefined";
      if (null === bb) return "null";
      const ab = typeof bb;
      return "string" === ab ? JSON.stringify(bb.length > 30 ? `${bb.slice(0,30)}\u2026` : bb) : "object" !== ab && "function" !== ab ? `${ab} ${String(bb)}` : Array.isArray(bb) ? `Array(${bb.length})` : bb.constructor?.name ?? "Object"
    }
    class qA {
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
        void 0 === this._root && (this._root = bb, this.id = bb.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), bb.registerView(this), GA.register(this, {
          root: bb,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), hA(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), GA.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(bb) {
        const ab = bb.visibleViews,
          Ub = this._slot;
        return void 0 !== ab && Ub < ab.length && 0 !== (ab[Ub] & this._bit)
      }
      markVisible(bb) {
        const ab = this._slot;
        let Ub = bb.visibleViews;
        for (void 0 === Ub && (Ub = bb.visibleViews = []); Ub.length <= ab;) Ub.push(0);
        Ub[ab] |= this._bit
      }
      unmarkVisible(bb) {
        const ab = bb.visibleViews;
        if (void 0 === ab) return;
        const Ub = this._slot;
        Ub < ab.length && (ab[Ub] &= ~this._bit)
      }
      isSubscribed(bb) {
        const ab = bb.subscribedViews,
          Ub = this._slot;
        return void 0 !== ab && Ub < ab.length && 0 !== (ab[Ub] & this._bit)
      }
      _setSubscribed(bb) {
        const ab = this._slot;
        let Ub = bb.subscribedViews;
        for (void 0 === Ub && (Ub = bb.subscribedViews = []); Ub.length <= ab;) Ub.push(0);
        Ub[ab] |= this._bit
      }
      _clearSubscribed(bb) {
        const ab = bb.subscribedViews;
        if (void 0 === ab) return;
        const Ub = this._slot;
        Ub < ab.length && (ab[Ub] &= ~this._bit)
      }
      hasTagOnTree(bb, ab) {
        const Ub = bb.tagViews;
        if (void 0 === Ub) return !1;
        const Ab = this._slot,
          Mb = this._bit;
        for (let Tb = ab; 0 !== Tb; Tb &= Tb - 1) {
          const bb = Ub.get(Tb & -Tb);
          if (void 0 !== bb && Ab < bb.length && 0 !== (bb[Ab] & Mb)) return !0
        }
        return !1
      }
      addTag(bb, ab) {
        if (ab === jA) return;
        let Ub = bb.tagViews;
        void 0 === Ub && (Ub = bb.tagViews = new Map);
        const Ab = this._slot,
          Mb = this._bit;
        for (let Tb = ab; Tb > 0; Tb &= Tb - 1) {
          const bb = Tb & -Tb;
          let ab = Ub.get(bb);
          for (void 0 === ab && (ab = [], Ub.set(bb, ab)); ab.length <= Ab;) ab.push(0);
          ab[Ab] |= Mb
        }
      }
      removeTag(bb, ab) {
        if (ab === jA) return;
        const Ub = bb.tagViews;
        if (void 0 === Ub) return;
        const Ab = this._slot,
          Mb = ~this._bit;
        for (let Tb = ab; Tb > 0; Tb &= Tb - 1) {
          const bb = Ub.get(Tb & -Tb);
          void 0 !== bb && Ab < bb.length && (bb[Ab] &= Mb)
        }
      }
      removeAllTagsOnTree(bb) {
        const ab = bb.tagViews;
        if (void 0 === ab) return;
        const Ub = this._slot,
          Ab = ~this._bit;
        ab.forEach((bb => {
          Ub < bb.length && (bb[Ub] &= Ab)
        }))
      }
      add(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jA,
          Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(bb, ab, Ub, !1)
      }
      _addImmediate(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jA;
        this._add(bb, ab, !0, !0)
      }
      _add(bb, ab, Ub, Ab) {
        const Tb = bb?.[Rb];
        if (!Tb) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${QA(bb)}`), !1;
        const Eb = Tb.parent;
        if (!Eb && 0 !== bb[Yb]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Tb.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Tb.root && this._bindRoot(Tb.root);
        const Bb = Eb?.[Rb];
        if (!Ab && Bb?.isStreamCollection) return Fa(Eb, this.id, Tb.parentIndex), !0;
        const eb = bb.constructor[Symbol.metadata],
          vb = this.isVisible(Tb);
        if (!this.iterable || !Ub || vb && -1 !== this.items.indexOf(bb) || this.items.push(bb), this.markVisible(Tb), Ub && Eb && this.addParentOf(Tb, ab), !Ab && Tb.isStreamCollection) return !0;
        if (ab === jA && Tb.isNew) return this._markSubtreeVisible(Tb, ab), !1;
        let Lb = this.changes.get(bb[Yb]);
        void 0 === Lb && (Lb = new Map, this.changes.set(bb[Yb], Lb));
        let Pb = !1;
        const Xb = Tb.encDescriptor.tags;
        if (Tb.forEachChild(((bb, Ub) => {
            const Ab = Xb[Ub];
            if (void 0 !== Ab) {
              if (!(Ab === jA || ab !== jA && 0 !== (Ab & ab))) return
            }
            this.add(bb.ref, ab, !1) && (Pb = !0)
          })), ab !== jA) {
          this.addTag(Tb, ab);
          const bb = eb?.[Ib];
          if (void 0 !== bb)
            for (let Ub = ab; Ub > 0; Ub &= Ub - 1) bb[Ub & -Ub]?.forEach((bb => {
              Tb.getChange(bb) !== Mb.DELETE && Lb.set(bb, Mb.ADD)
            }))
        }
        if ((ab === jA || !vb) && (!Tb.isNew || Pb))
          if (Tb.isArray && "string" !== typeof Tb.refTarget[kb]) Tb.refTarget.items.length > 0 && (Lb.set(-1, Mb.ADD), Pb = !0);
          else {
            const bb = Tb.encDescriptor.tags;
            Tb.forEachLive((Ub => {
              const Ab = bb[Ub];
              (void 0 === Ab || Ab === jA || ab !== jA && 0 !== (Ab & ab)) && (Lb.set(Ub, Mb.ADD), Pb = !0)
            }))
          } return Pb
      }
      _markSubtreeVisible(bb, ab) {
        const Ub = bb.encDescriptor.tags;
        bb.forEachChild(((bb, Ab) => {
          const Mb = Ub[Ab];
          if (void 0 !== Mb) {
            if (!(Mb === jA || ab !== jA && 0 !== (Mb & ab))) return
          }
          bb.isNew ? (this.markVisible(bb), this._markSubtreeVisible(bb, ab)) : this._add(bb.ref, ab, !1, !1)
        }))
      }
      addParentOf(bb, ab) {
        const Ub = bb.parent[Rb],
          Ab = bb.parentIndex;
        this.isVisible(Ub) || this.markVisible(Ub);
        const Tb = Ub.parent?.[Rb];
        if (Tb && this.addParentOf(Ub, ab), Ub.hasFilteredFields && Ub.getChange(Ab) !== Mb.DELETE) {
          let Tb = this.changes.get(Ub.ref[Yb]);
          void 0 === Tb && (Tb = new Map, this.changes.set(Ub.ref[Yb], Tb));
          const Eb = Ub.encDescriptor.tags[Ab];
          void 0 !== Eb && Eb !== jA && 0 !== (Eb & ab) && this.addTag(Ub, ab), Tb.set(Ub.isArray ? bb : Ab, Mb.ADD)
        }
      }
      _touchAncestorsOf(bb) {
        let ab = bb.parent?.[Rb];
        if (void 0 === ab) return;
        const Ub = [];
        for (; void 0 !== ab;) {
          if (ab.hasFilteredFields) {
            const bb = ab.ref[Yb];
            if (this.changes.has(bb)) break;
            Ub.push(ab)
          }
          ab = ab.parent?.[Rb]
        }
        for (let Ab = Ub.length - 1; Ab >= 0; Ab--) this.changes.set(Ub[Ab].ref[Yb], new Map)
      }
      remove(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jA,
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = bb?.[Rb];
        if (!Ab) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${QA(bb)}`), this;
        const Tb = Ab.parent?.[Rb];
        if (Tb?.isStreamCollection) return this.unmarkVisible(Ab), this.iterable && !Ub && FA(this.items, this.items.indexOf(bb)),
          function(bb, ab, Ub, Ab, Tb) {
            const Eb = bb._stream;
            if (void 0 === Eb) return !1;
            const Yb = Eb.pendingByView.get(ab);
            if (Yb?.has(Ab)) return Yb.delete(Ab), !1;
            const Bb = Eb.sentByView.get(ab);
            if (Bb?.has(Ab)) {
              Bb.delete(Ab);
              let bb = Tb.get(Ub);
              return void 0 === bb && (bb = new Map, Tb.set(Ub, bb)), bb.set(Ab, Mb.DELETE), !0
            }
          }(Ab.parent, this.id, Ab.parent[Yb], Ab.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Ab), this;
        if (Ab.isStreamCollection) {
          this.unmarkVisible(Ab), this.iterable && !Ub && FA(this.items, this.items.indexOf(bb));
          const ab = Ab.ref,
            Tb = ab._stream;
          if (void 0 !== Tb) {
            Tb.pendingByView.get(this.id)?.clear();
            const bb = Tb.sentByView.get(this.id);
            if (void 0 !== bb && bb.size > 0) {
              const Ub = ab[Yb];
              let Ab = this.changes.get(Ub);
              void 0 === Ab && (Ab = new Map, this.changes.set(Ub, Ab));
              for (const ab of bb) Ab.set(ab, Mb.DELETE);
              bb.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Ab), this.iterable && !Ub && FA(this.items, this.items.indexOf(bb));
        const Eb = Ab.ref,
          Bb = Eb.constructor[Symbol.metadata],
          eb = Eb[Yb];
        this._touchAncestorsOf(Ab);
        let vb = this.changes.get(eb);
        if (void 0 === vb && (vb = new Map, this.changes.set(eb, vb)), ab === jA) {
          const bb = Ab.parent;
          if (bb && !Va.isValidInstance(bb) && Ab.isFiltered) {
            const ab = Tb.isArray ? Ab : Ab.parentIndex,
              Ub = bb[Yb];
            let Eb = this.changes.get(Ub);
            void 0 === Eb ? (Eb = new Map, this.changes.set(Ub, Eb)) : Eb.get(ab) === Mb.ADD && this._dropPendingEntries(Ab), Eb.set(ab, Mb.DELETE), this._recursiveDeleteVisibleChangeTree(Ab)
          } else Bb?.[Hb]?.forEach((bb => this._removeViewField(Ab, vb, bb)))
        } else {
          const bb = Bb?.[Ib];
          if (void 0 !== bb)
            for (let Ub = ab; Ub > 0; Ub &= Ub - 1) bb[Ub & -Ub]?.forEach((bb => this._removeViewField(Ab, vb, bb)))
        }
        return void 0 === ab ? this.removeAllTagsOnTree(Ab) : this.removeTag(Ab, ab), this
      }
      has(bb) {
        return this.isVisible(bb[Rb])
      }
      hasTag(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jA;
        return this.hasTagOnTree(bb[Rb], ab)
      }
      subscribe(bb, ab) {
        const Ub = bb?.[Rb];
        if (!Ub) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${QA(bb)}`), this;
        if (void 0 === this._root && void 0 !== Ub.root && this._bindRoot(Ub.root), void 0 !== ab)
          if (Ub.isStreamCollection) {
            const Ub = Na(bb);
            null === ab ? Ub.priorityByView?.delete(this.id) : (Ub.priorityByView ??= new Map).set(this.id, ab)
          } else {
            const ab = bb?.constructor?.name ?? "collection",
              Ab = Ub.parent;
            if (void 0 === Ab) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${ab} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const bb = Ab?.constructor?.[Symbol.metadata]?.[Ub.parentIndex]?.name,
                Mb = bb ? `${Ab.constructor.name}#${bb}` : ab;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Mb} is a ${ab}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(Ub)) return this;
        const Ab = void 0 !== Ub.parent && !this.isVisible(Ub);
        if (Ab ? (this.addParentOf(Ub, jA), this._add(bb, jA, !1, !1)) : this.markVisible(Ub), this._setSubscribed(Ub), Ub.isStreamCollection) {
          const ab = bb;
          Ub.forEachChild(((bb, Ub) => {
            Fa(ab, this.id, Ub)
          }))
        } else Ab || Ub.forEachChild((bb => {
          this.markVisible(bb)
        }));
        return this
      }
      unsubscribe(bb) {
        const ab = bb?.[Rb];
        if (!ab) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${QA(bb)}`), this;
        if (!this.isSubscribed(ab)) return this;
        this._clearSubscribed(ab);
        const Ub = ab.ref[Yb];
        if (ab.isStreamCollection) {
          const ab = bb._stream;
          if (void 0 !== ab) {
            ab.pendingByView.get(this.id)?.clear();
            const bb = ab.sentByView.get(this.id);
            if (void 0 !== bb && bb.size > 0) {
              let ab = this.changes.get(Ub);
              void 0 === ab && (ab = new Map, this.changes.set(Ub, ab));
              for (const Ub of bb) ab.set(Ub, Mb.DELETE);
              bb.clear()
            }
          }
        } else {
          const bb = ab.isArray;
          let Ab = this.changes.get(Ub);
          ab.forEachChild(((ab, Tb) => {
            void 0 === Ab && (Ab = new Map, this.changes.set(Ub, Ab)), Ab.set(bb ? ab : Tb, Mb.DELETE), this.unmarkVisible(ab)
          }))
        }
        return this.unmarkVisible(ab), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let bb = 0, ab = this.items.length; bb < ab; bb++) this.remove(this.items[bb], jA, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(bb) {
        let ab = this.isVisible(bb);
        if (!ab && bb.isVisibilitySharedWithParent)
          if (this.isVisible(bb.parent[Rb])) this.markVisible(bb), ab = !0;
          else
            for (let Ub = bb.extraParents; void 0 !== Ub; Ub = Ub.next) {
              const Ab = Ub.ref[Rb];
              if (Ab.isFiltered && this.isVisible(Ab)) {
                this.markVisible(bb), ab = !0;
                break
              }
            }
        return ab
      }
      _recursiveDeleteVisibleChangeTree(bb) {
        bb.forEachChild((bb => {
          this.unmarkVisible(bb), this._recursiveDeleteVisibleChangeTree(bb)
        }))
      }
      _dropPendingEntries(bb) {
        this.changes.delete(bb.ref[Yb]), bb.forEachChild((bb => this._dropPendingEntries(bb)))
      }
      _removeViewField(bb, ab, Ub) {
        const Ab = ab.get(Ub) === Mb.ADD;
        ab.set(Ub, Mb.DELETE);
        const Tb = bb.ref[bb.encDescriptor.names[Ub]],
          Eb = Tb?.[Rb];
        Eb && (this.unmarkVisible(Eb), this._recursiveDeleteVisibleChangeTree(Eb), Ab && this._dropPendingEntries(Eb))
      }
    }

    function uA(bb) {
      bb.structSwitchEmitted || (bb.shouldEmitSwitch && (bb.buffer[bb.it.offset++] = 255, aa.number(bb.buffer, bb.ref[Yb], bb.it)), bb.structSwitchEmitted = !0)
    }

    function rA(bb, ab) {
      lA(bb, ab, Mb.ADD)
    }

    function KA(bb, ab) {
      if (ab._fullSyncGen === bb.gen) return;
      ab._fullSyncGen = bb.gen;
      if (!bb.hasView || bb.view.isChangeTreeVisible(ab)) {
        const Ub = ab.encDescriptor;
        bb.changeTree = ab, bb.ref = ab.ref, bb.encoder = Ub.encoder, bb.filter = Ub.filter, bb.metadata = Ub.metadata, bb.treeIsFiltered = ab.isFiltered, bb.isSchema = Ub.isSchema, bb.filterBitmask = Ub.filterBitmask, bb.tags = Ub.tags, bb.structSwitchEmitted = !1, bb.shouldEmitSwitch = bb.hasView || bb.it.offset > bb.initialOffset || ab !== bb.rootChangeTree, ab.isArray && ab.collDirty.size > 0 && (ab.flags |= 512), MU(ab, bb, rA)
      }
      yU(ab, bb, oA)
    }

    function oA(bb, ab, Ub) {
      KA(bb, ab)
    }

    function lA(bb, ab, Ub) {
      if (ab < 0) {
        if (bb.treeIsFiltered !== bb.emitFiltered) return;
        return uA(bb), void(bb.buffer[bb.it.offset++] = 255 & Math.abs(ab))
      }
      if ((bb.isSchema ? bb.treeIsFiltered || (ab < 32 ? 0 !== (bb.filterBitmask & 1 << ab) : void 0 !== bb.tags[ab]) : bb.treeIsFiltered) !== bb.emitFiltered) return;
      const Ab = bb.isEncodeAll ? Mb.ADD : Ub;
      void 0 !== Ab && (void 0 === bb.filter || bb.filter(bb.ref, ab, bb.view)) && (uA(bb), bb.encoder(bb.self, bb.buffer, bb.changeTree, ab, Ab, bb.it, bb.isEncodeAll, bb.hasView, bb.metadata))
    }

    function tA(bb, ab) {
      const Ub = new Uint8Array(bb.length + ab.length);
      return Ub.set(bb, 0), Ub.set(ab, bb.length), Ub
    }
    class wA {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(wA.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(bb, ab) {
        this.context = oa.cache(bb.constructor), this.root = ab ?? new dA(this.context), this.setState(bb)
      }
      setState(bb) {
        this.state = bb, this.state[Rb].setRoot(this.root)
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
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.offset;
        return this._encodeChannel(bb, ab, Ub, Ab, !1)
      }
      encodeUnreliable() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.offset;
        return this._encodeChannel(bb, ab, Ub, Ab, !0)
      }
      _encodeChannel(bb, ab, Ub, Ab, Mb) {
        this.root.pendingFilterRefresh.length > 0 && EU(this.root);
        const Tb = void 0 !== ab,
          Eb = this.state[Rb],
          Yb = this._encodeCtx;
        Yb.self = this, Yb.buffer = Ub, Yb.it = bb, Yb.view = ab, Yb.isEncodeAll = !1, Yb.hasView = Tb, Yb.emitFiltered = Tb;
        let Bb = Mb ? this.root.unreliableChanges : this.root.changes;
        for (; Bb = Bb.next;) {
          const Ub = Bb.changeTree;
          if (Tb && !ab.isChangeTreeVisible(Ub)) continue;
          const eb = Mb ? Ub.unreliableRecorder : Ub;
          if (!eb || !eb.has()) continue;
          const vb = Ub.encDescriptor;
          Yb.changeTree = Ub, Yb.ref = Ub.ref, Yb.encoder = vb.encoder, Yb.filter = vb.filter, Yb.metadata = vb.metadata, Yb.treeIsFiltered = Ub.isFiltered, Yb.isSchema = vb.isSchema, Yb.filterBitmask = vb.filterBitmask, Yb.tags = vb.tags, Yb.structSwitchEmitted = !1, Yb.isRootTree = Ub === Eb, Yb.shouldEmitSwitch = Tb || bb.offset > Ab || !Yb.isRootTree, eb.forEachWithCtx(Yb, lA)
        }
        return Mb || Tb || !this._isStreamBroadcastMode || this._emitStreamBroadcast(Ub, bb), bb.offset > Ub.byteLength ? (Ub = this._resizeBuffer(Ub, bb.offset), bb.offset = Ab, this._encodeChannel(bb, ab, Ub, Ab, Mb)) : Ub.subarray(0, bb.offset)
      }
      encodeFullSync(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.offset;
        this.root.pendingFilterRefresh.length > 0 && EU(this.root);
        const Tb = void 0 !== Ab,
          Eb = this.state[Rb],
          Yb = this._encodeCtx;
        return Yb.self = this, Yb.buffer = ab, Yb.it = bb, Yb.view = Ab, Yb.isEncodeAll = !0, Yb.hasView = Tb, Yb.emitFiltered = Ub, Yb.gen = ++this._fullSyncGen, Yb.initialOffset = Mb, Yb.rootChangeTree = Eb, KA(Yb, Eb), bb.offset > ab.byteLength ? (ab = this._resizeBuffer(ab, bb.offset), bb.offset = Mb, this.encodeFullSync(bb, ab, Ub, Ab, Mb)) : ab.subarray(0, bb.offset)
      }
      _resizeBuffer(bb, ab) {
        const Ub = Math.ceil(ab / wA.BUFFER_SIZE) * wA.BUFFER_SIZE,
          Ab = new Uint8Array(Ub);
        return Ab.set(bb), bb === this.sharedBuffer && (this.sharedBuffer = Ab), Ab
      }
      encodeAll() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(bb, ab, !1)
      }
      encodeAllView(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Mb = Ub.offset;
        return Ab = this.encodeFullSync(Ub, Ab, !0, bb, Mb), tA(Ab.subarray(0, ab), Ab.subarray(Mb, Ub.offset))
      }
      ensureCapacity(bb, ab) {
        if (ab + wA.BUFFER_SIZE <= bb.byteLength) return bb;
        const Ub = Math.ceil((ab + wA.BUFFER_SIZE) / wA.BUFFER_SIZE) * wA.BUFFER_SIZE,
          Ab = new Uint8Array(Ub);
        return Ab.set(bb.subarray(0, ab)), bb === this.sharedBuffer && (this.sharedBuffer = Ab), Ab
      }
      encodeView(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Tb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Eb = Ub.offset;
        this._emitStreamPriority(bb);
        for (const Bb of bb.changes.keys()) {
          const ab = bb.changes.get(Bb),
            Tb = this.root.changeTrees[Bb];
          if (void 0 === Tb) {
            bb.changes.delete(Bb);
            continue
          }
          if (0 === ab.size) continue;
          const Eb = Tb.encDescriptor,
            eb = Eb.encoder,
            vb = Eb.metadata,
            Lb = Tb.ref,
            Xb = Tb.refTarget;
          Ab = this.ensureCapacity(Ab, Ub.offset), Ab[Ub.offset++] = 255, aa.number(Ab, Lb[Yb], Ub);
          for (const [Bb, jb] of ab) {
            let ab;
            if (-1 === Bb) {
              const bb = Xb.tmpItems,
                ab = Xb.deletedIndexes;
              for (let Eb = 0; Eb < bb.length; Eb++) void 0 !== bb[Eb] && !0 !== ab[Eb] && eb(this, Ab, Tb, Eb, Mb.ADD, Ub, !1, !0, vb);
              continue
            }
            if ("number" === typeof Bb) ab = Bb;
            else {
              const Ub = Bb.indexInParent(Lb);
              if (void 0 === Ub) continue;
              if (ab = Ub, jb === Mb.ADD && Tb.getChange(ab) === Mb.DELETE) {
                bb.changes.delete(Bb.ref[Yb]);
                continue
              }
            }
            eb(this, Ab, Tb, ab, void 0 !== Xb[Pb](ab) && jb || Mb.DELETE, Ub, !1, !0, vb)
          }
        }
        return bb.changes.clear(), Ab = this.encode(Ub, bb, Ab), Tb ? tA(Ab.subarray(0, ab), Ab.subarray(Eb, Ub.offset)) : Ab.subarray(Eb, Ub.offset)
      }
      encodeUnreliableView(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Mb = Ub.offset;
        return Ab = this.encodeUnreliable(Ub, bb, Ab, Mb), tA(Ab.subarray(0, ab), Ab.subarray(Mb, Ub.offset))
      }
      _emitStreamBroadcast(bb, ab) {
        const Ub = this.root.streamTrees;
        for (const Ab of Ub) {
          const Ub = Ab,
            Tb = Ub[Rb],
            Eb = Ub[Yb];
          if (void 0 === Eb) continue;
          const Bb = Ub._stream,
            eb = Bb.broadcastDeletes,
            vb = Bb.broadcastPending,
            Lb = Bb.sentBroadcast,
            Xb = eb.size > 0,
            jb = vb.size > 0,
            kb = Tb.encDescriptor,
            yb = kb.encoder,
            Zb = kb.metadata;
          if (Xb || jb) {
            if (bb[ab.offset++] = 255, aa.number(bb, Eb, ab), Xb) {
              for (const Ub of eb) yb(this, bb, Tb, Ub, Mb.DELETE, ab, !1, !1, Zb);
              eb.clear()
            }
            const Ab = Bb.maxPerTick,
              jb = [];
            let kb = 0;
            const Db = [];
            for (const Eb of vb) {
              if (kb >= Ab) break;
              const Yb = Ub[Pb](Eb);
              void 0 !== Yb ? (yb(this, bb, Tb, Eb, Mb.ADD, ab, !1, !1, Zb), Lb.add(Eb), jb.push(Yb), Db.push(Eb), kb++) : Db.push(Eb)
            }
            for (const bb of Db) vb.delete(bb);
            for (const Ub of jb) {
              const Ab = Ub[Rb];
              if (void 0 === Ab) continue;
              const Tb = Ub[Yb];
              if (void 0 === Tb) continue;
              bb[ab.offset++] = 255, aa.number(bb, Tb, ab);
              const Eb = Ab.encDescriptor,
                Bb = Eb.encoder,
                eb = Eb.metadata;
              Ab.forEachLive((Ub => {
                Va.hasUnreliableAtIndex(eb, Ub) || Bb(this, bb, Ab, Ub, Mb.ADD, ab, !1, !1, eb)
              }))
            }
          }
          for (const Ab of Lb) {
            const Mb = Ub[Pb](Ab);
            if (void 0 === Mb) continue;
            const Tb = Mb[Rb];
            if (void 0 === Tb || !Tb.has()) continue;
            const Eb = Mb[Yb];
            if (void 0 === Eb) continue;
            bb[ab.offset++] = 255, aa.number(bb, Eb, ab);
            const Bb = Tb.encDescriptor,
              eb = Bb.encoder,
              vb = Bb.metadata;
            Tb.forEach(((Ub, Ab) => {
              Ub < 0 || Va.hasUnreliableAtIndex(vb, Ub) || eb(this, bb, Tb, Ub, Ab, ab, !1, !1, vb)
            }))
          }
        }
      }
      _emitStreamPriority(bb) {
        const ab = this.root.streamTrees;
        if (0 === ab.size) return;
        const Ub = bb.id;
        for (const Ab of ab) {
          const ab = Ab,
            Tb = ab._stream,
            Eb = Tb.pendingByView.get(Ub);
          if (void 0 === Eb || 0 === Eb.size) continue;
          const Bb = Tb.priorityByView?.get(Ub),
            eb = void 0 !== Bb,
            vb = Tb.priority,
            Lb = Tb.maxPerTick,
            Xb = [],
            jb = [];
          if (eb || void 0 !== vb) {
            const Ub = [],
              Ab = [];
            let Mb = 0;
            for (const Tb of Eb) {
              const Eb = ab[Pb](Tb);
              if (void 0 === Eb) {
                jb.push(Tb);
                continue
              }
              const Yb = eb ? Bb(Eb) : vb(bb, Eb);
              if (Mb < Lb) {
                let bb = Mb++;
                for (; bb > 0 && Ab[bb - 1] < Yb;) Ab[bb] = Ab[bb - 1], Ub[bb] = Ub[bb - 1], bb--;
                Ab[bb] = Yb, Ub[bb] = Tb
              } else if (Yb > Ab[Lb - 1]) {
                let bb = Lb - 1;
                for (; bb > 0 && Ab[bb - 1] < Yb;) Ab[bb] = Ab[bb - 1], Ub[bb] = Ub[bb - 1], bb--;
                Ab[bb] = Yb, Ub[bb] = Tb
              }
            }
            for (let bb = 0; bb < Mb; bb++) Xb.push(Ub[bb])
          } else
            for (const bb of Eb) {
              if (Xb.length >= Lb) break;
              Xb.push(bb)
            }
          for (const bb of jb) Eb.delete(bb);
          const kb = Xb.length;
          let yb = Tb.sentByView.get(Ub);
          void 0 === yb && (yb = new Set, Tb.sentByView.set(Ub, yb));
          for (let Ub = 0; Ub < kb; Ub++) {
            const Ab = Xb[Ub],
              Tb = ab[Pb](Ab);
            if (void 0 === Tb) {
              Eb.delete(Ab);
              continue
            }
            bb._addImmediate(Tb);
            const Bb = Tb[Rb];
            if (void 0 !== Bb) {
              const ab = Tb[Yb];
              let Ub = bb.changes.get(ab);
              void 0 === Ub && (Ub = new Map, bb.changes.set(ab, Ub));
              const Ab = Bb.metadata;
              Bb.forEachLive((bb => {
                Va.hasUnreliableAtIndex(Ab, bb) || Ub.set(bb, Mb.ADD)
              }))
            }
            Eb.delete(Ab), yb.add(Ab)
          }
        }
      }
      discardChanges() {
        const bb = this.root.changes;
        let ab = bb.next;
        const Ub = this.root;
        for (; ab;) {
          const bb = ab.next;
          ab.changeTree.endEncode(), Ub.releaseNode(ab), ab = bb
        }
        bb.next = void 0, bb.tail = void 0
      }
      discardUnreliableChanges() {
        const bb = this.root.unreliableChanges;
        let ab = bb.next;
        const Ub = this.root;
        for (; ab;) {
          const bb = ab.next;
          ab.changeTree.endEncodeUnreliable(), Ub.releaseNode(ab), ab = bb
        }
        bb.next = void 0, bb.tail = void 0
      }
      tryEncodeTypeId(bb, ab, Ub, Ab) {
        const Mb = this.context.getTypeId(ab),
          Tb = this.context.getTypeId(Ub);
        void 0 !== Tb ? Mb !== Tb && (bb[Ab.offset++] = 213, aa.number(bb, Tb, Ab)) : console.warn(`@colyseus/schema WARNING: Class "${Ub.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const ab = 0 === bb.activeViews.size;
        for (const Ub of bb.streamTrees)
          if (ab ? da(Ub) : Ia(Ub, bb)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class sA extends Error {
      constructor(bb) {
        super(bb), this.name = "DecodingWarning"
      }
    }
    const gA = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class CA {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(bb, ab), void 0 === ab[Yb] ? (gA.value = bb, Object.defineProperty(ab, Yb, gA)) : ab[Yb] !== bb && (ab[Yb] = bb), Ub && (this.refCount[bb] = (this.refCount[bb] || 0) + 1), this.deletedRefs.has(bb) && this.deletedRefs.delete(bb)
      }
      removeRef(bb) {
        const ab = this.refCount[bb];
        if (void 0 !== ab)
          if (0 !== ab)(this.refCount[bb] = ab - 1) <= 0 && this.deletedRefs.add(bb);
          else try {
            const ab = this.refs.get(bb);
            throw new sA(`trying to remove refId '${bb}' with 0 refCount (${ab.constructor.name}: ${JSON.stringify(ab)})`)
          } catch (TM) {
            console.warn(TM)
          } else try {
            throw new sA("trying to remove refId that doesn't exist: " + bb)
          } catch (TM) {
            console.warn(TM)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((bb => {
          if (this.refCount[bb] > 0) return;
          const ab = this.refs.get(bb),
            Ub = ab.constructor[Symbol.metadata];
          if (null != Ub)
            for (const Ab in Ub) {
              const bb = ab[Ub[Ab].name];
              if ("object" === typeof bb && bb) {
                const ab = bb[Yb];
                void 0 === ab || this.deletedRefs.has(ab) || this.removeRef(ab)
              }
            } else "function" === typeof ab[kb] && Array.from(ab.values()).forEach((bb => {
              const ab = bb[Yb];
              void 0 === ab || this.deletedRefs.has(ab) || this.removeRef(ab)
            }));
          this.refs.delete(bb), delete this.refCount[bb], delete this.callbacks[bb]
        })), this.deletedRefs.clear()
      }
      addCallback(bb, ab, Ub) {
        if (void 0 === bb) {
          const bb = "number" === typeof ab ? Mb[ab] : ab;
          throw new Error(`Can't addCallback on '${bb}' (refId is undefined)`)
        }
        return this.callbacks[bb] || (this.callbacks[bb] = {}), this.callbacks[bb][ab] || (this.callbacks[bb][ab] = []), this.callbacks[bb][ab].push(Ub), () => this.removeCallback(bb, ab, Ub)
      }
      removeCallback(bb, ab, Ub) {
        const Ab = this.callbacks?.[bb]?.[ab]?.indexOf(Ub);
        void 0 !== Ab && -1 !== Ab && FA(this.callbacks[bb][ab], Ab)
      }
    }
    class VA {
      context;
      state;
      root;
      currentRefId = 0;
      zN;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(bb, ab) {
        this.setState(bb), this.context = ab || new oa(bb.constructor)
      }
      setState(bb) {
        this.state = bb, this.root = new CA, this.root.addRef(0, bb)
      }
      decode(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Mb = void 0 !== this.zN ? [] : null,
          Tb = this.root,
          Eb = bb.byteLength;
        let Yb = Ub.constructor[vb];
        for (this.currentRefId = 0; ab.offset < Eb;) {
          if (bb[ab.offset] == Ab) {
            ab.offset++, Ub[zb]?.();
            const Ab = Da.number(bb, ab),
              Mb = Tb.refs.get(Ab);
            Mb ? (Ub = Mb, Yb = Ub.constructor[vb], this.currentRefId = Ab) : (console.error(`"refId" not found: ${Ab}`, {
              previousRef: Ub,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(bb, ab, Eb));
            continue
          } - 1 !== Yb(this, bb, ab, Ub, Mb) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(bb, ab, Eb))
        }
        return Ub[zb]?.(), null !== this.resyncVisited && function(bb, ab) {
          bb.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : oU(bb, bb.state, new Set, ab)
        }(this, Mb), null !== Mb && this.zN?.(Mb), Tb.garbageCollectDeletedRefs(), Mb
      }
      decodeResync(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(bb, ab)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(bb, ab, Ub) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Mb = {
          offset: ab.offset
        };
        for (; ab.offset < Ub && (bb[ab.offset] !== Ab || (Mb.offset = ab.offset + 1, !this.root.refs.has(Da.number(bb, Mb))));) ab.offset++
      }
      getInstanceType(bb, ab, Ub) {
        let Ab;
        if (213 === bb[ab.offset]) {
          ab.offset++;
          const Ub = Da.number(bb, ab);
          Ab = this.context.get(Ub)
        }
        return Ab || Ub
      }
      createInstanceOfType(bb) {
        return bb.initializeForDecoder()
      }
      removeChildRefs(bb, ab) {
        const Ub = "string" !== typeof bb[kb],
          Ab = bb[Yb];
        bb.forEach(((Tb, Eb) => {
          ab?.push({
            ref: bb,
            refId: Ab,
            op: Mb.DELETE,
            field: Eb,
            value: void 0,
            previousValue: Tb
          }), Ub && this.root.removeRef(Tb[Yb])
        }))
      }
    }
    const OA = NA({
        min: XA.float64(),
        max: XA.float64(),
        bits: XA.uint8(),
        mode: XA.uint8()
      }, "QuantizedDescriptor"),
      cA = NA({
        name: XA.string(),
        type: XA.string(),
        referencedType: XA.number(),
        childPrimitive: XA.string(),
        quantized: XA.ref(OA).optional()
      }, "ReflectionField"),
      JA = NA({
        id: XA.number(),
        extendsId: XA.number(),
        fields: XA.array(cA)
      }, "ReflectionType"),
      nA = NA({
        types: XA.array(JA),
        rootType: XA.number()
      }, "Reflection");

    function SA(bb) {
      const ab = bb.root,
        Ub = ab.callbacks,
        Ab = new WeakMap;
      let Tb;

      function Eb(bb, Ub) {
        let eb = Ub.instance?.constructor[Symbol.metadata] || bb,
          vb = Ub.instance && "function" === typeof Ub.instance.forEach || bb && !HA.is(bb);
        if (eb && !vb) {
          const bb = function(bb, Mb, Eb, Bb) {
            return Bb && void 0 !== Ub.instance[Mb] && !Ab.has(Tb) && Eb(Ub.instance[Mb], void 0), ab.addCallback(bb[Yb], Mb, Eb)
          };
          return new Proxy({
            listen: function(ab, Mb) {
              let Eb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (Ub.instance) return bb(Ub.instance, ab, Mb, Eb);
              {
                let Yb = () => {};
                return Ub.onInstanceAvailable(((Ub, Bb) => {
                  Yb = bb(Ub, ab, Mb, Eb && Bb && !Ab.has(Tb))
                })), () => Yb()
              }
            },
            onChange: function(bb) {
              return ab.addCallback(Ub.instance[Yb], Mb.REPLACE, bb)
            },
            bindTo: function(bb, Ab) {
              return Ab || (Ab = Object.keys(eb).map((bb => eb[bb].name))), ab.addCallback(Ub.instance[Yb], Mb.REPLACE, (() => {
                Ab.forEach((ab => bb[ab] = Ub.instance[ab]))
              }))
            }
          }, {
            get(bb, ab) {
              const Ab = eb[eb[ab]];
              if (Ab) {
                const bb = Ub.instance?.[ab],
                  Mb = Ab => {
                    const Mb = Bb(Ub.instance).listen(ab, ((bb, ab) => {
                      Ab(bb, !1), Mb?.()
                    }), !1);
                    void 0 !== bb?.[Yb] && Ab(bb, !0)
                  };
                return Eb(Ab.type, {
                  instance: void 0 !== bb?.[Yb] && bb,
                  parentInstance: Ub.instance,
                  onInstanceAvailable: Mb
                })
              }
              return bb[ab]
            },
            has: (bb, ab) => void 0 !== eb[ab],
            set(bb, ab, Ub) {
              throw new Error("not allowed")
            },
            deleteProperty(bb, ab) {
              throw new Error("not allowed")
            }
          })
        } {
          const bb = function(bb, Ub, Eb) {
              return Eb && bb.forEach(((bb, ab) => Ub(bb, ab))), ab.addCallback(bb[Yb], Mb.ADD, ((bb, ab) => {
                Ab.set(Ub, !0), Tb = Ub, Ub(bb, ab), Ab.delete(Ub), Tb = void 0
              }))
            },
            Eb = function(bb, Ub) {
              return ab.addCallback(bb[Yb], Mb.DELETE, Ub)
            },
            Bb = function(bb, Ub) {
              return ab.addCallback(bb[Yb], Mb.REPLACE, Ub)
            };
          return new Proxy({
            uZ: function(ab) {
              let Mb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (Ub.instance) return bb(Ub.instance, ab, Mb && !Ab.has(Tb));
              if (Ub.onInstanceAvailable) {
                let Eb = () => {};
                return Ub.onInstanceAvailable(((Ub, Yb) => {
                  Eb = bb(Ub, ab, Mb && Yb && !Ab.has(Tb))
                })), () => Eb()
              }
            },
            kp: function(bb) {
              if (Ub.instance) return Eb(Ub.instance, bb);
              if (Ub.onInstanceAvailable) {
                let ab = () => {};
                return Ub.onInstanceAvailable((Ub => {
                  ab = Eb(Ub, bb)
                })), () => ab()
              }
            },
            onChange: function(bb) {
              if (Ub.instance) return Bb(Ub.instance, bb);
              if (Ub.onInstanceAvailable) {
                let ab = () => {};
                return Ub.onInstanceAvailable((Ub => {
                  ab = Bb(Ub, bb)
                })), () => ab()
              }
            }
          }, {
            get(bb, ab) {
              if (!bb[ab]) throw new Error(`Can't access '${ab}' through callback proxy. access the instance directly.`);
              return bb[ab]
            },
            has: (bb, ab) => void 0 !== bb[ab],
            set(bb, ab, Ub) {
              throw new Error("not allowed")
            },
            deleteProperty(bb, ab) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Bb(bb) {
        return Eb(void 0, {
          instance: bb
        })
      }
      return bb.zN = function(bb) {
        const ab = new Set;
        for (let Ab = 0, Tb = bb.length; Ab < Tb; Ab++) {
          const Tb = bb[Ab],
            Eb = Tb.refId,
            Bb = Tb.ref,
            eb = Ub[Eb];
          if (eb) {
            if ((Tb.op & Mb.DELETE) === Mb.DELETE && HA.isSchema(Tb.previousValue)) {
              const bb = Ub[Tb.previousValue[Yb]]?.[Mb.DELETE];
              for (let ab = bb?.length - 1; ab >= 0; ab--) bb[ab]()
            }
            if (HA.isSchema(Bb)) {
              if (!ab.has(Eb)) {
                const bb = eb?.[Mb.REPLACE];
                for (let ab = bb?.length - 1; ab >= 0; ab--) bb[ab]()
              }
              if (eb.hasOwnProperty(Tb.field)) {
                const bb = eb[Tb.field];
                for (let ab = bb?.length - 1; ab >= 0; ab--) bb[ab](Tb.value, Tb.previousValue)
              }
            } else {
              if ((Tb.op & Mb.DELETE) === Mb.DELETE) {
                if (void 0 !== Tb.previousValue) {
                  const bb = eb[Mb.DELETE];
                  for (let ab = bb?.length - 1; ab >= 0; ab--) bb[ab](Tb.previousValue, Tb.dynamicIndex ?? Tb.field)
                }
                if ((Tb.op & Mb.ADD) === Mb.ADD) {
                  const bb = eb[Mb.ADD];
                  for (let ab = bb?.length - 1; ab >= 0; ab--) bb[ab](Tb.value, Tb.dynamicIndex ?? Tb.field)
                }
              } else if ((Tb.op & Mb.ADD) === Mb.ADD && Tb.previousValue !== Tb.value) {
                const bb = eb[Mb.ADD];
                for (let ab = bb?.length - 1; ab >= 0; ab--) bb[ab](Tb.value, Tb.dynamicIndex ?? Tb.field)
              }
              if (Tb.value !== Tb.previousValue && (void 0 !== Tb.value || void 0 !== Tb.previousValue)) {
                const bb = eb[Mb.REPLACE];
                for (let ab = bb?.length - 1; ab >= 0; ab--) bb[ab](Tb.value, Tb.dynamicIndex ?? Tb.field)
              }
            }
            ab.add(Eb)
          }
        }
      }, Bb
    }

    function bM(bb, ab) {
      bb.zN = ab
    }
    nA.encode = function(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const Ub = bb.context,
        Ab = new nA,
        Mb = new wA(Ab),
        Tb = Ub.schemas.get(bb.state.constructor);
      Tb > 0 && (Ab.rootType = Tb);
      const Eb = new Set,
        Yb = {},
        Bb = bb => {
          if (void 0 === bb.extendsId || Eb.has(bb.extendsId)) {
            Eb.add(bb.id), Ab.types.push(bb);
            const ab = Yb[bb.id];
            void 0 !== ab && (delete Yb[bb.id], ab.forEach((bb => Bb(bb))))
          } else void 0 === Yb[bb.extendsId] && (Yb[bb.extendsId] = []), Yb[bb.extendsId].push(bb)
        };
      Ub.schemas.forEach(((bb, ab) => {
        const Ab = new JA;
        Ab.id = Number(bb);
        const Mb = Object.getPrototypeOf(ab);
        Mb !== HA && (Ab.extendsId = Ub.schemas.get(Mb));
        const Tb = ab[Symbol.metadata];
        if (Tb !== Mb[Symbol.metadata]) {
          const bb = Tb[Nb] ?? -1;
          for (let ab = 0; ab <= bb; ab++) {
            const bb = Tb[ab];
            if (void 0 === bb) continue;
            const Mb = bb.name;
            if (!Object.prototype.hasOwnProperty.call(Tb, Mb)) continue;
            const Eb = new cA;
            let Yb;
            if (Eb.name = Mb, "string" === typeof bb.type) Yb = bb.type;
            else if (qa(bb.type)) {
              const ab = bb.type.quantized;
              Yb = "quantized";
              const Ub = new OA;
              Ub.min = ab.min, Ub.max = ab.max, Ub.bits = ab.bits, Ub.mode = ab.wrap ? 1 : 0, Eb.quantized = Ub
            } else {
              let ab;
              HA.is(bb.type) ? (Yb = "ref", ab = bb.type) : (Yb = Object.keys(bb.type)[0], "string" === typeof bb.type[Yb] ? Eb.childPrimitive = bb.type[Yb] : ab = bb.type[Yb]), Eb.referencedType = ab ? Ub.getTypeId(ab) : -1
            }
            Eb.type = Yb, Ab.fields.push(Eb)
          }
        }
        Bb(Ab)
      }));
      for (const eb in Yb) Yb[eb].forEach((bb => Ab.types.push(bb)));
      return Mb.encodeAll(ab).slice(0, ab.offset)
    }, nA.decode = function(bb, ab) {
      const Ub = new nA;
      new VA(Ub).decode(bb, ab);
      const Ab = new oa;
      Ub.types.forEach((bb => {
        const ab = Ab.get(bb.extendsId) ?? HA,
          Ub = class extends ab {};
        oa.register(Ub), Ab.add(Ub, bb.id)
      }), {});
      Ub.types.forEach((bb => {
        const ab = Ab.get(bb.id),
          Mb = Va.initialize(ab),
          Tb = [];
        let Eb = bb;
        do {
          Tb.push(Eb), Eb = Ub.types.find((bb => bb.id === Eb.extendsId))
        } while (Eb);
        let Yb = 0;
        Tb.reverse().forEach((bb => {
          ((bb, ab, Ub) => {
            ab.fields.forEach(((ab, Mb) => {
              const Tb = Ub + Mb;
              if (void 0 !== ab.quantized) {
                const Ub = ab.quantized;
                Va.addField(bb, Tb, ab.name, {
                  quantized: Qa({
                    min: Ub.min,
                    max: Ub.max,
                    bits: Ub.bits,
                    mode: 1 === Ub.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== ab.referencedType) {
                const Ub = ab.type,
                  Mb = Ab.get(ab.referencedType) ?? ab.childPrimitive;
                "ref" === Ub ? Va.addField(bb, Tb, ab.name, Mb) : Va.addField(bb, Tb, ab.name, {
                  [Ub]: Mb
                })
              } else Va.addField(bb, Tb, ab.name, ab.type)
            }))
          })(Mb, bb, Yb), Yb += bb.fields.length
        }))
      }));
      const Mb = new(Ab.get(Ub.rootType || 0));
      return new VA(Mb, Ab)
    }, nA.makeEncodable = function(bb) {
      const ab = bb[Symbol.metadata];
      if (!ab) return bb;
      const Ub = ab[Nb];
      if (void 0 === Ub) return bb;
      for (let Ab = 0; Ab <= Ub; Ab++) {
        const Ub = ab[Ab];
        Ub && Va.defineField(bb, ab, Ab, Ub.name, Ub.type)
      }
      return Object.prototype.hasOwnProperty.call(bb, mb) && delete bb[mb], bb
    };
    class aM {
      rX;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(bb) {
        this.rX = bb, this.rX.zN = this.zN.bind(this)
      }
      get callbacks() {
        return this.rX.root.callbacks
      }
      get state() {
        return this.rX.state
      }
      addCallback(bb, ab, Ub) {
        return this.rX.root.addCallback(bb, ab, Ub)
      }
      addCallbackOrWaitCollectionAvailable(bb, ab, Ub, Ab) {
        let Tb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Eb = () => {};
        const Bb = () => Eb(),
          eb = bb[ab];
        if (eb && void 0 !== eb[Yb]) return Tb = Tb && !1 === this.isTriggering, Ub === Mb.ADD && Tb && eb.forEach(((bb, ab) => {
          Ab(bb, ab)
        })), this.addCallback(eb[Yb], Ub, Ab);
        {
          let Mb;
          return Mb = this.addCallback(bb[Yb], ab, ((bb, ab) => {
            null !== bb && void 0 !== bb && (Mb(), Eb = this.addCallback(bb[Yb], Ub, Ab))
          })), Eb = Mb, Bb
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(bb, ab, Ub) {
        let Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Ab = Ab && !1 === this.isTriggering;
        const Mb = bb[ab];
        return Ab && null !== Mb && void 0 !== Mb && Ub(Mb, void 0), this.addCallback(bb[Yb], ab, Ub)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const bb = arguments.length <= 0 ? void 0 : arguments[0],
            ab = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(bb[Yb], Mb.REPLACE, ab)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Mb.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Mb.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      uZ() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Mb.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Mb.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      kp() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Mb.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Mb.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(bb, ab, Ub) {
        let Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Tb = bb.constructor[Symbol.metadata];
        Ub || (Ub = Object.keys(Tb).filter((bb => !isNaN(Number(bb)))).map((bb => Tb[bb].name)));
        const Eb = () => {
          for (const Ab of Ub) {
            const Ub = bb[Ab];
            void 0 !== Ub && (ab[Ab] = Ub)
          }
        };
        return Ab && Eb(), this.addCallback(bb[Yb], Mb.REPLACE, Eb)
      }
      zN(bb) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let ab = 0, Ub = bb.length; ab < Ub; ab++) {
          const Ub = bb[ab],
            Ab = Ub.refId,
            Tb = Ub.ref,
            Eb = this.callbacks[Ab];
          if (Eb) {
            if ((Ub.op & Mb.DELETE) === Mb.DELETE && HA.isSchema(Ub.previousValue)) {
              const bb = Ub.previousValue[Yb],
                ab = this.callbacks[bb]?.[Mb.DELETE];
              if (ab)
                for (let Ub = ab.length - 1; Ub >= 0; Ub--) try {
                  ab[Ub]()
                } catch (TM) {
                  console.error(TM)
                }
            }
            if (HA.isSchema(Tb)) {
              if (!this.uniqueRefIds.has(Ab)) {
                const bb = Eb[Mb.REPLACE];
                if (bb)
                  for (let ab = bb.length - 1; ab >= 0; ab--) try {
                    bb[ab]()
                  } catch (TM) {
                    console.error(TM)
                  }
              }
              const bb = Eb[Ub.field];
              if (bb)
                for (let ab = bb.length - 1; ab >= 0; ab--) try {
                  bb[ab](Ub.value, Ub.previousValue)
                } catch (TM) {
                  console.error(TM)
                }
            } else {
              const bb = Ub.dynamicIndex ?? Ub.field;
              if ((Ub.op & Mb.DELETE) === Mb.DELETE) {
                if (void 0 !== Ub.previousValue) {
                  const ab = Eb[Mb.DELETE];
                  if (ab)
                    for (let Ab = ab.length - 1; Ab >= 0; Ab--) try {
                      ab[Ab](Ub.previousValue, bb)
                    } catch (TM) {
                      console.error(TM)
                    }
                }
                if ((Ub.op & Mb.ADD) === Mb.ADD) {
                  const ab = Eb[Mb.ADD];
                  if (ab)
                    for (let Ab = ab.length - 1; Ab >= 0; Ab--) try {
                      ab[Ab](Ub.value, bb)
                    } catch (TM) {
                      console.error(TM)
                    }
                }
              } else if ((Ub.op & Mb.ADD) === Mb.ADD && Ub.previousValue !== Ub.value) {
                const ab = Eb[Mb.ADD];
                if (ab)
                  for (let Ab = ab.length - 1; Ab >= 0; Ab--) try {
                    ab[Ab](Ub.value, bb)
                  } catch (TM) {
                    console.error(TM)
                  }
              }
              if (Ub.value !== Ub.previousValue) {
                const ab = Eb[Mb.REPLACE];
                if (ab)
                  for (let Ab = ab.length - 1; Ab >= 0; Ab--) try {
                    ab[Ab](bb, Ub.value)
                  } catch (TM) {
                    console.error(TM)
                  }
              }
            }
            this.uniqueRefIds.add(Ab)
          }
        }
        this.isTriggering = !1
      }
    }
    const UM = {
      get(bb) {
        if (bb instanceof VA) return new aM(bb);
        if ("rX" in bb.Vk) return new aM(bb.Vk.rX);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(bb) {
        if (bb instanceof VA) return SA(bb);
        if ("rX" in bb.Vk) return SA(bb.Vk.rX);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (bb, ab) => bM(bb, ab)
    };
    class AM {
      _free = [];
      _factory;
      _maxSize;
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = bb, this._maxSize = ab.maxSize ?? 1 / 0;
        const Ub = ab.preallocate ?? 0;
        for (let Ab = 0; Ab < Ub; Ab++) this._free.push(bb())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(bb) {
        HA.reset(bb), this._free.length < this._maxSize && this._free.push(bb)
      }
      get size() {
        return this._free.length
      }
    }

    function MM(bb) {
      return new AM((() => new bb), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    ia("map", {
      constructor: MA
    }), ia("array", {
      constructor: UA
    }), ia("set", {
      constructor: EA
    }), ia("collection", {
      constructor: TA
    })
  },
  8665: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      __addDisposableResource: () => qb,
      __assign: () => Tb,
      __asyncDelegator: () => pb,
      __asyncGenerator: () => mb,
      __asyncValues: () => Nb,
      __await: () => fb,
      __awaiter: () => jb,
      __classPrivateFieldGet: () => hb,
      __classPrivateFieldIn: () => Qb,
      __classPrivateFieldSet: () => Gb,
      __createBinding: () => kb,
      __decorate: () => Yb,
      __disposeResources: () => rb,
      __esDecorate: () => eb,
      __exportStar: () => yb,
      __extends: () => Mb,
      __generator: () => Rb,
      __importDefault: () => Fb,
      __importStar: () => db,
      __makeTemplateObject: () => Wb,
      __metadata: () => Xb,
      __param: () => Bb,
      __propKey: () => Lb,
      __read: () => Db,
      __rest: () => Eb,
      __rewriteRelativeImportExtension: () => Kb,
      __runInitializers: () => vb,
      __setFunctionName: () => Pb,
      __spread: () => zb,
      __spreadArray: () => ib,
      __spreadArrays: () => xb,
      __values: () => Zb,
      default: () => ob
    });
    var Ab = function(bb, ab) {
      return Ab = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(bb, ab) {
        bb.__proto__ = ab
      } || function(bb, ab) {
        for (var Ub in ab) Object.prototype.hasOwnProperty.call(ab, Ub) && (bb[Ub] = ab[Ub])
      }, Ab(bb, ab)
    };

    function Mb(bb, ab) {
      if ("function" !== typeof ab && null !== ab) throw new TypeError("Class extends value " + String(ab) + " is not a constructor or null");

      function Ub() {
        this.constructor = bb
      }
      Ab(bb, ab), bb.prototype = null === ab ? Object.create(ab) : (Ub.prototype = ab.prototype, new Ub)
    }
    var Tb = function() {
      return Tb = Object.assign || function(bb) {
        for (var ab, Ub = 1, Ab = arguments.length; Ub < Ab; Ub++)
          for (var Mb in ab = arguments[Ub]) Object.prototype.hasOwnProperty.call(ab, Mb) && (bb[Mb] = ab[Mb]);
        return bb
      }, Tb.apply(this, arguments)
    };

    function Eb(bb, ab) {
      var Ub = {};
      for (var Ab in bb) Object.prototype.hasOwnProperty.call(bb, Ab) && ab.indexOf(Ab) < 0 && (Ub[Ab] = bb[Ab]);
      if (null != bb && "function" === typeof Object.getOwnPropertySymbols) {
        var Mb = 0;
        for (Ab = Object.getOwnPropertySymbols(bb); Mb < Ab.length; Mb++) ab.indexOf(Ab[Mb]) < 0 && Object.prototype.propertyIsEnumerable.call(bb, Ab[Mb]) && (Ub[Ab[Mb]] = bb[Ab[Mb]])
      }
      return Ub
    }

    function Yb(bb, ab, Ub, Ab) {
      var Mb, Tb = arguments.length,
        Eb = Tb < 3 ? ab : null === Ab ? Ab = Object.getOwnPropertyDescriptor(ab, Ub) : Ab;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Eb = Reflect.decorate(bb, ab, Ub, Ab);
      else
        for (var Yb = bb.length - 1; Yb >= 0; Yb--)(Mb = bb[Yb]) && (Eb = (Tb < 3 ? Mb(Eb) : Tb > 3 ? Mb(ab, Ub, Eb) : Mb(ab, Ub)) || Eb);
      return Tb > 3 && Eb && Object.defineProperty(ab, Ub, Eb), Eb
    }

    function Bb(bb, ab) {
      return function(Ub, Ab) {
        ab(Ub, Ab, bb)
      }
    }

    function eb(bb, ab, Ub, Ab, Mb, Tb) {
      function Eb(bb) {
        if (void 0 !== bb && "function" !== typeof bb) throw new TypeError("Function expected");
        return bb
      }
      for (var Yb, Bb = Ab.kind, eb = "getter" === Bb ? "get" : "setter" === Bb ? "set" : "value", vb = !ab && bb ? Ab.static ? bb : bb.prototype : null, Lb = ab || (vb ? Object.getOwnPropertyDescriptor(vb, Ab.name) : {}), Pb = !1, Xb = Ub.length - 1; Xb >= 0; Xb--) {
        var jb = {};
        for (var Rb in Ab) jb[Rb] = "access" === Rb ? {} : Ab[Rb];
        for (var Rb in Ab.access) jb.access[Rb] = Ab.access[Rb];
        jb.addInitializer = function(bb) {
          if (Pb) throw new TypeError("Cannot add initializers after decoration has completed");
          Tb.push(Eb(bb || null))
        };
        var kb = (0, Ub[Xb])("accessor" === Bb ? {
          get: Lb.get,
          set: Lb.set
        } : Lb[eb], jb);
        if ("accessor" === Bb) {
          if (void 0 === kb) continue;
          if (null === kb || "object" !== typeof kb) throw new TypeError("Object expected");
          (Yb = Eb(kb.get)) && (Lb.get = Yb), (Yb = Eb(kb.set)) && (Lb.set = Yb), (Yb = Eb(kb.init)) && Mb.unshift(Yb)
        } else(Yb = Eb(kb)) && ("field" === Bb ? Mb.unshift(Yb) : Lb[eb] = Yb)
      }
      vb && Object.defineProperty(vb, Ab.name, Lb), Pb = !0
    }

    function vb(bb, ab, Ub) {
      for (var Ab = arguments.length > 2, Mb = 0; Mb < ab.length; Mb++) Ub = Ab ? ab[Mb].call(bb, Ub) : ab[Mb].call(bb);
      return Ab ? Ub : void 0
    }

    function Lb(bb) {
      return "symbol" === typeof bb ? bb : "".concat(bb)
    }

    function Pb(bb, ab, Ub) {
      return "symbol" === typeof ab && (ab = ab.description ? "[".concat(ab.description, "]") : ""), Object.defineProperty(bb, "name", {
        configurable: !0,
        value: Ub ? "".concat(Ub, " ", ab) : ab
      })
    }

    function Xb(bb, ab) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(bb, ab)
    }

    function jb(bb, ab, Ub, Ab) {
      return new(Ub || (Ub = Promise))((function(Mb, Tb) {
        function Eb(bb) {
          try {
            Bb(Ab.next(bb))
          } catch (ab) {
            Tb(ab)
          }
        }

        function Yb(bb) {
          try {
            Bb(Ab.throw(bb))
          } catch (ab) {
            Tb(ab)
          }
        }

        function Bb(bb) {
          var ab;
          bb.done ? Mb(bb.value) : (ab = bb.value, ab instanceof Ub ? ab : new Ub((function(bb) {
            bb(ab)
          }))).then(Eb, Yb)
        }
        Bb((Ab = Ab.apply(bb, ab || [])).next())
      }))
    }

    function Rb(bb, ab) {
      var Ub, Ab, Mb, Tb = {
          label: 0,
          sent: function() {
            if (1 & Mb[0]) throw Mb[1];
            return Mb[1]
          },
          trys: [],
          ops: []
        },
        Eb = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Eb.next = Yb(0), Eb.throw = Yb(1), Eb.return = Yb(2), "function" === typeof Symbol && (Eb[Symbol.iterator] = function() {
        return this
      }), Eb;

      function Yb(Yb) {
        return function(Bb) {
          return function(Yb) {
            if (Ub) throw new TypeError("Generator is already executing.");
            for (; Eb && (Eb = 0, Yb[0] && (Tb = 0)), Tb;) try {
              if (Ub = 1, Ab && (Mb = 2 & Yb[0] ? Ab.return : Yb[0] ? Ab.throw || ((Mb = Ab.return) && Mb.call(Ab), 0) : Ab.next) && !(Mb = Mb.call(Ab, Yb[1])).done) return Mb;
              switch (Ab = 0, Mb && (Yb = [2 & Yb[0], Mb.value]), Yb[0]) {
                case 0:
                case 1:
                  Mb = Yb;
                  break;
                case 4:
                  return Tb.label++, {
                    value: Yb[1],
                    done: !1
                  };
                case 5:
                  Tb.label++, Ab = Yb[1], Yb = [0];
                  continue;
                case 7:
                  Yb = Tb.ops.pop(), Tb.trys.pop();
                  continue;
                default:
                  if (!(Mb = (Mb = Tb.trys).length > 0 && Mb[Mb.length - 1]) && (6 === Yb[0] || 2 === Yb[0])) {
                    Tb = 0;
                    continue
                  }
                  if (3 === Yb[0] && (!Mb || Yb[1] > Mb[0] && Yb[1] < Mb[3])) {
                    Tb.label = Yb[1];
                    break
                  }
                  if (6 === Yb[0] && Tb.label < Mb[1]) {
                    Tb.label = Mb[1], Mb = Yb;
                    break
                  }
                  if (Mb && Tb.label < Mb[2]) {
                    Tb.label = Mb[2], Tb.ops.push(Yb);
                    break
                  }
                  Mb[2] && Tb.ops.pop(), Tb.trys.pop();
                  continue
              }
              Yb = ab.call(bb, Tb)
            } catch (Bb) {
              Yb = [6, Bb], Ab = 0
            } finally {
              Ub = Mb = 0
            }
            if (5 & Yb[0]) throw Yb[1];
            return {
              value: Yb[0] ? Yb[1] : void 0,
              done: !0
            }
          }([Yb, Bb])
        }
      }
    }
    var kb = Object.create ? function(bb, ab, Ub, Ab) {
      void 0 === Ab && (Ab = Ub);
      var Mb = Object.getOwnPropertyDescriptor(ab, Ub);
      Mb && !("get" in Mb ? !ab.__esModule : Mb.writable || Mb.configurable) || (Mb = {
        enumerable: !0,
        get: function() {
          return ab[Ub]
        }
      }), Object.defineProperty(bb, Ab, Mb)
    } : function(bb, ab, Ub, Ab) {
      void 0 === Ab && (Ab = Ub), bb[Ab] = ab[Ub]
    };

    function yb(bb, ab) {
      for (var Ub in bb) "default" === Ub || Object.prototype.hasOwnProperty.call(ab, Ub) || kb(ab, bb, Ub)
    }

    function Zb(bb) {
      var ab = "function" === typeof Symbol && Symbol.iterator,
        Ub = ab && bb[ab],
        Ab = 0;
      if (Ub) return Ub.call(bb);
      if (bb && "number" === typeof bb.length) return {
        next: function() {
          return bb && Ab >= bb.length && (bb = void 0), {
            value: bb && bb[Ab++],
            done: !bb
          }
        }
      };
      throw new TypeError(ab ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Db(bb, ab) {
      var Ub = "function" === typeof Symbol && bb[Symbol.iterator];
      if (!Ub) return bb;
      var Ab, Mb, Tb = Ub.call(bb),
        Eb = [];
      try {
        for (;
          (void 0 === ab || ab-- > 0) && !(Ab = Tb.next()).done;) Eb.push(Ab.value)
      } catch (Yb) {
        Mb = {
          error: Yb
        }
      } finally {
        try {
          Ab && !Ab.done && (Ub = Tb.return) && Ub.call(Tb)
        } finally {
          if (Mb) throw Mb.error
        }
      }
      return Eb
    }

    function zb() {
      for (var bb = [], ab = 0; ab < arguments.length; ab++) bb = bb.concat(Db(arguments[ab]));
      return bb
    }

    function xb() {
      for (var bb = 0, ab = 0, Ub = arguments.length; ab < Ub; ab++) bb += arguments[ab].length;
      var Ab = Array(bb),
        Mb = 0;
      for (ab = 0; ab < Ub; ab++)
        for (var Tb = arguments[ab], Eb = 0, Yb = Tb.length; Eb < Yb; Eb++, Mb++) Ab[Mb] = Tb[Eb];
      return Ab
    }

    function ib(bb, ab, Ub) {
      if (Ub || 2 === arguments.length)
        for (var Ab, Mb = 0, Tb = ab.length; Mb < Tb; Mb++) !Ab && Mb in ab || (Ab || (Ab = Array.prototype.slice.call(ab, 0, Mb)), Ab[Mb] = ab[Mb]);
      return bb.concat(Ab || Array.prototype.slice.call(ab))
    }

    function fb(bb) {
      return this instanceof fb ? (this.v = bb, this) : new fb(bb)
    }

    function mb(bb, ab, Ub) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Ab, Mb = Ub.apply(bb, ab || []),
        Tb = [];
      return Ab = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Eb("next"), Eb("throw"), Eb("return", (function(bb) {
        return function(ab) {
          return Promise.resolve(ab).then(bb, eb)
        }
      })), Ab[Symbol.asyncIterator] = function() {
        return this
      }, Ab;

      function Eb(bb, ab) {
        Mb[bb] && (Ab[bb] = function(ab) {
          return new Promise((function(Ub, Ab) {
            Tb.push([bb, ab, Ub, Ab]) > 1 || Yb(bb, ab)
          }))
        }, ab && (Ab[bb] = ab(Ab[bb])))
      }

      function Yb(bb, ab) {
        try {
          (Ub = Mb[bb](ab)).value instanceof fb ? Promise.resolve(Ub.value.v).then(Bb, eb) : vb(Tb[0][2], Ub)
        } catch (Ab) {
          vb(Tb[0][3], Ab)
        }
        var Ub
      }

      function Bb(bb) {
        Yb("next", bb)
      }

      function eb(bb) {
        Yb("throw", bb)
      }

      function vb(bb, ab) {
        bb(ab), Tb.shift(), Tb.length && Yb(Tb[0][0], Tb[0][1])
      }
    }

    function pb(bb) {
      var ab, Ub;
      return ab = {}, Ab("next"), Ab("throw", (function(bb) {
        throw bb
      })), Ab("return"), ab[Symbol.iterator] = function() {
        return this
      }, ab;

      function Ab(Ab, Mb) {
        ab[Ab] = bb[Ab] ? function(ab) {
          return (Ub = !Ub) ? {
            value: fb(bb[Ab](ab)),
            done: !1
          } : Mb ? Mb(ab) : ab
        } : Mb
      }
    }

    function Nb(bb) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var ab, Ub = bb[Symbol.asyncIterator];
      return Ub ? Ub.call(bb) : (bb = Zb(bb), ab = {}, Ab("next"), Ab("throw"), Ab("return"), ab[Symbol.asyncIterator] = function() {
        return this
      }, ab);

      function Ab(Ub) {
        ab[Ub] = bb[Ub] && function(ab) {
          return new Promise((function(Ab, Mb) {
            (function(bb, ab, Ub, Ab) {
              Promise.resolve(Ab).then((function(ab) {
                bb({
                  value: ab,
                  done: Ub
                })
              }), ab)
            })(Ab, Mb, (ab = bb[Ub](ab)).done, ab.value)
          }))
        }
      }
    }

    function Wb(bb, ab) {
      return Object.defineProperty ? Object.defineProperty(bb, "raw", {
        value: ab
      }) : bb.raw = ab, bb
    }
    var Hb = Object.create ? function(bb, ab) {
        Object.defineProperty(bb, "default", {
          enumerable: !0,
          value: ab
        })
      } : function(bb, ab) {
        bb.default = ab
      },
      Ib = function(bb) {
        return Ib = Object.getOwnPropertyNames || function(bb) {
          var ab = [];
          for (var Ub in bb) Object.prototype.hasOwnProperty.call(bb, Ub) && (ab[ab.length] = Ub);
          return ab
        }, Ib(bb)
      };

    function db(bb) {
      if (bb && bb.__esModule) return bb;
      var ab = {};
      if (null != bb)
        for (var Ub = Ib(bb), Ab = 0; Ab < Ub.length; Ab++) "default" !== Ub[Ab] && kb(ab, bb, Ub[Ab]);
      return Hb(ab, bb), ab
    }

    function Fb(bb) {
      return bb && bb.__esModule ? bb : {
        default: bb
      }
    }

    function hb(bb, ab, Ub, Ab) {
      if ("a" === Ub && !Ab) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof ab ? bb !== ab || !Ab : !ab.has(bb)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Ub ? Ab : "a" === Ub ? Ab.call(bb) : Ab ? Ab.value : ab.get(bb)
    }

    function Gb(bb, ab, Ub, Ab, Mb) {
      if ("m" === Ab) throw new TypeError("Private method is not writable");
      if ("a" === Ab && !Mb) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof ab ? bb !== ab || !Mb : !ab.has(bb)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Ab ? Mb.call(bb, Ub) : Mb ? Mb.value = Ub : ab.set(bb, Ub), Ub
    }

    function Qb(bb, ab) {
      if (null === ab || "object" !== typeof ab && "function" !== typeof ab) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof bb ? ab === bb : bb.has(ab)
    }

    function qb(bb, ab, Ub) {
      if (null !== ab && void 0 !== ab) {
        if ("object" !== typeof ab && "function" !== typeof ab) throw new TypeError("Object expected.");
        var Ab, Mb;
        if (Ub) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Ab = ab[Symbol.asyncDispose]
        }
        if (void 0 === Ab) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Ab = ab[Symbol.dispose], Ub && (Mb = Ab)
        }
        if ("function" !== typeof Ab) throw new TypeError("Object not disposable.");
        Mb && (Ab = function() {
          try {
            Mb.call(this)
          } catch (bb) {
            return Promise.reject(bb)
          }
        }), bb.stack.push({
          value: ab,
          dispose: Ab,
          async: Ub
        })
      } else Ub && bb.stack.push({
        async: !0
      });
      return ab
    }
    var ub = "function" === typeof SuppressedError ? SuppressedError : function(bb, ab, Ub) {
      var Ab = new Error(Ub);
      return Ab.name = "SuppressedError", Ab.error = bb, Ab.suppressed = ab, Ab
    };

    function rb(bb) {
      function ab(ab) {
        bb.error = bb.hasError ? new ub(ab, bb.error, "An error was suppressed during disposal.") : ab, bb.hasError = !0
      }
      var Ub, Ab = 0;
      return function Mb() {
        for (; Ub = bb.stack.pop();) try {
          if (!Ub.async && 1 === Ab) return Ab = 0, bb.stack.push(Ub), Promise.resolve().then(Mb);
          if (Ub.dispose) {
            var Tb = Ub.dispose.call(Ub.value);
            if (Ub.async) return Ab |= 2, Promise.resolve(Tb).then(Mb, (function(bb) {
              return ab(bb), Mb()
            }))
          } else Ab |= 1
        } catch (Eb) {
          ab(Eb)
        }
        if (1 === Ab) return bb.hasError ? Promise.reject(bb.error) : Promise.resolve();
        if (bb.hasError) throw bb.error
      }()
    }

    function Kb(bb, ab) {
      return "string" === typeof bb && /^\.\.?\//.test(bb) ? bb.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(bb, Ub, Ab, Mb, Tb) {
        return Ub ? ab ? ".jsx" : ".js" : !Ab || Mb && Tb ? Ab + Mb + "." + Tb.toLowerCase() + "js" : bb
      })) : bb
    }
    const ob = {
      __extends: Mb,
      __assign: Tb,
      __rest: Eb,
      __decorate: Yb,
      __param: Bb,
      __esDecorate: eb,
      __runInitializers: vb,
      __propKey: Lb,
      __setFunctionName: Pb,
      __metadata: Xb,
      __awaiter: jb,
      __generator: Rb,
      __createBinding: kb,
      __exportStar: yb,
      __values: Zb,
      __read: Db,
      __spread: zb,
      __spreadArrays: xb,
      __spreadArray: ib,
      __await: fb,
      __asyncGenerator: mb,
      __asyncDelegator: pb,
      __asyncValues: Nb,
      __makeTemplateObject: Wb,
      __importStar: db,
      __importDefault: Fb,
      __classPrivateFieldGet: hb,
      __classPrivateFieldSet: Gb,
      __classPrivateFieldIn: Qb,
      __addDisposableResource: qb,
      __disposeResources: rb,
      __rewriteRelativeImportExtension: Kb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);