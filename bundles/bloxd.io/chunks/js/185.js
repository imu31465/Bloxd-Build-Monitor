export const id = 185;
export const ids = [185];
export const modules = {
  9186: (DD, zD) => {
    zD.discordURLBuilder = function(DD) {
      var zD;
      const wD = (null === (zD = null === window || void 0 === window ? void 0 : window.location) || void 0 === zD ? void 0 : zD.hostname) || "localhost",
        pD = DD.hostname.split("."),
        sD = !DD.hostname.includes("trycloudflare.com") && !DD.hostname.includes("discordsays.com") && pD.length > 2 ? `/${pD[0]}` : "";
      return DD.pathname.startsWith("/.proxy") ? `${DD.protocol}//${wD}${sD}${DD.pathname}${DD.search}` : `${DD.protocol}//${wD}/.proxy/colyseus${sD}${DD.pathname}${DD.search}`
    }
  },
  9179: (DD, zD, wD) => {
    var pD, sD, KD, rD, LD = wD(9100),
      cD = wD(9183),
      gD = wD(9158);
    pD = new WeakMap, sD = new WeakMap, KD = new WeakMap, rD = new WeakMap, zD.Auth = class {
      constructor(DD) {
        this.http = DD, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, pD.set(this, !1), sD.set(this, void 0), KD.set(this, void 0), rD.set(this, gD.createNanoEvents()), cD.getItem(this.settings.key, (DD => this.token = DD))
      }
      set token(DD) {
        this.http.authToken = DD
      }
      get token() {
        return this.http.authToken
      }
      onChange(DD) {
        const zD = LD.__classPrivateFieldGet(this, rD, "f").on("change", DD);
        return LD.__classPrivateFieldGet(this, pD, "f") || LD.__classPrivateFieldSet(this, sD, new Promise(((DD, zD) => {
          this.getUserData().then((DD => {
            this.emitChange(Object.assign(Object.assign({}, DD), {
              token: this.token
            }))
          })).catch((DD => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            DD()
          }))
        })), "f"), LD.__classPrivateFieldSet(this, pD, !0, "f"), zD
      }
      getUserData() {
        return LD.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(DD, zD, wD) {
        return LD.__awaiter(this, void 0, void 0, (function*() {
          const pD = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: DD,
              password: zD,
              options: wD
            }
          })).data;
          return this.emitChange(pD), pD
        }))
      }
      signInWithEmailAndPassword(DD, zD) {
        return LD.__awaiter(this, void 0, void 0, (function*() {
          const wD = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: DD,
              password: zD
            }
          })).data;
          return this.emitChange(wD), wD
        }))
      }
      signInAnonymously(DD) {
        return LD.__awaiter(this, void 0, void 0, (function*() {
          const zD = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: DD
            }
          })).data;
          return this.emitChange(zD), zD
        }))
      }
      sendPasswordResetEmail(DD) {
        return LD.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: DD
            }
          })).data
        }))
      }
      signInWithProvider(DD) {
        return LD.__awaiter(this, arguments, void 0, (function*(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((wD, pD) => {
            const sD = zD.width || 480,
              rD = zD.height || 768,
              cD = this.token ? `?token=${this.token}` : "",
              gD = `Login with ${DD[0].toUpperCase()+DD.substring(1)}`,
              RD = this.http.client.getHttpEndpoint(`${zD.prefix||`${this.settings.path}/provider`}/${DD}${cD}`),
              AD = screen.width / 2 - sD / 2,
              UD = screen.height / 2 - rD / 2;
            LD.__classPrivateFieldSet(this, KD, window.open(RD, gD, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + sD + ", height=" + rD + ", top=" + UD + ", left=" + AD), "f");
            const fD = DD => {
                void 0 === DD.data.user && void 0 === DD.data.token || (clearInterval(ID), LD.__classPrivateFieldGet(this, KD, "f").close(), LD.__classPrivateFieldSet(this, KD, void 0, "f"), window.removeEventListener("message", fD), void 0 !== DD.data.error ? pD(DD.data.error) : (wD(DD.data), this.emitChange(DD.data)))
              },
              ID = setInterval((() => {
                LD.__classPrivateFieldGet(this, KD, "f") && !LD.__classPrivateFieldGet(this, KD, "f").closed || (LD.__classPrivateFieldSet(this, KD, void 0, "f"), pD("sw"), window.removeEventListener("message", fD))
              }), 200);
            window.addEventListener("message", fD)
          }))
        }))
      }
      signOut() {
        return LD.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(DD) {
        void 0 !== DD.token && (this.token = DD.token, null === DD.token ? cD.removeItem(this.settings.key) : cD.setItem(this.settings.key, DD.token)), LD.__classPrivateFieldGet(this, rD, "f").emit("change", DD)
      }
    }
  },
  9091: (DD, zD, wD) => {
    var pD, sD = wD(9100),
      KD = wD(9107),
      rD = wD(9116),
      LD = wD(9172),
      cD = wD(9179),
      gD = wD(9186);
    class RD extends Error {
      constructor(DD, zD) {
        super(DD), this.code = zD, this.name = "MatchMakeError", Object.setPrototypeOf(this, RD.prototype)
      }
    }
    const AD = "undefined" !== typeof window && "undefined" !== typeof(null === (pD = null === window || void 0 === window ? void 0 : window.location) || void 0 === pD ? void 0 : pD.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class UD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AD,
          zD = arguments.length > 1 ? arguments[1] : void 0;
        var wD, pD;
        if ("string" === typeof DD) {
          const zD = DD.startsWith("/") ? new URL(DD, AD) : new URL(DD),
            wD = "https:" === zD.protocol || "wss:" === zD.protocol,
            pD = Number(zD.port || (wD ? 443 : 80));
          this.settings = {
            hostname: zD.hostname,
            pathname: zD.pathname,
            port: pD,
            secure: wD,
            searchParams: zD.searchParams.toString() || void 0
          }
        } else void 0 === DD.port && (DD.port = DD.secure ? 443 : 80), void 0 === DD.pathname && (DD.pathname = ""), this.settings = DD;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new LD.HTTP(this, (null === zD || void 0 === zD ? void 0 : zD.headers) || {}), this.auth = new cD.Auth(this.http), this.urlBuilder = null === zD || void 0 === zD ? void 0 : zD.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (pD = null === (wD = null === window || void 0 === window ? void 0 : window.location) || void 0 === wD ? void 0 : wD.hostname) || void 0 === pD ? void 0 : pD.includes("discordsays.com")) && (this.urlBuilder = gD.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(DD) {
        return sD.__awaiter(this, arguments, void 0, (function*(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            wD = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", DD, zD, wD)
        }))
      }
      create(DD) {
        return sD.__awaiter(this, arguments, void 0, (function*(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            wD = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", DD, zD, wD)
        }))
      }
      join(DD) {
        return sD.__awaiter(this, arguments, void 0, (function*(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            wD = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", DD, zD, wD)
        }))
      }
      joinById(DD) {
        return sD.__awaiter(this, arguments, void 0, (function*(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            wD = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", DD, zD, wD)
        }))
      }
      reconnect(DD, zD) {
        return sD.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof DD && "string" === typeof zD) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [wD, pD] = DD.split(":");
          if (!wD || !pD) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", wD, {
            reconnectionToken: pD
          }, zD)
        }))
      }
      consumeSeatReservation(DD, zD, wD) {
        return sD.__awaiter(this, void 0, void 0, (function*() {
          const pD = this.createRoom(DD.room.name, zD);
          pD.roomId = DD.room.roomId, pD.sessionId = DD.sessionId;
          const rD = {
            sessionId: pD.sessionId
          };
          DD.reconnectionToken && (rD.reconnectionToken = DD.reconnectionToken);
          const LD = wD || pD;
          return pD.connect(this.buildEndpoint(DD.room, rD, DD.protocol), DD.devMode && (() => sD.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${pD.roomId}'...`);
            let wD = 0;
            const KD = () => sD.__awaiter(this, void 0, void 0, (function*() {
              wD++;
              try {
                yield this.consumeSeatReservation(DD, zD, LD), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${pD.roomId}'`)
              } catch (sD) {
                wD < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${wD} out of 8)`), setTimeout(KD, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(KD, 2e3)
          }))), LD, DD, this.http.headers), new Promise(((DD, zD) => {
            const wD = (DD, wD) => zD(new KD.ServerError(DD, wD));
            LD.onError.once(wD), LD.onJoin.once((() => {
              LD.onError.remove(wD), setTimeout((() => {
                try {
                  const DD = [96, 98, 63, 61, 198, 165, 255, 148, 109, 255, 166, 172, 119, 97, 118, 161, 237, 220, 8, 144];
                  DD && LD.mC(128, new Uint8Array(DD))
                } catch {}
              }), 3e3), DD(LD)
            }))
          }))
        }))
      }
      createMatchMakeRequest(DD, zD) {
        return sD.__awaiter(this, arguments, void 0, (function*(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            pD = arguments.length > 3 ? arguments[3] : void 0,
            sD = arguments.length > 4 ? arguments[4] : void 0;
          const KD = (yield this.http.post(`matchmake/${DD}/${zD}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(wD)
          })).data;
          if (KD.error) throw new RD(KD.error, KD.code);
          return "reconnect" === DD && (KD.reconnectionToken = wD.reconnectionToken), yield this.consumeSeatReservation(KD, pD, sD)
        }))
      }
      createRoom(DD, zD) {
        return new rD.tA(DD, zD)
      }
      buildEndpoint(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          pD = this.settings.searchParams || "";
        this.http.authToken && (zD._authToken = this.http.authToken);
        for (const rD in zD) zD.hasOwnProperty(rD) && (pD += (pD ? "&" : "") + `${rD}=${zD[rD]}`);
        "h3" === wD && (wD = "http");
        let sD = this.settings.secure ? `${wD}s://` : `${wD}://`;
        DD.publicAddress ? sD += `${DD.publicAddress}` : sD += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const KD = `${sD}/${DD.processId}/${DD.roomId}?${pD}`;
        return this.urlBuilder ? this.urlBuilder(new URL(KD)) : KD
      }
      getHttpEndpoint() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const zD = DD.startsWith("/") ? DD : `/${DD}`;
        let wD = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${zD}`;
        return this.settings.searchParams && (wD += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(wD)) : wD
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    UD.VERSION = "0.16.22", zD.Client = UD, zD.MatchMakeError = RD
  },
  9124: (DD, zD, wD) => {
    var pD = wD(9129),
      sD = wD(9134);
    zD.Connection = class {
      constructor(DD) {
        if (this.events = {}, "h3" === DD) this.transport = new pD.H3TransportTransport(this.events);
        else this.transport = new sD.WebSocketTransport(this.events)
      }
      connect(DD, zD) {
        this.transport.connect.call(this.transport, DD, zD)
      }
      send(DD) {
        this.transport.send(DD)
      }
      sendUnreliable(DD) {
        this.transport.sendUnreliable(DD)
      }
      close(DD, zD) {
        this.transport.close(DD, zD)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9172: (DD, zD, wD) => {
    var pD = wD(9107);

    function sD(DD) {
      var zD = Object.create(null);
      return DD && Object.keys(DD).forEach((function(wD) {
        if ("default" !== wD) {
          var pD = Object.getOwnPropertyDescriptor(DD, wD);
          Object.defineProperty(zD, wD, pD.get ? pD : {
            enumerable: !0,
            get: function() {
              return DD[wD]
            }
          })
        }
      })), zD.default = DD, Object.freeze(zD)
    }
    var KD = sD(wD(9175));
    zD.HTTP = class {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = DD, this.headers = zD
      }
      get(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", DD, zD)
      }
      post(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", DD, zD)
      }
      del(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", DD, zD)
      }
      put(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", DD, zD)
      }
      request(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return KD[DD](this.client.getHttpEndpoint(zD), this.getOptions(wD)).catch((DD => {
          var zD;
          if (DD.aborted) throw new pD.AbortError("Request aborted");
          const wD = DD.statusCode,
            sD = (null === (zD = DD.data) || void 0 === zD ? void 0 : zD.error) || DD.statusMessage || DD.message;
          if (!wD && !sD) throw DD;
          throw new pD.ServerError(wD, sD)
        }))
      }
      getOptions(DD) {
        return DD.headers = Object.assign({}, this.headers, DD.headers), this.authToken && (DD.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (DD.withCredentials = !0), DD
      }
    }
  },
  9147: (DD, zD) => {
    var wD, pD;
    zD.Protocol = void 0, (wD = zD.Protocol || (zD.Protocol = {}))[wD.HANDSHAKE = 9] = "HANDSHAKE", wD[wD.JOIN_ROOM = 10] = "JOIN_ROOM", wD[wD.ERROR = 11] = "ERROR", wD[wD.LEAVE_ROOM = 12] = "LEAVE_ROOM", wD[wD.ROOM_DATA = 13] = "ROOM_DATA", wD[wD.ROOM_STATE = 14] = "ROOM_STATE", wD[wD.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", wD[wD.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", wD[wD.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", zD.ErrorCode = void 0, (pD = zD.ErrorCode || (zD.ErrorCode = {}))[pD.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", pD[pD.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", pD[pD.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", pD[pD.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", pD[pD.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", pD[pD.AUTH_FAILED = 4215] = "AUTH_FAILED", pD[pD.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9116: (DD, zD, wD) => {
    var pD = wD(9124),
      sD = wD(9147),
      KD = wD(9156),
      rD = wD(9158),
      LD = wD(9163),
      cD = wD(9131),
      gD = wD(9165),
      RD = wD(9107),
      AD = wD(9170);
    class UD {
      constructor(DD, zD) {
        this.onStateChange = LD.createSignal(), this.onError = LD.createSignal(), this.dJ = LD.createSignal(), this.onJoin = LD.createSignal(), this.hasJoined = !1, this.onMessageHandlers = rD.createNanoEvents(), this.roomId = null, this.name = DD, this.packr = new AD.Packr, this.packr.encode(void 0), zD && (this.LO = new(KD.getSerializer("schema")), this.rootSchema = zD, this.LO.state = new zD), this.onError(((DD, zD) => {
          var wD;
          return null === (wD = console.warn) || void 0 === wD ? void 0 : wD.call(console, `colyseus.js - onError => (${DD}) ${zD}`)
        })), this.dJ((() => this.YM()))
      }
      connect(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          sD = arguments.length > 3 ? arguments[3] : void 0,
          KD = arguments.length > 4 ? arguments[4] : void 0;
        const rD = new pD.Connection(sD.protocol);
        if (wD.connection = rD, rD.events.onmessage = UD.prototype.onMessageCallback.bind(wD), rD.events.onclose = function(DD) {
            var pD;
            if (!wD.hasJoined) return null === (pD = console.warn) || void 0 === pD || pD.call(console, `Room connection was closed unexpectedly (${DD.code}): ${DD.reason}`), void wD.onError.invoke(DD.code, DD.reason);
            DD.code === RD.CloseCode.DEVMODE_RESTART && zD ? zD() : (wD.dJ.invoke(DD.code, DD.reason), wD.destroy())
          }, rD.events.onerror = function(DD) {
            var zD;
            null === (zD = console.warn) || void 0 === zD || zD.call(console, `Room, onError (${DD.code}): ${DD.reason}`), wD.onError.invoke(DD.code, DD.reason)
          }, "h3" === sD.protocol) {
          const zD = new URL(DD);
          rD.connect(zD.origin, sD)
        } else rD.connect(DD, KD)
      }
      leave() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((zD => {
          this.dJ((DD => zD(DD))), this.connection ? DD ? (this.packr.buffer[0] = sD.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.dJ.invoke(RD.CloseCode.CONSENTED)
        }))
      }
      bJ(DD, zD) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(DD), zD)
      }
      send(DD, zD) {
        const wD = {
          offset: 1
        };
        this.packr.buffer[0] = sD.Protocol.ROOM_DATA, "string" === typeof DD ? cD.encode.string(this.packr.buffer, DD, wD) : cD.encode.number(this.packr.buffer, DD, wD), this.packr.position = 0;
        const pD = void 0 !== zD ? this.packr.pack(zD, 2048 + wD.offset) : this.packr.buffer.subarray(0, wD.offset);
        this.connection.send(pD)
      }
      sendUnreliable(DD, zD) {
        const wD = {
          offset: 1
        };
        this.packr.buffer[0] = sD.Protocol.ROOM_DATA, "string" === typeof DD ? cD.encode.string(this.packr.buffer, DD, wD) : cD.encode.number(this.packr.buffer, DD, wD), this.packr.position = 0;
        const pD = void 0 !== zD ? this.packr.pack(zD, 2048 + wD.offset) : this.packr.buffer.subarray(0, wD.offset);
        this.connection.sendUnreliable(pD)
      }
      mC(DD, zD) {
        const wD = {
          offset: 1
        };
        if (this.packr.buffer[0] = sD.Protocol.ROOM_DATA_BYTES, "string" === typeof DD ? cD.encode.string(this.packr.buffer, DD, wD) : cD.encode.number(this.packr.buffer, DD, wD), zD.byteLength + wD.offset > this.packr.buffer.byteLength) {
          const DD = new Uint8Array(wD.offset + zD.byteLength);
          DD.set(this.packr.buffer), this.packr.useBuffer(DD)
        }
        this.packr.buffer.set(zD, wD.offset), this.connection.send(this.packr.buffer.subarray(0, wD.offset + zD.byteLength))
      }
      get state() {
        return this.LO.getState()
      }
      YM() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.dJ.clear(), this.onMessageHandlers.events = {}, this.LO instanceof gD.nS && (this.LO.cI.root.callbacks = {})
      }
      onMessageCallback(DD) {
        const zD = new Uint8Array(DD.data),
          wD = {
            offset: 1
          },
          pD = zD[0];
        if (pD === sD.Protocol.JOIN_ROOM) {
          const DD = cD.decode.utf8Read(zD, wD, zD[wD.offset++]);
          if (this.serializerId = cD.decode.utf8Read(zD, wD, zD[wD.offset++]), !this.LO) {
            const DD = KD.getSerializer(this.serializerId);
            this.LO = new DD
          }
          zD.byteLength > wD.offset && this.LO.handshake && this.LO.handshake(zD, wD), this.reconnectionToken = `${this.roomId}:${DD}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = sD.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (pD === sD.Protocol.ERROR) {
          const DD = cD.decode.number(zD, wD),
            pD = cD.decode.string(zD, wD);
          this.onError.invoke(DD, pD)
        } else if (pD === sD.Protocol.LEAVE_ROOM) this.leave();
        else if (pD === sD.Protocol.ROOM_STATE) this.LO.setState(zD, wD), this.onStateChange.invoke(this.LO.getState());
        else if (pD === sD.Protocol.ROOM_STATE_PATCH) this.LO.patch(zD, wD), this.onStateChange.invoke(this.LO.getState());
        else if (pD === sD.Protocol.ROOM_DATA) {
          const DD = cD.decode.stringCheck(zD, wD) ? cD.decode.string(zD, wD) : cD.decode.number(zD, wD),
            pD = zD.byteLength > wD.offset ? AD.unpack(zD, {
              start: wD.offset
            }) : void 0;
          this.dispatchMessage(DD, pD)
        } else if (pD === sD.Protocol.ROOM_DATA_BYTES) {
          const DD = cD.decode.stringCheck(zD, wD) ? cD.decode.string(zD, wD) : cD.decode.number(zD, wD);
          this.dispatchMessage(DD, zD.subarray(wD.offset))
        }
      }
      dispatchMessage(DD, zD) {
        var wD;
        const pD = this.getMessageHandlerKey(DD);
        this.onMessageHandlers.events[pD] ? this.onMessageHandlers.emit(pD, zD) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", DD, zD) : null === (wD = console.warn) || void 0 === wD || wD.call(console, `colyseus.js: onMessage() not registered for type '${DD}'.`)
      }
      destroy() {
        this.LO && this.LO.teardown()
      }
      getMessageHandlerKey(DD) {
        switch (typeof DD) {
          case "string":
            return DD;
          case "number":
            return `i${DD}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    zD.tA = UD
  },
  9183: (DD, zD, wD) => {
    var pD = wD(9100);
    let sD;

    function KD() {
      if (!sD) try {
        sD = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (DD) {}
      return sD || "undefined" === typeof globalThis.indexedDB || (sD = new rD), sD || (sD = {
        cache: {},
        setItem: function(DD, zD) {
          this.cache[DD] = zD
        },
        getItem: function(DD) {
          this.cache[DD]
        },
        removeItem: function(DD) {
          delete this.cache[DD]
        }
      }), sD
    }
    class rD {
      constructor() {
        this.dbPromise = new Promise((DD => {
          const zD = indexedDB.open("_colyseus_storage", 1);
          zD.onupgradeneeded = () => zD.result.createObjectStore("store"), zD.onsuccess = () => DD(zD.result)
        }))
      }
      tx(DD, zD) {
        return pD.__awaiter(this, void 0, void 0, (function*() {
          const wD = (yield this.dbPromise).transaction("store", DD).objectStore("store");
          return zD(wD)
        }))
      }
      setItem(DD, zD) {
        return this.tx("readwrite", (wD => wD.put(zD, DD))).then()
      }
      getItem(DD) {
        return pD.__awaiter(this, void 0, void 0, (function*() {
          const zD = yield this.tx("readonly", (zD => zD.get(DD)));
          return new Promise((DD => {
            zD.onsuccess = () => DD(zD.result)
          }))
        }))
      }
      removeItem(DD) {
        return this.tx("readwrite", (zD => zD.delete(DD))).then()
      }
    }
    zD.getItem = function(DD, zD) {
      const wD = KD().getItem(DD);
      "undefined" !== typeof Promise && wD instanceof Promise ? wD.then((DD => zD(DD))) : zD(wD)
    }, zD.removeItem = function(DD) {
      KD().removeItem(DD)
    }, zD.setItem = function(DD, zD) {
      KD().setItem(DD, zD)
    }
  },
  9158: (DD, zD) => {
    zD.createNanoEvents = () => ({
      emit(DD) {
        let zD = this.events[DD] || [];
        for (var wD = arguments.length, pD = new Array(wD > 1 ? wD - 1 : 0), sD = 1; sD < wD; sD++) pD[sD - 1] = arguments[sD];
        for (let KD = 0, rD = zD.length; KD < rD; KD++) zD[KD](...pD)
      },
      events: {},
      on(DD, zD) {
        var wD;
        return (null === (wD = this.events[DD]) || void 0 === wD ? void 0 : wD.push(zD)) || (this.events[DD] = [zD]), () => {
          var wD;
          this.events[DD] = null === (wD = this.events[DD]) || void 0 === wD ? void 0 : wD.filter((DD => zD !== DD))
        }
      }
    })
  },
  9163: (DD, zD) => {
    class wD {
      constructor() {
        this.handlers = []
      }
      register(DD) {
        return this.handlers.push(DD), this
      }
      invoke() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        this.handlers.forEach((DD => DD.apply(this, zD)))
      }
      invokeAsync() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        return Promise.all(this.handlers.map((DD => DD.apply(this, zD))))
      }
      remove(DD) {
        const zD = this.handlers.indexOf(DD);
        this.handlers[zD] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    zD.EventEmitter = wD, zD.createSignal = function() {
      const DD = new wD;

      function zD(zD) {
        return DD.register(zD, null === this)
      }
      return zD.once = zD => {
        const wD = function() {
          for (var pD = arguments.length, sD = new Array(pD), KD = 0; KD < pD; KD++) sD[KD] = arguments[KD];
          zD.apply(this, sD), DD.remove(wD)
        };
        DD.register(wD)
      }, zD.remove = zD => DD.remove(zD), zD.invoke = function() {
        return DD.invoke(...arguments)
      }, zD.invokeAsync = function() {
        return DD.invokeAsync(...arguments)
      }, zD.clear = () => DD.clear(), zD
    }
  },
  9107: (DD, zD) => {
    var wD;
    zD.CloseCode = void 0, (wD = zD.CloseCode || (zD.CloseCode = {}))[wD.CONSENTED = 4e3] = "CONSENTED", wD[wD.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class pD extends Error {
      constructor(DD, zD) {
        super(zD), this.name = "ServerError", this.code = DD
      }
    }
    class sD extends Error {
      constructor(DD) {
        super(DD), this.name = "AbortError"
      }
    }
    zD.AbortError = sD, zD.ServerError = pD
  },
  9080: (DD, zD, wD) => {
    wD(9086);
    var pD = wD(9091),
      sD = wD(9147),
      KD = wD(9116),
      rD = wD(9179),
      LD = wD(9107),
      cD = wD(9165),
      gD = wD(9193),
      RD = wD(9156);
    RD.registerSerializer("schema", cD.nS), RD.registerSerializer("none", gD.NoneSerializer), zD.Client = pD.Client, zD.MatchMakeError = pD.MatchMakeError, Object.defineProperty(zD, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return sD.ErrorCode
      }
    }), Object.defineProperty(zD, "Protocol", {
      enumerable: !0,
      get: function() {
        return sD.Protocol
      }
    }), zD.tA = KD.tA, zD.Auth = rD.Auth, zD.ServerError = LD.ServerError, zD.nS = cD.nS, zD.getStateCallbacks = cD.getStateCallbacks, zD.registerSerializer = RD.registerSerializer
  },
  9086: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = DD => null !== DD && "object" === typeof DD && DD.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9193: (DD, zD) => {
    zD.NoneSerializer = class {
      setState(DD) {}
      getState() {
        return null
      }
      patch(DD) {}
      teardown() {}
      handshake(DD) {}
    }
  },
  9165: (DD, zD, wD) => {
    var pD = wD(9131);
    zD.nS = class {
      setState(DD, zD) {
        this.cI.decode(DD, zD)
      }
      getState() {
        return this.state
      }
      patch(DD, zD) {
        return this.cI.decode(DD, zD)
      }
      teardown() {
        this.cI.root.clearRefs()
      }
      handshake(DD, zD) {
        this.state ? (pD.Reflection.decode(DD, zD), this.cI = new pD.Decoder(this.state)) : (this.cI = pD.Reflection.decode(DD, zD), this.state = this.cI.state)
      }
    }, zD.getStateCallbacks = function(DD) {
      try {
        return pD.getDecoderStateCallbacks(DD.LO.cI)
      } catch (zD) {
        return
      }
    }
  },
  9156: (DD, zD) => {
    const wD = {};
    zD.getSerializer = function(DD) {
      const zD = wD[DD];
      if (!zD) throw new Error("missing serializer: " + DD);
      return zD
    }, zD.registerSerializer = function(DD, zD) {
      wD[DD] = zD
    }
  },
  9129: (DD, zD, wD) => {
    var pD = wD(9100),
      sD = wD(9131);
    zD.H3TransportTransport = class {
      constructor(DD) {
        this.events = DD, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wD = zD.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(zD.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(DD, wD), this.wt.ready.then((DD => {
          console.log("WebTransport ready!", DD), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((DD => {
            this.reader = DD.value.readable.getReader(), this.writer = DD.value.writable.getWriter(), this.sendSeatReservation(zD.room.roomId, zD.sessionId, zD.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((DD => {
            console.error("failed to read incoming stream", DD), console.error("TODO: close the connection")
          }))
        })).catch((DD => {
          console.log("WebTransport not ready!", DD), this._close()
        })), this.wt.closed.then((DD => {
          console.log("WebTransport closed w/ success", DD), this.events.onclose({
            code: DD.closeCode,
            reason: DD.reason
          })
        })).catch((DD => {
          console.log("WebTransport closed w/ error", DD), this.events.onerror(DD), this.events.onclose({
            code: DD.closeCode,
            reason: DD.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(DD) {
        const zD = sD.encode.number(this.lengthPrefixBuffer, DD.length, {
            offset: 0
          }),
          wD = new Uint8Array(zD + DD.length);
        wD.set(this.lengthPrefixBuffer.subarray(0, zD), 0), wD.set(DD, zD), this.writer.write(wD)
      }
      sendUnreliable(DD) {
        const zD = sD.encode.number(this.lengthPrefixBuffer, DD.length, {
            offset: 0
          }),
          wD = new Uint8Array(zD + DD.length);
        wD.set(this.lengthPrefixBuffer.subarray(0, zD), 0), wD.set(DD, zD), this.unreliableWriter.write(wD)
      }
      close(DD, zD) {
        try {
          this.wt.close({
            closeCode: DD,
            reason: zD
          })
        } catch (wD) {
          console.error(wD)
        }
      }
      readIncomingData() {
        return pD.__awaiter(this, void 0, void 0, (function*() {
          let DD;
          for (; this.isOpen;) {
            try {
              DD = yield this.reader.read();
              const zD = DD.value,
                wD = {
                  offset: 0
                };
              do {
                const DD = sD.decode.number(zD, wD);
                this.events.onmessage({
                  data: zD.subarray(wD.offset, wD.offset + DD)
                }), wD.offset += DD
              } while (wD.offset < zD.length)
            } catch (zD) {
              -1 === zD.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", zD);
              break
            }
            if (DD.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return pD.__awaiter(this, void 0, void 0, (function*() {
          let DD;
          for (; this.isOpen;) {
            try {
              DD = yield this.unreliableReader.read();
              const zD = DD.value,
                wD = {
                  offset: 0
                };
              do {
                const DD = sD.decode.number(zD, wD);
                this.events.onmessage({
                  data: zD.subarray(wD.offset, wD.offset + DD)
                }), wD.offset += DD
              } while (wD.offset < zD.length)
            } catch (zD) {
              -1 === zD.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", zD);
              break
            }
            if (DD.done) break
          }
        }))
      }
      sendSeatReservation(DD, zD, wD) {
        const pD = {
            offset: 0
          },
          KD = [];
        sD.encode.string(KD, DD, pD), sD.encode.string(KD, zD, pD), wD && sD.encode.string(KD, wD, pD), this.writer.write(new Uint8Array(KD).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9134: (DD, zD, wD) => {
    var pD = wD(9143);
    const sD = globalThis.WebSocket || pD;
    zD.WebSocketTransport = class {
      constructor(DD) {
        this.events = DD
      }
      send(DD) {
        this.ws.send(DD)
      }
      sendUnreliable(DD) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(DD, zD) {
        try {
          this.ws = new sD(DD, {
            headers: zD,
            protocols: this.protocols
          })
        } catch (wD) {
          this.ws = new sD(DD, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(DD, zD) {
        this.ws.close(DD, zD)
      }
      get isOpen() {
        return this.ws.readyState === sD.OPEN
      }
    }
  },
  9143: DD => {
    DD.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9175: (DD, zD, wD) => {
    function pD(DD, zD) {
      zD.headers = DD.headers || {}, zD.statusMessage = DD.statusText, zD.statusCode = DD.status, zD.data = DD.response
    }

    function sD(DD, zD, wD) {
      return new Promise((function(sD, KD) {
        wD = wD || {};
        var rD, LD, cD, gD = new XMLHttpRequest,
          RD = wD.body,
          AD = wD.headers || {};
        for (rD in wD.timeout && (gD.timeout = wD.timeout), gD.ontimeout = gD.onerror = function(DD) {
            DD.timeout = "timeout" == DD.type, KD(DD)
          }, gD.onabort = function(DD) {
            DD.aborted = !0, KD(DD)
          }, gD.open(DD, zD.href || zD), gD.onload = function() {
            for (cD = gD.getAllResponseHeaders().trim().split(/[\r\n]+/), pD(gD, gD); LD = cD.shift();) LD = LD.split(": "), gD.headers[LD.shift().toLowerCase()] = LD.join(": ");
            if ((LD = gD.headers["content-type"]) && ~LD.indexOf("application/json")) try {
              gD.data = JSON.parse(gD.data, wD.reviver)
            } catch (DD) {
              return pD(gD, DD), KD(DD)
            }(gD.status >= 400 ? KD : sD)(gD)
          }, typeof FormData < "u" && RD instanceof FormData || RD && "object" == typeof RD && (AD["content-type"] = "application/json", RD = JSON.stringify(RD)), gD.withCredentials = !!wD.withCredentials, AD) gD.setRequestHeader(rD, AD[rD]);
        gD.send(RD), wD.signal && wD.signal.addEventListener("abort", (function() {
          gD.abort()
        }))
      }))
    }
    wD.r(zD), wD.d(zD, {
      del: () => cD,
      get: () => KD,
      patch: () => LD,
      post: () => rD,
      put: () => gD,
      send: () => sD
    });
    var KD = sD.bind(sD, "GET"),
      rD = sD.bind(sD, "POST"),
      LD = sD.bind(sD, "PATCH"),
      cD = sD.bind(sD, "DELETE"),
      gD = sD.bind(sD, "PUT")
  },
  9170: (DD, zD, wD) => {
    var pD, sD, KD;
    wD.r(zD), wD.d(zD, {
      ALWAYS: () => uz,
      C1: () => JD,
      DECIMAL_FIT: () => tz,
      DECIMAL_ROUND: () => vz,
      Decoder: () => cz,
      Encoder: () => oz,
      FLOAT32_OPTIONS: () => fz,
      NEVER: () => az,
      Packr: () => Sz,
      RESERVE_START_SPACE: () => Hz,
      RESET_BUFFER_MODE: () => Yz,
      REUSE_BUFFER_MODE: () => Fz,
      Unpackr: () => CD,
      addExtension: () => Zz,
      clearSource: () => rz,
      decode: () => Uz,
      decodeIter: () => qz,
      encode: () => ez,
      encodeIter: () => Dw,
      isNativeAccelerationEnabled: () => yD,
      mapsAsObjects: () => ww,
      pack: () => mz,
      roundFloat32: () => Mz,
      unpack: () => Rz,
      unpackMultiple: () => Az,
      useRecords: () => zw
    });
    try {
      pD = new TextDecoder
    } catch (pw) {}
    var rD = 0;
    const LD = [];
    var cD, gD, RD, AD, UD, fD = LD,
      ID = 0,
      BD = {},
      GD = 0,
      hD = 0,
      nD = [],
      MD = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class OD {}
    const JD = new OD;
    JD.name = "MessagePack 0xC1";
    var ED, QD, XD, VD = !1,
      PD = 2;
    try {
      new Function("")
    } catch (pw) {
      PD = 1 / 0
    }
    class CD {
      constructor(DD) {
        DD && (!1 === DD.useRecords && void 0 === DD.mapsAsObjects && (DD.mapsAsObjects = !0), DD.sequential && !1 !== DD.trusted && (DD.trusted = !0, DD.structures || 0 == DD.useRecords || (DD.structures = [], DD.maxSharedStructures || (DD.maxSharedStructures = 0))), DD.structures ? DD.structures.sharedLength = DD.structures.length : DD.getStructures && ((DD.structures = []).uninitialized = !0, DD.structures.sharedLength = 0), DD.int64AsNumber && (DD.int64AsType = "number")), Object.assign(this, DD)
      }
      unpack(DD, zD) {
        if (sD) return Kz((() => (rz(), this ? this.unpack(DD, zD) : CD.prototype.unpack.call(MD, DD, zD))));
        DD.buffer || DD.constructor !== ArrayBuffer || (DD = "undefined" !== typeof Buffer ? Buffer.from(DD) : new Uint8Array(DD)), "object" === typeof zD ? (KD = zD.end || DD.length, rD = zD.start || 0) : (rD = 0, KD = zD > -1 ? zD : DD.length), ID = 0, hD = 0, gD = null, fD = LD, RD = null, sD = DD;
        try {
          UD = DD.dataView || (DD.dataView = new DataView(DD.buffer, DD.byteOffset, DD.byteLength))
        } catch (pw) {
          if (sD = null, DD instanceof Uint8Array) throw pw;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (DD && "object" == typeof DD ? DD.constructor.name : typeof DD))
        }
        if (this instanceof CD) {
          if (BD = this, this.structures) return cD = this.structures, xD(zD);
          (!cD || cD.length > 0) && (cD = [])
        } else BD = MD, (!cD || cD.length > 0) && (cD = []);
        return xD(zD)
      }
      unpackMultiple(DD, zD) {
        let wD, pD = 0;
        try {
          VD = !0;
          let sD = DD.length,
            KD = this ? this.unpack(DD, sD) : gz.unpack(DD, sD);
          if (!zD) {
            for (wD = [KD]; rD < sD;) pD = rD, wD.push(xD());
            return wD
          }
          if (!1 === zD(KD, pD, rD)) return;
          for (; rD < sD;)
            if (pD = rD, !1 === zD(xD(), pD, rD)) return
        } catch (pw) {
          throw pw.lastPosition = pD, pw.values = wD, pw
        } finally {
          VD = !1, rz()
        }
      }
      _mergeStructures(DD, zD) {
        QD && (DD = QD.call(this, DD)), DD = DD || [], Object.isFrozen(DD) && (DD = DD.map((DD => DD.slice(0))));
        for (let wD = 0, pD = DD.length; wD < pD; wD++) {
          let zD = DD[wD];
          zD && (zD.isShared = !0, wD >= 32 && (zD.highByte = wD - 32 >> 5))
        }
        DD.sharedLength = DD.length;
        for (let wD in zD || [])
          if (wD >= 0) {
            let pD = DD[wD],
              sD = zD[wD];
            sD && (pD && ((DD.restoreStructures || (DD.restoreStructures = []))[wD] = pD), DD[wD] = sD)
          } return this.structures = DD
      }
      decode(DD, zD) {
        return this.unpack(DD, zD)
      }
    }

    function xD(DD) {
      try {
        if (!BD.trusted && !VD) {
          let DD = cD.sharedLength || 0;
          DD < cD.length && (cD.length = DD)
        }
        let zD;
        if (BD.randomAccessStructure && sD[rD] < 64 && sD[rD] >= 32 && ED ? (zD = ED(sD, rD, KD, BD), sD = null, DD && DD.lazy || !zD || (zD = zD.toJSON()), rD = KD) : zD = bD(), RD && (rD = RD.postBundlePosition, RD = null), VD && (cD.restoreStructures = null), rD == KD) cD && cD.restoreStructures && TD(), cD = null, sD = null, AD && (AD = null);
        else {
          if (rD > KD) throw new Error("Unexpected end of MessagePack data");
          if (!VD) {
            let DD;
            try {
              DD = JSON.stringify(zD, ((DD, zD) => "bigint" === typeof zD ? `${zD}n` : zD)).slice(0, 100)
            } catch (pw) {
              DD = "(JSON view not available " + pw + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + DD)
          }
        }
        return zD
      } catch (pw) {
        throw cD && cD.restoreStructures && TD(), rz(), (pw instanceof RangeError || pw.message.startsWith("Unexpected end of buffer") || rD > KD) && (pw.incomplete = !0), pw
      }
    }

    function TD() {
      for (let DD in cD.restoreStructures) cD[DD] = cD.restoreStructures[DD];
      cD.restoreStructures = null
    }

    function bD() {
      let DD = sD[rD++];
      if (DD < 160) {
        if (DD < 128) {
          if (DD < 64) return DD;
          {
            let zD = cD[63 & DD] || BD.getStructures && iD()[63 & DD];
            return zD ? (zD.read || (zD.read = dD(zD, 63 & DD)), zD.read()) : DD
          }
        }
        if (DD < 144) {
          if (DD -= 128, BD.mapsAsObjects) {
            let zD = {};
            for (let wD = 0; wD < DD; wD++) {
              let DD = HD();
              "__proto__" === DD && (DD = "__proto_"), zD[DD] = bD()
            }
            return zD
          } {
            let zD = new Map;
            for (let wD = 0; wD < DD; wD++) zD.set(bD(), bD());
            return zD
          }
        } {
          DD -= 144;
          let zD = new Array(DD);
          for (let wD = 0; wD < DD; wD++) zD[wD] = bD();
          return BD.freezeData ? Object.freeze(zD) : zD
        }
      }
      if (DD < 192) {
        let zD = DD - 160;
        if (hD >= rD) return gD.slice(rD - GD, (rD += zD) - GD);
        if (0 == hD && KD < 140) {
          let DD = zD < 16 ? uD(zD) : aD(zD);
          if (null != DD) return DD
        }
        return lD(zD)
      } {
        let zD;
        switch (DD) {
          case 192:
            return null;
          case 193:
            return RD ? (zD = bD(), zD > 0 ? RD[1].slice(RD.position1, RD.position1 += zD) : RD[0].slice(RD.position0, RD.position0 -= zD)) : JD;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (zD = sD[rD++], void 0 === zD) throw new Error("Unexpected end of buffer");
            return tD(zD);
          case 197:
            return zD = UD.getUint16(rD), rD += 2, tD(zD);
          case 198:
            return zD = UD.getUint32(rD), rD += 4, tD(zD);
          case 199:
            return FD(sD[rD++]);
          case 200:
            return zD = UD.getUint16(rD), rD += 2, FD(zD);
          case 201:
            return zD = UD.getUint32(rD), rD += 4, FD(zD);
          case 202:
            if (zD = UD.getFloat32(rD), BD.useFloat32 > 2) {
              let DD = Lz[(127 & sD[rD]) << 1 | sD[rD + 1] >> 7];
              return rD += 4, (DD * zD + (zD > 0 ? .5 : -.5) | 0) / DD
            }
            return rD += 4, zD;
          case 203:
            return zD = UD.getFloat64(rD), rD += 8, zD;
          case 204:
            return sD[rD++];
          case 205:
            return zD = UD.getUint16(rD), rD += 2, zD;
          case 206:
            return zD = UD.getUint32(rD), rD += 4, zD;
          case 207:
            return "number" === BD.int64AsType ? (zD = 4294967296 * UD.getUint32(rD), zD += UD.getUint32(rD + 4)) : "string" === BD.int64AsType ? zD = UD.getBigUint64(rD).toString() : "auto" === BD.int64AsType ? (zD = UD.getBigUint64(rD), zD <= BigInt(2) << BigInt(52) && (zD = Number(zD))) : zD = UD.getBigUint64(rD), rD += 8, zD;
          case 208:
            return UD.getInt8(rD++);
          case 209:
            return zD = UD.getInt16(rD), rD += 2, zD;
          case 210:
            return zD = UD.getInt32(rD), rD += 4, zD;
          case 211:
            return "number" === BD.int64AsType ? (zD = 4294967296 * UD.getInt32(rD), zD += UD.getUint32(rD + 4)) : "string" === BD.int64AsType ? zD = UD.getBigInt64(rD).toString() : "auto" === BD.int64AsType ? (zD = UD.getBigInt64(rD), zD >= BigInt(-2) << BigInt(52) && zD <= BigInt(2) << BigInt(52) && (zD = Number(zD))) : zD = UD.getBigInt64(rD), rD += 8, zD;
          case 212:
            if (zD = sD[rD++], 114 == zD) return Dz(63 & sD[rD++]);
            {
              let DD = nD[zD];
              if (DD) return DD.read ? (rD++, DD.read(bD())) : DD.noBuffer ? (rD++, DD()) : DD(sD.subarray(rD, ++rD));
              throw new Error("Unknown extension " + zD)
            }
          case 213:
            return zD = sD[rD], 114 == zD ? (rD++, Dz(63 & sD[rD++], sD[rD++])) : FD(2);
          case 214:
            return FD(4);
          case 215:
            return FD(8);
          case 216:
            return FD(16);
          case 217:
            return zD = sD[rD++], hD >= rD ? gD.slice(rD - GD, (rD += zD) - GD) : WD(zD);
          case 218:
            return zD = UD.getUint16(rD), hD >= (rD += 2) ? gD.slice(rD - GD, (rD += zD) - GD) : ND(zD);
          case 219:
            return zD = UD.getUint32(rD), hD >= (rD += 4) ? gD.slice(rD - GD, (rD += zD) - GD) : ZD(zD);
          case 220:
            return zD = UD.getUint16(rD), rD += 2, mD(zD);
          case 221:
            return zD = UD.getUint32(rD), rD += 4, mD(zD);
          case 222:
            return zD = UD.getUint16(rD), rD += 2, eD(zD);
          case 223:
            return zD = UD.getUint32(rD), rD += 4, eD(zD);
          default:
            if (DD >= 224) return DD - 256;
            if (void 0 === DD) {
              let DD = new Error("Unexpected end of MessagePack data");
              throw DD.incomplete = !0, DD
            }
            throw new Error("Unknown MessagePack token " + DD)
        }
      }
    }
    const jD = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function dD(DD, zD) {
      function wD() {
        if (wD.count++ > PD) {
          let wD = DD.read = new Function("r", "return function(){return " + (BD.freezeData ? "Object.freeze" : "") + "({" + DD.map((DD => "__proto__" === DD ? "__proto_:r()" : jD.test(DD) ? DD + ":r()" : "[" + JSON.stringify(DD) + "]:r()")).join(",") + "})}")(bD);
          return 0 === DD.highByte && (DD.read = SD(zD, DD.read)), wD()
        }
        let pD = {};
        for (let zD = 0, wD = DD.length; zD < wD; zD++) {
          let wD = DD[zD];
          "__proto__" === wD && (wD = "__proto_"), pD[wD] = bD()
        }
        return BD.freezeData ? Object.freeze(pD) : pD
      }
      return wD.count = 0, 0 === DD.highByte ? SD(zD, wD) : wD
    }
    const SD = (DD, zD) => function() {
      let wD = sD[rD++];
      if (0 === wD) return zD();
      let pD = DD < 32 ? -(DD + (wD << 5)) : DD + (wD << 5),
        KD = cD[pD] || iD()[pD];
      if (!KD) throw new Error("Record id is not defined for " + pD);
      return KD.read || (KD.read = dD(KD, DD)), KD.read()
    };

    function iD() {
      let DD = Kz((() => (sD = null, BD.getStructures())));
      return cD = BD._mergeStructures(DD, cD)
    }
    var lD = kD,
      WD = kD,
      ND = kD,
      ZD = kD;
    let yD = !1;

    function kD(DD) {
      let zD;
      if (DD < 16 && (zD = uD(DD))) return zD;
      if (DD > 64 && pD) return pD.decode(sD.subarray(rD, rD += DD));
      const wD = rD + DD,
        KD = [];
      for (zD = ""; rD < wD;) {
        const DD = sD[rD++];
        if (0 === (128 & DD)) KD.push(DD);
        else if (192 === (224 & DD)) {
          const zD = 63 & sD[rD++];
          KD.push((31 & DD) << 6 | zD)
        } else if (224 === (240 & DD)) {
          const zD = 63 & sD[rD++],
            wD = 63 & sD[rD++];
          KD.push((31 & DD) << 12 | zD << 6 | wD)
        } else if (240 === (248 & DD)) {
          let zD = (7 & DD) << 18 | (63 & sD[rD++]) << 12 | (63 & sD[rD++]) << 6 | 63 & sD[rD++];
          zD > 65535 && (zD -= 65536, KD.push(zD >>> 10 & 1023 | 55296), zD = 56320 | 1023 & zD), KD.push(zD)
        } else KD.push(DD);
        KD.length >= 4096 && (zD += oD.apply(String, KD), KD.length = 0)
      }
      return KD.length > 0 && (zD += oD.apply(String, KD)), zD
    }

    function mD(DD) {
      let zD = new Array(DD);
      for (let wD = 0; wD < DD; wD++) zD[wD] = bD();
      return BD.freezeData ? Object.freeze(zD) : zD
    }

    function eD(DD) {
      if (BD.mapsAsObjects) {
        let zD = {};
        for (let wD = 0; wD < DD; wD++) {
          let DD = HD();
          "__proto__" === DD && (DD = "__proto_"), zD[DD] = bD()
        }
        return zD
      } {
        let zD = new Map;
        for (let wD = 0; wD < DD; wD++) zD.set(bD(), bD());
        return zD
      }
    }
    var oD = String.fromCharCode;

    function aD(DD) {
      let zD = rD,
        wD = new Array(DD);
      for (let pD = 0; pD < DD; pD++) {
        const DD = sD[rD++];
        if ((128 & DD) > 0) return void(rD = zD);
        wD[pD] = DD
      }
      return oD.apply(String, wD)
    }

    function uD(DD) {
      if (DD < 4) {
        if (DD < 2) {
          if (0 === DD) return "";
          {
            let DD = sD[rD++];
            return (128 & DD) > 1 ? void(rD -= 1) : oD(DD)
          }
        } {
          let zD = sD[rD++],
            wD = sD[rD++];
          if ((128 & zD) > 0 || (128 & wD) > 0) return void(rD -= 2);
          if (DD < 3) return oD(zD, wD);
          let pD = sD[rD++];
          return (128 & pD) > 0 ? void(rD -= 3) : oD(zD, wD, pD)
        }
      } {
        let zD = sD[rD++],
          wD = sD[rD++],
          pD = sD[rD++],
          KD = sD[rD++];
        if ((128 & zD) > 0 || (128 & wD) > 0 || (128 & pD) > 0 || (128 & KD) > 0) return void(rD -= 4);
        if (DD < 6) {
          if (4 === DD) return oD(zD, wD, pD, KD);
          {
            let DD = sD[rD++];
            return (128 & DD) > 0 ? void(rD -= 5) : oD(zD, wD, pD, KD, DD)
          }
        }
        if (DD < 8) {
          let LD = sD[rD++],
            cD = sD[rD++];
          if ((128 & LD) > 0 || (128 & cD) > 0) return void(rD -= 6);
          if (DD < 7) return oD(zD, wD, pD, KD, LD, cD);
          let gD = sD[rD++];
          return (128 & gD) > 0 ? void(rD -= 7) : oD(zD, wD, pD, KD, LD, cD, gD)
        } {
          let LD = sD[rD++],
            cD = sD[rD++],
            gD = sD[rD++],
            RD = sD[rD++];
          if ((128 & LD) > 0 || (128 & cD) > 0 || (128 & gD) > 0 || (128 & RD) > 0) return void(rD -= 8);
          if (DD < 10) {
            if (8 === DD) return oD(zD, wD, pD, KD, LD, cD, gD, RD);
            {
              let DD = sD[rD++];
              return (128 & DD) > 0 ? void(rD -= 9) : oD(zD, wD, pD, KD, LD, cD, gD, RD, DD)
            }
          }
          if (DD < 12) {
            let AD = sD[rD++],
              UD = sD[rD++];
            if ((128 & AD) > 0 || (128 & UD) > 0) return void(rD -= 10);
            if (DD < 11) return oD(zD, wD, pD, KD, LD, cD, gD, RD, AD, UD);
            let fD = sD[rD++];
            return (128 & fD) > 0 ? void(rD -= 11) : oD(zD, wD, pD, KD, LD, cD, gD, RD, AD, UD, fD)
          } {
            let AD = sD[rD++],
              UD = sD[rD++],
              fD = sD[rD++],
              ID = sD[rD++];
            if ((128 & AD) > 0 || (128 & UD) > 0 || (128 & fD) > 0 || (128 & ID) > 0) return void(rD -= 12);
            if (DD < 14) {
              if (12 === DD) return oD(zD, wD, pD, KD, LD, cD, gD, RD, AD, UD, fD, ID);
              {
                let DD = sD[rD++];
                return (128 & DD) > 0 ? void(rD -= 13) : oD(zD, wD, pD, KD, LD, cD, gD, RD, AD, UD, fD, ID, DD)
              }
            } {
              let BD = sD[rD++],
                GD = sD[rD++];
              if ((128 & BD) > 0 || (128 & GD) > 0) return void(rD -= 14);
              if (DD < 15) return oD(zD, wD, pD, KD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD);
              let hD = sD[rD++];
              return (128 & hD) > 0 ? void(rD -= 15) : oD(zD, wD, pD, KD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD)
            }
          }
        }
      }
    }

    function vD() {
      let DD, zD = sD[rD++];
      if (zD < 192) DD = zD - 160;
      else switch (zD) {
        case 217:
          DD = sD[rD++];
          break;
        case 218:
          DD = UD.getUint16(rD), rD += 2;
          break;
        case 219:
          DD = UD.getUint32(rD), rD += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return kD(DD)
    }

    function tD(DD) {
      return BD.copyBuffers ? Uint8Array.prototype.slice.call(sD, rD, rD += DD) : sD.subarray(rD, rD += DD)
    }

    function FD(DD) {
      let zD = sD[rD++];
      if (nD[zD]) {
        let wD;
        return nD[zD](sD.subarray(rD, wD = rD += DD), (DD => {
          rD = DD;
          try {
            return bD()
          } finally {
            rD = wD
          }
        }))
      }
      throw new Error("Unknown extension type " + zD)
    }
    var YD = new Array(4096);

    function HD() {
      let DD = sD[rD++];
      if (!(DD >= 160 && DD < 192)) return rD--, qD(bD());
      if (DD -= 160, hD >= rD) return gD.slice(rD - GD, (rD += DD) - GD);
      if (!(0 == hD && KD < 180)) return lD(DD);
      let zD, wD = 4095 & (DD << 5 ^ (DD > 1 ? UD.getUint16(rD) : DD > 0 ? sD[rD] : 0)),
        pD = YD[wD],
        LD = rD,
        cD = rD + DD - 3,
        RD = 0;
      if (pD && pD.bytes == DD) {
        for (; LD < cD;) {
          if (zD = UD.getUint32(LD), zD != pD[RD++]) {
            LD = 1879048192;
            break
          }
          LD += 4
        }
        for (cD += 3; LD < cD;)
          if (zD = sD[LD++], zD != pD[RD++]) {
            LD = 1879048192;
            break
          } if (LD === cD) return rD = LD, pD.string;
        cD -= 3, LD = rD
      }
      for (pD = [], YD[wD] = pD, pD.bytes = DD; LD < cD;) zD = UD.getUint32(LD), pD.push(zD), LD += 4;
      for (cD += 3; LD < cD;) zD = sD[LD++], pD.push(zD);
      let AD = DD < 16 ? uD(DD) : aD(DD);
      return pD.string = null != AD ? AD : lD(DD)
    }

    function qD(DD) {
      if ("string" === typeof DD) return DD;
      if ("number" === typeof DD || "boolean" === typeof DD || "bigint" === typeof DD) return DD.toString();
      if (null == DD) return DD + "";
      if (BD.allowArraysInMapKeys && Array.isArray(DD) && DD.flat().every((DD => ["string", "number", "boolean", "bigint"].includes(typeof DD)))) return DD.flat().toString();
      throw new Error("Invalid property type for record: " + typeof DD)
    }
    const Dz = (DD, zD) => {
      let wD = bD().map(qD),
        pD = DD;
      void 0 !== zD && (DD = DD < 32 ? -((zD << 5) + DD) : (zD << 5) + DD, wD.highByte = zD);
      let sD = cD[DD];
      return sD && (sD.isShared || VD) && ((cD.restoreStructures || (cD.restoreStructures = []))[DD] = sD), cD[DD] = wD, wD.read = dD(wD, pD), wD.read()
    };
    nD[0] = () => {}, nD[0].noBuffer = !0, nD[66] = DD => {
      let zD = DD.length,
        wD = BigInt(128 & DD[0] ? DD[0] - 256 : DD[0]);
      for (let pD = 1; pD < zD; pD++) wD <<= BigInt(8), wD += BigInt(DD[pD]);
      return wD
    };
    let zz = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    nD[101] = () => {
      let DD = bD();
      return (zz[DD[0]] || Error)(DD[1], {
        cause: DD[2]
      })
    }, nD[105] = DD => {
      if (!1 === BD.structuredClone) throw new Error("Structured clone extension is disabled");
      let zD = UD.getUint32(rD - 4);
      AD || (AD = new Map);
      let wD, pD = sD[rD];
      wD = pD >= 144 && pD < 160 || 220 == pD || 221 == pD ? [] : {};
      let KD = {
        target: wD
      };
      AD.set(zD, KD);
      let LD = bD();
      return KD.used ? Object.assign(wD, LD) : (KD.target = LD, LD)
    }, nD[112] = DD => {
      if (!1 === BD.structuredClone) throw new Error("Structured clone extension is disabled");
      let zD = UD.getUint32(rD - 4),
        wD = AD.get(zD);
      return wD.used = !0, wD.target
    }, nD[115] = () => new Set(bD());
    const wz = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((DD => DD + "Array"));
    let pz = "object" === typeof globalThis ? globalThis : window;
    nD[116] = DD => {
      let zD = DD[0],
        wD = wz[zD];
      if (!wD) {
        if (16 === zD) {
          let zD = new ArrayBuffer(DD.length - 1);
          return new Uint8Array(zD).set(DD.subarray(1)), zD
        }
        throw new Error("Could not find typed array for code " + zD)
      }
      return new pz[wD](Uint8Array.prototype.slice.call(DD, 1).buffer)
    }, nD[120] = () => {
      let DD = bD();
      return new RegExp(DD[0], DD[1])
    };
    const sz = [];

    function Kz(DD) {
      XD && XD();
      let zD = KD,
        wD = rD,
        pD = ID,
        LD = GD,
        nD = hD,
        MD = gD,
        OD = fD,
        JD = AD,
        ED = RD,
        QD = new Uint8Array(sD.slice(0, KD)),
        PD = cD,
        CD = cD.slice(0, cD.length),
        xD = BD,
        TD = VD,
        bD = DD();
      return KD = zD, rD = wD, ID = pD, GD = LD, hD = nD, gD = MD, fD = OD, AD = JD, RD = ED, sD = QD, VD = TD, (cD = PD).splice(0, cD.length, ...CD), BD = xD, UD = new DataView(sD.buffer, sD.byteOffset, sD.byteLength), bD
    }

    function rz() {
      sD = null, AD = null, cD = null
    }
    nD[98] = DD => {
      let zD = (DD[0] << 24) + (DD[1] << 16) + (DD[2] << 8) + DD[3],
        wD = rD;
      return rD += zD - DD.length, RD = sz, (RD = [vD(), vD()]).position0 = 0, RD.position1 = 0, RD.postBundlePosition = rD, rD = wD, bD()
    }, nD[255] = DD => 4 == DD.length ? new Date(1e3 * (16777216 * DD[0] + (DD[1] << 16) + (DD[2] << 8) + DD[3])) : 8 == DD.length ? new Date(((DD[0] << 22) + (DD[1] << 14) + (DD[2] << 6) + (DD[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & DD[3]) + 16777216 * DD[4] + (DD[5] << 16) + (DD[6] << 8) + DD[7])) : 12 == DD.length ? new Date(((DD[0] << 24) + (DD[1] << 16) + (DD[2] << 8) + DD[3]) / 1e6 + 1e3 * ((128 & DD[4] ? -281474976710656 : 0) + 1099511627776 * DD[6] + 4294967296 * DD[7] + 16777216 * DD[8] + (DD[9] << 16) + (DD[10] << 8) + DD[11])) : new Date("invalid");
    const Lz = new Array(147);
    for (let sw = 0; sw < 256; sw++) Lz[sw] = +("1e" + Math.floor(45.15 - .30103 * sw));
    const cz = CD;
    var gz = new CD({
      useRecords: !1
    });
    const Rz = gz.unpack,
      Az = gz.unpackMultiple,
      Uz = gz.unpack,
      fz = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let Iz, Bz, Gz, hz = new Float32Array(1),
      nz = new Uint8Array(hz.buffer, 0, 4);

    function Mz(DD) {
      hz[0] = DD;
      let zD = Lz[(127 & nz[3]) << 1 | nz[2] >> 7];
      return (zD * DD + (DD > 0 ? .5 : -.5) | 0) / zD
    }
    try {
      Iz = new TextEncoder
    } catch (pw) {}
    const Oz = "undefined" !== typeof Buffer,
      Jz = Oz ? function(DD) {
        return Buffer.allocUnsafeSlow(DD)
      } : Uint8Array,
      Ez = Oz ? Buffer : Uint8Array,
      Qz = Oz ? 4294967296 : 2144337920;
    let Xz, Vz, Pz, Cz, xz, Tz = 0,
      bz = null;
    const jz = /[\u0080-\uFFFF]/,
      dz = Symbol("record-id");
    class Sz extends CD {
      constructor(DD) {
        let zD, wD, pD, sD;
        super(DD), this.offset = 0;
        let KD = Ez.prototype.utf8Write ? function(DD, zD) {
            return Xz.utf8Write(DD, zD, Xz.byteLength - zD)
          } : !(!Iz || !Iz.encodeInto) && function(DD, zD) {
            return Iz.encodeInto(DD, Xz.subarray(zD)).written
          },
          rD = this;
        DD || (DD = {});
        let LD = DD && DD.sequential,
          cD = DD.structures || DD.saveStructures,
          gD = DD.maxSharedStructures;
        if (null == gD && (gD = cD ? 32 : 0), gD > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        DD.structuredClone && void 0 == DD.moreTypes && (this.moreTypes = !0);
        let RD = DD.maxOwnStructures;
        null == RD && (RD = cD ? 32 : 64), this.structures || 0 == DD.useRecords || (this.structures = []);
        let AD = gD > 32 || RD + gD > 64,
          UD = gD + 64,
          fD = gD + RD + 64;
        if (fD > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let ID = [],
          BD = 0,
          GD = 0;
        this.pack = this.encode = function(DD, KD) {
          if (Xz || (Xz = new Jz(8192), Pz = Xz.dataView || (Xz.dataView = new DataView(Xz.buffer, 0, 8192)), Tz = 0), Cz = Xz.length - 10, Cz - Tz < 2048 ? (Xz = new Jz(Xz.length), Pz = Xz.dataView || (Xz.dataView = new DataView(Xz.buffer, 0, Xz.length)), Cz = Xz.length - 10, Tz = 0) : Tz = Tz + 7 & 2147483640, zD = Tz, KD & Hz && (Tz += 255 & KD), sD = rD.structuredClone ? new Map : null, rD.bundleStrings && "string" !== typeof DD ? (bz = [], bz.size = 1 / 0) : bz = null, pD = rD.structures, pD) {
            pD.uninitialized && (pD = rD._mergeStructures(rD.getStructures()));
            let DD = pD.sharedLength || 0;
            if (DD > gD) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + pD.sharedLength);
            if (!pD.transitions) {
              pD.transitions = Object.create(null);
              for (let zD = 0; zD < DD; zD++) {
                let DD = pD[zD];
                if (!DD) continue;
                let wD, sD = pD.transitions;
                for (let zD = 0, pD = DD.length; zD < pD; zD++) {
                  let pD = DD[zD];
                  wD = sD[pD], wD || (wD = sD[pD] = Object.create(null)), sD = wD
                }
                sD[dz] = zD + 64
              }
              this.lastNamedStructuresLength = DD
            }
            LD || (pD.nextId = DD + 64)
          }
          let cD;
          wD && (wD = !1);
          try {
            rD.randomAccessStructure && DD && DD.constructor && DD.constructor === Object ? CD(DD) : MD(DD);
            let wD = bz;
            if (bz && Nz(zD, MD, 0), sD && sD.idsToInsert) {
              let DD = sD.idsToInsert.sort(((DD, zD) => DD.offset > zD.offset ? 1 : -1)),
                pD = DD.length,
                KD = -1;
              for (; wD && pD > 0;) {
                let sD = DD[--pD].offset + zD;
                sD < wD.stringsPosition + zD && -1 === KD && (KD = 0), sD > wD.position + zD ? KD >= 0 && (KD += 6) : (KD >= 0 && (Pz.setUint32(wD.position + zD, Pz.getUint32(wD.position + zD) + KD), KD = -1), wD = wD.previous, pD++)
              }
              KD >= 0 && wD && Pz.setUint32(wD.position + zD, Pz.getUint32(wD.position + zD) + KD), Tz += 6 * DD.length, Tz > Cz && XD(Tz), rD.offset = Tz;
              let LD = function(DD, zD) {
                let wD, pD = 6 * zD.length,
                  sD = DD.length - pD;
                for (; wD = zD.pop();) {
                  let zD = wD.offset,
                    KD = wD.id;
                  DD.copyWithin(zD + pD, zD, sD), pD -= 6;
                  let rD = zD + pD;
                  DD[rD++] = 214, DD[rD++] = 105, DD[rD++] = KD >> 24, DD[rD++] = KD >> 16 & 255, DD[rD++] = KD >> 8 & 255, DD[rD++] = 255 & KD, sD = zD
                }
                return DD
              }(Xz.subarray(zD, Tz), DD);
              return sD = null, LD
            }
            return rD.offset = Tz, KD & Fz ? (Xz.start = zD, Xz.end = Tz, Xz) : Xz.subarray(zD, Tz)
          } catch (pw) {
            throw cD = pw, pw
          } finally {
            if (pD && (hD(), wD && rD.saveStructures)) {
              let wD = pD.sharedLength || 0,
                sD = Xz.subarray(zD, Tz),
                LD = yz(pD, rD);
              if (!cD) return !1 === rD.saveStructures(LD, LD.isCompatible) ? rD.pack(DD, KD) : (rD.lastNamedStructuresLength = wD, Xz.length > 1073741824 && (Xz = null), sD)
            }
            Xz.length > 1073741824 && (Xz = null), KD & Yz && (Tz = zD)
          }
        };
        const hD = () => {
            GD < 10 && GD++;
            let DD = pD.sharedLength || 0;
            if (pD.length > DD && !LD && (pD.length = DD), BD > 1e4) pD.transitions = null, GD = 0, BD = 0, ID.length > 0 && (ID = []);
            else if (ID.length > 0 && !LD) {
              for (let DD = 0, zD = ID.length; DD < zD; DD++) ID[DD][dz] = 0;
              ID = []
            }
          },
          nD = DD => {
            var zD = DD.length;
            zD < 16 ? Xz[Tz++] = 144 | zD : zD < 65536 ? (Xz[Tz++] = 220, Xz[Tz++] = zD >> 8, Xz[Tz++] = 255 & zD) : (Xz[Tz++] = 221, Pz.setUint32(Tz, zD), Tz += 4);
            for (let wD = 0; wD < zD; wD++) MD(DD[wD])
          },
          MD = DD => {
            Tz > Cz && (Xz = XD(Tz));
            var wD, pD = typeof DD;
            if ("string" === pD) {
              let pD, sD = DD.length;
              if (bz && sD >= 4 && sD < 4096) {
                if ((bz.size += sD) > 21760) {
                  let DD, wD, pD = (bz[0] ? 3 * bz[0].length + bz[1].length : 0) + 10;
                  Tz + pD > Cz && (Xz = XD(Tz + pD)), bz.position ? (wD = bz, Xz[Tz] = 200, Tz += 3, Xz[Tz++] = 98, DD = Tz - zD, Tz += 4, Nz(zD, MD, 0), Pz.setUint16(DD + zD - 3, Tz - zD - DD)) : (Xz[Tz++] = 214, Xz[Tz++] = 98, DD = Tz - zD, Tz += 4), bz = ["", ""], bz.previous = wD, bz.size = 0, bz.position = DD
                }
                let wD = jz.test(DD);
                return bz[wD ? 0 : 1] += DD, Xz[Tz++] = 193, void MD(wD ? -sD : sD)
              }
              pD = sD < 32 ? 1 : sD < 256 ? 2 : sD < 65536 ? 3 : 5;
              let rD = 3 * sD;
              if (Tz + rD > Cz && (Xz = XD(Tz + rD)), sD < 64 || !KD) {
                let zD, KD, rD, LD = Tz + pD;
                for (zD = 0; zD < sD; zD++) KD = DD.charCodeAt(zD), KD < 128 ? Xz[LD++] = KD : KD < 2048 ? (Xz[LD++] = KD >> 6 | 192, Xz[LD++] = 63 & KD | 128) : 55296 === (64512 & KD) && 56320 === (64512 & (rD = DD.charCodeAt(zD + 1))) ? (KD = 65536 + ((1023 & KD) << 10) + (1023 & rD), zD++, Xz[LD++] = KD >> 18 | 240, Xz[LD++] = KD >> 12 & 63 | 128, Xz[LD++] = KD >> 6 & 63 | 128, Xz[LD++] = 63 & KD | 128) : (Xz[LD++] = KD >> 12 | 224, Xz[LD++] = KD >> 6 & 63 | 128, Xz[LD++] = 63 & KD | 128);
                wD = LD - Tz - pD
              } else wD = KD(DD, Tz + pD);
              wD < 32 ? Xz[Tz++] = 160 | wD : wD < 256 ? (pD < 2 && Xz.copyWithin(Tz + 2, Tz + 1, Tz + 1 + wD), Xz[Tz++] = 217, Xz[Tz++] = wD) : wD < 65536 ? (pD < 3 && Xz.copyWithin(Tz + 3, Tz + 2, Tz + 2 + wD), Xz[Tz++] = 218, Xz[Tz++] = wD >> 8, Xz[Tz++] = 255 & wD) : (pD < 5 && Xz.copyWithin(Tz + 5, Tz + 3, Tz + 3 + wD), Xz[Tz++] = 219, Pz.setUint32(Tz, wD), Tz += 4), Tz += wD
            } else if ("number" === pD)
              if (DD >>> 0 === DD) DD < 32 || DD < 128 && !1 === this.useRecords || DD < 64 && !this.randomAccessStructure ? Xz[Tz++] = DD : DD < 256 ? (Xz[Tz++] = 204, Xz[Tz++] = DD) : DD < 65536 ? (Xz[Tz++] = 205, Xz[Tz++] = DD >> 8, Xz[Tz++] = 255 & DD) : (Xz[Tz++] = 206, Pz.setUint32(Tz, DD), Tz += 4);
              else if ((DD | 0) === DD) DD >= -32 ? Xz[Tz++] = 256 + DD : DD >= -128 ? (Xz[Tz++] = 208, Xz[Tz++] = DD + 256) : DD >= -32768 ? (Xz[Tz++] = 209, Pz.setInt16(Tz, DD), Tz += 2) : (Xz[Tz++] = 210, Pz.setInt32(Tz, DD), Tz += 4);
            else {
              let zD;
              if ((zD = this.useFloat32) > 0 && DD < 4294967296 && DD >= -2147483648) {
                let wD;
                if (Xz[Tz++] = 202, Pz.setFloat32(Tz, DD), zD < 4 || ((wD = DD * Lz[(127 & Xz[Tz]) << 1 | Xz[Tz + 1] >> 7]) | 0) === wD) return void(Tz += 4);
                Tz--
              }
              Xz[Tz++] = 203, Pz.setFloat64(Tz, DD), Tz += 8
            } else if ("object" === pD || "function" === pD)
              if (DD) {
                if (sD) {
                  let wD = sD.get(DD);
                  if (wD) {
                    if (!wD.id) {
                      let DD = sD.idsToInsert || (sD.idsToInsert = []);
                      wD.id = DD.push(wD)
                    }
                    return Xz[Tz++] = 214, Xz[Tz++] = 112, Pz.setUint32(Tz, wD.id), void(Tz += 4)
                  }
                  sD.set(DD, {
                    offset: Tz - zD
                  })
                }
                let KD = DD.constructor;
                if (KD === Object) QD(DD);
                else if (KD === Array) nD(DD);
                else if (KD === Map)
                  if (this.mapAsEmptyObject) Xz[Tz++] = 128;
                  else {
                    (wD = DD.size) < 16 ? Xz[Tz++] = 128 | wD : wD < 65536 ? (Xz[Tz++] = 222, Xz[Tz++] = wD >> 8, Xz[Tz++] = 255 & wD) : (Xz[Tz++] = 223, Pz.setUint32(Tz, wD), Tz += 4);
                    for (let [zD, wD] of DD) MD(zD), MD(wD)
                  }
                else {
                  for (let zD = 0, wD = Bz.length; zD < wD; zD++) {
                    if (DD instanceof Gz[zD]) {
                      let wD = Bz[zD];
                      if (wD.write) {
                        wD.type && (Xz[Tz++] = 212, Xz[Tz++] = wD.type, Xz[Tz++] = 0);
                        let zD = wD.write.call(this, DD);
                        return void(zD === DD ? Array.isArray(DD) ? nD(DD) : QD(DD) : MD(zD))
                      }
                      let pD, sD = Xz,
                        KD = Pz,
                        rD = Tz;
                      Xz = null;
                      try {
                        pD = wD.pack.call(this, DD, (DD => (Xz = sD, sD = null, Tz += DD, Tz > Cz && XD(Tz), {
                          target: Xz,
                          targetView: Pz,
                          position: Tz - DD
                        })), MD)
                      } finally {
                        sD && (Xz = sD, Pz = KD, Tz = rD, Cz = Xz.length - 10)
                      }
                      return void(pD && (pD.length + Tz > Cz && XD(pD.length + Tz), Tz = Wz(pD, Xz, Tz, wD.type)))
                    }
                  }
                  if (Array.isArray(DD)) nD(DD);
                  else {
                    if (DD.toJSON) {
                      const zD = DD.toJSON();
                      if (zD !== DD) return MD(zD)
                    }
                    if ("function" === pD) return MD(this.writeFunction && this.writeFunction(DD));
                    QD(DD)
                  }
                }
              } else Xz[Tz++] = 192;
            else if ("boolean" === pD) Xz[Tz++] = DD ? 195 : 194;
            else if ("bigint" === pD) {
              if (DD < BigInt(1) << BigInt(63) && DD >= -(BigInt(1) << BigInt(63))) Xz[Tz++] = 211, Pz.setBigInt64(Tz, DD);
              else if (DD < BigInt(1) << BigInt(64) && DD > 0) Xz[Tz++] = 207, Pz.setBigUint64(Tz, DD);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return MD(DD.toString());
                  if (this.useBigIntExtension && DD < BigInt(2) ** BigInt(1023) && DD > -(BigInt(2) ** BigInt(1023))) {
                    Xz[Tz++] = 199, Tz++, Xz[Tz++] = 66;
                    let zD, wD = [];
                    do {
                      let pD = DD & BigInt(255);
                      zD = (pD & BigInt(128)) === (DD < BigInt(0) ? BigInt(128) : BigInt(0)), wD.push(pD), DD >>= BigInt(8)
                    } while (DD !== BigInt(0) && DD !== BigInt(-1) || !zD);
                    Xz[Tz - 2] = wD.length;
                    for (let DD = wD.length; DD > 0;) Xz[Tz++] = Number(wD[--DD]);
                    return
                  }
                  throw new RangeError(DD + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                Xz[Tz++] = 203, Pz.setFloat64(Tz, Number(DD))
              }
              Tz += 8
            } else {
              if ("undefined" !== pD) throw new Error("Unknown type: " + pD);
              this.encodeUndefinedAsNil ? Xz[Tz++] = 192 : (Xz[Tz++] = 212, Xz[Tz++] = 0, Xz[Tz++] = 0)
            }
          },
          OD = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? DD => {
            let zD;
            if (this.skipValues) {
              zD = [];
              for (let wD in DD) "function" === typeof DD.hasOwnProperty && !DD.hasOwnProperty(wD) || this.skipValues.includes(DD[wD]) || zD.push(wD)
            } else zD = Object.keys(DD);
            let wD, pD = zD.length;
            if (pD < 16 ? Xz[Tz++] = 128 | pD : pD < 65536 ? (Xz[Tz++] = 222, Xz[Tz++] = pD >> 8, Xz[Tz++] = 255 & pD) : (Xz[Tz++] = 223, Pz.setUint32(Tz, pD), Tz += 4), this.coercibleKeyAsNumber)
              for (let sD = 0; sD < pD; sD++) {
                wD = zD[sD];
                let pD = Number(wD);
                MD(isNaN(pD) ? wD : pD), MD(DD[wD])
              } else
                for (let sD = 0; sD < pD; sD++) MD(wD = zD[sD]), MD(DD[wD])
          } : DD => {
            Xz[Tz++] = 222;
            let wD = Tz - zD;
            Tz += 2;
            let pD = 0;
            for (let zD in DD)("function" !== typeof DD.hasOwnProperty || DD.hasOwnProperty(zD)) && (MD(zD), MD(DD[zD]), pD++);
            if (pD > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            Xz[wD++ + zD] = pD >> 8, Xz[wD + zD] = 255 & pD
          },
          JD = !1 === this.useRecords ? OD : DD.progressiveRecords && !AD ? DD => {
            let wD, sD, KD = pD.transitions || (pD.transitions = Object.create(null)),
              rD = Tz++ - zD;
            for (let LD in DD)
              if ("function" !== typeof DD.hasOwnProperty || DD.hasOwnProperty(LD)) {
                if (wD = KD[LD], wD) KD = wD;
                else {
                  let cD = Object.keys(DD),
                    gD = KD;
                  KD = pD.transitions;
                  let RD = 0;
                  for (let DD = 0, zD = cD.length; DD < zD; DD++) {
                    let zD = cD[DD];
                    wD = KD[zD], wD || (wD = KD[zD] = Object.create(null), RD++), KD = wD
                  }
                  rD + zD + 1 == Tz ? (Tz--, VD(KD, cD, RD)) : PD(KD, cD, rD, RD), sD = !0, KD = gD[LD]
                }
                MD(DD[LD])
              } if (!sD) {
              let wD = KD[dz];
              wD ? Xz[rD + zD] = wD : PD(KD, Object.keys(DD), rD, 0)
            }
          } : DD => {
            let zD, wD = pD.transitions || (pD.transitions = Object.create(null)),
              sD = 0;
            for (let pD in DD)("function" !== typeof DD.hasOwnProperty || DD.hasOwnProperty(pD)) && (zD = wD[pD], zD || (zD = wD[pD] = Object.create(null), sD++), wD = zD);
            let KD = wD[dz];
            KD ? KD >= 96 && AD ? (Xz[Tz++] = 96 + (31 & (KD -= 96)), Xz[Tz++] = KD >> 5) : Xz[Tz++] = KD : VD(wD, wD.__keys__ || Object.keys(DD), sD);
            for (let pD in DD)("function" !== typeof DD.hasOwnProperty || DD.hasOwnProperty(pD)) && MD(DD[pD])
          },
          ED = "function" == typeof this.useRecords && this.useRecords,
          QD = ED ? DD => {
            ED(DD) ? JD(DD) : OD(DD)
          } : JD,
          XD = DD => {
            let wD;
            if (DD > 16777216) {
              if (DD - zD > Qz) throw new Error("Packed buffer would be larger than maximum buffer size");
              wD = Math.min(Qz, 4096 * Math.round(Math.max((DD - zD) * (DD > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else wD = 1 + (Math.max(DD - zD << 2, Xz.length - 1) >> 12) << 12;
            let pD = new Jz(wD);
            return Pz = pD.dataView || (pD.dataView = new DataView(pD.buffer, 0, wD)), DD = Math.min(DD, Xz.length), Xz.copy ? Xz.copy(pD, 0, zD, DD) : pD.set(Xz.slice(zD, DD)), Tz -= zD, zD = 0, Cz = pD.length - 10, Xz = pD
          },
          VD = (DD, zD, sD) => {
            let KD = pD.nextId;
            KD || (KD = 64), KD < UD && this.shouldShareStructure && !this.shouldShareStructure(zD) ? (KD = pD.nextOwnId, KD < fD || (KD = UD), pD.nextOwnId = KD + 1) : (KD >= fD && (KD = UD), pD.nextId = KD + 1);
            let rD = zD.highByte = KD >= 96 && AD ? KD - 96 >> 5 : -1;
            DD[dz] = KD, DD.__keys__ = zD, pD[KD - 64] = zD, KD < UD ? (zD.isShared = !0, pD.sharedLength = KD - 63, wD = !0, rD >= 0 ? (Xz[Tz++] = 96 + (31 & KD), Xz[Tz++] = rD) : Xz[Tz++] = KD) : (rD >= 0 ? (Xz[Tz++] = 213, Xz[Tz++] = 114, Xz[Tz++] = 96 + (31 & KD), Xz[Tz++] = rD) : (Xz[Tz++] = 212, Xz[Tz++] = 114, Xz[Tz++] = KD), sD && (BD += GD * sD), ID.length >= RD && (ID.shift()[dz] = 0), ID.push(DD), MD(zD))
          },
          PD = (DD, wD, pD, sD) => {
            let KD = Xz,
              rD = Tz,
              LD = Cz,
              cD = zD;
            Xz = Vz, Tz = 0, zD = 0, Xz || (Vz = Xz = new Jz(8192)), Cz = Xz.length - 10, VD(DD, wD, sD), Vz = Xz;
            let gD = Tz;
            if (Xz = KD, Tz = rD, Cz = LD, zD = cD, gD > 1) {
              let DD = Tz + gD - 1;
              DD > Cz && XD(DD);
              let wD = pD + zD;
              Xz.copyWithin(wD + gD, wD + 1, Tz), Xz.set(Vz.slice(0, gD), wD), Tz = DD
            } else Xz[pD + zD] = Vz[0]
          },
          CD = DD => {
            let sD = xz(DD, Xz, zD, Tz, pD, XD, ((DD, zD, pD) => {
              if (pD) return wD = !0;
              Tz = zD;
              let sD = Xz;
              return MD(DD), hD(), sD !== Xz ? {
                position: Tz,
                targetView: Pz,
                target: Xz
              } : Tz
            }), this);
            if (0 === sD) return QD(DD);
            Tz = sD
          }
      }
      useBuffer(DD) {
        Xz = DD, Pz = Xz.dataView || (Xz.dataView = new DataView(Xz.buffer, Xz.byteOffset, Xz.byteLength)), Tz = 0
      }
      set position(DD) {
        Tz = DD
      }
      get position() {
        return Tz
      }
      set buffer(DD) {
        Xz = DD
      }
      get buffer() {
        return Xz
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function iz(DD, zD, wD, pD) {
      let sD = DD.byteLength;
      if (sD + 1 < 256) {
        var {
          target: KD,
          position: rD
        } = wD(4 + sD);
        KD[rD++] = 199, KD[rD++] = sD + 1
      } else if (sD + 1 < 65536) {
        var {
          target: KD,
          position: rD
        } = wD(5 + sD);
        KD[rD++] = 200, KD[rD++] = sD + 1 >> 8, KD[rD++] = sD + 1 & 255
      } else {
        var {
          target: KD,
          position: rD,
          targetView: LD
        } = wD(7 + sD);
        KD[rD++] = 201, LD.setUint32(rD, sD + 1), rD += 4
      }
      KD[rD++] = 116, KD[rD++] = zD, DD.buffer || (DD = new Uint8Array(DD)), KD.set(new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength), rD)
    }

    function lz(DD, zD) {
      let wD = DD.byteLength;
      var pD, sD;
      if (wD < 256) {
        var {
          target: pD,
          position: sD
        } = zD(wD + 2);
        pD[sD++] = 196, pD[sD++] = wD
      } else if (wD < 65536) {
        var {
          target: pD,
          position: sD
        } = zD(wD + 3);
        pD[sD++] = 197, pD[sD++] = wD >> 8, pD[sD++] = 255 & wD
      } else {
        var {
          target: pD,
          position: sD,
          targetView: KD
        } = zD(wD + 5);
        pD[sD++] = 198, KD.setUint32(sD, wD), sD += 4
      }
      pD.set(DD, sD)
    }

    function Wz(DD, zD, wD, pD) {
      let sD = DD.length;
      switch (sD) {
        case 1:
          zD[wD++] = 212;
          break;
        case 2:
          zD[wD++] = 213;
          break;
        case 4:
          zD[wD++] = 214;
          break;
        case 8:
          zD[wD++] = 215;
          break;
        case 16:
          zD[wD++] = 216;
          break;
        default:
          sD < 256 ? (zD[wD++] = 199, zD[wD++] = sD) : sD < 65536 ? (zD[wD++] = 200, zD[wD++] = sD >> 8, zD[wD++] = 255 & sD) : (zD[wD++] = 201, zD[wD++] = sD >> 24, zD[wD++] = sD >> 16 & 255, zD[wD++] = sD >> 8 & 255, zD[wD++] = 255 & sD)
      }
      return zD[wD++] = pD, zD.set(DD, wD), wD += sD
    }

    function Nz(DD, zD, wD) {
      if (bz.length > 0) {
        Pz.setUint32(bz.position + DD, Tz + wD - bz.position - DD), bz.stringsPosition = Tz - DD;
        let pD = bz;
        bz = null, zD(pD[0]), zD(pD[1])
      }
    }

    function Zz(DD) {
      if (DD.Class) {
        if (!DD.pack && !DD.write) throw new Error("Extension has no pack or write function");
        if (DD.pack && !DD.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        Gz.unshift(DD.Class), Bz.unshift(DD)
      }! function(DD) {
        DD.unpack ? nD[DD.type] = DD.unpack : nD[DD.type] = DD
      }(DD)
    }

    function yz(DD, zD) {
      return DD.isCompatible = DD => {
        let wD = !DD || (zD.lastNamedStructuresLength || 0) === DD.length;
        return wD || zD._mergeStructures(DD), wD
      }, DD
    }
    Gz = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, OD], Bz = [{
      pack(DD, zD, wD) {
        let pD = DD.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === DD.getMilliseconds()) && pD >= 0 && pD < 4294967296) {
          let {
            target: DD,
            targetView: wD,
            position: sD
          } = zD(6);
          DD[sD++] = 214, DD[sD++] = 255, wD.setUint32(sD, pD)
        } else if (pD > 0 && pD < 4294967296) {
          let {
            target: wD,
            targetView: sD,
            position: KD
          } = zD(10);
          wD[KD++] = 215, wD[KD++] = 255, sD.setUint32(KD, 4e6 * DD.getMilliseconds() + (pD / 1e3 / 4294967296 | 0)), sD.setUint32(KD + 4, pD)
        } else if (isNaN(pD)) {
          if (this.onInvalidDate) return zD(0), wD(this.onInvalidDate());
          let {
            target: DD,
            targetView: pD,
            position: sD
          } = zD(3);
          DD[sD++] = 212, DD[sD++] = 255, DD[sD++] = 255
        } else {
          let {
            target: wD,
            targetView: sD,
            position: KD
          } = zD(15);
          wD[KD++] = 199, wD[KD++] = 12, wD[KD++] = 255, sD.setUint32(KD, 1e6 * DD.getMilliseconds()), sD.setBigInt64(KD + 4, BigInt(Math.floor(pD)))
        }
      }
    }, {
      pack(DD, zD, wD) {
        if (this.setAsEmptyObject) return zD(0), wD({});
        let pD = Array.from(DD),
          {
            target: sD,
            position: KD
          } = zD(this.moreTypes ? 3 : 0);
        this.moreTypes && (sD[KD++] = 212, sD[KD++] = 115, sD[KD++] = 0), wD(pD)
      }
    }, {
      pack(DD, zD, wD) {
        let {
          target: pD,
          position: sD
        } = zD(this.moreTypes ? 3 : 0);
        this.moreTypes && (pD[sD++] = 212, pD[sD++] = 101, pD[sD++] = 0), wD([DD.name, DD.message, DD.cause])
      }
    }, {
      pack(DD, zD, wD) {
        let {
          target: pD,
          position: sD
        } = zD(this.moreTypes ? 3 : 0);
        this.moreTypes && (pD[sD++] = 212, pD[sD++] = 120, pD[sD++] = 0), wD([DD.source, DD.flags])
      }
    }, {
      pack(DD, zD) {
        this.moreTypes ? iz(DD, 16, zD) : lz(Oz ? Buffer.from(DD) : new Uint8Array(DD), zD)
      }
    }, {
      pack(DD, zD) {
        let wD = DD.constructor;
        wD !== Ez && this.moreTypes ? iz(DD, wz.indexOf(wD.name), zD) : lz(DD, zD)
      }
    }, {
      pack(DD, zD) {
        let {
          target: wD,
          position: pD
        } = zD(1);
        wD[pD] = 193
      }
    }];
    let kz = new Sz({
      useRecords: !1
    });
    const mz = kz.pack,
      ez = kz.pack,
      oz = Sz,
      {
        NEVER: az,
        ALWAYS: uz,
        DECIMAL_ROUND: vz,
        DECIMAL_FIT: tz
      } = fz,
      Fz = 512,
      Yz = 1024,
      Hz = 2048;
    const qz = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!DD || "object" !== typeof DD) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const wD = new CD(zD);
        let pD;
        const sD = DD => {
          let zD;
          pD && (DD = Buffer.concat([pD, DD]), pD = void 0);
          try {
            zD = wD.unpackMultiple(DD)
          } catch (sD) {
            if (!sD.incomplete) throw sD;
            pD = DD.slice(sD.lastPosition), zD = sD.values
          }
          return zD
        };
        return "function" === typeof DD[Symbol.iterator] ? function*() {
          for (const zD of DD) yield* sD(zD)
        }() : "function" === typeof DD[Symbol.asyncIterator] ? async function*() {
          for await (const zD of DD) yield* sD(zD)
        }(): void 0
      },
      Dw = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (DD && "object" === typeof DD) {
          if ("function" === typeof DD[Symbol.iterator]) return function*(DD, zD) {
            const wD = new Sz(zD);
            for (const pD of DD) yield wD.pack(pD)
          }(DD, zD);
          if ("function" === typeof DD.then || "function" === typeof DD[Symbol.asyncIterator]) return async function*(DD, zD) {
            const wD = new Sz(zD);
            for await (const pD of DD) yield wD.pack(pD)
          }(DD, zD);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      zw = !1,
      ww = !0
  },
  9131: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      $changes: () => BD,
      $childType: () => GD,
      $decoder: () => RD,
      $deleteByIndex: () => fD,
      $encoder: () => gD,
      $filter: () => AD,
      $getByIndex: () => UD,
      $numFields: () => PD,
      $refId: () => LD,
      $track: () => cD,
      $values: () => JD,
      ArraySchema: () => pp,
      Callbacks: () => ss,
      ChangeTree: () => bw,
      CollectionSchema: () => rp,
      Decoder: () => Fp,
      Encoder: () => op,
      FieldBuilder: () => gp,
      MapSchema: () => Kp,
      Metadata: () => vz,
      OPERATION: () => sD,
      Reflection: () => Ds,
      ReflectionField: () => Hp,
      ReflectionType: () => qp,
      Root: () => jp,
      Schema: () => Tp,
      SetSchema: () => Lp,
      StateCallbackStrategy: () => ps,
      StateView: () => Wp,
      StreamSchema: () => cp,
      TypeContext: () => yz,
      createPool: () => rs,
      decode: () => Mz,
      decodeKeyValueOperation: () => Yw,
      decodeSchemaOperation: () => Fw,
      defineCustomTypes: () => Qz,
      defineTypes: () => Pp,
      deprecated: () => Xp,
      dumpChanges: () => xp,
      encode: () => zz,
      encodeArray: () => Zw,
      encodeIndexedEntry: () => Ww,
      encodeKeyValueOperation: () => Nw,
      encodeMapEntry: () => lw,
      encodeSchemaOperation: () => iw,
      UI: () => Gp,
      fullStateOnly: () => Op,
      getDecoderStateCallbacks: () => zs,
      getEncodeDescriptor: () => Dw,
      getRawChangesCallback: () => ws,
      isBuilder: () => Rp,
      patchOnly: () => Mp,
      registerType: () => Ez,
      schema: () => Cp,
      t: () => Ip,
      type: () => Jp,
      unreliable: () => np,
      view: () => hp
    });
    const pD = 255;
    var sD;

    function KD(DD) {
      Object.defineProperty(DD, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(DD) {
      DD[DD.ADD = 128] = "ADD", DD[DD.REPLACE = 0] = "REPLACE", DD[DD.DELETE = 64] = "DELETE", DD[DD.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", DD[DD.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", DD[DD.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", DD[DD.CLEAR = 10] = "CLEAR", DD[DD.REVERSE = 15] = "REVERSE", DD[DD.MOVE = 32] = "MOVE", DD[DD.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", DD[DD.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(sD || (sD = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const rD = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const DD = "colyseus.symbolRegistry",
        zD = rD[DD] || (rD[DD] = Object.create(null));
      Symbol.for = function(DD) {
        return zD[DD] || (zD[DD] = Symbol(DD))
      }, Symbol.keyFor = function(DD) {
        for (const wD in zD)
          if (zD[wD] === DD) return wD
      }
    }
    const LD = Symbol.for("$refId"),
      cD = "~track",
      gD = "~encoder",
      RD = "~decoder",
      AD = "~filter",
      UD = "~getByIndex",
      fD = "~deleteByIndex",
      ID = "~resyncPrune",
      BD = Symbol.for("$changes"),
      GD = Symbol.for("$childType"),
      hD = Symbol.for("$proxyTarget"),
      nD = "~onEncodeEnd",
      MD = "~reset",
      OD = "~onDecodeEnd",
      JD = Symbol.for("$values"),
      ED = "~builder",
      QD = "~descriptors",
      XD = "~__encodeDescriptor",
      VD = "~encoders",
      PD = "~__numFields",
      CD = "~__refTypeFieldIndexes",
      xD = "~__viewFieldIndexes",
      TD = "$__fieldIndexesByViewTag",
      bD = "~__unreliableFieldIndexes",
      jD = "~__patchOnlyFieldIndexes",
      dD = "~__fullSyncSkipIndexes",
      SD = "~__fullStateOnlyFieldIndexes",
      iD = "~__streamFieldIndexes",
      lD = "~__streamPriorities";
    let WD;
    try {
      WD = new TextEncoder
    } catch (Ls) {}
    const ND = new ArrayBuffer(8),
      ZD = new Int32Array(ND),
      yD = new Float32Array(ND),
      kD = new Float64Array(ND),
      mD = new BigInt64Array(ND),
      eD = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(DD, zD) {
        for (var wD = 0, pD = 0, sD = 0, KD = DD.length; sD < KD; sD++)(wD = DD.charCodeAt(sD)) < 128 ? pD += 1 : wD < 2048 ? pD += 2 : wD < 55296 || wD >= 57344 ? pD += 3 : (sD++, pD += 4);
        return pD
      };

    function oD(DD, zD, wD) {
      for (var pD = 0, sD = 0, KD = zD.length; sD < KD; sD++)(pD = zD.charCodeAt(sD)) < 128 ? DD[wD.offset++] = pD : pD < 2048 ? (DD[wD.offset] = 192 | pD >> 6, DD[wD.offset + 1] = 128 | 63 & pD, wD.offset += 2) : pD < 55296 || pD >= 57344 ? (DD[wD.offset] = 224 | pD >> 12, DD[wD.offset + 1] = 128 | pD >> 6 & 63, DD[wD.offset + 2] = 128 | 63 & pD, wD.offset += 3) : (sD++, pD = 65536 + ((1023 & pD) << 10 | 1023 & zD.charCodeAt(sD)), DD[wD.offset] = 240 | pD >> 18, DD[wD.offset + 1] = 128 | pD >> 12 & 63, DD[wD.offset + 2] = 128 | pD >> 6 & 63, DD[wD.offset + 3] = 128 | 63 & pD, wD.offset += 4)
    }

    function aD(DD, zD, wD) {
      DD[wD.offset++] = 255 & zD
    }

    function uD(DD, zD, wD) {
      DD[wD.offset++] = 255 & zD, DD[wD.offset++] = zD >> 8 & 255
    }

    function vD(DD, zD, wD) {
      DD[wD.offset++] = 255 & zD, DD[wD.offset++] = zD >> 8 & 255
    }

    function tD(DD, zD, wD) {
      DD[wD.offset++] = 255 & zD, DD[wD.offset++] = zD >> 8 & 255, DD[wD.offset++] = zD >> 16 & 255, DD[wD.offset++] = zD >> 24 & 255
    }

    function FD(DD, zD, wD) {
      const pD = zD >> 24,
        sD = zD >> 16,
        KD = zD >> 8,
        rD = zD;
      DD[wD.offset++] = 255 & rD, DD[wD.offset++] = 255 & KD, DD[wD.offset++] = 255 & sD, DD[wD.offset++] = 255 & pD
    }

    function YD(DD, zD, wD) {
      const pD = Math.floor(zD / Math.pow(2, 32));
      FD(DD, zD >>> 0, wD), FD(DD, pD, wD)
    }

    function HD(DD, zD, wD) {
      const pD = zD / Math.pow(2, 32) | 0;
      FD(DD, zD >>> 0, wD), FD(DD, pD, wD)
    }

    function qD(DD, zD, wD) {
      yD[0] = zD, tD(DD, ZD[0], wD)
    }

    function Dz(DD, zD, wD) {
      kD[0] = zD, tD(DD, ZD[0], wD), tD(DD, ZD[1], wD)
    }
    const zz = {
        int8: aD,
        uint8: function(DD, zD, wD) {
          DD[wD.offset++] = 255 & zD
        },
        int16: uD,
        uint16: vD,
        int32: tD,
        uint32: FD,
        int64: YD,
        uint64: HD,
        bigint64: function(DD, zD, wD) {
          mD[0] = BigInt.asIntN(64, zD), tD(DD, ZD[0], wD), tD(DD, ZD[1], wD)
        },
        biguint64: function(DD, zD, wD) {
          mD[0] = BigInt.asIntN(64, zD), tD(DD, ZD[0], wD), tD(DD, ZD[1], wD)
        },
        float32: qD,
        float64: Dz,
        boolean: function(DD, zD, wD) {
          DD[wD.offset++] = zD ? 1 : 0
        },
        string: function(DD, zD, wD) {
          zD || (zD = "");
          let pD = eD(zD, "utf8"),
            sD = 0;
          if (pD < 32) DD[wD.offset++] = 160 | pD, sD = 1;
          else if (pD < 256) DD[wD.offset++] = 217, DD[wD.offset++] = pD, sD = 2;
          else if (pD < 65536) DD[wD.offset++] = 218, vD(DD, pD, wD), sD = 3;
          else {
            if (!(pD < 4294967296)) throw new Error("String too long");
            DD[wD.offset++] = 219, FD(DD, pD, wD), sD = 5
          }
          return oD(DD, zD, wD), sD + pD
        },
        number: function DD(zD, wD, pD) {
          return isNaN(wD) ? DD(zD, 0, pD) : isFinite(wD) ? wD !== (0 | wD) ? Math.abs(wD) <= 34028235e31 && (yD[0] = wD, Math.abs(Math.abs(yD[0]) - Math.abs(wD)) < 1e-4) ? (zD[pD.offset++] = 202, qD(zD, wD, pD), 5) : (zD[pD.offset++] = 203, Dz(zD, wD, pD), 9) : wD >= 0 ? wD < 128 ? (zD[pD.offset++] = 255 & wD, 1) : wD < 256 ? (zD[pD.offset++] = 204, zD[pD.offset++] = 255 & wD, 2) : wD < 65536 ? (zD[pD.offset++] = 205, vD(zD, wD, pD), 3) : wD < 4294967296 ? (zD[pD.offset++] = 206, FD(zD, wD, pD), 5) : (zD[pD.offset++] = 207, HD(zD, wD, pD), 9) : wD >= -32 ? (zD[pD.offset++] = 224 | wD + 32, 1) : wD >= -128 ? (zD[pD.offset++] = 208, aD(zD, wD, pD), 2) : wD >= -32768 ? (zD[pD.offset++] = 209, uD(zD, wD, pD), 3) : wD >= -2147483648 ? (zD[pD.offset++] = 210, tD(zD, wD, pD), 5) : (zD[pD.offset++] = 211, YD(zD, wD, pD), 9) : DD(zD, wD > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, pD)
        },
        utf8Write: oD,
        utf8Length: eD
      },
      wz = new ArrayBuffer(8),
      pz = new Int32Array(wz),
      sz = new Float32Array(wz),
      Kz = new Float64Array(wz),
      rz = new BigUint64Array(wz),
      Lz = new BigInt64Array(wz);

    function cz(DD, zD, wD) {
      wD > DD.length - zD.offset && (wD = DD.length - zD.offset);
      for (var pD = "", sD = 0, KD = zD.offset, rD = zD.offset + wD; KD < rD; KD++) {
        var LD = DD[KD];
        if (0 !== (128 & LD))
          if (192 !== (224 & LD))
            if (224 !== (240 & LD)) {
              if (240 !== (248 & LD)) {
                console.error("decode.utf8Read(): Invalid byte " + LD + " at offset " + KD + ". Skip to end of string: " + (zD.offset + wD));
                break
              }(sD = (7 & LD) << 18 | (63 & DD[++KD]) << 12 | (63 & DD[++KD]) << 6 | 63 & DD[++KD]) >= 65536 ? (sD -= 65536, pD += String.fromCharCode(55296 + (sD >>> 10), 56320 + (1023 & sD))) : pD += String.fromCharCode(sD)
            } else pD += String.fromCharCode((15 & LD) << 12 | (63 & DD[++KD]) << 6 | 63 & DD[++KD]);
        else pD += String.fromCharCode((31 & LD) << 6 | 63 & DD[++KD]);
        else pD += String.fromCharCode(LD)
      }
      return zD.offset += wD, pD
    }

    function gz(DD, zD) {
      return Rz(DD, zD) << 24 >> 24
    }

    function Rz(DD, zD) {
      return DD[zD.offset++]
    }

    function Az(DD, zD) {
      return Uz(DD, zD) << 16 >> 16
    }

    function Uz(DD, zD) {
      return DD[zD.offset++] | DD[zD.offset++] << 8
    }

    function fz(DD, zD) {
      return DD[zD.offset++] | DD[zD.offset++] << 8 | DD[zD.offset++] << 16 | DD[zD.offset++] << 24
    }

    function Iz(DD, zD) {
      return fz(DD, zD) >>> 0
    }

    function Bz(DD, zD) {
      return pz[0] = fz(DD, zD), sz[0]
    }

    function Gz(DD, zD) {
      return pz[0] = fz(DD, zD), pz[1] = fz(DD, zD), Kz[0]
    }

    function hz(DD, zD) {
      const wD = Iz(DD, zD);
      return fz(DD, zD) * Math.pow(2, 32) + wD
    }

    function nz(DD, zD) {
      const wD = Iz(DD, zD);
      return Iz(DD, zD) * Math.pow(2, 32) + wD
    }
    const Mz = {
        utf8Read: cz,
        int8: gz,
        uint8: Rz,
        int16: Az,
        uint16: Uz,
        int32: fz,
        uint32: Iz,
        float32: Bz,
        float64: Gz,
        int64: hz,
        uint64: nz,
        bigint64: function(DD, zD) {
          return pz[0] = fz(DD, zD), pz[1] = fz(DD, zD), Lz[0]
        },
        biguint64: function(DD, zD) {
          return pz[0] = fz(DD, zD), pz[1] = fz(DD, zD), rz[0]
        },
        boolean: function(DD, zD) {
          return Rz(DD, zD) > 0
        },
        string: function(DD, zD) {
          const wD = DD[zD.offset++];
          let pD;
          return wD < 192 ? pD = 31 & wD : 217 === wD ? pD = Rz(DD, zD) : 218 === wD ? pD = Uz(DD, zD) : 219 === wD && (pD = Iz(DD, zD)), cz(DD, zD, pD)
        },
        number: function(DD, zD) {
          const wD = DD[zD.offset++];
          return wD < 128 ? wD : 202 === wD ? Bz(DD, zD) : 203 === wD ? Gz(DD, zD) : 204 === wD ? Rz(DD, zD) : 205 === wD ? Uz(DD, zD) : 206 === wD ? Iz(DD, zD) : 207 === wD ? nz(DD, zD) : 208 === wD ? gz(DD, zD) : 209 === wD ? Az(DD, zD) : 210 === wD ? fz(DD, zD) : 211 === wD ? hz(DD, zD) : wD > 223 ? -1 * (255 - wD + 1) : void 0
        },
        stringCheck: function(DD, zD) {
          const wD = DD[zD.offset];
          return wD < 192 && wD > 160 || 217 === wD || 218 === wD || 219 === wD
        }
      },
      Oz = {},
      Jz = new Map;

    function Ez(DD, zD) {
      zD.constructor && (Object.prototype.hasOwnProperty.call(zD, "constructor") && null == zD.constructor[Symbol.metadata] && KD(zD.constructor), Jz.set(zD.constructor, DD), Oz[DD] = zD), zD.encode && (zz[DD] = zD.encode), zD.decode && (Mz[DD] = zD.decode)
    }

    function Qz(DD) {
      for (const zD in DD) Ez(zD, DD[zD]);
      return DD => Jp(DD)
    }
    const Xz = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function Vz() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Pz(DD) {
      return DD._stream ??= Vz()
    }

    function Cz(DD, zD, wD) {
      0 === zD.activeViews.size && Pz(DD).broadcastPending.add(wD)
    }

    function xz(DD, zD, wD, pD) {
      const KD = DD._stream;
      if (void 0 === KD) return !0;
      let rD = !1;
      return KD.broadcastPending.delete(pD) ? rD = !0 : KD.sentBroadcast.delete(pD) && KD.broadcastDeletes.add(pD), zD.forEachActiveView((DD => {
        const zD = KD.pendingByView.get(DD.id);
        if (zD?.has(pD)) return zD.delete(pD), void(rD = !0);
        const LD = KD.sentByView.get(DD.id);
        if (LD?.has(pD)) {
          LD.delete(pD);
          let zD = DD.changes.get(wD);
          void 0 === zD && (zD = new Map, DD.changes.set(wD, zD)), zD.set(pD, sD.DELETE)
        }
      })), rD
    }

    function Tz(DD, zD) {
      const wD = DD._stream?.pendingByView;
      if (void 0 === wD) return !1;
      for (const [pD, sD] of wD)
        if (sD.size > 0 && void 0 !== zD.activeViews.get(pD)?.deref()) return !0;
      return !1
    }

    function bz(DD) {
      const zD = DD._stream;
      return void 0 !== zD && (zD.broadcastPending.size > 0 || zD.broadcastDeletes.size > 0)
    }

    function jz(DD, zD, wD) {
      const pD = Pz(DD);
      let sD = pD.pendingByView.get(zD);
      void 0 === sD && (sD = new Set, pD.pendingByView.set(zD, sD)), sD.add(wD)
    }

    function dz(DD, zD) {
      const wD = DD._stream;
      void 0 !== wD && (wD.pendingByView.delete(zD), wD.sentByView.delete(zD), wD.priorityByView?.delete(zD))
    }
    const Sz = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function iz(DD) {
      if (null == DD || "object" !== typeof DD) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: zD,
        max: wD
      } = DD;
      if ("number" !== typeof zD || "number" !== typeof wD || !(wD > zD) || !Number.isFinite(zD) || !Number.isFinite(wD)) throw new Error(`t.quantized(): require finite min < max (got min=${zD}, max=${wD}).`);
      const pD = DD.bits ?? 16;
      if (8 !== pD && 16 !== pD && 32 !== pD) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${pD}).`);
      const sD = DD.mode ?? "clamp";
      if ("clamp" !== sD && "wrap" !== sD) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(sD)}).`);
      const KD = "wrap" === sD,
        rD = Math.pow(2, pD);
      return {
        min: zD,
        max: wD,
        bits: pD,
        wrap: KD,
        wire: Sz[pD],
        range: wD - zD,
        span: KD ? rD : zD === -wD ? rD - 2 : rD - 1
      }
    }

    function lz(DD) {
      return null !== DD && "object" === typeof DD && void 0 !== DD.quantized
    }

    function Wz(DD, zD) {
      if (DD.wrap) {
        if (!Number.isFinite(zD)) return 0;
        const wD = DD.range;
        let pD = (zD - DD.min) % wD;
        pD < 0 && (pD += wD);
        const sD = DD.span;
        return Math.floor(pD / wD * sD + .5) % sD
      }
      if (zD !== zD) return 0;
      const wD = zD < DD.min ? DD.min : zD > DD.max ? DD.max : zD;
      return Math.floor((wD - DD.min) / DD.range * DD.span + .5)
    }

    function Nz(DD, zD) {
      return DD.min + zD / DD.span * DD.range
    }

    function Zz(DD) {
      const zD = zz[DD.wire];
      return (wD, pD, sD) => zD(wD, Wz(DD, pD), sD)
    }
    class yz {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(DD) {
        const zD = Object.getPrototypeOf(DD);
        if (zD !== Tp) {
          let wD = yz.inheritedTypes.get(zD);
          wD || (wD = new Set, yz.inheritedTypes.set(zD, wD)), wD.add(DD)
        }
      }
      static cache(DD) {
        let zD = yz.cachedContexts.get(DD);
        return zD || (zD = new yz(DD), yz.cachedContexts.set(DD, zD)), zD
      }
      constructor(DD) {
        DD && this.discoverTypes(DD)
      }
      has(DD) {
        return this.schemas.has(DD)
      }
      get(DD) {
        return this.types[DD]
      }
      add(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(DD) && (this.types[zD] = DD, null == DD[Symbol.metadata] && vz.initialize(DD), this.schemas.set(DD, zD), !0)
      }
      getTypeId(DD) {
        return this.schemas.get(DD)
      }
      discoverTypes(DD) {
        if (!this.add(DD)) return;
        yz.inheritedTypes.get(DD)?.forEach((DD => {
          this.discoverTypes(DD)
        }));
        let zD = DD;
        for (;
          (zD = Object.getPrototypeOf(zD)) && zD !== Tp && zD !== Function.prototype;) this.discoverTypes(zD);
        const wD = DD[Symbol.metadata];
        (wD[xD] || wD[iD]) && (this.hasFilters = !0);
        for (const pD in wD) {
          const DD = wD[pD].type;
          if ("string" !== typeof DD && !lz(DD))
            if ("function" === typeof DD) this.discoverTypes(DD);
            else {
              const zD = Object.values(DD)[0];
              if ("string" === typeof zD) continue;
              this.discoverTypes(zD)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function kz(DD) {
      const zD = ez(DD);
      return zD ? {
        complexTypeKlass: Oz[zD],
        childType: DD[zD]
      } : {
        complexTypeKlass: !1,
        childType: DD
      }
    }

    function mz(DD, zD) {
      const wD = oz(DD),
        pD = ez(wD),
        sD = pD && ez(wD[pD]);
      if (sD) throw new Error(`${zD?`${zD}: `:""}@colyseus/schema: nested collections are not supported ("${pD}" of "${sD}"). Collections can only hold primitive types or Schema classes, wrap the inner ${sD} in a Schema class.`);
      return wD
    }

    function ez(DD) {
      return "object" === typeof DD && null !== DD ? Object.keys(DD).find((DD => void 0 !== Oz[DD])) : void 0
    }

    function oz(DD) {
      if ("object" !== typeof DD || null === DD) return DD;
      if (Array.isArray(DD)) return {
        array: oz(DD[0])
      };
      const zD = function(DD) {
        const zD = Object.keys(DD),
          wD = zD.filter((DD => /\d+/.test(DD)));
        if (wD.length > 0 && wD.length === zD.length / 2 && DD[DD[wD[0]]] == wD[0]) return "number";
        if (zD.length > 0 && zD.every((zD => DD[zD] === zD))) return "string"
      }(DD);
      if (zD) return zD;
      if (lz(DD)) return "string" === typeof DD.quantized.wire ? DD : {
        quantized: iz(DD.quantized)
      };
      if (void 0 !== DD.type) return oz(DD.type);
      const wD = ez(DD);
      return wD && (DD[wD] = oz(DD[wD])), DD
    }
    const az = [CD, bD, jD, dD, SD, iD, VD];

    function uz(DD, zD, wD) {
      DD[zD] || Object.defineProperty(DD, zD, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), DD[zD].push(wD)
    }
    const vz = {
        addField(DD, zD, wD, pD, sD) {
          if (zD >= 63) throw new Error(`Can't define field '${wD}'.\nSchema instances may only have up to 63 fields.`);
          DD[zD] = Object.assign(DD[zD] || {}, {
            type: pD,
            index: zD,
            name: wD
          }), Object.defineProperty(DD, QD, {
            value: DD[QD] || {},
            enumerable: !1,
            configurable: !0
          }), DD[QD][wD] = sD || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(DD, PD, {
            value: zD,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(DD, wD, {
            value: zD,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof DD[zD].type || lz(DD[zD].type) || (void 0 === DD[CD] && Object.defineProperty(DD, CD, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), DD[CD].push(zD));
          const KD = DD[zD].type;
          if (KD && "object" === typeof KD && void 0 !== KD.stream) {
            if (void 0 !== KD.array) throw new Error(Xz);
            DD[zD].stream = !0, DD[iD] || Object.defineProperty(DD, iD, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), DD[iD].includes(zD) || DD[iD].push(zD);
            const sD = pD?.priority;
            "function" === typeof sD && vz.setStreamPriority(DD, wD, sD)
          }
        },
        setTag(DD, zD, wD) {
          const pD = DD[zD];
          if (DD[pD].tag = wD, DD[xD] || (Object.defineProperty(DD, xD, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(DD, TD, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), DD[xD].push(pD), wD < 0) DD[TD][wD] || (DD[TD][wD] = []), DD[TD][wD].push(pD);
          else
            for (let sD = wD; sD > 0; sD &= sD - 1) {
              const zD = sD & -sD;
              DD[TD][zD] || (DD[TD][zD] = []), DD[TD][zD].push(pD)
            }
        },
        setUnreliable(DD, zD) {
          const wD = DD[zD];
          if ("string" !== typeof DD[wD].type) throw new Error(`@unreliable cannot be applied to ref-type field "${zD}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          DD[wD].unreliable = !0, DD[bD] || Object.defineProperty(DD, bD, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), DD[bD].push(wD)
        },
        setPatchOnly(DD, zD) {
          const wD = DD[zD];
          if (DD[wD].fullStateOnly) throw new Error(`field "${zD}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          DD[wD].patchOnly = !0, uz(DD, jD, wD), uz(DD, dD, wD)
        },
        setDeprecated(DD, zD) {
          const wD = DD[zD];
          DD[wD].deprecated = !0, uz(DD, dD, wD), Object.defineProperty(DD, wD, {
            value: DD[wD],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(DD, zD) {
          const wD = DD[zD];
          if (DD[wD].patchOnly) throw new Error(`field "${zD}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          DD[wD].fullStateOnly = !0, uz(DD, SD, wD)
        },
        setStream(DD, zD) {
          const wD = DD[zD];
          DD[wD].stream = !0, DD[iD] || Object.defineProperty(DD, iD, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), DD[iD].push(wD)
        },
        setStreamPriority(DD, zD, wD) {
          const pD = DD[zD];
          DD[lD] || Object.defineProperty(DD, lD, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), DD[lD][pD] = wD
        },
        getStreamPriority: (DD, zD) => DD?.[lD]?.[zD],
        defineField(DD, zD, wD, pD, sD) {
          const KD = mz(sD, `${DD.name}.${pD}`),
            {
              complexTypeKlass: rD,
              childType: LD
            } = kz(KD);
          vz.addField(zD, wD, pD, KD, Qp(pD, wD, LD, rD)), zD[QD][pD] && Object.defineProperty(DD.prototype, pD, zD[QD][pD]), ("string" === typeof KD || lz(KD)) && (zD[VD] || Object.defineProperty(zD, VD, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), zD[VD][wD] = "string" === typeof KD ? zz[KD] : Zz(KD.quantized))
        },
        setFields(DD, zD) {
          const wD = DD.prototype.constructor;
          yz.register(wD);
          const pD = Object.getPrototypeOf(wD),
            sD = pD && pD[Symbol.metadata],
            KD = vz.initialize(wD);
          wD[cD] || (wD[cD] = Tp[cD]), wD[gD] || (wD[gD] = Tp[gD]), wD[RD] || (wD[RD] = Tp[RD]), wD.prototype.toJSON || (wD.prototype.toJSON = Tp.prototype.toJSON);
          let rD = KD[PD] ?? (sD && sD[PD]) ?? -1;
          rD++, KD[VD] || Object.defineProperty(KD, VD, {
            value: sD?.[VD] ? [...sD[VD]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const LD in zD) {
            if (void 0 !== KD[LD]) throw new Error(`@colyseus/schema: Duplicate '${LD}' definition on '${wD.name||"(anonymous)"}'.`);
            vz.defineField(wD, KD, rD, LD, zD[LD]), rD++
          }
          return DD
        },
        isDeprecated: (DD, zD) => !0 === DD[zD].deprecated,
        initialize(DD) {
          const zD = Object.getPrototypeOf(DD),
            wD = zD[Symbol.metadata];
          let pD = DD[Symbol.metadata] ?? Object.create(null);
          if (zD !== Tp && pD === wD && (pD = Object.create(null), wD)) {
            Object.setPrototypeOf(pD, wD), Object.defineProperty(pD, PD, {
              value: wD[PD],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== wD[xD] && (Object.defineProperty(pD, xD, {
              value: [...wD[xD]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(pD, TD, {
              value: {
                ...wD[TD]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const DD of az) {
              const zD = wD[DD];
              void 0 !== zD && Object.defineProperty(pD, DD, {
                value: [...zD],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(pD, QD, {
              value: {
                ...wD[QD]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(DD, Symbol.metadata, {
            value: pD,
            writable: !1,
            configurable: !0
          }), pD
        },
        isValidInstance: DD => DD.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(DD.constructor[Symbol.metadata], PD),
        getFields(DD) {
          const zD = DD[Symbol.metadata],
            wD = {};
          for (let pD = 0; pD <= zD[PD]; pD++) wD[zD[pD].name] = zD[pD].type;
          return wD
        },
        hasViewTagAtIndex: (DD, zD) => DD?.[xD]?.includes(zD),
        hasUnreliableAtIndex: (DD, zD) => DD?.[bD]?.includes(zD),
        hasPatchOnlyAtIndex: (DD, zD) => DD?.[jD]?.includes(zD),
        hasFullStateOnlyAtIndex: (DD, zD) => DD?.[SD]?.includes(zD),
        hasStreamAtIndex: (DD, zD) => DD?.[iD]?.includes(zD)
      },
      tz = (DD, zD, wD) => DD(zD, wD);
    class Fz {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(DD) {
        this.ops = new Uint8Array(Math.max(DD + 1, 1))
      }
      record(DD, zD) {
        const wD = this.ops[DD];
        0 === wD ? this.ops[DD] = zD : (wD === sD.DELETE || wD === sD.ADD && zD === sD.DELETE_AND_ADD) && (this.ops[DD] = sD.DELETE_AND_ADD), DD < 32 ? this.dirtyLow |= 1 << DD : this.dirtyHigh |= 1 << DD - 32
      }
      recordDelete(DD, zD) {
        this.ops[DD] = zD, DD < 32 ? this.dirtyLow |= 1 << DD : this.dirtyHigh |= 1 << DD - 32
      }
      recordRaw(DD, zD) {
        this.record(DD, zD)
      }
      operationAt(DD) {
        const zD = this.ops[DD];
        return 0 === zD ? void 0 : zD
      }
      setOperationAt(DD, zD) {
        this.ops[DD] = zD
      }
      forEach(DD) {
        this.forEachWithCtx(DD, tz)
      }
      forEachWithCtx(DD, zD) {
        let wD = this.dirtyLow,
          pD = this.dirtyHigh;
        const sD = this.ops;
        for (; 0 !== wD;) {
          const pD = wD & -wD,
            KD = 31 - Math.clz32(pD);
          wD ^= pD, zD(DD, KD, sD[KD])
        }
        for (; 0 !== pD;) {
          const wD = pD & -pD,
            KD = 31 - Math.clz32(wD) + 32;
          pD ^= wD, zD(DD, KD, sD[KD])
        }
      }
      size() {
        return Hz(this.dirtyLow) + Hz(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Yz {
      mI = new Map;
      pureOps = [];
      record(DD, zD) {
        const wD = this.mI.get(DD);
        void 0 === wD ? this.mI.set(DD, zD) : (wD === sD.DELETE || wD === sD.ADD && zD === sD.DELETE_AND_ADD) && this.mI.set(DD, sD.DELETE_AND_ADD)
      }
      recordDelete(DD, zD) {
        this.mI.set(DD, zD)
      }
      recordRaw(DD, zD) {
        this.mI.set(DD, zD)
      }
      recordPure(DD) {
        this.pureOps.push([this.mI.size, DD])
      }
      operationAt(DD) {
        return this.mI.get(DD)
      }
      setOperationAt(DD, zD) {
        this.mI.has(DD) && this.mI.set(DD, zD)
      }
      forEach(DD) {
        this.forEachWithCtx(DD, tz)
      }
      forEachWithCtx(DD, zD) {
        const wD = this.pureOps;
        if (wD.length > 0) {
          let pD = 0,
            sD = 0;
          for (const [KD, rD] of this.mI) {
            for (; pD < wD.length && wD[pD][0] <= sD;) {
              const sD = wD[pD++][1];
              zD(DD, -sD, sD)
            }
            zD(DD, KD, rD), sD++
          }
          for (; pD < wD.length;) {
            const sD = wD[pD++][1];
            zD(DD, -sD, sD)
          }
        } else
          for (const [pD, sD] of this.mI) zD(DD, pD, sD)
      }
      size() {
        return this.mI.size + this.pureOps.length
      }
      has() {
        return this.mI.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.mI.clear(), this.pureOps.length = 0
      }
      shift(DD) {
        const zD = new Map;
        for (const [wD, pD] of this.mI) zD.set(wD + DD, pD);
        this.mI = zD
      }
    }

    function Hz(DD) {
      return 16843009 * ((DD = (858993459 & (DD -= DD >>> 1 & 1431655765)) + (DD >>> 2 & 858993459)) + (DD >>> 4) & 252645135) >>> 24
    }

    function qz(DD) {
      if (void 0 === DD) return 0;
      let zD = 0;
      for (let wD = 0, pD = DD.length; wD < pD; wD++) {
        const pD = DD[wD];
        pD < 32 && (zD |= 1 << pD)
      }
      return zD
    }

    function Dw(DD) {
      const zD = DD.constructor;
      if (Object.prototype.hasOwnProperty.call(zD, XD)) return zD[XD];
      const wD = zD[Symbol.metadata],
        pD = vz.isValidInstance(DD),
        sD = (wD?.[xD]?.length ?? 0) > 0,
        KD = function(DD) {
          const zD = [],
            wD = [],
            pD = [],
            sD = [],
            KD = DD?.[PD];
          if (void 0 === KD) return {
            names: zD,
            types: wD,
            tags: pD,
            encoders: sD
          };
          const rD = DD[VD];
          for (let LD = 0; LD <= KD; LD++) {
            const KD = DD[LD];
            void 0 !== KD ? (zD[LD] = KD.name, wD[LD] = KD.type, pD[LD] = KD.tag, sD[LD] = rD?.[LD]) : (zD[LD] = void 0, wD[LD] = void 0, pD[LD] = void 0, sD[LD] = void 0)
          }
          return {
            names: zD,
            types: wD,
            tags: pD,
            encoders: sD
          }
        }(wD),
        rD = pD && !sD ? void 0 : zD[AD],
        LD = {
          encoder: zD[gD],
          filter: rD,
          metadata: wD,
          isSchema: pD,
          filterBitmask: pD ? qz(wD?.[xD]) : 0,
          hasAnyFullStateOnly: (wD?.[SD]?.length ?? 0) > 0,
          hasAnyUnreliable: (wD?.[bD]?.length ?? 0) > 0,
          hasAnyStream: (wD?.[iD]?.length ?? 0) > 0,
          hasAnyView: sD,
          fullStateOnlyBitmask: qz(wD?.[SD]),
          unreliableBitmask: qz(wD?.[bD]),
          streamBitmask: qz(wD?.[iD]),
          names: KD.names,
          types: KD.types,
          tags: KD.tags,
          encoders: KD.encoders
        };
      return Object.defineProperty(zD, XD, {
        value: LD,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), LD
    }

    function zw(DD, zD) {
      if (void 0 !== DD.parentRef && zD(DD.parentRef, DD._parentIndex)) return !0;
      for (let wD = DD.extraParents; void 0 !== wD; wD = wD.next)
        if (zD(wD.ref, wD.index)) return !0;
      return !1
    }
    const ww = (DD, zD) => {
        DD.isFieldUnreliable(zD) ? DD.ensureUnreliableRecorder().record(zD, sD.ADD) : DD.record(zD, sD.ADD)
      },
      pw = (DD, zD) => DD(zD);

    function sw(DD, zD, wD) {
      const pD = DD.refTarget;
      if (void 0 !== pD[GD]) {
        if (DD.isPatchOnly) return;
        if (Array.isArray(pD.items)) {
          const DD = pD.items;
          for (let pD = 0, sD = DD.length; pD < sD; pD++) void 0 !== DD[pD] && wD(zD, pD)
        } else if (void 0 !== pD.journal)
          for (const [DD, sD] of pD.journal.keyByIndex) pD.$items.has(sD) && wD(zD, DD);
        else if (void 0 !== pD.$items)
          for (const DD of pD.$items.keys()) wD(zD, DD)
      } else {
        const sD = DD.metadata;
        if (!sD) return;
        const KD = sD[PD] ?? -1,
          rD = sD[dD],
          LD = DD.encDescriptor.names;
        for (let DD = 0; DD <= KD; DD++) {
          const sD = LD[DD];
          if (void 0 === sD) continue;
          if (rD && rD.includes(DD)) continue;
          const KD = pD[sD];
          void 0 !== KD && null !== KD && wD(zD, DD)
        }
      }
    }

    function Kw(DD, zD, wD, pD) {
      ! function(DD, zD, wD) {
        if (!zD) return;
        const pD = zD[BD],
          sD = !pD._isSchema;
        let KD;
        sD ? (zD = pD.parent, wD = pD.parentIndex, KD = zD?.[BD].metadata) : KD = pD.metadata;
        const rD = (KD?.[jD]?.includes(wD) ? Vw : 0) | (KD?.[SD]?.includes(wD) ? Pw : 0),
          LD = pD.flags & Tw | rD,
          cD = DD.flags;
        DD.flags = cD | LD;
        LD & ~cD & Pw && (DD.reset(), DD.unreliableRecorder?.reset());
        const gD = DD.root?.types;
        if (!gD?.hasFilters) return;
        const RD = KD?.[xD]?.includes(wD) ?? !1,
          AD = KD?.[iD]?.includes(wD) ?? !1,
          UD = pD.isFiltered || RD || AD;
        if (DD.isFiltered = UD, AD && !sD) {
          DD.isStreamCollection = !0;
          const zD = Pz(DD.ref);
          if (void 0 === zD.priority) {
            const DD = vz.getStreamPriority(KD, wD);
            void 0 !== DD && (zD.priority = DD)
          }
          DD.root?.registerStream(DD.ref)
        }
        if (UD) {
          const zD = Lw(DD);
          DD.isVisibilitySharedWithParent = pD.isFiltered && zD && !AD && (!RD || sD && KD[wD].tag !== Bp)
        }
      }(DD, zD, wD), DD.isFullStateOnly || (DD.has() && DD.root?.enqueueChangeTree(DD), DD.unreliableRecorder?.has() && DD.root?.enqueueUnreliable(DD), DD.has() || DD.unreliableRecorder?.has() || DD.root?.enqueueChangeTree(DD))
    }

    function rw(DD) {
      const zD = DD.pendingFilterRefresh;
      for (let wD = 0; wD < zD.length; wD++) {
        const DD = zD[wD];
        0 !== (DD.flags & xw) && gw(DD)
      }
      zD.length = 0
    }

    function Lw(DD) {
      return DD._isSchema || "string" !== typeof DD.refTarget[GD]
    }

    function gw(DD) {
      DD.flags &= ~xw;
      const zD = DD.root;
      if (void 0 === zD || void 0 === DD.parentRef) return;
      const wD = Lw(DD);
      let pD = Iw(DD, DD.parentRef, DD._parentIndex, wD);
      for (let KD = DD.extraParents; void 0 !== KD && pD !== fw; KD = KD.next) pD |= Iw(DD, KD.ref, KD.index, wD);
      if (0 === pD) return;
      DD.isVisibilitySharedWithParent = 0 !== (pD & Uw);
      const sD = 0 === (pD & Aw);
      sD !== DD.isFiltered && (DD.isFiltered = sD, sD || DD.isFullStateOnly || (DD.forEachLiveWithCtx(DD, ww), DD.has() && zD.enqueueChangeTree(DD), DD.unreliableRecorder?.has() && zD.enqueueUnreliable(DD)), DD.forEachChildWithCtx(DD, Bw))
    }
    const Rw = 1,
      Aw = 2,
      Uw = 4,
      fw = Rw | Aw | Uw;

    function Iw(DD, zD, wD, pD) {
      const sD = zD[BD];
      if (sD.root !== DD.root || ! function(DD, zD, wD) {
          const pD = zD.refTarget;
          if (zD.isArray) {
            const zD = pD.items,
              sD = zD[wD];
            if (void 0 !== sD && sD[BD] === DD) return !0;
            for (let wD = 0, pD = zD.length; wD < pD; wD++) {
              const pD = zD[wD];
              if (void 0 !== pD && pD[BD] === DD) return !0
            }
            return !1
          }
          const sD = zD.getValue(wD);
          return void 0 !== sD && sD[BD] === DD
        }(DD, sD, wD)) return 0;
      sD.flags & xw && gw(sD);
      let KD = Rw;
      if (sD._isSchema) {
        void 0 !== sD.encDescriptor.tags[wD] || sD.isFieldStream(wD) || (sD.isFiltered ? pD && (KD |= Uw) : KD |= Aw)
      } else if (sD.isFiltered) {
        if (pD && !sD.isStreamCollection) {
          const DD = sD.parent?.[BD];
          (DD?._isSchema ? DD.encDescriptor.tags[sD.parentIndex] : void 0) !== Bp && (KD |= Uw)
        }
      } else KD |= Aw;
      return KD
    }
    const Bw = (DD, zD, wD) => {
      gw(zD)
    };

    function Gw(DD, zD, wD, pD) {
      if (DD.addParent(zD, pD), !wD) return;
      const sD = wD.add(DD);
      wD !== DD.root && (DD.root = wD, Kw(DD, zD, pD));
      const KD = zD?.[BD];
      if (void 0 !== KD && void 0 !== KD.subscribedViews && void 0 !== zD[GD] && function(DD, zD, wD, pD) {
          const sD = DD.subscribedViews;
          if (void 0 === sD) return;
          const KD = DD.isStreamCollection,
            rD = KD ? DD.ref : void 0,
            LD = KD ? void 0 : wD[BD];
          for (let cD = 0, gD = sD.length; cD < gD; cD++) {
            let DD = sD[cD];
            for (; 0 !== DD;) {
              const wD = DD & -DD;
              DD ^= wD;
              const gD = 32 * cD + (31 - Math.clz32(wD)),
                RD = pD.activeViews.get(gD),
                AD = RD?.deref();
              void 0 !== AD ? KD ? jz(rD, gD, zD) : void 0 !== LD && AD.markVisible(LD) : sD[cD] &= ~wD
            }
          }
        }(KD, pD, DD.ref, wD), sD) {
        let zD = Ow[Jw];
        void 0 === zD && (zD = {
          parentRef: void 0,
          root: void 0
        }, Ow[Jw] = zD), zD.parentRef = DD.ref, zD.root = wD, Jw++, nw(DD, zD, Ew), Jw--
      }
    }

    function hw(DD, zD, wD) {
      DD(zD, wD)
    }

    function nw(DD, zD, wD) {
      const pD = DD.refTarget;
      if (pD[GD]) {
        if ("string" !== typeof pD[GD]) {
          const DD = pD.items;
          if (void 0 !== DD)
            for (let pD = 0, sD = DD.length; pD < sD; pD++) {
              const sD = DD[pD];
              sD && wD(zD, sD[BD], pD)
            } else {
              const DD = pD.$items,
                sD = pD._collectionIndexes;
              for (const pD of DD.keys()) {
                const KD = DD.get(pD);
                KD && wD(zD, KD[BD], sD?.[pD] ?? pD)
              }
            }
        }
      } else {
        const sD = DD.metadata,
          KD = sD?.[CD];
        if (!KD) return;
        const rD = DD.encDescriptor.names;
        for (let DD = 0, LD = KD.length; DD < LD; DD++) {
          const sD = KD[DD],
            LD = pD[rD[sD]];
          LD && wD(zD, LD[BD], sD)
        }
      }
    }

    function Mw(DD, zD, wD) {
      zD.root !== DD ? zD.setRoot(DD) : DD.add(zD)
    }
    const Ow = [];
    let Jw = 0;

    function Ew(DD, zD, wD) {
      if (zD.root === DD.root) return DD.root.add(zD), void DD.root.moveNextToParent(zD);
      zD.setParent(DD.parentRef, DD.root, wD)
    }

    function Qw(DD, zD, wD) {
      const pD = (3 & wD) << 3;
      return wD < 4 ? DD >>> pD & 255 : zD >>> pD & 255
    }
    const Xw = (DD, zD, wD) => DD(zD, wD);
    const Vw = 16,
      Pw = 32,
      Cw = 128,
      xw = 256,
      Tw = Vw | Pw;
    class bw {
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
      set isFiltered(DD) {
        this.flags = DD ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(DD) {
        this.flags = DD ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(DD) {
        this.flags = DD ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(DD) {
        this.flags = DD ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & Vw)
      }
      set isPatchOnly(DD) {
        this.flags = DD ? this.flags | Vw : this.flags & ~Vw
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & Pw)
      }
      set isFullStateOnly(DD) {
        this.flags = DD ? this.flags | Pw : this.flags & ~Pw
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(DD) {
        this.flags = DD ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Cw)
      }
      set needsRestage(DD) {
        this.flags = DD ? this.flags | Cw : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Fz(this.metadata?.[PD] ?? 0) : new Yz), this.unreliableRecorder
      }
      isFieldUnreliable(DD) {
        const zD = this.encDescriptor;
        return !!zD.hasAnyUnreliable && (DD < 32 ? 0 !== (zD.unreliableBitmask & 1 << DD) : vz.hasUnreliableAtIndex(this.metadata, DD))
      }
      isFieldFullStateOnly(DD) {
        if (this.isFullStateOnly) return !0;
        const zD = this.encDescriptor;
        return !!zD.hasAnyFullStateOnly && (DD < 32 ? 0 !== (zD.fullStateOnlyBitmask & 1 << DD) : vz.hasFullStateOnlyAtIndex(this.metadata, DD))
      }
      isFieldStream(DD) {
        const zD = this.encDescriptor;
        return !!zD.hasAnyStream && (DD < 32 ? 0 !== (zD.streamBitmask & 1 << DD) : vz.hasStreamAtIndex(this.metadata, DD))
      }
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        this.ref = DD, this.refTarget = zD;
        const wD = Dw(DD);
        this.encDescriptor = wD, this.metadata = wD.metadata;
        const pD = wD.isSchema;
        if (this._isSchema = pD, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, pD) {
          const DD = this.metadata?.[PD] ?? 0;
          DD > 7 && (this.ops = new Uint8Array(DD + 1))
        } else this.collDirty = new Map
      }
      _opAt(DD) {
        const zD = this.ops;
        if (void 0 !== zD) return zD[DD];
        const wD = (3 & DD) << 3;
        return DD < 4 ? this.opsLow >>> wD & 255 : this.opsHigh >>> wD & 255
      }
      _opPut(DD, zD) {
        const wD = this.ops;
        if (void 0 !== wD) return void(wD[DD] = zD);
        const pD = (3 & DD) << 3,
          sD = ~(255 << pD);
        DD < 4 ? this.opsLow = this.opsLow & sD | zD << pD : this.opsHigh = this.opsHigh & sD | zD << pD
      }
      _markDirty(DD) {
        DD < 32 ? this.dirtyLow |= 1 << DD : this.dirtyHigh |= 1 << DD - 32
      }
      record(DD, zD) {
        if (this._isSchema) {
          const wD = this._opAt(DD);
          0 === wD ? this._opPut(DD, zD) : (wD === sD.DELETE || wD === sD.ADD && zD === sD.DELETE_AND_ADD) && this._opPut(DD, sD.DELETE_AND_ADD), this._markDirty(DD)
        } else {
          const wD = this.collDirty,
            pD = wD.get(DD);
          let KD;
          KD = void 0 === pD ? zD : pD === sD.DELETE || pD === sD.ADD && zD === sD.DELETE_AND_ADD ? sD.DELETE_AND_ADD : pD, wD.set(DD, KD)
        }
      }
      recordDelete(DD, zD) {
        this._isSchema ? (this._opPut(DD, zD), this._markDirty(DD)) : this.collDirty.set(DD, zD)
      }
      recordRaw(DD, zD) {
        this._isSchema ? (this._opPut(DD, zD), this._markDirty(DD)) : this.collDirty.set(DD, zD)
      }
      recordPure(DD) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, DD])
      }
      operationAt(DD) {
        if (this._isSchema) {
          const zD = this._opAt(DD);
          return 0 === zD ? void 0 : zD
        }
        return this.collDirty.get(DD)
      }
      setOperationAt(DD, zD) {
        if (this._isSchema) this._opPut(DD, zD);
        else {
          const wD = this.collDirty;
          wD.has(DD) && wD.set(DD, zD)
        }
      }
      forEach(DD) {
        this.forEachWithCtx(DD, Xw)
      }
      forEachWithCtx(DD, zD) {
        if (this._isSchema) {
          let wD = this.dirtyLow,
            pD = this.dirtyHigh;
          const sD = this.ops;
          if (void 0 !== sD) {
            for (; 0 !== wD;) {
              const pD = wD & -wD,
                KD = 31 - Math.clz32(pD);
              wD ^= pD, zD(DD, KD, sD[KD])
            }
            for (; 0 !== pD;) {
              const wD = pD & -pD,
                KD = 31 - Math.clz32(wD) + 32;
              pD ^= wD, zD(DD, KD, sD[KD])
            }
          } else {
            const pD = this.opsLow,
              sD = this.opsHigh;
            for (; 0 !== wD;) {
              const KD = wD & -wD,
                rD = 31 - Math.clz32(KD);
              wD ^= KD, zD(DD, rD, Qw(pD, sD, rD))
            }
          }
          return
        }
        const wD = this.collDirty,
          pD = this.collPureOps;
        if (void 0 !== pD && pD.length > 0) {
          let sD = 0,
            KD = 0;
          for (const [rD, LD] of wD) {
            for (; sD < pD.length && pD[sD][0] <= KD;) {
              const wD = pD[sD++][1];
              zD(DD, -wD, wD)
            }
            zD(DD, rD, LD), KD++
          }
          for (; sD < pD.length;) {
            const wD = pD[sD++][1];
            zD(DD, -wD, wD)
          }
        } else
          for (const [sD, KD] of wD) zD(DD, sD, KD)
      }
      size() {
        return this._isSchema ? Hz(this.dirtyLow) + Hz(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(DD, zD) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const wD = this.collDirty,
          pD = new Map,
          KD = !this.paused && !this.isFullStateOnly;
        if (DD > 0)
          for (const [sD, rD] of wD) sD < DD && pD.set(sD, rD);
        if (KD)
          for (let rD = 0; rD < zD; rD++) pD.set(DD + rD, sD.ADD);
        for (const [sD, rD] of wD) sD >= DD && pD.set(sD + zD, rD);
        this.collDirty = pD, KD && this.root?.enqueueChangeTree(this)
      }
      removeAt(DD, zD) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const wD = this.collDirty,
          pD = DD + zD;
        let sD = !1;
        for (const rD of wD.keys())
          if (rD >= pD) {
            sD = !0;
            break
          } if (!sD) {
          for (let zD = DD; zD < pD; zD++) wD.delete(zD);
          return
        }
        const KD = new Map;
        for (const [rD, LD] of wD) rD < DD ? KD.set(rD, LD) : rD >= pD && KD.set(rD - zD, LD);
        this.collDirty = KD
      }
      unshift(DD) {
        this.insertAt(0, DD)
      }
      setRoot(DD) {
        ! function(DD, zD) {
          DD.root = zD;
          const wD = zD.add(DD);
          Kw(DD, DD.parent, DD.parentIndex), wD && nw(DD, zD, Mw)
        }(this, DD)
      }
      setParent(DD, zD, wD) {
        Gw(this, DD, zD, wD)
      }
      forEachChild(DD) {
        nw(this, DD, hw)
      }
      forEachChildWithCtx(DD, zD) {
        nw(this, DD, zD)
      }
      forEachLive(DD) {
        sw(this, DD, pw)
      }
      forEachLiveWithCtx(DD, zD) {
        sw(this, DD, zD)
      }
      operation(DD) {
        this.paused || this.isFullStateOnly || (this.recordPure(DD), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(DD, zD, wD) {
        if (!this.paused && !this.isFieldFullStateOnly(DD)) {
          if (this.isFieldUnreliable(DD) && !this.isNew) {
            const pD = this.ensureUnreliableRecorder();
            return wD ? pD.recordRaw(DD, zD) : pD.record(DD, zD), void this.root?.enqueueUnreliable(this)
          }
          wD ? this.recordRaw(DD, zD) : this.record(DD, zD), this.root?.enqueueChangeTree(this)
        }
      }
      change(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sD.ADD;
        this._routeAndRecord(DD, zD, !1)
      }
      indexedOperation(DD, zD) {
        this._routeAndRecord(DD, zD, !0)
      }
      getChange(DD) {
        return this.operationAt(DD)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(DD) {
        const zD = this.paused;
        this.paused = !0;
        try {
          return DD()
        } finally {
          this.paused = zD
        }
      }
      markDirty(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sD.ADD;
        const wD = this.paused;
        this.paused = !1;
        try {
          this.change(DD, zD)
        } finally {
          this.paused = wD
        }
      }
      getValue(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[UD](DD, zD)
      }
      delete(DD, zD) {
        if (void 0 === DD) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${DD}'`)
          } catch (Ls) {
            console.warn(Ls)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(DD)) return this.getValue(DD);
        const wD = this.isFieldUnreliable(DD) && !this.isNew;
        wD ? this.ensureUnreliableRecorder().recordDelete(DD, zD ?? sD.DELETE) : this.recordDelete(DD, zD ?? sD.DELETE);
        const pD = this.getValue(DD);
        return pD && pD[BD] && this.root?.remove(pD[BD]), wD ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), pD
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[nD]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[nD]?.()
      }
      discard() {
        this._isSchema || this.refTarget[nD]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const DD = DD => {
          if (DD < 0) return;
          const zD = this.getValue(DD);
          zD && zD[BD] && zD[BD].discardAll()
        };
        this.forEach(DD), this.unreliableRecorder?.forEach(DD), this.discard()
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
      addParent(DD, zD) {
        ! function(DD, zD, wD) {
          if (DD.parentRef) {
            if (DD.parentRef[BD] === zD[BD]) return void(DD._parentIndex = wD);
            if (zw(DD, ((DD, wD) => DD[BD] === zD[BD]))) return void(DD._parentIndex = wD)
          }
          void 0 === DD.parentRef ? (DD.parentRef = zD, DD._parentIndex = wD) : (DD.extraParents = {
            ref: DD.parentRef,
            index: DD._parentIndex,
            next: DD.extraParents
          }, DD.parentRef = zD, DD._parentIndex = wD)
        }(this, DD, zD)
      }
      setParentIndex(DD, zD) {
        ! function(DD, zD, wD) {
          if (void 0 !== DD.extraParents)
            if (DD.parentRef[BD] !== zD[BD]) {
              for (let pD = DD.extraParents; void 0 !== pD; pD = pD.next)
                if (pD.ref[BD] === zD[BD]) return void(pD.index = wD)
            } else DD._parentIndex = wD;
          else DD._parentIndex = wD
        }(this, DD, zD)
      }
      removeParent() {
        return function(DD, zD) {
          if (DD.parentRef && DD.parentRef[BD] === zD[BD]) return DD.extraParents ? (DD.parentRef = DD.extraParents.ref, DD._parentIndex = DD.extraParents.index, DD.extraParents = DD.extraParents.next) : (DD.parentRef = void 0, DD._parentIndex = void 0), !0;
          let wD = DD.extraParents,
            pD = null;
          for (; wD;) {
            if (wD.ref[BD] === zD[BD]) return pD ? pD.next = wD.next : DD.extraParents = wD.next, !0;
            pD = wD, wD = wD.next
          }
          return void 0 === DD.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(DD) {
        return function(DD, zD) {
          if (void 0 !== DD.parentRef && zD(DD.parentRef, DD._parentIndex)) return {
            ref: DD.parentRef,
            index: DD._parentIndex
          };
          for (let wD = DD.extraParents; void 0 !== wD; wD = wD.next)
            if (zD(wD.ref, wD.index)) return {
              ref: wD.ref,
              index: wD.index
            }
        }(this, DD)
      }
      hasParent(DD) {
        return zw(this, DD)
      }
      indexInParent(DD) {
        return function(DD, zD) {
          if (DD.parentRef && DD.parentRef[BD] === zD[BD]) return DD._parentIndex;
          for (let wD = DD.extraParents; void 0 !== wD; wD = wD.next)
            if (wD.ref[BD] === zD[BD]) return wD.index
        }(this, DD)
      }
      getAllParents() {
        return function(DD) {
          const zD = [];
          DD.parentRef && zD.push({
            ref: DD.parentRef,
            index: DD._parentIndex
          });
          let wD = DD.extraParents;
          for (; wD;) zD.push({
            ref: wD.ref,
            index: wD.index
          }), wD = wD.next;
          return zD
        }(this)
      }
    }
    class jw {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(DD) {
        this.ref = DD
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
      untracked(DD) {
        return DD()
      }
      markDirty() {}
      forEachChild(DD) {
        const zD = this.ref;
        if (zD[GD]) {
          if ("string" !== typeof zD[GD])
            for (const [wD, pD] of zD.entries()) pD && DD(pD[BD], zD._collectionIndexes?.[wD] ?? wD);
          return
        }
        const wD = zD.constructor,
          pD = wD?.[Symbol.metadata];
        if (!pD) return;
        const sD = pD[CD] ?? [];
        for (let KD = 0; KD < sD.length; KD++) {
          const wD = sD[KD],
            rD = zD[pD[wD].name];
          rD && DD(rD[BD], wD)
        }
      }
      forEachChildWithCtx(DD, zD) {
        this.forEachChild(((wD, pD) => zD(DD, wD, pD)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function dw(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
      var wD;
      Object.defineProperty(DD, BD, {
        value: (wD = zD, new jw(wD)),
        enumerable: !1,
        writable: !0
      })
    }

    function Sw(DD, zD, wD, pD, KD, rD, cD) {
      void 0 !== cD ? cD(zD, pD, rD) : "string" === typeof wD ? zz[wD]?.(zD, pD, rD) : null != wD[Symbol.metadata] ? (zz.number(zD, pD[LD], rD), (KD & sD.ADD) === sD.ADD && DD.tryEncodeTypeId(zD, wD, pD.constructor, rD)) : zz.number(zD, pD[LD], rD)
    }
    const iw = function(DD, zD, wD, pD, KD, rD, LD, cD) {
        if (zD[rD.offset++] = 255 & (pD | KD), KD === sD.DELETE) return;
        const gD = wD.encDescriptor,
          RD = wD.ref,
          AD = RD[JD][pD] ?? RD[gD.names[pD]];
        Sw(DD, zD, gD.types[pD], AD, KD, rD, gD.encoders[pD])
      },
      lw = function(DD, zD, wD, pD, KD, rD) {
        if (zD[rD.offset++] = 255 & KD, zz.number(zD, pD, rD), KD === sD.DELETE) return;
        const LD = wD.ref;
        if ((KD & sD.ADD) === sD.ADD) {
          const DD = LD.$indexes.get(pD);
          zz.string(zD, DD, rD)
        }
        Sw(DD, zD, LD[GD], LD[UD](pD), KD, rD)
      },
      Ww = function(DD, zD, wD, pD, KD, rD) {
        if (zD[rD.offset++] = 255 & KD, zz.number(zD, pD, rD), KD === sD.DELETE) return;
        const LD = wD.ref;
        Sw(DD, zD, LD[GD], LD[UD](pD), KD, rD)
      },
      Nw = function(DD, zD, wD, pD, KD, rD) {
        const LD = wD.ref;
        (KD & sD.ADD) === sD.ADD && "function" === typeof LD.set ? lw(DD, zD, wD, pD, KD, rD) : Ww(DD, zD, wD, pD, KD, rD)
      },
      Zw = function(DD, zD, wD, pD, KD, rD, cD, gD) {
        const RD = wD.refTarget,
          AD = RD[GD],
          fD = "string" !== typeof AD;
        let ID;
        if (gD && wD.isFiltered && fD) {
          const DD = RD.tmpItems[pD];
          if (!DD) return;
          if (ID = DD[LD], KD === sD.DELETE) KD = sD.DELETE_BY_REFID;
          else if ((KD & sD.ADD) === sD.ADD) KD = sD.ADD_BY_REFID;
          else if ((KD & sD.MOVE) === sD.MOVE) return
        } else if (KD === sD.DELETE && fD) {
          const DD = RD.tmpItems[pD];
          if (!DD) return;
          ID = DD[LD], KD = sD.DELETE_BY_REFID
        } else ID = pD;
        if (zD[rD.offset++] = 255 & KD, zz.number(zD, ID, rD), KD === sD.DELETE || KD === sD.DELETE_BY_REFID) return;
        Sw(DD, zD, AD, RD[UD](pD, cD), KD, rD)
      };

    function yw(DD, zD, wD, pD, KD, rD, cD) {
      const gD = DD.resyncVisited;
      let RD = gD.get(DD.currentRefId);
      if (void 0 === RD && gD.set(DD.currentRefId, RD = new Set), RD.add(pD), void 0 !== KD && wD === sD.ADD && KD !== rD) {
        const wD = KD[LD];
        void 0 !== wD && (DD.root.removeRef(wD), cD?.push({
          ref: zD,
          refId: DD.currentRefId,
          op: sD.DELETE,
          dynamicIndex: pD,
          value: void 0,
          previousValue: KD
        }))
      }
    }

    function kw(DD, zD, wD, pD) {
      const sD = zD[LD];
      if (void 0 === sD || wD.has(sD)) return;
      wD.add(sD);
      const KD = zD.constructor[Symbol.metadata],
        rD = KD?.[CD];
      if (void 0 === rD) return;
      const cD = KD[jD];
      for (let LD = 0; LD < rD.length; LD++) {
        const sD = rD[LD];
        if (void 0 !== cD && cD.includes(sD)) continue;
        const gD = KD[sD],
          RD = zD[gD.name];
        RD && (Tp.is(gD.type) ? kw(DD, RD, wD, pD) : mw(DD, RD, wD, pD))
      }
    }

    function mw(DD, zD, wD, pD) {
      const KD = zD[hD] ?? zD,
        rD = KD[LD];
      if (void 0 === rD || wD.has(rD)) return;
      wD.add(rD);
      const cD = DD.resyncVisited.get(rD);
      if (void 0 === cD) return;
      const gD = DD.root;
      KD[ID](cD, ((DD, wD) => {
        pD?.push({
          ref: zD,
          refId: rD,
          op: sD.DELETE,
          dynamicIndex: wD,
          value: void 0,
          previousValue: DD
        });
        const KD = DD?.[LD];
        void 0 !== KD && gD.removeRef(KD)
      }), (zD => {
        Tp.isSchema(zD) && kw(DD, zD, wD, pD)
      }))
    }
    const ew = 1,
      ow = 2,
      aw = 3,
      uw = 4,
      vw = 5;

    function tw(DD, zD, wD, pD, KD, rD, cD, gD, RD) {
      const AD = DD.root;
      let UD;
      if ((zD & sD.DELETE) === sD.DELETE) {
        const DD = KD?.[LD];
        void 0 !== DD && AD.removeRef(DD), zD !== sD.DELETE_AND_ADD && wD[fD](pD), UD = void 0
      }
      if (zD === sD.DELETE);
      else if ("string" === typeof rD) UD = Mz[rD](cD, gD);
      else if (lz(rD)) UD = function(DD, zD, wD) {
        return Nz(DD, (0, Mz[DD.wire])(zD, wD))
      }(rD.quantized, cD, gD);
      else if (Tp.is(rD)) {
        const wD = Mz.number(cD, gD);
        if (UD = AD.refs.get(wD), (zD & sD.ADD) === sD.ADD) {
          const pD = DD.getInstanceType(cD, gD, rD);
          UD || (UD = DD.createInstanceOfType(pD)), AD.addRef(wD, UD, UD !== KD || zD === sD.DELETE_AND_ADD && UD === KD)
        }
      } else {
        const wD = (ID = Object.keys(rD)[0], Oz[ID]),
          pD = Mz.number(cD, gD);
        null !== DD.resyncVisited && function(DD, zD) {
          const wD = DD.resyncVisited;
          wD.has(zD) || wD.set(zD, new Set)
        }(DD, pD);
        const fD = AD.refs.has(pD) ? KD || AD.refs.get(pD) : wD.constructor.initializeForDecoder();
        if (UD = fD.clone(!0), UD[GD] = Object.values(rD)[0], KD) {
          let DD = KD[LD];
          if (void 0 !== DD && pD !== DD) {
            (zD & sD.DELETE) !== sD.DELETE && AD.removeRef(DD);
            const wD = KD.entries();
            let pD;
            for (;
              (pD = wD.next()) && !pD.done;) {
              const [zD, wD] = pD.value;
              "object" === typeof wD && (DD = wD[LD]), RD?.push({
                ref: KD,
                refId: DD,
                op: sD.DELETE,
                field: zD,
                value: void 0,
                previousValue: wD
              })
            }
          }
        }
        AD.addRef(pD, UD, fD !== KD || zD === sD.DELETE_AND_ADD && fD === KD)
      }
      var ID;
      return UD
    }
    const Fw = function(DD, zD, wD, pD, sD) {
        const KD = zD[wD.offset++],
          rD = pD.constructor[Symbol.metadata],
          LD = KD >> 6 << 6,
          cD = KD % (LD || 255),
          gD = rD[cD];
        if (void 0 === gD) return console.warn("@colyseus/schema: field not defined at", {
          index: cD,
          ref: pD.constructor.name,
          metadata: rD
        }), -1;
        const RD = !0 === gD.deprecated,
          AD = RD ? void 0 : pD[UD](cD),
          fD = tw(DD, LD, pD, cD, AD, gD.type, zD, wD, sD);
        RD || (null !== fD && void 0 !== fD && (pD[gD.name] = fD), AD !== fD && sD?.push({
          ref: pD,
          refId: DD.currentRefId,
          op: LD,
          field: gD.name,
          value: fD,
          previousValue: AD
        }))
      },
      Yw = function(DD, zD, wD, pD, KD) {
        const rD = pD[hD] ?? pD,
          LD = zD[wD.offset++];
        if (LD === sD.CLEAR) return DD.removeChildRefs(rD, KD), void rD.clear();
        const cD = Mz.number(zD, wD),
          gD = rD[GD],
          RD = rD.constructor.COLLECTION_KIND;
        let AD;
        (LD & sD.ADD) === sD.ADD ? RD === ew ? (AD = Mz.string(zD, wD), rD.setIndex(cD, AD)) : AD = cD : AD = rD.getIndex(cD);
        const fD = rD[UD](cD),
          ID = tw(DD, LD, pD, cD, fD, gD, zD, wD, KD);
        if (null !== DD.resyncVisited && yw(DD, pD, LD, AD, fD, ID, KD), null !== ID && void 0 !== ID) switch (RD) {
          case ew:
            rD.$items.set(AD, ID);
            break;
          case ow:
            rD.$setAt(cD, ID, null !== DD.resyncVisited && LD === sD.ADD ? sD.REPLACE : LD);
            break;
          case aw:
          case uw:
          case vw:
            rD.$items.has(cD) || (rD.$items.set(cD, ID), "number" === typeof rD.$refId && cD >= rD.$refId && (rD.$refId = cD + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${rD.constructor?.name} \u2014 item at index ${cD} was not stored.`)
        }
        fD !== ID && KD?.push({
          ref: pD,
          refId: DD.currentRefId,
          op: LD,
          dynamicIndex: AD,
          value: ID,
          previousValue: fD
        })
      },
      Hw = function(DD, zD, wD, pD, KD) {
        const rD = pD[hD] ?? pD;
        let LD, cD = zD[wD.offset++];
        if (cD === sD.CLEAR) return DD.removeChildRefs(rD, KD), void rD.clear();
        if (cD === sD.REVERSE) return void rD.items.reverse();
        if (cD === sD.DELETE_BY_REFID) {
          const cD = Mz.number(zD, wD),
            gD = DD.root.refs.get(cD);
          if (void 0 === gD) return;
          if (DD.root.removeRef(cD), LD = rD.findIndex((DD => DD === gD)), -1 === LD) return;
          return rD[fD](LD), void KD?.push({
            ref: pD,
            refId: DD.currentRefId,
            op: sD.DELETE,
            dynamicIndex: LD,
            value: void 0,
            previousValue: gD
          })
        }
        if (cD === sD.ADD_BY_REFID) {
          const pD = Mz.number(zD, wD),
            sD = DD.root.refs.get(pD);
          sD && (LD = rD.findIndex((DD => DD === sD))), -1 !== LD && void 0 !== LD || (LD = rD.length)
        } else LD = Mz.number(zD, wD);
        const gD = rD[GD];
        let RD = LD;
        const AD = rD.items[LD],
          UD = tw(DD, cD, pD, LD, AD, gD, zD, wD, KD);
        null !== DD.resyncVisited && yw(DD, pD, cD, LD, AD, UD, KD), null !== UD && void 0 !== UD && UD !== AD && rD.$setAt(LD, UD, null !== DD.resyncVisited && cD === sD.ADD ? sD.REPLACE : cD), AD !== UD && KD?.push({
          ref: pD,
          refId: DD.currentRefId,
          op: cD,
          dynamicIndex: RD,
          value: UD,
          previousValue: AD
        })
      };
    class qw extends Error {}

    function Dp(DD, zD, wD, pD) {
      if (!(DD instanceof zD)) throw new qw(`a '${zD.name}' was expected, but '${DD&&DD.constructor.name}' was provided in ${wD.constructor.name}#${pD}`)
    }
    const zp = (DD, zD) => {
        const wD = DD.toString(),
          pD = zD.toString();
        return wD < pD ? -1 : wD > pD ? 1 : 0
      },
      wp = {
        get: (DD, zD) => "symbol" === typeof zD || isNaN(zD) ? Reflect.get(DD, zD) : DD.items[zD],
        set: (DD, zD, wD) => {
          if ("symbol" !== typeof zD && !isNaN(zD)) {
            if (void 0 === wD || null === wD) DD.$deleteAt(zD);
            else {
              let pD;
              if (wD[BD]) {
                Dp(wD, DD[GD], DD, zD);
                const KD = DD.items[zD];
                DD.isMovingItems ? (pD = DD.$wireIndex(Number(zD)), void 0 !== KD ? wD[BD].isNew ? DD[BD].indexedOperation(pD, sD.MOVE_AND_ADD) : (DD[BD].getChange(pD) & sD.DELETE) === sD.DELETE ? DD[BD].indexedOperation(pD, sD.DELETE_AND_MOVE) : DD[BD].indexedOperation(pD, sD.MOVE) : wD[BD].isNew && DD[BD].indexedOperation(pD, sD.ADD), wD[BD].setParent(DD, DD[BD].root, pD)) : pD = DD.$changeAt(Number(zD), wD), void 0 !== KD && KD[BD].root?.remove(KD[BD])
              } else pD = DD.$changeAt(Number(zD), wD);
              DD.items[zD] = wD, void 0 !== pD && (DD.tmpItems[pD] = wD)
            }
            return !0
          }
          return Reflect.set(DD, zD, wD)
        },
        deleteProperty: (DD, zD) => ("number" === typeof zD ? DD.$deleteAt(zD) : delete DD[zD], !0),
        has: (DD, zD) => "symbol" === typeof zD || isNaN(Number(zD)) ? Reflect.has(DD, zD) : Reflect.has(DD.items, zD)
      };
    class pp {
      [BD];
      [LD];
      [hD];
      [GD];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[gD] = Zw;
      static[RD] = Hw;
      static COLLECTION_KIND = ow;
      static[AD](DD, zD, wD) {
        if (!wD) return !0;
        const pD = DD[hD] ?? DD;
        return "string" === typeof pD[GD] || wD.isChangeTreeVisible(pD.tmpItems[zD]?.[BD])
      }
      static is(DD) {
        return Array.isArray(DD) || void 0 !== DD.array
      }
      static from(DD) {
        return new pp(...Array.from(DD))
      }
      constructor() {
        this[GD] = void 0, this[hD] = this;
        const DD = new Proxy(this, wp);
        return Object.defineProperty(this, BD, {
          value: new bw(DD, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), DD
      }
      static initializeForDecoder() {
        const DD = Object.create(pp.prototype);
        DD.items = [], DD.isMovingItems = !1, DD._needsCompaction = !1, DD[GD] = void 0, DD[hD] = DD;
        const zD = new Proxy(DD, wp);
        return dw(DD, zD), zD
      }
      set length(DD) {
        0 === DD ? this.clear() : DD < this.items.length ? this.splice(DD, this.length - DD) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[BD].pause()
      }
      resumeTracking() {
        this[BD].resume()
      }
      untracked(DD) {
        return this[BD].untracked(DD)
      }
      get isTrackingPaused() {
        return this[BD].paused
      }
      push() {
        const DD = this[hD],
          zD = DD.items,
          wD = DD.tmpItems,
          pD = DD[BD],
          KD = DD[GD];
        let rD = wD.length;
        for (let LD = 0, cD = arguments.length; LD < cD; LD++, rD++) {
          const cD = LD < 0 || arguments.length <= LD ? void 0 : arguments[LD];
          if (void 0 === cD || null === cD) return;
          "object" === typeof cD && KD && Dp(cD, KD, DD, LD), pD.indexedOperation(rD, sD.ADD), zD.push(cD), wD.push(cD), cD[BD]?.setParent(this, pD.root, rD)
        }
        return rD
      }
      pop() {
        const DD = this[hD],
          zD = DD.tmpItems,
          wD = DD.deletedIndexes;
        let pD = -1;
        for (let KD = zD.length - 1; KD >= 0; KD--)
          if (!0 !== wD[KD]) {
            pD = KD;
            break
          } if (pD < 0) return;
        const sD = DD.$isUnsentAdd(pD);
        return DD[BD].delete(pD), sD ? DD.$cancelAdd(pD) : wD[pD] = !0, DD.items.pop()
      }
      at(DD) {
        return DD < 0 && (DD += this.length), this.items[DD]
      }
      $wireIndex(DD) {
        const zD = this.deletedIndexes;
        if (0 === zD.length) return DD;
        const wD = this.tmpItems;
        let pD = 0;
        for (let sD = 0; sD < wD.length; sD++)
          if (!0 !== zD[sD]) {
            if (pD === DD) return sD;
            pD++
          } return wD.length + (DD - pD)
      }
      $isUnsentAdd(DD) {
        const zD = this[BD];
        return 0 === (576 & zD.flags) && !zD.paused && "string" !== typeof this[GD] && zD.operationAt(DD) === sD.ADD
      }
      $cancelAdd(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const wD = this[BD],
          pD = this.tmpItems[DD];
        this.tmpItems.splice(DD, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(DD, 1), wD.removeAt(DD, 1);
        const sD = pD?.[BD];
        void 0 !== sD && void 0 === sD.root && sD.removeParent(this), zD && this.$reindexChildren(DD)
      }
      $reindexChildren(DD, zD) {
        if (!this[BD].hasFilteredFields) return;
        if ("string" === typeof this[GD]) return;
        const wD = this.tmpItems,
          pD = wD.length;
        if (void 0 !== zD)
          for (; DD < pD && wD[DD] === zD[DD];) DD++;
        for (let sD = DD; sD < pD; sD++) wD[sD]?.[BD]?.setParentIndex(this, sD)
      }
      $changeAt(DD, zD) {
        if (void 0 === zD || null === zD) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[DD] === zD) return;
        const wD = void 0 !== this.items[DD] ? "object" === typeof zD ? sD.DELETE_AND_ADD : sD.REPLACE : sD.ADD,
          pD = this.$wireIndex(DD),
          KD = this[BD];
        return KD.change(pD, wD), zD[BD]?.setParent(this, KD.root, pD), pD
      }
      $deleteAt(DD, zD) {
        this[BD].delete(this.$wireIndex(DD), zD)
      }
      $setAt(DD, zD, wD) {
        wD === sD.ADD && void 0 !== this.items[DD] ? this.items.splice(DD, 0, zD) : wD === sD.DELETE_AND_MOVE ? (this.items.splice(DD, 1), this.items[DD] = zD) : (DD > this.items.length && (this._needsCompaction = !0), this.items[DD] = zD)
      }
      clear() {
        const DD = this[hD];
        if (0 === DD.items.length) return;
        const zD = DD[BD];
        zD.forEachChild(((DD, wD) => {
          zD.root?.remove(DD)
        })), zD.discard(), zD.operation(sD.CLEAR), DD.items.length = 0, DD.tmpItems.length = 0
      } [MD]() {
        const DD = this[hD] ?? this,
          zD = DD[BD];
        if (zD.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const wD = DD.items;
        for (let pD = 0; pD < wD.length; pD++) wD[pD]?.[MD]?.();
        DD.items.length = 0, DD.tmpItems.length = 0, DD.deletedIndexes.length = 0, zD.recycle(), DD[LD] = void 0
      }
      concat() {
        return new pp(...this.items.concat(...arguments))
      }
      join(DD) {
        return this.items.join(DD)
      }
      reverse() {
        const DD = this[hD],
          zD = DD[BD];
        if (zD.has() || DD.deletedIndexes.length > 0) {
          const zD = DD.items.slice().reverse();
          return this.clear(), this.push(...zD), this
        }
        return zD.operation(sD.REVERSE), DD.items.reverse(), DD.tmpItems.reverse(), DD.$reindexChildren(0), this
      }
      shift() {
        const DD = this[hD],
          zD = DD.items;
        if (0 === zD.length) return;
        const wD = DD[BD],
          pD = DD.deletedIndexes;
        let KD = 0;
        for (; !0 === pD[KD];) KD++;
        const rD = DD.$isUnsentAdd(KD);
        return wD.delete(KD, sD.DELETE), rD ? DD.$cancelAdd(KD) : pD[KD] = !0, zD.shift()
      }
      slice(DD, zD) {
        const wD = new pp;
        return wD.push(...this.items.slice(DD, zD)), wD
      }
      sort() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zp;
        const zD = this[hD];
        zD.isMovingItems = !0;
        const wD = zD[BD];
        return zD.items.sort(DD).forEach(((DD, zD) => wD.change(zD, sD.REPLACE))), zD.tmpItems.sort(DD), zD.$reindexChildren(0), zD.isMovingItems = !1, this
      }
      splice(DD, zD) {
        const wD = this[hD],
          pD = wD[BD],
          KD = wD.items,
          rD = wD.tmpItems,
          LD = wD.deletedIndexes,
          cD = KD.length,
          gD = rD.length;
        for (var RD = arguments.length, AD = new Array(RD > 2 ? RD - 2 : 0), UD = 2; UD < RD; UD++) AD[UD - 2] = arguments[UD];
        const fD = AD.length,
          ID = [];
        for (let sD = 0; sD < gD; sD++) !0 !== LD[sD] && ID.push(sD);
        let GD;
        if (cD > DD) {
          void 0 === zD && (zD = cD - DD);
          for (let KD = DD; KD < DD + zD; KD++) {
            const DD = ID[KD],
              zD = wD.$isUnsentAdd(DD);
            pD.delete(DD, sD.DELETE), zD ? (GD ??= []).push(DD) : LD[DD] = !0
          }
        } else zD = 0;
        if (fD > 0) {
          const KD = ID[DD] ?? cD,
            gD = Math.min(fD, zD);
          for (let DD = 0; DD < gD; DD++) {
            const zD = KD + DD;
            let wD;
            const cD = void 0 !== GD ? GD.indexOf(zD) : -1; - 1 !== cD ? (GD.splice(cD, 1), wD = sD.ADD) : wD = LD[zD] ? sD.DELETE_AND_ADD : sD.ADD, pD.indexedOperation(zD, wD), rD[zD] = AD[DD], LD[zD] = !1, AD[DD][BD]?.setParent(this, pD.root, zD)
          }
          const RD = fD - gD;
          if (RD > 0) {
            const DD = KD + gD;
            pD.insertAt(DD, RD);
            for (let zD = 0; zD < RD; zD++) AD[gD + zD][BD]?.setParent(this, pD.root, DD + zD);
            LD.length > 0 && LD.splice(DD, 0, ...new Array(RD).fill(!1)), rD.splice(DD, 0, ...AD.slice(gD)), wD.$reindexChildren(DD + RD)
          }
        }
        if (void 0 !== GD && GD.length > 0) {
          for (let DD = GD.length - 1; DD >= 0; DD--) wD.$cancelAdd(GD[DD], !1);
          wD.$reindexChildren(GD[0])
        }
        return pD.root?.enqueueChangeTree(pD), KD.splice(DD, zD, ...AD)
      }
      unshift() {
        const DD = this[hD],
          zD = DD[BD];
        zD.unshift(arguments.length);
        for (let pD = 0; pD < arguments.length; pD++)(pD < 0 || arguments.length <= pD ? void 0 : arguments[pD])?.[BD]?.setParent(this, zD.root, pD);
        const wD = DD.deletedIndexes;
        return wD.length > 0 && wD.unshift(...new Array(arguments.length).fill(!1)), DD.tmpItems.unshift(...arguments), DD.$reindexChildren(arguments.length), DD.items.unshift(...arguments)
      }
      indexOf(DD, zD) {
        return this.items.indexOf(DD, zD)
      }
      lastIndexOf(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(DD, zD)
      }
      every(DD, zD) {
        return this.items.every(DD, zD)
      }
      some(DD, zD) {
        return this.items.some(DD, zD)
      }
      forEach(DD, zD) {
        return this.items.forEach(DD, zD)
      }
      map(DD, zD) {
        return this.items.map(DD, zD)
      }
      filter(DD, zD) {
        return this.items.filter(DD, zD)
      }
      reduce(DD, zD) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(DD, zD) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(DD, zD) {
        return this.items.find(DD, zD)
      }
      findIndex(DD, zD) {
        return this.items.findIndex(DD, zD)
      }
      fill(DD, zD, wD) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(DD, zD, wD) {
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
        return pp
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
      includes(DD, zD) {
        return this.items.includes(DD, zD)
      }
      flatMap(DD, zD) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(DD) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(DD, zD) {
        const wD = this.items.slice();
        return DD < 0 && (DD += this.length), wD[DD] = zD, new pp(...wD)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(DD) {
        return this.items.slice().sort(DD)
      }
      toSpliced(DD, zD) {
        for (var wD = arguments.length, pD = new Array(wD > 2 ? wD - 2 : 0), sD = 2; sD < wD; sD++) pD[sD - 2] = arguments[sD];
        const KD = this.items.slice();
        return KD.splice.apply(KD, arguments), KD
      }
      shuffle() {
        return this.move((DD => {
          let zD = this.items.length;
          for (; 0 != zD;) {
            let DD = Math.floor(Math.random() * zD);
            zD--, [this[zD], this[DD]] = [this[DD], this[zD]]
          }
        }))
      }
      move(DD) {
        return this.isMovingItems = !0, DD(this), this.isMovingItems = !1, this
      } [UD](DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = this[hD] ?? this;
        return zD || wD.deletedIndexes[DD] ? wD.items[DD] : wD.tmpItems[DD] || wD.items[DD]
      } [fD](DD) {
        const zD = this[hD] ?? this;
        zD.items[DD] = void 0, zD._needsCompaction = !0
      } [nD]() {
        const DD = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, DD), this.deletedIndexes.length = 0)
      } [OD]() {
        const DD = this[hD] ?? this;
        DD._needsCompaction && (DD._needsCompaction = !1, DD.items = DD.items.filter((DD => void 0 !== DD)))
      } [ID](DD, zD, wD) {
        const pD = this[hD] ?? this,
          sD = pD.items;
        let KD = !1;
        for (let rD = 0; rD < sD.length; rD++) {
          const LD = sD[rD];
          DD.has(rD) ? wD(LD) : (KD = !0, zD(LD, rD), pD[fD](rD))
        }
        KD && pD[OD]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((DD => "function" === typeof DD.toJSON ? DD.toJSON() : DD))
      }
      clone(DD) {
        let zD;
        return DD ? (zD = new pp, zD.push(...this.items)) : zD = new pp(...this.map((DD => DD[BD] ? DD.clone() : DD))), zD
      }
    }
    Ez("array", {
      constructor: pp
    });
    class sp {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(DD) {
        const zD = this.indexByKey[DD];
        return void 0 === zD ? void 0 : zD
      }
      assign(DD) {
        const zD = this.nextIndex++;
        return this.indexByKey[DD] = zD, this.keyByIndex.set(zD, DD), zD
      }
      snapshot(DD, zD) {
        (this.snapshots ??= new Map).set(DD, zD)
      }
      forgetSnapshot(DD) {
        this.snapshots?.delete(DD)
      }
      snapshotAt(DD) {
        return this.snapshots?.get(DD)
      }
      setIndex(DD, zD) {
        this.keyByIndex.set(DD, zD), this.indexByKey[zD] = DD
      }
      keyOf(DD) {
        return this.keyByIndex.get(DD)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [DD] of this.snapshots) {
            const zD = this.keyByIndex.get(DD);
            void 0 !== zD && (delete this.indexByKey[zD], this.keyByIndex.delete(DD))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Kp {
      [BD];
      [LD];
      childType;
      [GD];
      $items = new Map;
      journal = new sp;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(DD) {
        (this._stream ??= Vz()).maxPerTick = DD
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(DD) {
        (this._stream ??= Vz()).priority = DD
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[gD] = lw;
      static[RD] = Yw;
      static COLLECTION_KIND = ew;
      static[AD](DD, zD, wD) {
        if (!wD || "string" === typeof DD[GD]) return !0;
        const pD = DD[UD](zD) ?? DD.journal.snapshotAt(zD);
        return wD.isChangeTreeVisible(pD[BD])
      }
      static is(DD) {
        return void 0 !== DD.map
      }
      constructor(DD) {
        if (Object.defineProperty(this, BD, {
            value: new bw(this),
            enumerable: !1,
            writable: !0
          }), this[GD] = void 0, DD)
          if (DD instanceof Map || DD instanceof Kp) DD.forEach(((DD, zD) => this.set(zD, DD)));
          else
            for (const zD in DD) this.set(zD, DD[zD])
      }
      static initializeForDecoder() {
        const DD = Object.create(Kp.prototype);
        return DD.$items = new Map, DD.journal = new sp, DD[GD] = void 0, dw(DD), DD
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Kp
      }
      set(DD, zD) {
        if (void 0 === zD || null === zD) throw new Error(`MapSchema#set('${DD}', ${zD}): trying to set ${zD} value on '${DD}'.`);
        "object" === typeof zD && this[GD] && Dp(zD, this[GD], this, DD), DD = DD.toString();
        const wD = this[BD],
          pD = void 0 !== zD[BD],
          KD = this.journal;
        let rD, LD = KD.indexOf(DD);
        if (void 0 !== LD) {
          rD = sD.REPLACE;
          const wD = this.$items.get(DD);
          if (wD === zD) return;
          pD && (rD = sD.DELETE_AND_ADD, void 0 !== wD && wD[BD].root?.remove(wD[BD])), void 0 !== KD.snapshotAt(LD) && KD.forgetSnapshot(LD)
        } else LD = KD.assign(DD), rD = sD.ADD;
        return this.$items.set(DD, zD), rD === sD.ADD && wD.isStreamCollection ? void 0 !== wD.root && Cz(this, wD.root, LD) : wD.change(LD, rD), pD && zD[BD].setParent(this, wD.root, LD), this
      }
      get(DD) {
        return this.$items.get(DD)
      }
      getOrInsert(DD, zD) {
        return this.$items.has(DD) ? this.$items.get(DD) : (this.set(DD, zD), zD)
      }
      getOrInsertComputed(DD, zD) {
        if (this.$items.has(DD)) return this.$items.get(DD);
        const wD = zD(DD);
        return this.set(DD, wD), wD
      }
      delete(DD) {
        if (!this.$items.has(DD)) return !1;
        const zD = this.journal.indexOf(DD),
          wD = this.$items.get(DD),
          pD = this[BD];
        if (pD.isStreamCollection) {
          const sD = pD.root;
          let KD = !1;
          return void 0 !== sD && (KD = xz(this, sD, this[LD], zD)), void 0 !== wD?.[BD] && sD?.remove(wD[BD]), this.$items.delete(DD), KD || this.journal.snapshot(zD, wD), !0
        }
        return this.journal.snapshot(zD, wD), pD.delete(zD), this.$items.delete(DD)
      }
      clear() {
        const DD = this[BD];
        DD.discard(), DD.forEachChild(((zD, wD) => {
          DD.root?.remove(zD)
        })), this.journal.reset(), this.$items.clear(), DD.operation(sD.CLEAR)
      } [MD]() {
        const DD = this[BD];
        if (DD.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((DD => DD?.[MD]?.())), this.$items.clear(), this.journal.reset(), DD.recycle(), this[LD] = void 0
      }
      has(DD) {
        return this.$items.has(DD)
      }
      forEach(DD) {
        this.$items.forEach(DD)
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
        this[BD].pause()
      }
      resumeTracking() {
        this[BD].resume()
      }
      untracked(DD) {
        return this[BD].untracked(DD)
      }
      get isTrackingPaused() {
        return this[BD].paused
      }
      setIndex(DD, zD) {
        this.journal.setIndex(DD, zD)
      }
      getIndex(DD) {
        return this.journal.keyOf(DD)
      } [UD](DD) {
        const zD = this.journal.keyOf(DD);
        return void 0 !== zD ? this.$items.get(zD) : void 0
      } [fD](DD) {
        const zD = this.journal.keyOf(DD);
        void 0 !== zD && (this.$items.delete(zD), this.journal.keyByIndex.delete(DD))
      } [ID](DD, zD, wD) {
        let pD = null;
        if (this.$items.forEach(((sD, KD) => {
            DD.has(KD) ? wD(sD) : ((pD ??= new Set).add(KD), zD(sD, KD))
          })), null !== pD) {
          pD.forEach((DD => {
            this.$items.delete(DD), delete this.journal.indexByKey[DD]
          }));
          const DD = [];
          this.journal.keyByIndex.forEach(((zD, wD) => {
            pD.has(zD) && DD.push(wD)
          }));
          for (let zD = 0; zD < DD.length; zD++) this.journal.keyByIndex.delete(DD[zD])
        }
      } [nD]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(DD) {
        dz(this, DD)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (DD => {
          let [zD, wD] = DD;
          return [zD, "function" === typeof wD.toJSON ? wD.toJSON() : wD]
        })))
      }
      clone(DD) {
        let zD;
        return DD ? zD = Object.assign(new Kp, this) : (zD = new Kp, this.forEach(((DD, wD) => {
          DD[BD] ? zD.set(wD, DD.clone()) : zD.set(wD, DD)
        }))), zD
      }
    }
    Ez("map", {
      constructor: Kp
    });
    class rp {
      [BD];
      [LD];
      [GD];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(DD) {
        (this._stream ??= Vz()).maxPerTick = DD
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(DD) {
        (this._stream ??= Vz()).priority = DD
      }
      static[gD] = Ww;
      static[RD] = Yw;
      static COLLECTION_KIND = uw;
      static[AD](DD, zD, wD) {
        return !wD || "string" === typeof DD[GD] || wD.isChangeTreeVisible((DD[UD](zD) ?? DD.deletedItems[zD])[BD])
      }
      static is(DD) {
        return void 0 !== DD.collection
      }
      constructor(DD) {
        Object.defineProperty(this, BD, {
          value: new bw(this),
          enumerable: !1,
          writable: !0
        }), this[GD] = void 0, DD && DD.forEach((DD => this.add(DD)))
      }
      static initializeForDecoder() {
        const DD = Object.create(rp.prototype);
        return DD.$items = new Map, DD.deletedItems = {}, DD.$refId = 0, DD[GD] = void 0, dw(DD), DD
      }
      add(DD) {
        const zD = this.$refId++,
          wD = this[BD];
        return this.$items.set(zD, DD), wD.isStreamCollection ? void 0 !== wD.root && Cz(this, wD.root, zD) : wD.change(zD), void 0 !== DD[BD] && DD[BD].setParent(this, wD.root, zD), zD
      }
      at(DD) {
        const zD = Array.from(this.$items.keys())[DD];
        return this.$items.get(zD)
      }
      entries() {
        return this.$items.entries()
      }
      delete(DD) {
        const zD = this.$items.entries();
        let wD, pD;
        for (;
          (pD = zD.next()) && !pD.done;)
          if (DD === pD.value[1]) {
            wD = pD.value[0];
            break
          } if (void 0 === wD) return !1;
        const sD = this[BD];
        if (sD.isStreamCollection) {
          const DD = sD.root,
            zD = this.$items.get(wD);
          return void 0 !== DD && xz(this, DD, this[LD], wD), void 0 !== zD?.[BD] && DD?.remove(zD[BD]), this.deletedItems[wD] = zD, this.$items.delete(wD)
        }
        return this.deletedItems[wD] = sD.delete(wD), this.$items.delete(wD)
      }
      clear() {
        const DD = this[BD];
        DD.discard(), DD.forEachChild(((zD, wD) => {
          DD.root?.remove(zD)
        })), this.$items.clear(), DD.operation(sD.CLEAR)
      } [MD]() {
        const DD = this[BD];
        if (DD.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((DD => DD?.[MD]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, DD.recycle(), this[LD] = void 0
      }
      has(DD) {
        return Array.from(this.$items.values()).some((zD => zD === DD))
      }
      forEach(DD) {
        this.$items.forEach(((zD, wD, pD) => DD(zD, wD, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[BD].pause()
      }
      resumeTracking() {
        this[BD].resume()
      }
      untracked(DD) {
        return this[BD].untracked(DD)
      }
      get isTrackingPaused() {
        return this[BD].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(DD, zD) {}
      getIndex(DD) {
        return DD
      } [UD](DD) {
        return this.$items.get(DD)
      } [fD](DD) {
        this.$items.delete(DD)
      } [ID](DD, zD, wD) {
        let pD = null;
        if (this.$items.forEach(((sD, KD) => {
            DD.has(KD) ? wD(sD) : ((pD ??= []).push(KD), zD(sD, KD))
          })), null !== pD)
          for (let sD = 0; sD < pD.length; sD++) this[fD](pD[sD])
      } [nD]() {
        for (const DD in this.deletedItems) delete this.deletedItems[DD]
      }
      _dropView(DD) {
        dz(this, DD)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const DD = [];
        return this.forEach(((zD, wD) => {
          DD.push("function" === typeof zD.toJSON ? zD.toJSON() : zD)
        })), DD
      }
      clone(DD) {
        let zD;
        return DD ? zD = Object.assign(new rp, this) : (zD = new rp, this.forEach((DD => {
          DD[BD] ? zD.add(DD.clone()) : zD.add(DD)
        }))), zD
      }
    }
    Ez("collection", {
      constructor: rp
    });
    class Lp {
      [BD];
      [LD];
      [GD];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(DD) {
        (this._stream ??= Vz()).maxPerTick = DD
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(DD) {
        (this._stream ??= Vz()).priority = DD
      }
      static[gD] = Ww;
      static[RD] = Yw;
      static COLLECTION_KIND = aw;
      static[AD](DD, zD, wD) {
        return !wD || "string" === typeof DD[GD] || wD.isVisible((DD[UD](zD) ?? DD.deletedItems[zD])[BD])
      }
      static is(DD) {
        return void 0 !== DD.set
      }
      constructor(DD) {
        Object.defineProperty(this, BD, {
          value: new bw(this),
          enumerable: !1,
          writable: !0
        }), this[GD] = void 0, DD && DD.forEach((DD => this.add(DD)))
      }
      static initializeForDecoder() {
        const DD = Object.create(Lp.prototype);
        return DD.$items = new Map, DD.deletedItems = {}, DD.$refId = 0, DD[GD] = void 0, dw(DD), DD
      }
      add(DD) {
        if (this.has(DD)) return !1;
        const zD = this.$refId++,
          wD = this[BD];
        return this.$items.set(zD, DD), wD.isStreamCollection ? void 0 !== wD.root && Cz(this, wD.root, zD) : wD.change(zD, sD.ADD), void 0 !== DD[BD] && DD[BD].setParent(this, wD.root, zD), zD
      }
      entries() {
        return this.$items.entries()
      }
      delete(DD) {
        const zD = this.$items.entries();
        let wD, pD;
        for (;
          (pD = zD.next()) && !pD.done;)
          if (DD === pD.value[1]) {
            wD = pD.value[0];
            break
          } if (void 0 === wD) return !1;
        const sD = this[BD];
        if (sD.isStreamCollection) {
          const DD = sD.root,
            zD = this.$items.get(wD);
          return void 0 !== DD && xz(this, DD, this[LD], wD), void 0 !== zD?.[BD] && DD?.remove(zD[BD]), this.deletedItems[wD] = zD, this.$items.delete(wD)
        }
        return this.deletedItems[wD] = sD.delete(wD), this.$items.delete(wD)
      }
      clear() {
        const DD = this[BD];
        DD.discard(), this.$items.clear(), DD.operation(sD.CLEAR)
      } [MD]() {
        const DD = this[BD];
        if (DD.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((DD => DD?.[MD]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, DD.recycle(), this[LD] = void 0
      }
      has(DD) {
        const zD = this.$items.values();
        let wD, pD = !1;
        for (;
          (wD = zD.next()) && !wD.done;)
          if (DD === wD.value) {
            pD = !0;
            break
          } return pD
      }
      forEach(DD) {
        this.$items.forEach(((zD, wD, pD) => DD(zD, wD, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[BD].pause()
      }
      resumeTracking() {
        this[BD].resume()
      }
      untracked(DD) {
        return this[BD].untracked(DD)
      }
      get isTrackingPaused() {
        return this[BD].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(DD, zD) {}
      getIndex(DD) {
        return DD
      } [UD](DD) {
        return this.$items.get(DD)
      } [fD](DD) {
        this.$items.delete(DD)
      } [ID](DD, zD, wD) {
        let pD = null;
        if (this.$items.forEach(((sD, KD) => {
            DD.has(KD) ? wD(sD) : ((pD ??= []).push(KD), zD(sD, KD))
          })), null !== pD)
          for (let sD = 0; sD < pD.length; sD++) this[fD](pD[sD])
      } [nD]() {
        for (const DD in this.deletedItems) delete this.deletedItems[DD]
      }
      _dropView(DD) {
        dz(this, DD)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const DD = [];
        return this.forEach(((zD, wD) => {
          DD.push("function" === typeof zD.toJSON ? zD.toJSON() : zD)
        })), DD
      }
      clone(DD) {
        let zD;
        return DD ? zD = Object.assign(new Lp, this) : (zD = new Lp, this.forEach((DD => {
          DD[BD] ? zD.add(DD.clone()) : zD.add(DD)
        }))), zD
      }
    }
    Ez("set", {
      constructor: Lp
    });
    class cp {
      [BD];
      [LD];
      [GD];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(DD) {
        (this._stream ??= Vz()).maxPerTick = DD
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(DD) {
        (this._stream ??= Vz()).priority = DD
      }
      static $isStream = !0;
      static[gD] = Ww;
      static[RD] = Yw;
      static COLLECTION_KIND = vw;
      static[AD](DD, zD, wD) {
        if (!wD) return !0;
        const pD = DD[UD](zD);
        return void 0 !== pD && wD.isVisible(pD[BD])
      }
      static is(DD) {
        return DD && void 0 !== DD.stream
      }
      constructor() {
        Object.defineProperty(this, BD, {
          value: new bw(this),
          enumerable: !1,
          writable: !0
        }), this[GD] = void 0
      }
      static initializeForDecoder() {
        const DD = Object.create(cp.prototype);
        return DD.$items = new Map, DD.$nextPosition = 0, DD._itemIndex = new Map, DD[GD] = void 0, dw(DD), DD
      }
      add(DD) {
        if (this._itemIndex.has(DD)) return -1;
        const zD = this.$nextPosition++;
        this.$items.set(zD, DD), this._itemIndex.set(DD, zD);
        const wD = this[BD].root;
        return void 0 !== DD[BD] && DD[BD].setParent(this, wD, zD), void 0 !== wD && Cz(this, wD, zD), zD
      }
      remove(DD) {
        const zD = this._itemIndex.get(DD);
        if (void 0 === zD) return !1;
        this._itemIndex.delete(DD), this.$items.delete(zD);
        const wD = this[BD].root;
        return void 0 !== wD && (xz(this, wD, this[LD], zD), void 0 !== DD[BD] && wD.remove(DD[BD])), !0
      }
      has(DD) {
        return this._itemIndex.has(DD)
      }
      clear() {
        const DD = this[BD].root;
        if (void 0 !== DD) {
          ! function(DD, zD, wD) {
            const pD = DD._stream;
            if (void 0 !== pD) {
              pD.broadcastPending.clear();
              for (const DD of pD.sentBroadcast) pD.broadcastDeletes.add(DD);
              pD.sentBroadcast.clear(), zD.forEachActiveView((DD => {
                pD.pendingByView.get(DD.id)?.clear();
                const zD = pD.sentByView.get(DD.id);
                if (void 0 !== zD && zD.size > 0) {
                  let pD = DD.changes.get(wD);
                  void 0 === pD && (pD = new Map, DD.changes.set(wD, pD));
                  for (const DD of zD) pD.set(DD, sD.DELETE);
                  zD.clear()
                }
              }))
            }
          }(this, DD, this[LD]);
          for (const zD of this.$items.values()) void 0 !== zD[BD] && DD.remove(zD[BD])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(DD) {
        for (const [zD, wD] of this.$items) DD(wD, zD, this)
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
      setIndex(DD, zD) {}
      getIndex(DD) {
        return DD
      } [UD](DD) {
        return this.$items.get(DD)
      } [fD](DD) {
        const zD = this.$items.get(DD);
        void 0 !== zD && (this._itemIndex.delete(zD), this.$items.delete(DD))
      } [ID]() {} [nD]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const DD = [];
        return this.forEach((zD => {
          DD.push("function" === typeof zD?.toJSON ? zD.toJSON() : zD)
        })), DD
      }
      clone(DD) {
        if (DD) {
          return Object.assign(new cp, this)
        }
        const zD = new cp;
        return zD.maxPerTick = this.maxPerTick, this.forEach((DD => {
          zD.add("function" === typeof DD?.clone ? DD.clone() : DD)
        })), zD
      }
      _dropView(DD) {
        dz(this, DD)
      }
      _unregister() {}
    }
    Ez("stream", {
      constructor: cp
    });
    class gp {
      [ED] = !0;
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
      constructor(DD) {
        this._type = DD
      }
      default (DD) {
        return this._default = DD, this._hasDefault = !0, this
      }
      view(DD) {
        return this._view = DD ?? -1, this
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
        const DD = this._type;
        if (DD && "object" === typeof DD && void 0 !== DD.array) throw new Error(Xz);
        return this._stream = !0, this
      }
      priority(DD) {
        return this._streamPriority = DD, this
      }
      deprecated() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = DD, this
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

    function Rp(DD) {
      return null != DD && !0 === DD[ED]
    }

    function Ap(DD) {
      return () => new gp(DD)
    }

    function Up(DD) {
      if (Rp(DD)) {
        const zD = DD._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof zD?`use the type name instead: t.array("${zD}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return DD
    }

    function fp(DD) {
      return new gp({
        quantized: iz(DD)
      })
    }
    const Ip = Object.freeze({
        string: Ap("string"),
        number: Ap("number"),
        boolean: Ap("boolean"),
        int8: Ap("int8"),
        uint8: Ap("uint8"),
        int16: Ap("int16"),
        uint16: Ap("uint16"),
        int32: Ap("int32"),
        uint32: Ap("uint32"),
        int64: Ap("int64"),
        uint64: Ap("uint64"),
        float32: Ap("float32"),
        float64: Ap("float64"),
        bigint64: Ap("bigint64"),
        biguint64: Ap("biguint64"),
        ref: DD => new gp(DD),
        array: DD => new gp({
          array: Up(DD)
        }),
        map: DD => new gp({
          map: Up(DD)
        }),
        set: DD => new gp({
          set: Up(DD)
        }),
        collection: DD => new gp({
          collection: Up(DD)
        }),
        stream: DD => {
          const zD = new gp({
            stream: Up(DD)
          });
          return zD._stream = !0, zD
        },
        quantized: fp,
        angle: DD => fp({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: DD?.bits ?? 16
        })
      }),
      Bp = -1;

    function Gp(DD) {
      return yz.register(DD), DD
    }

    function hp() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bp;
      return function(zD, wD) {
        const pD = vz.initialize(zD.constructor);
        vz.setTag(pD, wD, DD)
      }
    }

    function np(DD, zD) {
      const wD = vz.initialize(DD.constructor);
      vz.setUnreliable(wD, zD)
    }

    function Mp(DD, zD) {
      const wD = vz.initialize(DD.constructor);
      vz.setPatchOnly(wD, zD)
    }

    function Op(DD, zD) {
      const wD = vz.initialize(DD.constructor);
      vz.setFullStateOnly(wD, zD)
    }

    function Jp(DD, zD) {
      return function(wD, pD) {
        const sD = wD.constructor;
        if (!DD) throw new Error(`${sD.name}: @type() reference provided for "${pD}" is undefined. Make sure you don't have any circular dependencies.`);
        DD = mz(DD, `${sD.name}.${pD}`), yz.register(sD);
        const KD = Object.getPrototypeOf(sD)[Symbol.metadata],
          rD = vz.initialize(sD);
        let LD = rD[pD];
        if (void 0 !== rD[LD]) {
          if (rD[LD].deprecated) return;
          if (void 0 !== rD[LD].type) {
            const DD = new Error(`@colyseus/schema: Duplicate '${pD}' definition on '${sD.name}'.\nCheck @type() annotation`);
            throw new Error(`${DD.message} ${DD.stack.split("\n")[4].trim()}`)
          }
        } else LD = rD[PD] ?? (KD && KD[PD]) ?? -1, LD++;
        if (zD && zD.manual) vz.addField(rD, LD, pD, DD, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: zD,
            childType: wD
          } = kz(DD);
          vz.addField(rD, LD, pD, DD, Qp(pD, LD, wD, zD))
        }
        rD[QD][pD] && Object.defineProperty(wD, pD, rD[QD][pD]), ("string" === typeof DD || lz(DD)) && (rD[VD] || Object.defineProperty(rD, VD, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), rD[VD][LD] = "string" === typeof DD ? zz[DD] : Zz(DD.quantized))
      }
    }
    const Ep = {
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

    function Qp(DD, zD, wD, pD) {
      let KD;
      return KD = pD ? function(DD, zD, wD, pD) {
        const KD = pD.constructor === pp,
          rD = pD.constructor === Kp;
        return function(DD) {
          const pD = this[JD],
            LD = pD[zD];
          if (DD !== LD) {
            if (void 0 !== DD && null !== DD) {
              if (!KD || DD instanceof pp)
                if (!rD || DD instanceof Kp) DD[GD] = wD;
                else {
                  const zD = new Kp;
                  if (zD[GD] = wD, DD instanceof Map) DD.forEach(((DD, wD) => zD.set(wD, DD)));
                  else
                    for (const wD in DD) zD.set(wD, DD[wD]);
                  DD = zD
                }
              else {
                const zD = new pp;
                zD[GD] = wD, zD.push(...DD), DD = zD
              }
              const pD = this[BD],
                gD = this.constructor;
              void 0 !== LD && null !== LD && LD[BD] ? (pD.root?.remove(LD[BD]), gD[cD](pD, zD, sD.DELETE_AND_ADD)) : gD[cD](pD, zD, sD.ADD), DD[BD]?.setParent(this, pD.root, zD)
            } else void 0 !== LD && null !== LD && this[BD].delete(zD);
            pD[zD] = DD
          }
        }
      }(0, zD, wD, pD) : "string" === typeof wD ? function(DD, zD, wD) {
        const pD = Ep[wD],
          KD = "string" === wD,
          rD = "boolean" === wD;
        return function(wD) {
          const LD = this[JD],
            gD = LD[zD];
          if (wD !== gD) {
            if (void 0 !== wD && null !== wD) {
              if (!rD && void 0 !== pD && typeof wD !== pD && (!KD || null !== wD)) {
                const zD = wD && wD.constructor ? ` (${wD.constructor.name})` : "";
                throw new qw(`a '${pD}' was expected, but '${JSON.stringify(wD)}'${zD} was provided in ${this.constructor.name}#${DD}`)
              }
              this.constructor[cD](this[BD], zD, sD.ADD)
            } else void 0 !== gD && null !== gD && this[BD].delete(zD);
            LD[zD] = wD
          }
        }
      }(DD, zD, wD) : lz(wD) ? function(DD, zD, wD) {
        return function(pD) {
          const KD = this[JD],
            rD = KD[zD];
          if (void 0 !== pD && null !== pD) {
            if ("number" !== typeof pD) throw new qw(`a 'number' was expected, but '${JSON.stringify(pD)}' was provided in ${this.constructor.name}#${DD}`);
            if ((pD = Nz(wD, Wz(wD, pD))) === rD) return;
            this.constructor[cD](this[BD], zD, sD.ADD)
          } else {
            if (pD === rD) return;
            void 0 !== rD && null !== rD && this[BD].delete(zD)
          }
          KD[zD] = pD
        }
      }(DD, zD, wD.quantized) : function(DD, zD, wD) {
        return function(pD) {
          const KD = this[JD],
            rD = KD[zD];
          if (pD !== rD) {
            if (void 0 !== pD && null !== pD) {
              Dp(pD, wD, this, DD);
              const KD = this[BD],
                LD = this.constructor;
              void 0 !== rD && null !== rD && rD[BD] ? (KD.root?.remove(rD[BD]), LD[cD](KD, zD, sD.DELETE_AND_ADD)) : LD[cD](KD, zD, sD.ADD), pD[BD]?.setParent(this, KD.root, zD)
            } else void 0 !== rD && null !== rD && this[BD].delete(zD);
            KD[zD] = pD
          }
        }
      }(DD, zD, wD), {
        get: function() {
          return this[JD][zD]
        },
        set: KD,
        enumerable: !0,
        configurable: !0
      }
    }

    function Xp() {
      let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(zD, wD) {
        const pD = vz.initialize(zD.constructor);
        vz.setDeprecated(pD, wD), DD && (pD[QD] ??= {}, pD[QD][wD] = {
          get: function() {
            throw new Error(`${wD} is deprecated.`)
          },
          set: function(DD) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(zD, wD, pD[QD][wD]))
      }
    }
    let Vp = !1;

    function Pp(DD, zD, wD) {
      Vp || (Vp = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let pD in zD) Jp(zD[pD], wD)(DD.prototype, pD);
      return DD
    }

    function Cp(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tp;
      if (null == DD || "object" !== typeof DD) throw new Error(`schema(): first argument must be a fields object (got ${typeof DD}).`);
      const pD = {},
        sD = {},
        KD = {},
        rD = {},
        LD = (DD, zD) => {
          if (zD.hasDefault)((DD, zD) => {
            "function" === typeof zD ? rD[DD] = zD : zD && "function" === typeof zD.clone ? rD[DD] = () => zD.clone() : KD[DD] = zD
          })(DD, zD.default);
          else if (!zD.optional) {
            const wD = function(DD) {
              if (DD && "object" === typeof DD) {
                if (void 0 !== DD.array) return () => new pp;
                if (void 0 !== DD.map) return () => new Kp;
                if (void 0 !== DD.set) return () => new Lp;
                if (void 0 !== DD.collection) return () => new rp;
                if (void 0 !== DD.stream) return () => new cp
              } else if ("function" === typeof DD && Tp.is(DD) && (!DD.prototype.initialize || 0 === DD.prototype.initialize.length)) return () => new DD
            }(zD.type);
            wD && (rD[DD] = wD)
          }
        },
        cD = {},
        gD = [],
        RD = [],
        AD = {},
        UD = [],
        fD = [],
        ID = {},
        BD = [];
      for (const JD in DD) {
        const wD = DD[JD],
          KD = `schema(${zD?`'${zD}'`:""}): field '${JD}'`;
        if (Rp(wD)) {
          const DD = wD.toDefinition();
          if (DD.noSync) {
            if (void 0 !== DD.view || DD.unreliable || DD.patchOnly || DD.fullStateOnly || DD.stream) throw new Error(`${KD} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            LD(JD, DD);
            continue
          }
          if (DD.patchOnly && DD.fullStateOnly) throw new Error(`${KD} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const zD = mz(DD.type, KD);
          if ("function" === typeof zD && !Tp.is(zD)) throw new Error(`${KD} is a synced ref to non-Schema class '${zD.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          pD[JD] = zD, void 0 !== DD.view && (cD[JD] = DD.view), DD.unreliable && gD.push(JD), DD.patchOnly && RD.push(JD), DD.deprecated && (AD[JD] = DD.deprecatedThrows), DD.fullStateOnly && UD.push(JD), DD.stream && fD.push(JD), void 0 !== DD.streamPriority && (ID[JD] = DD.streamPriority), DD.optional && BD.push(JD), LD(JD, DD)
        } else {
          if ("function" !== typeof wD) throw new Error(`${KD} must be a t.* builder, Schema subclass, or method (got ${typeof wD}).`);
          Tp.is(wD) ? (pD[JD] = wD, wD.prototype.initialize && 0 !== wD.prototype.initialize.length || (rD[JD] = () => new wD)) : sD[JD] = wD
        }
      }
      const GD = DD => {
          for (const zD in KD) DD[zD] = KD[zD];
          for (const zD in rD) DD[zD] = rD[zD]()
        },
        hD = () => {
          const DD = {};
          return GD(DD), DD
        },
        nD = "function" === typeof sD.initialize,
        MD = sD.initialize ?? wD._initialize,
        OD = class extends wD {
          constructor() {
            for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
            const sD = zD[0];
            void 0 === sD ? (super(), GD(this)) : super(Object.assign(hD(), nD ? (DD => {
              const zD = Object.keys(pD),
                wD = {};
              for (const pD in DD) zD.includes(pD) || (wD[pD] = DD[pD]);
              return wD
            })(sD) : sD)), MD && new.target === OD && MD.apply(this, zD)
          }
        };
      zD && Object.defineProperty(OD, "name", {
        value: zD
      }), vz.setFields(OD, pD), OD._getDefaultValues = hD, OD._initialize = MD, Object.assign(OD.prototype, sD);
      for (const JD in cD) hp(cD[JD])(OD.prototype, JD);
      for (const JD of gD) np(OD.prototype, JD);
      for (const JD of RD) Mp(OD.prototype, JD);
      for (const JD in AD) Xp(AD[JD])(OD.prototype, JD);
      if (UD.length > 0 || fD.length > 0) {
        const DD = OD[Symbol.metadata];
        for (const zD of UD) vz.setFullStateOnly(DD, zD);
        for (const zD of fD) vz.setStream(DD, zD);
        for (const zD in ID) vz.setStreamPriority(DD, zD, ID[zD])
      }
      if (BD.length > 0) {
        const DD = OD[Symbol.metadata];
        for (const zD of BD) DD[DD[zD]].optional = !0
      }
      return OD.extend = (DD, zD) => Cp(DD, zD, OD), OD
    }

    function xp(DD) {
      const zD = DD[BD].root,
        wD = {
          ops: {},
          refs: []
        };
      let pD = zD.changes.next;
      for (; pD;) {
        const DD = pD.changeTree;
        void 0 !== DD ? (wD.refs.push(`refId#${DD.ref[LD]}`), DD.forEach(((DD, zD) => {
          if (DD < 0 || !zD) return;
          const pD = sD[zD];
          wD.ops[pD] || (wD.ops[pD] = 0), wD.ops[pD]++
        })), pD = pD.next) : pD = pD.next
      }
      return wD
    }
    class Tp {
      static[gD] = iw;
      static[RD] = Fw;
      [LD];
      [JD];
      static initialize(DD) {
        Object.defineProperty(DD, BD, {
          value: new bw(DD),
          enumerable: !1,
          writable: !0
        }), DD[JD] = []
      }
      static initializeForDecoder() {
        const DD = Object.create(this.prototype);
        return dw(DD), DD[JD] = [], DD
      }
      static reset(DD) {
        const zD = DD?.[BD];
        if (void 0 === zD || "function" !== typeof zD.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== zD.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${DD.constructor.name}) with multiple parents.`);
        DD[MD]()
      } [MD]() {
        const DD = this.constructor[Symbol.metadata],
          zD = DD?.[CD] ?? [],
          wD = this[JD];
        for (let pD = 0; pD < zD.length; pD++) {
          const DD = wD[zD[pD]];
          DD?.[MD]?.()
        }
        this[BD].recycle(), this[LD] = void 0
      }
      static is(DD) {
        const zD = DD[Symbol.metadata];
        return "object" === typeof zD && null !== zD
      }
      static isSchema(DD) {
        return "function" === typeof DD?.assign
      }
      static[cD](DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sD.ADD;
        DD.change(zD, wD)
      }
      static[AD](DD, zD, wD) {
        const pD = DD.constructor[Symbol.metadata],
          sD = pD[zD]?.tag;
        return void 0 === wD ? void 0 === sD : void 0 === sD || (sD === Bp ? wD.isChangeTreeVisible(DD[BD]) : wD.hasTagOnTree(DD[BD], sD))
      }
      constructor(DD) {
        Tp.initialize(this), DD && Tp.assignProps(this, DD)
      }
      assign(DD) {
        return Tp.assignProps(this, DD), this
      }
      static assignProps(DD, zD) {
        const wD = DD.constructor[Symbol.metadata];
        if (wD && void 0 !== wD[PD])
          for (let sD = 0; sD <= wD[PD]; sD++) {
            const pD = wD[sD];
            if (!pD) continue;
            const KD = zD[pD.name];
            void 0 !== KD && (DD[pD.name] = KD)
          }
        const pD = Object.keys(zD);
        for (let sD = 0; sD < pD.length; sD++) {
          const KD = pD[sD];
          wD && void 0 !== wD[KD] || (DD[KD] = zD[KD])
        }
      }
      restore(DD) {
        const zD = this.constructor[Symbol.metadata];
        for (const wD in zD) {
          const pD = zD[wD],
            sD = pD.name,
            KD = pD.type,
            rD = DD[sD];
          if (void 0 !== rD && null !== rD)
            if ("string" === typeof KD) this[sD] = rD;
            else if (Tp.is(KD)) {
            const DD = new KD;
            DD.restore(rD), this[sD] = DD
          } else if ("object" === typeof KD) {
            const DD = Object.keys(KD)[0],
              zD = KD[DD];
            if ("map" === DD) {
              const DD = this[sD];
              for (const wD in rD)
                if (Tp.is(zD)) {
                  const pD = new zD;
                  pD.restore(rD[wD]), DD.set(wD, pD)
                } else DD.set(wD, rD[wD])
            } else if ("array" === DD) {
              const DD = this[sD];
              for (let wD = 0; wD < rD.length; wD++)
                if (Tp.is(zD)) {
                  const pD = new zD;
                  pD.restore(rD[wD]), DD.push(pD)
                } else DD.push(rD[wD])
            }
          }
        }
        return this
      }
      setDirty(DD, zD) {
        const wD = this.constructor[Symbol.metadata];
        this[BD].change(wD[wD[DD]].index, zD)
      }
      pauseTracking() {
        this[BD].pause()
      }
      resumeTracking() {
        this[BD].resume()
      }
      untracked(DD) {
        return this[BD].untracked(DD)
      }
      get isTrackingPaused() {
        return this[BD].paused
      }
      clone() {
        const DD = Object.create(this.constructor.prototype);
        Tp.initialize(DD);
        const zD = this.constructor[Symbol.metadata];
        for (const wD in zD) {
          const pD = zD[wD].name;
          "object" === typeof this[pD] && "function" === typeof this[pD]?.clone ? DD[pD] = this[pD].clone() : DD[pD] = this[pD]
        }
        return DD
      }
      toJSON() {
        const DD = {},
          zD = this.constructor[Symbol.metadata];
        for (const wD in zD) {
          const pD = zD[wD],
            sD = pD.name;
          pD.deprecated || null === this[sD] || "undefined" === typeof this[sD] || (DD[sD] = "function" === typeof this[sD].toJSON ? this[sD].toJSON() : this[sD])
        }
        return DD
      }
      discardAllChanges() {
        this[BD].discardAll()
      } [UD](DD) {
        return this[this.constructor[Symbol.metadata][DD].name]
      } [fD](DD) {
        this[this.constructor[Symbol.metadata][DD].name] = void 0
      }
      static debugRefIds(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const KD = zD ? ` - ${JSON.stringify(DD.toJSON())}` : "",
          rD = DD[BD],
          cD = DD[LD],
          gD = pD ? pD.root.refCount[cD] : rD.refCount,
          RD = gD > 1 ? ` [\xd7${gD}]` : "";
        let AD = `${function(DD){return new Array(DD).fill(0).map(((zD,wD)=>wD===DD-1?"\u2514\u2500 ":"   ")).join("")}(wD)}${sD}${DD.constructor.name} (refId: ${cD})${RD}${KD}\n`;
        return rD.forEachChild(((sD, KD) => {
          let rD = KD;
          "number" === typeof KD && DD.$indexes && (rD = DD.$indexes.get(KD) ?? KD);
          const LD = void 0 !== DD.forEach && void 0 !== rD ? `["${rD}"]: ` : "";
          AD += this.debugRefIds(sD.ref, zD, wD + 1, pD, LD)
        })), AD
      }
      static debugRefIdEncodingOrder(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const wD = [],
          pD = DD[BD];
        if ("changes" === zD) {
          let DD = pD.root.changes?.next;
          for (; DD;) DD.changeTree && wD.push(DD.changeTree.ref[LD]), DD = DD.next;
          return wD
        }
        const sD = "allFilteredChanges" === zD,
          KD = new Set,
          rD = DD => {
            KD.has(DD) || (KD.add(DD), DD.isFiltered === sD && wD.push(DD.ref[LD]), DD.forEachChild(((DD, zD) => rD(DD))))
          };
        return rD(pD), wD
      }
      static debugRefIdsFromDecoder(DD) {
        return this.debugRefIds(DD.state, !1, 0, DD)
      }
      static debugChanges(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = DD[BD],
          pD = zD ? "allChanges" : "changes";
        let KD = `${DD.constructor.name} (${DD[LD]}) -> .${pD}:\n`;
        return zD ? wD.forEachLive((DD => {
          KD += `- [${DD}]: ADD (${JSON.stringify(wD.getValue(Number(DD),!0))})\n`
        })) : wD.forEach(((DD, zD) => {
          DD < 0 || !zD || (KD += `- [${DD}]: ${sD[zD]} (${JSON.stringify(wD.getValue(Number(DD),!1))})\n`)
        })), KD
      }
    }
    KD(Tp);
    const bp = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class jp {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const DD = {};
        for (const zD in this.changeTrees) DD[zD] = this.changeTrees[zD].refCount;
        return DD
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
      enqueueFilterRefresh(DD) {
        this.types.hasFilters && (DD.flags & xw || (DD.flags |= xw, this.pendingFilterRefresh.push(DD)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(DD) {
        this._freeViewIds.push(DD)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(DD) {
        this.activeViews.set(DD.id, new WeakRef(DD))
      }
      unregisterView(DD) {
        this.activeViews.delete(DD.id);
        const zD = DD.id;
        for (const wD of this.streamTrees) wD._dropView(zD)
      }
      forEachActiveView(DD) {
        for (const [zD, wD] of this.activeViews) {
          const pD = wD.deref();
          if (void 0 !== pD) DD(pD);
          else {
            this.activeViews.delete(zD);
            for (const DD of this.streamTrees) DD._dropView(zD)
          }
        }
      }
      registerStream(DD) {
        this.streamTrees.add(DD)
      }
      unregisterStream(DD) {
        this.streamTrees.delete(DD)
      }
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = DD, this.nextUniqueId = zD
      }
      add(DD) {
        const zD = DD.ref;
        void 0 === zD[LD] && (bp.value = this.nextUniqueId++, Object.defineProperty(zD, LD, bp));
        const wD = zD[LD],
          pD = void 0 === this.changeTrees[wD];
        pD && (this.changeTrees[wD] = DD), DD.needsRestage && (DD.needsRestage = !1, DD.forEachLiveWithCtx(DD, ww));
        const sD = pD ? 0 : DD.refCount;
        return DD.refCount = sD + 1, sD > 0 && this.enqueueFilterRefresh(DD), pD
      }
      remove(DD) {
        const zD = DD.refCount - 1;
        if (zD <= 0) {
          if (DD.root = void 0, delete this.changeTrees[DD.ref[LD]], DD.isStreamCollection) {
            const zD = DD.ref;
            zD._unregister?.(), this.unregisterStream(zD)
          }
          this.removeFromQueue(DD), this.removeFromUnreliableQueue(DD), DD.refCount = 0, DD.needsRestage = !0, DD.forEachChild(((zD, wD) => {
            zD.removeParent(DD.ref) && (void 0 === zD.parentRef || zD.refCount > 0 ? this.remove(zD) : this.moveNextToParent(zD))
          }))
        } else DD.refCount = zD, this.enqueueFilterRefresh(DD), this.recursivelyMoveNextToParent(DD);
        return zD
      }
      recursivelyMoveNextToParent(DD) {
        this.moveNextToParent(DD), DD.forEachChild(((DD, zD) => this.recursivelyMoveNextToParent(DD)))
      }
      moveNextToParent(DD) {
        DD.changesNode && this._moveNextToParentInList(this.changes, DD, DD.changesNode, "changesNode"), DD.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, DD, DD.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(DD, zD, wD, pD) {
        const sD = zD.parent;
        if (!sD || !sD[BD]) return;
        const KD = sD[BD][pD];
        KD && KD !== wD && (wD.position > KD.position || (wD.prev ? wD.prev.next = wD.next : DD.next = wD.next, wD.next ? wD.next.prev = wD.prev : DD.tail = wD.prev, wD.prev = DD.tail, wD.next = void 0, DD.tail.next = wD, DD.tail = wD, wD.position = DD.nextPosition++))
      }
      enqueueChangeTree(DD) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.changesNode) || (DD.changesNode = this._appendToList(this.changes, DD))
      }
      enqueueUnreliable(DD) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.unreliableChangesNode) || (DD.unreliableChangesNode = this._appendToList(this.unreliableChanges, DD))
      }
      _appendToList(DD, zD) {
        const wD = this._nodePool;
        let pD;
        return wD.length > 0 ? (pD = wD.pop(), pD.changeTree = zD, pD.next = void 0, pD.prev = void 0) : pD = {
          changeTree: zD,
          next: void 0,
          prev: void 0,
          position: 0
        }, DD.next ? (pD.prev = DD.tail, DD.tail.next = pD, DD.tail = pD) : (DD.nextPosition = 0, DD.next = pD, DD.tail = pD), pD.position = DD.nextPosition++, pD
      }
      releaseNode(DD) {
        DD.changeTree = void 0, DD.prev = void 0, DD.next = void 0, this._nodePool.push(DD)
      }
      removeFromQueue(DD) {
        return this._removeNode(this.changes, DD, DD.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(DD) {
        return this._removeNode(this.unreliableChanges, DD, DD.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(DD, zD, wD, pD) {
        return !(!wD || wD.changeTree !== zD) && (wD.prev ? wD.prev.next = wD.next : DD.next = wD.next, wD.next ? wD.next.prev = wD.prev : DD.tail = wD.prev, zD[pD] = void 0, this.releaseNode(wD), !0)
      }
    }

    function dp(DD, zD) {
      if (-1 === zD || zD >= DD.length) return !1;
      const wD = DD.length - 1;
      for (let pD = zD; pD < wD; pD++) DD[pD] = DD[pD + 1];
      return DD.length = wD, !0
    }

    function Sp(DD, zD, wD) {
      const pD = ~wD,
        sD = DD.changeTrees;
      for (const KD in sD) {
        const DD = sD[KD],
          wD = DD.visibleViews;
        void 0 !== wD && zD < wD.length && (wD[zD] &= pD);
        const rD = DD.subscribedViews;
        void 0 !== rD && zD < rD.length && (rD[zD] &= pD);
        const LD = DD.tagViews;
        void 0 !== LD && LD.forEach((DD => {
          zD < DD.length && (DD[zD] &= pD)
        }))
      }
    }
    const ip = new FinalizationRegistry((DD => {
      let {
        root: zD,
        id: wD,
        slot: pD,
        bit: sD
      } = DD;
      Sp(zD, pD, sD), zD.activeViews.delete(wD);
      for (const KD of zD.streamTrees) KD._dropView(wD);
      zD.releaseViewId(wD)
    }));

    function lp(DD) {
      if (void 0 === DD) return "undefined";
      if (null === DD) return "null";
      const zD = typeof DD;
      return "string" === zD ? JSON.stringify(DD.length > 30 ? `${DD.slice(0,30)}\u2026` : DD) : "object" !== zD && "function" !== zD ? `${zD} ${String(DD)}` : Array.isArray(DD) ? `Array(${DD.length})` : DD.constructor?.name ?? "Object"
    }
    class Wp {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = DD, DD && (this.items = [])
      }
      _bindRoot(DD) {
        void 0 === this._root && (this._root = DD, this.id = DD.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), DD.registerView(this), ip.register(this, {
          root: DD,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), Sp(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), ip.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(DD) {
        const zD = DD.visibleViews,
          wD = this._slot;
        return void 0 !== zD && wD < zD.length && 0 !== (zD[wD] & this._bit)
      }
      markVisible(DD) {
        const zD = this._slot;
        let wD = DD.visibleViews;
        for (void 0 === wD && (wD = DD.visibleViews = []); wD.length <= zD;) wD.push(0);
        wD[zD] |= this._bit
      }
      unmarkVisible(DD) {
        const zD = DD.visibleViews;
        if (void 0 === zD) return;
        const wD = this._slot;
        wD < zD.length && (zD[wD] &= ~this._bit)
      }
      isSubscribed(DD) {
        const zD = DD.subscribedViews,
          wD = this._slot;
        return void 0 !== zD && wD < zD.length && 0 !== (zD[wD] & this._bit)
      }
      _setSubscribed(DD) {
        const zD = this._slot;
        let wD = DD.subscribedViews;
        for (void 0 === wD && (wD = DD.subscribedViews = []); wD.length <= zD;) wD.push(0);
        wD[zD] |= this._bit
      }
      _clearSubscribed(DD) {
        const zD = DD.subscribedViews;
        if (void 0 === zD) return;
        const wD = this._slot;
        wD < zD.length && (zD[wD] &= ~this._bit)
      }
      hasTagOnTree(DD, zD) {
        const wD = DD.tagViews;
        if (void 0 === wD) return !1;
        const pD = this._slot,
          sD = this._bit;
        for (let KD = zD; 0 !== KD; KD &= KD - 1) {
          const DD = wD.get(KD & -KD);
          if (void 0 !== DD && pD < DD.length && 0 !== (DD[pD] & sD)) return !0
        }
        return !1
      }
      addTag(DD, zD) {
        if (zD === Bp) return;
        let wD = DD.tagViews;
        void 0 === wD && (wD = DD.tagViews = new Map);
        const pD = this._slot,
          sD = this._bit;
        for (let KD = zD; KD > 0; KD &= KD - 1) {
          const DD = KD & -KD;
          let zD = wD.get(DD);
          for (void 0 === zD && (zD = [], wD.set(DD, zD)); zD.length <= pD;) zD.push(0);
          zD[pD] |= sD
        }
      }
      removeTag(DD, zD) {
        if (zD === Bp) return;
        const wD = DD.tagViews;
        if (void 0 === wD) return;
        const pD = this._slot,
          sD = ~this._bit;
        for (let KD = zD; KD > 0; KD &= KD - 1) {
          const DD = wD.get(KD & -KD);
          void 0 !== DD && pD < DD.length && (DD[pD] &= sD)
        }
      }
      removeAllTagsOnTree(DD) {
        const zD = DD.tagViews;
        if (void 0 === zD) return;
        const wD = this._slot,
          pD = ~this._bit;
        zD.forEach((DD => {
          wD < DD.length && (DD[wD] &= pD)
        }))
      }
      add(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bp,
          wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(DD, zD, wD, !1)
      }
      _addImmediate(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bp;
        this._add(DD, zD, !0, !0)
      }
      _add(DD, zD, wD, pD) {
        const KD = DD?.[BD];
        if (!KD) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${lp(DD)}`), !1;
        const rD = KD.parent;
        if (!rD && 0 !== DD[LD]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${KD.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== KD.root && this._bindRoot(KD.root);
        const cD = rD?.[BD];
        if (!pD && cD?.isStreamCollection) return jz(rD, this.id, KD.parentIndex), !0;
        const gD = DD.constructor[Symbol.metadata],
          RD = this.isVisible(KD);
        if (!this.iterable || !wD || RD && -1 !== this.items.indexOf(DD) || this.items.push(DD), this.markVisible(KD), wD && rD && this.addParentOf(KD, zD), !pD && KD.isStreamCollection) return !0;
        if (zD === Bp && KD.isNew) return this._markSubtreeVisible(KD, zD), !1;
        let AD = this.changes.get(DD[LD]);
        void 0 === AD && (AD = new Map, this.changes.set(DD[LD], AD));
        let UD = !1;
        const fD = KD.encDescriptor.tags;
        if (KD.forEachChild(((DD, wD) => {
            const pD = fD[wD];
            if (void 0 !== pD) {
              if (!(pD === Bp || zD !== Bp && 0 !== (pD & zD))) return
            }
            this.add(DD.ref, zD, !1) && (UD = !0)
          })), zD !== Bp) {
          this.addTag(KD, zD);
          const DD = gD?.[TD];
          if (void 0 !== DD)
            for (let wD = zD; wD > 0; wD &= wD - 1) DD[wD & -wD]?.forEach((DD => {
              KD.getChange(DD) !== sD.DELETE && AD.set(DD, sD.ADD)
            }))
        }
        if ((zD === Bp || !RD) && (!KD.isNew || UD))
          if (KD.isArray && "string" !== typeof KD.refTarget[GD]) KD.refTarget.items.length > 0 && (AD.set(-1, sD.ADD), UD = !0);
          else {
            const DD = KD.encDescriptor.tags;
            KD.forEachLive((wD => {
              const pD = DD[wD];
              (void 0 === pD || pD === Bp || zD !== Bp && 0 !== (pD & zD)) && (AD.set(wD, sD.ADD), UD = !0)
            }))
          } return UD
      }
      _markSubtreeVisible(DD, zD) {
        const wD = DD.encDescriptor.tags;
        DD.forEachChild(((DD, pD) => {
          const sD = wD[pD];
          if (void 0 !== sD) {
            if (!(sD === Bp || zD !== Bp && 0 !== (sD & zD))) return
          }
          DD.isNew ? (this.markVisible(DD), this._markSubtreeVisible(DD, zD)) : this._add(DD.ref, zD, !1, !1)
        }))
      }
      addParentOf(DD, zD) {
        const wD = DD.parent[BD],
          pD = DD.parentIndex;
        this.isVisible(wD) || this.markVisible(wD);
        const KD = wD.parent?.[BD];
        if (KD && this.addParentOf(wD, zD), wD.hasFilteredFields && wD.getChange(pD) !== sD.DELETE) {
          let KD = this.changes.get(wD.ref[LD]);
          void 0 === KD && (KD = new Map, this.changes.set(wD.ref[LD], KD));
          const rD = wD.encDescriptor.tags[pD];
          void 0 !== rD && rD !== Bp && 0 !== (rD & zD) && this.addTag(wD, zD), KD.set(wD.isArray ? DD : pD, sD.ADD)
        }
      }
      _touchAncestorsOf(DD) {
        let zD = DD.parent?.[BD];
        if (void 0 === zD) return;
        const wD = [];
        for (; void 0 !== zD;) {
          if (zD.hasFilteredFields) {
            const DD = zD.ref[LD];
            if (this.changes.has(DD)) break;
            wD.push(zD)
          }
          zD = zD.parent?.[BD]
        }
        for (let pD = wD.length - 1; pD >= 0; pD--) this.changes.set(wD[pD].ref[LD], new Map)
      }
      remove(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bp,
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = DD?.[BD];
        if (!pD) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${lp(DD)}`), this;
        const KD = pD.parent?.[BD];
        if (KD?.isStreamCollection) return this.unmarkVisible(pD), this.iterable && !wD && dp(this.items, this.items.indexOf(DD)),
          function(DD, zD, wD, pD, KD) {
            const rD = DD._stream;
            if (void 0 === rD) return !1;
            const LD = rD.pendingByView.get(zD);
            if (LD?.has(pD)) return LD.delete(pD), !1;
            const cD = rD.sentByView.get(zD);
            if (cD?.has(pD)) {
              cD.delete(pD);
              let DD = KD.get(wD);
              return void 0 === DD && (DD = new Map, KD.set(wD, DD)), DD.set(pD, sD.DELETE), !0
            }
          }(pD.parent, this.id, pD.parent[LD], pD.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(pD), this;
        if (pD.isStreamCollection) {
          this.unmarkVisible(pD), this.iterable && !wD && dp(this.items, this.items.indexOf(DD));
          const zD = pD.ref,
            KD = zD._stream;
          if (void 0 !== KD) {
            KD.pendingByView.get(this.id)?.clear();
            const DD = KD.sentByView.get(this.id);
            if (void 0 !== DD && DD.size > 0) {
              const wD = zD[LD];
              let pD = this.changes.get(wD);
              void 0 === pD && (pD = new Map, this.changes.set(wD, pD));
              for (const zD of DD) pD.set(zD, sD.DELETE);
              DD.clear()
            }
          }
          return this
        }
        this.unmarkVisible(pD), this.iterable && !wD && dp(this.items, this.items.indexOf(DD));
        const rD = pD.ref,
          cD = rD.constructor[Symbol.metadata],
          gD = rD[LD];
        this._touchAncestorsOf(pD);
        let RD = this.changes.get(gD);
        if (void 0 === RD && (RD = new Map, this.changes.set(gD, RD)), zD === Bp) {
          const DD = pD.parent;
          if (DD && !vz.isValidInstance(DD) && pD.isFiltered) {
            const zD = KD.isArray ? pD : pD.parentIndex,
              wD = DD[LD];
            let rD = this.changes.get(wD);
            void 0 === rD ? (rD = new Map, this.changes.set(wD, rD)) : rD.get(zD) === sD.ADD && this._dropPendingEntries(pD), rD.set(zD, sD.DELETE), this._recursiveDeleteVisibleChangeTree(pD)
          } else cD?.[xD]?.forEach((DD => this._removeViewField(pD, RD, DD)))
        } else {
          const DD = cD?.[TD];
          if (void 0 !== DD)
            for (let wD = zD; wD > 0; wD &= wD - 1) DD[wD & -wD]?.forEach((DD => this._removeViewField(pD, RD, DD)))
        }
        return void 0 === zD ? this.removeAllTagsOnTree(pD) : this.removeTag(pD, zD), this
      }
      has(DD) {
        return this.isVisible(DD[BD])
      }
      hasTag(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bp;
        return this.hasTagOnTree(DD[BD], zD)
      }
      subscribe(DD, zD) {
        const wD = DD?.[BD];
        if (!wD) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${lp(DD)}`), this;
        if (void 0 === this._root && void 0 !== wD.root && this._bindRoot(wD.root), void 0 !== zD)
          if (wD.isStreamCollection) {
            const wD = Pz(DD);
            null === zD ? wD.priorityByView?.delete(this.id) : (wD.priorityByView ??= new Map).set(this.id, zD)
          } else {
            const zD = DD?.constructor?.name ?? "collection",
              pD = wD.parent;
            if (void 0 === pD) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${zD} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const DD = pD?.constructor?.[Symbol.metadata]?.[wD.parentIndex]?.name,
                sD = DD ? `${pD.constructor.name}#${DD}` : zD;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${sD} is a ${zD}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(wD)) return this;
        const pD = void 0 !== wD.parent && !this.isVisible(wD);
        if (pD ? (this.addParentOf(wD, Bp), this._add(DD, Bp, !1, !1)) : this.markVisible(wD), this._setSubscribed(wD), wD.isStreamCollection) {
          const zD = DD;
          wD.forEachChild(((DD, wD) => {
            jz(zD, this.id, wD)
          }))
        } else pD || wD.forEachChild((DD => {
          this.markVisible(DD)
        }));
        return this
      }
      unsubscribe(DD) {
        const zD = DD?.[BD];
        if (!zD) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${lp(DD)}`), this;
        if (!this.isSubscribed(zD)) return this;
        this._clearSubscribed(zD);
        const wD = zD.ref[LD];
        if (zD.isStreamCollection) {
          const zD = DD._stream;
          if (void 0 !== zD) {
            zD.pendingByView.get(this.id)?.clear();
            const DD = zD.sentByView.get(this.id);
            if (void 0 !== DD && DD.size > 0) {
              let zD = this.changes.get(wD);
              void 0 === zD && (zD = new Map, this.changes.set(wD, zD));
              for (const wD of DD) zD.set(wD, sD.DELETE);
              DD.clear()
            }
          }
        } else {
          const DD = zD.isArray;
          let pD = this.changes.get(wD);
          zD.forEachChild(((zD, KD) => {
            void 0 === pD && (pD = new Map, this.changes.set(wD, pD)), pD.set(DD ? zD : KD, sD.DELETE), this.unmarkVisible(zD)
          }))
        }
        return this.unmarkVisible(zD), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let DD = 0, zD = this.items.length; DD < zD; DD++) this.remove(this.items[DD], Bp, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(DD) {
        let zD = this.isVisible(DD);
        if (!zD && DD.isVisibilitySharedWithParent)
          if (this.isVisible(DD.parent[BD])) this.markVisible(DD), zD = !0;
          else
            for (let wD = DD.extraParents; void 0 !== wD; wD = wD.next) {
              const pD = wD.ref[BD];
              if (pD.isFiltered && this.isVisible(pD)) {
                this.markVisible(DD), zD = !0;
                break
              }
            }
        return zD
      }
      _recursiveDeleteVisibleChangeTree(DD) {
        DD.forEachChild((DD => {
          this.unmarkVisible(DD), this._recursiveDeleteVisibleChangeTree(DD)
        }))
      }
      _dropPendingEntries(DD) {
        this.changes.delete(DD.ref[LD]), DD.forEachChild((DD => this._dropPendingEntries(DD)))
      }
      _removeViewField(DD, zD, wD) {
        const pD = zD.get(wD) === sD.ADD;
        zD.set(wD, sD.DELETE);
        const KD = DD.ref[DD.encDescriptor.names[wD]],
          rD = KD?.[BD];
        rD && (this.unmarkVisible(rD), this._recursiveDeleteVisibleChangeTree(rD), pD && this._dropPendingEntries(rD))
      }
    }

    function Np(DD) {
      DD.structSwitchEmitted || (DD.shouldEmitSwitch && (DD.buffer[DD.it.offset++] = 255, zz.number(DD.buffer, DD.ref[LD], DD.it)), DD.structSwitchEmitted = !0)
    }

    function Zp(DD, zD) {
      mp(DD, zD, sD.ADD)
    }

    function yp(DD, zD) {
      if (zD._fullSyncGen === DD.gen) return;
      zD._fullSyncGen = DD.gen;
      if (!DD.hasView || DD.view.isChangeTreeVisible(zD)) {
        const wD = zD.encDescriptor;
        DD.changeTree = zD, DD.ref = zD.ref, DD.encoder = wD.encoder, DD.filter = wD.filter, DD.metadata = wD.metadata, DD.treeIsFiltered = zD.isFiltered, DD.isSchema = wD.isSchema, DD.filterBitmask = wD.filterBitmask, DD.tags = wD.tags, DD.structSwitchEmitted = !1, DD.shouldEmitSwitch = DD.hasView || DD.it.offset > DD.initialOffset || zD !== DD.rootChangeTree, zD.isArray && zD.collDirty.size > 0 && (zD.flags |= 512), sw(zD, DD, Zp)
      }
      nw(zD, DD, kp)
    }

    function kp(DD, zD, wD) {
      yp(DD, zD)
    }

    function mp(DD, zD, wD) {
      if (zD < 0) {
        if (DD.treeIsFiltered !== DD.emitFiltered) return;
        return Np(DD), void(DD.buffer[DD.it.offset++] = 255 & Math.abs(zD))
      }
      if ((DD.isSchema ? DD.treeIsFiltered || (zD < 32 ? 0 !== (DD.filterBitmask & 1 << zD) : void 0 !== DD.tags[zD]) : DD.treeIsFiltered) !== DD.emitFiltered) return;
      const pD = DD.isEncodeAll ? sD.ADD : wD;
      void 0 !== pD && (void 0 === DD.filter || DD.filter(DD.ref, zD, DD.view)) && (Np(DD), DD.encoder(DD.self, DD.buffer, DD.changeTree, zD, pD, DD.it, DD.isEncodeAll, DD.hasView, DD.metadata))
    }

    function ep(DD, zD) {
      const wD = new Uint8Array(DD.length + zD.length);
      return wD.set(DD, 0), wD.set(zD, DD.length), wD
    }
    class op {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(op.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(DD, zD) {
        this.context = yz.cache(DD.constructor), this.root = zD ?? new jp(this.context), this.setState(DD)
      }
      setState(DD) {
        this.state = DD, this.state[BD].setRoot(this.root)
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
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.offset;
        return this._encodeChannel(DD, zD, wD, pD, !1)
      }
      encodeUnreliable() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.offset;
        return this._encodeChannel(DD, zD, wD, pD, !0)
      }
      _encodeChannel(DD, zD, wD, pD, sD) {
        this.root.pendingFilterRefresh.length > 0 && rw(this.root);
        const KD = void 0 !== zD,
          rD = this.state[BD],
          LD = this._encodeCtx;
        LD.self = this, LD.buffer = wD, LD.it = DD, LD.view = zD, LD.isEncodeAll = !1, LD.hasView = KD, LD.emitFiltered = KD;
        let cD = sD ? this.root.unreliableChanges : this.root.changes;
        for (; cD = cD.next;) {
          const wD = cD.changeTree;
          if (KD && !zD.isChangeTreeVisible(wD)) continue;
          const gD = sD ? wD.unreliableRecorder : wD;
          if (!gD || !gD.has()) continue;
          const RD = wD.encDescriptor;
          LD.changeTree = wD, LD.ref = wD.ref, LD.encoder = RD.encoder, LD.filter = RD.filter, LD.metadata = RD.metadata, LD.treeIsFiltered = wD.isFiltered, LD.isSchema = RD.isSchema, LD.filterBitmask = RD.filterBitmask, LD.tags = RD.tags, LD.structSwitchEmitted = !1, LD.isRootTree = wD === rD, LD.shouldEmitSwitch = KD || DD.offset > pD || !LD.isRootTree, gD.forEachWithCtx(LD, mp)
        }
        return sD || KD || !this._isStreamBroadcastMode || this._emitStreamBroadcast(wD, DD), DD.offset > wD.byteLength ? (wD = this._resizeBuffer(wD, DD.offset), DD.offset = pD, this._encodeChannel(DD, zD, wD, pD, sD)) : wD.subarray(0, DD.offset)
      }
      encodeFullSync(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : DD.offset;
        this.root.pendingFilterRefresh.length > 0 && rw(this.root);
        const KD = void 0 !== pD,
          rD = this.state[BD],
          LD = this._encodeCtx;
        return LD.self = this, LD.buffer = zD, LD.it = DD, LD.view = pD, LD.isEncodeAll = !0, LD.hasView = KD, LD.emitFiltered = wD, LD.gen = ++this._fullSyncGen, LD.initialOffset = sD, LD.rootChangeTree = rD, yp(LD, rD), DD.offset > zD.byteLength ? (zD = this._resizeBuffer(zD, DD.offset), DD.offset = sD, this.encodeFullSync(DD, zD, wD, pD, sD)) : zD.subarray(0, DD.offset)
      }
      _resizeBuffer(DD, zD) {
        const wD = Math.ceil(zD / op.BUFFER_SIZE) * op.BUFFER_SIZE,
          pD = new Uint8Array(wD);
        return pD.set(DD), DD === this.sharedBuffer && (this.sharedBuffer = pD), pD
      }
      encodeAll() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(DD, zD, !1)
      }
      encodeAllView(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const sD = wD.offset;
        return pD = this.encodeFullSync(wD, pD, !0, DD, sD), ep(pD.subarray(0, zD), pD.subarray(sD, wD.offset))
      }
      ensureCapacity(DD, zD) {
        if (zD + op.BUFFER_SIZE <= DD.byteLength) return DD;
        const wD = Math.ceil((zD + op.BUFFER_SIZE) / op.BUFFER_SIZE) * op.BUFFER_SIZE,
          pD = new Uint8Array(wD);
        return pD.set(DD.subarray(0, zD)), DD === this.sharedBuffer && (this.sharedBuffer = pD), pD
      }
      encodeView(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          KD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const rD = wD.offset;
        this._emitStreamPriority(DD);
        for (const cD of DD.changes.keys()) {
          const zD = DD.changes.get(cD),
            KD = this.root.changeTrees[cD];
          if (void 0 === KD) {
            DD.changes.delete(cD);
            continue
          }
          if (0 === zD.size) continue;
          const rD = KD.encDescriptor,
            gD = rD.encoder,
            RD = rD.metadata,
            AD = KD.ref,
            fD = KD.refTarget;
          pD = this.ensureCapacity(pD, wD.offset), pD[wD.offset++] = 255, zz.number(pD, AD[LD], wD);
          for (const [cD, ID] of zD) {
            let zD;
            if (-1 === cD) {
              const DD = fD.tmpItems,
                zD = fD.deletedIndexes;
              for (let rD = 0; rD < DD.length; rD++) void 0 !== DD[rD] && !0 !== zD[rD] && gD(this, pD, KD, rD, sD.ADD, wD, !1, !0, RD);
              continue
            }
            if ("number" === typeof cD) zD = cD;
            else {
              const wD = cD.indexInParent(AD);
              if (void 0 === wD) continue;
              if (zD = wD, ID === sD.ADD && KD.getChange(zD) === sD.DELETE) {
                DD.changes.delete(cD.ref[LD]);
                continue
              }
            }
            gD(this, pD, KD, zD, void 0 !== fD[UD](zD) && ID || sD.DELETE, wD, !1, !0, RD)
          }
        }
        return DD.changes.clear(), pD = this.encode(wD, DD, pD), KD ? ep(pD.subarray(0, zD), pD.subarray(rD, wD.offset)) : pD.subarray(rD, wD.offset)
      }
      encodeUnreliableView(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const sD = wD.offset;
        return pD = this.encodeUnreliable(wD, DD, pD, sD), ep(pD.subarray(0, zD), pD.subarray(sD, wD.offset))
      }
      _emitStreamBroadcast(DD, zD) {
        const wD = this.root.streamTrees;
        for (const pD of wD) {
          const wD = pD,
            KD = wD[BD],
            rD = wD[LD];
          if (void 0 === rD) continue;
          const cD = wD._stream,
            gD = cD.broadcastDeletes,
            RD = cD.broadcastPending,
            AD = cD.sentBroadcast,
            fD = gD.size > 0,
            ID = RD.size > 0,
            GD = KD.encDescriptor,
            hD = GD.encoder,
            nD = GD.metadata;
          if (fD || ID) {
            if (DD[zD.offset++] = 255, zz.number(DD, rD, zD), fD) {
              for (const wD of gD) hD(this, DD, KD, wD, sD.DELETE, zD, !1, !1, nD);
              gD.clear()
            }
            const pD = cD.maxPerTick,
              ID = [];
            let GD = 0;
            const MD = [];
            for (const rD of RD) {
              if (GD >= pD) break;
              const LD = wD[UD](rD);
              void 0 !== LD ? (hD(this, DD, KD, rD, sD.ADD, zD, !1, !1, nD), AD.add(rD), ID.push(LD), MD.push(rD), GD++) : MD.push(rD)
            }
            for (const DD of MD) RD.delete(DD);
            for (const wD of ID) {
              const pD = wD[BD];
              if (void 0 === pD) continue;
              const KD = wD[LD];
              if (void 0 === KD) continue;
              DD[zD.offset++] = 255, zz.number(DD, KD, zD);
              const rD = pD.encDescriptor,
                cD = rD.encoder,
                gD = rD.metadata;
              pD.forEachLive((wD => {
                vz.hasUnreliableAtIndex(gD, wD) || cD(this, DD, pD, wD, sD.ADD, zD, !1, !1, gD)
              }))
            }
          }
          for (const pD of AD) {
            const sD = wD[UD](pD);
            if (void 0 === sD) continue;
            const KD = sD[BD];
            if (void 0 === KD || !KD.has()) continue;
            const rD = sD[LD];
            if (void 0 === rD) continue;
            DD[zD.offset++] = 255, zz.number(DD, rD, zD);
            const cD = KD.encDescriptor,
              gD = cD.encoder,
              RD = cD.metadata;
            KD.forEach(((wD, pD) => {
              wD < 0 || vz.hasUnreliableAtIndex(RD, wD) || gD(this, DD, KD, wD, pD, zD, !1, !1, RD)
            }))
          }
        }
      }
      _emitStreamPriority(DD) {
        const zD = this.root.streamTrees;
        if (0 === zD.size) return;
        const wD = DD.id;
        for (const pD of zD) {
          const zD = pD,
            KD = zD._stream,
            rD = KD.pendingByView.get(wD);
          if (void 0 === rD || 0 === rD.size) continue;
          const cD = KD.priorityByView?.get(wD),
            gD = void 0 !== cD,
            RD = KD.priority,
            AD = KD.maxPerTick,
            fD = [],
            ID = [];
          if (gD || void 0 !== RD) {
            const wD = [],
              pD = [];
            let sD = 0;
            for (const KD of rD) {
              const rD = zD[UD](KD);
              if (void 0 === rD) {
                ID.push(KD);
                continue
              }
              const LD = gD ? cD(rD) : RD(DD, rD);
              if (sD < AD) {
                let DD = sD++;
                for (; DD > 0 && pD[DD - 1] < LD;) pD[DD] = pD[DD - 1], wD[DD] = wD[DD - 1], DD--;
                pD[DD] = LD, wD[DD] = KD
              } else if (LD > pD[AD - 1]) {
                let DD = AD - 1;
                for (; DD > 0 && pD[DD - 1] < LD;) pD[DD] = pD[DD - 1], wD[DD] = wD[DD - 1], DD--;
                pD[DD] = LD, wD[DD] = KD
              }
            }
            for (let DD = 0; DD < sD; DD++) fD.push(wD[DD])
          } else
            for (const DD of rD) {
              if (fD.length >= AD) break;
              fD.push(DD)
            }
          for (const DD of ID) rD.delete(DD);
          const GD = fD.length;
          let hD = KD.sentByView.get(wD);
          void 0 === hD && (hD = new Set, KD.sentByView.set(wD, hD));
          for (let wD = 0; wD < GD; wD++) {
            const pD = fD[wD],
              KD = zD[UD](pD);
            if (void 0 === KD) {
              rD.delete(pD);
              continue
            }
            DD._addImmediate(KD);
            const cD = KD[BD];
            if (void 0 !== cD) {
              const zD = KD[LD];
              let wD = DD.changes.get(zD);
              void 0 === wD && (wD = new Map, DD.changes.set(zD, wD));
              const pD = cD.metadata;
              cD.forEachLive((DD => {
                vz.hasUnreliableAtIndex(pD, DD) || wD.set(DD, sD.ADD)
              }))
            }
            rD.delete(pD), hD.add(pD)
          }
        }
      }
      discardChanges() {
        const DD = this.root.changes;
        let zD = DD.next;
        const wD = this.root;
        for (; zD;) {
          const DD = zD.next;
          zD.changeTree.endEncode(), wD.releaseNode(zD), zD = DD
        }
        DD.next = void 0, DD.tail = void 0
      }
      discardUnreliableChanges() {
        const DD = this.root.unreliableChanges;
        let zD = DD.next;
        const wD = this.root;
        for (; zD;) {
          const DD = zD.next;
          zD.changeTree.endEncodeUnreliable(), wD.releaseNode(zD), zD = DD
        }
        DD.next = void 0, DD.tail = void 0
      }
      tryEncodeTypeId(DD, zD, wD, pD) {
        const sD = this.context.getTypeId(zD),
          KD = this.context.getTypeId(wD);
        void 0 !== KD ? sD !== KD && (DD[pD.offset++] = 213, zz.number(DD, KD, pD)) : console.warn(`@colyseus/schema WARNING: Class "${wD.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const DD = this.root;
        if (0 === DD.streamTrees.size) return !1;
        const zD = 0 === DD.activeViews.size;
        for (const wD of DD.streamTrees)
          if (zD ? bz(wD) : Tz(wD, DD)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class ap extends Error {
      constructor(DD) {
        super(DD), this.name = "DecodingWarning"
      }
    }
    const vp = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class tp {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(DD, zD), void 0 === zD[LD] ? (vp.value = DD, Object.defineProperty(zD, LD, vp)) : zD[LD] !== DD && (zD[LD] = DD), wD && (this.refCount[DD] = (this.refCount[DD] || 0) + 1), this.deletedRefs.has(DD) && this.deletedRefs.delete(DD)
      }
      removeRef(DD) {
        const zD = this.refCount[DD];
        if (void 0 !== zD)
          if (0 !== zD)(this.refCount[DD] = zD - 1) <= 0 && this.deletedRefs.add(DD);
          else try {
            const zD = this.refs.get(DD);
            throw new ap(`trying to remove refId '${DD}' with 0 refCount (${zD.constructor.name}: ${JSON.stringify(zD)})`)
          } catch (Ls) {
            console.warn(Ls)
          } else try {
            throw new ap("trying to remove refId that doesn't exist: " + DD)
          } catch (Ls) {
            console.warn(Ls)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((DD => {
          if (this.refCount[DD] > 0) return;
          const zD = this.refs.get(DD),
            wD = zD.constructor[Symbol.metadata];
          if (null != wD)
            for (const pD in wD) {
              const DD = zD[wD[pD].name];
              if ("object" === typeof DD && DD) {
                const zD = DD[LD];
                void 0 === zD || this.deletedRefs.has(zD) || this.removeRef(zD)
              }
            } else "function" === typeof zD[GD] && Array.from(zD.values()).forEach((DD => {
              const zD = DD[LD];
              void 0 === zD || this.deletedRefs.has(zD) || this.removeRef(zD)
            }));
          this.refs.delete(DD), delete this.refCount[DD], delete this.callbacks[DD]
        })), this.deletedRefs.clear()
      }
      addCallback(DD, zD, wD) {
        if (void 0 === DD) {
          const DD = "number" === typeof zD ? sD[zD] : zD;
          throw new Error(`Can't addCallback on '${DD}' (refId is undefined)`)
        }
        return this.callbacks[DD] || (this.callbacks[DD] = {}), this.callbacks[DD][zD] || (this.callbacks[DD][zD] = []), this.callbacks[DD][zD].push(wD), () => this.removeCallback(DD, zD, wD)
      }
      removeCallback(DD, zD, wD) {
        const pD = this.callbacks?.[DD]?.[zD]?.indexOf(wD);
        void 0 !== pD && -1 !== pD && dp(this.callbacks[DD][zD], pD)
      }
    }
    class Fp {
      context;
      state;
      root;
      currentRefId = 0;
      bS;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(DD, zD) {
        this.setState(DD), this.context = zD || new yz(DD.constructor)
      }
      setState(DD) {
        this.state = DD, this.root = new tp, this.root.addRef(0, DD)
      }
      decode(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const sD = void 0 !== this.bS ? [] : null,
          KD = this.root,
          rD = DD.byteLength;
        let LD = wD.constructor[RD];
        for (this.currentRefId = 0; zD.offset < rD;) {
          if (DD[zD.offset] == pD) {
            zD.offset++, wD[OD]?.();
            const pD = Mz.number(DD, zD),
              sD = KD.refs.get(pD);
            sD ? (wD = sD, LD = wD.constructor[RD], this.currentRefId = pD) : (console.error(`"refId" not found: ${pD}`, {
              previousRef: wD,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(DD, zD, rD));
            continue
          } - 1 !== LD(this, DD, zD, wD, sD) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(DD, zD, rD))
        }
        return wD[OD]?.(), null !== this.resyncVisited && function(DD, zD) {
          DD.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : kw(DD, DD.state, new Set, zD)
        }(this, sD), null !== sD && this.bS?.(sD), KD.garbageCollectDeletedRefs(), sD
      }
      decodeResync(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(DD, zD)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(DD, zD, wD) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const sD = {
          offset: zD.offset
        };
        for (; zD.offset < wD && (DD[zD.offset] !== pD || (sD.offset = zD.offset + 1, !this.root.refs.has(Mz.number(DD, sD))));) zD.offset++
      }
      getInstanceType(DD, zD, wD) {
        let pD;
        if (213 === DD[zD.offset]) {
          zD.offset++;
          const wD = Mz.number(DD, zD);
          pD = this.context.get(wD)
        }
        return pD || wD
      }
      createInstanceOfType(DD) {
        return DD.initializeForDecoder()
      }
      removeChildRefs(DD, zD) {
        const wD = "string" !== typeof DD[GD],
          pD = DD[LD];
        DD.forEach(((KD, rD) => {
          zD?.push({
            ref: DD,
            refId: pD,
            op: sD.DELETE,
            field: rD,
            value: void 0,
            previousValue: KD
          }), wD && this.root.removeRef(KD[LD])
        }))
      }
    }
    const Yp = Cp({
        min: Ip.float64(),
        max: Ip.float64(),
        bits: Ip.uint8(),
        mode: Ip.uint8()
      }, "QuantizedDescriptor"),
      Hp = Cp({
        name: Ip.string(),
        type: Ip.string(),
        referencedType: Ip.number(),
        childPrimitive: Ip.string(),
        quantized: Ip.ref(Yp).optional()
      }, "ReflectionField"),
      qp = Cp({
        id: Ip.number(),
        extendsId: Ip.number(),
        fields: Ip.array(Hp)
      }, "ReflectionType"),
      Ds = Cp({
        types: Ip.array(qp),
        rootType: Ip.number()
      }, "Reflection");

    function zs(DD) {
      const zD = DD.root,
        wD = zD.callbacks,
        pD = new WeakMap;
      let KD;

      function rD(DD, wD) {
        let gD = wD.instance?.constructor[Symbol.metadata] || DD,
          RD = wD.instance && "function" === typeof wD.instance.forEach || DD && !Tp.is(DD);
        if (gD && !RD) {
          const DD = function(DD, sD, rD, cD) {
            return cD && void 0 !== wD.instance[sD] && !pD.has(KD) && rD(wD.instance[sD], void 0), zD.addCallback(DD[LD], sD, rD)
          };
          return new Proxy({
            listen: function(zD, sD) {
              let rD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (wD.instance) return DD(wD.instance, zD, sD, rD);
              {
                let LD = () => {};
                return wD.onInstanceAvailable(((wD, cD) => {
                  LD = DD(wD, zD, sD, rD && cD && !pD.has(KD))
                })), () => LD()
              }
            },
            onChange: function(DD) {
              return zD.addCallback(wD.instance[LD], sD.REPLACE, DD)
            },
            bindTo: function(DD, pD) {
              return pD || (pD = Object.keys(gD).map((DD => gD[DD].name))), zD.addCallback(wD.instance[LD], sD.REPLACE, (() => {
                pD.forEach((zD => DD[zD] = wD.instance[zD]))
              }))
            }
          }, {
            get(DD, zD) {
              const pD = gD[gD[zD]];
              if (pD) {
                const DD = wD.instance?.[zD],
                  sD = pD => {
                    const sD = cD(wD.instance).listen(zD, ((DD, zD) => {
                      pD(DD, !1), sD?.()
                    }), !1);
                    void 0 !== DD?.[LD] && pD(DD, !0)
                  };
                return rD(pD.type, {
                  instance: void 0 !== DD?.[LD] && DD,
                  parentInstance: wD.instance,
                  onInstanceAvailable: sD
                })
              }
              return DD[zD]
            },
            has: (DD, zD) => void 0 !== gD[zD],
            set(DD, zD, wD) {
              throw new Error("not allowed")
            },
            deleteProperty(DD, zD) {
              throw new Error("not allowed")
            }
          })
        } {
          const DD = function(DD, wD, rD) {
              return rD && DD.forEach(((DD, zD) => wD(DD, zD))), zD.addCallback(DD[LD], sD.ADD, ((DD, zD) => {
                pD.set(wD, !0), KD = wD, wD(DD, zD), pD.delete(wD), KD = void 0
              }))
            },
            rD = function(DD, wD) {
              return zD.addCallback(DD[LD], sD.DELETE, wD)
            },
            cD = function(DD, wD) {
              return zD.addCallback(DD[LD], sD.REPLACE, wD)
            };
          return new Proxy({
            ZJ: function(zD) {
              let sD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (wD.instance) return DD(wD.instance, zD, sD && !pD.has(KD));
              if (wD.onInstanceAvailable) {
                let rD = () => {};
                return wD.onInstanceAvailable(((wD, LD) => {
                  rD = DD(wD, zD, sD && LD && !pD.has(KD))
                })), () => rD()
              }
            },
            hT: function(DD) {
              if (wD.instance) return rD(wD.instance, DD);
              if (wD.onInstanceAvailable) {
                let zD = () => {};
                return wD.onInstanceAvailable((wD => {
                  zD = rD(wD, DD)
                })), () => zD()
              }
            },
            onChange: function(DD) {
              if (wD.instance) return cD(wD.instance, DD);
              if (wD.onInstanceAvailable) {
                let zD = () => {};
                return wD.onInstanceAvailable((wD => {
                  zD = cD(wD, DD)
                })), () => zD()
              }
            }
          }, {
            get(DD, zD) {
              if (!DD[zD]) throw new Error(`Can't access '${zD}' through callback proxy. access the instance directly.`);
              return DD[zD]
            },
            has: (DD, zD) => void 0 !== DD[zD],
            set(DD, zD, wD) {
              throw new Error("not allowed")
            },
            deleteProperty(DD, zD) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function cD(DD) {
        return rD(void 0, {
          instance: DD
        })
      }
      return DD.bS = function(DD) {
        const zD = new Set;
        for (let pD = 0, KD = DD.length; pD < KD; pD++) {
          const KD = DD[pD],
            rD = KD.refId,
            cD = KD.ref,
            gD = wD[rD];
          if (gD) {
            if ((KD.op & sD.DELETE) === sD.DELETE && Tp.isSchema(KD.previousValue)) {
              const DD = wD[KD.previousValue[LD]]?.[sD.DELETE];
              for (let zD = DD?.length - 1; zD >= 0; zD--) DD[zD]()
            }
            if (Tp.isSchema(cD)) {
              if (!zD.has(rD)) {
                const DD = gD?.[sD.REPLACE];
                for (let zD = DD?.length - 1; zD >= 0; zD--) DD[zD]()
              }
              if (gD.hasOwnProperty(KD.field)) {
                const DD = gD[KD.field];
                for (let zD = DD?.length - 1; zD >= 0; zD--) DD[zD](KD.value, KD.previousValue)
              }
            } else {
              if ((KD.op & sD.DELETE) === sD.DELETE) {
                if (void 0 !== KD.previousValue) {
                  const DD = gD[sD.DELETE];
                  for (let zD = DD?.length - 1; zD >= 0; zD--) DD[zD](KD.previousValue, KD.dynamicIndex ?? KD.field)
                }
                if ((KD.op & sD.ADD) === sD.ADD) {
                  const DD = gD[sD.ADD];
                  for (let zD = DD?.length - 1; zD >= 0; zD--) DD[zD](KD.value, KD.dynamicIndex ?? KD.field)
                }
              } else if ((KD.op & sD.ADD) === sD.ADD && KD.previousValue !== KD.value) {
                const DD = gD[sD.ADD];
                for (let zD = DD?.length - 1; zD >= 0; zD--) DD[zD](KD.value, KD.dynamicIndex ?? KD.field)
              }
              if (KD.value !== KD.previousValue && (void 0 !== KD.value || void 0 !== KD.previousValue)) {
                const DD = gD[sD.REPLACE];
                for (let zD = DD?.length - 1; zD >= 0; zD--) DD[zD](KD.value, KD.dynamicIndex ?? KD.field)
              }
            }
            zD.add(rD)
          }
        }
      }, cD
    }

    function ws(DD, zD) {
      DD.bS = zD
    }
    Ds.encode = function(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const wD = DD.context,
        pD = new Ds,
        sD = new op(pD),
        KD = wD.schemas.get(DD.state.constructor);
      KD > 0 && (pD.rootType = KD);
      const rD = new Set,
        LD = {},
        cD = DD => {
          if (void 0 === DD.extendsId || rD.has(DD.extendsId)) {
            rD.add(DD.id), pD.types.push(DD);
            const zD = LD[DD.id];
            void 0 !== zD && (delete LD[DD.id], zD.forEach((DD => cD(DD))))
          } else void 0 === LD[DD.extendsId] && (LD[DD.extendsId] = []), LD[DD.extendsId].push(DD)
        };
      wD.schemas.forEach(((DD, zD) => {
        const pD = new qp;
        pD.id = Number(DD);
        const sD = Object.getPrototypeOf(zD);
        sD !== Tp && (pD.extendsId = wD.schemas.get(sD));
        const KD = zD[Symbol.metadata];
        if (KD !== sD[Symbol.metadata]) {
          const DD = KD[PD] ?? -1;
          for (let zD = 0; zD <= DD; zD++) {
            const DD = KD[zD];
            if (void 0 === DD) continue;
            const sD = DD.name;
            if (!Object.prototype.hasOwnProperty.call(KD, sD)) continue;
            const rD = new Hp;
            let LD;
            if (rD.name = sD, "string" === typeof DD.type) LD = DD.type;
            else if (lz(DD.type)) {
              const zD = DD.type.quantized;
              LD = "quantized";
              const wD = new Yp;
              wD.min = zD.min, wD.max = zD.max, wD.bits = zD.bits, wD.mode = zD.wrap ? 1 : 0, rD.quantized = wD
            } else {
              let zD;
              Tp.is(DD.type) ? (LD = "ref", zD = DD.type) : (LD = Object.keys(DD.type)[0], "string" === typeof DD.type[LD] ? rD.childPrimitive = DD.type[LD] : zD = DD.type[LD]), rD.referencedType = zD ? wD.getTypeId(zD) : -1
            }
            rD.type = LD, pD.fields.push(rD)
          }
        }
        cD(pD)
      }));
      for (const gD in LD) LD[gD].forEach((DD => pD.types.push(DD)));
      return sD.encodeAll(zD).slice(0, zD.offset)
    }, Ds.decode = function(DD, zD) {
      const wD = new Ds;
      new Fp(wD).decode(DD, zD);
      const pD = new yz;
      wD.types.forEach((DD => {
        const zD = pD.get(DD.extendsId) ?? Tp,
          wD = class extends zD {};
        yz.register(wD), pD.add(wD, DD.id)
      }), {});
      wD.types.forEach((DD => {
        const zD = pD.get(DD.id),
          sD = vz.initialize(zD),
          KD = [];
        let rD = DD;
        do {
          KD.push(rD), rD = wD.types.find((DD => DD.id === rD.extendsId))
        } while (rD);
        let LD = 0;
        KD.reverse().forEach((DD => {
          ((DD, zD, wD) => {
            zD.fields.forEach(((zD, sD) => {
              const KD = wD + sD;
              if (void 0 !== zD.quantized) {
                const wD = zD.quantized;
                vz.addField(DD, KD, zD.name, {
                  quantized: iz({
                    min: wD.min,
                    max: wD.max,
                    bits: wD.bits,
                    mode: 1 === wD.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== zD.referencedType) {
                const wD = zD.type,
                  sD = pD.get(zD.referencedType) ?? zD.childPrimitive;
                "ref" === wD ? vz.addField(DD, KD, zD.name, sD) : vz.addField(DD, KD, zD.name, {
                  [wD]: sD
                })
              } else vz.addField(DD, KD, zD.name, zD.type)
            }))
          })(sD, DD, LD), LD += DD.fields.length
        }))
      }));
      const sD = new(pD.get(wD.rootType || 0));
      return new Fp(sD, pD)
    }, Ds.makeEncodable = function(DD) {
      const zD = DD[Symbol.metadata];
      if (!zD) return DD;
      const wD = zD[PD];
      if (void 0 === wD) return DD;
      for (let pD = 0; pD <= wD; pD++) {
        const wD = zD[pD];
        wD && vz.defineField(DD, zD, pD, wD.name, wD.type)
      }
      return Object.prototype.hasOwnProperty.call(DD, XD) && delete DD[XD], DD
    };
    class ps {
      cI;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(DD) {
        this.cI = DD, this.cI.bS = this.bS.bind(this)
      }
      get callbacks() {
        return this.cI.root.callbacks
      }
      get state() {
        return this.cI.state
      }
      addCallback(DD, zD, wD) {
        return this.cI.root.addCallback(DD, zD, wD)
      }
      addCallbackOrWaitCollectionAvailable(DD, zD, wD, pD) {
        let KD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          rD = () => {};
        const cD = () => rD(),
          gD = DD[zD];
        if (gD && void 0 !== gD[LD]) return KD = KD && !1 === this.isTriggering, wD === sD.ADD && KD && gD.forEach(((DD, zD) => {
          pD(DD, zD)
        })), this.addCallback(gD[LD], wD, pD);
        {
          let sD;
          return sD = this.addCallback(DD[LD], zD, ((DD, zD) => {
            null !== DD && void 0 !== DD && (sD(), rD = this.addCallback(DD[LD], wD, pD))
          })), rD = sD, cD
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(DD, zD, wD) {
        let pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        pD = pD && !1 === this.isTriggering;
        const sD = DD[zD];
        return pD && null !== sD && void 0 !== sD && wD(sD, void 0), this.addCallback(DD[LD], zD, wD)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const DD = arguments.length <= 0 ? void 0 : arguments[0],
            zD = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(DD[LD], sD.REPLACE, zD)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], sD.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], sD.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      ZJ() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], sD.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], sD.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      hT() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], sD.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], sD.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(DD, zD, wD) {
        let pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const KD = DD.constructor[Symbol.metadata];
        wD || (wD = Object.keys(KD).filter((DD => !isNaN(Number(DD)))).map((DD => KD[DD].name)));
        const rD = () => {
          for (const pD of wD) {
            const wD = DD[pD];
            void 0 !== wD && (zD[pD] = wD)
          }
        };
        return pD && rD(), this.addCallback(DD[LD], sD.REPLACE, rD)
      }
      bS(DD) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let zD = 0, wD = DD.length; zD < wD; zD++) {
          const wD = DD[zD],
            pD = wD.refId,
            KD = wD.ref,
            rD = this.callbacks[pD];
          if (rD) {
            if ((wD.op & sD.DELETE) === sD.DELETE && Tp.isSchema(wD.previousValue)) {
              const DD = wD.previousValue[LD],
                zD = this.callbacks[DD]?.[sD.DELETE];
              if (zD)
                for (let wD = zD.length - 1; wD >= 0; wD--) try {
                  zD[wD]()
                } catch (Ls) {
                  console.error(Ls)
                }
            }
            if (Tp.isSchema(KD)) {
              if (!this.uniqueRefIds.has(pD)) {
                const DD = rD[sD.REPLACE];
                if (DD)
                  for (let zD = DD.length - 1; zD >= 0; zD--) try {
                    DD[zD]()
                  } catch (Ls) {
                    console.error(Ls)
                  }
              }
              const DD = rD[wD.field];
              if (DD)
                for (let zD = DD.length - 1; zD >= 0; zD--) try {
                  DD[zD](wD.value, wD.previousValue)
                } catch (Ls) {
                  console.error(Ls)
                }
            } else {
              const DD = wD.dynamicIndex ?? wD.field;
              if ((wD.op & sD.DELETE) === sD.DELETE) {
                if (void 0 !== wD.previousValue) {
                  const zD = rD[sD.DELETE];
                  if (zD)
                    for (let pD = zD.length - 1; pD >= 0; pD--) try {
                      zD[pD](wD.previousValue, DD)
                    } catch (Ls) {
                      console.error(Ls)
                    }
                }
                if ((wD.op & sD.ADD) === sD.ADD) {
                  const zD = rD[sD.ADD];
                  if (zD)
                    for (let pD = zD.length - 1; pD >= 0; pD--) try {
                      zD[pD](wD.value, DD)
                    } catch (Ls) {
                      console.error(Ls)
                    }
                }
              } else if ((wD.op & sD.ADD) === sD.ADD && wD.previousValue !== wD.value) {
                const zD = rD[sD.ADD];
                if (zD)
                  for (let pD = zD.length - 1; pD >= 0; pD--) try {
                    zD[pD](wD.value, DD)
                  } catch (Ls) {
                    console.error(Ls)
                  }
              }
              if (wD.value !== wD.previousValue) {
                const zD = rD[sD.REPLACE];
                if (zD)
                  for (let pD = zD.length - 1; pD >= 0; pD--) try {
                    zD[pD](DD, wD.value)
                  } catch (Ls) {
                    console.error(Ls)
                  }
              }
            }
            this.uniqueRefIds.add(pD)
          }
        }
        this.isTriggering = !1
      }
    }
    const ss = {
      get(DD) {
        if (DD instanceof Fp) return new ps(DD);
        if ("cI" in DD.LO) return new ps(DD.LO.cI);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(DD) {
        if (DD instanceof Fp) return zs(DD);
        if ("cI" in DD.LO) return zs(DD.LO.cI);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (DD, zD) => ws(DD, zD)
    };
    class Ks {
      _free = [];
      _factory;
      _maxSize;
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = DD, this._maxSize = zD.maxSize ?? 1 / 0;
        const wD = zD.preallocate ?? 0;
        for (let pD = 0; pD < wD; pD++) this._free.push(DD())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(DD) {
        Tp.reset(DD), this._free.length < this._maxSize && this._free.push(DD)
      }
      get size() {
        return this._free.length
      }
    }

    function rs(DD) {
      return new Ks((() => new DD), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Ez("map", {
      constructor: Kp
    }), Ez("array", {
      constructor: pp
    }), Ez("set", {
      constructor: Lp
    }), Ez("collection", {
      constructor: rp
    })
  },
  9100: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      __addDisposableResource: () => lD,
      __assign: () => KD,
      __asyncDelegator: () => VD,
      __asyncGenerator: () => XD,
      __asyncValues: () => PD,
      __await: () => QD,
      __awaiter: () => ID,
      __classPrivateFieldGet: () => dD,
      __classPrivateFieldIn: () => iD,
      __classPrivateFieldSet: () => SD,
      __createBinding: () => GD,
      __decorate: () => LD,
      __disposeResources: () => ND,
      __esDecorate: () => gD,
      __exportStar: () => hD,
      __extends: () => sD,
      __generator: () => BD,
      __importDefault: () => jD,
      __importStar: () => bD,
      __makeTemplateObject: () => CD,
      __metadata: () => fD,
      __param: () => cD,
      __propKey: () => AD,
      __read: () => MD,
      __rest: () => rD,
      __rewriteRelativeImportExtension: () => ZD,
      __runInitializers: () => RD,
      __setFunctionName: () => UD,
      __spread: () => OD,
      __spreadArray: () => ED,
      __spreadArrays: () => JD,
      __values: () => nD,
      default: () => yD
    });
    var pD = function(DD, zD) {
      return pD = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(DD, zD) {
        DD.__proto__ = zD
      } || function(DD, zD) {
        for (var wD in zD) Object.prototype.hasOwnProperty.call(zD, wD) && (DD[wD] = zD[wD])
      }, pD(DD, zD)
    };

    function sD(DD, zD) {
      if ("function" !== typeof zD && null !== zD) throw new TypeError("Class extends value " + String(zD) + " is not a constructor or null");

      function wD() {
        this.constructor = DD
      }
      pD(DD, zD), DD.prototype = null === zD ? Object.create(zD) : (wD.prototype = zD.prototype, new wD)
    }
    var KD = function() {
      return KD = Object.assign || function(DD) {
        for (var zD, wD = 1, pD = arguments.length; wD < pD; wD++)
          for (var sD in zD = arguments[wD]) Object.prototype.hasOwnProperty.call(zD, sD) && (DD[sD] = zD[sD]);
        return DD
      }, KD.apply(this, arguments)
    };

    function rD(DD, zD) {
      var wD = {};
      for (var pD in DD) Object.prototype.hasOwnProperty.call(DD, pD) && zD.indexOf(pD) < 0 && (wD[pD] = DD[pD]);
      if (null != DD && "function" === typeof Object.getOwnPropertySymbols) {
        var sD = 0;
        for (pD = Object.getOwnPropertySymbols(DD); sD < pD.length; sD++) zD.indexOf(pD[sD]) < 0 && Object.prototype.propertyIsEnumerable.call(DD, pD[sD]) && (wD[pD[sD]] = DD[pD[sD]])
      }
      return wD
    }

    function LD(DD, zD, wD, pD) {
      var sD, KD = arguments.length,
        rD = KD < 3 ? zD : null === pD ? pD = Object.getOwnPropertyDescriptor(zD, wD) : pD;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) rD = Reflect.decorate(DD, zD, wD, pD);
      else
        for (var LD = DD.length - 1; LD >= 0; LD--)(sD = DD[LD]) && (rD = (KD < 3 ? sD(rD) : KD > 3 ? sD(zD, wD, rD) : sD(zD, wD)) || rD);
      return KD > 3 && rD && Object.defineProperty(zD, wD, rD), rD
    }

    function cD(DD, zD) {
      return function(wD, pD) {
        zD(wD, pD, DD)
      }
    }

    function gD(DD, zD, wD, pD, sD, KD) {
      function rD(DD) {
        if (void 0 !== DD && "function" !== typeof DD) throw new TypeError("Function expected");
        return DD
      }
      for (var LD, cD = pD.kind, gD = "getter" === cD ? "get" : "setter" === cD ? "set" : "value", RD = !zD && DD ? pD.static ? DD : DD.prototype : null, AD = zD || (RD ? Object.getOwnPropertyDescriptor(RD, pD.name) : {}), UD = !1, fD = wD.length - 1; fD >= 0; fD--) {
        var ID = {};
        for (var BD in pD) ID[BD] = "access" === BD ? {} : pD[BD];
        for (var BD in pD.access) ID.access[BD] = pD.access[BD];
        ID.addInitializer = function(DD) {
          if (UD) throw new TypeError("Cannot add initializers after decoration has completed");
          KD.push(rD(DD || null))
        };
        var GD = (0, wD[fD])("accessor" === cD ? {
          get: AD.get,
          set: AD.set
        } : AD[gD], ID);
        if ("accessor" === cD) {
          if (void 0 === GD) continue;
          if (null === GD || "object" !== typeof GD) throw new TypeError("Object expected");
          (LD = rD(GD.get)) && (AD.get = LD), (LD = rD(GD.set)) && (AD.set = LD), (LD = rD(GD.init)) && sD.unshift(LD)
        } else(LD = rD(GD)) && ("field" === cD ? sD.unshift(LD) : AD[gD] = LD)
      }
      RD && Object.defineProperty(RD, pD.name, AD), UD = !0
    }

    function RD(DD, zD, wD) {
      for (var pD = arguments.length > 2, sD = 0; sD < zD.length; sD++) wD = pD ? zD[sD].call(DD, wD) : zD[sD].call(DD);
      return pD ? wD : void 0
    }

    function AD(DD) {
      return "symbol" === typeof DD ? DD : "".concat(DD)
    }

    function UD(DD, zD, wD) {
      return "symbol" === typeof zD && (zD = zD.description ? "[".concat(zD.description, "]") : ""), Object.defineProperty(DD, "name", {
        configurable: !0,
        value: wD ? "".concat(wD, " ", zD) : zD
      })
    }

    function fD(DD, zD) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(DD, zD)
    }

    function ID(DD, zD, wD, pD) {
      return new(wD || (wD = Promise))((function(sD, KD) {
        function rD(DD) {
          try {
            cD(pD.next(DD))
          } catch (zD) {
            KD(zD)
          }
        }

        function LD(DD) {
          try {
            cD(pD.throw(DD))
          } catch (zD) {
            KD(zD)
          }
        }

        function cD(DD) {
          var zD;
          DD.done ? sD(DD.value) : (zD = DD.value, zD instanceof wD ? zD : new wD((function(DD) {
            DD(zD)
          }))).then(rD, LD)
        }
        cD((pD = pD.apply(DD, zD || [])).next())
      }))
    }

    function BD(DD, zD) {
      var wD, pD, sD, KD = {
          label: 0,
          sent: function() {
            if (1 & sD[0]) throw sD[1];
            return sD[1]
          },
          trys: [],
          ops: []
        },
        rD = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return rD.next = LD(0), rD.throw = LD(1), rD.return = LD(2), "function" === typeof Symbol && (rD[Symbol.iterator] = function() {
        return this
      }), rD;

      function LD(LD) {
        return function(cD) {
          return function(LD) {
            if (wD) throw new TypeError("Generator is already executing.");
            for (; rD && (rD = 0, LD[0] && (KD = 0)), KD;) try {
              if (wD = 1, pD && (sD = 2 & LD[0] ? pD.return : LD[0] ? pD.throw || ((sD = pD.return) && sD.call(pD), 0) : pD.next) && !(sD = sD.call(pD, LD[1])).done) return sD;
              switch (pD = 0, sD && (LD = [2 & LD[0], sD.value]), LD[0]) {
                case 0:
                case 1:
                  sD = LD;
                  break;
                case 4:
                  return KD.label++, {
                    value: LD[1],
                    done: !1
                  };
                case 5:
                  KD.label++, pD = LD[1], LD = [0];
                  continue;
                case 7:
                  LD = KD.ops.pop(), KD.trys.pop();
                  continue;
                default:
                  if (!(sD = (sD = KD.trys).length > 0 && sD[sD.length - 1]) && (6 === LD[0] || 2 === LD[0])) {
                    KD = 0;
                    continue
                  }
                  if (3 === LD[0] && (!sD || LD[1] > sD[0] && LD[1] < sD[3])) {
                    KD.label = LD[1];
                    break
                  }
                  if (6 === LD[0] && KD.label < sD[1]) {
                    KD.label = sD[1], sD = LD;
                    break
                  }
                  if (sD && KD.label < sD[2]) {
                    KD.label = sD[2], KD.ops.push(LD);
                    break
                  }
                  sD[2] && KD.ops.pop(), KD.trys.pop();
                  continue
              }
              LD = zD.call(DD, KD)
            } catch (cD) {
              LD = [6, cD], pD = 0
            } finally {
              wD = sD = 0
            }
            if (5 & LD[0]) throw LD[1];
            return {
              value: LD[0] ? LD[1] : void 0,
              done: !0
            }
          }([LD, cD])
        }
      }
    }
    var GD = Object.create ? function(DD, zD, wD, pD) {
      void 0 === pD && (pD = wD);
      var sD = Object.getOwnPropertyDescriptor(zD, wD);
      sD && !("get" in sD ? !zD.__esModule : sD.writable || sD.configurable) || (sD = {
        enumerable: !0,
        get: function() {
          return zD[wD]
        }
      }), Object.defineProperty(DD, pD, sD)
    } : function(DD, zD, wD, pD) {
      void 0 === pD && (pD = wD), DD[pD] = zD[wD]
    };

    function hD(DD, zD) {
      for (var wD in DD) "default" === wD || Object.prototype.hasOwnProperty.call(zD, wD) || GD(zD, DD, wD)
    }

    function nD(DD) {
      var zD = "function" === typeof Symbol && Symbol.iterator,
        wD = zD && DD[zD],
        pD = 0;
      if (wD) return wD.call(DD);
      if (DD && "number" === typeof DD.length) return {
        next: function() {
          return DD && pD >= DD.length && (DD = void 0), {
            value: DD && DD[pD++],
            done: !DD
          }
        }
      };
      throw new TypeError(zD ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function MD(DD, zD) {
      var wD = "function" === typeof Symbol && DD[Symbol.iterator];
      if (!wD) return DD;
      var pD, sD, KD = wD.call(DD),
        rD = [];
      try {
        for (;
          (void 0 === zD || zD-- > 0) && !(pD = KD.next()).done;) rD.push(pD.value)
      } catch (LD) {
        sD = {
          error: LD
        }
      } finally {
        try {
          pD && !pD.done && (wD = KD.return) && wD.call(KD)
        } finally {
          if (sD) throw sD.error
        }
      }
      return rD
    }

    function OD() {
      for (var DD = [], zD = 0; zD < arguments.length; zD++) DD = DD.concat(MD(arguments[zD]));
      return DD
    }

    function JD() {
      for (var DD = 0, zD = 0, wD = arguments.length; zD < wD; zD++) DD += arguments[zD].length;
      var pD = Array(DD),
        sD = 0;
      for (zD = 0; zD < wD; zD++)
        for (var KD = arguments[zD], rD = 0, LD = KD.length; rD < LD; rD++, sD++) pD[sD] = KD[rD];
      return pD
    }

    function ED(DD, zD, wD) {
      if (wD || 2 === arguments.length)
        for (var pD, sD = 0, KD = zD.length; sD < KD; sD++) !pD && sD in zD || (pD || (pD = Array.prototype.slice.call(zD, 0, sD)), pD[sD] = zD[sD]);
      return DD.concat(pD || Array.prototype.slice.call(zD))
    }

    function QD(DD) {
      return this instanceof QD ? (this.v = DD, this) : new QD(DD)
    }

    function XD(DD, zD, wD) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var pD, sD = wD.apply(DD, zD || []),
        KD = [];
      return pD = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), rD("next"), rD("throw"), rD("return", (function(DD) {
        return function(zD) {
          return Promise.resolve(zD).then(DD, gD)
        }
      })), pD[Symbol.asyncIterator] = function() {
        return this
      }, pD;

      function rD(DD, zD) {
        sD[DD] && (pD[DD] = function(zD) {
          return new Promise((function(wD, pD) {
            KD.push([DD, zD, wD, pD]) > 1 || LD(DD, zD)
          }))
        }, zD && (pD[DD] = zD(pD[DD])))
      }

      function LD(DD, zD) {
        try {
          (wD = sD[DD](zD)).value instanceof QD ? Promise.resolve(wD.value.v).then(cD, gD) : RD(KD[0][2], wD)
        } catch (pD) {
          RD(KD[0][3], pD)
        }
        var wD
      }

      function cD(DD) {
        LD("next", DD)
      }

      function gD(DD) {
        LD("throw", DD)
      }

      function RD(DD, zD) {
        DD(zD), KD.shift(), KD.length && LD(KD[0][0], KD[0][1])
      }
    }

    function VD(DD) {
      var zD, wD;
      return zD = {}, pD("next"), pD("throw", (function(DD) {
        throw DD
      })), pD("return"), zD[Symbol.iterator] = function() {
        return this
      }, zD;

      function pD(pD, sD) {
        zD[pD] = DD[pD] ? function(zD) {
          return (wD = !wD) ? {
            value: QD(DD[pD](zD)),
            done: !1
          } : sD ? sD(zD) : zD
        } : sD
      }
    }

    function PD(DD) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var zD, wD = DD[Symbol.asyncIterator];
      return wD ? wD.call(DD) : (DD = nD(DD), zD = {}, pD("next"), pD("throw"), pD("return"), zD[Symbol.asyncIterator] = function() {
        return this
      }, zD);

      function pD(wD) {
        zD[wD] = DD[wD] && function(zD) {
          return new Promise((function(pD, sD) {
            (function(DD, zD, wD, pD) {
              Promise.resolve(pD).then((function(zD) {
                DD({
                  value: zD,
                  done: wD
                })
              }), zD)
            })(pD, sD, (zD = DD[wD](zD)).done, zD.value)
          }))
        }
      }
    }

    function CD(DD, zD) {
      return Object.defineProperty ? Object.defineProperty(DD, "raw", {
        value: zD
      }) : DD.raw = zD, DD
    }
    var xD = Object.create ? function(DD, zD) {
        Object.defineProperty(DD, "default", {
          enumerable: !0,
          value: zD
        })
      } : function(DD, zD) {
        DD.default = zD
      },
      TD = function(DD) {
        return TD = Object.getOwnPropertyNames || function(DD) {
          var zD = [];
          for (var wD in DD) Object.prototype.hasOwnProperty.call(DD, wD) && (zD[zD.length] = wD);
          return zD
        }, TD(DD)
      };

    function bD(DD) {
      if (DD && DD.__esModule) return DD;
      var zD = {};
      if (null != DD)
        for (var wD = TD(DD), pD = 0; pD < wD.length; pD++) "default" !== wD[pD] && GD(zD, DD, wD[pD]);
      return xD(zD, DD), zD
    }

    function jD(DD) {
      return DD && DD.__esModule ? DD : {
        default: DD
      }
    }

    function dD(DD, zD, wD, pD) {
      if ("a" === wD && !pD) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof zD ? DD !== zD || !pD : !zD.has(DD)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === wD ? pD : "a" === wD ? pD.call(DD) : pD ? pD.value : zD.get(DD)
    }

    function SD(DD, zD, wD, pD, sD) {
      if ("m" === pD) throw new TypeError("Private method is not writable");
      if ("a" === pD && !sD) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof zD ? DD !== zD || !sD : !zD.has(DD)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === pD ? sD.call(DD, wD) : sD ? sD.value = wD : zD.set(DD, wD), wD
    }

    function iD(DD, zD) {
      if (null === zD || "object" !== typeof zD && "function" !== typeof zD) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof DD ? zD === DD : DD.has(zD)
    }

    function lD(DD, zD, wD) {
      if (null !== zD && void 0 !== zD) {
        if ("object" !== typeof zD && "function" !== typeof zD) throw new TypeError("Object expected.");
        var pD, sD;
        if (wD) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          pD = zD[Symbol.asyncDispose]
        }
        if (void 0 === pD) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          pD = zD[Symbol.dispose], wD && (sD = pD)
        }
        if ("function" !== typeof pD) throw new TypeError("Object not disposable.");
        sD && (pD = function() {
          try {
            sD.call(this)
          } catch (DD) {
            return Promise.reject(DD)
          }
        }), DD.stack.push({
          value: zD,
          dispose: pD,
          async: wD
        })
      } else wD && DD.stack.push({
        async: !0
      });
      return zD
    }
    var WD = "function" === typeof SuppressedError ? SuppressedError : function(DD, zD, wD) {
      var pD = new Error(wD);
      return pD.name = "SuppressedError", pD.error = DD, pD.suppressed = zD, pD
    };

    function ND(DD) {
      function zD(zD) {
        DD.error = DD.hasError ? new WD(zD, DD.error, "An error was suppressed during disposal.") : zD, DD.hasError = !0
      }
      var wD, pD = 0;
      return function sD() {
        for (; wD = DD.stack.pop();) try {
          if (!wD.async && 1 === pD) return pD = 0, DD.stack.push(wD), Promise.resolve().then(sD);
          if (wD.dispose) {
            var KD = wD.dispose.call(wD.value);
            if (wD.async) return pD |= 2, Promise.resolve(KD).then(sD, (function(DD) {
              return zD(DD), sD()
            }))
          } else pD |= 1
        } catch (rD) {
          zD(rD)
        }
        if (1 === pD) return DD.hasError ? Promise.reject(DD.error) : Promise.resolve();
        if (DD.hasError) throw DD.error
      }()
    }

    function ZD(DD, zD) {
      return "string" === typeof DD && /^\.\.?\//.test(DD) ? DD.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(DD, wD, pD, sD, KD) {
        return wD ? zD ? ".jsx" : ".js" : !pD || sD && KD ? pD + sD + "." + KD.toLowerCase() + "js" : DD
      })) : DD
    }
    const yD = {
      __extends: sD,
      __assign: KD,
      __rest: rD,
      __decorate: LD,
      __param: cD,
      __esDecorate: gD,
      __runInitializers: RD,
      __propKey: AD,
      __setFunctionName: UD,
      __metadata: fD,
      __awaiter: ID,
      __generator: BD,
      __createBinding: GD,
      __exportStar: hD,
      __values: nD,
      __read: MD,
      __spread: OD,
      __spreadArrays: JD,
      __spreadArray: ED,
      __await: QD,
      __asyncGenerator: XD,
      __asyncDelegator: VD,
      __asyncValues: PD,
      __makeTemplateObject: CD,
      __importStar: bD,
      __importDefault: jD,
      __classPrivateFieldGet: dD,
      __classPrivateFieldSet: SD,
      __classPrivateFieldIn: iD,
      __addDisposableResource: lD,
      __disposeResources: ND,
      __rewriteRelativeImportExtension: ZD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);