export const id = 203;
export const ids = [203];
export const modules = {
  9908: (BB, OB) => {
    OB.discordURLBuilder = function(BB) {
      var OB;
      const GB = (null === (OB = null === window || void 0 === window ? void 0 : window.location) || void 0 === OB ? void 0 : OB.hostname) || "localhost",
        YB = BB.hostname.split("."),
        DB = !BB.hostname.includes("trycloudflare.com") && !BB.hostname.includes("discordsays.com") && YB.length > 2 ? `/${YB[0]}` : "";
      return BB.pathname.startsWith("/.proxy") ? `${BB.protocol}//${GB}${DB}${BB.pathname}${BB.search}` : `${BB.protocol}//${GB}/.proxy/colyseus${DB}${BB.pathname}${BB.search}`
    }
  },
  9891: (BB, OB, GB) => {
    var YB, DB, QB, oB, jB = GB(9800),
      yB = GB(9899),
      JB = GB(9861);
    YB = new WeakMap, DB = new WeakMap, QB = new WeakMap, oB = new WeakMap, OB.Auth = class {
      constructor(BB) {
        this.http = BB, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, YB.set(this, !1), DB.set(this, void 0), QB.set(this, void 0), oB.set(this, JB.createNanoEvents()), yB.getItem(this.settings.key, (BB => this.token = BB))
      }
      set token(BB) {
        this.http.authToken = BB
      }
      get token() {
        return this.http.authToken
      }
      onChange(BB) {
        const OB = jB.__classPrivateFieldGet(this, oB, "f").on("change", BB);
        return jB.__classPrivateFieldGet(this, YB, "f") || jB.__classPrivateFieldSet(this, DB, new Promise(((BB, OB) => {
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
        })), "f"), jB.__classPrivateFieldSet(this, YB, !0, "f"), OB
      }
      getUserData() {
        return jB.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(BB, OB, GB) {
        return jB.__awaiter(this, void 0, void 0, (function*() {
          const YB = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: BB,
              password: OB,
              options: GB
            }
          })).data;
          return this.emitChange(YB), YB
        }))
      }
      signInWithEmailAndPassword(BB, OB) {
        return jB.__awaiter(this, void 0, void 0, (function*() {
          const GB = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: BB,
              password: OB
            }
          })).data;
          return this.emitChange(GB), GB
        }))
      }
      signInAnonymously(BB) {
        return jB.__awaiter(this, void 0, void 0, (function*() {
          const OB = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: BB
            }
          })).data;
          return this.emitChange(OB), OB
        }))
      }
      sendPasswordResetEmail(BB) {
        return jB.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: BB
            }
          })).data
        }))
      }
      signInWithProvider(BB) {
        return jB.__awaiter(this, arguments, void 0, (function*(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((GB, YB) => {
            const DB = OB.width || 480,
              oB = OB.height || 768,
              yB = this.token ? `?token=${this.token}` : "",
              JB = `Login with ${BB[0].toUpperCase()+BB.substring(1)}`,
              MB = this.http.client.getHttpEndpoint(`${OB.prefix||`${this.settings.path}/provider`}/${BB}${yB}`),
              PB = screen.width / 2 - DB / 2,
              zB = screen.height / 2 - oB / 2;
            jB.__classPrivateFieldSet(this, QB, window.open(MB, JB, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + DB + ", height=" + oB + ", top=" + zB + ", left=" + PB), "f");
            const lB = BB => {
                void 0 === BB.data.user && void 0 === BB.data.token || (clearInterval(pB), jB.__classPrivateFieldGet(this, QB, "f").close(), jB.__classPrivateFieldSet(this, QB, void 0, "f"), window.removeEventListener("message", lB), void 0 !== BB.data.error ? YB(BB.data.error) : (GB(BB.data), this.emitChange(BB.data)))
              },
              pB = setInterval((() => {
                jB.__classPrivateFieldGet(this, QB, "f") && !jB.__classPrivateFieldGet(this, QB, "f").closed || (jB.__classPrivateFieldSet(this, QB, void 0, "f"), YB("rB"), window.removeEventListener("message", lB))
              }), 200);
            window.addEventListener("message", lB)
          }))
        }))
      }
      signOut() {
        return jB.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(BB) {
        void 0 !== BB.token && (this.token = BB.token, null === BB.token ? yB.removeItem(this.settings.key) : yB.setItem(this.settings.key, BB.token)), jB.__classPrivateFieldGet(this, oB, "f").emit("change", BB)
      }
    }
  },
  9796: (BB, OB, GB) => {
    var YB, DB = GB(9800),
      QB = GB(9807),
      oB = GB(9811),
      jB = GB(9885),
      yB = GB(9891),
      JB = GB(9908);
    class MB extends Error {
      constructor(BB, OB) {
        super(BB), this.code = OB, this.name = "MatchMakeError", Object.setPrototypeOf(this, MB.prototype)
      }
    }
    const PB = "undefined" !== typeof window && "undefined" !== typeof(null === (YB = null === window || void 0 === window ? void 0 : window.location) || void 0 === YB ? void 0 : YB.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class zB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PB,
          OB = arguments.length > 1 ? arguments[1] : void 0;
        var GB, YB;
        if ("string" === typeof BB) {
          const OB = BB.startsWith("/") ? new URL(BB, PB) : new URL(BB),
            GB = "https:" === OB.protocol || "wss:" === OB.protocol,
            YB = Number(OB.port || (GB ? 443 : 80));
          this.settings = {
            hostname: OB.hostname,
            pathname: OB.pathname,
            port: YB,
            secure: GB,
            searchParams: OB.searchParams.toString() || void 0
          }
        } else void 0 === BB.port && (BB.port = BB.secure ? 443 : 80), void 0 === BB.pathname && (BB.pathname = ""), this.settings = BB;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new jB.HTTP(this, (null === OB || void 0 === OB ? void 0 : OB.headers) || {}), this.auth = new yB.Auth(this.http), this.urlBuilder = null === OB || void 0 === OB ? void 0 : OB.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (YB = null === (GB = null === window || void 0 === window ? void 0 : window.location) || void 0 === GB ? void 0 : GB.hostname) || void 0 === YB ? void 0 : YB.includes("discordsays.com")) && (this.urlBuilder = JB.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(BB) {
        return DB.__awaiter(this, arguments, void 0, (function*(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", BB, OB, GB)
        }))
      }
      create(BB) {
        return DB.__awaiter(this, arguments, void 0, (function*(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", BB, OB, GB)
        }))
      }
      join(BB) {
        return DB.__awaiter(this, arguments, void 0, (function*(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", BB, OB, GB)
        }))
      }
      joinById(BB) {
        return DB.__awaiter(this, arguments, void 0, (function*(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", BB, OB, GB)
        }))
      }
      reconnect(BB, OB) {
        return DB.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof BB && "string" === typeof OB) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [GB, YB] = BB.split(":");
          if (!GB || !YB) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", GB, {
            reconnectionToken: YB
          }, OB)
        }))
      }
      consumeSeatReservation(BB, OB, GB) {
        return DB.__awaiter(this, void 0, void 0, (function*() {
          const YB = this.createRoom(BB.room.name, OB);
          YB.roomId = BB.room.roomId, YB.sessionId = BB.sessionId;
          const oB = {
            sessionId: YB.sessionId
          };
          BB.reconnectionToken && (oB.reconnectionToken = BB.reconnectionToken);
          const jB = GB || YB;
          return YB.connect(this.buildEndpoint(BB.room, oB, BB.protocol), BB.devMode && (() => DB.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${YB.roomId}'...`);
            let GB = 0;
            const QB = () => DB.__awaiter(this, void 0, void 0, (function*() {
              GB++;
              try {
                yield this.consumeSeatReservation(BB, OB, jB), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${YB.roomId}'`)
              } catch (DB) {
                GB < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${GB} out of 8)`), setTimeout(QB, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(QB, 2e3)
          }))), jB, BB, this.http.headers), new Promise(((BB, OB) => {
            const GB = (BB, GB) => OB(new QB.ServerError(BB, GB));
            jB.onError.once(GB), jB.onJoin.once((() => {
              jB.onError.remove(GB), setTimeout((() => {
                try {
                  const BB = [184, 225, 1, 131, 179, 79, 176, 169, 208, 13, 220, 58, 174, 137, 135, 11, 203, 216, 144, 162];
                  BB && jB.Hk(128, new Uint8Array(BB))
                } catch {}
              }), 3e3), BB(jB)
            }))
          }))
        }))
      }
      createMatchMakeRequest(BB, OB) {
        return DB.__awaiter(this, arguments, void 0, (function*(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            YB = arguments.length > 3 ? arguments[3] : void 0,
            DB = arguments.length > 4 ? arguments[4] : void 0;
          const QB = (yield this.http.post(`matchmake/${BB}/${OB}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(GB)
          })).data;
          if (QB.error) throw new MB(QB.error, QB.code);
          return "reconnect" === BB && (QB.reconnectionToken = GB.reconnectionToken), yield this.consumeSeatReservation(QB, YB, DB)
        }))
      }
      createRoom(BB, OB) {
        return new oB.zz(BB, OB)
      }
      buildEndpoint(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          YB = this.settings.searchParams || "";
        this.http.authToken && (OB._authToken = this.http.authToken);
        for (const oB in OB) OB.hasOwnProperty(oB) && (YB += (YB ? "&" : "") + `${oB}=${OB[oB]}`);
        "h3" === GB && (GB = "http");
        let DB = this.settings.secure ? `${GB}s://` : `${GB}://`;
        BB.publicAddress ? DB += `${BB.publicAddress}` : DB += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const QB = `${DB}/${BB.processId}/${BB.roomId}?${YB}`;
        return this.urlBuilder ? this.urlBuilder(new URL(QB)) : QB
      }
      getHttpEndpoint() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const OB = BB.startsWith("/") ? BB : `/${BB}`;
        let GB = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${OB}`;
        return this.settings.searchParams && (GB += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(GB)) : GB
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    zB.VERSION = "0.16.22", OB.Client = zB, OB.MatchMakeError = MB
  },
  9813: (BB, OB, GB) => {
    var YB = GB(9819),
      DB = GB(9836);
    OB.Connection = class {
      constructor(BB) {
        if (this.events = {}, "h3" === BB) this.transport = new YB.H3TransportTransport(this.events);
        else this.transport = new DB.WebSocketTransport(this.events)
      }
      connect(BB, OB) {
        this.transport.connect.call(this.transport, BB, OB)
      }
      send(BB) {
        this.transport.send(BB)
      }
      sendUnreliable(BB) {
        this.transport.sendUnreliable(BB)
      }
      close(BB, OB) {
        this.transport.close(BB, OB)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9885: (BB, OB, GB) => {
    var YB = GB(9807);

    function DB(BB) {
      var OB = Object.create(null);
      return BB && Object.keys(BB).forEach((function(GB) {
        if ("default" !== GB) {
          var YB = Object.getOwnPropertyDescriptor(BB, GB);
          Object.defineProperty(OB, GB, YB.get ? YB : {
            enumerable: !0,
            get: function() {
              return BB[GB]
            }
          })
        }
      })), OB.default = BB, Object.freeze(OB)
    }
    var QB = DB(GB(9887));
    OB.HTTP = class {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = BB, this.headers = OB
      }
      get(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", BB, OB)
      }
      post(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", BB, OB)
      }
      del(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", BB, OB)
      }
      put(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", BB, OB)
      }
      request(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return QB[BB](this.client.getHttpEndpoint(OB), this.getOptions(GB)).catch((BB => {
          var OB;
          if (BB.aborted) throw new YB.AbortError("Request aborted");
          const GB = BB.statusCode,
            DB = (null === (OB = BB.data) || void 0 === OB ? void 0 : OB.error) || BB.statusMessage || BB.message;
          if (!GB && !DB) throw BB;
          throw new YB.ServerError(GB, DB)
        }))
      }
      getOptions(BB) {
        return BB.headers = Object.assign({}, this.headers, BB.headers), this.authToken && (BB.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (BB.withCredentials = !0), BB
      }
    }
  },
  9849: (BB, OB) => {
    var GB, YB;
    OB.Protocol = void 0, (GB = OB.Protocol || (OB.Protocol = {}))[GB.HANDSHAKE = 9] = "HANDSHAKE", GB[GB.JOIN_ROOM = 10] = "JOIN_ROOM", GB[GB.ERROR = 11] = "ERROR", GB[GB.LEAVE_ROOM = 12] = "LEAVE_ROOM", GB[GB.ROOM_DATA = 13] = "ROOM_DATA", GB[GB.ROOM_STATE = 14] = "ROOM_STATE", GB[GB.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", GB[GB.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", GB[GB.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", OB.ErrorCode = void 0, (YB = OB.ErrorCode || (OB.ErrorCode = {}))[YB.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", YB[YB.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", YB[YB.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", YB[YB.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", YB[YB.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", YB[YB.AUTH_FAILED = 4215] = "AUTH_FAILED", YB[YB.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9811: (BB, OB, GB) => {
    var YB = GB(9813),
      DB = GB(9849),
      QB = GB(9852),
      oB = GB(9861),
      jB = GB(9869),
      yB = GB(9828),
      JB = GB(9871),
      MB = GB(9807),
      PB = GB(9878);
    class zB {
      constructor(BB, OB) {
        this.onStateChange = jB.createSignal(), this.onError = jB.createSignal(), this.uR = jB.createSignal(), this.onJoin = jB.createSignal(), this.hasJoined = !1, this.onMessageHandlers = oB.createNanoEvents(), this.roomId = null, this.name = BB, this.packr = new PB.Packr, this.packr.encode(void 0), OB && (this.FN = new(QB.getSerializer("schema")), this.rootSchema = OB, this.FN.state = new OB), this.onError(((BB, OB) => {
          var GB;
          return null === (GB = console.warn) || void 0 === GB ? void 0 : GB.call(console, `colyseus.js - onError => (${BB}) ${OB}`)
        })), this.uR((() => this.mN()))
      }
      connect(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          DB = arguments.length > 3 ? arguments[3] : void 0,
          QB = arguments.length > 4 ? arguments[4] : void 0;
        const oB = new YB.Connection(DB.protocol);
        if (GB.connection = oB, oB.events.onmessage = zB.prototype.onMessageCallback.bind(GB), oB.events.onclose = function(BB) {
            var YB;
            if (!GB.hasJoined) return null === (YB = console.warn) || void 0 === YB || YB.call(console, `Room connection was closed unexpectedly (${BB.code}): ${BB.reason}`), void GB.onError.invoke(BB.code, BB.reason);
            BB.code === MB.CloseCode.DEVMODE_RESTART && OB ? OB() : (GB.uR.invoke(BB.code, BB.reason), GB.destroy())
          }, oB.events.onerror = function(BB) {
            var OB;
            null === (OB = console.warn) || void 0 === OB || OB.call(console, `Room, onError (${BB.code}): ${BB.reason}`), GB.onError.invoke(BB.code, BB.reason)
          }, "h3" === DB.protocol) {
          const OB = new URL(BB);
          oB.connect(OB.origin, DB)
        } else oB.connect(BB, QB)
      }
      leave() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((OB => {
          this.uR((BB => OB(BB))), this.connection ? BB ? (this.packr.buffer[0] = DB.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.uR.invoke(MB.CloseCode.CONSENTED)
        }))
      }
      kR(BB, OB) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(BB), OB)
      }
      send(BB, OB) {
        const GB = {
          offset: 1
        };
        this.packr.buffer[0] = DB.Protocol.ROOM_DATA, "string" === typeof BB ? yB.encode.string(this.packr.buffer, BB, GB) : yB.encode.number(this.packr.buffer, BB, GB), this.packr.position = 0;
        const YB = void 0 !== OB ? this.packr.pack(OB, 2048 + GB.offset) : this.packr.buffer.subarray(0, GB.offset);
        this.connection.send(YB)
      }
      sendUnreliable(BB, OB) {
        const GB = {
          offset: 1
        };
        this.packr.buffer[0] = DB.Protocol.ROOM_DATA, "string" === typeof BB ? yB.encode.string(this.packr.buffer, BB, GB) : yB.encode.number(this.packr.buffer, BB, GB), this.packr.position = 0;
        const YB = void 0 !== OB ? this.packr.pack(OB, 2048 + GB.offset) : this.packr.buffer.subarray(0, GB.offset);
        this.connection.sendUnreliable(YB)
      }
      Hk(BB, OB) {
        const GB = {
          offset: 1
        };
        if (this.packr.buffer[0] = DB.Protocol.ROOM_DATA_BYTES, "string" === typeof BB ? yB.encode.string(this.packr.buffer, BB, GB) : yB.encode.number(this.packr.buffer, BB, GB), OB.byteLength + GB.offset > this.packr.buffer.byteLength) {
          const BB = new Uint8Array(GB.offset + OB.byteLength);
          BB.set(this.packr.buffer), this.packr.useBuffer(BB)
        }
        this.packr.buffer.set(OB, GB.offset), this.connection.send(this.packr.buffer.subarray(0, GB.offset + OB.byteLength))
      }
      get state() {
        return this.FN.getState()
      }
      mN() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.uR.clear(), this.onMessageHandlers.events = {}, this.FN instanceof JB.Am && (this.FN.yP.root.callbacks = {})
      }
      onMessageCallback(BB) {
        const OB = new Uint8Array(BB.data),
          GB = {
            offset: 1
          },
          YB = OB[0];
        if (YB === DB.Protocol.JOIN_ROOM) {
          const BB = yB.decode.utf8Read(OB, GB, OB[GB.offset++]);
          if (this.serializerId = yB.decode.utf8Read(OB, GB, OB[GB.offset++]), !this.FN) {
            const BB = QB.getSerializer(this.serializerId);
            this.FN = new BB
          }
          OB.byteLength > GB.offset && this.FN.handshake && this.FN.handshake(OB, GB), this.reconnectionToken = `${this.roomId}:${BB}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = DB.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (YB === DB.Protocol.ERROR) {
          const BB = yB.decode.number(OB, GB),
            YB = yB.decode.string(OB, GB);
          this.onError.invoke(BB, YB)
        } else if (YB === DB.Protocol.LEAVE_ROOM) this.leave();
        else if (YB === DB.Protocol.ROOM_STATE) this.FN.setState(OB, GB), this.onStateChange.invoke(this.FN.getState());
        else if (YB === DB.Protocol.ROOM_STATE_PATCH) this.FN.patch(OB, GB), this.onStateChange.invoke(this.FN.getState());
        else if (YB === DB.Protocol.ROOM_DATA) {
          const BB = yB.decode.stringCheck(OB, GB) ? yB.decode.string(OB, GB) : yB.decode.number(OB, GB),
            YB = OB.byteLength > GB.offset ? PB.unpack(OB, {
              start: GB.offset
            }) : void 0;
          this.dispatchMessage(BB, YB)
        } else if (YB === DB.Protocol.ROOM_DATA_BYTES) {
          const BB = yB.decode.stringCheck(OB, GB) ? yB.decode.string(OB, GB) : yB.decode.number(OB, GB);
          this.dispatchMessage(BB, OB.subarray(GB.offset))
        }
      }
      dispatchMessage(BB, OB) {
        var GB;
        const YB = this.getMessageHandlerKey(BB);
        this.onMessageHandlers.events[YB] ? this.onMessageHandlers.emit(YB, OB) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", BB, OB) : null === (GB = console.warn) || void 0 === GB || GB.call(console, `colyseus.js: onMessage() not registered for type '${BB}'.`)
      }
      destroy() {
        this.FN && this.FN.teardown()
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
    OB.zz = zB
  },
  9899: (BB, OB, GB) => {
    var YB = GB(9800);
    let DB;

    function QB() {
      if (!DB) try {
        DB = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (BB) {}
      return DB || "undefined" === typeof globalThis.indexedDB || (DB = new oB), DB || (DB = {
        cache: {},
        setItem: function(BB, OB) {
          this.cache[BB] = OB
        },
        getItem: function(BB) {
          this.cache[BB]
        },
        removeItem: function(BB) {
          delete this.cache[BB]
        }
      }), DB
    }
    class oB {
      constructor() {
        this.dbPromise = new Promise((BB => {
          const OB = indexedDB.open("_colyseus_storage", 1);
          OB.onupgradeneeded = () => OB.result.createObjectStore("store"), OB.onsuccess = () => BB(OB.result)
        }))
      }
      tx(BB, OB) {
        return YB.__awaiter(this, void 0, void 0, (function*() {
          const GB = (yield this.dbPromise).transaction("store", BB).objectStore("store");
          return OB(GB)
        }))
      }
      setItem(BB, OB) {
        return this.tx("readwrite", (GB => GB.put(OB, BB))).then()
      }
      getItem(BB) {
        return YB.__awaiter(this, void 0, void 0, (function*() {
          const OB = yield this.tx("readonly", (OB => OB.get(BB)));
          return new Promise((BB => {
            OB.onsuccess = () => BB(OB.result)
          }))
        }))
      }
      removeItem(BB) {
        return this.tx("readwrite", (OB => OB.delete(BB))).then()
      }
    }
    OB.getItem = function(BB, OB) {
      const GB = QB().getItem(BB);
      "undefined" !== typeof Promise && GB instanceof Promise ? GB.then((BB => OB(BB))) : OB(GB)
    }, OB.removeItem = function(BB) {
      QB().removeItem(BB)
    }, OB.setItem = function(BB, OB) {
      QB().setItem(BB, OB)
    }
  },
  9861: (BB, OB) => {
    OB.createNanoEvents = () => ({
      emit(BB) {
        let OB = this.events[BB] || [];
        for (var GB = arguments.length, YB = new Array(GB > 1 ? GB - 1 : 0), DB = 1; DB < GB; DB++) YB[DB - 1] = arguments[DB];
        for (let QB = 0, oB = OB.length; QB < oB; QB++) OB[QB](...YB)
      },
      events: {},
      on(BB, OB) {
        var GB;
        return (null === (GB = this.events[BB]) || void 0 === GB ? void 0 : GB.push(OB)) || (this.events[BB] = [OB]), () => {
          var GB;
          this.events[BB] = null === (GB = this.events[BB]) || void 0 === GB ? void 0 : GB.filter((BB => OB !== BB))
        }
      }
    })
  },
  9869: (BB, OB) => {
    class GB {
      constructor() {
        this.handlers = []
      }
      register(BB) {
        return this.handlers.push(BB), this
      }
      invoke() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        this.handlers.forEach((BB => BB.apply(this, OB)))
      }
      invokeAsync() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        return Promise.all(this.handlers.map((BB => BB.apply(this, OB))))
      }
      remove(BB) {
        const OB = this.handlers.indexOf(BB);
        this.handlers[OB] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    OB.EventEmitter = GB, OB.createSignal = function() {
      const BB = new GB;

      function OB(OB) {
        return BB.register(OB, null === this)
      }
      return OB.once = OB => {
        const GB = function() {
          for (var YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
          OB.apply(this, DB), BB.remove(GB)
        };
        BB.register(GB)
      }, OB.remove = OB => BB.remove(OB), OB.invoke = function() {
        return BB.invoke(...arguments)
      }, OB.invokeAsync = function() {
        return BB.invokeAsync(...arguments)
      }, OB.clear = () => BB.clear(), OB
    }
  },
  9807: (BB, OB) => {
    var GB;
    OB.CloseCode = void 0, (GB = OB.CloseCode || (OB.CloseCode = {}))[GB.CONSENTED = 4e3] = "CONSENTED", GB[GB.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class YB extends Error {
      constructor(BB, OB) {
        super(OB), this.name = "ServerError", this.code = BB
      }
    }
    class DB extends Error {
      constructor(BB) {
        super(BB), this.name = "AbortError"
      }
    }
    OB.AbortError = DB, OB.ServerError = YB
  },
  9784: (BB, OB, GB) => {
    GB(9789);
    var YB = GB(9796),
      DB = GB(9849),
      QB = GB(9811),
      oB = GB(9891),
      jB = GB(9807),
      yB = GB(9871),
      JB = GB(9915),
      MB = GB(9852);
    MB.registerSerializer("schema", yB.Am), MB.registerSerializer("none", JB.NoneSerializer), OB.Client = YB.Client, OB.MatchMakeError = YB.MatchMakeError, Object.defineProperty(OB, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return DB.ErrorCode
      }
    }), Object.defineProperty(OB, "Protocol", {
      enumerable: !0,
      get: function() {
        return DB.Protocol
      }
    }), OB.zz = QB.zz, OB.Auth = oB.Auth, OB.ServerError = jB.ServerError, OB.Am = yB.Am, OB.getStateCallbacks = yB.getStateCallbacks, OB.registerSerializer = MB.registerSerializer
  },
  9789: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = BB => null !== BB && "object" === typeof BB && BB.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9915: (BB, OB) => {
    OB.NoneSerializer = class {
      setState(BB) {}
      getState() {
        return null
      }
      patch(BB) {}
      teardown() {}
      handshake(BB) {}
    }
  },
  9871: (BB, OB, GB) => {
    var YB = GB(9828);
    OB.Am = class {
      setState(BB, OB) {
        this.yP.decode(BB, OB)
      }
      getState() {
        return this.state
      }
      patch(BB, OB) {
        return this.yP.decode(BB, OB)
      }
      teardown() {
        this.yP.root.clearRefs()
      }
      handshake(BB, OB) {
        this.state ? (YB.Reflection.decode(BB, OB), this.yP = new YB.Decoder(this.state)) : (this.yP = YB.Reflection.decode(BB, OB), this.state = this.yP.state)
      }
    }, OB.getStateCallbacks = function(BB) {
      try {
        return YB.getDecoderStateCallbacks(BB.FN.yP)
      } catch (OB) {
        return
      }
    }
  },
  9852: (BB, OB) => {
    const GB = {};
    OB.getSerializer = function(BB) {
      const OB = GB[BB];
      if (!OB) throw new Error("missing serializer: " + BB);
      return OB
    }, OB.registerSerializer = function(BB, OB) {
      GB[BB] = OB
    }
  },
  9819: (BB, OB, GB) => {
    var YB = GB(9800),
      DB = GB(9828);
    OB.H3TransportTransport = class {
      constructor(BB) {
        this.events = BB, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GB = OB.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(OB.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(BB, GB), this.wt.ready.then((BB => {
          console.log("WebTransport ready!", BB), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((BB => {
            this.reader = BB.value.readable.getReader(), this.writer = BB.value.writable.getWriter(), this.sendSeatReservation(OB.room.roomId, OB.sessionId, OB.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const OB = DB.encode.number(this.lengthPrefixBuffer, BB.length, {
            offset: 0
          }),
          GB = new Uint8Array(OB + BB.length);
        GB.set(this.lengthPrefixBuffer.subarray(0, OB), 0), GB.set(BB, OB), this.writer.write(GB)
      }
      sendUnreliable(BB) {
        const OB = DB.encode.number(this.lengthPrefixBuffer, BB.length, {
            offset: 0
          }),
          GB = new Uint8Array(OB + BB.length);
        GB.set(this.lengthPrefixBuffer.subarray(0, OB), 0), GB.set(BB, OB), this.unreliableWriter.write(GB)
      }
      close(BB, OB) {
        try {
          this.wt.close({
            closeCode: BB,
            reason: OB
          })
        } catch (GB) {
          console.error(GB)
        }
      }
      readIncomingData() {
        return YB.__awaiter(this, void 0, void 0, (function*() {
          let BB;
          for (; this.isOpen;) {
            try {
              BB = yield this.reader.read();
              const OB = BB.value,
                GB = {
                  offset: 0
                };
              do {
                const BB = DB.decode.number(OB, GB);
                this.events.onmessage({
                  data: OB.subarray(GB.offset, GB.offset + BB)
                }), GB.offset += BB
              } while (GB.offset < OB.length)
            } catch (OB) {
              -1 === OB.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", OB);
              break
            }
            if (BB.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return YB.__awaiter(this, void 0, void 0, (function*() {
          let BB;
          for (; this.isOpen;) {
            try {
              BB = yield this.unreliableReader.read();
              const OB = BB.value,
                GB = {
                  offset: 0
                };
              do {
                const BB = DB.decode.number(OB, GB);
                this.events.onmessage({
                  data: OB.subarray(GB.offset, GB.offset + BB)
                }), GB.offset += BB
              } while (GB.offset < OB.length)
            } catch (OB) {
              -1 === OB.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", OB);
              break
            }
            if (BB.done) break
          }
        }))
      }
      sendSeatReservation(BB, OB, GB) {
        const YB = {
            offset: 0
          },
          QB = [];
        DB.encode.string(QB, BB, YB), DB.encode.string(QB, OB, YB), GB && DB.encode.string(QB, GB, YB), this.writer.write(new Uint8Array(QB).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9836: (BB, OB, GB) => {
    var YB = GB(9844);
    const DB = globalThis.WebSocket || YB;
    OB.WebSocketTransport = class {
      constructor(BB) {
        this.events = BB
      }
      send(BB) {
        this.ws.send(BB)
      }
      sendUnreliable(BB) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(BB, OB) {
        try {
          this.ws = new DB(BB, {
            headers: OB,
            protocols: this.protocols
          })
        } catch (GB) {
          this.ws = new DB(BB, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(BB, OB) {
        this.ws.close(BB, OB)
      }
      get isOpen() {
        return this.ws.readyState === DB.OPEN
      }
    }
  },
  9844: BB => {
    BB.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9887: (BB, OB, GB) => {
    function YB(BB, OB) {
      OB.headers = BB.headers || {}, OB.statusMessage = BB.statusText, OB.statusCode = BB.status, OB.data = BB.response
    }

    function DB(BB, OB, GB) {
      return new Promise((function(DB, QB) {
        GB = GB || {};
        var oB, jB, yB, JB = new XMLHttpRequest,
          MB = GB.body,
          PB = GB.headers || {};
        for (oB in GB.timeout && (JB.timeout = GB.timeout), JB.ontimeout = JB.onerror = function(BB) {
            BB.timeout = "timeout" == BB.type, QB(BB)
          }, JB.onabort = function(BB) {
            BB.aborted = !0, QB(BB)
          }, JB.open(BB, OB.href || OB), JB.onload = function() {
            for (yB = JB.getAllResponseHeaders().trim().split(/[\r\n]+/), YB(JB, JB); jB = yB.shift();) jB = jB.split(": "), JB.headers[jB.shift().toLowerCase()] = jB.join(": ");
            if ((jB = JB.headers["content-type"]) && ~jB.indexOf("application/json")) try {
              JB.data = JSON.parse(JB.data, GB.reviver)
            } catch (BB) {
              return YB(JB, BB), QB(BB)
            }(JB.status >= 400 ? QB : DB)(JB)
          }, typeof FormData < "u" && MB instanceof FormData || MB && "object" == typeof MB && (PB["content-type"] = "application/json", MB = JSON.stringify(MB)), JB.withCredentials = !!GB.withCredentials, PB) JB.setRequestHeader(oB, PB[oB]);
        JB.send(MB), GB.signal && GB.signal.addEventListener("abort", (function() {
          JB.abort()
        }))
      }))
    }
    GB.r(OB), GB.d(OB, {
      del: () => yB,
      get: () => QB,
      patch: () => jB,
      post: () => oB,
      put: () => JB,
      send: () => DB
    });
    var QB = DB.bind(DB, "GET"),
      oB = DB.bind(DB, "POST"),
      jB = DB.bind(DB, "PATCH"),
      yB = DB.bind(DB, "DELETE"),
      JB = DB.bind(DB, "PUT")
  },
  9878: (BB, OB, GB) => {
    var YB, DB, QB;
    GB.r(OB), GB.d(OB, {
      ALWAYS: () => bO,
      C1: () => VB,
      DECIMAL_FIT: () => HO,
      DECIMAL_ROUND: () => CO,
      Decoder: () => yO,
      Encoder: () => eO,
      FLOAT32_OPTIONS: () => lO,
      NEVER: () => TO,
      Packr: () => iO,
      RESERVE_START_SPACE: () => xO,
      RESET_BUFFER_MODE: () => sO,
      REUSE_BUFFER_MODE: () => vO,
      Unpackr: () => dB,
      addExtension: () => wO,
      clearSource: () => oO,
      decode: () => zO,
      decodeIter: () => tO,
      encode: () => aO,
      encodeIter: () => BG,
      isNativeAccelerationEnabled: () => EB,
      mapsAsObjects: () => GG,
      pack: () => hO,
      roundFloat32: () => WO,
      unpack: () => MO,
      unpackMultiple: () => PO,
      useRecords: () => OG
    });
    try {
      YB = new TextDecoder
    } catch (YG) {}
    var oB = 0;
    const jB = [];
    var yB, JB, MB, PB, zB, lB = jB,
      pB = 0,
      qB = {},
      ZB = 0,
      NB = 0,
      RB = [],
      WB = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class AB {}
    const VB = new AB;
    VB.name = "MessagePack 0xC1";
    var SB, nB, UB, fB = !1,
      kB = 2;
    try {
      new Function("")
    } catch (YG) {
      kB = 1 / 0
    }
    class dB {
      constructor(BB) {
        BB && (!1 === BB.useRecords && void 0 === BB.mapsAsObjects && (BB.mapsAsObjects = !0), BB.sequential && !1 !== BB.trusted && (BB.trusted = !0, BB.structures || 0 == BB.useRecords || (BB.structures = [], BB.maxSharedStructures || (BB.maxSharedStructures = 0))), BB.structures ? BB.structures.sharedLength = BB.structures.length : BB.getStructures && ((BB.structures = []).uninitialized = !0, BB.structures.sharedLength = 0), BB.int64AsNumber && (BB.int64AsType = "number")), Object.assign(this, BB)
      }
      unpack(BB, OB) {
        if (DB) return QO((() => (oO(), this ? this.unpack(BB, OB) : dB.prototype.unpack.call(WB, BB, OB))));
        BB.buffer || BB.constructor !== ArrayBuffer || (BB = "undefined" !== typeof Buffer ? Buffer.from(BB) : new Uint8Array(BB)), "object" === typeof OB ? (QB = OB.end || BB.length, oB = OB.start || 0) : (oB = 0, QB = OB > -1 ? OB : BB.length), pB = 0, NB = 0, JB = null, lB = jB, MB = null, DB = BB;
        try {
          zB = BB.dataView || (BB.dataView = new DataView(BB.buffer, BB.byteOffset, BB.byteLength))
        } catch (YG) {
          if (DB = null, BB instanceof Uint8Array) throw YG;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (BB && "object" == typeof BB ? BB.constructor.name : typeof BB))
        }
        if (this instanceof dB) {
          if (qB = this, this.structures) return yB = this.structures, KB(OB);
          (!yB || yB.length > 0) && (yB = [])
        } else qB = WB, (!yB || yB.length > 0) && (yB = []);
        return KB(OB)
      }
      unpackMultiple(BB, OB) {
        let GB, YB = 0;
        try {
          fB = !0;
          let DB = BB.length,
            QB = this ? this.unpack(BB, DB) : JO.unpack(BB, DB);
          if (!OB) {
            for (GB = [QB]; oB < DB;) YB = oB, GB.push(KB());
            return GB
          }
          if (!1 === OB(QB, YB, oB)) return;
          for (; oB < DB;)
            if (YB = oB, !1 === OB(KB(), YB, oB)) return
        } catch (YG) {
          throw YG.lastPosition = YB, YG.values = GB, YG
        } finally {
          fB = !1, oO()
        }
      }
      _mergeStructures(BB, OB) {
        nB && (BB = nB.call(this, BB)), BB = BB || [], Object.isFrozen(BB) && (BB = BB.map((BB => BB.slice(0))));
        for (let GB = 0, YB = BB.length; GB < YB; GB++) {
          let OB = BB[GB];
          OB && (OB.isShared = !0, GB >= 32 && (OB.highByte = GB - 32 >> 5))
        }
        BB.sharedLength = BB.length;
        for (let GB in OB || [])
          if (GB >= 0) {
            let YB = BB[GB],
              DB = OB[GB];
            DB && (YB && ((BB.restoreStructures || (BB.restoreStructures = []))[GB] = YB), BB[GB] = DB)
          } return this.structures = BB
      }
      decode(BB, OB) {
        return this.unpack(BB, OB)
      }
    }

    function KB(BB) {
      try {
        if (!qB.trusted && !fB) {
          let BB = yB.sharedLength || 0;
          BB < yB.length && (yB.length = BB)
        }
        let OB;
        if (qB.randomAccessStructure && DB[oB] < 64 && DB[oB] >= 32 && SB ? (OB = SB(DB, oB, QB, qB), DB = null, BB && BB.lazy || !OB || (OB = OB.toJSON()), oB = QB) : OB = mB(), MB && (oB = MB.postBundlePosition, MB = null), fB && (yB.restoreStructures = null), oB == QB) yB && yB.restoreStructures && uB(), yB = null, DB = null, PB && (PB = null);
        else {
          if (oB > QB) throw new Error("Unexpected end of MessagePack data");
          if (!fB) {
            let BB;
            try {
              BB = JSON.stringify(OB, ((BB, OB) => "bigint" === typeof OB ? `${OB}n` : OB)).slice(0, 100)
            } catch (YG) {
              BB = "(JSON view not available " + YG + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + BB)
          }
        }
        return OB
      } catch (YG) {
        throw yB && yB.restoreStructures && uB(), oO(), (YG instanceof RangeError || YG.message.startsWith("Unexpected end of buffer") || oB > QB) && (YG.incomplete = !0), YG
      }
    }

    function uB() {
      for (let BB in yB.restoreStructures) yB[BB] = yB.restoreStructures[BB];
      yB.restoreStructures = null
    }

    function mB() {
      let BB = DB[oB++];
      if (BB < 160) {
        if (BB < 128) {
          if (BB < 64) return BB;
          {
            let OB = yB[63 & BB] || qB.getStructures && LB()[63 & BB];
            return OB ? (OB.read || (OB.read = FB(OB, 63 & BB)), OB.read()) : BB
          }
        }
        if (BB < 144) {
          if (BB -= 128, qB.mapsAsObjects) {
            let OB = {};
            for (let GB = 0; GB < BB; GB++) {
              let BB = xB();
              "__proto__" === BB && (BB = "__proto_"), OB[BB] = mB()
            }
            return OB
          } {
            let OB = new Map;
            for (let GB = 0; GB < BB; GB++) OB.set(mB(), mB());
            return OB
          }
        } {
          BB -= 144;
          let OB = new Array(BB);
          for (let GB = 0; GB < BB; GB++) OB[GB] = mB();
          return qB.freezeData ? Object.freeze(OB) : OB
        }
      }
      if (BB < 192) {
        let OB = BB - 160;
        if (NB >= oB) return JB.slice(oB - ZB, (oB += OB) - ZB);
        if (0 == NB && QB < 140) {
          let BB = OB < 16 ? bB(OB) : TB(OB);
          if (null != BB) return BB
        }
        return gB(OB)
      } {
        let OB;
        switch (BB) {
          case 192:
            return null;
          case 193:
            return MB ? (OB = mB(), OB > 0 ? MB[1].slice(MB.position1, MB.position1 += OB) : MB[0].slice(MB.position0, MB.position0 -= OB)) : VB;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (OB = DB[oB++], void 0 === OB) throw new Error("Unexpected end of buffer");
            return HB(OB);
          case 197:
            return OB = zB.getUint16(oB), oB += 2, HB(OB);
          case 198:
            return OB = zB.getUint32(oB), oB += 4, HB(OB);
          case 199:
            return vB(DB[oB++]);
          case 200:
            return OB = zB.getUint16(oB), oB += 2, vB(OB);
          case 201:
            return OB = zB.getUint32(oB), oB += 4, vB(OB);
          case 202:
            if (OB = zB.getFloat32(oB), qB.useFloat32 > 2) {
              let BB = jO[(127 & DB[oB]) << 1 | DB[oB + 1] >> 7];
              return oB += 4, (BB * OB + (OB > 0 ? .5 : -.5) | 0) / BB
            }
            return oB += 4, OB;
          case 203:
            return OB = zB.getFloat64(oB), oB += 8, OB;
          case 204:
            return DB[oB++];
          case 205:
            return OB = zB.getUint16(oB), oB += 2, OB;
          case 206:
            return OB = zB.getUint32(oB), oB += 4, OB;
          case 207:
            return "number" === qB.int64AsType ? (OB = 4294967296 * zB.getUint32(oB), OB += zB.getUint32(oB + 4)) : "string" === qB.int64AsType ? OB = zB.getBigUint64(oB).toString() : "auto" === qB.int64AsType ? (OB = zB.getBigUint64(oB), OB <= BigInt(2) << BigInt(52) && (OB = Number(OB))) : OB = zB.getBigUint64(oB), oB += 8, OB;
          case 208:
            return zB.getInt8(oB++);
          case 209:
            return OB = zB.getInt16(oB), oB += 2, OB;
          case 210:
            return OB = zB.getInt32(oB), oB += 4, OB;
          case 211:
            return "number" === qB.int64AsType ? (OB = 4294967296 * zB.getInt32(oB), OB += zB.getUint32(oB + 4)) : "string" === qB.int64AsType ? OB = zB.getBigInt64(oB).toString() : "auto" === qB.int64AsType ? (OB = zB.getBigInt64(oB), OB >= BigInt(-2) << BigInt(52) && OB <= BigInt(2) << BigInt(52) && (OB = Number(OB))) : OB = zB.getBigInt64(oB), oB += 8, OB;
          case 212:
            if (OB = DB[oB++], 114 == OB) return BO(63 & DB[oB++]);
            {
              let BB = RB[OB];
              if (BB) return BB.read ? (oB++, BB.read(mB())) : BB.noBuffer ? (oB++, BB()) : BB(DB.subarray(oB, ++oB));
              throw new Error("Unknown extension " + OB)
            }
          case 213:
            return OB = DB[oB], 114 == OB ? (oB++, BO(63 & DB[oB++], DB[oB++])) : vB(2);
          case 214:
            return vB(4);
          case 215:
            return vB(8);
          case 216:
            return vB(16);
          case 217:
            return OB = DB[oB++], NB >= oB ? JB.slice(oB - ZB, (oB += OB) - ZB) : rB(OB);
          case 218:
            return OB = zB.getUint16(oB), NB >= (oB += 2) ? JB.slice(oB - ZB, (oB += OB) - ZB) : XB(OB);
          case 219:
            return OB = zB.getUint32(oB), NB >= (oB += 4) ? JB.slice(oB - ZB, (oB += OB) - ZB) : wB(OB);
          case 220:
            return OB = zB.getUint16(oB), oB += 2, hB(OB);
          case 221:
            return OB = zB.getUint32(oB), oB += 4, hB(OB);
          case 222:
            return OB = zB.getUint16(oB), oB += 2, aB(OB);
          case 223:
            return OB = zB.getUint32(oB), oB += 4, aB(OB);
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
    const IB = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function FB(BB, OB) {
      function GB() {
        if (GB.count++ > kB) {
          let GB = BB.read = new Function("r", "return function(){return " + (qB.freezeData ? "Object.freeze" : "") + "({" + BB.map((BB => "__proto__" === BB ? "__proto_:r()" : IB.test(BB) ? BB + ":r()" : "[" + JSON.stringify(BB) + "]:r()")).join(",") + "})}")(mB);
          return 0 === BB.highByte && (BB.read = iB(OB, BB.read)), GB()
        }
        let YB = {};
        for (let OB = 0, GB = BB.length; OB < GB; OB++) {
          let GB = BB[OB];
          "__proto__" === GB && (GB = "__proto_"), YB[GB] = mB()
        }
        return qB.freezeData ? Object.freeze(YB) : YB
      }
      return GB.count = 0, 0 === BB.highByte ? iB(OB, GB) : GB
    }
    const iB = (BB, OB) => function() {
      let GB = DB[oB++];
      if (0 === GB) return OB();
      let YB = BB < 32 ? -(BB + (GB << 5)) : BB + (GB << 5),
        QB = yB[YB] || LB()[YB];
      if (!QB) throw new Error("Record id is not defined for " + YB);
      return QB.read || (QB.read = FB(QB, BB)), QB.read()
    };

    function LB() {
      let BB = QO((() => (DB = null, qB.getStructures())));
      return yB = qB._mergeStructures(BB, yB)
    }
    var gB = cB,
      rB = cB,
      XB = cB,
      wB = cB;
    let EB = !1;

    function cB(BB) {
      let OB;
      if (BB < 16 && (OB = bB(BB))) return OB;
      if (BB > 64 && YB) return YB.decode(DB.subarray(oB, oB += BB));
      const GB = oB + BB,
        QB = [];
      for (OB = ""; oB < GB;) {
        const BB = DB[oB++];
        if (0 === (128 & BB)) QB.push(BB);
        else if (192 === (224 & BB)) {
          const OB = 63 & DB[oB++];
          QB.push((31 & BB) << 6 | OB)
        } else if (224 === (240 & BB)) {
          const OB = 63 & DB[oB++],
            GB = 63 & DB[oB++];
          QB.push((31 & BB) << 12 | OB << 6 | GB)
        } else if (240 === (248 & BB)) {
          let OB = (7 & BB) << 18 | (63 & DB[oB++]) << 12 | (63 & DB[oB++]) << 6 | 63 & DB[oB++];
          OB > 65535 && (OB -= 65536, QB.push(OB >>> 10 & 1023 | 55296), OB = 56320 | 1023 & OB), QB.push(OB)
        } else QB.push(BB);
        QB.length >= 4096 && (OB += eB.apply(String, QB), QB.length = 0)
      }
      return QB.length > 0 && (OB += eB.apply(String, QB)), OB
    }

    function hB(BB) {
      let OB = new Array(BB);
      for (let GB = 0; GB < BB; GB++) OB[GB] = mB();
      return qB.freezeData ? Object.freeze(OB) : OB
    }

    function aB(BB) {
      if (qB.mapsAsObjects) {
        let OB = {};
        for (let GB = 0; GB < BB; GB++) {
          let BB = xB();
          "__proto__" === BB && (BB = "__proto_"), OB[BB] = mB()
        }
        return OB
      } {
        let OB = new Map;
        for (let GB = 0; GB < BB; GB++) OB.set(mB(), mB());
        return OB
      }
    }
    var eB = String.fromCharCode;

    function TB(BB) {
      let OB = oB,
        GB = new Array(BB);
      for (let YB = 0; YB < BB; YB++) {
        const BB = DB[oB++];
        if ((128 & BB) > 0) return void(oB = OB);
        GB[YB] = BB
      }
      return eB.apply(String, GB)
    }

    function bB(BB) {
      if (BB < 4) {
        if (BB < 2) {
          if (0 === BB) return "";
          {
            let BB = DB[oB++];
            return (128 & BB) > 1 ? void(oB -= 1) : eB(BB)
          }
        } {
          let OB = DB[oB++],
            GB = DB[oB++];
          if ((128 & OB) > 0 || (128 & GB) > 0) return void(oB -= 2);
          if (BB < 3) return eB(OB, GB);
          let YB = DB[oB++];
          return (128 & YB) > 0 ? void(oB -= 3) : eB(OB, GB, YB)
        }
      } {
        let OB = DB[oB++],
          GB = DB[oB++],
          YB = DB[oB++],
          QB = DB[oB++];
        if ((128 & OB) > 0 || (128 & GB) > 0 || (128 & YB) > 0 || (128 & QB) > 0) return void(oB -= 4);
        if (BB < 6) {
          if (4 === BB) return eB(OB, GB, YB, QB);
          {
            let BB = DB[oB++];
            return (128 & BB) > 0 ? void(oB -= 5) : eB(OB, GB, YB, QB, BB)
          }
        }
        if (BB < 8) {
          let jB = DB[oB++],
            yB = DB[oB++];
          if ((128 & jB) > 0 || (128 & yB) > 0) return void(oB -= 6);
          if (BB < 7) return eB(OB, GB, YB, QB, jB, yB);
          let JB = DB[oB++];
          return (128 & JB) > 0 ? void(oB -= 7) : eB(OB, GB, YB, QB, jB, yB, JB)
        } {
          let jB = DB[oB++],
            yB = DB[oB++],
            JB = DB[oB++],
            MB = DB[oB++];
          if ((128 & jB) > 0 || (128 & yB) > 0 || (128 & JB) > 0 || (128 & MB) > 0) return void(oB -= 8);
          if (BB < 10) {
            if (8 === BB) return eB(OB, GB, YB, QB, jB, yB, JB, MB);
            {
              let BB = DB[oB++];
              return (128 & BB) > 0 ? void(oB -= 9) : eB(OB, GB, YB, QB, jB, yB, JB, MB, BB)
            }
          }
          if (BB < 12) {
            let PB = DB[oB++],
              zB = DB[oB++];
            if ((128 & PB) > 0 || (128 & zB) > 0) return void(oB -= 10);
            if (BB < 11) return eB(OB, GB, YB, QB, jB, yB, JB, MB, PB, zB);
            let lB = DB[oB++];
            return (128 & lB) > 0 ? void(oB -= 11) : eB(OB, GB, YB, QB, jB, yB, JB, MB, PB, zB, lB)
          } {
            let PB = DB[oB++],
              zB = DB[oB++],
              lB = DB[oB++],
              pB = DB[oB++];
            if ((128 & PB) > 0 || (128 & zB) > 0 || (128 & lB) > 0 || (128 & pB) > 0) return void(oB -= 12);
            if (BB < 14) {
              if (12 === BB) return eB(OB, GB, YB, QB, jB, yB, JB, MB, PB, zB, lB, pB);
              {
                let BB = DB[oB++];
                return (128 & BB) > 0 ? void(oB -= 13) : eB(OB, GB, YB, QB, jB, yB, JB, MB, PB, zB, lB, pB, BB)
              }
            } {
              let qB = DB[oB++],
                ZB = DB[oB++];
              if ((128 & qB) > 0 || (128 & ZB) > 0) return void(oB -= 14);
              if (BB < 15) return eB(OB, GB, YB, QB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB);
              let NB = DB[oB++];
              return (128 & NB) > 0 ? void(oB -= 15) : eB(OB, GB, YB, QB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB)
            }
          }
        }
      }
    }

    function CB() {
      let BB, OB = DB[oB++];
      if (OB < 192) BB = OB - 160;
      else switch (OB) {
        case 217:
          BB = DB[oB++];
          break;
        case 218:
          BB = zB.getUint16(oB), oB += 2;
          break;
        case 219:
          BB = zB.getUint32(oB), oB += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return cB(BB)
    }

    function HB(BB) {
      return qB.copyBuffers ? Uint8Array.prototype.slice.call(DB, oB, oB += BB) : DB.subarray(oB, oB += BB)
    }

    function vB(BB) {
      let OB = DB[oB++];
      if (RB[OB]) {
        let GB;
        return RB[OB](DB.subarray(oB, GB = oB += BB), (BB => {
          oB = BB;
          try {
            return mB()
          } finally {
            oB = GB
          }
        }))
      }
      throw new Error("Unknown extension type " + OB)
    }
    var sB = new Array(4096);

    function xB() {
      let BB = DB[oB++];
      if (!(BB >= 160 && BB < 192)) return oB--, tB(mB());
      if (BB -= 160, NB >= oB) return JB.slice(oB - ZB, (oB += BB) - ZB);
      if (!(0 == NB && QB < 180)) return gB(BB);
      let OB, GB = 4095 & (BB << 5 ^ (BB > 1 ? zB.getUint16(oB) : BB > 0 ? DB[oB] : 0)),
        YB = sB[GB],
        jB = oB,
        yB = oB + BB - 3,
        MB = 0;
      if (YB && YB.bytes == BB) {
        for (; jB < yB;) {
          if (OB = zB.getUint32(jB), OB != YB[MB++]) {
            jB = 1879048192;
            break
          }
          jB += 4
        }
        for (yB += 3; jB < yB;)
          if (OB = DB[jB++], OB != YB[MB++]) {
            jB = 1879048192;
            break
          } if (jB === yB) return oB = jB, YB.string;
        yB -= 3, jB = oB
      }
      for (YB = [], sB[GB] = YB, YB.bytes = BB; jB < yB;) OB = zB.getUint32(jB), YB.push(OB), jB += 4;
      for (yB += 3; jB < yB;) OB = DB[jB++], YB.push(OB);
      let PB = BB < 16 ? bB(BB) : TB(BB);
      return YB.string = null != PB ? PB : gB(BB)
    }

    function tB(BB) {
      if ("string" === typeof BB) return BB;
      if ("number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB) return BB.toString();
      if (null == BB) return BB + "";
      if (qB.allowArraysInMapKeys && Array.isArray(BB) && BB.flat().every((BB => ["string", "number", "boolean", "bigint"].includes(typeof BB)))) return BB.flat().toString();
      throw new Error("Invalid property type for record: " + typeof BB)
    }
    const BO = (BB, OB) => {
      let GB = mB().map(tB),
        YB = BB;
      void 0 !== OB && (BB = BB < 32 ? -((OB << 5) + BB) : (OB << 5) + BB, GB.highByte = OB);
      let DB = yB[BB];
      return DB && (DB.isShared || fB) && ((yB.restoreStructures || (yB.restoreStructures = []))[BB] = DB), yB[BB] = GB, GB.read = FB(GB, YB), GB.read()
    };
    RB[0] = () => {}, RB[0].noBuffer = !0, RB[66] = BB => {
      let OB = BB.length,
        GB = BigInt(128 & BB[0] ? BB[0] - 256 : BB[0]);
      for (let YB = 1; YB < OB; YB++) GB <<= BigInt(8), GB += BigInt(BB[YB]);
      return GB
    };
    let OO = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    RB[101] = () => {
      let BB = mB();
      return (OO[BB[0]] || Error)(BB[1], {
        cause: BB[2]
      })
    }, RB[105] = BB => {
      if (!1 === qB.structuredClone) throw new Error("Structured clone extension is disabled");
      let OB = zB.getUint32(oB - 4);
      PB || (PB = new Map);
      let GB, YB = DB[oB];
      GB = YB >= 144 && YB < 160 || 220 == YB || 221 == YB ? [] : {};
      let QB = {
        target: GB
      };
      PB.set(OB, QB);
      let jB = mB();
      return QB.used ? Object.assign(GB, jB) : (QB.target = jB, jB)
    }, RB[112] = BB => {
      if (!1 === qB.structuredClone) throw new Error("Structured clone extension is disabled");
      let OB = zB.getUint32(oB - 4),
        GB = PB.get(OB);
      return GB.used = !0, GB.target
    }, RB[115] = () => new Set(mB());
    const GO = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((BB => BB + "Array"));
    let YO = "object" === typeof globalThis ? globalThis : window;
    RB[116] = BB => {
      let OB = BB[0],
        GB = GO[OB];
      if (!GB) {
        if (16 === OB) {
          let OB = new ArrayBuffer(BB.length - 1);
          return new Uint8Array(OB).set(BB.subarray(1)), OB
        }
        throw new Error("Could not find typed array for code " + OB)
      }
      return new YO[GB](Uint8Array.prototype.slice.call(BB, 1).buffer)
    }, RB[120] = () => {
      let BB = mB();
      return new RegExp(BB[0], BB[1])
    };
    const DO = [];

    function QO(BB) {
      UB && UB();
      let OB = QB,
        GB = oB,
        YB = pB,
        jB = ZB,
        RB = NB,
        WB = JB,
        AB = lB,
        VB = PB,
        SB = MB,
        nB = new Uint8Array(DB.slice(0, QB)),
        kB = yB,
        dB = yB.slice(0, yB.length),
        KB = qB,
        uB = fB,
        mB = BB();
      return QB = OB, oB = GB, pB = YB, ZB = jB, NB = RB, JB = WB, lB = AB, PB = VB, MB = SB, DB = nB, fB = uB, (yB = kB).splice(0, yB.length, ...dB), qB = KB, zB = new DataView(DB.buffer, DB.byteOffset, DB.byteLength), mB
    }

    function oO() {
      DB = null, PB = null, yB = null
    }
    RB[98] = BB => {
      let OB = (BB[0] << 24) + (BB[1] << 16) + (BB[2] << 8) + BB[3],
        GB = oB;
      return oB += OB - BB.length, MB = DO, (MB = [CB(), CB()]).position0 = 0, MB.position1 = 0, MB.postBundlePosition = oB, oB = GB, mB()
    }, RB[255] = BB => 4 == BB.length ? new Date(1e3 * (16777216 * BB[0] + (BB[1] << 16) + (BB[2] << 8) + BB[3])) : 8 == BB.length ? new Date(((BB[0] << 22) + (BB[1] << 14) + (BB[2] << 6) + (BB[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & BB[3]) + 16777216 * BB[4] + (BB[5] << 16) + (BB[6] << 8) + BB[7])) : 12 == BB.length ? new Date(((BB[0] << 24) + (BB[1] << 16) + (BB[2] << 8) + BB[3]) / 1e6 + 1e3 * ((128 & BB[4] ? -281474976710656 : 0) + 1099511627776 * BB[6] + 4294967296 * BB[7] + 16777216 * BB[8] + (BB[9] << 16) + (BB[10] << 8) + BB[11])) : new Date("invalid");
    const jO = new Array(147);
    for (let DG = 0; DG < 256; DG++) jO[DG] = +("1e" + Math.floor(45.15 - .30103 * DG));
    const yO = dB;
    var JO = new dB({
      useRecords: !1
    });
    const MO = JO.unpack,
      PO = JO.unpackMultiple,
      zO = JO.unpack,
      lO = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let pO, qO, ZO, NO = new Float32Array(1),
      RO = new Uint8Array(NO.buffer, 0, 4);

    function WO(BB) {
      NO[0] = BB;
      let OB = jO[(127 & RO[3]) << 1 | RO[2] >> 7];
      return (OB * BB + (BB > 0 ? .5 : -.5) | 0) / OB
    }
    try {
      pO = new TextEncoder
    } catch (YG) {}
    const AO = "undefined" !== typeof Buffer,
      VO = AO ? function(BB) {
        return Buffer.allocUnsafeSlow(BB)
      } : Uint8Array,
      SO = AO ? Buffer : Uint8Array,
      nO = AO ? 4294967296 : 2144337920;
    let UO, fO, kO, dO, KO, uO = 0,
      mO = null;
    const IO = /[\u0080-\uFFFF]/,
      FO = Symbol("record-id");
    class iO extends dB {
      constructor(BB) {
        let OB, GB, YB, DB;
        super(BB), this.offset = 0;
        let QB = SO.prototype.utf8Write ? function(BB, OB) {
            return UO.utf8Write(BB, OB, UO.byteLength - OB)
          } : !(!pO || !pO.encodeInto) && function(BB, OB) {
            return pO.encodeInto(BB, UO.subarray(OB)).written
          },
          oB = this;
        BB || (BB = {});
        let jB = BB && BB.sequential,
          yB = BB.structures || BB.saveStructures,
          JB = BB.maxSharedStructures;
        if (null == JB && (JB = yB ? 32 : 0), JB > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        BB.structuredClone && void 0 == BB.moreTypes && (this.moreTypes = !0);
        let MB = BB.maxOwnStructures;
        null == MB && (MB = yB ? 32 : 64), this.structures || 0 == BB.useRecords || (this.structures = []);
        let PB = JB > 32 || MB + JB > 64,
          zB = JB + 64,
          lB = JB + MB + 64;
        if (lB > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let pB = [],
          qB = 0,
          ZB = 0;
        this.pack = this.encode = function(BB, QB) {
          if (UO || (UO = new VO(8192), kO = UO.dataView || (UO.dataView = new DataView(UO.buffer, 0, 8192)), uO = 0), dO = UO.length - 10, dO - uO < 2048 ? (UO = new VO(UO.length), kO = UO.dataView || (UO.dataView = new DataView(UO.buffer, 0, UO.length)), dO = UO.length - 10, uO = 0) : uO = uO + 7 & 2147483640, OB = uO, QB & xO && (uO += 255 & QB), DB = oB.structuredClone ? new Map : null, oB.bundleStrings && "string" !== typeof BB ? (mO = [], mO.size = 1 / 0) : mO = null, YB = oB.structures, YB) {
            YB.uninitialized && (YB = oB._mergeStructures(oB.getStructures()));
            let BB = YB.sharedLength || 0;
            if (BB > JB) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + YB.sharedLength);
            if (!YB.transitions) {
              YB.transitions = Object.create(null);
              for (let OB = 0; OB < BB; OB++) {
                let BB = YB[OB];
                if (!BB) continue;
                let GB, DB = YB.transitions;
                for (let OB = 0, YB = BB.length; OB < YB; OB++) {
                  let YB = BB[OB];
                  GB = DB[YB], GB || (GB = DB[YB] = Object.create(null)), DB = GB
                }
                DB[FO] = OB + 64
              }
              this.lastNamedStructuresLength = BB
            }
            jB || (YB.nextId = BB + 64)
          }
          let yB;
          GB && (GB = !1);
          try {
            oB.randomAccessStructure && BB && BB.constructor && BB.constructor === Object ? dB(BB) : WB(BB);
            let GB = mO;
            if (mO && XO(OB, WB, 0), DB && DB.idsToInsert) {
              let BB = DB.idsToInsert.sort(((BB, OB) => BB.offset > OB.offset ? 1 : -1)),
                YB = BB.length,
                QB = -1;
              for (; GB && YB > 0;) {
                let DB = BB[--YB].offset + OB;
                DB < GB.stringsPosition + OB && -1 === QB && (QB = 0), DB > GB.position + OB ? QB >= 0 && (QB += 6) : (QB >= 0 && (kO.setUint32(GB.position + OB, kO.getUint32(GB.position + OB) + QB), QB = -1), GB = GB.previous, YB++)
              }
              QB >= 0 && GB && kO.setUint32(GB.position + OB, kO.getUint32(GB.position + OB) + QB), uO += 6 * BB.length, uO > dO && UB(uO), oB.offset = uO;
              let jB = function(BB, OB) {
                let GB, YB = 6 * OB.length,
                  DB = BB.length - YB;
                for (; GB = OB.pop();) {
                  let OB = GB.offset,
                    QB = GB.id;
                  BB.copyWithin(OB + YB, OB, DB), YB -= 6;
                  let oB = OB + YB;
                  BB[oB++] = 214, BB[oB++] = 105, BB[oB++] = QB >> 24, BB[oB++] = QB >> 16 & 255, BB[oB++] = QB >> 8 & 255, BB[oB++] = 255 & QB, DB = OB
                }
                return BB
              }(UO.subarray(OB, uO), BB);
              return DB = null, jB
            }
            return oB.offset = uO, QB & vO ? (UO.start = OB, UO.end = uO, UO) : UO.subarray(OB, uO)
          } catch (YG) {
            throw yB = YG, YG
          } finally {
            if (YB && (NB(), GB && oB.saveStructures)) {
              let GB = YB.sharedLength || 0,
                DB = UO.subarray(OB, uO),
                jB = EO(YB, oB);
              if (!yB) return !1 === oB.saveStructures(jB, jB.isCompatible) ? oB.pack(BB, QB) : (oB.lastNamedStructuresLength = GB, UO.length > 1073741824 && (UO = null), DB)
            }
            UO.length > 1073741824 && (UO = null), QB & sO && (uO = OB)
          }
        };
        const NB = () => {
            ZB < 10 && ZB++;
            let BB = YB.sharedLength || 0;
            if (YB.length > BB && !jB && (YB.length = BB), qB > 1e4) YB.transitions = null, ZB = 0, qB = 0, pB.length > 0 && (pB = []);
            else if (pB.length > 0 && !jB) {
              for (let BB = 0, OB = pB.length; BB < OB; BB++) pB[BB][FO] = 0;
              pB = []
            }
          },
          RB = BB => {
            var OB = BB.length;
            OB < 16 ? UO[uO++] = 144 | OB : OB < 65536 ? (UO[uO++] = 220, UO[uO++] = OB >> 8, UO[uO++] = 255 & OB) : (UO[uO++] = 221, kO.setUint32(uO, OB), uO += 4);
            for (let GB = 0; GB < OB; GB++) WB(BB[GB])
          },
          WB = BB => {
            uO > dO && (UO = UB(uO));
            var GB, YB = typeof BB;
            if ("string" === YB) {
              let YB, DB = BB.length;
              if (mO && DB >= 4 && DB < 4096) {
                if ((mO.size += DB) > 21760) {
                  let BB, GB, YB = (mO[0] ? 3 * mO[0].length + mO[1].length : 0) + 10;
                  uO + YB > dO && (UO = UB(uO + YB)), mO.position ? (GB = mO, UO[uO] = 200, uO += 3, UO[uO++] = 98, BB = uO - OB, uO += 4, XO(OB, WB, 0), kO.setUint16(BB + OB - 3, uO - OB - BB)) : (UO[uO++] = 214, UO[uO++] = 98, BB = uO - OB, uO += 4), mO = ["", ""], mO.previous = GB, mO.size = 0, mO.position = BB
                }
                let GB = IO.test(BB);
                return mO[GB ? 0 : 1] += BB, UO[uO++] = 193, void WB(GB ? -DB : DB)
              }
              YB = DB < 32 ? 1 : DB < 256 ? 2 : DB < 65536 ? 3 : 5;
              let oB = 3 * DB;
              if (uO + oB > dO && (UO = UB(uO + oB)), DB < 64 || !QB) {
                let OB, QB, oB, jB = uO + YB;
                for (OB = 0; OB < DB; OB++) QB = BB.charCodeAt(OB), QB < 128 ? UO[jB++] = QB : QB < 2048 ? (UO[jB++] = QB >> 6 | 192, UO[jB++] = 63 & QB | 128) : 55296 === (64512 & QB) && 56320 === (64512 & (oB = BB.charCodeAt(OB + 1))) ? (QB = 65536 + ((1023 & QB) << 10) + (1023 & oB), OB++, UO[jB++] = QB >> 18 | 240, UO[jB++] = QB >> 12 & 63 | 128, UO[jB++] = QB >> 6 & 63 | 128, UO[jB++] = 63 & QB | 128) : (UO[jB++] = QB >> 12 | 224, UO[jB++] = QB >> 6 & 63 | 128, UO[jB++] = 63 & QB | 128);
                GB = jB - uO - YB
              } else GB = QB(BB, uO + YB);
              GB < 32 ? UO[uO++] = 160 | GB : GB < 256 ? (YB < 2 && UO.copyWithin(uO + 2, uO + 1, uO + 1 + GB), UO[uO++] = 217, UO[uO++] = GB) : GB < 65536 ? (YB < 3 && UO.copyWithin(uO + 3, uO + 2, uO + 2 + GB), UO[uO++] = 218, UO[uO++] = GB >> 8, UO[uO++] = 255 & GB) : (YB < 5 && UO.copyWithin(uO + 5, uO + 3, uO + 3 + GB), UO[uO++] = 219, kO.setUint32(uO, GB), uO += 4), uO += GB
            } else if ("number" === YB)
              if (BB >>> 0 === BB) BB < 32 || BB < 128 && !1 === this.useRecords || BB < 64 && !this.randomAccessStructure ? UO[uO++] = BB : BB < 256 ? (UO[uO++] = 204, UO[uO++] = BB) : BB < 65536 ? (UO[uO++] = 205, UO[uO++] = BB >> 8, UO[uO++] = 255 & BB) : (UO[uO++] = 206, kO.setUint32(uO, BB), uO += 4);
              else if ((BB | 0) === BB) BB >= -32 ? UO[uO++] = 256 + BB : BB >= -128 ? (UO[uO++] = 208, UO[uO++] = BB + 256) : BB >= -32768 ? (UO[uO++] = 209, kO.setInt16(uO, BB), uO += 2) : (UO[uO++] = 210, kO.setInt32(uO, BB), uO += 4);
            else {
              let OB;
              if ((OB = this.useFloat32) > 0 && BB < 4294967296 && BB >= -2147483648) {
                let GB;
                if (UO[uO++] = 202, kO.setFloat32(uO, BB), OB < 4 || ((GB = BB * jO[(127 & UO[uO]) << 1 | UO[uO + 1] >> 7]) | 0) === GB) return void(uO += 4);
                uO--
              }
              UO[uO++] = 203, kO.setFloat64(uO, BB), uO += 8
            } else if ("object" === YB || "function" === YB)
              if (BB) {
                if (DB) {
                  let GB = DB.get(BB);
                  if (GB) {
                    if (!GB.id) {
                      let BB = DB.idsToInsert || (DB.idsToInsert = []);
                      GB.id = BB.push(GB)
                    }
                    return UO[uO++] = 214, UO[uO++] = 112, kO.setUint32(uO, GB.id), void(uO += 4)
                  }
                  DB.set(BB, {
                    offset: uO - OB
                  })
                }
                let QB = BB.constructor;
                if (QB === Object) nB(BB);
                else if (QB === Array) RB(BB);
                else if (QB === Map)
                  if (this.mapAsEmptyObject) UO[uO++] = 128;
                  else {
                    (GB = BB.size) < 16 ? UO[uO++] = 128 | GB : GB < 65536 ? (UO[uO++] = 222, UO[uO++] = GB >> 8, UO[uO++] = 255 & GB) : (UO[uO++] = 223, kO.setUint32(uO, GB), uO += 4);
                    for (let [OB, GB] of BB) WB(OB), WB(GB)
                  }
                else {
                  for (let OB = 0, GB = qO.length; OB < GB; OB++) {
                    if (BB instanceof ZO[OB]) {
                      let GB = qO[OB];
                      if (GB.write) {
                        GB.type && (UO[uO++] = 212, UO[uO++] = GB.type, UO[uO++] = 0);
                        let OB = GB.write.call(this, BB);
                        return void(OB === BB ? Array.isArray(BB) ? RB(BB) : nB(BB) : WB(OB))
                      }
                      let YB, DB = UO,
                        QB = kO,
                        oB = uO;
                      UO = null;
                      try {
                        YB = GB.pack.call(this, BB, (BB => (UO = DB, DB = null, uO += BB, uO > dO && UB(uO), {
                          target: UO,
                          targetView: kO,
                          position: uO - BB
                        })), WB)
                      } finally {
                        DB && (UO = DB, kO = QB, uO = oB, dO = UO.length - 10)
                      }
                      return void(YB && (YB.length + uO > dO && UB(YB.length + uO), uO = rO(YB, UO, uO, GB.type)))
                    }
                  }
                  if (Array.isArray(BB)) RB(BB);
                  else {
                    if (BB.toJSON) {
                      const OB = BB.toJSON();
                      if (OB !== BB) return WB(OB)
                    }
                    if ("function" === YB) return WB(this.writeFunction && this.writeFunction(BB));
                    nB(BB)
                  }
                }
              } else UO[uO++] = 192;
            else if ("boolean" === YB) UO[uO++] = BB ? 195 : 194;
            else if ("bigint" === YB) {
              if (BB < BigInt(1) << BigInt(63) && BB >= -(BigInt(1) << BigInt(63))) UO[uO++] = 211, kO.setBigInt64(uO, BB);
              else if (BB < BigInt(1) << BigInt(64) && BB > 0) UO[uO++] = 207, kO.setBigUint64(uO, BB);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return WB(BB.toString());
                  if (this.useBigIntExtension && BB < BigInt(2) ** BigInt(1023) && BB > -(BigInt(2) ** BigInt(1023))) {
                    UO[uO++] = 199, uO++, UO[uO++] = 66;
                    let OB, GB = [];
                    do {
                      let YB = BB & BigInt(255);
                      OB = (YB & BigInt(128)) === (BB < BigInt(0) ? BigInt(128) : BigInt(0)), GB.push(YB), BB >>= BigInt(8)
                    } while (BB !== BigInt(0) && BB !== BigInt(-1) || !OB);
                    UO[uO - 2] = GB.length;
                    for (let BB = GB.length; BB > 0;) UO[uO++] = Number(GB[--BB]);
                    return
                  }
                  throw new RangeError(BB + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                UO[uO++] = 203, kO.setFloat64(uO, Number(BB))
              }
              uO += 8
            } else {
              if ("undefined" !== YB) throw new Error("Unknown type: " + YB);
              this.encodeUndefinedAsNil ? UO[uO++] = 192 : (UO[uO++] = 212, UO[uO++] = 0, UO[uO++] = 0)
            }
          },
          AB = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? BB => {
            let OB;
            if (this.skipValues) {
              OB = [];
              for (let GB in BB) "function" === typeof BB.hasOwnProperty && !BB.hasOwnProperty(GB) || this.skipValues.includes(BB[GB]) || OB.push(GB)
            } else OB = Object.keys(BB);
            let GB, YB = OB.length;
            if (YB < 16 ? UO[uO++] = 128 | YB : YB < 65536 ? (UO[uO++] = 222, UO[uO++] = YB >> 8, UO[uO++] = 255 & YB) : (UO[uO++] = 223, kO.setUint32(uO, YB), uO += 4), this.coercibleKeyAsNumber)
              for (let DB = 0; DB < YB; DB++) {
                GB = OB[DB];
                let YB = Number(GB);
                WB(isNaN(YB) ? GB : YB), WB(BB[GB])
              } else
                for (let DB = 0; DB < YB; DB++) WB(GB = OB[DB]), WB(BB[GB])
          } : BB => {
            UO[uO++] = 222;
            let GB = uO - OB;
            uO += 2;
            let YB = 0;
            for (let OB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(OB)) && (WB(OB), WB(BB[OB]), YB++);
            if (YB > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            UO[GB++ + OB] = YB >> 8, UO[GB + OB] = 255 & YB
          },
          VB = !1 === this.useRecords ? AB : BB.progressiveRecords && !PB ? BB => {
            let GB, DB, QB = YB.transitions || (YB.transitions = Object.create(null)),
              oB = uO++ - OB;
            for (let jB in BB)
              if ("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(jB)) {
                if (GB = QB[jB], GB) QB = GB;
                else {
                  let yB = Object.keys(BB),
                    JB = QB;
                  QB = YB.transitions;
                  let MB = 0;
                  for (let BB = 0, OB = yB.length; BB < OB; BB++) {
                    let OB = yB[BB];
                    GB = QB[OB], GB || (GB = QB[OB] = Object.create(null), MB++), QB = GB
                  }
                  oB + OB + 1 == uO ? (uO--, fB(QB, yB, MB)) : kB(QB, yB, oB, MB), DB = !0, QB = JB[jB]
                }
                WB(BB[jB])
              } if (!DB) {
              let GB = QB[FO];
              GB ? UO[oB + OB] = GB : kB(QB, Object.keys(BB), oB, 0)
            }
          } : BB => {
            let OB, GB = YB.transitions || (YB.transitions = Object.create(null)),
              DB = 0;
            for (let YB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(YB)) && (OB = GB[YB], OB || (OB = GB[YB] = Object.create(null), DB++), GB = OB);
            let QB = GB[FO];
            QB ? QB >= 96 && PB ? (UO[uO++] = 96 + (31 & (QB -= 96)), UO[uO++] = QB >> 5) : UO[uO++] = QB : fB(GB, GB.__keys__ || Object.keys(BB), DB);
            for (let YB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(YB)) && WB(BB[YB])
          },
          SB = "function" == typeof this.useRecords && this.useRecords,
          nB = SB ? BB => {
            SB(BB) ? VB(BB) : AB(BB)
          } : VB,
          UB = BB => {
            let GB;
            if (BB > 16777216) {
              if (BB - OB > nO) throw new Error("Packed buffer would be larger than maximum buffer size");
              GB = Math.min(nO, 4096 * Math.round(Math.max((BB - OB) * (BB > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else GB = 1 + (Math.max(BB - OB << 2, UO.length - 1) >> 12) << 12;
            let YB = new VO(GB);
            return kO = YB.dataView || (YB.dataView = new DataView(YB.buffer, 0, GB)), BB = Math.min(BB, UO.length), UO.copy ? UO.copy(YB, 0, OB, BB) : YB.set(UO.slice(OB, BB)), uO -= OB, OB = 0, dO = YB.length - 10, UO = YB
          },
          fB = (BB, OB, DB) => {
            let QB = YB.nextId;
            QB || (QB = 64), QB < zB && this.shouldShareStructure && !this.shouldShareStructure(OB) ? (QB = YB.nextOwnId, QB < lB || (QB = zB), YB.nextOwnId = QB + 1) : (QB >= lB && (QB = zB), YB.nextId = QB + 1);
            let oB = OB.highByte = QB >= 96 && PB ? QB - 96 >> 5 : -1;
            BB[FO] = QB, BB.__keys__ = OB, YB[QB - 64] = OB, QB < zB ? (OB.isShared = !0, YB.sharedLength = QB - 63, GB = !0, oB >= 0 ? (UO[uO++] = 96 + (31 & QB), UO[uO++] = oB) : UO[uO++] = QB) : (oB >= 0 ? (UO[uO++] = 213, UO[uO++] = 114, UO[uO++] = 96 + (31 & QB), UO[uO++] = oB) : (UO[uO++] = 212, UO[uO++] = 114, UO[uO++] = QB), DB && (qB += ZB * DB), pB.length >= MB && (pB.shift()[FO] = 0), pB.push(BB), WB(OB))
          },
          kB = (BB, GB, YB, DB) => {
            let QB = UO,
              oB = uO,
              jB = dO,
              yB = OB;
            UO = fO, uO = 0, OB = 0, UO || (fO = UO = new VO(8192)), dO = UO.length - 10, fB(BB, GB, DB), fO = UO;
            let JB = uO;
            if (UO = QB, uO = oB, dO = jB, OB = yB, JB > 1) {
              let BB = uO + JB - 1;
              BB > dO && UB(BB);
              let GB = YB + OB;
              UO.copyWithin(GB + JB, GB + 1, uO), UO.set(fO.slice(0, JB), GB), uO = BB
            } else UO[YB + OB] = fO[0]
          },
          dB = BB => {
            let DB = KO(BB, UO, OB, uO, YB, UB, ((BB, OB, YB) => {
              if (YB) return GB = !0;
              uO = OB;
              let DB = UO;
              return WB(BB), NB(), DB !== UO ? {
                position: uO,
                targetView: kO,
                target: UO
              } : uO
            }), this);
            if (0 === DB) return nB(BB);
            uO = DB
          }
      }
      useBuffer(BB) {
        UO = BB, kO = UO.dataView || (UO.dataView = new DataView(UO.buffer, UO.byteOffset, UO.byteLength)), uO = 0
      }
      set position(BB) {
        uO = BB
      }
      get position() {
        return uO
      }
      set buffer(BB) {
        UO = BB
      }
      get buffer() {
        return UO
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function LO(BB, OB, GB, YB) {
      let DB = BB.byteLength;
      if (DB + 1 < 256) {
        var {
          target: QB,
          position: oB
        } = GB(4 + DB);
        QB[oB++] = 199, QB[oB++] = DB + 1
      } else if (DB + 1 < 65536) {
        var {
          target: QB,
          position: oB
        } = GB(5 + DB);
        QB[oB++] = 200, QB[oB++] = DB + 1 >> 8, QB[oB++] = DB + 1 & 255
      } else {
        var {
          target: QB,
          position: oB,
          targetView: jB
        } = GB(7 + DB);
        QB[oB++] = 201, jB.setUint32(oB, DB + 1), oB += 4
      }
      QB[oB++] = 116, QB[oB++] = OB, BB.buffer || (BB = new Uint8Array(BB)), QB.set(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength), oB)
    }

    function gO(BB, OB) {
      let GB = BB.byteLength;
      var YB, DB;
      if (GB < 256) {
        var {
          target: YB,
          position: DB
        } = OB(GB + 2);
        YB[DB++] = 196, YB[DB++] = GB
      } else if (GB < 65536) {
        var {
          target: YB,
          position: DB
        } = OB(GB + 3);
        YB[DB++] = 197, YB[DB++] = GB >> 8, YB[DB++] = 255 & GB
      } else {
        var {
          target: YB,
          position: DB,
          targetView: QB
        } = OB(GB + 5);
        YB[DB++] = 198, QB.setUint32(DB, GB), DB += 4
      }
      YB.set(BB, DB)
    }

    function rO(BB, OB, GB, YB) {
      let DB = BB.length;
      switch (DB) {
        case 1:
          OB[GB++] = 212;
          break;
        case 2:
          OB[GB++] = 213;
          break;
        case 4:
          OB[GB++] = 214;
          break;
        case 8:
          OB[GB++] = 215;
          break;
        case 16:
          OB[GB++] = 216;
          break;
        default:
          DB < 256 ? (OB[GB++] = 199, OB[GB++] = DB) : DB < 65536 ? (OB[GB++] = 200, OB[GB++] = DB >> 8, OB[GB++] = 255 & DB) : (OB[GB++] = 201, OB[GB++] = DB >> 24, OB[GB++] = DB >> 16 & 255, OB[GB++] = DB >> 8 & 255, OB[GB++] = 255 & DB)
      }
      return OB[GB++] = YB, OB.set(BB, GB), GB += DB
    }

    function XO(BB, OB, GB) {
      if (mO.length > 0) {
        kO.setUint32(mO.position + BB, uO + GB - mO.position - BB), mO.stringsPosition = uO - BB;
        let YB = mO;
        mO = null, OB(YB[0]), OB(YB[1])
      }
    }

    function wO(BB) {
      if (BB.Class) {
        if (!BB.pack && !BB.write) throw new Error("Extension has no pack or write function");
        if (BB.pack && !BB.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        ZO.unshift(BB.Class), qO.unshift(BB)
      }! function(BB) {
        BB.unpack ? RB[BB.type] = BB.unpack : RB[BB.type] = BB
      }(BB)
    }

    function EO(BB, OB) {
      return BB.isCompatible = BB => {
        let GB = !BB || (OB.lastNamedStructuresLength || 0) === BB.length;
        return GB || OB._mergeStructures(BB), GB
      }, BB
    }
    ZO = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, AB], qO = [{
      pack(BB, OB, GB) {
        let YB = BB.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === BB.getMilliseconds()) && YB >= 0 && YB < 4294967296) {
          let {
            target: BB,
            targetView: GB,
            position: DB
          } = OB(6);
          BB[DB++] = 214, BB[DB++] = 255, GB.setUint32(DB, YB)
        } else if (YB > 0 && YB < 4294967296) {
          let {
            target: GB,
            targetView: DB,
            position: QB
          } = OB(10);
          GB[QB++] = 215, GB[QB++] = 255, DB.setUint32(QB, 4e6 * BB.getMilliseconds() + (YB / 1e3 / 4294967296 | 0)), DB.setUint32(QB + 4, YB)
        } else if (isNaN(YB)) {
          if (this.onInvalidDate) return OB(0), GB(this.onInvalidDate());
          let {
            target: BB,
            targetView: YB,
            position: DB
          } = OB(3);
          BB[DB++] = 212, BB[DB++] = 255, BB[DB++] = 255
        } else {
          let {
            target: GB,
            targetView: DB,
            position: QB
          } = OB(15);
          GB[QB++] = 199, GB[QB++] = 12, GB[QB++] = 255, DB.setUint32(QB, 1e6 * BB.getMilliseconds()), DB.setBigInt64(QB + 4, BigInt(Math.floor(YB)))
        }
      }
    }, {
      pack(BB, OB, GB) {
        if (this.setAsEmptyObject) return OB(0), GB({});
        let YB = Array.from(BB),
          {
            target: DB,
            position: QB
          } = OB(this.moreTypes ? 3 : 0);
        this.moreTypes && (DB[QB++] = 212, DB[QB++] = 115, DB[QB++] = 0), GB(YB)
      }
    }, {
      pack(BB, OB, GB) {
        let {
          target: YB,
          position: DB
        } = OB(this.moreTypes ? 3 : 0);
        this.moreTypes && (YB[DB++] = 212, YB[DB++] = 101, YB[DB++] = 0), GB([BB.name, BB.message, BB.cause])
      }
    }, {
      pack(BB, OB, GB) {
        let {
          target: YB,
          position: DB
        } = OB(this.moreTypes ? 3 : 0);
        this.moreTypes && (YB[DB++] = 212, YB[DB++] = 120, YB[DB++] = 0), GB([BB.source, BB.flags])
      }
    }, {
      pack(BB, OB) {
        this.moreTypes ? LO(BB, 16, OB) : gO(AO ? Buffer.from(BB) : new Uint8Array(BB), OB)
      }
    }, {
      pack(BB, OB) {
        let GB = BB.constructor;
        GB !== SO && this.moreTypes ? LO(BB, GO.indexOf(GB.name), OB) : gO(BB, OB)
      }
    }, {
      pack(BB, OB) {
        let {
          target: GB,
          position: YB
        } = OB(1);
        GB[YB] = 193
      }
    }];
    let cO = new iO({
      useRecords: !1
    });
    const hO = cO.pack,
      aO = cO.pack,
      eO = iO,
      {
        NEVER: TO,
        ALWAYS: bO,
        DECIMAL_ROUND: CO,
        DECIMAL_FIT: HO
      } = lO,
      vO = 512,
      sO = 1024,
      xO = 2048;
    const tO = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!BB || "object" !== typeof BB) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const GB = new dB(OB);
        let YB;
        const DB = BB => {
          let OB;
          YB && (BB = Buffer.concat([YB, BB]), YB = void 0);
          try {
            OB = GB.unpackMultiple(BB)
          } catch (DB) {
            if (!DB.incomplete) throw DB;
            YB = BB.slice(DB.lastPosition), OB = DB.values
          }
          return OB
        };
        return "function" === typeof BB[Symbol.iterator] ? function*() {
          for (const OB of BB) yield* DB(OB)
        }() : "function" === typeof BB[Symbol.asyncIterator] ? async function*() {
          for await (const OB of BB) yield* DB(OB)
        }(): void 0
      },
      BG = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (BB && "object" === typeof BB) {
          if ("function" === typeof BB[Symbol.iterator]) return function*(BB, OB) {
            const GB = new iO(OB);
            for (const YB of BB) yield GB.pack(YB)
          }(BB, OB);
          if ("function" === typeof BB.then || "function" === typeof BB[Symbol.asyncIterator]) return async function*(BB, OB) {
            const GB = new iO(OB);
            for await (const YB of BB) yield GB.pack(YB)
          }(BB, OB);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      OG = !1,
      GG = !0
  },
  9828: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      $changes: () => qB,
      $childType: () => ZB,
      $decoder: () => MB,
      $deleteByIndex: () => lB,
      $encoder: () => JB,
      $filter: () => PB,
      $getByIndex: () => zB,
      $numFields: () => kB,
      $refId: () => jB,
      $track: () => yB,
      $values: () => VB,
      ArraySchema: () => GY,
      Callbacks: () => GD,
      ChangeTree: () => uG,
      CollectionSchema: () => QY,
      Decoder: () => CY,
      Encoder: () => aY,
      FieldBuilder: () => yY,
      MapSchema: () => DY,
      Metadata: () => CO,
      OPERATION: () => DB,
      Reflection: () => xY,
      ReflectionField: () => vY,
      ReflectionType: () => sY,
      Root: () => mY,
      Schema: () => KY,
      SetSchema: () => oY,
      StateCallbackStrategy: () => OD,
      StateView: () => gY,
      StreamSchema: () => jY,
      TypeContext: () => EO,
      createPool: () => DD,
      decode: () => WO,
      decodeKeyValueOperation: () => vG,
      decodeSchemaOperation: () => HG,
      defineCustomTypes: () => nO,
      defineTypes: () => fY,
      deprecated: () => nY,
      dumpChanges: () => dY,
      encode: () => OO,
      encodeArray: () => XG,
      encodeIndexedEntry: () => gG,
      encodeKeyValueOperation: () => rG,
      encodeMapEntry: () => LG,
      encodeSchemaOperation: () => iG,
      qp: () => qY,
      fullStateOnly: () => WY,
      getDecoderStateCallbacks: () => tY,
      getEncodeDescriptor: () => BG,
      getRawChangesCallback: () => BD,
      isBuilder: () => JY,
      patchOnly: () => RY,
      registerType: () => SO,
      schema: () => kY,
      t: () => lY,
      type: () => AY,
      unreliable: () => NY,
      view: () => ZY
    });
    const YB = 255;
    var DB;

    function QB(BB) {
      Object.defineProperty(BB, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(BB) {
      BB[BB.ADD = 128] = "ADD", BB[BB.REPLACE = 0] = "REPLACE", BB[BB.DELETE = 64] = "DELETE", BB[BB.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", BB[BB.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", BB[BB.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", BB[BB.CLEAR = 10] = "CLEAR", BB[BB.REVERSE = 15] = "REVERSE", BB[BB.MOVE = 32] = "MOVE", BB[BB.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", BB[BB.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(DB || (DB = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const oB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const BB = "colyseus.symbolRegistry",
        OB = oB[BB] || (oB[BB] = Object.create(null));
      Symbol.for = function(BB) {
        return OB[BB] || (OB[BB] = Symbol(BB))
      }, Symbol.keyFor = function(BB) {
        for (const GB in OB)
          if (OB[GB] === BB) return GB
      }
    }
    const jB = Symbol.for("$refId"),
      yB = "~track",
      JB = "~encoder",
      MB = "~decoder",
      PB = "~filter",
      zB = "~getByIndex",
      lB = "~deleteByIndex",
      pB = "~resyncPrune",
      qB = Symbol.for("$changes"),
      ZB = Symbol.for("$childType"),
      NB = Symbol.for("$proxyTarget"),
      RB = "~onEncodeEnd",
      WB = "~reset",
      AB = "~onDecodeEnd",
      VB = Symbol.for("$values"),
      SB = "~builder",
      nB = "~descriptors",
      UB = "~__encodeDescriptor",
      fB = "~encoders",
      kB = "~__numFields",
      dB = "~__refTypeFieldIndexes",
      KB = "~__viewFieldIndexes",
      uB = "$__fieldIndexesByViewTag",
      mB = "~__unreliableFieldIndexes",
      IB = "~__patchOnlyFieldIndexes",
      FB = "~__fullSyncSkipIndexes",
      iB = "~__fullStateOnlyFieldIndexes",
      LB = "~__streamFieldIndexes",
      gB = "~__streamPriorities";
    let rB;
    try {
      rB = new TextEncoder
    } catch (QD) {}
    const XB = new ArrayBuffer(8),
      wB = new Int32Array(XB),
      EB = new Float32Array(XB),
      cB = new Float64Array(XB),
      hB = new BigInt64Array(XB),
      aB = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(BB, OB) {
        for (var GB = 0, YB = 0, DB = 0, QB = BB.length; DB < QB; DB++)(GB = BB.charCodeAt(DB)) < 128 ? YB += 1 : GB < 2048 ? YB += 2 : GB < 55296 || GB >= 57344 ? YB += 3 : (DB++, YB += 4);
        return YB
      };

    function eB(BB, OB, GB) {
      for (var YB = 0, DB = 0, QB = OB.length; DB < QB; DB++)(YB = OB.charCodeAt(DB)) < 128 ? BB[GB.offset++] = YB : YB < 2048 ? (BB[GB.offset] = 192 | YB >> 6, BB[GB.offset + 1] = 128 | 63 & YB, GB.offset += 2) : YB < 55296 || YB >= 57344 ? (BB[GB.offset] = 224 | YB >> 12, BB[GB.offset + 1] = 128 | YB >> 6 & 63, BB[GB.offset + 2] = 128 | 63 & YB, GB.offset += 3) : (DB++, YB = 65536 + ((1023 & YB) << 10 | 1023 & OB.charCodeAt(DB)), BB[GB.offset] = 240 | YB >> 18, BB[GB.offset + 1] = 128 | YB >> 12 & 63, BB[GB.offset + 2] = 128 | YB >> 6 & 63, BB[GB.offset + 3] = 128 | 63 & YB, GB.offset += 4)
    }

    function TB(BB, OB, GB) {
      BB[GB.offset++] = 255 & OB
    }

    function bB(BB, OB, GB) {
      BB[GB.offset++] = 255 & OB, BB[GB.offset++] = OB >> 8 & 255
    }

    function CB(BB, OB, GB) {
      BB[GB.offset++] = 255 & OB, BB[GB.offset++] = OB >> 8 & 255
    }

    function HB(BB, OB, GB) {
      BB[GB.offset++] = 255 & OB, BB[GB.offset++] = OB >> 8 & 255, BB[GB.offset++] = OB >> 16 & 255, BB[GB.offset++] = OB >> 24 & 255
    }

    function vB(BB, OB, GB) {
      const YB = OB >> 24,
        DB = OB >> 16,
        QB = OB >> 8,
        oB = OB;
      BB[GB.offset++] = 255 & oB, BB[GB.offset++] = 255 & QB, BB[GB.offset++] = 255 & DB, BB[GB.offset++] = 255 & YB
    }

    function sB(BB, OB, GB) {
      const YB = Math.floor(OB / Math.pow(2, 32));
      vB(BB, OB >>> 0, GB), vB(BB, YB, GB)
    }

    function xB(BB, OB, GB) {
      const YB = OB / Math.pow(2, 32) | 0;
      vB(BB, OB >>> 0, GB), vB(BB, YB, GB)
    }

    function tB(BB, OB, GB) {
      EB[0] = OB, HB(BB, wB[0], GB)
    }

    function BO(BB, OB, GB) {
      cB[0] = OB, HB(BB, wB[0], GB), HB(BB, wB[1], GB)
    }
    const OO = {
        int8: TB,
        uint8: function(BB, OB, GB) {
          BB[GB.offset++] = 255 & OB
        },
        int16: bB,
        uint16: CB,
        int32: HB,
        uint32: vB,
        int64: sB,
        uint64: xB,
        bigint64: function(BB, OB, GB) {
          hB[0] = BigInt.asIntN(64, OB), HB(BB, wB[0], GB), HB(BB, wB[1], GB)
        },
        biguint64: function(BB, OB, GB) {
          hB[0] = BigInt.asIntN(64, OB), HB(BB, wB[0], GB), HB(BB, wB[1], GB)
        },
        float32: tB,
        float64: BO,
        boolean: function(BB, OB, GB) {
          BB[GB.offset++] = OB ? 1 : 0
        },
        string: function(BB, OB, GB) {
          OB || (OB = "");
          let YB = aB(OB, "utf8"),
            DB = 0;
          if (YB < 32) BB[GB.offset++] = 160 | YB, DB = 1;
          else if (YB < 256) BB[GB.offset++] = 217, BB[GB.offset++] = YB, DB = 2;
          else if (YB < 65536) BB[GB.offset++] = 218, CB(BB, YB, GB), DB = 3;
          else {
            if (!(YB < 4294967296)) throw new Error("String too long");
            BB[GB.offset++] = 219, vB(BB, YB, GB), DB = 5
          }
          return eB(BB, OB, GB), DB + YB
        },
        number: function BB(OB, GB, YB) {
          return isNaN(GB) ? BB(OB, 0, YB) : isFinite(GB) ? GB !== (0 | GB) ? Math.abs(GB) <= 34028235e31 && (EB[0] = GB, Math.abs(Math.abs(EB[0]) - Math.abs(GB)) < 1e-4) ? (OB[YB.offset++] = 202, tB(OB, GB, YB), 5) : (OB[YB.offset++] = 203, BO(OB, GB, YB), 9) : GB >= 0 ? GB < 128 ? (OB[YB.offset++] = 255 & GB, 1) : GB < 256 ? (OB[YB.offset++] = 204, OB[YB.offset++] = 255 & GB, 2) : GB < 65536 ? (OB[YB.offset++] = 205, CB(OB, GB, YB), 3) : GB < 4294967296 ? (OB[YB.offset++] = 206, vB(OB, GB, YB), 5) : (OB[YB.offset++] = 207, xB(OB, GB, YB), 9) : GB >= -32 ? (OB[YB.offset++] = 224 | GB + 32, 1) : GB >= -128 ? (OB[YB.offset++] = 208, TB(OB, GB, YB), 2) : GB >= -32768 ? (OB[YB.offset++] = 209, bB(OB, GB, YB), 3) : GB >= -2147483648 ? (OB[YB.offset++] = 210, HB(OB, GB, YB), 5) : (OB[YB.offset++] = 211, sB(OB, GB, YB), 9) : BB(OB, GB > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, YB)
        },
        utf8Write: eB,
        utf8Length: aB
      },
      GO = new ArrayBuffer(8),
      YO = new Int32Array(GO),
      DO = new Float32Array(GO),
      QO = new Float64Array(GO),
      oO = new BigUint64Array(GO),
      jO = new BigInt64Array(GO);

    function yO(BB, OB, GB) {
      GB > BB.length - OB.offset && (GB = BB.length - OB.offset);
      for (var YB = "", DB = 0, QB = OB.offset, oB = OB.offset + GB; QB < oB; QB++) {
        var jB = BB[QB];
        if (0 !== (128 & jB))
          if (192 !== (224 & jB))
            if (224 !== (240 & jB)) {
              if (240 !== (248 & jB)) {
                console.error("decode.utf8Read(): Invalid byte " + jB + " at offset " + QB + ". Skip to end of string: " + (OB.offset + GB));
                break
              }(DB = (7 & jB) << 18 | (63 & BB[++QB]) << 12 | (63 & BB[++QB]) << 6 | 63 & BB[++QB]) >= 65536 ? (DB -= 65536, YB += String.fromCharCode(55296 + (DB >>> 10), 56320 + (1023 & DB))) : YB += String.fromCharCode(DB)
            } else YB += String.fromCharCode((15 & jB) << 12 | (63 & BB[++QB]) << 6 | 63 & BB[++QB]);
        else YB += String.fromCharCode((31 & jB) << 6 | 63 & BB[++QB]);
        else YB += String.fromCharCode(jB)
      }
      return OB.offset += GB, YB
    }

    function JO(BB, OB) {
      return MO(BB, OB) << 24 >> 24
    }

    function MO(BB, OB) {
      return BB[OB.offset++]
    }

    function PO(BB, OB) {
      return zO(BB, OB) << 16 >> 16
    }

    function zO(BB, OB) {
      return BB[OB.offset++] | BB[OB.offset++] << 8
    }

    function lO(BB, OB) {
      return BB[OB.offset++] | BB[OB.offset++] << 8 | BB[OB.offset++] << 16 | BB[OB.offset++] << 24
    }

    function pO(BB, OB) {
      return lO(BB, OB) >>> 0
    }

    function qO(BB, OB) {
      return YO[0] = lO(BB, OB), DO[0]
    }

    function ZO(BB, OB) {
      return YO[0] = lO(BB, OB), YO[1] = lO(BB, OB), QO[0]
    }

    function NO(BB, OB) {
      const GB = pO(BB, OB);
      return lO(BB, OB) * Math.pow(2, 32) + GB
    }

    function RO(BB, OB) {
      const GB = pO(BB, OB);
      return pO(BB, OB) * Math.pow(2, 32) + GB
    }
    const WO = {
        utf8Read: yO,
        int8: JO,
        uint8: MO,
        int16: PO,
        uint16: zO,
        int32: lO,
        uint32: pO,
        float32: qO,
        float64: ZO,
        int64: NO,
        uint64: RO,
        bigint64: function(BB, OB) {
          return YO[0] = lO(BB, OB), YO[1] = lO(BB, OB), jO[0]
        },
        biguint64: function(BB, OB) {
          return YO[0] = lO(BB, OB), YO[1] = lO(BB, OB), oO[0]
        },
        boolean: function(BB, OB) {
          return MO(BB, OB) > 0
        },
        string: function(BB, OB) {
          const GB = BB[OB.offset++];
          let YB;
          return GB < 192 ? YB = 31 & GB : 217 === GB ? YB = MO(BB, OB) : 218 === GB ? YB = zO(BB, OB) : 219 === GB && (YB = pO(BB, OB)), yO(BB, OB, YB)
        },
        number: function(BB, OB) {
          const GB = BB[OB.offset++];
          return GB < 128 ? GB : 202 === GB ? qO(BB, OB) : 203 === GB ? ZO(BB, OB) : 204 === GB ? MO(BB, OB) : 205 === GB ? zO(BB, OB) : 206 === GB ? pO(BB, OB) : 207 === GB ? RO(BB, OB) : 208 === GB ? JO(BB, OB) : 209 === GB ? PO(BB, OB) : 210 === GB ? lO(BB, OB) : 211 === GB ? NO(BB, OB) : GB > 223 ? -1 * (255 - GB + 1) : void 0
        },
        stringCheck: function(BB, OB) {
          const GB = BB[OB.offset];
          return GB < 192 && GB > 160 || 217 === GB || 218 === GB || 219 === GB
        }
      },
      AO = {},
      VO = new Map;

    function SO(BB, OB) {
      OB.constructor && (Object.prototype.hasOwnProperty.call(OB, "constructor") && null == OB.constructor[Symbol.metadata] && QB(OB.constructor), VO.set(OB.constructor, BB), AO[BB] = OB), OB.encode && (OO[BB] = OB.encode), OB.decode && (WO[BB] = OB.decode)
    }

    function nO(BB) {
      for (const OB in BB) SO(OB, BB[OB]);
      return BB => AY(BB)
    }
    const UO = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function fO() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function kO(BB) {
      return BB._stream ??= fO()
    }

    function dO(BB, OB, GB) {
      0 === OB.activeViews.size && kO(BB).broadcastPending.add(GB)
    }

    function KO(BB, OB, GB, YB) {
      const QB = BB._stream;
      if (void 0 === QB) return !0;
      let oB = !1;
      return QB.broadcastPending.delete(YB) ? oB = !0 : QB.sentBroadcast.delete(YB) && QB.broadcastDeletes.add(YB), OB.forEachActiveView((BB => {
        const OB = QB.pendingByView.get(BB.id);
        if (OB?.has(YB)) return OB.delete(YB), void(oB = !0);
        const jB = QB.sentByView.get(BB.id);
        if (jB?.has(YB)) {
          jB.delete(YB);
          let OB = BB.changes.get(GB);
          void 0 === OB && (OB = new Map, BB.changes.set(GB, OB)), OB.set(YB, DB.DELETE)
        }
      })), oB
    }

    function uO(BB, OB) {
      const GB = BB._stream?.pendingByView;
      if (void 0 === GB) return !1;
      for (const [YB, DB] of GB)
        if (DB.size > 0 && void 0 !== OB.activeViews.get(YB)?.deref()) return !0;
      return !1
    }

    function mO(BB) {
      const OB = BB._stream;
      return void 0 !== OB && (OB.broadcastPending.size > 0 || OB.broadcastDeletes.size > 0)
    }

    function IO(BB, OB, GB) {
      const YB = kO(BB);
      let DB = YB.pendingByView.get(OB);
      void 0 === DB && (DB = new Set, YB.pendingByView.set(OB, DB)), DB.add(GB)
    }

    function FO(BB, OB) {
      const GB = BB._stream;
      void 0 !== GB && (GB.pendingByView.delete(OB), GB.sentByView.delete(OB), GB.priorityByView?.delete(OB))
    }
    const iO = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function LO(BB) {
      if (null == BB || "object" !== typeof BB) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: OB,
        max: GB
      } = BB;
      if ("number" !== typeof OB || "number" !== typeof GB || !(GB > OB) || !Number.isFinite(OB) || !Number.isFinite(GB)) throw new Error(`t.quantized(): require finite min < max (got min=${OB}, max=${GB}).`);
      const YB = BB.bits ?? 16;
      if (8 !== YB && 16 !== YB && 32 !== YB) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${YB}).`);
      const DB = BB.mode ?? "clamp";
      if ("clamp" !== DB && "wrap" !== DB) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(DB)}).`);
      const QB = "wrap" === DB,
        oB = Math.pow(2, YB);
      return {
        min: OB,
        max: GB,
        bits: YB,
        wrap: QB,
        wire: iO[YB],
        range: GB - OB,
        span: QB ? oB : OB === -GB ? oB - 2 : oB - 1
      }
    }

    function gO(BB) {
      return null !== BB && "object" === typeof BB && void 0 !== BB.quantized
    }

    function rO(BB, OB) {
      if (BB.wrap) {
        if (!Number.isFinite(OB)) return 0;
        const GB = BB.range;
        let YB = (OB - BB.min) % GB;
        YB < 0 && (YB += GB);
        const DB = BB.span;
        return Math.floor(YB / GB * DB + .5) % DB
      }
      if (OB !== OB) return 0;
      const GB = OB < BB.min ? BB.min : OB > BB.max ? BB.max : OB;
      return Math.floor((GB - BB.min) / BB.range * BB.span + .5)
    }

    function XO(BB, OB) {
      return BB.min + OB / BB.span * BB.range
    }

    function wO(BB) {
      const OB = OO[BB.wire];
      return (GB, YB, DB) => OB(GB, rO(BB, YB), DB)
    }
    class EO {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(BB) {
        const OB = Object.getPrototypeOf(BB);
        if (OB !== KY) {
          let GB = EO.inheritedTypes.get(OB);
          GB || (GB = new Set, EO.inheritedTypes.set(OB, GB)), GB.add(BB)
        }
      }
      static cache(BB) {
        let OB = EO.cachedContexts.get(BB);
        return OB || (OB = new EO(BB), EO.cachedContexts.set(BB, OB)), OB
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(BB) && (this.types[OB] = BB, null == BB[Symbol.metadata] && CO.initialize(BB), this.schemas.set(BB, OB), !0)
      }
      getTypeId(BB) {
        return this.schemas.get(BB)
      }
      discoverTypes(BB) {
        if (!this.add(BB)) return;
        EO.inheritedTypes.get(BB)?.forEach((BB => {
          this.discoverTypes(BB)
        }));
        let OB = BB;
        for (;
          (OB = Object.getPrototypeOf(OB)) && OB !== KY && OB !== Function.prototype;) this.discoverTypes(OB);
        const GB = BB[Symbol.metadata];
        (GB[KB] || GB[LB]) && (this.hasFilters = !0);
        for (const YB in GB) {
          const BB = GB[YB].type;
          if ("string" !== typeof BB && !gO(BB))
            if ("function" === typeof BB) this.discoverTypes(BB);
            else {
              const OB = Object.values(BB)[0];
              if ("string" === typeof OB) continue;
              this.discoverTypes(OB)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function cO(BB) {
      const OB = aO(BB);
      return OB ? {
        complexTypeKlass: AO[OB],
        childType: BB[OB]
      } : {
        complexTypeKlass: !1,
        childType: BB
      }
    }

    function hO(BB, OB) {
      const GB = eO(BB),
        YB = aO(GB),
        DB = YB && aO(GB[YB]);
      if (DB) throw new Error(`${OB?`${OB}: `:""}@colyseus/schema: nested collections are not supported ("${YB}" of "${DB}"). Collections can only hold primitive types or Schema classes, wrap the inner ${DB} in a Schema class.`);
      return GB
    }

    function aO(BB) {
      return "object" === typeof BB && null !== BB ? Object.keys(BB).find((BB => void 0 !== AO[BB])) : void 0
    }

    function eO(BB) {
      if ("object" !== typeof BB || null === BB) return BB;
      if (Array.isArray(BB)) return {
        array: eO(BB[0])
      };
      const OB = function(BB) {
        const OB = Object.keys(BB),
          GB = OB.filter((BB => /\d+/.test(BB)));
        if (GB.length > 0 && GB.length === OB.length / 2 && BB[BB[GB[0]]] == GB[0]) return "number";
        if (OB.length > 0 && OB.every((OB => BB[OB] === OB))) return "string"
      }(BB);
      if (OB) return OB;
      if (gO(BB)) return "string" === typeof BB.quantized.wire ? BB : {
        quantized: LO(BB.quantized)
      };
      if (void 0 !== BB.type) return eO(BB.type);
      const GB = aO(BB);
      return GB && (BB[GB] = eO(BB[GB])), BB
    }
    const TO = [dB, mB, IB, FB, iB, LB, fB];

    function bO(BB, OB, GB) {
      BB[OB] || Object.defineProperty(BB, OB, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), BB[OB].push(GB)
    }
    const CO = {
        addField(BB, OB, GB, YB, DB) {
          if (OB >= 63) throw new Error(`Can't define field '${GB}'.\nSchema instances may only have up to 63 fields.`);
          BB[OB] = Object.assign(BB[OB] || {}, {
            type: YB,
            index: OB,
            name: GB
          }), Object.defineProperty(BB, nB, {
            value: BB[nB] || {},
            enumerable: !1,
            configurable: !0
          }), BB[nB][GB] = DB || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(BB, kB, {
            value: OB,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(BB, GB, {
            value: OB,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof BB[OB].type || gO(BB[OB].type) || (void 0 === BB[dB] && Object.defineProperty(BB, dB, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), BB[dB].push(OB));
          const QB = BB[OB].type;
          if (QB && "object" === typeof QB && void 0 !== QB.stream) {
            if (void 0 !== QB.array) throw new Error(UO);
            BB[OB].stream = !0, BB[LB] || Object.defineProperty(BB, LB, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), BB[LB].includes(OB) || BB[LB].push(OB);
            const DB = YB?.priority;
            "function" === typeof DB && CO.setStreamPriority(BB, GB, DB)
          }
        },
        setTag(BB, OB, GB) {
          const YB = BB[OB];
          if (BB[YB].tag = GB, BB[KB] || (Object.defineProperty(BB, KB, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(BB, uB, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), BB[KB].push(YB), GB < 0) BB[uB][GB] || (BB[uB][GB] = []), BB[uB][GB].push(YB);
          else
            for (let DB = GB; DB > 0; DB &= DB - 1) {
              const OB = DB & -DB;
              BB[uB][OB] || (BB[uB][OB] = []), BB[uB][OB].push(YB)
            }
        },
        setUnreliable(BB, OB) {
          const GB = BB[OB];
          if ("string" !== typeof BB[GB].type) throw new Error(`@unreliable cannot be applied to ref-type field "${OB}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          BB[GB].unreliable = !0, BB[mB] || Object.defineProperty(BB, mB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[mB].push(GB)
        },
        setPatchOnly(BB, OB) {
          const GB = BB[OB];
          if (BB[GB].fullStateOnly) throw new Error(`field "${OB}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          BB[GB].patchOnly = !0, bO(BB, IB, GB), bO(BB, FB, GB)
        },
        setDeprecated(BB, OB) {
          const GB = BB[OB];
          BB[GB].deprecated = !0, bO(BB, FB, GB), Object.defineProperty(BB, GB, {
            value: BB[GB],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(BB, OB) {
          const GB = BB[OB];
          if (BB[GB].patchOnly) throw new Error(`field "${OB}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          BB[GB].fullStateOnly = !0, bO(BB, iB, GB)
        },
        setStream(BB, OB) {
          const GB = BB[OB];
          BB[GB].stream = !0, BB[LB] || Object.defineProperty(BB, LB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[LB].push(GB)
        },
        setStreamPriority(BB, OB, GB) {
          const YB = BB[OB];
          BB[gB] || Object.defineProperty(BB, gB, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[gB][YB] = GB
        },
        getStreamPriority: (BB, OB) => BB?.[gB]?.[OB],
        defineField(BB, OB, GB, YB, DB) {
          const QB = hO(DB, `${BB.name}.${YB}`),
            {
              complexTypeKlass: oB,
              childType: jB
            } = cO(QB);
          CO.addField(OB, GB, YB, QB, SY(YB, GB, jB, oB)), OB[nB][YB] && Object.defineProperty(BB.prototype, YB, OB[nB][YB]), ("string" === typeof QB || gO(QB)) && (OB[fB] || Object.defineProperty(OB, fB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), OB[fB][GB] = "string" === typeof QB ? OO[QB] : wO(QB.quantized))
        },
        setFields(BB, OB) {
          const GB = BB.prototype.constructor;
          EO.register(GB);
          const YB = Object.getPrototypeOf(GB),
            DB = YB && YB[Symbol.metadata],
            QB = CO.initialize(GB);
          GB[yB] || (GB[yB] = KY[yB]), GB[JB] || (GB[JB] = KY[JB]), GB[MB] || (GB[MB] = KY[MB]), GB.prototype.toJSON || (GB.prototype.toJSON = KY.prototype.toJSON);
          let oB = QB[kB] ?? (DB && DB[kB]) ?? -1;
          oB++, QB[fB] || Object.defineProperty(QB, fB, {
            value: DB?.[fB] ? [...DB[fB]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const jB in OB) {
            if (void 0 !== QB[jB]) throw new Error(`@colyseus/schema: Duplicate '${jB}' definition on '${GB.name||"(anonymous)"}'.`);
            CO.defineField(GB, QB, oB, jB, OB[jB]), oB++
          }
          return BB
        },
        isDeprecated: (BB, OB) => !0 === BB[OB].deprecated,
        initialize(BB) {
          const OB = Object.getPrototypeOf(BB),
            GB = OB[Symbol.metadata];
          let YB = BB[Symbol.metadata] ?? Object.create(null);
          if (OB !== KY && YB === GB && (YB = Object.create(null), GB)) {
            Object.setPrototypeOf(YB, GB), Object.defineProperty(YB, kB, {
              value: GB[kB],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== GB[KB] && (Object.defineProperty(YB, KB, {
              value: [...GB[KB]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(YB, uB, {
              value: {
                ...GB[uB]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const BB of TO) {
              const OB = GB[BB];
              void 0 !== OB && Object.defineProperty(YB, BB, {
                value: [...OB],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(YB, nB, {
              value: {
                ...GB[nB]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(BB, Symbol.metadata, {
            value: YB,
            writable: !1,
            configurable: !0
          }), YB
        },
        isValidInstance: BB => BB.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(BB.constructor[Symbol.metadata], kB),
        getFields(BB) {
          const OB = BB[Symbol.metadata],
            GB = {};
          for (let YB = 0; YB <= OB[kB]; YB++) GB[OB[YB].name] = OB[YB].type;
          return GB
        },
        hasViewTagAtIndex: (BB, OB) => BB?.[KB]?.includes(OB),
        hasUnreliableAtIndex: (BB, OB) => BB?.[mB]?.includes(OB),
        hasPatchOnlyAtIndex: (BB, OB) => BB?.[IB]?.includes(OB),
        hasFullStateOnlyAtIndex: (BB, OB) => BB?.[iB]?.includes(OB),
        hasStreamAtIndex: (BB, OB) => BB?.[LB]?.includes(OB)
      },
      HO = (BB, OB, GB) => BB(OB, GB);
    class vO {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(BB) {
        this.ops = new Uint8Array(Math.max(BB + 1, 1))
      }
      record(BB, OB) {
        const GB = this.ops[BB];
        0 === GB ? this.ops[BB] = OB : (GB === DB.DELETE || GB === DB.ADD && OB === DB.DELETE_AND_ADD) && (this.ops[BB] = DB.DELETE_AND_ADD), BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      recordDelete(BB, OB) {
        this.ops[BB] = OB, BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      recordRaw(BB, OB) {
        this.record(BB, OB)
      }
      operationAt(BB) {
        const OB = this.ops[BB];
        return 0 === OB ? void 0 : OB
      }
      setOperationAt(BB, OB) {
        this.ops[BB] = OB
      }
      forEach(BB) {
        this.forEachWithCtx(BB, HO)
      }
      forEachWithCtx(BB, OB) {
        let GB = this.dirtyLow,
          YB = this.dirtyHigh;
        const DB = this.ops;
        for (; 0 !== GB;) {
          const YB = GB & -GB,
            QB = 31 - Math.clz32(YB);
          GB ^= YB, OB(BB, QB, DB[QB])
        }
        for (; 0 !== YB;) {
          const GB = YB & -YB,
            QB = 31 - Math.clz32(GB) + 32;
          YB ^= GB, OB(BB, QB, DB[QB])
        }
      }
      size() {
        return xO(this.dirtyLow) + xO(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class sO {
      ap = new Map;
      pureOps = [];
      record(BB, OB) {
        const GB = this.ap.get(BB);
        void 0 === GB ? this.ap.set(BB, OB) : (GB === DB.DELETE || GB === DB.ADD && OB === DB.DELETE_AND_ADD) && this.ap.set(BB, DB.DELETE_AND_ADD)
      }
      recordDelete(BB, OB) {
        this.ap.set(BB, OB)
      }
      recordRaw(BB, OB) {
        this.ap.set(BB, OB)
      }
      recordPure(BB) {
        this.pureOps.push([this.ap.size, BB])
      }
      operationAt(BB) {
        return this.ap.get(BB)
      }
      setOperationAt(BB, OB) {
        this.ap.has(BB) && this.ap.set(BB, OB)
      }
      forEach(BB) {
        this.forEachWithCtx(BB, HO)
      }
      forEachWithCtx(BB, OB) {
        const GB = this.pureOps;
        if (GB.length > 0) {
          let YB = 0,
            DB = 0;
          for (const [QB, oB] of this.ap) {
            for (; YB < GB.length && GB[YB][0] <= DB;) {
              const DB = GB[YB++][1];
              OB(BB, -DB, DB)
            }
            OB(BB, QB, oB), DB++
          }
          for (; YB < GB.length;) {
            const DB = GB[YB++][1];
            OB(BB, -DB, DB)
          }
        } else
          for (const [YB, DB] of this.ap) OB(BB, YB, DB)
      }
      size() {
        return this.ap.size + this.pureOps.length
      }
      has() {
        return this.ap.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.ap.clear(), this.pureOps.length = 0
      }
      shift(BB) {
        const OB = new Map;
        for (const [GB, YB] of this.ap) OB.set(GB + BB, YB);
        this.ap = OB
      }
    }

    function xO(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }

    function tO(BB) {
      if (void 0 === BB) return 0;
      let OB = 0;
      for (let GB = 0, YB = BB.length; GB < YB; GB++) {
        const YB = BB[GB];
        YB < 32 && (OB |= 1 << YB)
      }
      return OB
    }

    function BG(BB) {
      const OB = BB.constructor;
      if (Object.prototype.hasOwnProperty.call(OB, UB)) return OB[UB];
      const GB = OB[Symbol.metadata],
        YB = CO.isValidInstance(BB),
        DB = (GB?.[KB]?.length ?? 0) > 0,
        QB = function(BB) {
          const OB = [],
            GB = [],
            YB = [],
            DB = [],
            QB = BB?.[kB];
          if (void 0 === QB) return {
            names: OB,
            types: GB,
            tags: YB,
            encoders: DB
          };
          const oB = BB[fB];
          for (let jB = 0; jB <= QB; jB++) {
            const QB = BB[jB];
            void 0 !== QB ? (OB[jB] = QB.name, GB[jB] = QB.type, YB[jB] = QB.tag, DB[jB] = oB?.[jB]) : (OB[jB] = void 0, GB[jB] = void 0, YB[jB] = void 0, DB[jB] = void 0)
          }
          return {
            names: OB,
            types: GB,
            tags: YB,
            encoders: DB
          }
        }(GB),
        oB = YB && !DB ? void 0 : OB[PB],
        jB = {
          encoder: OB[JB],
          filter: oB,
          metadata: GB,
          isSchema: YB,
          filterBitmask: YB ? tO(GB?.[KB]) : 0,
          hasAnyFullStateOnly: (GB?.[iB]?.length ?? 0) > 0,
          hasAnyUnreliable: (GB?.[mB]?.length ?? 0) > 0,
          hasAnyStream: (GB?.[LB]?.length ?? 0) > 0,
          hasAnyView: DB,
          fullStateOnlyBitmask: tO(GB?.[iB]),
          unreliableBitmask: tO(GB?.[mB]),
          streamBitmask: tO(GB?.[LB]),
          names: QB.names,
          types: QB.types,
          tags: QB.tags,
          encoders: QB.encoders
        };
      return Object.defineProperty(OB, UB, {
        value: jB,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), jB
    }

    function OG(BB, OB) {
      if (void 0 !== BB.parentRef && OB(BB.parentRef, BB._parentIndex)) return !0;
      for (let GB = BB.extraParents; void 0 !== GB; GB = GB.next)
        if (OB(GB.ref, GB.index)) return !0;
      return !1
    }
    const GG = (BB, OB) => {
        BB.isFieldUnreliable(OB) ? BB.ensureUnreliableRecorder().record(OB, DB.ADD) : BB.record(OB, DB.ADD)
      },
      YG = (BB, OB) => BB(OB);

    function DG(BB, OB, GB) {
      const YB = BB.refTarget;
      if (void 0 !== YB[ZB]) {
        if (BB.isPatchOnly) return;
        if (Array.isArray(YB.items)) {
          const BB = YB.items;
          for (let YB = 0, DB = BB.length; YB < DB; YB++) void 0 !== BB[YB] && GB(OB, YB)
        } else if (void 0 !== YB.journal)
          for (const [BB, DB] of YB.journal.keyByIndex) YB.$items.has(DB) && GB(OB, BB);
        else if (void 0 !== YB.$items)
          for (const BB of YB.$items.keys()) GB(OB, BB)
      } else {
        const DB = BB.metadata;
        if (!DB) return;
        const QB = DB[kB] ?? -1,
          oB = DB[FB],
          jB = BB.encDescriptor.names;
        for (let BB = 0; BB <= QB; BB++) {
          const DB = jB[BB];
          if (void 0 === DB) continue;
          if (oB && oB.includes(BB)) continue;
          const QB = YB[DB];
          void 0 !== QB && null !== QB && GB(OB, BB)
        }
      }
    }

    function QG(BB, OB, GB, YB) {
      ! function(BB, OB, GB) {
        if (!OB) return;
        const YB = OB[qB],
          DB = !YB._isSchema;
        let QB;
        DB ? (OB = YB.parent, GB = YB.parentIndex, QB = OB?.[qB].metadata) : QB = YB.metadata;
        const oB = (QB?.[IB]?.includes(GB) ? UG : 0) | (QB?.[iB]?.includes(GB) ? fG : 0),
          jB = YB.flags & KG | oB,
          yB = BB.flags;
        BB.flags = yB | jB;
        jB & ~yB & fG && (BB.reset(), BB.unreliableRecorder?.reset());
        const JB = BB.root?.types;
        if (!JB?.hasFilters) return;
        const MB = QB?.[KB]?.includes(GB) ?? !1,
          PB = QB?.[LB]?.includes(GB) ?? !1,
          zB = YB.isFiltered || MB || PB;
        if (BB.isFiltered = zB, PB && !DB) {
          BB.isStreamCollection = !0;
          const OB = kO(BB.ref);
          if (void 0 === OB.priority) {
            const BB = CO.getStreamPriority(QB, GB);
            void 0 !== BB && (OB.priority = BB)
          }
          BB.root?.registerStream(BB.ref)
        }
        if (zB) {
          const OB = jG(BB);
          BB.isVisibilitySharedWithParent = YB.isFiltered && OB && !PB && (!MB || DB && QB[GB].tag !== pY)
        }
      }(BB, OB, GB), BB.isFullStateOnly || (BB.has() && BB.root?.enqueueChangeTree(BB), BB.unreliableRecorder?.has() && BB.root?.enqueueUnreliable(BB), BB.has() || BB.unreliableRecorder?.has() || BB.root?.enqueueChangeTree(BB))
    }

    function oG(BB) {
      const OB = BB.pendingFilterRefresh;
      for (let GB = 0; GB < OB.length; GB++) {
        const BB = OB[GB];
        0 !== (BB.flags & dG) && yG(BB)
      }
      OB.length = 0
    }

    function jG(BB) {
      return BB._isSchema || "string" !== typeof BB.refTarget[ZB]
    }

    function yG(BB) {
      BB.flags &= ~dG;
      const OB = BB.root;
      if (void 0 === OB || void 0 === BB.parentRef) return;
      const GB = jG(BB);
      let YB = lG(BB, BB.parentRef, BB._parentIndex, GB);
      for (let QB = BB.extraParents; void 0 !== QB && YB !== zG; QB = QB.next) YB |= lG(BB, QB.ref, QB.index, GB);
      if (0 === YB) return;
      BB.isVisibilitySharedWithParent = 0 !== (YB & PG);
      const DB = 0 === (YB & MG);
      DB !== BB.isFiltered && (BB.isFiltered = DB, DB || BB.isFullStateOnly || (BB.forEachLiveWithCtx(BB, GG), BB.has() && OB.enqueueChangeTree(BB), BB.unreliableRecorder?.has() && OB.enqueueUnreliable(BB)), BB.forEachChildWithCtx(BB, pG))
    }
    const JG = 1,
      MG = 2,
      PG = 4,
      zG = JG | MG | PG;

    function lG(BB, OB, GB, YB) {
      const DB = OB[qB];
      if (DB.root !== BB.root || ! function(BB, OB, GB) {
          const YB = OB.refTarget;
          if (OB.isArray) {
            const OB = YB.items,
              DB = OB[GB];
            if (void 0 !== DB && DB[qB] === BB) return !0;
            for (let GB = 0, YB = OB.length; GB < YB; GB++) {
              const YB = OB[GB];
              if (void 0 !== YB && YB[qB] === BB) return !0
            }
            return !1
          }
          const DB = OB.getValue(GB);
          return void 0 !== DB && DB[qB] === BB
        }(BB, DB, GB)) return 0;
      DB.flags & dG && yG(DB);
      let QB = JG;
      if (DB._isSchema) {
        void 0 !== DB.encDescriptor.tags[GB] || DB.isFieldStream(GB) || (DB.isFiltered ? YB && (QB |= PG) : QB |= MG)
      } else if (DB.isFiltered) {
        if (YB && !DB.isStreamCollection) {
          const BB = DB.parent?.[qB];
          (BB?._isSchema ? BB.encDescriptor.tags[DB.parentIndex] : void 0) !== pY && (QB |= PG)
        }
      } else QB |= MG;
      return QB
    }
    const pG = (BB, OB, GB) => {
      yG(OB)
    };

    function qG(BB, OB, GB, YB) {
      if (BB.addParent(OB, YB), !GB) return;
      const DB = GB.add(BB);
      GB !== BB.root && (BB.root = GB, QG(BB, OB, YB));
      const QB = OB?.[qB];
      if (void 0 !== QB && void 0 !== QB.subscribedViews && void 0 !== OB[ZB] && function(BB, OB, GB, YB) {
          const DB = BB.subscribedViews;
          if (void 0 === DB) return;
          const QB = BB.isStreamCollection,
            oB = QB ? BB.ref : void 0,
            jB = QB ? void 0 : GB[qB];
          for (let yB = 0, JB = DB.length; yB < JB; yB++) {
            let BB = DB[yB];
            for (; 0 !== BB;) {
              const GB = BB & -BB;
              BB ^= GB;
              const JB = 32 * yB + (31 - Math.clz32(GB)),
                MB = YB.activeViews.get(JB),
                PB = MB?.deref();
              void 0 !== PB ? QB ? IO(oB, JB, OB) : void 0 !== jB && PB.markVisible(jB) : DB[yB] &= ~GB
            }
          }
        }(QB, YB, BB.ref, GB), DB) {
        let OB = WG[AG];
        void 0 === OB && (OB = {
          parentRef: void 0,
          root: void 0
        }, WG[AG] = OB), OB.parentRef = BB.ref, OB.root = GB, AG++, NG(BB, OB, VG), AG--
      }
    }

    function ZG(BB, OB, GB) {
      BB(OB, GB)
    }

    function NG(BB, OB, GB) {
      const YB = BB.refTarget;
      if (YB[ZB]) {
        if ("string" !== typeof YB[ZB]) {
          const BB = YB.items;
          if (void 0 !== BB)
            for (let YB = 0, DB = BB.length; YB < DB; YB++) {
              const DB = BB[YB];
              DB && GB(OB, DB[qB], YB)
            } else {
              const BB = YB.$items,
                DB = YB._collectionIndexes;
              for (const YB of BB.keys()) {
                const QB = BB.get(YB);
                QB && GB(OB, QB[qB], DB?.[YB] ?? YB)
              }
            }
        }
      } else {
        const DB = BB.metadata,
          QB = DB?.[dB];
        if (!QB) return;
        const oB = BB.encDescriptor.names;
        for (let BB = 0, jB = QB.length; BB < jB; BB++) {
          const DB = QB[BB],
            jB = YB[oB[DB]];
          jB && GB(OB, jB[qB], DB)
        }
      }
    }

    function RG(BB, OB, GB) {
      OB.root !== BB ? OB.setRoot(BB) : BB.add(OB)
    }
    const WG = [];
    let AG = 0;

    function VG(BB, OB, GB) {
      if (OB.root === BB.root) return BB.root.add(OB), void BB.root.moveNextToParent(OB);
      OB.setParent(BB.parentRef, BB.root, GB)
    }

    function SG(BB, OB, GB) {
      const YB = (3 & GB) << 3;
      return GB < 4 ? BB >>> YB & 255 : OB >>> YB & 255
    }
    const nG = (BB, OB, GB) => BB(OB, GB);
    const UG = 16,
      fG = 32,
      kG = 128,
      dG = 256,
      KG = UG | fG;
    class uG {
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
        return 0 !== (this.flags & UG)
      }
      set isPatchOnly(BB) {
        this.flags = BB ? this.flags | UG : this.flags & ~UG
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & fG)
      }
      set isFullStateOnly(BB) {
        this.flags = BB ? this.flags | fG : this.flags & ~fG
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(BB) {
        this.flags = BB ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & kG)
      }
      set needsRestage(BB) {
        this.flags = BB ? this.flags | kG : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new vO(this.metadata?.[kB] ?? 0) : new sO), this.unreliableRecorder
      }
      isFieldUnreliable(BB) {
        const OB = this.encDescriptor;
        return !!OB.hasAnyUnreliable && (BB < 32 ? 0 !== (OB.unreliableBitmask & 1 << BB) : CO.hasUnreliableAtIndex(this.metadata, BB))
      }
      isFieldFullStateOnly(BB) {
        if (this.isFullStateOnly) return !0;
        const OB = this.encDescriptor;
        return !!OB.hasAnyFullStateOnly && (BB < 32 ? 0 !== (OB.fullStateOnlyBitmask & 1 << BB) : CO.hasFullStateOnlyAtIndex(this.metadata, BB))
      }
      isFieldStream(BB) {
        const OB = this.encDescriptor;
        return !!OB.hasAnyStream && (BB < 32 ? 0 !== (OB.streamBitmask & 1 << BB) : CO.hasStreamAtIndex(this.metadata, BB))
      }
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        this.ref = BB, this.refTarget = OB;
        const GB = BG(BB);
        this.encDescriptor = GB, this.metadata = GB.metadata;
        const YB = GB.isSchema;
        if (this._isSchema = YB, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, YB) {
          const BB = this.metadata?.[kB] ?? 0;
          BB > 7 && (this.ops = new Uint8Array(BB + 1))
        } else this.collDirty = new Map
      }
      _opAt(BB) {
        const OB = this.ops;
        if (void 0 !== OB) return OB[BB];
        const GB = (3 & BB) << 3;
        return BB < 4 ? this.opsLow >>> GB & 255 : this.opsHigh >>> GB & 255
      }
      _opPut(BB, OB) {
        const GB = this.ops;
        if (void 0 !== GB) return void(GB[BB] = OB);
        const YB = (3 & BB) << 3,
          DB = ~(255 << YB);
        BB < 4 ? this.opsLow = this.opsLow & DB | OB << YB : this.opsHigh = this.opsHigh & DB | OB << YB
      }
      _markDirty(BB) {
        BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      record(BB, OB) {
        if (this._isSchema) {
          const GB = this._opAt(BB);
          0 === GB ? this._opPut(BB, OB) : (GB === DB.DELETE || GB === DB.ADD && OB === DB.DELETE_AND_ADD) && this._opPut(BB, DB.DELETE_AND_ADD), this._markDirty(BB)
        } else {
          const GB = this.collDirty,
            YB = GB.get(BB);
          let QB;
          QB = void 0 === YB ? OB : YB === DB.DELETE || YB === DB.ADD && OB === DB.DELETE_AND_ADD ? DB.DELETE_AND_ADD : YB, GB.set(BB, QB)
        }
      }
      recordDelete(BB, OB) {
        this._isSchema ? (this._opPut(BB, OB), this._markDirty(BB)) : this.collDirty.set(BB, OB)
      }
      recordRaw(BB, OB) {
        this._isSchema ? (this._opPut(BB, OB), this._markDirty(BB)) : this.collDirty.set(BB, OB)
      }
      recordPure(BB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, BB])
      }
      operationAt(BB) {
        if (this._isSchema) {
          const OB = this._opAt(BB);
          return 0 === OB ? void 0 : OB
        }
        return this.collDirty.get(BB)
      }
      setOperationAt(BB, OB) {
        if (this._isSchema) this._opPut(BB, OB);
        else {
          const GB = this.collDirty;
          GB.has(BB) && GB.set(BB, OB)
        }
      }
      forEach(BB) {
        this.forEachWithCtx(BB, nG)
      }
      forEachWithCtx(BB, OB) {
        if (this._isSchema) {
          let GB = this.dirtyLow,
            YB = this.dirtyHigh;
          const DB = this.ops;
          if (void 0 !== DB) {
            for (; 0 !== GB;) {
              const YB = GB & -GB,
                QB = 31 - Math.clz32(YB);
              GB ^= YB, OB(BB, QB, DB[QB])
            }
            for (; 0 !== YB;) {
              const GB = YB & -YB,
                QB = 31 - Math.clz32(GB) + 32;
              YB ^= GB, OB(BB, QB, DB[QB])
            }
          } else {
            const YB = this.opsLow,
              DB = this.opsHigh;
            for (; 0 !== GB;) {
              const QB = GB & -GB,
                oB = 31 - Math.clz32(QB);
              GB ^= QB, OB(BB, oB, SG(YB, DB, oB))
            }
          }
          return
        }
        const GB = this.collDirty,
          YB = this.collPureOps;
        if (void 0 !== YB && YB.length > 0) {
          let DB = 0,
            QB = 0;
          for (const [oB, jB] of GB) {
            for (; DB < YB.length && YB[DB][0] <= QB;) {
              const GB = YB[DB++][1];
              OB(BB, -GB, GB)
            }
            OB(BB, oB, jB), QB++
          }
          for (; DB < YB.length;) {
            const GB = YB[DB++][1];
            OB(BB, -GB, GB)
          }
        } else
          for (const [DB, QB] of GB) OB(BB, DB, QB)
      }
      size() {
        return this._isSchema ? xO(this.dirtyLow) + xO(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(BB, OB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const GB = this.collDirty,
          YB = new Map,
          QB = !this.paused && !this.isFullStateOnly;
        if (BB > 0)
          for (const [DB, oB] of GB) DB < BB && YB.set(DB, oB);
        if (QB)
          for (let oB = 0; oB < OB; oB++) YB.set(BB + oB, DB.ADD);
        for (const [DB, oB] of GB) DB >= BB && YB.set(DB + OB, oB);
        this.collDirty = YB, QB && this.root?.enqueueChangeTree(this)
      }
      removeAt(BB, OB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const GB = this.collDirty,
          YB = BB + OB;
        let DB = !1;
        for (const oB of GB.keys())
          if (oB >= YB) {
            DB = !0;
            break
          } if (!DB) {
          for (let OB = BB; OB < YB; OB++) GB.delete(OB);
          return
        }
        const QB = new Map;
        for (const [oB, jB] of GB) oB < BB ? QB.set(oB, jB) : oB >= YB && QB.set(oB - OB, jB);
        this.collDirty = QB
      }
      unshift(BB) {
        this.insertAt(0, BB)
      }
      setRoot(BB) {
        ! function(BB, OB) {
          BB.root = OB;
          const GB = OB.add(BB);
          QG(BB, BB.parent, BB.parentIndex), GB && NG(BB, OB, RG)
        }(this, BB)
      }
      setParent(BB, OB, GB) {
        qG(this, BB, OB, GB)
      }
      forEachChild(BB) {
        NG(this, BB, ZG)
      }
      forEachChildWithCtx(BB, OB) {
        NG(this, BB, OB)
      }
      forEachLive(BB) {
        DG(this, BB, YG)
      }
      forEachLiveWithCtx(BB, OB) {
        DG(this, BB, OB)
      }
      operation(BB) {
        this.paused || this.isFullStateOnly || (this.recordPure(BB), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(BB, OB, GB) {
        if (!this.paused && !this.isFieldFullStateOnly(BB)) {
          if (this.isFieldUnreliable(BB) && !this.isNew) {
            const YB = this.ensureUnreliableRecorder();
            return GB ? YB.recordRaw(BB, OB) : YB.record(BB, OB), void this.root?.enqueueUnreliable(this)
          }
          GB ? this.recordRaw(BB, OB) : this.record(BB, OB), this.root?.enqueueChangeTree(this)
        }
      }
      change(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB.ADD;
        this._routeAndRecord(BB, OB, !1)
      }
      indexedOperation(BB, OB) {
        this._routeAndRecord(BB, OB, !0)
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
        const OB = this.paused;
        this.paused = !0;
        try {
          return BB()
        } finally {
          this.paused = OB
        }
      }
      markDirty(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB.ADD;
        const GB = this.paused;
        this.paused = !1;
        try {
          this.change(BB, OB)
        } finally {
          this.paused = GB
        }
      }
      getValue(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[zB](BB, OB)
      }
      delete(BB, OB) {
        if (void 0 === BB) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${BB}'`)
          } catch (QD) {
            console.warn(QD)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(BB)) return this.getValue(BB);
        const GB = this.isFieldUnreliable(BB) && !this.isNew;
        GB ? this.ensureUnreliableRecorder().recordDelete(BB, OB ?? DB.DELETE) : this.recordDelete(BB, OB ?? DB.DELETE);
        const YB = this.getValue(BB);
        return YB && YB[qB] && this.root?.remove(YB[qB]), GB ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), YB
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[RB]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[RB]?.()
      }
      discard() {
        this._isSchema || this.refTarget[RB]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const BB = BB => {
          if (BB < 0) return;
          const OB = this.getValue(BB);
          OB && OB[qB] && OB[qB].discardAll()
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
      addParent(BB, OB) {
        ! function(BB, OB, GB) {
          if (BB.parentRef) {
            if (BB.parentRef[qB] === OB[qB]) return void(BB._parentIndex = GB);
            if (OG(BB, ((BB, GB) => BB[qB] === OB[qB]))) return void(BB._parentIndex = GB)
          }
          void 0 === BB.parentRef ? (BB.parentRef = OB, BB._parentIndex = GB) : (BB.extraParents = {
            ref: BB.parentRef,
            index: BB._parentIndex,
            next: BB.extraParents
          }, BB.parentRef = OB, BB._parentIndex = GB)
        }(this, BB, OB)
      }
      setParentIndex(BB, OB) {
        ! function(BB, OB, GB) {
          if (void 0 !== BB.extraParents)
            if (BB.parentRef[qB] !== OB[qB]) {
              for (let YB = BB.extraParents; void 0 !== YB; YB = YB.next)
                if (YB.ref[qB] === OB[qB]) return void(YB.index = GB)
            } else BB._parentIndex = GB;
          else BB._parentIndex = GB
        }(this, BB, OB)
      }
      removeParent() {
        return function(BB, OB) {
          if (BB.parentRef && BB.parentRef[qB] === OB[qB]) return BB.extraParents ? (BB.parentRef = BB.extraParents.ref, BB._parentIndex = BB.extraParents.index, BB.extraParents = BB.extraParents.next) : (BB.parentRef = void 0, BB._parentIndex = void 0), !0;
          let GB = BB.extraParents,
            YB = null;
          for (; GB;) {
            if (GB.ref[qB] === OB[qB]) return YB ? YB.next = GB.next : BB.extraParents = GB.next, !0;
            YB = GB, GB = GB.next
          }
          return void 0 === BB.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(BB) {
        return function(BB, OB) {
          if (void 0 !== BB.parentRef && OB(BB.parentRef, BB._parentIndex)) return {
            ref: BB.parentRef,
            index: BB._parentIndex
          };
          for (let GB = BB.extraParents; void 0 !== GB; GB = GB.next)
            if (OB(GB.ref, GB.index)) return {
              ref: GB.ref,
              index: GB.index
            }
        }(this, BB)
      }
      hasParent(BB) {
        return OG(this, BB)
      }
      indexInParent(BB) {
        return function(BB, OB) {
          if (BB.parentRef && BB.parentRef[qB] === OB[qB]) return BB._parentIndex;
          for (let GB = BB.extraParents; void 0 !== GB; GB = GB.next)
            if (GB.ref[qB] === OB[qB]) return GB.index
        }(this, BB)
      }
      getAllParents() {
        return function(BB) {
          const OB = [];
          BB.parentRef && OB.push({
            ref: BB.parentRef,
            index: BB._parentIndex
          });
          let GB = BB.extraParents;
          for (; GB;) OB.push({
            ref: GB.ref,
            index: GB.index
          }), GB = GB.next;
          return OB
        }(this)
      }
    }
    class mG {
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
        const OB = this.ref;
        if (OB[ZB]) {
          if ("string" !== typeof OB[ZB])
            for (const [GB, YB] of OB.entries()) YB && BB(YB[qB], OB._collectionIndexes?.[GB] ?? GB);
          return
        }
        const GB = OB.constructor,
          YB = GB?.[Symbol.metadata];
        if (!YB) return;
        const DB = YB[dB] ?? [];
        for (let QB = 0; QB < DB.length; QB++) {
          const GB = DB[QB],
            oB = OB[YB[GB].name];
          oB && BB(oB[qB], GB)
        }
      }
      forEachChildWithCtx(BB, OB) {
        this.forEachChild(((GB, YB) => OB(BB, GB, YB)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function IG(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
      var GB;
      Object.defineProperty(BB, qB, {
        value: (GB = OB, new mG(GB)),
        enumerable: !1,
        writable: !0
      })
    }

    function FG(BB, OB, GB, YB, QB, oB, yB) {
      void 0 !== yB ? yB(OB, YB, oB) : "string" === typeof GB ? OO[GB]?.(OB, YB, oB) : null != GB[Symbol.metadata] ? (OO.number(OB, YB[jB], oB), (QB & DB.ADD) === DB.ADD && BB.tryEncodeTypeId(OB, GB, YB.constructor, oB)) : OO.number(OB, YB[jB], oB)
    }
    const iG = function(BB, OB, GB, YB, QB, oB, jB, yB) {
        if (OB[oB.offset++] = 255 & (YB | QB), QB === DB.DELETE) return;
        const JB = GB.encDescriptor,
          MB = GB.ref,
          PB = MB[VB][YB] ?? MB[JB.names[YB]];
        FG(BB, OB, JB.types[YB], PB, QB, oB, JB.encoders[YB])
      },
      LG = function(BB, OB, GB, YB, QB, oB) {
        if (OB[oB.offset++] = 255 & QB, OO.number(OB, YB, oB), QB === DB.DELETE) return;
        const jB = GB.ref;
        if ((QB & DB.ADD) === DB.ADD) {
          const BB = jB.$indexes.get(YB);
          OO.string(OB, BB, oB)
        }
        FG(BB, OB, jB[ZB], jB[zB](YB), QB, oB)
      },
      gG = function(BB, OB, GB, YB, QB, oB) {
        if (OB[oB.offset++] = 255 & QB, OO.number(OB, YB, oB), QB === DB.DELETE) return;
        const jB = GB.ref;
        FG(BB, OB, jB[ZB], jB[zB](YB), QB, oB)
      },
      rG = function(BB, OB, GB, YB, QB, oB) {
        const jB = GB.ref;
        (QB & DB.ADD) === DB.ADD && "function" === typeof jB.set ? LG(BB, OB, GB, YB, QB, oB) : gG(BB, OB, GB, YB, QB, oB)
      },
      XG = function(BB, OB, GB, YB, QB, oB, yB, JB) {
        const MB = GB.refTarget,
          PB = MB[ZB],
          lB = "string" !== typeof PB;
        let pB;
        if (JB && GB.isFiltered && lB) {
          const BB = MB.tmpItems[YB];
          if (!BB) return;
          if (pB = BB[jB], QB === DB.DELETE) QB = DB.DELETE_BY_REFID;
          else if ((QB & DB.ADD) === DB.ADD) QB = DB.ADD_BY_REFID;
          else if ((QB & DB.MOVE) === DB.MOVE) return
        } else if (QB === DB.DELETE && lB) {
          const BB = MB.tmpItems[YB];
          if (!BB) return;
          pB = BB[jB], QB = DB.DELETE_BY_REFID
        } else pB = YB;
        if (OB[oB.offset++] = 255 & QB, OO.number(OB, pB, oB), QB === DB.DELETE || QB === DB.DELETE_BY_REFID) return;
        FG(BB, OB, PB, MB[zB](YB, yB), QB, oB)
      };

    function wG(BB, OB, GB, YB, QB, oB, yB) {
      const JB = BB.resyncVisited;
      let MB = JB.get(BB.currentRefId);
      if (void 0 === MB && JB.set(BB.currentRefId, MB = new Set), MB.add(YB), void 0 !== QB && GB === DB.ADD && QB !== oB) {
        const GB = QB[jB];
        void 0 !== GB && (BB.root.removeRef(GB), yB?.push({
          ref: OB,
          refId: BB.currentRefId,
          op: DB.DELETE,
          dynamicIndex: YB,
          value: void 0,
          previousValue: QB
        }))
      }
    }

    function EG(BB, OB, GB, YB) {
      const DB = OB[jB];
      if (void 0 === DB || GB.has(DB)) return;
      GB.add(DB);
      const QB = OB.constructor[Symbol.metadata],
        oB = QB?.[dB];
      if (void 0 === oB) return;
      const yB = QB[IB];
      for (let jB = 0; jB < oB.length; jB++) {
        const DB = oB[jB];
        if (void 0 !== yB && yB.includes(DB)) continue;
        const JB = QB[DB],
          MB = OB[JB.name];
        MB && (KY.is(JB.type) ? EG(BB, MB, GB, YB) : cG(BB, MB, GB, YB))
      }
    }

    function cG(BB, OB, GB, YB) {
      const QB = OB[NB] ?? OB,
        oB = QB[jB];
      if (void 0 === oB || GB.has(oB)) return;
      GB.add(oB);
      const yB = BB.resyncVisited.get(oB);
      if (void 0 === yB) return;
      const JB = BB.root;
      QB[pB](yB, ((BB, GB) => {
        YB?.push({
          ref: OB,
          refId: oB,
          op: DB.DELETE,
          dynamicIndex: GB,
          value: void 0,
          previousValue: BB
        });
        const QB = BB?.[jB];
        void 0 !== QB && JB.removeRef(QB)
      }), (OB => {
        KY.isSchema(OB) && EG(BB, OB, GB, YB)
      }))
    }
    const hG = 1,
      aG = 2,
      eG = 3,
      TG = 4,
      bG = 5;

    function CG(BB, OB, GB, YB, QB, oB, yB, JB, MB) {
      const PB = BB.root;
      let zB;
      if ((OB & DB.DELETE) === DB.DELETE) {
        const BB = QB?.[jB];
        void 0 !== BB && PB.removeRef(BB), OB !== DB.DELETE_AND_ADD && GB[lB](YB), zB = void 0
      }
      if (OB === DB.DELETE);
      else if ("string" === typeof oB) zB = WO[oB](yB, JB);
      else if (gO(oB)) zB = function(BB, OB, GB) {
        return XO(BB, (0, WO[BB.wire])(OB, GB))
      }(oB.quantized, yB, JB);
      else if (KY.is(oB)) {
        const GB = WO.number(yB, JB);
        if (zB = PB.refs.get(GB), (OB & DB.ADD) === DB.ADD) {
          const YB = BB.getInstanceType(yB, JB, oB);
          zB || (zB = BB.createInstanceOfType(YB)), PB.addRef(GB, zB, zB !== QB || OB === DB.DELETE_AND_ADD && zB === QB)
        }
      } else {
        const GB = (pB = Object.keys(oB)[0], AO[pB]),
          YB = WO.number(yB, JB);
        null !== BB.resyncVisited && function(BB, OB) {
          const GB = BB.resyncVisited;
          GB.has(OB) || GB.set(OB, new Set)
        }(BB, YB);
        const lB = PB.refs.has(YB) ? QB || PB.refs.get(YB) : GB.constructor.initializeForDecoder();
        if (zB = lB.clone(!0), zB[ZB] = Object.values(oB)[0], QB) {
          let BB = QB[jB];
          if (void 0 !== BB && YB !== BB) {
            (OB & DB.DELETE) !== DB.DELETE && PB.removeRef(BB);
            const GB = QB.entries();
            let YB;
            for (;
              (YB = GB.next()) && !YB.done;) {
              const [OB, GB] = YB.value;
              "object" === typeof GB && (BB = GB[jB]), MB?.push({
                ref: QB,
                refId: BB,
                op: DB.DELETE,
                field: OB,
                value: void 0,
                previousValue: GB
              })
            }
          }
        }
        PB.addRef(YB, zB, lB !== QB || OB === DB.DELETE_AND_ADD && lB === QB)
      }
      var pB;
      return zB
    }
    const HG = function(BB, OB, GB, YB, DB) {
        const QB = OB[GB.offset++],
          oB = YB.constructor[Symbol.metadata],
          jB = QB >> 6 << 6,
          yB = QB % (jB || 255),
          JB = oB[yB];
        if (void 0 === JB) return console.warn("@colyseus/schema: field not defined at", {
          index: yB,
          ref: YB.constructor.name,
          metadata: oB
        }), -1;
        const MB = !0 === JB.deprecated,
          PB = MB ? void 0 : YB[zB](yB),
          lB = CG(BB, jB, YB, yB, PB, JB.type, OB, GB, DB);
        MB || (null !== lB && void 0 !== lB && (YB[JB.name] = lB), PB !== lB && DB?.push({
          ref: YB,
          refId: BB.currentRefId,
          op: jB,
          field: JB.name,
          value: lB,
          previousValue: PB
        }))
      },
      vG = function(BB, OB, GB, YB, QB) {
        const oB = YB[NB] ?? YB,
          jB = OB[GB.offset++];
        if (jB === DB.CLEAR) return BB.removeChildRefs(oB, QB), void oB.clear();
        const yB = WO.number(OB, GB),
          JB = oB[ZB],
          MB = oB.constructor.COLLECTION_KIND;
        let PB;
        (jB & DB.ADD) === DB.ADD ? MB === hG ? (PB = WO.string(OB, GB), oB.setIndex(yB, PB)) : PB = yB : PB = oB.getIndex(yB);
        const lB = oB[zB](yB),
          pB = CG(BB, jB, YB, yB, lB, JB, OB, GB, QB);
        if (null !== BB.resyncVisited && wG(BB, YB, jB, PB, lB, pB, QB), null !== pB && void 0 !== pB) switch (MB) {
          case hG:
            oB.$items.set(PB, pB);
            break;
          case aG:
            oB.$setAt(yB, pB, null !== BB.resyncVisited && jB === DB.ADD ? DB.REPLACE : jB);
            break;
          case eG:
          case TG:
          case bG:
            oB.$items.has(yB) || (oB.$items.set(yB, pB), "number" === typeof oB.$refId && yB >= oB.$refId && (oB.$refId = yB + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${oB.constructor?.name} \u2014 item at index ${yB} was not stored.`)
        }
        lB !== pB && QB?.push({
          ref: YB,
          refId: BB.currentRefId,
          op: jB,
          dynamicIndex: PB,
          value: pB,
          previousValue: lB
        })
      },
      sG = function(BB, OB, GB, YB, QB) {
        const oB = YB[NB] ?? YB;
        let jB, yB = OB[GB.offset++];
        if (yB === DB.CLEAR) return BB.removeChildRefs(oB, QB), void oB.clear();
        if (yB === DB.REVERSE) return void oB.items.reverse();
        if (yB === DB.DELETE_BY_REFID) {
          const yB = WO.number(OB, GB),
            JB = BB.root.refs.get(yB);
          if (void 0 === JB) return;
          if (BB.root.removeRef(yB), jB = oB.findIndex((BB => BB === JB)), -1 === jB) return;
          return oB[lB](jB), void QB?.push({
            ref: YB,
            refId: BB.currentRefId,
            op: DB.DELETE,
            dynamicIndex: jB,
            value: void 0,
            previousValue: JB
          })
        }
        if (yB === DB.ADD_BY_REFID) {
          const YB = WO.number(OB, GB),
            DB = BB.root.refs.get(YB);
          DB && (jB = oB.findIndex((BB => BB === DB))), -1 !== jB && void 0 !== jB || (jB = oB.length)
        } else jB = WO.number(OB, GB);
        const JB = oB[ZB];
        let MB = jB;
        const PB = oB.items[jB],
          zB = CG(BB, yB, YB, jB, PB, JB, OB, GB, QB);
        null !== BB.resyncVisited && wG(BB, YB, yB, jB, PB, zB, QB), null !== zB && void 0 !== zB && zB !== PB && oB.$setAt(jB, zB, null !== BB.resyncVisited && yB === DB.ADD ? DB.REPLACE : yB), PB !== zB && QB?.push({
          ref: YB,
          refId: BB.currentRefId,
          op: yB,
          dynamicIndex: MB,
          value: zB,
          previousValue: PB
        })
      };
    class xG extends Error {}

    function tG(BB, OB, GB, YB) {
      if (!(BB instanceof OB)) throw new xG(`a '${OB.name}' was expected, but '${BB&&BB.constructor.name}' was provided in ${GB.constructor.name}#${YB}`)
    }
    const BY = (BB, OB) => {
        const GB = BB.toString(),
          YB = OB.toString();
        return GB < YB ? -1 : GB > YB ? 1 : 0
      },
      OY = {
        get: (BB, OB) => "symbol" === typeof OB || isNaN(OB) ? Reflect.get(BB, OB) : BB.items[OB],
        set: (BB, OB, GB) => {
          if ("symbol" !== typeof OB && !isNaN(OB)) {
            if (void 0 === GB || null === GB) BB.$deleteAt(OB);
            else {
              let YB;
              if (GB[qB]) {
                tG(GB, BB[ZB], BB, OB);
                const QB = BB.items[OB];
                BB.isMovingItems ? (YB = BB.$wireIndex(Number(OB)), void 0 !== QB ? GB[qB].isNew ? BB[qB].indexedOperation(YB, DB.MOVE_AND_ADD) : (BB[qB].getChange(YB) & DB.DELETE) === DB.DELETE ? BB[qB].indexedOperation(YB, DB.DELETE_AND_MOVE) : BB[qB].indexedOperation(YB, DB.MOVE) : GB[qB].isNew && BB[qB].indexedOperation(YB, DB.ADD), GB[qB].setParent(BB, BB[qB].root, YB)) : YB = BB.$changeAt(Number(OB), GB), void 0 !== QB && QB[qB].root?.remove(QB[qB])
              } else YB = BB.$changeAt(Number(OB), GB);
              BB.items[OB] = GB, void 0 !== YB && (BB.tmpItems[YB] = GB)
            }
            return !0
          }
          return Reflect.set(BB, OB, GB)
        },
        deleteProperty: (BB, OB) => ("number" === typeof OB ? BB.$deleteAt(OB) : delete BB[OB], !0),
        has: (BB, OB) => "symbol" === typeof OB || isNaN(Number(OB)) ? Reflect.has(BB, OB) : Reflect.has(BB.items, OB)
      };
    class GY {
      [qB];
      [jB];
      [NB];
      [ZB];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[JB] = XG;
      static[MB] = sG;
      static COLLECTION_KIND = aG;
      static[PB](BB, OB, GB) {
        if (!GB) return !0;
        const YB = BB[NB] ?? BB;
        return "string" === typeof YB[ZB] || GB.isChangeTreeVisible(YB.tmpItems[OB]?.[qB])
      }
      static is(BB) {
        return Array.isArray(BB) || void 0 !== BB.array
      }
      static from(BB) {
        return new GY(...Array.from(BB))
      }
      constructor() {
        this[ZB] = void 0, this[NB] = this;
        const BB = new Proxy(this, OY);
        return Object.defineProperty(this, qB, {
          value: new uG(BB, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), BB
      }
      static initializeForDecoder() {
        const BB = Object.create(GY.prototype);
        BB.items = [], BB.isMovingItems = !1, BB._needsCompaction = !1, BB[ZB] = void 0, BB[NB] = BB;
        const OB = new Proxy(BB, OY);
        return IG(BB, OB), OB
      }
      set length(BB) {
        0 === BB ? this.clear() : BB < this.items.length ? this.splice(BB, this.length - BB) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[qB].pause()
      }
      resumeTracking() {
        this[qB].resume()
      }
      untracked(BB) {
        return this[qB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[qB].paused
      }
      push() {
        const BB = this[NB],
          OB = BB.items,
          GB = BB.tmpItems,
          YB = BB[qB],
          QB = BB[ZB];
        let oB = GB.length;
        for (let jB = 0, yB = arguments.length; jB < yB; jB++, oB++) {
          const yB = jB < 0 || arguments.length <= jB ? void 0 : arguments[jB];
          if (void 0 === yB || null === yB) return;
          "object" === typeof yB && QB && tG(yB, QB, BB, jB), YB.indexedOperation(oB, DB.ADD), OB.push(yB), GB.push(yB), yB[qB]?.setParent(this, YB.root, oB)
        }
        return oB
      }
      pop() {
        const BB = this[NB],
          OB = BB.tmpItems,
          GB = BB.deletedIndexes;
        let YB = -1;
        for (let QB = OB.length - 1; QB >= 0; QB--)
          if (!0 !== GB[QB]) {
            YB = QB;
            break
          } if (YB < 0) return;
        const DB = BB.$isUnsentAdd(YB);
        return BB[qB].delete(YB), DB ? BB.$cancelAdd(YB) : GB[YB] = !0, BB.items.pop()
      }
      at(BB) {
        return BB < 0 && (BB += this.length), this.items[BB]
      }
      $wireIndex(BB) {
        const OB = this.deletedIndexes;
        if (0 === OB.length) return BB;
        const GB = this.tmpItems;
        let YB = 0;
        for (let DB = 0; DB < GB.length; DB++)
          if (!0 !== OB[DB]) {
            if (YB === BB) return DB;
            YB++
          } return GB.length + (BB - YB)
      }
      $isUnsentAdd(BB) {
        const OB = this[qB];
        return 0 === (576 & OB.flags) && !OB.paused && "string" !== typeof this[ZB] && OB.operationAt(BB) === DB.ADD
      }
      $cancelAdd(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GB = this[qB],
          YB = this.tmpItems[BB];
        this.tmpItems.splice(BB, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(BB, 1), GB.removeAt(BB, 1);
        const DB = YB?.[qB];
        void 0 !== DB && void 0 === DB.root && DB.removeParent(this), OB && this.$reindexChildren(BB)
      }
      $reindexChildren(BB, OB) {
        if (!this[qB].hasFilteredFields) return;
        if ("string" === typeof this[ZB]) return;
        const GB = this.tmpItems,
          YB = GB.length;
        if (void 0 !== OB)
          for (; BB < YB && GB[BB] === OB[BB];) BB++;
        for (let DB = BB; DB < YB; DB++) GB[DB]?.[qB]?.setParentIndex(this, DB)
      }
      $changeAt(BB, OB) {
        if (void 0 === OB || null === OB) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[BB] === OB) return;
        const GB = void 0 !== this.items[BB] ? "object" === typeof OB ? DB.DELETE_AND_ADD : DB.REPLACE : DB.ADD,
          YB = this.$wireIndex(BB),
          QB = this[qB];
        return QB.change(YB, GB), OB[qB]?.setParent(this, QB.root, YB), YB
      }
      $deleteAt(BB, OB) {
        this[qB].delete(this.$wireIndex(BB), OB)
      }
      $setAt(BB, OB, GB) {
        GB === DB.ADD && void 0 !== this.items[BB] ? this.items.splice(BB, 0, OB) : GB === DB.DELETE_AND_MOVE ? (this.items.splice(BB, 1), this.items[BB] = OB) : (BB > this.items.length && (this._needsCompaction = !0), this.items[BB] = OB)
      }
      clear() {
        const BB = this[NB];
        if (0 === BB.items.length) return;
        const OB = BB[qB];
        OB.forEachChild(((BB, GB) => {
          OB.root?.remove(BB)
        })), OB.discard(), OB.operation(DB.CLEAR), BB.items.length = 0, BB.tmpItems.length = 0
      } [WB]() {
        const BB = this[NB] ?? this,
          OB = BB[qB];
        if (OB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const GB = BB.items;
        for (let YB = 0; YB < GB.length; YB++) GB[YB]?.[WB]?.();
        BB.items.length = 0, BB.tmpItems.length = 0, BB.deletedIndexes.length = 0, OB.recycle(), BB[jB] = void 0
      }
      concat() {
        return new GY(...this.items.concat(...arguments))
      }
      join(BB) {
        return this.items.join(BB)
      }
      reverse() {
        const BB = this[NB],
          OB = BB[qB];
        if (OB.has() || BB.deletedIndexes.length > 0) {
          const OB = BB.items.slice().reverse();
          return this.clear(), this.push(...OB), this
        }
        return OB.operation(DB.REVERSE), BB.items.reverse(), BB.tmpItems.reverse(), BB.$reindexChildren(0), this
      }
      shift() {
        const BB = this[NB],
          OB = BB.items;
        if (0 === OB.length) return;
        const GB = BB[qB],
          YB = BB.deletedIndexes;
        let QB = 0;
        for (; !0 === YB[QB];) QB++;
        const oB = BB.$isUnsentAdd(QB);
        return GB.delete(QB, DB.DELETE), oB ? BB.$cancelAdd(QB) : YB[QB] = !0, OB.shift()
      }
      slice(BB, OB) {
        const GB = new GY;
        return GB.push(...this.items.slice(BB, OB)), GB
      }
      sort() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BY;
        const OB = this[NB];
        OB.isMovingItems = !0;
        const GB = OB[qB];
        return OB.items.sort(BB).forEach(((BB, OB) => GB.change(OB, DB.REPLACE))), OB.tmpItems.sort(BB), OB.$reindexChildren(0), OB.isMovingItems = !1, this
      }
      splice(BB, OB) {
        const GB = this[NB],
          YB = GB[qB],
          QB = GB.items,
          oB = GB.tmpItems,
          jB = GB.deletedIndexes,
          yB = QB.length,
          JB = oB.length;
        for (var MB = arguments.length, PB = new Array(MB > 2 ? MB - 2 : 0), zB = 2; zB < MB; zB++) PB[zB - 2] = arguments[zB];
        const lB = PB.length,
          pB = [];
        for (let DB = 0; DB < JB; DB++) !0 !== jB[DB] && pB.push(DB);
        let ZB;
        if (yB > BB) {
          void 0 === OB && (OB = yB - BB);
          for (let QB = BB; QB < BB + OB; QB++) {
            const BB = pB[QB],
              OB = GB.$isUnsentAdd(BB);
            YB.delete(BB, DB.DELETE), OB ? (ZB ??= []).push(BB) : jB[BB] = !0
          }
        } else OB = 0;
        if (lB > 0) {
          const QB = pB[BB] ?? yB,
            JB = Math.min(lB, OB);
          for (let BB = 0; BB < JB; BB++) {
            const OB = QB + BB;
            let GB;
            const yB = void 0 !== ZB ? ZB.indexOf(OB) : -1; - 1 !== yB ? (ZB.splice(yB, 1), GB = DB.ADD) : GB = jB[OB] ? DB.DELETE_AND_ADD : DB.ADD, YB.indexedOperation(OB, GB), oB[OB] = PB[BB], jB[OB] = !1, PB[BB][qB]?.setParent(this, YB.root, OB)
          }
          const MB = lB - JB;
          if (MB > 0) {
            const BB = QB + JB;
            YB.insertAt(BB, MB);
            for (let OB = 0; OB < MB; OB++) PB[JB + OB][qB]?.setParent(this, YB.root, BB + OB);
            jB.length > 0 && jB.splice(BB, 0, ...new Array(MB).fill(!1)), oB.splice(BB, 0, ...PB.slice(JB)), GB.$reindexChildren(BB + MB)
          }
        }
        if (void 0 !== ZB && ZB.length > 0) {
          for (let BB = ZB.length - 1; BB >= 0; BB--) GB.$cancelAdd(ZB[BB], !1);
          GB.$reindexChildren(ZB[0])
        }
        return YB.root?.enqueueChangeTree(YB), QB.splice(BB, OB, ...PB)
      }
      unshift() {
        const BB = this[NB],
          OB = BB[qB];
        OB.unshift(arguments.length);
        for (let YB = 0; YB < arguments.length; YB++)(YB < 0 || arguments.length <= YB ? void 0 : arguments[YB])?.[qB]?.setParent(this, OB.root, YB);
        const GB = BB.deletedIndexes;
        return GB.length > 0 && GB.unshift(...new Array(arguments.length).fill(!1)), BB.tmpItems.unshift(...arguments), BB.$reindexChildren(arguments.length), BB.items.unshift(...arguments)
      }
      indexOf(BB, OB) {
        return this.items.indexOf(BB, OB)
      }
      lastIndexOf(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(BB, OB)
      }
      every(BB, OB) {
        return this.items.every(BB, OB)
      }
      some(BB, OB) {
        return this.items.some(BB, OB)
      }
      forEach(BB, OB) {
        return this.items.forEach(BB, OB)
      }
      map(BB, OB) {
        return this.items.map(BB, OB)
      }
      filter(BB, OB) {
        return this.items.filter(BB, OB)
      }
      reduce(BB, OB) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(BB, OB) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(BB, OB) {
        return this.items.find(BB, OB)
      }
      findIndex(BB, OB) {
        return this.items.findIndex(BB, OB)
      }
      fill(BB, OB, GB) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(BB, OB, GB) {
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
        return GY
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
      includes(BB, OB) {
        return this.items.includes(BB, OB)
      }
      flatMap(BB, OB) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(BB) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(BB, OB) {
        const GB = this.items.slice();
        return BB < 0 && (BB += this.length), GB[BB] = OB, new GY(...GB)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(BB) {
        return this.items.slice().sort(BB)
      }
      toSpliced(BB, OB) {
        for (var GB = arguments.length, YB = new Array(GB > 2 ? GB - 2 : 0), DB = 2; DB < GB; DB++) YB[DB - 2] = arguments[DB];
        const QB = this.items.slice();
        return QB.splice.apply(QB, arguments), QB
      }
      shuffle() {
        return this.move((BB => {
          let OB = this.items.length;
          for (; 0 != OB;) {
            let BB = Math.floor(Math.random() * OB);
            OB--, [this[OB], this[BB]] = [this[BB], this[OB]]
          }
        }))
      }
      move(BB) {
        return this.isMovingItems = !0, BB(this), this.isMovingItems = !1, this
      } [zB](BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = this[NB] ?? this;
        return OB || GB.deletedIndexes[BB] ? GB.items[BB] : GB.tmpItems[BB] || GB.items[BB]
      } [lB](BB) {
        const OB = this[NB] ?? this;
        OB.items[BB] = void 0, OB._needsCompaction = !0
      } [RB]() {
        const BB = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, BB), this.deletedIndexes.length = 0)
      } [AB]() {
        const BB = this[NB] ?? this;
        BB._needsCompaction && (BB._needsCompaction = !1, BB.items = BB.items.filter((BB => void 0 !== BB)))
      } [pB](BB, OB, GB) {
        const YB = this[NB] ?? this,
          DB = YB.items;
        let QB = !1;
        for (let oB = 0; oB < DB.length; oB++) {
          const jB = DB[oB];
          BB.has(oB) ? GB(jB) : (QB = !0, OB(jB, oB), YB[lB](oB))
        }
        QB && YB[AB]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((BB => "function" === typeof BB.toJSON ? BB.toJSON() : BB))
      }
      clone(BB) {
        let OB;
        return BB ? (OB = new GY, OB.push(...this.items)) : OB = new GY(...this.map((BB => BB[qB] ? BB.clone() : BB))), OB
      }
    }
    SO("array", {
      constructor: GY
    });
    class YY {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(BB) {
        const OB = this.indexByKey[BB];
        return void 0 === OB ? void 0 : OB
      }
      assign(BB) {
        const OB = this.nextIndex++;
        return this.indexByKey[BB] = OB, this.keyByIndex.set(OB, BB), OB
      }
      snapshot(BB, OB) {
        (this.snapshots ??= new Map).set(BB, OB)
      }
      forgetSnapshot(BB) {
        this.snapshots?.delete(BB)
      }
      snapshotAt(BB) {
        return this.snapshots?.get(BB)
      }
      setIndex(BB, OB) {
        this.keyByIndex.set(BB, OB), this.indexByKey[OB] = BB
      }
      keyOf(BB) {
        return this.keyByIndex.get(BB)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [BB] of this.snapshots) {
            const OB = this.keyByIndex.get(BB);
            void 0 !== OB && (delete this.indexByKey[OB], this.keyByIndex.delete(BB))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class DY {
      [qB];
      [jB];
      childType;
      [ZB];
      $items = new Map;
      journal = new YY;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= fO()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= fO()).priority = BB
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[JB] = LG;
      static[MB] = vG;
      static COLLECTION_KIND = hG;
      static[PB](BB, OB, GB) {
        if (!GB || "string" === typeof BB[ZB]) return !0;
        const YB = BB[zB](OB) ?? BB.journal.snapshotAt(OB);
        return GB.isChangeTreeVisible(YB[qB])
      }
      static is(BB) {
        return void 0 !== BB.map
      }
      constructor(BB) {
        if (Object.defineProperty(this, qB, {
            value: new uG(this),
            enumerable: !1,
            writable: !0
          }), this[ZB] = void 0, BB)
          if (BB instanceof Map || BB instanceof DY) BB.forEach(((BB, OB) => this.set(OB, BB)));
          else
            for (const OB in BB) this.set(OB, BB[OB])
      }
      static initializeForDecoder() {
        const BB = Object.create(DY.prototype);
        return BB.$items = new Map, BB.journal = new YY, BB[ZB] = void 0, IG(BB), BB
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return DY
      }
      set(BB, OB) {
        if (void 0 === OB || null === OB) throw new Error(`MapSchema#set('${BB}', ${OB}): trying to set ${OB} value on '${BB}'.`);
        "object" === typeof OB && this[ZB] && tG(OB, this[ZB], this, BB), BB = BB.toString();
        const GB = this[qB],
          YB = void 0 !== OB[qB],
          QB = this.journal;
        let oB, jB = QB.indexOf(BB);
        if (void 0 !== jB) {
          oB = DB.REPLACE;
          const GB = this.$items.get(BB);
          if (GB === OB) return;
          YB && (oB = DB.DELETE_AND_ADD, void 0 !== GB && GB[qB].root?.remove(GB[qB])), void 0 !== QB.snapshotAt(jB) && QB.forgetSnapshot(jB)
        } else jB = QB.assign(BB), oB = DB.ADD;
        return this.$items.set(BB, OB), oB === DB.ADD && GB.isStreamCollection ? void 0 !== GB.root && dO(this, GB.root, jB) : GB.change(jB, oB), YB && OB[qB].setParent(this, GB.root, jB), this
      }
      get(BB) {
        return this.$items.get(BB)
      }
      getOrInsert(BB, OB) {
        return this.$items.has(BB) ? this.$items.get(BB) : (this.set(BB, OB), OB)
      }
      getOrInsertComputed(BB, OB) {
        if (this.$items.has(BB)) return this.$items.get(BB);
        const GB = OB(BB);
        return this.set(BB, GB), GB
      }
      delete(BB) {
        if (!this.$items.has(BB)) return !1;
        const OB = this.journal.indexOf(BB),
          GB = this.$items.get(BB),
          YB = this[qB];
        if (YB.isStreamCollection) {
          const DB = YB.root;
          let QB = !1;
          return void 0 !== DB && (QB = KO(this, DB, this[jB], OB)), void 0 !== GB?.[qB] && DB?.remove(GB[qB]), this.$items.delete(BB), QB || this.journal.snapshot(OB, GB), !0
        }
        return this.journal.snapshot(OB, GB), YB.delete(OB), this.$items.delete(BB)
      }
      clear() {
        const BB = this[qB];
        BB.discard(), BB.forEachChild(((OB, GB) => {
          BB.root?.remove(OB)
        })), this.journal.reset(), this.$items.clear(), BB.operation(DB.CLEAR)
      } [WB]() {
        const BB = this[qB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[WB]?.())), this.$items.clear(), this.journal.reset(), BB.recycle(), this[jB] = void 0
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
        this[qB].pause()
      }
      resumeTracking() {
        this[qB].resume()
      }
      untracked(BB) {
        return this[qB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[qB].paused
      }
      setIndex(BB, OB) {
        this.journal.setIndex(BB, OB)
      }
      getIndex(BB) {
        return this.journal.keyOf(BB)
      } [zB](BB) {
        const OB = this.journal.keyOf(BB);
        return void 0 !== OB ? this.$items.get(OB) : void 0
      } [lB](BB) {
        const OB = this.journal.keyOf(BB);
        void 0 !== OB && (this.$items.delete(OB), this.journal.keyByIndex.delete(BB))
      } [pB](BB, OB, GB) {
        let YB = null;
        if (this.$items.forEach(((DB, QB) => {
            BB.has(QB) ? GB(DB) : ((YB ??= new Set).add(QB), OB(DB, QB))
          })), null !== YB) {
          YB.forEach((BB => {
            this.$items.delete(BB), delete this.journal.indexByKey[BB]
          }));
          const BB = [];
          this.journal.keyByIndex.forEach(((OB, GB) => {
            YB.has(OB) && BB.push(GB)
          }));
          for (let OB = 0; OB < BB.length; OB++) this.journal.keyByIndex.delete(BB[OB])
        }
      } [RB]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(BB) {
        FO(this, BB)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (BB => {
          let [OB, GB] = BB;
          return [OB, "function" === typeof GB.toJSON ? GB.toJSON() : GB]
        })))
      }
      clone(BB) {
        let OB;
        return BB ? OB = Object.assign(new DY, this) : (OB = new DY, this.forEach(((BB, GB) => {
          BB[qB] ? OB.set(GB, BB.clone()) : OB.set(GB, BB)
        }))), OB
      }
    }
    SO("map", {
      constructor: DY
    });
    class QY {
      [qB];
      [jB];
      [ZB];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= fO()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= fO()).priority = BB
      }
      static[JB] = gG;
      static[MB] = vG;
      static COLLECTION_KIND = TG;
      static[PB](BB, OB, GB) {
        return !GB || "string" === typeof BB[ZB] || GB.isChangeTreeVisible((BB[zB](OB) ?? BB.deletedItems[OB])[qB])
      }
      static is(BB) {
        return void 0 !== BB.collection
      }
      constructor(BB) {
        Object.defineProperty(this, qB, {
          value: new uG(this),
          enumerable: !1,
          writable: !0
        }), this[ZB] = void 0, BB && BB.forEach((BB => this.add(BB)))
      }
      static initializeForDecoder() {
        const BB = Object.create(QY.prototype);
        return BB.$items = new Map, BB.deletedItems = {}, BB.$refId = 0, BB[ZB] = void 0, IG(BB), BB
      }
      add(BB) {
        const OB = this.$refId++,
          GB = this[qB];
        return this.$items.set(OB, BB), GB.isStreamCollection ? void 0 !== GB.root && dO(this, GB.root, OB) : GB.change(OB), void 0 !== BB[qB] && BB[qB].setParent(this, GB.root, OB), OB
      }
      at(BB) {
        const OB = Array.from(this.$items.keys())[BB];
        return this.$items.get(OB)
      }
      entries() {
        return this.$items.entries()
      }
      delete(BB) {
        const OB = this.$items.entries();
        let GB, YB;
        for (;
          (YB = OB.next()) && !YB.done;)
          if (BB === YB.value[1]) {
            GB = YB.value[0];
            break
          } if (void 0 === GB) return !1;
        const DB = this[qB];
        if (DB.isStreamCollection) {
          const BB = DB.root,
            OB = this.$items.get(GB);
          return void 0 !== BB && KO(this, BB, this[jB], GB), void 0 !== OB?.[qB] && BB?.remove(OB[qB]), this.deletedItems[GB] = OB, this.$items.delete(GB)
        }
        return this.deletedItems[GB] = DB.delete(GB), this.$items.delete(GB)
      }
      clear() {
        const BB = this[qB];
        BB.discard(), BB.forEachChild(((OB, GB) => {
          BB.root?.remove(OB)
        })), this.$items.clear(), BB.operation(DB.CLEAR)
      } [WB]() {
        const BB = this[qB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[WB]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, BB.recycle(), this[jB] = void 0
      }
      has(BB) {
        return Array.from(this.$items.values()).some((OB => OB === BB))
      }
      forEach(BB) {
        this.$items.forEach(((OB, GB, YB) => BB(OB, GB, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[qB].pause()
      }
      resumeTracking() {
        this[qB].resume()
      }
      untracked(BB) {
        return this[qB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[qB].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(BB, OB) {}
      getIndex(BB) {
        return BB
      } [zB](BB) {
        return this.$items.get(BB)
      } [lB](BB) {
        this.$items.delete(BB)
      } [pB](BB, OB, GB) {
        let YB = null;
        if (this.$items.forEach(((DB, QB) => {
            BB.has(QB) ? GB(DB) : ((YB ??= []).push(QB), OB(DB, QB))
          })), null !== YB)
          for (let DB = 0; DB < YB.length; DB++) this[lB](YB[DB])
      } [RB]() {
        for (const BB in this.deletedItems) delete this.deletedItems[BB]
      }
      _dropView(BB) {
        FO(this, BB)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach(((OB, GB) => {
          BB.push("function" === typeof OB.toJSON ? OB.toJSON() : OB)
        })), BB
      }
      clone(BB) {
        let OB;
        return BB ? OB = Object.assign(new QY, this) : (OB = new QY, this.forEach((BB => {
          BB[qB] ? OB.add(BB.clone()) : OB.add(BB)
        }))), OB
      }
    }
    SO("collection", {
      constructor: QY
    });
    class oY {
      [qB];
      [jB];
      [ZB];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= fO()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= fO()).priority = BB
      }
      static[JB] = gG;
      static[MB] = vG;
      static COLLECTION_KIND = eG;
      static[PB](BB, OB, GB) {
        return !GB || "string" === typeof BB[ZB] || GB.isVisible((BB[zB](OB) ?? BB.deletedItems[OB])[qB])
      }
      static is(BB) {
        return void 0 !== BB.set
      }
      constructor(BB) {
        Object.defineProperty(this, qB, {
          value: new uG(this),
          enumerable: !1,
          writable: !0
        }), this[ZB] = void 0, BB && BB.forEach((BB => this.add(BB)))
      }
      static initializeForDecoder() {
        const BB = Object.create(oY.prototype);
        return BB.$items = new Map, BB.deletedItems = {}, BB.$refId = 0, BB[ZB] = void 0, IG(BB), BB
      }
      add(BB) {
        if (this.has(BB)) return !1;
        const OB = this.$refId++,
          GB = this[qB];
        return this.$items.set(OB, BB), GB.isStreamCollection ? void 0 !== GB.root && dO(this, GB.root, OB) : GB.change(OB, DB.ADD), void 0 !== BB[qB] && BB[qB].setParent(this, GB.root, OB), OB
      }
      entries() {
        return this.$items.entries()
      }
      delete(BB) {
        const OB = this.$items.entries();
        let GB, YB;
        for (;
          (YB = OB.next()) && !YB.done;)
          if (BB === YB.value[1]) {
            GB = YB.value[0];
            break
          } if (void 0 === GB) return !1;
        const DB = this[qB];
        if (DB.isStreamCollection) {
          const BB = DB.root,
            OB = this.$items.get(GB);
          return void 0 !== BB && KO(this, BB, this[jB], GB), void 0 !== OB?.[qB] && BB?.remove(OB[qB]), this.deletedItems[GB] = OB, this.$items.delete(GB)
        }
        return this.deletedItems[GB] = DB.delete(GB), this.$items.delete(GB)
      }
      clear() {
        const BB = this[qB];
        BB.discard(), this.$items.clear(), BB.operation(DB.CLEAR)
      } [WB]() {
        const BB = this[qB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[WB]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, BB.recycle(), this[jB] = void 0
      }
      has(BB) {
        const OB = this.$items.values();
        let GB, YB = !1;
        for (;
          (GB = OB.next()) && !GB.done;)
          if (BB === GB.value) {
            YB = !0;
            break
          } return YB
      }
      forEach(BB) {
        this.$items.forEach(((OB, GB, YB) => BB(OB, GB, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[qB].pause()
      }
      resumeTracking() {
        this[qB].resume()
      }
      untracked(BB) {
        return this[qB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[qB].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(BB, OB) {}
      getIndex(BB) {
        return BB
      } [zB](BB) {
        return this.$items.get(BB)
      } [lB](BB) {
        this.$items.delete(BB)
      } [pB](BB, OB, GB) {
        let YB = null;
        if (this.$items.forEach(((DB, QB) => {
            BB.has(QB) ? GB(DB) : ((YB ??= []).push(QB), OB(DB, QB))
          })), null !== YB)
          for (let DB = 0; DB < YB.length; DB++) this[lB](YB[DB])
      } [RB]() {
        for (const BB in this.deletedItems) delete this.deletedItems[BB]
      }
      _dropView(BB) {
        FO(this, BB)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach(((OB, GB) => {
          BB.push("function" === typeof OB.toJSON ? OB.toJSON() : OB)
        })), BB
      }
      clone(BB) {
        let OB;
        return BB ? OB = Object.assign(new oY, this) : (OB = new oY, this.forEach((BB => {
          BB[qB] ? OB.add(BB.clone()) : OB.add(BB)
        }))), OB
      }
    }
    SO("set", {
      constructor: oY
    });
    class jY {
      [qB];
      [jB];
      [ZB];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= fO()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= fO()).priority = BB
      }
      static $isStream = !0;
      static[JB] = gG;
      static[MB] = vG;
      static COLLECTION_KIND = bG;
      static[PB](BB, OB, GB) {
        if (!GB) return !0;
        const YB = BB[zB](OB);
        return void 0 !== YB && GB.isVisible(YB[qB])
      }
      static is(BB) {
        return BB && void 0 !== BB.stream
      }
      constructor() {
        Object.defineProperty(this, qB, {
          value: new uG(this),
          enumerable: !1,
          writable: !0
        }), this[ZB] = void 0
      }
      static initializeForDecoder() {
        const BB = Object.create(jY.prototype);
        return BB.$items = new Map, BB.$nextPosition = 0, BB._itemIndex = new Map, BB[ZB] = void 0, IG(BB), BB
      }
      add(BB) {
        if (this._itemIndex.has(BB)) return -1;
        const OB = this.$nextPosition++;
        this.$items.set(OB, BB), this._itemIndex.set(BB, OB);
        const GB = this[qB].root;
        return void 0 !== BB[qB] && BB[qB].setParent(this, GB, OB), void 0 !== GB && dO(this, GB, OB), OB
      }
      remove(BB) {
        const OB = this._itemIndex.get(BB);
        if (void 0 === OB) return !1;
        this._itemIndex.delete(BB), this.$items.delete(OB);
        const GB = this[qB].root;
        return void 0 !== GB && (KO(this, GB, this[jB], OB), void 0 !== BB[qB] && GB.remove(BB[qB])), !0
      }
      has(BB) {
        return this._itemIndex.has(BB)
      }
      clear() {
        const BB = this[qB].root;
        if (void 0 !== BB) {
          ! function(BB, OB, GB) {
            const YB = BB._stream;
            if (void 0 !== YB) {
              YB.broadcastPending.clear();
              for (const BB of YB.sentBroadcast) YB.broadcastDeletes.add(BB);
              YB.sentBroadcast.clear(), OB.forEachActiveView((BB => {
                YB.pendingByView.get(BB.id)?.clear();
                const OB = YB.sentByView.get(BB.id);
                if (void 0 !== OB && OB.size > 0) {
                  let YB = BB.changes.get(GB);
                  void 0 === YB && (YB = new Map, BB.changes.set(GB, YB));
                  for (const BB of OB) YB.set(BB, DB.DELETE);
                  OB.clear()
                }
              }))
            }
          }(this, BB, this[jB]);
          for (const OB of this.$items.values()) void 0 !== OB[qB] && BB.remove(OB[qB])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(BB) {
        for (const [OB, GB] of this.$items) BB(GB, OB, this)
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
      setIndex(BB, OB) {}
      getIndex(BB) {
        return BB
      } [zB](BB) {
        return this.$items.get(BB)
      } [lB](BB) {
        const OB = this.$items.get(BB);
        void 0 !== OB && (this._itemIndex.delete(OB), this.$items.delete(BB))
      } [pB]() {} [RB]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach((OB => {
          BB.push("function" === typeof OB?.toJSON ? OB.toJSON() : OB)
        })), BB
      }
      clone(BB) {
        if (BB) {
          return Object.assign(new jY, this)
        }
        const OB = new jY;
        return OB.maxPerTick = this.maxPerTick, this.forEach((BB => {
          OB.add("function" === typeof BB?.clone ? BB.clone() : BB)
        })), OB
      }
      _dropView(BB) {
        FO(this, BB)
      }
      _unregister() {}
    }
    SO("stream", {
      constructor: jY
    });
    class yY {
      [SB] = !0;
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
        if (BB && "object" === typeof BB && void 0 !== BB.array) throw new Error(UO);
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

    function JY(BB) {
      return null != BB && !0 === BB[SB]
    }

    function MY(BB) {
      return () => new yY(BB)
    }

    function PY(BB) {
      if (JY(BB)) {
        const OB = BB._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof OB?`use the type name instead: t.array("${OB}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return BB
    }

    function zY(BB) {
      return new yY({
        quantized: LO(BB)
      })
    }
    const lY = Object.freeze({
        string: MY("string"),
        number: MY("number"),
        boolean: MY("boolean"),
        int8: MY("int8"),
        uint8: MY("uint8"),
        int16: MY("int16"),
        uint16: MY("uint16"),
        int32: MY("int32"),
        uint32: MY("uint32"),
        int64: MY("int64"),
        uint64: MY("uint64"),
        float32: MY("float32"),
        float64: MY("float64"),
        bigint64: MY("bigint64"),
        biguint64: MY("biguint64"),
        ref: BB => new yY(BB),
        array: BB => new yY({
          array: PY(BB)
        }),
        map: BB => new yY({
          map: PY(BB)
        }),
        set: BB => new yY({
          set: PY(BB)
        }),
        collection: BB => new yY({
          collection: PY(BB)
        }),
        stream: BB => {
          const OB = new yY({
            stream: PY(BB)
          });
          return OB._stream = !0, OB
        },
        quantized: zY,
        angle: BB => zY({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: BB?.bits ?? 16
        })
      }),
      pY = -1;

    function qY(BB) {
      return EO.register(BB), BB
    }

    function ZY() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pY;
      return function(OB, GB) {
        const YB = CO.initialize(OB.constructor);
        CO.setTag(YB, GB, BB)
      }
    }

    function NY(BB, OB) {
      const GB = CO.initialize(BB.constructor);
      CO.setUnreliable(GB, OB)
    }

    function RY(BB, OB) {
      const GB = CO.initialize(BB.constructor);
      CO.setPatchOnly(GB, OB)
    }

    function WY(BB, OB) {
      const GB = CO.initialize(BB.constructor);
      CO.setFullStateOnly(GB, OB)
    }

    function AY(BB, OB) {
      return function(GB, YB) {
        const DB = GB.constructor;
        if (!BB) throw new Error(`${DB.name}: @type() reference provided for "${YB}" is undefined. Make sure you don't have any circular dependencies.`);
        BB = hO(BB, `${DB.name}.${YB}`), EO.register(DB);
        const QB = Object.getPrototypeOf(DB)[Symbol.metadata],
          oB = CO.initialize(DB);
        let jB = oB[YB];
        if (void 0 !== oB[jB]) {
          if (oB[jB].deprecated) return;
          if (void 0 !== oB[jB].type) {
            const BB = new Error(`@colyseus/schema: Duplicate '${YB}' definition on '${DB.name}'.\nCheck @type() annotation`);
            throw new Error(`${BB.message} ${BB.stack.split("\n")[4].trim()}`)
          }
        } else jB = oB[kB] ?? (QB && QB[kB]) ?? -1, jB++;
        if (OB && OB.manual) CO.addField(oB, jB, YB, BB, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: OB,
            childType: GB
          } = cO(BB);
          CO.addField(oB, jB, YB, BB, SY(YB, jB, GB, OB))
        }
        oB[nB][YB] && Object.defineProperty(GB, YB, oB[nB][YB]), ("string" === typeof BB || gO(BB)) && (oB[fB] || Object.defineProperty(oB, fB, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), oB[fB][jB] = "string" === typeof BB ? OO[BB] : wO(BB.quantized))
      }
    }
    const VY = {
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

    function SY(BB, OB, GB, YB) {
      let QB;
      return QB = YB ? function(BB, OB, GB, YB) {
        const QB = YB.constructor === GY,
          oB = YB.constructor === DY;
        return function(BB) {
          const YB = this[VB],
            jB = YB[OB];
          if (BB !== jB) {
            if (void 0 !== BB && null !== BB) {
              if (!QB || BB instanceof GY)
                if (!oB || BB instanceof DY) BB[ZB] = GB;
                else {
                  const OB = new DY;
                  if (OB[ZB] = GB, BB instanceof Map) BB.forEach(((BB, GB) => OB.set(GB, BB)));
                  else
                    for (const GB in BB) OB.set(GB, BB[GB]);
                  BB = OB
                }
              else {
                const OB = new GY;
                OB[ZB] = GB, OB.push(...BB), BB = OB
              }
              const YB = this[qB],
                JB = this.constructor;
              void 0 !== jB && null !== jB && jB[qB] ? (YB.root?.remove(jB[qB]), JB[yB](YB, OB, DB.DELETE_AND_ADD)) : JB[yB](YB, OB, DB.ADD), BB[qB]?.setParent(this, YB.root, OB)
            } else void 0 !== jB && null !== jB && this[qB].delete(OB);
            YB[OB] = BB
          }
        }
      }(0, OB, GB, YB) : "string" === typeof GB ? function(BB, OB, GB) {
        const YB = VY[GB],
          QB = "string" === GB,
          oB = "boolean" === GB;
        return function(GB) {
          const jB = this[VB],
            JB = jB[OB];
          if (GB !== JB) {
            if (void 0 !== GB && null !== GB) {
              if (!oB && void 0 !== YB && typeof GB !== YB && (!QB || null !== GB)) {
                const OB = GB && GB.constructor ? ` (${GB.constructor.name})` : "";
                throw new xG(`a '${YB}' was expected, but '${JSON.stringify(GB)}'${OB} was provided in ${this.constructor.name}#${BB}`)
              }
              this.constructor[yB](this[qB], OB, DB.ADD)
            } else void 0 !== JB && null !== JB && this[qB].delete(OB);
            jB[OB] = GB
          }
        }
      }(BB, OB, GB) : gO(GB) ? function(BB, OB, GB) {
        return function(YB) {
          const QB = this[VB],
            oB = QB[OB];
          if (void 0 !== YB && null !== YB) {
            if ("number" !== typeof YB) throw new xG(`a 'number' was expected, but '${JSON.stringify(YB)}' was provided in ${this.constructor.name}#${BB}`);
            if ((YB = XO(GB, rO(GB, YB))) === oB) return;
            this.constructor[yB](this[qB], OB, DB.ADD)
          } else {
            if (YB === oB) return;
            void 0 !== oB && null !== oB && this[qB].delete(OB)
          }
          QB[OB] = YB
        }
      }(BB, OB, GB.quantized) : function(BB, OB, GB) {
        return function(YB) {
          const QB = this[VB],
            oB = QB[OB];
          if (YB !== oB) {
            if (void 0 !== YB && null !== YB) {
              tG(YB, GB, this, BB);
              const QB = this[qB],
                jB = this.constructor;
              void 0 !== oB && null !== oB && oB[qB] ? (QB.root?.remove(oB[qB]), jB[yB](QB, OB, DB.DELETE_AND_ADD)) : jB[yB](QB, OB, DB.ADD), YB[qB]?.setParent(this, QB.root, OB)
            } else void 0 !== oB && null !== oB && this[qB].delete(OB);
            QB[OB] = YB
          }
        }
      }(BB, OB, GB), {
        get: function() {
          return this[VB][OB]
        },
        set: QB,
        enumerable: !0,
        configurable: !0
      }
    }

    function nY() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(OB, GB) {
        const YB = CO.initialize(OB.constructor);
        CO.setDeprecated(YB, GB), BB && (YB[nB] ??= {}, YB[nB][GB] = {
          get: function() {
            throw new Error(`${GB} is deprecated.`)
          },
          set: function(BB) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(OB, GB, YB[nB][GB]))
      }
    }
    let UY = !1;

    function fY(BB, OB, GB) {
      UY || (UY = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let YB in OB) AY(OB[YB], GB)(BB.prototype, YB);
      return BB
    }

    function kY(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KY;
      if (null == BB || "object" !== typeof BB) throw new Error(`schema(): first argument must be a fields object (got ${typeof BB}).`);
      const YB = {},
        DB = {},
        QB = {},
        oB = {},
        jB = (BB, OB) => {
          if (OB.hasDefault)((BB, OB) => {
            "function" === typeof OB ? oB[BB] = OB : OB && "function" === typeof OB.clone ? oB[BB] = () => OB.clone() : QB[BB] = OB
          })(BB, OB.default);
          else if (!OB.optional) {
            const GB = function(BB) {
              if (BB && "object" === typeof BB) {
                if (void 0 !== BB.array) return () => new GY;
                if (void 0 !== BB.map) return () => new DY;
                if (void 0 !== BB.set) return () => new oY;
                if (void 0 !== BB.collection) return () => new QY;
                if (void 0 !== BB.stream) return () => new jY
              } else if ("function" === typeof BB && KY.is(BB) && (!BB.prototype.initialize || 0 === BB.prototype.initialize.length)) return () => new BB
            }(OB.type);
            GB && (oB[BB] = GB)
          }
        },
        yB = {},
        JB = [],
        MB = [],
        PB = {},
        zB = [],
        lB = [],
        pB = {},
        qB = [];
      for (const VB in BB) {
        const GB = BB[VB],
          QB = `schema(${OB?`'${OB}'`:""}): field '${VB}'`;
        if (JY(GB)) {
          const BB = GB.toDefinition();
          if (BB.noSync) {
            if (void 0 !== BB.view || BB.unreliable || BB.patchOnly || BB.fullStateOnly || BB.stream) throw new Error(`${QB} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            jB(VB, BB);
            continue
          }
          if (BB.patchOnly && BB.fullStateOnly) throw new Error(`${QB} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const OB = hO(BB.type, QB);
          if ("function" === typeof OB && !KY.is(OB)) throw new Error(`${QB} is a synced ref to non-Schema class '${OB.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          YB[VB] = OB, void 0 !== BB.view && (yB[VB] = BB.view), BB.unreliable && JB.push(VB), BB.patchOnly && MB.push(VB), BB.deprecated && (PB[VB] = BB.deprecatedThrows), BB.fullStateOnly && zB.push(VB), BB.stream && lB.push(VB), void 0 !== BB.streamPriority && (pB[VB] = BB.streamPriority), BB.optional && qB.push(VB), jB(VB, BB)
        } else {
          if ("function" !== typeof GB) throw new Error(`${QB} must be a t.* builder, Schema subclass, or method (got ${typeof GB}).`);
          KY.is(GB) ? (YB[VB] = GB, GB.prototype.initialize && 0 !== GB.prototype.initialize.length || (oB[VB] = () => new GB)) : DB[VB] = GB
        }
      }
      const ZB = BB => {
          for (const OB in QB) BB[OB] = QB[OB];
          for (const OB in oB) BB[OB] = oB[OB]()
        },
        NB = () => {
          const BB = {};
          return ZB(BB), BB
        },
        RB = "function" === typeof DB.initialize,
        WB = DB.initialize ?? GB._initialize,
        AB = class extends GB {
          constructor() {
            for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
            const DB = OB[0];
            void 0 === DB ? (super(), ZB(this)) : super(Object.assign(NB(), RB ? (BB => {
              const OB = Object.keys(YB),
                GB = {};
              for (const YB in BB) OB.includes(YB) || (GB[YB] = BB[YB]);
              return GB
            })(DB) : DB)), WB && new.target === AB && WB.apply(this, OB)
          }
        };
      OB && Object.defineProperty(AB, "name", {
        value: OB
      }), CO.setFields(AB, YB), AB._getDefaultValues = NB, AB._initialize = WB, Object.assign(AB.prototype, DB);
      for (const VB in yB) ZY(yB[VB])(AB.prototype, VB);
      for (const VB of JB) NY(AB.prototype, VB);
      for (const VB of MB) RY(AB.prototype, VB);
      for (const VB in PB) nY(PB[VB])(AB.prototype, VB);
      if (zB.length > 0 || lB.length > 0) {
        const BB = AB[Symbol.metadata];
        for (const OB of zB) CO.setFullStateOnly(BB, OB);
        for (const OB of lB) CO.setStream(BB, OB);
        for (const OB in pB) CO.setStreamPriority(BB, OB, pB[OB])
      }
      if (qB.length > 0) {
        const BB = AB[Symbol.metadata];
        for (const OB of qB) BB[BB[OB]].optional = !0
      }
      return AB.extend = (BB, OB) => kY(BB, OB, AB), AB
    }

    function dY(BB) {
      const OB = BB[qB].root,
        GB = {
          ops: {},
          refs: []
        };
      let YB = OB.changes.next;
      for (; YB;) {
        const BB = YB.changeTree;
        void 0 !== BB ? (GB.refs.push(`refId#${BB.ref[jB]}`), BB.forEach(((BB, OB) => {
          if (BB < 0 || !OB) return;
          const YB = DB[OB];
          GB.ops[YB] || (GB.ops[YB] = 0), GB.ops[YB]++
        })), YB = YB.next) : YB = YB.next
      }
      return GB
    }
    class KY {
      static[JB] = iG;
      static[MB] = HG;
      [jB];
      [VB];
      static initialize(BB) {
        Object.defineProperty(BB, qB, {
          value: new uG(BB),
          enumerable: !1,
          writable: !0
        }), BB[VB] = []
      }
      static initializeForDecoder() {
        const BB = Object.create(this.prototype);
        return IG(BB), BB[VB] = [], BB
      }
      static reset(BB) {
        const OB = BB?.[qB];
        if (void 0 === OB || "function" !== typeof OB.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== OB.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${BB.constructor.name}) with multiple parents.`);
        BB[WB]()
      } [WB]() {
        const BB = this.constructor[Symbol.metadata],
          OB = BB?.[dB] ?? [],
          GB = this[VB];
        for (let YB = 0; YB < OB.length; YB++) {
          const BB = GB[OB[YB]];
          BB?.[WB]?.()
        }
        this[qB].recycle(), this[jB] = void 0
      }
      static is(BB) {
        const OB = BB[Symbol.metadata];
        return "object" === typeof OB && null !== OB
      }
      static isSchema(BB) {
        return "function" === typeof BB?.assign
      }
      static[yB](BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB.ADD;
        BB.change(OB, GB)
      }
      static[PB](BB, OB, GB) {
        const YB = BB.constructor[Symbol.metadata],
          DB = YB[OB]?.tag;
        return void 0 === GB ? void 0 === DB : void 0 === DB || (DB === pY ? GB.isChangeTreeVisible(BB[qB]) : GB.hasTagOnTree(BB[qB], DB))
      }
      constructor(BB) {
        KY.initialize(this), BB && KY.assignProps(this, BB)
      }
      assign(BB) {
        return KY.assignProps(this, BB), this
      }
      static assignProps(BB, OB) {
        const GB = BB.constructor[Symbol.metadata];
        if (GB && void 0 !== GB[kB])
          for (let DB = 0; DB <= GB[kB]; DB++) {
            const YB = GB[DB];
            if (!YB) continue;
            const QB = OB[YB.name];
            void 0 !== QB && (BB[YB.name] = QB)
          }
        const YB = Object.keys(OB);
        for (let DB = 0; DB < YB.length; DB++) {
          const QB = YB[DB];
          GB && void 0 !== GB[QB] || (BB[QB] = OB[QB])
        }
      }
      restore(BB) {
        const OB = this.constructor[Symbol.metadata];
        for (const GB in OB) {
          const YB = OB[GB],
            DB = YB.name,
            QB = YB.type,
            oB = BB[DB];
          if (void 0 !== oB && null !== oB)
            if ("string" === typeof QB) this[DB] = oB;
            else if (KY.is(QB)) {
            const BB = new QB;
            BB.restore(oB), this[DB] = BB
          } else if ("object" === typeof QB) {
            const BB = Object.keys(QB)[0],
              OB = QB[BB];
            if ("map" === BB) {
              const BB = this[DB];
              for (const GB in oB)
                if (KY.is(OB)) {
                  const YB = new OB;
                  YB.restore(oB[GB]), BB.set(GB, YB)
                } else BB.set(GB, oB[GB])
            } else if ("array" === BB) {
              const BB = this[DB];
              for (let GB = 0; GB < oB.length; GB++)
                if (KY.is(OB)) {
                  const YB = new OB;
                  YB.restore(oB[GB]), BB.push(YB)
                } else BB.push(oB[GB])
            }
          }
        }
        return this
      }
      setDirty(BB, OB) {
        const GB = this.constructor[Symbol.metadata];
        this[qB].change(GB[GB[BB]].index, OB)
      }
      pauseTracking() {
        this[qB].pause()
      }
      resumeTracking() {
        this[qB].resume()
      }
      untracked(BB) {
        return this[qB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[qB].paused
      }
      clone() {
        const BB = Object.create(this.constructor.prototype);
        KY.initialize(BB);
        const OB = this.constructor[Symbol.metadata];
        for (const GB in OB) {
          const YB = OB[GB].name;
          "object" === typeof this[YB] && "function" === typeof this[YB]?.clone ? BB[YB] = this[YB].clone() : BB[YB] = this[YB]
        }
        return BB
      }
      toJSON() {
        const BB = {},
          OB = this.constructor[Symbol.metadata];
        for (const GB in OB) {
          const YB = OB[GB],
            DB = YB.name;
          YB.deprecated || null === this[DB] || "undefined" === typeof this[DB] || (BB[DB] = "function" === typeof this[DB].toJSON ? this[DB].toJSON() : this[DB])
        }
        return BB
      }
      discardAllChanges() {
        this[qB].discardAll()
      } [zB](BB) {
        return this[this.constructor[Symbol.metadata][BB].name]
      } [lB](BB) {
        this[this.constructor[Symbol.metadata][BB].name] = void 0
      }
      static debugRefIds(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 ? arguments[3] : void 0,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const QB = OB ? ` - ${JSON.stringify(BB.toJSON())}` : "",
          oB = BB[qB],
          yB = BB[jB],
          JB = YB ? YB.root.refCount[yB] : oB.refCount,
          MB = JB > 1 ? ` [\xd7${JB}]` : "";
        let PB = `${function(BB){return new Array(BB).fill(0).map(((OB,GB)=>GB===BB-1?"\u2514\u2500 ":"   ")).join("")}(GB)}${DB}${BB.constructor.name} (refId: ${yB})${MB}${QB}\n`;
        return oB.forEachChild(((DB, QB) => {
          let oB = QB;
          "number" === typeof QB && BB.$indexes && (oB = BB.$indexes.get(QB) ?? QB);
          const jB = void 0 !== BB.forEach && void 0 !== oB ? `["${oB}"]: ` : "";
          PB += this.debugRefIds(DB.ref, OB, GB + 1, YB, jB)
        })), PB
      }
      static debugRefIdEncodingOrder(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const GB = [],
          YB = BB[qB];
        if ("changes" === OB) {
          let BB = YB.root.changes?.next;
          for (; BB;) BB.changeTree && GB.push(BB.changeTree.ref[jB]), BB = BB.next;
          return GB
        }
        const DB = "allFilteredChanges" === OB,
          QB = new Set,
          oB = BB => {
            QB.has(BB) || (QB.add(BB), BB.isFiltered === DB && GB.push(BB.ref[jB]), BB.forEachChild(((BB, OB) => oB(BB))))
          };
        return oB(YB), GB
      }
      static debugRefIdsFromDecoder(BB) {
        return this.debugRefIds(BB.state, !1, 0, BB)
      }
      static debugChanges(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = BB[qB],
          YB = OB ? "allChanges" : "changes";
        let QB = `${BB.constructor.name} (${BB[jB]}) -> .${YB}:\n`;
        return OB ? GB.forEachLive((BB => {
          QB += `- [${BB}]: ADD (${JSON.stringify(GB.getValue(Number(BB),!0))})\n`
        })) : GB.forEach(((BB, OB) => {
          BB < 0 || !OB || (QB += `- [${BB}]: ${DB[OB]} (${JSON.stringify(GB.getValue(Number(BB),!1))})\n`)
        })), QB
      }
    }
    QB(KY);
    const uY = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class mY {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const BB = {};
        for (const OB in this.changeTrees) BB[OB] = this.changeTrees[OB].refCount;
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
        this.types.hasFilters && (BB.flags & dG || (BB.flags |= dG, this.pendingFilterRefresh.push(BB)))
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
        const OB = BB.id;
        for (const GB of this.streamTrees) GB._dropView(OB)
      }
      forEachActiveView(BB) {
        for (const [OB, GB] of this.activeViews) {
          const YB = GB.deref();
          if (void 0 !== YB) BB(YB);
          else {
            this.activeViews.delete(OB);
            for (const BB of this.streamTrees) BB._dropView(OB)
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = BB, this.nextUniqueId = OB
      }
      add(BB) {
        const OB = BB.ref;
        void 0 === OB[jB] && (uY.value = this.nextUniqueId++, Object.defineProperty(OB, jB, uY));
        const GB = OB[jB],
          YB = void 0 === this.changeTrees[GB];
        YB && (this.changeTrees[GB] = BB), BB.needsRestage && (BB.needsRestage = !1, BB.forEachLiveWithCtx(BB, GG));
        const DB = YB ? 0 : BB.refCount;
        return BB.refCount = DB + 1, DB > 0 && this.enqueueFilterRefresh(BB), YB
      }
      remove(BB) {
        const OB = BB.refCount - 1;
        if (OB <= 0) {
          if (BB.root = void 0, delete this.changeTrees[BB.ref[jB]], BB.isStreamCollection) {
            const OB = BB.ref;
            OB._unregister?.(), this.unregisterStream(OB)
          }
          this.removeFromQueue(BB), this.removeFromUnreliableQueue(BB), BB.refCount = 0, BB.needsRestage = !0, BB.forEachChild(((OB, GB) => {
            OB.removeParent(BB.ref) && (void 0 === OB.parentRef || OB.refCount > 0 ? this.remove(OB) : this.moveNextToParent(OB))
          }))
        } else BB.refCount = OB, this.enqueueFilterRefresh(BB), this.recursivelyMoveNextToParent(BB);
        return OB
      }
      recursivelyMoveNextToParent(BB) {
        this.moveNextToParent(BB), BB.forEachChild(((BB, OB) => this.recursivelyMoveNextToParent(BB)))
      }
      moveNextToParent(BB) {
        BB.changesNode && this._moveNextToParentInList(this.changes, BB, BB.changesNode, "changesNode"), BB.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, BB, BB.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(BB, OB, GB, YB) {
        const DB = OB.parent;
        if (!DB || !DB[qB]) return;
        const QB = DB[qB][YB];
        QB && QB !== GB && (GB.position > QB.position || (GB.prev ? GB.prev.next = GB.next : BB.next = GB.next, GB.next ? GB.next.prev = GB.prev : BB.tail = GB.prev, GB.prev = BB.tail, GB.next = void 0, BB.tail.next = GB, BB.tail = GB, GB.position = BB.nextPosition++))
      }
      enqueueChangeTree(BB) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.changesNode) || (BB.changesNode = this._appendToList(this.changes, BB))
      }
      enqueueUnreliable(BB) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.unreliableChangesNode) || (BB.unreliableChangesNode = this._appendToList(this.unreliableChanges, BB))
      }
      _appendToList(BB, OB) {
        const GB = this._nodePool;
        let YB;
        return GB.length > 0 ? (YB = GB.pop(), YB.changeTree = OB, YB.next = void 0, YB.prev = void 0) : YB = {
          changeTree: OB,
          next: void 0,
          prev: void 0,
          position: 0
        }, BB.next ? (YB.prev = BB.tail, BB.tail.next = YB, BB.tail = YB) : (BB.nextPosition = 0, BB.next = YB, BB.tail = YB), YB.position = BB.nextPosition++, YB
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
      _removeNode(BB, OB, GB, YB) {
        return !(!GB || GB.changeTree !== OB) && (GB.prev ? GB.prev.next = GB.next : BB.next = GB.next, GB.next ? GB.next.prev = GB.prev : BB.tail = GB.prev, OB[YB] = void 0, this.releaseNode(GB), !0)
      }
    }

    function IY(BB, OB) {
      if (-1 === OB || OB >= BB.length) return !1;
      const GB = BB.length - 1;
      for (let YB = OB; YB < GB; YB++) BB[YB] = BB[YB + 1];
      return BB.length = GB, !0
    }

    function FY(BB, OB, GB) {
      const YB = ~GB,
        DB = BB.changeTrees;
      for (const QB in DB) {
        const BB = DB[QB],
          GB = BB.visibleViews;
        void 0 !== GB && OB < GB.length && (GB[OB] &= YB);
        const oB = BB.subscribedViews;
        void 0 !== oB && OB < oB.length && (oB[OB] &= YB);
        const jB = BB.tagViews;
        void 0 !== jB && jB.forEach((BB => {
          OB < BB.length && (BB[OB] &= YB)
        }))
      }
    }
    const iY = new FinalizationRegistry((BB => {
      let {
        root: OB,
        id: GB,
        slot: YB,
        bit: DB
      } = BB;
      FY(OB, YB, DB), OB.activeViews.delete(GB);
      for (const QB of OB.streamTrees) QB._dropView(GB);
      OB.releaseViewId(GB)
    }));

    function LY(BB) {
      if (void 0 === BB) return "undefined";
      if (null === BB) return "null";
      const OB = typeof BB;
      return "string" === OB ? JSON.stringify(BB.length > 30 ? `${BB.slice(0,30)}\u2026` : BB) : "object" !== OB && "function" !== OB ? `${OB} ${String(BB)}` : Array.isArray(BB) ? `Array(${BB.length})` : BB.constructor?.name ?? "Object"
    }
    class gY {
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
        void 0 === this._root && (this._root = BB, this.id = BB.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), BB.registerView(this), iY.register(this, {
          root: BB,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), FY(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), iY.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(BB) {
        const OB = BB.visibleViews,
          GB = this._slot;
        return void 0 !== OB && GB < OB.length && 0 !== (OB[GB] & this._bit)
      }
      markVisible(BB) {
        const OB = this._slot;
        let GB = BB.visibleViews;
        for (void 0 === GB && (GB = BB.visibleViews = []); GB.length <= OB;) GB.push(0);
        GB[OB] |= this._bit
      }
      unmarkVisible(BB) {
        const OB = BB.visibleViews;
        if (void 0 === OB) return;
        const GB = this._slot;
        GB < OB.length && (OB[GB] &= ~this._bit)
      }
      isSubscribed(BB) {
        const OB = BB.subscribedViews,
          GB = this._slot;
        return void 0 !== OB && GB < OB.length && 0 !== (OB[GB] & this._bit)
      }
      _setSubscribed(BB) {
        const OB = this._slot;
        let GB = BB.subscribedViews;
        for (void 0 === GB && (GB = BB.subscribedViews = []); GB.length <= OB;) GB.push(0);
        GB[OB] |= this._bit
      }
      _clearSubscribed(BB) {
        const OB = BB.subscribedViews;
        if (void 0 === OB) return;
        const GB = this._slot;
        GB < OB.length && (OB[GB] &= ~this._bit)
      }
      hasTagOnTree(BB, OB) {
        const GB = BB.tagViews;
        if (void 0 === GB) return !1;
        const YB = this._slot,
          DB = this._bit;
        for (let QB = OB; 0 !== QB; QB &= QB - 1) {
          const BB = GB.get(QB & -QB);
          if (void 0 !== BB && YB < BB.length && 0 !== (BB[YB] & DB)) return !0
        }
        return !1
      }
      addTag(BB, OB) {
        if (OB === pY) return;
        let GB = BB.tagViews;
        void 0 === GB && (GB = BB.tagViews = new Map);
        const YB = this._slot,
          DB = this._bit;
        for (let QB = OB; QB > 0; QB &= QB - 1) {
          const BB = QB & -QB;
          let OB = GB.get(BB);
          for (void 0 === OB && (OB = [], GB.set(BB, OB)); OB.length <= YB;) OB.push(0);
          OB[YB] |= DB
        }
      }
      removeTag(BB, OB) {
        if (OB === pY) return;
        const GB = BB.tagViews;
        if (void 0 === GB) return;
        const YB = this._slot,
          DB = ~this._bit;
        for (let QB = OB; QB > 0; QB &= QB - 1) {
          const BB = GB.get(QB & -QB);
          void 0 !== BB && YB < BB.length && (BB[YB] &= DB)
        }
      }
      removeAllTagsOnTree(BB) {
        const OB = BB.tagViews;
        if (void 0 === OB) return;
        const GB = this._slot,
          YB = ~this._bit;
        OB.forEach((BB => {
          GB < BB.length && (BB[GB] &= YB)
        }))
      }
      add(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pY,
          GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(BB, OB, GB, !1)
      }
      _addImmediate(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pY;
        this._add(BB, OB, !0, !0)
      }
      _add(BB, OB, GB, YB) {
        const QB = BB?.[qB];
        if (!QB) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${LY(BB)}`), !1;
        const oB = QB.parent;
        if (!oB && 0 !== BB[jB]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${QB.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== QB.root && this._bindRoot(QB.root);
        const yB = oB?.[qB];
        if (!YB && yB?.isStreamCollection) return IO(oB, this.id, QB.parentIndex), !0;
        const JB = BB.constructor[Symbol.metadata],
          MB = this.isVisible(QB);
        if (!this.iterable || !GB || MB && -1 !== this.items.indexOf(BB) || this.items.push(BB), this.markVisible(QB), GB && oB && this.addParentOf(QB, OB), !YB && QB.isStreamCollection) return !0;
        if (OB === pY && QB.isNew) return this._markSubtreeVisible(QB, OB), !1;
        let PB = this.changes.get(BB[jB]);
        void 0 === PB && (PB = new Map, this.changes.set(BB[jB], PB));
        let zB = !1;
        const lB = QB.encDescriptor.tags;
        if (QB.forEachChild(((BB, GB) => {
            const YB = lB[GB];
            if (void 0 !== YB) {
              if (!(YB === pY || OB !== pY && 0 !== (YB & OB))) return
            }
            this.add(BB.ref, OB, !1) && (zB = !0)
          })), OB !== pY) {
          this.addTag(QB, OB);
          const BB = JB?.[uB];
          if (void 0 !== BB)
            for (let GB = OB; GB > 0; GB &= GB - 1) BB[GB & -GB]?.forEach((BB => {
              QB.getChange(BB) !== DB.DELETE && PB.set(BB, DB.ADD)
            }))
        }
        if ((OB === pY || !MB) && (!QB.isNew || zB))
          if (QB.isArray && "string" !== typeof QB.refTarget[ZB]) QB.refTarget.items.length > 0 && (PB.set(-1, DB.ADD), zB = !0);
          else {
            const BB = QB.encDescriptor.tags;
            QB.forEachLive((GB => {
              const YB = BB[GB];
              (void 0 === YB || YB === pY || OB !== pY && 0 !== (YB & OB)) && (PB.set(GB, DB.ADD), zB = !0)
            }))
          } return zB
      }
      _markSubtreeVisible(BB, OB) {
        const GB = BB.encDescriptor.tags;
        BB.forEachChild(((BB, YB) => {
          const DB = GB[YB];
          if (void 0 !== DB) {
            if (!(DB === pY || OB !== pY && 0 !== (DB & OB))) return
          }
          BB.isNew ? (this.markVisible(BB), this._markSubtreeVisible(BB, OB)) : this._add(BB.ref, OB, !1, !1)
        }))
      }
      addParentOf(BB, OB) {
        const GB = BB.parent[qB],
          YB = BB.parentIndex;
        this.isVisible(GB) || this.markVisible(GB);
        const QB = GB.parent?.[qB];
        if (QB && this.addParentOf(GB, OB), GB.hasFilteredFields && GB.getChange(YB) !== DB.DELETE) {
          let QB = this.changes.get(GB.ref[jB]);
          void 0 === QB && (QB = new Map, this.changes.set(GB.ref[jB], QB));
          const oB = GB.encDescriptor.tags[YB];
          void 0 !== oB && oB !== pY && 0 !== (oB & OB) && this.addTag(GB, OB), QB.set(GB.isArray ? BB : YB, DB.ADD)
        }
      }
      _touchAncestorsOf(BB) {
        let OB = BB.parent?.[qB];
        if (void 0 === OB) return;
        const GB = [];
        for (; void 0 !== OB;) {
          if (OB.hasFilteredFields) {
            const BB = OB.ref[jB];
            if (this.changes.has(BB)) break;
            GB.push(OB)
          }
          OB = OB.parent?.[qB]
        }
        for (let YB = GB.length - 1; YB >= 0; YB--) this.changes.set(GB[YB].ref[jB], new Map)
      }
      remove(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pY,
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = BB?.[qB];
        if (!YB) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${LY(BB)}`), this;
        const QB = YB.parent?.[qB];
        if (QB?.isStreamCollection) return this.unmarkVisible(YB), this.iterable && !GB && IY(this.items, this.items.indexOf(BB)),
          function(BB, OB, GB, YB, QB) {
            const oB = BB._stream;
            if (void 0 === oB) return !1;
            const jB = oB.pendingByView.get(OB);
            if (jB?.has(YB)) return jB.delete(YB), !1;
            const yB = oB.sentByView.get(OB);
            if (yB?.has(YB)) {
              yB.delete(YB);
              let BB = QB.get(GB);
              return void 0 === BB && (BB = new Map, QB.set(GB, BB)), BB.set(YB, DB.DELETE), !0
            }
          }(YB.parent, this.id, YB.parent[jB], YB.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(YB), this;
        if (YB.isStreamCollection) {
          this.unmarkVisible(YB), this.iterable && !GB && IY(this.items, this.items.indexOf(BB));
          const OB = YB.ref,
            QB = OB._stream;
          if (void 0 !== QB) {
            QB.pendingByView.get(this.id)?.clear();
            const BB = QB.sentByView.get(this.id);
            if (void 0 !== BB && BB.size > 0) {
              const GB = OB[jB];
              let YB = this.changes.get(GB);
              void 0 === YB && (YB = new Map, this.changes.set(GB, YB));
              for (const OB of BB) YB.set(OB, DB.DELETE);
              BB.clear()
            }
          }
          return this
        }
        this.unmarkVisible(YB), this.iterable && !GB && IY(this.items, this.items.indexOf(BB));
        const oB = YB.ref,
          yB = oB.constructor[Symbol.metadata],
          JB = oB[jB];
        this._touchAncestorsOf(YB);
        let MB = this.changes.get(JB);
        if (void 0 === MB && (MB = new Map, this.changes.set(JB, MB)), OB === pY) {
          const BB = YB.parent;
          if (BB && !CO.isValidInstance(BB) && YB.isFiltered) {
            const OB = QB.isArray ? YB : YB.parentIndex,
              GB = BB[jB];
            let oB = this.changes.get(GB);
            void 0 === oB ? (oB = new Map, this.changes.set(GB, oB)) : oB.get(OB) === DB.ADD && this._dropPendingEntries(YB), oB.set(OB, DB.DELETE), this._recursiveDeleteVisibleChangeTree(YB)
          } else yB?.[KB]?.forEach((BB => this._removeViewField(YB, MB, BB)))
        } else {
          const BB = yB?.[uB];
          if (void 0 !== BB)
            for (let GB = OB; GB > 0; GB &= GB - 1) BB[GB & -GB]?.forEach((BB => this._removeViewField(YB, MB, BB)))
        }
        return void 0 === OB ? this.removeAllTagsOnTree(YB) : this.removeTag(YB, OB), this
      }
      has(BB) {
        return this.isVisible(BB[qB])
      }
      hasTag(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pY;
        return this.hasTagOnTree(BB[qB], OB)
      }
      subscribe(BB, OB) {
        const GB = BB?.[qB];
        if (!GB) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${LY(BB)}`), this;
        if (void 0 === this._root && void 0 !== GB.root && this._bindRoot(GB.root), void 0 !== OB)
          if (GB.isStreamCollection) {
            const GB = kO(BB);
            null === OB ? GB.priorityByView?.delete(this.id) : (GB.priorityByView ??= new Map).set(this.id, OB)
          } else {
            const OB = BB?.constructor?.name ?? "collection",
              YB = GB.parent;
            if (void 0 === YB) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${OB} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const BB = YB?.constructor?.[Symbol.metadata]?.[GB.parentIndex]?.name,
                DB = BB ? `${YB.constructor.name}#${BB}` : OB;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${DB} is a ${OB}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(GB)) return this;
        const YB = void 0 !== GB.parent && !this.isVisible(GB);
        if (YB ? (this.addParentOf(GB, pY), this._add(BB, pY, !1, !1)) : this.markVisible(GB), this._setSubscribed(GB), GB.isStreamCollection) {
          const OB = BB;
          GB.forEachChild(((BB, GB) => {
            IO(OB, this.id, GB)
          }))
        } else YB || GB.forEachChild((BB => {
          this.markVisible(BB)
        }));
        return this
      }
      unsubscribe(BB) {
        const OB = BB?.[qB];
        if (!OB) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${LY(BB)}`), this;
        if (!this.isSubscribed(OB)) return this;
        this._clearSubscribed(OB);
        const GB = OB.ref[jB];
        if (OB.isStreamCollection) {
          const OB = BB._stream;
          if (void 0 !== OB) {
            OB.pendingByView.get(this.id)?.clear();
            const BB = OB.sentByView.get(this.id);
            if (void 0 !== BB && BB.size > 0) {
              let OB = this.changes.get(GB);
              void 0 === OB && (OB = new Map, this.changes.set(GB, OB));
              for (const GB of BB) OB.set(GB, DB.DELETE);
              BB.clear()
            }
          }
        } else {
          const BB = OB.isArray;
          let YB = this.changes.get(GB);
          OB.forEachChild(((OB, QB) => {
            void 0 === YB && (YB = new Map, this.changes.set(GB, YB)), YB.set(BB ? OB : QB, DB.DELETE), this.unmarkVisible(OB)
          }))
        }
        return this.unmarkVisible(OB), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let BB = 0, OB = this.items.length; BB < OB; BB++) this.remove(this.items[BB], pY, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(BB) {
        let OB = this.isVisible(BB);
        if (!OB && BB.isVisibilitySharedWithParent)
          if (this.isVisible(BB.parent[qB])) this.markVisible(BB), OB = !0;
          else
            for (let GB = BB.extraParents; void 0 !== GB; GB = GB.next) {
              const YB = GB.ref[qB];
              if (YB.isFiltered && this.isVisible(YB)) {
                this.markVisible(BB), OB = !0;
                break
              }
            }
        return OB
      }
      _recursiveDeleteVisibleChangeTree(BB) {
        BB.forEachChild((BB => {
          this.unmarkVisible(BB), this._recursiveDeleteVisibleChangeTree(BB)
        }))
      }
      _dropPendingEntries(BB) {
        this.changes.delete(BB.ref[jB]), BB.forEachChild((BB => this._dropPendingEntries(BB)))
      }
      _removeViewField(BB, OB, GB) {
        const YB = OB.get(GB) === DB.ADD;
        OB.set(GB, DB.DELETE);
        const QB = BB.ref[BB.encDescriptor.names[GB]],
          oB = QB?.[qB];
        oB && (this.unmarkVisible(oB), this._recursiveDeleteVisibleChangeTree(oB), YB && this._dropPendingEntries(oB))
      }
    }

    function rY(BB) {
      BB.structSwitchEmitted || (BB.shouldEmitSwitch && (BB.buffer[BB.it.offset++] = 255, OO.number(BB.buffer, BB.ref[jB], BB.it)), BB.structSwitchEmitted = !0)
    }

    function XY(BB, OB) {
      cY(BB, OB, DB.ADD)
    }

    function wY(BB, OB) {
      if (OB._fullSyncGen === BB.gen) return;
      OB._fullSyncGen = BB.gen;
      if (!BB.hasView || BB.view.isChangeTreeVisible(OB)) {
        const GB = OB.encDescriptor;
        BB.changeTree = OB, BB.ref = OB.ref, BB.encoder = GB.encoder, BB.filter = GB.filter, BB.metadata = GB.metadata, BB.treeIsFiltered = OB.isFiltered, BB.isSchema = GB.isSchema, BB.filterBitmask = GB.filterBitmask, BB.tags = GB.tags, BB.structSwitchEmitted = !1, BB.shouldEmitSwitch = BB.hasView || BB.it.offset > BB.initialOffset || OB !== BB.rootChangeTree, OB.isArray && OB.collDirty.size > 0 && (OB.flags |= 512), DG(OB, BB, XY)
      }
      NG(OB, BB, EY)
    }

    function EY(BB, OB, GB) {
      wY(BB, OB)
    }

    function cY(BB, OB, GB) {
      if (OB < 0) {
        if (BB.treeIsFiltered !== BB.emitFiltered) return;
        return rY(BB), void(BB.buffer[BB.it.offset++] = 255 & Math.abs(OB))
      }
      if ((BB.isSchema ? BB.treeIsFiltered || (OB < 32 ? 0 !== (BB.filterBitmask & 1 << OB) : void 0 !== BB.tags[OB]) : BB.treeIsFiltered) !== BB.emitFiltered) return;
      const YB = BB.isEncodeAll ? DB.ADD : GB;
      void 0 !== YB && (void 0 === BB.filter || BB.filter(BB.ref, OB, BB.view)) && (rY(BB), BB.encoder(BB.self, BB.buffer, BB.changeTree, OB, YB, BB.it, BB.isEncodeAll, BB.hasView, BB.metadata))
    }

    function hY(BB, OB) {
      const GB = new Uint8Array(BB.length + OB.length);
      return GB.set(BB, 0), GB.set(OB, BB.length), GB
    }
    class aY {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(aY.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(BB, OB) {
        this.context = EO.cache(BB.constructor), this.root = OB ?? new mY(this.context), this.setState(BB)
      }
      setState(BB) {
        this.state = BB, this.state[qB].setRoot(this.root)
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
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.offset;
        return this._encodeChannel(BB, OB, GB, YB, !1)
      }
      encodeUnreliable() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.offset;
        return this._encodeChannel(BB, OB, GB, YB, !0)
      }
      _encodeChannel(BB, OB, GB, YB, DB) {
        this.root.pendingFilterRefresh.length > 0 && oG(this.root);
        const QB = void 0 !== OB,
          oB = this.state[qB],
          jB = this._encodeCtx;
        jB.self = this, jB.buffer = GB, jB.it = BB, jB.view = OB, jB.isEncodeAll = !1, jB.hasView = QB, jB.emitFiltered = QB;
        let yB = DB ? this.root.unreliableChanges : this.root.changes;
        for (; yB = yB.next;) {
          const GB = yB.changeTree;
          if (QB && !OB.isChangeTreeVisible(GB)) continue;
          const JB = DB ? GB.unreliableRecorder : GB;
          if (!JB || !JB.has()) continue;
          const MB = GB.encDescriptor;
          jB.changeTree = GB, jB.ref = GB.ref, jB.encoder = MB.encoder, jB.filter = MB.filter, jB.metadata = MB.metadata, jB.treeIsFiltered = GB.isFiltered, jB.isSchema = MB.isSchema, jB.filterBitmask = MB.filterBitmask, jB.tags = MB.tags, jB.structSwitchEmitted = !1, jB.isRootTree = GB === oB, jB.shouldEmitSwitch = QB || BB.offset > YB || !jB.isRootTree, JB.forEachWithCtx(jB, cY)
        }
        return DB || QB || !this._isStreamBroadcastMode || this._emitStreamBroadcast(GB, BB), BB.offset > GB.byteLength ? (GB = this._resizeBuffer(GB, BB.offset), BB.offset = YB, this._encodeChannel(BB, OB, GB, YB, DB)) : GB.subarray(0, BB.offset)
      }
      encodeFullSync(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.offset;
        this.root.pendingFilterRefresh.length > 0 && oG(this.root);
        const QB = void 0 !== YB,
          oB = this.state[qB],
          jB = this._encodeCtx;
        return jB.self = this, jB.buffer = OB, jB.it = BB, jB.view = YB, jB.isEncodeAll = !0, jB.hasView = QB, jB.emitFiltered = GB, jB.gen = ++this._fullSyncGen, jB.initialOffset = DB, jB.rootChangeTree = oB, wY(jB, oB), BB.offset > OB.byteLength ? (OB = this._resizeBuffer(OB, BB.offset), BB.offset = DB, this.encodeFullSync(BB, OB, GB, YB, DB)) : OB.subarray(0, BB.offset)
      }
      _resizeBuffer(BB, OB) {
        const GB = Math.ceil(OB / aY.BUFFER_SIZE) * aY.BUFFER_SIZE,
          YB = new Uint8Array(GB);
        return YB.set(BB), BB === this.sharedBuffer && (this.sharedBuffer = YB), YB
      }
      encodeAll() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(BB, OB, !1)
      }
      encodeAllView(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const DB = GB.offset;
        return YB = this.encodeFullSync(GB, YB, !0, BB, DB), hY(YB.subarray(0, OB), YB.subarray(DB, GB.offset))
      }
      ensureCapacity(BB, OB) {
        if (OB + aY.BUFFER_SIZE <= BB.byteLength) return BB;
        const GB = Math.ceil((OB + aY.BUFFER_SIZE) / aY.BUFFER_SIZE) * aY.BUFFER_SIZE,
          YB = new Uint8Array(GB);
        return YB.set(BB.subarray(0, OB)), BB === this.sharedBuffer && (this.sharedBuffer = YB), YB
      }
      encodeView(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          QB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const oB = GB.offset;
        this._emitStreamPriority(BB);
        for (const yB of BB.changes.keys()) {
          const OB = BB.changes.get(yB),
            QB = this.root.changeTrees[yB];
          if (void 0 === QB) {
            BB.changes.delete(yB);
            continue
          }
          if (0 === OB.size) continue;
          const oB = QB.encDescriptor,
            JB = oB.encoder,
            MB = oB.metadata,
            PB = QB.ref,
            lB = QB.refTarget;
          YB = this.ensureCapacity(YB, GB.offset), YB[GB.offset++] = 255, OO.number(YB, PB[jB], GB);
          for (const [yB, pB] of OB) {
            let OB;
            if (-1 === yB) {
              const BB = lB.tmpItems,
                OB = lB.deletedIndexes;
              for (let oB = 0; oB < BB.length; oB++) void 0 !== BB[oB] && !0 !== OB[oB] && JB(this, YB, QB, oB, DB.ADD, GB, !1, !0, MB);
              continue
            }
            if ("number" === typeof yB) OB = yB;
            else {
              const GB = yB.indexInParent(PB);
              if (void 0 === GB) continue;
              if (OB = GB, pB === DB.ADD && QB.getChange(OB) === DB.DELETE) {
                BB.changes.delete(yB.ref[jB]);
                continue
              }
            }
            JB(this, YB, QB, OB, void 0 !== lB[zB](OB) && pB || DB.DELETE, GB, !1, !0, MB)
          }
        }
        return BB.changes.clear(), YB = this.encode(GB, BB, YB), QB ? hY(YB.subarray(0, OB), YB.subarray(oB, GB.offset)) : YB.subarray(oB, GB.offset)
      }
      encodeUnreliableView(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const DB = GB.offset;
        return YB = this.encodeUnreliable(GB, BB, YB, DB), hY(YB.subarray(0, OB), YB.subarray(DB, GB.offset))
      }
      _emitStreamBroadcast(BB, OB) {
        const GB = this.root.streamTrees;
        for (const YB of GB) {
          const GB = YB,
            QB = GB[qB],
            oB = GB[jB];
          if (void 0 === oB) continue;
          const yB = GB._stream,
            JB = yB.broadcastDeletes,
            MB = yB.broadcastPending,
            PB = yB.sentBroadcast,
            lB = JB.size > 0,
            pB = MB.size > 0,
            ZB = QB.encDescriptor,
            NB = ZB.encoder,
            RB = ZB.metadata;
          if (lB || pB) {
            if (BB[OB.offset++] = 255, OO.number(BB, oB, OB), lB) {
              for (const GB of JB) NB(this, BB, QB, GB, DB.DELETE, OB, !1, !1, RB);
              JB.clear()
            }
            const YB = yB.maxPerTick,
              pB = [];
            let ZB = 0;
            const WB = [];
            for (const oB of MB) {
              if (ZB >= YB) break;
              const jB = GB[zB](oB);
              void 0 !== jB ? (NB(this, BB, QB, oB, DB.ADD, OB, !1, !1, RB), PB.add(oB), pB.push(jB), WB.push(oB), ZB++) : WB.push(oB)
            }
            for (const BB of WB) MB.delete(BB);
            for (const GB of pB) {
              const YB = GB[qB];
              if (void 0 === YB) continue;
              const QB = GB[jB];
              if (void 0 === QB) continue;
              BB[OB.offset++] = 255, OO.number(BB, QB, OB);
              const oB = YB.encDescriptor,
                yB = oB.encoder,
                JB = oB.metadata;
              YB.forEachLive((GB => {
                CO.hasUnreliableAtIndex(JB, GB) || yB(this, BB, YB, GB, DB.ADD, OB, !1, !1, JB)
              }))
            }
          }
          for (const YB of PB) {
            const DB = GB[zB](YB);
            if (void 0 === DB) continue;
            const QB = DB[qB];
            if (void 0 === QB || !QB.has()) continue;
            const oB = DB[jB];
            if (void 0 === oB) continue;
            BB[OB.offset++] = 255, OO.number(BB, oB, OB);
            const yB = QB.encDescriptor,
              JB = yB.encoder,
              MB = yB.metadata;
            QB.forEach(((GB, YB) => {
              GB < 0 || CO.hasUnreliableAtIndex(MB, GB) || JB(this, BB, QB, GB, YB, OB, !1, !1, MB)
            }))
          }
        }
      }
      _emitStreamPriority(BB) {
        const OB = this.root.streamTrees;
        if (0 === OB.size) return;
        const GB = BB.id;
        for (const YB of OB) {
          const OB = YB,
            QB = OB._stream,
            oB = QB.pendingByView.get(GB);
          if (void 0 === oB || 0 === oB.size) continue;
          const yB = QB.priorityByView?.get(GB),
            JB = void 0 !== yB,
            MB = QB.priority,
            PB = QB.maxPerTick,
            lB = [],
            pB = [];
          if (JB || void 0 !== MB) {
            const GB = [],
              YB = [];
            let DB = 0;
            for (const QB of oB) {
              const oB = OB[zB](QB);
              if (void 0 === oB) {
                pB.push(QB);
                continue
              }
              const jB = JB ? yB(oB) : MB(BB, oB);
              if (DB < PB) {
                let BB = DB++;
                for (; BB > 0 && YB[BB - 1] < jB;) YB[BB] = YB[BB - 1], GB[BB] = GB[BB - 1], BB--;
                YB[BB] = jB, GB[BB] = QB
              } else if (jB > YB[PB - 1]) {
                let BB = PB - 1;
                for (; BB > 0 && YB[BB - 1] < jB;) YB[BB] = YB[BB - 1], GB[BB] = GB[BB - 1], BB--;
                YB[BB] = jB, GB[BB] = QB
              }
            }
            for (let BB = 0; BB < DB; BB++) lB.push(GB[BB])
          } else
            for (const BB of oB) {
              if (lB.length >= PB) break;
              lB.push(BB)
            }
          for (const BB of pB) oB.delete(BB);
          const ZB = lB.length;
          let NB = QB.sentByView.get(GB);
          void 0 === NB && (NB = new Set, QB.sentByView.set(GB, NB));
          for (let GB = 0; GB < ZB; GB++) {
            const YB = lB[GB],
              QB = OB[zB](YB);
            if (void 0 === QB) {
              oB.delete(YB);
              continue
            }
            BB._addImmediate(QB);
            const yB = QB[qB];
            if (void 0 !== yB) {
              const OB = QB[jB];
              let GB = BB.changes.get(OB);
              void 0 === GB && (GB = new Map, BB.changes.set(OB, GB));
              const YB = yB.metadata;
              yB.forEachLive((BB => {
                CO.hasUnreliableAtIndex(YB, BB) || GB.set(BB, DB.ADD)
              }))
            }
            oB.delete(YB), NB.add(YB)
          }
        }
      }
      discardChanges() {
        const BB = this.root.changes;
        let OB = BB.next;
        const GB = this.root;
        for (; OB;) {
          const BB = OB.next;
          OB.changeTree.endEncode(), GB.releaseNode(OB), OB = BB
        }
        BB.next = void 0, BB.tail = void 0
      }
      discardUnreliableChanges() {
        const BB = this.root.unreliableChanges;
        let OB = BB.next;
        const GB = this.root;
        for (; OB;) {
          const BB = OB.next;
          OB.changeTree.endEncodeUnreliable(), GB.releaseNode(OB), OB = BB
        }
        BB.next = void 0, BB.tail = void 0
      }
      tryEncodeTypeId(BB, OB, GB, YB) {
        const DB = this.context.getTypeId(OB),
          QB = this.context.getTypeId(GB);
        void 0 !== QB ? DB !== QB && (BB[YB.offset++] = 213, OO.number(BB, QB, YB)) : console.warn(`@colyseus/schema WARNING: Class "${GB.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const OB = 0 === BB.activeViews.size;
        for (const GB of BB.streamTrees)
          if (OB ? mO(GB) : uO(GB, BB)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class eY extends Error {
      constructor(BB) {
        super(BB), this.name = "DecodingWarning"
      }
    }
    const TY = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class bY {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(BB, OB), void 0 === OB[jB] ? (TY.value = BB, Object.defineProperty(OB, jB, TY)) : OB[jB] !== BB && (OB[jB] = BB), GB && (this.refCount[BB] = (this.refCount[BB] || 0) + 1), this.deletedRefs.has(BB) && this.deletedRefs.delete(BB)
      }
      removeRef(BB) {
        const OB = this.refCount[BB];
        if (void 0 !== OB)
          if (0 !== OB)(this.refCount[BB] = OB - 1) <= 0 && this.deletedRefs.add(BB);
          else try {
            const OB = this.refs.get(BB);
            throw new eY(`trying to remove refId '${BB}' with 0 refCount (${OB.constructor.name}: ${JSON.stringify(OB)})`)
          } catch (QD) {
            console.warn(QD)
          } else try {
            throw new eY("trying to remove refId that doesn't exist: " + BB)
          } catch (QD) {
            console.warn(QD)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((BB => {
          if (this.refCount[BB] > 0) return;
          const OB = this.refs.get(BB),
            GB = OB.constructor[Symbol.metadata];
          if (null != GB)
            for (const YB in GB) {
              const BB = OB[GB[YB].name];
              if ("object" === typeof BB && BB) {
                const OB = BB[jB];
                void 0 === OB || this.deletedRefs.has(OB) || this.removeRef(OB)
              }
            } else "function" === typeof OB[ZB] && Array.from(OB.values()).forEach((BB => {
              const OB = BB[jB];
              void 0 === OB || this.deletedRefs.has(OB) || this.removeRef(OB)
            }));
          this.refs.delete(BB), delete this.refCount[BB], delete this.callbacks[BB]
        })), this.deletedRefs.clear()
      }
      addCallback(BB, OB, GB) {
        if (void 0 === BB) {
          const BB = "number" === typeof OB ? DB[OB] : OB;
          throw new Error(`Can't addCallback on '${BB}' (refId is undefined)`)
        }
        return this.callbacks[BB] || (this.callbacks[BB] = {}), this.callbacks[BB][OB] || (this.callbacks[BB][OB] = []), this.callbacks[BB][OB].push(GB), () => this.removeCallback(BB, OB, GB)
      }
      removeCallback(BB, OB, GB) {
        const YB = this.callbacks?.[BB]?.[OB]?.indexOf(GB);
        void 0 !== YB && -1 !== YB && IY(this.callbacks[BB][OB], YB)
      }
    }
    class CY {
      context;
      state;
      root;
      currentRefId = 0;
      Km;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(BB, OB) {
        this.setState(BB), this.context = OB || new EO(BB.constructor)
      }
      setState(BB) {
        this.state = BB, this.root = new bY, this.root.addRef(0, BB)
      }
      decode(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const DB = void 0 !== this.Km ? [] : null,
          QB = this.root,
          oB = BB.byteLength;
        let jB = GB.constructor[MB];
        for (this.currentRefId = 0; OB.offset < oB;) {
          if (BB[OB.offset] == YB) {
            OB.offset++, GB[AB]?.();
            const YB = WO.number(BB, OB),
              DB = QB.refs.get(YB);
            DB ? (GB = DB, jB = GB.constructor[MB], this.currentRefId = YB) : (console.error(`"refId" not found: ${YB}`, {
              previousRef: GB,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(BB, OB, oB));
            continue
          } - 1 !== jB(this, BB, OB, GB, DB) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(BB, OB, oB))
        }
        return GB[AB]?.(), null !== this.resyncVisited && function(BB, OB) {
          BB.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : EG(BB, BB.state, new Set, OB)
        }(this, DB), null !== DB && this.Km?.(DB), QB.garbageCollectDeletedRefs(), DB
      }
      decodeResync(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(BB, OB)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(BB, OB, GB) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const DB = {
          offset: OB.offset
        };
        for (; OB.offset < GB && (BB[OB.offset] !== YB || (DB.offset = OB.offset + 1, !this.root.refs.has(WO.number(BB, DB))));) OB.offset++
      }
      getInstanceType(BB, OB, GB) {
        let YB;
        if (213 === BB[OB.offset]) {
          OB.offset++;
          const GB = WO.number(BB, OB);
          YB = this.context.get(GB)
        }
        return YB || GB
      }
      createInstanceOfType(BB) {
        return BB.initializeForDecoder()
      }
      removeChildRefs(BB, OB) {
        const GB = "string" !== typeof BB[ZB],
          YB = BB[jB];
        BB.forEach(((QB, oB) => {
          OB?.push({
            ref: BB,
            refId: YB,
            op: DB.DELETE,
            field: oB,
            value: void 0,
            previousValue: QB
          }), GB && this.root.removeRef(QB[jB])
        }))
      }
    }
    const HY = kY({
        min: lY.float64(),
        max: lY.float64(),
        bits: lY.uint8(),
        mode: lY.uint8()
      }, "QuantizedDescriptor"),
      vY = kY({
        name: lY.string(),
        type: lY.string(),
        referencedType: lY.number(),
        childPrimitive: lY.string(),
        quantized: lY.ref(HY).optional()
      }, "ReflectionField"),
      sY = kY({
        id: lY.number(),
        extendsId: lY.number(),
        fields: lY.array(vY)
      }, "ReflectionType"),
      xY = kY({
        types: lY.array(sY),
        rootType: lY.number()
      }, "Reflection");

    function tY(BB) {
      const OB = BB.root,
        GB = OB.callbacks,
        YB = new WeakMap;
      let QB;

      function oB(BB, GB) {
        let JB = GB.instance?.constructor[Symbol.metadata] || BB,
          MB = GB.instance && "function" === typeof GB.instance.forEach || BB && !KY.is(BB);
        if (JB && !MB) {
          const BB = function(BB, DB, oB, yB) {
            return yB && void 0 !== GB.instance[DB] && !YB.has(QB) && oB(GB.instance[DB], void 0), OB.addCallback(BB[jB], DB, oB)
          };
          return new Proxy({
            listen: function(OB, DB) {
              let oB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (GB.instance) return BB(GB.instance, OB, DB, oB);
              {
                let jB = () => {};
                return GB.onInstanceAvailable(((GB, yB) => {
                  jB = BB(GB, OB, DB, oB && yB && !YB.has(QB))
                })), () => jB()
              }
            },
            onChange: function(BB) {
              return OB.addCallback(GB.instance[jB], DB.REPLACE, BB)
            },
            bindTo: function(BB, YB) {
              return YB || (YB = Object.keys(JB).map((BB => JB[BB].name))), OB.addCallback(GB.instance[jB], DB.REPLACE, (() => {
                YB.forEach((OB => BB[OB] = GB.instance[OB]))
              }))
            }
          }, {
            get(BB, OB) {
              const YB = JB[JB[OB]];
              if (YB) {
                const BB = GB.instance?.[OB],
                  DB = YB => {
                    const DB = yB(GB.instance).listen(OB, ((BB, OB) => {
                      YB(BB, !1), DB?.()
                    }), !1);
                    void 0 !== BB?.[jB] && YB(BB, !0)
                  };
                return oB(YB.type, {
                  instance: void 0 !== BB?.[jB] && BB,
                  parentInstance: GB.instance,
                  onInstanceAvailable: DB
                })
              }
              return BB[OB]
            },
            has: (BB, OB) => void 0 !== JB[OB],
            set(BB, OB, GB) {
              throw new Error("not allowed")
            },
            deleteProperty(BB, OB) {
              throw new Error("not allowed")
            }
          })
        } {
          const BB = function(BB, GB, oB) {
              return oB && BB.forEach(((BB, OB) => GB(BB, OB))), OB.addCallback(BB[jB], DB.ADD, ((BB, OB) => {
                YB.set(GB, !0), QB = GB, GB(BB, OB), YB.delete(GB), QB = void 0
              }))
            },
            oB = function(BB, GB) {
              return OB.addCallback(BB[jB], DB.DELETE, GB)
            },
            yB = function(BB, GB) {
              return OB.addCallback(BB[jB], DB.REPLACE, GB)
            };
          return new Proxy({
            OW: function(OB) {
              let DB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (GB.instance) return BB(GB.instance, OB, DB && !YB.has(QB));
              if (GB.onInstanceAvailable) {
                let oB = () => {};
                return GB.onInstanceAvailable(((GB, jB) => {
                  oB = BB(GB, OB, DB && jB && !YB.has(QB))
                })), () => oB()
              }
            },
            Qm: function(BB) {
              if (GB.instance) return oB(GB.instance, BB);
              if (GB.onInstanceAvailable) {
                let OB = () => {};
                return GB.onInstanceAvailable((GB => {
                  OB = oB(GB, BB)
                })), () => OB()
              }
            },
            onChange: function(BB) {
              if (GB.instance) return yB(GB.instance, BB);
              if (GB.onInstanceAvailable) {
                let OB = () => {};
                return GB.onInstanceAvailable((GB => {
                  OB = yB(GB, BB)
                })), () => OB()
              }
            }
          }, {
            get(BB, OB) {
              if (!BB[OB]) throw new Error(`Can't access '${OB}' through callback proxy. access the instance directly.`);
              return BB[OB]
            },
            has: (BB, OB) => void 0 !== BB[OB],
            set(BB, OB, GB) {
              throw new Error("not allowed")
            },
            deleteProperty(BB, OB) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function yB(BB) {
        return oB(void 0, {
          instance: BB
        })
      }
      return BB.Km = function(BB) {
        const OB = new Set;
        for (let YB = 0, QB = BB.length; YB < QB; YB++) {
          const QB = BB[YB],
            oB = QB.refId,
            yB = QB.ref,
            JB = GB[oB];
          if (JB) {
            if ((QB.op & DB.DELETE) === DB.DELETE && KY.isSchema(QB.previousValue)) {
              const BB = GB[QB.previousValue[jB]]?.[DB.DELETE];
              for (let OB = BB?.length - 1; OB >= 0; OB--) BB[OB]()
            }
            if (KY.isSchema(yB)) {
              if (!OB.has(oB)) {
                const BB = JB?.[DB.REPLACE];
                for (let OB = BB?.length - 1; OB >= 0; OB--) BB[OB]()
              }
              if (JB.hasOwnProperty(QB.field)) {
                const BB = JB[QB.field];
                for (let OB = BB?.length - 1; OB >= 0; OB--) BB[OB](QB.value, QB.previousValue)
              }
            } else {
              if ((QB.op & DB.DELETE) === DB.DELETE) {
                if (void 0 !== QB.previousValue) {
                  const BB = JB[DB.DELETE];
                  for (let OB = BB?.length - 1; OB >= 0; OB--) BB[OB](QB.previousValue, QB.dynamicIndex ?? QB.field)
                }
                if ((QB.op & DB.ADD) === DB.ADD) {
                  const BB = JB[DB.ADD];
                  for (let OB = BB?.length - 1; OB >= 0; OB--) BB[OB](QB.value, QB.dynamicIndex ?? QB.field)
                }
              } else if ((QB.op & DB.ADD) === DB.ADD && QB.previousValue !== QB.value) {
                const BB = JB[DB.ADD];
                for (let OB = BB?.length - 1; OB >= 0; OB--) BB[OB](QB.value, QB.dynamicIndex ?? QB.field)
              }
              if (QB.value !== QB.previousValue && (void 0 !== QB.value || void 0 !== QB.previousValue)) {
                const BB = JB[DB.REPLACE];
                for (let OB = BB?.length - 1; OB >= 0; OB--) BB[OB](QB.value, QB.dynamicIndex ?? QB.field)
              }
            }
            OB.add(oB)
          }
        }
      }, yB
    }

    function BD(BB, OB) {
      BB.Km = OB
    }
    xY.encode = function(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const GB = BB.context,
        YB = new xY,
        DB = new aY(YB),
        QB = GB.schemas.get(BB.state.constructor);
      QB > 0 && (YB.rootType = QB);
      const oB = new Set,
        jB = {},
        yB = BB => {
          if (void 0 === BB.extendsId || oB.has(BB.extendsId)) {
            oB.add(BB.id), YB.types.push(BB);
            const OB = jB[BB.id];
            void 0 !== OB && (delete jB[BB.id], OB.forEach((BB => yB(BB))))
          } else void 0 === jB[BB.extendsId] && (jB[BB.extendsId] = []), jB[BB.extendsId].push(BB)
        };
      GB.schemas.forEach(((BB, OB) => {
        const YB = new sY;
        YB.id = Number(BB);
        const DB = Object.getPrototypeOf(OB);
        DB !== KY && (YB.extendsId = GB.schemas.get(DB));
        const QB = OB[Symbol.metadata];
        if (QB !== DB[Symbol.metadata]) {
          const BB = QB[kB] ?? -1;
          for (let OB = 0; OB <= BB; OB++) {
            const BB = QB[OB];
            if (void 0 === BB) continue;
            const DB = BB.name;
            if (!Object.prototype.hasOwnProperty.call(QB, DB)) continue;
            const oB = new vY;
            let jB;
            if (oB.name = DB, "string" === typeof BB.type) jB = BB.type;
            else if (gO(BB.type)) {
              const OB = BB.type.quantized;
              jB = "quantized";
              const GB = new HY;
              GB.min = OB.min, GB.max = OB.max, GB.bits = OB.bits, GB.mode = OB.wrap ? 1 : 0, oB.quantized = GB
            } else {
              let OB;
              KY.is(BB.type) ? (jB = "ref", OB = BB.type) : (jB = Object.keys(BB.type)[0], "string" === typeof BB.type[jB] ? oB.childPrimitive = BB.type[jB] : OB = BB.type[jB]), oB.referencedType = OB ? GB.getTypeId(OB) : -1
            }
            oB.type = jB, YB.fields.push(oB)
          }
        }
        yB(YB)
      }));
      for (const JB in jB) jB[JB].forEach((BB => YB.types.push(BB)));
      return DB.encodeAll(OB).slice(0, OB.offset)
    }, xY.decode = function(BB, OB) {
      const GB = new xY;
      new CY(GB).decode(BB, OB);
      const YB = new EO;
      GB.types.forEach((BB => {
        const OB = YB.get(BB.extendsId) ?? KY,
          GB = class extends OB {};
        EO.register(GB), YB.add(GB, BB.id)
      }), {});
      GB.types.forEach((BB => {
        const OB = YB.get(BB.id),
          DB = CO.initialize(OB),
          QB = [];
        let oB = BB;
        do {
          QB.push(oB), oB = GB.types.find((BB => BB.id === oB.extendsId))
        } while (oB);
        let jB = 0;
        QB.reverse().forEach((BB => {
          ((BB, OB, GB) => {
            OB.fields.forEach(((OB, DB) => {
              const QB = GB + DB;
              if (void 0 !== OB.quantized) {
                const GB = OB.quantized;
                CO.addField(BB, QB, OB.name, {
                  quantized: LO({
                    min: GB.min,
                    max: GB.max,
                    bits: GB.bits,
                    mode: 1 === GB.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== OB.referencedType) {
                const GB = OB.type,
                  DB = YB.get(OB.referencedType) ?? OB.childPrimitive;
                "ref" === GB ? CO.addField(BB, QB, OB.name, DB) : CO.addField(BB, QB, OB.name, {
                  [GB]: DB
                })
              } else CO.addField(BB, QB, OB.name, OB.type)
            }))
          })(DB, BB, jB), jB += BB.fields.length
        }))
      }));
      const DB = new(YB.get(GB.rootType || 0));
      return new CY(DB, YB)
    }, xY.makeEncodable = function(BB) {
      const OB = BB[Symbol.metadata];
      if (!OB) return BB;
      const GB = OB[kB];
      if (void 0 === GB) return BB;
      for (let YB = 0; YB <= GB; YB++) {
        const GB = OB[YB];
        GB && CO.defineField(BB, OB, YB, GB.name, GB.type)
      }
      return Object.prototype.hasOwnProperty.call(BB, UB) && delete BB[UB], BB
    };
    class OD {
      yP;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(BB) {
        this.yP = BB, this.yP.Km = this.Km.bind(this)
      }
      get callbacks() {
        return this.yP.root.callbacks
      }
      get state() {
        return this.yP.state
      }
      addCallback(BB, OB, GB) {
        return this.yP.root.addCallback(BB, OB, GB)
      }
      addCallbackOrWaitCollectionAvailable(BB, OB, GB, YB) {
        let QB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          oB = () => {};
        const yB = () => oB(),
          JB = BB[OB];
        if (JB && void 0 !== JB[jB]) return QB = QB && !1 === this.isTriggering, GB === DB.ADD && QB && JB.forEach(((BB, OB) => {
          YB(BB, OB)
        })), this.addCallback(JB[jB], GB, YB);
        {
          let DB;
          return DB = this.addCallback(BB[jB], OB, ((BB, OB) => {
            null !== BB && void 0 !== BB && (DB(), oB = this.addCallback(BB[jB], GB, YB))
          })), oB = DB, yB
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(BB, OB, GB) {
        let YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        YB = YB && !1 === this.isTriggering;
        const DB = BB[OB];
        return YB && null !== DB && void 0 !== DB && GB(DB, void 0), this.addCallback(BB[jB], OB, GB)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const BB = arguments.length <= 0 ? void 0 : arguments[0],
            OB = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(BB[jB], DB.REPLACE, OB)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], DB.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], DB.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      OW() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], DB.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], DB.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      Qm() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], DB.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], DB.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(BB, OB, GB) {
        let YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const QB = BB.constructor[Symbol.metadata];
        GB || (GB = Object.keys(QB).filter((BB => !isNaN(Number(BB)))).map((BB => QB[BB].name)));
        const oB = () => {
          for (const YB of GB) {
            const GB = BB[YB];
            void 0 !== GB && (OB[YB] = GB)
          }
        };
        return YB && oB(), this.addCallback(BB[jB], DB.REPLACE, oB)
      }
      Km(BB) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let OB = 0, GB = BB.length; OB < GB; OB++) {
          const GB = BB[OB],
            YB = GB.refId,
            QB = GB.ref,
            oB = this.callbacks[YB];
          if (oB) {
            if ((GB.op & DB.DELETE) === DB.DELETE && KY.isSchema(GB.previousValue)) {
              const BB = GB.previousValue[jB],
                OB = this.callbacks[BB]?.[DB.DELETE];
              if (OB)
                for (let GB = OB.length - 1; GB >= 0; GB--) try {
                  OB[GB]()
                } catch (QD) {
                  console.error(QD)
                }
            }
            if (KY.isSchema(QB)) {
              if (!this.uniqueRefIds.has(YB)) {
                const BB = oB[DB.REPLACE];
                if (BB)
                  for (let OB = BB.length - 1; OB >= 0; OB--) try {
                    BB[OB]()
                  } catch (QD) {
                    console.error(QD)
                  }
              }
              const BB = oB[GB.field];
              if (BB)
                for (let OB = BB.length - 1; OB >= 0; OB--) try {
                  BB[OB](GB.value, GB.previousValue)
                } catch (QD) {
                  console.error(QD)
                }
            } else {
              const BB = GB.dynamicIndex ?? GB.field;
              if ((GB.op & DB.DELETE) === DB.DELETE) {
                if (void 0 !== GB.previousValue) {
                  const OB = oB[DB.DELETE];
                  if (OB)
                    for (let YB = OB.length - 1; YB >= 0; YB--) try {
                      OB[YB](GB.previousValue, BB)
                    } catch (QD) {
                      console.error(QD)
                    }
                }
                if ((GB.op & DB.ADD) === DB.ADD) {
                  const OB = oB[DB.ADD];
                  if (OB)
                    for (let YB = OB.length - 1; YB >= 0; YB--) try {
                      OB[YB](GB.value, BB)
                    } catch (QD) {
                      console.error(QD)
                    }
                }
              } else if ((GB.op & DB.ADD) === DB.ADD && GB.previousValue !== GB.value) {
                const OB = oB[DB.ADD];
                if (OB)
                  for (let YB = OB.length - 1; YB >= 0; YB--) try {
                    OB[YB](GB.value, BB)
                  } catch (QD) {
                    console.error(QD)
                  }
              }
              if (GB.value !== GB.previousValue) {
                const OB = oB[DB.REPLACE];
                if (OB)
                  for (let YB = OB.length - 1; YB >= 0; YB--) try {
                    OB[YB](BB, GB.value)
                  } catch (QD) {
                    console.error(QD)
                  }
              }
            }
            this.uniqueRefIds.add(YB)
          }
        }
        this.isTriggering = !1
      }
    }
    const GD = {
      get(BB) {
        if (BB instanceof CY) return new OD(BB);
        if ("yP" in BB.FN) return new OD(BB.FN.yP);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(BB) {
        if (BB instanceof CY) return tY(BB);
        if ("yP" in BB.FN) return tY(BB.FN.yP);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (BB, OB) => BD(BB, OB)
    };
    class YD {
      _free = [];
      _factory;
      _maxSize;
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = BB, this._maxSize = OB.maxSize ?? 1 / 0;
        const GB = OB.preallocate ?? 0;
        for (let YB = 0; YB < GB; YB++) this._free.push(BB())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(BB) {
        KY.reset(BB), this._free.length < this._maxSize && this._free.push(BB)
      }
      get size() {
        return this._free.length
      }
    }

    function DD(BB) {
      return new YD((() => new BB), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    SO("map", {
      constructor: DY
    }), SO("array", {
      constructor: GY
    }), SO("set", {
      constructor: oY
    }), SO("collection", {
      constructor: QY
    })
  },
  9800: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      __addDisposableResource: () => gB,
      __assign: () => QB,
      __asyncDelegator: () => fB,
      __asyncGenerator: () => UB,
      __asyncValues: () => kB,
      __await: () => nB,
      __awaiter: () => pB,
      __classPrivateFieldGet: () => FB,
      __classPrivateFieldIn: () => LB,
      __classPrivateFieldSet: () => iB,
      __createBinding: () => ZB,
      __decorate: () => jB,
      __disposeResources: () => XB,
      __esDecorate: () => JB,
      __exportStar: () => NB,
      __extends: () => DB,
      __generator: () => qB,
      __importDefault: () => IB,
      __importStar: () => mB,
      __makeTemplateObject: () => dB,
      __metadata: () => lB,
      __param: () => yB,
      __propKey: () => PB,
      __read: () => WB,
      __rest: () => oB,
      __rewriteRelativeImportExtension: () => wB,
      __runInitializers: () => MB,
      __setFunctionName: () => zB,
      __spread: () => AB,
      __spreadArray: () => SB,
      __spreadArrays: () => VB,
      __values: () => RB,
      default: () => EB
    });
    var YB = function(BB, OB) {
      return YB = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(BB, OB) {
        BB.__proto__ = OB
      } || function(BB, OB) {
        for (var GB in OB) Object.prototype.hasOwnProperty.call(OB, GB) && (BB[GB] = OB[GB])
      }, YB(BB, OB)
    };

    function DB(BB, OB) {
      if ("function" !== typeof OB && null !== OB) throw new TypeError("Class extends value " + String(OB) + " is not a constructor or null");

      function GB() {
        this.constructor = BB
      }
      YB(BB, OB), BB.prototype = null === OB ? Object.create(OB) : (GB.prototype = OB.prototype, new GB)
    }
    var QB = function() {
      return QB = Object.assign || function(BB) {
        for (var OB, GB = 1, YB = arguments.length; GB < YB; GB++)
          for (var DB in OB = arguments[GB]) Object.prototype.hasOwnProperty.call(OB, DB) && (BB[DB] = OB[DB]);
        return BB
      }, QB.apply(this, arguments)
    };

    function oB(BB, OB) {
      var GB = {};
      for (var YB in BB) Object.prototype.hasOwnProperty.call(BB, YB) && OB.indexOf(YB) < 0 && (GB[YB] = BB[YB]);
      if (null != BB && "function" === typeof Object.getOwnPropertySymbols) {
        var DB = 0;
        for (YB = Object.getOwnPropertySymbols(BB); DB < YB.length; DB++) OB.indexOf(YB[DB]) < 0 && Object.prototype.propertyIsEnumerable.call(BB, YB[DB]) && (GB[YB[DB]] = BB[YB[DB]])
      }
      return GB
    }

    function jB(BB, OB, GB, YB) {
      var DB, QB = arguments.length,
        oB = QB < 3 ? OB : null === YB ? YB = Object.getOwnPropertyDescriptor(OB, GB) : YB;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) oB = Reflect.decorate(BB, OB, GB, YB);
      else
        for (var jB = BB.length - 1; jB >= 0; jB--)(DB = BB[jB]) && (oB = (QB < 3 ? DB(oB) : QB > 3 ? DB(OB, GB, oB) : DB(OB, GB)) || oB);
      return QB > 3 && oB && Object.defineProperty(OB, GB, oB), oB
    }

    function yB(BB, OB) {
      return function(GB, YB) {
        OB(GB, YB, BB)
      }
    }

    function JB(BB, OB, GB, YB, DB, QB) {
      function oB(BB) {
        if (void 0 !== BB && "function" !== typeof BB) throw new TypeError("Function expected");
        return BB
      }
      for (var jB, yB = YB.kind, JB = "getter" === yB ? "get" : "setter" === yB ? "set" : "value", MB = !OB && BB ? YB.static ? BB : BB.prototype : null, PB = OB || (MB ? Object.getOwnPropertyDescriptor(MB, YB.name) : {}), zB = !1, lB = GB.length - 1; lB >= 0; lB--) {
        var pB = {};
        for (var qB in YB) pB[qB] = "access" === qB ? {} : YB[qB];
        for (var qB in YB.access) pB.access[qB] = YB.access[qB];
        pB.addInitializer = function(BB) {
          if (zB) throw new TypeError("Cannot add initializers after decoration has completed");
          QB.push(oB(BB || null))
        };
        var ZB = (0, GB[lB])("accessor" === yB ? {
          get: PB.get,
          set: PB.set
        } : PB[JB], pB);
        if ("accessor" === yB) {
          if (void 0 === ZB) continue;
          if (null === ZB || "object" !== typeof ZB) throw new TypeError("Object expected");
          (jB = oB(ZB.get)) && (PB.get = jB), (jB = oB(ZB.set)) && (PB.set = jB), (jB = oB(ZB.init)) && DB.unshift(jB)
        } else(jB = oB(ZB)) && ("field" === yB ? DB.unshift(jB) : PB[JB] = jB)
      }
      MB && Object.defineProperty(MB, YB.name, PB), zB = !0
    }

    function MB(BB, OB, GB) {
      for (var YB = arguments.length > 2, DB = 0; DB < OB.length; DB++) GB = YB ? OB[DB].call(BB, GB) : OB[DB].call(BB);
      return YB ? GB : void 0
    }

    function PB(BB) {
      return "symbol" === typeof BB ? BB : "".concat(BB)
    }

    function zB(BB, OB, GB) {
      return "symbol" === typeof OB && (OB = OB.description ? "[".concat(OB.description, "]") : ""), Object.defineProperty(BB, "name", {
        configurable: !0,
        value: GB ? "".concat(GB, " ", OB) : OB
      })
    }

    function lB(BB, OB) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(BB, OB)
    }

    function pB(BB, OB, GB, YB) {
      return new(GB || (GB = Promise))((function(DB, QB) {
        function oB(BB) {
          try {
            yB(YB.next(BB))
          } catch (OB) {
            QB(OB)
          }
        }

        function jB(BB) {
          try {
            yB(YB.throw(BB))
          } catch (OB) {
            QB(OB)
          }
        }

        function yB(BB) {
          var OB;
          BB.done ? DB(BB.value) : (OB = BB.value, OB instanceof GB ? OB : new GB((function(BB) {
            BB(OB)
          }))).then(oB, jB)
        }
        yB((YB = YB.apply(BB, OB || [])).next())
      }))
    }

    function qB(BB, OB) {
      var GB, YB, DB, QB = {
          label: 0,
          sent: function() {
            if (1 & DB[0]) throw DB[1];
            return DB[1]
          },
          trys: [],
          ops: []
        },
        oB = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return oB.next = jB(0), oB.throw = jB(1), oB.return = jB(2), "function" === typeof Symbol && (oB[Symbol.iterator] = function() {
        return this
      }), oB;

      function jB(jB) {
        return function(yB) {
          return function(jB) {
            if (GB) throw new TypeError("Generator is already executing.");
            for (; oB && (oB = 0, jB[0] && (QB = 0)), QB;) try {
              if (GB = 1, YB && (DB = 2 & jB[0] ? YB.return : jB[0] ? YB.throw || ((DB = YB.return) && DB.call(YB), 0) : YB.next) && !(DB = DB.call(YB, jB[1])).done) return DB;
              switch (YB = 0, DB && (jB = [2 & jB[0], DB.value]), jB[0]) {
                case 0:
                case 1:
                  DB = jB;
                  break;
                case 4:
                  return QB.label++, {
                    value: jB[1],
                    done: !1
                  };
                case 5:
                  QB.label++, YB = jB[1], jB = [0];
                  continue;
                case 7:
                  jB = QB.ops.pop(), QB.trys.pop();
                  continue;
                default:
                  if (!(DB = (DB = QB.trys).length > 0 && DB[DB.length - 1]) && (6 === jB[0] || 2 === jB[0])) {
                    QB = 0;
                    continue
                  }
                  if (3 === jB[0] && (!DB || jB[1] > DB[0] && jB[1] < DB[3])) {
                    QB.label = jB[1];
                    break
                  }
                  if (6 === jB[0] && QB.label < DB[1]) {
                    QB.label = DB[1], DB = jB;
                    break
                  }
                  if (DB && QB.label < DB[2]) {
                    QB.label = DB[2], QB.ops.push(jB);
                    break
                  }
                  DB[2] && QB.ops.pop(), QB.trys.pop();
                  continue
              }
              jB = OB.call(BB, QB)
            } catch (yB) {
              jB = [6, yB], YB = 0
            } finally {
              GB = DB = 0
            }
            if (5 & jB[0]) throw jB[1];
            return {
              value: jB[0] ? jB[1] : void 0,
              done: !0
            }
          }([jB, yB])
        }
      }
    }
    var ZB = Object.create ? function(BB, OB, GB, YB) {
      void 0 === YB && (YB = GB);
      var DB = Object.getOwnPropertyDescriptor(OB, GB);
      DB && !("get" in DB ? !OB.__esModule : DB.writable || DB.configurable) || (DB = {
        enumerable: !0,
        get: function() {
          return OB[GB]
        }
      }), Object.defineProperty(BB, YB, DB)
    } : function(BB, OB, GB, YB) {
      void 0 === YB && (YB = GB), BB[YB] = OB[GB]
    };

    function NB(BB, OB) {
      for (var GB in BB) "default" === GB || Object.prototype.hasOwnProperty.call(OB, GB) || ZB(OB, BB, GB)
    }

    function RB(BB) {
      var OB = "function" === typeof Symbol && Symbol.iterator,
        GB = OB && BB[OB],
        YB = 0;
      if (GB) return GB.call(BB);
      if (BB && "number" === typeof BB.length) return {
        next: function() {
          return BB && YB >= BB.length && (BB = void 0), {
            value: BB && BB[YB++],
            done: !BB
          }
        }
      };
      throw new TypeError(OB ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function WB(BB, OB) {
      var GB = "function" === typeof Symbol && BB[Symbol.iterator];
      if (!GB) return BB;
      var YB, DB, QB = GB.call(BB),
        oB = [];
      try {
        for (;
          (void 0 === OB || OB-- > 0) && !(YB = QB.next()).done;) oB.push(YB.value)
      } catch (jB) {
        DB = {
          error: jB
        }
      } finally {
        try {
          YB && !YB.done && (GB = QB.return) && GB.call(QB)
        } finally {
          if (DB) throw DB.error
        }
      }
      return oB
    }

    function AB() {
      for (var BB = [], OB = 0; OB < arguments.length; OB++) BB = BB.concat(WB(arguments[OB]));
      return BB
    }

    function VB() {
      for (var BB = 0, OB = 0, GB = arguments.length; OB < GB; OB++) BB += arguments[OB].length;
      var YB = Array(BB),
        DB = 0;
      for (OB = 0; OB < GB; OB++)
        for (var QB = arguments[OB], oB = 0, jB = QB.length; oB < jB; oB++, DB++) YB[DB] = QB[oB];
      return YB
    }

    function SB(BB, OB, GB) {
      if (GB || 2 === arguments.length)
        for (var YB, DB = 0, QB = OB.length; DB < QB; DB++) !YB && DB in OB || (YB || (YB = Array.prototype.slice.call(OB, 0, DB)), YB[DB] = OB[DB]);
      return BB.concat(YB || Array.prototype.slice.call(OB))
    }

    function nB(BB) {
      return this instanceof nB ? (this.v = BB, this) : new nB(BB)
    }

    function UB(BB, OB, GB) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var YB, DB = GB.apply(BB, OB || []),
        QB = [];
      return YB = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), oB("next"), oB("throw"), oB("return", (function(BB) {
        return function(OB) {
          return Promise.resolve(OB).then(BB, JB)
        }
      })), YB[Symbol.asyncIterator] = function() {
        return this
      }, YB;

      function oB(BB, OB) {
        DB[BB] && (YB[BB] = function(OB) {
          return new Promise((function(GB, YB) {
            QB.push([BB, OB, GB, YB]) > 1 || jB(BB, OB)
          }))
        }, OB && (YB[BB] = OB(YB[BB])))
      }

      function jB(BB, OB) {
        try {
          (GB = DB[BB](OB)).value instanceof nB ? Promise.resolve(GB.value.v).then(yB, JB) : MB(QB[0][2], GB)
        } catch (YB) {
          MB(QB[0][3], YB)
        }
        var GB
      }

      function yB(BB) {
        jB("next", BB)
      }

      function JB(BB) {
        jB("throw", BB)
      }

      function MB(BB, OB) {
        BB(OB), QB.shift(), QB.length && jB(QB[0][0], QB[0][1])
      }
    }

    function fB(BB) {
      var OB, GB;
      return OB = {}, YB("next"), YB("throw", (function(BB) {
        throw BB
      })), YB("return"), OB[Symbol.iterator] = function() {
        return this
      }, OB;

      function YB(YB, DB) {
        OB[YB] = BB[YB] ? function(OB) {
          return (GB = !GB) ? {
            value: nB(BB[YB](OB)),
            done: !1
          } : DB ? DB(OB) : OB
        } : DB
      }
    }

    function kB(BB) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var OB, GB = BB[Symbol.asyncIterator];
      return GB ? GB.call(BB) : (BB = RB(BB), OB = {}, YB("next"), YB("throw"), YB("return"), OB[Symbol.asyncIterator] = function() {
        return this
      }, OB);

      function YB(GB) {
        OB[GB] = BB[GB] && function(OB) {
          return new Promise((function(YB, DB) {
            (function(BB, OB, GB, YB) {
              Promise.resolve(YB).then((function(OB) {
                BB({
                  value: OB,
                  done: GB
                })
              }), OB)
            })(YB, DB, (OB = BB[GB](OB)).done, OB.value)
          }))
        }
      }
    }

    function dB(BB, OB) {
      return Object.defineProperty ? Object.defineProperty(BB, "raw", {
        value: OB
      }) : BB.raw = OB, BB
    }
    var KB = Object.create ? function(BB, OB) {
        Object.defineProperty(BB, "default", {
          enumerable: !0,
          value: OB
        })
      } : function(BB, OB) {
        BB.default = OB
      },
      uB = function(BB) {
        return uB = Object.getOwnPropertyNames || function(BB) {
          var OB = [];
          for (var GB in BB) Object.prototype.hasOwnProperty.call(BB, GB) && (OB[OB.length] = GB);
          return OB
        }, uB(BB)
      };

    function mB(BB) {
      if (BB && BB.__esModule) return BB;
      var OB = {};
      if (null != BB)
        for (var GB = uB(BB), YB = 0; YB < GB.length; YB++) "default" !== GB[YB] && ZB(OB, BB, GB[YB]);
      return KB(OB, BB), OB
    }

    function IB(BB) {
      return BB && BB.__esModule ? BB : {
        default: BB
      }
    }

    function FB(BB, OB, GB, YB) {
      if ("a" === GB && !YB) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof OB ? BB !== OB || !YB : !OB.has(BB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === GB ? YB : "a" === GB ? YB.call(BB) : YB ? YB.value : OB.get(BB)
    }

    function iB(BB, OB, GB, YB, DB) {
      if ("m" === YB) throw new TypeError("Private method is not writable");
      if ("a" === YB && !DB) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof OB ? BB !== OB || !DB : !OB.has(BB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === YB ? DB.call(BB, GB) : DB ? DB.value = GB : OB.set(BB, GB), GB
    }

    function LB(BB, OB) {
      if (null === OB || "object" !== typeof OB && "function" !== typeof OB) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof BB ? OB === BB : BB.has(OB)
    }

    function gB(BB, OB, GB) {
      if (null !== OB && void 0 !== OB) {
        if ("object" !== typeof OB && "function" !== typeof OB) throw new TypeError("Object expected.");
        var YB, DB;
        if (GB) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          YB = OB[Symbol.asyncDispose]
        }
        if (void 0 === YB) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          YB = OB[Symbol.dispose], GB && (DB = YB)
        }
        if ("function" !== typeof YB) throw new TypeError("Object not disposable.");
        DB && (YB = function() {
          try {
            DB.call(this)
          } catch (BB) {
            return Promise.reject(BB)
          }
        }), BB.stack.push({
          value: OB,
          dispose: YB,
          async: GB
        })
      } else GB && BB.stack.push({
        async: !0
      });
      return OB
    }
    var rB = "function" === typeof SuppressedError ? SuppressedError : function(BB, OB, GB) {
      var YB = new Error(GB);
      return YB.name = "SuppressedError", YB.error = BB, YB.suppressed = OB, YB
    };

    function XB(BB) {
      function OB(OB) {
        BB.error = BB.hasError ? new rB(OB, BB.error, "An error was suppressed during disposal.") : OB, BB.hasError = !0
      }
      var GB, YB = 0;
      return function DB() {
        for (; GB = BB.stack.pop();) try {
          if (!GB.async && 1 === YB) return YB = 0, BB.stack.push(GB), Promise.resolve().then(DB);
          if (GB.dispose) {
            var QB = GB.dispose.call(GB.value);
            if (GB.async) return YB |= 2, Promise.resolve(QB).then(DB, (function(BB) {
              return OB(BB), DB()
            }))
          } else YB |= 1
        } catch (oB) {
          OB(oB)
        }
        if (1 === YB) return BB.hasError ? Promise.reject(BB.error) : Promise.resolve();
        if (BB.hasError) throw BB.error
      }()
    }

    function wB(BB, OB) {
      return "string" === typeof BB && /^\.\.?\//.test(BB) ? BB.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(BB, GB, YB, DB, QB) {
        return GB ? OB ? ".jsx" : ".js" : !YB || DB && QB ? YB + DB + "." + QB.toLowerCase() + "js" : BB
      })) : BB
    }
    const EB = {
      __extends: DB,
      __assign: QB,
      __rest: oB,
      __decorate: jB,
      __param: yB,
      __esDecorate: JB,
      __runInitializers: MB,
      __propKey: PB,
      __setFunctionName: zB,
      __metadata: lB,
      __awaiter: pB,
      __generator: qB,
      __createBinding: ZB,
      __exportStar: NB,
      __values: RB,
      __read: WB,
      __spread: AB,
      __spreadArrays: VB,
      __spreadArray: SB,
      __await: nB,
      __asyncGenerator: UB,
      __asyncDelegator: fB,
      __asyncValues: kB,
      __makeTemplateObject: dB,
      __importStar: mB,
      __importDefault: IB,
      __classPrivateFieldGet: FB,
      __classPrivateFieldSet: iB,
      __classPrivateFieldIn: LB,
      __addDisposableResource: gB,
      __disposeResources: XB,
      __rewriteRelativeImportExtension: wB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);