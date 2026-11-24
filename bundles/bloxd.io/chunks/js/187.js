export const id = 187;
export const ids = [187];
export const modules = {
  9275: (BB, IB) => {
    IB.discordURLBuilder = function(BB) {
      var IB;
      const ZB = (null === (IB = null === window || void 0 === window ? void 0 : window.location) || void 0 === IB ? void 0 : IB.hostname) || "localhost",
        TB = BB.hostname.split("."),
        JB = !BB.hostname.includes("trycloudflare.com") && !BB.hostname.includes("discordsays.com") && TB.length > 2 ? `/${TB[0]}` : "";
      return BB.pathname.startsWith("/.proxy") ? `${BB.protocol}//${ZB}${JB}${BB.pathname}${BB.search}` : `${BB.protocol}//${ZB}/.proxy/colyseus${JB}${BB.pathname}${BB.search}`
    }
  },
  9259: (BB, IB, ZB) => {
    var TB, JB, oB, GB, vB = ZB(9167),
      kB = ZB(9266),
      cB = ZB(9225);
    TB = new WeakMap, JB = new WeakMap, oB = new WeakMap, GB = new WeakMap, IB.Auth = class {
      constructor(BB) {
        this.http = BB, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, TB.set(this, !1), JB.set(this, void 0), oB.set(this, void 0), GB.set(this, cB.createNanoEvents()), kB.getItem(this.settings.key, (BB => this.token = BB))
      }
      set token(BB) {
        this.http.authToken = BB
      }
      get token() {
        return this.http.authToken
      }
      onChange(BB) {
        const IB = vB.__classPrivateFieldGet(this, GB, "f").on("change", BB);
        return vB.__classPrivateFieldGet(this, TB, "f") || vB.__classPrivateFieldSet(this, JB, new Promise(((BB, IB) => {
          this.getUserData().then((BB => {
            this.emitChange(Object.assign(Object.assign({}, BB), {
              token: this.token
            }))
          })).catch((BB => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            BB()
          }))
        })), "f"), vB.__classPrivateFieldSet(this, TB, !0, "f"), IB
      }
      getUserData() {
        return vB.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(BB, IB, ZB) {
        return vB.__awaiter(this, void 0, void 0, (function*() {
          const TB = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: BB,
              password: IB,
              options: ZB
            }
          })).data;
          return this.emitChange(TB), TB
        }))
      }
      signInWithEmailAndPassword(BB, IB) {
        return vB.__awaiter(this, void 0, void 0, (function*() {
          const ZB = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: BB,
              password: IB
            }
          })).data;
          return this.emitChange(ZB), ZB
        }))
      }
      signInAnonymously(BB) {
        return vB.__awaiter(this, void 0, void 0, (function*() {
          const IB = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: BB
            }
          })).data;
          return this.emitChange(IB), IB
        }))
      }
      sendPasswordResetEmail(BB) {
        return vB.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: BB
            }
          })).data
        }))
      }
      signInWithProvider(BB) {
        return vB.__awaiter(this, arguments, void 0, (function*(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((ZB, TB) => {
            const JB = IB.width || 480,
              GB = IB.height || 768,
              kB = this.token ? `?token=${this.token}` : "",
              cB = `Login with ${BB[0].toUpperCase()+BB.substring(1)}`,
              nB = this.http.client.getHttpEndpoint(`${IB.prefix||`${this.settings.path}/provider`}/${BB}${kB}`),
              hB = screen.width / 2 - JB / 2,
              zB = screen.height / 2 - GB / 2;
            vB.__classPrivateFieldSet(this, oB, window.open(nB, cB, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + JB + ", height=" + GB + ", top=" + zB + ", left=" + hB), "f");
            const FB = BB => {
                void 0 === BB.data.user && void 0 === BB.data.token || (clearInterval(NB), vB.__classPrivateFieldGet(this, oB, "f").close(), vB.__classPrivateFieldSet(this, oB, void 0, "f"), window.removeEventListener("message", FB), void 0 !== BB.data.error ? TB(BB.data.error) : (ZB(BB.data), this.emitChange(BB.data)))
              },
              NB = setInterval((() => {
                vB.__classPrivateFieldGet(this, oB, "f") && !vB.__classPrivateFieldGet(this, oB, "f").closed || (vB.__classPrivateFieldSet(this, oB, void 0, "f"), TB("fZ"), window.removeEventListener("message", FB))
              }), 200);
            window.addEventListener("message", FB)
          }))
        }))
      }
      signOut() {
        return vB.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(BB) {
        void 0 !== BB.token && (this.token = BB.token, null === BB.token ? kB.removeItem(this.settings.key) : kB.setItem(this.settings.key, BB.token)), vB.__classPrivateFieldGet(this, GB, "f").emit("change", BB)
      }
    }
  },
  9165: (BB, IB, ZB) => {
    var TB, JB = ZB(9167),
      oB = ZB(9171),
      GB = ZB(9180),
      vB = ZB(9248),
      kB = ZB(9259),
      cB = ZB(9275);
    class nB extends Error {
      constructor(BB, IB) {
        super(BB), this.code = IB, this.name = "MatchMakeError", Object.setPrototypeOf(this, nB.prototype)
      }
    }
    const hB = "undefined" !== typeof window && "undefined" !== typeof(null === (TB = null === window || void 0 === window ? void 0 : window.location) || void 0 === TB ? void 0 : TB.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class zB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hB,
          IB = arguments.length > 1 ? arguments[1] : void 0;
        var ZB, TB;
        if ("string" === typeof BB) {
          const IB = BB.startsWith("/") ? new URL(BB, hB) : new URL(BB),
            ZB = "https:" === IB.protocol || "wss:" === IB.protocol,
            TB = Number(IB.port || (ZB ? 443 : 80));
          this.settings = {
            hostname: IB.hostname,
            pathname: IB.pathname,
            port: TB,
            secure: ZB,
            searchParams: IB.searchParams.toString() || void 0
          }
        } else void 0 === BB.port && (BB.port = BB.secure ? 443 : 80), void 0 === BB.pathname && (BB.pathname = ""), this.settings = BB;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new vB.HTTP(this, (null === IB || void 0 === IB ? void 0 : IB.headers) || {}), this.auth = new kB.Auth(this.http), this.urlBuilder = null === IB || void 0 === IB ? void 0 : IB.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (TB = null === (ZB = null === window || void 0 === window ? void 0 : window.location) || void 0 === ZB ? void 0 : ZB.hostname) || void 0 === TB ? void 0 : TB.includes("discordsays.com")) && (this.urlBuilder = cB.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(BB) {
        return JB.__awaiter(this, arguments, void 0, (function*(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", BB, IB, ZB)
        }))
      }
      create(BB) {
        return JB.__awaiter(this, arguments, void 0, (function*(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", BB, IB, ZB)
        }))
      }
      join(BB) {
        return JB.__awaiter(this, arguments, void 0, (function*(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", BB, IB, ZB)
        }))
      }
      joinById(BB) {
        return JB.__awaiter(this, arguments, void 0, (function*(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", BB, IB, ZB)
        }))
      }
      reconnect(BB, IB) {
        return JB.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof BB && "string" === typeof IB) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [ZB, TB] = BB.split(":");
          if (!ZB || !TB) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", ZB, {
            reconnectionToken: TB
          }, IB)
        }))
      }
      consumeSeatReservation(BB, IB, ZB) {
        return JB.__awaiter(this, void 0, void 0, (function*() {
          const TB = this.createRoom(BB.room.name, IB);
          TB.roomId = BB.room.roomId, TB.sessionId = BB.sessionId;
          const GB = {
            sessionId: TB.sessionId
          };
          BB.reconnectionToken && (GB.reconnectionToken = BB.reconnectionToken);
          const vB = ZB || TB;
          return TB.connect(this.buildEndpoint(BB.room, GB, BB.protocol), BB.devMode && (() => JB.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${TB.roomId}'...`);
            let ZB = 0;
            const oB = () => JB.__awaiter(this, void 0, void 0, (function*() {
              ZB++;
              try {
                yield this.consumeSeatReservation(BB, IB, vB), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${TB.roomId}'`)
              } catch (JB) {
                ZB < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${ZB} out of 8)`), setTimeout(oB, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(oB, 2e3)
          }))), vB, BB, this.http.headers), new Promise(((BB, IB) => {
            const ZB = (BB, ZB) => IB(new oB.ServerError(BB, ZB));
            vB.onError.once(ZB), vB.onJoin.once((() => {
              vB.onError.remove(ZB), setTimeout((() => {
                try {
                  const BB = [2, 221, 78, 205, 170, 100, 227, 105, 7, 11, 168, 73, 160, 189, 207, 237, 124, 173, 184, 99];
                  BB && vB.lY(128, new Uint8Array(BB))
                } catch {}
              }), 3e3), BB(vB)
            }))
          }))
        }))
      }
      createMatchMakeRequest(BB, IB) {
        return JB.__awaiter(this, arguments, void 0, (function*(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            TB = arguments.length > 3 ? arguments[3] : void 0,
            JB = arguments.length > 4 ? arguments[4] : void 0;
          const oB = (yield this.http.post(`matchmake/${BB}/${IB}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(ZB)
          })).data;
          if (oB.error) throw new nB(oB.error, oB.code);
          return "reconnect" === BB && (oB.reconnectionToken = ZB.reconnectionToken), yield this.consumeSeatReservation(oB, TB, JB)
        }))
      }
      createRoom(BB, IB) {
        return new GB.Dh(BB, IB)
      }
      buildEndpoint(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          TB = this.settings.searchParams || "";
        this.http.authToken && (IB._authToken = this.http.authToken);
        for (const GB in IB) IB.hasOwnProperty(GB) && (TB += (TB ? "&" : "") + `${GB}=${IB[GB]}`);
        "h3" === ZB && (ZB = "http");
        let JB = this.settings.secure ? `${ZB}s://` : `${ZB}://`;
        BB.publicAddress ? JB += `${BB.publicAddress}` : JB += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const oB = `${JB}/${BB.processId}/${BB.roomId}?${TB}`;
        return this.urlBuilder ? this.urlBuilder(new URL(oB)) : oB
      }
      getHttpEndpoint() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const IB = BB.startsWith("/") ? BB : `/${BB}`;
        let ZB = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${IB}`;
        return this.settings.searchParams && (ZB += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(ZB)) : ZB
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    zB.VERSION = "0.16.22", IB.Client = zB, IB.MatchMakeError = nB
  },
  9189: (BB, IB, ZB) => {
    var TB = ZB(9194),
      JB = ZB(9208);
    IB.Connection = class {
      constructor(BB) {
        if (this.events = {}, "h3" === BB) this.transport = new TB.H3TransportTransport(this.events);
        else this.transport = new JB.WebSocketTransport(this.events)
      }
      connect(BB, IB) {
        this.transport.connect.call(this.transport, BB, IB)
      }
      send(BB) {
        this.transport.send(BB)
      }
      sendUnreliable(BB) {
        this.transport.sendUnreliable(BB)
      }
      close(BB, IB) {
        this.transport.close(BB, IB)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9248: (BB, IB, ZB) => {
    var TB = ZB(9171);

    function JB(BB) {
      var IB = Object.create(null);
      return BB && Object.keys(BB).forEach((function(ZB) {
        if ("default" !== ZB) {
          var TB = Object.getOwnPropertyDescriptor(BB, ZB);
          Object.defineProperty(IB, ZB, TB.get ? TB : {
            enumerable: !0,
            get: function() {
              return BB[ZB]
            }
          })
        }
      })), IB.default = BB, Object.freeze(IB)
    }
    var oB = JB(ZB(9256));
    IB.HTTP = class {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = BB, this.headers = IB
      }
      get(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", BB, IB)
      }
      post(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", BB, IB)
      }
      del(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", BB, IB)
      }
      put(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", BB, IB)
      }
      request(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return oB[BB](this.client.getHttpEndpoint(IB), this.getOptions(ZB)).catch((BB => {
          var IB;
          if (BB.aborted) throw new TB.AbortError("Request aborted");
          const ZB = BB.statusCode,
            JB = (null === (IB = BB.data) || void 0 === IB ? void 0 : IB.error) || BB.statusMessage || BB.message;
          if (!ZB && !JB) throw BB;
          throw new TB.ServerError(ZB, JB)
        }))
      }
      getOptions(BB) {
        return BB.headers = Object.assign({}, this.headers, BB.headers), this.authToken && (BB.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (BB.withCredentials = !0), BB
      }
    }
  },
  9215: (BB, IB) => {
    var ZB, TB;
    IB.Protocol = void 0, (ZB = IB.Protocol || (IB.Protocol = {}))[ZB.HANDSHAKE = 9] = "HANDSHAKE", ZB[ZB.JOIN_ROOM = 10] = "JOIN_ROOM", ZB[ZB.ERROR = 11] = "ERROR", ZB[ZB.LEAVE_ROOM = 12] = "LEAVE_ROOM", ZB[ZB.ROOM_DATA = 13] = "ROOM_DATA", ZB[ZB.ROOM_STATE = 14] = "ROOM_STATE", ZB[ZB.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", ZB[ZB.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", ZB[ZB.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", IB.ErrorCode = void 0, (TB = IB.ErrorCode || (IB.ErrorCode = {}))[TB.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", TB[TB.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", TB[TB.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", TB[TB.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", TB[TB.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", TB[TB.AUTH_FAILED = 4215] = "AUTH_FAILED", TB[TB.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9180: (BB, IB, ZB) => {
    var TB = ZB(9189),
      JB = ZB(9215),
      oB = ZB(9223),
      GB = ZB(9225),
      vB = ZB(9234),
      kB = ZB(9201),
      cB = ZB(9238),
      nB = ZB(9171),
      hB = ZB(9245);
    class zB {
      constructor(BB, IB) {
        this.onStateChange = vB.createSignal(), this.onError = vB.createSignal(), this.KU = vB.createSignal(), this.onJoin = vB.createSignal(), this.hasJoined = !1, this.onMessageHandlers = GB.createNanoEvents(), this.roomId = null, this.name = BB, this.packr = new hB.Packr, this.packr.encode(void 0), IB && (this.Py = new(oB.getSerializer("schema")), this.rootSchema = IB, this.Py.state = new IB), this.onError(((BB, IB) => {
          var ZB;
          return null === (ZB = console.warn) || void 0 === ZB ? void 0 : ZB.call(console, `colyseus.js - onError => (${BB}) ${IB}`)
        })), this.KU((() => this.jy()))
      }
      connect(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          JB = arguments.length > 3 ? arguments[3] : void 0,
          oB = arguments.length > 4 ? arguments[4] : void 0;
        const GB = new TB.Connection(JB.protocol);
        if (ZB.connection = GB, GB.events.onmessage = zB.prototype.onMessageCallback.bind(ZB), GB.events.onclose = function(BB) {
            var TB;
            if (!ZB.hasJoined) return null === (TB = console.warn) || void 0 === TB || TB.call(console, `Room connection was closed unexpectedly (${BB.code}): ${BB.reason}`), void ZB.onError.invoke(BB.code, BB.reason);
            BB.code === nB.CloseCode.DEVMODE_RESTART && IB ? IB() : (ZB.KU.invoke(BB.code, BB.reason), ZB.destroy())
          }, GB.events.onerror = function(BB) {
            var IB;
            null === (IB = console.warn) || void 0 === IB || IB.call(console, `Room, onError (${BB.code}): ${BB.reason}`), ZB.onError.invoke(BB.code, BB.reason)
          }, "h3" === JB.protocol) {
          const IB = new URL(BB);
          GB.connect(IB.origin, JB)
        } else GB.connect(BB, oB)
      }
      leave() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((IB => {
          this.KU((BB => IB(BB))), this.connection ? BB ? (this.packr.buffer[0] = JB.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.KU.invoke(nB.CloseCode.CONSENTED)
        }))
      }
      rU(BB, IB) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(BB), IB)
      }
      send(BB, IB) {
        const ZB = {
          offset: 1
        };
        this.packr.buffer[0] = JB.Protocol.ROOM_DATA, "string" === typeof BB ? kB.encode.string(this.packr.buffer, BB, ZB) : kB.encode.number(this.packr.buffer, BB, ZB), this.packr.position = 0;
        const TB = void 0 !== IB ? this.packr.pack(IB, 2048 + ZB.offset) : this.packr.buffer.subarray(0, ZB.offset);
        this.connection.send(TB)
      }
      sendUnreliable(BB, IB) {
        const ZB = {
          offset: 1
        };
        this.packr.buffer[0] = JB.Protocol.ROOM_DATA, "string" === typeof BB ? kB.encode.string(this.packr.buffer, BB, ZB) : kB.encode.number(this.packr.buffer, BB, ZB), this.packr.position = 0;
        const TB = void 0 !== IB ? this.packr.pack(IB, 2048 + ZB.offset) : this.packr.buffer.subarray(0, ZB.offset);
        this.connection.sendUnreliable(TB)
      }
      lY(BB, IB) {
        const ZB = {
          offset: 1
        };
        if (this.packr.buffer[0] = JB.Protocol.ROOM_DATA_BYTES, "string" === typeof BB ? kB.encode.string(this.packr.buffer, BB, ZB) : kB.encode.number(this.packr.buffer, BB, ZB), IB.byteLength + ZB.offset > this.packr.buffer.byteLength) {
          const BB = new Uint8Array(ZB.offset + IB.byteLength);
          BB.set(this.packr.buffer), this.packr.useBuffer(BB)
        }
        this.packr.buffer.set(IB, ZB.offset), this.connection.send(this.packr.buffer.subarray(0, ZB.offset + IB.byteLength))
      }
      get state() {
        return this.Py.getState()
      }
      jy() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.KU.clear(), this.onMessageHandlers.events = {}, this.Py instanceof cB.jH && (this.Py.kN.root.callbacks = {})
      }
      onMessageCallback(BB) {
        const IB = new Uint8Array(BB.data),
          ZB = {
            offset: 1
          },
          TB = IB[0];
        if (TB === JB.Protocol.JOIN_ROOM) {
          const BB = kB.decode.utf8Read(IB, ZB, IB[ZB.offset++]);
          if (this.serializerId = kB.decode.utf8Read(IB, ZB, IB[ZB.offset++]), !this.Py) {
            const BB = oB.getSerializer(this.serializerId);
            this.Py = new BB
          }
          IB.byteLength > ZB.offset && this.Py.handshake && this.Py.handshake(IB, ZB), this.reconnectionToken = `${this.roomId}:${BB}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = JB.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (TB === JB.Protocol.ERROR) {
          const BB = kB.decode.number(IB, ZB),
            TB = kB.decode.string(IB, ZB);
          this.onError.invoke(BB, TB)
        } else if (TB === JB.Protocol.LEAVE_ROOM) this.leave();
        else if (TB === JB.Protocol.ROOM_STATE) this.Py.setState(IB, ZB), this.onStateChange.invoke(this.Py.getState());
        else if (TB === JB.Protocol.ROOM_STATE_PATCH) this.Py.patch(IB, ZB), this.onStateChange.invoke(this.Py.getState());
        else if (TB === JB.Protocol.ROOM_DATA) {
          const BB = kB.decode.stringCheck(IB, ZB) ? kB.decode.string(IB, ZB) : kB.decode.number(IB, ZB),
            TB = IB.byteLength > ZB.offset ? hB.unpack(IB, {
              start: ZB.offset
            }) : void 0;
          this.dispatchMessage(BB, TB)
        } else if (TB === JB.Protocol.ROOM_DATA_BYTES) {
          const BB = kB.decode.stringCheck(IB, ZB) ? kB.decode.string(IB, ZB) : kB.decode.number(IB, ZB);
          this.dispatchMessage(BB, IB.subarray(ZB.offset))
        }
      }
      dispatchMessage(BB, IB) {
        var ZB;
        const TB = this.getMessageHandlerKey(BB);
        this.onMessageHandlers.events[TB] ? this.onMessageHandlers.emit(TB, IB) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", BB, IB) : null === (ZB = console.warn) || void 0 === ZB || ZB.call(console, `colyseus.js: onMessage() not registered for type '${BB}'.`)
      }
      destroy() {
        this.Py && this.Py.teardown()
      }
      getMessageHandlerKey(BB) {
        switch (typeof BB) {
          case "string":
            return BB;
          case "number":
            return `i${BB}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    IB.Dh = zB
  },
  9266: (BB, IB, ZB) => {
    var TB = ZB(9167);
    let JB;

    function oB() {
      if (!JB) try {
        JB = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (BB) {}
      return JB || "undefined" === typeof globalThis.indexedDB || (JB = new GB), JB || (JB = {
        cache: {},
        setItem: function(BB, IB) {
          this.cache[BB] = IB
        },
        getItem: function(BB) {
          this.cache[BB]
        },
        removeItem: function(BB) {
          delete this.cache[BB]
        }
      }), JB
    }
    class GB {
      constructor() {
        this.dbPromise = new Promise((BB => {
          const IB = indexedDB.open("_colyseus_storage", 1);
          IB.onupgradeneeded = () => IB.result.createObjectStore("store"), IB.onsuccess = () => BB(IB.result)
        }))
      }
      tx(BB, IB) {
        return TB.__awaiter(this, void 0, void 0, (function*() {
          const ZB = (yield this.dbPromise).transaction("store", BB).objectStore("store");
          return IB(ZB)
        }))
      }
      setItem(BB, IB) {
        return this.tx("readwrite", (ZB => ZB.put(IB, BB))).then()
      }
      getItem(BB) {
        return TB.__awaiter(this, void 0, void 0, (function*() {
          const IB = yield this.tx("readonly", (IB => IB.get(BB)));
          return new Promise((BB => {
            IB.onsuccess = () => BB(IB.result)
          }))
        }))
      }
      removeItem(BB) {
        return this.tx("readwrite", (IB => IB.delete(BB))).then()
      }
    }
    IB.getItem = function(BB, IB) {
      const ZB = oB().getItem(BB);
      "undefined" !== typeof Promise && ZB instanceof Promise ? ZB.then((BB => IB(BB))) : IB(ZB)
    }, IB.removeItem = function(BB) {
      oB().removeItem(BB)
    }, IB.setItem = function(BB, IB) {
      oB().setItem(BB, IB)
    }
  },
  9225: (BB, IB) => {
    IB.createNanoEvents = () => ({
      emit(BB) {
        let IB = this.events[BB] || [];
        for (var ZB = arguments.length, TB = new Array(ZB > 1 ? ZB - 1 : 0), JB = 1; JB < ZB; JB++) TB[JB - 1] = arguments[JB];
        for (let oB = 0, GB = IB.length; oB < GB; oB++) IB[oB](...TB)
      },
      events: {},
      on(BB, IB) {
        var ZB;
        return (null === (ZB = this.events[BB]) || void 0 === ZB ? void 0 : ZB.push(IB)) || (this.events[BB] = [IB]), () => {
          var ZB;
          this.events[BB] = null === (ZB = this.events[BB]) || void 0 === ZB ? void 0 : ZB.filter((BB => IB !== BB))
        }
      }
    })
  },
  9234: (BB, IB) => {
    class ZB {
      constructor() {
        this.handlers = []
      }
      register(BB) {
        return this.handlers.push(BB), this
      }
      invoke() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        this.handlers.forEach((BB => BB.apply(this, IB)))
      }
      invokeAsync() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        return Promise.all(this.handlers.map((BB => BB.apply(this, IB))))
      }
      remove(BB) {
        const IB = this.handlers.indexOf(BB);
        this.handlers[IB] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    IB.EventEmitter = ZB, IB.createSignal = function() {
      const BB = new ZB;

      function IB(IB) {
        return BB.register(IB, null === this)
      }
      return IB.once = IB => {
        const ZB = function() {
          for (var TB = arguments.length, JB = new Array(TB), oB = 0; oB < TB; oB++) JB[oB] = arguments[oB];
          IB.apply(this, JB), BB.remove(ZB)
        };
        BB.register(ZB)
      }, IB.remove = IB => BB.remove(IB), IB.invoke = function() {
        return BB.invoke(...arguments)
      }, IB.invokeAsync = function() {
        return BB.invokeAsync(...arguments)
      }, IB.clear = () => BB.clear(), IB
    }
  },
  9171: (BB, IB) => {
    var ZB;
    IB.CloseCode = void 0, (ZB = IB.CloseCode || (IB.CloseCode = {}))[ZB.CONSENTED = 4e3] = "CONSENTED", ZB[ZB.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class TB extends Error {
      constructor(BB, IB) {
        super(IB), this.name = "ServerError", this.code = BB
      }
    }
    class JB extends Error {
      constructor(BB) {
        super(BB), this.name = "AbortError"
      }
    }
    IB.AbortError = JB, IB.ServerError = TB
  },
  9155: (BB, IB, ZB) => {
    ZB(9159);
    var TB = ZB(9165),
      JB = ZB(9215),
      oB = ZB(9180),
      GB = ZB(9259),
      vB = ZB(9171),
      kB = ZB(9238),
      cB = ZB(9284),
      nB = ZB(9223);
    nB.registerSerializer("schema", kB.jH), nB.registerSerializer("none", cB.NoneSerializer), IB.Client = TB.Client, IB.MatchMakeError = TB.MatchMakeError, Object.defineProperty(IB, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return JB.ErrorCode
      }
    }), Object.defineProperty(IB, "Protocol", {
      enumerable: !0,
      get: function() {
        return JB.Protocol
      }
    }), IB.Dh = oB.Dh, IB.Auth = GB.Auth, IB.ServerError = vB.ServerError, IB.jH = kB.jH, IB.getStateCallbacks = kB.getStateCallbacks, IB.registerSerializer = nB.registerSerializer
  },
  9159: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = BB => null !== BB && "object" === typeof BB && BB.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9284: (BB, IB) => {
    IB.NoneSerializer = class {
      setState(BB) {}
      getState() {
        return null
      }
      patch(BB) {}
      teardown() {}
      handshake(BB) {}
    }
  },
  9238: (BB, IB, ZB) => {
    var TB = ZB(9201);
    IB.jH = class {
      setState(BB, IB) {
        this.kN.decode(BB, IB)
      }
      getState() {
        return this.state
      }
      patch(BB, IB) {
        return this.kN.decode(BB, IB)
      }
      teardown() {
        this.kN.root.clearRefs()
      }
      handshake(BB, IB) {
        this.state ? (TB.Reflection.decode(BB, IB), this.kN = new TB.Decoder(this.state)) : (this.kN = TB.Reflection.decode(BB, IB), this.state = this.kN.state)
      }
    }, IB.getStateCallbacks = function(BB) {
      try {
        return TB.getDecoderStateCallbacks(BB.Py.kN)
      } catch (IB) {
        return
      }
    }
  },
  9223: (BB, IB) => {
    const ZB = {};
    IB.getSerializer = function(BB) {
      const IB = ZB[BB];
      if (!IB) throw new Error("missing serializer: " + BB);
      return IB
    }, IB.registerSerializer = function(BB, IB) {
      ZB[BB] = IB
    }
  },
  9194: (BB, IB, ZB) => {
    var TB = ZB(9167),
      JB = ZB(9201);
    IB.H3TransportTransport = class {
      constructor(BB) {
        this.events = BB, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZB = IB.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(IB.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(BB, ZB), this.wt.ready.then((BB => {
          console.log("WebTransport ready!", BB), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((BB => {
            this.reader = BB.value.readable.getReader(), this.writer = BB.value.writable.getWriter(), this.sendSeatReservation(IB.room.roomId, IB.sessionId, IB.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((BB => {
            console.error("failed to read incoming stream", BB), console.error("TODO: close the connection")
          }))
        })).catch((BB => {
          console.log("WebTransport not ready!", BB), this._close()
        })), this.wt.closed.then((BB => {
          console.log("WebTransport closed w/ success", BB), this.events.onclose({
            code: BB.closeCode,
            reason: BB.reason
          })
        })).catch((BB => {
          console.log("WebTransport closed w/ error", BB), this.events.onerror(BB), this.events.onclose({
            code: BB.closeCode,
            reason: BB.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(BB) {
        const IB = JB.encode.number(this.lengthPrefixBuffer, BB.length, {
            offset: 0
          }),
          ZB = new Uint8Array(IB + BB.length);
        ZB.set(this.lengthPrefixBuffer.subarray(0, IB), 0), ZB.set(BB, IB), this.writer.write(ZB)
      }
      sendUnreliable(BB) {
        const IB = JB.encode.number(this.lengthPrefixBuffer, BB.length, {
            offset: 0
          }),
          ZB = new Uint8Array(IB + BB.length);
        ZB.set(this.lengthPrefixBuffer.subarray(0, IB), 0), ZB.set(BB, IB), this.unreliableWriter.write(ZB)
      }
      close(BB, IB) {
        try {
          this.wt.close({
            closeCode: BB,
            reason: IB
          })
        } catch (ZB) {
          console.error(ZB)
        }
      }
      readIncomingData() {
        return TB.__awaiter(this, void 0, void 0, (function*() {
          let BB;
          for (; this.isOpen;) {
            try {
              BB = yield this.reader.read();
              const IB = BB.value,
                ZB = {
                  offset: 0
                };
              do {
                const BB = JB.decode.number(IB, ZB);
                this.events.onmessage({
                  data: IB.subarray(ZB.offset, ZB.offset + BB)
                }), ZB.offset += BB
              } while (ZB.offset < IB.length)
            } catch (IB) {
              -1 === IB.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", IB);
              break
            }
            if (BB.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return TB.__awaiter(this, void 0, void 0, (function*() {
          let BB;
          for (; this.isOpen;) {
            try {
              BB = yield this.unreliableReader.read();
              const IB = BB.value,
                ZB = {
                  offset: 0
                };
              do {
                const BB = JB.decode.number(IB, ZB);
                this.events.onmessage({
                  data: IB.subarray(ZB.offset, ZB.offset + BB)
                }), ZB.offset += BB
              } while (ZB.offset < IB.length)
            } catch (IB) {
              -1 === IB.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", IB);
              break
            }
            if (BB.done) break
          }
        }))
      }
      sendSeatReservation(BB, IB, ZB) {
        const TB = {
            offset: 0
          },
          oB = [];
        JB.encode.string(oB, BB, TB), JB.encode.string(oB, IB, TB), ZB && JB.encode.string(oB, ZB, TB), this.writer.write(new Uint8Array(oB).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9208: (BB, IB, ZB) => {
    var TB = ZB(9210);
    const JB = globalThis.WebSocket || TB;
    IB.WebSocketTransport = class {
      constructor(BB) {
        this.events = BB
      }
      send(BB) {
        this.ws.send(BB)
      }
      sendUnreliable(BB) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(BB, IB) {
        try {
          this.ws = new JB(BB, {
            headers: IB,
            protocols: this.protocols
          })
        } catch (ZB) {
          this.ws = new JB(BB, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(BB, IB) {
        this.ws.close(BB, IB)
      }
      get isOpen() {
        return this.ws.readyState === JB.OPEN
      }
    }
  },
  9210: BB => {
    BB.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9256: (BB, IB, ZB) => {
    function TB(BB, IB) {
      IB.headers = BB.headers || {}, IB.statusMessage = BB.statusText, IB.statusCode = BB.status, IB.data = BB.response
    }

    function JB(BB, IB, ZB) {
      return new Promise((function(JB, oB) {
        ZB = ZB || {};
        var GB, vB, kB, cB = new XMLHttpRequest,
          nB = ZB.body,
          hB = ZB.headers || {};
        for (GB in ZB.timeout && (cB.timeout = ZB.timeout), cB.ontimeout = cB.onerror = function(BB) {
            BB.timeout = "timeout" == BB.type, oB(BB)
          }, cB.onabort = function(BB) {
            BB.aborted = !0, oB(BB)
          }, cB.open(BB, IB.href || IB), cB.onload = function() {
            for (kB = cB.getAllResponseHeaders().trim().split(/[\r\n]+/), TB(cB, cB); vB = kB.shift();) vB = vB.split(": "), cB.headers[vB.shift().toLowerCase()] = vB.join(": ");
            if ((vB = cB.headers["content-type"]) && ~vB.indexOf("application/json")) try {
              cB.data = JSON.parse(cB.data, ZB.reviver)
            } catch (BB) {
              return TB(cB, BB), oB(BB)
            }(cB.status >= 400 ? oB : JB)(cB)
          }, typeof FormData < "u" && nB instanceof FormData || nB && "object" == typeof nB && (hB["content-type"] = "application/json", nB = JSON.stringify(nB)), cB.withCredentials = !!ZB.withCredentials, hB) cB.setRequestHeader(GB, hB[GB]);
        cB.send(nB), ZB.signal && ZB.signal.addEventListener("abort", (function() {
          cB.abort()
        }))
      }))
    }
    ZB.r(IB), ZB.d(IB, {
      del: () => kB,
      get: () => oB,
      patch: () => vB,
      post: () => GB,
      put: () => cB,
      send: () => JB
    });
    var oB = JB.bind(JB, "GET"),
      GB = JB.bind(JB, "POST"),
      vB = JB.bind(JB, "PATCH"),
      kB = JB.bind(JB, "DELETE"),
      cB = JB.bind(JB, "PUT")
  },
  9245: (BB, IB, ZB) => {
    var TB, JB, oB;
    ZB.r(IB), ZB.d(IB, {
      ALWAYS: () => bI,
      C1: () => CB,
      DECIMAL_FIT: () => EI,
      DECIMAL_ROUND: () => xI,
      Decoder: () => kI,
      Encoder: () => AI,
      FLOAT32_OPTIONS: () => FI,
      NEVER: () => tI,
      Packr: () => PI,
      RESERVE_START_SPACE: () => VI,
      RESET_BUFFER_MODE: () => KI,
      REUSE_BUFFER_MODE: () => DI,
      Unpackr: () => iB,
      addExtension: () => LI,
      clearSource: () => GI,
      decode: () => zI,
      decodeIter: () => SI,
      encode: () => lI,
      encodeIter: () => BZ,
      isNativeAccelerationEnabled: () => eB,
      mapsAsObjects: () => ZZ,
      pack: () => fI,
      roundFloat32: () => WI,
      unpack: () => nI,
      unpackMultiple: () => hI,
      useRecords: () => IZ
    });
    try {
      TB = new TextDecoder
    } catch (TZ) {}
    var GB = 0;
    const vB = [];
    var kB, cB, nB, hB, zB, FB = vB,
      NB = 0,
      gB = {},
      qB = 0,
      yB = 0,
      UB = [],
      WB = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class dB {}
    const CB = new dB;
    CB.name = "MessagePack 0xC1";
    var QB, sB, wB, OB = !1,
      YB = 2;
    try {
      new Function("")
    } catch (TZ) {
      YB = 1 / 0
    }
    class iB {
      constructor(BB) {
        BB && (!1 === BB.useRecords && void 0 === BB.mapsAsObjects && (BB.mapsAsObjects = !0), BB.sequential && !1 !== BB.trusted && (BB.trusted = !0, BB.structures || 0 == BB.useRecords || (BB.structures = [], BB.maxSharedStructures || (BB.maxSharedStructures = 0))), BB.structures ? BB.structures.sharedLength = BB.structures.length : BB.getStructures && ((BB.structures = []).uninitialized = !0, BB.structures.sharedLength = 0), BB.int64AsNumber && (BB.int64AsType = "number")), Object.assign(this, BB)
      }
      unpack(BB, IB) {
        if (JB) return oI((() => (GI(), this ? this.unpack(BB, IB) : iB.prototype.unpack.call(WB, BB, IB))));
        BB.buffer || BB.constructor !== ArrayBuffer || (BB = "undefined" !== typeof Buffer ? Buffer.from(BB) : new Uint8Array(BB)), "object" === typeof IB ? (oB = IB.end || BB.length, GB = IB.start || 0) : (GB = 0, oB = IB > -1 ? IB : BB.length), NB = 0, yB = 0, cB = null, FB = vB, nB = null, JB = BB;
        try {
          zB = BB.dataView || (BB.dataView = new DataView(BB.buffer, BB.byteOffset, BB.byteLength))
        } catch (TZ) {
          if (JB = null, BB instanceof Uint8Array) throw TZ;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (BB && "object" == typeof BB ? BB.constructor.name : typeof BB))
        }
        if (this instanceof iB) {
          if (gB = this, this.structures) return kB = this.structures, pB(IB);
          (!kB || kB.length > 0) && (kB = [])
        } else gB = WB, (!kB || kB.length > 0) && (kB = []);
        return pB(IB)
      }
      unpackMultiple(BB, IB) {
        let ZB, TB = 0;
        try {
          OB = !0;
          let JB = BB.length,
            oB = this ? this.unpack(BB, JB) : cI.unpack(BB, JB);
          if (!IB) {
            for (ZB = [oB]; GB < JB;) TB = GB, ZB.push(pB());
            return ZB
          }
          if (!1 === IB(oB, TB, GB)) return;
          for (; GB < JB;)
            if (TB = GB, !1 === IB(pB(), TB, GB)) return
        } catch (TZ) {
          throw TZ.lastPosition = TB, TZ.values = ZB, TZ
        } finally {
          OB = !1, GI()
        }
      }
      _mergeStructures(BB, IB) {
        sB && (BB = sB.call(this, BB)), BB = BB || [], Object.isFrozen(BB) && (BB = BB.map((BB => BB.slice(0))));
        for (let ZB = 0, TB = BB.length; ZB < TB; ZB++) {
          let IB = BB[ZB];
          IB && (IB.isShared = !0, ZB >= 32 && (IB.highByte = ZB - 32 >> 5))
        }
        BB.sharedLength = BB.length;
        for (let ZB in IB || [])
          if (ZB >= 0) {
            let TB = BB[ZB],
              JB = IB[ZB];
            JB && (TB && ((BB.restoreStructures || (BB.restoreStructures = []))[ZB] = TB), BB[ZB] = JB)
          } return this.structures = BB
      }
      decode(BB, IB) {
        return this.unpack(BB, IB)
      }
    }

    function pB(BB) {
      try {
        if (!gB.trusted && !OB) {
          let BB = kB.sharedLength || 0;
          BB < kB.length && (kB.length = BB)
        }
        let IB;
        if (gB.randomAccessStructure && JB[GB] < 64 && JB[GB] >= 32 && QB ? (IB = QB(JB, GB, oB, gB), JB = null, BB && BB.lazy || !IB || (IB = IB.toJSON()), GB = oB) : IB = HB(), nB && (GB = nB.postBundlePosition, nB = null), OB && (kB.restoreStructures = null), GB == oB) kB && kB.restoreStructures && aB(), kB = null, JB = null, hB && (hB = null);
        else {
          if (GB > oB) throw new Error("Unexpected end of MessagePack data");
          if (!OB) {
            let BB;
            try {
              BB = JSON.stringify(IB, ((BB, IB) => "bigint" === typeof IB ? `${IB}n` : IB)).slice(0, 100)
            } catch (TZ) {
              BB = "(JSON view not available " + TZ + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + BB)
          }
        }
        return IB
      } catch (TZ) {
        throw kB && kB.restoreStructures && aB(), GI(), (TZ instanceof RangeError || TZ.message.startsWith("Unexpected end of buffer") || GB > oB) && (TZ.incomplete = !0), TZ
      }
    }

    function aB() {
      for (let BB in kB.restoreStructures) kB[BB] = kB.restoreStructures[BB];
      kB.restoreStructures = null
    }

    function HB() {
      let BB = JB[GB++];
      if (BB < 160) {
        if (BB < 128) {
          if (BB < 64) return BB;
          {
            let IB = kB[63 & BB] || gB.getStructures && RB()[63 & BB];
            return IB ? (IB.read || (IB.read = jB(IB, 63 & BB)), IB.read()) : BB
          }
        }
        if (BB < 144) {
          if (BB -= 128, gB.mapsAsObjects) {
            let IB = {};
            for (let ZB = 0; ZB < BB; ZB++) {
              let BB = VB();
              "__proto__" === BB && (BB = "__proto_"), IB[BB] = HB()
            }
            return IB
          } {
            let IB = new Map;
            for (let ZB = 0; ZB < BB; ZB++) IB.set(HB(), HB());
            return IB
          }
        } {
          BB -= 144;
          let IB = new Array(BB);
          for (let ZB = 0; ZB < BB; ZB++) IB[ZB] = HB();
          return gB.freezeData ? Object.freeze(IB) : IB
        }
      }
      if (BB < 192) {
        let IB = BB - 160;
        if (yB >= GB) return cB.slice(GB - qB, (GB += IB) - qB);
        if (0 == yB && oB < 140) {
          let BB = IB < 16 ? bB(IB) : tB(IB);
          if (null != BB) return BB
        }
        return rB(IB)
      } {
        let IB;
        switch (BB) {
          case 192:
            return null;
          case 193:
            return nB ? (IB = HB(), IB > 0 ? nB[1].slice(nB.position1, nB.position1 += IB) : nB[0].slice(nB.position0, nB.position0 -= IB)) : CB;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (IB = JB[GB++], void 0 === IB) throw new Error("Unexpected end of buffer");
            return EB(IB);
          case 197:
            return IB = zB.getUint16(GB), GB += 2, EB(IB);
          case 198:
            return IB = zB.getUint32(GB), GB += 4, EB(IB);
          case 199:
            return DB(JB[GB++]);
          case 200:
            return IB = zB.getUint16(GB), GB += 2, DB(IB);
          case 201:
            return IB = zB.getUint32(GB), GB += 4, DB(IB);
          case 202:
            if (IB = zB.getFloat32(GB), gB.useFloat32 > 2) {
              let BB = vI[(127 & JB[GB]) << 1 | JB[GB + 1] >> 7];
              return GB += 4, (BB * IB + (IB > 0 ? .5 : -.5) | 0) / BB
            }
            return GB += 4, IB;
          case 203:
            return IB = zB.getFloat64(GB), GB += 8, IB;
          case 204:
            return JB[GB++];
          case 205:
            return IB = zB.getUint16(GB), GB += 2, IB;
          case 206:
            return IB = zB.getUint32(GB), GB += 4, IB;
          case 207:
            return "number" === gB.int64AsType ? (IB = 4294967296 * zB.getUint32(GB), IB += zB.getUint32(GB + 4)) : "string" === gB.int64AsType ? IB = zB.getBigUint64(GB).toString() : "auto" === gB.int64AsType ? (IB = zB.getBigUint64(GB), IB <= BigInt(2) << BigInt(52) && (IB = Number(IB))) : IB = zB.getBigUint64(GB), GB += 8, IB;
          case 208:
            return zB.getInt8(GB++);
          case 209:
            return IB = zB.getInt16(GB), GB += 2, IB;
          case 210:
            return IB = zB.getInt32(GB), GB += 4, IB;
          case 211:
            return "number" === gB.int64AsType ? (IB = 4294967296 * zB.getInt32(GB), IB += zB.getUint32(GB + 4)) : "string" === gB.int64AsType ? IB = zB.getBigInt64(GB).toString() : "auto" === gB.int64AsType ? (IB = zB.getBigInt64(GB), IB >= BigInt(-2) << BigInt(52) && IB <= BigInt(2) << BigInt(52) && (IB = Number(IB))) : IB = zB.getBigInt64(GB), GB += 8, IB;
          case 212:
            if (IB = JB[GB++], 114 == IB) return BI(63 & JB[GB++]);
            {
              let BB = UB[IB];
              if (BB) return BB.read ? (GB++, BB.read(HB())) : BB.noBuffer ? (GB++, BB()) : BB(JB.subarray(GB, ++GB));
              throw new Error("Unknown extension " + IB)
            }
          case 213:
            return IB = JB[GB], 114 == IB ? (GB++, BI(63 & JB[GB++], JB[GB++])) : DB(2);
          case 214:
            return DB(4);
          case 215:
            return DB(8);
          case 216:
            return DB(16);
          case 217:
            return IB = JB[GB++], yB >= GB ? cB.slice(GB - qB, (GB += IB) - qB) : mB(IB);
          case 218:
            return IB = zB.getUint16(GB), yB >= (GB += 2) ? cB.slice(GB - qB, (GB += IB) - qB) : XB(IB);
          case 219:
            return IB = zB.getUint32(GB), yB >= (GB += 4) ? cB.slice(GB - qB, (GB += IB) - qB) : LB(IB);
          case 220:
            return IB = zB.getUint16(GB), GB += 2, fB(IB);
          case 221:
            return IB = zB.getUint32(GB), GB += 4, fB(IB);
          case 222:
            return IB = zB.getUint16(GB), GB += 2, lB(IB);
          case 223:
            return IB = zB.getUint32(GB), GB += 4, lB(IB);
          default:
            if (BB >= 224) return BB - 256;
            if (void 0 === BB) {
              let BB = new Error("Unexpected end of MessagePack data");
              throw BB.incomplete = !0, BB
            }
            throw new Error("Unknown MessagePack token " + BB)
        }
      }
    }
    const MB = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function jB(BB, IB) {
      function ZB() {
        if (ZB.count++ > YB) {
          let ZB = BB.read = new Function("r", "return function(){return " + (gB.freezeData ? "Object.freeze" : "") + "({" + BB.map((BB => "__proto__" === BB ? "__proto_:r()" : MB.test(BB) ? BB + ":r()" : "[" + JSON.stringify(BB) + "]:r()")).join(",") + "})}")(HB);
          return 0 === BB.highByte && (BB.read = PB(IB, BB.read)), ZB()
        }
        let TB = {};
        for (let IB = 0, ZB = BB.length; IB < ZB; IB++) {
          let ZB = BB[IB];
          "__proto__" === ZB && (ZB = "__proto_"), TB[ZB] = HB()
        }
        return gB.freezeData ? Object.freeze(TB) : TB
      }
      return ZB.count = 0, 0 === BB.highByte ? PB(IB, ZB) : ZB
    }
    const PB = (BB, IB) => function() {
      let ZB = JB[GB++];
      if (0 === ZB) return IB();
      let TB = BB < 32 ? -(BB + (ZB << 5)) : BB + (ZB << 5),
        oB = kB[TB] || RB()[TB];
      if (!oB) throw new Error("Record id is not defined for " + TB);
      return oB.read || (oB.read = jB(oB, BB)), oB.read()
    };

    function RB() {
      let BB = oI((() => (JB = null, gB.getStructures())));
      return kB = gB._mergeStructures(BB, kB)
    }
    var rB = uB,
      mB = uB,
      XB = uB,
      LB = uB;
    let eB = !1;

    function uB(BB) {
      let IB;
      if (BB < 16 && (IB = bB(BB))) return IB;
      if (BB > 64 && TB) return TB.decode(JB.subarray(GB, GB += BB));
      const ZB = GB + BB,
        oB = [];
      for (IB = ""; GB < ZB;) {
        const BB = JB[GB++];
        if (0 === (128 & BB)) oB.push(BB);
        else if (192 === (224 & BB)) {
          const IB = 63 & JB[GB++];
          oB.push((31 & BB) << 6 | IB)
        } else if (224 === (240 & BB)) {
          const IB = 63 & JB[GB++],
            ZB = 63 & JB[GB++];
          oB.push((31 & BB) << 12 | IB << 6 | ZB)
        } else if (240 === (248 & BB)) {
          let IB = (7 & BB) << 18 | (63 & JB[GB++]) << 12 | (63 & JB[GB++]) << 6 | 63 & JB[GB++];
          IB > 65535 && (IB -= 65536, oB.push(IB >>> 10 & 1023 | 55296), IB = 56320 | 1023 & IB), oB.push(IB)
        } else oB.push(BB);
        oB.length >= 4096 && (IB += AB.apply(String, oB), oB.length = 0)
      }
      return oB.length > 0 && (IB += AB.apply(String, oB)), IB
    }

    function fB(BB) {
      let IB = new Array(BB);
      for (let ZB = 0; ZB < BB; ZB++) IB[ZB] = HB();
      return gB.freezeData ? Object.freeze(IB) : IB
    }

    function lB(BB) {
      if (gB.mapsAsObjects) {
        let IB = {};
        for (let ZB = 0; ZB < BB; ZB++) {
          let BB = VB();
          "__proto__" === BB && (BB = "__proto_"), IB[BB] = HB()
        }
        return IB
      } {
        let IB = new Map;
        for (let ZB = 0; ZB < BB; ZB++) IB.set(HB(), HB());
        return IB
      }
    }
    var AB = String.fromCharCode;

    function tB(BB) {
      let IB = GB,
        ZB = new Array(BB);
      for (let TB = 0; TB < BB; TB++) {
        const BB = JB[GB++];
        if ((128 & BB) > 0) return void(GB = IB);
        ZB[TB] = BB
      }
      return AB.apply(String, ZB)
    }

    function bB(BB) {
      if (BB < 4) {
        if (BB < 2) {
          if (0 === BB) return "";
          {
            let BB = JB[GB++];
            return (128 & BB) > 1 ? void(GB -= 1) : AB(BB)
          }
        } {
          let IB = JB[GB++],
            ZB = JB[GB++];
          if ((128 & IB) > 0 || (128 & ZB) > 0) return void(GB -= 2);
          if (BB < 3) return AB(IB, ZB);
          let TB = JB[GB++];
          return (128 & TB) > 0 ? void(GB -= 3) : AB(IB, ZB, TB)
        }
      } {
        let IB = JB[GB++],
          ZB = JB[GB++],
          TB = JB[GB++],
          oB = JB[GB++];
        if ((128 & IB) > 0 || (128 & ZB) > 0 || (128 & TB) > 0 || (128 & oB) > 0) return void(GB -= 4);
        if (BB < 6) {
          if (4 === BB) return AB(IB, ZB, TB, oB);
          {
            let BB = JB[GB++];
            return (128 & BB) > 0 ? void(GB -= 5) : AB(IB, ZB, TB, oB, BB)
          }
        }
        if (BB < 8) {
          let vB = JB[GB++],
            kB = JB[GB++];
          if ((128 & vB) > 0 || (128 & kB) > 0) return void(GB -= 6);
          if (BB < 7) return AB(IB, ZB, TB, oB, vB, kB);
          let cB = JB[GB++];
          return (128 & cB) > 0 ? void(GB -= 7) : AB(IB, ZB, TB, oB, vB, kB, cB)
        } {
          let vB = JB[GB++],
            kB = JB[GB++],
            cB = JB[GB++],
            nB = JB[GB++];
          if ((128 & vB) > 0 || (128 & kB) > 0 || (128 & cB) > 0 || (128 & nB) > 0) return void(GB -= 8);
          if (BB < 10) {
            if (8 === BB) return AB(IB, ZB, TB, oB, vB, kB, cB, nB);
            {
              let BB = JB[GB++];
              return (128 & BB) > 0 ? void(GB -= 9) : AB(IB, ZB, TB, oB, vB, kB, cB, nB, BB)
            }
          }
          if (BB < 12) {
            let hB = JB[GB++],
              zB = JB[GB++];
            if ((128 & hB) > 0 || (128 & zB) > 0) return void(GB -= 10);
            if (BB < 11) return AB(IB, ZB, TB, oB, vB, kB, cB, nB, hB, zB);
            let FB = JB[GB++];
            return (128 & FB) > 0 ? void(GB -= 11) : AB(IB, ZB, TB, oB, vB, kB, cB, nB, hB, zB, FB)
          } {
            let hB = JB[GB++],
              zB = JB[GB++],
              FB = JB[GB++],
              NB = JB[GB++];
            if ((128 & hB) > 0 || (128 & zB) > 0 || (128 & FB) > 0 || (128 & NB) > 0) return void(GB -= 12);
            if (BB < 14) {
              if (12 === BB) return AB(IB, ZB, TB, oB, vB, kB, cB, nB, hB, zB, FB, NB);
              {
                let BB = JB[GB++];
                return (128 & BB) > 0 ? void(GB -= 13) : AB(IB, ZB, TB, oB, vB, kB, cB, nB, hB, zB, FB, NB, BB)
              }
            } {
              let gB = JB[GB++],
                qB = JB[GB++];
              if ((128 & gB) > 0 || (128 & qB) > 0) return void(GB -= 14);
              if (BB < 15) return AB(IB, ZB, TB, oB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB);
              let yB = JB[GB++];
              return (128 & yB) > 0 ? void(GB -= 15) : AB(IB, ZB, TB, oB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB)
            }
          }
        }
      }
    }

    function xB() {
      let BB, IB = JB[GB++];
      if (IB < 192) BB = IB - 160;
      else switch (IB) {
        case 217:
          BB = JB[GB++];
          break;
        case 218:
          BB = zB.getUint16(GB), GB += 2;
          break;
        case 219:
          BB = zB.getUint32(GB), GB += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return uB(BB)
    }

    function EB(BB) {
      return gB.copyBuffers ? Uint8Array.prototype.slice.call(JB, GB, GB += BB) : JB.subarray(GB, GB += BB)
    }

    function DB(BB) {
      let IB = JB[GB++];
      if (UB[IB]) {
        let ZB;
        return UB[IB](JB.subarray(GB, ZB = GB += BB), (BB => {
          GB = BB;
          try {
            return HB()
          } finally {
            GB = ZB
          }
        }))
      }
      throw new Error("Unknown extension type " + IB)
    }
    var KB = new Array(4096);

    function VB() {
      let BB = JB[GB++];
      if (!(BB >= 160 && BB < 192)) return GB--, SB(HB());
      if (BB -= 160, yB >= GB) return cB.slice(GB - qB, (GB += BB) - qB);
      if (!(0 == yB && oB < 180)) return rB(BB);
      let IB, ZB = 4095 & (BB << 5 ^ (BB > 1 ? zB.getUint16(GB) : BB > 0 ? JB[GB] : 0)),
        TB = KB[ZB],
        vB = GB,
        kB = GB + BB - 3,
        nB = 0;
      if (TB && TB.bytes == BB) {
        for (; vB < kB;) {
          if (IB = zB.getUint32(vB), IB != TB[nB++]) {
            vB = 1879048192;
            break
          }
          vB += 4
        }
        for (kB += 3; vB < kB;)
          if (IB = JB[vB++], IB != TB[nB++]) {
            vB = 1879048192;
            break
          } if (vB === kB) return GB = vB, TB.string;
        kB -= 3, vB = GB
      }
      for (TB = [], KB[ZB] = TB, TB.bytes = BB; vB < kB;) IB = zB.getUint32(vB), TB.push(IB), vB += 4;
      for (kB += 3; vB < kB;) IB = JB[vB++], TB.push(IB);
      let hB = BB < 16 ? bB(BB) : tB(BB);
      return TB.string = null != hB ? hB : rB(BB)
    }

    function SB(BB) {
      if ("string" === typeof BB) return BB;
      if ("number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB) return BB.toString();
      if (null == BB) return BB + "";
      if (gB.allowArraysInMapKeys && Array.isArray(BB) && BB.flat().every((BB => ["string", "number", "boolean", "bigint"].includes(typeof BB)))) return BB.flat().toString();
      throw new Error("Invalid property type for record: " + typeof BB)
    }
    const BI = (BB, IB) => {
      let ZB = HB().map(SB),
        TB = BB;
      void 0 !== IB && (BB = BB < 32 ? -((IB << 5) + BB) : (IB << 5) + BB, ZB.highByte = IB);
      let JB = kB[BB];
      return JB && (JB.isShared || OB) && ((kB.restoreStructures || (kB.restoreStructures = []))[BB] = JB), kB[BB] = ZB, ZB.read = jB(ZB, TB), ZB.read()
    };
    UB[0] = () => {}, UB[0].noBuffer = !0, UB[66] = BB => {
      let IB = BB.length,
        ZB = BigInt(128 & BB[0] ? BB[0] - 256 : BB[0]);
      for (let TB = 1; TB < IB; TB++) ZB <<= BigInt(8), ZB += BigInt(BB[TB]);
      return ZB
    };
    let II = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    UB[101] = () => {
      let BB = HB();
      return (II[BB[0]] || Error)(BB[1], {
        cause: BB[2]
      })
    }, UB[105] = BB => {
      if (!1 === gB.structuredClone) throw new Error("Structured clone extension is disabled");
      let IB = zB.getUint32(GB - 4);
      hB || (hB = new Map);
      let ZB, TB = JB[GB];
      ZB = TB >= 144 && TB < 160 || 220 == TB || 221 == TB ? [] : {};
      let oB = {
        target: ZB
      };
      hB.set(IB, oB);
      let vB = HB();
      return oB.used ? Object.assign(ZB, vB) : (oB.target = vB, vB)
    }, UB[112] = BB => {
      if (!1 === gB.structuredClone) throw new Error("Structured clone extension is disabled");
      let IB = zB.getUint32(GB - 4),
        ZB = hB.get(IB);
      return ZB.used = !0, ZB.target
    }, UB[115] = () => new Set(HB());
    const ZI = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((BB => BB + "Array"));
    let TI = "object" === typeof globalThis ? globalThis : window;
    UB[116] = BB => {
      let IB = BB[0],
        ZB = ZI[IB];
      if (!ZB) {
        if (16 === IB) {
          let IB = new ArrayBuffer(BB.length - 1);
          return new Uint8Array(IB).set(BB.subarray(1)), IB
        }
        throw new Error("Could not find typed array for code " + IB)
      }
      return new TI[ZB](Uint8Array.prototype.slice.call(BB, 1).buffer)
    }, UB[120] = () => {
      let BB = HB();
      return new RegExp(BB[0], BB[1])
    };
    const JI = [];

    function oI(BB) {
      wB && wB();
      let IB = oB,
        ZB = GB,
        TB = NB,
        vB = qB,
        UB = yB,
        WB = cB,
        dB = FB,
        CB = hB,
        QB = nB,
        sB = new Uint8Array(JB.slice(0, oB)),
        YB = kB,
        iB = kB.slice(0, kB.length),
        pB = gB,
        aB = OB,
        HB = BB();
      return oB = IB, GB = ZB, NB = TB, qB = vB, yB = UB, cB = WB, FB = dB, hB = CB, nB = QB, JB = sB, OB = aB, (kB = YB).splice(0, kB.length, ...iB), gB = pB, zB = new DataView(JB.buffer, JB.byteOffset, JB.byteLength), HB
    }

    function GI() {
      JB = null, hB = null, kB = null
    }
    UB[98] = BB => {
      let IB = (BB[0] << 24) + (BB[1] << 16) + (BB[2] << 8) + BB[3],
        ZB = GB;
      return GB += IB - BB.length, nB = JI, (nB = [xB(), xB()]).position0 = 0, nB.position1 = 0, nB.postBundlePosition = GB, GB = ZB, HB()
    }, UB[255] = BB => 4 == BB.length ? new Date(1e3 * (16777216 * BB[0] + (BB[1] << 16) + (BB[2] << 8) + BB[3])) : 8 == BB.length ? new Date(((BB[0] << 22) + (BB[1] << 14) + (BB[2] << 6) + (BB[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & BB[3]) + 16777216 * BB[4] + (BB[5] << 16) + (BB[6] << 8) + BB[7])) : 12 == BB.length ? new Date(((BB[0] << 24) + (BB[1] << 16) + (BB[2] << 8) + BB[3]) / 1e6 + 1e3 * ((128 & BB[4] ? -281474976710656 : 0) + 1099511627776 * BB[6] + 4294967296 * BB[7] + 16777216 * BB[8] + (BB[9] << 16) + (BB[10] << 8) + BB[11])) : new Date("invalid");
    const vI = new Array(147);
    for (let JZ = 0; JZ < 256; JZ++) vI[JZ] = +("1e" + Math.floor(45.15 - .30103 * JZ));
    const kI = iB;
    var cI = new iB({
      useRecords: !1
    });
    const nI = cI.unpack,
      hI = cI.unpackMultiple,
      zI = cI.unpack,
      FI = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let NI, gI, qI, yI = new Float32Array(1),
      UI = new Uint8Array(yI.buffer, 0, 4);

    function WI(BB) {
      yI[0] = BB;
      let IB = vI[(127 & UI[3]) << 1 | UI[2] >> 7];
      return (IB * BB + (BB > 0 ? .5 : -.5) | 0) / IB
    }
    try {
      NI = new TextEncoder
    } catch (TZ) {}
    const dI = "undefined" !== typeof Buffer,
      CI = dI ? function(BB) {
        return Buffer.allocUnsafeSlow(BB)
      } : Uint8Array,
      QI = dI ? Buffer : Uint8Array,
      sI = dI ? 4294967296 : 2144337920;
    let wI, OI, YI, iI, pI, aI = 0,
      HI = null;
    const MI = /[\u0080-\uFFFF]/,
      jI = Symbol("record-id");
    class PI extends iB {
      constructor(BB) {
        let IB, ZB, TB, JB;
        super(BB), this.offset = 0;
        let oB = QI.prototype.utf8Write ? function(BB, IB) {
            return wI.utf8Write(BB, IB, wI.byteLength - IB)
          } : !(!NI || !NI.encodeInto) && function(BB, IB) {
            return NI.encodeInto(BB, wI.subarray(IB)).written
          },
          GB = this;
        BB || (BB = {});
        let vB = BB && BB.sequential,
          kB = BB.structures || BB.saveStructures,
          cB = BB.maxSharedStructures;
        if (null == cB && (cB = kB ? 32 : 0), cB > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        BB.structuredClone && void 0 == BB.moreTypes && (this.moreTypes = !0);
        let nB = BB.maxOwnStructures;
        null == nB && (nB = kB ? 32 : 64), this.structures || 0 == BB.useRecords || (this.structures = []);
        let hB = cB > 32 || nB + cB > 64,
          zB = cB + 64,
          FB = cB + nB + 64;
        if (FB > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let NB = [],
          gB = 0,
          qB = 0;
        this.pack = this.encode = function(BB, oB) {
          if (wI || (wI = new CI(8192), YI = wI.dataView || (wI.dataView = new DataView(wI.buffer, 0, 8192)), aI = 0), iI = wI.length - 10, iI - aI < 2048 ? (wI = new CI(wI.length), YI = wI.dataView || (wI.dataView = new DataView(wI.buffer, 0, wI.length)), iI = wI.length - 10, aI = 0) : aI = aI + 7 & 2147483640, IB = aI, oB & VI && (aI += 255 & oB), JB = GB.structuredClone ? new Map : null, GB.bundleStrings && "string" !== typeof BB ? (HI = [], HI.size = 1 / 0) : HI = null, TB = GB.structures, TB) {
            TB.uninitialized && (TB = GB._mergeStructures(GB.getStructures()));
            let BB = TB.sharedLength || 0;
            if (BB > cB) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + TB.sharedLength);
            if (!TB.transitions) {
              TB.transitions = Object.create(null);
              for (let IB = 0; IB < BB; IB++) {
                let BB = TB[IB];
                if (!BB) continue;
                let ZB, JB = TB.transitions;
                for (let IB = 0, TB = BB.length; IB < TB; IB++) {
                  let TB = BB[IB];
                  ZB = JB[TB], ZB || (ZB = JB[TB] = Object.create(null)), JB = ZB
                }
                JB[jI] = IB + 64
              }
              this.lastNamedStructuresLength = BB
            }
            vB || (TB.nextId = BB + 64)
          }
          let kB;
          ZB && (ZB = !1);
          try {
            GB.randomAccessStructure && BB && BB.constructor && BB.constructor === Object ? iB(BB) : WB(BB);
            let ZB = HI;
            if (HI && XI(IB, WB, 0), JB && JB.idsToInsert) {
              let BB = JB.idsToInsert.sort(((BB, IB) => BB.offset > IB.offset ? 1 : -1)),
                TB = BB.length,
                oB = -1;
              for (; ZB && TB > 0;) {
                let JB = BB[--TB].offset + IB;
                JB < ZB.stringsPosition + IB && -1 === oB && (oB = 0), JB > ZB.position + IB ? oB >= 0 && (oB += 6) : (oB >= 0 && (YI.setUint32(ZB.position + IB, YI.getUint32(ZB.position + IB) + oB), oB = -1), ZB = ZB.previous, TB++)
              }
              oB >= 0 && ZB && YI.setUint32(ZB.position + IB, YI.getUint32(ZB.position + IB) + oB), aI += 6 * BB.length, aI > iI && wB(aI), GB.offset = aI;
              let vB = function(BB, IB) {
                let ZB, TB = 6 * IB.length,
                  JB = BB.length - TB;
                for (; ZB = IB.pop();) {
                  let IB = ZB.offset,
                    oB = ZB.id;
                  BB.copyWithin(IB + TB, IB, JB), TB -= 6;
                  let GB = IB + TB;
                  BB[GB++] = 214, BB[GB++] = 105, BB[GB++] = oB >> 24, BB[GB++] = oB >> 16 & 255, BB[GB++] = oB >> 8 & 255, BB[GB++] = 255 & oB, JB = IB
                }
                return BB
              }(wI.subarray(IB, aI), BB);
              return JB = null, vB
            }
            return GB.offset = aI, oB & DI ? (wI.start = IB, wI.end = aI, wI) : wI.subarray(IB, aI)
          } catch (TZ) {
            throw kB = TZ, TZ
          } finally {
            if (TB && (yB(), ZB && GB.saveStructures)) {
              let ZB = TB.sharedLength || 0,
                JB = wI.subarray(IB, aI),
                vB = eI(TB, GB);
              if (!kB) return !1 === GB.saveStructures(vB, vB.isCompatible) ? GB.pack(BB, oB) : (GB.lastNamedStructuresLength = ZB, wI.length > 1073741824 && (wI = null), JB)
            }
            wI.length > 1073741824 && (wI = null), oB & KI && (aI = IB)
          }
        };
        const yB = () => {
            qB < 10 && qB++;
            let BB = TB.sharedLength || 0;
            if (TB.length > BB && !vB && (TB.length = BB), gB > 1e4) TB.transitions = null, qB = 0, gB = 0, NB.length > 0 && (NB = []);
            else if (NB.length > 0 && !vB) {
              for (let BB = 0, IB = NB.length; BB < IB; BB++) NB[BB][jI] = 0;
              NB = []
            }
          },
          UB = BB => {
            var IB = BB.length;
            IB < 16 ? wI[aI++] = 144 | IB : IB < 65536 ? (wI[aI++] = 220, wI[aI++] = IB >> 8, wI[aI++] = 255 & IB) : (wI[aI++] = 221, YI.setUint32(aI, IB), aI += 4);
            for (let ZB = 0; ZB < IB; ZB++) WB(BB[ZB])
          },
          WB = BB => {
            aI > iI && (wI = wB(aI));
            var ZB, TB = typeof BB;
            if ("string" === TB) {
              let TB, JB = BB.length;
              if (HI && JB >= 4 && JB < 4096) {
                if ((HI.size += JB) > 21760) {
                  let BB, ZB, TB = (HI[0] ? 3 * HI[0].length + HI[1].length : 0) + 10;
                  aI + TB > iI && (wI = wB(aI + TB)), HI.position ? (ZB = HI, wI[aI] = 200, aI += 3, wI[aI++] = 98, BB = aI - IB, aI += 4, XI(IB, WB, 0), YI.setUint16(BB + IB - 3, aI - IB - BB)) : (wI[aI++] = 214, wI[aI++] = 98, BB = aI - IB, aI += 4), HI = ["", ""], HI.previous = ZB, HI.size = 0, HI.position = BB
                }
                let ZB = MI.test(BB);
                return HI[ZB ? 0 : 1] += BB, wI[aI++] = 193, void WB(ZB ? -JB : JB)
              }
              TB = JB < 32 ? 1 : JB < 256 ? 2 : JB < 65536 ? 3 : 5;
              let GB = 3 * JB;
              if (aI + GB > iI && (wI = wB(aI + GB)), JB < 64 || !oB) {
                let IB, oB, GB, vB = aI + TB;
                for (IB = 0; IB < JB; IB++) oB = BB.charCodeAt(IB), oB < 128 ? wI[vB++] = oB : oB < 2048 ? (wI[vB++] = oB >> 6 | 192, wI[vB++] = 63 & oB | 128) : 55296 === (64512 & oB) && 56320 === (64512 & (GB = BB.charCodeAt(IB + 1))) ? (oB = 65536 + ((1023 & oB) << 10) + (1023 & GB), IB++, wI[vB++] = oB >> 18 | 240, wI[vB++] = oB >> 12 & 63 | 128, wI[vB++] = oB >> 6 & 63 | 128, wI[vB++] = 63 & oB | 128) : (wI[vB++] = oB >> 12 | 224, wI[vB++] = oB >> 6 & 63 | 128, wI[vB++] = 63 & oB | 128);
                ZB = vB - aI - TB
              } else ZB = oB(BB, aI + TB);
              ZB < 32 ? wI[aI++] = 160 | ZB : ZB < 256 ? (TB < 2 && wI.copyWithin(aI + 2, aI + 1, aI + 1 + ZB), wI[aI++] = 217, wI[aI++] = ZB) : ZB < 65536 ? (TB < 3 && wI.copyWithin(aI + 3, aI + 2, aI + 2 + ZB), wI[aI++] = 218, wI[aI++] = ZB >> 8, wI[aI++] = 255 & ZB) : (TB < 5 && wI.copyWithin(aI + 5, aI + 3, aI + 3 + ZB), wI[aI++] = 219, YI.setUint32(aI, ZB), aI += 4), aI += ZB
            } else if ("number" === TB)
              if (BB >>> 0 === BB) BB < 32 || BB < 128 && !1 === this.useRecords || BB < 64 && !this.randomAccessStructure ? wI[aI++] = BB : BB < 256 ? (wI[aI++] = 204, wI[aI++] = BB) : BB < 65536 ? (wI[aI++] = 205, wI[aI++] = BB >> 8, wI[aI++] = 255 & BB) : (wI[aI++] = 206, YI.setUint32(aI, BB), aI += 4);
              else if ((BB | 0) === BB) BB >= -32 ? wI[aI++] = 256 + BB : BB >= -128 ? (wI[aI++] = 208, wI[aI++] = BB + 256) : BB >= -32768 ? (wI[aI++] = 209, YI.setInt16(aI, BB), aI += 2) : (wI[aI++] = 210, YI.setInt32(aI, BB), aI += 4);
            else {
              let IB;
              if ((IB = this.useFloat32) > 0 && BB < 4294967296 && BB >= -2147483648) {
                let ZB;
                if (wI[aI++] = 202, YI.setFloat32(aI, BB), IB < 4 || ((ZB = BB * vI[(127 & wI[aI]) << 1 | wI[aI + 1] >> 7]) | 0) === ZB) return void(aI += 4);
                aI--
              }
              wI[aI++] = 203, YI.setFloat64(aI, BB), aI += 8
            } else if ("object" === TB || "function" === TB)
              if (BB) {
                if (JB) {
                  let ZB = JB.get(BB);
                  if (ZB) {
                    if (!ZB.id) {
                      let BB = JB.idsToInsert || (JB.idsToInsert = []);
                      ZB.id = BB.push(ZB)
                    }
                    return wI[aI++] = 214, wI[aI++] = 112, YI.setUint32(aI, ZB.id), void(aI += 4)
                  }
                  JB.set(BB, {
                    offset: aI - IB
                  })
                }
                let oB = BB.constructor;
                if (oB === Object) sB(BB);
                else if (oB === Array) UB(BB);
                else if (oB === Map)
                  if (this.mapAsEmptyObject) wI[aI++] = 128;
                  else {
                    (ZB = BB.size) < 16 ? wI[aI++] = 128 | ZB : ZB < 65536 ? (wI[aI++] = 222, wI[aI++] = ZB >> 8, wI[aI++] = 255 & ZB) : (wI[aI++] = 223, YI.setUint32(aI, ZB), aI += 4);
                    for (let [IB, ZB] of BB) WB(IB), WB(ZB)
                  }
                else {
                  for (let IB = 0, ZB = gI.length; IB < ZB; IB++) {
                    if (BB instanceof qI[IB]) {
                      let ZB = gI[IB];
                      if (ZB.write) {
                        ZB.type && (wI[aI++] = 212, wI[aI++] = ZB.type, wI[aI++] = 0);
                        let IB = ZB.write.call(this, BB);
                        return void(IB === BB ? Array.isArray(BB) ? UB(BB) : sB(BB) : WB(IB))
                      }
                      let TB, JB = wI,
                        oB = YI,
                        GB = aI;
                      wI = null;
                      try {
                        TB = ZB.pack.call(this, BB, (BB => (wI = JB, JB = null, aI += BB, aI > iI && wB(aI), {
                          target: wI,
                          targetView: YI,
                          position: aI - BB
                        })), WB)
                      } finally {
                        JB && (wI = JB, YI = oB, aI = GB, iI = wI.length - 10)
                      }
                      return void(TB && (TB.length + aI > iI && wB(TB.length + aI), aI = mI(TB, wI, aI, ZB.type)))
                    }
                  }
                  if (Array.isArray(BB)) UB(BB);
                  else {
                    if (BB.toJSON) {
                      const IB = BB.toJSON();
                      if (IB !== BB) return WB(IB)
                    }
                    if ("function" === TB) return WB(this.writeFunction && this.writeFunction(BB));
                    sB(BB)
                  }
                }
              } else wI[aI++] = 192;
            else if ("boolean" === TB) wI[aI++] = BB ? 195 : 194;
            else if ("bigint" === TB) {
              if (BB < BigInt(1) << BigInt(63) && BB >= -(BigInt(1) << BigInt(63))) wI[aI++] = 211, YI.setBigInt64(aI, BB);
              else if (BB < BigInt(1) << BigInt(64) && BB > 0) wI[aI++] = 207, YI.setBigUint64(aI, BB);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return WB(BB.toString());
                  if (this.useBigIntExtension && BB < BigInt(2) ** BigInt(1023) && BB > -(BigInt(2) ** BigInt(1023))) {
                    wI[aI++] = 199, aI++, wI[aI++] = 66;
                    let IB, ZB = [];
                    do {
                      let TB = BB & BigInt(255);
                      IB = (TB & BigInt(128)) === (BB < BigInt(0) ? BigInt(128) : BigInt(0)), ZB.push(TB), BB >>= BigInt(8)
                    } while (BB !== BigInt(0) && BB !== BigInt(-1) || !IB);
                    wI[aI - 2] = ZB.length;
                    for (let BB = ZB.length; BB > 0;) wI[aI++] = Number(ZB[--BB]);
                    return
                  }
                  throw new RangeError(BB + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                wI[aI++] = 203, YI.setFloat64(aI, Number(BB))
              }
              aI += 8
            } else {
              if ("undefined" !== TB) throw new Error("Unknown type: " + TB);
              this.encodeUndefinedAsNil ? wI[aI++] = 192 : (wI[aI++] = 212, wI[aI++] = 0, wI[aI++] = 0)
            }
          },
          dB = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? BB => {
            let IB;
            if (this.skipValues) {
              IB = [];
              for (let ZB in BB) "function" === typeof BB.hasOwnProperty && !BB.hasOwnProperty(ZB) || this.skipValues.includes(BB[ZB]) || IB.push(ZB)
            } else IB = Object.keys(BB);
            let ZB, TB = IB.length;
            if (TB < 16 ? wI[aI++] = 128 | TB : TB < 65536 ? (wI[aI++] = 222, wI[aI++] = TB >> 8, wI[aI++] = 255 & TB) : (wI[aI++] = 223, YI.setUint32(aI, TB), aI += 4), this.coercibleKeyAsNumber)
              for (let JB = 0; JB < TB; JB++) {
                ZB = IB[JB];
                let TB = Number(ZB);
                WB(isNaN(TB) ? ZB : TB), WB(BB[ZB])
              } else
                for (let JB = 0; JB < TB; JB++) WB(ZB = IB[JB]), WB(BB[ZB])
          } : BB => {
            wI[aI++] = 222;
            let ZB = aI - IB;
            aI += 2;
            let TB = 0;
            for (let IB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(IB)) && (WB(IB), WB(BB[IB]), TB++);
            if (TB > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            wI[ZB++ + IB] = TB >> 8, wI[ZB + IB] = 255 & TB
          },
          CB = !1 === this.useRecords ? dB : BB.progressiveRecords && !hB ? BB => {
            let ZB, JB, oB = TB.transitions || (TB.transitions = Object.create(null)),
              GB = aI++ - IB;
            for (let vB in BB)
              if ("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(vB)) {
                if (ZB = oB[vB], ZB) oB = ZB;
                else {
                  let kB = Object.keys(BB),
                    cB = oB;
                  oB = TB.transitions;
                  let nB = 0;
                  for (let BB = 0, IB = kB.length; BB < IB; BB++) {
                    let IB = kB[BB];
                    ZB = oB[IB], ZB || (ZB = oB[IB] = Object.create(null), nB++), oB = ZB
                  }
                  GB + IB + 1 == aI ? (aI--, OB(oB, kB, nB)) : YB(oB, kB, GB, nB), JB = !0, oB = cB[vB]
                }
                WB(BB[vB])
              } if (!JB) {
              let ZB = oB[jI];
              ZB ? wI[GB + IB] = ZB : YB(oB, Object.keys(BB), GB, 0)
            }
          } : BB => {
            let IB, ZB = TB.transitions || (TB.transitions = Object.create(null)),
              JB = 0;
            for (let TB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(TB)) && (IB = ZB[TB], IB || (IB = ZB[TB] = Object.create(null), JB++), ZB = IB);
            let oB = ZB[jI];
            oB ? oB >= 96 && hB ? (wI[aI++] = 96 + (31 & (oB -= 96)), wI[aI++] = oB >> 5) : wI[aI++] = oB : OB(ZB, ZB.__keys__ || Object.keys(BB), JB);
            for (let TB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(TB)) && WB(BB[TB])
          },
          QB = "function" == typeof this.useRecords && this.useRecords,
          sB = QB ? BB => {
            QB(BB) ? CB(BB) : dB(BB)
          } : CB,
          wB = BB => {
            let ZB;
            if (BB > 16777216) {
              if (BB - IB > sI) throw new Error("Packed buffer would be larger than maximum buffer size");
              ZB = Math.min(sI, 4096 * Math.round(Math.max((BB - IB) * (BB > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else ZB = 1 + (Math.max(BB - IB << 2, wI.length - 1) >> 12) << 12;
            let TB = new CI(ZB);
            return YI = TB.dataView || (TB.dataView = new DataView(TB.buffer, 0, ZB)), BB = Math.min(BB, wI.length), wI.copy ? wI.copy(TB, 0, IB, BB) : TB.set(wI.slice(IB, BB)), aI -= IB, IB = 0, iI = TB.length - 10, wI = TB
          },
          OB = (BB, IB, JB) => {
            let oB = TB.nextId;
            oB || (oB = 64), oB < zB && this.shouldShareStructure && !this.shouldShareStructure(IB) ? (oB = TB.nextOwnId, oB < FB || (oB = zB), TB.nextOwnId = oB + 1) : (oB >= FB && (oB = zB), TB.nextId = oB + 1);
            let GB = IB.highByte = oB >= 96 && hB ? oB - 96 >> 5 : -1;
            BB[jI] = oB, BB.__keys__ = IB, TB[oB - 64] = IB, oB < zB ? (IB.isShared = !0, TB.sharedLength = oB - 63, ZB = !0, GB >= 0 ? (wI[aI++] = 96 + (31 & oB), wI[aI++] = GB) : wI[aI++] = oB) : (GB >= 0 ? (wI[aI++] = 213, wI[aI++] = 114, wI[aI++] = 96 + (31 & oB), wI[aI++] = GB) : (wI[aI++] = 212, wI[aI++] = 114, wI[aI++] = oB), JB && (gB += qB * JB), NB.length >= nB && (NB.shift()[jI] = 0), NB.push(BB), WB(IB))
          },
          YB = (BB, ZB, TB, JB) => {
            let oB = wI,
              GB = aI,
              vB = iI,
              kB = IB;
            wI = OI, aI = 0, IB = 0, wI || (OI = wI = new CI(8192)), iI = wI.length - 10, OB(BB, ZB, JB), OI = wI;
            let cB = aI;
            if (wI = oB, aI = GB, iI = vB, IB = kB, cB > 1) {
              let BB = aI + cB - 1;
              BB > iI && wB(BB);
              let ZB = TB + IB;
              wI.copyWithin(ZB + cB, ZB + 1, aI), wI.set(OI.slice(0, cB), ZB), aI = BB
            } else wI[TB + IB] = OI[0]
          },
          iB = BB => {
            let JB = pI(BB, wI, IB, aI, TB, wB, ((BB, IB, TB) => {
              if (TB) return ZB = !0;
              aI = IB;
              let JB = wI;
              return WB(BB), yB(), JB !== wI ? {
                position: aI,
                targetView: YI,
                target: wI
              } : aI
            }), this);
            if (0 === JB) return sB(BB);
            aI = JB
          }
      }
      useBuffer(BB) {
        wI = BB, YI = wI.dataView || (wI.dataView = new DataView(wI.buffer, wI.byteOffset, wI.byteLength)), aI = 0
      }
      set position(BB) {
        aI = BB
      }
      get position() {
        return aI
      }
      set buffer(BB) {
        wI = BB
      }
      get buffer() {
        return wI
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function RI(BB, IB, ZB, TB) {
      let JB = BB.byteLength;
      if (JB + 1 < 256) {
        var {
          target: oB,
          position: GB
        } = ZB(4 + JB);
        oB[GB++] = 199, oB[GB++] = JB + 1
      } else if (JB + 1 < 65536) {
        var {
          target: oB,
          position: GB
        } = ZB(5 + JB);
        oB[GB++] = 200, oB[GB++] = JB + 1 >> 8, oB[GB++] = JB + 1 & 255
      } else {
        var {
          target: oB,
          position: GB,
          targetView: vB
        } = ZB(7 + JB);
        oB[GB++] = 201, vB.setUint32(GB, JB + 1), GB += 4
      }
      oB[GB++] = 116, oB[GB++] = IB, BB.buffer || (BB = new Uint8Array(BB)), oB.set(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength), GB)
    }

    function rI(BB, IB) {
      let ZB = BB.byteLength;
      var TB, JB;
      if (ZB < 256) {
        var {
          target: TB,
          position: JB
        } = IB(ZB + 2);
        TB[JB++] = 196, TB[JB++] = ZB
      } else if (ZB < 65536) {
        var {
          target: TB,
          position: JB
        } = IB(ZB + 3);
        TB[JB++] = 197, TB[JB++] = ZB >> 8, TB[JB++] = 255 & ZB
      } else {
        var {
          target: TB,
          position: JB,
          targetView: oB
        } = IB(ZB + 5);
        TB[JB++] = 198, oB.setUint32(JB, ZB), JB += 4
      }
      TB.set(BB, JB)
    }

    function mI(BB, IB, ZB, TB) {
      let JB = BB.length;
      switch (JB) {
        case 1:
          IB[ZB++] = 212;
          break;
        case 2:
          IB[ZB++] = 213;
          break;
        case 4:
          IB[ZB++] = 214;
          break;
        case 8:
          IB[ZB++] = 215;
          break;
        case 16:
          IB[ZB++] = 216;
          break;
        default:
          JB < 256 ? (IB[ZB++] = 199, IB[ZB++] = JB) : JB < 65536 ? (IB[ZB++] = 200, IB[ZB++] = JB >> 8, IB[ZB++] = 255 & JB) : (IB[ZB++] = 201, IB[ZB++] = JB >> 24, IB[ZB++] = JB >> 16 & 255, IB[ZB++] = JB >> 8 & 255, IB[ZB++] = 255 & JB)
      }
      return IB[ZB++] = TB, IB.set(BB, ZB), ZB += JB
    }

    function XI(BB, IB, ZB) {
      if (HI.length > 0) {
        YI.setUint32(HI.position + BB, aI + ZB - HI.position - BB), HI.stringsPosition = aI - BB;
        let TB = HI;
        HI = null, IB(TB[0]), IB(TB[1])
      }
    }

    function LI(BB) {
      if (BB.Class) {
        if (!BB.pack && !BB.write) throw new Error("Extension has no pack or write function");
        if (BB.pack && !BB.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        qI.unshift(BB.Class), gI.unshift(BB)
      }! function(BB) {
        BB.unpack ? UB[BB.type] = BB.unpack : UB[BB.type] = BB
      }(BB)
    }

    function eI(BB, IB) {
      return BB.isCompatible = BB => {
        let ZB = !BB || (IB.lastNamedStructuresLength || 0) === BB.length;
        return ZB || IB._mergeStructures(BB), ZB
      }, BB
    }
    qI = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, dB], gI = [{
      pack(BB, IB, ZB) {
        let TB = BB.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === BB.getMilliseconds()) && TB >= 0 && TB < 4294967296) {
          let {
            target: BB,
            targetView: ZB,
            position: JB
          } = IB(6);
          BB[JB++] = 214, BB[JB++] = 255, ZB.setUint32(JB, TB)
        } else if (TB > 0 && TB < 4294967296) {
          let {
            target: ZB,
            targetView: JB,
            position: oB
          } = IB(10);
          ZB[oB++] = 215, ZB[oB++] = 255, JB.setUint32(oB, 4e6 * BB.getMilliseconds() + (TB / 1e3 / 4294967296 | 0)), JB.setUint32(oB + 4, TB)
        } else if (isNaN(TB)) {
          if (this.onInvalidDate) return IB(0), ZB(this.onInvalidDate());
          let {
            target: BB,
            targetView: TB,
            position: JB
          } = IB(3);
          BB[JB++] = 212, BB[JB++] = 255, BB[JB++] = 255
        } else {
          let {
            target: ZB,
            targetView: JB,
            position: oB
          } = IB(15);
          ZB[oB++] = 199, ZB[oB++] = 12, ZB[oB++] = 255, JB.setUint32(oB, 1e6 * BB.getMilliseconds()), JB.setBigInt64(oB + 4, BigInt(Math.floor(TB)))
        }
      }
    }, {
      pack(BB, IB, ZB) {
        if (this.setAsEmptyObject) return IB(0), ZB({});
        let TB = Array.from(BB),
          {
            target: JB,
            position: oB
          } = IB(this.moreTypes ? 3 : 0);
        this.moreTypes && (JB[oB++] = 212, JB[oB++] = 115, JB[oB++] = 0), ZB(TB)
      }
    }, {
      pack(BB, IB, ZB) {
        let {
          target: TB,
          position: JB
        } = IB(this.moreTypes ? 3 : 0);
        this.moreTypes && (TB[JB++] = 212, TB[JB++] = 101, TB[JB++] = 0), ZB([BB.name, BB.message, BB.cause])
      }
    }, {
      pack(BB, IB, ZB) {
        let {
          target: TB,
          position: JB
        } = IB(this.moreTypes ? 3 : 0);
        this.moreTypes && (TB[JB++] = 212, TB[JB++] = 120, TB[JB++] = 0), ZB([BB.source, BB.flags])
      }
    }, {
      pack(BB, IB) {
        this.moreTypes ? RI(BB, 16, IB) : rI(dI ? Buffer.from(BB) : new Uint8Array(BB), IB)
      }
    }, {
      pack(BB, IB) {
        let ZB = BB.constructor;
        ZB !== QI && this.moreTypes ? RI(BB, ZI.indexOf(ZB.name), IB) : rI(BB, IB)
      }
    }, {
      pack(BB, IB) {
        let {
          target: ZB,
          position: TB
        } = IB(1);
        ZB[TB] = 193
      }
    }];
    let uI = new PI({
      useRecords: !1
    });
    const fI = uI.pack,
      lI = uI.pack,
      AI = PI,
      {
        NEVER: tI,
        ALWAYS: bI,
        DECIMAL_ROUND: xI,
        DECIMAL_FIT: EI
      } = FI,
      DI = 512,
      KI = 1024,
      VI = 2048;
    const SI = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!BB || "object" !== typeof BB) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const ZB = new iB(IB);
        let TB;
        const JB = BB => {
          let IB;
          TB && (BB = Buffer.concat([TB, BB]), TB = void 0);
          try {
            IB = ZB.unpackMultiple(BB)
          } catch (JB) {
            if (!JB.incomplete) throw JB;
            TB = BB.slice(JB.lastPosition), IB = JB.values
          }
          return IB
        };
        return "function" === typeof BB[Symbol.iterator] ? function*() {
          for (const IB of BB) yield* JB(IB)
        }() : "function" === typeof BB[Symbol.asyncIterator] ? async function*() {
          for await (const IB of BB) yield* JB(IB)
        }(): void 0
      },
      BZ = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (BB && "object" === typeof BB) {
          if ("function" === typeof BB[Symbol.iterator]) return function*(BB, IB) {
            const ZB = new PI(IB);
            for (const TB of BB) yield ZB.pack(TB)
          }(BB, IB);
          if ("function" === typeof BB.then || "function" === typeof BB[Symbol.asyncIterator]) return async function*(BB, IB) {
            const ZB = new PI(IB);
            for await (const TB of BB) yield ZB.pack(TB)
          }(BB, IB);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      IZ = !1,
      ZZ = !0
  },
  9201: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      $changes: () => gB,
      $childType: () => qB,
      $decoder: () => nB,
      $deleteByIndex: () => FB,
      $encoder: () => cB,
      $filter: () => hB,
      $getByIndex: () => zB,
      $numFields: () => YB,
      $refId: () => vB,
      $track: () => kB,
      $values: () => CB,
      ArraySchema: () => ZT,
      Callbacks: () => ZJ,
      ChangeTree: () => aZ,
      CollectionSchema: () => oT,
      Decoder: () => xT,
      Encoder: () => lT,
      FieldBuilder: () => kT,
      MapSchema: () => JT,
      Metadata: () => xI,
      OPERATION: () => JB,
      Reflection: () => VT,
      ReflectionField: () => DT,
      ReflectionType: () => KT,
      Root: () => HT,
      Schema: () => pT,
      SetSchema: () => GT,
      StateCallbackStrategy: () => IJ,
      StateView: () => rT,
      StreamSchema: () => vT,
      TypeContext: () => eI,
      createPool: () => JJ,
      decode: () => WI,
      decodeKeyValueOperation: () => DZ,
      decodeSchemaOperation: () => EZ,
      defineCustomTypes: () => sI,
      defineTypes: () => OT,
      deprecated: () => sT,
      dumpChanges: () => iT,
      encode: () => II,
      encodeArray: () => XZ,
      encodeIndexedEntry: () => rZ,
      encodeKeyValueOperation: () => mZ,
      encodeMapEntry: () => RZ,
      encodeSchemaOperation: () => PZ,
      zN: () => gT,
      fullStateOnly: () => WT,
      getDecoderStateCallbacks: () => ST,
      getEncodeDescriptor: () => BZ,
      getRawChangesCallback: () => BJ,
      isBuilder: () => cT,
      patchOnly: () => UT,
      registerType: () => QI,
      schema: () => YT,
      t: () => FT,
      type: () => dT,
      unreliable: () => yT,
      view: () => qT
    });
    const TB = 255;
    var JB;

    function oB(BB) {
      Object.defineProperty(BB, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(BB) {
      BB[BB.ADD = 128] = "ADD", BB[BB.REPLACE = 0] = "REPLACE", BB[BB.DELETE = 64] = "DELETE", BB[BB.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", BB[BB.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", BB[BB.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", BB[BB.CLEAR = 10] = "CLEAR", BB[BB.REVERSE = 15] = "REVERSE", BB[BB.MOVE = 32] = "MOVE", BB[BB.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", BB[BB.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(JB || (JB = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const GB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const BB = "colyseus.symbolRegistry",
        IB = GB[BB] || (GB[BB] = Object.create(null));
      Symbol.for = function(BB) {
        return IB[BB] || (IB[BB] = Symbol(BB))
      }, Symbol.keyFor = function(BB) {
        for (const ZB in IB)
          if (IB[ZB] === BB) return ZB
      }
    }
    const vB = Symbol.for("$refId"),
      kB = "~track",
      cB = "~encoder",
      nB = "~decoder",
      hB = "~filter",
      zB = "~getByIndex",
      FB = "~deleteByIndex",
      NB = "~resyncPrune",
      gB = Symbol.for("$changes"),
      qB = Symbol.for("$childType"),
      yB = Symbol.for("$proxyTarget"),
      UB = "~onEncodeEnd",
      WB = "~reset",
      dB = "~onDecodeEnd",
      CB = Symbol.for("$values"),
      QB = "~builder",
      sB = "~descriptors",
      wB = "~__encodeDescriptor",
      OB = "~encoders",
      YB = "~__numFields",
      iB = "~__refTypeFieldIndexes",
      pB = "~__viewFieldIndexes",
      aB = "$__fieldIndexesByViewTag",
      HB = "~__unreliableFieldIndexes",
      MB = "~__patchOnlyFieldIndexes",
      jB = "~__fullSyncSkipIndexes",
      PB = "~__fullStateOnlyFieldIndexes",
      RB = "~__streamFieldIndexes",
      rB = "~__streamPriorities";
    let mB;
    try {
      mB = new TextEncoder
    } catch (oJ) {}
    const XB = new ArrayBuffer(8),
      LB = new Int32Array(XB),
      eB = new Float32Array(XB),
      uB = new Float64Array(XB),
      fB = new BigInt64Array(XB),
      lB = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(BB, IB) {
        for (var ZB = 0, TB = 0, JB = 0, oB = BB.length; JB < oB; JB++)(ZB = BB.charCodeAt(JB)) < 128 ? TB += 1 : ZB < 2048 ? TB += 2 : ZB < 55296 || ZB >= 57344 ? TB += 3 : (JB++, TB += 4);
        return TB
      };

    function AB(BB, IB, ZB) {
      for (var TB = 0, JB = 0, oB = IB.length; JB < oB; JB++)(TB = IB.charCodeAt(JB)) < 128 ? BB[ZB.offset++] = TB : TB < 2048 ? (BB[ZB.offset] = 192 | TB >> 6, BB[ZB.offset + 1] = 128 | 63 & TB, ZB.offset += 2) : TB < 55296 || TB >= 57344 ? (BB[ZB.offset] = 224 | TB >> 12, BB[ZB.offset + 1] = 128 | TB >> 6 & 63, BB[ZB.offset + 2] = 128 | 63 & TB, ZB.offset += 3) : (JB++, TB = 65536 + ((1023 & TB) << 10 | 1023 & IB.charCodeAt(JB)), BB[ZB.offset] = 240 | TB >> 18, BB[ZB.offset + 1] = 128 | TB >> 12 & 63, BB[ZB.offset + 2] = 128 | TB >> 6 & 63, BB[ZB.offset + 3] = 128 | 63 & TB, ZB.offset += 4)
    }

    function tB(BB, IB, ZB) {
      BB[ZB.offset++] = 255 & IB
    }

    function bB(BB, IB, ZB) {
      BB[ZB.offset++] = 255 & IB, BB[ZB.offset++] = IB >> 8 & 255
    }

    function xB(BB, IB, ZB) {
      BB[ZB.offset++] = 255 & IB, BB[ZB.offset++] = IB >> 8 & 255
    }

    function EB(BB, IB, ZB) {
      BB[ZB.offset++] = 255 & IB, BB[ZB.offset++] = IB >> 8 & 255, BB[ZB.offset++] = IB >> 16 & 255, BB[ZB.offset++] = IB >> 24 & 255
    }

    function DB(BB, IB, ZB) {
      const TB = IB >> 24,
        JB = IB >> 16,
        oB = IB >> 8,
        GB = IB;
      BB[ZB.offset++] = 255 & GB, BB[ZB.offset++] = 255 & oB, BB[ZB.offset++] = 255 & JB, BB[ZB.offset++] = 255 & TB
    }

    function KB(BB, IB, ZB) {
      const TB = Math.floor(IB / Math.pow(2, 32));
      DB(BB, IB >>> 0, ZB), DB(BB, TB, ZB)
    }

    function VB(BB, IB, ZB) {
      const TB = IB / Math.pow(2, 32) | 0;
      DB(BB, IB >>> 0, ZB), DB(BB, TB, ZB)
    }

    function SB(BB, IB, ZB) {
      eB[0] = IB, EB(BB, LB[0], ZB)
    }

    function BI(BB, IB, ZB) {
      uB[0] = IB, EB(BB, LB[0], ZB), EB(BB, LB[1], ZB)
    }
    const II = {
        int8: tB,
        uint8: function(BB, IB, ZB) {
          BB[ZB.offset++] = 255 & IB
        },
        int16: bB,
        uint16: xB,
        int32: EB,
        uint32: DB,
        int64: KB,
        uint64: VB,
        bigint64: function(BB, IB, ZB) {
          fB[0] = BigInt.asIntN(64, IB), EB(BB, LB[0], ZB), EB(BB, LB[1], ZB)
        },
        biguint64: function(BB, IB, ZB) {
          fB[0] = BigInt.asIntN(64, IB), EB(BB, LB[0], ZB), EB(BB, LB[1], ZB)
        },
        float32: SB,
        float64: BI,
        boolean: function(BB, IB, ZB) {
          BB[ZB.offset++] = IB ? 1 : 0
        },
        string: function(BB, IB, ZB) {
          IB || (IB = "");
          let TB = lB(IB, "utf8"),
            JB = 0;
          if (TB < 32) BB[ZB.offset++] = 160 | TB, JB = 1;
          else if (TB < 256) BB[ZB.offset++] = 217, BB[ZB.offset++] = TB, JB = 2;
          else if (TB < 65536) BB[ZB.offset++] = 218, xB(BB, TB, ZB), JB = 3;
          else {
            if (!(TB < 4294967296)) throw new Error("String too long");
            BB[ZB.offset++] = 219, DB(BB, TB, ZB), JB = 5
          }
          return AB(BB, IB, ZB), JB + TB
        },
        number: function BB(IB, ZB, TB) {
          return isNaN(ZB) ? BB(IB, 0, TB) : isFinite(ZB) ? ZB !== (0 | ZB) ? Math.abs(ZB) <= 34028235e31 && (eB[0] = ZB, Math.abs(Math.abs(eB[0]) - Math.abs(ZB)) < 1e-4) ? (IB[TB.offset++] = 202, SB(IB, ZB, TB), 5) : (IB[TB.offset++] = 203, BI(IB, ZB, TB), 9) : ZB >= 0 ? ZB < 128 ? (IB[TB.offset++] = 255 & ZB, 1) : ZB < 256 ? (IB[TB.offset++] = 204, IB[TB.offset++] = 255 & ZB, 2) : ZB < 65536 ? (IB[TB.offset++] = 205, xB(IB, ZB, TB), 3) : ZB < 4294967296 ? (IB[TB.offset++] = 206, DB(IB, ZB, TB), 5) : (IB[TB.offset++] = 207, VB(IB, ZB, TB), 9) : ZB >= -32 ? (IB[TB.offset++] = 224 | ZB + 32, 1) : ZB >= -128 ? (IB[TB.offset++] = 208, tB(IB, ZB, TB), 2) : ZB >= -32768 ? (IB[TB.offset++] = 209, bB(IB, ZB, TB), 3) : ZB >= -2147483648 ? (IB[TB.offset++] = 210, EB(IB, ZB, TB), 5) : (IB[TB.offset++] = 211, KB(IB, ZB, TB), 9) : BB(IB, ZB > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, TB)
        },
        utf8Write: AB,
        utf8Length: lB
      },
      ZI = new ArrayBuffer(8),
      TI = new Int32Array(ZI),
      JI = new Float32Array(ZI),
      oI = new Float64Array(ZI),
      GI = new BigUint64Array(ZI),
      vI = new BigInt64Array(ZI);

    function kI(BB, IB, ZB) {
      ZB > BB.length - IB.offset && (ZB = BB.length - IB.offset);
      for (var TB = "", JB = 0, oB = IB.offset, GB = IB.offset + ZB; oB < GB; oB++) {
        var vB = BB[oB];
        if (0 !== (128 & vB))
          if (192 !== (224 & vB))
            if (224 !== (240 & vB)) {
              if (240 !== (248 & vB)) {
                console.error("decode.utf8Read(): Invalid byte " + vB + " at offset " + oB + ". Skip to end of string: " + (IB.offset + ZB));
                break
              }(JB = (7 & vB) << 18 | (63 & BB[++oB]) << 12 | (63 & BB[++oB]) << 6 | 63 & BB[++oB]) >= 65536 ? (JB -= 65536, TB += String.fromCharCode(55296 + (JB >>> 10), 56320 + (1023 & JB))) : TB += String.fromCharCode(JB)
            } else TB += String.fromCharCode((15 & vB) << 12 | (63 & BB[++oB]) << 6 | 63 & BB[++oB]);
        else TB += String.fromCharCode((31 & vB) << 6 | 63 & BB[++oB]);
        else TB += String.fromCharCode(vB)
      }
      return IB.offset += ZB, TB
    }

    function cI(BB, IB) {
      return nI(BB, IB) << 24 >> 24
    }

    function nI(BB, IB) {
      return BB[IB.offset++]
    }

    function hI(BB, IB) {
      return zI(BB, IB) << 16 >> 16
    }

    function zI(BB, IB) {
      return BB[IB.offset++] | BB[IB.offset++] << 8
    }

    function FI(BB, IB) {
      return BB[IB.offset++] | BB[IB.offset++] << 8 | BB[IB.offset++] << 16 | BB[IB.offset++] << 24
    }

    function NI(BB, IB) {
      return FI(BB, IB) >>> 0
    }

    function gI(BB, IB) {
      return TI[0] = FI(BB, IB), JI[0]
    }

    function qI(BB, IB) {
      return TI[0] = FI(BB, IB), TI[1] = FI(BB, IB), oI[0]
    }

    function yI(BB, IB) {
      const ZB = NI(BB, IB);
      return FI(BB, IB) * Math.pow(2, 32) + ZB
    }

    function UI(BB, IB) {
      const ZB = NI(BB, IB);
      return NI(BB, IB) * Math.pow(2, 32) + ZB
    }
    const WI = {
        utf8Read: kI,
        int8: cI,
        uint8: nI,
        int16: hI,
        uint16: zI,
        int32: FI,
        uint32: NI,
        float32: gI,
        float64: qI,
        int64: yI,
        uint64: UI,
        bigint64: function(BB, IB) {
          return TI[0] = FI(BB, IB), TI[1] = FI(BB, IB), vI[0]
        },
        biguint64: function(BB, IB) {
          return TI[0] = FI(BB, IB), TI[1] = FI(BB, IB), GI[0]
        },
        boolean: function(BB, IB) {
          return nI(BB, IB) > 0
        },
        string: function(BB, IB) {
          const ZB = BB[IB.offset++];
          let TB;
          return ZB < 192 ? TB = 31 & ZB : 217 === ZB ? TB = nI(BB, IB) : 218 === ZB ? TB = zI(BB, IB) : 219 === ZB && (TB = NI(BB, IB)), kI(BB, IB, TB)
        },
        number: function(BB, IB) {
          const ZB = BB[IB.offset++];
          return ZB < 128 ? ZB : 202 === ZB ? gI(BB, IB) : 203 === ZB ? qI(BB, IB) : 204 === ZB ? nI(BB, IB) : 205 === ZB ? zI(BB, IB) : 206 === ZB ? NI(BB, IB) : 207 === ZB ? UI(BB, IB) : 208 === ZB ? cI(BB, IB) : 209 === ZB ? hI(BB, IB) : 210 === ZB ? FI(BB, IB) : 211 === ZB ? yI(BB, IB) : ZB > 223 ? -1 * (255 - ZB + 1) : void 0
        },
        stringCheck: function(BB, IB) {
          const ZB = BB[IB.offset];
          return ZB < 192 && ZB > 160 || 217 === ZB || 218 === ZB || 219 === ZB
        }
      },
      dI = {},
      CI = new Map;

    function QI(BB, IB) {
      IB.constructor && (Object.prototype.hasOwnProperty.call(IB, "constructor") && null == IB.constructor[Symbol.metadata] && oB(IB.constructor), CI.set(IB.constructor, BB), dI[BB] = IB), IB.encode && (II[BB] = IB.encode), IB.decode && (WI[BB] = IB.decode)
    }

    function sI(BB) {
      for (const IB in BB) QI(IB, BB[IB]);
      return BB => dT(BB)
    }
    const wI = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function OI() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function YI(BB) {
      return BB._stream ??= OI()
    }

    function iI(BB, IB, ZB) {
      0 === IB.activeViews.size && YI(BB).broadcastPending.add(ZB)
    }

    function pI(BB, IB, ZB, TB) {
      const oB = BB._stream;
      if (void 0 === oB) return !0;
      let GB = !1;
      return oB.broadcastPending.delete(TB) ? GB = !0 : oB.sentBroadcast.delete(TB) && oB.broadcastDeletes.add(TB), IB.forEachActiveView((BB => {
        const IB = oB.pendingByView.get(BB.id);
        if (IB?.has(TB)) return IB.delete(TB), void(GB = !0);
        const vB = oB.sentByView.get(BB.id);
        if (vB?.has(TB)) {
          vB.delete(TB);
          let IB = BB.changes.get(ZB);
          void 0 === IB && (IB = new Map, BB.changes.set(ZB, IB)), IB.set(TB, JB.DELETE)
        }
      })), GB
    }

    function aI(BB, IB) {
      const ZB = BB._stream?.pendingByView;
      if (void 0 === ZB) return !1;
      for (const [TB, JB] of ZB)
        if (JB.size > 0 && void 0 !== IB.activeViews.get(TB)?.deref()) return !0;
      return !1
    }

    function HI(BB) {
      const IB = BB._stream;
      return void 0 !== IB && (IB.broadcastPending.size > 0 || IB.broadcastDeletes.size > 0)
    }

    function MI(BB, IB, ZB) {
      const TB = YI(BB);
      let JB = TB.pendingByView.get(IB);
      void 0 === JB && (JB = new Set, TB.pendingByView.set(IB, JB)), JB.add(ZB)
    }

    function jI(BB, IB) {
      const ZB = BB._stream;
      void 0 !== ZB && (ZB.pendingByView.delete(IB), ZB.sentByView.delete(IB), ZB.priorityByView?.delete(IB))
    }
    const PI = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function RI(BB) {
      if (null == BB || "object" !== typeof BB) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: IB,
        max: ZB
      } = BB;
      if ("number" !== typeof IB || "number" !== typeof ZB || !(ZB > IB) || !Number.isFinite(IB) || !Number.isFinite(ZB)) throw new Error(`t.quantized(): require finite min < max (got min=${IB}, max=${ZB}).`);
      const TB = BB.bits ?? 16;
      if (8 !== TB && 16 !== TB && 32 !== TB) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${TB}).`);
      const JB = BB.mode ?? "clamp";
      if ("clamp" !== JB && "wrap" !== JB) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(JB)}).`);
      const oB = "wrap" === JB,
        GB = Math.pow(2, TB);
      return {
        min: IB,
        max: ZB,
        bits: TB,
        wrap: oB,
        wire: PI[TB],
        range: ZB - IB,
        span: oB ? GB : IB === -ZB ? GB - 2 : GB - 1
      }
    }

    function rI(BB) {
      return null !== BB && "object" === typeof BB && void 0 !== BB.quantized
    }

    function mI(BB, IB) {
      if (BB.wrap) {
        if (!Number.isFinite(IB)) return 0;
        const ZB = BB.range;
        let TB = (IB - BB.min) % ZB;
        TB < 0 && (TB += ZB);
        const JB = BB.span;
        return Math.floor(TB / ZB * JB + .5) % JB
      }
      if (IB !== IB) return 0;
      const ZB = IB < BB.min ? BB.min : IB > BB.max ? BB.max : IB;
      return Math.floor((ZB - BB.min) / BB.range * BB.span + .5)
    }

    function XI(BB, IB) {
      return BB.min + IB / BB.span * BB.range
    }

    function LI(BB) {
      const IB = II[BB.wire];
      return (ZB, TB, JB) => IB(ZB, mI(BB, TB), JB)
    }
    class eI {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(BB) {
        const IB = Object.getPrototypeOf(BB);
        if (IB !== pT) {
          let ZB = eI.inheritedTypes.get(IB);
          ZB || (ZB = new Set, eI.inheritedTypes.set(IB, ZB)), ZB.add(BB)
        }
      }
      static cache(BB) {
        let IB = eI.cachedContexts.get(BB);
        return IB || (IB = new eI(BB), eI.cachedContexts.set(BB, IB)), IB
      }
      constructor(BB) {
        BB && this.discoverTypes(BB)
      }
      has(BB) {
        return this.schemas.has(BB)
      }
      get(BB) {
        return this.types[BB]
      }
      add(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(BB) && (this.types[IB] = BB, null == BB[Symbol.metadata] && xI.initialize(BB), this.schemas.set(BB, IB), !0)
      }
      getTypeId(BB) {
        return this.schemas.get(BB)
      }
      discoverTypes(BB) {
        if (!this.add(BB)) return;
        eI.inheritedTypes.get(BB)?.forEach((BB => {
          this.discoverTypes(BB)
        }));
        let IB = BB;
        for (;
          (IB = Object.getPrototypeOf(IB)) && IB !== pT && IB !== Function.prototype;) this.discoverTypes(IB);
        const ZB = BB[Symbol.metadata];
        (ZB[pB] || ZB[RB]) && (this.hasFilters = !0);
        for (const TB in ZB) {
          const BB = ZB[TB].type;
          if ("string" !== typeof BB && !rI(BB))
            if ("function" === typeof BB) this.discoverTypes(BB);
            else {
              const IB = Object.values(BB)[0];
              if ("string" === typeof IB) continue;
              this.discoverTypes(IB)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function uI(BB) {
      const IB = lI(BB);
      return IB ? {
        complexTypeKlass: dI[IB],
        childType: BB[IB]
      } : {
        complexTypeKlass: !1,
        childType: BB
      }
    }

    function fI(BB, IB) {
      const ZB = AI(BB),
        TB = lI(ZB),
        JB = TB && lI(ZB[TB]);
      if (JB) throw new Error(`${IB?`${IB}: `:""}@colyseus/schema: nested collections are not supported ("${TB}" of "${JB}"). Collections can only hold primitive types or Schema classes, wrap the inner ${JB} in a Schema class.`);
      return ZB
    }

    function lI(BB) {
      return "object" === typeof BB && null !== BB ? Object.keys(BB).find((BB => void 0 !== dI[BB])) : void 0
    }

    function AI(BB) {
      if ("object" !== typeof BB || null === BB) return BB;
      if (Array.isArray(BB)) return {
        array: AI(BB[0])
      };
      const IB = function(BB) {
        const IB = Object.keys(BB),
          ZB = IB.filter((BB => /\d+/.test(BB)));
        if (ZB.length > 0 && ZB.length === IB.length / 2 && BB[BB[ZB[0]]] == ZB[0]) return "number";
        if (IB.length > 0 && IB.every((IB => BB[IB] === IB))) return "string"
      }(BB);
      if (IB) return IB;
      if (rI(BB)) return "string" === typeof BB.quantized.wire ? BB : {
        quantized: RI(BB.quantized)
      };
      if (void 0 !== BB.type) return AI(BB.type);
      const ZB = lI(BB);
      return ZB && (BB[ZB] = AI(BB[ZB])), BB
    }
    const tI = [iB, HB, MB, jB, PB, RB, OB];

    function bI(BB, IB, ZB) {
      BB[IB] || Object.defineProperty(BB, IB, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), BB[IB].push(ZB)
    }
    const xI = {
        addField(BB, IB, ZB, TB, JB) {
          if (IB >= 63) throw new Error(`Can't define field '${ZB}'.\nSchema instances may only have up to 63 fields.`);
          BB[IB] = Object.assign(BB[IB] || {}, {
            type: TB,
            index: IB,
            name: ZB
          }), Object.defineProperty(BB, sB, {
            value: BB[sB] || {},
            enumerable: !1,
            configurable: !0
          }), BB[sB][ZB] = JB || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(BB, YB, {
            value: IB,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(BB, ZB, {
            value: IB,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof BB[IB].type || rI(BB[IB].type) || (void 0 === BB[iB] && Object.defineProperty(BB, iB, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), BB[iB].push(IB));
          const oB = BB[IB].type;
          if (oB && "object" === typeof oB && void 0 !== oB.stream) {
            if (void 0 !== oB.array) throw new Error(wI);
            BB[IB].stream = !0, BB[RB] || Object.defineProperty(BB, RB, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), BB[RB].includes(IB) || BB[RB].push(IB);
            const JB = TB?.priority;
            "function" === typeof JB && xI.setStreamPriority(BB, ZB, JB)
          }
        },
        setTag(BB, IB, ZB) {
          const TB = BB[IB];
          if (BB[TB].tag = ZB, BB[pB] || (Object.defineProperty(BB, pB, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(BB, aB, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), BB[pB].push(TB), ZB < 0) BB[aB][ZB] || (BB[aB][ZB] = []), BB[aB][ZB].push(TB);
          else
            for (let JB = ZB; JB > 0; JB &= JB - 1) {
              const IB = JB & -JB;
              BB[aB][IB] || (BB[aB][IB] = []), BB[aB][IB].push(TB)
            }
        },
        setUnreliable(BB, IB) {
          const ZB = BB[IB];
          if ("string" !== typeof BB[ZB].type) throw new Error(`@unreliable cannot be applied to ref-type field "${IB}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          BB[ZB].unreliable = !0, BB[HB] || Object.defineProperty(BB, HB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[HB].push(ZB)
        },
        setPatchOnly(BB, IB) {
          const ZB = BB[IB];
          if (BB[ZB].fullStateOnly) throw new Error(`field "${IB}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          BB[ZB].patchOnly = !0, bI(BB, MB, ZB), bI(BB, jB, ZB)
        },
        setDeprecated(BB, IB) {
          const ZB = BB[IB];
          BB[ZB].deprecated = !0, bI(BB, jB, ZB), Object.defineProperty(BB, ZB, {
            value: BB[ZB],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(BB, IB) {
          const ZB = BB[IB];
          if (BB[ZB].patchOnly) throw new Error(`field "${IB}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          BB[ZB].fullStateOnly = !0, bI(BB, PB, ZB)
        },
        setStream(BB, IB) {
          const ZB = BB[IB];
          BB[ZB].stream = !0, BB[RB] || Object.defineProperty(BB, RB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[RB].push(ZB)
        },
        setStreamPriority(BB, IB, ZB) {
          const TB = BB[IB];
          BB[rB] || Object.defineProperty(BB, rB, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[rB][TB] = ZB
        },
        getStreamPriority: (BB, IB) => BB?.[rB]?.[IB],
        defineField(BB, IB, ZB, TB, JB) {
          const oB = fI(JB, `${BB.name}.${TB}`),
            {
              complexTypeKlass: GB,
              childType: vB
            } = uI(oB);
          xI.addField(IB, ZB, TB, oB, QT(TB, ZB, vB, GB)), IB[sB][TB] && Object.defineProperty(BB.prototype, TB, IB[sB][TB]), ("string" === typeof oB || rI(oB)) && (IB[OB] || Object.defineProperty(IB, OB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), IB[OB][ZB] = "string" === typeof oB ? II[oB] : LI(oB.quantized))
        },
        setFields(BB, IB) {
          const ZB = BB.prototype.constructor;
          eI.register(ZB);
          const TB = Object.getPrototypeOf(ZB),
            JB = TB && TB[Symbol.metadata],
            oB = xI.initialize(ZB);
          ZB[kB] || (ZB[kB] = pT[kB]), ZB[cB] || (ZB[cB] = pT[cB]), ZB[nB] || (ZB[nB] = pT[nB]), ZB.prototype.toJSON || (ZB.prototype.toJSON = pT.prototype.toJSON);
          let GB = oB[YB] ?? (JB && JB[YB]) ?? -1;
          GB++, oB[OB] || Object.defineProperty(oB, OB, {
            value: JB?.[OB] ? [...JB[OB]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const vB in IB) {
            if (void 0 !== oB[vB]) throw new Error(`@colyseus/schema: Duplicate '${vB}' definition on '${ZB.name||"(anonymous)"}'.`);
            xI.defineField(ZB, oB, GB, vB, IB[vB]), GB++
          }
          return BB
        },
        isDeprecated: (BB, IB) => !0 === BB[IB].deprecated,
        initialize(BB) {
          const IB = Object.getPrototypeOf(BB),
            ZB = IB[Symbol.metadata];
          let TB = BB[Symbol.metadata] ?? Object.create(null);
          if (IB !== pT && TB === ZB && (TB = Object.create(null), ZB)) {
            Object.setPrototypeOf(TB, ZB), Object.defineProperty(TB, YB, {
              value: ZB[YB],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== ZB[pB] && (Object.defineProperty(TB, pB, {
              value: [...ZB[pB]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(TB, aB, {
              value: {
                ...ZB[aB]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const BB of tI) {
              const IB = ZB[BB];
              void 0 !== IB && Object.defineProperty(TB, BB, {
                value: [...IB],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(TB, sB, {
              value: {
                ...ZB[sB]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(BB, Symbol.metadata, {
            value: TB,
            writable: !1,
            configurable: !0
          }), TB
        },
        isValidInstance: BB => BB.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(BB.constructor[Symbol.metadata], YB),
        getFields(BB) {
          const IB = BB[Symbol.metadata],
            ZB = {};
          for (let TB = 0; TB <= IB[YB]; TB++) ZB[IB[TB].name] = IB[TB].type;
          return ZB
        },
        hasViewTagAtIndex: (BB, IB) => BB?.[pB]?.includes(IB),
        hasUnreliableAtIndex: (BB, IB) => BB?.[HB]?.includes(IB),
        hasPatchOnlyAtIndex: (BB, IB) => BB?.[MB]?.includes(IB),
        hasFullStateOnlyAtIndex: (BB, IB) => BB?.[PB]?.includes(IB),
        hasStreamAtIndex: (BB, IB) => BB?.[RB]?.includes(IB)
      },
      EI = (BB, IB, ZB) => BB(IB, ZB);
    class DI {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(BB) {
        this.ops = new Uint8Array(Math.max(BB + 1, 1))
      }
      record(BB, IB) {
        const ZB = this.ops[BB];
        0 === ZB ? this.ops[BB] = IB : (ZB === JB.DELETE || ZB === JB.ADD && IB === JB.DELETE_AND_ADD) && (this.ops[BB] = JB.DELETE_AND_ADD), BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      recordDelete(BB, IB) {
        this.ops[BB] = IB, BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      recordRaw(BB, IB) {
        this.record(BB, IB)
      }
      operationAt(BB) {
        const IB = this.ops[BB];
        return 0 === IB ? void 0 : IB
      }
      setOperationAt(BB, IB) {
        this.ops[BB] = IB
      }
      forEach(BB) {
        this.forEachWithCtx(BB, EI)
      }
      forEachWithCtx(BB, IB) {
        let ZB = this.dirtyLow,
          TB = this.dirtyHigh;
        const JB = this.ops;
        for (; 0 !== ZB;) {
          const TB = ZB & -ZB,
            oB = 31 - Math.clz32(TB);
          ZB ^= TB, IB(BB, oB, JB[oB])
        }
        for (; 0 !== TB;) {
          const ZB = TB & -TB,
            oB = 31 - Math.clz32(ZB) + 32;
          TB ^= ZB, IB(BB, oB, JB[oB])
        }
      }
      size() {
        return VI(this.dirtyLow) + VI(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class KI {
      uN = new Map;
      pureOps = [];
      record(BB, IB) {
        const ZB = this.uN.get(BB);
        void 0 === ZB ? this.uN.set(BB, IB) : (ZB === JB.DELETE || ZB === JB.ADD && IB === JB.DELETE_AND_ADD) && this.uN.set(BB, JB.DELETE_AND_ADD)
      }
      recordDelete(BB, IB) {
        this.uN.set(BB, IB)
      }
      recordRaw(BB, IB) {
        this.uN.set(BB, IB)
      }
      recordPure(BB) {
        this.pureOps.push([this.uN.size, BB])
      }
      operationAt(BB) {
        return this.uN.get(BB)
      }
      setOperationAt(BB, IB) {
        this.uN.has(BB) && this.uN.set(BB, IB)
      }
      forEach(BB) {
        this.forEachWithCtx(BB, EI)
      }
      forEachWithCtx(BB, IB) {
        const ZB = this.pureOps;
        if (ZB.length > 0) {
          let TB = 0,
            JB = 0;
          for (const [oB, GB] of this.uN) {
            for (; TB < ZB.length && ZB[TB][0] <= JB;) {
              const JB = ZB[TB++][1];
              IB(BB, -JB, JB)
            }
            IB(BB, oB, GB), JB++
          }
          for (; TB < ZB.length;) {
            const JB = ZB[TB++][1];
            IB(BB, -JB, JB)
          }
        } else
          for (const [TB, JB] of this.uN) IB(BB, TB, JB)
      }
      size() {
        return this.uN.size + this.pureOps.length
      }
      has() {
        return this.uN.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.uN.clear(), this.pureOps.length = 0
      }
      shift(BB) {
        const IB = new Map;
        for (const [ZB, TB] of this.uN) IB.set(ZB + BB, TB);
        this.uN = IB
      }
    }

    function VI(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }

    function SI(BB) {
      if (void 0 === BB) return 0;
      let IB = 0;
      for (let ZB = 0, TB = BB.length; ZB < TB; ZB++) {
        const TB = BB[ZB];
        TB < 32 && (IB |= 1 << TB)
      }
      return IB
    }

    function BZ(BB) {
      const IB = BB.constructor;
      if (Object.prototype.hasOwnProperty.call(IB, wB)) return IB[wB];
      const ZB = IB[Symbol.metadata],
        TB = xI.isValidInstance(BB),
        JB = (ZB?.[pB]?.length ?? 0) > 0,
        oB = function(BB) {
          const IB = [],
            ZB = [],
            TB = [],
            JB = [],
            oB = BB?.[YB];
          if (void 0 === oB) return {
            names: IB,
            types: ZB,
            tags: TB,
            encoders: JB
          };
          const GB = BB[OB];
          for (let vB = 0; vB <= oB; vB++) {
            const oB = BB[vB];
            void 0 !== oB ? (IB[vB] = oB.name, ZB[vB] = oB.type, TB[vB] = oB.tag, JB[vB] = GB?.[vB]) : (IB[vB] = void 0, ZB[vB] = void 0, TB[vB] = void 0, JB[vB] = void 0)
          }
          return {
            names: IB,
            types: ZB,
            tags: TB,
            encoders: JB
          }
        }(ZB),
        GB = TB && !JB ? void 0 : IB[hB],
        vB = {
          encoder: IB[cB],
          filter: GB,
          metadata: ZB,
          isSchema: TB,
          filterBitmask: TB ? SI(ZB?.[pB]) : 0,
          hasAnyFullStateOnly: (ZB?.[PB]?.length ?? 0) > 0,
          hasAnyUnreliable: (ZB?.[HB]?.length ?? 0) > 0,
          hasAnyStream: (ZB?.[RB]?.length ?? 0) > 0,
          hasAnyView: JB,
          fullStateOnlyBitmask: SI(ZB?.[PB]),
          unreliableBitmask: SI(ZB?.[HB]),
          streamBitmask: SI(ZB?.[RB]),
          names: oB.names,
          types: oB.types,
          tags: oB.tags,
          encoders: oB.encoders
        };
      return Object.defineProperty(IB, wB, {
        value: vB,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), vB
    }

    function IZ(BB, IB) {
      if (void 0 !== BB.parentRef && IB(BB.parentRef, BB._parentIndex)) return !0;
      for (let ZB = BB.extraParents; void 0 !== ZB; ZB = ZB.next)
        if (IB(ZB.ref, ZB.index)) return !0;
      return !1
    }
    const ZZ = (BB, IB) => {
        BB.isFieldUnreliable(IB) ? BB.ensureUnreliableRecorder().record(IB, JB.ADD) : BB.record(IB, JB.ADD)
      },
      TZ = (BB, IB) => BB(IB);

    function JZ(BB, IB, ZB) {
      const TB = BB.refTarget;
      if (void 0 !== TB[qB]) {
        if (BB.isPatchOnly) return;
        if (Array.isArray(TB.items)) {
          const BB = TB.items;
          for (let TB = 0, JB = BB.length; TB < JB; TB++) void 0 !== BB[TB] && ZB(IB, TB)
        } else if (void 0 !== TB.journal)
          for (const [BB, JB] of TB.journal.keyByIndex) TB.$items.has(JB) && ZB(IB, BB);
        else if (void 0 !== TB.$items)
          for (const BB of TB.$items.keys()) ZB(IB, BB)
      } else {
        const JB = BB.metadata;
        if (!JB) return;
        const oB = JB[YB] ?? -1,
          GB = JB[jB],
          vB = BB.encDescriptor.names;
        for (let BB = 0; BB <= oB; BB++) {
          const JB = vB[BB];
          if (void 0 === JB) continue;
          if (GB && GB.includes(BB)) continue;
          const oB = TB[JB];
          void 0 !== oB && null !== oB && ZB(IB, BB)
        }
      }
    }

    function oZ(BB, IB, ZB, TB) {
      ! function(BB, IB, ZB) {
        if (!IB) return;
        const TB = IB[gB],
          JB = !TB._isSchema;
        let oB;
        JB ? (IB = TB.parent, ZB = TB.parentIndex, oB = IB?.[gB].metadata) : oB = TB.metadata;
        const GB = (oB?.[MB]?.includes(ZB) ? wZ : 0) | (oB?.[PB]?.includes(ZB) ? OZ : 0),
          vB = TB.flags & pZ | GB,
          kB = BB.flags;
        BB.flags = kB | vB;
        vB & ~kB & OZ && (BB.reset(), BB.unreliableRecorder?.reset());
        const cB = BB.root?.types;
        if (!cB?.hasFilters) return;
        const nB = oB?.[pB]?.includes(ZB) ?? !1,
          hB = oB?.[RB]?.includes(ZB) ?? !1,
          zB = TB.isFiltered || nB || hB;
        if (BB.isFiltered = zB, hB && !JB) {
          BB.isStreamCollection = !0;
          const IB = YI(BB.ref);
          if (void 0 === IB.priority) {
            const BB = xI.getStreamPriority(oB, ZB);
            void 0 !== BB && (IB.priority = BB)
          }
          BB.root?.registerStream(BB.ref)
        }
        if (zB) {
          const IB = vZ(BB);
          BB.isVisibilitySharedWithParent = TB.isFiltered && IB && !hB && (!nB || JB && oB[ZB].tag !== NT)
        }
      }(BB, IB, ZB), BB.isFullStateOnly || (BB.has() && BB.root?.enqueueChangeTree(BB), BB.unreliableRecorder?.has() && BB.root?.enqueueUnreliable(BB), BB.has() || BB.unreliableRecorder?.has() || BB.root?.enqueueChangeTree(BB))
    }

    function GZ(BB) {
      const IB = BB.pendingFilterRefresh;
      for (let ZB = 0; ZB < IB.length; ZB++) {
        const BB = IB[ZB];
        0 !== (BB.flags & iZ) && kZ(BB)
      }
      IB.length = 0
    }

    function vZ(BB) {
      return BB._isSchema || "string" !== typeof BB.refTarget[qB]
    }

    function kZ(BB) {
      BB.flags &= ~iZ;
      const IB = BB.root;
      if (void 0 === IB || void 0 === BB.parentRef) return;
      const ZB = vZ(BB);
      let TB = FZ(BB, BB.parentRef, BB._parentIndex, ZB);
      for (let oB = BB.extraParents; void 0 !== oB && TB !== zZ; oB = oB.next) TB |= FZ(BB, oB.ref, oB.index, ZB);
      if (0 === TB) return;
      BB.isVisibilitySharedWithParent = 0 !== (TB & hZ);
      const JB = 0 === (TB & nZ);
      JB !== BB.isFiltered && (BB.isFiltered = JB, JB || BB.isFullStateOnly || (BB.forEachLiveWithCtx(BB, ZZ), BB.has() && IB.enqueueChangeTree(BB), BB.unreliableRecorder?.has() && IB.enqueueUnreliable(BB)), BB.forEachChildWithCtx(BB, NZ))
    }
    const cZ = 1,
      nZ = 2,
      hZ = 4,
      zZ = cZ | nZ | hZ;

    function FZ(BB, IB, ZB, TB) {
      const JB = IB[gB];
      if (JB.root !== BB.root || ! function(BB, IB, ZB) {
          const TB = IB.refTarget;
          if (IB.isArray) {
            const IB = TB.items,
              JB = IB[ZB];
            if (void 0 !== JB && JB[gB] === BB) return !0;
            for (let ZB = 0, TB = IB.length; ZB < TB; ZB++) {
              const TB = IB[ZB];
              if (void 0 !== TB && TB[gB] === BB) return !0
            }
            return !1
          }
          const JB = IB.getValue(ZB);
          return void 0 !== JB && JB[gB] === BB
        }(BB, JB, ZB)) return 0;
      JB.flags & iZ && kZ(JB);
      let oB = cZ;
      if (JB._isSchema) {
        void 0 !== JB.encDescriptor.tags[ZB] || JB.isFieldStream(ZB) || (JB.isFiltered ? TB && (oB |= hZ) : oB |= nZ)
      } else if (JB.isFiltered) {
        if (TB && !JB.isStreamCollection) {
          const BB = JB.parent?.[gB];
          (BB?._isSchema ? BB.encDescriptor.tags[JB.parentIndex] : void 0) !== NT && (oB |= hZ)
        }
      } else oB |= nZ;
      return oB
    }
    const NZ = (BB, IB, ZB) => {
      kZ(IB)
    };

    function gZ(BB, IB, ZB, TB) {
      if (BB.addParent(IB, TB), !ZB) return;
      const JB = ZB.add(BB);
      ZB !== BB.root && (BB.root = ZB, oZ(BB, IB, TB));
      const oB = IB?.[gB];
      if (void 0 !== oB && void 0 !== oB.subscribedViews && void 0 !== IB[qB] && function(BB, IB, ZB, TB) {
          const JB = BB.subscribedViews;
          if (void 0 === JB) return;
          const oB = BB.isStreamCollection,
            GB = oB ? BB.ref : void 0,
            vB = oB ? void 0 : ZB[gB];
          for (let kB = 0, cB = JB.length; kB < cB; kB++) {
            let BB = JB[kB];
            for (; 0 !== BB;) {
              const ZB = BB & -BB;
              BB ^= ZB;
              const cB = 32 * kB + (31 - Math.clz32(ZB)),
                nB = TB.activeViews.get(cB),
                hB = nB?.deref();
              void 0 !== hB ? oB ? MI(GB, cB, IB) : void 0 !== vB && hB.markVisible(vB) : JB[kB] &= ~ZB
            }
          }
        }(oB, TB, BB.ref, ZB), JB) {
        let IB = WZ[dZ];
        void 0 === IB && (IB = {
          parentRef: void 0,
          root: void 0
        }, WZ[dZ] = IB), IB.parentRef = BB.ref, IB.root = ZB, dZ++, yZ(BB, IB, CZ), dZ--
      }
    }

    function qZ(BB, IB, ZB) {
      BB(IB, ZB)
    }

    function yZ(BB, IB, ZB) {
      const TB = BB.refTarget;
      if (TB[qB]) {
        if ("string" !== typeof TB[qB]) {
          const BB = TB.items;
          if (void 0 !== BB)
            for (let TB = 0, JB = BB.length; TB < JB; TB++) {
              const JB = BB[TB];
              JB && ZB(IB, JB[gB], TB)
            } else {
              const BB = TB.$items,
                JB = TB._collectionIndexes;
              for (const TB of BB.keys()) {
                const oB = BB.get(TB);
                oB && ZB(IB, oB[gB], JB?.[TB] ?? TB)
              }
            }
        }
      } else {
        const JB = BB.metadata,
          oB = JB?.[iB];
        if (!oB) return;
        const GB = BB.encDescriptor.names;
        for (let BB = 0, vB = oB.length; BB < vB; BB++) {
          const JB = oB[BB],
            vB = TB[GB[JB]];
          vB && ZB(IB, vB[gB], JB)
        }
      }
    }

    function UZ(BB, IB, ZB) {
      IB.root !== BB ? IB.setRoot(BB) : BB.add(IB)
    }
    const WZ = [];
    let dZ = 0;

    function CZ(BB, IB, ZB) {
      if (IB.root === BB.root) return BB.root.add(IB), void BB.root.moveNextToParent(IB);
      IB.setParent(BB.parentRef, BB.root, ZB)
    }

    function QZ(BB, IB, ZB) {
      const TB = (3 & ZB) << 3;
      return ZB < 4 ? BB >>> TB & 255 : IB >>> TB & 255
    }
    const sZ = (BB, IB, ZB) => BB(IB, ZB);
    const wZ = 16,
      OZ = 32,
      YZ = 128,
      iZ = 256,
      pZ = wZ | OZ;
    class aZ {
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
      set isFiltered(BB) {
        this.flags = BB ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(BB) {
        this.flags = BB ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(BB) {
        this.flags = BB ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(BB) {
        this.flags = BB ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & wZ)
      }
      set isPatchOnly(BB) {
        this.flags = BB ? this.flags | wZ : this.flags & ~wZ
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & OZ)
      }
      set isFullStateOnly(BB) {
        this.flags = BB ? this.flags | OZ : this.flags & ~OZ
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(BB) {
        this.flags = BB ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & YZ)
      }
      set needsRestage(BB) {
        this.flags = BB ? this.flags | YZ : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new DI(this.metadata?.[YB] ?? 0) : new KI), this.unreliableRecorder
      }
      isFieldUnreliable(BB) {
        const IB = this.encDescriptor;
        return !!IB.hasAnyUnreliable && (BB < 32 ? 0 !== (IB.unreliableBitmask & 1 << BB) : xI.hasUnreliableAtIndex(this.metadata, BB))
      }
      isFieldFullStateOnly(BB) {
        if (this.isFullStateOnly) return !0;
        const IB = this.encDescriptor;
        return !!IB.hasAnyFullStateOnly && (BB < 32 ? 0 !== (IB.fullStateOnlyBitmask & 1 << BB) : xI.hasFullStateOnlyAtIndex(this.metadata, BB))
      }
      isFieldStream(BB) {
        const IB = this.encDescriptor;
        return !!IB.hasAnyStream && (BB < 32 ? 0 !== (IB.streamBitmask & 1 << BB) : xI.hasStreamAtIndex(this.metadata, BB))
      }
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        this.ref = BB, this.refTarget = IB;
        const ZB = BZ(BB);
        this.encDescriptor = ZB, this.metadata = ZB.metadata;
        const TB = ZB.isSchema;
        if (this._isSchema = TB, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, TB) {
          const BB = this.metadata?.[YB] ?? 0;
          BB > 7 && (this.ops = new Uint8Array(BB + 1))
        } else this.collDirty = new Map
      }
      _opAt(BB) {
        const IB = this.ops;
        if (void 0 !== IB) return IB[BB];
        const ZB = (3 & BB) << 3;
        return BB < 4 ? this.opsLow >>> ZB & 255 : this.opsHigh >>> ZB & 255
      }
      _opPut(BB, IB) {
        const ZB = this.ops;
        if (void 0 !== ZB) return void(ZB[BB] = IB);
        const TB = (3 & BB) << 3,
          JB = ~(255 << TB);
        BB < 4 ? this.opsLow = this.opsLow & JB | IB << TB : this.opsHigh = this.opsHigh & JB | IB << TB
      }
      _markDirty(BB) {
        BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      record(BB, IB) {
        if (this._isSchema) {
          const ZB = this._opAt(BB);
          0 === ZB ? this._opPut(BB, IB) : (ZB === JB.DELETE || ZB === JB.ADD && IB === JB.DELETE_AND_ADD) && this._opPut(BB, JB.DELETE_AND_ADD), this._markDirty(BB)
        } else {
          const ZB = this.collDirty,
            TB = ZB.get(BB);
          let oB;
          oB = void 0 === TB ? IB : TB === JB.DELETE || TB === JB.ADD && IB === JB.DELETE_AND_ADD ? JB.DELETE_AND_ADD : TB, ZB.set(BB, oB)
        }
      }
      recordDelete(BB, IB) {
        this._isSchema ? (this._opPut(BB, IB), this._markDirty(BB)) : this.collDirty.set(BB, IB)
      }
      recordRaw(BB, IB) {
        this._isSchema ? (this._opPut(BB, IB), this._markDirty(BB)) : this.collDirty.set(BB, IB)
      }
      recordPure(BB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, BB])
      }
      operationAt(BB) {
        if (this._isSchema) {
          const IB = this._opAt(BB);
          return 0 === IB ? void 0 : IB
        }
        return this.collDirty.get(BB)
      }
      setOperationAt(BB, IB) {
        if (this._isSchema) this._opPut(BB, IB);
        else {
          const ZB = this.collDirty;
          ZB.has(BB) && ZB.set(BB, IB)
        }
      }
      forEach(BB) {
        this.forEachWithCtx(BB, sZ)
      }
      forEachWithCtx(BB, IB) {
        if (this._isSchema) {
          let ZB = this.dirtyLow,
            TB = this.dirtyHigh;
          const JB = this.ops;
          if (void 0 !== JB) {
            for (; 0 !== ZB;) {
              const TB = ZB & -ZB,
                oB = 31 - Math.clz32(TB);
              ZB ^= TB, IB(BB, oB, JB[oB])
            }
            for (; 0 !== TB;) {
              const ZB = TB & -TB,
                oB = 31 - Math.clz32(ZB) + 32;
              TB ^= ZB, IB(BB, oB, JB[oB])
            }
          } else {
            const TB = this.opsLow,
              JB = this.opsHigh;
            for (; 0 !== ZB;) {
              const oB = ZB & -ZB,
                GB = 31 - Math.clz32(oB);
              ZB ^= oB, IB(BB, GB, QZ(TB, JB, GB))
            }
          }
          return
        }
        const ZB = this.collDirty,
          TB = this.collPureOps;
        if (void 0 !== TB && TB.length > 0) {
          let JB = 0,
            oB = 0;
          for (const [GB, vB] of ZB) {
            for (; JB < TB.length && TB[JB][0] <= oB;) {
              const ZB = TB[JB++][1];
              IB(BB, -ZB, ZB)
            }
            IB(BB, GB, vB), oB++
          }
          for (; JB < TB.length;) {
            const ZB = TB[JB++][1];
            IB(BB, -ZB, ZB)
          }
        } else
          for (const [JB, oB] of ZB) IB(BB, JB, oB)
      }
      size() {
        return this._isSchema ? VI(this.dirtyLow) + VI(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(BB, IB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const ZB = this.collDirty,
          TB = new Map,
          oB = !this.paused && !this.isFullStateOnly;
        if (BB > 0)
          for (const [JB, GB] of ZB) JB < BB && TB.set(JB, GB);
        if (oB)
          for (let GB = 0; GB < IB; GB++) TB.set(BB + GB, JB.ADD);
        for (const [JB, GB] of ZB) JB >= BB && TB.set(JB + IB, GB);
        this.collDirty = TB, oB && this.root?.enqueueChangeTree(this)
      }
      removeAt(BB, IB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const ZB = this.collDirty,
          TB = BB + IB;
        let JB = !1;
        for (const GB of ZB.keys())
          if (GB >= TB) {
            JB = !0;
            break
          } if (!JB) {
          for (let IB = BB; IB < TB; IB++) ZB.delete(IB);
          return
        }
        const oB = new Map;
        for (const [GB, vB] of ZB) GB < BB ? oB.set(GB, vB) : GB >= TB && oB.set(GB - IB, vB);
        this.collDirty = oB
      }
      unshift(BB) {
        this.insertAt(0, BB)
      }
      setRoot(BB) {
        ! function(BB, IB) {
          BB.root = IB;
          const ZB = IB.add(BB);
          oZ(BB, BB.parent, BB.parentIndex), ZB && yZ(BB, IB, UZ)
        }(this, BB)
      }
      setParent(BB, IB, ZB) {
        gZ(this, BB, IB, ZB)
      }
      forEachChild(BB) {
        yZ(this, BB, qZ)
      }
      forEachChildWithCtx(BB, IB) {
        yZ(this, BB, IB)
      }
      forEachLive(BB) {
        JZ(this, BB, TZ)
      }
      forEachLiveWithCtx(BB, IB) {
        JZ(this, BB, IB)
      }
      operation(BB) {
        this.paused || this.isFullStateOnly || (this.recordPure(BB), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(BB, IB, ZB) {
        if (!this.paused && !this.isFieldFullStateOnly(BB)) {
          if (this.isFieldUnreliable(BB) && !this.isNew) {
            const TB = this.ensureUnreliableRecorder();
            return ZB ? TB.recordRaw(BB, IB) : TB.record(BB, IB), void this.root?.enqueueUnreliable(this)
          }
          ZB ? this.recordRaw(BB, IB) : this.record(BB, IB), this.root?.enqueueChangeTree(this)
        }
      }
      change(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB.ADD;
        this._routeAndRecord(BB, IB, !1)
      }
      indexedOperation(BB, IB) {
        this._routeAndRecord(BB, IB, !0)
      }
      getChange(BB) {
        return this.operationAt(BB)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(BB) {
        const IB = this.paused;
        this.paused = !0;
        try {
          return BB()
        } finally {
          this.paused = IB
        }
      }
      markDirty(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB.ADD;
        const ZB = this.paused;
        this.paused = !1;
        try {
          this.change(BB, IB)
        } finally {
          this.paused = ZB
        }
      }
      getValue(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[zB](BB, IB)
      }
      delete(BB, IB) {
        if (void 0 === BB) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${BB}'`)
          } catch (oJ) {
            console.warn(oJ)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(BB)) return this.getValue(BB);
        const ZB = this.isFieldUnreliable(BB) && !this.isNew;
        ZB ? this.ensureUnreliableRecorder().recordDelete(BB, IB ?? JB.DELETE) : this.recordDelete(BB, IB ?? JB.DELETE);
        const TB = this.getValue(BB);
        return TB && TB[gB] && this.root?.remove(TB[gB]), ZB ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), TB
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[UB]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[UB]?.()
      }
      discard() {
        this._isSchema || this.refTarget[UB]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const BB = BB => {
          if (BB < 0) return;
          const IB = this.getValue(BB);
          IB && IB[gB] && IB[gB].discardAll()
        };
        this.forEach(BB), this.unreliableRecorder?.forEach(BB), this.discard()
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
      addParent(BB, IB) {
        ! function(BB, IB, ZB) {
          if (BB.parentRef) {
            if (BB.parentRef[gB] === IB[gB]) return void(BB._parentIndex = ZB);
            if (IZ(BB, ((BB, ZB) => BB[gB] === IB[gB]))) return void(BB._parentIndex = ZB)
          }
          void 0 === BB.parentRef ? (BB.parentRef = IB, BB._parentIndex = ZB) : (BB.extraParents = {
            ref: BB.parentRef,
            index: BB._parentIndex,
            next: BB.extraParents
          }, BB.parentRef = IB, BB._parentIndex = ZB)
        }(this, BB, IB)
      }
      setParentIndex(BB, IB) {
        ! function(BB, IB, ZB) {
          if (void 0 !== BB.extraParents)
            if (BB.parentRef[gB] !== IB[gB]) {
              for (let TB = BB.extraParents; void 0 !== TB; TB = TB.next)
                if (TB.ref[gB] === IB[gB]) return void(TB.index = ZB)
            } else BB._parentIndex = ZB;
          else BB._parentIndex = ZB
        }(this, BB, IB)
      }
      removeParent() {
        return function(BB, IB) {
          if (BB.parentRef && BB.parentRef[gB] === IB[gB]) return BB.extraParents ? (BB.parentRef = BB.extraParents.ref, BB._parentIndex = BB.extraParents.index, BB.extraParents = BB.extraParents.next) : (BB.parentRef = void 0, BB._parentIndex = void 0), !0;
          let ZB = BB.extraParents,
            TB = null;
          for (; ZB;) {
            if (ZB.ref[gB] === IB[gB]) return TB ? TB.next = ZB.next : BB.extraParents = ZB.next, !0;
            TB = ZB, ZB = ZB.next
          }
          return void 0 === BB.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(BB) {
        return function(BB, IB) {
          if (void 0 !== BB.parentRef && IB(BB.parentRef, BB._parentIndex)) return {
            ref: BB.parentRef,
            index: BB._parentIndex
          };
          for (let ZB = BB.extraParents; void 0 !== ZB; ZB = ZB.next)
            if (IB(ZB.ref, ZB.index)) return {
              ref: ZB.ref,
              index: ZB.index
            }
        }(this, BB)
      }
      hasParent(BB) {
        return IZ(this, BB)
      }
      indexInParent(BB) {
        return function(BB, IB) {
          if (BB.parentRef && BB.parentRef[gB] === IB[gB]) return BB._parentIndex;
          for (let ZB = BB.extraParents; void 0 !== ZB; ZB = ZB.next)
            if (ZB.ref[gB] === IB[gB]) return ZB.index
        }(this, BB)
      }
      getAllParents() {
        return function(BB) {
          const IB = [];
          BB.parentRef && IB.push({
            ref: BB.parentRef,
            index: BB._parentIndex
          });
          let ZB = BB.extraParents;
          for (; ZB;) IB.push({
            ref: ZB.ref,
            index: ZB.index
          }), ZB = ZB.next;
          return IB
        }(this)
      }
    }
    class HZ {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(BB) {
        this.ref = BB
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
      untracked(BB) {
        return BB()
      }
      markDirty() {}
      forEachChild(BB) {
        const IB = this.ref;
        if (IB[qB]) {
          if ("string" !== typeof IB[qB])
            for (const [ZB, TB] of IB.entries()) TB && BB(TB[gB], IB._collectionIndexes?.[ZB] ?? ZB);
          return
        }
        const ZB = IB.constructor,
          TB = ZB?.[Symbol.metadata];
        if (!TB) return;
        const JB = TB[iB] ?? [];
        for (let oB = 0; oB < JB.length; oB++) {
          const ZB = JB[oB],
            GB = IB[TB[ZB].name];
          GB && BB(GB[gB], ZB)
        }
      }
      forEachChildWithCtx(BB, IB) {
        this.forEachChild(((ZB, TB) => IB(BB, ZB, TB)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function MZ(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
      var ZB;
      Object.defineProperty(BB, gB, {
        value: (ZB = IB, new HZ(ZB)),
        enumerable: !1,
        writable: !0
      })
    }

    function jZ(BB, IB, ZB, TB, oB, GB, kB) {
      void 0 !== kB ? kB(IB, TB, GB) : "string" === typeof ZB ? II[ZB]?.(IB, TB, GB) : null != ZB[Symbol.metadata] ? (II.number(IB, TB[vB], GB), (oB & JB.ADD) === JB.ADD && BB.tryEncodeTypeId(IB, ZB, TB.constructor, GB)) : II.number(IB, TB[vB], GB)
    }
    const PZ = function(BB, IB, ZB, TB, oB, GB, vB, kB) {
        if (IB[GB.offset++] = 255 & (TB | oB), oB === JB.DELETE) return;
        const cB = ZB.encDescriptor,
          nB = ZB.ref,
          hB = nB[CB][TB] ?? nB[cB.names[TB]];
        jZ(BB, IB, cB.types[TB], hB, oB, GB, cB.encoders[TB])
      },
      RZ = function(BB, IB, ZB, TB, oB, GB) {
        if (IB[GB.offset++] = 255 & oB, II.number(IB, TB, GB), oB === JB.DELETE) return;
        const vB = ZB.ref;
        if ((oB & JB.ADD) === JB.ADD) {
          const BB = vB.$indexes.get(TB);
          II.string(IB, BB, GB)
        }
        jZ(BB, IB, vB[qB], vB[zB](TB), oB, GB)
      },
      rZ = function(BB, IB, ZB, TB, oB, GB) {
        if (IB[GB.offset++] = 255 & oB, II.number(IB, TB, GB), oB === JB.DELETE) return;
        const vB = ZB.ref;
        jZ(BB, IB, vB[qB], vB[zB](TB), oB, GB)
      },
      mZ = function(BB, IB, ZB, TB, oB, GB) {
        const vB = ZB.ref;
        (oB & JB.ADD) === JB.ADD && "function" === typeof vB.set ? RZ(BB, IB, ZB, TB, oB, GB) : rZ(BB, IB, ZB, TB, oB, GB)
      },
      XZ = function(BB, IB, ZB, TB, oB, GB, kB, cB) {
        const nB = ZB.refTarget,
          hB = nB[qB],
          FB = "string" !== typeof hB;
        let NB;
        if (cB && ZB.isFiltered && FB) {
          const BB = nB.tmpItems[TB];
          if (!BB) return;
          if (NB = BB[vB], oB === JB.DELETE) oB = JB.DELETE_BY_REFID;
          else if ((oB & JB.ADD) === JB.ADD) oB = JB.ADD_BY_REFID;
          else if ((oB & JB.MOVE) === JB.MOVE) return
        } else if (oB === JB.DELETE && FB) {
          const BB = nB.tmpItems[TB];
          if (!BB) return;
          NB = BB[vB], oB = JB.DELETE_BY_REFID
        } else NB = TB;
        if (IB[GB.offset++] = 255 & oB, II.number(IB, NB, GB), oB === JB.DELETE || oB === JB.DELETE_BY_REFID) return;
        jZ(BB, IB, hB, nB[zB](TB, kB), oB, GB)
      };

    function LZ(BB, IB, ZB, TB, oB, GB, kB) {
      const cB = BB.resyncVisited;
      let nB = cB.get(BB.currentRefId);
      if (void 0 === nB && cB.set(BB.currentRefId, nB = new Set), nB.add(TB), void 0 !== oB && ZB === JB.ADD && oB !== GB) {
        const ZB = oB[vB];
        void 0 !== ZB && (BB.root.removeRef(ZB), kB?.push({
          ref: IB,
          refId: BB.currentRefId,
          op: JB.DELETE,
          dynamicIndex: TB,
          value: void 0,
          previousValue: oB
        }))
      }
    }

    function eZ(BB, IB, ZB, TB) {
      const JB = IB[vB];
      if (void 0 === JB || ZB.has(JB)) return;
      ZB.add(JB);
      const oB = IB.constructor[Symbol.metadata],
        GB = oB?.[iB];
      if (void 0 === GB) return;
      const kB = oB[MB];
      for (let vB = 0; vB < GB.length; vB++) {
        const JB = GB[vB];
        if (void 0 !== kB && kB.includes(JB)) continue;
        const cB = oB[JB],
          nB = IB[cB.name];
        nB && (pT.is(cB.type) ? eZ(BB, nB, ZB, TB) : uZ(BB, nB, ZB, TB))
      }
    }

    function uZ(BB, IB, ZB, TB) {
      const oB = IB[yB] ?? IB,
        GB = oB[vB];
      if (void 0 === GB || ZB.has(GB)) return;
      ZB.add(GB);
      const kB = BB.resyncVisited.get(GB);
      if (void 0 === kB) return;
      const cB = BB.root;
      oB[NB](kB, ((BB, ZB) => {
        TB?.push({
          ref: IB,
          refId: GB,
          op: JB.DELETE,
          dynamicIndex: ZB,
          value: void 0,
          previousValue: BB
        });
        const oB = BB?.[vB];
        void 0 !== oB && cB.removeRef(oB)
      }), (IB => {
        pT.isSchema(IB) && eZ(BB, IB, ZB, TB)
      }))
    }
    const fZ = 1,
      lZ = 2,
      AZ = 3,
      tZ = 4,
      bZ = 5;

    function xZ(BB, IB, ZB, TB, oB, GB, kB, cB, nB) {
      const hB = BB.root;
      let zB;
      if ((IB & JB.DELETE) === JB.DELETE) {
        const BB = oB?.[vB];
        void 0 !== BB && hB.removeRef(BB), IB !== JB.DELETE_AND_ADD && ZB[FB](TB), zB = void 0
      }
      if (IB === JB.DELETE);
      else if ("string" === typeof GB) zB = WI[GB](kB, cB);
      else if (rI(GB)) zB = function(BB, IB, ZB) {
        return XI(BB, (0, WI[BB.wire])(IB, ZB))
      }(GB.quantized, kB, cB);
      else if (pT.is(GB)) {
        const ZB = WI.number(kB, cB);
        if (zB = hB.refs.get(ZB), (IB & JB.ADD) === JB.ADD) {
          const TB = BB.getInstanceType(kB, cB, GB);
          zB || (zB = BB.createInstanceOfType(TB)), hB.addRef(ZB, zB, zB !== oB || IB === JB.DELETE_AND_ADD && zB === oB)
        }
      } else {
        const ZB = (NB = Object.keys(GB)[0], dI[NB]),
          TB = WI.number(kB, cB);
        null !== BB.resyncVisited && function(BB, IB) {
          const ZB = BB.resyncVisited;
          ZB.has(IB) || ZB.set(IB, new Set)
        }(BB, TB);
        const FB = hB.refs.has(TB) ? oB || hB.refs.get(TB) : ZB.constructor.initializeForDecoder();
        if (zB = FB.clone(!0), zB[qB] = Object.values(GB)[0], oB) {
          let BB = oB[vB];
          if (void 0 !== BB && TB !== BB) {
            (IB & JB.DELETE) !== JB.DELETE && hB.removeRef(BB);
            const ZB = oB.entries();
            let TB;
            for (;
              (TB = ZB.next()) && !TB.done;) {
              const [IB, ZB] = TB.value;
              "object" === typeof ZB && (BB = ZB[vB]), nB?.push({
                ref: oB,
                refId: BB,
                op: JB.DELETE,
                field: IB,
                value: void 0,
                previousValue: ZB
              })
            }
          }
        }
        hB.addRef(TB, zB, FB !== oB || IB === JB.DELETE_AND_ADD && FB === oB)
      }
      var NB;
      return zB
    }
    const EZ = function(BB, IB, ZB, TB, JB) {
        const oB = IB[ZB.offset++],
          GB = TB.constructor[Symbol.metadata],
          vB = oB >> 6 << 6,
          kB = oB % (vB || 255),
          cB = GB[kB];
        if (void 0 === cB) return console.warn("@colyseus/schema: field not defined at", {
          index: kB,
          ref: TB.constructor.name,
          metadata: GB
        }), -1;
        const nB = !0 === cB.deprecated,
          hB = nB ? void 0 : TB[zB](kB),
          FB = xZ(BB, vB, TB, kB, hB, cB.type, IB, ZB, JB);
        nB || (null !== FB && void 0 !== FB && (TB[cB.name] = FB), hB !== FB && JB?.push({
          ref: TB,
          refId: BB.currentRefId,
          op: vB,
          field: cB.name,
          value: FB,
          previousValue: hB
        }))
      },
      DZ = function(BB, IB, ZB, TB, oB) {
        const GB = TB[yB] ?? TB,
          vB = IB[ZB.offset++];
        if (vB === JB.CLEAR) return BB.removeChildRefs(GB, oB), void GB.clear();
        const kB = WI.number(IB, ZB),
          cB = GB[qB],
          nB = GB.constructor.COLLECTION_KIND;
        let hB;
        (vB & JB.ADD) === JB.ADD ? nB === fZ ? (hB = WI.string(IB, ZB), GB.setIndex(kB, hB)) : hB = kB : hB = GB.getIndex(kB);
        const FB = GB[zB](kB),
          NB = xZ(BB, vB, TB, kB, FB, cB, IB, ZB, oB);
        if (null !== BB.resyncVisited && LZ(BB, TB, vB, hB, FB, NB, oB), null !== NB && void 0 !== NB) switch (nB) {
          case fZ:
            GB.$items.set(hB, NB);
            break;
          case lZ:
            GB.$setAt(kB, NB, null !== BB.resyncVisited && vB === JB.ADD ? JB.REPLACE : vB);
            break;
          case AZ:
          case tZ:
          case bZ:
            GB.$items.has(kB) || (GB.$items.set(kB, NB), "number" === typeof GB.$refId && kB >= GB.$refId && (GB.$refId = kB + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${GB.constructor?.name} \u2014 item at index ${kB} was not stored.`)
        }
        FB !== NB && oB?.push({
          ref: TB,
          refId: BB.currentRefId,
          op: vB,
          dynamicIndex: hB,
          value: NB,
          previousValue: FB
        })
      },
      KZ = function(BB, IB, ZB, TB, oB) {
        const GB = TB[yB] ?? TB;
        let vB, kB = IB[ZB.offset++];
        if (kB === JB.CLEAR) return BB.removeChildRefs(GB, oB), void GB.clear();
        if (kB === JB.REVERSE) return void GB.items.reverse();
        if (kB === JB.DELETE_BY_REFID) {
          const kB = WI.number(IB, ZB),
            cB = BB.root.refs.get(kB);
          if (void 0 === cB) return;
          if (BB.root.removeRef(kB), vB = GB.findIndex((BB => BB === cB)), -1 === vB) return;
          return GB[FB](vB), void oB?.push({
            ref: TB,
            refId: BB.currentRefId,
            op: JB.DELETE,
            dynamicIndex: vB,
            value: void 0,
            previousValue: cB
          })
        }
        if (kB === JB.ADD_BY_REFID) {
          const TB = WI.number(IB, ZB),
            JB = BB.root.refs.get(TB);
          JB && (vB = GB.findIndex((BB => BB === JB))), -1 !== vB && void 0 !== vB || (vB = GB.length)
        } else vB = WI.number(IB, ZB);
        const cB = GB[qB];
        let nB = vB;
        const hB = GB.items[vB],
          zB = xZ(BB, kB, TB, vB, hB, cB, IB, ZB, oB);
        null !== BB.resyncVisited && LZ(BB, TB, kB, vB, hB, zB, oB), null !== zB && void 0 !== zB && zB !== hB && GB.$setAt(vB, zB, null !== BB.resyncVisited && kB === JB.ADD ? JB.REPLACE : kB), hB !== zB && oB?.push({
          ref: TB,
          refId: BB.currentRefId,
          op: kB,
          dynamicIndex: nB,
          value: zB,
          previousValue: hB
        })
      };
    class VZ extends Error {}

    function SZ(BB, IB, ZB, TB) {
      if (!(BB instanceof IB)) throw new VZ(`a '${IB.name}' was expected, but '${BB&&BB.constructor.name}' was provided in ${ZB.constructor.name}#${TB}`)
    }
    const BT = (BB, IB) => {
        const ZB = BB.toString(),
          TB = IB.toString();
        return ZB < TB ? -1 : ZB > TB ? 1 : 0
      },
      IT = {
        get: (BB, IB) => "symbol" === typeof IB || isNaN(IB) ? Reflect.get(BB, IB) : BB.items[IB],
        set: (BB, IB, ZB) => {
          if ("symbol" !== typeof IB && !isNaN(IB)) {
            if (void 0 === ZB || null === ZB) BB.$deleteAt(IB);
            else {
              let TB;
              if (ZB[gB]) {
                SZ(ZB, BB[qB], BB, IB);
                const oB = BB.items[IB];
                BB.isMovingItems ? (TB = BB.$wireIndex(Number(IB)), void 0 !== oB ? ZB[gB].isNew ? BB[gB].indexedOperation(TB, JB.MOVE_AND_ADD) : (BB[gB].getChange(TB) & JB.DELETE) === JB.DELETE ? BB[gB].indexedOperation(TB, JB.DELETE_AND_MOVE) : BB[gB].indexedOperation(TB, JB.MOVE) : ZB[gB].isNew && BB[gB].indexedOperation(TB, JB.ADD), ZB[gB].setParent(BB, BB[gB].root, TB)) : TB = BB.$changeAt(Number(IB), ZB), void 0 !== oB && oB[gB].root?.remove(oB[gB])
              } else TB = BB.$changeAt(Number(IB), ZB);
              BB.items[IB] = ZB, void 0 !== TB && (BB.tmpItems[TB] = ZB)
            }
            return !0
          }
          return Reflect.set(BB, IB, ZB)
        },
        deleteProperty: (BB, IB) => ("number" === typeof IB ? BB.$deleteAt(IB) : delete BB[IB], !0),
        has: (BB, IB) => "symbol" === typeof IB || isNaN(Number(IB)) ? Reflect.has(BB, IB) : Reflect.has(BB.items, IB)
      };
    class ZT {
      [gB];
      [vB];
      [yB];
      [qB];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[cB] = XZ;
      static[nB] = KZ;
      static COLLECTION_KIND = lZ;
      static[hB](BB, IB, ZB) {
        if (!ZB) return !0;
        const TB = BB[yB] ?? BB;
        return "string" === typeof TB[qB] || ZB.isChangeTreeVisible(TB.tmpItems[IB]?.[gB])
      }
      static is(BB) {
        return Array.isArray(BB) || void 0 !== BB.array
      }
      static from(BB) {
        return new ZT(...Array.from(BB))
      }
      constructor() {
        this[qB] = void 0, this[yB] = this;
        const BB = new Proxy(this, IT);
        return Object.defineProperty(this, gB, {
          value: new aZ(BB, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), BB
      }
      static initializeForDecoder() {
        const BB = Object.create(ZT.prototype);
        BB.items = [], BB.isMovingItems = !1, BB._needsCompaction = !1, BB[qB] = void 0, BB[yB] = BB;
        const IB = new Proxy(BB, IT);
        return MZ(BB, IB), IB
      }
      set length(BB) {
        0 === BB ? this.clear() : BB < this.items.length ? this.splice(BB, this.length - BB) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[gB].pause()
      }
      resumeTracking() {
        this[gB].resume()
      }
      untracked(BB) {
        return this[gB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[gB].paused
      }
      push() {
        const BB = this[yB],
          IB = BB.items,
          ZB = BB.tmpItems,
          TB = BB[gB],
          oB = BB[qB];
        let GB = ZB.length;
        for (let vB = 0, kB = arguments.length; vB < kB; vB++, GB++) {
          const kB = vB < 0 || arguments.length <= vB ? void 0 : arguments[vB];
          if (void 0 === kB || null === kB) return;
          "object" === typeof kB && oB && SZ(kB, oB, BB, vB), TB.indexedOperation(GB, JB.ADD), IB.push(kB), ZB.push(kB), kB[gB]?.setParent(this, TB.root, GB)
        }
        return GB
      }
      pop() {
        const BB = this[yB],
          IB = BB.tmpItems,
          ZB = BB.deletedIndexes;
        let TB = -1;
        for (let oB = IB.length - 1; oB >= 0; oB--)
          if (!0 !== ZB[oB]) {
            TB = oB;
            break
          } if (TB < 0) return;
        const JB = BB.$isUnsentAdd(TB);
        return BB[gB].delete(TB), JB ? BB.$cancelAdd(TB) : ZB[TB] = !0, BB.items.pop()
      }
      at(BB) {
        return BB < 0 && (BB += this.length), this.items[BB]
      }
      $wireIndex(BB) {
        const IB = this.deletedIndexes;
        if (0 === IB.length) return BB;
        const ZB = this.tmpItems;
        let TB = 0;
        for (let JB = 0; JB < ZB.length; JB++)
          if (!0 !== IB[JB]) {
            if (TB === BB) return JB;
            TB++
          } return ZB.length + (BB - TB)
      }
      $isUnsentAdd(BB) {
        const IB = this[gB];
        return 0 === (576 & IB.flags) && !IB.paused && "string" !== typeof this[qB] && IB.operationAt(BB) === JB.ADD
      }
      $cancelAdd(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZB = this[gB],
          TB = this.tmpItems[BB];
        this.tmpItems.splice(BB, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(BB, 1), ZB.removeAt(BB, 1);
        const JB = TB?.[gB];
        void 0 !== JB && void 0 === JB.root && JB.removeParent(this), IB && this.$reindexChildren(BB)
      }
      $reindexChildren(BB, IB) {
        if (!this[gB].hasFilteredFields) return;
        if ("string" === typeof this[qB]) return;
        const ZB = this.tmpItems,
          TB = ZB.length;
        if (void 0 !== IB)
          for (; BB < TB && ZB[BB] === IB[BB];) BB++;
        for (let JB = BB; JB < TB; JB++) ZB[JB]?.[gB]?.setParentIndex(this, JB)
      }
      $changeAt(BB, IB) {
        if (void 0 === IB || null === IB) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[BB] === IB) return;
        const ZB = void 0 !== this.items[BB] ? "object" === typeof IB ? JB.DELETE_AND_ADD : JB.REPLACE : JB.ADD,
          TB = this.$wireIndex(BB),
          oB = this[gB];
        return oB.change(TB, ZB), IB[gB]?.setParent(this, oB.root, TB), TB
      }
      $deleteAt(BB, IB) {
        this[gB].delete(this.$wireIndex(BB), IB)
      }
      $setAt(BB, IB, ZB) {
        ZB === JB.ADD && void 0 !== this.items[BB] ? this.items.splice(BB, 0, IB) : ZB === JB.DELETE_AND_MOVE ? (this.items.splice(BB, 1), this.items[BB] = IB) : (BB > this.items.length && (this._needsCompaction = !0), this.items[BB] = IB)
      }
      clear() {
        const BB = this[yB];
        if (0 === BB.items.length) return;
        const IB = BB[gB];
        IB.forEachChild(((BB, ZB) => {
          IB.root?.remove(BB)
        })), IB.discard(), IB.operation(JB.CLEAR), BB.items.length = 0, BB.tmpItems.length = 0
      } [WB]() {
        const BB = this[yB] ?? this,
          IB = BB[gB];
        if (IB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const ZB = BB.items;
        for (let TB = 0; TB < ZB.length; TB++) ZB[TB]?.[WB]?.();
        BB.items.length = 0, BB.tmpItems.length = 0, BB.deletedIndexes.length = 0, IB.recycle(), BB[vB] = void 0
      }
      concat() {
        return new ZT(...this.items.concat(...arguments))
      }
      join(BB) {
        return this.items.join(BB)
      }
      reverse() {
        const BB = this[yB],
          IB = BB[gB];
        if (IB.has() || BB.deletedIndexes.length > 0) {
          const IB = BB.items.slice().reverse();
          return this.clear(), this.push(...IB), this
        }
        return IB.operation(JB.REVERSE), BB.items.reverse(), BB.tmpItems.reverse(), BB.$reindexChildren(0), this
      }
      shift() {
        const BB = this[yB],
          IB = BB.items;
        if (0 === IB.length) return;
        const ZB = BB[gB],
          TB = BB.deletedIndexes;
        let oB = 0;
        for (; !0 === TB[oB];) oB++;
        const GB = BB.$isUnsentAdd(oB);
        return ZB.delete(oB, JB.DELETE), GB ? BB.$cancelAdd(oB) : TB[oB] = !0, IB.shift()
      }
      slice(BB, IB) {
        const ZB = new ZT;
        return ZB.push(...this.items.slice(BB, IB)), ZB
      }
      sort() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BT;
        const IB = this[yB];
        IB.isMovingItems = !0;
        const ZB = IB[gB];
        return IB.items.sort(BB).forEach(((BB, IB) => ZB.change(IB, JB.REPLACE))), IB.tmpItems.sort(BB), IB.$reindexChildren(0), IB.isMovingItems = !1, this
      }
      splice(BB, IB) {
        const ZB = this[yB],
          TB = ZB[gB],
          oB = ZB.items,
          GB = ZB.tmpItems,
          vB = ZB.deletedIndexes,
          kB = oB.length,
          cB = GB.length;
        for (var nB = arguments.length, hB = new Array(nB > 2 ? nB - 2 : 0), zB = 2; zB < nB; zB++) hB[zB - 2] = arguments[zB];
        const FB = hB.length,
          NB = [];
        for (let JB = 0; JB < cB; JB++) !0 !== vB[JB] && NB.push(JB);
        let qB;
        if (kB > BB) {
          void 0 === IB && (IB = kB - BB);
          for (let oB = BB; oB < BB + IB; oB++) {
            const BB = NB[oB],
              IB = ZB.$isUnsentAdd(BB);
            TB.delete(BB, JB.DELETE), IB ? (qB ??= []).push(BB) : vB[BB] = !0
          }
        } else IB = 0;
        if (FB > 0) {
          const oB = NB[BB] ?? kB,
            cB = Math.min(FB, IB);
          for (let BB = 0; BB < cB; BB++) {
            const IB = oB + BB;
            let ZB;
            const kB = void 0 !== qB ? qB.indexOf(IB) : -1; - 1 !== kB ? (qB.splice(kB, 1), ZB = JB.ADD) : ZB = vB[IB] ? JB.DELETE_AND_ADD : JB.ADD, TB.indexedOperation(IB, ZB), GB[IB] = hB[BB], vB[IB] = !1, hB[BB][gB]?.setParent(this, TB.root, IB)
          }
          const nB = FB - cB;
          if (nB > 0) {
            const BB = oB + cB;
            TB.insertAt(BB, nB);
            for (let IB = 0; IB < nB; IB++) hB[cB + IB][gB]?.setParent(this, TB.root, BB + IB);
            vB.length > 0 && vB.splice(BB, 0, ...new Array(nB).fill(!1)), GB.splice(BB, 0, ...hB.slice(cB)), ZB.$reindexChildren(BB + nB)
          }
        }
        if (void 0 !== qB && qB.length > 0) {
          for (let BB = qB.length - 1; BB >= 0; BB--) ZB.$cancelAdd(qB[BB], !1);
          ZB.$reindexChildren(qB[0])
        }
        return TB.root?.enqueueChangeTree(TB), oB.splice(BB, IB, ...hB)
      }
      unshift() {
        const BB = this[yB],
          IB = BB[gB];
        IB.unshift(arguments.length);
        for (let TB = 0; TB < arguments.length; TB++)(TB < 0 || arguments.length <= TB ? void 0 : arguments[TB])?.[gB]?.setParent(this, IB.root, TB);
        const ZB = BB.deletedIndexes;
        return ZB.length > 0 && ZB.unshift(...new Array(arguments.length).fill(!1)), BB.tmpItems.unshift(...arguments), BB.$reindexChildren(arguments.length), BB.items.unshift(...arguments)
      }
      indexOf(BB, IB) {
        return this.items.indexOf(BB, IB)
      }
      lastIndexOf(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(BB, IB)
      }
      every(BB, IB) {
        return this.items.every(BB, IB)
      }
      some(BB, IB) {
        return this.items.some(BB, IB)
      }
      forEach(BB, IB) {
        return this.items.forEach(BB, IB)
      }
      map(BB, IB) {
        return this.items.map(BB, IB)
      }
      filter(BB, IB) {
        return this.items.filter(BB, IB)
      }
      reduce(BB, IB) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(BB, IB) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(BB, IB) {
        return this.items.find(BB, IB)
      }
      findIndex(BB, IB) {
        return this.items.findIndex(BB, IB)
      }
      fill(BB, IB, ZB) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(BB, IB, ZB) {
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
        return ZT
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
      includes(BB, IB) {
        return this.items.includes(BB, IB)
      }
      flatMap(BB, IB) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(BB) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(BB, IB) {
        const ZB = this.items.slice();
        return BB < 0 && (BB += this.length), ZB[BB] = IB, new ZT(...ZB)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(BB) {
        return this.items.slice().sort(BB)
      }
      toSpliced(BB, IB) {
        for (var ZB = arguments.length, TB = new Array(ZB > 2 ? ZB - 2 : 0), JB = 2; JB < ZB; JB++) TB[JB - 2] = arguments[JB];
        const oB = this.items.slice();
        return oB.splice.apply(oB, arguments), oB
      }
      shuffle() {
        return this.move((BB => {
          let IB = this.items.length;
          for (; 0 != IB;) {
            let BB = Math.floor(Math.random() * IB);
            IB--, [this[IB], this[BB]] = [this[BB], this[IB]]
          }
        }))
      }
      move(BB) {
        return this.isMovingItems = !0, BB(this), this.isMovingItems = !1, this
      } [zB](BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = this[yB] ?? this;
        return IB || ZB.deletedIndexes[BB] ? ZB.items[BB] : ZB.tmpItems[BB] || ZB.items[BB]
      } [FB](BB) {
        const IB = this[yB] ?? this;
        IB.items[BB] = void 0, IB._needsCompaction = !0
      } [UB]() {
        const BB = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, BB), this.deletedIndexes.length = 0)
      } [dB]() {
        const BB = this[yB] ?? this;
        BB._needsCompaction && (BB._needsCompaction = !1, BB.items = BB.items.filter((BB => void 0 !== BB)))
      } [NB](BB, IB, ZB) {
        const TB = this[yB] ?? this,
          JB = TB.items;
        let oB = !1;
        for (let GB = 0; GB < JB.length; GB++) {
          const vB = JB[GB];
          BB.has(GB) ? ZB(vB) : (oB = !0, IB(vB, GB), TB[FB](GB))
        }
        oB && TB[dB]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((BB => "function" === typeof BB.toJSON ? BB.toJSON() : BB))
      }
      clone(BB) {
        let IB;
        return BB ? (IB = new ZT, IB.push(...this.items)) : IB = new ZT(...this.map((BB => BB[gB] ? BB.clone() : BB))), IB
      }
    }
    QI("array", {
      constructor: ZT
    });
    class TT {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(BB) {
        const IB = this.indexByKey[BB];
        return void 0 === IB ? void 0 : IB
      }
      assign(BB) {
        const IB = this.nextIndex++;
        return this.indexByKey[BB] = IB, this.keyByIndex.set(IB, BB), IB
      }
      snapshot(BB, IB) {
        (this.snapshots ??= new Map).set(BB, IB)
      }
      forgetSnapshot(BB) {
        this.snapshots?.delete(BB)
      }
      snapshotAt(BB) {
        return this.snapshots?.get(BB)
      }
      setIndex(BB, IB) {
        this.keyByIndex.set(BB, IB), this.indexByKey[IB] = BB
      }
      keyOf(BB) {
        return this.keyByIndex.get(BB)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [BB] of this.snapshots) {
            const IB = this.keyByIndex.get(BB);
            void 0 !== IB && (delete this.indexByKey[IB], this.keyByIndex.delete(BB))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class JT {
      [gB];
      [vB];
      childType;
      [qB];
      $items = new Map;
      journal = new TT;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= OI()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= OI()).priority = BB
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[cB] = RZ;
      static[nB] = DZ;
      static COLLECTION_KIND = fZ;
      static[hB](BB, IB, ZB) {
        if (!ZB || "string" === typeof BB[qB]) return !0;
        const TB = BB[zB](IB) ?? BB.journal.snapshotAt(IB);
        return ZB.isChangeTreeVisible(TB[gB])
      }
      static is(BB) {
        return void 0 !== BB.map
      }
      constructor(BB) {
        if (Object.defineProperty(this, gB, {
            value: new aZ(this),
            enumerable: !1,
            writable: !0
          }), this[qB] = void 0, BB)
          if (BB instanceof Map || BB instanceof JT) BB.forEach(((BB, IB) => this.set(IB, BB)));
          else
            for (const IB in BB) this.set(IB, BB[IB])
      }
      static initializeForDecoder() {
        const BB = Object.create(JT.prototype);
        return BB.$items = new Map, BB.journal = new TT, BB[qB] = void 0, MZ(BB), BB
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return JT
      }
      set(BB, IB) {
        if (void 0 === IB || null === IB) throw new Error(`MapSchema#set('${BB}', ${IB}): trying to set ${IB} value on '${BB}'.`);
        "object" === typeof IB && this[qB] && SZ(IB, this[qB], this, BB), BB = BB.toString();
        const ZB = this[gB],
          TB = void 0 !== IB[gB],
          oB = this.journal;
        let GB, vB = oB.indexOf(BB);
        if (void 0 !== vB) {
          GB = JB.REPLACE;
          const ZB = this.$items.get(BB);
          if (ZB === IB) return;
          TB && (GB = JB.DELETE_AND_ADD, void 0 !== ZB && ZB[gB].root?.remove(ZB[gB])), void 0 !== oB.snapshotAt(vB) && oB.forgetSnapshot(vB)
        } else vB = oB.assign(BB), GB = JB.ADD;
        return this.$items.set(BB, IB), GB === JB.ADD && ZB.isStreamCollection ? void 0 !== ZB.root && iI(this, ZB.root, vB) : ZB.change(vB, GB), TB && IB[gB].setParent(this, ZB.root, vB), this
      }
      get(BB) {
        return this.$items.get(BB)
      }
      getOrInsert(BB, IB) {
        return this.$items.has(BB) ? this.$items.get(BB) : (this.set(BB, IB), IB)
      }
      getOrInsertComputed(BB, IB) {
        if (this.$items.has(BB)) return this.$items.get(BB);
        const ZB = IB(BB);
        return this.set(BB, ZB), ZB
      }
      delete(BB) {
        if (!this.$items.has(BB)) return !1;
        const IB = this.journal.indexOf(BB),
          ZB = this.$items.get(BB),
          TB = this[gB];
        if (TB.isStreamCollection) {
          const JB = TB.root;
          let oB = !1;
          return void 0 !== JB && (oB = pI(this, JB, this[vB], IB)), void 0 !== ZB?.[gB] && JB?.remove(ZB[gB]), this.$items.delete(BB), oB || this.journal.snapshot(IB, ZB), !0
        }
        return this.journal.snapshot(IB, ZB), TB.delete(IB), this.$items.delete(BB)
      }
      clear() {
        const BB = this[gB];
        BB.discard(), BB.forEachChild(((IB, ZB) => {
          BB.root?.remove(IB)
        })), this.journal.reset(), this.$items.clear(), BB.operation(JB.CLEAR)
      } [WB]() {
        const BB = this[gB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[WB]?.())), this.$items.clear(), this.journal.reset(), BB.recycle(), this[vB] = void 0
      }
      has(BB) {
        return this.$items.has(BB)
      }
      forEach(BB) {
        this.$items.forEach(BB)
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
        this[gB].pause()
      }
      resumeTracking() {
        this[gB].resume()
      }
      untracked(BB) {
        return this[gB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[gB].paused
      }
      setIndex(BB, IB) {
        this.journal.setIndex(BB, IB)
      }
      getIndex(BB) {
        return this.journal.keyOf(BB)
      } [zB](BB) {
        const IB = this.journal.keyOf(BB);
        return void 0 !== IB ? this.$items.get(IB) : void 0
      } [FB](BB) {
        const IB = this.journal.keyOf(BB);
        void 0 !== IB && (this.$items.delete(IB), this.journal.keyByIndex.delete(BB))
      } [NB](BB, IB, ZB) {
        let TB = null;
        if (this.$items.forEach(((JB, oB) => {
            BB.has(oB) ? ZB(JB) : ((TB ??= new Set).add(oB), IB(JB, oB))
          })), null !== TB) {
          TB.forEach((BB => {
            this.$items.delete(BB), delete this.journal.indexByKey[BB]
          }));
          const BB = [];
          this.journal.keyByIndex.forEach(((IB, ZB) => {
            TB.has(IB) && BB.push(ZB)
          }));
          for (let IB = 0; IB < BB.length; IB++) this.journal.keyByIndex.delete(BB[IB])
        }
      } [UB]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(BB) {
        jI(this, BB)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (BB => {
          let [IB, ZB] = BB;
          return [IB, "function" === typeof ZB.toJSON ? ZB.toJSON() : ZB]
        })))
      }
      clone(BB) {
        let IB;
        return BB ? IB = Object.assign(new JT, this) : (IB = new JT, this.forEach(((BB, ZB) => {
          BB[gB] ? IB.set(ZB, BB.clone()) : IB.set(ZB, BB)
        }))), IB
      }
    }
    QI("map", {
      constructor: JT
    });
    class oT {
      [gB];
      [vB];
      [qB];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= OI()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= OI()).priority = BB
      }
      static[cB] = rZ;
      static[nB] = DZ;
      static COLLECTION_KIND = tZ;
      static[hB](BB, IB, ZB) {
        return !ZB || "string" === typeof BB[qB] || ZB.isChangeTreeVisible((BB[zB](IB) ?? BB.deletedItems[IB])[gB])
      }
      static is(BB) {
        return void 0 !== BB.collection
      }
      constructor(BB) {
        Object.defineProperty(this, gB, {
          value: new aZ(this),
          enumerable: !1,
          writable: !0
        }), this[qB] = void 0, BB && BB.forEach((BB => this.add(BB)))
      }
      static initializeForDecoder() {
        const BB = Object.create(oT.prototype);
        return BB.$items = new Map, BB.deletedItems = {}, BB.$refId = 0, BB[qB] = void 0, MZ(BB), BB
      }
      add(BB) {
        const IB = this.$refId++,
          ZB = this[gB];
        return this.$items.set(IB, BB), ZB.isStreamCollection ? void 0 !== ZB.root && iI(this, ZB.root, IB) : ZB.change(IB), void 0 !== BB[gB] && BB[gB].setParent(this, ZB.root, IB), IB
      }
      at(BB) {
        const IB = Array.from(this.$items.keys())[BB];
        return this.$items.get(IB)
      }
      entries() {
        return this.$items.entries()
      }
      delete(BB) {
        const IB = this.$items.entries();
        let ZB, TB;
        for (;
          (TB = IB.next()) && !TB.done;)
          if (BB === TB.value[1]) {
            ZB = TB.value[0];
            break
          } if (void 0 === ZB) return !1;
        const JB = this[gB];
        if (JB.isStreamCollection) {
          const BB = JB.root,
            IB = this.$items.get(ZB);
          return void 0 !== BB && pI(this, BB, this[vB], ZB), void 0 !== IB?.[gB] && BB?.remove(IB[gB]), this.deletedItems[ZB] = IB, this.$items.delete(ZB)
        }
        return this.deletedItems[ZB] = JB.delete(ZB), this.$items.delete(ZB)
      }
      clear() {
        const BB = this[gB];
        BB.discard(), BB.forEachChild(((IB, ZB) => {
          BB.root?.remove(IB)
        })), this.$items.clear(), BB.operation(JB.CLEAR)
      } [WB]() {
        const BB = this[gB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[WB]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, BB.recycle(), this[vB] = void 0
      }
      has(BB) {
        return Array.from(this.$items.values()).some((IB => IB === BB))
      }
      forEach(BB) {
        this.$items.forEach(((IB, ZB, TB) => BB(IB, ZB, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[gB].pause()
      }
      resumeTracking() {
        this[gB].resume()
      }
      untracked(BB) {
        return this[gB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[gB].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(BB, IB) {}
      getIndex(BB) {
        return BB
      } [zB](BB) {
        return this.$items.get(BB)
      } [FB](BB) {
        this.$items.delete(BB)
      } [NB](BB, IB, ZB) {
        let TB = null;
        if (this.$items.forEach(((JB, oB) => {
            BB.has(oB) ? ZB(JB) : ((TB ??= []).push(oB), IB(JB, oB))
          })), null !== TB)
          for (let JB = 0; JB < TB.length; JB++) this[FB](TB[JB])
      } [UB]() {
        for (const BB in this.deletedItems) delete this.deletedItems[BB]
      }
      _dropView(BB) {
        jI(this, BB)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach(((IB, ZB) => {
          BB.push("function" === typeof IB.toJSON ? IB.toJSON() : IB)
        })), BB
      }
      clone(BB) {
        let IB;
        return BB ? IB = Object.assign(new oT, this) : (IB = new oT, this.forEach((BB => {
          BB[gB] ? IB.add(BB.clone()) : IB.add(BB)
        }))), IB
      }
    }
    QI("collection", {
      constructor: oT
    });
    class GT {
      [gB];
      [vB];
      [qB];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= OI()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= OI()).priority = BB
      }
      static[cB] = rZ;
      static[nB] = DZ;
      static COLLECTION_KIND = AZ;
      static[hB](BB, IB, ZB) {
        return !ZB || "string" === typeof BB[qB] || ZB.isVisible((BB[zB](IB) ?? BB.deletedItems[IB])[gB])
      }
      static is(BB) {
        return void 0 !== BB.set
      }
      constructor(BB) {
        Object.defineProperty(this, gB, {
          value: new aZ(this),
          enumerable: !1,
          writable: !0
        }), this[qB] = void 0, BB && BB.forEach((BB => this.add(BB)))
      }
      static initializeForDecoder() {
        const BB = Object.create(GT.prototype);
        return BB.$items = new Map, BB.deletedItems = {}, BB.$refId = 0, BB[qB] = void 0, MZ(BB), BB
      }
      add(BB) {
        if (this.has(BB)) return !1;
        const IB = this.$refId++,
          ZB = this[gB];
        return this.$items.set(IB, BB), ZB.isStreamCollection ? void 0 !== ZB.root && iI(this, ZB.root, IB) : ZB.change(IB, JB.ADD), void 0 !== BB[gB] && BB[gB].setParent(this, ZB.root, IB), IB
      }
      entries() {
        return this.$items.entries()
      }
      delete(BB) {
        const IB = this.$items.entries();
        let ZB, TB;
        for (;
          (TB = IB.next()) && !TB.done;)
          if (BB === TB.value[1]) {
            ZB = TB.value[0];
            break
          } if (void 0 === ZB) return !1;
        const JB = this[gB];
        if (JB.isStreamCollection) {
          const BB = JB.root,
            IB = this.$items.get(ZB);
          return void 0 !== BB && pI(this, BB, this[vB], ZB), void 0 !== IB?.[gB] && BB?.remove(IB[gB]), this.deletedItems[ZB] = IB, this.$items.delete(ZB)
        }
        return this.deletedItems[ZB] = JB.delete(ZB), this.$items.delete(ZB)
      }
      clear() {
        const BB = this[gB];
        BB.discard(), this.$items.clear(), BB.operation(JB.CLEAR)
      } [WB]() {
        const BB = this[gB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[WB]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, BB.recycle(), this[vB] = void 0
      }
      has(BB) {
        const IB = this.$items.values();
        let ZB, TB = !1;
        for (;
          (ZB = IB.next()) && !ZB.done;)
          if (BB === ZB.value) {
            TB = !0;
            break
          } return TB
      }
      forEach(BB) {
        this.$items.forEach(((IB, ZB, TB) => BB(IB, ZB, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[gB].pause()
      }
      resumeTracking() {
        this[gB].resume()
      }
      untracked(BB) {
        return this[gB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[gB].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(BB, IB) {}
      getIndex(BB) {
        return BB
      } [zB](BB) {
        return this.$items.get(BB)
      } [FB](BB) {
        this.$items.delete(BB)
      } [NB](BB, IB, ZB) {
        let TB = null;
        if (this.$items.forEach(((JB, oB) => {
            BB.has(oB) ? ZB(JB) : ((TB ??= []).push(oB), IB(JB, oB))
          })), null !== TB)
          for (let JB = 0; JB < TB.length; JB++) this[FB](TB[JB])
      } [UB]() {
        for (const BB in this.deletedItems) delete this.deletedItems[BB]
      }
      _dropView(BB) {
        jI(this, BB)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach(((IB, ZB) => {
          BB.push("function" === typeof IB.toJSON ? IB.toJSON() : IB)
        })), BB
      }
      clone(BB) {
        let IB;
        return BB ? IB = Object.assign(new GT, this) : (IB = new GT, this.forEach((BB => {
          BB[gB] ? IB.add(BB.clone()) : IB.add(BB)
        }))), IB
      }
    }
    QI("set", {
      constructor: GT
    });
    class vT {
      [gB];
      [vB];
      [qB];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= OI()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= OI()).priority = BB
      }
      static $isStream = !0;
      static[cB] = rZ;
      static[nB] = DZ;
      static COLLECTION_KIND = bZ;
      static[hB](BB, IB, ZB) {
        if (!ZB) return !0;
        const TB = BB[zB](IB);
        return void 0 !== TB && ZB.isVisible(TB[gB])
      }
      static is(BB) {
        return BB && void 0 !== BB.stream
      }
      constructor() {
        Object.defineProperty(this, gB, {
          value: new aZ(this),
          enumerable: !1,
          writable: !0
        }), this[qB] = void 0
      }
      static initializeForDecoder() {
        const BB = Object.create(vT.prototype);
        return BB.$items = new Map, BB.$nextPosition = 0, BB._itemIndex = new Map, BB[qB] = void 0, MZ(BB), BB
      }
      add(BB) {
        if (this._itemIndex.has(BB)) return -1;
        const IB = this.$nextPosition++;
        this.$items.set(IB, BB), this._itemIndex.set(BB, IB);
        const ZB = this[gB].root;
        return void 0 !== BB[gB] && BB[gB].setParent(this, ZB, IB), void 0 !== ZB && iI(this, ZB, IB), IB
      }
      remove(BB) {
        const IB = this._itemIndex.get(BB);
        if (void 0 === IB) return !1;
        this._itemIndex.delete(BB), this.$items.delete(IB);
        const ZB = this[gB].root;
        return void 0 !== ZB && (pI(this, ZB, this[vB], IB), void 0 !== BB[gB] && ZB.remove(BB[gB])), !0
      }
      has(BB) {
        return this._itemIndex.has(BB)
      }
      clear() {
        const BB = this[gB].root;
        if (void 0 !== BB) {
          ! function(BB, IB, ZB) {
            const TB = BB._stream;
            if (void 0 !== TB) {
              TB.broadcastPending.clear();
              for (const BB of TB.sentBroadcast) TB.broadcastDeletes.add(BB);
              TB.sentBroadcast.clear(), IB.forEachActiveView((BB => {
                TB.pendingByView.get(BB.id)?.clear();
                const IB = TB.sentByView.get(BB.id);
                if (void 0 !== IB && IB.size > 0) {
                  let TB = BB.changes.get(ZB);
                  void 0 === TB && (TB = new Map, BB.changes.set(ZB, TB));
                  for (const BB of IB) TB.set(BB, JB.DELETE);
                  IB.clear()
                }
              }))
            }
          }(this, BB, this[vB]);
          for (const IB of this.$items.values()) void 0 !== IB[gB] && BB.remove(IB[gB])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(BB) {
        for (const [IB, ZB] of this.$items) BB(ZB, IB, this)
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
      setIndex(BB, IB) {}
      getIndex(BB) {
        return BB
      } [zB](BB) {
        return this.$items.get(BB)
      } [FB](BB) {
        const IB = this.$items.get(BB);
        void 0 !== IB && (this._itemIndex.delete(IB), this.$items.delete(BB))
      } [NB]() {} [UB]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach((IB => {
          BB.push("function" === typeof IB?.toJSON ? IB.toJSON() : IB)
        })), BB
      }
      clone(BB) {
        if (BB) {
          return Object.assign(new vT, this)
        }
        const IB = new vT;
        return IB.maxPerTick = this.maxPerTick, this.forEach((BB => {
          IB.add("function" === typeof BB?.clone ? BB.clone() : BB)
        })), IB
      }
      _dropView(BB) {
        jI(this, BB)
      }
      _unregister() {}
    }
    QI("stream", {
      constructor: vT
    });
    class kT {
      [QB] = !0;
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
      constructor(BB) {
        this._type = BB
      }
      default (BB) {
        return this._default = BB, this._hasDefault = !0, this
      }
      view(BB) {
        return this._view = BB ?? -1, this
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
        const BB = this._type;
        if (BB && "object" === typeof BB && void 0 !== BB.array) throw new Error(wI);
        return this._stream = !0, this
      }
      priority(BB) {
        return this._streamPriority = BB, this
      }
      deprecated() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = BB, this
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

    function cT(BB) {
      return null != BB && !0 === BB[QB]
    }

    function nT(BB) {
      return () => new kT(BB)
    }

    function hT(BB) {
      if (cT(BB)) {
        const IB = BB._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof IB?`use the type name instead: t.array("${IB}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return BB
    }

    function zT(BB) {
      return new kT({
        quantized: RI(BB)
      })
    }
    const FT = Object.freeze({
        string: nT("string"),
        number: nT("number"),
        boolean: nT("boolean"),
        int8: nT("int8"),
        uint8: nT("uint8"),
        int16: nT("int16"),
        uint16: nT("uint16"),
        int32: nT("int32"),
        uint32: nT("uint32"),
        int64: nT("int64"),
        uint64: nT("uint64"),
        float32: nT("float32"),
        float64: nT("float64"),
        bigint64: nT("bigint64"),
        biguint64: nT("biguint64"),
        ref: BB => new kT(BB),
        array: BB => new kT({
          array: hT(BB)
        }),
        map: BB => new kT({
          map: hT(BB)
        }),
        set: BB => new kT({
          set: hT(BB)
        }),
        collection: BB => new kT({
          collection: hT(BB)
        }),
        stream: BB => {
          const IB = new kT({
            stream: hT(BB)
          });
          return IB._stream = !0, IB
        },
        quantized: zT,
        angle: BB => zT({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: BB?.bits ?? 16
        })
      }),
      NT = -1;

    function gT(BB) {
      return eI.register(BB), BB
    }

    function qT() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NT;
      return function(IB, ZB) {
        const TB = xI.initialize(IB.constructor);
        xI.setTag(TB, ZB, BB)
      }
    }

    function yT(BB, IB) {
      const ZB = xI.initialize(BB.constructor);
      xI.setUnreliable(ZB, IB)
    }

    function UT(BB, IB) {
      const ZB = xI.initialize(BB.constructor);
      xI.setPatchOnly(ZB, IB)
    }

    function WT(BB, IB) {
      const ZB = xI.initialize(BB.constructor);
      xI.setFullStateOnly(ZB, IB)
    }

    function dT(BB, IB) {
      return function(ZB, TB) {
        const JB = ZB.constructor;
        if (!BB) throw new Error(`${JB.name}: @type() reference provided for "${TB}" is undefined. Make sure you don't have any circular dependencies.`);
        BB = fI(BB, `${JB.name}.${TB}`), eI.register(JB);
        const oB = Object.getPrototypeOf(JB)[Symbol.metadata],
          GB = xI.initialize(JB);
        let vB = GB[TB];
        if (void 0 !== GB[vB]) {
          if (GB[vB].deprecated) return;
          if (void 0 !== GB[vB].type) {
            const BB = new Error(`@colyseus/schema: Duplicate '${TB}' definition on '${JB.name}'.\nCheck @type() annotation`);
            throw new Error(`${BB.message} ${BB.stack.split("\n")[4].trim()}`)
          }
        } else vB = GB[YB] ?? (oB && oB[YB]) ?? -1, vB++;
        if (IB && IB.manual) xI.addField(GB, vB, TB, BB, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: IB,
            childType: ZB
          } = uI(BB);
          xI.addField(GB, vB, TB, BB, QT(TB, vB, ZB, IB))
        }
        GB[sB][TB] && Object.defineProperty(ZB, TB, GB[sB][TB]), ("string" === typeof BB || rI(BB)) && (GB[OB] || Object.defineProperty(GB, OB, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), GB[OB][vB] = "string" === typeof BB ? II[BB] : LI(BB.quantized))
      }
    }
    const CT = {
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

    function QT(BB, IB, ZB, TB) {
      let oB;
      return oB = TB ? function(BB, IB, ZB, TB) {
        const oB = TB.constructor === ZT,
          GB = TB.constructor === JT;
        return function(BB) {
          const TB = this[CB],
            vB = TB[IB];
          if (BB !== vB) {
            if (void 0 !== BB && null !== BB) {
              if (!oB || BB instanceof ZT)
                if (!GB || BB instanceof JT) BB[qB] = ZB;
                else {
                  const IB = new JT;
                  if (IB[qB] = ZB, BB instanceof Map) BB.forEach(((BB, ZB) => IB.set(ZB, BB)));
                  else
                    for (const ZB in BB) IB.set(ZB, BB[ZB]);
                  BB = IB
                }
              else {
                const IB = new ZT;
                IB[qB] = ZB, IB.push(...BB), BB = IB
              }
              const TB = this[gB],
                cB = this.constructor;
              void 0 !== vB && null !== vB && vB[gB] ? (TB.root?.remove(vB[gB]), cB[kB](TB, IB, JB.DELETE_AND_ADD)) : cB[kB](TB, IB, JB.ADD), BB[gB]?.setParent(this, TB.root, IB)
            } else void 0 !== vB && null !== vB && this[gB].delete(IB);
            TB[IB] = BB
          }
        }
      }(0, IB, ZB, TB) : "string" === typeof ZB ? function(BB, IB, ZB) {
        const TB = CT[ZB],
          oB = "string" === ZB,
          GB = "boolean" === ZB;
        return function(ZB) {
          const vB = this[CB],
            cB = vB[IB];
          if (ZB !== cB) {
            if (void 0 !== ZB && null !== ZB) {
              if (!GB && void 0 !== TB && typeof ZB !== TB && (!oB || null !== ZB)) {
                const IB = ZB && ZB.constructor ? ` (${ZB.constructor.name})` : "";
                throw new VZ(`a '${TB}' was expected, but '${JSON.stringify(ZB)}'${IB} was provided in ${this.constructor.name}#${BB}`)
              }
              this.constructor[kB](this[gB], IB, JB.ADD)
            } else void 0 !== cB && null !== cB && this[gB].delete(IB);
            vB[IB] = ZB
          }
        }
      }(BB, IB, ZB) : rI(ZB) ? function(BB, IB, ZB) {
        return function(TB) {
          const oB = this[CB],
            GB = oB[IB];
          if (void 0 !== TB && null !== TB) {
            if ("number" !== typeof TB) throw new VZ(`a 'number' was expected, but '${JSON.stringify(TB)}' was provided in ${this.constructor.name}#${BB}`);
            if ((TB = XI(ZB, mI(ZB, TB))) === GB) return;
            this.constructor[kB](this[gB], IB, JB.ADD)
          } else {
            if (TB === GB) return;
            void 0 !== GB && null !== GB && this[gB].delete(IB)
          }
          oB[IB] = TB
        }
      }(BB, IB, ZB.quantized) : function(BB, IB, ZB) {
        return function(TB) {
          const oB = this[CB],
            GB = oB[IB];
          if (TB !== GB) {
            if (void 0 !== TB && null !== TB) {
              SZ(TB, ZB, this, BB);
              const oB = this[gB],
                vB = this.constructor;
              void 0 !== GB && null !== GB && GB[gB] ? (oB.root?.remove(GB[gB]), vB[kB](oB, IB, JB.DELETE_AND_ADD)) : vB[kB](oB, IB, JB.ADD), TB[gB]?.setParent(this, oB.root, IB)
            } else void 0 !== GB && null !== GB && this[gB].delete(IB);
            oB[IB] = TB
          }
        }
      }(BB, IB, ZB), {
        get: function() {
          return this[CB][IB]
        },
        set: oB,
        enumerable: !0,
        configurable: !0
      }
    }

    function sT() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(IB, ZB) {
        const TB = xI.initialize(IB.constructor);
        xI.setDeprecated(TB, ZB), BB && (TB[sB] ??= {}, TB[sB][ZB] = {
          get: function() {
            throw new Error(`${ZB} is deprecated.`)
          },
          set: function(BB) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(IB, ZB, TB[sB][ZB]))
      }
    }
    let wT = !1;

    function OT(BB, IB, ZB) {
      wT || (wT = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let TB in IB) dT(IB[TB], ZB)(BB.prototype, TB);
      return BB
    }

    function YT(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pT;
      if (null == BB || "object" !== typeof BB) throw new Error(`schema(): first argument must be a fields object (got ${typeof BB}).`);
      const TB = {},
        JB = {},
        oB = {},
        GB = {},
        vB = (BB, IB) => {
          if (IB.hasDefault)((BB, IB) => {
            "function" === typeof IB ? GB[BB] = IB : IB && "function" === typeof IB.clone ? GB[BB] = () => IB.clone() : oB[BB] = IB
          })(BB, IB.default);
          else if (!IB.optional) {
            const ZB = function(BB) {
              if (BB && "object" === typeof BB) {
                if (void 0 !== BB.array) return () => new ZT;
                if (void 0 !== BB.map) return () => new JT;
                if (void 0 !== BB.set) return () => new GT;
                if (void 0 !== BB.collection) return () => new oT;
                if (void 0 !== BB.stream) return () => new vT
              } else if ("function" === typeof BB && pT.is(BB) && (!BB.prototype.initialize || 0 === BB.prototype.initialize.length)) return () => new BB
            }(IB.type);
            ZB && (GB[BB] = ZB)
          }
        },
        kB = {},
        cB = [],
        nB = [],
        hB = {},
        zB = [],
        FB = [],
        NB = {},
        gB = [];
      for (const CB in BB) {
        const ZB = BB[CB],
          oB = `schema(${IB?`'${IB}'`:""}): field '${CB}'`;
        if (cT(ZB)) {
          const BB = ZB.toDefinition();
          if (BB.noSync) {
            if (void 0 !== BB.view || BB.unreliable || BB.patchOnly || BB.fullStateOnly || BB.stream) throw new Error(`${oB} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            vB(CB, BB);
            continue
          }
          if (BB.patchOnly && BB.fullStateOnly) throw new Error(`${oB} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const IB = fI(BB.type, oB);
          if ("function" === typeof IB && !pT.is(IB)) throw new Error(`${oB} is a synced ref to non-Schema class '${IB.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          TB[CB] = IB, void 0 !== BB.view && (kB[CB] = BB.view), BB.unreliable && cB.push(CB), BB.patchOnly && nB.push(CB), BB.deprecated && (hB[CB] = BB.deprecatedThrows), BB.fullStateOnly && zB.push(CB), BB.stream && FB.push(CB), void 0 !== BB.streamPriority && (NB[CB] = BB.streamPriority), BB.optional && gB.push(CB), vB(CB, BB)
        } else {
          if ("function" !== typeof ZB) throw new Error(`${oB} must be a t.* builder, Schema subclass, or method (got ${typeof ZB}).`);
          pT.is(ZB) ? (TB[CB] = ZB, ZB.prototype.initialize && 0 !== ZB.prototype.initialize.length || (GB[CB] = () => new ZB)) : JB[CB] = ZB
        }
      }
      const qB = BB => {
          for (const IB in oB) BB[IB] = oB[IB];
          for (const IB in GB) BB[IB] = GB[IB]()
        },
        yB = () => {
          const BB = {};
          return qB(BB), BB
        },
        UB = "function" === typeof JB.initialize,
        WB = JB.initialize ?? ZB._initialize,
        dB = class extends ZB {
          constructor() {
            for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
            const JB = IB[0];
            void 0 === JB ? (super(), qB(this)) : super(Object.assign(yB(), UB ? (BB => {
              const IB = Object.keys(TB),
                ZB = {};
              for (const TB in BB) IB.includes(TB) || (ZB[TB] = BB[TB]);
              return ZB
            })(JB) : JB)), WB && new.target === dB && WB.apply(this, IB)
          }
        };
      IB && Object.defineProperty(dB, "name", {
        value: IB
      }), xI.setFields(dB, TB), dB._getDefaultValues = yB, dB._initialize = WB, Object.assign(dB.prototype, JB);
      for (const CB in kB) qT(kB[CB])(dB.prototype, CB);
      for (const CB of cB) yT(dB.prototype, CB);
      for (const CB of nB) UT(dB.prototype, CB);
      for (const CB in hB) sT(hB[CB])(dB.prototype, CB);
      if (zB.length > 0 || FB.length > 0) {
        const BB = dB[Symbol.metadata];
        for (const IB of zB) xI.setFullStateOnly(BB, IB);
        for (const IB of FB) xI.setStream(BB, IB);
        for (const IB in NB) xI.setStreamPriority(BB, IB, NB[IB])
      }
      if (gB.length > 0) {
        const BB = dB[Symbol.metadata];
        for (const IB of gB) BB[BB[IB]].optional = !0
      }
      return dB.extend = (BB, IB) => YT(BB, IB, dB), dB
    }

    function iT(BB) {
      const IB = BB[gB].root,
        ZB = {
          ops: {},
          refs: []
        };
      let TB = IB.changes.next;
      for (; TB;) {
        const BB = TB.changeTree;
        void 0 !== BB ? (ZB.refs.push(`refId#${BB.ref[vB]}`), BB.forEach(((BB, IB) => {
          if (BB < 0 || !IB) return;
          const TB = JB[IB];
          ZB.ops[TB] || (ZB.ops[TB] = 0), ZB.ops[TB]++
        })), TB = TB.next) : TB = TB.next
      }
      return ZB
    }
    class pT {
      static[cB] = PZ;
      static[nB] = EZ;
      [vB];
      [CB];
      static initialize(BB) {
        Object.defineProperty(BB, gB, {
          value: new aZ(BB),
          enumerable: !1,
          writable: !0
        }), BB[CB] = []
      }
      static initializeForDecoder() {
        const BB = Object.create(this.prototype);
        return MZ(BB), BB[CB] = [], BB
      }
      static reset(BB) {
        const IB = BB?.[gB];
        if (void 0 === IB || "function" !== typeof IB.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== IB.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${BB.constructor.name}) with multiple parents.`);
        BB[WB]()
      } [WB]() {
        const BB = this.constructor[Symbol.metadata],
          IB = BB?.[iB] ?? [],
          ZB = this[CB];
        for (let TB = 0; TB < IB.length; TB++) {
          const BB = ZB[IB[TB]];
          BB?.[WB]?.()
        }
        this[gB].recycle(), this[vB] = void 0
      }
      static is(BB) {
        const IB = BB[Symbol.metadata];
        return "object" === typeof IB && null !== IB
      }
      static isSchema(BB) {
        return "function" === typeof BB?.assign
      }
      static[kB](BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JB.ADD;
        BB.change(IB, ZB)
      }
      static[hB](BB, IB, ZB) {
        const TB = BB.constructor[Symbol.metadata],
          JB = TB[IB]?.tag;
        return void 0 === ZB ? void 0 === JB : void 0 === JB || (JB === NT ? ZB.isChangeTreeVisible(BB[gB]) : ZB.hasTagOnTree(BB[gB], JB))
      }
      constructor(BB) {
        pT.initialize(this), BB && pT.assignProps(this, BB)
      }
      assign(BB) {
        return pT.assignProps(this, BB), this
      }
      static assignProps(BB, IB) {
        const ZB = BB.constructor[Symbol.metadata];
        if (ZB && void 0 !== ZB[YB])
          for (let JB = 0; JB <= ZB[YB]; JB++) {
            const TB = ZB[JB];
            if (!TB) continue;
            const oB = IB[TB.name];
            void 0 !== oB && (BB[TB.name] = oB)
          }
        const TB = Object.keys(IB);
        for (let JB = 0; JB < TB.length; JB++) {
          const oB = TB[JB];
          ZB && void 0 !== ZB[oB] || (BB[oB] = IB[oB])
        }
      }
      restore(BB) {
        const IB = this.constructor[Symbol.metadata];
        for (const ZB in IB) {
          const TB = IB[ZB],
            JB = TB.name,
            oB = TB.type,
            GB = BB[JB];
          if (void 0 !== GB && null !== GB)
            if ("string" === typeof oB) this[JB] = GB;
            else if (pT.is(oB)) {
            const BB = new oB;
            BB.restore(GB), this[JB] = BB
          } else if ("object" === typeof oB) {
            const BB = Object.keys(oB)[0],
              IB = oB[BB];
            if ("map" === BB) {
              const BB = this[JB];
              for (const ZB in GB)
                if (pT.is(IB)) {
                  const TB = new IB;
                  TB.restore(GB[ZB]), BB.set(ZB, TB)
                } else BB.set(ZB, GB[ZB])
            } else if ("array" === BB) {
              const BB = this[JB];
              for (let ZB = 0; ZB < GB.length; ZB++)
                if (pT.is(IB)) {
                  const TB = new IB;
                  TB.restore(GB[ZB]), BB.push(TB)
                } else BB.push(GB[ZB])
            }
          }
        }
        return this
      }
      setDirty(BB, IB) {
        const ZB = this.constructor[Symbol.metadata];
        this[gB].change(ZB[ZB[BB]].index, IB)
      }
      pauseTracking() {
        this[gB].pause()
      }
      resumeTracking() {
        this[gB].resume()
      }
      untracked(BB) {
        return this[gB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[gB].paused
      }
      clone() {
        const BB = Object.create(this.constructor.prototype);
        pT.initialize(BB);
        const IB = this.constructor[Symbol.metadata];
        for (const ZB in IB) {
          const TB = IB[ZB].name;
          "object" === typeof this[TB] && "function" === typeof this[TB]?.clone ? BB[TB] = this[TB].clone() : BB[TB] = this[TB]
        }
        return BB
      }
      toJSON() {
        const BB = {},
          IB = this.constructor[Symbol.metadata];
        for (const ZB in IB) {
          const TB = IB[ZB],
            JB = TB.name;
          TB.deprecated || null === this[JB] || "undefined" === typeof this[JB] || (BB[JB] = "function" === typeof this[JB].toJSON ? this[JB].toJSON() : this[JB])
        }
        return BB
      }
      discardAllChanges() {
        this[gB].discardAll()
      } [zB](BB) {
        return this[this.constructor[Symbol.metadata][BB].name]
      } [FB](BB) {
        this[this.constructor[Symbol.metadata][BB].name] = void 0
      }
      static debugRefIds(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 ? arguments[3] : void 0,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const oB = IB ? ` - ${JSON.stringify(BB.toJSON())}` : "",
          GB = BB[gB],
          kB = BB[vB],
          cB = TB ? TB.root.refCount[kB] : GB.refCount,
          nB = cB > 1 ? ` [\xd7${cB}]` : "";
        let hB = `${function(BB){return new Array(BB).fill(0).map(((IB,ZB)=>ZB===BB-1?"\u2514\u2500 ":"   ")).join("")}(ZB)}${JB}${BB.constructor.name} (refId: ${kB})${nB}${oB}\n`;
        return GB.forEachChild(((JB, oB) => {
          let GB = oB;
          "number" === typeof oB && BB.$indexes && (GB = BB.$indexes.get(oB) ?? oB);
          const vB = void 0 !== BB.forEach && void 0 !== GB ? `["${GB}"]: ` : "";
          hB += this.debugRefIds(JB.ref, IB, ZB + 1, TB, vB)
        })), hB
      }
      static debugRefIdEncodingOrder(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const ZB = [],
          TB = BB[gB];
        if ("changes" === IB) {
          let BB = TB.root.changes?.next;
          for (; BB;) BB.changeTree && ZB.push(BB.changeTree.ref[vB]), BB = BB.next;
          return ZB
        }
        const JB = "allFilteredChanges" === IB,
          oB = new Set,
          GB = BB => {
            oB.has(BB) || (oB.add(BB), BB.isFiltered === JB && ZB.push(BB.ref[vB]), BB.forEachChild(((BB, IB) => GB(BB))))
          };
        return GB(TB), ZB
      }
      static debugRefIdsFromDecoder(BB) {
        return this.debugRefIds(BB.state, !1, 0, BB)
      }
      static debugChanges(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = BB[gB],
          TB = IB ? "allChanges" : "changes";
        let oB = `${BB.constructor.name} (${BB[vB]}) -> .${TB}:\n`;
        return IB ? ZB.forEachLive((BB => {
          oB += `- [${BB}]: ADD (${JSON.stringify(ZB.getValue(Number(BB),!0))})\n`
        })) : ZB.forEach(((BB, IB) => {
          BB < 0 || !IB || (oB += `- [${BB}]: ${JB[IB]} (${JSON.stringify(ZB.getValue(Number(BB),!1))})\n`)
        })), oB
      }
    }
    oB(pT);
    const aT = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class HT {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const BB = {};
        for (const IB in this.changeTrees) BB[IB] = this.changeTrees[IB].refCount;
        return BB
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
      enqueueFilterRefresh(BB) {
        this.types.hasFilters && (BB.flags & iZ || (BB.flags |= iZ, this.pendingFilterRefresh.push(BB)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(BB) {
        this._freeViewIds.push(BB)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(BB) {
        this.activeViews.set(BB.id, new WeakRef(BB))
      }
      unregisterView(BB) {
        this.activeViews.delete(BB.id);
        const IB = BB.id;
        for (const ZB of this.streamTrees) ZB._dropView(IB)
      }
      forEachActiveView(BB) {
        for (const [IB, ZB] of this.activeViews) {
          const TB = ZB.deref();
          if (void 0 !== TB) BB(TB);
          else {
            this.activeViews.delete(IB);
            for (const BB of this.streamTrees) BB._dropView(IB)
          }
        }
      }
      registerStream(BB) {
        this.streamTrees.add(BB)
      }
      unregisterStream(BB) {
        this.streamTrees.delete(BB)
      }
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = BB, this.nextUniqueId = IB
      }
      add(BB) {
        const IB = BB.ref;
        void 0 === IB[vB] && (aT.value = this.nextUniqueId++, Object.defineProperty(IB, vB, aT));
        const ZB = IB[vB],
          TB = void 0 === this.changeTrees[ZB];
        TB && (this.changeTrees[ZB] = BB), BB.needsRestage && (BB.needsRestage = !1, BB.forEachLiveWithCtx(BB, ZZ));
        const JB = TB ? 0 : BB.refCount;
        return BB.refCount = JB + 1, JB > 0 && this.enqueueFilterRefresh(BB), TB
      }
      remove(BB) {
        const IB = BB.refCount - 1;
        if (IB <= 0) {
          if (BB.root = void 0, delete this.changeTrees[BB.ref[vB]], BB.isStreamCollection) {
            const IB = BB.ref;
            IB._unregister?.(), this.unregisterStream(IB)
          }
          this.removeFromQueue(BB), this.removeFromUnreliableQueue(BB), BB.refCount = 0, BB.needsRestage = !0, BB.forEachChild(((IB, ZB) => {
            IB.removeParent(BB.ref) && (void 0 === IB.parentRef || IB.refCount > 0 ? this.remove(IB) : this.moveNextToParent(IB))
          }))
        } else BB.refCount = IB, this.enqueueFilterRefresh(BB), this.recursivelyMoveNextToParent(BB);
        return IB
      }
      recursivelyMoveNextToParent(BB) {
        this.moveNextToParent(BB), BB.forEachChild(((BB, IB) => this.recursivelyMoveNextToParent(BB)))
      }
      moveNextToParent(BB) {
        BB.changesNode && this._moveNextToParentInList(this.changes, BB, BB.changesNode, "changesNode"), BB.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, BB, BB.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(BB, IB, ZB, TB) {
        const JB = IB.parent;
        if (!JB || !JB[gB]) return;
        const oB = JB[gB][TB];
        oB && oB !== ZB && (ZB.position > oB.position || (ZB.prev ? ZB.prev.next = ZB.next : BB.next = ZB.next, ZB.next ? ZB.next.prev = ZB.prev : BB.tail = ZB.prev, ZB.prev = BB.tail, ZB.next = void 0, BB.tail.next = ZB, BB.tail = ZB, ZB.position = BB.nextPosition++))
      }
      enqueueChangeTree(BB) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.changesNode) || (BB.changesNode = this._appendToList(this.changes, BB))
      }
      enqueueUnreliable(BB) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.unreliableChangesNode) || (BB.unreliableChangesNode = this._appendToList(this.unreliableChanges, BB))
      }
      _appendToList(BB, IB) {
        const ZB = this._nodePool;
        let TB;
        return ZB.length > 0 ? (TB = ZB.pop(), TB.changeTree = IB, TB.next = void 0, TB.prev = void 0) : TB = {
          changeTree: IB,
          next: void 0,
          prev: void 0,
          position: 0
        }, BB.next ? (TB.prev = BB.tail, BB.tail.next = TB, BB.tail = TB) : (BB.nextPosition = 0, BB.next = TB, BB.tail = TB), TB.position = BB.nextPosition++, TB
      }
      releaseNode(BB) {
        BB.changeTree = void 0, BB.prev = void 0, BB.next = void 0, this._nodePool.push(BB)
      }
      removeFromQueue(BB) {
        return this._removeNode(this.changes, BB, BB.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(BB) {
        return this._removeNode(this.unreliableChanges, BB, BB.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(BB, IB, ZB, TB) {
        return !(!ZB || ZB.changeTree !== IB) && (ZB.prev ? ZB.prev.next = ZB.next : BB.next = ZB.next, ZB.next ? ZB.next.prev = ZB.prev : BB.tail = ZB.prev, IB[TB] = void 0, this.releaseNode(ZB), !0)
      }
    }

    function MT(BB, IB) {
      if (-1 === IB || IB >= BB.length) return !1;
      const ZB = BB.length - 1;
      for (let TB = IB; TB < ZB; TB++) BB[TB] = BB[TB + 1];
      return BB.length = ZB, !0
    }

    function jT(BB, IB, ZB) {
      const TB = ~ZB,
        JB = BB.changeTrees;
      for (const oB in JB) {
        const BB = JB[oB],
          ZB = BB.visibleViews;
        void 0 !== ZB && IB < ZB.length && (ZB[IB] &= TB);
        const GB = BB.subscribedViews;
        void 0 !== GB && IB < GB.length && (GB[IB] &= TB);
        const vB = BB.tagViews;
        void 0 !== vB && vB.forEach((BB => {
          IB < BB.length && (BB[IB] &= TB)
        }))
      }
    }
    const PT = new FinalizationRegistry((BB => {
      let {
        root: IB,
        id: ZB,
        slot: TB,
        bit: JB
      } = BB;
      jT(IB, TB, JB), IB.activeViews.delete(ZB);
      for (const oB of IB.streamTrees) oB._dropView(ZB);
      IB.releaseViewId(ZB)
    }));

    function RT(BB) {
      if (void 0 === BB) return "undefined";
      if (null === BB) return "null";
      const IB = typeof BB;
      return "string" === IB ? JSON.stringify(BB.length > 30 ? `${BB.slice(0,30)}\u2026` : BB) : "object" !== IB && "function" !== IB ? `${IB} ${String(BB)}` : Array.isArray(BB) ? `Array(${BB.length})` : BB.constructor?.name ?? "Object"
    }
    class rT {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = BB, BB && (this.items = [])
      }
      _bindRoot(BB) {
        void 0 === this._root && (this._root = BB, this.id = BB.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), BB.registerView(this), PT.register(this, {
          root: BB,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), jT(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), PT.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(BB) {
        const IB = BB.visibleViews,
          ZB = this._slot;
        return void 0 !== IB && ZB < IB.length && 0 !== (IB[ZB] & this._bit)
      }
      markVisible(BB) {
        const IB = this._slot;
        let ZB = BB.visibleViews;
        for (void 0 === ZB && (ZB = BB.visibleViews = []); ZB.length <= IB;) ZB.push(0);
        ZB[IB] |= this._bit
      }
      unmarkVisible(BB) {
        const IB = BB.visibleViews;
        if (void 0 === IB) return;
        const ZB = this._slot;
        ZB < IB.length && (IB[ZB] &= ~this._bit)
      }
      isSubscribed(BB) {
        const IB = BB.subscribedViews,
          ZB = this._slot;
        return void 0 !== IB && ZB < IB.length && 0 !== (IB[ZB] & this._bit)
      }
      _setSubscribed(BB) {
        const IB = this._slot;
        let ZB = BB.subscribedViews;
        for (void 0 === ZB && (ZB = BB.subscribedViews = []); ZB.length <= IB;) ZB.push(0);
        ZB[IB] |= this._bit
      }
      _clearSubscribed(BB) {
        const IB = BB.subscribedViews;
        if (void 0 === IB) return;
        const ZB = this._slot;
        ZB < IB.length && (IB[ZB] &= ~this._bit)
      }
      hasTagOnTree(BB, IB) {
        const ZB = BB.tagViews;
        if (void 0 === ZB) return !1;
        const TB = this._slot,
          JB = this._bit;
        for (let oB = IB; 0 !== oB; oB &= oB - 1) {
          const BB = ZB.get(oB & -oB);
          if (void 0 !== BB && TB < BB.length && 0 !== (BB[TB] & JB)) return !0
        }
        return !1
      }
      addTag(BB, IB) {
        if (IB === NT) return;
        let ZB = BB.tagViews;
        void 0 === ZB && (ZB = BB.tagViews = new Map);
        const TB = this._slot,
          JB = this._bit;
        for (let oB = IB; oB > 0; oB &= oB - 1) {
          const BB = oB & -oB;
          let IB = ZB.get(BB);
          for (void 0 === IB && (IB = [], ZB.set(BB, IB)); IB.length <= TB;) IB.push(0);
          IB[TB] |= JB
        }
      }
      removeTag(BB, IB) {
        if (IB === NT) return;
        const ZB = BB.tagViews;
        if (void 0 === ZB) return;
        const TB = this._slot,
          JB = ~this._bit;
        for (let oB = IB; oB > 0; oB &= oB - 1) {
          const BB = ZB.get(oB & -oB);
          void 0 !== BB && TB < BB.length && (BB[TB] &= JB)
        }
      }
      removeAllTagsOnTree(BB) {
        const IB = BB.tagViews;
        if (void 0 === IB) return;
        const ZB = this._slot,
          TB = ~this._bit;
        IB.forEach((BB => {
          ZB < BB.length && (BB[ZB] &= TB)
        }))
      }
      add(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NT,
          ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(BB, IB, ZB, !1)
      }
      _addImmediate(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NT;
        this._add(BB, IB, !0, !0)
      }
      _add(BB, IB, ZB, TB) {
        const oB = BB?.[gB];
        if (!oB) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${RT(BB)}`), !1;
        const GB = oB.parent;
        if (!GB && 0 !== BB[vB]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${oB.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== oB.root && this._bindRoot(oB.root);
        const kB = GB?.[gB];
        if (!TB && kB?.isStreamCollection) return MI(GB, this.id, oB.parentIndex), !0;
        const cB = BB.constructor[Symbol.metadata],
          nB = this.isVisible(oB);
        if (!this.iterable || !ZB || nB && -1 !== this.items.indexOf(BB) || this.items.push(BB), this.markVisible(oB), ZB && GB && this.addParentOf(oB, IB), !TB && oB.isStreamCollection) return !0;
        if (IB === NT && oB.isNew) return this._markSubtreeVisible(oB, IB), !1;
        let hB = this.changes.get(BB[vB]);
        void 0 === hB && (hB = new Map, this.changes.set(BB[vB], hB));
        let zB = !1;
        const FB = oB.encDescriptor.tags;
        if (oB.forEachChild(((BB, ZB) => {
            const TB = FB[ZB];
            if (void 0 !== TB) {
              if (!(TB === NT || IB !== NT && 0 !== (TB & IB))) return
            }
            this.add(BB.ref, IB, !1) && (zB = !0)
          })), IB !== NT) {
          this.addTag(oB, IB);
          const BB = cB?.[aB];
          if (void 0 !== BB)
            for (let ZB = IB; ZB > 0; ZB &= ZB - 1) BB[ZB & -ZB]?.forEach((BB => {
              oB.getChange(BB) !== JB.DELETE && hB.set(BB, JB.ADD)
            }))
        }
        if ((IB === NT || !nB) && (!oB.isNew || zB))
          if (oB.isArray && "string" !== typeof oB.refTarget[qB]) oB.refTarget.items.length > 0 && (hB.set(-1, JB.ADD), zB = !0);
          else {
            const BB = oB.encDescriptor.tags;
            oB.forEachLive((ZB => {
              const TB = BB[ZB];
              (void 0 === TB || TB === NT || IB !== NT && 0 !== (TB & IB)) && (hB.set(ZB, JB.ADD), zB = !0)
            }))
          } return zB
      }
      _markSubtreeVisible(BB, IB) {
        const ZB = BB.encDescriptor.tags;
        BB.forEachChild(((BB, TB) => {
          const JB = ZB[TB];
          if (void 0 !== JB) {
            if (!(JB === NT || IB !== NT && 0 !== (JB & IB))) return
          }
          BB.isNew ? (this.markVisible(BB), this._markSubtreeVisible(BB, IB)) : this._add(BB.ref, IB, !1, !1)
        }))
      }
      addParentOf(BB, IB) {
        const ZB = BB.parent[gB],
          TB = BB.parentIndex;
        this.isVisible(ZB) || this.markVisible(ZB);
        const oB = ZB.parent?.[gB];
        if (oB && this.addParentOf(ZB, IB), ZB.hasFilteredFields && ZB.getChange(TB) !== JB.DELETE) {
          let oB = this.changes.get(ZB.ref[vB]);
          void 0 === oB && (oB = new Map, this.changes.set(ZB.ref[vB], oB));
          const GB = ZB.encDescriptor.tags[TB];
          void 0 !== GB && GB !== NT && 0 !== (GB & IB) && this.addTag(ZB, IB), oB.set(ZB.isArray ? BB : TB, JB.ADD)
        }
      }
      _touchAncestorsOf(BB) {
        let IB = BB.parent?.[gB];
        if (void 0 === IB) return;
        const ZB = [];
        for (; void 0 !== IB;) {
          if (IB.hasFilteredFields) {
            const BB = IB.ref[vB];
            if (this.changes.has(BB)) break;
            ZB.push(IB)
          }
          IB = IB.parent?.[gB]
        }
        for (let TB = ZB.length - 1; TB >= 0; TB--) this.changes.set(ZB[TB].ref[vB], new Map)
      }
      remove(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NT,
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = BB?.[gB];
        if (!TB) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${RT(BB)}`), this;
        const oB = TB.parent?.[gB];
        if (oB?.isStreamCollection) return this.unmarkVisible(TB), this.iterable && !ZB && MT(this.items, this.items.indexOf(BB)),
          function(BB, IB, ZB, TB, oB) {
            const GB = BB._stream;
            if (void 0 === GB) return !1;
            const vB = GB.pendingByView.get(IB);
            if (vB?.has(TB)) return vB.delete(TB), !1;
            const kB = GB.sentByView.get(IB);
            if (kB?.has(TB)) {
              kB.delete(TB);
              let BB = oB.get(ZB);
              return void 0 === BB && (BB = new Map, oB.set(ZB, BB)), BB.set(TB, JB.DELETE), !0
            }
          }(TB.parent, this.id, TB.parent[vB], TB.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(TB), this;
        if (TB.isStreamCollection) {
          this.unmarkVisible(TB), this.iterable && !ZB && MT(this.items, this.items.indexOf(BB));
          const IB = TB.ref,
            oB = IB._stream;
          if (void 0 !== oB) {
            oB.pendingByView.get(this.id)?.clear();
            const BB = oB.sentByView.get(this.id);
            if (void 0 !== BB && BB.size > 0) {
              const ZB = IB[vB];
              let TB = this.changes.get(ZB);
              void 0 === TB && (TB = new Map, this.changes.set(ZB, TB));
              for (const IB of BB) TB.set(IB, JB.DELETE);
              BB.clear()
            }
          }
          return this
        }
        this.unmarkVisible(TB), this.iterable && !ZB && MT(this.items, this.items.indexOf(BB));
        const GB = TB.ref,
          kB = GB.constructor[Symbol.metadata],
          cB = GB[vB];
        this._touchAncestorsOf(TB);
        let nB = this.changes.get(cB);
        if (void 0 === nB && (nB = new Map, this.changes.set(cB, nB)), IB === NT) {
          const BB = TB.parent;
          if (BB && !xI.isValidInstance(BB) && TB.isFiltered) {
            const IB = oB.isArray ? TB : TB.parentIndex,
              ZB = BB[vB];
            let GB = this.changes.get(ZB);
            void 0 === GB ? (GB = new Map, this.changes.set(ZB, GB)) : GB.get(IB) === JB.ADD && this._dropPendingEntries(TB), GB.set(IB, JB.DELETE), this._recursiveDeleteVisibleChangeTree(TB)
          } else kB?.[pB]?.forEach((BB => this._removeViewField(TB, nB, BB)))
        } else {
          const BB = kB?.[aB];
          if (void 0 !== BB)
            for (let ZB = IB; ZB > 0; ZB &= ZB - 1) BB[ZB & -ZB]?.forEach((BB => this._removeViewField(TB, nB, BB)))
        }
        return void 0 === IB ? this.removeAllTagsOnTree(TB) : this.removeTag(TB, IB), this
      }
      has(BB) {
        return this.isVisible(BB[gB])
      }
      hasTag(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NT;
        return this.hasTagOnTree(BB[gB], IB)
      }
      subscribe(BB, IB) {
        const ZB = BB?.[gB];
        if (!ZB) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${RT(BB)}`), this;
        if (void 0 === this._root && void 0 !== ZB.root && this._bindRoot(ZB.root), void 0 !== IB)
          if (ZB.isStreamCollection) {
            const ZB = YI(BB);
            null === IB ? ZB.priorityByView?.delete(this.id) : (ZB.priorityByView ??= new Map).set(this.id, IB)
          } else {
            const IB = BB?.constructor?.name ?? "collection",
              TB = ZB.parent;
            if (void 0 === TB) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${IB} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const BB = TB?.constructor?.[Symbol.metadata]?.[ZB.parentIndex]?.name,
                JB = BB ? `${TB.constructor.name}#${BB}` : IB;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${JB} is a ${IB}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(ZB)) return this;
        const TB = void 0 !== ZB.parent && !this.isVisible(ZB);
        if (TB ? (this.addParentOf(ZB, NT), this._add(BB, NT, !1, !1)) : this.markVisible(ZB), this._setSubscribed(ZB), ZB.isStreamCollection) {
          const IB = BB;
          ZB.forEachChild(((BB, ZB) => {
            MI(IB, this.id, ZB)
          }))
        } else TB || ZB.forEachChild((BB => {
          this.markVisible(BB)
        }));
        return this
      }
      unsubscribe(BB) {
        const IB = BB?.[gB];
        if (!IB) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${RT(BB)}`), this;
        if (!this.isSubscribed(IB)) return this;
        this._clearSubscribed(IB);
        const ZB = IB.ref[vB];
        if (IB.isStreamCollection) {
          const IB = BB._stream;
          if (void 0 !== IB) {
            IB.pendingByView.get(this.id)?.clear();
            const BB = IB.sentByView.get(this.id);
            if (void 0 !== BB && BB.size > 0) {
              let IB = this.changes.get(ZB);
              void 0 === IB && (IB = new Map, this.changes.set(ZB, IB));
              for (const ZB of BB) IB.set(ZB, JB.DELETE);
              BB.clear()
            }
          }
        } else {
          const BB = IB.isArray;
          let TB = this.changes.get(ZB);
          IB.forEachChild(((IB, oB) => {
            void 0 === TB && (TB = new Map, this.changes.set(ZB, TB)), TB.set(BB ? IB : oB, JB.DELETE), this.unmarkVisible(IB)
          }))
        }
        return this.unmarkVisible(IB), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let BB = 0, IB = this.items.length; BB < IB; BB++) this.remove(this.items[BB], NT, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(BB) {
        let IB = this.isVisible(BB);
        if (!IB && BB.isVisibilitySharedWithParent)
          if (this.isVisible(BB.parent[gB])) this.markVisible(BB), IB = !0;
          else
            for (let ZB = BB.extraParents; void 0 !== ZB; ZB = ZB.next) {
              const TB = ZB.ref[gB];
              if (TB.isFiltered && this.isVisible(TB)) {
                this.markVisible(BB), IB = !0;
                break
              }
            }
        return IB
      }
      _recursiveDeleteVisibleChangeTree(BB) {
        BB.forEachChild((BB => {
          this.unmarkVisible(BB), this._recursiveDeleteVisibleChangeTree(BB)
        }))
      }
      _dropPendingEntries(BB) {
        this.changes.delete(BB.ref[vB]), BB.forEachChild((BB => this._dropPendingEntries(BB)))
      }
      _removeViewField(BB, IB, ZB) {
        const TB = IB.get(ZB) === JB.ADD;
        IB.set(ZB, JB.DELETE);
        const oB = BB.ref[BB.encDescriptor.names[ZB]],
          GB = oB?.[gB];
        GB && (this.unmarkVisible(GB), this._recursiveDeleteVisibleChangeTree(GB), TB && this._dropPendingEntries(GB))
      }
    }

    function mT(BB) {
      BB.structSwitchEmitted || (BB.shouldEmitSwitch && (BB.buffer[BB.it.offset++] = 255, II.number(BB.buffer, BB.ref[vB], BB.it)), BB.structSwitchEmitted = !0)
    }

    function XT(BB, IB) {
      uT(BB, IB, JB.ADD)
    }

    function LT(BB, IB) {
      if (IB._fullSyncGen === BB.gen) return;
      IB._fullSyncGen = BB.gen;
      if (!BB.hasView || BB.view.isChangeTreeVisible(IB)) {
        const ZB = IB.encDescriptor;
        BB.changeTree = IB, BB.ref = IB.ref, BB.encoder = ZB.encoder, BB.filter = ZB.filter, BB.metadata = ZB.metadata, BB.treeIsFiltered = IB.isFiltered, BB.isSchema = ZB.isSchema, BB.filterBitmask = ZB.filterBitmask, BB.tags = ZB.tags, BB.structSwitchEmitted = !1, BB.shouldEmitSwitch = BB.hasView || BB.it.offset > BB.initialOffset || IB !== BB.rootChangeTree, IB.isArray && IB.collDirty.size > 0 && (IB.flags |= 512), JZ(IB, BB, XT)
      }
      yZ(IB, BB, eT)
    }

    function eT(BB, IB, ZB) {
      LT(BB, IB)
    }

    function uT(BB, IB, ZB) {
      if (IB < 0) {
        if (BB.treeIsFiltered !== BB.emitFiltered) return;
        return mT(BB), void(BB.buffer[BB.it.offset++] = 255 & Math.abs(IB))
      }
      if ((BB.isSchema ? BB.treeIsFiltered || (IB < 32 ? 0 !== (BB.filterBitmask & 1 << IB) : void 0 !== BB.tags[IB]) : BB.treeIsFiltered) !== BB.emitFiltered) return;
      const TB = BB.isEncodeAll ? JB.ADD : ZB;
      void 0 !== TB && (void 0 === BB.filter || BB.filter(BB.ref, IB, BB.view)) && (mT(BB), BB.encoder(BB.self, BB.buffer, BB.changeTree, IB, TB, BB.it, BB.isEncodeAll, BB.hasView, BB.metadata))
    }

    function fT(BB, IB) {
      const ZB = new Uint8Array(BB.length + IB.length);
      return ZB.set(BB, 0), ZB.set(IB, BB.length), ZB
    }
    class lT {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(lT.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(BB, IB) {
        this.context = eI.cache(BB.constructor), this.root = IB ?? new HT(this.context), this.setState(BB)
      }
      setState(BB) {
        this.state = BB, this.state[gB].setRoot(this.root)
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
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.offset;
        return this._encodeChannel(BB, IB, ZB, TB, !1)
      }
      encodeUnreliable() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.offset;
        return this._encodeChannel(BB, IB, ZB, TB, !0)
      }
      _encodeChannel(BB, IB, ZB, TB, JB) {
        this.root.pendingFilterRefresh.length > 0 && GZ(this.root);
        const oB = void 0 !== IB,
          GB = this.state[gB],
          vB = this._encodeCtx;
        vB.self = this, vB.buffer = ZB, vB.it = BB, vB.view = IB, vB.isEncodeAll = !1, vB.hasView = oB, vB.emitFiltered = oB;
        let kB = JB ? this.root.unreliableChanges : this.root.changes;
        for (; kB = kB.next;) {
          const ZB = kB.changeTree;
          if (oB && !IB.isChangeTreeVisible(ZB)) continue;
          const cB = JB ? ZB.unreliableRecorder : ZB;
          if (!cB || !cB.has()) continue;
          const nB = ZB.encDescriptor;
          vB.changeTree = ZB, vB.ref = ZB.ref, vB.encoder = nB.encoder, vB.filter = nB.filter, vB.metadata = nB.metadata, vB.treeIsFiltered = ZB.isFiltered, vB.isSchema = nB.isSchema, vB.filterBitmask = nB.filterBitmask, vB.tags = nB.tags, vB.structSwitchEmitted = !1, vB.isRootTree = ZB === GB, vB.shouldEmitSwitch = oB || BB.offset > TB || !vB.isRootTree, cB.forEachWithCtx(vB, uT)
        }
        return JB || oB || !this._isStreamBroadcastMode || this._emitStreamBroadcast(ZB, BB), BB.offset > ZB.byteLength ? (ZB = this._resizeBuffer(ZB, BB.offset), BB.offset = TB, this._encodeChannel(BB, IB, ZB, TB, JB)) : ZB.subarray(0, BB.offset)
      }
      encodeFullSync(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.offset;
        this.root.pendingFilterRefresh.length > 0 && GZ(this.root);
        const oB = void 0 !== TB,
          GB = this.state[gB],
          vB = this._encodeCtx;
        return vB.self = this, vB.buffer = IB, vB.it = BB, vB.view = TB, vB.isEncodeAll = !0, vB.hasView = oB, vB.emitFiltered = ZB, vB.gen = ++this._fullSyncGen, vB.initialOffset = JB, vB.rootChangeTree = GB, LT(vB, GB), BB.offset > IB.byteLength ? (IB = this._resizeBuffer(IB, BB.offset), BB.offset = JB, this.encodeFullSync(BB, IB, ZB, TB, JB)) : IB.subarray(0, BB.offset)
      }
      _resizeBuffer(BB, IB) {
        const ZB = Math.ceil(IB / lT.BUFFER_SIZE) * lT.BUFFER_SIZE,
          TB = new Uint8Array(ZB);
        return TB.set(BB), BB === this.sharedBuffer && (this.sharedBuffer = TB), TB
      }
      encodeAll() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(BB, IB, !1)
      }
      encodeAllView(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const JB = ZB.offset;
        return TB = this.encodeFullSync(ZB, TB, !0, BB, JB), fT(TB.subarray(0, IB), TB.subarray(JB, ZB.offset))
      }
      ensureCapacity(BB, IB) {
        if (IB + lT.BUFFER_SIZE <= BB.byteLength) return BB;
        const ZB = Math.ceil((IB + lT.BUFFER_SIZE) / lT.BUFFER_SIZE) * lT.BUFFER_SIZE,
          TB = new Uint8Array(ZB);
        return TB.set(BB.subarray(0, IB)), BB === this.sharedBuffer && (this.sharedBuffer = TB), TB
      }
      encodeView(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          oB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const GB = ZB.offset;
        this._emitStreamPriority(BB);
        for (const kB of BB.changes.keys()) {
          const IB = BB.changes.get(kB),
            oB = this.root.changeTrees[kB];
          if (void 0 === oB) {
            BB.changes.delete(kB);
            continue
          }
          if (0 === IB.size) continue;
          const GB = oB.encDescriptor,
            cB = GB.encoder,
            nB = GB.metadata,
            hB = oB.ref,
            FB = oB.refTarget;
          TB = this.ensureCapacity(TB, ZB.offset), TB[ZB.offset++] = 255, II.number(TB, hB[vB], ZB);
          for (const [kB, NB] of IB) {
            let IB;
            if (-1 === kB) {
              const BB = FB.tmpItems,
                IB = FB.deletedIndexes;
              for (let GB = 0; GB < BB.length; GB++) void 0 !== BB[GB] && !0 !== IB[GB] && cB(this, TB, oB, GB, JB.ADD, ZB, !1, !0, nB);
              continue
            }
            if ("number" === typeof kB) IB = kB;
            else {
              const ZB = kB.indexInParent(hB);
              if (void 0 === ZB) continue;
              if (IB = ZB, NB === JB.ADD && oB.getChange(IB) === JB.DELETE) {
                BB.changes.delete(kB.ref[vB]);
                continue
              }
            }
            cB(this, TB, oB, IB, void 0 !== FB[zB](IB) && NB || JB.DELETE, ZB, !1, !0, nB)
          }
        }
        return BB.changes.clear(), TB = this.encode(ZB, BB, TB), oB ? fT(TB.subarray(0, IB), TB.subarray(GB, ZB.offset)) : TB.subarray(GB, ZB.offset)
      }
      encodeUnreliableView(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const JB = ZB.offset;
        return TB = this.encodeUnreliable(ZB, BB, TB, JB), fT(TB.subarray(0, IB), TB.subarray(JB, ZB.offset))
      }
      _emitStreamBroadcast(BB, IB) {
        const ZB = this.root.streamTrees;
        for (const TB of ZB) {
          const ZB = TB,
            oB = ZB[gB],
            GB = ZB[vB];
          if (void 0 === GB) continue;
          const kB = ZB._stream,
            cB = kB.broadcastDeletes,
            nB = kB.broadcastPending,
            hB = kB.sentBroadcast,
            FB = cB.size > 0,
            NB = nB.size > 0,
            qB = oB.encDescriptor,
            yB = qB.encoder,
            UB = qB.metadata;
          if (FB || NB) {
            if (BB[IB.offset++] = 255, II.number(BB, GB, IB), FB) {
              for (const ZB of cB) yB(this, BB, oB, ZB, JB.DELETE, IB, !1, !1, UB);
              cB.clear()
            }
            const TB = kB.maxPerTick,
              NB = [];
            let qB = 0;
            const WB = [];
            for (const GB of nB) {
              if (qB >= TB) break;
              const vB = ZB[zB](GB);
              void 0 !== vB ? (yB(this, BB, oB, GB, JB.ADD, IB, !1, !1, UB), hB.add(GB), NB.push(vB), WB.push(GB), qB++) : WB.push(GB)
            }
            for (const BB of WB) nB.delete(BB);
            for (const ZB of NB) {
              const TB = ZB[gB];
              if (void 0 === TB) continue;
              const oB = ZB[vB];
              if (void 0 === oB) continue;
              BB[IB.offset++] = 255, II.number(BB, oB, IB);
              const GB = TB.encDescriptor,
                kB = GB.encoder,
                cB = GB.metadata;
              TB.forEachLive((ZB => {
                xI.hasUnreliableAtIndex(cB, ZB) || kB(this, BB, TB, ZB, JB.ADD, IB, !1, !1, cB)
              }))
            }
          }
          for (const TB of hB) {
            const JB = ZB[zB](TB);
            if (void 0 === JB) continue;
            const oB = JB[gB];
            if (void 0 === oB || !oB.has()) continue;
            const GB = JB[vB];
            if (void 0 === GB) continue;
            BB[IB.offset++] = 255, II.number(BB, GB, IB);
            const kB = oB.encDescriptor,
              cB = kB.encoder,
              nB = kB.metadata;
            oB.forEach(((ZB, TB) => {
              ZB < 0 || xI.hasUnreliableAtIndex(nB, ZB) || cB(this, BB, oB, ZB, TB, IB, !1, !1, nB)
            }))
          }
        }
      }
      _emitStreamPriority(BB) {
        const IB = this.root.streamTrees;
        if (0 === IB.size) return;
        const ZB = BB.id;
        for (const TB of IB) {
          const IB = TB,
            oB = IB._stream,
            GB = oB.pendingByView.get(ZB);
          if (void 0 === GB || 0 === GB.size) continue;
          const kB = oB.priorityByView?.get(ZB),
            cB = void 0 !== kB,
            nB = oB.priority,
            hB = oB.maxPerTick,
            FB = [],
            NB = [];
          if (cB || void 0 !== nB) {
            const ZB = [],
              TB = [];
            let JB = 0;
            for (const oB of GB) {
              const GB = IB[zB](oB);
              if (void 0 === GB) {
                NB.push(oB);
                continue
              }
              const vB = cB ? kB(GB) : nB(BB, GB);
              if (JB < hB) {
                let BB = JB++;
                for (; BB > 0 && TB[BB - 1] < vB;) TB[BB] = TB[BB - 1], ZB[BB] = ZB[BB - 1], BB--;
                TB[BB] = vB, ZB[BB] = oB
              } else if (vB > TB[hB - 1]) {
                let BB = hB - 1;
                for (; BB > 0 && TB[BB - 1] < vB;) TB[BB] = TB[BB - 1], ZB[BB] = ZB[BB - 1], BB--;
                TB[BB] = vB, ZB[BB] = oB
              }
            }
            for (let BB = 0; BB < JB; BB++) FB.push(ZB[BB])
          } else
            for (const BB of GB) {
              if (FB.length >= hB) break;
              FB.push(BB)
            }
          for (const BB of NB) GB.delete(BB);
          const qB = FB.length;
          let yB = oB.sentByView.get(ZB);
          void 0 === yB && (yB = new Set, oB.sentByView.set(ZB, yB));
          for (let ZB = 0; ZB < qB; ZB++) {
            const TB = FB[ZB],
              oB = IB[zB](TB);
            if (void 0 === oB) {
              GB.delete(TB);
              continue
            }
            BB._addImmediate(oB);
            const kB = oB[gB];
            if (void 0 !== kB) {
              const IB = oB[vB];
              let ZB = BB.changes.get(IB);
              void 0 === ZB && (ZB = new Map, BB.changes.set(IB, ZB));
              const TB = kB.metadata;
              kB.forEachLive((BB => {
                xI.hasUnreliableAtIndex(TB, BB) || ZB.set(BB, JB.ADD)
              }))
            }
            GB.delete(TB), yB.add(TB)
          }
        }
      }
      discardChanges() {
        const BB = this.root.changes;
        let IB = BB.next;
        const ZB = this.root;
        for (; IB;) {
          const BB = IB.next;
          IB.changeTree.endEncode(), ZB.releaseNode(IB), IB = BB
        }
        BB.next = void 0, BB.tail = void 0
      }
      discardUnreliableChanges() {
        const BB = this.root.unreliableChanges;
        let IB = BB.next;
        const ZB = this.root;
        for (; IB;) {
          const BB = IB.next;
          IB.changeTree.endEncodeUnreliable(), ZB.releaseNode(IB), IB = BB
        }
        BB.next = void 0, BB.tail = void 0
      }
      tryEncodeTypeId(BB, IB, ZB, TB) {
        const JB = this.context.getTypeId(IB),
          oB = this.context.getTypeId(ZB);
        void 0 !== oB ? JB !== oB && (BB[TB.offset++] = 213, II.number(BB, oB, TB)) : console.warn(`@colyseus/schema WARNING: Class "${ZB.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const BB = this.root;
        if (0 === BB.streamTrees.size) return !1;
        const IB = 0 === BB.activeViews.size;
        for (const ZB of BB.streamTrees)
          if (IB ? HI(ZB) : aI(ZB, BB)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class AT extends Error {
      constructor(BB) {
        super(BB), this.name = "DecodingWarning"
      }
    }
    const tT = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class bT {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(BB, IB), void 0 === IB[vB] ? (tT.value = BB, Object.defineProperty(IB, vB, tT)) : IB[vB] !== BB && (IB[vB] = BB), ZB && (this.refCount[BB] = (this.refCount[BB] || 0) + 1), this.deletedRefs.has(BB) && this.deletedRefs.delete(BB)
      }
      removeRef(BB) {
        const IB = this.refCount[BB];
        if (void 0 !== IB)
          if (0 !== IB)(this.refCount[BB] = IB - 1) <= 0 && this.deletedRefs.add(BB);
          else try {
            const IB = this.refs.get(BB);
            throw new AT(`trying to remove refId '${BB}' with 0 refCount (${IB.constructor.name}: ${JSON.stringify(IB)})`)
          } catch (oJ) {
            console.warn(oJ)
          } else try {
            throw new AT("trying to remove refId that doesn't exist: " + BB)
          } catch (oJ) {
            console.warn(oJ)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((BB => {
          if (this.refCount[BB] > 0) return;
          const IB = this.refs.get(BB),
            ZB = IB.constructor[Symbol.metadata];
          if (null != ZB)
            for (const TB in ZB) {
              const BB = IB[ZB[TB].name];
              if ("object" === typeof BB && BB) {
                const IB = BB[vB];
                void 0 === IB || this.deletedRefs.has(IB) || this.removeRef(IB)
              }
            } else "function" === typeof IB[qB] && Array.from(IB.values()).forEach((BB => {
              const IB = BB[vB];
              void 0 === IB || this.deletedRefs.has(IB) || this.removeRef(IB)
            }));
          this.refs.delete(BB), delete this.refCount[BB], delete this.callbacks[BB]
        })), this.deletedRefs.clear()
      }
      addCallback(BB, IB, ZB) {
        if (void 0 === BB) {
          const BB = "number" === typeof IB ? JB[IB] : IB;
          throw new Error(`Can't addCallback on '${BB}' (refId is undefined)`)
        }
        return this.callbacks[BB] || (this.callbacks[BB] = {}), this.callbacks[BB][IB] || (this.callbacks[BB][IB] = []), this.callbacks[BB][IB].push(ZB), () => this.removeCallback(BB, IB, ZB)
      }
      removeCallback(BB, IB, ZB) {
        const TB = this.callbacks?.[BB]?.[IB]?.indexOf(ZB);
        void 0 !== TB && -1 !== TB && MT(this.callbacks[BB][IB], TB)
      }
    }
    class xT {
      context;
      state;
      root;
      currentRefId = 0;
      mH;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(BB, IB) {
        this.setState(BB), this.context = IB || new eI(BB.constructor)
      }
      setState(BB) {
        this.state = BB, this.root = new bT, this.root.addRef(0, BB)
      }
      decode(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const JB = void 0 !== this.mH ? [] : null,
          oB = this.root,
          GB = BB.byteLength;
        let vB = ZB.constructor[nB];
        for (this.currentRefId = 0; IB.offset < GB;) {
          if (BB[IB.offset] == TB) {
            IB.offset++, ZB[dB]?.();
            const TB = WI.number(BB, IB),
              JB = oB.refs.get(TB);
            JB ? (ZB = JB, vB = ZB.constructor[nB], this.currentRefId = TB) : (console.error(`"refId" not found: ${TB}`, {
              previousRef: ZB,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(BB, IB, GB));
            continue
          } - 1 !== vB(this, BB, IB, ZB, JB) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(BB, IB, GB))
        }
        return ZB[dB]?.(), null !== this.resyncVisited && function(BB, IB) {
          BB.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : eZ(BB, BB.state, new Set, IB)
        }(this, JB), null !== JB && this.mH?.(JB), oB.garbageCollectDeletedRefs(), JB
      }
      decodeResync(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(BB, IB)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(BB, IB, ZB) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const JB = {
          offset: IB.offset
        };
        for (; IB.offset < ZB && (BB[IB.offset] !== TB || (JB.offset = IB.offset + 1, !this.root.refs.has(WI.number(BB, JB))));) IB.offset++
      }
      getInstanceType(BB, IB, ZB) {
        let TB;
        if (213 === BB[IB.offset]) {
          IB.offset++;
          const ZB = WI.number(BB, IB);
          TB = this.context.get(ZB)
        }
        return TB || ZB
      }
      createInstanceOfType(BB) {
        return BB.initializeForDecoder()
      }
      removeChildRefs(BB, IB) {
        const ZB = "string" !== typeof BB[qB],
          TB = BB[vB];
        BB.forEach(((oB, GB) => {
          IB?.push({
            ref: BB,
            refId: TB,
            op: JB.DELETE,
            field: GB,
            value: void 0,
            previousValue: oB
          }), ZB && this.root.removeRef(oB[vB])
        }))
      }
    }
    const ET = YT({
        min: FT.float64(),
        max: FT.float64(),
        bits: FT.uint8(),
        mode: FT.uint8()
      }, "QuantizedDescriptor"),
      DT = YT({
        name: FT.string(),
        type: FT.string(),
        referencedType: FT.number(),
        childPrimitive: FT.string(),
        quantized: FT.ref(ET).optional()
      }, "ReflectionField"),
      KT = YT({
        id: FT.number(),
        extendsId: FT.number(),
        fields: FT.array(DT)
      }, "ReflectionType"),
      VT = YT({
        types: FT.array(KT),
        rootType: FT.number()
      }, "Reflection");

    function ST(BB) {
      const IB = BB.root,
        ZB = IB.callbacks,
        TB = new WeakMap;
      let oB;

      function GB(BB, ZB) {
        let cB = ZB.instance?.constructor[Symbol.metadata] || BB,
          nB = ZB.instance && "function" === typeof ZB.instance.forEach || BB && !pT.is(BB);
        if (cB && !nB) {
          const BB = function(BB, JB, GB, kB) {
            return kB && void 0 !== ZB.instance[JB] && !TB.has(oB) && GB(ZB.instance[JB], void 0), IB.addCallback(BB[vB], JB, GB)
          };
          return new Proxy({
            listen: function(IB, JB) {
              let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (ZB.instance) return BB(ZB.instance, IB, JB, GB);
              {
                let vB = () => {};
                return ZB.onInstanceAvailable(((ZB, kB) => {
                  vB = BB(ZB, IB, JB, GB && kB && !TB.has(oB))
                })), () => vB()
              }
            },
            onChange: function(BB) {
              return IB.addCallback(ZB.instance[vB], JB.REPLACE, BB)
            },
            bindTo: function(BB, TB) {
              return TB || (TB = Object.keys(cB).map((BB => cB[BB].name))), IB.addCallback(ZB.instance[vB], JB.REPLACE, (() => {
                TB.forEach((IB => BB[IB] = ZB.instance[IB]))
              }))
            }
          }, {
            get(BB, IB) {
              const TB = cB[cB[IB]];
              if (TB) {
                const BB = ZB.instance?.[IB],
                  JB = TB => {
                    const JB = kB(ZB.instance).listen(IB, ((BB, IB) => {
                      TB(BB, !1), JB?.()
                    }), !1);
                    void 0 !== BB?.[vB] && TB(BB, !0)
                  };
                return GB(TB.type, {
                  instance: void 0 !== BB?.[vB] && BB,
                  parentInstance: ZB.instance,
                  onInstanceAvailable: JB
                })
              }
              return BB[IB]
            },
            has: (BB, IB) => void 0 !== cB[IB],
            set(BB, IB, ZB) {
              throw new Error("not allowed")
            },
            deleteProperty(BB, IB) {
              throw new Error("not allowed")
            }
          })
        } {
          const BB = function(BB, ZB, GB) {
              return GB && BB.forEach(((BB, IB) => ZB(BB, IB))), IB.addCallback(BB[vB], JB.ADD, ((BB, IB) => {
                TB.set(ZB, !0), oB = ZB, ZB(BB, IB), TB.delete(ZB), oB = void 0
              }))
            },
            GB = function(BB, ZB) {
              return IB.addCallback(BB[vB], JB.DELETE, ZB)
            },
            kB = function(BB, ZB) {
              return IB.addCallback(BB[vB], JB.REPLACE, ZB)
            };
          return new Proxy({
            cW: function(IB) {
              let JB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (ZB.instance) return BB(ZB.instance, IB, JB && !TB.has(oB));
              if (ZB.onInstanceAvailable) {
                let GB = () => {};
                return ZB.onInstanceAvailable(((ZB, vB) => {
                  GB = BB(ZB, IB, JB && vB && !TB.has(oB))
                })), () => GB()
              }
            },
            nH: function(BB) {
              if (ZB.instance) return GB(ZB.instance, BB);
              if (ZB.onInstanceAvailable) {
                let IB = () => {};
                return ZB.onInstanceAvailable((ZB => {
                  IB = GB(ZB, BB)
                })), () => IB()
              }
            },
            onChange: function(BB) {
              if (ZB.instance) return kB(ZB.instance, BB);
              if (ZB.onInstanceAvailable) {
                let IB = () => {};
                return ZB.onInstanceAvailable((ZB => {
                  IB = kB(ZB, BB)
                })), () => IB()
              }
            }
          }, {
            get(BB, IB) {
              if (!BB[IB]) throw new Error(`Can't access '${IB}' through callback proxy. access the instance directly.`);
              return BB[IB]
            },
            has: (BB, IB) => void 0 !== BB[IB],
            set(BB, IB, ZB) {
              throw new Error("not allowed")
            },
            deleteProperty(BB, IB) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function kB(BB) {
        return GB(void 0, {
          instance: BB
        })
      }
      return BB.mH = function(BB) {
        const IB = new Set;
        for (let TB = 0, oB = BB.length; TB < oB; TB++) {
          const oB = BB[TB],
            GB = oB.refId,
            kB = oB.ref,
            cB = ZB[GB];
          if (cB) {
            if ((oB.op & JB.DELETE) === JB.DELETE && pT.isSchema(oB.previousValue)) {
              const BB = ZB[oB.previousValue[vB]]?.[JB.DELETE];
              for (let IB = BB?.length - 1; IB >= 0; IB--) BB[IB]()
            }
            if (pT.isSchema(kB)) {
              if (!IB.has(GB)) {
                const BB = cB?.[JB.REPLACE];
                for (let IB = BB?.length - 1; IB >= 0; IB--) BB[IB]()
              }
              if (cB.hasOwnProperty(oB.field)) {
                const BB = cB[oB.field];
                for (let IB = BB?.length - 1; IB >= 0; IB--) BB[IB](oB.value, oB.previousValue)
              }
            } else {
              if ((oB.op & JB.DELETE) === JB.DELETE) {
                if (void 0 !== oB.previousValue) {
                  const BB = cB[JB.DELETE];
                  for (let IB = BB?.length - 1; IB >= 0; IB--) BB[IB](oB.previousValue, oB.dynamicIndex ?? oB.field)
                }
                if ((oB.op & JB.ADD) === JB.ADD) {
                  const BB = cB[JB.ADD];
                  for (let IB = BB?.length - 1; IB >= 0; IB--) BB[IB](oB.value, oB.dynamicIndex ?? oB.field)
                }
              } else if ((oB.op & JB.ADD) === JB.ADD && oB.previousValue !== oB.value) {
                const BB = cB[JB.ADD];
                for (let IB = BB?.length - 1; IB >= 0; IB--) BB[IB](oB.value, oB.dynamicIndex ?? oB.field)
              }
              if (oB.value !== oB.previousValue && (void 0 !== oB.value || void 0 !== oB.previousValue)) {
                const BB = cB[JB.REPLACE];
                for (let IB = BB?.length - 1; IB >= 0; IB--) BB[IB](oB.value, oB.dynamicIndex ?? oB.field)
              }
            }
            IB.add(GB)
          }
        }
      }, kB
    }

    function BJ(BB, IB) {
      BB.mH = IB
    }
    VT.encode = function(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const ZB = BB.context,
        TB = new VT,
        JB = new lT(TB),
        oB = ZB.schemas.get(BB.state.constructor);
      oB > 0 && (TB.rootType = oB);
      const GB = new Set,
        vB = {},
        kB = BB => {
          if (void 0 === BB.extendsId || GB.has(BB.extendsId)) {
            GB.add(BB.id), TB.types.push(BB);
            const IB = vB[BB.id];
            void 0 !== IB && (delete vB[BB.id], IB.forEach((BB => kB(BB))))
          } else void 0 === vB[BB.extendsId] && (vB[BB.extendsId] = []), vB[BB.extendsId].push(BB)
        };
      ZB.schemas.forEach(((BB, IB) => {
        const TB = new KT;
        TB.id = Number(BB);
        const JB = Object.getPrototypeOf(IB);
        JB !== pT && (TB.extendsId = ZB.schemas.get(JB));
        const oB = IB[Symbol.metadata];
        if (oB !== JB[Symbol.metadata]) {
          const BB = oB[YB] ?? -1;
          for (let IB = 0; IB <= BB; IB++) {
            const BB = oB[IB];
            if (void 0 === BB) continue;
            const JB = BB.name;
            if (!Object.prototype.hasOwnProperty.call(oB, JB)) continue;
            const GB = new DT;
            let vB;
            if (GB.name = JB, "string" === typeof BB.type) vB = BB.type;
            else if (rI(BB.type)) {
              const IB = BB.type.quantized;
              vB = "quantized";
              const ZB = new ET;
              ZB.min = IB.min, ZB.max = IB.max, ZB.bits = IB.bits, ZB.mode = IB.wrap ? 1 : 0, GB.quantized = ZB
            } else {
              let IB;
              pT.is(BB.type) ? (vB = "ref", IB = BB.type) : (vB = Object.keys(BB.type)[0], "string" === typeof BB.type[vB] ? GB.childPrimitive = BB.type[vB] : IB = BB.type[vB]), GB.referencedType = IB ? ZB.getTypeId(IB) : -1
            }
            GB.type = vB, TB.fields.push(GB)
          }
        }
        kB(TB)
      }));
      for (const cB in vB) vB[cB].forEach((BB => TB.types.push(BB)));
      return JB.encodeAll(IB).slice(0, IB.offset)
    }, VT.decode = function(BB, IB) {
      const ZB = new VT;
      new xT(ZB).decode(BB, IB);
      const TB = new eI;
      ZB.types.forEach((BB => {
        const IB = TB.get(BB.extendsId) ?? pT,
          ZB = class extends IB {};
        eI.register(ZB), TB.add(ZB, BB.id)
      }), {});
      ZB.types.forEach((BB => {
        const IB = TB.get(BB.id),
          JB = xI.initialize(IB),
          oB = [];
        let GB = BB;
        do {
          oB.push(GB), GB = ZB.types.find((BB => BB.id === GB.extendsId))
        } while (GB);
        let vB = 0;
        oB.reverse().forEach((BB => {
          ((BB, IB, ZB) => {
            IB.fields.forEach(((IB, JB) => {
              const oB = ZB + JB;
              if (void 0 !== IB.quantized) {
                const ZB = IB.quantized;
                xI.addField(BB, oB, IB.name, {
                  quantized: RI({
                    min: ZB.min,
                    max: ZB.max,
                    bits: ZB.bits,
                    mode: 1 === ZB.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== IB.referencedType) {
                const ZB = IB.type,
                  JB = TB.get(IB.referencedType) ?? IB.childPrimitive;
                "ref" === ZB ? xI.addField(BB, oB, IB.name, JB) : xI.addField(BB, oB, IB.name, {
                  [ZB]: JB
                })
              } else xI.addField(BB, oB, IB.name, IB.type)
            }))
          })(JB, BB, vB), vB += BB.fields.length
        }))
      }));
      const JB = new(TB.get(ZB.rootType || 0));
      return new xT(JB, TB)
    }, VT.makeEncodable = function(BB) {
      const IB = BB[Symbol.metadata];
      if (!IB) return BB;
      const ZB = IB[YB];
      if (void 0 === ZB) return BB;
      for (let TB = 0; TB <= ZB; TB++) {
        const ZB = IB[TB];
        ZB && xI.defineField(BB, IB, TB, ZB.name, ZB.type)
      }
      return Object.prototype.hasOwnProperty.call(BB, wB) && delete BB[wB], BB
    };
    class IJ {
      kN;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(BB) {
        this.kN = BB, this.kN.mH = this.mH.bind(this)
      }
      get callbacks() {
        return this.kN.root.callbacks
      }
      get state() {
        return this.kN.state
      }
      addCallback(BB, IB, ZB) {
        return this.kN.root.addCallback(BB, IB, ZB)
      }
      addCallbackOrWaitCollectionAvailable(BB, IB, ZB, TB) {
        let oB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          GB = () => {};
        const kB = () => GB(),
          cB = BB[IB];
        if (cB && void 0 !== cB[vB]) return oB = oB && !1 === this.isTriggering, ZB === JB.ADD && oB && cB.forEach(((BB, IB) => {
          TB(BB, IB)
        })), this.addCallback(cB[vB], ZB, TB);
        {
          let JB;
          return JB = this.addCallback(BB[vB], IB, ((BB, IB) => {
            null !== BB && void 0 !== BB && (JB(), GB = this.addCallback(BB[vB], ZB, TB))
          })), GB = JB, kB
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(BB, IB, ZB) {
        let TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        TB = TB && !1 === this.isTriggering;
        const JB = BB[IB];
        return TB && null !== JB && void 0 !== JB && ZB(JB, void 0), this.addCallback(BB[vB], IB, ZB)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const BB = arguments.length <= 0 ? void 0 : arguments[0],
            IB = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(BB[vB], JB.REPLACE, IB)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], JB.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], JB.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      cW() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], JB.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], JB.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      nH() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], JB.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], JB.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(BB, IB, ZB) {
        let TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const oB = BB.constructor[Symbol.metadata];
        ZB || (ZB = Object.keys(oB).filter((BB => !isNaN(Number(BB)))).map((BB => oB[BB].name)));
        const GB = () => {
          for (const TB of ZB) {
            const ZB = BB[TB];
            void 0 !== ZB && (IB[TB] = ZB)
          }
        };
        return TB && GB(), this.addCallback(BB[vB], JB.REPLACE, GB)
      }
      mH(BB) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let IB = 0, ZB = BB.length; IB < ZB; IB++) {
          const ZB = BB[IB],
            TB = ZB.refId,
            oB = ZB.ref,
            GB = this.callbacks[TB];
          if (GB) {
            if ((ZB.op & JB.DELETE) === JB.DELETE && pT.isSchema(ZB.previousValue)) {
              const BB = ZB.previousValue[vB],
                IB = this.callbacks[BB]?.[JB.DELETE];
              if (IB)
                for (let ZB = IB.length - 1; ZB >= 0; ZB--) try {
                  IB[ZB]()
                } catch (oJ) {
                  console.error(oJ)
                }
            }
            if (pT.isSchema(oB)) {
              if (!this.uniqueRefIds.has(TB)) {
                const BB = GB[JB.REPLACE];
                if (BB)
                  for (let IB = BB.length - 1; IB >= 0; IB--) try {
                    BB[IB]()
                  } catch (oJ) {
                    console.error(oJ)
                  }
              }
              const BB = GB[ZB.field];
              if (BB)
                for (let IB = BB.length - 1; IB >= 0; IB--) try {
                  BB[IB](ZB.value, ZB.previousValue)
                } catch (oJ) {
                  console.error(oJ)
                }
            } else {
              const BB = ZB.dynamicIndex ?? ZB.field;
              if ((ZB.op & JB.DELETE) === JB.DELETE) {
                if (void 0 !== ZB.previousValue) {
                  const IB = GB[JB.DELETE];
                  if (IB)
                    for (let TB = IB.length - 1; TB >= 0; TB--) try {
                      IB[TB](ZB.previousValue, BB)
                    } catch (oJ) {
                      console.error(oJ)
                    }
                }
                if ((ZB.op & JB.ADD) === JB.ADD) {
                  const IB = GB[JB.ADD];
                  if (IB)
                    for (let TB = IB.length - 1; TB >= 0; TB--) try {
                      IB[TB](ZB.value, BB)
                    } catch (oJ) {
                      console.error(oJ)
                    }
                }
              } else if ((ZB.op & JB.ADD) === JB.ADD && ZB.previousValue !== ZB.value) {
                const IB = GB[JB.ADD];
                if (IB)
                  for (let TB = IB.length - 1; TB >= 0; TB--) try {
                    IB[TB](ZB.value, BB)
                  } catch (oJ) {
                    console.error(oJ)
                  }
              }
              if (ZB.value !== ZB.previousValue) {
                const IB = GB[JB.REPLACE];
                if (IB)
                  for (let TB = IB.length - 1; TB >= 0; TB--) try {
                    IB[TB](BB, ZB.value)
                  } catch (oJ) {
                    console.error(oJ)
                  }
              }
            }
            this.uniqueRefIds.add(TB)
          }
        }
        this.isTriggering = !1
      }
    }
    const ZJ = {
      get(BB) {
        if (BB instanceof xT) return new IJ(BB);
        if ("kN" in BB.Py) return new IJ(BB.Py.kN);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(BB) {
        if (BB instanceof xT) return ST(BB);
        if ("kN" in BB.Py) return ST(BB.Py.kN);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (BB, IB) => BJ(BB, IB)
    };
    class TJ {
      _free = [];
      _factory;
      _maxSize;
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = BB, this._maxSize = IB.maxSize ?? 1 / 0;
        const ZB = IB.preallocate ?? 0;
        for (let TB = 0; TB < ZB; TB++) this._free.push(BB())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(BB) {
        pT.reset(BB), this._free.length < this._maxSize && this._free.push(BB)
      }
      get size() {
        return this._free.length
      }
    }

    function JJ(BB) {
      return new TJ((() => new BB), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    QI("map", {
      constructor: JT
    }), QI("array", {
      constructor: ZT
    }), QI("set", {
      constructor: GT
    }), QI("collection", {
      constructor: oT
    })
  },
  9167: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      __addDisposableResource: () => rB,
      __assign: () => oB,
      __asyncDelegator: () => OB,
      __asyncGenerator: () => wB,
      __asyncValues: () => YB,
      __await: () => sB,
      __awaiter: () => NB,
      __classPrivateFieldGet: () => jB,
      __classPrivateFieldIn: () => RB,
      __classPrivateFieldSet: () => PB,
      __createBinding: () => qB,
      __decorate: () => vB,
      __disposeResources: () => XB,
      __esDecorate: () => cB,
      __exportStar: () => yB,
      __extends: () => JB,
      __generator: () => gB,
      __importDefault: () => MB,
      __importStar: () => HB,
      __makeTemplateObject: () => iB,
      __metadata: () => FB,
      __param: () => kB,
      __propKey: () => hB,
      __read: () => WB,
      __rest: () => GB,
      __rewriteRelativeImportExtension: () => LB,
      __runInitializers: () => nB,
      __setFunctionName: () => zB,
      __spread: () => dB,
      __spreadArray: () => QB,
      __spreadArrays: () => CB,
      __values: () => UB,
      default: () => eB
    });
    var TB = function(BB, IB) {
      return TB = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(BB, IB) {
        BB.__proto__ = IB
      } || function(BB, IB) {
        for (var ZB in IB) Object.prototype.hasOwnProperty.call(IB, ZB) && (BB[ZB] = IB[ZB])
      }, TB(BB, IB)
    };

    function JB(BB, IB) {
      if ("function" !== typeof IB && null !== IB) throw new TypeError("Class extends value " + String(IB) + " is not a constructor or null");

      function ZB() {
        this.constructor = BB
      }
      TB(BB, IB), BB.prototype = null === IB ? Object.create(IB) : (ZB.prototype = IB.prototype, new ZB)
    }
    var oB = function() {
      return oB = Object.assign || function(BB) {
        for (var IB, ZB = 1, TB = arguments.length; ZB < TB; ZB++)
          for (var JB in IB = arguments[ZB]) Object.prototype.hasOwnProperty.call(IB, JB) && (BB[JB] = IB[JB]);
        return BB
      }, oB.apply(this, arguments)
    };

    function GB(BB, IB) {
      var ZB = {};
      for (var TB in BB) Object.prototype.hasOwnProperty.call(BB, TB) && IB.indexOf(TB) < 0 && (ZB[TB] = BB[TB]);
      if (null != BB && "function" === typeof Object.getOwnPropertySymbols) {
        var JB = 0;
        for (TB = Object.getOwnPropertySymbols(BB); JB < TB.length; JB++) IB.indexOf(TB[JB]) < 0 && Object.prototype.propertyIsEnumerable.call(BB, TB[JB]) && (ZB[TB[JB]] = BB[TB[JB]])
      }
      return ZB
    }

    function vB(BB, IB, ZB, TB) {
      var JB, oB = arguments.length,
        GB = oB < 3 ? IB : null === TB ? TB = Object.getOwnPropertyDescriptor(IB, ZB) : TB;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) GB = Reflect.decorate(BB, IB, ZB, TB);
      else
        for (var vB = BB.length - 1; vB >= 0; vB--)(JB = BB[vB]) && (GB = (oB < 3 ? JB(GB) : oB > 3 ? JB(IB, ZB, GB) : JB(IB, ZB)) || GB);
      return oB > 3 && GB && Object.defineProperty(IB, ZB, GB), GB
    }

    function kB(BB, IB) {
      return function(ZB, TB) {
        IB(ZB, TB, BB)
      }
    }

    function cB(BB, IB, ZB, TB, JB, oB) {
      function GB(BB) {
        if (void 0 !== BB && "function" !== typeof BB) throw new TypeError("Function expected");
        return BB
      }
      for (var vB, kB = TB.kind, cB = "getter" === kB ? "get" : "setter" === kB ? "set" : "value", nB = !IB && BB ? TB.static ? BB : BB.prototype : null, hB = IB || (nB ? Object.getOwnPropertyDescriptor(nB, TB.name) : {}), zB = !1, FB = ZB.length - 1; FB >= 0; FB--) {
        var NB = {};
        for (var gB in TB) NB[gB] = "access" === gB ? {} : TB[gB];
        for (var gB in TB.access) NB.access[gB] = TB.access[gB];
        NB.addInitializer = function(BB) {
          if (zB) throw new TypeError("Cannot add initializers after decoration has completed");
          oB.push(GB(BB || null))
        };
        var qB = (0, ZB[FB])("accessor" === kB ? {
          get: hB.get,
          set: hB.set
        } : hB[cB], NB);
        if ("accessor" === kB) {
          if (void 0 === qB) continue;
          if (null === qB || "object" !== typeof qB) throw new TypeError("Object expected");
          (vB = GB(qB.get)) && (hB.get = vB), (vB = GB(qB.set)) && (hB.set = vB), (vB = GB(qB.init)) && JB.unshift(vB)
        } else(vB = GB(qB)) && ("field" === kB ? JB.unshift(vB) : hB[cB] = vB)
      }
      nB && Object.defineProperty(nB, TB.name, hB), zB = !0
    }

    function nB(BB, IB, ZB) {
      for (var TB = arguments.length > 2, JB = 0; JB < IB.length; JB++) ZB = TB ? IB[JB].call(BB, ZB) : IB[JB].call(BB);
      return TB ? ZB : void 0
    }

    function hB(BB) {
      return "symbol" === typeof BB ? BB : "".concat(BB)
    }

    function zB(BB, IB, ZB) {
      return "symbol" === typeof IB && (IB = IB.description ? "[".concat(IB.description, "]") : ""), Object.defineProperty(BB, "name", {
        configurable: !0,
        value: ZB ? "".concat(ZB, " ", IB) : IB
      })
    }

    function FB(BB, IB) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(BB, IB)
    }

    function NB(BB, IB, ZB, TB) {
      return new(ZB || (ZB = Promise))((function(JB, oB) {
        function GB(BB) {
          try {
            kB(TB.next(BB))
          } catch (IB) {
            oB(IB)
          }
        }

        function vB(BB) {
          try {
            kB(TB.throw(BB))
          } catch (IB) {
            oB(IB)
          }
        }

        function kB(BB) {
          var IB;
          BB.done ? JB(BB.value) : (IB = BB.value, IB instanceof ZB ? IB : new ZB((function(BB) {
            BB(IB)
          }))).then(GB, vB)
        }
        kB((TB = TB.apply(BB, IB || [])).next())
      }))
    }

    function gB(BB, IB) {
      var ZB, TB, JB, oB = {
          label: 0,
          sent: function() {
            if (1 & JB[0]) throw JB[1];
            return JB[1]
          },
          trys: [],
          ops: []
        },
        GB = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return GB.next = vB(0), GB.throw = vB(1), GB.return = vB(2), "function" === typeof Symbol && (GB[Symbol.iterator] = function() {
        return this
      }), GB;

      function vB(vB) {
        return function(kB) {
          return function(vB) {
            if (ZB) throw new TypeError("Generator is already executing.");
            for (; GB && (GB = 0, vB[0] && (oB = 0)), oB;) try {
              if (ZB = 1, TB && (JB = 2 & vB[0] ? TB.return : vB[0] ? TB.throw || ((JB = TB.return) && JB.call(TB), 0) : TB.next) && !(JB = JB.call(TB, vB[1])).done) return JB;
              switch (TB = 0, JB && (vB = [2 & vB[0], JB.value]), vB[0]) {
                case 0:
                case 1:
                  JB = vB;
                  break;
                case 4:
                  return oB.label++, {
                    value: vB[1],
                    done: !1
                  };
                case 5:
                  oB.label++, TB = vB[1], vB = [0];
                  continue;
                case 7:
                  vB = oB.ops.pop(), oB.trys.pop();
                  continue;
                default:
                  if (!(JB = (JB = oB.trys).length > 0 && JB[JB.length - 1]) && (6 === vB[0] || 2 === vB[0])) {
                    oB = 0;
                    continue
                  }
                  if (3 === vB[0] && (!JB || vB[1] > JB[0] && vB[1] < JB[3])) {
                    oB.label = vB[1];
                    break
                  }
                  if (6 === vB[0] && oB.label < JB[1]) {
                    oB.label = JB[1], JB = vB;
                    break
                  }
                  if (JB && oB.label < JB[2]) {
                    oB.label = JB[2], oB.ops.push(vB);
                    break
                  }
                  JB[2] && oB.ops.pop(), oB.trys.pop();
                  continue
              }
              vB = IB.call(BB, oB)
            } catch (kB) {
              vB = [6, kB], TB = 0
            } finally {
              ZB = JB = 0
            }
            if (5 & vB[0]) throw vB[1];
            return {
              value: vB[0] ? vB[1] : void 0,
              done: !0
            }
          }([vB, kB])
        }
      }
    }
    var qB = Object.create ? function(BB, IB, ZB, TB) {
      void 0 === TB && (TB = ZB);
      var JB = Object.getOwnPropertyDescriptor(IB, ZB);
      JB && !("get" in JB ? !IB.__esModule : JB.writable || JB.configurable) || (JB = {
        enumerable: !0,
        get: function() {
          return IB[ZB]
        }
      }), Object.defineProperty(BB, TB, JB)
    } : function(BB, IB, ZB, TB) {
      void 0 === TB && (TB = ZB), BB[TB] = IB[ZB]
    };

    function yB(BB, IB) {
      for (var ZB in BB) "default" === ZB || Object.prototype.hasOwnProperty.call(IB, ZB) || qB(IB, BB, ZB)
    }

    function UB(BB) {
      var IB = "function" === typeof Symbol && Symbol.iterator,
        ZB = IB && BB[IB],
        TB = 0;
      if (ZB) return ZB.call(BB);
      if (BB && "number" === typeof BB.length) return {
        next: function() {
          return BB && TB >= BB.length && (BB = void 0), {
            value: BB && BB[TB++],
            done: !BB
          }
        }
      };
      throw new TypeError(IB ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function WB(BB, IB) {
      var ZB = "function" === typeof Symbol && BB[Symbol.iterator];
      if (!ZB) return BB;
      var TB, JB, oB = ZB.call(BB),
        GB = [];
      try {
        for (;
          (void 0 === IB || IB-- > 0) && !(TB = oB.next()).done;) GB.push(TB.value)
      } catch (vB) {
        JB = {
          error: vB
        }
      } finally {
        try {
          TB && !TB.done && (ZB = oB.return) && ZB.call(oB)
        } finally {
          if (JB) throw JB.error
        }
      }
      return GB
    }

    function dB() {
      for (var BB = [], IB = 0; IB < arguments.length; IB++) BB = BB.concat(WB(arguments[IB]));
      return BB
    }

    function CB() {
      for (var BB = 0, IB = 0, ZB = arguments.length; IB < ZB; IB++) BB += arguments[IB].length;
      var TB = Array(BB),
        JB = 0;
      for (IB = 0; IB < ZB; IB++)
        for (var oB = arguments[IB], GB = 0, vB = oB.length; GB < vB; GB++, JB++) TB[JB] = oB[GB];
      return TB
    }

    function QB(BB, IB, ZB) {
      if (ZB || 2 === arguments.length)
        for (var TB, JB = 0, oB = IB.length; JB < oB; JB++) !TB && JB in IB || (TB || (TB = Array.prototype.slice.call(IB, 0, JB)), TB[JB] = IB[JB]);
      return BB.concat(TB || Array.prototype.slice.call(IB))
    }

    function sB(BB) {
      return this instanceof sB ? (this.v = BB, this) : new sB(BB)
    }

    function wB(BB, IB, ZB) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var TB, JB = ZB.apply(BB, IB || []),
        oB = [];
      return TB = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), GB("next"), GB("throw"), GB("return", (function(BB) {
        return function(IB) {
          return Promise.resolve(IB).then(BB, cB)
        }
      })), TB[Symbol.asyncIterator] = function() {
        return this
      }, TB;

      function GB(BB, IB) {
        JB[BB] && (TB[BB] = function(IB) {
          return new Promise((function(ZB, TB) {
            oB.push([BB, IB, ZB, TB]) > 1 || vB(BB, IB)
          }))
        }, IB && (TB[BB] = IB(TB[BB])))
      }

      function vB(BB, IB) {
        try {
          (ZB = JB[BB](IB)).value instanceof sB ? Promise.resolve(ZB.value.v).then(kB, cB) : nB(oB[0][2], ZB)
        } catch (TB) {
          nB(oB[0][3], TB)
        }
        var ZB
      }

      function kB(BB) {
        vB("next", BB)
      }

      function cB(BB) {
        vB("throw", BB)
      }

      function nB(BB, IB) {
        BB(IB), oB.shift(), oB.length && vB(oB[0][0], oB[0][1])
      }
    }

    function OB(BB) {
      var IB, ZB;
      return IB = {}, TB("next"), TB("throw", (function(BB) {
        throw BB
      })), TB("return"), IB[Symbol.iterator] = function() {
        return this
      }, IB;

      function TB(TB, JB) {
        IB[TB] = BB[TB] ? function(IB) {
          return (ZB = !ZB) ? {
            value: sB(BB[TB](IB)),
            done: !1
          } : JB ? JB(IB) : IB
        } : JB
      }
    }

    function YB(BB) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var IB, ZB = BB[Symbol.asyncIterator];
      return ZB ? ZB.call(BB) : (BB = UB(BB), IB = {}, TB("next"), TB("throw"), TB("return"), IB[Symbol.asyncIterator] = function() {
        return this
      }, IB);

      function TB(ZB) {
        IB[ZB] = BB[ZB] && function(IB) {
          return new Promise((function(TB, JB) {
            (function(BB, IB, ZB, TB) {
              Promise.resolve(TB).then((function(IB) {
                BB({
                  value: IB,
                  done: ZB
                })
              }), IB)
            })(TB, JB, (IB = BB[ZB](IB)).done, IB.value)
          }))
        }
      }
    }

    function iB(BB, IB) {
      return Object.defineProperty ? Object.defineProperty(BB, "raw", {
        value: IB
      }) : BB.raw = IB, BB
    }
    var pB = Object.create ? function(BB, IB) {
        Object.defineProperty(BB, "default", {
          enumerable: !0,
          value: IB
        })
      } : function(BB, IB) {
        BB.default = IB
      },
      aB = function(BB) {
        return aB = Object.getOwnPropertyNames || function(BB) {
          var IB = [];
          for (var ZB in BB) Object.prototype.hasOwnProperty.call(BB, ZB) && (IB[IB.length] = ZB);
          return IB
        }, aB(BB)
      };

    function HB(BB) {
      if (BB && BB.__esModule) return BB;
      var IB = {};
      if (null != BB)
        for (var ZB = aB(BB), TB = 0; TB < ZB.length; TB++) "default" !== ZB[TB] && qB(IB, BB, ZB[TB]);
      return pB(IB, BB), IB
    }

    function MB(BB) {
      return BB && BB.__esModule ? BB : {
        default: BB
      }
    }

    function jB(BB, IB, ZB, TB) {
      if ("a" === ZB && !TB) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof IB ? BB !== IB || !TB : !IB.has(BB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ZB ? TB : "a" === ZB ? TB.call(BB) : TB ? TB.value : IB.get(BB)
    }

    function PB(BB, IB, ZB, TB, JB) {
      if ("m" === TB) throw new TypeError("Private method is not writable");
      if ("a" === TB && !JB) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof IB ? BB !== IB || !JB : !IB.has(BB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === TB ? JB.call(BB, ZB) : JB ? JB.value = ZB : IB.set(BB, ZB), ZB
    }

    function RB(BB, IB) {
      if (null === IB || "object" !== typeof IB && "function" !== typeof IB) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof BB ? IB === BB : BB.has(IB)
    }

    function rB(BB, IB, ZB) {
      if (null !== IB && void 0 !== IB) {
        if ("object" !== typeof IB && "function" !== typeof IB) throw new TypeError("Object expected.");
        var TB, JB;
        if (ZB) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          TB = IB[Symbol.asyncDispose]
        }
        if (void 0 === TB) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          TB = IB[Symbol.dispose], ZB && (JB = TB)
        }
        if ("function" !== typeof TB) throw new TypeError("Object not disposable.");
        JB && (TB = function() {
          try {
            JB.call(this)
          } catch (BB) {
            return Promise.reject(BB)
          }
        }), BB.stack.push({
          value: IB,
          dispose: TB,
          async: ZB
        })
      } else ZB && BB.stack.push({
        async: !0
      });
      return IB
    }
    var mB = "function" === typeof SuppressedError ? SuppressedError : function(BB, IB, ZB) {
      var TB = new Error(ZB);
      return TB.name = "SuppressedError", TB.error = BB, TB.suppressed = IB, TB
    };

    function XB(BB) {
      function IB(IB) {
        BB.error = BB.hasError ? new mB(IB, BB.error, "An error was suppressed during disposal.") : IB, BB.hasError = !0
      }
      var ZB, TB = 0;
      return function JB() {
        for (; ZB = BB.stack.pop();) try {
          if (!ZB.async && 1 === TB) return TB = 0, BB.stack.push(ZB), Promise.resolve().then(JB);
          if (ZB.dispose) {
            var oB = ZB.dispose.call(ZB.value);
            if (ZB.async) return TB |= 2, Promise.resolve(oB).then(JB, (function(BB) {
              return IB(BB), JB()
            }))
          } else TB |= 1
        } catch (GB) {
          IB(GB)
        }
        if (1 === TB) return BB.hasError ? Promise.reject(BB.error) : Promise.resolve();
        if (BB.hasError) throw BB.error
      }()
    }

    function LB(BB, IB) {
      return "string" === typeof BB && /^\.\.?\//.test(BB) ? BB.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(BB, ZB, TB, JB, oB) {
        return ZB ? IB ? ".jsx" : ".js" : !TB || JB && oB ? TB + JB + "." + oB.toLowerCase() + "js" : BB
      })) : BB
    }
    const eB = {
      __extends: JB,
      __assign: oB,
      __rest: GB,
      __decorate: vB,
      __param: kB,
      __esDecorate: cB,
      __runInitializers: nB,
      __propKey: hB,
      __setFunctionName: zB,
      __metadata: FB,
      __awaiter: NB,
      __generator: gB,
      __createBinding: qB,
      __exportStar: yB,
      __values: UB,
      __read: WB,
      __spread: dB,
      __spreadArrays: CB,
      __spreadArray: QB,
      __await: sB,
      __asyncGenerator: wB,
      __asyncDelegator: OB,
      __asyncValues: YB,
      __makeTemplateObject: iB,
      __importStar: HB,
      __importDefault: MB,
      __classPrivateFieldGet: jB,
      __classPrivateFieldSet: PB,
      __classPrivateFieldIn: RB,
      __addDisposableResource: rB,
      __disposeResources: XB,
      __rewriteRelativeImportExtension: LB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);