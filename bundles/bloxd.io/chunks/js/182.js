export const id = 182;
export const ids = [182];
export const modules = {
  8835: (vv, zv) => {
    zv.discordURLBuilder = function(vv) {
      var zv;
      const Pv = (null === (zv = null === window || void 0 === window ? void 0 : window.location) || void 0 === zv ? void 0 : zv.hostname) || "localhost",
        hv = vv.hostname.split("."),
        Sv = !vv.hostname.includes("trycloudflare.com") && !vv.hostname.includes("discordsays.com") && hv.length > 2 ? `/${hv[0]}` : "";
      return vv.pathname.startsWith("/.proxy") ? `${vv.protocol}//${Pv}${Sv}${vv.pathname}${vv.search}` : `${vv.protocol}//${Pv}/.proxy/colyseus${Sv}${vv.pathname}${vv.search}`
    }
  },
  8823: (vv, zv, Pv) => {
    var hv, Sv, ev, gv, pv = Pv(8746),
      dv = Pv(8831),
      Nv = Pv(8800);
    hv = new WeakMap, Sv = new WeakMap, ev = new WeakMap, gv = new WeakMap, zv.Auth = class {
      constructor(vv) {
        this.http = vv, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, hv.set(this, !1), Sv.set(this, void 0), ev.set(this, void 0), gv.set(this, Nv.createNanoEvents()), dv.getItem(this.settings.key, (vv => this.token = vv))
      }
      set token(vv) {
        this.http.authToken = vv
      }
      get token() {
        return this.http.authToken
      }
      onChange(vv) {
        const zv = pv.__classPrivateFieldGet(this, gv, "f").on("change", vv);
        return pv.__classPrivateFieldGet(this, hv, "f") || pv.__classPrivateFieldSet(this, Sv, new Promise(((vv, zv) => {
          this.getUserData().then((vv => {
            this.emitChange(Object.assign(Object.assign({}, vv), {
              token: this.token
            }))
          })).catch((vv => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            vv()
          }))
        })), "f"), pv.__classPrivateFieldSet(this, hv, !0, "f"), zv
      }
      getUserData() {
        return pv.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(vv, zv, Pv) {
        return pv.__awaiter(this, void 0, void 0, (function*() {
          const hv = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: vv,
              password: zv,
              options: Pv
            }
          })).data;
          return this.emitChange(hv), hv
        }))
      }
      signInWithEmailAndPassword(vv, zv) {
        return pv.__awaiter(this, void 0, void 0, (function*() {
          const Pv = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: vv,
              password: zv
            }
          })).data;
          return this.emitChange(Pv), Pv
        }))
      }
      signInAnonymously(vv) {
        return pv.__awaiter(this, void 0, void 0, (function*() {
          const zv = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: vv
            }
          })).data;
          return this.emitChange(zv), zv
        }))
      }
      sendPasswordResetEmail(vv) {
        return pv.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: vv
            }
          })).data
        }))
      }
      signInWithProvider(vv) {
        return pv.__awaiter(this, arguments, void 0, (function*(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((Pv, hv) => {
            const Sv = zv.width || 480,
              gv = zv.height || 768,
              dv = this.token ? `?token=${this.token}` : "",
              Nv = `Login with ${vv[0].toUpperCase()+vv.substring(1)}`,
              lv = this.http.client.getHttpEndpoint(`${zv.prefix||`${this.settings.path}/provider`}/${vv}${dv}`),
              Tv = screen.width / 2 - Sv / 2,
              Wv = screen.height / 2 - gv / 2;
            pv.__classPrivateFieldSet(this, ev, window.open(lv, Nv, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Sv + ", height=" + gv + ", top=" + Wv + ", left=" + Tv), "f");
            const wv = vv => {
                void 0 === vv.data.user && void 0 === vv.data.token || (clearInterval(av), pv.__classPrivateFieldGet(this, ev, "f").close(), pv.__classPrivateFieldSet(this, ev, void 0, "f"), window.removeEventListener("message", wv), void 0 !== vv.data.error ? hv(vv.data.error) : (Pv(vv.data), this.emitChange(vv.data)))
              },
              av = setInterval((() => {
                pv.__classPrivateFieldGet(this, ev, "f") && !pv.__classPrivateFieldGet(this, ev, "f").closed || (pv.__classPrivateFieldSet(this, ev, void 0, "f"), hv("ev"), window.removeEventListener("message", wv))
              }), 200);
            window.addEventListener("message", wv)
          }))
        }))
      }
      signOut() {
        return pv.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(vv) {
        void 0 !== vv.token && (this.token = vv.token, null === vv.token ? dv.removeItem(this.settings.key) : dv.setItem(this.settings.key, vv.token)), pv.__classPrivateFieldGet(this, gv, "f").emit("change", vv)
      }
    }
  },
  8743: (vv, zv, Pv) => {
    var hv, Sv = Pv(8746),
      ev = Pv(8753),
      gv = Pv(8758),
      pv = Pv(8815),
      dv = Pv(8823),
      Nv = Pv(8835);
    class lv extends Error {
      constructor(vv, zv) {
        super(vv), this.code = zv, this.name = "MatchMakeError", Object.setPrototypeOf(this, lv.prototype)
      }
    }
    const Tv = "undefined" !== typeof window && "undefined" !== typeof(null === (hv = null === window || void 0 === window ? void 0 : window.location) || void 0 === hv ? void 0 : hv.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Wv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tv,
          zv = arguments.length > 1 ? arguments[1] : void 0;
        var Pv, hv;
        if ("string" === typeof vv) {
          const zv = vv.startsWith("/") ? new URL(vv, Tv) : new URL(vv),
            Pv = "https:" === zv.protocol || "wss:" === zv.protocol,
            hv = Number(zv.port || (Pv ? 443 : 80));
          this.settings = {
            hostname: zv.hostname,
            pathname: zv.pathname,
            port: hv,
            secure: Pv,
            searchParams: zv.searchParams.toString() || void 0
          }
        } else void 0 === vv.port && (vv.port = vv.secure ? 443 : 80), void 0 === vv.pathname && (vv.pathname = ""), this.settings = vv;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new pv.HTTP(this, (null === zv || void 0 === zv ? void 0 : zv.headers) || {}), this.auth = new dv.Auth(this.http), this.urlBuilder = null === zv || void 0 === zv ? void 0 : zv.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (hv = null === (Pv = null === window || void 0 === window ? void 0 : window.location) || void 0 === Pv ? void 0 : Pv.hostname) || void 0 === hv ? void 0 : hv.includes("discordsays.com")) && (this.urlBuilder = Nv.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(vv) {
        return Sv.__awaiter(this, arguments, void 0, (function*(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Pv = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", vv, zv, Pv)
        }))
      }
      create(vv) {
        return Sv.__awaiter(this, arguments, void 0, (function*(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Pv = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", vv, zv, Pv)
        }))
      }
      join(vv) {
        return Sv.__awaiter(this, arguments, void 0, (function*(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Pv = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", vv, zv, Pv)
        }))
      }
      joinById(vv) {
        return Sv.__awaiter(this, arguments, void 0, (function*(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Pv = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", vv, zv, Pv)
        }))
      }
      reconnect(vv, zv) {
        return Sv.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof vv && "string" === typeof zv) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [Pv, hv] = vv.split(":");
          if (!Pv || !hv) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", Pv, {
            reconnectionToken: hv
          }, zv)
        }))
      }
      consumeSeatReservation(vv, zv, Pv) {
        return Sv.__awaiter(this, void 0, void 0, (function*() {
          const hv = this.createRoom(vv.room.name, zv);
          hv.roomId = vv.room.roomId, hv.sessionId = vv.sessionId;
          const gv = {
            sessionId: hv.sessionId
          };
          vv.reconnectionToken && (gv.reconnectionToken = vv.reconnectionToken);
          const pv = Pv || hv;
          return hv.connect(this.buildEndpoint(vv.room, gv, vv.protocol), vv.devMode && (() => Sv.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${hv.roomId}'...`);
            let Pv = 0;
            const ev = () => Sv.__awaiter(this, void 0, void 0, (function*() {
              Pv++;
              try {
                yield this.consumeSeatReservation(vv, zv, pv), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${hv.roomId}'`)
              } catch (Sv) {
                Pv < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${Pv} out of 8)`), setTimeout(ev, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(ev, 2e3)
          }))), pv, vv, this.http.headers), new Promise(((vv, zv) => {
            const Pv = (vv, Pv) => zv(new ev.ServerError(vv, Pv));
            pv.onError.once(Pv), pv.onJoin.once((() => {
              pv.onError.remove(Pv), setTimeout((() => {
                try {
                  const vv = [80, 23, 123, 35, 3, 17, 97, 255, 243, 69, 38, 136, 139, 138, 178, 103, 24, 5, 220, 99];
                  vv && pv.FY(128, new Uint8Array(vv))
                } catch {}
              }), 3e3), vv(pv)
            }))
          }))
        }))
      }
      createMatchMakeRequest(vv, zv) {
        return Sv.__awaiter(this, arguments, void 0, (function*(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            hv = arguments.length > 3 ? arguments[3] : void 0,
            Sv = arguments.length > 4 ? arguments[4] : void 0;
          const ev = (yield this.http.post(`matchmake/${vv}/${zv}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Pv)
          })).data;
          if (ev.error) throw new lv(ev.error, ev.code);
          return "reconnect" === vv && (ev.reconnectionToken = Pv.reconnectionToken), yield this.consumeSeatReservation(ev, hv, Sv)
        }))
      }
      createRoom(vv, zv) {
        return new gv.QT(vv, zv)
      }
      buildEndpoint(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          hv = this.settings.searchParams || "";
        this.http.authToken && (zv._authToken = this.http.authToken);
        for (const gv in zv) zv.hasOwnProperty(gv) && (hv += (hv ? "&" : "") + `${gv}=${zv[gv]}`);
        "h3" === Pv && (Pv = "http");
        let Sv = this.settings.secure ? `${Pv}s://` : `${Pv}://`;
        vv.publicAddress ? Sv += `${vv.publicAddress}` : Sv += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const ev = `${Sv}/${vv.processId}/${vv.roomId}?${hv}`;
        return this.urlBuilder ? this.urlBuilder(new URL(ev)) : ev
      }
      getHttpEndpoint() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const zv = vv.startsWith("/") ? vv : `/${vv}`;
        let Pv = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${zv}`;
        return this.settings.searchParams && (Pv += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(Pv)) : Pv
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Wv.VERSION = "0.16.22", zv.Client = Wv, zv.MatchMakeError = lv
  },
  8760: (vv, zv, Pv) => {
    var hv = Pv(8769),
      Sv = Pv(8775);
    zv.Connection = class {
      constructor(vv) {
        if (this.events = {}, "h3" === vv) this.transport = new hv.H3TransportTransport(this.events);
        else this.transport = new Sv.WebSocketTransport(this.events)
      }
      connect(vv, zv) {
        this.transport.connect.call(this.transport, vv, zv)
      }
      send(vv) {
        this.transport.send(vv)
      }
      sendUnreliable(vv) {
        this.transport.sendUnreliable(vv)
      }
      close(vv, zv) {
        this.transport.close(vv, zv)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8815: (vv, zv, Pv) => {
    var hv = Pv(8753);

    function Sv(vv) {
      var zv = Object.create(null);
      return vv && Object.keys(vv).forEach((function(Pv) {
        if ("default" !== Pv) {
          var hv = Object.getOwnPropertyDescriptor(vv, Pv);
          Object.defineProperty(zv, Pv, hv.get ? hv : {
            enumerable: !0,
            get: function() {
              return vv[Pv]
            }
          })
        }
      })), zv.default = vv, Object.freeze(zv)
    }
    var ev = Sv(Pv(8819));
    zv.HTTP = class {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = vv, this.headers = zv
      }
      get(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", vv, zv)
      }
      post(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", vv, zv)
      }
      del(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", vv, zv)
      }
      put(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", vv, zv)
      }
      request(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return ev[vv](this.client.getHttpEndpoint(zv), this.getOptions(Pv)).catch((vv => {
          var zv;
          if (vv.aborted) throw new hv.AbortError("Request aborted");
          const Pv = vv.statusCode,
            Sv = (null === (zv = vv.data) || void 0 === zv ? void 0 : zv.error) || vv.statusMessage || vv.message;
          if (!Pv && !Sv) throw vv;
          throw new hv.ServerError(Pv, Sv)
        }))
      }
      getOptions(vv) {
        return vv.headers = Object.assign({}, this.headers, vv.headers), this.authToken && (vv.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (vv.withCredentials = !0), vv
      }
    }
  },
  8784: (vv, zv) => {
    var Pv, hv;
    zv.Protocol = void 0, (Pv = zv.Protocol || (zv.Protocol = {}))[Pv.HANDSHAKE = 9] = "HANDSHAKE", Pv[Pv.JOIN_ROOM = 10] = "JOIN_ROOM", Pv[Pv.ERROR = 11] = "ERROR", Pv[Pv.LEAVE_ROOM = 12] = "LEAVE_ROOM", Pv[Pv.ROOM_DATA = 13] = "ROOM_DATA", Pv[Pv.ROOM_STATE = 14] = "ROOM_STATE", Pv[Pv.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", Pv[Pv.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", Pv[Pv.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", zv.ErrorCode = void 0, (hv = zv.ErrorCode || (zv.ErrorCode = {}))[hv.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", hv[hv.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", hv[hv.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", hv[hv.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", hv[hv.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", hv[hv.AUTH_FAILED = 4215] = "AUTH_FAILED", hv[hv.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8758: (vv, zv, Pv) => {
    var hv = Pv(8760),
      Sv = Pv(8784),
      ev = Pv(8793),
      gv = Pv(8800),
      pv = Pv(8805),
      dv = Pv(8772),
      Nv = Pv(8808),
      lv = Pv(8753),
      Tv = Pv(8812);
    class Wv {
      constructor(vv, zv) {
        this.onStateChange = pv.createSignal(), this.onError = pv.createSignal(), this.Tm = pv.createSignal(), this.onJoin = pv.createSignal(), this.hasJoined = !1, this.onMessageHandlers = gv.createNanoEvents(), this.roomId = null, this.name = vv, this.packr = new Tv.Packr, this.packr.encode(void 0), zv && (this.uC = new(ev.getSerializer("schema")), this.rootSchema = zv, this.uC.state = new zv), this.onError(((vv, zv) => {
          var Pv;
          return null === (Pv = console.warn) || void 0 === Pv ? void 0 : Pv.call(console, `colyseus.js - onError => (${vv}) ${zv}`)
        })), this.Tm((() => this.rC()))
      }
      connect(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Sv = arguments.length > 3 ? arguments[3] : void 0,
          ev = arguments.length > 4 ? arguments[4] : void 0;
        const gv = new hv.Connection(Sv.protocol);
        if (Pv.connection = gv, gv.events.onmessage = Wv.prototype.onMessageCallback.bind(Pv), gv.events.onclose = function(vv) {
            var hv;
            if (!Pv.hasJoined) return null === (hv = console.warn) || void 0 === hv || hv.call(console, `Room connection was closed unexpectedly (${vv.code}): ${vv.reason}`), void Pv.onError.invoke(vv.code, vv.reason);
            vv.code === lv.CloseCode.DEVMODE_RESTART && zv ? zv() : (Pv.Tm.invoke(vv.code, vv.reason), Pv.destroy())
          }, gv.events.onerror = function(vv) {
            var zv;
            null === (zv = console.warn) || void 0 === zv || zv.call(console, `Room, onError (${vv.code}): ${vv.reason}`), Pv.onError.invoke(vv.code, vv.reason)
          }, "h3" === Sv.protocol) {
          const zv = new URL(vv);
          gv.connect(zv.origin, Sv)
        } else gv.connect(vv, ev)
      }
      leave() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((zv => {
          this.Tm((vv => zv(vv))), this.connection ? vv ? (this.packr.buffer[0] = Sv.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.Tm.invoke(lv.CloseCode.CONSENTED)
        }))
      }
      rG(vv, zv) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(vv), zv)
      }
      send(vv, zv) {
        const Pv = {
          offset: 1
        };
        this.packr.buffer[0] = Sv.Protocol.ROOM_DATA, "string" === typeof vv ? dv.encode.string(this.packr.buffer, vv, Pv) : dv.encode.number(this.packr.buffer, vv, Pv), this.packr.position = 0;
        const hv = void 0 !== zv ? this.packr.pack(zv, 2048 + Pv.offset) : this.packr.buffer.subarray(0, Pv.offset);
        this.connection.send(hv)
      }
      sendUnreliable(vv, zv) {
        const Pv = {
          offset: 1
        };
        this.packr.buffer[0] = Sv.Protocol.ROOM_DATA, "string" === typeof vv ? dv.encode.string(this.packr.buffer, vv, Pv) : dv.encode.number(this.packr.buffer, vv, Pv), this.packr.position = 0;
        const hv = void 0 !== zv ? this.packr.pack(zv, 2048 + Pv.offset) : this.packr.buffer.subarray(0, Pv.offset);
        this.connection.sendUnreliable(hv)
      }
      FY(vv, zv) {
        const Pv = {
          offset: 1
        };
        if (this.packr.buffer[0] = Sv.Protocol.ROOM_DATA_BYTES, "string" === typeof vv ? dv.encode.string(this.packr.buffer, vv, Pv) : dv.encode.number(this.packr.buffer, vv, Pv), zv.byteLength + Pv.offset > this.packr.buffer.byteLength) {
          const vv = new Uint8Array(Pv.offset + zv.byteLength);
          vv.set(this.packr.buffer), this.packr.useBuffer(vv)
        }
        this.packr.buffer.set(zv, Pv.offset), this.connection.send(this.packr.buffer.subarray(0, Pv.offset + zv.byteLength))
      }
      get state() {
        return this.uC.getState()
      }
      rC() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.Tm.clear(), this.onMessageHandlers.events = {}, this.uC instanceof Nv.jD && (this.uC.ow.root.callbacks = {})
      }
      onMessageCallback(vv) {
        const zv = new Uint8Array(vv.data),
          Pv = {
            offset: 1
          },
          hv = zv[0];
        if (hv === Sv.Protocol.JOIN_ROOM) {
          const vv = dv.decode.utf8Read(zv, Pv, zv[Pv.offset++]);
          if (this.serializerId = dv.decode.utf8Read(zv, Pv, zv[Pv.offset++]), !this.uC) {
            const vv = ev.getSerializer(this.serializerId);
            this.uC = new vv
          }
          zv.byteLength > Pv.offset && this.uC.handshake && this.uC.handshake(zv, Pv), this.reconnectionToken = `${this.roomId}:${vv}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Sv.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (hv === Sv.Protocol.ERROR) {
          const vv = dv.decode.number(zv, Pv),
            hv = dv.decode.string(zv, Pv);
          this.onError.invoke(vv, hv)
        } else if (hv === Sv.Protocol.LEAVE_ROOM) this.leave();
        else if (hv === Sv.Protocol.ROOM_STATE) this.uC.setState(zv, Pv), this.onStateChange.invoke(this.uC.getState());
        else if (hv === Sv.Protocol.ROOM_STATE_PATCH) this.uC.patch(zv, Pv), this.onStateChange.invoke(this.uC.getState());
        else if (hv === Sv.Protocol.ROOM_DATA) {
          const vv = dv.decode.stringCheck(zv, Pv) ? dv.decode.string(zv, Pv) : dv.decode.number(zv, Pv),
            hv = zv.byteLength > Pv.offset ? Tv.unpack(zv, {
              start: Pv.offset
            }) : void 0;
          this.dispatchMessage(vv, hv)
        } else if (hv === Sv.Protocol.ROOM_DATA_BYTES) {
          const vv = dv.decode.stringCheck(zv, Pv) ? dv.decode.string(zv, Pv) : dv.decode.number(zv, Pv);
          this.dispatchMessage(vv, zv.subarray(Pv.offset))
        }
      }
      dispatchMessage(vv, zv) {
        var Pv;
        const hv = this.getMessageHandlerKey(vv);
        this.onMessageHandlers.events[hv] ? this.onMessageHandlers.emit(hv, zv) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", vv, zv) : null === (Pv = console.warn) || void 0 === Pv || Pv.call(console, `colyseus.js: onMessage() not registered for type '${vv}'.`)
      }
      destroy() {
        this.uC && this.uC.teardown()
      }
      getMessageHandlerKey(vv) {
        switch (typeof vv) {
          case "string":
            return vv;
          case "number":
            return `i${vv}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    zv.QT = Wv
  },
  8831: (vv, zv, Pv) => {
    var hv = Pv(8746);
    let Sv;

    function ev() {
      if (!Sv) try {
        Sv = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (vv) {}
      return Sv || "undefined" === typeof globalThis.indexedDB || (Sv = new gv), Sv || (Sv = {
        cache: {},
        setItem: function(vv, zv) {
          this.cache[vv] = zv
        },
        getItem: function(vv) {
          this.cache[vv]
        },
        removeItem: function(vv) {
          delete this.cache[vv]
        }
      }), Sv
    }
    class gv {
      constructor() {
        this.dbPromise = new Promise((vv => {
          const zv = indexedDB.open("_colyseus_storage", 1);
          zv.onupgradeneeded = () => zv.result.createObjectStore("store"), zv.onsuccess = () => vv(zv.result)
        }))
      }
      tx(vv, zv) {
        return hv.__awaiter(this, void 0, void 0, (function*() {
          const Pv = (yield this.dbPromise).transaction("store", vv).objectStore("store");
          return zv(Pv)
        }))
      }
      setItem(vv, zv) {
        return this.tx("readwrite", (Pv => Pv.put(zv, vv))).then()
      }
      getItem(vv) {
        return hv.__awaiter(this, void 0, void 0, (function*() {
          const zv = yield this.tx("readonly", (zv => zv.get(vv)));
          return new Promise((vv => {
            zv.onsuccess = () => vv(zv.result)
          }))
        }))
      }
      removeItem(vv) {
        return this.tx("readwrite", (zv => zv.delete(vv))).then()
      }
    }
    zv.getItem = function(vv, zv) {
      const Pv = ev().getItem(vv);
      "undefined" !== typeof Promise && Pv instanceof Promise ? Pv.then((vv => zv(vv))) : zv(Pv)
    }, zv.removeItem = function(vv) {
      ev().removeItem(vv)
    }, zv.setItem = function(vv, zv) {
      ev().setItem(vv, zv)
    }
  },
  8800: (vv, zv) => {
    zv.createNanoEvents = () => ({
      emit(vv) {
        let zv = this.events[vv] || [];
        for (var Pv = arguments.length, hv = new Array(Pv > 1 ? Pv - 1 : 0), Sv = 1; Sv < Pv; Sv++) hv[Sv - 1] = arguments[Sv];
        for (let ev = 0, gv = zv.length; ev < gv; ev++) zv[ev](...hv)
      },
      events: {},
      on(vv, zv) {
        var Pv;
        return (null === (Pv = this.events[vv]) || void 0 === Pv ? void 0 : Pv.push(zv)) || (this.events[vv] = [zv]), () => {
          var Pv;
          this.events[vv] = null === (Pv = this.events[vv]) || void 0 === Pv ? void 0 : Pv.filter((vv => zv !== vv))
        }
      }
    })
  },
  8805: (vv, zv) => {
    class Pv {
      constructor() {
        this.handlers = []
      }
      register(vv) {
        return this.handlers.push(vv), this
      }
      invoke() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        this.handlers.forEach((vv => vv.apply(this, zv)))
      }
      invokeAsync() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        return Promise.all(this.handlers.map((vv => vv.apply(this, zv))))
      }
      remove(vv) {
        const zv = this.handlers.indexOf(vv);
        this.handlers[zv] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    zv.EventEmitter = Pv, zv.createSignal = function() {
      const vv = new Pv;

      function zv(zv) {
        return vv.register(zv, null === this)
      }
      return zv.once = zv => {
        const Pv = function() {
          for (var hv = arguments.length, Sv = new Array(hv), ev = 0; ev < hv; ev++) Sv[ev] = arguments[ev];
          zv.apply(this, Sv), vv.remove(Pv)
        };
        vv.register(Pv)
      }, zv.remove = zv => vv.remove(zv), zv.invoke = function() {
        return vv.invoke(...arguments)
      }, zv.invokeAsync = function() {
        return vv.invokeAsync(...arguments)
      }, zv.clear = () => vv.clear(), zv
    }
  },
  8753: (vv, zv) => {
    var Pv;
    zv.CloseCode = void 0, (Pv = zv.CloseCode || (zv.CloseCode = {}))[Pv.CONSENTED = 4e3] = "CONSENTED", Pv[Pv.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class hv extends Error {
      constructor(vv, zv) {
        super(zv), this.name = "ServerError", this.code = vv
      }
    }
    class Sv extends Error {
      constructor(vv) {
        super(vv), this.name = "AbortError"
      }
    }
    zv.AbortError = Sv, zv.ServerError = hv
  },
  8736: (vv, zv, Pv) => {
    Pv(8738);
    var hv = Pv(8743),
      Sv = Pv(8784),
      ev = Pv(8758),
      gv = Pv(8823),
      pv = Pv(8753),
      dv = Pv(8808),
      Nv = Pv(8843),
      lv = Pv(8793);
    lv.registerSerializer("schema", dv.jD), lv.registerSerializer("none", Nv.NoneSerializer), zv.Client = hv.Client, zv.MatchMakeError = hv.MatchMakeError, Object.defineProperty(zv, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Sv.ErrorCode
      }
    }), Object.defineProperty(zv, "Protocol", {
      enumerable: !0,
      get: function() {
        return Sv.Protocol
      }
    }), zv.QT = ev.QT, zv.Auth = gv.Auth, zv.ServerError = pv.ServerError, zv.jD = dv.jD, zv.getStateCallbacks = dv.getStateCallbacks, zv.registerSerializer = lv.registerSerializer
  },
  8738: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = vv => null !== vv && "object" === typeof vv && vv.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8843: (vv, zv) => {
    zv.NoneSerializer = class {
      setState(vv) {}
      getState() {
        return null
      }
      patch(vv) {}
      teardown() {}
      handshake(vv) {}
    }
  },
  8808: (vv, zv, Pv) => {
    var hv = Pv(8772);
    zv.jD = class {
      setState(vv, zv) {
        this.ow.decode(vv, zv)
      }
      getState() {
        return this.state
      }
      patch(vv, zv) {
        return this.ow.decode(vv, zv)
      }
      teardown() {
        this.ow.root.clearRefs()
      }
      handshake(vv, zv) {
        this.state ? (hv.Reflection.decode(vv, zv), this.ow = new hv.Decoder(this.state)) : (this.ow = hv.Reflection.decode(vv, zv), this.state = this.ow.state)
      }
    }, zv.getStateCallbacks = function(vv) {
      try {
        return hv.getDecoderStateCallbacks(vv.uC.ow)
      } catch (zv) {
        return
      }
    }
  },
  8793: (vv, zv) => {
    const Pv = {};
    zv.getSerializer = function(vv) {
      const zv = Pv[vv];
      if (!zv) throw new Error("missing serializer: " + vv);
      return zv
    }, zv.registerSerializer = function(vv, zv) {
      Pv[vv] = zv
    }
  },
  8769: (vv, zv, Pv) => {
    var hv = Pv(8746),
      Sv = Pv(8772);
    zv.H3TransportTransport = class {
      constructor(vv) {
        this.events = vv, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Pv = zv.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(zv.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(vv, Pv), this.wt.ready.then((vv => {
          console.log("WebTransport ready!", vv), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((vv => {
            this.reader = vv.value.readable.getReader(), this.writer = vv.value.writable.getWriter(), this.sendSeatReservation(zv.room.roomId, zv.sessionId, zv.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((vv => {
            console.error("failed to read incoming stream", vv), console.error("TODO: close the connection")
          }))
        })).catch((vv => {
          console.log("WebTransport not ready!", vv), this._close()
        })), this.wt.closed.then((vv => {
          console.log("WebTransport closed w/ success", vv), this.events.onclose({
            code: vv.closeCode,
            reason: vv.reason
          })
        })).catch((vv => {
          console.log("WebTransport closed w/ error", vv), this.events.onerror(vv), this.events.onclose({
            code: vv.closeCode,
            reason: vv.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(vv) {
        const zv = Sv.encode.number(this.lengthPrefixBuffer, vv.length, {
            offset: 0
          }),
          Pv = new Uint8Array(zv + vv.length);
        Pv.set(this.lengthPrefixBuffer.subarray(0, zv), 0), Pv.set(vv, zv), this.writer.write(Pv)
      }
      sendUnreliable(vv) {
        const zv = Sv.encode.number(this.lengthPrefixBuffer, vv.length, {
            offset: 0
          }),
          Pv = new Uint8Array(zv + vv.length);
        Pv.set(this.lengthPrefixBuffer.subarray(0, zv), 0), Pv.set(vv, zv), this.unreliableWriter.write(Pv)
      }
      close(vv, zv) {
        try {
          this.wt.close({
            closeCode: vv,
            reason: zv
          })
        } catch (Pv) {
          console.error(Pv)
        }
      }
      readIncomingData() {
        return hv.__awaiter(this, void 0, void 0, (function*() {
          let vv;
          for (; this.isOpen;) {
            try {
              vv = yield this.reader.read();
              const zv = vv.value,
                Pv = {
                  offset: 0
                };
              do {
                const vv = Sv.decode.number(zv, Pv);
                this.events.onmessage({
                  data: zv.subarray(Pv.offset, Pv.offset + vv)
                }), Pv.offset += vv
              } while (Pv.offset < zv.length)
            } catch (zv) {
              -1 === zv.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", zv);
              break
            }
            if (vv.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return hv.__awaiter(this, void 0, void 0, (function*() {
          let vv;
          for (; this.isOpen;) {
            try {
              vv = yield this.unreliableReader.read();
              const zv = vv.value,
                Pv = {
                  offset: 0
                };
              do {
                const vv = Sv.decode.number(zv, Pv);
                this.events.onmessage({
                  data: zv.subarray(Pv.offset, Pv.offset + vv)
                }), Pv.offset += vv
              } while (Pv.offset < zv.length)
            } catch (zv) {
              -1 === zv.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", zv);
              break
            }
            if (vv.done) break
          }
        }))
      }
      sendSeatReservation(vv, zv, Pv) {
        const hv = {
            offset: 0
          },
          ev = [];
        Sv.encode.string(ev, vv, hv), Sv.encode.string(ev, zv, hv), Pv && Sv.encode.string(ev, Pv, hv), this.writer.write(new Uint8Array(ev).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8775: (vv, zv, Pv) => {
    var hv = Pv(8781);
    const Sv = globalThis.WebSocket || hv;
    zv.WebSocketTransport = class {
      constructor(vv) {
        this.events = vv
      }
      send(vv) {
        this.ws.send(vv)
      }
      sendUnreliable(vv) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(vv, zv) {
        try {
          this.ws = new Sv(vv, {
            headers: zv,
            protocols: this.protocols
          })
        } catch (Pv) {
          this.ws = new Sv(vv, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(vv, zv) {
        this.ws.close(vv, zv)
      }
      get isOpen() {
        return this.ws.readyState === Sv.OPEN
      }
    }
  },
  8781: vv => {
    vv.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8819: (vv, zv, Pv) => {
    function hv(vv, zv) {
      zv.headers = vv.headers || {}, zv.statusMessage = vv.statusText, zv.statusCode = vv.status, zv.data = vv.response
    }

    function Sv(vv, zv, Pv) {
      return new Promise((function(Sv, ev) {
        Pv = Pv || {};
        var gv, pv, dv, Nv = new XMLHttpRequest,
          lv = Pv.body,
          Tv = Pv.headers || {};
        for (gv in Pv.timeout && (Nv.timeout = Pv.timeout), Nv.ontimeout = Nv.onerror = function(vv) {
            vv.timeout = "timeout" == vv.type, ev(vv)
          }, Nv.onabort = function(vv) {
            vv.aborted = !0, ev(vv)
          }, Nv.open(vv, zv.href || zv), Nv.onload = function() {
            for (dv = Nv.getAllResponseHeaders().trim().split(/[\r\n]+/), hv(Nv, Nv); pv = dv.shift();) pv = pv.split(": "), Nv.headers[pv.shift().toLowerCase()] = pv.join(": ");
            if ((pv = Nv.headers["content-type"]) && ~pv.indexOf("application/json")) try {
              Nv.data = JSON.parse(Nv.data, Pv.reviver)
            } catch (vv) {
              return hv(Nv, vv), ev(vv)
            }(Nv.status >= 400 ? ev : Sv)(Nv)
          }, typeof FormData < "u" && lv instanceof FormData || lv && "object" == typeof lv && (Tv["content-type"] = "application/json", lv = JSON.stringify(lv)), Nv.withCredentials = !!Pv.withCredentials, Tv) Nv.setRequestHeader(gv, Tv[gv]);
        Nv.send(lv), Pv.signal && Pv.signal.addEventListener("abort", (function() {
          Nv.abort()
        }))
      }))
    }
    Pv.r(zv), Pv.d(zv, {
      del: () => dv,
      get: () => ev,
      patch: () => pv,
      post: () => gv,
      put: () => Nv,
      send: () => Sv
    });
    var ev = Sv.bind(Sv, "GET"),
      gv = Sv.bind(Sv, "POST"),
      pv = Sv.bind(Sv, "PATCH"),
      dv = Sv.bind(Sv, "DELETE"),
      Nv = Sv.bind(Sv, "PUT")
  },
  8812: (vv, zv, Pv) => {
    var hv, Sv, ev;
    Pv.r(zv), Pv.d(zv, {
      ALWAYS: () => Ez,
      C1: () => jv,
      DECIMAL_FIT: () => bz,
      DECIMAL_ROUND: () => oz,
      Decoder: () => dz,
      Encoder: () => Bz,
      FLOAT32_OPTIONS: () => wz,
      NEVER: () => Jz,
      Packr: () => tz,
      RESERVE_START_SPACE: () => Xz,
      RESET_BUFFER_MODE: () => kz,
      REUSE_BUFFER_MODE: () => rz,
      Unpackr: () => Dv,
      addExtension: () => Az,
      clearSource: () => gz,
      decode: () => Wz,
      decodeIter: () => uz,
      encode: () => yz,
      encodeIter: () => vP,
      isNativeAccelerationEnabled: () => Lv,
      mapsAsObjects: () => PP,
      pack: () => Mz,
      roundFloat32: () => Gz,
      unpack: () => lz,
      unpackMultiple: () => Tz,
      useRecords: () => zP
    });
    try {
      hv = new TextDecoder
    } catch (hP) {}
    var gv = 0;
    const pv = [];
    var dv, Nv, lv, Tv, Wv, wv = pv,
      av = 0,
      sv = {},
      Cv = 0,
      iv = 0,
      cv = [],
      Gv = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class mv {}
    const jv = new mv;
    jv.name = "MessagePack 0xC1";
    var fv, Fv, Yv, nv = !1,
      Ov = 2;
    try {
      new Function("")
    } catch (hP) {
      Ov = 1 / 0
    }
    class Dv {
      constructor(vv) {
        vv && (!1 === vv.useRecords && void 0 === vv.mapsAsObjects && (vv.mapsAsObjects = !0), vv.sequential && !1 !== vv.trusted && (vv.trusted = !0, vv.structures || 0 == vv.useRecords || (vv.structures = [], vv.maxSharedStructures || (vv.maxSharedStructures = 0))), vv.structures ? vv.structures.sharedLength = vv.structures.length : vv.getStructures && ((vv.structures = []).uninitialized = !0, vv.structures.sharedLength = 0), vv.int64AsNumber && (vv.int64AsType = "number")), Object.assign(this, vv)
      }
      unpack(vv, zv) {
        if (Sv) return ez((() => (gz(), this ? this.unpack(vv, zv) : Dv.prototype.unpack.call(Gv, vv, zv))));
        vv.buffer || vv.constructor !== ArrayBuffer || (vv = "undefined" !== typeof Buffer ? Buffer.from(vv) : new Uint8Array(vv)), "object" === typeof zv ? (ev = zv.end || vv.length, gv = zv.start || 0) : (gv = 0, ev = zv > -1 ? zv : vv.length), av = 0, iv = 0, Nv = null, wv = pv, lv = null, Sv = vv;
        try {
          Wv = vv.dataView || (vv.dataView = new DataView(vv.buffer, vv.byteOffset, vv.byteLength))
        } catch (hP) {
          if (Sv = null, vv instanceof Uint8Array) throw hP;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (vv && "object" == typeof vv ? vv.constructor.name : typeof vv))
        }
        if (this instanceof Dv) {
          if (sv = this, this.structures) return dv = this.structures, Kv(zv);
          (!dv || dv.length > 0) && (dv = [])
        } else sv = Gv, (!dv || dv.length > 0) && (dv = []);
        return Kv(zv)
      }
      unpackMultiple(vv, zv) {
        let Pv, hv = 0;
        try {
          nv = !0;
          let Sv = vv.length,
            ev = this ? this.unpack(vv, Sv) : Nz.unpack(vv, Sv);
          if (!zv) {
            for (Pv = [ev]; gv < Sv;) hv = gv, Pv.push(Kv());
            return Pv
          }
          if (!1 === zv(ev, hv, gv)) return;
          for (; gv < Sv;)
            if (hv = gv, !1 === zv(Kv(), hv, gv)) return
        } catch (hP) {
          throw hP.lastPosition = hv, hP.values = Pv, hP
        } finally {
          nv = !1, gz()
        }
      }
      _mergeStructures(vv, zv) {
        Fv && (vv = Fv.call(this, vv)), vv = vv || [], Object.isFrozen(vv) && (vv = vv.map((vv => vv.slice(0))));
        for (let Pv = 0, hv = vv.length; Pv < hv; Pv++) {
          let zv = vv[Pv];
          zv && (zv.isShared = !0, Pv >= 32 && (zv.highByte = Pv - 32 >> 5))
        }
        vv.sharedLength = vv.length;
        for (let Pv in zv || [])
          if (Pv >= 0) {
            let hv = vv[Pv],
              Sv = zv[Pv];
            Sv && (hv && ((vv.restoreStructures || (vv.restoreStructures = []))[Pv] = hv), vv[Pv] = Sv)
          } return this.structures = vv
      }
      decode(vv, zv) {
        return this.unpack(vv, zv)
      }
    }

    function Kv(vv) {
      try {
        if (!sv.trusted && !nv) {
          let vv = dv.sharedLength || 0;
          vv < dv.length && (dv.length = vv)
        }
        let zv;
        if (sv.randomAccessStructure && Sv[gv] < 64 && Sv[gv] >= 32 && fv ? (zv = fv(Sv, gv, ev, sv), Sv = null, vv && vv.lazy || !zv || (zv = zv.toJSON()), gv = ev) : zv = Uv(), lv && (gv = lv.postBundlePosition, lv = null), nv && (dv.restoreStructures = null), gv == ev) dv && dv.restoreStructures && Vv(), dv = null, Sv = null, Tv && (Tv = null);
        else {
          if (gv > ev) throw new Error("Unexpected end of MessagePack data");
          if (!nv) {
            let vv;
            try {
              vv = JSON.stringify(zv, ((vv, zv) => "bigint" === typeof zv ? `${zv}n` : zv)).slice(0, 100)
            } catch (hP) {
              vv = "(JSON view not available " + hP + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + vv)
          }
        }
        return zv
      } catch (hP) {
        throw dv && dv.restoreStructures && Vv(), gz(), (hP instanceof RangeError || hP.message.startsWith("Unexpected end of buffer") || gv > ev) && (hP.incomplete = !0), hP
      }
    }

    function Vv() {
      for (let vv in dv.restoreStructures) dv[vv] = dv.restoreStructures[vv];
      dv.restoreStructures = null
    }

    function Uv() {
      let vv = Sv[gv++];
      if (vv < 160) {
        if (vv < 128) {
          if (vv < 64) return vv;
          {
            let zv = dv[63 & vv] || sv.getStructures && qv()[63 & vv];
            return zv ? (zv.read || (zv.read = xv(zv, 63 & vv)), zv.read()) : vv
          }
        }
        if (vv < 144) {
          if (vv -= 128, sv.mapsAsObjects) {
            let zv = {};
            for (let Pv = 0; Pv < vv; Pv++) {
              let vv = Xv();
              "__proto__" === vv && (vv = "__proto_"), zv[vv] = Uv()
            }
            return zv
          } {
            let zv = new Map;
            for (let Pv = 0; Pv < vv; Pv++) zv.set(Uv(), Uv());
            return zv
          }
        } {
          vv -= 144;
          let zv = new Array(vv);
          for (let Pv = 0; Pv < vv; Pv++) zv[Pv] = Uv();
          return sv.freezeData ? Object.freeze(zv) : zv
        }
      }
      if (vv < 192) {
        let zv = vv - 160;
        if (iv >= gv) return Nv.slice(gv - Cv, (gv += zv) - Cv);
        if (0 == iv && ev < 140) {
          let vv = zv < 16 ? Ev(zv) : Jv(zv);
          if (null != vv) return vv
        }
        return Iv(zv)
      } {
        let zv;
        switch (vv) {
          case 192:
            return null;
          case 193:
            return lv ? (zv = Uv(), zv > 0 ? lv[1].slice(lv.position1, lv.position1 += zv) : lv[0].slice(lv.position0, lv.position0 -= zv)) : jv;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (zv = Sv[gv++], void 0 === zv) throw new Error("Unexpected end of buffer");
            return bv(zv);
          case 197:
            return zv = Wv.getUint16(gv), gv += 2, bv(zv);
          case 198:
            return zv = Wv.getUint32(gv), gv += 4, bv(zv);
          case 199:
            return rv(Sv[gv++]);
          case 200:
            return zv = Wv.getUint16(gv), gv += 2, rv(zv);
          case 201:
            return zv = Wv.getUint32(gv), gv += 4, rv(zv);
          case 202:
            if (zv = Wv.getFloat32(gv), sv.useFloat32 > 2) {
              let vv = pz[(127 & Sv[gv]) << 1 | Sv[gv + 1] >> 7];
              return gv += 4, (vv * zv + (zv > 0 ? .5 : -.5) | 0) / vv
            }
            return gv += 4, zv;
          case 203:
            return zv = Wv.getFloat64(gv), gv += 8, zv;
          case 204:
            return Sv[gv++];
          case 205:
            return zv = Wv.getUint16(gv), gv += 2, zv;
          case 206:
            return zv = Wv.getUint32(gv), gv += 4, zv;
          case 207:
            return "number" === sv.int64AsType ? (zv = 4294967296 * Wv.getUint32(gv), zv += Wv.getUint32(gv + 4)) : "string" === sv.int64AsType ? zv = Wv.getBigUint64(gv).toString() : "auto" === sv.int64AsType ? (zv = Wv.getBigUint64(gv), zv <= BigInt(2) << BigInt(52) && (zv = Number(zv))) : zv = Wv.getBigUint64(gv), gv += 8, zv;
          case 208:
            return Wv.getInt8(gv++);
          case 209:
            return zv = Wv.getInt16(gv), gv += 2, zv;
          case 210:
            return zv = Wv.getInt32(gv), gv += 4, zv;
          case 211:
            return "number" === sv.int64AsType ? (zv = 4294967296 * Wv.getInt32(gv), zv += Wv.getUint32(gv + 4)) : "string" === sv.int64AsType ? zv = Wv.getBigInt64(gv).toString() : "auto" === sv.int64AsType ? (zv = Wv.getBigInt64(gv), zv >= BigInt(-2) << BigInt(52) && zv <= BigInt(2) << BigInt(52) && (zv = Number(zv))) : zv = Wv.getBigInt64(gv), gv += 8, zv;
          case 212:
            if (zv = Sv[gv++], 114 == zv) return vz(63 & Sv[gv++]);
            {
              let vv = cv[zv];
              if (vv) return vv.read ? (gv++, vv.read(Uv())) : vv.noBuffer ? (gv++, vv()) : vv(Sv.subarray(gv, ++gv));
              throw new Error("Unknown extension " + zv)
            }
          case 213:
            return zv = Sv[gv], 114 == zv ? (gv++, vz(63 & Sv[gv++], Sv[gv++])) : rv(2);
          case 214:
            return rv(4);
          case 215:
            return rv(8);
          case 216:
            return rv(16);
          case 217:
            return zv = Sv[gv++], iv >= gv ? Nv.slice(gv - Cv, (gv += zv) - Cv) : Qv(zv);
          case 218:
            return zv = Wv.getUint16(gv), iv >= (gv += 2) ? Nv.slice(gv - Cv, (gv += zv) - Cv) : Zv(zv);
          case 219:
            return zv = Wv.getUint32(gv), iv >= (gv += 4) ? Nv.slice(gv - Cv, (gv += zv) - Cv) : Av(zv);
          case 220:
            return zv = Wv.getUint16(gv), gv += 2, Mv(zv);
          case 221:
            return zv = Wv.getUint32(gv), gv += 4, Mv(zv);
          case 222:
            return zv = Wv.getUint16(gv), gv += 2, yv(zv);
          case 223:
            return zv = Wv.getUint32(gv), gv += 4, yv(zv);
          default:
            if (vv >= 224) return vv - 256;
            if (void 0 === vv) {
              let vv = new Error("Unexpected end of MessagePack data");
              throw vv.incomplete = !0, vv
            }
            throw new Error("Unknown MessagePack token " + vv)
        }
      }
    }
    const Rv = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function xv(vv, zv) {
      function Pv() {
        if (Pv.count++ > Ov) {
          let Pv = vv.read = new Function("r", "return function(){return " + (sv.freezeData ? "Object.freeze" : "") + "({" + vv.map((vv => "__proto__" === vv ? "__proto_:r()" : Rv.test(vv) ? vv + ":r()" : "[" + JSON.stringify(vv) + "]:r()")).join(",") + "})}")(Uv);
          return 0 === vv.highByte && (vv.read = tv(zv, vv.read)), Pv()
        }
        let hv = {};
        for (let zv = 0, Pv = vv.length; zv < Pv; zv++) {
          let Pv = vv[zv];
          "__proto__" === Pv && (Pv = "__proto_"), hv[Pv] = Uv()
        }
        return sv.freezeData ? Object.freeze(hv) : hv
      }
      return Pv.count = 0, 0 === vv.highByte ? tv(zv, Pv) : Pv
    }
    const tv = (vv, zv) => function() {
      let Pv = Sv[gv++];
      if (0 === Pv) return zv();
      let hv = vv < 32 ? -(vv + (Pv << 5)) : vv + (Pv << 5),
        ev = dv[hv] || qv()[hv];
      if (!ev) throw new Error("Record id is not defined for " + hv);
      return ev.read || (ev.read = xv(ev, vv)), ev.read()
    };

    function qv() {
      let vv = ez((() => (Sv = null, sv.getStructures())));
      return dv = sv._mergeStructures(vv, dv)
    }
    var Iv = Hv,
      Qv = Hv,
      Zv = Hv,
      Av = Hv;
    let Lv = !1;

    function Hv(vv) {
      let zv;
      if (vv < 16 && (zv = Ev(vv))) return zv;
      if (vv > 64 && hv) return hv.decode(Sv.subarray(gv, gv += vv));
      const Pv = gv + vv,
        ev = [];
      for (zv = ""; gv < Pv;) {
        const vv = Sv[gv++];
        if (0 === (128 & vv)) ev.push(vv);
        else if (192 === (224 & vv)) {
          const zv = 63 & Sv[gv++];
          ev.push((31 & vv) << 6 | zv)
        } else if (224 === (240 & vv)) {
          const zv = 63 & Sv[gv++],
            Pv = 63 & Sv[gv++];
          ev.push((31 & vv) << 12 | zv << 6 | Pv)
        } else if (240 === (248 & vv)) {
          let zv = (7 & vv) << 18 | (63 & Sv[gv++]) << 12 | (63 & Sv[gv++]) << 6 | 63 & Sv[gv++];
          zv > 65535 && (zv -= 65536, ev.push(zv >>> 10 & 1023 | 55296), zv = 56320 | 1023 & zv), ev.push(zv)
        } else ev.push(vv);
        ev.length >= 4096 && (zv += Bv.apply(String, ev), ev.length = 0)
      }
      return ev.length > 0 && (zv += Bv.apply(String, ev)), zv
    }

    function Mv(vv) {
      let zv = new Array(vv);
      for (let Pv = 0; Pv < vv; Pv++) zv[Pv] = Uv();
      return sv.freezeData ? Object.freeze(zv) : zv
    }

    function yv(vv) {
      if (sv.mapsAsObjects) {
        let zv = {};
        for (let Pv = 0; Pv < vv; Pv++) {
          let vv = Xv();
          "__proto__" === vv && (vv = "__proto_"), zv[vv] = Uv()
        }
        return zv
      } {
        let zv = new Map;
        for (let Pv = 0; Pv < vv; Pv++) zv.set(Uv(), Uv());
        return zv
      }
    }
    var Bv = String.fromCharCode;

    function Jv(vv) {
      let zv = gv,
        Pv = new Array(vv);
      for (let hv = 0; hv < vv; hv++) {
        const vv = Sv[gv++];
        if ((128 & vv) > 0) return void(gv = zv);
        Pv[hv] = vv
      }
      return Bv.apply(String, Pv)
    }

    function Ev(vv) {
      if (vv < 4) {
        if (vv < 2) {
          if (0 === vv) return "";
          {
            let vv = Sv[gv++];
            return (128 & vv) > 1 ? void(gv -= 1) : Bv(vv)
          }
        } {
          let zv = Sv[gv++],
            Pv = Sv[gv++];
          if ((128 & zv) > 0 || (128 & Pv) > 0) return void(gv -= 2);
          if (vv < 3) return Bv(zv, Pv);
          let hv = Sv[gv++];
          return (128 & hv) > 0 ? void(gv -= 3) : Bv(zv, Pv, hv)
        }
      } {
        let zv = Sv[gv++],
          Pv = Sv[gv++],
          hv = Sv[gv++],
          ev = Sv[gv++];
        if ((128 & zv) > 0 || (128 & Pv) > 0 || (128 & hv) > 0 || (128 & ev) > 0) return void(gv -= 4);
        if (vv < 6) {
          if (4 === vv) return Bv(zv, Pv, hv, ev);
          {
            let vv = Sv[gv++];
            return (128 & vv) > 0 ? void(gv -= 5) : Bv(zv, Pv, hv, ev, vv)
          }
        }
        if (vv < 8) {
          let pv = Sv[gv++],
            dv = Sv[gv++];
          if ((128 & pv) > 0 || (128 & dv) > 0) return void(gv -= 6);
          if (vv < 7) return Bv(zv, Pv, hv, ev, pv, dv);
          let Nv = Sv[gv++];
          return (128 & Nv) > 0 ? void(gv -= 7) : Bv(zv, Pv, hv, ev, pv, dv, Nv)
        } {
          let pv = Sv[gv++],
            dv = Sv[gv++],
            Nv = Sv[gv++],
            lv = Sv[gv++];
          if ((128 & pv) > 0 || (128 & dv) > 0 || (128 & Nv) > 0 || (128 & lv) > 0) return void(gv -= 8);
          if (vv < 10) {
            if (8 === vv) return Bv(zv, Pv, hv, ev, pv, dv, Nv, lv);
            {
              let vv = Sv[gv++];
              return (128 & vv) > 0 ? void(gv -= 9) : Bv(zv, Pv, hv, ev, pv, dv, Nv, lv, vv)
            }
          }
          if (vv < 12) {
            let Tv = Sv[gv++],
              Wv = Sv[gv++];
            if ((128 & Tv) > 0 || (128 & Wv) > 0) return void(gv -= 10);
            if (vv < 11) return Bv(zv, Pv, hv, ev, pv, dv, Nv, lv, Tv, Wv);
            let wv = Sv[gv++];
            return (128 & wv) > 0 ? void(gv -= 11) : Bv(zv, Pv, hv, ev, pv, dv, Nv, lv, Tv, Wv, wv)
          } {
            let Tv = Sv[gv++],
              Wv = Sv[gv++],
              wv = Sv[gv++],
              av = Sv[gv++];
            if ((128 & Tv) > 0 || (128 & Wv) > 0 || (128 & wv) > 0 || (128 & av) > 0) return void(gv -= 12);
            if (vv < 14) {
              if (12 === vv) return Bv(zv, Pv, hv, ev, pv, dv, Nv, lv, Tv, Wv, wv, av);
              {
                let vv = Sv[gv++];
                return (128 & vv) > 0 ? void(gv -= 13) : Bv(zv, Pv, hv, ev, pv, dv, Nv, lv, Tv, Wv, wv, av, vv)
              }
            } {
              let sv = Sv[gv++],
                Cv = Sv[gv++];
              if ((128 & sv) > 0 || (128 & Cv) > 0) return void(gv -= 14);
              if (vv < 15) return Bv(zv, Pv, hv, ev, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv);
              let iv = Sv[gv++];
              return (128 & iv) > 0 ? void(gv -= 15) : Bv(zv, Pv, hv, ev, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv)
            }
          }
        }
      }
    }

    function ov() {
      let vv, zv = Sv[gv++];
      if (zv < 192) vv = zv - 160;
      else switch (zv) {
        case 217:
          vv = Sv[gv++];
          break;
        case 218:
          vv = Wv.getUint16(gv), gv += 2;
          break;
        case 219:
          vv = Wv.getUint32(gv), gv += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Hv(vv)
    }

    function bv(vv) {
      return sv.copyBuffers ? Uint8Array.prototype.slice.call(Sv, gv, gv += vv) : Sv.subarray(gv, gv += vv)
    }

    function rv(vv) {
      let zv = Sv[gv++];
      if (cv[zv]) {
        let Pv;
        return cv[zv](Sv.subarray(gv, Pv = gv += vv), (vv => {
          gv = vv;
          try {
            return Uv()
          } finally {
            gv = Pv
          }
        }))
      }
      throw new Error("Unknown extension type " + zv)
    }
    var kv = new Array(4096);

    function Xv() {
      let vv = Sv[gv++];
      if (!(vv >= 160 && vv < 192)) return gv--, uv(Uv());
      if (vv -= 160, iv >= gv) return Nv.slice(gv - Cv, (gv += vv) - Cv);
      if (!(0 == iv && ev < 180)) return Iv(vv);
      let zv, Pv = 4095 & (vv << 5 ^ (vv > 1 ? Wv.getUint16(gv) : vv > 0 ? Sv[gv] : 0)),
        hv = kv[Pv],
        pv = gv,
        dv = gv + vv - 3,
        lv = 0;
      if (hv && hv.bytes == vv) {
        for (; pv < dv;) {
          if (zv = Wv.getUint32(pv), zv != hv[lv++]) {
            pv = 1879048192;
            break
          }
          pv += 4
        }
        for (dv += 3; pv < dv;)
          if (zv = Sv[pv++], zv != hv[lv++]) {
            pv = 1879048192;
            break
          } if (pv === dv) return gv = pv, hv.string;
        dv -= 3, pv = gv
      }
      for (hv = [], kv[Pv] = hv, hv.bytes = vv; pv < dv;) zv = Wv.getUint32(pv), hv.push(zv), pv += 4;
      for (dv += 3; pv < dv;) zv = Sv[pv++], hv.push(zv);
      let Tv = vv < 16 ? Ev(vv) : Jv(vv);
      return hv.string = null != Tv ? Tv : Iv(vv)
    }

    function uv(vv) {
      if ("string" === typeof vv) return vv;
      if ("number" === typeof vv || "boolean" === typeof vv || "bigint" === typeof vv) return vv.toString();
      if (null == vv) return vv + "";
      if (sv.allowArraysInMapKeys && Array.isArray(vv) && vv.flat().every((vv => ["string", "number", "boolean", "bigint"].includes(typeof vv)))) return vv.flat().toString();
      throw new Error("Invalid property type for record: " + typeof vv)
    }
    const vz = (vv, zv) => {
      let Pv = Uv().map(uv),
        hv = vv;
      void 0 !== zv && (vv = vv < 32 ? -((zv << 5) + vv) : (zv << 5) + vv, Pv.highByte = zv);
      let Sv = dv[vv];
      return Sv && (Sv.isShared || nv) && ((dv.restoreStructures || (dv.restoreStructures = []))[vv] = Sv), dv[vv] = Pv, Pv.read = xv(Pv, hv), Pv.read()
    };
    cv[0] = () => {}, cv[0].noBuffer = !0, cv[66] = vv => {
      let zv = vv.length,
        Pv = BigInt(128 & vv[0] ? vv[0] - 256 : vv[0]);
      for (let hv = 1; hv < zv; hv++) Pv <<= BigInt(8), Pv += BigInt(vv[hv]);
      return Pv
    };
    let zz = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    cv[101] = () => {
      let vv = Uv();
      return (zz[vv[0]] || Error)(vv[1], {
        cause: vv[2]
      })
    }, cv[105] = vv => {
      if (!1 === sv.structuredClone) throw new Error("Structured clone extension is disabled");
      let zv = Wv.getUint32(gv - 4);
      Tv || (Tv = new Map);
      let Pv, hv = Sv[gv];
      Pv = hv >= 144 && hv < 160 || 220 == hv || 221 == hv ? [] : {};
      let ev = {
        target: Pv
      };
      Tv.set(zv, ev);
      let pv = Uv();
      return ev.used ? Object.assign(Pv, pv) : (ev.target = pv, pv)
    }, cv[112] = vv => {
      if (!1 === sv.structuredClone) throw new Error("Structured clone extension is disabled");
      let zv = Wv.getUint32(gv - 4),
        Pv = Tv.get(zv);
      return Pv.used = !0, Pv.target
    }, cv[115] = () => new Set(Uv());
    const Pz = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((vv => vv + "Array"));
    let hz = "object" === typeof globalThis ? globalThis : window;
    cv[116] = vv => {
      let zv = vv[0],
        Pv = Pz[zv];
      if (!Pv) {
        if (16 === zv) {
          let zv = new ArrayBuffer(vv.length - 1);
          return new Uint8Array(zv).set(vv.subarray(1)), zv
        }
        throw new Error("Could not find typed array for code " + zv)
      }
      return new hz[Pv](Uint8Array.prototype.slice.call(vv, 1).buffer)
    }, cv[120] = () => {
      let vv = Uv();
      return new RegExp(vv[0], vv[1])
    };
    const Sz = [];

    function ez(vv) {
      Yv && Yv();
      let zv = ev,
        Pv = gv,
        hv = av,
        pv = Cv,
        cv = iv,
        Gv = Nv,
        mv = wv,
        jv = Tv,
        fv = lv,
        Fv = new Uint8Array(Sv.slice(0, ev)),
        Ov = dv,
        Dv = dv.slice(0, dv.length),
        Kv = sv,
        Vv = nv,
        Uv = vv();
      return ev = zv, gv = Pv, av = hv, Cv = pv, iv = cv, Nv = Gv, wv = mv, Tv = jv, lv = fv, Sv = Fv, nv = Vv, (dv = Ov).splice(0, dv.length, ...Dv), sv = Kv, Wv = new DataView(Sv.buffer, Sv.byteOffset, Sv.byteLength), Uv
    }

    function gz() {
      Sv = null, Tv = null, dv = null
    }
    cv[98] = vv => {
      let zv = (vv[0] << 24) + (vv[1] << 16) + (vv[2] << 8) + vv[3],
        Pv = gv;
      return gv += zv - vv.length, lv = Sz, (lv = [ov(), ov()]).position0 = 0, lv.position1 = 0, lv.postBundlePosition = gv, gv = Pv, Uv()
    }, cv[255] = vv => 4 == vv.length ? new Date(1e3 * (16777216 * vv[0] + (vv[1] << 16) + (vv[2] << 8) + vv[3])) : 8 == vv.length ? new Date(((vv[0] << 22) + (vv[1] << 14) + (vv[2] << 6) + (vv[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & vv[3]) + 16777216 * vv[4] + (vv[5] << 16) + (vv[6] << 8) + vv[7])) : 12 == vv.length ? new Date(((vv[0] << 24) + (vv[1] << 16) + (vv[2] << 8) + vv[3]) / 1e6 + 1e3 * ((128 & vv[4] ? -281474976710656 : 0) + 1099511627776 * vv[6] + 4294967296 * vv[7] + 16777216 * vv[8] + (vv[9] << 16) + (vv[10] << 8) + vv[11])) : new Date("invalid");
    const pz = new Array(147);
    for (let SP = 0; SP < 256; SP++) pz[SP] = +("1e" + Math.floor(45.15 - .30103 * SP));
    const dz = Dv;
    var Nz = new Dv({
      useRecords: !1
    });
    const lz = Nz.unpack,
      Tz = Nz.unpackMultiple,
      Wz = Nz.unpack,
      wz = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let az, sz, Cz, iz = new Float32Array(1),
      cz = new Uint8Array(iz.buffer, 0, 4);

    function Gz(vv) {
      iz[0] = vv;
      let zv = pz[(127 & cz[3]) << 1 | cz[2] >> 7];
      return (zv * vv + (vv > 0 ? .5 : -.5) | 0) / zv
    }
    try {
      az = new TextEncoder
    } catch (hP) {}
    const mz = "undefined" !== typeof Buffer,
      jz = mz ? function(vv) {
        return Buffer.allocUnsafeSlow(vv)
      } : Uint8Array,
      fz = mz ? Buffer : Uint8Array,
      Fz = mz ? 4294967296 : 2144337920;
    let Yz, nz, Oz, Dz, Kz, Vz = 0,
      Uz = null;
    const Rz = /[\u0080-\uFFFF]/,
      xz = Symbol("record-id");
    class tz extends Dv {
      constructor(vv) {
        let zv, Pv, hv, Sv;
        super(vv), this.offset = 0;
        let ev = fz.prototype.utf8Write ? function(vv, zv) {
            return Yz.utf8Write(vv, zv, Yz.byteLength - zv)
          } : !(!az || !az.encodeInto) && function(vv, zv) {
            return az.encodeInto(vv, Yz.subarray(zv)).written
          },
          gv = this;
        vv || (vv = {});
        let pv = vv && vv.sequential,
          dv = vv.structures || vv.saveStructures,
          Nv = vv.maxSharedStructures;
        if (null == Nv && (Nv = dv ? 32 : 0), Nv > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        vv.structuredClone && void 0 == vv.moreTypes && (this.moreTypes = !0);
        let lv = vv.maxOwnStructures;
        null == lv && (lv = dv ? 32 : 64), this.structures || 0 == vv.useRecords || (this.structures = []);
        let Tv = Nv > 32 || lv + Nv > 64,
          Wv = Nv + 64,
          wv = Nv + lv + 64;
        if (wv > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let av = [],
          sv = 0,
          Cv = 0;
        this.pack = this.encode = function(vv, ev) {
          if (Yz || (Yz = new jz(8192), Oz = Yz.dataView || (Yz.dataView = new DataView(Yz.buffer, 0, 8192)), Vz = 0), Dz = Yz.length - 10, Dz - Vz < 2048 ? (Yz = new jz(Yz.length), Oz = Yz.dataView || (Yz.dataView = new DataView(Yz.buffer, 0, Yz.length)), Dz = Yz.length - 10, Vz = 0) : Vz = Vz + 7 & 2147483640, zv = Vz, ev & Xz && (Vz += 255 & ev), Sv = gv.structuredClone ? new Map : null, gv.bundleStrings && "string" !== typeof vv ? (Uz = [], Uz.size = 1 / 0) : Uz = null, hv = gv.structures, hv) {
            hv.uninitialized && (hv = gv._mergeStructures(gv.getStructures()));
            let vv = hv.sharedLength || 0;
            if (vv > Nv) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + hv.sharedLength);
            if (!hv.transitions) {
              hv.transitions = Object.create(null);
              for (let zv = 0; zv < vv; zv++) {
                let vv = hv[zv];
                if (!vv) continue;
                let Pv, Sv = hv.transitions;
                for (let zv = 0, hv = vv.length; zv < hv; zv++) {
                  let hv = vv[zv];
                  Pv = Sv[hv], Pv || (Pv = Sv[hv] = Object.create(null)), Sv = Pv
                }
                Sv[xz] = zv + 64
              }
              this.lastNamedStructuresLength = vv
            }
            pv || (hv.nextId = vv + 64)
          }
          let dv;
          Pv && (Pv = !1);
          try {
            gv.randomAccessStructure && vv && vv.constructor && vv.constructor === Object ? Dv(vv) : Gv(vv);
            let Pv = Uz;
            if (Uz && Zz(zv, Gv, 0), Sv && Sv.idsToInsert) {
              let vv = Sv.idsToInsert.sort(((vv, zv) => vv.offset > zv.offset ? 1 : -1)),
                hv = vv.length,
                ev = -1;
              for (; Pv && hv > 0;) {
                let Sv = vv[--hv].offset + zv;
                Sv < Pv.stringsPosition + zv && -1 === ev && (ev = 0), Sv > Pv.position + zv ? ev >= 0 && (ev += 6) : (ev >= 0 && (Oz.setUint32(Pv.position + zv, Oz.getUint32(Pv.position + zv) + ev), ev = -1), Pv = Pv.previous, hv++)
              }
              ev >= 0 && Pv && Oz.setUint32(Pv.position + zv, Oz.getUint32(Pv.position + zv) + ev), Vz += 6 * vv.length, Vz > Dz && Yv(Vz), gv.offset = Vz;
              let pv = function(vv, zv) {
                let Pv, hv = 6 * zv.length,
                  Sv = vv.length - hv;
                for (; Pv = zv.pop();) {
                  let zv = Pv.offset,
                    ev = Pv.id;
                  vv.copyWithin(zv + hv, zv, Sv), hv -= 6;
                  let gv = zv + hv;
                  vv[gv++] = 214, vv[gv++] = 105, vv[gv++] = ev >> 24, vv[gv++] = ev >> 16 & 255, vv[gv++] = ev >> 8 & 255, vv[gv++] = 255 & ev, Sv = zv
                }
                return vv
              }(Yz.subarray(zv, Vz), vv);
              return Sv = null, pv
            }
            return gv.offset = Vz, ev & rz ? (Yz.start = zv, Yz.end = Vz, Yz) : Yz.subarray(zv, Vz)
          } catch (hP) {
            throw dv = hP, hP
          } finally {
            if (hv && (iv(), Pv && gv.saveStructures)) {
              let Pv = hv.sharedLength || 0,
                Sv = Yz.subarray(zv, Vz),
                pv = Lz(hv, gv);
              if (!dv) return !1 === gv.saveStructures(pv, pv.isCompatible) ? gv.pack(vv, ev) : (gv.lastNamedStructuresLength = Pv, Yz.length > 1073741824 && (Yz = null), Sv)
            }
            Yz.length > 1073741824 && (Yz = null), ev & kz && (Vz = zv)
          }
        };
        const iv = () => {
            Cv < 10 && Cv++;
            let vv = hv.sharedLength || 0;
            if (hv.length > vv && !pv && (hv.length = vv), sv > 1e4) hv.transitions = null, Cv = 0, sv = 0, av.length > 0 && (av = []);
            else if (av.length > 0 && !pv) {
              for (let vv = 0, zv = av.length; vv < zv; vv++) av[vv][xz] = 0;
              av = []
            }
          },
          cv = vv => {
            var zv = vv.length;
            zv < 16 ? Yz[Vz++] = 144 | zv : zv < 65536 ? (Yz[Vz++] = 220, Yz[Vz++] = zv >> 8, Yz[Vz++] = 255 & zv) : (Yz[Vz++] = 221, Oz.setUint32(Vz, zv), Vz += 4);
            for (let Pv = 0; Pv < zv; Pv++) Gv(vv[Pv])
          },
          Gv = vv => {
            Vz > Dz && (Yz = Yv(Vz));
            var Pv, hv = typeof vv;
            if ("string" === hv) {
              let hv, Sv = vv.length;
              if (Uz && Sv >= 4 && Sv < 4096) {
                if ((Uz.size += Sv) > 21760) {
                  let vv, Pv, hv = (Uz[0] ? 3 * Uz[0].length + Uz[1].length : 0) + 10;
                  Vz + hv > Dz && (Yz = Yv(Vz + hv)), Uz.position ? (Pv = Uz, Yz[Vz] = 200, Vz += 3, Yz[Vz++] = 98, vv = Vz - zv, Vz += 4, Zz(zv, Gv, 0), Oz.setUint16(vv + zv - 3, Vz - zv - vv)) : (Yz[Vz++] = 214, Yz[Vz++] = 98, vv = Vz - zv, Vz += 4), Uz = ["", ""], Uz.previous = Pv, Uz.size = 0, Uz.position = vv
                }
                let Pv = Rz.test(vv);
                return Uz[Pv ? 0 : 1] += vv, Yz[Vz++] = 193, void Gv(Pv ? -Sv : Sv)
              }
              hv = Sv < 32 ? 1 : Sv < 256 ? 2 : Sv < 65536 ? 3 : 5;
              let gv = 3 * Sv;
              if (Vz + gv > Dz && (Yz = Yv(Vz + gv)), Sv < 64 || !ev) {
                let zv, ev, gv, pv = Vz + hv;
                for (zv = 0; zv < Sv; zv++) ev = vv.charCodeAt(zv), ev < 128 ? Yz[pv++] = ev : ev < 2048 ? (Yz[pv++] = ev >> 6 | 192, Yz[pv++] = 63 & ev | 128) : 55296 === (64512 & ev) && 56320 === (64512 & (gv = vv.charCodeAt(zv + 1))) ? (ev = 65536 + ((1023 & ev) << 10) + (1023 & gv), zv++, Yz[pv++] = ev >> 18 | 240, Yz[pv++] = ev >> 12 & 63 | 128, Yz[pv++] = ev >> 6 & 63 | 128, Yz[pv++] = 63 & ev | 128) : (Yz[pv++] = ev >> 12 | 224, Yz[pv++] = ev >> 6 & 63 | 128, Yz[pv++] = 63 & ev | 128);
                Pv = pv - Vz - hv
              } else Pv = ev(vv, Vz + hv);
              Pv < 32 ? Yz[Vz++] = 160 | Pv : Pv < 256 ? (hv < 2 && Yz.copyWithin(Vz + 2, Vz + 1, Vz + 1 + Pv), Yz[Vz++] = 217, Yz[Vz++] = Pv) : Pv < 65536 ? (hv < 3 && Yz.copyWithin(Vz + 3, Vz + 2, Vz + 2 + Pv), Yz[Vz++] = 218, Yz[Vz++] = Pv >> 8, Yz[Vz++] = 255 & Pv) : (hv < 5 && Yz.copyWithin(Vz + 5, Vz + 3, Vz + 3 + Pv), Yz[Vz++] = 219, Oz.setUint32(Vz, Pv), Vz += 4), Vz += Pv
            } else if ("number" === hv)
              if (vv >>> 0 === vv) vv < 32 || vv < 128 && !1 === this.useRecords || vv < 64 && !this.randomAccessStructure ? Yz[Vz++] = vv : vv < 256 ? (Yz[Vz++] = 204, Yz[Vz++] = vv) : vv < 65536 ? (Yz[Vz++] = 205, Yz[Vz++] = vv >> 8, Yz[Vz++] = 255 & vv) : (Yz[Vz++] = 206, Oz.setUint32(Vz, vv), Vz += 4);
              else if ((vv | 0) === vv) vv >= -32 ? Yz[Vz++] = 256 + vv : vv >= -128 ? (Yz[Vz++] = 208, Yz[Vz++] = vv + 256) : vv >= -32768 ? (Yz[Vz++] = 209, Oz.setInt16(Vz, vv), Vz += 2) : (Yz[Vz++] = 210, Oz.setInt32(Vz, vv), Vz += 4);
            else {
              let zv;
              if ((zv = this.useFloat32) > 0 && vv < 4294967296 && vv >= -2147483648) {
                let Pv;
                if (Yz[Vz++] = 202, Oz.setFloat32(Vz, vv), zv < 4 || ((Pv = vv * pz[(127 & Yz[Vz]) << 1 | Yz[Vz + 1] >> 7]) | 0) === Pv) return void(Vz += 4);
                Vz--
              }
              Yz[Vz++] = 203, Oz.setFloat64(Vz, vv), Vz += 8
            } else if ("object" === hv || "function" === hv)
              if (vv) {
                if (Sv) {
                  let Pv = Sv.get(vv);
                  if (Pv) {
                    if (!Pv.id) {
                      let vv = Sv.idsToInsert || (Sv.idsToInsert = []);
                      Pv.id = vv.push(Pv)
                    }
                    return Yz[Vz++] = 214, Yz[Vz++] = 112, Oz.setUint32(Vz, Pv.id), void(Vz += 4)
                  }
                  Sv.set(vv, {
                    offset: Vz - zv
                  })
                }
                let ev = vv.constructor;
                if (ev === Object) Fv(vv);
                else if (ev === Array) cv(vv);
                else if (ev === Map)
                  if (this.mapAsEmptyObject) Yz[Vz++] = 128;
                  else {
                    (Pv = vv.size) < 16 ? Yz[Vz++] = 128 | Pv : Pv < 65536 ? (Yz[Vz++] = 222, Yz[Vz++] = Pv >> 8, Yz[Vz++] = 255 & Pv) : (Yz[Vz++] = 223, Oz.setUint32(Vz, Pv), Vz += 4);
                    for (let [zv, Pv] of vv) Gv(zv), Gv(Pv)
                  }
                else {
                  for (let zv = 0, Pv = sz.length; zv < Pv; zv++) {
                    if (vv instanceof Cz[zv]) {
                      let Pv = sz[zv];
                      if (Pv.write) {
                        Pv.type && (Yz[Vz++] = 212, Yz[Vz++] = Pv.type, Yz[Vz++] = 0);
                        let zv = Pv.write.call(this, vv);
                        return void(zv === vv ? Array.isArray(vv) ? cv(vv) : Fv(vv) : Gv(zv))
                      }
                      let hv, Sv = Yz,
                        ev = Oz,
                        gv = Vz;
                      Yz = null;
                      try {
                        hv = Pv.pack.call(this, vv, (vv => (Yz = Sv, Sv = null, Vz += vv, Vz > Dz && Yv(Vz), {
                          target: Yz,
                          targetView: Oz,
                          position: Vz - vv
                        })), Gv)
                      } finally {
                        Sv && (Yz = Sv, Oz = ev, Vz = gv, Dz = Yz.length - 10)
                      }
                      return void(hv && (hv.length + Vz > Dz && Yv(hv.length + Vz), Vz = Qz(hv, Yz, Vz, Pv.type)))
                    }
                  }
                  if (Array.isArray(vv)) cv(vv);
                  else {
                    if (vv.toJSON) {
                      const zv = vv.toJSON();
                      if (zv !== vv) return Gv(zv)
                    }
                    if ("function" === hv) return Gv(this.writeFunction && this.writeFunction(vv));
                    Fv(vv)
                  }
                }
              } else Yz[Vz++] = 192;
            else if ("boolean" === hv) Yz[Vz++] = vv ? 195 : 194;
            else if ("bigint" === hv) {
              if (vv < BigInt(1) << BigInt(63) && vv >= -(BigInt(1) << BigInt(63))) Yz[Vz++] = 211, Oz.setBigInt64(Vz, vv);
              else if (vv < BigInt(1) << BigInt(64) && vv > 0) Yz[Vz++] = 207, Oz.setBigUint64(Vz, vv);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Gv(vv.toString());
                  if (this.useBigIntExtension && vv < BigInt(2) ** BigInt(1023) && vv > -(BigInt(2) ** BigInt(1023))) {
                    Yz[Vz++] = 199, Vz++, Yz[Vz++] = 66;
                    let zv, Pv = [];
                    do {
                      let hv = vv & BigInt(255);
                      zv = (hv & BigInt(128)) === (vv < BigInt(0) ? BigInt(128) : BigInt(0)), Pv.push(hv), vv >>= BigInt(8)
                    } while (vv !== BigInt(0) && vv !== BigInt(-1) || !zv);
                    Yz[Vz - 2] = Pv.length;
                    for (let vv = Pv.length; vv > 0;) Yz[Vz++] = Number(Pv[--vv]);
                    return
                  }
                  throw new RangeError(vv + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                Yz[Vz++] = 203, Oz.setFloat64(Vz, Number(vv))
              }
              Vz += 8
            } else {
              if ("undefined" !== hv) throw new Error("Unknown type: " + hv);
              this.encodeUndefinedAsNil ? Yz[Vz++] = 192 : (Yz[Vz++] = 212, Yz[Vz++] = 0, Yz[Vz++] = 0)
            }
          },
          mv = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? vv => {
            let zv;
            if (this.skipValues) {
              zv = [];
              for (let Pv in vv) "function" === typeof vv.hasOwnProperty && !vv.hasOwnProperty(Pv) || this.skipValues.includes(vv[Pv]) || zv.push(Pv)
            } else zv = Object.keys(vv);
            let Pv, hv = zv.length;
            if (hv < 16 ? Yz[Vz++] = 128 | hv : hv < 65536 ? (Yz[Vz++] = 222, Yz[Vz++] = hv >> 8, Yz[Vz++] = 255 & hv) : (Yz[Vz++] = 223, Oz.setUint32(Vz, hv), Vz += 4), this.coercibleKeyAsNumber)
              for (let Sv = 0; Sv < hv; Sv++) {
                Pv = zv[Sv];
                let hv = Number(Pv);
                Gv(isNaN(hv) ? Pv : hv), Gv(vv[Pv])
              } else
                for (let Sv = 0; Sv < hv; Sv++) Gv(Pv = zv[Sv]), Gv(vv[Pv])
          } : vv => {
            Yz[Vz++] = 222;
            let Pv = Vz - zv;
            Vz += 2;
            let hv = 0;
            for (let zv in vv)("function" !== typeof vv.hasOwnProperty || vv.hasOwnProperty(zv)) && (Gv(zv), Gv(vv[zv]), hv++);
            if (hv > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            Yz[Pv++ + zv] = hv >> 8, Yz[Pv + zv] = 255 & hv
          },
          jv = !1 === this.useRecords ? mv : vv.progressiveRecords && !Tv ? vv => {
            let Pv, Sv, ev = hv.transitions || (hv.transitions = Object.create(null)),
              gv = Vz++ - zv;
            for (let pv in vv)
              if ("function" !== typeof vv.hasOwnProperty || vv.hasOwnProperty(pv)) {
                if (Pv = ev[pv], Pv) ev = Pv;
                else {
                  let dv = Object.keys(vv),
                    Nv = ev;
                  ev = hv.transitions;
                  let lv = 0;
                  for (let vv = 0, zv = dv.length; vv < zv; vv++) {
                    let zv = dv[vv];
                    Pv = ev[zv], Pv || (Pv = ev[zv] = Object.create(null), lv++), ev = Pv
                  }
                  gv + zv + 1 == Vz ? (Vz--, nv(ev, dv, lv)) : Ov(ev, dv, gv, lv), Sv = !0, ev = Nv[pv]
                }
                Gv(vv[pv])
              } if (!Sv) {
              let Pv = ev[xz];
              Pv ? Yz[gv + zv] = Pv : Ov(ev, Object.keys(vv), gv, 0)
            }
          } : vv => {
            let zv, Pv = hv.transitions || (hv.transitions = Object.create(null)),
              Sv = 0;
            for (let hv in vv)("function" !== typeof vv.hasOwnProperty || vv.hasOwnProperty(hv)) && (zv = Pv[hv], zv || (zv = Pv[hv] = Object.create(null), Sv++), Pv = zv);
            let ev = Pv[xz];
            ev ? ev >= 96 && Tv ? (Yz[Vz++] = 96 + (31 & (ev -= 96)), Yz[Vz++] = ev >> 5) : Yz[Vz++] = ev : nv(Pv, Pv.__keys__ || Object.keys(vv), Sv);
            for (let hv in vv)("function" !== typeof vv.hasOwnProperty || vv.hasOwnProperty(hv)) && Gv(vv[hv])
          },
          fv = "function" == typeof this.useRecords && this.useRecords,
          Fv = fv ? vv => {
            fv(vv) ? jv(vv) : mv(vv)
          } : jv,
          Yv = vv => {
            let Pv;
            if (vv > 16777216) {
              if (vv - zv > Fz) throw new Error("Packed buffer would be larger than maximum buffer size");
              Pv = Math.min(Fz, 4096 * Math.round(Math.max((vv - zv) * (vv > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else Pv = 1 + (Math.max(vv - zv << 2, Yz.length - 1) >> 12) << 12;
            let hv = new jz(Pv);
            return Oz = hv.dataView || (hv.dataView = new DataView(hv.buffer, 0, Pv)), vv = Math.min(vv, Yz.length), Yz.copy ? Yz.copy(hv, 0, zv, vv) : hv.set(Yz.slice(zv, vv)), Vz -= zv, zv = 0, Dz = hv.length - 10, Yz = hv
          },
          nv = (vv, zv, Sv) => {
            let ev = hv.nextId;
            ev || (ev = 64), ev < Wv && this.shouldShareStructure && !this.shouldShareStructure(zv) ? (ev = hv.nextOwnId, ev < wv || (ev = Wv), hv.nextOwnId = ev + 1) : (ev >= wv && (ev = Wv), hv.nextId = ev + 1);
            let gv = zv.highByte = ev >= 96 && Tv ? ev - 96 >> 5 : -1;
            vv[xz] = ev, vv.__keys__ = zv, hv[ev - 64] = zv, ev < Wv ? (zv.isShared = !0, hv.sharedLength = ev - 63, Pv = !0, gv >= 0 ? (Yz[Vz++] = 96 + (31 & ev), Yz[Vz++] = gv) : Yz[Vz++] = ev) : (gv >= 0 ? (Yz[Vz++] = 213, Yz[Vz++] = 114, Yz[Vz++] = 96 + (31 & ev), Yz[Vz++] = gv) : (Yz[Vz++] = 212, Yz[Vz++] = 114, Yz[Vz++] = ev), Sv && (sv += Cv * Sv), av.length >= lv && (av.shift()[xz] = 0), av.push(vv), Gv(zv))
          },
          Ov = (vv, Pv, hv, Sv) => {
            let ev = Yz,
              gv = Vz,
              pv = Dz,
              dv = zv;
            Yz = nz, Vz = 0, zv = 0, Yz || (nz = Yz = new jz(8192)), Dz = Yz.length - 10, nv(vv, Pv, Sv), nz = Yz;
            let Nv = Vz;
            if (Yz = ev, Vz = gv, Dz = pv, zv = dv, Nv > 1) {
              let vv = Vz + Nv - 1;
              vv > Dz && Yv(vv);
              let Pv = hv + zv;
              Yz.copyWithin(Pv + Nv, Pv + 1, Vz), Yz.set(nz.slice(0, Nv), Pv), Vz = vv
            } else Yz[hv + zv] = nz[0]
          },
          Dv = vv => {
            let Sv = Kz(vv, Yz, zv, Vz, hv, Yv, ((vv, zv, hv) => {
              if (hv) return Pv = !0;
              Vz = zv;
              let Sv = Yz;
              return Gv(vv), iv(), Sv !== Yz ? {
                position: Vz,
                targetView: Oz,
                target: Yz
              } : Vz
            }), this);
            if (0 === Sv) return Fv(vv);
            Vz = Sv
          }
      }
      useBuffer(vv) {
        Yz = vv, Oz = Yz.dataView || (Yz.dataView = new DataView(Yz.buffer, Yz.byteOffset, Yz.byteLength)), Vz = 0
      }
      set position(vv) {
        Vz = vv
      }
      get position() {
        return Vz
      }
      set buffer(vv) {
        Yz = vv
      }
      get buffer() {
        return Yz
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function qz(vv, zv, Pv, hv) {
      let Sv = vv.byteLength;
      if (Sv + 1 < 256) {
        var {
          target: ev,
          position: gv
        } = Pv(4 + Sv);
        ev[gv++] = 199, ev[gv++] = Sv + 1
      } else if (Sv + 1 < 65536) {
        var {
          target: ev,
          position: gv
        } = Pv(5 + Sv);
        ev[gv++] = 200, ev[gv++] = Sv + 1 >> 8, ev[gv++] = Sv + 1 & 255
      } else {
        var {
          target: ev,
          position: gv,
          targetView: pv
        } = Pv(7 + Sv);
        ev[gv++] = 201, pv.setUint32(gv, Sv + 1), gv += 4
      }
      ev[gv++] = 116, ev[gv++] = zv, vv.buffer || (vv = new Uint8Array(vv)), ev.set(new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength), gv)
    }

    function Iz(vv, zv) {
      let Pv = vv.byteLength;
      var hv, Sv;
      if (Pv < 256) {
        var {
          target: hv,
          position: Sv
        } = zv(Pv + 2);
        hv[Sv++] = 196, hv[Sv++] = Pv
      } else if (Pv < 65536) {
        var {
          target: hv,
          position: Sv
        } = zv(Pv + 3);
        hv[Sv++] = 197, hv[Sv++] = Pv >> 8, hv[Sv++] = 255 & Pv
      } else {
        var {
          target: hv,
          position: Sv,
          targetView: ev
        } = zv(Pv + 5);
        hv[Sv++] = 198, ev.setUint32(Sv, Pv), Sv += 4
      }
      hv.set(vv, Sv)
    }

    function Qz(vv, zv, Pv, hv) {
      let Sv = vv.length;
      switch (Sv) {
        case 1:
          zv[Pv++] = 212;
          break;
        case 2:
          zv[Pv++] = 213;
          break;
        case 4:
          zv[Pv++] = 214;
          break;
        case 8:
          zv[Pv++] = 215;
          break;
        case 16:
          zv[Pv++] = 216;
          break;
        default:
          Sv < 256 ? (zv[Pv++] = 199, zv[Pv++] = Sv) : Sv < 65536 ? (zv[Pv++] = 200, zv[Pv++] = Sv >> 8, zv[Pv++] = 255 & Sv) : (zv[Pv++] = 201, zv[Pv++] = Sv >> 24, zv[Pv++] = Sv >> 16 & 255, zv[Pv++] = Sv >> 8 & 255, zv[Pv++] = 255 & Sv)
      }
      return zv[Pv++] = hv, zv.set(vv, Pv), Pv += Sv
    }

    function Zz(vv, zv, Pv) {
      if (Uz.length > 0) {
        Oz.setUint32(Uz.position + vv, Vz + Pv - Uz.position - vv), Uz.stringsPosition = Vz - vv;
        let hv = Uz;
        Uz = null, zv(hv[0]), zv(hv[1])
      }
    }

    function Az(vv) {
      if (vv.Class) {
        if (!vv.pack && !vv.write) throw new Error("Extension has no pack or write function");
        if (vv.pack && !vv.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        Cz.unshift(vv.Class), sz.unshift(vv)
      }! function(vv) {
        vv.unpack ? cv[vv.type] = vv.unpack : cv[vv.type] = vv
      }(vv)
    }

    function Lz(vv, zv) {
      return vv.isCompatible = vv => {
        let Pv = !vv || (zv.lastNamedStructuresLength || 0) === vv.length;
        return Pv || zv._mergeStructures(vv), Pv
      }, vv
    }
    Cz = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, mv], sz = [{
      pack(vv, zv, Pv) {
        let hv = vv.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === vv.getMilliseconds()) && hv >= 0 && hv < 4294967296) {
          let {
            target: vv,
            targetView: Pv,
            position: Sv
          } = zv(6);
          vv[Sv++] = 214, vv[Sv++] = 255, Pv.setUint32(Sv, hv)
        } else if (hv > 0 && hv < 4294967296) {
          let {
            target: Pv,
            targetView: Sv,
            position: ev
          } = zv(10);
          Pv[ev++] = 215, Pv[ev++] = 255, Sv.setUint32(ev, 4e6 * vv.getMilliseconds() + (hv / 1e3 / 4294967296 | 0)), Sv.setUint32(ev + 4, hv)
        } else if (isNaN(hv)) {
          if (this.onInvalidDate) return zv(0), Pv(this.onInvalidDate());
          let {
            target: vv,
            targetView: hv,
            position: Sv
          } = zv(3);
          vv[Sv++] = 212, vv[Sv++] = 255, vv[Sv++] = 255
        } else {
          let {
            target: Pv,
            targetView: Sv,
            position: ev
          } = zv(15);
          Pv[ev++] = 199, Pv[ev++] = 12, Pv[ev++] = 255, Sv.setUint32(ev, 1e6 * vv.getMilliseconds()), Sv.setBigInt64(ev + 4, BigInt(Math.floor(hv)))
        }
      }
    }, {
      pack(vv, zv, Pv) {
        if (this.setAsEmptyObject) return zv(0), Pv({});
        let hv = Array.from(vv),
          {
            target: Sv,
            position: ev
          } = zv(this.moreTypes ? 3 : 0);
        this.moreTypes && (Sv[ev++] = 212, Sv[ev++] = 115, Sv[ev++] = 0), Pv(hv)
      }
    }, {
      pack(vv, zv, Pv) {
        let {
          target: hv,
          position: Sv
        } = zv(this.moreTypes ? 3 : 0);
        this.moreTypes && (hv[Sv++] = 212, hv[Sv++] = 101, hv[Sv++] = 0), Pv([vv.name, vv.message, vv.cause])
      }
    }, {
      pack(vv, zv, Pv) {
        let {
          target: hv,
          position: Sv
        } = zv(this.moreTypes ? 3 : 0);
        this.moreTypes && (hv[Sv++] = 212, hv[Sv++] = 120, hv[Sv++] = 0), Pv([vv.source, vv.flags])
      }
    }, {
      pack(vv, zv) {
        this.moreTypes ? qz(vv, 16, zv) : Iz(mz ? Buffer.from(vv) : new Uint8Array(vv), zv)
      }
    }, {
      pack(vv, zv) {
        let Pv = vv.constructor;
        Pv !== fz && this.moreTypes ? qz(vv, Pz.indexOf(Pv.name), zv) : Iz(vv, zv)
      }
    }, {
      pack(vv, zv) {
        let {
          target: Pv,
          position: hv
        } = zv(1);
        Pv[hv] = 193
      }
    }];
    let Hz = new tz({
      useRecords: !1
    });
    const Mz = Hz.pack,
      yz = Hz.pack,
      Bz = tz,
      {
        NEVER: Jz,
        ALWAYS: Ez,
        DECIMAL_ROUND: oz,
        DECIMAL_FIT: bz
      } = wz,
      rz = 512,
      kz = 1024,
      Xz = 2048;
    const uz = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!vv || "object" !== typeof vv) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const Pv = new Dv(zv);
        let hv;
        const Sv = vv => {
          let zv;
          hv && (vv = Buffer.concat([hv, vv]), hv = void 0);
          try {
            zv = Pv.unpackMultiple(vv)
          } catch (Sv) {
            if (!Sv.incomplete) throw Sv;
            hv = vv.slice(Sv.lastPosition), zv = Sv.values
          }
          return zv
        };
        return "function" === typeof vv[Symbol.iterator] ? function*() {
          for (const zv of vv) yield* Sv(zv)
        }() : "function" === typeof vv[Symbol.asyncIterator] ? async function*() {
          for await (const zv of vv) yield* Sv(zv)
        }(): void 0
      },
      vP = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (vv && "object" === typeof vv) {
          if ("function" === typeof vv[Symbol.iterator]) return function*(vv, zv) {
            const Pv = new tz(zv);
            for (const hv of vv) yield Pv.pack(hv)
          }(vv, zv);
          if ("function" === typeof vv.then || "function" === typeof vv[Symbol.asyncIterator]) return async function*(vv, zv) {
            const Pv = new tz(zv);
            for await (const hv of vv) yield Pv.pack(hv)
          }(vv, zv);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      zP = !1,
      PP = !0
  },
  8772: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      $changes: () => sv,
      $childType: () => Cv,
      $decoder: () => lv,
      $deleteByIndex: () => wv,
      $encoder: () => Nv,
      $filter: () => Tv,
      $getByIndex: () => Wv,
      $numFields: () => Ov,
      $refId: () => pv,
      $track: () => dv,
      $values: () => jv,
      ArraySchema: () => Ph,
      Callbacks: () => PS,
      ChangeTree: () => VP,
      CollectionSchema: () => eh,
      Decoder: () => oh,
      Encoder: () => yh,
      FieldBuilder: () => dh,
      MapSchema: () => Sh,
      Metadata: () => oz,
      OPERATION: () => Sv,
      Reflection: () => Xh,
      ReflectionField: () => rh,
      ReflectionType: () => kh,
      Root: () => Uh,
      Schema: () => Kh,
      SetSchema: () => gh,
      StateCallbackStrategy: () => zS,
      StateView: () => Ih,
      StreamSchema: () => ph,
      TypeContext: () => Lz,
      createPool: () => SS,
      decode: () => Gz,
      decodeKeyValueOperation: () => rP,
      decodeSchemaOperation: () => bP,
      defineCustomTypes: () => Fz,
      defineTypes: () => nh,
      deprecated: () => Fh,
      dumpChanges: () => Dh,
      encode: () => zz,
      encodeArray: () => ZP,
      encodeIndexedEntry: () => IP,
      encodeKeyValueOperation: () => QP,
      encodeMapEntry: () => qP,
      encodeSchemaOperation: () => tP,
      Xw: () => sh,
      fullStateOnly: () => Gh,
      getDecoderStateCallbacks: () => uh,
      getEncodeDescriptor: () => vP,
      getRawChangesCallback: () => vS,
      isBuilder: () => Nh,
      patchOnly: () => ch,
      registerType: () => fz,
      schema: () => Oh,
      t: () => wh,
      type: () => mh,
      unreliable: () => ih,
      view: () => Ch
    });
    const hv = 255;
    var Sv;

    function ev(vv) {
      Object.defineProperty(vv, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(vv) {
      vv[vv.ADD = 128] = "ADD", vv[vv.REPLACE = 0] = "REPLACE", vv[vv.DELETE = 64] = "DELETE", vv[vv.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", vv[vv.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", vv[vv.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", vv[vv.CLEAR = 10] = "CLEAR", vv[vv.REVERSE = 15] = "REVERSE", vv[vv.MOVE = 32] = "MOVE", vv[vv.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", vv[vv.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Sv || (Sv = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const gv = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const vv = "colyseus.symbolRegistry",
        zv = gv[vv] || (gv[vv] = Object.create(null));
      Symbol.for = function(vv) {
        return zv[vv] || (zv[vv] = Symbol(vv))
      }, Symbol.keyFor = function(vv) {
        for (const Pv in zv)
          if (zv[Pv] === vv) return Pv
      }
    }
    const pv = Symbol.for("$refId"),
      dv = "~track",
      Nv = "~encoder",
      lv = "~decoder",
      Tv = "~filter",
      Wv = "~getByIndex",
      wv = "~deleteByIndex",
      av = "~resyncPrune",
      sv = Symbol.for("$changes"),
      Cv = Symbol.for("$childType"),
      iv = Symbol.for("$proxyTarget"),
      cv = "~onEncodeEnd",
      Gv = "~reset",
      mv = "~onDecodeEnd",
      jv = Symbol.for("$values"),
      fv = "~builder",
      Fv = "~descriptors",
      Yv = "~__encodeDescriptor",
      nv = "~encoders",
      Ov = "~__numFields",
      Dv = "~__refTypeFieldIndexes",
      Kv = "~__viewFieldIndexes",
      Vv = "$__fieldIndexesByViewTag",
      Uv = "~__unreliableFieldIndexes",
      Rv = "~__patchOnlyFieldIndexes",
      xv = "~__fullSyncSkipIndexes",
      tv = "~__fullStateOnlyFieldIndexes",
      qv = "~__streamFieldIndexes",
      Iv = "~__streamPriorities";
    let Qv;
    try {
      Qv = new TextEncoder
    } catch (eS) {}
    const Zv = new ArrayBuffer(8),
      Av = new Int32Array(Zv),
      Lv = new Float32Array(Zv),
      Hv = new Float64Array(Zv),
      Mv = new BigInt64Array(Zv),
      yv = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(vv, zv) {
        for (var Pv = 0, hv = 0, Sv = 0, ev = vv.length; Sv < ev; Sv++)(Pv = vv.charCodeAt(Sv)) < 128 ? hv += 1 : Pv < 2048 ? hv += 2 : Pv < 55296 || Pv >= 57344 ? hv += 3 : (Sv++, hv += 4);
        return hv
      };

    function Bv(vv, zv, Pv) {
      for (var hv = 0, Sv = 0, ev = zv.length; Sv < ev; Sv++)(hv = zv.charCodeAt(Sv)) < 128 ? vv[Pv.offset++] = hv : hv < 2048 ? (vv[Pv.offset] = 192 | hv >> 6, vv[Pv.offset + 1] = 128 | 63 & hv, Pv.offset += 2) : hv < 55296 || hv >= 57344 ? (vv[Pv.offset] = 224 | hv >> 12, vv[Pv.offset + 1] = 128 | hv >> 6 & 63, vv[Pv.offset + 2] = 128 | 63 & hv, Pv.offset += 3) : (Sv++, hv = 65536 + ((1023 & hv) << 10 | 1023 & zv.charCodeAt(Sv)), vv[Pv.offset] = 240 | hv >> 18, vv[Pv.offset + 1] = 128 | hv >> 12 & 63, vv[Pv.offset + 2] = 128 | hv >> 6 & 63, vv[Pv.offset + 3] = 128 | 63 & hv, Pv.offset += 4)
    }

    function Jv(vv, zv, Pv) {
      vv[Pv.offset++] = 255 & zv
    }

    function Ev(vv, zv, Pv) {
      vv[Pv.offset++] = 255 & zv, vv[Pv.offset++] = zv >> 8 & 255
    }

    function ov(vv, zv, Pv) {
      vv[Pv.offset++] = 255 & zv, vv[Pv.offset++] = zv >> 8 & 255
    }

    function bv(vv, zv, Pv) {
      vv[Pv.offset++] = 255 & zv, vv[Pv.offset++] = zv >> 8 & 255, vv[Pv.offset++] = zv >> 16 & 255, vv[Pv.offset++] = zv >> 24 & 255
    }

    function rv(vv, zv, Pv) {
      const hv = zv >> 24,
        Sv = zv >> 16,
        ev = zv >> 8,
        gv = zv;
      vv[Pv.offset++] = 255 & gv, vv[Pv.offset++] = 255 & ev, vv[Pv.offset++] = 255 & Sv, vv[Pv.offset++] = 255 & hv
    }

    function kv(vv, zv, Pv) {
      const hv = Math.floor(zv / Math.pow(2, 32));
      rv(vv, zv >>> 0, Pv), rv(vv, hv, Pv)
    }

    function Xv(vv, zv, Pv) {
      const hv = zv / Math.pow(2, 32) | 0;
      rv(vv, zv >>> 0, Pv), rv(vv, hv, Pv)
    }

    function uv(vv, zv, Pv) {
      Lv[0] = zv, bv(vv, Av[0], Pv)
    }

    function vz(vv, zv, Pv) {
      Hv[0] = zv, bv(vv, Av[0], Pv), bv(vv, Av[1], Pv)
    }
    const zz = {
        int8: Jv,
        uint8: function(vv, zv, Pv) {
          vv[Pv.offset++] = 255 & zv
        },
        int16: Ev,
        uint16: ov,
        int32: bv,
        uint32: rv,
        int64: kv,
        uint64: Xv,
        bigint64: function(vv, zv, Pv) {
          Mv[0] = BigInt.asIntN(64, zv), bv(vv, Av[0], Pv), bv(vv, Av[1], Pv)
        },
        biguint64: function(vv, zv, Pv) {
          Mv[0] = BigInt.asIntN(64, zv), bv(vv, Av[0], Pv), bv(vv, Av[1], Pv)
        },
        float32: uv,
        float64: vz,
        boolean: function(vv, zv, Pv) {
          vv[Pv.offset++] = zv ? 1 : 0
        },
        string: function(vv, zv, Pv) {
          zv || (zv = "");
          let hv = yv(zv, "utf8"),
            Sv = 0;
          if (hv < 32) vv[Pv.offset++] = 160 | hv, Sv = 1;
          else if (hv < 256) vv[Pv.offset++] = 217, vv[Pv.offset++] = hv, Sv = 2;
          else if (hv < 65536) vv[Pv.offset++] = 218, ov(vv, hv, Pv), Sv = 3;
          else {
            if (!(hv < 4294967296)) throw new Error("String too long");
            vv[Pv.offset++] = 219, rv(vv, hv, Pv), Sv = 5
          }
          return Bv(vv, zv, Pv), Sv + hv
        },
        number: function vv(zv, Pv, hv) {
          return isNaN(Pv) ? vv(zv, 0, hv) : isFinite(Pv) ? Pv !== (0 | Pv) ? Math.abs(Pv) <= 34028235e31 && (Lv[0] = Pv, Math.abs(Math.abs(Lv[0]) - Math.abs(Pv)) < 1e-4) ? (zv[hv.offset++] = 202, uv(zv, Pv, hv), 5) : (zv[hv.offset++] = 203, vz(zv, Pv, hv), 9) : Pv >= 0 ? Pv < 128 ? (zv[hv.offset++] = 255 & Pv, 1) : Pv < 256 ? (zv[hv.offset++] = 204, zv[hv.offset++] = 255 & Pv, 2) : Pv < 65536 ? (zv[hv.offset++] = 205, ov(zv, Pv, hv), 3) : Pv < 4294967296 ? (zv[hv.offset++] = 206, rv(zv, Pv, hv), 5) : (zv[hv.offset++] = 207, Xv(zv, Pv, hv), 9) : Pv >= -32 ? (zv[hv.offset++] = 224 | Pv + 32, 1) : Pv >= -128 ? (zv[hv.offset++] = 208, Jv(zv, Pv, hv), 2) : Pv >= -32768 ? (zv[hv.offset++] = 209, Ev(zv, Pv, hv), 3) : Pv >= -2147483648 ? (zv[hv.offset++] = 210, bv(zv, Pv, hv), 5) : (zv[hv.offset++] = 211, kv(zv, Pv, hv), 9) : vv(zv, Pv > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, hv)
        },
        utf8Write: Bv,
        utf8Length: yv
      },
      Pz = new ArrayBuffer(8),
      hz = new Int32Array(Pz),
      Sz = new Float32Array(Pz),
      ez = new Float64Array(Pz),
      gz = new BigUint64Array(Pz),
      pz = new BigInt64Array(Pz);

    function dz(vv, zv, Pv) {
      Pv > vv.length - zv.offset && (Pv = vv.length - zv.offset);
      for (var hv = "", Sv = 0, ev = zv.offset, gv = zv.offset + Pv; ev < gv; ev++) {
        var pv = vv[ev];
        if (0 !== (128 & pv))
          if (192 !== (224 & pv))
            if (224 !== (240 & pv)) {
              if (240 !== (248 & pv)) {
                console.error("decode.utf8Read(): Invalid byte " + pv + " at offset " + ev + ". Skip to end of string: " + (zv.offset + Pv));
                break
              }(Sv = (7 & pv) << 18 | (63 & vv[++ev]) << 12 | (63 & vv[++ev]) << 6 | 63 & vv[++ev]) >= 65536 ? (Sv -= 65536, hv += String.fromCharCode(55296 + (Sv >>> 10), 56320 + (1023 & Sv))) : hv += String.fromCharCode(Sv)
            } else hv += String.fromCharCode((15 & pv) << 12 | (63 & vv[++ev]) << 6 | 63 & vv[++ev]);
        else hv += String.fromCharCode((31 & pv) << 6 | 63 & vv[++ev]);
        else hv += String.fromCharCode(pv)
      }
      return zv.offset += Pv, hv
    }

    function Nz(vv, zv) {
      return lz(vv, zv) << 24 >> 24
    }

    function lz(vv, zv) {
      return vv[zv.offset++]
    }

    function Tz(vv, zv) {
      return Wz(vv, zv) << 16 >> 16
    }

    function Wz(vv, zv) {
      return vv[zv.offset++] | vv[zv.offset++] << 8
    }

    function wz(vv, zv) {
      return vv[zv.offset++] | vv[zv.offset++] << 8 | vv[zv.offset++] << 16 | vv[zv.offset++] << 24
    }

    function az(vv, zv) {
      return wz(vv, zv) >>> 0
    }

    function sz(vv, zv) {
      return hz[0] = wz(vv, zv), Sz[0]
    }

    function Cz(vv, zv) {
      return hz[0] = wz(vv, zv), hz[1] = wz(vv, zv), ez[0]
    }

    function iz(vv, zv) {
      const Pv = az(vv, zv);
      return wz(vv, zv) * Math.pow(2, 32) + Pv
    }

    function cz(vv, zv) {
      const Pv = az(vv, zv);
      return az(vv, zv) * Math.pow(2, 32) + Pv
    }
    const Gz = {
        utf8Read: dz,
        int8: Nz,
        uint8: lz,
        int16: Tz,
        uint16: Wz,
        int32: wz,
        uint32: az,
        float32: sz,
        float64: Cz,
        int64: iz,
        uint64: cz,
        bigint64: function(vv, zv) {
          return hz[0] = wz(vv, zv), hz[1] = wz(vv, zv), pz[0]
        },
        biguint64: function(vv, zv) {
          return hz[0] = wz(vv, zv), hz[1] = wz(vv, zv), gz[0]
        },
        boolean: function(vv, zv) {
          return lz(vv, zv) > 0
        },
        string: function(vv, zv) {
          const Pv = vv[zv.offset++];
          let hv;
          return Pv < 192 ? hv = 31 & Pv : 217 === Pv ? hv = lz(vv, zv) : 218 === Pv ? hv = Wz(vv, zv) : 219 === Pv && (hv = az(vv, zv)), dz(vv, zv, hv)
        },
        number: function(vv, zv) {
          const Pv = vv[zv.offset++];
          return Pv < 128 ? Pv : 202 === Pv ? sz(vv, zv) : 203 === Pv ? Cz(vv, zv) : 204 === Pv ? lz(vv, zv) : 205 === Pv ? Wz(vv, zv) : 206 === Pv ? az(vv, zv) : 207 === Pv ? cz(vv, zv) : 208 === Pv ? Nz(vv, zv) : 209 === Pv ? Tz(vv, zv) : 210 === Pv ? wz(vv, zv) : 211 === Pv ? iz(vv, zv) : Pv > 223 ? -1 * (255 - Pv + 1) : void 0
        },
        stringCheck: function(vv, zv) {
          const Pv = vv[zv.offset];
          return Pv < 192 && Pv > 160 || 217 === Pv || 218 === Pv || 219 === Pv
        }
      },
      mz = {},
      jz = new Map;

    function fz(vv, zv) {
      zv.constructor && (Object.prototype.hasOwnProperty.call(zv, "constructor") && null == zv.constructor[Symbol.metadata] && ev(zv.constructor), jz.set(zv.constructor, vv), mz[vv] = zv), zv.encode && (zz[vv] = zv.encode), zv.decode && (Gz[vv] = zv.decode)
    }

    function Fz(vv) {
      for (const zv in vv) fz(zv, vv[zv]);
      return vv => mh(vv)
    }
    const Yz = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function nz() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Oz(vv) {
      return vv._stream ??= nz()
    }

    function Dz(vv, zv, Pv) {
      0 === zv.activeViews.size && Oz(vv).broadcastPending.add(Pv)
    }

    function Kz(vv, zv, Pv, hv) {
      const ev = vv._stream;
      if (void 0 === ev) return !0;
      let gv = !1;
      return ev.broadcastPending.delete(hv) ? gv = !0 : ev.sentBroadcast.delete(hv) && ev.broadcastDeletes.add(hv), zv.forEachActiveView((vv => {
        const zv = ev.pendingByView.get(vv.id);
        if (zv?.has(hv)) return zv.delete(hv), void(gv = !0);
        const pv = ev.sentByView.get(vv.id);
        if (pv?.has(hv)) {
          pv.delete(hv);
          let zv = vv.changes.get(Pv);
          void 0 === zv && (zv = new Map, vv.changes.set(Pv, zv)), zv.set(hv, Sv.DELETE)
        }
      })), gv
    }

    function Vz(vv, zv) {
      const Pv = vv._stream?.pendingByView;
      if (void 0 === Pv) return !1;
      for (const [hv, Sv] of Pv)
        if (Sv.size > 0 && void 0 !== zv.activeViews.get(hv)?.deref()) return !0;
      return !1
    }

    function Uz(vv) {
      const zv = vv._stream;
      return void 0 !== zv && (zv.broadcastPending.size > 0 || zv.broadcastDeletes.size > 0)
    }

    function Rz(vv, zv, Pv) {
      const hv = Oz(vv);
      let Sv = hv.pendingByView.get(zv);
      void 0 === Sv && (Sv = new Set, hv.pendingByView.set(zv, Sv)), Sv.add(Pv)
    }

    function xz(vv, zv) {
      const Pv = vv._stream;
      void 0 !== Pv && (Pv.pendingByView.delete(zv), Pv.sentByView.delete(zv), Pv.priorityByView?.delete(zv))
    }
    const tz = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function qz(vv) {
      if (null == vv || "object" !== typeof vv) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: zv,
        max: Pv
      } = vv;
      if ("number" !== typeof zv || "number" !== typeof Pv || !(Pv > zv) || !Number.isFinite(zv) || !Number.isFinite(Pv)) throw new Error(`t.quantized(): require finite min < max (got min=${zv}, max=${Pv}).`);
      const hv = vv.bits ?? 16;
      if (8 !== hv && 16 !== hv && 32 !== hv) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${hv}).`);
      const Sv = vv.mode ?? "clamp";
      if ("clamp" !== Sv && "wrap" !== Sv) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Sv)}).`);
      const ev = "wrap" === Sv,
        gv = Math.pow(2, hv);
      return {
        min: zv,
        max: Pv,
        bits: hv,
        wrap: ev,
        wire: tz[hv],
        range: Pv - zv,
        span: ev ? gv : zv === -Pv ? gv - 2 : gv - 1
      }
    }

    function Iz(vv) {
      return null !== vv && "object" === typeof vv && void 0 !== vv.quantized
    }

    function Qz(vv, zv) {
      if (vv.wrap) {
        if (!Number.isFinite(zv)) return 0;
        const Pv = vv.range;
        let hv = (zv - vv.min) % Pv;
        hv < 0 && (hv += Pv);
        const Sv = vv.span;
        return Math.floor(hv / Pv * Sv + .5) % Sv
      }
      if (zv !== zv) return 0;
      const Pv = zv < vv.min ? vv.min : zv > vv.max ? vv.max : zv;
      return Math.floor((Pv - vv.min) / vv.range * vv.span + .5)
    }

    function Zz(vv, zv) {
      return vv.min + zv / vv.span * vv.range
    }

    function Az(vv) {
      const zv = zz[vv.wire];
      return (Pv, hv, Sv) => zv(Pv, Qz(vv, hv), Sv)
    }
    class Lz {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(vv) {
        const zv = Object.getPrototypeOf(vv);
        if (zv !== Kh) {
          let Pv = Lz.inheritedTypes.get(zv);
          Pv || (Pv = new Set, Lz.inheritedTypes.set(zv, Pv)), Pv.add(vv)
        }
      }
      static cache(vv) {
        let zv = Lz.cachedContexts.get(vv);
        return zv || (zv = new Lz(vv), Lz.cachedContexts.set(vv, zv)), zv
      }
      constructor(vv) {
        vv && this.discoverTypes(vv)
      }
      has(vv) {
        return this.schemas.has(vv)
      }
      get(vv) {
        return this.types[vv]
      }
      add(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(vv) && (this.types[zv] = vv, null == vv[Symbol.metadata] && oz.initialize(vv), this.schemas.set(vv, zv), !0)
      }
      getTypeId(vv) {
        return this.schemas.get(vv)
      }
      discoverTypes(vv) {
        if (!this.add(vv)) return;
        Lz.inheritedTypes.get(vv)?.forEach((vv => {
          this.discoverTypes(vv)
        }));
        let zv = vv;
        for (;
          (zv = Object.getPrototypeOf(zv)) && zv !== Kh && zv !== Function.prototype;) this.discoverTypes(zv);
        const Pv = vv[Symbol.metadata];
        (Pv[Kv] || Pv[qv]) && (this.hasFilters = !0);
        for (const hv in Pv) {
          const vv = Pv[hv].type;
          if ("string" !== typeof vv && !Iz(vv))
            if ("function" === typeof vv) this.discoverTypes(vv);
            else {
              const zv = Object.values(vv)[0];
              if ("string" === typeof zv) continue;
              this.discoverTypes(zv)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Hz(vv) {
      const zv = yz(vv);
      return zv ? {
        complexTypeKlass: mz[zv],
        childType: vv[zv]
      } : {
        complexTypeKlass: !1,
        childType: vv
      }
    }

    function Mz(vv, zv) {
      const Pv = Bz(vv),
        hv = yz(Pv),
        Sv = hv && yz(Pv[hv]);
      if (Sv) throw new Error(`${zv?`${zv}: `:""}@colyseus/schema: nested collections are not supported ("${hv}" of "${Sv}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Sv} in a Schema class.`);
      return Pv
    }

    function yz(vv) {
      return "object" === typeof vv && null !== vv ? Object.keys(vv).find((vv => void 0 !== mz[vv])) : void 0
    }

    function Bz(vv) {
      if ("object" !== typeof vv || null === vv) return vv;
      if (Array.isArray(vv)) return {
        array: Bz(vv[0])
      };
      const zv = function(vv) {
        const zv = Object.keys(vv),
          Pv = zv.filter((vv => /\d+/.test(vv)));
        if (Pv.length > 0 && Pv.length === zv.length / 2 && vv[vv[Pv[0]]] == Pv[0]) return "number";
        if (zv.length > 0 && zv.every((zv => vv[zv] === zv))) return "string"
      }(vv);
      if (zv) return zv;
      if (Iz(vv)) return "string" === typeof vv.quantized.wire ? vv : {
        quantized: qz(vv.quantized)
      };
      if (void 0 !== vv.type) return Bz(vv.type);
      const Pv = yz(vv);
      return Pv && (vv[Pv] = Bz(vv[Pv])), vv
    }
    const Jz = [Dv, Uv, Rv, xv, tv, qv, nv];

    function Ez(vv, zv, Pv) {
      vv[zv] || Object.defineProperty(vv, zv, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), vv[zv].push(Pv)
    }
    const oz = {
        addField(vv, zv, Pv, hv, Sv) {
          if (zv >= 63) throw new Error(`Can't define field '${Pv}'.\nSchema instances may only have up to 63 fields.`);
          vv[zv] = Object.assign(vv[zv] || {}, {
            type: hv,
            index: zv,
            name: Pv
          }), Object.defineProperty(vv, Fv, {
            value: vv[Fv] || {},
            enumerable: !1,
            configurable: !0
          }), vv[Fv][Pv] = Sv || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(vv, Ov, {
            value: zv,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(vv, Pv, {
            value: zv,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof vv[zv].type || Iz(vv[zv].type) || (void 0 === vv[Dv] && Object.defineProperty(vv, Dv, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), vv[Dv].push(zv));
          const ev = vv[zv].type;
          if (ev && "object" === typeof ev && void 0 !== ev.stream) {
            if (void 0 !== ev.array) throw new Error(Yz);
            vv[zv].stream = !0, vv[qv] || Object.defineProperty(vv, qv, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), vv[qv].includes(zv) || vv[qv].push(zv);
            const Sv = hv?.priority;
            "function" === typeof Sv && oz.setStreamPriority(vv, Pv, Sv)
          }
        },
        setTag(vv, zv, Pv) {
          const hv = vv[zv];
          if (vv[hv].tag = Pv, vv[Kv] || (Object.defineProperty(vv, Kv, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(vv, Vv, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), vv[Kv].push(hv), Pv < 0) vv[Vv][Pv] || (vv[Vv][Pv] = []), vv[Vv][Pv].push(hv);
          else
            for (let Sv = Pv; Sv > 0; Sv &= Sv - 1) {
              const zv = Sv & -Sv;
              vv[Vv][zv] || (vv[Vv][zv] = []), vv[Vv][zv].push(hv)
            }
        },
        setUnreliable(vv, zv) {
          const Pv = vv[zv];
          if ("string" !== typeof vv[Pv].type) throw new Error(`@unreliable cannot be applied to ref-type field "${zv}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          vv[Pv].unreliable = !0, vv[Uv] || Object.defineProperty(vv, Uv, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), vv[Uv].push(Pv)
        },
        setPatchOnly(vv, zv) {
          const Pv = vv[zv];
          if (vv[Pv].fullStateOnly) throw new Error(`field "${zv}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          vv[Pv].patchOnly = !0, Ez(vv, Rv, Pv), Ez(vv, xv, Pv)
        },
        setDeprecated(vv, zv) {
          const Pv = vv[zv];
          vv[Pv].deprecated = !0, Ez(vv, xv, Pv), Object.defineProperty(vv, Pv, {
            value: vv[Pv],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(vv, zv) {
          const Pv = vv[zv];
          if (vv[Pv].patchOnly) throw new Error(`field "${zv}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          vv[Pv].fullStateOnly = !0, Ez(vv, tv, Pv)
        },
        setStream(vv, zv) {
          const Pv = vv[zv];
          vv[Pv].stream = !0, vv[qv] || Object.defineProperty(vv, qv, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), vv[qv].push(Pv)
        },
        setStreamPriority(vv, zv, Pv) {
          const hv = vv[zv];
          vv[Iv] || Object.defineProperty(vv, Iv, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), vv[Iv][hv] = Pv
        },
        getStreamPriority: (vv, zv) => vv?.[Iv]?.[zv],
        defineField(vv, zv, Pv, hv, Sv) {
          const ev = Mz(Sv, `${vv.name}.${hv}`),
            {
              complexTypeKlass: gv,
              childType: pv
            } = Hz(ev);
          oz.addField(zv, Pv, hv, ev, fh(hv, Pv, pv, gv)), zv[Fv][hv] && Object.defineProperty(vv.prototype, hv, zv[Fv][hv]), ("string" === typeof ev || Iz(ev)) && (zv[nv] || Object.defineProperty(zv, nv, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), zv[nv][Pv] = "string" === typeof ev ? zz[ev] : Az(ev.quantized))
        },
        setFields(vv, zv) {
          const Pv = vv.prototype.constructor;
          Lz.register(Pv);
          const hv = Object.getPrototypeOf(Pv),
            Sv = hv && hv[Symbol.metadata],
            ev = oz.initialize(Pv);
          Pv[dv] || (Pv[dv] = Kh[dv]), Pv[Nv] || (Pv[Nv] = Kh[Nv]), Pv[lv] || (Pv[lv] = Kh[lv]), Pv.prototype.toJSON || (Pv.prototype.toJSON = Kh.prototype.toJSON);
          let gv = ev[Ov] ?? (Sv && Sv[Ov]) ?? -1;
          gv++, ev[nv] || Object.defineProperty(ev, nv, {
            value: Sv?.[nv] ? [...Sv[nv]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const pv in zv) {
            if (void 0 !== ev[pv]) throw new Error(`@colyseus/schema: Duplicate '${pv}' definition on '${Pv.name||"(anonymous)"}'.`);
            oz.defineField(Pv, ev, gv, pv, zv[pv]), gv++
          }
          return vv
        },
        isDeprecated: (vv, zv) => !0 === vv[zv].deprecated,
        initialize(vv) {
          const zv = Object.getPrototypeOf(vv),
            Pv = zv[Symbol.metadata];
          let hv = vv[Symbol.metadata] ?? Object.create(null);
          if (zv !== Kh && hv === Pv && (hv = Object.create(null), Pv)) {
            Object.setPrototypeOf(hv, Pv), Object.defineProperty(hv, Ov, {
              value: Pv[Ov],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== Pv[Kv] && (Object.defineProperty(hv, Kv, {
              value: [...Pv[Kv]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(hv, Vv, {
              value: {
                ...Pv[Vv]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const vv of Jz) {
              const zv = Pv[vv];
              void 0 !== zv && Object.defineProperty(hv, vv, {
                value: [...zv],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(hv, Fv, {
              value: {
                ...Pv[Fv]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(vv, Symbol.metadata, {
            value: hv,
            writable: !1,
            configurable: !0
          }), hv
        },
        isValidInstance: vv => vv.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(vv.constructor[Symbol.metadata], Ov),
        getFields(vv) {
          const zv = vv[Symbol.metadata],
            Pv = {};
          for (let hv = 0; hv <= zv[Ov]; hv++) Pv[zv[hv].name] = zv[hv].type;
          return Pv
        },
        hasViewTagAtIndex: (vv, zv) => vv?.[Kv]?.includes(zv),
        hasUnreliableAtIndex: (vv, zv) => vv?.[Uv]?.includes(zv),
        hasPatchOnlyAtIndex: (vv, zv) => vv?.[Rv]?.includes(zv),
        hasFullStateOnlyAtIndex: (vv, zv) => vv?.[tv]?.includes(zv),
        hasStreamAtIndex: (vv, zv) => vv?.[qv]?.includes(zv)
      },
      bz = (vv, zv, Pv) => vv(zv, Pv);
    class rz {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(vv) {
        this.ops = new Uint8Array(Math.max(vv + 1, 1))
      }
      record(vv, zv) {
        const Pv = this.ops[vv];
        0 === Pv ? this.ops[vv] = zv : (Pv === Sv.DELETE || Pv === Sv.ADD && zv === Sv.DELETE_AND_ADD) && (this.ops[vv] = Sv.DELETE_AND_ADD), vv < 32 ? this.dirtyLow |= 1 << vv : this.dirtyHigh |= 1 << vv - 32
      }
      recordDelete(vv, zv) {
        this.ops[vv] = zv, vv < 32 ? this.dirtyLow |= 1 << vv : this.dirtyHigh |= 1 << vv - 32
      }
      recordRaw(vv, zv) {
        this.record(vv, zv)
      }
      operationAt(vv) {
        const zv = this.ops[vv];
        return 0 === zv ? void 0 : zv
      }
      setOperationAt(vv, zv) {
        this.ops[vv] = zv
      }
      forEach(vv) {
        this.forEachWithCtx(vv, bz)
      }
      forEachWithCtx(vv, zv) {
        let Pv = this.dirtyLow,
          hv = this.dirtyHigh;
        const Sv = this.ops;
        for (; 0 !== Pv;) {
          const hv = Pv & -Pv,
            ev = 31 - Math.clz32(hv);
          Pv ^= hv, zv(vv, ev, Sv[ev])
        }
        for (; 0 !== hv;) {
          const Pv = hv & -hv,
            ev = 31 - Math.clz32(Pv) + 32;
          hv ^= Pv, zv(vv, ev, Sv[ev])
        }
      }
      size() {
        return Xz(this.dirtyLow) + Xz(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class kz {
      Da = new Map;
      pureOps = [];
      record(vv, zv) {
        const Pv = this.Da.get(vv);
        void 0 === Pv ? this.Da.set(vv, zv) : (Pv === Sv.DELETE || Pv === Sv.ADD && zv === Sv.DELETE_AND_ADD) && this.Da.set(vv, Sv.DELETE_AND_ADD)
      }
      recordDelete(vv, zv) {
        this.Da.set(vv, zv)
      }
      recordRaw(vv, zv) {
        this.Da.set(vv, zv)
      }
      recordPure(vv) {
        this.pureOps.push([this.Da.size, vv])
      }
      operationAt(vv) {
        return this.Da.get(vv)
      }
      setOperationAt(vv, zv) {
        this.Da.has(vv) && this.Da.set(vv, zv)
      }
      forEach(vv) {
        this.forEachWithCtx(vv, bz)
      }
      forEachWithCtx(vv, zv) {
        const Pv = this.pureOps;
        if (Pv.length > 0) {
          let hv = 0,
            Sv = 0;
          for (const [ev, gv] of this.Da) {
            for (; hv < Pv.length && Pv[hv][0] <= Sv;) {
              const Sv = Pv[hv++][1];
              zv(vv, -Sv, Sv)
            }
            zv(vv, ev, gv), Sv++
          }
          for (; hv < Pv.length;) {
            const Sv = Pv[hv++][1];
            zv(vv, -Sv, Sv)
          }
        } else
          for (const [hv, Sv] of this.Da) zv(vv, hv, Sv)
      }
      size() {
        return this.Da.size + this.pureOps.length
      }
      has() {
        return this.Da.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Da.clear(), this.pureOps.length = 0
      }
      shift(vv) {
        const zv = new Map;
        for (const [Pv, hv] of this.Da) zv.set(Pv + vv, hv);
        this.Da = zv
      }
    }

    function Xz(vv) {
      return 16843009 * ((vv = (858993459 & (vv -= vv >>> 1 & 1431655765)) + (vv >>> 2 & 858993459)) + (vv >>> 4) & 252645135) >>> 24
    }

    function uz(vv) {
      if (void 0 === vv) return 0;
      let zv = 0;
      for (let Pv = 0, hv = vv.length; Pv < hv; Pv++) {
        const hv = vv[Pv];
        hv < 32 && (zv |= 1 << hv)
      }
      return zv
    }

    function vP(vv) {
      const zv = vv.constructor;
      if (Object.prototype.hasOwnProperty.call(zv, Yv)) return zv[Yv];
      const Pv = zv[Symbol.metadata],
        hv = oz.isValidInstance(vv),
        Sv = (Pv?.[Kv]?.length ?? 0) > 0,
        ev = function(vv) {
          const zv = [],
            Pv = [],
            hv = [],
            Sv = [],
            ev = vv?.[Ov];
          if (void 0 === ev) return {
            names: zv,
            types: Pv,
            tags: hv,
            encoders: Sv
          };
          const gv = vv[nv];
          for (let pv = 0; pv <= ev; pv++) {
            const ev = vv[pv];
            void 0 !== ev ? (zv[pv] = ev.name, Pv[pv] = ev.type, hv[pv] = ev.tag, Sv[pv] = gv?.[pv]) : (zv[pv] = void 0, Pv[pv] = void 0, hv[pv] = void 0, Sv[pv] = void 0)
          }
          return {
            names: zv,
            types: Pv,
            tags: hv,
            encoders: Sv
          }
        }(Pv),
        gv = hv && !Sv ? void 0 : zv[Tv],
        pv = {
          encoder: zv[Nv],
          filter: gv,
          metadata: Pv,
          isSchema: hv,
          filterBitmask: hv ? uz(Pv?.[Kv]) : 0,
          hasAnyFullStateOnly: (Pv?.[tv]?.length ?? 0) > 0,
          hasAnyUnreliable: (Pv?.[Uv]?.length ?? 0) > 0,
          hasAnyStream: (Pv?.[qv]?.length ?? 0) > 0,
          hasAnyView: Sv,
          fullStateOnlyBitmask: uz(Pv?.[tv]),
          unreliableBitmask: uz(Pv?.[Uv]),
          streamBitmask: uz(Pv?.[qv]),
          names: ev.names,
          types: ev.types,
          tags: ev.tags,
          encoders: ev.encoders
        };
      return Object.defineProperty(zv, Yv, {
        value: pv,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), pv
    }

    function zP(vv, zv) {
      if (void 0 !== vv.parentRef && zv(vv.parentRef, vv._parentIndex)) return !0;
      for (let Pv = vv.extraParents; void 0 !== Pv; Pv = Pv.next)
        if (zv(Pv.ref, Pv.index)) return !0;
      return !1
    }
    const PP = (vv, zv) => {
        vv.isFieldUnreliable(zv) ? vv.ensureUnreliableRecorder().record(zv, Sv.ADD) : vv.record(zv, Sv.ADD)
      },
      hP = (vv, zv) => vv(zv);

    function SP(vv, zv, Pv) {
      const hv = vv.refTarget;
      if (void 0 !== hv[Cv]) {
        if (vv.isPatchOnly) return;
        if (Array.isArray(hv.items)) {
          const vv = hv.items;
          for (let hv = 0, Sv = vv.length; hv < Sv; hv++) void 0 !== vv[hv] && Pv(zv, hv)
        } else if (void 0 !== hv.journal)
          for (const [vv, Sv] of hv.journal.keyByIndex) hv.$items.has(Sv) && Pv(zv, vv);
        else if (void 0 !== hv.$items)
          for (const vv of hv.$items.keys()) Pv(zv, vv)
      } else {
        const Sv = vv.metadata;
        if (!Sv) return;
        const ev = Sv[Ov] ?? -1,
          gv = Sv[xv],
          pv = vv.encDescriptor.names;
        for (let vv = 0; vv <= ev; vv++) {
          const Sv = pv[vv];
          if (void 0 === Sv) continue;
          if (gv && gv.includes(vv)) continue;
          const ev = hv[Sv];
          void 0 !== ev && null !== ev && Pv(zv, vv)
        }
      }
    }

    function eP(vv, zv, Pv, hv) {
      ! function(vv, zv, Pv) {
        if (!zv) return;
        const hv = zv[sv],
          Sv = !hv._isSchema;
        let ev;
        Sv ? (zv = hv.parent, Pv = hv.parentIndex, ev = zv?.[sv].metadata) : ev = hv.metadata;
        const gv = (ev?.[Rv]?.includes(Pv) ? YP : 0) | (ev?.[tv]?.includes(Pv) ? nP : 0),
          pv = hv.flags & KP | gv,
          dv = vv.flags;
        vv.flags = dv | pv;
        pv & ~dv & nP && (vv.reset(), vv.unreliableRecorder?.reset());
        const Nv = vv.root?.types;
        if (!Nv?.hasFilters) return;
        const lv = ev?.[Kv]?.includes(Pv) ?? !1,
          Tv = ev?.[qv]?.includes(Pv) ?? !1,
          Wv = hv.isFiltered || lv || Tv;
        if (vv.isFiltered = Wv, Tv && !Sv) {
          vv.isStreamCollection = !0;
          const zv = Oz(vv.ref);
          if (void 0 === zv.priority) {
            const vv = oz.getStreamPriority(ev, Pv);
            void 0 !== vv && (zv.priority = vv)
          }
          vv.root?.registerStream(vv.ref)
        }
        if (Wv) {
          const zv = pP(vv);
          vv.isVisibilitySharedWithParent = hv.isFiltered && zv && !Tv && (!lv || Sv && ev[Pv].tag !== ah)
        }
      }(vv, zv, Pv), vv.isFullStateOnly || (vv.has() && vv.root?.enqueueChangeTree(vv), vv.unreliableRecorder?.has() && vv.root?.enqueueUnreliable(vv), vv.has() || vv.unreliableRecorder?.has() || vv.root?.enqueueChangeTree(vv))
    }

    function gP(vv) {
      const zv = vv.pendingFilterRefresh;
      for (let Pv = 0; Pv < zv.length; Pv++) {
        const vv = zv[Pv];
        0 !== (vv.flags & DP) && dP(vv)
      }
      zv.length = 0
    }

    function pP(vv) {
      return vv._isSchema || "string" !== typeof vv.refTarget[Cv]
    }

    function dP(vv) {
      vv.flags &= ~DP;
      const zv = vv.root;
      if (void 0 === zv || void 0 === vv.parentRef) return;
      const Pv = pP(vv);
      let hv = wP(vv, vv.parentRef, vv._parentIndex, Pv);
      for (let ev = vv.extraParents; void 0 !== ev && hv !== WP; ev = ev.next) hv |= wP(vv, ev.ref, ev.index, Pv);
      if (0 === hv) return;
      vv.isVisibilitySharedWithParent = 0 !== (hv & TP);
      const Sv = 0 === (hv & lP);
      Sv !== vv.isFiltered && (vv.isFiltered = Sv, Sv || vv.isFullStateOnly || (vv.forEachLiveWithCtx(vv, PP), vv.has() && zv.enqueueChangeTree(vv), vv.unreliableRecorder?.has() && zv.enqueueUnreliable(vv)), vv.forEachChildWithCtx(vv, aP))
    }
    const NP = 1,
      lP = 2,
      TP = 4,
      WP = NP | lP | TP;

    function wP(vv, zv, Pv, hv) {
      const Sv = zv[sv];
      if (Sv.root !== vv.root || ! function(vv, zv, Pv) {
          const hv = zv.refTarget;
          if (zv.isArray) {
            const zv = hv.items,
              Sv = zv[Pv];
            if (void 0 !== Sv && Sv[sv] === vv) return !0;
            for (let Pv = 0, hv = zv.length; Pv < hv; Pv++) {
              const hv = zv[Pv];
              if (void 0 !== hv && hv[sv] === vv) return !0
            }
            return !1
          }
          const Sv = zv.getValue(Pv);
          return void 0 !== Sv && Sv[sv] === vv
        }(vv, Sv, Pv)) return 0;
      Sv.flags & DP && dP(Sv);
      let ev = NP;
      if (Sv._isSchema) {
        void 0 !== Sv.encDescriptor.tags[Pv] || Sv.isFieldStream(Pv) || (Sv.isFiltered ? hv && (ev |= TP) : ev |= lP)
      } else if (Sv.isFiltered) {
        if (hv && !Sv.isStreamCollection) {
          const vv = Sv.parent?.[sv];
          (vv?._isSchema ? vv.encDescriptor.tags[Sv.parentIndex] : void 0) !== ah && (ev |= TP)
        }
      } else ev |= lP;
      return ev
    }
    const aP = (vv, zv, Pv) => {
      dP(zv)
    };

    function sP(vv, zv, Pv, hv) {
      if (vv.addParent(zv, hv), !Pv) return;
      const Sv = Pv.add(vv);
      Pv !== vv.root && (vv.root = Pv, eP(vv, zv, hv));
      const ev = zv?.[sv];
      if (void 0 !== ev && void 0 !== ev.subscribedViews && void 0 !== zv[Cv] && function(vv, zv, Pv, hv) {
          const Sv = vv.subscribedViews;
          if (void 0 === Sv) return;
          const ev = vv.isStreamCollection,
            gv = ev ? vv.ref : void 0,
            pv = ev ? void 0 : Pv[sv];
          for (let dv = 0, Nv = Sv.length; dv < Nv; dv++) {
            let vv = Sv[dv];
            for (; 0 !== vv;) {
              const Pv = vv & -vv;
              vv ^= Pv;
              const Nv = 32 * dv + (31 - Math.clz32(Pv)),
                lv = hv.activeViews.get(Nv),
                Tv = lv?.deref();
              void 0 !== Tv ? ev ? Rz(gv, Nv, zv) : void 0 !== pv && Tv.markVisible(pv) : Sv[dv] &= ~Pv
            }
          }
        }(ev, hv, vv.ref, Pv), Sv) {
        let zv = GP[mP];
        void 0 === zv && (zv = {
          parentRef: void 0,
          root: void 0
        }, GP[mP] = zv), zv.parentRef = vv.ref, zv.root = Pv, mP++, iP(vv, zv, jP), mP--
      }
    }

    function CP(vv, zv, Pv) {
      vv(zv, Pv)
    }

    function iP(vv, zv, Pv) {
      const hv = vv.refTarget;
      if (hv[Cv]) {
        if ("string" !== typeof hv[Cv]) {
          const vv = hv.items;
          if (void 0 !== vv)
            for (let hv = 0, Sv = vv.length; hv < Sv; hv++) {
              const Sv = vv[hv];
              Sv && Pv(zv, Sv[sv], hv)
            } else {
              const vv = hv.$items,
                Sv = hv._collectionIndexes;
              for (const hv of vv.keys()) {
                const ev = vv.get(hv);
                ev && Pv(zv, ev[sv], Sv?.[hv] ?? hv)
              }
            }
        }
      } else {
        const Sv = vv.metadata,
          ev = Sv?.[Dv];
        if (!ev) return;
        const gv = vv.encDescriptor.names;
        for (let vv = 0, pv = ev.length; vv < pv; vv++) {
          const Sv = ev[vv],
            pv = hv[gv[Sv]];
          pv && Pv(zv, pv[sv], Sv)
        }
      }
    }

    function cP(vv, zv, Pv) {
      zv.root !== vv ? zv.setRoot(vv) : vv.add(zv)
    }
    const GP = [];
    let mP = 0;

    function jP(vv, zv, Pv) {
      if (zv.root === vv.root) return vv.root.add(zv), void vv.root.moveNextToParent(zv);
      zv.setParent(vv.parentRef, vv.root, Pv)
    }

    function fP(vv, zv, Pv) {
      const hv = (3 & Pv) << 3;
      return Pv < 4 ? vv >>> hv & 255 : zv >>> hv & 255
    }
    const FP = (vv, zv, Pv) => vv(zv, Pv);
    const YP = 16,
      nP = 32,
      OP = 128,
      DP = 256,
      KP = YP | nP;
    class VP {
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
      set isFiltered(vv) {
        this.flags = vv ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(vv) {
        this.flags = vv ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(vv) {
        this.flags = vv ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(vv) {
        this.flags = vv ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & YP)
      }
      set isPatchOnly(vv) {
        this.flags = vv ? this.flags | YP : this.flags & ~YP
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & nP)
      }
      set isFullStateOnly(vv) {
        this.flags = vv ? this.flags | nP : this.flags & ~nP
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(vv) {
        this.flags = vv ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & OP)
      }
      set needsRestage(vv) {
        this.flags = vv ? this.flags | OP : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new rz(this.metadata?.[Ov] ?? 0) : new kz), this.unreliableRecorder
      }
      isFieldUnreliable(vv) {
        const zv = this.encDescriptor;
        return !!zv.hasAnyUnreliable && (vv < 32 ? 0 !== (zv.unreliableBitmask & 1 << vv) : oz.hasUnreliableAtIndex(this.metadata, vv))
      }
      isFieldFullStateOnly(vv) {
        if (this.isFullStateOnly) return !0;
        const zv = this.encDescriptor;
        return !!zv.hasAnyFullStateOnly && (vv < 32 ? 0 !== (zv.fullStateOnlyBitmask & 1 << vv) : oz.hasFullStateOnlyAtIndex(this.metadata, vv))
      }
      isFieldStream(vv) {
        const zv = this.encDescriptor;
        return !!zv.hasAnyStream && (vv < 32 ? 0 !== (zv.streamBitmask & 1 << vv) : oz.hasStreamAtIndex(this.metadata, vv))
      }
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv;
        this.ref = vv, this.refTarget = zv;
        const Pv = vP(vv);
        this.encDescriptor = Pv, this.metadata = Pv.metadata;
        const hv = Pv.isSchema;
        if (this._isSchema = hv, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, hv) {
          const vv = this.metadata?.[Ov] ?? 0;
          vv > 7 && (this.ops = new Uint8Array(vv + 1))
        } else this.collDirty = new Map
      }
      _opAt(vv) {
        const zv = this.ops;
        if (void 0 !== zv) return zv[vv];
        const Pv = (3 & vv) << 3;
        return vv < 4 ? this.opsLow >>> Pv & 255 : this.opsHigh >>> Pv & 255
      }
      _opPut(vv, zv) {
        const Pv = this.ops;
        if (void 0 !== Pv) return void(Pv[vv] = zv);
        const hv = (3 & vv) << 3,
          Sv = ~(255 << hv);
        vv < 4 ? this.opsLow = this.opsLow & Sv | zv << hv : this.opsHigh = this.opsHigh & Sv | zv << hv
      }
      _markDirty(vv) {
        vv < 32 ? this.dirtyLow |= 1 << vv : this.dirtyHigh |= 1 << vv - 32
      }
      record(vv, zv) {
        if (this._isSchema) {
          const Pv = this._opAt(vv);
          0 === Pv ? this._opPut(vv, zv) : (Pv === Sv.DELETE || Pv === Sv.ADD && zv === Sv.DELETE_AND_ADD) && this._opPut(vv, Sv.DELETE_AND_ADD), this._markDirty(vv)
        } else {
          const Pv = this.collDirty,
            hv = Pv.get(vv);
          let ev;
          ev = void 0 === hv ? zv : hv === Sv.DELETE || hv === Sv.ADD && zv === Sv.DELETE_AND_ADD ? Sv.DELETE_AND_ADD : hv, Pv.set(vv, ev)
        }
      }
      recordDelete(vv, zv) {
        this._isSchema ? (this._opPut(vv, zv), this._markDirty(vv)) : this.collDirty.set(vv, zv)
      }
      recordRaw(vv, zv) {
        this._isSchema ? (this._opPut(vv, zv), this._markDirty(vv)) : this.collDirty.set(vv, zv)
      }
      recordPure(vv) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, vv])
      }
      operationAt(vv) {
        if (this._isSchema) {
          const zv = this._opAt(vv);
          return 0 === zv ? void 0 : zv
        }
        return this.collDirty.get(vv)
      }
      setOperationAt(vv, zv) {
        if (this._isSchema) this._opPut(vv, zv);
        else {
          const Pv = this.collDirty;
          Pv.has(vv) && Pv.set(vv, zv)
        }
      }
      forEach(vv) {
        this.forEachWithCtx(vv, FP)
      }
      forEachWithCtx(vv, zv) {
        if (this._isSchema) {
          let Pv = this.dirtyLow,
            hv = this.dirtyHigh;
          const Sv = this.ops;
          if (void 0 !== Sv) {
            for (; 0 !== Pv;) {
              const hv = Pv & -Pv,
                ev = 31 - Math.clz32(hv);
              Pv ^= hv, zv(vv, ev, Sv[ev])
            }
            for (; 0 !== hv;) {
              const Pv = hv & -hv,
                ev = 31 - Math.clz32(Pv) + 32;
              hv ^= Pv, zv(vv, ev, Sv[ev])
            }
          } else {
            const hv = this.opsLow,
              Sv = this.opsHigh;
            for (; 0 !== Pv;) {
              const ev = Pv & -Pv,
                gv = 31 - Math.clz32(ev);
              Pv ^= ev, zv(vv, gv, fP(hv, Sv, gv))
            }
          }
          return
        }
        const Pv = this.collDirty,
          hv = this.collPureOps;
        if (void 0 !== hv && hv.length > 0) {
          let Sv = 0,
            ev = 0;
          for (const [gv, pv] of Pv) {
            for (; Sv < hv.length && hv[Sv][0] <= ev;) {
              const Pv = hv[Sv++][1];
              zv(vv, -Pv, Pv)
            }
            zv(vv, gv, pv), ev++
          }
          for (; Sv < hv.length;) {
            const Pv = hv[Sv++][1];
            zv(vv, -Pv, Pv)
          }
        } else
          for (const [Sv, ev] of Pv) zv(vv, Sv, ev)
      }
      size() {
        return this._isSchema ? Xz(this.dirtyLow) + Xz(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(vv, zv) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const Pv = this.collDirty,
          hv = new Map,
          ev = !this.paused && !this.isFullStateOnly;
        if (vv > 0)
          for (const [Sv, gv] of Pv) Sv < vv && hv.set(Sv, gv);
        if (ev)
          for (let gv = 0; gv < zv; gv++) hv.set(vv + gv, Sv.ADD);
        for (const [Sv, gv] of Pv) Sv >= vv && hv.set(Sv + zv, gv);
        this.collDirty = hv, ev && this.root?.enqueueChangeTree(this)
      }
      removeAt(vv, zv) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const Pv = this.collDirty,
          hv = vv + zv;
        let Sv = !1;
        for (const gv of Pv.keys())
          if (gv >= hv) {
            Sv = !0;
            break
          } if (!Sv) {
          for (let zv = vv; zv < hv; zv++) Pv.delete(zv);
          return
        }
        const ev = new Map;
        for (const [gv, pv] of Pv) gv < vv ? ev.set(gv, pv) : gv >= hv && ev.set(gv - zv, pv);
        this.collDirty = ev
      }
      unshift(vv) {
        this.insertAt(0, vv)
      }
      setRoot(vv) {
        ! function(vv, zv) {
          vv.root = zv;
          const Pv = zv.add(vv);
          eP(vv, vv.parent, vv.parentIndex), Pv && iP(vv, zv, cP)
        }(this, vv)
      }
      setParent(vv, zv, Pv) {
        sP(this, vv, zv, Pv)
      }
      forEachChild(vv) {
        iP(this, vv, CP)
      }
      forEachChildWithCtx(vv, zv) {
        iP(this, vv, zv)
      }
      forEachLive(vv) {
        SP(this, vv, hP)
      }
      forEachLiveWithCtx(vv, zv) {
        SP(this, vv, zv)
      }
      operation(vv) {
        this.paused || this.isFullStateOnly || (this.recordPure(vv), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(vv, zv, Pv) {
        if (!this.paused && !this.isFieldFullStateOnly(vv)) {
          if (this.isFieldUnreliable(vv) && !this.isNew) {
            const hv = this.ensureUnreliableRecorder();
            return Pv ? hv.recordRaw(vv, zv) : hv.record(vv, zv), void this.root?.enqueueUnreliable(this)
          }
          Pv ? this.recordRaw(vv, zv) : this.record(vv, zv), this.root?.enqueueChangeTree(this)
        }
      }
      change(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sv.ADD;
        this._routeAndRecord(vv, zv, !1)
      }
      indexedOperation(vv, zv) {
        this._routeAndRecord(vv, zv, !0)
      }
      getChange(vv) {
        return this.operationAt(vv)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(vv) {
        const zv = this.paused;
        this.paused = !0;
        try {
          return vv()
        } finally {
          this.paused = zv
        }
      }
      markDirty(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sv.ADD;
        const Pv = this.paused;
        this.paused = !1;
        try {
          this.change(vv, zv)
        } finally {
          this.paused = Pv
        }
      }
      getValue(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Wv](vv, zv)
      }
      delete(vv, zv) {
        if (void 0 === vv) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${vv}'`)
          } catch (eS) {
            console.warn(eS)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(vv)) return this.getValue(vv);
        const Pv = this.isFieldUnreliable(vv) && !this.isNew;
        Pv ? this.ensureUnreliableRecorder().recordDelete(vv, zv ?? Sv.DELETE) : this.recordDelete(vv, zv ?? Sv.DELETE);
        const hv = this.getValue(vv);
        return hv && hv[sv] && this.root?.remove(hv[sv]), Pv ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), hv
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[cv]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[cv]?.()
      }
      discard() {
        this._isSchema || this.refTarget[cv]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const vv = vv => {
          if (vv < 0) return;
          const zv = this.getValue(vv);
          zv && zv[sv] && zv[sv].discardAll()
        };
        this.forEach(vv), this.unreliableRecorder?.forEach(vv), this.discard()
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
      addParent(vv, zv) {
        ! function(vv, zv, Pv) {
          if (vv.parentRef) {
            if (vv.parentRef[sv] === zv[sv]) return void(vv._parentIndex = Pv);
            if (zP(vv, ((vv, Pv) => vv[sv] === zv[sv]))) return void(vv._parentIndex = Pv)
          }
          void 0 === vv.parentRef ? (vv.parentRef = zv, vv._parentIndex = Pv) : (vv.extraParents = {
            ref: vv.parentRef,
            index: vv._parentIndex,
            next: vv.extraParents
          }, vv.parentRef = zv, vv._parentIndex = Pv)
        }(this, vv, zv)
      }
      setParentIndex(vv, zv) {
        ! function(vv, zv, Pv) {
          if (void 0 !== vv.extraParents)
            if (vv.parentRef[sv] !== zv[sv]) {
              for (let hv = vv.extraParents; void 0 !== hv; hv = hv.next)
                if (hv.ref[sv] === zv[sv]) return void(hv.index = Pv)
            } else vv._parentIndex = Pv;
          else vv._parentIndex = Pv
        }(this, vv, zv)
      }
      removeParent() {
        return function(vv, zv) {
          if (vv.parentRef && vv.parentRef[sv] === zv[sv]) return vv.extraParents ? (vv.parentRef = vv.extraParents.ref, vv._parentIndex = vv.extraParents.index, vv.extraParents = vv.extraParents.next) : (vv.parentRef = void 0, vv._parentIndex = void 0), !0;
          let Pv = vv.extraParents,
            hv = null;
          for (; Pv;) {
            if (Pv.ref[sv] === zv[sv]) return hv ? hv.next = Pv.next : vv.extraParents = Pv.next, !0;
            hv = Pv, Pv = Pv.next
          }
          return void 0 === vv.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(vv) {
        return function(vv, zv) {
          if (void 0 !== vv.parentRef && zv(vv.parentRef, vv._parentIndex)) return {
            ref: vv.parentRef,
            index: vv._parentIndex
          };
          for (let Pv = vv.extraParents; void 0 !== Pv; Pv = Pv.next)
            if (zv(Pv.ref, Pv.index)) return {
              ref: Pv.ref,
              index: Pv.index
            }
        }(this, vv)
      }
      hasParent(vv) {
        return zP(this, vv)
      }
      indexInParent(vv) {
        return function(vv, zv) {
          if (vv.parentRef && vv.parentRef[sv] === zv[sv]) return vv._parentIndex;
          for (let Pv = vv.extraParents; void 0 !== Pv; Pv = Pv.next)
            if (Pv.ref[sv] === zv[sv]) return Pv.index
        }(this, vv)
      }
      getAllParents() {
        return function(vv) {
          const zv = [];
          vv.parentRef && zv.push({
            ref: vv.parentRef,
            index: vv._parentIndex
          });
          let Pv = vv.extraParents;
          for (; Pv;) zv.push({
            ref: Pv.ref,
            index: Pv.index
          }), Pv = Pv.next;
          return zv
        }(this)
      }
    }
    class UP {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(vv) {
        this.ref = vv
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
      untracked(vv) {
        return vv()
      }
      markDirty() {}
      forEachChild(vv) {
        const zv = this.ref;
        if (zv[Cv]) {
          if ("string" !== typeof zv[Cv])
            for (const [Pv, hv] of zv.entries()) hv && vv(hv[sv], zv._collectionIndexes?.[Pv] ?? Pv);
          return
        }
        const Pv = zv.constructor,
          hv = Pv?.[Symbol.metadata];
        if (!hv) return;
        const Sv = hv[Dv] ?? [];
        for (let ev = 0; ev < Sv.length; ev++) {
          const Pv = Sv[ev],
            gv = zv[hv[Pv].name];
          gv && vv(gv[sv], Pv)
        }
      }
      forEachChildWithCtx(vv, zv) {
        this.forEachChild(((Pv, hv) => zv(vv, Pv, hv)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function RP(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv;
      var Pv;
      Object.defineProperty(vv, sv, {
        value: (Pv = zv, new UP(Pv)),
        enumerable: !1,
        writable: !0
      })
    }

    function xP(vv, zv, Pv, hv, ev, gv, dv) {
      void 0 !== dv ? dv(zv, hv, gv) : "string" === typeof Pv ? zz[Pv]?.(zv, hv, gv) : null != Pv[Symbol.metadata] ? (zz.number(zv, hv[pv], gv), (ev & Sv.ADD) === Sv.ADD && vv.tryEncodeTypeId(zv, Pv, hv.constructor, gv)) : zz.number(zv, hv[pv], gv)
    }
    const tP = function(vv, zv, Pv, hv, ev, gv, pv, dv) {
        if (zv[gv.offset++] = 255 & (hv | ev), ev === Sv.DELETE) return;
        const Nv = Pv.encDescriptor,
          lv = Pv.ref,
          Tv = lv[jv][hv] ?? lv[Nv.names[hv]];
        xP(vv, zv, Nv.types[hv], Tv, ev, gv, Nv.encoders[hv])
      },
      qP = function(vv, zv, Pv, hv, ev, gv) {
        if (zv[gv.offset++] = 255 & ev, zz.number(zv, hv, gv), ev === Sv.DELETE) return;
        const pv = Pv.ref;
        if ((ev & Sv.ADD) === Sv.ADD) {
          const vv = pv.$indexes.get(hv);
          zz.string(zv, vv, gv)
        }
        xP(vv, zv, pv[Cv], pv[Wv](hv), ev, gv)
      },
      IP = function(vv, zv, Pv, hv, ev, gv) {
        if (zv[gv.offset++] = 255 & ev, zz.number(zv, hv, gv), ev === Sv.DELETE) return;
        const pv = Pv.ref;
        xP(vv, zv, pv[Cv], pv[Wv](hv), ev, gv)
      },
      QP = function(vv, zv, Pv, hv, ev, gv) {
        const pv = Pv.ref;
        (ev & Sv.ADD) === Sv.ADD && "function" === typeof pv.set ? qP(vv, zv, Pv, hv, ev, gv) : IP(vv, zv, Pv, hv, ev, gv)
      },
      ZP = function(vv, zv, Pv, hv, ev, gv, dv, Nv) {
        const lv = Pv.refTarget,
          Tv = lv[Cv],
          wv = "string" !== typeof Tv;
        let av;
        if (Nv && Pv.isFiltered && wv) {
          const vv = lv.tmpItems[hv];
          if (!vv) return;
          if (av = vv[pv], ev === Sv.DELETE) ev = Sv.DELETE_BY_REFID;
          else if ((ev & Sv.ADD) === Sv.ADD) ev = Sv.ADD_BY_REFID;
          else if ((ev & Sv.MOVE) === Sv.MOVE) return
        } else if (ev === Sv.DELETE && wv) {
          const vv = lv.tmpItems[hv];
          if (!vv) return;
          av = vv[pv], ev = Sv.DELETE_BY_REFID
        } else av = hv;
        if (zv[gv.offset++] = 255 & ev, zz.number(zv, av, gv), ev === Sv.DELETE || ev === Sv.DELETE_BY_REFID) return;
        xP(vv, zv, Tv, lv[Wv](hv, dv), ev, gv)
      };

    function AP(vv, zv, Pv, hv, ev, gv, dv) {
      const Nv = vv.resyncVisited;
      let lv = Nv.get(vv.currentRefId);
      if (void 0 === lv && Nv.set(vv.currentRefId, lv = new Set), lv.add(hv), void 0 !== ev && Pv === Sv.ADD && ev !== gv) {
        const Pv = ev[pv];
        void 0 !== Pv && (vv.root.removeRef(Pv), dv?.push({
          ref: zv,
          refId: vv.currentRefId,
          op: Sv.DELETE,
          dynamicIndex: hv,
          value: void 0,
          previousValue: ev
        }))
      }
    }

    function LP(vv, zv, Pv, hv) {
      const Sv = zv[pv];
      if (void 0 === Sv || Pv.has(Sv)) return;
      Pv.add(Sv);
      const ev = zv.constructor[Symbol.metadata],
        gv = ev?.[Dv];
      if (void 0 === gv) return;
      const dv = ev[Rv];
      for (let pv = 0; pv < gv.length; pv++) {
        const Sv = gv[pv];
        if (void 0 !== dv && dv.includes(Sv)) continue;
        const Nv = ev[Sv],
          lv = zv[Nv.name];
        lv && (Kh.is(Nv.type) ? LP(vv, lv, Pv, hv) : HP(vv, lv, Pv, hv))
      }
    }

    function HP(vv, zv, Pv, hv) {
      const ev = zv[iv] ?? zv,
        gv = ev[pv];
      if (void 0 === gv || Pv.has(gv)) return;
      Pv.add(gv);
      const dv = vv.resyncVisited.get(gv);
      if (void 0 === dv) return;
      const Nv = vv.root;
      ev[av](dv, ((vv, Pv) => {
        hv?.push({
          ref: zv,
          refId: gv,
          op: Sv.DELETE,
          dynamicIndex: Pv,
          value: void 0,
          previousValue: vv
        });
        const ev = vv?.[pv];
        void 0 !== ev && Nv.removeRef(ev)
      }), (zv => {
        Kh.isSchema(zv) && LP(vv, zv, Pv, hv)
      }))
    }
    const MP = 1,
      yP = 2,
      BP = 3,
      JP = 4,
      EP = 5;

    function oP(vv, zv, Pv, hv, ev, gv, dv, Nv, lv) {
      const Tv = vv.root;
      let Wv;
      if ((zv & Sv.DELETE) === Sv.DELETE) {
        const vv = ev?.[pv];
        void 0 !== vv && Tv.removeRef(vv), zv !== Sv.DELETE_AND_ADD && Pv[wv](hv), Wv = void 0
      }
      if (zv === Sv.DELETE);
      else if ("string" === typeof gv) Wv = Gz[gv](dv, Nv);
      else if (Iz(gv)) Wv = function(vv, zv, Pv) {
        return Zz(vv, (0, Gz[vv.wire])(zv, Pv))
      }(gv.quantized, dv, Nv);
      else if (Kh.is(gv)) {
        const Pv = Gz.number(dv, Nv);
        if (Wv = Tv.refs.get(Pv), (zv & Sv.ADD) === Sv.ADD) {
          const hv = vv.getInstanceType(dv, Nv, gv);
          Wv || (Wv = vv.createInstanceOfType(hv)), Tv.addRef(Pv, Wv, Wv !== ev || zv === Sv.DELETE_AND_ADD && Wv === ev)
        }
      } else {
        const Pv = (av = Object.keys(gv)[0], mz[av]),
          hv = Gz.number(dv, Nv);
        null !== vv.resyncVisited && function(vv, zv) {
          const Pv = vv.resyncVisited;
          Pv.has(zv) || Pv.set(zv, new Set)
        }(vv, hv);
        const wv = Tv.refs.has(hv) ? ev || Tv.refs.get(hv) : Pv.constructor.initializeForDecoder();
        if (Wv = wv.clone(!0), Wv[Cv] = Object.values(gv)[0], ev) {
          let vv = ev[pv];
          if (void 0 !== vv && hv !== vv) {
            (zv & Sv.DELETE) !== Sv.DELETE && Tv.removeRef(vv);
            const Pv = ev.entries();
            let hv;
            for (;
              (hv = Pv.next()) && !hv.done;) {
              const [zv, Pv] = hv.value;
              "object" === typeof Pv && (vv = Pv[pv]), lv?.push({
                ref: ev,
                refId: vv,
                op: Sv.DELETE,
                field: zv,
                value: void 0,
                previousValue: Pv
              })
            }
          }
        }
        Tv.addRef(hv, Wv, wv !== ev || zv === Sv.DELETE_AND_ADD && wv === ev)
      }
      var av;
      return Wv
    }
    const bP = function(vv, zv, Pv, hv, Sv) {
        const ev = zv[Pv.offset++],
          gv = hv.constructor[Symbol.metadata],
          pv = ev >> 6 << 6,
          dv = ev % (pv || 255),
          Nv = gv[dv];
        if (void 0 === Nv) return console.warn("@colyseus/schema: field not defined at", {
          index: dv,
          ref: hv.constructor.name,
          metadata: gv
        }), -1;
        const lv = !0 === Nv.deprecated,
          Tv = lv ? void 0 : hv[Wv](dv),
          wv = oP(vv, pv, hv, dv, Tv, Nv.type, zv, Pv, Sv);
        lv || (null !== wv && void 0 !== wv && (hv[Nv.name] = wv), Tv !== wv && Sv?.push({
          ref: hv,
          refId: vv.currentRefId,
          op: pv,
          field: Nv.name,
          value: wv,
          previousValue: Tv
        }))
      },
      rP = function(vv, zv, Pv, hv, ev) {
        const gv = hv[iv] ?? hv,
          pv = zv[Pv.offset++];
        if (pv === Sv.CLEAR) return vv.removeChildRefs(gv, ev), void gv.clear();
        const dv = Gz.number(zv, Pv),
          Nv = gv[Cv],
          lv = gv.constructor.COLLECTION_KIND;
        let Tv;
        (pv & Sv.ADD) === Sv.ADD ? lv === MP ? (Tv = Gz.string(zv, Pv), gv.setIndex(dv, Tv)) : Tv = dv : Tv = gv.getIndex(dv);
        const wv = gv[Wv](dv),
          av = oP(vv, pv, hv, dv, wv, Nv, zv, Pv, ev);
        if (null !== vv.resyncVisited && AP(vv, hv, pv, Tv, wv, av, ev), null !== av && void 0 !== av) switch (lv) {
          case MP:
            gv.$items.set(Tv, av);
            break;
          case yP:
            gv.$setAt(dv, av, null !== vv.resyncVisited && pv === Sv.ADD ? Sv.REPLACE : pv);
            break;
          case BP:
          case JP:
          case EP:
            gv.$items.has(dv) || (gv.$items.set(dv, av), "number" === typeof gv.$refId && dv >= gv.$refId && (gv.$refId = dv + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${gv.constructor?.name} \u2014 item at index ${dv} was not stored.`)
        }
        wv !== av && ev?.push({
          ref: hv,
          refId: vv.currentRefId,
          op: pv,
          dynamicIndex: Tv,
          value: av,
          previousValue: wv
        })
      },
      kP = function(vv, zv, Pv, hv, ev) {
        const gv = hv[iv] ?? hv;
        let pv, dv = zv[Pv.offset++];
        if (dv === Sv.CLEAR) return vv.removeChildRefs(gv, ev), void gv.clear();
        if (dv === Sv.REVERSE) return void gv.items.reverse();
        if (dv === Sv.DELETE_BY_REFID) {
          const dv = Gz.number(zv, Pv),
            Nv = vv.root.refs.get(dv);
          if (void 0 === Nv) return;
          if (vv.root.removeRef(dv), pv = gv.findIndex((vv => vv === Nv)), -1 === pv) return;
          return gv[wv](pv), void ev?.push({
            ref: hv,
            refId: vv.currentRefId,
            op: Sv.DELETE,
            dynamicIndex: pv,
            value: void 0,
            previousValue: Nv
          })
        }
        if (dv === Sv.ADD_BY_REFID) {
          const hv = Gz.number(zv, Pv),
            Sv = vv.root.refs.get(hv);
          Sv && (pv = gv.findIndex((vv => vv === Sv))), -1 !== pv && void 0 !== pv || (pv = gv.length)
        } else pv = Gz.number(zv, Pv);
        const Nv = gv[Cv];
        let lv = pv;
        const Tv = gv.items[pv],
          Wv = oP(vv, dv, hv, pv, Tv, Nv, zv, Pv, ev);
        null !== vv.resyncVisited && AP(vv, hv, dv, pv, Tv, Wv, ev), null !== Wv && void 0 !== Wv && Wv !== Tv && gv.$setAt(pv, Wv, null !== vv.resyncVisited && dv === Sv.ADD ? Sv.REPLACE : dv), Tv !== Wv && ev?.push({
          ref: hv,
          refId: vv.currentRefId,
          op: dv,
          dynamicIndex: lv,
          value: Wv,
          previousValue: Tv
        })
      };
    class XP extends Error {}

    function uP(vv, zv, Pv, hv) {
      if (!(vv instanceof zv)) throw new XP(`a '${zv.name}' was expected, but '${vv&&vv.constructor.name}' was provided in ${Pv.constructor.name}#${hv}`)
    }
    const vh = (vv, zv) => {
        const Pv = vv.toString(),
          hv = zv.toString();
        return Pv < hv ? -1 : Pv > hv ? 1 : 0
      },
      zh = {
        get: (vv, zv) => "symbol" === typeof zv || isNaN(zv) ? Reflect.get(vv, zv) : vv.items[zv],
        set: (vv, zv, Pv) => {
          if ("symbol" !== typeof zv && !isNaN(zv)) {
            if (void 0 === Pv || null === Pv) vv.$deleteAt(zv);
            else {
              let hv;
              if (Pv[sv]) {
                uP(Pv, vv[Cv], vv, zv);
                const ev = vv.items[zv];
                vv.isMovingItems ? (hv = vv.$wireIndex(Number(zv)), void 0 !== ev ? Pv[sv].isNew ? vv[sv].indexedOperation(hv, Sv.MOVE_AND_ADD) : (vv[sv].getChange(hv) & Sv.DELETE) === Sv.DELETE ? vv[sv].indexedOperation(hv, Sv.DELETE_AND_MOVE) : vv[sv].indexedOperation(hv, Sv.MOVE) : Pv[sv].isNew && vv[sv].indexedOperation(hv, Sv.ADD), Pv[sv].setParent(vv, vv[sv].root, hv)) : hv = vv.$changeAt(Number(zv), Pv), void 0 !== ev && ev[sv].root?.remove(ev[sv])
              } else hv = vv.$changeAt(Number(zv), Pv);
              vv.items[zv] = Pv, void 0 !== hv && (vv.tmpItems[hv] = Pv)
            }
            return !0
          }
          return Reflect.set(vv, zv, Pv)
        },
        deleteProperty: (vv, zv) => ("number" === typeof zv ? vv.$deleteAt(zv) : delete vv[zv], !0),
        has: (vv, zv) => "symbol" === typeof zv || isNaN(Number(zv)) ? Reflect.has(vv, zv) : Reflect.has(vv.items, zv)
      };
    class Ph {
      [sv];
      [pv];
      [iv];
      [Cv];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Nv] = ZP;
      static[lv] = kP;
      static COLLECTION_KIND = yP;
      static[Tv](vv, zv, Pv) {
        if (!Pv) return !0;
        const hv = vv[iv] ?? vv;
        return "string" === typeof hv[Cv] || Pv.isChangeTreeVisible(hv.tmpItems[zv]?.[sv])
      }
      static is(vv) {
        return Array.isArray(vv) || void 0 !== vv.array
      }
      static from(vv) {
        return new Ph(...Array.from(vv))
      }
      constructor() {
        this[Cv] = void 0, this[iv] = this;
        const vv = new Proxy(this, zh);
        return Object.defineProperty(this, sv, {
          value: new VP(vv, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), vv
      }
      static initializeForDecoder() {
        const vv = Object.create(Ph.prototype);
        vv.items = [], vv.isMovingItems = !1, vv._needsCompaction = !1, vv[Cv] = void 0, vv[iv] = vv;
        const zv = new Proxy(vv, zh);
        return RP(vv, zv), zv
      }
      set length(vv) {
        0 === vv ? this.clear() : vv < this.items.length ? this.splice(vv, this.length - vv) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[sv].pause()
      }
      resumeTracking() {
        this[sv].resume()
      }
      untracked(vv) {
        return this[sv].untracked(vv)
      }
      get isTrackingPaused() {
        return this[sv].paused
      }
      push() {
        const vv = this[iv],
          zv = vv.items,
          Pv = vv.tmpItems,
          hv = vv[sv],
          ev = vv[Cv];
        let gv = Pv.length;
        for (let pv = 0, dv = arguments.length; pv < dv; pv++, gv++) {
          const dv = pv < 0 || arguments.length <= pv ? void 0 : arguments[pv];
          if (void 0 === dv || null === dv) return;
          "object" === typeof dv && ev && uP(dv, ev, vv, pv), hv.indexedOperation(gv, Sv.ADD), zv.push(dv), Pv.push(dv), dv[sv]?.setParent(this, hv.root, gv)
        }
        return gv
      }
      pop() {
        const vv = this[iv],
          zv = vv.tmpItems,
          Pv = vv.deletedIndexes;
        let hv = -1;
        for (let ev = zv.length - 1; ev >= 0; ev--)
          if (!0 !== Pv[ev]) {
            hv = ev;
            break
          } if (hv < 0) return;
        const Sv = vv.$isUnsentAdd(hv);
        return vv[sv].delete(hv), Sv ? vv.$cancelAdd(hv) : Pv[hv] = !0, vv.items.pop()
      }
      at(vv) {
        return vv < 0 && (vv += this.length), this.items[vv]
      }
      $wireIndex(vv) {
        const zv = this.deletedIndexes;
        if (0 === zv.length) return vv;
        const Pv = this.tmpItems;
        let hv = 0;
        for (let Sv = 0; Sv < Pv.length; Sv++)
          if (!0 !== zv[Sv]) {
            if (hv === vv) return Sv;
            hv++
          } return Pv.length + (vv - hv)
      }
      $isUnsentAdd(vv) {
        const zv = this[sv];
        return 0 === (576 & zv.flags) && !zv.paused && "string" !== typeof this[Cv] && zv.operationAt(vv) === Sv.ADD
      }
      $cancelAdd(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Pv = this[sv],
          hv = this.tmpItems[vv];
        this.tmpItems.splice(vv, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(vv, 1), Pv.removeAt(vv, 1);
        const Sv = hv?.[sv];
        void 0 !== Sv && void 0 === Sv.root && Sv.removeParent(this), zv && this.$reindexChildren(vv)
      }
      $reindexChildren(vv, zv) {
        if (!this[sv].hasFilteredFields) return;
        if ("string" === typeof this[Cv]) return;
        const Pv = this.tmpItems,
          hv = Pv.length;
        if (void 0 !== zv)
          for (; vv < hv && Pv[vv] === zv[vv];) vv++;
        for (let Sv = vv; Sv < hv; Sv++) Pv[Sv]?.[sv]?.setParentIndex(this, Sv)
      }
      $changeAt(vv, zv) {
        if (void 0 === zv || null === zv) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[vv] === zv) return;
        const Pv = void 0 !== this.items[vv] ? "object" === typeof zv ? Sv.DELETE_AND_ADD : Sv.REPLACE : Sv.ADD,
          hv = this.$wireIndex(vv),
          ev = this[sv];
        return ev.change(hv, Pv), zv[sv]?.setParent(this, ev.root, hv), hv
      }
      $deleteAt(vv, zv) {
        this[sv].delete(this.$wireIndex(vv), zv)
      }
      $setAt(vv, zv, Pv) {
        Pv === Sv.ADD && void 0 !== this.items[vv] ? this.items.splice(vv, 0, zv) : Pv === Sv.DELETE_AND_MOVE ? (this.items.splice(vv, 1), this.items[vv] = zv) : (vv > this.items.length && (this._needsCompaction = !0), this.items[vv] = zv)
      }
      clear() {
        const vv = this[iv];
        if (0 === vv.items.length) return;
        const zv = vv[sv];
        zv.forEachChild(((vv, Pv) => {
          zv.root?.remove(vv)
        })), zv.discard(), zv.operation(Sv.CLEAR), vv.items.length = 0, vv.tmpItems.length = 0
      } [Gv]() {
        const vv = this[iv] ?? this,
          zv = vv[sv];
        if (zv.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const Pv = vv.items;
        for (let hv = 0; hv < Pv.length; hv++) Pv[hv]?.[Gv]?.();
        vv.items.length = 0, vv.tmpItems.length = 0, vv.deletedIndexes.length = 0, zv.recycle(), vv[pv] = void 0
      }
      concat() {
        return new Ph(...this.items.concat(...arguments))
      }
      join(vv) {
        return this.items.join(vv)
      }
      reverse() {
        const vv = this[iv],
          zv = vv[sv];
        if (zv.has() || vv.deletedIndexes.length > 0) {
          const zv = vv.items.slice().reverse();
          return this.clear(), this.push(...zv), this
        }
        return zv.operation(Sv.REVERSE), vv.items.reverse(), vv.tmpItems.reverse(), vv.$reindexChildren(0), this
      }
      shift() {
        const vv = this[iv],
          zv = vv.items;
        if (0 === zv.length) return;
        const Pv = vv[sv],
          hv = vv.deletedIndexes;
        let ev = 0;
        for (; !0 === hv[ev];) ev++;
        const gv = vv.$isUnsentAdd(ev);
        return Pv.delete(ev, Sv.DELETE), gv ? vv.$cancelAdd(ev) : hv[ev] = !0, zv.shift()
      }
      slice(vv, zv) {
        const Pv = new Ph;
        return Pv.push(...this.items.slice(vv, zv)), Pv
      }
      sort() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vh;
        const zv = this[iv];
        zv.isMovingItems = !0;
        const Pv = zv[sv];
        return zv.items.sort(vv).forEach(((vv, zv) => Pv.change(zv, Sv.REPLACE))), zv.tmpItems.sort(vv), zv.$reindexChildren(0), zv.isMovingItems = !1, this
      }
      splice(vv, zv) {
        const Pv = this[iv],
          hv = Pv[sv],
          ev = Pv.items,
          gv = Pv.tmpItems,
          pv = Pv.deletedIndexes,
          dv = ev.length,
          Nv = gv.length;
        for (var lv = arguments.length, Tv = new Array(lv > 2 ? lv - 2 : 0), Wv = 2; Wv < lv; Wv++) Tv[Wv - 2] = arguments[Wv];
        const wv = Tv.length,
          av = [];
        for (let Sv = 0; Sv < Nv; Sv++) !0 !== pv[Sv] && av.push(Sv);
        let Cv;
        if (dv > vv) {
          void 0 === zv && (zv = dv - vv);
          for (let ev = vv; ev < vv + zv; ev++) {
            const vv = av[ev],
              zv = Pv.$isUnsentAdd(vv);
            hv.delete(vv, Sv.DELETE), zv ? (Cv ??= []).push(vv) : pv[vv] = !0
          }
        } else zv = 0;
        if (wv > 0) {
          const ev = av[vv] ?? dv,
            Nv = Math.min(wv, zv);
          for (let vv = 0; vv < Nv; vv++) {
            const zv = ev + vv;
            let Pv;
            const dv = void 0 !== Cv ? Cv.indexOf(zv) : -1; - 1 !== dv ? (Cv.splice(dv, 1), Pv = Sv.ADD) : Pv = pv[zv] ? Sv.DELETE_AND_ADD : Sv.ADD, hv.indexedOperation(zv, Pv), gv[zv] = Tv[vv], pv[zv] = !1, Tv[vv][sv]?.setParent(this, hv.root, zv)
          }
          const lv = wv - Nv;
          if (lv > 0) {
            const vv = ev + Nv;
            hv.insertAt(vv, lv);
            for (let zv = 0; zv < lv; zv++) Tv[Nv + zv][sv]?.setParent(this, hv.root, vv + zv);
            pv.length > 0 && pv.splice(vv, 0, ...new Array(lv).fill(!1)), gv.splice(vv, 0, ...Tv.slice(Nv)), Pv.$reindexChildren(vv + lv)
          }
        }
        if (void 0 !== Cv && Cv.length > 0) {
          for (let vv = Cv.length - 1; vv >= 0; vv--) Pv.$cancelAdd(Cv[vv], !1);
          Pv.$reindexChildren(Cv[0])
        }
        return hv.root?.enqueueChangeTree(hv), ev.splice(vv, zv, ...Tv)
      }
      unshift() {
        const vv = this[iv],
          zv = vv[sv];
        zv.unshift(arguments.length);
        for (let hv = 0; hv < arguments.length; hv++)(hv < 0 || arguments.length <= hv ? void 0 : arguments[hv])?.[sv]?.setParent(this, zv.root, hv);
        const Pv = vv.deletedIndexes;
        return Pv.length > 0 && Pv.unshift(...new Array(arguments.length).fill(!1)), vv.tmpItems.unshift(...arguments), vv.$reindexChildren(arguments.length), vv.items.unshift(...arguments)
      }
      indexOf(vv, zv) {
        return this.items.indexOf(vv, zv)
      }
      lastIndexOf(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(vv, zv)
      }
      every(vv, zv) {
        return this.items.every(vv, zv)
      }
      some(vv, zv) {
        return this.items.some(vv, zv)
      }
      forEach(vv, zv) {
        return this.items.forEach(vv, zv)
      }
      map(vv, zv) {
        return this.items.map(vv, zv)
      }
      filter(vv, zv) {
        return this.items.filter(vv, zv)
      }
      reduce(vv, zv) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(vv, zv) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(vv, zv) {
        return this.items.find(vv, zv)
      }
      findIndex(vv, zv) {
        return this.items.findIndex(vv, zv)
      }
      fill(vv, zv, Pv) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(vv, zv, Pv) {
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
        return Ph
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
      includes(vv, zv) {
        return this.items.includes(vv, zv)
      }
      flatMap(vv, zv) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(vv) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(vv, zv) {
        const Pv = this.items.slice();
        return vv < 0 && (vv += this.length), Pv[vv] = zv, new Ph(...Pv)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(vv) {
        return this.items.slice().sort(vv)
      }
      toSpliced(vv, zv) {
        for (var Pv = arguments.length, hv = new Array(Pv > 2 ? Pv - 2 : 0), Sv = 2; Sv < Pv; Sv++) hv[Sv - 2] = arguments[Sv];
        const ev = this.items.slice();
        return ev.splice.apply(ev, arguments), ev
      }
      shuffle() {
        return this.move((vv => {
          let zv = this.items.length;
          for (; 0 != zv;) {
            let vv = Math.floor(Math.random() * zv);
            zv--, [this[zv], this[vv]] = [this[vv], this[zv]]
          }
        }))
      }
      move(vv) {
        return this.isMovingItems = !0, vv(this), this.isMovingItems = !1, this
      } [Wv](vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = this[iv] ?? this;
        return zv || Pv.deletedIndexes[vv] ? Pv.items[vv] : Pv.tmpItems[vv] || Pv.items[vv]
      } [wv](vv) {
        const zv = this[iv] ?? this;
        zv.items[vv] = void 0, zv._needsCompaction = !0
      } [cv]() {
        const vv = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, vv), this.deletedIndexes.length = 0)
      } [mv]() {
        const vv = this[iv] ?? this;
        vv._needsCompaction && (vv._needsCompaction = !1, vv.items = vv.items.filter((vv => void 0 !== vv)))
      } [av](vv, zv, Pv) {
        const hv = this[iv] ?? this,
          Sv = hv.items;
        let ev = !1;
        for (let gv = 0; gv < Sv.length; gv++) {
          const pv = Sv[gv];
          vv.has(gv) ? Pv(pv) : (ev = !0, zv(pv, gv), hv[wv](gv))
        }
        ev && hv[mv]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((vv => "function" === typeof vv.toJSON ? vv.toJSON() : vv))
      }
      clone(vv) {
        let zv;
        return vv ? (zv = new Ph, zv.push(...this.items)) : zv = new Ph(...this.map((vv => vv[sv] ? vv.clone() : vv))), zv
      }
    }
    fz("array", {
      constructor: Ph
    });
    class hh {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(vv) {
        const zv = this.indexByKey[vv];
        return void 0 === zv ? void 0 : zv
      }
      assign(vv) {
        const zv = this.nextIndex++;
        return this.indexByKey[vv] = zv, this.keyByIndex.set(zv, vv), zv
      }
      snapshot(vv, zv) {
        (this.snapshots ??= new Map).set(vv, zv)
      }
      forgetSnapshot(vv) {
        this.snapshots?.delete(vv)
      }
      snapshotAt(vv) {
        return this.snapshots?.get(vv)
      }
      setIndex(vv, zv) {
        this.keyByIndex.set(vv, zv), this.indexByKey[zv] = vv
      }
      keyOf(vv) {
        return this.keyByIndex.get(vv)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [vv] of this.snapshots) {
            const zv = this.keyByIndex.get(vv);
            void 0 !== zv && (delete this.indexByKey[zv], this.keyByIndex.delete(vv))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Sh {
      [sv];
      [pv];
      childType;
      [Cv];
      $items = new Map;
      journal = new hh;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(vv) {
        (this._stream ??= nz()).maxPerTick = vv
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(vv) {
        (this._stream ??= nz()).priority = vv
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Nv] = qP;
      static[lv] = rP;
      static COLLECTION_KIND = MP;
      static[Tv](vv, zv, Pv) {
        if (!Pv || "string" === typeof vv[Cv]) return !0;
        const hv = vv[Wv](zv) ?? vv.journal.snapshotAt(zv);
        return Pv.isChangeTreeVisible(hv[sv])
      }
      static is(vv) {
        return void 0 !== vv.map
      }
      constructor(vv) {
        if (Object.defineProperty(this, sv, {
            value: new VP(this),
            enumerable: !1,
            writable: !0
          }), this[Cv] = void 0, vv)
          if (vv instanceof Map || vv instanceof Sh) vv.forEach(((vv, zv) => this.set(zv, vv)));
          else
            for (const zv in vv) this.set(zv, vv[zv])
      }
      static initializeForDecoder() {
        const vv = Object.create(Sh.prototype);
        return vv.$items = new Map, vv.journal = new hh, vv[Cv] = void 0, RP(vv), vv
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Sh
      }
      set(vv, zv) {
        if (void 0 === zv || null === zv) throw new Error(`MapSchema#set('${vv}', ${zv}): trying to set ${zv} value on '${vv}'.`);
        "object" === typeof zv && this[Cv] && uP(zv, this[Cv], this, vv), vv = vv.toString();
        const Pv = this[sv],
          hv = void 0 !== zv[sv],
          ev = this.journal;
        let gv, pv = ev.indexOf(vv);
        if (void 0 !== pv) {
          gv = Sv.REPLACE;
          const Pv = this.$items.get(vv);
          if (Pv === zv) return;
          hv && (gv = Sv.DELETE_AND_ADD, void 0 !== Pv && Pv[sv].root?.remove(Pv[sv])), void 0 !== ev.snapshotAt(pv) && ev.forgetSnapshot(pv)
        } else pv = ev.assign(vv), gv = Sv.ADD;
        return this.$items.set(vv, zv), gv === Sv.ADD && Pv.isStreamCollection ? void 0 !== Pv.root && Dz(this, Pv.root, pv) : Pv.change(pv, gv), hv && zv[sv].setParent(this, Pv.root, pv), this
      }
      get(vv) {
        return this.$items.get(vv)
      }
      getOrInsert(vv, zv) {
        return this.$items.has(vv) ? this.$items.get(vv) : (this.set(vv, zv), zv)
      }
      getOrInsertComputed(vv, zv) {
        if (this.$items.has(vv)) return this.$items.get(vv);
        const Pv = zv(vv);
        return this.set(vv, Pv), Pv
      }
      delete(vv) {
        if (!this.$items.has(vv)) return !1;
        const zv = this.journal.indexOf(vv),
          Pv = this.$items.get(vv),
          hv = this[sv];
        if (hv.isStreamCollection) {
          const Sv = hv.root;
          let ev = !1;
          return void 0 !== Sv && (ev = Kz(this, Sv, this[pv], zv)), void 0 !== Pv?.[sv] && Sv?.remove(Pv[sv]), this.$items.delete(vv), ev || this.journal.snapshot(zv, Pv), !0
        }
        return this.journal.snapshot(zv, Pv), hv.delete(zv), this.$items.delete(vv)
      }
      clear() {
        const vv = this[sv];
        vv.discard(), vv.forEachChild(((zv, Pv) => {
          vv.root?.remove(zv)
        })), this.journal.reset(), this.$items.clear(), vv.operation(Sv.CLEAR)
      } [Gv]() {
        const vv = this[sv];
        if (vv.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((vv => vv?.[Gv]?.())), this.$items.clear(), this.journal.reset(), vv.recycle(), this[pv] = void 0
      }
      has(vv) {
        return this.$items.has(vv)
      }
      forEach(vv) {
        this.$items.forEach(vv)
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
        this[sv].pause()
      }
      resumeTracking() {
        this[sv].resume()
      }
      untracked(vv) {
        return this[sv].untracked(vv)
      }
      get isTrackingPaused() {
        return this[sv].paused
      }
      setIndex(vv, zv) {
        this.journal.setIndex(vv, zv)
      }
      getIndex(vv) {
        return this.journal.keyOf(vv)
      } [Wv](vv) {
        const zv = this.journal.keyOf(vv);
        return void 0 !== zv ? this.$items.get(zv) : void 0
      } [wv](vv) {
        const zv = this.journal.keyOf(vv);
        void 0 !== zv && (this.$items.delete(zv), this.journal.keyByIndex.delete(vv))
      } [av](vv, zv, Pv) {
        let hv = null;
        if (this.$items.forEach(((Sv, ev) => {
            vv.has(ev) ? Pv(Sv) : ((hv ??= new Set).add(ev), zv(Sv, ev))
          })), null !== hv) {
          hv.forEach((vv => {
            this.$items.delete(vv), delete this.journal.indexByKey[vv]
          }));
          const vv = [];
          this.journal.keyByIndex.forEach(((zv, Pv) => {
            hv.has(zv) && vv.push(Pv)
          }));
          for (let zv = 0; zv < vv.length; zv++) this.journal.keyByIndex.delete(vv[zv])
        }
      } [cv]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(vv) {
        xz(this, vv)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (vv => {
          let [zv, Pv] = vv;
          return [zv, "function" === typeof Pv.toJSON ? Pv.toJSON() : Pv]
        })))
      }
      clone(vv) {
        let zv;
        return vv ? zv = Object.assign(new Sh, this) : (zv = new Sh, this.forEach(((vv, Pv) => {
          vv[sv] ? zv.set(Pv, vv.clone()) : zv.set(Pv, vv)
        }))), zv
      }
    }
    fz("map", {
      constructor: Sh
    });
    class eh {
      [sv];
      [pv];
      [Cv];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(vv) {
        (this._stream ??= nz()).maxPerTick = vv
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(vv) {
        (this._stream ??= nz()).priority = vv
      }
      static[Nv] = IP;
      static[lv] = rP;
      static COLLECTION_KIND = JP;
      static[Tv](vv, zv, Pv) {
        return !Pv || "string" === typeof vv[Cv] || Pv.isChangeTreeVisible((vv[Wv](zv) ?? vv.deletedItems[zv])[sv])
      }
      static is(vv) {
        return void 0 !== vv.collection
      }
      constructor(vv) {
        Object.defineProperty(this, sv, {
          value: new VP(this),
          enumerable: !1,
          writable: !0
        }), this[Cv] = void 0, vv && vv.forEach((vv => this.add(vv)))
      }
      static initializeForDecoder() {
        const vv = Object.create(eh.prototype);
        return vv.$items = new Map, vv.deletedItems = {}, vv.$refId = 0, vv[Cv] = void 0, RP(vv), vv
      }
      add(vv) {
        const zv = this.$refId++,
          Pv = this[sv];
        return this.$items.set(zv, vv), Pv.isStreamCollection ? void 0 !== Pv.root && Dz(this, Pv.root, zv) : Pv.change(zv), void 0 !== vv[sv] && vv[sv].setParent(this, Pv.root, zv), zv
      }
      at(vv) {
        const zv = Array.from(this.$items.keys())[vv];
        return this.$items.get(zv)
      }
      entries() {
        return this.$items.entries()
      }
      delete(vv) {
        const zv = this.$items.entries();
        let Pv, hv;
        for (;
          (hv = zv.next()) && !hv.done;)
          if (vv === hv.value[1]) {
            Pv = hv.value[0];
            break
          } if (void 0 === Pv) return !1;
        const Sv = this[sv];
        if (Sv.isStreamCollection) {
          const vv = Sv.root,
            zv = this.$items.get(Pv);
          return void 0 !== vv && Kz(this, vv, this[pv], Pv), void 0 !== zv?.[sv] && vv?.remove(zv[sv]), this.deletedItems[Pv] = zv, this.$items.delete(Pv)
        }
        return this.deletedItems[Pv] = Sv.delete(Pv), this.$items.delete(Pv)
      }
      clear() {
        const vv = this[sv];
        vv.discard(), vv.forEachChild(((zv, Pv) => {
          vv.root?.remove(zv)
        })), this.$items.clear(), vv.operation(Sv.CLEAR)
      } [Gv]() {
        const vv = this[sv];
        if (vv.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((vv => vv?.[Gv]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, vv.recycle(), this[pv] = void 0
      }
      has(vv) {
        return Array.from(this.$items.values()).some((zv => zv === vv))
      }
      forEach(vv) {
        this.$items.forEach(((zv, Pv, hv) => vv(zv, Pv, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[sv].pause()
      }
      resumeTracking() {
        this[sv].resume()
      }
      untracked(vv) {
        return this[sv].untracked(vv)
      }
      get isTrackingPaused() {
        return this[sv].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(vv, zv) {}
      getIndex(vv) {
        return vv
      } [Wv](vv) {
        return this.$items.get(vv)
      } [wv](vv) {
        this.$items.delete(vv)
      } [av](vv, zv, Pv) {
        let hv = null;
        if (this.$items.forEach(((Sv, ev) => {
            vv.has(ev) ? Pv(Sv) : ((hv ??= []).push(ev), zv(Sv, ev))
          })), null !== hv)
          for (let Sv = 0; Sv < hv.length; Sv++) this[wv](hv[Sv])
      } [cv]() {
        for (const vv in this.deletedItems) delete this.deletedItems[vv]
      }
      _dropView(vv) {
        xz(this, vv)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const vv = [];
        return this.forEach(((zv, Pv) => {
          vv.push("function" === typeof zv.toJSON ? zv.toJSON() : zv)
        })), vv
      }
      clone(vv) {
        let zv;
        return vv ? zv = Object.assign(new eh, this) : (zv = new eh, this.forEach((vv => {
          vv[sv] ? zv.add(vv.clone()) : zv.add(vv)
        }))), zv
      }
    }
    fz("collection", {
      constructor: eh
    });
    class gh {
      [sv];
      [pv];
      [Cv];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(vv) {
        (this._stream ??= nz()).maxPerTick = vv
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(vv) {
        (this._stream ??= nz()).priority = vv
      }
      static[Nv] = IP;
      static[lv] = rP;
      static COLLECTION_KIND = BP;
      static[Tv](vv, zv, Pv) {
        return !Pv || "string" === typeof vv[Cv] || Pv.isVisible((vv[Wv](zv) ?? vv.deletedItems[zv])[sv])
      }
      static is(vv) {
        return void 0 !== vv.set
      }
      constructor(vv) {
        Object.defineProperty(this, sv, {
          value: new VP(this),
          enumerable: !1,
          writable: !0
        }), this[Cv] = void 0, vv && vv.forEach((vv => this.add(vv)))
      }
      static initializeForDecoder() {
        const vv = Object.create(gh.prototype);
        return vv.$items = new Map, vv.deletedItems = {}, vv.$refId = 0, vv[Cv] = void 0, RP(vv), vv
      }
      add(vv) {
        if (this.has(vv)) return !1;
        const zv = this.$refId++,
          Pv = this[sv];
        return this.$items.set(zv, vv), Pv.isStreamCollection ? void 0 !== Pv.root && Dz(this, Pv.root, zv) : Pv.change(zv, Sv.ADD), void 0 !== vv[sv] && vv[sv].setParent(this, Pv.root, zv), zv
      }
      entries() {
        return this.$items.entries()
      }
      delete(vv) {
        const zv = this.$items.entries();
        let Pv, hv;
        for (;
          (hv = zv.next()) && !hv.done;)
          if (vv === hv.value[1]) {
            Pv = hv.value[0];
            break
          } if (void 0 === Pv) return !1;
        const Sv = this[sv];
        if (Sv.isStreamCollection) {
          const vv = Sv.root,
            zv = this.$items.get(Pv);
          return void 0 !== vv && Kz(this, vv, this[pv], Pv), void 0 !== zv?.[sv] && vv?.remove(zv[sv]), this.deletedItems[Pv] = zv, this.$items.delete(Pv)
        }
        return this.deletedItems[Pv] = Sv.delete(Pv), this.$items.delete(Pv)
      }
      clear() {
        const vv = this[sv];
        vv.discard(), this.$items.clear(), vv.operation(Sv.CLEAR)
      } [Gv]() {
        const vv = this[sv];
        if (vv.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((vv => vv?.[Gv]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, vv.recycle(), this[pv] = void 0
      }
      has(vv) {
        const zv = this.$items.values();
        let Pv, hv = !1;
        for (;
          (Pv = zv.next()) && !Pv.done;)
          if (vv === Pv.value) {
            hv = !0;
            break
          } return hv
      }
      forEach(vv) {
        this.$items.forEach(((zv, Pv, hv) => vv(zv, Pv, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[sv].pause()
      }
      resumeTracking() {
        this[sv].resume()
      }
      untracked(vv) {
        return this[sv].untracked(vv)
      }
      get isTrackingPaused() {
        return this[sv].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(vv, zv) {}
      getIndex(vv) {
        return vv
      } [Wv](vv) {
        return this.$items.get(vv)
      } [wv](vv) {
        this.$items.delete(vv)
      } [av](vv, zv, Pv) {
        let hv = null;
        if (this.$items.forEach(((Sv, ev) => {
            vv.has(ev) ? Pv(Sv) : ((hv ??= []).push(ev), zv(Sv, ev))
          })), null !== hv)
          for (let Sv = 0; Sv < hv.length; Sv++) this[wv](hv[Sv])
      } [cv]() {
        for (const vv in this.deletedItems) delete this.deletedItems[vv]
      }
      _dropView(vv) {
        xz(this, vv)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const vv = [];
        return this.forEach(((zv, Pv) => {
          vv.push("function" === typeof zv.toJSON ? zv.toJSON() : zv)
        })), vv
      }
      clone(vv) {
        let zv;
        return vv ? zv = Object.assign(new gh, this) : (zv = new gh, this.forEach((vv => {
          vv[sv] ? zv.add(vv.clone()) : zv.add(vv)
        }))), zv
      }
    }
    fz("set", {
      constructor: gh
    });
    class ph {
      [sv];
      [pv];
      [Cv];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(vv) {
        (this._stream ??= nz()).maxPerTick = vv
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(vv) {
        (this._stream ??= nz()).priority = vv
      }
      static $isStream = !0;
      static[Nv] = IP;
      static[lv] = rP;
      static COLLECTION_KIND = EP;
      static[Tv](vv, zv, Pv) {
        if (!Pv) return !0;
        const hv = vv[Wv](zv);
        return void 0 !== hv && Pv.isVisible(hv[sv])
      }
      static is(vv) {
        return vv && void 0 !== vv.stream
      }
      constructor() {
        Object.defineProperty(this, sv, {
          value: new VP(this),
          enumerable: !1,
          writable: !0
        }), this[Cv] = void 0
      }
      static initializeForDecoder() {
        const vv = Object.create(ph.prototype);
        return vv.$items = new Map, vv.$nextPosition = 0, vv._itemIndex = new Map, vv[Cv] = void 0, RP(vv), vv
      }
      add(vv) {
        if (this._itemIndex.has(vv)) return -1;
        const zv = this.$nextPosition++;
        this.$items.set(zv, vv), this._itemIndex.set(vv, zv);
        const Pv = this[sv].root;
        return void 0 !== vv[sv] && vv[sv].setParent(this, Pv, zv), void 0 !== Pv && Dz(this, Pv, zv), zv
      }
      remove(vv) {
        const zv = this._itemIndex.get(vv);
        if (void 0 === zv) return !1;
        this._itemIndex.delete(vv), this.$items.delete(zv);
        const Pv = this[sv].root;
        return void 0 !== Pv && (Kz(this, Pv, this[pv], zv), void 0 !== vv[sv] && Pv.remove(vv[sv])), !0
      }
      has(vv) {
        return this._itemIndex.has(vv)
      }
      clear() {
        const vv = this[sv].root;
        if (void 0 !== vv) {
          ! function(vv, zv, Pv) {
            const hv = vv._stream;
            if (void 0 !== hv) {
              hv.broadcastPending.clear();
              for (const vv of hv.sentBroadcast) hv.broadcastDeletes.add(vv);
              hv.sentBroadcast.clear(), zv.forEachActiveView((vv => {
                hv.pendingByView.get(vv.id)?.clear();
                const zv = hv.sentByView.get(vv.id);
                if (void 0 !== zv && zv.size > 0) {
                  let hv = vv.changes.get(Pv);
                  void 0 === hv && (hv = new Map, vv.changes.set(Pv, hv));
                  for (const vv of zv) hv.set(vv, Sv.DELETE);
                  zv.clear()
                }
              }))
            }
          }(this, vv, this[pv]);
          for (const zv of this.$items.values()) void 0 !== zv[sv] && vv.remove(zv[sv])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(vv) {
        for (const [zv, Pv] of this.$items) vv(Pv, zv, this)
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
      setIndex(vv, zv) {}
      getIndex(vv) {
        return vv
      } [Wv](vv) {
        return this.$items.get(vv)
      } [wv](vv) {
        const zv = this.$items.get(vv);
        void 0 !== zv && (this._itemIndex.delete(zv), this.$items.delete(vv))
      } [av]() {} [cv]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const vv = [];
        return this.forEach((zv => {
          vv.push("function" === typeof zv?.toJSON ? zv.toJSON() : zv)
        })), vv
      }
      clone(vv) {
        if (vv) {
          return Object.assign(new ph, this)
        }
        const zv = new ph;
        return zv.maxPerTick = this.maxPerTick, this.forEach((vv => {
          zv.add("function" === typeof vv?.clone ? vv.clone() : vv)
        })), zv
      }
      _dropView(vv) {
        xz(this, vv)
      }
      _unregister() {}
    }
    fz("stream", {
      constructor: ph
    });
    class dh {
      [fv] = !0;
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
      constructor(vv) {
        this._type = vv
      }
      default (vv) {
        return this._default = vv, this._hasDefault = !0, this
      }
      view(vv) {
        return this._view = vv ?? -1, this
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
        const vv = this._type;
        if (vv && "object" === typeof vv && void 0 !== vv.array) throw new Error(Yz);
        return this._stream = !0, this
      }
      priority(vv) {
        return this._streamPriority = vv, this
      }
      deprecated() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = vv, this
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

    function Nh(vv) {
      return null != vv && !0 === vv[fv]
    }

    function lh(vv) {
      return () => new dh(vv)
    }

    function Th(vv) {
      if (Nh(vv)) {
        const zv = vv._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof zv?`use the type name instead: t.array("${zv}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return vv
    }

    function Wh(vv) {
      return new dh({
        quantized: qz(vv)
      })
    }
    const wh = Object.freeze({
        string: lh("string"),
        number: lh("number"),
        boolean: lh("boolean"),
        int8: lh("int8"),
        uint8: lh("uint8"),
        int16: lh("int16"),
        uint16: lh("uint16"),
        int32: lh("int32"),
        uint32: lh("uint32"),
        int64: lh("int64"),
        uint64: lh("uint64"),
        float32: lh("float32"),
        float64: lh("float64"),
        bigint64: lh("bigint64"),
        biguint64: lh("biguint64"),
        ref: vv => new dh(vv),
        array: vv => new dh({
          array: Th(vv)
        }),
        map: vv => new dh({
          map: Th(vv)
        }),
        set: vv => new dh({
          set: Th(vv)
        }),
        collection: vv => new dh({
          collection: Th(vv)
        }),
        stream: vv => {
          const zv = new dh({
            stream: Th(vv)
          });
          return zv._stream = !0, zv
        },
        quantized: Wh,
        angle: vv => Wh({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: vv?.bits ?? 16
        })
      }),
      ah = -1;

    function sh(vv) {
      return Lz.register(vv), vv
    }

    function Ch() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ah;
      return function(zv, Pv) {
        const hv = oz.initialize(zv.constructor);
        oz.setTag(hv, Pv, vv)
      }
    }

    function ih(vv, zv) {
      const Pv = oz.initialize(vv.constructor);
      oz.setUnreliable(Pv, zv)
    }

    function ch(vv, zv) {
      const Pv = oz.initialize(vv.constructor);
      oz.setPatchOnly(Pv, zv)
    }

    function Gh(vv, zv) {
      const Pv = oz.initialize(vv.constructor);
      oz.setFullStateOnly(Pv, zv)
    }

    function mh(vv, zv) {
      return function(Pv, hv) {
        const Sv = Pv.constructor;
        if (!vv) throw new Error(`${Sv.name}: @type() reference provided for "${hv}" is undefined. Make sure you don't have any circular dependencies.`);
        vv = Mz(vv, `${Sv.name}.${hv}`), Lz.register(Sv);
        const ev = Object.getPrototypeOf(Sv)[Symbol.metadata],
          gv = oz.initialize(Sv);
        let pv = gv[hv];
        if (void 0 !== gv[pv]) {
          if (gv[pv].deprecated) return;
          if (void 0 !== gv[pv].type) {
            const vv = new Error(`@colyseus/schema: Duplicate '${hv}' definition on '${Sv.name}'.\nCheck @type() annotation`);
            throw new Error(`${vv.message} ${vv.stack.split("\n")[4].trim()}`)
          }
        } else pv = gv[Ov] ?? (ev && ev[Ov]) ?? -1, pv++;
        if (zv && zv.manual) oz.addField(gv, pv, hv, vv, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: zv,
            childType: Pv
          } = Hz(vv);
          oz.addField(gv, pv, hv, vv, fh(hv, pv, Pv, zv))
        }
        gv[Fv][hv] && Object.defineProperty(Pv, hv, gv[Fv][hv]), ("string" === typeof vv || Iz(vv)) && (gv[nv] || Object.defineProperty(gv, nv, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), gv[nv][pv] = "string" === typeof vv ? zz[vv] : Az(vv.quantized))
      }
    }
    const jh = {
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

    function fh(vv, zv, Pv, hv) {
      let ev;
      return ev = hv ? function(vv, zv, Pv, hv) {
        const ev = hv.constructor === Ph,
          gv = hv.constructor === Sh;
        return function(vv) {
          const hv = this[jv],
            pv = hv[zv];
          if (vv !== pv) {
            if (void 0 !== vv && null !== vv) {
              if (!ev || vv instanceof Ph)
                if (!gv || vv instanceof Sh) vv[Cv] = Pv;
                else {
                  const zv = new Sh;
                  if (zv[Cv] = Pv, vv instanceof Map) vv.forEach(((vv, Pv) => zv.set(Pv, vv)));
                  else
                    for (const Pv in vv) zv.set(Pv, vv[Pv]);
                  vv = zv
                }
              else {
                const zv = new Ph;
                zv[Cv] = Pv, zv.push(...vv), vv = zv
              }
              const hv = this[sv],
                Nv = this.constructor;
              void 0 !== pv && null !== pv && pv[sv] ? (hv.root?.remove(pv[sv]), Nv[dv](hv, zv, Sv.DELETE_AND_ADD)) : Nv[dv](hv, zv, Sv.ADD), vv[sv]?.setParent(this, hv.root, zv)
            } else void 0 !== pv && null !== pv && this[sv].delete(zv);
            hv[zv] = vv
          }
        }
      }(0, zv, Pv, hv) : "string" === typeof Pv ? function(vv, zv, Pv) {
        const hv = jh[Pv],
          ev = "string" === Pv,
          gv = "boolean" === Pv;
        return function(Pv) {
          const pv = this[jv],
            Nv = pv[zv];
          if (Pv !== Nv) {
            if (void 0 !== Pv && null !== Pv) {
              if (!gv && void 0 !== hv && typeof Pv !== hv && (!ev || null !== Pv)) {
                const zv = Pv && Pv.constructor ? ` (${Pv.constructor.name})` : "";
                throw new XP(`a '${hv}' was expected, but '${JSON.stringify(Pv)}'${zv} was provided in ${this.constructor.name}#${vv}`)
              }
              this.constructor[dv](this[sv], zv, Sv.ADD)
            } else void 0 !== Nv && null !== Nv && this[sv].delete(zv);
            pv[zv] = Pv
          }
        }
      }(vv, zv, Pv) : Iz(Pv) ? function(vv, zv, Pv) {
        return function(hv) {
          const ev = this[jv],
            gv = ev[zv];
          if (void 0 !== hv && null !== hv) {
            if ("number" !== typeof hv) throw new XP(`a 'number' was expected, but '${JSON.stringify(hv)}' was provided in ${this.constructor.name}#${vv}`);
            if ((hv = Zz(Pv, Qz(Pv, hv))) === gv) return;
            this.constructor[dv](this[sv], zv, Sv.ADD)
          } else {
            if (hv === gv) return;
            void 0 !== gv && null !== gv && this[sv].delete(zv)
          }
          ev[zv] = hv
        }
      }(vv, zv, Pv.quantized) : function(vv, zv, Pv) {
        return function(hv) {
          const ev = this[jv],
            gv = ev[zv];
          if (hv !== gv) {
            if (void 0 !== hv && null !== hv) {
              uP(hv, Pv, this, vv);
              const ev = this[sv],
                pv = this.constructor;
              void 0 !== gv && null !== gv && gv[sv] ? (ev.root?.remove(gv[sv]), pv[dv](ev, zv, Sv.DELETE_AND_ADD)) : pv[dv](ev, zv, Sv.ADD), hv[sv]?.setParent(this, ev.root, zv)
            } else void 0 !== gv && null !== gv && this[sv].delete(zv);
            ev[zv] = hv
          }
        }
      }(vv, zv, Pv), {
        get: function() {
          return this[jv][zv]
        },
        set: ev,
        enumerable: !0,
        configurable: !0
      }
    }

    function Fh() {
      let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(zv, Pv) {
        const hv = oz.initialize(zv.constructor);
        oz.setDeprecated(hv, Pv), vv && (hv[Fv] ??= {}, hv[Fv][Pv] = {
          get: function() {
            throw new Error(`${Pv} is deprecated.`)
          },
          set: function(vv) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(zv, Pv, hv[Fv][Pv]))
      }
    }
    let Yh = !1;

    function nh(vv, zv, Pv) {
      Yh || (Yh = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let hv in zv) mh(zv[hv], Pv)(vv.prototype, hv);
      return vv
    }

    function Oh(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Kh;
      if (null == vv || "object" !== typeof vv) throw new Error(`schema(): first argument must be a fields object (got ${typeof vv}).`);
      const hv = {},
        Sv = {},
        ev = {},
        gv = {},
        pv = (vv, zv) => {
          if (zv.hasDefault)((vv, zv) => {
            "function" === typeof zv ? gv[vv] = zv : zv && "function" === typeof zv.clone ? gv[vv] = () => zv.clone() : ev[vv] = zv
          })(vv, zv.default);
          else if (!zv.optional) {
            const Pv = function(vv) {
              if (vv && "object" === typeof vv) {
                if (void 0 !== vv.array) return () => new Ph;
                if (void 0 !== vv.map) return () => new Sh;
                if (void 0 !== vv.set) return () => new gh;
                if (void 0 !== vv.collection) return () => new eh;
                if (void 0 !== vv.stream) return () => new ph
              } else if ("function" === typeof vv && Kh.is(vv) && (!vv.prototype.initialize || 0 === vv.prototype.initialize.length)) return () => new vv
            }(zv.type);
            Pv && (gv[vv] = Pv)
          }
        },
        dv = {},
        Nv = [],
        lv = [],
        Tv = {},
        Wv = [],
        wv = [],
        av = {},
        sv = [];
      for (const jv in vv) {
        const Pv = vv[jv],
          ev = `schema(${zv?`'${zv}'`:""}): field '${jv}'`;
        if (Nh(Pv)) {
          const vv = Pv.toDefinition();
          if (vv.noSync) {
            if (void 0 !== vv.view || vv.unreliable || vv.patchOnly || vv.fullStateOnly || vv.stream) throw new Error(`${ev} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            pv(jv, vv);
            continue
          }
          if (vv.patchOnly && vv.fullStateOnly) throw new Error(`${ev} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const zv = Mz(vv.type, ev);
          if ("function" === typeof zv && !Kh.is(zv)) throw new Error(`${ev} is a synced ref to non-Schema class '${zv.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          hv[jv] = zv, void 0 !== vv.view && (dv[jv] = vv.view), vv.unreliable && Nv.push(jv), vv.patchOnly && lv.push(jv), vv.deprecated && (Tv[jv] = vv.deprecatedThrows), vv.fullStateOnly && Wv.push(jv), vv.stream && wv.push(jv), void 0 !== vv.streamPriority && (av[jv] = vv.streamPriority), vv.optional && sv.push(jv), pv(jv, vv)
        } else {
          if ("function" !== typeof Pv) throw new Error(`${ev} must be a t.* builder, Schema subclass, or method (got ${typeof Pv}).`);
          Kh.is(Pv) ? (hv[jv] = Pv, Pv.prototype.initialize && 0 !== Pv.prototype.initialize.length || (gv[jv] = () => new Pv)) : Sv[jv] = Pv
        }
      }
      const Cv = vv => {
          for (const zv in ev) vv[zv] = ev[zv];
          for (const zv in gv) vv[zv] = gv[zv]()
        },
        iv = () => {
          const vv = {};
          return Cv(vv), vv
        },
        cv = "function" === typeof Sv.initialize,
        Gv = Sv.initialize ?? Pv._initialize,
        mv = class extends Pv {
          constructor() {
            for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
            const Sv = zv[0];
            void 0 === Sv ? (super(), Cv(this)) : super(Object.assign(iv(), cv ? (vv => {
              const zv = Object.keys(hv),
                Pv = {};
              for (const hv in vv) zv.includes(hv) || (Pv[hv] = vv[hv]);
              return Pv
            })(Sv) : Sv)), Gv && new.target === mv && Gv.apply(this, zv)
          }
        };
      zv && Object.defineProperty(mv, "name", {
        value: zv
      }), oz.setFields(mv, hv), mv._getDefaultValues = iv, mv._initialize = Gv, Object.assign(mv.prototype, Sv);
      for (const jv in dv) Ch(dv[jv])(mv.prototype, jv);
      for (const jv of Nv) ih(mv.prototype, jv);
      for (const jv of lv) ch(mv.prototype, jv);
      for (const jv in Tv) Fh(Tv[jv])(mv.prototype, jv);
      if (Wv.length > 0 || wv.length > 0) {
        const vv = mv[Symbol.metadata];
        for (const zv of Wv) oz.setFullStateOnly(vv, zv);
        for (const zv of wv) oz.setStream(vv, zv);
        for (const zv in av) oz.setStreamPriority(vv, zv, av[zv])
      }
      if (sv.length > 0) {
        const vv = mv[Symbol.metadata];
        for (const zv of sv) vv[vv[zv]].optional = !0
      }
      return mv.extend = (vv, zv) => Oh(vv, zv, mv), mv
    }

    function Dh(vv) {
      const zv = vv[sv].root,
        Pv = {
          ops: {},
          refs: []
        };
      let hv = zv.changes.next;
      for (; hv;) {
        const vv = hv.changeTree;
        void 0 !== vv ? (Pv.refs.push(`refId#${vv.ref[pv]}`), vv.forEach(((vv, zv) => {
          if (vv < 0 || !zv) return;
          const hv = Sv[zv];
          Pv.ops[hv] || (Pv.ops[hv] = 0), Pv.ops[hv]++
        })), hv = hv.next) : hv = hv.next
      }
      return Pv
    }
    class Kh {
      static[Nv] = tP;
      static[lv] = bP;
      [pv];
      [jv];
      static initialize(vv) {
        Object.defineProperty(vv, sv, {
          value: new VP(vv),
          enumerable: !1,
          writable: !0
        }), vv[jv] = []
      }
      static initializeForDecoder() {
        const vv = Object.create(this.prototype);
        return RP(vv), vv[jv] = [], vv
      }
      static reset(vv) {
        const zv = vv?.[sv];
        if (void 0 === zv || "function" !== typeof zv.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== zv.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${vv.constructor.name}) with multiple parents.`);
        vv[Gv]()
      } [Gv]() {
        const vv = this.constructor[Symbol.metadata],
          zv = vv?.[Dv] ?? [],
          Pv = this[jv];
        for (let hv = 0; hv < zv.length; hv++) {
          const vv = Pv[zv[hv]];
          vv?.[Gv]?.()
        }
        this[sv].recycle(), this[pv] = void 0
      }
      static is(vv) {
        const zv = vv[Symbol.metadata];
        return "object" === typeof zv && null !== zv
      }
      static isSchema(vv) {
        return "function" === typeof vv?.assign
      }
      static[dv](vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sv.ADD;
        vv.change(zv, Pv)
      }
      static[Tv](vv, zv, Pv) {
        const hv = vv.constructor[Symbol.metadata],
          Sv = hv[zv]?.tag;
        return void 0 === Pv ? void 0 === Sv : void 0 === Sv || (Sv === ah ? Pv.isChangeTreeVisible(vv[sv]) : Pv.hasTagOnTree(vv[sv], Sv))
      }
      constructor(vv) {
        Kh.initialize(this), vv && Kh.assignProps(this, vv)
      }
      assign(vv) {
        return Kh.assignProps(this, vv), this
      }
      static assignProps(vv, zv) {
        const Pv = vv.constructor[Symbol.metadata];
        if (Pv && void 0 !== Pv[Ov])
          for (let Sv = 0; Sv <= Pv[Ov]; Sv++) {
            const hv = Pv[Sv];
            if (!hv) continue;
            const ev = zv[hv.name];
            void 0 !== ev && (vv[hv.name] = ev)
          }
        const hv = Object.keys(zv);
        for (let Sv = 0; Sv < hv.length; Sv++) {
          const ev = hv[Sv];
          Pv && void 0 !== Pv[ev] || (vv[ev] = zv[ev])
        }
      }
      restore(vv) {
        const zv = this.constructor[Symbol.metadata];
        for (const Pv in zv) {
          const hv = zv[Pv],
            Sv = hv.name,
            ev = hv.type,
            gv = vv[Sv];
          if (void 0 !== gv && null !== gv)
            if ("string" === typeof ev) this[Sv] = gv;
            else if (Kh.is(ev)) {
            const vv = new ev;
            vv.restore(gv), this[Sv] = vv
          } else if ("object" === typeof ev) {
            const vv = Object.keys(ev)[0],
              zv = ev[vv];
            if ("map" === vv) {
              const vv = this[Sv];
              for (const Pv in gv)
                if (Kh.is(zv)) {
                  const hv = new zv;
                  hv.restore(gv[Pv]), vv.set(Pv, hv)
                } else vv.set(Pv, gv[Pv])
            } else if ("array" === vv) {
              const vv = this[Sv];
              for (let Pv = 0; Pv < gv.length; Pv++)
                if (Kh.is(zv)) {
                  const hv = new zv;
                  hv.restore(gv[Pv]), vv.push(hv)
                } else vv.push(gv[Pv])
            }
          }
        }
        return this
      }
      setDirty(vv, zv) {
        const Pv = this.constructor[Symbol.metadata];
        this[sv].change(Pv[Pv[vv]].index, zv)
      }
      pauseTracking() {
        this[sv].pause()
      }
      resumeTracking() {
        this[sv].resume()
      }
      untracked(vv) {
        return this[sv].untracked(vv)
      }
      get isTrackingPaused() {
        return this[sv].paused
      }
      clone() {
        const vv = Object.create(this.constructor.prototype);
        Kh.initialize(vv);
        const zv = this.constructor[Symbol.metadata];
        for (const Pv in zv) {
          const hv = zv[Pv].name;
          "object" === typeof this[hv] && "function" === typeof this[hv]?.clone ? vv[hv] = this[hv].clone() : vv[hv] = this[hv]
        }
        return vv
      }
      toJSON() {
        const vv = {},
          zv = this.constructor[Symbol.metadata];
        for (const Pv in zv) {
          const hv = zv[Pv],
            Sv = hv.name;
          hv.deprecated || null === this[Sv] || "undefined" === typeof this[Sv] || (vv[Sv] = "function" === typeof this[Sv].toJSON ? this[Sv].toJSON() : this[Sv])
        }
        return vv
      }
      discardAllChanges() {
        this[sv].discardAll()
      } [Wv](vv) {
        return this[this.constructor[Symbol.metadata][vv].name]
      } [wv](vv) {
        this[this.constructor[Symbol.metadata][vv].name] = void 0
      }
      static debugRefIds(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 ? arguments[3] : void 0,
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const ev = zv ? ` - ${JSON.stringify(vv.toJSON())}` : "",
          gv = vv[sv],
          dv = vv[pv],
          Nv = hv ? hv.root.refCount[dv] : gv.refCount,
          lv = Nv > 1 ? ` [\xd7${Nv}]` : "";
        let Tv = `${function(vv){return new Array(vv).fill(0).map(((zv,Pv)=>Pv===vv-1?"\u2514\u2500 ":"   ")).join("")}(Pv)}${Sv}${vv.constructor.name} (refId: ${dv})${lv}${ev}\n`;
        return gv.forEachChild(((Sv, ev) => {
          let gv = ev;
          "number" === typeof ev && vv.$indexes && (gv = vv.$indexes.get(ev) ?? ev);
          const pv = void 0 !== vv.forEach && void 0 !== gv ? `["${gv}"]: ` : "";
          Tv += this.debugRefIds(Sv.ref, zv, Pv + 1, hv, pv)
        })), Tv
      }
      static debugRefIdEncodingOrder(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const Pv = [],
          hv = vv[sv];
        if ("changes" === zv) {
          let vv = hv.root.changes?.next;
          for (; vv;) vv.changeTree && Pv.push(vv.changeTree.ref[pv]), vv = vv.next;
          return Pv
        }
        const Sv = "allFilteredChanges" === zv,
          ev = new Set,
          gv = vv => {
            ev.has(vv) || (ev.add(vv), vv.isFiltered === Sv && Pv.push(vv.ref[pv]), vv.forEachChild(((vv, zv) => gv(vv))))
          };
        return gv(hv), Pv
      }
      static debugRefIdsFromDecoder(vv) {
        return this.debugRefIds(vv.state, !1, 0, vv)
      }
      static debugChanges(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = vv[sv],
          hv = zv ? "allChanges" : "changes";
        let ev = `${vv.constructor.name} (${vv[pv]}) -> .${hv}:\n`;
        return zv ? Pv.forEachLive((vv => {
          ev += `- [${vv}]: ADD (${JSON.stringify(Pv.getValue(Number(vv),!0))})\n`
        })) : Pv.forEach(((vv, zv) => {
          vv < 0 || !zv || (ev += `- [${vv}]: ${Sv[zv]} (${JSON.stringify(Pv.getValue(Number(vv),!1))})\n`)
        })), ev
      }
    }
    ev(Kh);
    const Vh = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Uh {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const vv = {};
        for (const zv in this.changeTrees) vv[zv] = this.changeTrees[zv].refCount;
        return vv
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
      enqueueFilterRefresh(vv) {
        this.types.hasFilters && (vv.flags & DP || (vv.flags |= DP, this.pendingFilterRefresh.push(vv)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(vv) {
        this._freeViewIds.push(vv)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(vv) {
        this.activeViews.set(vv.id, new WeakRef(vv))
      }
      unregisterView(vv) {
        this.activeViews.delete(vv.id);
        const zv = vv.id;
        for (const Pv of this.streamTrees) Pv._dropView(zv)
      }
      forEachActiveView(vv) {
        for (const [zv, Pv] of this.activeViews) {
          const hv = Pv.deref();
          if (void 0 !== hv) vv(hv);
          else {
            this.activeViews.delete(zv);
            for (const vv of this.streamTrees) vv._dropView(zv)
          }
        }
      }
      registerStream(vv) {
        this.streamTrees.add(vv)
      }
      unregisterStream(vv) {
        this.streamTrees.delete(vv)
      }
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = vv, this.nextUniqueId = zv
      }
      add(vv) {
        const zv = vv.ref;
        void 0 === zv[pv] && (Vh.value = this.nextUniqueId++, Object.defineProperty(zv, pv, Vh));
        const Pv = zv[pv],
          hv = void 0 === this.changeTrees[Pv];
        hv && (this.changeTrees[Pv] = vv), vv.needsRestage && (vv.needsRestage = !1, vv.forEachLiveWithCtx(vv, PP));
        const Sv = hv ? 0 : vv.refCount;
        return vv.refCount = Sv + 1, Sv > 0 && this.enqueueFilterRefresh(vv), hv
      }
      remove(vv) {
        const zv = vv.refCount - 1;
        if (zv <= 0) {
          if (vv.root = void 0, delete this.changeTrees[vv.ref[pv]], vv.isStreamCollection) {
            const zv = vv.ref;
            zv._unregister?.(), this.unregisterStream(zv)
          }
          this.removeFromQueue(vv), this.removeFromUnreliableQueue(vv), vv.refCount = 0, vv.needsRestage = !0, vv.forEachChild(((zv, Pv) => {
            zv.removeParent(vv.ref) && (void 0 === zv.parentRef || zv.refCount > 0 ? this.remove(zv) : this.moveNextToParent(zv))
          }))
        } else vv.refCount = zv, this.enqueueFilterRefresh(vv), this.recursivelyMoveNextToParent(vv);
        return zv
      }
      recursivelyMoveNextToParent(vv) {
        this.moveNextToParent(vv), vv.forEachChild(((vv, zv) => this.recursivelyMoveNextToParent(vv)))
      }
      moveNextToParent(vv) {
        vv.changesNode && this._moveNextToParentInList(this.changes, vv, vv.changesNode, "changesNode"), vv.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, vv, vv.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(vv, zv, Pv, hv) {
        const Sv = zv.parent;
        if (!Sv || !Sv[sv]) return;
        const ev = Sv[sv][hv];
        ev && ev !== Pv && (Pv.position > ev.position || (Pv.prev ? Pv.prev.next = Pv.next : vv.next = Pv.next, Pv.next ? Pv.next.prev = Pv.prev : vv.tail = Pv.prev, Pv.prev = vv.tail, Pv.next = void 0, vv.tail.next = Pv, vv.tail = Pv, Pv.position = vv.nextPosition++))
      }
      enqueueChangeTree(vv) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv.changesNode) || (vv.changesNode = this._appendToList(this.changes, vv))
      }
      enqueueUnreliable(vv) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv.unreliableChangesNode) || (vv.unreliableChangesNode = this._appendToList(this.unreliableChanges, vv))
      }
      _appendToList(vv, zv) {
        const Pv = this._nodePool;
        let hv;
        return Pv.length > 0 ? (hv = Pv.pop(), hv.changeTree = zv, hv.next = void 0, hv.prev = void 0) : hv = {
          changeTree: zv,
          next: void 0,
          prev: void 0,
          position: 0
        }, vv.next ? (hv.prev = vv.tail, vv.tail.next = hv, vv.tail = hv) : (vv.nextPosition = 0, vv.next = hv, vv.tail = hv), hv.position = vv.nextPosition++, hv
      }
      releaseNode(vv) {
        vv.changeTree = void 0, vv.prev = void 0, vv.next = void 0, this._nodePool.push(vv)
      }
      removeFromQueue(vv) {
        return this._removeNode(this.changes, vv, vv.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(vv) {
        return this._removeNode(this.unreliableChanges, vv, vv.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(vv, zv, Pv, hv) {
        return !(!Pv || Pv.changeTree !== zv) && (Pv.prev ? Pv.prev.next = Pv.next : vv.next = Pv.next, Pv.next ? Pv.next.prev = Pv.prev : vv.tail = Pv.prev, zv[hv] = void 0, this.releaseNode(Pv), !0)
      }
    }

    function Rh(vv, zv) {
      if (-1 === zv || zv >= vv.length) return !1;
      const Pv = vv.length - 1;
      for (let hv = zv; hv < Pv; hv++) vv[hv] = vv[hv + 1];
      return vv.length = Pv, !0
    }

    function xh(vv, zv, Pv) {
      const hv = ~Pv,
        Sv = vv.changeTrees;
      for (const ev in Sv) {
        const vv = Sv[ev],
          Pv = vv.visibleViews;
        void 0 !== Pv && zv < Pv.length && (Pv[zv] &= hv);
        const gv = vv.subscribedViews;
        void 0 !== gv && zv < gv.length && (gv[zv] &= hv);
        const pv = vv.tagViews;
        void 0 !== pv && pv.forEach((vv => {
          zv < vv.length && (vv[zv] &= hv)
        }))
      }
    }
    const th = new FinalizationRegistry((vv => {
      let {
        root: zv,
        id: Pv,
        slot: hv,
        bit: Sv
      } = vv;
      xh(zv, hv, Sv), zv.activeViews.delete(Pv);
      for (const ev of zv.streamTrees) ev._dropView(Pv);
      zv.releaseViewId(Pv)
    }));

    function qh(vv) {
      if (void 0 === vv) return "undefined";
      if (null === vv) return "null";
      const zv = typeof vv;
      return "string" === zv ? JSON.stringify(vv.length > 30 ? `${vv.slice(0,30)}\u2026` : vv) : "object" !== zv && "function" !== zv ? `${zv} ${String(vv)}` : Array.isArray(vv) ? `Array(${vv.length})` : vv.constructor?.name ?? "Object"
    }
    class Ih {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = vv, vv && (this.items = [])
      }
      _bindRoot(vv) {
        void 0 === this._root && (this._root = vv, this.id = vv.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), vv.registerView(this), th.register(this, {
          root: vv,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), xh(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), th.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(vv) {
        const zv = vv.visibleViews,
          Pv = this._slot;
        return void 0 !== zv && Pv < zv.length && 0 !== (zv[Pv] & this._bit)
      }
      markVisible(vv) {
        const zv = this._slot;
        let Pv = vv.visibleViews;
        for (void 0 === Pv && (Pv = vv.visibleViews = []); Pv.length <= zv;) Pv.push(0);
        Pv[zv] |= this._bit
      }
      unmarkVisible(vv) {
        const zv = vv.visibleViews;
        if (void 0 === zv) return;
        const Pv = this._slot;
        Pv < zv.length && (zv[Pv] &= ~this._bit)
      }
      isSubscribed(vv) {
        const zv = vv.subscribedViews,
          Pv = this._slot;
        return void 0 !== zv && Pv < zv.length && 0 !== (zv[Pv] & this._bit)
      }
      _setSubscribed(vv) {
        const zv = this._slot;
        let Pv = vv.subscribedViews;
        for (void 0 === Pv && (Pv = vv.subscribedViews = []); Pv.length <= zv;) Pv.push(0);
        Pv[zv] |= this._bit
      }
      _clearSubscribed(vv) {
        const zv = vv.subscribedViews;
        if (void 0 === zv) return;
        const Pv = this._slot;
        Pv < zv.length && (zv[Pv] &= ~this._bit)
      }
      hasTagOnTree(vv, zv) {
        const Pv = vv.tagViews;
        if (void 0 === Pv) return !1;
        const hv = this._slot,
          Sv = this._bit;
        for (let ev = zv; 0 !== ev; ev &= ev - 1) {
          const vv = Pv.get(ev & -ev);
          if (void 0 !== vv && hv < vv.length && 0 !== (vv[hv] & Sv)) return !0
        }
        return !1
      }
      addTag(vv, zv) {
        if (zv === ah) return;
        let Pv = vv.tagViews;
        void 0 === Pv && (Pv = vv.tagViews = new Map);
        const hv = this._slot,
          Sv = this._bit;
        for (let ev = zv; ev > 0; ev &= ev - 1) {
          const vv = ev & -ev;
          let zv = Pv.get(vv);
          for (void 0 === zv && (zv = [], Pv.set(vv, zv)); zv.length <= hv;) zv.push(0);
          zv[hv] |= Sv
        }
      }
      removeTag(vv, zv) {
        if (zv === ah) return;
        const Pv = vv.tagViews;
        if (void 0 === Pv) return;
        const hv = this._slot,
          Sv = ~this._bit;
        for (let ev = zv; ev > 0; ev &= ev - 1) {
          const vv = Pv.get(ev & -ev);
          void 0 !== vv && hv < vv.length && (vv[hv] &= Sv)
        }
      }
      removeAllTagsOnTree(vv) {
        const zv = vv.tagViews;
        if (void 0 === zv) return;
        const Pv = this._slot,
          hv = ~this._bit;
        zv.forEach((vv => {
          Pv < vv.length && (vv[Pv] &= hv)
        }))
      }
      add(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ah,
          Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(vv, zv, Pv, !1)
      }
      _addImmediate(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ah;
        this._add(vv, zv, !0, !0)
      }
      _add(vv, zv, Pv, hv) {
        const ev = vv?.[sv];
        if (!ev) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${qh(vv)}`), !1;
        const gv = ev.parent;
        if (!gv && 0 !== vv[pv]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${ev.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== ev.root && this._bindRoot(ev.root);
        const dv = gv?.[sv];
        if (!hv && dv?.isStreamCollection) return Rz(gv, this.id, ev.parentIndex), !0;
        const Nv = vv.constructor[Symbol.metadata],
          lv = this.isVisible(ev);
        if (!this.iterable || !Pv || lv && -1 !== this.items.indexOf(vv) || this.items.push(vv), this.markVisible(ev), Pv && gv && this.addParentOf(ev, zv), !hv && ev.isStreamCollection) return !0;
        if (zv === ah && ev.isNew) return this._markSubtreeVisible(ev, zv), !1;
        let Tv = this.changes.get(vv[pv]);
        void 0 === Tv && (Tv = new Map, this.changes.set(vv[pv], Tv));
        let Wv = !1;
        const wv = ev.encDescriptor.tags;
        if (ev.forEachChild(((vv, Pv) => {
            const hv = wv[Pv];
            if (void 0 !== hv) {
              if (!(hv === ah || zv !== ah && 0 !== (hv & zv))) return
            }
            this.add(vv.ref, zv, !1) && (Wv = !0)
          })), zv !== ah) {
          this.addTag(ev, zv);
          const vv = Nv?.[Vv];
          if (void 0 !== vv)
            for (let Pv = zv; Pv > 0; Pv &= Pv - 1) vv[Pv & -Pv]?.forEach((vv => {
              ev.getChange(vv) !== Sv.DELETE && Tv.set(vv, Sv.ADD)
            }))
        }
        if ((zv === ah || !lv) && (!ev.isNew || Wv))
          if (ev.isArray && "string" !== typeof ev.refTarget[Cv]) ev.refTarget.items.length > 0 && (Tv.set(-1, Sv.ADD), Wv = !0);
          else {
            const vv = ev.encDescriptor.tags;
            ev.forEachLive((Pv => {
              const hv = vv[Pv];
              (void 0 === hv || hv === ah || zv !== ah && 0 !== (hv & zv)) && (Tv.set(Pv, Sv.ADD), Wv = !0)
            }))
          } return Wv
      }
      _markSubtreeVisible(vv, zv) {
        const Pv = vv.encDescriptor.tags;
        vv.forEachChild(((vv, hv) => {
          const Sv = Pv[hv];
          if (void 0 !== Sv) {
            if (!(Sv === ah || zv !== ah && 0 !== (Sv & zv))) return
          }
          vv.isNew ? (this.markVisible(vv), this._markSubtreeVisible(vv, zv)) : this._add(vv.ref, zv, !1, !1)
        }))
      }
      addParentOf(vv, zv) {
        const Pv = vv.parent[sv],
          hv = vv.parentIndex;
        this.isVisible(Pv) || this.markVisible(Pv);
        const ev = Pv.parent?.[sv];
        if (ev && this.addParentOf(Pv, zv), Pv.hasFilteredFields && Pv.getChange(hv) !== Sv.DELETE) {
          let ev = this.changes.get(Pv.ref[pv]);
          void 0 === ev && (ev = new Map, this.changes.set(Pv.ref[pv], ev));
          const gv = Pv.encDescriptor.tags[hv];
          void 0 !== gv && gv !== ah && 0 !== (gv & zv) && this.addTag(Pv, zv), ev.set(Pv.isArray ? vv : hv, Sv.ADD)
        }
      }
      _touchAncestorsOf(vv) {
        let zv = vv.parent?.[sv];
        if (void 0 === zv) return;
        const Pv = [];
        for (; void 0 !== zv;) {
          if (zv.hasFilteredFields) {
            const vv = zv.ref[pv];
            if (this.changes.has(vv)) break;
            Pv.push(zv)
          }
          zv = zv.parent?.[sv]
        }
        for (let hv = Pv.length - 1; hv >= 0; hv--) this.changes.set(Pv[hv].ref[pv], new Map)
      }
      remove(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ah,
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = vv?.[sv];
        if (!hv) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${qh(vv)}`), this;
        const ev = hv.parent?.[sv];
        if (ev?.isStreamCollection) return this.unmarkVisible(hv), this.iterable && !Pv && Rh(this.items, this.items.indexOf(vv)),
          function(vv, zv, Pv, hv, ev) {
            const gv = vv._stream;
            if (void 0 === gv) return !1;
            const pv = gv.pendingByView.get(zv);
            if (pv?.has(hv)) return pv.delete(hv), !1;
            const dv = gv.sentByView.get(zv);
            if (dv?.has(hv)) {
              dv.delete(hv);
              let vv = ev.get(Pv);
              return void 0 === vv && (vv = new Map, ev.set(Pv, vv)), vv.set(hv, Sv.DELETE), !0
            }
          }(hv.parent, this.id, hv.parent[pv], hv.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(hv), this;
        if (hv.isStreamCollection) {
          this.unmarkVisible(hv), this.iterable && !Pv && Rh(this.items, this.items.indexOf(vv));
          const zv = hv.ref,
            ev = zv._stream;
          if (void 0 !== ev) {
            ev.pendingByView.get(this.id)?.clear();
            const vv = ev.sentByView.get(this.id);
            if (void 0 !== vv && vv.size > 0) {
              const Pv = zv[pv];
              let hv = this.changes.get(Pv);
              void 0 === hv && (hv = new Map, this.changes.set(Pv, hv));
              for (const zv of vv) hv.set(zv, Sv.DELETE);
              vv.clear()
            }
          }
          return this
        }
        this.unmarkVisible(hv), this.iterable && !Pv && Rh(this.items, this.items.indexOf(vv));
        const gv = hv.ref,
          dv = gv.constructor[Symbol.metadata],
          Nv = gv[pv];
        this._touchAncestorsOf(hv);
        let lv = this.changes.get(Nv);
        if (void 0 === lv && (lv = new Map, this.changes.set(Nv, lv)), zv === ah) {
          const vv = hv.parent;
          if (vv && !oz.isValidInstance(vv) && hv.isFiltered) {
            const zv = ev.isArray ? hv : hv.parentIndex,
              Pv = vv[pv];
            let gv = this.changes.get(Pv);
            void 0 === gv ? (gv = new Map, this.changes.set(Pv, gv)) : gv.get(zv) === Sv.ADD && this._dropPendingEntries(hv), gv.set(zv, Sv.DELETE), this._recursiveDeleteVisibleChangeTree(hv)
          } else dv?.[Kv]?.forEach((vv => this._removeViewField(hv, lv, vv)))
        } else {
          const vv = dv?.[Vv];
          if (void 0 !== vv)
            for (let Pv = zv; Pv > 0; Pv &= Pv - 1) vv[Pv & -Pv]?.forEach((vv => this._removeViewField(hv, lv, vv)))
        }
        return void 0 === zv ? this.removeAllTagsOnTree(hv) : this.removeTag(hv, zv), this
      }
      has(vv) {
        return this.isVisible(vv[sv])
      }
      hasTag(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ah;
        return this.hasTagOnTree(vv[sv], zv)
      }
      subscribe(vv, zv) {
        const Pv = vv?.[sv];
        if (!Pv) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${qh(vv)}`), this;
        if (void 0 === this._root && void 0 !== Pv.root && this._bindRoot(Pv.root), void 0 !== zv)
          if (Pv.isStreamCollection) {
            const Pv = Oz(vv);
            null === zv ? Pv.priorityByView?.delete(this.id) : (Pv.priorityByView ??= new Map).set(this.id, zv)
          } else {
            const zv = vv?.constructor?.name ?? "collection",
              hv = Pv.parent;
            if (void 0 === hv) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${zv} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const vv = hv?.constructor?.[Symbol.metadata]?.[Pv.parentIndex]?.name,
                Sv = vv ? `${hv.constructor.name}#${vv}` : zv;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Sv} is a ${zv}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(Pv)) return this;
        const hv = void 0 !== Pv.parent && !this.isVisible(Pv);
        if (hv ? (this.addParentOf(Pv, ah), this._add(vv, ah, !1, !1)) : this.markVisible(Pv), this._setSubscribed(Pv), Pv.isStreamCollection) {
          const zv = vv;
          Pv.forEachChild(((vv, Pv) => {
            Rz(zv, this.id, Pv)
          }))
        } else hv || Pv.forEachChild((vv => {
          this.markVisible(vv)
        }));
        return this
      }
      unsubscribe(vv) {
        const zv = vv?.[sv];
        if (!zv) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${qh(vv)}`), this;
        if (!this.isSubscribed(zv)) return this;
        this._clearSubscribed(zv);
        const Pv = zv.ref[pv];
        if (zv.isStreamCollection) {
          const zv = vv._stream;
          if (void 0 !== zv) {
            zv.pendingByView.get(this.id)?.clear();
            const vv = zv.sentByView.get(this.id);
            if (void 0 !== vv && vv.size > 0) {
              let zv = this.changes.get(Pv);
              void 0 === zv && (zv = new Map, this.changes.set(Pv, zv));
              for (const Pv of vv) zv.set(Pv, Sv.DELETE);
              vv.clear()
            }
          }
        } else {
          const vv = zv.isArray;
          let hv = this.changes.get(Pv);
          zv.forEachChild(((zv, ev) => {
            void 0 === hv && (hv = new Map, this.changes.set(Pv, hv)), hv.set(vv ? zv : ev, Sv.DELETE), this.unmarkVisible(zv)
          }))
        }
        return this.unmarkVisible(zv), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let vv = 0, zv = this.items.length; vv < zv; vv++) this.remove(this.items[vv], ah, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(vv) {
        let zv = this.isVisible(vv);
        if (!zv && vv.isVisibilitySharedWithParent)
          if (this.isVisible(vv.parent[sv])) this.markVisible(vv), zv = !0;
          else
            for (let Pv = vv.extraParents; void 0 !== Pv; Pv = Pv.next) {
              const hv = Pv.ref[sv];
              if (hv.isFiltered && this.isVisible(hv)) {
                this.markVisible(vv), zv = !0;
                break
              }
            }
        return zv
      }
      _recursiveDeleteVisibleChangeTree(vv) {
        vv.forEachChild((vv => {
          this.unmarkVisible(vv), this._recursiveDeleteVisibleChangeTree(vv)
        }))
      }
      _dropPendingEntries(vv) {
        this.changes.delete(vv.ref[pv]), vv.forEachChild((vv => this._dropPendingEntries(vv)))
      }
      _removeViewField(vv, zv, Pv) {
        const hv = zv.get(Pv) === Sv.ADD;
        zv.set(Pv, Sv.DELETE);
        const ev = vv.ref[vv.encDescriptor.names[Pv]],
          gv = ev?.[sv];
        gv && (this.unmarkVisible(gv), this._recursiveDeleteVisibleChangeTree(gv), hv && this._dropPendingEntries(gv))
      }
    }

    function Qh(vv) {
      vv.structSwitchEmitted || (vv.shouldEmitSwitch && (vv.buffer[vv.it.offset++] = 255, zz.number(vv.buffer, vv.ref[pv], vv.it)), vv.structSwitchEmitted = !0)
    }

    function Zh(vv, zv) {
      Hh(vv, zv, Sv.ADD)
    }

    function Ah(vv, zv) {
      if (zv._fullSyncGen === vv.gen) return;
      zv._fullSyncGen = vv.gen;
      if (!vv.hasView || vv.view.isChangeTreeVisible(zv)) {
        const Pv = zv.encDescriptor;
        vv.changeTree = zv, vv.ref = zv.ref, vv.encoder = Pv.encoder, vv.filter = Pv.filter, vv.metadata = Pv.metadata, vv.treeIsFiltered = zv.isFiltered, vv.isSchema = Pv.isSchema, vv.filterBitmask = Pv.filterBitmask, vv.tags = Pv.tags, vv.structSwitchEmitted = !1, vv.shouldEmitSwitch = vv.hasView || vv.it.offset > vv.initialOffset || zv !== vv.rootChangeTree, zv.isArray && zv.collDirty.size > 0 && (zv.flags |= 512), SP(zv, vv, Zh)
      }
      iP(zv, vv, Lh)
    }

    function Lh(vv, zv, Pv) {
      Ah(vv, zv)
    }

    function Hh(vv, zv, Pv) {
      if (zv < 0) {
        if (vv.treeIsFiltered !== vv.emitFiltered) return;
        return Qh(vv), void(vv.buffer[vv.it.offset++] = 255 & Math.abs(zv))
      }
      if ((vv.isSchema ? vv.treeIsFiltered || (zv < 32 ? 0 !== (vv.filterBitmask & 1 << zv) : void 0 !== vv.tags[zv]) : vv.treeIsFiltered) !== vv.emitFiltered) return;
      const hv = vv.isEncodeAll ? Sv.ADD : Pv;
      void 0 !== hv && (void 0 === vv.filter || vv.filter(vv.ref, zv, vv.view)) && (Qh(vv), vv.encoder(vv.self, vv.buffer, vv.changeTree, zv, hv, vv.it, vv.isEncodeAll, vv.hasView, vv.metadata))
    }

    function Mh(vv, zv) {
      const Pv = new Uint8Array(vv.length + zv.length);
      return Pv.set(vv, 0), Pv.set(zv, vv.length), Pv
    }
    class yh {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(yh.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(vv, zv) {
        this.context = Lz.cache(vv.constructor), this.root = zv ?? new Uh(this.context), this.setState(vv)
      }
      setState(vv) {
        this.state = vv, this.state[sv].setRoot(this.root)
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
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv.offset;
        return this._encodeChannel(vv, zv, Pv, hv, !1)
      }
      encodeUnreliable() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv.offset;
        return this._encodeChannel(vv, zv, Pv, hv, !0)
      }
      _encodeChannel(vv, zv, Pv, hv, Sv) {
        this.root.pendingFilterRefresh.length > 0 && gP(this.root);
        const ev = void 0 !== zv,
          gv = this.state[sv],
          pv = this._encodeCtx;
        pv.self = this, pv.buffer = Pv, pv.it = vv, pv.view = zv, pv.isEncodeAll = !1, pv.hasView = ev, pv.emitFiltered = ev;
        let dv = Sv ? this.root.unreliableChanges : this.root.changes;
        for (; dv = dv.next;) {
          const Pv = dv.changeTree;
          if (ev && !zv.isChangeTreeVisible(Pv)) continue;
          const Nv = Sv ? Pv.unreliableRecorder : Pv;
          if (!Nv || !Nv.has()) continue;
          const lv = Pv.encDescriptor;
          pv.changeTree = Pv, pv.ref = Pv.ref, pv.encoder = lv.encoder, pv.filter = lv.filter, pv.metadata = lv.metadata, pv.treeIsFiltered = Pv.isFiltered, pv.isSchema = lv.isSchema, pv.filterBitmask = lv.filterBitmask, pv.tags = lv.tags, pv.structSwitchEmitted = !1, pv.isRootTree = Pv === gv, pv.shouldEmitSwitch = ev || vv.offset > hv || !pv.isRootTree, Nv.forEachWithCtx(pv, Hh)
        }
        return Sv || ev || !this._isStreamBroadcastMode || this._emitStreamBroadcast(Pv, vv), vv.offset > Pv.byteLength ? (Pv = this._resizeBuffer(Pv, vv.offset), vv.offset = hv, this._encodeChannel(vv, zv, Pv, hv, Sv)) : Pv.subarray(0, vv.offset)
      }
      encodeFullSync(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : vv.offset;
        this.root.pendingFilterRefresh.length > 0 && gP(this.root);
        const ev = void 0 !== hv,
          gv = this.state[sv],
          pv = this._encodeCtx;
        return pv.self = this, pv.buffer = zv, pv.it = vv, pv.view = hv, pv.isEncodeAll = !0, pv.hasView = ev, pv.emitFiltered = Pv, pv.gen = ++this._fullSyncGen, pv.initialOffset = Sv, pv.rootChangeTree = gv, Ah(pv, gv), vv.offset > zv.byteLength ? (zv = this._resizeBuffer(zv, vv.offset), vv.offset = Sv, this.encodeFullSync(vv, zv, Pv, hv, Sv)) : zv.subarray(0, vv.offset)
      }
      _resizeBuffer(vv, zv) {
        const Pv = Math.ceil(zv / yh.BUFFER_SIZE) * yh.BUFFER_SIZE,
          hv = new Uint8Array(Pv);
        return hv.set(vv), vv === this.sharedBuffer && (this.sharedBuffer = hv), hv
      }
      encodeAll() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(vv, zv, !1)
      }
      encodeAllView(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Sv = Pv.offset;
        return hv = this.encodeFullSync(Pv, hv, !0, vv, Sv), Mh(hv.subarray(0, zv), hv.subarray(Sv, Pv.offset))
      }
      ensureCapacity(vv, zv) {
        if (zv + yh.BUFFER_SIZE <= vv.byteLength) return vv;
        const Pv = Math.ceil((zv + yh.BUFFER_SIZE) / yh.BUFFER_SIZE) * yh.BUFFER_SIZE,
          hv = new Uint8Array(Pv);
        return hv.set(vv.subarray(0, zv)), vv === this.sharedBuffer && (this.sharedBuffer = hv), hv
      }
      encodeView(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          ev = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const gv = Pv.offset;
        this._emitStreamPriority(vv);
        for (const dv of vv.changes.keys()) {
          const zv = vv.changes.get(dv),
            ev = this.root.changeTrees[dv];
          if (void 0 === ev) {
            vv.changes.delete(dv);
            continue
          }
          if (0 === zv.size) continue;
          const gv = ev.encDescriptor,
            Nv = gv.encoder,
            lv = gv.metadata,
            Tv = ev.ref,
            wv = ev.refTarget;
          hv = this.ensureCapacity(hv, Pv.offset), hv[Pv.offset++] = 255, zz.number(hv, Tv[pv], Pv);
          for (const [dv, av] of zv) {
            let zv;
            if (-1 === dv) {
              const vv = wv.tmpItems,
                zv = wv.deletedIndexes;
              for (let gv = 0; gv < vv.length; gv++) void 0 !== vv[gv] && !0 !== zv[gv] && Nv(this, hv, ev, gv, Sv.ADD, Pv, !1, !0, lv);
              continue
            }
            if ("number" === typeof dv) zv = dv;
            else {
              const Pv = dv.indexInParent(Tv);
              if (void 0 === Pv) continue;
              if (zv = Pv, av === Sv.ADD && ev.getChange(zv) === Sv.DELETE) {
                vv.changes.delete(dv.ref[pv]);
                continue
              }
            }
            Nv(this, hv, ev, zv, void 0 !== wv[Wv](zv) && av || Sv.DELETE, Pv, !1, !0, lv)
          }
        }
        return vv.changes.clear(), hv = this.encode(Pv, vv, hv), ev ? Mh(hv.subarray(0, zv), hv.subarray(gv, Pv.offset)) : hv.subarray(gv, Pv.offset)
      }
      encodeUnreliableView(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Sv = Pv.offset;
        return hv = this.encodeUnreliable(Pv, vv, hv, Sv), Mh(hv.subarray(0, zv), hv.subarray(Sv, Pv.offset))
      }
      _emitStreamBroadcast(vv, zv) {
        const Pv = this.root.streamTrees;
        for (const hv of Pv) {
          const Pv = hv,
            ev = Pv[sv],
            gv = Pv[pv];
          if (void 0 === gv) continue;
          const dv = Pv._stream,
            Nv = dv.broadcastDeletes,
            lv = dv.broadcastPending,
            Tv = dv.sentBroadcast,
            wv = Nv.size > 0,
            av = lv.size > 0,
            Cv = ev.encDescriptor,
            iv = Cv.encoder,
            cv = Cv.metadata;
          if (wv || av) {
            if (vv[zv.offset++] = 255, zz.number(vv, gv, zv), wv) {
              for (const Pv of Nv) iv(this, vv, ev, Pv, Sv.DELETE, zv, !1, !1, cv);
              Nv.clear()
            }
            const hv = dv.maxPerTick,
              av = [];
            let Cv = 0;
            const Gv = [];
            for (const gv of lv) {
              if (Cv >= hv) break;
              const pv = Pv[Wv](gv);
              void 0 !== pv ? (iv(this, vv, ev, gv, Sv.ADD, zv, !1, !1, cv), Tv.add(gv), av.push(pv), Gv.push(gv), Cv++) : Gv.push(gv)
            }
            for (const vv of Gv) lv.delete(vv);
            for (const Pv of av) {
              const hv = Pv[sv];
              if (void 0 === hv) continue;
              const ev = Pv[pv];
              if (void 0 === ev) continue;
              vv[zv.offset++] = 255, zz.number(vv, ev, zv);
              const gv = hv.encDescriptor,
                dv = gv.encoder,
                Nv = gv.metadata;
              hv.forEachLive((Pv => {
                oz.hasUnreliableAtIndex(Nv, Pv) || dv(this, vv, hv, Pv, Sv.ADD, zv, !1, !1, Nv)
              }))
            }
          }
          for (const hv of Tv) {
            const Sv = Pv[Wv](hv);
            if (void 0 === Sv) continue;
            const ev = Sv[sv];
            if (void 0 === ev || !ev.has()) continue;
            const gv = Sv[pv];
            if (void 0 === gv) continue;
            vv[zv.offset++] = 255, zz.number(vv, gv, zv);
            const dv = ev.encDescriptor,
              Nv = dv.encoder,
              lv = dv.metadata;
            ev.forEach(((Pv, hv) => {
              Pv < 0 || oz.hasUnreliableAtIndex(lv, Pv) || Nv(this, vv, ev, Pv, hv, zv, !1, !1, lv)
            }))
          }
        }
      }
      _emitStreamPriority(vv) {
        const zv = this.root.streamTrees;
        if (0 === zv.size) return;
        const Pv = vv.id;
        for (const hv of zv) {
          const zv = hv,
            ev = zv._stream,
            gv = ev.pendingByView.get(Pv);
          if (void 0 === gv || 0 === gv.size) continue;
          const dv = ev.priorityByView?.get(Pv),
            Nv = void 0 !== dv,
            lv = ev.priority,
            Tv = ev.maxPerTick,
            wv = [],
            av = [];
          if (Nv || void 0 !== lv) {
            const Pv = [],
              hv = [];
            let Sv = 0;
            for (const ev of gv) {
              const gv = zv[Wv](ev);
              if (void 0 === gv) {
                av.push(ev);
                continue
              }
              const pv = Nv ? dv(gv) : lv(vv, gv);
              if (Sv < Tv) {
                let vv = Sv++;
                for (; vv > 0 && hv[vv - 1] < pv;) hv[vv] = hv[vv - 1], Pv[vv] = Pv[vv - 1], vv--;
                hv[vv] = pv, Pv[vv] = ev
              } else if (pv > hv[Tv - 1]) {
                let vv = Tv - 1;
                for (; vv > 0 && hv[vv - 1] < pv;) hv[vv] = hv[vv - 1], Pv[vv] = Pv[vv - 1], vv--;
                hv[vv] = pv, Pv[vv] = ev
              }
            }
            for (let vv = 0; vv < Sv; vv++) wv.push(Pv[vv])
          } else
            for (const vv of gv) {
              if (wv.length >= Tv) break;
              wv.push(vv)
            }
          for (const vv of av) gv.delete(vv);
          const Cv = wv.length;
          let iv = ev.sentByView.get(Pv);
          void 0 === iv && (iv = new Set, ev.sentByView.set(Pv, iv));
          for (let Pv = 0; Pv < Cv; Pv++) {
            const hv = wv[Pv],
              ev = zv[Wv](hv);
            if (void 0 === ev) {
              gv.delete(hv);
              continue
            }
            vv._addImmediate(ev);
            const dv = ev[sv];
            if (void 0 !== dv) {
              const zv = ev[pv];
              let Pv = vv.changes.get(zv);
              void 0 === Pv && (Pv = new Map, vv.changes.set(zv, Pv));
              const hv = dv.metadata;
              dv.forEachLive((vv => {
                oz.hasUnreliableAtIndex(hv, vv) || Pv.set(vv, Sv.ADD)
              }))
            }
            gv.delete(hv), iv.add(hv)
          }
        }
      }
      discardChanges() {
        const vv = this.root.changes;
        let zv = vv.next;
        const Pv = this.root;
        for (; zv;) {
          const vv = zv.next;
          zv.changeTree.endEncode(), Pv.releaseNode(zv), zv = vv
        }
        vv.next = void 0, vv.tail = void 0
      }
      discardUnreliableChanges() {
        const vv = this.root.unreliableChanges;
        let zv = vv.next;
        const Pv = this.root;
        for (; zv;) {
          const vv = zv.next;
          zv.changeTree.endEncodeUnreliable(), Pv.releaseNode(zv), zv = vv
        }
        vv.next = void 0, vv.tail = void 0
      }
      tryEncodeTypeId(vv, zv, Pv, hv) {
        const Sv = this.context.getTypeId(zv),
          ev = this.context.getTypeId(Pv);
        void 0 !== ev ? Sv !== ev && (vv[hv.offset++] = 213, zz.number(vv, ev, hv)) : console.warn(`@colyseus/schema WARNING: Class "${Pv.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const vv = this.root;
        if (0 === vv.streamTrees.size) return !1;
        const zv = 0 === vv.activeViews.size;
        for (const Pv of vv.streamTrees)
          if (zv ? Uz(Pv) : Vz(Pv, vv)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class Bh extends Error {
      constructor(vv) {
        super(vv), this.name = "DecodingWarning"
      }
    }
    const Jh = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Eh {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(vv, zv), void 0 === zv[pv] ? (Jh.value = vv, Object.defineProperty(zv, pv, Jh)) : zv[pv] !== vv && (zv[pv] = vv), Pv && (this.refCount[vv] = (this.refCount[vv] || 0) + 1), this.deletedRefs.has(vv) && this.deletedRefs.delete(vv)
      }
      removeRef(vv) {
        const zv = this.refCount[vv];
        if (void 0 !== zv)
          if (0 !== zv)(this.refCount[vv] = zv - 1) <= 0 && this.deletedRefs.add(vv);
          else try {
            const zv = this.refs.get(vv);
            throw new Bh(`trying to remove refId '${vv}' with 0 refCount (${zv.constructor.name}: ${JSON.stringify(zv)})`)
          } catch (eS) {
            console.warn(eS)
          } else try {
            throw new Bh("trying to remove refId that doesn't exist: " + vv)
          } catch (eS) {
            console.warn(eS)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((vv => {
          if (this.refCount[vv] > 0) return;
          const zv = this.refs.get(vv),
            Pv = zv.constructor[Symbol.metadata];
          if (null != Pv)
            for (const hv in Pv) {
              const vv = zv[Pv[hv].name];
              if ("object" === typeof vv && vv) {
                const zv = vv[pv];
                void 0 === zv || this.deletedRefs.has(zv) || this.removeRef(zv)
              }
            } else "function" === typeof zv[Cv] && Array.from(zv.values()).forEach((vv => {
              const zv = vv[pv];
              void 0 === zv || this.deletedRefs.has(zv) || this.removeRef(zv)
            }));
          this.refs.delete(vv), delete this.refCount[vv], delete this.callbacks[vv]
        })), this.deletedRefs.clear()
      }
      addCallback(vv, zv, Pv) {
        if (void 0 === vv) {
          const vv = "number" === typeof zv ? Sv[zv] : zv;
          throw new Error(`Can't addCallback on '${vv}' (refId is undefined)`)
        }
        return this.callbacks[vv] || (this.callbacks[vv] = {}), this.callbacks[vv][zv] || (this.callbacks[vv][zv] = []), this.callbacks[vv][zv].push(Pv), () => this.removeCallback(vv, zv, Pv)
      }
      removeCallback(vv, zv, Pv) {
        const hv = this.callbacks?.[vv]?.[zv]?.indexOf(Pv);
        void 0 !== hv && -1 !== hv && Rh(this.callbacks[vv][zv], hv)
      }
    }
    class oh {
      context;
      state;
      root;
      currentRefId = 0;
      fD;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(vv, zv) {
        this.setState(vv), this.context = zv || new Lz(vv.constructor)
      }
      setState(vv) {
        this.state = vv, this.root = new Eh, this.root.addRef(0, vv)
      }
      decode(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Sv = void 0 !== this.fD ? [] : null,
          ev = this.root,
          gv = vv.byteLength;
        let pv = Pv.constructor[lv];
        for (this.currentRefId = 0; zv.offset < gv;) {
          if (vv[zv.offset] == hv) {
            zv.offset++, Pv[mv]?.();
            const hv = Gz.number(vv, zv),
              Sv = ev.refs.get(hv);
            Sv ? (Pv = Sv, pv = Pv.constructor[lv], this.currentRefId = hv) : (console.error(`"refId" not found: ${hv}`, {
              previousRef: Pv,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(vv, zv, gv));
            continue
          } - 1 !== pv(this, vv, zv, Pv, Sv) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(vv, zv, gv))
        }
        return Pv[mv]?.(), null !== this.resyncVisited && function(vv, zv) {
          vv.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : LP(vv, vv.state, new Set, zv)
        }(this, Sv), null !== Sv && this.fD?.(Sv), ev.garbageCollectDeletedRefs(), Sv
      }
      decodeResync(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(vv, zv)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(vv, zv, Pv) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Sv = {
          offset: zv.offset
        };
        for (; zv.offset < Pv && (vv[zv.offset] !== hv || (Sv.offset = zv.offset + 1, !this.root.refs.has(Gz.number(vv, Sv))));) zv.offset++
      }
      getInstanceType(vv, zv, Pv) {
        let hv;
        if (213 === vv[zv.offset]) {
          zv.offset++;
          const Pv = Gz.number(vv, zv);
          hv = this.context.get(Pv)
        }
        return hv || Pv
      }
      createInstanceOfType(vv) {
        return vv.initializeForDecoder()
      }
      removeChildRefs(vv, zv) {
        const Pv = "string" !== typeof vv[Cv],
          hv = vv[pv];
        vv.forEach(((ev, gv) => {
          zv?.push({
            ref: vv,
            refId: hv,
            op: Sv.DELETE,
            field: gv,
            value: void 0,
            previousValue: ev
          }), Pv && this.root.removeRef(ev[pv])
        }))
      }
    }
    const bh = Oh({
        min: wh.float64(),
        max: wh.float64(),
        bits: wh.uint8(),
        mode: wh.uint8()
      }, "QuantizedDescriptor"),
      rh = Oh({
        name: wh.string(),
        type: wh.string(),
        referencedType: wh.number(),
        childPrimitive: wh.string(),
        quantized: wh.ref(bh).optional()
      }, "ReflectionField"),
      kh = Oh({
        id: wh.number(),
        extendsId: wh.number(),
        fields: wh.array(rh)
      }, "ReflectionType"),
      Xh = Oh({
        types: wh.array(kh),
        rootType: wh.number()
      }, "Reflection");

    function uh(vv) {
      const zv = vv.root,
        Pv = zv.callbacks,
        hv = new WeakMap;
      let ev;

      function gv(vv, Pv) {
        let Nv = Pv.instance?.constructor[Symbol.metadata] || vv,
          lv = Pv.instance && "function" === typeof Pv.instance.forEach || vv && !Kh.is(vv);
        if (Nv && !lv) {
          const vv = function(vv, Sv, gv, dv) {
            return dv && void 0 !== Pv.instance[Sv] && !hv.has(ev) && gv(Pv.instance[Sv], void 0), zv.addCallback(vv[pv], Sv, gv)
          };
          return new Proxy({
            listen: function(zv, Sv) {
              let gv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (Pv.instance) return vv(Pv.instance, zv, Sv, gv);
              {
                let pv = () => {};
                return Pv.onInstanceAvailable(((Pv, dv) => {
                  pv = vv(Pv, zv, Sv, gv && dv && !hv.has(ev))
                })), () => pv()
              }
            },
            onChange: function(vv) {
              return zv.addCallback(Pv.instance[pv], Sv.REPLACE, vv)
            },
            bindTo: function(vv, hv) {
              return hv || (hv = Object.keys(Nv).map((vv => Nv[vv].name))), zv.addCallback(Pv.instance[pv], Sv.REPLACE, (() => {
                hv.forEach((zv => vv[zv] = Pv.instance[zv]))
              }))
            }
          }, {
            get(vv, zv) {
              const hv = Nv[Nv[zv]];
              if (hv) {
                const vv = Pv.instance?.[zv],
                  Sv = hv => {
                    const Sv = dv(Pv.instance).listen(zv, ((vv, zv) => {
                      hv(vv, !1), Sv?.()
                    }), !1);
                    void 0 !== vv?.[pv] && hv(vv, !0)
                  };
                return gv(hv.type, {
                  instance: void 0 !== vv?.[pv] && vv,
                  parentInstance: Pv.instance,
                  onInstanceAvailable: Sv
                })
              }
              return vv[zv]
            },
            has: (vv, zv) => void 0 !== Nv[zv],
            set(vv, zv, Pv) {
              throw new Error("not allowed")
            },
            deleteProperty(vv, zv) {
              throw new Error("not allowed")
            }
          })
        } {
          const vv = function(vv, Pv, gv) {
              return gv && vv.forEach(((vv, zv) => Pv(vv, zv))), zv.addCallback(vv[pv], Sv.ADD, ((vv, zv) => {
                hv.set(Pv, !0), ev = Pv, Pv(vv, zv), hv.delete(Pv), ev = void 0
              }))
            },
            gv = function(vv, Pv) {
              return zv.addCallback(vv[pv], Sv.DELETE, Pv)
            },
            dv = function(vv, Pv) {
              return zv.addCallback(vv[pv], Sv.REPLACE, Pv)
            };
          return new Proxy({
            Km: function(zv) {
              let Sv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (Pv.instance) return vv(Pv.instance, zv, Sv && !hv.has(ev));
              if (Pv.onInstanceAvailable) {
                let gv = () => {};
                return Pv.onInstanceAvailable(((Pv, pv) => {
                  gv = vv(Pv, zv, Sv && pv && !hv.has(ev))
                })), () => gv()
              }
            },
            HO: function(vv) {
              if (Pv.instance) return gv(Pv.instance, vv);
              if (Pv.onInstanceAvailable) {
                let zv = () => {};
                return Pv.onInstanceAvailable((Pv => {
                  zv = gv(Pv, vv)
                })), () => zv()
              }
            },
            onChange: function(vv) {
              if (Pv.instance) return dv(Pv.instance, vv);
              if (Pv.onInstanceAvailable) {
                let zv = () => {};
                return Pv.onInstanceAvailable((Pv => {
                  zv = dv(Pv, vv)
                })), () => zv()
              }
            }
          }, {
            get(vv, zv) {
              if (!vv[zv]) throw new Error(`Can't access '${zv}' through callback proxy. access the instance directly.`);
              return vv[zv]
            },
            has: (vv, zv) => void 0 !== vv[zv],
            set(vv, zv, Pv) {
              throw new Error("not allowed")
            },
            deleteProperty(vv, zv) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function dv(vv) {
        return gv(void 0, {
          instance: vv
        })
      }
      return vv.fD = function(vv) {
        const zv = new Set;
        for (let hv = 0, ev = vv.length; hv < ev; hv++) {
          const ev = vv[hv],
            gv = ev.refId,
            dv = ev.ref,
            Nv = Pv[gv];
          if (Nv) {
            if ((ev.op & Sv.DELETE) === Sv.DELETE && Kh.isSchema(ev.previousValue)) {
              const vv = Pv[ev.previousValue[pv]]?.[Sv.DELETE];
              for (let zv = vv?.length - 1; zv >= 0; zv--) vv[zv]()
            }
            if (Kh.isSchema(dv)) {
              if (!zv.has(gv)) {
                const vv = Nv?.[Sv.REPLACE];
                for (let zv = vv?.length - 1; zv >= 0; zv--) vv[zv]()
              }
              if (Nv.hasOwnProperty(ev.field)) {
                const vv = Nv[ev.field];
                for (let zv = vv?.length - 1; zv >= 0; zv--) vv[zv](ev.value, ev.previousValue)
              }
            } else {
              if ((ev.op & Sv.DELETE) === Sv.DELETE) {
                if (void 0 !== ev.previousValue) {
                  const vv = Nv[Sv.DELETE];
                  for (let zv = vv?.length - 1; zv >= 0; zv--) vv[zv](ev.previousValue, ev.dynamicIndex ?? ev.field)
                }
                if ((ev.op & Sv.ADD) === Sv.ADD) {
                  const vv = Nv[Sv.ADD];
                  for (let zv = vv?.length - 1; zv >= 0; zv--) vv[zv](ev.value, ev.dynamicIndex ?? ev.field)
                }
              } else if ((ev.op & Sv.ADD) === Sv.ADD && ev.previousValue !== ev.value) {
                const vv = Nv[Sv.ADD];
                for (let zv = vv?.length - 1; zv >= 0; zv--) vv[zv](ev.value, ev.dynamicIndex ?? ev.field)
              }
              if (ev.value !== ev.previousValue && (void 0 !== ev.value || void 0 !== ev.previousValue)) {
                const vv = Nv[Sv.REPLACE];
                for (let zv = vv?.length - 1; zv >= 0; zv--) vv[zv](ev.value, ev.dynamicIndex ?? ev.field)
              }
            }
            zv.add(gv)
          }
        }
      }, dv
    }

    function vS(vv, zv) {
      vv.fD = zv
    }
    Xh.encode = function(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const Pv = vv.context,
        hv = new Xh,
        Sv = new yh(hv),
        ev = Pv.schemas.get(vv.state.constructor);
      ev > 0 && (hv.rootType = ev);
      const gv = new Set,
        pv = {},
        dv = vv => {
          if (void 0 === vv.extendsId || gv.has(vv.extendsId)) {
            gv.add(vv.id), hv.types.push(vv);
            const zv = pv[vv.id];
            void 0 !== zv && (delete pv[vv.id], zv.forEach((vv => dv(vv))))
          } else void 0 === pv[vv.extendsId] && (pv[vv.extendsId] = []), pv[vv.extendsId].push(vv)
        };
      Pv.schemas.forEach(((vv, zv) => {
        const hv = new kh;
        hv.id = Number(vv);
        const Sv = Object.getPrototypeOf(zv);
        Sv !== Kh && (hv.extendsId = Pv.schemas.get(Sv));
        const ev = zv[Symbol.metadata];
        if (ev !== Sv[Symbol.metadata]) {
          const vv = ev[Ov] ?? -1;
          for (let zv = 0; zv <= vv; zv++) {
            const vv = ev[zv];
            if (void 0 === vv) continue;
            const Sv = vv.name;
            if (!Object.prototype.hasOwnProperty.call(ev, Sv)) continue;
            const gv = new rh;
            let pv;
            if (gv.name = Sv, "string" === typeof vv.type) pv = vv.type;
            else if (Iz(vv.type)) {
              const zv = vv.type.quantized;
              pv = "quantized";
              const Pv = new bh;
              Pv.min = zv.min, Pv.max = zv.max, Pv.bits = zv.bits, Pv.mode = zv.wrap ? 1 : 0, gv.quantized = Pv
            } else {
              let zv;
              Kh.is(vv.type) ? (pv = "ref", zv = vv.type) : (pv = Object.keys(vv.type)[0], "string" === typeof vv.type[pv] ? gv.childPrimitive = vv.type[pv] : zv = vv.type[pv]), gv.referencedType = zv ? Pv.getTypeId(zv) : -1
            }
            gv.type = pv, hv.fields.push(gv)
          }
        }
        dv(hv)
      }));
      for (const Nv in pv) pv[Nv].forEach((vv => hv.types.push(vv)));
      return Sv.encodeAll(zv).slice(0, zv.offset)
    }, Xh.decode = function(vv, zv) {
      const Pv = new Xh;
      new oh(Pv).decode(vv, zv);
      const hv = new Lz;
      Pv.types.forEach((vv => {
        const zv = hv.get(vv.extendsId) ?? Kh,
          Pv = class extends zv {};
        Lz.register(Pv), hv.add(Pv, vv.id)
      }), {});
      Pv.types.forEach((vv => {
        const zv = hv.get(vv.id),
          Sv = oz.initialize(zv),
          ev = [];
        let gv = vv;
        do {
          ev.push(gv), gv = Pv.types.find((vv => vv.id === gv.extendsId))
        } while (gv);
        let pv = 0;
        ev.reverse().forEach((vv => {
          ((vv, zv, Pv) => {
            zv.fields.forEach(((zv, Sv) => {
              const ev = Pv + Sv;
              if (void 0 !== zv.quantized) {
                const Pv = zv.quantized;
                oz.addField(vv, ev, zv.name, {
                  quantized: qz({
                    min: Pv.min,
                    max: Pv.max,
                    bits: Pv.bits,
                    mode: 1 === Pv.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== zv.referencedType) {
                const Pv = zv.type,
                  Sv = hv.get(zv.referencedType) ?? zv.childPrimitive;
                "ref" === Pv ? oz.addField(vv, ev, zv.name, Sv) : oz.addField(vv, ev, zv.name, {
                  [Pv]: Sv
                })
              } else oz.addField(vv, ev, zv.name, zv.type)
            }))
          })(Sv, vv, pv), pv += vv.fields.length
        }))
      }));
      const Sv = new(hv.get(Pv.rootType || 0));
      return new oh(Sv, hv)
    }, Xh.makeEncodable = function(vv) {
      const zv = vv[Symbol.metadata];
      if (!zv) return vv;
      const Pv = zv[Ov];
      if (void 0 === Pv) return vv;
      for (let hv = 0; hv <= Pv; hv++) {
        const Pv = zv[hv];
        Pv && oz.defineField(vv, zv, hv, Pv.name, Pv.type)
      }
      return Object.prototype.hasOwnProperty.call(vv, Yv) && delete vv[Yv], vv
    };
    class zS {
      ow;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(vv) {
        this.ow = vv, this.ow.fD = this.fD.bind(this)
      }
      get callbacks() {
        return this.ow.root.callbacks
      }
      get state() {
        return this.ow.state
      }
      addCallback(vv, zv, Pv) {
        return this.ow.root.addCallback(vv, zv, Pv)
      }
      addCallbackOrWaitCollectionAvailable(vv, zv, Pv, hv) {
        let ev = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          gv = () => {};
        const dv = () => gv(),
          Nv = vv[zv];
        if (Nv && void 0 !== Nv[pv]) return ev = ev && !1 === this.isTriggering, Pv === Sv.ADD && ev && Nv.forEach(((vv, zv) => {
          hv(vv, zv)
        })), this.addCallback(Nv[pv], Pv, hv);
        {
          let Sv;
          return Sv = this.addCallback(vv[pv], zv, ((vv, zv) => {
            null !== vv && void 0 !== vv && (Sv(), gv = this.addCallback(vv[pv], Pv, hv))
          })), gv = Sv, dv
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(vv, zv, Pv) {
        let hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        hv = hv && !1 === this.isTriggering;
        const Sv = vv[zv];
        return hv && null !== Sv && void 0 !== Sv && Pv(Sv, void 0), this.addCallback(vv[pv], zv, Pv)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const vv = arguments.length <= 0 ? void 0 : arguments[0],
            zv = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(vv[pv], Sv.REPLACE, zv)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Sv.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Sv.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Km() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Sv.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Sv.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      HO() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Sv.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Sv.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(vv, zv, Pv) {
        let hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const ev = vv.constructor[Symbol.metadata];
        Pv || (Pv = Object.keys(ev).filter((vv => !isNaN(Number(vv)))).map((vv => ev[vv].name)));
        const gv = () => {
          for (const hv of Pv) {
            const Pv = vv[hv];
            void 0 !== Pv && (zv[hv] = Pv)
          }
        };
        return hv && gv(), this.addCallback(vv[pv], Sv.REPLACE, gv)
      }
      fD(vv) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let zv = 0, Pv = vv.length; zv < Pv; zv++) {
          const Pv = vv[zv],
            hv = Pv.refId,
            ev = Pv.ref,
            gv = this.callbacks[hv];
          if (gv) {
            if ((Pv.op & Sv.DELETE) === Sv.DELETE && Kh.isSchema(Pv.previousValue)) {
              const vv = Pv.previousValue[pv],
                zv = this.callbacks[vv]?.[Sv.DELETE];
              if (zv)
                for (let Pv = zv.length - 1; Pv >= 0; Pv--) try {
                  zv[Pv]()
                } catch (eS) {
                  console.error(eS)
                }
            }
            if (Kh.isSchema(ev)) {
              if (!this.uniqueRefIds.has(hv)) {
                const vv = gv[Sv.REPLACE];
                if (vv)
                  for (let zv = vv.length - 1; zv >= 0; zv--) try {
                    vv[zv]()
                  } catch (eS) {
                    console.error(eS)
                  }
              }
              const vv = gv[Pv.field];
              if (vv)
                for (let zv = vv.length - 1; zv >= 0; zv--) try {
                  vv[zv](Pv.value, Pv.previousValue)
                } catch (eS) {
                  console.error(eS)
                }
            } else {
              const vv = Pv.dynamicIndex ?? Pv.field;
              if ((Pv.op & Sv.DELETE) === Sv.DELETE) {
                if (void 0 !== Pv.previousValue) {
                  const zv = gv[Sv.DELETE];
                  if (zv)
                    for (let hv = zv.length - 1; hv >= 0; hv--) try {
                      zv[hv](Pv.previousValue, vv)
                    } catch (eS) {
                      console.error(eS)
                    }
                }
                if ((Pv.op & Sv.ADD) === Sv.ADD) {
                  const zv = gv[Sv.ADD];
                  if (zv)
                    for (let hv = zv.length - 1; hv >= 0; hv--) try {
                      zv[hv](Pv.value, vv)
                    } catch (eS) {
                      console.error(eS)
                    }
                }
              } else if ((Pv.op & Sv.ADD) === Sv.ADD && Pv.previousValue !== Pv.value) {
                const zv = gv[Sv.ADD];
                if (zv)
                  for (let hv = zv.length - 1; hv >= 0; hv--) try {
                    zv[hv](Pv.value, vv)
                  } catch (eS) {
                    console.error(eS)
                  }
              }
              if (Pv.value !== Pv.previousValue) {
                const zv = gv[Sv.REPLACE];
                if (zv)
                  for (let hv = zv.length - 1; hv >= 0; hv--) try {
                    zv[hv](vv, Pv.value)
                  } catch (eS) {
                    console.error(eS)
                  }
              }
            }
            this.uniqueRefIds.add(hv)
          }
        }
        this.isTriggering = !1
      }
    }
    const PS = {
      get(vv) {
        if (vv instanceof oh) return new zS(vv);
        if ("ow" in vv.uC) return new zS(vv.uC.ow);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(vv) {
        if (vv instanceof oh) return uh(vv);
        if ("ow" in vv.uC) return uh(vv.uC.ow);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (vv, zv) => vS(vv, zv)
    };
    class hS {
      _free = [];
      _factory;
      _maxSize;
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = vv, this._maxSize = zv.maxSize ?? 1 / 0;
        const Pv = zv.preallocate ?? 0;
        for (let hv = 0; hv < Pv; hv++) this._free.push(vv())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(vv) {
        Kh.reset(vv), this._free.length < this._maxSize && this._free.push(vv)
      }
      get size() {
        return this._free.length
      }
    }

    function SS(vv) {
      return new hS((() => new vv), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    fz("map", {
      constructor: Sh
    }), fz("array", {
      constructor: Ph
    }), fz("set", {
      constructor: gh
    }), fz("collection", {
      constructor: eh
    })
  },
  8746: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      __addDisposableResource: () => Iv,
      __assign: () => ev,
      __asyncDelegator: () => nv,
      __asyncGenerator: () => Yv,
      __asyncValues: () => Ov,
      __await: () => Fv,
      __awaiter: () => av,
      __classPrivateFieldGet: () => xv,
      __classPrivateFieldIn: () => qv,
      __classPrivateFieldSet: () => tv,
      __createBinding: () => Cv,
      __decorate: () => pv,
      __disposeResources: () => Zv,
      __esDecorate: () => Nv,
      __exportStar: () => iv,
      __extends: () => Sv,
      __generator: () => sv,
      __importDefault: () => Rv,
      __importStar: () => Uv,
      __makeTemplateObject: () => Dv,
      __metadata: () => wv,
      __param: () => dv,
      __propKey: () => Tv,
      __read: () => Gv,
      __rest: () => gv,
      __rewriteRelativeImportExtension: () => Av,
      __runInitializers: () => lv,
      __setFunctionName: () => Wv,
      __spread: () => mv,
      __spreadArray: () => fv,
      __spreadArrays: () => jv,
      __values: () => cv,
      default: () => Lv
    });
    var hv = function(vv, zv) {
      return hv = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(vv, zv) {
        vv.__proto__ = zv
      } || function(vv, zv) {
        for (var Pv in zv) Object.prototype.hasOwnProperty.call(zv, Pv) && (vv[Pv] = zv[Pv])
      }, hv(vv, zv)
    };

    function Sv(vv, zv) {
      if ("function" !== typeof zv && null !== zv) throw new TypeError("Class extends value " + String(zv) + " is not a constructor or null");

      function Pv() {
        this.constructor = vv
      }
      hv(vv, zv), vv.prototype = null === zv ? Object.create(zv) : (Pv.prototype = zv.prototype, new Pv)
    }
    var ev = function() {
      return ev = Object.assign || function(vv) {
        for (var zv, Pv = 1, hv = arguments.length; Pv < hv; Pv++)
          for (var Sv in zv = arguments[Pv]) Object.prototype.hasOwnProperty.call(zv, Sv) && (vv[Sv] = zv[Sv]);
        return vv
      }, ev.apply(this, arguments)
    };

    function gv(vv, zv) {
      var Pv = {};
      for (var hv in vv) Object.prototype.hasOwnProperty.call(vv, hv) && zv.indexOf(hv) < 0 && (Pv[hv] = vv[hv]);
      if (null != vv && "function" === typeof Object.getOwnPropertySymbols) {
        var Sv = 0;
        for (hv = Object.getOwnPropertySymbols(vv); Sv < hv.length; Sv++) zv.indexOf(hv[Sv]) < 0 && Object.prototype.propertyIsEnumerable.call(vv, hv[Sv]) && (Pv[hv[Sv]] = vv[hv[Sv]])
      }
      return Pv
    }

    function pv(vv, zv, Pv, hv) {
      var Sv, ev = arguments.length,
        gv = ev < 3 ? zv : null === hv ? hv = Object.getOwnPropertyDescriptor(zv, Pv) : hv;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) gv = Reflect.decorate(vv, zv, Pv, hv);
      else
        for (var pv = vv.length - 1; pv >= 0; pv--)(Sv = vv[pv]) && (gv = (ev < 3 ? Sv(gv) : ev > 3 ? Sv(zv, Pv, gv) : Sv(zv, Pv)) || gv);
      return ev > 3 && gv && Object.defineProperty(zv, Pv, gv), gv
    }

    function dv(vv, zv) {
      return function(Pv, hv) {
        zv(Pv, hv, vv)
      }
    }

    function Nv(vv, zv, Pv, hv, Sv, ev) {
      function gv(vv) {
        if (void 0 !== vv && "function" !== typeof vv) throw new TypeError("Function expected");
        return vv
      }
      for (var pv, dv = hv.kind, Nv = "getter" === dv ? "get" : "setter" === dv ? "set" : "value", lv = !zv && vv ? hv.static ? vv : vv.prototype : null, Tv = zv || (lv ? Object.getOwnPropertyDescriptor(lv, hv.name) : {}), Wv = !1, wv = Pv.length - 1; wv >= 0; wv--) {
        var av = {};
        for (var sv in hv) av[sv] = "access" === sv ? {} : hv[sv];
        for (var sv in hv.access) av.access[sv] = hv.access[sv];
        av.addInitializer = function(vv) {
          if (Wv) throw new TypeError("Cannot add initializers after decoration has completed");
          ev.push(gv(vv || null))
        };
        var Cv = (0, Pv[wv])("accessor" === dv ? {
          get: Tv.get,
          set: Tv.set
        } : Tv[Nv], av);
        if ("accessor" === dv) {
          if (void 0 === Cv) continue;
          if (null === Cv || "object" !== typeof Cv) throw new TypeError("Object expected");
          (pv = gv(Cv.get)) && (Tv.get = pv), (pv = gv(Cv.set)) && (Tv.set = pv), (pv = gv(Cv.init)) && Sv.unshift(pv)
        } else(pv = gv(Cv)) && ("field" === dv ? Sv.unshift(pv) : Tv[Nv] = pv)
      }
      lv && Object.defineProperty(lv, hv.name, Tv), Wv = !0
    }

    function lv(vv, zv, Pv) {
      for (var hv = arguments.length > 2, Sv = 0; Sv < zv.length; Sv++) Pv = hv ? zv[Sv].call(vv, Pv) : zv[Sv].call(vv);
      return hv ? Pv : void 0
    }

    function Tv(vv) {
      return "symbol" === typeof vv ? vv : "".concat(vv)
    }

    function Wv(vv, zv, Pv) {
      return "symbol" === typeof zv && (zv = zv.description ? "[".concat(zv.description, "]") : ""), Object.defineProperty(vv, "name", {
        configurable: !0,
        value: Pv ? "".concat(Pv, " ", zv) : zv
      })
    }

    function wv(vv, zv) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(vv, zv)
    }

    function av(vv, zv, Pv, hv) {
      return new(Pv || (Pv = Promise))((function(Sv, ev) {
        function gv(vv) {
          try {
            dv(hv.next(vv))
          } catch (zv) {
            ev(zv)
          }
        }

        function pv(vv) {
          try {
            dv(hv.throw(vv))
          } catch (zv) {
            ev(zv)
          }
        }

        function dv(vv) {
          var zv;
          vv.done ? Sv(vv.value) : (zv = vv.value, zv instanceof Pv ? zv : new Pv((function(vv) {
            vv(zv)
          }))).then(gv, pv)
        }
        dv((hv = hv.apply(vv, zv || [])).next())
      }))
    }

    function sv(vv, zv) {
      var Pv, hv, Sv, ev = {
          label: 0,
          sent: function() {
            if (1 & Sv[0]) throw Sv[1];
            return Sv[1]
          },
          trys: [],
          ops: []
        },
        gv = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return gv.next = pv(0), gv.throw = pv(1), gv.return = pv(2), "function" === typeof Symbol && (gv[Symbol.iterator] = function() {
        return this
      }), gv;

      function pv(pv) {
        return function(dv) {
          return function(pv) {
            if (Pv) throw new TypeError("Generator is already executing.");
            for (; gv && (gv = 0, pv[0] && (ev = 0)), ev;) try {
              if (Pv = 1, hv && (Sv = 2 & pv[0] ? hv.return : pv[0] ? hv.throw || ((Sv = hv.return) && Sv.call(hv), 0) : hv.next) && !(Sv = Sv.call(hv, pv[1])).done) return Sv;
              switch (hv = 0, Sv && (pv = [2 & pv[0], Sv.value]), pv[0]) {
                case 0:
                case 1:
                  Sv = pv;
                  break;
                case 4:
                  return ev.label++, {
                    value: pv[1],
                    done: !1
                  };
                case 5:
                  ev.label++, hv = pv[1], pv = [0];
                  continue;
                case 7:
                  pv = ev.ops.pop(), ev.trys.pop();
                  continue;
                default:
                  if (!(Sv = (Sv = ev.trys).length > 0 && Sv[Sv.length - 1]) && (6 === pv[0] || 2 === pv[0])) {
                    ev = 0;
                    continue
                  }
                  if (3 === pv[0] && (!Sv || pv[1] > Sv[0] && pv[1] < Sv[3])) {
                    ev.label = pv[1];
                    break
                  }
                  if (6 === pv[0] && ev.label < Sv[1]) {
                    ev.label = Sv[1], Sv = pv;
                    break
                  }
                  if (Sv && ev.label < Sv[2]) {
                    ev.label = Sv[2], ev.ops.push(pv);
                    break
                  }
                  Sv[2] && ev.ops.pop(), ev.trys.pop();
                  continue
              }
              pv = zv.call(vv, ev)
            } catch (dv) {
              pv = [6, dv], hv = 0
            } finally {
              Pv = Sv = 0
            }
            if (5 & pv[0]) throw pv[1];
            return {
              value: pv[0] ? pv[1] : void 0,
              done: !0
            }
          }([pv, dv])
        }
      }
    }
    var Cv = Object.create ? function(vv, zv, Pv, hv) {
      void 0 === hv && (hv = Pv);
      var Sv = Object.getOwnPropertyDescriptor(zv, Pv);
      Sv && !("get" in Sv ? !zv.__esModule : Sv.writable || Sv.configurable) || (Sv = {
        enumerable: !0,
        get: function() {
          return zv[Pv]
        }
      }), Object.defineProperty(vv, hv, Sv)
    } : function(vv, zv, Pv, hv) {
      void 0 === hv && (hv = Pv), vv[hv] = zv[Pv]
    };

    function iv(vv, zv) {
      for (var Pv in vv) "default" === Pv || Object.prototype.hasOwnProperty.call(zv, Pv) || Cv(zv, vv, Pv)
    }

    function cv(vv) {
      var zv = "function" === typeof Symbol && Symbol.iterator,
        Pv = zv && vv[zv],
        hv = 0;
      if (Pv) return Pv.call(vv);
      if (vv && "number" === typeof vv.length) return {
        next: function() {
          return vv && hv >= vv.length && (vv = void 0), {
            value: vv && vv[hv++],
            done: !vv
          }
        }
      };
      throw new TypeError(zv ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Gv(vv, zv) {
      var Pv = "function" === typeof Symbol && vv[Symbol.iterator];
      if (!Pv) return vv;
      var hv, Sv, ev = Pv.call(vv),
        gv = [];
      try {
        for (;
          (void 0 === zv || zv-- > 0) && !(hv = ev.next()).done;) gv.push(hv.value)
      } catch (pv) {
        Sv = {
          error: pv
        }
      } finally {
        try {
          hv && !hv.done && (Pv = ev.return) && Pv.call(ev)
        } finally {
          if (Sv) throw Sv.error
        }
      }
      return gv
    }

    function mv() {
      for (var vv = [], zv = 0; zv < arguments.length; zv++) vv = vv.concat(Gv(arguments[zv]));
      return vv
    }

    function jv() {
      for (var vv = 0, zv = 0, Pv = arguments.length; zv < Pv; zv++) vv += arguments[zv].length;
      var hv = Array(vv),
        Sv = 0;
      for (zv = 0; zv < Pv; zv++)
        for (var ev = arguments[zv], gv = 0, pv = ev.length; gv < pv; gv++, Sv++) hv[Sv] = ev[gv];
      return hv
    }

    function fv(vv, zv, Pv) {
      if (Pv || 2 === arguments.length)
        for (var hv, Sv = 0, ev = zv.length; Sv < ev; Sv++) !hv && Sv in zv || (hv || (hv = Array.prototype.slice.call(zv, 0, Sv)), hv[Sv] = zv[Sv]);
      return vv.concat(hv || Array.prototype.slice.call(zv))
    }

    function Fv(vv) {
      return this instanceof Fv ? (this.v = vv, this) : new Fv(vv)
    }

    function Yv(vv, zv, Pv) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var hv, Sv = Pv.apply(vv, zv || []),
        ev = [];
      return hv = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), gv("next"), gv("throw"), gv("return", (function(vv) {
        return function(zv) {
          return Promise.resolve(zv).then(vv, Nv)
        }
      })), hv[Symbol.asyncIterator] = function() {
        return this
      }, hv;

      function gv(vv, zv) {
        Sv[vv] && (hv[vv] = function(zv) {
          return new Promise((function(Pv, hv) {
            ev.push([vv, zv, Pv, hv]) > 1 || pv(vv, zv)
          }))
        }, zv && (hv[vv] = zv(hv[vv])))
      }

      function pv(vv, zv) {
        try {
          (Pv = Sv[vv](zv)).value instanceof Fv ? Promise.resolve(Pv.value.v).then(dv, Nv) : lv(ev[0][2], Pv)
        } catch (hv) {
          lv(ev[0][3], hv)
        }
        var Pv
      }

      function dv(vv) {
        pv("next", vv)
      }

      function Nv(vv) {
        pv("throw", vv)
      }

      function lv(vv, zv) {
        vv(zv), ev.shift(), ev.length && pv(ev[0][0], ev[0][1])
      }
    }

    function nv(vv) {
      var zv, Pv;
      return zv = {}, hv("next"), hv("throw", (function(vv) {
        throw vv
      })), hv("return"), zv[Symbol.iterator] = function() {
        return this
      }, zv;

      function hv(hv, Sv) {
        zv[hv] = vv[hv] ? function(zv) {
          return (Pv = !Pv) ? {
            value: Fv(vv[hv](zv)),
            done: !1
          } : Sv ? Sv(zv) : zv
        } : Sv
      }
    }

    function Ov(vv) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var zv, Pv = vv[Symbol.asyncIterator];
      return Pv ? Pv.call(vv) : (vv = cv(vv), zv = {}, hv("next"), hv("throw"), hv("return"), zv[Symbol.asyncIterator] = function() {
        return this
      }, zv);

      function hv(Pv) {
        zv[Pv] = vv[Pv] && function(zv) {
          return new Promise((function(hv, Sv) {
            (function(vv, zv, Pv, hv) {
              Promise.resolve(hv).then((function(zv) {
                vv({
                  value: zv,
                  done: Pv
                })
              }), zv)
            })(hv, Sv, (zv = vv[Pv](zv)).done, zv.value)
          }))
        }
      }
    }

    function Dv(vv, zv) {
      return Object.defineProperty ? Object.defineProperty(vv, "raw", {
        value: zv
      }) : vv.raw = zv, vv
    }
    var Kv = Object.create ? function(vv, zv) {
        Object.defineProperty(vv, "default", {
          enumerable: !0,
          value: zv
        })
      } : function(vv, zv) {
        vv.default = zv
      },
      Vv = function(vv) {
        return Vv = Object.getOwnPropertyNames || function(vv) {
          var zv = [];
          for (var Pv in vv) Object.prototype.hasOwnProperty.call(vv, Pv) && (zv[zv.length] = Pv);
          return zv
        }, Vv(vv)
      };

    function Uv(vv) {
      if (vv && vv.__esModule) return vv;
      var zv = {};
      if (null != vv)
        for (var Pv = Vv(vv), hv = 0; hv < Pv.length; hv++) "default" !== Pv[hv] && Cv(zv, vv, Pv[hv]);
      return Kv(zv, vv), zv
    }

    function Rv(vv) {
      return vv && vv.__esModule ? vv : {
        default: vv
      }
    }

    function xv(vv, zv, Pv, hv) {
      if ("a" === Pv && !hv) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof zv ? vv !== zv || !hv : !zv.has(vv)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Pv ? hv : "a" === Pv ? hv.call(vv) : hv ? hv.value : zv.get(vv)
    }

    function tv(vv, zv, Pv, hv, Sv) {
      if ("m" === hv) throw new TypeError("Private method is not writable");
      if ("a" === hv && !Sv) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof zv ? vv !== zv || !Sv : !zv.has(vv)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === hv ? Sv.call(vv, Pv) : Sv ? Sv.value = Pv : zv.set(vv, Pv), Pv
    }

    function qv(vv, zv) {
      if (null === zv || "object" !== typeof zv && "function" !== typeof zv) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof vv ? zv === vv : vv.has(zv)
    }

    function Iv(vv, zv, Pv) {
      if (null !== zv && void 0 !== zv) {
        if ("object" !== typeof zv && "function" !== typeof zv) throw new TypeError("Object expected.");
        var hv, Sv;
        if (Pv) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          hv = zv[Symbol.asyncDispose]
        }
        if (void 0 === hv) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          hv = zv[Symbol.dispose], Pv && (Sv = hv)
        }
        if ("function" !== typeof hv) throw new TypeError("Object not disposable.");
        Sv && (hv = function() {
          try {
            Sv.call(this)
          } catch (vv) {
            return Promise.reject(vv)
          }
        }), vv.stack.push({
          value: zv,
          dispose: hv,
          async: Pv
        })
      } else Pv && vv.stack.push({
        async: !0
      });
      return zv
    }
    var Qv = "function" === typeof SuppressedError ? SuppressedError : function(vv, zv, Pv) {
      var hv = new Error(Pv);
      return hv.name = "SuppressedError", hv.error = vv, hv.suppressed = zv, hv
    };

    function Zv(vv) {
      function zv(zv) {
        vv.error = vv.hasError ? new Qv(zv, vv.error, "An error was suppressed during disposal.") : zv, vv.hasError = !0
      }
      var Pv, hv = 0;
      return function Sv() {
        for (; Pv = vv.stack.pop();) try {
          if (!Pv.async && 1 === hv) return hv = 0, vv.stack.push(Pv), Promise.resolve().then(Sv);
          if (Pv.dispose) {
            var ev = Pv.dispose.call(Pv.value);
            if (Pv.async) return hv |= 2, Promise.resolve(ev).then(Sv, (function(vv) {
              return zv(vv), Sv()
            }))
          } else hv |= 1
        } catch (gv) {
          zv(gv)
        }
        if (1 === hv) return vv.hasError ? Promise.reject(vv.error) : Promise.resolve();
        if (vv.hasError) throw vv.error
      }()
    }

    function Av(vv, zv) {
      return "string" === typeof vv && /^\.\.?\//.test(vv) ? vv.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(vv, Pv, hv, Sv, ev) {
        return Pv ? zv ? ".jsx" : ".js" : !hv || Sv && ev ? hv + Sv + "." + ev.toLowerCase() + "js" : vv
      })) : vv
    }
    const Lv = {
      __extends: Sv,
      __assign: ev,
      __rest: gv,
      __decorate: pv,
      __param: dv,
      __esDecorate: Nv,
      __runInitializers: lv,
      __propKey: Tv,
      __setFunctionName: Wv,
      __metadata: wv,
      __awaiter: av,
      __generator: sv,
      __createBinding: Cv,
      __exportStar: iv,
      __values: cv,
      __read: Gv,
      __spread: mv,
      __spreadArrays: jv,
      __spreadArray: fv,
      __await: Fv,
      __asyncGenerator: Yv,
      __asyncDelegator: nv,
      __asyncValues: Ov,
      __makeTemplateObject: Dv,
      __importStar: Uv,
      __importDefault: Rv,
      __classPrivateFieldGet: xv,
      __classPrivateFieldSet: tv,
      __classPrivateFieldIn: qv,
      __addDisposableResource: Iv,
      __disposeResources: Zv,
      __rewriteRelativeImportExtension: Av
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);