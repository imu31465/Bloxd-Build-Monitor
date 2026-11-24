export const id = 187;
export const ids = [187];
export const modules = {
  9316: (TT, UT) => {
    UT.discordURLBuilder = function(TT) {
      var UT;
      const mT = (null === (UT = null === window || void 0 === window ? void 0 : window.location) || void 0 === UT ? void 0 : UT.hostname) || "localhost",
        WT = TT.hostname.split("."),
        zT = !TT.hostname.includes("trycloudflare.com") && !TT.hostname.includes("discordsays.com") && WT.length > 2 ? `/${WT[0]}` : "";
      return TT.pathname.startsWith("/.proxy") ? `${TT.protocol}//${mT}${zT}${TT.pathname}${TT.search}` : `${TT.protocol}//${mT}/.proxy/colyseus${zT}${TT.pathname}${TT.search}`
    }
  },
  9306: (TT, UT, mT) => {
    var WT, zT, MT, gT, nT = mT(9217),
      HT = mT(9314),
      kT = mT(9265);
    WT = new WeakMap, zT = new WeakMap, MT = new WeakMap, gT = new WeakMap, UT.Auth = class {
      constructor(TT) {
        this.http = TT, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, WT.set(this, !1), zT.set(this, void 0), MT.set(this, void 0), gT.set(this, kT.createNanoEvents()), HT.getItem(this.settings.key, (TT => this.token = TT))
      }
      set token(TT) {
        this.http.authToken = TT
      }
      get token() {
        return this.http.authToken
      }
      onChange(TT) {
        const UT = nT.__classPrivateFieldGet(this, gT, "f").on("change", TT);
        return nT.__classPrivateFieldGet(this, WT, "f") || nT.__classPrivateFieldSet(this, zT, new Promise(((TT, UT) => {
          this.getUserData().then((TT => {
            this.emitChange(Object.assign(Object.assign({}, TT), {
              token: this.token
            }))
          })).catch((TT => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            TT()
          }))
        })), "f"), nT.__classPrivateFieldSet(this, WT, !0, "f"), UT
      }
      getUserData() {
        return nT.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(TT, UT, mT) {
        return nT.__awaiter(this, void 0, void 0, (function*() {
          const WT = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: TT,
              password: UT,
              options: mT
            }
          })).data;
          return this.emitChange(WT), WT
        }))
      }
      signInWithEmailAndPassword(TT, UT) {
        return nT.__awaiter(this, void 0, void 0, (function*() {
          const mT = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: TT,
              password: UT
            }
          })).data;
          return this.emitChange(mT), mT
        }))
      }
      signInAnonymously(TT) {
        return nT.__awaiter(this, void 0, void 0, (function*() {
          const UT = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: TT
            }
          })).data;
          return this.emitChange(UT), UT
        }))
      }
      sendPasswordResetEmail(TT) {
        return nT.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: TT
            }
          })).data
        }))
      }
      signInWithProvider(TT) {
        return nT.__awaiter(this, arguments, void 0, (function*(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((mT, WT) => {
            const zT = UT.width || 480,
              gT = UT.height || 768,
              HT = this.token ? `?token=${this.token}` : "",
              kT = `Login with ${TT[0].toUpperCase()+TT.substring(1)}`,
              jT = this.http.client.getHttpEndpoint(`${UT.prefix||`${this.settings.path}/provider`}/${TT}${HT}`),
              lT = screen.width / 2 - zT / 2,
              LT = screen.height / 2 - gT / 2;
            nT.__classPrivateFieldSet(this, MT, window.open(jT, kT, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + zT + ", height=" + gT + ", top=" + LT + ", left=" + lT), "f");
            const pT = TT => {
                void 0 === TT.data.user && void 0 === TT.data.token || (clearInterval(BT), nT.__classPrivateFieldGet(this, MT, "f").close(), nT.__classPrivateFieldSet(this, MT, void 0, "f"), window.removeEventListener("message", pT), void 0 !== TT.data.error ? WT(TT.data.error) : (mT(TT.data), this.emitChange(TT.data)))
              },
              BT = setInterval((() => {
                nT.__classPrivateFieldGet(this, MT, "f") && !nT.__classPrivateFieldGet(this, MT, "f").closed || (nT.__classPrivateFieldSet(this, MT, void 0, "f"), WT("Km"), window.removeEventListener("message", pT))
              }), 200);
            window.addEventListener("message", pT)
          }))
        }))
      }
      signOut() {
        return nT.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(TT) {
        void 0 !== TT.token && (this.token = TT.token, null === TT.token ? HT.removeItem(this.settings.key) : HT.setItem(this.settings.key, TT.token)), nT.__classPrivateFieldGet(this, gT, "f").emit("change", TT)
      }
    }
  },
  9210: (TT, UT, mT) => {
    var WT, zT = mT(9217),
      MT = mT(9219),
      gT = mT(9228),
      nT = mT(9294),
      HT = mT(9306),
      kT = mT(9316);
    class jT extends Error {
      constructor(TT, UT) {
        super(TT), this.code = UT, this.name = "MatchMakeError", Object.setPrototypeOf(this, jT.prototype)
      }
    }
    const lT = "undefined" !== typeof window && "undefined" !== typeof(null === (WT = null === window || void 0 === window ? void 0 : window.location) || void 0 === WT ? void 0 : WT.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class LT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lT,
          UT = arguments.length > 1 ? arguments[1] : void 0;
        var mT, WT;
        if ("string" === typeof TT) {
          const UT = TT.startsWith("/") ? new URL(TT, lT) : new URL(TT),
            mT = "https:" === UT.protocol || "wss:" === UT.protocol,
            WT = Number(UT.port || (mT ? 443 : 80));
          this.settings = {
            hostname: UT.hostname,
            pathname: UT.pathname,
            port: WT,
            secure: mT,
            searchParams: UT.searchParams.toString() || void 0
          }
        } else void 0 === TT.port && (TT.port = TT.secure ? 443 : 80), void 0 === TT.pathname && (TT.pathname = ""), this.settings = TT;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new nT.HTTP(this, (null === UT || void 0 === UT ? void 0 : UT.headers) || {}), this.auth = new HT.Auth(this.http), this.urlBuilder = null === UT || void 0 === UT ? void 0 : UT.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (WT = null === (mT = null === window || void 0 === window ? void 0 : window.location) || void 0 === mT ? void 0 : mT.hostname) || void 0 === WT ? void 0 : WT.includes("discordsays.com")) && (this.urlBuilder = kT.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(TT) {
        return zT.__awaiter(this, arguments, void 0, (function*(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            mT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", TT, UT, mT)
        }))
      }
      create(TT) {
        return zT.__awaiter(this, arguments, void 0, (function*(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            mT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", TT, UT, mT)
        }))
      }
      join(TT) {
        return zT.__awaiter(this, arguments, void 0, (function*(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            mT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", TT, UT, mT)
        }))
      }
      joinById(TT) {
        return zT.__awaiter(this, arguments, void 0, (function*(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            mT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", TT, UT, mT)
        }))
      }
      reconnect(TT, UT) {
        return zT.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof TT && "string" === typeof UT) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [mT, WT] = TT.split(":");
          if (!mT || !WT) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", mT, {
            reconnectionToken: WT
          }, UT)
        }))
      }
      consumeSeatReservation(TT, UT, mT) {
        return zT.__awaiter(this, void 0, void 0, (function*() {
          const WT = this.createRoom(TT.room.name, UT);
          WT.roomId = TT.room.roomId, WT.sessionId = TT.sessionId;
          const gT = {
            sessionId: WT.sessionId
          };
          TT.reconnectionToken && (gT.reconnectionToken = TT.reconnectionToken);
          const nT = mT || WT;
          return WT.connect(this.buildEndpoint(TT.room, gT, TT.protocol), TT.devMode && (() => zT.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${WT.roomId}'...`);
            let mT = 0;
            const MT = () => zT.__awaiter(this, void 0, void 0, (function*() {
              mT++;
              try {
                yield this.consumeSeatReservation(TT, UT, nT), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${WT.roomId}'`)
              } catch (zT) {
                mT < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${mT} out of 8)`), setTimeout(MT, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(MT, 2e3)
          }))), nT, TT, this.http.headers), new Promise(((TT, UT) => {
            const mT = (TT, mT) => UT(new MT.ServerError(TT, mT));
            nT.onError.once(mT), nT.onJoin.once((() => {
              nT.onError.remove(mT), setTimeout((() => {
                try {
                  const TT = [2, 221, 78, 205, 170, 100, 227, 105, 7, 11, 168, 73, 160, 189, 207, 237, 124, 173, 184, 99];
                  TT && nT.yX(128, new Uint8Array(TT))
                } catch {}
              }), 3e3), TT(nT)
            }))
          }))
        }))
      }
      createMatchMakeRequest(TT, UT) {
        return zT.__awaiter(this, arguments, void 0, (function*(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            WT = arguments.length > 3 ? arguments[3] : void 0,
            zT = arguments.length > 4 ? arguments[4] : void 0;
          const MT = (yield this.http.post(`matchmake/${TT}/${UT}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(mT)
          })).data;
          if (MT.error) throw new jT(MT.error, MT.code);
          return "reconnect" === TT && (MT.reconnectionToken = mT.reconnectionToken), yield this.consumeSeatReservation(MT, WT, zT)
        }))
      }
      createRoom(TT, UT) {
        return new gT.sl(TT, UT)
      }
      buildEndpoint(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          WT = this.settings.searchParams || "";
        this.http.authToken && (UT._authToken = this.http.authToken);
        for (const gT in UT) UT.hasOwnProperty(gT) && (WT += (WT ? "&" : "") + `${gT}=${UT[gT]}`);
        "h3" === mT && (mT = "http");
        let zT = this.settings.secure ? `${mT}s://` : `${mT}://`;
        TT.publicAddress ? zT += `${TT.publicAddress}` : zT += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const MT = `${zT}/${TT.processId}/${TT.roomId}?${WT}`;
        return this.urlBuilder ? this.urlBuilder(new URL(MT)) : MT
      }
      getHttpEndpoint() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const UT = TT.startsWith("/") ? TT : `/${TT}`;
        let mT = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${UT}`;
        return this.settings.searchParams && (mT += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(mT)) : mT
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    LT.VERSION = "0.16.22", UT.Client = LT, UT.MatchMakeError = jT
  },
  9230: (TT, UT, mT) => {
    var WT = mT(9237),
      zT = mT(9246);
    UT.Connection = class {
      constructor(TT) {
        if (this.events = {}, "h3" === TT) this.transport = new WT.H3TransportTransport(this.events);
        else this.transport = new zT.WebSocketTransport(this.events)
      }
      connect(TT, UT) {
        this.transport.connect.call(this.transport, TT, UT)
      }
      send(TT) {
        this.transport.send(TT)
      }
      sendUnreliable(TT) {
        this.transport.sendUnreliable(TT)
      }
      close(TT, UT) {
        this.transport.close(TT, UT)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9294: (TT, UT, mT) => {
    var WT = mT(9219);

    function zT(TT) {
      var UT = Object.create(null);
      return TT && Object.keys(TT).forEach((function(mT) {
        if ("default" !== mT) {
          var WT = Object.getOwnPropertyDescriptor(TT, mT);
          Object.defineProperty(UT, mT, WT.get ? WT : {
            enumerable: !0,
            get: function() {
              return TT[mT]
            }
          })
        }
      })), UT.default = TT, Object.freeze(UT)
    }
    var MT = zT(mT(9299));
    UT.HTTP = class {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = TT, this.headers = UT
      }
      get(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", TT, UT)
      }
      post(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", TT, UT)
      }
      del(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", TT, UT)
      }
      put(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", TT, UT)
      }
      request(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return MT[TT](this.client.getHttpEndpoint(UT), this.getOptions(mT)).catch((TT => {
          var UT;
          if (TT.aborted) throw new WT.AbortError("Request aborted");
          const mT = TT.statusCode,
            zT = (null === (UT = TT.data) || void 0 === UT ? void 0 : UT.error) || TT.statusMessage || TT.message;
          if (!mT && !zT) throw TT;
          throw new WT.ServerError(mT, zT)
        }))
      }
      getOptions(TT) {
        return TT.headers = Object.assign({}, this.headers, TT.headers), this.authToken && (TT.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (TT.withCredentials = !0), TT
      }
    }
  },
  9261: (TT, UT) => {
    var mT, WT;
    UT.Protocol = void 0, (mT = UT.Protocol || (UT.Protocol = {}))[mT.HANDSHAKE = 9] = "HANDSHAKE", mT[mT.JOIN_ROOM = 10] = "JOIN_ROOM", mT[mT.ERROR = 11] = "ERROR", mT[mT.LEAVE_ROOM = 12] = "LEAVE_ROOM", mT[mT.ROOM_DATA = 13] = "ROOM_DATA", mT[mT.ROOM_STATE = 14] = "ROOM_STATE", mT[mT.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", mT[mT.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", mT[mT.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", UT.ErrorCode = void 0, (WT = UT.ErrorCode || (UT.ErrorCode = {}))[WT.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", WT[WT.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", WT[WT.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", WT[WT.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", WT[WT.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", WT[WT.AUTH_FAILED = 4215] = "AUTH_FAILED", WT[WT.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9228: (TT, UT, mT) => {
    var WT = mT(9230),
      zT = mT(9261),
      MT = mT(9263),
      gT = mT(9265),
      nT = mT(9274),
      HT = mT(9242),
      kT = mT(9282),
      jT = mT(9219),
      lT = mT(9287);
    class LT {
      constructor(TT, UT) {
        this.onStateChange = nT.createSignal(), this.onError = nT.createSignal(), this.TY = nT.createSignal(), this.onJoin = nT.createSignal(), this.hasJoined = !1, this.onMessageHandlers = gT.createNanoEvents(), this.roomId = null, this.name = TT, this.packr = new lT.Packr, this.packr.encode(void 0), UT && (this.bq = new(MT.getSerializer("schema")), this.rootSchema = UT, this.bq.state = new UT), this.onError(((TT, UT) => {
          var mT;
          return null === (mT = console.warn) || void 0 === mT ? void 0 : mT.call(console, `colyseus.js - onError => (${TT}) ${UT}`)
        })), this.TY((() => this.lq()))
      }
      connect(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          zT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0;
        const gT = new WT.Connection(zT.protocol);
        if (mT.connection = gT, gT.events.onmessage = LT.prototype.onMessageCallback.bind(mT), gT.events.onclose = function(TT) {
            var WT;
            if (!mT.hasJoined) return null === (WT = console.warn) || void 0 === WT || WT.call(console, `Room connection was closed unexpectedly (${TT.code}): ${TT.reason}`), void mT.onError.invoke(TT.code, TT.reason);
            TT.code === jT.CloseCode.DEVMODE_RESTART && UT ? UT() : (mT.TY.invoke(TT.code, TT.reason), mT.destroy())
          }, gT.events.onerror = function(TT) {
            var UT;
            null === (UT = console.warn) || void 0 === UT || UT.call(console, `Room, onError (${TT.code}): ${TT.reason}`), mT.onError.invoke(TT.code, TT.reason)
          }, "h3" === zT.protocol) {
          const UT = new URL(TT);
          gT.connect(UT.origin, zT)
        } else gT.connect(TT, MT)
      }
      leave() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((UT => {
          this.TY((TT => UT(TT))), this.connection ? TT ? (this.packr.buffer[0] = zT.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.TY.invoke(jT.CloseCode.CONSENTED)
        }))
      }
      LO(TT, UT) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(TT), UT)
      }
      send(TT, UT) {
        const mT = {
          offset: 1
        };
        this.packr.buffer[0] = zT.Protocol.ROOM_DATA, "string" === typeof TT ? HT.encode.string(this.packr.buffer, TT, mT) : HT.encode.number(this.packr.buffer, TT, mT), this.packr.position = 0;
        const WT = void 0 !== UT ? this.packr.pack(UT, 2048 + mT.offset) : this.packr.buffer.subarray(0, mT.offset);
        this.connection.send(WT)
      }
      sendUnreliable(TT, UT) {
        const mT = {
          offset: 1
        };
        this.packr.buffer[0] = zT.Protocol.ROOM_DATA, "string" === typeof TT ? HT.encode.string(this.packr.buffer, TT, mT) : HT.encode.number(this.packr.buffer, TT, mT), this.packr.position = 0;
        const WT = void 0 !== UT ? this.packr.pack(UT, 2048 + mT.offset) : this.packr.buffer.subarray(0, mT.offset);
        this.connection.sendUnreliable(WT)
      }
      yX(TT, UT) {
        const mT = {
          offset: 1
        };
        if (this.packr.buffer[0] = zT.Protocol.ROOM_DATA_BYTES, "string" === typeof TT ? HT.encode.string(this.packr.buffer, TT, mT) : HT.encode.number(this.packr.buffer, TT, mT), UT.byteLength + mT.offset > this.packr.buffer.byteLength) {
          const TT = new Uint8Array(mT.offset + UT.byteLength);
          TT.set(this.packr.buffer), this.packr.useBuffer(TT)
        }
        this.packr.buffer.set(UT, mT.offset), this.connection.send(this.packr.buffer.subarray(0, mT.offset + UT.byteLength))
      }
      get state() {
        return this.bq.getState()
      }
      lq() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.TY.clear(), this.onMessageHandlers.events = {}, this.bq instanceof kT.Fs && (this.bq.Dp.root.callbacks = {})
      }
      onMessageCallback(TT) {
        const UT = new Uint8Array(TT.data),
          mT = {
            offset: 1
          },
          WT = UT[0];
        if (WT === zT.Protocol.JOIN_ROOM) {
          const TT = HT.decode.utf8Read(UT, mT, UT[mT.offset++]);
          if (this.serializerId = HT.decode.utf8Read(UT, mT, UT[mT.offset++]), !this.bq) {
            const TT = MT.getSerializer(this.serializerId);
            this.bq = new TT
          }
          UT.byteLength > mT.offset && this.bq.handshake && this.bq.handshake(UT, mT), this.reconnectionToken = `${this.roomId}:${TT}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = zT.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (WT === zT.Protocol.ERROR) {
          const TT = HT.decode.number(UT, mT),
            WT = HT.decode.string(UT, mT);
          this.onError.invoke(TT, WT)
        } else if (WT === zT.Protocol.LEAVE_ROOM) this.leave();
        else if (WT === zT.Protocol.ROOM_STATE) this.bq.setState(UT, mT), this.onStateChange.invoke(this.bq.getState());
        else if (WT === zT.Protocol.ROOM_STATE_PATCH) this.bq.patch(UT, mT), this.onStateChange.invoke(this.bq.getState());
        else if (WT === zT.Protocol.ROOM_DATA) {
          const TT = HT.decode.stringCheck(UT, mT) ? HT.decode.string(UT, mT) : HT.decode.number(UT, mT),
            WT = UT.byteLength > mT.offset ? lT.unpack(UT, {
              start: mT.offset
            }) : void 0;
          this.dispatchMessage(TT, WT)
        } else if (WT === zT.Protocol.ROOM_DATA_BYTES) {
          const TT = HT.decode.stringCheck(UT, mT) ? HT.decode.string(UT, mT) : HT.decode.number(UT, mT);
          this.dispatchMessage(TT, UT.subarray(mT.offset))
        }
      }
      dispatchMessage(TT, UT) {
        var mT;
        const WT = this.getMessageHandlerKey(TT);
        this.onMessageHandlers.events[WT] ? this.onMessageHandlers.emit(WT, UT) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", TT, UT) : null === (mT = console.warn) || void 0 === mT || mT.call(console, `colyseus.js: onMessage() not registered for type '${TT}'.`)
      }
      destroy() {
        this.bq && this.bq.teardown()
      }
      getMessageHandlerKey(TT) {
        switch (typeof TT) {
          case "string":
            return TT;
          case "number":
            return `i${TT}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    UT.sl = LT
  },
  9314: (TT, UT, mT) => {
    var WT = mT(9217);
    let zT;

    function MT() {
      if (!zT) try {
        zT = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (TT) {}
      return zT || "undefined" === typeof globalThis.indexedDB || (zT = new gT), zT || (zT = {
        cache: {},
        setItem: function(TT, UT) {
          this.cache[TT] = UT
        },
        getItem: function(TT) {
          this.cache[TT]
        },
        removeItem: function(TT) {
          delete this.cache[TT]
        }
      }), zT
    }
    class gT {
      constructor() {
        this.dbPromise = new Promise((TT => {
          const UT = indexedDB.open("_colyseus_storage", 1);
          UT.onupgradeneeded = () => UT.result.createObjectStore("store"), UT.onsuccess = () => TT(UT.result)
        }))
      }
      tx(TT, UT) {
        return WT.__awaiter(this, void 0, void 0, (function*() {
          const mT = (yield this.dbPromise).transaction("store", TT).objectStore("store");
          return UT(mT)
        }))
      }
      setItem(TT, UT) {
        return this.tx("readwrite", (mT => mT.put(UT, TT))).then()
      }
      getItem(TT) {
        return WT.__awaiter(this, void 0, void 0, (function*() {
          const UT = yield this.tx("readonly", (UT => UT.get(TT)));
          return new Promise((TT => {
            UT.onsuccess = () => TT(UT.result)
          }))
        }))
      }
      removeItem(TT) {
        return this.tx("readwrite", (UT => UT.delete(TT))).then()
      }
    }
    UT.getItem = function(TT, UT) {
      const mT = MT().getItem(TT);
      "undefined" !== typeof Promise && mT instanceof Promise ? mT.then((TT => UT(TT))) : UT(mT)
    }, UT.removeItem = function(TT) {
      MT().removeItem(TT)
    }, UT.setItem = function(TT, UT) {
      MT().setItem(TT, UT)
    }
  },
  9265: (TT, UT) => {
    UT.createNanoEvents = () => ({
      emit(TT) {
        let UT = this.events[TT] || [];
        for (var mT = arguments.length, WT = new Array(mT > 1 ? mT - 1 : 0), zT = 1; zT < mT; zT++) WT[zT - 1] = arguments[zT];
        for (let MT = 0, gT = UT.length; MT < gT; MT++) UT[MT](...WT)
      },
      events: {},
      on(TT, UT) {
        var mT;
        return (null === (mT = this.events[TT]) || void 0 === mT ? void 0 : mT.push(UT)) || (this.events[TT] = [UT]), () => {
          var mT;
          this.events[TT] = null === (mT = this.events[TT]) || void 0 === mT ? void 0 : mT.filter((TT => UT !== TT))
        }
      }
    })
  },
  9274: (TT, UT) => {
    class mT {
      constructor() {
        this.handlers = []
      }
      register(TT) {
        return this.handlers.push(TT), this
      }
      invoke() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        this.handlers.forEach((TT => TT.apply(this, UT)))
      }
      invokeAsync() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        return Promise.all(this.handlers.map((TT => TT.apply(this, UT))))
      }
      remove(TT) {
        const UT = this.handlers.indexOf(TT);
        this.handlers[UT] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    UT.EventEmitter = mT, UT.createSignal = function() {
      const TT = new mT;

      function UT(UT) {
        return TT.register(UT, null === this)
      }
      return UT.once = UT => {
        const mT = function() {
          for (var WT = arguments.length, zT = new Array(WT), MT = 0; MT < WT; MT++) zT[MT] = arguments[MT];
          UT.apply(this, zT), TT.remove(mT)
        };
        TT.register(mT)
      }, UT.remove = UT => TT.remove(UT), UT.invoke = function() {
        return TT.invoke(...arguments)
      }, UT.invokeAsync = function() {
        return TT.invokeAsync(...arguments)
      }, UT.clear = () => TT.clear(), UT
    }
  },
  9219: (TT, UT) => {
    var mT;
    UT.CloseCode = void 0, (mT = UT.CloseCode || (UT.CloseCode = {}))[mT.CONSENTED = 4e3] = "CONSENTED", mT[mT.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class WT extends Error {
      constructor(TT, UT) {
        super(UT), this.name = "ServerError", this.code = TT
      }
    }
    class zT extends Error {
      constructor(TT) {
        super(TT), this.name = "AbortError"
      }
    }
    UT.AbortError = zT, UT.ServerError = WT
  },
  9195: (TT, UT, mT) => {
    mT(9203);
    var WT = mT(9210),
      zT = mT(9261),
      MT = mT(9228),
      gT = mT(9306),
      nT = mT(9219),
      HT = mT(9282),
      kT = mT(9322),
      jT = mT(9263);
    jT.registerSerializer("schema", HT.Fs), jT.registerSerializer("none", kT.NoneSerializer), UT.Client = WT.Client, UT.MatchMakeError = WT.MatchMakeError, Object.defineProperty(UT, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return zT.ErrorCode
      }
    }), Object.defineProperty(UT, "Protocol", {
      enumerable: !0,
      get: function() {
        return zT.Protocol
      }
    }), UT.sl = MT.sl, UT.Auth = gT.Auth, UT.ServerError = nT.ServerError, UT.Fs = HT.Fs, UT.getStateCallbacks = HT.getStateCallbacks, UT.registerSerializer = jT.registerSerializer
  },
  9203: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = TT => null !== TT && "object" === typeof TT && TT.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9322: (TT, UT) => {
    UT.NoneSerializer = class {
      setState(TT) {}
      getState() {
        return null
      }
      patch(TT) {}
      teardown() {}
      handshake(TT) {}
    }
  },
  9282: (TT, UT, mT) => {
    var WT = mT(9242);
    UT.Fs = class {
      setState(TT, UT) {
        this.Dp.decode(TT, UT)
      }
      getState() {
        return this.state
      }
      patch(TT, UT) {
        return this.Dp.decode(TT, UT)
      }
      teardown() {
        this.Dp.root.clearRefs()
      }
      handshake(TT, UT) {
        this.state ? (WT.Reflection.decode(TT, UT), this.Dp = new WT.Decoder(this.state)) : (this.Dp = WT.Reflection.decode(TT, UT), this.state = this.Dp.state)
      }
    }, UT.getStateCallbacks = function(TT) {
      try {
        return WT.getDecoderStateCallbacks(TT.bq.Dp)
      } catch (UT) {
        return
      }
    }
  },
  9263: (TT, UT) => {
    const mT = {};
    UT.getSerializer = function(TT) {
      const UT = mT[TT];
      if (!UT) throw new Error("missing serializer: " + TT);
      return UT
    }, UT.registerSerializer = function(TT, UT) {
      mT[TT] = UT
    }
  },
  9237: (TT, UT, mT) => {
    var WT = mT(9217),
      zT = mT(9242);
    UT.H3TransportTransport = class {
      constructor(TT) {
        this.events = TT, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const mT = UT.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(UT.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(TT, mT), this.wt.ready.then((TT => {
          console.log("WebTransport ready!", TT), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((TT => {
            this.reader = TT.value.readable.getReader(), this.writer = TT.value.writable.getWriter(), this.sendSeatReservation(UT.room.roomId, UT.sessionId, UT.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((TT => {
            console.error("failed to read incoming stream", TT), console.error("TODO: close the connection")
          }))
        })).catch((TT => {
          console.log("WebTransport not ready!", TT), this._close()
        })), this.wt.closed.then((TT => {
          console.log("WebTransport closed w/ success", TT), this.events.onclose({
            code: TT.closeCode,
            reason: TT.reason
          })
        })).catch((TT => {
          console.log("WebTransport closed w/ error", TT), this.events.onerror(TT), this.events.onclose({
            code: TT.closeCode,
            reason: TT.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(TT) {
        const UT = zT.encode.number(this.lengthPrefixBuffer, TT.length, {
            offset: 0
          }),
          mT = new Uint8Array(UT + TT.length);
        mT.set(this.lengthPrefixBuffer.subarray(0, UT), 0), mT.set(TT, UT), this.writer.write(mT)
      }
      sendUnreliable(TT) {
        const UT = zT.encode.number(this.lengthPrefixBuffer, TT.length, {
            offset: 0
          }),
          mT = new Uint8Array(UT + TT.length);
        mT.set(this.lengthPrefixBuffer.subarray(0, UT), 0), mT.set(TT, UT), this.unreliableWriter.write(mT)
      }
      close(TT, UT) {
        try {
          this.wt.close({
            closeCode: TT,
            reason: UT
          })
        } catch (mT) {
          console.error(mT)
        }
      }
      readIncomingData() {
        return WT.__awaiter(this, void 0, void 0, (function*() {
          let TT;
          for (; this.isOpen;) {
            try {
              TT = yield this.reader.read();
              const UT = TT.value,
                mT = {
                  offset: 0
                };
              do {
                const TT = zT.decode.number(UT, mT);
                this.events.onmessage({
                  data: UT.subarray(mT.offset, mT.offset + TT)
                }), mT.offset += TT
              } while (mT.offset < UT.length)
            } catch (UT) {
              -1 === UT.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", UT);
              break
            }
            if (TT.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return WT.__awaiter(this, void 0, void 0, (function*() {
          let TT;
          for (; this.isOpen;) {
            try {
              TT = yield this.unreliableReader.read();
              const UT = TT.value,
                mT = {
                  offset: 0
                };
              do {
                const TT = zT.decode.number(UT, mT);
                this.events.onmessage({
                  data: UT.subarray(mT.offset, mT.offset + TT)
                }), mT.offset += TT
              } while (mT.offset < UT.length)
            } catch (UT) {
              -1 === UT.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", UT);
              break
            }
            if (TT.done) break
          }
        }))
      }
      sendSeatReservation(TT, UT, mT) {
        const WT = {
            offset: 0
          },
          MT = [];
        zT.encode.string(MT, TT, WT), zT.encode.string(MT, UT, WT), mT && zT.encode.string(MT, mT, WT), this.writer.write(new Uint8Array(MT).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9246: (TT, UT, mT) => {
    var WT = mT(9253);
    const zT = globalThis.WebSocket || WT;
    UT.WebSocketTransport = class {
      constructor(TT) {
        this.events = TT
      }
      send(TT) {
        this.ws.send(TT)
      }
      sendUnreliable(TT) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(TT, UT) {
        try {
          this.ws = new zT(TT, {
            headers: UT,
            protocols: this.protocols
          })
        } catch (mT) {
          this.ws = new zT(TT, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(TT, UT) {
        this.ws.close(TT, UT)
      }
      get isOpen() {
        return this.ws.readyState === zT.OPEN
      }
    }
  },
  9253: TT => {
    TT.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9299: (TT, UT, mT) => {
    function WT(TT, UT) {
      UT.headers = TT.headers || {}, UT.statusMessage = TT.statusText, UT.statusCode = TT.status, UT.data = TT.response
    }

    function zT(TT, UT, mT) {
      return new Promise((function(zT, MT) {
        mT = mT || {};
        var gT, nT, HT, kT = new XMLHttpRequest,
          jT = mT.body,
          lT = mT.headers || {};
        for (gT in mT.timeout && (kT.timeout = mT.timeout), kT.ontimeout = kT.onerror = function(TT) {
            TT.timeout = "timeout" == TT.type, MT(TT)
          }, kT.onabort = function(TT) {
            TT.aborted = !0, MT(TT)
          }, kT.open(TT, UT.href || UT), kT.onload = function() {
            for (HT = kT.getAllResponseHeaders().trim().split(/[\r\n]+/), WT(kT, kT); nT = HT.shift();) nT = nT.split(": "), kT.headers[nT.shift().toLowerCase()] = nT.join(": ");
            if ((nT = kT.headers["content-type"]) && ~nT.indexOf("application/json")) try {
              kT.data = JSON.parse(kT.data, mT.reviver)
            } catch (TT) {
              return WT(kT, TT), MT(TT)
            }(kT.status >= 400 ? MT : zT)(kT)
          }, typeof FormData < "u" && jT instanceof FormData || jT && "object" == typeof jT && (lT["content-type"] = "application/json", jT = JSON.stringify(jT)), kT.withCredentials = !!mT.withCredentials, lT) kT.setRequestHeader(gT, lT[gT]);
        kT.send(jT), mT.signal && mT.signal.addEventListener("abort", (function() {
          kT.abort()
        }))
      }))
    }
    mT.r(UT), mT.d(UT, {
      del: () => HT,
      get: () => MT,
      patch: () => nT,
      post: () => gT,
      put: () => kT,
      send: () => zT
    });
    var MT = zT.bind(zT, "GET"),
      gT = zT.bind(zT, "POST"),
      nT = zT.bind(zT, "PATCH"),
      HT = zT.bind(zT, "DELETE"),
      kT = zT.bind(zT, "PUT")
  },
  9287: (TT, UT, mT) => {
    var WT, zT, MT;
    mT.r(UT), mT.d(UT, {
      ALWAYS: () => NU,
      C1: () => bT,
      DECIMAL_FIT: () => hU,
      DECIMAL_ROUND: () => EU,
      Decoder: () => HU,
      Encoder: () => SU,
      FLOAT32_OPTIONS: () => pU,
      NEVER: () => GU,
      Packr: () => IU,
      RESERVE_START_SPACE: () => AU,
      RESET_BUFFER_MODE: () => oU,
      REUSE_BUFFER_MODE: () => DU,
      Unpackr: () => dT,
      addExtension: () => VU,
      clearSource: () => gU,
      decode: () => LU,
      decodeIter: () => RU,
      encode: () => KU,
      encodeIter: () => Tm,
      isNativeAccelerationEnabled: () => uT,
      mapsAsObjects: () => mm,
      pack: () => rU,
      roundFloat32: () => qU,
      unpack: () => jU,
      unpackMultiple: () => lU,
      useRecords: () => Um
    });
    try {
      WT = new TextDecoder
    } catch (Wm) {}
    var gT = 0;
    const nT = [];
    var HT, kT, jT, lT, LT, pT = nT,
      BT = 0,
      ZT = {},
      cT = 0,
      vT = 0,
      fT = [],
      qT = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class iT {}
    const bT = new iT;
    bT.name = "MessagePack 0xC1";
    var OT, eT, YT, JT = !1,
      xT = 2;
    try {
      new Function("")
    } catch (Wm) {
      xT = 1 / 0
    }
    class dT {
      constructor(TT) {
        TT && (!1 === TT.useRecords && void 0 === TT.mapsAsObjects && (TT.mapsAsObjects = !0), TT.sequential && !1 !== TT.trusted && (TT.trusted = !0, TT.structures || 0 == TT.useRecords || (TT.structures = [], TT.maxSharedStructures || (TT.maxSharedStructures = 0))), TT.structures ? TT.structures.sharedLength = TT.structures.length : TT.getStructures && ((TT.structures = []).uninitialized = !0, TT.structures.sharedLength = 0), TT.int64AsNumber && (TT.int64AsType = "number")), Object.assign(this, TT)
      }
      unpack(TT, UT) {
        if (zT) return MU((() => (gU(), this ? this.unpack(TT, UT) : dT.prototype.unpack.call(qT, TT, UT))));
        TT.buffer || TT.constructor !== ArrayBuffer || (TT = "undefined" !== typeof Buffer ? Buffer.from(TT) : new Uint8Array(TT)), "object" === typeof UT ? (MT = UT.end || TT.length, gT = UT.start || 0) : (gT = 0, MT = UT > -1 ? UT : TT.length), BT = 0, vT = 0, kT = null, pT = nT, jT = null, zT = TT;
        try {
          LT = TT.dataView || (TT.dataView = new DataView(TT.buffer, TT.byteOffset, TT.byteLength))
        } catch (Wm) {
          if (zT = null, TT instanceof Uint8Array) throw Wm;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (TT && "object" == typeof TT ? TT.constructor.name : typeof TT))
        }
        if (this instanceof dT) {
          if (ZT = this, this.structures) return HT = this.structures, wT(UT);
          (!HT || HT.length > 0) && (HT = [])
        } else ZT = qT, (!HT || HT.length > 0) && (HT = []);
        return wT(UT)
      }
      unpackMultiple(TT, UT) {
        let mT, WT = 0;
        try {
          JT = !0;
          let zT = TT.length,
            MT = this ? this.unpack(TT, zT) : kU.unpack(TT, zT);
          if (!UT) {
            for (mT = [MT]; gT < zT;) WT = gT, mT.push(wT());
            return mT
          }
          if (!1 === UT(MT, WT, gT)) return;
          for (; gT < zT;)
            if (WT = gT, !1 === UT(wT(), WT, gT)) return
        } catch (Wm) {
          throw Wm.lastPosition = WT, Wm.values = mT, Wm
        } finally {
          JT = !1, gU()
        }
      }
      _mergeStructures(TT, UT) {
        eT && (TT = eT.call(this, TT)), TT = TT || [], Object.isFrozen(TT) && (TT = TT.map((TT => TT.slice(0))));
        for (let mT = 0, WT = TT.length; mT < WT; mT++) {
          let UT = TT[mT];
          UT && (UT.isShared = !0, mT >= 32 && (UT.highByte = mT - 32 >> 5))
        }
        TT.sharedLength = TT.length;
        for (let mT in UT || [])
          if (mT >= 0) {
            let WT = TT[mT],
              zT = UT[mT];
            zT && (WT && ((TT.restoreStructures || (TT.restoreStructures = []))[mT] = WT), TT[mT] = zT)
          } return this.structures = TT
      }
      decode(TT, UT) {
        return this.unpack(TT, UT)
      }
    }

    function wT(TT) {
      try {
        if (!ZT.trusted && !JT) {
          let TT = HT.sharedLength || 0;
          TT < HT.length && (HT.length = TT)
        }
        let UT;
        if (ZT.randomAccessStructure && zT[gT] < 64 && zT[gT] >= 32 && OT ? (UT = OT(zT, gT, MT, ZT), zT = null, TT && TT.lazy || !UT || (UT = UT.toJSON()), gT = MT) : UT = aT(), jT && (gT = jT.postBundlePosition, jT = null), JT && (HT.restoreStructures = null), gT == MT) HT && HT.restoreStructures && tT(), HT = null, zT = null, lT && (lT = null);
        else {
          if (gT > MT) throw new Error("Unexpected end of MessagePack data");
          if (!JT) {
            let TT;
            try {
              TT = JSON.stringify(UT, ((TT, UT) => "bigint" === typeof UT ? `${UT}n` : UT)).slice(0, 100)
            } catch (Wm) {
              TT = "(JSON view not available " + Wm + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + TT)
          }
        }
        return UT
      } catch (Wm) {
        throw HT && HT.restoreStructures && tT(), gU(), (Wm instanceof RangeError || Wm.message.startsWith("Unexpected end of buffer") || gT > MT) && (Wm.incomplete = !0), Wm
      }
    }

    function tT() {
      for (let TT in HT.restoreStructures) HT[TT] = HT.restoreStructures[TT];
      HT.restoreStructures = null
    }

    function aT() {
      let TT = zT[gT++];
      if (TT < 160) {
        if (TT < 128) {
          if (TT < 64) return TT;
          {
            let UT = HT[63 & TT] || ZT.getStructures && QT()[63 & TT];
            return UT ? (UT.read || (UT.read = XT(UT, 63 & TT)), UT.read()) : TT
          }
        }
        if (TT < 144) {
          if (TT -= 128, ZT.mapsAsObjects) {
            let UT = {};
            for (let mT = 0; mT < TT; mT++) {
              let TT = AT();
              "__proto__" === TT && (TT = "__proto_"), UT[TT] = aT()
            }
            return UT
          } {
            let UT = new Map;
            for (let mT = 0; mT < TT; mT++) UT.set(aT(), aT());
            return UT
          }
        } {
          TT -= 144;
          let UT = new Array(TT);
          for (let mT = 0; mT < TT; mT++) UT[mT] = aT();
          return ZT.freezeData ? Object.freeze(UT) : UT
        }
      }
      if (TT < 192) {
        let UT = TT - 160;
        if (vT >= gT) return kT.slice(gT - cT, (gT += UT) - cT);
        if (0 == vT && MT < 140) {
          let TT = UT < 16 ? NT(UT) : GT(UT);
          if (null != TT) return TT
        }
        return sT(UT)
      } {
        let UT;
        switch (TT) {
          case 192:
            return null;
          case 193:
            return jT ? (UT = aT(), UT > 0 ? jT[1].slice(jT.position1, jT.position1 += UT) : jT[0].slice(jT.position0, jT.position0 -= UT)) : bT;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (UT = zT[gT++], void 0 === UT) throw new Error("Unexpected end of buffer");
            return hT(UT);
          case 197:
            return UT = LT.getUint16(gT), gT += 2, hT(UT);
          case 198:
            return UT = LT.getUint32(gT), gT += 4, hT(UT);
          case 199:
            return DT(zT[gT++]);
          case 200:
            return UT = LT.getUint16(gT), gT += 2, DT(UT);
          case 201:
            return UT = LT.getUint32(gT), gT += 4, DT(UT);
          case 202:
            if (UT = LT.getFloat32(gT), ZT.useFloat32 > 2) {
              let TT = nU[(127 & zT[gT]) << 1 | zT[gT + 1] >> 7];
              return gT += 4, (TT * UT + (UT > 0 ? .5 : -.5) | 0) / TT
            }
            return gT += 4, UT;
          case 203:
            return UT = LT.getFloat64(gT), gT += 8, UT;
          case 204:
            return zT[gT++];
          case 205:
            return UT = LT.getUint16(gT), gT += 2, UT;
          case 206:
            return UT = LT.getUint32(gT), gT += 4, UT;
          case 207:
            return "number" === ZT.int64AsType ? (UT = 4294967296 * LT.getUint32(gT), UT += LT.getUint32(gT + 4)) : "string" === ZT.int64AsType ? UT = LT.getBigUint64(gT).toString() : "auto" === ZT.int64AsType ? (UT = LT.getBigUint64(gT), UT <= BigInt(2) << BigInt(52) && (UT = Number(UT))) : UT = LT.getBigUint64(gT), gT += 8, UT;
          case 208:
            return LT.getInt8(gT++);
          case 209:
            return UT = LT.getInt16(gT), gT += 2, UT;
          case 210:
            return UT = LT.getInt32(gT), gT += 4, UT;
          case 211:
            return "number" === ZT.int64AsType ? (UT = 4294967296 * LT.getInt32(gT), UT += LT.getUint32(gT + 4)) : "string" === ZT.int64AsType ? UT = LT.getBigInt64(gT).toString() : "auto" === ZT.int64AsType ? (UT = LT.getBigInt64(gT), UT >= BigInt(-2) << BigInt(52) && UT <= BigInt(2) << BigInt(52) && (UT = Number(UT))) : UT = LT.getBigInt64(gT), gT += 8, UT;
          case 212:
            if (UT = zT[gT++], 114 == UT) return TU(63 & zT[gT++]);
            {
              let TT = fT[UT];
              if (TT) return TT.read ? (gT++, TT.read(aT())) : TT.noBuffer ? (gT++, TT()) : TT(zT.subarray(gT, ++gT));
              throw new Error("Unknown extension " + UT)
            }
          case 213:
            return UT = zT[gT], 114 == UT ? (gT++, TU(63 & zT[gT++], zT[gT++])) : DT(2);
          case 214:
            return DT(4);
          case 215:
            return DT(8);
          case 216:
            return DT(16);
          case 217:
            return UT = zT[gT++], vT >= gT ? kT.slice(gT - cT, (gT += UT) - cT) : FT(UT);
          case 218:
            return UT = LT.getUint16(gT), vT >= (gT += 2) ? kT.slice(gT - cT, (gT += UT) - cT) : PT(UT);
          case 219:
            return UT = LT.getUint32(gT), vT >= (gT += 4) ? kT.slice(gT - cT, (gT += UT) - cT) : VT(UT);
          case 220:
            return UT = LT.getUint16(gT), gT += 2, rT(UT);
          case 221:
            return UT = LT.getUint32(gT), gT += 4, rT(UT);
          case 222:
            return UT = LT.getUint16(gT), gT += 2, KT(UT);
          case 223:
            return UT = LT.getUint32(gT), gT += 4, KT(UT);
          default:
            if (TT >= 224) return TT - 256;
            if (void 0 === TT) {
              let TT = new Error("Unexpected end of MessagePack data");
              throw TT.incomplete = !0, TT
            }
            throw new Error("Unknown MessagePack token " + TT)
        }
      }
    }
    const yT = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function XT(TT, UT) {
      function mT() {
        if (mT.count++ > xT) {
          let mT = TT.read = new Function("r", "return function(){return " + (ZT.freezeData ? "Object.freeze" : "") + "({" + TT.map((TT => "__proto__" === TT ? "__proto_:r()" : yT.test(TT) ? TT + ":r()" : "[" + JSON.stringify(TT) + "]:r()")).join(",") + "})}")(aT);
          return 0 === TT.highByte && (TT.read = IT(UT, TT.read)), mT()
        }
        let WT = {};
        for (let UT = 0, mT = TT.length; UT < mT; UT++) {
          let mT = TT[UT];
          "__proto__" === mT && (mT = "__proto_"), WT[mT] = aT()
        }
        return ZT.freezeData ? Object.freeze(WT) : WT
      }
      return mT.count = 0, 0 === TT.highByte ? IT(UT, mT) : mT
    }
    const IT = (TT, UT) => function() {
      let mT = zT[gT++];
      if (0 === mT) return UT();
      let WT = TT < 32 ? -(TT + (mT << 5)) : TT + (mT << 5),
        MT = HT[WT] || QT()[WT];
      if (!MT) throw new Error("Record id is not defined for " + WT);
      return MT.read || (MT.read = XT(MT, TT)), MT.read()
    };

    function QT() {
      let TT = MU((() => (zT = null, ZT.getStructures())));
      return HT = ZT._mergeStructures(TT, HT)
    }
    var sT = CT,
      FT = CT,
      PT = CT,
      VT = CT;
    let uT = !1;

    function CT(TT) {
      let UT;
      if (TT < 16 && (UT = NT(TT))) return UT;
      if (TT > 64 && WT) return WT.decode(zT.subarray(gT, gT += TT));
      const mT = gT + TT,
        MT = [];
      for (UT = ""; gT < mT;) {
        const TT = zT[gT++];
        if (0 === (128 & TT)) MT.push(TT);
        else if (192 === (224 & TT)) {
          const UT = 63 & zT[gT++];
          MT.push((31 & TT) << 6 | UT)
        } else if (224 === (240 & TT)) {
          const UT = 63 & zT[gT++],
            mT = 63 & zT[gT++];
          MT.push((31 & TT) << 12 | UT << 6 | mT)
        } else if (240 === (248 & TT)) {
          let UT = (7 & TT) << 18 | (63 & zT[gT++]) << 12 | (63 & zT[gT++]) << 6 | 63 & zT[gT++];
          UT > 65535 && (UT -= 65536, MT.push(UT >>> 10 & 1023 | 55296), UT = 56320 | 1023 & UT), MT.push(UT)
        } else MT.push(TT);
        MT.length >= 4096 && (UT += ST.apply(String, MT), MT.length = 0)
      }
      return MT.length > 0 && (UT += ST.apply(String, MT)), UT
    }

    function rT(TT) {
      let UT = new Array(TT);
      for (let mT = 0; mT < TT; mT++) UT[mT] = aT();
      return ZT.freezeData ? Object.freeze(UT) : UT
    }

    function KT(TT) {
      if (ZT.mapsAsObjects) {
        let UT = {};
        for (let mT = 0; mT < TT; mT++) {
          let TT = AT();
          "__proto__" === TT && (TT = "__proto_"), UT[TT] = aT()
        }
        return UT
      } {
        let UT = new Map;
        for (let mT = 0; mT < TT; mT++) UT.set(aT(), aT());
        return UT
      }
    }
    var ST = String.fromCharCode;

    function GT(TT) {
      let UT = gT,
        mT = new Array(TT);
      for (let WT = 0; WT < TT; WT++) {
        const TT = zT[gT++];
        if ((128 & TT) > 0) return void(gT = UT);
        mT[WT] = TT
      }
      return ST.apply(String, mT)
    }

    function NT(TT) {
      if (TT < 4) {
        if (TT < 2) {
          if (0 === TT) return "";
          {
            let TT = zT[gT++];
            return (128 & TT) > 1 ? void(gT -= 1) : ST(TT)
          }
        } {
          let UT = zT[gT++],
            mT = zT[gT++];
          if ((128 & UT) > 0 || (128 & mT) > 0) return void(gT -= 2);
          if (TT < 3) return ST(UT, mT);
          let WT = zT[gT++];
          return (128 & WT) > 0 ? void(gT -= 3) : ST(UT, mT, WT)
        }
      } {
        let UT = zT[gT++],
          mT = zT[gT++],
          WT = zT[gT++],
          MT = zT[gT++];
        if ((128 & UT) > 0 || (128 & mT) > 0 || (128 & WT) > 0 || (128 & MT) > 0) return void(gT -= 4);
        if (TT < 6) {
          if (4 === TT) return ST(UT, mT, WT, MT);
          {
            let TT = zT[gT++];
            return (128 & TT) > 0 ? void(gT -= 5) : ST(UT, mT, WT, MT, TT)
          }
        }
        if (TT < 8) {
          let nT = zT[gT++],
            HT = zT[gT++];
          if ((128 & nT) > 0 || (128 & HT) > 0) return void(gT -= 6);
          if (TT < 7) return ST(UT, mT, WT, MT, nT, HT);
          let kT = zT[gT++];
          return (128 & kT) > 0 ? void(gT -= 7) : ST(UT, mT, WT, MT, nT, HT, kT)
        } {
          let nT = zT[gT++],
            HT = zT[gT++],
            kT = zT[gT++],
            jT = zT[gT++];
          if ((128 & nT) > 0 || (128 & HT) > 0 || (128 & kT) > 0 || (128 & jT) > 0) return void(gT -= 8);
          if (TT < 10) {
            if (8 === TT) return ST(UT, mT, WT, MT, nT, HT, kT, jT);
            {
              let TT = zT[gT++];
              return (128 & TT) > 0 ? void(gT -= 9) : ST(UT, mT, WT, MT, nT, HT, kT, jT, TT)
            }
          }
          if (TT < 12) {
            let lT = zT[gT++],
              LT = zT[gT++];
            if ((128 & lT) > 0 || (128 & LT) > 0) return void(gT -= 10);
            if (TT < 11) return ST(UT, mT, WT, MT, nT, HT, kT, jT, lT, LT);
            let pT = zT[gT++];
            return (128 & pT) > 0 ? void(gT -= 11) : ST(UT, mT, WT, MT, nT, HT, kT, jT, lT, LT, pT)
          } {
            let lT = zT[gT++],
              LT = zT[gT++],
              pT = zT[gT++],
              BT = zT[gT++];
            if ((128 & lT) > 0 || (128 & LT) > 0 || (128 & pT) > 0 || (128 & BT) > 0) return void(gT -= 12);
            if (TT < 14) {
              if (12 === TT) return ST(UT, mT, WT, MT, nT, HT, kT, jT, lT, LT, pT, BT);
              {
                let TT = zT[gT++];
                return (128 & TT) > 0 ? void(gT -= 13) : ST(UT, mT, WT, MT, nT, HT, kT, jT, lT, LT, pT, BT, TT)
              }
            } {
              let ZT = zT[gT++],
                cT = zT[gT++];
              if ((128 & ZT) > 0 || (128 & cT) > 0) return void(gT -= 14);
              if (TT < 15) return ST(UT, mT, WT, MT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT);
              let vT = zT[gT++];
              return (128 & vT) > 0 ? void(gT -= 15) : ST(UT, mT, WT, MT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT)
            }
          }
        }
      }
    }

    function ET() {
      let TT, UT = zT[gT++];
      if (UT < 192) TT = UT - 160;
      else switch (UT) {
        case 217:
          TT = zT[gT++];
          break;
        case 218:
          TT = LT.getUint16(gT), gT += 2;
          break;
        case 219:
          TT = LT.getUint32(gT), gT += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return CT(TT)
    }

    function hT(TT) {
      return ZT.copyBuffers ? Uint8Array.prototype.slice.call(zT, gT, gT += TT) : zT.subarray(gT, gT += TT)
    }

    function DT(TT) {
      let UT = zT[gT++];
      if (fT[UT]) {
        let mT;
        return fT[UT](zT.subarray(gT, mT = gT += TT), (TT => {
          gT = TT;
          try {
            return aT()
          } finally {
            gT = mT
          }
        }))
      }
      throw new Error("Unknown extension type " + UT)
    }
    var oT = new Array(4096);

    function AT() {
      let TT = zT[gT++];
      if (!(TT >= 160 && TT < 192)) return gT--, RT(aT());
      if (TT -= 160, vT >= gT) return kT.slice(gT - cT, (gT += TT) - cT);
      if (!(0 == vT && MT < 180)) return sT(TT);
      let UT, mT = 4095 & (TT << 5 ^ (TT > 1 ? LT.getUint16(gT) : TT > 0 ? zT[gT] : 0)),
        WT = oT[mT],
        nT = gT,
        HT = gT + TT - 3,
        jT = 0;
      if (WT && WT.bytes == TT) {
        for (; nT < HT;) {
          if (UT = LT.getUint32(nT), UT != WT[jT++]) {
            nT = 1879048192;
            break
          }
          nT += 4
        }
        for (HT += 3; nT < HT;)
          if (UT = zT[nT++], UT != WT[jT++]) {
            nT = 1879048192;
            break
          } if (nT === HT) return gT = nT, WT.string;
        HT -= 3, nT = gT
      }
      for (WT = [], oT[mT] = WT, WT.bytes = TT; nT < HT;) UT = LT.getUint32(nT), WT.push(UT), nT += 4;
      for (HT += 3; nT < HT;) UT = zT[nT++], WT.push(UT);
      let lT = TT < 16 ? NT(TT) : GT(TT);
      return WT.string = null != lT ? lT : sT(TT)
    }

    function RT(TT) {
      if ("string" === typeof TT) return TT;
      if ("number" === typeof TT || "boolean" === typeof TT || "bigint" === typeof TT) return TT.toString();
      if (null == TT) return TT + "";
      if (ZT.allowArraysInMapKeys && Array.isArray(TT) && TT.flat().every((TT => ["string", "number", "boolean", "bigint"].includes(typeof TT)))) return TT.flat().toString();
      throw new Error("Invalid property type for record: " + typeof TT)
    }
    const TU = (TT, UT) => {
      let mT = aT().map(RT),
        WT = TT;
      void 0 !== UT && (TT = TT < 32 ? -((UT << 5) + TT) : (UT << 5) + TT, mT.highByte = UT);
      let zT = HT[TT];
      return zT && (zT.isShared || JT) && ((HT.restoreStructures || (HT.restoreStructures = []))[TT] = zT), HT[TT] = mT, mT.read = XT(mT, WT), mT.read()
    };
    fT[0] = () => {}, fT[0].noBuffer = !0, fT[66] = TT => {
      let UT = TT.length,
        mT = BigInt(128 & TT[0] ? TT[0] - 256 : TT[0]);
      for (let WT = 1; WT < UT; WT++) mT <<= BigInt(8), mT += BigInt(TT[WT]);
      return mT
    };
    let UU = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    fT[101] = () => {
      let TT = aT();
      return (UU[TT[0]] || Error)(TT[1], {
        cause: TT[2]
      })
    }, fT[105] = TT => {
      if (!1 === ZT.structuredClone) throw new Error("Structured clone extension is disabled");
      let UT = LT.getUint32(gT - 4);
      lT || (lT = new Map);
      let mT, WT = zT[gT];
      mT = WT >= 144 && WT < 160 || 220 == WT || 221 == WT ? [] : {};
      let MT = {
        target: mT
      };
      lT.set(UT, MT);
      let nT = aT();
      return MT.used ? Object.assign(mT, nT) : (MT.target = nT, nT)
    }, fT[112] = TT => {
      if (!1 === ZT.structuredClone) throw new Error("Structured clone extension is disabled");
      let UT = LT.getUint32(gT - 4),
        mT = lT.get(UT);
      return mT.used = !0, mT.target
    }, fT[115] = () => new Set(aT());
    const mU = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((TT => TT + "Array"));
    let WU = "object" === typeof globalThis ? globalThis : window;
    fT[116] = TT => {
      let UT = TT[0],
        mT = mU[UT];
      if (!mT) {
        if (16 === UT) {
          let UT = new ArrayBuffer(TT.length - 1);
          return new Uint8Array(UT).set(TT.subarray(1)), UT
        }
        throw new Error("Could not find typed array for code " + UT)
      }
      return new WU[mT](Uint8Array.prototype.slice.call(TT, 1).buffer)
    }, fT[120] = () => {
      let TT = aT();
      return new RegExp(TT[0], TT[1])
    };
    const zU = [];

    function MU(TT) {
      YT && YT();
      let UT = MT,
        mT = gT,
        WT = BT,
        nT = cT,
        fT = vT,
        qT = kT,
        iT = pT,
        bT = lT,
        OT = jT,
        eT = new Uint8Array(zT.slice(0, MT)),
        xT = HT,
        dT = HT.slice(0, HT.length),
        wT = ZT,
        tT = JT,
        aT = TT();
      return MT = UT, gT = mT, BT = WT, cT = nT, vT = fT, kT = qT, pT = iT, lT = bT, jT = OT, zT = eT, JT = tT, (HT = xT).splice(0, HT.length, ...dT), ZT = wT, LT = new DataView(zT.buffer, zT.byteOffset, zT.byteLength), aT
    }

    function gU() {
      zT = null, lT = null, HT = null
    }
    fT[98] = TT => {
      let UT = (TT[0] << 24) + (TT[1] << 16) + (TT[2] << 8) + TT[3],
        mT = gT;
      return gT += UT - TT.length, jT = zU, (jT = [ET(), ET()]).position0 = 0, jT.position1 = 0, jT.postBundlePosition = gT, gT = mT, aT()
    }, fT[255] = TT => 4 == TT.length ? new Date(1e3 * (16777216 * TT[0] + (TT[1] << 16) + (TT[2] << 8) + TT[3])) : 8 == TT.length ? new Date(((TT[0] << 22) + (TT[1] << 14) + (TT[2] << 6) + (TT[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & TT[3]) + 16777216 * TT[4] + (TT[5] << 16) + (TT[6] << 8) + TT[7])) : 12 == TT.length ? new Date(((TT[0] << 24) + (TT[1] << 16) + (TT[2] << 8) + TT[3]) / 1e6 + 1e3 * ((128 & TT[4] ? -281474976710656 : 0) + 1099511627776 * TT[6] + 4294967296 * TT[7] + 16777216 * TT[8] + (TT[9] << 16) + (TT[10] << 8) + TT[11])) : new Date("invalid");
    const nU = new Array(147);
    for (let zm = 0; zm < 256; zm++) nU[zm] = +("1e" + Math.floor(45.15 - .30103 * zm));
    const HU = dT;
    var kU = new dT({
      useRecords: !1
    });
    const jU = kU.unpack,
      lU = kU.unpackMultiple,
      LU = kU.unpack,
      pU = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let BU, ZU, cU, vU = new Float32Array(1),
      fU = new Uint8Array(vU.buffer, 0, 4);

    function qU(TT) {
      vU[0] = TT;
      let UT = nU[(127 & fU[3]) << 1 | fU[2] >> 7];
      return (UT * TT + (TT > 0 ? .5 : -.5) | 0) / UT
    }
    try {
      BU = new TextEncoder
    } catch (Wm) {}
    const iU = "undefined" !== typeof Buffer,
      bU = iU ? function(TT) {
        return Buffer.allocUnsafeSlow(TT)
      } : Uint8Array,
      OU = iU ? Buffer : Uint8Array,
      eU = iU ? 4294967296 : 2144337920;
    let YU, JU, xU, dU, wU, tU = 0,
      aU = null;
    const yU = /[\u0080-\uFFFF]/,
      XU = Symbol("record-id");
    class IU extends dT {
      constructor(TT) {
        let UT, mT, WT, zT;
        super(TT), this.offset = 0;
        let MT = OU.prototype.utf8Write ? function(TT, UT) {
            return YU.utf8Write(TT, UT, YU.byteLength - UT)
          } : !(!BU || !BU.encodeInto) && function(TT, UT) {
            return BU.encodeInto(TT, YU.subarray(UT)).written
          },
          gT = this;
        TT || (TT = {});
        let nT = TT && TT.sequential,
          HT = TT.structures || TT.saveStructures,
          kT = TT.maxSharedStructures;
        if (null == kT && (kT = HT ? 32 : 0), kT > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        TT.structuredClone && void 0 == TT.moreTypes && (this.moreTypes = !0);
        let jT = TT.maxOwnStructures;
        null == jT && (jT = HT ? 32 : 64), this.structures || 0 == TT.useRecords || (this.structures = []);
        let lT = kT > 32 || jT + kT > 64,
          LT = kT + 64,
          pT = kT + jT + 64;
        if (pT > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let BT = [],
          ZT = 0,
          cT = 0;
        this.pack = this.encode = function(TT, MT) {
          if (YU || (YU = new bU(8192), xU = YU.dataView || (YU.dataView = new DataView(YU.buffer, 0, 8192)), tU = 0), dU = YU.length - 10, dU - tU < 2048 ? (YU = new bU(YU.length), xU = YU.dataView || (YU.dataView = new DataView(YU.buffer, 0, YU.length)), dU = YU.length - 10, tU = 0) : tU = tU + 7 & 2147483640, UT = tU, MT & AU && (tU += 255 & MT), zT = gT.structuredClone ? new Map : null, gT.bundleStrings && "string" !== typeof TT ? (aU = [], aU.size = 1 / 0) : aU = null, WT = gT.structures, WT) {
            WT.uninitialized && (WT = gT._mergeStructures(gT.getStructures()));
            let TT = WT.sharedLength || 0;
            if (TT > kT) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + WT.sharedLength);
            if (!WT.transitions) {
              WT.transitions = Object.create(null);
              for (let UT = 0; UT < TT; UT++) {
                let TT = WT[UT];
                if (!TT) continue;
                let mT, zT = WT.transitions;
                for (let UT = 0, WT = TT.length; UT < WT; UT++) {
                  let WT = TT[UT];
                  mT = zT[WT], mT || (mT = zT[WT] = Object.create(null)), zT = mT
                }
                zT[XU] = UT + 64
              }
              this.lastNamedStructuresLength = TT
            }
            nT || (WT.nextId = TT + 64)
          }
          let HT;
          mT && (mT = !1);
          try {
            gT.randomAccessStructure && TT && TT.constructor && TT.constructor === Object ? dT(TT) : qT(TT);
            let mT = aU;
            if (aU && PU(UT, qT, 0), zT && zT.idsToInsert) {
              let TT = zT.idsToInsert.sort(((TT, UT) => TT.offset > UT.offset ? 1 : -1)),
                WT = TT.length,
                MT = -1;
              for (; mT && WT > 0;) {
                let zT = TT[--WT].offset + UT;
                zT < mT.stringsPosition + UT && -1 === MT && (MT = 0), zT > mT.position + UT ? MT >= 0 && (MT += 6) : (MT >= 0 && (xU.setUint32(mT.position + UT, xU.getUint32(mT.position + UT) + MT), MT = -1), mT = mT.previous, WT++)
              }
              MT >= 0 && mT && xU.setUint32(mT.position + UT, xU.getUint32(mT.position + UT) + MT), tU += 6 * TT.length, tU > dU && YT(tU), gT.offset = tU;
              let nT = function(TT, UT) {
                let mT, WT = 6 * UT.length,
                  zT = TT.length - WT;
                for (; mT = UT.pop();) {
                  let UT = mT.offset,
                    MT = mT.id;
                  TT.copyWithin(UT + WT, UT, zT), WT -= 6;
                  let gT = UT + WT;
                  TT[gT++] = 214, TT[gT++] = 105, TT[gT++] = MT >> 24, TT[gT++] = MT >> 16 & 255, TT[gT++] = MT >> 8 & 255, TT[gT++] = 255 & MT, zT = UT
                }
                return TT
              }(YU.subarray(UT, tU), TT);
              return zT = null, nT
            }
            return gT.offset = tU, MT & DU ? (YU.start = UT, YU.end = tU, YU) : YU.subarray(UT, tU)
          } catch (Wm) {
            throw HT = Wm, Wm
          } finally {
            if (WT && (vT(), mT && gT.saveStructures)) {
              let mT = WT.sharedLength || 0,
                zT = YU.subarray(UT, tU),
                nT = uU(WT, gT);
              if (!HT) return !1 === gT.saveStructures(nT, nT.isCompatible) ? gT.pack(TT, MT) : (gT.lastNamedStructuresLength = mT, YU.length > 1073741824 && (YU = null), zT)
            }
            YU.length > 1073741824 && (YU = null), MT & oU && (tU = UT)
          }
        };
        const vT = () => {
            cT < 10 && cT++;
            let TT = WT.sharedLength || 0;
            if (WT.length > TT && !nT && (WT.length = TT), ZT > 1e4) WT.transitions = null, cT = 0, ZT = 0, BT.length > 0 && (BT = []);
            else if (BT.length > 0 && !nT) {
              for (let TT = 0, UT = BT.length; TT < UT; TT++) BT[TT][XU] = 0;
              BT = []
            }
          },
          fT = TT => {
            var UT = TT.length;
            UT < 16 ? YU[tU++] = 144 | UT : UT < 65536 ? (YU[tU++] = 220, YU[tU++] = UT >> 8, YU[tU++] = 255 & UT) : (YU[tU++] = 221, xU.setUint32(tU, UT), tU += 4);
            for (let mT = 0; mT < UT; mT++) qT(TT[mT])
          },
          qT = TT => {
            tU > dU && (YU = YT(tU));
            var mT, WT = typeof TT;
            if ("string" === WT) {
              let WT, zT = TT.length;
              if (aU && zT >= 4 && zT < 4096) {
                if ((aU.size += zT) > 21760) {
                  let TT, mT, WT = (aU[0] ? 3 * aU[0].length + aU[1].length : 0) + 10;
                  tU + WT > dU && (YU = YT(tU + WT)), aU.position ? (mT = aU, YU[tU] = 200, tU += 3, YU[tU++] = 98, TT = tU - UT, tU += 4, PU(UT, qT, 0), xU.setUint16(TT + UT - 3, tU - UT - TT)) : (YU[tU++] = 214, YU[tU++] = 98, TT = tU - UT, tU += 4), aU = ["", ""], aU.previous = mT, aU.size = 0, aU.position = TT
                }
                let mT = yU.test(TT);
                return aU[mT ? 0 : 1] += TT, YU[tU++] = 193, void qT(mT ? -zT : zT)
              }
              WT = zT < 32 ? 1 : zT < 256 ? 2 : zT < 65536 ? 3 : 5;
              let gT = 3 * zT;
              if (tU + gT > dU && (YU = YT(tU + gT)), zT < 64 || !MT) {
                let UT, MT, gT, nT = tU + WT;
                for (UT = 0; UT < zT; UT++) MT = TT.charCodeAt(UT), MT < 128 ? YU[nT++] = MT : MT < 2048 ? (YU[nT++] = MT >> 6 | 192, YU[nT++] = 63 & MT | 128) : 55296 === (64512 & MT) && 56320 === (64512 & (gT = TT.charCodeAt(UT + 1))) ? (MT = 65536 + ((1023 & MT) << 10) + (1023 & gT), UT++, YU[nT++] = MT >> 18 | 240, YU[nT++] = MT >> 12 & 63 | 128, YU[nT++] = MT >> 6 & 63 | 128, YU[nT++] = 63 & MT | 128) : (YU[nT++] = MT >> 12 | 224, YU[nT++] = MT >> 6 & 63 | 128, YU[nT++] = 63 & MT | 128);
                mT = nT - tU - WT
              } else mT = MT(TT, tU + WT);
              mT < 32 ? YU[tU++] = 160 | mT : mT < 256 ? (WT < 2 && YU.copyWithin(tU + 2, tU + 1, tU + 1 + mT), YU[tU++] = 217, YU[tU++] = mT) : mT < 65536 ? (WT < 3 && YU.copyWithin(tU + 3, tU + 2, tU + 2 + mT), YU[tU++] = 218, YU[tU++] = mT >> 8, YU[tU++] = 255 & mT) : (WT < 5 && YU.copyWithin(tU + 5, tU + 3, tU + 3 + mT), YU[tU++] = 219, xU.setUint32(tU, mT), tU += 4), tU += mT
            } else if ("number" === WT)
              if (TT >>> 0 === TT) TT < 32 || TT < 128 && !1 === this.useRecords || TT < 64 && !this.randomAccessStructure ? YU[tU++] = TT : TT < 256 ? (YU[tU++] = 204, YU[tU++] = TT) : TT < 65536 ? (YU[tU++] = 205, YU[tU++] = TT >> 8, YU[tU++] = 255 & TT) : (YU[tU++] = 206, xU.setUint32(tU, TT), tU += 4);
              else if ((TT | 0) === TT) TT >= -32 ? YU[tU++] = 256 + TT : TT >= -128 ? (YU[tU++] = 208, YU[tU++] = TT + 256) : TT >= -32768 ? (YU[tU++] = 209, xU.setInt16(tU, TT), tU += 2) : (YU[tU++] = 210, xU.setInt32(tU, TT), tU += 4);
            else {
              let UT;
              if ((UT = this.useFloat32) > 0 && TT < 4294967296 && TT >= -2147483648) {
                let mT;
                if (YU[tU++] = 202, xU.setFloat32(tU, TT), UT < 4 || ((mT = TT * nU[(127 & YU[tU]) << 1 | YU[tU + 1] >> 7]) | 0) === mT) return void(tU += 4);
                tU--
              }
              YU[tU++] = 203, xU.setFloat64(tU, TT), tU += 8
            } else if ("object" === WT || "function" === WT)
              if (TT) {
                if (zT) {
                  let mT = zT.get(TT);
                  if (mT) {
                    if (!mT.id) {
                      let TT = zT.idsToInsert || (zT.idsToInsert = []);
                      mT.id = TT.push(mT)
                    }
                    return YU[tU++] = 214, YU[tU++] = 112, xU.setUint32(tU, mT.id), void(tU += 4)
                  }
                  zT.set(TT, {
                    offset: tU - UT
                  })
                }
                let MT = TT.constructor;
                if (MT === Object) eT(TT);
                else if (MT === Array) fT(TT);
                else if (MT === Map)
                  if (this.mapAsEmptyObject) YU[tU++] = 128;
                  else {
                    (mT = TT.size) < 16 ? YU[tU++] = 128 | mT : mT < 65536 ? (YU[tU++] = 222, YU[tU++] = mT >> 8, YU[tU++] = 255 & mT) : (YU[tU++] = 223, xU.setUint32(tU, mT), tU += 4);
                    for (let [UT, mT] of TT) qT(UT), qT(mT)
                  }
                else {
                  for (let UT = 0, mT = ZU.length; UT < mT; UT++) {
                    if (TT instanceof cU[UT]) {
                      let mT = ZU[UT];
                      if (mT.write) {
                        mT.type && (YU[tU++] = 212, YU[tU++] = mT.type, YU[tU++] = 0);
                        let UT = mT.write.call(this, TT);
                        return void(UT === TT ? Array.isArray(TT) ? fT(TT) : eT(TT) : qT(UT))
                      }
                      let WT, zT = YU,
                        MT = xU,
                        gT = tU;
                      YU = null;
                      try {
                        WT = mT.pack.call(this, TT, (TT => (YU = zT, zT = null, tU += TT, tU > dU && YT(tU), {
                          target: YU,
                          targetView: xU,
                          position: tU - TT
                        })), qT)
                      } finally {
                        zT && (YU = zT, xU = MT, tU = gT, dU = YU.length - 10)
                      }
                      return void(WT && (WT.length + tU > dU && YT(WT.length + tU), tU = FU(WT, YU, tU, mT.type)))
                    }
                  }
                  if (Array.isArray(TT)) fT(TT);
                  else {
                    if (TT.toJSON) {
                      const UT = TT.toJSON();
                      if (UT !== TT) return qT(UT)
                    }
                    if ("function" === WT) return qT(this.writeFunction && this.writeFunction(TT));
                    eT(TT)
                  }
                }
              } else YU[tU++] = 192;
            else if ("boolean" === WT) YU[tU++] = TT ? 195 : 194;
            else if ("bigint" === WT) {
              if (TT < BigInt(1) << BigInt(63) && TT >= -(BigInt(1) << BigInt(63))) YU[tU++] = 211, xU.setBigInt64(tU, TT);
              else if (TT < BigInt(1) << BigInt(64) && TT > 0) YU[tU++] = 207, xU.setBigUint64(tU, TT);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return qT(TT.toString());
                  if (this.useBigIntExtension && TT < BigInt(2) ** BigInt(1023) && TT > -(BigInt(2) ** BigInt(1023))) {
                    YU[tU++] = 199, tU++, YU[tU++] = 66;
                    let UT, mT = [];
                    do {
                      let WT = TT & BigInt(255);
                      UT = (WT & BigInt(128)) === (TT < BigInt(0) ? BigInt(128) : BigInt(0)), mT.push(WT), TT >>= BigInt(8)
                    } while (TT !== BigInt(0) && TT !== BigInt(-1) || !UT);
                    YU[tU - 2] = mT.length;
                    for (let TT = mT.length; TT > 0;) YU[tU++] = Number(mT[--TT]);
                    return
                  }
                  throw new RangeError(TT + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                YU[tU++] = 203, xU.setFloat64(tU, Number(TT))
              }
              tU += 8
            } else {
              if ("undefined" !== WT) throw new Error("Unknown type: " + WT);
              this.encodeUndefinedAsNil ? YU[tU++] = 192 : (YU[tU++] = 212, YU[tU++] = 0, YU[tU++] = 0)
            }
          },
          iT = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? TT => {
            let UT;
            if (this.skipValues) {
              UT = [];
              for (let mT in TT) "function" === typeof TT.hasOwnProperty && !TT.hasOwnProperty(mT) || this.skipValues.includes(TT[mT]) || UT.push(mT)
            } else UT = Object.keys(TT);
            let mT, WT = UT.length;
            if (WT < 16 ? YU[tU++] = 128 | WT : WT < 65536 ? (YU[tU++] = 222, YU[tU++] = WT >> 8, YU[tU++] = 255 & WT) : (YU[tU++] = 223, xU.setUint32(tU, WT), tU += 4), this.coercibleKeyAsNumber)
              for (let zT = 0; zT < WT; zT++) {
                mT = UT[zT];
                let WT = Number(mT);
                qT(isNaN(WT) ? mT : WT), qT(TT[mT])
              } else
                for (let zT = 0; zT < WT; zT++) qT(mT = UT[zT]), qT(TT[mT])
          } : TT => {
            YU[tU++] = 222;
            let mT = tU - UT;
            tU += 2;
            let WT = 0;
            for (let UT in TT)("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(UT)) && (qT(UT), qT(TT[UT]), WT++);
            if (WT > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            YU[mT++ + UT] = WT >> 8, YU[mT + UT] = 255 & WT
          },
          bT = !1 === this.useRecords ? iT : TT.progressiveRecords && !lT ? TT => {
            let mT, zT, MT = WT.transitions || (WT.transitions = Object.create(null)),
              gT = tU++ - UT;
            for (let nT in TT)
              if ("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(nT)) {
                if (mT = MT[nT], mT) MT = mT;
                else {
                  let HT = Object.keys(TT),
                    kT = MT;
                  MT = WT.transitions;
                  let jT = 0;
                  for (let TT = 0, UT = HT.length; TT < UT; TT++) {
                    let UT = HT[TT];
                    mT = MT[UT], mT || (mT = MT[UT] = Object.create(null), jT++), MT = mT
                  }
                  gT + UT + 1 == tU ? (tU--, JT(MT, HT, jT)) : xT(MT, HT, gT, jT), zT = !0, MT = kT[nT]
                }
                qT(TT[nT])
              } if (!zT) {
              let mT = MT[XU];
              mT ? YU[gT + UT] = mT : xT(MT, Object.keys(TT), gT, 0)
            }
          } : TT => {
            let UT, mT = WT.transitions || (WT.transitions = Object.create(null)),
              zT = 0;
            for (let WT in TT)("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(WT)) && (UT = mT[WT], UT || (UT = mT[WT] = Object.create(null), zT++), mT = UT);
            let MT = mT[XU];
            MT ? MT >= 96 && lT ? (YU[tU++] = 96 + (31 & (MT -= 96)), YU[tU++] = MT >> 5) : YU[tU++] = MT : JT(mT, mT.__keys__ || Object.keys(TT), zT);
            for (let WT in TT)("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(WT)) && qT(TT[WT])
          },
          OT = "function" == typeof this.useRecords && this.useRecords,
          eT = OT ? TT => {
            OT(TT) ? bT(TT) : iT(TT)
          } : bT,
          YT = TT => {
            let mT;
            if (TT > 16777216) {
              if (TT - UT > eU) throw new Error("Packed buffer would be larger than maximum buffer size");
              mT = Math.min(eU, 4096 * Math.round(Math.max((TT - UT) * (TT > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else mT = 1 + (Math.max(TT - UT << 2, YU.length - 1) >> 12) << 12;
            let WT = new bU(mT);
            return xU = WT.dataView || (WT.dataView = new DataView(WT.buffer, 0, mT)), TT = Math.min(TT, YU.length), YU.copy ? YU.copy(WT, 0, UT, TT) : WT.set(YU.slice(UT, TT)), tU -= UT, UT = 0, dU = WT.length - 10, YU = WT
          },
          JT = (TT, UT, zT) => {
            let MT = WT.nextId;
            MT || (MT = 64), MT < LT && this.shouldShareStructure && !this.shouldShareStructure(UT) ? (MT = WT.nextOwnId, MT < pT || (MT = LT), WT.nextOwnId = MT + 1) : (MT >= pT && (MT = LT), WT.nextId = MT + 1);
            let gT = UT.highByte = MT >= 96 && lT ? MT - 96 >> 5 : -1;
            TT[XU] = MT, TT.__keys__ = UT, WT[MT - 64] = UT, MT < LT ? (UT.isShared = !0, WT.sharedLength = MT - 63, mT = !0, gT >= 0 ? (YU[tU++] = 96 + (31 & MT), YU[tU++] = gT) : YU[tU++] = MT) : (gT >= 0 ? (YU[tU++] = 213, YU[tU++] = 114, YU[tU++] = 96 + (31 & MT), YU[tU++] = gT) : (YU[tU++] = 212, YU[tU++] = 114, YU[tU++] = MT), zT && (ZT += cT * zT), BT.length >= jT && (BT.shift()[XU] = 0), BT.push(TT), qT(UT))
          },
          xT = (TT, mT, WT, zT) => {
            let MT = YU,
              gT = tU,
              nT = dU,
              HT = UT;
            YU = JU, tU = 0, UT = 0, YU || (JU = YU = new bU(8192)), dU = YU.length - 10, JT(TT, mT, zT), JU = YU;
            let kT = tU;
            if (YU = MT, tU = gT, dU = nT, UT = HT, kT > 1) {
              let TT = tU + kT - 1;
              TT > dU && YT(TT);
              let mT = WT + UT;
              YU.copyWithin(mT + kT, mT + 1, tU), YU.set(JU.slice(0, kT), mT), tU = TT
            } else YU[WT + UT] = JU[0]
          },
          dT = TT => {
            let zT = wU(TT, YU, UT, tU, WT, YT, ((TT, UT, WT) => {
              if (WT) return mT = !0;
              tU = UT;
              let zT = YU;
              return qT(TT), vT(), zT !== YU ? {
                position: tU,
                targetView: xU,
                target: YU
              } : tU
            }), this);
            if (0 === zT) return eT(TT);
            tU = zT
          }
      }
      useBuffer(TT) {
        YU = TT, xU = YU.dataView || (YU.dataView = new DataView(YU.buffer, YU.byteOffset, YU.byteLength)), tU = 0
      }
      set position(TT) {
        tU = TT
      }
      get position() {
        return tU
      }
      set buffer(TT) {
        YU = TT
      }
      get buffer() {
        return YU
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function QU(TT, UT, mT, WT) {
      let zT = TT.byteLength;
      if (zT + 1 < 256) {
        var {
          target: MT,
          position: gT
        } = mT(4 + zT);
        MT[gT++] = 199, MT[gT++] = zT + 1
      } else if (zT + 1 < 65536) {
        var {
          target: MT,
          position: gT
        } = mT(5 + zT);
        MT[gT++] = 200, MT[gT++] = zT + 1 >> 8, MT[gT++] = zT + 1 & 255
      } else {
        var {
          target: MT,
          position: gT,
          targetView: nT
        } = mT(7 + zT);
        MT[gT++] = 201, nT.setUint32(gT, zT + 1), gT += 4
      }
      MT[gT++] = 116, MT[gT++] = UT, TT.buffer || (TT = new Uint8Array(TT)), MT.set(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength), gT)
    }

    function sU(TT, UT) {
      let mT = TT.byteLength;
      var WT, zT;
      if (mT < 256) {
        var {
          target: WT,
          position: zT
        } = UT(mT + 2);
        WT[zT++] = 196, WT[zT++] = mT
      } else if (mT < 65536) {
        var {
          target: WT,
          position: zT
        } = UT(mT + 3);
        WT[zT++] = 197, WT[zT++] = mT >> 8, WT[zT++] = 255 & mT
      } else {
        var {
          target: WT,
          position: zT,
          targetView: MT
        } = UT(mT + 5);
        WT[zT++] = 198, MT.setUint32(zT, mT), zT += 4
      }
      WT.set(TT, zT)
    }

    function FU(TT, UT, mT, WT) {
      let zT = TT.length;
      switch (zT) {
        case 1:
          UT[mT++] = 212;
          break;
        case 2:
          UT[mT++] = 213;
          break;
        case 4:
          UT[mT++] = 214;
          break;
        case 8:
          UT[mT++] = 215;
          break;
        case 16:
          UT[mT++] = 216;
          break;
        default:
          zT < 256 ? (UT[mT++] = 199, UT[mT++] = zT) : zT < 65536 ? (UT[mT++] = 200, UT[mT++] = zT >> 8, UT[mT++] = 255 & zT) : (UT[mT++] = 201, UT[mT++] = zT >> 24, UT[mT++] = zT >> 16 & 255, UT[mT++] = zT >> 8 & 255, UT[mT++] = 255 & zT)
      }
      return UT[mT++] = WT, UT.set(TT, mT), mT += zT
    }

    function PU(TT, UT, mT) {
      if (aU.length > 0) {
        xU.setUint32(aU.position + TT, tU + mT - aU.position - TT), aU.stringsPosition = tU - TT;
        let WT = aU;
        aU = null, UT(WT[0]), UT(WT[1])
      }
    }

    function VU(TT) {
      if (TT.Class) {
        if (!TT.pack && !TT.write) throw new Error("Extension has no pack or write function");
        if (TT.pack && !TT.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        cU.unshift(TT.Class), ZU.unshift(TT)
      }! function(TT) {
        TT.unpack ? fT[TT.type] = TT.unpack : fT[TT.type] = TT
      }(TT)
    }

    function uU(TT, UT) {
      return TT.isCompatible = TT => {
        let mT = !TT || (UT.lastNamedStructuresLength || 0) === TT.length;
        return mT || UT._mergeStructures(TT), mT
      }, TT
    }
    cU = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, iT], ZU = [{
      pack(TT, UT, mT) {
        let WT = TT.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === TT.getMilliseconds()) && WT >= 0 && WT < 4294967296) {
          let {
            target: TT,
            targetView: mT,
            position: zT
          } = UT(6);
          TT[zT++] = 214, TT[zT++] = 255, mT.setUint32(zT, WT)
        } else if (WT > 0 && WT < 4294967296) {
          let {
            target: mT,
            targetView: zT,
            position: MT
          } = UT(10);
          mT[MT++] = 215, mT[MT++] = 255, zT.setUint32(MT, 4e6 * TT.getMilliseconds() + (WT / 1e3 / 4294967296 | 0)), zT.setUint32(MT + 4, WT)
        } else if (isNaN(WT)) {
          if (this.onInvalidDate) return UT(0), mT(this.onInvalidDate());
          let {
            target: TT,
            targetView: WT,
            position: zT
          } = UT(3);
          TT[zT++] = 212, TT[zT++] = 255, TT[zT++] = 255
        } else {
          let {
            target: mT,
            targetView: zT,
            position: MT
          } = UT(15);
          mT[MT++] = 199, mT[MT++] = 12, mT[MT++] = 255, zT.setUint32(MT, 1e6 * TT.getMilliseconds()), zT.setBigInt64(MT + 4, BigInt(Math.floor(WT)))
        }
      }
    }, {
      pack(TT, UT, mT) {
        if (this.setAsEmptyObject) return UT(0), mT({});
        let WT = Array.from(TT),
          {
            target: zT,
            position: MT
          } = UT(this.moreTypes ? 3 : 0);
        this.moreTypes && (zT[MT++] = 212, zT[MT++] = 115, zT[MT++] = 0), mT(WT)
      }
    }, {
      pack(TT, UT, mT) {
        let {
          target: WT,
          position: zT
        } = UT(this.moreTypes ? 3 : 0);
        this.moreTypes && (WT[zT++] = 212, WT[zT++] = 101, WT[zT++] = 0), mT([TT.name, TT.message, TT.cause])
      }
    }, {
      pack(TT, UT, mT) {
        let {
          target: WT,
          position: zT
        } = UT(this.moreTypes ? 3 : 0);
        this.moreTypes && (WT[zT++] = 212, WT[zT++] = 120, WT[zT++] = 0), mT([TT.source, TT.flags])
      }
    }, {
      pack(TT, UT) {
        this.moreTypes ? QU(TT, 16, UT) : sU(iU ? Buffer.from(TT) : new Uint8Array(TT), UT)
      }
    }, {
      pack(TT, UT) {
        let mT = TT.constructor;
        mT !== OU && this.moreTypes ? QU(TT, mU.indexOf(mT.name), UT) : sU(TT, UT)
      }
    }, {
      pack(TT, UT) {
        let {
          target: mT,
          position: WT
        } = UT(1);
        mT[WT] = 193
      }
    }];
    let CU = new IU({
      useRecords: !1
    });
    const rU = CU.pack,
      KU = CU.pack,
      SU = IU,
      {
        NEVER: GU,
        ALWAYS: NU,
        DECIMAL_ROUND: EU,
        DECIMAL_FIT: hU
      } = pU,
      DU = 512,
      oU = 1024,
      AU = 2048;
    const RU = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!TT || "object" !== typeof TT) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const mT = new dT(UT);
        let WT;
        const zT = TT => {
          let UT;
          WT && (TT = Buffer.concat([WT, TT]), WT = void 0);
          try {
            UT = mT.unpackMultiple(TT)
          } catch (zT) {
            if (!zT.incomplete) throw zT;
            WT = TT.slice(zT.lastPosition), UT = zT.values
          }
          return UT
        };
        return "function" === typeof TT[Symbol.iterator] ? function*() {
          for (const UT of TT) yield* zT(UT)
        }() : "function" === typeof TT[Symbol.asyncIterator] ? async function*() {
          for await (const UT of TT) yield* zT(UT)
        }(): void 0
      },
      Tm = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (TT && "object" === typeof TT) {
          if ("function" === typeof TT[Symbol.iterator]) return function*(TT, UT) {
            const mT = new IU(UT);
            for (const WT of TT) yield mT.pack(WT)
          }(TT, UT);
          if ("function" === typeof TT.then || "function" === typeof TT[Symbol.asyncIterator]) return async function*(TT, UT) {
            const mT = new IU(UT);
            for await (const WT of TT) yield mT.pack(WT)
          }(TT, UT);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Um = !1,
      mm = !0
  },
  9242: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      $changes: () => ZT,
      $childType: () => cT,
      $decoder: () => jT,
      $deleteByIndex: () => pT,
      $encoder: () => kT,
      $filter: () => lT,
      $getByIndex: () => LT,
      $numFields: () => xT,
      $refId: () => nT,
      $track: () => HT,
      $values: () => bT,
      ArraySchema: () => WW,
      Callbacks: () => Wz,
      ChangeTree: () => am,
      CollectionSchema: () => gW,
      Decoder: () => hW,
      Encoder: () => SW,
      FieldBuilder: () => kW,
      MapSchema: () => MW,
      Metadata: () => EU,
      OPERATION: () => zT,
      Reflection: () => RW,
      ReflectionField: () => oW,
      ReflectionType: () => AW,
      Root: () => yW,
      Schema: () => tW,
      SetSchema: () => nW,
      StateCallbackStrategy: () => mz,
      StateView: () => FW,
      StreamSchema: () => HW,
      TypeContext: () => uU,
      createPool: () => Mz,
      decode: () => qU,
      decodeKeyValueOperation: () => om,
      decodeSchemaOperation: () => Dm,
      defineCustomTypes: () => eU,
      defineTypes: () => xW,
      deprecated: () => YW,
      dumpChanges: () => wW,
      encode: () => UU,
      encodeArray: () => Vm,
      encodeIndexedEntry: () => Fm,
      encodeKeyValueOperation: () => Pm,
      encodeMapEntry: () => sm,
      encodeSchemaOperation: () => Qm,
      UB: () => cW,
      fullStateOnly: () => iW,
      getDecoderStateCallbacks: () => Tz,
      getEncodeDescriptor: () => Tm,
      getRawChangesCallback: () => Uz,
      isBuilder: () => jW,
      patchOnly: () => qW,
      registerType: () => OU,
      schema: () => dW,
      t: () => BW,
      type: () => bW,
      unreliable: () => fW,
      view: () => vW
    });
    const WT = 255;
    var zT;

    function MT(TT) {
      Object.defineProperty(TT, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(TT) {
      TT[TT.ADD = 128] = "ADD", TT[TT.REPLACE = 0] = "REPLACE", TT[TT.DELETE = 64] = "DELETE", TT[TT.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", TT[TT.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", TT[TT.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", TT[TT.CLEAR = 10] = "CLEAR", TT[TT.REVERSE = 15] = "REVERSE", TT[TT.MOVE = 32] = "MOVE", TT[TT.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", TT[TT.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(zT || (zT = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const gT = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const TT = "colyseus.symbolRegistry",
        UT = gT[TT] || (gT[TT] = Object.create(null));
      Symbol.for = function(TT) {
        return UT[TT] || (UT[TT] = Symbol(TT))
      }, Symbol.keyFor = function(TT) {
        for (const mT in UT)
          if (UT[mT] === TT) return mT
      }
    }
    const nT = Symbol.for("$refId"),
      HT = "~track",
      kT = "~encoder",
      jT = "~decoder",
      lT = "~filter",
      LT = "~getByIndex",
      pT = "~deleteByIndex",
      BT = "~resyncPrune",
      ZT = Symbol.for("$changes"),
      cT = Symbol.for("$childType"),
      vT = Symbol.for("$proxyTarget"),
      fT = "~onEncodeEnd",
      qT = "~reset",
      iT = "~onDecodeEnd",
      bT = Symbol.for("$values"),
      OT = "~builder",
      eT = "~descriptors",
      YT = "~__encodeDescriptor",
      JT = "~encoders",
      xT = "~__numFields",
      dT = "~__refTypeFieldIndexes",
      wT = "~__viewFieldIndexes",
      tT = "$__fieldIndexesByViewTag",
      aT = "~__unreliableFieldIndexes",
      yT = "~__patchOnlyFieldIndexes",
      XT = "~__fullSyncSkipIndexes",
      IT = "~__fullStateOnlyFieldIndexes",
      QT = "~__streamFieldIndexes",
      sT = "~__streamPriorities";
    let FT;
    try {
      FT = new TextEncoder
    } catch (gz) {}
    const PT = new ArrayBuffer(8),
      VT = new Int32Array(PT),
      uT = new Float32Array(PT),
      CT = new Float64Array(PT),
      rT = new BigInt64Array(PT),
      KT = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(TT, UT) {
        for (var mT = 0, WT = 0, zT = 0, MT = TT.length; zT < MT; zT++)(mT = TT.charCodeAt(zT)) < 128 ? WT += 1 : mT < 2048 ? WT += 2 : mT < 55296 || mT >= 57344 ? WT += 3 : (zT++, WT += 4);
        return WT
      };

    function ST(TT, UT, mT) {
      for (var WT = 0, zT = 0, MT = UT.length; zT < MT; zT++)(WT = UT.charCodeAt(zT)) < 128 ? TT[mT.offset++] = WT : WT < 2048 ? (TT[mT.offset] = 192 | WT >> 6, TT[mT.offset + 1] = 128 | 63 & WT, mT.offset += 2) : WT < 55296 || WT >= 57344 ? (TT[mT.offset] = 224 | WT >> 12, TT[mT.offset + 1] = 128 | WT >> 6 & 63, TT[mT.offset + 2] = 128 | 63 & WT, mT.offset += 3) : (zT++, WT = 65536 + ((1023 & WT) << 10 | 1023 & UT.charCodeAt(zT)), TT[mT.offset] = 240 | WT >> 18, TT[mT.offset + 1] = 128 | WT >> 12 & 63, TT[mT.offset + 2] = 128 | WT >> 6 & 63, TT[mT.offset + 3] = 128 | 63 & WT, mT.offset += 4)
    }

    function GT(TT, UT, mT) {
      TT[mT.offset++] = 255 & UT
    }

    function NT(TT, UT, mT) {
      TT[mT.offset++] = 255 & UT, TT[mT.offset++] = UT >> 8 & 255
    }

    function ET(TT, UT, mT) {
      TT[mT.offset++] = 255 & UT, TT[mT.offset++] = UT >> 8 & 255
    }

    function hT(TT, UT, mT) {
      TT[mT.offset++] = 255 & UT, TT[mT.offset++] = UT >> 8 & 255, TT[mT.offset++] = UT >> 16 & 255, TT[mT.offset++] = UT >> 24 & 255
    }

    function DT(TT, UT, mT) {
      const WT = UT >> 24,
        zT = UT >> 16,
        MT = UT >> 8,
        gT = UT;
      TT[mT.offset++] = 255 & gT, TT[mT.offset++] = 255 & MT, TT[mT.offset++] = 255 & zT, TT[mT.offset++] = 255 & WT
    }

    function oT(TT, UT, mT) {
      const WT = Math.floor(UT / Math.pow(2, 32));
      DT(TT, UT >>> 0, mT), DT(TT, WT, mT)
    }

    function AT(TT, UT, mT) {
      const WT = UT / Math.pow(2, 32) | 0;
      DT(TT, UT >>> 0, mT), DT(TT, WT, mT)
    }

    function RT(TT, UT, mT) {
      uT[0] = UT, hT(TT, VT[0], mT)
    }

    function TU(TT, UT, mT) {
      CT[0] = UT, hT(TT, VT[0], mT), hT(TT, VT[1], mT)
    }
    const UU = {
        int8: GT,
        uint8: function(TT, UT, mT) {
          TT[mT.offset++] = 255 & UT
        },
        int16: NT,
        uint16: ET,
        int32: hT,
        uint32: DT,
        int64: oT,
        uint64: AT,
        bigint64: function(TT, UT, mT) {
          rT[0] = BigInt.asIntN(64, UT), hT(TT, VT[0], mT), hT(TT, VT[1], mT)
        },
        biguint64: function(TT, UT, mT) {
          rT[0] = BigInt.asIntN(64, UT), hT(TT, VT[0], mT), hT(TT, VT[1], mT)
        },
        float32: RT,
        float64: TU,
        boolean: function(TT, UT, mT) {
          TT[mT.offset++] = UT ? 1 : 0
        },
        string: function(TT, UT, mT) {
          UT || (UT = "");
          let WT = KT(UT, "utf8"),
            zT = 0;
          if (WT < 32) TT[mT.offset++] = 160 | WT, zT = 1;
          else if (WT < 256) TT[mT.offset++] = 217, TT[mT.offset++] = WT, zT = 2;
          else if (WT < 65536) TT[mT.offset++] = 218, ET(TT, WT, mT), zT = 3;
          else {
            if (!(WT < 4294967296)) throw new Error("String too long");
            TT[mT.offset++] = 219, DT(TT, WT, mT), zT = 5
          }
          return ST(TT, UT, mT), zT + WT
        },
        number: function TT(UT, mT, WT) {
          return isNaN(mT) ? TT(UT, 0, WT) : isFinite(mT) ? mT !== (0 | mT) ? Math.abs(mT) <= 34028235e31 && (uT[0] = mT, Math.abs(Math.abs(uT[0]) - Math.abs(mT)) < 1e-4) ? (UT[WT.offset++] = 202, RT(UT, mT, WT), 5) : (UT[WT.offset++] = 203, TU(UT, mT, WT), 9) : mT >= 0 ? mT < 128 ? (UT[WT.offset++] = 255 & mT, 1) : mT < 256 ? (UT[WT.offset++] = 204, UT[WT.offset++] = 255 & mT, 2) : mT < 65536 ? (UT[WT.offset++] = 205, ET(UT, mT, WT), 3) : mT < 4294967296 ? (UT[WT.offset++] = 206, DT(UT, mT, WT), 5) : (UT[WT.offset++] = 207, AT(UT, mT, WT), 9) : mT >= -32 ? (UT[WT.offset++] = 224 | mT + 32, 1) : mT >= -128 ? (UT[WT.offset++] = 208, GT(UT, mT, WT), 2) : mT >= -32768 ? (UT[WT.offset++] = 209, NT(UT, mT, WT), 3) : mT >= -2147483648 ? (UT[WT.offset++] = 210, hT(UT, mT, WT), 5) : (UT[WT.offset++] = 211, oT(UT, mT, WT), 9) : TT(UT, mT > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, WT)
        },
        utf8Write: ST,
        utf8Length: KT
      },
      mU = new ArrayBuffer(8),
      WU = new Int32Array(mU),
      zU = new Float32Array(mU),
      MU = new Float64Array(mU),
      gU = new BigUint64Array(mU),
      nU = new BigInt64Array(mU);

    function HU(TT, UT, mT) {
      mT > TT.length - UT.offset && (mT = TT.length - UT.offset);
      for (var WT = "", zT = 0, MT = UT.offset, gT = UT.offset + mT; MT < gT; MT++) {
        var nT = TT[MT];
        if (0 !== (128 & nT))
          if (192 !== (224 & nT))
            if (224 !== (240 & nT)) {
              if (240 !== (248 & nT)) {
                console.error("decode.utf8Read(): Invalid byte " + nT + " at offset " + MT + ". Skip to end of string: " + (UT.offset + mT));
                break
              }(zT = (7 & nT) << 18 | (63 & TT[++MT]) << 12 | (63 & TT[++MT]) << 6 | 63 & TT[++MT]) >= 65536 ? (zT -= 65536, WT += String.fromCharCode(55296 + (zT >>> 10), 56320 + (1023 & zT))) : WT += String.fromCharCode(zT)
            } else WT += String.fromCharCode((15 & nT) << 12 | (63 & TT[++MT]) << 6 | 63 & TT[++MT]);
        else WT += String.fromCharCode((31 & nT) << 6 | 63 & TT[++MT]);
        else WT += String.fromCharCode(nT)
      }
      return UT.offset += mT, WT
    }

    function kU(TT, UT) {
      return jU(TT, UT) << 24 >> 24
    }

    function jU(TT, UT) {
      return TT[UT.offset++]
    }

    function lU(TT, UT) {
      return LU(TT, UT) << 16 >> 16
    }

    function LU(TT, UT) {
      return TT[UT.offset++] | TT[UT.offset++] << 8
    }

    function pU(TT, UT) {
      return TT[UT.offset++] | TT[UT.offset++] << 8 | TT[UT.offset++] << 16 | TT[UT.offset++] << 24
    }

    function BU(TT, UT) {
      return pU(TT, UT) >>> 0
    }

    function ZU(TT, UT) {
      return WU[0] = pU(TT, UT), zU[0]
    }

    function cU(TT, UT) {
      return WU[0] = pU(TT, UT), WU[1] = pU(TT, UT), MU[0]
    }

    function vU(TT, UT) {
      const mT = BU(TT, UT);
      return pU(TT, UT) * Math.pow(2, 32) + mT
    }

    function fU(TT, UT) {
      const mT = BU(TT, UT);
      return BU(TT, UT) * Math.pow(2, 32) + mT
    }
    const qU = {
        utf8Read: HU,
        int8: kU,
        uint8: jU,
        int16: lU,
        uint16: LU,
        int32: pU,
        uint32: BU,
        float32: ZU,
        float64: cU,
        int64: vU,
        uint64: fU,
        bigint64: function(TT, UT) {
          return WU[0] = pU(TT, UT), WU[1] = pU(TT, UT), nU[0]
        },
        biguint64: function(TT, UT) {
          return WU[0] = pU(TT, UT), WU[1] = pU(TT, UT), gU[0]
        },
        boolean: function(TT, UT) {
          return jU(TT, UT) > 0
        },
        string: function(TT, UT) {
          const mT = TT[UT.offset++];
          let WT;
          return mT < 192 ? WT = 31 & mT : 217 === mT ? WT = jU(TT, UT) : 218 === mT ? WT = LU(TT, UT) : 219 === mT && (WT = BU(TT, UT)), HU(TT, UT, WT)
        },
        number: function(TT, UT) {
          const mT = TT[UT.offset++];
          return mT < 128 ? mT : 202 === mT ? ZU(TT, UT) : 203 === mT ? cU(TT, UT) : 204 === mT ? jU(TT, UT) : 205 === mT ? LU(TT, UT) : 206 === mT ? BU(TT, UT) : 207 === mT ? fU(TT, UT) : 208 === mT ? kU(TT, UT) : 209 === mT ? lU(TT, UT) : 210 === mT ? pU(TT, UT) : 211 === mT ? vU(TT, UT) : mT > 223 ? -1 * (255 - mT + 1) : void 0
        },
        stringCheck: function(TT, UT) {
          const mT = TT[UT.offset];
          return mT < 192 && mT > 160 || 217 === mT || 218 === mT || 219 === mT
        }
      },
      iU = {},
      bU = new Map;

    function OU(TT, UT) {
      UT.constructor && (Object.prototype.hasOwnProperty.call(UT, "constructor") && null == UT.constructor[Symbol.metadata] && MT(UT.constructor), bU.set(UT.constructor, TT), iU[TT] = UT), UT.encode && (UU[TT] = UT.encode), UT.decode && (qU[TT] = UT.decode)
    }

    function eU(TT) {
      for (const UT in TT) OU(UT, TT[UT]);
      return TT => bW(TT)
    }
    const YU = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function JU() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function xU(TT) {
      return TT._stream ??= JU()
    }

    function dU(TT, UT, mT) {
      0 === UT.activeViews.size && xU(TT).broadcastPending.add(mT)
    }

    function wU(TT, UT, mT, WT) {
      const MT = TT._stream;
      if (void 0 === MT) return !0;
      let gT = !1;
      return MT.broadcastPending.delete(WT) ? gT = !0 : MT.sentBroadcast.delete(WT) && MT.broadcastDeletes.add(WT), UT.forEachActiveView((TT => {
        const UT = MT.pendingByView.get(TT.id);
        if (UT?.has(WT)) return UT.delete(WT), void(gT = !0);
        const nT = MT.sentByView.get(TT.id);
        if (nT?.has(WT)) {
          nT.delete(WT);
          let UT = TT.changes.get(mT);
          void 0 === UT && (UT = new Map, TT.changes.set(mT, UT)), UT.set(WT, zT.DELETE)
        }
      })), gT
    }

    function tU(TT, UT) {
      const mT = TT._stream?.pendingByView;
      if (void 0 === mT) return !1;
      for (const [WT, zT] of mT)
        if (zT.size > 0 && void 0 !== UT.activeViews.get(WT)?.deref()) return !0;
      return !1
    }

    function aU(TT) {
      const UT = TT._stream;
      return void 0 !== UT && (UT.broadcastPending.size > 0 || UT.broadcastDeletes.size > 0)
    }

    function yU(TT, UT, mT) {
      const WT = xU(TT);
      let zT = WT.pendingByView.get(UT);
      void 0 === zT && (zT = new Set, WT.pendingByView.set(UT, zT)), zT.add(mT)
    }

    function XU(TT, UT) {
      const mT = TT._stream;
      void 0 !== mT && (mT.pendingByView.delete(UT), mT.sentByView.delete(UT), mT.priorityByView?.delete(UT))
    }
    const IU = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function QU(TT) {
      if (null == TT || "object" !== typeof TT) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: UT,
        max: mT
      } = TT;
      if ("number" !== typeof UT || "number" !== typeof mT || !(mT > UT) || !Number.isFinite(UT) || !Number.isFinite(mT)) throw new Error(`t.quantized(): require finite min < max (got min=${UT}, max=${mT}).`);
      const WT = TT.bits ?? 16;
      if (8 !== WT && 16 !== WT && 32 !== WT) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${WT}).`);
      const zT = TT.mode ?? "clamp";
      if ("clamp" !== zT && "wrap" !== zT) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(zT)}).`);
      const MT = "wrap" === zT,
        gT = Math.pow(2, WT);
      return {
        min: UT,
        max: mT,
        bits: WT,
        wrap: MT,
        wire: IU[WT],
        range: mT - UT,
        span: MT ? gT : UT === -mT ? gT - 2 : gT - 1
      }
    }

    function sU(TT) {
      return null !== TT && "object" === typeof TT && void 0 !== TT.quantized
    }

    function FU(TT, UT) {
      if (TT.wrap) {
        if (!Number.isFinite(UT)) return 0;
        const mT = TT.range;
        let WT = (UT - TT.min) % mT;
        WT < 0 && (WT += mT);
        const zT = TT.span;
        return Math.floor(WT / mT * zT + .5) % zT
      }
      if (UT !== UT) return 0;
      const mT = UT < TT.min ? TT.min : UT > TT.max ? TT.max : UT;
      return Math.floor((mT - TT.min) / TT.range * TT.span + .5)
    }

    function PU(TT, UT) {
      return TT.min + UT / TT.span * TT.range
    }

    function VU(TT) {
      const UT = UU[TT.wire];
      return (mT, WT, zT) => UT(mT, FU(TT, WT), zT)
    }
    class uU {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(TT) {
        const UT = Object.getPrototypeOf(TT);
        if (UT !== tW) {
          let mT = uU.inheritedTypes.get(UT);
          mT || (mT = new Set, uU.inheritedTypes.set(UT, mT)), mT.add(TT)
        }
      }
      static cache(TT) {
        let UT = uU.cachedContexts.get(TT);
        return UT || (UT = new uU(TT), uU.cachedContexts.set(TT, UT)), UT
      }
      constructor(TT) {
        TT && this.discoverTypes(TT)
      }
      has(TT) {
        return this.schemas.has(TT)
      }
      get(TT) {
        return this.types[TT]
      }
      add(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(TT) && (this.types[UT] = TT, null == TT[Symbol.metadata] && EU.initialize(TT), this.schemas.set(TT, UT), !0)
      }
      getTypeId(TT) {
        return this.schemas.get(TT)
      }
      discoverTypes(TT) {
        if (!this.add(TT)) return;
        uU.inheritedTypes.get(TT)?.forEach((TT => {
          this.discoverTypes(TT)
        }));
        let UT = TT;
        for (;
          (UT = Object.getPrototypeOf(UT)) && UT !== tW && UT !== Function.prototype;) this.discoverTypes(UT);
        const mT = TT[Symbol.metadata];
        (mT[wT] || mT[QT]) && (this.hasFilters = !0);
        for (const WT in mT) {
          const TT = mT[WT].type;
          if ("string" !== typeof TT && !sU(TT))
            if ("function" === typeof TT) this.discoverTypes(TT);
            else {
              const UT = Object.values(TT)[0];
              if ("string" === typeof UT) continue;
              this.discoverTypes(UT)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function CU(TT) {
      const UT = KU(TT);
      return UT ? {
        complexTypeKlass: iU[UT],
        childType: TT[UT]
      } : {
        complexTypeKlass: !1,
        childType: TT
      }
    }

    function rU(TT, UT) {
      const mT = SU(TT),
        WT = KU(mT),
        zT = WT && KU(mT[WT]);
      if (zT) throw new Error(`${UT?`${UT}: `:""}@colyseus/schema: nested collections are not supported ("${WT}" of "${zT}"). Collections can only hold primitive types or Schema classes, wrap the inner ${zT} in a Schema class.`);
      return mT
    }

    function KU(TT) {
      return "object" === typeof TT && null !== TT ? Object.keys(TT).find((TT => void 0 !== iU[TT])) : void 0
    }

    function SU(TT) {
      if ("object" !== typeof TT || null === TT) return TT;
      if (Array.isArray(TT)) return {
        array: SU(TT[0])
      };
      const UT = function(TT) {
        const UT = Object.keys(TT),
          mT = UT.filter((TT => /\d+/.test(TT)));
        if (mT.length > 0 && mT.length === UT.length / 2 && TT[TT[mT[0]]] == mT[0]) return "number";
        if (UT.length > 0 && UT.every((UT => TT[UT] === UT))) return "string"
      }(TT);
      if (UT) return UT;
      if (sU(TT)) return "string" === typeof TT.quantized.wire ? TT : {
        quantized: QU(TT.quantized)
      };
      if (void 0 !== TT.type) return SU(TT.type);
      const mT = KU(TT);
      return mT && (TT[mT] = SU(TT[mT])), TT
    }
    const GU = [dT, aT, yT, XT, IT, QT, JT];

    function NU(TT, UT, mT) {
      TT[UT] || Object.defineProperty(TT, UT, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), TT[UT].push(mT)
    }
    const EU = {
        addField(TT, UT, mT, WT, zT) {
          if (UT >= 63) throw new Error(`Can't define field '${mT}'.\nSchema instances may only have up to 63 fields.`);
          TT[UT] = Object.assign(TT[UT] || {}, {
            type: WT,
            index: UT,
            name: mT
          }), Object.defineProperty(TT, eT, {
            value: TT[eT] || {},
            enumerable: !1,
            configurable: !0
          }), TT[eT][mT] = zT || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(TT, xT, {
            value: UT,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(TT, mT, {
            value: UT,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof TT[UT].type || sU(TT[UT].type) || (void 0 === TT[dT] && Object.defineProperty(TT, dT, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), TT[dT].push(UT));
          const MT = TT[UT].type;
          if (MT && "object" === typeof MT && void 0 !== MT.stream) {
            if (void 0 !== MT.array) throw new Error(YU);
            TT[UT].stream = !0, TT[QT] || Object.defineProperty(TT, QT, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), TT[QT].includes(UT) || TT[QT].push(UT);
            const zT = WT?.priority;
            "function" === typeof zT && EU.setStreamPriority(TT, mT, zT)
          }
        },
        setTag(TT, UT, mT) {
          const WT = TT[UT];
          if (TT[WT].tag = mT, TT[wT] || (Object.defineProperty(TT, wT, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(TT, tT, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), TT[wT].push(WT), mT < 0) TT[tT][mT] || (TT[tT][mT] = []), TT[tT][mT].push(WT);
          else
            for (let zT = mT; zT > 0; zT &= zT - 1) {
              const UT = zT & -zT;
              TT[tT][UT] || (TT[tT][UT] = []), TT[tT][UT].push(WT)
            }
        },
        setUnreliable(TT, UT) {
          const mT = TT[UT];
          if ("string" !== typeof TT[mT].type) throw new Error(`@unreliable cannot be applied to ref-type field "${UT}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          TT[mT].unreliable = !0, TT[aT] || Object.defineProperty(TT, aT, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), TT[aT].push(mT)
        },
        setPatchOnly(TT, UT) {
          const mT = TT[UT];
          if (TT[mT].fullStateOnly) throw new Error(`field "${UT}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          TT[mT].patchOnly = !0, NU(TT, yT, mT), NU(TT, XT, mT)
        },
        setDeprecated(TT, UT) {
          const mT = TT[UT];
          TT[mT].deprecated = !0, NU(TT, XT, mT), Object.defineProperty(TT, mT, {
            value: TT[mT],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(TT, UT) {
          const mT = TT[UT];
          if (TT[mT].patchOnly) throw new Error(`field "${UT}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          TT[mT].fullStateOnly = !0, NU(TT, IT, mT)
        },
        setStream(TT, UT) {
          const mT = TT[UT];
          TT[mT].stream = !0, TT[QT] || Object.defineProperty(TT, QT, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), TT[QT].push(mT)
        },
        setStreamPriority(TT, UT, mT) {
          const WT = TT[UT];
          TT[sT] || Object.defineProperty(TT, sT, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), TT[sT][WT] = mT
        },
        getStreamPriority: (TT, UT) => TT?.[sT]?.[UT],
        defineField(TT, UT, mT, WT, zT) {
          const MT = rU(zT, `${TT.name}.${WT}`),
            {
              complexTypeKlass: gT,
              childType: nT
            } = CU(MT);
          EU.addField(UT, mT, WT, MT, eW(WT, mT, nT, gT)), UT[eT][WT] && Object.defineProperty(TT.prototype, WT, UT[eT][WT]), ("string" === typeof MT || sU(MT)) && (UT[JT] || Object.defineProperty(UT, JT, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), UT[JT][mT] = "string" === typeof MT ? UU[MT] : VU(MT.quantized))
        },
        setFields(TT, UT) {
          const mT = TT.prototype.constructor;
          uU.register(mT);
          const WT = Object.getPrototypeOf(mT),
            zT = WT && WT[Symbol.metadata],
            MT = EU.initialize(mT);
          mT[HT] || (mT[HT] = tW[HT]), mT[kT] || (mT[kT] = tW[kT]), mT[jT] || (mT[jT] = tW[jT]), mT.prototype.toJSON || (mT.prototype.toJSON = tW.prototype.toJSON);
          let gT = MT[xT] ?? (zT && zT[xT]) ?? -1;
          gT++, MT[JT] || Object.defineProperty(MT, JT, {
            value: zT?.[JT] ? [...zT[JT]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const nT in UT) {
            if (void 0 !== MT[nT]) throw new Error(`@colyseus/schema: Duplicate '${nT}' definition on '${mT.name||"(anonymous)"}'.`);
            EU.defineField(mT, MT, gT, nT, UT[nT]), gT++
          }
          return TT
        },
        isDeprecated: (TT, UT) => !0 === TT[UT].deprecated,
        initialize(TT) {
          const UT = Object.getPrototypeOf(TT),
            mT = UT[Symbol.metadata];
          let WT = TT[Symbol.metadata] ?? Object.create(null);
          if (UT !== tW && WT === mT && (WT = Object.create(null), mT)) {
            Object.setPrototypeOf(WT, mT), Object.defineProperty(WT, xT, {
              value: mT[xT],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== mT[wT] && (Object.defineProperty(WT, wT, {
              value: [...mT[wT]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(WT, tT, {
              value: {
                ...mT[tT]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const TT of GU) {
              const UT = mT[TT];
              void 0 !== UT && Object.defineProperty(WT, TT, {
                value: [...UT],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(WT, eT, {
              value: {
                ...mT[eT]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(TT, Symbol.metadata, {
            value: WT,
            writable: !1,
            configurable: !0
          }), WT
        },
        isValidInstance: TT => TT.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(TT.constructor[Symbol.metadata], xT),
        getFields(TT) {
          const UT = TT[Symbol.metadata],
            mT = {};
          for (let WT = 0; WT <= UT[xT]; WT++) mT[UT[WT].name] = UT[WT].type;
          return mT
        },
        hasViewTagAtIndex: (TT, UT) => TT?.[wT]?.includes(UT),
        hasUnreliableAtIndex: (TT, UT) => TT?.[aT]?.includes(UT),
        hasPatchOnlyAtIndex: (TT, UT) => TT?.[yT]?.includes(UT),
        hasFullStateOnlyAtIndex: (TT, UT) => TT?.[IT]?.includes(UT),
        hasStreamAtIndex: (TT, UT) => TT?.[QT]?.includes(UT)
      },
      hU = (TT, UT, mT) => TT(UT, mT);
    class DU {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(TT) {
        this.ops = new Uint8Array(Math.max(TT + 1, 1))
      }
      record(TT, UT) {
        const mT = this.ops[TT];
        0 === mT ? this.ops[TT] = UT : (mT === zT.DELETE || mT === zT.ADD && UT === zT.DELETE_AND_ADD) && (this.ops[TT] = zT.DELETE_AND_ADD), TT < 32 ? this.dirtyLow |= 1 << TT : this.dirtyHigh |= 1 << TT - 32
      }
      recordDelete(TT, UT) {
        this.ops[TT] = UT, TT < 32 ? this.dirtyLow |= 1 << TT : this.dirtyHigh |= 1 << TT - 32
      }
      recordRaw(TT, UT) {
        this.record(TT, UT)
      }
      operationAt(TT) {
        const UT = this.ops[TT];
        return 0 === UT ? void 0 : UT
      }
      setOperationAt(TT, UT) {
        this.ops[TT] = UT
      }
      forEach(TT) {
        this.forEachWithCtx(TT, hU)
      }
      forEachWithCtx(TT, UT) {
        let mT = this.dirtyLow,
          WT = this.dirtyHigh;
        const zT = this.ops;
        for (; 0 !== mT;) {
          const WT = mT & -mT,
            MT = 31 - Math.clz32(WT);
          mT ^= WT, UT(TT, MT, zT[MT])
        }
        for (; 0 !== WT;) {
          const mT = WT & -WT,
            MT = 31 - Math.clz32(mT) + 32;
          WT ^= mT, UT(TT, MT, zT[MT])
        }
      }
      size() {
        return AU(this.dirtyLow) + AU(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class oU {
      aB = new Map;
      pureOps = [];
      record(TT, UT) {
        const mT = this.aB.get(TT);
        void 0 === mT ? this.aB.set(TT, UT) : (mT === zT.DELETE || mT === zT.ADD && UT === zT.DELETE_AND_ADD) && this.aB.set(TT, zT.DELETE_AND_ADD)
      }
      recordDelete(TT, UT) {
        this.aB.set(TT, UT)
      }
      recordRaw(TT, UT) {
        this.aB.set(TT, UT)
      }
      recordPure(TT) {
        this.pureOps.push([this.aB.size, TT])
      }
      operationAt(TT) {
        return this.aB.get(TT)
      }
      setOperationAt(TT, UT) {
        this.aB.has(TT) && this.aB.set(TT, UT)
      }
      forEach(TT) {
        this.forEachWithCtx(TT, hU)
      }
      forEachWithCtx(TT, UT) {
        const mT = this.pureOps;
        if (mT.length > 0) {
          let WT = 0,
            zT = 0;
          for (const [MT, gT] of this.aB) {
            for (; WT < mT.length && mT[WT][0] <= zT;) {
              const zT = mT[WT++][1];
              UT(TT, -zT, zT)
            }
            UT(TT, MT, gT), zT++
          }
          for (; WT < mT.length;) {
            const zT = mT[WT++][1];
            UT(TT, -zT, zT)
          }
        } else
          for (const [WT, zT] of this.aB) UT(TT, WT, zT)
      }
      size() {
        return this.aB.size + this.pureOps.length
      }
      has() {
        return this.aB.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.aB.clear(), this.pureOps.length = 0
      }
      shift(TT) {
        const UT = new Map;
        for (const [mT, WT] of this.aB) UT.set(mT + TT, WT);
        this.aB = UT
      }
    }

    function AU(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }

    function RU(TT) {
      if (void 0 === TT) return 0;
      let UT = 0;
      for (let mT = 0, WT = TT.length; mT < WT; mT++) {
        const WT = TT[mT];
        WT < 32 && (UT |= 1 << WT)
      }
      return UT
    }

    function Tm(TT) {
      const UT = TT.constructor;
      if (Object.prototype.hasOwnProperty.call(UT, YT)) return UT[YT];
      const mT = UT[Symbol.metadata],
        WT = EU.isValidInstance(TT),
        zT = (mT?.[wT]?.length ?? 0) > 0,
        MT = function(TT) {
          const UT = [],
            mT = [],
            WT = [],
            zT = [],
            MT = TT?.[xT];
          if (void 0 === MT) return {
            names: UT,
            types: mT,
            tags: WT,
            encoders: zT
          };
          const gT = TT[JT];
          for (let nT = 0; nT <= MT; nT++) {
            const MT = TT[nT];
            void 0 !== MT ? (UT[nT] = MT.name, mT[nT] = MT.type, WT[nT] = MT.tag, zT[nT] = gT?.[nT]) : (UT[nT] = void 0, mT[nT] = void 0, WT[nT] = void 0, zT[nT] = void 0)
          }
          return {
            names: UT,
            types: mT,
            tags: WT,
            encoders: zT
          }
        }(mT),
        gT = WT && !zT ? void 0 : UT[lT],
        nT = {
          encoder: UT[kT],
          filter: gT,
          metadata: mT,
          isSchema: WT,
          filterBitmask: WT ? RU(mT?.[wT]) : 0,
          hasAnyFullStateOnly: (mT?.[IT]?.length ?? 0) > 0,
          hasAnyUnreliable: (mT?.[aT]?.length ?? 0) > 0,
          hasAnyStream: (mT?.[QT]?.length ?? 0) > 0,
          hasAnyView: zT,
          fullStateOnlyBitmask: RU(mT?.[IT]),
          unreliableBitmask: RU(mT?.[aT]),
          streamBitmask: RU(mT?.[QT]),
          names: MT.names,
          types: MT.types,
          tags: MT.tags,
          encoders: MT.encoders
        };
      return Object.defineProperty(UT, YT, {
        value: nT,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), nT
    }

    function Um(TT, UT) {
      if (void 0 !== TT.parentRef && UT(TT.parentRef, TT._parentIndex)) return !0;
      for (let mT = TT.extraParents; void 0 !== mT; mT = mT.next)
        if (UT(mT.ref, mT.index)) return !0;
      return !1
    }
    const mm = (TT, UT) => {
        TT.isFieldUnreliable(UT) ? TT.ensureUnreliableRecorder().record(UT, zT.ADD) : TT.record(UT, zT.ADD)
      },
      Wm = (TT, UT) => TT(UT);

    function zm(TT, UT, mT) {
      const WT = TT.refTarget;
      if (void 0 !== WT[cT]) {
        if (TT.isPatchOnly) return;
        if (Array.isArray(WT.items)) {
          const TT = WT.items;
          for (let WT = 0, zT = TT.length; WT < zT; WT++) void 0 !== TT[WT] && mT(UT, WT)
        } else if (void 0 !== WT.journal)
          for (const [TT, zT] of WT.journal.keyByIndex) WT.$items.has(zT) && mT(UT, TT);
        else if (void 0 !== WT.$items)
          for (const TT of WT.$items.keys()) mT(UT, TT)
      } else {
        const zT = TT.metadata;
        if (!zT) return;
        const MT = zT[xT] ?? -1,
          gT = zT[XT],
          nT = TT.encDescriptor.names;
        for (let TT = 0; TT <= MT; TT++) {
          const zT = nT[TT];
          if (void 0 === zT) continue;
          if (gT && gT.includes(TT)) continue;
          const MT = WT[zT];
          void 0 !== MT && null !== MT && mT(UT, TT)
        }
      }
    }

    function Mm(TT, UT, mT, WT) {
      ! function(TT, UT, mT) {
        if (!UT) return;
        const WT = UT[ZT],
          zT = !WT._isSchema;
        let MT;
        zT ? (UT = WT.parent, mT = WT.parentIndex, MT = UT?.[ZT].metadata) : MT = WT.metadata;
        const gT = (MT?.[yT]?.includes(mT) ? Jm : 0) | (MT?.[IT]?.includes(mT) ? xm : 0),
          nT = WT.flags & tm | gT,
          HT = TT.flags;
        TT.flags = HT | nT;
        nT & ~HT & xm && (TT.reset(), TT.unreliableRecorder?.reset());
        const kT = TT.root?.types;
        if (!kT?.hasFilters) return;
        const jT = MT?.[wT]?.includes(mT) ?? !1,
          lT = MT?.[QT]?.includes(mT) ?? !1,
          LT = WT.isFiltered || jT || lT;
        if (TT.isFiltered = LT, lT && !zT) {
          TT.isStreamCollection = !0;
          const UT = xU(TT.ref);
          if (void 0 === UT.priority) {
            const TT = EU.getStreamPriority(MT, mT);
            void 0 !== TT && (UT.priority = TT)
          }
          TT.root?.registerStream(TT.ref)
        }
        if (LT) {
          const UT = nm(TT);
          TT.isVisibilitySharedWithParent = WT.isFiltered && UT && !lT && (!jT || zT && MT[mT].tag !== ZW)
        }
      }(TT, UT, mT), TT.isFullStateOnly || (TT.has() && TT.root?.enqueueChangeTree(TT), TT.unreliableRecorder?.has() && TT.root?.enqueueUnreliable(TT), TT.has() || TT.unreliableRecorder?.has() || TT.root?.enqueueChangeTree(TT))
    }

    function gm(TT) {
      const UT = TT.pendingFilterRefresh;
      for (let mT = 0; mT < UT.length; mT++) {
        const TT = UT[mT];
        0 !== (TT.flags & wm) && Hm(TT)
      }
      UT.length = 0
    }

    function nm(TT) {
      return TT._isSchema || "string" !== typeof TT.refTarget[cT]
    }

    function Hm(TT) {
      TT.flags &= ~wm;
      const UT = TT.root;
      if (void 0 === UT || void 0 === TT.parentRef) return;
      const mT = nm(TT);
      let WT = pm(TT, TT.parentRef, TT._parentIndex, mT);
      for (let MT = TT.extraParents; void 0 !== MT && WT !== Lm; MT = MT.next) WT |= pm(TT, MT.ref, MT.index, mT);
      if (0 === WT) return;
      TT.isVisibilitySharedWithParent = 0 !== (WT & lm);
      const zT = 0 === (WT & jm);
      zT !== TT.isFiltered && (TT.isFiltered = zT, zT || TT.isFullStateOnly || (TT.forEachLiveWithCtx(TT, mm), TT.has() && UT.enqueueChangeTree(TT), TT.unreliableRecorder?.has() && UT.enqueueUnreliable(TT)), TT.forEachChildWithCtx(TT, Bm))
    }
    const km = 1,
      jm = 2,
      lm = 4,
      Lm = km | jm | lm;

    function pm(TT, UT, mT, WT) {
      const zT = UT[ZT];
      if (zT.root !== TT.root || ! function(TT, UT, mT) {
          const WT = UT.refTarget;
          if (UT.isArray) {
            const UT = WT.items,
              zT = UT[mT];
            if (void 0 !== zT && zT[ZT] === TT) return !0;
            for (let mT = 0, WT = UT.length; mT < WT; mT++) {
              const WT = UT[mT];
              if (void 0 !== WT && WT[ZT] === TT) return !0
            }
            return !1
          }
          const zT = UT.getValue(mT);
          return void 0 !== zT && zT[ZT] === TT
        }(TT, zT, mT)) return 0;
      zT.flags & wm && Hm(zT);
      let MT = km;
      if (zT._isSchema) {
        void 0 !== zT.encDescriptor.tags[mT] || zT.isFieldStream(mT) || (zT.isFiltered ? WT && (MT |= lm) : MT |= jm)
      } else if (zT.isFiltered) {
        if (WT && !zT.isStreamCollection) {
          const TT = zT.parent?.[ZT];
          (TT?._isSchema ? TT.encDescriptor.tags[zT.parentIndex] : void 0) !== ZW && (MT |= lm)
        }
      } else MT |= jm;
      return MT
    }
    const Bm = (TT, UT, mT) => {
      Hm(UT)
    };

    function Zm(TT, UT, mT, WT) {
      if (TT.addParent(UT, WT), !mT) return;
      const zT = mT.add(TT);
      mT !== TT.root && (TT.root = mT, Mm(TT, UT, WT));
      const MT = UT?.[ZT];
      if (void 0 !== MT && void 0 !== MT.subscribedViews && void 0 !== UT[cT] && function(TT, UT, mT, WT) {
          const zT = TT.subscribedViews;
          if (void 0 === zT) return;
          const MT = TT.isStreamCollection,
            gT = MT ? TT.ref : void 0,
            nT = MT ? void 0 : mT[ZT];
          for (let HT = 0, kT = zT.length; HT < kT; HT++) {
            let TT = zT[HT];
            for (; 0 !== TT;) {
              const mT = TT & -TT;
              TT ^= mT;
              const kT = 32 * HT + (31 - Math.clz32(mT)),
                jT = WT.activeViews.get(kT),
                lT = jT?.deref();
              void 0 !== lT ? MT ? yU(gT, kT, UT) : void 0 !== nT && lT.markVisible(nT) : zT[HT] &= ~mT
            }
          }
        }(MT, WT, TT.ref, mT), zT) {
        let UT = im[bm];
        void 0 === UT && (UT = {
          parentRef: void 0,
          root: void 0
        }, im[bm] = UT), UT.parentRef = TT.ref, UT.root = mT, bm++, fm(TT, UT, Om), bm--
      }
    }

    function cm(TT, UT, mT) {
      TT(UT, mT)
    }

    function fm(TT, UT, mT) {
      const WT = TT.refTarget;
      if (WT[cT]) {
        if ("string" !== typeof WT[cT]) {
          const TT = WT.items;
          if (void 0 !== TT)
            for (let WT = 0, zT = TT.length; WT < zT; WT++) {
              const zT = TT[WT];
              zT && mT(UT, zT[ZT], WT)
            } else {
              const TT = WT.$items,
                zT = WT._collectionIndexes;
              for (const WT of TT.keys()) {
                const MT = TT.get(WT);
                MT && mT(UT, MT[ZT], zT?.[WT] ?? WT)
              }
            }
        }
      } else {
        const zT = TT.metadata,
          MT = zT?.[dT];
        if (!MT) return;
        const gT = TT.encDescriptor.names;
        for (let TT = 0, nT = MT.length; TT < nT; TT++) {
          const zT = MT[TT],
            nT = WT[gT[zT]];
          nT && mT(UT, nT[ZT], zT)
        }
      }
    }

    function qm(TT, UT, mT) {
      UT.root !== TT ? UT.setRoot(TT) : TT.add(UT)
    }
    const im = [];
    let bm = 0;

    function Om(TT, UT, mT) {
      if (UT.root === TT.root) return TT.root.add(UT), void TT.root.moveNextToParent(UT);
      UT.setParent(TT.parentRef, TT.root, mT)
    }

    function em(TT, UT, mT) {
      const WT = (3 & mT) << 3;
      return mT < 4 ? TT >>> WT & 255 : UT >>> WT & 255
    }
    const Ym = (TT, UT, mT) => TT(UT, mT);
    const Jm = 16,
      xm = 32,
      dm = 128,
      wm = 256,
      tm = Jm | xm;
    class am {
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
      set isFiltered(TT) {
        this.flags = TT ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(TT) {
        this.flags = TT ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(TT) {
        this.flags = TT ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(TT) {
        this.flags = TT ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & Jm)
      }
      set isPatchOnly(TT) {
        this.flags = TT ? this.flags | Jm : this.flags & ~Jm
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & xm)
      }
      set isFullStateOnly(TT) {
        this.flags = TT ? this.flags | xm : this.flags & ~xm
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(TT) {
        this.flags = TT ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & dm)
      }
      set needsRestage(TT) {
        this.flags = TT ? this.flags | dm : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new DU(this.metadata?.[xT] ?? 0) : new oU), this.unreliableRecorder
      }
      isFieldUnreliable(TT) {
        const UT = this.encDescriptor;
        return !!UT.hasAnyUnreliable && (TT < 32 ? 0 !== (UT.unreliableBitmask & 1 << TT) : EU.hasUnreliableAtIndex(this.metadata, TT))
      }
      isFieldFullStateOnly(TT) {
        if (this.isFullStateOnly) return !0;
        const UT = this.encDescriptor;
        return !!UT.hasAnyFullStateOnly && (TT < 32 ? 0 !== (UT.fullStateOnlyBitmask & 1 << TT) : EU.hasFullStateOnlyAtIndex(this.metadata, TT))
      }
      isFieldStream(TT) {
        const UT = this.encDescriptor;
        return !!UT.hasAnyStream && (TT < 32 ? 0 !== (UT.streamBitmask & 1 << TT) : EU.hasStreamAtIndex(this.metadata, TT))
      }
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        this.ref = TT, this.refTarget = UT;
        const mT = Tm(TT);
        this.encDescriptor = mT, this.metadata = mT.metadata;
        const WT = mT.isSchema;
        if (this._isSchema = WT, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, WT) {
          const TT = this.metadata?.[xT] ?? 0;
          TT > 7 && (this.ops = new Uint8Array(TT + 1))
        } else this.collDirty = new Map
      }
      _opAt(TT) {
        const UT = this.ops;
        if (void 0 !== UT) return UT[TT];
        const mT = (3 & TT) << 3;
        return TT < 4 ? this.opsLow >>> mT & 255 : this.opsHigh >>> mT & 255
      }
      _opPut(TT, UT) {
        const mT = this.ops;
        if (void 0 !== mT) return void(mT[TT] = UT);
        const WT = (3 & TT) << 3,
          zT = ~(255 << WT);
        TT < 4 ? this.opsLow = this.opsLow & zT | UT << WT : this.opsHigh = this.opsHigh & zT | UT << WT
      }
      _markDirty(TT) {
        TT < 32 ? this.dirtyLow |= 1 << TT : this.dirtyHigh |= 1 << TT - 32
      }
      record(TT, UT) {
        if (this._isSchema) {
          const mT = this._opAt(TT);
          0 === mT ? this._opPut(TT, UT) : (mT === zT.DELETE || mT === zT.ADD && UT === zT.DELETE_AND_ADD) && this._opPut(TT, zT.DELETE_AND_ADD), this._markDirty(TT)
        } else {
          const mT = this.collDirty,
            WT = mT.get(TT);
          let MT;
          MT = void 0 === WT ? UT : WT === zT.DELETE || WT === zT.ADD && UT === zT.DELETE_AND_ADD ? zT.DELETE_AND_ADD : WT, mT.set(TT, MT)
        }
      }
      recordDelete(TT, UT) {
        this._isSchema ? (this._opPut(TT, UT), this._markDirty(TT)) : this.collDirty.set(TT, UT)
      }
      recordRaw(TT, UT) {
        this._isSchema ? (this._opPut(TT, UT), this._markDirty(TT)) : this.collDirty.set(TT, UT)
      }
      recordPure(TT) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, TT])
      }
      operationAt(TT) {
        if (this._isSchema) {
          const UT = this._opAt(TT);
          return 0 === UT ? void 0 : UT
        }
        return this.collDirty.get(TT)
      }
      setOperationAt(TT, UT) {
        if (this._isSchema) this._opPut(TT, UT);
        else {
          const mT = this.collDirty;
          mT.has(TT) && mT.set(TT, UT)
        }
      }
      forEach(TT) {
        this.forEachWithCtx(TT, Ym)
      }
      forEachWithCtx(TT, UT) {
        if (this._isSchema) {
          let mT = this.dirtyLow,
            WT = this.dirtyHigh;
          const zT = this.ops;
          if (void 0 !== zT) {
            for (; 0 !== mT;) {
              const WT = mT & -mT,
                MT = 31 - Math.clz32(WT);
              mT ^= WT, UT(TT, MT, zT[MT])
            }
            for (; 0 !== WT;) {
              const mT = WT & -WT,
                MT = 31 - Math.clz32(mT) + 32;
              WT ^= mT, UT(TT, MT, zT[MT])
            }
          } else {
            const WT = this.opsLow,
              zT = this.opsHigh;
            for (; 0 !== mT;) {
              const MT = mT & -mT,
                gT = 31 - Math.clz32(MT);
              mT ^= MT, UT(TT, gT, em(WT, zT, gT))
            }
          }
          return
        }
        const mT = this.collDirty,
          WT = this.collPureOps;
        if (void 0 !== WT && WT.length > 0) {
          let zT = 0,
            MT = 0;
          for (const [gT, nT] of mT) {
            for (; zT < WT.length && WT[zT][0] <= MT;) {
              const mT = WT[zT++][1];
              UT(TT, -mT, mT)
            }
            UT(TT, gT, nT), MT++
          }
          for (; zT < WT.length;) {
            const mT = WT[zT++][1];
            UT(TT, -mT, mT)
          }
        } else
          for (const [zT, MT] of mT) UT(TT, zT, MT)
      }
      size() {
        return this._isSchema ? AU(this.dirtyLow) + AU(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(TT, UT) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const mT = this.collDirty,
          WT = new Map,
          MT = !this.paused && !this.isFullStateOnly;
        if (TT > 0)
          for (const [zT, gT] of mT) zT < TT && WT.set(zT, gT);
        if (MT)
          for (let gT = 0; gT < UT; gT++) WT.set(TT + gT, zT.ADD);
        for (const [zT, gT] of mT) zT >= TT && WT.set(zT + UT, gT);
        this.collDirty = WT, MT && this.root?.enqueueChangeTree(this)
      }
      removeAt(TT, UT) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const mT = this.collDirty,
          WT = TT + UT;
        let zT = !1;
        for (const gT of mT.keys())
          if (gT >= WT) {
            zT = !0;
            break
          } if (!zT) {
          for (let UT = TT; UT < WT; UT++) mT.delete(UT);
          return
        }
        const MT = new Map;
        for (const [gT, nT] of mT) gT < TT ? MT.set(gT, nT) : gT >= WT && MT.set(gT - UT, nT);
        this.collDirty = MT
      }
      unshift(TT) {
        this.insertAt(0, TT)
      }
      setRoot(TT) {
        ! function(TT, UT) {
          TT.root = UT;
          const mT = UT.add(TT);
          Mm(TT, TT.parent, TT.parentIndex), mT && fm(TT, UT, qm)
        }(this, TT)
      }
      setParent(TT, UT, mT) {
        Zm(this, TT, UT, mT)
      }
      forEachChild(TT) {
        fm(this, TT, cm)
      }
      forEachChildWithCtx(TT, UT) {
        fm(this, TT, UT)
      }
      forEachLive(TT) {
        zm(this, TT, Wm)
      }
      forEachLiveWithCtx(TT, UT) {
        zm(this, TT, UT)
      }
      operation(TT) {
        this.paused || this.isFullStateOnly || (this.recordPure(TT), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(TT, UT, mT) {
        if (!this.paused && !this.isFieldFullStateOnly(TT)) {
          if (this.isFieldUnreliable(TT) && !this.isNew) {
            const WT = this.ensureUnreliableRecorder();
            return mT ? WT.recordRaw(TT, UT) : WT.record(TT, UT), void this.root?.enqueueUnreliable(this)
          }
          mT ? this.recordRaw(TT, UT) : this.record(TT, UT), this.root?.enqueueChangeTree(this)
        }
      }
      change(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT.ADD;
        this._routeAndRecord(TT, UT, !1)
      }
      indexedOperation(TT, UT) {
        this._routeAndRecord(TT, UT, !0)
      }
      getChange(TT) {
        return this.operationAt(TT)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(TT) {
        const UT = this.paused;
        this.paused = !0;
        try {
          return TT()
        } finally {
          this.paused = UT
        }
      }
      markDirty(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT.ADD;
        const mT = this.paused;
        this.paused = !1;
        try {
          this.change(TT, UT)
        } finally {
          this.paused = mT
        }
      }
      getValue(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[LT](TT, UT)
      }
      delete(TT, UT) {
        if (void 0 === TT) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${TT}'`)
          } catch (gz) {
            console.warn(gz)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(TT)) return this.getValue(TT);
        const mT = this.isFieldUnreliable(TT) && !this.isNew;
        mT ? this.ensureUnreliableRecorder().recordDelete(TT, UT ?? zT.DELETE) : this.recordDelete(TT, UT ?? zT.DELETE);
        const WT = this.getValue(TT);
        return WT && WT[ZT] && this.root?.remove(WT[ZT]), mT ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), WT
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[fT]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[fT]?.()
      }
      discard() {
        this._isSchema || this.refTarget[fT]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const TT = TT => {
          if (TT < 0) return;
          const UT = this.getValue(TT);
          UT && UT[ZT] && UT[ZT].discardAll()
        };
        this.forEach(TT), this.unreliableRecorder?.forEach(TT), this.discard()
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
      addParent(TT, UT) {
        ! function(TT, UT, mT) {
          if (TT.parentRef) {
            if (TT.parentRef[ZT] === UT[ZT]) return void(TT._parentIndex = mT);
            if (Um(TT, ((TT, mT) => TT[ZT] === UT[ZT]))) return void(TT._parentIndex = mT)
          }
          void 0 === TT.parentRef ? (TT.parentRef = UT, TT._parentIndex = mT) : (TT.extraParents = {
            ref: TT.parentRef,
            index: TT._parentIndex,
            next: TT.extraParents
          }, TT.parentRef = UT, TT._parentIndex = mT)
        }(this, TT, UT)
      }
      setParentIndex(TT, UT) {
        ! function(TT, UT, mT) {
          if (void 0 !== TT.extraParents)
            if (TT.parentRef[ZT] !== UT[ZT]) {
              for (let WT = TT.extraParents; void 0 !== WT; WT = WT.next)
                if (WT.ref[ZT] === UT[ZT]) return void(WT.index = mT)
            } else TT._parentIndex = mT;
          else TT._parentIndex = mT
        }(this, TT, UT)
      }
      removeParent() {
        return function(TT, UT) {
          if (TT.parentRef && TT.parentRef[ZT] === UT[ZT]) return TT.extraParents ? (TT.parentRef = TT.extraParents.ref, TT._parentIndex = TT.extraParents.index, TT.extraParents = TT.extraParents.next) : (TT.parentRef = void 0, TT._parentIndex = void 0), !0;
          let mT = TT.extraParents,
            WT = null;
          for (; mT;) {
            if (mT.ref[ZT] === UT[ZT]) return WT ? WT.next = mT.next : TT.extraParents = mT.next, !0;
            WT = mT, mT = mT.next
          }
          return void 0 === TT.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(TT) {
        return function(TT, UT) {
          if (void 0 !== TT.parentRef && UT(TT.parentRef, TT._parentIndex)) return {
            ref: TT.parentRef,
            index: TT._parentIndex
          };
          for (let mT = TT.extraParents; void 0 !== mT; mT = mT.next)
            if (UT(mT.ref, mT.index)) return {
              ref: mT.ref,
              index: mT.index
            }
        }(this, TT)
      }
      hasParent(TT) {
        return Um(this, TT)
      }
      indexInParent(TT) {
        return function(TT, UT) {
          if (TT.parentRef && TT.parentRef[ZT] === UT[ZT]) return TT._parentIndex;
          for (let mT = TT.extraParents; void 0 !== mT; mT = mT.next)
            if (mT.ref[ZT] === UT[ZT]) return mT.index
        }(this, TT)
      }
      getAllParents() {
        return function(TT) {
          const UT = [];
          TT.parentRef && UT.push({
            ref: TT.parentRef,
            index: TT._parentIndex
          });
          let mT = TT.extraParents;
          for (; mT;) UT.push({
            ref: mT.ref,
            index: mT.index
          }), mT = mT.next;
          return UT
        }(this)
      }
    }
    class ym {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(TT) {
        this.ref = TT
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
      untracked(TT) {
        return TT()
      }
      markDirty() {}
      forEachChild(TT) {
        const UT = this.ref;
        if (UT[cT]) {
          if ("string" !== typeof UT[cT])
            for (const [mT, WT] of UT.entries()) WT && TT(WT[ZT], UT._collectionIndexes?.[mT] ?? mT);
          return
        }
        const mT = UT.constructor,
          WT = mT?.[Symbol.metadata];
        if (!WT) return;
        const zT = WT[dT] ?? [];
        for (let MT = 0; MT < zT.length; MT++) {
          const mT = zT[MT],
            gT = UT[WT[mT].name];
          gT && TT(gT[ZT], mT)
        }
      }
      forEachChildWithCtx(TT, UT) {
        this.forEachChild(((mT, WT) => UT(TT, mT, WT)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Xm(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
      var mT;
      Object.defineProperty(TT, ZT, {
        value: (mT = UT, new ym(mT)),
        enumerable: !1,
        writable: !0
      })
    }

    function Im(TT, UT, mT, WT, MT, gT, HT) {
      void 0 !== HT ? HT(UT, WT, gT) : "string" === typeof mT ? UU[mT]?.(UT, WT, gT) : null != mT[Symbol.metadata] ? (UU.number(UT, WT[nT], gT), (MT & zT.ADD) === zT.ADD && TT.tryEncodeTypeId(UT, mT, WT.constructor, gT)) : UU.number(UT, WT[nT], gT)
    }
    const Qm = function(TT, UT, mT, WT, MT, gT, nT, HT) {
        if (UT[gT.offset++] = 255 & (WT | MT), MT === zT.DELETE) return;
        const kT = mT.encDescriptor,
          jT = mT.ref,
          lT = jT[bT][WT] ?? jT[kT.names[WT]];
        Im(TT, UT, kT.types[WT], lT, MT, gT, kT.encoders[WT])
      },
      sm = function(TT, UT, mT, WT, MT, gT) {
        if (UT[gT.offset++] = 255 & MT, UU.number(UT, WT, gT), MT === zT.DELETE) return;
        const nT = mT.ref;
        if ((MT & zT.ADD) === zT.ADD) {
          const TT = nT.$indexes.get(WT);
          UU.string(UT, TT, gT)
        }
        Im(TT, UT, nT[cT], nT[LT](WT), MT, gT)
      },
      Fm = function(TT, UT, mT, WT, MT, gT) {
        if (UT[gT.offset++] = 255 & MT, UU.number(UT, WT, gT), MT === zT.DELETE) return;
        const nT = mT.ref;
        Im(TT, UT, nT[cT], nT[LT](WT), MT, gT)
      },
      Pm = function(TT, UT, mT, WT, MT, gT) {
        const nT = mT.ref;
        (MT & zT.ADD) === zT.ADD && "function" === typeof nT.set ? sm(TT, UT, mT, WT, MT, gT) : Fm(TT, UT, mT, WT, MT, gT)
      },
      Vm = function(TT, UT, mT, WT, MT, gT, HT, kT) {
        const jT = mT.refTarget,
          lT = jT[cT],
          pT = "string" !== typeof lT;
        let BT;
        if (kT && mT.isFiltered && pT) {
          const TT = jT.tmpItems[WT];
          if (!TT) return;
          if (BT = TT[nT], MT === zT.DELETE) MT = zT.DELETE_BY_REFID;
          else if ((MT & zT.ADD) === zT.ADD) MT = zT.ADD_BY_REFID;
          else if ((MT & zT.MOVE) === zT.MOVE) return
        } else if (MT === zT.DELETE && pT) {
          const TT = jT.tmpItems[WT];
          if (!TT) return;
          BT = TT[nT], MT = zT.DELETE_BY_REFID
        } else BT = WT;
        if (UT[gT.offset++] = 255 & MT, UU.number(UT, BT, gT), MT === zT.DELETE || MT === zT.DELETE_BY_REFID) return;
        Im(TT, UT, lT, jT[LT](WT, HT), MT, gT)
      };

    function um(TT, UT, mT, WT, MT, gT, HT) {
      const kT = TT.resyncVisited;
      let jT = kT.get(TT.currentRefId);
      if (void 0 === jT && kT.set(TT.currentRefId, jT = new Set), jT.add(WT), void 0 !== MT && mT === zT.ADD && MT !== gT) {
        const mT = MT[nT];
        void 0 !== mT && (TT.root.removeRef(mT), HT?.push({
          ref: UT,
          refId: TT.currentRefId,
          op: zT.DELETE,
          dynamicIndex: WT,
          value: void 0,
          previousValue: MT
        }))
      }
    }

    function Cm(TT, UT, mT, WT) {
      const zT = UT[nT];
      if (void 0 === zT || mT.has(zT)) return;
      mT.add(zT);
      const MT = UT.constructor[Symbol.metadata],
        gT = MT?.[dT];
      if (void 0 === gT) return;
      const HT = MT[yT];
      for (let nT = 0; nT < gT.length; nT++) {
        const zT = gT[nT];
        if (void 0 !== HT && HT.includes(zT)) continue;
        const kT = MT[zT],
          jT = UT[kT.name];
        jT && (tW.is(kT.type) ? Cm(TT, jT, mT, WT) : rm(TT, jT, mT, WT))
      }
    }

    function rm(TT, UT, mT, WT) {
      const MT = UT[vT] ?? UT,
        gT = MT[nT];
      if (void 0 === gT || mT.has(gT)) return;
      mT.add(gT);
      const HT = TT.resyncVisited.get(gT);
      if (void 0 === HT) return;
      const kT = TT.root;
      MT[BT](HT, ((TT, mT) => {
        WT?.push({
          ref: UT,
          refId: gT,
          op: zT.DELETE,
          dynamicIndex: mT,
          value: void 0,
          previousValue: TT
        });
        const MT = TT?.[nT];
        void 0 !== MT && kT.removeRef(MT)
      }), (UT => {
        tW.isSchema(UT) && Cm(TT, UT, mT, WT)
      }))
    }
    const Km = 1,
      Sm = 2,
      Gm = 3,
      Nm = 4,
      Em = 5;

    function hm(TT, UT, mT, WT, MT, gT, HT, kT, jT) {
      const lT = TT.root;
      let LT;
      if ((UT & zT.DELETE) === zT.DELETE) {
        const TT = MT?.[nT];
        void 0 !== TT && lT.removeRef(TT), UT !== zT.DELETE_AND_ADD && mT[pT](WT), LT = void 0
      }
      if (UT === zT.DELETE);
      else if ("string" === typeof gT) LT = qU[gT](HT, kT);
      else if (sU(gT)) LT = function(TT, UT, mT) {
        return PU(TT, (0, qU[TT.wire])(UT, mT))
      }(gT.quantized, HT, kT);
      else if (tW.is(gT)) {
        const mT = qU.number(HT, kT);
        if (LT = lT.refs.get(mT), (UT & zT.ADD) === zT.ADD) {
          const WT = TT.getInstanceType(HT, kT, gT);
          LT || (LT = TT.createInstanceOfType(WT)), lT.addRef(mT, LT, LT !== MT || UT === zT.DELETE_AND_ADD && LT === MT)
        }
      } else {
        const mT = (BT = Object.keys(gT)[0], iU[BT]),
          WT = qU.number(HT, kT);
        null !== TT.resyncVisited && function(TT, UT) {
          const mT = TT.resyncVisited;
          mT.has(UT) || mT.set(UT, new Set)
        }(TT, WT);
        const pT = lT.refs.has(WT) ? MT || lT.refs.get(WT) : mT.constructor.initializeForDecoder();
        if (LT = pT.clone(!0), LT[cT] = Object.values(gT)[0], MT) {
          let TT = MT[nT];
          if (void 0 !== TT && WT !== TT) {
            (UT & zT.DELETE) !== zT.DELETE && lT.removeRef(TT);
            const mT = MT.entries();
            let WT;
            for (;
              (WT = mT.next()) && !WT.done;) {
              const [UT, mT] = WT.value;
              "object" === typeof mT && (TT = mT[nT]), jT?.push({
                ref: MT,
                refId: TT,
                op: zT.DELETE,
                field: UT,
                value: void 0,
                previousValue: mT
              })
            }
          }
        }
        lT.addRef(WT, LT, pT !== MT || UT === zT.DELETE_AND_ADD && pT === MT)
      }
      var BT;
      return LT
    }
    const Dm = function(TT, UT, mT, WT, zT) {
        const MT = UT[mT.offset++],
          gT = WT.constructor[Symbol.metadata],
          nT = MT >> 6 << 6,
          HT = MT % (nT || 255),
          kT = gT[HT];
        if (void 0 === kT) return console.warn("@colyseus/schema: field not defined at", {
          index: HT,
          ref: WT.constructor.name,
          metadata: gT
        }), -1;
        const jT = !0 === kT.deprecated,
          lT = jT ? void 0 : WT[LT](HT),
          pT = hm(TT, nT, WT, HT, lT, kT.type, UT, mT, zT);
        jT || (null !== pT && void 0 !== pT && (WT[kT.name] = pT), lT !== pT && zT?.push({
          ref: WT,
          refId: TT.currentRefId,
          op: nT,
          field: kT.name,
          value: pT,
          previousValue: lT
        }))
      },
      om = function(TT, UT, mT, WT, MT) {
        const gT = WT[vT] ?? WT,
          nT = UT[mT.offset++];
        if (nT === zT.CLEAR) return TT.removeChildRefs(gT, MT), void gT.clear();
        const HT = qU.number(UT, mT),
          kT = gT[cT],
          jT = gT.constructor.COLLECTION_KIND;
        let lT;
        (nT & zT.ADD) === zT.ADD ? jT === Km ? (lT = qU.string(UT, mT), gT.setIndex(HT, lT)) : lT = HT : lT = gT.getIndex(HT);
        const pT = gT[LT](HT),
          BT = hm(TT, nT, WT, HT, pT, kT, UT, mT, MT);
        if (null !== TT.resyncVisited && um(TT, WT, nT, lT, pT, BT, MT), null !== BT && void 0 !== BT) switch (jT) {
          case Km:
            gT.$items.set(lT, BT);
            break;
          case Sm:
            gT.$setAt(HT, BT, null !== TT.resyncVisited && nT === zT.ADD ? zT.REPLACE : nT);
            break;
          case Gm:
          case Nm:
          case Em:
            gT.$items.has(HT) || (gT.$items.set(HT, BT), "number" === typeof gT.$refId && HT >= gT.$refId && (gT.$refId = HT + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${gT.constructor?.name} \u2014 item at index ${HT} was not stored.`)
        }
        pT !== BT && MT?.push({
          ref: WT,
          refId: TT.currentRefId,
          op: nT,
          dynamicIndex: lT,
          value: BT,
          previousValue: pT
        })
      },
      Am = function(TT, UT, mT, WT, MT) {
        const gT = WT[vT] ?? WT;
        let nT, HT = UT[mT.offset++];
        if (HT === zT.CLEAR) return TT.removeChildRefs(gT, MT), void gT.clear();
        if (HT === zT.REVERSE) return void gT.items.reverse();
        if (HT === zT.DELETE_BY_REFID) {
          const HT = qU.number(UT, mT),
            kT = TT.root.refs.get(HT);
          if (void 0 === kT) return;
          if (TT.root.removeRef(HT), nT = gT.findIndex((TT => TT === kT)), -1 === nT) return;
          return gT[pT](nT), void MT?.push({
            ref: WT,
            refId: TT.currentRefId,
            op: zT.DELETE,
            dynamicIndex: nT,
            value: void 0,
            previousValue: kT
          })
        }
        if (HT === zT.ADD_BY_REFID) {
          const WT = qU.number(UT, mT),
            zT = TT.root.refs.get(WT);
          zT && (nT = gT.findIndex((TT => TT === zT))), -1 !== nT && void 0 !== nT || (nT = gT.length)
        } else nT = qU.number(UT, mT);
        const kT = gT[cT];
        let jT = nT;
        const lT = gT.items[nT],
          LT = hm(TT, HT, WT, nT, lT, kT, UT, mT, MT);
        null !== TT.resyncVisited && um(TT, WT, HT, nT, lT, LT, MT), null !== LT && void 0 !== LT && LT !== lT && gT.$setAt(nT, LT, null !== TT.resyncVisited && HT === zT.ADD ? zT.REPLACE : HT), lT !== LT && MT?.push({
          ref: WT,
          refId: TT.currentRefId,
          op: HT,
          dynamicIndex: jT,
          value: LT,
          previousValue: lT
        })
      };
    class Rm extends Error {}

    function TW(TT, UT, mT, WT) {
      if (!(TT instanceof UT)) throw new Rm(`a '${UT.name}' was expected, but '${TT&&TT.constructor.name}' was provided in ${mT.constructor.name}#${WT}`)
    }
    const UW = (TT, UT) => {
        const mT = TT.toString(),
          WT = UT.toString();
        return mT < WT ? -1 : mT > WT ? 1 : 0
      },
      mW = {
        get: (TT, UT) => "symbol" === typeof UT || isNaN(UT) ? Reflect.get(TT, UT) : TT.items[UT],
        set: (TT, UT, mT) => {
          if ("symbol" !== typeof UT && !isNaN(UT)) {
            if (void 0 === mT || null === mT) TT.$deleteAt(UT);
            else {
              let WT;
              if (mT[ZT]) {
                TW(mT, TT[cT], TT, UT);
                const MT = TT.items[UT];
                TT.isMovingItems ? (WT = TT.$wireIndex(Number(UT)), void 0 !== MT ? mT[ZT].isNew ? TT[ZT].indexedOperation(WT, zT.MOVE_AND_ADD) : (TT[ZT].getChange(WT) & zT.DELETE) === zT.DELETE ? TT[ZT].indexedOperation(WT, zT.DELETE_AND_MOVE) : TT[ZT].indexedOperation(WT, zT.MOVE) : mT[ZT].isNew && TT[ZT].indexedOperation(WT, zT.ADD), mT[ZT].setParent(TT, TT[ZT].root, WT)) : WT = TT.$changeAt(Number(UT), mT), void 0 !== MT && MT[ZT].root?.remove(MT[ZT])
              } else WT = TT.$changeAt(Number(UT), mT);
              TT.items[UT] = mT, void 0 !== WT && (TT.tmpItems[WT] = mT)
            }
            return !0
          }
          return Reflect.set(TT, UT, mT)
        },
        deleteProperty: (TT, UT) => ("number" === typeof UT ? TT.$deleteAt(UT) : delete TT[UT], !0),
        has: (TT, UT) => "symbol" === typeof UT || isNaN(Number(UT)) ? Reflect.has(TT, UT) : Reflect.has(TT.items, UT)
      };
    class WW {
      [ZT];
      [nT];
      [vT];
      [cT];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[kT] = Vm;
      static[jT] = Am;
      static COLLECTION_KIND = Sm;
      static[lT](TT, UT, mT) {
        if (!mT) return !0;
        const WT = TT[vT] ?? TT;
        return "string" === typeof WT[cT] || mT.isChangeTreeVisible(WT.tmpItems[UT]?.[ZT])
      }
      static is(TT) {
        return Array.isArray(TT) || void 0 !== TT.array
      }
      static from(TT) {
        return new WW(...Array.from(TT))
      }
      constructor() {
        this[cT] = void 0, this[vT] = this;
        const TT = new Proxy(this, mW);
        return Object.defineProperty(this, ZT, {
          value: new am(TT, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), TT
      }
      static initializeForDecoder() {
        const TT = Object.create(WW.prototype);
        TT.items = [], TT.isMovingItems = !1, TT._needsCompaction = !1, TT[cT] = void 0, TT[vT] = TT;
        const UT = new Proxy(TT, mW);
        return Xm(TT, UT), UT
      }
      set length(TT) {
        0 === TT ? this.clear() : TT < this.items.length ? this.splice(TT, this.length - TT) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[ZT].pause()
      }
      resumeTracking() {
        this[ZT].resume()
      }
      untracked(TT) {
        return this[ZT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[ZT].paused
      }
      push() {
        const TT = this[vT],
          UT = TT.items,
          mT = TT.tmpItems,
          WT = TT[ZT],
          MT = TT[cT];
        let gT = mT.length;
        for (let nT = 0, HT = arguments.length; nT < HT; nT++, gT++) {
          const HT = nT < 0 || arguments.length <= nT ? void 0 : arguments[nT];
          if (void 0 === HT || null === HT) return;
          "object" === typeof HT && MT && TW(HT, MT, TT, nT), WT.indexedOperation(gT, zT.ADD), UT.push(HT), mT.push(HT), HT[ZT]?.setParent(this, WT.root, gT)
        }
        return gT
      }
      pop() {
        const TT = this[vT],
          UT = TT.tmpItems,
          mT = TT.deletedIndexes;
        let WT = -1;
        for (let MT = UT.length - 1; MT >= 0; MT--)
          if (!0 !== mT[MT]) {
            WT = MT;
            break
          } if (WT < 0) return;
        const zT = TT.$isUnsentAdd(WT);
        return TT[ZT].delete(WT), zT ? TT.$cancelAdd(WT) : mT[WT] = !0, TT.items.pop()
      }
      at(TT) {
        return TT < 0 && (TT += this.length), this.items[TT]
      }
      $wireIndex(TT) {
        const UT = this.deletedIndexes;
        if (0 === UT.length) return TT;
        const mT = this.tmpItems;
        let WT = 0;
        for (let zT = 0; zT < mT.length; zT++)
          if (!0 !== UT[zT]) {
            if (WT === TT) return zT;
            WT++
          } return mT.length + (TT - WT)
      }
      $isUnsentAdd(TT) {
        const UT = this[ZT];
        return 0 === (576 & UT.flags) && !UT.paused && "string" !== typeof this[cT] && UT.operationAt(TT) === zT.ADD
      }
      $cancelAdd(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const mT = this[ZT],
          WT = this.tmpItems[TT];
        this.tmpItems.splice(TT, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(TT, 1), mT.removeAt(TT, 1);
        const zT = WT?.[ZT];
        void 0 !== zT && void 0 === zT.root && zT.removeParent(this), UT && this.$reindexChildren(TT)
      }
      $reindexChildren(TT, UT) {
        if (!this[ZT].hasFilteredFields) return;
        if ("string" === typeof this[cT]) return;
        const mT = this.tmpItems,
          WT = mT.length;
        if (void 0 !== UT)
          for (; TT < WT && mT[TT] === UT[TT];) TT++;
        for (let zT = TT; zT < WT; zT++) mT[zT]?.[ZT]?.setParentIndex(this, zT)
      }
      $changeAt(TT, UT) {
        if (void 0 === UT || null === UT) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[TT] === UT) return;
        const mT = void 0 !== this.items[TT] ? "object" === typeof UT ? zT.DELETE_AND_ADD : zT.REPLACE : zT.ADD,
          WT = this.$wireIndex(TT),
          MT = this[ZT];
        return MT.change(WT, mT), UT[ZT]?.setParent(this, MT.root, WT), WT
      }
      $deleteAt(TT, UT) {
        this[ZT].delete(this.$wireIndex(TT), UT)
      }
      $setAt(TT, UT, mT) {
        mT === zT.ADD && void 0 !== this.items[TT] ? this.items.splice(TT, 0, UT) : mT === zT.DELETE_AND_MOVE ? (this.items.splice(TT, 1), this.items[TT] = UT) : (TT > this.items.length && (this._needsCompaction = !0), this.items[TT] = UT)
      }
      clear() {
        const TT = this[vT];
        if (0 === TT.items.length) return;
        const UT = TT[ZT];
        UT.forEachChild(((TT, mT) => {
          UT.root?.remove(TT)
        })), UT.discard(), UT.operation(zT.CLEAR), TT.items.length = 0, TT.tmpItems.length = 0
      } [qT]() {
        const TT = this[vT] ?? this,
          UT = TT[ZT];
        if (UT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const mT = TT.items;
        for (let WT = 0; WT < mT.length; WT++) mT[WT]?.[qT]?.();
        TT.items.length = 0, TT.tmpItems.length = 0, TT.deletedIndexes.length = 0, UT.recycle(), TT[nT] = void 0
      }
      concat() {
        return new WW(...this.items.concat(...arguments))
      }
      join(TT) {
        return this.items.join(TT)
      }
      reverse() {
        const TT = this[vT],
          UT = TT[ZT];
        if (UT.has() || TT.deletedIndexes.length > 0) {
          const UT = TT.items.slice().reverse();
          return this.clear(), this.push(...UT), this
        }
        return UT.operation(zT.REVERSE), TT.items.reverse(), TT.tmpItems.reverse(), TT.$reindexChildren(0), this
      }
      shift() {
        const TT = this[vT],
          UT = TT.items;
        if (0 === UT.length) return;
        const mT = TT[ZT],
          WT = TT.deletedIndexes;
        let MT = 0;
        for (; !0 === WT[MT];) MT++;
        const gT = TT.$isUnsentAdd(MT);
        return mT.delete(MT, zT.DELETE), gT ? TT.$cancelAdd(MT) : WT[MT] = !0, UT.shift()
      }
      slice(TT, UT) {
        const mT = new WW;
        return mT.push(...this.items.slice(TT, UT)), mT
      }
      sort() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UW;
        const UT = this[vT];
        UT.isMovingItems = !0;
        const mT = UT[ZT];
        return UT.items.sort(TT).forEach(((TT, UT) => mT.change(UT, zT.REPLACE))), UT.tmpItems.sort(TT), UT.$reindexChildren(0), UT.isMovingItems = !1, this
      }
      splice(TT, UT) {
        const mT = this[vT],
          WT = mT[ZT],
          MT = mT.items,
          gT = mT.tmpItems,
          nT = mT.deletedIndexes,
          HT = MT.length,
          kT = gT.length;
        for (var jT = arguments.length, lT = new Array(jT > 2 ? jT - 2 : 0), LT = 2; LT < jT; LT++) lT[LT - 2] = arguments[LT];
        const pT = lT.length,
          BT = [];
        for (let zT = 0; zT < kT; zT++) !0 !== nT[zT] && BT.push(zT);
        let cT;
        if (HT > TT) {
          void 0 === UT && (UT = HT - TT);
          for (let MT = TT; MT < TT + UT; MT++) {
            const TT = BT[MT],
              UT = mT.$isUnsentAdd(TT);
            WT.delete(TT, zT.DELETE), UT ? (cT ??= []).push(TT) : nT[TT] = !0
          }
        } else UT = 0;
        if (pT > 0) {
          const MT = BT[TT] ?? HT,
            kT = Math.min(pT, UT);
          for (let TT = 0; TT < kT; TT++) {
            const UT = MT + TT;
            let mT;
            const HT = void 0 !== cT ? cT.indexOf(UT) : -1; - 1 !== HT ? (cT.splice(HT, 1), mT = zT.ADD) : mT = nT[UT] ? zT.DELETE_AND_ADD : zT.ADD, WT.indexedOperation(UT, mT), gT[UT] = lT[TT], nT[UT] = !1, lT[TT][ZT]?.setParent(this, WT.root, UT)
          }
          const jT = pT - kT;
          if (jT > 0) {
            const TT = MT + kT;
            WT.insertAt(TT, jT);
            for (let UT = 0; UT < jT; UT++) lT[kT + UT][ZT]?.setParent(this, WT.root, TT + UT);
            nT.length > 0 && nT.splice(TT, 0, ...new Array(jT).fill(!1)), gT.splice(TT, 0, ...lT.slice(kT)), mT.$reindexChildren(TT + jT)
          }
        }
        if (void 0 !== cT && cT.length > 0) {
          for (let TT = cT.length - 1; TT >= 0; TT--) mT.$cancelAdd(cT[TT], !1);
          mT.$reindexChildren(cT[0])
        }
        return WT.root?.enqueueChangeTree(WT), MT.splice(TT, UT, ...lT)
      }
      unshift() {
        const TT = this[vT],
          UT = TT[ZT];
        UT.unshift(arguments.length);
        for (let WT = 0; WT < arguments.length; WT++)(WT < 0 || arguments.length <= WT ? void 0 : arguments[WT])?.[ZT]?.setParent(this, UT.root, WT);
        const mT = TT.deletedIndexes;
        return mT.length > 0 && mT.unshift(...new Array(arguments.length).fill(!1)), TT.tmpItems.unshift(...arguments), TT.$reindexChildren(arguments.length), TT.items.unshift(...arguments)
      }
      indexOf(TT, UT) {
        return this.items.indexOf(TT, UT)
      }
      lastIndexOf(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(TT, UT)
      }
      every(TT, UT) {
        return this.items.every(TT, UT)
      }
      some(TT, UT) {
        return this.items.some(TT, UT)
      }
      forEach(TT, UT) {
        return this.items.forEach(TT, UT)
      }
      map(TT, UT) {
        return this.items.map(TT, UT)
      }
      filter(TT, UT) {
        return this.items.filter(TT, UT)
      }
      reduce(TT, UT) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(TT, UT) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(TT, UT) {
        return this.items.find(TT, UT)
      }
      findIndex(TT, UT) {
        return this.items.findIndex(TT, UT)
      }
      fill(TT, UT, mT) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(TT, UT, mT) {
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
        return WW
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
      includes(TT, UT) {
        return this.items.includes(TT, UT)
      }
      flatMap(TT, UT) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(TT) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(TT, UT) {
        const mT = this.items.slice();
        return TT < 0 && (TT += this.length), mT[TT] = UT, new WW(...mT)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(TT) {
        return this.items.slice().sort(TT)
      }
      toSpliced(TT, UT) {
        for (var mT = arguments.length, WT = new Array(mT > 2 ? mT - 2 : 0), zT = 2; zT < mT; zT++) WT[zT - 2] = arguments[zT];
        const MT = this.items.slice();
        return MT.splice.apply(MT, arguments), MT
      }
      shuffle() {
        return this.move((TT => {
          let UT = this.items.length;
          for (; 0 != UT;) {
            let TT = Math.floor(Math.random() * UT);
            UT--, [this[UT], this[TT]] = [this[TT], this[UT]]
          }
        }))
      }
      move(TT) {
        return this.isMovingItems = !0, TT(this), this.isMovingItems = !1, this
      } [LT](TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = this[vT] ?? this;
        return UT || mT.deletedIndexes[TT] ? mT.items[TT] : mT.tmpItems[TT] || mT.items[TT]
      } [pT](TT) {
        const UT = this[vT] ?? this;
        UT.items[TT] = void 0, UT._needsCompaction = !0
      } [fT]() {
        const TT = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, TT), this.deletedIndexes.length = 0)
      } [iT]() {
        const TT = this[vT] ?? this;
        TT._needsCompaction && (TT._needsCompaction = !1, TT.items = TT.items.filter((TT => void 0 !== TT)))
      } [BT](TT, UT, mT) {
        const WT = this[vT] ?? this,
          zT = WT.items;
        let MT = !1;
        for (let gT = 0; gT < zT.length; gT++) {
          const nT = zT[gT];
          TT.has(gT) ? mT(nT) : (MT = !0, UT(nT, gT), WT[pT](gT))
        }
        MT && WT[iT]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((TT => "function" === typeof TT.toJSON ? TT.toJSON() : TT))
      }
      clone(TT) {
        let UT;
        return TT ? (UT = new WW, UT.push(...this.items)) : UT = new WW(...this.map((TT => TT[ZT] ? TT.clone() : TT))), UT
      }
    }
    OU("array", {
      constructor: WW
    });
    class zW {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(TT) {
        const UT = this.indexByKey[TT];
        return void 0 === UT ? void 0 : UT
      }
      assign(TT) {
        const UT = this.nextIndex++;
        return this.indexByKey[TT] = UT, this.keyByIndex.set(UT, TT), UT
      }
      snapshot(TT, UT) {
        (this.snapshots ??= new Map).set(TT, UT)
      }
      forgetSnapshot(TT) {
        this.snapshots?.delete(TT)
      }
      snapshotAt(TT) {
        return this.snapshots?.get(TT)
      }
      setIndex(TT, UT) {
        this.keyByIndex.set(TT, UT), this.indexByKey[UT] = TT
      }
      keyOf(TT) {
        return this.keyByIndex.get(TT)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [TT] of this.snapshots) {
            const UT = this.keyByIndex.get(TT);
            void 0 !== UT && (delete this.indexByKey[UT], this.keyByIndex.delete(TT))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class MW {
      [ZT];
      [nT];
      childType;
      [cT];
      $items = new Map;
      journal = new zW;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= JU()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= JU()).priority = TT
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[kT] = sm;
      static[jT] = om;
      static COLLECTION_KIND = Km;
      static[lT](TT, UT, mT) {
        if (!mT || "string" === typeof TT[cT]) return !0;
        const WT = TT[LT](UT) ?? TT.journal.snapshotAt(UT);
        return mT.isChangeTreeVisible(WT[ZT])
      }
      static is(TT) {
        return void 0 !== TT.map
      }
      constructor(TT) {
        if (Object.defineProperty(this, ZT, {
            value: new am(this),
            enumerable: !1,
            writable: !0
          }), this[cT] = void 0, TT)
          if (TT instanceof Map || TT instanceof MW) TT.forEach(((TT, UT) => this.set(UT, TT)));
          else
            for (const UT in TT) this.set(UT, TT[UT])
      }
      static initializeForDecoder() {
        const TT = Object.create(MW.prototype);
        return TT.$items = new Map, TT.journal = new zW, TT[cT] = void 0, Xm(TT), TT
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return MW
      }
      set(TT, UT) {
        if (void 0 === UT || null === UT) throw new Error(`MapSchema#set('${TT}', ${UT}): trying to set ${UT} value on '${TT}'.`);
        "object" === typeof UT && this[cT] && TW(UT, this[cT], this, TT), TT = TT.toString();
        const mT = this[ZT],
          WT = void 0 !== UT[ZT],
          MT = this.journal;
        let gT, nT = MT.indexOf(TT);
        if (void 0 !== nT) {
          gT = zT.REPLACE;
          const mT = this.$items.get(TT);
          if (mT === UT) return;
          WT && (gT = zT.DELETE_AND_ADD, void 0 !== mT && mT[ZT].root?.remove(mT[ZT])), void 0 !== MT.snapshotAt(nT) && MT.forgetSnapshot(nT)
        } else nT = MT.assign(TT), gT = zT.ADD;
        return this.$items.set(TT, UT), gT === zT.ADD && mT.isStreamCollection ? void 0 !== mT.root && dU(this, mT.root, nT) : mT.change(nT, gT), WT && UT[ZT].setParent(this, mT.root, nT), this
      }
      get(TT) {
        return this.$items.get(TT)
      }
      getOrInsert(TT, UT) {
        return this.$items.has(TT) ? this.$items.get(TT) : (this.set(TT, UT), UT)
      }
      getOrInsertComputed(TT, UT) {
        if (this.$items.has(TT)) return this.$items.get(TT);
        const mT = UT(TT);
        return this.set(TT, mT), mT
      }
      delete(TT) {
        if (!this.$items.has(TT)) return !1;
        const UT = this.journal.indexOf(TT),
          mT = this.$items.get(TT),
          WT = this[ZT];
        if (WT.isStreamCollection) {
          const zT = WT.root;
          let MT = !1;
          return void 0 !== zT && (MT = wU(this, zT, this[nT], UT)), void 0 !== mT?.[ZT] && zT?.remove(mT[ZT]), this.$items.delete(TT), MT || this.journal.snapshot(UT, mT), !0
        }
        return this.journal.snapshot(UT, mT), WT.delete(UT), this.$items.delete(TT)
      }
      clear() {
        const TT = this[ZT];
        TT.discard(), TT.forEachChild(((UT, mT) => {
          TT.root?.remove(UT)
        })), this.journal.reset(), this.$items.clear(), TT.operation(zT.CLEAR)
      } [qT]() {
        const TT = this[ZT];
        if (TT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((TT => TT?.[qT]?.())), this.$items.clear(), this.journal.reset(), TT.recycle(), this[nT] = void 0
      }
      has(TT) {
        return this.$items.has(TT)
      }
      forEach(TT) {
        this.$items.forEach(TT)
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
        this[ZT].pause()
      }
      resumeTracking() {
        this[ZT].resume()
      }
      untracked(TT) {
        return this[ZT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[ZT].paused
      }
      setIndex(TT, UT) {
        this.journal.setIndex(TT, UT)
      }
      getIndex(TT) {
        return this.journal.keyOf(TT)
      } [LT](TT) {
        const UT = this.journal.keyOf(TT);
        return void 0 !== UT ? this.$items.get(UT) : void 0
      } [pT](TT) {
        const UT = this.journal.keyOf(TT);
        void 0 !== UT && (this.$items.delete(UT), this.journal.keyByIndex.delete(TT))
      } [BT](TT, UT, mT) {
        let WT = null;
        if (this.$items.forEach(((zT, MT) => {
            TT.has(MT) ? mT(zT) : ((WT ??= new Set).add(MT), UT(zT, MT))
          })), null !== WT) {
          WT.forEach((TT => {
            this.$items.delete(TT), delete this.journal.indexByKey[TT]
          }));
          const TT = [];
          this.journal.keyByIndex.forEach(((UT, mT) => {
            WT.has(UT) && TT.push(mT)
          }));
          for (let UT = 0; UT < TT.length; UT++) this.journal.keyByIndex.delete(TT[UT])
        }
      } [fT]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(TT) {
        XU(this, TT)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (TT => {
          let [UT, mT] = TT;
          return [UT, "function" === typeof mT.toJSON ? mT.toJSON() : mT]
        })))
      }
      clone(TT) {
        let UT;
        return TT ? UT = Object.assign(new MW, this) : (UT = new MW, this.forEach(((TT, mT) => {
          TT[ZT] ? UT.set(mT, TT.clone()) : UT.set(mT, TT)
        }))), UT
      }
    }
    OU("map", {
      constructor: MW
    });
    class gW {
      [ZT];
      [nT];
      [cT];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= JU()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= JU()).priority = TT
      }
      static[kT] = Fm;
      static[jT] = om;
      static COLLECTION_KIND = Nm;
      static[lT](TT, UT, mT) {
        return !mT || "string" === typeof TT[cT] || mT.isChangeTreeVisible((TT[LT](UT) ?? TT.deletedItems[UT])[ZT])
      }
      static is(TT) {
        return void 0 !== TT.collection
      }
      constructor(TT) {
        Object.defineProperty(this, ZT, {
          value: new am(this),
          enumerable: !1,
          writable: !0
        }), this[cT] = void 0, TT && TT.forEach((TT => this.add(TT)))
      }
      static initializeForDecoder() {
        const TT = Object.create(gW.prototype);
        return TT.$items = new Map, TT.deletedItems = {}, TT.$refId = 0, TT[cT] = void 0, Xm(TT), TT
      }
      add(TT) {
        const UT = this.$refId++,
          mT = this[ZT];
        return this.$items.set(UT, TT), mT.isStreamCollection ? void 0 !== mT.root && dU(this, mT.root, UT) : mT.change(UT), void 0 !== TT[ZT] && TT[ZT].setParent(this, mT.root, UT), UT
      }
      at(TT) {
        const UT = Array.from(this.$items.keys())[TT];
        return this.$items.get(UT)
      }
      entries() {
        return this.$items.entries()
      }
      delete(TT) {
        const UT = this.$items.entries();
        let mT, WT;
        for (;
          (WT = UT.next()) && !WT.done;)
          if (TT === WT.value[1]) {
            mT = WT.value[0];
            break
          } if (void 0 === mT) return !1;
        const zT = this[ZT];
        if (zT.isStreamCollection) {
          const TT = zT.root,
            UT = this.$items.get(mT);
          return void 0 !== TT && wU(this, TT, this[nT], mT), void 0 !== UT?.[ZT] && TT?.remove(UT[ZT]), this.deletedItems[mT] = UT, this.$items.delete(mT)
        }
        return this.deletedItems[mT] = zT.delete(mT), this.$items.delete(mT)
      }
      clear() {
        const TT = this[ZT];
        TT.discard(), TT.forEachChild(((UT, mT) => {
          TT.root?.remove(UT)
        })), this.$items.clear(), TT.operation(zT.CLEAR)
      } [qT]() {
        const TT = this[ZT];
        if (TT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((TT => TT?.[qT]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, TT.recycle(), this[nT] = void 0
      }
      has(TT) {
        return Array.from(this.$items.values()).some((UT => UT === TT))
      }
      forEach(TT) {
        this.$items.forEach(((UT, mT, WT) => TT(UT, mT, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[ZT].pause()
      }
      resumeTracking() {
        this[ZT].resume()
      }
      untracked(TT) {
        return this[ZT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[ZT].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(TT, UT) {}
      getIndex(TT) {
        return TT
      } [LT](TT) {
        return this.$items.get(TT)
      } [pT](TT) {
        this.$items.delete(TT)
      } [BT](TT, UT, mT) {
        let WT = null;
        if (this.$items.forEach(((zT, MT) => {
            TT.has(MT) ? mT(zT) : ((WT ??= []).push(MT), UT(zT, MT))
          })), null !== WT)
          for (let zT = 0; zT < WT.length; zT++) this[pT](WT[zT])
      } [fT]() {
        for (const TT in this.deletedItems) delete this.deletedItems[TT]
      }
      _dropView(TT) {
        XU(this, TT)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const TT = [];
        return this.forEach(((UT, mT) => {
          TT.push("function" === typeof UT.toJSON ? UT.toJSON() : UT)
        })), TT
      }
      clone(TT) {
        let UT;
        return TT ? UT = Object.assign(new gW, this) : (UT = new gW, this.forEach((TT => {
          TT[ZT] ? UT.add(TT.clone()) : UT.add(TT)
        }))), UT
      }
    }
    OU("collection", {
      constructor: gW
    });
    class nW {
      [ZT];
      [nT];
      [cT];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= JU()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= JU()).priority = TT
      }
      static[kT] = Fm;
      static[jT] = om;
      static COLLECTION_KIND = Gm;
      static[lT](TT, UT, mT) {
        return !mT || "string" === typeof TT[cT] || mT.isVisible((TT[LT](UT) ?? TT.deletedItems[UT])[ZT])
      }
      static is(TT) {
        return void 0 !== TT.set
      }
      constructor(TT) {
        Object.defineProperty(this, ZT, {
          value: new am(this),
          enumerable: !1,
          writable: !0
        }), this[cT] = void 0, TT && TT.forEach((TT => this.add(TT)))
      }
      static initializeForDecoder() {
        const TT = Object.create(nW.prototype);
        return TT.$items = new Map, TT.deletedItems = {}, TT.$refId = 0, TT[cT] = void 0, Xm(TT), TT
      }
      add(TT) {
        if (this.has(TT)) return !1;
        const UT = this.$refId++,
          mT = this[ZT];
        return this.$items.set(UT, TT), mT.isStreamCollection ? void 0 !== mT.root && dU(this, mT.root, UT) : mT.change(UT, zT.ADD), void 0 !== TT[ZT] && TT[ZT].setParent(this, mT.root, UT), UT
      }
      entries() {
        return this.$items.entries()
      }
      delete(TT) {
        const UT = this.$items.entries();
        let mT, WT;
        for (;
          (WT = UT.next()) && !WT.done;)
          if (TT === WT.value[1]) {
            mT = WT.value[0];
            break
          } if (void 0 === mT) return !1;
        const zT = this[ZT];
        if (zT.isStreamCollection) {
          const TT = zT.root,
            UT = this.$items.get(mT);
          return void 0 !== TT && wU(this, TT, this[nT], mT), void 0 !== UT?.[ZT] && TT?.remove(UT[ZT]), this.deletedItems[mT] = UT, this.$items.delete(mT)
        }
        return this.deletedItems[mT] = zT.delete(mT), this.$items.delete(mT)
      }
      clear() {
        const TT = this[ZT];
        TT.discard(), this.$items.clear(), TT.operation(zT.CLEAR)
      } [qT]() {
        const TT = this[ZT];
        if (TT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((TT => TT?.[qT]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, TT.recycle(), this[nT] = void 0
      }
      has(TT) {
        const UT = this.$items.values();
        let mT, WT = !1;
        for (;
          (mT = UT.next()) && !mT.done;)
          if (TT === mT.value) {
            WT = !0;
            break
          } return WT
      }
      forEach(TT) {
        this.$items.forEach(((UT, mT, WT) => TT(UT, mT, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[ZT].pause()
      }
      resumeTracking() {
        this[ZT].resume()
      }
      untracked(TT) {
        return this[ZT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[ZT].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(TT, UT) {}
      getIndex(TT) {
        return TT
      } [LT](TT) {
        return this.$items.get(TT)
      } [pT](TT) {
        this.$items.delete(TT)
      } [BT](TT, UT, mT) {
        let WT = null;
        if (this.$items.forEach(((zT, MT) => {
            TT.has(MT) ? mT(zT) : ((WT ??= []).push(MT), UT(zT, MT))
          })), null !== WT)
          for (let zT = 0; zT < WT.length; zT++) this[pT](WT[zT])
      } [fT]() {
        for (const TT in this.deletedItems) delete this.deletedItems[TT]
      }
      _dropView(TT) {
        XU(this, TT)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const TT = [];
        return this.forEach(((UT, mT) => {
          TT.push("function" === typeof UT.toJSON ? UT.toJSON() : UT)
        })), TT
      }
      clone(TT) {
        let UT;
        return TT ? UT = Object.assign(new nW, this) : (UT = new nW, this.forEach((TT => {
          TT[ZT] ? UT.add(TT.clone()) : UT.add(TT)
        }))), UT
      }
    }
    OU("set", {
      constructor: nW
    });
    class HW {
      [ZT];
      [nT];
      [cT];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= JU()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= JU()).priority = TT
      }
      static $isStream = !0;
      static[kT] = Fm;
      static[jT] = om;
      static COLLECTION_KIND = Em;
      static[lT](TT, UT, mT) {
        if (!mT) return !0;
        const WT = TT[LT](UT);
        return void 0 !== WT && mT.isVisible(WT[ZT])
      }
      static is(TT) {
        return TT && void 0 !== TT.stream
      }
      constructor() {
        Object.defineProperty(this, ZT, {
          value: new am(this),
          enumerable: !1,
          writable: !0
        }), this[cT] = void 0
      }
      static initializeForDecoder() {
        const TT = Object.create(HW.prototype);
        return TT.$items = new Map, TT.$nextPosition = 0, TT._itemIndex = new Map, TT[cT] = void 0, Xm(TT), TT
      }
      add(TT) {
        if (this._itemIndex.has(TT)) return -1;
        const UT = this.$nextPosition++;
        this.$items.set(UT, TT), this._itemIndex.set(TT, UT);
        const mT = this[ZT].root;
        return void 0 !== TT[ZT] && TT[ZT].setParent(this, mT, UT), void 0 !== mT && dU(this, mT, UT), UT
      }
      remove(TT) {
        const UT = this._itemIndex.get(TT);
        if (void 0 === UT) return !1;
        this._itemIndex.delete(TT), this.$items.delete(UT);
        const mT = this[ZT].root;
        return void 0 !== mT && (wU(this, mT, this[nT], UT), void 0 !== TT[ZT] && mT.remove(TT[ZT])), !0
      }
      has(TT) {
        return this._itemIndex.has(TT)
      }
      clear() {
        const TT = this[ZT].root;
        if (void 0 !== TT) {
          ! function(TT, UT, mT) {
            const WT = TT._stream;
            if (void 0 !== WT) {
              WT.broadcastPending.clear();
              for (const TT of WT.sentBroadcast) WT.broadcastDeletes.add(TT);
              WT.sentBroadcast.clear(), UT.forEachActiveView((TT => {
                WT.pendingByView.get(TT.id)?.clear();
                const UT = WT.sentByView.get(TT.id);
                if (void 0 !== UT && UT.size > 0) {
                  let WT = TT.changes.get(mT);
                  void 0 === WT && (WT = new Map, TT.changes.set(mT, WT));
                  for (const TT of UT) WT.set(TT, zT.DELETE);
                  UT.clear()
                }
              }))
            }
          }(this, TT, this[nT]);
          for (const UT of this.$items.values()) void 0 !== UT[ZT] && TT.remove(UT[ZT])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(TT) {
        for (const [UT, mT] of this.$items) TT(mT, UT, this)
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
      setIndex(TT, UT) {}
      getIndex(TT) {
        return TT
      } [LT](TT) {
        return this.$items.get(TT)
      } [pT](TT) {
        const UT = this.$items.get(TT);
        void 0 !== UT && (this._itemIndex.delete(UT), this.$items.delete(TT))
      } [BT]() {} [fT]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const TT = [];
        return this.forEach((UT => {
          TT.push("function" === typeof UT?.toJSON ? UT.toJSON() : UT)
        })), TT
      }
      clone(TT) {
        if (TT) {
          return Object.assign(new HW, this)
        }
        const UT = new HW;
        return UT.maxPerTick = this.maxPerTick, this.forEach((TT => {
          UT.add("function" === typeof TT?.clone ? TT.clone() : TT)
        })), UT
      }
      _dropView(TT) {
        XU(this, TT)
      }
      _unregister() {}
    }
    OU("stream", {
      constructor: HW
    });
    class kW {
      [OT] = !0;
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
      constructor(TT) {
        this._type = TT
      }
      default (TT) {
        return this._default = TT, this._hasDefault = !0, this
      }
      view(TT) {
        return this._view = TT ?? -1, this
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
        const TT = this._type;
        if (TT && "object" === typeof TT && void 0 !== TT.array) throw new Error(YU);
        return this._stream = !0, this
      }
      priority(TT) {
        return this._streamPriority = TT, this
      }
      deprecated() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = TT, this
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

    function jW(TT) {
      return null != TT && !0 === TT[OT]
    }

    function lW(TT) {
      return () => new kW(TT)
    }

    function LW(TT) {
      if (jW(TT)) {
        const UT = TT._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof UT?`use the type name instead: t.array("${UT}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return TT
    }

    function pW(TT) {
      return new kW({
        quantized: QU(TT)
      })
    }
    const BW = Object.freeze({
        string: lW("string"),
        number: lW("number"),
        boolean: lW("boolean"),
        int8: lW("int8"),
        uint8: lW("uint8"),
        int16: lW("int16"),
        uint16: lW("uint16"),
        int32: lW("int32"),
        uint32: lW("uint32"),
        int64: lW("int64"),
        uint64: lW("uint64"),
        float32: lW("float32"),
        float64: lW("float64"),
        bigint64: lW("bigint64"),
        biguint64: lW("biguint64"),
        ref: TT => new kW(TT),
        array: TT => new kW({
          array: LW(TT)
        }),
        map: TT => new kW({
          map: LW(TT)
        }),
        set: TT => new kW({
          set: LW(TT)
        }),
        collection: TT => new kW({
          collection: LW(TT)
        }),
        stream: TT => {
          const UT = new kW({
            stream: LW(TT)
          });
          return UT._stream = !0, UT
        },
        quantized: pW,
        angle: TT => pW({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: TT?.bits ?? 16
        })
      }),
      ZW = -1;

    function cW(TT) {
      return uU.register(TT), TT
    }

    function vW() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZW;
      return function(UT, mT) {
        const WT = EU.initialize(UT.constructor);
        EU.setTag(WT, mT, TT)
      }
    }

    function fW(TT, UT) {
      const mT = EU.initialize(TT.constructor);
      EU.setUnreliable(mT, UT)
    }

    function qW(TT, UT) {
      const mT = EU.initialize(TT.constructor);
      EU.setPatchOnly(mT, UT)
    }

    function iW(TT, UT) {
      const mT = EU.initialize(TT.constructor);
      EU.setFullStateOnly(mT, UT)
    }

    function bW(TT, UT) {
      return function(mT, WT) {
        const zT = mT.constructor;
        if (!TT) throw new Error(`${zT.name}: @type() reference provided for "${WT}" is undefined. Make sure you don't have any circular dependencies.`);
        TT = rU(TT, `${zT.name}.${WT}`), uU.register(zT);
        const MT = Object.getPrototypeOf(zT)[Symbol.metadata],
          gT = EU.initialize(zT);
        let nT = gT[WT];
        if (void 0 !== gT[nT]) {
          if (gT[nT].deprecated) return;
          if (void 0 !== gT[nT].type) {
            const TT = new Error(`@colyseus/schema: Duplicate '${WT}' definition on '${zT.name}'.\nCheck @type() annotation`);
            throw new Error(`${TT.message} ${TT.stack.split("\n")[4].trim()}`)
          }
        } else nT = gT[xT] ?? (MT && MT[xT]) ?? -1, nT++;
        if (UT && UT.manual) EU.addField(gT, nT, WT, TT, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: UT,
            childType: mT
          } = CU(TT);
          EU.addField(gT, nT, WT, TT, eW(WT, nT, mT, UT))
        }
        gT[eT][WT] && Object.defineProperty(mT, WT, gT[eT][WT]), ("string" === typeof TT || sU(TT)) && (gT[JT] || Object.defineProperty(gT, JT, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), gT[JT][nT] = "string" === typeof TT ? UU[TT] : VU(TT.quantized))
      }
    }
    const OW = {
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

    function eW(TT, UT, mT, WT) {
      let MT;
      return MT = WT ? function(TT, UT, mT, WT) {
        const MT = WT.constructor === WW,
          gT = WT.constructor === MW;
        return function(TT) {
          const WT = this[bT],
            nT = WT[UT];
          if (TT !== nT) {
            if (void 0 !== TT && null !== TT) {
              if (!MT || TT instanceof WW)
                if (!gT || TT instanceof MW) TT[cT] = mT;
                else {
                  const UT = new MW;
                  if (UT[cT] = mT, TT instanceof Map) TT.forEach(((TT, mT) => UT.set(mT, TT)));
                  else
                    for (const mT in TT) UT.set(mT, TT[mT]);
                  TT = UT
                }
              else {
                const UT = new WW;
                UT[cT] = mT, UT.push(...TT), TT = UT
              }
              const WT = this[ZT],
                kT = this.constructor;
              void 0 !== nT && null !== nT && nT[ZT] ? (WT.root?.remove(nT[ZT]), kT[HT](WT, UT, zT.DELETE_AND_ADD)) : kT[HT](WT, UT, zT.ADD), TT[ZT]?.setParent(this, WT.root, UT)
            } else void 0 !== nT && null !== nT && this[ZT].delete(UT);
            WT[UT] = TT
          }
        }
      }(0, UT, mT, WT) : "string" === typeof mT ? function(TT, UT, mT) {
        const WT = OW[mT],
          MT = "string" === mT,
          gT = "boolean" === mT;
        return function(mT) {
          const nT = this[bT],
            kT = nT[UT];
          if (mT !== kT) {
            if (void 0 !== mT && null !== mT) {
              if (!gT && void 0 !== WT && typeof mT !== WT && (!MT || null !== mT)) {
                const UT = mT && mT.constructor ? ` (${mT.constructor.name})` : "";
                throw new Rm(`a '${WT}' was expected, but '${JSON.stringify(mT)}'${UT} was provided in ${this.constructor.name}#${TT}`)
              }
              this.constructor[HT](this[ZT], UT, zT.ADD)
            } else void 0 !== kT && null !== kT && this[ZT].delete(UT);
            nT[UT] = mT
          }
        }
      }(TT, UT, mT) : sU(mT) ? function(TT, UT, mT) {
        return function(WT) {
          const MT = this[bT],
            gT = MT[UT];
          if (void 0 !== WT && null !== WT) {
            if ("number" !== typeof WT) throw new Rm(`a 'number' was expected, but '${JSON.stringify(WT)}' was provided in ${this.constructor.name}#${TT}`);
            if ((WT = PU(mT, FU(mT, WT))) === gT) return;
            this.constructor[HT](this[ZT], UT, zT.ADD)
          } else {
            if (WT === gT) return;
            void 0 !== gT && null !== gT && this[ZT].delete(UT)
          }
          MT[UT] = WT
        }
      }(TT, UT, mT.quantized) : function(TT, UT, mT) {
        return function(WT) {
          const MT = this[bT],
            gT = MT[UT];
          if (WT !== gT) {
            if (void 0 !== WT && null !== WT) {
              TW(WT, mT, this, TT);
              const MT = this[ZT],
                nT = this.constructor;
              void 0 !== gT && null !== gT && gT[ZT] ? (MT.root?.remove(gT[ZT]), nT[HT](MT, UT, zT.DELETE_AND_ADD)) : nT[HT](MT, UT, zT.ADD), WT[ZT]?.setParent(this, MT.root, UT)
            } else void 0 !== gT && null !== gT && this[ZT].delete(UT);
            MT[UT] = WT
          }
        }
      }(TT, UT, mT), {
        get: function() {
          return this[bT][UT]
        },
        set: MT,
        enumerable: !0,
        configurable: !0
      }
    }

    function YW() {
      let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(UT, mT) {
        const WT = EU.initialize(UT.constructor);
        EU.setDeprecated(WT, mT), TT && (WT[eT] ??= {}, WT[eT][mT] = {
          get: function() {
            throw new Error(`${mT} is deprecated.`)
          },
          set: function(TT) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(UT, mT, WT[eT][mT]))
      }
    }
    let JW = !1;

    function xW(TT, UT, mT) {
      JW || (JW = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let WT in UT) bW(UT[WT], mT)(TT.prototype, WT);
      return TT
    }

    function dW(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tW;
      if (null == TT || "object" !== typeof TT) throw new Error(`schema(): first argument must be a fields object (got ${typeof TT}).`);
      const WT = {},
        zT = {},
        MT = {},
        gT = {},
        nT = (TT, UT) => {
          if (UT.hasDefault)((TT, UT) => {
            "function" === typeof UT ? gT[TT] = UT : UT && "function" === typeof UT.clone ? gT[TT] = () => UT.clone() : MT[TT] = UT
          })(TT, UT.default);
          else if (!UT.optional) {
            const mT = function(TT) {
              if (TT && "object" === typeof TT) {
                if (void 0 !== TT.array) return () => new WW;
                if (void 0 !== TT.map) return () => new MW;
                if (void 0 !== TT.set) return () => new nW;
                if (void 0 !== TT.collection) return () => new gW;
                if (void 0 !== TT.stream) return () => new HW
              } else if ("function" === typeof TT && tW.is(TT) && (!TT.prototype.initialize || 0 === TT.prototype.initialize.length)) return () => new TT
            }(UT.type);
            mT && (gT[TT] = mT)
          }
        },
        HT = {},
        kT = [],
        jT = [],
        lT = {},
        LT = [],
        pT = [],
        BT = {},
        ZT = [];
      for (const bT in TT) {
        const mT = TT[bT],
          MT = `schema(${UT?`'${UT}'`:""}): field '${bT}'`;
        if (jW(mT)) {
          const TT = mT.toDefinition();
          if (TT.noSync) {
            if (void 0 !== TT.view || TT.unreliable || TT.patchOnly || TT.fullStateOnly || TT.stream) throw new Error(`${MT} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            nT(bT, TT);
            continue
          }
          if (TT.patchOnly && TT.fullStateOnly) throw new Error(`${MT} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const UT = rU(TT.type, MT);
          if ("function" === typeof UT && !tW.is(UT)) throw new Error(`${MT} is a synced ref to non-Schema class '${UT.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          WT[bT] = UT, void 0 !== TT.view && (HT[bT] = TT.view), TT.unreliable && kT.push(bT), TT.patchOnly && jT.push(bT), TT.deprecated && (lT[bT] = TT.deprecatedThrows), TT.fullStateOnly && LT.push(bT), TT.stream && pT.push(bT), void 0 !== TT.streamPriority && (BT[bT] = TT.streamPriority), TT.optional && ZT.push(bT), nT(bT, TT)
        } else {
          if ("function" !== typeof mT) throw new Error(`${MT} must be a t.* builder, Schema subclass, or method (got ${typeof mT}).`);
          tW.is(mT) ? (WT[bT] = mT, mT.prototype.initialize && 0 !== mT.prototype.initialize.length || (gT[bT] = () => new mT)) : zT[bT] = mT
        }
      }
      const cT = TT => {
          for (const UT in MT) TT[UT] = MT[UT];
          for (const UT in gT) TT[UT] = gT[UT]()
        },
        vT = () => {
          const TT = {};
          return cT(TT), TT
        },
        fT = "function" === typeof zT.initialize,
        qT = zT.initialize ?? mT._initialize,
        iT = class extends mT {
          constructor() {
            for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
            const zT = UT[0];
            void 0 === zT ? (super(), cT(this)) : super(Object.assign(vT(), fT ? (TT => {
              const UT = Object.keys(WT),
                mT = {};
              for (const WT in TT) UT.includes(WT) || (mT[WT] = TT[WT]);
              return mT
            })(zT) : zT)), qT && new.target === iT && qT.apply(this, UT)
          }
        };
      UT && Object.defineProperty(iT, "name", {
        value: UT
      }), EU.setFields(iT, WT), iT._getDefaultValues = vT, iT._initialize = qT, Object.assign(iT.prototype, zT);
      for (const bT in HT) vW(HT[bT])(iT.prototype, bT);
      for (const bT of kT) fW(iT.prototype, bT);
      for (const bT of jT) qW(iT.prototype, bT);
      for (const bT in lT) YW(lT[bT])(iT.prototype, bT);
      if (LT.length > 0 || pT.length > 0) {
        const TT = iT[Symbol.metadata];
        for (const UT of LT) EU.setFullStateOnly(TT, UT);
        for (const UT of pT) EU.setStream(TT, UT);
        for (const UT in BT) EU.setStreamPriority(TT, UT, BT[UT])
      }
      if (ZT.length > 0) {
        const TT = iT[Symbol.metadata];
        for (const UT of ZT) TT[TT[UT]].optional = !0
      }
      return iT.extend = (TT, UT) => dW(TT, UT, iT), iT
    }

    function wW(TT) {
      const UT = TT[ZT].root,
        mT = {
          ops: {},
          refs: []
        };
      let WT = UT.changes.next;
      for (; WT;) {
        const TT = WT.changeTree;
        void 0 !== TT ? (mT.refs.push(`refId#${TT.ref[nT]}`), TT.forEach(((TT, UT) => {
          if (TT < 0 || !UT) return;
          const WT = zT[UT];
          mT.ops[WT] || (mT.ops[WT] = 0), mT.ops[WT]++
        })), WT = WT.next) : WT = WT.next
      }
      return mT
    }
    class tW {
      static[kT] = Qm;
      static[jT] = Dm;
      [nT];
      [bT];
      static initialize(TT) {
        Object.defineProperty(TT, ZT, {
          value: new am(TT),
          enumerable: !1,
          writable: !0
        }), TT[bT] = []
      }
      static initializeForDecoder() {
        const TT = Object.create(this.prototype);
        return Xm(TT), TT[bT] = [], TT
      }
      static reset(TT) {
        const UT = TT?.[ZT];
        if (void 0 === UT || "function" !== typeof UT.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== UT.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${TT.constructor.name}) with multiple parents.`);
        TT[qT]()
      } [qT]() {
        const TT = this.constructor[Symbol.metadata],
          UT = TT?.[dT] ?? [],
          mT = this[bT];
        for (let WT = 0; WT < UT.length; WT++) {
          const TT = mT[UT[WT]];
          TT?.[qT]?.()
        }
        this[ZT].recycle(), this[nT] = void 0
      }
      static is(TT) {
        const UT = TT[Symbol.metadata];
        return "object" === typeof UT && null !== UT
      }
      static isSchema(TT) {
        return "function" === typeof TT?.assign
      }
      static[HT](TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.ADD;
        TT.change(UT, mT)
      }
      static[lT](TT, UT, mT) {
        const WT = TT.constructor[Symbol.metadata],
          zT = WT[UT]?.tag;
        return void 0 === mT ? void 0 === zT : void 0 === zT || (zT === ZW ? mT.isChangeTreeVisible(TT[ZT]) : mT.hasTagOnTree(TT[ZT], zT))
      }
      constructor(TT) {
        tW.initialize(this), TT && tW.assignProps(this, TT)
      }
      assign(TT) {
        return tW.assignProps(this, TT), this
      }
      static assignProps(TT, UT) {
        const mT = TT.constructor[Symbol.metadata];
        if (mT && void 0 !== mT[xT])
          for (let zT = 0; zT <= mT[xT]; zT++) {
            const WT = mT[zT];
            if (!WT) continue;
            const MT = UT[WT.name];
            void 0 !== MT && (TT[WT.name] = MT)
          }
        const WT = Object.keys(UT);
        for (let zT = 0; zT < WT.length; zT++) {
          const MT = WT[zT];
          mT && void 0 !== mT[MT] || (TT[MT] = UT[MT])
        }
      }
      restore(TT) {
        const UT = this.constructor[Symbol.metadata];
        for (const mT in UT) {
          const WT = UT[mT],
            zT = WT.name,
            MT = WT.type,
            gT = TT[zT];
          if (void 0 !== gT && null !== gT)
            if ("string" === typeof MT) this[zT] = gT;
            else if (tW.is(MT)) {
            const TT = new MT;
            TT.restore(gT), this[zT] = TT
          } else if ("object" === typeof MT) {
            const TT = Object.keys(MT)[0],
              UT = MT[TT];
            if ("map" === TT) {
              const TT = this[zT];
              for (const mT in gT)
                if (tW.is(UT)) {
                  const WT = new UT;
                  WT.restore(gT[mT]), TT.set(mT, WT)
                } else TT.set(mT, gT[mT])
            } else if ("array" === TT) {
              const TT = this[zT];
              for (let mT = 0; mT < gT.length; mT++)
                if (tW.is(UT)) {
                  const WT = new UT;
                  WT.restore(gT[mT]), TT.push(WT)
                } else TT.push(gT[mT])
            }
          }
        }
        return this
      }
      setDirty(TT, UT) {
        const mT = this.constructor[Symbol.metadata];
        this[ZT].change(mT[mT[TT]].index, UT)
      }
      pauseTracking() {
        this[ZT].pause()
      }
      resumeTracking() {
        this[ZT].resume()
      }
      untracked(TT) {
        return this[ZT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[ZT].paused
      }
      clone() {
        const TT = Object.create(this.constructor.prototype);
        tW.initialize(TT);
        const UT = this.constructor[Symbol.metadata];
        for (const mT in UT) {
          const WT = UT[mT].name;
          "object" === typeof this[WT] && "function" === typeof this[WT]?.clone ? TT[WT] = this[WT].clone() : TT[WT] = this[WT]
        }
        return TT
      }
      toJSON() {
        const TT = {},
          UT = this.constructor[Symbol.metadata];
        for (const mT in UT) {
          const WT = UT[mT],
            zT = WT.name;
          WT.deprecated || null === this[zT] || "undefined" === typeof this[zT] || (TT[zT] = "function" === typeof this[zT].toJSON ? this[zT].toJSON() : this[zT])
        }
        return TT
      }
      discardAllChanges() {
        this[ZT].discardAll()
      } [LT](TT) {
        return this[this.constructor[Symbol.metadata][TT].name]
      } [pT](TT) {
        this[this.constructor[Symbol.metadata][TT].name] = void 0
      }
      static debugRefIds(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const MT = UT ? ` - ${JSON.stringify(TT.toJSON())}` : "",
          gT = TT[ZT],
          HT = TT[nT],
          kT = WT ? WT.root.refCount[HT] : gT.refCount,
          jT = kT > 1 ? ` [\xd7${kT}]` : "";
        let lT = `${function(TT){return new Array(TT).fill(0).map(((UT,mT)=>mT===TT-1?"\u2514\u2500 ":"   ")).join("")}(mT)}${zT}${TT.constructor.name} (refId: ${HT})${jT}${MT}\n`;
        return gT.forEachChild(((zT, MT) => {
          let gT = MT;
          "number" === typeof MT && TT.$indexes && (gT = TT.$indexes.get(MT) ?? MT);
          const nT = void 0 !== TT.forEach && void 0 !== gT ? `["${gT}"]: ` : "";
          lT += this.debugRefIds(zT.ref, UT, mT + 1, WT, nT)
        })), lT
      }
      static debugRefIdEncodingOrder(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const mT = [],
          WT = TT[ZT];
        if ("changes" === UT) {
          let TT = WT.root.changes?.next;
          for (; TT;) TT.changeTree && mT.push(TT.changeTree.ref[nT]), TT = TT.next;
          return mT
        }
        const zT = "allFilteredChanges" === UT,
          MT = new Set,
          gT = TT => {
            MT.has(TT) || (MT.add(TT), TT.isFiltered === zT && mT.push(TT.ref[nT]), TT.forEachChild(((TT, UT) => gT(TT))))
          };
        return gT(WT), mT
      }
      static debugRefIdsFromDecoder(TT) {
        return this.debugRefIds(TT.state, !1, 0, TT)
      }
      static debugChanges(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = TT[ZT],
          WT = UT ? "allChanges" : "changes";
        let MT = `${TT.constructor.name} (${TT[nT]}) -> .${WT}:\n`;
        return UT ? mT.forEachLive((TT => {
          MT += `- [${TT}]: ADD (${JSON.stringify(mT.getValue(Number(TT),!0))})\n`
        })) : mT.forEach(((TT, UT) => {
          TT < 0 || !UT || (MT += `- [${TT}]: ${zT[UT]} (${JSON.stringify(mT.getValue(Number(TT),!1))})\n`)
        })), MT
      }
    }
    MT(tW);
    const aW = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class yW {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const TT = {};
        for (const UT in this.changeTrees) TT[UT] = this.changeTrees[UT].refCount;
        return TT
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
      enqueueFilterRefresh(TT) {
        this.types.hasFilters && (TT.flags & wm || (TT.flags |= wm, this.pendingFilterRefresh.push(TT)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(TT) {
        this._freeViewIds.push(TT)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(TT) {
        this.activeViews.set(TT.id, new WeakRef(TT))
      }
      unregisterView(TT) {
        this.activeViews.delete(TT.id);
        const UT = TT.id;
        for (const mT of this.streamTrees) mT._dropView(UT)
      }
      forEachActiveView(TT) {
        for (const [UT, mT] of this.activeViews) {
          const WT = mT.deref();
          if (void 0 !== WT) TT(WT);
          else {
            this.activeViews.delete(UT);
            for (const TT of this.streamTrees) TT._dropView(UT)
          }
        }
      }
      registerStream(TT) {
        this.streamTrees.add(TT)
      }
      unregisterStream(TT) {
        this.streamTrees.delete(TT)
      }
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = TT, this.nextUniqueId = UT
      }
      add(TT) {
        const UT = TT.ref;
        void 0 === UT[nT] && (aW.value = this.nextUniqueId++, Object.defineProperty(UT, nT, aW));
        const mT = UT[nT],
          WT = void 0 === this.changeTrees[mT];
        WT && (this.changeTrees[mT] = TT), TT.needsRestage && (TT.needsRestage = !1, TT.forEachLiveWithCtx(TT, mm));
        const zT = WT ? 0 : TT.refCount;
        return TT.refCount = zT + 1, zT > 0 && this.enqueueFilterRefresh(TT), WT
      }
      remove(TT) {
        const UT = TT.refCount - 1;
        if (UT <= 0) {
          if (TT.root = void 0, delete this.changeTrees[TT.ref[nT]], TT.isStreamCollection) {
            const UT = TT.ref;
            UT._unregister?.(), this.unregisterStream(UT)
          }
          this.removeFromQueue(TT), this.removeFromUnreliableQueue(TT), TT.refCount = 0, TT.needsRestage = !0, TT.forEachChild(((UT, mT) => {
            UT.removeParent(TT.ref) && (void 0 === UT.parentRef || UT.refCount > 0 ? this.remove(UT) : this.moveNextToParent(UT))
          }))
        } else TT.refCount = UT, this.enqueueFilterRefresh(TT), this.recursivelyMoveNextToParent(TT);
        return UT
      }
      recursivelyMoveNextToParent(TT) {
        this.moveNextToParent(TT), TT.forEachChild(((TT, UT) => this.recursivelyMoveNextToParent(TT)))
      }
      moveNextToParent(TT) {
        TT.changesNode && this._moveNextToParentInList(this.changes, TT, TT.changesNode, "changesNode"), TT.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, TT, TT.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(TT, UT, mT, WT) {
        const zT = UT.parent;
        if (!zT || !zT[ZT]) return;
        const MT = zT[ZT][WT];
        MT && MT !== mT && (mT.position > MT.position || (mT.prev ? mT.prev.next = mT.next : TT.next = mT.next, mT.next ? mT.next.prev = mT.prev : TT.tail = mT.prev, mT.prev = TT.tail, mT.next = void 0, TT.tail.next = mT, TT.tail = mT, mT.position = TT.nextPosition++))
      }
      enqueueChangeTree(TT) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.changesNode) || (TT.changesNode = this._appendToList(this.changes, TT))
      }
      enqueueUnreliable(TT) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.unreliableChangesNode) || (TT.unreliableChangesNode = this._appendToList(this.unreliableChanges, TT))
      }
      _appendToList(TT, UT) {
        const mT = this._nodePool;
        let WT;
        return mT.length > 0 ? (WT = mT.pop(), WT.changeTree = UT, WT.next = void 0, WT.prev = void 0) : WT = {
          changeTree: UT,
          next: void 0,
          prev: void 0,
          position: 0
        }, TT.next ? (WT.prev = TT.tail, TT.tail.next = WT, TT.tail = WT) : (TT.nextPosition = 0, TT.next = WT, TT.tail = WT), WT.position = TT.nextPosition++, WT
      }
      releaseNode(TT) {
        TT.changeTree = void 0, TT.prev = void 0, TT.next = void 0, this._nodePool.push(TT)
      }
      removeFromQueue(TT) {
        return this._removeNode(this.changes, TT, TT.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(TT) {
        return this._removeNode(this.unreliableChanges, TT, TT.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(TT, UT, mT, WT) {
        return !(!mT || mT.changeTree !== UT) && (mT.prev ? mT.prev.next = mT.next : TT.next = mT.next, mT.next ? mT.next.prev = mT.prev : TT.tail = mT.prev, UT[WT] = void 0, this.releaseNode(mT), !0)
      }
    }

    function XW(TT, UT) {
      if (-1 === UT || UT >= TT.length) return !1;
      const mT = TT.length - 1;
      for (let WT = UT; WT < mT; WT++) TT[WT] = TT[WT + 1];
      return TT.length = mT, !0
    }

    function IW(TT, UT, mT) {
      const WT = ~mT,
        zT = TT.changeTrees;
      for (const MT in zT) {
        const TT = zT[MT],
          mT = TT.visibleViews;
        void 0 !== mT && UT < mT.length && (mT[UT] &= WT);
        const gT = TT.subscribedViews;
        void 0 !== gT && UT < gT.length && (gT[UT] &= WT);
        const nT = TT.tagViews;
        void 0 !== nT && nT.forEach((TT => {
          UT < TT.length && (TT[UT] &= WT)
        }))
      }
    }
    const QW = new FinalizationRegistry((TT => {
      let {
        root: UT,
        id: mT,
        slot: WT,
        bit: zT
      } = TT;
      IW(UT, WT, zT), UT.activeViews.delete(mT);
      for (const MT of UT.streamTrees) MT._dropView(mT);
      UT.releaseViewId(mT)
    }));

    function sW(TT) {
      if (void 0 === TT) return "undefined";
      if (null === TT) return "null";
      const UT = typeof TT;
      return "string" === UT ? JSON.stringify(TT.length > 30 ? `${TT.slice(0,30)}\u2026` : TT) : "object" !== UT && "function" !== UT ? `${UT} ${String(TT)}` : Array.isArray(TT) ? `Array(${TT.length})` : TT.constructor?.name ?? "Object"
    }
    class FW {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = TT, TT && (this.items = [])
      }
      _bindRoot(TT) {
        void 0 === this._root && (this._root = TT, this.id = TT.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), TT.registerView(this), QW.register(this, {
          root: TT,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), IW(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), QW.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(TT) {
        const UT = TT.visibleViews,
          mT = this._slot;
        return void 0 !== UT && mT < UT.length && 0 !== (UT[mT] & this._bit)
      }
      markVisible(TT) {
        const UT = this._slot;
        let mT = TT.visibleViews;
        for (void 0 === mT && (mT = TT.visibleViews = []); mT.length <= UT;) mT.push(0);
        mT[UT] |= this._bit
      }
      unmarkVisible(TT) {
        const UT = TT.visibleViews;
        if (void 0 === UT) return;
        const mT = this._slot;
        mT < UT.length && (UT[mT] &= ~this._bit)
      }
      isSubscribed(TT) {
        const UT = TT.subscribedViews,
          mT = this._slot;
        return void 0 !== UT && mT < UT.length && 0 !== (UT[mT] & this._bit)
      }
      _setSubscribed(TT) {
        const UT = this._slot;
        let mT = TT.subscribedViews;
        for (void 0 === mT && (mT = TT.subscribedViews = []); mT.length <= UT;) mT.push(0);
        mT[UT] |= this._bit
      }
      _clearSubscribed(TT) {
        const UT = TT.subscribedViews;
        if (void 0 === UT) return;
        const mT = this._slot;
        mT < UT.length && (UT[mT] &= ~this._bit)
      }
      hasTagOnTree(TT, UT) {
        const mT = TT.tagViews;
        if (void 0 === mT) return !1;
        const WT = this._slot,
          zT = this._bit;
        for (let MT = UT; 0 !== MT; MT &= MT - 1) {
          const TT = mT.get(MT & -MT);
          if (void 0 !== TT && WT < TT.length && 0 !== (TT[WT] & zT)) return !0
        }
        return !1
      }
      addTag(TT, UT) {
        if (UT === ZW) return;
        let mT = TT.tagViews;
        void 0 === mT && (mT = TT.tagViews = new Map);
        const WT = this._slot,
          zT = this._bit;
        for (let MT = UT; MT > 0; MT &= MT - 1) {
          const TT = MT & -MT;
          let UT = mT.get(TT);
          for (void 0 === UT && (UT = [], mT.set(TT, UT)); UT.length <= WT;) UT.push(0);
          UT[WT] |= zT
        }
      }
      removeTag(TT, UT) {
        if (UT === ZW) return;
        const mT = TT.tagViews;
        if (void 0 === mT) return;
        const WT = this._slot,
          zT = ~this._bit;
        for (let MT = UT; MT > 0; MT &= MT - 1) {
          const TT = mT.get(MT & -MT);
          void 0 !== TT && WT < TT.length && (TT[WT] &= zT)
        }
      }
      removeAllTagsOnTree(TT) {
        const UT = TT.tagViews;
        if (void 0 === UT) return;
        const mT = this._slot,
          WT = ~this._bit;
        UT.forEach((TT => {
          mT < TT.length && (TT[mT] &= WT)
        }))
      }
      add(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZW,
          mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(TT, UT, mT, !1)
      }
      _addImmediate(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZW;
        this._add(TT, UT, !0, !0)
      }
      _add(TT, UT, mT, WT) {
        const MT = TT?.[ZT];
        if (!MT) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${sW(TT)}`), !1;
        const gT = MT.parent;
        if (!gT && 0 !== TT[nT]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${MT.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== MT.root && this._bindRoot(MT.root);
        const HT = gT?.[ZT];
        if (!WT && HT?.isStreamCollection) return yU(gT, this.id, MT.parentIndex), !0;
        const kT = TT.constructor[Symbol.metadata],
          jT = this.isVisible(MT);
        if (!this.iterable || !mT || jT && -1 !== this.items.indexOf(TT) || this.items.push(TT), this.markVisible(MT), mT && gT && this.addParentOf(MT, UT), !WT && MT.isStreamCollection) return !0;
        if (UT === ZW && MT.isNew) return this._markSubtreeVisible(MT, UT), !1;
        let lT = this.changes.get(TT[nT]);
        void 0 === lT && (lT = new Map, this.changes.set(TT[nT], lT));
        let LT = !1;
        const pT = MT.encDescriptor.tags;
        if (MT.forEachChild(((TT, mT) => {
            const WT = pT[mT];
            if (void 0 !== WT) {
              if (!(WT === ZW || UT !== ZW && 0 !== (WT & UT))) return
            }
            this.add(TT.ref, UT, !1) && (LT = !0)
          })), UT !== ZW) {
          this.addTag(MT, UT);
          const TT = kT?.[tT];
          if (void 0 !== TT)
            for (let mT = UT; mT > 0; mT &= mT - 1) TT[mT & -mT]?.forEach((TT => {
              MT.getChange(TT) !== zT.DELETE && lT.set(TT, zT.ADD)
            }))
        }
        if ((UT === ZW || !jT) && (!MT.isNew || LT))
          if (MT.isArray && "string" !== typeof MT.refTarget[cT]) MT.refTarget.items.length > 0 && (lT.set(-1, zT.ADD), LT = !0);
          else {
            const TT = MT.encDescriptor.tags;
            MT.forEachLive((mT => {
              const WT = TT[mT];
              (void 0 === WT || WT === ZW || UT !== ZW && 0 !== (WT & UT)) && (lT.set(mT, zT.ADD), LT = !0)
            }))
          } return LT
      }
      _markSubtreeVisible(TT, UT) {
        const mT = TT.encDescriptor.tags;
        TT.forEachChild(((TT, WT) => {
          const zT = mT[WT];
          if (void 0 !== zT) {
            if (!(zT === ZW || UT !== ZW && 0 !== (zT & UT))) return
          }
          TT.isNew ? (this.markVisible(TT), this._markSubtreeVisible(TT, UT)) : this._add(TT.ref, UT, !1, !1)
        }))
      }
      addParentOf(TT, UT) {
        const mT = TT.parent[ZT],
          WT = TT.parentIndex;
        this.isVisible(mT) || this.markVisible(mT);
        const MT = mT.parent?.[ZT];
        if (MT && this.addParentOf(mT, UT), mT.hasFilteredFields && mT.getChange(WT) !== zT.DELETE) {
          let MT = this.changes.get(mT.ref[nT]);
          void 0 === MT && (MT = new Map, this.changes.set(mT.ref[nT], MT));
          const gT = mT.encDescriptor.tags[WT];
          void 0 !== gT && gT !== ZW && 0 !== (gT & UT) && this.addTag(mT, UT), MT.set(mT.isArray ? TT : WT, zT.ADD)
        }
      }
      _touchAncestorsOf(TT) {
        let UT = TT.parent?.[ZT];
        if (void 0 === UT) return;
        const mT = [];
        for (; void 0 !== UT;) {
          if (UT.hasFilteredFields) {
            const TT = UT.ref[nT];
            if (this.changes.has(TT)) break;
            mT.push(UT)
          }
          UT = UT.parent?.[ZT]
        }
        for (let WT = mT.length - 1; WT >= 0; WT--) this.changes.set(mT[WT].ref[nT], new Map)
      }
      remove(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZW,
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = TT?.[ZT];
        if (!WT) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${sW(TT)}`), this;
        const MT = WT.parent?.[ZT];
        if (MT?.isStreamCollection) return this.unmarkVisible(WT), this.iterable && !mT && XW(this.items, this.items.indexOf(TT)),
          function(TT, UT, mT, WT, MT) {
            const gT = TT._stream;
            if (void 0 === gT) return !1;
            const nT = gT.pendingByView.get(UT);
            if (nT?.has(WT)) return nT.delete(WT), !1;
            const HT = gT.sentByView.get(UT);
            if (HT?.has(WT)) {
              HT.delete(WT);
              let TT = MT.get(mT);
              return void 0 === TT && (TT = new Map, MT.set(mT, TT)), TT.set(WT, zT.DELETE), !0
            }
          }(WT.parent, this.id, WT.parent[nT], WT.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(WT), this;
        if (WT.isStreamCollection) {
          this.unmarkVisible(WT), this.iterable && !mT && XW(this.items, this.items.indexOf(TT));
          const UT = WT.ref,
            MT = UT._stream;
          if (void 0 !== MT) {
            MT.pendingByView.get(this.id)?.clear();
            const TT = MT.sentByView.get(this.id);
            if (void 0 !== TT && TT.size > 0) {
              const mT = UT[nT];
              let WT = this.changes.get(mT);
              void 0 === WT && (WT = new Map, this.changes.set(mT, WT));
              for (const UT of TT) WT.set(UT, zT.DELETE);
              TT.clear()
            }
          }
          return this
        }
        this.unmarkVisible(WT), this.iterable && !mT && XW(this.items, this.items.indexOf(TT));
        const gT = WT.ref,
          HT = gT.constructor[Symbol.metadata],
          kT = gT[nT];
        this._touchAncestorsOf(WT);
        let jT = this.changes.get(kT);
        if (void 0 === jT && (jT = new Map, this.changes.set(kT, jT)), UT === ZW) {
          const TT = WT.parent;
          if (TT && !EU.isValidInstance(TT) && WT.isFiltered) {
            const UT = MT.isArray ? WT : WT.parentIndex,
              mT = TT[nT];
            let gT = this.changes.get(mT);
            void 0 === gT ? (gT = new Map, this.changes.set(mT, gT)) : gT.get(UT) === zT.ADD && this._dropPendingEntries(WT), gT.set(UT, zT.DELETE), this._recursiveDeleteVisibleChangeTree(WT)
          } else HT?.[wT]?.forEach((TT => this._removeViewField(WT, jT, TT)))
        } else {
          const TT = HT?.[tT];
          if (void 0 !== TT)
            for (let mT = UT; mT > 0; mT &= mT - 1) TT[mT & -mT]?.forEach((TT => this._removeViewField(WT, jT, TT)))
        }
        return void 0 === UT ? this.removeAllTagsOnTree(WT) : this.removeTag(WT, UT), this
      }
      has(TT) {
        return this.isVisible(TT[ZT])
      }
      hasTag(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZW;
        return this.hasTagOnTree(TT[ZT], UT)
      }
      subscribe(TT, UT) {
        const mT = TT?.[ZT];
        if (!mT) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${sW(TT)}`), this;
        if (void 0 === this._root && void 0 !== mT.root && this._bindRoot(mT.root), void 0 !== UT)
          if (mT.isStreamCollection) {
            const mT = xU(TT);
            null === UT ? mT.priorityByView?.delete(this.id) : (mT.priorityByView ??= new Map).set(this.id, UT)
          } else {
            const UT = TT?.constructor?.name ?? "collection",
              WT = mT.parent;
            if (void 0 === WT) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${UT} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const TT = WT?.constructor?.[Symbol.metadata]?.[mT.parentIndex]?.name,
                zT = TT ? `${WT.constructor.name}#${TT}` : UT;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${zT} is a ${UT}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(mT)) return this;
        const WT = void 0 !== mT.parent && !this.isVisible(mT);
        if (WT ? (this.addParentOf(mT, ZW), this._add(TT, ZW, !1, !1)) : this.markVisible(mT), this._setSubscribed(mT), mT.isStreamCollection) {
          const UT = TT;
          mT.forEachChild(((TT, mT) => {
            yU(UT, this.id, mT)
          }))
        } else WT || mT.forEachChild((TT => {
          this.markVisible(TT)
        }));
        return this
      }
      unsubscribe(TT) {
        const UT = TT?.[ZT];
        if (!UT) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${sW(TT)}`), this;
        if (!this.isSubscribed(UT)) return this;
        this._clearSubscribed(UT);
        const mT = UT.ref[nT];
        if (UT.isStreamCollection) {
          const UT = TT._stream;
          if (void 0 !== UT) {
            UT.pendingByView.get(this.id)?.clear();
            const TT = UT.sentByView.get(this.id);
            if (void 0 !== TT && TT.size > 0) {
              let UT = this.changes.get(mT);
              void 0 === UT && (UT = new Map, this.changes.set(mT, UT));
              for (const mT of TT) UT.set(mT, zT.DELETE);
              TT.clear()
            }
          }
        } else {
          const TT = UT.isArray;
          let WT = this.changes.get(mT);
          UT.forEachChild(((UT, MT) => {
            void 0 === WT && (WT = new Map, this.changes.set(mT, WT)), WT.set(TT ? UT : MT, zT.DELETE), this.unmarkVisible(UT)
          }))
        }
        return this.unmarkVisible(UT), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let TT = 0, UT = this.items.length; TT < UT; TT++) this.remove(this.items[TT], ZW, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(TT) {
        let UT = this.isVisible(TT);
        if (!UT && TT.isVisibilitySharedWithParent)
          if (this.isVisible(TT.parent[ZT])) this.markVisible(TT), UT = !0;
          else
            for (let mT = TT.extraParents; void 0 !== mT; mT = mT.next) {
              const WT = mT.ref[ZT];
              if (WT.isFiltered && this.isVisible(WT)) {
                this.markVisible(TT), UT = !0;
                break
              }
            }
        return UT
      }
      _recursiveDeleteVisibleChangeTree(TT) {
        TT.forEachChild((TT => {
          this.unmarkVisible(TT), this._recursiveDeleteVisibleChangeTree(TT)
        }))
      }
      _dropPendingEntries(TT) {
        this.changes.delete(TT.ref[nT]), TT.forEachChild((TT => this._dropPendingEntries(TT)))
      }
      _removeViewField(TT, UT, mT) {
        const WT = UT.get(mT) === zT.ADD;
        UT.set(mT, zT.DELETE);
        const MT = TT.ref[TT.encDescriptor.names[mT]],
          gT = MT?.[ZT];
        gT && (this.unmarkVisible(gT), this._recursiveDeleteVisibleChangeTree(gT), WT && this._dropPendingEntries(gT))
      }
    }

    function PW(TT) {
      TT.structSwitchEmitted || (TT.shouldEmitSwitch && (TT.buffer[TT.it.offset++] = 255, UU.number(TT.buffer, TT.ref[nT], TT.it)), TT.structSwitchEmitted = !0)
    }

    function VW(TT, UT) {
      rW(TT, UT, zT.ADD)
    }

    function uW(TT, UT) {
      if (UT._fullSyncGen === TT.gen) return;
      UT._fullSyncGen = TT.gen;
      if (!TT.hasView || TT.view.isChangeTreeVisible(UT)) {
        const mT = UT.encDescriptor;
        TT.changeTree = UT, TT.ref = UT.ref, TT.encoder = mT.encoder, TT.filter = mT.filter, TT.metadata = mT.metadata, TT.treeIsFiltered = UT.isFiltered, TT.isSchema = mT.isSchema, TT.filterBitmask = mT.filterBitmask, TT.tags = mT.tags, TT.structSwitchEmitted = !1, TT.shouldEmitSwitch = TT.hasView || TT.it.offset > TT.initialOffset || UT !== TT.rootChangeTree, UT.isArray && UT.collDirty.size > 0 && (UT.flags |= 512), zm(UT, TT, VW)
      }
      fm(UT, TT, CW)
    }

    function CW(TT, UT, mT) {
      uW(TT, UT)
    }

    function rW(TT, UT, mT) {
      if (UT < 0) {
        if (TT.treeIsFiltered !== TT.emitFiltered) return;
        return PW(TT), void(TT.buffer[TT.it.offset++] = 255 & Math.abs(UT))
      }
      if ((TT.isSchema ? TT.treeIsFiltered || (UT < 32 ? 0 !== (TT.filterBitmask & 1 << UT) : void 0 !== TT.tags[UT]) : TT.treeIsFiltered) !== TT.emitFiltered) return;
      const WT = TT.isEncodeAll ? zT.ADD : mT;
      void 0 !== WT && (void 0 === TT.filter || TT.filter(TT.ref, UT, TT.view)) && (PW(TT), TT.encoder(TT.self, TT.buffer, TT.changeTree, UT, WT, TT.it, TT.isEncodeAll, TT.hasView, TT.metadata))
    }

    function KW(TT, UT) {
      const mT = new Uint8Array(TT.length + UT.length);
      return mT.set(TT, 0), mT.set(UT, TT.length), mT
    }
    class SW {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(SW.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(TT, UT) {
        this.context = uU.cache(TT.constructor), this.root = UT ?? new yW(this.context), this.setState(TT)
      }
      setState(TT) {
        this.state = TT, this.state[ZT].setRoot(this.root)
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
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.offset;
        return this._encodeChannel(TT, UT, mT, WT, !1)
      }
      encodeUnreliable() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.offset;
        return this._encodeChannel(TT, UT, mT, WT, !0)
      }
      _encodeChannel(TT, UT, mT, WT, zT) {
        this.root.pendingFilterRefresh.length > 0 && gm(this.root);
        const MT = void 0 !== UT,
          gT = this.state[ZT],
          nT = this._encodeCtx;
        nT.self = this, nT.buffer = mT, nT.it = TT, nT.view = UT, nT.isEncodeAll = !1, nT.hasView = MT, nT.emitFiltered = MT;
        let HT = zT ? this.root.unreliableChanges : this.root.changes;
        for (; HT = HT.next;) {
          const mT = HT.changeTree;
          if (MT && !UT.isChangeTreeVisible(mT)) continue;
          const kT = zT ? mT.unreliableRecorder : mT;
          if (!kT || !kT.has()) continue;
          const jT = mT.encDescriptor;
          nT.changeTree = mT, nT.ref = mT.ref, nT.encoder = jT.encoder, nT.filter = jT.filter, nT.metadata = jT.metadata, nT.treeIsFiltered = mT.isFiltered, nT.isSchema = jT.isSchema, nT.filterBitmask = jT.filterBitmask, nT.tags = jT.tags, nT.structSwitchEmitted = !1, nT.isRootTree = mT === gT, nT.shouldEmitSwitch = MT || TT.offset > WT || !nT.isRootTree, kT.forEachWithCtx(nT, rW)
        }
        return zT || MT || !this._isStreamBroadcastMode || this._emitStreamBroadcast(mT, TT), TT.offset > mT.byteLength ? (mT = this._resizeBuffer(mT, TT.offset), TT.offset = WT, this._encodeChannel(TT, UT, mT, WT, zT)) : mT.subarray(0, TT.offset)
      }
      encodeFullSync(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.offset;
        this.root.pendingFilterRefresh.length > 0 && gm(this.root);
        const MT = void 0 !== WT,
          gT = this.state[ZT],
          nT = this._encodeCtx;
        return nT.self = this, nT.buffer = UT, nT.it = TT, nT.view = WT, nT.isEncodeAll = !0, nT.hasView = MT, nT.emitFiltered = mT, nT.gen = ++this._fullSyncGen, nT.initialOffset = zT, nT.rootChangeTree = gT, uW(nT, gT), TT.offset > UT.byteLength ? (UT = this._resizeBuffer(UT, TT.offset), TT.offset = zT, this.encodeFullSync(TT, UT, mT, WT, zT)) : UT.subarray(0, TT.offset)
      }
      _resizeBuffer(TT, UT) {
        const mT = Math.ceil(UT / SW.BUFFER_SIZE) * SW.BUFFER_SIZE,
          WT = new Uint8Array(mT);
        return WT.set(TT), TT === this.sharedBuffer && (this.sharedBuffer = WT), WT
      }
      encodeAll() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(TT, UT, !1)
      }
      encodeAllView(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const zT = mT.offset;
        return WT = this.encodeFullSync(mT, WT, !0, TT, zT), KW(WT.subarray(0, UT), WT.subarray(zT, mT.offset))
      }
      ensureCapacity(TT, UT) {
        if (UT + SW.BUFFER_SIZE <= TT.byteLength) return TT;
        const mT = Math.ceil((UT + SW.BUFFER_SIZE) / SW.BUFFER_SIZE) * SW.BUFFER_SIZE,
          WT = new Uint8Array(mT);
        return WT.set(TT.subarray(0, UT)), TT === this.sharedBuffer && (this.sharedBuffer = WT), WT
      }
      encodeView(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const gT = mT.offset;
        this._emitStreamPriority(TT);
        for (const HT of TT.changes.keys()) {
          const UT = TT.changes.get(HT),
            MT = this.root.changeTrees[HT];
          if (void 0 === MT) {
            TT.changes.delete(HT);
            continue
          }
          if (0 === UT.size) continue;
          const gT = MT.encDescriptor,
            kT = gT.encoder,
            jT = gT.metadata,
            lT = MT.ref,
            pT = MT.refTarget;
          WT = this.ensureCapacity(WT, mT.offset), WT[mT.offset++] = 255, UU.number(WT, lT[nT], mT);
          for (const [HT, BT] of UT) {
            let UT;
            if (-1 === HT) {
              const TT = pT.tmpItems,
                UT = pT.deletedIndexes;
              for (let gT = 0; gT < TT.length; gT++) void 0 !== TT[gT] && !0 !== UT[gT] && kT(this, WT, MT, gT, zT.ADD, mT, !1, !0, jT);
              continue
            }
            if ("number" === typeof HT) UT = HT;
            else {
              const mT = HT.indexInParent(lT);
              if (void 0 === mT) continue;
              if (UT = mT, BT === zT.ADD && MT.getChange(UT) === zT.DELETE) {
                TT.changes.delete(HT.ref[nT]);
                continue
              }
            }
            kT(this, WT, MT, UT, void 0 !== pT[LT](UT) && BT || zT.DELETE, mT, !1, !0, jT)
          }
        }
        return TT.changes.clear(), WT = this.encode(mT, TT, WT), MT ? KW(WT.subarray(0, UT), WT.subarray(gT, mT.offset)) : WT.subarray(gT, mT.offset)
      }
      encodeUnreliableView(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const zT = mT.offset;
        return WT = this.encodeUnreliable(mT, TT, WT, zT), KW(WT.subarray(0, UT), WT.subarray(zT, mT.offset))
      }
      _emitStreamBroadcast(TT, UT) {
        const mT = this.root.streamTrees;
        for (const WT of mT) {
          const mT = WT,
            MT = mT[ZT],
            gT = mT[nT];
          if (void 0 === gT) continue;
          const HT = mT._stream,
            kT = HT.broadcastDeletes,
            jT = HT.broadcastPending,
            lT = HT.sentBroadcast,
            pT = kT.size > 0,
            BT = jT.size > 0,
            cT = MT.encDescriptor,
            vT = cT.encoder,
            fT = cT.metadata;
          if (pT || BT) {
            if (TT[UT.offset++] = 255, UU.number(TT, gT, UT), pT) {
              for (const mT of kT) vT(this, TT, MT, mT, zT.DELETE, UT, !1, !1, fT);
              kT.clear()
            }
            const WT = HT.maxPerTick,
              BT = [];
            let cT = 0;
            const qT = [];
            for (const gT of jT) {
              if (cT >= WT) break;
              const nT = mT[LT](gT);
              void 0 !== nT ? (vT(this, TT, MT, gT, zT.ADD, UT, !1, !1, fT), lT.add(gT), BT.push(nT), qT.push(gT), cT++) : qT.push(gT)
            }
            for (const TT of qT) jT.delete(TT);
            for (const mT of BT) {
              const WT = mT[ZT];
              if (void 0 === WT) continue;
              const MT = mT[nT];
              if (void 0 === MT) continue;
              TT[UT.offset++] = 255, UU.number(TT, MT, UT);
              const gT = WT.encDescriptor,
                HT = gT.encoder,
                kT = gT.metadata;
              WT.forEachLive((mT => {
                EU.hasUnreliableAtIndex(kT, mT) || HT(this, TT, WT, mT, zT.ADD, UT, !1, !1, kT)
              }))
            }
          }
          for (const WT of lT) {
            const zT = mT[LT](WT);
            if (void 0 === zT) continue;
            const MT = zT[ZT];
            if (void 0 === MT || !MT.has()) continue;
            const gT = zT[nT];
            if (void 0 === gT) continue;
            TT[UT.offset++] = 255, UU.number(TT, gT, UT);
            const HT = MT.encDescriptor,
              kT = HT.encoder,
              jT = HT.metadata;
            MT.forEach(((mT, WT) => {
              mT < 0 || EU.hasUnreliableAtIndex(jT, mT) || kT(this, TT, MT, mT, WT, UT, !1, !1, jT)
            }))
          }
        }
      }
      _emitStreamPriority(TT) {
        const UT = this.root.streamTrees;
        if (0 === UT.size) return;
        const mT = TT.id;
        for (const WT of UT) {
          const UT = WT,
            MT = UT._stream,
            gT = MT.pendingByView.get(mT);
          if (void 0 === gT || 0 === gT.size) continue;
          const HT = MT.priorityByView?.get(mT),
            kT = void 0 !== HT,
            jT = MT.priority,
            lT = MT.maxPerTick,
            pT = [],
            BT = [];
          if (kT || void 0 !== jT) {
            const mT = [],
              WT = [];
            let zT = 0;
            for (const MT of gT) {
              const gT = UT[LT](MT);
              if (void 0 === gT) {
                BT.push(MT);
                continue
              }
              const nT = kT ? HT(gT) : jT(TT, gT);
              if (zT < lT) {
                let TT = zT++;
                for (; TT > 0 && WT[TT - 1] < nT;) WT[TT] = WT[TT - 1], mT[TT] = mT[TT - 1], TT--;
                WT[TT] = nT, mT[TT] = MT
              } else if (nT > WT[lT - 1]) {
                let TT = lT - 1;
                for (; TT > 0 && WT[TT - 1] < nT;) WT[TT] = WT[TT - 1], mT[TT] = mT[TT - 1], TT--;
                WT[TT] = nT, mT[TT] = MT
              }
            }
            for (let TT = 0; TT < zT; TT++) pT.push(mT[TT])
          } else
            for (const TT of gT) {
              if (pT.length >= lT) break;
              pT.push(TT)
            }
          for (const TT of BT) gT.delete(TT);
          const cT = pT.length;
          let vT = MT.sentByView.get(mT);
          void 0 === vT && (vT = new Set, MT.sentByView.set(mT, vT));
          for (let mT = 0; mT < cT; mT++) {
            const WT = pT[mT],
              MT = UT[LT](WT);
            if (void 0 === MT) {
              gT.delete(WT);
              continue
            }
            TT._addImmediate(MT);
            const HT = MT[ZT];
            if (void 0 !== HT) {
              const UT = MT[nT];
              let mT = TT.changes.get(UT);
              void 0 === mT && (mT = new Map, TT.changes.set(UT, mT));
              const WT = HT.metadata;
              HT.forEachLive((TT => {
                EU.hasUnreliableAtIndex(WT, TT) || mT.set(TT, zT.ADD)
              }))
            }
            gT.delete(WT), vT.add(WT)
          }
        }
      }
      discardChanges() {
        const TT = this.root.changes;
        let UT = TT.next;
        const mT = this.root;
        for (; UT;) {
          const TT = UT.next;
          UT.changeTree.endEncode(), mT.releaseNode(UT), UT = TT
        }
        TT.next = void 0, TT.tail = void 0
      }
      discardUnreliableChanges() {
        const TT = this.root.unreliableChanges;
        let UT = TT.next;
        const mT = this.root;
        for (; UT;) {
          const TT = UT.next;
          UT.changeTree.endEncodeUnreliable(), mT.releaseNode(UT), UT = TT
        }
        TT.next = void 0, TT.tail = void 0
      }
      tryEncodeTypeId(TT, UT, mT, WT) {
        const zT = this.context.getTypeId(UT),
          MT = this.context.getTypeId(mT);
        void 0 !== MT ? zT !== MT && (TT[WT.offset++] = 213, UU.number(TT, MT, WT)) : console.warn(`@colyseus/schema WARNING: Class "${mT.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const TT = this.root;
        if (0 === TT.streamTrees.size) return !1;
        const UT = 0 === TT.activeViews.size;
        for (const mT of TT.streamTrees)
          if (UT ? aU(mT) : tU(mT, TT)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class GW extends Error {
      constructor(TT) {
        super(TT), this.name = "DecodingWarning"
      }
    }
    const NW = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class EW {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(TT, UT), void 0 === UT[nT] ? (NW.value = TT, Object.defineProperty(UT, nT, NW)) : UT[nT] !== TT && (UT[nT] = TT), mT && (this.refCount[TT] = (this.refCount[TT] || 0) + 1), this.deletedRefs.has(TT) && this.deletedRefs.delete(TT)
      }
      removeRef(TT) {
        const UT = this.refCount[TT];
        if (void 0 !== UT)
          if (0 !== UT)(this.refCount[TT] = UT - 1) <= 0 && this.deletedRefs.add(TT);
          else try {
            const UT = this.refs.get(TT);
            throw new GW(`trying to remove refId '${TT}' with 0 refCount (${UT.constructor.name}: ${JSON.stringify(UT)})`)
          } catch (gz) {
            console.warn(gz)
          } else try {
            throw new GW("trying to remove refId that doesn't exist: " + TT)
          } catch (gz) {
            console.warn(gz)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((TT => {
          if (this.refCount[TT] > 0) return;
          const UT = this.refs.get(TT),
            mT = UT.constructor[Symbol.metadata];
          if (null != mT)
            for (const WT in mT) {
              const TT = UT[mT[WT].name];
              if ("object" === typeof TT && TT) {
                const UT = TT[nT];
                void 0 === UT || this.deletedRefs.has(UT) || this.removeRef(UT)
              }
            } else "function" === typeof UT[cT] && Array.from(UT.values()).forEach((TT => {
              const UT = TT[nT];
              void 0 === UT || this.deletedRefs.has(UT) || this.removeRef(UT)
            }));
          this.refs.delete(TT), delete this.refCount[TT], delete this.callbacks[TT]
        })), this.deletedRefs.clear()
      }
      addCallback(TT, UT, mT) {
        if (void 0 === TT) {
          const TT = "number" === typeof UT ? zT[UT] : UT;
          throw new Error(`Can't addCallback on '${TT}' (refId is undefined)`)
        }
        return this.callbacks[TT] || (this.callbacks[TT] = {}), this.callbacks[TT][UT] || (this.callbacks[TT][UT] = []), this.callbacks[TT][UT].push(mT), () => this.removeCallback(TT, UT, mT)
      }
      removeCallback(TT, UT, mT) {
        const WT = this.callbacks?.[TT]?.[UT]?.indexOf(mT);
        void 0 !== WT && -1 !== WT && XW(this.callbacks[TT][UT], WT)
      }
    }
    class hW {
      context;
      state;
      root;
      currentRefId = 0;
      Gs;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(TT, UT) {
        this.setState(TT), this.context = UT || new uU(TT.constructor)
      }
      setState(TT) {
        this.state = TT, this.root = new EW, this.root.addRef(0, TT)
      }
      decode(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const zT = void 0 !== this.Gs ? [] : null,
          MT = this.root,
          gT = TT.byteLength;
        let nT = mT.constructor[jT];
        for (this.currentRefId = 0; UT.offset < gT;) {
          if (TT[UT.offset] == WT) {
            UT.offset++, mT[iT]?.();
            const WT = qU.number(TT, UT),
              zT = MT.refs.get(WT);
            zT ? (mT = zT, nT = mT.constructor[jT], this.currentRefId = WT) : (console.error(`"refId" not found: ${WT}`, {
              previousRef: mT,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(TT, UT, gT));
            continue
          } - 1 !== nT(this, TT, UT, mT, zT) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(TT, UT, gT))
        }
        return mT[iT]?.(), null !== this.resyncVisited && function(TT, UT) {
          TT.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Cm(TT, TT.state, new Set, UT)
        }(this, zT), null !== zT && this.Gs?.(zT), MT.garbageCollectDeletedRefs(), zT
      }
      decodeResync(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(TT, UT)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(TT, UT, mT) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const zT = {
          offset: UT.offset
        };
        for (; UT.offset < mT && (TT[UT.offset] !== WT || (zT.offset = UT.offset + 1, !this.root.refs.has(qU.number(TT, zT))));) UT.offset++
      }
      getInstanceType(TT, UT, mT) {
        let WT;
        if (213 === TT[UT.offset]) {
          UT.offset++;
          const mT = qU.number(TT, UT);
          WT = this.context.get(mT)
        }
        return WT || mT
      }
      createInstanceOfType(TT) {
        return TT.initializeForDecoder()
      }
      removeChildRefs(TT, UT) {
        const mT = "string" !== typeof TT[cT],
          WT = TT[nT];
        TT.forEach(((MT, gT) => {
          UT?.push({
            ref: TT,
            refId: WT,
            op: zT.DELETE,
            field: gT,
            value: void 0,
            previousValue: MT
          }), mT && this.root.removeRef(MT[nT])
        }))
      }
    }
    const DW = dW({
        min: BW.float64(),
        max: BW.float64(),
        bits: BW.uint8(),
        mode: BW.uint8()
      }, "QuantizedDescriptor"),
      oW = dW({
        name: BW.string(),
        type: BW.string(),
        referencedType: BW.number(),
        childPrimitive: BW.string(),
        quantized: BW.ref(DW).optional()
      }, "ReflectionField"),
      AW = dW({
        id: BW.number(),
        extendsId: BW.number(),
        fields: BW.array(oW)
      }, "ReflectionType"),
      RW = dW({
        types: BW.array(AW),
        rootType: BW.number()
      }, "Reflection");

    function Tz(TT) {
      const UT = TT.root,
        mT = UT.callbacks,
        WT = new WeakMap;
      let MT;

      function gT(TT, mT) {
        let kT = mT.instance?.constructor[Symbol.metadata] || TT,
          jT = mT.instance && "function" === typeof mT.instance.forEach || TT && !tW.is(TT);
        if (kT && !jT) {
          const TT = function(TT, zT, gT, HT) {
            return HT && void 0 !== mT.instance[zT] && !WT.has(MT) && gT(mT.instance[zT], void 0), UT.addCallback(TT[nT], zT, gT)
          };
          return new Proxy({
            listen: function(UT, zT) {
              let gT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (mT.instance) return TT(mT.instance, UT, zT, gT);
              {
                let nT = () => {};
                return mT.onInstanceAvailable(((mT, HT) => {
                  nT = TT(mT, UT, zT, gT && HT && !WT.has(MT))
                })), () => nT()
              }
            },
            onChange: function(TT) {
              return UT.addCallback(mT.instance[nT], zT.REPLACE, TT)
            },
            bindTo: function(TT, WT) {
              return WT || (WT = Object.keys(kT).map((TT => kT[TT].name))), UT.addCallback(mT.instance[nT], zT.REPLACE, (() => {
                WT.forEach((UT => TT[UT] = mT.instance[UT]))
              }))
            }
          }, {
            get(TT, UT) {
              const WT = kT[kT[UT]];
              if (WT) {
                const TT = mT.instance?.[UT],
                  zT = WT => {
                    const zT = HT(mT.instance).listen(UT, ((TT, UT) => {
                      WT(TT, !1), zT?.()
                    }), !1);
                    void 0 !== TT?.[nT] && WT(TT, !0)
                  };
                return gT(WT.type, {
                  instance: void 0 !== TT?.[nT] && TT,
                  parentInstance: mT.instance,
                  onInstanceAvailable: zT
                })
              }
              return TT[UT]
            },
            has: (TT, UT) => void 0 !== kT[UT],
            set(TT, UT, mT) {
              throw new Error("not allowed")
            },
            deleteProperty(TT, UT) {
              throw new Error("not allowed")
            }
          })
        } {
          const TT = function(TT, mT, gT) {
              return gT && TT.forEach(((TT, UT) => mT(TT, UT))), UT.addCallback(TT[nT], zT.ADD, ((TT, UT) => {
                WT.set(mT, !0), MT = mT, mT(TT, UT), WT.delete(mT), MT = void 0
              }))
            },
            gT = function(TT, mT) {
              return UT.addCallback(TT[nT], zT.DELETE, mT)
            },
            HT = function(TT, mT) {
              return UT.addCallback(TT[nT], zT.REPLACE, mT)
            };
          return new Proxy({
            lY: function(UT) {
              let zT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (mT.instance) return TT(mT.instance, UT, zT && !WT.has(MT));
              if (mT.onInstanceAvailable) {
                let gT = () => {};
                return mT.onInstanceAvailable(((mT, nT) => {
                  gT = TT(mT, UT, zT && nT && !WT.has(MT))
                })), () => gT()
              }
            },
            yI: function(TT) {
              if (mT.instance) return gT(mT.instance, TT);
              if (mT.onInstanceAvailable) {
                let UT = () => {};
                return mT.onInstanceAvailable((mT => {
                  UT = gT(mT, TT)
                })), () => UT()
              }
            },
            onChange: function(TT) {
              if (mT.instance) return HT(mT.instance, TT);
              if (mT.onInstanceAvailable) {
                let UT = () => {};
                return mT.onInstanceAvailable((mT => {
                  UT = HT(mT, TT)
                })), () => UT()
              }
            }
          }, {
            get(TT, UT) {
              if (!TT[UT]) throw new Error(`Can't access '${UT}' through callback proxy. access the instance directly.`);
              return TT[UT]
            },
            has: (TT, UT) => void 0 !== TT[UT],
            set(TT, UT, mT) {
              throw new Error("not allowed")
            },
            deleteProperty(TT, UT) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function HT(TT) {
        return gT(void 0, {
          instance: TT
        })
      }
      return TT.Gs = function(TT) {
        const UT = new Set;
        for (let WT = 0, MT = TT.length; WT < MT; WT++) {
          const MT = TT[WT],
            gT = MT.refId,
            HT = MT.ref,
            kT = mT[gT];
          if (kT) {
            if ((MT.op & zT.DELETE) === zT.DELETE && tW.isSchema(MT.previousValue)) {
              const TT = mT[MT.previousValue[nT]]?.[zT.DELETE];
              for (let UT = TT?.length - 1; UT >= 0; UT--) TT[UT]()
            }
            if (tW.isSchema(HT)) {
              if (!UT.has(gT)) {
                const TT = kT?.[zT.REPLACE];
                for (let UT = TT?.length - 1; UT >= 0; UT--) TT[UT]()
              }
              if (kT.hasOwnProperty(MT.field)) {
                const TT = kT[MT.field];
                for (let UT = TT?.length - 1; UT >= 0; UT--) TT[UT](MT.value, MT.previousValue)
              }
            } else {
              if ((MT.op & zT.DELETE) === zT.DELETE) {
                if (void 0 !== MT.previousValue) {
                  const TT = kT[zT.DELETE];
                  for (let UT = TT?.length - 1; UT >= 0; UT--) TT[UT](MT.previousValue, MT.dynamicIndex ?? MT.field)
                }
                if ((MT.op & zT.ADD) === zT.ADD) {
                  const TT = kT[zT.ADD];
                  for (let UT = TT?.length - 1; UT >= 0; UT--) TT[UT](MT.value, MT.dynamicIndex ?? MT.field)
                }
              } else if ((MT.op & zT.ADD) === zT.ADD && MT.previousValue !== MT.value) {
                const TT = kT[zT.ADD];
                for (let UT = TT?.length - 1; UT >= 0; UT--) TT[UT](MT.value, MT.dynamicIndex ?? MT.field)
              }
              if (MT.value !== MT.previousValue && (void 0 !== MT.value || void 0 !== MT.previousValue)) {
                const TT = kT[zT.REPLACE];
                for (let UT = TT?.length - 1; UT >= 0; UT--) TT[UT](MT.value, MT.dynamicIndex ?? MT.field)
              }
            }
            UT.add(gT)
          }
        }
      }, HT
    }

    function Uz(TT, UT) {
      TT.Gs = UT
    }
    RW.encode = function(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const mT = TT.context,
        WT = new RW,
        zT = new SW(WT),
        MT = mT.schemas.get(TT.state.constructor);
      MT > 0 && (WT.rootType = MT);
      const gT = new Set,
        nT = {},
        HT = TT => {
          if (void 0 === TT.extendsId || gT.has(TT.extendsId)) {
            gT.add(TT.id), WT.types.push(TT);
            const UT = nT[TT.id];
            void 0 !== UT && (delete nT[TT.id], UT.forEach((TT => HT(TT))))
          } else void 0 === nT[TT.extendsId] && (nT[TT.extendsId] = []), nT[TT.extendsId].push(TT)
        };
      mT.schemas.forEach(((TT, UT) => {
        const WT = new AW;
        WT.id = Number(TT);
        const zT = Object.getPrototypeOf(UT);
        zT !== tW && (WT.extendsId = mT.schemas.get(zT));
        const MT = UT[Symbol.metadata];
        if (MT !== zT[Symbol.metadata]) {
          const TT = MT[xT] ?? -1;
          for (let UT = 0; UT <= TT; UT++) {
            const TT = MT[UT];
            if (void 0 === TT) continue;
            const zT = TT.name;
            if (!Object.prototype.hasOwnProperty.call(MT, zT)) continue;
            const gT = new oW;
            let nT;
            if (gT.name = zT, "string" === typeof TT.type) nT = TT.type;
            else if (sU(TT.type)) {
              const UT = TT.type.quantized;
              nT = "quantized";
              const mT = new DW;
              mT.min = UT.min, mT.max = UT.max, mT.bits = UT.bits, mT.mode = UT.wrap ? 1 : 0, gT.quantized = mT
            } else {
              let UT;
              tW.is(TT.type) ? (nT = "ref", UT = TT.type) : (nT = Object.keys(TT.type)[0], "string" === typeof TT.type[nT] ? gT.childPrimitive = TT.type[nT] : UT = TT.type[nT]), gT.referencedType = UT ? mT.getTypeId(UT) : -1
            }
            gT.type = nT, WT.fields.push(gT)
          }
        }
        HT(WT)
      }));
      for (const kT in nT) nT[kT].forEach((TT => WT.types.push(TT)));
      return zT.encodeAll(UT).slice(0, UT.offset)
    }, RW.decode = function(TT, UT) {
      const mT = new RW;
      new hW(mT).decode(TT, UT);
      const WT = new uU;
      mT.types.forEach((TT => {
        const UT = WT.get(TT.extendsId) ?? tW,
          mT = class extends UT {};
        uU.register(mT), WT.add(mT, TT.id)
      }), {});
      mT.types.forEach((TT => {
        const UT = WT.get(TT.id),
          zT = EU.initialize(UT),
          MT = [];
        let gT = TT;
        do {
          MT.push(gT), gT = mT.types.find((TT => TT.id === gT.extendsId))
        } while (gT);
        let nT = 0;
        MT.reverse().forEach((TT => {
          ((TT, UT, mT) => {
            UT.fields.forEach(((UT, zT) => {
              const MT = mT + zT;
              if (void 0 !== UT.quantized) {
                const mT = UT.quantized;
                EU.addField(TT, MT, UT.name, {
                  quantized: QU({
                    min: mT.min,
                    max: mT.max,
                    bits: mT.bits,
                    mode: 1 === mT.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== UT.referencedType) {
                const mT = UT.type,
                  zT = WT.get(UT.referencedType) ?? UT.childPrimitive;
                "ref" === mT ? EU.addField(TT, MT, UT.name, zT) : EU.addField(TT, MT, UT.name, {
                  [mT]: zT
                })
              } else EU.addField(TT, MT, UT.name, UT.type)
            }))
          })(zT, TT, nT), nT += TT.fields.length
        }))
      }));
      const zT = new(WT.get(mT.rootType || 0));
      return new hW(zT, WT)
    }, RW.makeEncodable = function(TT) {
      const UT = TT[Symbol.metadata];
      if (!UT) return TT;
      const mT = UT[xT];
      if (void 0 === mT) return TT;
      for (let WT = 0; WT <= mT; WT++) {
        const mT = UT[WT];
        mT && EU.defineField(TT, UT, WT, mT.name, mT.type)
      }
      return Object.prototype.hasOwnProperty.call(TT, YT) && delete TT[YT], TT
    };
    class mz {
      Dp;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(TT) {
        this.Dp = TT, this.Dp.Gs = this.Gs.bind(this)
      }
      get callbacks() {
        return this.Dp.root.callbacks
      }
      get state() {
        return this.Dp.state
      }
      addCallback(TT, UT, mT) {
        return this.Dp.root.addCallback(TT, UT, mT)
      }
      addCallbackOrWaitCollectionAvailable(TT, UT, mT, WT) {
        let MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          gT = () => {};
        const HT = () => gT(),
          kT = TT[UT];
        if (kT && void 0 !== kT[nT]) return MT = MT && !1 === this.isTriggering, mT === zT.ADD && MT && kT.forEach(((TT, UT) => {
          WT(TT, UT)
        })), this.addCallback(kT[nT], mT, WT);
        {
          let zT;
          return zT = this.addCallback(TT[nT], UT, ((TT, UT) => {
            null !== TT && void 0 !== TT && (zT(), gT = this.addCallback(TT[nT], mT, WT))
          })), gT = zT, HT
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(TT, UT, mT) {
        let WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        WT = WT && !1 === this.isTriggering;
        const zT = TT[UT];
        return WT && null !== zT && void 0 !== zT && mT(zT, void 0), this.addCallback(TT[nT], UT, mT)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const TT = arguments.length <= 0 ? void 0 : arguments[0],
            UT = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(TT[nT], zT.REPLACE, UT)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], zT.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], zT.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      lY() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], zT.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], zT.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      yI() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], zT.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], zT.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(TT, UT, mT) {
        let WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const MT = TT.constructor[Symbol.metadata];
        mT || (mT = Object.keys(MT).filter((TT => !isNaN(Number(TT)))).map((TT => MT[TT].name)));
        const gT = () => {
          for (const WT of mT) {
            const mT = TT[WT];
            void 0 !== mT && (UT[WT] = mT)
          }
        };
        return WT && gT(), this.addCallback(TT[nT], zT.REPLACE, gT)
      }
      Gs(TT) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let UT = 0, mT = TT.length; UT < mT; UT++) {
          const mT = TT[UT],
            WT = mT.refId,
            MT = mT.ref,
            gT = this.callbacks[WT];
          if (gT) {
            if ((mT.op & zT.DELETE) === zT.DELETE && tW.isSchema(mT.previousValue)) {
              const TT = mT.previousValue[nT],
                UT = this.callbacks[TT]?.[zT.DELETE];
              if (UT)
                for (let mT = UT.length - 1; mT >= 0; mT--) try {
                  UT[mT]()
                } catch (gz) {
                  console.error(gz)
                }
            }
            if (tW.isSchema(MT)) {
              if (!this.uniqueRefIds.has(WT)) {
                const TT = gT[zT.REPLACE];
                if (TT)
                  for (let UT = TT.length - 1; UT >= 0; UT--) try {
                    TT[UT]()
                  } catch (gz) {
                    console.error(gz)
                  }
              }
              const TT = gT[mT.field];
              if (TT)
                for (let UT = TT.length - 1; UT >= 0; UT--) try {
                  TT[UT](mT.value, mT.previousValue)
                } catch (gz) {
                  console.error(gz)
                }
            } else {
              const TT = mT.dynamicIndex ?? mT.field;
              if ((mT.op & zT.DELETE) === zT.DELETE) {
                if (void 0 !== mT.previousValue) {
                  const UT = gT[zT.DELETE];
                  if (UT)
                    for (let WT = UT.length - 1; WT >= 0; WT--) try {
                      UT[WT](mT.previousValue, TT)
                    } catch (gz) {
                      console.error(gz)
                    }
                }
                if ((mT.op & zT.ADD) === zT.ADD) {
                  const UT = gT[zT.ADD];
                  if (UT)
                    for (let WT = UT.length - 1; WT >= 0; WT--) try {
                      UT[WT](mT.value, TT)
                    } catch (gz) {
                      console.error(gz)
                    }
                }
              } else if ((mT.op & zT.ADD) === zT.ADD && mT.previousValue !== mT.value) {
                const UT = gT[zT.ADD];
                if (UT)
                  for (let WT = UT.length - 1; WT >= 0; WT--) try {
                    UT[WT](mT.value, TT)
                  } catch (gz) {
                    console.error(gz)
                  }
              }
              if (mT.value !== mT.previousValue) {
                const UT = gT[zT.REPLACE];
                if (UT)
                  for (let WT = UT.length - 1; WT >= 0; WT--) try {
                    UT[WT](TT, mT.value)
                  } catch (gz) {
                    console.error(gz)
                  }
              }
            }
            this.uniqueRefIds.add(WT)
          }
        }
        this.isTriggering = !1
      }
    }
    const Wz = {
      get(TT) {
        if (TT instanceof hW) return new mz(TT);
        if ("Dp" in TT.bq) return new mz(TT.bq.Dp);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(TT) {
        if (TT instanceof hW) return Tz(TT);
        if ("Dp" in TT.bq) return Tz(TT.bq.Dp);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (TT, UT) => Uz(TT, UT)
    };
    class zz {
      _free = [];
      _factory;
      _maxSize;
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = TT, this._maxSize = UT.maxSize ?? 1 / 0;
        const mT = UT.preallocate ?? 0;
        for (let WT = 0; WT < mT; WT++) this._free.push(TT())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(TT) {
        tW.reset(TT), this._free.length < this._maxSize && this._free.push(TT)
      }
      get size() {
        return this._free.length
      }
    }

    function Mz(TT) {
      return new zz((() => new TT), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    OU("map", {
      constructor: MW
    }), OU("array", {
      constructor: WW
    }), OU("set", {
      constructor: nW
    }), OU("collection", {
      constructor: gW
    })
  },
  9217: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      __addDisposableResource: () => sT,
      __assign: () => MT,
      __asyncDelegator: () => JT,
      __asyncGenerator: () => YT,
      __asyncValues: () => xT,
      __await: () => eT,
      __awaiter: () => BT,
      __classPrivateFieldGet: () => XT,
      __classPrivateFieldIn: () => QT,
      __classPrivateFieldSet: () => IT,
      __createBinding: () => cT,
      __decorate: () => nT,
      __disposeResources: () => PT,
      __esDecorate: () => kT,
      __exportStar: () => vT,
      __extends: () => zT,
      __generator: () => ZT,
      __importDefault: () => yT,
      __importStar: () => aT,
      __makeTemplateObject: () => dT,
      __metadata: () => pT,
      __param: () => HT,
      __propKey: () => lT,
      __read: () => qT,
      __rest: () => gT,
      __rewriteRelativeImportExtension: () => VT,
      __runInitializers: () => jT,
      __setFunctionName: () => LT,
      __spread: () => iT,
      __spreadArray: () => OT,
      __spreadArrays: () => bT,
      __values: () => fT,
      default: () => uT
    });
    var WT = function(TT, UT) {
      return WT = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(TT, UT) {
        TT.__proto__ = UT
      } || function(TT, UT) {
        for (var mT in UT) Object.prototype.hasOwnProperty.call(UT, mT) && (TT[mT] = UT[mT])
      }, WT(TT, UT)
    };

    function zT(TT, UT) {
      if ("function" !== typeof UT && null !== UT) throw new TypeError("Class extends value " + String(UT) + " is not a constructor or null");

      function mT() {
        this.constructor = TT
      }
      WT(TT, UT), TT.prototype = null === UT ? Object.create(UT) : (mT.prototype = UT.prototype, new mT)
    }
    var MT = function() {
      return MT = Object.assign || function(TT) {
        for (var UT, mT = 1, WT = arguments.length; mT < WT; mT++)
          for (var zT in UT = arguments[mT]) Object.prototype.hasOwnProperty.call(UT, zT) && (TT[zT] = UT[zT]);
        return TT
      }, MT.apply(this, arguments)
    };

    function gT(TT, UT) {
      var mT = {};
      for (var WT in TT) Object.prototype.hasOwnProperty.call(TT, WT) && UT.indexOf(WT) < 0 && (mT[WT] = TT[WT]);
      if (null != TT && "function" === typeof Object.getOwnPropertySymbols) {
        var zT = 0;
        for (WT = Object.getOwnPropertySymbols(TT); zT < WT.length; zT++) UT.indexOf(WT[zT]) < 0 && Object.prototype.propertyIsEnumerable.call(TT, WT[zT]) && (mT[WT[zT]] = TT[WT[zT]])
      }
      return mT
    }

    function nT(TT, UT, mT, WT) {
      var zT, MT = arguments.length,
        gT = MT < 3 ? UT : null === WT ? WT = Object.getOwnPropertyDescriptor(UT, mT) : WT;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) gT = Reflect.decorate(TT, UT, mT, WT);
      else
        for (var nT = TT.length - 1; nT >= 0; nT--)(zT = TT[nT]) && (gT = (MT < 3 ? zT(gT) : MT > 3 ? zT(UT, mT, gT) : zT(UT, mT)) || gT);
      return MT > 3 && gT && Object.defineProperty(UT, mT, gT), gT
    }

    function HT(TT, UT) {
      return function(mT, WT) {
        UT(mT, WT, TT)
      }
    }

    function kT(TT, UT, mT, WT, zT, MT) {
      function gT(TT) {
        if (void 0 !== TT && "function" !== typeof TT) throw new TypeError("Function expected");
        return TT
      }
      for (var nT, HT = WT.kind, kT = "getter" === HT ? "get" : "setter" === HT ? "set" : "value", jT = !UT && TT ? WT.static ? TT : TT.prototype : null, lT = UT || (jT ? Object.getOwnPropertyDescriptor(jT, WT.name) : {}), LT = !1, pT = mT.length - 1; pT >= 0; pT--) {
        var BT = {};
        for (var ZT in WT) BT[ZT] = "access" === ZT ? {} : WT[ZT];
        for (var ZT in WT.access) BT.access[ZT] = WT.access[ZT];
        BT.addInitializer = function(TT) {
          if (LT) throw new TypeError("Cannot add initializers after decoration has completed");
          MT.push(gT(TT || null))
        };
        var cT = (0, mT[pT])("accessor" === HT ? {
          get: lT.get,
          set: lT.set
        } : lT[kT], BT);
        if ("accessor" === HT) {
          if (void 0 === cT) continue;
          if (null === cT || "object" !== typeof cT) throw new TypeError("Object expected");
          (nT = gT(cT.get)) && (lT.get = nT), (nT = gT(cT.set)) && (lT.set = nT), (nT = gT(cT.init)) && zT.unshift(nT)
        } else(nT = gT(cT)) && ("field" === HT ? zT.unshift(nT) : lT[kT] = nT)
      }
      jT && Object.defineProperty(jT, WT.name, lT), LT = !0
    }

    function jT(TT, UT, mT) {
      for (var WT = arguments.length > 2, zT = 0; zT < UT.length; zT++) mT = WT ? UT[zT].call(TT, mT) : UT[zT].call(TT);
      return WT ? mT : void 0
    }

    function lT(TT) {
      return "symbol" === typeof TT ? TT : "".concat(TT)
    }

    function LT(TT, UT, mT) {
      return "symbol" === typeof UT && (UT = UT.description ? "[".concat(UT.description, "]") : ""), Object.defineProperty(TT, "name", {
        configurable: !0,
        value: mT ? "".concat(mT, " ", UT) : UT
      })
    }

    function pT(TT, UT) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(TT, UT)
    }

    function BT(TT, UT, mT, WT) {
      return new(mT || (mT = Promise))((function(zT, MT) {
        function gT(TT) {
          try {
            HT(WT.next(TT))
          } catch (UT) {
            MT(UT)
          }
        }

        function nT(TT) {
          try {
            HT(WT.throw(TT))
          } catch (UT) {
            MT(UT)
          }
        }

        function HT(TT) {
          var UT;
          TT.done ? zT(TT.value) : (UT = TT.value, UT instanceof mT ? UT : new mT((function(TT) {
            TT(UT)
          }))).then(gT, nT)
        }
        HT((WT = WT.apply(TT, UT || [])).next())
      }))
    }

    function ZT(TT, UT) {
      var mT, WT, zT, MT = {
          label: 0,
          sent: function() {
            if (1 & zT[0]) throw zT[1];
            return zT[1]
          },
          trys: [],
          ops: []
        },
        gT = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return gT.next = nT(0), gT.throw = nT(1), gT.return = nT(2), "function" === typeof Symbol && (gT[Symbol.iterator] = function() {
        return this
      }), gT;

      function nT(nT) {
        return function(HT) {
          return function(nT) {
            if (mT) throw new TypeError("Generator is already executing.");
            for (; gT && (gT = 0, nT[0] && (MT = 0)), MT;) try {
              if (mT = 1, WT && (zT = 2 & nT[0] ? WT.return : nT[0] ? WT.throw || ((zT = WT.return) && zT.call(WT), 0) : WT.next) && !(zT = zT.call(WT, nT[1])).done) return zT;
              switch (WT = 0, zT && (nT = [2 & nT[0], zT.value]), nT[0]) {
                case 0:
                case 1:
                  zT = nT;
                  break;
                case 4:
                  return MT.label++, {
                    value: nT[1],
                    done: !1
                  };
                case 5:
                  MT.label++, WT = nT[1], nT = [0];
                  continue;
                case 7:
                  nT = MT.ops.pop(), MT.trys.pop();
                  continue;
                default:
                  if (!(zT = (zT = MT.trys).length > 0 && zT[zT.length - 1]) && (6 === nT[0] || 2 === nT[0])) {
                    MT = 0;
                    continue
                  }
                  if (3 === nT[0] && (!zT || nT[1] > zT[0] && nT[1] < zT[3])) {
                    MT.label = nT[1];
                    break
                  }
                  if (6 === nT[0] && MT.label < zT[1]) {
                    MT.label = zT[1], zT = nT;
                    break
                  }
                  if (zT && MT.label < zT[2]) {
                    MT.label = zT[2], MT.ops.push(nT);
                    break
                  }
                  zT[2] && MT.ops.pop(), MT.trys.pop();
                  continue
              }
              nT = UT.call(TT, MT)
            } catch (HT) {
              nT = [6, HT], WT = 0
            } finally {
              mT = zT = 0
            }
            if (5 & nT[0]) throw nT[1];
            return {
              value: nT[0] ? nT[1] : void 0,
              done: !0
            }
          }([nT, HT])
        }
      }
    }
    var cT = Object.create ? function(TT, UT, mT, WT) {
      void 0 === WT && (WT = mT);
      var zT = Object.getOwnPropertyDescriptor(UT, mT);
      zT && !("get" in zT ? !UT.__esModule : zT.writable || zT.configurable) || (zT = {
        enumerable: !0,
        get: function() {
          return UT[mT]
        }
      }), Object.defineProperty(TT, WT, zT)
    } : function(TT, UT, mT, WT) {
      void 0 === WT && (WT = mT), TT[WT] = UT[mT]
    };

    function vT(TT, UT) {
      for (var mT in TT) "default" === mT || Object.prototype.hasOwnProperty.call(UT, mT) || cT(UT, TT, mT)
    }

    function fT(TT) {
      var UT = "function" === typeof Symbol && Symbol.iterator,
        mT = UT && TT[UT],
        WT = 0;
      if (mT) return mT.call(TT);
      if (TT && "number" === typeof TT.length) return {
        next: function() {
          return TT && WT >= TT.length && (TT = void 0), {
            value: TT && TT[WT++],
            done: !TT
          }
        }
      };
      throw new TypeError(UT ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function qT(TT, UT) {
      var mT = "function" === typeof Symbol && TT[Symbol.iterator];
      if (!mT) return TT;
      var WT, zT, MT = mT.call(TT),
        gT = [];
      try {
        for (;
          (void 0 === UT || UT-- > 0) && !(WT = MT.next()).done;) gT.push(WT.value)
      } catch (nT) {
        zT = {
          error: nT
        }
      } finally {
        try {
          WT && !WT.done && (mT = MT.return) && mT.call(MT)
        } finally {
          if (zT) throw zT.error
        }
      }
      return gT
    }

    function iT() {
      for (var TT = [], UT = 0; UT < arguments.length; UT++) TT = TT.concat(qT(arguments[UT]));
      return TT
    }

    function bT() {
      for (var TT = 0, UT = 0, mT = arguments.length; UT < mT; UT++) TT += arguments[UT].length;
      var WT = Array(TT),
        zT = 0;
      for (UT = 0; UT < mT; UT++)
        for (var MT = arguments[UT], gT = 0, nT = MT.length; gT < nT; gT++, zT++) WT[zT] = MT[gT];
      return WT
    }

    function OT(TT, UT, mT) {
      if (mT || 2 === arguments.length)
        for (var WT, zT = 0, MT = UT.length; zT < MT; zT++) !WT && zT in UT || (WT || (WT = Array.prototype.slice.call(UT, 0, zT)), WT[zT] = UT[zT]);
      return TT.concat(WT || Array.prototype.slice.call(UT))
    }

    function eT(TT) {
      return this instanceof eT ? (this.v = TT, this) : new eT(TT)
    }

    function YT(TT, UT, mT) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var WT, zT = mT.apply(TT, UT || []),
        MT = [];
      return WT = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), gT("next"), gT("throw"), gT("return", (function(TT) {
        return function(UT) {
          return Promise.resolve(UT).then(TT, kT)
        }
      })), WT[Symbol.asyncIterator] = function() {
        return this
      }, WT;

      function gT(TT, UT) {
        zT[TT] && (WT[TT] = function(UT) {
          return new Promise((function(mT, WT) {
            MT.push([TT, UT, mT, WT]) > 1 || nT(TT, UT)
          }))
        }, UT && (WT[TT] = UT(WT[TT])))
      }

      function nT(TT, UT) {
        try {
          (mT = zT[TT](UT)).value instanceof eT ? Promise.resolve(mT.value.v).then(HT, kT) : jT(MT[0][2], mT)
        } catch (WT) {
          jT(MT[0][3], WT)
        }
        var mT
      }

      function HT(TT) {
        nT("next", TT)
      }

      function kT(TT) {
        nT("throw", TT)
      }

      function jT(TT, UT) {
        TT(UT), MT.shift(), MT.length && nT(MT[0][0], MT[0][1])
      }
    }

    function JT(TT) {
      var UT, mT;
      return UT = {}, WT("next"), WT("throw", (function(TT) {
        throw TT
      })), WT("return"), UT[Symbol.iterator] = function() {
        return this
      }, UT;

      function WT(WT, zT) {
        UT[WT] = TT[WT] ? function(UT) {
          return (mT = !mT) ? {
            value: eT(TT[WT](UT)),
            done: !1
          } : zT ? zT(UT) : UT
        } : zT
      }
    }

    function xT(TT) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var UT, mT = TT[Symbol.asyncIterator];
      return mT ? mT.call(TT) : (TT = fT(TT), UT = {}, WT("next"), WT("throw"), WT("return"), UT[Symbol.asyncIterator] = function() {
        return this
      }, UT);

      function WT(mT) {
        UT[mT] = TT[mT] && function(UT) {
          return new Promise((function(WT, zT) {
            (function(TT, UT, mT, WT) {
              Promise.resolve(WT).then((function(UT) {
                TT({
                  value: UT,
                  done: mT
                })
              }), UT)
            })(WT, zT, (UT = TT[mT](UT)).done, UT.value)
          }))
        }
      }
    }

    function dT(TT, UT) {
      return Object.defineProperty ? Object.defineProperty(TT, "raw", {
        value: UT
      }) : TT.raw = UT, TT
    }
    var wT = Object.create ? function(TT, UT) {
        Object.defineProperty(TT, "default", {
          enumerable: !0,
          value: UT
        })
      } : function(TT, UT) {
        TT.default = UT
      },
      tT = function(TT) {
        return tT = Object.getOwnPropertyNames || function(TT) {
          var UT = [];
          for (var mT in TT) Object.prototype.hasOwnProperty.call(TT, mT) && (UT[UT.length] = mT);
          return UT
        }, tT(TT)
      };

    function aT(TT) {
      if (TT && TT.__esModule) return TT;
      var UT = {};
      if (null != TT)
        for (var mT = tT(TT), WT = 0; WT < mT.length; WT++) "default" !== mT[WT] && cT(UT, TT, mT[WT]);
      return wT(UT, TT), UT
    }

    function yT(TT) {
      return TT && TT.__esModule ? TT : {
        default: TT
      }
    }

    function XT(TT, UT, mT, WT) {
      if ("a" === mT && !WT) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof UT ? TT !== UT || !WT : !UT.has(TT)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === mT ? WT : "a" === mT ? WT.call(TT) : WT ? WT.value : UT.get(TT)
    }

    function IT(TT, UT, mT, WT, zT) {
      if ("m" === WT) throw new TypeError("Private method is not writable");
      if ("a" === WT && !zT) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof UT ? TT !== UT || !zT : !UT.has(TT)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === WT ? zT.call(TT, mT) : zT ? zT.value = mT : UT.set(TT, mT), mT
    }

    function QT(TT, UT) {
      if (null === UT || "object" !== typeof UT && "function" !== typeof UT) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof TT ? UT === TT : TT.has(UT)
    }

    function sT(TT, UT, mT) {
      if (null !== UT && void 0 !== UT) {
        if ("object" !== typeof UT && "function" !== typeof UT) throw new TypeError("Object expected.");
        var WT, zT;
        if (mT) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          WT = UT[Symbol.asyncDispose]
        }
        if (void 0 === WT) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          WT = UT[Symbol.dispose], mT && (zT = WT)
        }
        if ("function" !== typeof WT) throw new TypeError("Object not disposable.");
        zT && (WT = function() {
          try {
            zT.call(this)
          } catch (TT) {
            return Promise.reject(TT)
          }
        }), TT.stack.push({
          value: UT,
          dispose: WT,
          async: mT
        })
      } else mT && TT.stack.push({
        async: !0
      });
      return UT
    }
    var FT = "function" === typeof SuppressedError ? SuppressedError : function(TT, UT, mT) {
      var WT = new Error(mT);
      return WT.name = "SuppressedError", WT.error = TT, WT.suppressed = UT, WT
    };

    function PT(TT) {
      function UT(UT) {
        TT.error = TT.hasError ? new FT(UT, TT.error, "An error was suppressed during disposal.") : UT, TT.hasError = !0
      }
      var mT, WT = 0;
      return function zT() {
        for (; mT = TT.stack.pop();) try {
          if (!mT.async && 1 === WT) return WT = 0, TT.stack.push(mT), Promise.resolve().then(zT);
          if (mT.dispose) {
            var MT = mT.dispose.call(mT.value);
            if (mT.async) return WT |= 2, Promise.resolve(MT).then(zT, (function(TT) {
              return UT(TT), zT()
            }))
          } else WT |= 1
        } catch (gT) {
          UT(gT)
        }
        if (1 === WT) return TT.hasError ? Promise.reject(TT.error) : Promise.resolve();
        if (TT.hasError) throw TT.error
      }()
    }

    function VT(TT, UT) {
      return "string" === typeof TT && /^\.\.?\//.test(TT) ? TT.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(TT, mT, WT, zT, MT) {
        return mT ? UT ? ".jsx" : ".js" : !WT || zT && MT ? WT + zT + "." + MT.toLowerCase() + "js" : TT
      })) : TT
    }
    const uT = {
      __extends: zT,
      __assign: MT,
      __rest: gT,
      __decorate: nT,
      __param: HT,
      __esDecorate: kT,
      __runInitializers: jT,
      __propKey: lT,
      __setFunctionName: LT,
      __metadata: pT,
      __awaiter: BT,
      __generator: ZT,
      __createBinding: cT,
      __exportStar: vT,
      __values: fT,
      __read: qT,
      __spread: iT,
      __spreadArrays: bT,
      __spreadArray: OT,
      __await: eT,
      __asyncGenerator: YT,
      __asyncDelegator: JT,
      __asyncValues: xT,
      __makeTemplateObject: dT,
      __importStar: aT,
      __importDefault: yT,
      __classPrivateFieldGet: XT,
      __classPrivateFieldSet: IT,
      __classPrivateFieldIn: QT,
      __addDisposableResource: sT,
      __disposeResources: PT,
      __rewriteRelativeImportExtension: VT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);