export const id = 201;
export const ids = [201];
export const modules = {
  9803: (VV, eV) => {
    eV.discordURLBuilder = function(VV) {
      var eV;
      const xV = (null === (eV = null === window || void 0 === window ? void 0 : window.location) || void 0 === eV ? void 0 : eV.hostname) || "localhost",
        JV = VV.hostname.split("."),
        YV = !VV.hostname.includes("trycloudflare.com") && !VV.hostname.includes("discordsays.com") && JV.length > 2 ? `/${JV[0]}` : "";
      return VV.pathname.startsWith("/.proxy") ? `${VV.protocol}//${xV}${YV}${VV.pathname}${VV.search}` : `${VV.protocol}//${xV}/.proxy/colyseus${YV}${VV.pathname}${VV.search}`
    }
  },
  9793: (VV, eV, xV) => {
    var JV, YV, UV, yV, pV = xV(9704),
      QV = xV(9797),
      nV = xV(9764);
    JV = new WeakMap, YV = new WeakMap, UV = new WeakMap, yV = new WeakMap, eV.Auth = class {
      constructor(VV) {
        this.http = VV, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, JV.set(this, !1), YV.set(this, void 0), UV.set(this, void 0), yV.set(this, nV.createNanoEvents()), QV.getItem(this.settings.key, (VV => this.token = VV))
      }
      set token(VV) {
        this.http.authToken = VV
      }
      get token() {
        return this.http.authToken
      }
      onChange(VV) {
        const eV = pV.__classPrivateFieldGet(this, yV, "f").on("change", VV);
        return pV.__classPrivateFieldGet(this, JV, "f") || pV.__classPrivateFieldSet(this, YV, new Promise(((VV, eV) => {
          this.getUserData().then((VV => {
            this.emitChange(Object.assign(Object.assign({}, VV), {
              token: this.token
            }))
          })).catch((VV => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            VV()
          }))
        })), "f"), pV.__classPrivateFieldSet(this, JV, !0, "f"), eV
      }
      getUserData() {
        return pV.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(VV, eV, xV) {
        return pV.__awaiter(this, void 0, void 0, (function*() {
          const JV = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: VV,
              password: eV,
              options: xV
            }
          })).data;
          return this.emitChange(JV), JV
        }))
      }
      signInWithEmailAndPassword(VV, eV) {
        return pV.__awaiter(this, void 0, void 0, (function*() {
          const xV = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: VV,
              password: eV
            }
          })).data;
          return this.emitChange(xV), xV
        }))
      }
      signInAnonymously(VV) {
        return pV.__awaiter(this, void 0, void 0, (function*() {
          const eV = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: VV
            }
          })).data;
          return this.emitChange(eV), eV
        }))
      }
      sendPasswordResetEmail(VV) {
        return pV.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: VV
            }
          })).data
        }))
      }
      signInWithProvider(VV) {
        return pV.__awaiter(this, arguments, void 0, (function*(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((xV, JV) => {
            const YV = eV.width || 480,
              yV = eV.height || 768,
              QV = this.token ? `?token=${this.token}` : "",
              nV = `Login with ${VV[0].toUpperCase()+VV.substring(1)}`,
              wV = this.http.client.getHttpEndpoint(`${eV.prefix||`${this.settings.path}/provider`}/${VV}${QV}`),
              ZV = screen.width / 2 - YV / 2,
              vV = screen.height / 2 - yV / 2;
            pV.__classPrivateFieldSet(this, UV, window.open(wV, nV, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + YV + ", height=" + yV + ", top=" + vV + ", left=" + ZV), "f");
            const rV = VV => {
                void 0 === VV.data.user && void 0 === VV.data.token || (clearInterval(kV), pV.__classPrivateFieldGet(this, UV, "f").close(), pV.__classPrivateFieldSet(this, UV, void 0, "f"), window.removeEventListener("message", rV), void 0 !== VV.data.error ? JV(VV.data.error) : (xV(VV.data), this.emitChange(VV.data)))
              },
              kV = setInterval((() => {
                pV.__classPrivateFieldGet(this, UV, "f") && !pV.__classPrivateFieldGet(this, UV, "f").closed || (pV.__classPrivateFieldSet(this, UV, void 0, "f"), JV("pJ"), window.removeEventListener("message", rV))
              }), 200);
            window.addEventListener("message", rV)
          }))
        }))
      }
      signOut() {
        return pV.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(VV) {
        void 0 !== VV.token && (this.token = VV.token, null === VV.token ? QV.removeItem(this.settings.key) : QV.setItem(this.settings.key, VV.token)), pV.__classPrivateFieldGet(this, yV, "f").emit("change", VV)
      }
    }
  },
  9695: (VV, eV, xV) => {
    var JV, YV = xV(9704),
      UV = xV(9710),
      yV = xV(9714),
      pV = xV(9782),
      QV = xV(9793),
      nV = xV(9803);
    class wV extends Error {
      constructor(VV, eV) {
        super(VV), this.code = eV, this.name = "MatchMakeError", Object.setPrototypeOf(this, wV.prototype)
      }
    }
    const ZV = "undefined" !== typeof window && "undefined" !== typeof(null === (JV = null === window || void 0 === window ? void 0 : window.location) || void 0 === JV ? void 0 : JV.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class vV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZV,
          eV = arguments.length > 1 ? arguments[1] : void 0;
        var xV, JV;
        if ("string" === typeof VV) {
          const eV = VV.startsWith("/") ? new URL(VV, ZV) : new URL(VV),
            xV = "https:" === eV.protocol || "wss:" === eV.protocol,
            JV = Number(eV.port || (xV ? 443 : 80));
          this.settings = {
            hostname: eV.hostname,
            pathname: eV.pathname,
            port: JV,
            secure: xV,
            searchParams: eV.searchParams.toString() || void 0
          }
        } else void 0 === VV.port && (VV.port = VV.secure ? 443 : 80), void 0 === VV.pathname && (VV.pathname = ""), this.settings = VV;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new pV.HTTP(this, (null === eV || void 0 === eV ? void 0 : eV.headers) || {}), this.auth = new QV.Auth(this.http), this.urlBuilder = null === eV || void 0 === eV ? void 0 : eV.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (JV = null === (xV = null === window || void 0 === window ? void 0 : window.location) || void 0 === xV ? void 0 : xV.hostname) || void 0 === JV ? void 0 : JV.includes("discordsays.com")) && (this.urlBuilder = nV.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(VV) {
        return YV.__awaiter(this, arguments, void 0, (function*(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            xV = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", VV, eV, xV)
        }))
      }
      create(VV) {
        return YV.__awaiter(this, arguments, void 0, (function*(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            xV = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", VV, eV, xV)
        }))
      }
      join(VV) {
        return YV.__awaiter(this, arguments, void 0, (function*(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            xV = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", VV, eV, xV)
        }))
      }
      joinById(VV) {
        return YV.__awaiter(this, arguments, void 0, (function*(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            xV = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", VV, eV, xV)
        }))
      }
      reconnect(VV, eV) {
        return YV.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof VV && "string" === typeof eV) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [xV, JV] = VV.split(":");
          if (!xV || !JV) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", xV, {
            reconnectionToken: JV
          }, eV)
        }))
      }
      consumeSeatReservation(VV, eV, xV) {
        return YV.__awaiter(this, void 0, void 0, (function*() {
          const JV = this.createRoom(VV.room.name, eV);
          JV.roomId = VV.room.roomId, JV.sessionId = VV.sessionId;
          const yV = {
            sessionId: JV.sessionId
          };
          VV.reconnectionToken && (yV.reconnectionToken = VV.reconnectionToken);
          const pV = xV || JV;
          return JV.connect(this.buildEndpoint(VV.room, yV, VV.protocol), VV.devMode && (() => YV.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${JV.roomId}'...`);
            let xV = 0;
            const UV = () => YV.__awaiter(this, void 0, void 0, (function*() {
              xV++;
              try {
                yield this.consumeSeatReservation(VV, eV, pV), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${JV.roomId}'`)
              } catch (YV) {
                xV < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${xV} out of 8)`), setTimeout(UV, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(UV, 2e3)
          }))), pV, VV, this.http.headers), new Promise(((VV, eV) => {
            const xV = (VV, xV) => eV(new UV.ServerError(VV, xV));
            pV.onError.once(xV), pV.onJoin.once((() => {
              pV.onError.remove(xV), setTimeout((() => {
                try {
                  const VV = [168, 12, 229, 90, 152, 197, 228, 169, 185, 87, 165, 22, 250, 192, 18, 74, 166, 78, 118, 66];
                  VV && pV.DW(128, new Uint8Array(VV))
                } catch {}
              }), 3e3), VV(pV)
            }))
          }))
        }))
      }
      createMatchMakeRequest(VV, eV) {
        return YV.__awaiter(this, arguments, void 0, (function*(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            JV = arguments.length > 3 ? arguments[3] : void 0,
            YV = arguments.length > 4 ? arguments[4] : void 0;
          const UV = (yield this.http.post(`matchmake/${VV}/${eV}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(xV)
          })).data;
          if (UV.error) throw new wV(UV.error, UV.code);
          return "reconnect" === VV && (UV.reconnectionToken = xV.reconnectionToken), yield this.consumeSeatReservation(UV, JV, YV)
        }))
      }
      createRoom(VV, eV) {
        return new yV.tv(VV, eV)
      }
      buildEndpoint(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          JV = this.settings.searchParams || "";
        this.http.authToken && (eV._authToken = this.http.authToken);
        for (const yV in eV) eV.hasOwnProperty(yV) && (JV += (JV ? "&" : "") + `${yV}=${eV[yV]}`);
        "h3" === xV && (xV = "http");
        let YV = this.settings.secure ? `${xV}s://` : `${xV}://`;
        VV.publicAddress ? YV += `${VV.publicAddress}` : YV += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const UV = `${YV}/${VV.processId}/${VV.roomId}?${JV}`;
        return this.urlBuilder ? this.urlBuilder(new URL(UV)) : UV
      }
      getHttpEndpoint() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const eV = VV.startsWith("/") ? VV : `/${VV}`;
        let xV = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${eV}`;
        return this.settings.searchParams && (xV += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(xV)) : xV
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    vV.VERSION = "0.16.22", eV.Client = vV, eV.MatchMakeError = wV
  },
  9723: (VV, eV, xV) => {
    var JV = xV(9727),
      YV = xV(9741);
    eV.Connection = class {
      constructor(VV) {
        if (this.events = {}, "h3" === VV) this.transport = new JV.H3TransportTransport(this.events);
        else this.transport = new YV.WebSocketTransport(this.events)
      }
      connect(VV, eV) {
        this.transport.connect.call(this.transport, VV, eV)
      }
      send(VV) {
        this.transport.send(VV)
      }
      sendUnreliable(VV) {
        this.transport.sendUnreliable(VV)
      }
      close(VV, eV) {
        this.transport.close(VV, eV)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9782: (VV, eV, xV) => {
    var JV = xV(9710);

    function YV(VV) {
      var eV = Object.create(null);
      return VV && Object.keys(VV).forEach((function(xV) {
        if ("default" !== xV) {
          var JV = Object.getOwnPropertyDescriptor(VV, xV);
          Object.defineProperty(eV, xV, JV.get ? JV : {
            enumerable: !0,
            get: function() {
              return VV[xV]
            }
          })
        }
      })), eV.default = VV, Object.freeze(eV)
    }
    var UV = YV(xV(9788));
    eV.HTTP = class {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = VV, this.headers = eV
      }
      get(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", VV, eV)
      }
      post(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", VV, eV)
      }
      del(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", VV, eV)
      }
      put(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", VV, eV)
      }
      request(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return UV[VV](this.client.getHttpEndpoint(eV), this.getOptions(xV)).catch((VV => {
          var eV;
          if (VV.aborted) throw new JV.AbortError("Request aborted");
          const xV = VV.statusCode,
            YV = (null === (eV = VV.data) || void 0 === eV ? void 0 : eV.error) || VV.statusMessage || VV.message;
          if (!xV && !YV) throw VV;
          throw new JV.ServerError(xV, YV)
        }))
      }
      getOptions(VV) {
        return VV.headers = Object.assign({}, this.headers, VV.headers), this.authToken && (VV.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (VV.withCredentials = !0), VV
      }
    }
  },
  9754: (VV, eV) => {
    var xV, JV;
    eV.Protocol = void 0, (xV = eV.Protocol || (eV.Protocol = {}))[xV.HANDSHAKE = 9] = "HANDSHAKE", xV[xV.JOIN_ROOM = 10] = "JOIN_ROOM", xV[xV.ERROR = 11] = "ERROR", xV[xV.LEAVE_ROOM = 12] = "LEAVE_ROOM", xV[xV.ROOM_DATA = 13] = "ROOM_DATA", xV[xV.ROOM_STATE = 14] = "ROOM_STATE", xV[xV.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", xV[xV.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", xV[xV.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", eV.ErrorCode = void 0, (JV = eV.ErrorCode || (eV.ErrorCode = {}))[JV.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", JV[JV.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", JV[JV.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", JV[JV.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", JV[JV.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", JV[JV.AUTH_FAILED = 4215] = "AUTH_FAILED", JV[JV.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9714: (VV, eV, xV) => {
    var JV = xV(9723),
      YV = xV(9754),
      UV = xV(9758),
      yV = xV(9764),
      pV = xV(9766),
      QV = xV(9734),
      nV = xV(9771),
      wV = xV(9710),
      ZV = xV(9779);
    class vV {
      constructor(VV, eV) {
        this.onStateChange = pV.createSignal(), this.onError = pV.createSignal(), this.XF = pV.createSignal(), this.onJoin = pV.createSignal(), this.hasJoined = !1, this.onMessageHandlers = yV.createNanoEvents(), this.roomId = null, this.name = VV, this.packr = new ZV.Packr, this.packr.encode(void 0), eV && (this.Fq = new(UV.getSerializer("schema")), this.rootSchema = eV, this.Fq.state = new eV), this.onError(((VV, eV) => {
          var xV;
          return null === (xV = console.warn) || void 0 === xV ? void 0 : xV.call(console, `colyseus.js - onError => (${VV}) ${eV}`)
        })), this.XF((() => this.bq()))
      }
      connect(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          YV = arguments.length > 3 ? arguments[3] : void 0,
          UV = arguments.length > 4 ? arguments[4] : void 0;
        const yV = new JV.Connection(YV.protocol);
        if (xV.connection = yV, yV.events.onmessage = vV.prototype.onMessageCallback.bind(xV), yV.events.onclose = function(VV) {
            var JV;
            if (!xV.hasJoined) return null === (JV = console.warn) || void 0 === JV || JV.call(console, `Room connection was closed unexpectedly (${VV.code}): ${VV.reason}`), void xV.onError.invoke(VV.code, VV.reason);
            VV.code === wV.CloseCode.DEVMODE_RESTART && eV ? eV() : (xV.XF.invoke(VV.code, VV.reason), xV.destroy())
          }, yV.events.onerror = function(VV) {
            var eV;
            null === (eV = console.warn) || void 0 === eV || eV.call(console, `Room, onError (${VV.code}): ${VV.reason}`), xV.onError.invoke(VV.code, VV.reason)
          }, "h3" === YV.protocol) {
          const eV = new URL(VV);
          yV.connect(eV.origin, YV)
        } else yV.connect(VV, UV)
      }
      leave() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((eV => {
          this.XF((VV => eV(VV))), this.connection ? VV ? (this.packr.buffer[0] = YV.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.XF.invoke(wV.CloseCode.CONSENTED)
        }))
      }
      jF(VV, eV) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(VV), eV)
      }
      send(VV, eV) {
        const xV = {
          offset: 1
        };
        this.packr.buffer[0] = YV.Protocol.ROOM_DATA, "string" === typeof VV ? QV.encode.string(this.packr.buffer, VV, xV) : QV.encode.number(this.packr.buffer, VV, xV), this.packr.position = 0;
        const JV = void 0 !== eV ? this.packr.pack(eV, 2048 + xV.offset) : this.packr.buffer.subarray(0, xV.offset);
        this.connection.send(JV)
      }
      sendUnreliable(VV, eV) {
        const xV = {
          offset: 1
        };
        this.packr.buffer[0] = YV.Protocol.ROOM_DATA, "string" === typeof VV ? QV.encode.string(this.packr.buffer, VV, xV) : QV.encode.number(this.packr.buffer, VV, xV), this.packr.position = 0;
        const JV = void 0 !== eV ? this.packr.pack(eV, 2048 + xV.offset) : this.packr.buffer.subarray(0, xV.offset);
        this.connection.sendUnreliable(JV)
      }
      DW(VV, eV) {
        const xV = {
          offset: 1
        };
        if (this.packr.buffer[0] = YV.Protocol.ROOM_DATA_BYTES, "string" === typeof VV ? QV.encode.string(this.packr.buffer, VV, xV) : QV.encode.number(this.packr.buffer, VV, xV), eV.byteLength + xV.offset > this.packr.buffer.byteLength) {
          const VV = new Uint8Array(xV.offset + eV.byteLength);
          VV.set(this.packr.buffer), this.packr.useBuffer(VV)
        }
        this.packr.buffer.set(eV, xV.offset), this.connection.send(this.packr.buffer.subarray(0, xV.offset + eV.byteLength))
      }
      get state() {
        return this.Fq.getState()
      }
      bq() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.XF.clear(), this.onMessageHandlers.events = {}, this.Fq instanceof nV.pD && (this.Fq.BZ.root.callbacks = {})
      }
      onMessageCallback(VV) {
        const eV = new Uint8Array(VV.data),
          xV = {
            offset: 1
          },
          JV = eV[0];
        if (JV === YV.Protocol.JOIN_ROOM) {
          const VV = QV.decode.utf8Read(eV, xV, eV[xV.offset++]);
          if (this.serializerId = QV.decode.utf8Read(eV, xV, eV[xV.offset++]), !this.Fq) {
            const VV = UV.getSerializer(this.serializerId);
            this.Fq = new VV
          }
          eV.byteLength > xV.offset && this.Fq.handshake && this.Fq.handshake(eV, xV), this.reconnectionToken = `${this.roomId}:${VV}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = YV.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (JV === YV.Protocol.ERROR) {
          const VV = QV.decode.number(eV, xV),
            JV = QV.decode.string(eV, xV);
          this.onError.invoke(VV, JV)
        } else if (JV === YV.Protocol.LEAVE_ROOM) this.leave();
        else if (JV === YV.Protocol.ROOM_STATE) this.Fq.setState(eV, xV), this.onStateChange.invoke(this.Fq.getState());
        else if (JV === YV.Protocol.ROOM_STATE_PATCH) this.Fq.patch(eV, xV), this.onStateChange.invoke(this.Fq.getState());
        else if (JV === YV.Protocol.ROOM_DATA) {
          const VV = QV.decode.stringCheck(eV, xV) ? QV.decode.string(eV, xV) : QV.decode.number(eV, xV),
            JV = eV.byteLength > xV.offset ? ZV.unpack(eV, {
              start: xV.offset
            }) : void 0;
          this.dispatchMessage(VV, JV)
        } else if (JV === YV.Protocol.ROOM_DATA_BYTES) {
          const VV = QV.decode.stringCheck(eV, xV) ? QV.decode.string(eV, xV) : QV.decode.number(eV, xV);
          this.dispatchMessage(VV, eV.subarray(xV.offset))
        }
      }
      dispatchMessage(VV, eV) {
        var xV;
        const JV = this.getMessageHandlerKey(VV);
        this.onMessageHandlers.events[JV] ? this.onMessageHandlers.emit(JV, eV) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", VV, eV) : null === (xV = console.warn) || void 0 === xV || xV.call(console, `colyseus.js: onMessage() not registered for type '${VV}'.`)
      }
      destroy() {
        this.Fq && this.Fq.teardown()
      }
      getMessageHandlerKey(VV) {
        switch (typeof VV) {
          case "string":
            return VV;
          case "number":
            return `i${VV}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    eV.tv = vV
  },
  9797: (VV, eV, xV) => {
    var JV = xV(9704);
    let YV;

    function UV() {
      if (!YV) try {
        YV = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (VV) {}
      return YV || "undefined" === typeof globalThis.indexedDB || (YV = new yV), YV || (YV = {
        cache: {},
        setItem: function(VV, eV) {
          this.cache[VV] = eV
        },
        getItem: function(VV) {
          this.cache[VV]
        },
        removeItem: function(VV) {
          delete this.cache[VV]
        }
      }), YV
    }
    class yV {
      constructor() {
        this.dbPromise = new Promise((VV => {
          const eV = indexedDB.open("_colyseus_storage", 1);
          eV.onupgradeneeded = () => eV.result.createObjectStore("store"), eV.onsuccess = () => VV(eV.result)
        }))
      }
      tx(VV, eV) {
        return JV.__awaiter(this, void 0, void 0, (function*() {
          const xV = (yield this.dbPromise).transaction("store", VV).objectStore("store");
          return eV(xV)
        }))
      }
      setItem(VV, eV) {
        return this.tx("readwrite", (xV => xV.put(eV, VV))).then()
      }
      getItem(VV) {
        return JV.__awaiter(this, void 0, void 0, (function*() {
          const eV = yield this.tx("readonly", (eV => eV.get(VV)));
          return new Promise((VV => {
            eV.onsuccess = () => VV(eV.result)
          }))
        }))
      }
      removeItem(VV) {
        return this.tx("readwrite", (eV => eV.delete(VV))).then()
      }
    }
    eV.getItem = function(VV, eV) {
      const xV = UV().getItem(VV);
      "undefined" !== typeof Promise && xV instanceof Promise ? xV.then((VV => eV(VV))) : eV(xV)
    }, eV.removeItem = function(VV) {
      UV().removeItem(VV)
    }, eV.setItem = function(VV, eV) {
      UV().setItem(VV, eV)
    }
  },
  9764: (VV, eV) => {
    eV.createNanoEvents = () => ({
      emit(VV) {
        let eV = this.events[VV] || [];
        for (var xV = arguments.length, JV = new Array(xV > 1 ? xV - 1 : 0), YV = 1; YV < xV; YV++) JV[YV - 1] = arguments[YV];
        for (let UV = 0, yV = eV.length; UV < yV; UV++) eV[UV](...JV)
      },
      events: {},
      on(VV, eV) {
        var xV;
        return (null === (xV = this.events[VV]) || void 0 === xV ? void 0 : xV.push(eV)) || (this.events[VV] = [eV]), () => {
          var xV;
          this.events[VV] = null === (xV = this.events[VV]) || void 0 === xV ? void 0 : xV.filter((VV => eV !== VV))
        }
      }
    })
  },
  9766: (VV, eV) => {
    class xV {
      constructor() {
        this.handlers = []
      }
      register(VV) {
        return this.handlers.push(VV), this
      }
      invoke() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        this.handlers.forEach((VV => VV.apply(this, eV)))
      }
      invokeAsync() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        return Promise.all(this.handlers.map((VV => VV.apply(this, eV))))
      }
      remove(VV) {
        const eV = this.handlers.indexOf(VV);
        this.handlers[eV] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    eV.EventEmitter = xV, eV.createSignal = function() {
      const VV = new xV;

      function eV(eV) {
        return VV.register(eV, null === this)
      }
      return eV.once = eV => {
        const xV = function() {
          for (var JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
          eV.apply(this, YV), VV.remove(xV)
        };
        VV.register(xV)
      }, eV.remove = eV => VV.remove(eV), eV.invoke = function() {
        return VV.invoke(...arguments)
      }, eV.invokeAsync = function() {
        return VV.invokeAsync(...arguments)
      }, eV.clear = () => VV.clear(), eV
    }
  },
  9710: (VV, eV) => {
    var xV;
    eV.CloseCode = void 0, (xV = eV.CloseCode || (eV.CloseCode = {}))[xV.CONSENTED = 4e3] = "CONSENTED", xV[xV.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class JV extends Error {
      constructor(VV, eV) {
        super(eV), this.name = "ServerError", this.code = VV
      }
    }
    class YV extends Error {
      constructor(VV) {
        super(VV), this.name = "AbortError"
      }
    }
    eV.AbortError = YV, eV.ServerError = JV
  },
  9683: (VV, eV, xV) => {
    xV(9692);
    var JV = xV(9695),
      YV = xV(9754),
      UV = xV(9714),
      yV = xV(9793),
      pV = xV(9710),
      QV = xV(9771),
      nV = xV(9805),
      wV = xV(9758);
    wV.registerSerializer("schema", QV.pD), wV.registerSerializer("none", nV.NoneSerializer), eV.Client = JV.Client, eV.MatchMakeError = JV.MatchMakeError, Object.defineProperty(eV, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return YV.ErrorCode
      }
    }), Object.defineProperty(eV, "Protocol", {
      enumerable: !0,
      get: function() {
        return YV.Protocol
      }
    }), eV.tv = UV.tv, eV.Auth = yV.Auth, eV.ServerError = pV.ServerError, eV.pD = QV.pD, eV.getStateCallbacks = QV.getStateCallbacks, eV.registerSerializer = wV.registerSerializer
  },
  9692: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = VV => null !== VV && "object" === typeof VV && VV.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9805: (VV, eV) => {
    eV.NoneSerializer = class {
      setState(VV) {}
      getState() {
        return null
      }
      patch(VV) {}
      teardown() {}
      handshake(VV) {}
    }
  },
  9771: (VV, eV, xV) => {
    var JV = xV(9734);
    eV.pD = class {
      setState(VV, eV) {
        this.BZ.decode(VV, eV)
      }
      getState() {
        return this.state
      }
      patch(VV, eV) {
        return this.BZ.decode(VV, eV)
      }
      teardown() {
        this.BZ.root.clearRefs()
      }
      handshake(VV, eV) {
        this.state ? (JV.Reflection.decode(VV, eV), this.BZ = new JV.Decoder(this.state)) : (this.BZ = JV.Reflection.decode(VV, eV), this.state = this.BZ.state)
      }
    }, eV.getStateCallbacks = function(VV) {
      try {
        return JV.getDecoderStateCallbacks(VV.Fq.BZ)
      } catch (eV) {
        return
      }
    }
  },
  9758: (VV, eV) => {
    const xV = {};
    eV.getSerializer = function(VV) {
      const eV = xV[VV];
      if (!eV) throw new Error("missing serializer: " + VV);
      return eV
    }, eV.registerSerializer = function(VV, eV) {
      xV[VV] = eV
    }
  },
  9727: (VV, eV, xV) => {
    var JV = xV(9704),
      YV = xV(9734);
    eV.H3TransportTransport = class {
      constructor(VV) {
        this.events = VV, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const xV = eV.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(eV.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(VV, xV), this.wt.ready.then((VV => {
          console.log("WebTransport ready!", VV), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((VV => {
            this.reader = VV.value.readable.getReader(), this.writer = VV.value.writable.getWriter(), this.sendSeatReservation(eV.room.roomId, eV.sessionId, eV.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((VV => {
            console.error("failed to read incoming stream", VV), console.error("TODO: close the connection")
          }))
        })).catch((VV => {
          console.log("WebTransport not ready!", VV), this._close()
        })), this.wt.closed.then((VV => {
          console.log("WebTransport closed w/ success", VV), this.events.onclose({
            code: VV.closeCode,
            reason: VV.reason
          })
        })).catch((VV => {
          console.log("WebTransport closed w/ error", VV), this.events.onerror(VV), this.events.onclose({
            code: VV.closeCode,
            reason: VV.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(VV) {
        const eV = YV.encode.number(this.lengthPrefixBuffer, VV.length, {
            offset: 0
          }),
          xV = new Uint8Array(eV + VV.length);
        xV.set(this.lengthPrefixBuffer.subarray(0, eV), 0), xV.set(VV, eV), this.writer.write(xV)
      }
      sendUnreliable(VV) {
        const eV = YV.encode.number(this.lengthPrefixBuffer, VV.length, {
            offset: 0
          }),
          xV = new Uint8Array(eV + VV.length);
        xV.set(this.lengthPrefixBuffer.subarray(0, eV), 0), xV.set(VV, eV), this.unreliableWriter.write(xV)
      }
      close(VV, eV) {
        try {
          this.wt.close({
            closeCode: VV,
            reason: eV
          })
        } catch (xV) {
          console.error(xV)
        }
      }
      readIncomingData() {
        return JV.__awaiter(this, void 0, void 0, (function*() {
          let VV;
          for (; this.isOpen;) {
            try {
              VV = yield this.reader.read();
              const eV = VV.value,
                xV = {
                  offset: 0
                };
              do {
                const VV = YV.decode.number(eV, xV);
                this.events.onmessage({
                  data: eV.subarray(xV.offset, xV.offset + VV)
                }), xV.offset += VV
              } while (xV.offset < eV.length)
            } catch (eV) {
              -1 === eV.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", eV);
              break
            }
            if (VV.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return JV.__awaiter(this, void 0, void 0, (function*() {
          let VV;
          for (; this.isOpen;) {
            try {
              VV = yield this.unreliableReader.read();
              const eV = VV.value,
                xV = {
                  offset: 0
                };
              do {
                const VV = YV.decode.number(eV, xV);
                this.events.onmessage({
                  data: eV.subarray(xV.offset, xV.offset + VV)
                }), xV.offset += VV
              } while (xV.offset < eV.length)
            } catch (eV) {
              -1 === eV.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", eV);
              break
            }
            if (VV.done) break
          }
        }))
      }
      sendSeatReservation(VV, eV, xV) {
        const JV = {
            offset: 0
          },
          UV = [];
        YV.encode.string(UV, VV, JV), YV.encode.string(UV, eV, JV), xV && YV.encode.string(UV, xV, JV), this.writer.write(new Uint8Array(UV).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9741: (VV, eV, xV) => {
    var JV = xV(9745);
    const YV = globalThis.WebSocket || JV;
    eV.WebSocketTransport = class {
      constructor(VV) {
        this.events = VV
      }
      send(VV) {
        this.ws.send(VV)
      }
      sendUnreliable(VV) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(VV, eV) {
        try {
          this.ws = new YV(VV, {
            headers: eV,
            protocols: this.protocols
          })
        } catch (xV) {
          this.ws = new YV(VV, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(VV, eV) {
        this.ws.close(VV, eV)
      }
      get isOpen() {
        return this.ws.readyState === YV.OPEN
      }
    }
  },
  9745: VV => {
    VV.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9788: (VV, eV, xV) => {
    function JV(VV, eV) {
      eV.headers = VV.headers || {}, eV.statusMessage = VV.statusText, eV.statusCode = VV.status, eV.data = VV.response
    }

    function YV(VV, eV, xV) {
      return new Promise((function(YV, UV) {
        xV = xV || {};
        var yV, pV, QV, nV = new XMLHttpRequest,
          wV = xV.body,
          ZV = xV.headers || {};
        for (yV in xV.timeout && (nV.timeout = xV.timeout), nV.ontimeout = nV.onerror = function(VV) {
            VV.timeout = "timeout" == VV.type, UV(VV)
          }, nV.onabort = function(VV) {
            VV.aborted = !0, UV(VV)
          }, nV.open(VV, eV.href || eV), nV.onload = function() {
            for (QV = nV.getAllResponseHeaders().trim().split(/[\r\n]+/), JV(nV, nV); pV = QV.shift();) pV = pV.split(": "), nV.headers[pV.shift().toLowerCase()] = pV.join(": ");
            if ((pV = nV.headers["content-type"]) && ~pV.indexOf("application/json")) try {
              nV.data = JSON.parse(nV.data, xV.reviver)
            } catch (VV) {
              return JV(nV, VV), UV(VV)
            }(nV.status >= 400 ? UV : YV)(nV)
          }, typeof FormData < "u" && wV instanceof FormData || wV && "object" == typeof wV && (ZV["content-type"] = "application/json", wV = JSON.stringify(wV)), nV.withCredentials = !!xV.withCredentials, ZV) nV.setRequestHeader(yV, ZV[yV]);
        nV.send(wV), xV.signal && xV.signal.addEventListener("abort", (function() {
          nV.abort()
        }))
      }))
    }
    xV.r(eV), xV.d(eV, {
      del: () => QV,
      get: () => UV,
      patch: () => pV,
      post: () => yV,
      put: () => nV,
      send: () => YV
    });
    var UV = YV.bind(YV, "GET"),
      yV = YV.bind(YV, "POST"),
      pV = YV.bind(YV, "PATCH"),
      QV = YV.bind(YV, "DELETE"),
      nV = YV.bind(YV, "PUT")
  },
  9779: (VV, eV, xV) => {
    var JV, YV, UV;
    xV.r(eV), xV.d(eV, {
      ALWAYS: () => He,
      C1: () => FV,
      DECIMAL_FIT: () => se,
      DECIMAL_ROUND: () => ue,
      Decoder: () => Qe,
      Encoder: () => me,
      FLOAT32_OPTIONS: () => re,
      NEVER: () => Ke,
      Packr: () => De,
      RESERVE_START_SPACE: () => de,
      RESET_BUFFER_MODE: () => Ie,
      REUSE_BUFFER_MODE: () => Se,
      Unpackr: () => MV,
      addExtension: () => ce,
      clearSource: () => ye,
      decode: () => ve,
      decodeIter: () => Oe,
      encode: () => fe,
      encodeIter: () => Vx,
      isNativeAccelerationEnabled: () => hV,
      mapsAsObjects: () => xx,
      pack: () => Le,
      roundFloat32: () => qe,
      unpack: () => we,
      unpackMultiple: () => Ze,
      useRecords: () => ex
    });
    try {
      JV = new TextDecoder
    } catch (Jx) {}
    var yV = 0;
    const pV = [];
    var QV, nV, wV, ZV, vV, rV = pV,
      kV = 0,
      bV = {},
      EV = 0,
      BV = 0,
      jV = [],
      qV = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class tV {}
    const FV = new tV;
    FV.name = "MessagePack 0xC1";
    var TV, PV, AV, NV = !1,
      XV = 2;
    try {
      new Function("")
    } catch (Jx) {
      XV = 1 / 0
    }
    class MV {
      constructor(VV) {
        VV && (!1 === VV.useRecords && void 0 === VV.mapsAsObjects && (VV.mapsAsObjects = !0), VV.sequential && !1 !== VV.trusted && (VV.trusted = !0, VV.structures || 0 == VV.useRecords || (VV.structures = [], VV.maxSharedStructures || (VV.maxSharedStructures = 0))), VV.structures ? VV.structures.sharedLength = VV.structures.length : VV.getStructures && ((VV.structures = []).uninitialized = !0, VV.structures.sharedLength = 0), VV.int64AsNumber && (VV.int64AsType = "number")), Object.assign(this, VV)
      }
      unpack(VV, eV) {
        if (YV) return Ue((() => (ye(), this ? this.unpack(VV, eV) : MV.prototype.unpack.call(qV, VV, eV))));
        VV.buffer || VV.constructor !== ArrayBuffer || (VV = "undefined" !== typeof Buffer ? Buffer.from(VV) : new Uint8Array(VV)), "object" === typeof eV ? (UV = eV.end || VV.length, yV = eV.start || 0) : (yV = 0, UV = eV > -1 ? eV : VV.length), kV = 0, BV = 0, nV = null, rV = pV, wV = null, YV = VV;
        try {
          vV = VV.dataView || (VV.dataView = new DataView(VV.buffer, VV.byteOffset, VV.byteLength))
        } catch (Jx) {
          if (YV = null, VV instanceof Uint8Array) throw Jx;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (VV && "object" == typeof VV ? VV.constructor.name : typeof VV))
        }
        if (this instanceof MV) {
          if (bV = this, this.structures) return QV = this.structures, zV(eV);
          (!QV || QV.length > 0) && (QV = [])
        } else bV = qV, (!QV || QV.length > 0) && (QV = []);
        return zV(eV)
      }
      unpackMultiple(VV, eV) {
        let xV, JV = 0;
        try {
          NV = !0;
          let YV = VV.length,
            UV = this ? this.unpack(VV, YV) : ne.unpack(VV, YV);
          if (!eV) {
            for (xV = [UV]; yV < YV;) JV = yV, xV.push(zV());
            return xV
          }
          if (!1 === eV(UV, JV, yV)) return;
          for (; yV < YV;)
            if (JV = yV, !1 === eV(zV(), JV, yV)) return
        } catch (Jx) {
          throw Jx.lastPosition = JV, Jx.values = xV, Jx
        } finally {
          NV = !1, ye()
        }
      }
      _mergeStructures(VV, eV) {
        PV && (VV = PV.call(this, VV)), VV = VV || [], Object.isFrozen(VV) && (VV = VV.map((VV => VV.slice(0))));
        for (let xV = 0, JV = VV.length; xV < JV; xV++) {
          let eV = VV[xV];
          eV && (eV.isShared = !0, xV >= 32 && (eV.highByte = xV - 32 >> 5))
        }
        VV.sharedLength = VV.length;
        for (let xV in eV || [])
          if (xV >= 0) {
            let JV = VV[xV],
              YV = eV[xV];
            YV && (JV && ((VV.restoreStructures || (VV.restoreStructures = []))[xV] = JV), VV[xV] = YV)
          } return this.structures = VV
      }
      decode(VV, eV) {
        return this.unpack(VV, eV)
      }
    }

    function zV(VV) {
      try {
        if (!bV.trusted && !NV) {
          let VV = QV.sharedLength || 0;
          VV < QV.length && (QV.length = VV)
        }
        let eV;
        if (bV.randomAccessStructure && YV[yV] < 64 && YV[yV] >= 32 && TV ? (eV = TV(YV, yV, UV, bV), YV = null, VV && VV.lazy || !eV || (eV = eV.toJSON()), yV = UV) : eV = WV(), wV && (yV = wV.postBundlePosition, wV = null), NV && (QV.restoreStructures = null), yV == UV) QV && QV.restoreStructures && GV(), QV = null, YV = null, ZV && (ZV = null);
        else {
          if (yV > UV) throw new Error("Unexpected end of MessagePack data");
          if (!NV) {
            let VV;
            try {
              VV = JSON.stringify(eV, ((VV, eV) => "bigint" === typeof eV ? `${eV}n` : eV)).slice(0, 100)
            } catch (Jx) {
              VV = "(JSON view not available " + Jx + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + VV)
          }
        }
        return eV
      } catch (Jx) {
        throw QV && QV.restoreStructures && GV(), ye(), (Jx instanceof RangeError || Jx.message.startsWith("Unexpected end of buffer") || yV > UV) && (Jx.incomplete = !0), Jx
      }
    }

    function GV() {
      for (let VV in QV.restoreStructures) QV[VV] = QV.restoreStructures[VV];
      QV.restoreStructures = null
    }

    function WV() {
      let VV = YV[yV++];
      if (VV < 160) {
        if (VV < 128) {
          if (VV < 64) return VV;
          {
            let eV = QV[63 & VV] || bV.getStructures && iV()[63 & VV];
            return eV ? (eV.read || (eV.read = gV(eV, 63 & VV)), eV.read()) : VV
          }
        }
        if (VV < 144) {
          if (VV -= 128, bV.mapsAsObjects) {
            let eV = {};
            for (let xV = 0; xV < VV; xV++) {
              let VV = dV();
              "__proto__" === VV && (VV = "__proto_"), eV[VV] = WV()
            }
            return eV
          } {
            let eV = new Map;
            for (let xV = 0; xV < VV; xV++) eV.set(WV(), WV());
            return eV
          }
        } {
          VV -= 144;
          let eV = new Array(VV);
          for (let xV = 0; xV < VV; xV++) eV[xV] = WV();
          return bV.freezeData ? Object.freeze(eV) : eV
        }
      }
      if (VV < 192) {
        let eV = VV - 160;
        if (BV >= yV) return nV.slice(yV - EV, (yV += eV) - EV);
        if (0 == BV && UV < 140) {
          let VV = eV < 16 ? HV(eV) : KV(eV);
          if (null != VV) return VV
        }
        return CV(eV)
      } {
        let eV;
        switch (VV) {
          case 192:
            return null;
          case 193:
            return wV ? (eV = WV(), eV > 0 ? wV[1].slice(wV.position1, wV.position1 += eV) : wV[0].slice(wV.position0, wV.position0 -= eV)) : FV;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (eV = YV[yV++], void 0 === eV) throw new Error("Unexpected end of buffer");
            return sV(eV);
          case 197:
            return eV = vV.getUint16(yV), yV += 2, sV(eV);
          case 198:
            return eV = vV.getUint32(yV), yV += 4, sV(eV);
          case 199:
            return SV(YV[yV++]);
          case 200:
            return eV = vV.getUint16(yV), yV += 2, SV(eV);
          case 201:
            return eV = vV.getUint32(yV), yV += 4, SV(eV);
          case 202:
            if (eV = vV.getFloat32(yV), bV.useFloat32 > 2) {
              let VV = pe[(127 & YV[yV]) << 1 | YV[yV + 1] >> 7];
              return yV += 4, (VV * eV + (eV > 0 ? .5 : -.5) | 0) / VV
            }
            return yV += 4, eV;
          case 203:
            return eV = vV.getFloat64(yV), yV += 8, eV;
          case 204:
            return YV[yV++];
          case 205:
            return eV = vV.getUint16(yV), yV += 2, eV;
          case 206:
            return eV = vV.getUint32(yV), yV += 4, eV;
          case 207:
            return "number" === bV.int64AsType ? (eV = 4294967296 * vV.getUint32(yV), eV += vV.getUint32(yV + 4)) : "string" === bV.int64AsType ? eV = vV.getBigUint64(yV).toString() : "auto" === bV.int64AsType ? (eV = vV.getBigUint64(yV), eV <= BigInt(2) << BigInt(52) && (eV = Number(eV))) : eV = vV.getBigUint64(yV), yV += 8, eV;
          case 208:
            return vV.getInt8(yV++);
          case 209:
            return eV = vV.getInt16(yV), yV += 2, eV;
          case 210:
            return eV = vV.getInt32(yV), yV += 4, eV;
          case 211:
            return "number" === bV.int64AsType ? (eV = 4294967296 * vV.getInt32(yV), eV += vV.getUint32(yV + 4)) : "string" === bV.int64AsType ? eV = vV.getBigInt64(yV).toString() : "auto" === bV.int64AsType ? (eV = vV.getBigInt64(yV), eV >= BigInt(-2) << BigInt(52) && eV <= BigInt(2) << BigInt(52) && (eV = Number(eV))) : eV = vV.getBigInt64(yV), yV += 8, eV;
          case 212:
            if (eV = YV[yV++], 114 == eV) return Ve(63 & YV[yV++]);
            {
              let VV = jV[eV];
              if (VV) return VV.read ? (yV++, VV.read(WV())) : VV.noBuffer ? (yV++, VV()) : VV(YV.subarray(yV, ++yV));
              throw new Error("Unknown extension " + eV)
            }
          case 213:
            return eV = YV[yV], 114 == eV ? (yV++, Ve(63 & YV[yV++], YV[yV++])) : SV(2);
          case 214:
            return SV(4);
          case 215:
            return SV(8);
          case 216:
            return SV(16);
          case 217:
            return eV = YV[yV++], BV >= yV ? nV.slice(yV - EV, (yV += eV) - EV) : aV(eV);
          case 218:
            return eV = vV.getUint16(yV), BV >= (yV += 2) ? nV.slice(yV - EV, (yV += eV) - EV) : oV(eV);
          case 219:
            return eV = vV.getUint32(yV), BV >= (yV += 4) ? nV.slice(yV - EV, (yV += eV) - EV) : cV(eV);
          case 220:
            return eV = vV.getUint16(yV), yV += 2, LV(eV);
          case 221:
            return eV = vV.getUint32(yV), yV += 4, LV(eV);
          case 222:
            return eV = vV.getUint16(yV), yV += 2, fV(eV);
          case 223:
            return eV = vV.getUint32(yV), yV += 4, fV(eV);
          default:
            if (VV >= 224) return VV - 256;
            if (void 0 === VV) {
              let VV = new Error("Unexpected end of MessagePack data");
              throw VV.incomplete = !0, VV
            }
            throw new Error("Unknown MessagePack token " + VV)
        }
      }
    }
    const RV = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function gV(VV, eV) {
      function xV() {
        if (xV.count++ > XV) {
          let xV = VV.read = new Function("r", "return function(){return " + (bV.freezeData ? "Object.freeze" : "") + "({" + VV.map((VV => "__proto__" === VV ? "__proto_:r()" : RV.test(VV) ? VV + ":r()" : "[" + JSON.stringify(VV) + "]:r()")).join(",") + "})}")(WV);
          return 0 === VV.highByte && (VV.read = DV(eV, VV.read)), xV()
        }
        let JV = {};
        for (let eV = 0, xV = VV.length; eV < xV; eV++) {
          let xV = VV[eV];
          "__proto__" === xV && (xV = "__proto_"), JV[xV] = WV()
        }
        return bV.freezeData ? Object.freeze(JV) : JV
      }
      return xV.count = 0, 0 === VV.highByte ? DV(eV, xV) : xV
    }
    const DV = (VV, eV) => function() {
      let xV = YV[yV++];
      if (0 === xV) return eV();
      let JV = VV < 32 ? -(VV + (xV << 5)) : VV + (xV << 5),
        UV = QV[JV] || iV()[JV];
      if (!UV) throw new Error("Record id is not defined for " + JV);
      return UV.read || (UV.read = gV(UV, VV)), UV.read()
    };

    function iV() {
      let VV = Ue((() => (YV = null, bV.getStructures())));
      return QV = bV._mergeStructures(VV, QV)
    }
    var CV = lV,
      aV = lV,
      oV = lV,
      cV = lV;
    let hV = !1;

    function lV(VV) {
      let eV;
      if (VV < 16 && (eV = HV(VV))) return eV;
      if (VV > 64 && JV) return JV.decode(YV.subarray(yV, yV += VV));
      const xV = yV + VV,
        UV = [];
      for (eV = ""; yV < xV;) {
        const VV = YV[yV++];
        if (0 === (128 & VV)) UV.push(VV);
        else if (192 === (224 & VV)) {
          const eV = 63 & YV[yV++];
          UV.push((31 & VV) << 6 | eV)
        } else if (224 === (240 & VV)) {
          const eV = 63 & YV[yV++],
            xV = 63 & YV[yV++];
          UV.push((31 & VV) << 12 | eV << 6 | xV)
        } else if (240 === (248 & VV)) {
          let eV = (7 & VV) << 18 | (63 & YV[yV++]) << 12 | (63 & YV[yV++]) << 6 | 63 & YV[yV++];
          eV > 65535 && (eV -= 65536, UV.push(eV >>> 10 & 1023 | 55296), eV = 56320 | 1023 & eV), UV.push(eV)
        } else UV.push(VV);
        UV.length >= 4096 && (eV += mV.apply(String, UV), UV.length = 0)
      }
      return UV.length > 0 && (eV += mV.apply(String, UV)), eV
    }

    function LV(VV) {
      let eV = new Array(VV);
      for (let xV = 0; xV < VV; xV++) eV[xV] = WV();
      return bV.freezeData ? Object.freeze(eV) : eV
    }

    function fV(VV) {
      if (bV.mapsAsObjects) {
        let eV = {};
        for (let xV = 0; xV < VV; xV++) {
          let VV = dV();
          "__proto__" === VV && (VV = "__proto_"), eV[VV] = WV()
        }
        return eV
      } {
        let eV = new Map;
        for (let xV = 0; xV < VV; xV++) eV.set(WV(), WV());
        return eV
      }
    }
    var mV = String.fromCharCode;

    function KV(VV) {
      let eV = yV,
        xV = new Array(VV);
      for (let JV = 0; JV < VV; JV++) {
        const VV = YV[yV++];
        if ((128 & VV) > 0) return void(yV = eV);
        xV[JV] = VV
      }
      return mV.apply(String, xV)
    }

    function HV(VV) {
      if (VV < 4) {
        if (VV < 2) {
          if (0 === VV) return "";
          {
            let VV = YV[yV++];
            return (128 & VV) > 1 ? void(yV -= 1) : mV(VV)
          }
        } {
          let eV = YV[yV++],
            xV = YV[yV++];
          if ((128 & eV) > 0 || (128 & xV) > 0) return void(yV -= 2);
          if (VV < 3) return mV(eV, xV);
          let JV = YV[yV++];
          return (128 & JV) > 0 ? void(yV -= 3) : mV(eV, xV, JV)
        }
      } {
        let eV = YV[yV++],
          xV = YV[yV++],
          JV = YV[yV++],
          UV = YV[yV++];
        if ((128 & eV) > 0 || (128 & xV) > 0 || (128 & JV) > 0 || (128 & UV) > 0) return void(yV -= 4);
        if (VV < 6) {
          if (4 === VV) return mV(eV, xV, JV, UV);
          {
            let VV = YV[yV++];
            return (128 & VV) > 0 ? void(yV -= 5) : mV(eV, xV, JV, UV, VV)
          }
        }
        if (VV < 8) {
          let pV = YV[yV++],
            QV = YV[yV++];
          if ((128 & pV) > 0 || (128 & QV) > 0) return void(yV -= 6);
          if (VV < 7) return mV(eV, xV, JV, UV, pV, QV);
          let nV = YV[yV++];
          return (128 & nV) > 0 ? void(yV -= 7) : mV(eV, xV, JV, UV, pV, QV, nV)
        } {
          let pV = YV[yV++],
            QV = YV[yV++],
            nV = YV[yV++],
            wV = YV[yV++];
          if ((128 & pV) > 0 || (128 & QV) > 0 || (128 & nV) > 0 || (128 & wV) > 0) return void(yV -= 8);
          if (VV < 10) {
            if (8 === VV) return mV(eV, xV, JV, UV, pV, QV, nV, wV);
            {
              let VV = YV[yV++];
              return (128 & VV) > 0 ? void(yV -= 9) : mV(eV, xV, JV, UV, pV, QV, nV, wV, VV)
            }
          }
          if (VV < 12) {
            let ZV = YV[yV++],
              vV = YV[yV++];
            if ((128 & ZV) > 0 || (128 & vV) > 0) return void(yV -= 10);
            if (VV < 11) return mV(eV, xV, JV, UV, pV, QV, nV, wV, ZV, vV);
            let rV = YV[yV++];
            return (128 & rV) > 0 ? void(yV -= 11) : mV(eV, xV, JV, UV, pV, QV, nV, wV, ZV, vV, rV)
          } {
            let ZV = YV[yV++],
              vV = YV[yV++],
              rV = YV[yV++],
              kV = YV[yV++];
            if ((128 & ZV) > 0 || (128 & vV) > 0 || (128 & rV) > 0 || (128 & kV) > 0) return void(yV -= 12);
            if (VV < 14) {
              if (12 === VV) return mV(eV, xV, JV, UV, pV, QV, nV, wV, ZV, vV, rV, kV);
              {
                let VV = YV[yV++];
                return (128 & VV) > 0 ? void(yV -= 13) : mV(eV, xV, JV, UV, pV, QV, nV, wV, ZV, vV, rV, kV, VV)
              }
            } {
              let bV = YV[yV++],
                EV = YV[yV++];
              if ((128 & bV) > 0 || (128 & EV) > 0) return void(yV -= 14);
              if (VV < 15) return mV(eV, xV, JV, UV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV);
              let BV = YV[yV++];
              return (128 & BV) > 0 ? void(yV -= 15) : mV(eV, xV, JV, UV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV)
            }
          }
        }
      }
    }

    function uV() {
      let VV, eV = YV[yV++];
      if (eV < 192) VV = eV - 160;
      else switch (eV) {
        case 217:
          VV = YV[yV++];
          break;
        case 218:
          VV = vV.getUint16(yV), yV += 2;
          break;
        case 219:
          VV = vV.getUint32(yV), yV += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return lV(VV)
    }

    function sV(VV) {
      return bV.copyBuffers ? Uint8Array.prototype.slice.call(YV, yV, yV += VV) : YV.subarray(yV, yV += VV)
    }

    function SV(VV) {
      let eV = YV[yV++];
      if (jV[eV]) {
        let xV;
        return jV[eV](YV.subarray(yV, xV = yV += VV), (VV => {
          yV = VV;
          try {
            return WV()
          } finally {
            yV = xV
          }
        }))
      }
      throw new Error("Unknown extension type " + eV)
    }
    var IV = new Array(4096);

    function dV() {
      let VV = YV[yV++];
      if (!(VV >= 160 && VV < 192)) return yV--, OV(WV());
      if (VV -= 160, BV >= yV) return nV.slice(yV - EV, (yV += VV) - EV);
      if (!(0 == BV && UV < 180)) return CV(VV);
      let eV, xV = 4095 & (VV << 5 ^ (VV > 1 ? vV.getUint16(yV) : VV > 0 ? YV[yV] : 0)),
        JV = IV[xV],
        pV = yV,
        QV = yV + VV - 3,
        wV = 0;
      if (JV && JV.bytes == VV) {
        for (; pV < QV;) {
          if (eV = vV.getUint32(pV), eV != JV[wV++]) {
            pV = 1879048192;
            break
          }
          pV += 4
        }
        for (QV += 3; pV < QV;)
          if (eV = YV[pV++], eV != JV[wV++]) {
            pV = 1879048192;
            break
          } if (pV === QV) return yV = pV, JV.string;
        QV -= 3, pV = yV
      }
      for (JV = [], IV[xV] = JV, JV.bytes = VV; pV < QV;) eV = vV.getUint32(pV), JV.push(eV), pV += 4;
      for (QV += 3; pV < QV;) eV = YV[pV++], JV.push(eV);
      let ZV = VV < 16 ? HV(VV) : KV(VV);
      return JV.string = null != ZV ? ZV : CV(VV)
    }

    function OV(VV) {
      if ("string" === typeof VV) return VV;
      if ("number" === typeof VV || "boolean" === typeof VV || "bigint" === typeof VV) return VV.toString();
      if (null == VV) return VV + "";
      if (bV.allowArraysInMapKeys && Array.isArray(VV) && VV.flat().every((VV => ["string", "number", "boolean", "bigint"].includes(typeof VV)))) return VV.flat().toString();
      throw new Error("Invalid property type for record: " + typeof VV)
    }
    const Ve = (VV, eV) => {
      let xV = WV().map(OV),
        JV = VV;
      void 0 !== eV && (VV = VV < 32 ? -((eV << 5) + VV) : (eV << 5) + VV, xV.highByte = eV);
      let YV = QV[VV];
      return YV && (YV.isShared || NV) && ((QV.restoreStructures || (QV.restoreStructures = []))[VV] = YV), QV[VV] = xV, xV.read = gV(xV, JV), xV.read()
    };
    jV[0] = () => {}, jV[0].noBuffer = !0, jV[66] = VV => {
      let eV = VV.length,
        xV = BigInt(128 & VV[0] ? VV[0] - 256 : VV[0]);
      for (let JV = 1; JV < eV; JV++) xV <<= BigInt(8), xV += BigInt(VV[JV]);
      return xV
    };
    let ee = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    jV[101] = () => {
      let VV = WV();
      return (ee[VV[0]] || Error)(VV[1], {
        cause: VV[2]
      })
    }, jV[105] = VV => {
      if (!1 === bV.structuredClone) throw new Error("Structured clone extension is disabled");
      let eV = vV.getUint32(yV - 4);
      ZV || (ZV = new Map);
      let xV, JV = YV[yV];
      xV = JV >= 144 && JV < 160 || 220 == JV || 221 == JV ? [] : {};
      let UV = {
        target: xV
      };
      ZV.set(eV, UV);
      let pV = WV();
      return UV.used ? Object.assign(xV, pV) : (UV.target = pV, pV)
    }, jV[112] = VV => {
      if (!1 === bV.structuredClone) throw new Error("Structured clone extension is disabled");
      let eV = vV.getUint32(yV - 4),
        xV = ZV.get(eV);
      return xV.used = !0, xV.target
    }, jV[115] = () => new Set(WV());
    const xe = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((VV => VV + "Array"));
    let Je = "object" === typeof globalThis ? globalThis : window;
    jV[116] = VV => {
      let eV = VV[0],
        xV = xe[eV];
      if (!xV) {
        if (16 === eV) {
          let eV = new ArrayBuffer(VV.length - 1);
          return new Uint8Array(eV).set(VV.subarray(1)), eV
        }
        throw new Error("Could not find typed array for code " + eV)
      }
      return new Je[xV](Uint8Array.prototype.slice.call(VV, 1).buffer)
    }, jV[120] = () => {
      let VV = WV();
      return new RegExp(VV[0], VV[1])
    };
    const Ye = [];

    function Ue(VV) {
      AV && AV();
      let eV = UV,
        xV = yV,
        JV = kV,
        pV = EV,
        jV = BV,
        qV = nV,
        tV = rV,
        FV = ZV,
        TV = wV,
        PV = new Uint8Array(YV.slice(0, UV)),
        XV = QV,
        MV = QV.slice(0, QV.length),
        zV = bV,
        GV = NV,
        WV = VV();
      return UV = eV, yV = xV, kV = JV, EV = pV, BV = jV, nV = qV, rV = tV, ZV = FV, wV = TV, YV = PV, NV = GV, (QV = XV).splice(0, QV.length, ...MV), bV = zV, vV = new DataView(YV.buffer, YV.byteOffset, YV.byteLength), WV
    }

    function ye() {
      YV = null, ZV = null, QV = null
    }
    jV[98] = VV => {
      let eV = (VV[0] << 24) + (VV[1] << 16) + (VV[2] << 8) + VV[3],
        xV = yV;
      return yV += eV - VV.length, wV = Ye, (wV = [uV(), uV()]).position0 = 0, wV.position1 = 0, wV.postBundlePosition = yV, yV = xV, WV()
    }, jV[255] = VV => 4 == VV.length ? new Date(1e3 * (16777216 * VV[0] + (VV[1] << 16) + (VV[2] << 8) + VV[3])) : 8 == VV.length ? new Date(((VV[0] << 22) + (VV[1] << 14) + (VV[2] << 6) + (VV[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & VV[3]) + 16777216 * VV[4] + (VV[5] << 16) + (VV[6] << 8) + VV[7])) : 12 == VV.length ? new Date(((VV[0] << 24) + (VV[1] << 16) + (VV[2] << 8) + VV[3]) / 1e6 + 1e3 * ((128 & VV[4] ? -281474976710656 : 0) + 1099511627776 * VV[6] + 4294967296 * VV[7] + 16777216 * VV[8] + (VV[9] << 16) + (VV[10] << 8) + VV[11])) : new Date("invalid");
    const pe = new Array(147);
    for (let Yx = 0; Yx < 256; Yx++) pe[Yx] = +("1e" + Math.floor(45.15 - .30103 * Yx));
    const Qe = MV;
    var ne = new MV({
      useRecords: !1
    });
    const we = ne.unpack,
      Ze = ne.unpackMultiple,
      ve = ne.unpack,
      re = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let ke, be, Ee, Be = new Float32Array(1),
      je = new Uint8Array(Be.buffer, 0, 4);

    function qe(VV) {
      Be[0] = VV;
      let eV = pe[(127 & je[3]) << 1 | je[2] >> 7];
      return (eV * VV + (VV > 0 ? .5 : -.5) | 0) / eV
    }
    try {
      ke = new TextEncoder
    } catch (Jx) {}
    const te = "undefined" !== typeof Buffer,
      Fe = te ? function(VV) {
        return Buffer.allocUnsafeSlow(VV)
      } : Uint8Array,
      Te = te ? Buffer : Uint8Array,
      Pe = te ? 4294967296 : 2144337920;
    let Ae, Ne, Xe, Me, ze, Ge = 0,
      We = null;
    const Re = /[\u0080-\uFFFF]/,
      ge = Symbol("record-id");
    class De extends MV {
      constructor(VV) {
        let eV, xV, JV, YV;
        super(VV), this.offset = 0;
        let UV = Te.prototype.utf8Write ? function(VV, eV) {
            return Ae.utf8Write(VV, eV, Ae.byteLength - eV)
          } : !(!ke || !ke.encodeInto) && function(VV, eV) {
            return ke.encodeInto(VV, Ae.subarray(eV)).written
          },
          yV = this;
        VV || (VV = {});
        let pV = VV && VV.sequential,
          QV = VV.structures || VV.saveStructures,
          nV = VV.maxSharedStructures;
        if (null == nV && (nV = QV ? 32 : 0), nV > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        VV.structuredClone && void 0 == VV.moreTypes && (this.moreTypes = !0);
        let wV = VV.maxOwnStructures;
        null == wV && (wV = QV ? 32 : 64), this.structures || 0 == VV.useRecords || (this.structures = []);
        let ZV = nV > 32 || wV + nV > 64,
          vV = nV + 64,
          rV = nV + wV + 64;
        if (rV > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let kV = [],
          bV = 0,
          EV = 0;
        this.pack = this.encode = function(VV, UV) {
          if (Ae || (Ae = new Fe(8192), Xe = Ae.dataView || (Ae.dataView = new DataView(Ae.buffer, 0, 8192)), Ge = 0), Me = Ae.length - 10, Me - Ge < 2048 ? (Ae = new Fe(Ae.length), Xe = Ae.dataView || (Ae.dataView = new DataView(Ae.buffer, 0, Ae.length)), Me = Ae.length - 10, Ge = 0) : Ge = Ge + 7 & 2147483640, eV = Ge, UV & de && (Ge += 255 & UV), YV = yV.structuredClone ? new Map : null, yV.bundleStrings && "string" !== typeof VV ? (We = [], We.size = 1 / 0) : We = null, JV = yV.structures, JV) {
            JV.uninitialized && (JV = yV._mergeStructures(yV.getStructures()));
            let VV = JV.sharedLength || 0;
            if (VV > nV) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + JV.sharedLength);
            if (!JV.transitions) {
              JV.transitions = Object.create(null);
              for (let eV = 0; eV < VV; eV++) {
                let VV = JV[eV];
                if (!VV) continue;
                let xV, YV = JV.transitions;
                for (let eV = 0, JV = VV.length; eV < JV; eV++) {
                  let JV = VV[eV];
                  xV = YV[JV], xV || (xV = YV[JV] = Object.create(null)), YV = xV
                }
                YV[ge] = eV + 64
              }
              this.lastNamedStructuresLength = VV
            }
            pV || (JV.nextId = VV + 64)
          }
          let QV;
          xV && (xV = !1);
          try {
            yV.randomAccessStructure && VV && VV.constructor && VV.constructor === Object ? MV(VV) : qV(VV);
            let xV = We;
            if (We && oe(eV, qV, 0), YV && YV.idsToInsert) {
              let VV = YV.idsToInsert.sort(((VV, eV) => VV.offset > eV.offset ? 1 : -1)),
                JV = VV.length,
                UV = -1;
              for (; xV && JV > 0;) {
                let YV = VV[--JV].offset + eV;
                YV < xV.stringsPosition + eV && -1 === UV && (UV = 0), YV > xV.position + eV ? UV >= 0 && (UV += 6) : (UV >= 0 && (Xe.setUint32(xV.position + eV, Xe.getUint32(xV.position + eV) + UV), UV = -1), xV = xV.previous, JV++)
              }
              UV >= 0 && xV && Xe.setUint32(xV.position + eV, Xe.getUint32(xV.position + eV) + UV), Ge += 6 * VV.length, Ge > Me && AV(Ge), yV.offset = Ge;
              let pV = function(VV, eV) {
                let xV, JV = 6 * eV.length,
                  YV = VV.length - JV;
                for (; xV = eV.pop();) {
                  let eV = xV.offset,
                    UV = xV.id;
                  VV.copyWithin(eV + JV, eV, YV), JV -= 6;
                  let yV = eV + JV;
                  VV[yV++] = 214, VV[yV++] = 105, VV[yV++] = UV >> 24, VV[yV++] = UV >> 16 & 255, VV[yV++] = UV >> 8 & 255, VV[yV++] = 255 & UV, YV = eV
                }
                return VV
              }(Ae.subarray(eV, Ge), VV);
              return YV = null, pV
            }
            return yV.offset = Ge, UV & Se ? (Ae.start = eV, Ae.end = Ge, Ae) : Ae.subarray(eV, Ge)
          } catch (Jx) {
            throw QV = Jx, Jx
          } finally {
            if (JV && (BV(), xV && yV.saveStructures)) {
              let xV = JV.sharedLength || 0,
                YV = Ae.subarray(eV, Ge),
                pV = he(JV, yV);
              if (!QV) return !1 === yV.saveStructures(pV, pV.isCompatible) ? yV.pack(VV, UV) : (yV.lastNamedStructuresLength = xV, Ae.length > 1073741824 && (Ae = null), YV)
            }
            Ae.length > 1073741824 && (Ae = null), UV & Ie && (Ge = eV)
          }
        };
        const BV = () => {
            EV < 10 && EV++;
            let VV = JV.sharedLength || 0;
            if (JV.length > VV && !pV && (JV.length = VV), bV > 1e4) JV.transitions = null, EV = 0, bV = 0, kV.length > 0 && (kV = []);
            else if (kV.length > 0 && !pV) {
              for (let VV = 0, eV = kV.length; VV < eV; VV++) kV[VV][ge] = 0;
              kV = []
            }
          },
          jV = VV => {
            var eV = VV.length;
            eV < 16 ? Ae[Ge++] = 144 | eV : eV < 65536 ? (Ae[Ge++] = 220, Ae[Ge++] = eV >> 8, Ae[Ge++] = 255 & eV) : (Ae[Ge++] = 221, Xe.setUint32(Ge, eV), Ge += 4);
            for (let xV = 0; xV < eV; xV++) qV(VV[xV])
          },
          qV = VV => {
            Ge > Me && (Ae = AV(Ge));
            var xV, JV = typeof VV;
            if ("string" === JV) {
              let JV, YV = VV.length;
              if (We && YV >= 4 && YV < 4096) {
                if ((We.size += YV) > 21760) {
                  let VV, xV, JV = (We[0] ? 3 * We[0].length + We[1].length : 0) + 10;
                  Ge + JV > Me && (Ae = AV(Ge + JV)), We.position ? (xV = We, Ae[Ge] = 200, Ge += 3, Ae[Ge++] = 98, VV = Ge - eV, Ge += 4, oe(eV, qV, 0), Xe.setUint16(VV + eV - 3, Ge - eV - VV)) : (Ae[Ge++] = 214, Ae[Ge++] = 98, VV = Ge - eV, Ge += 4), We = ["", ""], We.previous = xV, We.size = 0, We.position = VV
                }
                let xV = Re.test(VV);
                return We[xV ? 0 : 1] += VV, Ae[Ge++] = 193, void qV(xV ? -YV : YV)
              }
              JV = YV < 32 ? 1 : YV < 256 ? 2 : YV < 65536 ? 3 : 5;
              let yV = 3 * YV;
              if (Ge + yV > Me && (Ae = AV(Ge + yV)), YV < 64 || !UV) {
                let eV, UV, yV, pV = Ge + JV;
                for (eV = 0; eV < YV; eV++) UV = VV.charCodeAt(eV), UV < 128 ? Ae[pV++] = UV : UV < 2048 ? (Ae[pV++] = UV >> 6 | 192, Ae[pV++] = 63 & UV | 128) : 55296 === (64512 & UV) && 56320 === (64512 & (yV = VV.charCodeAt(eV + 1))) ? (UV = 65536 + ((1023 & UV) << 10) + (1023 & yV), eV++, Ae[pV++] = UV >> 18 | 240, Ae[pV++] = UV >> 12 & 63 | 128, Ae[pV++] = UV >> 6 & 63 | 128, Ae[pV++] = 63 & UV | 128) : (Ae[pV++] = UV >> 12 | 224, Ae[pV++] = UV >> 6 & 63 | 128, Ae[pV++] = 63 & UV | 128);
                xV = pV - Ge - JV
              } else xV = UV(VV, Ge + JV);
              xV < 32 ? Ae[Ge++] = 160 | xV : xV < 256 ? (JV < 2 && Ae.copyWithin(Ge + 2, Ge + 1, Ge + 1 + xV), Ae[Ge++] = 217, Ae[Ge++] = xV) : xV < 65536 ? (JV < 3 && Ae.copyWithin(Ge + 3, Ge + 2, Ge + 2 + xV), Ae[Ge++] = 218, Ae[Ge++] = xV >> 8, Ae[Ge++] = 255 & xV) : (JV < 5 && Ae.copyWithin(Ge + 5, Ge + 3, Ge + 3 + xV), Ae[Ge++] = 219, Xe.setUint32(Ge, xV), Ge += 4), Ge += xV
            } else if ("number" === JV)
              if (VV >>> 0 === VV) VV < 32 || VV < 128 && !1 === this.useRecords || VV < 64 && !this.randomAccessStructure ? Ae[Ge++] = VV : VV < 256 ? (Ae[Ge++] = 204, Ae[Ge++] = VV) : VV < 65536 ? (Ae[Ge++] = 205, Ae[Ge++] = VV >> 8, Ae[Ge++] = 255 & VV) : (Ae[Ge++] = 206, Xe.setUint32(Ge, VV), Ge += 4);
              else if ((VV | 0) === VV) VV >= -32 ? Ae[Ge++] = 256 + VV : VV >= -128 ? (Ae[Ge++] = 208, Ae[Ge++] = VV + 256) : VV >= -32768 ? (Ae[Ge++] = 209, Xe.setInt16(Ge, VV), Ge += 2) : (Ae[Ge++] = 210, Xe.setInt32(Ge, VV), Ge += 4);
            else {
              let eV;
              if ((eV = this.useFloat32) > 0 && VV < 4294967296 && VV >= -2147483648) {
                let xV;
                if (Ae[Ge++] = 202, Xe.setFloat32(Ge, VV), eV < 4 || ((xV = VV * pe[(127 & Ae[Ge]) << 1 | Ae[Ge + 1] >> 7]) | 0) === xV) return void(Ge += 4);
                Ge--
              }
              Ae[Ge++] = 203, Xe.setFloat64(Ge, VV), Ge += 8
            } else if ("object" === JV || "function" === JV)
              if (VV) {
                if (YV) {
                  let xV = YV.get(VV);
                  if (xV) {
                    if (!xV.id) {
                      let VV = YV.idsToInsert || (YV.idsToInsert = []);
                      xV.id = VV.push(xV)
                    }
                    return Ae[Ge++] = 214, Ae[Ge++] = 112, Xe.setUint32(Ge, xV.id), void(Ge += 4)
                  }
                  YV.set(VV, {
                    offset: Ge - eV
                  })
                }
                let UV = VV.constructor;
                if (UV === Object) PV(VV);
                else if (UV === Array) jV(VV);
                else if (UV === Map)
                  if (this.mapAsEmptyObject) Ae[Ge++] = 128;
                  else {
                    (xV = VV.size) < 16 ? Ae[Ge++] = 128 | xV : xV < 65536 ? (Ae[Ge++] = 222, Ae[Ge++] = xV >> 8, Ae[Ge++] = 255 & xV) : (Ae[Ge++] = 223, Xe.setUint32(Ge, xV), Ge += 4);
                    for (let [eV, xV] of VV) qV(eV), qV(xV)
                  }
                else {
                  for (let eV = 0, xV = be.length; eV < xV; eV++) {
                    if (VV instanceof Ee[eV]) {
                      let xV = be[eV];
                      if (xV.write) {
                        xV.type && (Ae[Ge++] = 212, Ae[Ge++] = xV.type, Ae[Ge++] = 0);
                        let eV = xV.write.call(this, VV);
                        return void(eV === VV ? Array.isArray(VV) ? jV(VV) : PV(VV) : qV(eV))
                      }
                      let JV, YV = Ae,
                        UV = Xe,
                        yV = Ge;
                      Ae = null;
                      try {
                        JV = xV.pack.call(this, VV, (VV => (Ae = YV, YV = null, Ge += VV, Ge > Me && AV(Ge), {
                          target: Ae,
                          targetView: Xe,
                          position: Ge - VV
                        })), qV)
                      } finally {
                        YV && (Ae = YV, Xe = UV, Ge = yV, Me = Ae.length - 10)
                      }
                      return void(JV && (JV.length + Ge > Me && AV(JV.length + Ge), Ge = ae(JV, Ae, Ge, xV.type)))
                    }
                  }
                  if (Array.isArray(VV)) jV(VV);
                  else {
                    if (VV.toJSON) {
                      const eV = VV.toJSON();
                      if (eV !== VV) return qV(eV)
                    }
                    if ("function" === JV) return qV(this.writeFunction && this.writeFunction(VV));
                    PV(VV)
                  }
                }
              } else Ae[Ge++] = 192;
            else if ("boolean" === JV) Ae[Ge++] = VV ? 195 : 194;
            else if ("bigint" === JV) {
              if (VV < BigInt(1) << BigInt(63) && VV >= -(BigInt(1) << BigInt(63))) Ae[Ge++] = 211, Xe.setBigInt64(Ge, VV);
              else if (VV < BigInt(1) << BigInt(64) && VV > 0) Ae[Ge++] = 207, Xe.setBigUint64(Ge, VV);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return qV(VV.toString());
                  if (this.useBigIntExtension && VV < BigInt(2) ** BigInt(1023) && VV > -(BigInt(2) ** BigInt(1023))) {
                    Ae[Ge++] = 199, Ge++, Ae[Ge++] = 66;
                    let eV, xV = [];
                    do {
                      let JV = VV & BigInt(255);
                      eV = (JV & BigInt(128)) === (VV < BigInt(0) ? BigInt(128) : BigInt(0)), xV.push(JV), VV >>= BigInt(8)
                    } while (VV !== BigInt(0) && VV !== BigInt(-1) || !eV);
                    Ae[Ge - 2] = xV.length;
                    for (let VV = xV.length; VV > 0;) Ae[Ge++] = Number(xV[--VV]);
                    return
                  }
                  throw new RangeError(VV + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                Ae[Ge++] = 203, Xe.setFloat64(Ge, Number(VV))
              }
              Ge += 8
            } else {
              if ("undefined" !== JV) throw new Error("Unknown type: " + JV);
              this.encodeUndefinedAsNil ? Ae[Ge++] = 192 : (Ae[Ge++] = 212, Ae[Ge++] = 0, Ae[Ge++] = 0)
            }
          },
          tV = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? VV => {
            let eV;
            if (this.skipValues) {
              eV = [];
              for (let xV in VV) "function" === typeof VV.hasOwnProperty && !VV.hasOwnProperty(xV) || this.skipValues.includes(VV[xV]) || eV.push(xV)
            } else eV = Object.keys(VV);
            let xV, JV = eV.length;
            if (JV < 16 ? Ae[Ge++] = 128 | JV : JV < 65536 ? (Ae[Ge++] = 222, Ae[Ge++] = JV >> 8, Ae[Ge++] = 255 & JV) : (Ae[Ge++] = 223, Xe.setUint32(Ge, JV), Ge += 4), this.coercibleKeyAsNumber)
              for (let YV = 0; YV < JV; YV++) {
                xV = eV[YV];
                let JV = Number(xV);
                qV(isNaN(JV) ? xV : JV), qV(VV[xV])
              } else
                for (let YV = 0; YV < JV; YV++) qV(xV = eV[YV]), qV(VV[xV])
          } : VV => {
            Ae[Ge++] = 222;
            let xV = Ge - eV;
            Ge += 2;
            let JV = 0;
            for (let eV in VV)("function" !== typeof VV.hasOwnProperty || VV.hasOwnProperty(eV)) && (qV(eV), qV(VV[eV]), JV++);
            if (JV > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            Ae[xV++ + eV] = JV >> 8, Ae[xV + eV] = 255 & JV
          },
          FV = !1 === this.useRecords ? tV : VV.progressiveRecords && !ZV ? VV => {
            let xV, YV, UV = JV.transitions || (JV.transitions = Object.create(null)),
              yV = Ge++ - eV;
            for (let pV in VV)
              if ("function" !== typeof VV.hasOwnProperty || VV.hasOwnProperty(pV)) {
                if (xV = UV[pV], xV) UV = xV;
                else {
                  let QV = Object.keys(VV),
                    nV = UV;
                  UV = JV.transitions;
                  let wV = 0;
                  for (let VV = 0, eV = QV.length; VV < eV; VV++) {
                    let eV = QV[VV];
                    xV = UV[eV], xV || (xV = UV[eV] = Object.create(null), wV++), UV = xV
                  }
                  yV + eV + 1 == Ge ? (Ge--, NV(UV, QV, wV)) : XV(UV, QV, yV, wV), YV = !0, UV = nV[pV]
                }
                qV(VV[pV])
              } if (!YV) {
              let xV = UV[ge];
              xV ? Ae[yV + eV] = xV : XV(UV, Object.keys(VV), yV, 0)
            }
          } : VV => {
            let eV, xV = JV.transitions || (JV.transitions = Object.create(null)),
              YV = 0;
            for (let JV in VV)("function" !== typeof VV.hasOwnProperty || VV.hasOwnProperty(JV)) && (eV = xV[JV], eV || (eV = xV[JV] = Object.create(null), YV++), xV = eV);
            let UV = xV[ge];
            UV ? UV >= 96 && ZV ? (Ae[Ge++] = 96 + (31 & (UV -= 96)), Ae[Ge++] = UV >> 5) : Ae[Ge++] = UV : NV(xV, xV.__keys__ || Object.keys(VV), YV);
            for (let JV in VV)("function" !== typeof VV.hasOwnProperty || VV.hasOwnProperty(JV)) && qV(VV[JV])
          },
          TV = "function" == typeof this.useRecords && this.useRecords,
          PV = TV ? VV => {
            TV(VV) ? FV(VV) : tV(VV)
          } : FV,
          AV = VV => {
            let xV;
            if (VV > 16777216) {
              if (VV - eV > Pe) throw new Error("Packed buffer would be larger than maximum buffer size");
              xV = Math.min(Pe, 4096 * Math.round(Math.max((VV - eV) * (VV > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else xV = 1 + (Math.max(VV - eV << 2, Ae.length - 1) >> 12) << 12;
            let JV = new Fe(xV);
            return Xe = JV.dataView || (JV.dataView = new DataView(JV.buffer, 0, xV)), VV = Math.min(VV, Ae.length), Ae.copy ? Ae.copy(JV, 0, eV, VV) : JV.set(Ae.slice(eV, VV)), Ge -= eV, eV = 0, Me = JV.length - 10, Ae = JV
          },
          NV = (VV, eV, YV) => {
            let UV = JV.nextId;
            UV || (UV = 64), UV < vV && this.shouldShareStructure && !this.shouldShareStructure(eV) ? (UV = JV.nextOwnId, UV < rV || (UV = vV), JV.nextOwnId = UV + 1) : (UV >= rV && (UV = vV), JV.nextId = UV + 1);
            let yV = eV.highByte = UV >= 96 && ZV ? UV - 96 >> 5 : -1;
            VV[ge] = UV, VV.__keys__ = eV, JV[UV - 64] = eV, UV < vV ? (eV.isShared = !0, JV.sharedLength = UV - 63, xV = !0, yV >= 0 ? (Ae[Ge++] = 96 + (31 & UV), Ae[Ge++] = yV) : Ae[Ge++] = UV) : (yV >= 0 ? (Ae[Ge++] = 213, Ae[Ge++] = 114, Ae[Ge++] = 96 + (31 & UV), Ae[Ge++] = yV) : (Ae[Ge++] = 212, Ae[Ge++] = 114, Ae[Ge++] = UV), YV && (bV += EV * YV), kV.length >= wV && (kV.shift()[ge] = 0), kV.push(VV), qV(eV))
          },
          XV = (VV, xV, JV, YV) => {
            let UV = Ae,
              yV = Ge,
              pV = Me,
              QV = eV;
            Ae = Ne, Ge = 0, eV = 0, Ae || (Ne = Ae = new Fe(8192)), Me = Ae.length - 10, NV(VV, xV, YV), Ne = Ae;
            let nV = Ge;
            if (Ae = UV, Ge = yV, Me = pV, eV = QV, nV > 1) {
              let VV = Ge + nV - 1;
              VV > Me && AV(VV);
              let xV = JV + eV;
              Ae.copyWithin(xV + nV, xV + 1, Ge), Ae.set(Ne.slice(0, nV), xV), Ge = VV
            } else Ae[JV + eV] = Ne[0]
          },
          MV = VV => {
            let YV = ze(VV, Ae, eV, Ge, JV, AV, ((VV, eV, JV) => {
              if (JV) return xV = !0;
              Ge = eV;
              let YV = Ae;
              return qV(VV), BV(), YV !== Ae ? {
                position: Ge,
                targetView: Xe,
                target: Ae
              } : Ge
            }), this);
            if (0 === YV) return PV(VV);
            Ge = YV
          }
      }
      useBuffer(VV) {
        Ae = VV, Xe = Ae.dataView || (Ae.dataView = new DataView(Ae.buffer, Ae.byteOffset, Ae.byteLength)), Ge = 0
      }
      set position(VV) {
        Ge = VV
      }
      get position() {
        return Ge
      }
      set buffer(VV) {
        Ae = VV
      }
      get buffer() {
        return Ae
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function ie(VV, eV, xV, JV) {
      let YV = VV.byteLength;
      if (YV + 1 < 256) {
        var {
          target: UV,
          position: yV
        } = xV(4 + YV);
        UV[yV++] = 199, UV[yV++] = YV + 1
      } else if (YV + 1 < 65536) {
        var {
          target: UV,
          position: yV
        } = xV(5 + YV);
        UV[yV++] = 200, UV[yV++] = YV + 1 >> 8, UV[yV++] = YV + 1 & 255
      } else {
        var {
          target: UV,
          position: yV,
          targetView: pV
        } = xV(7 + YV);
        UV[yV++] = 201, pV.setUint32(yV, YV + 1), yV += 4
      }
      UV[yV++] = 116, UV[yV++] = eV, VV.buffer || (VV = new Uint8Array(VV)), UV.set(new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength), yV)
    }

    function Ce(VV, eV) {
      let xV = VV.byteLength;
      var JV, YV;
      if (xV < 256) {
        var {
          target: JV,
          position: YV
        } = eV(xV + 2);
        JV[YV++] = 196, JV[YV++] = xV
      } else if (xV < 65536) {
        var {
          target: JV,
          position: YV
        } = eV(xV + 3);
        JV[YV++] = 197, JV[YV++] = xV >> 8, JV[YV++] = 255 & xV
      } else {
        var {
          target: JV,
          position: YV,
          targetView: UV
        } = eV(xV + 5);
        JV[YV++] = 198, UV.setUint32(YV, xV), YV += 4
      }
      JV.set(VV, YV)
    }

    function ae(VV, eV, xV, JV) {
      let YV = VV.length;
      switch (YV) {
        case 1:
          eV[xV++] = 212;
          break;
        case 2:
          eV[xV++] = 213;
          break;
        case 4:
          eV[xV++] = 214;
          break;
        case 8:
          eV[xV++] = 215;
          break;
        case 16:
          eV[xV++] = 216;
          break;
        default:
          YV < 256 ? (eV[xV++] = 199, eV[xV++] = YV) : YV < 65536 ? (eV[xV++] = 200, eV[xV++] = YV >> 8, eV[xV++] = 255 & YV) : (eV[xV++] = 201, eV[xV++] = YV >> 24, eV[xV++] = YV >> 16 & 255, eV[xV++] = YV >> 8 & 255, eV[xV++] = 255 & YV)
      }
      return eV[xV++] = JV, eV.set(VV, xV), xV += YV
    }

    function oe(VV, eV, xV) {
      if (We.length > 0) {
        Xe.setUint32(We.position + VV, Ge + xV - We.position - VV), We.stringsPosition = Ge - VV;
        let JV = We;
        We = null, eV(JV[0]), eV(JV[1])
      }
    }

    function ce(VV) {
      if (VV.Class) {
        if (!VV.pack && !VV.write) throw new Error("Extension has no pack or write function");
        if (VV.pack && !VV.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        Ee.unshift(VV.Class), be.unshift(VV)
      }! function(VV) {
        VV.unpack ? jV[VV.type] = VV.unpack : jV[VV.type] = VV
      }(VV)
    }

    function he(VV, eV) {
      return VV.isCompatible = VV => {
        let xV = !VV || (eV.lastNamedStructuresLength || 0) === VV.length;
        return xV || eV._mergeStructures(VV), xV
      }, VV
    }
    Ee = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, tV], be = [{
      pack(VV, eV, xV) {
        let JV = VV.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === VV.getMilliseconds()) && JV >= 0 && JV < 4294967296) {
          let {
            target: VV,
            targetView: xV,
            position: YV
          } = eV(6);
          VV[YV++] = 214, VV[YV++] = 255, xV.setUint32(YV, JV)
        } else if (JV > 0 && JV < 4294967296) {
          let {
            target: xV,
            targetView: YV,
            position: UV
          } = eV(10);
          xV[UV++] = 215, xV[UV++] = 255, YV.setUint32(UV, 4e6 * VV.getMilliseconds() + (JV / 1e3 / 4294967296 | 0)), YV.setUint32(UV + 4, JV)
        } else if (isNaN(JV)) {
          if (this.onInvalidDate) return eV(0), xV(this.onInvalidDate());
          let {
            target: VV,
            targetView: JV,
            position: YV
          } = eV(3);
          VV[YV++] = 212, VV[YV++] = 255, VV[YV++] = 255
        } else {
          let {
            target: xV,
            targetView: YV,
            position: UV
          } = eV(15);
          xV[UV++] = 199, xV[UV++] = 12, xV[UV++] = 255, YV.setUint32(UV, 1e6 * VV.getMilliseconds()), YV.setBigInt64(UV + 4, BigInt(Math.floor(JV)))
        }
      }
    }, {
      pack(VV, eV, xV) {
        if (this.setAsEmptyObject) return eV(0), xV({});
        let JV = Array.from(VV),
          {
            target: YV,
            position: UV
          } = eV(this.moreTypes ? 3 : 0);
        this.moreTypes && (YV[UV++] = 212, YV[UV++] = 115, YV[UV++] = 0), xV(JV)
      }
    }, {
      pack(VV, eV, xV) {
        let {
          target: JV,
          position: YV
        } = eV(this.moreTypes ? 3 : 0);
        this.moreTypes && (JV[YV++] = 212, JV[YV++] = 101, JV[YV++] = 0), xV([VV.name, VV.message, VV.cause])
      }
    }, {
      pack(VV, eV, xV) {
        let {
          target: JV,
          position: YV
        } = eV(this.moreTypes ? 3 : 0);
        this.moreTypes && (JV[YV++] = 212, JV[YV++] = 120, JV[YV++] = 0), xV([VV.source, VV.flags])
      }
    }, {
      pack(VV, eV) {
        this.moreTypes ? ie(VV, 16, eV) : Ce(te ? Buffer.from(VV) : new Uint8Array(VV), eV)
      }
    }, {
      pack(VV, eV) {
        let xV = VV.constructor;
        xV !== Te && this.moreTypes ? ie(VV, xe.indexOf(xV.name), eV) : Ce(VV, eV)
      }
    }, {
      pack(VV, eV) {
        let {
          target: xV,
          position: JV
        } = eV(1);
        xV[JV] = 193
      }
    }];
    let le = new De({
      useRecords: !1
    });
    const Le = le.pack,
      fe = le.pack,
      me = De,
      {
        NEVER: Ke,
        ALWAYS: He,
        DECIMAL_ROUND: ue,
        DECIMAL_FIT: se
      } = re,
      Se = 512,
      Ie = 1024,
      de = 2048;
    const Oe = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!VV || "object" !== typeof VV) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const xV = new MV(eV);
        let JV;
        const YV = VV => {
          let eV;
          JV && (VV = Buffer.concat([JV, VV]), JV = void 0);
          try {
            eV = xV.unpackMultiple(VV)
          } catch (YV) {
            if (!YV.incomplete) throw YV;
            JV = VV.slice(YV.lastPosition), eV = YV.values
          }
          return eV
        };
        return "function" === typeof VV[Symbol.iterator] ? function*() {
          for (const eV of VV) yield* YV(eV)
        }() : "function" === typeof VV[Symbol.asyncIterator] ? async function*() {
          for await (const eV of VV) yield* YV(eV)
        }(): void 0
      },
      Vx = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (VV && "object" === typeof VV) {
          if ("function" === typeof VV[Symbol.iterator]) return function*(VV, eV) {
            const xV = new De(eV);
            for (const JV of VV) yield xV.pack(JV)
          }(VV, eV);
          if ("function" === typeof VV.then || "function" === typeof VV[Symbol.asyncIterator]) return async function*(VV, eV) {
            const xV = new De(eV);
            for await (const JV of VV) yield xV.pack(JV)
          }(VV, eV);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      ex = !1,
      xx = !0
  },
  9734: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      $changes: () => bV,
      $childType: () => EV,
      $decoder: () => wV,
      $deleteByIndex: () => rV,
      $encoder: () => nV,
      $filter: () => ZV,
      $getByIndex: () => vV,
      $numFields: () => XV,
      $refId: () => pV,
      $track: () => QV,
      $values: () => FV,
      ArraySchema: () => xJ,
      Callbacks: () => xY,
      ChangeTree: () => Gx,
      CollectionSchema: () => UJ,
      Decoder: () => uJ,
      Encoder: () => fJ,
      FieldBuilder: () => QJ,
      MapSchema: () => YJ,
      Metadata: () => ue,
      OPERATION: () => YV,
      Reflection: () => dJ,
      ReflectionField: () => SJ,
      ReflectionType: () => IJ,
      Root: () => WJ,
      Schema: () => zJ,
      SetSchema: () => yJ,
      StateCallbackStrategy: () => eY,
      StateView: () => CJ,
      StreamSchema: () => pJ,
      TypeContext: () => he,
      createPool: () => YY,
      decode: () => qe,
      decodeKeyValueOperation: () => Sx,
      decodeSchemaOperation: () => sx,
      defineCustomTypes: () => Pe,
      defineTypes: () => NJ,
      deprecated: () => PJ,
      dumpChanges: () => MJ,
      encode: () => ee,
      encodeArray: () => ox,
      encodeIndexedEntry: () => Cx,
      encodeKeyValueOperation: () => ax,
      encodeMapEntry: () => ix,
      encodeSchemaOperation: () => Dx,
      zk: () => bJ,
      fullStateOnly: () => qJ,
      getDecoderStateCallbacks: () => OJ,
      getEncodeDescriptor: () => Vx,
      getRawChangesCallback: () => VY,
      isBuilder: () => nJ,
      patchOnly: () => jJ,
      registerType: () => Te,
      schema: () => XJ,
      t: () => rJ,
      type: () => tJ,
      unreliable: () => BJ,
      view: () => EJ
    });
    const JV = 255;
    var YV;

    function UV(VV) {
      Object.defineProperty(VV, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(VV) {
      VV[VV.ADD = 128] = "ADD", VV[VV.REPLACE = 0] = "REPLACE", VV[VV.DELETE = 64] = "DELETE", VV[VV.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", VV[VV.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", VV[VV.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", VV[VV.CLEAR = 10] = "CLEAR", VV[VV.REVERSE = 15] = "REVERSE", VV[VV.MOVE = 32] = "MOVE", VV[VV.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", VV[VV.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(YV || (YV = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const yV = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const VV = "colyseus.symbolRegistry",
        eV = yV[VV] || (yV[VV] = Object.create(null));
      Symbol.for = function(VV) {
        return eV[VV] || (eV[VV] = Symbol(VV))
      }, Symbol.keyFor = function(VV) {
        for (const xV in eV)
          if (eV[xV] === VV) return xV
      }
    }
    const pV = Symbol.for("$refId"),
      QV = "~track",
      nV = "~encoder",
      wV = "~decoder",
      ZV = "~filter",
      vV = "~getByIndex",
      rV = "~deleteByIndex",
      kV = "~resyncPrune",
      bV = Symbol.for("$changes"),
      EV = Symbol.for("$childType"),
      BV = Symbol.for("$proxyTarget"),
      jV = "~onEncodeEnd",
      qV = "~reset",
      tV = "~onDecodeEnd",
      FV = Symbol.for("$values"),
      TV = "~builder",
      PV = "~descriptors",
      AV = "~__encodeDescriptor",
      NV = "~encoders",
      XV = "~__numFields",
      MV = "~__refTypeFieldIndexes",
      zV = "~__viewFieldIndexes",
      GV = "$__fieldIndexesByViewTag",
      WV = "~__unreliableFieldIndexes",
      RV = "~__patchOnlyFieldIndexes",
      gV = "~__fullSyncSkipIndexes",
      DV = "~__fullStateOnlyFieldIndexes",
      iV = "~__streamFieldIndexes",
      CV = "~__streamPriorities";
    let aV;
    try {
      aV = new TextEncoder
    } catch (UY) {}
    const oV = new ArrayBuffer(8),
      cV = new Int32Array(oV),
      hV = new Float32Array(oV),
      lV = new Float64Array(oV),
      LV = new BigInt64Array(oV),
      fV = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(VV, eV) {
        for (var xV = 0, JV = 0, YV = 0, UV = VV.length; YV < UV; YV++)(xV = VV.charCodeAt(YV)) < 128 ? JV += 1 : xV < 2048 ? JV += 2 : xV < 55296 || xV >= 57344 ? JV += 3 : (YV++, JV += 4);
        return JV
      };

    function mV(VV, eV, xV) {
      for (var JV = 0, YV = 0, UV = eV.length; YV < UV; YV++)(JV = eV.charCodeAt(YV)) < 128 ? VV[xV.offset++] = JV : JV < 2048 ? (VV[xV.offset] = 192 | JV >> 6, VV[xV.offset + 1] = 128 | 63 & JV, xV.offset += 2) : JV < 55296 || JV >= 57344 ? (VV[xV.offset] = 224 | JV >> 12, VV[xV.offset + 1] = 128 | JV >> 6 & 63, VV[xV.offset + 2] = 128 | 63 & JV, xV.offset += 3) : (YV++, JV = 65536 + ((1023 & JV) << 10 | 1023 & eV.charCodeAt(YV)), VV[xV.offset] = 240 | JV >> 18, VV[xV.offset + 1] = 128 | JV >> 12 & 63, VV[xV.offset + 2] = 128 | JV >> 6 & 63, VV[xV.offset + 3] = 128 | 63 & JV, xV.offset += 4)
    }

    function KV(VV, eV, xV) {
      VV[xV.offset++] = 255 & eV
    }

    function HV(VV, eV, xV) {
      VV[xV.offset++] = 255 & eV, VV[xV.offset++] = eV >> 8 & 255
    }

    function uV(VV, eV, xV) {
      VV[xV.offset++] = 255 & eV, VV[xV.offset++] = eV >> 8 & 255
    }

    function sV(VV, eV, xV) {
      VV[xV.offset++] = 255 & eV, VV[xV.offset++] = eV >> 8 & 255, VV[xV.offset++] = eV >> 16 & 255, VV[xV.offset++] = eV >> 24 & 255
    }

    function SV(VV, eV, xV) {
      const JV = eV >> 24,
        YV = eV >> 16,
        UV = eV >> 8,
        yV = eV;
      VV[xV.offset++] = 255 & yV, VV[xV.offset++] = 255 & UV, VV[xV.offset++] = 255 & YV, VV[xV.offset++] = 255 & JV
    }

    function IV(VV, eV, xV) {
      const JV = Math.floor(eV / Math.pow(2, 32));
      SV(VV, eV >>> 0, xV), SV(VV, JV, xV)
    }

    function dV(VV, eV, xV) {
      const JV = eV / Math.pow(2, 32) | 0;
      SV(VV, eV >>> 0, xV), SV(VV, JV, xV)
    }

    function OV(VV, eV, xV) {
      hV[0] = eV, sV(VV, cV[0], xV)
    }

    function Ve(VV, eV, xV) {
      lV[0] = eV, sV(VV, cV[0], xV), sV(VV, cV[1], xV)
    }
    const ee = {
        int8: KV,
        uint8: function(VV, eV, xV) {
          VV[xV.offset++] = 255 & eV
        },
        int16: HV,
        uint16: uV,
        int32: sV,
        uint32: SV,
        int64: IV,
        uint64: dV,
        bigint64: function(VV, eV, xV) {
          LV[0] = BigInt.asIntN(64, eV), sV(VV, cV[0], xV), sV(VV, cV[1], xV)
        },
        biguint64: function(VV, eV, xV) {
          LV[0] = BigInt.asIntN(64, eV), sV(VV, cV[0], xV), sV(VV, cV[1], xV)
        },
        float32: OV,
        float64: Ve,
        boolean: function(VV, eV, xV) {
          VV[xV.offset++] = eV ? 1 : 0
        },
        string: function(VV, eV, xV) {
          eV || (eV = "");
          let JV = fV(eV, "utf8"),
            YV = 0;
          if (JV < 32) VV[xV.offset++] = 160 | JV, YV = 1;
          else if (JV < 256) VV[xV.offset++] = 217, VV[xV.offset++] = JV, YV = 2;
          else if (JV < 65536) VV[xV.offset++] = 218, uV(VV, JV, xV), YV = 3;
          else {
            if (!(JV < 4294967296)) throw new Error("String too long");
            VV[xV.offset++] = 219, SV(VV, JV, xV), YV = 5
          }
          return mV(VV, eV, xV), YV + JV
        },
        number: function VV(eV, xV, JV) {
          return isNaN(xV) ? VV(eV, 0, JV) : isFinite(xV) ? xV !== (0 | xV) ? Math.abs(xV) <= 34028235e31 && (hV[0] = xV, Math.abs(Math.abs(hV[0]) - Math.abs(xV)) < 1e-4) ? (eV[JV.offset++] = 202, OV(eV, xV, JV), 5) : (eV[JV.offset++] = 203, Ve(eV, xV, JV), 9) : xV >= 0 ? xV < 128 ? (eV[JV.offset++] = 255 & xV, 1) : xV < 256 ? (eV[JV.offset++] = 204, eV[JV.offset++] = 255 & xV, 2) : xV < 65536 ? (eV[JV.offset++] = 205, uV(eV, xV, JV), 3) : xV < 4294967296 ? (eV[JV.offset++] = 206, SV(eV, xV, JV), 5) : (eV[JV.offset++] = 207, dV(eV, xV, JV), 9) : xV >= -32 ? (eV[JV.offset++] = 224 | xV + 32, 1) : xV >= -128 ? (eV[JV.offset++] = 208, KV(eV, xV, JV), 2) : xV >= -32768 ? (eV[JV.offset++] = 209, HV(eV, xV, JV), 3) : xV >= -2147483648 ? (eV[JV.offset++] = 210, sV(eV, xV, JV), 5) : (eV[JV.offset++] = 211, IV(eV, xV, JV), 9) : VV(eV, xV > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, JV)
        },
        utf8Write: mV,
        utf8Length: fV
      },
      xe = new ArrayBuffer(8),
      Je = new Int32Array(xe),
      Ye = new Float32Array(xe),
      Ue = new Float64Array(xe),
      ye = new BigUint64Array(xe),
      pe = new BigInt64Array(xe);

    function Qe(VV, eV, xV) {
      xV > VV.length - eV.offset && (xV = VV.length - eV.offset);
      for (var JV = "", YV = 0, UV = eV.offset, yV = eV.offset + xV; UV < yV; UV++) {
        var pV = VV[UV];
        if (0 !== (128 & pV))
          if (192 !== (224 & pV))
            if (224 !== (240 & pV)) {
              if (240 !== (248 & pV)) {
                console.error("decode.utf8Read(): Invalid byte " + pV + " at offset " + UV + ". Skip to end of string: " + (eV.offset + xV));
                break
              }(YV = (7 & pV) << 18 | (63 & VV[++UV]) << 12 | (63 & VV[++UV]) << 6 | 63 & VV[++UV]) >= 65536 ? (YV -= 65536, JV += String.fromCharCode(55296 + (YV >>> 10), 56320 + (1023 & YV))) : JV += String.fromCharCode(YV)
            } else JV += String.fromCharCode((15 & pV) << 12 | (63 & VV[++UV]) << 6 | 63 & VV[++UV]);
        else JV += String.fromCharCode((31 & pV) << 6 | 63 & VV[++UV]);
        else JV += String.fromCharCode(pV)
      }
      return eV.offset += xV, JV
    }

    function ne(VV, eV) {
      return we(VV, eV) << 24 >> 24
    }

    function we(VV, eV) {
      return VV[eV.offset++]
    }

    function Ze(VV, eV) {
      return ve(VV, eV) << 16 >> 16
    }

    function ve(VV, eV) {
      return VV[eV.offset++] | VV[eV.offset++] << 8
    }

    function re(VV, eV) {
      return VV[eV.offset++] | VV[eV.offset++] << 8 | VV[eV.offset++] << 16 | VV[eV.offset++] << 24
    }

    function ke(VV, eV) {
      return re(VV, eV) >>> 0
    }

    function be(VV, eV) {
      return Je[0] = re(VV, eV), Ye[0]
    }

    function Ee(VV, eV) {
      return Je[0] = re(VV, eV), Je[1] = re(VV, eV), Ue[0]
    }

    function Be(VV, eV) {
      const xV = ke(VV, eV);
      return re(VV, eV) * Math.pow(2, 32) + xV
    }

    function je(VV, eV) {
      const xV = ke(VV, eV);
      return ke(VV, eV) * Math.pow(2, 32) + xV
    }
    const qe = {
        utf8Read: Qe,
        int8: ne,
        uint8: we,
        int16: Ze,
        uint16: ve,
        int32: re,
        uint32: ke,
        float32: be,
        float64: Ee,
        int64: Be,
        uint64: je,
        bigint64: function(VV, eV) {
          return Je[0] = re(VV, eV), Je[1] = re(VV, eV), pe[0]
        },
        biguint64: function(VV, eV) {
          return Je[0] = re(VV, eV), Je[1] = re(VV, eV), ye[0]
        },
        boolean: function(VV, eV) {
          return we(VV, eV) > 0
        },
        string: function(VV, eV) {
          const xV = VV[eV.offset++];
          let JV;
          return xV < 192 ? JV = 31 & xV : 217 === xV ? JV = we(VV, eV) : 218 === xV ? JV = ve(VV, eV) : 219 === xV && (JV = ke(VV, eV)), Qe(VV, eV, JV)
        },
        number: function(VV, eV) {
          const xV = VV[eV.offset++];
          return xV < 128 ? xV : 202 === xV ? be(VV, eV) : 203 === xV ? Ee(VV, eV) : 204 === xV ? we(VV, eV) : 205 === xV ? ve(VV, eV) : 206 === xV ? ke(VV, eV) : 207 === xV ? je(VV, eV) : 208 === xV ? ne(VV, eV) : 209 === xV ? Ze(VV, eV) : 210 === xV ? re(VV, eV) : 211 === xV ? Be(VV, eV) : xV > 223 ? -1 * (255 - xV + 1) : void 0
        },
        stringCheck: function(VV, eV) {
          const xV = VV[eV.offset];
          return xV < 192 && xV > 160 || 217 === xV || 218 === xV || 219 === xV
        }
      },
      te = {},
      Fe = new Map;

    function Te(VV, eV) {
      eV.constructor && (Object.prototype.hasOwnProperty.call(eV, "constructor") && null == eV.constructor[Symbol.metadata] && UV(eV.constructor), Fe.set(eV.constructor, VV), te[VV] = eV), eV.encode && (ee[VV] = eV.encode), eV.decode && (qe[VV] = eV.decode)
    }

    function Pe(VV) {
      for (const eV in VV) Te(eV, VV[eV]);
      return VV => tJ(VV)
    }
    const Ae = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function Ne() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Xe(VV) {
      return VV._stream ??= Ne()
    }

    function Me(VV, eV, xV) {
      0 === eV.activeViews.size && Xe(VV).broadcastPending.add(xV)
    }

    function ze(VV, eV, xV, JV) {
      const UV = VV._stream;
      if (void 0 === UV) return !0;
      let yV = !1;
      return UV.broadcastPending.delete(JV) ? yV = !0 : UV.sentBroadcast.delete(JV) && UV.broadcastDeletes.add(JV), eV.forEachActiveView((VV => {
        const eV = UV.pendingByView.get(VV.id);
        if (eV?.has(JV)) return eV.delete(JV), void(yV = !0);
        const pV = UV.sentByView.get(VV.id);
        if (pV?.has(JV)) {
          pV.delete(JV);
          let eV = VV.changes.get(xV);
          void 0 === eV && (eV = new Map, VV.changes.set(xV, eV)), eV.set(JV, YV.DELETE)
        }
      })), yV
    }

    function Ge(VV, eV) {
      const xV = VV._stream?.pendingByView;
      if (void 0 === xV) return !1;
      for (const [JV, YV] of xV)
        if (YV.size > 0 && void 0 !== eV.activeViews.get(JV)?.deref()) return !0;
      return !1
    }

    function We(VV) {
      const eV = VV._stream;
      return void 0 !== eV && (eV.broadcastPending.size > 0 || eV.broadcastDeletes.size > 0)
    }

    function Re(VV, eV, xV) {
      const JV = Xe(VV);
      let YV = JV.pendingByView.get(eV);
      void 0 === YV && (YV = new Set, JV.pendingByView.set(eV, YV)), YV.add(xV)
    }

    function ge(VV, eV) {
      const xV = VV._stream;
      void 0 !== xV && (xV.pendingByView.delete(eV), xV.sentByView.delete(eV), xV.priorityByView?.delete(eV))
    }
    const De = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function ie(VV) {
      if (null == VV || "object" !== typeof VV) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: eV,
        max: xV
      } = VV;
      if ("number" !== typeof eV || "number" !== typeof xV || !(xV > eV) || !Number.isFinite(eV) || !Number.isFinite(xV)) throw new Error(`t.quantized(): require finite min < max (got min=${eV}, max=${xV}).`);
      const JV = VV.bits ?? 16;
      if (8 !== JV && 16 !== JV && 32 !== JV) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${JV}).`);
      const YV = VV.mode ?? "clamp";
      if ("clamp" !== YV && "wrap" !== YV) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(YV)}).`);
      const UV = "wrap" === YV,
        yV = Math.pow(2, JV);
      return {
        min: eV,
        max: xV,
        bits: JV,
        wrap: UV,
        wire: De[JV],
        range: xV - eV,
        span: UV ? yV : eV === -xV ? yV - 2 : yV - 1
      }
    }

    function Ce(VV) {
      return null !== VV && "object" === typeof VV && void 0 !== VV.quantized
    }

    function ae(VV, eV) {
      if (VV.wrap) {
        if (!Number.isFinite(eV)) return 0;
        const xV = VV.range;
        let JV = (eV - VV.min) % xV;
        JV < 0 && (JV += xV);
        const YV = VV.span;
        return Math.floor(JV / xV * YV + .5) % YV
      }
      if (eV !== eV) return 0;
      const xV = eV < VV.min ? VV.min : eV > VV.max ? VV.max : eV;
      return Math.floor((xV - VV.min) / VV.range * VV.span + .5)
    }

    function oe(VV, eV) {
      return VV.min + eV / VV.span * VV.range
    }

    function ce(VV) {
      const eV = ee[VV.wire];
      return (xV, JV, YV) => eV(xV, ae(VV, JV), YV)
    }
    class he {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(VV) {
        const eV = Object.getPrototypeOf(VV);
        if (eV !== zJ) {
          let xV = he.inheritedTypes.get(eV);
          xV || (xV = new Set, he.inheritedTypes.set(eV, xV)), xV.add(VV)
        }
      }
      static cache(VV) {
        let eV = he.cachedContexts.get(VV);
        return eV || (eV = new he(VV), he.cachedContexts.set(VV, eV)), eV
      }
      constructor(VV) {
        VV && this.discoverTypes(VV)
      }
      has(VV) {
        return this.schemas.has(VV)
      }
      get(VV) {
        return this.types[VV]
      }
      add(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(VV) && (this.types[eV] = VV, null == VV[Symbol.metadata] && ue.initialize(VV), this.schemas.set(VV, eV), !0)
      }
      getTypeId(VV) {
        return this.schemas.get(VV)
      }
      discoverTypes(VV) {
        if (!this.add(VV)) return;
        he.inheritedTypes.get(VV)?.forEach((VV => {
          this.discoverTypes(VV)
        }));
        let eV = VV;
        for (;
          (eV = Object.getPrototypeOf(eV)) && eV !== zJ && eV !== Function.prototype;) this.discoverTypes(eV);
        const xV = VV[Symbol.metadata];
        (xV[zV] || xV[iV]) && (this.hasFilters = !0);
        for (const JV in xV) {
          const VV = xV[JV].type;
          if ("string" !== typeof VV && !Ce(VV))
            if ("function" === typeof VV) this.discoverTypes(VV);
            else {
              const eV = Object.values(VV)[0];
              if ("string" === typeof eV) continue;
              this.discoverTypes(eV)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function le(VV) {
      const eV = fe(VV);
      return eV ? {
        complexTypeKlass: te[eV],
        childType: VV[eV]
      } : {
        complexTypeKlass: !1,
        childType: VV
      }
    }

    function Le(VV, eV) {
      const xV = me(VV),
        JV = fe(xV),
        YV = JV && fe(xV[JV]);
      if (YV) throw new Error(`${eV?`${eV}: `:""}@colyseus/schema: nested collections are not supported ("${JV}" of "${YV}"). Collections can only hold primitive types or Schema classes, wrap the inner ${YV} in a Schema class.`);
      return xV
    }

    function fe(VV) {
      return "object" === typeof VV && null !== VV ? Object.keys(VV).find((VV => void 0 !== te[VV])) : void 0
    }

    function me(VV) {
      if ("object" !== typeof VV || null === VV) return VV;
      if (Array.isArray(VV)) return {
        array: me(VV[0])
      };
      const eV = function(VV) {
        const eV = Object.keys(VV),
          xV = eV.filter((VV => /\d+/.test(VV)));
        if (xV.length > 0 && xV.length === eV.length / 2 && VV[VV[xV[0]]] == xV[0]) return "number";
        if (eV.length > 0 && eV.every((eV => VV[eV] === eV))) return "string"
      }(VV);
      if (eV) return eV;
      if (Ce(VV)) return "string" === typeof VV.quantized.wire ? VV : {
        quantized: ie(VV.quantized)
      };
      if (void 0 !== VV.type) return me(VV.type);
      const xV = fe(VV);
      return xV && (VV[xV] = me(VV[xV])), VV
    }
    const Ke = [MV, WV, RV, gV, DV, iV, NV];

    function He(VV, eV, xV) {
      VV[eV] || Object.defineProperty(VV, eV, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), VV[eV].push(xV)
    }
    const ue = {
        addField(VV, eV, xV, JV, YV) {
          if (eV >= 63) throw new Error(`Can't define field '${xV}'.\nSchema instances may only have up to 63 fields.`);
          VV[eV] = Object.assign(VV[eV] || {}, {
            type: JV,
            index: eV,
            name: xV
          }), Object.defineProperty(VV, PV, {
            value: VV[PV] || {},
            enumerable: !1,
            configurable: !0
          }), VV[PV][xV] = YV || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(VV, XV, {
            value: eV,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(VV, xV, {
            value: eV,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof VV[eV].type || Ce(VV[eV].type) || (void 0 === VV[MV] && Object.defineProperty(VV, MV, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), VV[MV].push(eV));
          const UV = VV[eV].type;
          if (UV && "object" === typeof UV && void 0 !== UV.stream) {
            if (void 0 !== UV.array) throw new Error(Ae);
            VV[eV].stream = !0, VV[iV] || Object.defineProperty(VV, iV, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), VV[iV].includes(eV) || VV[iV].push(eV);
            const YV = JV?.priority;
            "function" === typeof YV && ue.setStreamPriority(VV, xV, YV)
          }
        },
        setTag(VV, eV, xV) {
          const JV = VV[eV];
          if (VV[JV].tag = xV, VV[zV] || (Object.defineProperty(VV, zV, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(VV, GV, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), VV[zV].push(JV), xV < 0) VV[GV][xV] || (VV[GV][xV] = []), VV[GV][xV].push(JV);
          else
            for (let YV = xV; YV > 0; YV &= YV - 1) {
              const eV = YV & -YV;
              VV[GV][eV] || (VV[GV][eV] = []), VV[GV][eV].push(JV)
            }
        },
        setUnreliable(VV, eV) {
          const xV = VV[eV];
          if ("string" !== typeof VV[xV].type) throw new Error(`@unreliable cannot be applied to ref-type field "${eV}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          VV[xV].unreliable = !0, VV[WV] || Object.defineProperty(VV, WV, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), VV[WV].push(xV)
        },
        setPatchOnly(VV, eV) {
          const xV = VV[eV];
          if (VV[xV].fullStateOnly) throw new Error(`field "${eV}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          VV[xV].patchOnly = !0, He(VV, RV, xV), He(VV, gV, xV)
        },
        setDeprecated(VV, eV) {
          const xV = VV[eV];
          VV[xV].deprecated = !0, He(VV, gV, xV), Object.defineProperty(VV, xV, {
            value: VV[xV],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(VV, eV) {
          const xV = VV[eV];
          if (VV[xV].patchOnly) throw new Error(`field "${eV}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          VV[xV].fullStateOnly = !0, He(VV, DV, xV)
        },
        setStream(VV, eV) {
          const xV = VV[eV];
          VV[xV].stream = !0, VV[iV] || Object.defineProperty(VV, iV, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), VV[iV].push(xV)
        },
        setStreamPriority(VV, eV, xV) {
          const JV = VV[eV];
          VV[CV] || Object.defineProperty(VV, CV, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), VV[CV][JV] = xV
        },
        getStreamPriority: (VV, eV) => VV?.[CV]?.[eV],
        defineField(VV, eV, xV, JV, YV) {
          const UV = Le(YV, `${VV.name}.${JV}`),
            {
              complexTypeKlass: yV,
              childType: pV
            } = le(UV);
          ue.addField(eV, xV, JV, UV, TJ(JV, xV, pV, yV)), eV[PV][JV] && Object.defineProperty(VV.prototype, JV, eV[PV][JV]), ("string" === typeof UV || Ce(UV)) && (eV[NV] || Object.defineProperty(eV, NV, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), eV[NV][xV] = "string" === typeof UV ? ee[UV] : ce(UV.quantized))
        },
        setFields(VV, eV) {
          const xV = VV.prototype.constructor;
          he.register(xV);
          const JV = Object.getPrototypeOf(xV),
            YV = JV && JV[Symbol.metadata],
            UV = ue.initialize(xV);
          xV[QV] || (xV[QV] = zJ[QV]), xV[nV] || (xV[nV] = zJ[nV]), xV[wV] || (xV[wV] = zJ[wV]), xV.prototype.toJSON || (xV.prototype.toJSON = zJ.prototype.toJSON);
          let yV = UV[XV] ?? (YV && YV[XV]) ?? -1;
          yV++, UV[NV] || Object.defineProperty(UV, NV, {
            value: YV?.[NV] ? [...YV[NV]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const pV in eV) {
            if (void 0 !== UV[pV]) throw new Error(`@colyseus/schema: Duplicate '${pV}' definition on '${xV.name||"(anonymous)"}'.`);
            ue.defineField(xV, UV, yV, pV, eV[pV]), yV++
          }
          return VV
        },
        isDeprecated: (VV, eV) => !0 === VV[eV].deprecated,
        initialize(VV) {
          const eV = Object.getPrototypeOf(VV),
            xV = eV[Symbol.metadata];
          let JV = VV[Symbol.metadata] ?? Object.create(null);
          if (eV !== zJ && JV === xV && (JV = Object.create(null), xV)) {
            Object.setPrototypeOf(JV, xV), Object.defineProperty(JV, XV, {
              value: xV[XV],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== xV[zV] && (Object.defineProperty(JV, zV, {
              value: [...xV[zV]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(JV, GV, {
              value: {
                ...xV[GV]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const VV of Ke) {
              const eV = xV[VV];
              void 0 !== eV && Object.defineProperty(JV, VV, {
                value: [...eV],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(JV, PV, {
              value: {
                ...xV[PV]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(VV, Symbol.metadata, {
            value: JV,
            writable: !1,
            configurable: !0
          }), JV
        },
        isValidInstance: VV => VV.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(VV.constructor[Symbol.metadata], XV),
        getFields(VV) {
          const eV = VV[Symbol.metadata],
            xV = {};
          for (let JV = 0; JV <= eV[XV]; JV++) xV[eV[JV].name] = eV[JV].type;
          return xV
        },
        hasViewTagAtIndex: (VV, eV) => VV?.[zV]?.includes(eV),
        hasUnreliableAtIndex: (VV, eV) => VV?.[WV]?.includes(eV),
        hasPatchOnlyAtIndex: (VV, eV) => VV?.[RV]?.includes(eV),
        hasFullStateOnlyAtIndex: (VV, eV) => VV?.[DV]?.includes(eV),
        hasStreamAtIndex: (VV, eV) => VV?.[iV]?.includes(eV)
      },
      se = (VV, eV, xV) => VV(eV, xV);
    class Se {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(VV) {
        this.ops = new Uint8Array(Math.max(VV + 1, 1))
      }
      record(VV, eV) {
        const xV = this.ops[VV];
        0 === xV ? this.ops[VV] = eV : (xV === YV.DELETE || xV === YV.ADD && eV === YV.DELETE_AND_ADD) && (this.ops[VV] = YV.DELETE_AND_ADD), VV < 32 ? this.dirtyLow |= 1 << VV : this.dirtyHigh |= 1 << VV - 32
      }
      recordDelete(VV, eV) {
        this.ops[VV] = eV, VV < 32 ? this.dirtyLow |= 1 << VV : this.dirtyHigh |= 1 << VV - 32
      }
      recordRaw(VV, eV) {
        this.record(VV, eV)
      }
      operationAt(VV) {
        const eV = this.ops[VV];
        return 0 === eV ? void 0 : eV
      }
      setOperationAt(VV, eV) {
        this.ops[VV] = eV
      }
      forEach(VV) {
        this.forEachWithCtx(VV, se)
      }
      forEachWithCtx(VV, eV) {
        let xV = this.dirtyLow,
          JV = this.dirtyHigh;
        const YV = this.ops;
        for (; 0 !== xV;) {
          const JV = xV & -xV,
            UV = 31 - Math.clz32(JV);
          xV ^= JV, eV(VV, UV, YV[UV])
        }
        for (; 0 !== JV;) {
          const xV = JV & -JV,
            UV = 31 - Math.clz32(xV) + 32;
          JV ^= xV, eV(VV, UV, YV[UV])
        }
      }
      size() {
        return de(this.dirtyLow) + de(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Ie {
      Jb = new Map;
      pureOps = [];
      record(VV, eV) {
        const xV = this.Jb.get(VV);
        void 0 === xV ? this.Jb.set(VV, eV) : (xV === YV.DELETE || xV === YV.ADD && eV === YV.DELETE_AND_ADD) && this.Jb.set(VV, YV.DELETE_AND_ADD)
      }
      recordDelete(VV, eV) {
        this.Jb.set(VV, eV)
      }
      recordRaw(VV, eV) {
        this.Jb.set(VV, eV)
      }
      recordPure(VV) {
        this.pureOps.push([this.Jb.size, VV])
      }
      operationAt(VV) {
        return this.Jb.get(VV)
      }
      setOperationAt(VV, eV) {
        this.Jb.has(VV) && this.Jb.set(VV, eV)
      }
      forEach(VV) {
        this.forEachWithCtx(VV, se)
      }
      forEachWithCtx(VV, eV) {
        const xV = this.pureOps;
        if (xV.length > 0) {
          let JV = 0,
            YV = 0;
          for (const [UV, yV] of this.Jb) {
            for (; JV < xV.length && xV[JV][0] <= YV;) {
              const YV = xV[JV++][1];
              eV(VV, -YV, YV)
            }
            eV(VV, UV, yV), YV++
          }
          for (; JV < xV.length;) {
            const YV = xV[JV++][1];
            eV(VV, -YV, YV)
          }
        } else
          for (const [JV, YV] of this.Jb) eV(VV, JV, YV)
      }
      size() {
        return this.Jb.size + this.pureOps.length
      }
      has() {
        return this.Jb.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Jb.clear(), this.pureOps.length = 0
      }
      shift(VV) {
        const eV = new Map;
        for (const [xV, JV] of this.Jb) eV.set(xV + VV, JV);
        this.Jb = eV
      }
    }

    function de(VV) {
      return 16843009 * ((VV = (858993459 & (VV -= VV >>> 1 & 1431655765)) + (VV >>> 2 & 858993459)) + (VV >>> 4) & 252645135) >>> 24
    }

    function Oe(VV) {
      if (void 0 === VV) return 0;
      let eV = 0;
      for (let xV = 0, JV = VV.length; xV < JV; xV++) {
        const JV = VV[xV];
        JV < 32 && (eV |= 1 << JV)
      }
      return eV
    }

    function Vx(VV) {
      const eV = VV.constructor;
      if (Object.prototype.hasOwnProperty.call(eV, AV)) return eV[AV];
      const xV = eV[Symbol.metadata],
        JV = ue.isValidInstance(VV),
        YV = (xV?.[zV]?.length ?? 0) > 0,
        UV = function(VV) {
          const eV = [],
            xV = [],
            JV = [],
            YV = [],
            UV = VV?.[XV];
          if (void 0 === UV) return {
            names: eV,
            types: xV,
            tags: JV,
            encoders: YV
          };
          const yV = VV[NV];
          for (let pV = 0; pV <= UV; pV++) {
            const UV = VV[pV];
            void 0 !== UV ? (eV[pV] = UV.name, xV[pV] = UV.type, JV[pV] = UV.tag, YV[pV] = yV?.[pV]) : (eV[pV] = void 0, xV[pV] = void 0, JV[pV] = void 0, YV[pV] = void 0)
          }
          return {
            names: eV,
            types: xV,
            tags: JV,
            encoders: YV
          }
        }(xV),
        yV = JV && !YV ? void 0 : eV[ZV],
        pV = {
          encoder: eV[nV],
          filter: yV,
          metadata: xV,
          isSchema: JV,
          filterBitmask: JV ? Oe(xV?.[zV]) : 0,
          hasAnyFullStateOnly: (xV?.[DV]?.length ?? 0) > 0,
          hasAnyUnreliable: (xV?.[WV]?.length ?? 0) > 0,
          hasAnyStream: (xV?.[iV]?.length ?? 0) > 0,
          hasAnyView: YV,
          fullStateOnlyBitmask: Oe(xV?.[DV]),
          unreliableBitmask: Oe(xV?.[WV]),
          streamBitmask: Oe(xV?.[iV]),
          names: UV.names,
          types: UV.types,
          tags: UV.tags,
          encoders: UV.encoders
        };
      return Object.defineProperty(eV, AV, {
        value: pV,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), pV
    }

    function ex(VV, eV) {
      if (void 0 !== VV.parentRef && eV(VV.parentRef, VV._parentIndex)) return !0;
      for (let xV = VV.extraParents; void 0 !== xV; xV = xV.next)
        if (eV(xV.ref, xV.index)) return !0;
      return !1
    }
    const xx = (VV, eV) => {
        VV.isFieldUnreliable(eV) ? VV.ensureUnreliableRecorder().record(eV, YV.ADD) : VV.record(eV, YV.ADD)
      },
      Jx = (VV, eV) => VV(eV);

    function Yx(VV, eV, xV) {
      const JV = VV.refTarget;
      if (void 0 !== JV[EV]) {
        if (VV.isPatchOnly) return;
        if (Array.isArray(JV.items)) {
          const VV = JV.items;
          for (let JV = 0, YV = VV.length; JV < YV; JV++) void 0 !== VV[JV] && xV(eV, JV)
        } else if (void 0 !== JV.journal)
          for (const [VV, YV] of JV.journal.keyByIndex) JV.$items.has(YV) && xV(eV, VV);
        else if (void 0 !== JV.$items)
          for (const VV of JV.$items.keys()) xV(eV, VV)
      } else {
        const YV = VV.metadata;
        if (!YV) return;
        const UV = YV[XV] ?? -1,
          yV = YV[gV],
          pV = VV.encDescriptor.names;
        for (let VV = 0; VV <= UV; VV++) {
          const YV = pV[VV];
          if (void 0 === YV) continue;
          if (yV && yV.includes(VV)) continue;
          const UV = JV[YV];
          void 0 !== UV && null !== UV && xV(eV, VV)
        }
      }
    }

    function Ux(VV, eV, xV, JV) {
      ! function(VV, eV, xV) {
        if (!eV) return;
        const JV = eV[bV],
          YV = !JV._isSchema;
        let UV;
        YV ? (eV = JV.parent, xV = JV.parentIndex, UV = eV?.[bV].metadata) : UV = JV.metadata;
        const yV = (UV?.[RV]?.includes(xV) ? Ax : 0) | (UV?.[DV]?.includes(xV) ? Nx : 0),
          pV = JV.flags & zx | yV,
          QV = VV.flags;
        VV.flags = QV | pV;
        pV & ~QV & Nx && (VV.reset(), VV.unreliableRecorder?.reset());
        const nV = VV.root?.types;
        if (!nV?.hasFilters) return;
        const wV = UV?.[zV]?.includes(xV) ?? !1,
          ZV = UV?.[iV]?.includes(xV) ?? !1,
          vV = JV.isFiltered || wV || ZV;
        if (VV.isFiltered = vV, ZV && !YV) {
          VV.isStreamCollection = !0;
          const eV = Xe(VV.ref);
          if (void 0 === eV.priority) {
            const VV = ue.getStreamPriority(UV, xV);
            void 0 !== VV && (eV.priority = VV)
          }
          VV.root?.registerStream(VV.ref)
        }
        if (vV) {
          const eV = px(VV);
          VV.isVisibilitySharedWithParent = JV.isFiltered && eV && !ZV && (!wV || YV && UV[xV].tag !== kJ)
        }
      }(VV, eV, xV), VV.isFullStateOnly || (VV.has() && VV.root?.enqueueChangeTree(VV), VV.unreliableRecorder?.has() && VV.root?.enqueueUnreliable(VV), VV.has() || VV.unreliableRecorder?.has() || VV.root?.enqueueChangeTree(VV))
    }

    function yx(VV) {
      const eV = VV.pendingFilterRefresh;
      for (let xV = 0; xV < eV.length; xV++) {
        const VV = eV[xV];
        0 !== (VV.flags & Mx) && Qx(VV)
      }
      eV.length = 0
    }

    function px(VV) {
      return VV._isSchema || "string" !== typeof VV.refTarget[EV]
    }

    function Qx(VV) {
      VV.flags &= ~Mx;
      const eV = VV.root;
      if (void 0 === eV || void 0 === VV.parentRef) return;
      const xV = px(VV);
      let JV = rx(VV, VV.parentRef, VV._parentIndex, xV);
      for (let UV = VV.extraParents; void 0 !== UV && JV !== vx; UV = UV.next) JV |= rx(VV, UV.ref, UV.index, xV);
      if (0 === JV) return;
      VV.isVisibilitySharedWithParent = 0 !== (JV & Zx);
      const YV = 0 === (JV & wx);
      YV !== VV.isFiltered && (VV.isFiltered = YV, YV || VV.isFullStateOnly || (VV.forEachLiveWithCtx(VV, xx), VV.has() && eV.enqueueChangeTree(VV), VV.unreliableRecorder?.has() && eV.enqueueUnreliable(VV)), VV.forEachChildWithCtx(VV, kx))
    }
    const nx = 1,
      wx = 2,
      Zx = 4,
      vx = nx | wx | Zx;

    function rx(VV, eV, xV, JV) {
      const YV = eV[bV];
      if (YV.root !== VV.root || ! function(VV, eV, xV) {
          const JV = eV.refTarget;
          if (eV.isArray) {
            const eV = JV.items,
              YV = eV[xV];
            if (void 0 !== YV && YV[bV] === VV) return !0;
            for (let xV = 0, JV = eV.length; xV < JV; xV++) {
              const JV = eV[xV];
              if (void 0 !== JV && JV[bV] === VV) return !0
            }
            return !1
          }
          const YV = eV.getValue(xV);
          return void 0 !== YV && YV[bV] === VV
        }(VV, YV, xV)) return 0;
      YV.flags & Mx && Qx(YV);
      let UV = nx;
      if (YV._isSchema) {
        void 0 !== YV.encDescriptor.tags[xV] || YV.isFieldStream(xV) || (YV.isFiltered ? JV && (UV |= Zx) : UV |= wx)
      } else if (YV.isFiltered) {
        if (JV && !YV.isStreamCollection) {
          const VV = YV.parent?.[bV];
          (VV?._isSchema ? VV.encDescriptor.tags[YV.parentIndex] : void 0) !== kJ && (UV |= Zx)
        }
      } else UV |= wx;
      return UV
    }
    const kx = (VV, eV, xV) => {
      Qx(eV)
    };

    function bx(VV, eV, xV, JV) {
      if (VV.addParent(eV, JV), !xV) return;
      const YV = xV.add(VV);
      xV !== VV.root && (VV.root = xV, Ux(VV, eV, JV));
      const UV = eV?.[bV];
      if (void 0 !== UV && void 0 !== UV.subscribedViews && void 0 !== eV[EV] && function(VV, eV, xV, JV) {
          const YV = VV.subscribedViews;
          if (void 0 === YV) return;
          const UV = VV.isStreamCollection,
            yV = UV ? VV.ref : void 0,
            pV = UV ? void 0 : xV[bV];
          for (let QV = 0, nV = YV.length; QV < nV; QV++) {
            let VV = YV[QV];
            for (; 0 !== VV;) {
              const xV = VV & -VV;
              VV ^= xV;
              const nV = 32 * QV + (31 - Math.clz32(xV)),
                wV = JV.activeViews.get(nV),
                ZV = wV?.deref();
              void 0 !== ZV ? UV ? Re(yV, nV, eV) : void 0 !== pV && ZV.markVisible(pV) : YV[QV] &= ~xV
            }
          }
        }(UV, JV, VV.ref, xV), YV) {
        let eV = qx[tx];
        void 0 === eV && (eV = {
          parentRef: void 0,
          root: void 0
        }, qx[tx] = eV), eV.parentRef = VV.ref, eV.root = xV, tx++, Bx(VV, eV, Fx), tx--
      }
    }

    function Ex(VV, eV, xV) {
      VV(eV, xV)
    }

    function Bx(VV, eV, xV) {
      const JV = VV.refTarget;
      if (JV[EV]) {
        if ("string" !== typeof JV[EV]) {
          const VV = JV.items;
          if (void 0 !== VV)
            for (let JV = 0, YV = VV.length; JV < YV; JV++) {
              const YV = VV[JV];
              YV && xV(eV, YV[bV], JV)
            } else {
              const VV = JV.$items,
                YV = JV._collectionIndexes;
              for (const JV of VV.keys()) {
                const UV = VV.get(JV);
                UV && xV(eV, UV[bV], YV?.[JV] ?? JV)
              }
            }
        }
      } else {
        const YV = VV.metadata,
          UV = YV?.[MV];
        if (!UV) return;
        const yV = VV.encDescriptor.names;
        for (let VV = 0, pV = UV.length; VV < pV; VV++) {
          const YV = UV[VV],
            pV = JV[yV[YV]];
          pV && xV(eV, pV[bV], YV)
        }
      }
    }

    function jx(VV, eV, xV) {
      eV.root !== VV ? eV.setRoot(VV) : VV.add(eV)
    }
    const qx = [];
    let tx = 0;

    function Fx(VV, eV, xV) {
      if (eV.root === VV.root) return VV.root.add(eV), void VV.root.moveNextToParent(eV);
      eV.setParent(VV.parentRef, VV.root, xV)
    }

    function Tx(VV, eV, xV) {
      const JV = (3 & xV) << 3;
      return xV < 4 ? VV >>> JV & 255 : eV >>> JV & 255
    }
    const Px = (VV, eV, xV) => VV(eV, xV);
    const Ax = 16,
      Nx = 32,
      Xx = 128,
      Mx = 256,
      zx = Ax | Nx;
    class Gx {
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
      set isFiltered(VV) {
        this.flags = VV ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(VV) {
        this.flags = VV ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(VV) {
        this.flags = VV ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(VV) {
        this.flags = VV ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & Ax)
      }
      set isPatchOnly(VV) {
        this.flags = VV ? this.flags | Ax : this.flags & ~Ax
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & Nx)
      }
      set isFullStateOnly(VV) {
        this.flags = VV ? this.flags | Nx : this.flags & ~Nx
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(VV) {
        this.flags = VV ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Xx)
      }
      set needsRestage(VV) {
        this.flags = VV ? this.flags | Xx : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Se(this.metadata?.[XV] ?? 0) : new Ie), this.unreliableRecorder
      }
      isFieldUnreliable(VV) {
        const eV = this.encDescriptor;
        return !!eV.hasAnyUnreliable && (VV < 32 ? 0 !== (eV.unreliableBitmask & 1 << VV) : ue.hasUnreliableAtIndex(this.metadata, VV))
      }
      isFieldFullStateOnly(VV) {
        if (this.isFullStateOnly) return !0;
        const eV = this.encDescriptor;
        return !!eV.hasAnyFullStateOnly && (VV < 32 ? 0 !== (eV.fullStateOnlyBitmask & 1 << VV) : ue.hasFullStateOnlyAtIndex(this.metadata, VV))
      }
      isFieldStream(VV) {
        const eV = this.encDescriptor;
        return !!eV.hasAnyStream && (VV < 32 ? 0 !== (eV.streamBitmask & 1 << VV) : ue.hasStreamAtIndex(this.metadata, VV))
      }
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV;
        this.ref = VV, this.refTarget = eV;
        const xV = Vx(VV);
        this.encDescriptor = xV, this.metadata = xV.metadata;
        const JV = xV.isSchema;
        if (this._isSchema = JV, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, JV) {
          const VV = this.metadata?.[XV] ?? 0;
          VV > 7 && (this.ops = new Uint8Array(VV + 1))
        } else this.collDirty = new Map
      }
      _opAt(VV) {
        const eV = this.ops;
        if (void 0 !== eV) return eV[VV];
        const xV = (3 & VV) << 3;
        return VV < 4 ? this.opsLow >>> xV & 255 : this.opsHigh >>> xV & 255
      }
      _opPut(VV, eV) {
        const xV = this.ops;
        if (void 0 !== xV) return void(xV[VV] = eV);
        const JV = (3 & VV) << 3,
          YV = ~(255 << JV);
        VV < 4 ? this.opsLow = this.opsLow & YV | eV << JV : this.opsHigh = this.opsHigh & YV | eV << JV
      }
      _markDirty(VV) {
        VV < 32 ? this.dirtyLow |= 1 << VV : this.dirtyHigh |= 1 << VV - 32
      }
      record(VV, eV) {
        if (this._isSchema) {
          const xV = this._opAt(VV);
          0 === xV ? this._opPut(VV, eV) : (xV === YV.DELETE || xV === YV.ADD && eV === YV.DELETE_AND_ADD) && this._opPut(VV, YV.DELETE_AND_ADD), this._markDirty(VV)
        } else {
          const xV = this.collDirty,
            JV = xV.get(VV);
          let UV;
          UV = void 0 === JV ? eV : JV === YV.DELETE || JV === YV.ADD && eV === YV.DELETE_AND_ADD ? YV.DELETE_AND_ADD : JV, xV.set(VV, UV)
        }
      }
      recordDelete(VV, eV) {
        this._isSchema ? (this._opPut(VV, eV), this._markDirty(VV)) : this.collDirty.set(VV, eV)
      }
      recordRaw(VV, eV) {
        this._isSchema ? (this._opPut(VV, eV), this._markDirty(VV)) : this.collDirty.set(VV, eV)
      }
      recordPure(VV) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, VV])
      }
      operationAt(VV) {
        if (this._isSchema) {
          const eV = this._opAt(VV);
          return 0 === eV ? void 0 : eV
        }
        return this.collDirty.get(VV)
      }
      setOperationAt(VV, eV) {
        if (this._isSchema) this._opPut(VV, eV);
        else {
          const xV = this.collDirty;
          xV.has(VV) && xV.set(VV, eV)
        }
      }
      forEach(VV) {
        this.forEachWithCtx(VV, Px)
      }
      forEachWithCtx(VV, eV) {
        if (this._isSchema) {
          let xV = this.dirtyLow,
            JV = this.dirtyHigh;
          const YV = this.ops;
          if (void 0 !== YV) {
            for (; 0 !== xV;) {
              const JV = xV & -xV,
                UV = 31 - Math.clz32(JV);
              xV ^= JV, eV(VV, UV, YV[UV])
            }
            for (; 0 !== JV;) {
              const xV = JV & -JV,
                UV = 31 - Math.clz32(xV) + 32;
              JV ^= xV, eV(VV, UV, YV[UV])
            }
          } else {
            const JV = this.opsLow,
              YV = this.opsHigh;
            for (; 0 !== xV;) {
              const UV = xV & -xV,
                yV = 31 - Math.clz32(UV);
              xV ^= UV, eV(VV, yV, Tx(JV, YV, yV))
            }
          }
          return
        }
        const xV = this.collDirty,
          JV = this.collPureOps;
        if (void 0 !== JV && JV.length > 0) {
          let YV = 0,
            UV = 0;
          for (const [yV, pV] of xV) {
            for (; YV < JV.length && JV[YV][0] <= UV;) {
              const xV = JV[YV++][1];
              eV(VV, -xV, xV)
            }
            eV(VV, yV, pV), UV++
          }
          for (; YV < JV.length;) {
            const xV = JV[YV++][1];
            eV(VV, -xV, xV)
          }
        } else
          for (const [YV, UV] of xV) eV(VV, YV, UV)
      }
      size() {
        return this._isSchema ? de(this.dirtyLow) + de(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(VV, eV) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const xV = this.collDirty,
          JV = new Map,
          UV = !this.paused && !this.isFullStateOnly;
        if (VV > 0)
          for (const [YV, yV] of xV) YV < VV && JV.set(YV, yV);
        if (UV)
          for (let yV = 0; yV < eV; yV++) JV.set(VV + yV, YV.ADD);
        for (const [YV, yV] of xV) YV >= VV && JV.set(YV + eV, yV);
        this.collDirty = JV, UV && this.root?.enqueueChangeTree(this)
      }
      removeAt(VV, eV) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const xV = this.collDirty,
          JV = VV + eV;
        let YV = !1;
        for (const yV of xV.keys())
          if (yV >= JV) {
            YV = !0;
            break
          } if (!YV) {
          for (let eV = VV; eV < JV; eV++) xV.delete(eV);
          return
        }
        const UV = new Map;
        for (const [yV, pV] of xV) yV < VV ? UV.set(yV, pV) : yV >= JV && UV.set(yV - eV, pV);
        this.collDirty = UV
      }
      unshift(VV) {
        this.insertAt(0, VV)
      }
      setRoot(VV) {
        ! function(VV, eV) {
          VV.root = eV;
          const xV = eV.add(VV);
          Ux(VV, VV.parent, VV.parentIndex), xV && Bx(VV, eV, jx)
        }(this, VV)
      }
      setParent(VV, eV, xV) {
        bx(this, VV, eV, xV)
      }
      forEachChild(VV) {
        Bx(this, VV, Ex)
      }
      forEachChildWithCtx(VV, eV) {
        Bx(this, VV, eV)
      }
      forEachLive(VV) {
        Yx(this, VV, Jx)
      }
      forEachLiveWithCtx(VV, eV) {
        Yx(this, VV, eV)
      }
      operation(VV) {
        this.paused || this.isFullStateOnly || (this.recordPure(VV), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(VV, eV, xV) {
        if (!this.paused && !this.isFieldFullStateOnly(VV)) {
          if (this.isFieldUnreliable(VV) && !this.isNew) {
            const JV = this.ensureUnreliableRecorder();
            return xV ? JV.recordRaw(VV, eV) : JV.record(VV, eV), void this.root?.enqueueUnreliable(this)
          }
          xV ? this.recordRaw(VV, eV) : this.record(VV, eV), this.root?.enqueueChangeTree(this)
        }
      }
      change(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YV.ADD;
        this._routeAndRecord(VV, eV, !1)
      }
      indexedOperation(VV, eV) {
        this._routeAndRecord(VV, eV, !0)
      }
      getChange(VV) {
        return this.operationAt(VV)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(VV) {
        const eV = this.paused;
        this.paused = !0;
        try {
          return VV()
        } finally {
          this.paused = eV
        }
      }
      markDirty(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YV.ADD;
        const xV = this.paused;
        this.paused = !1;
        try {
          this.change(VV, eV)
        } finally {
          this.paused = xV
        }
      }
      getValue(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[vV](VV, eV)
      }
      delete(VV, eV) {
        if (void 0 === VV) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${VV}'`)
          } catch (UY) {
            console.warn(UY)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(VV)) return this.getValue(VV);
        const xV = this.isFieldUnreliable(VV) && !this.isNew;
        xV ? this.ensureUnreliableRecorder().recordDelete(VV, eV ?? YV.DELETE) : this.recordDelete(VV, eV ?? YV.DELETE);
        const JV = this.getValue(VV);
        return JV && JV[bV] && this.root?.remove(JV[bV]), xV ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), JV
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[jV]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[jV]?.()
      }
      discard() {
        this._isSchema || this.refTarget[jV]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const VV = VV => {
          if (VV < 0) return;
          const eV = this.getValue(VV);
          eV && eV[bV] && eV[bV].discardAll()
        };
        this.forEach(VV), this.unreliableRecorder?.forEach(VV), this.discard()
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
      addParent(VV, eV) {
        ! function(VV, eV, xV) {
          if (VV.parentRef) {
            if (VV.parentRef[bV] === eV[bV]) return void(VV._parentIndex = xV);
            if (ex(VV, ((VV, xV) => VV[bV] === eV[bV]))) return void(VV._parentIndex = xV)
          }
          void 0 === VV.parentRef ? (VV.parentRef = eV, VV._parentIndex = xV) : (VV.extraParents = {
            ref: VV.parentRef,
            index: VV._parentIndex,
            next: VV.extraParents
          }, VV.parentRef = eV, VV._parentIndex = xV)
        }(this, VV, eV)
      }
      setParentIndex(VV, eV) {
        ! function(VV, eV, xV) {
          if (void 0 !== VV.extraParents)
            if (VV.parentRef[bV] !== eV[bV]) {
              for (let JV = VV.extraParents; void 0 !== JV; JV = JV.next)
                if (JV.ref[bV] === eV[bV]) return void(JV.index = xV)
            } else VV._parentIndex = xV;
          else VV._parentIndex = xV
        }(this, VV, eV)
      }
      removeParent() {
        return function(VV, eV) {
          if (VV.parentRef && VV.parentRef[bV] === eV[bV]) return VV.extraParents ? (VV.parentRef = VV.extraParents.ref, VV._parentIndex = VV.extraParents.index, VV.extraParents = VV.extraParents.next) : (VV.parentRef = void 0, VV._parentIndex = void 0), !0;
          let xV = VV.extraParents,
            JV = null;
          for (; xV;) {
            if (xV.ref[bV] === eV[bV]) return JV ? JV.next = xV.next : VV.extraParents = xV.next, !0;
            JV = xV, xV = xV.next
          }
          return void 0 === VV.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(VV) {
        return function(VV, eV) {
          if (void 0 !== VV.parentRef && eV(VV.parentRef, VV._parentIndex)) return {
            ref: VV.parentRef,
            index: VV._parentIndex
          };
          for (let xV = VV.extraParents; void 0 !== xV; xV = xV.next)
            if (eV(xV.ref, xV.index)) return {
              ref: xV.ref,
              index: xV.index
            }
        }(this, VV)
      }
      hasParent(VV) {
        return ex(this, VV)
      }
      indexInParent(VV) {
        return function(VV, eV) {
          if (VV.parentRef && VV.parentRef[bV] === eV[bV]) return VV._parentIndex;
          for (let xV = VV.extraParents; void 0 !== xV; xV = xV.next)
            if (xV.ref[bV] === eV[bV]) return xV.index
        }(this, VV)
      }
      getAllParents() {
        return function(VV) {
          const eV = [];
          VV.parentRef && eV.push({
            ref: VV.parentRef,
            index: VV._parentIndex
          });
          let xV = VV.extraParents;
          for (; xV;) eV.push({
            ref: xV.ref,
            index: xV.index
          }), xV = xV.next;
          return eV
        }(this)
      }
    }
    class Wx {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(VV) {
        this.ref = VV
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
      untracked(VV) {
        return VV()
      }
      markDirty() {}
      forEachChild(VV) {
        const eV = this.ref;
        if (eV[EV]) {
          if ("string" !== typeof eV[EV])
            for (const [xV, JV] of eV.entries()) JV && VV(JV[bV], eV._collectionIndexes?.[xV] ?? xV);
          return
        }
        const xV = eV.constructor,
          JV = xV?.[Symbol.metadata];
        if (!JV) return;
        const YV = JV[MV] ?? [];
        for (let UV = 0; UV < YV.length; UV++) {
          const xV = YV[UV],
            yV = eV[JV[xV].name];
          yV && VV(yV[bV], xV)
        }
      }
      forEachChildWithCtx(VV, eV) {
        this.forEachChild(((xV, JV) => eV(VV, xV, JV)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Rx(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV;
      var xV;
      Object.defineProperty(VV, bV, {
        value: (xV = eV, new Wx(xV)),
        enumerable: !1,
        writable: !0
      })
    }

    function gx(VV, eV, xV, JV, UV, yV, QV) {
      void 0 !== QV ? QV(eV, JV, yV) : "string" === typeof xV ? ee[xV]?.(eV, JV, yV) : null != xV[Symbol.metadata] ? (ee.number(eV, JV[pV], yV), (UV & YV.ADD) === YV.ADD && VV.tryEncodeTypeId(eV, xV, JV.constructor, yV)) : ee.number(eV, JV[pV], yV)
    }
    const Dx = function(VV, eV, xV, JV, UV, yV, pV, QV) {
        if (eV[yV.offset++] = 255 & (JV | UV), UV === YV.DELETE) return;
        const nV = xV.encDescriptor,
          wV = xV.ref,
          ZV = wV[FV][JV] ?? wV[nV.names[JV]];
        gx(VV, eV, nV.types[JV], ZV, UV, yV, nV.encoders[JV])
      },
      ix = function(VV, eV, xV, JV, UV, yV) {
        if (eV[yV.offset++] = 255 & UV, ee.number(eV, JV, yV), UV === YV.DELETE) return;
        const pV = xV.ref;
        if ((UV & YV.ADD) === YV.ADD) {
          const VV = pV.$indexes.get(JV);
          ee.string(eV, VV, yV)
        }
        gx(VV, eV, pV[EV], pV[vV](JV), UV, yV)
      },
      Cx = function(VV, eV, xV, JV, UV, yV) {
        if (eV[yV.offset++] = 255 & UV, ee.number(eV, JV, yV), UV === YV.DELETE) return;
        const pV = xV.ref;
        gx(VV, eV, pV[EV], pV[vV](JV), UV, yV)
      },
      ax = function(VV, eV, xV, JV, UV, yV) {
        const pV = xV.ref;
        (UV & YV.ADD) === YV.ADD && "function" === typeof pV.set ? ix(VV, eV, xV, JV, UV, yV) : Cx(VV, eV, xV, JV, UV, yV)
      },
      ox = function(VV, eV, xV, JV, UV, yV, QV, nV) {
        const wV = xV.refTarget,
          ZV = wV[EV],
          rV = "string" !== typeof ZV;
        let kV;
        if (nV && xV.isFiltered && rV) {
          const VV = wV.tmpItems[JV];
          if (!VV) return;
          if (kV = VV[pV], UV === YV.DELETE) UV = YV.DELETE_BY_REFID;
          else if ((UV & YV.ADD) === YV.ADD) UV = YV.ADD_BY_REFID;
          else if ((UV & YV.MOVE) === YV.MOVE) return
        } else if (UV === YV.DELETE && rV) {
          const VV = wV.tmpItems[JV];
          if (!VV) return;
          kV = VV[pV], UV = YV.DELETE_BY_REFID
        } else kV = JV;
        if (eV[yV.offset++] = 255 & UV, ee.number(eV, kV, yV), UV === YV.DELETE || UV === YV.DELETE_BY_REFID) return;
        gx(VV, eV, ZV, wV[vV](JV, QV), UV, yV)
      };

    function cx(VV, eV, xV, JV, UV, yV, QV) {
      const nV = VV.resyncVisited;
      let wV = nV.get(VV.currentRefId);
      if (void 0 === wV && nV.set(VV.currentRefId, wV = new Set), wV.add(JV), void 0 !== UV && xV === YV.ADD && UV !== yV) {
        const xV = UV[pV];
        void 0 !== xV && (VV.root.removeRef(xV), QV?.push({
          ref: eV,
          refId: VV.currentRefId,
          op: YV.DELETE,
          dynamicIndex: JV,
          value: void 0,
          previousValue: UV
        }))
      }
    }

    function hx(VV, eV, xV, JV) {
      const YV = eV[pV];
      if (void 0 === YV || xV.has(YV)) return;
      xV.add(YV);
      const UV = eV.constructor[Symbol.metadata],
        yV = UV?.[MV];
      if (void 0 === yV) return;
      const QV = UV[RV];
      for (let pV = 0; pV < yV.length; pV++) {
        const YV = yV[pV];
        if (void 0 !== QV && QV.includes(YV)) continue;
        const nV = UV[YV],
          wV = eV[nV.name];
        wV && (zJ.is(nV.type) ? hx(VV, wV, xV, JV) : lx(VV, wV, xV, JV))
      }
    }

    function lx(VV, eV, xV, JV) {
      const UV = eV[BV] ?? eV,
        yV = UV[pV];
      if (void 0 === yV || xV.has(yV)) return;
      xV.add(yV);
      const QV = VV.resyncVisited.get(yV);
      if (void 0 === QV) return;
      const nV = VV.root;
      UV[kV](QV, ((VV, xV) => {
        JV?.push({
          ref: eV,
          refId: yV,
          op: YV.DELETE,
          dynamicIndex: xV,
          value: void 0,
          previousValue: VV
        });
        const UV = VV?.[pV];
        void 0 !== UV && nV.removeRef(UV)
      }), (eV => {
        zJ.isSchema(eV) && hx(VV, eV, xV, JV)
      }))
    }
    const Lx = 1,
      fx = 2,
      mx = 3,
      Kx = 4,
      Hx = 5;

    function ux(VV, eV, xV, JV, UV, yV, QV, nV, wV) {
      const ZV = VV.root;
      let vV;
      if ((eV & YV.DELETE) === YV.DELETE) {
        const VV = UV?.[pV];
        void 0 !== VV && ZV.removeRef(VV), eV !== YV.DELETE_AND_ADD && xV[rV](JV), vV = void 0
      }
      if (eV === YV.DELETE);
      else if ("string" === typeof yV) vV = qe[yV](QV, nV);
      else if (Ce(yV)) vV = function(VV, eV, xV) {
        return oe(VV, (0, qe[VV.wire])(eV, xV))
      }(yV.quantized, QV, nV);
      else if (zJ.is(yV)) {
        const xV = qe.number(QV, nV);
        if (vV = ZV.refs.get(xV), (eV & YV.ADD) === YV.ADD) {
          const JV = VV.getInstanceType(QV, nV, yV);
          vV || (vV = VV.createInstanceOfType(JV)), ZV.addRef(xV, vV, vV !== UV || eV === YV.DELETE_AND_ADD && vV === UV)
        }
      } else {
        const xV = (kV = Object.keys(yV)[0], te[kV]),
          JV = qe.number(QV, nV);
        null !== VV.resyncVisited && function(VV, eV) {
          const xV = VV.resyncVisited;
          xV.has(eV) || xV.set(eV, new Set)
        }(VV, JV);
        const rV = ZV.refs.has(JV) ? UV || ZV.refs.get(JV) : xV.constructor.initializeForDecoder();
        if (vV = rV.clone(!0), vV[EV] = Object.values(yV)[0], UV) {
          let VV = UV[pV];
          if (void 0 !== VV && JV !== VV) {
            (eV & YV.DELETE) !== YV.DELETE && ZV.removeRef(VV);
            const xV = UV.entries();
            let JV;
            for (;
              (JV = xV.next()) && !JV.done;) {
              const [eV, xV] = JV.value;
              "object" === typeof xV && (VV = xV[pV]), wV?.push({
                ref: UV,
                refId: VV,
                op: YV.DELETE,
                field: eV,
                value: void 0,
                previousValue: xV
              })
            }
          }
        }
        ZV.addRef(JV, vV, rV !== UV || eV === YV.DELETE_AND_ADD && rV === UV)
      }
      var kV;
      return vV
    }
    const sx = function(VV, eV, xV, JV, YV) {
        const UV = eV[xV.offset++],
          yV = JV.constructor[Symbol.metadata],
          pV = UV >> 6 << 6,
          QV = UV % (pV || 255),
          nV = yV[QV];
        if (void 0 === nV) return console.warn("@colyseus/schema: field not defined at", {
          index: QV,
          ref: JV.constructor.name,
          metadata: yV
        }), -1;
        const wV = !0 === nV.deprecated,
          ZV = wV ? void 0 : JV[vV](QV),
          rV = ux(VV, pV, JV, QV, ZV, nV.type, eV, xV, YV);
        wV || (null !== rV && void 0 !== rV && (JV[nV.name] = rV), ZV !== rV && YV?.push({
          ref: JV,
          refId: VV.currentRefId,
          op: pV,
          field: nV.name,
          value: rV,
          previousValue: ZV
        }))
      },
      Sx = function(VV, eV, xV, JV, UV) {
        const yV = JV[BV] ?? JV,
          pV = eV[xV.offset++];
        if (pV === YV.CLEAR) return VV.removeChildRefs(yV, UV), void yV.clear();
        const QV = qe.number(eV, xV),
          nV = yV[EV],
          wV = yV.constructor.COLLECTION_KIND;
        let ZV;
        (pV & YV.ADD) === YV.ADD ? wV === Lx ? (ZV = qe.string(eV, xV), yV.setIndex(QV, ZV)) : ZV = QV : ZV = yV.getIndex(QV);
        const rV = yV[vV](QV),
          kV = ux(VV, pV, JV, QV, rV, nV, eV, xV, UV);
        if (null !== VV.resyncVisited && cx(VV, JV, pV, ZV, rV, kV, UV), null !== kV && void 0 !== kV) switch (wV) {
          case Lx:
            yV.$items.set(ZV, kV);
            break;
          case fx:
            yV.$setAt(QV, kV, null !== VV.resyncVisited && pV === YV.ADD ? YV.REPLACE : pV);
            break;
          case mx:
          case Kx:
          case Hx:
            yV.$items.has(QV) || (yV.$items.set(QV, kV), "number" === typeof yV.$refId && QV >= yV.$refId && (yV.$refId = QV + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${yV.constructor?.name} \u2014 item at index ${QV} was not stored.`)
        }
        rV !== kV && UV?.push({
          ref: JV,
          refId: VV.currentRefId,
          op: pV,
          dynamicIndex: ZV,
          value: kV,
          previousValue: rV
        })
      },
      Ix = function(VV, eV, xV, JV, UV) {
        const yV = JV[BV] ?? JV;
        let pV, QV = eV[xV.offset++];
        if (QV === YV.CLEAR) return VV.removeChildRefs(yV, UV), void yV.clear();
        if (QV === YV.REVERSE) return void yV.items.reverse();
        if (QV === YV.DELETE_BY_REFID) {
          const QV = qe.number(eV, xV),
            nV = VV.root.refs.get(QV);
          if (void 0 === nV) return;
          if (VV.root.removeRef(QV), pV = yV.findIndex((VV => VV === nV)), -1 === pV) return;
          return yV[rV](pV), void UV?.push({
            ref: JV,
            refId: VV.currentRefId,
            op: YV.DELETE,
            dynamicIndex: pV,
            value: void 0,
            previousValue: nV
          })
        }
        if (QV === YV.ADD_BY_REFID) {
          const JV = qe.number(eV, xV),
            YV = VV.root.refs.get(JV);
          YV && (pV = yV.findIndex((VV => VV === YV))), -1 !== pV && void 0 !== pV || (pV = yV.length)
        } else pV = qe.number(eV, xV);
        const nV = yV[EV];
        let wV = pV;
        const ZV = yV.items[pV],
          vV = ux(VV, QV, JV, pV, ZV, nV, eV, xV, UV);
        null !== VV.resyncVisited && cx(VV, JV, QV, pV, ZV, vV, UV), null !== vV && void 0 !== vV && vV !== ZV && yV.$setAt(pV, vV, null !== VV.resyncVisited && QV === YV.ADD ? YV.REPLACE : QV), ZV !== vV && UV?.push({
          ref: JV,
          refId: VV.currentRefId,
          op: QV,
          dynamicIndex: wV,
          value: vV,
          previousValue: ZV
        })
      };
    class dx extends Error {}

    function Ox(VV, eV, xV, JV) {
      if (!(VV instanceof eV)) throw new dx(`a '${eV.name}' was expected, but '${VV&&VV.constructor.name}' was provided in ${xV.constructor.name}#${JV}`)
    }
    const VJ = (VV, eV) => {
        const xV = VV.toString(),
          JV = eV.toString();
        return xV < JV ? -1 : xV > JV ? 1 : 0
      },
      eJ = {
        get: (VV, eV) => "symbol" === typeof eV || isNaN(eV) ? Reflect.get(VV, eV) : VV.items[eV],
        set: (VV, eV, xV) => {
          if ("symbol" !== typeof eV && !isNaN(eV)) {
            if (void 0 === xV || null === xV) VV.$deleteAt(eV);
            else {
              let JV;
              if (xV[bV]) {
                Ox(xV, VV[EV], VV, eV);
                const UV = VV.items[eV];
                VV.isMovingItems ? (JV = VV.$wireIndex(Number(eV)), void 0 !== UV ? xV[bV].isNew ? VV[bV].indexedOperation(JV, YV.MOVE_AND_ADD) : (VV[bV].getChange(JV) & YV.DELETE) === YV.DELETE ? VV[bV].indexedOperation(JV, YV.DELETE_AND_MOVE) : VV[bV].indexedOperation(JV, YV.MOVE) : xV[bV].isNew && VV[bV].indexedOperation(JV, YV.ADD), xV[bV].setParent(VV, VV[bV].root, JV)) : JV = VV.$changeAt(Number(eV), xV), void 0 !== UV && UV[bV].root?.remove(UV[bV])
              } else JV = VV.$changeAt(Number(eV), xV);
              VV.items[eV] = xV, void 0 !== JV && (VV.tmpItems[JV] = xV)
            }
            return !0
          }
          return Reflect.set(VV, eV, xV)
        },
        deleteProperty: (VV, eV) => ("number" === typeof eV ? VV.$deleteAt(eV) : delete VV[eV], !0),
        has: (VV, eV) => "symbol" === typeof eV || isNaN(Number(eV)) ? Reflect.has(VV, eV) : Reflect.has(VV.items, eV)
      };
    class xJ {
      [bV];
      [pV];
      [BV];
      [EV];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[nV] = ox;
      static[wV] = Ix;
      static COLLECTION_KIND = fx;
      static[ZV](VV, eV, xV) {
        if (!xV) return !0;
        const JV = VV[BV] ?? VV;
        return "string" === typeof JV[EV] || xV.isChangeTreeVisible(JV.tmpItems[eV]?.[bV])
      }
      static is(VV) {
        return Array.isArray(VV) || void 0 !== VV.array
      }
      static from(VV) {
        return new xJ(...Array.from(VV))
      }
      constructor() {
        this[EV] = void 0, this[BV] = this;
        const VV = new Proxy(this, eJ);
        return Object.defineProperty(this, bV, {
          value: new Gx(VV, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), VV
      }
      static initializeForDecoder() {
        const VV = Object.create(xJ.prototype);
        VV.items = [], VV.isMovingItems = !1, VV._needsCompaction = !1, VV[EV] = void 0, VV[BV] = VV;
        const eV = new Proxy(VV, eJ);
        return Rx(VV, eV), eV
      }
      set length(VV) {
        0 === VV ? this.clear() : VV < this.items.length ? this.splice(VV, this.length - VV) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[bV].pause()
      }
      resumeTracking() {
        this[bV].resume()
      }
      untracked(VV) {
        return this[bV].untracked(VV)
      }
      get isTrackingPaused() {
        return this[bV].paused
      }
      push() {
        const VV = this[BV],
          eV = VV.items,
          xV = VV.tmpItems,
          JV = VV[bV],
          UV = VV[EV];
        let yV = xV.length;
        for (let pV = 0, QV = arguments.length; pV < QV; pV++, yV++) {
          const QV = pV < 0 || arguments.length <= pV ? void 0 : arguments[pV];
          if (void 0 === QV || null === QV) return;
          "object" === typeof QV && UV && Ox(QV, UV, VV, pV), JV.indexedOperation(yV, YV.ADD), eV.push(QV), xV.push(QV), QV[bV]?.setParent(this, JV.root, yV)
        }
        return yV
      }
      pop() {
        const VV = this[BV],
          eV = VV.tmpItems,
          xV = VV.deletedIndexes;
        let JV = -1;
        for (let UV = eV.length - 1; UV >= 0; UV--)
          if (!0 !== xV[UV]) {
            JV = UV;
            break
          } if (JV < 0) return;
        const YV = VV.$isUnsentAdd(JV);
        return VV[bV].delete(JV), YV ? VV.$cancelAdd(JV) : xV[JV] = !0, VV.items.pop()
      }
      at(VV) {
        return VV < 0 && (VV += this.length), this.items[VV]
      }
      $wireIndex(VV) {
        const eV = this.deletedIndexes;
        if (0 === eV.length) return VV;
        const xV = this.tmpItems;
        let JV = 0;
        for (let YV = 0; YV < xV.length; YV++)
          if (!0 !== eV[YV]) {
            if (JV === VV) return YV;
            JV++
          } return xV.length + (VV - JV)
      }
      $isUnsentAdd(VV) {
        const eV = this[bV];
        return 0 === (576 & eV.flags) && !eV.paused && "string" !== typeof this[EV] && eV.operationAt(VV) === YV.ADD
      }
      $cancelAdd(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const xV = this[bV],
          JV = this.tmpItems[VV];
        this.tmpItems.splice(VV, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(VV, 1), xV.removeAt(VV, 1);
        const YV = JV?.[bV];
        void 0 !== YV && void 0 === YV.root && YV.removeParent(this), eV && this.$reindexChildren(VV)
      }
      $reindexChildren(VV, eV) {
        if (!this[bV].hasFilteredFields) return;
        if ("string" === typeof this[EV]) return;
        const xV = this.tmpItems,
          JV = xV.length;
        if (void 0 !== eV)
          for (; VV < JV && xV[VV] === eV[VV];) VV++;
        for (let YV = VV; YV < JV; YV++) xV[YV]?.[bV]?.setParentIndex(this, YV)
      }
      $changeAt(VV, eV) {
        if (void 0 === eV || null === eV) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[VV] === eV) return;
        const xV = void 0 !== this.items[VV] ? "object" === typeof eV ? YV.DELETE_AND_ADD : YV.REPLACE : YV.ADD,
          JV = this.$wireIndex(VV),
          UV = this[bV];
        return UV.change(JV, xV), eV[bV]?.setParent(this, UV.root, JV), JV
      }
      $deleteAt(VV, eV) {
        this[bV].delete(this.$wireIndex(VV), eV)
      }
      $setAt(VV, eV, xV) {
        xV === YV.ADD && void 0 !== this.items[VV] ? this.items.splice(VV, 0, eV) : xV === YV.DELETE_AND_MOVE ? (this.items.splice(VV, 1), this.items[VV] = eV) : (VV > this.items.length && (this._needsCompaction = !0), this.items[VV] = eV)
      }
      clear() {
        const VV = this[BV];
        if (0 === VV.items.length) return;
        const eV = VV[bV];
        eV.forEachChild(((VV, xV) => {
          eV.root?.remove(VV)
        })), eV.discard(), eV.operation(YV.CLEAR), VV.items.length = 0, VV.tmpItems.length = 0
      } [qV]() {
        const VV = this[BV] ?? this,
          eV = VV[bV];
        if (eV.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const xV = VV.items;
        for (let JV = 0; JV < xV.length; JV++) xV[JV]?.[qV]?.();
        VV.items.length = 0, VV.tmpItems.length = 0, VV.deletedIndexes.length = 0, eV.recycle(), VV[pV] = void 0
      }
      concat() {
        return new xJ(...this.items.concat(...arguments))
      }
      join(VV) {
        return this.items.join(VV)
      }
      reverse() {
        const VV = this[BV],
          eV = VV[bV];
        if (eV.has() || VV.deletedIndexes.length > 0) {
          const eV = VV.items.slice().reverse();
          return this.clear(), this.push(...eV), this
        }
        return eV.operation(YV.REVERSE), VV.items.reverse(), VV.tmpItems.reverse(), VV.$reindexChildren(0), this
      }
      shift() {
        const VV = this[BV],
          eV = VV.items;
        if (0 === eV.length) return;
        const xV = VV[bV],
          JV = VV.deletedIndexes;
        let UV = 0;
        for (; !0 === JV[UV];) UV++;
        const yV = VV.$isUnsentAdd(UV);
        return xV.delete(UV, YV.DELETE), yV ? VV.$cancelAdd(UV) : JV[UV] = !0, eV.shift()
      }
      slice(VV, eV) {
        const xV = new xJ;
        return xV.push(...this.items.slice(VV, eV)), xV
      }
      sort() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VJ;
        const eV = this[BV];
        eV.isMovingItems = !0;
        const xV = eV[bV];
        return eV.items.sort(VV).forEach(((VV, eV) => xV.change(eV, YV.REPLACE))), eV.tmpItems.sort(VV), eV.$reindexChildren(0), eV.isMovingItems = !1, this
      }
      splice(VV, eV) {
        const xV = this[BV],
          JV = xV[bV],
          UV = xV.items,
          yV = xV.tmpItems,
          pV = xV.deletedIndexes,
          QV = UV.length,
          nV = yV.length;
        for (var wV = arguments.length, ZV = new Array(wV > 2 ? wV - 2 : 0), vV = 2; vV < wV; vV++) ZV[vV - 2] = arguments[vV];
        const rV = ZV.length,
          kV = [];
        for (let YV = 0; YV < nV; YV++) !0 !== pV[YV] && kV.push(YV);
        let EV;
        if (QV > VV) {
          void 0 === eV && (eV = QV - VV);
          for (let UV = VV; UV < VV + eV; UV++) {
            const VV = kV[UV],
              eV = xV.$isUnsentAdd(VV);
            JV.delete(VV, YV.DELETE), eV ? (EV ??= []).push(VV) : pV[VV] = !0
          }
        } else eV = 0;
        if (rV > 0) {
          const UV = kV[VV] ?? QV,
            nV = Math.min(rV, eV);
          for (let VV = 0; VV < nV; VV++) {
            const eV = UV + VV;
            let xV;
            const QV = void 0 !== EV ? EV.indexOf(eV) : -1; - 1 !== QV ? (EV.splice(QV, 1), xV = YV.ADD) : xV = pV[eV] ? YV.DELETE_AND_ADD : YV.ADD, JV.indexedOperation(eV, xV), yV[eV] = ZV[VV], pV[eV] = !1, ZV[VV][bV]?.setParent(this, JV.root, eV)
          }
          const wV = rV - nV;
          if (wV > 0) {
            const VV = UV + nV;
            JV.insertAt(VV, wV);
            for (let eV = 0; eV < wV; eV++) ZV[nV + eV][bV]?.setParent(this, JV.root, VV + eV);
            pV.length > 0 && pV.splice(VV, 0, ...new Array(wV).fill(!1)), yV.splice(VV, 0, ...ZV.slice(nV)), xV.$reindexChildren(VV + wV)
          }
        }
        if (void 0 !== EV && EV.length > 0) {
          for (let VV = EV.length - 1; VV >= 0; VV--) xV.$cancelAdd(EV[VV], !1);
          xV.$reindexChildren(EV[0])
        }
        return JV.root?.enqueueChangeTree(JV), UV.splice(VV, eV, ...ZV)
      }
      unshift() {
        const VV = this[BV],
          eV = VV[bV];
        eV.unshift(arguments.length);
        for (let JV = 0; JV < arguments.length; JV++)(JV < 0 || arguments.length <= JV ? void 0 : arguments[JV])?.[bV]?.setParent(this, eV.root, JV);
        const xV = VV.deletedIndexes;
        return xV.length > 0 && xV.unshift(...new Array(arguments.length).fill(!1)), VV.tmpItems.unshift(...arguments), VV.$reindexChildren(arguments.length), VV.items.unshift(...arguments)
      }
      indexOf(VV, eV) {
        return this.items.indexOf(VV, eV)
      }
      lastIndexOf(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(VV, eV)
      }
      every(VV, eV) {
        return this.items.every(VV, eV)
      }
      some(VV, eV) {
        return this.items.some(VV, eV)
      }
      forEach(VV, eV) {
        return this.items.forEach(VV, eV)
      }
      map(VV, eV) {
        return this.items.map(VV, eV)
      }
      filter(VV, eV) {
        return this.items.filter(VV, eV)
      }
      reduce(VV, eV) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(VV, eV) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(VV, eV) {
        return this.items.find(VV, eV)
      }
      findIndex(VV, eV) {
        return this.items.findIndex(VV, eV)
      }
      fill(VV, eV, xV) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(VV, eV, xV) {
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
        return xJ
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
      includes(VV, eV) {
        return this.items.includes(VV, eV)
      }
      flatMap(VV, eV) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(VV) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(VV, eV) {
        const xV = this.items.slice();
        return VV < 0 && (VV += this.length), xV[VV] = eV, new xJ(...xV)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(VV) {
        return this.items.slice().sort(VV)
      }
      toSpliced(VV, eV) {
        for (var xV = arguments.length, JV = new Array(xV > 2 ? xV - 2 : 0), YV = 2; YV < xV; YV++) JV[YV - 2] = arguments[YV];
        const UV = this.items.slice();
        return UV.splice.apply(UV, arguments), UV
      }
      shuffle() {
        return this.move((VV => {
          let eV = this.items.length;
          for (; 0 != eV;) {
            let VV = Math.floor(Math.random() * eV);
            eV--, [this[eV], this[VV]] = [this[VV], this[eV]]
          }
        }))
      }
      move(VV) {
        return this.isMovingItems = !0, VV(this), this.isMovingItems = !1, this
      } [vV](VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = this[BV] ?? this;
        return eV || xV.deletedIndexes[VV] ? xV.items[VV] : xV.tmpItems[VV] || xV.items[VV]
      } [rV](VV) {
        const eV = this[BV] ?? this;
        eV.items[VV] = void 0, eV._needsCompaction = !0
      } [jV]() {
        const VV = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, VV), this.deletedIndexes.length = 0)
      } [tV]() {
        const VV = this[BV] ?? this;
        VV._needsCompaction && (VV._needsCompaction = !1, VV.items = VV.items.filter((VV => void 0 !== VV)))
      } [kV](VV, eV, xV) {
        const JV = this[BV] ?? this,
          YV = JV.items;
        let UV = !1;
        for (let yV = 0; yV < YV.length; yV++) {
          const pV = YV[yV];
          VV.has(yV) ? xV(pV) : (UV = !0, eV(pV, yV), JV[rV](yV))
        }
        UV && JV[tV]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((VV => "function" === typeof VV.toJSON ? VV.toJSON() : VV))
      }
      clone(VV) {
        let eV;
        return VV ? (eV = new xJ, eV.push(...this.items)) : eV = new xJ(...this.map((VV => VV[bV] ? VV.clone() : VV))), eV
      }
    }
    Te("array", {
      constructor: xJ
    });
    class JJ {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(VV) {
        const eV = this.indexByKey[VV];
        return void 0 === eV ? void 0 : eV
      }
      assign(VV) {
        const eV = this.nextIndex++;
        return this.indexByKey[VV] = eV, this.keyByIndex.set(eV, VV), eV
      }
      snapshot(VV, eV) {
        (this.snapshots ??= new Map).set(VV, eV)
      }
      forgetSnapshot(VV) {
        this.snapshots?.delete(VV)
      }
      snapshotAt(VV) {
        return this.snapshots?.get(VV)
      }
      setIndex(VV, eV) {
        this.keyByIndex.set(VV, eV), this.indexByKey[eV] = VV
      }
      keyOf(VV) {
        return this.keyByIndex.get(VV)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [VV] of this.snapshots) {
            const eV = this.keyByIndex.get(VV);
            void 0 !== eV && (delete this.indexByKey[eV], this.keyByIndex.delete(VV))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class YJ {
      [bV];
      [pV];
      childType;
      [EV];
      $items = new Map;
      journal = new JJ;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(VV) {
        (this._stream ??= Ne()).maxPerTick = VV
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(VV) {
        (this._stream ??= Ne()).priority = VV
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[nV] = ix;
      static[wV] = Sx;
      static COLLECTION_KIND = Lx;
      static[ZV](VV, eV, xV) {
        if (!xV || "string" === typeof VV[EV]) return !0;
        const JV = VV[vV](eV) ?? VV.journal.snapshotAt(eV);
        return xV.isChangeTreeVisible(JV[bV])
      }
      static is(VV) {
        return void 0 !== VV.map
      }
      constructor(VV) {
        if (Object.defineProperty(this, bV, {
            value: new Gx(this),
            enumerable: !1,
            writable: !0
          }), this[EV] = void 0, VV)
          if (VV instanceof Map || VV instanceof YJ) VV.forEach(((VV, eV) => this.set(eV, VV)));
          else
            for (const eV in VV) this.set(eV, VV[eV])
      }
      static initializeForDecoder() {
        const VV = Object.create(YJ.prototype);
        return VV.$items = new Map, VV.journal = new JJ, VV[EV] = void 0, Rx(VV), VV
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return YJ
      }
      set(VV, eV) {
        if (void 0 === eV || null === eV) throw new Error(`MapSchema#set('${VV}', ${eV}): trying to set ${eV} value on '${VV}'.`);
        "object" === typeof eV && this[EV] && Ox(eV, this[EV], this, VV), VV = VV.toString();
        const xV = this[bV],
          JV = void 0 !== eV[bV],
          UV = this.journal;
        let yV, pV = UV.indexOf(VV);
        if (void 0 !== pV) {
          yV = YV.REPLACE;
          const xV = this.$items.get(VV);
          if (xV === eV) return;
          JV && (yV = YV.DELETE_AND_ADD, void 0 !== xV && xV[bV].root?.remove(xV[bV])), void 0 !== UV.snapshotAt(pV) && UV.forgetSnapshot(pV)
        } else pV = UV.assign(VV), yV = YV.ADD;
        return this.$items.set(VV, eV), yV === YV.ADD && xV.isStreamCollection ? void 0 !== xV.root && Me(this, xV.root, pV) : xV.change(pV, yV), JV && eV[bV].setParent(this, xV.root, pV), this
      }
      get(VV) {
        return this.$items.get(VV)
      }
      getOrInsert(VV, eV) {
        return this.$items.has(VV) ? this.$items.get(VV) : (this.set(VV, eV), eV)
      }
      getOrInsertComputed(VV, eV) {
        if (this.$items.has(VV)) return this.$items.get(VV);
        const xV = eV(VV);
        return this.set(VV, xV), xV
      }
      delete(VV) {
        if (!this.$items.has(VV)) return !1;
        const eV = this.journal.indexOf(VV),
          xV = this.$items.get(VV),
          JV = this[bV];
        if (JV.isStreamCollection) {
          const YV = JV.root;
          let UV = !1;
          return void 0 !== YV && (UV = ze(this, YV, this[pV], eV)), void 0 !== xV?.[bV] && YV?.remove(xV[bV]), this.$items.delete(VV), UV || this.journal.snapshot(eV, xV), !0
        }
        return this.journal.snapshot(eV, xV), JV.delete(eV), this.$items.delete(VV)
      }
      clear() {
        const VV = this[bV];
        VV.discard(), VV.forEachChild(((eV, xV) => {
          VV.root?.remove(eV)
        })), this.journal.reset(), this.$items.clear(), VV.operation(YV.CLEAR)
      } [qV]() {
        const VV = this[bV];
        if (VV.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((VV => VV?.[qV]?.())), this.$items.clear(), this.journal.reset(), VV.recycle(), this[pV] = void 0
      }
      has(VV) {
        return this.$items.has(VV)
      }
      forEach(VV) {
        this.$items.forEach(VV)
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
        this[bV].pause()
      }
      resumeTracking() {
        this[bV].resume()
      }
      untracked(VV) {
        return this[bV].untracked(VV)
      }
      get isTrackingPaused() {
        return this[bV].paused
      }
      setIndex(VV, eV) {
        this.journal.setIndex(VV, eV)
      }
      getIndex(VV) {
        return this.journal.keyOf(VV)
      } [vV](VV) {
        const eV = this.journal.keyOf(VV);
        return void 0 !== eV ? this.$items.get(eV) : void 0
      } [rV](VV) {
        const eV = this.journal.keyOf(VV);
        void 0 !== eV && (this.$items.delete(eV), this.journal.keyByIndex.delete(VV))
      } [kV](VV, eV, xV) {
        let JV = null;
        if (this.$items.forEach(((YV, UV) => {
            VV.has(UV) ? xV(YV) : ((JV ??= new Set).add(UV), eV(YV, UV))
          })), null !== JV) {
          JV.forEach((VV => {
            this.$items.delete(VV), delete this.journal.indexByKey[VV]
          }));
          const VV = [];
          this.journal.keyByIndex.forEach(((eV, xV) => {
            JV.has(eV) && VV.push(xV)
          }));
          for (let eV = 0; eV < VV.length; eV++) this.journal.keyByIndex.delete(VV[eV])
        }
      } [jV]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(VV) {
        ge(this, VV)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (VV => {
          let [eV, xV] = VV;
          return [eV, "function" === typeof xV.toJSON ? xV.toJSON() : xV]
        })))
      }
      clone(VV) {
        let eV;
        return VV ? eV = Object.assign(new YJ, this) : (eV = new YJ, this.forEach(((VV, xV) => {
          VV[bV] ? eV.set(xV, VV.clone()) : eV.set(xV, VV)
        }))), eV
      }
    }
    Te("map", {
      constructor: YJ
    });
    class UJ {
      [bV];
      [pV];
      [EV];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(VV) {
        (this._stream ??= Ne()).maxPerTick = VV
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(VV) {
        (this._stream ??= Ne()).priority = VV
      }
      static[nV] = Cx;
      static[wV] = Sx;
      static COLLECTION_KIND = Kx;
      static[ZV](VV, eV, xV) {
        return !xV || "string" === typeof VV[EV] || xV.isChangeTreeVisible((VV[vV](eV) ?? VV.deletedItems[eV])[bV])
      }
      static is(VV) {
        return void 0 !== VV.collection
      }
      constructor(VV) {
        Object.defineProperty(this, bV, {
          value: new Gx(this),
          enumerable: !1,
          writable: !0
        }), this[EV] = void 0, VV && VV.forEach((VV => this.add(VV)))
      }
      static initializeForDecoder() {
        const VV = Object.create(UJ.prototype);
        return VV.$items = new Map, VV.deletedItems = {}, VV.$refId = 0, VV[EV] = void 0, Rx(VV), VV
      }
      add(VV) {
        const eV = this.$refId++,
          xV = this[bV];
        return this.$items.set(eV, VV), xV.isStreamCollection ? void 0 !== xV.root && Me(this, xV.root, eV) : xV.change(eV), void 0 !== VV[bV] && VV[bV].setParent(this, xV.root, eV), eV
      }
      at(VV) {
        const eV = Array.from(this.$items.keys())[VV];
        return this.$items.get(eV)
      }
      entries() {
        return this.$items.entries()
      }
      delete(VV) {
        const eV = this.$items.entries();
        let xV, JV;
        for (;
          (JV = eV.next()) && !JV.done;)
          if (VV === JV.value[1]) {
            xV = JV.value[0];
            break
          } if (void 0 === xV) return !1;
        const YV = this[bV];
        if (YV.isStreamCollection) {
          const VV = YV.root,
            eV = this.$items.get(xV);
          return void 0 !== VV && ze(this, VV, this[pV], xV), void 0 !== eV?.[bV] && VV?.remove(eV[bV]), this.deletedItems[xV] = eV, this.$items.delete(xV)
        }
        return this.deletedItems[xV] = YV.delete(xV), this.$items.delete(xV)
      }
      clear() {
        const VV = this[bV];
        VV.discard(), VV.forEachChild(((eV, xV) => {
          VV.root?.remove(eV)
        })), this.$items.clear(), VV.operation(YV.CLEAR)
      } [qV]() {
        const VV = this[bV];
        if (VV.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((VV => VV?.[qV]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, VV.recycle(), this[pV] = void 0
      }
      has(VV) {
        return Array.from(this.$items.values()).some((eV => eV === VV))
      }
      forEach(VV) {
        this.$items.forEach(((eV, xV, JV) => VV(eV, xV, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[bV].pause()
      }
      resumeTracking() {
        this[bV].resume()
      }
      untracked(VV) {
        return this[bV].untracked(VV)
      }
      get isTrackingPaused() {
        return this[bV].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(VV, eV) {}
      getIndex(VV) {
        return VV
      } [vV](VV) {
        return this.$items.get(VV)
      } [rV](VV) {
        this.$items.delete(VV)
      } [kV](VV, eV, xV) {
        let JV = null;
        if (this.$items.forEach(((YV, UV) => {
            VV.has(UV) ? xV(YV) : ((JV ??= []).push(UV), eV(YV, UV))
          })), null !== JV)
          for (let YV = 0; YV < JV.length; YV++) this[rV](JV[YV])
      } [jV]() {
        for (const VV in this.deletedItems) delete this.deletedItems[VV]
      }
      _dropView(VV) {
        ge(this, VV)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const VV = [];
        return this.forEach(((eV, xV) => {
          VV.push("function" === typeof eV.toJSON ? eV.toJSON() : eV)
        })), VV
      }
      clone(VV) {
        let eV;
        return VV ? eV = Object.assign(new UJ, this) : (eV = new UJ, this.forEach((VV => {
          VV[bV] ? eV.add(VV.clone()) : eV.add(VV)
        }))), eV
      }
    }
    Te("collection", {
      constructor: UJ
    });
    class yJ {
      [bV];
      [pV];
      [EV];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(VV) {
        (this._stream ??= Ne()).maxPerTick = VV
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(VV) {
        (this._stream ??= Ne()).priority = VV
      }
      static[nV] = Cx;
      static[wV] = Sx;
      static COLLECTION_KIND = mx;
      static[ZV](VV, eV, xV) {
        return !xV || "string" === typeof VV[EV] || xV.isVisible((VV[vV](eV) ?? VV.deletedItems[eV])[bV])
      }
      static is(VV) {
        return void 0 !== VV.set
      }
      constructor(VV) {
        Object.defineProperty(this, bV, {
          value: new Gx(this),
          enumerable: !1,
          writable: !0
        }), this[EV] = void 0, VV && VV.forEach((VV => this.add(VV)))
      }
      static initializeForDecoder() {
        const VV = Object.create(yJ.prototype);
        return VV.$items = new Map, VV.deletedItems = {}, VV.$refId = 0, VV[EV] = void 0, Rx(VV), VV
      }
      add(VV) {
        if (this.has(VV)) return !1;
        const eV = this.$refId++,
          xV = this[bV];
        return this.$items.set(eV, VV), xV.isStreamCollection ? void 0 !== xV.root && Me(this, xV.root, eV) : xV.change(eV, YV.ADD), void 0 !== VV[bV] && VV[bV].setParent(this, xV.root, eV), eV
      }
      entries() {
        return this.$items.entries()
      }
      delete(VV) {
        const eV = this.$items.entries();
        let xV, JV;
        for (;
          (JV = eV.next()) && !JV.done;)
          if (VV === JV.value[1]) {
            xV = JV.value[0];
            break
          } if (void 0 === xV) return !1;
        const YV = this[bV];
        if (YV.isStreamCollection) {
          const VV = YV.root,
            eV = this.$items.get(xV);
          return void 0 !== VV && ze(this, VV, this[pV], xV), void 0 !== eV?.[bV] && VV?.remove(eV[bV]), this.deletedItems[xV] = eV, this.$items.delete(xV)
        }
        return this.deletedItems[xV] = YV.delete(xV), this.$items.delete(xV)
      }
      clear() {
        const VV = this[bV];
        VV.discard(), this.$items.clear(), VV.operation(YV.CLEAR)
      } [qV]() {
        const VV = this[bV];
        if (VV.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((VV => VV?.[qV]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, VV.recycle(), this[pV] = void 0
      }
      has(VV) {
        const eV = this.$items.values();
        let xV, JV = !1;
        for (;
          (xV = eV.next()) && !xV.done;)
          if (VV === xV.value) {
            JV = !0;
            break
          } return JV
      }
      forEach(VV) {
        this.$items.forEach(((eV, xV, JV) => VV(eV, xV, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[bV].pause()
      }
      resumeTracking() {
        this[bV].resume()
      }
      untracked(VV) {
        return this[bV].untracked(VV)
      }
      get isTrackingPaused() {
        return this[bV].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(VV, eV) {}
      getIndex(VV) {
        return VV
      } [vV](VV) {
        return this.$items.get(VV)
      } [rV](VV) {
        this.$items.delete(VV)
      } [kV](VV, eV, xV) {
        let JV = null;
        if (this.$items.forEach(((YV, UV) => {
            VV.has(UV) ? xV(YV) : ((JV ??= []).push(UV), eV(YV, UV))
          })), null !== JV)
          for (let YV = 0; YV < JV.length; YV++) this[rV](JV[YV])
      } [jV]() {
        for (const VV in this.deletedItems) delete this.deletedItems[VV]
      }
      _dropView(VV) {
        ge(this, VV)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const VV = [];
        return this.forEach(((eV, xV) => {
          VV.push("function" === typeof eV.toJSON ? eV.toJSON() : eV)
        })), VV
      }
      clone(VV) {
        let eV;
        return VV ? eV = Object.assign(new yJ, this) : (eV = new yJ, this.forEach((VV => {
          VV[bV] ? eV.add(VV.clone()) : eV.add(VV)
        }))), eV
      }
    }
    Te("set", {
      constructor: yJ
    });
    class pJ {
      [bV];
      [pV];
      [EV];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(VV) {
        (this._stream ??= Ne()).maxPerTick = VV
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(VV) {
        (this._stream ??= Ne()).priority = VV
      }
      static $isStream = !0;
      static[nV] = Cx;
      static[wV] = Sx;
      static COLLECTION_KIND = Hx;
      static[ZV](VV, eV, xV) {
        if (!xV) return !0;
        const JV = VV[vV](eV);
        return void 0 !== JV && xV.isVisible(JV[bV])
      }
      static is(VV) {
        return VV && void 0 !== VV.stream
      }
      constructor() {
        Object.defineProperty(this, bV, {
          value: new Gx(this),
          enumerable: !1,
          writable: !0
        }), this[EV] = void 0
      }
      static initializeForDecoder() {
        const VV = Object.create(pJ.prototype);
        return VV.$items = new Map, VV.$nextPosition = 0, VV._itemIndex = new Map, VV[EV] = void 0, Rx(VV), VV
      }
      add(VV) {
        if (this._itemIndex.has(VV)) return -1;
        const eV = this.$nextPosition++;
        this.$items.set(eV, VV), this._itemIndex.set(VV, eV);
        const xV = this[bV].root;
        return void 0 !== VV[bV] && VV[bV].setParent(this, xV, eV), void 0 !== xV && Me(this, xV, eV), eV
      }
      remove(VV) {
        const eV = this._itemIndex.get(VV);
        if (void 0 === eV) return !1;
        this._itemIndex.delete(VV), this.$items.delete(eV);
        const xV = this[bV].root;
        return void 0 !== xV && (ze(this, xV, this[pV], eV), void 0 !== VV[bV] && xV.remove(VV[bV])), !0
      }
      has(VV) {
        return this._itemIndex.has(VV)
      }
      clear() {
        const VV = this[bV].root;
        if (void 0 !== VV) {
          ! function(VV, eV, xV) {
            const JV = VV._stream;
            if (void 0 !== JV) {
              JV.broadcastPending.clear();
              for (const VV of JV.sentBroadcast) JV.broadcastDeletes.add(VV);
              JV.sentBroadcast.clear(), eV.forEachActiveView((VV => {
                JV.pendingByView.get(VV.id)?.clear();
                const eV = JV.sentByView.get(VV.id);
                if (void 0 !== eV && eV.size > 0) {
                  let JV = VV.changes.get(xV);
                  void 0 === JV && (JV = new Map, VV.changes.set(xV, JV));
                  for (const VV of eV) JV.set(VV, YV.DELETE);
                  eV.clear()
                }
              }))
            }
          }(this, VV, this[pV]);
          for (const eV of this.$items.values()) void 0 !== eV[bV] && VV.remove(eV[bV])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(VV) {
        for (const [eV, xV] of this.$items) VV(xV, eV, this)
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
      setIndex(VV, eV) {}
      getIndex(VV) {
        return VV
      } [vV](VV) {
        return this.$items.get(VV)
      } [rV](VV) {
        const eV = this.$items.get(VV);
        void 0 !== eV && (this._itemIndex.delete(eV), this.$items.delete(VV))
      } [kV]() {} [jV]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const VV = [];
        return this.forEach((eV => {
          VV.push("function" === typeof eV?.toJSON ? eV.toJSON() : eV)
        })), VV
      }
      clone(VV) {
        if (VV) {
          return Object.assign(new pJ, this)
        }
        const eV = new pJ;
        return eV.maxPerTick = this.maxPerTick, this.forEach((VV => {
          eV.add("function" === typeof VV?.clone ? VV.clone() : VV)
        })), eV
      }
      _dropView(VV) {
        ge(this, VV)
      }
      _unregister() {}
    }
    Te("stream", {
      constructor: pJ
    });
    class QJ {
      [TV] = !0;
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
      constructor(VV) {
        this._type = VV
      }
      default (VV) {
        return this._default = VV, this._hasDefault = !0, this
      }
      view(VV) {
        return this._view = VV ?? -1, this
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
        const VV = this._type;
        if (VV && "object" === typeof VV && void 0 !== VV.array) throw new Error(Ae);
        return this._stream = !0, this
      }
      priority(VV) {
        return this._streamPriority = VV, this
      }
      deprecated() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = VV, this
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

    function nJ(VV) {
      return null != VV && !0 === VV[TV]
    }

    function wJ(VV) {
      return () => new QJ(VV)
    }

    function ZJ(VV) {
      if (nJ(VV)) {
        const eV = VV._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof eV?`use the type name instead: t.array("${eV}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return VV
    }

    function vJ(VV) {
      return new QJ({
        quantized: ie(VV)
      })
    }
    const rJ = Object.freeze({
        string: wJ("string"),
        number: wJ("number"),
        boolean: wJ("boolean"),
        int8: wJ("int8"),
        uint8: wJ("uint8"),
        int16: wJ("int16"),
        uint16: wJ("uint16"),
        int32: wJ("int32"),
        uint32: wJ("uint32"),
        int64: wJ("int64"),
        uint64: wJ("uint64"),
        float32: wJ("float32"),
        float64: wJ("float64"),
        bigint64: wJ("bigint64"),
        biguint64: wJ("biguint64"),
        ref: VV => new QJ(VV),
        array: VV => new QJ({
          array: ZJ(VV)
        }),
        map: VV => new QJ({
          map: ZJ(VV)
        }),
        set: VV => new QJ({
          set: ZJ(VV)
        }),
        collection: VV => new QJ({
          collection: ZJ(VV)
        }),
        stream: VV => {
          const eV = new QJ({
            stream: ZJ(VV)
          });
          return eV._stream = !0, eV
        },
        quantized: vJ,
        angle: VV => vJ({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: VV?.bits ?? 16
        })
      }),
      kJ = -1;

    function bJ(VV) {
      return he.register(VV), VV
    }

    function EJ() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kJ;
      return function(eV, xV) {
        const JV = ue.initialize(eV.constructor);
        ue.setTag(JV, xV, VV)
      }
    }

    function BJ(VV, eV) {
      const xV = ue.initialize(VV.constructor);
      ue.setUnreliable(xV, eV)
    }

    function jJ(VV, eV) {
      const xV = ue.initialize(VV.constructor);
      ue.setPatchOnly(xV, eV)
    }

    function qJ(VV, eV) {
      const xV = ue.initialize(VV.constructor);
      ue.setFullStateOnly(xV, eV)
    }

    function tJ(VV, eV) {
      return function(xV, JV) {
        const YV = xV.constructor;
        if (!VV) throw new Error(`${YV.name}: @type() reference provided for "${JV}" is undefined. Make sure you don't have any circular dependencies.`);
        VV = Le(VV, `${YV.name}.${JV}`), he.register(YV);
        const UV = Object.getPrototypeOf(YV)[Symbol.metadata],
          yV = ue.initialize(YV);
        let pV = yV[JV];
        if (void 0 !== yV[pV]) {
          if (yV[pV].deprecated) return;
          if (void 0 !== yV[pV].type) {
            const VV = new Error(`@colyseus/schema: Duplicate '${JV}' definition on '${YV.name}'.\nCheck @type() annotation`);
            throw new Error(`${VV.message} ${VV.stack.split("\n")[4].trim()}`)
          }
        } else pV = yV[XV] ?? (UV && UV[XV]) ?? -1, pV++;
        if (eV && eV.manual) ue.addField(yV, pV, JV, VV, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: eV,
            childType: xV
          } = le(VV);
          ue.addField(yV, pV, JV, VV, TJ(JV, pV, xV, eV))
        }
        yV[PV][JV] && Object.defineProperty(xV, JV, yV[PV][JV]), ("string" === typeof VV || Ce(VV)) && (yV[NV] || Object.defineProperty(yV, NV, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), yV[NV][pV] = "string" === typeof VV ? ee[VV] : ce(VV.quantized))
      }
    }
    const FJ = {
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

    function TJ(VV, eV, xV, JV) {
      let UV;
      return UV = JV ? function(VV, eV, xV, JV) {
        const UV = JV.constructor === xJ,
          yV = JV.constructor === YJ;
        return function(VV) {
          const JV = this[FV],
            pV = JV[eV];
          if (VV !== pV) {
            if (void 0 !== VV && null !== VV) {
              if (!UV || VV instanceof xJ)
                if (!yV || VV instanceof YJ) VV[EV] = xV;
                else {
                  const eV = new YJ;
                  if (eV[EV] = xV, VV instanceof Map) VV.forEach(((VV, xV) => eV.set(xV, VV)));
                  else
                    for (const xV in VV) eV.set(xV, VV[xV]);
                  VV = eV
                }
              else {
                const eV = new xJ;
                eV[EV] = xV, eV.push(...VV), VV = eV
              }
              const JV = this[bV],
                nV = this.constructor;
              void 0 !== pV && null !== pV && pV[bV] ? (JV.root?.remove(pV[bV]), nV[QV](JV, eV, YV.DELETE_AND_ADD)) : nV[QV](JV, eV, YV.ADD), VV[bV]?.setParent(this, JV.root, eV)
            } else void 0 !== pV && null !== pV && this[bV].delete(eV);
            JV[eV] = VV
          }
        }
      }(0, eV, xV, JV) : "string" === typeof xV ? function(VV, eV, xV) {
        const JV = FJ[xV],
          UV = "string" === xV,
          yV = "boolean" === xV;
        return function(xV) {
          const pV = this[FV],
            nV = pV[eV];
          if (xV !== nV) {
            if (void 0 !== xV && null !== xV) {
              if (!yV && void 0 !== JV && typeof xV !== JV && (!UV || null !== xV)) {
                const eV = xV && xV.constructor ? ` (${xV.constructor.name})` : "";
                throw new dx(`a '${JV}' was expected, but '${JSON.stringify(xV)}'${eV} was provided in ${this.constructor.name}#${VV}`)
              }
              this.constructor[QV](this[bV], eV, YV.ADD)
            } else void 0 !== nV && null !== nV && this[bV].delete(eV);
            pV[eV] = xV
          }
        }
      }(VV, eV, xV) : Ce(xV) ? function(VV, eV, xV) {
        return function(JV) {
          const UV = this[FV],
            yV = UV[eV];
          if (void 0 !== JV && null !== JV) {
            if ("number" !== typeof JV) throw new dx(`a 'number' was expected, but '${JSON.stringify(JV)}' was provided in ${this.constructor.name}#${VV}`);
            if ((JV = oe(xV, ae(xV, JV))) === yV) return;
            this.constructor[QV](this[bV], eV, YV.ADD)
          } else {
            if (JV === yV) return;
            void 0 !== yV && null !== yV && this[bV].delete(eV)
          }
          UV[eV] = JV
        }
      }(VV, eV, xV.quantized) : function(VV, eV, xV) {
        return function(JV) {
          const UV = this[FV],
            yV = UV[eV];
          if (JV !== yV) {
            if (void 0 !== JV && null !== JV) {
              Ox(JV, xV, this, VV);
              const UV = this[bV],
                pV = this.constructor;
              void 0 !== yV && null !== yV && yV[bV] ? (UV.root?.remove(yV[bV]), pV[QV](UV, eV, YV.DELETE_AND_ADD)) : pV[QV](UV, eV, YV.ADD), JV[bV]?.setParent(this, UV.root, eV)
            } else void 0 !== yV && null !== yV && this[bV].delete(eV);
            UV[eV] = JV
          }
        }
      }(VV, eV, xV), {
        get: function() {
          return this[FV][eV]
        },
        set: UV,
        enumerable: !0,
        configurable: !0
      }
    }

    function PJ() {
      let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(eV, xV) {
        const JV = ue.initialize(eV.constructor);
        ue.setDeprecated(JV, xV), VV && (JV[PV] ??= {}, JV[PV][xV] = {
          get: function() {
            throw new Error(`${xV} is deprecated.`)
          },
          set: function(VV) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(eV, xV, JV[PV][xV]))
      }
    }
    let AJ = !1;

    function NJ(VV, eV, xV) {
      AJ || (AJ = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let JV in eV) tJ(eV[JV], xV)(VV.prototype, JV);
      return VV
    }

    function XJ(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zJ;
      if (null == VV || "object" !== typeof VV) throw new Error(`schema(): first argument must be a fields object (got ${typeof VV}).`);
      const JV = {},
        YV = {},
        UV = {},
        yV = {},
        pV = (VV, eV) => {
          if (eV.hasDefault)((VV, eV) => {
            "function" === typeof eV ? yV[VV] = eV : eV && "function" === typeof eV.clone ? yV[VV] = () => eV.clone() : UV[VV] = eV
          })(VV, eV.default);
          else if (!eV.optional) {
            const xV = function(VV) {
              if (VV && "object" === typeof VV) {
                if (void 0 !== VV.array) return () => new xJ;
                if (void 0 !== VV.map) return () => new YJ;
                if (void 0 !== VV.set) return () => new yJ;
                if (void 0 !== VV.collection) return () => new UJ;
                if (void 0 !== VV.stream) return () => new pJ
              } else if ("function" === typeof VV && zJ.is(VV) && (!VV.prototype.initialize || 0 === VV.prototype.initialize.length)) return () => new VV
            }(eV.type);
            xV && (yV[VV] = xV)
          }
        },
        QV = {},
        nV = [],
        wV = [],
        ZV = {},
        vV = [],
        rV = [],
        kV = {},
        bV = [];
      for (const FV in VV) {
        const xV = VV[FV],
          UV = `schema(${eV?`'${eV}'`:""}): field '${FV}'`;
        if (nJ(xV)) {
          const VV = xV.toDefinition();
          if (VV.noSync) {
            if (void 0 !== VV.view || VV.unreliable || VV.patchOnly || VV.fullStateOnly || VV.stream) throw new Error(`${UV} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            pV(FV, VV);
            continue
          }
          if (VV.patchOnly && VV.fullStateOnly) throw new Error(`${UV} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const eV = Le(VV.type, UV);
          if ("function" === typeof eV && !zJ.is(eV)) throw new Error(`${UV} is a synced ref to non-Schema class '${eV.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          JV[FV] = eV, void 0 !== VV.view && (QV[FV] = VV.view), VV.unreliable && nV.push(FV), VV.patchOnly && wV.push(FV), VV.deprecated && (ZV[FV] = VV.deprecatedThrows), VV.fullStateOnly && vV.push(FV), VV.stream && rV.push(FV), void 0 !== VV.streamPriority && (kV[FV] = VV.streamPriority), VV.optional && bV.push(FV), pV(FV, VV)
        } else {
          if ("function" !== typeof xV) throw new Error(`${UV} must be a t.* builder, Schema subclass, or method (got ${typeof xV}).`);
          zJ.is(xV) ? (JV[FV] = xV, xV.prototype.initialize && 0 !== xV.prototype.initialize.length || (yV[FV] = () => new xV)) : YV[FV] = xV
        }
      }
      const EV = VV => {
          for (const eV in UV) VV[eV] = UV[eV];
          for (const eV in yV) VV[eV] = yV[eV]()
        },
        BV = () => {
          const VV = {};
          return EV(VV), VV
        },
        jV = "function" === typeof YV.initialize,
        qV = YV.initialize ?? xV._initialize,
        tV = class extends xV {
          constructor() {
            for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
            const YV = eV[0];
            void 0 === YV ? (super(), EV(this)) : super(Object.assign(BV(), jV ? (VV => {
              const eV = Object.keys(JV),
                xV = {};
              for (const JV in VV) eV.includes(JV) || (xV[JV] = VV[JV]);
              return xV
            })(YV) : YV)), qV && new.target === tV && qV.apply(this, eV)
          }
        };
      eV && Object.defineProperty(tV, "name", {
        value: eV
      }), ue.setFields(tV, JV), tV._getDefaultValues = BV, tV._initialize = qV, Object.assign(tV.prototype, YV);
      for (const FV in QV) EJ(QV[FV])(tV.prototype, FV);
      for (const FV of nV) BJ(tV.prototype, FV);
      for (const FV of wV) jJ(tV.prototype, FV);
      for (const FV in ZV) PJ(ZV[FV])(tV.prototype, FV);
      if (vV.length > 0 || rV.length > 0) {
        const VV = tV[Symbol.metadata];
        for (const eV of vV) ue.setFullStateOnly(VV, eV);
        for (const eV of rV) ue.setStream(VV, eV);
        for (const eV in kV) ue.setStreamPriority(VV, eV, kV[eV])
      }
      if (bV.length > 0) {
        const VV = tV[Symbol.metadata];
        for (const eV of bV) VV[VV[eV]].optional = !0
      }
      return tV.extend = (VV, eV) => XJ(VV, eV, tV), tV
    }

    function MJ(VV) {
      const eV = VV[bV].root,
        xV = {
          ops: {},
          refs: []
        };
      let JV = eV.changes.next;
      for (; JV;) {
        const VV = JV.changeTree;
        void 0 !== VV ? (xV.refs.push(`refId#${VV.ref[pV]}`), VV.forEach(((VV, eV) => {
          if (VV < 0 || !eV) return;
          const JV = YV[eV];
          xV.ops[JV] || (xV.ops[JV] = 0), xV.ops[JV]++
        })), JV = JV.next) : JV = JV.next
      }
      return xV
    }
    class zJ {
      static[nV] = Dx;
      static[wV] = sx;
      [pV];
      [FV];
      static initialize(VV) {
        Object.defineProperty(VV, bV, {
          value: new Gx(VV),
          enumerable: !1,
          writable: !0
        }), VV[FV] = []
      }
      static initializeForDecoder() {
        const VV = Object.create(this.prototype);
        return Rx(VV), VV[FV] = [], VV
      }
      static reset(VV) {
        const eV = VV?.[bV];
        if (void 0 === eV || "function" !== typeof eV.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== eV.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${VV.constructor.name}) with multiple parents.`);
        VV[qV]()
      } [qV]() {
        const VV = this.constructor[Symbol.metadata],
          eV = VV?.[MV] ?? [],
          xV = this[FV];
        for (let JV = 0; JV < eV.length; JV++) {
          const VV = xV[eV[JV]];
          VV?.[qV]?.()
        }
        this[bV].recycle(), this[pV] = void 0
      }
      static is(VV) {
        const eV = VV[Symbol.metadata];
        return "object" === typeof eV && null !== eV
      }
      static isSchema(VV) {
        return "function" === typeof VV?.assign
      }
      static[QV](VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YV.ADD;
        VV.change(eV, xV)
      }
      static[ZV](VV, eV, xV) {
        const JV = VV.constructor[Symbol.metadata],
          YV = JV[eV]?.tag;
        return void 0 === xV ? void 0 === YV : void 0 === YV || (YV === kJ ? xV.isChangeTreeVisible(VV[bV]) : xV.hasTagOnTree(VV[bV], YV))
      }
      constructor(VV) {
        zJ.initialize(this), VV && zJ.assignProps(this, VV)
      }
      assign(VV) {
        return zJ.assignProps(this, VV), this
      }
      static assignProps(VV, eV) {
        const xV = VV.constructor[Symbol.metadata];
        if (xV && void 0 !== xV[XV])
          for (let YV = 0; YV <= xV[XV]; YV++) {
            const JV = xV[YV];
            if (!JV) continue;
            const UV = eV[JV.name];
            void 0 !== UV && (VV[JV.name] = UV)
          }
        const JV = Object.keys(eV);
        for (let YV = 0; YV < JV.length; YV++) {
          const UV = JV[YV];
          xV && void 0 !== xV[UV] || (VV[UV] = eV[UV])
        }
      }
      restore(VV) {
        const eV = this.constructor[Symbol.metadata];
        for (const xV in eV) {
          const JV = eV[xV],
            YV = JV.name,
            UV = JV.type,
            yV = VV[YV];
          if (void 0 !== yV && null !== yV)
            if ("string" === typeof UV) this[YV] = yV;
            else if (zJ.is(UV)) {
            const VV = new UV;
            VV.restore(yV), this[YV] = VV
          } else if ("object" === typeof UV) {
            const VV = Object.keys(UV)[0],
              eV = UV[VV];
            if ("map" === VV) {
              const VV = this[YV];
              for (const xV in yV)
                if (zJ.is(eV)) {
                  const JV = new eV;
                  JV.restore(yV[xV]), VV.set(xV, JV)
                } else VV.set(xV, yV[xV])
            } else if ("array" === VV) {
              const VV = this[YV];
              for (let xV = 0; xV < yV.length; xV++)
                if (zJ.is(eV)) {
                  const JV = new eV;
                  JV.restore(yV[xV]), VV.push(JV)
                } else VV.push(yV[xV])
            }
          }
        }
        return this
      }
      setDirty(VV, eV) {
        const xV = this.constructor[Symbol.metadata];
        this[bV].change(xV[xV[VV]].index, eV)
      }
      pauseTracking() {
        this[bV].pause()
      }
      resumeTracking() {
        this[bV].resume()
      }
      untracked(VV) {
        return this[bV].untracked(VV)
      }
      get isTrackingPaused() {
        return this[bV].paused
      }
      clone() {
        const VV = Object.create(this.constructor.prototype);
        zJ.initialize(VV);
        const eV = this.constructor[Symbol.metadata];
        for (const xV in eV) {
          const JV = eV[xV].name;
          "object" === typeof this[JV] && "function" === typeof this[JV]?.clone ? VV[JV] = this[JV].clone() : VV[JV] = this[JV]
        }
        return VV
      }
      toJSON() {
        const VV = {},
          eV = this.constructor[Symbol.metadata];
        for (const xV in eV) {
          const JV = eV[xV],
            YV = JV.name;
          JV.deprecated || null === this[YV] || "undefined" === typeof this[YV] || (VV[YV] = "function" === typeof this[YV].toJSON ? this[YV].toJSON() : this[YV])
        }
        return VV
      }
      discardAllChanges() {
        this[bV].discardAll()
      } [vV](VV) {
        return this[this.constructor[Symbol.metadata][VV].name]
      } [rV](VV) {
        this[this.constructor[Symbol.metadata][VV].name] = void 0
      }
      static debugRefIds(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 ? arguments[3] : void 0,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const UV = eV ? ` - ${JSON.stringify(VV.toJSON())}` : "",
          yV = VV[bV],
          QV = VV[pV],
          nV = JV ? JV.root.refCount[QV] : yV.refCount,
          wV = nV > 1 ? ` [\xd7${nV}]` : "";
        let ZV = `${function(VV){return new Array(VV).fill(0).map(((eV,xV)=>xV===VV-1?"\u2514\u2500 ":"   ")).join("")}(xV)}${YV}${VV.constructor.name} (refId: ${QV})${wV}${UV}\n`;
        return yV.forEachChild(((YV, UV) => {
          let yV = UV;
          "number" === typeof UV && VV.$indexes && (yV = VV.$indexes.get(UV) ?? UV);
          const pV = void 0 !== VV.forEach && void 0 !== yV ? `["${yV}"]: ` : "";
          ZV += this.debugRefIds(YV.ref, eV, xV + 1, JV, pV)
        })), ZV
      }
      static debugRefIdEncodingOrder(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const xV = [],
          JV = VV[bV];
        if ("changes" === eV) {
          let VV = JV.root.changes?.next;
          for (; VV;) VV.changeTree && xV.push(VV.changeTree.ref[pV]), VV = VV.next;
          return xV
        }
        const YV = "allFilteredChanges" === eV,
          UV = new Set,
          yV = VV => {
            UV.has(VV) || (UV.add(VV), VV.isFiltered === YV && xV.push(VV.ref[pV]), VV.forEachChild(((VV, eV) => yV(VV))))
          };
        return yV(JV), xV
      }
      static debugRefIdsFromDecoder(VV) {
        return this.debugRefIds(VV.state, !1, 0, VV)
      }
      static debugChanges(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = VV[bV],
          JV = eV ? "allChanges" : "changes";
        let UV = `${VV.constructor.name} (${VV[pV]}) -> .${JV}:\n`;
        return eV ? xV.forEachLive((VV => {
          UV += `- [${VV}]: ADD (${JSON.stringify(xV.getValue(Number(VV),!0))})\n`
        })) : xV.forEach(((VV, eV) => {
          VV < 0 || !eV || (UV += `- [${VV}]: ${YV[eV]} (${JSON.stringify(xV.getValue(Number(VV),!1))})\n`)
        })), UV
      }
    }
    UV(zJ);
    const GJ = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class WJ {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const VV = {};
        for (const eV in this.changeTrees) VV[eV] = this.changeTrees[eV].refCount;
        return VV
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
      enqueueFilterRefresh(VV) {
        this.types.hasFilters && (VV.flags & Mx || (VV.flags |= Mx, this.pendingFilterRefresh.push(VV)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(VV) {
        this._freeViewIds.push(VV)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(VV) {
        this.activeViews.set(VV.id, new WeakRef(VV))
      }
      unregisterView(VV) {
        this.activeViews.delete(VV.id);
        const eV = VV.id;
        for (const xV of this.streamTrees) xV._dropView(eV)
      }
      forEachActiveView(VV) {
        for (const [eV, xV] of this.activeViews) {
          const JV = xV.deref();
          if (void 0 !== JV) VV(JV);
          else {
            this.activeViews.delete(eV);
            for (const VV of this.streamTrees) VV._dropView(eV)
          }
        }
      }
      registerStream(VV) {
        this.streamTrees.add(VV)
      }
      unregisterStream(VV) {
        this.streamTrees.delete(VV)
      }
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = VV, this.nextUniqueId = eV
      }
      add(VV) {
        const eV = VV.ref;
        void 0 === eV[pV] && (GJ.value = this.nextUniqueId++, Object.defineProperty(eV, pV, GJ));
        const xV = eV[pV],
          JV = void 0 === this.changeTrees[xV];
        JV && (this.changeTrees[xV] = VV), VV.needsRestage && (VV.needsRestage = !1, VV.forEachLiveWithCtx(VV, xx));
        const YV = JV ? 0 : VV.refCount;
        return VV.refCount = YV + 1, YV > 0 && this.enqueueFilterRefresh(VV), JV
      }
      remove(VV) {
        const eV = VV.refCount - 1;
        if (eV <= 0) {
          if (VV.root = void 0, delete this.changeTrees[VV.ref[pV]], VV.isStreamCollection) {
            const eV = VV.ref;
            eV._unregister?.(), this.unregisterStream(eV)
          }
          this.removeFromQueue(VV), this.removeFromUnreliableQueue(VV), VV.refCount = 0, VV.needsRestage = !0, VV.forEachChild(((eV, xV) => {
            eV.removeParent(VV.ref) && (void 0 === eV.parentRef || eV.refCount > 0 ? this.remove(eV) : this.moveNextToParent(eV))
          }))
        } else VV.refCount = eV, this.enqueueFilterRefresh(VV), this.recursivelyMoveNextToParent(VV);
        return eV
      }
      recursivelyMoveNextToParent(VV) {
        this.moveNextToParent(VV), VV.forEachChild(((VV, eV) => this.recursivelyMoveNextToParent(VV)))
      }
      moveNextToParent(VV) {
        VV.changesNode && this._moveNextToParentInList(this.changes, VV, VV.changesNode, "changesNode"), VV.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, VV, VV.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(VV, eV, xV, JV) {
        const YV = eV.parent;
        if (!YV || !YV[bV]) return;
        const UV = YV[bV][JV];
        UV && UV !== xV && (xV.position > UV.position || (xV.prev ? xV.prev.next = xV.next : VV.next = xV.next, xV.next ? xV.next.prev = xV.prev : VV.tail = xV.prev, xV.prev = VV.tail, xV.next = void 0, VV.tail.next = xV, VV.tail = xV, xV.position = VV.nextPosition++))
      }
      enqueueChangeTree(VV) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV.changesNode) || (VV.changesNode = this._appendToList(this.changes, VV))
      }
      enqueueUnreliable(VV) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV.unreliableChangesNode) || (VV.unreliableChangesNode = this._appendToList(this.unreliableChanges, VV))
      }
      _appendToList(VV, eV) {
        const xV = this._nodePool;
        let JV;
        return xV.length > 0 ? (JV = xV.pop(), JV.changeTree = eV, JV.next = void 0, JV.prev = void 0) : JV = {
          changeTree: eV,
          next: void 0,
          prev: void 0,
          position: 0
        }, VV.next ? (JV.prev = VV.tail, VV.tail.next = JV, VV.tail = JV) : (VV.nextPosition = 0, VV.next = JV, VV.tail = JV), JV.position = VV.nextPosition++, JV
      }
      releaseNode(VV) {
        VV.changeTree = void 0, VV.prev = void 0, VV.next = void 0, this._nodePool.push(VV)
      }
      removeFromQueue(VV) {
        return this._removeNode(this.changes, VV, VV.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(VV) {
        return this._removeNode(this.unreliableChanges, VV, VV.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(VV, eV, xV, JV) {
        return !(!xV || xV.changeTree !== eV) && (xV.prev ? xV.prev.next = xV.next : VV.next = xV.next, xV.next ? xV.next.prev = xV.prev : VV.tail = xV.prev, eV[JV] = void 0, this.releaseNode(xV), !0)
      }
    }

    function RJ(VV, eV) {
      if (-1 === eV || eV >= VV.length) return !1;
      const xV = VV.length - 1;
      for (let JV = eV; JV < xV; JV++) VV[JV] = VV[JV + 1];
      return VV.length = xV, !0
    }

    function gJ(VV, eV, xV) {
      const JV = ~xV,
        YV = VV.changeTrees;
      for (const UV in YV) {
        const VV = YV[UV],
          xV = VV.visibleViews;
        void 0 !== xV && eV < xV.length && (xV[eV] &= JV);
        const yV = VV.subscribedViews;
        void 0 !== yV && eV < yV.length && (yV[eV] &= JV);
        const pV = VV.tagViews;
        void 0 !== pV && pV.forEach((VV => {
          eV < VV.length && (VV[eV] &= JV)
        }))
      }
    }
    const DJ = new FinalizationRegistry((VV => {
      let {
        root: eV,
        id: xV,
        slot: JV,
        bit: YV
      } = VV;
      gJ(eV, JV, YV), eV.activeViews.delete(xV);
      for (const UV of eV.streamTrees) UV._dropView(xV);
      eV.releaseViewId(xV)
    }));

    function iJ(VV) {
      if (void 0 === VV) return "undefined";
      if (null === VV) return "null";
      const eV = typeof VV;
      return "string" === eV ? JSON.stringify(VV.length > 30 ? `${VV.slice(0,30)}\u2026` : VV) : "object" !== eV && "function" !== eV ? `${eV} ${String(VV)}` : Array.isArray(VV) ? `Array(${VV.length})` : VV.constructor?.name ?? "Object"
    }
    class CJ {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = VV, VV && (this.items = [])
      }
      _bindRoot(VV) {
        void 0 === this._root && (this._root = VV, this.id = VV.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), VV.registerView(this), DJ.register(this, {
          root: VV,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), gJ(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), DJ.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(VV) {
        const eV = VV.visibleViews,
          xV = this._slot;
        return void 0 !== eV && xV < eV.length && 0 !== (eV[xV] & this._bit)
      }
      markVisible(VV) {
        const eV = this._slot;
        let xV = VV.visibleViews;
        for (void 0 === xV && (xV = VV.visibleViews = []); xV.length <= eV;) xV.push(0);
        xV[eV] |= this._bit
      }
      unmarkVisible(VV) {
        const eV = VV.visibleViews;
        if (void 0 === eV) return;
        const xV = this._slot;
        xV < eV.length && (eV[xV] &= ~this._bit)
      }
      isSubscribed(VV) {
        const eV = VV.subscribedViews,
          xV = this._slot;
        return void 0 !== eV && xV < eV.length && 0 !== (eV[xV] & this._bit)
      }
      _setSubscribed(VV) {
        const eV = this._slot;
        let xV = VV.subscribedViews;
        for (void 0 === xV && (xV = VV.subscribedViews = []); xV.length <= eV;) xV.push(0);
        xV[eV] |= this._bit
      }
      _clearSubscribed(VV) {
        const eV = VV.subscribedViews;
        if (void 0 === eV) return;
        const xV = this._slot;
        xV < eV.length && (eV[xV] &= ~this._bit)
      }
      hasTagOnTree(VV, eV) {
        const xV = VV.tagViews;
        if (void 0 === xV) return !1;
        const JV = this._slot,
          YV = this._bit;
        for (let UV = eV; 0 !== UV; UV &= UV - 1) {
          const VV = xV.get(UV & -UV);
          if (void 0 !== VV && JV < VV.length && 0 !== (VV[JV] & YV)) return !0
        }
        return !1
      }
      addTag(VV, eV) {
        if (eV === kJ) return;
        let xV = VV.tagViews;
        void 0 === xV && (xV = VV.tagViews = new Map);
        const JV = this._slot,
          YV = this._bit;
        for (let UV = eV; UV > 0; UV &= UV - 1) {
          const VV = UV & -UV;
          let eV = xV.get(VV);
          for (void 0 === eV && (eV = [], xV.set(VV, eV)); eV.length <= JV;) eV.push(0);
          eV[JV] |= YV
        }
      }
      removeTag(VV, eV) {
        if (eV === kJ) return;
        const xV = VV.tagViews;
        if (void 0 === xV) return;
        const JV = this._slot,
          YV = ~this._bit;
        for (let UV = eV; UV > 0; UV &= UV - 1) {
          const VV = xV.get(UV & -UV);
          void 0 !== VV && JV < VV.length && (VV[JV] &= YV)
        }
      }
      removeAllTagsOnTree(VV) {
        const eV = VV.tagViews;
        if (void 0 === eV) return;
        const xV = this._slot,
          JV = ~this._bit;
        eV.forEach((VV => {
          xV < VV.length && (VV[xV] &= JV)
        }))
      }
      add(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kJ,
          xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(VV, eV, xV, !1)
      }
      _addImmediate(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kJ;
        this._add(VV, eV, !0, !0)
      }
      _add(VV, eV, xV, JV) {
        const UV = VV?.[bV];
        if (!UV) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${iJ(VV)}`), !1;
        const yV = UV.parent;
        if (!yV && 0 !== VV[pV]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${UV.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== UV.root && this._bindRoot(UV.root);
        const QV = yV?.[bV];
        if (!JV && QV?.isStreamCollection) return Re(yV, this.id, UV.parentIndex), !0;
        const nV = VV.constructor[Symbol.metadata],
          wV = this.isVisible(UV);
        if (!this.iterable || !xV || wV && -1 !== this.items.indexOf(VV) || this.items.push(VV), this.markVisible(UV), xV && yV && this.addParentOf(UV, eV), !JV && UV.isStreamCollection) return !0;
        if (eV === kJ && UV.isNew) return this._markSubtreeVisible(UV, eV), !1;
        let ZV = this.changes.get(VV[pV]);
        void 0 === ZV && (ZV = new Map, this.changes.set(VV[pV], ZV));
        let vV = !1;
        const rV = UV.encDescriptor.tags;
        if (UV.forEachChild(((VV, xV) => {
            const JV = rV[xV];
            if (void 0 !== JV) {
              if (!(JV === kJ || eV !== kJ && 0 !== (JV & eV))) return
            }
            this.add(VV.ref, eV, !1) && (vV = !0)
          })), eV !== kJ) {
          this.addTag(UV, eV);
          const VV = nV?.[GV];
          if (void 0 !== VV)
            for (let xV = eV; xV > 0; xV &= xV - 1) VV[xV & -xV]?.forEach((VV => {
              UV.getChange(VV) !== YV.DELETE && ZV.set(VV, YV.ADD)
            }))
        }
        if ((eV === kJ || !wV) && (!UV.isNew || vV))
          if (UV.isArray && "string" !== typeof UV.refTarget[EV]) UV.refTarget.items.length > 0 && (ZV.set(-1, YV.ADD), vV = !0);
          else {
            const VV = UV.encDescriptor.tags;
            UV.forEachLive((xV => {
              const JV = VV[xV];
              (void 0 === JV || JV === kJ || eV !== kJ && 0 !== (JV & eV)) && (ZV.set(xV, YV.ADD), vV = !0)
            }))
          } return vV
      }
      _markSubtreeVisible(VV, eV) {
        const xV = VV.encDescriptor.tags;
        VV.forEachChild(((VV, JV) => {
          const YV = xV[JV];
          if (void 0 !== YV) {
            if (!(YV === kJ || eV !== kJ && 0 !== (YV & eV))) return
          }
          VV.isNew ? (this.markVisible(VV), this._markSubtreeVisible(VV, eV)) : this._add(VV.ref, eV, !1, !1)
        }))
      }
      addParentOf(VV, eV) {
        const xV = VV.parent[bV],
          JV = VV.parentIndex;
        this.isVisible(xV) || this.markVisible(xV);
        const UV = xV.parent?.[bV];
        if (UV && this.addParentOf(xV, eV), xV.hasFilteredFields && xV.getChange(JV) !== YV.DELETE) {
          let UV = this.changes.get(xV.ref[pV]);
          void 0 === UV && (UV = new Map, this.changes.set(xV.ref[pV], UV));
          const yV = xV.encDescriptor.tags[JV];
          void 0 !== yV && yV !== kJ && 0 !== (yV & eV) && this.addTag(xV, eV), UV.set(xV.isArray ? VV : JV, YV.ADD)
        }
      }
      _touchAncestorsOf(VV) {
        let eV = VV.parent?.[bV];
        if (void 0 === eV) return;
        const xV = [];
        for (; void 0 !== eV;) {
          if (eV.hasFilteredFields) {
            const VV = eV.ref[pV];
            if (this.changes.has(VV)) break;
            xV.push(eV)
          }
          eV = eV.parent?.[bV]
        }
        for (let JV = xV.length - 1; JV >= 0; JV--) this.changes.set(xV[JV].ref[pV], new Map)
      }
      remove(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kJ,
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = VV?.[bV];
        if (!JV) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${iJ(VV)}`), this;
        const UV = JV.parent?.[bV];
        if (UV?.isStreamCollection) return this.unmarkVisible(JV), this.iterable && !xV && RJ(this.items, this.items.indexOf(VV)),
          function(VV, eV, xV, JV, UV) {
            const yV = VV._stream;
            if (void 0 === yV) return !1;
            const pV = yV.pendingByView.get(eV);
            if (pV?.has(JV)) return pV.delete(JV), !1;
            const QV = yV.sentByView.get(eV);
            if (QV?.has(JV)) {
              QV.delete(JV);
              let VV = UV.get(xV);
              return void 0 === VV && (VV = new Map, UV.set(xV, VV)), VV.set(JV, YV.DELETE), !0
            }
          }(JV.parent, this.id, JV.parent[pV], JV.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(JV), this;
        if (JV.isStreamCollection) {
          this.unmarkVisible(JV), this.iterable && !xV && RJ(this.items, this.items.indexOf(VV));
          const eV = JV.ref,
            UV = eV._stream;
          if (void 0 !== UV) {
            UV.pendingByView.get(this.id)?.clear();
            const VV = UV.sentByView.get(this.id);
            if (void 0 !== VV && VV.size > 0) {
              const xV = eV[pV];
              let JV = this.changes.get(xV);
              void 0 === JV && (JV = new Map, this.changes.set(xV, JV));
              for (const eV of VV) JV.set(eV, YV.DELETE);
              VV.clear()
            }
          }
          return this
        }
        this.unmarkVisible(JV), this.iterable && !xV && RJ(this.items, this.items.indexOf(VV));
        const yV = JV.ref,
          QV = yV.constructor[Symbol.metadata],
          nV = yV[pV];
        this._touchAncestorsOf(JV);
        let wV = this.changes.get(nV);
        if (void 0 === wV && (wV = new Map, this.changes.set(nV, wV)), eV === kJ) {
          const VV = JV.parent;
          if (VV && !ue.isValidInstance(VV) && JV.isFiltered) {
            const eV = UV.isArray ? JV : JV.parentIndex,
              xV = VV[pV];
            let yV = this.changes.get(xV);
            void 0 === yV ? (yV = new Map, this.changes.set(xV, yV)) : yV.get(eV) === YV.ADD && this._dropPendingEntries(JV), yV.set(eV, YV.DELETE), this._recursiveDeleteVisibleChangeTree(JV)
          } else QV?.[zV]?.forEach((VV => this._removeViewField(JV, wV, VV)))
        } else {
          const VV = QV?.[GV];
          if (void 0 !== VV)
            for (let xV = eV; xV > 0; xV &= xV - 1) VV[xV & -xV]?.forEach((VV => this._removeViewField(JV, wV, VV)))
        }
        return void 0 === eV ? this.removeAllTagsOnTree(JV) : this.removeTag(JV, eV), this
      }
      has(VV) {
        return this.isVisible(VV[bV])
      }
      hasTag(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kJ;
        return this.hasTagOnTree(VV[bV], eV)
      }
      subscribe(VV, eV) {
        const xV = VV?.[bV];
        if (!xV) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${iJ(VV)}`), this;
        if (void 0 === this._root && void 0 !== xV.root && this._bindRoot(xV.root), void 0 !== eV)
          if (xV.isStreamCollection) {
            const xV = Xe(VV);
            null === eV ? xV.priorityByView?.delete(this.id) : (xV.priorityByView ??= new Map).set(this.id, eV)
          } else {
            const eV = VV?.constructor?.name ?? "collection",
              JV = xV.parent;
            if (void 0 === JV) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${eV} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const VV = JV?.constructor?.[Symbol.metadata]?.[xV.parentIndex]?.name,
                YV = VV ? `${JV.constructor.name}#${VV}` : eV;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${YV} is a ${eV}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(xV)) return this;
        const JV = void 0 !== xV.parent && !this.isVisible(xV);
        if (JV ? (this.addParentOf(xV, kJ), this._add(VV, kJ, !1, !1)) : this.markVisible(xV), this._setSubscribed(xV), xV.isStreamCollection) {
          const eV = VV;
          xV.forEachChild(((VV, xV) => {
            Re(eV, this.id, xV)
          }))
        } else JV || xV.forEachChild((VV => {
          this.markVisible(VV)
        }));
        return this
      }
      unsubscribe(VV) {
        const eV = VV?.[bV];
        if (!eV) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${iJ(VV)}`), this;
        if (!this.isSubscribed(eV)) return this;
        this._clearSubscribed(eV);
        const xV = eV.ref[pV];
        if (eV.isStreamCollection) {
          const eV = VV._stream;
          if (void 0 !== eV) {
            eV.pendingByView.get(this.id)?.clear();
            const VV = eV.sentByView.get(this.id);
            if (void 0 !== VV && VV.size > 0) {
              let eV = this.changes.get(xV);
              void 0 === eV && (eV = new Map, this.changes.set(xV, eV));
              for (const xV of VV) eV.set(xV, YV.DELETE);
              VV.clear()
            }
          }
        } else {
          const VV = eV.isArray;
          let JV = this.changes.get(xV);
          eV.forEachChild(((eV, UV) => {
            void 0 === JV && (JV = new Map, this.changes.set(xV, JV)), JV.set(VV ? eV : UV, YV.DELETE), this.unmarkVisible(eV)
          }))
        }
        return this.unmarkVisible(eV), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let VV = 0, eV = this.items.length; VV < eV; VV++) this.remove(this.items[VV], kJ, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(VV) {
        let eV = this.isVisible(VV);
        if (!eV && VV.isVisibilitySharedWithParent)
          if (this.isVisible(VV.parent[bV])) this.markVisible(VV), eV = !0;
          else
            for (let xV = VV.extraParents; void 0 !== xV; xV = xV.next) {
              const JV = xV.ref[bV];
              if (JV.isFiltered && this.isVisible(JV)) {
                this.markVisible(VV), eV = !0;
                break
              }
            }
        return eV
      }
      _recursiveDeleteVisibleChangeTree(VV) {
        VV.forEachChild((VV => {
          this.unmarkVisible(VV), this._recursiveDeleteVisibleChangeTree(VV)
        }))
      }
      _dropPendingEntries(VV) {
        this.changes.delete(VV.ref[pV]), VV.forEachChild((VV => this._dropPendingEntries(VV)))
      }
      _removeViewField(VV, eV, xV) {
        const JV = eV.get(xV) === YV.ADD;
        eV.set(xV, YV.DELETE);
        const UV = VV.ref[VV.encDescriptor.names[xV]],
          yV = UV?.[bV];
        yV && (this.unmarkVisible(yV), this._recursiveDeleteVisibleChangeTree(yV), JV && this._dropPendingEntries(yV))
      }
    }

    function aJ(VV) {
      VV.structSwitchEmitted || (VV.shouldEmitSwitch && (VV.buffer[VV.it.offset++] = 255, ee.number(VV.buffer, VV.ref[pV], VV.it)), VV.structSwitchEmitted = !0)
    }

    function oJ(VV, eV) {
      lJ(VV, eV, YV.ADD)
    }

    function cJ(VV, eV) {
      if (eV._fullSyncGen === VV.gen) return;
      eV._fullSyncGen = VV.gen;
      if (!VV.hasView || VV.view.isChangeTreeVisible(eV)) {
        const xV = eV.encDescriptor;
        VV.changeTree = eV, VV.ref = eV.ref, VV.encoder = xV.encoder, VV.filter = xV.filter, VV.metadata = xV.metadata, VV.treeIsFiltered = eV.isFiltered, VV.isSchema = xV.isSchema, VV.filterBitmask = xV.filterBitmask, VV.tags = xV.tags, VV.structSwitchEmitted = !1, VV.shouldEmitSwitch = VV.hasView || VV.it.offset > VV.initialOffset || eV !== VV.rootChangeTree, eV.isArray && eV.collDirty.size > 0 && (eV.flags |= 512), Yx(eV, VV, oJ)
      }
      Bx(eV, VV, hJ)
    }

    function hJ(VV, eV, xV) {
      cJ(VV, eV)
    }

    function lJ(VV, eV, xV) {
      if (eV < 0) {
        if (VV.treeIsFiltered !== VV.emitFiltered) return;
        return aJ(VV), void(VV.buffer[VV.it.offset++] = 255 & Math.abs(eV))
      }
      if ((VV.isSchema ? VV.treeIsFiltered || (eV < 32 ? 0 !== (VV.filterBitmask & 1 << eV) : void 0 !== VV.tags[eV]) : VV.treeIsFiltered) !== VV.emitFiltered) return;
      const JV = VV.isEncodeAll ? YV.ADD : xV;
      void 0 !== JV && (void 0 === VV.filter || VV.filter(VV.ref, eV, VV.view)) && (aJ(VV), VV.encoder(VV.self, VV.buffer, VV.changeTree, eV, JV, VV.it, VV.isEncodeAll, VV.hasView, VV.metadata))
    }

    function LJ(VV, eV) {
      const xV = new Uint8Array(VV.length + eV.length);
      return xV.set(VV, 0), xV.set(eV, VV.length), xV
    }
    class fJ {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(fJ.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(VV, eV) {
        this.context = he.cache(VV.constructor), this.root = eV ?? new WJ(this.context), this.setState(VV)
      }
      setState(VV) {
        this.state = VV, this.state[bV].setRoot(this.root)
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
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV.offset;
        return this._encodeChannel(VV, eV, xV, JV, !1)
      }
      encodeUnreliable() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV.offset;
        return this._encodeChannel(VV, eV, xV, JV, !0)
      }
      _encodeChannel(VV, eV, xV, JV, YV) {
        this.root.pendingFilterRefresh.length > 0 && yx(this.root);
        const UV = void 0 !== eV,
          yV = this.state[bV],
          pV = this._encodeCtx;
        pV.self = this, pV.buffer = xV, pV.it = VV, pV.view = eV, pV.isEncodeAll = !1, pV.hasView = UV, pV.emitFiltered = UV;
        let QV = YV ? this.root.unreliableChanges : this.root.changes;
        for (; QV = QV.next;) {
          const xV = QV.changeTree;
          if (UV && !eV.isChangeTreeVisible(xV)) continue;
          const nV = YV ? xV.unreliableRecorder : xV;
          if (!nV || !nV.has()) continue;
          const wV = xV.encDescriptor;
          pV.changeTree = xV, pV.ref = xV.ref, pV.encoder = wV.encoder, pV.filter = wV.filter, pV.metadata = wV.metadata, pV.treeIsFiltered = xV.isFiltered, pV.isSchema = wV.isSchema, pV.filterBitmask = wV.filterBitmask, pV.tags = wV.tags, pV.structSwitchEmitted = !1, pV.isRootTree = xV === yV, pV.shouldEmitSwitch = UV || VV.offset > JV || !pV.isRootTree, nV.forEachWithCtx(pV, lJ)
        }
        return YV || UV || !this._isStreamBroadcastMode || this._emitStreamBroadcast(xV, VV), VV.offset > xV.byteLength ? (xV = this._resizeBuffer(xV, VV.offset), VV.offset = JV, this._encodeChannel(VV, eV, xV, JV, YV)) : xV.subarray(0, VV.offset)
      }
      encodeFullSync(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : VV.offset;
        this.root.pendingFilterRefresh.length > 0 && yx(this.root);
        const UV = void 0 !== JV,
          yV = this.state[bV],
          pV = this._encodeCtx;
        return pV.self = this, pV.buffer = eV, pV.it = VV, pV.view = JV, pV.isEncodeAll = !0, pV.hasView = UV, pV.emitFiltered = xV, pV.gen = ++this._fullSyncGen, pV.initialOffset = YV, pV.rootChangeTree = yV, cJ(pV, yV), VV.offset > eV.byteLength ? (eV = this._resizeBuffer(eV, VV.offset), VV.offset = YV, this.encodeFullSync(VV, eV, xV, JV, YV)) : eV.subarray(0, VV.offset)
      }
      _resizeBuffer(VV, eV) {
        const xV = Math.ceil(eV / fJ.BUFFER_SIZE) * fJ.BUFFER_SIZE,
          JV = new Uint8Array(xV);
        return JV.set(VV), VV === this.sharedBuffer && (this.sharedBuffer = JV), JV
      }
      encodeAll() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(VV, eV, !1)
      }
      encodeAllView(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const YV = xV.offset;
        return JV = this.encodeFullSync(xV, JV, !0, VV, YV), LJ(JV.subarray(0, eV), JV.subarray(YV, xV.offset))
      }
      ensureCapacity(VV, eV) {
        if (eV + fJ.BUFFER_SIZE <= VV.byteLength) return VV;
        const xV = Math.ceil((eV + fJ.BUFFER_SIZE) / fJ.BUFFER_SIZE) * fJ.BUFFER_SIZE,
          JV = new Uint8Array(xV);
        return JV.set(VV.subarray(0, eV)), VV === this.sharedBuffer && (this.sharedBuffer = JV), JV
      }
      encodeView(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          UV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const yV = xV.offset;
        this._emitStreamPriority(VV);
        for (const QV of VV.changes.keys()) {
          const eV = VV.changes.get(QV),
            UV = this.root.changeTrees[QV];
          if (void 0 === UV) {
            VV.changes.delete(QV);
            continue
          }
          if (0 === eV.size) continue;
          const yV = UV.encDescriptor,
            nV = yV.encoder,
            wV = yV.metadata,
            ZV = UV.ref,
            rV = UV.refTarget;
          JV = this.ensureCapacity(JV, xV.offset), JV[xV.offset++] = 255, ee.number(JV, ZV[pV], xV);
          for (const [QV, kV] of eV) {
            let eV;
            if (-1 === QV) {
              const VV = rV.tmpItems,
                eV = rV.deletedIndexes;
              for (let yV = 0; yV < VV.length; yV++) void 0 !== VV[yV] && !0 !== eV[yV] && nV(this, JV, UV, yV, YV.ADD, xV, !1, !0, wV);
              continue
            }
            if ("number" === typeof QV) eV = QV;
            else {
              const xV = QV.indexInParent(ZV);
              if (void 0 === xV) continue;
              if (eV = xV, kV === YV.ADD && UV.getChange(eV) === YV.DELETE) {
                VV.changes.delete(QV.ref[pV]);
                continue
              }
            }
            nV(this, JV, UV, eV, void 0 !== rV[vV](eV) && kV || YV.DELETE, xV, !1, !0, wV)
          }
        }
        return VV.changes.clear(), JV = this.encode(xV, VV, JV), UV ? LJ(JV.subarray(0, eV), JV.subarray(yV, xV.offset)) : JV.subarray(yV, xV.offset)
      }
      encodeUnreliableView(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const YV = xV.offset;
        return JV = this.encodeUnreliable(xV, VV, JV, YV), LJ(JV.subarray(0, eV), JV.subarray(YV, xV.offset))
      }
      _emitStreamBroadcast(VV, eV) {
        const xV = this.root.streamTrees;
        for (const JV of xV) {
          const xV = JV,
            UV = xV[bV],
            yV = xV[pV];
          if (void 0 === yV) continue;
          const QV = xV._stream,
            nV = QV.broadcastDeletes,
            wV = QV.broadcastPending,
            ZV = QV.sentBroadcast,
            rV = nV.size > 0,
            kV = wV.size > 0,
            EV = UV.encDescriptor,
            BV = EV.encoder,
            jV = EV.metadata;
          if (rV || kV) {
            if (VV[eV.offset++] = 255, ee.number(VV, yV, eV), rV) {
              for (const xV of nV) BV(this, VV, UV, xV, YV.DELETE, eV, !1, !1, jV);
              nV.clear()
            }
            const JV = QV.maxPerTick,
              kV = [];
            let EV = 0;
            const qV = [];
            for (const yV of wV) {
              if (EV >= JV) break;
              const pV = xV[vV](yV);
              void 0 !== pV ? (BV(this, VV, UV, yV, YV.ADD, eV, !1, !1, jV), ZV.add(yV), kV.push(pV), qV.push(yV), EV++) : qV.push(yV)
            }
            for (const VV of qV) wV.delete(VV);
            for (const xV of kV) {
              const JV = xV[bV];
              if (void 0 === JV) continue;
              const UV = xV[pV];
              if (void 0 === UV) continue;
              VV[eV.offset++] = 255, ee.number(VV, UV, eV);
              const yV = JV.encDescriptor,
                QV = yV.encoder,
                nV = yV.metadata;
              JV.forEachLive((xV => {
                ue.hasUnreliableAtIndex(nV, xV) || QV(this, VV, JV, xV, YV.ADD, eV, !1, !1, nV)
              }))
            }
          }
          for (const JV of ZV) {
            const YV = xV[vV](JV);
            if (void 0 === YV) continue;
            const UV = YV[bV];
            if (void 0 === UV || !UV.has()) continue;
            const yV = YV[pV];
            if (void 0 === yV) continue;
            VV[eV.offset++] = 255, ee.number(VV, yV, eV);
            const QV = UV.encDescriptor,
              nV = QV.encoder,
              wV = QV.metadata;
            UV.forEach(((xV, JV) => {
              xV < 0 || ue.hasUnreliableAtIndex(wV, xV) || nV(this, VV, UV, xV, JV, eV, !1, !1, wV)
            }))
          }
        }
      }
      _emitStreamPriority(VV) {
        const eV = this.root.streamTrees;
        if (0 === eV.size) return;
        const xV = VV.id;
        for (const JV of eV) {
          const eV = JV,
            UV = eV._stream,
            yV = UV.pendingByView.get(xV);
          if (void 0 === yV || 0 === yV.size) continue;
          const QV = UV.priorityByView?.get(xV),
            nV = void 0 !== QV,
            wV = UV.priority,
            ZV = UV.maxPerTick,
            rV = [],
            kV = [];
          if (nV || void 0 !== wV) {
            const xV = [],
              JV = [];
            let YV = 0;
            for (const UV of yV) {
              const yV = eV[vV](UV);
              if (void 0 === yV) {
                kV.push(UV);
                continue
              }
              const pV = nV ? QV(yV) : wV(VV, yV);
              if (YV < ZV) {
                let VV = YV++;
                for (; VV > 0 && JV[VV - 1] < pV;) JV[VV] = JV[VV - 1], xV[VV] = xV[VV - 1], VV--;
                JV[VV] = pV, xV[VV] = UV
              } else if (pV > JV[ZV - 1]) {
                let VV = ZV - 1;
                for (; VV > 0 && JV[VV - 1] < pV;) JV[VV] = JV[VV - 1], xV[VV] = xV[VV - 1], VV--;
                JV[VV] = pV, xV[VV] = UV
              }
            }
            for (let VV = 0; VV < YV; VV++) rV.push(xV[VV])
          } else
            for (const VV of yV) {
              if (rV.length >= ZV) break;
              rV.push(VV)
            }
          for (const VV of kV) yV.delete(VV);
          const EV = rV.length;
          let BV = UV.sentByView.get(xV);
          void 0 === BV && (BV = new Set, UV.sentByView.set(xV, BV));
          for (let xV = 0; xV < EV; xV++) {
            const JV = rV[xV],
              UV = eV[vV](JV);
            if (void 0 === UV) {
              yV.delete(JV);
              continue
            }
            VV._addImmediate(UV);
            const QV = UV[bV];
            if (void 0 !== QV) {
              const eV = UV[pV];
              let xV = VV.changes.get(eV);
              void 0 === xV && (xV = new Map, VV.changes.set(eV, xV));
              const JV = QV.metadata;
              QV.forEachLive((VV => {
                ue.hasUnreliableAtIndex(JV, VV) || xV.set(VV, YV.ADD)
              }))
            }
            yV.delete(JV), BV.add(JV)
          }
        }
      }
      discardChanges() {
        const VV = this.root.changes;
        let eV = VV.next;
        const xV = this.root;
        for (; eV;) {
          const VV = eV.next;
          eV.changeTree.endEncode(), xV.releaseNode(eV), eV = VV
        }
        VV.next = void 0, VV.tail = void 0
      }
      discardUnreliableChanges() {
        const VV = this.root.unreliableChanges;
        let eV = VV.next;
        const xV = this.root;
        for (; eV;) {
          const VV = eV.next;
          eV.changeTree.endEncodeUnreliable(), xV.releaseNode(eV), eV = VV
        }
        VV.next = void 0, VV.tail = void 0
      }
      tryEncodeTypeId(VV, eV, xV, JV) {
        const YV = this.context.getTypeId(eV),
          UV = this.context.getTypeId(xV);
        void 0 !== UV ? YV !== UV && (VV[JV.offset++] = 213, ee.number(VV, UV, JV)) : console.warn(`@colyseus/schema WARNING: Class "${xV.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const VV = this.root;
        if (0 === VV.streamTrees.size) return !1;
        const eV = 0 === VV.activeViews.size;
        for (const xV of VV.streamTrees)
          if (eV ? We(xV) : Ge(xV, VV)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class mJ extends Error {
      constructor(VV) {
        super(VV), this.name = "DecodingWarning"
      }
    }
    const KJ = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class HJ {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(VV, eV), void 0 === eV[pV] ? (KJ.value = VV, Object.defineProperty(eV, pV, KJ)) : eV[pV] !== VV && (eV[pV] = VV), xV && (this.refCount[VV] = (this.refCount[VV] || 0) + 1), this.deletedRefs.has(VV) && this.deletedRefs.delete(VV)
      }
      removeRef(VV) {
        const eV = this.refCount[VV];
        if (void 0 !== eV)
          if (0 !== eV)(this.refCount[VV] = eV - 1) <= 0 && this.deletedRefs.add(VV);
          else try {
            const eV = this.refs.get(VV);
            throw new mJ(`trying to remove refId '${VV}' with 0 refCount (${eV.constructor.name}: ${JSON.stringify(eV)})`)
          } catch (UY) {
            console.warn(UY)
          } else try {
            throw new mJ("trying to remove refId that doesn't exist: " + VV)
          } catch (UY) {
            console.warn(UY)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((VV => {
          if (this.refCount[VV] > 0) return;
          const eV = this.refs.get(VV),
            xV = eV.constructor[Symbol.metadata];
          if (null != xV)
            for (const JV in xV) {
              const VV = eV[xV[JV].name];
              if ("object" === typeof VV && VV) {
                const eV = VV[pV];
                void 0 === eV || this.deletedRefs.has(eV) || this.removeRef(eV)
              }
            } else "function" === typeof eV[EV] && Array.from(eV.values()).forEach((VV => {
              const eV = VV[pV];
              void 0 === eV || this.deletedRefs.has(eV) || this.removeRef(eV)
            }));
          this.refs.delete(VV), delete this.refCount[VV], delete this.callbacks[VV]
        })), this.deletedRefs.clear()
      }
      addCallback(VV, eV, xV) {
        if (void 0 === VV) {
          const VV = "number" === typeof eV ? YV[eV] : eV;
          throw new Error(`Can't addCallback on '${VV}' (refId is undefined)`)
        }
        return this.callbacks[VV] || (this.callbacks[VV] = {}), this.callbacks[VV][eV] || (this.callbacks[VV][eV] = []), this.callbacks[VV][eV].push(xV), () => this.removeCallback(VV, eV, xV)
      }
      removeCallback(VV, eV, xV) {
        const JV = this.callbacks?.[VV]?.[eV]?.indexOf(xV);
        void 0 !== JV && -1 !== JV && RJ(this.callbacks[VV][eV], JV)
      }
    }
    class uJ {
      context;
      state;
      root;
      currentRefId = 0;
      nD;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(VV, eV) {
        this.setState(VV), this.context = eV || new he(VV.constructor)
      }
      setState(VV) {
        this.state = VV, this.root = new HJ, this.root.addRef(0, VV)
      }
      decode(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const YV = void 0 !== this.nD ? [] : null,
          UV = this.root,
          yV = VV.byteLength;
        let pV = xV.constructor[wV];
        for (this.currentRefId = 0; eV.offset < yV;) {
          if (VV[eV.offset] == JV) {
            eV.offset++, xV[tV]?.();
            const JV = qe.number(VV, eV),
              YV = UV.refs.get(JV);
            YV ? (xV = YV, pV = xV.constructor[wV], this.currentRefId = JV) : (console.error(`"refId" not found: ${JV}`, {
              previousRef: xV,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(VV, eV, yV));
            continue
          } - 1 !== pV(this, VV, eV, xV, YV) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(VV, eV, yV))
        }
        return xV[tV]?.(), null !== this.resyncVisited && function(VV, eV) {
          VV.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : hx(VV, VV.state, new Set, eV)
        }(this, YV), null !== YV && this.nD?.(YV), UV.garbageCollectDeletedRefs(), YV
      }
      decodeResync(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(VV, eV)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(VV, eV, xV) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const YV = {
          offset: eV.offset
        };
        for (; eV.offset < xV && (VV[eV.offset] !== JV || (YV.offset = eV.offset + 1, !this.root.refs.has(qe.number(VV, YV))));) eV.offset++
      }
      getInstanceType(VV, eV, xV) {
        let JV;
        if (213 === VV[eV.offset]) {
          eV.offset++;
          const xV = qe.number(VV, eV);
          JV = this.context.get(xV)
        }
        return JV || xV
      }
      createInstanceOfType(VV) {
        return VV.initializeForDecoder()
      }
      removeChildRefs(VV, eV) {
        const xV = "string" !== typeof VV[EV],
          JV = VV[pV];
        VV.forEach(((UV, yV) => {
          eV?.push({
            ref: VV,
            refId: JV,
            op: YV.DELETE,
            field: yV,
            value: void 0,
            previousValue: UV
          }), xV && this.root.removeRef(UV[pV])
        }))
      }
    }
    const sJ = XJ({
        min: rJ.float64(),
        max: rJ.float64(),
        bits: rJ.uint8(),
        mode: rJ.uint8()
      }, "QuantizedDescriptor"),
      SJ = XJ({
        name: rJ.string(),
        type: rJ.string(),
        referencedType: rJ.number(),
        childPrimitive: rJ.string(),
        quantized: rJ.ref(sJ).optional()
      }, "ReflectionField"),
      IJ = XJ({
        id: rJ.number(),
        extendsId: rJ.number(),
        fields: rJ.array(SJ)
      }, "ReflectionType"),
      dJ = XJ({
        types: rJ.array(IJ),
        rootType: rJ.number()
      }, "Reflection");

    function OJ(VV) {
      const eV = VV.root,
        xV = eV.callbacks,
        JV = new WeakMap;
      let UV;

      function yV(VV, xV) {
        let nV = xV.instance?.constructor[Symbol.metadata] || VV,
          wV = xV.instance && "function" === typeof xV.instance.forEach || VV && !zJ.is(VV);
        if (nV && !wV) {
          const VV = function(VV, YV, yV, QV) {
            return QV && void 0 !== xV.instance[YV] && !JV.has(UV) && yV(xV.instance[YV], void 0), eV.addCallback(VV[pV], YV, yV)
          };
          return new Proxy({
            listen: function(eV, YV) {
              let yV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (xV.instance) return VV(xV.instance, eV, YV, yV);
              {
                let pV = () => {};
                return xV.onInstanceAvailable(((xV, QV) => {
                  pV = VV(xV, eV, YV, yV && QV && !JV.has(UV))
                })), () => pV()
              }
            },
            onChange: function(VV) {
              return eV.addCallback(xV.instance[pV], YV.REPLACE, VV)
            },
            bindTo: function(VV, JV) {
              return JV || (JV = Object.keys(nV).map((VV => nV[VV].name))), eV.addCallback(xV.instance[pV], YV.REPLACE, (() => {
                JV.forEach((eV => VV[eV] = xV.instance[eV]))
              }))
            }
          }, {
            get(VV, eV) {
              const JV = nV[nV[eV]];
              if (JV) {
                const VV = xV.instance?.[eV],
                  YV = JV => {
                    const YV = QV(xV.instance).listen(eV, ((VV, eV) => {
                      JV(VV, !1), YV?.()
                    }), !1);
                    void 0 !== VV?.[pV] && JV(VV, !0)
                  };
                return yV(JV.type, {
                  instance: void 0 !== VV?.[pV] && VV,
                  parentInstance: xV.instance,
                  onInstanceAvailable: YV
                })
              }
              return VV[eV]
            },
            has: (VV, eV) => void 0 !== nV[eV],
            set(VV, eV, xV) {
              throw new Error("not allowed")
            },
            deleteProperty(VV, eV) {
              throw new Error("not allowed")
            }
          })
        } {
          const VV = function(VV, xV, yV) {
              return yV && VV.forEach(((VV, eV) => xV(VV, eV))), eV.addCallback(VV[pV], YV.ADD, ((VV, eV) => {
                JV.set(xV, !0), UV = xV, xV(VV, eV), JV.delete(xV), UV = void 0
              }))
            },
            yV = function(VV, xV) {
              return eV.addCallback(VV[pV], YV.DELETE, xV)
            },
            QV = function(VV, xV) {
              return eV.addCallback(VV[pV], YV.REPLACE, xV)
            };
          return new Proxy({
            uF: function(eV) {
              let YV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (xV.instance) return VV(xV.instance, eV, YV && !JV.has(UV));
              if (xV.onInstanceAvailable) {
                let yV = () => {};
                return xV.onInstanceAvailable(((xV, pV) => {
                  yV = VV(xV, eV, YV && pV && !JV.has(UV))
                })), () => yV()
              }
            },
            bR: function(VV) {
              if (xV.instance) return yV(xV.instance, VV);
              if (xV.onInstanceAvailable) {
                let eV = () => {};
                return xV.onInstanceAvailable((xV => {
                  eV = yV(xV, VV)
                })), () => eV()
              }
            },
            onChange: function(VV) {
              if (xV.instance) return QV(xV.instance, VV);
              if (xV.onInstanceAvailable) {
                let eV = () => {};
                return xV.onInstanceAvailable((xV => {
                  eV = QV(xV, VV)
                })), () => eV()
              }
            }
          }, {
            get(VV, eV) {
              if (!VV[eV]) throw new Error(`Can't access '${eV}' through callback proxy. access the instance directly.`);
              return VV[eV]
            },
            has: (VV, eV) => void 0 !== VV[eV],
            set(VV, eV, xV) {
              throw new Error("not allowed")
            },
            deleteProperty(VV, eV) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function QV(VV) {
        return yV(void 0, {
          instance: VV
        })
      }
      return VV.nD = function(VV) {
        const eV = new Set;
        for (let JV = 0, UV = VV.length; JV < UV; JV++) {
          const UV = VV[JV],
            yV = UV.refId,
            QV = UV.ref,
            nV = xV[yV];
          if (nV) {
            if ((UV.op & YV.DELETE) === YV.DELETE && zJ.isSchema(UV.previousValue)) {
              const VV = xV[UV.previousValue[pV]]?.[YV.DELETE];
              for (let eV = VV?.length - 1; eV >= 0; eV--) VV[eV]()
            }
            if (zJ.isSchema(QV)) {
              if (!eV.has(yV)) {
                const VV = nV?.[YV.REPLACE];
                for (let eV = VV?.length - 1; eV >= 0; eV--) VV[eV]()
              }
              if (nV.hasOwnProperty(UV.field)) {
                const VV = nV[UV.field];
                for (let eV = VV?.length - 1; eV >= 0; eV--) VV[eV](UV.value, UV.previousValue)
              }
            } else {
              if ((UV.op & YV.DELETE) === YV.DELETE) {
                if (void 0 !== UV.previousValue) {
                  const VV = nV[YV.DELETE];
                  for (let eV = VV?.length - 1; eV >= 0; eV--) VV[eV](UV.previousValue, UV.dynamicIndex ?? UV.field)
                }
                if ((UV.op & YV.ADD) === YV.ADD) {
                  const VV = nV[YV.ADD];
                  for (let eV = VV?.length - 1; eV >= 0; eV--) VV[eV](UV.value, UV.dynamicIndex ?? UV.field)
                }
              } else if ((UV.op & YV.ADD) === YV.ADD && UV.previousValue !== UV.value) {
                const VV = nV[YV.ADD];
                for (let eV = VV?.length - 1; eV >= 0; eV--) VV[eV](UV.value, UV.dynamicIndex ?? UV.field)
              }
              if (UV.value !== UV.previousValue && (void 0 !== UV.value || void 0 !== UV.previousValue)) {
                const VV = nV[YV.REPLACE];
                for (let eV = VV?.length - 1; eV >= 0; eV--) VV[eV](UV.value, UV.dynamicIndex ?? UV.field)
              }
            }
            eV.add(yV)
          }
        }
      }, QV
    }

    function VY(VV, eV) {
      VV.nD = eV
    }
    dJ.encode = function(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const xV = VV.context,
        JV = new dJ,
        YV = new fJ(JV),
        UV = xV.schemas.get(VV.state.constructor);
      UV > 0 && (JV.rootType = UV);
      const yV = new Set,
        pV = {},
        QV = VV => {
          if (void 0 === VV.extendsId || yV.has(VV.extendsId)) {
            yV.add(VV.id), JV.types.push(VV);
            const eV = pV[VV.id];
            void 0 !== eV && (delete pV[VV.id], eV.forEach((VV => QV(VV))))
          } else void 0 === pV[VV.extendsId] && (pV[VV.extendsId] = []), pV[VV.extendsId].push(VV)
        };
      xV.schemas.forEach(((VV, eV) => {
        const JV = new IJ;
        JV.id = Number(VV);
        const YV = Object.getPrototypeOf(eV);
        YV !== zJ && (JV.extendsId = xV.schemas.get(YV));
        const UV = eV[Symbol.metadata];
        if (UV !== YV[Symbol.metadata]) {
          const VV = UV[XV] ?? -1;
          for (let eV = 0; eV <= VV; eV++) {
            const VV = UV[eV];
            if (void 0 === VV) continue;
            const YV = VV.name;
            if (!Object.prototype.hasOwnProperty.call(UV, YV)) continue;
            const yV = new SJ;
            let pV;
            if (yV.name = YV, "string" === typeof VV.type) pV = VV.type;
            else if (Ce(VV.type)) {
              const eV = VV.type.quantized;
              pV = "quantized";
              const xV = new sJ;
              xV.min = eV.min, xV.max = eV.max, xV.bits = eV.bits, xV.mode = eV.wrap ? 1 : 0, yV.quantized = xV
            } else {
              let eV;
              zJ.is(VV.type) ? (pV = "ref", eV = VV.type) : (pV = Object.keys(VV.type)[0], "string" === typeof VV.type[pV] ? yV.childPrimitive = VV.type[pV] : eV = VV.type[pV]), yV.referencedType = eV ? xV.getTypeId(eV) : -1
            }
            yV.type = pV, JV.fields.push(yV)
          }
        }
        QV(JV)
      }));
      for (const nV in pV) pV[nV].forEach((VV => JV.types.push(VV)));
      return YV.encodeAll(eV).slice(0, eV.offset)
    }, dJ.decode = function(VV, eV) {
      const xV = new dJ;
      new uJ(xV).decode(VV, eV);
      const JV = new he;
      xV.types.forEach((VV => {
        const eV = JV.get(VV.extendsId) ?? zJ,
          xV = class extends eV {};
        he.register(xV), JV.add(xV, VV.id)
      }), {});
      xV.types.forEach((VV => {
        const eV = JV.get(VV.id),
          YV = ue.initialize(eV),
          UV = [];
        let yV = VV;
        do {
          UV.push(yV), yV = xV.types.find((VV => VV.id === yV.extendsId))
        } while (yV);
        let pV = 0;
        UV.reverse().forEach((VV => {
          ((VV, eV, xV) => {
            eV.fields.forEach(((eV, YV) => {
              const UV = xV + YV;
              if (void 0 !== eV.quantized) {
                const xV = eV.quantized;
                ue.addField(VV, UV, eV.name, {
                  quantized: ie({
                    min: xV.min,
                    max: xV.max,
                    bits: xV.bits,
                    mode: 1 === xV.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== eV.referencedType) {
                const xV = eV.type,
                  YV = JV.get(eV.referencedType) ?? eV.childPrimitive;
                "ref" === xV ? ue.addField(VV, UV, eV.name, YV) : ue.addField(VV, UV, eV.name, {
                  [xV]: YV
                })
              } else ue.addField(VV, UV, eV.name, eV.type)
            }))
          })(YV, VV, pV), pV += VV.fields.length
        }))
      }));
      const YV = new(JV.get(xV.rootType || 0));
      return new uJ(YV, JV)
    }, dJ.makeEncodable = function(VV) {
      const eV = VV[Symbol.metadata];
      if (!eV) return VV;
      const xV = eV[XV];
      if (void 0 === xV) return VV;
      for (let JV = 0; JV <= xV; JV++) {
        const xV = eV[JV];
        xV && ue.defineField(VV, eV, JV, xV.name, xV.type)
      }
      return Object.prototype.hasOwnProperty.call(VV, AV) && delete VV[AV], VV
    };
    class eY {
      BZ;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(VV) {
        this.BZ = VV, this.BZ.nD = this.nD.bind(this)
      }
      get callbacks() {
        return this.BZ.root.callbacks
      }
      get state() {
        return this.BZ.state
      }
      addCallback(VV, eV, xV) {
        return this.BZ.root.addCallback(VV, eV, xV)
      }
      addCallbackOrWaitCollectionAvailable(VV, eV, xV, JV) {
        let UV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yV = () => {};
        const QV = () => yV(),
          nV = VV[eV];
        if (nV && void 0 !== nV[pV]) return UV = UV && !1 === this.isTriggering, xV === YV.ADD && UV && nV.forEach(((VV, eV) => {
          JV(VV, eV)
        })), this.addCallback(nV[pV], xV, JV);
        {
          let YV;
          return YV = this.addCallback(VV[pV], eV, ((VV, eV) => {
            null !== VV && void 0 !== VV && (YV(), yV = this.addCallback(VV[pV], xV, JV))
          })), yV = YV, QV
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(VV, eV, xV) {
        let JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        JV = JV && !1 === this.isTriggering;
        const YV = VV[eV];
        return JV && null !== YV && void 0 !== YV && xV(YV, void 0), this.addCallback(VV[pV], eV, xV)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const VV = arguments.length <= 0 ? void 0 : arguments[0],
            eV = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(VV[pV], YV.REPLACE, eV)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], YV.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], YV.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      uF() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], YV.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], YV.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      bR() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], YV.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], YV.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(VV, eV, xV) {
        let JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const UV = VV.constructor[Symbol.metadata];
        xV || (xV = Object.keys(UV).filter((VV => !isNaN(Number(VV)))).map((VV => UV[VV].name)));
        const yV = () => {
          for (const JV of xV) {
            const xV = VV[JV];
            void 0 !== xV && (eV[JV] = xV)
          }
        };
        return JV && yV(), this.addCallback(VV[pV], YV.REPLACE, yV)
      }
      nD(VV) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let eV = 0, xV = VV.length; eV < xV; eV++) {
          const xV = VV[eV],
            JV = xV.refId,
            UV = xV.ref,
            yV = this.callbacks[JV];
          if (yV) {
            if ((xV.op & YV.DELETE) === YV.DELETE && zJ.isSchema(xV.previousValue)) {
              const VV = xV.previousValue[pV],
                eV = this.callbacks[VV]?.[YV.DELETE];
              if (eV)
                for (let xV = eV.length - 1; xV >= 0; xV--) try {
                  eV[xV]()
                } catch (UY) {
                  console.error(UY)
                }
            }
            if (zJ.isSchema(UV)) {
              if (!this.uniqueRefIds.has(JV)) {
                const VV = yV[YV.REPLACE];
                if (VV)
                  for (let eV = VV.length - 1; eV >= 0; eV--) try {
                    VV[eV]()
                  } catch (UY) {
                    console.error(UY)
                  }
              }
              const VV = yV[xV.field];
              if (VV)
                for (let eV = VV.length - 1; eV >= 0; eV--) try {
                  VV[eV](xV.value, xV.previousValue)
                } catch (UY) {
                  console.error(UY)
                }
            } else {
              const VV = xV.dynamicIndex ?? xV.field;
              if ((xV.op & YV.DELETE) === YV.DELETE) {
                if (void 0 !== xV.previousValue) {
                  const eV = yV[YV.DELETE];
                  if (eV)
                    for (let JV = eV.length - 1; JV >= 0; JV--) try {
                      eV[JV](xV.previousValue, VV)
                    } catch (UY) {
                      console.error(UY)
                    }
                }
                if ((xV.op & YV.ADD) === YV.ADD) {
                  const eV = yV[YV.ADD];
                  if (eV)
                    for (let JV = eV.length - 1; JV >= 0; JV--) try {
                      eV[JV](xV.value, VV)
                    } catch (UY) {
                      console.error(UY)
                    }
                }
              } else if ((xV.op & YV.ADD) === YV.ADD && xV.previousValue !== xV.value) {
                const eV = yV[YV.ADD];
                if (eV)
                  for (let JV = eV.length - 1; JV >= 0; JV--) try {
                    eV[JV](xV.value, VV)
                  } catch (UY) {
                    console.error(UY)
                  }
              }
              if (xV.value !== xV.previousValue) {
                const eV = yV[YV.REPLACE];
                if (eV)
                  for (let JV = eV.length - 1; JV >= 0; JV--) try {
                    eV[JV](VV, xV.value)
                  } catch (UY) {
                    console.error(UY)
                  }
              }
            }
            this.uniqueRefIds.add(JV)
          }
        }
        this.isTriggering = !1
      }
    }
    const xY = {
      get(VV) {
        if (VV instanceof uJ) return new eY(VV);
        if ("BZ" in VV.Fq) return new eY(VV.Fq.BZ);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(VV) {
        if (VV instanceof uJ) return OJ(VV);
        if ("BZ" in VV.Fq) return OJ(VV.Fq.BZ);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (VV, eV) => VY(VV, eV)
    };
    class JY {
      _free = [];
      _factory;
      _maxSize;
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = VV, this._maxSize = eV.maxSize ?? 1 / 0;
        const xV = eV.preallocate ?? 0;
        for (let JV = 0; JV < xV; JV++) this._free.push(VV())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(VV) {
        zJ.reset(VV), this._free.length < this._maxSize && this._free.push(VV)
      }
      get size() {
        return this._free.length
      }
    }

    function YY(VV) {
      return new JY((() => new VV), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Te("map", {
      constructor: YJ
    }), Te("array", {
      constructor: xJ
    }), Te("set", {
      constructor: yJ
    }), Te("collection", {
      constructor: UJ
    })
  },
  9704: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      __addDisposableResource: () => CV,
      __assign: () => UV,
      __asyncDelegator: () => NV,
      __asyncGenerator: () => AV,
      __asyncValues: () => XV,
      __await: () => PV,
      __awaiter: () => kV,
      __classPrivateFieldGet: () => gV,
      __classPrivateFieldIn: () => iV,
      __classPrivateFieldSet: () => DV,
      __createBinding: () => EV,
      __decorate: () => pV,
      __disposeResources: () => oV,
      __esDecorate: () => nV,
      __exportStar: () => BV,
      __extends: () => YV,
      __generator: () => bV,
      __importDefault: () => RV,
      __importStar: () => WV,
      __makeTemplateObject: () => MV,
      __metadata: () => rV,
      __param: () => QV,
      __propKey: () => ZV,
      __read: () => qV,
      __rest: () => yV,
      __rewriteRelativeImportExtension: () => cV,
      __runInitializers: () => wV,
      __setFunctionName: () => vV,
      __spread: () => tV,
      __spreadArray: () => TV,
      __spreadArrays: () => FV,
      __values: () => jV,
      default: () => hV
    });
    var JV = function(VV, eV) {
      return JV = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(VV, eV) {
        VV.__proto__ = eV
      } || function(VV, eV) {
        for (var xV in eV) Object.prototype.hasOwnProperty.call(eV, xV) && (VV[xV] = eV[xV])
      }, JV(VV, eV)
    };

    function YV(VV, eV) {
      if ("function" !== typeof eV && null !== eV) throw new TypeError("Class extends value " + String(eV) + " is not a constructor or null");

      function xV() {
        this.constructor = VV
      }
      JV(VV, eV), VV.prototype = null === eV ? Object.create(eV) : (xV.prototype = eV.prototype, new xV)
    }
    var UV = function() {
      return UV = Object.assign || function(VV) {
        for (var eV, xV = 1, JV = arguments.length; xV < JV; xV++)
          for (var YV in eV = arguments[xV]) Object.prototype.hasOwnProperty.call(eV, YV) && (VV[YV] = eV[YV]);
        return VV
      }, UV.apply(this, arguments)
    };

    function yV(VV, eV) {
      var xV = {};
      for (var JV in VV) Object.prototype.hasOwnProperty.call(VV, JV) && eV.indexOf(JV) < 0 && (xV[JV] = VV[JV]);
      if (null != VV && "function" === typeof Object.getOwnPropertySymbols) {
        var YV = 0;
        for (JV = Object.getOwnPropertySymbols(VV); YV < JV.length; YV++) eV.indexOf(JV[YV]) < 0 && Object.prototype.propertyIsEnumerable.call(VV, JV[YV]) && (xV[JV[YV]] = VV[JV[YV]])
      }
      return xV
    }

    function pV(VV, eV, xV, JV) {
      var YV, UV = arguments.length,
        yV = UV < 3 ? eV : null === JV ? JV = Object.getOwnPropertyDescriptor(eV, xV) : JV;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) yV = Reflect.decorate(VV, eV, xV, JV);
      else
        for (var pV = VV.length - 1; pV >= 0; pV--)(YV = VV[pV]) && (yV = (UV < 3 ? YV(yV) : UV > 3 ? YV(eV, xV, yV) : YV(eV, xV)) || yV);
      return UV > 3 && yV && Object.defineProperty(eV, xV, yV), yV
    }

    function QV(VV, eV) {
      return function(xV, JV) {
        eV(xV, JV, VV)
      }
    }

    function nV(VV, eV, xV, JV, YV, UV) {
      function yV(VV) {
        if (void 0 !== VV && "function" !== typeof VV) throw new TypeError("Function expected");
        return VV
      }
      for (var pV, QV = JV.kind, nV = "getter" === QV ? "get" : "setter" === QV ? "set" : "value", wV = !eV && VV ? JV.static ? VV : VV.prototype : null, ZV = eV || (wV ? Object.getOwnPropertyDescriptor(wV, JV.name) : {}), vV = !1, rV = xV.length - 1; rV >= 0; rV--) {
        var kV = {};
        for (var bV in JV) kV[bV] = "access" === bV ? {} : JV[bV];
        for (var bV in JV.access) kV.access[bV] = JV.access[bV];
        kV.addInitializer = function(VV) {
          if (vV) throw new TypeError("Cannot add initializers after decoration has completed");
          UV.push(yV(VV || null))
        };
        var EV = (0, xV[rV])("accessor" === QV ? {
          get: ZV.get,
          set: ZV.set
        } : ZV[nV], kV);
        if ("accessor" === QV) {
          if (void 0 === EV) continue;
          if (null === EV || "object" !== typeof EV) throw new TypeError("Object expected");
          (pV = yV(EV.get)) && (ZV.get = pV), (pV = yV(EV.set)) && (ZV.set = pV), (pV = yV(EV.init)) && YV.unshift(pV)
        } else(pV = yV(EV)) && ("field" === QV ? YV.unshift(pV) : ZV[nV] = pV)
      }
      wV && Object.defineProperty(wV, JV.name, ZV), vV = !0
    }

    function wV(VV, eV, xV) {
      for (var JV = arguments.length > 2, YV = 0; YV < eV.length; YV++) xV = JV ? eV[YV].call(VV, xV) : eV[YV].call(VV);
      return JV ? xV : void 0
    }

    function ZV(VV) {
      return "symbol" === typeof VV ? VV : "".concat(VV)
    }

    function vV(VV, eV, xV) {
      return "symbol" === typeof eV && (eV = eV.description ? "[".concat(eV.description, "]") : ""), Object.defineProperty(VV, "name", {
        configurable: !0,
        value: xV ? "".concat(xV, " ", eV) : eV
      })
    }

    function rV(VV, eV) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(VV, eV)
    }

    function kV(VV, eV, xV, JV) {
      return new(xV || (xV = Promise))((function(YV, UV) {
        function yV(VV) {
          try {
            QV(JV.next(VV))
          } catch (eV) {
            UV(eV)
          }
        }

        function pV(VV) {
          try {
            QV(JV.throw(VV))
          } catch (eV) {
            UV(eV)
          }
        }

        function QV(VV) {
          var eV;
          VV.done ? YV(VV.value) : (eV = VV.value, eV instanceof xV ? eV : new xV((function(VV) {
            VV(eV)
          }))).then(yV, pV)
        }
        QV((JV = JV.apply(VV, eV || [])).next())
      }))
    }

    function bV(VV, eV) {
      var xV, JV, YV, UV = {
          label: 0,
          sent: function() {
            if (1 & YV[0]) throw YV[1];
            return YV[1]
          },
          trys: [],
          ops: []
        },
        yV = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return yV.next = pV(0), yV.throw = pV(1), yV.return = pV(2), "function" === typeof Symbol && (yV[Symbol.iterator] = function() {
        return this
      }), yV;

      function pV(pV) {
        return function(QV) {
          return function(pV) {
            if (xV) throw new TypeError("Generator is already executing.");
            for (; yV && (yV = 0, pV[0] && (UV = 0)), UV;) try {
              if (xV = 1, JV && (YV = 2 & pV[0] ? JV.return : pV[0] ? JV.throw || ((YV = JV.return) && YV.call(JV), 0) : JV.next) && !(YV = YV.call(JV, pV[1])).done) return YV;
              switch (JV = 0, YV && (pV = [2 & pV[0], YV.value]), pV[0]) {
                case 0:
                case 1:
                  YV = pV;
                  break;
                case 4:
                  return UV.label++, {
                    value: pV[1],
                    done: !1
                  };
                case 5:
                  UV.label++, JV = pV[1], pV = [0];
                  continue;
                case 7:
                  pV = UV.ops.pop(), UV.trys.pop();
                  continue;
                default:
                  if (!(YV = (YV = UV.trys).length > 0 && YV[YV.length - 1]) && (6 === pV[0] || 2 === pV[0])) {
                    UV = 0;
                    continue
                  }
                  if (3 === pV[0] && (!YV || pV[1] > YV[0] && pV[1] < YV[3])) {
                    UV.label = pV[1];
                    break
                  }
                  if (6 === pV[0] && UV.label < YV[1]) {
                    UV.label = YV[1], YV = pV;
                    break
                  }
                  if (YV && UV.label < YV[2]) {
                    UV.label = YV[2], UV.ops.push(pV);
                    break
                  }
                  YV[2] && UV.ops.pop(), UV.trys.pop();
                  continue
              }
              pV = eV.call(VV, UV)
            } catch (QV) {
              pV = [6, QV], JV = 0
            } finally {
              xV = YV = 0
            }
            if (5 & pV[0]) throw pV[1];
            return {
              value: pV[0] ? pV[1] : void 0,
              done: !0
            }
          }([pV, QV])
        }
      }
    }
    var EV = Object.create ? function(VV, eV, xV, JV) {
      void 0 === JV && (JV = xV);
      var YV = Object.getOwnPropertyDescriptor(eV, xV);
      YV && !("get" in YV ? !eV.__esModule : YV.writable || YV.configurable) || (YV = {
        enumerable: !0,
        get: function() {
          return eV[xV]
        }
      }), Object.defineProperty(VV, JV, YV)
    } : function(VV, eV, xV, JV) {
      void 0 === JV && (JV = xV), VV[JV] = eV[xV]
    };

    function BV(VV, eV) {
      for (var xV in VV) "default" === xV || Object.prototype.hasOwnProperty.call(eV, xV) || EV(eV, VV, xV)
    }

    function jV(VV) {
      var eV = "function" === typeof Symbol && Symbol.iterator,
        xV = eV && VV[eV],
        JV = 0;
      if (xV) return xV.call(VV);
      if (VV && "number" === typeof VV.length) return {
        next: function() {
          return VV && JV >= VV.length && (VV = void 0), {
            value: VV && VV[JV++],
            done: !VV
          }
        }
      };
      throw new TypeError(eV ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function qV(VV, eV) {
      var xV = "function" === typeof Symbol && VV[Symbol.iterator];
      if (!xV) return VV;
      var JV, YV, UV = xV.call(VV),
        yV = [];
      try {
        for (;
          (void 0 === eV || eV-- > 0) && !(JV = UV.next()).done;) yV.push(JV.value)
      } catch (pV) {
        YV = {
          error: pV
        }
      } finally {
        try {
          JV && !JV.done && (xV = UV.return) && xV.call(UV)
        } finally {
          if (YV) throw YV.error
        }
      }
      return yV
    }

    function tV() {
      for (var VV = [], eV = 0; eV < arguments.length; eV++) VV = VV.concat(qV(arguments[eV]));
      return VV
    }

    function FV() {
      for (var VV = 0, eV = 0, xV = arguments.length; eV < xV; eV++) VV += arguments[eV].length;
      var JV = Array(VV),
        YV = 0;
      for (eV = 0; eV < xV; eV++)
        for (var UV = arguments[eV], yV = 0, pV = UV.length; yV < pV; yV++, YV++) JV[YV] = UV[yV];
      return JV
    }

    function TV(VV, eV, xV) {
      if (xV || 2 === arguments.length)
        for (var JV, YV = 0, UV = eV.length; YV < UV; YV++) !JV && YV in eV || (JV || (JV = Array.prototype.slice.call(eV, 0, YV)), JV[YV] = eV[YV]);
      return VV.concat(JV || Array.prototype.slice.call(eV))
    }

    function PV(VV) {
      return this instanceof PV ? (this.v = VV, this) : new PV(VV)
    }

    function AV(VV, eV, xV) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var JV, YV = xV.apply(VV, eV || []),
        UV = [];
      return JV = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), yV("next"), yV("throw"), yV("return", (function(VV) {
        return function(eV) {
          return Promise.resolve(eV).then(VV, nV)
        }
      })), JV[Symbol.asyncIterator] = function() {
        return this
      }, JV;

      function yV(VV, eV) {
        YV[VV] && (JV[VV] = function(eV) {
          return new Promise((function(xV, JV) {
            UV.push([VV, eV, xV, JV]) > 1 || pV(VV, eV)
          }))
        }, eV && (JV[VV] = eV(JV[VV])))
      }

      function pV(VV, eV) {
        try {
          (xV = YV[VV](eV)).value instanceof PV ? Promise.resolve(xV.value.v).then(QV, nV) : wV(UV[0][2], xV)
        } catch (JV) {
          wV(UV[0][3], JV)
        }
        var xV
      }

      function QV(VV) {
        pV("next", VV)
      }

      function nV(VV) {
        pV("throw", VV)
      }

      function wV(VV, eV) {
        VV(eV), UV.shift(), UV.length && pV(UV[0][0], UV[0][1])
      }
    }

    function NV(VV) {
      var eV, xV;
      return eV = {}, JV("next"), JV("throw", (function(VV) {
        throw VV
      })), JV("return"), eV[Symbol.iterator] = function() {
        return this
      }, eV;

      function JV(JV, YV) {
        eV[JV] = VV[JV] ? function(eV) {
          return (xV = !xV) ? {
            value: PV(VV[JV](eV)),
            done: !1
          } : YV ? YV(eV) : eV
        } : YV
      }
    }

    function XV(VV) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var eV, xV = VV[Symbol.asyncIterator];
      return xV ? xV.call(VV) : (VV = jV(VV), eV = {}, JV("next"), JV("throw"), JV("return"), eV[Symbol.asyncIterator] = function() {
        return this
      }, eV);

      function JV(xV) {
        eV[xV] = VV[xV] && function(eV) {
          return new Promise((function(JV, YV) {
            (function(VV, eV, xV, JV) {
              Promise.resolve(JV).then((function(eV) {
                VV({
                  value: eV,
                  done: xV
                })
              }), eV)
            })(JV, YV, (eV = VV[xV](eV)).done, eV.value)
          }))
        }
      }
    }

    function MV(VV, eV) {
      return Object.defineProperty ? Object.defineProperty(VV, "raw", {
        value: eV
      }) : VV.raw = eV, VV
    }
    var zV = Object.create ? function(VV, eV) {
        Object.defineProperty(VV, "default", {
          enumerable: !0,
          value: eV
        })
      } : function(VV, eV) {
        VV.default = eV
      },
      GV = function(VV) {
        return GV = Object.getOwnPropertyNames || function(VV) {
          var eV = [];
          for (var xV in VV) Object.prototype.hasOwnProperty.call(VV, xV) && (eV[eV.length] = xV);
          return eV
        }, GV(VV)
      };

    function WV(VV) {
      if (VV && VV.__esModule) return VV;
      var eV = {};
      if (null != VV)
        for (var xV = GV(VV), JV = 0; JV < xV.length; JV++) "default" !== xV[JV] && EV(eV, VV, xV[JV]);
      return zV(eV, VV), eV
    }

    function RV(VV) {
      return VV && VV.__esModule ? VV : {
        default: VV
      }
    }

    function gV(VV, eV, xV, JV) {
      if ("a" === xV && !JV) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof eV ? VV !== eV || !JV : !eV.has(VV)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === xV ? JV : "a" === xV ? JV.call(VV) : JV ? JV.value : eV.get(VV)
    }

    function DV(VV, eV, xV, JV, YV) {
      if ("m" === JV) throw new TypeError("Private method is not writable");
      if ("a" === JV && !YV) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof eV ? VV !== eV || !YV : !eV.has(VV)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === JV ? YV.call(VV, xV) : YV ? YV.value = xV : eV.set(VV, xV), xV
    }

    function iV(VV, eV) {
      if (null === eV || "object" !== typeof eV && "function" !== typeof eV) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof VV ? eV === VV : VV.has(eV)
    }

    function CV(VV, eV, xV) {
      if (null !== eV && void 0 !== eV) {
        if ("object" !== typeof eV && "function" !== typeof eV) throw new TypeError("Object expected.");
        var JV, YV;
        if (xV) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          JV = eV[Symbol.asyncDispose]
        }
        if (void 0 === JV) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          JV = eV[Symbol.dispose], xV && (YV = JV)
        }
        if ("function" !== typeof JV) throw new TypeError("Object not disposable.");
        YV && (JV = function() {
          try {
            YV.call(this)
          } catch (VV) {
            return Promise.reject(VV)
          }
        }), VV.stack.push({
          value: eV,
          dispose: JV,
          async: xV
        })
      } else xV && VV.stack.push({
        async: !0
      });
      return eV
    }
    var aV = "function" === typeof SuppressedError ? SuppressedError : function(VV, eV, xV) {
      var JV = new Error(xV);
      return JV.name = "SuppressedError", JV.error = VV, JV.suppressed = eV, JV
    };

    function oV(VV) {
      function eV(eV) {
        VV.error = VV.hasError ? new aV(eV, VV.error, "An error was suppressed during disposal.") : eV, VV.hasError = !0
      }
      var xV, JV = 0;
      return function YV() {
        for (; xV = VV.stack.pop();) try {
          if (!xV.async && 1 === JV) return JV = 0, VV.stack.push(xV), Promise.resolve().then(YV);
          if (xV.dispose) {
            var UV = xV.dispose.call(xV.value);
            if (xV.async) return JV |= 2, Promise.resolve(UV).then(YV, (function(VV) {
              return eV(VV), YV()
            }))
          } else JV |= 1
        } catch (yV) {
          eV(yV)
        }
        if (1 === JV) return VV.hasError ? Promise.reject(VV.error) : Promise.resolve();
        if (VV.hasError) throw VV.error
      }()
    }

    function cV(VV, eV) {
      return "string" === typeof VV && /^\.\.?\//.test(VV) ? VV.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(VV, xV, JV, YV, UV) {
        return xV ? eV ? ".jsx" : ".js" : !JV || YV && UV ? JV + YV + "." + UV.toLowerCase() + "js" : VV
      })) : VV
    }
    const hV = {
      __extends: YV,
      __assign: UV,
      __rest: yV,
      __decorate: pV,
      __param: QV,
      __esDecorate: nV,
      __runInitializers: wV,
      __propKey: ZV,
      __setFunctionName: vV,
      __metadata: rV,
      __awaiter: kV,
      __generator: bV,
      __createBinding: EV,
      __exportStar: BV,
      __values: jV,
      __read: qV,
      __spread: tV,
      __spreadArrays: FV,
      __spreadArray: TV,
      __await: PV,
      __asyncGenerator: AV,
      __asyncDelegator: NV,
      __asyncValues: XV,
      __makeTemplateObject: MV,
      __importStar: WV,
      __importDefault: RV,
      __classPrivateFieldGet: gV,
      __classPrivateFieldSet: DV,
      __classPrivateFieldIn: iV,
      __addDisposableResource: CV,
      __disposeResources: oV,
      __rewriteRelativeImportExtension: cV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);