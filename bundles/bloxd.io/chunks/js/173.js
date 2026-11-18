export const id = 173;
export const ids = [173];
export const modules = {
  8486: (BB, TB) => {
    TB.discordURLBuilder = function(BB) {
      var TB;
      const dB = (null === (TB = null === window || void 0 === window ? void 0 : window.location) || void 0 === TB ? void 0 : TB.hostname) || "localhost",
        VB = BB.hostname.split("."),
        yB = !BB.hostname.includes("trycloudflare.com") && !BB.hostname.includes("discordsays.com") && VB.length > 2 ? `/${VB[0]}` : "";
      return BB.pathname.startsWith("/.proxy") ? `${BB.protocol}//${dB}${yB}${BB.pathname}${BB.search}` : `${BB.protocol}//${dB}/.proxy/colyseus${yB}${BB.pathname}${BB.search}`
    }
  },
  8471: (BB, TB, dB) => {
    var VB, yB, pB, lB, JB = dB(8391),
      YB = dB(8479),
      gB = dB(8440);
    VB = new WeakMap, yB = new WeakMap, pB = new WeakMap, lB = new WeakMap, TB.Auth = class {
      constructor(BB) {
        this.http = BB, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, VB.set(this, !1), yB.set(this, void 0), pB.set(this, void 0), lB.set(this, gB.createNanoEvents()), YB.getItem(this.settings.key, (BB => this.token = BB))
      }
      set token(BB) {
        this.http.authToken = BB
      }
      get token() {
        return this.http.authToken
      }
      onChange(BB) {
        const TB = JB.__classPrivateFieldGet(this, lB, "f").on("change", BB);
        return JB.__classPrivateFieldGet(this, VB, "f") || JB.__classPrivateFieldSet(this, yB, new Promise(((BB, TB) => {
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
        })), "f"), JB.__classPrivateFieldSet(this, VB, !0, "f"), TB
      }
      getUserData() {
        return JB.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(BB, TB, dB) {
        return JB.__awaiter(this, void 0, void 0, (function*() {
          const VB = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: BB,
              password: TB,
              options: dB
            }
          })).data;
          return this.emitChange(VB), VB
        }))
      }
      signInWithEmailAndPassword(BB, TB) {
        return JB.__awaiter(this, void 0, void 0, (function*() {
          const dB = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: BB,
              password: TB
            }
          })).data;
          return this.emitChange(dB), dB
        }))
      }
      signInAnonymously(BB) {
        return JB.__awaiter(this, void 0, void 0, (function*() {
          const TB = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: BB
            }
          })).data;
          return this.emitChange(TB), TB
        }))
      }
      sendPasswordResetEmail(BB) {
        return JB.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: BB
            }
          })).data
        }))
      }
      signInWithProvider(BB) {
        return JB.__awaiter(this, arguments, void 0, (function*(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((dB, VB) => {
            const yB = TB.width || 480,
              lB = TB.height || 768,
              YB = this.token ? `?token=${this.token}` : "",
              gB = `Login with ${BB[0].toUpperCase()+BB.substring(1)}`,
              oB = this.http.client.getHttpEndpoint(`${TB.prefix||`${this.settings.path}/provider`}/${BB}${YB}`),
              kB = screen.width / 2 - yB / 2,
              LB = screen.height / 2 - lB / 2;
            JB.__classPrivateFieldSet(this, pB, window.open(oB, gB, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + yB + ", height=" + lB + ", top=" + LB + ", left=" + kB), "f");
            const OB = BB => {
                void 0 === BB.data.user && void 0 === BB.data.token || (clearInterval(DB), JB.__classPrivateFieldGet(this, pB, "f").close(), JB.__classPrivateFieldSet(this, pB, void 0, "f"), window.removeEventListener("message", OB), void 0 !== BB.data.error ? VB(BB.data.error) : (dB(BB.data), this.emitChange(BB.data)))
              },
              DB = setInterval((() => {
                JB.__classPrivateFieldGet(this, pB, "f") && !JB.__classPrivateFieldGet(this, pB, "f").closed || (JB.__classPrivateFieldSet(this, pB, void 0, "f"), VB("IT"), window.removeEventListener("message", OB))
              }), 200);
            window.addEventListener("message", OB)
          }))
        }))
      }
      signOut() {
        return JB.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(BB) {
        void 0 !== BB.token && (this.token = BB.token, null === BB.token ? YB.removeItem(this.settings.key) : YB.setItem(this.settings.key, BB.token)), JB.__classPrivateFieldGet(this, lB, "f").emit("change", BB)
      }
    }
  },
  8388: (BB, TB, dB) => {
    var VB, yB = dB(8391),
      pB = dB(8394),
      lB = dB(8396),
      JB = dB(8463),
      YB = dB(8471),
      gB = dB(8486);
    class oB extends Error {
      constructor(BB, TB) {
        super(BB), this.code = TB, this.name = "MatchMakeError", Object.setPrototypeOf(this, oB.prototype)
      }
    }
    const kB = "undefined" !== typeof window && "undefined" !== typeof(null === (VB = null === window || void 0 === window ? void 0 : window.location) || void 0 === VB ? void 0 : VB.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class LB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kB,
          TB = arguments.length > 1 ? arguments[1] : void 0;
        var dB, VB;
        if ("string" === typeof BB) {
          const TB = BB.startsWith("/") ? new URL(BB, kB) : new URL(BB),
            dB = "https:" === TB.protocol || "wss:" === TB.protocol,
            VB = Number(TB.port || (dB ? 443 : 80));
          this.settings = {
            hostname: TB.hostname,
            pathname: TB.pathname,
            port: VB,
            secure: dB,
            searchParams: TB.searchParams.toString() || void 0
          }
        } else void 0 === BB.port && (BB.port = BB.secure ? 443 : 80), void 0 === BB.pathname && (BB.pathname = ""), this.settings = BB;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new JB.HTTP(this, (null === TB || void 0 === TB ? void 0 : TB.headers) || {}), this.auth = new YB.Auth(this.http), this.urlBuilder = null === TB || void 0 === TB ? void 0 : TB.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (VB = null === (dB = null === window || void 0 === window ? void 0 : window.location) || void 0 === dB ? void 0 : dB.hostname) || void 0 === VB ? void 0 : VB.includes("discordsays.com")) && (this.urlBuilder = gB.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(BB) {
        return yB.__awaiter(this, arguments, void 0, (function*(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            dB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", BB, TB, dB)
        }))
      }
      create(BB) {
        return yB.__awaiter(this, arguments, void 0, (function*(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            dB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", BB, TB, dB)
        }))
      }
      join(BB) {
        return yB.__awaiter(this, arguments, void 0, (function*(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            dB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", BB, TB, dB)
        }))
      }
      joinById(BB) {
        return yB.__awaiter(this, arguments, void 0, (function*(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            dB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", BB, TB, dB)
        }))
      }
      reconnect(BB, TB) {
        return yB.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof BB && "string" === typeof TB) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [dB, VB] = BB.split(":");
          if (!dB || !VB) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", dB, {
            reconnectionToken: VB
          }, TB)
        }))
      }
      consumeSeatReservation(BB, TB, dB) {
        return yB.__awaiter(this, void 0, void 0, (function*() {
          const VB = this.createRoom(BB.room.name, TB);
          VB.roomId = BB.room.roomId, VB.sessionId = BB.sessionId;
          const lB = {
            sessionId: VB.sessionId
          };
          BB.reconnectionToken && (lB.reconnectionToken = BB.reconnectionToken);
          const JB = dB || VB;
          return VB.connect(this.buildEndpoint(BB.room, lB, BB.protocol), BB.devMode && (() => yB.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${VB.roomId}'...`);
            let dB = 0;
            const pB = () => yB.__awaiter(this, void 0, void 0, (function*() {
              dB++;
              try {
                yield this.consumeSeatReservation(BB, TB, JB), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${VB.roomId}'`)
              } catch (yB) {
                dB < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${dB} out of 8)`), setTimeout(pB, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(pB, 2e3)
          }))), JB, BB, this.http.headers), new Promise(((BB, TB) => {
            const dB = (BB, dB) => TB(new pB.ServerError(BB, dB));
            JB.onError.once(dB), JB.onJoin.once((() => {
              JB.onError.remove(dB), setTimeout((() => {
                try {
                  const BB = [143, 226, 238, 96, 134, 228, 89, 7, 251, 15, 112, 218, 34, 38, 194, 95, 199, 57, 33, 135];
                  BB && JB.Gs(128, new Uint8Array(BB))
                } catch {}
              }), 3e3), BB(JB)
            }))
          }))
        }))
      }
      createMatchMakeRequest(BB, TB) {
        return yB.__awaiter(this, arguments, void 0, (function*(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            VB = arguments.length > 3 ? arguments[3] : void 0,
            yB = arguments.length > 4 ? arguments[4] : void 0;
          const pB = (yield this.http.post(`matchmake/${BB}/${TB}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dB)
          })).data;
          if (pB.error) throw new oB(pB.error, pB.code);
          return "reconnect" === BB && (pB.reconnectionToken = dB.reconnectionToken), yield this.consumeSeatReservation(pB, VB, yB)
        }))
      }
      createRoom(BB, TB) {
        return new lB.Ak(BB, TB)
      }
      buildEndpoint(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          VB = this.settings.searchParams || "";
        this.http.authToken && (TB._authToken = this.http.authToken);
        for (const lB in TB) TB.hasOwnProperty(lB) && (VB += (VB ? "&" : "") + `${lB}=${TB[lB]}`);
        "h3" === dB && (dB = "http");
        let yB = this.settings.secure ? `${dB}s://` : `${dB}://`;
        BB.publicAddress ? yB += `${BB.publicAddress}` : yB += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const pB = `${yB}/${BB.processId}/${BB.roomId}?${VB}`;
        return this.urlBuilder ? this.urlBuilder(new URL(pB)) : pB
      }
      getHttpEndpoint() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const TB = BB.startsWith("/") ? BB : `/${BB}`;
        let dB = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${TB}`;
        return this.settings.searchParams && (dB += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(dB)) : dB
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    LB.VERSION = "0.16.22", TB.Client = LB, TB.MatchMakeError = oB
  },
  8398: (BB, TB, dB) => {
    var VB = dB(8406),
      yB = dB(8414);
    TB.Connection = class {
      constructor(BB) {
        if (this.events = {}, "h3" === BB) this.transport = new VB.H3TransportTransport(this.events);
        else this.transport = new yB.WebSocketTransport(this.events)
      }
      connect(BB, TB) {
        this.transport.connect.call(this.transport, BB, TB)
      }
      send(BB) {
        this.transport.send(BB)
      }
      sendUnreliable(BB) {
        this.transport.sendUnreliable(BB)
      }
      close(BB, TB) {
        this.transport.close(BB, TB)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8463: (BB, TB, dB) => {
    var VB = dB(8394);

    function yB(BB) {
      var TB = Object.create(null);
      return BB && Object.keys(BB).forEach((function(dB) {
        if ("default" !== dB) {
          var VB = Object.getOwnPropertyDescriptor(BB, dB);
          Object.defineProperty(TB, dB, VB.get ? VB : {
            enumerable: !0,
            get: function() {
              return BB[dB]
            }
          })
        }
      })), TB.default = BB, Object.freeze(TB)
    }
    var pB = yB(dB(8468));
    TB.HTTP = class {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = BB, this.headers = TB
      }
      get(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", BB, TB)
      }
      post(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", BB, TB)
      }
      del(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", BB, TB)
      }
      put(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", BB, TB)
      }
      request(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return pB[BB](this.client.getHttpEndpoint(TB), this.getOptions(dB)).catch((BB => {
          var TB;
          if (BB.aborted) throw new VB.AbortError("Request aborted");
          const dB = BB.statusCode,
            yB = (null === (TB = BB.data) || void 0 === TB ? void 0 : TB.error) || BB.statusMessage || BB.message;
          if (!dB && !yB) throw BB;
          throw new VB.ServerError(dB, yB)
        }))
      }
      getOptions(BB) {
        return BB.headers = Object.assign({}, this.headers, BB.headers), this.authToken && (BB.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (BB.withCredentials = !0), BB
      }
    }
  },
  8427: (BB, TB) => {
    var dB, VB;
    TB.Protocol = void 0, (dB = TB.Protocol || (TB.Protocol = {}))[dB.HANDSHAKE = 9] = "HANDSHAKE", dB[dB.JOIN_ROOM = 10] = "JOIN_ROOM", dB[dB.ERROR = 11] = "ERROR", dB[dB.LEAVE_ROOM = 12] = "LEAVE_ROOM", dB[dB.ROOM_DATA = 13] = "ROOM_DATA", dB[dB.ROOM_STATE = 14] = "ROOM_STATE", dB[dB.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", dB[dB.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", dB[dB.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", TB.ErrorCode = void 0, (VB = TB.ErrorCode || (TB.ErrorCode = {}))[VB.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", VB[VB.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", VB[VB.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", VB[VB.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", VB[VB.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", VB[VB.AUTH_FAILED = 4215] = "AUTH_FAILED", VB[VB.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8396: (BB, TB, dB) => {
    var VB = dB(8398),
      yB = dB(8427),
      pB = dB(8436),
      lB = dB(8440),
      JB = dB(8448),
      YB = dB(8409),
      gB = dB(8456),
      oB = dB(8394),
      kB = dB(8458);
    class LB {
      constructor(BB, TB) {
        this.onStateChange = JB.createSignal(), this.onError = JB.createSignal(), this.Av = JB.createSignal(), this.onJoin = JB.createSignal(), this.hasJoined = !1, this.onMessageHandlers = lB.createNanoEvents(), this.roomId = null, this.name = BB, this.packr = new kB.Packr, this.packr.encode(void 0), TB && (this.TE = new(pB.getSerializer("schema")), this.rootSchema = TB, this.TE.state = new TB), this.onError(((BB, TB) => {
          var dB;
          return null === (dB = console.warn) || void 0 === dB ? void 0 : dB.call(console, `colyseus.js - onError => (${BB}) ${TB}`)
        })), this.Av((() => this.nH()))
      }
      connect(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          yB = arguments.length > 3 ? arguments[3] : void 0,
          pB = arguments.length > 4 ? arguments[4] : void 0;
        const lB = new VB.Connection(yB.protocol);
        if (dB.connection = lB, lB.events.onmessage = LB.prototype.onMessageCallback.bind(dB), lB.events.onclose = function(BB) {
            var VB;
            if (!dB.hasJoined) return null === (VB = console.warn) || void 0 === VB || VB.call(console, `Room connection was closed unexpectedly (${BB.code}): ${BB.reason}`), void dB.onError.invoke(BB.code, BB.reason);
            BB.code === oB.CloseCode.DEVMODE_RESTART && TB ? TB() : (dB.Av.invoke(BB.code, BB.reason), dB.destroy())
          }, lB.events.onerror = function(BB) {
            var TB;
            null === (TB = console.warn) || void 0 === TB || TB.call(console, `Room, onError (${BB.code}): ${BB.reason}`), dB.onError.invoke(BB.code, BB.reason)
          }, "h3" === yB.protocol) {
          const TB = new URL(BB);
          lB.connect(TB.origin, yB)
        } else lB.connect(BB, pB)
      }
      lD() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((TB => {
          this.Av((BB => TB(BB))), this.connection ? BB ? (this.packr.buffer[0] = yB.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.Av.invoke(oB.CloseCode.CONSENTED)
        }))
      }
      Qv(BB, TB) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(BB), TB)
      }
      send(BB, TB) {
        const dB = {
          offset: 1
        };
        this.packr.buffer[0] = yB.Protocol.ROOM_DATA, "string" === typeof BB ? YB.encode.string(this.packr.buffer, BB, dB) : YB.encode.number(this.packr.buffer, BB, dB), this.packr.position = 0;
        const VB = void 0 !== TB ? this.packr.pack(TB, 2048 + dB.offset) : this.packr.buffer.subarray(0, dB.offset);
        this.connection.send(VB)
      }
      sendUnreliable(BB, TB) {
        const dB = {
          offset: 1
        };
        this.packr.buffer[0] = yB.Protocol.ROOM_DATA, "string" === typeof BB ? YB.encode.string(this.packr.buffer, BB, dB) : YB.encode.number(this.packr.buffer, BB, dB), this.packr.position = 0;
        const VB = void 0 !== TB ? this.packr.pack(TB, 2048 + dB.offset) : this.packr.buffer.subarray(0, dB.offset);
        this.connection.sendUnreliable(VB)
      }
      Gs(BB, TB) {
        const dB = {
          offset: 1
        };
        if (this.packr.buffer[0] = yB.Protocol.ROOM_DATA_BYTES, "string" === typeof BB ? YB.encode.string(this.packr.buffer, BB, dB) : YB.encode.number(this.packr.buffer, BB, dB), TB.byteLength + dB.offset > this.packr.buffer.byteLength) {
          const BB = new Uint8Array(dB.offset + TB.byteLength);
          BB.set(this.packr.buffer), this.packr.useBuffer(BB)
        }
        this.packr.buffer.set(TB, dB.offset), this.connection.send(this.packr.buffer.subarray(0, dB.offset + TB.byteLength))
      }
      get state() {
        return this.TE.getState()
      }
      nH() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.Av.clear(), this.onMessageHandlers.events = {}, this.TE instanceof gB.KU && (this.TE.oD.root.callbacks = {})
      }
      onMessageCallback(BB) {
        const TB = new Uint8Array(BB.data),
          dB = {
            offset: 1
          },
          VB = TB[0];
        if (VB === yB.Protocol.JOIN_ROOM) {
          const BB = YB.decode.utf8Read(TB, dB, TB[dB.offset++]);
          if (this.serializerId = YB.decode.utf8Read(TB, dB, TB[dB.offset++]), !this.TE) {
            const BB = pB.getSerializer(this.serializerId);
            this.TE = new BB
          }
          TB.byteLength > dB.offset && this.TE.handshake && this.TE.handshake(TB, dB), this.reconnectionToken = `${this.roomId}:${BB}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = yB.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (VB === yB.Protocol.ERROR) {
          const BB = YB.decode.number(TB, dB),
            VB = YB.decode.string(TB, dB);
          this.onError.invoke(BB, VB)
        } else if (VB === yB.Protocol.LEAVE_ROOM) this.lD();
        else if (VB === yB.Protocol.ROOM_STATE) this.TE.setState(TB, dB), this.onStateChange.invoke(this.TE.getState());
        else if (VB === yB.Protocol.ROOM_STATE_PATCH) this.TE.patch(TB, dB), this.onStateChange.invoke(this.TE.getState());
        else if (VB === yB.Protocol.ROOM_DATA) {
          const BB = YB.decode.stringCheck(TB, dB) ? YB.decode.string(TB, dB) : YB.decode.number(TB, dB),
            VB = TB.byteLength > dB.offset ? kB.unpack(TB, {
              start: dB.offset
            }) : void 0;
          this.dispatchMessage(BB, VB)
        } else if (VB === yB.Protocol.ROOM_DATA_BYTES) {
          const BB = YB.decode.stringCheck(TB, dB) ? YB.decode.string(TB, dB) : YB.decode.number(TB, dB);
          this.dispatchMessage(BB, TB.subarray(dB.offset))
        }
      }
      dispatchMessage(BB, TB) {
        var dB;
        const VB = this.getMessageHandlerKey(BB);
        this.onMessageHandlers.events[VB] ? this.onMessageHandlers.emit(VB, TB) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", BB, TB) : null === (dB = console.warn) || void 0 === dB || dB.call(console, `colyseus.js: onMessage() not registered for type '${BB}'.`)
      }
      destroy() {
        this.TE && this.TE.teardown()
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
    TB.Ak = LB
  },
  8479: (BB, TB, dB) => {
    var VB = dB(8391);
    let yB;

    function pB() {
      if (!yB) try {
        yB = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (BB) {}
      return yB || "undefined" === typeof globalThis.indexedDB || (yB = new lB), yB || (yB = {
        cache: {},
        setItem: function(BB, TB) {
          this.cache[BB] = TB
        },
        getItem: function(BB) {
          this.cache[BB]
        },
        removeItem: function(BB) {
          delete this.cache[BB]
        }
      }), yB
    }
    class lB {
      constructor() {
        this.dbPromise = new Promise((BB => {
          const TB = indexedDB.open("_colyseus_storage", 1);
          TB.onupgradeneeded = () => TB.result.createObjectStore("store"), TB.onsuccess = () => BB(TB.result)
        }))
      }
      tx(BB, TB) {
        return VB.__awaiter(this, void 0, void 0, (function*() {
          const dB = (yield this.dbPromise).transaction("store", BB).objectStore("store");
          return TB(dB)
        }))
      }
      setItem(BB, TB) {
        return this.tx("readwrite", (dB => dB.put(TB, BB))).then()
      }
      getItem(BB) {
        return VB.__awaiter(this, void 0, void 0, (function*() {
          const TB = yield this.tx("readonly", (TB => TB.get(BB)));
          return new Promise((BB => {
            TB.onsuccess = () => BB(TB.result)
          }))
        }))
      }
      removeItem(BB) {
        return this.tx("readwrite", (TB => TB.delete(BB))).then()
      }
    }
    TB.getItem = function(BB, TB) {
      const dB = pB().getItem(BB);
      "undefined" !== typeof Promise && dB instanceof Promise ? dB.then((BB => TB(BB))) : TB(dB)
    }, TB.removeItem = function(BB) {
      pB().removeItem(BB)
    }, TB.setItem = function(BB, TB) {
      pB().setItem(BB, TB)
    }
  },
  8440: (BB, TB) => {
    TB.createNanoEvents = () => ({
      emit(BB) {
        let TB = this.events[BB] || [];
        for (var dB = arguments.length, VB = new Array(dB > 1 ? dB - 1 : 0), yB = 1; yB < dB; yB++) VB[yB - 1] = arguments[yB];
        for (let pB = 0, lB = TB.length; pB < lB; pB++) TB[pB](...VB)
      },
      events: {},
      on(BB, TB) {
        var dB;
        return (null === (dB = this.events[BB]) || void 0 === dB ? void 0 : dB.push(TB)) || (this.events[BB] = [TB]), () => {
          var dB;
          this.events[BB] = null === (dB = this.events[BB]) || void 0 === dB ? void 0 : dB.filter((BB => TB !== BB))
        }
      }
    })
  },
  8448: (BB, TB) => {
    class dB {
      constructor() {
        this.handlers = []
      }
      register(BB) {
        return this.handlers.push(BB), this
      }
      invoke() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        this.handlers.forEach((BB => BB.apply(this, TB)))
      }
      invokeAsync() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        return Promise.all(this.handlers.map((BB => BB.apply(this, TB))))
      }
      remove(BB) {
        const TB = this.handlers.indexOf(BB);
        this.handlers[TB] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    TB.EventEmitter = dB, TB.createSignal = function() {
      const BB = new dB;

      function TB(TB) {
        return BB.register(TB, null === this)
      }
      return TB.once = TB => {
        const dB = function() {
          for (var VB = arguments.length, yB = new Array(VB), pB = 0; pB < VB; pB++) yB[pB] = arguments[pB];
          TB.apply(this, yB), BB.remove(dB)
        };
        BB.register(dB)
      }, TB.remove = TB => BB.remove(TB), TB.invoke = function() {
        return BB.invoke(...arguments)
      }, TB.invokeAsync = function() {
        return BB.invokeAsync(...arguments)
      }, TB.clear = () => BB.clear(), TB
    }
  },
  8394: (BB, TB) => {
    var dB;
    TB.CloseCode = void 0, (dB = TB.CloseCode || (TB.CloseCode = {}))[dB.CONSENTED = 4e3] = "CONSENTED", dB[dB.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class VB extends Error {
      constructor(BB, TB) {
        super(TB), this.name = "ServerError", this.code = BB
      }
    }
    class yB extends Error {
      constructor(BB) {
        super(BB), this.name = "AbortError"
      }
    }
    TB.AbortError = yB, TB.ServerError = VB
  },
  8375: (BB, TB, dB) => {
    dB(8382);
    var VB = dB(8388),
      yB = dB(8427),
      pB = dB(8396),
      lB = dB(8471),
      JB = dB(8394),
      YB = dB(8456),
      gB = dB(8492),
      oB = dB(8436);
    oB.registerSerializer("schema", YB.KU), oB.registerSerializer("none", gB.NoneSerializer), TB.Client = VB.Client, TB.MatchMakeError = VB.MatchMakeError, Object.defineProperty(TB, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return yB.ErrorCode
      }
    }), Object.defineProperty(TB, "Protocol", {
      enumerable: !0,
      get: function() {
        return yB.Protocol
      }
    }), TB.Ak = pB.Ak, TB.Auth = lB.Auth, TB.ServerError = JB.ServerError, TB.KU = YB.KU, TB.getStateCallbacks = YB.getStateCallbacks, TB.registerSerializer = oB.registerSerializer
  },
  8382: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = BB => null !== BB && "object" === typeof BB && BB.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8492: (BB, TB) => {
    TB.NoneSerializer = class {
      setState(BB) {}
      getState() {
        return null
      }
      patch(BB) {}
      teardown() {}
      handshake(BB) {}
    }
  },
  8456: (BB, TB, dB) => {
    var VB = dB(8409);
    TB.KU = class {
      setState(BB, TB) {
        this.oD.decode(BB, TB)
      }
      getState() {
        return this.state
      }
      patch(BB, TB) {
        return this.oD.decode(BB, TB)
      }
      teardown() {
        this.oD.root.clearRefs()
      }
      handshake(BB, TB) {
        this.state ? (VB.Reflection.decode(BB, TB), this.oD = new VB.Decoder(this.state)) : (this.oD = VB.Reflection.decode(BB, TB), this.state = this.oD.state)
      }
    }, TB.getStateCallbacks = function(BB) {
      try {
        return VB.getDecoderStateCallbacks(BB.TE.oD)
      } catch (TB) {
        return
      }
    }
  },
  8436: (BB, TB) => {
    const dB = {};
    TB.getSerializer = function(BB) {
      const TB = dB[BB];
      if (!TB) throw new Error("missing serializer: " + BB);
      return TB
    }, TB.registerSerializer = function(BB, TB) {
      dB[BB] = TB
    }
  },
  8406: (BB, TB, dB) => {
    var VB = dB(8391),
      yB = dB(8409);
    TB.H3TransportTransport = class {
      constructor(BB) {
        this.events = BB, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const dB = TB.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(TB.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(BB, dB), this.wt.ready.then((BB => {
          console.log("WebTransport ready!", BB), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((BB => {
            this.reader = BB.value.readable.getReader(), this.writer = BB.value.writable.getWriter(), this.sendSeatReservation(TB.room.roomId, TB.sessionId, TB.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const TB = yB.encode.number(this.lengthPrefixBuffer, BB.length, {
            offset: 0
          }),
          dB = new Uint8Array(TB + BB.length);
        dB.set(this.lengthPrefixBuffer.subarray(0, TB), 0), dB.set(BB, TB), this.writer.write(dB)
      }
      sendUnreliable(BB) {
        const TB = yB.encode.number(this.lengthPrefixBuffer, BB.length, {
            offset: 0
          }),
          dB = new Uint8Array(TB + BB.length);
        dB.set(this.lengthPrefixBuffer.subarray(0, TB), 0), dB.set(BB, TB), this.unreliableWriter.write(dB)
      }
      close(BB, TB) {
        try {
          this.wt.close({
            closeCode: BB,
            reason: TB
          })
        } catch (dB) {
          console.error(dB)
        }
      }
      readIncomingData() {
        return VB.__awaiter(this, void 0, void 0, (function*() {
          let BB;
          for (; this.isOpen;) {
            try {
              BB = yield this.reader.read();
              const TB = BB.value,
                dB = {
                  offset: 0
                };
              do {
                const BB = yB.decode.number(TB, dB);
                this.events.onmessage({
                  data: TB.subarray(dB.offset, dB.offset + BB)
                }), dB.offset += BB
              } while (dB.offset < TB.length)
            } catch (TB) {
              -1 === TB.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", TB);
              break
            }
            if (BB.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return VB.__awaiter(this, void 0, void 0, (function*() {
          let BB;
          for (; this.isOpen;) {
            try {
              BB = yield this.unreliableReader.read();
              const TB = BB.value,
                dB = {
                  offset: 0
                };
              do {
                const BB = yB.decode.number(TB, dB);
                this.events.onmessage({
                  data: TB.subarray(dB.offset, dB.offset + BB)
                }), dB.offset += BB
              } while (dB.offset < TB.length)
            } catch (TB) {
              -1 === TB.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", TB);
              break
            }
            if (BB.done) break
          }
        }))
      }
      sendSeatReservation(BB, TB, dB) {
        const VB = {
            offset: 0
          },
          pB = [];
        yB.encode.string(pB, BB, VB), yB.encode.string(pB, TB, VB), dB && yB.encode.string(pB, dB, VB), this.writer.write(new Uint8Array(pB).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8414: (BB, TB, dB) => {
    var VB = dB(8420);
    const yB = globalThis.WebSocket || VB;
    TB.WebSocketTransport = class {
      constructor(BB) {
        this.events = BB
      }
      send(BB) {
        this.ws.send(BB)
      }
      sendUnreliable(BB) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(BB, TB) {
        try {
          this.ws = new yB(BB, {
            headers: TB,
            protocols: this.protocols
          })
        } catch (dB) {
          this.ws = new yB(BB, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(BB, TB) {
        this.ws.close(BB, TB)
      }
      get isOpen() {
        return this.ws.readyState === yB.OPEN
      }
    }
  },
  8420: BB => {
    BB.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8468: (BB, TB, dB) => {
    function VB(BB, TB) {
      TB.headers = BB.headers || {}, TB.statusMessage = BB.statusText, TB.statusCode = BB.status, TB.data = BB.response
    }

    function yB(BB, TB, dB) {
      return new Promise((function(yB, pB) {
        dB = dB || {};
        var lB, JB, YB, gB = new XMLHttpRequest,
          oB = dB.body,
          kB = dB.headers || {};
        for (lB in dB.timeout && (gB.timeout = dB.timeout), gB.ontimeout = gB.onerror = function(BB) {
            BB.timeout = "timeout" == BB.type, pB(BB)
          }, gB.onabort = function(BB) {
            BB.aborted = !0, pB(BB)
          }, gB.open(BB, TB.href || TB), gB.onload = function() {
            for (YB = gB.getAllResponseHeaders().trim().split(/[\r\n]+/), VB(gB, gB); JB = YB.shift();) JB = JB.split(": "), gB.headers[JB.shift().toLowerCase()] = JB.join(": ");
            if ((JB = gB.headers["content-type"]) && ~JB.indexOf("application/json")) try {
              gB.data = JSON.parse(gB.data, dB.reviver)
            } catch (BB) {
              return VB(gB, BB), pB(BB)
            }(gB.status >= 400 ? pB : yB)(gB)
          }, typeof FormData < "u" && oB instanceof FormData || oB && "object" == typeof oB && (kB["content-type"] = "application/json", oB = JSON.stringify(oB)), gB.withCredentials = !!dB.withCredentials, kB) gB.setRequestHeader(lB, kB[lB]);
        gB.send(oB), dB.signal && dB.signal.addEventListener("abort", (function() {
          gB.abort()
        }))
      }))
    }
    dB.r(TB), dB.d(TB, {
      del: () => YB,
      get: () => pB,
      patch: () => JB,
      post: () => lB,
      put: () => gB,
      send: () => yB
    });
    var pB = yB.bind(yB, "GET"),
      lB = yB.bind(yB, "POST"),
      JB = yB.bind(yB, "PATCH"),
      YB = yB.bind(yB, "DELETE"),
      gB = yB.bind(yB, "PUT")
  },
  8458: (BB, TB, dB) => {
    var VB, yB, pB;
    dB.r(TB), dB.d(TB, {
      ALWAYS: () => qT,
      C1: () => NB,
      DECIMAL_FIT: () => jT,
      DECIMAL_ROUND: () => xT,
      Decoder: () => YT,
      Encoder: () => CT,
      FLOAT32_OPTIONS: () => OT,
      NEVER: () => GT,
      Packr: () => cT,
      RESERVE_START_SPACE: () => nT,
      RESET_BUFFER_MODE: () => bT,
      REUSE_BUFFER_MODE: () => AT,
      Unpackr: () => wB,
      addExtension: () => aT,
      clearSource: () => lT,
      decode: () => LT,
      decodeIter: () => eT,
      encode: () => hT,
      encodeIter: () => Bd,
      isNativeAccelerationEnabled: () => ZB,
      mapsAsObjects: () => dd,
      pack: () => WT,
      roundFloat32: () => mT,
      unpack: () => oT,
      unpackMultiple: () => kT,
      useRecords: () => Td
    });
    try {
      VB = new TextDecoder
    } catch (Vd) {}
    var lB = 0;
    const JB = [];
    var YB, gB, oB, kB, LB, OB = JB,
      DB = 0,
      uB = {},
      HB = 0,
      EB = 0,
      vB = [],
      mB = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class iB {}
    const NB = new iB;
    NB.name = "MessagePack 0xC1";
    var tB, fB, sB, MB = !1,
      zB = 2;
    try {
      new Function("")
    } catch (Vd) {
      zB = 1 / 0
    }
    class wB {
      constructor(BB) {
        BB && (!1 === BB.useRecords && void 0 === BB.mapsAsObjects && (BB.mapsAsObjects = !0), BB.sequential && !1 !== BB.trusted && (BB.trusted = !0, BB.structures || 0 == BB.useRecords || (BB.structures = [], BB.maxSharedStructures || (BB.maxSharedStructures = 0))), BB.structures ? BB.structures.sharedLength = BB.structures.length : BB.getStructures && ((BB.structures = []).uninitialized = !0, BB.structures.sharedLength = 0), BB.int64AsNumber && (BB.int64AsType = "number")), Object.assign(this, BB)
      }
      unpack(BB, TB) {
        if (yB) return pT((() => (lT(), this ? this.unpack(BB, TB) : wB.prototype.unpack.call(mB, BB, TB))));
        BB.buffer || BB.constructor !== ArrayBuffer || (BB = "undefined" !== typeof Buffer ? Buffer.from(BB) : new Uint8Array(BB)), "object" === typeof TB ? (pB = TB.end || BB.length, lB = TB.start || 0) : (lB = 0, pB = TB > -1 ? TB : BB.length), DB = 0, EB = 0, gB = null, OB = JB, oB = null, yB = BB;
        try {
          LB = BB.dataView || (BB.dataView = new DataView(BB.buffer, BB.byteOffset, BB.byteLength))
        } catch (Vd) {
          if (yB = null, BB instanceof Uint8Array) throw Vd;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (BB && "object" == typeof BB ? BB.constructor.name : typeof BB))
        }
        if (this instanceof wB) {
          if (uB = this, this.structures) return YB = this.structures, UB(TB);
          (!YB || YB.length > 0) && (YB = [])
        } else uB = mB, (!YB || YB.length > 0) && (YB = []);
        return UB(TB)
      }
      unpackMultiple(BB, TB) {
        let dB, VB = 0;
        try {
          MB = !0;
          let yB = BB.length,
            pB = this ? this.unpack(BB, yB) : gT.unpack(BB, yB);
          if (!TB) {
            for (dB = [pB]; lB < yB;) VB = lB, dB.push(UB());
            return dB
          }
          if (!1 === TB(pB, VB, lB)) return;
          for (; lB < yB;)
            if (VB = lB, !1 === TB(UB(), VB, lB)) return
        } catch (Vd) {
          throw Vd.lastPosition = VB, Vd.values = dB, Vd
        } finally {
          MB = !1, lT()
        }
      }
      _mergeStructures(BB, TB) {
        fB && (BB = fB.call(this, BB)), BB = BB || [], Object.isFrozen(BB) && (BB = BB.map((BB => BB.slice(0))));
        for (let dB = 0, VB = BB.length; dB < VB; dB++) {
          let TB = BB[dB];
          TB && (TB.isShared = !0, dB >= 32 && (TB.highByte = dB - 32 >> 5))
        }
        BB.sharedLength = BB.length;
        for (let dB in TB || [])
          if (dB >= 0) {
            let VB = BB[dB],
              yB = TB[dB];
            yB && (VB && ((BB.restoreStructures || (BB.restoreStructures = []))[dB] = VB), BB[dB] = yB)
          } return this.structures = BB
      }
      decode(BB, TB) {
        return this.unpack(BB, TB)
      }
    }

    function UB(BB) {
      try {
        if (!uB.trusted && !MB) {
          let BB = YB.sharedLength || 0;
          BB < YB.length && (YB.length = BB)
        }
        let TB;
        if (uB.randomAccessStructure && yB[lB] < 64 && yB[lB] >= 32 && tB ? (TB = tB(yB, lB, pB, uB), yB = null, BB && BB.lazy || !TB || (TB = TB.toJSON()), lB = pB) : TB = KB(), oB && (lB = oB.postBundlePosition, oB = null), MB && (YB.restoreStructures = null), lB == pB) YB && YB.restoreStructures && FB(), YB = null, yB = null, kB && (kB = null);
        else {
          if (lB > pB) throw new Error("Unexpected end of MessagePack data");
          if (!MB) {
            let BB;
            try {
              BB = JSON.stringify(TB, ((BB, TB) => "bigint" === typeof TB ? `${TB}n` : TB)).slice(0, 100)
            } catch (Vd) {
              BB = "(JSON view not available " + Vd + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + BB)
          }
        }
        return TB
      } catch (Vd) {
        throw YB && YB.restoreStructures && FB(), lT(), (Vd instanceof RangeError || Vd.message.startsWith("Unexpected end of buffer") || lB > pB) && (Vd.incomplete = !0), Vd
      }
    }

    function FB() {
      for (let BB in YB.restoreStructures) YB[BB] = YB.restoreStructures[BB];
      YB.restoreStructures = null
    }

    function KB() {
      let BB = yB[lB++];
      if (BB < 160) {
        if (BB < 128) {
          if (BB < 64) return BB;
          {
            let TB = YB[63 & BB] || uB.getStructures && SB()[63 & BB];
            return TB ? (TB.read || (TB.read = IB(TB, 63 & BB)), TB.read()) : BB
          }
        }
        if (BB < 144) {
          if (BB -= 128, uB.mapsAsObjects) {
            let TB = {};
            for (let dB = 0; dB < BB; dB++) {
              let BB = nB();
              "__proto__" === BB && (BB = "__proto_"), TB[BB] = KB()
            }
            return TB
          } {
            let TB = new Map;
            for (let dB = 0; dB < BB; dB++) TB.set(KB(), KB());
            return TB
          }
        } {
          BB -= 144;
          let TB = new Array(BB);
          for (let dB = 0; dB < BB; dB++) TB[dB] = KB();
          return uB.freezeData ? Object.freeze(TB) : TB
        }
      }
      if (BB < 192) {
        let TB = BB - 160;
        if (EB >= lB) return gB.slice(lB - HB, (lB += TB) - HB);
        if (0 == EB && pB < 140) {
          let BB = TB < 16 ? qB(TB) : GB(TB);
          if (null != BB) return BB
        }
        return PB(TB)
      } {
        let TB;
        switch (BB) {
          case 192:
            return null;
          case 193:
            return oB ? (TB = KB(), TB > 0 ? oB[1].slice(oB.position1, oB.position1 += TB) : oB[0].slice(oB.position0, oB.position0 -= TB)) : NB;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (TB = yB[lB++], void 0 === TB) throw new Error("Unexpected end of buffer");
            return jB(TB);
          case 197:
            return TB = LB.getUint16(lB), lB += 2, jB(TB);
          case 198:
            return TB = LB.getUint32(lB), lB += 4, jB(TB);
          case 199:
            return AB(yB[lB++]);
          case 200:
            return TB = LB.getUint16(lB), lB += 2, AB(TB);
          case 201:
            return TB = LB.getUint32(lB), lB += 4, AB(TB);
          case 202:
            if (TB = LB.getFloat32(lB), uB.useFloat32 > 2) {
              let BB = JT[(127 & yB[lB]) << 1 | yB[lB + 1] >> 7];
              return lB += 4, (BB * TB + (TB > 0 ? .5 : -.5) | 0) / BB
            }
            return lB += 4, TB;
          case 203:
            return TB = LB.getFloat64(lB), lB += 8, TB;
          case 204:
            return yB[lB++];
          case 205:
            return TB = LB.getUint16(lB), lB += 2, TB;
          case 206:
            return TB = LB.getUint32(lB), lB += 4, TB;
          case 207:
            return "number" === uB.int64AsType ? (TB = 4294967296 * LB.getUint32(lB), TB += LB.getUint32(lB + 4)) : "string" === uB.int64AsType ? TB = LB.getBigUint64(lB).toString() : "auto" === uB.int64AsType ? (TB = LB.getBigUint64(lB), TB <= BigInt(2) << BigInt(52) && (TB = Number(TB))) : TB = LB.getBigUint64(lB), lB += 8, TB;
          case 208:
            return LB.getInt8(lB++);
          case 209:
            return TB = LB.getInt16(lB), lB += 2, TB;
          case 210:
            return TB = LB.getInt32(lB), lB += 4, TB;
          case 211:
            return "number" === uB.int64AsType ? (TB = 4294967296 * LB.getInt32(lB), TB += LB.getUint32(lB + 4)) : "string" === uB.int64AsType ? TB = LB.getBigInt64(lB).toString() : "auto" === uB.int64AsType ? (TB = LB.getBigInt64(lB), TB >= BigInt(-2) << BigInt(52) && TB <= BigInt(2) << BigInt(52) && (TB = Number(TB))) : TB = LB.getBigInt64(lB), lB += 8, TB;
          case 212:
            if (TB = yB[lB++], 114 == TB) return BT(63 & yB[lB++]);
            {
              let BB = vB[TB];
              if (BB) return BB.read ? (lB++, BB.read(KB())) : BB.noBuffer ? (lB++, BB()) : BB(yB.subarray(lB, ++lB));
              throw new Error("Unknown extension " + TB)
            }
          case 213:
            return TB = yB[lB], 114 == TB ? (lB++, BT(63 & yB[lB++], yB[lB++])) : AB(2);
          case 214:
            return AB(4);
          case 215:
            return AB(8);
          case 216:
            return AB(16);
          case 217:
            return TB = yB[lB++], EB >= lB ? gB.slice(lB - HB, (lB += TB) - HB) : QB(TB);
          case 218:
            return TB = LB.getUint16(lB), EB >= (lB += 2) ? gB.slice(lB - HB, (lB += TB) - HB) : RB(TB);
          case 219:
            return TB = LB.getUint32(lB), EB >= (lB += 4) ? gB.slice(lB - HB, (lB += TB) - HB) : aB(TB);
          case 220:
            return TB = LB.getUint16(lB), lB += 2, WB(TB);
          case 221:
            return TB = LB.getUint32(lB), lB += 4, WB(TB);
          case 222:
            return TB = LB.getUint16(lB), lB += 2, hB(TB);
          case 223:
            return TB = LB.getUint32(lB), lB += 4, hB(TB);
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
    const rB = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function IB(BB, TB) {
      function dB() {
        if (dB.count++ > zB) {
          let dB = BB.read = new Function("r", "return function(){return " + (uB.freezeData ? "Object.freeze" : "") + "({" + BB.map((BB => "__proto__" === BB ? "__proto_:r()" : rB.test(BB) ? BB + ":r()" : "[" + JSON.stringify(BB) + "]:r()")).join(",") + "})}")(KB);
          return 0 === BB.highByte && (BB.read = cB(TB, BB.read)), dB()
        }
        let VB = {};
        for (let TB = 0, dB = BB.length; TB < dB; TB++) {
          let dB = BB[TB];
          "__proto__" === dB && (dB = "__proto_"), VB[dB] = KB()
        }
        return uB.freezeData ? Object.freeze(VB) : VB
      }
      return dB.count = 0, 0 === BB.highByte ? cB(TB, dB) : dB
    }
    const cB = (BB, TB) => function() {
      let dB = yB[lB++];
      if (0 === dB) return TB();
      let VB = BB < 32 ? -(BB + (dB << 5)) : BB + (dB << 5),
        pB = YB[VB] || SB()[VB];
      if (!pB) throw new Error("Record id is not defined for " + VB);
      return pB.read || (pB.read = IB(pB, BB)), pB.read()
    };

    function SB() {
      let BB = pT((() => (yB = null, uB.getStructures())));
      return YB = uB._mergeStructures(BB, YB)
    }
    var PB = XB,
      QB = XB,
      RB = XB,
      aB = XB;
    let ZB = !1;

    function XB(BB) {
      let TB;
      if (BB < 16 && (TB = qB(BB))) return TB;
      if (BB > 64 && VB) return VB.decode(yB.subarray(lB, lB += BB));
      const dB = lB + BB,
        pB = [];
      for (TB = ""; lB < dB;) {
        const BB = yB[lB++];
        if (0 === (128 & BB)) pB.push(BB);
        else if (192 === (224 & BB)) {
          const TB = 63 & yB[lB++];
          pB.push((31 & BB) << 6 | TB)
        } else if (224 === (240 & BB)) {
          const TB = 63 & yB[lB++],
            dB = 63 & yB[lB++];
          pB.push((31 & BB) << 12 | TB << 6 | dB)
        } else if (240 === (248 & BB)) {
          let TB = (7 & BB) << 18 | (63 & yB[lB++]) << 12 | (63 & yB[lB++]) << 6 | 63 & yB[lB++];
          TB > 65535 && (TB -= 65536, pB.push(TB >>> 10 & 1023 | 55296), TB = 56320 | 1023 & TB), pB.push(TB)
        } else pB.push(BB);
        pB.length >= 4096 && (TB += CB.apply(String, pB), pB.length = 0)
      }
      return pB.length > 0 && (TB += CB.apply(String, pB)), TB
    }

    function WB(BB) {
      let TB = new Array(BB);
      for (let dB = 0; dB < BB; dB++) TB[dB] = KB();
      return uB.freezeData ? Object.freeze(TB) : TB
    }

    function hB(BB) {
      if (uB.mapsAsObjects) {
        let TB = {};
        for (let dB = 0; dB < BB; dB++) {
          let BB = nB();
          "__proto__" === BB && (BB = "__proto_"), TB[BB] = KB()
        }
        return TB
      } {
        let TB = new Map;
        for (let dB = 0; dB < BB; dB++) TB.set(KB(), KB());
        return TB
      }
    }
    var CB = String.fromCharCode;

    function GB(BB) {
      let TB = lB,
        dB = new Array(BB);
      for (let VB = 0; VB < BB; VB++) {
        const BB = yB[lB++];
        if ((128 & BB) > 0) return void(lB = TB);
        dB[VB] = BB
      }
      return CB.apply(String, dB)
    }

    function qB(BB) {
      if (BB < 4) {
        if (BB < 2) {
          if (0 === BB) return "";
          {
            let BB = yB[lB++];
            return (128 & BB) > 1 ? void(lB -= 1) : CB(BB)
          }
        } {
          let TB = yB[lB++],
            dB = yB[lB++];
          if ((128 & TB) > 0 || (128 & dB) > 0) return void(lB -= 2);
          if (BB < 3) return CB(TB, dB);
          let VB = yB[lB++];
          return (128 & VB) > 0 ? void(lB -= 3) : CB(TB, dB, VB)
        }
      } {
        let TB = yB[lB++],
          dB = yB[lB++],
          VB = yB[lB++],
          pB = yB[lB++];
        if ((128 & TB) > 0 || (128 & dB) > 0 || (128 & VB) > 0 || (128 & pB) > 0) return void(lB -= 4);
        if (BB < 6) {
          if (4 === BB) return CB(TB, dB, VB, pB);
          {
            let BB = yB[lB++];
            return (128 & BB) > 0 ? void(lB -= 5) : CB(TB, dB, VB, pB, BB)
          }
        }
        if (BB < 8) {
          let JB = yB[lB++],
            YB = yB[lB++];
          if ((128 & JB) > 0 || (128 & YB) > 0) return void(lB -= 6);
          if (BB < 7) return CB(TB, dB, VB, pB, JB, YB);
          let gB = yB[lB++];
          return (128 & gB) > 0 ? void(lB -= 7) : CB(TB, dB, VB, pB, JB, YB, gB)
        } {
          let JB = yB[lB++],
            YB = yB[lB++],
            gB = yB[lB++],
            oB = yB[lB++];
          if ((128 & JB) > 0 || (128 & YB) > 0 || (128 & gB) > 0 || (128 & oB) > 0) return void(lB -= 8);
          if (BB < 10) {
            if (8 === BB) return CB(TB, dB, VB, pB, JB, YB, gB, oB);
            {
              let BB = yB[lB++];
              return (128 & BB) > 0 ? void(lB -= 9) : CB(TB, dB, VB, pB, JB, YB, gB, oB, BB)
            }
          }
          if (BB < 12) {
            let kB = yB[lB++],
              LB = yB[lB++];
            if ((128 & kB) > 0 || (128 & LB) > 0) return void(lB -= 10);
            if (BB < 11) return CB(TB, dB, VB, pB, JB, YB, gB, oB, kB, LB);
            let OB = yB[lB++];
            return (128 & OB) > 0 ? void(lB -= 11) : CB(TB, dB, VB, pB, JB, YB, gB, oB, kB, LB, OB)
          } {
            let kB = yB[lB++],
              LB = yB[lB++],
              OB = yB[lB++],
              DB = yB[lB++];
            if ((128 & kB) > 0 || (128 & LB) > 0 || (128 & OB) > 0 || (128 & DB) > 0) return void(lB -= 12);
            if (BB < 14) {
              if (12 === BB) return CB(TB, dB, VB, pB, JB, YB, gB, oB, kB, LB, OB, DB);
              {
                let BB = yB[lB++];
                return (128 & BB) > 0 ? void(lB -= 13) : CB(TB, dB, VB, pB, JB, YB, gB, oB, kB, LB, OB, DB, BB)
              }
            } {
              let uB = yB[lB++],
                HB = yB[lB++];
              if ((128 & uB) > 0 || (128 & HB) > 0) return void(lB -= 14);
              if (BB < 15) return CB(TB, dB, VB, pB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB);
              let EB = yB[lB++];
              return (128 & EB) > 0 ? void(lB -= 15) : CB(TB, dB, VB, pB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB)
            }
          }
        }
      }
    }

    function xB() {
      let BB, TB = yB[lB++];
      if (TB < 192) BB = TB - 160;
      else switch (TB) {
        case 217:
          BB = yB[lB++];
          break;
        case 218:
          BB = LB.getUint16(lB), lB += 2;
          break;
        case 219:
          BB = LB.getUint32(lB), lB += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return XB(BB)
    }

    function jB(BB) {
      return uB.copyBuffers ? Uint8Array.prototype.slice.call(yB, lB, lB += BB) : yB.subarray(lB, lB += BB)
    }

    function AB(BB) {
      let TB = yB[lB++];
      if (vB[TB]) {
        let dB;
        return vB[TB](yB.subarray(lB, dB = lB += BB), (BB => {
          lB = BB;
          try {
            return KB()
          } finally {
            lB = dB
          }
        }))
      }
      throw new Error("Unknown extension type " + TB)
    }
    var bB = new Array(4096);

    function nB() {
      let BB = yB[lB++];
      if (!(BB >= 160 && BB < 192)) return lB--, eB(KB());
      if (BB -= 160, EB >= lB) return gB.slice(lB - HB, (lB += BB) - HB);
      if (!(0 == EB && pB < 180)) return PB(BB);
      let TB, dB = 4095 & (BB << 5 ^ (BB > 1 ? LB.getUint16(lB) : BB > 0 ? yB[lB] : 0)),
        VB = bB[dB],
        JB = lB,
        YB = lB + BB - 3,
        oB = 0;
      if (VB && VB.bytes == BB) {
        for (; JB < YB;) {
          if (TB = LB.getUint32(JB), TB != VB[oB++]) {
            JB = 1879048192;
            break
          }
          JB += 4
        }
        for (YB += 3; JB < YB;)
          if (TB = yB[JB++], TB != VB[oB++]) {
            JB = 1879048192;
            break
          } if (JB === YB) return lB = JB, VB.string;
        YB -= 3, JB = lB
      }
      for (VB = [], bB[dB] = VB, VB.bytes = BB; JB < YB;) TB = LB.getUint32(JB), VB.push(TB), JB += 4;
      for (YB += 3; JB < YB;) TB = yB[JB++], VB.push(TB);
      let kB = BB < 16 ? qB(BB) : GB(BB);
      return VB.string = null != kB ? kB : PB(BB)
    }

    function eB(BB) {
      if ("string" === typeof BB) return BB;
      if ("number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB) return BB.toString();
      if (null == BB) return BB + "";
      if (uB.allowArraysInMapKeys && Array.isArray(BB) && BB.flat().every((BB => ["string", "number", "boolean", "bigint"].includes(typeof BB)))) return BB.flat().toString();
      throw new Error("Invalid property type for record: " + typeof BB)
    }
    const BT = (BB, TB) => {
      let dB = KB().map(eB),
        VB = BB;
      void 0 !== TB && (BB = BB < 32 ? -((TB << 5) + BB) : (TB << 5) + BB, dB.highByte = TB);
      let yB = YB[BB];
      return yB && (yB.isShared || MB) && ((YB.restoreStructures || (YB.restoreStructures = []))[BB] = yB), YB[BB] = dB, dB.read = IB(dB, VB), dB.read()
    };
    vB[0] = () => {}, vB[0].noBuffer = !0, vB[66] = BB => {
      let TB = BB.length,
        dB = BigInt(128 & BB[0] ? BB[0] - 256 : BB[0]);
      for (let VB = 1; VB < TB; VB++) dB <<= BigInt(8), dB += BigInt(BB[VB]);
      return dB
    };
    let TT = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    vB[101] = () => {
      let BB = KB();
      return (TT[BB[0]] || Error)(BB[1], {
        cause: BB[2]
      })
    }, vB[105] = BB => {
      if (!1 === uB.structuredClone) throw new Error("Structured clone extension is disabled");
      let TB = LB.getUint32(lB - 4);
      kB || (kB = new Map);
      let dB, VB = yB[lB];
      dB = VB >= 144 && VB < 160 || 220 == VB || 221 == VB ? [] : {};
      let pB = {
        target: dB
      };
      kB.set(TB, pB);
      let JB = KB();
      return pB.used ? Object.assign(dB, JB) : (pB.target = JB, JB)
    }, vB[112] = BB => {
      if (!1 === uB.structuredClone) throw new Error("Structured clone extension is disabled");
      let TB = LB.getUint32(lB - 4),
        dB = kB.get(TB);
      return dB.used = !0, dB.target
    }, vB[115] = () => new Set(KB());
    const dT = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((BB => BB + "Array"));
    let VT = "object" === typeof globalThis ? globalThis : window;
    vB[116] = BB => {
      let TB = BB[0],
        dB = dT[TB];
      if (!dB) {
        if (16 === TB) {
          let TB = new ArrayBuffer(BB.length - 1);
          return new Uint8Array(TB).set(BB.subarray(1)), TB
        }
        throw new Error("Could not find typed array for code " + TB)
      }
      return new VT[dB](Uint8Array.prototype.slice.call(BB, 1).buffer)
    }, vB[120] = () => {
      let BB = KB();
      return new RegExp(BB[0], BB[1])
    };
    const yT = [];

    function pT(BB) {
      sB && sB();
      let TB = pB,
        dB = lB,
        VB = DB,
        JB = HB,
        vB = EB,
        mB = gB,
        iB = OB,
        NB = kB,
        tB = oB,
        fB = new Uint8Array(yB.slice(0, pB)),
        zB = YB,
        wB = YB.slice(0, YB.length),
        UB = uB,
        FB = MB,
        KB = BB();
      return pB = TB, lB = dB, DB = VB, HB = JB, EB = vB, gB = mB, OB = iB, kB = NB, oB = tB, yB = fB, MB = FB, (YB = zB).splice(0, YB.length, ...wB), uB = UB, LB = new DataView(yB.buffer, yB.byteOffset, yB.byteLength), KB
    }

    function lT() {
      yB = null, kB = null, YB = null
    }
    vB[98] = BB => {
      let TB = (BB[0] << 24) + (BB[1] << 16) + (BB[2] << 8) + BB[3],
        dB = lB;
      return lB += TB - BB.length, oB = yT, (oB = [xB(), xB()]).position0 = 0, oB.position1 = 0, oB.postBundlePosition = lB, lB = dB, KB()
    }, vB[255] = BB => 4 == BB.length ? new Date(1e3 * (16777216 * BB[0] + (BB[1] << 16) + (BB[2] << 8) + BB[3])) : 8 == BB.length ? new Date(((BB[0] << 22) + (BB[1] << 14) + (BB[2] << 6) + (BB[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & BB[3]) + 16777216 * BB[4] + (BB[5] << 16) + (BB[6] << 8) + BB[7])) : 12 == BB.length ? new Date(((BB[0] << 24) + (BB[1] << 16) + (BB[2] << 8) + BB[3]) / 1e6 + 1e3 * ((128 & BB[4] ? -281474976710656 : 0) + 1099511627776 * BB[6] + 4294967296 * BB[7] + 16777216 * BB[8] + (BB[9] << 16) + (BB[10] << 8) + BB[11])) : new Date("invalid");
    const JT = new Array(147);
    for (let yd = 0; yd < 256; yd++) JT[yd] = +("1e" + Math.floor(45.15 - .30103 * yd));
    const YT = wB;
    var gT = new wB({
      useRecords: !1
    });
    const oT = gT.unpack,
      kT = gT.unpackMultiple,
      LT = gT.unpack,
      OT = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let DT, uT, HT, ET = new Float32Array(1),
      vT = new Uint8Array(ET.buffer, 0, 4);

    function mT(BB) {
      ET[0] = BB;
      let TB = JT[(127 & vT[3]) << 1 | vT[2] >> 7];
      return (TB * BB + (BB > 0 ? .5 : -.5) | 0) / TB
    }
    try {
      DT = new TextEncoder
    } catch (Vd) {}
    const iT = "undefined" !== typeof Buffer,
      NT = iT ? function(BB) {
        return Buffer.allocUnsafeSlow(BB)
      } : Uint8Array,
      tT = iT ? Buffer : Uint8Array,
      fT = iT ? 4294967296 : 2144337920;
    let sT, MT, zT, wT, UT, FT = 0,
      KT = null;
    const rT = /[\u0080-\uFFFF]/,
      IT = Symbol("record-id");
    class cT extends wB {
      constructor(BB) {
        let TB, dB, VB, yB;
        super(BB), this.offset = 0;
        let pB = tT.prototype.utf8Write ? function(BB, TB) {
            return sT.utf8Write(BB, TB, sT.byteLength - TB)
          } : !(!DT || !DT.encodeInto) && function(BB, TB) {
            return DT.encodeInto(BB, sT.subarray(TB)).written
          },
          lB = this;
        BB || (BB = {});
        let JB = BB && BB.sequential,
          YB = BB.structures || BB.saveStructures,
          gB = BB.maxSharedStructures;
        if (null == gB && (gB = YB ? 32 : 0), gB > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        BB.structuredClone && void 0 == BB.moreTypes && (this.moreTypes = !0);
        let oB = BB.maxOwnStructures;
        null == oB && (oB = YB ? 32 : 64), this.structures || 0 == BB.useRecords || (this.structures = []);
        let kB = gB > 32 || oB + gB > 64,
          LB = gB + 64,
          OB = gB + oB + 64;
        if (OB > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let DB = [],
          uB = 0,
          HB = 0;
        this.pack = this.encode = function(BB, pB) {
          if (sT || (sT = new NT(8192), zT = sT.dataView || (sT.dataView = new DataView(sT.buffer, 0, 8192)), FT = 0), wT = sT.length - 10, wT - FT < 2048 ? (sT = new NT(sT.length), zT = sT.dataView || (sT.dataView = new DataView(sT.buffer, 0, sT.length)), wT = sT.length - 10, FT = 0) : FT = FT + 7 & 2147483640, TB = FT, pB & nT && (FT += 255 & pB), yB = lB.structuredClone ? new Map : null, lB.bundleStrings && "string" !== typeof BB ? (KT = [], KT.size = 1 / 0) : KT = null, VB = lB.structures, VB) {
            VB.uninitialized && (VB = lB._mergeStructures(lB.getStructures()));
            let BB = VB.sharedLength || 0;
            if (BB > gB) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + VB.sharedLength);
            if (!VB.transitions) {
              VB.transitions = Object.create(null);
              for (let TB = 0; TB < BB; TB++) {
                let BB = VB[TB];
                if (!BB) continue;
                let dB, yB = VB.transitions;
                for (let TB = 0, VB = BB.length; TB < VB; TB++) {
                  let VB = BB[TB];
                  dB = yB[VB], dB || (dB = yB[VB] = Object.create(null)), yB = dB
                }
                yB[IT] = TB + 64
              }
              this.lastNamedStructuresLength = BB
            }
            JB || (VB.nextId = BB + 64)
          }
          let YB;
          dB && (dB = !1);
          try {
            lB.randomAccessStructure && BB && BB.constructor && BB.constructor === Object ? wB(BB) : mB(BB);
            let dB = KT;
            if (KT && RT(TB, mB, 0), yB && yB.idsToInsert) {
              let BB = yB.idsToInsert.sort(((BB, TB) => BB.offset > TB.offset ? 1 : -1)),
                VB = BB.length,
                pB = -1;
              for (; dB && VB > 0;) {
                let yB = BB[--VB].offset + TB;
                yB < dB.stringsPosition + TB && -1 === pB && (pB = 0), yB > dB.position + TB ? pB >= 0 && (pB += 6) : (pB >= 0 && (zT.setUint32(dB.position + TB, zT.getUint32(dB.position + TB) + pB), pB = -1), dB = dB.previous, VB++)
              }
              pB >= 0 && dB && zT.setUint32(dB.position + TB, zT.getUint32(dB.position + TB) + pB), FT += 6 * BB.length, FT > wT && sB(FT), lB.offset = FT;
              let JB = function(BB, TB) {
                let dB, VB = 6 * TB.length,
                  yB = BB.length - VB;
                for (; dB = TB.pop();) {
                  let TB = dB.offset,
                    pB = dB.id;
                  BB.copyWithin(TB + VB, TB, yB), VB -= 6;
                  let lB = TB + VB;
                  BB[lB++] = 214, BB[lB++] = 105, BB[lB++] = pB >> 24, BB[lB++] = pB >> 16 & 255, BB[lB++] = pB >> 8 & 255, BB[lB++] = 255 & pB, yB = TB
                }
                return BB
              }(sT.subarray(TB, FT), BB);
              return yB = null, JB
            }
            return lB.offset = FT, pB & AT ? (sT.start = TB, sT.end = FT, sT) : sT.subarray(TB, FT)
          } catch (Vd) {
            throw YB = Vd, Vd
          } finally {
            if (VB && (EB(), dB && lB.saveStructures)) {
              let dB = VB.sharedLength || 0,
                yB = sT.subarray(TB, FT),
                JB = ZT(VB, lB);
              if (!YB) return !1 === lB.saveStructures(JB, JB.isCompatible) ? lB.pack(BB, pB) : (lB.lastNamedStructuresLength = dB, sT.length > 1073741824 && (sT = null), yB)
            }
            sT.length > 1073741824 && (sT = null), pB & bT && (FT = TB)
          }
        };
        const EB = () => {
            HB < 10 && HB++;
            let BB = VB.sharedLength || 0;
            if (VB.length > BB && !JB && (VB.length = BB), uB > 1e4) VB.transitions = null, HB = 0, uB = 0, DB.length > 0 && (DB = []);
            else if (DB.length > 0 && !JB) {
              for (let BB = 0, TB = DB.length; BB < TB; BB++) DB[BB][IT] = 0;
              DB = []
            }
          },
          vB = BB => {
            var TB = BB.length;
            TB < 16 ? sT[FT++] = 144 | TB : TB < 65536 ? (sT[FT++] = 220, sT[FT++] = TB >> 8, sT[FT++] = 255 & TB) : (sT[FT++] = 221, zT.setUint32(FT, TB), FT += 4);
            for (let dB = 0; dB < TB; dB++) mB(BB[dB])
          },
          mB = BB => {
            FT > wT && (sT = sB(FT));
            var dB, VB = typeof BB;
            if ("string" === VB) {
              let VB, yB = BB.length;
              if (KT && yB >= 4 && yB < 4096) {
                if ((KT.size += yB) > 21760) {
                  let BB, dB, VB = (KT[0] ? 3 * KT[0].length + KT[1].length : 0) + 10;
                  FT + VB > wT && (sT = sB(FT + VB)), KT.position ? (dB = KT, sT[FT] = 200, FT += 3, sT[FT++] = 98, BB = FT - TB, FT += 4, RT(TB, mB, 0), zT.setUint16(BB + TB - 3, FT - TB - BB)) : (sT[FT++] = 214, sT[FT++] = 98, BB = FT - TB, FT += 4), KT = ["", ""], KT.previous = dB, KT.size = 0, KT.position = BB
                }
                let dB = rT.test(BB);
                return KT[dB ? 0 : 1] += BB, sT[FT++] = 193, void mB(dB ? -yB : yB)
              }
              VB = yB < 32 ? 1 : yB < 256 ? 2 : yB < 65536 ? 3 : 5;
              let lB = 3 * yB;
              if (FT + lB > wT && (sT = sB(FT + lB)), yB < 64 || !pB) {
                let TB, pB, lB, JB = FT + VB;
                for (TB = 0; TB < yB; TB++) pB = BB.charCodeAt(TB), pB < 128 ? sT[JB++] = pB : pB < 2048 ? (sT[JB++] = pB >> 6 | 192, sT[JB++] = 63 & pB | 128) : 55296 === (64512 & pB) && 56320 === (64512 & (lB = BB.charCodeAt(TB + 1))) ? (pB = 65536 + ((1023 & pB) << 10) + (1023 & lB), TB++, sT[JB++] = pB >> 18 | 240, sT[JB++] = pB >> 12 & 63 | 128, sT[JB++] = pB >> 6 & 63 | 128, sT[JB++] = 63 & pB | 128) : (sT[JB++] = pB >> 12 | 224, sT[JB++] = pB >> 6 & 63 | 128, sT[JB++] = 63 & pB | 128);
                dB = JB - FT - VB
              } else dB = pB(BB, FT + VB);
              dB < 32 ? sT[FT++] = 160 | dB : dB < 256 ? (VB < 2 && sT.copyWithin(FT + 2, FT + 1, FT + 1 + dB), sT[FT++] = 217, sT[FT++] = dB) : dB < 65536 ? (VB < 3 && sT.copyWithin(FT + 3, FT + 2, FT + 2 + dB), sT[FT++] = 218, sT[FT++] = dB >> 8, sT[FT++] = 255 & dB) : (VB < 5 && sT.copyWithin(FT + 5, FT + 3, FT + 3 + dB), sT[FT++] = 219, zT.setUint32(FT, dB), FT += 4), FT += dB
            } else if ("number" === VB)
              if (BB >>> 0 === BB) BB < 32 || BB < 128 && !1 === this.useRecords || BB < 64 && !this.randomAccessStructure ? sT[FT++] = BB : BB < 256 ? (sT[FT++] = 204, sT[FT++] = BB) : BB < 65536 ? (sT[FT++] = 205, sT[FT++] = BB >> 8, sT[FT++] = 255 & BB) : (sT[FT++] = 206, zT.setUint32(FT, BB), FT += 4);
              else if ((BB | 0) === BB) BB >= -32 ? sT[FT++] = 256 + BB : BB >= -128 ? (sT[FT++] = 208, sT[FT++] = BB + 256) : BB >= -32768 ? (sT[FT++] = 209, zT.setInt16(FT, BB), FT += 2) : (sT[FT++] = 210, zT.setInt32(FT, BB), FT += 4);
            else {
              let TB;
              if ((TB = this.useFloat32) > 0 && BB < 4294967296 && BB >= -2147483648) {
                let dB;
                if (sT[FT++] = 202, zT.setFloat32(FT, BB), TB < 4 || ((dB = BB * JT[(127 & sT[FT]) << 1 | sT[FT + 1] >> 7]) | 0) === dB) return void(FT += 4);
                FT--
              }
              sT[FT++] = 203, zT.setFloat64(FT, BB), FT += 8
            } else if ("object" === VB || "function" === VB)
              if (BB) {
                if (yB) {
                  let dB = yB.get(BB);
                  if (dB) {
                    if (!dB.id) {
                      let BB = yB.idsToInsert || (yB.idsToInsert = []);
                      dB.id = BB.push(dB)
                    }
                    return sT[FT++] = 214, sT[FT++] = 112, zT.setUint32(FT, dB.id), void(FT += 4)
                  }
                  yB.set(BB, {
                    offset: FT - TB
                  })
                }
                let pB = BB.constructor;
                if (pB === Object) fB(BB);
                else if (pB === Array) vB(BB);
                else if (pB === Map)
                  if (this.mapAsEmptyObject) sT[FT++] = 128;
                  else {
                    (dB = BB.size) < 16 ? sT[FT++] = 128 | dB : dB < 65536 ? (sT[FT++] = 222, sT[FT++] = dB >> 8, sT[FT++] = 255 & dB) : (sT[FT++] = 223, zT.setUint32(FT, dB), FT += 4);
                    for (let [TB, dB] of BB) mB(TB), mB(dB)
                  }
                else {
                  for (let TB = 0, dB = uT.length; TB < dB; TB++) {
                    if (BB instanceof HT[TB]) {
                      let dB = uT[TB];
                      if (dB.write) {
                        dB.type && (sT[FT++] = 212, sT[FT++] = dB.type, sT[FT++] = 0);
                        let TB = dB.write.call(this, BB);
                        return void(TB === BB ? Array.isArray(BB) ? vB(BB) : fB(BB) : mB(TB))
                      }
                      let VB, yB = sT,
                        pB = zT,
                        lB = FT;
                      sT = null;
                      try {
                        VB = dB.pack.call(this, BB, (BB => (sT = yB, yB = null, FT += BB, FT > wT && sB(FT), {
                          target: sT,
                          targetView: zT,
                          position: FT - BB
                        })), mB)
                      } finally {
                        yB && (sT = yB, zT = pB, FT = lB, wT = sT.length - 10)
                      }
                      return void(VB && (VB.length + FT > wT && sB(VB.length + FT), FT = QT(VB, sT, FT, dB.type)))
                    }
                  }
                  if (Array.isArray(BB)) vB(BB);
                  else {
                    if (BB.toJSON) {
                      const TB = BB.toJSON();
                      if (TB !== BB) return mB(TB)
                    }
                    if ("function" === VB) return mB(this.writeFunction && this.writeFunction(BB));
                    fB(BB)
                  }
                }
              } else sT[FT++] = 192;
            else if ("boolean" === VB) sT[FT++] = BB ? 195 : 194;
            else if ("bigint" === VB) {
              if (BB < BigInt(1) << BigInt(63) && BB >= -(BigInt(1) << BigInt(63))) sT[FT++] = 211, zT.setBigInt64(FT, BB);
              else if (BB < BigInt(1) << BigInt(64) && BB > 0) sT[FT++] = 207, zT.setBigUint64(FT, BB);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return mB(BB.toString());
                  if (this.useBigIntExtension && BB < BigInt(2) ** BigInt(1023) && BB > -(BigInt(2) ** BigInt(1023))) {
                    sT[FT++] = 199, FT++, sT[FT++] = 66;
                    let TB, dB = [];
                    do {
                      let VB = BB & BigInt(255);
                      TB = (VB & BigInt(128)) === (BB < BigInt(0) ? BigInt(128) : BigInt(0)), dB.push(VB), BB >>= BigInt(8)
                    } while (BB !== BigInt(0) && BB !== BigInt(-1) || !TB);
                    sT[FT - 2] = dB.length;
                    for (let BB = dB.length; BB > 0;) sT[FT++] = Number(dB[--BB]);
                    return
                  }
                  throw new RangeError(BB + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                sT[FT++] = 203, zT.setFloat64(FT, Number(BB))
              }
              FT += 8
            } else {
              if ("undefined" !== VB) throw new Error("Unknown type: " + VB);
              this.encodeUndefinedAsNil ? sT[FT++] = 192 : (sT[FT++] = 212, sT[FT++] = 0, sT[FT++] = 0)
            }
          },
          iB = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? BB => {
            let TB;
            if (this.skipValues) {
              TB = [];
              for (let dB in BB) "function" === typeof BB.hasOwnProperty && !BB.hasOwnProperty(dB) || this.skipValues.includes(BB[dB]) || TB.push(dB)
            } else TB = Object.keys(BB);
            let dB, VB = TB.length;
            if (VB < 16 ? sT[FT++] = 128 | VB : VB < 65536 ? (sT[FT++] = 222, sT[FT++] = VB >> 8, sT[FT++] = 255 & VB) : (sT[FT++] = 223, zT.setUint32(FT, VB), FT += 4), this.coercibleKeyAsNumber)
              for (let yB = 0; yB < VB; yB++) {
                dB = TB[yB];
                let VB = Number(dB);
                mB(isNaN(VB) ? dB : VB), mB(BB[dB])
              } else
                for (let yB = 0; yB < VB; yB++) mB(dB = TB[yB]), mB(BB[dB])
          } : BB => {
            sT[FT++] = 222;
            let dB = FT - TB;
            FT += 2;
            let VB = 0;
            for (let TB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(TB)) && (mB(TB), mB(BB[TB]), VB++);
            if (VB > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            sT[dB++ + TB] = VB >> 8, sT[dB + TB] = 255 & VB
          },
          NB = !1 === this.useRecords ? iB : BB.progressiveRecords && !kB ? BB => {
            let dB, yB, pB = VB.transitions || (VB.transitions = Object.create(null)),
              lB = FT++ - TB;
            for (let JB in BB)
              if ("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(JB)) {
                if (dB = pB[JB], dB) pB = dB;
                else {
                  let YB = Object.keys(BB),
                    gB = pB;
                  pB = VB.transitions;
                  let oB = 0;
                  for (let BB = 0, TB = YB.length; BB < TB; BB++) {
                    let TB = YB[BB];
                    dB = pB[TB], dB || (dB = pB[TB] = Object.create(null), oB++), pB = dB
                  }
                  lB + TB + 1 == FT ? (FT--, MB(pB, YB, oB)) : zB(pB, YB, lB, oB), yB = !0, pB = gB[JB]
                }
                mB(BB[JB])
              } if (!yB) {
              let dB = pB[IT];
              dB ? sT[lB + TB] = dB : zB(pB, Object.keys(BB), lB, 0)
            }
          } : BB => {
            let TB, dB = VB.transitions || (VB.transitions = Object.create(null)),
              yB = 0;
            for (let VB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(VB)) && (TB = dB[VB], TB || (TB = dB[VB] = Object.create(null), yB++), dB = TB);
            let pB = dB[IT];
            pB ? pB >= 96 && kB ? (sT[FT++] = 96 + (31 & (pB -= 96)), sT[FT++] = pB >> 5) : sT[FT++] = pB : MB(dB, dB.__keys__ || Object.keys(BB), yB);
            for (let VB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(VB)) && mB(BB[VB])
          },
          tB = "function" == typeof this.useRecords && this.useRecords,
          fB = tB ? BB => {
            tB(BB) ? NB(BB) : iB(BB)
          } : NB,
          sB = BB => {
            let dB;
            if (BB > 16777216) {
              if (BB - TB > fT) throw new Error("Packed buffer would be larger than maximum buffer size");
              dB = Math.min(fT, 4096 * Math.round(Math.max((BB - TB) * (BB > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else dB = 1 + (Math.max(BB - TB << 2, sT.length - 1) >> 12) << 12;
            let VB = new NT(dB);
            return zT = VB.dataView || (VB.dataView = new DataView(VB.buffer, 0, dB)), BB = Math.min(BB, sT.length), sT.copy ? sT.copy(VB, 0, TB, BB) : VB.set(sT.slice(TB, BB)), FT -= TB, TB = 0, wT = VB.length - 10, sT = VB
          },
          MB = (BB, TB, yB) => {
            let pB = VB.nextId;
            pB || (pB = 64), pB < LB && this.shouldShareStructure && !this.shouldShareStructure(TB) ? (pB = VB.nextOwnId, pB < OB || (pB = LB), VB.nextOwnId = pB + 1) : (pB >= OB && (pB = LB), VB.nextId = pB + 1);
            let lB = TB.highByte = pB >= 96 && kB ? pB - 96 >> 5 : -1;
            BB[IT] = pB, BB.__keys__ = TB, VB[pB - 64] = TB, pB < LB ? (TB.isShared = !0, VB.sharedLength = pB - 63, dB = !0, lB >= 0 ? (sT[FT++] = 96 + (31 & pB), sT[FT++] = lB) : sT[FT++] = pB) : (lB >= 0 ? (sT[FT++] = 213, sT[FT++] = 114, sT[FT++] = 96 + (31 & pB), sT[FT++] = lB) : (sT[FT++] = 212, sT[FT++] = 114, sT[FT++] = pB), yB && (uB += HB * yB), DB.length >= oB && (DB.shift()[IT] = 0), DB.push(BB), mB(TB))
          },
          zB = (BB, dB, VB, yB) => {
            let pB = sT,
              lB = FT,
              JB = wT,
              YB = TB;
            sT = MT, FT = 0, TB = 0, sT || (MT = sT = new NT(8192)), wT = sT.length - 10, MB(BB, dB, yB), MT = sT;
            let gB = FT;
            if (sT = pB, FT = lB, wT = JB, TB = YB, gB > 1) {
              let BB = FT + gB - 1;
              BB > wT && sB(BB);
              let dB = VB + TB;
              sT.copyWithin(dB + gB, dB + 1, FT), sT.set(MT.slice(0, gB), dB), FT = BB
            } else sT[VB + TB] = MT[0]
          },
          wB = BB => {
            let yB = UT(BB, sT, TB, FT, VB, sB, ((BB, TB, VB) => {
              if (VB) return dB = !0;
              FT = TB;
              let yB = sT;
              return mB(BB), EB(), yB !== sT ? {
                position: FT,
                targetView: zT,
                target: sT
              } : FT
            }), this);
            if (0 === yB) return fB(BB);
            FT = yB
          }
      }
      useBuffer(BB) {
        sT = BB, zT = sT.dataView || (sT.dataView = new DataView(sT.buffer, sT.byteOffset, sT.byteLength)), FT = 0
      }
      set position(BB) {
        FT = BB
      }
      get position() {
        return FT
      }
      set buffer(BB) {
        sT = BB
      }
      get buffer() {
        return sT
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function ST(BB, TB, dB, VB) {
      let yB = BB.byteLength;
      if (yB + 1 < 256) {
        var {
          target: pB,
          position: lB
        } = dB(4 + yB);
        pB[lB++] = 199, pB[lB++] = yB + 1
      } else if (yB + 1 < 65536) {
        var {
          target: pB,
          position: lB
        } = dB(5 + yB);
        pB[lB++] = 200, pB[lB++] = yB + 1 >> 8, pB[lB++] = yB + 1 & 255
      } else {
        var {
          target: pB,
          position: lB,
          targetView: JB
        } = dB(7 + yB);
        pB[lB++] = 201, JB.setUint32(lB, yB + 1), lB += 4
      }
      pB[lB++] = 116, pB[lB++] = TB, BB.buffer || (BB = new Uint8Array(BB)), pB.set(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength), lB)
    }

    function PT(BB, TB) {
      let dB = BB.byteLength;
      var VB, yB;
      if (dB < 256) {
        var {
          target: VB,
          position: yB
        } = TB(dB + 2);
        VB[yB++] = 196, VB[yB++] = dB
      } else if (dB < 65536) {
        var {
          target: VB,
          position: yB
        } = TB(dB + 3);
        VB[yB++] = 197, VB[yB++] = dB >> 8, VB[yB++] = 255 & dB
      } else {
        var {
          target: VB,
          position: yB,
          targetView: pB
        } = TB(dB + 5);
        VB[yB++] = 198, pB.setUint32(yB, dB), yB += 4
      }
      VB.set(BB, yB)
    }

    function QT(BB, TB, dB, VB) {
      let yB = BB.length;
      switch (yB) {
        case 1:
          TB[dB++] = 212;
          break;
        case 2:
          TB[dB++] = 213;
          break;
        case 4:
          TB[dB++] = 214;
          break;
        case 8:
          TB[dB++] = 215;
          break;
        case 16:
          TB[dB++] = 216;
          break;
        default:
          yB < 256 ? (TB[dB++] = 199, TB[dB++] = yB) : yB < 65536 ? (TB[dB++] = 200, TB[dB++] = yB >> 8, TB[dB++] = 255 & yB) : (TB[dB++] = 201, TB[dB++] = yB >> 24, TB[dB++] = yB >> 16 & 255, TB[dB++] = yB >> 8 & 255, TB[dB++] = 255 & yB)
      }
      return TB[dB++] = VB, TB.set(BB, dB), dB += yB
    }

    function RT(BB, TB, dB) {
      if (KT.length > 0) {
        zT.setUint32(KT.position + BB, FT + dB - KT.position - BB), KT.stringsPosition = FT - BB;
        let VB = KT;
        KT = null, TB(VB[0]), TB(VB[1])
      }
    }

    function aT(BB) {
      if (BB.Class) {
        if (!BB.pack && !BB.write) throw new Error("Extension has no pack or write function");
        if (BB.pack && !BB.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        HT.unshift(BB.Class), uT.unshift(BB)
      }! function(BB) {
        BB.unpack ? vB[BB.type] = BB.unpack : vB[BB.type] = BB
      }(BB)
    }

    function ZT(BB, TB) {
      return BB.isCompatible = BB => {
        let dB = !BB || (TB.lastNamedStructuresLength || 0) === BB.length;
        return dB || TB._mergeStructures(BB), dB
      }, BB
    }
    HT = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, iB], uT = [{
      pack(BB, TB, dB) {
        let VB = BB.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === BB.getMilliseconds()) && VB >= 0 && VB < 4294967296) {
          let {
            target: BB,
            targetView: dB,
            position: yB
          } = TB(6);
          BB[yB++] = 214, BB[yB++] = 255, dB.setUint32(yB, VB)
        } else if (VB > 0 && VB < 4294967296) {
          let {
            target: dB,
            targetView: yB,
            position: pB
          } = TB(10);
          dB[pB++] = 215, dB[pB++] = 255, yB.setUint32(pB, 4e6 * BB.getMilliseconds() + (VB / 1e3 / 4294967296 | 0)), yB.setUint32(pB + 4, VB)
        } else if (isNaN(VB)) {
          if (this.onInvalidDate) return TB(0), dB(this.onInvalidDate());
          let {
            target: BB,
            targetView: VB,
            position: yB
          } = TB(3);
          BB[yB++] = 212, BB[yB++] = 255, BB[yB++] = 255
        } else {
          let {
            target: dB,
            targetView: yB,
            position: pB
          } = TB(15);
          dB[pB++] = 199, dB[pB++] = 12, dB[pB++] = 255, yB.setUint32(pB, 1e6 * BB.getMilliseconds()), yB.setBigInt64(pB + 4, BigInt(Math.floor(VB)))
        }
      }
    }, {
      pack(BB, TB, dB) {
        if (this.setAsEmptyObject) return TB(0), dB({});
        let VB = Array.from(BB),
          {
            target: yB,
            position: pB
          } = TB(this.moreTypes ? 3 : 0);
        this.moreTypes && (yB[pB++] = 212, yB[pB++] = 115, yB[pB++] = 0), dB(VB)
      }
    }, {
      pack(BB, TB, dB) {
        let {
          target: VB,
          position: yB
        } = TB(this.moreTypes ? 3 : 0);
        this.moreTypes && (VB[yB++] = 212, VB[yB++] = 101, VB[yB++] = 0), dB([BB.name, BB.message, BB.cause])
      }
    }, {
      pack(BB, TB, dB) {
        let {
          target: VB,
          position: yB
        } = TB(this.moreTypes ? 3 : 0);
        this.moreTypes && (VB[yB++] = 212, VB[yB++] = 120, VB[yB++] = 0), dB([BB.source, BB.flags])
      }
    }, {
      pack(BB, TB) {
        this.moreTypes ? ST(BB, 16, TB) : PT(iT ? Buffer.from(BB) : new Uint8Array(BB), TB)
      }
    }, {
      pack(BB, TB) {
        let dB = BB.constructor;
        dB !== tT && this.moreTypes ? ST(BB, dT.indexOf(dB.name), TB) : PT(BB, TB)
      }
    }, {
      pack(BB, TB) {
        let {
          target: dB,
          position: VB
        } = TB(1);
        dB[VB] = 193
      }
    }];
    let XT = new cT({
      useRecords: !1
    });
    const WT = XT.pack,
      hT = XT.pack,
      CT = cT,
      {
        NEVER: GT,
        ALWAYS: qT,
        DECIMAL_ROUND: xT,
        DECIMAL_FIT: jT
      } = OT,
      AT = 512,
      bT = 1024,
      nT = 2048;
    const eT = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!BB || "object" !== typeof BB) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const dB = new wB(TB);
        let VB;
        const yB = BB => {
          let TB;
          VB && (BB = Buffer.concat([VB, BB]), VB = void 0);
          try {
            TB = dB.unpackMultiple(BB)
          } catch (yB) {
            if (!yB.incomplete) throw yB;
            VB = BB.slice(yB.lastPosition), TB = yB.values
          }
          return TB
        };
        return "function" === typeof BB[Symbol.iterator] ? function*() {
          for (const TB of BB) yield* yB(TB)
        }() : "function" === typeof BB[Symbol.asyncIterator] ? async function*() {
          for await (const TB of BB) yield* yB(TB)
        }(): void 0
      },
      Bd = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (BB && "object" === typeof BB) {
          if ("function" === typeof BB[Symbol.iterator]) return function*(BB, TB) {
            const dB = new cT(TB);
            for (const VB of BB) yield dB.pack(VB)
          }(BB, TB);
          if ("function" === typeof BB.then || "function" === typeof BB[Symbol.asyncIterator]) return async function*(BB, TB) {
            const dB = new cT(TB);
            for await (const VB of BB) yield dB.pack(VB)
          }(BB, TB);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Td = !1,
      dd = !0
  },
  8409: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      $changes: () => uB,
      $childType: () => HB,
      $decoder: () => oB,
      $deleteByIndex: () => OB,
      $encoder: () => gB,
      $filter: () => kB,
      $getByIndex: () => LB,
      $numFields: () => zB,
      $refId: () => JB,
      $track: () => YB,
      $values: () => NB,
      ArraySchema: () => VV,
      Callbacks: () => Vy,
      ChangeTree: () => Kd,
      CollectionSchema: () => lV,
      Decoder: () => jV,
      Encoder: () => CV,
      FieldBuilder: () => gV,
      MapSchema: () => pV,
      Metadata: () => xT,
      OPERATION: () => yB,
      Reflection: () => eV,
      ReflectionField: () => bV,
      ReflectionType: () => nV,
      Root: () => rV,
      Schema: () => FV,
      SetSchema: () => JV,
      StateCallbackStrategy: () => dy,
      StateView: () => QV,
      StreamSchema: () => YV,
      TypeContext: () => ZT,
      createPool: () => py,
      decode: () => mT,
      decodeKeyValueOperation: () => bd,
      decodeSchemaOperation: () => Ad,
      defineCustomTypes: () => fT,
      defineTypes: () => zV,
      deprecated: () => sV,
      dumpChanges: () => UV,
      encode: () => TT,
      encodeArray: () => ad,
      encodeIndexedEntry: () => Qd,
      encodeKeyValueOperation: () => Rd,
      encodeMapEntry: () => Pd,
      encodeSchemaOperation: () => Sd,
      DD: () => HV,
      fullStateOnly: () => iV,
      getDecoderStateCallbacks: () => By,
      getEncodeDescriptor: () => Bd,
      getRawChangesCallback: () => Ty,
      isBuilder: () => oV,
      patchOnly: () => mV,
      registerType: () => tT,
      schema: () => wV,
      t: () => DV,
      type: () => NV,
      unreliable: () => vV,
      view: () => EV
    });
    const VB = 255;
    var yB;

    function pB(BB) {
      Object.defineProperty(BB, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(BB) {
      BB[BB.ADD = 128] = "ADD", BB[BB.REPLACE = 0] = "REPLACE", BB[BB.DELETE = 64] = "DELETE", BB[BB.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", BB[BB.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", BB[BB.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", BB[BB.CLEAR = 10] = "CLEAR", BB[BB.REVERSE = 15] = "REVERSE", BB[BB.MOVE = 32] = "MOVE", BB[BB.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", BB[BB.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(yB || (yB = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const lB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const BB = "colyseus.symbolRegistry",
        TB = lB[BB] || (lB[BB] = Object.create(null));
      Symbol.for = function(BB) {
        return TB[BB] || (TB[BB] = Symbol(BB))
      }, Symbol.keyFor = function(BB) {
        for (const dB in TB)
          if (TB[dB] === BB) return dB
      }
    }
    const JB = Symbol.for("$refId"),
      YB = "~track",
      gB = "~encoder",
      oB = "~decoder",
      kB = "~filter",
      LB = "~getByIndex",
      OB = "~deleteByIndex",
      DB = "~resyncPrune",
      uB = Symbol.for("$changes"),
      HB = Symbol.for("$childType"),
      EB = Symbol.for("$proxyTarget"),
      vB = "~onEncodeEnd",
      mB = "~reset",
      iB = "~onDecodeEnd",
      NB = Symbol.for("$values"),
      tB = "~builder",
      fB = "~descriptors",
      sB = "~__encodeDescriptor",
      MB = "~encoders",
      zB = "~__numFields",
      wB = "~__refTypeFieldIndexes",
      UB = "~__viewFieldIndexes",
      FB = "$__fieldIndexesByViewTag",
      KB = "~__unreliableFieldIndexes",
      rB = "~__patchOnlyFieldIndexes",
      IB = "~__fullSyncSkipIndexes",
      cB = "~__fullStateOnlyFieldIndexes",
      SB = "~__streamFieldIndexes",
      PB = "~__streamPriorities";
    let QB;
    try {
      QB = new TextEncoder
    } catch (ly) {}
    const RB = new ArrayBuffer(8),
      aB = new Int32Array(RB),
      ZB = new Float32Array(RB),
      XB = new Float64Array(RB),
      WB = new BigInt64Array(RB),
      hB = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(BB, TB) {
        for (var dB = 0, VB = 0, yB = 0, pB = BB.length; yB < pB; yB++)(dB = BB.charCodeAt(yB)) < 128 ? VB += 1 : dB < 2048 ? VB += 2 : dB < 55296 || dB >= 57344 ? VB += 3 : (yB++, VB += 4);
        return VB
      };

    function CB(BB, TB, dB) {
      for (var VB = 0, yB = 0, pB = TB.length; yB < pB; yB++)(VB = TB.charCodeAt(yB)) < 128 ? BB[dB.offset++] = VB : VB < 2048 ? (BB[dB.offset] = 192 | VB >> 6, BB[dB.offset + 1] = 128 | 63 & VB, dB.offset += 2) : VB < 55296 || VB >= 57344 ? (BB[dB.offset] = 224 | VB >> 12, BB[dB.offset + 1] = 128 | VB >> 6 & 63, BB[dB.offset + 2] = 128 | 63 & VB, dB.offset += 3) : (yB++, VB = 65536 + ((1023 & VB) << 10 | 1023 & TB.charCodeAt(yB)), BB[dB.offset] = 240 | VB >> 18, BB[dB.offset + 1] = 128 | VB >> 12 & 63, BB[dB.offset + 2] = 128 | VB >> 6 & 63, BB[dB.offset + 3] = 128 | 63 & VB, dB.offset += 4)
    }

    function GB(BB, TB, dB) {
      BB[dB.offset++] = 255 & TB
    }

    function qB(BB, TB, dB) {
      BB[dB.offset++] = 255 & TB, BB[dB.offset++] = TB >> 8 & 255
    }

    function xB(BB, TB, dB) {
      BB[dB.offset++] = 255 & TB, BB[dB.offset++] = TB >> 8 & 255
    }

    function jB(BB, TB, dB) {
      BB[dB.offset++] = 255 & TB, BB[dB.offset++] = TB >> 8 & 255, BB[dB.offset++] = TB >> 16 & 255, BB[dB.offset++] = TB >> 24 & 255
    }

    function AB(BB, TB, dB) {
      const VB = TB >> 24,
        yB = TB >> 16,
        pB = TB >> 8,
        lB = TB;
      BB[dB.offset++] = 255 & lB, BB[dB.offset++] = 255 & pB, BB[dB.offset++] = 255 & yB, BB[dB.offset++] = 255 & VB
    }

    function bB(BB, TB, dB) {
      const VB = Math.floor(TB / Math.pow(2, 32));
      AB(BB, TB >>> 0, dB), AB(BB, VB, dB)
    }

    function nB(BB, TB, dB) {
      const VB = TB / Math.pow(2, 32) | 0;
      AB(BB, TB >>> 0, dB), AB(BB, VB, dB)
    }

    function eB(BB, TB, dB) {
      ZB[0] = TB, jB(BB, aB[0], dB)
    }

    function BT(BB, TB, dB) {
      XB[0] = TB, jB(BB, aB[0], dB), jB(BB, aB[1], dB)
    }
    const TT = {
        int8: GB,
        uint8: function(BB, TB, dB) {
          BB[dB.offset++] = 255 & TB
        },
        int16: qB,
        uint16: xB,
        int32: jB,
        uint32: AB,
        int64: bB,
        uint64: nB,
        bigint64: function(BB, TB, dB) {
          WB[0] = BigInt.asIntN(64, TB), jB(BB, aB[0], dB), jB(BB, aB[1], dB)
        },
        biguint64: function(BB, TB, dB) {
          WB[0] = BigInt.asIntN(64, TB), jB(BB, aB[0], dB), jB(BB, aB[1], dB)
        },
        float32: eB,
        float64: BT,
        boolean: function(BB, TB, dB) {
          BB[dB.offset++] = TB ? 1 : 0
        },
        string: function(BB, TB, dB) {
          TB || (TB = "");
          let VB = hB(TB, "utf8"),
            yB = 0;
          if (VB < 32) BB[dB.offset++] = 160 | VB, yB = 1;
          else if (VB < 256) BB[dB.offset++] = 217, BB[dB.offset++] = VB, yB = 2;
          else if (VB < 65536) BB[dB.offset++] = 218, xB(BB, VB, dB), yB = 3;
          else {
            if (!(VB < 4294967296)) throw new Error("String too long");
            BB[dB.offset++] = 219, AB(BB, VB, dB), yB = 5
          }
          return CB(BB, TB, dB), yB + VB
        },
        number: function BB(TB, dB, VB) {
          return isNaN(dB) ? BB(TB, 0, VB) : isFinite(dB) ? dB !== (0 | dB) ? Math.abs(dB) <= 34028235e31 && (ZB[0] = dB, Math.abs(Math.abs(ZB[0]) - Math.abs(dB)) < 1e-4) ? (TB[VB.offset++] = 202, eB(TB, dB, VB), 5) : (TB[VB.offset++] = 203, BT(TB, dB, VB), 9) : dB >= 0 ? dB < 128 ? (TB[VB.offset++] = 255 & dB, 1) : dB < 256 ? (TB[VB.offset++] = 204, TB[VB.offset++] = 255 & dB, 2) : dB < 65536 ? (TB[VB.offset++] = 205, xB(TB, dB, VB), 3) : dB < 4294967296 ? (TB[VB.offset++] = 206, AB(TB, dB, VB), 5) : (TB[VB.offset++] = 207, nB(TB, dB, VB), 9) : dB >= -32 ? (TB[VB.offset++] = 224 | dB + 32, 1) : dB >= -128 ? (TB[VB.offset++] = 208, GB(TB, dB, VB), 2) : dB >= -32768 ? (TB[VB.offset++] = 209, qB(TB, dB, VB), 3) : dB >= -2147483648 ? (TB[VB.offset++] = 210, jB(TB, dB, VB), 5) : (TB[VB.offset++] = 211, bB(TB, dB, VB), 9) : BB(TB, dB > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, VB)
        },
        utf8Write: CB,
        utf8Length: hB
      },
      dT = new ArrayBuffer(8),
      VT = new Int32Array(dT),
      yT = new Float32Array(dT),
      pT = new Float64Array(dT),
      lT = new BigUint64Array(dT),
      JT = new BigInt64Array(dT);

    function YT(BB, TB, dB) {
      dB > BB.length - TB.offset && (dB = BB.length - TB.offset);
      for (var VB = "", yB = 0, pB = TB.offset, lB = TB.offset + dB; pB < lB; pB++) {
        var JB = BB[pB];
        if (0 !== (128 & JB))
          if (192 !== (224 & JB))
            if (224 !== (240 & JB)) {
              if (240 !== (248 & JB)) {
                console.error("decode.utf8Read(): Invalid byte " + JB + " at offset " + pB + ". Skip to end of string: " + (TB.offset + dB));
                break
              }(yB = (7 & JB) << 18 | (63 & BB[++pB]) << 12 | (63 & BB[++pB]) << 6 | 63 & BB[++pB]) >= 65536 ? (yB -= 65536, VB += String.fromCharCode(55296 + (yB >>> 10), 56320 + (1023 & yB))) : VB += String.fromCharCode(yB)
            } else VB += String.fromCharCode((15 & JB) << 12 | (63 & BB[++pB]) << 6 | 63 & BB[++pB]);
        else VB += String.fromCharCode((31 & JB) << 6 | 63 & BB[++pB]);
        else VB += String.fromCharCode(JB)
      }
      return TB.offset += dB, VB
    }

    function gT(BB, TB) {
      return oT(BB, TB) << 24 >> 24
    }

    function oT(BB, TB) {
      return BB[TB.offset++]
    }

    function kT(BB, TB) {
      return LT(BB, TB) << 16 >> 16
    }

    function LT(BB, TB) {
      return BB[TB.offset++] | BB[TB.offset++] << 8
    }

    function OT(BB, TB) {
      return BB[TB.offset++] | BB[TB.offset++] << 8 | BB[TB.offset++] << 16 | BB[TB.offset++] << 24
    }

    function DT(BB, TB) {
      return OT(BB, TB) >>> 0
    }

    function uT(BB, TB) {
      return VT[0] = OT(BB, TB), yT[0]
    }

    function HT(BB, TB) {
      return VT[0] = OT(BB, TB), VT[1] = OT(BB, TB), pT[0]
    }

    function ET(BB, TB) {
      const dB = DT(BB, TB);
      return OT(BB, TB) * Math.pow(2, 32) + dB
    }

    function vT(BB, TB) {
      const dB = DT(BB, TB);
      return DT(BB, TB) * Math.pow(2, 32) + dB
    }
    const mT = {
        utf8Read: YT,
        int8: gT,
        uint8: oT,
        int16: kT,
        uint16: LT,
        int32: OT,
        uint32: DT,
        float32: uT,
        float64: HT,
        int64: ET,
        uint64: vT,
        bigint64: function(BB, TB) {
          return VT[0] = OT(BB, TB), VT[1] = OT(BB, TB), JT[0]
        },
        biguint64: function(BB, TB) {
          return VT[0] = OT(BB, TB), VT[1] = OT(BB, TB), lT[0]
        },
        boolean: function(BB, TB) {
          return oT(BB, TB) > 0
        },
        string: function(BB, TB) {
          const dB = BB[TB.offset++];
          let VB;
          return dB < 192 ? VB = 31 & dB : 217 === dB ? VB = oT(BB, TB) : 218 === dB ? VB = LT(BB, TB) : 219 === dB && (VB = DT(BB, TB)), YT(BB, TB, VB)
        },
        number: function(BB, TB) {
          const dB = BB[TB.offset++];
          return dB < 128 ? dB : 202 === dB ? uT(BB, TB) : 203 === dB ? HT(BB, TB) : 204 === dB ? oT(BB, TB) : 205 === dB ? LT(BB, TB) : 206 === dB ? DT(BB, TB) : 207 === dB ? vT(BB, TB) : 208 === dB ? gT(BB, TB) : 209 === dB ? kT(BB, TB) : 210 === dB ? OT(BB, TB) : 211 === dB ? ET(BB, TB) : dB > 223 ? -1 * (255 - dB + 1) : void 0
        },
        stringCheck: function(BB, TB) {
          const dB = BB[TB.offset];
          return dB < 192 && dB > 160 || 217 === dB || 218 === dB || 219 === dB
        }
      },
      iT = {},
      NT = new Map;

    function tT(BB, TB) {
      TB.constructor && (Object.prototype.hasOwnProperty.call(TB, "constructor") && null == TB.constructor[Symbol.metadata] && pB(TB.constructor), NT.set(TB.constructor, BB), iT[BB] = TB), TB.encode && (TT[BB] = TB.encode), TB.decode && (mT[BB] = TB.decode)
    }

    function fT(BB) {
      for (const TB in BB) tT(TB, BB[TB]);
      return BB => NV(BB)
    }
    const sT = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function MT() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function zT(BB) {
      return BB._stream ??= MT()
    }

    function wT(BB, TB, dB) {
      0 === TB.activeViews.size && zT(BB).broadcastPending.add(dB)
    }

    function UT(BB, TB, dB, VB) {
      const pB = BB._stream;
      if (void 0 === pB) return !0;
      let lB = !1;
      return pB.broadcastPending.delete(VB) ? lB = !0 : pB.sentBroadcast.delete(VB) && pB.broadcastDeletes.add(VB), TB.forEachActiveView((BB => {
        const TB = pB.pendingByView.get(BB.id);
        if (TB?.has(VB)) return TB.delete(VB), void(lB = !0);
        const JB = pB.sentByView.get(BB.id);
        if (JB?.has(VB)) {
          JB.delete(VB);
          let TB = BB.changes.get(dB);
          void 0 === TB && (TB = new Map, BB.changes.set(dB, TB)), TB.set(VB, yB.DELETE)
        }
      })), lB
    }

    function FT(BB, TB) {
      const dB = BB._stream?.pendingByView;
      if (void 0 === dB) return !1;
      for (const [VB, yB] of dB)
        if (yB.size > 0 && void 0 !== TB.activeViews.get(VB)?.deref()) return !0;
      return !1
    }

    function KT(BB) {
      const TB = BB._stream;
      return void 0 !== TB && (TB.broadcastPending.size > 0 || TB.broadcastDeletes.size > 0)
    }

    function rT(BB, TB, dB) {
      const VB = zT(BB);
      let yB = VB.pendingByView.get(TB);
      void 0 === yB && (yB = new Set, VB.pendingByView.set(TB, yB)), yB.add(dB)
    }

    function IT(BB, TB) {
      const dB = BB._stream;
      void 0 !== dB && (dB.pendingByView.delete(TB), dB.sentByView.delete(TB), dB.priorityByView?.delete(TB))
    }
    const cT = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function ST(BB) {
      if (null == BB || "object" !== typeof BB) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: TB,
        max: dB
      } = BB;
      if ("number" !== typeof TB || "number" !== typeof dB || !(dB > TB) || !Number.isFinite(TB) || !Number.isFinite(dB)) throw new Error(`t.quantized(): require finite min < max (got min=${TB}, max=${dB}).`);
      const VB = BB.bits ?? 16;
      if (8 !== VB && 16 !== VB && 32 !== VB) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${VB}).`);
      const yB = BB.mode ?? "clamp";
      if ("clamp" !== yB && "wrap" !== yB) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(yB)}).`);
      const pB = "wrap" === yB,
        lB = Math.pow(2, VB);
      return {
        min: TB,
        max: dB,
        bits: VB,
        wrap: pB,
        wire: cT[VB],
        range: dB - TB,
        span: pB ? lB : TB === -dB ? lB - 2 : lB - 1
      }
    }

    function PT(BB) {
      return null !== BB && "object" === typeof BB && void 0 !== BB.quantized
    }

    function QT(BB, TB) {
      if (BB.wrap) {
        if (!Number.isFinite(TB)) return 0;
        const dB = BB.range;
        let VB = (TB - BB.min) % dB;
        VB < 0 && (VB += dB);
        const yB = BB.span;
        return Math.floor(VB / dB * yB + .5) % yB
      }
      if (TB !== TB) return 0;
      const dB = TB < BB.min ? BB.min : TB > BB.max ? BB.max : TB;
      return Math.floor((dB - BB.min) / BB.range * BB.span + .5)
    }

    function RT(BB, TB) {
      return BB.min + TB / BB.span * BB.range
    }

    function aT(BB) {
      const TB = TT[BB.wire];
      return (dB, VB, yB) => TB(dB, QT(BB, VB), yB)
    }
    class ZT {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(BB) {
        const TB = Object.getPrototypeOf(BB);
        if (TB !== FV) {
          let dB = ZT.inheritedTypes.get(TB);
          dB || (dB = new Set, ZT.inheritedTypes.set(TB, dB)), dB.add(BB)
        }
      }
      static cache(BB) {
        let TB = ZT.cachedContexts.get(BB);
        return TB || (TB = new ZT(BB), ZT.cachedContexts.set(BB, TB)), TB
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
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(BB) && (this.types[TB] = BB, null == BB[Symbol.metadata] && xT.initialize(BB), this.schemas.set(BB, TB), !0)
      }
      getTypeId(BB) {
        return this.schemas.get(BB)
      }
      discoverTypes(BB) {
        if (!this.add(BB)) return;
        ZT.inheritedTypes.get(BB)?.forEach((BB => {
          this.discoverTypes(BB)
        }));
        let TB = BB;
        for (;
          (TB = Object.getPrototypeOf(TB)) && TB !== FV && TB !== Function.prototype;) this.discoverTypes(TB);
        const dB = BB[Symbol.metadata];
        (dB[UB] || dB[SB]) && (this.hasFilters = !0);
        for (const VB in dB) {
          const BB = dB[VB].type;
          if ("string" !== typeof BB && !PT(BB))
            if ("function" === typeof BB) this.discoverTypes(BB);
            else {
              const TB = Object.values(BB)[0];
              if ("string" === typeof TB) continue;
              this.discoverTypes(TB)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function XT(BB) {
      const TB = hT(BB);
      return TB ? {
        complexTypeKlass: iT[TB],
        childType: BB[TB]
      } : {
        complexTypeKlass: !1,
        childType: BB
      }
    }

    function WT(BB, TB) {
      const dB = CT(BB),
        VB = hT(dB),
        yB = VB && hT(dB[VB]);
      if (yB) throw new Error(`${TB?`${TB}: `:""}@colyseus/schema: nested collections are not supported ("${VB}" of "${yB}"). Collections can only hold primitive types or Schema classes, wrap the inner ${yB} in a Schema class.`);
      return dB
    }

    function hT(BB) {
      return "object" === typeof BB && null !== BB ? Object.keys(BB).find((BB => void 0 !== iT[BB])) : void 0
    }

    function CT(BB) {
      if ("object" !== typeof BB || null === BB) return BB;
      if (Array.isArray(BB)) return {
        array: CT(BB[0])
      };
      const TB = function(BB) {
        const TB = Object.keys(BB),
          dB = TB.filter((BB => /\d+/.test(BB)));
        if (dB.length > 0 && dB.length === TB.length / 2 && BB[BB[dB[0]]] == dB[0]) return "number";
        if (TB.length > 0 && TB.every((TB => BB[TB] === TB))) return "string"
      }(BB);
      if (TB) return TB;
      if (PT(BB)) return "string" === typeof BB.quantized.wire ? BB : {
        quantized: ST(BB.quantized)
      };
      if (void 0 !== BB.type) return CT(BB.type);
      const dB = hT(BB);
      return dB && (BB[dB] = CT(BB[dB])), BB
    }
    const GT = [wB, KB, rB, IB, cB, SB, MB];

    function qT(BB, TB, dB) {
      BB[TB] || Object.defineProperty(BB, TB, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), BB[TB].push(dB)
    }
    const xT = {
        addField(BB, TB, dB, VB, yB) {
          if (TB >= 63) throw new Error(`Can't define field '${dB}'.\nSchema instances may only have up to 63 fields.`);
          BB[TB] = Object.assign(BB[TB] || {}, {
            type: VB,
            index: TB,
            name: dB
          }), Object.defineProperty(BB, fB, {
            value: BB[fB] || {},
            enumerable: !1,
            configurable: !0
          }), BB[fB][dB] = yB || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(BB, zB, {
            value: TB,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(BB, dB, {
            value: TB,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof BB[TB].type || PT(BB[TB].type) || (void 0 === BB[wB] && Object.defineProperty(BB, wB, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), BB[wB].push(TB));
          const pB = BB[TB].type;
          if (pB && "object" === typeof pB && void 0 !== pB.stream) {
            if (void 0 !== pB.array) throw new Error(sT);
            BB[TB].stream = !0, BB[SB] || Object.defineProperty(BB, SB, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), BB[SB].includes(TB) || BB[SB].push(TB);
            const yB = VB?.priority;
            "function" === typeof yB && xT.setStreamPriority(BB, dB, yB)
          }
        },
        setTag(BB, TB, dB) {
          const VB = BB[TB];
          if (BB[VB].tag = dB, BB[UB] || (Object.defineProperty(BB, UB, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(BB, FB, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), BB[UB].push(VB), dB < 0) BB[FB][dB] || (BB[FB][dB] = []), BB[FB][dB].push(VB);
          else
            for (let yB = dB; yB > 0; yB &= yB - 1) {
              const TB = yB & -yB;
              BB[FB][TB] || (BB[FB][TB] = []), BB[FB][TB].push(VB)
            }
        },
        setUnreliable(BB, TB) {
          const dB = BB[TB];
          if ("string" !== typeof BB[dB].type) throw new Error(`@unreliable cannot be applied to ref-type field "${TB}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          BB[dB].unreliable = !0, BB[KB] || Object.defineProperty(BB, KB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[KB].push(dB)
        },
        setPatchOnly(BB, TB) {
          const dB = BB[TB];
          if (BB[dB].fullStateOnly) throw new Error(`field "${TB}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          BB[dB].patchOnly = !0, qT(BB, rB, dB), qT(BB, IB, dB)
        },
        setDeprecated(BB, TB) {
          const dB = BB[TB];
          BB[dB].deprecated = !0, qT(BB, IB, dB), Object.defineProperty(BB, dB, {
            value: BB[dB],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(BB, TB) {
          const dB = BB[TB];
          if (BB[dB].patchOnly) throw new Error(`field "${TB}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          BB[dB].fullStateOnly = !0, qT(BB, cB, dB)
        },
        setStream(BB, TB) {
          const dB = BB[TB];
          BB[dB].stream = !0, BB[SB] || Object.defineProperty(BB, SB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[SB].push(dB)
        },
        setStreamPriority(BB, TB, dB) {
          const VB = BB[TB];
          BB[PB] || Object.defineProperty(BB, PB, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[PB][VB] = dB
        },
        getStreamPriority: (BB, TB) => BB?.[PB]?.[TB],
        defineField(BB, TB, dB, VB, yB) {
          const pB = WT(yB, `${BB.name}.${VB}`),
            {
              complexTypeKlass: lB,
              childType: JB
            } = XT(pB);
          xT.addField(TB, dB, VB, pB, fV(VB, dB, JB, lB)), TB[fB][VB] && Object.defineProperty(BB.prototype, VB, TB[fB][VB]), ("string" === typeof pB || PT(pB)) && (TB[MB] || Object.defineProperty(TB, MB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), TB[MB][dB] = "string" === typeof pB ? TT[pB] : aT(pB.quantized))
        },
        setFields(BB, TB) {
          const dB = BB.prototype.constructor;
          ZT.register(dB);
          const VB = Object.getPrototypeOf(dB),
            yB = VB && VB[Symbol.metadata],
            pB = xT.initialize(dB);
          dB[YB] || (dB[YB] = FV[YB]), dB[gB] || (dB[gB] = FV[gB]), dB[oB] || (dB[oB] = FV[oB]), dB.prototype.toJSON || (dB.prototype.toJSON = FV.prototype.toJSON);
          let lB = pB[zB] ?? (yB && yB[zB]) ?? -1;
          lB++, pB[MB] || Object.defineProperty(pB, MB, {
            value: yB?.[MB] ? [...yB[MB]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const JB in TB) {
            if (void 0 !== pB[JB]) throw new Error(`@colyseus/schema: Duplicate '${JB}' definition on '${dB.name||"(anonymous)"}'.`);
            xT.defineField(dB, pB, lB, JB, TB[JB]), lB++
          }
          return BB
        },
        isDeprecated: (BB, TB) => !0 === BB[TB].deprecated,
        initialize(BB) {
          const TB = Object.getPrototypeOf(BB),
            dB = TB[Symbol.metadata];
          let VB = BB[Symbol.metadata] ?? Object.create(null);
          if (TB !== FV && VB === dB && (VB = Object.create(null), dB)) {
            Object.setPrototypeOf(VB, dB), Object.defineProperty(VB, zB, {
              value: dB[zB],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== dB[UB] && (Object.defineProperty(VB, UB, {
              value: [...dB[UB]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(VB, FB, {
              value: {
                ...dB[FB]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const BB of GT) {
              const TB = dB[BB];
              void 0 !== TB && Object.defineProperty(VB, BB, {
                value: [...TB],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(VB, fB, {
              value: {
                ...dB[fB]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(BB, Symbol.metadata, {
            value: VB,
            writable: !1,
            configurable: !0
          }), VB
        },
        isValidInstance: BB => BB.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(BB.constructor[Symbol.metadata], zB),
        getFields(BB) {
          const TB = BB[Symbol.metadata],
            dB = {};
          for (let VB = 0; VB <= TB[zB]; VB++) dB[TB[VB].name] = TB[VB].type;
          return dB
        },
        hasViewTagAtIndex: (BB, TB) => BB?.[UB]?.includes(TB),
        hasUnreliableAtIndex: (BB, TB) => BB?.[KB]?.includes(TB),
        hasPatchOnlyAtIndex: (BB, TB) => BB?.[rB]?.includes(TB),
        hasFullStateOnlyAtIndex: (BB, TB) => BB?.[cB]?.includes(TB),
        hasStreamAtIndex: (BB, TB) => BB?.[SB]?.includes(TB)
      },
      jT = (BB, TB, dB) => BB(TB, dB);
    class AT {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(BB) {
        this.ops = new Uint8Array(Math.max(BB + 1, 1))
      }
      record(BB, TB) {
        const dB = this.ops[BB];
        0 === dB ? this.ops[BB] = TB : (dB === yB.DELETE || dB === yB.ADD && TB === yB.DELETE_AND_ADD) && (this.ops[BB] = yB.DELETE_AND_ADD), BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      recordDelete(BB, TB) {
        this.ops[BB] = TB, BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      recordRaw(BB, TB) {
        this.record(BB, TB)
      }
      operationAt(BB) {
        const TB = this.ops[BB];
        return 0 === TB ? void 0 : TB
      }
      setOperationAt(BB, TB) {
        this.ops[BB] = TB
      }
      forEach(BB) {
        this.forEachWithCtx(BB, jT)
      }
      forEachWithCtx(BB, TB) {
        let dB = this.dirtyLow,
          VB = this.dirtyHigh;
        const yB = this.ops;
        for (; 0 !== dB;) {
          const VB = dB & -dB,
            pB = 31 - Math.clz32(VB);
          dB ^= VB, TB(BB, pB, yB[pB])
        }
        for (; 0 !== VB;) {
          const dB = VB & -VB,
            pB = 31 - Math.clz32(dB) + 32;
          VB ^= dB, TB(BB, pB, yB[pB])
        }
      }
      size() {
        return nT(this.dirtyLow) + nT(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class bT {
      hD = new Map;
      pureOps = [];
      record(BB, TB) {
        const dB = this.hD.get(BB);
        void 0 === dB ? this.hD.set(BB, TB) : (dB === yB.DELETE || dB === yB.ADD && TB === yB.DELETE_AND_ADD) && this.hD.set(BB, yB.DELETE_AND_ADD)
      }
      recordDelete(BB, TB) {
        this.hD.set(BB, TB)
      }
      recordRaw(BB, TB) {
        this.hD.set(BB, TB)
      }
      recordPure(BB) {
        this.pureOps.push([this.hD.size, BB])
      }
      operationAt(BB) {
        return this.hD.get(BB)
      }
      setOperationAt(BB, TB) {
        this.hD.has(BB) && this.hD.set(BB, TB)
      }
      forEach(BB) {
        this.forEachWithCtx(BB, jT)
      }
      forEachWithCtx(BB, TB) {
        const dB = this.pureOps;
        if (dB.length > 0) {
          let VB = 0,
            yB = 0;
          for (const [pB, lB] of this.hD) {
            for (; VB < dB.length && dB[VB][0] <= yB;) {
              const yB = dB[VB++][1];
              TB(BB, -yB, yB)
            }
            TB(BB, pB, lB), yB++
          }
          for (; VB < dB.length;) {
            const yB = dB[VB++][1];
            TB(BB, -yB, yB)
          }
        } else
          for (const [VB, yB] of this.hD) TB(BB, VB, yB)
      }
      size() {
        return this.hD.size + this.pureOps.length
      }
      has() {
        return this.hD.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.hD.clear(), this.pureOps.length = 0
      }
      shift(BB) {
        const TB = new Map;
        for (const [dB, VB] of this.hD) TB.set(dB + BB, VB);
        this.hD = TB
      }
    }

    function nT(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }

    function eT(BB) {
      if (void 0 === BB) return 0;
      let TB = 0;
      for (let dB = 0, VB = BB.length; dB < VB; dB++) {
        const VB = BB[dB];
        VB < 32 && (TB |= 1 << VB)
      }
      return TB
    }

    function Bd(BB) {
      const TB = BB.constructor;
      if (Object.prototype.hasOwnProperty.call(TB, sB)) return TB[sB];
      const dB = TB[Symbol.metadata],
        VB = xT.isValidInstance(BB),
        yB = (dB?.[UB]?.length ?? 0) > 0,
        pB = function(BB) {
          const TB = [],
            dB = [],
            VB = [],
            yB = [],
            pB = BB?.[zB];
          if (void 0 === pB) return {
            names: TB,
            types: dB,
            tags: VB,
            encoders: yB
          };
          const lB = BB[MB];
          for (let JB = 0; JB <= pB; JB++) {
            const pB = BB[JB];
            void 0 !== pB ? (TB[JB] = pB.name, dB[JB] = pB.type, VB[JB] = pB.tag, yB[JB] = lB?.[JB]) : (TB[JB] = void 0, dB[JB] = void 0, VB[JB] = void 0, yB[JB] = void 0)
          }
          return {
            names: TB,
            types: dB,
            tags: VB,
            encoders: yB
          }
        }(dB),
        lB = VB && !yB ? void 0 : TB[kB],
        JB = {
          encoder: TB[gB],
          filter: lB,
          metadata: dB,
          isSchema: VB,
          filterBitmask: VB ? eT(dB?.[UB]) : 0,
          hasAnyFullStateOnly: (dB?.[cB]?.length ?? 0) > 0,
          hasAnyUnreliable: (dB?.[KB]?.length ?? 0) > 0,
          hasAnyStream: (dB?.[SB]?.length ?? 0) > 0,
          hasAnyView: yB,
          fullStateOnlyBitmask: eT(dB?.[cB]),
          unreliableBitmask: eT(dB?.[KB]),
          streamBitmask: eT(dB?.[SB]),
          names: pB.names,
          types: pB.types,
          tags: pB.tags,
          encoders: pB.encoders
        };
      return Object.defineProperty(TB, sB, {
        value: JB,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), JB
    }

    function Td(BB, TB) {
      if (void 0 !== BB.parentRef && TB(BB.parentRef, BB._parentIndex)) return !0;
      for (let dB = BB.extraParents; void 0 !== dB; dB = dB.next)
        if (TB(dB.ref, dB.index)) return !0;
      return !1
    }
    const dd = (BB, TB) => {
        BB.isFieldUnreliable(TB) ? BB.ensureUnreliableRecorder().record(TB, yB.ADD) : BB.record(TB, yB.ADD)
      },
      Vd = (BB, TB) => BB(TB);

    function yd(BB, TB, dB) {
      const VB = BB.refTarget;
      if (void 0 !== VB[HB]) {
        if (BB.isPatchOnly) return;
        if (Array.isArray(VB.items)) {
          const BB = VB.items;
          for (let VB = 0, yB = BB.length; VB < yB; VB++) void 0 !== BB[VB] && dB(TB, VB)
        } else if (void 0 !== VB.journal)
          for (const [BB, yB] of VB.journal.keyByIndex) VB.$items.has(yB) && dB(TB, BB);
        else if (void 0 !== VB.$items)
          for (const BB of VB.$items.keys()) dB(TB, BB)
      } else {
        const yB = BB.metadata;
        if (!yB) return;
        const pB = yB[zB] ?? -1,
          lB = yB[IB],
          JB = BB.encDescriptor.names;
        for (let BB = 0; BB <= pB; BB++) {
          const yB = JB[BB];
          if (void 0 === yB) continue;
          if (lB && lB.includes(BB)) continue;
          const pB = VB[yB];
          void 0 !== pB && null !== pB && dB(TB, BB)
        }
      }
    }

    function pd(BB, TB, dB, VB) {
      ! function(BB, TB, dB) {
        if (!TB) return;
        const VB = TB[uB],
          yB = !VB._isSchema;
        let pB;
        yB ? (TB = VB.parent, dB = VB.parentIndex, pB = TB?.[uB].metadata) : pB = VB.metadata;
        const lB = (pB?.[rB]?.includes(dB) ? Md : 0) | (pB?.[cB]?.includes(dB) ? zd : 0),
          JB = VB.flags & Fd | lB,
          YB = BB.flags;
        BB.flags = YB | JB;
        JB & ~YB & zd && (BB.reset(), BB.unreliableRecorder?.reset());
        const gB = BB.root?.types;
        if (!gB?.hasFilters) return;
        const oB = pB?.[UB]?.includes(dB) ?? !1,
          kB = pB?.[SB]?.includes(dB) ?? !1,
          LB = VB.isFiltered || oB || kB;
        if (BB.isFiltered = LB, kB && !yB) {
          BB.isStreamCollection = !0;
          const TB = zT(BB.ref);
          if (void 0 === TB.priority) {
            const BB = xT.getStreamPriority(pB, dB);
            void 0 !== BB && (TB.priority = BB)
          }
          BB.root?.registerStream(BB.ref)
        }
        if (LB) {
          const TB = Jd(BB);
          BB.isVisibilitySharedWithParent = VB.isFiltered && TB && !kB && (!oB || yB && pB[dB].tag !== uV)
        }
      }(BB, TB, dB), BB.isFullStateOnly || (BB.has() && BB.root?.enqueueChangeTree(BB), BB.unreliableRecorder?.has() && BB.root?.enqueueUnreliable(BB), BB.has() || BB.unreliableRecorder?.has() || BB.root?.enqueueChangeTree(BB))
    }

    function ld(BB) {
      const TB = BB.pendingFilterRefresh;
      for (let dB = 0; dB < TB.length; dB++) {
        const BB = TB[dB];
        0 !== (BB.flags & Ud) && Yd(BB)
      }
      TB.length = 0
    }

    function Jd(BB) {
      return BB._isSchema || "string" !== typeof BB.refTarget[HB]
    }

    function Yd(BB) {
      BB.flags &= ~Ud;
      const TB = BB.root;
      if (void 0 === TB || void 0 === BB.parentRef) return;
      const dB = Jd(BB);
      let VB = Od(BB, BB.parentRef, BB._parentIndex, dB);
      for (let pB = BB.extraParents; void 0 !== pB && VB !== Ld; pB = pB.next) VB |= Od(BB, pB.ref, pB.index, dB);
      if (0 === VB) return;
      BB.isVisibilitySharedWithParent = 0 !== (VB & kd);
      const yB = 0 === (VB & od);
      yB !== BB.isFiltered && (BB.isFiltered = yB, yB || BB.isFullStateOnly || (BB.forEachLiveWithCtx(BB, dd), BB.has() && TB.enqueueChangeTree(BB), BB.unreliableRecorder?.has() && TB.enqueueUnreliable(BB)), BB.forEachChildWithCtx(BB, Dd))
    }
    const gd = 1,
      od = 2,
      kd = 4,
      Ld = gd | od | kd;

    function Od(BB, TB, dB, VB) {
      const yB = TB[uB];
      if (yB.root !== BB.root || ! function(BB, TB, dB) {
          const VB = TB.refTarget;
          if (TB.isArray) {
            const TB = VB.items,
              yB = TB[dB];
            if (void 0 !== yB && yB[uB] === BB) return !0;
            for (let dB = 0, VB = TB.length; dB < VB; dB++) {
              const VB = TB[dB];
              if (void 0 !== VB && VB[uB] === BB) return !0
            }
            return !1
          }
          const yB = TB.getValue(dB);
          return void 0 !== yB && yB[uB] === BB
        }(BB, yB, dB)) return 0;
      yB.flags & Ud && Yd(yB);
      let pB = gd;
      if (yB._isSchema) {
        void 0 !== yB.encDescriptor.tags[dB] || yB.isFieldStream(dB) || (yB.isFiltered ? VB && (pB |= kd) : pB |= od)
      } else if (yB.isFiltered) {
        if (VB && !yB.isStreamCollection) {
          const BB = yB.parent?.[uB];
          (BB?._isSchema ? BB.encDescriptor.tags[yB.parentIndex] : void 0) !== uV && (pB |= kd)
        }
      } else pB |= od;
      return pB
    }
    const Dd = (BB, TB, dB) => {
      Yd(TB)
    };

    function ud(BB, TB, dB, VB) {
      if (BB.addParent(TB, VB), !dB) return;
      const yB = dB.add(BB);
      dB !== BB.root && (BB.root = dB, pd(BB, TB, VB));
      const pB = TB?.[uB];
      if (void 0 !== pB && void 0 !== pB.subscribedViews && void 0 !== TB[HB] && function(BB, TB, dB, VB) {
          const yB = BB.subscribedViews;
          if (void 0 === yB) return;
          const pB = BB.isStreamCollection,
            lB = pB ? BB.ref : void 0,
            JB = pB ? void 0 : dB[uB];
          for (let YB = 0, gB = yB.length; YB < gB; YB++) {
            let BB = yB[YB];
            for (; 0 !== BB;) {
              const dB = BB & -BB;
              BB ^= dB;
              const gB = 32 * YB + (31 - Math.clz32(dB)),
                oB = VB.activeViews.get(gB),
                kB = oB?.deref();
              void 0 !== kB ? pB ? rT(lB, gB, TB) : void 0 !== JB && kB.markVisible(JB) : yB[YB] &= ~dB
            }
          }
        }(pB, VB, BB.ref, dB), yB) {
        let TB = md[Nd];
        void 0 === TB && (TB = {
          parentRef: void 0,
          root: void 0
        }, md[Nd] = TB), TB.parentRef = BB.ref, TB.root = dB, Nd++, Ed(BB, TB, td), Nd--
      }
    }

    function Hd(BB, TB, dB) {
      BB(TB, dB)
    }

    function Ed(BB, TB, dB) {
      const VB = BB.refTarget;
      if (VB[HB]) {
        if ("string" !== typeof VB[HB]) {
          const BB = VB.items;
          if (void 0 !== BB)
            for (let VB = 0, yB = BB.length; VB < yB; VB++) {
              const yB = BB[VB];
              yB && dB(TB, yB[uB], VB)
            } else {
              const BB = VB.$items,
                yB = VB._collectionIndexes;
              for (const VB of BB.keys()) {
                const pB = BB.get(VB);
                pB && dB(TB, pB[uB], yB?.[VB] ?? VB)
              }
            }
        }
      } else {
        const yB = BB.metadata,
          pB = yB?.[wB];
        if (!pB) return;
        const lB = BB.encDescriptor.names;
        for (let BB = 0, JB = pB.length; BB < JB; BB++) {
          const yB = pB[BB],
            JB = VB[lB[yB]];
          JB && dB(TB, JB[uB], yB)
        }
      }
    }

    function vd(BB, TB, dB) {
      TB.root !== BB ? TB.setRoot(BB) : BB.add(TB)
    }
    const md = [];
    let Nd = 0;

    function td(BB, TB, dB) {
      if (TB.root === BB.root) return BB.root.add(TB), void BB.root.moveNextToParent(TB);
      TB.setParent(BB.parentRef, BB.root, dB)
    }

    function fd(BB, TB, dB) {
      const VB = (3 & dB) << 3;
      return dB < 4 ? BB >>> VB & 255 : TB >>> VB & 255
    }
    const sd = (BB, TB, dB) => BB(TB, dB);
    const Md = 16,
      zd = 32,
      wd = 128,
      Ud = 256,
      Fd = Md | zd;
    class Kd {
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
        return 0 !== (this.flags & Md)
      }
      set isPatchOnly(BB) {
        this.flags = BB ? this.flags | Md : this.flags & ~Md
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & zd)
      }
      set isFullStateOnly(BB) {
        this.flags = BB ? this.flags | zd : this.flags & ~zd
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(BB) {
        this.flags = BB ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & wd)
      }
      set needsRestage(BB) {
        this.flags = BB ? this.flags | wd : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new AT(this.metadata?.[zB] ?? 0) : new bT), this.unreliableRecorder
      }
      isFieldUnreliable(BB) {
        const TB = this.encDescriptor;
        return !!TB.hasAnyUnreliable && (BB < 32 ? 0 !== (TB.unreliableBitmask & 1 << BB) : xT.hasUnreliableAtIndex(this.metadata, BB))
      }
      isFieldFullStateOnly(BB) {
        if (this.isFullStateOnly) return !0;
        const TB = this.encDescriptor;
        return !!TB.hasAnyFullStateOnly && (BB < 32 ? 0 !== (TB.fullStateOnlyBitmask & 1 << BB) : xT.hasFullStateOnlyAtIndex(this.metadata, BB))
      }
      isFieldStream(BB) {
        const TB = this.encDescriptor;
        return !!TB.hasAnyStream && (BB < 32 ? 0 !== (TB.streamBitmask & 1 << BB) : xT.hasStreamAtIndex(this.metadata, BB))
      }
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        this.ref = BB, this.refTarget = TB;
        const dB = Bd(BB);
        this.encDescriptor = dB, this.metadata = dB.metadata;
        const VB = dB.isSchema;
        if (this._isSchema = VB, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, VB) {
          const BB = this.metadata?.[zB] ?? 0;
          BB > 7 && (this.ops = new Uint8Array(BB + 1))
        } else this.collDirty = new Map
      }
      _opAt(BB) {
        const TB = this.ops;
        if (void 0 !== TB) return TB[BB];
        const dB = (3 & BB) << 3;
        return BB < 4 ? this.opsLow >>> dB & 255 : this.opsHigh >>> dB & 255
      }
      _opPut(BB, TB) {
        const dB = this.ops;
        if (void 0 !== dB) return void(dB[BB] = TB);
        const VB = (3 & BB) << 3,
          yB = ~(255 << VB);
        BB < 4 ? this.opsLow = this.opsLow & yB | TB << VB : this.opsHigh = this.opsHigh & yB | TB << VB
      }
      _markDirty(BB) {
        BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      record(BB, TB) {
        if (this._isSchema) {
          const dB = this._opAt(BB);
          0 === dB ? this._opPut(BB, TB) : (dB === yB.DELETE || dB === yB.ADD && TB === yB.DELETE_AND_ADD) && this._opPut(BB, yB.DELETE_AND_ADD), this._markDirty(BB)
        } else {
          const dB = this.collDirty,
            VB = dB.get(BB);
          let pB;
          pB = void 0 === VB ? TB : VB === yB.DELETE || VB === yB.ADD && TB === yB.DELETE_AND_ADD ? yB.DELETE_AND_ADD : VB, dB.set(BB, pB)
        }
      }
      recordDelete(BB, TB) {
        this._isSchema ? (this._opPut(BB, TB), this._markDirty(BB)) : this.collDirty.set(BB, TB)
      }
      recordRaw(BB, TB) {
        this._isSchema ? (this._opPut(BB, TB), this._markDirty(BB)) : this.collDirty.set(BB, TB)
      }
      recordPure(BB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, BB])
      }
      operationAt(BB) {
        if (this._isSchema) {
          const TB = this._opAt(BB);
          return 0 === TB ? void 0 : TB
        }
        return this.collDirty.get(BB)
      }
      setOperationAt(BB, TB) {
        if (this._isSchema) this._opPut(BB, TB);
        else {
          const dB = this.collDirty;
          dB.has(BB) && dB.set(BB, TB)
        }
      }
      forEach(BB) {
        this.forEachWithCtx(BB, sd)
      }
      forEachWithCtx(BB, TB) {
        if (this._isSchema) {
          let dB = this.dirtyLow,
            VB = this.dirtyHigh;
          const yB = this.ops;
          if (void 0 !== yB) {
            for (; 0 !== dB;) {
              const VB = dB & -dB,
                pB = 31 - Math.clz32(VB);
              dB ^= VB, TB(BB, pB, yB[pB])
            }
            for (; 0 !== VB;) {
              const dB = VB & -VB,
                pB = 31 - Math.clz32(dB) + 32;
              VB ^= dB, TB(BB, pB, yB[pB])
            }
          } else {
            const VB = this.opsLow,
              yB = this.opsHigh;
            for (; 0 !== dB;) {
              const pB = dB & -dB,
                lB = 31 - Math.clz32(pB);
              dB ^= pB, TB(BB, lB, fd(VB, yB, lB))
            }
          }
          return
        }
        const dB = this.collDirty,
          VB = this.collPureOps;
        if (void 0 !== VB && VB.length > 0) {
          let yB = 0,
            pB = 0;
          for (const [lB, JB] of dB) {
            for (; yB < VB.length && VB[yB][0] <= pB;) {
              const dB = VB[yB++][1];
              TB(BB, -dB, dB)
            }
            TB(BB, lB, JB), pB++
          }
          for (; yB < VB.length;) {
            const dB = VB[yB++][1];
            TB(BB, -dB, dB)
          }
        } else
          for (const [yB, pB] of dB) TB(BB, yB, pB)
      }
      size() {
        return this._isSchema ? nT(this.dirtyLow) + nT(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(BB, TB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const dB = this.collDirty,
          VB = new Map,
          pB = !this.paused && !this.isFullStateOnly;
        if (BB > 0)
          for (const [yB, lB] of dB) yB < BB && VB.set(yB, lB);
        if (pB)
          for (let lB = 0; lB < TB; lB++) VB.set(BB + lB, yB.ADD);
        for (const [yB, lB] of dB) yB >= BB && VB.set(yB + TB, lB);
        this.collDirty = VB, pB && this.root?.enqueueChangeTree(this)
      }
      removeAt(BB, TB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const dB = this.collDirty,
          VB = BB + TB;
        let yB = !1;
        for (const lB of dB.keys())
          if (lB >= VB) {
            yB = !0;
            break
          } if (!yB) {
          for (let TB = BB; TB < VB; TB++) dB.delete(TB);
          return
        }
        const pB = new Map;
        for (const [lB, JB] of dB) lB < BB ? pB.set(lB, JB) : lB >= VB && pB.set(lB - TB, JB);
        this.collDirty = pB
      }
      unshift(BB) {
        this.insertAt(0, BB)
      }
      setRoot(BB) {
        ! function(BB, TB) {
          BB.root = TB;
          const dB = TB.add(BB);
          pd(BB, BB.parent, BB.parentIndex), dB && Ed(BB, TB, vd)
        }(this, BB)
      }
      setParent(BB, TB, dB) {
        ud(this, BB, TB, dB)
      }
      forEachChild(BB) {
        Ed(this, BB, Hd)
      }
      forEachChildWithCtx(BB, TB) {
        Ed(this, BB, TB)
      }
      forEachLive(BB) {
        yd(this, BB, Vd)
      }
      forEachLiveWithCtx(BB, TB) {
        yd(this, BB, TB)
      }
      operation(BB) {
        this.paused || this.isFullStateOnly || (this.recordPure(BB), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(BB, TB, dB) {
        if (!this.paused && !this.isFieldFullStateOnly(BB)) {
          if (this.isFieldUnreliable(BB) && !this.isNew) {
            const VB = this.ensureUnreliableRecorder();
            return dB ? VB.recordRaw(BB, TB) : VB.record(BB, TB), void this.root?.enqueueUnreliable(this)
          }
          dB ? this.recordRaw(BB, TB) : this.record(BB, TB), this.root?.enqueueChangeTree(this)
        }
      }
      change(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB.ADD;
        this._routeAndRecord(BB, TB, !1)
      }
      indexedOperation(BB, TB) {
        this._routeAndRecord(BB, TB, !0)
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
        const TB = this.paused;
        this.paused = !0;
        try {
          return BB()
        } finally {
          this.paused = TB
        }
      }
      markDirty(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB.ADD;
        const dB = this.paused;
        this.paused = !1;
        try {
          this.change(BB, TB)
        } finally {
          this.paused = dB
        }
      }
      getValue(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[LB](BB, TB)
      }
      delete(BB, TB) {
        if (void 0 === BB) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${BB}'`)
          } catch (ly) {
            console.warn(ly)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(BB)) return this.getValue(BB);
        const dB = this.isFieldUnreliable(BB) && !this.isNew;
        dB ? this.ensureUnreliableRecorder().recordDelete(BB, TB ?? yB.DELETE) : this.recordDelete(BB, TB ?? yB.DELETE);
        const VB = this.getValue(BB);
        return VB && VB[uB] && this.root?.remove(VB[uB]), dB ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), VB
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[vB]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[vB]?.()
      }
      discard() {
        this._isSchema || this.refTarget[vB]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const BB = BB => {
          if (BB < 0) return;
          const TB = this.getValue(BB);
          TB && TB[uB] && TB[uB].discardAll()
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
      addParent(BB, TB) {
        ! function(BB, TB, dB) {
          if (BB.parentRef) {
            if (BB.parentRef[uB] === TB[uB]) return void(BB._parentIndex = dB);
            if (Td(BB, ((BB, dB) => BB[uB] === TB[uB]))) return void(BB._parentIndex = dB)
          }
          void 0 === BB.parentRef ? (BB.parentRef = TB, BB._parentIndex = dB) : (BB.extraParents = {
            ref: BB.parentRef,
            index: BB._parentIndex,
            next: BB.extraParents
          }, BB.parentRef = TB, BB._parentIndex = dB)
        }(this, BB, TB)
      }
      setParentIndex(BB, TB) {
        ! function(BB, TB, dB) {
          if (void 0 !== BB.extraParents)
            if (BB.parentRef[uB] !== TB[uB]) {
              for (let VB = BB.extraParents; void 0 !== VB; VB = VB.next)
                if (VB.ref[uB] === TB[uB]) return void(VB.index = dB)
            } else BB._parentIndex = dB;
          else BB._parentIndex = dB
        }(this, BB, TB)
      }
      removeParent() {
        return function(BB, TB) {
          if (BB.parentRef && BB.parentRef[uB] === TB[uB]) return BB.extraParents ? (BB.parentRef = BB.extraParents.ref, BB._parentIndex = BB.extraParents.index, BB.extraParents = BB.extraParents.next) : (BB.parentRef = void 0, BB._parentIndex = void 0), !0;
          let dB = BB.extraParents,
            VB = null;
          for (; dB;) {
            if (dB.ref[uB] === TB[uB]) return VB ? VB.next = dB.next : BB.extraParents = dB.next, !0;
            VB = dB, dB = dB.next
          }
          return void 0 === BB.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(BB) {
        return function(BB, TB) {
          if (void 0 !== BB.parentRef && TB(BB.parentRef, BB._parentIndex)) return {
            ref: BB.parentRef,
            index: BB._parentIndex
          };
          for (let dB = BB.extraParents; void 0 !== dB; dB = dB.next)
            if (TB(dB.ref, dB.index)) return {
              ref: dB.ref,
              index: dB.index
            }
        }(this, BB)
      }
      hasParent(BB) {
        return Td(this, BB)
      }
      indexInParent(BB) {
        return function(BB, TB) {
          if (BB.parentRef && BB.parentRef[uB] === TB[uB]) return BB._parentIndex;
          for (let dB = BB.extraParents; void 0 !== dB; dB = dB.next)
            if (dB.ref[uB] === TB[uB]) return dB.index
        }(this, BB)
      }
      getAllParents() {
        return function(BB) {
          const TB = [];
          BB.parentRef && TB.push({
            ref: BB.parentRef,
            index: BB._parentIndex
          });
          let dB = BB.extraParents;
          for (; dB;) TB.push({
            ref: dB.ref,
            index: dB.index
          }), dB = dB.next;
          return TB
        }(this)
      }
    }
    class rd {
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
        const TB = this.ref;
        if (TB[HB]) {
          if ("string" !== typeof TB[HB])
            for (const [dB, VB] of TB.entries()) VB && BB(VB[uB], TB._collectionIndexes?.[dB] ?? dB);
          return
        }
        const dB = TB.constructor,
          VB = dB?.[Symbol.metadata];
        if (!VB) return;
        const yB = VB[wB] ?? [];
        for (let pB = 0; pB < yB.length; pB++) {
          const dB = yB[pB],
            lB = TB[VB[dB].name];
          lB && BB(lB[uB], dB)
        }
      }
      forEachChildWithCtx(BB, TB) {
        this.forEachChild(((dB, VB) => TB(BB, dB, VB)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Id(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
      var dB;
      Object.defineProperty(BB, uB, {
        value: (dB = TB, new rd(dB)),
        enumerable: !1,
        writable: !0
      })
    }

    function cd(BB, TB, dB, VB, pB, lB, YB) {
      void 0 !== YB ? YB(TB, VB, lB) : "string" === typeof dB ? TT[dB]?.(TB, VB, lB) : null != dB[Symbol.metadata] ? (TT.number(TB, VB[JB], lB), (pB & yB.ADD) === yB.ADD && BB.tryEncodeTypeId(TB, dB, VB.constructor, lB)) : TT.number(TB, VB[JB], lB)
    }
    const Sd = function(BB, TB, dB, VB, pB, lB, JB, YB) {
        if (TB[lB.offset++] = 255 & (VB | pB), pB === yB.DELETE) return;
        const gB = dB.encDescriptor,
          oB = dB.ref,
          kB = oB[NB][VB] ?? oB[gB.names[VB]];
        cd(BB, TB, gB.types[VB], kB, pB, lB, gB.encoders[VB])
      },
      Pd = function(BB, TB, dB, VB, pB, lB) {
        if (TB[lB.offset++] = 255 & pB, TT.number(TB, VB, lB), pB === yB.DELETE) return;
        const JB = dB.ref;
        if ((pB & yB.ADD) === yB.ADD) {
          const BB = JB.$indexes.get(VB);
          TT.string(TB, BB, lB)
        }
        cd(BB, TB, JB[HB], JB[LB](VB), pB, lB)
      },
      Qd = function(BB, TB, dB, VB, pB, lB) {
        if (TB[lB.offset++] = 255 & pB, TT.number(TB, VB, lB), pB === yB.DELETE) return;
        const JB = dB.ref;
        cd(BB, TB, JB[HB], JB[LB](VB), pB, lB)
      },
      Rd = function(BB, TB, dB, VB, pB, lB) {
        const JB = dB.ref;
        (pB & yB.ADD) === yB.ADD && "function" === typeof JB.set ? Pd(BB, TB, dB, VB, pB, lB) : Qd(BB, TB, dB, VB, pB, lB)
      },
      ad = function(BB, TB, dB, VB, pB, lB, YB, gB) {
        const oB = dB.refTarget,
          kB = oB[HB],
          OB = "string" !== typeof kB;
        let DB;
        if (gB && dB.isFiltered && OB) {
          const BB = oB.tmpItems[VB];
          if (!BB) return;
          if (DB = BB[JB], pB === yB.DELETE) pB = yB.DELETE_BY_REFID;
          else if ((pB & yB.ADD) === yB.ADD) pB = yB.ADD_BY_REFID;
          else if ((pB & yB.MOVE) === yB.MOVE) return
        } else if (pB === yB.DELETE && OB) {
          const BB = oB.tmpItems[VB];
          if (!BB) return;
          DB = BB[JB], pB = yB.DELETE_BY_REFID
        } else DB = VB;
        if (TB[lB.offset++] = 255 & pB, TT.number(TB, DB, lB), pB === yB.DELETE || pB === yB.DELETE_BY_REFID) return;
        cd(BB, TB, kB, oB[LB](VB, YB), pB, lB)
      };

    function Zd(BB, TB, dB, VB, pB, lB, YB) {
      const gB = BB.resyncVisited;
      let oB = gB.get(BB.currentRefId);
      if (void 0 === oB && gB.set(BB.currentRefId, oB = new Set), oB.add(VB), void 0 !== pB && dB === yB.ADD && pB !== lB) {
        const dB = pB[JB];
        void 0 !== dB && (BB.root.removeRef(dB), YB?.push({
          ref: TB,
          refId: BB.currentRefId,
          op: yB.DELETE,
          dynamicIndex: VB,
          value: void 0,
          previousValue: pB
        }))
      }
    }

    function Xd(BB, TB, dB, VB) {
      const yB = TB[JB];
      if (void 0 === yB || dB.has(yB)) return;
      dB.add(yB);
      const pB = TB.constructor[Symbol.metadata],
        lB = pB?.[wB];
      if (void 0 === lB) return;
      const YB = pB[rB];
      for (let JB = 0; JB < lB.length; JB++) {
        const yB = lB[JB];
        if (void 0 !== YB && YB.includes(yB)) continue;
        const gB = pB[yB],
          oB = TB[gB.name];
        oB && (FV.is(gB.type) ? Xd(BB, oB, dB, VB) : Wd(BB, oB, dB, VB))
      }
    }

    function Wd(BB, TB, dB, VB) {
      const pB = TB[EB] ?? TB,
        lB = pB[JB];
      if (void 0 === lB || dB.has(lB)) return;
      dB.add(lB);
      const YB = BB.resyncVisited.get(lB);
      if (void 0 === YB) return;
      const gB = BB.root;
      pB[DB](YB, ((BB, dB) => {
        VB?.push({
          ref: TB,
          refId: lB,
          op: yB.DELETE,
          dynamicIndex: dB,
          value: void 0,
          previousValue: BB
        });
        const pB = BB?.[JB];
        void 0 !== pB && gB.removeRef(pB)
      }), (TB => {
        FV.isSchema(TB) && Xd(BB, TB, dB, VB)
      }))
    }
    const hd = 1,
      Cd = 2,
      Gd = 3,
      qd = 4,
      xd = 5;

    function jd(BB, TB, dB, VB, pB, lB, YB, gB, oB) {
      const kB = BB.root;
      let LB;
      if ((TB & yB.DELETE) === yB.DELETE) {
        const BB = pB?.[JB];
        void 0 !== BB && kB.removeRef(BB), TB !== yB.DELETE_AND_ADD && dB[OB](VB), LB = void 0
      }
      if (TB === yB.DELETE);
      else if ("string" === typeof lB) LB = mT[lB](YB, gB);
      else if (PT(lB)) LB = function(BB, TB, dB) {
        return RT(BB, (0, mT[BB.wire])(TB, dB))
      }(lB.quantized, YB, gB);
      else if (FV.is(lB)) {
        const dB = mT.number(YB, gB);
        if (LB = kB.refs.get(dB), (TB & yB.ADD) === yB.ADD) {
          const VB = BB.getInstanceType(YB, gB, lB);
          LB || (LB = BB.createInstanceOfType(VB)), kB.addRef(dB, LB, LB !== pB || TB === yB.DELETE_AND_ADD && LB === pB)
        }
      } else {
        const dB = (DB = Object.keys(lB)[0], iT[DB]),
          VB = mT.number(YB, gB);
        null !== BB.resyncVisited && function(BB, TB) {
          const dB = BB.resyncVisited;
          dB.has(TB) || dB.set(TB, new Set)
        }(BB, VB);
        const OB = kB.refs.has(VB) ? pB || kB.refs.get(VB) : dB.constructor.initializeForDecoder();
        if (LB = OB.clone(!0), LB[HB] = Object.values(lB)[0], pB) {
          let BB = pB[JB];
          if (void 0 !== BB && VB !== BB) {
            (TB & yB.DELETE) !== yB.DELETE && kB.removeRef(BB);
            const dB = pB.entries();
            let VB;
            for (;
              (VB = dB.next()) && !VB.done;) {
              const [TB, dB] = VB.value;
              "object" === typeof dB && (BB = dB[JB]), oB?.push({
                ref: pB,
                refId: BB,
                op: yB.DELETE,
                field: TB,
                value: void 0,
                previousValue: dB
              })
            }
          }
        }
        kB.addRef(VB, LB, OB !== pB || TB === yB.DELETE_AND_ADD && OB === pB)
      }
      var DB;
      return LB
    }
    const Ad = function(BB, TB, dB, VB, yB) {
        const pB = TB[dB.offset++],
          lB = VB.constructor[Symbol.metadata],
          JB = pB >> 6 << 6,
          YB = pB % (JB || 255),
          gB = lB[YB];
        if (void 0 === gB) return console.warn("@colyseus/schema: field not defined at", {
          index: YB,
          ref: VB.constructor.name,
          metadata: lB
        }), -1;
        const oB = !0 === gB.deprecated,
          kB = oB ? void 0 : VB[LB](YB),
          OB = jd(BB, JB, VB, YB, kB, gB.type, TB, dB, yB);
        oB || (null !== OB && void 0 !== OB && (VB[gB.name] = OB), kB !== OB && yB?.push({
          ref: VB,
          refId: BB.currentRefId,
          op: JB,
          field: gB.name,
          value: OB,
          previousValue: kB
        }))
      },
      bd = function(BB, TB, dB, VB, pB) {
        const lB = VB[EB] ?? VB,
          JB = TB[dB.offset++];
        if (JB === yB.CLEAR) return BB.removeChildRefs(lB, pB), void lB.clear();
        const YB = mT.number(TB, dB),
          gB = lB[HB],
          oB = lB.constructor.COLLECTION_KIND;
        let kB;
        (JB & yB.ADD) === yB.ADD ? oB === hd ? (kB = mT.string(TB, dB), lB.setIndex(YB, kB)) : kB = YB : kB = lB.getIndex(YB);
        const OB = lB[LB](YB),
          DB = jd(BB, JB, VB, YB, OB, gB, TB, dB, pB);
        if (null !== BB.resyncVisited && Zd(BB, VB, JB, kB, OB, DB, pB), null !== DB && void 0 !== DB) switch (oB) {
          case hd:
            lB.$items.set(kB, DB);
            break;
          case Cd:
            lB.$setAt(YB, DB, null !== BB.resyncVisited && JB === yB.ADD ? yB.REPLACE : JB);
            break;
          case Gd:
          case qd:
          case xd:
            lB.$items.has(YB) || (lB.$items.set(YB, DB), "number" === typeof lB.$refId && YB >= lB.$refId && (lB.$refId = YB + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${lB.constructor?.name} \u2014 item at index ${YB} was not stored.`)
        }
        OB !== DB && pB?.push({
          ref: VB,
          refId: BB.currentRefId,
          op: JB,
          dynamicIndex: kB,
          value: DB,
          previousValue: OB
        })
      },
      nd = function(BB, TB, dB, VB, pB) {
        const lB = VB[EB] ?? VB;
        let JB, YB = TB[dB.offset++];
        if (YB === yB.CLEAR) return BB.removeChildRefs(lB, pB), void lB.clear();
        if (YB === yB.REVERSE) return void lB.items.reverse();
        if (YB === yB.DELETE_BY_REFID) {
          const YB = mT.number(TB, dB),
            gB = BB.root.refs.get(YB);
          if (void 0 === gB) return;
          if (BB.root.removeRef(YB), JB = lB.findIndex((BB => BB === gB)), -1 === JB) return;
          return lB[OB](JB), void pB?.push({
            ref: VB,
            refId: BB.currentRefId,
            op: yB.DELETE,
            dynamicIndex: JB,
            value: void 0,
            previousValue: gB
          })
        }
        if (YB === yB.ADD_BY_REFID) {
          const VB = mT.number(TB, dB),
            yB = BB.root.refs.get(VB);
          yB && (JB = lB.findIndex((BB => BB === yB))), -1 !== JB && void 0 !== JB || (JB = lB.length)
        } else JB = mT.number(TB, dB);
        const gB = lB[HB];
        let oB = JB;
        const kB = lB.items[JB],
          LB = jd(BB, YB, VB, JB, kB, gB, TB, dB, pB);
        null !== BB.resyncVisited && Zd(BB, VB, YB, JB, kB, LB, pB), null !== LB && void 0 !== LB && LB !== kB && lB.$setAt(JB, LB, null !== BB.resyncVisited && YB === yB.ADD ? yB.REPLACE : YB), kB !== LB && pB?.push({
          ref: VB,
          refId: BB.currentRefId,
          op: YB,
          dynamicIndex: oB,
          value: LB,
          previousValue: kB
        })
      };
    class ed extends Error {}

    function BV(BB, TB, dB, VB) {
      if (!(BB instanceof TB)) throw new ed(`a '${TB.name}' was expected, but '${BB&&BB.constructor.name}' was provided in ${dB.constructor.name}#${VB}`)
    }
    const TV = (BB, TB) => {
        const dB = BB.toString(),
          VB = TB.toString();
        return dB < VB ? -1 : dB > VB ? 1 : 0
      },
      dV = {
        get: (BB, TB) => "symbol" === typeof TB || isNaN(TB) ? Reflect.get(BB, TB) : BB.items[TB],
        set: (BB, TB, dB) => {
          if ("symbol" !== typeof TB && !isNaN(TB)) {
            if (void 0 === dB || null === dB) BB.$deleteAt(TB);
            else {
              let VB;
              if (dB[uB]) {
                BV(dB, BB[HB], BB, TB);
                const pB = BB.items[TB];
                BB.isMovingItems ? (VB = BB.$wireIndex(Number(TB)), void 0 !== pB ? dB[uB].isNew ? BB[uB].indexedOperation(VB, yB.MOVE_AND_ADD) : (BB[uB].getChange(VB) & yB.DELETE) === yB.DELETE ? BB[uB].indexedOperation(VB, yB.DELETE_AND_MOVE) : BB[uB].indexedOperation(VB, yB.MOVE) : dB[uB].isNew && BB[uB].indexedOperation(VB, yB.ADD), dB[uB].setParent(BB, BB[uB].root, VB)) : VB = BB.$changeAt(Number(TB), dB), void 0 !== pB && pB[uB].root?.remove(pB[uB])
              } else VB = BB.$changeAt(Number(TB), dB);
              BB.items[TB] = dB, void 0 !== VB && (BB.tmpItems[VB] = dB)
            }
            return !0
          }
          return Reflect.set(BB, TB, dB)
        },
        deleteProperty: (BB, TB) => ("number" === typeof TB ? BB.$deleteAt(TB) : delete BB[TB], !0),
        has: (BB, TB) => "symbol" === typeof TB || isNaN(Number(TB)) ? Reflect.has(BB, TB) : Reflect.has(BB.items, TB)
      };
    class VV {
      [uB];
      [JB];
      [EB];
      [HB];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[gB] = ad;
      static[oB] = nd;
      static COLLECTION_KIND = Cd;
      static[kB](BB, TB, dB) {
        if (!dB) return !0;
        const VB = BB[EB] ?? BB;
        return "string" === typeof VB[HB] || dB.isChangeTreeVisible(VB.tmpItems[TB]?.[uB])
      }
      static is(BB) {
        return Array.isArray(BB) || void 0 !== BB.array
      }
      static from(BB) {
        return new VV(...Array.from(BB))
      }
      constructor() {
        this[HB] = void 0, this[EB] = this;
        const BB = new Proxy(this, dV);
        return Object.defineProperty(this, uB, {
          value: new Kd(BB, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), BB
      }
      static initializeForDecoder() {
        const BB = Object.create(VV.prototype);
        BB.items = [], BB.isMovingItems = !1, BB._needsCompaction = !1, BB[HB] = void 0, BB[EB] = BB;
        const TB = new Proxy(BB, dV);
        return Id(BB, TB), TB
      }
      set length(BB) {
        0 === BB ? this.clear() : BB < this.items.length ? this.splice(BB, this.length - BB) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[uB].pause()
      }
      resumeTracking() {
        this[uB].resume()
      }
      untracked(BB) {
        return this[uB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[uB].paused
      }
      push() {
        const BB = this[EB],
          TB = BB.items,
          dB = BB.tmpItems,
          VB = BB[uB],
          pB = BB[HB];
        let lB = dB.length;
        for (let JB = 0, YB = arguments.length; JB < YB; JB++, lB++) {
          const YB = JB < 0 || arguments.length <= JB ? void 0 : arguments[JB];
          if (void 0 === YB || null === YB) return;
          "object" === typeof YB && pB && BV(YB, pB, BB, JB), VB.indexedOperation(lB, yB.ADD), TB.push(YB), dB.push(YB), YB[uB]?.setParent(this, VB.root, lB)
        }
        return lB
      }
      pop() {
        const BB = this[EB],
          TB = BB.tmpItems,
          dB = BB.deletedIndexes;
        let VB = -1;
        for (let pB = TB.length - 1; pB >= 0; pB--)
          if (!0 !== dB[pB]) {
            VB = pB;
            break
          } if (VB < 0) return;
        const yB = BB.$isUnsentAdd(VB);
        return BB[uB].delete(VB), yB ? BB.$cancelAdd(VB) : dB[VB] = !0, BB.items.pop()
      }
      at(BB) {
        return BB < 0 && (BB += this.length), this.items[BB]
      }
      $wireIndex(BB) {
        const TB = this.deletedIndexes;
        if (0 === TB.length) return BB;
        const dB = this.tmpItems;
        let VB = 0;
        for (let yB = 0; yB < dB.length; yB++)
          if (!0 !== TB[yB]) {
            if (VB === BB) return yB;
            VB++
          } return dB.length + (BB - VB)
      }
      $isUnsentAdd(BB) {
        const TB = this[uB];
        return 0 === (576 & TB.flags) && !TB.paused && "string" !== typeof this[HB] && TB.operationAt(BB) === yB.ADD
      }
      $cancelAdd(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const dB = this[uB],
          VB = this.tmpItems[BB];
        this.tmpItems.splice(BB, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(BB, 1), dB.removeAt(BB, 1);
        const yB = VB?.[uB];
        void 0 !== yB && void 0 === yB.root && yB.removeParent(this), TB && this.$reindexChildren(BB)
      }
      $reindexChildren(BB, TB) {
        if (!this[uB].hasFilteredFields) return;
        if ("string" === typeof this[HB]) return;
        const dB = this.tmpItems,
          VB = dB.length;
        if (void 0 !== TB)
          for (; BB < VB && dB[BB] === TB[BB];) BB++;
        for (let yB = BB; yB < VB; yB++) dB[yB]?.[uB]?.setParentIndex(this, yB)
      }
      $changeAt(BB, TB) {
        if (void 0 === TB || null === TB) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[BB] === TB) return;
        const dB = void 0 !== this.items[BB] ? "object" === typeof TB ? yB.DELETE_AND_ADD : yB.REPLACE : yB.ADD,
          VB = this.$wireIndex(BB),
          pB = this[uB];
        return pB.change(VB, dB), TB[uB]?.setParent(this, pB.root, VB), VB
      }
      $deleteAt(BB, TB) {
        this[uB].delete(this.$wireIndex(BB), TB)
      }
      $setAt(BB, TB, dB) {
        dB === yB.ADD && void 0 !== this.items[BB] ? this.items.splice(BB, 0, TB) : dB === yB.DELETE_AND_MOVE ? (this.items.splice(BB, 1), this.items[BB] = TB) : (BB > this.items.length && (this._needsCompaction = !0), this.items[BB] = TB)
      }
      clear() {
        const BB = this[EB];
        if (0 === BB.items.length) return;
        const TB = BB[uB];
        TB.forEachChild(((BB, dB) => {
          TB.root?.remove(BB)
        })), TB.discard(), TB.operation(yB.CLEAR), BB.items.length = 0, BB.tmpItems.length = 0
      } [mB]() {
        const BB = this[EB] ?? this,
          TB = BB[uB];
        if (TB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const dB = BB.items;
        for (let VB = 0; VB < dB.length; VB++) dB[VB]?.[mB]?.();
        BB.items.length = 0, BB.tmpItems.length = 0, BB.deletedIndexes.length = 0, TB.recycle(), BB[JB] = void 0
      }
      concat() {
        return new VV(...this.items.concat(...arguments))
      }
      join(BB) {
        return this.items.join(BB)
      }
      reverse() {
        const BB = this[EB],
          TB = BB[uB];
        if (TB.has() || BB.deletedIndexes.length > 0) {
          const TB = BB.items.slice().reverse();
          return this.clear(), this.push(...TB), this
        }
        return TB.operation(yB.REVERSE), BB.items.reverse(), BB.tmpItems.reverse(), BB.$reindexChildren(0), this
      }
      shift() {
        const BB = this[EB],
          TB = BB.items;
        if (0 === TB.length) return;
        const dB = BB[uB],
          VB = BB.deletedIndexes;
        let pB = 0;
        for (; !0 === VB[pB];) pB++;
        const lB = BB.$isUnsentAdd(pB);
        return dB.delete(pB, yB.DELETE), lB ? BB.$cancelAdd(pB) : VB[pB] = !0, TB.shift()
      }
      slice(BB, TB) {
        const dB = new VV;
        return dB.push(...this.items.slice(BB, TB)), dB
      }
      sort() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TV;
        const TB = this[EB];
        TB.isMovingItems = !0;
        const dB = TB[uB];
        return TB.items.sort(BB).forEach(((BB, TB) => dB.change(TB, yB.REPLACE))), TB.tmpItems.sort(BB), TB.$reindexChildren(0), TB.isMovingItems = !1, this
      }
      splice(BB, TB) {
        const dB = this[EB],
          VB = dB[uB],
          pB = dB.items,
          lB = dB.tmpItems,
          JB = dB.deletedIndexes,
          YB = pB.length,
          gB = lB.length;
        for (var oB = arguments.length, kB = new Array(oB > 2 ? oB - 2 : 0), LB = 2; LB < oB; LB++) kB[LB - 2] = arguments[LB];
        const OB = kB.length,
          DB = [];
        for (let yB = 0; yB < gB; yB++) !0 !== JB[yB] && DB.push(yB);
        let HB;
        if (YB > BB) {
          void 0 === TB && (TB = YB - BB);
          for (let pB = BB; pB < BB + TB; pB++) {
            const BB = DB[pB],
              TB = dB.$isUnsentAdd(BB);
            VB.delete(BB, yB.DELETE), TB ? (HB ??= []).push(BB) : JB[BB] = !0
          }
        } else TB = 0;
        if (OB > 0) {
          const pB = DB[BB] ?? YB,
            gB = Math.min(OB, TB);
          for (let BB = 0; BB < gB; BB++) {
            const TB = pB + BB;
            let dB;
            const YB = void 0 !== HB ? HB.indexOf(TB) : -1; - 1 !== YB ? (HB.splice(YB, 1), dB = yB.ADD) : dB = JB[TB] ? yB.DELETE_AND_ADD : yB.ADD, VB.indexedOperation(TB, dB), lB[TB] = kB[BB], JB[TB] = !1, kB[BB][uB]?.setParent(this, VB.root, TB)
          }
          const oB = OB - gB;
          if (oB > 0) {
            const BB = pB + gB;
            VB.insertAt(BB, oB);
            for (let TB = 0; TB < oB; TB++) kB[gB + TB][uB]?.setParent(this, VB.root, BB + TB);
            JB.length > 0 && JB.splice(BB, 0, ...new Array(oB).fill(!1)), lB.splice(BB, 0, ...kB.slice(gB)), dB.$reindexChildren(BB + oB)
          }
        }
        if (void 0 !== HB && HB.length > 0) {
          for (let BB = HB.length - 1; BB >= 0; BB--) dB.$cancelAdd(HB[BB], !1);
          dB.$reindexChildren(HB[0])
        }
        return VB.root?.enqueueChangeTree(VB), pB.splice(BB, TB, ...kB)
      }
      unshift() {
        const BB = this[EB],
          TB = BB[uB];
        TB.unshift(arguments.length);
        for (let VB = 0; VB < arguments.length; VB++)(VB < 0 || arguments.length <= VB ? void 0 : arguments[VB])?.[uB]?.setParent(this, TB.root, VB);
        const dB = BB.deletedIndexes;
        return dB.length > 0 && dB.unshift(...new Array(arguments.length).fill(!1)), BB.tmpItems.unshift(...arguments), BB.$reindexChildren(arguments.length), BB.items.unshift(...arguments)
      }
      indexOf(BB, TB) {
        return this.items.indexOf(BB, TB)
      }
      lastIndexOf(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(BB, TB)
      }
      every(BB, TB) {
        return this.items.every(BB, TB)
      }
      some(BB, TB) {
        return this.items.some(BB, TB)
      }
      forEach(BB, TB) {
        return this.items.forEach(BB, TB)
      }
      map(BB, TB) {
        return this.items.map(BB, TB)
      }
      filter(BB, TB) {
        return this.items.filter(BB, TB)
      }
      reduce(BB, TB) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(BB, TB) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(BB, TB) {
        return this.items.find(BB, TB)
      }
      findIndex(BB, TB) {
        return this.items.findIndex(BB, TB)
      }
      fill(BB, TB, dB) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(BB, TB, dB) {
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
        return VV
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
      includes(BB, TB) {
        return this.items.includes(BB, TB)
      }
      flatMap(BB, TB) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(BB) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(BB, TB) {
        const dB = this.items.slice();
        return BB < 0 && (BB += this.length), dB[BB] = TB, new VV(...dB)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(BB) {
        return this.items.slice().sort(BB)
      }
      toSpliced(BB, TB) {
        for (var dB = arguments.length, VB = new Array(dB > 2 ? dB - 2 : 0), yB = 2; yB < dB; yB++) VB[yB - 2] = arguments[yB];
        const pB = this.items.slice();
        return pB.splice.apply(pB, arguments), pB
      }
      shuffle() {
        return this.move((BB => {
          let TB = this.items.length;
          for (; 0 != TB;) {
            let BB = Math.floor(Math.random() * TB);
            TB--, [this[TB], this[BB]] = [this[BB], this[TB]]
          }
        }))
      }
      move(BB) {
        return this.isMovingItems = !0, BB(this), this.isMovingItems = !1, this
      } [LB](BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = this[EB] ?? this;
        return TB || dB.deletedIndexes[BB] ? dB.items[BB] : dB.tmpItems[BB] || dB.items[BB]
      } [OB](BB) {
        const TB = this[EB] ?? this;
        TB.items[BB] = void 0, TB._needsCompaction = !0
      } [vB]() {
        const BB = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, BB), this.deletedIndexes.length = 0)
      } [iB]() {
        const BB = this[EB] ?? this;
        BB._needsCompaction && (BB._needsCompaction = !1, BB.items = BB.items.filter((BB => void 0 !== BB)))
      } [DB](BB, TB, dB) {
        const VB = this[EB] ?? this,
          yB = VB.items;
        let pB = !1;
        for (let lB = 0; lB < yB.length; lB++) {
          const JB = yB[lB];
          BB.has(lB) ? dB(JB) : (pB = !0, TB(JB, lB), VB[OB](lB))
        }
        pB && VB[iB]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((BB => "function" === typeof BB.toJSON ? BB.toJSON() : BB))
      }
      clone(BB) {
        let TB;
        return BB ? (TB = new VV, TB.push(...this.items)) : TB = new VV(...this.map((BB => BB[uB] ? BB.clone() : BB))), TB
      }
    }
    tT("array", {
      constructor: VV
    });
    class yV {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(BB) {
        const TB = this.indexByKey[BB];
        return void 0 === TB ? void 0 : TB
      }
      assign(BB) {
        const TB = this.nextIndex++;
        return this.indexByKey[BB] = TB, this.keyByIndex.set(TB, BB), TB
      }
      snapshot(BB, TB) {
        (this.snapshots ??= new Map).set(BB, TB)
      }
      forgetSnapshot(BB) {
        this.snapshots?.delete(BB)
      }
      snapshotAt(BB) {
        return this.snapshots?.get(BB)
      }
      setIndex(BB, TB) {
        this.keyByIndex.set(BB, TB), this.indexByKey[TB] = BB
      }
      keyOf(BB) {
        return this.keyByIndex.get(BB)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [BB] of this.snapshots) {
            const TB = this.keyByIndex.get(BB);
            void 0 !== TB && (delete this.indexByKey[TB], this.keyByIndex.delete(BB))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class pV {
      [uB];
      [JB];
      childType;
      [HB];
      $items = new Map;
      journal = new yV;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= MT()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= MT()).priority = BB
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[gB] = Pd;
      static[oB] = bd;
      static COLLECTION_KIND = hd;
      static[kB](BB, TB, dB) {
        if (!dB || "string" === typeof BB[HB]) return !0;
        const VB = BB[LB](TB) ?? BB.journal.snapshotAt(TB);
        return dB.isChangeTreeVisible(VB[uB])
      }
      static is(BB) {
        return void 0 !== BB.map
      }
      constructor(BB) {
        if (Object.defineProperty(this, uB, {
            value: new Kd(this),
            enumerable: !1,
            writable: !0
          }), this[HB] = void 0, BB)
          if (BB instanceof Map || BB instanceof pV) BB.forEach(((BB, TB) => this.set(TB, BB)));
          else
            for (const TB in BB) this.set(TB, BB[TB])
      }
      static initializeForDecoder() {
        const BB = Object.create(pV.prototype);
        return BB.$items = new Map, BB.journal = new yV, BB[HB] = void 0, Id(BB), BB
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return pV
      }
      set(BB, TB) {
        if (void 0 === TB || null === TB) throw new Error(`MapSchema#set('${BB}', ${TB}): trying to set ${TB} value on '${BB}'.`);
        "object" === typeof TB && this[HB] && BV(TB, this[HB], this, BB), BB = BB.toString();
        const dB = this[uB],
          VB = void 0 !== TB[uB],
          pB = this.journal;
        let lB, JB = pB.indexOf(BB);
        if (void 0 !== JB) {
          lB = yB.REPLACE;
          const dB = this.$items.get(BB);
          if (dB === TB) return;
          VB && (lB = yB.DELETE_AND_ADD, void 0 !== dB && dB[uB].root?.remove(dB[uB])), void 0 !== pB.snapshotAt(JB) && pB.forgetSnapshot(JB)
        } else JB = pB.assign(BB), lB = yB.ADD;
        return this.$items.set(BB, TB), lB === yB.ADD && dB.isStreamCollection ? void 0 !== dB.root && wT(this, dB.root, JB) : dB.change(JB, lB), VB && TB[uB].setParent(this, dB.root, JB), this
      }
      get(BB) {
        return this.$items.get(BB)
      }
      getOrInsert(BB, TB) {
        return this.$items.has(BB) ? this.$items.get(BB) : (this.set(BB, TB), TB)
      }
      getOrInsertComputed(BB, TB) {
        if (this.$items.has(BB)) return this.$items.get(BB);
        const dB = TB(BB);
        return this.set(BB, dB), dB
      }
      delete(BB) {
        if (!this.$items.has(BB)) return !1;
        const TB = this.journal.indexOf(BB),
          dB = this.$items.get(BB),
          VB = this[uB];
        if (VB.isStreamCollection) {
          const yB = VB.root;
          let pB = !1;
          return void 0 !== yB && (pB = UT(this, yB, this[JB], TB)), void 0 !== dB?.[uB] && yB?.remove(dB[uB]), this.$items.delete(BB), pB || this.journal.snapshot(TB, dB), !0
        }
        return this.journal.snapshot(TB, dB), VB.delete(TB), this.$items.delete(BB)
      }
      clear() {
        const BB = this[uB];
        BB.discard(), BB.forEachChild(((TB, dB) => {
          BB.root?.remove(TB)
        })), this.journal.reset(), this.$items.clear(), BB.operation(yB.CLEAR)
      } [mB]() {
        const BB = this[uB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[mB]?.())), this.$items.clear(), this.journal.reset(), BB.recycle(), this[JB] = void 0
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
        this[uB].pause()
      }
      resumeTracking() {
        this[uB].resume()
      }
      untracked(BB) {
        return this[uB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[uB].paused
      }
      setIndex(BB, TB) {
        this.journal.setIndex(BB, TB)
      }
      getIndex(BB) {
        return this.journal.keyOf(BB)
      } [LB](BB) {
        const TB = this.journal.keyOf(BB);
        return void 0 !== TB ? this.$items.get(TB) : void 0
      } [OB](BB) {
        const TB = this.journal.keyOf(BB);
        void 0 !== TB && (this.$items.delete(TB), this.journal.keyByIndex.delete(BB))
      } [DB](BB, TB, dB) {
        let VB = null;
        if (this.$items.forEach(((yB, pB) => {
            BB.has(pB) ? dB(yB) : ((VB ??= new Set).add(pB), TB(yB, pB))
          })), null !== VB) {
          VB.forEach((BB => {
            this.$items.delete(BB), delete this.journal.indexByKey[BB]
          }));
          const BB = [];
          this.journal.keyByIndex.forEach(((TB, dB) => {
            VB.has(TB) && BB.push(dB)
          }));
          for (let TB = 0; TB < BB.length; TB++) this.journal.keyByIndex.delete(BB[TB])
        }
      } [vB]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(BB) {
        IT(this, BB)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (BB => {
          let [TB, dB] = BB;
          return [TB, "function" === typeof dB.toJSON ? dB.toJSON() : dB]
        })))
      }
      clone(BB) {
        let TB;
        return BB ? TB = Object.assign(new pV, this) : (TB = new pV, this.forEach(((BB, dB) => {
          BB[uB] ? TB.set(dB, BB.clone()) : TB.set(dB, BB)
        }))), TB
      }
    }
    tT("map", {
      constructor: pV
    });
    class lV {
      [uB];
      [JB];
      [HB];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= MT()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= MT()).priority = BB
      }
      static[gB] = Qd;
      static[oB] = bd;
      static COLLECTION_KIND = qd;
      static[kB](BB, TB, dB) {
        return !dB || "string" === typeof BB[HB] || dB.isChangeTreeVisible((BB[LB](TB) ?? BB.deletedItems[TB])[uB])
      }
      static is(BB) {
        return void 0 !== BB.collection
      }
      constructor(BB) {
        Object.defineProperty(this, uB, {
          value: new Kd(this),
          enumerable: !1,
          writable: !0
        }), this[HB] = void 0, BB && BB.forEach((BB => this.add(BB)))
      }
      static initializeForDecoder() {
        const BB = Object.create(lV.prototype);
        return BB.$items = new Map, BB.deletedItems = {}, BB.$refId = 0, BB[HB] = void 0, Id(BB), BB
      }
      add(BB) {
        const TB = this.$refId++,
          dB = this[uB];
        return this.$items.set(TB, BB), dB.isStreamCollection ? void 0 !== dB.root && wT(this, dB.root, TB) : dB.change(TB), void 0 !== BB[uB] && BB[uB].setParent(this, dB.root, TB), TB
      }
      at(BB) {
        const TB = Array.from(this.$items.keys())[BB];
        return this.$items.get(TB)
      }
      entries() {
        return this.$items.entries()
      }
      delete(BB) {
        const TB = this.$items.entries();
        let dB, VB;
        for (;
          (VB = TB.next()) && !VB.done;)
          if (BB === VB.value[1]) {
            dB = VB.value[0];
            break
          } if (void 0 === dB) return !1;
        const yB = this[uB];
        if (yB.isStreamCollection) {
          const BB = yB.root,
            TB = this.$items.get(dB);
          return void 0 !== BB && UT(this, BB, this[JB], dB), void 0 !== TB?.[uB] && BB?.remove(TB[uB]), this.deletedItems[dB] = TB, this.$items.delete(dB)
        }
        return this.deletedItems[dB] = yB.delete(dB), this.$items.delete(dB)
      }
      clear() {
        const BB = this[uB];
        BB.discard(), BB.forEachChild(((TB, dB) => {
          BB.root?.remove(TB)
        })), this.$items.clear(), BB.operation(yB.CLEAR)
      } [mB]() {
        const BB = this[uB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[mB]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, BB.recycle(), this[JB] = void 0
      }
      has(BB) {
        return Array.from(this.$items.values()).some((TB => TB === BB))
      }
      forEach(BB) {
        this.$items.forEach(((TB, dB, VB) => BB(TB, dB, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[uB].pause()
      }
      resumeTracking() {
        this[uB].resume()
      }
      untracked(BB) {
        return this[uB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[uB].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(BB, TB) {}
      getIndex(BB) {
        return BB
      } [LB](BB) {
        return this.$items.get(BB)
      } [OB](BB) {
        this.$items.delete(BB)
      } [DB](BB, TB, dB) {
        let VB = null;
        if (this.$items.forEach(((yB, pB) => {
            BB.has(pB) ? dB(yB) : ((VB ??= []).push(pB), TB(yB, pB))
          })), null !== VB)
          for (let yB = 0; yB < VB.length; yB++) this[OB](VB[yB])
      } [vB]() {
        for (const BB in this.deletedItems) delete this.deletedItems[BB]
      }
      _dropView(BB) {
        IT(this, BB)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach(((TB, dB) => {
          BB.push("function" === typeof TB.toJSON ? TB.toJSON() : TB)
        })), BB
      }
      clone(BB) {
        let TB;
        return BB ? TB = Object.assign(new lV, this) : (TB = new lV, this.forEach((BB => {
          BB[uB] ? TB.add(BB.clone()) : TB.add(BB)
        }))), TB
      }
    }
    tT("collection", {
      constructor: lV
    });
    class JV {
      [uB];
      [JB];
      [HB];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= MT()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= MT()).priority = BB
      }
      static[gB] = Qd;
      static[oB] = bd;
      static COLLECTION_KIND = Gd;
      static[kB](BB, TB, dB) {
        return !dB || "string" === typeof BB[HB] || dB.isVisible((BB[LB](TB) ?? BB.deletedItems[TB])[uB])
      }
      static is(BB) {
        return void 0 !== BB.set
      }
      constructor(BB) {
        Object.defineProperty(this, uB, {
          value: new Kd(this),
          enumerable: !1,
          writable: !0
        }), this[HB] = void 0, BB && BB.forEach((BB => this.add(BB)))
      }
      static initializeForDecoder() {
        const BB = Object.create(JV.prototype);
        return BB.$items = new Map, BB.deletedItems = {}, BB.$refId = 0, BB[HB] = void 0, Id(BB), BB
      }
      add(BB) {
        if (this.has(BB)) return !1;
        const TB = this.$refId++,
          dB = this[uB];
        return this.$items.set(TB, BB), dB.isStreamCollection ? void 0 !== dB.root && wT(this, dB.root, TB) : dB.change(TB, yB.ADD), void 0 !== BB[uB] && BB[uB].setParent(this, dB.root, TB), TB
      }
      entries() {
        return this.$items.entries()
      }
      delete(BB) {
        const TB = this.$items.entries();
        let dB, VB;
        for (;
          (VB = TB.next()) && !VB.done;)
          if (BB === VB.value[1]) {
            dB = VB.value[0];
            break
          } if (void 0 === dB) return !1;
        const yB = this[uB];
        if (yB.isStreamCollection) {
          const BB = yB.root,
            TB = this.$items.get(dB);
          return void 0 !== BB && UT(this, BB, this[JB], dB), void 0 !== TB?.[uB] && BB?.remove(TB[uB]), this.deletedItems[dB] = TB, this.$items.delete(dB)
        }
        return this.deletedItems[dB] = yB.delete(dB), this.$items.delete(dB)
      }
      clear() {
        const BB = this[uB];
        BB.discard(), this.$items.clear(), BB.operation(yB.CLEAR)
      } [mB]() {
        const BB = this[uB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[mB]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, BB.recycle(), this[JB] = void 0
      }
      has(BB) {
        const TB = this.$items.values();
        let dB, VB = !1;
        for (;
          (dB = TB.next()) && !dB.done;)
          if (BB === dB.value) {
            VB = !0;
            break
          } return VB
      }
      forEach(BB) {
        this.$items.forEach(((TB, dB, VB) => BB(TB, dB, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[uB].pause()
      }
      resumeTracking() {
        this[uB].resume()
      }
      untracked(BB) {
        return this[uB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[uB].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(BB, TB) {}
      getIndex(BB) {
        return BB
      } [LB](BB) {
        return this.$items.get(BB)
      } [OB](BB) {
        this.$items.delete(BB)
      } [DB](BB, TB, dB) {
        let VB = null;
        if (this.$items.forEach(((yB, pB) => {
            BB.has(pB) ? dB(yB) : ((VB ??= []).push(pB), TB(yB, pB))
          })), null !== VB)
          for (let yB = 0; yB < VB.length; yB++) this[OB](VB[yB])
      } [vB]() {
        for (const BB in this.deletedItems) delete this.deletedItems[BB]
      }
      _dropView(BB) {
        IT(this, BB)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach(((TB, dB) => {
          BB.push("function" === typeof TB.toJSON ? TB.toJSON() : TB)
        })), BB
      }
      clone(BB) {
        let TB;
        return BB ? TB = Object.assign(new JV, this) : (TB = new JV, this.forEach((BB => {
          BB[uB] ? TB.add(BB.clone()) : TB.add(BB)
        }))), TB
      }
    }
    tT("set", {
      constructor: JV
    });
    class YV {
      [uB];
      [JB];
      [HB];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= MT()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= MT()).priority = BB
      }
      static $isStream = !0;
      static[gB] = Qd;
      static[oB] = bd;
      static COLLECTION_KIND = xd;
      static[kB](BB, TB, dB) {
        if (!dB) return !0;
        const VB = BB[LB](TB);
        return void 0 !== VB && dB.isVisible(VB[uB])
      }
      static is(BB) {
        return BB && void 0 !== BB.stream
      }
      constructor() {
        Object.defineProperty(this, uB, {
          value: new Kd(this),
          enumerable: !1,
          writable: !0
        }), this[HB] = void 0
      }
      static initializeForDecoder() {
        const BB = Object.create(YV.prototype);
        return BB.$items = new Map, BB.$nextPosition = 0, BB._itemIndex = new Map, BB[HB] = void 0, Id(BB), BB
      }
      add(BB) {
        if (this._itemIndex.has(BB)) return -1;
        const TB = this.$nextPosition++;
        this.$items.set(TB, BB), this._itemIndex.set(BB, TB);
        const dB = this[uB].root;
        return void 0 !== BB[uB] && BB[uB].setParent(this, dB, TB), void 0 !== dB && wT(this, dB, TB), TB
      }
      remove(BB) {
        const TB = this._itemIndex.get(BB);
        if (void 0 === TB) return !1;
        this._itemIndex.delete(BB), this.$items.delete(TB);
        const dB = this[uB].root;
        return void 0 !== dB && (UT(this, dB, this[JB], TB), void 0 !== BB[uB] && dB.remove(BB[uB])), !0
      }
      has(BB) {
        return this._itemIndex.has(BB)
      }
      clear() {
        const BB = this[uB].root;
        if (void 0 !== BB) {
          ! function(BB, TB, dB) {
            const VB = BB._stream;
            if (void 0 !== VB) {
              VB.broadcastPending.clear();
              for (const BB of VB.sentBroadcast) VB.broadcastDeletes.add(BB);
              VB.sentBroadcast.clear(), TB.forEachActiveView((BB => {
                VB.pendingByView.get(BB.id)?.clear();
                const TB = VB.sentByView.get(BB.id);
                if (void 0 !== TB && TB.size > 0) {
                  let VB = BB.changes.get(dB);
                  void 0 === VB && (VB = new Map, BB.changes.set(dB, VB));
                  for (const BB of TB) VB.set(BB, yB.DELETE);
                  TB.clear()
                }
              }))
            }
          }(this, BB, this[JB]);
          for (const TB of this.$items.values()) void 0 !== TB[uB] && BB.remove(TB[uB])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(BB) {
        for (const [TB, dB] of this.$items) BB(dB, TB, this)
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
      setIndex(BB, TB) {}
      getIndex(BB) {
        return BB
      } [LB](BB) {
        return this.$items.get(BB)
      } [OB](BB) {
        const TB = this.$items.get(BB);
        void 0 !== TB && (this._itemIndex.delete(TB), this.$items.delete(BB))
      } [DB]() {} [vB]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach((TB => {
          BB.push("function" === typeof TB?.toJSON ? TB.toJSON() : TB)
        })), BB
      }
      clone(BB) {
        if (BB) {
          return Object.assign(new YV, this)
        }
        const TB = new YV;
        return TB.maxPerTick = this.maxPerTick, this.forEach((BB => {
          TB.add("function" === typeof BB?.clone ? BB.clone() : BB)
        })), TB
      }
      _dropView(BB) {
        IT(this, BB)
      }
      _unregister() {}
    }
    tT("stream", {
      constructor: YV
    });
    class gV {
      [tB] = !0;
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
        if (BB && "object" === typeof BB && void 0 !== BB.array) throw new Error(sT);
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

    function oV(BB) {
      return null != BB && !0 === BB[tB]
    }

    function kV(BB) {
      return () => new gV(BB)
    }

    function LV(BB) {
      if (oV(BB)) {
        const TB = BB._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof TB?`use the type name instead: t.array("${TB}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return BB
    }

    function OV(BB) {
      return new gV({
        quantized: ST(BB)
      })
    }
    const DV = Object.freeze({
        string: kV("string"),
        number: kV("number"),
        boolean: kV("boolean"),
        int8: kV("int8"),
        uint8: kV("uint8"),
        int16: kV("int16"),
        uint16: kV("uint16"),
        int32: kV("int32"),
        uint32: kV("uint32"),
        int64: kV("int64"),
        uint64: kV("uint64"),
        float32: kV("float32"),
        float64: kV("float64"),
        bigint64: kV("bigint64"),
        biguint64: kV("biguint64"),
        ref: BB => new gV(BB),
        array: BB => new gV({
          array: LV(BB)
        }),
        map: BB => new gV({
          map: LV(BB)
        }),
        set: BB => new gV({
          set: LV(BB)
        }),
        collection: BB => new gV({
          collection: LV(BB)
        }),
        stream: BB => {
          const TB = new gV({
            stream: LV(BB)
          });
          return TB._stream = !0, TB
        },
        quantized: OV,
        angle: BB => OV({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: BB?.bits ?? 16
        })
      }),
      uV = -1;

    function HV(BB) {
      return ZT.register(BB), BB
    }

    function EV() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uV;
      return function(TB, dB) {
        const VB = xT.initialize(TB.constructor);
        xT.setTag(VB, dB, BB)
      }
    }

    function vV(BB, TB) {
      const dB = xT.initialize(BB.constructor);
      xT.setUnreliable(dB, TB)
    }

    function mV(BB, TB) {
      const dB = xT.initialize(BB.constructor);
      xT.setPatchOnly(dB, TB)
    }

    function iV(BB, TB) {
      const dB = xT.initialize(BB.constructor);
      xT.setFullStateOnly(dB, TB)
    }

    function NV(BB, TB) {
      return function(dB, VB) {
        const yB = dB.constructor;
        if (!BB) throw new Error(`${yB.name}: @type() reference provided for "${VB}" is undefined. Make sure you don't have any circular dependencies.`);
        BB = WT(BB, `${yB.name}.${VB}`), ZT.register(yB);
        const pB = Object.getPrototypeOf(yB)[Symbol.metadata],
          lB = xT.initialize(yB);
        let JB = lB[VB];
        if (void 0 !== lB[JB]) {
          if (lB[JB].deprecated) return;
          if (void 0 !== lB[JB].type) {
            const BB = new Error(`@colyseus/schema: Duplicate '${VB}' definition on '${yB.name}'.\nCheck @type() annotation`);
            throw new Error(`${BB.message} ${BB.stack.split("\n")[4].trim()}`)
          }
        } else JB = lB[zB] ?? (pB && pB[zB]) ?? -1, JB++;
        if (TB && TB.manual) xT.addField(lB, JB, VB, BB, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: TB,
            childType: dB
          } = XT(BB);
          xT.addField(lB, JB, VB, BB, fV(VB, JB, dB, TB))
        }
        lB[fB][VB] && Object.defineProperty(dB, VB, lB[fB][VB]), ("string" === typeof BB || PT(BB)) && (lB[MB] || Object.defineProperty(lB, MB, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), lB[MB][JB] = "string" === typeof BB ? TT[BB] : aT(BB.quantized))
      }
    }
    const tV = {
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

    function fV(BB, TB, dB, VB) {
      let pB;
      return pB = VB ? function(BB, TB, dB, VB) {
        const pB = VB.constructor === VV,
          lB = VB.constructor === pV;
        return function(BB) {
          const VB = this[NB],
            JB = VB[TB];
          if (BB !== JB) {
            if (void 0 !== BB && null !== BB) {
              if (!pB || BB instanceof VV)
                if (!lB || BB instanceof pV) BB[HB] = dB;
                else {
                  const TB = new pV;
                  if (TB[HB] = dB, BB instanceof Map) BB.forEach(((BB, dB) => TB.set(dB, BB)));
                  else
                    for (const dB in BB) TB.set(dB, BB[dB]);
                  BB = TB
                }
              else {
                const TB = new VV;
                TB[HB] = dB, TB.push(...BB), BB = TB
              }
              const VB = this[uB],
                gB = this.constructor;
              void 0 !== JB && null !== JB && JB[uB] ? (VB.root?.remove(JB[uB]), gB[YB](VB, TB, yB.DELETE_AND_ADD)) : gB[YB](VB, TB, yB.ADD), BB[uB]?.setParent(this, VB.root, TB)
            } else void 0 !== JB && null !== JB && this[uB].delete(TB);
            VB[TB] = BB
          }
        }
      }(0, TB, dB, VB) : "string" === typeof dB ? function(BB, TB, dB) {
        const VB = tV[dB],
          pB = "string" === dB,
          lB = "boolean" === dB;
        return function(dB) {
          const JB = this[NB],
            gB = JB[TB];
          if (dB !== gB) {
            if (void 0 !== dB && null !== dB) {
              if (!lB && void 0 !== VB && typeof dB !== VB && (!pB || null !== dB)) {
                const TB = dB && dB.constructor ? ` (${dB.constructor.name})` : "";
                throw new ed(`a '${VB}' was expected, but '${JSON.stringify(dB)}'${TB} was provided in ${this.constructor.name}#${BB}`)
              }
              this.constructor[YB](this[uB], TB, yB.ADD)
            } else void 0 !== gB && null !== gB && this[uB].delete(TB);
            JB[TB] = dB
          }
        }
      }(BB, TB, dB) : PT(dB) ? function(BB, TB, dB) {
        return function(VB) {
          const pB = this[NB],
            lB = pB[TB];
          if (void 0 !== VB && null !== VB) {
            if ("number" !== typeof VB) throw new ed(`a 'number' was expected, but '${JSON.stringify(VB)}' was provided in ${this.constructor.name}#${BB}`);
            if ((VB = RT(dB, QT(dB, VB))) === lB) return;
            this.constructor[YB](this[uB], TB, yB.ADD)
          } else {
            if (VB === lB) return;
            void 0 !== lB && null !== lB && this[uB].delete(TB)
          }
          pB[TB] = VB
        }
      }(BB, TB, dB.quantized) : function(BB, TB, dB) {
        return function(VB) {
          const pB = this[NB],
            lB = pB[TB];
          if (VB !== lB) {
            if (void 0 !== VB && null !== VB) {
              BV(VB, dB, this, BB);
              const pB = this[uB],
                JB = this.constructor;
              void 0 !== lB && null !== lB && lB[uB] ? (pB.root?.remove(lB[uB]), JB[YB](pB, TB, yB.DELETE_AND_ADD)) : JB[YB](pB, TB, yB.ADD), VB[uB]?.setParent(this, pB.root, TB)
            } else void 0 !== lB && null !== lB && this[uB].delete(TB);
            pB[TB] = VB
          }
        }
      }(BB, TB, dB), {
        get: function() {
          return this[NB][TB]
        },
        set: pB,
        enumerable: !0,
        configurable: !0
      }
    }

    function sV() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(TB, dB) {
        const VB = xT.initialize(TB.constructor);
        xT.setDeprecated(VB, dB), BB && (VB[fB] ??= {}, VB[fB][dB] = {
          get: function() {
            throw new Error(`${dB} is deprecated.`)
          },
          set: function(BB) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(TB, dB, VB[fB][dB]))
      }
    }
    let MV = !1;

    function zV(BB, TB, dB) {
      MV || (MV = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let VB in TB) NV(TB[VB], dB)(BB.prototype, VB);
      return BB
    }

    function wV(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FV;
      if (null == BB || "object" !== typeof BB) throw new Error(`schema(): first argument must be a fields object (got ${typeof BB}).`);
      const VB = {},
        yB = {},
        pB = {},
        lB = {},
        JB = (BB, TB) => {
          if (TB.hasDefault)((BB, TB) => {
            "function" === typeof TB ? lB[BB] = TB : TB && "function" === typeof TB.clone ? lB[BB] = () => TB.clone() : pB[BB] = TB
          })(BB, TB.default);
          else if (!TB.optional) {
            const dB = function(BB) {
              if (BB && "object" === typeof BB) {
                if (void 0 !== BB.array) return () => new VV;
                if (void 0 !== BB.map) return () => new pV;
                if (void 0 !== BB.set) return () => new JV;
                if (void 0 !== BB.collection) return () => new lV;
                if (void 0 !== BB.stream) return () => new YV
              } else if ("function" === typeof BB && FV.is(BB) && (!BB.prototype.initialize || 0 === BB.prototype.initialize.length)) return () => new BB
            }(TB.type);
            dB && (lB[BB] = dB)
          }
        },
        YB = {},
        gB = [],
        oB = [],
        kB = {},
        LB = [],
        OB = [],
        DB = {},
        uB = [];
      for (const NB in BB) {
        const dB = BB[NB],
          pB = `schema(${TB?`'${TB}'`:""}): field '${NB}'`;
        if (oV(dB)) {
          const BB = dB.toDefinition();
          if (BB.noSync) {
            if (void 0 !== BB.view || BB.unreliable || BB.patchOnly || BB.fullStateOnly || BB.stream) throw new Error(`${pB} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            JB(NB, BB);
            continue
          }
          if (BB.patchOnly && BB.fullStateOnly) throw new Error(`${pB} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const TB = WT(BB.type, pB);
          if ("function" === typeof TB && !FV.is(TB)) throw new Error(`${pB} is a synced ref to non-Schema class '${TB.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          VB[NB] = TB, void 0 !== BB.view && (YB[NB] = BB.view), BB.unreliable && gB.push(NB), BB.patchOnly && oB.push(NB), BB.deprecated && (kB[NB] = BB.deprecatedThrows), BB.fullStateOnly && LB.push(NB), BB.stream && OB.push(NB), void 0 !== BB.streamPriority && (DB[NB] = BB.streamPriority), BB.optional && uB.push(NB), JB(NB, BB)
        } else {
          if ("function" !== typeof dB) throw new Error(`${pB} must be a t.* builder, Schema subclass, or method (got ${typeof dB}).`);
          FV.is(dB) ? (VB[NB] = dB, dB.prototype.initialize && 0 !== dB.prototype.initialize.length || (lB[NB] = () => new dB)) : yB[NB] = dB
        }
      }
      const HB = BB => {
          for (const TB in pB) BB[TB] = pB[TB];
          for (const TB in lB) BB[TB] = lB[TB]()
        },
        EB = () => {
          const BB = {};
          return HB(BB), BB
        },
        vB = "function" === typeof yB.initialize,
        mB = yB.initialize ?? dB._initialize,
        iB = class extends dB {
          constructor() {
            for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
            const yB = TB[0];
            void 0 === yB ? (super(), HB(this)) : super(Object.assign(EB(), vB ? (BB => {
              const TB = Object.keys(VB),
                dB = {};
              for (const VB in BB) TB.includes(VB) || (dB[VB] = BB[VB]);
              return dB
            })(yB) : yB)), mB && new.target === iB && mB.apply(this, TB)
          }
        };
      TB && Object.defineProperty(iB, "name", {
        value: TB
      }), xT.setFields(iB, VB), iB._getDefaultValues = EB, iB._initialize = mB, Object.assign(iB.prototype, yB);
      for (const NB in YB) EV(YB[NB])(iB.prototype, NB);
      for (const NB of gB) vV(iB.prototype, NB);
      for (const NB of oB) mV(iB.prototype, NB);
      for (const NB in kB) sV(kB[NB])(iB.prototype, NB);
      if (LB.length > 0 || OB.length > 0) {
        const BB = iB[Symbol.metadata];
        for (const TB of LB) xT.setFullStateOnly(BB, TB);
        for (const TB of OB) xT.setStream(BB, TB);
        for (const TB in DB) xT.setStreamPriority(BB, TB, DB[TB])
      }
      if (uB.length > 0) {
        const BB = iB[Symbol.metadata];
        for (const TB of uB) BB[BB[TB]].optional = !0
      }
      return iB.extend = (BB, TB) => wV(BB, TB, iB), iB
    }

    function UV(BB) {
      const TB = BB[uB].root,
        dB = {
          ops: {},
          refs: []
        };
      let VB = TB.changes.next;
      for (; VB;) {
        const BB = VB.changeTree;
        void 0 !== BB ? (dB.refs.push(`refId#${BB.ref[JB]}`), BB.forEach(((BB, TB) => {
          if (BB < 0 || !TB) return;
          const VB = yB[TB];
          dB.ops[VB] || (dB.ops[VB] = 0), dB.ops[VB]++
        })), VB = VB.next) : VB = VB.next
      }
      return dB
    }
    class FV {
      static[gB] = Sd;
      static[oB] = Ad;
      [JB];
      [NB];
      static initialize(BB) {
        Object.defineProperty(BB, uB, {
          value: new Kd(BB),
          enumerable: !1,
          writable: !0
        }), BB[NB] = []
      }
      static initializeForDecoder() {
        const BB = Object.create(this.prototype);
        return Id(BB), BB[NB] = [], BB
      }
      static reset(BB) {
        const TB = BB?.[uB];
        if (void 0 === TB || "function" !== typeof TB.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== TB.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${BB.constructor.name}) with multiple parents.`);
        BB[mB]()
      } [mB]() {
        const BB = this.constructor[Symbol.metadata],
          TB = BB?.[wB] ?? [],
          dB = this[NB];
        for (let VB = 0; VB < TB.length; VB++) {
          const BB = dB[TB[VB]];
          BB?.[mB]?.()
        }
        this[uB].recycle(), this[JB] = void 0
      }
      static is(BB) {
        const TB = BB[Symbol.metadata];
        return "object" === typeof TB && null !== TB
      }
      static isSchema(BB) {
        return "function" === typeof BB?.assign
      }
      static[YB](BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yB.ADD;
        BB.change(TB, dB)
      }
      static[kB](BB, TB, dB) {
        const VB = BB.constructor[Symbol.metadata],
          yB = VB[TB]?.tag;
        return void 0 === dB ? void 0 === yB : void 0 === yB || (yB === uV ? dB.isChangeTreeVisible(BB[uB]) : dB.hasTagOnTree(BB[uB], yB))
      }
      constructor(BB) {
        FV.initialize(this), BB && FV.assignProps(this, BB)
      }
      assign(BB) {
        return FV.assignProps(this, BB), this
      }
      static assignProps(BB, TB) {
        const dB = BB.constructor[Symbol.metadata];
        if (dB && void 0 !== dB[zB])
          for (let yB = 0; yB <= dB[zB]; yB++) {
            const VB = dB[yB];
            if (!VB) continue;
            const pB = TB[VB.name];
            void 0 !== pB && (BB[VB.name] = pB)
          }
        const VB = Object.keys(TB);
        for (let yB = 0; yB < VB.length; yB++) {
          const pB = VB[yB];
          dB && void 0 !== dB[pB] || (BB[pB] = TB[pB])
        }
      }
      restore(BB) {
        const TB = this.constructor[Symbol.metadata];
        for (const dB in TB) {
          const VB = TB[dB],
            yB = VB.name,
            pB = VB.type,
            lB = BB[yB];
          if (void 0 !== lB && null !== lB)
            if ("string" === typeof pB) this[yB] = lB;
            else if (FV.is(pB)) {
            const BB = new pB;
            BB.restore(lB), this[yB] = BB
          } else if ("object" === typeof pB) {
            const BB = Object.keys(pB)[0],
              TB = pB[BB];
            if ("map" === BB) {
              const BB = this[yB];
              for (const dB in lB)
                if (FV.is(TB)) {
                  const VB = new TB;
                  VB.restore(lB[dB]), BB.set(dB, VB)
                } else BB.set(dB, lB[dB])
            } else if ("array" === BB) {
              const BB = this[yB];
              for (let dB = 0; dB < lB.length; dB++)
                if (FV.is(TB)) {
                  const VB = new TB;
                  VB.restore(lB[dB]), BB.push(VB)
                } else BB.push(lB[dB])
            }
          }
        }
        return this
      }
      setDirty(BB, TB) {
        const dB = this.constructor[Symbol.metadata];
        this[uB].change(dB[dB[BB]].index, TB)
      }
      pauseTracking() {
        this[uB].pause()
      }
      resumeTracking() {
        this[uB].resume()
      }
      untracked(BB) {
        return this[uB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[uB].paused
      }
      clone() {
        const BB = Object.create(this.constructor.prototype);
        FV.initialize(BB);
        const TB = this.constructor[Symbol.metadata];
        for (const dB in TB) {
          const VB = TB[dB].name;
          "object" === typeof this[VB] && "function" === typeof this[VB]?.clone ? BB[VB] = this[VB].clone() : BB[VB] = this[VB]
        }
        return BB
      }
      toJSON() {
        const BB = {},
          TB = this.constructor[Symbol.metadata];
        for (const dB in TB) {
          const VB = TB[dB],
            yB = VB.name;
          VB.deprecated || null === this[yB] || "undefined" === typeof this[yB] || (BB[yB] = "function" === typeof this[yB].toJSON ? this[yB].toJSON() : this[yB])
        }
        return BB
      }
      discardAllChanges() {
        this[uB].discardAll()
      } [LB](BB) {
        return this[this.constructor[Symbol.metadata][BB].name]
      } [OB](BB) {
        this[this.constructor[Symbol.metadata][BB].name] = void 0
      }
      static debugRefIds(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 ? arguments[3] : void 0,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const pB = TB ? ` - ${JSON.stringify(BB.toJSON())}` : "",
          lB = BB[uB],
          YB = BB[JB],
          gB = VB ? VB.root.refCount[YB] : lB.refCount,
          oB = gB > 1 ? ` [\xd7${gB}]` : "";
        let kB = `${function(BB){return new Array(BB).fill(0).map(((TB,dB)=>dB===BB-1?"\u2514\u2500 ":"   ")).join("")}(dB)}${yB}${BB.constructor.name} (refId: ${YB})${oB}${pB}\n`;
        return lB.forEachChild(((yB, pB) => {
          let lB = pB;
          "number" === typeof pB && BB.$indexes && (lB = BB.$indexes.get(pB) ?? pB);
          const JB = void 0 !== BB.forEach && void 0 !== lB ? `["${lB}"]: ` : "";
          kB += this.debugRefIds(yB.ref, TB, dB + 1, VB, JB)
        })), kB
      }
      static debugRefIdEncodingOrder(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const dB = [],
          VB = BB[uB];
        if ("changes" === TB) {
          let BB = VB.root.changes?.next;
          for (; BB;) BB.changeTree && dB.push(BB.changeTree.ref[JB]), BB = BB.next;
          return dB
        }
        const yB = "allFilteredChanges" === TB,
          pB = new Set,
          lB = BB => {
            pB.has(BB) || (pB.add(BB), BB.isFiltered === yB && dB.push(BB.ref[JB]), BB.forEachChild(((BB, TB) => lB(BB))))
          };
        return lB(VB), dB
      }
      static debugRefIdsFromDecoder(BB) {
        return this.debugRefIds(BB.state, !1, 0, BB)
      }
      static debugChanges(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = BB[uB],
          VB = TB ? "allChanges" : "changes";
        let pB = `${BB.constructor.name} (${BB[JB]}) -> .${VB}:\n`;
        return TB ? dB.forEachLive((BB => {
          pB += `- [${BB}]: ADD (${JSON.stringify(dB.getValue(Number(BB),!0))})\n`
        })) : dB.forEach(((BB, TB) => {
          BB < 0 || !TB || (pB += `- [${BB}]: ${yB[TB]} (${JSON.stringify(dB.getValue(Number(BB),!1))})\n`)
        })), pB
      }
    }
    pB(FV);
    const KV = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class rV {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const BB = {};
        for (const TB in this.changeTrees) BB[TB] = this.changeTrees[TB].refCount;
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
        this.types.hasFilters && (BB.flags & Ud || (BB.flags |= Ud, this.pendingFilterRefresh.push(BB)))
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
        const TB = BB.id;
        for (const dB of this.streamTrees) dB._dropView(TB)
      }
      forEachActiveView(BB) {
        for (const [TB, dB] of this.activeViews) {
          const VB = dB.deref();
          if (void 0 !== VB) BB(VB);
          else {
            this.activeViews.delete(TB);
            for (const BB of this.streamTrees) BB._dropView(TB)
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
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = BB, this.nextUniqueId = TB
      }
      add(BB) {
        const TB = BB.ref;
        void 0 === TB[JB] && (KV.value = this.nextUniqueId++, Object.defineProperty(TB, JB, KV));
        const dB = TB[JB],
          VB = void 0 === this.changeTrees[dB];
        VB && (this.changeTrees[dB] = BB), BB.needsRestage && (BB.needsRestage = !1, BB.forEachLiveWithCtx(BB, dd));
        const yB = VB ? 0 : BB.refCount;
        return BB.refCount = yB + 1, yB > 0 && this.enqueueFilterRefresh(BB), VB
      }
      remove(BB) {
        const TB = BB.refCount - 1;
        if (TB <= 0) {
          if (BB.root = void 0, delete this.changeTrees[BB.ref[JB]], BB.isStreamCollection) {
            const TB = BB.ref;
            TB._unregister?.(), this.unregisterStream(TB)
          }
          this.removeFromQueue(BB), this.removeFromUnreliableQueue(BB), BB.refCount = 0, BB.needsRestage = !0, BB.forEachChild(((TB, dB) => {
            TB.removeParent(BB.ref) && (void 0 === TB.parentRef || TB.refCount > 0 ? this.remove(TB) : this.moveNextToParent(TB))
          }))
        } else BB.refCount = TB, this.enqueueFilterRefresh(BB), this.recursivelyMoveNextToParent(BB);
        return TB
      }
      recursivelyMoveNextToParent(BB) {
        this.moveNextToParent(BB), BB.forEachChild(((BB, TB) => this.recursivelyMoveNextToParent(BB)))
      }
      moveNextToParent(BB) {
        BB.changesNode && this._moveNextToParentInList(this.changes, BB, BB.changesNode, "changesNode"), BB.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, BB, BB.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(BB, TB, dB, VB) {
        const yB = TB.parent;
        if (!yB || !yB[uB]) return;
        const pB = yB[uB][VB];
        pB && pB !== dB && (dB.position > pB.position || (dB.prev ? dB.prev.next = dB.next : BB.next = dB.next, dB.next ? dB.next.prev = dB.prev : BB.tail = dB.prev, dB.prev = BB.tail, dB.next = void 0, BB.tail.next = dB, BB.tail = dB, dB.position = BB.nextPosition++))
      }
      enqueueChangeTree(BB) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.changesNode) || (BB.changesNode = this._appendToList(this.changes, BB))
      }
      enqueueUnreliable(BB) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.unreliableChangesNode) || (BB.unreliableChangesNode = this._appendToList(this.unreliableChanges, BB))
      }
      _appendToList(BB, TB) {
        const dB = this._nodePool;
        let VB;
        return dB.length > 0 ? (VB = dB.pop(), VB.changeTree = TB, VB.next = void 0, VB.prev = void 0) : VB = {
          changeTree: TB,
          next: void 0,
          prev: void 0,
          position: 0
        }, BB.next ? (VB.prev = BB.tail, BB.tail.next = VB, BB.tail = VB) : (BB.nextPosition = 0, BB.next = VB, BB.tail = VB), VB.position = BB.nextPosition++, VB
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
      _removeNode(BB, TB, dB, VB) {
        return !(!dB || dB.changeTree !== TB) && (dB.prev ? dB.prev.next = dB.next : BB.next = dB.next, dB.next ? dB.next.prev = dB.prev : BB.tail = dB.prev, TB[VB] = void 0, this.releaseNode(dB), !0)
      }
    }

    function IV(BB, TB) {
      if (-1 === TB || TB >= BB.length) return !1;
      const dB = BB.length - 1;
      for (let VB = TB; VB < dB; VB++) BB[VB] = BB[VB + 1];
      return BB.length = dB, !0
    }

    function cV(BB, TB, dB) {
      const VB = ~dB,
        yB = BB.changeTrees;
      for (const pB in yB) {
        const BB = yB[pB],
          dB = BB.visibleViews;
        void 0 !== dB && TB < dB.length && (dB[TB] &= VB);
        const lB = BB.subscribedViews;
        void 0 !== lB && TB < lB.length && (lB[TB] &= VB);
        const JB = BB.tagViews;
        void 0 !== JB && JB.forEach((BB => {
          TB < BB.length && (BB[TB] &= VB)
        }))
      }
    }
    const SV = new FinalizationRegistry((BB => {
      let {
        root: TB,
        id: dB,
        slot: VB,
        bit: yB
      } = BB;
      cV(TB, VB, yB), TB.activeViews.delete(dB);
      for (const pB of TB.streamTrees) pB._dropView(dB);
      TB.releaseViewId(dB)
    }));

    function PV(BB) {
      if (void 0 === BB) return "undefined";
      if (null === BB) return "null";
      const TB = typeof BB;
      return "string" === TB ? JSON.stringify(BB.length > 30 ? `${BB.slice(0,30)}\u2026` : BB) : "object" !== TB && "function" !== TB ? `${TB} ${String(BB)}` : Array.isArray(BB) ? `Array(${BB.length})` : BB.constructor?.name ?? "Object"
    }
    class QV {
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
        void 0 === this._root && (this._root = BB, this.id = BB.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), BB.registerView(this), SV.register(this, {
          root: BB,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), cV(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), SV.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(BB) {
        const TB = BB.visibleViews,
          dB = this._slot;
        return void 0 !== TB && dB < TB.length && 0 !== (TB[dB] & this._bit)
      }
      markVisible(BB) {
        const TB = this._slot;
        let dB = BB.visibleViews;
        for (void 0 === dB && (dB = BB.visibleViews = []); dB.length <= TB;) dB.push(0);
        dB[TB] |= this._bit
      }
      unmarkVisible(BB) {
        const TB = BB.visibleViews;
        if (void 0 === TB) return;
        const dB = this._slot;
        dB < TB.length && (TB[dB] &= ~this._bit)
      }
      isSubscribed(BB) {
        const TB = BB.subscribedViews,
          dB = this._slot;
        return void 0 !== TB && dB < TB.length && 0 !== (TB[dB] & this._bit)
      }
      _setSubscribed(BB) {
        const TB = this._slot;
        let dB = BB.subscribedViews;
        for (void 0 === dB && (dB = BB.subscribedViews = []); dB.length <= TB;) dB.push(0);
        dB[TB] |= this._bit
      }
      _clearSubscribed(BB) {
        const TB = BB.subscribedViews;
        if (void 0 === TB) return;
        const dB = this._slot;
        dB < TB.length && (TB[dB] &= ~this._bit)
      }
      hasTagOnTree(BB, TB) {
        const dB = BB.tagViews;
        if (void 0 === dB) return !1;
        const VB = this._slot,
          yB = this._bit;
        for (let pB = TB; 0 !== pB; pB &= pB - 1) {
          const BB = dB.get(pB & -pB);
          if (void 0 !== BB && VB < BB.length && 0 !== (BB[VB] & yB)) return !0
        }
        return !1
      }
      addTag(BB, TB) {
        if (TB === uV) return;
        let dB = BB.tagViews;
        void 0 === dB && (dB = BB.tagViews = new Map);
        const VB = this._slot,
          yB = this._bit;
        for (let pB = TB; pB > 0; pB &= pB - 1) {
          const BB = pB & -pB;
          let TB = dB.get(BB);
          for (void 0 === TB && (TB = [], dB.set(BB, TB)); TB.length <= VB;) TB.push(0);
          TB[VB] |= yB
        }
      }
      removeTag(BB, TB) {
        if (TB === uV) return;
        const dB = BB.tagViews;
        if (void 0 === dB) return;
        const VB = this._slot,
          yB = ~this._bit;
        for (let pB = TB; pB > 0; pB &= pB - 1) {
          const BB = dB.get(pB & -pB);
          void 0 !== BB && VB < BB.length && (BB[VB] &= yB)
        }
      }
      removeAllTagsOnTree(BB) {
        const TB = BB.tagViews;
        if (void 0 === TB) return;
        const dB = this._slot,
          VB = ~this._bit;
        TB.forEach((BB => {
          dB < BB.length && (BB[dB] &= VB)
        }))
      }
      add(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uV,
          dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(BB, TB, dB, !1)
      }
      _addImmediate(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uV;
        this._add(BB, TB, !0, !0)
      }
      _add(BB, TB, dB, VB) {
        const pB = BB?.[uB];
        if (!pB) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${PV(BB)}`), !1;
        const lB = pB.parent;
        if (!lB && 0 !== BB[JB]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${pB.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== pB.root && this._bindRoot(pB.root);
        const YB = lB?.[uB];
        if (!VB && YB?.isStreamCollection) return rT(lB, this.id, pB.parentIndex), !0;
        const gB = BB.constructor[Symbol.metadata],
          oB = this.isVisible(pB);
        if (!this.iterable || !dB || oB && -1 !== this.items.indexOf(BB) || this.items.push(BB), this.markVisible(pB), dB && lB && this.addParentOf(pB, TB), !VB && pB.isStreamCollection) return !0;
        if (TB === uV && pB.isNew) return this._markSubtreeVisible(pB, TB), !1;
        let kB = this.changes.get(BB[JB]);
        void 0 === kB && (kB = new Map, this.changes.set(BB[JB], kB));
        let LB = !1;
        const OB = pB.encDescriptor.tags;
        if (pB.forEachChild(((BB, dB) => {
            const VB = OB[dB];
            if (void 0 !== VB) {
              if (!(VB === uV || TB !== uV && 0 !== (VB & TB))) return
            }
            this.add(BB.ref, TB, !1) && (LB = !0)
          })), TB !== uV) {
          this.addTag(pB, TB);
          const BB = gB?.[FB];
          if (void 0 !== BB)
            for (let dB = TB; dB > 0; dB &= dB - 1) BB[dB & -dB]?.forEach((BB => {
              pB.getChange(BB) !== yB.DELETE && kB.set(BB, yB.ADD)
            }))
        }
        if ((TB === uV || !oB) && (!pB.isNew || LB))
          if (pB.isArray && "string" !== typeof pB.refTarget[HB]) pB.refTarget.items.length > 0 && (kB.set(-1, yB.ADD), LB = !0);
          else {
            const BB = pB.encDescriptor.tags;
            pB.forEachLive((dB => {
              const VB = BB[dB];
              (void 0 === VB || VB === uV || TB !== uV && 0 !== (VB & TB)) && (kB.set(dB, yB.ADD), LB = !0)
            }))
          } return LB
      }
      _markSubtreeVisible(BB, TB) {
        const dB = BB.encDescriptor.tags;
        BB.forEachChild(((BB, VB) => {
          const yB = dB[VB];
          if (void 0 !== yB) {
            if (!(yB === uV || TB !== uV && 0 !== (yB & TB))) return
          }
          BB.isNew ? (this.markVisible(BB), this._markSubtreeVisible(BB, TB)) : this._add(BB.ref, TB, !1, !1)
        }))
      }
      addParentOf(BB, TB) {
        const dB = BB.parent[uB],
          VB = BB.parentIndex;
        this.isVisible(dB) || this.markVisible(dB);
        const pB = dB.parent?.[uB];
        if (pB && this.addParentOf(dB, TB), dB.hasFilteredFields && dB.getChange(VB) !== yB.DELETE) {
          let pB = this.changes.get(dB.ref[JB]);
          void 0 === pB && (pB = new Map, this.changes.set(dB.ref[JB], pB));
          const lB = dB.encDescriptor.tags[VB];
          void 0 !== lB && lB !== uV && 0 !== (lB & TB) && this.addTag(dB, TB), pB.set(dB.isArray ? BB : VB, yB.ADD)
        }
      }
      _touchAncestorsOf(BB) {
        let TB = BB.parent?.[uB];
        if (void 0 === TB) return;
        const dB = [];
        for (; void 0 !== TB;) {
          if (TB.hasFilteredFields) {
            const BB = TB.ref[JB];
            if (this.changes.has(BB)) break;
            dB.push(TB)
          }
          TB = TB.parent?.[uB]
        }
        for (let VB = dB.length - 1; VB >= 0; VB--) this.changes.set(dB[VB].ref[JB], new Map)
      }
      remove(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uV,
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = BB?.[uB];
        if (!VB) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${PV(BB)}`), this;
        const pB = VB.parent?.[uB];
        if (pB?.isStreamCollection) return this.unmarkVisible(VB), this.iterable && !dB && IV(this.items, this.items.indexOf(BB)),
          function(BB, TB, dB, VB, pB) {
            const lB = BB._stream;
            if (void 0 === lB) return !1;
            const JB = lB.pendingByView.get(TB);
            if (JB?.has(VB)) return JB.delete(VB), !1;
            const YB = lB.sentByView.get(TB);
            if (YB?.has(VB)) {
              YB.delete(VB);
              let BB = pB.get(dB);
              return void 0 === BB && (BB = new Map, pB.set(dB, BB)), BB.set(VB, yB.DELETE), !0
            }
          }(VB.parent, this.id, VB.parent[JB], VB.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(VB), this;
        if (VB.isStreamCollection) {
          this.unmarkVisible(VB), this.iterable && !dB && IV(this.items, this.items.indexOf(BB));
          const TB = VB.ref,
            pB = TB._stream;
          if (void 0 !== pB) {
            pB.pendingByView.get(this.id)?.clear();
            const BB = pB.sentByView.get(this.id);
            if (void 0 !== BB && BB.size > 0) {
              const dB = TB[JB];
              let VB = this.changes.get(dB);
              void 0 === VB && (VB = new Map, this.changes.set(dB, VB));
              for (const TB of BB) VB.set(TB, yB.DELETE);
              BB.clear()
            }
          }
          return this
        }
        this.unmarkVisible(VB), this.iterable && !dB && IV(this.items, this.items.indexOf(BB));
        const lB = VB.ref,
          YB = lB.constructor[Symbol.metadata],
          gB = lB[JB];
        this._touchAncestorsOf(VB);
        let oB = this.changes.get(gB);
        if (void 0 === oB && (oB = new Map, this.changes.set(gB, oB)), TB === uV) {
          const BB = VB.parent;
          if (BB && !xT.isValidInstance(BB) && VB.isFiltered) {
            const TB = pB.isArray ? VB : VB.parentIndex,
              dB = BB[JB];
            let lB = this.changes.get(dB);
            void 0 === lB ? (lB = new Map, this.changes.set(dB, lB)) : lB.get(TB) === yB.ADD && this._dropPendingEntries(VB), lB.set(TB, yB.DELETE), this._recursiveDeleteVisibleChangeTree(VB)
          } else YB?.[UB]?.forEach((BB => this._removeViewField(VB, oB, BB)))
        } else {
          const BB = YB?.[FB];
          if (void 0 !== BB)
            for (let dB = TB; dB > 0; dB &= dB - 1) BB[dB & -dB]?.forEach((BB => this._removeViewField(VB, oB, BB)))
        }
        return void 0 === TB ? this.removeAllTagsOnTree(VB) : this.removeTag(VB, TB), this
      }
      has(BB) {
        return this.isVisible(BB[uB])
      }
      hasTag(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uV;
        return this.hasTagOnTree(BB[uB], TB)
      }
      subscribe(BB, TB) {
        const dB = BB?.[uB];
        if (!dB) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${PV(BB)}`), this;
        if (void 0 === this._root && void 0 !== dB.root && this._bindRoot(dB.root), void 0 !== TB)
          if (dB.isStreamCollection) {
            const dB = zT(BB);
            null === TB ? dB.priorityByView?.delete(this.id) : (dB.priorityByView ??= new Map).set(this.id, TB)
          } else {
            const TB = BB?.constructor?.name ?? "collection",
              VB = dB.parent;
            if (void 0 === VB) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${TB} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const BB = VB?.constructor?.[Symbol.metadata]?.[dB.parentIndex]?.name,
                yB = BB ? `${VB.constructor.name}#${BB}` : TB;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${yB} is a ${TB}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(dB)) return this;
        const VB = void 0 !== dB.parent && !this.isVisible(dB);
        if (VB ? (this.addParentOf(dB, uV), this._add(BB, uV, !1, !1)) : this.markVisible(dB), this._setSubscribed(dB), dB.isStreamCollection) {
          const TB = BB;
          dB.forEachChild(((BB, dB) => {
            rT(TB, this.id, dB)
          }))
        } else VB || dB.forEachChild((BB => {
          this.markVisible(BB)
        }));
        return this
      }
      unsubscribe(BB) {
        const TB = BB?.[uB];
        if (!TB) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${PV(BB)}`), this;
        if (!this.isSubscribed(TB)) return this;
        this._clearSubscribed(TB);
        const dB = TB.ref[JB];
        if (TB.isStreamCollection) {
          const TB = BB._stream;
          if (void 0 !== TB) {
            TB.pendingByView.get(this.id)?.clear();
            const BB = TB.sentByView.get(this.id);
            if (void 0 !== BB && BB.size > 0) {
              let TB = this.changes.get(dB);
              void 0 === TB && (TB = new Map, this.changes.set(dB, TB));
              for (const dB of BB) TB.set(dB, yB.DELETE);
              BB.clear()
            }
          }
        } else {
          const BB = TB.isArray;
          let VB = this.changes.get(dB);
          TB.forEachChild(((TB, pB) => {
            void 0 === VB && (VB = new Map, this.changes.set(dB, VB)), VB.set(BB ? TB : pB, yB.DELETE), this.unmarkVisible(TB)
          }))
        }
        return this.unmarkVisible(TB), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let BB = 0, TB = this.items.length; BB < TB; BB++) this.remove(this.items[BB], uV, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(BB) {
        let TB = this.isVisible(BB);
        if (!TB && BB.isVisibilitySharedWithParent)
          if (this.isVisible(BB.parent[uB])) this.markVisible(BB), TB = !0;
          else
            for (let dB = BB.extraParents; void 0 !== dB; dB = dB.next) {
              const VB = dB.ref[uB];
              if (VB.isFiltered && this.isVisible(VB)) {
                this.markVisible(BB), TB = !0;
                break
              }
            }
        return TB
      }
      _recursiveDeleteVisibleChangeTree(BB) {
        BB.forEachChild((BB => {
          this.unmarkVisible(BB), this._recursiveDeleteVisibleChangeTree(BB)
        }))
      }
      _dropPendingEntries(BB) {
        this.changes.delete(BB.ref[JB]), BB.forEachChild((BB => this._dropPendingEntries(BB)))
      }
      _removeViewField(BB, TB, dB) {
        const VB = TB.get(dB) === yB.ADD;
        TB.set(dB, yB.DELETE);
        const pB = BB.ref[BB.encDescriptor.names[dB]],
          lB = pB?.[uB];
        lB && (this.unmarkVisible(lB), this._recursiveDeleteVisibleChangeTree(lB), VB && this._dropPendingEntries(lB))
      }
    }

    function RV(BB) {
      BB.structSwitchEmitted || (BB.shouldEmitSwitch && (BB.buffer[BB.it.offset++] = 255, TT.number(BB.buffer, BB.ref[JB], BB.it)), BB.structSwitchEmitted = !0)
    }

    function aV(BB, TB) {
      WV(BB, TB, yB.ADD)
    }

    function ZV(BB, TB) {
      if (TB._fullSyncGen === BB.gen) return;
      TB._fullSyncGen = BB.gen;
      if (!BB.hasView || BB.view.isChangeTreeVisible(TB)) {
        const dB = TB.encDescriptor;
        BB.changeTree = TB, BB.ref = TB.ref, BB.encoder = dB.encoder, BB.filter = dB.filter, BB.metadata = dB.metadata, BB.treeIsFiltered = TB.isFiltered, BB.isSchema = dB.isSchema, BB.filterBitmask = dB.filterBitmask, BB.tags = dB.tags, BB.structSwitchEmitted = !1, BB.shouldEmitSwitch = BB.hasView || BB.it.offset > BB.initialOffset || TB !== BB.rootChangeTree, TB.isArray && TB.collDirty.size > 0 && (TB.flags |= 512), yd(TB, BB, aV)
      }
      Ed(TB, BB, XV)
    }

    function XV(BB, TB, dB) {
      ZV(BB, TB)
    }

    function WV(BB, TB, dB) {
      if (TB < 0) {
        if (BB.treeIsFiltered !== BB.emitFiltered) return;
        return RV(BB), void(BB.buffer[BB.it.offset++] = 255 & Math.abs(TB))
      }
      if ((BB.isSchema ? BB.treeIsFiltered || (TB < 32 ? 0 !== (BB.filterBitmask & 1 << TB) : void 0 !== BB.tags[TB]) : BB.treeIsFiltered) !== BB.emitFiltered) return;
      const VB = BB.isEncodeAll ? yB.ADD : dB;
      void 0 !== VB && (void 0 === BB.filter || BB.filter(BB.ref, TB, BB.view)) && (RV(BB), BB.encoder(BB.self, BB.buffer, BB.changeTree, TB, VB, BB.it, BB.isEncodeAll, BB.hasView, BB.metadata))
    }

    function hV(BB, TB) {
      const dB = new Uint8Array(BB.length + TB.length);
      return dB.set(BB, 0), dB.set(TB, BB.length), dB
    }
    class CV {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(CV.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(BB, TB) {
        this.context = ZT.cache(BB.constructor), this.root = TB ?? new rV(this.context), this.setState(BB)
      }
      setState(BB) {
        this.state = BB, this.state[uB].setRoot(this.root)
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
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.offset;
        return this._encodeChannel(BB, TB, dB, VB, !1)
      }
      encodeUnreliable() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.offset;
        return this._encodeChannel(BB, TB, dB, VB, !0)
      }
      _encodeChannel(BB, TB, dB, VB, yB) {
        this.root.pendingFilterRefresh.length > 0 && ld(this.root);
        const pB = void 0 !== TB,
          lB = this.state[uB],
          JB = this._encodeCtx;
        JB.self = this, JB.buffer = dB, JB.it = BB, JB.view = TB, JB.isEncodeAll = !1, JB.hasView = pB, JB.emitFiltered = pB;
        let YB = yB ? this.root.unreliableChanges : this.root.changes;
        for (; YB = YB.next;) {
          const dB = YB.changeTree;
          if (pB && !TB.isChangeTreeVisible(dB)) continue;
          const gB = yB ? dB.unreliableRecorder : dB;
          if (!gB || !gB.has()) continue;
          const oB = dB.encDescriptor;
          JB.changeTree = dB, JB.ref = dB.ref, JB.encoder = oB.encoder, JB.filter = oB.filter, JB.metadata = oB.metadata, JB.treeIsFiltered = dB.isFiltered, JB.isSchema = oB.isSchema, JB.filterBitmask = oB.filterBitmask, JB.tags = oB.tags, JB.structSwitchEmitted = !1, JB.isRootTree = dB === lB, JB.shouldEmitSwitch = pB || BB.offset > VB || !JB.isRootTree, gB.forEachWithCtx(JB, WV)
        }
        return yB || pB || !this._isStreamBroadcastMode || this._emitStreamBroadcast(dB, BB), BB.offset > dB.byteLength ? (dB = this._resizeBuffer(dB, BB.offset), BB.offset = VB, this._encodeChannel(BB, TB, dB, VB, yB)) : dB.subarray(0, BB.offset)
      }
      encodeFullSync(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.offset;
        this.root.pendingFilterRefresh.length > 0 && ld(this.root);
        const pB = void 0 !== VB,
          lB = this.state[uB],
          JB = this._encodeCtx;
        return JB.self = this, JB.buffer = TB, JB.it = BB, JB.view = VB, JB.isEncodeAll = !0, JB.hasView = pB, JB.emitFiltered = dB, JB.gen = ++this._fullSyncGen, JB.initialOffset = yB, JB.rootChangeTree = lB, ZV(JB, lB), BB.offset > TB.byteLength ? (TB = this._resizeBuffer(TB, BB.offset), BB.offset = yB, this.encodeFullSync(BB, TB, dB, VB, yB)) : TB.subarray(0, BB.offset)
      }
      _resizeBuffer(BB, TB) {
        const dB = Math.ceil(TB / CV.BUFFER_SIZE) * CV.BUFFER_SIZE,
          VB = new Uint8Array(dB);
        return VB.set(BB), BB === this.sharedBuffer && (this.sharedBuffer = VB), VB
      }
      encodeAll() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(BB, TB, !1)
      }
      encodeAllView(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const yB = dB.offset;
        return VB = this.encodeFullSync(dB, VB, !0, BB, yB), hV(VB.subarray(0, TB), VB.subarray(yB, dB.offset))
      }
      ensureCapacity(BB, TB) {
        if (TB + CV.BUFFER_SIZE <= BB.byteLength) return BB;
        const dB = Math.ceil((TB + CV.BUFFER_SIZE) / CV.BUFFER_SIZE) * CV.BUFFER_SIZE,
          VB = new Uint8Array(dB);
        return VB.set(BB.subarray(0, TB)), BB === this.sharedBuffer && (this.sharedBuffer = VB), VB
      }
      encodeView(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          pB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const lB = dB.offset;
        this._emitStreamPriority(BB);
        for (const YB of BB.changes.keys()) {
          const TB = BB.changes.get(YB),
            pB = this.root.changeTrees[YB];
          if (void 0 === pB) {
            BB.changes.delete(YB);
            continue
          }
          if (0 === TB.size) continue;
          const lB = pB.encDescriptor,
            gB = lB.encoder,
            oB = lB.metadata,
            kB = pB.ref,
            OB = pB.refTarget;
          VB = this.ensureCapacity(VB, dB.offset), VB[dB.offset++] = 255, TT.number(VB, kB[JB], dB);
          for (const [YB, DB] of TB) {
            let TB;
            if (-1 === YB) {
              const BB = OB.tmpItems,
                TB = OB.deletedIndexes;
              for (let lB = 0; lB < BB.length; lB++) void 0 !== BB[lB] && !0 !== TB[lB] && gB(this, VB, pB, lB, yB.ADD, dB, !1, !0, oB);
              continue
            }
            if ("number" === typeof YB) TB = YB;
            else {
              const dB = YB.indexInParent(kB);
              if (void 0 === dB) continue;
              if (TB = dB, DB === yB.ADD && pB.getChange(TB) === yB.DELETE) {
                BB.changes.delete(YB.ref[JB]);
                continue
              }
            }
            gB(this, VB, pB, TB, void 0 !== OB[LB](TB) && DB || yB.DELETE, dB, !1, !0, oB)
          }
        }
        return BB.changes.clear(), VB = this.encode(dB, BB, VB), pB ? hV(VB.subarray(0, TB), VB.subarray(lB, dB.offset)) : VB.subarray(lB, dB.offset)
      }
      encodeUnreliableView(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const yB = dB.offset;
        return VB = this.encodeUnreliable(dB, BB, VB, yB), hV(VB.subarray(0, TB), VB.subarray(yB, dB.offset))
      }
      _emitStreamBroadcast(BB, TB) {
        const dB = this.root.streamTrees;
        for (const VB of dB) {
          const dB = VB,
            pB = dB[uB],
            lB = dB[JB];
          if (void 0 === lB) continue;
          const YB = dB._stream,
            gB = YB.broadcastDeletes,
            oB = YB.broadcastPending,
            kB = YB.sentBroadcast,
            OB = gB.size > 0,
            DB = oB.size > 0,
            HB = pB.encDescriptor,
            EB = HB.encoder,
            vB = HB.metadata;
          if (OB || DB) {
            if (BB[TB.offset++] = 255, TT.number(BB, lB, TB), OB) {
              for (const dB of gB) EB(this, BB, pB, dB, yB.DELETE, TB, !1, !1, vB);
              gB.clear()
            }
            const VB = YB.maxPerTick,
              DB = [];
            let HB = 0;
            const mB = [];
            for (const lB of oB) {
              if (HB >= VB) break;
              const JB = dB[LB](lB);
              void 0 !== JB ? (EB(this, BB, pB, lB, yB.ADD, TB, !1, !1, vB), kB.add(lB), DB.push(JB), mB.push(lB), HB++) : mB.push(lB)
            }
            for (const BB of mB) oB.delete(BB);
            for (const dB of DB) {
              const VB = dB[uB];
              if (void 0 === VB) continue;
              const pB = dB[JB];
              if (void 0 === pB) continue;
              BB[TB.offset++] = 255, TT.number(BB, pB, TB);
              const lB = VB.encDescriptor,
                YB = lB.encoder,
                gB = lB.metadata;
              VB.forEachLive((dB => {
                xT.hasUnreliableAtIndex(gB, dB) || YB(this, BB, VB, dB, yB.ADD, TB, !1, !1, gB)
              }))
            }
          }
          for (const VB of kB) {
            const yB = dB[LB](VB);
            if (void 0 === yB) continue;
            const pB = yB[uB];
            if (void 0 === pB || !pB.has()) continue;
            const lB = yB[JB];
            if (void 0 === lB) continue;
            BB[TB.offset++] = 255, TT.number(BB, lB, TB);
            const YB = pB.encDescriptor,
              gB = YB.encoder,
              oB = YB.metadata;
            pB.forEach(((dB, VB) => {
              dB < 0 || xT.hasUnreliableAtIndex(oB, dB) || gB(this, BB, pB, dB, VB, TB, !1, !1, oB)
            }))
          }
        }
      }
      _emitStreamPriority(BB) {
        const TB = this.root.streamTrees;
        if (0 === TB.size) return;
        const dB = BB.id;
        for (const VB of TB) {
          const TB = VB,
            pB = TB._stream,
            lB = pB.pendingByView.get(dB);
          if (void 0 === lB || 0 === lB.size) continue;
          const YB = pB.priorityByView?.get(dB),
            gB = void 0 !== YB,
            oB = pB.priority,
            kB = pB.maxPerTick,
            OB = [],
            DB = [];
          if (gB || void 0 !== oB) {
            const dB = [],
              VB = [];
            let yB = 0;
            for (const pB of lB) {
              const lB = TB[LB](pB);
              if (void 0 === lB) {
                DB.push(pB);
                continue
              }
              const JB = gB ? YB(lB) : oB(BB, lB);
              if (yB < kB) {
                let BB = yB++;
                for (; BB > 0 && VB[BB - 1] < JB;) VB[BB] = VB[BB - 1], dB[BB] = dB[BB - 1], BB--;
                VB[BB] = JB, dB[BB] = pB
              } else if (JB > VB[kB - 1]) {
                let BB = kB - 1;
                for (; BB > 0 && VB[BB - 1] < JB;) VB[BB] = VB[BB - 1], dB[BB] = dB[BB - 1], BB--;
                VB[BB] = JB, dB[BB] = pB
              }
            }
            for (let BB = 0; BB < yB; BB++) OB.push(dB[BB])
          } else
            for (const BB of lB) {
              if (OB.length >= kB) break;
              OB.push(BB)
            }
          for (const BB of DB) lB.delete(BB);
          const HB = OB.length;
          let EB = pB.sentByView.get(dB);
          void 0 === EB && (EB = new Set, pB.sentByView.set(dB, EB));
          for (let dB = 0; dB < HB; dB++) {
            const VB = OB[dB],
              pB = TB[LB](VB);
            if (void 0 === pB) {
              lB.delete(VB);
              continue
            }
            BB._addImmediate(pB);
            const YB = pB[uB];
            if (void 0 !== YB) {
              const TB = pB[JB];
              let dB = BB.changes.get(TB);
              void 0 === dB && (dB = new Map, BB.changes.set(TB, dB));
              const VB = YB.metadata;
              YB.forEachLive((BB => {
                xT.hasUnreliableAtIndex(VB, BB) || dB.set(BB, yB.ADD)
              }))
            }
            lB.delete(VB), EB.add(VB)
          }
        }
      }
      discardChanges() {
        const BB = this.root.changes;
        let TB = BB.next;
        const dB = this.root;
        for (; TB;) {
          const BB = TB.next;
          TB.changeTree.endEncode(), dB.releaseNode(TB), TB = BB
        }
        BB.next = void 0, BB.tail = void 0
      }
      discardUnreliableChanges() {
        const BB = this.root.unreliableChanges;
        let TB = BB.next;
        const dB = this.root;
        for (; TB;) {
          const BB = TB.next;
          TB.changeTree.endEncodeUnreliable(), dB.releaseNode(TB), TB = BB
        }
        BB.next = void 0, BB.tail = void 0
      }
      tryEncodeTypeId(BB, TB, dB, VB) {
        const yB = this.context.getTypeId(TB),
          pB = this.context.getTypeId(dB);
        void 0 !== pB ? yB !== pB && (BB[VB.offset++] = 213, TT.number(BB, pB, VB)) : console.warn(`@colyseus/schema WARNING: Class "${dB.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const TB = 0 === BB.activeViews.size;
        for (const dB of BB.streamTrees)
          if (TB ? KT(dB) : FT(dB, BB)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class GV extends Error {
      constructor(BB) {
        super(BB), this.name = "DecodingWarning"
      }
    }
    const qV = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class xV {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(BB, TB), void 0 === TB[JB] ? (qV.value = BB, Object.defineProperty(TB, JB, qV)) : TB[JB] !== BB && (TB[JB] = BB), dB && (this.refCount[BB] = (this.refCount[BB] || 0) + 1), this.deletedRefs.has(BB) && this.deletedRefs.delete(BB)
      }
      removeRef(BB) {
        const TB = this.refCount[BB];
        if (void 0 !== TB)
          if (0 !== TB)(this.refCount[BB] = TB - 1) <= 0 && this.deletedRefs.add(BB);
          else try {
            const TB = this.refs.get(BB);
            throw new GV(`trying to remove refId '${BB}' with 0 refCount (${TB.constructor.name}: ${JSON.stringify(TB)})`)
          } catch (ly) {
            console.warn(ly)
          } else try {
            throw new GV("trying to remove refId that doesn't exist: " + BB)
          } catch (ly) {
            console.warn(ly)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((BB => {
          if (this.refCount[BB] > 0) return;
          const TB = this.refs.get(BB),
            dB = TB.constructor[Symbol.metadata];
          if (null != dB)
            for (const VB in dB) {
              const BB = TB[dB[VB].name];
              if ("object" === typeof BB && BB) {
                const TB = BB[JB];
                void 0 === TB || this.deletedRefs.has(TB) || this.removeRef(TB)
              }
            } else "function" === typeof TB[HB] && Array.from(TB.values()).forEach((BB => {
              const TB = BB[JB];
              void 0 === TB || this.deletedRefs.has(TB) || this.removeRef(TB)
            }));
          this.refs.delete(BB), delete this.refCount[BB], delete this.callbacks[BB]
        })), this.deletedRefs.clear()
      }
      addCallback(BB, TB, dB) {
        if (void 0 === BB) {
          const BB = "number" === typeof TB ? yB[TB] : TB;
          throw new Error(`Can't addCallback on '${BB}' (refId is undefined)`)
        }
        return this.callbacks[BB] || (this.callbacks[BB] = {}), this.callbacks[BB][TB] || (this.callbacks[BB][TB] = []), this.callbacks[BB][TB].push(dB), () => this.removeCallback(BB, TB, dB)
      }
      removeCallback(BB, TB, dB) {
        const VB = this.callbacks?.[BB]?.[TB]?.indexOf(dB);
        void 0 !== VB && -1 !== VB && IV(this.callbacks[BB][TB], VB)
      }
    }
    class jV {
      context;
      state;
      root;
      currentRefId = 0;
      rU;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(BB, TB) {
        this.setState(BB), this.context = TB || new ZT(BB.constructor)
      }
      setState(BB) {
        this.state = BB, this.root = new xV, this.root.addRef(0, BB)
      }
      decode(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const yB = void 0 !== this.rU ? [] : null,
          pB = this.root,
          lB = BB.byteLength;
        let JB = dB.constructor[oB];
        for (this.currentRefId = 0; TB.offset < lB;) {
          if (BB[TB.offset] == VB) {
            TB.offset++, dB[iB]?.();
            const VB = mT.number(BB, TB),
              yB = pB.refs.get(VB);
            yB ? (dB = yB, JB = dB.constructor[oB], this.currentRefId = VB) : (console.error(`"refId" not found: ${VB}`, {
              previousRef: dB,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(BB, TB, lB));
            continue
          } - 1 !== JB(this, BB, TB, dB, yB) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(BB, TB, lB))
        }
        return dB[iB]?.(), null !== this.resyncVisited && function(BB, TB) {
          BB.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Xd(BB, BB.state, new Set, TB)
        }(this, yB), null !== yB && this.rU?.(yB), pB.garbageCollectDeletedRefs(), yB
      }
      decodeResync(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(BB, TB)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(BB, TB, dB) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const yB = {
          offset: TB.offset
        };
        for (; TB.offset < dB && (BB[TB.offset] !== VB || (yB.offset = TB.offset + 1, !this.root.refs.has(mT.number(BB, yB))));) TB.offset++
      }
      getInstanceType(BB, TB, dB) {
        let VB;
        if (213 === BB[TB.offset]) {
          TB.offset++;
          const dB = mT.number(BB, TB);
          VB = this.context.get(dB)
        }
        return VB || dB
      }
      createInstanceOfType(BB) {
        return BB.initializeForDecoder()
      }
      removeChildRefs(BB, TB) {
        const dB = "string" !== typeof BB[HB],
          VB = BB[JB];
        BB.forEach(((pB, lB) => {
          TB?.push({
            ref: BB,
            refId: VB,
            op: yB.DELETE,
            field: lB,
            value: void 0,
            previousValue: pB
          }), dB && this.root.removeRef(pB[JB])
        }))
      }
    }
    const AV = wV({
        min: DV.float64(),
        max: DV.float64(),
        bits: DV.uint8(),
        mode: DV.uint8()
      }, "QuantizedDescriptor"),
      bV = wV({
        name: DV.string(),
        type: DV.string(),
        referencedType: DV.number(),
        childPrimitive: DV.string(),
        quantized: DV.ref(AV).optional()
      }, "ReflectionField"),
      nV = wV({
        id: DV.number(),
        extendsId: DV.number(),
        fields: DV.array(bV)
      }, "ReflectionType"),
      eV = wV({
        types: DV.array(nV),
        rootType: DV.number()
      }, "Reflection");

    function By(BB) {
      const TB = BB.root,
        dB = TB.callbacks,
        VB = new WeakMap;
      let pB;

      function lB(BB, dB) {
        let gB = dB.instance?.constructor[Symbol.metadata] || BB,
          oB = dB.instance && "function" === typeof dB.instance.forEach || BB && !FV.is(BB);
        if (gB && !oB) {
          const BB = function(BB, yB, lB, YB) {
            return YB && void 0 !== dB.instance[yB] && !VB.has(pB) && lB(dB.instance[yB], void 0), TB.addCallback(BB[JB], yB, lB)
          };
          return new Proxy({
            listen: function(TB, yB) {
              let lB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (dB.instance) return BB(dB.instance, TB, yB, lB);
              {
                let JB = () => {};
                return dB.onInstanceAvailable(((dB, YB) => {
                  JB = BB(dB, TB, yB, lB && YB && !VB.has(pB))
                })), () => JB()
              }
            },
            onChange: function(BB) {
              return TB.addCallback(dB.instance[JB], yB.REPLACE, BB)
            },
            bindTo: function(BB, VB) {
              return VB || (VB = Object.keys(gB).map((BB => gB[BB].name))), TB.addCallback(dB.instance[JB], yB.REPLACE, (() => {
                VB.forEach((TB => BB[TB] = dB.instance[TB]))
              }))
            }
          }, {
            get(BB, TB) {
              const VB = gB[gB[TB]];
              if (VB) {
                const BB = dB.instance?.[TB],
                  yB = VB => {
                    const yB = YB(dB.instance).listen(TB, ((BB, TB) => {
                      VB(BB, !1), yB?.()
                    }), !1);
                    void 0 !== BB?.[JB] && VB(BB, !0)
                  };
                return lB(VB.type, {
                  instance: void 0 !== BB?.[JB] && BB,
                  parentInstance: dB.instance,
                  onInstanceAvailable: yB
                })
              }
              return BB[TB]
            },
            has: (BB, TB) => void 0 !== gB[TB],
            set(BB, TB, dB) {
              throw new Error("not allowed")
            },
            deleteProperty(BB, TB) {
              throw new Error("not allowed")
            }
          })
        } {
          const BB = function(BB, dB, lB) {
              return lB && BB.forEach(((BB, TB) => dB(BB, TB))), TB.addCallback(BB[JB], yB.ADD, ((BB, TB) => {
                VB.set(dB, !0), pB = dB, dB(BB, TB), VB.delete(dB), pB = void 0
              }))
            },
            lB = function(BB, dB) {
              return TB.addCallback(BB[JB], yB.DELETE, dB)
            },
            YB = function(BB, dB) {
              return TB.addCallback(BB[JB], yB.REPLACE, dB)
            };
          return new Proxy({
            Om: function(TB) {
              let yB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (dB.instance) return BB(dB.instance, TB, yB && !VB.has(pB));
              if (dB.onInstanceAvailable) {
                let lB = () => {};
                return dB.onInstanceAvailable(((dB, JB) => {
                  lB = BB(dB, TB, yB && JB && !VB.has(pB))
                })), () => lB()
              }
            },
            Kw: function(BB) {
              if (dB.instance) return lB(dB.instance, BB);
              if (dB.onInstanceAvailable) {
                let TB = () => {};
                return dB.onInstanceAvailable((dB => {
                  TB = lB(dB, BB)
                })), () => TB()
              }
            },
            onChange: function(BB) {
              if (dB.instance) return YB(dB.instance, BB);
              if (dB.onInstanceAvailable) {
                let TB = () => {};
                return dB.onInstanceAvailable((dB => {
                  TB = YB(dB, BB)
                })), () => TB()
              }
            }
          }, {
            get(BB, TB) {
              if (!BB[TB]) throw new Error(`Can't access '${TB}' through callback proxy. access the instance directly.`);
              return BB[TB]
            },
            has: (BB, TB) => void 0 !== BB[TB],
            set(BB, TB, dB) {
              throw new Error("not allowed")
            },
            deleteProperty(BB, TB) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function YB(BB) {
        return lB(void 0, {
          instance: BB
        })
      }
      return BB.rU = function(BB) {
        const TB = new Set;
        for (let VB = 0, pB = BB.length; VB < pB; VB++) {
          const pB = BB[VB],
            lB = pB.refId,
            YB = pB.ref,
            gB = dB[lB];
          if (gB) {
            if ((pB.op & yB.DELETE) === yB.DELETE && FV.isSchema(pB.previousValue)) {
              const BB = dB[pB.previousValue[JB]]?.[yB.DELETE];
              for (let TB = BB?.length - 1; TB >= 0; TB--) BB[TB]()
            }
            if (FV.isSchema(YB)) {
              if (!TB.has(lB)) {
                const BB = gB?.[yB.REPLACE];
                for (let TB = BB?.length - 1; TB >= 0; TB--) BB[TB]()
              }
              if (gB.hasOwnProperty(pB.field)) {
                const BB = gB[pB.field];
                for (let TB = BB?.length - 1; TB >= 0; TB--) BB[TB](pB.value, pB.previousValue)
              }
            } else {
              if ((pB.op & yB.DELETE) === yB.DELETE) {
                if (void 0 !== pB.previousValue) {
                  const BB = gB[yB.DELETE];
                  for (let TB = BB?.length - 1; TB >= 0; TB--) BB[TB](pB.previousValue, pB.dynamicIndex ?? pB.field)
                }
                if ((pB.op & yB.ADD) === yB.ADD) {
                  const BB = gB[yB.ADD];
                  for (let TB = BB?.length - 1; TB >= 0; TB--) BB[TB](pB.value, pB.dynamicIndex ?? pB.field)
                }
              } else if ((pB.op & yB.ADD) === yB.ADD && pB.previousValue !== pB.value) {
                const BB = gB[yB.ADD];
                for (let TB = BB?.length - 1; TB >= 0; TB--) BB[TB](pB.value, pB.dynamicIndex ?? pB.field)
              }
              if (pB.value !== pB.previousValue && (void 0 !== pB.value || void 0 !== pB.previousValue)) {
                const BB = gB[yB.REPLACE];
                for (let TB = BB?.length - 1; TB >= 0; TB--) BB[TB](pB.value, pB.dynamicIndex ?? pB.field)
              }
            }
            TB.add(lB)
          }
        }
      }, YB
    }

    function Ty(BB, TB) {
      BB.rU = TB
    }
    eV.encode = function(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const dB = BB.context,
        VB = new eV,
        yB = new CV(VB),
        pB = dB.schemas.get(BB.state.constructor);
      pB > 0 && (VB.rootType = pB);
      const lB = new Set,
        JB = {},
        YB = BB => {
          if (void 0 === BB.extendsId || lB.has(BB.extendsId)) {
            lB.add(BB.id), VB.types.push(BB);
            const TB = JB[BB.id];
            void 0 !== TB && (delete JB[BB.id], TB.forEach((BB => YB(BB))))
          } else void 0 === JB[BB.extendsId] && (JB[BB.extendsId] = []), JB[BB.extendsId].push(BB)
        };
      dB.schemas.forEach(((BB, TB) => {
        const VB = new nV;
        VB.id = Number(BB);
        const yB = Object.getPrototypeOf(TB);
        yB !== FV && (VB.extendsId = dB.schemas.get(yB));
        const pB = TB[Symbol.metadata];
        if (pB !== yB[Symbol.metadata]) {
          const BB = pB[zB] ?? -1;
          for (let TB = 0; TB <= BB; TB++) {
            const BB = pB[TB];
            if (void 0 === BB) continue;
            const yB = BB.name;
            if (!Object.prototype.hasOwnProperty.call(pB, yB)) continue;
            const lB = new bV;
            let JB;
            if (lB.name = yB, "string" === typeof BB.type) JB = BB.type;
            else if (PT(BB.type)) {
              const TB = BB.type.quantized;
              JB = "quantized";
              const dB = new AV;
              dB.min = TB.min, dB.max = TB.max, dB.bits = TB.bits, dB.mode = TB.wrap ? 1 : 0, lB.quantized = dB
            } else {
              let TB;
              FV.is(BB.type) ? (JB = "ref", TB = BB.type) : (JB = Object.keys(BB.type)[0], "string" === typeof BB.type[JB] ? lB.childPrimitive = BB.type[JB] : TB = BB.type[JB]), lB.referencedType = TB ? dB.getTypeId(TB) : -1
            }
            lB.type = JB, VB.fields.push(lB)
          }
        }
        YB(VB)
      }));
      for (const gB in JB) JB[gB].forEach((BB => VB.types.push(BB)));
      return yB.encodeAll(TB).slice(0, TB.offset)
    }, eV.decode = function(BB, TB) {
      const dB = new eV;
      new jV(dB).decode(BB, TB);
      const VB = new ZT;
      dB.types.forEach((BB => {
        const TB = VB.get(BB.extendsId) ?? FV,
          dB = class extends TB {};
        ZT.register(dB), VB.add(dB, BB.id)
      }), {});
      dB.types.forEach((BB => {
        const TB = VB.get(BB.id),
          yB = xT.initialize(TB),
          pB = [];
        let lB = BB;
        do {
          pB.push(lB), lB = dB.types.find((BB => BB.id === lB.extendsId))
        } while (lB);
        let JB = 0;
        pB.reverse().forEach((BB => {
          ((BB, TB, dB) => {
            TB.fields.forEach(((TB, yB) => {
              const pB = dB + yB;
              if (void 0 !== TB.quantized) {
                const dB = TB.quantized;
                xT.addField(BB, pB, TB.name, {
                  quantized: ST({
                    min: dB.min,
                    max: dB.max,
                    bits: dB.bits,
                    mode: 1 === dB.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== TB.referencedType) {
                const dB = TB.type,
                  yB = VB.get(TB.referencedType) ?? TB.childPrimitive;
                "ref" === dB ? xT.addField(BB, pB, TB.name, yB) : xT.addField(BB, pB, TB.name, {
                  [dB]: yB
                })
              } else xT.addField(BB, pB, TB.name, TB.type)
            }))
          })(yB, BB, JB), JB += BB.fields.length
        }))
      }));
      const yB = new(VB.get(dB.rootType || 0));
      return new jV(yB, VB)
    }, eV.makeEncodable = function(BB) {
      const TB = BB[Symbol.metadata];
      if (!TB) return BB;
      const dB = TB[zB];
      if (void 0 === dB) return BB;
      for (let VB = 0; VB <= dB; VB++) {
        const dB = TB[VB];
        dB && xT.defineField(BB, TB, VB, dB.name, dB.type)
      }
      return Object.prototype.hasOwnProperty.call(BB, sB) && delete BB[sB], BB
    };
    class dy {
      oD;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(BB) {
        this.oD = BB, this.oD.rU = this.rU.bind(this)
      }
      get callbacks() {
        return this.oD.root.callbacks
      }
      get state() {
        return this.oD.state
      }
      addCallback(BB, TB, dB) {
        return this.oD.root.addCallback(BB, TB, dB)
      }
      addCallbackOrWaitCollectionAvailable(BB, TB, dB, VB) {
        let pB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          lB = () => {};
        const YB = () => lB(),
          gB = BB[TB];
        if (gB && void 0 !== gB[JB]) return pB = pB && !1 === this.isTriggering, dB === yB.ADD && pB && gB.forEach(((BB, TB) => {
          VB(BB, TB)
        })), this.addCallback(gB[JB], dB, VB);
        {
          let yB;
          return yB = this.addCallback(BB[JB], TB, ((BB, TB) => {
            null !== BB && void 0 !== BB && (yB(), lB = this.addCallback(BB[JB], dB, VB))
          })), lB = yB, YB
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(BB, TB, dB) {
        let VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        VB = VB && !1 === this.isTriggering;
        const yB = BB[TB];
        return VB && null !== yB && void 0 !== yB && dB(yB, void 0), this.addCallback(BB[JB], TB, dB)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const BB = arguments.length <= 0 ? void 0 : arguments[0],
            TB = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(BB[JB], yB.REPLACE, TB)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], yB.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], yB.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Om() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], yB.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], yB.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      Kw() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], yB.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], yB.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(BB, TB, dB) {
        let VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const pB = BB.constructor[Symbol.metadata];
        dB || (dB = Object.keys(pB).filter((BB => !isNaN(Number(BB)))).map((BB => pB[BB].name)));
        const lB = () => {
          for (const VB of dB) {
            const dB = BB[VB];
            void 0 !== dB && (TB[VB] = dB)
          }
        };
        return VB && lB(), this.addCallback(BB[JB], yB.REPLACE, lB)
      }
      rU(BB) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let TB = 0, dB = BB.length; TB < dB; TB++) {
          const dB = BB[TB],
            VB = dB.refId,
            pB = dB.ref,
            lB = this.callbacks[VB];
          if (lB) {
            if ((dB.op & yB.DELETE) === yB.DELETE && FV.isSchema(dB.previousValue)) {
              const BB = dB.previousValue[JB],
                TB = this.callbacks[BB]?.[yB.DELETE];
              if (TB)
                for (let dB = TB.length - 1; dB >= 0; dB--) try {
                  TB[dB]()
                } catch (ly) {
                  console.error(ly)
                }
            }
            if (FV.isSchema(pB)) {
              if (!this.uniqueRefIds.has(VB)) {
                const BB = lB[yB.REPLACE];
                if (BB)
                  for (let TB = BB.length - 1; TB >= 0; TB--) try {
                    BB[TB]()
                  } catch (ly) {
                    console.error(ly)
                  }
              }
              const BB = lB[dB.field];
              if (BB)
                for (let TB = BB.length - 1; TB >= 0; TB--) try {
                  BB[TB](dB.value, dB.previousValue)
                } catch (ly) {
                  console.error(ly)
                }
            } else {
              const BB = dB.dynamicIndex ?? dB.field;
              if ((dB.op & yB.DELETE) === yB.DELETE) {
                if (void 0 !== dB.previousValue) {
                  const TB = lB[yB.DELETE];
                  if (TB)
                    for (let VB = TB.length - 1; VB >= 0; VB--) try {
                      TB[VB](dB.previousValue, BB)
                    } catch (ly) {
                      console.error(ly)
                    }
                }
                if ((dB.op & yB.ADD) === yB.ADD) {
                  const TB = lB[yB.ADD];
                  if (TB)
                    for (let VB = TB.length - 1; VB >= 0; VB--) try {
                      TB[VB](dB.value, BB)
                    } catch (ly) {
                      console.error(ly)
                    }
                }
              } else if ((dB.op & yB.ADD) === yB.ADD && dB.previousValue !== dB.value) {
                const TB = lB[yB.ADD];
                if (TB)
                  for (let VB = TB.length - 1; VB >= 0; VB--) try {
                    TB[VB](dB.value, BB)
                  } catch (ly) {
                    console.error(ly)
                  }
              }
              if (dB.value !== dB.previousValue) {
                const TB = lB[yB.REPLACE];
                if (TB)
                  for (let VB = TB.length - 1; VB >= 0; VB--) try {
                    TB[VB](BB, dB.value)
                  } catch (ly) {
                    console.error(ly)
                  }
              }
            }
            this.uniqueRefIds.add(VB)
          }
        }
        this.isTriggering = !1
      }
    }
    const Vy = {
      get(BB) {
        if (BB instanceof jV) return new dy(BB);
        if ("oD" in BB.TE) return new dy(BB.TE.oD);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(BB) {
        if (BB instanceof jV) return By(BB);
        if ("oD" in BB.TE) return By(BB.TE.oD);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (BB, TB) => Ty(BB, TB)
    };
    class yy {
      _free = [];
      _factory;
      _maxSize;
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = BB, this._maxSize = TB.maxSize ?? 1 / 0;
        const dB = TB.preallocate ?? 0;
        for (let VB = 0; VB < dB; VB++) this._free.push(BB())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(BB) {
        FV.reset(BB), this._free.length < this._maxSize && this._free.push(BB)
      }
      get size() {
        return this._free.length
      }
    }

    function py(BB) {
      return new yy((() => new BB), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    tT("map", {
      constructor: pV
    }), tT("array", {
      constructor: VV
    }), tT("set", {
      constructor: JV
    }), tT("collection", {
      constructor: lV
    })
  },
  8391: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      __addDisposableResource: () => PB,
      __assign: () => pB,
      __asyncDelegator: () => MB,
      __asyncGenerator: () => sB,
      __asyncValues: () => zB,
      __await: () => fB,
      __awaiter: () => DB,
      __classPrivateFieldGet: () => IB,
      __classPrivateFieldIn: () => SB,
      __classPrivateFieldSet: () => cB,
      __createBinding: () => HB,
      __decorate: () => JB,
      __disposeResources: () => RB,
      __esDecorate: () => gB,
      __exportStar: () => EB,
      __extends: () => yB,
      __generator: () => uB,
      __importDefault: () => rB,
      __importStar: () => KB,
      __makeTemplateObject: () => wB,
      __metadata: () => OB,
      __param: () => YB,
      __propKey: () => kB,
      __read: () => mB,
      __rest: () => lB,
      __rewriteRelativeImportExtension: () => aB,
      __runInitializers: () => oB,
      __setFunctionName: () => LB,
      __spread: () => iB,
      __spreadArray: () => tB,
      __spreadArrays: () => NB,
      __values: () => vB,
      default: () => ZB
    });
    var VB = function(BB, TB) {
      return VB = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(BB, TB) {
        BB.__proto__ = TB
      } || function(BB, TB) {
        for (var dB in TB) Object.prototype.hasOwnProperty.call(TB, dB) && (BB[dB] = TB[dB])
      }, VB(BB, TB)
    };

    function yB(BB, TB) {
      if ("function" !== typeof TB && null !== TB) throw new TypeError("Class extends value " + String(TB) + " is not a constructor or null");

      function dB() {
        this.constructor = BB
      }
      VB(BB, TB), BB.prototype = null === TB ? Object.create(TB) : (dB.prototype = TB.prototype, new dB)
    }
    var pB = function() {
      return pB = Object.assign || function(BB) {
        for (var TB, dB = 1, VB = arguments.length; dB < VB; dB++)
          for (var yB in TB = arguments[dB]) Object.prototype.hasOwnProperty.call(TB, yB) && (BB[yB] = TB[yB]);
        return BB
      }, pB.apply(this, arguments)
    };

    function lB(BB, TB) {
      var dB = {};
      for (var VB in BB) Object.prototype.hasOwnProperty.call(BB, VB) && TB.indexOf(VB) < 0 && (dB[VB] = BB[VB]);
      if (null != BB && "function" === typeof Object.getOwnPropertySymbols) {
        var yB = 0;
        for (VB = Object.getOwnPropertySymbols(BB); yB < VB.length; yB++) TB.indexOf(VB[yB]) < 0 && Object.prototype.propertyIsEnumerable.call(BB, VB[yB]) && (dB[VB[yB]] = BB[VB[yB]])
      }
      return dB
    }

    function JB(BB, TB, dB, VB) {
      var yB, pB = arguments.length,
        lB = pB < 3 ? TB : null === VB ? VB = Object.getOwnPropertyDescriptor(TB, dB) : VB;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) lB = Reflect.decorate(BB, TB, dB, VB);
      else
        for (var JB = BB.length - 1; JB >= 0; JB--)(yB = BB[JB]) && (lB = (pB < 3 ? yB(lB) : pB > 3 ? yB(TB, dB, lB) : yB(TB, dB)) || lB);
      return pB > 3 && lB && Object.defineProperty(TB, dB, lB), lB
    }

    function YB(BB, TB) {
      return function(dB, VB) {
        TB(dB, VB, BB)
      }
    }

    function gB(BB, TB, dB, VB, yB, pB) {
      function lB(BB) {
        if (void 0 !== BB && "function" !== typeof BB) throw new TypeError("Function expected");
        return BB
      }
      for (var JB, YB = VB.kind, gB = "getter" === YB ? "get" : "setter" === YB ? "set" : "value", oB = !TB && BB ? VB.static ? BB : BB.prototype : null, kB = TB || (oB ? Object.getOwnPropertyDescriptor(oB, VB.name) : {}), LB = !1, OB = dB.length - 1; OB >= 0; OB--) {
        var DB = {};
        for (var uB in VB) DB[uB] = "access" === uB ? {} : VB[uB];
        for (var uB in VB.access) DB.access[uB] = VB.access[uB];
        DB.addInitializer = function(BB) {
          if (LB) throw new TypeError("Cannot add initializers after decoration has completed");
          pB.push(lB(BB || null))
        };
        var HB = (0, dB[OB])("accessor" === YB ? {
          get: kB.get,
          set: kB.set
        } : kB[gB], DB);
        if ("accessor" === YB) {
          if (void 0 === HB) continue;
          if (null === HB || "object" !== typeof HB) throw new TypeError("Object expected");
          (JB = lB(HB.get)) && (kB.get = JB), (JB = lB(HB.set)) && (kB.set = JB), (JB = lB(HB.init)) && yB.unshift(JB)
        } else(JB = lB(HB)) && ("field" === YB ? yB.unshift(JB) : kB[gB] = JB)
      }
      oB && Object.defineProperty(oB, VB.name, kB), LB = !0
    }

    function oB(BB, TB, dB) {
      for (var VB = arguments.length > 2, yB = 0; yB < TB.length; yB++) dB = VB ? TB[yB].call(BB, dB) : TB[yB].call(BB);
      return VB ? dB : void 0
    }

    function kB(BB) {
      return "symbol" === typeof BB ? BB : "".concat(BB)
    }

    function LB(BB, TB, dB) {
      return "symbol" === typeof TB && (TB = TB.description ? "[".concat(TB.description, "]") : ""), Object.defineProperty(BB, "name", {
        configurable: !0,
        value: dB ? "".concat(dB, " ", TB) : TB
      })
    }

    function OB(BB, TB) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(BB, TB)
    }

    function DB(BB, TB, dB, VB) {
      return new(dB || (dB = Promise))((function(yB, pB) {
        function lB(BB) {
          try {
            YB(VB.next(BB))
          } catch (TB) {
            pB(TB)
          }
        }

        function JB(BB) {
          try {
            YB(VB.throw(BB))
          } catch (TB) {
            pB(TB)
          }
        }

        function YB(BB) {
          var TB;
          BB.done ? yB(BB.value) : (TB = BB.value, TB instanceof dB ? TB : new dB((function(BB) {
            BB(TB)
          }))).then(lB, JB)
        }
        YB((VB = VB.apply(BB, TB || [])).next())
      }))
    }

    function uB(BB, TB) {
      var dB, VB, yB, pB = {
          label: 0,
          sent: function() {
            if (1 & yB[0]) throw yB[1];
            return yB[1]
          },
          trys: [],
          ops: []
        },
        lB = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return lB.next = JB(0), lB.throw = JB(1), lB.return = JB(2), "function" === typeof Symbol && (lB[Symbol.iterator] = function() {
        return this
      }), lB;

      function JB(JB) {
        return function(YB) {
          return function(JB) {
            if (dB) throw new TypeError("Generator is already executing.");
            for (; lB && (lB = 0, JB[0] && (pB = 0)), pB;) try {
              if (dB = 1, VB && (yB = 2 & JB[0] ? VB.return : JB[0] ? VB.throw || ((yB = VB.return) && yB.call(VB), 0) : VB.next) && !(yB = yB.call(VB, JB[1])).done) return yB;
              switch (VB = 0, yB && (JB = [2 & JB[0], yB.value]), JB[0]) {
                case 0:
                case 1:
                  yB = JB;
                  break;
                case 4:
                  return pB.label++, {
                    value: JB[1],
                    done: !1
                  };
                case 5:
                  pB.label++, VB = JB[1], JB = [0];
                  continue;
                case 7:
                  JB = pB.ops.pop(), pB.trys.pop();
                  continue;
                default:
                  if (!(yB = (yB = pB.trys).length > 0 && yB[yB.length - 1]) && (6 === JB[0] || 2 === JB[0])) {
                    pB = 0;
                    continue
                  }
                  if (3 === JB[0] && (!yB || JB[1] > yB[0] && JB[1] < yB[3])) {
                    pB.label = JB[1];
                    break
                  }
                  if (6 === JB[0] && pB.label < yB[1]) {
                    pB.label = yB[1], yB = JB;
                    break
                  }
                  if (yB && pB.label < yB[2]) {
                    pB.label = yB[2], pB.ops.push(JB);
                    break
                  }
                  yB[2] && pB.ops.pop(), pB.trys.pop();
                  continue
              }
              JB = TB.call(BB, pB)
            } catch (YB) {
              JB = [6, YB], VB = 0
            } finally {
              dB = yB = 0
            }
            if (5 & JB[0]) throw JB[1];
            return {
              value: JB[0] ? JB[1] : void 0,
              done: !0
            }
          }([JB, YB])
        }
      }
    }
    var HB = Object.create ? function(BB, TB, dB, VB) {
      void 0 === VB && (VB = dB);
      var yB = Object.getOwnPropertyDescriptor(TB, dB);
      yB && !("get" in yB ? !TB.__esModule : yB.writable || yB.configurable) || (yB = {
        enumerable: !0,
        get: function() {
          return TB[dB]
        }
      }), Object.defineProperty(BB, VB, yB)
    } : function(BB, TB, dB, VB) {
      void 0 === VB && (VB = dB), BB[VB] = TB[dB]
    };

    function EB(BB, TB) {
      for (var dB in BB) "default" === dB || Object.prototype.hasOwnProperty.call(TB, dB) || HB(TB, BB, dB)
    }

    function vB(BB) {
      var TB = "function" === typeof Symbol && Symbol.iterator,
        dB = TB && BB[TB],
        VB = 0;
      if (dB) return dB.call(BB);
      if (BB && "number" === typeof BB.length) return {
        next: function() {
          return BB && VB >= BB.length && (BB = void 0), {
            value: BB && BB[VB++],
            done: !BB
          }
        }
      };
      throw new TypeError(TB ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function mB(BB, TB) {
      var dB = "function" === typeof Symbol && BB[Symbol.iterator];
      if (!dB) return BB;
      var VB, yB, pB = dB.call(BB),
        lB = [];
      try {
        for (;
          (void 0 === TB || TB-- > 0) && !(VB = pB.next()).done;) lB.push(VB.value)
      } catch (JB) {
        yB = {
          error: JB
        }
      } finally {
        try {
          VB && !VB.done && (dB = pB.return) && dB.call(pB)
        } finally {
          if (yB) throw yB.error
        }
      }
      return lB
    }

    function iB() {
      for (var BB = [], TB = 0; TB < arguments.length; TB++) BB = BB.concat(mB(arguments[TB]));
      return BB
    }

    function NB() {
      for (var BB = 0, TB = 0, dB = arguments.length; TB < dB; TB++) BB += arguments[TB].length;
      var VB = Array(BB),
        yB = 0;
      for (TB = 0; TB < dB; TB++)
        for (var pB = arguments[TB], lB = 0, JB = pB.length; lB < JB; lB++, yB++) VB[yB] = pB[lB];
      return VB
    }

    function tB(BB, TB, dB) {
      if (dB || 2 === arguments.length)
        for (var VB, yB = 0, pB = TB.length; yB < pB; yB++) !VB && yB in TB || (VB || (VB = Array.prototype.slice.call(TB, 0, yB)), VB[yB] = TB[yB]);
      return BB.concat(VB || Array.prototype.slice.call(TB))
    }

    function fB(BB) {
      return this instanceof fB ? (this.v = BB, this) : new fB(BB)
    }

    function sB(BB, TB, dB) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var VB, yB = dB.apply(BB, TB || []),
        pB = [];
      return VB = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), lB("next"), lB("throw"), lB("return", (function(BB) {
        return function(TB) {
          return Promise.resolve(TB).then(BB, gB)
        }
      })), VB[Symbol.asyncIterator] = function() {
        return this
      }, VB;

      function lB(BB, TB) {
        yB[BB] && (VB[BB] = function(TB) {
          return new Promise((function(dB, VB) {
            pB.push([BB, TB, dB, VB]) > 1 || JB(BB, TB)
          }))
        }, TB && (VB[BB] = TB(VB[BB])))
      }

      function JB(BB, TB) {
        try {
          (dB = yB[BB](TB)).value instanceof fB ? Promise.resolve(dB.value.v).then(YB, gB) : oB(pB[0][2], dB)
        } catch (VB) {
          oB(pB[0][3], VB)
        }
        var dB
      }

      function YB(BB) {
        JB("next", BB)
      }

      function gB(BB) {
        JB("throw", BB)
      }

      function oB(BB, TB) {
        BB(TB), pB.shift(), pB.length && JB(pB[0][0], pB[0][1])
      }
    }

    function MB(BB) {
      var TB, dB;
      return TB = {}, VB("next"), VB("throw", (function(BB) {
        throw BB
      })), VB("return"), TB[Symbol.iterator] = function() {
        return this
      }, TB;

      function VB(VB, yB) {
        TB[VB] = BB[VB] ? function(TB) {
          return (dB = !dB) ? {
            value: fB(BB[VB](TB)),
            done: !1
          } : yB ? yB(TB) : TB
        } : yB
      }
    }

    function zB(BB) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var TB, dB = BB[Symbol.asyncIterator];
      return dB ? dB.call(BB) : (BB = vB(BB), TB = {}, VB("next"), VB("throw"), VB("return"), TB[Symbol.asyncIterator] = function() {
        return this
      }, TB);

      function VB(dB) {
        TB[dB] = BB[dB] && function(TB) {
          return new Promise((function(VB, yB) {
            (function(BB, TB, dB, VB) {
              Promise.resolve(VB).then((function(TB) {
                BB({
                  value: TB,
                  done: dB
                })
              }), TB)
            })(VB, yB, (TB = BB[dB](TB)).done, TB.value)
          }))
        }
      }
    }

    function wB(BB, TB) {
      return Object.defineProperty ? Object.defineProperty(BB, "raw", {
        value: TB
      }) : BB.raw = TB, BB
    }
    var UB = Object.create ? function(BB, TB) {
        Object.defineProperty(BB, "default", {
          enumerable: !0,
          value: TB
        })
      } : function(BB, TB) {
        BB.default = TB
      },
      FB = function(BB) {
        return FB = Object.getOwnPropertyNames || function(BB) {
          var TB = [];
          for (var dB in BB) Object.prototype.hasOwnProperty.call(BB, dB) && (TB[TB.length] = dB);
          return TB
        }, FB(BB)
      };

    function KB(BB) {
      if (BB && BB.__esModule) return BB;
      var TB = {};
      if (null != BB)
        for (var dB = FB(BB), VB = 0; VB < dB.length; VB++) "default" !== dB[VB] && HB(TB, BB, dB[VB]);
      return UB(TB, BB), TB
    }

    function rB(BB) {
      return BB && BB.__esModule ? BB : {
        default: BB
      }
    }

    function IB(BB, TB, dB, VB) {
      if ("a" === dB && !VB) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof TB ? BB !== TB || !VB : !TB.has(BB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === dB ? VB : "a" === dB ? VB.call(BB) : VB ? VB.value : TB.get(BB)
    }

    function cB(BB, TB, dB, VB, yB) {
      if ("m" === VB) throw new TypeError("Private method is not writable");
      if ("a" === VB && !yB) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof TB ? BB !== TB || !yB : !TB.has(BB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === VB ? yB.call(BB, dB) : yB ? yB.value = dB : TB.set(BB, dB), dB
    }

    function SB(BB, TB) {
      if (null === TB || "object" !== typeof TB && "function" !== typeof TB) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof BB ? TB === BB : BB.has(TB)
    }

    function PB(BB, TB, dB) {
      if (null !== TB && void 0 !== TB) {
        if ("object" !== typeof TB && "function" !== typeof TB) throw new TypeError("Object expected.");
        var VB, yB;
        if (dB) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          VB = TB[Symbol.asyncDispose]
        }
        if (void 0 === VB) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          VB = TB[Symbol.dispose], dB && (yB = VB)
        }
        if ("function" !== typeof VB) throw new TypeError("Object not disposable.");
        yB && (VB = function() {
          try {
            yB.call(this)
          } catch (BB) {
            return Promise.reject(BB)
          }
        }), BB.stack.push({
          value: TB,
          dispose: VB,
          async: dB
        })
      } else dB && BB.stack.push({
        async: !0
      });
      return TB
    }
    var QB = "function" === typeof SuppressedError ? SuppressedError : function(BB, TB, dB) {
      var VB = new Error(dB);
      return VB.name = "SuppressedError", VB.error = BB, VB.suppressed = TB, VB
    };

    function RB(BB) {
      function TB(TB) {
        BB.error = BB.hasError ? new QB(TB, BB.error, "An error was suppressed during disposal.") : TB, BB.hasError = !0
      }
      var dB, VB = 0;
      return function yB() {
        for (; dB = BB.stack.pop();) try {
          if (!dB.async && 1 === VB) return VB = 0, BB.stack.push(dB), Promise.resolve().then(yB);
          if (dB.dispose) {
            var pB = dB.dispose.call(dB.value);
            if (dB.async) return VB |= 2, Promise.resolve(pB).then(yB, (function(BB) {
              return TB(BB), yB()
            }))
          } else VB |= 1
        } catch (lB) {
          TB(lB)
        }
        if (1 === VB) return BB.hasError ? Promise.reject(BB.error) : Promise.resolve();
        if (BB.hasError) throw BB.error
      }()
    }

    function aB(BB, TB) {
      return "string" === typeof BB && /^\.\.?\//.test(BB) ? BB.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(BB, dB, VB, yB, pB) {
        return dB ? TB ? ".jsx" : ".js" : !VB || yB && pB ? VB + yB + "." + pB.toLowerCase() + "js" : BB
      })) : BB
    }
    const ZB = {
      __extends: yB,
      __assign: pB,
      __rest: lB,
      __decorate: JB,
      __param: YB,
      __esDecorate: gB,
      __runInitializers: oB,
      __propKey: kB,
      __setFunctionName: LB,
      __metadata: OB,
      __awaiter: DB,
      __generator: uB,
      __createBinding: HB,
      __exportStar: EB,
      __values: vB,
      __read: mB,
      __spread: iB,
      __spreadArrays: NB,
      __spreadArray: tB,
      __await: fB,
      __asyncGenerator: sB,
      __asyncDelegator: MB,
      __asyncValues: zB,
      __makeTemplateObject: wB,
      __importStar: KB,
      __importDefault: rB,
      __classPrivateFieldGet: IB,
      __classPrivateFieldSet: cB,
      __classPrivateFieldIn: SB,
      __addDisposableResource: PB,
      __disposeResources: RB,
      __rewriteRelativeImportExtension: aB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);