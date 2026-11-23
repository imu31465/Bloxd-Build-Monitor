export const id = 185;
export const ids = [185];
export const modules = {
  9178: (CC, zC) => {
    zC.discordURLBuilder = function(CC) {
      var zC;
      const ZC = (null === (zC = null === window || void 0 === window ? void 0 : window.location) || void 0 === zC ? void 0 : zC.hostname) || "localhost",
        QC = CC.hostname.split("."),
        wC = !CC.hostname.includes("trycloudflare.com") && !CC.hostname.includes("discordsays.com") && QC.length > 2 ? `/${QC[0]}` : "";
      return CC.pathname.startsWith("/.proxy") ? `${CC.protocol}//${ZC}${wC}${CC.pathname}${CC.search}` : `${CC.protocol}//${ZC}/.proxy/colyseus${wC}${CC.pathname}${CC.search}`
    }
  },
  9165: (CC, zC, ZC) => {
    var QC, wC, bC, nC, fC = ZC(9079),
      oC = ZC(9170),
      qC = ZC(9127);
    QC = new WeakMap, wC = new WeakMap, bC = new WeakMap, nC = new WeakMap, zC.Auth = class {
      constructor(CC) {
        this.http = CC, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, QC.set(this, !1), wC.set(this, void 0), bC.set(this, void 0), nC.set(this, qC.createNanoEvents()), oC.getItem(this.settings.key, (CC => this.token = CC))
      }
      set token(CC) {
        this.http.authToken = CC
      }
      get token() {
        return this.http.authToken
      }
      onChange(CC) {
        const zC = fC.__classPrivateFieldGet(this, nC, "f").on("change", CC);
        return fC.__classPrivateFieldGet(this, QC, "f") || fC.__classPrivateFieldSet(this, wC, new Promise(((CC, zC) => {
          this.getUserData().then((CC => {
            this.emitChange(Object.assign(Object.assign({}, CC), {
              token: this.token
            }))
          })).catch((CC => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            CC()
          }))
        })), "f"), fC.__classPrivateFieldSet(this, QC, !0, "f"), zC
      }
      getUserData() {
        return fC.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(CC, zC, ZC) {
        return fC.__awaiter(this, void 0, void 0, (function*() {
          const QC = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: CC,
              password: zC,
              options: ZC
            }
          })).data;
          return this.emitChange(QC), QC
        }))
      }
      signInWithEmailAndPassword(CC, zC) {
        return fC.__awaiter(this, void 0, void 0, (function*() {
          const ZC = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: CC,
              password: zC
            }
          })).data;
          return this.emitChange(ZC), ZC
        }))
      }
      signInAnonymously(CC) {
        return fC.__awaiter(this, void 0, void 0, (function*() {
          const zC = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: CC
            }
          })).data;
          return this.emitChange(zC), zC
        }))
      }
      sendPasswordResetEmail(CC) {
        return fC.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: CC
            }
          })).data
        }))
      }
      signInWithProvider(CC) {
        return fC.__awaiter(this, arguments, void 0, (function*(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((ZC, QC) => {
            const wC = zC.width || 480,
              nC = zC.height || 768,
              oC = this.token ? `?token=${this.token}` : "",
              qC = `Login with ${CC[0].toUpperCase()+CC.substring(1)}`,
              FC = this.http.client.getHttpEndpoint(`${zC.prefix||`${this.settings.path}/provider`}/${CC}${oC}`),
              WC = screen.width / 2 - wC / 2,
              NC = screen.height / 2 - nC / 2;
            fC.__classPrivateFieldSet(this, bC, window.open(FC, qC, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + wC + ", height=" + nC + ", top=" + NC + ", left=" + WC), "f");
            const MC = CC => {
                void 0 === CC.data.user && void 0 === CC.data.token || (clearInterval(gC), fC.__classPrivateFieldGet(this, bC, "f").close(), fC.__classPrivateFieldSet(this, bC, void 0, "f"), window.removeEventListener("message", MC), void 0 !== CC.data.error ? QC(CC.data.error) : (ZC(CC.data), this.emitChange(CC.data)))
              },
              gC = setInterval((() => {
                fC.__classPrivateFieldGet(this, bC, "f") && !fC.__classPrivateFieldGet(this, bC, "f").closed || (fC.__classPrivateFieldSet(this, bC, void 0, "f"), QC("wZ"), window.removeEventListener("message", MC))
              }), 200);
            window.addEventListener("message", MC)
          }))
        }))
      }
      signOut() {
        return fC.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(CC) {
        void 0 !== CC.token && (this.token = CC.token, null === CC.token ? oC.removeItem(this.settings.key) : oC.setItem(this.settings.key, CC.token)), fC.__classPrivateFieldGet(this, nC, "f").emit("change", CC)
      }
    }
  },
  9071: (CC, zC, ZC) => {
    var QC, wC = ZC(9079),
      bC = ZC(9081),
      nC = ZC(9086),
      fC = ZC(9151),
      oC = ZC(9165),
      qC = ZC(9178);
    class FC extends Error {
      constructor(CC, zC) {
        super(CC), this.code = zC, this.name = "MatchMakeError", Object.setPrototypeOf(this, FC.prototype)
      }
    }
    const WC = "undefined" !== typeof window && "undefined" !== typeof(null === (QC = null === window || void 0 === window ? void 0 : window.location) || void 0 === QC ? void 0 : QC.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class NC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WC,
          zC = arguments.length > 1 ? arguments[1] : void 0;
        var ZC, QC;
        if ("string" === typeof CC) {
          const zC = CC.startsWith("/") ? new URL(CC, WC) : new URL(CC),
            ZC = "https:" === zC.protocol || "wss:" === zC.protocol,
            QC = Number(zC.port || (ZC ? 443 : 80));
          this.settings = {
            hostname: zC.hostname,
            pathname: zC.pathname,
            port: QC,
            secure: ZC,
            searchParams: zC.searchParams.toString() || void 0
          }
        } else void 0 === CC.port && (CC.port = CC.secure ? 443 : 80), void 0 === CC.pathname && (CC.pathname = ""), this.settings = CC;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new fC.HTTP(this, (null === zC || void 0 === zC ? void 0 : zC.headers) || {}), this.auth = new oC.Auth(this.http), this.urlBuilder = null === zC || void 0 === zC ? void 0 : zC.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (QC = null === (ZC = null === window || void 0 === window ? void 0 : window.location) || void 0 === ZC ? void 0 : ZC.hostname) || void 0 === QC ? void 0 : QC.includes("discordsays.com")) && (this.urlBuilder = qC.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(CC) {
        return wC.__awaiter(this, arguments, void 0, (function*(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZC = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", CC, zC, ZC)
        }))
      }
      create(CC) {
        return wC.__awaiter(this, arguments, void 0, (function*(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZC = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", CC, zC, ZC)
        }))
      }
      join(CC) {
        return wC.__awaiter(this, arguments, void 0, (function*(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZC = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", CC, zC, ZC)
        }))
      }
      joinById(CC) {
        return wC.__awaiter(this, arguments, void 0, (function*(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZC = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", CC, zC, ZC)
        }))
      }
      reconnect(CC, zC) {
        return wC.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof CC && "string" === typeof zC) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [ZC, QC] = CC.split(":");
          if (!ZC || !QC) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", ZC, {
            reconnectionToken: QC
          }, zC)
        }))
      }
      consumeSeatReservation(CC, zC, ZC) {
        return wC.__awaiter(this, void 0, void 0, (function*() {
          const QC = this.createRoom(CC.room.name, zC);
          QC.roomId = CC.room.roomId, QC.sessionId = CC.sessionId;
          const nC = {
            sessionId: QC.sessionId
          };
          CC.reconnectionToken && (nC.reconnectionToken = CC.reconnectionToken);
          const fC = ZC || QC;
          return QC.connect(this.buildEndpoint(CC.room, nC, CC.protocol), CC.devMode && (() => wC.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${QC.roomId}'...`);
            let ZC = 0;
            const bC = () => wC.__awaiter(this, void 0, void 0, (function*() {
              ZC++;
              try {
                yield this.consumeSeatReservation(CC, zC, fC), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${QC.roomId}'`)
              } catch (wC) {
                ZC < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${ZC} out of 8)`), setTimeout(bC, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(bC, 2e3)
          }))), fC, CC, this.http.headers), new Promise(((CC, zC) => {
            const ZC = (CC, ZC) => zC(new bC.ServerError(CC, ZC));
            fC.onError.once(ZC), fC.onJoin.once((() => {
              fC.onError.remove(ZC), setTimeout((() => {
                try {
                  const CC = [96, 98, 63, 61, 198, 165, 255, 148, 109, 255, 166, 172, 119, 97, 118, 161, 237, 220, 8, 144];
                  CC && fC.VK(128, new Uint8Array(CC))
                } catch {}
              }), 3e3), CC(fC)
            }))
          }))
        }))
      }
      createMatchMakeRequest(CC, zC) {
        return wC.__awaiter(this, arguments, void 0, (function*(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            QC = arguments.length > 3 ? arguments[3] : void 0,
            wC = arguments.length > 4 ? arguments[4] : void 0;
          const bC = (yield this.http.post(`matchmake/${CC}/${zC}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(ZC)
          })).data;
          if (bC.error) throw new FC(bC.error, bC.code);
          return "reconnect" === CC && (bC.reconnectionToken = ZC.reconnectionToken), yield this.consumeSeatReservation(bC, QC, wC)
        }))
      }
      createRoom(CC, zC) {
        return new nC.OW(CC, zC)
      }
      buildEndpoint(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          QC = this.settings.searchParams || "";
        this.http.authToken && (zC._authToken = this.http.authToken);
        for (const nC in zC) zC.hasOwnProperty(nC) && (QC += (QC ? "&" : "") + `${nC}=${zC[nC]}`);
        "h3" === ZC && (ZC = "http");
        let wC = this.settings.secure ? `${ZC}s://` : `${ZC}://`;
        CC.publicAddress ? wC += `${CC.publicAddress}` : wC += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const bC = `${wC}/${CC.processId}/${CC.roomId}?${QC}`;
        return this.urlBuilder ? this.urlBuilder(new URL(bC)) : bC
      }
      getHttpEndpoint() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const zC = CC.startsWith("/") ? CC : `/${CC}`;
        let ZC = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${zC}`;
        return this.settings.searchParams && (ZC += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(ZC)) : ZC
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    NC.VERSION = "0.16.22", zC.Client = NC, zC.MatchMakeError = FC
  },
  9090: (CC, zC, ZC) => {
    var QC = ZC(9098),
      wC = ZC(9106);
    zC.Connection = class {
      constructor(CC) {
        if (this.events = {}, "h3" === CC) this.transport = new QC.H3TransportTransport(this.events);
        else this.transport = new wC.WebSocketTransport(this.events)
      }
      connect(CC, zC) {
        this.transport.connect.call(this.transport, CC, zC)
      }
      send(CC) {
        this.transport.send(CC)
      }
      sendUnreliable(CC) {
        this.transport.sendUnreliable(CC)
      }
      close(CC, zC) {
        this.transport.close(CC, zC)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9151: (CC, zC, ZC) => {
    var QC = ZC(9081);

    function wC(CC) {
      var zC = Object.create(null);
      return CC && Object.keys(CC).forEach((function(ZC) {
        if ("default" !== ZC) {
          var QC = Object.getOwnPropertyDescriptor(CC, ZC);
          Object.defineProperty(zC, ZC, QC.get ? QC : {
            enumerable: !0,
            get: function() {
              return CC[ZC]
            }
          })
        }
      })), zC.default = CC, Object.freeze(zC)
    }
    var bC = wC(ZC(9158));
    zC.HTTP = class {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = CC, this.headers = zC
      }
      get(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", CC, zC)
      }
      post(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", CC, zC)
      }
      del(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", CC, zC)
      }
      put(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", CC, zC)
      }
      request(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return bC[CC](this.client.getHttpEndpoint(zC), this.getOptions(ZC)).catch((CC => {
          var zC;
          if (CC.aborted) throw new QC.AbortError("Request aborted");
          const ZC = CC.statusCode,
            wC = (null === (zC = CC.data) || void 0 === zC ? void 0 : zC.error) || CC.statusMessage || CC.message;
          if (!ZC && !wC) throw CC;
          throw new QC.ServerError(ZC, wC)
        }))
      }
      getOptions(CC) {
        return CC.headers = Object.assign({}, this.headers, CC.headers), this.authToken && (CC.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (CC.withCredentials = !0), CC
      }
    }
  },
  9111: (CC, zC) => {
    var ZC, QC;
    zC.Protocol = void 0, (ZC = zC.Protocol || (zC.Protocol = {}))[ZC.HANDSHAKE = 9] = "HANDSHAKE", ZC[ZC.JOIN_ROOM = 10] = "JOIN_ROOM", ZC[ZC.ERROR = 11] = "ERROR", ZC[ZC.LEAVE_ROOM = 12] = "LEAVE_ROOM", ZC[ZC.ROOM_DATA = 13] = "ROOM_DATA", ZC[ZC.ROOM_STATE = 14] = "ROOM_STATE", ZC[ZC.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", ZC[ZC.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", ZC[ZC.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", zC.ErrorCode = void 0, (QC = zC.ErrorCode || (zC.ErrorCode = {}))[QC.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", QC[QC.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", QC[QC.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", QC[QC.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", QC[QC.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", QC[QC.AUTH_FAILED = 4215] = "AUTH_FAILED", QC[QC.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9086: (CC, zC, ZC) => {
    var QC = ZC(9090),
      wC = ZC(9111),
      bC = ZC(9118),
      nC = ZC(9127),
      fC = ZC(9134),
      oC = ZC(9102),
      qC = ZC(9139),
      FC = ZC(9081),
      WC = ZC(9144);
    class NC {
      constructor(CC, zC) {
        this.onStateChange = fC.createSignal(), this.onError = fC.createSignal(), this.oR = fC.createSignal(), this.onJoin = fC.createSignal(), this.hasJoined = !1, this.onMessageHandlers = nC.createNanoEvents(), this.roomId = null, this.name = CC, this.packr = new WC.Packr, this.packr.encode(void 0), zC && (this.JG = new(bC.getSerializer("schema")), this.rootSchema = zC, this.JG.state = new zC), this.onError(((CC, zC) => {
          var ZC;
          return null === (ZC = console.warn) || void 0 === ZC ? void 0 : ZC.call(console, `colyseus.js - onError => (${CC}) ${zC}`)
        })), this.oR((() => this.xG()))
      }
      connect(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          wC = arguments.length > 3 ? arguments[3] : void 0,
          bC = arguments.length > 4 ? arguments[4] : void 0;
        const nC = new QC.Connection(wC.protocol);
        if (ZC.connection = nC, nC.events.onmessage = NC.prototype.onMessageCallback.bind(ZC), nC.events.onclose = function(CC) {
            var QC;
            if (!ZC.hasJoined) return null === (QC = console.warn) || void 0 === QC || QC.call(console, `Room connection was closed unexpectedly (${CC.code}): ${CC.reason}`), void ZC.onError.invoke(CC.code, CC.reason);
            CC.code === FC.CloseCode.DEVMODE_RESTART && zC ? zC() : (ZC.oR.invoke(CC.code, CC.reason), ZC.destroy())
          }, nC.events.onerror = function(CC) {
            var zC;
            null === (zC = console.warn) || void 0 === zC || zC.call(console, `Room, onError (${CC.code}): ${CC.reason}`), ZC.onError.invoke(CC.code, CC.reason)
          }, "h3" === wC.protocol) {
          const zC = new URL(CC);
          nC.connect(zC.origin, wC)
        } else nC.connect(CC, bC)
      }
      leave() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((zC => {
          this.oR((CC => zC(CC))), this.connection ? CC ? (this.packr.buffer[0] = wC.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.oR.invoke(FC.CloseCode.CONSENTED)
        }))
      }
      fR(CC, zC) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(CC), zC)
      }
      send(CC, zC) {
        const ZC = {
          offset: 1
        };
        this.packr.buffer[0] = wC.Protocol.ROOM_DATA, "string" === typeof CC ? oC.encode.string(this.packr.buffer, CC, ZC) : oC.encode.number(this.packr.buffer, CC, ZC), this.packr.position = 0;
        const QC = void 0 !== zC ? this.packr.pack(zC, 2048 + ZC.offset) : this.packr.buffer.subarray(0, ZC.offset);
        this.connection.send(QC)
      }
      sendUnreliable(CC, zC) {
        const ZC = {
          offset: 1
        };
        this.packr.buffer[0] = wC.Protocol.ROOM_DATA, "string" === typeof CC ? oC.encode.string(this.packr.buffer, CC, ZC) : oC.encode.number(this.packr.buffer, CC, ZC), this.packr.position = 0;
        const QC = void 0 !== zC ? this.packr.pack(zC, 2048 + ZC.offset) : this.packr.buffer.subarray(0, ZC.offset);
        this.connection.sendUnreliable(QC)
      }
      VK(CC, zC) {
        const ZC = {
          offset: 1
        };
        if (this.packr.buffer[0] = wC.Protocol.ROOM_DATA_BYTES, "string" === typeof CC ? oC.encode.string(this.packr.buffer, CC, ZC) : oC.encode.number(this.packr.buffer, CC, ZC), zC.byteLength + ZC.offset > this.packr.buffer.byteLength) {
          const CC = new Uint8Array(ZC.offset + zC.byteLength);
          CC.set(this.packr.buffer), this.packr.useBuffer(CC)
        }
        this.packr.buffer.set(zC, ZC.offset), this.connection.send(this.packr.buffer.subarray(0, ZC.offset + zC.byteLength))
      }
      get state() {
        return this.JG.getState()
      }
      xG() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.oR.clear(), this.onMessageHandlers.events = {}, this.JG instanceof qC.Qm && (this.JG.wg.root.callbacks = {})
      }
      onMessageCallback(CC) {
        const zC = new Uint8Array(CC.data),
          ZC = {
            offset: 1
          },
          QC = zC[0];
        if (QC === wC.Protocol.JOIN_ROOM) {
          const CC = oC.decode.utf8Read(zC, ZC, zC[ZC.offset++]);
          if (this.serializerId = oC.decode.utf8Read(zC, ZC, zC[ZC.offset++]), !this.JG) {
            const CC = bC.getSerializer(this.serializerId);
            this.JG = new CC
          }
          zC.byteLength > ZC.offset && this.JG.handshake && this.JG.handshake(zC, ZC), this.reconnectionToken = `${this.roomId}:${CC}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = wC.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (QC === wC.Protocol.ERROR) {
          const CC = oC.decode.number(zC, ZC),
            QC = oC.decode.string(zC, ZC);
          this.onError.invoke(CC, QC)
        } else if (QC === wC.Protocol.LEAVE_ROOM) this.leave();
        else if (QC === wC.Protocol.ROOM_STATE) this.JG.setState(zC, ZC), this.onStateChange.invoke(this.JG.getState());
        else if (QC === wC.Protocol.ROOM_STATE_PATCH) this.JG.patch(zC, ZC), this.onStateChange.invoke(this.JG.getState());
        else if (QC === wC.Protocol.ROOM_DATA) {
          const CC = oC.decode.stringCheck(zC, ZC) ? oC.decode.string(zC, ZC) : oC.decode.number(zC, ZC),
            QC = zC.byteLength > ZC.offset ? WC.unpack(zC, {
              start: ZC.offset
            }) : void 0;
          this.dispatchMessage(CC, QC)
        } else if (QC === wC.Protocol.ROOM_DATA_BYTES) {
          const CC = oC.decode.stringCheck(zC, ZC) ? oC.decode.string(zC, ZC) : oC.decode.number(zC, ZC);
          this.dispatchMessage(CC, zC.subarray(ZC.offset))
        }
      }
      dispatchMessage(CC, zC) {
        var ZC;
        const QC = this.getMessageHandlerKey(CC);
        this.onMessageHandlers.events[QC] ? this.onMessageHandlers.emit(QC, zC) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", CC, zC) : null === (ZC = console.warn) || void 0 === ZC || ZC.call(console, `colyseus.js: onMessage() not registered for type '${CC}'.`)
      }
      destroy() {
        this.JG && this.JG.teardown()
      }
      getMessageHandlerKey(CC) {
        switch (typeof CC) {
          case "string":
            return CC;
          case "number":
            return `i${CC}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    zC.OW = NC
  },
  9170: (CC, zC, ZC) => {
    var QC = ZC(9079);
    let wC;

    function bC() {
      if (!wC) try {
        wC = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (CC) {}
      return wC || "undefined" === typeof globalThis.indexedDB || (wC = new nC), wC || (wC = {
        cache: {},
        setItem: function(CC, zC) {
          this.cache[CC] = zC
        },
        getItem: function(CC) {
          this.cache[CC]
        },
        removeItem: function(CC) {
          delete this.cache[CC]
        }
      }), wC
    }
    class nC {
      constructor() {
        this.dbPromise = new Promise((CC => {
          const zC = indexedDB.open("_colyseus_storage", 1);
          zC.onupgradeneeded = () => zC.result.createObjectStore("store"), zC.onsuccess = () => CC(zC.result)
        }))
      }
      tx(CC, zC) {
        return QC.__awaiter(this, void 0, void 0, (function*() {
          const ZC = (yield this.dbPromise).transaction("store", CC).objectStore("store");
          return zC(ZC)
        }))
      }
      setItem(CC, zC) {
        return this.tx("readwrite", (ZC => ZC.put(zC, CC))).then()
      }
      getItem(CC) {
        return QC.__awaiter(this, void 0, void 0, (function*() {
          const zC = yield this.tx("readonly", (zC => zC.get(CC)));
          return new Promise((CC => {
            zC.onsuccess = () => CC(zC.result)
          }))
        }))
      }
      removeItem(CC) {
        return this.tx("readwrite", (zC => zC.delete(CC))).then()
      }
    }
    zC.getItem = function(CC, zC) {
      const ZC = bC().getItem(CC);
      "undefined" !== typeof Promise && ZC instanceof Promise ? ZC.then((CC => zC(CC))) : zC(ZC)
    }, zC.removeItem = function(CC) {
      bC().removeItem(CC)
    }, zC.setItem = function(CC, zC) {
      bC().setItem(CC, zC)
    }
  },
  9127: (CC, zC) => {
    zC.createNanoEvents = () => ({
      emit(CC) {
        let zC = this.events[CC] || [];
        for (var ZC = arguments.length, QC = new Array(ZC > 1 ? ZC - 1 : 0), wC = 1; wC < ZC; wC++) QC[wC - 1] = arguments[wC];
        for (let bC = 0, nC = zC.length; bC < nC; bC++) zC[bC](...QC)
      },
      events: {},
      on(CC, zC) {
        var ZC;
        return (null === (ZC = this.events[CC]) || void 0 === ZC ? void 0 : ZC.push(zC)) || (this.events[CC] = [zC]), () => {
          var ZC;
          this.events[CC] = null === (ZC = this.events[CC]) || void 0 === ZC ? void 0 : ZC.filter((CC => zC !== CC))
        }
      }
    })
  },
  9134: (CC, zC) => {
    class ZC {
      constructor() {
        this.handlers = []
      }
      register(CC) {
        return this.handlers.push(CC), this
      }
      invoke() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        this.handlers.forEach((CC => CC.apply(this, zC)))
      }
      invokeAsync() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        return Promise.all(this.handlers.map((CC => CC.apply(this, zC))))
      }
      remove(CC) {
        const zC = this.handlers.indexOf(CC);
        this.handlers[zC] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    zC.EventEmitter = ZC, zC.createSignal = function() {
      const CC = new ZC;

      function zC(zC) {
        return CC.register(zC, null === this)
      }
      return zC.once = zC => {
        const ZC = function() {
          for (var QC = arguments.length, wC = new Array(QC), bC = 0; bC < QC; bC++) wC[bC] = arguments[bC];
          zC.apply(this, wC), CC.remove(ZC)
        };
        CC.register(ZC)
      }, zC.remove = zC => CC.remove(zC), zC.invoke = function() {
        return CC.invoke(...arguments)
      }, zC.invokeAsync = function() {
        return CC.invokeAsync(...arguments)
      }, zC.clear = () => CC.clear(), zC
    }
  },
  9081: (CC, zC) => {
    var ZC;
    zC.CloseCode = void 0, (ZC = zC.CloseCode || (zC.CloseCode = {}))[ZC.CONSENTED = 4e3] = "CONSENTED", ZC[ZC.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class QC extends Error {
      constructor(CC, zC) {
        super(zC), this.name = "ServerError", this.code = CC
      }
    }
    class wC extends Error {
      constructor(CC) {
        super(CC), this.name = "AbortError"
      }
    }
    zC.AbortError = wC, zC.ServerError = QC
  },
  9057: (CC, zC, ZC) => {
    ZC(9066);
    var QC = ZC(9071),
      wC = ZC(9111),
      bC = ZC(9086),
      nC = ZC(9165),
      fC = ZC(9081),
      oC = ZC(9139),
      qC = ZC(9184),
      FC = ZC(9118);
    FC.registerSerializer("schema", oC.Qm), FC.registerSerializer("none", qC.NoneSerializer), zC.Client = QC.Client, zC.MatchMakeError = QC.MatchMakeError, Object.defineProperty(zC, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return wC.ErrorCode
      }
    }), Object.defineProperty(zC, "Protocol", {
      enumerable: !0,
      get: function() {
        return wC.Protocol
      }
    }), zC.OW = bC.OW, zC.Auth = nC.Auth, zC.ServerError = fC.ServerError, zC.Qm = oC.Qm, zC.getStateCallbacks = oC.getStateCallbacks, zC.registerSerializer = FC.registerSerializer
  },
  9066: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = CC => null !== CC && "object" === typeof CC && CC.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9184: (CC, zC) => {
    zC.NoneSerializer = class {
      setState(CC) {}
      getState() {
        return null
      }
      patch(CC) {}
      teardown() {}
      handshake(CC) {}
    }
  },
  9139: (CC, zC, ZC) => {
    var QC = ZC(9102);
    zC.Qm = class {
      setState(CC, zC) {
        this.wg.decode(CC, zC)
      }
      getState() {
        return this.state
      }
      patch(CC, zC) {
        return this.wg.decode(CC, zC)
      }
      teardown() {
        this.wg.root.clearRefs()
      }
      handshake(CC, zC) {
        this.state ? (QC.Reflection.decode(CC, zC), this.wg = new QC.Decoder(this.state)) : (this.wg = QC.Reflection.decode(CC, zC), this.state = this.wg.state)
      }
    }, zC.getStateCallbacks = function(CC) {
      try {
        return QC.getDecoderStateCallbacks(CC.JG.wg)
      } catch (zC) {
        return
      }
    }
  },
  9118: (CC, zC) => {
    const ZC = {};
    zC.getSerializer = function(CC) {
      const zC = ZC[CC];
      if (!zC) throw new Error("missing serializer: " + CC);
      return zC
    }, zC.registerSerializer = function(CC, zC) {
      ZC[CC] = zC
    }
  },
  9098: (CC, zC, ZC) => {
    var QC = ZC(9079),
      wC = ZC(9102);
    zC.H3TransportTransport = class {
      constructor(CC) {
        this.events = CC, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZC = zC.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(zC.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(CC, ZC), this.wt.ready.then((CC => {
          console.log("WebTransport ready!", CC), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((CC => {
            this.reader = CC.value.readable.getReader(), this.writer = CC.value.writable.getWriter(), this.sendSeatReservation(zC.room.roomId, zC.sessionId, zC.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((CC => {
            console.error("failed to read incoming stream", CC), console.error("TODO: close the connection")
          }))
        })).catch((CC => {
          console.log("WebTransport not ready!", CC), this._close()
        })), this.wt.closed.then((CC => {
          console.log("WebTransport closed w/ success", CC), this.events.onclose({
            code: CC.closeCode,
            reason: CC.reason
          })
        })).catch((CC => {
          console.log("WebTransport closed w/ error", CC), this.events.onerror(CC), this.events.onclose({
            code: CC.closeCode,
            reason: CC.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(CC) {
        const zC = wC.encode.number(this.lengthPrefixBuffer, CC.length, {
            offset: 0
          }),
          ZC = new Uint8Array(zC + CC.length);
        ZC.set(this.lengthPrefixBuffer.subarray(0, zC), 0), ZC.set(CC, zC), this.writer.write(ZC)
      }
      sendUnreliable(CC) {
        const zC = wC.encode.number(this.lengthPrefixBuffer, CC.length, {
            offset: 0
          }),
          ZC = new Uint8Array(zC + CC.length);
        ZC.set(this.lengthPrefixBuffer.subarray(0, zC), 0), ZC.set(CC, zC), this.unreliableWriter.write(ZC)
      }
      close(CC, zC) {
        try {
          this.wt.close({
            closeCode: CC,
            reason: zC
          })
        } catch (ZC) {
          console.error(ZC)
        }
      }
      readIncomingData() {
        return QC.__awaiter(this, void 0, void 0, (function*() {
          let CC;
          for (; this.isOpen;) {
            try {
              CC = yield this.reader.read();
              const zC = CC.value,
                ZC = {
                  offset: 0
                };
              do {
                const CC = wC.decode.number(zC, ZC);
                this.events.onmessage({
                  data: zC.subarray(ZC.offset, ZC.offset + CC)
                }), ZC.offset += CC
              } while (ZC.offset < zC.length)
            } catch (zC) {
              -1 === zC.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", zC);
              break
            }
            if (CC.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return QC.__awaiter(this, void 0, void 0, (function*() {
          let CC;
          for (; this.isOpen;) {
            try {
              CC = yield this.unreliableReader.read();
              const zC = CC.value,
                ZC = {
                  offset: 0
                };
              do {
                const CC = wC.decode.number(zC, ZC);
                this.events.onmessage({
                  data: zC.subarray(ZC.offset, ZC.offset + CC)
                }), ZC.offset += CC
              } while (ZC.offset < zC.length)
            } catch (zC) {
              -1 === zC.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", zC);
              break
            }
            if (CC.done) break
          }
        }))
      }
      sendSeatReservation(CC, zC, ZC) {
        const QC = {
            offset: 0
          },
          bC = [];
        wC.encode.string(bC, CC, QC), wC.encode.string(bC, zC, QC), ZC && wC.encode.string(bC, ZC, QC), this.writer.write(new Uint8Array(bC).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9106: (CC, zC, ZC) => {
    var QC = ZC(9108);
    const wC = globalThis.WebSocket || QC;
    zC.WebSocketTransport = class {
      constructor(CC) {
        this.events = CC
      }
      send(CC) {
        this.ws.send(CC)
      }
      sendUnreliable(CC) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(CC, zC) {
        try {
          this.ws = new wC(CC, {
            headers: zC,
            protocols: this.protocols
          })
        } catch (ZC) {
          this.ws = new wC(CC, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(CC, zC) {
        this.ws.close(CC, zC)
      }
      get isOpen() {
        return this.ws.readyState === wC.OPEN
      }
    }
  },
  9108: CC => {
    CC.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9158: (CC, zC, ZC) => {
    function QC(CC, zC) {
      zC.headers = CC.headers || {}, zC.statusMessage = CC.statusText, zC.statusCode = CC.status, zC.data = CC.response
    }

    function wC(CC, zC, ZC) {
      return new Promise((function(wC, bC) {
        ZC = ZC || {};
        var nC, fC, oC, qC = new XMLHttpRequest,
          FC = ZC.body,
          WC = ZC.headers || {};
        for (nC in ZC.timeout && (qC.timeout = ZC.timeout), qC.ontimeout = qC.onerror = function(CC) {
            CC.timeout = "timeout" == CC.type, bC(CC)
          }, qC.onabort = function(CC) {
            CC.aborted = !0, bC(CC)
          }, qC.open(CC, zC.href || zC), qC.onload = function() {
            for (oC = qC.getAllResponseHeaders().trim().split(/[\r\n]+/), QC(qC, qC); fC = oC.shift();) fC = fC.split(": "), qC.headers[fC.shift().toLowerCase()] = fC.join(": ");
            if ((fC = qC.headers["content-type"]) && ~fC.indexOf("application/json")) try {
              qC.data = JSON.parse(qC.data, ZC.reviver)
            } catch (CC) {
              return QC(qC, CC), bC(CC)
            }(qC.status >= 400 ? bC : wC)(qC)
          }, typeof FormData < "u" && FC instanceof FormData || FC && "object" == typeof FC && (WC["content-type"] = "application/json", FC = JSON.stringify(FC)), qC.withCredentials = !!ZC.withCredentials, WC) qC.setRequestHeader(nC, WC[nC]);
        qC.send(FC), ZC.signal && ZC.signal.addEventListener("abort", (function() {
          qC.abort()
        }))
      }))
    }
    ZC.r(zC), ZC.d(zC, {
      del: () => oC,
      get: () => bC,
      patch: () => fC,
      post: () => nC,
      put: () => qC,
      send: () => wC
    });
    var bC = wC.bind(wC, "GET"),
      nC = wC.bind(wC, "POST"),
      fC = wC.bind(wC, "PATCH"),
      oC = wC.bind(wC, "DELETE"),
      qC = wC.bind(wC, "PUT")
  },
  9144: (CC, zC, ZC) => {
    var QC, wC, bC;
    ZC.r(zC), ZC.d(zC, {
      ALWAYS: () => yz,
      C1: () => xC,
      DECIMAL_FIT: () => Uz,
      DECIMAL_ROUND: () => Lz,
      Decoder: () => oz,
      Encoder: () => Dz,
      FLOAT32_OPTIONS: () => Mz,
      NEVER: () => jz,
      Packr: () => Ez,
      RESERVE_START_SPACE: () => kz,
      RESET_BUFFER_MODE: () => Oz,
      REUSE_BUFFER_MODE: () => Bz,
      Unpackr: () => hC,
      addExtension: () => rz,
      clearSource: () => nz,
      decode: () => Nz,
      decodeIter: () => Vz,
      encode: () => tz,
      encodeIter: () => CZ,
      isNativeAccelerationEnabled: () => sC,
      mapsAsObjects: () => ZZ,
      pack: () => az,
      roundFloat32: () => Rz,
      unpack: () => Fz,
      unpackMultiple: () => Wz,
      useRecords: () => zZ
    });
    try {
      QC = new TextDecoder
    } catch (QZ) {}
    var nC = 0;
    const fC = [];
    var oC, qC, FC, WC, NC, MC = fC,
      gC = 0,
      SC = {},
      pC = 0,
      PC = 0,
      GC = [],
      RC = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class AC {}
    const xC = new AC;
    xC.name = "MessagePack 0xC1";
    var JC, IC, iC, vC = !1,
      eC = 2;
    try {
      new Function("")
    } catch (QZ) {
      eC = 1 / 0
    }
    class hC {
      constructor(CC) {
        CC && (!1 === CC.useRecords && void 0 === CC.mapsAsObjects && (CC.mapsAsObjects = !0), CC.sequential && !1 !== CC.trusted && (CC.trusted = !0, CC.structures || 0 == CC.useRecords || (CC.structures = [], CC.maxSharedStructures || (CC.maxSharedStructures = 0))), CC.structures ? CC.structures.sharedLength = CC.structures.length : CC.getStructures && ((CC.structures = []).uninitialized = !0, CC.structures.sharedLength = 0), CC.int64AsNumber && (CC.int64AsType = "number")), Object.assign(this, CC)
      }
      unpack(CC, zC) {
        if (wC) return bz((() => (nz(), this ? this.unpack(CC, zC) : hC.prototype.unpack.call(RC, CC, zC))));
        CC.buffer || CC.constructor !== ArrayBuffer || (CC = "undefined" !== typeof Buffer ? Buffer.from(CC) : new Uint8Array(CC)), "object" === typeof zC ? (bC = zC.end || CC.length, nC = zC.start || 0) : (nC = 0, bC = zC > -1 ? zC : CC.length), gC = 0, PC = 0, qC = null, MC = fC, FC = null, wC = CC;
        try {
          NC = CC.dataView || (CC.dataView = new DataView(CC.buffer, CC.byteOffset, CC.byteLength))
        } catch (QZ) {
          if (wC = null, CC instanceof Uint8Array) throw QZ;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (CC && "object" == typeof CC ? CC.constructor.name : typeof CC))
        }
        if (this instanceof hC) {
          if (SC = this, this.structures) return oC = this.structures, KC(zC);
          (!oC || oC.length > 0) && (oC = [])
        } else SC = RC, (!oC || oC.length > 0) && (oC = []);
        return KC(zC)
      }
      unpackMultiple(CC, zC) {
        let ZC, QC = 0;
        try {
          vC = !0;
          let wC = CC.length,
            bC = this ? this.unpack(CC, wC) : qz.unpack(CC, wC);
          if (!zC) {
            for (ZC = [bC]; nC < wC;) QC = nC, ZC.push(KC());
            return ZC
          }
          if (!1 === zC(bC, QC, nC)) return;
          for (; nC < wC;)
            if (QC = nC, !1 === zC(KC(), QC, nC)) return
        } catch (QZ) {
          throw QZ.lastPosition = QC, QZ.values = ZC, QZ
        } finally {
          vC = !1, nz()
        }
      }
      _mergeStructures(CC, zC) {
        IC && (CC = IC.call(this, CC)), CC = CC || [], Object.isFrozen(CC) && (CC = CC.map((CC => CC.slice(0))));
        for (let ZC = 0, QC = CC.length; ZC < QC; ZC++) {
          let zC = CC[ZC];
          zC && (zC.isShared = !0, ZC >= 32 && (zC.highByte = ZC - 32 >> 5))
        }
        CC.sharedLength = CC.length;
        for (let ZC in zC || [])
          if (ZC >= 0) {
            let QC = CC[ZC],
              wC = zC[ZC];
            wC && (QC && ((CC.restoreStructures || (CC.restoreStructures = []))[ZC] = QC), CC[ZC] = wC)
          } return this.structures = CC
      }
      decode(CC, zC) {
        return this.unpack(CC, zC)
      }
    }

    function KC(CC) {
      try {
        if (!SC.trusted && !vC) {
          let CC = oC.sharedLength || 0;
          CC < oC.length && (oC.length = CC)
        }
        let zC;
        if (SC.randomAccessStructure && wC[nC] < 64 && wC[nC] >= 32 && JC ? (zC = JC(wC, nC, bC, SC), wC = null, CC && CC.lazy || !zC || (zC = zC.toJSON()), nC = bC) : zC = dC(), FC && (nC = FC.postBundlePosition, FC = null), vC && (oC.restoreStructures = null), nC == bC) oC && oC.restoreStructures && YC(), oC = null, wC = null, WC && (WC = null);
        else {
          if (nC > bC) throw new Error("Unexpected end of MessagePack data");
          if (!vC) {
            let CC;
            try {
              CC = JSON.stringify(zC, ((CC, zC) => "bigint" === typeof zC ? `${zC}n` : zC)).slice(0, 100)
            } catch (QZ) {
              CC = "(JSON view not available " + QZ + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + CC)
          }
        }
        return zC
      } catch (QZ) {
        throw oC && oC.restoreStructures && YC(), nz(), (QZ instanceof RangeError || QZ.message.startsWith("Unexpected end of buffer") || nC > bC) && (QZ.incomplete = !0), QZ
      }
    }

    function YC() {
      for (let CC in oC.restoreStructures) oC[CC] = oC.restoreStructures[CC];
      oC.restoreStructures = null
    }

    function dC() {
      let CC = wC[nC++];
      if (CC < 160) {
        if (CC < 128) {
          if (CC < 64) return CC;
          {
            let zC = oC[63 & CC] || SC.getStructures && lC()[63 & CC];
            return zC ? (zC.read || (zC.read = HC(zC, 63 & CC)), zC.read()) : CC
          }
        }
        if (CC < 144) {
          if (CC -= 128, SC.mapsAsObjects) {
            let zC = {};
            for (let ZC = 0; ZC < CC; ZC++) {
              let CC = kC();
              "__proto__" === CC && (CC = "__proto_"), zC[CC] = dC()
            }
            return zC
          } {
            let zC = new Map;
            for (let ZC = 0; ZC < CC; ZC++) zC.set(dC(), dC());
            return zC
          }
        } {
          CC -= 144;
          let zC = new Array(CC);
          for (let ZC = 0; ZC < CC; ZC++) zC[ZC] = dC();
          return SC.freezeData ? Object.freeze(zC) : zC
        }
      }
      if (CC < 192) {
        let zC = CC - 160;
        if (PC >= nC) return qC.slice(nC - pC, (nC += zC) - pC);
        if (0 == PC && bC < 140) {
          let CC = zC < 16 ? yC(zC) : jC(zC);
          if (null != CC) return CC
        }
        return XC(zC)
      } {
        let zC;
        switch (CC) {
          case 192:
            return null;
          case 193:
            return FC ? (zC = dC(), zC > 0 ? FC[1].slice(FC.position1, FC.position1 += zC) : FC[0].slice(FC.position0, FC.position0 -= zC)) : xC;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (zC = wC[nC++], void 0 === zC) throw new Error("Unexpected end of buffer");
            return UC(zC);
          case 197:
            return zC = NC.getUint16(nC), nC += 2, UC(zC);
          case 198:
            return zC = NC.getUint32(nC), nC += 4, UC(zC);
          case 199:
            return BC(wC[nC++]);
          case 200:
            return zC = NC.getUint16(nC), nC += 2, BC(zC);
          case 201:
            return zC = NC.getUint32(nC), nC += 4, BC(zC);
          case 202:
            if (zC = NC.getFloat32(nC), SC.useFloat32 > 2) {
              let CC = fz[(127 & wC[nC]) << 1 | wC[nC + 1] >> 7];
              return nC += 4, (CC * zC + (zC > 0 ? .5 : -.5) | 0) / CC
            }
            return nC += 4, zC;
          case 203:
            return zC = NC.getFloat64(nC), nC += 8, zC;
          case 204:
            return wC[nC++];
          case 205:
            return zC = NC.getUint16(nC), nC += 2, zC;
          case 206:
            return zC = NC.getUint32(nC), nC += 4, zC;
          case 207:
            return "number" === SC.int64AsType ? (zC = 4294967296 * NC.getUint32(nC), zC += NC.getUint32(nC + 4)) : "string" === SC.int64AsType ? zC = NC.getBigUint64(nC).toString() : "auto" === SC.int64AsType ? (zC = NC.getBigUint64(nC), zC <= BigInt(2) << BigInt(52) && (zC = Number(zC))) : zC = NC.getBigUint64(nC), nC += 8, zC;
          case 208:
            return NC.getInt8(nC++);
          case 209:
            return zC = NC.getInt16(nC), nC += 2, zC;
          case 210:
            return zC = NC.getInt32(nC), nC += 4, zC;
          case 211:
            return "number" === SC.int64AsType ? (zC = 4294967296 * NC.getInt32(nC), zC += NC.getUint32(nC + 4)) : "string" === SC.int64AsType ? zC = NC.getBigInt64(nC).toString() : "auto" === SC.int64AsType ? (zC = NC.getBigInt64(nC), zC >= BigInt(-2) << BigInt(52) && zC <= BigInt(2) << BigInt(52) && (zC = Number(zC))) : zC = NC.getBigInt64(nC), nC += 8, zC;
          case 212:
            if (zC = wC[nC++], 114 == zC) return Cz(63 & wC[nC++]);
            {
              let CC = GC[zC];
              if (CC) return CC.read ? (nC++, CC.read(dC())) : CC.noBuffer ? (nC++, CC()) : CC(wC.subarray(nC, ++nC));
              throw new Error("Unknown extension " + zC)
            }
          case 213:
            return zC = wC[nC], 114 == zC ? (nC++, Cz(63 & wC[nC++], wC[nC++])) : BC(2);
          case 214:
            return BC(4);
          case 215:
            return BC(8);
          case 216:
            return BC(16);
          case 217:
            return zC = wC[nC++], PC >= nC ? qC.slice(nC - pC, (nC += zC) - pC) : cC(zC);
          case 218:
            return zC = NC.getUint16(nC), PC >= (nC += 2) ? qC.slice(nC - pC, (nC += zC) - pC) : uC(zC);
          case 219:
            return zC = NC.getUint32(nC), PC >= (nC += 4) ? qC.slice(nC - pC, (nC += zC) - pC) : rC(zC);
          case 220:
            return zC = NC.getUint16(nC), nC += 2, aC(zC);
          case 221:
            return zC = NC.getUint32(nC), nC += 4, aC(zC);
          case 222:
            return zC = NC.getUint16(nC), nC += 2, tC(zC);
          case 223:
            return zC = NC.getUint32(nC), nC += 4, tC(zC);
          default:
            if (CC >= 224) return CC - 256;
            if (void 0 === CC) {
              let CC = new Error("Unexpected end of MessagePack data");
              throw CC.incomplete = !0, CC
            }
            throw new Error("Unknown MessagePack token " + CC)
        }
      }
    }
    const mC = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function HC(CC, zC) {
      function ZC() {
        if (ZC.count++ > eC) {
          let ZC = CC.read = new Function("r", "return function(){return " + (SC.freezeData ? "Object.freeze" : "") + "({" + CC.map((CC => "__proto__" === CC ? "__proto_:r()" : mC.test(CC) ? CC + ":r()" : "[" + JSON.stringify(CC) + "]:r()")).join(",") + "})}")(dC);
          return 0 === CC.highByte && (CC.read = EC(zC, CC.read)), ZC()
        }
        let QC = {};
        for (let zC = 0, ZC = CC.length; zC < ZC; zC++) {
          let ZC = CC[zC];
          "__proto__" === ZC && (ZC = "__proto_"), QC[ZC] = dC()
        }
        return SC.freezeData ? Object.freeze(QC) : QC
      }
      return ZC.count = 0, 0 === CC.highByte ? EC(zC, ZC) : ZC
    }
    const EC = (CC, zC) => function() {
      let ZC = wC[nC++];
      if (0 === ZC) return zC();
      let QC = CC < 32 ? -(CC + (ZC << 5)) : CC + (ZC << 5),
        bC = oC[QC] || lC()[QC];
      if (!bC) throw new Error("Record id is not defined for " + QC);
      return bC.read || (bC.read = HC(bC, CC)), bC.read()
    };

    function lC() {
      let CC = bz((() => (wC = null, SC.getStructures())));
      return oC = SC._mergeStructures(CC, oC)
    }
    var XC = TC,
      cC = TC,
      uC = TC,
      rC = TC;
    let sC = !1;

    function TC(CC) {
      let zC;
      if (CC < 16 && (zC = yC(CC))) return zC;
      if (CC > 64 && QC) return QC.decode(wC.subarray(nC, nC += CC));
      const ZC = nC + CC,
        bC = [];
      for (zC = ""; nC < ZC;) {
        const CC = wC[nC++];
        if (0 === (128 & CC)) bC.push(CC);
        else if (192 === (224 & CC)) {
          const zC = 63 & wC[nC++];
          bC.push((31 & CC) << 6 | zC)
        } else if (224 === (240 & CC)) {
          const zC = 63 & wC[nC++],
            ZC = 63 & wC[nC++];
          bC.push((31 & CC) << 12 | zC << 6 | ZC)
        } else if (240 === (248 & CC)) {
          let zC = (7 & CC) << 18 | (63 & wC[nC++]) << 12 | (63 & wC[nC++]) << 6 | 63 & wC[nC++];
          zC > 65535 && (zC -= 65536, bC.push(zC >>> 10 & 1023 | 55296), zC = 56320 | 1023 & zC), bC.push(zC)
        } else bC.push(CC);
        bC.length >= 4096 && (zC += DC.apply(String, bC), bC.length = 0)
      }
      return bC.length > 0 && (zC += DC.apply(String, bC)), zC
    }

    function aC(CC) {
      let zC = new Array(CC);
      for (let ZC = 0; ZC < CC; ZC++) zC[ZC] = dC();
      return SC.freezeData ? Object.freeze(zC) : zC
    }

    function tC(CC) {
      if (SC.mapsAsObjects) {
        let zC = {};
        for (let ZC = 0; ZC < CC; ZC++) {
          let CC = kC();
          "__proto__" === CC && (CC = "__proto_"), zC[CC] = dC()
        }
        return zC
      } {
        let zC = new Map;
        for (let ZC = 0; ZC < CC; ZC++) zC.set(dC(), dC());
        return zC
      }
    }
    var DC = String.fromCharCode;

    function jC(CC) {
      let zC = nC,
        ZC = new Array(CC);
      for (let QC = 0; QC < CC; QC++) {
        const CC = wC[nC++];
        if ((128 & CC) > 0) return void(nC = zC);
        ZC[QC] = CC
      }
      return DC.apply(String, ZC)
    }

    function yC(CC) {
      if (CC < 4) {
        if (CC < 2) {
          if (0 === CC) return "";
          {
            let CC = wC[nC++];
            return (128 & CC) > 1 ? void(nC -= 1) : DC(CC)
          }
        } {
          let zC = wC[nC++],
            ZC = wC[nC++];
          if ((128 & zC) > 0 || (128 & ZC) > 0) return void(nC -= 2);
          if (CC < 3) return DC(zC, ZC);
          let QC = wC[nC++];
          return (128 & QC) > 0 ? void(nC -= 3) : DC(zC, ZC, QC)
        }
      } {
        let zC = wC[nC++],
          ZC = wC[nC++],
          QC = wC[nC++],
          bC = wC[nC++];
        if ((128 & zC) > 0 || (128 & ZC) > 0 || (128 & QC) > 0 || (128 & bC) > 0) return void(nC -= 4);
        if (CC < 6) {
          if (4 === CC) return DC(zC, ZC, QC, bC);
          {
            let CC = wC[nC++];
            return (128 & CC) > 0 ? void(nC -= 5) : DC(zC, ZC, QC, bC, CC)
          }
        }
        if (CC < 8) {
          let fC = wC[nC++],
            oC = wC[nC++];
          if ((128 & fC) > 0 || (128 & oC) > 0) return void(nC -= 6);
          if (CC < 7) return DC(zC, ZC, QC, bC, fC, oC);
          let qC = wC[nC++];
          return (128 & qC) > 0 ? void(nC -= 7) : DC(zC, ZC, QC, bC, fC, oC, qC)
        } {
          let fC = wC[nC++],
            oC = wC[nC++],
            qC = wC[nC++],
            FC = wC[nC++];
          if ((128 & fC) > 0 || (128 & oC) > 0 || (128 & qC) > 0 || (128 & FC) > 0) return void(nC -= 8);
          if (CC < 10) {
            if (8 === CC) return DC(zC, ZC, QC, bC, fC, oC, qC, FC);
            {
              let CC = wC[nC++];
              return (128 & CC) > 0 ? void(nC -= 9) : DC(zC, ZC, QC, bC, fC, oC, qC, FC, CC)
            }
          }
          if (CC < 12) {
            let WC = wC[nC++],
              NC = wC[nC++];
            if ((128 & WC) > 0 || (128 & NC) > 0) return void(nC -= 10);
            if (CC < 11) return DC(zC, ZC, QC, bC, fC, oC, qC, FC, WC, NC);
            let MC = wC[nC++];
            return (128 & MC) > 0 ? void(nC -= 11) : DC(zC, ZC, QC, bC, fC, oC, qC, FC, WC, NC, MC)
          } {
            let WC = wC[nC++],
              NC = wC[nC++],
              MC = wC[nC++],
              gC = wC[nC++];
            if ((128 & WC) > 0 || (128 & NC) > 0 || (128 & MC) > 0 || (128 & gC) > 0) return void(nC -= 12);
            if (CC < 14) {
              if (12 === CC) return DC(zC, ZC, QC, bC, fC, oC, qC, FC, WC, NC, MC, gC);
              {
                let CC = wC[nC++];
                return (128 & CC) > 0 ? void(nC -= 13) : DC(zC, ZC, QC, bC, fC, oC, qC, FC, WC, NC, MC, gC, CC)
              }
            } {
              let SC = wC[nC++],
                pC = wC[nC++];
              if ((128 & SC) > 0 || (128 & pC) > 0) return void(nC -= 14);
              if (CC < 15) return DC(zC, ZC, QC, bC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC);
              let PC = wC[nC++];
              return (128 & PC) > 0 ? void(nC -= 15) : DC(zC, ZC, QC, bC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC)
            }
          }
        }
      }
    }

    function LC() {
      let CC, zC = wC[nC++];
      if (zC < 192) CC = zC - 160;
      else switch (zC) {
        case 217:
          CC = wC[nC++];
          break;
        case 218:
          CC = NC.getUint16(nC), nC += 2;
          break;
        case 219:
          CC = NC.getUint32(nC), nC += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return TC(CC)
    }

    function UC(CC) {
      return SC.copyBuffers ? Uint8Array.prototype.slice.call(wC, nC, nC += CC) : wC.subarray(nC, nC += CC)
    }

    function BC(CC) {
      let zC = wC[nC++];
      if (GC[zC]) {
        let ZC;
        return GC[zC](wC.subarray(nC, ZC = nC += CC), (CC => {
          nC = CC;
          try {
            return dC()
          } finally {
            nC = ZC
          }
        }))
      }
      throw new Error("Unknown extension type " + zC)
    }
    var OC = new Array(4096);

    function kC() {
      let CC = wC[nC++];
      if (!(CC >= 160 && CC < 192)) return nC--, VC(dC());
      if (CC -= 160, PC >= nC) return qC.slice(nC - pC, (nC += CC) - pC);
      if (!(0 == PC && bC < 180)) return XC(CC);
      let zC, ZC = 4095 & (CC << 5 ^ (CC > 1 ? NC.getUint16(nC) : CC > 0 ? wC[nC] : 0)),
        QC = OC[ZC],
        fC = nC,
        oC = nC + CC - 3,
        FC = 0;
      if (QC && QC.bytes == CC) {
        for (; fC < oC;) {
          if (zC = NC.getUint32(fC), zC != QC[FC++]) {
            fC = 1879048192;
            break
          }
          fC += 4
        }
        for (oC += 3; fC < oC;)
          if (zC = wC[fC++], zC != QC[FC++]) {
            fC = 1879048192;
            break
          } if (fC === oC) return nC = fC, QC.string;
        oC -= 3, fC = nC
      }
      for (QC = [], OC[ZC] = QC, QC.bytes = CC; fC < oC;) zC = NC.getUint32(fC), QC.push(zC), fC += 4;
      for (oC += 3; fC < oC;) zC = wC[fC++], QC.push(zC);
      let WC = CC < 16 ? yC(CC) : jC(CC);
      return QC.string = null != WC ? WC : XC(CC)
    }

    function VC(CC) {
      if ("string" === typeof CC) return CC;
      if ("number" === typeof CC || "boolean" === typeof CC || "bigint" === typeof CC) return CC.toString();
      if (null == CC) return CC + "";
      if (SC.allowArraysInMapKeys && Array.isArray(CC) && CC.flat().every((CC => ["string", "number", "boolean", "bigint"].includes(typeof CC)))) return CC.flat().toString();
      throw new Error("Invalid property type for record: " + typeof CC)
    }
    const Cz = (CC, zC) => {
      let ZC = dC().map(VC),
        QC = CC;
      void 0 !== zC && (CC = CC < 32 ? -((zC << 5) + CC) : (zC << 5) + CC, ZC.highByte = zC);
      let wC = oC[CC];
      return wC && (wC.isShared || vC) && ((oC.restoreStructures || (oC.restoreStructures = []))[CC] = wC), oC[CC] = ZC, ZC.read = HC(ZC, QC), ZC.read()
    };
    GC[0] = () => {}, GC[0].noBuffer = !0, GC[66] = CC => {
      let zC = CC.length,
        ZC = BigInt(128 & CC[0] ? CC[0] - 256 : CC[0]);
      for (let QC = 1; QC < zC; QC++) ZC <<= BigInt(8), ZC += BigInt(CC[QC]);
      return ZC
    };
    let zz = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    GC[101] = () => {
      let CC = dC();
      return (zz[CC[0]] || Error)(CC[1], {
        cause: CC[2]
      })
    }, GC[105] = CC => {
      if (!1 === SC.structuredClone) throw new Error("Structured clone extension is disabled");
      let zC = NC.getUint32(nC - 4);
      WC || (WC = new Map);
      let ZC, QC = wC[nC];
      ZC = QC >= 144 && QC < 160 || 220 == QC || 221 == QC ? [] : {};
      let bC = {
        target: ZC
      };
      WC.set(zC, bC);
      let fC = dC();
      return bC.used ? Object.assign(ZC, fC) : (bC.target = fC, fC)
    }, GC[112] = CC => {
      if (!1 === SC.structuredClone) throw new Error("Structured clone extension is disabled");
      let zC = NC.getUint32(nC - 4),
        ZC = WC.get(zC);
      return ZC.used = !0, ZC.target
    }, GC[115] = () => new Set(dC());
    const Zz = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((CC => CC + "Array"));
    let Qz = "object" === typeof globalThis ? globalThis : window;
    GC[116] = CC => {
      let zC = CC[0],
        ZC = Zz[zC];
      if (!ZC) {
        if (16 === zC) {
          let zC = new ArrayBuffer(CC.length - 1);
          return new Uint8Array(zC).set(CC.subarray(1)), zC
        }
        throw new Error("Could not find typed array for code " + zC)
      }
      return new Qz[ZC](Uint8Array.prototype.slice.call(CC, 1).buffer)
    }, GC[120] = () => {
      let CC = dC();
      return new RegExp(CC[0], CC[1])
    };
    const wz = [];

    function bz(CC) {
      iC && iC();
      let zC = bC,
        ZC = nC,
        QC = gC,
        fC = pC,
        GC = PC,
        RC = qC,
        AC = MC,
        xC = WC,
        JC = FC,
        IC = new Uint8Array(wC.slice(0, bC)),
        eC = oC,
        hC = oC.slice(0, oC.length),
        KC = SC,
        YC = vC,
        dC = CC();
      return bC = zC, nC = ZC, gC = QC, pC = fC, PC = GC, qC = RC, MC = AC, WC = xC, FC = JC, wC = IC, vC = YC, (oC = eC).splice(0, oC.length, ...hC), SC = KC, NC = new DataView(wC.buffer, wC.byteOffset, wC.byteLength), dC
    }

    function nz() {
      wC = null, WC = null, oC = null
    }
    GC[98] = CC => {
      let zC = (CC[0] << 24) + (CC[1] << 16) + (CC[2] << 8) + CC[3],
        ZC = nC;
      return nC += zC - CC.length, FC = wz, (FC = [LC(), LC()]).position0 = 0, FC.position1 = 0, FC.postBundlePosition = nC, nC = ZC, dC()
    }, GC[255] = CC => 4 == CC.length ? new Date(1e3 * (16777216 * CC[0] + (CC[1] << 16) + (CC[2] << 8) + CC[3])) : 8 == CC.length ? new Date(((CC[0] << 22) + (CC[1] << 14) + (CC[2] << 6) + (CC[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & CC[3]) + 16777216 * CC[4] + (CC[5] << 16) + (CC[6] << 8) + CC[7])) : 12 == CC.length ? new Date(((CC[0] << 24) + (CC[1] << 16) + (CC[2] << 8) + CC[3]) / 1e6 + 1e3 * ((128 & CC[4] ? -281474976710656 : 0) + 1099511627776 * CC[6] + 4294967296 * CC[7] + 16777216 * CC[8] + (CC[9] << 16) + (CC[10] << 8) + CC[11])) : new Date("invalid");
    const fz = new Array(147);
    for (let wZ = 0; wZ < 256; wZ++) fz[wZ] = +("1e" + Math.floor(45.15 - .30103 * wZ));
    const oz = hC;
    var qz = new hC({
      useRecords: !1
    });
    const Fz = qz.unpack,
      Wz = qz.unpackMultiple,
      Nz = qz.unpack,
      Mz = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let gz, Sz, pz, Pz = new Float32Array(1),
      Gz = new Uint8Array(Pz.buffer, 0, 4);

    function Rz(CC) {
      Pz[0] = CC;
      let zC = fz[(127 & Gz[3]) << 1 | Gz[2] >> 7];
      return (zC * CC + (CC > 0 ? .5 : -.5) | 0) / zC
    }
    try {
      gz = new TextEncoder
    } catch (QZ) {}
    const Az = "undefined" !== typeof Buffer,
      xz = Az ? function(CC) {
        return Buffer.allocUnsafeSlow(CC)
      } : Uint8Array,
      Jz = Az ? Buffer : Uint8Array,
      Iz = Az ? 4294967296 : 2144337920;
    let iz, vz, ez, hz, Kz, Yz = 0,
      dz = null;
    const mz = /[\u0080-\uFFFF]/,
      Hz = Symbol("record-id");
    class Ez extends hC {
      constructor(CC) {
        let zC, ZC, QC, wC;
        super(CC), this.offset = 0;
        let bC = Jz.prototype.utf8Write ? function(CC, zC) {
            return iz.utf8Write(CC, zC, iz.byteLength - zC)
          } : !(!gz || !gz.encodeInto) && function(CC, zC) {
            return gz.encodeInto(CC, iz.subarray(zC)).written
          },
          nC = this;
        CC || (CC = {});
        let fC = CC && CC.sequential,
          oC = CC.structures || CC.saveStructures,
          qC = CC.maxSharedStructures;
        if (null == qC && (qC = oC ? 32 : 0), qC > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        CC.structuredClone && void 0 == CC.moreTypes && (this.moreTypes = !0);
        let FC = CC.maxOwnStructures;
        null == FC && (FC = oC ? 32 : 64), this.structures || 0 == CC.useRecords || (this.structures = []);
        let WC = qC > 32 || FC + qC > 64,
          NC = qC + 64,
          MC = qC + FC + 64;
        if (MC > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let gC = [],
          SC = 0,
          pC = 0;
        this.pack = this.encode = function(CC, bC) {
          if (iz || (iz = new xz(8192), ez = iz.dataView || (iz.dataView = new DataView(iz.buffer, 0, 8192)), Yz = 0), hz = iz.length - 10, hz - Yz < 2048 ? (iz = new xz(iz.length), ez = iz.dataView || (iz.dataView = new DataView(iz.buffer, 0, iz.length)), hz = iz.length - 10, Yz = 0) : Yz = Yz + 7 & 2147483640, zC = Yz, bC & kz && (Yz += 255 & bC), wC = nC.structuredClone ? new Map : null, nC.bundleStrings && "string" !== typeof CC ? (dz = [], dz.size = 1 / 0) : dz = null, QC = nC.structures, QC) {
            QC.uninitialized && (QC = nC._mergeStructures(nC.getStructures()));
            let CC = QC.sharedLength || 0;
            if (CC > qC) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + QC.sharedLength);
            if (!QC.transitions) {
              QC.transitions = Object.create(null);
              for (let zC = 0; zC < CC; zC++) {
                let CC = QC[zC];
                if (!CC) continue;
                let ZC, wC = QC.transitions;
                for (let zC = 0, QC = CC.length; zC < QC; zC++) {
                  let QC = CC[zC];
                  ZC = wC[QC], ZC || (ZC = wC[QC] = Object.create(null)), wC = ZC
                }
                wC[Hz] = zC + 64
              }
              this.lastNamedStructuresLength = CC
            }
            fC || (QC.nextId = CC + 64)
          }
          let oC;
          ZC && (ZC = !1);
          try {
            nC.randomAccessStructure && CC && CC.constructor && CC.constructor === Object ? hC(CC) : RC(CC);
            let ZC = dz;
            if (dz && uz(zC, RC, 0), wC && wC.idsToInsert) {
              let CC = wC.idsToInsert.sort(((CC, zC) => CC.offset > zC.offset ? 1 : -1)),
                QC = CC.length,
                bC = -1;
              for (; ZC && QC > 0;) {
                let wC = CC[--QC].offset + zC;
                wC < ZC.stringsPosition + zC && -1 === bC && (bC = 0), wC > ZC.position + zC ? bC >= 0 && (bC += 6) : (bC >= 0 && (ez.setUint32(ZC.position + zC, ez.getUint32(ZC.position + zC) + bC), bC = -1), ZC = ZC.previous, QC++)
              }
              bC >= 0 && ZC && ez.setUint32(ZC.position + zC, ez.getUint32(ZC.position + zC) + bC), Yz += 6 * CC.length, Yz > hz && iC(Yz), nC.offset = Yz;
              let fC = function(CC, zC) {
                let ZC, QC = 6 * zC.length,
                  wC = CC.length - QC;
                for (; ZC = zC.pop();) {
                  let zC = ZC.offset,
                    bC = ZC.id;
                  CC.copyWithin(zC + QC, zC, wC), QC -= 6;
                  let nC = zC + QC;
                  CC[nC++] = 214, CC[nC++] = 105, CC[nC++] = bC >> 24, CC[nC++] = bC >> 16 & 255, CC[nC++] = bC >> 8 & 255, CC[nC++] = 255 & bC, wC = zC
                }
                return CC
              }(iz.subarray(zC, Yz), CC);
              return wC = null, fC
            }
            return nC.offset = Yz, bC & Bz ? (iz.start = zC, iz.end = Yz, iz) : iz.subarray(zC, Yz)
          } catch (QZ) {
            throw oC = QZ, QZ
          } finally {
            if (QC && (PC(), ZC && nC.saveStructures)) {
              let ZC = QC.sharedLength || 0,
                wC = iz.subarray(zC, Yz),
                fC = sz(QC, nC);
              if (!oC) return !1 === nC.saveStructures(fC, fC.isCompatible) ? nC.pack(CC, bC) : (nC.lastNamedStructuresLength = ZC, iz.length > 1073741824 && (iz = null), wC)
            }
            iz.length > 1073741824 && (iz = null), bC & Oz && (Yz = zC)
          }
        };
        const PC = () => {
            pC < 10 && pC++;
            let CC = QC.sharedLength || 0;
            if (QC.length > CC && !fC && (QC.length = CC), SC > 1e4) QC.transitions = null, pC = 0, SC = 0, gC.length > 0 && (gC = []);
            else if (gC.length > 0 && !fC) {
              for (let CC = 0, zC = gC.length; CC < zC; CC++) gC[CC][Hz] = 0;
              gC = []
            }
          },
          GC = CC => {
            var zC = CC.length;
            zC < 16 ? iz[Yz++] = 144 | zC : zC < 65536 ? (iz[Yz++] = 220, iz[Yz++] = zC >> 8, iz[Yz++] = 255 & zC) : (iz[Yz++] = 221, ez.setUint32(Yz, zC), Yz += 4);
            for (let ZC = 0; ZC < zC; ZC++) RC(CC[ZC])
          },
          RC = CC => {
            Yz > hz && (iz = iC(Yz));
            var ZC, QC = typeof CC;
            if ("string" === QC) {
              let QC, wC = CC.length;
              if (dz && wC >= 4 && wC < 4096) {
                if ((dz.size += wC) > 21760) {
                  let CC, ZC, QC = (dz[0] ? 3 * dz[0].length + dz[1].length : 0) + 10;
                  Yz + QC > hz && (iz = iC(Yz + QC)), dz.position ? (ZC = dz, iz[Yz] = 200, Yz += 3, iz[Yz++] = 98, CC = Yz - zC, Yz += 4, uz(zC, RC, 0), ez.setUint16(CC + zC - 3, Yz - zC - CC)) : (iz[Yz++] = 214, iz[Yz++] = 98, CC = Yz - zC, Yz += 4), dz = ["", ""], dz.previous = ZC, dz.size = 0, dz.position = CC
                }
                let ZC = mz.test(CC);
                return dz[ZC ? 0 : 1] += CC, iz[Yz++] = 193, void RC(ZC ? -wC : wC)
              }
              QC = wC < 32 ? 1 : wC < 256 ? 2 : wC < 65536 ? 3 : 5;
              let nC = 3 * wC;
              if (Yz + nC > hz && (iz = iC(Yz + nC)), wC < 64 || !bC) {
                let zC, bC, nC, fC = Yz + QC;
                for (zC = 0; zC < wC; zC++) bC = CC.charCodeAt(zC), bC < 128 ? iz[fC++] = bC : bC < 2048 ? (iz[fC++] = bC >> 6 | 192, iz[fC++] = 63 & bC | 128) : 55296 === (64512 & bC) && 56320 === (64512 & (nC = CC.charCodeAt(zC + 1))) ? (bC = 65536 + ((1023 & bC) << 10) + (1023 & nC), zC++, iz[fC++] = bC >> 18 | 240, iz[fC++] = bC >> 12 & 63 | 128, iz[fC++] = bC >> 6 & 63 | 128, iz[fC++] = 63 & bC | 128) : (iz[fC++] = bC >> 12 | 224, iz[fC++] = bC >> 6 & 63 | 128, iz[fC++] = 63 & bC | 128);
                ZC = fC - Yz - QC
              } else ZC = bC(CC, Yz + QC);
              ZC < 32 ? iz[Yz++] = 160 | ZC : ZC < 256 ? (QC < 2 && iz.copyWithin(Yz + 2, Yz + 1, Yz + 1 + ZC), iz[Yz++] = 217, iz[Yz++] = ZC) : ZC < 65536 ? (QC < 3 && iz.copyWithin(Yz + 3, Yz + 2, Yz + 2 + ZC), iz[Yz++] = 218, iz[Yz++] = ZC >> 8, iz[Yz++] = 255 & ZC) : (QC < 5 && iz.copyWithin(Yz + 5, Yz + 3, Yz + 3 + ZC), iz[Yz++] = 219, ez.setUint32(Yz, ZC), Yz += 4), Yz += ZC
            } else if ("number" === QC)
              if (CC >>> 0 === CC) CC < 32 || CC < 128 && !1 === this.useRecords || CC < 64 && !this.randomAccessStructure ? iz[Yz++] = CC : CC < 256 ? (iz[Yz++] = 204, iz[Yz++] = CC) : CC < 65536 ? (iz[Yz++] = 205, iz[Yz++] = CC >> 8, iz[Yz++] = 255 & CC) : (iz[Yz++] = 206, ez.setUint32(Yz, CC), Yz += 4);
              else if ((CC | 0) === CC) CC >= -32 ? iz[Yz++] = 256 + CC : CC >= -128 ? (iz[Yz++] = 208, iz[Yz++] = CC + 256) : CC >= -32768 ? (iz[Yz++] = 209, ez.setInt16(Yz, CC), Yz += 2) : (iz[Yz++] = 210, ez.setInt32(Yz, CC), Yz += 4);
            else {
              let zC;
              if ((zC = this.useFloat32) > 0 && CC < 4294967296 && CC >= -2147483648) {
                let ZC;
                if (iz[Yz++] = 202, ez.setFloat32(Yz, CC), zC < 4 || ((ZC = CC * fz[(127 & iz[Yz]) << 1 | iz[Yz + 1] >> 7]) | 0) === ZC) return void(Yz += 4);
                Yz--
              }
              iz[Yz++] = 203, ez.setFloat64(Yz, CC), Yz += 8
            } else if ("object" === QC || "function" === QC)
              if (CC) {
                if (wC) {
                  let ZC = wC.get(CC);
                  if (ZC) {
                    if (!ZC.id) {
                      let CC = wC.idsToInsert || (wC.idsToInsert = []);
                      ZC.id = CC.push(ZC)
                    }
                    return iz[Yz++] = 214, iz[Yz++] = 112, ez.setUint32(Yz, ZC.id), void(Yz += 4)
                  }
                  wC.set(CC, {
                    offset: Yz - zC
                  })
                }
                let bC = CC.constructor;
                if (bC === Object) IC(CC);
                else if (bC === Array) GC(CC);
                else if (bC === Map)
                  if (this.mapAsEmptyObject) iz[Yz++] = 128;
                  else {
                    (ZC = CC.size) < 16 ? iz[Yz++] = 128 | ZC : ZC < 65536 ? (iz[Yz++] = 222, iz[Yz++] = ZC >> 8, iz[Yz++] = 255 & ZC) : (iz[Yz++] = 223, ez.setUint32(Yz, ZC), Yz += 4);
                    for (let [zC, ZC] of CC) RC(zC), RC(ZC)
                  }
                else {
                  for (let zC = 0, ZC = Sz.length; zC < ZC; zC++) {
                    if (CC instanceof pz[zC]) {
                      let ZC = Sz[zC];
                      if (ZC.write) {
                        ZC.type && (iz[Yz++] = 212, iz[Yz++] = ZC.type, iz[Yz++] = 0);
                        let zC = ZC.write.call(this, CC);
                        return void(zC === CC ? Array.isArray(CC) ? GC(CC) : IC(CC) : RC(zC))
                      }
                      let QC, wC = iz,
                        bC = ez,
                        nC = Yz;
                      iz = null;
                      try {
                        QC = ZC.pack.call(this, CC, (CC => (iz = wC, wC = null, Yz += CC, Yz > hz && iC(Yz), {
                          target: iz,
                          targetView: ez,
                          position: Yz - CC
                        })), RC)
                      } finally {
                        wC && (iz = wC, ez = bC, Yz = nC, hz = iz.length - 10)
                      }
                      return void(QC && (QC.length + Yz > hz && iC(QC.length + Yz), Yz = cz(QC, iz, Yz, ZC.type)))
                    }
                  }
                  if (Array.isArray(CC)) GC(CC);
                  else {
                    if (CC.toJSON) {
                      const zC = CC.toJSON();
                      if (zC !== CC) return RC(zC)
                    }
                    if ("function" === QC) return RC(this.writeFunction && this.writeFunction(CC));
                    IC(CC)
                  }
                }
              } else iz[Yz++] = 192;
            else if ("boolean" === QC) iz[Yz++] = CC ? 195 : 194;
            else if ("bigint" === QC) {
              if (CC < BigInt(1) << BigInt(63) && CC >= -(BigInt(1) << BigInt(63))) iz[Yz++] = 211, ez.setBigInt64(Yz, CC);
              else if (CC < BigInt(1) << BigInt(64) && CC > 0) iz[Yz++] = 207, ez.setBigUint64(Yz, CC);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return RC(CC.toString());
                  if (this.useBigIntExtension && CC < BigInt(2) ** BigInt(1023) && CC > -(BigInt(2) ** BigInt(1023))) {
                    iz[Yz++] = 199, Yz++, iz[Yz++] = 66;
                    let zC, ZC = [];
                    do {
                      let QC = CC & BigInt(255);
                      zC = (QC & BigInt(128)) === (CC < BigInt(0) ? BigInt(128) : BigInt(0)), ZC.push(QC), CC >>= BigInt(8)
                    } while (CC !== BigInt(0) && CC !== BigInt(-1) || !zC);
                    iz[Yz - 2] = ZC.length;
                    for (let CC = ZC.length; CC > 0;) iz[Yz++] = Number(ZC[--CC]);
                    return
                  }
                  throw new RangeError(CC + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                iz[Yz++] = 203, ez.setFloat64(Yz, Number(CC))
              }
              Yz += 8
            } else {
              if ("undefined" !== QC) throw new Error("Unknown type: " + QC);
              this.encodeUndefinedAsNil ? iz[Yz++] = 192 : (iz[Yz++] = 212, iz[Yz++] = 0, iz[Yz++] = 0)
            }
          },
          AC = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? CC => {
            let zC;
            if (this.skipValues) {
              zC = [];
              for (let ZC in CC) "function" === typeof CC.hasOwnProperty && !CC.hasOwnProperty(ZC) || this.skipValues.includes(CC[ZC]) || zC.push(ZC)
            } else zC = Object.keys(CC);
            let ZC, QC = zC.length;
            if (QC < 16 ? iz[Yz++] = 128 | QC : QC < 65536 ? (iz[Yz++] = 222, iz[Yz++] = QC >> 8, iz[Yz++] = 255 & QC) : (iz[Yz++] = 223, ez.setUint32(Yz, QC), Yz += 4), this.coercibleKeyAsNumber)
              for (let wC = 0; wC < QC; wC++) {
                ZC = zC[wC];
                let QC = Number(ZC);
                RC(isNaN(QC) ? ZC : QC), RC(CC[ZC])
              } else
                for (let wC = 0; wC < QC; wC++) RC(ZC = zC[wC]), RC(CC[ZC])
          } : CC => {
            iz[Yz++] = 222;
            let ZC = Yz - zC;
            Yz += 2;
            let QC = 0;
            for (let zC in CC)("function" !== typeof CC.hasOwnProperty || CC.hasOwnProperty(zC)) && (RC(zC), RC(CC[zC]), QC++);
            if (QC > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            iz[ZC++ + zC] = QC >> 8, iz[ZC + zC] = 255 & QC
          },
          xC = !1 === this.useRecords ? AC : CC.progressiveRecords && !WC ? CC => {
            let ZC, wC, bC = QC.transitions || (QC.transitions = Object.create(null)),
              nC = Yz++ - zC;
            for (let fC in CC)
              if ("function" !== typeof CC.hasOwnProperty || CC.hasOwnProperty(fC)) {
                if (ZC = bC[fC], ZC) bC = ZC;
                else {
                  let oC = Object.keys(CC),
                    qC = bC;
                  bC = QC.transitions;
                  let FC = 0;
                  for (let CC = 0, zC = oC.length; CC < zC; CC++) {
                    let zC = oC[CC];
                    ZC = bC[zC], ZC || (ZC = bC[zC] = Object.create(null), FC++), bC = ZC
                  }
                  nC + zC + 1 == Yz ? (Yz--, vC(bC, oC, FC)) : eC(bC, oC, nC, FC), wC = !0, bC = qC[fC]
                }
                RC(CC[fC])
              } if (!wC) {
              let ZC = bC[Hz];
              ZC ? iz[nC + zC] = ZC : eC(bC, Object.keys(CC), nC, 0)
            }
          } : CC => {
            let zC, ZC = QC.transitions || (QC.transitions = Object.create(null)),
              wC = 0;
            for (let QC in CC)("function" !== typeof CC.hasOwnProperty || CC.hasOwnProperty(QC)) && (zC = ZC[QC], zC || (zC = ZC[QC] = Object.create(null), wC++), ZC = zC);
            let bC = ZC[Hz];
            bC ? bC >= 96 && WC ? (iz[Yz++] = 96 + (31 & (bC -= 96)), iz[Yz++] = bC >> 5) : iz[Yz++] = bC : vC(ZC, ZC.__keys__ || Object.keys(CC), wC);
            for (let QC in CC)("function" !== typeof CC.hasOwnProperty || CC.hasOwnProperty(QC)) && RC(CC[QC])
          },
          JC = "function" == typeof this.useRecords && this.useRecords,
          IC = JC ? CC => {
            JC(CC) ? xC(CC) : AC(CC)
          } : xC,
          iC = CC => {
            let ZC;
            if (CC > 16777216) {
              if (CC - zC > Iz) throw new Error("Packed buffer would be larger than maximum buffer size");
              ZC = Math.min(Iz, 4096 * Math.round(Math.max((CC - zC) * (CC > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else ZC = 1 + (Math.max(CC - zC << 2, iz.length - 1) >> 12) << 12;
            let QC = new xz(ZC);
            return ez = QC.dataView || (QC.dataView = new DataView(QC.buffer, 0, ZC)), CC = Math.min(CC, iz.length), iz.copy ? iz.copy(QC, 0, zC, CC) : QC.set(iz.slice(zC, CC)), Yz -= zC, zC = 0, hz = QC.length - 10, iz = QC
          },
          vC = (CC, zC, wC) => {
            let bC = QC.nextId;
            bC || (bC = 64), bC < NC && this.shouldShareStructure && !this.shouldShareStructure(zC) ? (bC = QC.nextOwnId, bC < MC || (bC = NC), QC.nextOwnId = bC + 1) : (bC >= MC && (bC = NC), QC.nextId = bC + 1);
            let nC = zC.highByte = bC >= 96 && WC ? bC - 96 >> 5 : -1;
            CC[Hz] = bC, CC.__keys__ = zC, QC[bC - 64] = zC, bC < NC ? (zC.isShared = !0, QC.sharedLength = bC - 63, ZC = !0, nC >= 0 ? (iz[Yz++] = 96 + (31 & bC), iz[Yz++] = nC) : iz[Yz++] = bC) : (nC >= 0 ? (iz[Yz++] = 213, iz[Yz++] = 114, iz[Yz++] = 96 + (31 & bC), iz[Yz++] = nC) : (iz[Yz++] = 212, iz[Yz++] = 114, iz[Yz++] = bC), wC && (SC += pC * wC), gC.length >= FC && (gC.shift()[Hz] = 0), gC.push(CC), RC(zC))
          },
          eC = (CC, ZC, QC, wC) => {
            let bC = iz,
              nC = Yz,
              fC = hz,
              oC = zC;
            iz = vz, Yz = 0, zC = 0, iz || (vz = iz = new xz(8192)), hz = iz.length - 10, vC(CC, ZC, wC), vz = iz;
            let qC = Yz;
            if (iz = bC, Yz = nC, hz = fC, zC = oC, qC > 1) {
              let CC = Yz + qC - 1;
              CC > hz && iC(CC);
              let ZC = QC + zC;
              iz.copyWithin(ZC + qC, ZC + 1, Yz), iz.set(vz.slice(0, qC), ZC), Yz = CC
            } else iz[QC + zC] = vz[0]
          },
          hC = CC => {
            let wC = Kz(CC, iz, zC, Yz, QC, iC, ((CC, zC, QC) => {
              if (QC) return ZC = !0;
              Yz = zC;
              let wC = iz;
              return RC(CC), PC(), wC !== iz ? {
                position: Yz,
                targetView: ez,
                target: iz
              } : Yz
            }), this);
            if (0 === wC) return IC(CC);
            Yz = wC
          }
      }
      useBuffer(CC) {
        iz = CC, ez = iz.dataView || (iz.dataView = new DataView(iz.buffer, iz.byteOffset, iz.byteLength)), Yz = 0
      }
      set position(CC) {
        Yz = CC
      }
      get position() {
        return Yz
      }
      set buffer(CC) {
        iz = CC
      }
      get buffer() {
        return iz
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function lz(CC, zC, ZC, QC) {
      let wC = CC.byteLength;
      if (wC + 1 < 256) {
        var {
          target: bC,
          position: nC
        } = ZC(4 + wC);
        bC[nC++] = 199, bC[nC++] = wC + 1
      } else if (wC + 1 < 65536) {
        var {
          target: bC,
          position: nC
        } = ZC(5 + wC);
        bC[nC++] = 200, bC[nC++] = wC + 1 >> 8, bC[nC++] = wC + 1 & 255
      } else {
        var {
          target: bC,
          position: nC,
          targetView: fC
        } = ZC(7 + wC);
        bC[nC++] = 201, fC.setUint32(nC, wC + 1), nC += 4
      }
      bC[nC++] = 116, bC[nC++] = zC, CC.buffer || (CC = new Uint8Array(CC)), bC.set(new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength), nC)
    }

    function Xz(CC, zC) {
      let ZC = CC.byteLength;
      var QC, wC;
      if (ZC < 256) {
        var {
          target: QC,
          position: wC
        } = zC(ZC + 2);
        QC[wC++] = 196, QC[wC++] = ZC
      } else if (ZC < 65536) {
        var {
          target: QC,
          position: wC
        } = zC(ZC + 3);
        QC[wC++] = 197, QC[wC++] = ZC >> 8, QC[wC++] = 255 & ZC
      } else {
        var {
          target: QC,
          position: wC,
          targetView: bC
        } = zC(ZC + 5);
        QC[wC++] = 198, bC.setUint32(wC, ZC), wC += 4
      }
      QC.set(CC, wC)
    }

    function cz(CC, zC, ZC, QC) {
      let wC = CC.length;
      switch (wC) {
        case 1:
          zC[ZC++] = 212;
          break;
        case 2:
          zC[ZC++] = 213;
          break;
        case 4:
          zC[ZC++] = 214;
          break;
        case 8:
          zC[ZC++] = 215;
          break;
        case 16:
          zC[ZC++] = 216;
          break;
        default:
          wC < 256 ? (zC[ZC++] = 199, zC[ZC++] = wC) : wC < 65536 ? (zC[ZC++] = 200, zC[ZC++] = wC >> 8, zC[ZC++] = 255 & wC) : (zC[ZC++] = 201, zC[ZC++] = wC >> 24, zC[ZC++] = wC >> 16 & 255, zC[ZC++] = wC >> 8 & 255, zC[ZC++] = 255 & wC)
      }
      return zC[ZC++] = QC, zC.set(CC, ZC), ZC += wC
    }

    function uz(CC, zC, ZC) {
      if (dz.length > 0) {
        ez.setUint32(dz.position + CC, Yz + ZC - dz.position - CC), dz.stringsPosition = Yz - CC;
        let QC = dz;
        dz = null, zC(QC[0]), zC(QC[1])
      }
    }

    function rz(CC) {
      if (CC.Class) {
        if (!CC.pack && !CC.write) throw new Error("Extension has no pack or write function");
        if (CC.pack && !CC.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        pz.unshift(CC.Class), Sz.unshift(CC)
      }! function(CC) {
        CC.unpack ? GC[CC.type] = CC.unpack : GC[CC.type] = CC
      }(CC)
    }

    function sz(CC, zC) {
      return CC.isCompatible = CC => {
        let ZC = !CC || (zC.lastNamedStructuresLength || 0) === CC.length;
        return ZC || zC._mergeStructures(CC), ZC
      }, CC
    }
    pz = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, AC], Sz = [{
      pack(CC, zC, ZC) {
        let QC = CC.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === CC.getMilliseconds()) && QC >= 0 && QC < 4294967296) {
          let {
            target: CC,
            targetView: ZC,
            position: wC
          } = zC(6);
          CC[wC++] = 214, CC[wC++] = 255, ZC.setUint32(wC, QC)
        } else if (QC > 0 && QC < 4294967296) {
          let {
            target: ZC,
            targetView: wC,
            position: bC
          } = zC(10);
          ZC[bC++] = 215, ZC[bC++] = 255, wC.setUint32(bC, 4e6 * CC.getMilliseconds() + (QC / 1e3 / 4294967296 | 0)), wC.setUint32(bC + 4, QC)
        } else if (isNaN(QC)) {
          if (this.onInvalidDate) return zC(0), ZC(this.onInvalidDate());
          let {
            target: CC,
            targetView: QC,
            position: wC
          } = zC(3);
          CC[wC++] = 212, CC[wC++] = 255, CC[wC++] = 255
        } else {
          let {
            target: ZC,
            targetView: wC,
            position: bC
          } = zC(15);
          ZC[bC++] = 199, ZC[bC++] = 12, ZC[bC++] = 255, wC.setUint32(bC, 1e6 * CC.getMilliseconds()), wC.setBigInt64(bC + 4, BigInt(Math.floor(QC)))
        }
      }
    }, {
      pack(CC, zC, ZC) {
        if (this.setAsEmptyObject) return zC(0), ZC({});
        let QC = Array.from(CC),
          {
            target: wC,
            position: bC
          } = zC(this.moreTypes ? 3 : 0);
        this.moreTypes && (wC[bC++] = 212, wC[bC++] = 115, wC[bC++] = 0), ZC(QC)
      }
    }, {
      pack(CC, zC, ZC) {
        let {
          target: QC,
          position: wC
        } = zC(this.moreTypes ? 3 : 0);
        this.moreTypes && (QC[wC++] = 212, QC[wC++] = 101, QC[wC++] = 0), ZC([CC.name, CC.message, CC.cause])
      }
    }, {
      pack(CC, zC, ZC) {
        let {
          target: QC,
          position: wC
        } = zC(this.moreTypes ? 3 : 0);
        this.moreTypes && (QC[wC++] = 212, QC[wC++] = 120, QC[wC++] = 0), ZC([CC.source, CC.flags])
      }
    }, {
      pack(CC, zC) {
        this.moreTypes ? lz(CC, 16, zC) : Xz(Az ? Buffer.from(CC) : new Uint8Array(CC), zC)
      }
    }, {
      pack(CC, zC) {
        let ZC = CC.constructor;
        ZC !== Jz && this.moreTypes ? lz(CC, Zz.indexOf(ZC.name), zC) : Xz(CC, zC)
      }
    }, {
      pack(CC, zC) {
        let {
          target: ZC,
          position: QC
        } = zC(1);
        ZC[QC] = 193
      }
    }];
    let Tz = new Ez({
      useRecords: !1
    });
    const az = Tz.pack,
      tz = Tz.pack,
      Dz = Ez,
      {
        NEVER: jz,
        ALWAYS: yz,
        DECIMAL_ROUND: Lz,
        DECIMAL_FIT: Uz
      } = Mz,
      Bz = 512,
      Oz = 1024,
      kz = 2048;
    const Vz = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!CC || "object" !== typeof CC) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const ZC = new hC(zC);
        let QC;
        const wC = CC => {
          let zC;
          QC && (CC = Buffer.concat([QC, CC]), QC = void 0);
          try {
            zC = ZC.unpackMultiple(CC)
          } catch (wC) {
            if (!wC.incomplete) throw wC;
            QC = CC.slice(wC.lastPosition), zC = wC.values
          }
          return zC
        };
        return "function" === typeof CC[Symbol.iterator] ? function*() {
          for (const zC of CC) yield* wC(zC)
        }() : "function" === typeof CC[Symbol.asyncIterator] ? async function*() {
          for await (const zC of CC) yield* wC(zC)
        }(): void 0
      },
      CZ = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (CC && "object" === typeof CC) {
          if ("function" === typeof CC[Symbol.iterator]) return function*(CC, zC) {
            const ZC = new Ez(zC);
            for (const QC of CC) yield ZC.pack(QC)
          }(CC, zC);
          if ("function" === typeof CC.then || "function" === typeof CC[Symbol.asyncIterator]) return async function*(CC, zC) {
            const ZC = new Ez(zC);
            for await (const QC of CC) yield ZC.pack(QC)
          }(CC, zC);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      zZ = !1,
      ZZ = !0
  },
  9102: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      $changes: () => SC,
      $childType: () => pC,
      $decoder: () => FC,
      $deleteByIndex: () => MC,
      $encoder: () => qC,
      $filter: () => WC,
      $getByIndex: () => NC,
      $numFields: () => eC,
      $refId: () => fC,
      $track: () => oC,
      $values: () => xC,
      ArraySchema: () => ZQ,
      Callbacks: () => Zw,
      ChangeTree: () => YZ,
      CollectionSchema: () => bQ,
      Decoder: () => LQ,
      Encoder: () => tQ,
      FieldBuilder: () => oQ,
      MapSchema: () => wQ,
      Metadata: () => Lz,
      OPERATION: () => wC,
      Reflection: () => kQ,
      ReflectionField: () => BQ,
      ReflectionType: () => OQ,
      Root: () => dQ,
      Schema: () => KQ,
      SetSchema: () => nQ,
      StateCallbackStrategy: () => zw,
      StateView: () => XQ,
      StreamSchema: () => fQ,
      TypeContext: () => sz,
      createPool: () => ww,
      decode: () => Rz,
      decodeKeyValueOperation: () => BZ,
      decodeSchemaOperation: () => UZ,
      defineCustomTypes: () => Iz,
      defineTypes: () => vQ,
      deprecated: () => IQ,
      dumpChanges: () => hQ,
      encode: () => zz,
      encodeArray: () => uZ,
      encodeIndexedEntry: () => XZ,
      encodeKeyValueOperation: () => cZ,
      encodeMapEntry: () => lZ,
      encodeSchemaOperation: () => EZ,
      og: () => SQ,
      fullStateOnly: () => RQ,
      getDecoderStateCallbacks: () => VQ,
      getEncodeDescriptor: () => CZ,
      getRawChangesCallback: () => Cw,
      isBuilder: () => qQ,
      patchOnly: () => GQ,
      registerType: () => Jz,
      schema: () => eQ,
      t: () => MQ,
      type: () => AQ,
      unreliable: () => PQ,
      view: () => pQ
    });
    const QC = 255;
    var wC;

    function bC(CC) {
      Object.defineProperty(CC, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(CC) {
      CC[CC.ADD = 128] = "ADD", CC[CC.REPLACE = 0] = "REPLACE", CC[CC.DELETE = 64] = "DELETE", CC[CC.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", CC[CC.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", CC[CC.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", CC[CC.CLEAR = 10] = "CLEAR", CC[CC.REVERSE = 15] = "REVERSE", CC[CC.MOVE = 32] = "MOVE", CC[CC.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", CC[CC.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(wC || (wC = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const nC = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const CC = "colyseus.symbolRegistry",
        zC = nC[CC] || (nC[CC] = Object.create(null));
      Symbol.for = function(CC) {
        return zC[CC] || (zC[CC] = Symbol(CC))
      }, Symbol.keyFor = function(CC) {
        for (const ZC in zC)
          if (zC[ZC] === CC) return ZC
      }
    }
    const fC = Symbol.for("$refId"),
      oC = "~track",
      qC = "~encoder",
      FC = "~decoder",
      WC = "~filter",
      NC = "~getByIndex",
      MC = "~deleteByIndex",
      gC = "~resyncPrune",
      SC = Symbol.for("$changes"),
      pC = Symbol.for("$childType"),
      PC = Symbol.for("$proxyTarget"),
      GC = "~onEncodeEnd",
      RC = "~reset",
      AC = "~onDecodeEnd",
      xC = Symbol.for("$values"),
      JC = "~builder",
      IC = "~descriptors",
      iC = "~__encodeDescriptor",
      vC = "~encoders",
      eC = "~__numFields",
      hC = "~__refTypeFieldIndexes",
      KC = "~__viewFieldIndexes",
      YC = "$__fieldIndexesByViewTag",
      dC = "~__unreliableFieldIndexes",
      mC = "~__patchOnlyFieldIndexes",
      HC = "~__fullSyncSkipIndexes",
      EC = "~__fullStateOnlyFieldIndexes",
      lC = "~__streamFieldIndexes",
      XC = "~__streamPriorities";
    let cC;
    try {
      cC = new TextEncoder
    } catch (bw) {}
    const uC = new ArrayBuffer(8),
      rC = new Int32Array(uC),
      sC = new Float32Array(uC),
      TC = new Float64Array(uC),
      aC = new BigInt64Array(uC),
      tC = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(CC, zC) {
        for (var ZC = 0, QC = 0, wC = 0, bC = CC.length; wC < bC; wC++)(ZC = CC.charCodeAt(wC)) < 128 ? QC += 1 : ZC < 2048 ? QC += 2 : ZC < 55296 || ZC >= 57344 ? QC += 3 : (wC++, QC += 4);
        return QC
      };

    function DC(CC, zC, ZC) {
      for (var QC = 0, wC = 0, bC = zC.length; wC < bC; wC++)(QC = zC.charCodeAt(wC)) < 128 ? CC[ZC.offset++] = QC : QC < 2048 ? (CC[ZC.offset] = 192 | QC >> 6, CC[ZC.offset + 1] = 128 | 63 & QC, ZC.offset += 2) : QC < 55296 || QC >= 57344 ? (CC[ZC.offset] = 224 | QC >> 12, CC[ZC.offset + 1] = 128 | QC >> 6 & 63, CC[ZC.offset + 2] = 128 | 63 & QC, ZC.offset += 3) : (wC++, QC = 65536 + ((1023 & QC) << 10 | 1023 & zC.charCodeAt(wC)), CC[ZC.offset] = 240 | QC >> 18, CC[ZC.offset + 1] = 128 | QC >> 12 & 63, CC[ZC.offset + 2] = 128 | QC >> 6 & 63, CC[ZC.offset + 3] = 128 | 63 & QC, ZC.offset += 4)
    }

    function jC(CC, zC, ZC) {
      CC[ZC.offset++] = 255 & zC
    }

    function yC(CC, zC, ZC) {
      CC[ZC.offset++] = 255 & zC, CC[ZC.offset++] = zC >> 8 & 255
    }

    function LC(CC, zC, ZC) {
      CC[ZC.offset++] = 255 & zC, CC[ZC.offset++] = zC >> 8 & 255
    }

    function UC(CC, zC, ZC) {
      CC[ZC.offset++] = 255 & zC, CC[ZC.offset++] = zC >> 8 & 255, CC[ZC.offset++] = zC >> 16 & 255, CC[ZC.offset++] = zC >> 24 & 255
    }

    function BC(CC, zC, ZC) {
      const QC = zC >> 24,
        wC = zC >> 16,
        bC = zC >> 8,
        nC = zC;
      CC[ZC.offset++] = 255 & nC, CC[ZC.offset++] = 255 & bC, CC[ZC.offset++] = 255 & wC, CC[ZC.offset++] = 255 & QC
    }

    function OC(CC, zC, ZC) {
      const QC = Math.floor(zC / Math.pow(2, 32));
      BC(CC, zC >>> 0, ZC), BC(CC, QC, ZC)
    }

    function kC(CC, zC, ZC) {
      const QC = zC / Math.pow(2, 32) | 0;
      BC(CC, zC >>> 0, ZC), BC(CC, QC, ZC)
    }

    function VC(CC, zC, ZC) {
      sC[0] = zC, UC(CC, rC[0], ZC)
    }

    function Cz(CC, zC, ZC) {
      TC[0] = zC, UC(CC, rC[0], ZC), UC(CC, rC[1], ZC)
    }
    const zz = {
        int8: jC,
        uint8: function(CC, zC, ZC) {
          CC[ZC.offset++] = 255 & zC
        },
        int16: yC,
        uint16: LC,
        int32: UC,
        uint32: BC,
        int64: OC,
        uint64: kC,
        bigint64: function(CC, zC, ZC) {
          aC[0] = BigInt.asIntN(64, zC), UC(CC, rC[0], ZC), UC(CC, rC[1], ZC)
        },
        biguint64: function(CC, zC, ZC) {
          aC[0] = BigInt.asIntN(64, zC), UC(CC, rC[0], ZC), UC(CC, rC[1], ZC)
        },
        float32: VC,
        float64: Cz,
        boolean: function(CC, zC, ZC) {
          CC[ZC.offset++] = zC ? 1 : 0
        },
        string: function(CC, zC, ZC) {
          zC || (zC = "");
          let QC = tC(zC, "utf8"),
            wC = 0;
          if (QC < 32) CC[ZC.offset++] = 160 | QC, wC = 1;
          else if (QC < 256) CC[ZC.offset++] = 217, CC[ZC.offset++] = QC, wC = 2;
          else if (QC < 65536) CC[ZC.offset++] = 218, LC(CC, QC, ZC), wC = 3;
          else {
            if (!(QC < 4294967296)) throw new Error("String too long");
            CC[ZC.offset++] = 219, BC(CC, QC, ZC), wC = 5
          }
          return DC(CC, zC, ZC), wC + QC
        },
        number: function CC(zC, ZC, QC) {
          return isNaN(ZC) ? CC(zC, 0, QC) : isFinite(ZC) ? ZC !== (0 | ZC) ? Math.abs(ZC) <= 34028235e31 && (sC[0] = ZC, Math.abs(Math.abs(sC[0]) - Math.abs(ZC)) < 1e-4) ? (zC[QC.offset++] = 202, VC(zC, ZC, QC), 5) : (zC[QC.offset++] = 203, Cz(zC, ZC, QC), 9) : ZC >= 0 ? ZC < 128 ? (zC[QC.offset++] = 255 & ZC, 1) : ZC < 256 ? (zC[QC.offset++] = 204, zC[QC.offset++] = 255 & ZC, 2) : ZC < 65536 ? (zC[QC.offset++] = 205, LC(zC, ZC, QC), 3) : ZC < 4294967296 ? (zC[QC.offset++] = 206, BC(zC, ZC, QC), 5) : (zC[QC.offset++] = 207, kC(zC, ZC, QC), 9) : ZC >= -32 ? (zC[QC.offset++] = 224 | ZC + 32, 1) : ZC >= -128 ? (zC[QC.offset++] = 208, jC(zC, ZC, QC), 2) : ZC >= -32768 ? (zC[QC.offset++] = 209, yC(zC, ZC, QC), 3) : ZC >= -2147483648 ? (zC[QC.offset++] = 210, UC(zC, ZC, QC), 5) : (zC[QC.offset++] = 211, OC(zC, ZC, QC), 9) : CC(zC, ZC > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, QC)
        },
        utf8Write: DC,
        utf8Length: tC
      },
      Zz = new ArrayBuffer(8),
      Qz = new Int32Array(Zz),
      wz = new Float32Array(Zz),
      bz = new Float64Array(Zz),
      nz = new BigUint64Array(Zz),
      fz = new BigInt64Array(Zz);

    function oz(CC, zC, ZC) {
      ZC > CC.length - zC.offset && (ZC = CC.length - zC.offset);
      for (var QC = "", wC = 0, bC = zC.offset, nC = zC.offset + ZC; bC < nC; bC++) {
        var fC = CC[bC];
        if (0 !== (128 & fC))
          if (192 !== (224 & fC))
            if (224 !== (240 & fC)) {
              if (240 !== (248 & fC)) {
                console.error("decode.utf8Read(): Invalid byte " + fC + " at offset " + bC + ". Skip to end of string: " + (zC.offset + ZC));
                break
              }(wC = (7 & fC) << 18 | (63 & CC[++bC]) << 12 | (63 & CC[++bC]) << 6 | 63 & CC[++bC]) >= 65536 ? (wC -= 65536, QC += String.fromCharCode(55296 + (wC >>> 10), 56320 + (1023 & wC))) : QC += String.fromCharCode(wC)
            } else QC += String.fromCharCode((15 & fC) << 12 | (63 & CC[++bC]) << 6 | 63 & CC[++bC]);
        else QC += String.fromCharCode((31 & fC) << 6 | 63 & CC[++bC]);
        else QC += String.fromCharCode(fC)
      }
      return zC.offset += ZC, QC
    }

    function qz(CC, zC) {
      return Fz(CC, zC) << 24 >> 24
    }

    function Fz(CC, zC) {
      return CC[zC.offset++]
    }

    function Wz(CC, zC) {
      return Nz(CC, zC) << 16 >> 16
    }

    function Nz(CC, zC) {
      return CC[zC.offset++] | CC[zC.offset++] << 8
    }

    function Mz(CC, zC) {
      return CC[zC.offset++] | CC[zC.offset++] << 8 | CC[zC.offset++] << 16 | CC[zC.offset++] << 24
    }

    function gz(CC, zC) {
      return Mz(CC, zC) >>> 0
    }

    function Sz(CC, zC) {
      return Qz[0] = Mz(CC, zC), wz[0]
    }

    function pz(CC, zC) {
      return Qz[0] = Mz(CC, zC), Qz[1] = Mz(CC, zC), bz[0]
    }

    function Pz(CC, zC) {
      const ZC = gz(CC, zC);
      return Mz(CC, zC) * Math.pow(2, 32) + ZC
    }

    function Gz(CC, zC) {
      const ZC = gz(CC, zC);
      return gz(CC, zC) * Math.pow(2, 32) + ZC
    }
    const Rz = {
        utf8Read: oz,
        int8: qz,
        uint8: Fz,
        int16: Wz,
        uint16: Nz,
        int32: Mz,
        uint32: gz,
        float32: Sz,
        float64: pz,
        int64: Pz,
        uint64: Gz,
        bigint64: function(CC, zC) {
          return Qz[0] = Mz(CC, zC), Qz[1] = Mz(CC, zC), fz[0]
        },
        biguint64: function(CC, zC) {
          return Qz[0] = Mz(CC, zC), Qz[1] = Mz(CC, zC), nz[0]
        },
        boolean: function(CC, zC) {
          return Fz(CC, zC) > 0
        },
        string: function(CC, zC) {
          const ZC = CC[zC.offset++];
          let QC;
          return ZC < 192 ? QC = 31 & ZC : 217 === ZC ? QC = Fz(CC, zC) : 218 === ZC ? QC = Nz(CC, zC) : 219 === ZC && (QC = gz(CC, zC)), oz(CC, zC, QC)
        },
        number: function(CC, zC) {
          const ZC = CC[zC.offset++];
          return ZC < 128 ? ZC : 202 === ZC ? Sz(CC, zC) : 203 === ZC ? pz(CC, zC) : 204 === ZC ? Fz(CC, zC) : 205 === ZC ? Nz(CC, zC) : 206 === ZC ? gz(CC, zC) : 207 === ZC ? Gz(CC, zC) : 208 === ZC ? qz(CC, zC) : 209 === ZC ? Wz(CC, zC) : 210 === ZC ? Mz(CC, zC) : 211 === ZC ? Pz(CC, zC) : ZC > 223 ? -1 * (255 - ZC + 1) : void 0
        },
        stringCheck: function(CC, zC) {
          const ZC = CC[zC.offset];
          return ZC < 192 && ZC > 160 || 217 === ZC || 218 === ZC || 219 === ZC
        }
      },
      Az = {},
      xz = new Map;

    function Jz(CC, zC) {
      zC.constructor && (Object.prototype.hasOwnProperty.call(zC, "constructor") && null == zC.constructor[Symbol.metadata] && bC(zC.constructor), xz.set(zC.constructor, CC), Az[CC] = zC), zC.encode && (zz[CC] = zC.encode), zC.decode && (Rz[CC] = zC.decode)
    }

    function Iz(CC) {
      for (const zC in CC) Jz(zC, CC[zC]);
      return CC => AQ(CC)
    }
    const iz = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function vz() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function ez(CC) {
      return CC._stream ??= vz()
    }

    function hz(CC, zC, ZC) {
      0 === zC.activeViews.size && ez(CC).broadcastPending.add(ZC)
    }

    function Kz(CC, zC, ZC, QC) {
      const bC = CC._stream;
      if (void 0 === bC) return !0;
      let nC = !1;
      return bC.broadcastPending.delete(QC) ? nC = !0 : bC.sentBroadcast.delete(QC) && bC.broadcastDeletes.add(QC), zC.forEachActiveView((CC => {
        const zC = bC.pendingByView.get(CC.id);
        if (zC?.has(QC)) return zC.delete(QC), void(nC = !0);
        const fC = bC.sentByView.get(CC.id);
        if (fC?.has(QC)) {
          fC.delete(QC);
          let zC = CC.changes.get(ZC);
          void 0 === zC && (zC = new Map, CC.changes.set(ZC, zC)), zC.set(QC, wC.DELETE)
        }
      })), nC
    }

    function Yz(CC, zC) {
      const ZC = CC._stream?.pendingByView;
      if (void 0 === ZC) return !1;
      for (const [QC, wC] of ZC)
        if (wC.size > 0 && void 0 !== zC.activeViews.get(QC)?.deref()) return !0;
      return !1
    }

    function dz(CC) {
      const zC = CC._stream;
      return void 0 !== zC && (zC.broadcastPending.size > 0 || zC.broadcastDeletes.size > 0)
    }

    function mz(CC, zC, ZC) {
      const QC = ez(CC);
      let wC = QC.pendingByView.get(zC);
      void 0 === wC && (wC = new Set, QC.pendingByView.set(zC, wC)), wC.add(ZC)
    }

    function Hz(CC, zC) {
      const ZC = CC._stream;
      void 0 !== ZC && (ZC.pendingByView.delete(zC), ZC.sentByView.delete(zC), ZC.priorityByView?.delete(zC))
    }
    const Ez = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function lz(CC) {
      if (null == CC || "object" !== typeof CC) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: zC,
        max: ZC
      } = CC;
      if ("number" !== typeof zC || "number" !== typeof ZC || !(ZC > zC) || !Number.isFinite(zC) || !Number.isFinite(ZC)) throw new Error(`t.quantized(): require finite min < max (got min=${zC}, max=${ZC}).`);
      const QC = CC.bits ?? 16;
      if (8 !== QC && 16 !== QC && 32 !== QC) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${QC}).`);
      const wC = CC.mode ?? "clamp";
      if ("clamp" !== wC && "wrap" !== wC) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(wC)}).`);
      const bC = "wrap" === wC,
        nC = Math.pow(2, QC);
      return {
        min: zC,
        max: ZC,
        bits: QC,
        wrap: bC,
        wire: Ez[QC],
        range: ZC - zC,
        span: bC ? nC : zC === -ZC ? nC - 2 : nC - 1
      }
    }

    function Xz(CC) {
      return null !== CC && "object" === typeof CC && void 0 !== CC.quantized
    }

    function cz(CC, zC) {
      if (CC.wrap) {
        if (!Number.isFinite(zC)) return 0;
        const ZC = CC.range;
        let QC = (zC - CC.min) % ZC;
        QC < 0 && (QC += ZC);
        const wC = CC.span;
        return Math.floor(QC / ZC * wC + .5) % wC
      }
      if (zC !== zC) return 0;
      const ZC = zC < CC.min ? CC.min : zC > CC.max ? CC.max : zC;
      return Math.floor((ZC - CC.min) / CC.range * CC.span + .5)
    }

    function uz(CC, zC) {
      return CC.min + zC / CC.span * CC.range
    }

    function rz(CC) {
      const zC = zz[CC.wire];
      return (ZC, QC, wC) => zC(ZC, cz(CC, QC), wC)
    }
    class sz {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(CC) {
        const zC = Object.getPrototypeOf(CC);
        if (zC !== KQ) {
          let ZC = sz.inheritedTypes.get(zC);
          ZC || (ZC = new Set, sz.inheritedTypes.set(zC, ZC)), ZC.add(CC)
        }
      }
      static cache(CC) {
        let zC = sz.cachedContexts.get(CC);
        return zC || (zC = new sz(CC), sz.cachedContexts.set(CC, zC)), zC
      }
      constructor(CC) {
        CC && this.discoverTypes(CC)
      }
      has(CC) {
        return this.schemas.has(CC)
      }
      get(CC) {
        return this.types[CC]
      }
      add(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(CC) && (this.types[zC] = CC, null == CC[Symbol.metadata] && Lz.initialize(CC), this.schemas.set(CC, zC), !0)
      }
      getTypeId(CC) {
        return this.schemas.get(CC)
      }
      discoverTypes(CC) {
        if (!this.add(CC)) return;
        sz.inheritedTypes.get(CC)?.forEach((CC => {
          this.discoverTypes(CC)
        }));
        let zC = CC;
        for (;
          (zC = Object.getPrototypeOf(zC)) && zC !== KQ && zC !== Function.prototype;) this.discoverTypes(zC);
        const ZC = CC[Symbol.metadata];
        (ZC[KC] || ZC[lC]) && (this.hasFilters = !0);
        for (const QC in ZC) {
          const CC = ZC[QC].type;
          if ("string" !== typeof CC && !Xz(CC))
            if ("function" === typeof CC) this.discoverTypes(CC);
            else {
              const zC = Object.values(CC)[0];
              if ("string" === typeof zC) continue;
              this.discoverTypes(zC)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Tz(CC) {
      const zC = tz(CC);
      return zC ? {
        complexTypeKlass: Az[zC],
        childType: CC[zC]
      } : {
        complexTypeKlass: !1,
        childType: CC
      }
    }

    function az(CC, zC) {
      const ZC = Dz(CC),
        QC = tz(ZC),
        wC = QC && tz(ZC[QC]);
      if (wC) throw new Error(`${zC?`${zC}: `:""}@colyseus/schema: nested collections are not supported ("${QC}" of "${wC}"). Collections can only hold primitive types or Schema classes, wrap the inner ${wC} in a Schema class.`);
      return ZC
    }

    function tz(CC) {
      return "object" === typeof CC && null !== CC ? Object.keys(CC).find((CC => void 0 !== Az[CC])) : void 0
    }

    function Dz(CC) {
      if ("object" !== typeof CC || null === CC) return CC;
      if (Array.isArray(CC)) return {
        array: Dz(CC[0])
      };
      const zC = function(CC) {
        const zC = Object.keys(CC),
          ZC = zC.filter((CC => /\d+/.test(CC)));
        if (ZC.length > 0 && ZC.length === zC.length / 2 && CC[CC[ZC[0]]] == ZC[0]) return "number";
        if (zC.length > 0 && zC.every((zC => CC[zC] === zC))) return "string"
      }(CC);
      if (zC) return zC;
      if (Xz(CC)) return "string" === typeof CC.quantized.wire ? CC : {
        quantized: lz(CC.quantized)
      };
      if (void 0 !== CC.type) return Dz(CC.type);
      const ZC = tz(CC);
      return ZC && (CC[ZC] = Dz(CC[ZC])), CC
    }
    const jz = [hC, dC, mC, HC, EC, lC, vC];

    function yz(CC, zC, ZC) {
      CC[zC] || Object.defineProperty(CC, zC, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), CC[zC].push(ZC)
    }
    const Lz = {
        addField(CC, zC, ZC, QC, wC) {
          if (zC >= 63) throw new Error(`Can't define field '${ZC}'.\nSchema instances may only have up to 63 fields.`);
          CC[zC] = Object.assign(CC[zC] || {}, {
            type: QC,
            index: zC,
            name: ZC
          }), Object.defineProperty(CC, IC, {
            value: CC[IC] || {},
            enumerable: !1,
            configurable: !0
          }), CC[IC][ZC] = wC || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(CC, eC, {
            value: zC,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(CC, ZC, {
            value: zC,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof CC[zC].type || Xz(CC[zC].type) || (void 0 === CC[hC] && Object.defineProperty(CC, hC, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), CC[hC].push(zC));
          const bC = CC[zC].type;
          if (bC && "object" === typeof bC && void 0 !== bC.stream) {
            if (void 0 !== bC.array) throw new Error(iz);
            CC[zC].stream = !0, CC[lC] || Object.defineProperty(CC, lC, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), CC[lC].includes(zC) || CC[lC].push(zC);
            const wC = QC?.priority;
            "function" === typeof wC && Lz.setStreamPriority(CC, ZC, wC)
          }
        },
        setTag(CC, zC, ZC) {
          const QC = CC[zC];
          if (CC[QC].tag = ZC, CC[KC] || (Object.defineProperty(CC, KC, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(CC, YC, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), CC[KC].push(QC), ZC < 0) CC[YC][ZC] || (CC[YC][ZC] = []), CC[YC][ZC].push(QC);
          else
            for (let wC = ZC; wC > 0; wC &= wC - 1) {
              const zC = wC & -wC;
              CC[YC][zC] || (CC[YC][zC] = []), CC[YC][zC].push(QC)
            }
        },
        setUnreliable(CC, zC) {
          const ZC = CC[zC];
          if ("string" !== typeof CC[ZC].type) throw new Error(`@unreliable cannot be applied to ref-type field "${zC}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          CC[ZC].unreliable = !0, CC[dC] || Object.defineProperty(CC, dC, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), CC[dC].push(ZC)
        },
        setPatchOnly(CC, zC) {
          const ZC = CC[zC];
          if (CC[ZC].fullStateOnly) throw new Error(`field "${zC}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          CC[ZC].patchOnly = !0, yz(CC, mC, ZC), yz(CC, HC, ZC)
        },
        setDeprecated(CC, zC) {
          const ZC = CC[zC];
          CC[ZC].deprecated = !0, yz(CC, HC, ZC), Object.defineProperty(CC, ZC, {
            value: CC[ZC],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(CC, zC) {
          const ZC = CC[zC];
          if (CC[ZC].patchOnly) throw new Error(`field "${zC}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          CC[ZC].fullStateOnly = !0, yz(CC, EC, ZC)
        },
        setStream(CC, zC) {
          const ZC = CC[zC];
          CC[ZC].stream = !0, CC[lC] || Object.defineProperty(CC, lC, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), CC[lC].push(ZC)
        },
        setStreamPriority(CC, zC, ZC) {
          const QC = CC[zC];
          CC[XC] || Object.defineProperty(CC, XC, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), CC[XC][QC] = ZC
        },
        getStreamPriority: (CC, zC) => CC?.[XC]?.[zC],
        defineField(CC, zC, ZC, QC, wC) {
          const bC = az(wC, `${CC.name}.${QC}`),
            {
              complexTypeKlass: nC,
              childType: fC
            } = Tz(bC);
          Lz.addField(zC, ZC, QC, bC, JQ(QC, ZC, fC, nC)), zC[IC][QC] && Object.defineProperty(CC.prototype, QC, zC[IC][QC]), ("string" === typeof bC || Xz(bC)) && (zC[vC] || Object.defineProperty(zC, vC, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), zC[vC][ZC] = "string" === typeof bC ? zz[bC] : rz(bC.quantized))
        },
        setFields(CC, zC) {
          const ZC = CC.prototype.constructor;
          sz.register(ZC);
          const QC = Object.getPrototypeOf(ZC),
            wC = QC && QC[Symbol.metadata],
            bC = Lz.initialize(ZC);
          ZC[oC] || (ZC[oC] = KQ[oC]), ZC[qC] || (ZC[qC] = KQ[qC]), ZC[FC] || (ZC[FC] = KQ[FC]), ZC.prototype.toJSON || (ZC.prototype.toJSON = KQ.prototype.toJSON);
          let nC = bC[eC] ?? (wC && wC[eC]) ?? -1;
          nC++, bC[vC] || Object.defineProperty(bC, vC, {
            value: wC?.[vC] ? [...wC[vC]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const fC in zC) {
            if (void 0 !== bC[fC]) throw new Error(`@colyseus/schema: Duplicate '${fC}' definition on '${ZC.name||"(anonymous)"}'.`);
            Lz.defineField(ZC, bC, nC, fC, zC[fC]), nC++
          }
          return CC
        },
        isDeprecated: (CC, zC) => !0 === CC[zC].deprecated,
        initialize(CC) {
          const zC = Object.getPrototypeOf(CC),
            ZC = zC[Symbol.metadata];
          let QC = CC[Symbol.metadata] ?? Object.create(null);
          if (zC !== KQ && QC === ZC && (QC = Object.create(null), ZC)) {
            Object.setPrototypeOf(QC, ZC), Object.defineProperty(QC, eC, {
              value: ZC[eC],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== ZC[KC] && (Object.defineProperty(QC, KC, {
              value: [...ZC[KC]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(QC, YC, {
              value: {
                ...ZC[YC]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const CC of jz) {
              const zC = ZC[CC];
              void 0 !== zC && Object.defineProperty(QC, CC, {
                value: [...zC],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(QC, IC, {
              value: {
                ...ZC[IC]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(CC, Symbol.metadata, {
            value: QC,
            writable: !1,
            configurable: !0
          }), QC
        },
        isValidInstance: CC => CC.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(CC.constructor[Symbol.metadata], eC),
        getFields(CC) {
          const zC = CC[Symbol.metadata],
            ZC = {};
          for (let QC = 0; QC <= zC[eC]; QC++) ZC[zC[QC].name] = zC[QC].type;
          return ZC
        },
        hasViewTagAtIndex: (CC, zC) => CC?.[KC]?.includes(zC),
        hasUnreliableAtIndex: (CC, zC) => CC?.[dC]?.includes(zC),
        hasPatchOnlyAtIndex: (CC, zC) => CC?.[mC]?.includes(zC),
        hasFullStateOnlyAtIndex: (CC, zC) => CC?.[EC]?.includes(zC),
        hasStreamAtIndex: (CC, zC) => CC?.[lC]?.includes(zC)
      },
      Uz = (CC, zC, ZC) => CC(zC, ZC);
    class Bz {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(CC) {
        this.ops = new Uint8Array(Math.max(CC + 1, 1))
      }
      record(CC, zC) {
        const ZC = this.ops[CC];
        0 === ZC ? this.ops[CC] = zC : (ZC === wC.DELETE || ZC === wC.ADD && zC === wC.DELETE_AND_ADD) && (this.ops[CC] = wC.DELETE_AND_ADD), CC < 32 ? this.dirtyLow |= 1 << CC : this.dirtyHigh |= 1 << CC - 32
      }
      recordDelete(CC, zC) {
        this.ops[CC] = zC, CC < 32 ? this.dirtyLow |= 1 << CC : this.dirtyHigh |= 1 << CC - 32
      }
      recordRaw(CC, zC) {
        this.record(CC, zC)
      }
      operationAt(CC) {
        const zC = this.ops[CC];
        return 0 === zC ? void 0 : zC
      }
      setOperationAt(CC, zC) {
        this.ops[CC] = zC
      }
      forEach(CC) {
        this.forEachWithCtx(CC, Uz)
      }
      forEachWithCtx(CC, zC) {
        let ZC = this.dirtyLow,
          QC = this.dirtyHigh;
        const wC = this.ops;
        for (; 0 !== ZC;) {
          const QC = ZC & -ZC,
            bC = 31 - Math.clz32(QC);
          ZC ^= QC, zC(CC, bC, wC[bC])
        }
        for (; 0 !== QC;) {
          const ZC = QC & -QC,
            bC = 31 - Math.clz32(ZC) + 32;
          QC ^= ZC, zC(CC, bC, wC[bC])
        }
      }
      size() {
        return kz(this.dirtyLow) + kz(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Oz {
      rg = new Map;
      pureOps = [];
      record(CC, zC) {
        const ZC = this.rg.get(CC);
        void 0 === ZC ? this.rg.set(CC, zC) : (ZC === wC.DELETE || ZC === wC.ADD && zC === wC.DELETE_AND_ADD) && this.rg.set(CC, wC.DELETE_AND_ADD)
      }
      recordDelete(CC, zC) {
        this.rg.set(CC, zC)
      }
      recordRaw(CC, zC) {
        this.rg.set(CC, zC)
      }
      recordPure(CC) {
        this.pureOps.push([this.rg.size, CC])
      }
      operationAt(CC) {
        return this.rg.get(CC)
      }
      setOperationAt(CC, zC) {
        this.rg.has(CC) && this.rg.set(CC, zC)
      }
      forEach(CC) {
        this.forEachWithCtx(CC, Uz)
      }
      forEachWithCtx(CC, zC) {
        const ZC = this.pureOps;
        if (ZC.length > 0) {
          let QC = 0,
            wC = 0;
          for (const [bC, nC] of this.rg) {
            for (; QC < ZC.length && ZC[QC][0] <= wC;) {
              const wC = ZC[QC++][1];
              zC(CC, -wC, wC)
            }
            zC(CC, bC, nC), wC++
          }
          for (; QC < ZC.length;) {
            const wC = ZC[QC++][1];
            zC(CC, -wC, wC)
          }
        } else
          for (const [QC, wC] of this.rg) zC(CC, QC, wC)
      }
      size() {
        return this.rg.size + this.pureOps.length
      }
      has() {
        return this.rg.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.rg.clear(), this.pureOps.length = 0
      }
      shift(CC) {
        const zC = new Map;
        for (const [ZC, QC] of this.rg) zC.set(ZC + CC, QC);
        this.rg = zC
      }
    }

    function kz(CC) {
      return 16843009 * ((CC = (858993459 & (CC -= CC >>> 1 & 1431655765)) + (CC >>> 2 & 858993459)) + (CC >>> 4) & 252645135) >>> 24
    }

    function Vz(CC) {
      if (void 0 === CC) return 0;
      let zC = 0;
      for (let ZC = 0, QC = CC.length; ZC < QC; ZC++) {
        const QC = CC[ZC];
        QC < 32 && (zC |= 1 << QC)
      }
      return zC
    }

    function CZ(CC) {
      const zC = CC.constructor;
      if (Object.prototype.hasOwnProperty.call(zC, iC)) return zC[iC];
      const ZC = zC[Symbol.metadata],
        QC = Lz.isValidInstance(CC),
        wC = (ZC?.[KC]?.length ?? 0) > 0,
        bC = function(CC) {
          const zC = [],
            ZC = [],
            QC = [],
            wC = [],
            bC = CC?.[eC];
          if (void 0 === bC) return {
            names: zC,
            types: ZC,
            tags: QC,
            encoders: wC
          };
          const nC = CC[vC];
          for (let fC = 0; fC <= bC; fC++) {
            const bC = CC[fC];
            void 0 !== bC ? (zC[fC] = bC.name, ZC[fC] = bC.type, QC[fC] = bC.tag, wC[fC] = nC?.[fC]) : (zC[fC] = void 0, ZC[fC] = void 0, QC[fC] = void 0, wC[fC] = void 0)
          }
          return {
            names: zC,
            types: ZC,
            tags: QC,
            encoders: wC
          }
        }(ZC),
        nC = QC && !wC ? void 0 : zC[WC],
        fC = {
          encoder: zC[qC],
          filter: nC,
          metadata: ZC,
          isSchema: QC,
          filterBitmask: QC ? Vz(ZC?.[KC]) : 0,
          hasAnyFullStateOnly: (ZC?.[EC]?.length ?? 0) > 0,
          hasAnyUnreliable: (ZC?.[dC]?.length ?? 0) > 0,
          hasAnyStream: (ZC?.[lC]?.length ?? 0) > 0,
          hasAnyView: wC,
          fullStateOnlyBitmask: Vz(ZC?.[EC]),
          unreliableBitmask: Vz(ZC?.[dC]),
          streamBitmask: Vz(ZC?.[lC]),
          names: bC.names,
          types: bC.types,
          tags: bC.tags,
          encoders: bC.encoders
        };
      return Object.defineProperty(zC, iC, {
        value: fC,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), fC
    }

    function zZ(CC, zC) {
      if (void 0 !== CC.parentRef && zC(CC.parentRef, CC._parentIndex)) return !0;
      for (let ZC = CC.extraParents; void 0 !== ZC; ZC = ZC.next)
        if (zC(ZC.ref, ZC.index)) return !0;
      return !1
    }
    const ZZ = (CC, zC) => {
        CC.isFieldUnreliable(zC) ? CC.ensureUnreliableRecorder().record(zC, wC.ADD) : CC.record(zC, wC.ADD)
      },
      QZ = (CC, zC) => CC(zC);

    function wZ(CC, zC, ZC) {
      const QC = CC.refTarget;
      if (void 0 !== QC[pC]) {
        if (CC.isPatchOnly) return;
        if (Array.isArray(QC.items)) {
          const CC = QC.items;
          for (let QC = 0, wC = CC.length; QC < wC; QC++) void 0 !== CC[QC] && ZC(zC, QC)
        } else if (void 0 !== QC.journal)
          for (const [CC, wC] of QC.journal.keyByIndex) QC.$items.has(wC) && ZC(zC, CC);
        else if (void 0 !== QC.$items)
          for (const CC of QC.$items.keys()) ZC(zC, CC)
      } else {
        const wC = CC.metadata;
        if (!wC) return;
        const bC = wC[eC] ?? -1,
          nC = wC[HC],
          fC = CC.encDescriptor.names;
        for (let CC = 0; CC <= bC; CC++) {
          const wC = fC[CC];
          if (void 0 === wC) continue;
          if (nC && nC.includes(CC)) continue;
          const bC = QC[wC];
          void 0 !== bC && null !== bC && ZC(zC, CC)
        }
      }
    }

    function bZ(CC, zC, ZC, QC) {
      ! function(CC, zC, ZC) {
        if (!zC) return;
        const QC = zC[SC],
          wC = !QC._isSchema;
        let bC;
        wC ? (zC = QC.parent, ZC = QC.parentIndex, bC = zC?.[SC].metadata) : bC = QC.metadata;
        const nC = (bC?.[mC]?.includes(ZC) ? iZ : 0) | (bC?.[EC]?.includes(ZC) ? vZ : 0),
          fC = QC.flags & KZ | nC,
          oC = CC.flags;
        CC.flags = oC | fC;
        fC & ~oC & vZ && (CC.reset(), CC.unreliableRecorder?.reset());
        const qC = CC.root?.types;
        if (!qC?.hasFilters) return;
        const FC = bC?.[KC]?.includes(ZC) ?? !1,
          WC = bC?.[lC]?.includes(ZC) ?? !1,
          NC = QC.isFiltered || FC || WC;
        if (CC.isFiltered = NC, WC && !wC) {
          CC.isStreamCollection = !0;
          const zC = ez(CC.ref);
          if (void 0 === zC.priority) {
            const CC = Lz.getStreamPriority(bC, ZC);
            void 0 !== CC && (zC.priority = CC)
          }
          CC.root?.registerStream(CC.ref)
        }
        if (NC) {
          const zC = fZ(CC);
          CC.isVisibilitySharedWithParent = QC.isFiltered && zC && !WC && (!FC || wC && bC[ZC].tag !== gQ)
        }
      }(CC, zC, ZC), CC.isFullStateOnly || (CC.has() && CC.root?.enqueueChangeTree(CC), CC.unreliableRecorder?.has() && CC.root?.enqueueUnreliable(CC), CC.has() || CC.unreliableRecorder?.has() || CC.root?.enqueueChangeTree(CC))
    }

    function nZ(CC) {
      const zC = CC.pendingFilterRefresh;
      for (let ZC = 0; ZC < zC.length; ZC++) {
        const CC = zC[ZC];
        0 !== (CC.flags & hZ) && oZ(CC)
      }
      zC.length = 0
    }

    function fZ(CC) {
      return CC._isSchema || "string" !== typeof CC.refTarget[pC]
    }

    function oZ(CC) {
      CC.flags &= ~hZ;
      const zC = CC.root;
      if (void 0 === zC || void 0 === CC.parentRef) return;
      const ZC = fZ(CC);
      let QC = MZ(CC, CC.parentRef, CC._parentIndex, ZC);
      for (let bC = CC.extraParents; void 0 !== bC && QC !== NZ; bC = bC.next) QC |= MZ(CC, bC.ref, bC.index, ZC);
      if (0 === QC) return;
      CC.isVisibilitySharedWithParent = 0 !== (QC & WZ);
      const wC = 0 === (QC & FZ);
      wC !== CC.isFiltered && (CC.isFiltered = wC, wC || CC.isFullStateOnly || (CC.forEachLiveWithCtx(CC, ZZ), CC.has() && zC.enqueueChangeTree(CC), CC.unreliableRecorder?.has() && zC.enqueueUnreliable(CC)), CC.forEachChildWithCtx(CC, gZ))
    }
    const qZ = 1,
      FZ = 2,
      WZ = 4,
      NZ = qZ | FZ | WZ;

    function MZ(CC, zC, ZC, QC) {
      const wC = zC[SC];
      if (wC.root !== CC.root || ! function(CC, zC, ZC) {
          const QC = zC.refTarget;
          if (zC.isArray) {
            const zC = QC.items,
              wC = zC[ZC];
            if (void 0 !== wC && wC[SC] === CC) return !0;
            for (let ZC = 0, QC = zC.length; ZC < QC; ZC++) {
              const QC = zC[ZC];
              if (void 0 !== QC && QC[SC] === CC) return !0
            }
            return !1
          }
          const wC = zC.getValue(ZC);
          return void 0 !== wC && wC[SC] === CC
        }(CC, wC, ZC)) return 0;
      wC.flags & hZ && oZ(wC);
      let bC = qZ;
      if (wC._isSchema) {
        void 0 !== wC.encDescriptor.tags[ZC] || wC.isFieldStream(ZC) || (wC.isFiltered ? QC && (bC |= WZ) : bC |= FZ)
      } else if (wC.isFiltered) {
        if (QC && !wC.isStreamCollection) {
          const CC = wC.parent?.[SC];
          (CC?._isSchema ? CC.encDescriptor.tags[wC.parentIndex] : void 0) !== gQ && (bC |= WZ)
        }
      } else bC |= FZ;
      return bC
    }
    const gZ = (CC, zC, ZC) => {
      oZ(zC)
    };

    function SZ(CC, zC, ZC, QC) {
      if (CC.addParent(zC, QC), !ZC) return;
      const wC = ZC.add(CC);
      ZC !== CC.root && (CC.root = ZC, bZ(CC, zC, QC));
      const bC = zC?.[SC];
      if (void 0 !== bC && void 0 !== bC.subscribedViews && void 0 !== zC[pC] && function(CC, zC, ZC, QC) {
          const wC = CC.subscribedViews;
          if (void 0 === wC) return;
          const bC = CC.isStreamCollection,
            nC = bC ? CC.ref : void 0,
            fC = bC ? void 0 : ZC[SC];
          for (let oC = 0, qC = wC.length; oC < qC; oC++) {
            let CC = wC[oC];
            for (; 0 !== CC;) {
              const ZC = CC & -CC;
              CC ^= ZC;
              const qC = 32 * oC + (31 - Math.clz32(ZC)),
                FC = QC.activeViews.get(qC),
                WC = FC?.deref();
              void 0 !== WC ? bC ? mz(nC, qC, zC) : void 0 !== fC && WC.markVisible(fC) : wC[oC] &= ~ZC
            }
          }
        }(bC, QC, CC.ref, ZC), wC) {
        let zC = RZ[AZ];
        void 0 === zC && (zC = {
          parentRef: void 0,
          root: void 0
        }, RZ[AZ] = zC), zC.parentRef = CC.ref, zC.root = ZC, AZ++, PZ(CC, zC, xZ), AZ--
      }
    }

    function pZ(CC, zC, ZC) {
      CC(zC, ZC)
    }

    function PZ(CC, zC, ZC) {
      const QC = CC.refTarget;
      if (QC[pC]) {
        if ("string" !== typeof QC[pC]) {
          const CC = QC.items;
          if (void 0 !== CC)
            for (let QC = 0, wC = CC.length; QC < wC; QC++) {
              const wC = CC[QC];
              wC && ZC(zC, wC[SC], QC)
            } else {
              const CC = QC.$items,
                wC = QC._collectionIndexes;
              for (const QC of CC.keys()) {
                const bC = CC.get(QC);
                bC && ZC(zC, bC[SC], wC?.[QC] ?? QC)
              }
            }
        }
      } else {
        const wC = CC.metadata,
          bC = wC?.[hC];
        if (!bC) return;
        const nC = CC.encDescriptor.names;
        for (let CC = 0, fC = bC.length; CC < fC; CC++) {
          const wC = bC[CC],
            fC = QC[nC[wC]];
          fC && ZC(zC, fC[SC], wC)
        }
      }
    }

    function GZ(CC, zC, ZC) {
      zC.root !== CC ? zC.setRoot(CC) : CC.add(zC)
    }
    const RZ = [];
    let AZ = 0;

    function xZ(CC, zC, ZC) {
      if (zC.root === CC.root) return CC.root.add(zC), void CC.root.moveNextToParent(zC);
      zC.setParent(CC.parentRef, CC.root, ZC)
    }

    function JZ(CC, zC, ZC) {
      const QC = (3 & ZC) << 3;
      return ZC < 4 ? CC >>> QC & 255 : zC >>> QC & 255
    }
    const IZ = (CC, zC, ZC) => CC(zC, ZC);
    const iZ = 16,
      vZ = 32,
      eZ = 128,
      hZ = 256,
      KZ = iZ | vZ;
    class YZ {
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
      set isFiltered(CC) {
        this.flags = CC ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(CC) {
        this.flags = CC ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(CC) {
        this.flags = CC ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(CC) {
        this.flags = CC ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & iZ)
      }
      set isPatchOnly(CC) {
        this.flags = CC ? this.flags | iZ : this.flags & ~iZ
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & vZ)
      }
      set isFullStateOnly(CC) {
        this.flags = CC ? this.flags | vZ : this.flags & ~vZ
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(CC) {
        this.flags = CC ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & eZ)
      }
      set needsRestage(CC) {
        this.flags = CC ? this.flags | eZ : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Bz(this.metadata?.[eC] ?? 0) : new Oz), this.unreliableRecorder
      }
      isFieldUnreliable(CC) {
        const zC = this.encDescriptor;
        return !!zC.hasAnyUnreliable && (CC < 32 ? 0 !== (zC.unreliableBitmask & 1 << CC) : Lz.hasUnreliableAtIndex(this.metadata, CC))
      }
      isFieldFullStateOnly(CC) {
        if (this.isFullStateOnly) return !0;
        const zC = this.encDescriptor;
        return !!zC.hasAnyFullStateOnly && (CC < 32 ? 0 !== (zC.fullStateOnlyBitmask & 1 << CC) : Lz.hasFullStateOnlyAtIndex(this.metadata, CC))
      }
      isFieldStream(CC) {
        const zC = this.encDescriptor;
        return !!zC.hasAnyStream && (CC < 32 ? 0 !== (zC.streamBitmask & 1 << CC) : Lz.hasStreamAtIndex(this.metadata, CC))
      }
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC;
        this.ref = CC, this.refTarget = zC;
        const ZC = CZ(CC);
        this.encDescriptor = ZC, this.metadata = ZC.metadata;
        const QC = ZC.isSchema;
        if (this._isSchema = QC, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, QC) {
          const CC = this.metadata?.[eC] ?? 0;
          CC > 7 && (this.ops = new Uint8Array(CC + 1))
        } else this.collDirty = new Map
      }
      _opAt(CC) {
        const zC = this.ops;
        if (void 0 !== zC) return zC[CC];
        const ZC = (3 & CC) << 3;
        return CC < 4 ? this.opsLow >>> ZC & 255 : this.opsHigh >>> ZC & 255
      }
      _opPut(CC, zC) {
        const ZC = this.ops;
        if (void 0 !== ZC) return void(ZC[CC] = zC);
        const QC = (3 & CC) << 3,
          wC = ~(255 << QC);
        CC < 4 ? this.opsLow = this.opsLow & wC | zC << QC : this.opsHigh = this.opsHigh & wC | zC << QC
      }
      _markDirty(CC) {
        CC < 32 ? this.dirtyLow |= 1 << CC : this.dirtyHigh |= 1 << CC - 32
      }
      record(CC, zC) {
        if (this._isSchema) {
          const ZC = this._opAt(CC);
          0 === ZC ? this._opPut(CC, zC) : (ZC === wC.DELETE || ZC === wC.ADD && zC === wC.DELETE_AND_ADD) && this._opPut(CC, wC.DELETE_AND_ADD), this._markDirty(CC)
        } else {
          const ZC = this.collDirty,
            QC = ZC.get(CC);
          let bC;
          bC = void 0 === QC ? zC : QC === wC.DELETE || QC === wC.ADD && zC === wC.DELETE_AND_ADD ? wC.DELETE_AND_ADD : QC, ZC.set(CC, bC)
        }
      }
      recordDelete(CC, zC) {
        this._isSchema ? (this._opPut(CC, zC), this._markDirty(CC)) : this.collDirty.set(CC, zC)
      }
      recordRaw(CC, zC) {
        this._isSchema ? (this._opPut(CC, zC), this._markDirty(CC)) : this.collDirty.set(CC, zC)
      }
      recordPure(CC) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, CC])
      }
      operationAt(CC) {
        if (this._isSchema) {
          const zC = this._opAt(CC);
          return 0 === zC ? void 0 : zC
        }
        return this.collDirty.get(CC)
      }
      setOperationAt(CC, zC) {
        if (this._isSchema) this._opPut(CC, zC);
        else {
          const ZC = this.collDirty;
          ZC.has(CC) && ZC.set(CC, zC)
        }
      }
      forEach(CC) {
        this.forEachWithCtx(CC, IZ)
      }
      forEachWithCtx(CC, zC) {
        if (this._isSchema) {
          let ZC = this.dirtyLow,
            QC = this.dirtyHigh;
          const wC = this.ops;
          if (void 0 !== wC) {
            for (; 0 !== ZC;) {
              const QC = ZC & -ZC,
                bC = 31 - Math.clz32(QC);
              ZC ^= QC, zC(CC, bC, wC[bC])
            }
            for (; 0 !== QC;) {
              const ZC = QC & -QC,
                bC = 31 - Math.clz32(ZC) + 32;
              QC ^= ZC, zC(CC, bC, wC[bC])
            }
          } else {
            const QC = this.opsLow,
              wC = this.opsHigh;
            for (; 0 !== ZC;) {
              const bC = ZC & -ZC,
                nC = 31 - Math.clz32(bC);
              ZC ^= bC, zC(CC, nC, JZ(QC, wC, nC))
            }
          }
          return
        }
        const ZC = this.collDirty,
          QC = this.collPureOps;
        if (void 0 !== QC && QC.length > 0) {
          let wC = 0,
            bC = 0;
          for (const [nC, fC] of ZC) {
            for (; wC < QC.length && QC[wC][0] <= bC;) {
              const ZC = QC[wC++][1];
              zC(CC, -ZC, ZC)
            }
            zC(CC, nC, fC), bC++
          }
          for (; wC < QC.length;) {
            const ZC = QC[wC++][1];
            zC(CC, -ZC, ZC)
          }
        } else
          for (const [wC, bC] of ZC) zC(CC, wC, bC)
      }
      size() {
        return this._isSchema ? kz(this.dirtyLow) + kz(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(CC, zC) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const ZC = this.collDirty,
          QC = new Map,
          bC = !this.paused && !this.isFullStateOnly;
        if (CC > 0)
          for (const [wC, nC] of ZC) wC < CC && QC.set(wC, nC);
        if (bC)
          for (let nC = 0; nC < zC; nC++) QC.set(CC + nC, wC.ADD);
        for (const [wC, nC] of ZC) wC >= CC && QC.set(wC + zC, nC);
        this.collDirty = QC, bC && this.root?.enqueueChangeTree(this)
      }
      removeAt(CC, zC) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const ZC = this.collDirty,
          QC = CC + zC;
        let wC = !1;
        for (const nC of ZC.keys())
          if (nC >= QC) {
            wC = !0;
            break
          } if (!wC) {
          for (let zC = CC; zC < QC; zC++) ZC.delete(zC);
          return
        }
        const bC = new Map;
        for (const [nC, fC] of ZC) nC < CC ? bC.set(nC, fC) : nC >= QC && bC.set(nC - zC, fC);
        this.collDirty = bC
      }
      unshift(CC) {
        this.insertAt(0, CC)
      }
      setRoot(CC) {
        ! function(CC, zC) {
          CC.root = zC;
          const ZC = zC.add(CC);
          bZ(CC, CC.parent, CC.parentIndex), ZC && PZ(CC, zC, GZ)
        }(this, CC)
      }
      setParent(CC, zC, ZC) {
        SZ(this, CC, zC, ZC)
      }
      forEachChild(CC) {
        PZ(this, CC, pZ)
      }
      forEachChildWithCtx(CC, zC) {
        PZ(this, CC, zC)
      }
      forEachLive(CC) {
        wZ(this, CC, QZ)
      }
      forEachLiveWithCtx(CC, zC) {
        wZ(this, CC, zC)
      }
      operation(CC) {
        this.paused || this.isFullStateOnly || (this.recordPure(CC), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(CC, zC, ZC) {
        if (!this.paused && !this.isFieldFullStateOnly(CC)) {
          if (this.isFieldUnreliable(CC) && !this.isNew) {
            const QC = this.ensureUnreliableRecorder();
            return ZC ? QC.recordRaw(CC, zC) : QC.record(CC, zC), void this.root?.enqueueUnreliable(this)
          }
          ZC ? this.recordRaw(CC, zC) : this.record(CC, zC), this.root?.enqueueChangeTree(this)
        }
      }
      change(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC.ADD;
        this._routeAndRecord(CC, zC, !1)
      }
      indexedOperation(CC, zC) {
        this._routeAndRecord(CC, zC, !0)
      }
      getChange(CC) {
        return this.operationAt(CC)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(CC) {
        const zC = this.paused;
        this.paused = !0;
        try {
          return CC()
        } finally {
          this.paused = zC
        }
      }
      markDirty(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC.ADD;
        const ZC = this.paused;
        this.paused = !1;
        try {
          this.change(CC, zC)
        } finally {
          this.paused = ZC
        }
      }
      getValue(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[NC](CC, zC)
      }
      delete(CC, zC) {
        if (void 0 === CC) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${CC}'`)
          } catch (bw) {
            console.warn(bw)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(CC)) return this.getValue(CC);
        const ZC = this.isFieldUnreliable(CC) && !this.isNew;
        ZC ? this.ensureUnreliableRecorder().recordDelete(CC, zC ?? wC.DELETE) : this.recordDelete(CC, zC ?? wC.DELETE);
        const QC = this.getValue(CC);
        return QC && QC[SC] && this.root?.remove(QC[SC]), ZC ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), QC
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[GC]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[GC]?.()
      }
      discard() {
        this._isSchema || this.refTarget[GC]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const CC = CC => {
          if (CC < 0) return;
          const zC = this.getValue(CC);
          zC && zC[SC] && zC[SC].discardAll()
        };
        this.forEach(CC), this.unreliableRecorder?.forEach(CC), this.discard()
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
      addParent(CC, zC) {
        ! function(CC, zC, ZC) {
          if (CC.parentRef) {
            if (CC.parentRef[SC] === zC[SC]) return void(CC._parentIndex = ZC);
            if (zZ(CC, ((CC, ZC) => CC[SC] === zC[SC]))) return void(CC._parentIndex = ZC)
          }
          void 0 === CC.parentRef ? (CC.parentRef = zC, CC._parentIndex = ZC) : (CC.extraParents = {
            ref: CC.parentRef,
            index: CC._parentIndex,
            next: CC.extraParents
          }, CC.parentRef = zC, CC._parentIndex = ZC)
        }(this, CC, zC)
      }
      setParentIndex(CC, zC) {
        ! function(CC, zC, ZC) {
          if (void 0 !== CC.extraParents)
            if (CC.parentRef[SC] !== zC[SC]) {
              for (let QC = CC.extraParents; void 0 !== QC; QC = QC.next)
                if (QC.ref[SC] === zC[SC]) return void(QC.index = ZC)
            } else CC._parentIndex = ZC;
          else CC._parentIndex = ZC
        }(this, CC, zC)
      }
      removeParent() {
        return function(CC, zC) {
          if (CC.parentRef && CC.parentRef[SC] === zC[SC]) return CC.extraParents ? (CC.parentRef = CC.extraParents.ref, CC._parentIndex = CC.extraParents.index, CC.extraParents = CC.extraParents.next) : (CC.parentRef = void 0, CC._parentIndex = void 0), !0;
          let ZC = CC.extraParents,
            QC = null;
          for (; ZC;) {
            if (ZC.ref[SC] === zC[SC]) return QC ? QC.next = ZC.next : CC.extraParents = ZC.next, !0;
            QC = ZC, ZC = ZC.next
          }
          return void 0 === CC.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(CC) {
        return function(CC, zC) {
          if (void 0 !== CC.parentRef && zC(CC.parentRef, CC._parentIndex)) return {
            ref: CC.parentRef,
            index: CC._parentIndex
          };
          for (let ZC = CC.extraParents; void 0 !== ZC; ZC = ZC.next)
            if (zC(ZC.ref, ZC.index)) return {
              ref: ZC.ref,
              index: ZC.index
            }
        }(this, CC)
      }
      hasParent(CC) {
        return zZ(this, CC)
      }
      indexInParent(CC) {
        return function(CC, zC) {
          if (CC.parentRef && CC.parentRef[SC] === zC[SC]) return CC._parentIndex;
          for (let ZC = CC.extraParents; void 0 !== ZC; ZC = ZC.next)
            if (ZC.ref[SC] === zC[SC]) return ZC.index
        }(this, CC)
      }
      getAllParents() {
        return function(CC) {
          const zC = [];
          CC.parentRef && zC.push({
            ref: CC.parentRef,
            index: CC._parentIndex
          });
          let ZC = CC.extraParents;
          for (; ZC;) zC.push({
            ref: ZC.ref,
            index: ZC.index
          }), ZC = ZC.next;
          return zC
        }(this)
      }
    }
    class dZ {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(CC) {
        this.ref = CC
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
      untracked(CC) {
        return CC()
      }
      markDirty() {}
      forEachChild(CC) {
        const zC = this.ref;
        if (zC[pC]) {
          if ("string" !== typeof zC[pC])
            for (const [ZC, QC] of zC.entries()) QC && CC(QC[SC], zC._collectionIndexes?.[ZC] ?? ZC);
          return
        }
        const ZC = zC.constructor,
          QC = ZC?.[Symbol.metadata];
        if (!QC) return;
        const wC = QC[hC] ?? [];
        for (let bC = 0; bC < wC.length; bC++) {
          const ZC = wC[bC],
            nC = zC[QC[ZC].name];
          nC && CC(nC[SC], ZC)
        }
      }
      forEachChildWithCtx(CC, zC) {
        this.forEachChild(((ZC, QC) => zC(CC, ZC, QC)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function mZ(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC;
      var ZC;
      Object.defineProperty(CC, SC, {
        value: (ZC = zC, new dZ(ZC)),
        enumerable: !1,
        writable: !0
      })
    }

    function HZ(CC, zC, ZC, QC, bC, nC, oC) {
      void 0 !== oC ? oC(zC, QC, nC) : "string" === typeof ZC ? zz[ZC]?.(zC, QC, nC) : null != ZC[Symbol.metadata] ? (zz.number(zC, QC[fC], nC), (bC & wC.ADD) === wC.ADD && CC.tryEncodeTypeId(zC, ZC, QC.constructor, nC)) : zz.number(zC, QC[fC], nC)
    }
    const EZ = function(CC, zC, ZC, QC, bC, nC, fC, oC) {
        if (zC[nC.offset++] = 255 & (QC | bC), bC === wC.DELETE) return;
        const qC = ZC.encDescriptor,
          FC = ZC.ref,
          WC = FC[xC][QC] ?? FC[qC.names[QC]];
        HZ(CC, zC, qC.types[QC], WC, bC, nC, qC.encoders[QC])
      },
      lZ = function(CC, zC, ZC, QC, bC, nC) {
        if (zC[nC.offset++] = 255 & bC, zz.number(zC, QC, nC), bC === wC.DELETE) return;
        const fC = ZC.ref;
        if ((bC & wC.ADD) === wC.ADD) {
          const CC = fC.$indexes.get(QC);
          zz.string(zC, CC, nC)
        }
        HZ(CC, zC, fC[pC], fC[NC](QC), bC, nC)
      },
      XZ = function(CC, zC, ZC, QC, bC, nC) {
        if (zC[nC.offset++] = 255 & bC, zz.number(zC, QC, nC), bC === wC.DELETE) return;
        const fC = ZC.ref;
        HZ(CC, zC, fC[pC], fC[NC](QC), bC, nC)
      },
      cZ = function(CC, zC, ZC, QC, bC, nC) {
        const fC = ZC.ref;
        (bC & wC.ADD) === wC.ADD && "function" === typeof fC.set ? lZ(CC, zC, ZC, QC, bC, nC) : XZ(CC, zC, ZC, QC, bC, nC)
      },
      uZ = function(CC, zC, ZC, QC, bC, nC, oC, qC) {
        const FC = ZC.refTarget,
          WC = FC[pC],
          MC = "string" !== typeof WC;
        let gC;
        if (qC && ZC.isFiltered && MC) {
          const CC = FC.tmpItems[QC];
          if (!CC) return;
          if (gC = CC[fC], bC === wC.DELETE) bC = wC.DELETE_BY_REFID;
          else if ((bC & wC.ADD) === wC.ADD) bC = wC.ADD_BY_REFID;
          else if ((bC & wC.MOVE) === wC.MOVE) return
        } else if (bC === wC.DELETE && MC) {
          const CC = FC.tmpItems[QC];
          if (!CC) return;
          gC = CC[fC], bC = wC.DELETE_BY_REFID
        } else gC = QC;
        if (zC[nC.offset++] = 255 & bC, zz.number(zC, gC, nC), bC === wC.DELETE || bC === wC.DELETE_BY_REFID) return;
        HZ(CC, zC, WC, FC[NC](QC, oC), bC, nC)
      };

    function rZ(CC, zC, ZC, QC, bC, nC, oC) {
      const qC = CC.resyncVisited;
      let FC = qC.get(CC.currentRefId);
      if (void 0 === FC && qC.set(CC.currentRefId, FC = new Set), FC.add(QC), void 0 !== bC && ZC === wC.ADD && bC !== nC) {
        const ZC = bC[fC];
        void 0 !== ZC && (CC.root.removeRef(ZC), oC?.push({
          ref: zC,
          refId: CC.currentRefId,
          op: wC.DELETE,
          dynamicIndex: QC,
          value: void 0,
          previousValue: bC
        }))
      }
    }

    function sZ(CC, zC, ZC, QC) {
      const wC = zC[fC];
      if (void 0 === wC || ZC.has(wC)) return;
      ZC.add(wC);
      const bC = zC.constructor[Symbol.metadata],
        nC = bC?.[hC];
      if (void 0 === nC) return;
      const oC = bC[mC];
      for (let fC = 0; fC < nC.length; fC++) {
        const wC = nC[fC];
        if (void 0 !== oC && oC.includes(wC)) continue;
        const qC = bC[wC],
          FC = zC[qC.name];
        FC && (KQ.is(qC.type) ? sZ(CC, FC, ZC, QC) : TZ(CC, FC, ZC, QC))
      }
    }

    function TZ(CC, zC, ZC, QC) {
      const bC = zC[PC] ?? zC,
        nC = bC[fC];
      if (void 0 === nC || ZC.has(nC)) return;
      ZC.add(nC);
      const oC = CC.resyncVisited.get(nC);
      if (void 0 === oC) return;
      const qC = CC.root;
      bC[gC](oC, ((CC, ZC) => {
        QC?.push({
          ref: zC,
          refId: nC,
          op: wC.DELETE,
          dynamicIndex: ZC,
          value: void 0,
          previousValue: CC
        });
        const bC = CC?.[fC];
        void 0 !== bC && qC.removeRef(bC)
      }), (zC => {
        KQ.isSchema(zC) && sZ(CC, zC, ZC, QC)
      }))
    }
    const aZ = 1,
      tZ = 2,
      DZ = 3,
      jZ = 4,
      yZ = 5;

    function LZ(CC, zC, ZC, QC, bC, nC, oC, qC, FC) {
      const WC = CC.root;
      let NC;
      if ((zC & wC.DELETE) === wC.DELETE) {
        const CC = bC?.[fC];
        void 0 !== CC && WC.removeRef(CC), zC !== wC.DELETE_AND_ADD && ZC[MC](QC), NC = void 0
      }
      if (zC === wC.DELETE);
      else if ("string" === typeof nC) NC = Rz[nC](oC, qC);
      else if (Xz(nC)) NC = function(CC, zC, ZC) {
        return uz(CC, (0, Rz[CC.wire])(zC, ZC))
      }(nC.quantized, oC, qC);
      else if (KQ.is(nC)) {
        const ZC = Rz.number(oC, qC);
        if (NC = WC.refs.get(ZC), (zC & wC.ADD) === wC.ADD) {
          const QC = CC.getInstanceType(oC, qC, nC);
          NC || (NC = CC.createInstanceOfType(QC)), WC.addRef(ZC, NC, NC !== bC || zC === wC.DELETE_AND_ADD && NC === bC)
        }
      } else {
        const ZC = (gC = Object.keys(nC)[0], Az[gC]),
          QC = Rz.number(oC, qC);
        null !== CC.resyncVisited && function(CC, zC) {
          const ZC = CC.resyncVisited;
          ZC.has(zC) || ZC.set(zC, new Set)
        }(CC, QC);
        const MC = WC.refs.has(QC) ? bC || WC.refs.get(QC) : ZC.constructor.initializeForDecoder();
        if (NC = MC.clone(!0), NC[pC] = Object.values(nC)[0], bC) {
          let CC = bC[fC];
          if (void 0 !== CC && QC !== CC) {
            (zC & wC.DELETE) !== wC.DELETE && WC.removeRef(CC);
            const ZC = bC.entries();
            let QC;
            for (;
              (QC = ZC.next()) && !QC.done;) {
              const [zC, ZC] = QC.value;
              "object" === typeof ZC && (CC = ZC[fC]), FC?.push({
                ref: bC,
                refId: CC,
                op: wC.DELETE,
                field: zC,
                value: void 0,
                previousValue: ZC
              })
            }
          }
        }
        WC.addRef(QC, NC, MC !== bC || zC === wC.DELETE_AND_ADD && MC === bC)
      }
      var gC;
      return NC
    }
    const UZ = function(CC, zC, ZC, QC, wC) {
        const bC = zC[ZC.offset++],
          nC = QC.constructor[Symbol.metadata],
          fC = bC >> 6 << 6,
          oC = bC % (fC || 255),
          qC = nC[oC];
        if (void 0 === qC) return console.warn("@colyseus/schema: field not defined at", {
          index: oC,
          ref: QC.constructor.name,
          metadata: nC
        }), -1;
        const FC = !0 === qC.deprecated,
          WC = FC ? void 0 : QC[NC](oC),
          MC = LZ(CC, fC, QC, oC, WC, qC.type, zC, ZC, wC);
        FC || (null !== MC && void 0 !== MC && (QC[qC.name] = MC), WC !== MC && wC?.push({
          ref: QC,
          refId: CC.currentRefId,
          op: fC,
          field: qC.name,
          value: MC,
          previousValue: WC
        }))
      },
      BZ = function(CC, zC, ZC, QC, bC) {
        const nC = QC[PC] ?? QC,
          fC = zC[ZC.offset++];
        if (fC === wC.CLEAR) return CC.removeChildRefs(nC, bC), void nC.clear();
        const oC = Rz.number(zC, ZC),
          qC = nC[pC],
          FC = nC.constructor.COLLECTION_KIND;
        let WC;
        (fC & wC.ADD) === wC.ADD ? FC === aZ ? (WC = Rz.string(zC, ZC), nC.setIndex(oC, WC)) : WC = oC : WC = nC.getIndex(oC);
        const MC = nC[NC](oC),
          gC = LZ(CC, fC, QC, oC, MC, qC, zC, ZC, bC);
        if (null !== CC.resyncVisited && rZ(CC, QC, fC, WC, MC, gC, bC), null !== gC && void 0 !== gC) switch (FC) {
          case aZ:
            nC.$items.set(WC, gC);
            break;
          case tZ:
            nC.$setAt(oC, gC, null !== CC.resyncVisited && fC === wC.ADD ? wC.REPLACE : fC);
            break;
          case DZ:
          case jZ:
          case yZ:
            nC.$items.has(oC) || (nC.$items.set(oC, gC), "number" === typeof nC.$refId && oC >= nC.$refId && (nC.$refId = oC + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${nC.constructor?.name} \u2014 item at index ${oC} was not stored.`)
        }
        MC !== gC && bC?.push({
          ref: QC,
          refId: CC.currentRefId,
          op: fC,
          dynamicIndex: WC,
          value: gC,
          previousValue: MC
        })
      },
      OZ = function(CC, zC, ZC, QC, bC) {
        const nC = QC[PC] ?? QC;
        let fC, oC = zC[ZC.offset++];
        if (oC === wC.CLEAR) return CC.removeChildRefs(nC, bC), void nC.clear();
        if (oC === wC.REVERSE) return void nC.items.reverse();
        if (oC === wC.DELETE_BY_REFID) {
          const oC = Rz.number(zC, ZC),
            qC = CC.root.refs.get(oC);
          if (void 0 === qC) return;
          if (CC.root.removeRef(oC), fC = nC.findIndex((CC => CC === qC)), -1 === fC) return;
          return nC[MC](fC), void bC?.push({
            ref: QC,
            refId: CC.currentRefId,
            op: wC.DELETE,
            dynamicIndex: fC,
            value: void 0,
            previousValue: qC
          })
        }
        if (oC === wC.ADD_BY_REFID) {
          const QC = Rz.number(zC, ZC),
            wC = CC.root.refs.get(QC);
          wC && (fC = nC.findIndex((CC => CC === wC))), -1 !== fC && void 0 !== fC || (fC = nC.length)
        } else fC = Rz.number(zC, ZC);
        const qC = nC[pC];
        let FC = fC;
        const WC = nC.items[fC],
          NC = LZ(CC, oC, QC, fC, WC, qC, zC, ZC, bC);
        null !== CC.resyncVisited && rZ(CC, QC, oC, fC, WC, NC, bC), null !== NC && void 0 !== NC && NC !== WC && nC.$setAt(fC, NC, null !== CC.resyncVisited && oC === wC.ADD ? wC.REPLACE : oC), WC !== NC && bC?.push({
          ref: QC,
          refId: CC.currentRefId,
          op: oC,
          dynamicIndex: FC,
          value: NC,
          previousValue: WC
        })
      };
    class kZ extends Error {}

    function VZ(CC, zC, ZC, QC) {
      if (!(CC instanceof zC)) throw new kZ(`a '${zC.name}' was expected, but '${CC&&CC.constructor.name}' was provided in ${ZC.constructor.name}#${QC}`)
    }
    const CQ = (CC, zC) => {
        const ZC = CC.toString(),
          QC = zC.toString();
        return ZC < QC ? -1 : ZC > QC ? 1 : 0
      },
      zQ = {
        get: (CC, zC) => "symbol" === typeof zC || isNaN(zC) ? Reflect.get(CC, zC) : CC.items[zC],
        set: (CC, zC, ZC) => {
          if ("symbol" !== typeof zC && !isNaN(zC)) {
            if (void 0 === ZC || null === ZC) CC.$deleteAt(zC);
            else {
              let QC;
              if (ZC[SC]) {
                VZ(ZC, CC[pC], CC, zC);
                const bC = CC.items[zC];
                CC.isMovingItems ? (QC = CC.$wireIndex(Number(zC)), void 0 !== bC ? ZC[SC].isNew ? CC[SC].indexedOperation(QC, wC.MOVE_AND_ADD) : (CC[SC].getChange(QC) & wC.DELETE) === wC.DELETE ? CC[SC].indexedOperation(QC, wC.DELETE_AND_MOVE) : CC[SC].indexedOperation(QC, wC.MOVE) : ZC[SC].isNew && CC[SC].indexedOperation(QC, wC.ADD), ZC[SC].setParent(CC, CC[SC].root, QC)) : QC = CC.$changeAt(Number(zC), ZC), void 0 !== bC && bC[SC].root?.remove(bC[SC])
              } else QC = CC.$changeAt(Number(zC), ZC);
              CC.items[zC] = ZC, void 0 !== QC && (CC.tmpItems[QC] = ZC)
            }
            return !0
          }
          return Reflect.set(CC, zC, ZC)
        },
        deleteProperty: (CC, zC) => ("number" === typeof zC ? CC.$deleteAt(zC) : delete CC[zC], !0),
        has: (CC, zC) => "symbol" === typeof zC || isNaN(Number(zC)) ? Reflect.has(CC, zC) : Reflect.has(CC.items, zC)
      };
    class ZQ {
      [SC];
      [fC];
      [PC];
      [pC];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[qC] = uZ;
      static[FC] = OZ;
      static COLLECTION_KIND = tZ;
      static[WC](CC, zC, ZC) {
        if (!ZC) return !0;
        const QC = CC[PC] ?? CC;
        return "string" === typeof QC[pC] || ZC.isChangeTreeVisible(QC.tmpItems[zC]?.[SC])
      }
      static is(CC) {
        return Array.isArray(CC) || void 0 !== CC.array
      }
      static from(CC) {
        return new ZQ(...Array.from(CC))
      }
      constructor() {
        this[pC] = void 0, this[PC] = this;
        const CC = new Proxy(this, zQ);
        return Object.defineProperty(this, SC, {
          value: new YZ(CC, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), CC
      }
      static initializeForDecoder() {
        const CC = Object.create(ZQ.prototype);
        CC.items = [], CC.isMovingItems = !1, CC._needsCompaction = !1, CC[pC] = void 0, CC[PC] = CC;
        const zC = new Proxy(CC, zQ);
        return mZ(CC, zC), zC
      }
      set length(CC) {
        0 === CC ? this.clear() : CC < this.items.length ? this.splice(CC, this.length - CC) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[SC].pause()
      }
      resumeTracking() {
        this[SC].resume()
      }
      untracked(CC) {
        return this[SC].untracked(CC)
      }
      get isTrackingPaused() {
        return this[SC].paused
      }
      push() {
        const CC = this[PC],
          zC = CC.items,
          ZC = CC.tmpItems,
          QC = CC[SC],
          bC = CC[pC];
        let nC = ZC.length;
        for (let fC = 0, oC = arguments.length; fC < oC; fC++, nC++) {
          const oC = fC < 0 || arguments.length <= fC ? void 0 : arguments[fC];
          if (void 0 === oC || null === oC) return;
          "object" === typeof oC && bC && VZ(oC, bC, CC, fC), QC.indexedOperation(nC, wC.ADD), zC.push(oC), ZC.push(oC), oC[SC]?.setParent(this, QC.root, nC)
        }
        return nC
      }
      pop() {
        const CC = this[PC],
          zC = CC.tmpItems,
          ZC = CC.deletedIndexes;
        let QC = -1;
        for (let bC = zC.length - 1; bC >= 0; bC--)
          if (!0 !== ZC[bC]) {
            QC = bC;
            break
          } if (QC < 0) return;
        const wC = CC.$isUnsentAdd(QC);
        return CC[SC].delete(QC), wC ? CC.$cancelAdd(QC) : ZC[QC] = !0, CC.items.pop()
      }
      at(CC) {
        return CC < 0 && (CC += this.length), this.items[CC]
      }
      $wireIndex(CC) {
        const zC = this.deletedIndexes;
        if (0 === zC.length) return CC;
        const ZC = this.tmpItems;
        let QC = 0;
        for (let wC = 0; wC < ZC.length; wC++)
          if (!0 !== zC[wC]) {
            if (QC === CC) return wC;
            QC++
          } return ZC.length + (CC - QC)
      }
      $isUnsentAdd(CC) {
        const zC = this[SC];
        return 0 === (576 & zC.flags) && !zC.paused && "string" !== typeof this[pC] && zC.operationAt(CC) === wC.ADD
      }
      $cancelAdd(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZC = this[SC],
          QC = this.tmpItems[CC];
        this.tmpItems.splice(CC, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(CC, 1), ZC.removeAt(CC, 1);
        const wC = QC?.[SC];
        void 0 !== wC && void 0 === wC.root && wC.removeParent(this), zC && this.$reindexChildren(CC)
      }
      $reindexChildren(CC, zC) {
        if (!this[SC].hasFilteredFields) return;
        if ("string" === typeof this[pC]) return;
        const ZC = this.tmpItems,
          QC = ZC.length;
        if (void 0 !== zC)
          for (; CC < QC && ZC[CC] === zC[CC];) CC++;
        for (let wC = CC; wC < QC; wC++) ZC[wC]?.[SC]?.setParentIndex(this, wC)
      }
      $changeAt(CC, zC) {
        if (void 0 === zC || null === zC) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[CC] === zC) return;
        const ZC = void 0 !== this.items[CC] ? "object" === typeof zC ? wC.DELETE_AND_ADD : wC.REPLACE : wC.ADD,
          QC = this.$wireIndex(CC),
          bC = this[SC];
        return bC.change(QC, ZC), zC[SC]?.setParent(this, bC.root, QC), QC
      }
      $deleteAt(CC, zC) {
        this[SC].delete(this.$wireIndex(CC), zC)
      }
      $setAt(CC, zC, ZC) {
        ZC === wC.ADD && void 0 !== this.items[CC] ? this.items.splice(CC, 0, zC) : ZC === wC.DELETE_AND_MOVE ? (this.items.splice(CC, 1), this.items[CC] = zC) : (CC > this.items.length && (this._needsCompaction = !0), this.items[CC] = zC)
      }
      clear() {
        const CC = this[PC];
        if (0 === CC.items.length) return;
        const zC = CC[SC];
        zC.forEachChild(((CC, ZC) => {
          zC.root?.remove(CC)
        })), zC.discard(), zC.operation(wC.CLEAR), CC.items.length = 0, CC.tmpItems.length = 0
      } [RC]() {
        const CC = this[PC] ?? this,
          zC = CC[SC];
        if (zC.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const ZC = CC.items;
        for (let QC = 0; QC < ZC.length; QC++) ZC[QC]?.[RC]?.();
        CC.items.length = 0, CC.tmpItems.length = 0, CC.deletedIndexes.length = 0, zC.recycle(), CC[fC] = void 0
      }
      concat() {
        return new ZQ(...this.items.concat(...arguments))
      }
      join(CC) {
        return this.items.join(CC)
      }
      reverse() {
        const CC = this[PC],
          zC = CC[SC];
        if (zC.has() || CC.deletedIndexes.length > 0) {
          const zC = CC.items.slice().reverse();
          return this.clear(), this.push(...zC), this
        }
        return zC.operation(wC.REVERSE), CC.items.reverse(), CC.tmpItems.reverse(), CC.$reindexChildren(0), this
      }
      shift() {
        const CC = this[PC],
          zC = CC.items;
        if (0 === zC.length) return;
        const ZC = CC[SC],
          QC = CC.deletedIndexes;
        let bC = 0;
        for (; !0 === QC[bC];) bC++;
        const nC = CC.$isUnsentAdd(bC);
        return ZC.delete(bC, wC.DELETE), nC ? CC.$cancelAdd(bC) : QC[bC] = !0, zC.shift()
      }
      slice(CC, zC) {
        const ZC = new ZQ;
        return ZC.push(...this.items.slice(CC, zC)), ZC
      }
      sort() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CQ;
        const zC = this[PC];
        zC.isMovingItems = !0;
        const ZC = zC[SC];
        return zC.items.sort(CC).forEach(((CC, zC) => ZC.change(zC, wC.REPLACE))), zC.tmpItems.sort(CC), zC.$reindexChildren(0), zC.isMovingItems = !1, this
      }
      splice(CC, zC) {
        const ZC = this[PC],
          QC = ZC[SC],
          bC = ZC.items,
          nC = ZC.tmpItems,
          fC = ZC.deletedIndexes,
          oC = bC.length,
          qC = nC.length;
        for (var FC = arguments.length, WC = new Array(FC > 2 ? FC - 2 : 0), NC = 2; NC < FC; NC++) WC[NC - 2] = arguments[NC];
        const MC = WC.length,
          gC = [];
        for (let wC = 0; wC < qC; wC++) !0 !== fC[wC] && gC.push(wC);
        let pC;
        if (oC > CC) {
          void 0 === zC && (zC = oC - CC);
          for (let bC = CC; bC < CC + zC; bC++) {
            const CC = gC[bC],
              zC = ZC.$isUnsentAdd(CC);
            QC.delete(CC, wC.DELETE), zC ? (pC ??= []).push(CC) : fC[CC] = !0
          }
        } else zC = 0;
        if (MC > 0) {
          const bC = gC[CC] ?? oC,
            qC = Math.min(MC, zC);
          for (let CC = 0; CC < qC; CC++) {
            const zC = bC + CC;
            let ZC;
            const oC = void 0 !== pC ? pC.indexOf(zC) : -1; - 1 !== oC ? (pC.splice(oC, 1), ZC = wC.ADD) : ZC = fC[zC] ? wC.DELETE_AND_ADD : wC.ADD, QC.indexedOperation(zC, ZC), nC[zC] = WC[CC], fC[zC] = !1, WC[CC][SC]?.setParent(this, QC.root, zC)
          }
          const FC = MC - qC;
          if (FC > 0) {
            const CC = bC + qC;
            QC.insertAt(CC, FC);
            for (let zC = 0; zC < FC; zC++) WC[qC + zC][SC]?.setParent(this, QC.root, CC + zC);
            fC.length > 0 && fC.splice(CC, 0, ...new Array(FC).fill(!1)), nC.splice(CC, 0, ...WC.slice(qC)), ZC.$reindexChildren(CC + FC)
          }
        }
        if (void 0 !== pC && pC.length > 0) {
          for (let CC = pC.length - 1; CC >= 0; CC--) ZC.$cancelAdd(pC[CC], !1);
          ZC.$reindexChildren(pC[0])
        }
        return QC.root?.enqueueChangeTree(QC), bC.splice(CC, zC, ...WC)
      }
      unshift() {
        const CC = this[PC],
          zC = CC[SC];
        zC.unshift(arguments.length);
        for (let QC = 0; QC < arguments.length; QC++)(QC < 0 || arguments.length <= QC ? void 0 : arguments[QC])?.[SC]?.setParent(this, zC.root, QC);
        const ZC = CC.deletedIndexes;
        return ZC.length > 0 && ZC.unshift(...new Array(arguments.length).fill(!1)), CC.tmpItems.unshift(...arguments), CC.$reindexChildren(arguments.length), CC.items.unshift(...arguments)
      }
      indexOf(CC, zC) {
        return this.items.indexOf(CC, zC)
      }
      lastIndexOf(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(CC, zC)
      }
      every(CC, zC) {
        return this.items.every(CC, zC)
      }
      some(CC, zC) {
        return this.items.some(CC, zC)
      }
      forEach(CC, zC) {
        return this.items.forEach(CC, zC)
      }
      map(CC, zC) {
        return this.items.map(CC, zC)
      }
      filter(CC, zC) {
        return this.items.filter(CC, zC)
      }
      reduce(CC, zC) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(CC, zC) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(CC, zC) {
        return this.items.find(CC, zC)
      }
      findIndex(CC, zC) {
        return this.items.findIndex(CC, zC)
      }
      fill(CC, zC, ZC) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(CC, zC, ZC) {
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
        return ZQ
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
      includes(CC, zC) {
        return this.items.includes(CC, zC)
      }
      flatMap(CC, zC) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(CC) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(CC, zC) {
        const ZC = this.items.slice();
        return CC < 0 && (CC += this.length), ZC[CC] = zC, new ZQ(...ZC)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(CC) {
        return this.items.slice().sort(CC)
      }
      toSpliced(CC, zC) {
        for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC];
        const bC = this.items.slice();
        return bC.splice.apply(bC, arguments), bC
      }
      shuffle() {
        return this.move((CC => {
          let zC = this.items.length;
          for (; 0 != zC;) {
            let CC = Math.floor(Math.random() * zC);
            zC--, [this[zC], this[CC]] = [this[CC], this[zC]]
          }
        }))
      }
      move(CC) {
        return this.isMovingItems = !0, CC(this), this.isMovingItems = !1, this
      } [NC](CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = this[PC] ?? this;
        return zC || ZC.deletedIndexes[CC] ? ZC.items[CC] : ZC.tmpItems[CC] || ZC.items[CC]
      } [MC](CC) {
        const zC = this[PC] ?? this;
        zC.items[CC] = void 0, zC._needsCompaction = !0
      } [GC]() {
        const CC = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, CC), this.deletedIndexes.length = 0)
      } [AC]() {
        const CC = this[PC] ?? this;
        CC._needsCompaction && (CC._needsCompaction = !1, CC.items = CC.items.filter((CC => void 0 !== CC)))
      } [gC](CC, zC, ZC) {
        const QC = this[PC] ?? this,
          wC = QC.items;
        let bC = !1;
        for (let nC = 0; nC < wC.length; nC++) {
          const fC = wC[nC];
          CC.has(nC) ? ZC(fC) : (bC = !0, zC(fC, nC), QC[MC](nC))
        }
        bC && QC[AC]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((CC => "function" === typeof CC.toJSON ? CC.toJSON() : CC))
      }
      clone(CC) {
        let zC;
        return CC ? (zC = new ZQ, zC.push(...this.items)) : zC = new ZQ(...this.map((CC => CC[SC] ? CC.clone() : CC))), zC
      }
    }
    Jz("array", {
      constructor: ZQ
    });
    class QQ {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(CC) {
        const zC = this.indexByKey[CC];
        return void 0 === zC ? void 0 : zC
      }
      assign(CC) {
        const zC = this.nextIndex++;
        return this.indexByKey[CC] = zC, this.keyByIndex.set(zC, CC), zC
      }
      snapshot(CC, zC) {
        (this.snapshots ??= new Map).set(CC, zC)
      }
      forgetSnapshot(CC) {
        this.snapshots?.delete(CC)
      }
      snapshotAt(CC) {
        return this.snapshots?.get(CC)
      }
      setIndex(CC, zC) {
        this.keyByIndex.set(CC, zC), this.indexByKey[zC] = CC
      }
      keyOf(CC) {
        return this.keyByIndex.get(CC)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [CC] of this.snapshots) {
            const zC = this.keyByIndex.get(CC);
            void 0 !== zC && (delete this.indexByKey[zC], this.keyByIndex.delete(CC))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class wQ {
      [SC];
      [fC];
      childType;
      [pC];
      $items = new Map;
      journal = new QQ;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(CC) {
        (this._stream ??= vz()).maxPerTick = CC
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(CC) {
        (this._stream ??= vz()).priority = CC
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[qC] = lZ;
      static[FC] = BZ;
      static COLLECTION_KIND = aZ;
      static[WC](CC, zC, ZC) {
        if (!ZC || "string" === typeof CC[pC]) return !0;
        const QC = CC[NC](zC) ?? CC.journal.snapshotAt(zC);
        return ZC.isChangeTreeVisible(QC[SC])
      }
      static is(CC) {
        return void 0 !== CC.map
      }
      constructor(CC) {
        if (Object.defineProperty(this, SC, {
            value: new YZ(this),
            enumerable: !1,
            writable: !0
          }), this[pC] = void 0, CC)
          if (CC instanceof Map || CC instanceof wQ) CC.forEach(((CC, zC) => this.set(zC, CC)));
          else
            for (const zC in CC) this.set(zC, CC[zC])
      }
      static initializeForDecoder() {
        const CC = Object.create(wQ.prototype);
        return CC.$items = new Map, CC.journal = new QQ, CC[pC] = void 0, mZ(CC), CC
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return wQ
      }
      set(CC, zC) {
        if (void 0 === zC || null === zC) throw new Error(`MapSchema#set('${CC}', ${zC}): trying to set ${zC} value on '${CC}'.`);
        "object" === typeof zC && this[pC] && VZ(zC, this[pC], this, CC), CC = CC.toString();
        const ZC = this[SC],
          QC = void 0 !== zC[SC],
          bC = this.journal;
        let nC, fC = bC.indexOf(CC);
        if (void 0 !== fC) {
          nC = wC.REPLACE;
          const ZC = this.$items.get(CC);
          if (ZC === zC) return;
          QC && (nC = wC.DELETE_AND_ADD, void 0 !== ZC && ZC[SC].root?.remove(ZC[SC])), void 0 !== bC.snapshotAt(fC) && bC.forgetSnapshot(fC)
        } else fC = bC.assign(CC), nC = wC.ADD;
        return this.$items.set(CC, zC), nC === wC.ADD && ZC.isStreamCollection ? void 0 !== ZC.root && hz(this, ZC.root, fC) : ZC.change(fC, nC), QC && zC[SC].setParent(this, ZC.root, fC), this
      }
      get(CC) {
        return this.$items.get(CC)
      }
      getOrInsert(CC, zC) {
        return this.$items.has(CC) ? this.$items.get(CC) : (this.set(CC, zC), zC)
      }
      getOrInsertComputed(CC, zC) {
        if (this.$items.has(CC)) return this.$items.get(CC);
        const ZC = zC(CC);
        return this.set(CC, ZC), ZC
      }
      delete(CC) {
        if (!this.$items.has(CC)) return !1;
        const zC = this.journal.indexOf(CC),
          ZC = this.$items.get(CC),
          QC = this[SC];
        if (QC.isStreamCollection) {
          const wC = QC.root;
          let bC = !1;
          return void 0 !== wC && (bC = Kz(this, wC, this[fC], zC)), void 0 !== ZC?.[SC] && wC?.remove(ZC[SC]), this.$items.delete(CC), bC || this.journal.snapshot(zC, ZC), !0
        }
        return this.journal.snapshot(zC, ZC), QC.delete(zC), this.$items.delete(CC)
      }
      clear() {
        const CC = this[SC];
        CC.discard(), CC.forEachChild(((zC, ZC) => {
          CC.root?.remove(zC)
        })), this.journal.reset(), this.$items.clear(), CC.operation(wC.CLEAR)
      } [RC]() {
        const CC = this[SC];
        if (CC.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((CC => CC?.[RC]?.())), this.$items.clear(), this.journal.reset(), CC.recycle(), this[fC] = void 0
      }
      has(CC) {
        return this.$items.has(CC)
      }
      forEach(CC) {
        this.$items.forEach(CC)
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
        this[SC].pause()
      }
      resumeTracking() {
        this[SC].resume()
      }
      untracked(CC) {
        return this[SC].untracked(CC)
      }
      get isTrackingPaused() {
        return this[SC].paused
      }
      setIndex(CC, zC) {
        this.journal.setIndex(CC, zC)
      }
      getIndex(CC) {
        return this.journal.keyOf(CC)
      } [NC](CC) {
        const zC = this.journal.keyOf(CC);
        return void 0 !== zC ? this.$items.get(zC) : void 0
      } [MC](CC) {
        const zC = this.journal.keyOf(CC);
        void 0 !== zC && (this.$items.delete(zC), this.journal.keyByIndex.delete(CC))
      } [gC](CC, zC, ZC) {
        let QC = null;
        if (this.$items.forEach(((wC, bC) => {
            CC.has(bC) ? ZC(wC) : ((QC ??= new Set).add(bC), zC(wC, bC))
          })), null !== QC) {
          QC.forEach((CC => {
            this.$items.delete(CC), delete this.journal.indexByKey[CC]
          }));
          const CC = [];
          this.journal.keyByIndex.forEach(((zC, ZC) => {
            QC.has(zC) && CC.push(ZC)
          }));
          for (let zC = 0; zC < CC.length; zC++) this.journal.keyByIndex.delete(CC[zC])
        }
      } [GC]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(CC) {
        Hz(this, CC)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (CC => {
          let [zC, ZC] = CC;
          return [zC, "function" === typeof ZC.toJSON ? ZC.toJSON() : ZC]
        })))
      }
      clone(CC) {
        let zC;
        return CC ? zC = Object.assign(new wQ, this) : (zC = new wQ, this.forEach(((CC, ZC) => {
          CC[SC] ? zC.set(ZC, CC.clone()) : zC.set(ZC, CC)
        }))), zC
      }
    }
    Jz("map", {
      constructor: wQ
    });
    class bQ {
      [SC];
      [fC];
      [pC];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(CC) {
        (this._stream ??= vz()).maxPerTick = CC
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(CC) {
        (this._stream ??= vz()).priority = CC
      }
      static[qC] = XZ;
      static[FC] = BZ;
      static COLLECTION_KIND = jZ;
      static[WC](CC, zC, ZC) {
        return !ZC || "string" === typeof CC[pC] || ZC.isChangeTreeVisible((CC[NC](zC) ?? CC.deletedItems[zC])[SC])
      }
      static is(CC) {
        return void 0 !== CC.collection
      }
      constructor(CC) {
        Object.defineProperty(this, SC, {
          value: new YZ(this),
          enumerable: !1,
          writable: !0
        }), this[pC] = void 0, CC && CC.forEach((CC => this.add(CC)))
      }
      static initializeForDecoder() {
        const CC = Object.create(bQ.prototype);
        return CC.$items = new Map, CC.deletedItems = {}, CC.$refId = 0, CC[pC] = void 0, mZ(CC), CC
      }
      add(CC) {
        const zC = this.$refId++,
          ZC = this[SC];
        return this.$items.set(zC, CC), ZC.isStreamCollection ? void 0 !== ZC.root && hz(this, ZC.root, zC) : ZC.change(zC), void 0 !== CC[SC] && CC[SC].setParent(this, ZC.root, zC), zC
      }
      at(CC) {
        const zC = Array.from(this.$items.keys())[CC];
        return this.$items.get(zC)
      }
      entries() {
        return this.$items.entries()
      }
      delete(CC) {
        const zC = this.$items.entries();
        let ZC, QC;
        for (;
          (QC = zC.next()) && !QC.done;)
          if (CC === QC.value[1]) {
            ZC = QC.value[0];
            break
          } if (void 0 === ZC) return !1;
        const wC = this[SC];
        if (wC.isStreamCollection) {
          const CC = wC.root,
            zC = this.$items.get(ZC);
          return void 0 !== CC && Kz(this, CC, this[fC], ZC), void 0 !== zC?.[SC] && CC?.remove(zC[SC]), this.deletedItems[ZC] = zC, this.$items.delete(ZC)
        }
        return this.deletedItems[ZC] = wC.delete(ZC), this.$items.delete(ZC)
      }
      clear() {
        const CC = this[SC];
        CC.discard(), CC.forEachChild(((zC, ZC) => {
          CC.root?.remove(zC)
        })), this.$items.clear(), CC.operation(wC.CLEAR)
      } [RC]() {
        const CC = this[SC];
        if (CC.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((CC => CC?.[RC]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, CC.recycle(), this[fC] = void 0
      }
      has(CC) {
        return Array.from(this.$items.values()).some((zC => zC === CC))
      }
      forEach(CC) {
        this.$items.forEach(((zC, ZC, QC) => CC(zC, ZC, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[SC].pause()
      }
      resumeTracking() {
        this[SC].resume()
      }
      untracked(CC) {
        return this[SC].untracked(CC)
      }
      get isTrackingPaused() {
        return this[SC].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(CC, zC) {}
      getIndex(CC) {
        return CC
      } [NC](CC) {
        return this.$items.get(CC)
      } [MC](CC) {
        this.$items.delete(CC)
      } [gC](CC, zC, ZC) {
        let QC = null;
        if (this.$items.forEach(((wC, bC) => {
            CC.has(bC) ? ZC(wC) : ((QC ??= []).push(bC), zC(wC, bC))
          })), null !== QC)
          for (let wC = 0; wC < QC.length; wC++) this[MC](QC[wC])
      } [GC]() {
        for (const CC in this.deletedItems) delete this.deletedItems[CC]
      }
      _dropView(CC) {
        Hz(this, CC)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const CC = [];
        return this.forEach(((zC, ZC) => {
          CC.push("function" === typeof zC.toJSON ? zC.toJSON() : zC)
        })), CC
      }
      clone(CC) {
        let zC;
        return CC ? zC = Object.assign(new bQ, this) : (zC = new bQ, this.forEach((CC => {
          CC[SC] ? zC.add(CC.clone()) : zC.add(CC)
        }))), zC
      }
    }
    Jz("collection", {
      constructor: bQ
    });
    class nQ {
      [SC];
      [fC];
      [pC];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(CC) {
        (this._stream ??= vz()).maxPerTick = CC
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(CC) {
        (this._stream ??= vz()).priority = CC
      }
      static[qC] = XZ;
      static[FC] = BZ;
      static COLLECTION_KIND = DZ;
      static[WC](CC, zC, ZC) {
        return !ZC || "string" === typeof CC[pC] || ZC.isVisible((CC[NC](zC) ?? CC.deletedItems[zC])[SC])
      }
      static is(CC) {
        return void 0 !== CC.set
      }
      constructor(CC) {
        Object.defineProperty(this, SC, {
          value: new YZ(this),
          enumerable: !1,
          writable: !0
        }), this[pC] = void 0, CC && CC.forEach((CC => this.add(CC)))
      }
      static initializeForDecoder() {
        const CC = Object.create(nQ.prototype);
        return CC.$items = new Map, CC.deletedItems = {}, CC.$refId = 0, CC[pC] = void 0, mZ(CC), CC
      }
      add(CC) {
        if (this.has(CC)) return !1;
        const zC = this.$refId++,
          ZC = this[SC];
        return this.$items.set(zC, CC), ZC.isStreamCollection ? void 0 !== ZC.root && hz(this, ZC.root, zC) : ZC.change(zC, wC.ADD), void 0 !== CC[SC] && CC[SC].setParent(this, ZC.root, zC), zC
      }
      entries() {
        return this.$items.entries()
      }
      delete(CC) {
        const zC = this.$items.entries();
        let ZC, QC;
        for (;
          (QC = zC.next()) && !QC.done;)
          if (CC === QC.value[1]) {
            ZC = QC.value[0];
            break
          } if (void 0 === ZC) return !1;
        const wC = this[SC];
        if (wC.isStreamCollection) {
          const CC = wC.root,
            zC = this.$items.get(ZC);
          return void 0 !== CC && Kz(this, CC, this[fC], ZC), void 0 !== zC?.[SC] && CC?.remove(zC[SC]), this.deletedItems[ZC] = zC, this.$items.delete(ZC)
        }
        return this.deletedItems[ZC] = wC.delete(ZC), this.$items.delete(ZC)
      }
      clear() {
        const CC = this[SC];
        CC.discard(), this.$items.clear(), CC.operation(wC.CLEAR)
      } [RC]() {
        const CC = this[SC];
        if (CC.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((CC => CC?.[RC]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, CC.recycle(), this[fC] = void 0
      }
      has(CC) {
        const zC = this.$items.values();
        let ZC, QC = !1;
        for (;
          (ZC = zC.next()) && !ZC.done;)
          if (CC === ZC.value) {
            QC = !0;
            break
          } return QC
      }
      forEach(CC) {
        this.$items.forEach(((zC, ZC, QC) => CC(zC, ZC, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[SC].pause()
      }
      resumeTracking() {
        this[SC].resume()
      }
      untracked(CC) {
        return this[SC].untracked(CC)
      }
      get isTrackingPaused() {
        return this[SC].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(CC, zC) {}
      getIndex(CC) {
        return CC
      } [NC](CC) {
        return this.$items.get(CC)
      } [MC](CC) {
        this.$items.delete(CC)
      } [gC](CC, zC, ZC) {
        let QC = null;
        if (this.$items.forEach(((wC, bC) => {
            CC.has(bC) ? ZC(wC) : ((QC ??= []).push(bC), zC(wC, bC))
          })), null !== QC)
          for (let wC = 0; wC < QC.length; wC++) this[MC](QC[wC])
      } [GC]() {
        for (const CC in this.deletedItems) delete this.deletedItems[CC]
      }
      _dropView(CC) {
        Hz(this, CC)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const CC = [];
        return this.forEach(((zC, ZC) => {
          CC.push("function" === typeof zC.toJSON ? zC.toJSON() : zC)
        })), CC
      }
      clone(CC) {
        let zC;
        return CC ? zC = Object.assign(new nQ, this) : (zC = new nQ, this.forEach((CC => {
          CC[SC] ? zC.add(CC.clone()) : zC.add(CC)
        }))), zC
      }
    }
    Jz("set", {
      constructor: nQ
    });
    class fQ {
      [SC];
      [fC];
      [pC];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(CC) {
        (this._stream ??= vz()).maxPerTick = CC
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(CC) {
        (this._stream ??= vz()).priority = CC
      }
      static $isStream = !0;
      static[qC] = XZ;
      static[FC] = BZ;
      static COLLECTION_KIND = yZ;
      static[WC](CC, zC, ZC) {
        if (!ZC) return !0;
        const QC = CC[NC](zC);
        return void 0 !== QC && ZC.isVisible(QC[SC])
      }
      static is(CC) {
        return CC && void 0 !== CC.stream
      }
      constructor() {
        Object.defineProperty(this, SC, {
          value: new YZ(this),
          enumerable: !1,
          writable: !0
        }), this[pC] = void 0
      }
      static initializeForDecoder() {
        const CC = Object.create(fQ.prototype);
        return CC.$items = new Map, CC.$nextPosition = 0, CC._itemIndex = new Map, CC[pC] = void 0, mZ(CC), CC
      }
      add(CC) {
        if (this._itemIndex.has(CC)) return -1;
        const zC = this.$nextPosition++;
        this.$items.set(zC, CC), this._itemIndex.set(CC, zC);
        const ZC = this[SC].root;
        return void 0 !== CC[SC] && CC[SC].setParent(this, ZC, zC), void 0 !== ZC && hz(this, ZC, zC), zC
      }
      remove(CC) {
        const zC = this._itemIndex.get(CC);
        if (void 0 === zC) return !1;
        this._itemIndex.delete(CC), this.$items.delete(zC);
        const ZC = this[SC].root;
        return void 0 !== ZC && (Kz(this, ZC, this[fC], zC), void 0 !== CC[SC] && ZC.remove(CC[SC])), !0
      }
      has(CC) {
        return this._itemIndex.has(CC)
      }
      clear() {
        const CC = this[SC].root;
        if (void 0 !== CC) {
          ! function(CC, zC, ZC) {
            const QC = CC._stream;
            if (void 0 !== QC) {
              QC.broadcastPending.clear();
              for (const CC of QC.sentBroadcast) QC.broadcastDeletes.add(CC);
              QC.sentBroadcast.clear(), zC.forEachActiveView((CC => {
                QC.pendingByView.get(CC.id)?.clear();
                const zC = QC.sentByView.get(CC.id);
                if (void 0 !== zC && zC.size > 0) {
                  let QC = CC.changes.get(ZC);
                  void 0 === QC && (QC = new Map, CC.changes.set(ZC, QC));
                  for (const CC of zC) QC.set(CC, wC.DELETE);
                  zC.clear()
                }
              }))
            }
          }(this, CC, this[fC]);
          for (const zC of this.$items.values()) void 0 !== zC[SC] && CC.remove(zC[SC])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(CC) {
        for (const [zC, ZC] of this.$items) CC(ZC, zC, this)
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
      setIndex(CC, zC) {}
      getIndex(CC) {
        return CC
      } [NC](CC) {
        return this.$items.get(CC)
      } [MC](CC) {
        const zC = this.$items.get(CC);
        void 0 !== zC && (this._itemIndex.delete(zC), this.$items.delete(CC))
      } [gC]() {} [GC]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const CC = [];
        return this.forEach((zC => {
          CC.push("function" === typeof zC?.toJSON ? zC.toJSON() : zC)
        })), CC
      }
      clone(CC) {
        if (CC) {
          return Object.assign(new fQ, this)
        }
        const zC = new fQ;
        return zC.maxPerTick = this.maxPerTick, this.forEach((CC => {
          zC.add("function" === typeof CC?.clone ? CC.clone() : CC)
        })), zC
      }
      _dropView(CC) {
        Hz(this, CC)
      }
      _unregister() {}
    }
    Jz("stream", {
      constructor: fQ
    });
    class oQ {
      [JC] = !0;
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
      constructor(CC) {
        this._type = CC
      }
      default (CC) {
        return this._default = CC, this._hasDefault = !0, this
      }
      view(CC) {
        return this._view = CC ?? -1, this
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
        const CC = this._type;
        if (CC && "object" === typeof CC && void 0 !== CC.array) throw new Error(iz);
        return this._stream = !0, this
      }
      priority(CC) {
        return this._streamPriority = CC, this
      }
      deprecated() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = CC, this
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

    function qQ(CC) {
      return null != CC && !0 === CC[JC]
    }

    function FQ(CC) {
      return () => new oQ(CC)
    }

    function WQ(CC) {
      if (qQ(CC)) {
        const zC = CC._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof zC?`use the type name instead: t.array("${zC}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return CC
    }

    function NQ(CC) {
      return new oQ({
        quantized: lz(CC)
      })
    }
    const MQ = Object.freeze({
        string: FQ("string"),
        number: FQ("number"),
        boolean: FQ("boolean"),
        int8: FQ("int8"),
        uint8: FQ("uint8"),
        int16: FQ("int16"),
        uint16: FQ("uint16"),
        int32: FQ("int32"),
        uint32: FQ("uint32"),
        int64: FQ("int64"),
        uint64: FQ("uint64"),
        float32: FQ("float32"),
        float64: FQ("float64"),
        bigint64: FQ("bigint64"),
        biguint64: FQ("biguint64"),
        ref: CC => new oQ(CC),
        array: CC => new oQ({
          array: WQ(CC)
        }),
        map: CC => new oQ({
          map: WQ(CC)
        }),
        set: CC => new oQ({
          set: WQ(CC)
        }),
        collection: CC => new oQ({
          collection: WQ(CC)
        }),
        stream: CC => {
          const zC = new oQ({
            stream: WQ(CC)
          });
          return zC._stream = !0, zC
        },
        quantized: NQ,
        angle: CC => NQ({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: CC?.bits ?? 16
        })
      }),
      gQ = -1;

    function SQ(CC) {
      return sz.register(CC), CC
    }

    function pQ() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gQ;
      return function(zC, ZC) {
        const QC = Lz.initialize(zC.constructor);
        Lz.setTag(QC, ZC, CC)
      }
    }

    function PQ(CC, zC) {
      const ZC = Lz.initialize(CC.constructor);
      Lz.setUnreliable(ZC, zC)
    }

    function GQ(CC, zC) {
      const ZC = Lz.initialize(CC.constructor);
      Lz.setPatchOnly(ZC, zC)
    }

    function RQ(CC, zC) {
      const ZC = Lz.initialize(CC.constructor);
      Lz.setFullStateOnly(ZC, zC)
    }

    function AQ(CC, zC) {
      return function(ZC, QC) {
        const wC = ZC.constructor;
        if (!CC) throw new Error(`${wC.name}: @type() reference provided for "${QC}" is undefined. Make sure you don't have any circular dependencies.`);
        CC = az(CC, `${wC.name}.${QC}`), sz.register(wC);
        const bC = Object.getPrototypeOf(wC)[Symbol.metadata],
          nC = Lz.initialize(wC);
        let fC = nC[QC];
        if (void 0 !== nC[fC]) {
          if (nC[fC].deprecated) return;
          if (void 0 !== nC[fC].type) {
            const CC = new Error(`@colyseus/schema: Duplicate '${QC}' definition on '${wC.name}'.\nCheck @type() annotation`);
            throw new Error(`${CC.message} ${CC.stack.split("\n")[4].trim()}`)
          }
        } else fC = nC[eC] ?? (bC && bC[eC]) ?? -1, fC++;
        if (zC && zC.manual) Lz.addField(nC, fC, QC, CC, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: zC,
            childType: ZC
          } = Tz(CC);
          Lz.addField(nC, fC, QC, CC, JQ(QC, fC, ZC, zC))
        }
        nC[IC][QC] && Object.defineProperty(ZC, QC, nC[IC][QC]), ("string" === typeof CC || Xz(CC)) && (nC[vC] || Object.defineProperty(nC, vC, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), nC[vC][fC] = "string" === typeof CC ? zz[CC] : rz(CC.quantized))
      }
    }
    const xQ = {
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

    function JQ(CC, zC, ZC, QC) {
      let bC;
      return bC = QC ? function(CC, zC, ZC, QC) {
        const bC = QC.constructor === ZQ,
          nC = QC.constructor === wQ;
        return function(CC) {
          const QC = this[xC],
            fC = QC[zC];
          if (CC !== fC) {
            if (void 0 !== CC && null !== CC) {
              if (!bC || CC instanceof ZQ)
                if (!nC || CC instanceof wQ) CC[pC] = ZC;
                else {
                  const zC = new wQ;
                  if (zC[pC] = ZC, CC instanceof Map) CC.forEach(((CC, ZC) => zC.set(ZC, CC)));
                  else
                    for (const ZC in CC) zC.set(ZC, CC[ZC]);
                  CC = zC
                }
              else {
                const zC = new ZQ;
                zC[pC] = ZC, zC.push(...CC), CC = zC
              }
              const QC = this[SC],
                qC = this.constructor;
              void 0 !== fC && null !== fC && fC[SC] ? (QC.root?.remove(fC[SC]), qC[oC](QC, zC, wC.DELETE_AND_ADD)) : qC[oC](QC, zC, wC.ADD), CC[SC]?.setParent(this, QC.root, zC)
            } else void 0 !== fC && null !== fC && this[SC].delete(zC);
            QC[zC] = CC
          }
        }
      }(0, zC, ZC, QC) : "string" === typeof ZC ? function(CC, zC, ZC) {
        const QC = xQ[ZC],
          bC = "string" === ZC,
          nC = "boolean" === ZC;
        return function(ZC) {
          const fC = this[xC],
            qC = fC[zC];
          if (ZC !== qC) {
            if (void 0 !== ZC && null !== ZC) {
              if (!nC && void 0 !== QC && typeof ZC !== QC && (!bC || null !== ZC)) {
                const zC = ZC && ZC.constructor ? ` (${ZC.constructor.name})` : "";
                throw new kZ(`a '${QC}' was expected, but '${JSON.stringify(ZC)}'${zC} was provided in ${this.constructor.name}#${CC}`)
              }
              this.constructor[oC](this[SC], zC, wC.ADD)
            } else void 0 !== qC && null !== qC && this[SC].delete(zC);
            fC[zC] = ZC
          }
        }
      }(CC, zC, ZC) : Xz(ZC) ? function(CC, zC, ZC) {
        return function(QC) {
          const bC = this[xC],
            nC = bC[zC];
          if (void 0 !== QC && null !== QC) {
            if ("number" !== typeof QC) throw new kZ(`a 'number' was expected, but '${JSON.stringify(QC)}' was provided in ${this.constructor.name}#${CC}`);
            if ((QC = uz(ZC, cz(ZC, QC))) === nC) return;
            this.constructor[oC](this[SC], zC, wC.ADD)
          } else {
            if (QC === nC) return;
            void 0 !== nC && null !== nC && this[SC].delete(zC)
          }
          bC[zC] = QC
        }
      }(CC, zC, ZC.quantized) : function(CC, zC, ZC) {
        return function(QC) {
          const bC = this[xC],
            nC = bC[zC];
          if (QC !== nC) {
            if (void 0 !== QC && null !== QC) {
              VZ(QC, ZC, this, CC);
              const bC = this[SC],
                fC = this.constructor;
              void 0 !== nC && null !== nC && nC[SC] ? (bC.root?.remove(nC[SC]), fC[oC](bC, zC, wC.DELETE_AND_ADD)) : fC[oC](bC, zC, wC.ADD), QC[SC]?.setParent(this, bC.root, zC)
            } else void 0 !== nC && null !== nC && this[SC].delete(zC);
            bC[zC] = QC
          }
        }
      }(CC, zC, ZC), {
        get: function() {
          return this[xC][zC]
        },
        set: bC,
        enumerable: !0,
        configurable: !0
      }
    }

    function IQ() {
      let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(zC, ZC) {
        const QC = Lz.initialize(zC.constructor);
        Lz.setDeprecated(QC, ZC), CC && (QC[IC] ??= {}, QC[IC][ZC] = {
          get: function() {
            throw new Error(`${ZC} is deprecated.`)
          },
          set: function(CC) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(zC, ZC, QC[IC][ZC]))
      }
    }
    let iQ = !1;

    function vQ(CC, zC, ZC) {
      iQ || (iQ = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let QC in zC) AQ(zC[QC], ZC)(CC.prototype, QC);
      return CC
    }

    function eQ(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KQ;
      if (null == CC || "object" !== typeof CC) throw new Error(`schema(): first argument must be a fields object (got ${typeof CC}).`);
      const QC = {},
        wC = {},
        bC = {},
        nC = {},
        fC = (CC, zC) => {
          if (zC.hasDefault)((CC, zC) => {
            "function" === typeof zC ? nC[CC] = zC : zC && "function" === typeof zC.clone ? nC[CC] = () => zC.clone() : bC[CC] = zC
          })(CC, zC.default);
          else if (!zC.optional) {
            const ZC = function(CC) {
              if (CC && "object" === typeof CC) {
                if (void 0 !== CC.array) return () => new ZQ;
                if (void 0 !== CC.map) return () => new wQ;
                if (void 0 !== CC.set) return () => new nQ;
                if (void 0 !== CC.collection) return () => new bQ;
                if (void 0 !== CC.stream) return () => new fQ
              } else if ("function" === typeof CC && KQ.is(CC) && (!CC.prototype.initialize || 0 === CC.prototype.initialize.length)) return () => new CC
            }(zC.type);
            ZC && (nC[CC] = ZC)
          }
        },
        oC = {},
        qC = [],
        FC = [],
        WC = {},
        NC = [],
        MC = [],
        gC = {},
        SC = [];
      for (const xC in CC) {
        const ZC = CC[xC],
          bC = `schema(${zC?`'${zC}'`:""}): field '${xC}'`;
        if (qQ(ZC)) {
          const CC = ZC.toDefinition();
          if (CC.noSync) {
            if (void 0 !== CC.view || CC.unreliable || CC.patchOnly || CC.fullStateOnly || CC.stream) throw new Error(`${bC} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            fC(xC, CC);
            continue
          }
          if (CC.patchOnly && CC.fullStateOnly) throw new Error(`${bC} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const zC = az(CC.type, bC);
          if ("function" === typeof zC && !KQ.is(zC)) throw new Error(`${bC} is a synced ref to non-Schema class '${zC.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          QC[xC] = zC, void 0 !== CC.view && (oC[xC] = CC.view), CC.unreliable && qC.push(xC), CC.patchOnly && FC.push(xC), CC.deprecated && (WC[xC] = CC.deprecatedThrows), CC.fullStateOnly && NC.push(xC), CC.stream && MC.push(xC), void 0 !== CC.streamPriority && (gC[xC] = CC.streamPriority), CC.optional && SC.push(xC), fC(xC, CC)
        } else {
          if ("function" !== typeof ZC) throw new Error(`${bC} must be a t.* builder, Schema subclass, or method (got ${typeof ZC}).`);
          KQ.is(ZC) ? (QC[xC] = ZC, ZC.prototype.initialize && 0 !== ZC.prototype.initialize.length || (nC[xC] = () => new ZC)) : wC[xC] = ZC
        }
      }
      const pC = CC => {
          for (const zC in bC) CC[zC] = bC[zC];
          for (const zC in nC) CC[zC] = nC[zC]()
        },
        PC = () => {
          const CC = {};
          return pC(CC), CC
        },
        GC = "function" === typeof wC.initialize,
        RC = wC.initialize ?? ZC._initialize,
        AC = class extends ZC {
          constructor() {
            for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
            const wC = zC[0];
            void 0 === wC ? (super(), pC(this)) : super(Object.assign(PC(), GC ? (CC => {
              const zC = Object.keys(QC),
                ZC = {};
              for (const QC in CC) zC.includes(QC) || (ZC[QC] = CC[QC]);
              return ZC
            })(wC) : wC)), RC && new.target === AC && RC.apply(this, zC)
          }
        };
      zC && Object.defineProperty(AC, "name", {
        value: zC
      }), Lz.setFields(AC, QC), AC._getDefaultValues = PC, AC._initialize = RC, Object.assign(AC.prototype, wC);
      for (const xC in oC) pQ(oC[xC])(AC.prototype, xC);
      for (const xC of qC) PQ(AC.prototype, xC);
      for (const xC of FC) GQ(AC.prototype, xC);
      for (const xC in WC) IQ(WC[xC])(AC.prototype, xC);
      if (NC.length > 0 || MC.length > 0) {
        const CC = AC[Symbol.metadata];
        for (const zC of NC) Lz.setFullStateOnly(CC, zC);
        for (const zC of MC) Lz.setStream(CC, zC);
        for (const zC in gC) Lz.setStreamPriority(CC, zC, gC[zC])
      }
      if (SC.length > 0) {
        const CC = AC[Symbol.metadata];
        for (const zC of SC) CC[CC[zC]].optional = !0
      }
      return AC.extend = (CC, zC) => eQ(CC, zC, AC), AC
    }

    function hQ(CC) {
      const zC = CC[SC].root,
        ZC = {
          ops: {},
          refs: []
        };
      let QC = zC.changes.next;
      for (; QC;) {
        const CC = QC.changeTree;
        void 0 !== CC ? (ZC.refs.push(`refId#${CC.ref[fC]}`), CC.forEach(((CC, zC) => {
          if (CC < 0 || !zC) return;
          const QC = wC[zC];
          ZC.ops[QC] || (ZC.ops[QC] = 0), ZC.ops[QC]++
        })), QC = QC.next) : QC = QC.next
      }
      return ZC
    }
    class KQ {
      static[qC] = EZ;
      static[FC] = UZ;
      [fC];
      [xC];
      static initialize(CC) {
        Object.defineProperty(CC, SC, {
          value: new YZ(CC),
          enumerable: !1,
          writable: !0
        }), CC[xC] = []
      }
      static initializeForDecoder() {
        const CC = Object.create(this.prototype);
        return mZ(CC), CC[xC] = [], CC
      }
      static reset(CC) {
        const zC = CC?.[SC];
        if (void 0 === zC || "function" !== typeof zC.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== zC.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${CC.constructor.name}) with multiple parents.`);
        CC[RC]()
      } [RC]() {
        const CC = this.constructor[Symbol.metadata],
          zC = CC?.[hC] ?? [],
          ZC = this[xC];
        for (let QC = 0; QC < zC.length; QC++) {
          const CC = ZC[zC[QC]];
          CC?.[RC]?.()
        }
        this[SC].recycle(), this[fC] = void 0
      }
      static is(CC) {
        const zC = CC[Symbol.metadata];
        return "object" === typeof zC && null !== zC
      }
      static isSchema(CC) {
        return "function" === typeof CC?.assign
      }
      static[oC](CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.ADD;
        CC.change(zC, ZC)
      }
      static[WC](CC, zC, ZC) {
        const QC = CC.constructor[Symbol.metadata],
          wC = QC[zC]?.tag;
        return void 0 === ZC ? void 0 === wC : void 0 === wC || (wC === gQ ? ZC.isChangeTreeVisible(CC[SC]) : ZC.hasTagOnTree(CC[SC], wC))
      }
      constructor(CC) {
        KQ.initialize(this), CC && KQ.assignProps(this, CC)
      }
      assign(CC) {
        return KQ.assignProps(this, CC), this
      }
      static assignProps(CC, zC) {
        const ZC = CC.constructor[Symbol.metadata];
        if (ZC && void 0 !== ZC[eC])
          for (let wC = 0; wC <= ZC[eC]; wC++) {
            const QC = ZC[wC];
            if (!QC) continue;
            const bC = zC[QC.name];
            void 0 !== bC && (CC[QC.name] = bC)
          }
        const QC = Object.keys(zC);
        for (let wC = 0; wC < QC.length; wC++) {
          const bC = QC[wC];
          ZC && void 0 !== ZC[bC] || (CC[bC] = zC[bC])
        }
      }
      restore(CC) {
        const zC = this.constructor[Symbol.metadata];
        for (const ZC in zC) {
          const QC = zC[ZC],
            wC = QC.name,
            bC = QC.type,
            nC = CC[wC];
          if (void 0 !== nC && null !== nC)
            if ("string" === typeof bC) this[wC] = nC;
            else if (KQ.is(bC)) {
            const CC = new bC;
            CC.restore(nC), this[wC] = CC
          } else if ("object" === typeof bC) {
            const CC = Object.keys(bC)[0],
              zC = bC[CC];
            if ("map" === CC) {
              const CC = this[wC];
              for (const ZC in nC)
                if (KQ.is(zC)) {
                  const QC = new zC;
                  QC.restore(nC[ZC]), CC.set(ZC, QC)
                } else CC.set(ZC, nC[ZC])
            } else if ("array" === CC) {
              const CC = this[wC];
              for (let ZC = 0; ZC < nC.length; ZC++)
                if (KQ.is(zC)) {
                  const QC = new zC;
                  QC.restore(nC[ZC]), CC.push(QC)
                } else CC.push(nC[ZC])
            }
          }
        }
        return this
      }
      setDirty(CC, zC) {
        const ZC = this.constructor[Symbol.metadata];
        this[SC].change(ZC[ZC[CC]].index, zC)
      }
      pauseTracking() {
        this[SC].pause()
      }
      resumeTracking() {
        this[SC].resume()
      }
      untracked(CC) {
        return this[SC].untracked(CC)
      }
      get isTrackingPaused() {
        return this[SC].paused
      }
      clone() {
        const CC = Object.create(this.constructor.prototype);
        KQ.initialize(CC);
        const zC = this.constructor[Symbol.metadata];
        for (const ZC in zC) {
          const QC = zC[ZC].name;
          "object" === typeof this[QC] && "function" === typeof this[QC]?.clone ? CC[QC] = this[QC].clone() : CC[QC] = this[QC]
        }
        return CC
      }
      toJSON() {
        const CC = {},
          zC = this.constructor[Symbol.metadata];
        for (const ZC in zC) {
          const QC = zC[ZC],
            wC = QC.name;
          QC.deprecated || null === this[wC] || "undefined" === typeof this[wC] || (CC[wC] = "function" === typeof this[wC].toJSON ? this[wC].toJSON() : this[wC])
        }
        return CC
      }
      discardAllChanges() {
        this[SC].discardAll()
      } [NC](CC) {
        return this[this.constructor[Symbol.metadata][CC].name]
      } [MC](CC) {
        this[this.constructor[Symbol.metadata][CC].name] = void 0
      }
      static debugRefIds(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 ? arguments[3] : void 0,
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const bC = zC ? ` - ${JSON.stringify(CC.toJSON())}` : "",
          nC = CC[SC],
          oC = CC[fC],
          qC = QC ? QC.root.refCount[oC] : nC.refCount,
          FC = qC > 1 ? ` [\xd7${qC}]` : "";
        let WC = `${function(CC){return new Array(CC).fill(0).map(((zC,ZC)=>ZC===CC-1?"\u2514\u2500 ":"   ")).join("")}(ZC)}${wC}${CC.constructor.name} (refId: ${oC})${FC}${bC}\n`;
        return nC.forEachChild(((wC, bC) => {
          let nC = bC;
          "number" === typeof bC && CC.$indexes && (nC = CC.$indexes.get(bC) ?? bC);
          const fC = void 0 !== CC.forEach && void 0 !== nC ? `["${nC}"]: ` : "";
          WC += this.debugRefIds(wC.ref, zC, ZC + 1, QC, fC)
        })), WC
      }
      static debugRefIdEncodingOrder(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const ZC = [],
          QC = CC[SC];
        if ("changes" === zC) {
          let CC = QC.root.changes?.next;
          for (; CC;) CC.changeTree && ZC.push(CC.changeTree.ref[fC]), CC = CC.next;
          return ZC
        }
        const wC = "allFilteredChanges" === zC,
          bC = new Set,
          nC = CC => {
            bC.has(CC) || (bC.add(CC), CC.isFiltered === wC && ZC.push(CC.ref[fC]), CC.forEachChild(((CC, zC) => nC(CC))))
          };
        return nC(QC), ZC
      }
      static debugRefIdsFromDecoder(CC) {
        return this.debugRefIds(CC.state, !1, 0, CC)
      }
      static debugChanges(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = CC[SC],
          QC = zC ? "allChanges" : "changes";
        let bC = `${CC.constructor.name} (${CC[fC]}) -> .${QC}:\n`;
        return zC ? ZC.forEachLive((CC => {
          bC += `- [${CC}]: ADD (${JSON.stringify(ZC.getValue(Number(CC),!0))})\n`
        })) : ZC.forEach(((CC, zC) => {
          CC < 0 || !zC || (bC += `- [${CC}]: ${wC[zC]} (${JSON.stringify(ZC.getValue(Number(CC),!1))})\n`)
        })), bC
      }
    }
    bC(KQ);
    const YQ = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class dQ {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const CC = {};
        for (const zC in this.changeTrees) CC[zC] = this.changeTrees[zC].refCount;
        return CC
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
      enqueueFilterRefresh(CC) {
        this.types.hasFilters && (CC.flags & hZ || (CC.flags |= hZ, this.pendingFilterRefresh.push(CC)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(CC) {
        this._freeViewIds.push(CC)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(CC) {
        this.activeViews.set(CC.id, new WeakRef(CC))
      }
      unregisterView(CC) {
        this.activeViews.delete(CC.id);
        const zC = CC.id;
        for (const ZC of this.streamTrees) ZC._dropView(zC)
      }
      forEachActiveView(CC) {
        for (const [zC, ZC] of this.activeViews) {
          const QC = ZC.deref();
          if (void 0 !== QC) CC(QC);
          else {
            this.activeViews.delete(zC);
            for (const CC of this.streamTrees) CC._dropView(zC)
          }
        }
      }
      registerStream(CC) {
        this.streamTrees.add(CC)
      }
      unregisterStream(CC) {
        this.streamTrees.delete(CC)
      }
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = CC, this.nextUniqueId = zC
      }
      add(CC) {
        const zC = CC.ref;
        void 0 === zC[fC] && (YQ.value = this.nextUniqueId++, Object.defineProperty(zC, fC, YQ));
        const ZC = zC[fC],
          QC = void 0 === this.changeTrees[ZC];
        QC && (this.changeTrees[ZC] = CC), CC.needsRestage && (CC.needsRestage = !1, CC.forEachLiveWithCtx(CC, ZZ));
        const wC = QC ? 0 : CC.refCount;
        return CC.refCount = wC + 1, wC > 0 && this.enqueueFilterRefresh(CC), QC
      }
      remove(CC) {
        const zC = CC.refCount - 1;
        if (zC <= 0) {
          if (CC.root = void 0, delete this.changeTrees[CC.ref[fC]], CC.isStreamCollection) {
            const zC = CC.ref;
            zC._unregister?.(), this.unregisterStream(zC)
          }
          this.removeFromQueue(CC), this.removeFromUnreliableQueue(CC), CC.refCount = 0, CC.needsRestage = !0, CC.forEachChild(((zC, ZC) => {
            zC.removeParent(CC.ref) && (void 0 === zC.parentRef || zC.refCount > 0 ? this.remove(zC) : this.moveNextToParent(zC))
          }))
        } else CC.refCount = zC, this.enqueueFilterRefresh(CC), this.recursivelyMoveNextToParent(CC);
        return zC
      }
      recursivelyMoveNextToParent(CC) {
        this.moveNextToParent(CC), CC.forEachChild(((CC, zC) => this.recursivelyMoveNextToParent(CC)))
      }
      moveNextToParent(CC) {
        CC.changesNode && this._moveNextToParentInList(this.changes, CC, CC.changesNode, "changesNode"), CC.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, CC, CC.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(CC, zC, ZC, QC) {
        const wC = zC.parent;
        if (!wC || !wC[SC]) return;
        const bC = wC[SC][QC];
        bC && bC !== ZC && (ZC.position > bC.position || (ZC.prev ? ZC.prev.next = ZC.next : CC.next = ZC.next, ZC.next ? ZC.next.prev = ZC.prev : CC.tail = ZC.prev, ZC.prev = CC.tail, ZC.next = void 0, CC.tail.next = ZC, CC.tail = ZC, ZC.position = CC.nextPosition++))
      }
      enqueueChangeTree(CC) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC.changesNode) || (CC.changesNode = this._appendToList(this.changes, CC))
      }
      enqueueUnreliable(CC) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC.unreliableChangesNode) || (CC.unreliableChangesNode = this._appendToList(this.unreliableChanges, CC))
      }
      _appendToList(CC, zC) {
        const ZC = this._nodePool;
        let QC;
        return ZC.length > 0 ? (QC = ZC.pop(), QC.changeTree = zC, QC.next = void 0, QC.prev = void 0) : QC = {
          changeTree: zC,
          next: void 0,
          prev: void 0,
          position: 0
        }, CC.next ? (QC.prev = CC.tail, CC.tail.next = QC, CC.tail = QC) : (CC.nextPosition = 0, CC.next = QC, CC.tail = QC), QC.position = CC.nextPosition++, QC
      }
      releaseNode(CC) {
        CC.changeTree = void 0, CC.prev = void 0, CC.next = void 0, this._nodePool.push(CC)
      }
      removeFromQueue(CC) {
        return this._removeNode(this.changes, CC, CC.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(CC) {
        return this._removeNode(this.unreliableChanges, CC, CC.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(CC, zC, ZC, QC) {
        return !(!ZC || ZC.changeTree !== zC) && (ZC.prev ? ZC.prev.next = ZC.next : CC.next = ZC.next, ZC.next ? ZC.next.prev = ZC.prev : CC.tail = ZC.prev, zC[QC] = void 0, this.releaseNode(ZC), !0)
      }
    }

    function mQ(CC, zC) {
      if (-1 === zC || zC >= CC.length) return !1;
      const ZC = CC.length - 1;
      for (let QC = zC; QC < ZC; QC++) CC[QC] = CC[QC + 1];
      return CC.length = ZC, !0
    }

    function HQ(CC, zC, ZC) {
      const QC = ~ZC,
        wC = CC.changeTrees;
      for (const bC in wC) {
        const CC = wC[bC],
          ZC = CC.visibleViews;
        void 0 !== ZC && zC < ZC.length && (ZC[zC] &= QC);
        const nC = CC.subscribedViews;
        void 0 !== nC && zC < nC.length && (nC[zC] &= QC);
        const fC = CC.tagViews;
        void 0 !== fC && fC.forEach((CC => {
          zC < CC.length && (CC[zC] &= QC)
        }))
      }
    }
    const EQ = new FinalizationRegistry((CC => {
      let {
        root: zC,
        id: ZC,
        slot: QC,
        bit: wC
      } = CC;
      HQ(zC, QC, wC), zC.activeViews.delete(ZC);
      for (const bC of zC.streamTrees) bC._dropView(ZC);
      zC.releaseViewId(ZC)
    }));

    function lQ(CC) {
      if (void 0 === CC) return "undefined";
      if (null === CC) return "null";
      const zC = typeof CC;
      return "string" === zC ? JSON.stringify(CC.length > 30 ? `${CC.slice(0,30)}\u2026` : CC) : "object" !== zC && "function" !== zC ? `${zC} ${String(CC)}` : Array.isArray(CC) ? `Array(${CC.length})` : CC.constructor?.name ?? "Object"
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
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = CC, CC && (this.items = [])
      }
      _bindRoot(CC) {
        void 0 === this._root && (this._root = CC, this.id = CC.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), CC.registerView(this), EQ.register(this, {
          root: CC,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), HQ(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), EQ.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(CC) {
        const zC = CC.visibleViews,
          ZC = this._slot;
        return void 0 !== zC && ZC < zC.length && 0 !== (zC[ZC] & this._bit)
      }
      markVisible(CC) {
        const zC = this._slot;
        let ZC = CC.visibleViews;
        for (void 0 === ZC && (ZC = CC.visibleViews = []); ZC.length <= zC;) ZC.push(0);
        ZC[zC] |= this._bit
      }
      unmarkVisible(CC) {
        const zC = CC.visibleViews;
        if (void 0 === zC) return;
        const ZC = this._slot;
        ZC < zC.length && (zC[ZC] &= ~this._bit)
      }
      isSubscribed(CC) {
        const zC = CC.subscribedViews,
          ZC = this._slot;
        return void 0 !== zC && ZC < zC.length && 0 !== (zC[ZC] & this._bit)
      }
      _setSubscribed(CC) {
        const zC = this._slot;
        let ZC = CC.subscribedViews;
        for (void 0 === ZC && (ZC = CC.subscribedViews = []); ZC.length <= zC;) ZC.push(0);
        ZC[zC] |= this._bit
      }
      _clearSubscribed(CC) {
        const zC = CC.subscribedViews;
        if (void 0 === zC) return;
        const ZC = this._slot;
        ZC < zC.length && (zC[ZC] &= ~this._bit)
      }
      hasTagOnTree(CC, zC) {
        const ZC = CC.tagViews;
        if (void 0 === ZC) return !1;
        const QC = this._slot,
          wC = this._bit;
        for (let bC = zC; 0 !== bC; bC &= bC - 1) {
          const CC = ZC.get(bC & -bC);
          if (void 0 !== CC && QC < CC.length && 0 !== (CC[QC] & wC)) return !0
        }
        return !1
      }
      addTag(CC, zC) {
        if (zC === gQ) return;
        let ZC = CC.tagViews;
        void 0 === ZC && (ZC = CC.tagViews = new Map);
        const QC = this._slot,
          wC = this._bit;
        for (let bC = zC; bC > 0; bC &= bC - 1) {
          const CC = bC & -bC;
          let zC = ZC.get(CC);
          for (void 0 === zC && (zC = [], ZC.set(CC, zC)); zC.length <= QC;) zC.push(0);
          zC[QC] |= wC
        }
      }
      removeTag(CC, zC) {
        if (zC === gQ) return;
        const ZC = CC.tagViews;
        if (void 0 === ZC) return;
        const QC = this._slot,
          wC = ~this._bit;
        for (let bC = zC; bC > 0; bC &= bC - 1) {
          const CC = ZC.get(bC & -bC);
          void 0 !== CC && QC < CC.length && (CC[QC] &= wC)
        }
      }
      removeAllTagsOnTree(CC) {
        const zC = CC.tagViews;
        if (void 0 === zC) return;
        const ZC = this._slot,
          QC = ~this._bit;
        zC.forEach((CC => {
          ZC < CC.length && (CC[ZC] &= QC)
        }))
      }
      add(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gQ,
          ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(CC, zC, ZC, !1)
      }
      _addImmediate(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gQ;
        this._add(CC, zC, !0, !0)
      }
      _add(CC, zC, ZC, QC) {
        const bC = CC?.[SC];
        if (!bC) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${lQ(CC)}`), !1;
        const nC = bC.parent;
        if (!nC && 0 !== CC[fC]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${bC.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== bC.root && this._bindRoot(bC.root);
        const oC = nC?.[SC];
        if (!QC && oC?.isStreamCollection) return mz(nC, this.id, bC.parentIndex), !0;
        const qC = CC.constructor[Symbol.metadata],
          FC = this.isVisible(bC);
        if (!this.iterable || !ZC || FC && -1 !== this.items.indexOf(CC) || this.items.push(CC), this.markVisible(bC), ZC && nC && this.addParentOf(bC, zC), !QC && bC.isStreamCollection) return !0;
        if (zC === gQ && bC.isNew) return this._markSubtreeVisible(bC, zC), !1;
        let WC = this.changes.get(CC[fC]);
        void 0 === WC && (WC = new Map, this.changes.set(CC[fC], WC));
        let NC = !1;
        const MC = bC.encDescriptor.tags;
        if (bC.forEachChild(((CC, ZC) => {
            const QC = MC[ZC];
            if (void 0 !== QC) {
              if (!(QC === gQ || zC !== gQ && 0 !== (QC & zC))) return
            }
            this.add(CC.ref, zC, !1) && (NC = !0)
          })), zC !== gQ) {
          this.addTag(bC, zC);
          const CC = qC?.[YC];
          if (void 0 !== CC)
            for (let ZC = zC; ZC > 0; ZC &= ZC - 1) CC[ZC & -ZC]?.forEach((CC => {
              bC.getChange(CC) !== wC.DELETE && WC.set(CC, wC.ADD)
            }))
        }
        if ((zC === gQ || !FC) && (!bC.isNew || NC))
          if (bC.isArray && "string" !== typeof bC.refTarget[pC]) bC.refTarget.items.length > 0 && (WC.set(-1, wC.ADD), NC = !0);
          else {
            const CC = bC.encDescriptor.tags;
            bC.forEachLive((ZC => {
              const QC = CC[ZC];
              (void 0 === QC || QC === gQ || zC !== gQ && 0 !== (QC & zC)) && (WC.set(ZC, wC.ADD), NC = !0)
            }))
          } return NC
      }
      _markSubtreeVisible(CC, zC) {
        const ZC = CC.encDescriptor.tags;
        CC.forEachChild(((CC, QC) => {
          const wC = ZC[QC];
          if (void 0 !== wC) {
            if (!(wC === gQ || zC !== gQ && 0 !== (wC & zC))) return
          }
          CC.isNew ? (this.markVisible(CC), this._markSubtreeVisible(CC, zC)) : this._add(CC.ref, zC, !1, !1)
        }))
      }
      addParentOf(CC, zC) {
        const ZC = CC.parent[SC],
          QC = CC.parentIndex;
        this.isVisible(ZC) || this.markVisible(ZC);
        const bC = ZC.parent?.[SC];
        if (bC && this.addParentOf(ZC, zC), ZC.hasFilteredFields && ZC.getChange(QC) !== wC.DELETE) {
          let bC = this.changes.get(ZC.ref[fC]);
          void 0 === bC && (bC = new Map, this.changes.set(ZC.ref[fC], bC));
          const nC = ZC.encDescriptor.tags[QC];
          void 0 !== nC && nC !== gQ && 0 !== (nC & zC) && this.addTag(ZC, zC), bC.set(ZC.isArray ? CC : QC, wC.ADD)
        }
      }
      _touchAncestorsOf(CC) {
        let zC = CC.parent?.[SC];
        if (void 0 === zC) return;
        const ZC = [];
        for (; void 0 !== zC;) {
          if (zC.hasFilteredFields) {
            const CC = zC.ref[fC];
            if (this.changes.has(CC)) break;
            ZC.push(zC)
          }
          zC = zC.parent?.[SC]
        }
        for (let QC = ZC.length - 1; QC >= 0; QC--) this.changes.set(ZC[QC].ref[fC], new Map)
      }
      remove(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gQ,
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = CC?.[SC];
        if (!QC) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${lQ(CC)}`), this;
        const bC = QC.parent?.[SC];
        if (bC?.isStreamCollection) return this.unmarkVisible(QC), this.iterable && !ZC && mQ(this.items, this.items.indexOf(CC)),
          function(CC, zC, ZC, QC, bC) {
            const nC = CC._stream;
            if (void 0 === nC) return !1;
            const fC = nC.pendingByView.get(zC);
            if (fC?.has(QC)) return fC.delete(QC), !1;
            const oC = nC.sentByView.get(zC);
            if (oC?.has(QC)) {
              oC.delete(QC);
              let CC = bC.get(ZC);
              return void 0 === CC && (CC = new Map, bC.set(ZC, CC)), CC.set(QC, wC.DELETE), !0
            }
          }(QC.parent, this.id, QC.parent[fC], QC.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(QC), this;
        if (QC.isStreamCollection) {
          this.unmarkVisible(QC), this.iterable && !ZC && mQ(this.items, this.items.indexOf(CC));
          const zC = QC.ref,
            bC = zC._stream;
          if (void 0 !== bC) {
            bC.pendingByView.get(this.id)?.clear();
            const CC = bC.sentByView.get(this.id);
            if (void 0 !== CC && CC.size > 0) {
              const ZC = zC[fC];
              let QC = this.changes.get(ZC);
              void 0 === QC && (QC = new Map, this.changes.set(ZC, QC));
              for (const zC of CC) QC.set(zC, wC.DELETE);
              CC.clear()
            }
          }
          return this
        }
        this.unmarkVisible(QC), this.iterable && !ZC && mQ(this.items, this.items.indexOf(CC));
        const nC = QC.ref,
          oC = nC.constructor[Symbol.metadata],
          qC = nC[fC];
        this._touchAncestorsOf(QC);
        let FC = this.changes.get(qC);
        if (void 0 === FC && (FC = new Map, this.changes.set(qC, FC)), zC === gQ) {
          const CC = QC.parent;
          if (CC && !Lz.isValidInstance(CC) && QC.isFiltered) {
            const zC = bC.isArray ? QC : QC.parentIndex,
              ZC = CC[fC];
            let nC = this.changes.get(ZC);
            void 0 === nC ? (nC = new Map, this.changes.set(ZC, nC)) : nC.get(zC) === wC.ADD && this._dropPendingEntries(QC), nC.set(zC, wC.DELETE), this._recursiveDeleteVisibleChangeTree(QC)
          } else oC?.[KC]?.forEach((CC => this._removeViewField(QC, FC, CC)))
        } else {
          const CC = oC?.[YC];
          if (void 0 !== CC)
            for (let ZC = zC; ZC > 0; ZC &= ZC - 1) CC[ZC & -ZC]?.forEach((CC => this._removeViewField(QC, FC, CC)))
        }
        return void 0 === zC ? this.removeAllTagsOnTree(QC) : this.removeTag(QC, zC), this
      }
      has(CC) {
        return this.isVisible(CC[SC])
      }
      hasTag(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gQ;
        return this.hasTagOnTree(CC[SC], zC)
      }
      subscribe(CC, zC) {
        const ZC = CC?.[SC];
        if (!ZC) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${lQ(CC)}`), this;
        if (void 0 === this._root && void 0 !== ZC.root && this._bindRoot(ZC.root), void 0 !== zC)
          if (ZC.isStreamCollection) {
            const ZC = ez(CC);
            null === zC ? ZC.priorityByView?.delete(this.id) : (ZC.priorityByView ??= new Map).set(this.id, zC)
          } else {
            const zC = CC?.constructor?.name ?? "collection",
              QC = ZC.parent;
            if (void 0 === QC) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${zC} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const CC = QC?.constructor?.[Symbol.metadata]?.[ZC.parentIndex]?.name,
                wC = CC ? `${QC.constructor.name}#${CC}` : zC;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${wC} is a ${zC}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(ZC)) return this;
        const QC = void 0 !== ZC.parent && !this.isVisible(ZC);
        if (QC ? (this.addParentOf(ZC, gQ), this._add(CC, gQ, !1, !1)) : this.markVisible(ZC), this._setSubscribed(ZC), ZC.isStreamCollection) {
          const zC = CC;
          ZC.forEachChild(((CC, ZC) => {
            mz(zC, this.id, ZC)
          }))
        } else QC || ZC.forEachChild((CC => {
          this.markVisible(CC)
        }));
        return this
      }
      unsubscribe(CC) {
        const zC = CC?.[SC];
        if (!zC) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${lQ(CC)}`), this;
        if (!this.isSubscribed(zC)) return this;
        this._clearSubscribed(zC);
        const ZC = zC.ref[fC];
        if (zC.isStreamCollection) {
          const zC = CC._stream;
          if (void 0 !== zC) {
            zC.pendingByView.get(this.id)?.clear();
            const CC = zC.sentByView.get(this.id);
            if (void 0 !== CC && CC.size > 0) {
              let zC = this.changes.get(ZC);
              void 0 === zC && (zC = new Map, this.changes.set(ZC, zC));
              for (const ZC of CC) zC.set(ZC, wC.DELETE);
              CC.clear()
            }
          }
        } else {
          const CC = zC.isArray;
          let QC = this.changes.get(ZC);
          zC.forEachChild(((zC, bC) => {
            void 0 === QC && (QC = new Map, this.changes.set(ZC, QC)), QC.set(CC ? zC : bC, wC.DELETE), this.unmarkVisible(zC)
          }))
        }
        return this.unmarkVisible(zC), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let CC = 0, zC = this.items.length; CC < zC; CC++) this.remove(this.items[CC], gQ, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(CC) {
        let zC = this.isVisible(CC);
        if (!zC && CC.isVisibilitySharedWithParent)
          if (this.isVisible(CC.parent[SC])) this.markVisible(CC), zC = !0;
          else
            for (let ZC = CC.extraParents; void 0 !== ZC; ZC = ZC.next) {
              const QC = ZC.ref[SC];
              if (QC.isFiltered && this.isVisible(QC)) {
                this.markVisible(CC), zC = !0;
                break
              }
            }
        return zC
      }
      _recursiveDeleteVisibleChangeTree(CC) {
        CC.forEachChild((CC => {
          this.unmarkVisible(CC), this._recursiveDeleteVisibleChangeTree(CC)
        }))
      }
      _dropPendingEntries(CC) {
        this.changes.delete(CC.ref[fC]), CC.forEachChild((CC => this._dropPendingEntries(CC)))
      }
      _removeViewField(CC, zC, ZC) {
        const QC = zC.get(ZC) === wC.ADD;
        zC.set(ZC, wC.DELETE);
        const bC = CC.ref[CC.encDescriptor.names[ZC]],
          nC = bC?.[SC];
        nC && (this.unmarkVisible(nC), this._recursiveDeleteVisibleChangeTree(nC), QC && this._dropPendingEntries(nC))
      }
    }

    function cQ(CC) {
      CC.structSwitchEmitted || (CC.shouldEmitSwitch && (CC.buffer[CC.it.offset++] = 255, zz.number(CC.buffer, CC.ref[fC], CC.it)), CC.structSwitchEmitted = !0)
    }

    function uQ(CC, zC) {
      TQ(CC, zC, wC.ADD)
    }

    function rQ(CC, zC) {
      if (zC._fullSyncGen === CC.gen) return;
      zC._fullSyncGen = CC.gen;
      if (!CC.hasView || CC.view.isChangeTreeVisible(zC)) {
        const ZC = zC.encDescriptor;
        CC.changeTree = zC, CC.ref = zC.ref, CC.encoder = ZC.encoder, CC.filter = ZC.filter, CC.metadata = ZC.metadata, CC.treeIsFiltered = zC.isFiltered, CC.isSchema = ZC.isSchema, CC.filterBitmask = ZC.filterBitmask, CC.tags = ZC.tags, CC.structSwitchEmitted = !1, CC.shouldEmitSwitch = CC.hasView || CC.it.offset > CC.initialOffset || zC !== CC.rootChangeTree, zC.isArray && zC.collDirty.size > 0 && (zC.flags |= 512), wZ(zC, CC, uQ)
      }
      PZ(zC, CC, sQ)
    }

    function sQ(CC, zC, ZC) {
      rQ(CC, zC)
    }

    function TQ(CC, zC, ZC) {
      if (zC < 0) {
        if (CC.treeIsFiltered !== CC.emitFiltered) return;
        return cQ(CC), void(CC.buffer[CC.it.offset++] = 255 & Math.abs(zC))
      }
      if ((CC.isSchema ? CC.treeIsFiltered || (zC < 32 ? 0 !== (CC.filterBitmask & 1 << zC) : void 0 !== CC.tags[zC]) : CC.treeIsFiltered) !== CC.emitFiltered) return;
      const QC = CC.isEncodeAll ? wC.ADD : ZC;
      void 0 !== QC && (void 0 === CC.filter || CC.filter(CC.ref, zC, CC.view)) && (cQ(CC), CC.encoder(CC.self, CC.buffer, CC.changeTree, zC, QC, CC.it, CC.isEncodeAll, CC.hasView, CC.metadata))
    }

    function aQ(CC, zC) {
      const ZC = new Uint8Array(CC.length + zC.length);
      return ZC.set(CC, 0), ZC.set(zC, CC.length), ZC
    }
    class tQ {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(tQ.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(CC, zC) {
        this.context = sz.cache(CC.constructor), this.root = zC ?? new dQ(this.context), this.setState(CC)
      }
      setState(CC) {
        this.state = CC, this.state[SC].setRoot(this.root)
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
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC.offset;
        return this._encodeChannel(CC, zC, ZC, QC, !1)
      }
      encodeUnreliable() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC.offset;
        return this._encodeChannel(CC, zC, ZC, QC, !0)
      }
      _encodeChannel(CC, zC, ZC, QC, wC) {
        this.root.pendingFilterRefresh.length > 0 && nZ(this.root);
        const bC = void 0 !== zC,
          nC = this.state[SC],
          fC = this._encodeCtx;
        fC.self = this, fC.buffer = ZC, fC.it = CC, fC.view = zC, fC.isEncodeAll = !1, fC.hasView = bC, fC.emitFiltered = bC;
        let oC = wC ? this.root.unreliableChanges : this.root.changes;
        for (; oC = oC.next;) {
          const ZC = oC.changeTree;
          if (bC && !zC.isChangeTreeVisible(ZC)) continue;
          const qC = wC ? ZC.unreliableRecorder : ZC;
          if (!qC || !qC.has()) continue;
          const FC = ZC.encDescriptor;
          fC.changeTree = ZC, fC.ref = ZC.ref, fC.encoder = FC.encoder, fC.filter = FC.filter, fC.metadata = FC.metadata, fC.treeIsFiltered = ZC.isFiltered, fC.isSchema = FC.isSchema, fC.filterBitmask = FC.filterBitmask, fC.tags = FC.tags, fC.structSwitchEmitted = !1, fC.isRootTree = ZC === nC, fC.shouldEmitSwitch = bC || CC.offset > QC || !fC.isRootTree, qC.forEachWithCtx(fC, TQ)
        }
        return wC || bC || !this._isStreamBroadcastMode || this._emitStreamBroadcast(ZC, CC), CC.offset > ZC.byteLength ? (ZC = this._resizeBuffer(ZC, CC.offset), CC.offset = QC, this._encodeChannel(CC, zC, ZC, QC, wC)) : ZC.subarray(0, CC.offset)
      }
      encodeFullSync(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : CC.offset;
        this.root.pendingFilterRefresh.length > 0 && nZ(this.root);
        const bC = void 0 !== QC,
          nC = this.state[SC],
          fC = this._encodeCtx;
        return fC.self = this, fC.buffer = zC, fC.it = CC, fC.view = QC, fC.isEncodeAll = !0, fC.hasView = bC, fC.emitFiltered = ZC, fC.gen = ++this._fullSyncGen, fC.initialOffset = wC, fC.rootChangeTree = nC, rQ(fC, nC), CC.offset > zC.byteLength ? (zC = this._resizeBuffer(zC, CC.offset), CC.offset = wC, this.encodeFullSync(CC, zC, ZC, QC, wC)) : zC.subarray(0, CC.offset)
      }
      _resizeBuffer(CC, zC) {
        const ZC = Math.ceil(zC / tQ.BUFFER_SIZE) * tQ.BUFFER_SIZE,
          QC = new Uint8Array(ZC);
        return QC.set(CC), CC === this.sharedBuffer && (this.sharedBuffer = QC), QC
      }
      encodeAll() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(CC, zC, !1)
      }
      encodeAllView(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const wC = ZC.offset;
        return QC = this.encodeFullSync(ZC, QC, !0, CC, wC), aQ(QC.subarray(0, zC), QC.subarray(wC, ZC.offset))
      }
      ensureCapacity(CC, zC) {
        if (zC + tQ.BUFFER_SIZE <= CC.byteLength) return CC;
        const ZC = Math.ceil((zC + tQ.BUFFER_SIZE) / tQ.BUFFER_SIZE) * tQ.BUFFER_SIZE,
          QC = new Uint8Array(ZC);
        return QC.set(CC.subarray(0, zC)), CC === this.sharedBuffer && (this.sharedBuffer = QC), QC
      }
      encodeView(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          bC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const nC = ZC.offset;
        this._emitStreamPriority(CC);
        for (const oC of CC.changes.keys()) {
          const zC = CC.changes.get(oC),
            bC = this.root.changeTrees[oC];
          if (void 0 === bC) {
            CC.changes.delete(oC);
            continue
          }
          if (0 === zC.size) continue;
          const nC = bC.encDescriptor,
            qC = nC.encoder,
            FC = nC.metadata,
            WC = bC.ref,
            MC = bC.refTarget;
          QC = this.ensureCapacity(QC, ZC.offset), QC[ZC.offset++] = 255, zz.number(QC, WC[fC], ZC);
          for (const [oC, gC] of zC) {
            let zC;
            if (-1 === oC) {
              const CC = MC.tmpItems,
                zC = MC.deletedIndexes;
              for (let nC = 0; nC < CC.length; nC++) void 0 !== CC[nC] && !0 !== zC[nC] && qC(this, QC, bC, nC, wC.ADD, ZC, !1, !0, FC);
              continue
            }
            if ("number" === typeof oC) zC = oC;
            else {
              const ZC = oC.indexInParent(WC);
              if (void 0 === ZC) continue;
              if (zC = ZC, gC === wC.ADD && bC.getChange(zC) === wC.DELETE) {
                CC.changes.delete(oC.ref[fC]);
                continue
              }
            }
            qC(this, QC, bC, zC, void 0 !== MC[NC](zC) && gC || wC.DELETE, ZC, !1, !0, FC)
          }
        }
        return CC.changes.clear(), QC = this.encode(ZC, CC, QC), bC ? aQ(QC.subarray(0, zC), QC.subarray(nC, ZC.offset)) : QC.subarray(nC, ZC.offset)
      }
      encodeUnreliableView(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const wC = ZC.offset;
        return QC = this.encodeUnreliable(ZC, CC, QC, wC), aQ(QC.subarray(0, zC), QC.subarray(wC, ZC.offset))
      }
      _emitStreamBroadcast(CC, zC) {
        const ZC = this.root.streamTrees;
        for (const QC of ZC) {
          const ZC = QC,
            bC = ZC[SC],
            nC = ZC[fC];
          if (void 0 === nC) continue;
          const oC = ZC._stream,
            qC = oC.broadcastDeletes,
            FC = oC.broadcastPending,
            WC = oC.sentBroadcast,
            MC = qC.size > 0,
            gC = FC.size > 0,
            pC = bC.encDescriptor,
            PC = pC.encoder,
            GC = pC.metadata;
          if (MC || gC) {
            if (CC[zC.offset++] = 255, zz.number(CC, nC, zC), MC) {
              for (const ZC of qC) PC(this, CC, bC, ZC, wC.DELETE, zC, !1, !1, GC);
              qC.clear()
            }
            const QC = oC.maxPerTick,
              gC = [];
            let pC = 0;
            const RC = [];
            for (const nC of FC) {
              if (pC >= QC) break;
              const fC = ZC[NC](nC);
              void 0 !== fC ? (PC(this, CC, bC, nC, wC.ADD, zC, !1, !1, GC), WC.add(nC), gC.push(fC), RC.push(nC), pC++) : RC.push(nC)
            }
            for (const CC of RC) FC.delete(CC);
            for (const ZC of gC) {
              const QC = ZC[SC];
              if (void 0 === QC) continue;
              const bC = ZC[fC];
              if (void 0 === bC) continue;
              CC[zC.offset++] = 255, zz.number(CC, bC, zC);
              const nC = QC.encDescriptor,
                oC = nC.encoder,
                qC = nC.metadata;
              QC.forEachLive((ZC => {
                Lz.hasUnreliableAtIndex(qC, ZC) || oC(this, CC, QC, ZC, wC.ADD, zC, !1, !1, qC)
              }))
            }
          }
          for (const QC of WC) {
            const wC = ZC[NC](QC);
            if (void 0 === wC) continue;
            const bC = wC[SC];
            if (void 0 === bC || !bC.has()) continue;
            const nC = wC[fC];
            if (void 0 === nC) continue;
            CC[zC.offset++] = 255, zz.number(CC, nC, zC);
            const oC = bC.encDescriptor,
              qC = oC.encoder,
              FC = oC.metadata;
            bC.forEach(((ZC, QC) => {
              ZC < 0 || Lz.hasUnreliableAtIndex(FC, ZC) || qC(this, CC, bC, ZC, QC, zC, !1, !1, FC)
            }))
          }
        }
      }
      _emitStreamPriority(CC) {
        const zC = this.root.streamTrees;
        if (0 === zC.size) return;
        const ZC = CC.id;
        for (const QC of zC) {
          const zC = QC,
            bC = zC._stream,
            nC = bC.pendingByView.get(ZC);
          if (void 0 === nC || 0 === nC.size) continue;
          const oC = bC.priorityByView?.get(ZC),
            qC = void 0 !== oC,
            FC = bC.priority,
            WC = bC.maxPerTick,
            MC = [],
            gC = [];
          if (qC || void 0 !== FC) {
            const ZC = [],
              QC = [];
            let wC = 0;
            for (const bC of nC) {
              const nC = zC[NC](bC);
              if (void 0 === nC) {
                gC.push(bC);
                continue
              }
              const fC = qC ? oC(nC) : FC(CC, nC);
              if (wC < WC) {
                let CC = wC++;
                for (; CC > 0 && QC[CC - 1] < fC;) QC[CC] = QC[CC - 1], ZC[CC] = ZC[CC - 1], CC--;
                QC[CC] = fC, ZC[CC] = bC
              } else if (fC > QC[WC - 1]) {
                let CC = WC - 1;
                for (; CC > 0 && QC[CC - 1] < fC;) QC[CC] = QC[CC - 1], ZC[CC] = ZC[CC - 1], CC--;
                QC[CC] = fC, ZC[CC] = bC
              }
            }
            for (let CC = 0; CC < wC; CC++) MC.push(ZC[CC])
          } else
            for (const CC of nC) {
              if (MC.length >= WC) break;
              MC.push(CC)
            }
          for (const CC of gC) nC.delete(CC);
          const pC = MC.length;
          let PC = bC.sentByView.get(ZC);
          void 0 === PC && (PC = new Set, bC.sentByView.set(ZC, PC));
          for (let ZC = 0; ZC < pC; ZC++) {
            const QC = MC[ZC],
              bC = zC[NC](QC);
            if (void 0 === bC) {
              nC.delete(QC);
              continue
            }
            CC._addImmediate(bC);
            const oC = bC[SC];
            if (void 0 !== oC) {
              const zC = bC[fC];
              let ZC = CC.changes.get(zC);
              void 0 === ZC && (ZC = new Map, CC.changes.set(zC, ZC));
              const QC = oC.metadata;
              oC.forEachLive((CC => {
                Lz.hasUnreliableAtIndex(QC, CC) || ZC.set(CC, wC.ADD)
              }))
            }
            nC.delete(QC), PC.add(QC)
          }
        }
      }
      discardChanges() {
        const CC = this.root.changes;
        let zC = CC.next;
        const ZC = this.root;
        for (; zC;) {
          const CC = zC.next;
          zC.changeTree.endEncode(), ZC.releaseNode(zC), zC = CC
        }
        CC.next = void 0, CC.tail = void 0
      }
      discardUnreliableChanges() {
        const CC = this.root.unreliableChanges;
        let zC = CC.next;
        const ZC = this.root;
        for (; zC;) {
          const CC = zC.next;
          zC.changeTree.endEncodeUnreliable(), ZC.releaseNode(zC), zC = CC
        }
        CC.next = void 0, CC.tail = void 0
      }
      tryEncodeTypeId(CC, zC, ZC, QC) {
        const wC = this.context.getTypeId(zC),
          bC = this.context.getTypeId(ZC);
        void 0 !== bC ? wC !== bC && (CC[QC.offset++] = 213, zz.number(CC, bC, QC)) : console.warn(`@colyseus/schema WARNING: Class "${ZC.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const CC = this.root;
        if (0 === CC.streamTrees.size) return !1;
        const zC = 0 === CC.activeViews.size;
        for (const ZC of CC.streamTrees)
          if (zC ? dz(ZC) : Yz(ZC, CC)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class DQ extends Error {
      constructor(CC) {
        super(CC), this.name = "DecodingWarning"
      }
    }
    const jQ = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class yQ {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(CC, zC), void 0 === zC[fC] ? (jQ.value = CC, Object.defineProperty(zC, fC, jQ)) : zC[fC] !== CC && (zC[fC] = CC), ZC && (this.refCount[CC] = (this.refCount[CC] || 0) + 1), this.deletedRefs.has(CC) && this.deletedRefs.delete(CC)
      }
      removeRef(CC) {
        const zC = this.refCount[CC];
        if (void 0 !== zC)
          if (0 !== zC)(this.refCount[CC] = zC - 1) <= 0 && this.deletedRefs.add(CC);
          else try {
            const zC = this.refs.get(CC);
            throw new DQ(`trying to remove refId '${CC}' with 0 refCount (${zC.constructor.name}: ${JSON.stringify(zC)})`)
          } catch (bw) {
            console.warn(bw)
          } else try {
            throw new DQ("trying to remove refId that doesn't exist: " + CC)
          } catch (bw) {
            console.warn(bw)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((CC => {
          if (this.refCount[CC] > 0) return;
          const zC = this.refs.get(CC),
            ZC = zC.constructor[Symbol.metadata];
          if (null != ZC)
            for (const QC in ZC) {
              const CC = zC[ZC[QC].name];
              if ("object" === typeof CC && CC) {
                const zC = CC[fC];
                void 0 === zC || this.deletedRefs.has(zC) || this.removeRef(zC)
              }
            } else "function" === typeof zC[pC] && Array.from(zC.values()).forEach((CC => {
              const zC = CC[fC];
              void 0 === zC || this.deletedRefs.has(zC) || this.removeRef(zC)
            }));
          this.refs.delete(CC), delete this.refCount[CC], delete this.callbacks[CC]
        })), this.deletedRefs.clear()
      }
      addCallback(CC, zC, ZC) {
        if (void 0 === CC) {
          const CC = "number" === typeof zC ? wC[zC] : zC;
          throw new Error(`Can't addCallback on '${CC}' (refId is undefined)`)
        }
        return this.callbacks[CC] || (this.callbacks[CC] = {}), this.callbacks[CC][zC] || (this.callbacks[CC][zC] = []), this.callbacks[CC][zC].push(ZC), () => this.removeCallback(CC, zC, ZC)
      }
      removeCallback(CC, zC, ZC) {
        const QC = this.callbacks?.[CC]?.[zC]?.indexOf(ZC);
        void 0 !== QC && -1 !== QC && mQ(this.callbacks[CC][zC], QC)
      }
    }
    class LQ {
      context;
      state;
      root;
      currentRefId = 0;
      qm;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(CC, zC) {
        this.setState(CC), this.context = zC || new sz(CC.constructor)
      }
      setState(CC) {
        this.state = CC, this.root = new yQ, this.root.addRef(0, CC)
      }
      decode(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const wC = void 0 !== this.qm ? [] : null,
          bC = this.root,
          nC = CC.byteLength;
        let fC = ZC.constructor[FC];
        for (this.currentRefId = 0; zC.offset < nC;) {
          if (CC[zC.offset] == QC) {
            zC.offset++, ZC[AC]?.();
            const QC = Rz.number(CC, zC),
              wC = bC.refs.get(QC);
            wC ? (ZC = wC, fC = ZC.constructor[FC], this.currentRefId = QC) : (console.error(`"refId" not found: ${QC}`, {
              previousRef: ZC,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(CC, zC, nC));
            continue
          } - 1 !== fC(this, CC, zC, ZC, wC) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(CC, zC, nC))
        }
        return ZC[AC]?.(), null !== this.resyncVisited && function(CC, zC) {
          CC.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : sZ(CC, CC.state, new Set, zC)
        }(this, wC), null !== wC && this.qm?.(wC), bC.garbageCollectDeletedRefs(), wC
      }
      decodeResync(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(CC, zC)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(CC, zC, ZC) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const wC = {
          offset: zC.offset
        };
        for (; zC.offset < ZC && (CC[zC.offset] !== QC || (wC.offset = zC.offset + 1, !this.root.refs.has(Rz.number(CC, wC))));) zC.offset++
      }
      getInstanceType(CC, zC, ZC) {
        let QC;
        if (213 === CC[zC.offset]) {
          zC.offset++;
          const ZC = Rz.number(CC, zC);
          QC = this.context.get(ZC)
        }
        return QC || ZC
      }
      createInstanceOfType(CC) {
        return CC.initializeForDecoder()
      }
      removeChildRefs(CC, zC) {
        const ZC = "string" !== typeof CC[pC],
          QC = CC[fC];
        CC.forEach(((bC, nC) => {
          zC?.push({
            ref: CC,
            refId: QC,
            op: wC.DELETE,
            field: nC,
            value: void 0,
            previousValue: bC
          }), ZC && this.root.removeRef(bC[fC])
        }))
      }
    }
    const UQ = eQ({
        min: MQ.float64(),
        max: MQ.float64(),
        bits: MQ.uint8(),
        mode: MQ.uint8()
      }, "QuantizedDescriptor"),
      BQ = eQ({
        name: MQ.string(),
        type: MQ.string(),
        referencedType: MQ.number(),
        childPrimitive: MQ.string(),
        quantized: MQ.ref(UQ).optional()
      }, "ReflectionField"),
      OQ = eQ({
        id: MQ.number(),
        extendsId: MQ.number(),
        fields: MQ.array(BQ)
      }, "ReflectionType"),
      kQ = eQ({
        types: MQ.array(OQ),
        rootType: MQ.number()
      }, "Reflection");

    function VQ(CC) {
      const zC = CC.root,
        ZC = zC.callbacks,
        QC = new WeakMap;
      let bC;

      function nC(CC, ZC) {
        let qC = ZC.instance?.constructor[Symbol.metadata] || CC,
          FC = ZC.instance && "function" === typeof ZC.instance.forEach || CC && !KQ.is(CC);
        if (qC && !FC) {
          const CC = function(CC, wC, nC, oC) {
            return oC && void 0 !== ZC.instance[wC] && !QC.has(bC) && nC(ZC.instance[wC], void 0), zC.addCallback(CC[fC], wC, nC)
          };
          return new Proxy({
            listen: function(zC, wC) {
              let nC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (ZC.instance) return CC(ZC.instance, zC, wC, nC);
              {
                let fC = () => {};
                return ZC.onInstanceAvailable(((ZC, oC) => {
                  fC = CC(ZC, zC, wC, nC && oC && !QC.has(bC))
                })), () => fC()
              }
            },
            onChange: function(CC) {
              return zC.addCallback(ZC.instance[fC], wC.REPLACE, CC)
            },
            bindTo: function(CC, QC) {
              return QC || (QC = Object.keys(qC).map((CC => qC[CC].name))), zC.addCallback(ZC.instance[fC], wC.REPLACE, (() => {
                QC.forEach((zC => CC[zC] = ZC.instance[zC]))
              }))
            }
          }, {
            get(CC, zC) {
              const QC = qC[qC[zC]];
              if (QC) {
                const CC = ZC.instance?.[zC],
                  wC = QC => {
                    const wC = oC(ZC.instance).listen(zC, ((CC, zC) => {
                      QC(CC, !1), wC?.()
                    }), !1);
                    void 0 !== CC?.[fC] && QC(CC, !0)
                  };
                return nC(QC.type, {
                  instance: void 0 !== CC?.[fC] && CC,
                  parentInstance: ZC.instance,
                  onInstanceAvailable: wC
                })
              }
              return CC[zC]
            },
            has: (CC, zC) => void 0 !== qC[zC],
            set(CC, zC, ZC) {
              throw new Error("not allowed")
            },
            deleteProperty(CC, zC) {
              throw new Error("not allowed")
            }
          })
        } {
          const CC = function(CC, ZC, nC) {
              return nC && CC.forEach(((CC, zC) => ZC(CC, zC))), zC.addCallback(CC[fC], wC.ADD, ((CC, zC) => {
                QC.set(ZC, !0), bC = ZC, ZC(CC, zC), QC.delete(ZC), bC = void 0
              }))
            },
            nC = function(CC, ZC) {
              return zC.addCallback(CC[fC], wC.DELETE, ZC)
            },
            oC = function(CC, ZC) {
              return zC.addCallback(CC[fC], wC.REPLACE, ZC)
            };
          return new Proxy({
            xR: function(zC) {
              let wC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (ZC.instance) return CC(ZC.instance, zC, wC && !QC.has(bC));
              if (ZC.onInstanceAvailable) {
                let nC = () => {};
                return ZC.onInstanceAvailable(((ZC, fC) => {
                  nC = CC(ZC, zC, wC && fC && !QC.has(bC))
                })), () => nC()
              }
            },
            lY: function(CC) {
              if (ZC.instance) return nC(ZC.instance, CC);
              if (ZC.onInstanceAvailable) {
                let zC = () => {};
                return ZC.onInstanceAvailable((ZC => {
                  zC = nC(ZC, CC)
                })), () => zC()
              }
            },
            onChange: function(CC) {
              if (ZC.instance) return oC(ZC.instance, CC);
              if (ZC.onInstanceAvailable) {
                let zC = () => {};
                return ZC.onInstanceAvailable((ZC => {
                  zC = oC(ZC, CC)
                })), () => zC()
              }
            }
          }, {
            get(CC, zC) {
              if (!CC[zC]) throw new Error(`Can't access '${zC}' through callback proxy. access the instance directly.`);
              return CC[zC]
            },
            has: (CC, zC) => void 0 !== CC[zC],
            set(CC, zC, ZC) {
              throw new Error("not allowed")
            },
            deleteProperty(CC, zC) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function oC(CC) {
        return nC(void 0, {
          instance: CC
        })
      }
      return CC.qm = function(CC) {
        const zC = new Set;
        for (let QC = 0, bC = CC.length; QC < bC; QC++) {
          const bC = CC[QC],
            nC = bC.refId,
            oC = bC.ref,
            qC = ZC[nC];
          if (qC) {
            if ((bC.op & wC.DELETE) === wC.DELETE && KQ.isSchema(bC.previousValue)) {
              const CC = ZC[bC.previousValue[fC]]?.[wC.DELETE];
              for (let zC = CC?.length - 1; zC >= 0; zC--) CC[zC]()
            }
            if (KQ.isSchema(oC)) {
              if (!zC.has(nC)) {
                const CC = qC?.[wC.REPLACE];
                for (let zC = CC?.length - 1; zC >= 0; zC--) CC[zC]()
              }
              if (qC.hasOwnProperty(bC.field)) {
                const CC = qC[bC.field];
                for (let zC = CC?.length - 1; zC >= 0; zC--) CC[zC](bC.value, bC.previousValue)
              }
            } else {
              if ((bC.op & wC.DELETE) === wC.DELETE) {
                if (void 0 !== bC.previousValue) {
                  const CC = qC[wC.DELETE];
                  for (let zC = CC?.length - 1; zC >= 0; zC--) CC[zC](bC.previousValue, bC.dynamicIndex ?? bC.field)
                }
                if ((bC.op & wC.ADD) === wC.ADD) {
                  const CC = qC[wC.ADD];
                  for (let zC = CC?.length - 1; zC >= 0; zC--) CC[zC](bC.value, bC.dynamicIndex ?? bC.field)
                }
              } else if ((bC.op & wC.ADD) === wC.ADD && bC.previousValue !== bC.value) {
                const CC = qC[wC.ADD];
                for (let zC = CC?.length - 1; zC >= 0; zC--) CC[zC](bC.value, bC.dynamicIndex ?? bC.field)
              }
              if (bC.value !== bC.previousValue && (void 0 !== bC.value || void 0 !== bC.previousValue)) {
                const CC = qC[wC.REPLACE];
                for (let zC = CC?.length - 1; zC >= 0; zC--) CC[zC](bC.value, bC.dynamicIndex ?? bC.field)
              }
            }
            zC.add(nC)
          }
        }
      }, oC
    }

    function Cw(CC, zC) {
      CC.qm = zC
    }
    kQ.encode = function(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const ZC = CC.context,
        QC = new kQ,
        wC = new tQ(QC),
        bC = ZC.schemas.get(CC.state.constructor);
      bC > 0 && (QC.rootType = bC);
      const nC = new Set,
        fC = {},
        oC = CC => {
          if (void 0 === CC.extendsId || nC.has(CC.extendsId)) {
            nC.add(CC.id), QC.types.push(CC);
            const zC = fC[CC.id];
            void 0 !== zC && (delete fC[CC.id], zC.forEach((CC => oC(CC))))
          } else void 0 === fC[CC.extendsId] && (fC[CC.extendsId] = []), fC[CC.extendsId].push(CC)
        };
      ZC.schemas.forEach(((CC, zC) => {
        const QC = new OQ;
        QC.id = Number(CC);
        const wC = Object.getPrototypeOf(zC);
        wC !== KQ && (QC.extendsId = ZC.schemas.get(wC));
        const bC = zC[Symbol.metadata];
        if (bC !== wC[Symbol.metadata]) {
          const CC = bC[eC] ?? -1;
          for (let zC = 0; zC <= CC; zC++) {
            const CC = bC[zC];
            if (void 0 === CC) continue;
            const wC = CC.name;
            if (!Object.prototype.hasOwnProperty.call(bC, wC)) continue;
            const nC = new BQ;
            let fC;
            if (nC.name = wC, "string" === typeof CC.type) fC = CC.type;
            else if (Xz(CC.type)) {
              const zC = CC.type.quantized;
              fC = "quantized";
              const ZC = new UQ;
              ZC.min = zC.min, ZC.max = zC.max, ZC.bits = zC.bits, ZC.mode = zC.wrap ? 1 : 0, nC.quantized = ZC
            } else {
              let zC;
              KQ.is(CC.type) ? (fC = "ref", zC = CC.type) : (fC = Object.keys(CC.type)[0], "string" === typeof CC.type[fC] ? nC.childPrimitive = CC.type[fC] : zC = CC.type[fC]), nC.referencedType = zC ? ZC.getTypeId(zC) : -1
            }
            nC.type = fC, QC.fields.push(nC)
          }
        }
        oC(QC)
      }));
      for (const qC in fC) fC[qC].forEach((CC => QC.types.push(CC)));
      return wC.encodeAll(zC).slice(0, zC.offset)
    }, kQ.decode = function(CC, zC) {
      const ZC = new kQ;
      new LQ(ZC).decode(CC, zC);
      const QC = new sz;
      ZC.types.forEach((CC => {
        const zC = QC.get(CC.extendsId) ?? KQ,
          ZC = class extends zC {};
        sz.register(ZC), QC.add(ZC, CC.id)
      }), {});
      ZC.types.forEach((CC => {
        const zC = QC.get(CC.id),
          wC = Lz.initialize(zC),
          bC = [];
        let nC = CC;
        do {
          bC.push(nC), nC = ZC.types.find((CC => CC.id === nC.extendsId))
        } while (nC);
        let fC = 0;
        bC.reverse().forEach((CC => {
          ((CC, zC, ZC) => {
            zC.fields.forEach(((zC, wC) => {
              const bC = ZC + wC;
              if (void 0 !== zC.quantized) {
                const ZC = zC.quantized;
                Lz.addField(CC, bC, zC.name, {
                  quantized: lz({
                    min: ZC.min,
                    max: ZC.max,
                    bits: ZC.bits,
                    mode: 1 === ZC.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== zC.referencedType) {
                const ZC = zC.type,
                  wC = QC.get(zC.referencedType) ?? zC.childPrimitive;
                "ref" === ZC ? Lz.addField(CC, bC, zC.name, wC) : Lz.addField(CC, bC, zC.name, {
                  [ZC]: wC
                })
              } else Lz.addField(CC, bC, zC.name, zC.type)
            }))
          })(wC, CC, fC), fC += CC.fields.length
        }))
      }));
      const wC = new(QC.get(ZC.rootType || 0));
      return new LQ(wC, QC)
    }, kQ.makeEncodable = function(CC) {
      const zC = CC[Symbol.metadata];
      if (!zC) return CC;
      const ZC = zC[eC];
      if (void 0 === ZC) return CC;
      for (let QC = 0; QC <= ZC; QC++) {
        const ZC = zC[QC];
        ZC && Lz.defineField(CC, zC, QC, ZC.name, ZC.type)
      }
      return Object.prototype.hasOwnProperty.call(CC, iC) && delete CC[iC], CC
    };
    class zw {
      wg;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(CC) {
        this.wg = CC, this.wg.qm = this.qm.bind(this)
      }
      get callbacks() {
        return this.wg.root.callbacks
      }
      get state() {
        return this.wg.state
      }
      addCallback(CC, zC, ZC) {
        return this.wg.root.addCallback(CC, zC, ZC)
      }
      addCallbackOrWaitCollectionAvailable(CC, zC, ZC, QC) {
        let bC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          nC = () => {};
        const oC = () => nC(),
          qC = CC[zC];
        if (qC && void 0 !== qC[fC]) return bC = bC && !1 === this.isTriggering, ZC === wC.ADD && bC && qC.forEach(((CC, zC) => {
          QC(CC, zC)
        })), this.addCallback(qC[fC], ZC, QC);
        {
          let wC;
          return wC = this.addCallback(CC[fC], zC, ((CC, zC) => {
            null !== CC && void 0 !== CC && (wC(), nC = this.addCallback(CC[fC], ZC, QC))
          })), nC = wC, oC
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(CC, zC, ZC) {
        let QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        QC = QC && !1 === this.isTriggering;
        const wC = CC[zC];
        return QC && null !== wC && void 0 !== wC && ZC(wC, void 0), this.addCallback(CC[fC], zC, ZC)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const CC = arguments.length <= 0 ? void 0 : arguments[0],
            zC = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(CC[fC], wC.REPLACE, zC)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], wC.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], wC.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      xR() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], wC.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], wC.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      lY() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], wC.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], wC.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(CC, zC, ZC) {
        let QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const bC = CC.constructor[Symbol.metadata];
        ZC || (ZC = Object.keys(bC).filter((CC => !isNaN(Number(CC)))).map((CC => bC[CC].name)));
        const nC = () => {
          for (const QC of ZC) {
            const ZC = CC[QC];
            void 0 !== ZC && (zC[QC] = ZC)
          }
        };
        return QC && nC(), this.addCallback(CC[fC], wC.REPLACE, nC)
      }
      qm(CC) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let zC = 0, ZC = CC.length; zC < ZC; zC++) {
          const ZC = CC[zC],
            QC = ZC.refId,
            bC = ZC.ref,
            nC = this.callbacks[QC];
          if (nC) {
            if ((ZC.op & wC.DELETE) === wC.DELETE && KQ.isSchema(ZC.previousValue)) {
              const CC = ZC.previousValue[fC],
                zC = this.callbacks[CC]?.[wC.DELETE];
              if (zC)
                for (let ZC = zC.length - 1; ZC >= 0; ZC--) try {
                  zC[ZC]()
                } catch (bw) {
                  console.error(bw)
                }
            }
            if (KQ.isSchema(bC)) {
              if (!this.uniqueRefIds.has(QC)) {
                const CC = nC[wC.REPLACE];
                if (CC)
                  for (let zC = CC.length - 1; zC >= 0; zC--) try {
                    CC[zC]()
                  } catch (bw) {
                    console.error(bw)
                  }
              }
              const CC = nC[ZC.field];
              if (CC)
                for (let zC = CC.length - 1; zC >= 0; zC--) try {
                  CC[zC](ZC.value, ZC.previousValue)
                } catch (bw) {
                  console.error(bw)
                }
            } else {
              const CC = ZC.dynamicIndex ?? ZC.field;
              if ((ZC.op & wC.DELETE) === wC.DELETE) {
                if (void 0 !== ZC.previousValue) {
                  const zC = nC[wC.DELETE];
                  if (zC)
                    for (let QC = zC.length - 1; QC >= 0; QC--) try {
                      zC[QC](ZC.previousValue, CC)
                    } catch (bw) {
                      console.error(bw)
                    }
                }
                if ((ZC.op & wC.ADD) === wC.ADD) {
                  const zC = nC[wC.ADD];
                  if (zC)
                    for (let QC = zC.length - 1; QC >= 0; QC--) try {
                      zC[QC](ZC.value, CC)
                    } catch (bw) {
                      console.error(bw)
                    }
                }
              } else if ((ZC.op & wC.ADD) === wC.ADD && ZC.previousValue !== ZC.value) {
                const zC = nC[wC.ADD];
                if (zC)
                  for (let QC = zC.length - 1; QC >= 0; QC--) try {
                    zC[QC](ZC.value, CC)
                  } catch (bw) {
                    console.error(bw)
                  }
              }
              if (ZC.value !== ZC.previousValue) {
                const zC = nC[wC.REPLACE];
                if (zC)
                  for (let QC = zC.length - 1; QC >= 0; QC--) try {
                    zC[QC](CC, ZC.value)
                  } catch (bw) {
                    console.error(bw)
                  }
              }
            }
            this.uniqueRefIds.add(QC)
          }
        }
        this.isTriggering = !1
      }
    }
    const Zw = {
      get(CC) {
        if (CC instanceof LQ) return new zw(CC);
        if ("wg" in CC.JG) return new zw(CC.JG.wg);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(CC) {
        if (CC instanceof LQ) return VQ(CC);
        if ("wg" in CC.JG) return VQ(CC.JG.wg);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (CC, zC) => Cw(CC, zC)
    };
    class Qw {
      _free = [];
      _factory;
      _maxSize;
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = CC, this._maxSize = zC.maxSize ?? 1 / 0;
        const ZC = zC.preallocate ?? 0;
        for (let QC = 0; QC < ZC; QC++) this._free.push(CC())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(CC) {
        KQ.reset(CC), this._free.length < this._maxSize && this._free.push(CC)
      }
      get size() {
        return this._free.length
      }
    }

    function ww(CC) {
      return new Qw((() => new CC), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Jz("map", {
      constructor: wQ
    }), Jz("array", {
      constructor: ZQ
    }), Jz("set", {
      constructor: nQ
    }), Jz("collection", {
      constructor: bQ
    })
  },
  9079: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      __addDisposableResource: () => XC,
      __assign: () => bC,
      __asyncDelegator: () => vC,
      __asyncGenerator: () => iC,
      __asyncValues: () => eC,
      __await: () => IC,
      __awaiter: () => gC,
      __classPrivateFieldGet: () => HC,
      __classPrivateFieldIn: () => lC,
      __classPrivateFieldSet: () => EC,
      __createBinding: () => pC,
      __decorate: () => fC,
      __disposeResources: () => uC,
      __esDecorate: () => qC,
      __exportStar: () => PC,
      __extends: () => wC,
      __generator: () => SC,
      __importDefault: () => mC,
      __importStar: () => dC,
      __makeTemplateObject: () => hC,
      __metadata: () => MC,
      __param: () => oC,
      __propKey: () => WC,
      __read: () => RC,
      __rest: () => nC,
      __rewriteRelativeImportExtension: () => rC,
      __runInitializers: () => FC,
      __setFunctionName: () => NC,
      __spread: () => AC,
      __spreadArray: () => JC,
      __spreadArrays: () => xC,
      __values: () => GC,
      default: () => sC
    });
    var QC = function(CC, zC) {
      return QC = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(CC, zC) {
        CC.__proto__ = zC
      } || function(CC, zC) {
        for (var ZC in zC) Object.prototype.hasOwnProperty.call(zC, ZC) && (CC[ZC] = zC[ZC])
      }, QC(CC, zC)
    };

    function wC(CC, zC) {
      if ("function" !== typeof zC && null !== zC) throw new TypeError("Class extends value " + String(zC) + " is not a constructor or null");

      function ZC() {
        this.constructor = CC
      }
      QC(CC, zC), CC.prototype = null === zC ? Object.create(zC) : (ZC.prototype = zC.prototype, new ZC)
    }
    var bC = function() {
      return bC = Object.assign || function(CC) {
        for (var zC, ZC = 1, QC = arguments.length; ZC < QC; ZC++)
          for (var wC in zC = arguments[ZC]) Object.prototype.hasOwnProperty.call(zC, wC) && (CC[wC] = zC[wC]);
        return CC
      }, bC.apply(this, arguments)
    };

    function nC(CC, zC) {
      var ZC = {};
      for (var QC in CC) Object.prototype.hasOwnProperty.call(CC, QC) && zC.indexOf(QC) < 0 && (ZC[QC] = CC[QC]);
      if (null != CC && "function" === typeof Object.getOwnPropertySymbols) {
        var wC = 0;
        for (QC = Object.getOwnPropertySymbols(CC); wC < QC.length; wC++) zC.indexOf(QC[wC]) < 0 && Object.prototype.propertyIsEnumerable.call(CC, QC[wC]) && (ZC[QC[wC]] = CC[QC[wC]])
      }
      return ZC
    }

    function fC(CC, zC, ZC, QC) {
      var wC, bC = arguments.length,
        nC = bC < 3 ? zC : null === QC ? QC = Object.getOwnPropertyDescriptor(zC, ZC) : QC;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) nC = Reflect.decorate(CC, zC, ZC, QC);
      else
        for (var fC = CC.length - 1; fC >= 0; fC--)(wC = CC[fC]) && (nC = (bC < 3 ? wC(nC) : bC > 3 ? wC(zC, ZC, nC) : wC(zC, ZC)) || nC);
      return bC > 3 && nC && Object.defineProperty(zC, ZC, nC), nC
    }

    function oC(CC, zC) {
      return function(ZC, QC) {
        zC(ZC, QC, CC)
      }
    }

    function qC(CC, zC, ZC, QC, wC, bC) {
      function nC(CC) {
        if (void 0 !== CC && "function" !== typeof CC) throw new TypeError("Function expected");
        return CC
      }
      for (var fC, oC = QC.kind, qC = "getter" === oC ? "get" : "setter" === oC ? "set" : "value", FC = !zC && CC ? QC.static ? CC : CC.prototype : null, WC = zC || (FC ? Object.getOwnPropertyDescriptor(FC, QC.name) : {}), NC = !1, MC = ZC.length - 1; MC >= 0; MC--) {
        var gC = {};
        for (var SC in QC) gC[SC] = "access" === SC ? {} : QC[SC];
        for (var SC in QC.access) gC.access[SC] = QC.access[SC];
        gC.addInitializer = function(CC) {
          if (NC) throw new TypeError("Cannot add initializers after decoration has completed");
          bC.push(nC(CC || null))
        };
        var pC = (0, ZC[MC])("accessor" === oC ? {
          get: WC.get,
          set: WC.set
        } : WC[qC], gC);
        if ("accessor" === oC) {
          if (void 0 === pC) continue;
          if (null === pC || "object" !== typeof pC) throw new TypeError("Object expected");
          (fC = nC(pC.get)) && (WC.get = fC), (fC = nC(pC.set)) && (WC.set = fC), (fC = nC(pC.init)) && wC.unshift(fC)
        } else(fC = nC(pC)) && ("field" === oC ? wC.unshift(fC) : WC[qC] = fC)
      }
      FC && Object.defineProperty(FC, QC.name, WC), NC = !0
    }

    function FC(CC, zC, ZC) {
      for (var QC = arguments.length > 2, wC = 0; wC < zC.length; wC++) ZC = QC ? zC[wC].call(CC, ZC) : zC[wC].call(CC);
      return QC ? ZC : void 0
    }

    function WC(CC) {
      return "symbol" === typeof CC ? CC : "".concat(CC)
    }

    function NC(CC, zC, ZC) {
      return "symbol" === typeof zC && (zC = zC.description ? "[".concat(zC.description, "]") : ""), Object.defineProperty(CC, "name", {
        configurable: !0,
        value: ZC ? "".concat(ZC, " ", zC) : zC
      })
    }

    function MC(CC, zC) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(CC, zC)
    }

    function gC(CC, zC, ZC, QC) {
      return new(ZC || (ZC = Promise))((function(wC, bC) {
        function nC(CC) {
          try {
            oC(QC.next(CC))
          } catch (zC) {
            bC(zC)
          }
        }

        function fC(CC) {
          try {
            oC(QC.throw(CC))
          } catch (zC) {
            bC(zC)
          }
        }

        function oC(CC) {
          var zC;
          CC.done ? wC(CC.value) : (zC = CC.value, zC instanceof ZC ? zC : new ZC((function(CC) {
            CC(zC)
          }))).then(nC, fC)
        }
        oC((QC = QC.apply(CC, zC || [])).next())
      }))
    }

    function SC(CC, zC) {
      var ZC, QC, wC, bC = {
          label: 0,
          sent: function() {
            if (1 & wC[0]) throw wC[1];
            return wC[1]
          },
          trys: [],
          ops: []
        },
        nC = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return nC.next = fC(0), nC.throw = fC(1), nC.return = fC(2), "function" === typeof Symbol && (nC[Symbol.iterator] = function() {
        return this
      }), nC;

      function fC(fC) {
        return function(oC) {
          return function(fC) {
            if (ZC) throw new TypeError("Generator is already executing.");
            for (; nC && (nC = 0, fC[0] && (bC = 0)), bC;) try {
              if (ZC = 1, QC && (wC = 2 & fC[0] ? QC.return : fC[0] ? QC.throw || ((wC = QC.return) && wC.call(QC), 0) : QC.next) && !(wC = wC.call(QC, fC[1])).done) return wC;
              switch (QC = 0, wC && (fC = [2 & fC[0], wC.value]), fC[0]) {
                case 0:
                case 1:
                  wC = fC;
                  break;
                case 4:
                  return bC.label++, {
                    value: fC[1],
                    done: !1
                  };
                case 5:
                  bC.label++, QC = fC[1], fC = [0];
                  continue;
                case 7:
                  fC = bC.ops.pop(), bC.trys.pop();
                  continue;
                default:
                  if (!(wC = (wC = bC.trys).length > 0 && wC[wC.length - 1]) && (6 === fC[0] || 2 === fC[0])) {
                    bC = 0;
                    continue
                  }
                  if (3 === fC[0] && (!wC || fC[1] > wC[0] && fC[1] < wC[3])) {
                    bC.label = fC[1];
                    break
                  }
                  if (6 === fC[0] && bC.label < wC[1]) {
                    bC.label = wC[1], wC = fC;
                    break
                  }
                  if (wC && bC.label < wC[2]) {
                    bC.label = wC[2], bC.ops.push(fC);
                    break
                  }
                  wC[2] && bC.ops.pop(), bC.trys.pop();
                  continue
              }
              fC = zC.call(CC, bC)
            } catch (oC) {
              fC = [6, oC], QC = 0
            } finally {
              ZC = wC = 0
            }
            if (5 & fC[0]) throw fC[1];
            return {
              value: fC[0] ? fC[1] : void 0,
              done: !0
            }
          }([fC, oC])
        }
      }
    }
    var pC = Object.create ? function(CC, zC, ZC, QC) {
      void 0 === QC && (QC = ZC);
      var wC = Object.getOwnPropertyDescriptor(zC, ZC);
      wC && !("get" in wC ? !zC.__esModule : wC.writable || wC.configurable) || (wC = {
        enumerable: !0,
        get: function() {
          return zC[ZC]
        }
      }), Object.defineProperty(CC, QC, wC)
    } : function(CC, zC, ZC, QC) {
      void 0 === QC && (QC = ZC), CC[QC] = zC[ZC]
    };

    function PC(CC, zC) {
      for (var ZC in CC) "default" === ZC || Object.prototype.hasOwnProperty.call(zC, ZC) || pC(zC, CC, ZC)
    }

    function GC(CC) {
      var zC = "function" === typeof Symbol && Symbol.iterator,
        ZC = zC && CC[zC],
        QC = 0;
      if (ZC) return ZC.call(CC);
      if (CC && "number" === typeof CC.length) return {
        next: function() {
          return CC && QC >= CC.length && (CC = void 0), {
            value: CC && CC[QC++],
            done: !CC
          }
        }
      };
      throw new TypeError(zC ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function RC(CC, zC) {
      var ZC = "function" === typeof Symbol && CC[Symbol.iterator];
      if (!ZC) return CC;
      var QC, wC, bC = ZC.call(CC),
        nC = [];
      try {
        for (;
          (void 0 === zC || zC-- > 0) && !(QC = bC.next()).done;) nC.push(QC.value)
      } catch (fC) {
        wC = {
          error: fC
        }
      } finally {
        try {
          QC && !QC.done && (ZC = bC.return) && ZC.call(bC)
        } finally {
          if (wC) throw wC.error
        }
      }
      return nC
    }

    function AC() {
      for (var CC = [], zC = 0; zC < arguments.length; zC++) CC = CC.concat(RC(arguments[zC]));
      return CC
    }

    function xC() {
      for (var CC = 0, zC = 0, ZC = arguments.length; zC < ZC; zC++) CC += arguments[zC].length;
      var QC = Array(CC),
        wC = 0;
      for (zC = 0; zC < ZC; zC++)
        for (var bC = arguments[zC], nC = 0, fC = bC.length; nC < fC; nC++, wC++) QC[wC] = bC[nC];
      return QC
    }

    function JC(CC, zC, ZC) {
      if (ZC || 2 === arguments.length)
        for (var QC, wC = 0, bC = zC.length; wC < bC; wC++) !QC && wC in zC || (QC || (QC = Array.prototype.slice.call(zC, 0, wC)), QC[wC] = zC[wC]);
      return CC.concat(QC || Array.prototype.slice.call(zC))
    }

    function IC(CC) {
      return this instanceof IC ? (this.v = CC, this) : new IC(CC)
    }

    function iC(CC, zC, ZC) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var QC, wC = ZC.apply(CC, zC || []),
        bC = [];
      return QC = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), nC("next"), nC("throw"), nC("return", (function(CC) {
        return function(zC) {
          return Promise.resolve(zC).then(CC, qC)
        }
      })), QC[Symbol.asyncIterator] = function() {
        return this
      }, QC;

      function nC(CC, zC) {
        wC[CC] && (QC[CC] = function(zC) {
          return new Promise((function(ZC, QC) {
            bC.push([CC, zC, ZC, QC]) > 1 || fC(CC, zC)
          }))
        }, zC && (QC[CC] = zC(QC[CC])))
      }

      function fC(CC, zC) {
        try {
          (ZC = wC[CC](zC)).value instanceof IC ? Promise.resolve(ZC.value.v).then(oC, qC) : FC(bC[0][2], ZC)
        } catch (QC) {
          FC(bC[0][3], QC)
        }
        var ZC
      }

      function oC(CC) {
        fC("next", CC)
      }

      function qC(CC) {
        fC("throw", CC)
      }

      function FC(CC, zC) {
        CC(zC), bC.shift(), bC.length && fC(bC[0][0], bC[0][1])
      }
    }

    function vC(CC) {
      var zC, ZC;
      return zC = {}, QC("next"), QC("throw", (function(CC) {
        throw CC
      })), QC("return"), zC[Symbol.iterator] = function() {
        return this
      }, zC;

      function QC(QC, wC) {
        zC[QC] = CC[QC] ? function(zC) {
          return (ZC = !ZC) ? {
            value: IC(CC[QC](zC)),
            done: !1
          } : wC ? wC(zC) : zC
        } : wC
      }
    }

    function eC(CC) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var zC, ZC = CC[Symbol.asyncIterator];
      return ZC ? ZC.call(CC) : (CC = GC(CC), zC = {}, QC("next"), QC("throw"), QC("return"), zC[Symbol.asyncIterator] = function() {
        return this
      }, zC);

      function QC(ZC) {
        zC[ZC] = CC[ZC] && function(zC) {
          return new Promise((function(QC, wC) {
            (function(CC, zC, ZC, QC) {
              Promise.resolve(QC).then((function(zC) {
                CC({
                  value: zC,
                  done: ZC
                })
              }), zC)
            })(QC, wC, (zC = CC[ZC](zC)).done, zC.value)
          }))
        }
      }
    }

    function hC(CC, zC) {
      return Object.defineProperty ? Object.defineProperty(CC, "raw", {
        value: zC
      }) : CC.raw = zC, CC
    }
    var KC = Object.create ? function(CC, zC) {
        Object.defineProperty(CC, "default", {
          enumerable: !0,
          value: zC
        })
      } : function(CC, zC) {
        CC.default = zC
      },
      YC = function(CC) {
        return YC = Object.getOwnPropertyNames || function(CC) {
          var zC = [];
          for (var ZC in CC) Object.prototype.hasOwnProperty.call(CC, ZC) && (zC[zC.length] = ZC);
          return zC
        }, YC(CC)
      };

    function dC(CC) {
      if (CC && CC.__esModule) return CC;
      var zC = {};
      if (null != CC)
        for (var ZC = YC(CC), QC = 0; QC < ZC.length; QC++) "default" !== ZC[QC] && pC(zC, CC, ZC[QC]);
      return KC(zC, CC), zC
    }

    function mC(CC) {
      return CC && CC.__esModule ? CC : {
        default: CC
      }
    }

    function HC(CC, zC, ZC, QC) {
      if ("a" === ZC && !QC) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof zC ? CC !== zC || !QC : !zC.has(CC)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ZC ? QC : "a" === ZC ? QC.call(CC) : QC ? QC.value : zC.get(CC)
    }

    function EC(CC, zC, ZC, QC, wC) {
      if ("m" === QC) throw new TypeError("Private method is not writable");
      if ("a" === QC && !wC) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof zC ? CC !== zC || !wC : !zC.has(CC)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === QC ? wC.call(CC, ZC) : wC ? wC.value = ZC : zC.set(CC, ZC), ZC
    }

    function lC(CC, zC) {
      if (null === zC || "object" !== typeof zC && "function" !== typeof zC) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof CC ? zC === CC : CC.has(zC)
    }

    function XC(CC, zC, ZC) {
      if (null !== zC && void 0 !== zC) {
        if ("object" !== typeof zC && "function" !== typeof zC) throw new TypeError("Object expected.");
        var QC, wC;
        if (ZC) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          QC = zC[Symbol.asyncDispose]
        }
        if (void 0 === QC) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          QC = zC[Symbol.dispose], ZC && (wC = QC)
        }
        if ("function" !== typeof QC) throw new TypeError("Object not disposable.");
        wC && (QC = function() {
          try {
            wC.call(this)
          } catch (CC) {
            return Promise.reject(CC)
          }
        }), CC.stack.push({
          value: zC,
          dispose: QC,
          async: ZC
        })
      } else ZC && CC.stack.push({
        async: !0
      });
      return zC
    }
    var cC = "function" === typeof SuppressedError ? SuppressedError : function(CC, zC, ZC) {
      var QC = new Error(ZC);
      return QC.name = "SuppressedError", QC.error = CC, QC.suppressed = zC, QC
    };

    function uC(CC) {
      function zC(zC) {
        CC.error = CC.hasError ? new cC(zC, CC.error, "An error was suppressed during disposal.") : zC, CC.hasError = !0
      }
      var ZC, QC = 0;
      return function wC() {
        for (; ZC = CC.stack.pop();) try {
          if (!ZC.async && 1 === QC) return QC = 0, CC.stack.push(ZC), Promise.resolve().then(wC);
          if (ZC.dispose) {
            var bC = ZC.dispose.call(ZC.value);
            if (ZC.async) return QC |= 2, Promise.resolve(bC).then(wC, (function(CC) {
              return zC(CC), wC()
            }))
          } else QC |= 1
        } catch (nC) {
          zC(nC)
        }
        if (1 === QC) return CC.hasError ? Promise.reject(CC.error) : Promise.resolve();
        if (CC.hasError) throw CC.error
      }()
    }

    function rC(CC, zC) {
      return "string" === typeof CC && /^\.\.?\//.test(CC) ? CC.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(CC, ZC, QC, wC, bC) {
        return ZC ? zC ? ".jsx" : ".js" : !QC || wC && bC ? QC + wC + "." + bC.toLowerCase() + "js" : CC
      })) : CC
    }
    const sC = {
      __extends: wC,
      __assign: bC,
      __rest: nC,
      __decorate: fC,
      __param: oC,
      __esDecorate: qC,
      __runInitializers: FC,
      __propKey: WC,
      __setFunctionName: NC,
      __metadata: MC,
      __awaiter: gC,
      __generator: SC,
      __createBinding: pC,
      __exportStar: PC,
      __values: GC,
      __read: RC,
      __spread: AC,
      __spreadArrays: xC,
      __spreadArray: JC,
      __await: IC,
      __asyncGenerator: iC,
      __asyncDelegator: vC,
      __asyncValues: eC,
      __makeTemplateObject: hC,
      __importStar: dC,
      __importDefault: mC,
      __classPrivateFieldGet: HC,
      __classPrivateFieldSet: EC,
      __classPrivateFieldIn: lC,
      __addDisposableResource: XC,
      __disposeResources: uC,
      __rewriteRelativeImportExtension: rC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);