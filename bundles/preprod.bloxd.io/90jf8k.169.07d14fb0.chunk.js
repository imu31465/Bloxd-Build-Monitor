export const id = 169;
export const ids = [169];
export const modules = {
  8111: (FF, WF) => {
    WF.discordURLBuilder = function(FF) {
      var WF;
      const SF = (null === (WF = null === window || void 0 === window ? void 0 : window.location) || void 0 === WF ? void 0 : WF.hostname) || "localhost",
        CF = FF.hostname.split("."),
        AF = !FF.hostname.includes("trycloudflare.com") && !FF.hostname.includes("discordsays.com") && CF.length > 2 ? `/${CF[0]}` : "";
      return FF.pathname.startsWith("/.proxy") ? `${FF.protocol}//${SF}${AF}${FF.pathname}${FF.search}` : `${FF.protocol}//${SF}/.proxy/colyseus${AF}${FF.pathname}${FF.search}`
    }
  },
  8102: (FF, WF, SF) => {
    var CF, AF, uF, hF, bW = SF(8003),
      dF = SF(8109),
      PF = SF(8071);
    CF = new WeakMap, AF = new WeakMap, uF = new WeakMap, hF = new WeakMap, WF.Auth = class {
      constructor(FF) {
        this.http = FF, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, CF.set(this, !1), AF.set(this, void 0), uF.set(this, void 0), hF.set(this, PF.createNanoEvents()), dF.getItem(this.settings.key, (FF => this.token = FF))
      }
      set token(FF) {
        this.http.authToken = FF
      }
      get token() {
        return this.http.authToken
      }
      onChange(FF) {
        const WF = bW.__classPrivateFieldGet(this, hF, "f").on("change", FF);
        return bW.__classPrivateFieldGet(this, CF, "f") || bW.__classPrivateFieldSet(this, AF, new Promise(((FF, WF) => {
          this.getUserData().then((FF => {
            this.emitChange(Object.assign(Object.assign({}, FF), {
              token: this.token
            }))
          })).catch((FF => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            FF()
          }))
        })), "f"), bW.__classPrivateFieldSet(this, CF, !0, "f"), WF
      }
      getUserData() {
        return bW.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(FF, WF, SF) {
        return bW.__awaiter(this, void 0, void 0, (function*() {
          const CF = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: FF,
              password: WF,
              options: SF
            }
          })).data;
          return this.emitChange(CF), CF
        }))
      }
      signInWithEmailAndPassword(FF, WF) {
        return bW.__awaiter(this, void 0, void 0, (function*() {
          const SF = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: FF,
              password: WF
            }
          })).data;
          return this.emitChange(SF), SF
        }))
      }
      signInAnonymously(FF) {
        return bW.__awaiter(this, void 0, void 0, (function*() {
          const WF = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: FF
            }
          })).data;
          return this.emitChange(WF), WF
        }))
      }
      sendPasswordResetEmail(FF) {
        return bW.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: FF
            }
          })).data
        }))
      }
      signInWithProvider(FF) {
        return bW.__awaiter(this, arguments, void 0, (function*(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((SF, CF) => {
            const AF = WF.width || 480,
              hF = WF.height || 768,
              dF = this.token ? `?token=${this.token}` : "",
              PF = `Login with ${FF[0].toUpperCase()+FF.substring(1)}`,
              RF = this.http.client.getHttpEndpoint(`${WF.prefix||`${this.settings.path}/provider`}/${FF}${dF}`),
              iW = screen.width / 2 - AF / 2,
              eF = screen.height / 2 - hF / 2;
            bW.__classPrivateFieldSet(this, uF, window.open(RF, PF, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + AF + ", height=" + hF + ", top=" + eF + ", left=" + iW), "f");
            const EF = FF => {
                void 0 === FF.data.user && void 0 === FF.data.token || (clearInterval(QF), bW.__classPrivateFieldGet(this, uF, "f").close(), bW.__classPrivateFieldSet(this, uF, void 0, "f"), window.removeEventListener("message", EF), void 0 !== FF.data.error ? CF(FF.data.error) : (SF(FF.data), this.emitChange(FF.data)))
              },
              QF = setInterval((() => {
                bW.__classPrivateFieldGet(this, uF, "f") && !bW.__classPrivateFieldGet(this, uF, "f").closed || (bW.__classPrivateFieldSet(this, uF, void 0, "f"), CF("Qh"), window.removeEventListener("message", EF))
              }), 200);
            window.addEventListener("message", EF)
          }))
        }))
      }
      signOut() {
        return bW.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(FF) {
        void 0 !== FF.token && (this.token = FF.token, null === FF.token ? dF.removeItem(this.settings.key) : dF.setItem(this.settings.key, FF.token)), bW.__classPrivateFieldGet(this, hF, "f").emit("change", FF)
      }
    }
  },
  7997: (FF, WF, SF) => {
    var CF, AF = SF(8003),
      uF = SF(8012),
      hF = SF(8020),
      bW = SF(8094),
      dF = SF(8102),
      PF = SF(8111);
    class RF extends Error {
      constructor(FF, WF) {
        super(FF), this.code = WF, this.name = "MatchMakeError", Object.setPrototypeOf(this, RF.prototype)
      }
    }
    const iW = "undefined" !== typeof window && "undefined" !== typeof(null === (CF = null === window || void 0 === window ? void 0 : window.location) || void 0 === CF ? void 0 : CF.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class eF {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iW,
          WF = arguments.length > 1 ? arguments[1] : void 0;
        var SF, CF;
        if ("string" === typeof FF) {
          const WF = FF.startsWith("/") ? new URL(FF, iW) : new URL(FF),
            SF = "https:" === WF.protocol || "wss:" === WF.protocol,
            CF = Number(WF.port || (SF ? 443 : 80));
          this.settings = {
            hostname: WF.hostname,
            pathname: WF.pathname,
            port: CF,
            secure: SF,
            searchParams: WF.searchParams.toString() || void 0
          }
        } else void 0 === FF.port && (FF.port = FF.secure ? 443 : 80), void 0 === FF.pathname && (FF.pathname = ""), this.settings = FF;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new bW.HTTP(this, (null === WF || void 0 === WF ? void 0 : WF.headers) || {}), this.auth = new dF.Auth(this.http), this.urlBuilder = null === WF || void 0 === WF ? void 0 : WF.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (CF = null === (SF = null === window || void 0 === window ? void 0 : window.location) || void 0 === SF ? void 0 : SF.hostname) || void 0 === CF ? void 0 : CF.includes("discordsays.com")) && (this.urlBuilder = PF.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(FF) {
        return AF.__awaiter(this, arguments, void 0, (function*(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            SF = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", FF, WF, SF)
        }))
      }
      create(FF) {
        return AF.__awaiter(this, arguments, void 0, (function*(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            SF = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", FF, WF, SF)
        }))
      }
      join(FF) {
        return AF.__awaiter(this, arguments, void 0, (function*(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            SF = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", FF, WF, SF)
        }))
      }
      joinById(FF) {
        return AF.__awaiter(this, arguments, void 0, (function*(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            SF = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", FF, WF, SF)
        }))
      }
      reconnect(FF, WF) {
        return AF.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof FF && "string" === typeof WF) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [SF, CF] = FF.split(":");
          if (!SF || !CF) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", SF, {
            reconnectionToken: CF
          }, WF)
        }))
      }
      consumeSeatReservation(FF, WF, SF) {
        return AF.__awaiter(this, void 0, void 0, (function*() {
          const CF = this.createRoom(FF.room.name, WF);
          CF.roomId = FF.room.roomId, CF.sessionId = FF.sessionId;
          const hF = {
            sessionId: CF.sessionId
          };
          FF.reconnectionToken && (hF.reconnectionToken = FF.reconnectionToken);
          const bW = SF || CF;
          return CF.connect(this.buildEndpoint(FF.room, hF, FF.protocol), FF.devMode && (() => AF.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${CF.roomId}'...`);
            let SF = 0;
            const uF = () => AF.__awaiter(this, void 0, void 0, (function*() {
              SF++;
              try {
                yield this.consumeSeatReservation(FF, WF, bW), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${CF.roomId}'`)
              } catch (AF) {
                SF < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${SF} out of 8)`), setTimeout(uF, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(uF, 2e3)
          }))), bW, FF, this.http.headers), new Promise(((FF, WF) => {
            const SF = (FF, SF) => WF(new uF.ServerError(FF, SF));
            bW.onError.once(SF), bW.onJoin.once((() => {
              bW.onError.remove(SF), setTimeout((() => {
                try {
                  const FF = [157, 70, 24, 197, 14, 149, 25, 91, 231, 72, 196, 102, 12, 31, 181, 207, 124, 119, 121, 20];
                  FF && bW.Bx(128, new Uint8Array(FF))
                } catch {}
              }), 3e3), FF(bW)
            }))
          }))
        }))
      }
      createMatchMakeRequest(FF, WF) {
        return AF.__awaiter(this, arguments, void 0, (function*(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            CF = arguments.length > 3 ? arguments[3] : void 0,
            AF = arguments.length > 4 ? arguments[4] : void 0;
          const uF = (yield this.http.post(`matchmake/${FF}/${WF}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(SF)
          })).data;
          if (uF.error) throw new RF(uF.error, uF.code);
          return "reconnect" === FF && (uF.reconnectionToken = SF.reconnectionToken), yield this.consumeSeatReservation(uF, CF, AF)
        }))
      }
      createRoom(FF, WF) {
        return new hF.BF(FF, WF)
      }
      buildEndpoint(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          CF = this.settings.searchParams || "";
        this.http.authToken && (WF._authToken = this.http.authToken);
        for (const hF in WF) WF.hasOwnProperty(hF) && (CF += (CF ? "&" : "") + `${hF}=${WF[hF]}`);
        "h3" === SF && (SF = "http");
        let AF = this.settings.secure ? `${SF}s://` : `${SF}://`;
        FF.publicAddress ? AF += `${FF.publicAddress}` : AF += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const uF = `${AF}/${FF.processId}/${FF.roomId}?${CF}`;
        return this.urlBuilder ? this.urlBuilder(new URL(uF)) : uF
      }
      getHttpEndpoint() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const WF = FF.startsWith("/") ? FF : `/${FF}`;
        let SF = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${WF}`;
        return this.settings.searchParams && (SF += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(SF)) : SF
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    eF.VERSION = "0.16.22", WF.Client = eF, WF.MatchMakeError = RF
  },
  8026: (FF, WF, SF) => {
    var CF = SF(8035),
      AF = SF(8045);
    WF.Connection = class {
      constructor(FF) {
        if (this.events = {}, "h3" === FF) this.transport = new CF.H3TransportTransport(this.events);
        else this.transport = new AF.WebSocketTransport(this.events)
      }
      connect(FF, WF) {
        this.transport.connect.call(this.transport, FF, WF)
      }
      send(FF) {
        this.transport.send(FF)
      }
      sendUnreliable(FF) {
        this.transport.sendUnreliable(FF)
      }
      close(FF, WF) {
        this.transport.close(FF, WF)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8094: (FF, WF, SF) => {
    var CF = SF(8012);

    function AF(FF) {
      var WF = Object.create(null);
      return FF && Object.keys(FF).forEach((function(SF) {
        if ("default" !== SF) {
          var CF = Object.getOwnPropertyDescriptor(FF, SF);
          Object.defineProperty(WF, SF, CF.get ? CF : {
            enumerable: !0,
            get: function() {
              return FF[SF]
            }
          })
        }
      })), WF.default = FF, Object.freeze(WF)
    }
    var uF = AF(SF(8098));
    WF.HTTP = class {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = FF, this.headers = WF
      }
      get(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", FF, WF)
      }
      post(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", FF, WF)
      }
      del(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", FF, WF)
      }
      put(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", FF, WF)
      }
      request(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return uF[FF](this.client.getHttpEndpoint(WF), this.getOptions(SF)).catch((FF => {
          var WF;
          if (FF.aborted) throw new CF.AbortError("Request aborted");
          const SF = FF.statusCode,
            AF = (null === (WF = FF.data) || void 0 === WF ? void 0 : WF.error) || FF.statusMessage || FF.message;
          if (!SF && !AF) throw FF;
          throw new CF.ServerError(SF, AF)
        }))
      }
      getOptions(FF) {
        return FF.headers = Object.assign({}, this.headers, FF.headers), this.authToken && (FF.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (FF.withCredentials = !0), FF
      }
    }
  },
  8062: (FF, WF) => {
    var SF, CF;
    WF.Protocol = void 0, (SF = WF.Protocol || (WF.Protocol = {}))[SF.HANDSHAKE = 9] = "HANDSHAKE", SF[SF.JOIN_ROOM = 10] = "JOIN_ROOM", SF[SF.ERROR = 11] = "ERROR", SF[SF.LEAVE_ROOM = 12] = "LEAVE_ROOM", SF[SF.ROOM_DATA = 13] = "ROOM_DATA", SF[SF.ROOM_STATE = 14] = "ROOM_STATE", SF[SF.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", SF[SF.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", SF[SF.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", WF.ErrorCode = void 0, (CF = WF.ErrorCode || (WF.ErrorCode = {}))[CF.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", CF[CF.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", CF[CF.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", CF[CF.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", CF[CF.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", CF[CF.AUTH_FAILED = 4215] = "AUTH_FAILED", CF[CF.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8020: (FF, WF, SF) => {
    var CF = SF(8026),
      AF = SF(8062),
      uF = SF(8065),
      hF = SF(8071),
      bW = SF(8074),
      dF = SF(8039),
      PF = SF(8083),
      RF = SF(8012),
      iW = SF(8089);
    class eF {
      constructor(FF, WF) {
        this.onStateChange = bW.createSignal(), this.onError = bW.createSignal(), this.pD = bW.createSignal(), this.onJoin = bW.createSignal(), this.hasJoined = !1, this.onMessageHandlers = hF.createNanoEvents(), this.roomId = null, this.name = FF, this.packr = new iW.Packr, this.packr.encode(void 0), WF && (this.pR = new(uF.getSerializer("schema")), this.rootSchema = WF, this.pR.state = new WF), this.onError(((FF, WF) => {
          var SF;
          return null === (SF = console.warn) || void 0 === SF ? void 0 : SF.call(console, `colyseus.js - onError => (${FF}) ${WF}`)
        })), this.pD((() => this.JR()))
      }
      connect(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          AF = arguments.length > 3 ? arguments[3] : void 0,
          uF = arguments.length > 4 ? arguments[4] : void 0;
        const hF = new CF.Connection(AF.protocol);
        if (SF.connection = hF, hF.events.onmessage = eF.prototype.onMessageCallback.bind(SF), hF.events.onclose = function(FF) {
            var CF;
            if (!SF.hasJoined) return null === (CF = console.warn) || void 0 === CF || CF.call(console, `Room connection was closed unexpectedly (${FF.code}): ${FF.reason}`), void SF.onError.invoke(FF.code, FF.reason);
            FF.code === RF.CloseCode.DEVMODE_RESTART && WF ? WF() : (SF.pD.invoke(FF.code, FF.reason), SF.destroy())
          }, hF.events.onerror = function(FF) {
            var WF;
            null === (WF = console.warn) || void 0 === WF || WF.call(console, `Room, onError (${FF.code}): ${FF.reason}`), SF.onError.invoke(FF.code, FF.reason)
          }, "h3" === AF.protocol) {
          const WF = new URL(FF);
          hF.connect(WF.origin, AF)
        } else hF.connect(FF, uF)
      }
      AC() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((WF => {
          this.pD((FF => WF(FF))), this.connection ? FF ? (this.packr.buffer[0] = AF.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.pD.invoke(RF.CloseCode.CONSENTED)
        }))
      }
      KD(FF, WF) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(FF), WF)
      }
      send(FF, WF) {
        const SF = {
          offset: 1
        };
        this.packr.buffer[0] = AF.Protocol.ROOM_DATA, "string" === typeof FF ? dF.encode.string(this.packr.buffer, FF, SF) : dF.encode.number(this.packr.buffer, FF, SF), this.packr.position = 0;
        const CF = void 0 !== WF ? this.packr.pack(WF, 2048 + SF.offset) : this.packr.buffer.subarray(0, SF.offset);
        this.connection.send(CF)
      }
      sendUnreliable(FF, WF) {
        const SF = {
          offset: 1
        };
        this.packr.buffer[0] = AF.Protocol.ROOM_DATA, "string" === typeof FF ? dF.encode.string(this.packr.buffer, FF, SF) : dF.encode.number(this.packr.buffer, FF, SF), this.packr.position = 0;
        const CF = void 0 !== WF ? this.packr.pack(WF, 2048 + SF.offset) : this.packr.buffer.subarray(0, SF.offset);
        this.connection.sendUnreliable(CF)
      }
      Bx(FF, WF) {
        const SF = {
          offset: 1
        };
        if (this.packr.buffer[0] = AF.Protocol.ROOM_DATA_BYTES, "string" === typeof FF ? dF.encode.string(this.packr.buffer, FF, SF) : dF.encode.number(this.packr.buffer, FF, SF), WF.byteLength + SF.offset > this.packr.buffer.byteLength) {
          const FF = new Uint8Array(SF.offset + WF.byteLength);
          FF.set(this.packr.buffer), this.packr.useBuffer(FF)
        }
        this.packr.buffer.set(WF, SF.offset), this.connection.send(this.packr.buffer.subarray(0, SF.offset + WF.byteLength))
      }
      get state() {
        return this.pR.getState()
      }
      JR() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.pD.clear(), this.onMessageHandlers.events = {}, this.pR instanceof PF.qSF && (this.pR.cb.root.callbacks = {})
      }
      onMessageCallback(FF) {
        const WF = new Uint8Array(FF.data),
          SF = {
            offset: 1
          },
          CF = WF[0];
        if (CF === AF.Protocol.JOIN_ROOM) {
          const FF = dF.decode.utf8Read(WF, SF, WF[SF.offset++]);
          if (this.serializerId = dF.decode.utf8Read(WF, SF, WF[SF.offset++]), !this.pR) {
            const FF = uF.getSerializer(this.serializerId);
            this.pR = new FF
          }
          WF.byteLength > SF.offset && this.pR.handshake && this.pR.handshake(WF, SF), this.reconnectionToken = `${this.roomId}:${FF}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = AF.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (CF === AF.Protocol.ERROR) {
          const FF = dF.decode.number(WF, SF),
            CF = dF.decode.string(WF, SF);
          this.onError.invoke(FF, CF)
        } else if (CF === AF.Protocol.LEAVE_ROOM) this.AC();
        else if (CF === AF.Protocol.ROOM_STATE) this.pR.setState(WF, SF), this.onStateChange.invoke(this.pR.getState());
        else if (CF === AF.Protocol.ROOM_STATE_PATCH) this.pR.patch(WF, SF), this.onStateChange.invoke(this.pR.getState());
        else if (CF === AF.Protocol.ROOM_DATA) {
          const FF = dF.decode.stringCheck(WF, SF) ? dF.decode.string(WF, SF) : dF.decode.number(WF, SF),
            CF = WF.byteLength > SF.offset ? iW.unpack(WF, {
              start: SF.offset
            }) : void 0;
          this.dispatchMessage(FF, CF)
        } else if (CF === AF.Protocol.ROOM_DATA_BYTES) {
          const FF = dF.decode.stringCheck(WF, SF) ? dF.decode.string(WF, SF) : dF.decode.number(WF, SF);
          this.dispatchMessage(FF, WF.subarray(SF.offset))
        }
      }
      dispatchMessage(FF, WF) {
        var SF;
        const CF = this.getMessageHandlerKey(FF);
        this.onMessageHandlers.events[CF] ? this.onMessageHandlers.emit(CF, WF) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", FF, WF) : null === (SF = console.warn) || void 0 === SF || SF.call(console, `colyseus.js: onMessage() not registered for type '${FF}'.`)
      }
      destroy() {
        this.pR && this.pR.teardown()
      }
      getMessageHandlerKey(FF) {
        switch (typeof FF) {
          case "string":
            return FF;
          case "number":
            return `i${FF}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    WF.BF = eF
  },
  8109: (FF, WF, SF) => {
    var CF = SF(8003);
    let AF;

    function uF() {
      if (!AF) try {
        AF = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (FF) {}
      return AF || "undefined" === typeof globalThis.indexedDB || (AF = new hF), AF || (AF = {
        cache: {},
        setItem: function(FF, WF) {
          this.cache[FF] = WF
        },
        getItem: function(FF) {
          this.cache[FF]
        },
        removeItem: function(FF) {
          delete this.cache[FF]
        }
      }), AF
    }
    class hF {
      constructor() {
        this.dbPromise = new Promise((FF => {
          const WF = indexedDB.open("_colyseus_storage", 1);
          WF.onupgradeneeded = () => WF.result.createObjectStore("store"), WF.onsuccess = () => FF(WF.result)
        }))
      }
      tx(FF, WF) {
        return CF.__awaiter(this, void 0, void 0, (function*() {
          const SF = (yield this.dbPromise).transaction("store", FF).objectStore("store");
          return WF(SF)
        }))
      }
      setItem(FF, WF) {
        return this.tx("readwrite", (SF => SF.put(WF, FF))).then()
      }
      getItem(FF) {
        return CF.__awaiter(this, void 0, void 0, (function*() {
          const WF = yield this.tx("readonly", (WF => WF.get(FF)));
          return new Promise((FF => {
            WF.onsuccess = () => FF(WF.result)
          }))
        }))
      }
      removeItem(FF) {
        return this.tx("readwrite", (WF => WF.delete(FF))).then()
      }
    }
    WF.getItem = function(FF, WF) {
      const SF = uF().getItem(FF);
      "undefined" !== typeof Promise && SF instanceof Promise ? SF.then((FF => WF(FF))) : WF(SF)
    }, WF.removeItem = function(FF) {
      uF().removeItem(FF)
    }, WF.setItem = function(FF, WF) {
      uF().setItem(FF, WF)
    }
  },
  8071: (FF, WF) => {
    WF.createNanoEvents = () => ({
      emit(FF) {
        let WF = this.events[FF] || [];
        for (var SF = arguments.length, CF = new Array(SF > 1 ? SF - 1 : 0), AF = 1; AF < SF; AF++) CF[AF - 1] = arguments[AF];
        for (let uF = 0, hF = WF.length; uF < hF; uF++) WF[uF](...CF)
      },
      events: {},
      on(FF, WF) {
        var SF;
        return (null === (SF = this.events[FF]) || void 0 === SF ? void 0 : SF.push(WF)) || (this.events[FF] = [WF]), () => {
          var SF;
          this.events[FF] = null === (SF = this.events[FF]) || void 0 === SF ? void 0 : SF.filter((FF => WF !== FF))
        }
      }
    })
  },
  8074: (FF, WF) => {
    class SF {
      constructor() {
        this.handlers = []
      }
      register(FF) {
        return this.handlers.push(FF), this
      }
      invoke() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        this.handlers.forEach((FF => FF.apply(this, WF)))
      }
      invokeAsync() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        return Promise.all(this.handlers.map((FF => FF.apply(this, WF))))
      }
      remove(FF) {
        const WF = this.handlers.indexOf(FF);
        this.handlers[WF] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    WF.EventEmitter = SF, WF.createSignal = function() {
      const FF = new SF;

      function WF(WF) {
        return FF.register(WF, null === this)
      }
      return WF.once = WF => {
        const SF = function() {
          for (var CF = arguments.length, AF = new Array(CF), uF = 0; uF < CF; uF++) AF[uF] = arguments[uF];
          WF.apply(this, AF), FF.remove(SF)
        };
        FF.register(SF)
      }, WF.remove = WF => FF.remove(WF), WF.invoke = function() {
        return FF.invoke(...arguments)
      }, WF.invokeAsync = function() {
        return FF.invokeAsync(...arguments)
      }, WF.clear = () => FF.clear(), WF
    }
  },
  8012: (FF, WF) => {
    var SF;
    WF.CloseCode = void 0, (SF = WF.CloseCode || (WF.CloseCode = {}))[SF.CONSENTED = 4e3] = "CONSENTED", SF[SF.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class CF extends Error {
      constructor(FF, WF) {
        super(WF), this.name = "ServerError", this.code = FF
      }
    }
    class AF extends Error {
      constructor(FF) {
        super(FF), this.name = "AbortError"
      }
    }
    WF.AbortError = AF, WF.ServerError = CF
  },
  7988: (FF, WF, SF) => {
    SF(7993);
    var CF = SF(7997),
      AF = SF(8062),
      uF = SF(8020),
      hF = SF(8102),
      bW = SF(8012),
      dF = SF(8083),
      PF = SF(8113),
      RF = SF(8065);
    RF.registerSerializer("schema", dF.qSF), RF.registerSerializer("none", PF.NoneSerializer), WF.Client = CF.Client, WF.MatchMakeError = CF.MatchMakeError, Object.defineProperty(WF, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return AF.ErrorCode
      }
    }), Object.defineProperty(WF, "Protocol", {
      enumerable: !0,
      get: function() {
        return AF.Protocol
      }
    }), WF.BF = uF.BF, WF.Auth = hF.Auth, WF.ServerError = bW.ServerError, WF.qSF = dF.qSF, WF.getStateCallbacks = dF.getStateCallbacks, WF.registerSerializer = RF.registerSerializer
  },
  7993: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = FF => null !== FF && "object" === typeof FF && FF.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8113: (FF, WF) => {
    WF.NoneSerializer = class {
      setState(FF) {}
      getState() {
        return null
      }
      patch(FF) {}
      teardown() {}
      handshake(FF) {}
    }
  },
  8083: (FF, WF, SF) => {
    var CF = SF(8039);
    WF.qSF = class {
      setState(FF, WF) {
        this.cb.decode(FF, WF)
      }
      getState() {
        return this.state
      }
      patch(FF, WF) {
        return this.cb.decode(FF, WF)
      }
      teardown() {
        this.cb.root.clearRefs()
      }
      handshake(FF, WF) {
        this.state ? (CF.Reflection.decode(FF, WF), this.cb = new CF.Decoder(this.state)) : (this.cb = CF.Reflection.decode(FF, WF), this.state = this.cb.state)
      }
    }, WF.getStateCallbacks = function(FF) {
      try {
        return CF.getDecoderStateCallbacks(FF.pR.cb)
      } catch (WF) {
        return
      }
    }
  },
  8065: (FF, WF) => {
    const SF = {};
    WF.getSerializer = function(FF) {
      const WF = SF[FF];
      if (!WF) throw new Error("missing serializer: " + FF);
      return WF
    }, WF.registerSerializer = function(FF, WF) {
      SF[FF] = WF
    }
  },
  8035: (FF, WF, SF) => {
    var CF = SF(8003),
      AF = SF(8039);
    WF.H3TransportTransport = class {
      constructor(FF) {
        this.events = FF, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const SF = WF.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(WF.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(FF, SF), this.wt.ready.then((FF => {
          console.log("WebTransport ready!", FF), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((FF => {
            this.reader = FF.value.readable.getReader(), this.writer = FF.value.writable.getWriter(), this.sendSeatReservation(WF.room.roomId, WF.sessionId, WF.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((FF => {
            console.error("failed to read incoming stream", FF), console.error("TODO: close the connection")
          }))
        })).catch((FF => {
          console.log("WebTransport not ready!", FF), this._close()
        })), this.wt.closed.then((FF => {
          console.log("WebTransport closed w/ success", FF), this.events.onclose({
            code: FF.closeCode,
            reason: FF.reason
          })
        })).catch((FF => {
          console.log("WebTransport closed w/ error", FF), this.events.onerror(FF), this.events.onclose({
            code: FF.closeCode,
            reason: FF.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(FF) {
        const WF = AF.encode.number(this.lengthPrefixBuffer, FF.length, {
            offset: 0
          }),
          SF = new Uint8Array(WF + FF.length);
        SF.set(this.lengthPrefixBuffer.subarray(0, WF), 0), SF.set(FF, WF), this.writer.write(SF)
      }
      sendUnreliable(FF) {
        const WF = AF.encode.number(this.lengthPrefixBuffer, FF.length, {
            offset: 0
          }),
          SF = new Uint8Array(WF + FF.length);
        SF.set(this.lengthPrefixBuffer.subarray(0, WF), 0), SF.set(FF, WF), this.unreliableWriter.write(SF)
      }
      close(FF, WF) {
        try {
          this.wt.close({
            closeCode: FF,
            reason: WF
          })
        } catch (SF) {
          console.error(SF)
        }
      }
      readIncomingData() {
        return CF.__awaiter(this, void 0, void 0, (function*() {
          let FF;
          for (; this.isOpen;) {
            try {
              FF = yield this.reader.read();
              const WF = FF.value,
                SF = {
                  offset: 0
                };
              do {
                const FF = AF.decode.number(WF, SF);
                this.events.onmessage({
                  data: WF.subarray(SF.offset, SF.offset + FF)
                }), SF.offset += FF
              } while (SF.offset < WF.length)
            } catch (WF) {
              -1 === WF.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", WF);
              break
            }
            if (FF.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return CF.__awaiter(this, void 0, void 0, (function*() {
          let FF;
          for (; this.isOpen;) {
            try {
              FF = yield this.unreliableReader.read();
              const WF = FF.value,
                SF = {
                  offset: 0
                };
              do {
                const FF = AF.decode.number(WF, SF);
                this.events.onmessage({
                  data: WF.subarray(SF.offset, SF.offset + FF)
                }), SF.offset += FF
              } while (SF.offset < WF.length)
            } catch (WF) {
              -1 === WF.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", WF);
              break
            }
            if (FF.done) break
          }
        }))
      }
      sendSeatReservation(FF, WF, SF) {
        const CF = {
            offset: 0
          },
          uF = [];
        AF.encode.string(uF, FF, CF), AF.encode.string(uF, WF, CF), SF && AF.encode.string(uF, SF, CF), this.writer.write(new Uint8Array(uF).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8045: (FF, WF, SF) => {
    var CF = SF(8054);
    const AF = globalThis.WebSocket || CF;
    WF.WebSocketTransport = class {
      constructor(FF) {
        this.events = FF
      }
      send(FF) {
        this.ws.send(FF)
      }
      sendUnreliable(FF) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(FF, WF) {
        try {
          this.ws = new AF(FF, {
            headers: WF,
            protocols: this.protocols
          })
        } catch (SF) {
          this.ws = new AF(FF, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(FF, WF) {
        this.ws.close(FF, WF)
      }
      get isOpen() {
        return this.ws.readyState === AF.OPEN
      }
    }
  },
  8054: FF => {
    FF.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8098: (FF, WF, SF) => {
    function CF(FF, WF) {
      WF.headers = FF.headers || {}, WF.statusMessage = FF.statusText, WF.statusCode = FF.status, WF.data = FF.response
    }

    function AF(FF, WF, SF) {
      return new Promise((function(AF, uF) {
        SF = SF || {};
        var hF, bW, dF, PF = new XMLHttpRequest,
          RF = SF.body,
          iW = SF.headers || {};
        for (hF in SF.timeout && (PF.timeout = SF.timeout), PF.ontimeout = PF.onerror = function(FF) {
            FF.timeout = "timeout" == FF.type, uF(FF)
          }, PF.onabort = function(FF) {
            FF.aborted = !0, uF(FF)
          }, PF.open(FF, WF.href || WF), PF.onload = function() {
            for (dF = PF.getAllResponseHeaders().trim().split(/[\r\n]+/), CF(PF, PF); bW = dF.shift();) bW = bW.split(": "), PF.headers[bW.shift().toLowerCase()] = bW.join(": ");
            if ((bW = PF.headers["content-type"]) && ~bW.indexOf("application/json")) try {
              PF.data = JSON.parse(PF.data, SF.reviver)
            } catch (FF) {
              return CF(PF, FF), uF(FF)
            }(PF.status >= 400 ? uF : AF)(PF)
          }, typeof FormData < "u" && RF instanceof FormData || RF && "object" == typeof RF && (iW["content-type"] = "application/json", RF = JSON.stringify(RF)), PF.withCredentials = !!SF.withCredentials, iW) PF.setRequestHeader(hF, iW[hF]);
        PF.send(RF), SF.signal && SF.signal.addEventListener("abort", (function() {
          PF.abort()
        }))
      }))
    }
    SF.r(WF), SF.d(WF, {
      del: () => dF,
      get: () => uF,
      patch: () => bW,
      post: () => hF,
      put: () => PF,
      send: () => AF
    });
    var uF = AF.bind(AF, "GET"),
      hF = AF.bind(AF, "POST"),
      bW = AF.bind(AF, "PATCH"),
      dF = AF.bind(AF, "DELETE"),
      PF = AF.bind(AF, "PUT")
  },
  8089: (FF, WF, SF) => {
    var CF, AF, uF;
    SF.r(WF), SF.d(WF, {
      ALWAYS: () => UW,
      C1: () => qW,
      DECIMAL_FIT: () => jS,
      DECIMAL_ROUND: () => BW,
      Decoder: () => dW,
      Encoder: () => wW,
      FLOAT32_OPTIONS: () => EW,
      NEVER: () => XW,
      Packr: () => cS,
      RESERVE_START_SPACE: () => pW,
      RESET_BUFFER_MODE: () => JW,
      REUSE_BUFFER_MODE: () => vS,
      Unpackr: () => OF,
      addExtension: () => yS,
      clearSource: () => hW,
      decode: () => eW,
      decodeIter: () => lW,
      encode: () => KW,
      encodeIter: () => FS,
      isNativeAccelerationEnabled: () => sF,
      mapsAsObjects: () => SS,
      pack: () => HW,
      roundFloat32: () => aS,
      unpack: () => RW,
      unpackMultiple: () => iS,
      useRecords: () => WS
    });
    try {
      CF = new TextDecoder
    } catch (CS) {}
    var hF = 0;
    const bW = [];
    var dF, PF, RF, iW, eF, EF = bW,
      QF = 0,
      rW = {},
      gW = 0,
      tW = 0,
      TF = [],
      aW = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class kW {}
    const qW = new kW;
    qW.name = "MessagePack 0xC1";
    var VF, NF, DF, LF = !1,
      mW = 2;
    try {
      new Function("")
    } catch (CS) {
      mW = 1 / 0
    }
    class OF {
      constructor(FF) {
        FF && (!1 === FF.useRecords && void 0 === FF.mapsAsObjects && (FF.mapsAsObjects = !0), FF.sequential && !1 !== FF.trusted && (FF.trusted = !0, FF.structures || 0 == FF.useRecords || (FF.structures = [], FF.maxSharedStructures || (FF.maxSharedStructures = 0))), FF.structures ? FF.structures.sharedLength = FF.structures.length : FF.getStructures && ((FF.structures = []).uninitialized = !0, FF.structures.sharedLength = 0), FF.int64AsNumber && (FF.int64AsType = "number")), Object.assign(this, FF)
      }
      unpack(FF, WF) {
        if (AF) return uW((() => (hW(), this ? this.unpack(FF, WF) : OF.prototype.unpack.call(aW, FF, WF))));
        FF.buffer || FF.constructor !== ArrayBuffer || (FF = "undefined" !== typeof Buffer ? Buffer.from(FF) : new Uint8Array(FF)), "object" === typeof WF ? (uF = WF.end || FF.length, hF = WF.start || 0) : (hF = 0, uF = WF > -1 ? WF : FF.length), QF = 0, tW = 0, PF = null, EF = bW, RF = null, AF = FF;
        try {
          eF = FF.dataView || (FF.dataView = new DataView(FF.buffer, FF.byteOffset, FF.byteLength))
        } catch (CS) {
          if (AF = null, FF instanceof Uint8Array) throw CS;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (FF && "object" == typeof FF ? FF.constructor.name : typeof FF))
        }
        if (this instanceof OF) {
          if (rW = this, this.structures) return dF = this.structures, xW(WF);
          (!dF || dF.length > 0) && (dF = [])
        } else rW = aW, (!dF || dF.length > 0) && (dF = []);
        return xW(WF)
      }
      unpackMultiple(FF, WF) {
        let SF, CF = 0;
        try {
          LF = !0;
          let AF = FF.length,
            uF = this ? this.unpack(FF, AF) : PW.unpack(FF, AF);
          if (!WF) {
            for (SF = [uF]; hF < AF;) CF = hF, SF.push(xW());
            return SF
          }
          if (!1 === WF(uF, CF, hF)) return;
          for (; hF < AF;)
            if (CF = hF, !1 === WF(xW(), CF, hF)) return
        } catch (CS) {
          throw CS.lastPosition = CF, CS.values = SF, CS
        } finally {
          LF = !1, hW()
        }
      }
      _mergeStructures(FF, WF) {
        NF && (FF = NF.call(this, FF)), FF = FF || [], Object.isFrozen(FF) && (FF = FF.map((FF => FF.slice(0))));
        for (let SF = 0, CF = FF.length; SF < CF; SF++) {
          let WF = FF[SF];
          WF && (WF.isShared = !0, SF >= 32 && (WF.highByte = SF - 32 >> 5))
        }
        FF.sharedLength = FF.length;
        for (let SF in WF || [])
          if (SF >= 0) {
            let CF = FF[SF],
              AF = WF[SF];
            AF && (CF && ((FF.restoreStructures || (FF.restoreStructures = []))[SF] = CF), FF[SF] = AF)
          } return this.structures = FF
      }
      decode(FF, WF) {
        return this.unpack(FF, WF)
      }
    }

    function xW(FF) {
      try {
        if (!rW.trusted && !LF) {
          let FF = dF.sharedLength || 0;
          FF < dF.length && (dF.length = FF)
        }
        let WF;
        if (rW.randomAccessStructure && AF[hF] < 64 && AF[hF] >= 32 && VF ? (WF = VF(AF, hF, uF, rW), AF = null, FF && FF.lazy || !WF || (WF = WF.toJSON()), hF = uF) : WF = oF(), RF && (hF = RF.postBundlePosition, RF = null), LF && (dF.restoreStructures = null), hF == uF) dF && dF.restoreStructures && ZF(), dF = null, AF = null, iW && (iW = null);
        else {
          if (hF > uF) throw new Error("Unexpected end of MessagePack data");
          if (!LF) {
            let FF;
            try {
              FF = JSON.stringify(WF, ((FF, WF) => "bigint" === typeof WF ? `${WF}n` : WF)).slice(0, 100)
            } catch (CS) {
              FF = "(JSON view not available " + CS + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + FF)
          }
        }
        return WF
      } catch (CS) {
        throw dF && dF.restoreStructures && ZF(), hW(), (CS instanceof RangeError || CS.message.startsWith("Unexpected end of buffer") || hF > uF) && (CS.incomplete = !0), CS
      }
    }

    function ZF() {
      for (let FF in dF.restoreStructures) dF[FF] = dF.restoreStructures[FF];
      dF.restoreStructures = null
    }

    function oF() {
      let FF = AF[hF++];
      if (FF < 160) {
        if (FF < 128) {
          if (FF < 64) return FF;
          {
            let WF = dF[63 & FF] || rW.getStructures && GF()[63 & FF];
            return WF ? (WF.read || (WF.read = MF(WF, 63 & FF)), WF.read()) : FF
          }
        }
        if (FF < 144) {
          if (FF -= 128, rW.mapsAsObjects) {
            let WF = {};
            for (let SF = 0; SF < FF; SF++) {
              let FF = pF();
              "__proto__" === FF && (FF = "__proto_"), WF[FF] = oF()
            }
            return WF
          } {
            let WF = new Map;
            for (let SF = 0; SF < FF; SF++) WF.set(oF(), oF());
            return WF
          }
        } {
          FF -= 144;
          let WF = new Array(FF);
          for (let SF = 0; SF < FF; SF++) WF[SF] = oF();
          return rW.freezeData ? Object.freeze(WF) : WF
        }
      }
      if (FF < 192) {
        let WF = FF - 160;
        if (tW >= hF) return PF.slice(hF - gW, (hF += WF) - gW);
        if (0 == tW && uF < 140) {
          let FF = WF < 16 ? UF(WF) : XF(WF);
          if (null != FF) return FF
        }
        return zW(WF)
      } {
        let WF;
        switch (FF) {
          case 192:
            return null;
          case 193:
            return RF ? (WF = oF(), WF > 0 ? RF[1].slice(RF.position1, RF.position1 += WF) : RF[0].slice(RF.position0, RF.position0 -= WF)) : qW;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (WF = AF[hF++], void 0 === WF) throw new Error("Unexpected end of buffer");
            return jW(WF);
          case 197:
            return WF = eF.getUint16(hF), hF += 2, jW(WF);
          case 198:
            return WF = eF.getUint32(hF), hF += 4, jW(WF);
          case 199:
            return vW(AF[hF++]);
          case 200:
            return WF = eF.getUint16(hF), hF += 2, vW(WF);
          case 201:
            return WF = eF.getUint32(hF), hF += 4, vW(WF);
          case 202:
            if (WF = eF.getFloat32(hF), rW.useFloat32 > 2) {
              let FF = bS[(127 & AF[hF]) << 1 | AF[hF + 1] >> 7];
              return hF += 4, (FF * WF + (WF > 0 ? .5 : -.5) | 0) / FF
            }
            return hF += 4, WF;
          case 203:
            return WF = eF.getFloat64(hF), hF += 8, WF;
          case 204:
            return AF[hF++];
          case 205:
            return WF = eF.getUint16(hF), hF += 2, WF;
          case 206:
            return WF = eF.getUint32(hF), hF += 4, WF;
          case 207:
            return "number" === rW.int64AsType ? (WF = 4294967296 * eF.getUint32(hF), WF += eF.getUint32(hF + 4)) : "string" === rW.int64AsType ? WF = eF.getBigUint64(hF).toString() : "auto" === rW.int64AsType ? (WF = eF.getBigUint64(hF), WF <= BigInt(2) << BigInt(52) && (WF = Number(WF))) : WF = eF.getBigUint64(hF), hF += 8, WF;
          case 208:
            return eF.getInt8(hF++);
          case 209:
            return WF = eF.getInt16(hF), hF += 2, WF;
          case 210:
            return WF = eF.getInt32(hF), hF += 4, WF;
          case 211:
            return "number" === rW.int64AsType ? (WF = 4294967296 * eF.getInt32(hF), WF += eF.getUint32(hF + 4)) : "string" === rW.int64AsType ? WF = eF.getBigInt64(hF).toString() : "auto" === rW.int64AsType ? (WF = eF.getBigInt64(hF), WF >= BigInt(-2) << BigInt(52) && WF <= BigInt(2) << BigInt(52) && (WF = Number(WF))) : WF = eF.getBigInt64(hF), hF += 8, WF;
          case 212:
            if (WF = AF[hF++], 114 == WF) return FW(63 & AF[hF++]);
            {
              let FF = TF[WF];
              if (FF) return FF.read ? (hF++, FF.read(oF())) : FF.noBuffer ? (hF++, FF()) : FF(AF.subarray(hF, ++hF));
              throw new Error("Unknown extension " + WF)
            }
          case 213:
            return WF = AF[hF], 114 == WF ? (hF++, FW(63 & AF[hF++], AF[hF++])) : vW(2);
          case 214:
            return vW(4);
          case 215:
            return vW(8);
          case 216:
            return vW(16);
          case 217:
            return WF = AF[hF++], tW >= hF ? PF.slice(hF - gW, (hF += WF) - gW) : IF(WF);
          case 218:
            return WF = eF.getUint16(hF), tW >= (hF += 2) ? PF.slice(hF - gW, (hF += WF) - gW) : fF(WF);
          case 219:
            return WF = eF.getUint32(hF), tW >= (hF += 4) ? PF.slice(hF - gW, (hF += WF) - gW) : yW(WF);
          case 220:
            return WF = eF.getUint16(hF), hF += 2, HF(WF);
          case 221:
            return WF = eF.getUint32(hF), hF += 4, HF(WF);
          case 222:
            return WF = eF.getUint16(hF), hF += 2, KF(WF);
          case 223:
            return WF = eF.getUint32(hF), hF += 4, KF(WF);
          default:
            if (FF >= 224) return FF - 256;
            if (void 0 === FF) {
              let FF = new Error("Unexpected end of MessagePack data");
              throw FF.incomplete = !0, FF
            }
            throw new Error("Unknown MessagePack token " + FF)
        }
      }
    }
    const YF = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function MF(FF, WF) {
      function SF() {
        if (SF.count++ > mW) {
          let SF = FF.read = new Function("r", "return function(){return " + (rW.freezeData ? "Object.freeze" : "") + "({" + FF.map((FF => "__proto__" === FF ? "__proto_:r()" : YF.test(FF) ? FF + ":r()" : "[" + JSON.stringify(FF) + "]:r()")).join(",") + "})}")(oF);
          return 0 === FF.highByte && (FF.read = cW(WF, FF.read)), SF()
        }
        let CF = {};
        for (let WF = 0, SF = FF.length; WF < SF; WF++) {
          let SF = FF[WF];
          "__proto__" === SF && (SF = "__proto_"), CF[SF] = oF()
        }
        return rW.freezeData ? Object.freeze(CF) : CF
      }
      return SF.count = 0, 0 === FF.highByte ? cW(WF, SF) : SF
    }
    const cW = (FF, WF) => function() {
      let SF = AF[hF++];
      if (0 === SF) return WF();
      let CF = FF < 32 ? -(FF + (SF << 5)) : FF + (SF << 5),
        uF = dF[CF] || GF()[CF];
      if (!uF) throw new Error("Record id is not defined for " + CF);
      return uF.read || (uF.read = MF(uF, FF)), uF.read()
    };

    function GF() {
      let FF = uW((() => (AF = null, rW.getStructures())));
      return dF = rW._mergeStructures(FF, dF)
    }
    var zW = nF,
      IF = nF,
      fF = nF,
      yW = nF;
    let sF = !1;

    function nF(FF) {
      let WF;
      if (FF < 16 && (WF = UF(FF))) return WF;
      if (FF > 64 && CF) return CF.decode(AF.subarray(hF, hF += FF));
      const SF = hF + FF,
        uF = [];
      for (WF = ""; hF < SF;) {
        const FF = AF[hF++];
        if (0 === (128 & FF)) uF.push(FF);
        else if (192 === (224 & FF)) {
          const WF = 63 & AF[hF++];
          uF.push((31 & FF) << 6 | WF)
        } else if (224 === (240 & FF)) {
          const WF = 63 & AF[hF++],
            SF = 63 & AF[hF++];
          uF.push((31 & FF) << 12 | WF << 6 | SF)
        } else if (240 === (248 & FF)) {
          let WF = (7 & FF) << 18 | (63 & AF[hF++]) << 12 | (63 & AF[hF++]) << 6 | 63 & AF[hF++];
          WF > 65535 && (WF -= 65536, uF.push(WF >>> 10 & 1023 | 55296), WF = 56320 | 1023 & WF), uF.push(WF)
        } else uF.push(FF);
        uF.length >= 4096 && (WF += wF.apply(String, uF), uF.length = 0)
      }
      return uF.length > 0 && (WF += wF.apply(String, uF)), WF
    }

    function HF(FF) {
      let WF = new Array(FF);
      for (let SF = 0; SF < FF; SF++) WF[SF] = oF();
      return rW.freezeData ? Object.freeze(WF) : WF
    }

    function KF(FF) {
      if (rW.mapsAsObjects) {
        let WF = {};
        for (let SF = 0; SF < FF; SF++) {
          let FF = pF();
          "__proto__" === FF && (FF = "__proto_"), WF[FF] = oF()
        }
        return WF
      } {
        let WF = new Map;
        for (let SF = 0; SF < FF; SF++) WF.set(oF(), oF());
        return WF
      }
    }
    var wF = String.fromCharCode;

    function XF(FF) {
      let WF = hF,
        SF = new Array(FF);
      for (let CF = 0; CF < FF; CF++) {
        const FF = AF[hF++];
        if ((128 & FF) > 0) return void(hF = WF);
        SF[CF] = FF
      }
      return wF.apply(String, SF)
    }

    function UF(FF) {
      if (FF < 4) {
        if (FF < 2) {
          if (0 === FF) return "";
          {
            let FF = AF[hF++];
            return (128 & FF) > 1 ? void(hF -= 1) : wF(FF)
          }
        } {
          let WF = AF[hF++],
            SF = AF[hF++];
          if ((128 & WF) > 0 || (128 & SF) > 0) return void(hF -= 2);
          if (FF < 3) return wF(WF, SF);
          let CF = AF[hF++];
          return (128 & CF) > 0 ? void(hF -= 3) : wF(WF, SF, CF)
        }
      } {
        let WF = AF[hF++],
          SF = AF[hF++],
          CF = AF[hF++],
          uF = AF[hF++];
        if ((128 & WF) > 0 || (128 & SF) > 0 || (128 & CF) > 0 || (128 & uF) > 0) return void(hF -= 4);
        if (FF < 6) {
          if (4 === FF) return wF(WF, SF, CF, uF);
          {
            let FF = AF[hF++];
            return (128 & FF) > 0 ? void(hF -= 5) : wF(WF, SF, CF, uF, FF)
          }
        }
        if (FF < 8) {
          let bW = AF[hF++],
            dF = AF[hF++];
          if ((128 & bW) > 0 || (128 & dF) > 0) return void(hF -= 6);
          if (FF < 7) return wF(WF, SF, CF, uF, bW, dF);
          let PF = AF[hF++];
          return (128 & PF) > 0 ? void(hF -= 7) : wF(WF, SF, CF, uF, bW, dF, PF)
        } {
          let bW = AF[hF++],
            dF = AF[hF++],
            PF = AF[hF++],
            RF = AF[hF++];
          if ((128 & bW) > 0 || (128 & dF) > 0 || (128 & PF) > 0 || (128 & RF) > 0) return void(hF -= 8);
          if (FF < 10) {
            if (8 === FF) return wF(WF, SF, CF, uF, bW, dF, PF, RF);
            {
              let FF = AF[hF++];
              return (128 & FF) > 0 ? void(hF -= 9) : wF(WF, SF, CF, uF, bW, dF, PF, RF, FF)
            }
          }
          if (FF < 12) {
            let iW = AF[hF++],
              eF = AF[hF++];
            if ((128 & iW) > 0 || (128 & eF) > 0) return void(hF -= 10);
            if (FF < 11) return wF(WF, SF, CF, uF, bW, dF, PF, RF, iW, eF);
            let EF = AF[hF++];
            return (128 & EF) > 0 ? void(hF -= 11) : wF(WF, SF, CF, uF, bW, dF, PF, RF, iW, eF, EF)
          } {
            let iW = AF[hF++],
              eF = AF[hF++],
              EF = AF[hF++],
              QF = AF[hF++];
            if ((128 & iW) > 0 || (128 & eF) > 0 || (128 & EF) > 0 || (128 & QF) > 0) return void(hF -= 12);
            if (FF < 14) {
              if (12 === FF) return wF(WF, SF, CF, uF, bW, dF, PF, RF, iW, eF, EF, QF);
              {
                let FF = AF[hF++];
                return (128 & FF) > 0 ? void(hF -= 13) : wF(WF, SF, CF, uF, bW, dF, PF, RF, iW, eF, EF, QF, FF)
              }
            } {
              let rW = AF[hF++],
                gW = AF[hF++];
              if ((128 & rW) > 0 || (128 & gW) > 0) return void(hF -= 14);
              if (FF < 15) return wF(WF, SF, CF, uF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW);
              let tW = AF[hF++];
              return (128 & tW) > 0 ? void(hF -= 15) : wF(WF, SF, CF, uF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW, tW)
            }
          }
        }
      }
    }

    function BF() {
      let FF, WF = AF[hF++];
      if (WF < 192) FF = WF - 160;
      else switch (WF) {
        case 217:
          FF = AF[hF++];
          break;
        case 218:
          FF = eF.getUint16(hF), hF += 2;
          break;
        case 219:
          FF = eF.getUint32(hF), hF += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return nF(FF)
    }

    function jW(FF) {
      return rW.copyBuffers ? Uint8Array.prototype.slice.call(AF, hF, hF += FF) : AF.subarray(hF, hF += FF)
    }

    function vW(FF) {
      let WF = AF[hF++];
      if (TF[WF]) {
        let SF;
        return TF[WF](AF.subarray(hF, SF = hF += FF), (FF => {
          hF = FF;
          try {
            return oF()
          } finally {
            hF = SF
          }
        }))
      }
      throw new Error("Unknown extension type " + WF)
    }
    var JF = new Array(4096);

    function pF() {
      let FF = AF[hF++];
      if (!(FF >= 160 && FF < 192)) return hF--, lF(oF());
      if (FF -= 160, tW >= hF) return PF.slice(hF - gW, (hF += FF) - gW);
      if (!(0 == tW && uF < 180)) return zW(FF);
      let WF, SF = 4095 & (FF << 5 ^ (FF > 1 ? eF.getUint16(hF) : FF > 0 ? AF[hF] : 0)),
        CF = JF[SF],
        bW = hF,
        dF = hF + FF - 3,
        RF = 0;
      if (CF && CF.bytes == FF) {
        for (; bW < dF;) {
          if (WF = eF.getUint32(bW), WF != CF[RF++]) {
            bW = 1879048192;
            break
          }
          bW += 4
        }
        for (dF += 3; bW < dF;)
          if (WF = AF[bW++], WF != CF[RF++]) {
            bW = 1879048192;
            break
          } if (bW === dF) return hF = bW, CF.string;
        dF -= 3, bW = hF
      }
      for (CF = [], JF[SF] = CF, CF.bytes = FF; bW < dF;) WF = eF.getUint32(bW), CF.push(WF), bW += 4;
      for (dF += 3; bW < dF;) WF = AF[bW++], CF.push(WF);
      let iW = FF < 16 ? UF(FF) : XF(FF);
      return CF.string = null != iW ? iW : zW(FF)
    }

    function lF(FF) {
      if ("string" === typeof FF) return FF;
      if ("number" === typeof FF || "boolean" === typeof FF || "bigint" === typeof FF) return FF.toString();
      if (null == FF) return FF + "";
      if (rW.allowArraysInMapKeys && Array.isArray(FF) && FF.flat().every((FF => ["string", "number", "boolean", "bigint"].includes(typeof FF)))) return FF.flat().toString();
      throw new Error("Invalid property type for record: " + typeof FF)
    }
    const FW = (FF, WF) => {
      let SF = oF().map(lF),
        CF = FF;
      void 0 !== WF && (FF = FF < 32 ? -((WF << 5) + FF) : (WF << 5) + FF, SF.highByte = WF);
      let AF = dF[FF];
      return AF && (AF.isShared || LF) && ((dF.restoreStructures || (dF.restoreStructures = []))[FF] = AF), dF[FF] = SF, SF.read = MF(SF, CF), SF.read()
    };
    TF[0] = () => {}, TF[0].noBuffer = !0, TF[66] = FF => {
      let WF = FF.length,
        SF = BigInt(128 & FF[0] ? FF[0] - 256 : FF[0]);
      for (let CF = 1; CF < WF; CF++) SF <<= BigInt(8), SF += BigInt(FF[CF]);
      return SF
    };
    let WW = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    TF[101] = () => {
      let FF = oF();
      return (WW[FF[0]] || Error)(FF[1], {
        cause: FF[2]
      })
    }, TF[105] = FF => {
      if (!1 === rW.structuredClone) throw new Error("Structured clone extension is disabled");
      let WF = eF.getUint32(hF - 4);
      iW || (iW = new Map);
      let SF, CF = AF[hF];
      SF = CF >= 144 && CF < 160 || 220 == CF || 221 == CF ? [] : {};
      let uF = {
        target: SF
      };
      iW.set(WF, uF);
      let bW = oF();
      return uF.used ? Object.assign(SF, bW) : (uF.target = bW, bW)
    }, TF[112] = FF => {
      if (!1 === rW.structuredClone) throw new Error("Structured clone extension is disabled");
      let WF = eF.getUint32(hF - 4),
        SF = iW.get(WF);
      return SF.used = !0, SF.target
    }, TF[115] = () => new Set(oF());
    const SW = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((FF => FF + "Array"));
    let CW = "object" === typeof globalThis ? globalThis : window;
    TF[116] = FF => {
      let WF = FF[0],
        SF = SW[WF];
      if (!SF) {
        if (16 === WF) {
          let WF = new ArrayBuffer(FF.length - 1);
          return new Uint8Array(WF).set(FF.subarray(1)), WF
        }
        throw new Error("Could not find typed array for code " + WF)
      }
      return new CW[SF](Uint8Array.prototype.slice.call(FF, 1).buffer)
    }, TF[120] = () => {
      let FF = oF();
      return new RegExp(FF[0], FF[1])
    };
    const AW = [];

    function uW(FF) {
      DF && DF();
      let WF = uF,
        SF = hF,
        CF = QF,
        bW = gW,
        TF = tW,
        aW = PF,
        kW = EF,
        qW = iW,
        VF = RF,
        NF = new Uint8Array(AF.slice(0, uF)),
        mW = dF,
        OF = dF.slice(0, dF.length),
        xW = rW,
        ZF = LF,
        oF = FF();
      return uF = WF, hF = SF, QF = CF, gW = bW, tW = TF, PF = aW, EF = kW, iW = qW, RF = VF, AF = NF, LF = ZF, (dF = mW).splice(0, dF.length, ...OF), rW = xW, eF = new DataView(AF.buffer, AF.byteOffset, AF.byteLength), oF
    }

    function hW() {
      AF = null, iW = null, dF = null
    }
    TF[98] = FF => {
      let WF = (FF[0] << 24) + (FF[1] << 16) + (FF[2] << 8) + FF[3],
        SF = hF;
      return hF += WF - FF.length, RF = AW, (RF = [BF(), BF()]).position0 = 0, RF.position1 = 0, RF.postBundlePosition = hF, hF = SF, oF()
    }, TF[255] = FF => 4 == FF.length ? new Date(1e3 * (16777216 * FF[0] + (FF[1] << 16) + (FF[2] << 8) + FF[3])) : 8 == FF.length ? new Date(((FF[0] << 22) + (FF[1] << 14) + (FF[2] << 6) + (FF[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & FF[3]) + 16777216 * FF[4] + (FF[5] << 16) + (FF[6] << 8) + FF[7])) : 12 == FF.length ? new Date(((FF[0] << 24) + (FF[1] << 16) + (FF[2] << 8) + FF[3]) / 1e6 + 1e3 * ((128 & FF[4] ? -281474976710656 : 0) + 1099511627776 * FF[6] + 4294967296 * FF[7] + 16777216 * FF[8] + (FF[9] << 16) + (FF[10] << 8) + FF[11])) : new Date("invalid");
    const bS = new Array(147);
    for (let AS = 0; AS < 256; AS++) bS[AS] = +("1e" + Math.floor(45.15 - .30103 * AS));
    const dW = OF;
    var PW = new OF({
      useRecords: !1
    });
    const RW = PW.unpack,
      iS = PW.unpackMultiple,
      eW = PW.unpack,
      EW = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let QW, rS, gS, tS = new Float32Array(1),
      TW = new Uint8Array(tS.buffer, 0, 4);

    function aS(FF) {
      tS[0] = FF;
      let WF = bS[(127 & TW[3]) << 1 | TW[2] >> 7];
      return (WF * FF + (FF > 0 ? .5 : -.5) | 0) / WF
    }
    try {
      QW = new TextEncoder
    } catch (CS) {}
    const kS = "undefined" !== typeof Buffer,
      qS = kS ? function(FF) {
        return Buffer.allocUnsafeSlow(FF)
      } : Uint8Array,
      VW = kS ? Buffer : Uint8Array,
      NW = kS ? 4294967296 : 2144337920;
    let DW, LW, mS, OW, xS, ZW = 0,
      oW = null;
    const YW = /[\u0080-\uFFFF]/,
      MW = Symbol("record-id");
    class cS extends OF {
      constructor(FF) {
        let WF, SF, CF, AF;
        super(FF), this.offset = 0;
        let uF = VW.prototype.utf8Write ? function(FF, WF) {
            return DW.utf8Write(FF, WF, DW.byteLength - WF)
          } : !(!QW || !QW.encodeInto) && function(FF, WF) {
            return QW.encodeInto(FF, DW.subarray(WF)).written
          },
          hF = this;
        FF || (FF = {});
        let bW = FF && FF.sequential,
          dF = FF.structures || FF.saveStructures,
          PF = FF.maxSharedStructures;
        if (null == PF && (PF = dF ? 32 : 0), PF > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        FF.structuredClone && void 0 == FF.moreTypes && (this.moreTypes = !0);
        let RF = FF.maxOwnStructures;
        null == RF && (RF = dF ? 32 : 64), this.structures || 0 == FF.useRecords || (this.structures = []);
        let iW = PF > 32 || RF + PF > 64,
          eF = PF + 64,
          EF = PF + RF + 64;
        if (EF > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let QF = [],
          rW = 0,
          gW = 0;
        this.pack = this.encode = function(FF, uF) {
          if (DW || (DW = new qS(8192), mS = DW.dataView || (DW.dataView = new DataView(DW.buffer, 0, 8192)), ZW = 0), OW = DW.length - 10, OW - ZW < 2048 ? (DW = new qS(DW.length), mS = DW.dataView || (DW.dataView = new DataView(DW.buffer, 0, DW.length)), OW = DW.length - 10, ZW = 0) : ZW = ZW + 7 & 2147483640, WF = ZW, uF & pW && (ZW += 255 & uF), AF = hF.structuredClone ? new Map : null, hF.bundleStrings && "string" !== typeof FF ? (oW = [], oW.size = 1 / 0) : oW = null, CF = hF.structures, CF) {
            CF.uninitialized && (CF = hF._mergeStructures(hF.getStructures()));
            let FF = CF.sharedLength || 0;
            if (FF > PF) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + CF.sharedLength);
            if (!CF.transitions) {
              CF.transitions = Object.create(null);
              for (let WF = 0; WF < FF; WF++) {
                let FF = CF[WF];
                if (!FF) continue;
                let SF, AF = CF.transitions;
                for (let WF = 0, CF = FF.length; WF < CF; WF++) {
                  let CF = FF[WF];
                  SF = AF[CF], SF || (SF = AF[CF] = Object.create(null)), AF = SF
                }
                AF[MW] = WF + 64
              }
              this.lastNamedStructuresLength = FF
            }
            bW || (CF.nextId = FF + 64)
          }
          let dF;
          SF && (SF = !1);
          try {
            hF.randomAccessStructure && FF && FF.constructor && FF.constructor === Object ? OF(FF) : aW(FF);
            let SF = oW;
            if (oW && fW(WF, aW, 0), AF && AF.idsToInsert) {
              let FF = AF.idsToInsert.sort(((FF, WF) => FF.offset > WF.offset ? 1 : -1)),
                CF = FF.length,
                uF = -1;
              for (; SF && CF > 0;) {
                let AF = FF[--CF].offset + WF;
                AF < SF.stringsPosition + WF && -1 === uF && (uF = 0), AF > SF.position + WF ? uF >= 0 && (uF += 6) : (uF >= 0 && (mS.setUint32(SF.position + WF, mS.getUint32(SF.position + WF) + uF), uF = -1), SF = SF.previous, CF++)
              }
              uF >= 0 && SF && mS.setUint32(SF.position + WF, mS.getUint32(SF.position + WF) + uF), ZW += 6 * FF.length, ZW > OW && DF(ZW), hF.offset = ZW;
              let bW = function(FF, WF) {
                let SF, CF = 6 * WF.length,
                  AF = FF.length - CF;
                for (; SF = WF.pop();) {
                  let WF = SF.offset,
                    uF = SF.id;
                  FF.copyWithin(WF + CF, WF, AF), CF -= 6;
                  let hF = WF + CF;
                  FF[hF++] = 214, FF[hF++] = 105, FF[hF++] = uF >> 24, FF[hF++] = uF >> 16 & 255, FF[hF++] = uF >> 8 & 255, FF[hF++] = 255 & uF, AF = WF
                }
                return FF
              }(DW.subarray(WF, ZW), FF);
              return AF = null, bW
            }
            return hF.offset = ZW, uF & vS ? (DW.start = WF, DW.end = ZW, DW) : DW.subarray(WF, ZW)
          } catch (CS) {
            throw dF = CS, CS
          } finally {
            if (CF && (tW(), SF && hF.saveStructures)) {
              let SF = CF.sharedLength || 0,
                AF = DW.subarray(WF, ZW),
                bW = sW(CF, hF);
              if (!dF) return !1 === hF.saveStructures(bW, bW.isCompatible) ? hF.pack(FF, uF) : (hF.lastNamedStructuresLength = SF, DW.length > 1073741824 && (DW = null), AF)
            }
            DW.length > 1073741824 && (DW = null), uF & JW && (ZW = WF)
          }
        };
        const tW = () => {
            gW < 10 && gW++;
            let FF = CF.sharedLength || 0;
            if (CF.length > FF && !bW && (CF.length = FF), rW > 1e4) CF.transitions = null, gW = 0, rW = 0, QF.length > 0 && (QF = []);
            else if (QF.length > 0 && !bW) {
              for (let FF = 0, WF = QF.length; FF < WF; FF++) QF[FF][MW] = 0;
              QF = []
            }
          },
          TF = FF => {
            var WF = FF.length;
            WF < 16 ? DW[ZW++] = 144 | WF : WF < 65536 ? (DW[ZW++] = 220, DW[ZW++] = WF >> 8, DW[ZW++] = 255 & WF) : (DW[ZW++] = 221, mS.setUint32(ZW, WF), ZW += 4);
            for (let SF = 0; SF < WF; SF++) aW(FF[SF])
          },
          aW = FF => {
            ZW > OW && (DW = DF(ZW));
            var SF, CF = typeof FF;
            if ("string" === CF) {
              let CF, AF = FF.length;
              if (oW && AF >= 4 && AF < 4096) {
                if ((oW.size += AF) > 21760) {
                  let FF, SF, CF = (oW[0] ? 3 * oW[0].length + oW[1].length : 0) + 10;
                  ZW + CF > OW && (DW = DF(ZW + CF)), oW.position ? (SF = oW, DW[ZW] = 200, ZW += 3, DW[ZW++] = 98, FF = ZW - WF, ZW += 4, fW(WF, aW, 0), mS.setUint16(FF + WF - 3, ZW - WF - FF)) : (DW[ZW++] = 214, DW[ZW++] = 98, FF = ZW - WF, ZW += 4), oW = ["", ""], oW.previous = SF, oW.size = 0, oW.position = FF
                }
                let SF = YW.test(FF);
                return oW[SF ? 0 : 1] += FF, DW[ZW++] = 193, void aW(SF ? -AF : AF)
              }
              CF = AF < 32 ? 1 : AF < 256 ? 2 : AF < 65536 ? 3 : 5;
              let hF = 3 * AF;
              if (ZW + hF > OW && (DW = DF(ZW + hF)), AF < 64 || !uF) {
                let WF, uF, hF, bW = ZW + CF;
                for (WF = 0; WF < AF; WF++) uF = FF.charCodeAt(WF), uF < 128 ? DW[bW++] = uF : uF < 2048 ? (DW[bW++] = uF >> 6 | 192, DW[bW++] = 63 & uF | 128) : 55296 === (64512 & uF) && 56320 === (64512 & (hF = FF.charCodeAt(WF + 1))) ? (uF = 65536 + ((1023 & uF) << 10) + (1023 & hF), WF++, DW[bW++] = uF >> 18 | 240, DW[bW++] = uF >> 12 & 63 | 128, DW[bW++] = uF >> 6 & 63 | 128, DW[bW++] = 63 & uF | 128) : (DW[bW++] = uF >> 12 | 224, DW[bW++] = uF >> 6 & 63 | 128, DW[bW++] = 63 & uF | 128);
                SF = bW - ZW - CF
              } else SF = uF(FF, ZW + CF);
              SF < 32 ? DW[ZW++] = 160 | SF : SF < 256 ? (CF < 2 && DW.copyWithin(ZW + 2, ZW + 1, ZW + 1 + SF), DW[ZW++] = 217, DW[ZW++] = SF) : SF < 65536 ? (CF < 3 && DW.copyWithin(ZW + 3, ZW + 2, ZW + 2 + SF), DW[ZW++] = 218, DW[ZW++] = SF >> 8, DW[ZW++] = 255 & SF) : (CF < 5 && DW.copyWithin(ZW + 5, ZW + 3, ZW + 3 + SF), DW[ZW++] = 219, mS.setUint32(ZW, SF), ZW += 4), ZW += SF
            } else if ("number" === CF)
              if (FF >>> 0 === FF) FF < 32 || FF < 128 && !1 === this.useRecords || FF < 64 && !this.randomAccessStructure ? DW[ZW++] = FF : FF < 256 ? (DW[ZW++] = 204, DW[ZW++] = FF) : FF < 65536 ? (DW[ZW++] = 205, DW[ZW++] = FF >> 8, DW[ZW++] = 255 & FF) : (DW[ZW++] = 206, mS.setUint32(ZW, FF), ZW += 4);
              else if ((FF | 0) === FF) FF >= -32 ? DW[ZW++] = 256 + FF : FF >= -128 ? (DW[ZW++] = 208, DW[ZW++] = FF + 256) : FF >= -32768 ? (DW[ZW++] = 209, mS.setInt16(ZW, FF), ZW += 2) : (DW[ZW++] = 210, mS.setInt32(ZW, FF), ZW += 4);
            else {
              let WF;
              if ((WF = this.useFloat32) > 0 && FF < 4294967296 && FF >= -2147483648) {
                let SF;
                if (DW[ZW++] = 202, mS.setFloat32(ZW, FF), WF < 4 || ((SF = FF * bS[(127 & DW[ZW]) << 1 | DW[ZW + 1] >> 7]) | 0) === SF) return void(ZW += 4);
                ZW--
              }
              DW[ZW++] = 203, mS.setFloat64(ZW, FF), ZW += 8
            } else if ("object" === CF || "function" === CF)
              if (FF) {
                if (AF) {
                  let SF = AF.get(FF);
                  if (SF) {
                    if (!SF.id) {
                      let FF = AF.idsToInsert || (AF.idsToInsert = []);
                      SF.id = FF.push(SF)
                    }
                    return DW[ZW++] = 214, DW[ZW++] = 112, mS.setUint32(ZW, SF.id), void(ZW += 4)
                  }
                  AF.set(FF, {
                    offset: ZW - WF
                  })
                }
                let uF = FF.constructor;
                if (uF === Object) NF(FF);
                else if (uF === Array) TF(FF);
                else if (uF === Map)
                  if (this.mapAsEmptyObject) DW[ZW++] = 128;
                  else {
                    (SF = FF.size) < 16 ? DW[ZW++] = 128 | SF : SF < 65536 ? (DW[ZW++] = 222, DW[ZW++] = SF >> 8, DW[ZW++] = 255 & SF) : (DW[ZW++] = 223, mS.setUint32(ZW, SF), ZW += 4);
                    for (let [WF, SF] of FF) aW(WF), aW(SF)
                  }
                else {
                  for (let WF = 0, SF = rS.length; WF < SF; WF++) {
                    if (FF instanceof gS[WF]) {
                      let SF = rS[WF];
                      if (SF.write) {
                        SF.type && (DW[ZW++] = 212, DW[ZW++] = SF.type, DW[ZW++] = 0);
                        let WF = SF.write.call(this, FF);
                        return void(WF === FF ? Array.isArray(FF) ? TF(FF) : NF(FF) : aW(WF))
                      }
                      let CF, AF = DW,
                        uF = mS,
                        hF = ZW;
                      DW = null;
                      try {
                        CF = SF.pack.call(this, FF, (FF => (DW = AF, AF = null, ZW += FF, ZW > OW && DF(ZW), {
                          target: DW,
                          targetView: mS,
                          position: ZW - FF
                        })), aW)
                      } finally {
                        AF && (DW = AF, mS = uF, ZW = hF, OW = DW.length - 10)
                      }
                      return void(CF && (CF.length + ZW > OW && DF(CF.length + ZW), ZW = IW(CF, DW, ZW, SF.type)))
                    }
                  }
                  if (Array.isArray(FF)) TF(FF);
                  else {
                    if (FF.toJSON) {
                      const WF = FF.toJSON();
                      if (WF !== FF) return aW(WF)
                    }
                    if ("function" === CF) return aW(this.writeFunction && this.writeFunction(FF));
                    NF(FF)
                  }
                }
              } else DW[ZW++] = 192;
            else if ("boolean" === CF) DW[ZW++] = FF ? 195 : 194;
            else if ("bigint" === CF) {
              if (FF < BigInt(1) << BigInt(63) && FF >= -(BigInt(1) << BigInt(63))) DW[ZW++] = 211, mS.setBigInt64(ZW, FF);
              else if (FF < BigInt(1) << BigInt(64) && FF > 0) DW[ZW++] = 207, mS.setBigUint64(ZW, FF);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return aW(FF.toString());
                  if (this.useBigIntExtension && FF < BigInt(2) ** BigInt(1023) && FF > -(BigInt(2) ** BigInt(1023))) {
                    DW[ZW++] = 199, ZW++, DW[ZW++] = 66;
                    let WF, SF = [];
                    do {
                      let CF = FF & BigInt(255);
                      WF = (CF & BigInt(128)) === (FF < BigInt(0) ? BigInt(128) : BigInt(0)), SF.push(CF), FF >>= BigInt(8)
                    } while (FF !== BigInt(0) && FF !== BigInt(-1) || !WF);
                    DW[ZW - 2] = SF.length;
                    for (let FF = SF.length; FF > 0;) DW[ZW++] = Number(SF[--FF]);
                    return
                  }
                  throw new RangeError(FF + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                DW[ZW++] = 203, mS.setFloat64(ZW, Number(FF))
              }
              ZW += 8
            } else {
              if ("undefined" !== CF) throw new Error("Unknown type: " + CF);
              this.encodeUndefinedAsNil ? DW[ZW++] = 192 : (DW[ZW++] = 212, DW[ZW++] = 0, DW[ZW++] = 0)
            }
          },
          kW = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? FF => {
            let WF;
            if (this.skipValues) {
              WF = [];
              for (let SF in FF) "function" === typeof FF.hasOwnProperty && !FF.hasOwnProperty(SF) || this.skipValues.includes(FF[SF]) || WF.push(SF)
            } else WF = Object.keys(FF);
            let SF, CF = WF.length;
            if (CF < 16 ? DW[ZW++] = 128 | CF : CF < 65536 ? (DW[ZW++] = 222, DW[ZW++] = CF >> 8, DW[ZW++] = 255 & CF) : (DW[ZW++] = 223, mS.setUint32(ZW, CF), ZW += 4), this.coercibleKeyAsNumber)
              for (let AF = 0; AF < CF; AF++) {
                SF = WF[AF];
                let CF = Number(SF);
                aW(isNaN(CF) ? SF : CF), aW(FF[SF])
              } else
                for (let AF = 0; AF < CF; AF++) aW(SF = WF[AF]), aW(FF[SF])
          } : FF => {
            DW[ZW++] = 222;
            let SF = ZW - WF;
            ZW += 2;
            let CF = 0;
            for (let WF in FF)("function" !== typeof FF.hasOwnProperty || FF.hasOwnProperty(WF)) && (aW(WF), aW(FF[WF]), CF++);
            if (CF > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            DW[SF++ + WF] = CF >> 8, DW[SF + WF] = 255 & CF
          },
          qW = !1 === this.useRecords ? kW : FF.progressiveRecords && !iW ? FF => {
            let SF, AF, uF = CF.transitions || (CF.transitions = Object.create(null)),
              hF = ZW++ - WF;
            for (let bW in FF)
              if ("function" !== typeof FF.hasOwnProperty || FF.hasOwnProperty(bW)) {
                if (SF = uF[bW], SF) uF = SF;
                else {
                  let dF = Object.keys(FF),
                    PF = uF;
                  uF = CF.transitions;
                  let RF = 0;
                  for (let FF = 0, WF = dF.length; FF < WF; FF++) {
                    let WF = dF[FF];
                    SF = uF[WF], SF || (SF = uF[WF] = Object.create(null), RF++), uF = SF
                  }
                  hF + WF + 1 == ZW ? (ZW--, LF(uF, dF, RF)) : mW(uF, dF, hF, RF), AF = !0, uF = PF[bW]
                }
                aW(FF[bW])
              } if (!AF) {
              let SF = uF[MW];
              SF ? DW[hF + WF] = SF : mW(uF, Object.keys(FF), hF, 0)
            }
          } : FF => {
            let WF, SF = CF.transitions || (CF.transitions = Object.create(null)),
              AF = 0;
            for (let CF in FF)("function" !== typeof FF.hasOwnProperty || FF.hasOwnProperty(CF)) && (WF = SF[CF], WF || (WF = SF[CF] = Object.create(null), AF++), SF = WF);
            let uF = SF[MW];
            uF ? uF >= 96 && iW ? (DW[ZW++] = 96 + (31 & (uF -= 96)), DW[ZW++] = uF >> 5) : DW[ZW++] = uF : LF(SF, SF.__keys__ || Object.keys(FF), AF);
            for (let CF in FF)("function" !== typeof FF.hasOwnProperty || FF.hasOwnProperty(CF)) && aW(FF[CF])
          },
          VF = "function" == typeof this.useRecords && this.useRecords,
          NF = VF ? FF => {
            VF(FF) ? qW(FF) : kW(FF)
          } : qW,
          DF = FF => {
            let SF;
            if (FF > 16777216) {
              if (FF - WF > NW) throw new Error("Packed buffer would be larger than maximum buffer size");
              SF = Math.min(NW, 4096 * Math.round(Math.max((FF - WF) * (FF > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else SF = 1 + (Math.max(FF - WF << 2, DW.length - 1) >> 12) << 12;
            let CF = new qS(SF);
            return mS = CF.dataView || (CF.dataView = new DataView(CF.buffer, 0, SF)), FF = Math.min(FF, DW.length), DW.copy ? DW.copy(CF, 0, WF, FF) : CF.set(DW.slice(WF, FF)), ZW -= WF, WF = 0, OW = CF.length - 10, DW = CF
          },
          LF = (FF, WF, AF) => {
            let uF = CF.nextId;
            uF || (uF = 64), uF < eF && this.shouldShareStructure && !this.shouldShareStructure(WF) ? (uF = CF.nextOwnId, uF < EF || (uF = eF), CF.nextOwnId = uF + 1) : (uF >= EF && (uF = eF), CF.nextId = uF + 1);
            let hF = WF.highByte = uF >= 96 && iW ? uF - 96 >> 5 : -1;
            FF[MW] = uF, FF.__keys__ = WF, CF[uF - 64] = WF, uF < eF ? (WF.isShared = !0, CF.sharedLength = uF - 63, SF = !0, hF >= 0 ? (DW[ZW++] = 96 + (31 & uF), DW[ZW++] = hF) : DW[ZW++] = uF) : (hF >= 0 ? (DW[ZW++] = 213, DW[ZW++] = 114, DW[ZW++] = 96 + (31 & uF), DW[ZW++] = hF) : (DW[ZW++] = 212, DW[ZW++] = 114, DW[ZW++] = uF), AF && (rW += gW * AF), QF.length >= RF && (QF.shift()[MW] = 0), QF.push(FF), aW(WF))
          },
          mW = (FF, SF, CF, AF) => {
            let uF = DW,
              hF = ZW,
              bW = OW,
              dF = WF;
            DW = LW, ZW = 0, WF = 0, DW || (LW = DW = new qS(8192)), OW = DW.length - 10, LF(FF, SF, AF), LW = DW;
            let PF = ZW;
            if (DW = uF, ZW = hF, OW = bW, WF = dF, PF > 1) {
              let FF = ZW + PF - 1;
              FF > OW && DF(FF);
              let SF = CF + WF;
              DW.copyWithin(SF + PF, SF + 1, ZW), DW.set(LW.slice(0, PF), SF), ZW = FF
            } else DW[CF + WF] = LW[0]
          },
          OF = FF => {
            let AF = xS(FF, DW, WF, ZW, CF, DF, ((FF, WF, CF) => {
              if (CF) return SF = !0;
              ZW = WF;
              let AF = DW;
              return aW(FF), tW(), AF !== DW ? {
                position: ZW,
                targetView: mS,
                target: DW
              } : ZW
            }), this);
            if (0 === AF) return NF(FF);
            ZW = AF
          }
      }
      useBuffer(FF) {
        DW = FF, mS = DW.dataView || (DW.dataView = new DataView(DW.buffer, DW.byteOffset, DW.byteLength)), ZW = 0
      }
      set position(FF) {
        ZW = FF
      }
      get position() {
        return ZW
      }
      set buffer(FF) {
        DW = FF
      }
      get buffer() {
        return DW
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function GW(FF, WF, SF, CF) {
      let AF = FF.byteLength;
      if (AF + 1 < 256) {
        var {
          target: uF,
          position: hF
        } = SF(4 + AF);
        uF[hF++] = 199, uF[hF++] = AF + 1
      } else if (AF + 1 < 65536) {
        var {
          target: uF,
          position: hF
        } = SF(5 + AF);
        uF[hF++] = 200, uF[hF++] = AF + 1 >> 8, uF[hF++] = AF + 1 & 255
      } else {
        var {
          target: uF,
          position: hF,
          targetView: bW
        } = SF(7 + AF);
        uF[hF++] = 201, bW.setUint32(hF, AF + 1), hF += 4
      }
      uF[hF++] = 116, uF[hF++] = WF, FF.buffer || (FF = new Uint8Array(FF)), uF.set(new Uint8Array(FF.buffer, FF.byteOffset, FF.byteLength), hF)
    }

    function zS(FF, WF) {
      let SF = FF.byteLength;
      var CF, AF;
      if (SF < 256) {
        var {
          target: CF,
          position: AF
        } = WF(SF + 2);
        CF[AF++] = 196, CF[AF++] = SF
      } else if (SF < 65536) {
        var {
          target: CF,
          position: AF
        } = WF(SF + 3);
        CF[AF++] = 197, CF[AF++] = SF >> 8, CF[AF++] = 255 & SF
      } else {
        var {
          target: CF,
          position: AF,
          targetView: uF
        } = WF(SF + 5);
        CF[AF++] = 198, uF.setUint32(AF, SF), AF += 4
      }
      CF.set(FF, AF)
    }

    function IW(FF, WF, SF, CF) {
      let AF = FF.length;
      switch (AF) {
        case 1:
          WF[SF++] = 212;
          break;
        case 2:
          WF[SF++] = 213;
          break;
        case 4:
          WF[SF++] = 214;
          break;
        case 8:
          WF[SF++] = 215;
          break;
        case 16:
          WF[SF++] = 216;
          break;
        default:
          AF < 256 ? (WF[SF++] = 199, WF[SF++] = AF) : AF < 65536 ? (WF[SF++] = 200, WF[SF++] = AF >> 8, WF[SF++] = 255 & AF) : (WF[SF++] = 201, WF[SF++] = AF >> 24, WF[SF++] = AF >> 16 & 255, WF[SF++] = AF >> 8 & 255, WF[SF++] = 255 & AF)
      }
      return WF[SF++] = CF, WF.set(FF, SF), SF += AF
    }

    function fW(FF, WF, SF) {
      if (oW.length > 0) {
        mS.setUint32(oW.position + FF, ZW + SF - oW.position - FF), oW.stringsPosition = ZW - FF;
        let CF = oW;
        oW = null, WF(CF[0]), WF(CF[1])
      }
    }

    function yS(FF) {
      if (FF.Class) {
        if (!FF.pack && !FF.write) throw new Error("Extension has no pack or write function");
        if (FF.pack && !FF.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        gS.unshift(FF.Class), rS.unshift(FF)
      }! function(FF) {
        FF.unpack ? TF[FF.type] = FF.unpack : TF[FF.type] = FF
      }(FF)
    }

    function sW(FF, WF) {
      return FF.isCompatible = FF => {
        let SF = !FF || (WF.lastNamedStructuresLength || 0) === FF.length;
        return SF || WF._mergeStructures(FF), SF
      }, FF
    }
    gS = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, kW], rS = [{
      pack(FF, WF, SF) {
        let CF = FF.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === FF.getMilliseconds()) && CF >= 0 && CF < 4294967296) {
          let {
            target: FF,
            targetView: SF,
            position: AF
          } = WF(6);
          FF[AF++] = 214, FF[AF++] = 255, SF.setUint32(AF, CF)
        } else if (CF > 0 && CF < 4294967296) {
          let {
            target: SF,
            targetView: AF,
            position: uF
          } = WF(10);
          SF[uF++] = 215, SF[uF++] = 255, AF.setUint32(uF, 4e6 * FF.getMilliseconds() + (CF / 1e3 / 4294967296 | 0)), AF.setUint32(uF + 4, CF)
        } else if (isNaN(CF)) {
          if (this.onInvalidDate) return WF(0), SF(this.onInvalidDate());
          let {
            target: FF,
            targetView: CF,
            position: AF
          } = WF(3);
          FF[AF++] = 212, FF[AF++] = 255, FF[AF++] = 255
        } else {
          let {
            target: SF,
            targetView: AF,
            position: uF
          } = WF(15);
          SF[uF++] = 199, SF[uF++] = 12, SF[uF++] = 255, AF.setUint32(uF, 1e6 * FF.getMilliseconds()), AF.setBigInt64(uF + 4, BigInt(Math.floor(CF)))
        }
      }
    }, {
      pack(FF, WF, SF) {
        if (this.setAsEmptyObject) return WF(0), SF({});
        let CF = Array.from(FF),
          {
            target: AF,
            position: uF
          } = WF(this.moreTypes ? 3 : 0);
        this.moreTypes && (AF[uF++] = 212, AF[uF++] = 115, AF[uF++] = 0), SF(CF)
      }
    }, {
      pack(FF, WF, SF) {
        let {
          target: CF,
          position: AF
        } = WF(this.moreTypes ? 3 : 0);
        this.moreTypes && (CF[AF++] = 212, CF[AF++] = 101, CF[AF++] = 0), SF([FF.name, FF.message, FF.cause])
      }
    }, {
      pack(FF, WF, SF) {
        let {
          target: CF,
          position: AF
        } = WF(this.moreTypes ? 3 : 0);
        this.moreTypes && (CF[AF++] = 212, CF[AF++] = 120, CF[AF++] = 0), SF([FF.source, FF.flags])
      }
    }, {
      pack(FF, WF) {
        this.moreTypes ? GW(FF, 16, WF) : zS(kS ? Buffer.from(FF) : new Uint8Array(FF), WF)
      }
    }, {
      pack(FF, WF) {
        let SF = FF.constructor;
        SF !== VW && this.moreTypes ? GW(FF, SW.indexOf(SF.name), WF) : zS(FF, WF)
      }
    }, {
      pack(FF, WF) {
        let {
          target: SF,
          position: CF
        } = WF(1);
        SF[CF] = 193
      }
    }];
    let nW = new cS({
      useRecords: !1
    });
    const HW = nW.pack,
      KW = nW.pack,
      wW = cS,
      {
        NEVER: XW,
        ALWAYS: UW,
        DECIMAL_ROUND: BW,
        DECIMAL_FIT: jS
      } = EW,
      vS = 512,
      JW = 1024,
      pW = 2048;
    const lW = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!FF || "object" !== typeof FF) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const SF = new OF(WF);
        let CF;
        const AF = FF => {
          let WF;
          CF && (FF = Buffer.concat([CF, FF]), CF = void 0);
          try {
            WF = SF.unpackMultiple(FF)
          } catch (AF) {
            if (!AF.incomplete) throw AF;
            CF = FF.slice(AF.lastPosition), WF = AF.values
          }
          return WF
        };
        return "function" === typeof FF[Symbol.iterator] ? function*() {
          for (const WF of FF) yield* AF(WF)
        }() : "function" === typeof FF[Symbol.asyncIterator] ? async function*() {
          for await (const WF of FF) yield* AF(WF)
        }(): void 0
      },
      FS = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (FF && "object" === typeof FF) {
          if ("function" === typeof FF[Symbol.iterator]) return function*(FF, WF) {
            const SF = new cS(WF);
            for (const CF of FF) yield SF.pack(CF)
          }(FF, WF);
          if ("function" === typeof FF.then || "function" === typeof FF[Symbol.asyncIterator]) return async function*(FF, WF) {
            const SF = new cS(WF);
            for await (const CF of FF) yield SF.pack(CF)
          }(FF, WF);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      WS = !1,
      SS = !0
  },
  8039: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      $changes: () => rW,
      $childType: () => gW,
      $decoder: () => RF,
      $deleteByIndex: () => EF,
      $encoder: () => PF,
      $filter: () => iW,
      $getByIndex: () => eF,
      $numFields: () => mW,
      $refId: () => bW,
      $track: () => dF,
      $values: () => qW,
      ArraySchema: () => SC,
      Callbacks: () => SA,
      ChangeTree: () => ZS,
      CollectionSchema: () => uC,
      Decoder: () => BC,
      Encoder: () => KC,
      FieldBuilder: () => dC,
      MapSchema: () => AC,
      Metadata: () => BW,
      OPERATION: () => AF,
      Reflection: () => pC,
      ReflectionField: () => vA,
      ReflectionType: () => JC,
      Root: () => oC,
      Schema: () => xA,
      SetSchema: () => hC,
      StateCallbackStrategy: () => WA,
      StateView: () => zA,
      StreamSchema: () => bA,
      TypeContext: () => sW,
      createPool: () => AA,
      decode: () => aS,
      decodeKeyValueOperation: () => vC,
      decodeSchemaOperation: () => jC,
      defineCustomTypes: () => NW,
      defineTypes: () => LC,
      deprecated: () => NC,
      dumpChanges: () => OC,
      encode: () => WW,
      encodeArray: () => fS,
      encodeIndexedEntry: () => zC,
      encodeKeyValueOperation: () => IS,
      encodeMapEntry: () => GS,
      encodeSchemaOperation: () => cC,
      rA: () => rA,
      fullStateOnly: () => aA,
      getDecoderStateCallbacks: () => lC,
      getEncodeDescriptor: () => FS,
      getRawChangesCallback: () => FA,
      isBuilder: () => PC,
      patchOnly: () => TC,
      registerType: () => VW,
      schema: () => mA,
      t: () => EC,
      type: () => kA,
      unreliable: () => tA,
      view: () => gA
    });
    const CF = 255;
    var AF;

    function uF(FF) {
      Object.defineProperty(FF, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(FF) {
      FF[FF.ADD = 128] = "ADD", FF[FF.REPLACE = 0] = "REPLACE", FF[FF.DELETE = 64] = "DELETE", FF[FF.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", FF[FF.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", FF[FF.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", FF[FF.CLEAR = 10] = "CLEAR", FF[FF.REVERSE = 15] = "REVERSE", FF[FF.MOVE = 32] = "MOVE", FF[FF.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", FF[FF.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(AF || (AF = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const hF = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const FF = "colyseus.symbolRegistry",
        WF = hF[FF] || (hF[FF] = Object.create(null));
      Symbol.for = function(FF) {
        return WF[FF] || (WF[FF] = Symbol(FF))
      }, Symbol.keyFor = function(FF) {
        for (const SF in WF)
          if (WF[SF] === FF) return SF
      }
    }
    const bW = Symbol.for("$refId"),
      dF = "~track",
      PF = "~encoder",
      RF = "~decoder",
      iW = "~filter",
      eF = "~getByIndex",
      EF = "~deleteByIndex",
      QF = "~resyncPrune",
      rW = Symbol.for("$changes"),
      gW = Symbol.for("$childType"),
      tW = Symbol.for("$proxyTarget"),
      TF = "~onEncodeEnd",
      aW = "~reset",
      kW = "~onDecodeEnd",
      qW = Symbol.for("$values"),
      VF = "~builder",
      NF = "~descriptors",
      DF = "~__encodeDescriptor",
      LF = "~encoders",
      mW = "~__numFields",
      OF = "~__refTypeFieldIndexes",
      xW = "~__viewFieldIndexes",
      ZF = "$__fieldIndexesByViewTag",
      oF = "~__unreliableFieldIndexes",
      YF = "~__patchOnlyFieldIndexes",
      MF = "~__fullSyncSkipIndexes",
      cW = "~__fullStateOnlyFieldIndexes",
      GF = "~__streamFieldIndexes",
      zW = "~__streamPriorities";
    let IF;
    try {
      IF = new TextEncoder
    } catch (uA) {}
    const fF = new ArrayBuffer(8),
      yW = new Int32Array(fF),
      sF = new Float32Array(fF),
      nF = new Float64Array(fF),
      HF = new BigInt64Array(fF),
      KF = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(FF, WF) {
        for (var SF = 0, CF = 0, AF = 0, uF = FF.length; AF < uF; AF++)(SF = FF.charCodeAt(AF)) < 128 ? CF += 1 : SF < 2048 ? CF += 2 : SF < 55296 || SF >= 57344 ? CF += 3 : (AF++, CF += 4);
        return CF
      };

    function wF(FF, WF, SF) {
      for (var CF = 0, AF = 0, uF = WF.length; AF < uF; AF++)(CF = WF.charCodeAt(AF)) < 128 ? FF[SF.offset++] = CF : CF < 2048 ? (FF[SF.offset] = 192 | CF >> 6, FF[SF.offset + 1] = 128 | 63 & CF, SF.offset += 2) : CF < 55296 || CF >= 57344 ? (FF[SF.offset] = 224 | CF >> 12, FF[SF.offset + 1] = 128 | CF >> 6 & 63, FF[SF.offset + 2] = 128 | 63 & CF, SF.offset += 3) : (AF++, CF = 65536 + ((1023 & CF) << 10 | 1023 & WF.charCodeAt(AF)), FF[SF.offset] = 240 | CF >> 18, FF[SF.offset + 1] = 128 | CF >> 12 & 63, FF[SF.offset + 2] = 128 | CF >> 6 & 63, FF[SF.offset + 3] = 128 | 63 & CF, SF.offset += 4)
    }

    function XF(FF, WF, SF) {
      FF[SF.offset++] = 255 & WF
    }

    function UF(FF, WF, SF) {
      FF[SF.offset++] = 255 & WF, FF[SF.offset++] = WF >> 8 & 255
    }

    function BF(FF, WF, SF) {
      FF[SF.offset++] = 255 & WF, FF[SF.offset++] = WF >> 8 & 255
    }

    function jW(FF, WF, SF) {
      FF[SF.offset++] = 255 & WF, FF[SF.offset++] = WF >> 8 & 255, FF[SF.offset++] = WF >> 16 & 255, FF[SF.offset++] = WF >> 24 & 255
    }

    function vW(FF, WF, SF) {
      const CF = WF >> 24,
        AF = WF >> 16,
        uF = WF >> 8,
        hF = WF;
      FF[SF.offset++] = 255 & hF, FF[SF.offset++] = 255 & uF, FF[SF.offset++] = 255 & AF, FF[SF.offset++] = 255 & CF
    }

    function JF(FF, WF, SF) {
      const CF = Math.floor(WF / Math.pow(2, 32));
      vW(FF, WF >>> 0, SF), vW(FF, CF, SF)
    }

    function pF(FF, WF, SF) {
      const CF = WF / Math.pow(2, 32) | 0;
      vW(FF, WF >>> 0, SF), vW(FF, CF, SF)
    }

    function lF(FF, WF, SF) {
      sF[0] = WF, jW(FF, yW[0], SF)
    }

    function FW(FF, WF, SF) {
      nF[0] = WF, jW(FF, yW[0], SF), jW(FF, yW[1], SF)
    }
    const WW = {
        int8: XF,
        uint8: function(FF, WF, SF) {
          FF[SF.offset++] = 255 & WF
        },
        int16: UF,
        uint16: BF,
        int32: jW,
        uint32: vW,
        int64: JF,
        uint64: pF,
        bigint64: function(FF, WF, SF) {
          HF[0] = BigInt.asIntN(64, WF), jW(FF, yW[0], SF), jW(FF, yW[1], SF)
        },
        biguint64: function(FF, WF, SF) {
          HF[0] = BigInt.asIntN(64, WF), jW(FF, yW[0], SF), jW(FF, yW[1], SF)
        },
        float32: lF,
        float64: FW,
        boolean: function(FF, WF, SF) {
          FF[SF.offset++] = WF ? 1 : 0
        },
        string: function(FF, WF, SF) {
          WF || (WF = "");
          let CF = KF(WF, "utf8"),
            AF = 0;
          if (CF < 32) FF[SF.offset++] = 160 | CF, AF = 1;
          else if (CF < 256) FF[SF.offset++] = 217, FF[SF.offset++] = CF, AF = 2;
          else if (CF < 65536) FF[SF.offset++] = 218, BF(FF, CF, SF), AF = 3;
          else {
            if (!(CF < 4294967296)) throw new Error("String too long");
            FF[SF.offset++] = 219, vW(FF, CF, SF), AF = 5
          }
          return wF(FF, WF, SF), AF + CF
        },
        number: function FF(WF, SF, CF) {
          return isNaN(SF) ? FF(WF, 0, CF) : isFinite(SF) ? SF !== (0 | SF) ? Math.abs(SF) <= 34028235e31 && (sF[0] = SF, Math.abs(Math.abs(sF[0]) - Math.abs(SF)) < 1e-4) ? (WF[CF.offset++] = 202, lF(WF, SF, CF), 5) : (WF[CF.offset++] = 203, FW(WF, SF, CF), 9) : SF >= 0 ? SF < 128 ? (WF[CF.offset++] = 255 & SF, 1) : SF < 256 ? (WF[CF.offset++] = 204, WF[CF.offset++] = 255 & SF, 2) : SF < 65536 ? (WF[CF.offset++] = 205, BF(WF, SF, CF), 3) : SF < 4294967296 ? (WF[CF.offset++] = 206, vW(WF, SF, CF), 5) : (WF[CF.offset++] = 207, pF(WF, SF, CF), 9) : SF >= -32 ? (WF[CF.offset++] = 224 | SF + 32, 1) : SF >= -128 ? (WF[CF.offset++] = 208, XF(WF, SF, CF), 2) : SF >= -32768 ? (WF[CF.offset++] = 209, UF(WF, SF, CF), 3) : SF >= -2147483648 ? (WF[CF.offset++] = 210, jW(WF, SF, CF), 5) : (WF[CF.offset++] = 211, JF(WF, SF, CF), 9) : FF(WF, SF > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, CF)
        },
        utf8Write: wF,
        utf8Length: KF
      },
      SW = new ArrayBuffer(8),
      CW = new Int32Array(SW),
      AW = new Float32Array(SW),
      uW = new Float64Array(SW),
      hW = new BigUint64Array(SW),
      bS = new BigInt64Array(SW);

    function dW(FF, WF, SF) {
      SF > FF.length - WF.offset && (SF = FF.length - WF.offset);
      for (var CF = "", AF = 0, uF = WF.offset, hF = WF.offset + SF; uF < hF; uF++) {
        var bW = FF[uF];
        if (0 !== (128 & bW))
          if (192 !== (224 & bW))
            if (224 !== (240 & bW)) {
              if (240 !== (248 & bW)) {
                console.error("decode.utf8Read(): Invalid byte " + bW + " at offset " + uF + ". Skip to end of string: " + (WF.offset + SF));
                break
              }(AF = (7 & bW) << 18 | (63 & FF[++uF]) << 12 | (63 & FF[++uF]) << 6 | 63 & FF[++uF]) >= 65536 ? (AF -= 65536, CF += String.fromCharCode(55296 + (AF >>> 10), 56320 + (1023 & AF))) : CF += String.fromCharCode(AF)
            } else CF += String.fromCharCode((15 & bW) << 12 | (63 & FF[++uF]) << 6 | 63 & FF[++uF]);
        else CF += String.fromCharCode((31 & bW) << 6 | 63 & FF[++uF]);
        else CF += String.fromCharCode(bW)
      }
      return WF.offset += SF, CF
    }

    function PW(FF, WF) {
      return RW(FF, WF) << 24 >> 24
    }

    function RW(FF, WF) {
      return FF[WF.offset++]
    }

    function iS(FF, WF) {
      return eW(FF, WF) << 16 >> 16
    }

    function eW(FF, WF) {
      return FF[WF.offset++] | FF[WF.offset++] << 8
    }

    function EW(FF, WF) {
      return FF[WF.offset++] | FF[WF.offset++] << 8 | FF[WF.offset++] << 16 | FF[WF.offset++] << 24
    }

    function QW(FF, WF) {
      return EW(FF, WF) >>> 0
    }

    function rS(FF, WF) {
      return CW[0] = EW(FF, WF), AW[0]
    }

    function gS(FF, WF) {
      return CW[0] = EW(FF, WF), CW[1] = EW(FF, WF), uW[0]
    }

    function tS(FF, WF) {
      const SF = QW(FF, WF);
      return EW(FF, WF) * Math.pow(2, 32) + SF
    }

    function TW(FF, WF) {
      const SF = QW(FF, WF);
      return QW(FF, WF) * Math.pow(2, 32) + SF
    }
    const aS = {
        utf8Read: dW,
        int8: PW,
        uint8: RW,
        int16: iS,
        uint16: eW,
        int32: EW,
        uint32: QW,
        float32: rS,
        float64: gS,
        int64: tS,
        uint64: TW,
        bigint64: function(FF, WF) {
          return CW[0] = EW(FF, WF), CW[1] = EW(FF, WF), bS[0]
        },
        biguint64: function(FF, WF) {
          return CW[0] = EW(FF, WF), CW[1] = EW(FF, WF), hW[0]
        },
        boolean: function(FF, WF) {
          return RW(FF, WF) > 0
        },
        string: function(FF, WF) {
          const SF = FF[WF.offset++];
          let CF;
          return SF < 192 ? CF = 31 & SF : 217 === SF ? CF = RW(FF, WF) : 218 === SF ? CF = eW(FF, WF) : 219 === SF && (CF = QW(FF, WF)), dW(FF, WF, CF)
        },
        number: function(FF, WF) {
          const SF = FF[WF.offset++];
          return SF < 128 ? SF : 202 === SF ? rS(FF, WF) : 203 === SF ? gS(FF, WF) : 204 === SF ? RW(FF, WF) : 205 === SF ? eW(FF, WF) : 206 === SF ? QW(FF, WF) : 207 === SF ? TW(FF, WF) : 208 === SF ? PW(FF, WF) : 209 === SF ? iS(FF, WF) : 210 === SF ? EW(FF, WF) : 211 === SF ? tS(FF, WF) : SF > 223 ? -1 * (255 - SF + 1) : void 0
        },
        stringCheck: function(FF, WF) {
          const SF = FF[WF.offset];
          return SF < 192 && SF > 160 || 217 === SF || 218 === SF || 219 === SF
        }
      },
      kS = {},
      qS = new Map;

    function VW(FF, WF) {
      WF.constructor && (Object.prototype.hasOwnProperty.call(WF, "constructor") && null == WF.constructor[Symbol.metadata] && uF(WF.constructor), qS.set(WF.constructor, FF), kS[FF] = WF), WF.encode && (WW[FF] = WF.encode), WF.decode && (aS[FF] = WF.decode)
    }

    function NW(FF) {
      for (const WF in FF) VW(WF, FF[WF]);
      return FF => kA(FF)
    }
    const DW = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function LW() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function mS(FF) {
      return FF._stream ??= LW()
    }

    function OW(FF, WF, SF) {
      0 === WF.activeViews.size && mS(FF).broadcastPending.add(SF)
    }

    function xS(FF, WF, SF, CF) {
      const uF = FF._stream;
      if (void 0 === uF) return !0;
      let hF = !1;
      return uF.broadcastPending.delete(CF) ? hF = !0 : uF.sentBroadcast.delete(CF) && uF.broadcastDeletes.add(CF), WF.forEachActiveView((FF => {
        const WF = uF.pendingByView.get(FF.id);
        if (WF?.has(CF)) return WF.delete(CF), void(hF = !0);
        const bW = uF.sentByView.get(FF.id);
        if (bW?.has(CF)) {
          bW.delete(CF);
          let WF = FF.changes.get(SF);
          void 0 === WF && (WF = new Map, FF.changes.set(SF, WF)), WF.set(CF, AF.DELETE)
        }
      })), hF
    }

    function ZW(FF, WF) {
      const SF = FF._stream?.pendingByView;
      if (void 0 === SF) return !1;
      for (const [CF, AF] of SF)
        if (AF.size > 0 && void 0 !== WF.activeViews.get(CF)?.deref()) return !0;
      return !1
    }

    function oW(FF) {
      const WF = FF._stream;
      return void 0 !== WF && (WF.broadcastPending.size > 0 || WF.broadcastDeletes.size > 0)
    }

    function YW(FF, WF, SF) {
      const CF = mS(FF);
      let AF = CF.pendingByView.get(WF);
      void 0 === AF && (AF = new Set, CF.pendingByView.set(WF, AF)), AF.add(SF)
    }

    function MW(FF, WF) {
      const SF = FF._stream;
      void 0 !== SF && (SF.pendingByView.delete(WF), SF.sentByView.delete(WF), SF.priorityByView?.delete(WF))
    }
    const cS = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function GW(FF) {
      if (null == FF || "object" !== typeof FF) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: WF,
        max: SF
      } = FF;
      if ("number" !== typeof WF || "number" !== typeof SF || !(SF > WF) || !Number.isFinite(WF) || !Number.isFinite(SF)) throw new Error(`t.quantized(): require finite min < max (got min=${WF}, max=${SF}).`);
      const CF = FF.bits ?? 16;
      if (8 !== CF && 16 !== CF && 32 !== CF) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${CF}).`);
      const AF = FF.mode ?? "clamp";
      if ("clamp" !== AF && "wrap" !== AF) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(AF)}).`);
      const uF = "wrap" === AF,
        hF = Math.pow(2, CF);
      return {
        min: WF,
        max: SF,
        bits: CF,
        wrap: uF,
        wire: cS[CF],
        range: SF - WF,
        span: uF ? hF : WF === -SF ? hF - 2 : hF - 1
      }
    }

    function zS(FF) {
      return null !== FF && "object" === typeof FF && void 0 !== FF.quantized
    }

    function IW(FF, WF) {
      if (FF.wrap) {
        if (!Number.isFinite(WF)) return 0;
        const SF = FF.range;
        let CF = (WF - FF.min) % SF;
        CF < 0 && (CF += SF);
        const AF = FF.span;
        return Math.floor(CF / SF * AF + .5) % AF
      }
      if (WF !== WF) return 0;
      const SF = WF < FF.min ? FF.min : WF > FF.max ? FF.max : WF;
      return Math.floor((SF - FF.min) / FF.range * FF.span + .5)
    }

    function fW(FF, WF) {
      return FF.min + WF / FF.span * FF.range
    }

    function yS(FF) {
      const WF = WW[FF.wire];
      return (SF, CF, AF) => WF(SF, IW(FF, CF), AF)
    }
    class sW {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(FF) {
        const WF = Object.getPrototypeOf(FF);
        if (WF !== xA) {
          let SF = sW.inheritedTypes.get(WF);
          SF || (SF = new Set, sW.inheritedTypes.set(WF, SF)), SF.add(FF)
        }
      }
      static cache(FF) {
        let WF = sW.cachedContexts.get(FF);
        return WF || (WF = new sW(FF), sW.cachedContexts.set(FF, WF)), WF
      }
      constructor(FF) {
        FF && this.discoverTypes(FF)
      }
      has(FF) {
        return this.schemas.has(FF)
      }
      get(FF) {
        return this.types[FF]
      }
      add(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(FF) && (this.types[WF] = FF, null == FF[Symbol.metadata] && BW.initialize(FF), this.schemas.set(FF, WF), !0)
      }
      getTypeId(FF) {
        return this.schemas.get(FF)
      }
      discoverTypes(FF) {
        if (!this.add(FF)) return;
        sW.inheritedTypes.get(FF)?.forEach((FF => {
          this.discoverTypes(FF)
        }));
        let WF = FF;
        for (;
          (WF = Object.getPrototypeOf(WF)) && WF !== xA && WF !== Function.prototype;) this.discoverTypes(WF);
        const SF = FF[Symbol.metadata];
        (SF[xW] || SF[GF]) && (this.hasFilters = !0);
        for (const CF in SF) {
          const FF = SF[CF].type;
          if ("string" !== typeof FF && !zS(FF))
            if ("function" === typeof FF) this.discoverTypes(FF);
            else {
              const WF = Object.values(FF)[0];
              if ("string" === typeof WF) continue;
              this.discoverTypes(WF)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function nW(FF) {
      const WF = KW(FF);
      return WF ? {
        complexTypeKlass: kS[WF],
        childType: FF[WF]
      } : {
        complexTypeKlass: !1,
        childType: FF
      }
    }

    function HW(FF, WF) {
      const SF = wW(FF),
        CF = KW(SF),
        AF = CF && KW(SF[CF]);
      if (AF) throw new Error(`${WF?`${WF}: `:""}@colyseus/schema: nested collections are not supported ("${CF}" of "${AF}"). Collections can only hold primitive types or Schema classes, wrap the inner ${AF} in a Schema class.`);
      return SF
    }

    function KW(FF) {
      return "object" === typeof FF && null !== FF ? Object.keys(FF).find((FF => void 0 !== kS[FF])) : void 0
    }

    function wW(FF) {
      if ("object" !== typeof FF || null === FF) return FF;
      if (Array.isArray(FF)) return {
        array: wW(FF[0])
      };
      const WF = function(FF) {
        const WF = Object.keys(FF),
          SF = WF.filter((FF => /\d+/.test(FF)));
        if (SF.length > 0 && SF.length === WF.length / 2 && FF[FF[SF[0]]] == SF[0]) return "number";
        if (WF.length > 0 && WF.every((WF => FF[WF] === WF))) return "string"
      }(FF);
      if (WF) return WF;
      if (zS(FF)) return "string" === typeof FF.quantized.wire ? FF : {
        quantized: GW(FF.quantized)
      };
      if (void 0 !== FF.type) return wW(FF.type);
      const SF = KW(FF);
      return SF && (FF[SF] = wW(FF[SF])), FF
    }
    const XW = [OF, oF, YF, MF, cW, GF, LF];

    function UW(FF, WF, SF) {
      FF[WF] || Object.defineProperty(FF, WF, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), FF[WF].push(SF)
    }
    const BW = {
        addField(FF, WF, SF, CF, AF) {
          if (WF >= 63) throw new Error(`Can't define field '${SF}'.\nSchema instances may only have up to 63 fields.`);
          FF[WF] = Object.assign(FF[WF] || {}, {
            type: CF,
            index: WF,
            name: SF
          }), Object.defineProperty(FF, NF, {
            value: FF[NF] || {},
            enumerable: !1,
            configurable: !0
          }), FF[NF][SF] = AF || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(FF, mW, {
            value: WF,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(FF, SF, {
            value: WF,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof FF[WF].type || zS(FF[WF].type) || (void 0 === FF[OF] && Object.defineProperty(FF, OF, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), FF[OF].push(WF));
          const uF = FF[WF].type;
          if (uF && "object" === typeof uF && void 0 !== uF.stream) {
            if (void 0 !== uF.array) throw new Error(DW);
            FF[WF].stream = !0, FF[GF] || Object.defineProperty(FF, GF, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), FF[GF].includes(WF) || FF[GF].push(WF);
            const AF = CF?.priority;
            "function" === typeof AF && BW.setStreamPriority(FF, SF, AF)
          }
        },
        setTag(FF, WF, SF) {
          const CF = FF[WF];
          if (FF[CF].tag = SF, FF[xW] || (Object.defineProperty(FF, xW, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(FF, ZF, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), FF[xW].push(CF), SF < 0) FF[ZF][SF] || (FF[ZF][SF] = []), FF[ZF][SF].push(CF);
          else
            for (let AF = SF; AF > 0; AF &= AF - 1) {
              const WF = AF & -AF;
              FF[ZF][WF] || (FF[ZF][WF] = []), FF[ZF][WF].push(CF)
            }
        },
        setUnreliable(FF, WF) {
          const SF = FF[WF];
          if ("string" !== typeof FF[SF].type) throw new Error(`@unreliable cannot be applied to ref-type field "${WF}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          FF[SF].unreliable = !0, FF[oF] || Object.defineProperty(FF, oF, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), FF[oF].push(SF)
        },
        setPatchOnly(FF, WF) {
          const SF = FF[WF];
          if (FF[SF].fullStateOnly) throw new Error(`field "${WF}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          FF[SF].patchOnly = !0, UW(FF, YF, SF), UW(FF, MF, SF)
        },
        setDeprecated(FF, WF) {
          const SF = FF[WF];
          FF[SF].deprecated = !0, UW(FF, MF, SF), Object.defineProperty(FF, SF, {
            value: FF[SF],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(FF, WF) {
          const SF = FF[WF];
          if (FF[SF].patchOnly) throw new Error(`field "${WF}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          FF[SF].fullStateOnly = !0, UW(FF, cW, SF)
        },
        setStream(FF, WF) {
          const SF = FF[WF];
          FF[SF].stream = !0, FF[GF] || Object.defineProperty(FF, GF, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), FF[GF].push(SF)
        },
        setStreamPriority(FF, WF, SF) {
          const CF = FF[WF];
          FF[zW] || Object.defineProperty(FF, zW, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), FF[zW][CF] = SF
        },
        getStreamPriority: (FF, WF) => FF?.[zW]?.[WF],
        defineField(FF, WF, SF, CF, AF) {
          const uF = HW(AF, `${FF.name}.${CF}`),
            {
              complexTypeKlass: hF,
              childType: bW
            } = nW(uF);
          BW.addField(WF, SF, CF, uF, VC(CF, SF, bW, hF)), WF[NF][CF] && Object.defineProperty(FF.prototype, CF, WF[NF][CF]), ("string" === typeof uF || zS(uF)) && (WF[LF] || Object.defineProperty(WF, LF, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), WF[LF][SF] = "string" === typeof uF ? WW[uF] : yS(uF.quantized))
        },
        setFields(FF, WF) {
          const SF = FF.prototype.constructor;
          sW.register(SF);
          const CF = Object.getPrototypeOf(SF),
            AF = CF && CF[Symbol.metadata],
            uF = BW.initialize(SF);
          SF[dF] || (SF[dF] = xA[dF]), SF[PF] || (SF[PF] = xA[PF]), SF[RF] || (SF[RF] = xA[RF]), SF.prototype.toJSON || (SF.prototype.toJSON = xA.prototype.toJSON);
          let hF = uF[mW] ?? (AF && AF[mW]) ?? -1;
          hF++, uF[LF] || Object.defineProperty(uF, LF, {
            value: AF?.[LF] ? [...AF[LF]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const bW in WF) {
            if (void 0 !== uF[bW]) throw new Error(`@colyseus/schema: Duplicate '${bW}' definition on '${SF.name||"(anonymous)"}'.`);
            BW.defineField(SF, uF, hF, bW, WF[bW]), hF++
          }
          return FF
        },
        isDeprecated: (FF, WF) => !0 === FF[WF].deprecated,
        initialize(FF) {
          const WF = Object.getPrototypeOf(FF),
            SF = WF[Symbol.metadata];
          let CF = FF[Symbol.metadata] ?? Object.create(null);
          if (WF !== xA && CF === SF && (CF = Object.create(null), SF)) {
            Object.setPrototypeOf(CF, SF), Object.defineProperty(CF, mW, {
              value: SF[mW],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== SF[xW] && (Object.defineProperty(CF, xW, {
              value: [...SF[xW]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(CF, ZF, {
              value: {
                ...SF[ZF]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const FF of XW) {
              const WF = SF[FF];
              void 0 !== WF && Object.defineProperty(CF, FF, {
                value: [...WF],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(CF, NF, {
              value: {
                ...SF[NF]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(FF, Symbol.metadata, {
            value: CF,
            writable: !1,
            configurable: !0
          }), CF
        },
        isValidInstance: FF => FF.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(FF.constructor[Symbol.metadata], mW),
        getFields(FF) {
          const WF = FF[Symbol.metadata],
            SF = {};
          for (let CF = 0; CF <= WF[mW]; CF++) SF[WF[CF].name] = WF[CF].type;
          return SF
        },
        hasViewTagAtIndex: (FF, WF) => FF?.[xW]?.includes(WF),
        hasUnreliableAtIndex: (FF, WF) => FF?.[oF]?.includes(WF),
        hasPatchOnlyAtIndex: (FF, WF) => FF?.[YF]?.includes(WF),
        hasFullStateOnlyAtIndex: (FF, WF) => FF?.[cW]?.includes(WF),
        hasStreamAtIndex: (FF, WF) => FF?.[GF]?.includes(WF)
      },
      jS = (FF, WF, SF) => FF(WF, SF);
    class vS {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(FF) {
        this.ops = new Uint8Array(Math.max(FF + 1, 1))
      }
      record(FF, WF) {
        const SF = this.ops[FF];
        0 === SF ? this.ops[FF] = WF : (SF === AF.DELETE || SF === AF.ADD && WF === AF.DELETE_AND_ADD) && (this.ops[FF] = AF.DELETE_AND_ADD), FF < 32 ? this.dirtyLow |= 1 << FF : this.dirtyHigh |= 1 << FF - 32
      }
      recordDelete(FF, WF) {
        this.ops[FF] = WF, FF < 32 ? this.dirtyLow |= 1 << FF : this.dirtyHigh |= 1 << FF - 32
      }
      recordRaw(FF, WF) {
        this.record(FF, WF)
      }
      operationAt(FF) {
        const WF = this.ops[FF];
        return 0 === WF ? void 0 : WF
      }
      setOperationAt(FF, WF) {
        this.ops[FF] = WF
      }
      forEach(FF) {
        this.forEachWithCtx(FF, jS)
      }
      forEachWithCtx(FF, WF) {
        let SF = this.dirtyLow,
          CF = this.dirtyHigh;
        const AF = this.ops;
        for (; 0 !== SF;) {
          const CF = SF & -SF,
            uF = 31 - Math.clz32(CF);
          SF ^= CF, WF(FF, uF, AF[uF])
        }
        for (; 0 !== CF;) {
          const SF = CF & -CF,
            uF = 31 - Math.clz32(SF) + 32;
          CF ^= SF, WF(FF, uF, AF[uF])
        }
      }
      size() {
        return pW(this.dirtyLow) + pW(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class JW {
      BC = new Map;
      pureOps = [];
      record(FF, WF) {
        const SF = this.BC.get(FF);
        void 0 === SF ? this.BC.set(FF, WF) : (SF === AF.DELETE || SF === AF.ADD && WF === AF.DELETE_AND_ADD) && this.BC.set(FF, AF.DELETE_AND_ADD)
      }
      recordDelete(FF, WF) {
        this.BC.set(FF, WF)
      }
      recordRaw(FF, WF) {
        this.BC.set(FF, WF)
      }
      recordPure(FF) {
        this.pureOps.push([this.BC.size, FF])
      }
      operationAt(FF) {
        return this.BC.get(FF)
      }
      setOperationAt(FF, WF) {
        this.BC.has(FF) && this.BC.set(FF, WF)
      }
      forEach(FF) {
        this.forEachWithCtx(FF, jS)
      }
      forEachWithCtx(FF, WF) {
        const SF = this.pureOps;
        if (SF.length > 0) {
          let CF = 0,
            AF = 0;
          for (const [uF, hF] of this.BC) {
            for (; CF < SF.length && SF[CF][0] <= AF;) {
              const AF = SF[CF++][1];
              WF(FF, -AF, AF)
            }
            WF(FF, uF, hF), AF++
          }
          for (; CF < SF.length;) {
            const AF = SF[CF++][1];
            WF(FF, -AF, AF)
          }
        } else
          for (const [CF, AF] of this.BC) WF(FF, CF, AF)
      }
      size() {
        return this.BC.size + this.pureOps.length
      }
      has() {
        return this.BC.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.BC.clear(), this.pureOps.length = 0
      }
      shift(FF) {
        const WF = new Map;
        for (const [SF, CF] of this.BC) WF.set(SF + FF, CF);
        this.BC = WF
      }
    }

    function pW(FF) {
      return 16843009 * ((FF = (858993459 & (FF -= FF >>> 1 & 1431655765)) + (FF >>> 2 & 858993459)) + (FF >>> 4) & 252645135) >>> 24
    }

    function lW(FF) {
      if (void 0 === FF) return 0;
      let WF = 0;
      for (let SF = 0, CF = FF.length; SF < CF; SF++) {
        const CF = FF[SF];
        CF < 32 && (WF |= 1 << CF)
      }
      return WF
    }

    function FS(FF) {
      const WF = FF.constructor;
      if (Object.prototype.hasOwnProperty.call(WF, DF)) return WF[DF];
      const SF = WF[Symbol.metadata],
        CF = BW.isValidInstance(FF),
        AF = (SF?.[xW]?.length ?? 0) > 0,
        uF = function(FF) {
          const WF = [],
            SF = [],
            CF = [],
            AF = [],
            uF = FF?.[mW];
          if (void 0 === uF) return {
            names: WF,
            types: SF,
            tags: CF,
            encoders: AF
          };
          const hF = FF[LF];
          for (let bW = 0; bW <= uF; bW++) {
            const uF = FF[bW];
            void 0 !== uF ? (WF[bW] = uF.name, SF[bW] = uF.type, CF[bW] = uF.tag, AF[bW] = hF?.[bW]) : (WF[bW] = void 0, SF[bW] = void 0, CF[bW] = void 0, AF[bW] = void 0)
          }
          return {
            names: WF,
            types: SF,
            tags: CF,
            encoders: AF
          }
        }(SF),
        hF = CF && !AF ? void 0 : WF[iW],
        bW = {
          encoder: WF[PF],
          filter: hF,
          metadata: SF,
          isSchema: CF,
          filterBitmask: CF ? lW(SF?.[xW]) : 0,
          hasAnyFullStateOnly: (SF?.[cW]?.length ?? 0) > 0,
          hasAnyUnreliable: (SF?.[oF]?.length ?? 0) > 0,
          hasAnyStream: (SF?.[GF]?.length ?? 0) > 0,
          hasAnyView: AF,
          fullStateOnlyBitmask: lW(SF?.[cW]),
          unreliableBitmask: lW(SF?.[oF]),
          streamBitmask: lW(SF?.[GF]),
          names: uF.names,
          types: uF.types,
          tags: uF.tags,
          encoders: uF.encoders
        };
      return Object.defineProperty(WF, DF, {
        value: bW,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), bW
    }

    function WS(FF, WF) {
      if (void 0 !== FF.parentRef && WF(FF.parentRef, FF._parentIndex)) return !0;
      for (let SF = FF.extraParents; void 0 !== SF; SF = SF.next)
        if (WF(SF.ref, SF.index)) return !0;
      return !1
    }
    const SS = (FF, WF) => {
        FF.isFieldUnreliable(WF) ? FF.ensureUnreliableRecorder().record(WF, AF.ADD) : FF.record(WF, AF.ADD)
      },
      CS = (FF, WF) => FF(WF);

    function AS(FF, WF, SF) {
      const CF = FF.refTarget;
      if (void 0 !== CF[gW]) {
        if (FF.isPatchOnly) return;
        if (Array.isArray(CF.items)) {
          const FF = CF.items;
          for (let CF = 0, AF = FF.length; CF < AF; CF++) void 0 !== FF[CF] && SF(WF, CF)
        } else if (void 0 !== CF.journal)
          for (const [FF, AF] of CF.journal.keyByIndex) CF.$items.has(AF) && SF(WF, FF);
        else if (void 0 !== CF.$items)
          for (const FF of CF.$items.keys()) SF(WF, FF)
      } else {
        const AF = FF.metadata;
        if (!AF) return;
        const uF = AF[mW] ?? -1,
          hF = AF[MF],
          bW = FF.encDescriptor.names;
        for (let FF = 0; FF <= uF; FF++) {
          const AF = bW[FF];
          if (void 0 === AF) continue;
          if (hF && hF.includes(FF)) continue;
          const uF = CF[AF];
          void 0 !== uF && null !== uF && SF(WF, FF)
        }
      }
    }

    function uS(FF, WF, SF, CF) {
      ! function(FF, WF, SF) {
        if (!WF) return;
        const CF = WF[rW],
          AF = !CF._isSchema;
        let uF;
        AF ? (WF = CF.parent, SF = CF.parentIndex, uF = WF?.[rW].metadata) : uF = CF.metadata;
        const hF = (uF?.[YF]?.includes(SF) ? DS : 0) | (uF?.[cW]?.includes(SF) ? LS : 0),
          bW = CF.flags & xC | hF,
          dF = FF.flags;
        FF.flags = dF | bW;
        bW & ~dF & LS && (FF.reset(), FF.unreliableRecorder?.reset());
        const PF = FF.root?.types;
        if (!PF?.hasFilters) return;
        const RF = uF?.[xW]?.includes(SF) ?? !1,
          iW = uF?.[GF]?.includes(SF) ?? !1,
          eF = CF.isFiltered || RF || iW;
        if (FF.isFiltered = eF, iW && !AF) {
          FF.isStreamCollection = !0;
          const WF = mS(FF.ref);
          if (void 0 === WF.priority) {
            const FF = BW.getStreamPriority(uF, SF);
            void 0 !== FF && (WF.priority = FF)
          }
          FF.root?.registerStream(FF.ref)
        }
        if (eF) {
          const WF = bC(FF);
          FF.isVisibilitySharedWithParent = CF.isFiltered && WF && !iW && (!RF || AF && uF[SF].tag !== QC)
        }
      }(FF, WF, SF), FF.isFullStateOnly || (FF.has() && FF.root?.enqueueChangeTree(FF), FF.unreliableRecorder?.has() && FF.root?.enqueueUnreliable(FF), FF.has() || FF.unreliableRecorder?.has() || FF.root?.enqueueChangeTree(FF))
    }

    function hS(FF) {
      const WF = FF.pendingFilterRefresh;
      for (let SF = 0; SF < WF.length; SF++) {
        const FF = WF[SF];
        0 !== (FF.flags & OS) && dS(FF)
      }
      WF.length = 0
    }

    function bC(FF) {
      return FF._isSchema || "string" !== typeof FF.refTarget[gW]
    }

    function dS(FF) {
      FF.flags &= ~OS;
      const WF = FF.root;
      if (void 0 === WF || void 0 === FF.parentRef) return;
      const SF = bC(FF);
      let CF = ES(FF, FF.parentRef, FF._parentIndex, SF);
      for (let uF = FF.extraParents; void 0 !== uF && CF !== eS; uF = uF.next) CF |= ES(FF, uF.ref, uF.index, SF);
      if (0 === CF) return;
      FF.isVisibilitySharedWithParent = 0 !== (CF & iC);
      const AF = 0 === (CF & RS);
      AF !== FF.isFiltered && (FF.isFiltered = AF, AF || FF.isFullStateOnly || (FF.forEachLiveWithCtx(FF, SS), FF.has() && WF.enqueueChangeTree(FF), FF.unreliableRecorder?.has() && WF.enqueueUnreliable(FF)), FF.forEachChildWithCtx(FF, QS))
    }
    const PS = 1,
      RS = 2,
      iC = 4,
      eS = PS | RS | iC;

    function ES(FF, WF, SF, CF) {
      const AF = WF[rW];
      if (AF.root !== FF.root || ! function(FF, WF, SF) {
          const CF = WF.refTarget;
          if (WF.isArray) {
            const WF = CF.items,
              AF = WF[SF];
            if (void 0 !== AF && AF[rW] === FF) return !0;
            for (let SF = 0, CF = WF.length; SF < CF; SF++) {
              const CF = WF[SF];
              if (void 0 !== CF && CF[rW] === FF) return !0
            }
            return !1
          }
          const AF = WF.getValue(SF);
          return void 0 !== AF && AF[rW] === FF
        }(FF, AF, SF)) return 0;
      AF.flags & OS && dS(AF);
      let uF = PS;
      if (AF._isSchema) {
        void 0 !== AF.encDescriptor.tags[SF] || AF.isFieldStream(SF) || (AF.isFiltered ? CF && (uF |= iC) : uF |= RS)
      } else if (AF.isFiltered) {
        if (CF && !AF.isStreamCollection) {
          const FF = AF.parent?.[rW];
          (FF?._isSchema ? FF.encDescriptor.tags[AF.parentIndex] : void 0) !== QC && (uF |= iC)
        }
      } else uF |= RS;
      return uF
    }
    const QS = (FF, WF, SF) => {
      dS(WF)
    };

    function rC(FF, WF, SF, CF) {
      if (FF.addParent(WF, CF), !SF) return;
      const AF = SF.add(FF);
      SF !== FF.root && (FF.root = SF, uS(FF, WF, CF));
      const uF = WF?.[rW];
      if (void 0 !== uF && void 0 !== uF.subscribedViews && void 0 !== WF[gW] && function(FF, WF, SF, CF) {
          const AF = FF.subscribedViews;
          if (void 0 === AF) return;
          const uF = FF.isStreamCollection,
            hF = uF ? FF.ref : void 0,
            bW = uF ? void 0 : SF[rW];
          for (let dF = 0, PF = AF.length; dF < PF; dF++) {
            let FF = AF[dF];
            for (; 0 !== FF;) {
              const SF = FF & -FF;
              FF ^= SF;
              const PF = 32 * dF + (31 - Math.clz32(SF)),
                RF = CF.activeViews.get(PF),
                iW = RF?.deref();
              void 0 !== iW ? uF ? YW(hF, PF, WF) : void 0 !== bW && iW.markVisible(bW) : AF[dF] &= ~SF
            }
          }
        }(uF, CF, FF.ref, SF), AF) {
        let WF = aC[kC];
        void 0 === WF && (WF = {
          parentRef: void 0,
          root: void 0
        }, aC[kC] = WF), WF.parentRef = FF.ref, WF.root = SF, kC++, tC(FF, WF, qC), kC--
      }
    }

    function gC(FF, WF, SF) {
      FF(WF, SF)
    }

    function tC(FF, WF, SF) {
      const CF = FF.refTarget;
      if (CF[gW]) {
        if ("string" !== typeof CF[gW]) {
          const FF = CF.items;
          if (void 0 !== FF)
            for (let CF = 0, AF = FF.length; CF < AF; CF++) {
              const AF = FF[CF];
              AF && SF(WF, AF[rW], CF)
            } else {
              const FF = CF.$items,
                AF = CF._collectionIndexes;
              for (const CF of FF.keys()) {
                const uF = FF.get(CF);
                uF && SF(WF, uF[rW], AF?.[CF] ?? CF)
              }
            }
        }
      } else {
        const AF = FF.metadata,
          uF = AF?.[OF];
        if (!uF) return;
        const hF = FF.encDescriptor.names;
        for (let FF = 0, bW = uF.length; FF < bW; FF++) {
          const AF = uF[FF],
            bW = CF[hF[AF]];
          bW && SF(WF, bW[rW], AF)
        }
      }
    }

    function TS(FF, WF, SF) {
      WF.root !== FF ? WF.setRoot(FF) : FF.add(WF)
    }
    const aC = [];
    let kC = 0;

    function qC(FF, WF, SF) {
      if (WF.root === FF.root) return FF.root.add(WF), void FF.root.moveNextToParent(WF);
      WF.setParent(FF.parentRef, FF.root, SF)
    }

    function VS(FF, WF, SF) {
      const CF = (3 & SF) << 3;
      return SF < 4 ? FF >>> CF & 255 : WF >>> CF & 255
    }
    const NS = (FF, WF, SF) => FF(WF, SF);
    const DS = 16,
      LS = 32,
      mC = 128,
      OS = 256,
      xC = DS | LS;
    class ZS {
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
      set isFiltered(FF) {
        this.flags = FF ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(FF) {
        this.flags = FF ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(FF) {
        this.flags = FF ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(FF) {
        this.flags = FF ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & DS)
      }
      set isPatchOnly(FF) {
        this.flags = FF ? this.flags | DS : this.flags & ~DS
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & LS)
      }
      set isFullStateOnly(FF) {
        this.flags = FF ? this.flags | LS : this.flags & ~LS
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(FF) {
        this.flags = FF ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & mC)
      }
      set needsRestage(FF) {
        this.flags = FF ? this.flags | mC : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new vS(this.metadata?.[mW] ?? 0) : new JW), this.unreliableRecorder
      }
      isFieldUnreliable(FF) {
        const WF = this.encDescriptor;
        return !!WF.hasAnyUnreliable && (FF < 32 ? 0 !== (WF.unreliableBitmask & 1 << FF) : BW.hasUnreliableAtIndex(this.metadata, FF))
      }
      isFieldFullStateOnly(FF) {
        if (this.isFullStateOnly) return !0;
        const WF = this.encDescriptor;
        return !!WF.hasAnyFullStateOnly && (FF < 32 ? 0 !== (WF.fullStateOnlyBitmask & 1 << FF) : BW.hasFullStateOnlyAtIndex(this.metadata, FF))
      }
      isFieldStream(FF) {
        const WF = this.encDescriptor;
        return !!WF.hasAnyStream && (FF < 32 ? 0 !== (WF.streamBitmask & 1 << FF) : BW.hasStreamAtIndex(this.metadata, FF))
      }
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF;
        this.ref = FF, this.refTarget = WF;
        const SF = FS(FF);
        this.encDescriptor = SF, this.metadata = SF.metadata;
        const CF = SF.isSchema;
        if (this._isSchema = CF, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, CF) {
          const FF = this.metadata?.[mW] ?? 0;
          FF > 7 && (this.ops = new Uint8Array(FF + 1))
        } else this.collDirty = new Map
      }
      _opAt(FF) {
        const WF = this.ops;
        if (void 0 !== WF) return WF[FF];
        const SF = (3 & FF) << 3;
        return FF < 4 ? this.opsLow >>> SF & 255 : this.opsHigh >>> SF & 255
      }
      _opPut(FF, WF) {
        const SF = this.ops;
        if (void 0 !== SF) return void(SF[FF] = WF);
        const CF = (3 & FF) << 3,
          AF = ~(255 << CF);
        FF < 4 ? this.opsLow = this.opsLow & AF | WF << CF : this.opsHigh = this.opsHigh & AF | WF << CF
      }
      _markDirty(FF) {
        FF < 32 ? this.dirtyLow |= 1 << FF : this.dirtyHigh |= 1 << FF - 32
      }
      record(FF, WF) {
        if (this._isSchema) {
          const SF = this._opAt(FF);
          0 === SF ? this._opPut(FF, WF) : (SF === AF.DELETE || SF === AF.ADD && WF === AF.DELETE_AND_ADD) && this._opPut(FF, AF.DELETE_AND_ADD), this._markDirty(FF)
        } else {
          const SF = this.collDirty,
            CF = SF.get(FF);
          let uF;
          uF = void 0 === CF ? WF : CF === AF.DELETE || CF === AF.ADD && WF === AF.DELETE_AND_ADD ? AF.DELETE_AND_ADD : CF, SF.set(FF, uF)
        }
      }
      recordDelete(FF, WF) {
        this._isSchema ? (this._opPut(FF, WF), this._markDirty(FF)) : this.collDirty.set(FF, WF)
      }
      recordRaw(FF, WF) {
        this._isSchema ? (this._opPut(FF, WF), this._markDirty(FF)) : this.collDirty.set(FF, WF)
      }
      recordPure(FF) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, FF])
      }
      operationAt(FF) {
        if (this._isSchema) {
          const WF = this._opAt(FF);
          return 0 === WF ? void 0 : WF
        }
        return this.collDirty.get(FF)
      }
      setOperationAt(FF, WF) {
        if (this._isSchema) this._opPut(FF, WF);
        else {
          const SF = this.collDirty;
          SF.has(FF) && SF.set(FF, WF)
        }
      }
      forEach(FF) {
        this.forEachWithCtx(FF, NS)
      }
      forEachWithCtx(FF, WF) {
        if (this._isSchema) {
          let SF = this.dirtyLow,
            CF = this.dirtyHigh;
          const AF = this.ops;
          if (void 0 !== AF) {
            for (; 0 !== SF;) {
              const CF = SF & -SF,
                uF = 31 - Math.clz32(CF);
              SF ^= CF, WF(FF, uF, AF[uF])
            }
            for (; 0 !== CF;) {
              const SF = CF & -CF,
                uF = 31 - Math.clz32(SF) + 32;
              CF ^= SF, WF(FF, uF, AF[uF])
            }
          } else {
            const CF = this.opsLow,
              AF = this.opsHigh;
            for (; 0 !== SF;) {
              const uF = SF & -SF,
                hF = 31 - Math.clz32(uF);
              SF ^= uF, WF(FF, hF, VS(CF, AF, hF))
            }
          }
          return
        }
        const SF = this.collDirty,
          CF = this.collPureOps;
        if (void 0 !== CF && CF.length > 0) {
          let AF = 0,
            uF = 0;
          for (const [hF, bW] of SF) {
            for (; AF < CF.length && CF[AF][0] <= uF;) {
              const SF = CF[AF++][1];
              WF(FF, -SF, SF)
            }
            WF(FF, hF, bW), uF++
          }
          for (; AF < CF.length;) {
            const SF = CF[AF++][1];
            WF(FF, -SF, SF)
          }
        } else
          for (const [AF, uF] of SF) WF(FF, AF, uF)
      }
      size() {
        return this._isSchema ? pW(this.dirtyLow) + pW(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(FF, WF) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const SF = this.collDirty,
          CF = new Map,
          uF = !this.paused && !this.isFullStateOnly;
        if (FF > 0)
          for (const [AF, hF] of SF) AF < FF && CF.set(AF, hF);
        if (uF)
          for (let hF = 0; hF < WF; hF++) CF.set(FF + hF, AF.ADD);
        for (const [AF, hF] of SF) AF >= FF && CF.set(AF + WF, hF);
        this.collDirty = CF, uF && this.root?.enqueueChangeTree(this)
      }
      removeAt(FF, WF) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const SF = this.collDirty,
          CF = FF + WF;
        let AF = !1;
        for (const hF of SF.keys())
          if (hF >= CF) {
            AF = !0;
            break
          } if (!AF) {
          for (let WF = FF; WF < CF; WF++) SF.delete(WF);
          return
        }
        const uF = new Map;
        for (const [hF, bW] of SF) hF < FF ? uF.set(hF, bW) : hF >= CF && uF.set(hF - WF, bW);
        this.collDirty = uF
      }
      unshift(FF) {
        this.insertAt(0, FF)
      }
      setRoot(FF) {
        ! function(FF, WF) {
          FF.root = WF;
          const SF = WF.add(FF);
          uS(FF, FF.parent, FF.parentIndex), SF && tC(FF, WF, TS)
        }(this, FF)
      }
      setParent(FF, WF, SF) {
        rC(this, FF, WF, SF)
      }
      forEachChild(FF) {
        tC(this, FF, gC)
      }
      forEachChildWithCtx(FF, WF) {
        tC(this, FF, WF)
      }
      forEachLive(FF) {
        AS(this, FF, CS)
      }
      forEachLiveWithCtx(FF, WF) {
        AS(this, FF, WF)
      }
      operation(FF) {
        this.paused || this.isFullStateOnly || (this.recordPure(FF), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(FF, WF, SF) {
        if (!this.paused && !this.isFieldFullStateOnly(FF)) {
          if (this.isFieldUnreliable(FF) && !this.isNew) {
            const CF = this.ensureUnreliableRecorder();
            return SF ? CF.recordRaw(FF, WF) : CF.record(FF, WF), void this.root?.enqueueUnreliable(this)
          }
          SF ? this.recordRaw(FF, WF) : this.record(FF, WF), this.root?.enqueueChangeTree(this)
        }
      }
      change(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AF.ADD;
        this._routeAndRecord(FF, WF, !1)
      }
      indexedOperation(FF, WF) {
        this._routeAndRecord(FF, WF, !0)
      }
      getChange(FF) {
        return this.operationAt(FF)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(FF) {
        const WF = this.paused;
        this.paused = !0;
        try {
          return FF()
        } finally {
          this.paused = WF
        }
      }
      markDirty(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AF.ADD;
        const SF = this.paused;
        this.paused = !1;
        try {
          this.change(FF, WF)
        } finally {
          this.paused = SF
        }
      }
      getValue(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[eF](FF, WF)
      }
      delete(FF, WF) {
        if (void 0 === FF) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${FF}'`)
          } catch (uA) {
            console.warn(uA)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(FF)) return this.getValue(FF);
        const SF = this.isFieldUnreliable(FF) && !this.isNew;
        SF ? this.ensureUnreliableRecorder().recordDelete(FF, WF ?? AF.DELETE) : this.recordDelete(FF, WF ?? AF.DELETE);
        const CF = this.getValue(FF);
        return CF && CF[rW] && this.root?.remove(CF[rW]), SF ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), CF
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[TF]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[TF]?.()
      }
      discard() {
        this._isSchema || this.refTarget[TF]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const FF = FF => {
          if (FF < 0) return;
          const WF = this.getValue(FF);
          WF && WF[rW] && WF[rW].discardAll()
        };
        this.forEach(FF), this.unreliableRecorder?.forEach(FF), this.discard()
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
      addParent(FF, WF) {
        ! function(FF, WF, SF) {
          if (FF.parentRef) {
            if (FF.parentRef[rW] === WF[rW]) return void(FF._parentIndex = SF);
            if (WS(FF, ((FF, SF) => FF[rW] === WF[rW]))) return void(FF._parentIndex = SF)
          }
          void 0 === FF.parentRef ? (FF.parentRef = WF, FF._parentIndex = SF) : (FF.extraParents = {
            ref: FF.parentRef,
            index: FF._parentIndex,
            next: FF.extraParents
          }, FF.parentRef = WF, FF._parentIndex = SF)
        }(this, FF, WF)
      }
      setParentIndex(FF, WF) {
        ! function(FF, WF, SF) {
          if (void 0 !== FF.extraParents)
            if (FF.parentRef[rW] !== WF[rW]) {
              for (let CF = FF.extraParents; void 0 !== CF; CF = CF.next)
                if (CF.ref[rW] === WF[rW]) return void(CF.index = SF)
            } else FF._parentIndex = SF;
          else FF._parentIndex = SF
        }(this, FF, WF)
      }
      removeParent() {
        return function(FF, WF) {
          if (FF.parentRef && FF.parentRef[rW] === WF[rW]) return FF.extraParents ? (FF.parentRef = FF.extraParents.ref, FF._parentIndex = FF.extraParents.index, FF.extraParents = FF.extraParents.next) : (FF.parentRef = void 0, FF._parentIndex = void 0), !0;
          let SF = FF.extraParents,
            CF = null;
          for (; SF;) {
            if (SF.ref[rW] === WF[rW]) return CF ? CF.next = SF.next : FF.extraParents = SF.next, !0;
            CF = SF, SF = SF.next
          }
          return void 0 === FF.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(FF) {
        return function(FF, WF) {
          if (void 0 !== FF.parentRef && WF(FF.parentRef, FF._parentIndex)) return {
            ref: FF.parentRef,
            index: FF._parentIndex
          };
          for (let SF = FF.extraParents; void 0 !== SF; SF = SF.next)
            if (WF(SF.ref, SF.index)) return {
              ref: SF.ref,
              index: SF.index
            }
        }(this, FF)
      }
      hasParent(FF) {
        return WS(this, FF)
      }
      indexInParent(FF) {
        return function(FF, WF) {
          if (FF.parentRef && FF.parentRef[rW] === WF[rW]) return FF._parentIndex;
          for (let SF = FF.extraParents; void 0 !== SF; SF = SF.next)
            if (SF.ref[rW] === WF[rW]) return SF.index
        }(this, FF)
      }
      getAllParents() {
        return function(FF) {
          const WF = [];
          FF.parentRef && WF.push({
            ref: FF.parentRef,
            index: FF._parentIndex
          });
          let SF = FF.extraParents;
          for (; SF;) WF.push({
            ref: SF.ref,
            index: SF.index
          }), SF = SF.next;
          return WF
        }(this)
      }
    }
    class oS {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(FF) {
        this.ref = FF
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
      untracked(FF) {
        return FF()
      }
      markDirty() {}
      forEachChild(FF) {
        const WF = this.ref;
        if (WF[gW]) {
          if ("string" !== typeof WF[gW])
            for (const [SF, CF] of WF.entries()) CF && FF(CF[rW], WF._collectionIndexes?.[SF] ?? SF);
          return
        }
        const SF = WF.constructor,
          CF = SF?.[Symbol.metadata];
        if (!CF) return;
        const AF = CF[OF] ?? [];
        for (let uF = 0; uF < AF.length; uF++) {
          const SF = AF[uF],
            hF = WF[CF[SF].name];
          hF && FF(hF[rW], SF)
        }
      }
      forEachChildWithCtx(FF, WF) {
        this.forEachChild(((SF, CF) => WF(FF, SF, CF)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function YS(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF;
      var SF;
      Object.defineProperty(FF, rW, {
        value: (SF = WF, new oS(SF)),
        enumerable: !1,
        writable: !0
      })
    }

    function MS(FF, WF, SF, CF, uF, hF, dF) {
      void 0 !== dF ? dF(WF, CF, hF) : "string" === typeof SF ? WW[SF]?.(WF, CF, hF) : null != SF[Symbol.metadata] ? (WW.number(WF, CF[bW], hF), (uF & AF.ADD) === AF.ADD && FF.tryEncodeTypeId(WF, SF, CF.constructor, hF)) : WW.number(WF, CF[bW], hF)
    }
    const cC = function(FF, WF, SF, CF, uF, hF, bW, dF) {
        if (WF[hF.offset++] = 255 & (CF | uF), uF === AF.DELETE) return;
        const PF = SF.encDescriptor,
          RF = SF.ref,
          iW = RF[qW][CF] ?? RF[PF.names[CF]];
        MS(FF, WF, PF.types[CF], iW, uF, hF, PF.encoders[CF])
      },
      GS = function(FF, WF, SF, CF, uF, hF) {
        if (WF[hF.offset++] = 255 & uF, WW.number(WF, CF, hF), uF === AF.DELETE) return;
        const bW = SF.ref;
        if ((uF & AF.ADD) === AF.ADD) {
          const FF = bW.$indexes.get(CF);
          WW.string(WF, FF, hF)
        }
        MS(FF, WF, bW[gW], bW[eF](CF), uF, hF)
      },
      zC = function(FF, WF, SF, CF, uF, hF) {
        if (WF[hF.offset++] = 255 & uF, WW.number(WF, CF, hF), uF === AF.DELETE) return;
        const bW = SF.ref;
        MS(FF, WF, bW[gW], bW[eF](CF), uF, hF)
      },
      IS = function(FF, WF, SF, CF, uF, hF) {
        const bW = SF.ref;
        (uF & AF.ADD) === AF.ADD && "function" === typeof bW.set ? GS(FF, WF, SF, CF, uF, hF) : zC(FF, WF, SF, CF, uF, hF)
      },
      fS = function(FF, WF, SF, CF, uF, hF, dF, PF) {
        const RF = SF.refTarget,
          iW = RF[gW],
          EF = "string" !== typeof iW;
        let QF;
        if (PF && SF.isFiltered && EF) {
          const FF = RF.tmpItems[CF];
          if (!FF) return;
          if (QF = FF[bW], uF === AF.DELETE) uF = AF.DELETE_BY_REFID;
          else if ((uF & AF.ADD) === AF.ADD) uF = AF.ADD_BY_REFID;
          else if ((uF & AF.MOVE) === AF.MOVE) return
        } else if (uF === AF.DELETE && EF) {
          const FF = RF.tmpItems[CF];
          if (!FF) return;
          QF = FF[bW], uF = AF.DELETE_BY_REFID
        } else QF = CF;
        if (WF[hF.offset++] = 255 & uF, WW.number(WF, QF, hF), uF === AF.DELETE || uF === AF.DELETE_BY_REFID) return;
        MS(FF, WF, iW, RF[eF](CF, dF), uF, hF)
      };

    function yC(FF, WF, SF, CF, uF, hF, dF) {
      const PF = FF.resyncVisited;
      let RF = PF.get(FF.currentRefId);
      if (void 0 === RF && PF.set(FF.currentRefId, RF = new Set), RF.add(CF), void 0 !== uF && SF === AF.ADD && uF !== hF) {
        const SF = uF[bW];
        void 0 !== SF && (FF.root.removeRef(SF), dF?.push({
          ref: WF,
          refId: FF.currentRefId,
          op: AF.DELETE,
          dynamicIndex: CF,
          value: void 0,
          previousValue: uF
        }))
      }
    }

    function sS(FF, WF, SF, CF) {
      const AF = WF[bW];
      if (void 0 === AF || SF.has(AF)) return;
      SF.add(AF);
      const uF = WF.constructor[Symbol.metadata],
        hF = uF?.[OF];
      if (void 0 === hF) return;
      const dF = uF[YF];
      for (let bW = 0; bW < hF.length; bW++) {
        const AF = hF[bW];
        if (void 0 !== dF && dF.includes(AF)) continue;
        const PF = uF[AF],
          RF = WF[PF.name];
        RF && (xA.is(PF.type) ? sS(FF, RF, SF, CF) : nS(FF, RF, SF, CF))
      }
    }

    function nS(FF, WF, SF, CF) {
      const uF = WF[tW] ?? WF,
        hF = uF[bW];
      if (void 0 === hF || SF.has(hF)) return;
      SF.add(hF);
      const dF = FF.resyncVisited.get(hF);
      if (void 0 === dF) return;
      const PF = FF.root;
      uF[QF](dF, ((FF, SF) => {
        CF?.push({
          ref: WF,
          refId: hF,
          op: AF.DELETE,
          dynamicIndex: SF,
          value: void 0,
          previousValue: FF
        });
        const uF = FF?.[bW];
        void 0 !== uF && PF.removeRef(uF)
      }), (WF => {
        xA.isSchema(WF) && sS(FF, WF, SF, CF)
      }))
    }
    const HS = 1,
      KS = 2,
      wS = 3,
      XS = 4,
      US = 5;

    function BS(FF, WF, SF, CF, uF, hF, dF, PF, RF) {
      const iW = FF.root;
      let eF;
      if ((WF & AF.DELETE) === AF.DELETE) {
        const FF = uF?.[bW];
        void 0 !== FF && iW.removeRef(FF), WF !== AF.DELETE_AND_ADD && SF[EF](CF), eF = void 0
      }
      if (WF === AF.DELETE);
      else if ("string" === typeof hF) eF = aS[hF](dF, PF);
      else if (zS(hF)) eF = function(FF, WF, SF) {
        return fW(FF, (0, aS[FF.wire])(WF, SF))
      }(hF.quantized, dF, PF);
      else if (xA.is(hF)) {
        const SF = aS.number(dF, PF);
        if (eF = iW.refs.get(SF), (WF & AF.ADD) === AF.ADD) {
          const CF = FF.getInstanceType(dF, PF, hF);
          eF || (eF = FF.createInstanceOfType(CF)), iW.addRef(SF, eF, eF !== uF || WF === AF.DELETE_AND_ADD && eF === uF)
        }
      } else {
        const SF = (QF = Object.keys(hF)[0], kS[QF]),
          CF = aS.number(dF, PF);
        null !== FF.resyncVisited && function(FF, WF) {
          const SF = FF.resyncVisited;
          SF.has(WF) || SF.set(WF, new Set)
        }(FF, CF);
        const EF = iW.refs.has(CF) ? uF || iW.refs.get(CF) : SF.constructor.initializeForDecoder();
        if (eF = EF.clone(!0), eF[gW] = Object.values(hF)[0], uF) {
          let FF = uF[bW];
          if (void 0 !== FF && CF !== FF) {
            (WF & AF.DELETE) !== AF.DELETE && iW.removeRef(FF);
            const SF = uF.entries();
            let CF;
            for (;
              (CF = SF.next()) && !CF.done;) {
              const [WF, SF] = CF.value;
              "object" === typeof SF && (FF = SF[bW]), RF?.push({
                ref: uF,
                refId: FF,
                op: AF.DELETE,
                field: WF,
                value: void 0,
                previousValue: SF
              })
            }
          }
        }
        iW.addRef(CF, eF, EF !== uF || WF === AF.DELETE_AND_ADD && EF === uF)
      }
      var QF;
      return eF
    }
    const jC = function(FF, WF, SF, CF, AF) {
        const uF = WF[SF.offset++],
          hF = CF.constructor[Symbol.metadata],
          bW = uF >> 6 << 6,
          dF = uF % (bW || 255),
          PF = hF[dF];
        if (void 0 === PF) return console.warn("@colyseus/schema: field not defined at", {
          index: dF,
          ref: CF.constructor.name,
          metadata: hF
        }), -1;
        const RF = !0 === PF.deprecated,
          iW = RF ? void 0 : CF[eF](dF),
          EF = BS(FF, bW, CF, dF, iW, PF.type, WF, SF, AF);
        RF || (null !== EF && void 0 !== EF && (CF[PF.name] = EF), iW !== EF && AF?.push({
          ref: CF,
          refId: FF.currentRefId,
          op: bW,
          field: PF.name,
          value: EF,
          previousValue: iW
        }))
      },
      vC = function(FF, WF, SF, CF, uF) {
        const hF = CF[tW] ?? CF,
          bW = WF[SF.offset++];
        if (bW === AF.CLEAR) return FF.removeChildRefs(hF, uF), void hF.clear();
        const dF = aS.number(WF, SF),
          PF = hF[gW],
          RF = hF.constructor.COLLECTION_KIND;
        let iW;
        (bW & AF.ADD) === AF.ADD ? RF === HS ? (iW = aS.string(WF, SF), hF.setIndex(dF, iW)) : iW = dF : iW = hF.getIndex(dF);
        const EF = hF[eF](dF),
          QF = BS(FF, bW, CF, dF, EF, PF, WF, SF, uF);
        if (null !== FF.resyncVisited && yC(FF, CF, bW, iW, EF, QF, uF), null !== QF && void 0 !== QF) switch (RF) {
          case HS:
            hF.$items.set(iW, QF);
            break;
          case KS:
            hF.$setAt(dF, QF, null !== FF.resyncVisited && bW === AF.ADD ? AF.REPLACE : bW);
            break;
          case wS:
          case XS:
          case US:
            hF.$items.has(dF) || (hF.$items.set(dF, QF), "number" === typeof hF.$refId && dF >= hF.$refId && (hF.$refId = dF + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${hF.constructor?.name} \u2014 item at index ${dF} was not stored.`)
        }
        EF !== QF && uF?.push({
          ref: CF,
          refId: FF.currentRefId,
          op: bW,
          dynamicIndex: iW,
          value: QF,
          previousValue: EF
        })
      },
      JS = function(FF, WF, SF, CF, uF) {
        const hF = CF[tW] ?? CF;
        let bW, dF = WF[SF.offset++];
        if (dF === AF.CLEAR) return FF.removeChildRefs(hF, uF), void hF.clear();
        if (dF === AF.REVERSE) return void hF.items.reverse();
        if (dF === AF.DELETE_BY_REFID) {
          const dF = aS.number(WF, SF),
            PF = FF.root.refs.get(dF);
          if (void 0 === PF) return;
          if (FF.root.removeRef(dF), bW = hF.findIndex((FF => FF === PF)), -1 === bW) return;
          return hF[EF](bW), void uF?.push({
            ref: CF,
            refId: FF.currentRefId,
            op: AF.DELETE,
            dynamicIndex: bW,
            value: void 0,
            previousValue: PF
          })
        }
        if (dF === AF.ADD_BY_REFID) {
          const CF = aS.number(WF, SF),
            AF = FF.root.refs.get(CF);
          AF && (bW = hF.findIndex((FF => FF === AF))), -1 !== bW && void 0 !== bW || (bW = hF.length)
        } else bW = aS.number(WF, SF);
        const PF = hF[gW];
        let RF = bW;
        const iW = hF.items[bW],
          eF = BS(FF, dF, CF, bW, iW, PF, WF, SF, uF);
        null !== FF.resyncVisited && yC(FF, CF, dF, bW, iW, eF, uF), null !== eF && void 0 !== eF && eF !== iW && hF.$setAt(bW, eF, null !== FF.resyncVisited && dF === AF.ADD ? AF.REPLACE : dF), iW !== eF && uF?.push({
          ref: CF,
          refId: FF.currentRefId,
          op: dF,
          dynamicIndex: RF,
          value: eF,
          previousValue: iW
        })
      };
    class pS extends Error {}

    function lS(FF, WF, SF, CF) {
      if (!(FF instanceof WF)) throw new pS(`a '${WF.name}' was expected, but '${FF&&FF.constructor.name}' was provided in ${SF.constructor.name}#${CF}`)
    }
    const FC = (FF, WF) => {
        const SF = FF.toString(),
          CF = WF.toString();
        return SF < CF ? -1 : SF > CF ? 1 : 0
      },
      WC = {
        get: (FF, WF) => "symbol" === typeof WF || isNaN(WF) ? Reflect.get(FF, WF) : FF.items[WF],
        set: (FF, WF, SF) => {
          if ("symbol" !== typeof WF && !isNaN(WF)) {
            if (void 0 === SF || null === SF) FF.$deleteAt(WF);
            else {
              let CF;
              if (SF[rW]) {
                lS(SF, FF[gW], FF, WF);
                const uF = FF.items[WF];
                FF.isMovingItems ? (CF = FF.$wireIndex(Number(WF)), void 0 !== uF ? SF[rW].isNew ? FF[rW].indexedOperation(CF, AF.MOVE_AND_ADD) : (FF[rW].getChange(CF) & AF.DELETE) === AF.DELETE ? FF[rW].indexedOperation(CF, AF.DELETE_AND_MOVE) : FF[rW].indexedOperation(CF, AF.MOVE) : SF[rW].isNew && FF[rW].indexedOperation(CF, AF.ADD), SF[rW].setParent(FF, FF[rW].root, CF)) : CF = FF.$changeAt(Number(WF), SF), void 0 !== uF && uF[rW].root?.remove(uF[rW])
              } else CF = FF.$changeAt(Number(WF), SF);
              FF.items[WF] = SF, void 0 !== CF && (FF.tmpItems[CF] = SF)
            }
            return !0
          }
          return Reflect.set(FF, WF, SF)
        },
        deleteProperty: (FF, WF) => ("number" === typeof WF ? FF.$deleteAt(WF) : delete FF[WF], !0),
        has: (FF, WF) => "symbol" === typeof WF || isNaN(Number(WF)) ? Reflect.has(FF, WF) : Reflect.has(FF.items, WF)
      };
    class SC {
      [rW];
      [bW];
      [tW];
      [gW];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[PF] = fS;
      static[RF] = JS;
      static COLLECTION_KIND = KS;
      static[iW](FF, WF, SF) {
        if (!SF) return !0;
        const CF = FF[tW] ?? FF;
        return "string" === typeof CF[gW] || SF.isChangeTreeVisible(CF.tmpItems[WF]?.[rW])
      }
      static is(FF) {
        return Array.isArray(FF) || void 0 !== FF.array
      }
      static from(FF) {
        return new SC(...Array.from(FF))
      }
      constructor() {
        this[gW] = void 0, this[tW] = this;
        const FF = new Proxy(this, WC);
        return Object.defineProperty(this, rW, {
          value: new ZS(FF, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), FF
      }
      static initializeForDecoder() {
        const FF = Object.create(SC.prototype);
        FF.items = [], FF.isMovingItems = !1, FF._needsCompaction = !1, FF[gW] = void 0, FF[tW] = FF;
        const WF = new Proxy(FF, WC);
        return YS(FF, WF), WF
      }
      set length(FF) {
        0 === FF ? this.clear() : FF < this.items.length ? this.splice(FF, this.length - FF) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[rW].pause()
      }
      resumeTracking() {
        this[rW].resume()
      }
      untracked(FF) {
        return this[rW].untracked(FF)
      }
      get isTrackingPaused() {
        return this[rW].paused
      }
      push() {
        const FF = this[tW],
          WF = FF.items,
          SF = FF.tmpItems,
          CF = FF[rW],
          uF = FF[gW];
        let hF = SF.length;
        for (let bW = 0, dF = arguments.length; bW < dF; bW++, hF++) {
          const dF = bW < 0 || arguments.length <= bW ? void 0 : arguments[bW];
          if (void 0 === dF || null === dF) return;
          "object" === typeof dF && uF && lS(dF, uF, FF, bW), CF.indexedOperation(hF, AF.ADD), WF.push(dF), SF.push(dF), dF[rW]?.setParent(this, CF.root, hF)
        }
        return hF
      }
      pop() {
        const FF = this[tW],
          WF = FF.tmpItems,
          SF = FF.deletedIndexes;
        let CF = -1;
        for (let uF = WF.length - 1; uF >= 0; uF--)
          if (!0 !== SF[uF]) {
            CF = uF;
            break
          } if (CF < 0) return;
        const AF = FF.$isUnsentAdd(CF);
        return FF[rW].delete(CF), AF ? FF.$cancelAdd(CF) : SF[CF] = !0, FF.items.pop()
      }
      at(FF) {
        return FF < 0 && (FF += this.length), this.items[FF]
      }
      $wireIndex(FF) {
        const WF = this.deletedIndexes;
        if (0 === WF.length) return FF;
        const SF = this.tmpItems;
        let CF = 0;
        for (let AF = 0; AF < SF.length; AF++)
          if (!0 !== WF[AF]) {
            if (CF === FF) return AF;
            CF++
          } return SF.length + (FF - CF)
      }
      $isUnsentAdd(FF) {
        const WF = this[rW];
        return 0 === (576 & WF.flags) && !WF.paused && "string" !== typeof this[gW] && WF.operationAt(FF) === AF.ADD
      }
      $cancelAdd(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const SF = this[rW],
          CF = this.tmpItems[FF];
        this.tmpItems.splice(FF, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(FF, 1), SF.removeAt(FF, 1);
        const AF = CF?.[rW];
        void 0 !== AF && void 0 === AF.root && AF.removeParent(this), WF && this.$reindexChildren(FF)
      }
      $reindexChildren(FF, WF) {
        if (!this[rW].hasFilteredFields) return;
        if ("string" === typeof this[gW]) return;
        const SF = this.tmpItems,
          CF = SF.length;
        if (void 0 !== WF)
          for (; FF < CF && SF[FF] === WF[FF];) FF++;
        for (let AF = FF; AF < CF; AF++) SF[AF]?.[rW]?.setParentIndex(this, AF)
      }
      $changeAt(FF, WF) {
        if (void 0 === WF || null === WF) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[FF] === WF) return;
        const SF = void 0 !== this.items[FF] ? "object" === typeof WF ? AF.DELETE_AND_ADD : AF.REPLACE : AF.ADD,
          CF = this.$wireIndex(FF),
          uF = this[rW];
        return uF.change(CF, SF), WF[rW]?.setParent(this, uF.root, CF), CF
      }
      $deleteAt(FF, WF) {
        this[rW].delete(this.$wireIndex(FF), WF)
      }
      $setAt(FF, WF, SF) {
        SF === AF.ADD && void 0 !== this.items[FF] ? this.items.splice(FF, 0, WF) : SF === AF.DELETE_AND_MOVE ? (this.items.splice(FF, 1), this.items[FF] = WF) : (FF > this.items.length && (this._needsCompaction = !0), this.items[FF] = WF)
      }
      clear() {
        const FF = this[tW];
        if (0 === FF.items.length) return;
        const WF = FF[rW];
        WF.forEachChild(((FF, SF) => {
          WF.root?.remove(FF)
        })), WF.discard(), WF.operation(AF.CLEAR), FF.items.length = 0, FF.tmpItems.length = 0
      } [aW]() {
        const FF = this[tW] ?? this,
          WF = FF[rW];
        if (WF.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const SF = FF.items;
        for (let CF = 0; CF < SF.length; CF++) SF[CF]?.[aW]?.();
        FF.items.length = 0, FF.tmpItems.length = 0, FF.deletedIndexes.length = 0, WF.recycle(), FF[bW] = void 0
      }
      concat() {
        return new SC(...this.items.concat(...arguments))
      }
      join(FF) {
        return this.items.join(FF)
      }
      reverse() {
        const FF = this[tW],
          WF = FF[rW];
        if (WF.has() || FF.deletedIndexes.length > 0) {
          const WF = FF.items.slice().reverse();
          return this.clear(), this.push(...WF), this
        }
        return WF.operation(AF.REVERSE), FF.items.reverse(), FF.tmpItems.reverse(), FF.$reindexChildren(0), this
      }
      shift() {
        const FF = this[tW],
          WF = FF.items;
        if (0 === WF.length) return;
        const SF = FF[rW],
          CF = FF.deletedIndexes;
        let uF = 0;
        for (; !0 === CF[uF];) uF++;
        const hF = FF.$isUnsentAdd(uF);
        return SF.delete(uF, AF.DELETE), hF ? FF.$cancelAdd(uF) : CF[uF] = !0, WF.shift()
      }
      slice(FF, WF) {
        const SF = new SC;
        return SF.push(...this.items.slice(FF, WF)), SF
      }
      sort() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FC;
        const WF = this[tW];
        WF.isMovingItems = !0;
        const SF = WF[rW];
        return WF.items.sort(FF).forEach(((FF, WF) => SF.change(WF, AF.REPLACE))), WF.tmpItems.sort(FF), WF.$reindexChildren(0), WF.isMovingItems = !1, this
      }
      splice(FF, WF) {
        const SF = this[tW],
          CF = SF[rW],
          uF = SF.items,
          hF = SF.tmpItems,
          bW = SF.deletedIndexes,
          dF = uF.length,
          PF = hF.length;
        for (var RF = arguments.length, iW = new Array(RF > 2 ? RF - 2 : 0), eF = 2; eF < RF; eF++) iW[eF - 2] = arguments[eF];
        const EF = iW.length,
          QF = [];
        for (let AF = 0; AF < PF; AF++) !0 !== bW[AF] && QF.push(AF);
        let gW;
        if (dF > FF) {
          void 0 === WF && (WF = dF - FF);
          for (let uF = FF; uF < FF + WF; uF++) {
            const FF = QF[uF],
              WF = SF.$isUnsentAdd(FF);
            CF.delete(FF, AF.DELETE), WF ? (gW ??= []).push(FF) : bW[FF] = !0
          }
        } else WF = 0;
        if (EF > 0) {
          const uF = QF[FF] ?? dF,
            PF = Math.min(EF, WF);
          for (let FF = 0; FF < PF; FF++) {
            const WF = uF + FF;
            let SF;
            const dF = void 0 !== gW ? gW.indexOf(WF) : -1; - 1 !== dF ? (gW.splice(dF, 1), SF = AF.ADD) : SF = bW[WF] ? AF.DELETE_AND_ADD : AF.ADD, CF.indexedOperation(WF, SF), hF[WF] = iW[FF], bW[WF] = !1, iW[FF][rW]?.setParent(this, CF.root, WF)
          }
          const RF = EF - PF;
          if (RF > 0) {
            const FF = uF + PF;
            CF.insertAt(FF, RF);
            for (let WF = 0; WF < RF; WF++) iW[PF + WF][rW]?.setParent(this, CF.root, FF + WF);
            bW.length > 0 && bW.splice(FF, 0, ...new Array(RF).fill(!1)), hF.splice(FF, 0, ...iW.slice(PF)), SF.$reindexChildren(FF + RF)
          }
        }
        if (void 0 !== gW && gW.length > 0) {
          for (let FF = gW.length - 1; FF >= 0; FF--) SF.$cancelAdd(gW[FF], !1);
          SF.$reindexChildren(gW[0])
        }
        return CF.root?.enqueueChangeTree(CF), uF.splice(FF, WF, ...iW)
      }
      unshift() {
        const FF = this[tW],
          WF = FF[rW];
        WF.unshift(arguments.length);
        for (let CF = 0; CF < arguments.length; CF++)(CF < 0 || arguments.length <= CF ? void 0 : arguments[CF])?.[rW]?.setParent(this, WF.root, CF);
        const SF = FF.deletedIndexes;
        return SF.length > 0 && SF.unshift(...new Array(arguments.length).fill(!1)), FF.tmpItems.unshift(...arguments), FF.$reindexChildren(arguments.length), FF.items.unshift(...arguments)
      }
      indexOf(FF, WF) {
        return this.items.indexOf(FF, WF)
      }
      lastIndexOf(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(FF, WF)
      }
      every(FF, WF) {
        return this.items.every(FF, WF)
      }
      some(FF, WF) {
        return this.items.some(FF, WF)
      }
      forEach(FF, WF) {
        return this.items.forEach(FF, WF)
      }
      map(FF, WF) {
        return this.items.map(FF, WF)
      }
      filter(FF, WF) {
        return this.items.filter(FF, WF)
      }
      reduce(FF, WF) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(FF, WF) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(FF, WF) {
        return this.items.find(FF, WF)
      }
      findIndex(FF, WF) {
        return this.items.findIndex(FF, WF)
      }
      fill(FF, WF, SF) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(FF, WF, SF) {
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
        return SC
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
      includes(FF, WF) {
        return this.items.includes(FF, WF)
      }
      flatMap(FF, WF) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(FF) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(FF, WF) {
        const SF = this.items.slice();
        return FF < 0 && (FF += this.length), SF[FF] = WF, new SC(...SF)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(FF) {
        return this.items.slice().sort(FF)
      }
      toSpliced(FF, WF) {
        for (var SF = arguments.length, CF = new Array(SF > 2 ? SF - 2 : 0), AF = 2; AF < SF; AF++) CF[AF - 2] = arguments[AF];
        const uF = this.items.slice();
        return uF.splice.apply(uF, arguments), uF
      }
      shuffle() {
        return this.move((FF => {
          let WF = this.items.length;
          for (; 0 != WF;) {
            let FF = Math.floor(Math.random() * WF);
            WF--, [this[WF], this[FF]] = [this[FF], this[WF]]
          }
        }))
      }
      move(FF) {
        return this.isMovingItems = !0, FF(this), this.isMovingItems = !1, this
      } [eF](FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = this[tW] ?? this;
        return WF || SF.deletedIndexes[FF] ? SF.items[FF] : SF.tmpItems[FF] || SF.items[FF]
      } [EF](FF) {
        const WF = this[tW] ?? this;
        WF.items[FF] = void 0, WF._needsCompaction = !0
      } [TF]() {
        const FF = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, FF), this.deletedIndexes.length = 0)
      } [kW]() {
        const FF = this[tW] ?? this;
        FF._needsCompaction && (FF._needsCompaction = !1, FF.items = FF.items.filter((FF => void 0 !== FF)))
      } [QF](FF, WF, SF) {
        const CF = this[tW] ?? this,
          AF = CF.items;
        let uF = !1;
        for (let hF = 0; hF < AF.length; hF++) {
          const bW = AF[hF];
          FF.has(hF) ? SF(bW) : (uF = !0, WF(bW, hF), CF[EF](hF))
        }
        uF && CF[kW]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((FF => "function" === typeof FF.toJSON ? FF.toJSON() : FF))
      }
      clone(FF) {
        let WF;
        return FF ? (WF = new SC, WF.push(...this.items)) : WF = new SC(...this.map((FF => FF[rW] ? FF.clone() : FF))), WF
      }
    }
    VW("array", {
      constructor: SC
    });
    class CC {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(FF) {
        const WF = this.indexByKey[FF];
        return void 0 === WF ? void 0 : WF
      }
      assign(FF) {
        const WF = this.nextIndex++;
        return this.indexByKey[FF] = WF, this.keyByIndex.set(WF, FF), WF
      }
      snapshot(FF, WF) {
        (this.snapshots ??= new Map).set(FF, WF)
      }
      forgetSnapshot(FF) {
        this.snapshots?.delete(FF)
      }
      snapshotAt(FF) {
        return this.snapshots?.get(FF)
      }
      setIndex(FF, WF) {
        this.keyByIndex.set(FF, WF), this.indexByKey[WF] = FF
      }
      keyOf(FF) {
        return this.keyByIndex.get(FF)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [FF] of this.snapshots) {
            const WF = this.keyByIndex.get(FF);
            void 0 !== WF && (delete this.indexByKey[WF], this.keyByIndex.delete(FF))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class AC {
      [rW];
      [bW];
      childType;
      [gW];
      $items = new Map;
      journal = new CC;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(FF) {
        (this._stream ??= LW()).maxPerTick = FF
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(FF) {
        (this._stream ??= LW()).priority = FF
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[PF] = GS;
      static[RF] = vC;
      static COLLECTION_KIND = HS;
      static[iW](FF, WF, SF) {
        if (!SF || "string" === typeof FF[gW]) return !0;
        const CF = FF[eF](WF) ?? FF.journal.snapshotAt(WF);
        return SF.isChangeTreeVisible(CF[rW])
      }
      static is(FF) {
        return void 0 !== FF.map
      }
      constructor(FF) {
        if (Object.defineProperty(this, rW, {
            value: new ZS(this),
            enumerable: !1,
            writable: !0
          }), this[gW] = void 0, FF)
          if (FF instanceof Map || FF instanceof AC) FF.forEach(((FF, WF) => this.set(WF, FF)));
          else
            for (const WF in FF) this.set(WF, FF[WF])
      }
      static initializeForDecoder() {
        const FF = Object.create(AC.prototype);
        return FF.$items = new Map, FF.journal = new CC, FF[gW] = void 0, YS(FF), FF
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return AC
      }
      set(FF, WF) {
        if (void 0 === WF || null === WF) throw new Error(`MapSchema#set('${FF}', ${WF}): trying to set ${WF} value on '${FF}'.`);
        "object" === typeof WF && this[gW] && lS(WF, this[gW], this, FF), FF = FF.toString();
        const SF = this[rW],
          CF = void 0 !== WF[rW],
          uF = this.journal;
        let hF, bW = uF.indexOf(FF);
        if (void 0 !== bW) {
          hF = AF.REPLACE;
          const SF = this.$items.get(FF);
          if (SF === WF) return;
          CF && (hF = AF.DELETE_AND_ADD, void 0 !== SF && SF[rW].root?.remove(SF[rW])), void 0 !== uF.snapshotAt(bW) && uF.forgetSnapshot(bW)
        } else bW = uF.assign(FF), hF = AF.ADD;
        return this.$items.set(FF, WF), hF === AF.ADD && SF.isStreamCollection ? void 0 !== SF.root && OW(this, SF.root, bW) : SF.change(bW, hF), CF && WF[rW].setParent(this, SF.root, bW), this
      }
      get(FF) {
        return this.$items.get(FF)
      }
      getOrInsert(FF, WF) {
        return this.$items.has(FF) ? this.$items.get(FF) : (this.set(FF, WF), WF)
      }
      getOrInsertComputed(FF, WF) {
        if (this.$items.has(FF)) return this.$items.get(FF);
        const SF = WF(FF);
        return this.set(FF, SF), SF
      }
      delete(FF) {
        if (!this.$items.has(FF)) return !1;
        const WF = this.journal.indexOf(FF),
          SF = this.$items.get(FF),
          CF = this[rW];
        if (CF.isStreamCollection) {
          const AF = CF.root;
          let uF = !1;
          return void 0 !== AF && (uF = xS(this, AF, this[bW], WF)), void 0 !== SF?.[rW] && AF?.remove(SF[rW]), this.$items.delete(FF), uF || this.journal.snapshot(WF, SF), !0
        }
        return this.journal.snapshot(WF, SF), CF.delete(WF), this.$items.delete(FF)
      }
      clear() {
        const FF = this[rW];
        FF.discard(), FF.forEachChild(((WF, SF) => {
          FF.root?.remove(WF)
        })), this.journal.reset(), this.$items.clear(), FF.operation(AF.CLEAR)
      } [aW]() {
        const FF = this[rW];
        if (FF.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((FF => FF?.[aW]?.())), this.$items.clear(), this.journal.reset(), FF.recycle(), this[bW] = void 0
      }
      has(FF) {
        return this.$items.has(FF)
      }
      forEach(FF) {
        this.$items.forEach(FF)
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
        this[rW].pause()
      }
      resumeTracking() {
        this[rW].resume()
      }
      untracked(FF) {
        return this[rW].untracked(FF)
      }
      get isTrackingPaused() {
        return this[rW].paused
      }
      setIndex(FF, WF) {
        this.journal.setIndex(FF, WF)
      }
      getIndex(FF) {
        return this.journal.keyOf(FF)
      } [eF](FF) {
        const WF = this.journal.keyOf(FF);
        return void 0 !== WF ? this.$items.get(WF) : void 0
      } [EF](FF) {
        const WF = this.journal.keyOf(FF);
        void 0 !== WF && (this.$items.delete(WF), this.journal.keyByIndex.delete(FF))
      } [QF](FF, WF, SF) {
        let CF = null;
        if (this.$items.forEach(((AF, uF) => {
            FF.has(uF) ? SF(AF) : ((CF ??= new Set).add(uF), WF(AF, uF))
          })), null !== CF) {
          CF.forEach((FF => {
            this.$items.delete(FF), delete this.journal.indexByKey[FF]
          }));
          const FF = [];
          this.journal.keyByIndex.forEach(((WF, SF) => {
            CF.has(WF) && FF.push(SF)
          }));
          for (let WF = 0; WF < FF.length; WF++) this.journal.keyByIndex.delete(FF[WF])
        }
      } [TF]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(FF) {
        MW(this, FF)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (FF => {
          let [WF, SF] = FF;
          return [WF, "function" === typeof SF.toJSON ? SF.toJSON() : SF]
        })))
      }
      clone(FF) {
        let WF;
        return FF ? WF = Object.assign(new AC, this) : (WF = new AC, this.forEach(((FF, SF) => {
          FF[rW] ? WF.set(SF, FF.clone()) : WF.set(SF, FF)
        }))), WF
      }
    }
    VW("map", {
      constructor: AC
    });
    class uC {
      [rW];
      [bW];
      [gW];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(FF) {
        (this._stream ??= LW()).maxPerTick = FF
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(FF) {
        (this._stream ??= LW()).priority = FF
      }
      static[PF] = zC;
      static[RF] = vC;
      static COLLECTION_KIND = XS;
      static[iW](FF, WF, SF) {
        return !SF || "string" === typeof FF[gW] || SF.isChangeTreeVisible((FF[eF](WF) ?? FF.deletedItems[WF])[rW])
      }
      static is(FF) {
        return void 0 !== FF.collection
      }
      constructor(FF) {
        Object.defineProperty(this, rW, {
          value: new ZS(this),
          enumerable: !1,
          writable: !0
        }), this[gW] = void 0, FF && FF.forEach((FF => this.add(FF)))
      }
      static initializeForDecoder() {
        const FF = Object.create(uC.prototype);
        return FF.$items = new Map, FF.deletedItems = {}, FF.$refId = 0, FF[gW] = void 0, YS(FF), FF
      }
      add(FF) {
        const WF = this.$refId++,
          SF = this[rW];
        return this.$items.set(WF, FF), SF.isStreamCollection ? void 0 !== SF.root && OW(this, SF.root, WF) : SF.change(WF), void 0 !== FF[rW] && FF[rW].setParent(this, SF.root, WF), WF
      }
      at(FF) {
        const WF = Array.from(this.$items.keys())[FF];
        return this.$items.get(WF)
      }
      entries() {
        return this.$items.entries()
      }
      delete(FF) {
        const WF = this.$items.entries();
        let SF, CF;
        for (;
          (CF = WF.next()) && !CF.done;)
          if (FF === CF.value[1]) {
            SF = CF.value[0];
            break
          } if (void 0 === SF) return !1;
        const AF = this[rW];
        if (AF.isStreamCollection) {
          const FF = AF.root,
            WF = this.$items.get(SF);
          return void 0 !== FF && xS(this, FF, this[bW], SF), void 0 !== WF?.[rW] && FF?.remove(WF[rW]), this.deletedItems[SF] = WF, this.$items.delete(SF)
        }
        return this.deletedItems[SF] = AF.delete(SF), this.$items.delete(SF)
      }
      clear() {
        const FF = this[rW];
        FF.discard(), FF.forEachChild(((WF, SF) => {
          FF.root?.remove(WF)
        })), this.$items.clear(), FF.operation(AF.CLEAR)
      } [aW]() {
        const FF = this[rW];
        if (FF.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((FF => FF?.[aW]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, FF.recycle(), this[bW] = void 0
      }
      has(FF) {
        return Array.from(this.$items.values()).some((WF => WF === FF))
      }
      forEach(FF) {
        this.$items.forEach(((WF, SF, CF) => FF(WF, SF, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[rW].pause()
      }
      resumeTracking() {
        this[rW].resume()
      }
      untracked(FF) {
        return this[rW].untracked(FF)
      }
      get isTrackingPaused() {
        return this[rW].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(FF, WF) {}
      getIndex(FF) {
        return FF
      } [eF](FF) {
        return this.$items.get(FF)
      } [EF](FF) {
        this.$items.delete(FF)
      } [QF](FF, WF, SF) {
        let CF = null;
        if (this.$items.forEach(((AF, uF) => {
            FF.has(uF) ? SF(AF) : ((CF ??= []).push(uF), WF(AF, uF))
          })), null !== CF)
          for (let AF = 0; AF < CF.length; AF++) this[EF](CF[AF])
      } [TF]() {
        for (const FF in this.deletedItems) delete this.deletedItems[FF]
      }
      _dropView(FF) {
        MW(this, FF)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const FF = [];
        return this.forEach(((WF, SF) => {
          FF.push("function" === typeof WF.toJSON ? WF.toJSON() : WF)
        })), FF
      }
      clone(FF) {
        let WF;
        return FF ? WF = Object.assign(new uC, this) : (WF = new uC, this.forEach((FF => {
          FF[rW] ? WF.add(FF.clone()) : WF.add(FF)
        }))), WF
      }
    }
    VW("collection", {
      constructor: uC
    });
    class hC {
      [rW];
      [bW];
      [gW];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(FF) {
        (this._stream ??= LW()).maxPerTick = FF
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(FF) {
        (this._stream ??= LW()).priority = FF
      }
      static[PF] = zC;
      static[RF] = vC;
      static COLLECTION_KIND = wS;
      static[iW](FF, WF, SF) {
        return !SF || "string" === typeof FF[gW] || SF.isVisible((FF[eF](WF) ?? FF.deletedItems[WF])[rW])
      }
      static is(FF) {
        return void 0 !== FF.set
      }
      constructor(FF) {
        Object.defineProperty(this, rW, {
          value: new ZS(this),
          enumerable: !1,
          writable: !0
        }), this[gW] = void 0, FF && FF.forEach((FF => this.add(FF)))
      }
      static initializeForDecoder() {
        const FF = Object.create(hC.prototype);
        return FF.$items = new Map, FF.deletedItems = {}, FF.$refId = 0, FF[gW] = void 0, YS(FF), FF
      }
      add(FF) {
        if (this.has(FF)) return !1;
        const WF = this.$refId++,
          SF = this[rW];
        return this.$items.set(WF, FF), SF.isStreamCollection ? void 0 !== SF.root && OW(this, SF.root, WF) : SF.change(WF, AF.ADD), void 0 !== FF[rW] && FF[rW].setParent(this, SF.root, WF), WF
      }
      entries() {
        return this.$items.entries()
      }
      delete(FF) {
        const WF = this.$items.entries();
        let SF, CF;
        for (;
          (CF = WF.next()) && !CF.done;)
          if (FF === CF.value[1]) {
            SF = CF.value[0];
            break
          } if (void 0 === SF) return !1;
        const AF = this[rW];
        if (AF.isStreamCollection) {
          const FF = AF.root,
            WF = this.$items.get(SF);
          return void 0 !== FF && xS(this, FF, this[bW], SF), void 0 !== WF?.[rW] && FF?.remove(WF[rW]), this.deletedItems[SF] = WF, this.$items.delete(SF)
        }
        return this.deletedItems[SF] = AF.delete(SF), this.$items.delete(SF)
      }
      clear() {
        const FF = this[rW];
        FF.discard(), this.$items.clear(), FF.operation(AF.CLEAR)
      } [aW]() {
        const FF = this[rW];
        if (FF.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((FF => FF?.[aW]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, FF.recycle(), this[bW] = void 0
      }
      has(FF) {
        const WF = this.$items.values();
        let SF, CF = !1;
        for (;
          (SF = WF.next()) && !SF.done;)
          if (FF === SF.value) {
            CF = !0;
            break
          } return CF
      }
      forEach(FF) {
        this.$items.forEach(((WF, SF, CF) => FF(WF, SF, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[rW].pause()
      }
      resumeTracking() {
        this[rW].resume()
      }
      untracked(FF) {
        return this[rW].untracked(FF)
      }
      get isTrackingPaused() {
        return this[rW].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(FF, WF) {}
      getIndex(FF) {
        return FF
      } [eF](FF) {
        return this.$items.get(FF)
      } [EF](FF) {
        this.$items.delete(FF)
      } [QF](FF, WF, SF) {
        let CF = null;
        if (this.$items.forEach(((AF, uF) => {
            FF.has(uF) ? SF(AF) : ((CF ??= []).push(uF), WF(AF, uF))
          })), null !== CF)
          for (let AF = 0; AF < CF.length; AF++) this[EF](CF[AF])
      } [TF]() {
        for (const FF in this.deletedItems) delete this.deletedItems[FF]
      }
      _dropView(FF) {
        MW(this, FF)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const FF = [];
        return this.forEach(((WF, SF) => {
          FF.push("function" === typeof WF.toJSON ? WF.toJSON() : WF)
        })), FF
      }
      clone(FF) {
        let WF;
        return FF ? WF = Object.assign(new hC, this) : (WF = new hC, this.forEach((FF => {
          FF[rW] ? WF.add(FF.clone()) : WF.add(FF)
        }))), WF
      }
    }
    VW("set", {
      constructor: hC
    });
    class bA {
      [rW];
      [bW];
      [gW];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(FF) {
        (this._stream ??= LW()).maxPerTick = FF
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(FF) {
        (this._stream ??= LW()).priority = FF
      }
      static $isStream = !0;
      static[PF] = zC;
      static[RF] = vC;
      static COLLECTION_KIND = US;
      static[iW](FF, WF, SF) {
        if (!SF) return !0;
        const CF = FF[eF](WF);
        return void 0 !== CF && SF.isVisible(CF[rW])
      }
      static is(FF) {
        return FF && void 0 !== FF.stream
      }
      constructor() {
        Object.defineProperty(this, rW, {
          value: new ZS(this),
          enumerable: !1,
          writable: !0
        }), this[gW] = void 0
      }
      static initializeForDecoder() {
        const FF = Object.create(bA.prototype);
        return FF.$items = new Map, FF.$nextPosition = 0, FF._itemIndex = new Map, FF[gW] = void 0, YS(FF), FF
      }
      add(FF) {
        if (this._itemIndex.has(FF)) return -1;
        const WF = this.$nextPosition++;
        this.$items.set(WF, FF), this._itemIndex.set(FF, WF);
        const SF = this[rW].root;
        return void 0 !== FF[rW] && FF[rW].setParent(this, SF, WF), void 0 !== SF && OW(this, SF, WF), WF
      }
      remove(FF) {
        const WF = this._itemIndex.get(FF);
        if (void 0 === WF) return !1;
        this._itemIndex.delete(FF), this.$items.delete(WF);
        const SF = this[rW].root;
        return void 0 !== SF && (xS(this, SF, this[bW], WF), void 0 !== FF[rW] && SF.remove(FF[rW])), !0
      }
      has(FF) {
        return this._itemIndex.has(FF)
      }
      clear() {
        const FF = this[rW].root;
        if (void 0 !== FF) {
          ! function(FF, WF, SF) {
            const CF = FF._stream;
            if (void 0 !== CF) {
              CF.broadcastPending.clear();
              for (const FF of CF.sentBroadcast) CF.broadcastDeletes.add(FF);
              CF.sentBroadcast.clear(), WF.forEachActiveView((FF => {
                CF.pendingByView.get(FF.id)?.clear();
                const WF = CF.sentByView.get(FF.id);
                if (void 0 !== WF && WF.size > 0) {
                  let CF = FF.changes.get(SF);
                  void 0 === CF && (CF = new Map, FF.changes.set(SF, CF));
                  for (const FF of WF) CF.set(FF, AF.DELETE);
                  WF.clear()
                }
              }))
            }
          }(this, FF, this[bW]);
          for (const WF of this.$items.values()) void 0 !== WF[rW] && FF.remove(WF[rW])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(FF) {
        for (const [WF, SF] of this.$items) FF(SF, WF, this)
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
      setIndex(FF, WF) {}
      getIndex(FF) {
        return FF
      } [eF](FF) {
        return this.$items.get(FF)
      } [EF](FF) {
        const WF = this.$items.get(FF);
        void 0 !== WF && (this._itemIndex.delete(WF), this.$items.delete(FF))
      } [QF]() {} [TF]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const FF = [];
        return this.forEach((WF => {
          FF.push("function" === typeof WF?.toJSON ? WF.toJSON() : WF)
        })), FF
      }
      clone(FF) {
        if (FF) {
          return Object.assign(new bA, this)
        }
        const WF = new bA;
        return WF.maxPerTick = this.maxPerTick, this.forEach((FF => {
          WF.add("function" === typeof FF?.clone ? FF.clone() : FF)
        })), WF
      }
      _dropView(FF) {
        MW(this, FF)
      }
      _unregister() {}
    }
    VW("stream", {
      constructor: bA
    });
    class dC {
      [VF] = !0;
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
      constructor(FF) {
        this._type = FF
      }
      default (FF) {
        return this._default = FF, this._hasDefault = !0, this
      }
      view(FF) {
        return this._view = FF ?? -1, this
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
        const FF = this._type;
        if (FF && "object" === typeof FF && void 0 !== FF.array) throw new Error(DW);
        return this._stream = !0, this
      }
      priority(FF) {
        return this._streamPriority = FF, this
      }
      deprecated() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = FF, this
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

    function PC(FF) {
      return null != FF && !0 === FF[VF]
    }

    function RC(FF) {
      return () => new dC(FF)
    }

    function iA(FF) {
      if (PC(FF)) {
        const WF = FF._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof WF?`use the type name instead: t.array("${WF}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return FF
    }

    function eC(FF) {
      return new dC({
        quantized: GW(FF)
      })
    }
    const EC = Object.freeze({
        string: RC("string"),
        number: RC("number"),
        boolean: RC("boolean"),
        int8: RC("int8"),
        uint8: RC("uint8"),
        int16: RC("int16"),
        uint16: RC("uint16"),
        int32: RC("int32"),
        uint32: RC("uint32"),
        int64: RC("int64"),
        uint64: RC("uint64"),
        float32: RC("float32"),
        float64: RC("float64"),
        bigint64: RC("bigint64"),
        biguint64: RC("biguint64"),
        ref: FF => new dC(FF),
        array: FF => new dC({
          array: iA(FF)
        }),
        map: FF => new dC({
          map: iA(FF)
        }),
        set: FF => new dC({
          set: iA(FF)
        }),
        collection: FF => new dC({
          collection: iA(FF)
        }),
        stream: FF => {
          const WF = new dC({
            stream: iA(FF)
          });
          return WF._stream = !0, WF
        },
        quantized: eC,
        angle: FF => eC({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: FF?.bits ?? 16
        })
      }),
      QC = -1;

    function rA(FF) {
      return sW.register(FF), FF
    }

    function gA() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QC;
      return function(WF, SF) {
        const CF = BW.initialize(WF.constructor);
        BW.setTag(CF, SF, FF)
      }
    }

    function tA(FF, WF) {
      const SF = BW.initialize(FF.constructor);
      BW.setUnreliable(SF, WF)
    }

    function TC(FF, WF) {
      const SF = BW.initialize(FF.constructor);
      BW.setPatchOnly(SF, WF)
    }

    function aA(FF, WF) {
      const SF = BW.initialize(FF.constructor);
      BW.setFullStateOnly(SF, WF)
    }

    function kA(FF, WF) {
      return function(SF, CF) {
        const AF = SF.constructor;
        if (!FF) throw new Error(`${AF.name}: @type() reference provided for "${CF}" is undefined. Make sure you don't have any circular dependencies.`);
        FF = HW(FF, `${AF.name}.${CF}`), sW.register(AF);
        const uF = Object.getPrototypeOf(AF)[Symbol.metadata],
          hF = BW.initialize(AF);
        let bW = hF[CF];
        if (void 0 !== hF[bW]) {
          if (hF[bW].deprecated) return;
          if (void 0 !== hF[bW].type) {
            const FF = new Error(`@colyseus/schema: Duplicate '${CF}' definition on '${AF.name}'.\nCheck @type() annotation`);
            throw new Error(`${FF.message} ${FF.stack.split("\n")[4].trim()}`)
          }
        } else bW = hF[mW] ?? (uF && uF[mW]) ?? -1, bW++;
        if (WF && WF.manual) BW.addField(hF, bW, CF, FF, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: WF,
            childType: SF
          } = nW(FF);
          BW.addField(hF, bW, CF, FF, VC(CF, bW, SF, WF))
        }
        hF[NF][CF] && Object.defineProperty(SF, CF, hF[NF][CF]), ("string" === typeof FF || zS(FF)) && (hF[LF] || Object.defineProperty(hF, LF, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), hF[LF][bW] = "string" === typeof FF ? WW[FF] : yS(FF.quantized))
      }
    }
    const qA = {
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

    function VC(FF, WF, SF, CF) {
      let uF;
      return uF = CF ? function(FF, WF, SF, CF) {
        const uF = CF.constructor === SC,
          hF = CF.constructor === AC;
        return function(FF) {
          const CF = this[qW],
            bW = CF[WF];
          if (FF !== bW) {
            if (void 0 !== FF && null !== FF) {
              if (!uF || FF instanceof SC)
                if (!hF || FF instanceof AC) FF[gW] = SF;
                else {
                  const WF = new AC;
                  if (WF[gW] = SF, FF instanceof Map) FF.forEach(((FF, SF) => WF.set(SF, FF)));
                  else
                    for (const SF in FF) WF.set(SF, FF[SF]);
                  FF = WF
                }
              else {
                const WF = new SC;
                WF[gW] = SF, WF.push(...FF), FF = WF
              }
              const CF = this[rW],
                PF = this.constructor;
              void 0 !== bW && null !== bW && bW[rW] ? (CF.root?.remove(bW[rW]), PF[dF](CF, WF, AF.DELETE_AND_ADD)) : PF[dF](CF, WF, AF.ADD), FF[rW]?.setParent(this, CF.root, WF)
            } else void 0 !== bW && null !== bW && this[rW].delete(WF);
            CF[WF] = FF
          }
        }
      }(0, WF, SF, CF) : "string" === typeof SF ? function(FF, WF, SF) {
        const CF = qA[SF],
          uF = "string" === SF,
          hF = "boolean" === SF;
        return function(SF) {
          const bW = this[qW],
            PF = bW[WF];
          if (SF !== PF) {
            if (void 0 !== SF && null !== SF) {
              if (!hF && void 0 !== CF && typeof SF !== CF && (!uF || null !== SF)) {
                const WF = SF && SF.constructor ? ` (${SF.constructor.name})` : "";
                throw new pS(`a '${CF}' was expected, but '${JSON.stringify(SF)}'${WF} was provided in ${this.constructor.name}#${FF}`)
              }
              this.constructor[dF](this[rW], WF, AF.ADD)
            } else void 0 !== PF && null !== PF && this[rW].delete(WF);
            bW[WF] = SF
          }
        }
      }(FF, WF, SF) : zS(SF) ? function(FF, WF, SF) {
        return function(CF) {
          const uF = this[qW],
            hF = uF[WF];
          if (void 0 !== CF && null !== CF) {
            if ("number" !== typeof CF) throw new pS(`a 'number' was expected, but '${JSON.stringify(CF)}' was provided in ${this.constructor.name}#${FF}`);
            if ((CF = fW(SF, IW(SF, CF))) === hF) return;
            this.constructor[dF](this[rW], WF, AF.ADD)
          } else {
            if (CF === hF) return;
            void 0 !== hF && null !== hF && this[rW].delete(WF)
          }
          uF[WF] = CF
        }
      }(FF, WF, SF.quantized) : function(FF, WF, SF) {
        return function(CF) {
          const uF = this[qW],
            hF = uF[WF];
          if (CF !== hF) {
            if (void 0 !== CF && null !== CF) {
              lS(CF, SF, this, FF);
              const uF = this[rW],
                bW = this.constructor;
              void 0 !== hF && null !== hF && hF[rW] ? (uF.root?.remove(hF[rW]), bW[dF](uF, WF, AF.DELETE_AND_ADD)) : bW[dF](uF, WF, AF.ADD), CF[rW]?.setParent(this, uF.root, WF)
            } else void 0 !== hF && null !== hF && this[rW].delete(WF);
            uF[WF] = CF
          }
        }
      }(FF, WF, SF), {
        get: function() {
          return this[qW][WF]
        },
        set: uF,
        enumerable: !0,
        configurable: !0
      }
    }

    function NC() {
      let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(WF, SF) {
        const CF = BW.initialize(WF.constructor);
        BW.setDeprecated(CF, SF), FF && (CF[NF] ??= {}, CF[NF][SF] = {
          get: function() {
            throw new Error(`${SF} is deprecated.`)
          },
          set: function(FF) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(WF, SF, CF[NF][SF]))
      }
    }
    let DC = !1;

    function LC(FF, WF, SF) {
      DC || (DC = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let CF in WF) kA(WF[CF], SF)(FF.prototype, CF);
      return FF
    }

    function mA(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xA;
      if (null == FF || "object" !== typeof FF) throw new Error(`schema(): first argument must be a fields object (got ${typeof FF}).`);
      const CF = {},
        AF = {},
        uF = {},
        hF = {},
        bW = (FF, WF) => {
          if (WF.hasDefault)((FF, WF) => {
            "function" === typeof WF ? hF[FF] = WF : WF && "function" === typeof WF.clone ? hF[FF] = () => WF.clone() : uF[FF] = WF
          })(FF, WF.default);
          else if (!WF.optional) {
            const SF = function(FF) {
              if (FF && "object" === typeof FF) {
                if (void 0 !== FF.array) return () => new SC;
                if (void 0 !== FF.map) return () => new AC;
                if (void 0 !== FF.set) return () => new hC;
                if (void 0 !== FF.collection) return () => new uC;
                if (void 0 !== FF.stream) return () => new bA
              } else if ("function" === typeof FF && xA.is(FF) && (!FF.prototype.initialize || 0 === FF.prototype.initialize.length)) return () => new FF
            }(WF.type);
            SF && (hF[FF] = SF)
          }
        },
        dF = {},
        PF = [],
        RF = [],
        iW = {},
        eF = [],
        EF = [],
        QF = {},
        rW = [];
      for (const qW in FF) {
        const SF = FF[qW],
          uF = `schema(${WF?`'${WF}'`:""}): field '${qW}'`;
        if (PC(SF)) {
          const FF = SF.toDefinition();
          if (FF.noSync) {
            if (void 0 !== FF.view || FF.unreliable || FF.patchOnly || FF.fullStateOnly || FF.stream) throw new Error(`${uF} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            bW(qW, FF);
            continue
          }
          if (FF.patchOnly && FF.fullStateOnly) throw new Error(`${uF} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const WF = HW(FF.type, uF);
          if ("function" === typeof WF && !xA.is(WF)) throw new Error(`${uF} is a synced ref to non-Schema class '${WF.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          CF[qW] = WF, void 0 !== FF.view && (dF[qW] = FF.view), FF.unreliable && PF.push(qW), FF.patchOnly && RF.push(qW), FF.deprecated && (iW[qW] = FF.deprecatedThrows), FF.fullStateOnly && eF.push(qW), FF.stream && EF.push(qW), void 0 !== FF.streamPriority && (QF[qW] = FF.streamPriority), FF.optional && rW.push(qW), bW(qW, FF)
        } else {
          if ("function" !== typeof SF) throw new Error(`${uF} must be a t.* builder, Schema subclass, or method (got ${typeof SF}).`);
          xA.is(SF) ? (CF[qW] = SF, SF.prototype.initialize && 0 !== SF.prototype.initialize.length || (hF[qW] = () => new SF)) : AF[qW] = SF
        }
      }
      const gW = FF => {
          for (const WF in uF) FF[WF] = uF[WF];
          for (const WF in hF) FF[WF] = hF[WF]()
        },
        tW = () => {
          const FF = {};
          return gW(FF), FF
        },
        TF = "function" === typeof AF.initialize,
        aW = AF.initialize ?? SF._initialize,
        kW = class extends SF {
          constructor() {
            for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
            const AF = WF[0];
            void 0 === AF ? (super(), gW(this)) : super(Object.assign(tW(), TF ? (FF => {
              const WF = Object.keys(CF),
                SF = {};
              for (const CF in FF) WF.includes(CF) || (SF[CF] = FF[CF]);
              return SF
            })(AF) : AF)), aW && new.target === kW && aW.apply(this, WF)
          }
        };
      WF && Object.defineProperty(kW, "name", {
        value: WF
      }), BW.setFields(kW, CF), kW._getDefaultValues = tW, kW._initialize = aW, Object.assign(kW.prototype, AF);
      for (const qW in dF) gA(dF[qW])(kW.prototype, qW);
      for (const qW of PF) tA(kW.prototype, qW);
      for (const qW of RF) TC(kW.prototype, qW);
      for (const qW in iW) NC(iW[qW])(kW.prototype, qW);
      if (eF.length > 0 || EF.length > 0) {
        const FF = kW[Symbol.metadata];
        for (const WF of eF) BW.setFullStateOnly(FF, WF);
        for (const WF of EF) BW.setStream(FF, WF);
        for (const WF in QF) BW.setStreamPriority(FF, WF, QF[WF])
      }
      if (rW.length > 0) {
        const FF = kW[Symbol.metadata];
        for (const WF of rW) FF[FF[WF]].optional = !0
      }
      return kW.extend = (FF, WF) => mA(FF, WF, kW), kW
    }

    function OC(FF) {
      const WF = FF[rW].root,
        SF = {
          ops: {},
          refs: []
        };
      let CF = WF.changes.next;
      for (; CF;) {
        const FF = CF.changeTree;
        void 0 !== FF ? (SF.refs.push(`refId#${FF.ref[bW]}`), FF.forEach(((FF, WF) => {
          if (FF < 0 || !WF) return;
          const CF = AF[WF];
          SF.ops[CF] || (SF.ops[CF] = 0), SF.ops[CF]++
        })), CF = CF.next) : CF = CF.next
      }
      return SF
    }
    class xA {
      static[PF] = cC;
      static[RF] = jC;
      [bW];
      [qW];
      static initialize(FF) {
        Object.defineProperty(FF, rW, {
          value: new ZS(FF),
          enumerable: !1,
          writable: !0
        }), FF[qW] = []
      }
      static initializeForDecoder() {
        const FF = Object.create(this.prototype);
        return YS(FF), FF[qW] = [], FF
      }
      static reset(FF) {
        const WF = FF?.[rW];
        if (void 0 === WF || "function" !== typeof WF.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== WF.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${FF.constructor.name}) with multiple parents.`);
        FF[aW]()
      } [aW]() {
        const FF = this.constructor[Symbol.metadata],
          WF = FF?.[OF] ?? [],
          SF = this[qW];
        for (let CF = 0; CF < WF.length; CF++) {
          const FF = SF[WF[CF]];
          FF?.[aW]?.()
        }
        this[rW].recycle(), this[bW] = void 0
      }
      static is(FF) {
        const WF = FF[Symbol.metadata];
        return "object" === typeof WF && null !== WF
      }
      static isSchema(FF) {
        return "function" === typeof FF?.assign
      }
      static[dF](FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AF.ADD;
        FF.change(WF, SF)
      }
      static[iW](FF, WF, SF) {
        const CF = FF.constructor[Symbol.metadata],
          AF = CF[WF]?.tag;
        return void 0 === SF ? void 0 === AF : void 0 === AF || (AF === QC ? SF.isChangeTreeVisible(FF[rW]) : SF.hasTagOnTree(FF[rW], AF))
      }
      constructor(FF) {
        xA.initialize(this), FF && xA.assignProps(this, FF)
      }
      assign(FF) {
        return xA.assignProps(this, FF), this
      }
      static assignProps(FF, WF) {
        const SF = FF.constructor[Symbol.metadata];
        if (SF && void 0 !== SF[mW])
          for (let AF = 0; AF <= SF[mW]; AF++) {
            const CF = SF[AF];
            if (!CF) continue;
            const uF = WF[CF.name];
            void 0 !== uF && (FF[CF.name] = uF)
          }
        const CF = Object.keys(WF);
        for (let AF = 0; AF < CF.length; AF++) {
          const uF = CF[AF];
          SF && void 0 !== SF[uF] || (FF[uF] = WF[uF])
        }
      }
      restore(FF) {
        const WF = this.constructor[Symbol.metadata];
        for (const SF in WF) {
          const CF = WF[SF],
            AF = CF.name,
            uF = CF.type,
            hF = FF[AF];
          if (void 0 !== hF && null !== hF)
            if ("string" === typeof uF) this[AF] = hF;
            else if (xA.is(uF)) {
            const FF = new uF;
            FF.restore(hF), this[AF] = FF
          } else if ("object" === typeof uF) {
            const FF = Object.keys(uF)[0],
              WF = uF[FF];
            if ("map" === FF) {
              const FF = this[AF];
              for (const SF in hF)
                if (xA.is(WF)) {
                  const CF = new WF;
                  CF.restore(hF[SF]), FF.set(SF, CF)
                } else FF.set(SF, hF[SF])
            } else if ("array" === FF) {
              const FF = this[AF];
              for (let SF = 0; SF < hF.length; SF++)
                if (xA.is(WF)) {
                  const CF = new WF;
                  CF.restore(hF[SF]), FF.push(CF)
                } else FF.push(hF[SF])
            }
          }
        }
        return this
      }
      setDirty(FF, WF) {
        const SF = this.constructor[Symbol.metadata];
        this[rW].change(SF[SF[FF]].index, WF)
      }
      pauseTracking() {
        this[rW].pause()
      }
      resumeTracking() {
        this[rW].resume()
      }
      untracked(FF) {
        return this[rW].untracked(FF)
      }
      get isTrackingPaused() {
        return this[rW].paused
      }
      clone() {
        const FF = Object.create(this.constructor.prototype);
        xA.initialize(FF);
        const WF = this.constructor[Symbol.metadata];
        for (const SF in WF) {
          const CF = WF[SF].name;
          "object" === typeof this[CF] && "function" === typeof this[CF]?.clone ? FF[CF] = this[CF].clone() : FF[CF] = this[CF]
        }
        return FF
      }
      toJSON() {
        const FF = {},
          WF = this.constructor[Symbol.metadata];
        for (const SF in WF) {
          const CF = WF[SF],
            AF = CF.name;
          CF.deprecated || null === this[AF] || "undefined" === typeof this[AF] || (FF[AF] = "function" === typeof this[AF].toJSON ? this[AF].toJSON() : this[AF])
        }
        return FF
      }
      discardAllChanges() {
        this[rW].discardAll()
      } [eF](FF) {
        return this[this.constructor[Symbol.metadata][FF].name]
      } [EF](FF) {
        this[this.constructor[Symbol.metadata][FF].name] = void 0
      }
      static debugRefIds(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 ? arguments[3] : void 0,
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const uF = WF ? ` - ${JSON.stringify(FF.toJSON())}` : "",
          hF = FF[rW],
          dF = FF[bW],
          PF = CF ? CF.root.refCount[dF] : hF.refCount,
          RF = PF > 1 ? ` [\xd7${PF}]` : "";
        let iW = `${function(FF){return new Array(FF).fill(0).map(((WF,SF)=>SF===FF-1?"\u2514\u2500 ":"   ")).join("")}(SF)}${AF}${FF.constructor.name} (refId: ${dF})${RF}${uF}\n`;
        return hF.forEachChild(((AF, uF) => {
          let hF = uF;
          "number" === typeof uF && FF.$indexes && (hF = FF.$indexes.get(uF) ?? uF);
          const bW = void 0 !== FF.forEach && void 0 !== hF ? `["${hF}"]: ` : "";
          iW += this.debugRefIds(AF.ref, WF, SF + 1, CF, bW)
        })), iW
      }
      static debugRefIdEncodingOrder(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const SF = [],
          CF = FF[rW];
        if ("changes" === WF) {
          let FF = CF.root.changes?.next;
          for (; FF;) FF.changeTree && SF.push(FF.changeTree.ref[bW]), FF = FF.next;
          return SF
        }
        const AF = "allFilteredChanges" === WF,
          uF = new Set,
          hF = FF => {
            uF.has(FF) || (uF.add(FF), FF.isFiltered === AF && SF.push(FF.ref[bW]), FF.forEachChild(((FF, WF) => hF(FF))))
          };
        return hF(CF), SF
      }
      static debugRefIdsFromDecoder(FF) {
        return this.debugRefIds(FF.state, !1, 0, FF)
      }
      static debugChanges(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = FF[rW],
          CF = WF ? "allChanges" : "changes";
        let uF = `${FF.constructor.name} (${FF[bW]}) -> .${CF}:\n`;
        return WF ? SF.forEachLive((FF => {
          uF += `- [${FF}]: ADD (${JSON.stringify(SF.getValue(Number(FF),!0))})\n`
        })) : SF.forEach(((FF, WF) => {
          FF < 0 || !WF || (uF += `- [${FF}]: ${AF[WF]} (${JSON.stringify(SF.getValue(Number(FF),!1))})\n`)
        })), uF
      }
    }
    uF(xA);
    const ZC = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class oC {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const FF = {};
        for (const WF in this.changeTrees) FF[WF] = this.changeTrees[WF].refCount;
        return FF
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
      enqueueFilterRefresh(FF) {
        this.types.hasFilters && (FF.flags & OS || (FF.flags |= OS, this.pendingFilterRefresh.push(FF)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(FF) {
        this._freeViewIds.push(FF)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(FF) {
        this.activeViews.set(FF.id, new WeakRef(FF))
      }
      unregisterView(FF) {
        this.activeViews.delete(FF.id);
        const WF = FF.id;
        for (const SF of this.streamTrees) SF._dropView(WF)
      }
      forEachActiveView(FF) {
        for (const [WF, SF] of this.activeViews) {
          const CF = SF.deref();
          if (void 0 !== CF) FF(CF);
          else {
            this.activeViews.delete(WF);
            for (const FF of this.streamTrees) FF._dropView(WF)
          }
        }
      }
      registerStream(FF) {
        this.streamTrees.add(FF)
      }
      unregisterStream(FF) {
        this.streamTrees.delete(FF)
      }
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = FF, this.nextUniqueId = WF
      }
      add(FF) {
        const WF = FF.ref;
        void 0 === WF[bW] && (ZC.value = this.nextUniqueId++, Object.defineProperty(WF, bW, ZC));
        const SF = WF[bW],
          CF = void 0 === this.changeTrees[SF];
        CF && (this.changeTrees[SF] = FF), FF.needsRestage && (FF.needsRestage = !1, FF.forEachLiveWithCtx(FF, SS));
        const AF = CF ? 0 : FF.refCount;
        return FF.refCount = AF + 1, AF > 0 && this.enqueueFilterRefresh(FF), CF
      }
      remove(FF) {
        const WF = FF.refCount - 1;
        if (WF <= 0) {
          if (FF.root = void 0, delete this.changeTrees[FF.ref[bW]], FF.isStreamCollection) {
            const WF = FF.ref;
            WF._unregister?.(), this.unregisterStream(WF)
          }
          this.removeFromQueue(FF), this.removeFromUnreliableQueue(FF), FF.refCount = 0, FF.needsRestage = !0, FF.forEachChild(((WF, SF) => {
            WF.removeParent(FF.ref) && (void 0 === WF.parentRef || WF.refCount > 0 ? this.remove(WF) : this.moveNextToParent(WF))
          }))
        } else FF.refCount = WF, this.enqueueFilterRefresh(FF), this.recursivelyMoveNextToParent(FF);
        return WF
      }
      recursivelyMoveNextToParent(FF) {
        this.moveNextToParent(FF), FF.forEachChild(((FF, WF) => this.recursivelyMoveNextToParent(FF)))
      }
      moveNextToParent(FF) {
        FF.changesNode && this._moveNextToParentInList(this.changes, FF, FF.changesNode, "changesNode"), FF.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, FF, FF.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(FF, WF, SF, CF) {
        const AF = WF.parent;
        if (!AF || !AF[rW]) return;
        const uF = AF[rW][CF];
        uF && uF !== SF && (SF.position > uF.position || (SF.prev ? SF.prev.next = SF.next : FF.next = SF.next, SF.next ? SF.next.prev = SF.prev : FF.tail = SF.prev, SF.prev = FF.tail, SF.next = void 0, FF.tail.next = SF, FF.tail = SF, SF.position = FF.nextPosition++))
      }
      enqueueChangeTree(FF) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF.changesNode) || (FF.changesNode = this._appendToList(this.changes, FF))
      }
      enqueueUnreliable(FF) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF.unreliableChangesNode) || (FF.unreliableChangesNode = this._appendToList(this.unreliableChanges, FF))
      }
      _appendToList(FF, WF) {
        const SF = this._nodePool;
        let CF;
        return SF.length > 0 ? (CF = SF.pop(), CF.changeTree = WF, CF.next = void 0, CF.prev = void 0) : CF = {
          changeTree: WF,
          next: void 0,
          prev: void 0,
          position: 0
        }, FF.next ? (CF.prev = FF.tail, FF.tail.next = CF, FF.tail = CF) : (FF.nextPosition = 0, FF.next = CF, FF.tail = CF), CF.position = FF.nextPosition++, CF
      }
      releaseNode(FF) {
        FF.changeTree = void 0, FF.prev = void 0, FF.next = void 0, this._nodePool.push(FF)
      }
      removeFromQueue(FF) {
        return this._removeNode(this.changes, FF, FF.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(FF) {
        return this._removeNode(this.unreliableChanges, FF, FF.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(FF, WF, SF, CF) {
        return !(!SF || SF.changeTree !== WF) && (SF.prev ? SF.prev.next = SF.next : FF.next = SF.next, SF.next ? SF.next.prev = SF.prev : FF.tail = SF.prev, WF[CF] = void 0, this.releaseNode(SF), !0)
      }
    }

    function YC(FF, WF) {
      if (-1 === WF || WF >= FF.length) return !1;
      const SF = FF.length - 1;
      for (let CF = WF; CF < SF; CF++) FF[CF] = FF[CF + 1];
      return FF.length = SF, !0
    }

    function MC(FF, WF, SF) {
      const CF = ~SF,
        AF = FF.changeTrees;
      for (const uF in AF) {
        const FF = AF[uF],
          SF = FF.visibleViews;
        void 0 !== SF && WF < SF.length && (SF[WF] &= CF);
        const hF = FF.subscribedViews;
        void 0 !== hF && WF < hF.length && (hF[WF] &= CF);
        const bW = FF.tagViews;
        void 0 !== bW && bW.forEach((FF => {
          WF < FF.length && (FF[WF] &= CF)
        }))
      }
    }
    const cA = new FinalizationRegistry((FF => {
      let {
        root: WF,
        id: SF,
        slot: CF,
        bit: AF
      } = FF;
      MC(WF, CF, AF), WF.activeViews.delete(SF);
      for (const uF of WF.streamTrees) uF._dropView(SF);
      WF.releaseViewId(SF)
    }));

    function GC(FF) {
      if (void 0 === FF) return "undefined";
      if (null === FF) return "null";
      const WF = typeof FF;
      return "string" === WF ? JSON.stringify(FF.length > 30 ? `${FF.slice(0,30)}\u2026` : FF) : "object" !== WF && "function" !== WF ? `${WF} ${String(FF)}` : Array.isArray(FF) ? `Array(${FF.length})` : FF.constructor?.name ?? "Object"
    }
    class zA {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = FF, FF && (this.items = [])
      }
      _bindRoot(FF) {
        void 0 === this._root && (this._root = FF, this.id = FF.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), FF.registerView(this), cA.register(this, {
          root: FF,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), MC(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), cA.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(FF) {
        const WF = FF.visibleViews,
          SF = this._slot;
        return void 0 !== WF && SF < WF.length && 0 !== (WF[SF] & this._bit)
      }
      markVisible(FF) {
        const WF = this._slot;
        let SF = FF.visibleViews;
        for (void 0 === SF && (SF = FF.visibleViews = []); SF.length <= WF;) SF.push(0);
        SF[WF] |= this._bit
      }
      unmarkVisible(FF) {
        const WF = FF.visibleViews;
        if (void 0 === WF) return;
        const SF = this._slot;
        SF < WF.length && (WF[SF] &= ~this._bit)
      }
      isSubscribed(FF) {
        const WF = FF.subscribedViews,
          SF = this._slot;
        return void 0 !== WF && SF < WF.length && 0 !== (WF[SF] & this._bit)
      }
      _setSubscribed(FF) {
        const WF = this._slot;
        let SF = FF.subscribedViews;
        for (void 0 === SF && (SF = FF.subscribedViews = []); SF.length <= WF;) SF.push(0);
        SF[WF] |= this._bit
      }
      _clearSubscribed(FF) {
        const WF = FF.subscribedViews;
        if (void 0 === WF) return;
        const SF = this._slot;
        SF < WF.length && (WF[SF] &= ~this._bit)
      }
      hasTagOnTree(FF, WF) {
        const SF = FF.tagViews;
        if (void 0 === SF) return !1;
        const CF = this._slot,
          AF = this._bit;
        for (let uF = WF; 0 !== uF; uF &= uF - 1) {
          const FF = SF.get(uF & -uF);
          if (void 0 !== FF && CF < FF.length && 0 !== (FF[CF] & AF)) return !0
        }
        return !1
      }
      addTag(FF, WF) {
        if (WF === QC) return;
        let SF = FF.tagViews;
        void 0 === SF && (SF = FF.tagViews = new Map);
        const CF = this._slot,
          AF = this._bit;
        for (let uF = WF; uF > 0; uF &= uF - 1) {
          const FF = uF & -uF;
          let WF = SF.get(FF);
          for (void 0 === WF && (WF = [], SF.set(FF, WF)); WF.length <= CF;) WF.push(0);
          WF[CF] |= AF
        }
      }
      removeTag(FF, WF) {
        if (WF === QC) return;
        const SF = FF.tagViews;
        if (void 0 === SF) return;
        const CF = this._slot,
          AF = ~this._bit;
        for (let uF = WF; uF > 0; uF &= uF - 1) {
          const FF = SF.get(uF & -uF);
          void 0 !== FF && CF < FF.length && (FF[CF] &= AF)
        }
      }
      removeAllTagsOnTree(FF) {
        const WF = FF.tagViews;
        if (void 0 === WF) return;
        const SF = this._slot,
          CF = ~this._bit;
        WF.forEach((FF => {
          SF < FF.length && (FF[SF] &= CF)
        }))
      }
      add(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC,
          SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(FF, WF, SF, !1)
      }
      _addImmediate(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC;
        this._add(FF, WF, !0, !0)
      }
      _add(FF, WF, SF, CF) {
        const uF = FF?.[rW];
        if (!uF) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${GC(FF)}`), !1;
        const hF = uF.parent;
        if (!hF && 0 !== FF[bW]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${uF.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== uF.root && this._bindRoot(uF.root);
        const dF = hF?.[rW];
        if (!CF && dF?.isStreamCollection) return YW(hF, this.id, uF.parentIndex), !0;
        const PF = FF.constructor[Symbol.metadata],
          RF = this.isVisible(uF);
        if (!this.iterable || !SF || RF && -1 !== this.items.indexOf(FF) || this.items.push(FF), this.markVisible(uF), SF && hF && this.addParentOf(uF, WF), !CF && uF.isStreamCollection) return !0;
        if (WF === QC && uF.isNew) return this._markSubtreeVisible(uF, WF), !1;
        let iW = this.changes.get(FF[bW]);
        void 0 === iW && (iW = new Map, this.changes.set(FF[bW], iW));
        let eF = !1;
        const EF = uF.encDescriptor.tags;
        if (uF.forEachChild(((FF, SF) => {
            const CF = EF[SF];
            if (void 0 !== CF) {
              if (!(CF === QC || WF !== QC && 0 !== (CF & WF))) return
            }
            this.add(FF.ref, WF, !1) && (eF = !0)
          })), WF !== QC) {
          this.addTag(uF, WF);
          const FF = PF?.[ZF];
          if (void 0 !== FF)
            for (let SF = WF; SF > 0; SF &= SF - 1) FF[SF & -SF]?.forEach((FF => {
              uF.getChange(FF) !== AF.DELETE && iW.set(FF, AF.ADD)
            }))
        }
        if ((WF === QC || !RF) && (!uF.isNew || eF))
          if (uF.isArray && "string" !== typeof uF.refTarget[gW]) uF.refTarget.items.length > 0 && (iW.set(-1, AF.ADD), eF = !0);
          else {
            const FF = uF.encDescriptor.tags;
            uF.forEachLive((SF => {
              const CF = FF[SF];
              (void 0 === CF || CF === QC || WF !== QC && 0 !== (CF & WF)) && (iW.set(SF, AF.ADD), eF = !0)
            }))
          } return eF
      }
      _markSubtreeVisible(FF, WF) {
        const SF = FF.encDescriptor.tags;
        FF.forEachChild(((FF, CF) => {
          const AF = SF[CF];
          if (void 0 !== AF) {
            if (!(AF === QC || WF !== QC && 0 !== (AF & WF))) return
          }
          FF.isNew ? (this.markVisible(FF), this._markSubtreeVisible(FF, WF)) : this._add(FF.ref, WF, !1, !1)
        }))
      }
      addParentOf(FF, WF) {
        const SF = FF.parent[rW],
          CF = FF.parentIndex;
        this.isVisible(SF) || this.markVisible(SF);
        const uF = SF.parent?.[rW];
        if (uF && this.addParentOf(SF, WF), SF.hasFilteredFields && SF.getChange(CF) !== AF.DELETE) {
          let uF = this.changes.get(SF.ref[bW]);
          void 0 === uF && (uF = new Map, this.changes.set(SF.ref[bW], uF));
          const hF = SF.encDescriptor.tags[CF];
          void 0 !== hF && hF !== QC && 0 !== (hF & WF) && this.addTag(SF, WF), uF.set(SF.isArray ? FF : CF, AF.ADD)
        }
      }
      _touchAncestorsOf(FF) {
        let WF = FF.parent?.[rW];
        if (void 0 === WF) return;
        const SF = [];
        for (; void 0 !== WF;) {
          if (WF.hasFilteredFields) {
            const FF = WF.ref[bW];
            if (this.changes.has(FF)) break;
            SF.push(WF)
          }
          WF = WF.parent?.[rW]
        }
        for (let CF = SF.length - 1; CF >= 0; CF--) this.changes.set(SF[CF].ref[bW], new Map)
      }
      remove(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC,
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = FF?.[rW];
        if (!CF) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${GC(FF)}`), this;
        const uF = CF.parent?.[rW];
        if (uF?.isStreamCollection) return this.unmarkVisible(CF), this.iterable && !SF && YC(this.items, this.items.indexOf(FF)),
          function(FF, WF, SF, CF, uF) {
            const hF = FF._stream;
            if (void 0 === hF) return !1;
            const bW = hF.pendingByView.get(WF);
            if (bW?.has(CF)) return bW.delete(CF), !1;
            const dF = hF.sentByView.get(WF);
            if (dF?.has(CF)) {
              dF.delete(CF);
              let FF = uF.get(SF);
              return void 0 === FF && (FF = new Map, uF.set(SF, FF)), FF.set(CF, AF.DELETE), !0
            }
          }(CF.parent, this.id, CF.parent[bW], CF.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(CF), this;
        if (CF.isStreamCollection) {
          this.unmarkVisible(CF), this.iterable && !SF && YC(this.items, this.items.indexOf(FF));
          const WF = CF.ref,
            uF = WF._stream;
          if (void 0 !== uF) {
            uF.pendingByView.get(this.id)?.clear();
            const FF = uF.sentByView.get(this.id);
            if (void 0 !== FF && FF.size > 0) {
              const SF = WF[bW];
              let CF = this.changes.get(SF);
              void 0 === CF && (CF = new Map, this.changes.set(SF, CF));
              for (const WF of FF) CF.set(WF, AF.DELETE);
              FF.clear()
            }
          }
          return this
        }
        this.unmarkVisible(CF), this.iterable && !SF && YC(this.items, this.items.indexOf(FF));
        const hF = CF.ref,
          dF = hF.constructor[Symbol.metadata],
          PF = hF[bW];
        this._touchAncestorsOf(CF);
        let RF = this.changes.get(PF);
        if (void 0 === RF && (RF = new Map, this.changes.set(PF, RF)), WF === QC) {
          const FF = CF.parent;
          if (FF && !BW.isValidInstance(FF) && CF.isFiltered) {
            const WF = uF.isArray ? CF : CF.parentIndex,
              SF = FF[bW];
            let hF = this.changes.get(SF);
            void 0 === hF ? (hF = new Map, this.changes.set(SF, hF)) : hF.get(WF) === AF.ADD && this._dropPendingEntries(CF), hF.set(WF, AF.DELETE), this._recursiveDeleteVisibleChangeTree(CF)
          } else dF?.[xW]?.forEach((FF => this._removeViewField(CF, RF, FF)))
        } else {
          const FF = dF?.[ZF];
          if (void 0 !== FF)
            for (let SF = WF; SF > 0; SF &= SF - 1) FF[SF & -SF]?.forEach((FF => this._removeViewField(CF, RF, FF)))
        }
        return void 0 === WF ? this.removeAllTagsOnTree(CF) : this.removeTag(CF, WF), this
      }
      has(FF) {
        return this.isVisible(FF[rW])
      }
      hasTag(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC;
        return this.hasTagOnTree(FF[rW], WF)
      }
      subscribe(FF, WF) {
        const SF = FF?.[rW];
        if (!SF) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${GC(FF)}`), this;
        if (void 0 === this._root && void 0 !== SF.root && this._bindRoot(SF.root), void 0 !== WF)
          if (SF.isStreamCollection) {
            const SF = mS(FF);
            null === WF ? SF.priorityByView?.delete(this.id) : (SF.priorityByView ??= new Map).set(this.id, WF)
          } else {
            const WF = FF?.constructor?.name ?? "collection",
              CF = SF.parent;
            if (void 0 === CF) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${WF} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const FF = CF?.constructor?.[Symbol.metadata]?.[SF.parentIndex]?.name,
                AF = FF ? `${CF.constructor.name}#${FF}` : WF;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${AF} is a ${WF}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(SF)) return this;
        const CF = void 0 !== SF.parent && !this.isVisible(SF);
        if (CF ? (this.addParentOf(SF, QC), this._add(FF, QC, !1, !1)) : this.markVisible(SF), this._setSubscribed(SF), SF.isStreamCollection) {
          const WF = FF;
          SF.forEachChild(((FF, SF) => {
            YW(WF, this.id, SF)
          }))
        } else CF || SF.forEachChild((FF => {
          this.markVisible(FF)
        }));
        return this
      }
      unsubscribe(FF) {
        const WF = FF?.[rW];
        if (!WF) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${GC(FF)}`), this;
        if (!this.isSubscribed(WF)) return this;
        this._clearSubscribed(WF);
        const SF = WF.ref[bW];
        if (WF.isStreamCollection) {
          const WF = FF._stream;
          if (void 0 !== WF) {
            WF.pendingByView.get(this.id)?.clear();
            const FF = WF.sentByView.get(this.id);
            if (void 0 !== FF && FF.size > 0) {
              let WF = this.changes.get(SF);
              void 0 === WF && (WF = new Map, this.changes.set(SF, WF));
              for (const SF of FF) WF.set(SF, AF.DELETE);
              FF.clear()
            }
          }
        } else {
          const FF = WF.isArray;
          let CF = this.changes.get(SF);
          WF.forEachChild(((WF, uF) => {
            void 0 === CF && (CF = new Map, this.changes.set(SF, CF)), CF.set(FF ? WF : uF, AF.DELETE), this.unmarkVisible(WF)
          }))
        }
        return this.unmarkVisible(WF), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let FF = 0, WF = this.items.length; FF < WF; FF++) this.remove(this.items[FF], QC, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(FF) {
        let WF = this.isVisible(FF);
        if (!WF && FF.isVisibilitySharedWithParent)
          if (this.isVisible(FF.parent[rW])) this.markVisible(FF), WF = !0;
          else
            for (let SF = FF.extraParents; void 0 !== SF; SF = SF.next) {
              const CF = SF.ref[rW];
              if (CF.isFiltered && this.isVisible(CF)) {
                this.markVisible(FF), WF = !0;
                break
              }
            }
        return WF
      }
      _recursiveDeleteVisibleChangeTree(FF) {
        FF.forEachChild((FF => {
          this.unmarkVisible(FF), this._recursiveDeleteVisibleChangeTree(FF)
        }))
      }
      _dropPendingEntries(FF) {
        this.changes.delete(FF.ref[bW]), FF.forEachChild((FF => this._dropPendingEntries(FF)))
      }
      _removeViewField(FF, WF, SF) {
        const CF = WF.get(SF) === AF.ADD;
        WF.set(SF, AF.DELETE);
        const uF = FF.ref[FF.encDescriptor.names[SF]],
          hF = uF?.[rW];
        hF && (this.unmarkVisible(hF), this._recursiveDeleteVisibleChangeTree(hF), CF && this._dropPendingEntries(hF))
      }
    }

    function IC(FF) {
      FF.structSwitchEmitted || (FF.shouldEmitSwitch && (FF.buffer[FF.it.offset++] = 255, WW.number(FF.buffer, FF.ref[bW], FF.it)), FF.structSwitchEmitted = !0)
    }

    function fC(FF, WF) {
      nC(FF, WF, AF.ADD)
    }

    function yA(FF, WF) {
      if (WF._fullSyncGen === FF.gen) return;
      WF._fullSyncGen = FF.gen;
      if (!FF.hasView || FF.view.isChangeTreeVisible(WF)) {
        const SF = WF.encDescriptor;
        FF.changeTree = WF, FF.ref = WF.ref, FF.encoder = SF.encoder, FF.filter = SF.filter, FF.metadata = SF.metadata, FF.treeIsFiltered = WF.isFiltered, FF.isSchema = SF.isSchema, FF.filterBitmask = SF.filterBitmask, FF.tags = SF.tags, FF.structSwitchEmitted = !1, FF.shouldEmitSwitch = FF.hasView || FF.it.offset > FF.initialOffset || WF !== FF.rootChangeTree, WF.isArray && WF.collDirty.size > 0 && (WF.flags |= 512), AS(WF, FF, fC)
      }
      tC(WF, FF, sC)
    }

    function sC(FF, WF, SF) {
      yA(FF, WF)
    }

    function nC(FF, WF, SF) {
      if (WF < 0) {
        if (FF.treeIsFiltered !== FF.emitFiltered) return;
        return IC(FF), void(FF.buffer[FF.it.offset++] = 255 & Math.abs(WF))
      }
      if ((FF.isSchema ? FF.treeIsFiltered || (WF < 32 ? 0 !== (FF.filterBitmask & 1 << WF) : void 0 !== FF.tags[WF]) : FF.treeIsFiltered) !== FF.emitFiltered) return;
      const CF = FF.isEncodeAll ? AF.ADD : SF;
      void 0 !== CF && (void 0 === FF.filter || FF.filter(FF.ref, WF, FF.view)) && (IC(FF), FF.encoder(FF.self, FF.buffer, FF.changeTree, WF, CF, FF.it, FF.isEncodeAll, FF.hasView, FF.metadata))
    }

    function HC(FF, WF) {
      const SF = new Uint8Array(FF.length + WF.length);
      return SF.set(FF, 0), SF.set(WF, FF.length), SF
    }
    class KC {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(KC.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(FF, WF) {
        this.context = sW.cache(FF.constructor), this.root = WF ?? new oC(this.context), this.setState(FF)
      }
      setState(FF) {
        this.state = FF, this.state[rW].setRoot(this.root)
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
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF.offset;
        return this._encodeChannel(FF, WF, SF, CF, !1)
      }
      encodeUnreliable() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF.offset;
        return this._encodeChannel(FF, WF, SF, CF, !0)
      }
      _encodeChannel(FF, WF, SF, CF, AF) {
        this.root.pendingFilterRefresh.length > 0 && hS(this.root);
        const uF = void 0 !== WF,
          hF = this.state[rW],
          bW = this._encodeCtx;
        bW.self = this, bW.buffer = SF, bW.it = FF, bW.view = WF, bW.isEncodeAll = !1, bW.hasView = uF, bW.emitFiltered = uF;
        let dF = AF ? this.root.unreliableChanges : this.root.changes;
        for (; dF = dF.next;) {
          const SF = dF.changeTree;
          if (uF && !WF.isChangeTreeVisible(SF)) continue;
          const PF = AF ? SF.unreliableRecorder : SF;
          if (!PF || !PF.has()) continue;
          const RF = SF.encDescriptor;
          bW.changeTree = SF, bW.ref = SF.ref, bW.encoder = RF.encoder, bW.filter = RF.filter, bW.metadata = RF.metadata, bW.treeIsFiltered = SF.isFiltered, bW.isSchema = RF.isSchema, bW.filterBitmask = RF.filterBitmask, bW.tags = RF.tags, bW.structSwitchEmitted = !1, bW.isRootTree = SF === hF, bW.shouldEmitSwitch = uF || FF.offset > CF || !bW.isRootTree, PF.forEachWithCtx(bW, nC)
        }
        return AF || uF || !this._isStreamBroadcastMode || this._emitStreamBroadcast(SF, FF), FF.offset > SF.byteLength ? (SF = this._resizeBuffer(SF, FF.offset), FF.offset = CF, this._encodeChannel(FF, WF, SF, CF, AF)) : SF.subarray(0, FF.offset)
      }
      encodeFullSync(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FF.offset;
        this.root.pendingFilterRefresh.length > 0 && hS(this.root);
        const uF = void 0 !== CF,
          hF = this.state[rW],
          bW = this._encodeCtx;
        return bW.self = this, bW.buffer = WF, bW.it = FF, bW.view = CF, bW.isEncodeAll = !0, bW.hasView = uF, bW.emitFiltered = SF, bW.gen = ++this._fullSyncGen, bW.initialOffset = AF, bW.rootChangeTree = hF, yA(bW, hF), FF.offset > WF.byteLength ? (WF = this._resizeBuffer(WF, FF.offset), FF.offset = AF, this.encodeFullSync(FF, WF, SF, CF, AF)) : WF.subarray(0, FF.offset)
      }
      _resizeBuffer(FF, WF) {
        const SF = Math.ceil(WF / KC.BUFFER_SIZE) * KC.BUFFER_SIZE,
          CF = new Uint8Array(SF);
        return CF.set(FF), FF === this.sharedBuffer && (this.sharedBuffer = CF), CF
      }
      encodeAll() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(FF, WF, !1)
      }
      encodeAllView(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const AF = SF.offset;
        return CF = this.encodeFullSync(SF, CF, !0, FF, AF), HC(CF.subarray(0, WF), CF.subarray(AF, SF.offset))
      }
      ensureCapacity(FF, WF) {
        if (WF + KC.BUFFER_SIZE <= FF.byteLength) return FF;
        const SF = Math.ceil((WF + KC.BUFFER_SIZE) / KC.BUFFER_SIZE) * KC.BUFFER_SIZE,
          CF = new Uint8Array(SF);
        return CF.set(FF.subarray(0, WF)), FF === this.sharedBuffer && (this.sharedBuffer = CF), CF
      }
      encodeView(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          uF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const hF = SF.offset;
        this._emitStreamPriority(FF);
        for (const dF of FF.changes.keys()) {
          const WF = FF.changes.get(dF),
            uF = this.root.changeTrees[dF];
          if (void 0 === uF) {
            FF.changes.delete(dF);
            continue
          }
          if (0 === WF.size) continue;
          const hF = uF.encDescriptor,
            PF = hF.encoder,
            RF = hF.metadata,
            iW = uF.ref,
            EF = uF.refTarget;
          CF = this.ensureCapacity(CF, SF.offset), CF[SF.offset++] = 255, WW.number(CF, iW[bW], SF);
          for (const [dF, QF] of WF) {
            let WF;
            if (-1 === dF) {
              const FF = EF.tmpItems,
                WF = EF.deletedIndexes;
              for (let hF = 0; hF < FF.length; hF++) void 0 !== FF[hF] && !0 !== WF[hF] && PF(this, CF, uF, hF, AF.ADD, SF, !1, !0, RF);
              continue
            }
            if ("number" === typeof dF) WF = dF;
            else {
              const SF = dF.indexInParent(iW);
              if (void 0 === SF) continue;
              if (WF = SF, QF === AF.ADD && uF.getChange(WF) === AF.DELETE) {
                FF.changes.delete(dF.ref[bW]);
                continue
              }
            }
            PF(this, CF, uF, WF, void 0 !== EF[eF](WF) && QF || AF.DELETE, SF, !1, !0, RF)
          }
        }
        return FF.changes.clear(), CF = this.encode(SF, FF, CF), uF ? HC(CF.subarray(0, WF), CF.subarray(hF, SF.offset)) : CF.subarray(hF, SF.offset)
      }
      encodeUnreliableView(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const AF = SF.offset;
        return CF = this.encodeUnreliable(SF, FF, CF, AF), HC(CF.subarray(0, WF), CF.subarray(AF, SF.offset))
      }
      _emitStreamBroadcast(FF, WF) {
        const SF = this.root.streamTrees;
        for (const CF of SF) {
          const SF = CF,
            uF = SF[rW],
            hF = SF[bW];
          if (void 0 === hF) continue;
          const dF = SF._stream,
            PF = dF.broadcastDeletes,
            RF = dF.broadcastPending,
            iW = dF.sentBroadcast,
            EF = PF.size > 0,
            QF = RF.size > 0,
            gW = uF.encDescriptor,
            tW = gW.encoder,
            TF = gW.metadata;
          if (EF || QF) {
            if (FF[WF.offset++] = 255, WW.number(FF, hF, WF), EF) {
              for (const SF of PF) tW(this, FF, uF, SF, AF.DELETE, WF, !1, !1, TF);
              PF.clear()
            }
            const CF = dF.maxPerTick,
              QF = [];
            let gW = 0;
            const aW = [];
            for (const hF of RF) {
              if (gW >= CF) break;
              const bW = SF[eF](hF);
              void 0 !== bW ? (tW(this, FF, uF, hF, AF.ADD, WF, !1, !1, TF), iW.add(hF), QF.push(bW), aW.push(hF), gW++) : aW.push(hF)
            }
            for (const FF of aW) RF.delete(FF);
            for (const SF of QF) {
              const CF = SF[rW];
              if (void 0 === CF) continue;
              const uF = SF[bW];
              if (void 0 === uF) continue;
              FF[WF.offset++] = 255, WW.number(FF, uF, WF);
              const hF = CF.encDescriptor,
                dF = hF.encoder,
                PF = hF.metadata;
              CF.forEachLive((SF => {
                BW.hasUnreliableAtIndex(PF, SF) || dF(this, FF, CF, SF, AF.ADD, WF, !1, !1, PF)
              }))
            }
          }
          for (const CF of iW) {
            const AF = SF[eF](CF);
            if (void 0 === AF) continue;
            const uF = AF[rW];
            if (void 0 === uF || !uF.has()) continue;
            const hF = AF[bW];
            if (void 0 === hF) continue;
            FF[WF.offset++] = 255, WW.number(FF, hF, WF);
            const dF = uF.encDescriptor,
              PF = dF.encoder,
              RF = dF.metadata;
            uF.forEach(((SF, CF) => {
              SF < 0 || BW.hasUnreliableAtIndex(RF, SF) || PF(this, FF, uF, SF, CF, WF, !1, !1, RF)
            }))
          }
        }
      }
      _emitStreamPriority(FF) {
        const WF = this.root.streamTrees;
        if (0 === WF.size) return;
        const SF = FF.id;
        for (const CF of WF) {
          const WF = CF,
            uF = WF._stream,
            hF = uF.pendingByView.get(SF);
          if (void 0 === hF || 0 === hF.size) continue;
          const dF = uF.priorityByView?.get(SF),
            PF = void 0 !== dF,
            RF = uF.priority,
            iW = uF.maxPerTick,
            EF = [],
            QF = [];
          if (PF || void 0 !== RF) {
            const SF = [],
              CF = [];
            let AF = 0;
            for (const uF of hF) {
              const hF = WF[eF](uF);
              if (void 0 === hF) {
                QF.push(uF);
                continue
              }
              const bW = PF ? dF(hF) : RF(FF, hF);
              if (AF < iW) {
                let FF = AF++;
                for (; FF > 0 && CF[FF - 1] < bW;) CF[FF] = CF[FF - 1], SF[FF] = SF[FF - 1], FF--;
                CF[FF] = bW, SF[FF] = uF
              } else if (bW > CF[iW - 1]) {
                let FF = iW - 1;
                for (; FF > 0 && CF[FF - 1] < bW;) CF[FF] = CF[FF - 1], SF[FF] = SF[FF - 1], FF--;
                CF[FF] = bW, SF[FF] = uF
              }
            }
            for (let FF = 0; FF < AF; FF++) EF.push(SF[FF])
          } else
            for (const FF of hF) {
              if (EF.length >= iW) break;
              EF.push(FF)
            }
          for (const FF of QF) hF.delete(FF);
          const gW = EF.length;
          let tW = uF.sentByView.get(SF);
          void 0 === tW && (tW = new Set, uF.sentByView.set(SF, tW));
          for (let SF = 0; SF < gW; SF++) {
            const CF = EF[SF],
              uF = WF[eF](CF);
            if (void 0 === uF) {
              hF.delete(CF);
              continue
            }
            FF._addImmediate(uF);
            const dF = uF[rW];
            if (void 0 !== dF) {
              const WF = uF[bW];
              let SF = FF.changes.get(WF);
              void 0 === SF && (SF = new Map, FF.changes.set(WF, SF));
              const CF = dF.metadata;
              dF.forEachLive((FF => {
                BW.hasUnreliableAtIndex(CF, FF) || SF.set(FF, AF.ADD)
              }))
            }
            hF.delete(CF), tW.add(CF)
          }
        }
      }
      discardChanges() {
        const FF = this.root.changes;
        let WF = FF.next;
        const SF = this.root;
        for (; WF;) {
          const FF = WF.next;
          WF.changeTree.endEncode(), SF.releaseNode(WF), WF = FF
        }
        FF.next = void 0, FF.tail = void 0
      }
      discardUnreliableChanges() {
        const FF = this.root.unreliableChanges;
        let WF = FF.next;
        const SF = this.root;
        for (; WF;) {
          const FF = WF.next;
          WF.changeTree.endEncodeUnreliable(), SF.releaseNode(WF), WF = FF
        }
        FF.next = void 0, FF.tail = void 0
      }
      tryEncodeTypeId(FF, WF, SF, CF) {
        const AF = this.context.getTypeId(WF),
          uF = this.context.getTypeId(SF);
        void 0 !== uF ? AF !== uF && (FF[CF.offset++] = 213, WW.number(FF, uF, CF)) : console.warn(`@colyseus/schema WARNING: Class "${SF.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const FF = this.root;
        if (0 === FF.streamTrees.size) return !1;
        const WF = 0 === FF.activeViews.size;
        for (const SF of FF.streamTrees)
          if (WF ? oW(SF) : ZW(SF, FF)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class wC extends Error {
      constructor(FF) {
        super(FF), this.name = "DecodingWarning"
      }
    }
    const XC = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class UC {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(FF, WF), void 0 === WF[bW] ? (XC.value = FF, Object.defineProperty(WF, bW, XC)) : WF[bW] !== FF && (WF[bW] = FF), SF && (this.refCount[FF] = (this.refCount[FF] || 0) + 1), this.deletedRefs.has(FF) && this.deletedRefs.delete(FF)
      }
      removeRef(FF) {
        const WF = this.refCount[FF];
        if (void 0 !== WF)
          if (0 !== WF)(this.refCount[FF] = WF - 1) <= 0 && this.deletedRefs.add(FF);
          else try {
            const WF = this.refs.get(FF);
            throw new wC(`trying to remove refId '${FF}' with 0 refCount (${WF.constructor.name}: ${JSON.stringify(WF)})`)
          } catch (uA) {
            console.warn(uA)
          } else try {
            throw new wC("trying to remove refId that doesn't exist: " + FF)
          } catch (uA) {
            console.warn(uA)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((FF => {
          if (this.refCount[FF] > 0) return;
          const WF = this.refs.get(FF),
            SF = WF.constructor[Symbol.metadata];
          if (null != SF)
            for (const CF in SF) {
              const FF = WF[SF[CF].name];
              if ("object" === typeof FF && FF) {
                const WF = FF[bW];
                void 0 === WF || this.deletedRefs.has(WF) || this.removeRef(WF)
              }
            } else "function" === typeof WF[gW] && Array.from(WF.values()).forEach((FF => {
              const WF = FF[bW];
              void 0 === WF || this.deletedRefs.has(WF) || this.removeRef(WF)
            }));
          this.refs.delete(FF), delete this.refCount[FF], delete this.callbacks[FF]
        })), this.deletedRefs.clear()
      }
      addCallback(FF, WF, SF) {
        if (void 0 === FF) {
          const FF = "number" === typeof WF ? AF[WF] : WF;
          throw new Error(`Can't addCallback on '${FF}' (refId is undefined)`)
        }
        return this.callbacks[FF] || (this.callbacks[FF] = {}), this.callbacks[FF][WF] || (this.callbacks[FF][WF] = []), this.callbacks[FF][WF].push(SF), () => this.removeCallback(FF, WF, SF)
      }
      removeCallback(FF, WF, SF) {
        const CF = this.callbacks?.[FF]?.[WF]?.indexOf(SF);
        void 0 !== CF && -1 !== CF && YC(this.callbacks[FF][WF], CF)
      }
    }
    class BC {
      context;
      state;
      root;
      currentRefId = 0;
      VWF;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(FF, WF) {
        this.setState(FF), this.context = WF || new sW(FF.constructor)
      }
      setState(FF) {
        this.state = FF, this.root = new UC, this.root.addRef(0, FF)
      }
      decode(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const AF = void 0 !== this.VWF ? [] : null,
          uF = this.root,
          hF = FF.byteLength;
        let bW = SF.constructor[RF];
        for (this.currentRefId = 0; WF.offset < hF;) {
          if (FF[WF.offset] == CF) {
            WF.offset++, SF[kW]?.();
            const CF = aS.number(FF, WF),
              AF = uF.refs.get(CF);
            AF ? (SF = AF, bW = SF.constructor[RF], this.currentRefId = CF) : (console.error(`"refId" not found: ${CF}`, {
              previousRef: SF,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(FF, WF, hF));
            continue
          } - 1 !== bW(this, FF, WF, SF, AF) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(FF, WF, hF))
        }
        return SF[kW]?.(), null !== this.resyncVisited && function(FF, WF) {
          FF.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : sS(FF, FF.state, new Set, WF)
        }(this, AF), null !== AF && this.VWF?.(AF), uF.garbageCollectDeletedRefs(), AF
      }
      decodeResync(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(FF, WF)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(FF, WF, SF) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const AF = {
          offset: WF.offset
        };
        for (; WF.offset < SF && (FF[WF.offset] !== CF || (AF.offset = WF.offset + 1, !this.root.refs.has(aS.number(FF, AF))));) WF.offset++
      }
      getInstanceType(FF, WF, SF) {
        let CF;
        if (213 === FF[WF.offset]) {
          WF.offset++;
          const SF = aS.number(FF, WF);
          CF = this.context.get(SF)
        }
        return CF || SF
      }
      createInstanceOfType(FF) {
        return FF.initializeForDecoder()
      }
      removeChildRefs(FF, WF) {
        const SF = "string" !== typeof FF[gW],
          CF = FF[bW];
        FF.forEach(((uF, hF) => {
          WF?.push({
            ref: FF,
            refId: CF,
            op: AF.DELETE,
            field: hF,
            value: void 0,
            previousValue: uF
          }), SF && this.root.removeRef(uF[bW])
        }))
      }
    }
    const jA = mA({
        min: EC.float64(),
        max: EC.float64(),
        bits: EC.uint8(),
        mode: EC.uint8()
      }, "QuantizedDescriptor"),
      vA = mA({
        name: EC.string(),
        type: EC.string(),
        referencedType: EC.number(),
        childPrimitive: EC.string(),
        quantized: EC.ref(jA).optional()
      }, "ReflectionField"),
      JC = mA({
        id: EC.number(),
        extendsId: EC.number(),
        fields: EC.array(vA)
      }, "ReflectionType"),
      pC = mA({
        types: EC.array(JC),
        rootType: EC.number()
      }, "Reflection");

    function lC(FF) {
      const WF = FF.root,
        SF = WF.callbacks,
        CF = new WeakMap;
      let uF;

      function hF(FF, SF) {
        let PF = SF.instance?.constructor[Symbol.metadata] || FF,
          RF = SF.instance && "function" === typeof SF.instance.forEach || FF && !xA.is(FF);
        if (PF && !RF) {
          const FF = function(FF, AF, hF, dF) {
            return dF && void 0 !== SF.instance[AF] && !CF.has(uF) && hF(SF.instance[AF], void 0), WF.addCallback(FF[bW], AF, hF)
          };
          return new Proxy({
            listen: function(WF, AF) {
              let hF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (SF.instance) return FF(SF.instance, WF, AF, hF);
              {
                let bW = () => {};
                return SF.onInstanceAvailable(((SF, dF) => {
                  bW = FF(SF, WF, AF, hF && dF && !CF.has(uF))
                })), () => bW()
              }
            },
            onChange: function(FF) {
              return WF.addCallback(SF.instance[bW], AF.REPLACE, FF)
            },
            bindTo: function(FF, CF) {
              return CF || (CF = Object.keys(PF).map((FF => PF[FF].name))), WF.addCallback(SF.instance[bW], AF.REPLACE, (() => {
                CF.forEach((WF => FF[WF] = SF.instance[WF]))
              }))
            }
          }, {
            get(FF, WF) {
              const CF = PF[PF[WF]];
              if (CF) {
                const FF = SF.instance?.[WF],
                  AF = CF => {
                    const AF = dF(SF.instance).listen(WF, ((FF, WF) => {
                      CF(FF, !1), AF?.()
                    }), !1);
                    void 0 !== FF?.[bW] && CF(FF, !0)
                  };
                return hF(CF.type, {
                  instance: void 0 !== FF?.[bW] && FF,
                  parentInstance: SF.instance,
                  onInstanceAvailable: AF
                })
              }
              return FF[WF]
            },
            has: (FF, WF) => void 0 !== PF[WF],
            set(FF, WF, SF) {
              throw new Error("not allowed")
            },
            deleteProperty(FF, WF) {
              throw new Error("not allowed")
            }
          })
        } {
          const FF = function(FF, SF, hF) {
              return hF && FF.forEach(((FF, WF) => SF(FF, WF))), WF.addCallback(FF[bW], AF.ADD, ((FF, WF) => {
                CF.set(SF, !0), uF = SF, SF(FF, WF), CF.delete(SF), uF = void 0
              }))
            },
            hF = function(FF, SF) {
              return WF.addCallback(FF[bW], AF.DELETE, SF)
            },
            dF = function(FF, SF) {
              return WF.addCallback(FF[bW], AF.REPLACE, SF)
            };
          return new Proxy({
            EL: function(WF) {
              let AF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (SF.instance) return FF(SF.instance, WF, AF && !CF.has(uF));
              if (SF.onInstanceAvailable) {
                let hF = () => {};
                return SF.onInstanceAvailable(((SF, bW) => {
                  hF = FF(SF, WF, AF && bW && !CF.has(uF))
                })), () => hF()
              }
            },
            eWF: function(FF) {
              if (SF.instance) return hF(SF.instance, FF);
              if (SF.onInstanceAvailable) {
                let WF = () => {};
                return SF.onInstanceAvailable((SF => {
                  WF = hF(SF, FF)
                })), () => WF()
              }
            },
            onChange: function(FF) {
              if (SF.instance) return dF(SF.instance, FF);
              if (SF.onInstanceAvailable) {
                let WF = () => {};
                return SF.onInstanceAvailable((SF => {
                  WF = dF(SF, FF)
                })), () => WF()
              }
            }
          }, {
            get(FF, WF) {
              if (!FF[WF]) throw new Error(`Can't access '${WF}' through callback proxy. access the instance directly.`);
              return FF[WF]
            },
            has: (FF, WF) => void 0 !== FF[WF],
            set(FF, WF, SF) {
              throw new Error("not allowed")
            },
            deleteProperty(FF, WF) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function dF(FF) {
        return hF(void 0, {
          instance: FF
        })
      }
      return FF.VWF = function(FF) {
        const WF = new Set;
        for (let CF = 0, uF = FF.length; CF < uF; CF++) {
          const uF = FF[CF],
            hF = uF.refId,
            dF = uF.ref,
            PF = SF[hF];
          if (PF) {
            if ((uF.op & AF.DELETE) === AF.DELETE && xA.isSchema(uF.previousValue)) {
              const FF = SF[uF.previousValue[bW]]?.[AF.DELETE];
              for (let WF = FF?.length - 1; WF >= 0; WF--) FF[WF]()
            }
            if (xA.isSchema(dF)) {
              if (!WF.has(hF)) {
                const FF = PF?.[AF.REPLACE];
                for (let WF = FF?.length - 1; WF >= 0; WF--) FF[WF]()
              }
              if (PF.hasOwnProperty(uF.field)) {
                const FF = PF[uF.field];
                for (let WF = FF?.length - 1; WF >= 0; WF--) FF[WF](uF.value, uF.previousValue)
              }
            } else {
              if ((uF.op & AF.DELETE) === AF.DELETE) {
                if (void 0 !== uF.previousValue) {
                  const FF = PF[AF.DELETE];
                  for (let WF = FF?.length - 1; WF >= 0; WF--) FF[WF](uF.previousValue, uF.dynamicIndex ?? uF.field)
                }
                if ((uF.op & AF.ADD) === AF.ADD) {
                  const FF = PF[AF.ADD];
                  for (let WF = FF?.length - 1; WF >= 0; WF--) FF[WF](uF.value, uF.dynamicIndex ?? uF.field)
                }
              } else if ((uF.op & AF.ADD) === AF.ADD && uF.previousValue !== uF.value) {
                const FF = PF[AF.ADD];
                for (let WF = FF?.length - 1; WF >= 0; WF--) FF[WF](uF.value, uF.dynamicIndex ?? uF.field)
              }
              if (uF.value !== uF.previousValue && (void 0 !== uF.value || void 0 !== uF.previousValue)) {
                const FF = PF[AF.REPLACE];
                for (let WF = FF?.length - 1; WF >= 0; WF--) FF[WF](uF.value, uF.dynamicIndex ?? uF.field)
              }
            }
            WF.add(hF)
          }
        }
      }, dF
    }

    function FA(FF, WF) {
      FF.VWF = WF
    }
    pC.encode = function(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const SF = FF.context,
        CF = new pC,
        AF = new KC(CF),
        uF = SF.schemas.get(FF.state.constructor);
      uF > 0 && (CF.rootType = uF);
      const hF = new Set,
        bW = {},
        dF = FF => {
          if (void 0 === FF.extendsId || hF.has(FF.extendsId)) {
            hF.add(FF.id), CF.types.push(FF);
            const WF = bW[FF.id];
            void 0 !== WF && (delete bW[FF.id], WF.forEach((FF => dF(FF))))
          } else void 0 === bW[FF.extendsId] && (bW[FF.extendsId] = []), bW[FF.extendsId].push(FF)
        };
      SF.schemas.forEach(((FF, WF) => {
        const CF = new JC;
        CF.id = Number(FF);
        const AF = Object.getPrototypeOf(WF);
        AF !== xA && (CF.extendsId = SF.schemas.get(AF));
        const uF = WF[Symbol.metadata];
        if (uF !== AF[Symbol.metadata]) {
          const FF = uF[mW] ?? -1;
          for (let WF = 0; WF <= FF; WF++) {
            const FF = uF[WF];
            if (void 0 === FF) continue;
            const AF = FF.name;
            if (!Object.prototype.hasOwnProperty.call(uF, AF)) continue;
            const hF = new vA;
            let bW;
            if (hF.name = AF, "string" === typeof FF.type) bW = FF.type;
            else if (zS(FF.type)) {
              const WF = FF.type.quantized;
              bW = "quantized";
              const SF = new jA;
              SF.min = WF.min, SF.max = WF.max, SF.bits = WF.bits, SF.mode = WF.wrap ? 1 : 0, hF.quantized = SF
            } else {
              let WF;
              xA.is(FF.type) ? (bW = "ref", WF = FF.type) : (bW = Object.keys(FF.type)[0], "string" === typeof FF.type[bW] ? hF.childPrimitive = FF.type[bW] : WF = FF.type[bW]), hF.referencedType = WF ? SF.getTypeId(WF) : -1
            }
            hF.type = bW, CF.fields.push(hF)
          }
        }
        dF(CF)
      }));
      for (const PF in bW) bW[PF].forEach((FF => CF.types.push(FF)));
      return AF.encodeAll(WF).slice(0, WF.offset)
    }, pC.decode = function(FF, WF) {
      const SF = new pC;
      new BC(SF).decode(FF, WF);
      const CF = new sW;
      SF.types.forEach((FF => {
        const WF = CF.get(FF.extendsId) ?? xA,
          SF = class extends WF {};
        sW.register(SF), CF.add(SF, FF.id)
      }), {});
      SF.types.forEach((FF => {
        const WF = CF.get(FF.id),
          AF = BW.initialize(WF),
          uF = [];
        let hF = FF;
        do {
          uF.push(hF), hF = SF.types.find((FF => FF.id === hF.extendsId))
        } while (hF);
        let bW = 0;
        uF.reverse().forEach((FF => {
          ((FF, WF, SF) => {
            WF.fields.forEach(((WF, AF) => {
              const uF = SF + AF;
              if (void 0 !== WF.quantized) {
                const SF = WF.quantized;
                BW.addField(FF, uF, WF.name, {
                  quantized: GW({
                    min: SF.min,
                    max: SF.max,
                    bits: SF.bits,
                    mode: 1 === SF.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== WF.referencedType) {
                const SF = WF.type,
                  AF = CF.get(WF.referencedType) ?? WF.childPrimitive;
                "ref" === SF ? BW.addField(FF, uF, WF.name, AF) : BW.addField(FF, uF, WF.name, {
                  [SF]: AF
                })
              } else BW.addField(FF, uF, WF.name, WF.type)
            }))
          })(AF, FF, bW), bW += FF.fields.length
        }))
      }));
      const AF = new(CF.get(SF.rootType || 0));
      return new BC(AF, CF)
    }, pC.makeEncodable = function(FF) {
      const WF = FF[Symbol.metadata];
      if (!WF) return FF;
      const SF = WF[mW];
      if (void 0 === SF) return FF;
      for (let CF = 0; CF <= SF; CF++) {
        const SF = WF[CF];
        SF && BW.defineField(FF, WF, CF, SF.name, SF.type)
      }
      return Object.prototype.hasOwnProperty.call(FF, DF) && delete FF[DF], FF
    };
    class WA {
      cb;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(FF) {
        this.cb = FF, this.cb.VWF = this.VWF.bind(this)
      }
      get callbacks() {
        return this.cb.root.callbacks
      }
      get state() {
        return this.cb.state
      }
      addCallback(FF, WF, SF) {
        return this.cb.root.addCallback(FF, WF, SF)
      }
      addCallbackOrWaitCollectionAvailable(FF, WF, SF, CF) {
        let uF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          hF = () => {};
        const dF = () => hF(),
          PF = FF[WF];
        if (PF && void 0 !== PF[bW]) return uF = uF && !1 === this.isTriggering, SF === AF.ADD && uF && PF.forEach(((FF, WF) => {
          CF(FF, WF)
        })), this.addCallback(PF[bW], SF, CF);
        {
          let AF;
          return AF = this.addCallback(FF[bW], WF, ((FF, WF) => {
            null !== FF && void 0 !== FF && (AF(), hF = this.addCallback(FF[bW], SF, CF))
          })), hF = AF, dF
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(FF, WF, SF) {
        let CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        CF = CF && !1 === this.isTriggering;
        const AF = FF[WF];
        return CF && null !== AF && void 0 !== AF && SF(AF, void 0), this.addCallback(FF[bW], WF, SF)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const FF = arguments.length <= 0 ? void 0 : arguments[0],
            WF = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(FF[bW], AF.REPLACE, WF)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], AF.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], AF.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      EL() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], AF.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], AF.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      eWF() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], AF.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], AF.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(FF, WF, SF) {
        let CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const uF = FF.constructor[Symbol.metadata];
        SF || (SF = Object.keys(uF).filter((FF => !isNaN(Number(FF)))).map((FF => uF[FF].name)));
        const hF = () => {
          for (const CF of SF) {
            const SF = FF[CF];
            void 0 !== SF && (WF[CF] = SF)
          }
        };
        return CF && hF(), this.addCallback(FF[bW], AF.REPLACE, hF)
      }
      VWF(FF) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let WF = 0, SF = FF.length; WF < SF; WF++) {
          const SF = FF[WF],
            CF = SF.refId,
            uF = SF.ref,
            hF = this.callbacks[CF];
          if (hF) {
            if ((SF.op & AF.DELETE) === AF.DELETE && xA.isSchema(SF.previousValue)) {
              const FF = SF.previousValue[bW],
                WF = this.callbacks[FF]?.[AF.DELETE];
              if (WF)
                for (let SF = WF.length - 1; SF >= 0; SF--) try {
                  WF[SF]()
                } catch (uA) {
                  console.error(uA)
                }
            }
            if (xA.isSchema(uF)) {
              if (!this.uniqueRefIds.has(CF)) {
                const FF = hF[AF.REPLACE];
                if (FF)
                  for (let WF = FF.length - 1; WF >= 0; WF--) try {
                    FF[WF]()
                  } catch (uA) {
                    console.error(uA)
                  }
              }
              const FF = hF[SF.field];
              if (FF)
                for (let WF = FF.length - 1; WF >= 0; WF--) try {
                  FF[WF](SF.value, SF.previousValue)
                } catch (uA) {
                  console.error(uA)
                }
            } else {
              const FF = SF.dynamicIndex ?? SF.field;
              if ((SF.op & AF.DELETE) === AF.DELETE) {
                if (void 0 !== SF.previousValue) {
                  const WF = hF[AF.DELETE];
                  if (WF)
                    for (let CF = WF.length - 1; CF >= 0; CF--) try {
                      WF[CF](SF.previousValue, FF)
                    } catch (uA) {
                      console.error(uA)
                    }
                }
                if ((SF.op & AF.ADD) === AF.ADD) {
                  const WF = hF[AF.ADD];
                  if (WF)
                    for (let CF = WF.length - 1; CF >= 0; CF--) try {
                      WF[CF](SF.value, FF)
                    } catch (uA) {
                      console.error(uA)
                    }
                }
              } else if ((SF.op & AF.ADD) === AF.ADD && SF.previousValue !== SF.value) {
                const WF = hF[AF.ADD];
                if (WF)
                  for (let CF = WF.length - 1; CF >= 0; CF--) try {
                    WF[CF](SF.value, FF)
                  } catch (uA) {
                    console.error(uA)
                  }
              }
              if (SF.value !== SF.previousValue) {
                const WF = hF[AF.REPLACE];
                if (WF)
                  for (let CF = WF.length - 1; CF >= 0; CF--) try {
                    WF[CF](FF, SF.value)
                  } catch (uA) {
                    console.error(uA)
                  }
              }
            }
            this.uniqueRefIds.add(CF)
          }
        }
        this.isTriggering = !1
      }
    }
    const SA = {
      get(FF) {
        if (FF instanceof BC) return new WA(FF);
        if ("cb" in FF.pR) return new WA(FF.pR.cb);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(FF) {
        if (FF instanceof BC) return lC(FF);
        if ("cb" in FF.pR) return lC(FF.pR.cb);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (FF, WF) => FA(FF, WF)
    };
    class CA {
      _free = [];
      _factory;
      _maxSize;
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = FF, this._maxSize = WF.maxSize ?? 1 / 0;
        const SF = WF.preallocate ?? 0;
        for (let CF = 0; CF < SF; CF++) this._free.push(FF())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(FF) {
        xA.reset(FF), this._free.length < this._maxSize && this._free.push(FF)
      }
      get size() {
        return this._free.length
      }
    }

    function AA(FF) {
      return new CA((() => new FF), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    VW("map", {
      constructor: AC
    }), VW("array", {
      constructor: SC
    }), VW("set", {
      constructor: hC
    }), VW("collection", {
      constructor: uC
    })
  },
  8003: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      __addDisposableResource: () => zW,
      __assign: () => uF,
      __asyncDelegator: () => LF,
      __asyncGenerator: () => DF,
      __asyncValues: () => mW,
      __await: () => NF,
      __awaiter: () => QF,
      __classPrivateFieldGet: () => MF,
      __classPrivateFieldIn: () => GF,
      __classPrivateFieldSet: () => cW,
      __createBinding: () => gW,
      __decorate: () => bW,
      __disposeResources: () => fF,
      __esDecorate: () => PF,
      __exportStar: () => tW,
      __extends: () => AF,
      __generator: () => rW,
      __importDefault: () => YF,
      __importStar: () => oF,
      __makeTemplateObject: () => OF,
      __metadata: () => EF,
      __param: () => dF,
      __propKey: () => iW,
      __read: () => aW,
      __rest: () => hF,
      __rewriteRelativeImportExtension: () => yW,
      __runInitializers: () => RF,
      __setFunctionName: () => eF,
      __spread: () => kW,
      __spreadArray: () => VF,
      __spreadArrays: () => qW,
      __values: () => TF,
      default: () => sF
    });
    var CF = function(FF, WF) {
      return CF = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(FF, WF) {
        FF.__proto__ = WF
      } || function(FF, WF) {
        for (var SF in WF) Object.prototype.hasOwnProperty.call(WF, SF) && (FF[SF] = WF[SF])
      }, CF(FF, WF)
    };

    function AF(FF, WF) {
      if ("function" !== typeof WF && null !== WF) throw new TypeError("Class extends value " + String(WF) + " is not a constructor or null");

      function SF() {
        this.constructor = FF
      }
      CF(FF, WF), FF.prototype = null === WF ? Object.create(WF) : (SF.prototype = WF.prototype, new SF)
    }
    var uF = function() {
      return uF = Object.assign || function(FF) {
        for (var WF, SF = 1, CF = arguments.length; SF < CF; SF++)
          for (var AF in WF = arguments[SF]) Object.prototype.hasOwnProperty.call(WF, AF) && (FF[AF] = WF[AF]);
        return FF
      }, uF.apply(this, arguments)
    };

    function hF(FF, WF) {
      var SF = {};
      for (var CF in FF) Object.prototype.hasOwnProperty.call(FF, CF) && WF.indexOf(CF) < 0 && (SF[CF] = FF[CF]);
      if (null != FF && "function" === typeof Object.getOwnPropertySymbols) {
        var AF = 0;
        for (CF = Object.getOwnPropertySymbols(FF); AF < CF.length; AF++) WF.indexOf(CF[AF]) < 0 && Object.prototype.propertyIsEnumerable.call(FF, CF[AF]) && (SF[CF[AF]] = FF[CF[AF]])
      }
      return SF
    }

    function bW(FF, WF, SF, CF) {
      var AF, uF = arguments.length,
        hF = uF < 3 ? WF : null === CF ? CF = Object.getOwnPropertyDescriptor(WF, SF) : CF;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) hF = Reflect.decorate(FF, WF, SF, CF);
      else
        for (var bW = FF.length - 1; bW >= 0; bW--)(AF = FF[bW]) && (hF = (uF < 3 ? AF(hF) : uF > 3 ? AF(WF, SF, hF) : AF(WF, SF)) || hF);
      return uF > 3 && hF && Object.defineProperty(WF, SF, hF), hF
    }

    function dF(FF, WF) {
      return function(SF, CF) {
        WF(SF, CF, FF)
      }
    }

    function PF(FF, WF, SF, CF, AF, uF) {
      function hF(FF) {
        if (void 0 !== FF && "function" !== typeof FF) throw new TypeError("Function expected");
        return FF
      }
      for (var bW, dF = CF.kind, PF = "getter" === dF ? "get" : "setter" === dF ? "set" : "value", RF = !WF && FF ? CF.static ? FF : FF.prototype : null, iW = WF || (RF ? Object.getOwnPropertyDescriptor(RF, CF.name) : {}), eF = !1, EF = SF.length - 1; EF >= 0; EF--) {
        var QF = {};
        for (var rW in CF) QF[rW] = "access" === rW ? {} : CF[rW];
        for (var rW in CF.access) QF.access[rW] = CF.access[rW];
        QF.addInitializer = function(FF) {
          if (eF) throw new TypeError("Cannot add initializers after decoration has completed");
          uF.push(hF(FF || null))
        };
        var gW = (0, SF[EF])("accessor" === dF ? {
          get: iW.get,
          set: iW.set
        } : iW[PF], QF);
        if ("accessor" === dF) {
          if (void 0 === gW) continue;
          if (null === gW || "object" !== typeof gW) throw new TypeError("Object expected");
          (bW = hF(gW.get)) && (iW.get = bW), (bW = hF(gW.set)) && (iW.set = bW), (bW = hF(gW.init)) && AF.unshift(bW)
        } else(bW = hF(gW)) && ("field" === dF ? AF.unshift(bW) : iW[PF] = bW)
      }
      RF && Object.defineProperty(RF, CF.name, iW), eF = !0
    }

    function RF(FF, WF, SF) {
      for (var CF = arguments.length > 2, AF = 0; AF < WF.length; AF++) SF = CF ? WF[AF].call(FF, SF) : WF[AF].call(FF);
      return CF ? SF : void 0
    }

    function iW(FF) {
      return "symbol" === typeof FF ? FF : "".concat(FF)
    }

    function eF(FF, WF, SF) {
      return "symbol" === typeof WF && (WF = WF.description ? "[".concat(WF.description, "]") : ""), Object.defineProperty(FF, "name", {
        configurable: !0,
        value: SF ? "".concat(SF, " ", WF) : WF
      })
    }

    function EF(FF, WF) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(FF, WF)
    }

    function QF(FF, WF, SF, CF) {
      return new(SF || (SF = Promise))((function(AF, uF) {
        function hF(FF) {
          try {
            dF(CF.next(FF))
          } catch (WF) {
            uF(WF)
          }
        }

        function bW(FF) {
          try {
            dF(CF.throw(FF))
          } catch (WF) {
            uF(WF)
          }
        }

        function dF(FF) {
          var WF;
          FF.done ? AF(FF.value) : (WF = FF.value, WF instanceof SF ? WF : new SF((function(FF) {
            FF(WF)
          }))).then(hF, bW)
        }
        dF((CF = CF.apply(FF, WF || [])).next())
      }))
    }

    function rW(FF, WF) {
      var SF, CF, AF, uF = {
          label: 0,
          sent: function() {
            if (1 & AF[0]) throw AF[1];
            return AF[1]
          },
          trys: [],
          ops: []
        },
        hF = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return hF.next = bW(0), hF.throw = bW(1), hF.return = bW(2), "function" === typeof Symbol && (hF[Symbol.iterator] = function() {
        return this
      }), hF;

      function bW(bW) {
        return function(dF) {
          return function(bW) {
            if (SF) throw new TypeError("Generator is already executing.");
            for (; hF && (hF = 0, bW[0] && (uF = 0)), uF;) try {
              if (SF = 1, CF && (AF = 2 & bW[0] ? CF.return : bW[0] ? CF.throw || ((AF = CF.return) && AF.call(CF), 0) : CF.next) && !(AF = AF.call(CF, bW[1])).done) return AF;
              switch (CF = 0, AF && (bW = [2 & bW[0], AF.value]), bW[0]) {
                case 0:
                case 1:
                  AF = bW;
                  break;
                case 4:
                  return uF.label++, {
                    value: bW[1],
                    done: !1
                  };
                case 5:
                  uF.label++, CF = bW[1], bW = [0];
                  continue;
                case 7:
                  bW = uF.ops.pop(), uF.trys.pop();
                  continue;
                default:
                  if (!(AF = (AF = uF.trys).length > 0 && AF[AF.length - 1]) && (6 === bW[0] || 2 === bW[0])) {
                    uF = 0;
                    continue
                  }
                  if (3 === bW[0] && (!AF || bW[1] > AF[0] && bW[1] < AF[3])) {
                    uF.label = bW[1];
                    break
                  }
                  if (6 === bW[0] && uF.label < AF[1]) {
                    uF.label = AF[1], AF = bW;
                    break
                  }
                  if (AF && uF.label < AF[2]) {
                    uF.label = AF[2], uF.ops.push(bW);
                    break
                  }
                  AF[2] && uF.ops.pop(), uF.trys.pop();
                  continue
              }
              bW = WF.call(FF, uF)
            } catch (dF) {
              bW = [6, dF], CF = 0
            } finally {
              SF = AF = 0
            }
            if (5 & bW[0]) throw bW[1];
            return {
              value: bW[0] ? bW[1] : void 0,
              done: !0
            }
          }([bW, dF])
        }
      }
    }
    var gW = Object.create ? function(FF, WF, SF, CF) {
      void 0 === CF && (CF = SF);
      var AF = Object.getOwnPropertyDescriptor(WF, SF);
      AF && !("get" in AF ? !WF.__esModule : AF.writable || AF.configurable) || (AF = {
        enumerable: !0,
        get: function() {
          return WF[SF]
        }
      }), Object.defineProperty(FF, CF, AF)
    } : function(FF, WF, SF, CF) {
      void 0 === CF && (CF = SF), FF[CF] = WF[SF]
    };

    function tW(FF, WF) {
      for (var SF in FF) "default" === SF || Object.prototype.hasOwnProperty.call(WF, SF) || gW(WF, FF, SF)
    }

    function TF(FF) {
      var WF = "function" === typeof Symbol && Symbol.iterator,
        SF = WF && FF[WF],
        CF = 0;
      if (SF) return SF.call(FF);
      if (FF && "number" === typeof FF.length) return {
        next: function() {
          return FF && CF >= FF.length && (FF = void 0), {
            value: FF && FF[CF++],
            done: !FF
          }
        }
      };
      throw new TypeError(WF ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function aW(FF, WF) {
      var SF = "function" === typeof Symbol && FF[Symbol.iterator];
      if (!SF) return FF;
      var CF, AF, uF = SF.call(FF),
        hF = [];
      try {
        for (;
          (void 0 === WF || WF-- > 0) && !(CF = uF.next()).done;) hF.push(CF.value)
      } catch (bW) {
        AF = {
          error: bW
        }
      } finally {
        try {
          CF && !CF.done && (SF = uF.return) && SF.call(uF)
        } finally {
          if (AF) throw AF.error
        }
      }
      return hF
    }

    function kW() {
      for (var FF = [], WF = 0; WF < arguments.length; WF++) FF = FF.concat(aW(arguments[WF]));
      return FF
    }

    function qW() {
      for (var FF = 0, WF = 0, SF = arguments.length; WF < SF; WF++) FF += arguments[WF].length;
      var CF = Array(FF),
        AF = 0;
      for (WF = 0; WF < SF; WF++)
        for (var uF = arguments[WF], hF = 0, bW = uF.length; hF < bW; hF++, AF++) CF[AF] = uF[hF];
      return CF
    }

    function VF(FF, WF, SF) {
      if (SF || 2 === arguments.length)
        for (var CF, AF = 0, uF = WF.length; AF < uF; AF++) !CF && AF in WF || (CF || (CF = Array.prototype.slice.call(WF, 0, AF)), CF[AF] = WF[AF]);
      return FF.concat(CF || Array.prototype.slice.call(WF))
    }

    function NF(FF) {
      return this instanceof NF ? (this.v = FF, this) : new NF(FF)
    }

    function DF(FF, WF, SF) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var CF, AF = SF.apply(FF, WF || []),
        uF = [];
      return CF = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), hF("next"), hF("throw"), hF("return", (function(FF) {
        return function(WF) {
          return Promise.resolve(WF).then(FF, PF)
        }
      })), CF[Symbol.asyncIterator] = function() {
        return this
      }, CF;

      function hF(FF, WF) {
        AF[FF] && (CF[FF] = function(WF) {
          return new Promise((function(SF, CF) {
            uF.push([FF, WF, SF, CF]) > 1 || bW(FF, WF)
          }))
        }, WF && (CF[FF] = WF(CF[FF])))
      }

      function bW(FF, WF) {
        try {
          (SF = AF[FF](WF)).value instanceof NF ? Promise.resolve(SF.value.v).then(dF, PF) : RF(uF[0][2], SF)
        } catch (CF) {
          RF(uF[0][3], CF)
        }
        var SF
      }

      function dF(FF) {
        bW("next", FF)
      }

      function PF(FF) {
        bW("throw", FF)
      }

      function RF(FF, WF) {
        FF(WF), uF.shift(), uF.length && bW(uF[0][0], uF[0][1])
      }
    }

    function LF(FF) {
      var WF, SF;
      return WF = {}, CF("next"), CF("throw", (function(FF) {
        throw FF
      })), CF("return"), WF[Symbol.iterator] = function() {
        return this
      }, WF;

      function CF(CF, AF) {
        WF[CF] = FF[CF] ? function(WF) {
          return (SF = !SF) ? {
            value: NF(FF[CF](WF)),
            done: !1
          } : AF ? AF(WF) : WF
        } : AF
      }
    }

    function mW(FF) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var WF, SF = FF[Symbol.asyncIterator];
      return SF ? SF.call(FF) : (FF = TF(FF), WF = {}, CF("next"), CF("throw"), CF("return"), WF[Symbol.asyncIterator] = function() {
        return this
      }, WF);

      function CF(SF) {
        WF[SF] = FF[SF] && function(WF) {
          return new Promise((function(CF, AF) {
            (function(FF, WF, SF, CF) {
              Promise.resolve(CF).then((function(WF) {
                FF({
                  value: WF,
                  done: SF
                })
              }), WF)
            })(CF, AF, (WF = FF[SF](WF)).done, WF.value)
          }))
        }
      }
    }

    function OF(FF, WF) {
      return Object.defineProperty ? Object.defineProperty(FF, "raw", {
        value: WF
      }) : FF.raw = WF, FF
    }
    var xW = Object.create ? function(FF, WF) {
        Object.defineProperty(FF, "default", {
          enumerable: !0,
          value: WF
        })
      } : function(FF, WF) {
        FF.default = WF
      },
      ZF = function(FF) {
        return ZF = Object.getOwnPropertyNames || function(FF) {
          var WF = [];
          for (var SF in FF) Object.prototype.hasOwnProperty.call(FF, SF) && (WF[WF.length] = SF);
          return WF
        }, ZF(FF)
      };

    function oF(FF) {
      if (FF && FF.__esModule) return FF;
      var WF = {};
      if (null != FF)
        for (var SF = ZF(FF), CF = 0; CF < SF.length; CF++) "default" !== SF[CF] && gW(WF, FF, SF[CF]);
      return xW(WF, FF), WF
    }

    function YF(FF) {
      return FF && FF.__esModule ? FF : {
        default: FF
      }
    }

    function MF(FF, WF, SF, CF) {
      if ("a" === SF && !CF) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof WF ? FF !== WF || !CF : !WF.has(FF)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === SF ? CF : "a" === SF ? CF.call(FF) : CF ? CF.value : WF.get(FF)
    }

    function cW(FF, WF, SF, CF, AF) {
      if ("m" === CF) throw new TypeError("Private method is not writable");
      if ("a" === CF && !AF) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof WF ? FF !== WF || !AF : !WF.has(FF)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === CF ? AF.call(FF, SF) : AF ? AF.value = SF : WF.set(FF, SF), SF
    }

    function GF(FF, WF) {
      if (null === WF || "object" !== typeof WF && "function" !== typeof WF) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof FF ? WF === FF : FF.has(WF)
    }

    function zW(FF, WF, SF) {
      if (null !== WF && void 0 !== WF) {
        if ("object" !== typeof WF && "function" !== typeof WF) throw new TypeError("Object expected.");
        var CF, AF;
        if (SF) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          CF = WF[Symbol.asyncDispose]
        }
        if (void 0 === CF) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          CF = WF[Symbol.dispose], SF && (AF = CF)
        }
        if ("function" !== typeof CF) throw new TypeError("Object not disposable.");
        AF && (CF = function() {
          try {
            AF.call(this)
          } catch (FF) {
            return Promise.reject(FF)
          }
        }), FF.stack.push({
          value: WF,
          dispose: CF,
          async: SF
        })
      } else SF && FF.stack.push({
        async: !0
      });
      return WF
    }
    var IF = "function" === typeof SuppressedError ? SuppressedError : function(FF, WF, SF) {
      var CF = new Error(SF);
      return CF.name = "SuppressedError", CF.error = FF, CF.suppressed = WF, CF
    };

    function fF(FF) {
      function WF(WF) {
        FF.error = FF.hasError ? new IF(WF, FF.error, "An error was suppressed during disposal.") : WF, FF.hasError = !0
      }
      var SF, CF = 0;
      return function AF() {
        for (; SF = FF.stack.pop();) try {
          if (!SF.async && 1 === CF) return CF = 0, FF.stack.push(SF), Promise.resolve().then(AF);
          if (SF.dispose) {
            var uF = SF.dispose.call(SF.value);
            if (SF.async) return CF |= 2, Promise.resolve(uF).then(AF, (function(FF) {
              return WF(FF), AF()
            }))
          } else CF |= 1
        } catch (hF) {
          WF(hF)
        }
        if (1 === CF) return FF.hasError ? Promise.reject(FF.error) : Promise.resolve();
        if (FF.hasError) throw FF.error
      }()
    }

    function yW(FF, WF) {
      return "string" === typeof FF && /^\.\.?\//.test(FF) ? FF.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(FF, SF, CF, AF, uF) {
        return SF ? WF ? ".jsx" : ".js" : !CF || AF && uF ? CF + AF + "." + uF.toLowerCase() + "js" : FF
      })) : FF
    }
    const sF = {
      __extends: AF,
      __assign: uF,
      __rest: hF,
      __decorate: bW,
      __param: dF,
      __esDecorate: PF,
      __runInitializers: RF,
      __propKey: iW,
      __setFunctionName: eF,
      __metadata: EF,
      __awaiter: QF,
      __generator: rW,
      __createBinding: gW,
      __exportStar: tW,
      __values: TF,
      __read: aW,
      __spread: kW,
      __spreadArrays: qW,
      __spreadArray: VF,
      __await: NF,
      __asyncGenerator: DF,
      __asyncDelegator: LF,
      __asyncValues: mW,
      __makeTemplateObject: OF,
      __importStar: oF,
      __importDefault: YF,
      __classPrivateFieldGet: MF,
      __classPrivateFieldSet: cW,
      __classPrivateFieldIn: GF,
      __addDisposableResource: zW,
      __disposeResources: fF,
      __rewriteRelativeImportExtension: yW
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);