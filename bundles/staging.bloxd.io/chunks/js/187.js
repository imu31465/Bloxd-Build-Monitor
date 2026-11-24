export const id = 187;
export const ids = [187];
export const modules = {
  9248: (BB, jB) => {
    jB.discordURLBuilder = function(BB) {
      var jB;
      const zB = (null === (jB = null === window || void 0 === window ? void 0 : window.location) || void 0 === jB ? void 0 : jB.hostname) || "localhost",
        QB = BB.hostname.split("."),
        nB = !BB.hostname.includes("trycloudflare.com") && !BB.hostname.includes("discordsays.com") && QB.length > 2 ? `/${QB[0]}` : "";
      return BB.pathname.startsWith("/.proxy") ? `${BB.protocol}//${zB}${nB}${BB.pathname}${BB.search}` : `${BB.protocol}//${zB}/.proxy/colyseus${nB}${BB.pathname}${BB.search}`
    }
  },
  9233: (BB, jB, zB) => {
    var QB, nB, dB, IB, NB = zB(9129),
      uB = zB(9240),
      UB = zB(9194);
    QB = new WeakMap, nB = new WeakMap, dB = new WeakMap, IB = new WeakMap, jB.Auth = class {
      constructor(BB) {
        this.http = BB, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, QB.set(this, !1), nB.set(this, void 0), dB.set(this, void 0), IB.set(this, UB.createNanoEvents()), uB.getItem(this.settings.key, (BB => this.token = BB))
      }
      set token(BB) {
        this.http.authToken = BB
      }
      get token() {
        return this.http.authToken
      }
      onChange(BB) {
        const jB = NB.__classPrivateFieldGet(this, IB, "f").on("change", BB);
        return NB.__classPrivateFieldGet(this, QB, "f") || NB.__classPrivateFieldSet(this, nB, new Promise(((BB, jB) => {
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
        })), "f"), NB.__classPrivateFieldSet(this, QB, !0, "f"), jB
      }
      getUserData() {
        return NB.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(BB, jB, zB) {
        return NB.__awaiter(this, void 0, void 0, (function*() {
          const QB = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: BB,
              password: jB,
              options: zB
            }
          })).data;
          return this.emitChange(QB), QB
        }))
      }
      signInWithEmailAndPassword(BB, jB) {
        return NB.__awaiter(this, void 0, void 0, (function*() {
          const zB = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: BB,
              password: jB
            }
          })).data;
          return this.emitChange(zB), zB
        }))
      }
      signInAnonymously(BB) {
        return NB.__awaiter(this, void 0, void 0, (function*() {
          const jB = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: BB
            }
          })).data;
          return this.emitChange(jB), jB
        }))
      }
      sendPasswordResetEmail(BB) {
        return NB.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: BB
            }
          })).data
        }))
      }
      signInWithProvider(BB) {
        return NB.__awaiter(this, arguments, void 0, (function*(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((zB, QB) => {
            const nB = jB.width || 480,
              IB = jB.height || 768,
              uB = this.token ? `?token=${this.token}` : "",
              UB = `Login with ${BB[0].toUpperCase()+BB.substring(1)}`,
              aB = this.http.client.getHttpEndpoint(`${jB.prefix||`${this.settings.path}/provider`}/${BB}${uB}`),
              pB = screen.width / 2 - nB / 2,
              rB = screen.height / 2 - IB / 2;
            NB.__classPrivateFieldSet(this, dB, window.open(aB, UB, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + nB + ", height=" + IB + ", top=" + rB + ", left=" + pB), "f");
            const sB = BB => {
                void 0 === BB.data.user && void 0 === BB.data.token || (clearInterval(JB), NB.__classPrivateFieldGet(this, dB, "f").close(), NB.__classPrivateFieldSet(this, dB, void 0, "f"), window.removeEventListener("message", sB), void 0 !== BB.data.error ? QB(BB.data.error) : (zB(BB.data), this.emitChange(BB.data)))
              },
              JB = setInterval((() => {
                NB.__classPrivateFieldGet(this, dB, "f") && !NB.__classPrivateFieldGet(this, dB, "f").closed || (NB.__classPrivateFieldSet(this, dB, void 0, "f"), QB("xz"), window.removeEventListener("message", sB))
              }), 200);
            window.addEventListener("message", sB)
          }))
        }))
      }
      signOut() {
        return NB.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(BB) {
        void 0 !== BB.token && (this.token = BB.token, null === BB.token ? uB.removeItem(this.settings.key) : uB.setItem(this.settings.key, BB.token)), NB.__classPrivateFieldGet(this, IB, "f").emit("change", BB)
      }
    }
  },
  9126: (BB, jB, zB) => {
    var QB, nB = zB(9129),
      dB = zB(9132),
      IB = zB(9138),
      NB = zB(9219),
      uB = zB(9233),
      UB = zB(9248);
    class aB extends Error {
      constructor(BB, jB) {
        super(BB), this.code = jB, this.name = "MatchMakeError", Object.setPrototypeOf(this, aB.prototype)
      }
    }
    const pB = "undefined" !== typeof window && "undefined" !== typeof(null === (QB = null === window || void 0 === window ? void 0 : window.location) || void 0 === QB ? void 0 : QB.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class rB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pB,
          jB = arguments.length > 1 ? arguments[1] : void 0;
        var zB, QB;
        if ("string" === typeof BB) {
          const jB = BB.startsWith("/") ? new URL(BB, pB) : new URL(BB),
            zB = "https:" === jB.protocol || "wss:" === jB.protocol,
            QB = Number(jB.port || (zB ? 443 : 80));
          this.settings = {
            hostname: jB.hostname,
            pathname: jB.pathname,
            port: QB,
            secure: zB,
            searchParams: jB.searchParams.toString() || void 0
          }
        } else void 0 === BB.port && (BB.port = BB.secure ? 443 : 80), void 0 === BB.pathname && (BB.pathname = ""), this.settings = BB;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new NB.HTTP(this, (null === jB || void 0 === jB ? void 0 : jB.headers) || {}), this.auth = new uB.Auth(this.http), this.urlBuilder = null === jB || void 0 === jB ? void 0 : jB.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (QB = null === (zB = null === window || void 0 === window ? void 0 : window.location) || void 0 === zB ? void 0 : zB.hostname) || void 0 === QB ? void 0 : QB.includes("discordsays.com")) && (this.urlBuilder = UB.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(BB) {
        return nB.__awaiter(this, arguments, void 0, (function*(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            zB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", BB, jB, zB)
        }))
      }
      create(BB) {
        return nB.__awaiter(this, arguments, void 0, (function*(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            zB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", BB, jB, zB)
        }))
      }
      join(BB) {
        return nB.__awaiter(this, arguments, void 0, (function*(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            zB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", BB, jB, zB)
        }))
      }
      joinById(BB) {
        return nB.__awaiter(this, arguments, void 0, (function*(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            zB = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", BB, jB, zB)
        }))
      }
      reconnect(BB, jB) {
        return nB.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof BB && "string" === typeof jB) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [zB, QB] = BB.split(":");
          if (!zB || !QB) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", zB, {
            reconnectionToken: QB
          }, jB)
        }))
      }
      consumeSeatReservation(BB, jB, zB) {
        return nB.__awaiter(this, void 0, void 0, (function*() {
          const QB = this.createRoom(BB.room.name, jB);
          QB.roomId = BB.room.roomId, QB.sessionId = BB.sessionId;
          const IB = {
            sessionId: QB.sessionId
          };
          BB.reconnectionToken && (IB.reconnectionToken = BB.reconnectionToken);
          const NB = zB || QB;
          return QB.connect(this.buildEndpoint(BB.room, IB, BB.protocol), BB.devMode && (() => nB.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${QB.roomId}'...`);
            let zB = 0;
            const dB = () => nB.__awaiter(this, void 0, void 0, (function*() {
              zB++;
              try {
                yield this.consumeSeatReservation(BB, jB, NB), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${QB.roomId}'`)
              } catch (nB) {
                zB < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${zB} out of 8)`), setTimeout(dB, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(dB, 2e3)
          }))), NB, BB, this.http.headers), new Promise(((BB, jB) => {
            const zB = (BB, zB) => jB(new dB.ServerError(BB, zB));
            NB.onError.once(zB), NB.onJoin.once((() => {
              NB.onError.remove(zB), setTimeout((() => {
                try {
                  const BB = [2, 221, 78, 205, 170, 100, 227, 105, 7, 11, 168, 73, 160, 189, 207, 237, 124, 173, 184, 99];
                  BB && NB.lH(128, new Uint8Array(BB))
                } catch {}
              }), 3e3), BB(NB)
            }))
          }))
        }))
      }
      createMatchMakeRequest(BB, jB) {
        return nB.__awaiter(this, arguments, void 0, (function*(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            QB = arguments.length > 3 ? arguments[3] : void 0,
            nB = arguments.length > 4 ? arguments[4] : void 0;
          const dB = (yield this.http.post(`matchmake/${BB}/${jB}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(zB)
          })).data;
          if (dB.error) throw new aB(dB.error, dB.code);
          return "reconnect" === BB && (dB.reconnectionToken = zB.reconnectionToken), yield this.consumeSeatReservation(dB, QB, nB)
        }))
      }
      createRoom(BB, jB) {
        return new IB.xp(BB, jB)
      }
      buildEndpoint(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          QB = this.settings.searchParams || "";
        this.http.authToken && (jB._authToken = this.http.authToken);
        for (const IB in jB) jB.hasOwnProperty(IB) && (QB += (QB ? "&" : "") + `${IB}=${jB[IB]}`);
        "h3" === zB && (zB = "http");
        let nB = this.settings.secure ? `${zB}s://` : `${zB}://`;
        BB.publicAddress ? nB += `${BB.publicAddress}` : nB += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const dB = `${nB}/${BB.processId}/${BB.roomId}?${QB}`;
        return this.urlBuilder ? this.urlBuilder(new URL(dB)) : dB
      }
      getHttpEndpoint() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const jB = BB.startsWith("/") ? BB : `/${BB}`;
        let zB = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${jB}`;
        return this.settings.searchParams && (zB += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(zB)) : zB
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    rB.VERSION = "0.16.22", jB.Client = rB, jB.MatchMakeError = aB
  },
  9145: (BB, jB, zB) => {
    var QB = zB(9151),
      nB = zB(9166);
    jB.Connection = class {
      constructor(BB) {
        if (this.events = {}, "h3" === BB) this.transport = new QB.H3TransportTransport(this.events);
        else this.transport = new nB.WebSocketTransport(this.events)
      }
      connect(BB, jB) {
        this.transport.connect.call(this.transport, BB, jB)
      }
      send(BB) {
        this.transport.send(BB)
      }
      sendUnreliable(BB) {
        this.transport.sendUnreliable(BB)
      }
      close(BB, jB) {
        this.transport.close(BB, jB)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9219: (BB, jB, zB) => {
    var QB = zB(9132);

    function nB(BB) {
      var jB = Object.create(null);
      return BB && Object.keys(BB).forEach((function(zB) {
        if ("default" !== zB) {
          var QB = Object.getOwnPropertyDescriptor(BB, zB);
          Object.defineProperty(jB, zB, QB.get ? QB : {
            enumerable: !0,
            get: function() {
              return BB[zB]
            }
          })
        }
      })), jB.default = BB, Object.freeze(jB)
    }
    var dB = nB(zB(9228));
    jB.HTTP = class {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = BB, this.headers = jB
      }
      get(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", BB, jB)
      }
      post(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", BB, jB)
      }
      del(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", BB, jB)
      }
      put(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", BB, jB)
      }
      request(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return dB[BB](this.client.getHttpEndpoint(jB), this.getOptions(zB)).catch((BB => {
          var jB;
          if (BB.aborted) throw new QB.AbortError("Request aborted");
          const zB = BB.statusCode,
            nB = (null === (jB = BB.data) || void 0 === jB ? void 0 : jB.error) || BB.statusMessage || BB.message;
          if (!zB && !nB) throw BB;
          throw new QB.ServerError(zB, nB)
        }))
      }
      getOptions(BB) {
        return BB.headers = Object.assign({}, this.headers, BB.headers), this.authToken && (BB.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (BB.withCredentials = !0), BB
      }
    }
  },
  9177: (BB, jB) => {
    var zB, QB;
    jB.Protocol = void 0, (zB = jB.Protocol || (jB.Protocol = {}))[zB.HANDSHAKE = 9] = "HANDSHAKE", zB[zB.JOIN_ROOM = 10] = "JOIN_ROOM", zB[zB.ERROR = 11] = "ERROR", zB[zB.LEAVE_ROOM = 12] = "LEAVE_ROOM", zB[zB.ROOM_DATA = 13] = "ROOM_DATA", zB[zB.ROOM_STATE = 14] = "ROOM_STATE", zB[zB.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", zB[zB.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", zB[zB.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", jB.ErrorCode = void 0, (QB = jB.ErrorCode || (jB.ErrorCode = {}))[QB.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", QB[QB.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", QB[QB.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", QB[QB.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", QB[QB.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", QB[QB.AUTH_FAILED = 4215] = "AUTH_FAILED", QB[QB.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9138: (BB, jB, zB) => {
    var QB = zB(9145),
      nB = zB(9177),
      dB = zB(9186),
      IB = zB(9194),
      NB = zB(9203),
      uB = zB(9159),
      UB = zB(9210),
      aB = zB(9132),
      pB = zB(9213);
    class rB {
      constructor(BB, jB) {
        this.onStateChange = NB.createSignal(), this.onError = NB.createSignal(), this.WG = NB.createSignal(), this.onJoin = NB.createSignal(), this.hasJoined = !1, this.onMessageHandlers = IB.createNanoEvents(), this.roomId = null, this.name = BB, this.packr = new pB.Packr, this.packr.encode(void 0), jB && (this.Rk = new(dB.getSerializer("schema")), this.rootSchema = jB, this.Rk.state = new jB), this.onError(((BB, jB) => {
          var zB;
          return null === (zB = console.warn) || void 0 === zB ? void 0 : zB.call(console, `colyseus.js - onError => (${BB}) ${jB}`)
        })), this.WG((() => this.Wk()))
      }
      connect(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          nB = arguments.length > 3 ? arguments[3] : void 0,
          dB = arguments.length > 4 ? arguments[4] : void 0;
        const IB = new QB.Connection(nB.protocol);
        if (zB.connection = IB, IB.events.onmessage = rB.prototype.onMessageCallback.bind(zB), IB.events.onclose = function(BB) {
            var QB;
            if (!zB.hasJoined) return null === (QB = console.warn) || void 0 === QB || QB.call(console, `Room connection was closed unexpectedly (${BB.code}): ${BB.reason}`), void zB.onError.invoke(BB.code, BB.reason);
            BB.code === aB.CloseCode.DEVMODE_RESTART && jB ? jB() : (zB.WG.invoke(BB.code, BB.reason), zB.destroy())
          }, IB.events.onerror = function(BB) {
            var jB;
            null === (jB = console.warn) || void 0 === jB || jB.call(console, `Room, onError (${BB.code}): ${BB.reason}`), zB.onError.invoke(BB.code, BB.reason)
          }, "h3" === nB.protocol) {
          const jB = new URL(BB);
          IB.connect(jB.origin, nB)
        } else IB.connect(BB, dB)
      }
      leave() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((jB => {
          this.WG((BB => jB(BB))), this.connection ? BB ? (this.packr.buffer[0] = nB.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.WG.invoke(aB.CloseCode.CONSENTED)
        }))
      }
      hG(BB, jB) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(BB), jB)
      }
      send(BB, jB) {
        const zB = {
          offset: 1
        };
        this.packr.buffer[0] = nB.Protocol.ROOM_DATA, "string" === typeof BB ? uB.encode.string(this.packr.buffer, BB, zB) : uB.encode.number(this.packr.buffer, BB, zB), this.packr.position = 0;
        const QB = void 0 !== jB ? this.packr.pack(jB, 2048 + zB.offset) : this.packr.buffer.subarray(0, zB.offset);
        this.connection.send(QB)
      }
      sendUnreliable(BB, jB) {
        const zB = {
          offset: 1
        };
        this.packr.buffer[0] = nB.Protocol.ROOM_DATA, "string" === typeof BB ? uB.encode.string(this.packr.buffer, BB, zB) : uB.encode.number(this.packr.buffer, BB, zB), this.packr.position = 0;
        const QB = void 0 !== jB ? this.packr.pack(jB, 2048 + zB.offset) : this.packr.buffer.subarray(0, zB.offset);
        this.connection.sendUnreliable(QB)
      }
      lH(BB, jB) {
        const zB = {
          offset: 1
        };
        if (this.packr.buffer[0] = nB.Protocol.ROOM_DATA_BYTES, "string" === typeof BB ? uB.encode.string(this.packr.buffer, BB, zB) : uB.encode.number(this.packr.buffer, BB, zB), jB.byteLength + zB.offset > this.packr.buffer.byteLength) {
          const BB = new Uint8Array(zB.offset + jB.byteLength);
          BB.set(this.packr.buffer), this.packr.useBuffer(BB)
        }
        this.packr.buffer.set(jB, zB.offset), this.connection.send(this.packr.buffer.subarray(0, zB.offset + jB.byteLength))
      }
      get state() {
        return this.Rk.getState()
      }
      Wk() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.WG.clear(), this.onMessageHandlers.events = {}, this.Rk instanceof UB.jF && (this.Rk.GJ.root.callbacks = {})
      }
      onMessageCallback(BB) {
        const jB = new Uint8Array(BB.data),
          zB = {
            offset: 1
          },
          QB = jB[0];
        if (QB === nB.Protocol.JOIN_ROOM) {
          const BB = uB.decode.utf8Read(jB, zB, jB[zB.offset++]);
          if (this.serializerId = uB.decode.utf8Read(jB, zB, jB[zB.offset++]), !this.Rk) {
            const BB = dB.getSerializer(this.serializerId);
            this.Rk = new BB
          }
          jB.byteLength > zB.offset && this.Rk.handshake && this.Rk.handshake(jB, zB), this.reconnectionToken = `${this.roomId}:${BB}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = nB.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (QB === nB.Protocol.ERROR) {
          const BB = uB.decode.number(jB, zB),
            QB = uB.decode.string(jB, zB);
          this.onError.invoke(BB, QB)
        } else if (QB === nB.Protocol.LEAVE_ROOM) this.leave();
        else if (QB === nB.Protocol.ROOM_STATE) this.Rk.setState(jB, zB), this.onStateChange.invoke(this.Rk.getState());
        else if (QB === nB.Protocol.ROOM_STATE_PATCH) this.Rk.patch(jB, zB), this.onStateChange.invoke(this.Rk.getState());
        else if (QB === nB.Protocol.ROOM_DATA) {
          const BB = uB.decode.stringCheck(jB, zB) ? uB.decode.string(jB, zB) : uB.decode.number(jB, zB),
            QB = jB.byteLength > zB.offset ? pB.unpack(jB, {
              start: zB.offset
            }) : void 0;
          this.dispatchMessage(BB, QB)
        } else if (QB === nB.Protocol.ROOM_DATA_BYTES) {
          const BB = uB.decode.stringCheck(jB, zB) ? uB.decode.string(jB, zB) : uB.decode.number(jB, zB);
          this.dispatchMessage(BB, jB.subarray(zB.offset))
        }
      }
      dispatchMessage(BB, jB) {
        var zB;
        const QB = this.getMessageHandlerKey(BB);
        this.onMessageHandlers.events[QB] ? this.onMessageHandlers.emit(QB, jB) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", BB, jB) : null === (zB = console.warn) || void 0 === zB || zB.call(console, `colyseus.js: onMessage() not registered for type '${BB}'.`)
      }
      destroy() {
        this.Rk && this.Rk.teardown()
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
    jB.xp = rB
  },
  9240: (BB, jB, zB) => {
    var QB = zB(9129);
    let nB;

    function dB() {
      if (!nB) try {
        nB = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (BB) {}
      return nB || "undefined" === typeof globalThis.indexedDB || (nB = new IB), nB || (nB = {
        cache: {},
        setItem: function(BB, jB) {
          this.cache[BB] = jB
        },
        getItem: function(BB) {
          this.cache[BB]
        },
        removeItem: function(BB) {
          delete this.cache[BB]
        }
      }), nB
    }
    class IB {
      constructor() {
        this.dbPromise = new Promise((BB => {
          const jB = indexedDB.open("_colyseus_storage", 1);
          jB.onupgradeneeded = () => jB.result.createObjectStore("store"), jB.onsuccess = () => BB(jB.result)
        }))
      }
      tx(BB, jB) {
        return QB.__awaiter(this, void 0, void 0, (function*() {
          const zB = (yield this.dbPromise).transaction("store", BB).objectStore("store");
          return jB(zB)
        }))
      }
      setItem(BB, jB) {
        return this.tx("readwrite", (zB => zB.put(jB, BB))).then()
      }
      getItem(BB) {
        return QB.__awaiter(this, void 0, void 0, (function*() {
          const jB = yield this.tx("readonly", (jB => jB.get(BB)));
          return new Promise((BB => {
            jB.onsuccess = () => BB(jB.result)
          }))
        }))
      }
      removeItem(BB) {
        return this.tx("readwrite", (jB => jB.delete(BB))).then()
      }
    }
    jB.getItem = function(BB, jB) {
      const zB = dB().getItem(BB);
      "undefined" !== typeof Promise && zB instanceof Promise ? zB.then((BB => jB(BB))) : jB(zB)
    }, jB.removeItem = function(BB) {
      dB().removeItem(BB)
    }, jB.setItem = function(BB, jB) {
      dB().setItem(BB, jB)
    }
  },
  9194: (BB, jB) => {
    jB.createNanoEvents = () => ({
      emit(BB) {
        let jB = this.events[BB] || [];
        for (var zB = arguments.length, QB = new Array(zB > 1 ? zB - 1 : 0), nB = 1; nB < zB; nB++) QB[nB - 1] = arguments[nB];
        for (let dB = 0, IB = jB.length; dB < IB; dB++) jB[dB](...QB)
      },
      events: {},
      on(BB, jB) {
        var zB;
        return (null === (zB = this.events[BB]) || void 0 === zB ? void 0 : zB.push(jB)) || (this.events[BB] = [jB]), () => {
          var zB;
          this.events[BB] = null === (zB = this.events[BB]) || void 0 === zB ? void 0 : zB.filter((BB => jB !== BB))
        }
      }
    })
  },
  9203: (BB, jB) => {
    class zB {
      constructor() {
        this.handlers = []
      }
      register(BB) {
        return this.handlers.push(BB), this
      }
      invoke() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        this.handlers.forEach((BB => BB.apply(this, jB)))
      }
      invokeAsync() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        return Promise.all(this.handlers.map((BB => BB.apply(this, jB))))
      }
      remove(BB) {
        const jB = this.handlers.indexOf(BB);
        this.handlers[jB] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    jB.EventEmitter = zB, jB.createSignal = function() {
      const BB = new zB;

      function jB(jB) {
        return BB.register(jB, null === this)
      }
      return jB.once = jB => {
        const zB = function() {
          for (var QB = arguments.length, nB = new Array(QB), dB = 0; dB < QB; dB++) nB[dB] = arguments[dB];
          jB.apply(this, nB), BB.remove(zB)
        };
        BB.register(zB)
      }, jB.remove = jB => BB.remove(jB), jB.invoke = function() {
        return BB.invoke(...arguments)
      }, jB.invokeAsync = function() {
        return BB.invokeAsync(...arguments)
      }, jB.clear = () => BB.clear(), jB
    }
  },
  9132: (BB, jB) => {
    var zB;
    jB.CloseCode = void 0, (zB = jB.CloseCode || (jB.CloseCode = {}))[zB.CONSENTED = 4e3] = "CONSENTED", zB[zB.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class QB extends Error {
      constructor(BB, jB) {
        super(jB), this.name = "ServerError", this.code = BB
      }
    }
    class nB extends Error {
      constructor(BB) {
        super(BB), this.name = "AbortError"
      }
    }
    jB.AbortError = nB, jB.ServerError = QB
  },
  9109: (BB, jB, zB) => {
    zB(9117);
    var QB = zB(9126),
      nB = zB(9177),
      dB = zB(9138),
      IB = zB(9233),
      NB = zB(9132),
      uB = zB(9210),
      UB = zB(9250),
      aB = zB(9186);
    aB.registerSerializer("schema", uB.jF), aB.registerSerializer("none", UB.NoneSerializer), jB.Client = QB.Client, jB.MatchMakeError = QB.MatchMakeError, Object.defineProperty(jB, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return nB.ErrorCode
      }
    }), Object.defineProperty(jB, "Protocol", {
      enumerable: !0,
      get: function() {
        return nB.Protocol
      }
    }), jB.xp = dB.xp, jB.Auth = IB.Auth, jB.ServerError = NB.ServerError, jB.jF = uB.jF, jB.getStateCallbacks = uB.getStateCallbacks, jB.registerSerializer = aB.registerSerializer
  },
  9117: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = BB => null !== BB && "object" === typeof BB && BB.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9250: (BB, jB) => {
    jB.NoneSerializer = class {
      setState(BB) {}
      getState() {
        return null
      }
      patch(BB) {}
      teardown() {}
      handshake(BB) {}
    }
  },
  9210: (BB, jB, zB) => {
    var QB = zB(9159);
    jB.jF = class {
      setState(BB, jB) {
        this.GJ.decode(BB, jB)
      }
      getState() {
        return this.state
      }
      patch(BB, jB) {
        return this.GJ.decode(BB, jB)
      }
      teardown() {
        this.GJ.root.clearRefs()
      }
      handshake(BB, jB) {
        this.state ? (QB.Reflection.decode(BB, jB), this.GJ = new QB.Decoder(this.state)) : (this.GJ = QB.Reflection.decode(BB, jB), this.state = this.GJ.state)
      }
    }, jB.getStateCallbacks = function(BB) {
      try {
        return QB.getDecoderStateCallbacks(BB.Rk.GJ)
      } catch (jB) {
        return
      }
    }
  },
  9186: (BB, jB) => {
    const zB = {};
    jB.getSerializer = function(BB) {
      const jB = zB[BB];
      if (!jB) throw new Error("missing serializer: " + BB);
      return jB
    }, jB.registerSerializer = function(BB, jB) {
      zB[BB] = jB
    }
  },
  9151: (BB, jB, zB) => {
    var QB = zB(9129),
      nB = zB(9159);
    jB.H3TransportTransport = class {
      constructor(BB) {
        this.events = BB, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zB = jB.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(jB.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(BB, zB), this.wt.ready.then((BB => {
          console.log("WebTransport ready!", BB), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((BB => {
            this.reader = BB.value.readable.getReader(), this.writer = BB.value.writable.getWriter(), this.sendSeatReservation(jB.room.roomId, jB.sessionId, jB.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const jB = nB.encode.number(this.lengthPrefixBuffer, BB.length, {
            offset: 0
          }),
          zB = new Uint8Array(jB + BB.length);
        zB.set(this.lengthPrefixBuffer.subarray(0, jB), 0), zB.set(BB, jB), this.writer.write(zB)
      }
      sendUnreliable(BB) {
        const jB = nB.encode.number(this.lengthPrefixBuffer, BB.length, {
            offset: 0
          }),
          zB = new Uint8Array(jB + BB.length);
        zB.set(this.lengthPrefixBuffer.subarray(0, jB), 0), zB.set(BB, jB), this.unreliableWriter.write(zB)
      }
      close(BB, jB) {
        try {
          this.wt.close({
            closeCode: BB,
            reason: jB
          })
        } catch (zB) {
          console.error(zB)
        }
      }
      readIncomingData() {
        return QB.__awaiter(this, void 0, void 0, (function*() {
          let BB;
          for (; this.isOpen;) {
            try {
              BB = yield this.reader.read();
              const jB = BB.value,
                zB = {
                  offset: 0
                };
              do {
                const BB = nB.decode.number(jB, zB);
                this.events.onmessage({
                  data: jB.subarray(zB.offset, zB.offset + BB)
                }), zB.offset += BB
              } while (zB.offset < jB.length)
            } catch (jB) {
              -1 === jB.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", jB);
              break
            }
            if (BB.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return QB.__awaiter(this, void 0, void 0, (function*() {
          let BB;
          for (; this.isOpen;) {
            try {
              BB = yield this.unreliableReader.read();
              const jB = BB.value,
                zB = {
                  offset: 0
                };
              do {
                const BB = nB.decode.number(jB, zB);
                this.events.onmessage({
                  data: jB.subarray(zB.offset, zB.offset + BB)
                }), zB.offset += BB
              } while (zB.offset < jB.length)
            } catch (jB) {
              -1 === jB.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", jB);
              break
            }
            if (BB.done) break
          }
        }))
      }
      sendSeatReservation(BB, jB, zB) {
        const QB = {
            offset: 0
          },
          dB = [];
        nB.encode.string(dB, BB, QB), nB.encode.string(dB, jB, QB), zB && nB.encode.string(dB, zB, QB), this.writer.write(new Uint8Array(dB).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9166: (BB, jB, zB) => {
    var QB = zB(9172);
    const nB = globalThis.WebSocket || QB;
    jB.WebSocketTransport = class {
      constructor(BB) {
        this.events = BB
      }
      send(BB) {
        this.ws.send(BB)
      }
      sendUnreliable(BB) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(BB, jB) {
        try {
          this.ws = new nB(BB, {
            headers: jB,
            protocols: this.protocols
          })
        } catch (zB) {
          this.ws = new nB(BB, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(BB, jB) {
        this.ws.close(BB, jB)
      }
      get isOpen() {
        return this.ws.readyState === nB.OPEN
      }
    }
  },
  9172: BB => {
    BB.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9228: (BB, jB, zB) => {
    function QB(BB, jB) {
      jB.headers = BB.headers || {}, jB.statusMessage = BB.statusText, jB.statusCode = BB.status, jB.data = BB.response
    }

    function nB(BB, jB, zB) {
      return new Promise((function(nB, dB) {
        zB = zB || {};
        var IB, NB, uB, UB = new XMLHttpRequest,
          aB = zB.body,
          pB = zB.headers || {};
        for (IB in zB.timeout && (UB.timeout = zB.timeout), UB.ontimeout = UB.onerror = function(BB) {
            BB.timeout = "timeout" == BB.type, dB(BB)
          }, UB.onabort = function(BB) {
            BB.aborted = !0, dB(BB)
          }, UB.open(BB, jB.href || jB), UB.onload = function() {
            for (uB = UB.getAllResponseHeaders().trim().split(/[\r\n]+/), QB(UB, UB); NB = uB.shift();) NB = NB.split(": "), UB.headers[NB.shift().toLowerCase()] = NB.join(": ");
            if ((NB = UB.headers["content-type"]) && ~NB.indexOf("application/json")) try {
              UB.data = JSON.parse(UB.data, zB.reviver)
            } catch (BB) {
              return QB(UB, BB), dB(BB)
            }(UB.status >= 400 ? dB : nB)(UB)
          }, typeof FormData < "u" && aB instanceof FormData || aB && "object" == typeof aB && (pB["content-type"] = "application/json", aB = JSON.stringify(aB)), UB.withCredentials = !!zB.withCredentials, pB) UB.setRequestHeader(IB, pB[IB]);
        UB.send(aB), zB.signal && zB.signal.addEventListener("abort", (function() {
          UB.abort()
        }))
      }))
    }
    zB.r(jB), zB.d(jB, {
      del: () => uB,
      get: () => dB,
      patch: () => NB,
      post: () => IB,
      put: () => UB,
      send: () => nB
    });
    var dB = nB.bind(nB, "GET"),
      IB = nB.bind(nB, "POST"),
      NB = nB.bind(nB, "PATCH"),
      uB = nB.bind(nB, "DELETE"),
      UB = nB.bind(nB, "PUT")
  },
  9213: (BB, jB, zB) => {
    var QB, nB, dB;
    zB.r(jB), zB.d(jB, {
      ALWAYS: () => Kj,
      C1: () => tB,
      DECIMAL_FIT: () => cj,
      DECIMAL_ROUND: () => Cj,
      Decoder: () => uj,
      Encoder: () => wj,
      FLOAT32_OPTIONS: () => sj,
      NEVER: () => xj,
      Packr: () => Vj,
      RESERVE_START_SPACE: () => Rj,
      RESET_BUFFER_MODE: () => vj,
      REUSE_BUFFER_MODE: () => bj,
      Unpackr: () => fB,
      addExtension: () => Tj,
      clearSource: () => Ij,
      decode: () => rj,
      decodeIter: () => Oj,
      encode: () => lj,
      encodeIter: () => Bz,
      isNativeAccelerationEnabled: () => PB,
      mapsAsObjects: () => zz,
      pack: () => ej,
      roundFloat32: () => Lj,
      unpack: () => aj,
      unpackMultiple: () => pj,
      useRecords: () => jz
    });
    try {
      QB = new TextDecoder
    } catch (Qz) {}
    var IB = 0;
    const NB = [];
    var uB, UB, aB, pB, rB, sB = NB,
      JB = 0,
      mB = {},
      yB = 0,
      kB = 0,
      GB = [],
      LB = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class gB {}
    const tB = new gB;
    tB.name = "MessagePack 0xC1";
    var SB, MB, EB, iB = !1,
      qB = 2;
    try {
      new Function("")
    } catch (Qz) {
      qB = 1 / 0
    }
    class fB {
      constructor(BB) {
        BB && (!1 === BB.useRecords && void 0 === BB.mapsAsObjects && (BB.mapsAsObjects = !0), BB.sequential && !1 !== BB.trusted && (BB.trusted = !0, BB.structures || 0 == BB.useRecords || (BB.structures = [], BB.maxSharedStructures || (BB.maxSharedStructures = 0))), BB.structures ? BB.structures.sharedLength = BB.structures.length : BB.getStructures && ((BB.structures = []).uninitialized = !0, BB.structures.sharedLength = 0), BB.int64AsNumber && (BB.int64AsType = "number")), Object.assign(this, BB)
      }
      unpack(BB, jB) {
        if (nB) return dj((() => (Ij(), this ? this.unpack(BB, jB) : fB.prototype.unpack.call(LB, BB, jB))));
        BB.buffer || BB.constructor !== ArrayBuffer || (BB = "undefined" !== typeof Buffer ? Buffer.from(BB) : new Uint8Array(BB)), "object" === typeof jB ? (dB = jB.end || BB.length, IB = jB.start || 0) : (IB = 0, dB = jB > -1 ? jB : BB.length), JB = 0, kB = 0, UB = null, sB = NB, aB = null, nB = BB;
        try {
          rB = BB.dataView || (BB.dataView = new DataView(BB.buffer, BB.byteOffset, BB.byteLength))
        } catch (Qz) {
          if (nB = null, BB instanceof Uint8Array) throw Qz;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (BB && "object" == typeof BB ? BB.constructor.name : typeof BB))
        }
        if (this instanceof fB) {
          if (mB = this, this.structures) return uB = this.structures, oB(jB);
          (!uB || uB.length > 0) && (uB = [])
        } else mB = LB, (!uB || uB.length > 0) && (uB = []);
        return oB(jB)
      }
      unpackMultiple(BB, jB) {
        let zB, QB = 0;
        try {
          iB = !0;
          let nB = BB.length,
            dB = this ? this.unpack(BB, nB) : Uj.unpack(BB, nB);
          if (!jB) {
            for (zB = [dB]; IB < nB;) QB = IB, zB.push(oB());
            return zB
          }
          if (!1 === jB(dB, QB, IB)) return;
          for (; IB < nB;)
            if (QB = IB, !1 === jB(oB(), QB, IB)) return
        } catch (Qz) {
          throw Qz.lastPosition = QB, Qz.values = zB, Qz
        } finally {
          iB = !1, Ij()
        }
      }
      _mergeStructures(BB, jB) {
        MB && (BB = MB.call(this, BB)), BB = BB || [], Object.isFrozen(BB) && (BB = BB.map((BB => BB.slice(0))));
        for (let zB = 0, QB = BB.length; zB < QB; zB++) {
          let jB = BB[zB];
          jB && (jB.isShared = !0, zB >= 32 && (jB.highByte = zB - 32 >> 5))
        }
        BB.sharedLength = BB.length;
        for (let zB in jB || [])
          if (zB >= 0) {
            let QB = BB[zB],
              nB = jB[zB];
            nB && (QB && ((BB.restoreStructures || (BB.restoreStructures = []))[zB] = QB), BB[zB] = nB)
          } return this.structures = BB
      }
      decode(BB, jB) {
        return this.unpack(BB, jB)
      }
    }

    function oB(BB) {
      try {
        if (!mB.trusted && !iB) {
          let BB = uB.sharedLength || 0;
          BB < uB.length && (uB.length = BB)
        }
        let jB;
        if (mB.randomAccessStructure && nB[IB] < 64 && nB[IB] >= 32 && SB ? (jB = SB(nB, IB, dB, mB), nB = null, BB && BB.lazy || !jB || (jB = jB.toJSON()), IB = dB) : jB = DB(), aB && (IB = aB.postBundlePosition, aB = null), iB && (uB.restoreStructures = null), IB == dB) uB && uB.restoreStructures && HB(), uB = null, nB = null, pB && (pB = null);
        else {
          if (IB > dB) throw new Error("Unexpected end of MessagePack data");
          if (!iB) {
            let BB;
            try {
              BB = JSON.stringify(jB, ((BB, jB) => "bigint" === typeof jB ? `${jB}n` : jB)).slice(0, 100)
            } catch (Qz) {
              BB = "(JSON view not available " + Qz + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + BB)
          }
        }
        return jB
      } catch (Qz) {
        throw uB && uB.restoreStructures && HB(), Ij(), (Qz instanceof RangeError || Qz.message.startsWith("Unexpected end of buffer") || IB > dB) && (Qz.incomplete = !0), Qz
      }
    }

    function HB() {
      for (let BB in uB.restoreStructures) uB[BB] = uB.restoreStructures[BB];
      uB.restoreStructures = null
    }

    function DB() {
      let BB = nB[IB++];
      if (BB < 160) {
        if (BB < 128) {
          if (BB < 64) return BB;
          {
            let jB = uB[63 & BB] || mB.getStructures && hB()[63 & BB];
            return jB ? (jB.read || (jB.read = YB(jB, 63 & BB)), jB.read()) : BB
          }
        }
        if (BB < 144) {
          if (BB -= 128, mB.mapsAsObjects) {
            let jB = {};
            for (let zB = 0; zB < BB; zB++) {
              let BB = RB();
              "__proto__" === BB && (BB = "__proto_"), jB[BB] = DB()
            }
            return jB
          } {
            let jB = new Map;
            for (let zB = 0; zB < BB; zB++) jB.set(DB(), DB());
            return jB
          }
        } {
          BB -= 144;
          let jB = new Array(BB);
          for (let zB = 0; zB < BB; zB++) jB[zB] = DB();
          return mB.freezeData ? Object.freeze(jB) : jB
        }
      }
      if (BB < 192) {
        let jB = BB - 160;
        if (kB >= IB) return UB.slice(IB - yB, (IB += jB) - yB);
        if (0 == kB && dB < 140) {
          let BB = jB < 16 ? KB(jB) : xB(jB);
          if (null != BB) return BB
        }
        return XB(jB)
      } {
        let jB;
        switch (BB) {
          case 192:
            return null;
          case 193:
            return aB ? (jB = DB(), jB > 0 ? aB[1].slice(aB.position1, aB.position1 += jB) : aB[0].slice(aB.position0, aB.position0 -= jB)) : tB;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (jB = nB[IB++], void 0 === jB) throw new Error("Unexpected end of buffer");
            return cB(jB);
          case 197:
            return jB = rB.getUint16(IB), IB += 2, cB(jB);
          case 198:
            return jB = rB.getUint32(IB), IB += 4, cB(jB);
          case 199:
            return bB(nB[IB++]);
          case 200:
            return jB = rB.getUint16(IB), IB += 2, bB(jB);
          case 201:
            return jB = rB.getUint32(IB), IB += 4, bB(jB);
          case 202:
            if (jB = rB.getFloat32(IB), mB.useFloat32 > 2) {
              let BB = Nj[(127 & nB[IB]) << 1 | nB[IB + 1] >> 7];
              return IB += 4, (BB * jB + (jB > 0 ? .5 : -.5) | 0) / BB
            }
            return IB += 4, jB;
          case 203:
            return jB = rB.getFloat64(IB), IB += 8, jB;
          case 204:
            return nB[IB++];
          case 205:
            return jB = rB.getUint16(IB), IB += 2, jB;
          case 206:
            return jB = rB.getUint32(IB), IB += 4, jB;
          case 207:
            return "number" === mB.int64AsType ? (jB = 4294967296 * rB.getUint32(IB), jB += rB.getUint32(IB + 4)) : "string" === mB.int64AsType ? jB = rB.getBigUint64(IB).toString() : "auto" === mB.int64AsType ? (jB = rB.getBigUint64(IB), jB <= BigInt(2) << BigInt(52) && (jB = Number(jB))) : jB = rB.getBigUint64(IB), IB += 8, jB;
          case 208:
            return rB.getInt8(IB++);
          case 209:
            return jB = rB.getInt16(IB), IB += 2, jB;
          case 210:
            return jB = rB.getInt32(IB), IB += 4, jB;
          case 211:
            return "number" === mB.int64AsType ? (jB = 4294967296 * rB.getInt32(IB), jB += rB.getUint32(IB + 4)) : "string" === mB.int64AsType ? jB = rB.getBigInt64(IB).toString() : "auto" === mB.int64AsType ? (jB = rB.getBigInt64(IB), jB >= BigInt(-2) << BigInt(52) && jB <= BigInt(2) << BigInt(52) && (jB = Number(jB))) : jB = rB.getBigInt64(IB), IB += 8, jB;
          case 212:
            if (jB = nB[IB++], 114 == jB) return Bj(63 & nB[IB++]);
            {
              let BB = GB[jB];
              if (BB) return BB.read ? (IB++, BB.read(DB())) : BB.noBuffer ? (IB++, BB()) : BB(nB.subarray(IB, ++IB));
              throw new Error("Unknown extension " + jB)
            }
          case 213:
            return jB = nB[IB], 114 == jB ? (IB++, Bj(63 & nB[IB++], nB[IB++])) : bB(2);
          case 214:
            return bB(4);
          case 215:
            return bB(8);
          case 216:
            return bB(16);
          case 217:
            return jB = nB[IB++], kB >= IB ? UB.slice(IB - yB, (IB += jB) - yB) : ZB(jB);
          case 218:
            return jB = rB.getUint16(IB), kB >= (IB += 2) ? UB.slice(IB - yB, (IB += jB) - yB) : AB(jB);
          case 219:
            return jB = rB.getUint32(IB), kB >= (IB += 4) ? UB.slice(IB - yB, (IB += jB) - yB) : TB(jB);
          case 220:
            return jB = rB.getUint16(IB), IB += 2, eB(jB);
          case 221:
            return jB = rB.getUint32(IB), IB += 4, eB(jB);
          case 222:
            return jB = rB.getUint16(IB), IB += 2, lB(jB);
          case 223:
            return jB = rB.getUint32(IB), IB += 4, lB(jB);
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
    const FB = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function YB(BB, jB) {
      function zB() {
        if (zB.count++ > qB) {
          let zB = BB.read = new Function("r", "return function(){return " + (mB.freezeData ? "Object.freeze" : "") + "({" + BB.map((BB => "__proto__" === BB ? "__proto_:r()" : FB.test(BB) ? BB + ":r()" : "[" + JSON.stringify(BB) + "]:r()")).join(",") + "})}")(DB);
          return 0 === BB.highByte && (BB.read = VB(jB, BB.read)), zB()
        }
        let QB = {};
        for (let jB = 0, zB = BB.length; jB < zB; jB++) {
          let zB = BB[jB];
          "__proto__" === zB && (zB = "__proto_"), QB[zB] = DB()
        }
        return mB.freezeData ? Object.freeze(QB) : QB
      }
      return zB.count = 0, 0 === BB.highByte ? VB(jB, zB) : zB
    }
    const VB = (BB, jB) => function() {
      let zB = nB[IB++];
      if (0 === zB) return jB();
      let QB = BB < 32 ? -(BB + (zB << 5)) : BB + (zB << 5),
        dB = uB[QB] || hB()[QB];
      if (!dB) throw new Error("Record id is not defined for " + QB);
      return dB.read || (dB.read = YB(dB, BB)), dB.read()
    };

    function hB() {
      let BB = dj((() => (nB = null, mB.getStructures())));
      return uB = mB._mergeStructures(BB, uB)
    }
    var XB = WB,
      ZB = WB,
      AB = WB,
      TB = WB;
    let PB = !1;

    function WB(BB) {
      let jB;
      if (BB < 16 && (jB = KB(BB))) return jB;
      if (BB > 64 && QB) return QB.decode(nB.subarray(IB, IB += BB));
      const zB = IB + BB,
        dB = [];
      for (jB = ""; IB < zB;) {
        const BB = nB[IB++];
        if (0 === (128 & BB)) dB.push(BB);
        else if (192 === (224 & BB)) {
          const jB = 63 & nB[IB++];
          dB.push((31 & BB) << 6 | jB)
        } else if (224 === (240 & BB)) {
          const jB = 63 & nB[IB++],
            zB = 63 & nB[IB++];
          dB.push((31 & BB) << 12 | jB << 6 | zB)
        } else if (240 === (248 & BB)) {
          let jB = (7 & BB) << 18 | (63 & nB[IB++]) << 12 | (63 & nB[IB++]) << 6 | 63 & nB[IB++];
          jB > 65535 && (jB -= 65536, dB.push(jB >>> 10 & 1023 | 55296), jB = 56320 | 1023 & jB), dB.push(jB)
        } else dB.push(BB);
        dB.length >= 4096 && (jB += wB.apply(String, dB), dB.length = 0)
      }
      return dB.length > 0 && (jB += wB.apply(String, dB)), jB
    }

    function eB(BB) {
      let jB = new Array(BB);
      for (let zB = 0; zB < BB; zB++) jB[zB] = DB();
      return mB.freezeData ? Object.freeze(jB) : jB
    }

    function lB(BB) {
      if (mB.mapsAsObjects) {
        let jB = {};
        for (let zB = 0; zB < BB; zB++) {
          let BB = RB();
          "__proto__" === BB && (BB = "__proto_"), jB[BB] = DB()
        }
        return jB
      } {
        let jB = new Map;
        for (let zB = 0; zB < BB; zB++) jB.set(DB(), DB());
        return jB
      }
    }
    var wB = String.fromCharCode;

    function xB(BB) {
      let jB = IB,
        zB = new Array(BB);
      for (let QB = 0; QB < BB; QB++) {
        const BB = nB[IB++];
        if ((128 & BB) > 0) return void(IB = jB);
        zB[QB] = BB
      }
      return wB.apply(String, zB)
    }

    function KB(BB) {
      if (BB < 4) {
        if (BB < 2) {
          if (0 === BB) return "";
          {
            let BB = nB[IB++];
            return (128 & BB) > 1 ? void(IB -= 1) : wB(BB)
          }
        } {
          let jB = nB[IB++],
            zB = nB[IB++];
          if ((128 & jB) > 0 || (128 & zB) > 0) return void(IB -= 2);
          if (BB < 3) return wB(jB, zB);
          let QB = nB[IB++];
          return (128 & QB) > 0 ? void(IB -= 3) : wB(jB, zB, QB)
        }
      } {
        let jB = nB[IB++],
          zB = nB[IB++],
          QB = nB[IB++],
          dB = nB[IB++];
        if ((128 & jB) > 0 || (128 & zB) > 0 || (128 & QB) > 0 || (128 & dB) > 0) return void(IB -= 4);
        if (BB < 6) {
          if (4 === BB) return wB(jB, zB, QB, dB);
          {
            let BB = nB[IB++];
            return (128 & BB) > 0 ? void(IB -= 5) : wB(jB, zB, QB, dB, BB)
          }
        }
        if (BB < 8) {
          let NB = nB[IB++],
            uB = nB[IB++];
          if ((128 & NB) > 0 || (128 & uB) > 0) return void(IB -= 6);
          if (BB < 7) return wB(jB, zB, QB, dB, NB, uB);
          let UB = nB[IB++];
          return (128 & UB) > 0 ? void(IB -= 7) : wB(jB, zB, QB, dB, NB, uB, UB)
        } {
          let NB = nB[IB++],
            uB = nB[IB++],
            UB = nB[IB++],
            aB = nB[IB++];
          if ((128 & NB) > 0 || (128 & uB) > 0 || (128 & UB) > 0 || (128 & aB) > 0) return void(IB -= 8);
          if (BB < 10) {
            if (8 === BB) return wB(jB, zB, QB, dB, NB, uB, UB, aB);
            {
              let BB = nB[IB++];
              return (128 & BB) > 0 ? void(IB -= 9) : wB(jB, zB, QB, dB, NB, uB, UB, aB, BB)
            }
          }
          if (BB < 12) {
            let pB = nB[IB++],
              rB = nB[IB++];
            if ((128 & pB) > 0 || (128 & rB) > 0) return void(IB -= 10);
            if (BB < 11) return wB(jB, zB, QB, dB, NB, uB, UB, aB, pB, rB);
            let sB = nB[IB++];
            return (128 & sB) > 0 ? void(IB -= 11) : wB(jB, zB, QB, dB, NB, uB, UB, aB, pB, rB, sB)
          } {
            let pB = nB[IB++],
              rB = nB[IB++],
              sB = nB[IB++],
              JB = nB[IB++];
            if ((128 & pB) > 0 || (128 & rB) > 0 || (128 & sB) > 0 || (128 & JB) > 0) return void(IB -= 12);
            if (BB < 14) {
              if (12 === BB) return wB(jB, zB, QB, dB, NB, uB, UB, aB, pB, rB, sB, JB);
              {
                let BB = nB[IB++];
                return (128 & BB) > 0 ? void(IB -= 13) : wB(jB, zB, QB, dB, NB, uB, UB, aB, pB, rB, sB, JB, BB)
              }
            } {
              let mB = nB[IB++],
                yB = nB[IB++];
              if ((128 & mB) > 0 || (128 & yB) > 0) return void(IB -= 14);
              if (BB < 15) return wB(jB, zB, QB, dB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB);
              let kB = nB[IB++];
              return (128 & kB) > 0 ? void(IB -= 15) : wB(jB, zB, QB, dB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB)
            }
          }
        }
      }
    }

    function CB() {
      let BB, jB = nB[IB++];
      if (jB < 192) BB = jB - 160;
      else switch (jB) {
        case 217:
          BB = nB[IB++];
          break;
        case 218:
          BB = rB.getUint16(IB), IB += 2;
          break;
        case 219:
          BB = rB.getUint32(IB), IB += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return WB(BB)
    }

    function cB(BB) {
      return mB.copyBuffers ? Uint8Array.prototype.slice.call(nB, IB, IB += BB) : nB.subarray(IB, IB += BB)
    }

    function bB(BB) {
      let jB = nB[IB++];
      if (GB[jB]) {
        let zB;
        return GB[jB](nB.subarray(IB, zB = IB += BB), (BB => {
          IB = BB;
          try {
            return DB()
          } finally {
            IB = zB
          }
        }))
      }
      throw new Error("Unknown extension type " + jB)
    }
    var vB = new Array(4096);

    function RB() {
      let BB = nB[IB++];
      if (!(BB >= 160 && BB < 192)) return IB--, OB(DB());
      if (BB -= 160, kB >= IB) return UB.slice(IB - yB, (IB += BB) - yB);
      if (!(0 == kB && dB < 180)) return XB(BB);
      let jB, zB = 4095 & (BB << 5 ^ (BB > 1 ? rB.getUint16(IB) : BB > 0 ? nB[IB] : 0)),
        QB = vB[zB],
        NB = IB,
        uB = IB + BB - 3,
        aB = 0;
      if (QB && QB.bytes == BB) {
        for (; NB < uB;) {
          if (jB = rB.getUint32(NB), jB != QB[aB++]) {
            NB = 1879048192;
            break
          }
          NB += 4
        }
        for (uB += 3; NB < uB;)
          if (jB = nB[NB++], jB != QB[aB++]) {
            NB = 1879048192;
            break
          } if (NB === uB) return IB = NB, QB.string;
        uB -= 3, NB = IB
      }
      for (QB = [], vB[zB] = QB, QB.bytes = BB; NB < uB;) jB = rB.getUint32(NB), QB.push(jB), NB += 4;
      for (uB += 3; NB < uB;) jB = nB[NB++], QB.push(jB);
      let pB = BB < 16 ? KB(BB) : xB(BB);
      return QB.string = null != pB ? pB : XB(BB)
    }

    function OB(BB) {
      if ("string" === typeof BB) return BB;
      if ("number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB) return BB.toString();
      if (null == BB) return BB + "";
      if (mB.allowArraysInMapKeys && Array.isArray(BB) && BB.flat().every((BB => ["string", "number", "boolean", "bigint"].includes(typeof BB)))) return BB.flat().toString();
      throw new Error("Invalid property type for record: " + typeof BB)
    }
    const Bj = (BB, jB) => {
      let zB = DB().map(OB),
        QB = BB;
      void 0 !== jB && (BB = BB < 32 ? -((jB << 5) + BB) : (jB << 5) + BB, zB.highByte = jB);
      let nB = uB[BB];
      return nB && (nB.isShared || iB) && ((uB.restoreStructures || (uB.restoreStructures = []))[BB] = nB), uB[BB] = zB, zB.read = YB(zB, QB), zB.read()
    };
    GB[0] = () => {}, GB[0].noBuffer = !0, GB[66] = BB => {
      let jB = BB.length,
        zB = BigInt(128 & BB[0] ? BB[0] - 256 : BB[0]);
      for (let QB = 1; QB < jB; QB++) zB <<= BigInt(8), zB += BigInt(BB[QB]);
      return zB
    };
    let jj = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    GB[101] = () => {
      let BB = DB();
      return (jj[BB[0]] || Error)(BB[1], {
        cause: BB[2]
      })
    }, GB[105] = BB => {
      if (!1 === mB.structuredClone) throw new Error("Structured clone extension is disabled");
      let jB = rB.getUint32(IB - 4);
      pB || (pB = new Map);
      let zB, QB = nB[IB];
      zB = QB >= 144 && QB < 160 || 220 == QB || 221 == QB ? [] : {};
      let dB = {
        target: zB
      };
      pB.set(jB, dB);
      let NB = DB();
      return dB.used ? Object.assign(zB, NB) : (dB.target = NB, NB)
    }, GB[112] = BB => {
      if (!1 === mB.structuredClone) throw new Error("Structured clone extension is disabled");
      let jB = rB.getUint32(IB - 4),
        zB = pB.get(jB);
      return zB.used = !0, zB.target
    }, GB[115] = () => new Set(DB());
    const zj = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((BB => BB + "Array"));
    let Qj = "object" === typeof globalThis ? globalThis : window;
    GB[116] = BB => {
      let jB = BB[0],
        zB = zj[jB];
      if (!zB) {
        if (16 === jB) {
          let jB = new ArrayBuffer(BB.length - 1);
          return new Uint8Array(jB).set(BB.subarray(1)), jB
        }
        throw new Error("Could not find typed array for code " + jB)
      }
      return new Qj[zB](Uint8Array.prototype.slice.call(BB, 1).buffer)
    }, GB[120] = () => {
      let BB = DB();
      return new RegExp(BB[0], BB[1])
    };
    const nj = [];

    function dj(BB) {
      EB && EB();
      let jB = dB,
        zB = IB,
        QB = JB,
        NB = yB,
        GB = kB,
        LB = UB,
        gB = sB,
        tB = pB,
        SB = aB,
        MB = new Uint8Array(nB.slice(0, dB)),
        qB = uB,
        fB = uB.slice(0, uB.length),
        oB = mB,
        HB = iB,
        DB = BB();
      return dB = jB, IB = zB, JB = QB, yB = NB, kB = GB, UB = LB, sB = gB, pB = tB, aB = SB, nB = MB, iB = HB, (uB = qB).splice(0, uB.length, ...fB), mB = oB, rB = new DataView(nB.buffer, nB.byteOffset, nB.byteLength), DB
    }

    function Ij() {
      nB = null, pB = null, uB = null
    }
    GB[98] = BB => {
      let jB = (BB[0] << 24) + (BB[1] << 16) + (BB[2] << 8) + BB[3],
        zB = IB;
      return IB += jB - BB.length, aB = nj, (aB = [CB(), CB()]).position0 = 0, aB.position1 = 0, aB.postBundlePosition = IB, IB = zB, DB()
    }, GB[255] = BB => 4 == BB.length ? new Date(1e3 * (16777216 * BB[0] + (BB[1] << 16) + (BB[2] << 8) + BB[3])) : 8 == BB.length ? new Date(((BB[0] << 22) + (BB[1] << 14) + (BB[2] << 6) + (BB[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & BB[3]) + 16777216 * BB[4] + (BB[5] << 16) + (BB[6] << 8) + BB[7])) : 12 == BB.length ? new Date(((BB[0] << 24) + (BB[1] << 16) + (BB[2] << 8) + BB[3]) / 1e6 + 1e3 * ((128 & BB[4] ? -281474976710656 : 0) + 1099511627776 * BB[6] + 4294967296 * BB[7] + 16777216 * BB[8] + (BB[9] << 16) + (BB[10] << 8) + BB[11])) : new Date("invalid");
    const Nj = new Array(147);
    for (let nz = 0; nz < 256; nz++) Nj[nz] = +("1e" + Math.floor(45.15 - .30103 * nz));
    const uj = fB;
    var Uj = new fB({
      useRecords: !1
    });
    const aj = Uj.unpack,
      pj = Uj.unpackMultiple,
      rj = Uj.unpack,
      sj = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let Jj, mj, yj, kj = new Float32Array(1),
      Gj = new Uint8Array(kj.buffer, 0, 4);

    function Lj(BB) {
      kj[0] = BB;
      let jB = Nj[(127 & Gj[3]) << 1 | Gj[2] >> 7];
      return (jB * BB + (BB > 0 ? .5 : -.5) | 0) / jB
    }
    try {
      Jj = new TextEncoder
    } catch (Qz) {}
    const gj = "undefined" !== typeof Buffer,
      tj = gj ? function(BB) {
        return Buffer.allocUnsafeSlow(BB)
      } : Uint8Array,
      Sj = gj ? Buffer : Uint8Array,
      Mj = gj ? 4294967296 : 2144337920;
    let Ej, ij, qj, fj, oj, Hj = 0,
      Dj = null;
    const Fj = /[\u0080-\uFFFF]/,
      Yj = Symbol("record-id");
    class Vj extends fB {
      constructor(BB) {
        let jB, zB, QB, nB;
        super(BB), this.offset = 0;
        let dB = Sj.prototype.utf8Write ? function(BB, jB) {
            return Ej.utf8Write(BB, jB, Ej.byteLength - jB)
          } : !(!Jj || !Jj.encodeInto) && function(BB, jB) {
            return Jj.encodeInto(BB, Ej.subarray(jB)).written
          },
          IB = this;
        BB || (BB = {});
        let NB = BB && BB.sequential,
          uB = BB.structures || BB.saveStructures,
          UB = BB.maxSharedStructures;
        if (null == UB && (UB = uB ? 32 : 0), UB > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        BB.structuredClone && void 0 == BB.moreTypes && (this.moreTypes = !0);
        let aB = BB.maxOwnStructures;
        null == aB && (aB = uB ? 32 : 64), this.structures || 0 == BB.useRecords || (this.structures = []);
        let pB = UB > 32 || aB + UB > 64,
          rB = UB + 64,
          sB = UB + aB + 64;
        if (sB > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let JB = [],
          mB = 0,
          yB = 0;
        this.pack = this.encode = function(BB, dB) {
          if (Ej || (Ej = new tj(8192), qj = Ej.dataView || (Ej.dataView = new DataView(Ej.buffer, 0, 8192)), Hj = 0), fj = Ej.length - 10, fj - Hj < 2048 ? (Ej = new tj(Ej.length), qj = Ej.dataView || (Ej.dataView = new DataView(Ej.buffer, 0, Ej.length)), fj = Ej.length - 10, Hj = 0) : Hj = Hj + 7 & 2147483640, jB = Hj, dB & Rj && (Hj += 255 & dB), nB = IB.structuredClone ? new Map : null, IB.bundleStrings && "string" !== typeof BB ? (Dj = [], Dj.size = 1 / 0) : Dj = null, QB = IB.structures, QB) {
            QB.uninitialized && (QB = IB._mergeStructures(IB.getStructures()));
            let BB = QB.sharedLength || 0;
            if (BB > UB) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + QB.sharedLength);
            if (!QB.transitions) {
              QB.transitions = Object.create(null);
              for (let jB = 0; jB < BB; jB++) {
                let BB = QB[jB];
                if (!BB) continue;
                let zB, nB = QB.transitions;
                for (let jB = 0, QB = BB.length; jB < QB; jB++) {
                  let QB = BB[jB];
                  zB = nB[QB], zB || (zB = nB[QB] = Object.create(null)), nB = zB
                }
                nB[Yj] = jB + 64
              }
              this.lastNamedStructuresLength = BB
            }
            NB || (QB.nextId = BB + 64)
          }
          let uB;
          zB && (zB = !1);
          try {
            IB.randomAccessStructure && BB && BB.constructor && BB.constructor === Object ? fB(BB) : LB(BB);
            let zB = Dj;
            if (Dj && Aj(jB, LB, 0), nB && nB.idsToInsert) {
              let BB = nB.idsToInsert.sort(((BB, jB) => BB.offset > jB.offset ? 1 : -1)),
                QB = BB.length,
                dB = -1;
              for (; zB && QB > 0;) {
                let nB = BB[--QB].offset + jB;
                nB < zB.stringsPosition + jB && -1 === dB && (dB = 0), nB > zB.position + jB ? dB >= 0 && (dB += 6) : (dB >= 0 && (qj.setUint32(zB.position + jB, qj.getUint32(zB.position + jB) + dB), dB = -1), zB = zB.previous, QB++)
              }
              dB >= 0 && zB && qj.setUint32(zB.position + jB, qj.getUint32(zB.position + jB) + dB), Hj += 6 * BB.length, Hj > fj && EB(Hj), IB.offset = Hj;
              let NB = function(BB, jB) {
                let zB, QB = 6 * jB.length,
                  nB = BB.length - QB;
                for (; zB = jB.pop();) {
                  let jB = zB.offset,
                    dB = zB.id;
                  BB.copyWithin(jB + QB, jB, nB), QB -= 6;
                  let IB = jB + QB;
                  BB[IB++] = 214, BB[IB++] = 105, BB[IB++] = dB >> 24, BB[IB++] = dB >> 16 & 255, BB[IB++] = dB >> 8 & 255, BB[IB++] = 255 & dB, nB = jB
                }
                return BB
              }(Ej.subarray(jB, Hj), BB);
              return nB = null, NB
            }
            return IB.offset = Hj, dB & bj ? (Ej.start = jB, Ej.end = Hj, Ej) : Ej.subarray(jB, Hj)
          } catch (Qz) {
            throw uB = Qz, Qz
          } finally {
            if (QB && (kB(), zB && IB.saveStructures)) {
              let zB = QB.sharedLength || 0,
                nB = Ej.subarray(jB, Hj),
                NB = Pj(QB, IB);
              if (!uB) return !1 === IB.saveStructures(NB, NB.isCompatible) ? IB.pack(BB, dB) : (IB.lastNamedStructuresLength = zB, Ej.length > 1073741824 && (Ej = null), nB)
            }
            Ej.length > 1073741824 && (Ej = null), dB & vj && (Hj = jB)
          }
        };
        const kB = () => {
            yB < 10 && yB++;
            let BB = QB.sharedLength || 0;
            if (QB.length > BB && !NB && (QB.length = BB), mB > 1e4) QB.transitions = null, yB = 0, mB = 0, JB.length > 0 && (JB = []);
            else if (JB.length > 0 && !NB) {
              for (let BB = 0, jB = JB.length; BB < jB; BB++) JB[BB][Yj] = 0;
              JB = []
            }
          },
          GB = BB => {
            var jB = BB.length;
            jB < 16 ? Ej[Hj++] = 144 | jB : jB < 65536 ? (Ej[Hj++] = 220, Ej[Hj++] = jB >> 8, Ej[Hj++] = 255 & jB) : (Ej[Hj++] = 221, qj.setUint32(Hj, jB), Hj += 4);
            for (let zB = 0; zB < jB; zB++) LB(BB[zB])
          },
          LB = BB => {
            Hj > fj && (Ej = EB(Hj));
            var zB, QB = typeof BB;
            if ("string" === QB) {
              let QB, nB = BB.length;
              if (Dj && nB >= 4 && nB < 4096) {
                if ((Dj.size += nB) > 21760) {
                  let BB, zB, QB = (Dj[0] ? 3 * Dj[0].length + Dj[1].length : 0) + 10;
                  Hj + QB > fj && (Ej = EB(Hj + QB)), Dj.position ? (zB = Dj, Ej[Hj] = 200, Hj += 3, Ej[Hj++] = 98, BB = Hj - jB, Hj += 4, Aj(jB, LB, 0), qj.setUint16(BB + jB - 3, Hj - jB - BB)) : (Ej[Hj++] = 214, Ej[Hj++] = 98, BB = Hj - jB, Hj += 4), Dj = ["", ""], Dj.previous = zB, Dj.size = 0, Dj.position = BB
                }
                let zB = Fj.test(BB);
                return Dj[zB ? 0 : 1] += BB, Ej[Hj++] = 193, void LB(zB ? -nB : nB)
              }
              QB = nB < 32 ? 1 : nB < 256 ? 2 : nB < 65536 ? 3 : 5;
              let IB = 3 * nB;
              if (Hj + IB > fj && (Ej = EB(Hj + IB)), nB < 64 || !dB) {
                let jB, dB, IB, NB = Hj + QB;
                for (jB = 0; jB < nB; jB++) dB = BB.charCodeAt(jB), dB < 128 ? Ej[NB++] = dB : dB < 2048 ? (Ej[NB++] = dB >> 6 | 192, Ej[NB++] = 63 & dB | 128) : 55296 === (64512 & dB) && 56320 === (64512 & (IB = BB.charCodeAt(jB + 1))) ? (dB = 65536 + ((1023 & dB) << 10) + (1023 & IB), jB++, Ej[NB++] = dB >> 18 | 240, Ej[NB++] = dB >> 12 & 63 | 128, Ej[NB++] = dB >> 6 & 63 | 128, Ej[NB++] = 63 & dB | 128) : (Ej[NB++] = dB >> 12 | 224, Ej[NB++] = dB >> 6 & 63 | 128, Ej[NB++] = 63 & dB | 128);
                zB = NB - Hj - QB
              } else zB = dB(BB, Hj + QB);
              zB < 32 ? Ej[Hj++] = 160 | zB : zB < 256 ? (QB < 2 && Ej.copyWithin(Hj + 2, Hj + 1, Hj + 1 + zB), Ej[Hj++] = 217, Ej[Hj++] = zB) : zB < 65536 ? (QB < 3 && Ej.copyWithin(Hj + 3, Hj + 2, Hj + 2 + zB), Ej[Hj++] = 218, Ej[Hj++] = zB >> 8, Ej[Hj++] = 255 & zB) : (QB < 5 && Ej.copyWithin(Hj + 5, Hj + 3, Hj + 3 + zB), Ej[Hj++] = 219, qj.setUint32(Hj, zB), Hj += 4), Hj += zB
            } else if ("number" === QB)
              if (BB >>> 0 === BB) BB < 32 || BB < 128 && !1 === this.useRecords || BB < 64 && !this.randomAccessStructure ? Ej[Hj++] = BB : BB < 256 ? (Ej[Hj++] = 204, Ej[Hj++] = BB) : BB < 65536 ? (Ej[Hj++] = 205, Ej[Hj++] = BB >> 8, Ej[Hj++] = 255 & BB) : (Ej[Hj++] = 206, qj.setUint32(Hj, BB), Hj += 4);
              else if ((BB | 0) === BB) BB >= -32 ? Ej[Hj++] = 256 + BB : BB >= -128 ? (Ej[Hj++] = 208, Ej[Hj++] = BB + 256) : BB >= -32768 ? (Ej[Hj++] = 209, qj.setInt16(Hj, BB), Hj += 2) : (Ej[Hj++] = 210, qj.setInt32(Hj, BB), Hj += 4);
            else {
              let jB;
              if ((jB = this.useFloat32) > 0 && BB < 4294967296 && BB >= -2147483648) {
                let zB;
                if (Ej[Hj++] = 202, qj.setFloat32(Hj, BB), jB < 4 || ((zB = BB * Nj[(127 & Ej[Hj]) << 1 | Ej[Hj + 1] >> 7]) | 0) === zB) return void(Hj += 4);
                Hj--
              }
              Ej[Hj++] = 203, qj.setFloat64(Hj, BB), Hj += 8
            } else if ("object" === QB || "function" === QB)
              if (BB) {
                if (nB) {
                  let zB = nB.get(BB);
                  if (zB) {
                    if (!zB.id) {
                      let BB = nB.idsToInsert || (nB.idsToInsert = []);
                      zB.id = BB.push(zB)
                    }
                    return Ej[Hj++] = 214, Ej[Hj++] = 112, qj.setUint32(Hj, zB.id), void(Hj += 4)
                  }
                  nB.set(BB, {
                    offset: Hj - jB
                  })
                }
                let dB = BB.constructor;
                if (dB === Object) MB(BB);
                else if (dB === Array) GB(BB);
                else if (dB === Map)
                  if (this.mapAsEmptyObject) Ej[Hj++] = 128;
                  else {
                    (zB = BB.size) < 16 ? Ej[Hj++] = 128 | zB : zB < 65536 ? (Ej[Hj++] = 222, Ej[Hj++] = zB >> 8, Ej[Hj++] = 255 & zB) : (Ej[Hj++] = 223, qj.setUint32(Hj, zB), Hj += 4);
                    for (let [jB, zB] of BB) LB(jB), LB(zB)
                  }
                else {
                  for (let jB = 0, zB = mj.length; jB < zB; jB++) {
                    if (BB instanceof yj[jB]) {
                      let zB = mj[jB];
                      if (zB.write) {
                        zB.type && (Ej[Hj++] = 212, Ej[Hj++] = zB.type, Ej[Hj++] = 0);
                        let jB = zB.write.call(this, BB);
                        return void(jB === BB ? Array.isArray(BB) ? GB(BB) : MB(BB) : LB(jB))
                      }
                      let QB, nB = Ej,
                        dB = qj,
                        IB = Hj;
                      Ej = null;
                      try {
                        QB = zB.pack.call(this, BB, (BB => (Ej = nB, nB = null, Hj += BB, Hj > fj && EB(Hj), {
                          target: Ej,
                          targetView: qj,
                          position: Hj - BB
                        })), LB)
                      } finally {
                        nB && (Ej = nB, qj = dB, Hj = IB, fj = Ej.length - 10)
                      }
                      return void(QB && (QB.length + Hj > fj && EB(QB.length + Hj), Hj = Zj(QB, Ej, Hj, zB.type)))
                    }
                  }
                  if (Array.isArray(BB)) GB(BB);
                  else {
                    if (BB.toJSON) {
                      const jB = BB.toJSON();
                      if (jB !== BB) return LB(jB)
                    }
                    if ("function" === QB) return LB(this.writeFunction && this.writeFunction(BB));
                    MB(BB)
                  }
                }
              } else Ej[Hj++] = 192;
            else if ("boolean" === QB) Ej[Hj++] = BB ? 195 : 194;
            else if ("bigint" === QB) {
              if (BB < BigInt(1) << BigInt(63) && BB >= -(BigInt(1) << BigInt(63))) Ej[Hj++] = 211, qj.setBigInt64(Hj, BB);
              else if (BB < BigInt(1) << BigInt(64) && BB > 0) Ej[Hj++] = 207, qj.setBigUint64(Hj, BB);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return LB(BB.toString());
                  if (this.useBigIntExtension && BB < BigInt(2) ** BigInt(1023) && BB > -(BigInt(2) ** BigInt(1023))) {
                    Ej[Hj++] = 199, Hj++, Ej[Hj++] = 66;
                    let jB, zB = [];
                    do {
                      let QB = BB & BigInt(255);
                      jB = (QB & BigInt(128)) === (BB < BigInt(0) ? BigInt(128) : BigInt(0)), zB.push(QB), BB >>= BigInt(8)
                    } while (BB !== BigInt(0) && BB !== BigInt(-1) || !jB);
                    Ej[Hj - 2] = zB.length;
                    for (let BB = zB.length; BB > 0;) Ej[Hj++] = Number(zB[--BB]);
                    return
                  }
                  throw new RangeError(BB + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                Ej[Hj++] = 203, qj.setFloat64(Hj, Number(BB))
              }
              Hj += 8
            } else {
              if ("undefined" !== QB) throw new Error("Unknown type: " + QB);
              this.encodeUndefinedAsNil ? Ej[Hj++] = 192 : (Ej[Hj++] = 212, Ej[Hj++] = 0, Ej[Hj++] = 0)
            }
          },
          gB = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? BB => {
            let jB;
            if (this.skipValues) {
              jB = [];
              for (let zB in BB) "function" === typeof BB.hasOwnProperty && !BB.hasOwnProperty(zB) || this.skipValues.includes(BB[zB]) || jB.push(zB)
            } else jB = Object.keys(BB);
            let zB, QB = jB.length;
            if (QB < 16 ? Ej[Hj++] = 128 | QB : QB < 65536 ? (Ej[Hj++] = 222, Ej[Hj++] = QB >> 8, Ej[Hj++] = 255 & QB) : (Ej[Hj++] = 223, qj.setUint32(Hj, QB), Hj += 4), this.coercibleKeyAsNumber)
              for (let nB = 0; nB < QB; nB++) {
                zB = jB[nB];
                let QB = Number(zB);
                LB(isNaN(QB) ? zB : QB), LB(BB[zB])
              } else
                for (let nB = 0; nB < QB; nB++) LB(zB = jB[nB]), LB(BB[zB])
          } : BB => {
            Ej[Hj++] = 222;
            let zB = Hj - jB;
            Hj += 2;
            let QB = 0;
            for (let jB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(jB)) && (LB(jB), LB(BB[jB]), QB++);
            if (QB > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            Ej[zB++ + jB] = QB >> 8, Ej[zB + jB] = 255 & QB
          },
          tB = !1 === this.useRecords ? gB : BB.progressiveRecords && !pB ? BB => {
            let zB, nB, dB = QB.transitions || (QB.transitions = Object.create(null)),
              IB = Hj++ - jB;
            for (let NB in BB)
              if ("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(NB)) {
                if (zB = dB[NB], zB) dB = zB;
                else {
                  let uB = Object.keys(BB),
                    UB = dB;
                  dB = QB.transitions;
                  let aB = 0;
                  for (let BB = 0, jB = uB.length; BB < jB; BB++) {
                    let jB = uB[BB];
                    zB = dB[jB], zB || (zB = dB[jB] = Object.create(null), aB++), dB = zB
                  }
                  IB + jB + 1 == Hj ? (Hj--, iB(dB, uB, aB)) : qB(dB, uB, IB, aB), nB = !0, dB = UB[NB]
                }
                LB(BB[NB])
              } if (!nB) {
              let zB = dB[Yj];
              zB ? Ej[IB + jB] = zB : qB(dB, Object.keys(BB), IB, 0)
            }
          } : BB => {
            let jB, zB = QB.transitions || (QB.transitions = Object.create(null)),
              nB = 0;
            for (let QB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(QB)) && (jB = zB[QB], jB || (jB = zB[QB] = Object.create(null), nB++), zB = jB);
            let dB = zB[Yj];
            dB ? dB >= 96 && pB ? (Ej[Hj++] = 96 + (31 & (dB -= 96)), Ej[Hj++] = dB >> 5) : Ej[Hj++] = dB : iB(zB, zB.__keys__ || Object.keys(BB), nB);
            for (let QB in BB)("function" !== typeof BB.hasOwnProperty || BB.hasOwnProperty(QB)) && LB(BB[QB])
          },
          SB = "function" == typeof this.useRecords && this.useRecords,
          MB = SB ? BB => {
            SB(BB) ? tB(BB) : gB(BB)
          } : tB,
          EB = BB => {
            let zB;
            if (BB > 16777216) {
              if (BB - jB > Mj) throw new Error("Packed buffer would be larger than maximum buffer size");
              zB = Math.min(Mj, 4096 * Math.round(Math.max((BB - jB) * (BB > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else zB = 1 + (Math.max(BB - jB << 2, Ej.length - 1) >> 12) << 12;
            let QB = new tj(zB);
            return qj = QB.dataView || (QB.dataView = new DataView(QB.buffer, 0, zB)), BB = Math.min(BB, Ej.length), Ej.copy ? Ej.copy(QB, 0, jB, BB) : QB.set(Ej.slice(jB, BB)), Hj -= jB, jB = 0, fj = QB.length - 10, Ej = QB
          },
          iB = (BB, jB, nB) => {
            let dB = QB.nextId;
            dB || (dB = 64), dB < rB && this.shouldShareStructure && !this.shouldShareStructure(jB) ? (dB = QB.nextOwnId, dB < sB || (dB = rB), QB.nextOwnId = dB + 1) : (dB >= sB && (dB = rB), QB.nextId = dB + 1);
            let IB = jB.highByte = dB >= 96 && pB ? dB - 96 >> 5 : -1;
            BB[Yj] = dB, BB.__keys__ = jB, QB[dB - 64] = jB, dB < rB ? (jB.isShared = !0, QB.sharedLength = dB - 63, zB = !0, IB >= 0 ? (Ej[Hj++] = 96 + (31 & dB), Ej[Hj++] = IB) : Ej[Hj++] = dB) : (IB >= 0 ? (Ej[Hj++] = 213, Ej[Hj++] = 114, Ej[Hj++] = 96 + (31 & dB), Ej[Hj++] = IB) : (Ej[Hj++] = 212, Ej[Hj++] = 114, Ej[Hj++] = dB), nB && (mB += yB * nB), JB.length >= aB && (JB.shift()[Yj] = 0), JB.push(BB), LB(jB))
          },
          qB = (BB, zB, QB, nB) => {
            let dB = Ej,
              IB = Hj,
              NB = fj,
              uB = jB;
            Ej = ij, Hj = 0, jB = 0, Ej || (ij = Ej = new tj(8192)), fj = Ej.length - 10, iB(BB, zB, nB), ij = Ej;
            let UB = Hj;
            if (Ej = dB, Hj = IB, fj = NB, jB = uB, UB > 1) {
              let BB = Hj + UB - 1;
              BB > fj && EB(BB);
              let zB = QB + jB;
              Ej.copyWithin(zB + UB, zB + 1, Hj), Ej.set(ij.slice(0, UB), zB), Hj = BB
            } else Ej[QB + jB] = ij[0]
          },
          fB = BB => {
            let nB = oj(BB, Ej, jB, Hj, QB, EB, ((BB, jB, QB) => {
              if (QB) return zB = !0;
              Hj = jB;
              let nB = Ej;
              return LB(BB), kB(), nB !== Ej ? {
                position: Hj,
                targetView: qj,
                target: Ej
              } : Hj
            }), this);
            if (0 === nB) return MB(BB);
            Hj = nB
          }
      }
      useBuffer(BB) {
        Ej = BB, qj = Ej.dataView || (Ej.dataView = new DataView(Ej.buffer, Ej.byteOffset, Ej.byteLength)), Hj = 0
      }
      set position(BB) {
        Hj = BB
      }
      get position() {
        return Hj
      }
      set buffer(BB) {
        Ej = BB
      }
      get buffer() {
        return Ej
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function hj(BB, jB, zB, QB) {
      let nB = BB.byteLength;
      if (nB + 1 < 256) {
        var {
          target: dB,
          position: IB
        } = zB(4 + nB);
        dB[IB++] = 199, dB[IB++] = nB + 1
      } else if (nB + 1 < 65536) {
        var {
          target: dB,
          position: IB
        } = zB(5 + nB);
        dB[IB++] = 200, dB[IB++] = nB + 1 >> 8, dB[IB++] = nB + 1 & 255
      } else {
        var {
          target: dB,
          position: IB,
          targetView: NB
        } = zB(7 + nB);
        dB[IB++] = 201, NB.setUint32(IB, nB + 1), IB += 4
      }
      dB[IB++] = 116, dB[IB++] = jB, BB.buffer || (BB = new Uint8Array(BB)), dB.set(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength), IB)
    }

    function Xj(BB, jB) {
      let zB = BB.byteLength;
      var QB, nB;
      if (zB < 256) {
        var {
          target: QB,
          position: nB
        } = jB(zB + 2);
        QB[nB++] = 196, QB[nB++] = zB
      } else if (zB < 65536) {
        var {
          target: QB,
          position: nB
        } = jB(zB + 3);
        QB[nB++] = 197, QB[nB++] = zB >> 8, QB[nB++] = 255 & zB
      } else {
        var {
          target: QB,
          position: nB,
          targetView: dB
        } = jB(zB + 5);
        QB[nB++] = 198, dB.setUint32(nB, zB), nB += 4
      }
      QB.set(BB, nB)
    }

    function Zj(BB, jB, zB, QB) {
      let nB = BB.length;
      switch (nB) {
        case 1:
          jB[zB++] = 212;
          break;
        case 2:
          jB[zB++] = 213;
          break;
        case 4:
          jB[zB++] = 214;
          break;
        case 8:
          jB[zB++] = 215;
          break;
        case 16:
          jB[zB++] = 216;
          break;
        default:
          nB < 256 ? (jB[zB++] = 199, jB[zB++] = nB) : nB < 65536 ? (jB[zB++] = 200, jB[zB++] = nB >> 8, jB[zB++] = 255 & nB) : (jB[zB++] = 201, jB[zB++] = nB >> 24, jB[zB++] = nB >> 16 & 255, jB[zB++] = nB >> 8 & 255, jB[zB++] = 255 & nB)
      }
      return jB[zB++] = QB, jB.set(BB, zB), zB += nB
    }

    function Aj(BB, jB, zB) {
      if (Dj.length > 0) {
        qj.setUint32(Dj.position + BB, Hj + zB - Dj.position - BB), Dj.stringsPosition = Hj - BB;
        let QB = Dj;
        Dj = null, jB(QB[0]), jB(QB[1])
      }
    }

    function Tj(BB) {
      if (BB.Class) {
        if (!BB.pack && !BB.write) throw new Error("Extension has no pack or write function");
        if (BB.pack && !BB.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        yj.unshift(BB.Class), mj.unshift(BB)
      }! function(BB) {
        BB.unpack ? GB[BB.type] = BB.unpack : GB[BB.type] = BB
      }(BB)
    }

    function Pj(BB, jB) {
      return BB.isCompatible = BB => {
        let zB = !BB || (jB.lastNamedStructuresLength || 0) === BB.length;
        return zB || jB._mergeStructures(BB), zB
      }, BB
    }
    yj = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, gB], mj = [{
      pack(BB, jB, zB) {
        let QB = BB.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === BB.getMilliseconds()) && QB >= 0 && QB < 4294967296) {
          let {
            target: BB,
            targetView: zB,
            position: nB
          } = jB(6);
          BB[nB++] = 214, BB[nB++] = 255, zB.setUint32(nB, QB)
        } else if (QB > 0 && QB < 4294967296) {
          let {
            target: zB,
            targetView: nB,
            position: dB
          } = jB(10);
          zB[dB++] = 215, zB[dB++] = 255, nB.setUint32(dB, 4e6 * BB.getMilliseconds() + (QB / 1e3 / 4294967296 | 0)), nB.setUint32(dB + 4, QB)
        } else if (isNaN(QB)) {
          if (this.onInvalidDate) return jB(0), zB(this.onInvalidDate());
          let {
            target: BB,
            targetView: QB,
            position: nB
          } = jB(3);
          BB[nB++] = 212, BB[nB++] = 255, BB[nB++] = 255
        } else {
          let {
            target: zB,
            targetView: nB,
            position: dB
          } = jB(15);
          zB[dB++] = 199, zB[dB++] = 12, zB[dB++] = 255, nB.setUint32(dB, 1e6 * BB.getMilliseconds()), nB.setBigInt64(dB + 4, BigInt(Math.floor(QB)))
        }
      }
    }, {
      pack(BB, jB, zB) {
        if (this.setAsEmptyObject) return jB(0), zB({});
        let QB = Array.from(BB),
          {
            target: nB,
            position: dB
          } = jB(this.moreTypes ? 3 : 0);
        this.moreTypes && (nB[dB++] = 212, nB[dB++] = 115, nB[dB++] = 0), zB(QB)
      }
    }, {
      pack(BB, jB, zB) {
        let {
          target: QB,
          position: nB
        } = jB(this.moreTypes ? 3 : 0);
        this.moreTypes && (QB[nB++] = 212, QB[nB++] = 101, QB[nB++] = 0), zB([BB.name, BB.message, BB.cause])
      }
    }, {
      pack(BB, jB, zB) {
        let {
          target: QB,
          position: nB
        } = jB(this.moreTypes ? 3 : 0);
        this.moreTypes && (QB[nB++] = 212, QB[nB++] = 120, QB[nB++] = 0), zB([BB.source, BB.flags])
      }
    }, {
      pack(BB, jB) {
        this.moreTypes ? hj(BB, 16, jB) : Xj(gj ? Buffer.from(BB) : new Uint8Array(BB), jB)
      }
    }, {
      pack(BB, jB) {
        let zB = BB.constructor;
        zB !== Sj && this.moreTypes ? hj(BB, zj.indexOf(zB.name), jB) : Xj(BB, jB)
      }
    }, {
      pack(BB, jB) {
        let {
          target: zB,
          position: QB
        } = jB(1);
        zB[QB] = 193
      }
    }];
    let Wj = new Vj({
      useRecords: !1
    });
    const ej = Wj.pack,
      lj = Wj.pack,
      wj = Vj,
      {
        NEVER: xj,
        ALWAYS: Kj,
        DECIMAL_ROUND: Cj,
        DECIMAL_FIT: cj
      } = sj,
      bj = 512,
      vj = 1024,
      Rj = 2048;
    const Oj = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!BB || "object" !== typeof BB) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const zB = new fB(jB);
        let QB;
        const nB = BB => {
          let jB;
          QB && (BB = Buffer.concat([QB, BB]), QB = void 0);
          try {
            jB = zB.unpackMultiple(BB)
          } catch (nB) {
            if (!nB.incomplete) throw nB;
            QB = BB.slice(nB.lastPosition), jB = nB.values
          }
          return jB
        };
        return "function" === typeof BB[Symbol.iterator] ? function*() {
          for (const jB of BB) yield* nB(jB)
        }() : "function" === typeof BB[Symbol.asyncIterator] ? async function*() {
          for await (const jB of BB) yield* nB(jB)
        }(): void 0
      },
      Bz = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (BB && "object" === typeof BB) {
          if ("function" === typeof BB[Symbol.iterator]) return function*(BB, jB) {
            const zB = new Vj(jB);
            for (const QB of BB) yield zB.pack(QB)
          }(BB, jB);
          if ("function" === typeof BB.then || "function" === typeof BB[Symbol.asyncIterator]) return async function*(BB, jB) {
            const zB = new Vj(jB);
            for await (const QB of BB) yield zB.pack(QB)
          }(BB, jB);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      jz = !1,
      zz = !0
  },
  9159: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      $changes: () => mB,
      $childType: () => yB,
      $decoder: () => aB,
      $deleteByIndex: () => sB,
      $encoder: () => UB,
      $filter: () => pB,
      $getByIndex: () => rB,
      $numFields: () => qB,
      $refId: () => NB,
      $track: () => uB,
      $values: () => tB,
      ArraySchema: () => zQ,
      Callbacks: () => zn,
      ChangeTree: () => Hz,
      CollectionSchema: () => dQ,
      Decoder: () => CQ,
      Encoder: () => lQ,
      FieldBuilder: () => uQ,
      MapSchema: () => nQ,
      Metadata: () => Cj,
      OPERATION: () => nB,
      Reflection: () => RQ,
      ReflectionField: () => bQ,
      ReflectionType: () => vQ,
      Root: () => DQ,
      Schema: () => oQ,
      SetSchema: () => IQ,
      StateCallbackStrategy: () => jn,
      StateView: () => XQ,
      StreamSchema: () => NQ,
      TypeContext: () => Pj,
      createPool: () => nn,
      decode: () => Lj,
      decodeKeyValueOperation: () => bz,
      decodeSchemaOperation: () => cz,
      defineCustomTypes: () => Mj,
      defineTypes: () => iQ,
      deprecated: () => MQ,
      dumpChanges: () => fQ,
      encode: () => jj,
      encodeArray: () => Az,
      encodeIndexedEntry: () => Xz,
      encodeKeyValueOperation: () => Zz,
      encodeMapEntry: () => hz,
      encodeSchemaOperation: () => Vz,
      SJ: () => mQ,
      fullStateOnly: () => LQ,
      getDecoderStateCallbacks: () => OQ,
      getEncodeDescriptor: () => Bz,
      getRawChangesCallback: () => Bn,
      isBuilder: () => UQ,
      patchOnly: () => GQ,
      registerType: () => Sj,
      schema: () => qQ,
      t: () => sQ,
      type: () => gQ,
      unreliable: () => kQ,
      view: () => yQ
    });
    const QB = 255;
    var nB;

    function dB(BB) {
      Object.defineProperty(BB, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(BB) {
      BB[BB.ADD = 128] = "ADD", BB[BB.REPLACE = 0] = "REPLACE", BB[BB.DELETE = 64] = "DELETE", BB[BB.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", BB[BB.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", BB[BB.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", BB[BB.CLEAR = 10] = "CLEAR", BB[BB.REVERSE = 15] = "REVERSE", BB[BB.MOVE = 32] = "MOVE", BB[BB.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", BB[BB.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(nB || (nB = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const IB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const BB = "colyseus.symbolRegistry",
        jB = IB[BB] || (IB[BB] = Object.create(null));
      Symbol.for = function(BB) {
        return jB[BB] || (jB[BB] = Symbol(BB))
      }, Symbol.keyFor = function(BB) {
        for (const zB in jB)
          if (jB[zB] === BB) return zB
      }
    }
    const NB = Symbol.for("$refId"),
      uB = "~track",
      UB = "~encoder",
      aB = "~decoder",
      pB = "~filter",
      rB = "~getByIndex",
      sB = "~deleteByIndex",
      JB = "~resyncPrune",
      mB = Symbol.for("$changes"),
      yB = Symbol.for("$childType"),
      kB = Symbol.for("$proxyTarget"),
      GB = "~onEncodeEnd",
      LB = "~reset",
      gB = "~onDecodeEnd",
      tB = Symbol.for("$values"),
      SB = "~builder",
      MB = "~descriptors",
      EB = "~__encodeDescriptor",
      iB = "~encoders",
      qB = "~__numFields",
      fB = "~__refTypeFieldIndexes",
      oB = "~__viewFieldIndexes",
      HB = "$__fieldIndexesByViewTag",
      DB = "~__unreliableFieldIndexes",
      FB = "~__patchOnlyFieldIndexes",
      YB = "~__fullSyncSkipIndexes",
      VB = "~__fullStateOnlyFieldIndexes",
      hB = "~__streamFieldIndexes",
      XB = "~__streamPriorities";
    let ZB;
    try {
      ZB = new TextEncoder
    } catch (dn) {}
    const AB = new ArrayBuffer(8),
      TB = new Int32Array(AB),
      PB = new Float32Array(AB),
      WB = new Float64Array(AB),
      eB = new BigInt64Array(AB),
      lB = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(BB, jB) {
        for (var zB = 0, QB = 0, nB = 0, dB = BB.length; nB < dB; nB++)(zB = BB.charCodeAt(nB)) < 128 ? QB += 1 : zB < 2048 ? QB += 2 : zB < 55296 || zB >= 57344 ? QB += 3 : (nB++, QB += 4);
        return QB
      };

    function wB(BB, jB, zB) {
      for (var QB = 0, nB = 0, dB = jB.length; nB < dB; nB++)(QB = jB.charCodeAt(nB)) < 128 ? BB[zB.offset++] = QB : QB < 2048 ? (BB[zB.offset] = 192 | QB >> 6, BB[zB.offset + 1] = 128 | 63 & QB, zB.offset += 2) : QB < 55296 || QB >= 57344 ? (BB[zB.offset] = 224 | QB >> 12, BB[zB.offset + 1] = 128 | QB >> 6 & 63, BB[zB.offset + 2] = 128 | 63 & QB, zB.offset += 3) : (nB++, QB = 65536 + ((1023 & QB) << 10 | 1023 & jB.charCodeAt(nB)), BB[zB.offset] = 240 | QB >> 18, BB[zB.offset + 1] = 128 | QB >> 12 & 63, BB[zB.offset + 2] = 128 | QB >> 6 & 63, BB[zB.offset + 3] = 128 | 63 & QB, zB.offset += 4)
    }

    function xB(BB, jB, zB) {
      BB[zB.offset++] = 255 & jB
    }

    function KB(BB, jB, zB) {
      BB[zB.offset++] = 255 & jB, BB[zB.offset++] = jB >> 8 & 255
    }

    function CB(BB, jB, zB) {
      BB[zB.offset++] = 255 & jB, BB[zB.offset++] = jB >> 8 & 255
    }

    function cB(BB, jB, zB) {
      BB[zB.offset++] = 255 & jB, BB[zB.offset++] = jB >> 8 & 255, BB[zB.offset++] = jB >> 16 & 255, BB[zB.offset++] = jB >> 24 & 255
    }

    function bB(BB, jB, zB) {
      const QB = jB >> 24,
        nB = jB >> 16,
        dB = jB >> 8,
        IB = jB;
      BB[zB.offset++] = 255 & IB, BB[zB.offset++] = 255 & dB, BB[zB.offset++] = 255 & nB, BB[zB.offset++] = 255 & QB
    }

    function vB(BB, jB, zB) {
      const QB = Math.floor(jB / Math.pow(2, 32));
      bB(BB, jB >>> 0, zB), bB(BB, QB, zB)
    }

    function RB(BB, jB, zB) {
      const QB = jB / Math.pow(2, 32) | 0;
      bB(BB, jB >>> 0, zB), bB(BB, QB, zB)
    }

    function OB(BB, jB, zB) {
      PB[0] = jB, cB(BB, TB[0], zB)
    }

    function Bj(BB, jB, zB) {
      WB[0] = jB, cB(BB, TB[0], zB), cB(BB, TB[1], zB)
    }
    const jj = {
        int8: xB,
        uint8: function(BB, jB, zB) {
          BB[zB.offset++] = 255 & jB
        },
        int16: KB,
        uint16: CB,
        int32: cB,
        uint32: bB,
        int64: vB,
        uint64: RB,
        bigint64: function(BB, jB, zB) {
          eB[0] = BigInt.asIntN(64, jB), cB(BB, TB[0], zB), cB(BB, TB[1], zB)
        },
        biguint64: function(BB, jB, zB) {
          eB[0] = BigInt.asIntN(64, jB), cB(BB, TB[0], zB), cB(BB, TB[1], zB)
        },
        float32: OB,
        float64: Bj,
        boolean: function(BB, jB, zB) {
          BB[zB.offset++] = jB ? 1 : 0
        },
        string: function(BB, jB, zB) {
          jB || (jB = "");
          let QB = lB(jB, "utf8"),
            nB = 0;
          if (QB < 32) BB[zB.offset++] = 160 | QB, nB = 1;
          else if (QB < 256) BB[zB.offset++] = 217, BB[zB.offset++] = QB, nB = 2;
          else if (QB < 65536) BB[zB.offset++] = 218, CB(BB, QB, zB), nB = 3;
          else {
            if (!(QB < 4294967296)) throw new Error("String too long");
            BB[zB.offset++] = 219, bB(BB, QB, zB), nB = 5
          }
          return wB(BB, jB, zB), nB + QB
        },
        number: function BB(jB, zB, QB) {
          return isNaN(zB) ? BB(jB, 0, QB) : isFinite(zB) ? zB !== (0 | zB) ? Math.abs(zB) <= 34028235e31 && (PB[0] = zB, Math.abs(Math.abs(PB[0]) - Math.abs(zB)) < 1e-4) ? (jB[QB.offset++] = 202, OB(jB, zB, QB), 5) : (jB[QB.offset++] = 203, Bj(jB, zB, QB), 9) : zB >= 0 ? zB < 128 ? (jB[QB.offset++] = 255 & zB, 1) : zB < 256 ? (jB[QB.offset++] = 204, jB[QB.offset++] = 255 & zB, 2) : zB < 65536 ? (jB[QB.offset++] = 205, CB(jB, zB, QB), 3) : zB < 4294967296 ? (jB[QB.offset++] = 206, bB(jB, zB, QB), 5) : (jB[QB.offset++] = 207, RB(jB, zB, QB), 9) : zB >= -32 ? (jB[QB.offset++] = 224 | zB + 32, 1) : zB >= -128 ? (jB[QB.offset++] = 208, xB(jB, zB, QB), 2) : zB >= -32768 ? (jB[QB.offset++] = 209, KB(jB, zB, QB), 3) : zB >= -2147483648 ? (jB[QB.offset++] = 210, cB(jB, zB, QB), 5) : (jB[QB.offset++] = 211, vB(jB, zB, QB), 9) : BB(jB, zB > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, QB)
        },
        utf8Write: wB,
        utf8Length: lB
      },
      zj = new ArrayBuffer(8),
      Qj = new Int32Array(zj),
      nj = new Float32Array(zj),
      dj = new Float64Array(zj),
      Ij = new BigUint64Array(zj),
      Nj = new BigInt64Array(zj);

    function uj(BB, jB, zB) {
      zB > BB.length - jB.offset && (zB = BB.length - jB.offset);
      for (var QB = "", nB = 0, dB = jB.offset, IB = jB.offset + zB; dB < IB; dB++) {
        var NB = BB[dB];
        if (0 !== (128 & NB))
          if (192 !== (224 & NB))
            if (224 !== (240 & NB)) {
              if (240 !== (248 & NB)) {
                console.error("decode.utf8Read(): Invalid byte " + NB + " at offset " + dB + ". Skip to end of string: " + (jB.offset + zB));
                break
              }(nB = (7 & NB) << 18 | (63 & BB[++dB]) << 12 | (63 & BB[++dB]) << 6 | 63 & BB[++dB]) >= 65536 ? (nB -= 65536, QB += String.fromCharCode(55296 + (nB >>> 10), 56320 + (1023 & nB))) : QB += String.fromCharCode(nB)
            } else QB += String.fromCharCode((15 & NB) << 12 | (63 & BB[++dB]) << 6 | 63 & BB[++dB]);
        else QB += String.fromCharCode((31 & NB) << 6 | 63 & BB[++dB]);
        else QB += String.fromCharCode(NB)
      }
      return jB.offset += zB, QB
    }

    function Uj(BB, jB) {
      return aj(BB, jB) << 24 >> 24
    }

    function aj(BB, jB) {
      return BB[jB.offset++]
    }

    function pj(BB, jB) {
      return rj(BB, jB) << 16 >> 16
    }

    function rj(BB, jB) {
      return BB[jB.offset++] | BB[jB.offset++] << 8
    }

    function sj(BB, jB) {
      return BB[jB.offset++] | BB[jB.offset++] << 8 | BB[jB.offset++] << 16 | BB[jB.offset++] << 24
    }

    function Jj(BB, jB) {
      return sj(BB, jB) >>> 0
    }

    function mj(BB, jB) {
      return Qj[0] = sj(BB, jB), nj[0]
    }

    function yj(BB, jB) {
      return Qj[0] = sj(BB, jB), Qj[1] = sj(BB, jB), dj[0]
    }

    function kj(BB, jB) {
      const zB = Jj(BB, jB);
      return sj(BB, jB) * Math.pow(2, 32) + zB
    }

    function Gj(BB, jB) {
      const zB = Jj(BB, jB);
      return Jj(BB, jB) * Math.pow(2, 32) + zB
    }
    const Lj = {
        utf8Read: uj,
        int8: Uj,
        uint8: aj,
        int16: pj,
        uint16: rj,
        int32: sj,
        uint32: Jj,
        float32: mj,
        float64: yj,
        int64: kj,
        uint64: Gj,
        bigint64: function(BB, jB) {
          return Qj[0] = sj(BB, jB), Qj[1] = sj(BB, jB), Nj[0]
        },
        biguint64: function(BB, jB) {
          return Qj[0] = sj(BB, jB), Qj[1] = sj(BB, jB), Ij[0]
        },
        boolean: function(BB, jB) {
          return aj(BB, jB) > 0
        },
        string: function(BB, jB) {
          const zB = BB[jB.offset++];
          let QB;
          return zB < 192 ? QB = 31 & zB : 217 === zB ? QB = aj(BB, jB) : 218 === zB ? QB = rj(BB, jB) : 219 === zB && (QB = Jj(BB, jB)), uj(BB, jB, QB)
        },
        number: function(BB, jB) {
          const zB = BB[jB.offset++];
          return zB < 128 ? zB : 202 === zB ? mj(BB, jB) : 203 === zB ? yj(BB, jB) : 204 === zB ? aj(BB, jB) : 205 === zB ? rj(BB, jB) : 206 === zB ? Jj(BB, jB) : 207 === zB ? Gj(BB, jB) : 208 === zB ? Uj(BB, jB) : 209 === zB ? pj(BB, jB) : 210 === zB ? sj(BB, jB) : 211 === zB ? kj(BB, jB) : zB > 223 ? -1 * (255 - zB + 1) : void 0
        },
        stringCheck: function(BB, jB) {
          const zB = BB[jB.offset];
          return zB < 192 && zB > 160 || 217 === zB || 218 === zB || 219 === zB
        }
      },
      gj = {},
      tj = new Map;

    function Sj(BB, jB) {
      jB.constructor && (Object.prototype.hasOwnProperty.call(jB, "constructor") && null == jB.constructor[Symbol.metadata] && dB(jB.constructor), tj.set(jB.constructor, BB), gj[BB] = jB), jB.encode && (jj[BB] = jB.encode), jB.decode && (Lj[BB] = jB.decode)
    }

    function Mj(BB) {
      for (const jB in BB) Sj(jB, BB[jB]);
      return BB => gQ(BB)
    }
    const Ej = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function ij() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function qj(BB) {
      return BB._stream ??= ij()
    }

    function fj(BB, jB, zB) {
      0 === jB.activeViews.size && qj(BB).broadcastPending.add(zB)
    }

    function oj(BB, jB, zB, QB) {
      const dB = BB._stream;
      if (void 0 === dB) return !0;
      let IB = !1;
      return dB.broadcastPending.delete(QB) ? IB = !0 : dB.sentBroadcast.delete(QB) && dB.broadcastDeletes.add(QB), jB.forEachActiveView((BB => {
        const jB = dB.pendingByView.get(BB.id);
        if (jB?.has(QB)) return jB.delete(QB), void(IB = !0);
        const NB = dB.sentByView.get(BB.id);
        if (NB?.has(QB)) {
          NB.delete(QB);
          let jB = BB.changes.get(zB);
          void 0 === jB && (jB = new Map, BB.changes.set(zB, jB)), jB.set(QB, nB.DELETE)
        }
      })), IB
    }

    function Hj(BB, jB) {
      const zB = BB._stream?.pendingByView;
      if (void 0 === zB) return !1;
      for (const [QB, nB] of zB)
        if (nB.size > 0 && void 0 !== jB.activeViews.get(QB)?.deref()) return !0;
      return !1
    }

    function Dj(BB) {
      const jB = BB._stream;
      return void 0 !== jB && (jB.broadcastPending.size > 0 || jB.broadcastDeletes.size > 0)
    }

    function Fj(BB, jB, zB) {
      const QB = qj(BB);
      let nB = QB.pendingByView.get(jB);
      void 0 === nB && (nB = new Set, QB.pendingByView.set(jB, nB)), nB.add(zB)
    }

    function Yj(BB, jB) {
      const zB = BB._stream;
      void 0 !== zB && (zB.pendingByView.delete(jB), zB.sentByView.delete(jB), zB.priorityByView?.delete(jB))
    }
    const Vj = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function hj(BB) {
      if (null == BB || "object" !== typeof BB) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: jB,
        max: zB
      } = BB;
      if ("number" !== typeof jB || "number" !== typeof zB || !(zB > jB) || !Number.isFinite(jB) || !Number.isFinite(zB)) throw new Error(`t.quantized(): require finite min < max (got min=${jB}, max=${zB}).`);
      const QB = BB.bits ?? 16;
      if (8 !== QB && 16 !== QB && 32 !== QB) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${QB}).`);
      const nB = BB.mode ?? "clamp";
      if ("clamp" !== nB && "wrap" !== nB) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(nB)}).`);
      const dB = "wrap" === nB,
        IB = Math.pow(2, QB);
      return {
        min: jB,
        max: zB,
        bits: QB,
        wrap: dB,
        wire: Vj[QB],
        range: zB - jB,
        span: dB ? IB : jB === -zB ? IB - 2 : IB - 1
      }
    }

    function Xj(BB) {
      return null !== BB && "object" === typeof BB && void 0 !== BB.quantized
    }

    function Zj(BB, jB) {
      if (BB.wrap) {
        if (!Number.isFinite(jB)) return 0;
        const zB = BB.range;
        let QB = (jB - BB.min) % zB;
        QB < 0 && (QB += zB);
        const nB = BB.span;
        return Math.floor(QB / zB * nB + .5) % nB
      }
      if (jB !== jB) return 0;
      const zB = jB < BB.min ? BB.min : jB > BB.max ? BB.max : jB;
      return Math.floor((zB - BB.min) / BB.range * BB.span + .5)
    }

    function Aj(BB, jB) {
      return BB.min + jB / BB.span * BB.range
    }

    function Tj(BB) {
      const jB = jj[BB.wire];
      return (zB, QB, nB) => jB(zB, Zj(BB, QB), nB)
    }
    class Pj {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(BB) {
        const jB = Object.getPrototypeOf(BB);
        if (jB !== oQ) {
          let zB = Pj.inheritedTypes.get(jB);
          zB || (zB = new Set, Pj.inheritedTypes.set(jB, zB)), zB.add(BB)
        }
      }
      static cache(BB) {
        let jB = Pj.cachedContexts.get(BB);
        return jB || (jB = new Pj(BB), Pj.cachedContexts.set(BB, jB)), jB
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(BB) && (this.types[jB] = BB, null == BB[Symbol.metadata] && Cj.initialize(BB), this.schemas.set(BB, jB), !0)
      }
      getTypeId(BB) {
        return this.schemas.get(BB)
      }
      discoverTypes(BB) {
        if (!this.add(BB)) return;
        Pj.inheritedTypes.get(BB)?.forEach((BB => {
          this.discoverTypes(BB)
        }));
        let jB = BB;
        for (;
          (jB = Object.getPrototypeOf(jB)) && jB !== oQ && jB !== Function.prototype;) this.discoverTypes(jB);
        const zB = BB[Symbol.metadata];
        (zB[oB] || zB[hB]) && (this.hasFilters = !0);
        for (const QB in zB) {
          const BB = zB[QB].type;
          if ("string" !== typeof BB && !Xj(BB))
            if ("function" === typeof BB) this.discoverTypes(BB);
            else {
              const jB = Object.values(BB)[0];
              if ("string" === typeof jB) continue;
              this.discoverTypes(jB)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Wj(BB) {
      const jB = lj(BB);
      return jB ? {
        complexTypeKlass: gj[jB],
        childType: BB[jB]
      } : {
        complexTypeKlass: !1,
        childType: BB
      }
    }

    function ej(BB, jB) {
      const zB = wj(BB),
        QB = lj(zB),
        nB = QB && lj(zB[QB]);
      if (nB) throw new Error(`${jB?`${jB}: `:""}@colyseus/schema: nested collections are not supported ("${QB}" of "${nB}"). Collections can only hold primitive types or Schema classes, wrap the inner ${nB} in a Schema class.`);
      return zB
    }

    function lj(BB) {
      return "object" === typeof BB && null !== BB ? Object.keys(BB).find((BB => void 0 !== gj[BB])) : void 0
    }

    function wj(BB) {
      if ("object" !== typeof BB || null === BB) return BB;
      if (Array.isArray(BB)) return {
        array: wj(BB[0])
      };
      const jB = function(BB) {
        const jB = Object.keys(BB),
          zB = jB.filter((BB => /\d+/.test(BB)));
        if (zB.length > 0 && zB.length === jB.length / 2 && BB[BB[zB[0]]] == zB[0]) return "number";
        if (jB.length > 0 && jB.every((jB => BB[jB] === jB))) return "string"
      }(BB);
      if (jB) return jB;
      if (Xj(BB)) return "string" === typeof BB.quantized.wire ? BB : {
        quantized: hj(BB.quantized)
      };
      if (void 0 !== BB.type) return wj(BB.type);
      const zB = lj(BB);
      return zB && (BB[zB] = wj(BB[zB])), BB
    }
    const xj = [fB, DB, FB, YB, VB, hB, iB];

    function Kj(BB, jB, zB) {
      BB[jB] || Object.defineProperty(BB, jB, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), BB[jB].push(zB)
    }
    const Cj = {
        addField(BB, jB, zB, QB, nB) {
          if (jB >= 63) throw new Error(`Can't define field '${zB}'.\nSchema instances may only have up to 63 fields.`);
          BB[jB] = Object.assign(BB[jB] || {}, {
            type: QB,
            index: jB,
            name: zB
          }), Object.defineProperty(BB, MB, {
            value: BB[MB] || {},
            enumerable: !1,
            configurable: !0
          }), BB[MB][zB] = nB || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(BB, qB, {
            value: jB,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(BB, zB, {
            value: jB,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof BB[jB].type || Xj(BB[jB].type) || (void 0 === BB[fB] && Object.defineProperty(BB, fB, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), BB[fB].push(jB));
          const dB = BB[jB].type;
          if (dB && "object" === typeof dB && void 0 !== dB.stream) {
            if (void 0 !== dB.array) throw new Error(Ej);
            BB[jB].stream = !0, BB[hB] || Object.defineProperty(BB, hB, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), BB[hB].includes(jB) || BB[hB].push(jB);
            const nB = QB?.priority;
            "function" === typeof nB && Cj.setStreamPriority(BB, zB, nB)
          }
        },
        setTag(BB, jB, zB) {
          const QB = BB[jB];
          if (BB[QB].tag = zB, BB[oB] || (Object.defineProperty(BB, oB, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(BB, HB, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), BB[oB].push(QB), zB < 0) BB[HB][zB] || (BB[HB][zB] = []), BB[HB][zB].push(QB);
          else
            for (let nB = zB; nB > 0; nB &= nB - 1) {
              const jB = nB & -nB;
              BB[HB][jB] || (BB[HB][jB] = []), BB[HB][jB].push(QB)
            }
        },
        setUnreliable(BB, jB) {
          const zB = BB[jB];
          if ("string" !== typeof BB[zB].type) throw new Error(`@unreliable cannot be applied to ref-type field "${jB}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          BB[zB].unreliable = !0, BB[DB] || Object.defineProperty(BB, DB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[DB].push(zB)
        },
        setPatchOnly(BB, jB) {
          const zB = BB[jB];
          if (BB[zB].fullStateOnly) throw new Error(`field "${jB}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          BB[zB].patchOnly = !0, Kj(BB, FB, zB), Kj(BB, YB, zB)
        },
        setDeprecated(BB, jB) {
          const zB = BB[jB];
          BB[zB].deprecated = !0, Kj(BB, YB, zB), Object.defineProperty(BB, zB, {
            value: BB[zB],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(BB, jB) {
          const zB = BB[jB];
          if (BB[zB].patchOnly) throw new Error(`field "${jB}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          BB[zB].fullStateOnly = !0, Kj(BB, VB, zB)
        },
        setStream(BB, jB) {
          const zB = BB[jB];
          BB[zB].stream = !0, BB[hB] || Object.defineProperty(BB, hB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[hB].push(zB)
        },
        setStreamPriority(BB, jB, zB) {
          const QB = BB[jB];
          BB[XB] || Object.defineProperty(BB, XB, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BB[XB][QB] = zB
        },
        getStreamPriority: (BB, jB) => BB?.[XB]?.[jB],
        defineField(BB, jB, zB, QB, nB) {
          const dB = ej(nB, `${BB.name}.${QB}`),
            {
              complexTypeKlass: IB,
              childType: NB
            } = Wj(dB);
          Cj.addField(jB, zB, QB, dB, SQ(QB, zB, NB, IB)), jB[MB][QB] && Object.defineProperty(BB.prototype, QB, jB[MB][QB]), ("string" === typeof dB || Xj(dB)) && (jB[iB] || Object.defineProperty(jB, iB, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), jB[iB][zB] = "string" === typeof dB ? jj[dB] : Tj(dB.quantized))
        },
        setFields(BB, jB) {
          const zB = BB.prototype.constructor;
          Pj.register(zB);
          const QB = Object.getPrototypeOf(zB),
            nB = QB && QB[Symbol.metadata],
            dB = Cj.initialize(zB);
          zB[uB] || (zB[uB] = oQ[uB]), zB[UB] || (zB[UB] = oQ[UB]), zB[aB] || (zB[aB] = oQ[aB]), zB.prototype.toJSON || (zB.prototype.toJSON = oQ.prototype.toJSON);
          let IB = dB[qB] ?? (nB && nB[qB]) ?? -1;
          IB++, dB[iB] || Object.defineProperty(dB, iB, {
            value: nB?.[iB] ? [...nB[iB]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const NB in jB) {
            if (void 0 !== dB[NB]) throw new Error(`@colyseus/schema: Duplicate '${NB}' definition on '${zB.name||"(anonymous)"}'.`);
            Cj.defineField(zB, dB, IB, NB, jB[NB]), IB++
          }
          return BB
        },
        isDeprecated: (BB, jB) => !0 === BB[jB].deprecated,
        initialize(BB) {
          const jB = Object.getPrototypeOf(BB),
            zB = jB[Symbol.metadata];
          let QB = BB[Symbol.metadata] ?? Object.create(null);
          if (jB !== oQ && QB === zB && (QB = Object.create(null), zB)) {
            Object.setPrototypeOf(QB, zB), Object.defineProperty(QB, qB, {
              value: zB[qB],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== zB[oB] && (Object.defineProperty(QB, oB, {
              value: [...zB[oB]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(QB, HB, {
              value: {
                ...zB[HB]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const BB of xj) {
              const jB = zB[BB];
              void 0 !== jB && Object.defineProperty(QB, BB, {
                value: [...jB],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(QB, MB, {
              value: {
                ...zB[MB]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(BB, Symbol.metadata, {
            value: QB,
            writable: !1,
            configurable: !0
          }), QB
        },
        isValidInstance: BB => BB.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(BB.constructor[Symbol.metadata], qB),
        getFields(BB) {
          const jB = BB[Symbol.metadata],
            zB = {};
          for (let QB = 0; QB <= jB[qB]; QB++) zB[jB[QB].name] = jB[QB].type;
          return zB
        },
        hasViewTagAtIndex: (BB, jB) => BB?.[oB]?.includes(jB),
        hasUnreliableAtIndex: (BB, jB) => BB?.[DB]?.includes(jB),
        hasPatchOnlyAtIndex: (BB, jB) => BB?.[FB]?.includes(jB),
        hasFullStateOnlyAtIndex: (BB, jB) => BB?.[VB]?.includes(jB),
        hasStreamAtIndex: (BB, jB) => BB?.[hB]?.includes(jB)
      },
      cj = (BB, jB, zB) => BB(jB, zB);
    class bj {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(BB) {
        this.ops = new Uint8Array(Math.max(BB + 1, 1))
      }
      record(BB, jB) {
        const zB = this.ops[BB];
        0 === zB ? this.ops[BB] = jB : (zB === nB.DELETE || zB === nB.ADD && jB === nB.DELETE_AND_ADD) && (this.ops[BB] = nB.DELETE_AND_ADD), BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      recordDelete(BB, jB) {
        this.ops[BB] = jB, BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      recordRaw(BB, jB) {
        this.record(BB, jB)
      }
      operationAt(BB) {
        const jB = this.ops[BB];
        return 0 === jB ? void 0 : jB
      }
      setOperationAt(BB, jB) {
        this.ops[BB] = jB
      }
      forEach(BB) {
        this.forEachWithCtx(BB, cj)
      }
      forEachWithCtx(BB, jB) {
        let zB = this.dirtyLow,
          QB = this.dirtyHigh;
        const nB = this.ops;
        for (; 0 !== zB;) {
          const QB = zB & -zB,
            dB = 31 - Math.clz32(QB);
          zB ^= QB, jB(BB, dB, nB[dB])
        }
        for (; 0 !== QB;) {
          const zB = QB & -QB,
            dB = 31 - Math.clz32(zB) + 32;
          QB ^= zB, jB(BB, dB, nB[dB])
        }
      }
      size() {
        return Rj(this.dirtyLow) + Rj(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class vj {
      RJ = new Map;
      pureOps = [];
      record(BB, jB) {
        const zB = this.RJ.get(BB);
        void 0 === zB ? this.RJ.set(BB, jB) : (zB === nB.DELETE || zB === nB.ADD && jB === nB.DELETE_AND_ADD) && this.RJ.set(BB, nB.DELETE_AND_ADD)
      }
      recordDelete(BB, jB) {
        this.RJ.set(BB, jB)
      }
      recordRaw(BB, jB) {
        this.RJ.set(BB, jB)
      }
      recordPure(BB) {
        this.pureOps.push([this.RJ.size, BB])
      }
      operationAt(BB) {
        return this.RJ.get(BB)
      }
      setOperationAt(BB, jB) {
        this.RJ.has(BB) && this.RJ.set(BB, jB)
      }
      forEach(BB) {
        this.forEachWithCtx(BB, cj)
      }
      forEachWithCtx(BB, jB) {
        const zB = this.pureOps;
        if (zB.length > 0) {
          let QB = 0,
            nB = 0;
          for (const [dB, IB] of this.RJ) {
            for (; QB < zB.length && zB[QB][0] <= nB;) {
              const nB = zB[QB++][1];
              jB(BB, -nB, nB)
            }
            jB(BB, dB, IB), nB++
          }
          for (; QB < zB.length;) {
            const nB = zB[QB++][1];
            jB(BB, -nB, nB)
          }
        } else
          for (const [QB, nB] of this.RJ) jB(BB, QB, nB)
      }
      size() {
        return this.RJ.size + this.pureOps.length
      }
      has() {
        return this.RJ.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.RJ.clear(), this.pureOps.length = 0
      }
      shift(BB) {
        const jB = new Map;
        for (const [zB, QB] of this.RJ) jB.set(zB + BB, QB);
        this.RJ = jB
      }
    }

    function Rj(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }

    function Oj(BB) {
      if (void 0 === BB) return 0;
      let jB = 0;
      for (let zB = 0, QB = BB.length; zB < QB; zB++) {
        const QB = BB[zB];
        QB < 32 && (jB |= 1 << QB)
      }
      return jB
    }

    function Bz(BB) {
      const jB = BB.constructor;
      if (Object.prototype.hasOwnProperty.call(jB, EB)) return jB[EB];
      const zB = jB[Symbol.metadata],
        QB = Cj.isValidInstance(BB),
        nB = (zB?.[oB]?.length ?? 0) > 0,
        dB = function(BB) {
          const jB = [],
            zB = [],
            QB = [],
            nB = [],
            dB = BB?.[qB];
          if (void 0 === dB) return {
            names: jB,
            types: zB,
            tags: QB,
            encoders: nB
          };
          const IB = BB[iB];
          for (let NB = 0; NB <= dB; NB++) {
            const dB = BB[NB];
            void 0 !== dB ? (jB[NB] = dB.name, zB[NB] = dB.type, QB[NB] = dB.tag, nB[NB] = IB?.[NB]) : (jB[NB] = void 0, zB[NB] = void 0, QB[NB] = void 0, nB[NB] = void 0)
          }
          return {
            names: jB,
            types: zB,
            tags: QB,
            encoders: nB
          }
        }(zB),
        IB = QB && !nB ? void 0 : jB[pB],
        NB = {
          encoder: jB[UB],
          filter: IB,
          metadata: zB,
          isSchema: QB,
          filterBitmask: QB ? Oj(zB?.[oB]) : 0,
          hasAnyFullStateOnly: (zB?.[VB]?.length ?? 0) > 0,
          hasAnyUnreliable: (zB?.[DB]?.length ?? 0) > 0,
          hasAnyStream: (zB?.[hB]?.length ?? 0) > 0,
          hasAnyView: nB,
          fullStateOnlyBitmask: Oj(zB?.[VB]),
          unreliableBitmask: Oj(zB?.[DB]),
          streamBitmask: Oj(zB?.[hB]),
          names: dB.names,
          types: dB.types,
          tags: dB.tags,
          encoders: dB.encoders
        };
      return Object.defineProperty(jB, EB, {
        value: NB,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), NB
    }

    function jz(BB, jB) {
      if (void 0 !== BB.parentRef && jB(BB.parentRef, BB._parentIndex)) return !0;
      for (let zB = BB.extraParents; void 0 !== zB; zB = zB.next)
        if (jB(zB.ref, zB.index)) return !0;
      return !1
    }
    const zz = (BB, jB) => {
        BB.isFieldUnreliable(jB) ? BB.ensureUnreliableRecorder().record(jB, nB.ADD) : BB.record(jB, nB.ADD)
      },
      Qz = (BB, jB) => BB(jB);

    function nz(BB, jB, zB) {
      const QB = BB.refTarget;
      if (void 0 !== QB[yB]) {
        if (BB.isPatchOnly) return;
        if (Array.isArray(QB.items)) {
          const BB = QB.items;
          for (let QB = 0, nB = BB.length; QB < nB; QB++) void 0 !== BB[QB] && zB(jB, QB)
        } else if (void 0 !== QB.journal)
          for (const [BB, nB] of QB.journal.keyByIndex) QB.$items.has(nB) && zB(jB, BB);
        else if (void 0 !== QB.$items)
          for (const BB of QB.$items.keys()) zB(jB, BB)
      } else {
        const nB = BB.metadata;
        if (!nB) return;
        const dB = nB[qB] ?? -1,
          IB = nB[YB],
          NB = BB.encDescriptor.names;
        for (let BB = 0; BB <= dB; BB++) {
          const nB = NB[BB];
          if (void 0 === nB) continue;
          if (IB && IB.includes(BB)) continue;
          const dB = QB[nB];
          void 0 !== dB && null !== dB && zB(jB, BB)
        }
      }
    }

    function dz(BB, jB, zB, QB) {
      ! function(BB, jB, zB) {
        if (!jB) return;
        const QB = jB[mB],
          nB = !QB._isSchema;
        let dB;
        nB ? (jB = QB.parent, zB = QB.parentIndex, dB = jB?.[mB].metadata) : dB = QB.metadata;
        const IB = (dB?.[FB]?.includes(zB) ? Ez : 0) | (dB?.[VB]?.includes(zB) ? iz : 0),
          NB = QB.flags & oz | IB,
          uB = BB.flags;
        BB.flags = uB | NB;
        NB & ~uB & iz && (BB.reset(), BB.unreliableRecorder?.reset());
        const UB = BB.root?.types;
        if (!UB?.hasFilters) return;
        const aB = dB?.[oB]?.includes(zB) ?? !1,
          pB = dB?.[hB]?.includes(zB) ?? !1,
          rB = QB.isFiltered || aB || pB;
        if (BB.isFiltered = rB, pB && !nB) {
          BB.isStreamCollection = !0;
          const jB = qj(BB.ref);
          if (void 0 === jB.priority) {
            const BB = Cj.getStreamPriority(dB, zB);
            void 0 !== BB && (jB.priority = BB)
          }
          BB.root?.registerStream(BB.ref)
        }
        if (rB) {
          const jB = Nz(BB);
          BB.isVisibilitySharedWithParent = QB.isFiltered && jB && !pB && (!aB || nB && dB[zB].tag !== JQ)
        }
      }(BB, jB, zB), BB.isFullStateOnly || (BB.has() && BB.root?.enqueueChangeTree(BB), BB.unreliableRecorder?.has() && BB.root?.enqueueUnreliable(BB), BB.has() || BB.unreliableRecorder?.has() || BB.root?.enqueueChangeTree(BB))
    }

    function Iz(BB) {
      const jB = BB.pendingFilterRefresh;
      for (let zB = 0; zB < jB.length; zB++) {
        const BB = jB[zB];
        0 !== (BB.flags & fz) && uz(BB)
      }
      jB.length = 0
    }

    function Nz(BB) {
      return BB._isSchema || "string" !== typeof BB.refTarget[yB]
    }

    function uz(BB) {
      BB.flags &= ~fz;
      const jB = BB.root;
      if (void 0 === jB || void 0 === BB.parentRef) return;
      const zB = Nz(BB);
      let QB = sz(BB, BB.parentRef, BB._parentIndex, zB);
      for (let dB = BB.extraParents; void 0 !== dB && QB !== rz; dB = dB.next) QB |= sz(BB, dB.ref, dB.index, zB);
      if (0 === QB) return;
      BB.isVisibilitySharedWithParent = 0 !== (QB & pz);
      const nB = 0 === (QB & az);
      nB !== BB.isFiltered && (BB.isFiltered = nB, nB || BB.isFullStateOnly || (BB.forEachLiveWithCtx(BB, zz), BB.has() && jB.enqueueChangeTree(BB), BB.unreliableRecorder?.has() && jB.enqueueUnreliable(BB)), BB.forEachChildWithCtx(BB, Jz))
    }
    const Uz = 1,
      az = 2,
      pz = 4,
      rz = Uz | az | pz;

    function sz(BB, jB, zB, QB) {
      const nB = jB[mB];
      if (nB.root !== BB.root || ! function(BB, jB, zB) {
          const QB = jB.refTarget;
          if (jB.isArray) {
            const jB = QB.items,
              nB = jB[zB];
            if (void 0 !== nB && nB[mB] === BB) return !0;
            for (let zB = 0, QB = jB.length; zB < QB; zB++) {
              const QB = jB[zB];
              if (void 0 !== QB && QB[mB] === BB) return !0
            }
            return !1
          }
          const nB = jB.getValue(zB);
          return void 0 !== nB && nB[mB] === BB
        }(BB, nB, zB)) return 0;
      nB.flags & fz && uz(nB);
      let dB = Uz;
      if (nB._isSchema) {
        void 0 !== nB.encDescriptor.tags[zB] || nB.isFieldStream(zB) || (nB.isFiltered ? QB && (dB |= pz) : dB |= az)
      } else if (nB.isFiltered) {
        if (QB && !nB.isStreamCollection) {
          const BB = nB.parent?.[mB];
          (BB?._isSchema ? BB.encDescriptor.tags[nB.parentIndex] : void 0) !== JQ && (dB |= pz)
        }
      } else dB |= az;
      return dB
    }
    const Jz = (BB, jB, zB) => {
      uz(jB)
    };

    function mz(BB, jB, zB, QB) {
      if (BB.addParent(jB, QB), !zB) return;
      const nB = zB.add(BB);
      zB !== BB.root && (BB.root = zB, dz(BB, jB, QB));
      const dB = jB?.[mB];
      if (void 0 !== dB && void 0 !== dB.subscribedViews && void 0 !== jB[yB] && function(BB, jB, zB, QB) {
          const nB = BB.subscribedViews;
          if (void 0 === nB) return;
          const dB = BB.isStreamCollection,
            IB = dB ? BB.ref : void 0,
            NB = dB ? void 0 : zB[mB];
          for (let uB = 0, UB = nB.length; uB < UB; uB++) {
            let BB = nB[uB];
            for (; 0 !== BB;) {
              const zB = BB & -BB;
              BB ^= zB;
              const UB = 32 * uB + (31 - Math.clz32(zB)),
                aB = QB.activeViews.get(UB),
                pB = aB?.deref();
              void 0 !== pB ? dB ? Fj(IB, UB, jB) : void 0 !== NB && pB.markVisible(NB) : nB[uB] &= ~zB
            }
          }
        }(dB, QB, BB.ref, zB), nB) {
        let jB = Lz[gz];
        void 0 === jB && (jB = {
          parentRef: void 0,
          root: void 0
        }, Lz[gz] = jB), jB.parentRef = BB.ref, jB.root = zB, gz++, kz(BB, jB, tz), gz--
      }
    }

    function yz(BB, jB, zB) {
      BB(jB, zB)
    }

    function kz(BB, jB, zB) {
      const QB = BB.refTarget;
      if (QB[yB]) {
        if ("string" !== typeof QB[yB]) {
          const BB = QB.items;
          if (void 0 !== BB)
            for (let QB = 0, nB = BB.length; QB < nB; QB++) {
              const nB = BB[QB];
              nB && zB(jB, nB[mB], QB)
            } else {
              const BB = QB.$items,
                nB = QB._collectionIndexes;
              for (const QB of BB.keys()) {
                const dB = BB.get(QB);
                dB && zB(jB, dB[mB], nB?.[QB] ?? QB)
              }
            }
        }
      } else {
        const nB = BB.metadata,
          dB = nB?.[fB];
        if (!dB) return;
        const IB = BB.encDescriptor.names;
        for (let BB = 0, NB = dB.length; BB < NB; BB++) {
          const nB = dB[BB],
            NB = QB[IB[nB]];
          NB && zB(jB, NB[mB], nB)
        }
      }
    }

    function Gz(BB, jB, zB) {
      jB.root !== BB ? jB.setRoot(BB) : BB.add(jB)
    }
    const Lz = [];
    let gz = 0;

    function tz(BB, jB, zB) {
      if (jB.root === BB.root) return BB.root.add(jB), void BB.root.moveNextToParent(jB);
      jB.setParent(BB.parentRef, BB.root, zB)
    }

    function Sz(BB, jB, zB) {
      const QB = (3 & zB) << 3;
      return zB < 4 ? BB >>> QB & 255 : jB >>> QB & 255
    }
    const Mz = (BB, jB, zB) => BB(jB, zB);
    const Ez = 16,
      iz = 32,
      qz = 128,
      fz = 256,
      oz = Ez | iz;
    class Hz {
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
        return 0 !== (this.flags & Ez)
      }
      set isPatchOnly(BB) {
        this.flags = BB ? this.flags | Ez : this.flags & ~Ez
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & iz)
      }
      set isFullStateOnly(BB) {
        this.flags = BB ? this.flags | iz : this.flags & ~iz
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(BB) {
        this.flags = BB ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & qz)
      }
      set needsRestage(BB) {
        this.flags = BB ? this.flags | qz : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new bj(this.metadata?.[qB] ?? 0) : new vj), this.unreliableRecorder
      }
      isFieldUnreliable(BB) {
        const jB = this.encDescriptor;
        return !!jB.hasAnyUnreliable && (BB < 32 ? 0 !== (jB.unreliableBitmask & 1 << BB) : Cj.hasUnreliableAtIndex(this.metadata, BB))
      }
      isFieldFullStateOnly(BB) {
        if (this.isFullStateOnly) return !0;
        const jB = this.encDescriptor;
        return !!jB.hasAnyFullStateOnly && (BB < 32 ? 0 !== (jB.fullStateOnlyBitmask & 1 << BB) : Cj.hasFullStateOnlyAtIndex(this.metadata, BB))
      }
      isFieldStream(BB) {
        const jB = this.encDescriptor;
        return !!jB.hasAnyStream && (BB < 32 ? 0 !== (jB.streamBitmask & 1 << BB) : Cj.hasStreamAtIndex(this.metadata, BB))
      }
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        this.ref = BB, this.refTarget = jB;
        const zB = Bz(BB);
        this.encDescriptor = zB, this.metadata = zB.metadata;
        const QB = zB.isSchema;
        if (this._isSchema = QB, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, QB) {
          const BB = this.metadata?.[qB] ?? 0;
          BB > 7 && (this.ops = new Uint8Array(BB + 1))
        } else this.collDirty = new Map
      }
      _opAt(BB) {
        const jB = this.ops;
        if (void 0 !== jB) return jB[BB];
        const zB = (3 & BB) << 3;
        return BB < 4 ? this.opsLow >>> zB & 255 : this.opsHigh >>> zB & 255
      }
      _opPut(BB, jB) {
        const zB = this.ops;
        if (void 0 !== zB) return void(zB[BB] = jB);
        const QB = (3 & BB) << 3,
          nB = ~(255 << QB);
        BB < 4 ? this.opsLow = this.opsLow & nB | jB << QB : this.opsHigh = this.opsHigh & nB | jB << QB
      }
      _markDirty(BB) {
        BB < 32 ? this.dirtyLow |= 1 << BB : this.dirtyHigh |= 1 << BB - 32
      }
      record(BB, jB) {
        if (this._isSchema) {
          const zB = this._opAt(BB);
          0 === zB ? this._opPut(BB, jB) : (zB === nB.DELETE || zB === nB.ADD && jB === nB.DELETE_AND_ADD) && this._opPut(BB, nB.DELETE_AND_ADD), this._markDirty(BB)
        } else {
          const zB = this.collDirty,
            QB = zB.get(BB);
          let dB;
          dB = void 0 === QB ? jB : QB === nB.DELETE || QB === nB.ADD && jB === nB.DELETE_AND_ADD ? nB.DELETE_AND_ADD : QB, zB.set(BB, dB)
        }
      }
      recordDelete(BB, jB) {
        this._isSchema ? (this._opPut(BB, jB), this._markDirty(BB)) : this.collDirty.set(BB, jB)
      }
      recordRaw(BB, jB) {
        this._isSchema ? (this._opPut(BB, jB), this._markDirty(BB)) : this.collDirty.set(BB, jB)
      }
      recordPure(BB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, BB])
      }
      operationAt(BB) {
        if (this._isSchema) {
          const jB = this._opAt(BB);
          return 0 === jB ? void 0 : jB
        }
        return this.collDirty.get(BB)
      }
      setOperationAt(BB, jB) {
        if (this._isSchema) this._opPut(BB, jB);
        else {
          const zB = this.collDirty;
          zB.has(BB) && zB.set(BB, jB)
        }
      }
      forEach(BB) {
        this.forEachWithCtx(BB, Mz)
      }
      forEachWithCtx(BB, jB) {
        if (this._isSchema) {
          let zB = this.dirtyLow,
            QB = this.dirtyHigh;
          const nB = this.ops;
          if (void 0 !== nB) {
            for (; 0 !== zB;) {
              const QB = zB & -zB,
                dB = 31 - Math.clz32(QB);
              zB ^= QB, jB(BB, dB, nB[dB])
            }
            for (; 0 !== QB;) {
              const zB = QB & -QB,
                dB = 31 - Math.clz32(zB) + 32;
              QB ^= zB, jB(BB, dB, nB[dB])
            }
          } else {
            const QB = this.opsLow,
              nB = this.opsHigh;
            for (; 0 !== zB;) {
              const dB = zB & -zB,
                IB = 31 - Math.clz32(dB);
              zB ^= dB, jB(BB, IB, Sz(QB, nB, IB))
            }
          }
          return
        }
        const zB = this.collDirty,
          QB = this.collPureOps;
        if (void 0 !== QB && QB.length > 0) {
          let nB = 0,
            dB = 0;
          for (const [IB, NB] of zB) {
            for (; nB < QB.length && QB[nB][0] <= dB;) {
              const zB = QB[nB++][1];
              jB(BB, -zB, zB)
            }
            jB(BB, IB, NB), dB++
          }
          for (; nB < QB.length;) {
            const zB = QB[nB++][1];
            jB(BB, -zB, zB)
          }
        } else
          for (const [nB, dB] of zB) jB(BB, nB, dB)
      }
      size() {
        return this._isSchema ? Rj(this.dirtyLow) + Rj(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(BB, jB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const zB = this.collDirty,
          QB = new Map,
          dB = !this.paused && !this.isFullStateOnly;
        if (BB > 0)
          for (const [nB, IB] of zB) nB < BB && QB.set(nB, IB);
        if (dB)
          for (let IB = 0; IB < jB; IB++) QB.set(BB + IB, nB.ADD);
        for (const [nB, IB] of zB) nB >= BB && QB.set(nB + jB, IB);
        this.collDirty = QB, dB && this.root?.enqueueChangeTree(this)
      }
      removeAt(BB, jB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const zB = this.collDirty,
          QB = BB + jB;
        let nB = !1;
        for (const IB of zB.keys())
          if (IB >= QB) {
            nB = !0;
            break
          } if (!nB) {
          for (let jB = BB; jB < QB; jB++) zB.delete(jB);
          return
        }
        const dB = new Map;
        for (const [IB, NB] of zB) IB < BB ? dB.set(IB, NB) : IB >= QB && dB.set(IB - jB, NB);
        this.collDirty = dB
      }
      unshift(BB) {
        this.insertAt(0, BB)
      }
      setRoot(BB) {
        ! function(BB, jB) {
          BB.root = jB;
          const zB = jB.add(BB);
          dz(BB, BB.parent, BB.parentIndex), zB && kz(BB, jB, Gz)
        }(this, BB)
      }
      setParent(BB, jB, zB) {
        mz(this, BB, jB, zB)
      }
      forEachChild(BB) {
        kz(this, BB, yz)
      }
      forEachChildWithCtx(BB, jB) {
        kz(this, BB, jB)
      }
      forEachLive(BB) {
        nz(this, BB, Qz)
      }
      forEachLiveWithCtx(BB, jB) {
        nz(this, BB, jB)
      }
      operation(BB) {
        this.paused || this.isFullStateOnly || (this.recordPure(BB), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(BB, jB, zB) {
        if (!this.paused && !this.isFieldFullStateOnly(BB)) {
          if (this.isFieldUnreliable(BB) && !this.isNew) {
            const QB = this.ensureUnreliableRecorder();
            return zB ? QB.recordRaw(BB, jB) : QB.record(BB, jB), void this.root?.enqueueUnreliable(this)
          }
          zB ? this.recordRaw(BB, jB) : this.record(BB, jB), this.root?.enqueueChangeTree(this)
        }
      }
      change(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nB.ADD;
        this._routeAndRecord(BB, jB, !1)
      }
      indexedOperation(BB, jB) {
        this._routeAndRecord(BB, jB, !0)
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
        const jB = this.paused;
        this.paused = !0;
        try {
          return BB()
        } finally {
          this.paused = jB
        }
      }
      markDirty(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nB.ADD;
        const zB = this.paused;
        this.paused = !1;
        try {
          this.change(BB, jB)
        } finally {
          this.paused = zB
        }
      }
      getValue(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[rB](BB, jB)
      }
      delete(BB, jB) {
        if (void 0 === BB) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${BB}'`)
          } catch (dn) {
            console.warn(dn)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(BB)) return this.getValue(BB);
        const zB = this.isFieldUnreliable(BB) && !this.isNew;
        zB ? this.ensureUnreliableRecorder().recordDelete(BB, jB ?? nB.DELETE) : this.recordDelete(BB, jB ?? nB.DELETE);
        const QB = this.getValue(BB);
        return QB && QB[mB] && this.root?.remove(QB[mB]), zB ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), QB
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[GB]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[GB]?.()
      }
      discard() {
        this._isSchema || this.refTarget[GB]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const BB = BB => {
          if (BB < 0) return;
          const jB = this.getValue(BB);
          jB && jB[mB] && jB[mB].discardAll()
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
      addParent(BB, jB) {
        ! function(BB, jB, zB) {
          if (BB.parentRef) {
            if (BB.parentRef[mB] === jB[mB]) return void(BB._parentIndex = zB);
            if (jz(BB, ((BB, zB) => BB[mB] === jB[mB]))) return void(BB._parentIndex = zB)
          }
          void 0 === BB.parentRef ? (BB.parentRef = jB, BB._parentIndex = zB) : (BB.extraParents = {
            ref: BB.parentRef,
            index: BB._parentIndex,
            next: BB.extraParents
          }, BB.parentRef = jB, BB._parentIndex = zB)
        }(this, BB, jB)
      }
      setParentIndex(BB, jB) {
        ! function(BB, jB, zB) {
          if (void 0 !== BB.extraParents)
            if (BB.parentRef[mB] !== jB[mB]) {
              for (let QB = BB.extraParents; void 0 !== QB; QB = QB.next)
                if (QB.ref[mB] === jB[mB]) return void(QB.index = zB)
            } else BB._parentIndex = zB;
          else BB._parentIndex = zB
        }(this, BB, jB)
      }
      removeParent() {
        return function(BB, jB) {
          if (BB.parentRef && BB.parentRef[mB] === jB[mB]) return BB.extraParents ? (BB.parentRef = BB.extraParents.ref, BB._parentIndex = BB.extraParents.index, BB.extraParents = BB.extraParents.next) : (BB.parentRef = void 0, BB._parentIndex = void 0), !0;
          let zB = BB.extraParents,
            QB = null;
          for (; zB;) {
            if (zB.ref[mB] === jB[mB]) return QB ? QB.next = zB.next : BB.extraParents = zB.next, !0;
            QB = zB, zB = zB.next
          }
          return void 0 === BB.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(BB) {
        return function(BB, jB) {
          if (void 0 !== BB.parentRef && jB(BB.parentRef, BB._parentIndex)) return {
            ref: BB.parentRef,
            index: BB._parentIndex
          };
          for (let zB = BB.extraParents; void 0 !== zB; zB = zB.next)
            if (jB(zB.ref, zB.index)) return {
              ref: zB.ref,
              index: zB.index
            }
        }(this, BB)
      }
      hasParent(BB) {
        return jz(this, BB)
      }
      indexInParent(BB) {
        return function(BB, jB) {
          if (BB.parentRef && BB.parentRef[mB] === jB[mB]) return BB._parentIndex;
          for (let zB = BB.extraParents; void 0 !== zB; zB = zB.next)
            if (zB.ref[mB] === jB[mB]) return zB.index
        }(this, BB)
      }
      getAllParents() {
        return function(BB) {
          const jB = [];
          BB.parentRef && jB.push({
            ref: BB.parentRef,
            index: BB._parentIndex
          });
          let zB = BB.extraParents;
          for (; zB;) jB.push({
            ref: zB.ref,
            index: zB.index
          }), zB = zB.next;
          return jB
        }(this)
      }
    }
    class Dz {
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
        const jB = this.ref;
        if (jB[yB]) {
          if ("string" !== typeof jB[yB])
            for (const [zB, QB] of jB.entries()) QB && BB(QB[mB], jB._collectionIndexes?.[zB] ?? zB);
          return
        }
        const zB = jB.constructor,
          QB = zB?.[Symbol.metadata];
        if (!QB) return;
        const nB = QB[fB] ?? [];
        for (let dB = 0; dB < nB.length; dB++) {
          const zB = nB[dB],
            IB = jB[QB[zB].name];
          IB && BB(IB[mB], zB)
        }
      }
      forEachChildWithCtx(BB, jB) {
        this.forEachChild(((zB, QB) => jB(BB, zB, QB)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Fz(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
      var zB;
      Object.defineProperty(BB, mB, {
        value: (zB = jB, new Dz(zB)),
        enumerable: !1,
        writable: !0
      })
    }

    function Yz(BB, jB, zB, QB, dB, IB, uB) {
      void 0 !== uB ? uB(jB, QB, IB) : "string" === typeof zB ? jj[zB]?.(jB, QB, IB) : null != zB[Symbol.metadata] ? (jj.number(jB, QB[NB], IB), (dB & nB.ADD) === nB.ADD && BB.tryEncodeTypeId(jB, zB, QB.constructor, IB)) : jj.number(jB, QB[NB], IB)
    }
    const Vz = function(BB, jB, zB, QB, dB, IB, NB, uB) {
        if (jB[IB.offset++] = 255 & (QB | dB), dB === nB.DELETE) return;
        const UB = zB.encDescriptor,
          aB = zB.ref,
          pB = aB[tB][QB] ?? aB[UB.names[QB]];
        Yz(BB, jB, UB.types[QB], pB, dB, IB, UB.encoders[QB])
      },
      hz = function(BB, jB, zB, QB, dB, IB) {
        if (jB[IB.offset++] = 255 & dB, jj.number(jB, QB, IB), dB === nB.DELETE) return;
        const NB = zB.ref;
        if ((dB & nB.ADD) === nB.ADD) {
          const BB = NB.$indexes.get(QB);
          jj.string(jB, BB, IB)
        }
        Yz(BB, jB, NB[yB], NB[rB](QB), dB, IB)
      },
      Xz = function(BB, jB, zB, QB, dB, IB) {
        if (jB[IB.offset++] = 255 & dB, jj.number(jB, QB, IB), dB === nB.DELETE) return;
        const NB = zB.ref;
        Yz(BB, jB, NB[yB], NB[rB](QB), dB, IB)
      },
      Zz = function(BB, jB, zB, QB, dB, IB) {
        const NB = zB.ref;
        (dB & nB.ADD) === nB.ADD && "function" === typeof NB.set ? hz(BB, jB, zB, QB, dB, IB) : Xz(BB, jB, zB, QB, dB, IB)
      },
      Az = function(BB, jB, zB, QB, dB, IB, uB, UB) {
        const aB = zB.refTarget,
          pB = aB[yB],
          sB = "string" !== typeof pB;
        let JB;
        if (UB && zB.isFiltered && sB) {
          const BB = aB.tmpItems[QB];
          if (!BB) return;
          if (JB = BB[NB], dB === nB.DELETE) dB = nB.DELETE_BY_REFID;
          else if ((dB & nB.ADD) === nB.ADD) dB = nB.ADD_BY_REFID;
          else if ((dB & nB.MOVE) === nB.MOVE) return
        } else if (dB === nB.DELETE && sB) {
          const BB = aB.tmpItems[QB];
          if (!BB) return;
          JB = BB[NB], dB = nB.DELETE_BY_REFID
        } else JB = QB;
        if (jB[IB.offset++] = 255 & dB, jj.number(jB, JB, IB), dB === nB.DELETE || dB === nB.DELETE_BY_REFID) return;
        Yz(BB, jB, pB, aB[rB](QB, uB), dB, IB)
      };

    function Tz(BB, jB, zB, QB, dB, IB, uB) {
      const UB = BB.resyncVisited;
      let aB = UB.get(BB.currentRefId);
      if (void 0 === aB && UB.set(BB.currentRefId, aB = new Set), aB.add(QB), void 0 !== dB && zB === nB.ADD && dB !== IB) {
        const zB = dB[NB];
        void 0 !== zB && (BB.root.removeRef(zB), uB?.push({
          ref: jB,
          refId: BB.currentRefId,
          op: nB.DELETE,
          dynamicIndex: QB,
          value: void 0,
          previousValue: dB
        }))
      }
    }

    function Pz(BB, jB, zB, QB) {
      const nB = jB[NB];
      if (void 0 === nB || zB.has(nB)) return;
      zB.add(nB);
      const dB = jB.constructor[Symbol.metadata],
        IB = dB?.[fB];
      if (void 0 === IB) return;
      const uB = dB[FB];
      for (let NB = 0; NB < IB.length; NB++) {
        const nB = IB[NB];
        if (void 0 !== uB && uB.includes(nB)) continue;
        const UB = dB[nB],
          aB = jB[UB.name];
        aB && (oQ.is(UB.type) ? Pz(BB, aB, zB, QB) : Wz(BB, aB, zB, QB))
      }
    }

    function Wz(BB, jB, zB, QB) {
      const dB = jB[kB] ?? jB,
        IB = dB[NB];
      if (void 0 === IB || zB.has(IB)) return;
      zB.add(IB);
      const uB = BB.resyncVisited.get(IB);
      if (void 0 === uB) return;
      const UB = BB.root;
      dB[JB](uB, ((BB, zB) => {
        QB?.push({
          ref: jB,
          refId: IB,
          op: nB.DELETE,
          dynamicIndex: zB,
          value: void 0,
          previousValue: BB
        });
        const dB = BB?.[NB];
        void 0 !== dB && UB.removeRef(dB)
      }), (jB => {
        oQ.isSchema(jB) && Pz(BB, jB, zB, QB)
      }))
    }
    const ez = 1,
      lz = 2,
      wz = 3,
      xz = 4,
      Kz = 5;

    function Cz(BB, jB, zB, QB, dB, IB, uB, UB, aB) {
      const pB = BB.root;
      let rB;
      if ((jB & nB.DELETE) === nB.DELETE) {
        const BB = dB?.[NB];
        void 0 !== BB && pB.removeRef(BB), jB !== nB.DELETE_AND_ADD && zB[sB](QB), rB = void 0
      }
      if (jB === nB.DELETE);
      else if ("string" === typeof IB) rB = Lj[IB](uB, UB);
      else if (Xj(IB)) rB = function(BB, jB, zB) {
        return Aj(BB, (0, Lj[BB.wire])(jB, zB))
      }(IB.quantized, uB, UB);
      else if (oQ.is(IB)) {
        const zB = Lj.number(uB, UB);
        if (rB = pB.refs.get(zB), (jB & nB.ADD) === nB.ADD) {
          const QB = BB.getInstanceType(uB, UB, IB);
          rB || (rB = BB.createInstanceOfType(QB)), pB.addRef(zB, rB, rB !== dB || jB === nB.DELETE_AND_ADD && rB === dB)
        }
      } else {
        const zB = (JB = Object.keys(IB)[0], gj[JB]),
          QB = Lj.number(uB, UB);
        null !== BB.resyncVisited && function(BB, jB) {
          const zB = BB.resyncVisited;
          zB.has(jB) || zB.set(jB, new Set)
        }(BB, QB);
        const sB = pB.refs.has(QB) ? dB || pB.refs.get(QB) : zB.constructor.initializeForDecoder();
        if (rB = sB.clone(!0), rB[yB] = Object.values(IB)[0], dB) {
          let BB = dB[NB];
          if (void 0 !== BB && QB !== BB) {
            (jB & nB.DELETE) !== nB.DELETE && pB.removeRef(BB);
            const zB = dB.entries();
            let QB;
            for (;
              (QB = zB.next()) && !QB.done;) {
              const [jB, zB] = QB.value;
              "object" === typeof zB && (BB = zB[NB]), aB?.push({
                ref: dB,
                refId: BB,
                op: nB.DELETE,
                field: jB,
                value: void 0,
                previousValue: zB
              })
            }
          }
        }
        pB.addRef(QB, rB, sB !== dB || jB === nB.DELETE_AND_ADD && sB === dB)
      }
      var JB;
      return rB
    }
    const cz = function(BB, jB, zB, QB, nB) {
        const dB = jB[zB.offset++],
          IB = QB.constructor[Symbol.metadata],
          NB = dB >> 6 << 6,
          uB = dB % (NB || 255),
          UB = IB[uB];
        if (void 0 === UB) return console.warn("@colyseus/schema: field not defined at", {
          index: uB,
          ref: QB.constructor.name,
          metadata: IB
        }), -1;
        const aB = !0 === UB.deprecated,
          pB = aB ? void 0 : QB[rB](uB),
          sB = Cz(BB, NB, QB, uB, pB, UB.type, jB, zB, nB);
        aB || (null !== sB && void 0 !== sB && (QB[UB.name] = sB), pB !== sB && nB?.push({
          ref: QB,
          refId: BB.currentRefId,
          op: NB,
          field: UB.name,
          value: sB,
          previousValue: pB
        }))
      },
      bz = function(BB, jB, zB, QB, dB) {
        const IB = QB[kB] ?? QB,
          NB = jB[zB.offset++];
        if (NB === nB.CLEAR) return BB.removeChildRefs(IB, dB), void IB.clear();
        const uB = Lj.number(jB, zB),
          UB = IB[yB],
          aB = IB.constructor.COLLECTION_KIND;
        let pB;
        (NB & nB.ADD) === nB.ADD ? aB === ez ? (pB = Lj.string(jB, zB), IB.setIndex(uB, pB)) : pB = uB : pB = IB.getIndex(uB);
        const sB = IB[rB](uB),
          JB = Cz(BB, NB, QB, uB, sB, UB, jB, zB, dB);
        if (null !== BB.resyncVisited && Tz(BB, QB, NB, pB, sB, JB, dB), null !== JB && void 0 !== JB) switch (aB) {
          case ez:
            IB.$items.set(pB, JB);
            break;
          case lz:
            IB.$setAt(uB, JB, null !== BB.resyncVisited && NB === nB.ADD ? nB.REPLACE : NB);
            break;
          case wz:
          case xz:
          case Kz:
            IB.$items.has(uB) || (IB.$items.set(uB, JB), "number" === typeof IB.$refId && uB >= IB.$refId && (IB.$refId = uB + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${IB.constructor?.name} \u2014 item at index ${uB} was not stored.`)
        }
        sB !== JB && dB?.push({
          ref: QB,
          refId: BB.currentRefId,
          op: NB,
          dynamicIndex: pB,
          value: JB,
          previousValue: sB
        })
      },
      vz = function(BB, jB, zB, QB, dB) {
        const IB = QB[kB] ?? QB;
        let NB, uB = jB[zB.offset++];
        if (uB === nB.CLEAR) return BB.removeChildRefs(IB, dB), void IB.clear();
        if (uB === nB.REVERSE) return void IB.items.reverse();
        if (uB === nB.DELETE_BY_REFID) {
          const uB = Lj.number(jB, zB),
            UB = BB.root.refs.get(uB);
          if (void 0 === UB) return;
          if (BB.root.removeRef(uB), NB = IB.findIndex((BB => BB === UB)), -1 === NB) return;
          return IB[sB](NB), void dB?.push({
            ref: QB,
            refId: BB.currentRefId,
            op: nB.DELETE,
            dynamicIndex: NB,
            value: void 0,
            previousValue: UB
          })
        }
        if (uB === nB.ADD_BY_REFID) {
          const QB = Lj.number(jB, zB),
            nB = BB.root.refs.get(QB);
          nB && (NB = IB.findIndex((BB => BB === nB))), -1 !== NB && void 0 !== NB || (NB = IB.length)
        } else NB = Lj.number(jB, zB);
        const UB = IB[yB];
        let aB = NB;
        const pB = IB.items[NB],
          rB = Cz(BB, uB, QB, NB, pB, UB, jB, zB, dB);
        null !== BB.resyncVisited && Tz(BB, QB, uB, NB, pB, rB, dB), null !== rB && void 0 !== rB && rB !== pB && IB.$setAt(NB, rB, null !== BB.resyncVisited && uB === nB.ADD ? nB.REPLACE : uB), pB !== rB && dB?.push({
          ref: QB,
          refId: BB.currentRefId,
          op: uB,
          dynamicIndex: aB,
          value: rB,
          previousValue: pB
        })
      };
    class Rz extends Error {}

    function Oz(BB, jB, zB, QB) {
      if (!(BB instanceof jB)) throw new Rz(`a '${jB.name}' was expected, but '${BB&&BB.constructor.name}' was provided in ${zB.constructor.name}#${QB}`)
    }
    const BQ = (BB, jB) => {
        const zB = BB.toString(),
          QB = jB.toString();
        return zB < QB ? -1 : zB > QB ? 1 : 0
      },
      jQ = {
        get: (BB, jB) => "symbol" === typeof jB || isNaN(jB) ? Reflect.get(BB, jB) : BB.items[jB],
        set: (BB, jB, zB) => {
          if ("symbol" !== typeof jB && !isNaN(jB)) {
            if (void 0 === zB || null === zB) BB.$deleteAt(jB);
            else {
              let QB;
              if (zB[mB]) {
                Oz(zB, BB[yB], BB, jB);
                const dB = BB.items[jB];
                BB.isMovingItems ? (QB = BB.$wireIndex(Number(jB)), void 0 !== dB ? zB[mB].isNew ? BB[mB].indexedOperation(QB, nB.MOVE_AND_ADD) : (BB[mB].getChange(QB) & nB.DELETE) === nB.DELETE ? BB[mB].indexedOperation(QB, nB.DELETE_AND_MOVE) : BB[mB].indexedOperation(QB, nB.MOVE) : zB[mB].isNew && BB[mB].indexedOperation(QB, nB.ADD), zB[mB].setParent(BB, BB[mB].root, QB)) : QB = BB.$changeAt(Number(jB), zB), void 0 !== dB && dB[mB].root?.remove(dB[mB])
              } else QB = BB.$changeAt(Number(jB), zB);
              BB.items[jB] = zB, void 0 !== QB && (BB.tmpItems[QB] = zB)
            }
            return !0
          }
          return Reflect.set(BB, jB, zB)
        },
        deleteProperty: (BB, jB) => ("number" === typeof jB ? BB.$deleteAt(jB) : delete BB[jB], !0),
        has: (BB, jB) => "symbol" === typeof jB || isNaN(Number(jB)) ? Reflect.has(BB, jB) : Reflect.has(BB.items, jB)
      };
    class zQ {
      [mB];
      [NB];
      [kB];
      [yB];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[UB] = Az;
      static[aB] = vz;
      static COLLECTION_KIND = lz;
      static[pB](BB, jB, zB) {
        if (!zB) return !0;
        const QB = BB[kB] ?? BB;
        return "string" === typeof QB[yB] || zB.isChangeTreeVisible(QB.tmpItems[jB]?.[mB])
      }
      static is(BB) {
        return Array.isArray(BB) || void 0 !== BB.array
      }
      static from(BB) {
        return new zQ(...Array.from(BB))
      }
      constructor() {
        this[yB] = void 0, this[kB] = this;
        const BB = new Proxy(this, jQ);
        return Object.defineProperty(this, mB, {
          value: new Hz(BB, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), BB
      }
      static initializeForDecoder() {
        const BB = Object.create(zQ.prototype);
        BB.items = [], BB.isMovingItems = !1, BB._needsCompaction = !1, BB[yB] = void 0, BB[kB] = BB;
        const jB = new Proxy(BB, jQ);
        return Fz(BB, jB), jB
      }
      set length(BB) {
        0 === BB ? this.clear() : BB < this.items.length ? this.splice(BB, this.length - BB) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[mB].pause()
      }
      resumeTracking() {
        this[mB].resume()
      }
      untracked(BB) {
        return this[mB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[mB].paused
      }
      push() {
        const BB = this[kB],
          jB = BB.items,
          zB = BB.tmpItems,
          QB = BB[mB],
          dB = BB[yB];
        let IB = zB.length;
        for (let NB = 0, uB = arguments.length; NB < uB; NB++, IB++) {
          const uB = NB < 0 || arguments.length <= NB ? void 0 : arguments[NB];
          if (void 0 === uB || null === uB) return;
          "object" === typeof uB && dB && Oz(uB, dB, BB, NB), QB.indexedOperation(IB, nB.ADD), jB.push(uB), zB.push(uB), uB[mB]?.setParent(this, QB.root, IB)
        }
        return IB
      }
      pop() {
        const BB = this[kB],
          jB = BB.tmpItems,
          zB = BB.deletedIndexes;
        let QB = -1;
        for (let dB = jB.length - 1; dB >= 0; dB--)
          if (!0 !== zB[dB]) {
            QB = dB;
            break
          } if (QB < 0) return;
        const nB = BB.$isUnsentAdd(QB);
        return BB[mB].delete(QB), nB ? BB.$cancelAdd(QB) : zB[QB] = !0, BB.items.pop()
      }
      at(BB) {
        return BB < 0 && (BB += this.length), this.items[BB]
      }
      $wireIndex(BB) {
        const jB = this.deletedIndexes;
        if (0 === jB.length) return BB;
        const zB = this.tmpItems;
        let QB = 0;
        for (let nB = 0; nB < zB.length; nB++)
          if (!0 !== jB[nB]) {
            if (QB === BB) return nB;
            QB++
          } return zB.length + (BB - QB)
      }
      $isUnsentAdd(BB) {
        const jB = this[mB];
        return 0 === (576 & jB.flags) && !jB.paused && "string" !== typeof this[yB] && jB.operationAt(BB) === nB.ADD
      }
      $cancelAdd(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zB = this[mB],
          QB = this.tmpItems[BB];
        this.tmpItems.splice(BB, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(BB, 1), zB.removeAt(BB, 1);
        const nB = QB?.[mB];
        void 0 !== nB && void 0 === nB.root && nB.removeParent(this), jB && this.$reindexChildren(BB)
      }
      $reindexChildren(BB, jB) {
        if (!this[mB].hasFilteredFields) return;
        if ("string" === typeof this[yB]) return;
        const zB = this.tmpItems,
          QB = zB.length;
        if (void 0 !== jB)
          for (; BB < QB && zB[BB] === jB[BB];) BB++;
        for (let nB = BB; nB < QB; nB++) zB[nB]?.[mB]?.setParentIndex(this, nB)
      }
      $changeAt(BB, jB) {
        if (void 0 === jB || null === jB) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[BB] === jB) return;
        const zB = void 0 !== this.items[BB] ? "object" === typeof jB ? nB.DELETE_AND_ADD : nB.REPLACE : nB.ADD,
          QB = this.$wireIndex(BB),
          dB = this[mB];
        return dB.change(QB, zB), jB[mB]?.setParent(this, dB.root, QB), QB
      }
      $deleteAt(BB, jB) {
        this[mB].delete(this.$wireIndex(BB), jB)
      }
      $setAt(BB, jB, zB) {
        zB === nB.ADD && void 0 !== this.items[BB] ? this.items.splice(BB, 0, jB) : zB === nB.DELETE_AND_MOVE ? (this.items.splice(BB, 1), this.items[BB] = jB) : (BB > this.items.length && (this._needsCompaction = !0), this.items[BB] = jB)
      }
      clear() {
        const BB = this[kB];
        if (0 === BB.items.length) return;
        const jB = BB[mB];
        jB.forEachChild(((BB, zB) => {
          jB.root?.remove(BB)
        })), jB.discard(), jB.operation(nB.CLEAR), BB.items.length = 0, BB.tmpItems.length = 0
      } [LB]() {
        const BB = this[kB] ?? this,
          jB = BB[mB];
        if (jB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const zB = BB.items;
        for (let QB = 0; QB < zB.length; QB++) zB[QB]?.[LB]?.();
        BB.items.length = 0, BB.tmpItems.length = 0, BB.deletedIndexes.length = 0, jB.recycle(), BB[NB] = void 0
      }
      concat() {
        return new zQ(...this.items.concat(...arguments))
      }
      join(BB) {
        return this.items.join(BB)
      }
      reverse() {
        const BB = this[kB],
          jB = BB[mB];
        if (jB.has() || BB.deletedIndexes.length > 0) {
          const jB = BB.items.slice().reverse();
          return this.clear(), this.push(...jB), this
        }
        return jB.operation(nB.REVERSE), BB.items.reverse(), BB.tmpItems.reverse(), BB.$reindexChildren(0), this
      }
      shift() {
        const BB = this[kB],
          jB = BB.items;
        if (0 === jB.length) return;
        const zB = BB[mB],
          QB = BB.deletedIndexes;
        let dB = 0;
        for (; !0 === QB[dB];) dB++;
        const IB = BB.$isUnsentAdd(dB);
        return zB.delete(dB, nB.DELETE), IB ? BB.$cancelAdd(dB) : QB[dB] = !0, jB.shift()
      }
      slice(BB, jB) {
        const zB = new zQ;
        return zB.push(...this.items.slice(BB, jB)), zB
      }
      sort() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BQ;
        const jB = this[kB];
        jB.isMovingItems = !0;
        const zB = jB[mB];
        return jB.items.sort(BB).forEach(((BB, jB) => zB.change(jB, nB.REPLACE))), jB.tmpItems.sort(BB), jB.$reindexChildren(0), jB.isMovingItems = !1, this
      }
      splice(BB, jB) {
        const zB = this[kB],
          QB = zB[mB],
          dB = zB.items,
          IB = zB.tmpItems,
          NB = zB.deletedIndexes,
          uB = dB.length,
          UB = IB.length;
        for (var aB = arguments.length, pB = new Array(aB > 2 ? aB - 2 : 0), rB = 2; rB < aB; rB++) pB[rB - 2] = arguments[rB];
        const sB = pB.length,
          JB = [];
        for (let nB = 0; nB < UB; nB++) !0 !== NB[nB] && JB.push(nB);
        let yB;
        if (uB > BB) {
          void 0 === jB && (jB = uB - BB);
          for (let dB = BB; dB < BB + jB; dB++) {
            const BB = JB[dB],
              jB = zB.$isUnsentAdd(BB);
            QB.delete(BB, nB.DELETE), jB ? (yB ??= []).push(BB) : NB[BB] = !0
          }
        } else jB = 0;
        if (sB > 0) {
          const dB = JB[BB] ?? uB,
            UB = Math.min(sB, jB);
          for (let BB = 0; BB < UB; BB++) {
            const jB = dB + BB;
            let zB;
            const uB = void 0 !== yB ? yB.indexOf(jB) : -1; - 1 !== uB ? (yB.splice(uB, 1), zB = nB.ADD) : zB = NB[jB] ? nB.DELETE_AND_ADD : nB.ADD, QB.indexedOperation(jB, zB), IB[jB] = pB[BB], NB[jB] = !1, pB[BB][mB]?.setParent(this, QB.root, jB)
          }
          const aB = sB - UB;
          if (aB > 0) {
            const BB = dB + UB;
            QB.insertAt(BB, aB);
            for (let jB = 0; jB < aB; jB++) pB[UB + jB][mB]?.setParent(this, QB.root, BB + jB);
            NB.length > 0 && NB.splice(BB, 0, ...new Array(aB).fill(!1)), IB.splice(BB, 0, ...pB.slice(UB)), zB.$reindexChildren(BB + aB)
          }
        }
        if (void 0 !== yB && yB.length > 0) {
          for (let BB = yB.length - 1; BB >= 0; BB--) zB.$cancelAdd(yB[BB], !1);
          zB.$reindexChildren(yB[0])
        }
        return QB.root?.enqueueChangeTree(QB), dB.splice(BB, jB, ...pB)
      }
      unshift() {
        const BB = this[kB],
          jB = BB[mB];
        jB.unshift(arguments.length);
        for (let QB = 0; QB < arguments.length; QB++)(QB < 0 || arguments.length <= QB ? void 0 : arguments[QB])?.[mB]?.setParent(this, jB.root, QB);
        const zB = BB.deletedIndexes;
        return zB.length > 0 && zB.unshift(...new Array(arguments.length).fill(!1)), BB.tmpItems.unshift(...arguments), BB.$reindexChildren(arguments.length), BB.items.unshift(...arguments)
      }
      indexOf(BB, jB) {
        return this.items.indexOf(BB, jB)
      }
      lastIndexOf(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(BB, jB)
      }
      every(BB, jB) {
        return this.items.every(BB, jB)
      }
      some(BB, jB) {
        return this.items.some(BB, jB)
      }
      forEach(BB, jB) {
        return this.items.forEach(BB, jB)
      }
      map(BB, jB) {
        return this.items.map(BB, jB)
      }
      filter(BB, jB) {
        return this.items.filter(BB, jB)
      }
      reduce(BB, jB) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(BB, jB) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(BB, jB) {
        return this.items.find(BB, jB)
      }
      findIndex(BB, jB) {
        return this.items.findIndex(BB, jB)
      }
      fill(BB, jB, zB) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(BB, jB, zB) {
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
        return zQ
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
      includes(BB, jB) {
        return this.items.includes(BB, jB)
      }
      flatMap(BB, jB) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(BB) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(BB, jB) {
        const zB = this.items.slice();
        return BB < 0 && (BB += this.length), zB[BB] = jB, new zQ(...zB)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(BB) {
        return this.items.slice().sort(BB)
      }
      toSpliced(BB, jB) {
        for (var zB = arguments.length, QB = new Array(zB > 2 ? zB - 2 : 0), nB = 2; nB < zB; nB++) QB[nB - 2] = arguments[nB];
        const dB = this.items.slice();
        return dB.splice.apply(dB, arguments), dB
      }
      shuffle() {
        return this.move((BB => {
          let jB = this.items.length;
          for (; 0 != jB;) {
            let BB = Math.floor(Math.random() * jB);
            jB--, [this[jB], this[BB]] = [this[BB], this[jB]]
          }
        }))
      }
      move(BB) {
        return this.isMovingItems = !0, BB(this), this.isMovingItems = !1, this
      } [rB](BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = this[kB] ?? this;
        return jB || zB.deletedIndexes[BB] ? zB.items[BB] : zB.tmpItems[BB] || zB.items[BB]
      } [sB](BB) {
        const jB = this[kB] ?? this;
        jB.items[BB] = void 0, jB._needsCompaction = !0
      } [GB]() {
        const BB = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, BB), this.deletedIndexes.length = 0)
      } [gB]() {
        const BB = this[kB] ?? this;
        BB._needsCompaction && (BB._needsCompaction = !1, BB.items = BB.items.filter((BB => void 0 !== BB)))
      } [JB](BB, jB, zB) {
        const QB = this[kB] ?? this,
          nB = QB.items;
        let dB = !1;
        for (let IB = 0; IB < nB.length; IB++) {
          const NB = nB[IB];
          BB.has(IB) ? zB(NB) : (dB = !0, jB(NB, IB), QB[sB](IB))
        }
        dB && QB[gB]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((BB => "function" === typeof BB.toJSON ? BB.toJSON() : BB))
      }
      clone(BB) {
        let jB;
        return BB ? (jB = new zQ, jB.push(...this.items)) : jB = new zQ(...this.map((BB => BB[mB] ? BB.clone() : BB))), jB
      }
    }
    Sj("array", {
      constructor: zQ
    });
    class QQ {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(BB) {
        const jB = this.indexByKey[BB];
        return void 0 === jB ? void 0 : jB
      }
      assign(BB) {
        const jB = this.nextIndex++;
        return this.indexByKey[BB] = jB, this.keyByIndex.set(jB, BB), jB
      }
      snapshot(BB, jB) {
        (this.snapshots ??= new Map).set(BB, jB)
      }
      forgetSnapshot(BB) {
        this.snapshots?.delete(BB)
      }
      snapshotAt(BB) {
        return this.snapshots?.get(BB)
      }
      setIndex(BB, jB) {
        this.keyByIndex.set(BB, jB), this.indexByKey[jB] = BB
      }
      keyOf(BB) {
        return this.keyByIndex.get(BB)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [BB] of this.snapshots) {
            const jB = this.keyByIndex.get(BB);
            void 0 !== jB && (delete this.indexByKey[jB], this.keyByIndex.delete(BB))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class nQ {
      [mB];
      [NB];
      childType;
      [yB];
      $items = new Map;
      journal = new QQ;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= ij()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= ij()).priority = BB
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[UB] = hz;
      static[aB] = bz;
      static COLLECTION_KIND = ez;
      static[pB](BB, jB, zB) {
        if (!zB || "string" === typeof BB[yB]) return !0;
        const QB = BB[rB](jB) ?? BB.journal.snapshotAt(jB);
        return zB.isChangeTreeVisible(QB[mB])
      }
      static is(BB) {
        return void 0 !== BB.map
      }
      constructor(BB) {
        if (Object.defineProperty(this, mB, {
            value: new Hz(this),
            enumerable: !1,
            writable: !0
          }), this[yB] = void 0, BB)
          if (BB instanceof Map || BB instanceof nQ) BB.forEach(((BB, jB) => this.set(jB, BB)));
          else
            for (const jB in BB) this.set(jB, BB[jB])
      }
      static initializeForDecoder() {
        const BB = Object.create(nQ.prototype);
        return BB.$items = new Map, BB.journal = new QQ, BB[yB] = void 0, Fz(BB), BB
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return nQ
      }
      set(BB, jB) {
        if (void 0 === jB || null === jB) throw new Error(`MapSchema#set('${BB}', ${jB}): trying to set ${jB} value on '${BB}'.`);
        "object" === typeof jB && this[yB] && Oz(jB, this[yB], this, BB), BB = BB.toString();
        const zB = this[mB],
          QB = void 0 !== jB[mB],
          dB = this.journal;
        let IB, NB = dB.indexOf(BB);
        if (void 0 !== NB) {
          IB = nB.REPLACE;
          const zB = this.$items.get(BB);
          if (zB === jB) return;
          QB && (IB = nB.DELETE_AND_ADD, void 0 !== zB && zB[mB].root?.remove(zB[mB])), void 0 !== dB.snapshotAt(NB) && dB.forgetSnapshot(NB)
        } else NB = dB.assign(BB), IB = nB.ADD;
        return this.$items.set(BB, jB), IB === nB.ADD && zB.isStreamCollection ? void 0 !== zB.root && fj(this, zB.root, NB) : zB.change(NB, IB), QB && jB[mB].setParent(this, zB.root, NB), this
      }
      get(BB) {
        return this.$items.get(BB)
      }
      getOrInsert(BB, jB) {
        return this.$items.has(BB) ? this.$items.get(BB) : (this.set(BB, jB), jB)
      }
      getOrInsertComputed(BB, jB) {
        if (this.$items.has(BB)) return this.$items.get(BB);
        const zB = jB(BB);
        return this.set(BB, zB), zB
      }
      delete(BB) {
        if (!this.$items.has(BB)) return !1;
        const jB = this.journal.indexOf(BB),
          zB = this.$items.get(BB),
          QB = this[mB];
        if (QB.isStreamCollection) {
          const nB = QB.root;
          let dB = !1;
          return void 0 !== nB && (dB = oj(this, nB, this[NB], jB)), void 0 !== zB?.[mB] && nB?.remove(zB[mB]), this.$items.delete(BB), dB || this.journal.snapshot(jB, zB), !0
        }
        return this.journal.snapshot(jB, zB), QB.delete(jB), this.$items.delete(BB)
      }
      clear() {
        const BB = this[mB];
        BB.discard(), BB.forEachChild(((jB, zB) => {
          BB.root?.remove(jB)
        })), this.journal.reset(), this.$items.clear(), BB.operation(nB.CLEAR)
      } [LB]() {
        const BB = this[mB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[LB]?.())), this.$items.clear(), this.journal.reset(), BB.recycle(), this[NB] = void 0
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
        this[mB].pause()
      }
      resumeTracking() {
        this[mB].resume()
      }
      untracked(BB) {
        return this[mB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[mB].paused
      }
      setIndex(BB, jB) {
        this.journal.setIndex(BB, jB)
      }
      getIndex(BB) {
        return this.journal.keyOf(BB)
      } [rB](BB) {
        const jB = this.journal.keyOf(BB);
        return void 0 !== jB ? this.$items.get(jB) : void 0
      } [sB](BB) {
        const jB = this.journal.keyOf(BB);
        void 0 !== jB && (this.$items.delete(jB), this.journal.keyByIndex.delete(BB))
      } [JB](BB, jB, zB) {
        let QB = null;
        if (this.$items.forEach(((nB, dB) => {
            BB.has(dB) ? zB(nB) : ((QB ??= new Set).add(dB), jB(nB, dB))
          })), null !== QB) {
          QB.forEach((BB => {
            this.$items.delete(BB), delete this.journal.indexByKey[BB]
          }));
          const BB = [];
          this.journal.keyByIndex.forEach(((jB, zB) => {
            QB.has(jB) && BB.push(zB)
          }));
          for (let jB = 0; jB < BB.length; jB++) this.journal.keyByIndex.delete(BB[jB])
        }
      } [GB]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(BB) {
        Yj(this, BB)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (BB => {
          let [jB, zB] = BB;
          return [jB, "function" === typeof zB.toJSON ? zB.toJSON() : zB]
        })))
      }
      clone(BB) {
        let jB;
        return BB ? jB = Object.assign(new nQ, this) : (jB = new nQ, this.forEach(((BB, zB) => {
          BB[mB] ? jB.set(zB, BB.clone()) : jB.set(zB, BB)
        }))), jB
      }
    }
    Sj("map", {
      constructor: nQ
    });
    class dQ {
      [mB];
      [NB];
      [yB];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= ij()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= ij()).priority = BB
      }
      static[UB] = Xz;
      static[aB] = bz;
      static COLLECTION_KIND = xz;
      static[pB](BB, jB, zB) {
        return !zB || "string" === typeof BB[yB] || zB.isChangeTreeVisible((BB[rB](jB) ?? BB.deletedItems[jB])[mB])
      }
      static is(BB) {
        return void 0 !== BB.collection
      }
      constructor(BB) {
        Object.defineProperty(this, mB, {
          value: new Hz(this),
          enumerable: !1,
          writable: !0
        }), this[yB] = void 0, BB && BB.forEach((BB => this.add(BB)))
      }
      static initializeForDecoder() {
        const BB = Object.create(dQ.prototype);
        return BB.$items = new Map, BB.deletedItems = {}, BB.$refId = 0, BB[yB] = void 0, Fz(BB), BB
      }
      add(BB) {
        const jB = this.$refId++,
          zB = this[mB];
        return this.$items.set(jB, BB), zB.isStreamCollection ? void 0 !== zB.root && fj(this, zB.root, jB) : zB.change(jB), void 0 !== BB[mB] && BB[mB].setParent(this, zB.root, jB), jB
      }
      at(BB) {
        const jB = Array.from(this.$items.keys())[BB];
        return this.$items.get(jB)
      }
      entries() {
        return this.$items.entries()
      }
      delete(BB) {
        const jB = this.$items.entries();
        let zB, QB;
        for (;
          (QB = jB.next()) && !QB.done;)
          if (BB === QB.value[1]) {
            zB = QB.value[0];
            break
          } if (void 0 === zB) return !1;
        const nB = this[mB];
        if (nB.isStreamCollection) {
          const BB = nB.root,
            jB = this.$items.get(zB);
          return void 0 !== BB && oj(this, BB, this[NB], zB), void 0 !== jB?.[mB] && BB?.remove(jB[mB]), this.deletedItems[zB] = jB, this.$items.delete(zB)
        }
        return this.deletedItems[zB] = nB.delete(zB), this.$items.delete(zB)
      }
      clear() {
        const BB = this[mB];
        BB.discard(), BB.forEachChild(((jB, zB) => {
          BB.root?.remove(jB)
        })), this.$items.clear(), BB.operation(nB.CLEAR)
      } [LB]() {
        const BB = this[mB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[LB]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, BB.recycle(), this[NB] = void 0
      }
      has(BB) {
        return Array.from(this.$items.values()).some((jB => jB === BB))
      }
      forEach(BB) {
        this.$items.forEach(((jB, zB, QB) => BB(jB, zB, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[mB].pause()
      }
      resumeTracking() {
        this[mB].resume()
      }
      untracked(BB) {
        return this[mB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[mB].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(BB, jB) {}
      getIndex(BB) {
        return BB
      } [rB](BB) {
        return this.$items.get(BB)
      } [sB](BB) {
        this.$items.delete(BB)
      } [JB](BB, jB, zB) {
        let QB = null;
        if (this.$items.forEach(((nB, dB) => {
            BB.has(dB) ? zB(nB) : ((QB ??= []).push(dB), jB(nB, dB))
          })), null !== QB)
          for (let nB = 0; nB < QB.length; nB++) this[sB](QB[nB])
      } [GB]() {
        for (const BB in this.deletedItems) delete this.deletedItems[BB]
      }
      _dropView(BB) {
        Yj(this, BB)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach(((jB, zB) => {
          BB.push("function" === typeof jB.toJSON ? jB.toJSON() : jB)
        })), BB
      }
      clone(BB) {
        let jB;
        return BB ? jB = Object.assign(new dQ, this) : (jB = new dQ, this.forEach((BB => {
          BB[mB] ? jB.add(BB.clone()) : jB.add(BB)
        }))), jB
      }
    }
    Sj("collection", {
      constructor: dQ
    });
    class IQ {
      [mB];
      [NB];
      [yB];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= ij()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= ij()).priority = BB
      }
      static[UB] = Xz;
      static[aB] = bz;
      static COLLECTION_KIND = wz;
      static[pB](BB, jB, zB) {
        return !zB || "string" === typeof BB[yB] || zB.isVisible((BB[rB](jB) ?? BB.deletedItems[jB])[mB])
      }
      static is(BB) {
        return void 0 !== BB.set
      }
      constructor(BB) {
        Object.defineProperty(this, mB, {
          value: new Hz(this),
          enumerable: !1,
          writable: !0
        }), this[yB] = void 0, BB && BB.forEach((BB => this.add(BB)))
      }
      static initializeForDecoder() {
        const BB = Object.create(IQ.prototype);
        return BB.$items = new Map, BB.deletedItems = {}, BB.$refId = 0, BB[yB] = void 0, Fz(BB), BB
      }
      add(BB) {
        if (this.has(BB)) return !1;
        const jB = this.$refId++,
          zB = this[mB];
        return this.$items.set(jB, BB), zB.isStreamCollection ? void 0 !== zB.root && fj(this, zB.root, jB) : zB.change(jB, nB.ADD), void 0 !== BB[mB] && BB[mB].setParent(this, zB.root, jB), jB
      }
      entries() {
        return this.$items.entries()
      }
      delete(BB) {
        const jB = this.$items.entries();
        let zB, QB;
        for (;
          (QB = jB.next()) && !QB.done;)
          if (BB === QB.value[1]) {
            zB = QB.value[0];
            break
          } if (void 0 === zB) return !1;
        const nB = this[mB];
        if (nB.isStreamCollection) {
          const BB = nB.root,
            jB = this.$items.get(zB);
          return void 0 !== BB && oj(this, BB, this[NB], zB), void 0 !== jB?.[mB] && BB?.remove(jB[mB]), this.deletedItems[zB] = jB, this.$items.delete(zB)
        }
        return this.deletedItems[zB] = nB.delete(zB), this.$items.delete(zB)
      }
      clear() {
        const BB = this[mB];
        BB.discard(), this.$items.clear(), BB.operation(nB.CLEAR)
      } [LB]() {
        const BB = this[mB];
        if (BB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((BB => BB?.[LB]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, BB.recycle(), this[NB] = void 0
      }
      has(BB) {
        const jB = this.$items.values();
        let zB, QB = !1;
        for (;
          (zB = jB.next()) && !zB.done;)
          if (BB === zB.value) {
            QB = !0;
            break
          } return QB
      }
      forEach(BB) {
        this.$items.forEach(((jB, zB, QB) => BB(jB, zB, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[mB].pause()
      }
      resumeTracking() {
        this[mB].resume()
      }
      untracked(BB) {
        return this[mB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[mB].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(BB, jB) {}
      getIndex(BB) {
        return BB
      } [rB](BB) {
        return this.$items.get(BB)
      } [sB](BB) {
        this.$items.delete(BB)
      } [JB](BB, jB, zB) {
        let QB = null;
        if (this.$items.forEach(((nB, dB) => {
            BB.has(dB) ? zB(nB) : ((QB ??= []).push(dB), jB(nB, dB))
          })), null !== QB)
          for (let nB = 0; nB < QB.length; nB++) this[sB](QB[nB])
      } [GB]() {
        for (const BB in this.deletedItems) delete this.deletedItems[BB]
      }
      _dropView(BB) {
        Yj(this, BB)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach(((jB, zB) => {
          BB.push("function" === typeof jB.toJSON ? jB.toJSON() : jB)
        })), BB
      }
      clone(BB) {
        let jB;
        return BB ? jB = Object.assign(new IQ, this) : (jB = new IQ, this.forEach((BB => {
          BB[mB] ? jB.add(BB.clone()) : jB.add(BB)
        }))), jB
      }
    }
    Sj("set", {
      constructor: IQ
    });
    class NQ {
      [mB];
      [NB];
      [yB];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(BB) {
        (this._stream ??= ij()).maxPerTick = BB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(BB) {
        (this._stream ??= ij()).priority = BB
      }
      static $isStream = !0;
      static[UB] = Xz;
      static[aB] = bz;
      static COLLECTION_KIND = Kz;
      static[pB](BB, jB, zB) {
        if (!zB) return !0;
        const QB = BB[rB](jB);
        return void 0 !== QB && zB.isVisible(QB[mB])
      }
      static is(BB) {
        return BB && void 0 !== BB.stream
      }
      constructor() {
        Object.defineProperty(this, mB, {
          value: new Hz(this),
          enumerable: !1,
          writable: !0
        }), this[yB] = void 0
      }
      static initializeForDecoder() {
        const BB = Object.create(NQ.prototype);
        return BB.$items = new Map, BB.$nextPosition = 0, BB._itemIndex = new Map, BB[yB] = void 0, Fz(BB), BB
      }
      add(BB) {
        if (this._itemIndex.has(BB)) return -1;
        const jB = this.$nextPosition++;
        this.$items.set(jB, BB), this._itemIndex.set(BB, jB);
        const zB = this[mB].root;
        return void 0 !== BB[mB] && BB[mB].setParent(this, zB, jB), void 0 !== zB && fj(this, zB, jB), jB
      }
      remove(BB) {
        const jB = this._itemIndex.get(BB);
        if (void 0 === jB) return !1;
        this._itemIndex.delete(BB), this.$items.delete(jB);
        const zB = this[mB].root;
        return void 0 !== zB && (oj(this, zB, this[NB], jB), void 0 !== BB[mB] && zB.remove(BB[mB])), !0
      }
      has(BB) {
        return this._itemIndex.has(BB)
      }
      clear() {
        const BB = this[mB].root;
        if (void 0 !== BB) {
          ! function(BB, jB, zB) {
            const QB = BB._stream;
            if (void 0 !== QB) {
              QB.broadcastPending.clear();
              for (const BB of QB.sentBroadcast) QB.broadcastDeletes.add(BB);
              QB.sentBroadcast.clear(), jB.forEachActiveView((BB => {
                QB.pendingByView.get(BB.id)?.clear();
                const jB = QB.sentByView.get(BB.id);
                if (void 0 !== jB && jB.size > 0) {
                  let QB = BB.changes.get(zB);
                  void 0 === QB && (QB = new Map, BB.changes.set(zB, QB));
                  for (const BB of jB) QB.set(BB, nB.DELETE);
                  jB.clear()
                }
              }))
            }
          }(this, BB, this[NB]);
          for (const jB of this.$items.values()) void 0 !== jB[mB] && BB.remove(jB[mB])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(BB) {
        for (const [jB, zB] of this.$items) BB(zB, jB, this)
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
      setIndex(BB, jB) {}
      getIndex(BB) {
        return BB
      } [rB](BB) {
        return this.$items.get(BB)
      } [sB](BB) {
        const jB = this.$items.get(BB);
        void 0 !== jB && (this._itemIndex.delete(jB), this.$items.delete(BB))
      } [JB]() {} [GB]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const BB = [];
        return this.forEach((jB => {
          BB.push("function" === typeof jB?.toJSON ? jB.toJSON() : jB)
        })), BB
      }
      clone(BB) {
        if (BB) {
          return Object.assign(new NQ, this)
        }
        const jB = new NQ;
        return jB.maxPerTick = this.maxPerTick, this.forEach((BB => {
          jB.add("function" === typeof BB?.clone ? BB.clone() : BB)
        })), jB
      }
      _dropView(BB) {
        Yj(this, BB)
      }
      _unregister() {}
    }
    Sj("stream", {
      constructor: NQ
    });
    class uQ {
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
        if (BB && "object" === typeof BB && void 0 !== BB.array) throw new Error(Ej);
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

    function UQ(BB) {
      return null != BB && !0 === BB[SB]
    }

    function aQ(BB) {
      return () => new uQ(BB)
    }

    function pQ(BB) {
      if (UQ(BB)) {
        const jB = BB._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof jB?`use the type name instead: t.array("${jB}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return BB
    }

    function rQ(BB) {
      return new uQ({
        quantized: hj(BB)
      })
    }
    const sQ = Object.freeze({
        string: aQ("string"),
        number: aQ("number"),
        boolean: aQ("boolean"),
        int8: aQ("int8"),
        uint8: aQ("uint8"),
        int16: aQ("int16"),
        uint16: aQ("uint16"),
        int32: aQ("int32"),
        uint32: aQ("uint32"),
        int64: aQ("int64"),
        uint64: aQ("uint64"),
        float32: aQ("float32"),
        float64: aQ("float64"),
        bigint64: aQ("bigint64"),
        biguint64: aQ("biguint64"),
        ref: BB => new uQ(BB),
        array: BB => new uQ({
          array: pQ(BB)
        }),
        map: BB => new uQ({
          map: pQ(BB)
        }),
        set: BB => new uQ({
          set: pQ(BB)
        }),
        collection: BB => new uQ({
          collection: pQ(BB)
        }),
        stream: BB => {
          const jB = new uQ({
            stream: pQ(BB)
          });
          return jB._stream = !0, jB
        },
        quantized: rQ,
        angle: BB => rQ({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: BB?.bits ?? 16
        })
      }),
      JQ = -1;

    function mQ(BB) {
      return Pj.register(BB), BB
    }

    function yQ() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JQ;
      return function(jB, zB) {
        const QB = Cj.initialize(jB.constructor);
        Cj.setTag(QB, zB, BB)
      }
    }

    function kQ(BB, jB) {
      const zB = Cj.initialize(BB.constructor);
      Cj.setUnreliable(zB, jB)
    }

    function GQ(BB, jB) {
      const zB = Cj.initialize(BB.constructor);
      Cj.setPatchOnly(zB, jB)
    }

    function LQ(BB, jB) {
      const zB = Cj.initialize(BB.constructor);
      Cj.setFullStateOnly(zB, jB)
    }

    function gQ(BB, jB) {
      return function(zB, QB) {
        const nB = zB.constructor;
        if (!BB) throw new Error(`${nB.name}: @type() reference provided for "${QB}" is undefined. Make sure you don't have any circular dependencies.`);
        BB = ej(BB, `${nB.name}.${QB}`), Pj.register(nB);
        const dB = Object.getPrototypeOf(nB)[Symbol.metadata],
          IB = Cj.initialize(nB);
        let NB = IB[QB];
        if (void 0 !== IB[NB]) {
          if (IB[NB].deprecated) return;
          if (void 0 !== IB[NB].type) {
            const BB = new Error(`@colyseus/schema: Duplicate '${QB}' definition on '${nB.name}'.\nCheck @type() annotation`);
            throw new Error(`${BB.message} ${BB.stack.split("\n")[4].trim()}`)
          }
        } else NB = IB[qB] ?? (dB && dB[qB]) ?? -1, NB++;
        if (jB && jB.manual) Cj.addField(IB, NB, QB, BB, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: jB,
            childType: zB
          } = Wj(BB);
          Cj.addField(IB, NB, QB, BB, SQ(QB, NB, zB, jB))
        }
        IB[MB][QB] && Object.defineProperty(zB, QB, IB[MB][QB]), ("string" === typeof BB || Xj(BB)) && (IB[iB] || Object.defineProperty(IB, iB, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), IB[iB][NB] = "string" === typeof BB ? jj[BB] : Tj(BB.quantized))
      }
    }
    const tQ = {
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

    function SQ(BB, jB, zB, QB) {
      let dB;
      return dB = QB ? function(BB, jB, zB, QB) {
        const dB = QB.constructor === zQ,
          IB = QB.constructor === nQ;
        return function(BB) {
          const QB = this[tB],
            NB = QB[jB];
          if (BB !== NB) {
            if (void 0 !== BB && null !== BB) {
              if (!dB || BB instanceof zQ)
                if (!IB || BB instanceof nQ) BB[yB] = zB;
                else {
                  const jB = new nQ;
                  if (jB[yB] = zB, BB instanceof Map) BB.forEach(((BB, zB) => jB.set(zB, BB)));
                  else
                    for (const zB in BB) jB.set(zB, BB[zB]);
                  BB = jB
                }
              else {
                const jB = new zQ;
                jB[yB] = zB, jB.push(...BB), BB = jB
              }
              const QB = this[mB],
                UB = this.constructor;
              void 0 !== NB && null !== NB && NB[mB] ? (QB.root?.remove(NB[mB]), UB[uB](QB, jB, nB.DELETE_AND_ADD)) : UB[uB](QB, jB, nB.ADD), BB[mB]?.setParent(this, QB.root, jB)
            } else void 0 !== NB && null !== NB && this[mB].delete(jB);
            QB[jB] = BB
          }
        }
      }(0, jB, zB, QB) : "string" === typeof zB ? function(BB, jB, zB) {
        const QB = tQ[zB],
          dB = "string" === zB,
          IB = "boolean" === zB;
        return function(zB) {
          const NB = this[tB],
            UB = NB[jB];
          if (zB !== UB) {
            if (void 0 !== zB && null !== zB) {
              if (!IB && void 0 !== QB && typeof zB !== QB && (!dB || null !== zB)) {
                const jB = zB && zB.constructor ? ` (${zB.constructor.name})` : "";
                throw new Rz(`a '${QB}' was expected, but '${JSON.stringify(zB)}'${jB} was provided in ${this.constructor.name}#${BB}`)
              }
              this.constructor[uB](this[mB], jB, nB.ADD)
            } else void 0 !== UB && null !== UB && this[mB].delete(jB);
            NB[jB] = zB
          }
        }
      }(BB, jB, zB) : Xj(zB) ? function(BB, jB, zB) {
        return function(QB) {
          const dB = this[tB],
            IB = dB[jB];
          if (void 0 !== QB && null !== QB) {
            if ("number" !== typeof QB) throw new Rz(`a 'number' was expected, but '${JSON.stringify(QB)}' was provided in ${this.constructor.name}#${BB}`);
            if ((QB = Aj(zB, Zj(zB, QB))) === IB) return;
            this.constructor[uB](this[mB], jB, nB.ADD)
          } else {
            if (QB === IB) return;
            void 0 !== IB && null !== IB && this[mB].delete(jB)
          }
          dB[jB] = QB
        }
      }(BB, jB, zB.quantized) : function(BB, jB, zB) {
        return function(QB) {
          const dB = this[tB],
            IB = dB[jB];
          if (QB !== IB) {
            if (void 0 !== QB && null !== QB) {
              Oz(QB, zB, this, BB);
              const dB = this[mB],
                NB = this.constructor;
              void 0 !== IB && null !== IB && IB[mB] ? (dB.root?.remove(IB[mB]), NB[uB](dB, jB, nB.DELETE_AND_ADD)) : NB[uB](dB, jB, nB.ADD), QB[mB]?.setParent(this, dB.root, jB)
            } else void 0 !== IB && null !== IB && this[mB].delete(jB);
            dB[jB] = QB
          }
        }
      }(BB, jB, zB), {
        get: function() {
          return this[tB][jB]
        },
        set: dB,
        enumerable: !0,
        configurable: !0
      }
    }

    function MQ() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(jB, zB) {
        const QB = Cj.initialize(jB.constructor);
        Cj.setDeprecated(QB, zB), BB && (QB[MB] ??= {}, QB[MB][zB] = {
          get: function() {
            throw new Error(`${zB} is deprecated.`)
          },
          set: function(BB) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(jB, zB, QB[MB][zB]))
      }
    }
    let EQ = !1;

    function iQ(BB, jB, zB) {
      EQ || (EQ = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let QB in jB) gQ(jB[QB], zB)(BB.prototype, QB);
      return BB
    }

    function qQ(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oQ;
      if (null == BB || "object" !== typeof BB) throw new Error(`schema(): first argument must be a fields object (got ${typeof BB}).`);
      const QB = {},
        nB = {},
        dB = {},
        IB = {},
        NB = (BB, jB) => {
          if (jB.hasDefault)((BB, jB) => {
            "function" === typeof jB ? IB[BB] = jB : jB && "function" === typeof jB.clone ? IB[BB] = () => jB.clone() : dB[BB] = jB
          })(BB, jB.default);
          else if (!jB.optional) {
            const zB = function(BB) {
              if (BB && "object" === typeof BB) {
                if (void 0 !== BB.array) return () => new zQ;
                if (void 0 !== BB.map) return () => new nQ;
                if (void 0 !== BB.set) return () => new IQ;
                if (void 0 !== BB.collection) return () => new dQ;
                if (void 0 !== BB.stream) return () => new NQ
              } else if ("function" === typeof BB && oQ.is(BB) && (!BB.prototype.initialize || 0 === BB.prototype.initialize.length)) return () => new BB
            }(jB.type);
            zB && (IB[BB] = zB)
          }
        },
        uB = {},
        UB = [],
        aB = [],
        pB = {},
        rB = [],
        sB = [],
        JB = {},
        mB = [];
      for (const tB in BB) {
        const zB = BB[tB],
          dB = `schema(${jB?`'${jB}'`:""}): field '${tB}'`;
        if (UQ(zB)) {
          const BB = zB.toDefinition();
          if (BB.noSync) {
            if (void 0 !== BB.view || BB.unreliable || BB.patchOnly || BB.fullStateOnly || BB.stream) throw new Error(`${dB} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            NB(tB, BB);
            continue
          }
          if (BB.patchOnly && BB.fullStateOnly) throw new Error(`${dB} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const jB = ej(BB.type, dB);
          if ("function" === typeof jB && !oQ.is(jB)) throw new Error(`${dB} is a synced ref to non-Schema class '${jB.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          QB[tB] = jB, void 0 !== BB.view && (uB[tB] = BB.view), BB.unreliable && UB.push(tB), BB.patchOnly && aB.push(tB), BB.deprecated && (pB[tB] = BB.deprecatedThrows), BB.fullStateOnly && rB.push(tB), BB.stream && sB.push(tB), void 0 !== BB.streamPriority && (JB[tB] = BB.streamPriority), BB.optional && mB.push(tB), NB(tB, BB)
        } else {
          if ("function" !== typeof zB) throw new Error(`${dB} must be a t.* builder, Schema subclass, or method (got ${typeof zB}).`);
          oQ.is(zB) ? (QB[tB] = zB, zB.prototype.initialize && 0 !== zB.prototype.initialize.length || (IB[tB] = () => new zB)) : nB[tB] = zB
        }
      }
      const yB = BB => {
          for (const jB in dB) BB[jB] = dB[jB];
          for (const jB in IB) BB[jB] = IB[jB]()
        },
        kB = () => {
          const BB = {};
          return yB(BB), BB
        },
        GB = "function" === typeof nB.initialize,
        LB = nB.initialize ?? zB._initialize,
        gB = class extends zB {
          constructor() {
            for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
            const nB = jB[0];
            void 0 === nB ? (super(), yB(this)) : super(Object.assign(kB(), GB ? (BB => {
              const jB = Object.keys(QB),
                zB = {};
              for (const QB in BB) jB.includes(QB) || (zB[QB] = BB[QB]);
              return zB
            })(nB) : nB)), LB && new.target === gB && LB.apply(this, jB)
          }
        };
      jB && Object.defineProperty(gB, "name", {
        value: jB
      }), Cj.setFields(gB, QB), gB._getDefaultValues = kB, gB._initialize = LB, Object.assign(gB.prototype, nB);
      for (const tB in uB) yQ(uB[tB])(gB.prototype, tB);
      for (const tB of UB) kQ(gB.prototype, tB);
      for (const tB of aB) GQ(gB.prototype, tB);
      for (const tB in pB) MQ(pB[tB])(gB.prototype, tB);
      if (rB.length > 0 || sB.length > 0) {
        const BB = gB[Symbol.metadata];
        for (const jB of rB) Cj.setFullStateOnly(BB, jB);
        for (const jB of sB) Cj.setStream(BB, jB);
        for (const jB in JB) Cj.setStreamPriority(BB, jB, JB[jB])
      }
      if (mB.length > 0) {
        const BB = gB[Symbol.metadata];
        for (const jB of mB) BB[BB[jB]].optional = !0
      }
      return gB.extend = (BB, jB) => qQ(BB, jB, gB), gB
    }

    function fQ(BB) {
      const jB = BB[mB].root,
        zB = {
          ops: {},
          refs: []
        };
      let QB = jB.changes.next;
      for (; QB;) {
        const BB = QB.changeTree;
        void 0 !== BB ? (zB.refs.push(`refId#${BB.ref[NB]}`), BB.forEach(((BB, jB) => {
          if (BB < 0 || !jB) return;
          const QB = nB[jB];
          zB.ops[QB] || (zB.ops[QB] = 0), zB.ops[QB]++
        })), QB = QB.next) : QB = QB.next
      }
      return zB
    }
    class oQ {
      static[UB] = Vz;
      static[aB] = cz;
      [NB];
      [tB];
      static initialize(BB) {
        Object.defineProperty(BB, mB, {
          value: new Hz(BB),
          enumerable: !1,
          writable: !0
        }), BB[tB] = []
      }
      static initializeForDecoder() {
        const BB = Object.create(this.prototype);
        return Fz(BB), BB[tB] = [], BB
      }
      static reset(BB) {
        const jB = BB?.[mB];
        if (void 0 === jB || "function" !== typeof jB.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== jB.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${BB.constructor.name}) with multiple parents.`);
        BB[LB]()
      } [LB]() {
        const BB = this.constructor[Symbol.metadata],
          jB = BB?.[fB] ?? [],
          zB = this[tB];
        for (let QB = 0; QB < jB.length; QB++) {
          const BB = zB[jB[QB]];
          BB?.[LB]?.()
        }
        this[mB].recycle(), this[NB] = void 0
      }
      static is(BB) {
        const jB = BB[Symbol.metadata];
        return "object" === typeof jB && null !== jB
      }
      static isSchema(BB) {
        return "function" === typeof BB?.assign
      }
      static[uB](BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nB.ADD;
        BB.change(jB, zB)
      }
      static[pB](BB, jB, zB) {
        const QB = BB.constructor[Symbol.metadata],
          nB = QB[jB]?.tag;
        return void 0 === zB ? void 0 === nB : void 0 === nB || (nB === JQ ? zB.isChangeTreeVisible(BB[mB]) : zB.hasTagOnTree(BB[mB], nB))
      }
      constructor(BB) {
        oQ.initialize(this), BB && oQ.assignProps(this, BB)
      }
      assign(BB) {
        return oQ.assignProps(this, BB), this
      }
      static assignProps(BB, jB) {
        const zB = BB.constructor[Symbol.metadata];
        if (zB && void 0 !== zB[qB])
          for (let nB = 0; nB <= zB[qB]; nB++) {
            const QB = zB[nB];
            if (!QB) continue;
            const dB = jB[QB.name];
            void 0 !== dB && (BB[QB.name] = dB)
          }
        const QB = Object.keys(jB);
        for (let nB = 0; nB < QB.length; nB++) {
          const dB = QB[nB];
          zB && void 0 !== zB[dB] || (BB[dB] = jB[dB])
        }
      }
      restore(BB) {
        const jB = this.constructor[Symbol.metadata];
        for (const zB in jB) {
          const QB = jB[zB],
            nB = QB.name,
            dB = QB.type,
            IB = BB[nB];
          if (void 0 !== IB && null !== IB)
            if ("string" === typeof dB) this[nB] = IB;
            else if (oQ.is(dB)) {
            const BB = new dB;
            BB.restore(IB), this[nB] = BB
          } else if ("object" === typeof dB) {
            const BB = Object.keys(dB)[0],
              jB = dB[BB];
            if ("map" === BB) {
              const BB = this[nB];
              for (const zB in IB)
                if (oQ.is(jB)) {
                  const QB = new jB;
                  QB.restore(IB[zB]), BB.set(zB, QB)
                } else BB.set(zB, IB[zB])
            } else if ("array" === BB) {
              const BB = this[nB];
              for (let zB = 0; zB < IB.length; zB++)
                if (oQ.is(jB)) {
                  const QB = new jB;
                  QB.restore(IB[zB]), BB.push(QB)
                } else BB.push(IB[zB])
            }
          }
        }
        return this
      }
      setDirty(BB, jB) {
        const zB = this.constructor[Symbol.metadata];
        this[mB].change(zB[zB[BB]].index, jB)
      }
      pauseTracking() {
        this[mB].pause()
      }
      resumeTracking() {
        this[mB].resume()
      }
      untracked(BB) {
        return this[mB].untracked(BB)
      }
      get isTrackingPaused() {
        return this[mB].paused
      }
      clone() {
        const BB = Object.create(this.constructor.prototype);
        oQ.initialize(BB);
        const jB = this.constructor[Symbol.metadata];
        for (const zB in jB) {
          const QB = jB[zB].name;
          "object" === typeof this[QB] && "function" === typeof this[QB]?.clone ? BB[QB] = this[QB].clone() : BB[QB] = this[QB]
        }
        return BB
      }
      toJSON() {
        const BB = {},
          jB = this.constructor[Symbol.metadata];
        for (const zB in jB) {
          const QB = jB[zB],
            nB = QB.name;
          QB.deprecated || null === this[nB] || "undefined" === typeof this[nB] || (BB[nB] = "function" === typeof this[nB].toJSON ? this[nB].toJSON() : this[nB])
        }
        return BB
      }
      discardAllChanges() {
        this[mB].discardAll()
      } [rB](BB) {
        return this[this.constructor[Symbol.metadata][BB].name]
      } [sB](BB) {
        this[this.constructor[Symbol.metadata][BB].name] = void 0
      }
      static debugRefIds(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 ? arguments[3] : void 0,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const dB = jB ? ` - ${JSON.stringify(BB.toJSON())}` : "",
          IB = BB[mB],
          uB = BB[NB],
          UB = QB ? QB.root.refCount[uB] : IB.refCount,
          aB = UB > 1 ? ` [\xd7${UB}]` : "";
        let pB = `${function(BB){return new Array(BB).fill(0).map(((jB,zB)=>zB===BB-1?"\u2514\u2500 ":"   ")).join("")}(zB)}${nB}${BB.constructor.name} (refId: ${uB})${aB}${dB}\n`;
        return IB.forEachChild(((nB, dB) => {
          let IB = dB;
          "number" === typeof dB && BB.$indexes && (IB = BB.$indexes.get(dB) ?? dB);
          const NB = void 0 !== BB.forEach && void 0 !== IB ? `["${IB}"]: ` : "";
          pB += this.debugRefIds(nB.ref, jB, zB + 1, QB, NB)
        })), pB
      }
      static debugRefIdEncodingOrder(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const zB = [],
          QB = BB[mB];
        if ("changes" === jB) {
          let BB = QB.root.changes?.next;
          for (; BB;) BB.changeTree && zB.push(BB.changeTree.ref[NB]), BB = BB.next;
          return zB
        }
        const nB = "allFilteredChanges" === jB,
          dB = new Set,
          IB = BB => {
            dB.has(BB) || (dB.add(BB), BB.isFiltered === nB && zB.push(BB.ref[NB]), BB.forEachChild(((BB, jB) => IB(BB))))
          };
        return IB(QB), zB
      }
      static debugRefIdsFromDecoder(BB) {
        return this.debugRefIds(BB.state, !1, 0, BB)
      }
      static debugChanges(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = BB[mB],
          QB = jB ? "allChanges" : "changes";
        let dB = `${BB.constructor.name} (${BB[NB]}) -> .${QB}:\n`;
        return jB ? zB.forEachLive((BB => {
          dB += `- [${BB}]: ADD (${JSON.stringify(zB.getValue(Number(BB),!0))})\n`
        })) : zB.forEach(((BB, jB) => {
          BB < 0 || !jB || (dB += `- [${BB}]: ${nB[jB]} (${JSON.stringify(zB.getValue(Number(BB),!1))})\n`)
        })), dB
      }
    }
    dB(oQ);
    const HQ = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class DQ {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const BB = {};
        for (const jB in this.changeTrees) BB[jB] = this.changeTrees[jB].refCount;
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
        this.types.hasFilters && (BB.flags & fz || (BB.flags |= fz, this.pendingFilterRefresh.push(BB)))
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
        const jB = BB.id;
        for (const zB of this.streamTrees) zB._dropView(jB)
      }
      forEachActiveView(BB) {
        for (const [jB, zB] of this.activeViews) {
          const QB = zB.deref();
          if (void 0 !== QB) BB(QB);
          else {
            this.activeViews.delete(jB);
            for (const BB of this.streamTrees) BB._dropView(jB)
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = BB, this.nextUniqueId = jB
      }
      add(BB) {
        const jB = BB.ref;
        void 0 === jB[NB] && (HQ.value = this.nextUniqueId++, Object.defineProperty(jB, NB, HQ));
        const zB = jB[NB],
          QB = void 0 === this.changeTrees[zB];
        QB && (this.changeTrees[zB] = BB), BB.needsRestage && (BB.needsRestage = !1, BB.forEachLiveWithCtx(BB, zz));
        const nB = QB ? 0 : BB.refCount;
        return BB.refCount = nB + 1, nB > 0 && this.enqueueFilterRefresh(BB), QB
      }
      remove(BB) {
        const jB = BB.refCount - 1;
        if (jB <= 0) {
          if (BB.root = void 0, delete this.changeTrees[BB.ref[NB]], BB.isStreamCollection) {
            const jB = BB.ref;
            jB._unregister?.(), this.unregisterStream(jB)
          }
          this.removeFromQueue(BB), this.removeFromUnreliableQueue(BB), BB.refCount = 0, BB.needsRestage = !0, BB.forEachChild(((jB, zB) => {
            jB.removeParent(BB.ref) && (void 0 === jB.parentRef || jB.refCount > 0 ? this.remove(jB) : this.moveNextToParent(jB))
          }))
        } else BB.refCount = jB, this.enqueueFilterRefresh(BB), this.recursivelyMoveNextToParent(BB);
        return jB
      }
      recursivelyMoveNextToParent(BB) {
        this.moveNextToParent(BB), BB.forEachChild(((BB, jB) => this.recursivelyMoveNextToParent(BB)))
      }
      moveNextToParent(BB) {
        BB.changesNode && this._moveNextToParentInList(this.changes, BB, BB.changesNode, "changesNode"), BB.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, BB, BB.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(BB, jB, zB, QB) {
        const nB = jB.parent;
        if (!nB || !nB[mB]) return;
        const dB = nB[mB][QB];
        dB && dB !== zB && (zB.position > dB.position || (zB.prev ? zB.prev.next = zB.next : BB.next = zB.next, zB.next ? zB.next.prev = zB.prev : BB.tail = zB.prev, zB.prev = BB.tail, zB.next = void 0, BB.tail.next = zB, BB.tail = zB, zB.position = BB.nextPosition++))
      }
      enqueueChangeTree(BB) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.changesNode) || (BB.changesNode = this._appendToList(this.changes, BB))
      }
      enqueueUnreliable(BB) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.unreliableChangesNode) || (BB.unreliableChangesNode = this._appendToList(this.unreliableChanges, BB))
      }
      _appendToList(BB, jB) {
        const zB = this._nodePool;
        let QB;
        return zB.length > 0 ? (QB = zB.pop(), QB.changeTree = jB, QB.next = void 0, QB.prev = void 0) : QB = {
          changeTree: jB,
          next: void 0,
          prev: void 0,
          position: 0
        }, BB.next ? (QB.prev = BB.tail, BB.tail.next = QB, BB.tail = QB) : (BB.nextPosition = 0, BB.next = QB, BB.tail = QB), QB.position = BB.nextPosition++, QB
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
      _removeNode(BB, jB, zB, QB) {
        return !(!zB || zB.changeTree !== jB) && (zB.prev ? zB.prev.next = zB.next : BB.next = zB.next, zB.next ? zB.next.prev = zB.prev : BB.tail = zB.prev, jB[QB] = void 0, this.releaseNode(zB), !0)
      }
    }

    function FQ(BB, jB) {
      if (-1 === jB || jB >= BB.length) return !1;
      const zB = BB.length - 1;
      for (let QB = jB; QB < zB; QB++) BB[QB] = BB[QB + 1];
      return BB.length = zB, !0
    }

    function YQ(BB, jB, zB) {
      const QB = ~zB,
        nB = BB.changeTrees;
      for (const dB in nB) {
        const BB = nB[dB],
          zB = BB.visibleViews;
        void 0 !== zB && jB < zB.length && (zB[jB] &= QB);
        const IB = BB.subscribedViews;
        void 0 !== IB && jB < IB.length && (IB[jB] &= QB);
        const NB = BB.tagViews;
        void 0 !== NB && NB.forEach((BB => {
          jB < BB.length && (BB[jB] &= QB)
        }))
      }
    }
    const VQ = new FinalizationRegistry((BB => {
      let {
        root: jB,
        id: zB,
        slot: QB,
        bit: nB
      } = BB;
      YQ(jB, QB, nB), jB.activeViews.delete(zB);
      for (const dB of jB.streamTrees) dB._dropView(zB);
      jB.releaseViewId(zB)
    }));

    function hQ(BB) {
      if (void 0 === BB) return "undefined";
      if (null === BB) return "null";
      const jB = typeof BB;
      return "string" === jB ? JSON.stringify(BB.length > 30 ? `${BB.slice(0,30)}\u2026` : BB) : "object" !== jB && "function" !== jB ? `${jB} ${String(BB)}` : Array.isArray(BB) ? `Array(${BB.length})` : BB.constructor?.name ?? "Object"
    }
    class XQ {
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
        void 0 === this._root && (this._root = BB, this.id = BB.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), BB.registerView(this), VQ.register(this, {
          root: BB,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), YQ(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), VQ.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(BB) {
        const jB = BB.visibleViews,
          zB = this._slot;
        return void 0 !== jB && zB < jB.length && 0 !== (jB[zB] & this._bit)
      }
      markVisible(BB) {
        const jB = this._slot;
        let zB = BB.visibleViews;
        for (void 0 === zB && (zB = BB.visibleViews = []); zB.length <= jB;) zB.push(0);
        zB[jB] |= this._bit
      }
      unmarkVisible(BB) {
        const jB = BB.visibleViews;
        if (void 0 === jB) return;
        const zB = this._slot;
        zB < jB.length && (jB[zB] &= ~this._bit)
      }
      isSubscribed(BB) {
        const jB = BB.subscribedViews,
          zB = this._slot;
        return void 0 !== jB && zB < jB.length && 0 !== (jB[zB] & this._bit)
      }
      _setSubscribed(BB) {
        const jB = this._slot;
        let zB = BB.subscribedViews;
        for (void 0 === zB && (zB = BB.subscribedViews = []); zB.length <= jB;) zB.push(0);
        zB[jB] |= this._bit
      }
      _clearSubscribed(BB) {
        const jB = BB.subscribedViews;
        if (void 0 === jB) return;
        const zB = this._slot;
        zB < jB.length && (jB[zB] &= ~this._bit)
      }
      hasTagOnTree(BB, jB) {
        const zB = BB.tagViews;
        if (void 0 === zB) return !1;
        const QB = this._slot,
          nB = this._bit;
        for (let dB = jB; 0 !== dB; dB &= dB - 1) {
          const BB = zB.get(dB & -dB);
          if (void 0 !== BB && QB < BB.length && 0 !== (BB[QB] & nB)) return !0
        }
        return !1
      }
      addTag(BB, jB) {
        if (jB === JQ) return;
        let zB = BB.tagViews;
        void 0 === zB && (zB = BB.tagViews = new Map);
        const QB = this._slot,
          nB = this._bit;
        for (let dB = jB; dB > 0; dB &= dB - 1) {
          const BB = dB & -dB;
          let jB = zB.get(BB);
          for (void 0 === jB && (jB = [], zB.set(BB, jB)); jB.length <= QB;) jB.push(0);
          jB[QB] |= nB
        }
      }
      removeTag(BB, jB) {
        if (jB === JQ) return;
        const zB = BB.tagViews;
        if (void 0 === zB) return;
        const QB = this._slot,
          nB = ~this._bit;
        for (let dB = jB; dB > 0; dB &= dB - 1) {
          const BB = zB.get(dB & -dB);
          void 0 !== BB && QB < BB.length && (BB[QB] &= nB)
        }
      }
      removeAllTagsOnTree(BB) {
        const jB = BB.tagViews;
        if (void 0 === jB) return;
        const zB = this._slot,
          QB = ~this._bit;
        jB.forEach((BB => {
          zB < BB.length && (BB[zB] &= QB)
        }))
      }
      add(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JQ,
          zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(BB, jB, zB, !1)
      }
      _addImmediate(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JQ;
        this._add(BB, jB, !0, !0)
      }
      _add(BB, jB, zB, QB) {
        const dB = BB?.[mB];
        if (!dB) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${hQ(BB)}`), !1;
        const IB = dB.parent;
        if (!IB && 0 !== BB[NB]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${dB.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== dB.root && this._bindRoot(dB.root);
        const uB = IB?.[mB];
        if (!QB && uB?.isStreamCollection) return Fj(IB, this.id, dB.parentIndex), !0;
        const UB = BB.constructor[Symbol.metadata],
          aB = this.isVisible(dB);
        if (!this.iterable || !zB || aB && -1 !== this.items.indexOf(BB) || this.items.push(BB), this.markVisible(dB), zB && IB && this.addParentOf(dB, jB), !QB && dB.isStreamCollection) return !0;
        if (jB === JQ && dB.isNew) return this._markSubtreeVisible(dB, jB), !1;
        let pB = this.changes.get(BB[NB]);
        void 0 === pB && (pB = new Map, this.changes.set(BB[NB], pB));
        let rB = !1;
        const sB = dB.encDescriptor.tags;
        if (dB.forEachChild(((BB, zB) => {
            const QB = sB[zB];
            if (void 0 !== QB) {
              if (!(QB === JQ || jB !== JQ && 0 !== (QB & jB))) return
            }
            this.add(BB.ref, jB, !1) && (rB = !0)
          })), jB !== JQ) {
          this.addTag(dB, jB);
          const BB = UB?.[HB];
          if (void 0 !== BB)
            for (let zB = jB; zB > 0; zB &= zB - 1) BB[zB & -zB]?.forEach((BB => {
              dB.getChange(BB) !== nB.DELETE && pB.set(BB, nB.ADD)
            }))
        }
        if ((jB === JQ || !aB) && (!dB.isNew || rB))
          if (dB.isArray && "string" !== typeof dB.refTarget[yB]) dB.refTarget.items.length > 0 && (pB.set(-1, nB.ADD), rB = !0);
          else {
            const BB = dB.encDescriptor.tags;
            dB.forEachLive((zB => {
              const QB = BB[zB];
              (void 0 === QB || QB === JQ || jB !== JQ && 0 !== (QB & jB)) && (pB.set(zB, nB.ADD), rB = !0)
            }))
          } return rB
      }
      _markSubtreeVisible(BB, jB) {
        const zB = BB.encDescriptor.tags;
        BB.forEachChild(((BB, QB) => {
          const nB = zB[QB];
          if (void 0 !== nB) {
            if (!(nB === JQ || jB !== JQ && 0 !== (nB & jB))) return
          }
          BB.isNew ? (this.markVisible(BB), this._markSubtreeVisible(BB, jB)) : this._add(BB.ref, jB, !1, !1)
        }))
      }
      addParentOf(BB, jB) {
        const zB = BB.parent[mB],
          QB = BB.parentIndex;
        this.isVisible(zB) || this.markVisible(zB);
        const dB = zB.parent?.[mB];
        if (dB && this.addParentOf(zB, jB), zB.hasFilteredFields && zB.getChange(QB) !== nB.DELETE) {
          let dB = this.changes.get(zB.ref[NB]);
          void 0 === dB && (dB = new Map, this.changes.set(zB.ref[NB], dB));
          const IB = zB.encDescriptor.tags[QB];
          void 0 !== IB && IB !== JQ && 0 !== (IB & jB) && this.addTag(zB, jB), dB.set(zB.isArray ? BB : QB, nB.ADD)
        }
      }
      _touchAncestorsOf(BB) {
        let jB = BB.parent?.[mB];
        if (void 0 === jB) return;
        const zB = [];
        for (; void 0 !== jB;) {
          if (jB.hasFilteredFields) {
            const BB = jB.ref[NB];
            if (this.changes.has(BB)) break;
            zB.push(jB)
          }
          jB = jB.parent?.[mB]
        }
        for (let QB = zB.length - 1; QB >= 0; QB--) this.changes.set(zB[QB].ref[NB], new Map)
      }
      remove(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JQ,
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = BB?.[mB];
        if (!QB) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${hQ(BB)}`), this;
        const dB = QB.parent?.[mB];
        if (dB?.isStreamCollection) return this.unmarkVisible(QB), this.iterable && !zB && FQ(this.items, this.items.indexOf(BB)),
          function(BB, jB, zB, QB, dB) {
            const IB = BB._stream;
            if (void 0 === IB) return !1;
            const NB = IB.pendingByView.get(jB);
            if (NB?.has(QB)) return NB.delete(QB), !1;
            const uB = IB.sentByView.get(jB);
            if (uB?.has(QB)) {
              uB.delete(QB);
              let BB = dB.get(zB);
              return void 0 === BB && (BB = new Map, dB.set(zB, BB)), BB.set(QB, nB.DELETE), !0
            }
          }(QB.parent, this.id, QB.parent[NB], QB.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(QB), this;
        if (QB.isStreamCollection) {
          this.unmarkVisible(QB), this.iterable && !zB && FQ(this.items, this.items.indexOf(BB));
          const jB = QB.ref,
            dB = jB._stream;
          if (void 0 !== dB) {
            dB.pendingByView.get(this.id)?.clear();
            const BB = dB.sentByView.get(this.id);
            if (void 0 !== BB && BB.size > 0) {
              const zB = jB[NB];
              let QB = this.changes.get(zB);
              void 0 === QB && (QB = new Map, this.changes.set(zB, QB));
              for (const jB of BB) QB.set(jB, nB.DELETE);
              BB.clear()
            }
          }
          return this
        }
        this.unmarkVisible(QB), this.iterable && !zB && FQ(this.items, this.items.indexOf(BB));
        const IB = QB.ref,
          uB = IB.constructor[Symbol.metadata],
          UB = IB[NB];
        this._touchAncestorsOf(QB);
        let aB = this.changes.get(UB);
        if (void 0 === aB && (aB = new Map, this.changes.set(UB, aB)), jB === JQ) {
          const BB = QB.parent;
          if (BB && !Cj.isValidInstance(BB) && QB.isFiltered) {
            const jB = dB.isArray ? QB : QB.parentIndex,
              zB = BB[NB];
            let IB = this.changes.get(zB);
            void 0 === IB ? (IB = new Map, this.changes.set(zB, IB)) : IB.get(jB) === nB.ADD && this._dropPendingEntries(QB), IB.set(jB, nB.DELETE), this._recursiveDeleteVisibleChangeTree(QB)
          } else uB?.[oB]?.forEach((BB => this._removeViewField(QB, aB, BB)))
        } else {
          const BB = uB?.[HB];
          if (void 0 !== BB)
            for (let zB = jB; zB > 0; zB &= zB - 1) BB[zB & -zB]?.forEach((BB => this._removeViewField(QB, aB, BB)))
        }
        return void 0 === jB ? this.removeAllTagsOnTree(QB) : this.removeTag(QB, jB), this
      }
      has(BB) {
        return this.isVisible(BB[mB])
      }
      hasTag(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JQ;
        return this.hasTagOnTree(BB[mB], jB)
      }
      subscribe(BB, jB) {
        const zB = BB?.[mB];
        if (!zB) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${hQ(BB)}`), this;
        if (void 0 === this._root && void 0 !== zB.root && this._bindRoot(zB.root), void 0 !== jB)
          if (zB.isStreamCollection) {
            const zB = qj(BB);
            null === jB ? zB.priorityByView?.delete(this.id) : (zB.priorityByView ??= new Map).set(this.id, jB)
          } else {
            const jB = BB?.constructor?.name ?? "collection",
              QB = zB.parent;
            if (void 0 === QB) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${jB} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const BB = QB?.constructor?.[Symbol.metadata]?.[zB.parentIndex]?.name,
                nB = BB ? `${QB.constructor.name}#${BB}` : jB;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${nB} is a ${jB}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(zB)) return this;
        const QB = void 0 !== zB.parent && !this.isVisible(zB);
        if (QB ? (this.addParentOf(zB, JQ), this._add(BB, JQ, !1, !1)) : this.markVisible(zB), this._setSubscribed(zB), zB.isStreamCollection) {
          const jB = BB;
          zB.forEachChild(((BB, zB) => {
            Fj(jB, this.id, zB)
          }))
        } else QB || zB.forEachChild((BB => {
          this.markVisible(BB)
        }));
        return this
      }
      unsubscribe(BB) {
        const jB = BB?.[mB];
        if (!jB) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${hQ(BB)}`), this;
        if (!this.isSubscribed(jB)) return this;
        this._clearSubscribed(jB);
        const zB = jB.ref[NB];
        if (jB.isStreamCollection) {
          const jB = BB._stream;
          if (void 0 !== jB) {
            jB.pendingByView.get(this.id)?.clear();
            const BB = jB.sentByView.get(this.id);
            if (void 0 !== BB && BB.size > 0) {
              let jB = this.changes.get(zB);
              void 0 === jB && (jB = new Map, this.changes.set(zB, jB));
              for (const zB of BB) jB.set(zB, nB.DELETE);
              BB.clear()
            }
          }
        } else {
          const BB = jB.isArray;
          let QB = this.changes.get(zB);
          jB.forEachChild(((jB, dB) => {
            void 0 === QB && (QB = new Map, this.changes.set(zB, QB)), QB.set(BB ? jB : dB, nB.DELETE), this.unmarkVisible(jB)
          }))
        }
        return this.unmarkVisible(jB), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let BB = 0, jB = this.items.length; BB < jB; BB++) this.remove(this.items[BB], JQ, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(BB) {
        let jB = this.isVisible(BB);
        if (!jB && BB.isVisibilitySharedWithParent)
          if (this.isVisible(BB.parent[mB])) this.markVisible(BB), jB = !0;
          else
            for (let zB = BB.extraParents; void 0 !== zB; zB = zB.next) {
              const QB = zB.ref[mB];
              if (QB.isFiltered && this.isVisible(QB)) {
                this.markVisible(BB), jB = !0;
                break
              }
            }
        return jB
      }
      _recursiveDeleteVisibleChangeTree(BB) {
        BB.forEachChild((BB => {
          this.unmarkVisible(BB), this._recursiveDeleteVisibleChangeTree(BB)
        }))
      }
      _dropPendingEntries(BB) {
        this.changes.delete(BB.ref[NB]), BB.forEachChild((BB => this._dropPendingEntries(BB)))
      }
      _removeViewField(BB, jB, zB) {
        const QB = jB.get(zB) === nB.ADD;
        jB.set(zB, nB.DELETE);
        const dB = BB.ref[BB.encDescriptor.names[zB]],
          IB = dB?.[mB];
        IB && (this.unmarkVisible(IB), this._recursiveDeleteVisibleChangeTree(IB), QB && this._dropPendingEntries(IB))
      }
    }

    function ZQ(BB) {
      BB.structSwitchEmitted || (BB.shouldEmitSwitch && (BB.buffer[BB.it.offset++] = 255, jj.number(BB.buffer, BB.ref[NB], BB.it)), BB.structSwitchEmitted = !0)
    }

    function AQ(BB, jB) {
      WQ(BB, jB, nB.ADD)
    }

    function TQ(BB, jB) {
      if (jB._fullSyncGen === BB.gen) return;
      jB._fullSyncGen = BB.gen;
      if (!BB.hasView || BB.view.isChangeTreeVisible(jB)) {
        const zB = jB.encDescriptor;
        BB.changeTree = jB, BB.ref = jB.ref, BB.encoder = zB.encoder, BB.filter = zB.filter, BB.metadata = zB.metadata, BB.treeIsFiltered = jB.isFiltered, BB.isSchema = zB.isSchema, BB.filterBitmask = zB.filterBitmask, BB.tags = zB.tags, BB.structSwitchEmitted = !1, BB.shouldEmitSwitch = BB.hasView || BB.it.offset > BB.initialOffset || jB !== BB.rootChangeTree, jB.isArray && jB.collDirty.size > 0 && (jB.flags |= 512), nz(jB, BB, AQ)
      }
      kz(jB, BB, PQ)
    }

    function PQ(BB, jB, zB) {
      TQ(BB, jB)
    }

    function WQ(BB, jB, zB) {
      if (jB < 0) {
        if (BB.treeIsFiltered !== BB.emitFiltered) return;
        return ZQ(BB), void(BB.buffer[BB.it.offset++] = 255 & Math.abs(jB))
      }
      if ((BB.isSchema ? BB.treeIsFiltered || (jB < 32 ? 0 !== (BB.filterBitmask & 1 << jB) : void 0 !== BB.tags[jB]) : BB.treeIsFiltered) !== BB.emitFiltered) return;
      const QB = BB.isEncodeAll ? nB.ADD : zB;
      void 0 !== QB && (void 0 === BB.filter || BB.filter(BB.ref, jB, BB.view)) && (ZQ(BB), BB.encoder(BB.self, BB.buffer, BB.changeTree, jB, QB, BB.it, BB.isEncodeAll, BB.hasView, BB.metadata))
    }

    function eQ(BB, jB) {
      const zB = new Uint8Array(BB.length + jB.length);
      return zB.set(BB, 0), zB.set(jB, BB.length), zB
    }
    class lQ {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(lQ.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(BB, jB) {
        this.context = Pj.cache(BB.constructor), this.root = jB ?? new DQ(this.context), this.setState(BB)
      }
      setState(BB) {
        this.state = BB, this.state[mB].setRoot(this.root)
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
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.offset;
        return this._encodeChannel(BB, jB, zB, QB, !1)
      }
      encodeUnreliable() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.offset;
        return this._encodeChannel(BB, jB, zB, QB, !0)
      }
      _encodeChannel(BB, jB, zB, QB, nB) {
        this.root.pendingFilterRefresh.length > 0 && Iz(this.root);
        const dB = void 0 !== jB,
          IB = this.state[mB],
          NB = this._encodeCtx;
        NB.self = this, NB.buffer = zB, NB.it = BB, NB.view = jB, NB.isEncodeAll = !1, NB.hasView = dB, NB.emitFiltered = dB;
        let uB = nB ? this.root.unreliableChanges : this.root.changes;
        for (; uB = uB.next;) {
          const zB = uB.changeTree;
          if (dB && !jB.isChangeTreeVisible(zB)) continue;
          const UB = nB ? zB.unreliableRecorder : zB;
          if (!UB || !UB.has()) continue;
          const aB = zB.encDescriptor;
          NB.changeTree = zB, NB.ref = zB.ref, NB.encoder = aB.encoder, NB.filter = aB.filter, NB.metadata = aB.metadata, NB.treeIsFiltered = zB.isFiltered, NB.isSchema = aB.isSchema, NB.filterBitmask = aB.filterBitmask, NB.tags = aB.tags, NB.structSwitchEmitted = !1, NB.isRootTree = zB === IB, NB.shouldEmitSwitch = dB || BB.offset > QB || !NB.isRootTree, UB.forEachWithCtx(NB, WQ)
        }
        return nB || dB || !this._isStreamBroadcastMode || this._emitStreamBroadcast(zB, BB), BB.offset > zB.byteLength ? (zB = this._resizeBuffer(zB, BB.offset), BB.offset = QB, this._encodeChannel(BB, jB, zB, QB, nB)) : zB.subarray(0, BB.offset)
      }
      encodeFullSync(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.offset;
        this.root.pendingFilterRefresh.length > 0 && Iz(this.root);
        const dB = void 0 !== QB,
          IB = this.state[mB],
          NB = this._encodeCtx;
        return NB.self = this, NB.buffer = jB, NB.it = BB, NB.view = QB, NB.isEncodeAll = !0, NB.hasView = dB, NB.emitFiltered = zB, NB.gen = ++this._fullSyncGen, NB.initialOffset = nB, NB.rootChangeTree = IB, TQ(NB, IB), BB.offset > jB.byteLength ? (jB = this._resizeBuffer(jB, BB.offset), BB.offset = nB, this.encodeFullSync(BB, jB, zB, QB, nB)) : jB.subarray(0, BB.offset)
      }
      _resizeBuffer(BB, jB) {
        const zB = Math.ceil(jB / lQ.BUFFER_SIZE) * lQ.BUFFER_SIZE,
          QB = new Uint8Array(zB);
        return QB.set(BB), BB === this.sharedBuffer && (this.sharedBuffer = QB), QB
      }
      encodeAll() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(BB, jB, !1)
      }
      encodeAllView(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const nB = zB.offset;
        return QB = this.encodeFullSync(zB, QB, !0, BB, nB), eQ(QB.subarray(0, jB), QB.subarray(nB, zB.offset))
      }
      ensureCapacity(BB, jB) {
        if (jB + lQ.BUFFER_SIZE <= BB.byteLength) return BB;
        const zB = Math.ceil((jB + lQ.BUFFER_SIZE) / lQ.BUFFER_SIZE) * lQ.BUFFER_SIZE,
          QB = new Uint8Array(zB);
        return QB.set(BB.subarray(0, jB)), BB === this.sharedBuffer && (this.sharedBuffer = QB), QB
      }
      encodeView(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          dB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const IB = zB.offset;
        this._emitStreamPriority(BB);
        for (const uB of BB.changes.keys()) {
          const jB = BB.changes.get(uB),
            dB = this.root.changeTrees[uB];
          if (void 0 === dB) {
            BB.changes.delete(uB);
            continue
          }
          if (0 === jB.size) continue;
          const IB = dB.encDescriptor,
            UB = IB.encoder,
            aB = IB.metadata,
            pB = dB.ref,
            sB = dB.refTarget;
          QB = this.ensureCapacity(QB, zB.offset), QB[zB.offset++] = 255, jj.number(QB, pB[NB], zB);
          for (const [uB, JB] of jB) {
            let jB;
            if (-1 === uB) {
              const BB = sB.tmpItems,
                jB = sB.deletedIndexes;
              for (let IB = 0; IB < BB.length; IB++) void 0 !== BB[IB] && !0 !== jB[IB] && UB(this, QB, dB, IB, nB.ADD, zB, !1, !0, aB);
              continue
            }
            if ("number" === typeof uB) jB = uB;
            else {
              const zB = uB.indexInParent(pB);
              if (void 0 === zB) continue;
              if (jB = zB, JB === nB.ADD && dB.getChange(jB) === nB.DELETE) {
                BB.changes.delete(uB.ref[NB]);
                continue
              }
            }
            UB(this, QB, dB, jB, void 0 !== sB[rB](jB) && JB || nB.DELETE, zB, !1, !0, aB)
          }
        }
        return BB.changes.clear(), QB = this.encode(zB, BB, QB), dB ? eQ(QB.subarray(0, jB), QB.subarray(IB, zB.offset)) : QB.subarray(IB, zB.offset)
      }
      encodeUnreliableView(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const nB = zB.offset;
        return QB = this.encodeUnreliable(zB, BB, QB, nB), eQ(QB.subarray(0, jB), QB.subarray(nB, zB.offset))
      }
      _emitStreamBroadcast(BB, jB) {
        const zB = this.root.streamTrees;
        for (const QB of zB) {
          const zB = QB,
            dB = zB[mB],
            IB = zB[NB];
          if (void 0 === IB) continue;
          const uB = zB._stream,
            UB = uB.broadcastDeletes,
            aB = uB.broadcastPending,
            pB = uB.sentBroadcast,
            sB = UB.size > 0,
            JB = aB.size > 0,
            yB = dB.encDescriptor,
            kB = yB.encoder,
            GB = yB.metadata;
          if (sB || JB) {
            if (BB[jB.offset++] = 255, jj.number(BB, IB, jB), sB) {
              for (const zB of UB) kB(this, BB, dB, zB, nB.DELETE, jB, !1, !1, GB);
              UB.clear()
            }
            const QB = uB.maxPerTick,
              JB = [];
            let yB = 0;
            const LB = [];
            for (const IB of aB) {
              if (yB >= QB) break;
              const NB = zB[rB](IB);
              void 0 !== NB ? (kB(this, BB, dB, IB, nB.ADD, jB, !1, !1, GB), pB.add(IB), JB.push(NB), LB.push(IB), yB++) : LB.push(IB)
            }
            for (const BB of LB) aB.delete(BB);
            for (const zB of JB) {
              const QB = zB[mB];
              if (void 0 === QB) continue;
              const dB = zB[NB];
              if (void 0 === dB) continue;
              BB[jB.offset++] = 255, jj.number(BB, dB, jB);
              const IB = QB.encDescriptor,
                uB = IB.encoder,
                UB = IB.metadata;
              QB.forEachLive((zB => {
                Cj.hasUnreliableAtIndex(UB, zB) || uB(this, BB, QB, zB, nB.ADD, jB, !1, !1, UB)
              }))
            }
          }
          for (const QB of pB) {
            const nB = zB[rB](QB);
            if (void 0 === nB) continue;
            const dB = nB[mB];
            if (void 0 === dB || !dB.has()) continue;
            const IB = nB[NB];
            if (void 0 === IB) continue;
            BB[jB.offset++] = 255, jj.number(BB, IB, jB);
            const uB = dB.encDescriptor,
              UB = uB.encoder,
              aB = uB.metadata;
            dB.forEach(((zB, QB) => {
              zB < 0 || Cj.hasUnreliableAtIndex(aB, zB) || UB(this, BB, dB, zB, QB, jB, !1, !1, aB)
            }))
          }
        }
      }
      _emitStreamPriority(BB) {
        const jB = this.root.streamTrees;
        if (0 === jB.size) return;
        const zB = BB.id;
        for (const QB of jB) {
          const jB = QB,
            dB = jB._stream,
            IB = dB.pendingByView.get(zB);
          if (void 0 === IB || 0 === IB.size) continue;
          const uB = dB.priorityByView?.get(zB),
            UB = void 0 !== uB,
            aB = dB.priority,
            pB = dB.maxPerTick,
            sB = [],
            JB = [];
          if (UB || void 0 !== aB) {
            const zB = [],
              QB = [];
            let nB = 0;
            for (const dB of IB) {
              const IB = jB[rB](dB);
              if (void 0 === IB) {
                JB.push(dB);
                continue
              }
              const NB = UB ? uB(IB) : aB(BB, IB);
              if (nB < pB) {
                let BB = nB++;
                for (; BB > 0 && QB[BB - 1] < NB;) QB[BB] = QB[BB - 1], zB[BB] = zB[BB - 1], BB--;
                QB[BB] = NB, zB[BB] = dB
              } else if (NB > QB[pB - 1]) {
                let BB = pB - 1;
                for (; BB > 0 && QB[BB - 1] < NB;) QB[BB] = QB[BB - 1], zB[BB] = zB[BB - 1], BB--;
                QB[BB] = NB, zB[BB] = dB
              }
            }
            for (let BB = 0; BB < nB; BB++) sB.push(zB[BB])
          } else
            for (const BB of IB) {
              if (sB.length >= pB) break;
              sB.push(BB)
            }
          for (const BB of JB) IB.delete(BB);
          const yB = sB.length;
          let kB = dB.sentByView.get(zB);
          void 0 === kB && (kB = new Set, dB.sentByView.set(zB, kB));
          for (let zB = 0; zB < yB; zB++) {
            const QB = sB[zB],
              dB = jB[rB](QB);
            if (void 0 === dB) {
              IB.delete(QB);
              continue
            }
            BB._addImmediate(dB);
            const uB = dB[mB];
            if (void 0 !== uB) {
              const jB = dB[NB];
              let zB = BB.changes.get(jB);
              void 0 === zB && (zB = new Map, BB.changes.set(jB, zB));
              const QB = uB.metadata;
              uB.forEachLive((BB => {
                Cj.hasUnreliableAtIndex(QB, BB) || zB.set(BB, nB.ADD)
              }))
            }
            IB.delete(QB), kB.add(QB)
          }
        }
      }
      discardChanges() {
        const BB = this.root.changes;
        let jB = BB.next;
        const zB = this.root;
        for (; jB;) {
          const BB = jB.next;
          jB.changeTree.endEncode(), zB.releaseNode(jB), jB = BB
        }
        BB.next = void 0, BB.tail = void 0
      }
      discardUnreliableChanges() {
        const BB = this.root.unreliableChanges;
        let jB = BB.next;
        const zB = this.root;
        for (; jB;) {
          const BB = jB.next;
          jB.changeTree.endEncodeUnreliable(), zB.releaseNode(jB), jB = BB
        }
        BB.next = void 0, BB.tail = void 0
      }
      tryEncodeTypeId(BB, jB, zB, QB) {
        const nB = this.context.getTypeId(jB),
          dB = this.context.getTypeId(zB);
        void 0 !== dB ? nB !== dB && (BB[QB.offset++] = 213, jj.number(BB, dB, QB)) : console.warn(`@colyseus/schema WARNING: Class "${zB.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const jB = 0 === BB.activeViews.size;
        for (const zB of BB.streamTrees)
          if (jB ? Dj(zB) : Hj(zB, BB)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class wQ extends Error {
      constructor(BB) {
        super(BB), this.name = "DecodingWarning"
      }
    }
    const xQ = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class KQ {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(BB, jB), void 0 === jB[NB] ? (xQ.value = BB, Object.defineProperty(jB, NB, xQ)) : jB[NB] !== BB && (jB[NB] = BB), zB && (this.refCount[BB] = (this.refCount[BB] || 0) + 1), this.deletedRefs.has(BB) && this.deletedRefs.delete(BB)
      }
      removeRef(BB) {
        const jB = this.refCount[BB];
        if (void 0 !== jB)
          if (0 !== jB)(this.refCount[BB] = jB - 1) <= 0 && this.deletedRefs.add(BB);
          else try {
            const jB = this.refs.get(BB);
            throw new wQ(`trying to remove refId '${BB}' with 0 refCount (${jB.constructor.name}: ${JSON.stringify(jB)})`)
          } catch (dn) {
            console.warn(dn)
          } else try {
            throw new wQ("trying to remove refId that doesn't exist: " + BB)
          } catch (dn) {
            console.warn(dn)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((BB => {
          if (this.refCount[BB] > 0) return;
          const jB = this.refs.get(BB),
            zB = jB.constructor[Symbol.metadata];
          if (null != zB)
            for (const QB in zB) {
              const BB = jB[zB[QB].name];
              if ("object" === typeof BB && BB) {
                const jB = BB[NB];
                void 0 === jB || this.deletedRefs.has(jB) || this.removeRef(jB)
              }
            } else "function" === typeof jB[yB] && Array.from(jB.values()).forEach((BB => {
              const jB = BB[NB];
              void 0 === jB || this.deletedRefs.has(jB) || this.removeRef(jB)
            }));
          this.refs.delete(BB), delete this.refCount[BB], delete this.callbacks[BB]
        })), this.deletedRefs.clear()
      }
      addCallback(BB, jB, zB) {
        if (void 0 === BB) {
          const BB = "number" === typeof jB ? nB[jB] : jB;
          throw new Error(`Can't addCallback on '${BB}' (refId is undefined)`)
        }
        return this.callbacks[BB] || (this.callbacks[BB] = {}), this.callbacks[BB][jB] || (this.callbacks[BB][jB] = []), this.callbacks[BB][jB].push(zB), () => this.removeCallback(BB, jB, zB)
      }
      removeCallback(BB, jB, zB) {
        const QB = this.callbacks?.[BB]?.[jB]?.indexOf(zB);
        void 0 !== QB && -1 !== QB && FQ(this.callbacks[BB][jB], QB)
      }
    }
    class CQ {
      context;
      state;
      root;
      currentRefId = 0;
      uF;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(BB, jB) {
        this.setState(BB), this.context = jB || new Pj(BB.constructor)
      }
      setState(BB) {
        this.state = BB, this.root = new KQ, this.root.addRef(0, BB)
      }
      decode(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const nB = void 0 !== this.uF ? [] : null,
          dB = this.root,
          IB = BB.byteLength;
        let NB = zB.constructor[aB];
        for (this.currentRefId = 0; jB.offset < IB;) {
          if (BB[jB.offset] == QB) {
            jB.offset++, zB[gB]?.();
            const QB = Lj.number(BB, jB),
              nB = dB.refs.get(QB);
            nB ? (zB = nB, NB = zB.constructor[aB], this.currentRefId = QB) : (console.error(`"refId" not found: ${QB}`, {
              previousRef: zB,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(BB, jB, IB));
            continue
          } - 1 !== NB(this, BB, jB, zB, nB) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(BB, jB, IB))
        }
        return zB[gB]?.(), null !== this.resyncVisited && function(BB, jB) {
          BB.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Pz(BB, BB.state, new Set, jB)
        }(this, nB), null !== nB && this.uF?.(nB), dB.garbageCollectDeletedRefs(), nB
      }
      decodeResync(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(BB, jB)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(BB, jB, zB) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const nB = {
          offset: jB.offset
        };
        for (; jB.offset < zB && (BB[jB.offset] !== QB || (nB.offset = jB.offset + 1, !this.root.refs.has(Lj.number(BB, nB))));) jB.offset++
      }
      getInstanceType(BB, jB, zB) {
        let QB;
        if (213 === BB[jB.offset]) {
          jB.offset++;
          const zB = Lj.number(BB, jB);
          QB = this.context.get(zB)
        }
        return QB || zB
      }
      createInstanceOfType(BB) {
        return BB.initializeForDecoder()
      }
      removeChildRefs(BB, jB) {
        const zB = "string" !== typeof BB[yB],
          QB = BB[NB];
        BB.forEach(((dB, IB) => {
          jB?.push({
            ref: BB,
            refId: QB,
            op: nB.DELETE,
            field: IB,
            value: void 0,
            previousValue: dB
          }), zB && this.root.removeRef(dB[NB])
        }))
      }
    }
    const cQ = qQ({
        min: sQ.float64(),
        max: sQ.float64(),
        bits: sQ.uint8(),
        mode: sQ.uint8()
      }, "QuantizedDescriptor"),
      bQ = qQ({
        name: sQ.string(),
        type: sQ.string(),
        referencedType: sQ.number(),
        childPrimitive: sQ.string(),
        quantized: sQ.ref(cQ).optional()
      }, "ReflectionField"),
      vQ = qQ({
        id: sQ.number(),
        extendsId: sQ.number(),
        fields: sQ.array(bQ)
      }, "ReflectionType"),
      RQ = qQ({
        types: sQ.array(vQ),
        rootType: sQ.number()
      }, "Reflection");

    function OQ(BB) {
      const jB = BB.root,
        zB = jB.callbacks,
        QB = new WeakMap;
      let dB;

      function IB(BB, zB) {
        let UB = zB.instance?.constructor[Symbol.metadata] || BB,
          aB = zB.instance && "function" === typeof zB.instance.forEach || BB && !oQ.is(BB);
        if (UB && !aB) {
          const BB = function(BB, nB, IB, uB) {
            return uB && void 0 !== zB.instance[nB] && !QB.has(dB) && IB(zB.instance[nB], void 0), jB.addCallback(BB[NB], nB, IB)
          };
          return new Proxy({
            listen: function(jB, nB) {
              let IB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (zB.instance) return BB(zB.instance, jB, nB, IB);
              {
                let NB = () => {};
                return zB.onInstanceAvailable(((zB, uB) => {
                  NB = BB(zB, jB, nB, IB && uB && !QB.has(dB))
                })), () => NB()
              }
            },
            onChange: function(BB) {
              return jB.addCallback(zB.instance[NB], nB.REPLACE, BB)
            },
            bindTo: function(BB, QB) {
              return QB || (QB = Object.keys(UB).map((BB => UB[BB].name))), jB.addCallback(zB.instance[NB], nB.REPLACE, (() => {
                QB.forEach((jB => BB[jB] = zB.instance[jB]))
              }))
            }
          }, {
            get(BB, jB) {
              const QB = UB[UB[jB]];
              if (QB) {
                const BB = zB.instance?.[jB],
                  nB = QB => {
                    const nB = uB(zB.instance).listen(jB, ((BB, jB) => {
                      QB(BB, !1), nB?.()
                    }), !1);
                    void 0 !== BB?.[NB] && QB(BB, !0)
                  };
                return IB(QB.type, {
                  instance: void 0 !== BB?.[NB] && BB,
                  parentInstance: zB.instance,
                  onInstanceAvailable: nB
                })
              }
              return BB[jB]
            },
            has: (BB, jB) => void 0 !== UB[jB],
            set(BB, jB, zB) {
              throw new Error("not allowed")
            },
            deleteProperty(BB, jB) {
              throw new Error("not allowed")
            }
          })
        } {
          const BB = function(BB, zB, IB) {
              return IB && BB.forEach(((BB, jB) => zB(BB, jB))), jB.addCallback(BB[NB], nB.ADD, ((BB, jB) => {
                QB.set(zB, !0), dB = zB, zB(BB, jB), QB.delete(zB), dB = void 0
              }))
            },
            IB = function(BB, zB) {
              return jB.addCallback(BB[NB], nB.DELETE, zB)
            },
            uB = function(BB, zB) {
              return jB.addCallback(BB[NB], nB.REPLACE, zB)
            };
          return new Proxy({
            xG: function(jB) {
              let nB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (zB.instance) return BB(zB.instance, jB, nB && !QB.has(dB));
              if (zB.onInstanceAvailable) {
                let IB = () => {};
                return zB.onInstanceAvailable(((zB, NB) => {
                  IB = BB(zB, jB, nB && NB && !QB.has(dB))
                })), () => IB()
              }
            },
            ZD: function(BB) {
              if (zB.instance) return IB(zB.instance, BB);
              if (zB.onInstanceAvailable) {
                let jB = () => {};
                return zB.onInstanceAvailable((zB => {
                  jB = IB(zB, BB)
                })), () => jB()
              }
            },
            onChange: function(BB) {
              if (zB.instance) return uB(zB.instance, BB);
              if (zB.onInstanceAvailable) {
                let jB = () => {};
                return zB.onInstanceAvailable((zB => {
                  jB = uB(zB, BB)
                })), () => jB()
              }
            }
          }, {
            get(BB, jB) {
              if (!BB[jB]) throw new Error(`Can't access '${jB}' through callback proxy. access the instance directly.`);
              return BB[jB]
            },
            has: (BB, jB) => void 0 !== BB[jB],
            set(BB, jB, zB) {
              throw new Error("not allowed")
            },
            deleteProperty(BB, jB) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function uB(BB) {
        return IB(void 0, {
          instance: BB
        })
      }
      return BB.uF = function(BB) {
        const jB = new Set;
        for (let QB = 0, dB = BB.length; QB < dB; QB++) {
          const dB = BB[QB],
            IB = dB.refId,
            uB = dB.ref,
            UB = zB[IB];
          if (UB) {
            if ((dB.op & nB.DELETE) === nB.DELETE && oQ.isSchema(dB.previousValue)) {
              const BB = zB[dB.previousValue[NB]]?.[nB.DELETE];
              for (let jB = BB?.length - 1; jB >= 0; jB--) BB[jB]()
            }
            if (oQ.isSchema(uB)) {
              if (!jB.has(IB)) {
                const BB = UB?.[nB.REPLACE];
                for (let jB = BB?.length - 1; jB >= 0; jB--) BB[jB]()
              }
              if (UB.hasOwnProperty(dB.field)) {
                const BB = UB[dB.field];
                for (let jB = BB?.length - 1; jB >= 0; jB--) BB[jB](dB.value, dB.previousValue)
              }
            } else {
              if ((dB.op & nB.DELETE) === nB.DELETE) {
                if (void 0 !== dB.previousValue) {
                  const BB = UB[nB.DELETE];
                  for (let jB = BB?.length - 1; jB >= 0; jB--) BB[jB](dB.previousValue, dB.dynamicIndex ?? dB.field)
                }
                if ((dB.op & nB.ADD) === nB.ADD) {
                  const BB = UB[nB.ADD];
                  for (let jB = BB?.length - 1; jB >= 0; jB--) BB[jB](dB.value, dB.dynamicIndex ?? dB.field)
                }
              } else if ((dB.op & nB.ADD) === nB.ADD && dB.previousValue !== dB.value) {
                const BB = UB[nB.ADD];
                for (let jB = BB?.length - 1; jB >= 0; jB--) BB[jB](dB.value, dB.dynamicIndex ?? dB.field)
              }
              if (dB.value !== dB.previousValue && (void 0 !== dB.value || void 0 !== dB.previousValue)) {
                const BB = UB[nB.REPLACE];
                for (let jB = BB?.length - 1; jB >= 0; jB--) BB[jB](dB.value, dB.dynamicIndex ?? dB.field)
              }
            }
            jB.add(IB)
          }
        }
      }, uB
    }

    function Bn(BB, jB) {
      BB.uF = jB
    }
    RQ.encode = function(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const zB = BB.context,
        QB = new RQ,
        nB = new lQ(QB),
        dB = zB.schemas.get(BB.state.constructor);
      dB > 0 && (QB.rootType = dB);
      const IB = new Set,
        NB = {},
        uB = BB => {
          if (void 0 === BB.extendsId || IB.has(BB.extendsId)) {
            IB.add(BB.id), QB.types.push(BB);
            const jB = NB[BB.id];
            void 0 !== jB && (delete NB[BB.id], jB.forEach((BB => uB(BB))))
          } else void 0 === NB[BB.extendsId] && (NB[BB.extendsId] = []), NB[BB.extendsId].push(BB)
        };
      zB.schemas.forEach(((BB, jB) => {
        const QB = new vQ;
        QB.id = Number(BB);
        const nB = Object.getPrototypeOf(jB);
        nB !== oQ && (QB.extendsId = zB.schemas.get(nB));
        const dB = jB[Symbol.metadata];
        if (dB !== nB[Symbol.metadata]) {
          const BB = dB[qB] ?? -1;
          for (let jB = 0; jB <= BB; jB++) {
            const BB = dB[jB];
            if (void 0 === BB) continue;
            const nB = BB.name;
            if (!Object.prototype.hasOwnProperty.call(dB, nB)) continue;
            const IB = new bQ;
            let NB;
            if (IB.name = nB, "string" === typeof BB.type) NB = BB.type;
            else if (Xj(BB.type)) {
              const jB = BB.type.quantized;
              NB = "quantized";
              const zB = new cQ;
              zB.min = jB.min, zB.max = jB.max, zB.bits = jB.bits, zB.mode = jB.wrap ? 1 : 0, IB.quantized = zB
            } else {
              let jB;
              oQ.is(BB.type) ? (NB = "ref", jB = BB.type) : (NB = Object.keys(BB.type)[0], "string" === typeof BB.type[NB] ? IB.childPrimitive = BB.type[NB] : jB = BB.type[NB]), IB.referencedType = jB ? zB.getTypeId(jB) : -1
            }
            IB.type = NB, QB.fields.push(IB)
          }
        }
        uB(QB)
      }));
      for (const UB in NB) NB[UB].forEach((BB => QB.types.push(BB)));
      return nB.encodeAll(jB).slice(0, jB.offset)
    }, RQ.decode = function(BB, jB) {
      const zB = new RQ;
      new CQ(zB).decode(BB, jB);
      const QB = new Pj;
      zB.types.forEach((BB => {
        const jB = QB.get(BB.extendsId) ?? oQ,
          zB = class extends jB {};
        Pj.register(zB), QB.add(zB, BB.id)
      }), {});
      zB.types.forEach((BB => {
        const jB = QB.get(BB.id),
          nB = Cj.initialize(jB),
          dB = [];
        let IB = BB;
        do {
          dB.push(IB), IB = zB.types.find((BB => BB.id === IB.extendsId))
        } while (IB);
        let NB = 0;
        dB.reverse().forEach((BB => {
          ((BB, jB, zB) => {
            jB.fields.forEach(((jB, nB) => {
              const dB = zB + nB;
              if (void 0 !== jB.quantized) {
                const zB = jB.quantized;
                Cj.addField(BB, dB, jB.name, {
                  quantized: hj({
                    min: zB.min,
                    max: zB.max,
                    bits: zB.bits,
                    mode: 1 === zB.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== jB.referencedType) {
                const zB = jB.type,
                  nB = QB.get(jB.referencedType) ?? jB.childPrimitive;
                "ref" === zB ? Cj.addField(BB, dB, jB.name, nB) : Cj.addField(BB, dB, jB.name, {
                  [zB]: nB
                })
              } else Cj.addField(BB, dB, jB.name, jB.type)
            }))
          })(nB, BB, NB), NB += BB.fields.length
        }))
      }));
      const nB = new(QB.get(zB.rootType || 0));
      return new CQ(nB, QB)
    }, RQ.makeEncodable = function(BB) {
      const jB = BB[Symbol.metadata];
      if (!jB) return BB;
      const zB = jB[qB];
      if (void 0 === zB) return BB;
      for (let QB = 0; QB <= zB; QB++) {
        const zB = jB[QB];
        zB && Cj.defineField(BB, jB, QB, zB.name, zB.type)
      }
      return Object.prototype.hasOwnProperty.call(BB, EB) && delete BB[EB], BB
    };
    class jn {
      GJ;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(BB) {
        this.GJ = BB, this.GJ.uF = this.uF.bind(this)
      }
      get callbacks() {
        return this.GJ.root.callbacks
      }
      get state() {
        return this.GJ.state
      }
      addCallback(BB, jB, zB) {
        return this.GJ.root.addCallback(BB, jB, zB)
      }
      addCallbackOrWaitCollectionAvailable(BB, jB, zB, QB) {
        let dB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          IB = () => {};
        const uB = () => IB(),
          UB = BB[jB];
        if (UB && void 0 !== UB[NB]) return dB = dB && !1 === this.isTriggering, zB === nB.ADD && dB && UB.forEach(((BB, jB) => {
          QB(BB, jB)
        })), this.addCallback(UB[NB], zB, QB);
        {
          let nB;
          return nB = this.addCallback(BB[NB], jB, ((BB, jB) => {
            null !== BB && void 0 !== BB && (nB(), IB = this.addCallback(BB[NB], zB, QB))
          })), IB = nB, uB
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(BB, jB, zB) {
        let QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        QB = QB && !1 === this.isTriggering;
        const nB = BB[jB];
        return QB && null !== nB && void 0 !== nB && zB(nB, void 0), this.addCallback(BB[NB], jB, zB)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const BB = arguments.length <= 0 ? void 0 : arguments[0],
            jB = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(BB[NB], nB.REPLACE, jB)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], nB.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], nB.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      xG() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], nB.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], nB.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      ZD() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], nB.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], nB.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(BB, jB, zB) {
        let QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const dB = BB.constructor[Symbol.metadata];
        zB || (zB = Object.keys(dB).filter((BB => !isNaN(Number(BB)))).map((BB => dB[BB].name)));
        const IB = () => {
          for (const QB of zB) {
            const zB = BB[QB];
            void 0 !== zB && (jB[QB] = zB)
          }
        };
        return QB && IB(), this.addCallback(BB[NB], nB.REPLACE, IB)
      }
      uF(BB) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let jB = 0, zB = BB.length; jB < zB; jB++) {
          const zB = BB[jB],
            QB = zB.refId,
            dB = zB.ref,
            IB = this.callbacks[QB];
          if (IB) {
            if ((zB.op & nB.DELETE) === nB.DELETE && oQ.isSchema(zB.previousValue)) {
              const BB = zB.previousValue[NB],
                jB = this.callbacks[BB]?.[nB.DELETE];
              if (jB)
                for (let zB = jB.length - 1; zB >= 0; zB--) try {
                  jB[zB]()
                } catch (dn) {
                  console.error(dn)
                }
            }
            if (oQ.isSchema(dB)) {
              if (!this.uniqueRefIds.has(QB)) {
                const BB = IB[nB.REPLACE];
                if (BB)
                  for (let jB = BB.length - 1; jB >= 0; jB--) try {
                    BB[jB]()
                  } catch (dn) {
                    console.error(dn)
                  }
              }
              const BB = IB[zB.field];
              if (BB)
                for (let jB = BB.length - 1; jB >= 0; jB--) try {
                  BB[jB](zB.value, zB.previousValue)
                } catch (dn) {
                  console.error(dn)
                }
            } else {
              const BB = zB.dynamicIndex ?? zB.field;
              if ((zB.op & nB.DELETE) === nB.DELETE) {
                if (void 0 !== zB.previousValue) {
                  const jB = IB[nB.DELETE];
                  if (jB)
                    for (let QB = jB.length - 1; QB >= 0; QB--) try {
                      jB[QB](zB.previousValue, BB)
                    } catch (dn) {
                      console.error(dn)
                    }
                }
                if ((zB.op & nB.ADD) === nB.ADD) {
                  const jB = IB[nB.ADD];
                  if (jB)
                    for (let QB = jB.length - 1; QB >= 0; QB--) try {
                      jB[QB](zB.value, BB)
                    } catch (dn) {
                      console.error(dn)
                    }
                }
              } else if ((zB.op & nB.ADD) === nB.ADD && zB.previousValue !== zB.value) {
                const jB = IB[nB.ADD];
                if (jB)
                  for (let QB = jB.length - 1; QB >= 0; QB--) try {
                    jB[QB](zB.value, BB)
                  } catch (dn) {
                    console.error(dn)
                  }
              }
              if (zB.value !== zB.previousValue) {
                const jB = IB[nB.REPLACE];
                if (jB)
                  for (let QB = jB.length - 1; QB >= 0; QB--) try {
                    jB[QB](BB, zB.value)
                  } catch (dn) {
                    console.error(dn)
                  }
              }
            }
            this.uniqueRefIds.add(QB)
          }
        }
        this.isTriggering = !1
      }
    }
    const zn = {
      get(BB) {
        if (BB instanceof CQ) return new jn(BB);
        if ("GJ" in BB.Rk) return new jn(BB.Rk.GJ);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(BB) {
        if (BB instanceof CQ) return OQ(BB);
        if ("GJ" in BB.Rk) return OQ(BB.Rk.GJ);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (BB, jB) => Bn(BB, jB)
    };
    class Qn {
      _free = [];
      _factory;
      _maxSize;
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = BB, this._maxSize = jB.maxSize ?? 1 / 0;
        const zB = jB.preallocate ?? 0;
        for (let QB = 0; QB < zB; QB++) this._free.push(BB())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(BB) {
        oQ.reset(BB), this._free.length < this._maxSize && this._free.push(BB)
      }
      get size() {
        return this._free.length
      }
    }

    function nn(BB) {
      return new Qn((() => new BB), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Sj("map", {
      constructor: nQ
    }), Sj("array", {
      constructor: zQ
    }), Sj("set", {
      constructor: IQ
    }), Sj("collection", {
      constructor: dQ
    })
  },
  9129: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      __addDisposableResource: () => XB,
      __assign: () => dB,
      __asyncDelegator: () => iB,
      __asyncGenerator: () => EB,
      __asyncValues: () => qB,
      __await: () => MB,
      __awaiter: () => JB,
      __classPrivateFieldGet: () => YB,
      __classPrivateFieldIn: () => hB,
      __classPrivateFieldSet: () => VB,
      __createBinding: () => yB,
      __decorate: () => NB,
      __disposeResources: () => AB,
      __esDecorate: () => UB,
      __exportStar: () => kB,
      __extends: () => nB,
      __generator: () => mB,
      __importDefault: () => FB,
      __importStar: () => DB,
      __makeTemplateObject: () => fB,
      __metadata: () => sB,
      __param: () => uB,
      __propKey: () => pB,
      __read: () => LB,
      __rest: () => IB,
      __rewriteRelativeImportExtension: () => TB,
      __runInitializers: () => aB,
      __setFunctionName: () => rB,
      __spread: () => gB,
      __spreadArray: () => SB,
      __spreadArrays: () => tB,
      __values: () => GB,
      default: () => PB
    });
    var QB = function(BB, jB) {
      return QB = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(BB, jB) {
        BB.__proto__ = jB
      } || function(BB, jB) {
        for (var zB in jB) Object.prototype.hasOwnProperty.call(jB, zB) && (BB[zB] = jB[zB])
      }, QB(BB, jB)
    };

    function nB(BB, jB) {
      if ("function" !== typeof jB && null !== jB) throw new TypeError("Class extends value " + String(jB) + " is not a constructor or null");

      function zB() {
        this.constructor = BB
      }
      QB(BB, jB), BB.prototype = null === jB ? Object.create(jB) : (zB.prototype = jB.prototype, new zB)
    }
    var dB = function() {
      return dB = Object.assign || function(BB) {
        for (var jB, zB = 1, QB = arguments.length; zB < QB; zB++)
          for (var nB in jB = arguments[zB]) Object.prototype.hasOwnProperty.call(jB, nB) && (BB[nB] = jB[nB]);
        return BB
      }, dB.apply(this, arguments)
    };

    function IB(BB, jB) {
      var zB = {};
      for (var QB in BB) Object.prototype.hasOwnProperty.call(BB, QB) && jB.indexOf(QB) < 0 && (zB[QB] = BB[QB]);
      if (null != BB && "function" === typeof Object.getOwnPropertySymbols) {
        var nB = 0;
        for (QB = Object.getOwnPropertySymbols(BB); nB < QB.length; nB++) jB.indexOf(QB[nB]) < 0 && Object.prototype.propertyIsEnumerable.call(BB, QB[nB]) && (zB[QB[nB]] = BB[QB[nB]])
      }
      return zB
    }

    function NB(BB, jB, zB, QB) {
      var nB, dB = arguments.length,
        IB = dB < 3 ? jB : null === QB ? QB = Object.getOwnPropertyDescriptor(jB, zB) : QB;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) IB = Reflect.decorate(BB, jB, zB, QB);
      else
        for (var NB = BB.length - 1; NB >= 0; NB--)(nB = BB[NB]) && (IB = (dB < 3 ? nB(IB) : dB > 3 ? nB(jB, zB, IB) : nB(jB, zB)) || IB);
      return dB > 3 && IB && Object.defineProperty(jB, zB, IB), IB
    }

    function uB(BB, jB) {
      return function(zB, QB) {
        jB(zB, QB, BB)
      }
    }

    function UB(BB, jB, zB, QB, nB, dB) {
      function IB(BB) {
        if (void 0 !== BB && "function" !== typeof BB) throw new TypeError("Function expected");
        return BB
      }
      for (var NB, uB = QB.kind, UB = "getter" === uB ? "get" : "setter" === uB ? "set" : "value", aB = !jB && BB ? QB.static ? BB : BB.prototype : null, pB = jB || (aB ? Object.getOwnPropertyDescriptor(aB, QB.name) : {}), rB = !1, sB = zB.length - 1; sB >= 0; sB--) {
        var JB = {};
        for (var mB in QB) JB[mB] = "access" === mB ? {} : QB[mB];
        for (var mB in QB.access) JB.access[mB] = QB.access[mB];
        JB.addInitializer = function(BB) {
          if (rB) throw new TypeError("Cannot add initializers after decoration has completed");
          dB.push(IB(BB || null))
        };
        var yB = (0, zB[sB])("accessor" === uB ? {
          get: pB.get,
          set: pB.set
        } : pB[UB], JB);
        if ("accessor" === uB) {
          if (void 0 === yB) continue;
          if (null === yB || "object" !== typeof yB) throw new TypeError("Object expected");
          (NB = IB(yB.get)) && (pB.get = NB), (NB = IB(yB.set)) && (pB.set = NB), (NB = IB(yB.init)) && nB.unshift(NB)
        } else(NB = IB(yB)) && ("field" === uB ? nB.unshift(NB) : pB[UB] = NB)
      }
      aB && Object.defineProperty(aB, QB.name, pB), rB = !0
    }

    function aB(BB, jB, zB) {
      for (var QB = arguments.length > 2, nB = 0; nB < jB.length; nB++) zB = QB ? jB[nB].call(BB, zB) : jB[nB].call(BB);
      return QB ? zB : void 0
    }

    function pB(BB) {
      return "symbol" === typeof BB ? BB : "".concat(BB)
    }

    function rB(BB, jB, zB) {
      return "symbol" === typeof jB && (jB = jB.description ? "[".concat(jB.description, "]") : ""), Object.defineProperty(BB, "name", {
        configurable: !0,
        value: zB ? "".concat(zB, " ", jB) : jB
      })
    }

    function sB(BB, jB) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(BB, jB)
    }

    function JB(BB, jB, zB, QB) {
      return new(zB || (zB = Promise))((function(nB, dB) {
        function IB(BB) {
          try {
            uB(QB.next(BB))
          } catch (jB) {
            dB(jB)
          }
        }

        function NB(BB) {
          try {
            uB(QB.throw(BB))
          } catch (jB) {
            dB(jB)
          }
        }

        function uB(BB) {
          var jB;
          BB.done ? nB(BB.value) : (jB = BB.value, jB instanceof zB ? jB : new zB((function(BB) {
            BB(jB)
          }))).then(IB, NB)
        }
        uB((QB = QB.apply(BB, jB || [])).next())
      }))
    }

    function mB(BB, jB) {
      var zB, QB, nB, dB = {
          label: 0,
          sent: function() {
            if (1 & nB[0]) throw nB[1];
            return nB[1]
          },
          trys: [],
          ops: []
        },
        IB = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return IB.next = NB(0), IB.throw = NB(1), IB.return = NB(2), "function" === typeof Symbol && (IB[Symbol.iterator] = function() {
        return this
      }), IB;

      function NB(NB) {
        return function(uB) {
          return function(NB) {
            if (zB) throw new TypeError("Generator is already executing.");
            for (; IB && (IB = 0, NB[0] && (dB = 0)), dB;) try {
              if (zB = 1, QB && (nB = 2 & NB[0] ? QB.return : NB[0] ? QB.throw || ((nB = QB.return) && nB.call(QB), 0) : QB.next) && !(nB = nB.call(QB, NB[1])).done) return nB;
              switch (QB = 0, nB && (NB = [2 & NB[0], nB.value]), NB[0]) {
                case 0:
                case 1:
                  nB = NB;
                  break;
                case 4:
                  return dB.label++, {
                    value: NB[1],
                    done: !1
                  };
                case 5:
                  dB.label++, QB = NB[1], NB = [0];
                  continue;
                case 7:
                  NB = dB.ops.pop(), dB.trys.pop();
                  continue;
                default:
                  if (!(nB = (nB = dB.trys).length > 0 && nB[nB.length - 1]) && (6 === NB[0] || 2 === NB[0])) {
                    dB = 0;
                    continue
                  }
                  if (3 === NB[0] && (!nB || NB[1] > nB[0] && NB[1] < nB[3])) {
                    dB.label = NB[1];
                    break
                  }
                  if (6 === NB[0] && dB.label < nB[1]) {
                    dB.label = nB[1], nB = NB;
                    break
                  }
                  if (nB && dB.label < nB[2]) {
                    dB.label = nB[2], dB.ops.push(NB);
                    break
                  }
                  nB[2] && dB.ops.pop(), dB.trys.pop();
                  continue
              }
              NB = jB.call(BB, dB)
            } catch (uB) {
              NB = [6, uB], QB = 0
            } finally {
              zB = nB = 0
            }
            if (5 & NB[0]) throw NB[1];
            return {
              value: NB[0] ? NB[1] : void 0,
              done: !0
            }
          }([NB, uB])
        }
      }
    }
    var yB = Object.create ? function(BB, jB, zB, QB) {
      void 0 === QB && (QB = zB);
      var nB = Object.getOwnPropertyDescriptor(jB, zB);
      nB && !("get" in nB ? !jB.__esModule : nB.writable || nB.configurable) || (nB = {
        enumerable: !0,
        get: function() {
          return jB[zB]
        }
      }), Object.defineProperty(BB, QB, nB)
    } : function(BB, jB, zB, QB) {
      void 0 === QB && (QB = zB), BB[QB] = jB[zB]
    };

    function kB(BB, jB) {
      for (var zB in BB) "default" === zB || Object.prototype.hasOwnProperty.call(jB, zB) || yB(jB, BB, zB)
    }

    function GB(BB) {
      var jB = "function" === typeof Symbol && Symbol.iterator,
        zB = jB && BB[jB],
        QB = 0;
      if (zB) return zB.call(BB);
      if (BB && "number" === typeof BB.length) return {
        next: function() {
          return BB && QB >= BB.length && (BB = void 0), {
            value: BB && BB[QB++],
            done: !BB
          }
        }
      };
      throw new TypeError(jB ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function LB(BB, jB) {
      var zB = "function" === typeof Symbol && BB[Symbol.iterator];
      if (!zB) return BB;
      var QB, nB, dB = zB.call(BB),
        IB = [];
      try {
        for (;
          (void 0 === jB || jB-- > 0) && !(QB = dB.next()).done;) IB.push(QB.value)
      } catch (NB) {
        nB = {
          error: NB
        }
      } finally {
        try {
          QB && !QB.done && (zB = dB.return) && zB.call(dB)
        } finally {
          if (nB) throw nB.error
        }
      }
      return IB
    }

    function gB() {
      for (var BB = [], jB = 0; jB < arguments.length; jB++) BB = BB.concat(LB(arguments[jB]));
      return BB
    }

    function tB() {
      for (var BB = 0, jB = 0, zB = arguments.length; jB < zB; jB++) BB += arguments[jB].length;
      var QB = Array(BB),
        nB = 0;
      for (jB = 0; jB < zB; jB++)
        for (var dB = arguments[jB], IB = 0, NB = dB.length; IB < NB; IB++, nB++) QB[nB] = dB[IB];
      return QB
    }

    function SB(BB, jB, zB) {
      if (zB || 2 === arguments.length)
        for (var QB, nB = 0, dB = jB.length; nB < dB; nB++) !QB && nB in jB || (QB || (QB = Array.prototype.slice.call(jB, 0, nB)), QB[nB] = jB[nB]);
      return BB.concat(QB || Array.prototype.slice.call(jB))
    }

    function MB(BB) {
      return this instanceof MB ? (this.v = BB, this) : new MB(BB)
    }

    function EB(BB, jB, zB) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var QB, nB = zB.apply(BB, jB || []),
        dB = [];
      return QB = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), IB("next"), IB("throw"), IB("return", (function(BB) {
        return function(jB) {
          return Promise.resolve(jB).then(BB, UB)
        }
      })), QB[Symbol.asyncIterator] = function() {
        return this
      }, QB;

      function IB(BB, jB) {
        nB[BB] && (QB[BB] = function(jB) {
          return new Promise((function(zB, QB) {
            dB.push([BB, jB, zB, QB]) > 1 || NB(BB, jB)
          }))
        }, jB && (QB[BB] = jB(QB[BB])))
      }

      function NB(BB, jB) {
        try {
          (zB = nB[BB](jB)).value instanceof MB ? Promise.resolve(zB.value.v).then(uB, UB) : aB(dB[0][2], zB)
        } catch (QB) {
          aB(dB[0][3], QB)
        }
        var zB
      }

      function uB(BB) {
        NB("next", BB)
      }

      function UB(BB) {
        NB("throw", BB)
      }

      function aB(BB, jB) {
        BB(jB), dB.shift(), dB.length && NB(dB[0][0], dB[0][1])
      }
    }

    function iB(BB) {
      var jB, zB;
      return jB = {}, QB("next"), QB("throw", (function(BB) {
        throw BB
      })), QB("return"), jB[Symbol.iterator] = function() {
        return this
      }, jB;

      function QB(QB, nB) {
        jB[QB] = BB[QB] ? function(jB) {
          return (zB = !zB) ? {
            value: MB(BB[QB](jB)),
            done: !1
          } : nB ? nB(jB) : jB
        } : nB
      }
    }

    function qB(BB) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var jB, zB = BB[Symbol.asyncIterator];
      return zB ? zB.call(BB) : (BB = GB(BB), jB = {}, QB("next"), QB("throw"), QB("return"), jB[Symbol.asyncIterator] = function() {
        return this
      }, jB);

      function QB(zB) {
        jB[zB] = BB[zB] && function(jB) {
          return new Promise((function(QB, nB) {
            (function(BB, jB, zB, QB) {
              Promise.resolve(QB).then((function(jB) {
                BB({
                  value: jB,
                  done: zB
                })
              }), jB)
            })(QB, nB, (jB = BB[zB](jB)).done, jB.value)
          }))
        }
      }
    }

    function fB(BB, jB) {
      return Object.defineProperty ? Object.defineProperty(BB, "raw", {
        value: jB
      }) : BB.raw = jB, BB
    }
    var oB = Object.create ? function(BB, jB) {
        Object.defineProperty(BB, "default", {
          enumerable: !0,
          value: jB
        })
      } : function(BB, jB) {
        BB.default = jB
      },
      HB = function(BB) {
        return HB = Object.getOwnPropertyNames || function(BB) {
          var jB = [];
          for (var zB in BB) Object.prototype.hasOwnProperty.call(BB, zB) && (jB[jB.length] = zB);
          return jB
        }, HB(BB)
      };

    function DB(BB) {
      if (BB && BB.__esModule) return BB;
      var jB = {};
      if (null != BB)
        for (var zB = HB(BB), QB = 0; QB < zB.length; QB++) "default" !== zB[QB] && yB(jB, BB, zB[QB]);
      return oB(jB, BB), jB
    }

    function FB(BB) {
      return BB && BB.__esModule ? BB : {
        default: BB
      }
    }

    function YB(BB, jB, zB, QB) {
      if ("a" === zB && !QB) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof jB ? BB !== jB || !QB : !jB.has(BB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === zB ? QB : "a" === zB ? QB.call(BB) : QB ? QB.value : jB.get(BB)
    }

    function VB(BB, jB, zB, QB, nB) {
      if ("m" === QB) throw new TypeError("Private method is not writable");
      if ("a" === QB && !nB) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof jB ? BB !== jB || !nB : !jB.has(BB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === QB ? nB.call(BB, zB) : nB ? nB.value = zB : jB.set(BB, zB), zB
    }

    function hB(BB, jB) {
      if (null === jB || "object" !== typeof jB && "function" !== typeof jB) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof BB ? jB === BB : BB.has(jB)
    }

    function XB(BB, jB, zB) {
      if (null !== jB && void 0 !== jB) {
        if ("object" !== typeof jB && "function" !== typeof jB) throw new TypeError("Object expected.");
        var QB, nB;
        if (zB) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          QB = jB[Symbol.asyncDispose]
        }
        if (void 0 === QB) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          QB = jB[Symbol.dispose], zB && (nB = QB)
        }
        if ("function" !== typeof QB) throw new TypeError("Object not disposable.");
        nB && (QB = function() {
          try {
            nB.call(this)
          } catch (BB) {
            return Promise.reject(BB)
          }
        }), BB.stack.push({
          value: jB,
          dispose: QB,
          async: zB
        })
      } else zB && BB.stack.push({
        async: !0
      });
      return jB
    }
    var ZB = "function" === typeof SuppressedError ? SuppressedError : function(BB, jB, zB) {
      var QB = new Error(zB);
      return QB.name = "SuppressedError", QB.error = BB, QB.suppressed = jB, QB
    };

    function AB(BB) {
      function jB(jB) {
        BB.error = BB.hasError ? new ZB(jB, BB.error, "An error was suppressed during disposal.") : jB, BB.hasError = !0
      }
      var zB, QB = 0;
      return function nB() {
        for (; zB = BB.stack.pop();) try {
          if (!zB.async && 1 === QB) return QB = 0, BB.stack.push(zB), Promise.resolve().then(nB);
          if (zB.dispose) {
            var dB = zB.dispose.call(zB.value);
            if (zB.async) return QB |= 2, Promise.resolve(dB).then(nB, (function(BB) {
              return jB(BB), nB()
            }))
          } else QB |= 1
        } catch (IB) {
          jB(IB)
        }
        if (1 === QB) return BB.hasError ? Promise.reject(BB.error) : Promise.resolve();
        if (BB.hasError) throw BB.error
      }()
    }

    function TB(BB, jB) {
      return "string" === typeof BB && /^\.\.?\//.test(BB) ? BB.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(BB, zB, QB, nB, dB) {
        return zB ? jB ? ".jsx" : ".js" : !QB || nB && dB ? QB + nB + "." + dB.toLowerCase() + "js" : BB
      })) : BB
    }
    const PB = {
      __extends: nB,
      __assign: dB,
      __rest: IB,
      __decorate: NB,
      __param: uB,
      __esDecorate: UB,
      __runInitializers: aB,
      __propKey: pB,
      __setFunctionName: rB,
      __metadata: sB,
      __awaiter: JB,
      __generator: mB,
      __createBinding: yB,
      __exportStar: kB,
      __values: GB,
      __read: LB,
      __spread: gB,
      __spreadArrays: tB,
      __spreadArray: SB,
      __await: MB,
      __asyncGenerator: EB,
      __asyncDelegator: iB,
      __asyncValues: qB,
      __makeTemplateObject: fB,
      __importStar: DB,
      __importDefault: FB,
      __classPrivateFieldGet: YB,
      __classPrivateFieldSet: VB,
      __classPrivateFieldIn: hB,
      __addDisposableResource: XB,
      __disposeResources: AB,
      __rewriteRelativeImportExtension: TB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);