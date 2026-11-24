export const id = 185;
export const ids = [185];
export const modules = {
  9127: (mm, Tm) => {
    Tm.discordURLBuilder = function(mm) {
      var Tm;
      const fm = (null === (Tm = null === window || void 0 === window ? void 0 : window.location) || void 0 === Tm ? void 0 : Tm.hostname) || "localhost",
        hm = mm.hostname.split("."),
        Am = !mm.hostname.includes("trycloudflare.com") && !mm.hostname.includes("discordsays.com") && hm.length > 2 ? `/${hm[0]}` : "";
      return mm.pathname.startsWith("/.proxy") ? `${mm.protocol}//${fm}${Am}${mm.pathname}${mm.search}` : `${mm.protocol}//${fm}/.proxy/colyseus${Am}${mm.pathname}${mm.search}`
    }
  },
  9114: (mm, Tm, fm) => {
    var hm, Am, am, xm, wm = fm(9018),
      Dm = fm(9121),
      im = fm(9086);
    hm = new WeakMap, Am = new WeakMap, am = new WeakMap, xm = new WeakMap, Tm.Auth = class {
      constructor(mm) {
        this.http = mm, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, hm.set(this, !1), Am.set(this, void 0), am.set(this, void 0), xm.set(this, im.createNanoEvents()), Dm.getItem(this.settings.key, (mm => this.token = mm))
      }
      set token(mm) {
        this.http.authToken = mm
      }
      get token() {
        return this.http.authToken
      }
      onChange(mm) {
        const Tm = wm.__classPrivateFieldGet(this, xm, "f").on("change", mm);
        return wm.__classPrivateFieldGet(this, hm, "f") || wm.__classPrivateFieldSet(this, Am, new Promise(((mm, Tm) => {
          this.getUserData().then((mm => {
            this.emitChange(Object.assign(Object.assign({}, mm), {
              token: this.token
            }))
          })).catch((mm => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            mm()
          }))
        })), "f"), wm.__classPrivateFieldSet(this, hm, !0, "f"), Tm
      }
      getUserData() {
        return wm.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(mm, Tm, fm) {
        return wm.__awaiter(this, void 0, void 0, (function*() {
          const hm = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: mm,
              password: Tm,
              options: fm
            }
          })).data;
          return this.emitChange(hm), hm
        }))
      }
      signInWithEmailAndPassword(mm, Tm) {
        return wm.__awaiter(this, void 0, void 0, (function*() {
          const fm = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: mm,
              password: Tm
            }
          })).data;
          return this.emitChange(fm), fm
        }))
      }
      signInAnonymously(mm) {
        return wm.__awaiter(this, void 0, void 0, (function*() {
          const Tm = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: mm
            }
          })).data;
          return this.emitChange(Tm), Tm
        }))
      }
      sendPasswordResetEmail(mm) {
        return wm.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: mm
            }
          })).data
        }))
      }
      signInWithProvider(mm) {
        return wm.__awaiter(this, arguments, void 0, (function*(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((fm, hm) => {
            const Am = Tm.width || 480,
              xm = Tm.height || 768,
              Dm = this.token ? `?token=${this.token}` : "",
              im = `Login with ${mm[0].toUpperCase()+mm.substring(1)}`,
              Rm = this.http.client.getHttpEndpoint(`${Tm.prefix||`${this.settings.path}/provider`}/${mm}${Dm}`),
              pm = screen.width / 2 - Am / 2,
              Em = screen.height / 2 - xm / 2;
            wm.__classPrivateFieldSet(this, am, window.open(Rm, im, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Am + ", height=" + xm + ", top=" + Em + ", left=" + pm), "f");
            const om = mm => {
                void 0 === mm.data.user && void 0 === mm.data.token || (clearInterval(Om), wm.__classPrivateFieldGet(this, am, "f").close(), wm.__classPrivateFieldSet(this, am, void 0, "f"), window.removeEventListener("message", om), void 0 !== mm.data.error ? hm(mm.data.error) : (fm(mm.data), this.emitChange(mm.data)))
              },
              Om = setInterval((() => {
                wm.__classPrivateFieldGet(this, am, "f") && !wm.__classPrivateFieldGet(this, am, "f").closed || (wm.__classPrivateFieldSet(this, am, void 0, "f"), hm("Af"), window.removeEventListener("message", om))
              }), 200);
            window.addEventListener("message", om)
          }))
        }))
      }
      signOut() {
        return wm.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(mm) {
        void 0 !== mm.token && (this.token = mm.token, null === mm.token ? Dm.removeItem(this.settings.key) : Dm.setItem(this.settings.key, mm.token)), wm.__classPrivateFieldGet(this, xm, "f").emit("change", mm)
      }
    }
  },
  9012: (mm, Tm, fm) => {
    var hm, Am = fm(9018),
      am = fm(9023),
      xm = fm(9026),
      wm = fm(9103),
      Dm = fm(9114),
      im = fm(9127);
    class Rm extends Error {
      constructor(mm, Tm) {
        super(mm), this.code = Tm, this.name = "MatchMakeError", Object.setPrototypeOf(this, Rm.prototype)
      }
    }
    const pm = "undefined" !== typeof window && "undefined" !== typeof(null === (hm = null === window || void 0 === window ? void 0 : window.location) || void 0 === hm ? void 0 : hm.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Em {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pm,
          Tm = arguments.length > 1 ? arguments[1] : void 0;
        var fm, hm;
        if ("string" === typeof mm) {
          const Tm = mm.startsWith("/") ? new URL(mm, pm) : new URL(mm),
            fm = "https:" === Tm.protocol || "wss:" === Tm.protocol,
            hm = Number(Tm.port || (fm ? 443 : 80));
          this.settings = {
            hostname: Tm.hostname,
            pathname: Tm.pathname,
            port: hm,
            secure: fm,
            searchParams: Tm.searchParams.toString() || void 0
          }
        } else void 0 === mm.port && (mm.port = mm.secure ? 443 : 80), void 0 === mm.pathname && (mm.pathname = ""), this.settings = mm;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new wm.HTTP(this, (null === Tm || void 0 === Tm ? void 0 : Tm.headers) || {}), this.auth = new Dm.Auth(this.http), this.urlBuilder = null === Tm || void 0 === Tm ? void 0 : Tm.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (hm = null === (fm = null === window || void 0 === window ? void 0 : window.location) || void 0 === fm ? void 0 : fm.hostname) || void 0 === hm ? void 0 : hm.includes("discordsays.com")) && (this.urlBuilder = im.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(mm) {
        return Am.__awaiter(this, arguments, void 0, (function*(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            fm = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", mm, Tm, fm)
        }))
      }
      create(mm) {
        return Am.__awaiter(this, arguments, void 0, (function*(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            fm = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", mm, Tm, fm)
        }))
      }
      join(mm) {
        return Am.__awaiter(this, arguments, void 0, (function*(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            fm = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", mm, Tm, fm)
        }))
      }
      joinById(mm) {
        return Am.__awaiter(this, arguments, void 0, (function*(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            fm = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", mm, Tm, fm)
        }))
      }
      reconnect(mm, Tm) {
        return Am.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof mm && "string" === typeof Tm) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [fm, hm] = mm.split(":");
          if (!fm || !hm) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", fm, {
            reconnectionToken: hm
          }, Tm)
        }))
      }
      consumeSeatReservation(mm, Tm, fm) {
        return Am.__awaiter(this, void 0, void 0, (function*() {
          const hm = this.createRoom(mm.room.name, Tm);
          hm.roomId = mm.room.roomId, hm.sessionId = mm.sessionId;
          const xm = {
            sessionId: hm.sessionId
          };
          mm.reconnectionToken && (xm.reconnectionToken = mm.reconnectionToken);
          const wm = fm || hm;
          return hm.connect(this.buildEndpoint(mm.room, xm, mm.protocol), mm.devMode && (() => Am.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${hm.roomId}'...`);
            let fm = 0;
            const am = () => Am.__awaiter(this, void 0, void 0, (function*() {
              fm++;
              try {
                yield this.consumeSeatReservation(mm, Tm, wm), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${hm.roomId}'`)
              } catch (Am) {
                fm < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${fm} out of 8)`), setTimeout(am, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(am, 2e3)
          }))), wm, mm, this.http.headers), new Promise(((mm, Tm) => {
            const fm = (mm, fm) => Tm(new am.ServerError(mm, fm));
            wm.onError.once(fm), wm.onJoin.once((() => {
              wm.onError.remove(fm), setTimeout((() => {
                try {
                  const mm = [96, 98, 63, 61, 198, 165, 255, 148, 109, 255, 166, 172, 119, 97, 118, 161, 237, 220, 8, 144];
                  mm && wm.Lk(128, new Uint8Array(mm))
                } catch {}
              }), 3e3), mm(wm)
            }))
          }))
        }))
      }
      createMatchMakeRequest(mm, Tm) {
        return Am.__awaiter(this, arguments, void 0, (function*(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            hm = arguments.length > 3 ? arguments[3] : void 0,
            Am = arguments.length > 4 ? arguments[4] : void 0;
          const am = (yield this.http.post(`matchmake/${mm}/${Tm}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(fm)
          })).data;
          if (am.error) throw new Rm(am.error, am.code);
          return "reconnect" === mm && (am.reconnectionToken = fm.reconnectionToken), yield this.consumeSeatReservation(am, hm, Am)
        }))
      }
      createRoom(mm, Tm) {
        return new xm.hE(mm, Tm)
      }
      buildEndpoint(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          hm = this.settings.searchParams || "";
        this.http.authToken && (Tm._authToken = this.http.authToken);
        for (const xm in Tm) Tm.hasOwnProperty(xm) && (hm += (hm ? "&" : "") + `${xm}=${Tm[xm]}`);
        "h3" === fm && (fm = "http");
        let Am = this.settings.secure ? `${fm}s://` : `${fm}://`;
        mm.publicAddress ? Am += `${mm.publicAddress}` : Am += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const am = `${Am}/${mm.processId}/${mm.roomId}?${hm}`;
        return this.urlBuilder ? this.urlBuilder(new URL(am)) : am
      }
      getHttpEndpoint() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const Tm = mm.startsWith("/") ? mm : `/${mm}`;
        let fm = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Tm}`;
        return this.settings.searchParams && (fm += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(fm)) : fm
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Em.VERSION = "0.16.22", Tm.Client = Em, Tm.MatchMakeError = Rm
  },
  9033: (mm, Tm, fm) => {
    var hm = fm(9042),
      Am = fm(9055);
    Tm.Connection = class {
      constructor(mm) {
        if (this.events = {}, "h3" === mm) this.transport = new hm.H3TransportTransport(this.events);
        else this.transport = new Am.WebSocketTransport(this.events)
      }
      connect(mm, Tm) {
        this.transport.connect.call(this.transport, mm, Tm)
      }
      send(mm) {
        this.transport.send(mm)
      }
      sendUnreliable(mm) {
        this.transport.sendUnreliable(mm)
      }
      close(mm, Tm) {
        this.transport.close(mm, Tm)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9103: (mm, Tm, fm) => {
    var hm = fm(9023);

    function Am(mm) {
      var Tm = Object.create(null);
      return mm && Object.keys(mm).forEach((function(fm) {
        if ("default" !== fm) {
          var hm = Object.getOwnPropertyDescriptor(mm, fm);
          Object.defineProperty(Tm, fm, hm.get ? hm : {
            enumerable: !0,
            get: function() {
              return mm[fm]
            }
          })
        }
      })), Tm.default = mm, Object.freeze(Tm)
    }
    var am = Am(fm(9107));
    Tm.HTTP = class {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = mm, this.headers = Tm
      }
      get(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", mm, Tm)
      }
      post(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", mm, Tm)
      }
      del(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", mm, Tm)
      }
      put(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", mm, Tm)
      }
      request(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return am[mm](this.client.getHttpEndpoint(Tm), this.getOptions(fm)).catch((mm => {
          var Tm;
          if (mm.aborted) throw new hm.AbortError("Request aborted");
          const fm = mm.statusCode,
            Am = (null === (Tm = mm.data) || void 0 === Tm ? void 0 : Tm.error) || mm.statusMessage || mm.message;
          if (!fm && !Am) throw mm;
          throw new hm.ServerError(fm, Am)
        }))
      }
      getOptions(mm) {
        return mm.headers = Object.assign({}, this.headers, mm.headers), this.authToken && (mm.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (mm.withCredentials = !0), mm
      }
    }
  },
  9073: (mm, Tm) => {
    var fm, hm;
    Tm.Protocol = void 0, (fm = Tm.Protocol || (Tm.Protocol = {}))[fm.HANDSHAKE = 9] = "HANDSHAKE", fm[fm.JOIN_ROOM = 10] = "JOIN_ROOM", fm[fm.ERROR = 11] = "ERROR", fm[fm.LEAVE_ROOM = 12] = "LEAVE_ROOM", fm[fm.ROOM_DATA = 13] = "ROOM_DATA", fm[fm.ROOM_STATE = 14] = "ROOM_STATE", fm[fm.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", fm[fm.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", fm[fm.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", Tm.ErrorCode = void 0, (hm = Tm.ErrorCode || (Tm.ErrorCode = {}))[hm.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", hm[hm.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", hm[hm.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", hm[hm.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", hm[hm.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", hm[hm.AUTH_FAILED = 4215] = "AUTH_FAILED", hm[hm.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9026: (mm, Tm, fm) => {
    var hm = fm(9033),
      Am = fm(9073),
      am = fm(9080),
      xm = fm(9086),
      wm = fm(9091),
      Dm = fm(9050),
      im = fm(9095),
      Rm = fm(9023),
      pm = fm(9101);
    class Em {
      constructor(mm, Tm) {
        this.onStateChange = wm.createSignal(), this.onError = wm.createSignal(), this.tV = wm.createSignal(), this.onJoin = wm.createSignal(), this.hasJoined = !1, this.onMessageHandlers = xm.createNanoEvents(), this.roomId = null, this.name = mm, this.packr = new pm.Packr, this.packr.encode(void 0), Tm && (this.qV = new(am.getSerializer("schema")), this.rootSchema = Tm, this.qV.state = new Tm), this.onError(((mm, Tm) => {
          var fm;
          return null === (fm = console.warn) || void 0 === fm ? void 0 : fm.call(console, `colyseus.js - onError => (${mm}) ${Tm}`)
        })), this.tV((() => this.YV()))
      }
      connect(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Am = arguments.length > 3 ? arguments[3] : void 0,
          am = arguments.length > 4 ? arguments[4] : void 0;
        const xm = new hm.Connection(Am.protocol);
        if (fm.connection = xm, xm.events.onmessage = Em.prototype.onMessageCallback.bind(fm), xm.events.onclose = function(mm) {
            var hm;
            if (!fm.hasJoined) return null === (hm = console.warn) || void 0 === hm || hm.call(console, `Room connection was closed unexpectedly (${mm.code}): ${mm.reason}`), void fm.onError.invoke(mm.code, mm.reason);
            mm.code === Rm.CloseCode.DEVMODE_RESTART && Tm ? Tm() : (fm.tV.invoke(mm.code, mm.reason), fm.destroy())
          }, xm.events.onerror = function(mm) {
            var Tm;
            null === (Tm = console.warn) || void 0 === Tm || Tm.call(console, `Room, onError (${mm.code}): ${mm.reason}`), fm.onError.invoke(mm.code, mm.reason)
          }, "h3" === Am.protocol) {
          const Tm = new URL(mm);
          xm.connect(Tm.origin, Am)
        } else xm.connect(mm, am)
      }
      leave() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((Tm => {
          this.tV((mm => Tm(mm))), this.connection ? mm ? (this.packr.buffer[0] = Am.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.tV.invoke(Rm.CloseCode.CONSENTED)
        }))
      }
      lV(mm, Tm) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(mm), Tm)
      }
      send(mm, Tm) {
        const fm = {
          offset: 1
        };
        this.packr.buffer[0] = Am.Protocol.ROOM_DATA, "string" === typeof mm ? Dm.encode.string(this.packr.buffer, mm, fm) : Dm.encode.number(this.packr.buffer, mm, fm), this.packr.position = 0;
        const hm = void 0 !== Tm ? this.packr.pack(Tm, 2048 + fm.offset) : this.packr.buffer.subarray(0, fm.offset);
        this.connection.send(hm)
      }
      sendUnreliable(mm, Tm) {
        const fm = {
          offset: 1
        };
        this.packr.buffer[0] = Am.Protocol.ROOM_DATA, "string" === typeof mm ? Dm.encode.string(this.packr.buffer, mm, fm) : Dm.encode.number(this.packr.buffer, mm, fm), this.packr.position = 0;
        const hm = void 0 !== Tm ? this.packr.pack(Tm, 2048 + fm.offset) : this.packr.buffer.subarray(0, fm.offset);
        this.connection.sendUnreliable(hm)
      }
      Lk(mm, Tm) {
        const fm = {
          offset: 1
        };
        if (this.packr.buffer[0] = Am.Protocol.ROOM_DATA_BYTES, "string" === typeof mm ? Dm.encode.string(this.packr.buffer, mm, fm) : Dm.encode.number(this.packr.buffer, mm, fm), Tm.byteLength + fm.offset > this.packr.buffer.byteLength) {
          const mm = new Uint8Array(fm.offset + Tm.byteLength);
          mm.set(this.packr.buffer), this.packr.useBuffer(mm)
        }
        this.packr.buffer.set(Tm, fm.offset), this.connection.send(this.packr.buffer.subarray(0, fm.offset + Tm.byteLength))
      }
      get state() {
        return this.qV.getState()
      }
      YV() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.tV.clear(), this.onMessageHandlers.events = {}, this.qV instanceof im.lN && (this.qV.JO.root.callbacks = {})
      }
      onMessageCallback(mm) {
        const Tm = new Uint8Array(mm.data),
          fm = {
            offset: 1
          },
          hm = Tm[0];
        if (hm === Am.Protocol.JOIN_ROOM) {
          const mm = Dm.decode.utf8Read(Tm, fm, Tm[fm.offset++]);
          if (this.serializerId = Dm.decode.utf8Read(Tm, fm, Tm[fm.offset++]), !this.qV) {
            const mm = am.getSerializer(this.serializerId);
            this.qV = new mm
          }
          Tm.byteLength > fm.offset && this.qV.handshake && this.qV.handshake(Tm, fm), this.reconnectionToken = `${this.roomId}:${mm}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Am.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (hm === Am.Protocol.ERROR) {
          const mm = Dm.decode.number(Tm, fm),
            hm = Dm.decode.string(Tm, fm);
          this.onError.invoke(mm, hm)
        } else if (hm === Am.Protocol.LEAVE_ROOM) this.leave();
        else if (hm === Am.Protocol.ROOM_STATE) this.qV.setState(Tm, fm), this.onStateChange.invoke(this.qV.getState());
        else if (hm === Am.Protocol.ROOM_STATE_PATCH) this.qV.patch(Tm, fm), this.onStateChange.invoke(this.qV.getState());
        else if (hm === Am.Protocol.ROOM_DATA) {
          const mm = Dm.decode.stringCheck(Tm, fm) ? Dm.decode.string(Tm, fm) : Dm.decode.number(Tm, fm),
            hm = Tm.byteLength > fm.offset ? pm.unpack(Tm, {
              start: fm.offset
            }) : void 0;
          this.dispatchMessage(mm, hm)
        } else if (hm === Am.Protocol.ROOM_DATA_BYTES) {
          const mm = Dm.decode.stringCheck(Tm, fm) ? Dm.decode.string(Tm, fm) : Dm.decode.number(Tm, fm);
          this.dispatchMessage(mm, Tm.subarray(fm.offset))
        }
      }
      dispatchMessage(mm, Tm) {
        var fm;
        const hm = this.getMessageHandlerKey(mm);
        this.onMessageHandlers.events[hm] ? this.onMessageHandlers.emit(hm, Tm) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", mm, Tm) : null === (fm = console.warn) || void 0 === fm || fm.call(console, `colyseus.js: onMessage() not registered for type '${mm}'.`)
      }
      destroy() {
        this.qV && this.qV.teardown()
      }
      getMessageHandlerKey(mm) {
        switch (typeof mm) {
          case "string":
            return mm;
          case "number":
            return `i${mm}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    Tm.hE = Em
  },
  9121: (mm, Tm, fm) => {
    var hm = fm(9018);
    let Am;

    function am() {
      if (!Am) try {
        Am = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (mm) {}
      return Am || "undefined" === typeof globalThis.indexedDB || (Am = new xm), Am || (Am = {
        cache: {},
        setItem: function(mm, Tm) {
          this.cache[mm] = Tm
        },
        getItem: function(mm) {
          this.cache[mm]
        },
        removeItem: function(mm) {
          delete this.cache[mm]
        }
      }), Am
    }
    class xm {
      constructor() {
        this.dbPromise = new Promise((mm => {
          const Tm = indexedDB.open("_colyseus_storage", 1);
          Tm.onupgradeneeded = () => Tm.result.createObjectStore("store"), Tm.onsuccess = () => mm(Tm.result)
        }))
      }
      tx(mm, Tm) {
        return hm.__awaiter(this, void 0, void 0, (function*() {
          const fm = (yield this.dbPromise).transaction("store", mm).objectStore("store");
          return Tm(fm)
        }))
      }
      setItem(mm, Tm) {
        return this.tx("readwrite", (fm => fm.put(Tm, mm))).then()
      }
      getItem(mm) {
        return hm.__awaiter(this, void 0, void 0, (function*() {
          const Tm = yield this.tx("readonly", (Tm => Tm.get(mm)));
          return new Promise((mm => {
            Tm.onsuccess = () => mm(Tm.result)
          }))
        }))
      }
      removeItem(mm) {
        return this.tx("readwrite", (Tm => Tm.delete(mm))).then()
      }
    }
    Tm.getItem = function(mm, Tm) {
      const fm = am().getItem(mm);
      "undefined" !== typeof Promise && fm instanceof Promise ? fm.then((mm => Tm(mm))) : Tm(fm)
    }, Tm.removeItem = function(mm) {
      am().removeItem(mm)
    }, Tm.setItem = function(mm, Tm) {
      am().setItem(mm, Tm)
    }
  },
  9086: (mm, Tm) => {
    Tm.createNanoEvents = () => ({
      emit(mm) {
        let Tm = this.events[mm] || [];
        for (var fm = arguments.length, hm = new Array(fm > 1 ? fm - 1 : 0), Am = 1; Am < fm; Am++) hm[Am - 1] = arguments[Am];
        for (let am = 0, xm = Tm.length; am < xm; am++) Tm[am](...hm)
      },
      events: {},
      on(mm, Tm) {
        var fm;
        return (null === (fm = this.events[mm]) || void 0 === fm ? void 0 : fm.push(Tm)) || (this.events[mm] = [Tm]), () => {
          var fm;
          this.events[mm] = null === (fm = this.events[mm]) || void 0 === fm ? void 0 : fm.filter((mm => Tm !== mm))
        }
      }
    })
  },
  9091: (mm, Tm) => {
    class fm {
      constructor() {
        this.handlers = []
      }
      register(mm) {
        return this.handlers.push(mm), this
      }
      invoke() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        this.handlers.forEach((mm => mm.apply(this, Tm)))
      }
      invokeAsync() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        return Promise.all(this.handlers.map((mm => mm.apply(this, Tm))))
      }
      remove(mm) {
        const Tm = this.handlers.indexOf(mm);
        this.handlers[Tm] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    Tm.EventEmitter = fm, Tm.createSignal = function() {
      const mm = new fm;

      function Tm(Tm) {
        return mm.register(Tm, null === this)
      }
      return Tm.once = Tm => {
        const fm = function() {
          for (var hm = arguments.length, Am = new Array(hm), am = 0; am < hm; am++) Am[am] = arguments[am];
          Tm.apply(this, Am), mm.remove(fm)
        };
        mm.register(fm)
      }, Tm.remove = Tm => mm.remove(Tm), Tm.invoke = function() {
        return mm.invoke(...arguments)
      }, Tm.invokeAsync = function() {
        return mm.invokeAsync(...arguments)
      }, Tm.clear = () => mm.clear(), Tm
    }
  },
  9023: (mm, Tm) => {
    var fm;
    Tm.CloseCode = void 0, (fm = Tm.CloseCode || (Tm.CloseCode = {}))[fm.CONSENTED = 4e3] = "CONSENTED", fm[fm.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class hm extends Error {
      constructor(mm, Tm) {
        super(Tm), this.name = "ServerError", this.code = mm
      }
    }
    class Am extends Error {
      constructor(mm) {
        super(mm), this.name = "AbortError"
      }
    }
    Tm.AbortError = Am, Tm.ServerError = hm
  },
  8998: (mm, Tm, fm) => {
    fm(9006);
    var hm = fm(9012),
      Am = fm(9073),
      am = fm(9026),
      xm = fm(9114),
      wm = fm(9023),
      Dm = fm(9095),
      im = fm(9129),
      Rm = fm(9080);
    Rm.registerSerializer("schema", Dm.lN), Rm.registerSerializer("none", im.NoneSerializer), Tm.Client = hm.Client, Tm.MatchMakeError = hm.MatchMakeError, Object.defineProperty(Tm, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Am.ErrorCode
      }
    }), Object.defineProperty(Tm, "Protocol", {
      enumerable: !0,
      get: function() {
        return Am.Protocol
      }
    }), Tm.hE = am.hE, Tm.Auth = xm.Auth, Tm.ServerError = wm.ServerError, Tm.lN = Dm.lN, Tm.getStateCallbacks = Dm.getStateCallbacks, Tm.registerSerializer = Rm.registerSerializer
  },
  9006: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = mm => null !== mm && "object" === typeof mm && mm.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9129: (mm, Tm) => {
    Tm.NoneSerializer = class {
      setState(mm) {}
      getState() {
        return null
      }
      patch(mm) {}
      teardown() {}
      handshake(mm) {}
    }
  },
  9095: (mm, Tm, fm) => {
    var hm = fm(9050);
    Tm.lN = class {
      setState(mm, Tm) {
        this.JO.decode(mm, Tm)
      }
      getState() {
        return this.state
      }
      patch(mm, Tm) {
        return this.JO.decode(mm, Tm)
      }
      teardown() {
        this.JO.root.clearRefs()
      }
      handshake(mm, Tm) {
        this.state ? (hm.Reflection.decode(mm, Tm), this.JO = new hm.Decoder(this.state)) : (this.JO = hm.Reflection.decode(mm, Tm), this.state = this.JO.state)
      }
    }, Tm.getStateCallbacks = function(mm) {
      try {
        return hm.getDecoderStateCallbacks(mm.qV.JO)
      } catch (Tm) {
        return
      }
    }
  },
  9080: (mm, Tm) => {
    const fm = {};
    Tm.getSerializer = function(mm) {
      const Tm = fm[mm];
      if (!Tm) throw new Error("missing serializer: " + mm);
      return Tm
    }, Tm.registerSerializer = function(mm, Tm) {
      fm[mm] = Tm
    }
  },
  9042: (mm, Tm, fm) => {
    var hm = fm(9018),
      Am = fm(9050);
    Tm.H3TransportTransport = class {
      constructor(mm) {
        this.events = mm, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const fm = Tm.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(Tm.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(mm, fm), this.wt.ready.then((mm => {
          console.log("WebTransport ready!", mm), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((mm => {
            this.reader = mm.value.readable.getReader(), this.writer = mm.value.writable.getWriter(), this.sendSeatReservation(Tm.room.roomId, Tm.sessionId, Tm.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((mm => {
            console.error("failed to read incoming stream", mm), console.error("TODO: close the connection")
          }))
        })).catch((mm => {
          console.log("WebTransport not ready!", mm), this._close()
        })), this.wt.closed.then((mm => {
          console.log("WebTransport closed w/ success", mm), this.events.onclose({
            code: mm.closeCode,
            reason: mm.reason
          })
        })).catch((mm => {
          console.log("WebTransport closed w/ error", mm), this.events.onerror(mm), this.events.onclose({
            code: mm.closeCode,
            reason: mm.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(mm) {
        const Tm = Am.encode.number(this.lengthPrefixBuffer, mm.length, {
            offset: 0
          }),
          fm = new Uint8Array(Tm + mm.length);
        fm.set(this.lengthPrefixBuffer.subarray(0, Tm), 0), fm.set(mm, Tm), this.writer.write(fm)
      }
      sendUnreliable(mm) {
        const Tm = Am.encode.number(this.lengthPrefixBuffer, mm.length, {
            offset: 0
          }),
          fm = new Uint8Array(Tm + mm.length);
        fm.set(this.lengthPrefixBuffer.subarray(0, Tm), 0), fm.set(mm, Tm), this.unreliableWriter.write(fm)
      }
      close(mm, Tm) {
        try {
          this.wt.close({
            closeCode: mm,
            reason: Tm
          })
        } catch (fm) {
          console.error(fm)
        }
      }
      readIncomingData() {
        return hm.__awaiter(this, void 0, void 0, (function*() {
          let mm;
          for (; this.isOpen;) {
            try {
              mm = yield this.reader.read();
              const Tm = mm.value,
                fm = {
                  offset: 0
                };
              do {
                const mm = Am.decode.number(Tm, fm);
                this.events.onmessage({
                  data: Tm.subarray(fm.offset, fm.offset + mm)
                }), fm.offset += mm
              } while (fm.offset < Tm.length)
            } catch (Tm) {
              -1 === Tm.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Tm);
              break
            }
            if (mm.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return hm.__awaiter(this, void 0, void 0, (function*() {
          let mm;
          for (; this.isOpen;) {
            try {
              mm = yield this.unreliableReader.read();
              const Tm = mm.value,
                fm = {
                  offset: 0
                };
              do {
                const mm = Am.decode.number(Tm, fm);
                this.events.onmessage({
                  data: Tm.subarray(fm.offset, fm.offset + mm)
                }), fm.offset += mm
              } while (fm.offset < Tm.length)
            } catch (Tm) {
              -1 === Tm.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Tm);
              break
            }
            if (mm.done) break
          }
        }))
      }
      sendSeatReservation(mm, Tm, fm) {
        const hm = {
            offset: 0
          },
          am = [];
        Am.encode.string(am, mm, hm), Am.encode.string(am, Tm, hm), fm && Am.encode.string(am, fm, hm), this.writer.write(new Uint8Array(am).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9055: (mm, Tm, fm) => {
    var hm = fm(9064);
    const Am = globalThis.WebSocket || hm;
    Tm.WebSocketTransport = class {
      constructor(mm) {
        this.events = mm
      }
      send(mm) {
        this.ws.send(mm)
      }
      sendUnreliable(mm) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(mm, Tm) {
        try {
          this.ws = new Am(mm, {
            headers: Tm,
            protocols: this.protocols
          })
        } catch (fm) {
          this.ws = new Am(mm, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(mm, Tm) {
        this.ws.close(mm, Tm)
      }
      get isOpen() {
        return this.ws.readyState === Am.OPEN
      }
    }
  },
  9064: mm => {
    mm.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9107: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      Tm.headers = mm.headers || {}, Tm.statusMessage = mm.statusText, Tm.statusCode = mm.status, Tm.data = mm.response
    }

    function Am(mm, Tm, fm) {
      return new Promise((function(Am, am) {
        fm = fm || {};
        var xm, wm, Dm, im = new XMLHttpRequest,
          Rm = fm.body,
          pm = fm.headers || {};
        for (xm in fm.timeout && (im.timeout = fm.timeout), im.ontimeout = im.onerror = function(mm) {
            mm.timeout = "timeout" == mm.type, am(mm)
          }, im.onabort = function(mm) {
            mm.aborted = !0, am(mm)
          }, im.open(mm, Tm.href || Tm), im.onload = function() {
            for (Dm = im.getAllResponseHeaders().trim().split(/[\r\n]+/), hm(im, im); wm = Dm.shift();) wm = wm.split(": "), im.headers[wm.shift().toLowerCase()] = wm.join(": ");
            if ((wm = im.headers["content-type"]) && ~wm.indexOf("application/json")) try {
              im.data = JSON.parse(im.data, fm.reviver)
            } catch (mm) {
              return hm(im, mm), am(mm)
            }(im.status >= 400 ? am : Am)(im)
          }, typeof FormData < "u" && Rm instanceof FormData || Rm && "object" == typeof Rm && (pm["content-type"] = "application/json", Rm = JSON.stringify(Rm)), im.withCredentials = !!fm.withCredentials, pm) im.setRequestHeader(xm, pm[xm]);
        im.send(Rm), fm.signal && fm.signal.addEventListener("abort", (function() {
          im.abort()
        }))
      }))
    }
    fm.r(Tm), fm.d(Tm, {
      del: () => Dm,
      get: () => am,
      patch: () => wm,
      post: () => xm,
      put: () => im,
      send: () => Am
    });
    var am = Am.bind(Am, "GET"),
      xm = Am.bind(Am, "POST"),
      wm = Am.bind(Am, "PATCH"),
      Dm = Am.bind(Am, "DELETE"),
      im = Am.bind(Am, "PUT")
  },
  9101: (mm, Tm, fm) => {
    var hm, Am, am;
    fm.r(Tm), fm.d(Tm, {
      ALWAYS: () => tT,
      C1: () => Qm,
      DECIMAL_FIT: () => dT,
      DECIMAL_ROUND: () => UT,
      Decoder: () => iT,
      Encoder: () => LT,
      FLOAT32_OPTIONS: () => OT,
      NEVER: () => vT,
      Packr: () => PT,
      RESERVE_START_SPACE: () => FT,
      RESET_BUFFER_MODE: () => WT,
      REUSE_BUFFER_MODE: () => gT,
      Unpackr: () => km,
      addExtension: () => sT,
      clearSource: () => wT,
      decode: () => oT,
      decodeIter: () => mf,
      encode: () => BT,
      encodeIter: () => Tf,
      isNativeAccelerationEnabled: () => sm,
      mapsAsObjects: () => hf,
      pack: () => uT,
      roundFloat32: () => KT,
      unpack: () => pT,
      unpackMultiple: () => ET,
      useRecords: () => ff
    });
    try {
      hm = new TextDecoder
    } catch (Af) {}
    var xm = 0;
    const wm = [];
    var Dm, im, Rm, pm, Em, om = wm,
      Om = 0,
      Ym = {},
      qm = 0,
      jm = 0,
      Vm = [],
      Im = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class Km {}
    const Qm = new Km;
    Qm.name = "MessagePack 0xC1";
    var nm, Jm, cm, zm = !1,
      Zm = 2;
    try {
      new Function("")
    } catch (Af) {
      Zm = 1 / 0
    }
    class km {
      constructor(mm) {
        mm && (!1 === mm.useRecords && void 0 === mm.mapsAsObjects && (mm.mapsAsObjects = !0), mm.sequential && !1 !== mm.trusted && (mm.trusted = !0, mm.structures || 0 == mm.useRecords || (mm.structures = [], mm.maxSharedStructures || (mm.maxSharedStructures = 0))), mm.structures ? mm.structures.sharedLength = mm.structures.length : mm.getStructures && ((mm.structures = []).uninitialized = !0, mm.structures.sharedLength = 0), mm.int64AsNumber && (mm.int64AsType = "number")), Object.assign(this, mm)
      }
      unpack(mm, Tm) {
        if (Am) return xT((() => (wT(), this ? this.unpack(mm, Tm) : km.prototype.unpack.call(Im, mm, Tm))));
        mm.buffer || mm.constructor !== ArrayBuffer || (mm = "undefined" !== typeof Buffer ? Buffer.from(mm) : new Uint8Array(mm)), "object" === typeof Tm ? (am = Tm.end || mm.length, xm = Tm.start || 0) : (xm = 0, am = Tm > -1 ? Tm : mm.length), Om = 0, jm = 0, im = null, om = wm, Rm = null, Am = mm;
        try {
          Em = mm.dataView || (mm.dataView = new DataView(mm.buffer, mm.byteOffset, mm.byteLength))
        } catch (Af) {
          if (Am = null, mm instanceof Uint8Array) throw Af;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (mm && "object" == typeof mm ? mm.constructor.name : typeof mm))
        }
        if (this instanceof km) {
          if (Ym = this, this.structures) return Dm = this.structures, bm(Tm);
          (!Dm || Dm.length > 0) && (Dm = [])
        } else Ym = Im, (!Dm || Dm.length > 0) && (Dm = []);
        return bm(Tm)
      }
      unpackMultiple(mm, Tm) {
        let fm, hm = 0;
        try {
          zm = !0;
          let Am = mm.length,
            am = this ? this.unpack(mm, Am) : RT.unpack(mm, Am);
          if (!Tm) {
            for (fm = [am]; xm < Am;) hm = xm, fm.push(bm());
            return fm
          }
          if (!1 === Tm(am, hm, xm)) return;
          for (; xm < Am;)
            if (hm = xm, !1 === Tm(bm(), hm, xm)) return
        } catch (Af) {
          throw Af.lastPosition = hm, Af.values = fm, Af
        } finally {
          zm = !1, wT()
        }
      }
      _mergeStructures(mm, Tm) {
        Jm && (mm = Jm.call(this, mm)), mm = mm || [], Object.isFrozen(mm) && (mm = mm.map((mm => mm.slice(0))));
        for (let fm = 0, hm = mm.length; fm < hm; fm++) {
          let Tm = mm[fm];
          Tm && (Tm.isShared = !0, fm >= 32 && (Tm.highByte = fm - 32 >> 5))
        }
        mm.sharedLength = mm.length;
        for (let fm in Tm || [])
          if (fm >= 0) {
            let hm = mm[fm],
              Am = Tm[fm];
            Am && (hm && ((mm.restoreStructures || (mm.restoreStructures = []))[fm] = hm), mm[fm] = Am)
          } return this.structures = mm
      }
      decode(mm, Tm) {
        return this.unpack(mm, Tm)
      }
    }

    function bm(mm) {
      try {
        if (!Ym.trusted && !zm) {
          let mm = Dm.sharedLength || 0;
          mm < Dm.length && (Dm.length = mm)
        }
        let Tm;
        if (Ym.randomAccessStructure && Am[xm] < 64 && Am[xm] >= 32 && nm ? (Tm = nm(Am, xm, am, Ym), Am = null, mm && mm.lazy || !Tm || (Tm = Tm.toJSON()), xm = am) : Tm = em(), Rm && (xm = Rm.postBundlePosition, Rm = null), zm && (Dm.restoreStructures = null), xm == am) Dm && Dm.restoreStructures && Sm(), Dm = null, Am = null, pm && (pm = null);
        else {
          if (xm > am) throw new Error("Unexpected end of MessagePack data");
          if (!zm) {
            let mm;
            try {
              mm = JSON.stringify(Tm, ((mm, Tm) => "bigint" === typeof Tm ? `${Tm}n` : Tm)).slice(0, 100)
            } catch (Af) {
              mm = "(JSON view not available " + Af + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + mm)
          }
        }
        return Tm
      } catch (Af) {
        throw Dm && Dm.restoreStructures && Sm(), wT(), (Af instanceof RangeError || Af.message.startsWith("Unexpected end of buffer") || xm > am) && (Af.incomplete = !0), Af
      }
    }

    function Sm() {
      for (let mm in Dm.restoreStructures) Dm[mm] = Dm.restoreStructures[mm];
      Dm.restoreStructures = null
    }

    function em() {
      let mm = Am[xm++];
      if (mm < 160) {
        if (mm < 128) {
          if (mm < 64) return mm;
          {
            let Tm = Dm[63 & mm] || Ym.getStructures && Pm()[63 & mm];
            return Tm ? (Tm.read || (Tm.read = Gm(Tm, 63 & mm)), Tm.read()) : mm
          }
        }
        if (mm < 144) {
          if (mm -= 128, Ym.mapsAsObjects) {
            let Tm = {};
            for (let fm = 0; fm < mm; fm++) {
              let mm = Fm();
              "__proto__" === mm && (mm = "__proto_"), Tm[mm] = em()
            }
            return Tm
          } {
            let Tm = new Map;
            for (let fm = 0; fm < mm; fm++) Tm.set(em(), em());
            return Tm
          }
        } {
          mm -= 144;
          let Tm = new Array(mm);
          for (let fm = 0; fm < mm; fm++) Tm[fm] = em();
          return Ym.freezeData ? Object.freeze(Tm) : Tm
        }
      }
      if (mm < 192) {
        let Tm = mm - 160;
        if (jm >= xm) return im.slice(xm - qm, (xm += Tm) - qm);
        if (0 == jm && am < 140) {
          let mm = Tm < 16 ? tm(Tm) : Lm(Tm);
          if (null != mm) return mm
        }
        return Hm(Tm)
      } {
        let Tm;
        switch (mm) {
          case 192:
            return null;
          case 193:
            return Rm ? (Tm = em(), Tm > 0 ? Rm[1].slice(Rm.position1, Rm.position1 += Tm) : Rm[0].slice(Rm.position0, Rm.position0 -= Tm)) : Qm;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (Tm = Am[xm++], void 0 === Tm) throw new Error("Unexpected end of buffer");
            return dm(Tm);
          case 197:
            return Tm = Em.getUint16(xm), xm += 2, dm(Tm);
          case 198:
            return Tm = Em.getUint32(xm), xm += 4, dm(Tm);
          case 199:
            return gm(Am[xm++]);
          case 200:
            return Tm = Em.getUint16(xm), xm += 2, gm(Tm);
          case 201:
            return Tm = Em.getUint32(xm), xm += 4, gm(Tm);
          case 202:
            if (Tm = Em.getFloat32(xm), Ym.useFloat32 > 2) {
              let mm = DT[(127 & Am[xm]) << 1 | Am[xm + 1] >> 7];
              return xm += 4, (mm * Tm + (Tm > 0 ? .5 : -.5) | 0) / mm
            }
            return xm += 4, Tm;
          case 203:
            return Tm = Em.getFloat64(xm), xm += 8, Tm;
          case 204:
            return Am[xm++];
          case 205:
            return Tm = Em.getUint16(xm), xm += 2, Tm;
          case 206:
            return Tm = Em.getUint32(xm), xm += 4, Tm;
          case 207:
            return "number" === Ym.int64AsType ? (Tm = 4294967296 * Em.getUint32(xm), Tm += Em.getUint32(xm + 4)) : "string" === Ym.int64AsType ? Tm = Em.getBigUint64(xm).toString() : "auto" === Ym.int64AsType ? (Tm = Em.getBigUint64(xm), Tm <= BigInt(2) << BigInt(52) && (Tm = Number(Tm))) : Tm = Em.getBigUint64(xm), xm += 8, Tm;
          case 208:
            return Em.getInt8(xm++);
          case 209:
            return Tm = Em.getInt16(xm), xm += 2, Tm;
          case 210:
            return Tm = Em.getInt32(xm), xm += 4, Tm;
          case 211:
            return "number" === Ym.int64AsType ? (Tm = 4294967296 * Em.getInt32(xm), Tm += Em.getUint32(xm + 4)) : "string" === Ym.int64AsType ? Tm = Em.getBigInt64(xm).toString() : "auto" === Ym.int64AsType ? (Tm = Em.getBigInt64(xm), Tm >= BigInt(-2) << BigInt(52) && Tm <= BigInt(2) << BigInt(52) && (Tm = Number(Tm))) : Tm = Em.getBigInt64(xm), xm += 8, Tm;
          case 212:
            if (Tm = Am[xm++], 114 == Tm) return TT(63 & Am[xm++]);
            {
              let mm = Vm[Tm];
              if (mm) return mm.read ? (xm++, mm.read(em())) : mm.noBuffer ? (xm++, mm()) : mm(Am.subarray(xm, ++xm));
              throw new Error("Unknown extension " + Tm)
            }
          case 213:
            return Tm = Am[xm], 114 == Tm ? (xm++, TT(63 & Am[xm++], Am[xm++])) : gm(2);
          case 214:
            return gm(4);
          case 215:
            return gm(8);
          case 216:
            return gm(16);
          case 217:
            return Tm = Am[xm++], jm >= xm ? im.slice(xm - qm, (xm += Tm) - qm) : ym(Tm);
          case 218:
            return Tm = Em.getUint16(xm), jm >= (xm += 2) ? im.slice(xm - qm, (xm += Tm) - qm) : Cm(Tm);
          case 219:
            return Tm = Em.getUint32(xm), jm >= (xm += 4) ? im.slice(xm - qm, (xm += Tm) - qm) : rm(Tm);
          case 220:
            return Tm = Em.getUint16(xm), xm += 2, Mm(Tm);
          case 221:
            return Tm = Em.getUint32(xm), xm += 4, Mm(Tm);
          case 222:
            return Tm = Em.getUint16(xm), xm += 2, um(Tm);
          case 223:
            return Tm = Em.getUint32(xm), xm += 4, um(Tm);
          default:
            if (mm >= 224) return mm - 256;
            if (void 0 === mm) {
              let mm = new Error("Unexpected end of MessagePack data");
              throw mm.incomplete = !0, mm
            }
            throw new Error("Unknown MessagePack token " + mm)
        }
      }
    }
    const Nm = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function Gm(mm, Tm) {
      function fm() {
        if (fm.count++ > Zm) {
          let fm = mm.read = new Function("r", "return function(){return " + (Ym.freezeData ? "Object.freeze" : "") + "({" + mm.map((mm => "__proto__" === mm ? "__proto_:r()" : Nm.test(mm) ? mm + ":r()" : "[" + JSON.stringify(mm) + "]:r()")).join(",") + "})}")(em);
          return 0 === mm.highByte && (mm.read = Xm(Tm, mm.read)), fm()
        }
        let hm = {};
        for (let Tm = 0, fm = mm.length; Tm < fm; Tm++) {
          let fm = mm[Tm];
          "__proto__" === fm && (fm = "__proto_"), hm[fm] = em()
        }
        return Ym.freezeData ? Object.freeze(hm) : hm
      }
      return fm.count = 0, 0 === mm.highByte ? Xm(Tm, fm) : fm
    }
    const Xm = (mm, Tm) => function() {
      let fm = Am[xm++];
      if (0 === fm) return Tm();
      let hm = mm < 32 ? -(mm + (fm << 5)) : mm + (fm << 5),
        am = Dm[hm] || Pm()[hm];
      if (!am) throw new Error("Record id is not defined for " + hm);
      return am.read || (am.read = Gm(am, mm)), am.read()
    };

    function Pm() {
      let mm = xT((() => (Am = null, Ym.getStructures())));
      return Dm = Ym._mergeStructures(mm, Dm)
    }
    var Hm = lm,
      ym = lm,
      Cm = lm,
      rm = lm;
    let sm = !1;

    function lm(mm) {
      let Tm;
      if (mm < 16 && (Tm = tm(mm))) return Tm;
      if (mm > 64 && hm) return hm.decode(Am.subarray(xm, xm += mm));
      const fm = xm + mm,
        am = [];
      for (Tm = ""; xm < fm;) {
        const mm = Am[xm++];
        if (0 === (128 & mm)) am.push(mm);
        else if (192 === (224 & mm)) {
          const Tm = 63 & Am[xm++];
          am.push((31 & mm) << 6 | Tm)
        } else if (224 === (240 & mm)) {
          const Tm = 63 & Am[xm++],
            fm = 63 & Am[xm++];
          am.push((31 & mm) << 12 | Tm << 6 | fm)
        } else if (240 === (248 & mm)) {
          let Tm = (7 & mm) << 18 | (63 & Am[xm++]) << 12 | (63 & Am[xm++]) << 6 | 63 & Am[xm++];
          Tm > 65535 && (Tm -= 65536, am.push(Tm >>> 10 & 1023 | 55296), Tm = 56320 | 1023 & Tm), am.push(Tm)
        } else am.push(mm);
        am.length >= 4096 && (Tm += Bm.apply(String, am), am.length = 0)
      }
      return am.length > 0 && (Tm += Bm.apply(String, am)), Tm
    }

    function Mm(mm) {
      let Tm = new Array(mm);
      for (let fm = 0; fm < mm; fm++) Tm[fm] = em();
      return Ym.freezeData ? Object.freeze(Tm) : Tm
    }

    function um(mm) {
      if (Ym.mapsAsObjects) {
        let Tm = {};
        for (let fm = 0; fm < mm; fm++) {
          let mm = Fm();
          "__proto__" === mm && (mm = "__proto_"), Tm[mm] = em()
        }
        return Tm
      } {
        let Tm = new Map;
        for (let fm = 0; fm < mm; fm++) Tm.set(em(), em());
        return Tm
      }
    }
    var Bm = String.fromCharCode;

    function Lm(mm) {
      let Tm = xm,
        fm = new Array(mm);
      for (let hm = 0; hm < mm; hm++) {
        const mm = Am[xm++];
        if ((128 & mm) > 0) return void(xm = Tm);
        fm[hm] = mm
      }
      return Bm.apply(String, fm)
    }

    function tm(mm) {
      if (mm < 4) {
        if (mm < 2) {
          if (0 === mm) return "";
          {
            let mm = Am[xm++];
            return (128 & mm) > 1 ? void(xm -= 1) : Bm(mm)
          }
        } {
          let Tm = Am[xm++],
            fm = Am[xm++];
          if ((128 & Tm) > 0 || (128 & fm) > 0) return void(xm -= 2);
          if (mm < 3) return Bm(Tm, fm);
          let hm = Am[xm++];
          return (128 & hm) > 0 ? void(xm -= 3) : Bm(Tm, fm, hm)
        }
      } {
        let Tm = Am[xm++],
          fm = Am[xm++],
          hm = Am[xm++],
          am = Am[xm++];
        if ((128 & Tm) > 0 || (128 & fm) > 0 || (128 & hm) > 0 || (128 & am) > 0) return void(xm -= 4);
        if (mm < 6) {
          if (4 === mm) return Bm(Tm, fm, hm, am);
          {
            let mm = Am[xm++];
            return (128 & mm) > 0 ? void(xm -= 5) : Bm(Tm, fm, hm, am, mm)
          }
        }
        if (mm < 8) {
          let wm = Am[xm++],
            Dm = Am[xm++];
          if ((128 & wm) > 0 || (128 & Dm) > 0) return void(xm -= 6);
          if (mm < 7) return Bm(Tm, fm, hm, am, wm, Dm);
          let im = Am[xm++];
          return (128 & im) > 0 ? void(xm -= 7) : Bm(Tm, fm, hm, am, wm, Dm, im)
        } {
          let wm = Am[xm++],
            Dm = Am[xm++],
            im = Am[xm++],
            Rm = Am[xm++];
          if ((128 & wm) > 0 || (128 & Dm) > 0 || (128 & im) > 0 || (128 & Rm) > 0) return void(xm -= 8);
          if (mm < 10) {
            if (8 === mm) return Bm(Tm, fm, hm, am, wm, Dm, im, Rm);
            {
              let mm = Am[xm++];
              return (128 & mm) > 0 ? void(xm -= 9) : Bm(Tm, fm, hm, am, wm, Dm, im, Rm, mm)
            }
          }
          if (mm < 12) {
            let pm = Am[xm++],
              Em = Am[xm++];
            if ((128 & pm) > 0 || (128 & Em) > 0) return void(xm -= 10);
            if (mm < 11) return Bm(Tm, fm, hm, am, wm, Dm, im, Rm, pm, Em);
            let om = Am[xm++];
            return (128 & om) > 0 ? void(xm -= 11) : Bm(Tm, fm, hm, am, wm, Dm, im, Rm, pm, Em, om)
          } {
            let pm = Am[xm++],
              Em = Am[xm++],
              om = Am[xm++],
              Om = Am[xm++];
            if ((128 & pm) > 0 || (128 & Em) > 0 || (128 & om) > 0 || (128 & Om) > 0) return void(xm -= 12);
            if (mm < 14) {
              if (12 === mm) return Bm(Tm, fm, hm, am, wm, Dm, im, Rm, pm, Em, om, Om);
              {
                let mm = Am[xm++];
                return (128 & mm) > 0 ? void(xm -= 13) : Bm(Tm, fm, hm, am, wm, Dm, im, Rm, pm, Em, om, Om, mm)
              }
            } {
              let Ym = Am[xm++],
                qm = Am[xm++];
              if ((128 & Ym) > 0 || (128 & qm) > 0) return void(xm -= 14);
              if (mm < 15) return Bm(Tm, fm, hm, am, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm);
              let jm = Am[xm++];
              return (128 & jm) > 0 ? void(xm -= 15) : Bm(Tm, fm, hm, am, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm)
            }
          }
        }
      }
    }

    function Um() {
      let mm, Tm = Am[xm++];
      if (Tm < 192) mm = Tm - 160;
      else switch (Tm) {
        case 217:
          mm = Am[xm++];
          break;
        case 218:
          mm = Em.getUint16(xm), xm += 2;
          break;
        case 219:
          mm = Em.getUint32(xm), xm += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return lm(mm)
    }

    function dm(mm) {
      return Ym.copyBuffers ? Uint8Array.prototype.slice.call(Am, xm, xm += mm) : Am.subarray(xm, xm += mm)
    }

    function gm(mm) {
      let Tm = Am[xm++];
      if (Vm[Tm]) {
        let fm;
        return Vm[Tm](Am.subarray(xm, fm = xm += mm), (mm => {
          xm = mm;
          try {
            return em()
          } finally {
            xm = fm
          }
        }))
      }
      throw new Error("Unknown extension type " + Tm)
    }
    var Wm = new Array(4096);

    function Fm() {
      let mm = Am[xm++];
      if (!(mm >= 160 && mm < 192)) return xm--, mT(em());
      if (mm -= 160, jm >= xm) return im.slice(xm - qm, (xm += mm) - qm);
      if (!(0 == jm && am < 180)) return Hm(mm);
      let Tm, fm = 4095 & (mm << 5 ^ (mm > 1 ? Em.getUint16(xm) : mm > 0 ? Am[xm] : 0)),
        hm = Wm[fm],
        wm = xm,
        Dm = xm + mm - 3,
        Rm = 0;
      if (hm && hm.bytes == mm) {
        for (; wm < Dm;) {
          if (Tm = Em.getUint32(wm), Tm != hm[Rm++]) {
            wm = 1879048192;
            break
          }
          wm += 4
        }
        for (Dm += 3; wm < Dm;)
          if (Tm = Am[wm++], Tm != hm[Rm++]) {
            wm = 1879048192;
            break
          } if (wm === Dm) return xm = wm, hm.string;
        Dm -= 3, wm = xm
      }
      for (hm = [], Wm[fm] = hm, hm.bytes = mm; wm < Dm;) Tm = Em.getUint32(wm), hm.push(Tm), wm += 4;
      for (Dm += 3; wm < Dm;) Tm = Am[wm++], hm.push(Tm);
      let pm = mm < 16 ? tm(mm) : Lm(mm);
      return hm.string = null != pm ? pm : Hm(mm)
    }

    function mT(mm) {
      if ("string" === typeof mm) return mm;
      if ("number" === typeof mm || "boolean" === typeof mm || "bigint" === typeof mm) return mm.toString();
      if (null == mm) return mm + "";
      if (Ym.allowArraysInMapKeys && Array.isArray(mm) && mm.flat().every((mm => ["string", "number", "boolean", "bigint"].includes(typeof mm)))) return mm.flat().toString();
      throw new Error("Invalid property type for record: " + typeof mm)
    }
    const TT = (mm, Tm) => {
      let fm = em().map(mT),
        hm = mm;
      void 0 !== Tm && (mm = mm < 32 ? -((Tm << 5) + mm) : (Tm << 5) + mm, fm.highByte = Tm);
      let Am = Dm[mm];
      return Am && (Am.isShared || zm) && ((Dm.restoreStructures || (Dm.restoreStructures = []))[mm] = Am), Dm[mm] = fm, fm.read = Gm(fm, hm), fm.read()
    };
    Vm[0] = () => {}, Vm[0].noBuffer = !0, Vm[66] = mm => {
      let Tm = mm.length,
        fm = BigInt(128 & mm[0] ? mm[0] - 256 : mm[0]);
      for (let hm = 1; hm < Tm; hm++) fm <<= BigInt(8), fm += BigInt(mm[hm]);
      return fm
    };
    let fT = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Vm[101] = () => {
      let mm = em();
      return (fT[mm[0]] || Error)(mm[1], {
        cause: mm[2]
      })
    }, Vm[105] = mm => {
      if (!1 === Ym.structuredClone) throw new Error("Structured clone extension is disabled");
      let Tm = Em.getUint32(xm - 4);
      pm || (pm = new Map);
      let fm, hm = Am[xm];
      fm = hm >= 144 && hm < 160 || 220 == hm || 221 == hm ? [] : {};
      let am = {
        target: fm
      };
      pm.set(Tm, am);
      let wm = em();
      return am.used ? Object.assign(fm, wm) : (am.target = wm, wm)
    }, Vm[112] = mm => {
      if (!1 === Ym.structuredClone) throw new Error("Structured clone extension is disabled");
      let Tm = Em.getUint32(xm - 4),
        fm = pm.get(Tm);
      return fm.used = !0, fm.target
    }, Vm[115] = () => new Set(em());
    const hT = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((mm => mm + "Array"));
    let AT = "object" === typeof globalThis ? globalThis : window;
    Vm[116] = mm => {
      let Tm = mm[0],
        fm = hT[Tm];
      if (!fm) {
        if (16 === Tm) {
          let Tm = new ArrayBuffer(mm.length - 1);
          return new Uint8Array(Tm).set(mm.subarray(1)), Tm
        }
        throw new Error("Could not find typed array for code " + Tm)
      }
      return new AT[fm](Uint8Array.prototype.slice.call(mm, 1).buffer)
    }, Vm[120] = () => {
      let mm = em();
      return new RegExp(mm[0], mm[1])
    };
    const aT = [];

    function xT(mm) {
      cm && cm();
      let Tm = am,
        fm = xm,
        hm = Om,
        wm = qm,
        Vm = jm,
        Im = im,
        Km = om,
        Qm = pm,
        nm = Rm,
        Jm = new Uint8Array(Am.slice(0, am)),
        Zm = Dm,
        km = Dm.slice(0, Dm.length),
        bm = Ym,
        Sm = zm,
        em = mm();
      return am = Tm, xm = fm, Om = hm, qm = wm, jm = Vm, im = Im, om = Km, pm = Qm, Rm = nm, Am = Jm, zm = Sm, (Dm = Zm).splice(0, Dm.length, ...km), Ym = bm, Em = new DataView(Am.buffer, Am.byteOffset, Am.byteLength), em
    }

    function wT() {
      Am = null, pm = null, Dm = null
    }
    Vm[98] = mm => {
      let Tm = (mm[0] << 24) + (mm[1] << 16) + (mm[2] << 8) + mm[3],
        fm = xm;
      return xm += Tm - mm.length, Rm = aT, (Rm = [Um(), Um()]).position0 = 0, Rm.position1 = 0, Rm.postBundlePosition = xm, xm = fm, em()
    }, Vm[255] = mm => 4 == mm.length ? new Date(1e3 * (16777216 * mm[0] + (mm[1] << 16) + (mm[2] << 8) + mm[3])) : 8 == mm.length ? new Date(((mm[0] << 22) + (mm[1] << 14) + (mm[2] << 6) + (mm[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & mm[3]) + 16777216 * mm[4] + (mm[5] << 16) + (mm[6] << 8) + mm[7])) : 12 == mm.length ? new Date(((mm[0] << 24) + (mm[1] << 16) + (mm[2] << 8) + mm[3]) / 1e6 + 1e3 * ((128 & mm[4] ? -281474976710656 : 0) + 1099511627776 * mm[6] + 4294967296 * mm[7] + 16777216 * mm[8] + (mm[9] << 16) + (mm[10] << 8) + mm[11])) : new Date("invalid");
    const DT = new Array(147);
    for (let af = 0; af < 256; af++) DT[af] = +("1e" + Math.floor(45.15 - .30103 * af));
    const iT = km;
    var RT = new km({
      useRecords: !1
    });
    const pT = RT.unpack,
      ET = RT.unpackMultiple,
      oT = RT.unpack,
      OT = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let YT, qT, jT, VT = new Float32Array(1),
      IT = new Uint8Array(VT.buffer, 0, 4);

    function KT(mm) {
      VT[0] = mm;
      let Tm = DT[(127 & IT[3]) << 1 | IT[2] >> 7];
      return (Tm * mm + (mm > 0 ? .5 : -.5) | 0) / Tm
    }
    try {
      YT = new TextEncoder
    } catch (Af) {}
    const QT = "undefined" !== typeof Buffer,
      nT = QT ? function(mm) {
        return Buffer.allocUnsafeSlow(mm)
      } : Uint8Array,
      JT = QT ? Buffer : Uint8Array,
      cT = QT ? 4294967296 : 2144337920;
    let zT, ZT, kT, bT, ST, eT = 0,
      NT = null;
    const GT = /[\u0080-\uFFFF]/,
      XT = Symbol("record-id");
    class PT extends km {
      constructor(mm) {
        let Tm, fm, hm, Am;
        super(mm), this.offset = 0;
        let am = JT.prototype.utf8Write ? function(mm, Tm) {
            return zT.utf8Write(mm, Tm, zT.byteLength - Tm)
          } : !(!YT || !YT.encodeInto) && function(mm, Tm) {
            return YT.encodeInto(mm, zT.subarray(Tm)).written
          },
          xm = this;
        mm || (mm = {});
        let wm = mm && mm.sequential,
          Dm = mm.structures || mm.saveStructures,
          im = mm.maxSharedStructures;
        if (null == im && (im = Dm ? 32 : 0), im > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        mm.structuredClone && void 0 == mm.moreTypes && (this.moreTypes = !0);
        let Rm = mm.maxOwnStructures;
        null == Rm && (Rm = Dm ? 32 : 64), this.structures || 0 == mm.useRecords || (this.structures = []);
        let pm = im > 32 || Rm + im > 64,
          Em = im + 64,
          om = im + Rm + 64;
        if (om > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let Om = [],
          Ym = 0,
          qm = 0;
        this.pack = this.encode = function(mm, am) {
          if (zT || (zT = new nT(8192), kT = zT.dataView || (zT.dataView = new DataView(zT.buffer, 0, 8192)), eT = 0), bT = zT.length - 10, bT - eT < 2048 ? (zT = new nT(zT.length), kT = zT.dataView || (zT.dataView = new DataView(zT.buffer, 0, zT.length)), bT = zT.length - 10, eT = 0) : eT = eT + 7 & 2147483640, Tm = eT, am & FT && (eT += 255 & am), Am = xm.structuredClone ? new Map : null, xm.bundleStrings && "string" !== typeof mm ? (NT = [], NT.size = 1 / 0) : NT = null, hm = xm.structures, hm) {
            hm.uninitialized && (hm = xm._mergeStructures(xm.getStructures()));
            let mm = hm.sharedLength || 0;
            if (mm > im) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + hm.sharedLength);
            if (!hm.transitions) {
              hm.transitions = Object.create(null);
              for (let Tm = 0; Tm < mm; Tm++) {
                let mm = hm[Tm];
                if (!mm) continue;
                let fm, Am = hm.transitions;
                for (let Tm = 0, hm = mm.length; Tm < hm; Tm++) {
                  let hm = mm[Tm];
                  fm = Am[hm], fm || (fm = Am[hm] = Object.create(null)), Am = fm
                }
                Am[XT] = Tm + 64
              }
              this.lastNamedStructuresLength = mm
            }
            wm || (hm.nextId = mm + 64)
          }
          let Dm;
          fm && (fm = !1);
          try {
            xm.randomAccessStructure && mm && mm.constructor && mm.constructor === Object ? km(mm) : Im(mm);
            let fm = NT;
            if (NT && rT(Tm, Im, 0), Am && Am.idsToInsert) {
              let mm = Am.idsToInsert.sort(((mm, Tm) => mm.offset > Tm.offset ? 1 : -1)),
                hm = mm.length,
                am = -1;
              for (; fm && hm > 0;) {
                let Am = mm[--hm].offset + Tm;
                Am < fm.stringsPosition + Tm && -1 === am && (am = 0), Am > fm.position + Tm ? am >= 0 && (am += 6) : (am >= 0 && (kT.setUint32(fm.position + Tm, kT.getUint32(fm.position + Tm) + am), am = -1), fm = fm.previous, hm++)
              }
              am >= 0 && fm && kT.setUint32(fm.position + Tm, kT.getUint32(fm.position + Tm) + am), eT += 6 * mm.length, eT > bT && cm(eT), xm.offset = eT;
              let wm = function(mm, Tm) {
                let fm, hm = 6 * Tm.length,
                  Am = mm.length - hm;
                for (; fm = Tm.pop();) {
                  let Tm = fm.offset,
                    am = fm.id;
                  mm.copyWithin(Tm + hm, Tm, Am), hm -= 6;
                  let xm = Tm + hm;
                  mm[xm++] = 214, mm[xm++] = 105, mm[xm++] = am >> 24, mm[xm++] = am >> 16 & 255, mm[xm++] = am >> 8 & 255, mm[xm++] = 255 & am, Am = Tm
                }
                return mm
              }(zT.subarray(Tm, eT), mm);
              return Am = null, wm
            }
            return xm.offset = eT, am & gT ? (zT.start = Tm, zT.end = eT, zT) : zT.subarray(Tm, eT)
          } catch (Af) {
            throw Dm = Af, Af
          } finally {
            if (hm && (jm(), fm && xm.saveStructures)) {
              let fm = hm.sharedLength || 0,
                Am = zT.subarray(Tm, eT),
                wm = lT(hm, xm);
              if (!Dm) return !1 === xm.saveStructures(wm, wm.isCompatible) ? xm.pack(mm, am) : (xm.lastNamedStructuresLength = fm, zT.length > 1073741824 && (zT = null), Am)
            }
            zT.length > 1073741824 && (zT = null), am & WT && (eT = Tm)
          }
        };
        const jm = () => {
            qm < 10 && qm++;
            let mm = hm.sharedLength || 0;
            if (hm.length > mm && !wm && (hm.length = mm), Ym > 1e4) hm.transitions = null, qm = 0, Ym = 0, Om.length > 0 && (Om = []);
            else if (Om.length > 0 && !wm) {
              for (let mm = 0, Tm = Om.length; mm < Tm; mm++) Om[mm][XT] = 0;
              Om = []
            }
          },
          Vm = mm => {
            var Tm = mm.length;
            Tm < 16 ? zT[eT++] = 144 | Tm : Tm < 65536 ? (zT[eT++] = 220, zT[eT++] = Tm >> 8, zT[eT++] = 255 & Tm) : (zT[eT++] = 221, kT.setUint32(eT, Tm), eT += 4);
            for (let fm = 0; fm < Tm; fm++) Im(mm[fm])
          },
          Im = mm => {
            eT > bT && (zT = cm(eT));
            var fm, hm = typeof mm;
            if ("string" === hm) {
              let hm, Am = mm.length;
              if (NT && Am >= 4 && Am < 4096) {
                if ((NT.size += Am) > 21760) {
                  let mm, fm, hm = (NT[0] ? 3 * NT[0].length + NT[1].length : 0) + 10;
                  eT + hm > bT && (zT = cm(eT + hm)), NT.position ? (fm = NT, zT[eT] = 200, eT += 3, zT[eT++] = 98, mm = eT - Tm, eT += 4, rT(Tm, Im, 0), kT.setUint16(mm + Tm - 3, eT - Tm - mm)) : (zT[eT++] = 214, zT[eT++] = 98, mm = eT - Tm, eT += 4), NT = ["", ""], NT.previous = fm, NT.size = 0, NT.position = mm
                }
                let fm = GT.test(mm);
                return NT[fm ? 0 : 1] += mm, zT[eT++] = 193, void Im(fm ? -Am : Am)
              }
              hm = Am < 32 ? 1 : Am < 256 ? 2 : Am < 65536 ? 3 : 5;
              let xm = 3 * Am;
              if (eT + xm > bT && (zT = cm(eT + xm)), Am < 64 || !am) {
                let Tm, am, xm, wm = eT + hm;
                for (Tm = 0; Tm < Am; Tm++) am = mm.charCodeAt(Tm), am < 128 ? zT[wm++] = am : am < 2048 ? (zT[wm++] = am >> 6 | 192, zT[wm++] = 63 & am | 128) : 55296 === (64512 & am) && 56320 === (64512 & (xm = mm.charCodeAt(Tm + 1))) ? (am = 65536 + ((1023 & am) << 10) + (1023 & xm), Tm++, zT[wm++] = am >> 18 | 240, zT[wm++] = am >> 12 & 63 | 128, zT[wm++] = am >> 6 & 63 | 128, zT[wm++] = 63 & am | 128) : (zT[wm++] = am >> 12 | 224, zT[wm++] = am >> 6 & 63 | 128, zT[wm++] = 63 & am | 128);
                fm = wm - eT - hm
              } else fm = am(mm, eT + hm);
              fm < 32 ? zT[eT++] = 160 | fm : fm < 256 ? (hm < 2 && zT.copyWithin(eT + 2, eT + 1, eT + 1 + fm), zT[eT++] = 217, zT[eT++] = fm) : fm < 65536 ? (hm < 3 && zT.copyWithin(eT + 3, eT + 2, eT + 2 + fm), zT[eT++] = 218, zT[eT++] = fm >> 8, zT[eT++] = 255 & fm) : (hm < 5 && zT.copyWithin(eT + 5, eT + 3, eT + 3 + fm), zT[eT++] = 219, kT.setUint32(eT, fm), eT += 4), eT += fm
            } else if ("number" === hm)
              if (mm >>> 0 === mm) mm < 32 || mm < 128 && !1 === this.useRecords || mm < 64 && !this.randomAccessStructure ? zT[eT++] = mm : mm < 256 ? (zT[eT++] = 204, zT[eT++] = mm) : mm < 65536 ? (zT[eT++] = 205, zT[eT++] = mm >> 8, zT[eT++] = 255 & mm) : (zT[eT++] = 206, kT.setUint32(eT, mm), eT += 4);
              else if ((mm | 0) === mm) mm >= -32 ? zT[eT++] = 256 + mm : mm >= -128 ? (zT[eT++] = 208, zT[eT++] = mm + 256) : mm >= -32768 ? (zT[eT++] = 209, kT.setInt16(eT, mm), eT += 2) : (zT[eT++] = 210, kT.setInt32(eT, mm), eT += 4);
            else {
              let Tm;
              if ((Tm = this.useFloat32) > 0 && mm < 4294967296 && mm >= -2147483648) {
                let fm;
                if (zT[eT++] = 202, kT.setFloat32(eT, mm), Tm < 4 || ((fm = mm * DT[(127 & zT[eT]) << 1 | zT[eT + 1] >> 7]) | 0) === fm) return void(eT += 4);
                eT--
              }
              zT[eT++] = 203, kT.setFloat64(eT, mm), eT += 8
            } else if ("object" === hm || "function" === hm)
              if (mm) {
                if (Am) {
                  let fm = Am.get(mm);
                  if (fm) {
                    if (!fm.id) {
                      let mm = Am.idsToInsert || (Am.idsToInsert = []);
                      fm.id = mm.push(fm)
                    }
                    return zT[eT++] = 214, zT[eT++] = 112, kT.setUint32(eT, fm.id), void(eT += 4)
                  }
                  Am.set(mm, {
                    offset: eT - Tm
                  })
                }
                let am = mm.constructor;
                if (am === Object) Jm(mm);
                else if (am === Array) Vm(mm);
                else if (am === Map)
                  if (this.mapAsEmptyObject) zT[eT++] = 128;
                  else {
                    (fm = mm.size) < 16 ? zT[eT++] = 128 | fm : fm < 65536 ? (zT[eT++] = 222, zT[eT++] = fm >> 8, zT[eT++] = 255 & fm) : (zT[eT++] = 223, kT.setUint32(eT, fm), eT += 4);
                    for (let [Tm, fm] of mm) Im(Tm), Im(fm)
                  }
                else {
                  for (let Tm = 0, fm = qT.length; Tm < fm; Tm++) {
                    if (mm instanceof jT[Tm]) {
                      let fm = qT[Tm];
                      if (fm.write) {
                        fm.type && (zT[eT++] = 212, zT[eT++] = fm.type, zT[eT++] = 0);
                        let Tm = fm.write.call(this, mm);
                        return void(Tm === mm ? Array.isArray(mm) ? Vm(mm) : Jm(mm) : Im(Tm))
                      }
                      let hm, Am = zT,
                        am = kT,
                        xm = eT;
                      zT = null;
                      try {
                        hm = fm.pack.call(this, mm, (mm => (zT = Am, Am = null, eT += mm, eT > bT && cm(eT), {
                          target: zT,
                          targetView: kT,
                          position: eT - mm
                        })), Im)
                      } finally {
                        Am && (zT = Am, kT = am, eT = xm, bT = zT.length - 10)
                      }
                      return void(hm && (hm.length + eT > bT && cm(hm.length + eT), eT = CT(hm, zT, eT, fm.type)))
                    }
                  }
                  if (Array.isArray(mm)) Vm(mm);
                  else {
                    if (mm.toJSON) {
                      const Tm = mm.toJSON();
                      if (Tm !== mm) return Im(Tm)
                    }
                    if ("function" === hm) return Im(this.writeFunction && this.writeFunction(mm));
                    Jm(mm)
                  }
                }
              } else zT[eT++] = 192;
            else if ("boolean" === hm) zT[eT++] = mm ? 195 : 194;
            else if ("bigint" === hm) {
              if (mm < BigInt(1) << BigInt(63) && mm >= -(BigInt(1) << BigInt(63))) zT[eT++] = 211, kT.setBigInt64(eT, mm);
              else if (mm < BigInt(1) << BigInt(64) && mm > 0) zT[eT++] = 207, kT.setBigUint64(eT, mm);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Im(mm.toString());
                  if (this.useBigIntExtension && mm < BigInt(2) ** BigInt(1023) && mm > -(BigInt(2) ** BigInt(1023))) {
                    zT[eT++] = 199, eT++, zT[eT++] = 66;
                    let Tm, fm = [];
                    do {
                      let hm = mm & BigInt(255);
                      Tm = (hm & BigInt(128)) === (mm < BigInt(0) ? BigInt(128) : BigInt(0)), fm.push(hm), mm >>= BigInt(8)
                    } while (mm !== BigInt(0) && mm !== BigInt(-1) || !Tm);
                    zT[eT - 2] = fm.length;
                    for (let mm = fm.length; mm > 0;) zT[eT++] = Number(fm[--mm]);
                    return
                  }
                  throw new RangeError(mm + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                zT[eT++] = 203, kT.setFloat64(eT, Number(mm))
              }
              eT += 8
            } else {
              if ("undefined" !== hm) throw new Error("Unknown type: " + hm);
              this.encodeUndefinedAsNil ? zT[eT++] = 192 : (zT[eT++] = 212, zT[eT++] = 0, zT[eT++] = 0)
            }
          },
          Km = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? mm => {
            let Tm;
            if (this.skipValues) {
              Tm = [];
              for (let fm in mm) "function" === typeof mm.hasOwnProperty && !mm.hasOwnProperty(fm) || this.skipValues.includes(mm[fm]) || Tm.push(fm)
            } else Tm = Object.keys(mm);
            let fm, hm = Tm.length;
            if (hm < 16 ? zT[eT++] = 128 | hm : hm < 65536 ? (zT[eT++] = 222, zT[eT++] = hm >> 8, zT[eT++] = 255 & hm) : (zT[eT++] = 223, kT.setUint32(eT, hm), eT += 4), this.coercibleKeyAsNumber)
              for (let Am = 0; Am < hm; Am++) {
                fm = Tm[Am];
                let hm = Number(fm);
                Im(isNaN(hm) ? fm : hm), Im(mm[fm])
              } else
                for (let Am = 0; Am < hm; Am++) Im(fm = Tm[Am]), Im(mm[fm])
          } : mm => {
            zT[eT++] = 222;
            let fm = eT - Tm;
            eT += 2;
            let hm = 0;
            for (let Tm in mm)("function" !== typeof mm.hasOwnProperty || mm.hasOwnProperty(Tm)) && (Im(Tm), Im(mm[Tm]), hm++);
            if (hm > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            zT[fm++ + Tm] = hm >> 8, zT[fm + Tm] = 255 & hm
          },
          Qm = !1 === this.useRecords ? Km : mm.progressiveRecords && !pm ? mm => {
            let fm, Am, am = hm.transitions || (hm.transitions = Object.create(null)),
              xm = eT++ - Tm;
            for (let wm in mm)
              if ("function" !== typeof mm.hasOwnProperty || mm.hasOwnProperty(wm)) {
                if (fm = am[wm], fm) am = fm;
                else {
                  let Dm = Object.keys(mm),
                    im = am;
                  am = hm.transitions;
                  let Rm = 0;
                  for (let mm = 0, Tm = Dm.length; mm < Tm; mm++) {
                    let Tm = Dm[mm];
                    fm = am[Tm], fm || (fm = am[Tm] = Object.create(null), Rm++), am = fm
                  }
                  xm + Tm + 1 == eT ? (eT--, zm(am, Dm, Rm)) : Zm(am, Dm, xm, Rm), Am = !0, am = im[wm]
                }
                Im(mm[wm])
              } if (!Am) {
              let fm = am[XT];
              fm ? zT[xm + Tm] = fm : Zm(am, Object.keys(mm), xm, 0)
            }
          } : mm => {
            let Tm, fm = hm.transitions || (hm.transitions = Object.create(null)),
              Am = 0;
            for (let hm in mm)("function" !== typeof mm.hasOwnProperty || mm.hasOwnProperty(hm)) && (Tm = fm[hm], Tm || (Tm = fm[hm] = Object.create(null), Am++), fm = Tm);
            let am = fm[XT];
            am ? am >= 96 && pm ? (zT[eT++] = 96 + (31 & (am -= 96)), zT[eT++] = am >> 5) : zT[eT++] = am : zm(fm, fm.__keys__ || Object.keys(mm), Am);
            for (let hm in mm)("function" !== typeof mm.hasOwnProperty || mm.hasOwnProperty(hm)) && Im(mm[hm])
          },
          nm = "function" == typeof this.useRecords && this.useRecords,
          Jm = nm ? mm => {
            nm(mm) ? Qm(mm) : Km(mm)
          } : Qm,
          cm = mm => {
            let fm;
            if (mm > 16777216) {
              if (mm - Tm > cT) throw new Error("Packed buffer would be larger than maximum buffer size");
              fm = Math.min(cT, 4096 * Math.round(Math.max((mm - Tm) * (mm > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else fm = 1 + (Math.max(mm - Tm << 2, zT.length - 1) >> 12) << 12;
            let hm = new nT(fm);
            return kT = hm.dataView || (hm.dataView = new DataView(hm.buffer, 0, fm)), mm = Math.min(mm, zT.length), zT.copy ? zT.copy(hm, 0, Tm, mm) : hm.set(zT.slice(Tm, mm)), eT -= Tm, Tm = 0, bT = hm.length - 10, zT = hm
          },
          zm = (mm, Tm, Am) => {
            let am = hm.nextId;
            am || (am = 64), am < Em && this.shouldShareStructure && !this.shouldShareStructure(Tm) ? (am = hm.nextOwnId, am < om || (am = Em), hm.nextOwnId = am + 1) : (am >= om && (am = Em), hm.nextId = am + 1);
            let xm = Tm.highByte = am >= 96 && pm ? am - 96 >> 5 : -1;
            mm[XT] = am, mm.__keys__ = Tm, hm[am - 64] = Tm, am < Em ? (Tm.isShared = !0, hm.sharedLength = am - 63, fm = !0, xm >= 0 ? (zT[eT++] = 96 + (31 & am), zT[eT++] = xm) : zT[eT++] = am) : (xm >= 0 ? (zT[eT++] = 213, zT[eT++] = 114, zT[eT++] = 96 + (31 & am), zT[eT++] = xm) : (zT[eT++] = 212, zT[eT++] = 114, zT[eT++] = am), Am && (Ym += qm * Am), Om.length >= Rm && (Om.shift()[XT] = 0), Om.push(mm), Im(Tm))
          },
          Zm = (mm, fm, hm, Am) => {
            let am = zT,
              xm = eT,
              wm = bT,
              Dm = Tm;
            zT = ZT, eT = 0, Tm = 0, zT || (ZT = zT = new nT(8192)), bT = zT.length - 10, zm(mm, fm, Am), ZT = zT;
            let im = eT;
            if (zT = am, eT = xm, bT = wm, Tm = Dm, im > 1) {
              let mm = eT + im - 1;
              mm > bT && cm(mm);
              let fm = hm + Tm;
              zT.copyWithin(fm + im, fm + 1, eT), zT.set(ZT.slice(0, im), fm), eT = mm
            } else zT[hm + Tm] = ZT[0]
          },
          km = mm => {
            let Am = ST(mm, zT, Tm, eT, hm, cm, ((mm, Tm, hm) => {
              if (hm) return fm = !0;
              eT = Tm;
              let Am = zT;
              return Im(mm), jm(), Am !== zT ? {
                position: eT,
                targetView: kT,
                target: zT
              } : eT
            }), this);
            if (0 === Am) return Jm(mm);
            eT = Am
          }
      }
      useBuffer(mm) {
        zT = mm, kT = zT.dataView || (zT.dataView = new DataView(zT.buffer, zT.byteOffset, zT.byteLength)), eT = 0
      }
      set position(mm) {
        eT = mm
      }
      get position() {
        return eT
      }
      set buffer(mm) {
        zT = mm
      }
      get buffer() {
        return zT
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function HT(mm, Tm, fm, hm) {
      let Am = mm.byteLength;
      if (Am + 1 < 256) {
        var {
          target: am,
          position: xm
        } = fm(4 + Am);
        am[xm++] = 199, am[xm++] = Am + 1
      } else if (Am + 1 < 65536) {
        var {
          target: am,
          position: xm
        } = fm(5 + Am);
        am[xm++] = 200, am[xm++] = Am + 1 >> 8, am[xm++] = Am + 1 & 255
      } else {
        var {
          target: am,
          position: xm,
          targetView: wm
        } = fm(7 + Am);
        am[xm++] = 201, wm.setUint32(xm, Am + 1), xm += 4
      }
      am[xm++] = 116, am[xm++] = Tm, mm.buffer || (mm = new Uint8Array(mm)), am.set(new Uint8Array(mm.buffer, mm.byteOffset, mm.byteLength), xm)
    }

    function yT(mm, Tm) {
      let fm = mm.byteLength;
      var hm, Am;
      if (fm < 256) {
        var {
          target: hm,
          position: Am
        } = Tm(fm + 2);
        hm[Am++] = 196, hm[Am++] = fm
      } else if (fm < 65536) {
        var {
          target: hm,
          position: Am
        } = Tm(fm + 3);
        hm[Am++] = 197, hm[Am++] = fm >> 8, hm[Am++] = 255 & fm
      } else {
        var {
          target: hm,
          position: Am,
          targetView: am
        } = Tm(fm + 5);
        hm[Am++] = 198, am.setUint32(Am, fm), Am += 4
      }
      hm.set(mm, Am)
    }

    function CT(mm, Tm, fm, hm) {
      let Am = mm.length;
      switch (Am) {
        case 1:
          Tm[fm++] = 212;
          break;
        case 2:
          Tm[fm++] = 213;
          break;
        case 4:
          Tm[fm++] = 214;
          break;
        case 8:
          Tm[fm++] = 215;
          break;
        case 16:
          Tm[fm++] = 216;
          break;
        default:
          Am < 256 ? (Tm[fm++] = 199, Tm[fm++] = Am) : Am < 65536 ? (Tm[fm++] = 200, Tm[fm++] = Am >> 8, Tm[fm++] = 255 & Am) : (Tm[fm++] = 201, Tm[fm++] = Am >> 24, Tm[fm++] = Am >> 16 & 255, Tm[fm++] = Am >> 8 & 255, Tm[fm++] = 255 & Am)
      }
      return Tm[fm++] = hm, Tm.set(mm, fm), fm += Am
    }

    function rT(mm, Tm, fm) {
      if (NT.length > 0) {
        kT.setUint32(NT.position + mm, eT + fm - NT.position - mm), NT.stringsPosition = eT - mm;
        let hm = NT;
        NT = null, Tm(hm[0]), Tm(hm[1])
      }
    }

    function sT(mm) {
      if (mm.Class) {
        if (!mm.pack && !mm.write) throw new Error("Extension has no pack or write function");
        if (mm.pack && !mm.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        jT.unshift(mm.Class), qT.unshift(mm)
      }! function(mm) {
        mm.unpack ? Vm[mm.type] = mm.unpack : Vm[mm.type] = mm
      }(mm)
    }

    function lT(mm, Tm) {
      return mm.isCompatible = mm => {
        let fm = !mm || (Tm.lastNamedStructuresLength || 0) === mm.length;
        return fm || Tm._mergeStructures(mm), fm
      }, mm
    }
    jT = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Km], qT = [{
      pack(mm, Tm, fm) {
        let hm = mm.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === mm.getMilliseconds()) && hm >= 0 && hm < 4294967296) {
          let {
            target: mm,
            targetView: fm,
            position: Am
          } = Tm(6);
          mm[Am++] = 214, mm[Am++] = 255, fm.setUint32(Am, hm)
        } else if (hm > 0 && hm < 4294967296) {
          let {
            target: fm,
            targetView: Am,
            position: am
          } = Tm(10);
          fm[am++] = 215, fm[am++] = 255, Am.setUint32(am, 4e6 * mm.getMilliseconds() + (hm / 1e3 / 4294967296 | 0)), Am.setUint32(am + 4, hm)
        } else if (isNaN(hm)) {
          if (this.onInvalidDate) return Tm(0), fm(this.onInvalidDate());
          let {
            target: mm,
            targetView: hm,
            position: Am
          } = Tm(3);
          mm[Am++] = 212, mm[Am++] = 255, mm[Am++] = 255
        } else {
          let {
            target: fm,
            targetView: Am,
            position: am
          } = Tm(15);
          fm[am++] = 199, fm[am++] = 12, fm[am++] = 255, Am.setUint32(am, 1e6 * mm.getMilliseconds()), Am.setBigInt64(am + 4, BigInt(Math.floor(hm)))
        }
      }
    }, {
      pack(mm, Tm, fm) {
        if (this.setAsEmptyObject) return Tm(0), fm({});
        let hm = Array.from(mm),
          {
            target: Am,
            position: am
          } = Tm(this.moreTypes ? 3 : 0);
        this.moreTypes && (Am[am++] = 212, Am[am++] = 115, Am[am++] = 0), fm(hm)
      }
    }, {
      pack(mm, Tm, fm) {
        let {
          target: hm,
          position: Am
        } = Tm(this.moreTypes ? 3 : 0);
        this.moreTypes && (hm[Am++] = 212, hm[Am++] = 101, hm[Am++] = 0), fm([mm.name, mm.message, mm.cause])
      }
    }, {
      pack(mm, Tm, fm) {
        let {
          target: hm,
          position: Am
        } = Tm(this.moreTypes ? 3 : 0);
        this.moreTypes && (hm[Am++] = 212, hm[Am++] = 120, hm[Am++] = 0), fm([mm.source, mm.flags])
      }
    }, {
      pack(mm, Tm) {
        this.moreTypes ? HT(mm, 16, Tm) : yT(QT ? Buffer.from(mm) : new Uint8Array(mm), Tm)
      }
    }, {
      pack(mm, Tm) {
        let fm = mm.constructor;
        fm !== JT && this.moreTypes ? HT(mm, hT.indexOf(fm.name), Tm) : yT(mm, Tm)
      }
    }, {
      pack(mm, Tm) {
        let {
          target: fm,
          position: hm
        } = Tm(1);
        fm[hm] = 193
      }
    }];
    let MT = new PT({
      useRecords: !1
    });
    const uT = MT.pack,
      BT = MT.pack,
      LT = PT,
      {
        NEVER: vT,
        ALWAYS: tT,
        DECIMAL_ROUND: UT,
        DECIMAL_FIT: dT
      } = OT,
      gT = 512,
      WT = 1024,
      FT = 2048;
    const mf = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!mm || "object" !== typeof mm) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const fm = new km(Tm);
        let hm;
        const Am = mm => {
          let Tm;
          hm && (mm = Buffer.concat([hm, mm]), hm = void 0);
          try {
            Tm = fm.unpackMultiple(mm)
          } catch (Am) {
            if (!Am.incomplete) throw Am;
            hm = mm.slice(Am.lastPosition), Tm = Am.values
          }
          return Tm
        };
        return "function" === typeof mm[Symbol.iterator] ? function*() {
          for (const Tm of mm) yield* Am(Tm)
        }() : "function" === typeof mm[Symbol.asyncIterator] ? async function*() {
          for await (const Tm of mm) yield* Am(Tm)
        }(): void 0
      },
      Tf = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (mm && "object" === typeof mm) {
          if ("function" === typeof mm[Symbol.iterator]) return function*(mm, Tm) {
            const fm = new PT(Tm);
            for (const hm of mm) yield fm.pack(hm)
          }(mm, Tm);
          if ("function" === typeof mm.then || "function" === typeof mm[Symbol.asyncIterator]) return async function*(mm, Tm) {
            const fm = new PT(Tm);
            for await (const hm of mm) yield fm.pack(hm)
          }(mm, Tm);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      ff = !1,
      hf = !0
  },
  9050: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      $changes: () => Ym,
      $childType: () => qm,
      $decoder: () => Rm,
      $deleteByIndex: () => om,
      $encoder: () => im,
      $filter: () => pm,
      $getByIndex: () => Em,
      $numFields: () => Zm,
      $refId: () => wm,
      $track: () => Dm,
      $values: () => Qm,
      ArraySchema: () => ah,
      Callbacks: () => aA,
      ChangeTree: () => Gf,
      CollectionSchema: () => Dh,
      Decoder: () => gh,
      Encoder: () => vh,
      FieldBuilder: () => ph,
      MapSchema: () => wh,
      Metadata: () => UT,
      OPERATION: () => Am,
      Reflection: () => TA,
      ReflectionField: () => Fh,
      ReflectionType: () => mA,
      Root: () => Xh,
      Schema: () => Nh,
      SetSchema: () => ih,
      StateCallbackStrategy: () => AA,
      StateView: () => rh,
      StreamSchema: () => Rh,
      TypeContext: () => lT,
      createPool: () => wA,
      decode: () => KT,
      decodeKeyValueOperation: () => Ff,
      decodeSchemaOperation: () => Wf,
      defineCustomTypes: () => cT,
      defineTypes: () => bh,
      deprecated: () => Zh,
      dumpChanges: () => eh,
      encode: () => fT,
      encodeArray: () => lf,
      encodeIndexedEntry: () => rf,
      encodeKeyValueOperation: () => sf,
      encodeMapEntry: () => Cf,
      encodeSchemaOperation: () => yf,
      kO: () => Vh,
      fullStateOnly: () => nh,
      getDecoderStateCallbacks: () => fA,
      getEncodeDescriptor: () => Tf,
      getRawChangesCallback: () => hA,
      isBuilder: () => Eh,
      patchOnly: () => Qh,
      registerType: () => JT,
      schema: () => Sh,
      t: () => qh,
      type: () => Jh,
      unreliable: () => Kh,
      view: () => Ih
    });
    const hm = 255;
    var Am;

    function am(mm) {
      Object.defineProperty(mm, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(mm) {
      mm[mm.ADD = 128] = "ADD", mm[mm.REPLACE = 0] = "REPLACE", mm[mm.DELETE = 64] = "DELETE", mm[mm.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", mm[mm.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", mm[mm.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", mm[mm.CLEAR = 10] = "CLEAR", mm[mm.REVERSE = 15] = "REVERSE", mm[mm.MOVE = 32] = "MOVE", mm[mm.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", mm[mm.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Am || (Am = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const xm = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const mm = "colyseus.symbolRegistry",
        Tm = xm[mm] || (xm[mm] = Object.create(null));
      Symbol.for = function(mm) {
        return Tm[mm] || (Tm[mm] = Symbol(mm))
      }, Symbol.keyFor = function(mm) {
        for (const fm in Tm)
          if (Tm[fm] === mm) return fm
      }
    }
    const wm = Symbol.for("$refId"),
      Dm = "~track",
      im = "~encoder",
      Rm = "~decoder",
      pm = "~filter",
      Em = "~getByIndex",
      om = "~deleteByIndex",
      Om = "~resyncPrune",
      Ym = Symbol.for("$changes"),
      qm = Symbol.for("$childType"),
      jm = Symbol.for("$proxyTarget"),
      Vm = "~onEncodeEnd",
      Im = "~reset",
      Km = "~onDecodeEnd",
      Qm = Symbol.for("$values"),
      nm = "~builder",
      Jm = "~descriptors",
      cm = "~__encodeDescriptor",
      zm = "~encoders",
      Zm = "~__numFields",
      km = "~__refTypeFieldIndexes",
      bm = "~__viewFieldIndexes",
      Sm = "$__fieldIndexesByViewTag",
      em = "~__unreliableFieldIndexes",
      Nm = "~__patchOnlyFieldIndexes",
      Gm = "~__fullSyncSkipIndexes",
      Xm = "~__fullStateOnlyFieldIndexes",
      Pm = "~__streamFieldIndexes",
      Hm = "~__streamPriorities";
    let ym;
    try {
      ym = new TextEncoder
    } catch (DA) {}
    const Cm = new ArrayBuffer(8),
      rm = new Int32Array(Cm),
      sm = new Float32Array(Cm),
      lm = new Float64Array(Cm),
      Mm = new BigInt64Array(Cm),
      um = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(mm, Tm) {
        for (var fm = 0, hm = 0, Am = 0, am = mm.length; Am < am; Am++)(fm = mm.charCodeAt(Am)) < 128 ? hm += 1 : fm < 2048 ? hm += 2 : fm < 55296 || fm >= 57344 ? hm += 3 : (Am++, hm += 4);
        return hm
      };

    function Bm(mm, Tm, fm) {
      for (var hm = 0, Am = 0, am = Tm.length; Am < am; Am++)(hm = Tm.charCodeAt(Am)) < 128 ? mm[fm.offset++] = hm : hm < 2048 ? (mm[fm.offset] = 192 | hm >> 6, mm[fm.offset + 1] = 128 | 63 & hm, fm.offset += 2) : hm < 55296 || hm >= 57344 ? (mm[fm.offset] = 224 | hm >> 12, mm[fm.offset + 1] = 128 | hm >> 6 & 63, mm[fm.offset + 2] = 128 | 63 & hm, fm.offset += 3) : (Am++, hm = 65536 + ((1023 & hm) << 10 | 1023 & Tm.charCodeAt(Am)), mm[fm.offset] = 240 | hm >> 18, mm[fm.offset + 1] = 128 | hm >> 12 & 63, mm[fm.offset + 2] = 128 | hm >> 6 & 63, mm[fm.offset + 3] = 128 | 63 & hm, fm.offset += 4)
    }

    function Lm(mm, Tm, fm) {
      mm[fm.offset++] = 255 & Tm
    }

    function tm(mm, Tm, fm) {
      mm[fm.offset++] = 255 & Tm, mm[fm.offset++] = Tm >> 8 & 255
    }

    function Um(mm, Tm, fm) {
      mm[fm.offset++] = 255 & Tm, mm[fm.offset++] = Tm >> 8 & 255
    }

    function dm(mm, Tm, fm) {
      mm[fm.offset++] = 255 & Tm, mm[fm.offset++] = Tm >> 8 & 255, mm[fm.offset++] = Tm >> 16 & 255, mm[fm.offset++] = Tm >> 24 & 255
    }

    function gm(mm, Tm, fm) {
      const hm = Tm >> 24,
        Am = Tm >> 16,
        am = Tm >> 8,
        xm = Tm;
      mm[fm.offset++] = 255 & xm, mm[fm.offset++] = 255 & am, mm[fm.offset++] = 255 & Am, mm[fm.offset++] = 255 & hm
    }

    function Wm(mm, Tm, fm) {
      const hm = Math.floor(Tm / Math.pow(2, 32));
      gm(mm, Tm >>> 0, fm), gm(mm, hm, fm)
    }

    function Fm(mm, Tm, fm) {
      const hm = Tm / Math.pow(2, 32) | 0;
      gm(mm, Tm >>> 0, fm), gm(mm, hm, fm)
    }

    function mT(mm, Tm, fm) {
      sm[0] = Tm, dm(mm, rm[0], fm)
    }

    function TT(mm, Tm, fm) {
      lm[0] = Tm, dm(mm, rm[0], fm), dm(mm, rm[1], fm)
    }
    const fT = {
        int8: Lm,
        uint8: function(mm, Tm, fm) {
          mm[fm.offset++] = 255 & Tm
        },
        int16: tm,
        uint16: Um,
        int32: dm,
        uint32: gm,
        int64: Wm,
        uint64: Fm,
        bigint64: function(mm, Tm, fm) {
          Mm[0] = BigInt.asIntN(64, Tm), dm(mm, rm[0], fm), dm(mm, rm[1], fm)
        },
        biguint64: function(mm, Tm, fm) {
          Mm[0] = BigInt.asIntN(64, Tm), dm(mm, rm[0], fm), dm(mm, rm[1], fm)
        },
        float32: mT,
        float64: TT,
        boolean: function(mm, Tm, fm) {
          mm[fm.offset++] = Tm ? 1 : 0
        },
        string: function(mm, Tm, fm) {
          Tm || (Tm = "");
          let hm = um(Tm, "utf8"),
            Am = 0;
          if (hm < 32) mm[fm.offset++] = 160 | hm, Am = 1;
          else if (hm < 256) mm[fm.offset++] = 217, mm[fm.offset++] = hm, Am = 2;
          else if (hm < 65536) mm[fm.offset++] = 218, Um(mm, hm, fm), Am = 3;
          else {
            if (!(hm < 4294967296)) throw new Error("String too long");
            mm[fm.offset++] = 219, gm(mm, hm, fm), Am = 5
          }
          return Bm(mm, Tm, fm), Am + hm
        },
        number: function mm(Tm, fm, hm) {
          return isNaN(fm) ? mm(Tm, 0, hm) : isFinite(fm) ? fm !== (0 | fm) ? Math.abs(fm) <= 34028235e31 && (sm[0] = fm, Math.abs(Math.abs(sm[0]) - Math.abs(fm)) < 1e-4) ? (Tm[hm.offset++] = 202, mT(Tm, fm, hm), 5) : (Tm[hm.offset++] = 203, TT(Tm, fm, hm), 9) : fm >= 0 ? fm < 128 ? (Tm[hm.offset++] = 255 & fm, 1) : fm < 256 ? (Tm[hm.offset++] = 204, Tm[hm.offset++] = 255 & fm, 2) : fm < 65536 ? (Tm[hm.offset++] = 205, Um(Tm, fm, hm), 3) : fm < 4294967296 ? (Tm[hm.offset++] = 206, gm(Tm, fm, hm), 5) : (Tm[hm.offset++] = 207, Fm(Tm, fm, hm), 9) : fm >= -32 ? (Tm[hm.offset++] = 224 | fm + 32, 1) : fm >= -128 ? (Tm[hm.offset++] = 208, Lm(Tm, fm, hm), 2) : fm >= -32768 ? (Tm[hm.offset++] = 209, tm(Tm, fm, hm), 3) : fm >= -2147483648 ? (Tm[hm.offset++] = 210, dm(Tm, fm, hm), 5) : (Tm[hm.offset++] = 211, Wm(Tm, fm, hm), 9) : mm(Tm, fm > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, hm)
        },
        utf8Write: Bm,
        utf8Length: um
      },
      hT = new ArrayBuffer(8),
      AT = new Int32Array(hT),
      aT = new Float32Array(hT),
      xT = new Float64Array(hT),
      wT = new BigUint64Array(hT),
      DT = new BigInt64Array(hT);

    function iT(mm, Tm, fm) {
      fm > mm.length - Tm.offset && (fm = mm.length - Tm.offset);
      for (var hm = "", Am = 0, am = Tm.offset, xm = Tm.offset + fm; am < xm; am++) {
        var wm = mm[am];
        if (0 !== (128 & wm))
          if (192 !== (224 & wm))
            if (224 !== (240 & wm)) {
              if (240 !== (248 & wm)) {
                console.error("decode.utf8Read(): Invalid byte " + wm + " at offset " + am + ". Skip to end of string: " + (Tm.offset + fm));
                break
              }(Am = (7 & wm) << 18 | (63 & mm[++am]) << 12 | (63 & mm[++am]) << 6 | 63 & mm[++am]) >= 65536 ? (Am -= 65536, hm += String.fromCharCode(55296 + (Am >>> 10), 56320 + (1023 & Am))) : hm += String.fromCharCode(Am)
            } else hm += String.fromCharCode((15 & wm) << 12 | (63 & mm[++am]) << 6 | 63 & mm[++am]);
        else hm += String.fromCharCode((31 & wm) << 6 | 63 & mm[++am]);
        else hm += String.fromCharCode(wm)
      }
      return Tm.offset += fm, hm
    }

    function RT(mm, Tm) {
      return pT(mm, Tm) << 24 >> 24
    }

    function pT(mm, Tm) {
      return mm[Tm.offset++]
    }

    function ET(mm, Tm) {
      return oT(mm, Tm) << 16 >> 16
    }

    function oT(mm, Tm) {
      return mm[Tm.offset++] | mm[Tm.offset++] << 8
    }

    function OT(mm, Tm) {
      return mm[Tm.offset++] | mm[Tm.offset++] << 8 | mm[Tm.offset++] << 16 | mm[Tm.offset++] << 24
    }

    function YT(mm, Tm) {
      return OT(mm, Tm) >>> 0
    }

    function qT(mm, Tm) {
      return AT[0] = OT(mm, Tm), aT[0]
    }

    function jT(mm, Tm) {
      return AT[0] = OT(mm, Tm), AT[1] = OT(mm, Tm), xT[0]
    }

    function VT(mm, Tm) {
      const fm = YT(mm, Tm);
      return OT(mm, Tm) * Math.pow(2, 32) + fm
    }

    function IT(mm, Tm) {
      const fm = YT(mm, Tm);
      return YT(mm, Tm) * Math.pow(2, 32) + fm
    }
    const KT = {
        utf8Read: iT,
        int8: RT,
        uint8: pT,
        int16: ET,
        uint16: oT,
        int32: OT,
        uint32: YT,
        float32: qT,
        float64: jT,
        int64: VT,
        uint64: IT,
        bigint64: function(mm, Tm) {
          return AT[0] = OT(mm, Tm), AT[1] = OT(mm, Tm), DT[0]
        },
        biguint64: function(mm, Tm) {
          return AT[0] = OT(mm, Tm), AT[1] = OT(mm, Tm), wT[0]
        },
        boolean: function(mm, Tm) {
          return pT(mm, Tm) > 0
        },
        string: function(mm, Tm) {
          const fm = mm[Tm.offset++];
          let hm;
          return fm < 192 ? hm = 31 & fm : 217 === fm ? hm = pT(mm, Tm) : 218 === fm ? hm = oT(mm, Tm) : 219 === fm && (hm = YT(mm, Tm)), iT(mm, Tm, hm)
        },
        number: function(mm, Tm) {
          const fm = mm[Tm.offset++];
          return fm < 128 ? fm : 202 === fm ? qT(mm, Tm) : 203 === fm ? jT(mm, Tm) : 204 === fm ? pT(mm, Tm) : 205 === fm ? oT(mm, Tm) : 206 === fm ? YT(mm, Tm) : 207 === fm ? IT(mm, Tm) : 208 === fm ? RT(mm, Tm) : 209 === fm ? ET(mm, Tm) : 210 === fm ? OT(mm, Tm) : 211 === fm ? VT(mm, Tm) : fm > 223 ? -1 * (255 - fm + 1) : void 0
        },
        stringCheck: function(mm, Tm) {
          const fm = mm[Tm.offset];
          return fm < 192 && fm > 160 || 217 === fm || 218 === fm || 219 === fm
        }
      },
      QT = {},
      nT = new Map;

    function JT(mm, Tm) {
      Tm.constructor && (Object.prototype.hasOwnProperty.call(Tm, "constructor") && null == Tm.constructor[Symbol.metadata] && am(Tm.constructor), nT.set(Tm.constructor, mm), QT[mm] = Tm), Tm.encode && (fT[mm] = Tm.encode), Tm.decode && (KT[mm] = Tm.decode)
    }

    function cT(mm) {
      for (const Tm in mm) JT(Tm, mm[Tm]);
      return mm => Jh(mm)
    }
    const zT = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function ZT() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function kT(mm) {
      return mm._stream ??= ZT()
    }

    function bT(mm, Tm, fm) {
      0 === Tm.activeViews.size && kT(mm).broadcastPending.add(fm)
    }

    function ST(mm, Tm, fm, hm) {
      const am = mm._stream;
      if (void 0 === am) return !0;
      let xm = !1;
      return am.broadcastPending.delete(hm) ? xm = !0 : am.sentBroadcast.delete(hm) && am.broadcastDeletes.add(hm), Tm.forEachActiveView((mm => {
        const Tm = am.pendingByView.get(mm.id);
        if (Tm?.has(hm)) return Tm.delete(hm), void(xm = !0);
        const wm = am.sentByView.get(mm.id);
        if (wm?.has(hm)) {
          wm.delete(hm);
          let Tm = mm.changes.get(fm);
          void 0 === Tm && (Tm = new Map, mm.changes.set(fm, Tm)), Tm.set(hm, Am.DELETE)
        }
      })), xm
    }

    function eT(mm, Tm) {
      const fm = mm._stream?.pendingByView;
      if (void 0 === fm) return !1;
      for (const [hm, Am] of fm)
        if (Am.size > 0 && void 0 !== Tm.activeViews.get(hm)?.deref()) return !0;
      return !1
    }

    function NT(mm) {
      const Tm = mm._stream;
      return void 0 !== Tm && (Tm.broadcastPending.size > 0 || Tm.broadcastDeletes.size > 0)
    }

    function GT(mm, Tm, fm) {
      const hm = kT(mm);
      let Am = hm.pendingByView.get(Tm);
      void 0 === Am && (Am = new Set, hm.pendingByView.set(Tm, Am)), Am.add(fm)
    }

    function XT(mm, Tm) {
      const fm = mm._stream;
      void 0 !== fm && (fm.pendingByView.delete(Tm), fm.sentByView.delete(Tm), fm.priorityByView?.delete(Tm))
    }
    const PT = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function HT(mm) {
      if (null == mm || "object" !== typeof mm) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: Tm,
        max: fm
      } = mm;
      if ("number" !== typeof Tm || "number" !== typeof fm || !(fm > Tm) || !Number.isFinite(Tm) || !Number.isFinite(fm)) throw new Error(`t.quantized(): require finite min < max (got min=${Tm}, max=${fm}).`);
      const hm = mm.bits ?? 16;
      if (8 !== hm && 16 !== hm && 32 !== hm) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${hm}).`);
      const Am = mm.mode ?? "clamp";
      if ("clamp" !== Am && "wrap" !== Am) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Am)}).`);
      const am = "wrap" === Am,
        xm = Math.pow(2, hm);
      return {
        min: Tm,
        max: fm,
        bits: hm,
        wrap: am,
        wire: PT[hm],
        range: fm - Tm,
        span: am ? xm : Tm === -fm ? xm - 2 : xm - 1
      }
    }

    function yT(mm) {
      return null !== mm && "object" === typeof mm && void 0 !== mm.quantized
    }

    function CT(mm, Tm) {
      if (mm.wrap) {
        if (!Number.isFinite(Tm)) return 0;
        const fm = mm.range;
        let hm = (Tm - mm.min) % fm;
        hm < 0 && (hm += fm);
        const Am = mm.span;
        return Math.floor(hm / fm * Am + .5) % Am
      }
      if (Tm !== Tm) return 0;
      const fm = Tm < mm.min ? mm.min : Tm > mm.max ? mm.max : Tm;
      return Math.floor((fm - mm.min) / mm.range * mm.span + .5)
    }

    function rT(mm, Tm) {
      return mm.min + Tm / mm.span * mm.range
    }

    function sT(mm) {
      const Tm = fT[mm.wire];
      return (fm, hm, Am) => Tm(fm, CT(mm, hm), Am)
    }
    class lT {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(mm) {
        const Tm = Object.getPrototypeOf(mm);
        if (Tm !== Nh) {
          let fm = lT.inheritedTypes.get(Tm);
          fm || (fm = new Set, lT.inheritedTypes.set(Tm, fm)), fm.add(mm)
        }
      }
      static cache(mm) {
        let Tm = lT.cachedContexts.get(mm);
        return Tm || (Tm = new lT(mm), lT.cachedContexts.set(mm, Tm)), Tm
      }
      constructor(mm) {
        mm && this.discoverTypes(mm)
      }
      has(mm) {
        return this.schemas.has(mm)
      }
      get(mm) {
        return this.types[mm]
      }
      add(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(mm) && (this.types[Tm] = mm, null == mm[Symbol.metadata] && UT.initialize(mm), this.schemas.set(mm, Tm), !0)
      }
      getTypeId(mm) {
        return this.schemas.get(mm)
      }
      discoverTypes(mm) {
        if (!this.add(mm)) return;
        lT.inheritedTypes.get(mm)?.forEach((mm => {
          this.discoverTypes(mm)
        }));
        let Tm = mm;
        for (;
          (Tm = Object.getPrototypeOf(Tm)) && Tm !== Nh && Tm !== Function.prototype;) this.discoverTypes(Tm);
        const fm = mm[Symbol.metadata];
        (fm[bm] || fm[Pm]) && (this.hasFilters = !0);
        for (const hm in fm) {
          const mm = fm[hm].type;
          if ("string" !== typeof mm && !yT(mm))
            if ("function" === typeof mm) this.discoverTypes(mm);
            else {
              const Tm = Object.values(mm)[0];
              if ("string" === typeof Tm) continue;
              this.discoverTypes(Tm)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function MT(mm) {
      const Tm = BT(mm);
      return Tm ? {
        complexTypeKlass: QT[Tm],
        childType: mm[Tm]
      } : {
        complexTypeKlass: !1,
        childType: mm
      }
    }

    function uT(mm, Tm) {
      const fm = LT(mm),
        hm = BT(fm),
        Am = hm && BT(fm[hm]);
      if (Am) throw new Error(`${Tm?`${Tm}: `:""}@colyseus/schema: nested collections are not supported ("${hm}" of "${Am}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Am} in a Schema class.`);
      return fm
    }

    function BT(mm) {
      return "object" === typeof mm && null !== mm ? Object.keys(mm).find((mm => void 0 !== QT[mm])) : void 0
    }

    function LT(mm) {
      if ("object" !== typeof mm || null === mm) return mm;
      if (Array.isArray(mm)) return {
        array: LT(mm[0])
      };
      const Tm = function(mm) {
        const Tm = Object.keys(mm),
          fm = Tm.filter((mm => /\d+/.test(mm)));
        if (fm.length > 0 && fm.length === Tm.length / 2 && mm[mm[fm[0]]] == fm[0]) return "number";
        if (Tm.length > 0 && Tm.every((Tm => mm[Tm] === Tm))) return "string"
      }(mm);
      if (Tm) return Tm;
      if (yT(mm)) return "string" === typeof mm.quantized.wire ? mm : {
        quantized: HT(mm.quantized)
      };
      if (void 0 !== mm.type) return LT(mm.type);
      const fm = BT(mm);
      return fm && (mm[fm] = LT(mm[fm])), mm
    }
    const vT = [km, em, Nm, Gm, Xm, Pm, zm];

    function tT(mm, Tm, fm) {
      mm[Tm] || Object.defineProperty(mm, Tm, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), mm[Tm].push(fm)
    }
    const UT = {
        addField(mm, Tm, fm, hm, Am) {
          if (Tm >= 63) throw new Error(`Can't define field '${fm}'.\nSchema instances may only have up to 63 fields.`);
          mm[Tm] = Object.assign(mm[Tm] || {}, {
            type: hm,
            index: Tm,
            name: fm
          }), Object.defineProperty(mm, Jm, {
            value: mm[Jm] || {},
            enumerable: !1,
            configurable: !0
          }), mm[Jm][fm] = Am || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(mm, Zm, {
            value: Tm,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(mm, fm, {
            value: Tm,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof mm[Tm].type || yT(mm[Tm].type) || (void 0 === mm[km] && Object.defineProperty(mm, km, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), mm[km].push(Tm));
          const am = mm[Tm].type;
          if (am && "object" === typeof am && void 0 !== am.stream) {
            if (void 0 !== am.array) throw new Error(zT);
            mm[Tm].stream = !0, mm[Pm] || Object.defineProperty(mm, Pm, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), mm[Pm].includes(Tm) || mm[Pm].push(Tm);
            const Am = hm?.priority;
            "function" === typeof Am && UT.setStreamPriority(mm, fm, Am)
          }
        },
        setTag(mm, Tm, fm) {
          const hm = mm[Tm];
          if (mm[hm].tag = fm, mm[bm] || (Object.defineProperty(mm, bm, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(mm, Sm, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), mm[bm].push(hm), fm < 0) mm[Sm][fm] || (mm[Sm][fm] = []), mm[Sm][fm].push(hm);
          else
            for (let Am = fm; Am > 0; Am &= Am - 1) {
              const Tm = Am & -Am;
              mm[Sm][Tm] || (mm[Sm][Tm] = []), mm[Sm][Tm].push(hm)
            }
        },
        setUnreliable(mm, Tm) {
          const fm = mm[Tm];
          if ("string" !== typeof mm[fm].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Tm}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          mm[fm].unreliable = !0, mm[em] || Object.defineProperty(mm, em, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), mm[em].push(fm)
        },
        setPatchOnly(mm, Tm) {
          const fm = mm[Tm];
          if (mm[fm].fullStateOnly) throw new Error(`field "${Tm}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          mm[fm].patchOnly = !0, tT(mm, Nm, fm), tT(mm, Gm, fm)
        },
        setDeprecated(mm, Tm) {
          const fm = mm[Tm];
          mm[fm].deprecated = !0, tT(mm, Gm, fm), Object.defineProperty(mm, fm, {
            value: mm[fm],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(mm, Tm) {
          const fm = mm[Tm];
          if (mm[fm].patchOnly) throw new Error(`field "${Tm}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          mm[fm].fullStateOnly = !0, tT(mm, Xm, fm)
        },
        setStream(mm, Tm) {
          const fm = mm[Tm];
          mm[fm].stream = !0, mm[Pm] || Object.defineProperty(mm, Pm, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), mm[Pm].push(fm)
        },
        setStreamPriority(mm, Tm, fm) {
          const hm = mm[Tm];
          mm[Hm] || Object.defineProperty(mm, Hm, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), mm[Hm][hm] = fm
        },
        getStreamPriority: (mm, Tm) => mm?.[Hm]?.[Tm],
        defineField(mm, Tm, fm, hm, Am) {
          const am = uT(Am, `${mm.name}.${hm}`),
            {
              complexTypeKlass: xm,
              childType: wm
            } = MT(am);
          UT.addField(Tm, fm, hm, am, zh(hm, fm, wm, xm)), Tm[Jm][hm] && Object.defineProperty(mm.prototype, hm, Tm[Jm][hm]), ("string" === typeof am || yT(am)) && (Tm[zm] || Object.defineProperty(Tm, zm, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Tm[zm][fm] = "string" === typeof am ? fT[am] : sT(am.quantized))
        },
        setFields(mm, Tm) {
          const fm = mm.prototype.constructor;
          lT.register(fm);
          const hm = Object.getPrototypeOf(fm),
            Am = hm && hm[Symbol.metadata],
            am = UT.initialize(fm);
          fm[Dm] || (fm[Dm] = Nh[Dm]), fm[im] || (fm[im] = Nh[im]), fm[Rm] || (fm[Rm] = Nh[Rm]), fm.prototype.toJSON || (fm.prototype.toJSON = Nh.prototype.toJSON);
          let xm = am[Zm] ?? (Am && Am[Zm]) ?? -1;
          xm++, am[zm] || Object.defineProperty(am, zm, {
            value: Am?.[zm] ? [...Am[zm]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const wm in Tm) {
            if (void 0 !== am[wm]) throw new Error(`@colyseus/schema: Duplicate '${wm}' definition on '${fm.name||"(anonymous)"}'.`);
            UT.defineField(fm, am, xm, wm, Tm[wm]), xm++
          }
          return mm
        },
        isDeprecated: (mm, Tm) => !0 === mm[Tm].deprecated,
        initialize(mm) {
          const Tm = Object.getPrototypeOf(mm),
            fm = Tm[Symbol.metadata];
          let hm = mm[Symbol.metadata] ?? Object.create(null);
          if (Tm !== Nh && hm === fm && (hm = Object.create(null), fm)) {
            Object.setPrototypeOf(hm, fm), Object.defineProperty(hm, Zm, {
              value: fm[Zm],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== fm[bm] && (Object.defineProperty(hm, bm, {
              value: [...fm[bm]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(hm, Sm, {
              value: {
                ...fm[Sm]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const mm of vT) {
              const Tm = fm[mm];
              void 0 !== Tm && Object.defineProperty(hm, mm, {
                value: [...Tm],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(hm, Jm, {
              value: {
                ...fm[Jm]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(mm, Symbol.metadata, {
            value: hm,
            writable: !1,
            configurable: !0
          }), hm
        },
        isValidInstance: mm => mm.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(mm.constructor[Symbol.metadata], Zm),
        getFields(mm) {
          const Tm = mm[Symbol.metadata],
            fm = {};
          for (let hm = 0; hm <= Tm[Zm]; hm++) fm[Tm[hm].name] = Tm[hm].type;
          return fm
        },
        hasViewTagAtIndex: (mm, Tm) => mm?.[bm]?.includes(Tm),
        hasUnreliableAtIndex: (mm, Tm) => mm?.[em]?.includes(Tm),
        hasPatchOnlyAtIndex: (mm, Tm) => mm?.[Nm]?.includes(Tm),
        hasFullStateOnlyAtIndex: (mm, Tm) => mm?.[Xm]?.includes(Tm),
        hasStreamAtIndex: (mm, Tm) => mm?.[Pm]?.includes(Tm)
      },
      dT = (mm, Tm, fm) => mm(Tm, fm);
    class gT {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(mm) {
        this.ops = new Uint8Array(Math.max(mm + 1, 1))
      }
      record(mm, Tm) {
        const fm = this.ops[mm];
        0 === fm ? this.ops[mm] = Tm : (fm === Am.DELETE || fm === Am.ADD && Tm === Am.DELETE_AND_ADD) && (this.ops[mm] = Am.DELETE_AND_ADD), mm < 32 ? this.dirtyLow |= 1 << mm : this.dirtyHigh |= 1 << mm - 32
      }
      recordDelete(mm, Tm) {
        this.ops[mm] = Tm, mm < 32 ? this.dirtyLow |= 1 << mm : this.dirtyHigh |= 1 << mm - 32
      }
      recordRaw(mm, Tm) {
        this.record(mm, Tm)
      }
      operationAt(mm) {
        const Tm = this.ops[mm];
        return 0 === Tm ? void 0 : Tm
      }
      setOperationAt(mm, Tm) {
        this.ops[mm] = Tm
      }
      forEach(mm) {
        this.forEachWithCtx(mm, dT)
      }
      forEachWithCtx(mm, Tm) {
        let fm = this.dirtyLow,
          hm = this.dirtyHigh;
        const Am = this.ops;
        for (; 0 !== fm;) {
          const hm = fm & -fm,
            am = 31 - Math.clz32(hm);
          fm ^= hm, Tm(mm, am, Am[am])
        }
        for (; 0 !== hm;) {
          const fm = hm & -hm,
            am = 31 - Math.clz32(fm) + 32;
          hm ^= fm, Tm(mm, am, Am[am])
        }
      }
      size() {
        return FT(this.dirtyLow) + FT(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class WT {
      hY = new Map;
      pureOps = [];
      record(mm, Tm) {
        const fm = this.hY.get(mm);
        void 0 === fm ? this.hY.set(mm, Tm) : (fm === Am.DELETE || fm === Am.ADD && Tm === Am.DELETE_AND_ADD) && this.hY.set(mm, Am.DELETE_AND_ADD)
      }
      recordDelete(mm, Tm) {
        this.hY.set(mm, Tm)
      }
      recordRaw(mm, Tm) {
        this.hY.set(mm, Tm)
      }
      recordPure(mm) {
        this.pureOps.push([this.hY.size, mm])
      }
      operationAt(mm) {
        return this.hY.get(mm)
      }
      setOperationAt(mm, Tm) {
        this.hY.has(mm) && this.hY.set(mm, Tm)
      }
      forEach(mm) {
        this.forEachWithCtx(mm, dT)
      }
      forEachWithCtx(mm, Tm) {
        const fm = this.pureOps;
        if (fm.length > 0) {
          let hm = 0,
            Am = 0;
          for (const [am, xm] of this.hY) {
            for (; hm < fm.length && fm[hm][0] <= Am;) {
              const Am = fm[hm++][1];
              Tm(mm, -Am, Am)
            }
            Tm(mm, am, xm), Am++
          }
          for (; hm < fm.length;) {
            const Am = fm[hm++][1];
            Tm(mm, -Am, Am)
          }
        } else
          for (const [hm, Am] of this.hY) Tm(mm, hm, Am)
      }
      size() {
        return this.hY.size + this.pureOps.length
      }
      has() {
        return this.hY.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.hY.clear(), this.pureOps.length = 0
      }
      shift(mm) {
        const Tm = new Map;
        for (const [fm, hm] of this.hY) Tm.set(fm + mm, hm);
        this.hY = Tm
      }
    }

    function FT(mm) {
      return 16843009 * ((mm = (858993459 & (mm -= mm >>> 1 & 1431655765)) + (mm >>> 2 & 858993459)) + (mm >>> 4) & 252645135) >>> 24
    }

    function mf(mm) {
      if (void 0 === mm) return 0;
      let Tm = 0;
      for (let fm = 0, hm = mm.length; fm < hm; fm++) {
        const hm = mm[fm];
        hm < 32 && (Tm |= 1 << hm)
      }
      return Tm
    }

    function Tf(mm) {
      const Tm = mm.constructor;
      if (Object.prototype.hasOwnProperty.call(Tm, cm)) return Tm[cm];
      const fm = Tm[Symbol.metadata],
        hm = UT.isValidInstance(mm),
        Am = (fm?.[bm]?.length ?? 0) > 0,
        am = function(mm) {
          const Tm = [],
            fm = [],
            hm = [],
            Am = [],
            am = mm?.[Zm];
          if (void 0 === am) return {
            names: Tm,
            types: fm,
            tags: hm,
            encoders: Am
          };
          const xm = mm[zm];
          for (let wm = 0; wm <= am; wm++) {
            const am = mm[wm];
            void 0 !== am ? (Tm[wm] = am.name, fm[wm] = am.type, hm[wm] = am.tag, Am[wm] = xm?.[wm]) : (Tm[wm] = void 0, fm[wm] = void 0, hm[wm] = void 0, Am[wm] = void 0)
          }
          return {
            names: Tm,
            types: fm,
            tags: hm,
            encoders: Am
          }
        }(fm),
        xm = hm && !Am ? void 0 : Tm[pm],
        wm = {
          encoder: Tm[im],
          filter: xm,
          metadata: fm,
          isSchema: hm,
          filterBitmask: hm ? mf(fm?.[bm]) : 0,
          hasAnyFullStateOnly: (fm?.[Xm]?.length ?? 0) > 0,
          hasAnyUnreliable: (fm?.[em]?.length ?? 0) > 0,
          hasAnyStream: (fm?.[Pm]?.length ?? 0) > 0,
          hasAnyView: Am,
          fullStateOnlyBitmask: mf(fm?.[Xm]),
          unreliableBitmask: mf(fm?.[em]),
          streamBitmask: mf(fm?.[Pm]),
          names: am.names,
          types: am.types,
          tags: am.tags,
          encoders: am.encoders
        };
      return Object.defineProperty(Tm, cm, {
        value: wm,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), wm
    }

    function ff(mm, Tm) {
      if (void 0 !== mm.parentRef && Tm(mm.parentRef, mm._parentIndex)) return !0;
      for (let fm = mm.extraParents; void 0 !== fm; fm = fm.next)
        if (Tm(fm.ref, fm.index)) return !0;
      return !1
    }
    const hf = (mm, Tm) => {
        mm.isFieldUnreliable(Tm) ? mm.ensureUnreliableRecorder().record(Tm, Am.ADD) : mm.record(Tm, Am.ADD)
      },
      Af = (mm, Tm) => mm(Tm);

    function af(mm, Tm, fm) {
      const hm = mm.refTarget;
      if (void 0 !== hm[qm]) {
        if (mm.isPatchOnly) return;
        if (Array.isArray(hm.items)) {
          const mm = hm.items;
          for (let hm = 0, Am = mm.length; hm < Am; hm++) void 0 !== mm[hm] && fm(Tm, hm)
        } else if (void 0 !== hm.journal)
          for (const [mm, Am] of hm.journal.keyByIndex) hm.$items.has(Am) && fm(Tm, mm);
        else if (void 0 !== hm.$items)
          for (const mm of hm.$items.keys()) fm(Tm, mm)
      } else {
        const Am = mm.metadata;
        if (!Am) return;
        const am = Am[Zm] ?? -1,
          xm = Am[Gm],
          wm = mm.encDescriptor.names;
        for (let mm = 0; mm <= am; mm++) {
          const Am = wm[mm];
          if (void 0 === Am) continue;
          if (xm && xm.includes(mm)) continue;
          const am = hm[Am];
          void 0 !== am && null !== am && fm(Tm, mm)
        }
      }
    }

    function xf(mm, Tm, fm, hm) {
      ! function(mm, Tm, fm) {
        if (!Tm) return;
        const hm = Tm[Ym],
          Am = !hm._isSchema;
        let am;
        Am ? (Tm = hm.parent, fm = hm.parentIndex, am = Tm?.[Ym].metadata) : am = hm.metadata;
        const xm = (am?.[Nm]?.includes(fm) ? kf : 0) | (am?.[Xm]?.includes(fm) ? bf : 0),
          wm = hm.flags & Nf | xm,
          Dm = mm.flags;
        mm.flags = Dm | wm;
        wm & ~Dm & bf && (mm.reset(), mm.unreliableRecorder?.reset());
        const im = mm.root?.types;
        if (!im?.hasFilters) return;
        const Rm = am?.[bm]?.includes(fm) ?? !1,
          pm = am?.[Pm]?.includes(fm) ?? !1,
          Em = hm.isFiltered || Rm || pm;
        if (mm.isFiltered = Em, pm && !Am) {
          mm.isStreamCollection = !0;
          const Tm = kT(mm.ref);
          if (void 0 === Tm.priority) {
            const mm = UT.getStreamPriority(am, fm);
            void 0 !== mm && (Tm.priority = mm)
          }
          mm.root?.registerStream(mm.ref)
        }
        if (Em) {
          const Tm = Df(mm);
          mm.isVisibilitySharedWithParent = hm.isFiltered && Tm && !pm && (!Rm || Am && am[fm].tag !== jh)
        }
      }(mm, Tm, fm), mm.isFullStateOnly || (mm.has() && mm.root?.enqueueChangeTree(mm), mm.unreliableRecorder?.has() && mm.root?.enqueueUnreliable(mm), mm.has() || mm.unreliableRecorder?.has() || mm.root?.enqueueChangeTree(mm))
    }

    function wf(mm) {
      const Tm = mm.pendingFilterRefresh;
      for (let fm = 0; fm < Tm.length; fm++) {
        const mm = Tm[fm];
        0 !== (mm.flags & ef) && Rf(mm)
      }
      Tm.length = 0
    }

    function Df(mm) {
      return mm._isSchema || "string" !== typeof mm.refTarget[qm]
    }

    function Rf(mm) {
      mm.flags &= ~ef;
      const Tm = mm.root;
      if (void 0 === Tm || void 0 === mm.parentRef) return;
      const fm = Df(mm);
      let hm = Yf(mm, mm.parentRef, mm._parentIndex, fm);
      for (let am = mm.extraParents; void 0 !== am && hm !== Of; am = am.next) hm |= Yf(mm, am.ref, am.index, fm);
      if (0 === hm) return;
      mm.isVisibilitySharedWithParent = 0 !== (hm & of);
      const Am = 0 === (hm & Ef);
      Am !== mm.isFiltered && (mm.isFiltered = Am, Am || mm.isFullStateOnly || (mm.forEachLiveWithCtx(mm, hf), mm.has() && Tm.enqueueChangeTree(mm), mm.unreliableRecorder?.has() && Tm.enqueueUnreliable(mm)), mm.forEachChildWithCtx(mm, qf))
    }
    const pf = 1,
      Ef = 2,
      of = 4,
      Of = pf | Ef | of;

    function Yf(mm, Tm, fm, hm) {
      const Am = Tm[Ym];
      if (Am.root !== mm.root || ! function(mm, Tm, fm) {
          const hm = Tm.refTarget;
          if (Tm.isArray) {
            const Tm = hm.items,
              Am = Tm[fm];
            if (void 0 !== Am && Am[Ym] === mm) return !0;
            for (let fm = 0, hm = Tm.length; fm < hm; fm++) {
              const hm = Tm[fm];
              if (void 0 !== hm && hm[Ym] === mm) return !0
            }
            return !1
          }
          const Am = Tm.getValue(fm);
          return void 0 !== Am && Am[Ym] === mm
        }(mm, Am, fm)) return 0;
      Am.flags & ef && Rf(Am);
      let am = pf;
      if (Am._isSchema) {
        void 0 !== Am.encDescriptor.tags[fm] || Am.isFieldStream(fm) || (Am.isFiltered ? hm && (am |= of) : am |= Ef)
      } else if (Am.isFiltered) {
        if (hm && !Am.isStreamCollection) {
          const mm = Am.parent?.[Ym];
          (mm?._isSchema ? mm.encDescriptor.tags[Am.parentIndex] : void 0) !== jh && (am |= of)
        }
      } else am |= Ef;
      return am
    }
    const qf = (mm, Tm, fm) => {
      Rf(Tm)
    };

    function jf(mm, Tm, fm, hm) {
      if (mm.addParent(Tm, hm), !fm) return;
      const Am = fm.add(mm);
      fm !== mm.root && (mm.root = fm, xf(mm, Tm, hm));
      const am = Tm?.[Ym];
      if (void 0 !== am && void 0 !== am.subscribedViews && void 0 !== Tm[qm] && function(mm, Tm, fm, hm) {
          const Am = mm.subscribedViews;
          if (void 0 === Am) return;
          const am = mm.isStreamCollection,
            xm = am ? mm.ref : void 0,
            wm = am ? void 0 : fm[Ym];
          for (let Dm = 0, im = Am.length; Dm < im; Dm++) {
            let mm = Am[Dm];
            for (; 0 !== mm;) {
              const fm = mm & -mm;
              mm ^= fm;
              const im = 32 * Dm + (31 - Math.clz32(fm)),
                Rm = hm.activeViews.get(im),
                pm = Rm?.deref();
              void 0 !== pm ? am ? GT(xm, im, Tm) : void 0 !== wm && pm.markVisible(wm) : Am[Dm] &= ~fm
            }
          }
        }(am, hm, mm.ref, fm), Am) {
        let Tm = Qf[nf];
        void 0 === Tm && (Tm = {
          parentRef: void 0,
          root: void 0
        }, Qf[nf] = Tm), Tm.parentRef = mm.ref, Tm.root = fm, nf++, If(mm, Tm, Jf), nf--
      }
    }

    function Vf(mm, Tm, fm) {
      mm(Tm, fm)
    }

    function If(mm, Tm, fm) {
      const hm = mm.refTarget;
      if (hm[qm]) {
        if ("string" !== typeof hm[qm]) {
          const mm = hm.items;
          if (void 0 !== mm)
            for (let hm = 0, Am = mm.length; hm < Am; hm++) {
              const Am = mm[hm];
              Am && fm(Tm, Am[Ym], hm)
            } else {
              const mm = hm.$items,
                Am = hm._collectionIndexes;
              for (const hm of mm.keys()) {
                const am = mm.get(hm);
                am && fm(Tm, am[Ym], Am?.[hm] ?? hm)
              }
            }
        }
      } else {
        const Am = mm.metadata,
          am = Am?.[km];
        if (!am) return;
        const xm = mm.encDescriptor.names;
        for (let mm = 0, wm = am.length; mm < wm; mm++) {
          const Am = am[mm],
            wm = hm[xm[Am]];
          wm && fm(Tm, wm[Ym], Am)
        }
      }
    }

    function Kf(mm, Tm, fm) {
      Tm.root !== mm ? Tm.setRoot(mm) : mm.add(Tm)
    }
    const Qf = [];
    let nf = 0;

    function Jf(mm, Tm, fm) {
      if (Tm.root === mm.root) return mm.root.add(Tm), void mm.root.moveNextToParent(Tm);
      Tm.setParent(mm.parentRef, mm.root, fm)
    }

    function zf(mm, Tm, fm) {
      const hm = (3 & fm) << 3;
      return fm < 4 ? mm >>> hm & 255 : Tm >>> hm & 255
    }
    const Zf = (mm, Tm, fm) => mm(Tm, fm);
    const kf = 16,
      bf = 32,
      Sf = 128,
      ef = 256,
      Nf = kf | bf;
    class Gf {
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
      set isFiltered(mm) {
        this.flags = mm ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(mm) {
        this.flags = mm ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(mm) {
        this.flags = mm ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(mm) {
        this.flags = mm ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & kf)
      }
      set isPatchOnly(mm) {
        this.flags = mm ? this.flags | kf : this.flags & ~kf
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & bf)
      }
      set isFullStateOnly(mm) {
        this.flags = mm ? this.flags | bf : this.flags & ~bf
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(mm) {
        this.flags = mm ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Sf)
      }
      set needsRestage(mm) {
        this.flags = mm ? this.flags | Sf : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new gT(this.metadata?.[Zm] ?? 0) : new WT), this.unreliableRecorder
      }
      isFieldUnreliable(mm) {
        const Tm = this.encDescriptor;
        return !!Tm.hasAnyUnreliable && (mm < 32 ? 0 !== (Tm.unreliableBitmask & 1 << mm) : UT.hasUnreliableAtIndex(this.metadata, mm))
      }
      isFieldFullStateOnly(mm) {
        if (this.isFullStateOnly) return !0;
        const Tm = this.encDescriptor;
        return !!Tm.hasAnyFullStateOnly && (mm < 32 ? 0 !== (Tm.fullStateOnlyBitmask & 1 << mm) : UT.hasFullStateOnlyAtIndex(this.metadata, mm))
      }
      isFieldStream(mm) {
        const Tm = this.encDescriptor;
        return !!Tm.hasAnyStream && (mm < 32 ? 0 !== (Tm.streamBitmask & 1 << mm) : UT.hasStreamAtIndex(this.metadata, mm))
      }
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm;
        this.ref = mm, this.refTarget = Tm;
        const fm = Tf(mm);
        this.encDescriptor = fm, this.metadata = fm.metadata;
        const hm = fm.isSchema;
        if (this._isSchema = hm, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, hm) {
          const mm = this.metadata?.[Zm] ?? 0;
          mm > 7 && (this.ops = new Uint8Array(mm + 1))
        } else this.collDirty = new Map
      }
      _opAt(mm) {
        const Tm = this.ops;
        if (void 0 !== Tm) return Tm[mm];
        const fm = (3 & mm) << 3;
        return mm < 4 ? this.opsLow >>> fm & 255 : this.opsHigh >>> fm & 255
      }
      _opPut(mm, Tm) {
        const fm = this.ops;
        if (void 0 !== fm) return void(fm[mm] = Tm);
        const hm = (3 & mm) << 3,
          Am = ~(255 << hm);
        mm < 4 ? this.opsLow = this.opsLow & Am | Tm << hm : this.opsHigh = this.opsHigh & Am | Tm << hm
      }
      _markDirty(mm) {
        mm < 32 ? this.dirtyLow |= 1 << mm : this.dirtyHigh |= 1 << mm - 32
      }
      record(mm, Tm) {
        if (this._isSchema) {
          const fm = this._opAt(mm);
          0 === fm ? this._opPut(mm, Tm) : (fm === Am.DELETE || fm === Am.ADD && Tm === Am.DELETE_AND_ADD) && this._opPut(mm, Am.DELETE_AND_ADD), this._markDirty(mm)
        } else {
          const fm = this.collDirty,
            hm = fm.get(mm);
          let am;
          am = void 0 === hm ? Tm : hm === Am.DELETE || hm === Am.ADD && Tm === Am.DELETE_AND_ADD ? Am.DELETE_AND_ADD : hm, fm.set(mm, am)
        }
      }
      recordDelete(mm, Tm) {
        this._isSchema ? (this._opPut(mm, Tm), this._markDirty(mm)) : this.collDirty.set(mm, Tm)
      }
      recordRaw(mm, Tm) {
        this._isSchema ? (this._opPut(mm, Tm), this._markDirty(mm)) : this.collDirty.set(mm, Tm)
      }
      recordPure(mm) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, mm])
      }
      operationAt(mm) {
        if (this._isSchema) {
          const Tm = this._opAt(mm);
          return 0 === Tm ? void 0 : Tm
        }
        return this.collDirty.get(mm)
      }
      setOperationAt(mm, Tm) {
        if (this._isSchema) this._opPut(mm, Tm);
        else {
          const fm = this.collDirty;
          fm.has(mm) && fm.set(mm, Tm)
        }
      }
      forEach(mm) {
        this.forEachWithCtx(mm, Zf)
      }
      forEachWithCtx(mm, Tm) {
        if (this._isSchema) {
          let fm = this.dirtyLow,
            hm = this.dirtyHigh;
          const Am = this.ops;
          if (void 0 !== Am) {
            for (; 0 !== fm;) {
              const hm = fm & -fm,
                am = 31 - Math.clz32(hm);
              fm ^= hm, Tm(mm, am, Am[am])
            }
            for (; 0 !== hm;) {
              const fm = hm & -hm,
                am = 31 - Math.clz32(fm) + 32;
              hm ^= fm, Tm(mm, am, Am[am])
            }
          } else {
            const hm = this.opsLow,
              Am = this.opsHigh;
            for (; 0 !== fm;) {
              const am = fm & -fm,
                xm = 31 - Math.clz32(am);
              fm ^= am, Tm(mm, xm, zf(hm, Am, xm))
            }
          }
          return
        }
        const fm = this.collDirty,
          hm = this.collPureOps;
        if (void 0 !== hm && hm.length > 0) {
          let Am = 0,
            am = 0;
          for (const [xm, wm] of fm) {
            for (; Am < hm.length && hm[Am][0] <= am;) {
              const fm = hm[Am++][1];
              Tm(mm, -fm, fm)
            }
            Tm(mm, xm, wm), am++
          }
          for (; Am < hm.length;) {
            const fm = hm[Am++][1];
            Tm(mm, -fm, fm)
          }
        } else
          for (const [Am, am] of fm) Tm(mm, Am, am)
      }
      size() {
        return this._isSchema ? FT(this.dirtyLow) + FT(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(mm, Tm) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const fm = this.collDirty,
          hm = new Map,
          am = !this.paused && !this.isFullStateOnly;
        if (mm > 0)
          for (const [Am, xm] of fm) Am < mm && hm.set(Am, xm);
        if (am)
          for (let xm = 0; xm < Tm; xm++) hm.set(mm + xm, Am.ADD);
        for (const [Am, xm] of fm) Am >= mm && hm.set(Am + Tm, xm);
        this.collDirty = hm, am && this.root?.enqueueChangeTree(this)
      }
      removeAt(mm, Tm) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const fm = this.collDirty,
          hm = mm + Tm;
        let Am = !1;
        for (const xm of fm.keys())
          if (xm >= hm) {
            Am = !0;
            break
          } if (!Am) {
          for (let Tm = mm; Tm < hm; Tm++) fm.delete(Tm);
          return
        }
        const am = new Map;
        for (const [xm, wm] of fm) xm < mm ? am.set(xm, wm) : xm >= hm && am.set(xm - Tm, wm);
        this.collDirty = am
      }
      unshift(mm) {
        this.insertAt(0, mm)
      }
      setRoot(mm) {
        ! function(mm, Tm) {
          mm.root = Tm;
          const fm = Tm.add(mm);
          xf(mm, mm.parent, mm.parentIndex), fm && If(mm, Tm, Kf)
        }(this, mm)
      }
      setParent(mm, Tm, fm) {
        jf(this, mm, Tm, fm)
      }
      forEachChild(mm) {
        If(this, mm, Vf)
      }
      forEachChildWithCtx(mm, Tm) {
        If(this, mm, Tm)
      }
      forEachLive(mm) {
        af(this, mm, Af)
      }
      forEachLiveWithCtx(mm, Tm) {
        af(this, mm, Tm)
      }
      operation(mm) {
        this.paused || this.isFullStateOnly || (this.recordPure(mm), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(mm, Tm, fm) {
        if (!this.paused && !this.isFieldFullStateOnly(mm)) {
          if (this.isFieldUnreliable(mm) && !this.isNew) {
            const hm = this.ensureUnreliableRecorder();
            return fm ? hm.recordRaw(mm, Tm) : hm.record(mm, Tm), void this.root?.enqueueUnreliable(this)
          }
          fm ? this.recordRaw(mm, Tm) : this.record(mm, Tm), this.root?.enqueueChangeTree(this)
        }
      }
      change(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Am.ADD;
        this._routeAndRecord(mm, Tm, !1)
      }
      indexedOperation(mm, Tm) {
        this._routeAndRecord(mm, Tm, !0)
      }
      getChange(mm) {
        return this.operationAt(mm)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(mm) {
        const Tm = this.paused;
        this.paused = !0;
        try {
          return mm()
        } finally {
          this.paused = Tm
        }
      }
      markDirty(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Am.ADD;
        const fm = this.paused;
        this.paused = !1;
        try {
          this.change(mm, Tm)
        } finally {
          this.paused = fm
        }
      }
      getValue(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Em](mm, Tm)
      }
      delete(mm, Tm) {
        if (void 0 === mm) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${mm}'`)
          } catch (DA) {
            console.warn(DA)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(mm)) return this.getValue(mm);
        const fm = this.isFieldUnreliable(mm) && !this.isNew;
        fm ? this.ensureUnreliableRecorder().recordDelete(mm, Tm ?? Am.DELETE) : this.recordDelete(mm, Tm ?? Am.DELETE);
        const hm = this.getValue(mm);
        return hm && hm[Ym] && this.root?.remove(hm[Ym]), fm ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), hm
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Vm]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Vm]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Vm]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const mm = mm => {
          if (mm < 0) return;
          const Tm = this.getValue(mm);
          Tm && Tm[Ym] && Tm[Ym].discardAll()
        };
        this.forEach(mm), this.unreliableRecorder?.forEach(mm), this.discard()
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
      addParent(mm, Tm) {
        ! function(mm, Tm, fm) {
          if (mm.parentRef) {
            if (mm.parentRef[Ym] === Tm[Ym]) return void(mm._parentIndex = fm);
            if (ff(mm, ((mm, fm) => mm[Ym] === Tm[Ym]))) return void(mm._parentIndex = fm)
          }
          void 0 === mm.parentRef ? (mm.parentRef = Tm, mm._parentIndex = fm) : (mm.extraParents = {
            ref: mm.parentRef,
            index: mm._parentIndex,
            next: mm.extraParents
          }, mm.parentRef = Tm, mm._parentIndex = fm)
        }(this, mm, Tm)
      }
      setParentIndex(mm, Tm) {
        ! function(mm, Tm, fm) {
          if (void 0 !== mm.extraParents)
            if (mm.parentRef[Ym] !== Tm[Ym]) {
              for (let hm = mm.extraParents; void 0 !== hm; hm = hm.next)
                if (hm.ref[Ym] === Tm[Ym]) return void(hm.index = fm)
            } else mm._parentIndex = fm;
          else mm._parentIndex = fm
        }(this, mm, Tm)
      }
      removeParent() {
        return function(mm, Tm) {
          if (mm.parentRef && mm.parentRef[Ym] === Tm[Ym]) return mm.extraParents ? (mm.parentRef = mm.extraParents.ref, mm._parentIndex = mm.extraParents.index, mm.extraParents = mm.extraParents.next) : (mm.parentRef = void 0, mm._parentIndex = void 0), !0;
          let fm = mm.extraParents,
            hm = null;
          for (; fm;) {
            if (fm.ref[Ym] === Tm[Ym]) return hm ? hm.next = fm.next : mm.extraParents = fm.next, !0;
            hm = fm, fm = fm.next
          }
          return void 0 === mm.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(mm) {
        return function(mm, Tm) {
          if (void 0 !== mm.parentRef && Tm(mm.parentRef, mm._parentIndex)) return {
            ref: mm.parentRef,
            index: mm._parentIndex
          };
          for (let fm = mm.extraParents; void 0 !== fm; fm = fm.next)
            if (Tm(fm.ref, fm.index)) return {
              ref: fm.ref,
              index: fm.index
            }
        }(this, mm)
      }
      hasParent(mm) {
        return ff(this, mm)
      }
      indexInParent(mm) {
        return function(mm, Tm) {
          if (mm.parentRef && mm.parentRef[Ym] === Tm[Ym]) return mm._parentIndex;
          for (let fm = mm.extraParents; void 0 !== fm; fm = fm.next)
            if (fm.ref[Ym] === Tm[Ym]) return fm.index
        }(this, mm)
      }
      getAllParents() {
        return function(mm) {
          const Tm = [];
          mm.parentRef && Tm.push({
            ref: mm.parentRef,
            index: mm._parentIndex
          });
          let fm = mm.extraParents;
          for (; fm;) Tm.push({
            ref: fm.ref,
            index: fm.index
          }), fm = fm.next;
          return Tm
        }(this)
      }
    }
    class Xf {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(mm) {
        this.ref = mm
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
      untracked(mm) {
        return mm()
      }
      markDirty() {}
      forEachChild(mm) {
        const Tm = this.ref;
        if (Tm[qm]) {
          if ("string" !== typeof Tm[qm])
            for (const [fm, hm] of Tm.entries()) hm && mm(hm[Ym], Tm._collectionIndexes?.[fm] ?? fm);
          return
        }
        const fm = Tm.constructor,
          hm = fm?.[Symbol.metadata];
        if (!hm) return;
        const Am = hm[km] ?? [];
        for (let am = 0; am < Am.length; am++) {
          const fm = Am[am],
            xm = Tm[hm[fm].name];
          xm && mm(xm[Ym], fm)
        }
      }
      forEachChildWithCtx(mm, Tm) {
        this.forEachChild(((fm, hm) => Tm(mm, fm, hm)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Pf(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm;
      var fm;
      Object.defineProperty(mm, Ym, {
        value: (fm = Tm, new Xf(fm)),
        enumerable: !1,
        writable: !0
      })
    }

    function Hf(mm, Tm, fm, hm, am, xm, Dm) {
      void 0 !== Dm ? Dm(Tm, hm, xm) : "string" === typeof fm ? fT[fm]?.(Tm, hm, xm) : null != fm[Symbol.metadata] ? (fT.number(Tm, hm[wm], xm), (am & Am.ADD) === Am.ADD && mm.tryEncodeTypeId(Tm, fm, hm.constructor, xm)) : fT.number(Tm, hm[wm], xm)
    }
    const yf = function(mm, Tm, fm, hm, am, xm, wm, Dm) {
        if (Tm[xm.offset++] = 255 & (hm | am), am === Am.DELETE) return;
        const im = fm.encDescriptor,
          Rm = fm.ref,
          pm = Rm[Qm][hm] ?? Rm[im.names[hm]];
        Hf(mm, Tm, im.types[hm], pm, am, xm, im.encoders[hm])
      },
      Cf = function(mm, Tm, fm, hm, am, xm) {
        if (Tm[xm.offset++] = 255 & am, fT.number(Tm, hm, xm), am === Am.DELETE) return;
        const wm = fm.ref;
        if ((am & Am.ADD) === Am.ADD) {
          const mm = wm.$indexes.get(hm);
          fT.string(Tm, mm, xm)
        }
        Hf(mm, Tm, wm[qm], wm[Em](hm), am, xm)
      },
      rf = function(mm, Tm, fm, hm, am, xm) {
        if (Tm[xm.offset++] = 255 & am, fT.number(Tm, hm, xm), am === Am.DELETE) return;
        const wm = fm.ref;
        Hf(mm, Tm, wm[qm], wm[Em](hm), am, xm)
      },
      sf = function(mm, Tm, fm, hm, am, xm) {
        const wm = fm.ref;
        (am & Am.ADD) === Am.ADD && "function" === typeof wm.set ? Cf(mm, Tm, fm, hm, am, xm) : rf(mm, Tm, fm, hm, am, xm)
      },
      lf = function(mm, Tm, fm, hm, am, xm, Dm, im) {
        const Rm = fm.refTarget,
          pm = Rm[qm],
          om = "string" !== typeof pm;
        let Om;
        if (im && fm.isFiltered && om) {
          const mm = Rm.tmpItems[hm];
          if (!mm) return;
          if (Om = mm[wm], am === Am.DELETE) am = Am.DELETE_BY_REFID;
          else if ((am & Am.ADD) === Am.ADD) am = Am.ADD_BY_REFID;
          else if ((am & Am.MOVE) === Am.MOVE) return
        } else if (am === Am.DELETE && om) {
          const mm = Rm.tmpItems[hm];
          if (!mm) return;
          Om = mm[wm], am = Am.DELETE_BY_REFID
        } else Om = hm;
        if (Tm[xm.offset++] = 255 & am, fT.number(Tm, Om, xm), am === Am.DELETE || am === Am.DELETE_BY_REFID) return;
        Hf(mm, Tm, pm, Rm[Em](hm, Dm), am, xm)
      };

    function Mf(mm, Tm, fm, hm, am, xm, Dm) {
      const im = mm.resyncVisited;
      let Rm = im.get(mm.currentRefId);
      if (void 0 === Rm && im.set(mm.currentRefId, Rm = new Set), Rm.add(hm), void 0 !== am && fm === Am.ADD && am !== xm) {
        const fm = am[wm];
        void 0 !== fm && (mm.root.removeRef(fm), Dm?.push({
          ref: Tm,
          refId: mm.currentRefId,
          op: Am.DELETE,
          dynamicIndex: hm,
          value: void 0,
          previousValue: am
        }))
      }
    }

    function uf(mm, Tm, fm, hm) {
      const Am = Tm[wm];
      if (void 0 === Am || fm.has(Am)) return;
      fm.add(Am);
      const am = Tm.constructor[Symbol.metadata],
        xm = am?.[km];
      if (void 0 === xm) return;
      const Dm = am[Nm];
      for (let wm = 0; wm < xm.length; wm++) {
        const Am = xm[wm];
        if (void 0 !== Dm && Dm.includes(Am)) continue;
        const im = am[Am],
          Rm = Tm[im.name];
        Rm && (Nh.is(im.type) ? uf(mm, Rm, fm, hm) : Bf(mm, Rm, fm, hm))
      }
    }

    function Bf(mm, Tm, fm, hm) {
      const am = Tm[jm] ?? Tm,
        xm = am[wm];
      if (void 0 === xm || fm.has(xm)) return;
      fm.add(xm);
      const Dm = mm.resyncVisited.get(xm);
      if (void 0 === Dm) return;
      const im = mm.root;
      am[Om](Dm, ((mm, fm) => {
        hm?.push({
          ref: Tm,
          refId: xm,
          op: Am.DELETE,
          dynamicIndex: fm,
          value: void 0,
          previousValue: mm
        });
        const am = mm?.[wm];
        void 0 !== am && im.removeRef(am)
      }), (Tm => {
        Nh.isSchema(Tm) && uf(mm, Tm, fm, hm)
      }))
    }
    const Lf = 1,
      vf = 2,
      tf = 3,
      Uf = 4,
      df = 5;

    function gf(mm, Tm, fm, hm, am, xm, Dm, im, Rm) {
      const pm = mm.root;
      let Em;
      if ((Tm & Am.DELETE) === Am.DELETE) {
        const mm = am?.[wm];
        void 0 !== mm && pm.removeRef(mm), Tm !== Am.DELETE_AND_ADD && fm[om](hm), Em = void 0
      }
      if (Tm === Am.DELETE);
      else if ("string" === typeof xm) Em = KT[xm](Dm, im);
      else if (yT(xm)) Em = function(mm, Tm, fm) {
        return rT(mm, (0, KT[mm.wire])(Tm, fm))
      }(xm.quantized, Dm, im);
      else if (Nh.is(xm)) {
        const fm = KT.number(Dm, im);
        if (Em = pm.refs.get(fm), (Tm & Am.ADD) === Am.ADD) {
          const hm = mm.getInstanceType(Dm, im, xm);
          Em || (Em = mm.createInstanceOfType(hm)), pm.addRef(fm, Em, Em !== am || Tm === Am.DELETE_AND_ADD && Em === am)
        }
      } else {
        const fm = (Om = Object.keys(xm)[0], QT[Om]),
          hm = KT.number(Dm, im);
        null !== mm.resyncVisited && function(mm, Tm) {
          const fm = mm.resyncVisited;
          fm.has(Tm) || fm.set(Tm, new Set)
        }(mm, hm);
        const om = pm.refs.has(hm) ? am || pm.refs.get(hm) : fm.constructor.initializeForDecoder();
        if (Em = om.clone(!0), Em[qm] = Object.values(xm)[0], am) {
          let mm = am[wm];
          if (void 0 !== mm && hm !== mm) {
            (Tm & Am.DELETE) !== Am.DELETE && pm.removeRef(mm);
            const fm = am.entries();
            let hm;
            for (;
              (hm = fm.next()) && !hm.done;) {
              const [Tm, fm] = hm.value;
              "object" === typeof fm && (mm = fm[wm]), Rm?.push({
                ref: am,
                refId: mm,
                op: Am.DELETE,
                field: Tm,
                value: void 0,
                previousValue: fm
              })
            }
          }
        }
        pm.addRef(hm, Em, om !== am || Tm === Am.DELETE_AND_ADD && om === am)
      }
      var Om;
      return Em
    }
    const Wf = function(mm, Tm, fm, hm, Am) {
        const am = Tm[fm.offset++],
          xm = hm.constructor[Symbol.metadata],
          wm = am >> 6 << 6,
          Dm = am % (wm || 255),
          im = xm[Dm];
        if (void 0 === im) return console.warn("@colyseus/schema: field not defined at", {
          index: Dm,
          ref: hm.constructor.name,
          metadata: xm
        }), -1;
        const Rm = !0 === im.deprecated,
          pm = Rm ? void 0 : hm[Em](Dm),
          om = gf(mm, wm, hm, Dm, pm, im.type, Tm, fm, Am);
        Rm || (null !== om && void 0 !== om && (hm[im.name] = om), pm !== om && Am?.push({
          ref: hm,
          refId: mm.currentRefId,
          op: wm,
          field: im.name,
          value: om,
          previousValue: pm
        }))
      },
      Ff = function(mm, Tm, fm, hm, am) {
        const xm = hm[jm] ?? hm,
          wm = Tm[fm.offset++];
        if (wm === Am.CLEAR) return mm.removeChildRefs(xm, am), void xm.clear();
        const Dm = KT.number(Tm, fm),
          im = xm[qm],
          Rm = xm.constructor.COLLECTION_KIND;
        let pm;
        (wm & Am.ADD) === Am.ADD ? Rm === Lf ? (pm = KT.string(Tm, fm), xm.setIndex(Dm, pm)) : pm = Dm : pm = xm.getIndex(Dm);
        const om = xm[Em](Dm),
          Om = gf(mm, wm, hm, Dm, om, im, Tm, fm, am);
        if (null !== mm.resyncVisited && Mf(mm, hm, wm, pm, om, Om, am), null !== Om && void 0 !== Om) switch (Rm) {
          case Lf:
            xm.$items.set(pm, Om);
            break;
          case vf:
            xm.$setAt(Dm, Om, null !== mm.resyncVisited && wm === Am.ADD ? Am.REPLACE : wm);
            break;
          case tf:
          case Uf:
          case df:
            xm.$items.has(Dm) || (xm.$items.set(Dm, Om), "number" === typeof xm.$refId && Dm >= xm.$refId && (xm.$refId = Dm + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${xm.constructor?.name} \u2014 item at index ${Dm} was not stored.`)
        }
        om !== Om && am?.push({
          ref: hm,
          refId: mm.currentRefId,
          op: wm,
          dynamicIndex: pm,
          value: Om,
          previousValue: om
        })
      },
      mh = function(mm, Tm, fm, hm, am) {
        const xm = hm[jm] ?? hm;
        let wm, Dm = Tm[fm.offset++];
        if (Dm === Am.CLEAR) return mm.removeChildRefs(xm, am), void xm.clear();
        if (Dm === Am.REVERSE) return void xm.items.reverse();
        if (Dm === Am.DELETE_BY_REFID) {
          const Dm = KT.number(Tm, fm),
            im = mm.root.refs.get(Dm);
          if (void 0 === im) return;
          if (mm.root.removeRef(Dm), wm = xm.findIndex((mm => mm === im)), -1 === wm) return;
          return xm[om](wm), void am?.push({
            ref: hm,
            refId: mm.currentRefId,
            op: Am.DELETE,
            dynamicIndex: wm,
            value: void 0,
            previousValue: im
          })
        }
        if (Dm === Am.ADD_BY_REFID) {
          const hm = KT.number(Tm, fm),
            Am = mm.root.refs.get(hm);
          Am && (wm = xm.findIndex((mm => mm === Am))), -1 !== wm && void 0 !== wm || (wm = xm.length)
        } else wm = KT.number(Tm, fm);
        const im = xm[qm];
        let Rm = wm;
        const pm = xm.items[wm],
          Em = gf(mm, Dm, hm, wm, pm, im, Tm, fm, am);
        null !== mm.resyncVisited && Mf(mm, hm, Dm, wm, pm, Em, am), null !== Em && void 0 !== Em && Em !== pm && xm.$setAt(wm, Em, null !== mm.resyncVisited && Dm === Am.ADD ? Am.REPLACE : Dm), pm !== Em && am?.push({
          ref: hm,
          refId: mm.currentRefId,
          op: Dm,
          dynamicIndex: Rm,
          value: Em,
          previousValue: pm
        })
      };
    class Th extends Error {}

    function fh(mm, Tm, fm, hm) {
      if (!(mm instanceof Tm)) throw new Th(`a '${Tm.name}' was expected, but '${mm&&mm.constructor.name}' was provided in ${fm.constructor.name}#${hm}`)
    }
    const hh = (mm, Tm) => {
        const fm = mm.toString(),
          hm = Tm.toString();
        return fm < hm ? -1 : fm > hm ? 1 : 0
      },
      Ah = {
        get: (mm, Tm) => "symbol" === typeof Tm || isNaN(Tm) ? Reflect.get(mm, Tm) : mm.items[Tm],
        set: (mm, Tm, fm) => {
          if ("symbol" !== typeof Tm && !isNaN(Tm)) {
            if (void 0 === fm || null === fm) mm.$deleteAt(Tm);
            else {
              let hm;
              if (fm[Ym]) {
                fh(fm, mm[qm], mm, Tm);
                const am = mm.items[Tm];
                mm.isMovingItems ? (hm = mm.$wireIndex(Number(Tm)), void 0 !== am ? fm[Ym].isNew ? mm[Ym].indexedOperation(hm, Am.MOVE_AND_ADD) : (mm[Ym].getChange(hm) & Am.DELETE) === Am.DELETE ? mm[Ym].indexedOperation(hm, Am.DELETE_AND_MOVE) : mm[Ym].indexedOperation(hm, Am.MOVE) : fm[Ym].isNew && mm[Ym].indexedOperation(hm, Am.ADD), fm[Ym].setParent(mm, mm[Ym].root, hm)) : hm = mm.$changeAt(Number(Tm), fm), void 0 !== am && am[Ym].root?.remove(am[Ym])
              } else hm = mm.$changeAt(Number(Tm), fm);
              mm.items[Tm] = fm, void 0 !== hm && (mm.tmpItems[hm] = fm)
            }
            return !0
          }
          return Reflect.set(mm, Tm, fm)
        },
        deleteProperty: (mm, Tm) => ("number" === typeof Tm ? mm.$deleteAt(Tm) : delete mm[Tm], !0),
        has: (mm, Tm) => "symbol" === typeof Tm || isNaN(Number(Tm)) ? Reflect.has(mm, Tm) : Reflect.has(mm.items, Tm)
      };
    class ah {
      [Ym];
      [wm];
      [jm];
      [qm];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[im] = lf;
      static[Rm] = mh;
      static COLLECTION_KIND = vf;
      static[pm](mm, Tm, fm) {
        if (!fm) return !0;
        const hm = mm[jm] ?? mm;
        return "string" === typeof hm[qm] || fm.isChangeTreeVisible(hm.tmpItems[Tm]?.[Ym])
      }
      static is(mm) {
        return Array.isArray(mm) || void 0 !== mm.array
      }
      static from(mm) {
        return new ah(...Array.from(mm))
      }
      constructor() {
        this[qm] = void 0, this[jm] = this;
        const mm = new Proxy(this, Ah);
        return Object.defineProperty(this, Ym, {
          value: new Gf(mm, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), mm
      }
      static initializeForDecoder() {
        const mm = Object.create(ah.prototype);
        mm.items = [], mm.isMovingItems = !1, mm._needsCompaction = !1, mm[qm] = void 0, mm[jm] = mm;
        const Tm = new Proxy(mm, Ah);
        return Pf(mm, Tm), Tm
      }
      set length(mm) {
        0 === mm ? this.clear() : mm < this.items.length ? this.splice(mm, this.length - mm) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Ym].pause()
      }
      resumeTracking() {
        this[Ym].resume()
      }
      untracked(mm) {
        return this[Ym].untracked(mm)
      }
      get isTrackingPaused() {
        return this[Ym].paused
      }
      push() {
        const mm = this[jm],
          Tm = mm.items,
          fm = mm.tmpItems,
          hm = mm[Ym],
          am = mm[qm];
        let xm = fm.length;
        for (let wm = 0, Dm = arguments.length; wm < Dm; wm++, xm++) {
          const Dm = wm < 0 || arguments.length <= wm ? void 0 : arguments[wm];
          if (void 0 === Dm || null === Dm) return;
          "object" === typeof Dm && am && fh(Dm, am, mm, wm), hm.indexedOperation(xm, Am.ADD), Tm.push(Dm), fm.push(Dm), Dm[Ym]?.setParent(this, hm.root, xm)
        }
        return xm
      }
      pop() {
        const mm = this[jm],
          Tm = mm.tmpItems,
          fm = mm.deletedIndexes;
        let hm = -1;
        for (let am = Tm.length - 1; am >= 0; am--)
          if (!0 !== fm[am]) {
            hm = am;
            break
          } if (hm < 0) return;
        const Am = mm.$isUnsentAdd(hm);
        return mm[Ym].delete(hm), Am ? mm.$cancelAdd(hm) : fm[hm] = !0, mm.items.pop()
      }
      at(mm) {
        return mm < 0 && (mm += this.length), this.items[mm]
      }
      $wireIndex(mm) {
        const Tm = this.deletedIndexes;
        if (0 === Tm.length) return mm;
        const fm = this.tmpItems;
        let hm = 0;
        for (let Am = 0; Am < fm.length; Am++)
          if (!0 !== Tm[Am]) {
            if (hm === mm) return Am;
            hm++
          } return fm.length + (mm - hm)
      }
      $isUnsentAdd(mm) {
        const Tm = this[Ym];
        return 0 === (576 & Tm.flags) && !Tm.paused && "string" !== typeof this[qm] && Tm.operationAt(mm) === Am.ADD
      }
      $cancelAdd(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const fm = this[Ym],
          hm = this.tmpItems[mm];
        this.tmpItems.splice(mm, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(mm, 1), fm.removeAt(mm, 1);
        const Am = hm?.[Ym];
        void 0 !== Am && void 0 === Am.root && Am.removeParent(this), Tm && this.$reindexChildren(mm)
      }
      $reindexChildren(mm, Tm) {
        if (!this[Ym].hasFilteredFields) return;
        if ("string" === typeof this[qm]) return;
        const fm = this.tmpItems,
          hm = fm.length;
        if (void 0 !== Tm)
          for (; mm < hm && fm[mm] === Tm[mm];) mm++;
        for (let Am = mm; Am < hm; Am++) fm[Am]?.[Ym]?.setParentIndex(this, Am)
      }
      $changeAt(mm, Tm) {
        if (void 0 === Tm || null === Tm) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[mm] === Tm) return;
        const fm = void 0 !== this.items[mm] ? "object" === typeof Tm ? Am.DELETE_AND_ADD : Am.REPLACE : Am.ADD,
          hm = this.$wireIndex(mm),
          am = this[Ym];
        return am.change(hm, fm), Tm[Ym]?.setParent(this, am.root, hm), hm
      }
      $deleteAt(mm, Tm) {
        this[Ym].delete(this.$wireIndex(mm), Tm)
      }
      $setAt(mm, Tm, fm) {
        fm === Am.ADD && void 0 !== this.items[mm] ? this.items.splice(mm, 0, Tm) : fm === Am.DELETE_AND_MOVE ? (this.items.splice(mm, 1), this.items[mm] = Tm) : (mm > this.items.length && (this._needsCompaction = !0), this.items[mm] = Tm)
      }
      clear() {
        const mm = this[jm];
        if (0 === mm.items.length) return;
        const Tm = mm[Ym];
        Tm.forEachChild(((mm, fm) => {
          Tm.root?.remove(mm)
        })), Tm.discard(), Tm.operation(Am.CLEAR), mm.items.length = 0, mm.tmpItems.length = 0
      } [Im]() {
        const mm = this[jm] ?? this,
          Tm = mm[Ym];
        if (Tm.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const fm = mm.items;
        for (let hm = 0; hm < fm.length; hm++) fm[hm]?.[Im]?.();
        mm.items.length = 0, mm.tmpItems.length = 0, mm.deletedIndexes.length = 0, Tm.recycle(), mm[wm] = void 0
      }
      concat() {
        return new ah(...this.items.concat(...arguments))
      }
      join(mm) {
        return this.items.join(mm)
      }
      reverse() {
        const mm = this[jm],
          Tm = mm[Ym];
        if (Tm.has() || mm.deletedIndexes.length > 0) {
          const Tm = mm.items.slice().reverse();
          return this.clear(), this.push(...Tm), this
        }
        return Tm.operation(Am.REVERSE), mm.items.reverse(), mm.tmpItems.reverse(), mm.$reindexChildren(0), this
      }
      shift() {
        const mm = this[jm],
          Tm = mm.items;
        if (0 === Tm.length) return;
        const fm = mm[Ym],
          hm = mm.deletedIndexes;
        let am = 0;
        for (; !0 === hm[am];) am++;
        const xm = mm.$isUnsentAdd(am);
        return fm.delete(am, Am.DELETE), xm ? mm.$cancelAdd(am) : hm[am] = !0, Tm.shift()
      }
      slice(mm, Tm) {
        const fm = new ah;
        return fm.push(...this.items.slice(mm, Tm)), fm
      }
      sort() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hh;
        const Tm = this[jm];
        Tm.isMovingItems = !0;
        const fm = Tm[Ym];
        return Tm.items.sort(mm).forEach(((mm, Tm) => fm.change(Tm, Am.REPLACE))), Tm.tmpItems.sort(mm), Tm.$reindexChildren(0), Tm.isMovingItems = !1, this
      }
      splice(mm, Tm) {
        const fm = this[jm],
          hm = fm[Ym],
          am = fm.items,
          xm = fm.tmpItems,
          wm = fm.deletedIndexes,
          Dm = am.length,
          im = xm.length;
        for (var Rm = arguments.length, pm = new Array(Rm > 2 ? Rm - 2 : 0), Em = 2; Em < Rm; Em++) pm[Em - 2] = arguments[Em];
        const om = pm.length,
          Om = [];
        for (let Am = 0; Am < im; Am++) !0 !== wm[Am] && Om.push(Am);
        let qm;
        if (Dm > mm) {
          void 0 === Tm && (Tm = Dm - mm);
          for (let am = mm; am < mm + Tm; am++) {
            const mm = Om[am],
              Tm = fm.$isUnsentAdd(mm);
            hm.delete(mm, Am.DELETE), Tm ? (qm ??= []).push(mm) : wm[mm] = !0
          }
        } else Tm = 0;
        if (om > 0) {
          const am = Om[mm] ?? Dm,
            im = Math.min(om, Tm);
          for (let mm = 0; mm < im; mm++) {
            const Tm = am + mm;
            let fm;
            const Dm = void 0 !== qm ? qm.indexOf(Tm) : -1; - 1 !== Dm ? (qm.splice(Dm, 1), fm = Am.ADD) : fm = wm[Tm] ? Am.DELETE_AND_ADD : Am.ADD, hm.indexedOperation(Tm, fm), xm[Tm] = pm[mm], wm[Tm] = !1, pm[mm][Ym]?.setParent(this, hm.root, Tm)
          }
          const Rm = om - im;
          if (Rm > 0) {
            const mm = am + im;
            hm.insertAt(mm, Rm);
            for (let Tm = 0; Tm < Rm; Tm++) pm[im + Tm][Ym]?.setParent(this, hm.root, mm + Tm);
            wm.length > 0 && wm.splice(mm, 0, ...new Array(Rm).fill(!1)), xm.splice(mm, 0, ...pm.slice(im)), fm.$reindexChildren(mm + Rm)
          }
        }
        if (void 0 !== qm && qm.length > 0) {
          for (let mm = qm.length - 1; mm >= 0; mm--) fm.$cancelAdd(qm[mm], !1);
          fm.$reindexChildren(qm[0])
        }
        return hm.root?.enqueueChangeTree(hm), am.splice(mm, Tm, ...pm)
      }
      unshift() {
        const mm = this[jm],
          Tm = mm[Ym];
        Tm.unshift(arguments.length);
        for (let hm = 0; hm < arguments.length; hm++)(hm < 0 || arguments.length <= hm ? void 0 : arguments[hm])?.[Ym]?.setParent(this, Tm.root, hm);
        const fm = mm.deletedIndexes;
        return fm.length > 0 && fm.unshift(...new Array(arguments.length).fill(!1)), mm.tmpItems.unshift(...arguments), mm.$reindexChildren(arguments.length), mm.items.unshift(...arguments)
      }
      indexOf(mm, Tm) {
        return this.items.indexOf(mm, Tm)
      }
      lastIndexOf(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(mm, Tm)
      }
      every(mm, Tm) {
        return this.items.every(mm, Tm)
      }
      some(mm, Tm) {
        return this.items.some(mm, Tm)
      }
      forEach(mm, Tm) {
        return this.items.forEach(mm, Tm)
      }
      map(mm, Tm) {
        return this.items.map(mm, Tm)
      }
      filter(mm, Tm) {
        return this.items.filter(mm, Tm)
      }
      reduce(mm, Tm) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(mm, Tm) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(mm, Tm) {
        return this.items.find(mm, Tm)
      }
      findIndex(mm, Tm) {
        return this.items.findIndex(mm, Tm)
      }
      fill(mm, Tm, fm) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(mm, Tm, fm) {
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
        return ah
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
      includes(mm, Tm) {
        return this.items.includes(mm, Tm)
      }
      flatMap(mm, Tm) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(mm) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(mm, Tm) {
        const fm = this.items.slice();
        return mm < 0 && (mm += this.length), fm[mm] = Tm, new ah(...fm)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(mm) {
        return this.items.slice().sort(mm)
      }
      toSpliced(mm, Tm) {
        for (var fm = arguments.length, hm = new Array(fm > 2 ? fm - 2 : 0), Am = 2; Am < fm; Am++) hm[Am - 2] = arguments[Am];
        const am = this.items.slice();
        return am.splice.apply(am, arguments), am
      }
      shuffle() {
        return this.move((mm => {
          let Tm = this.items.length;
          for (; 0 != Tm;) {
            let mm = Math.floor(Math.random() * Tm);
            Tm--, [this[Tm], this[mm]] = [this[mm], this[Tm]]
          }
        }))
      }
      move(mm) {
        return this.isMovingItems = !0, mm(this), this.isMovingItems = !1, this
      } [Em](mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = this[jm] ?? this;
        return Tm || fm.deletedIndexes[mm] ? fm.items[mm] : fm.tmpItems[mm] || fm.items[mm]
      } [om](mm) {
        const Tm = this[jm] ?? this;
        Tm.items[mm] = void 0, Tm._needsCompaction = !0
      } [Vm]() {
        const mm = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, mm), this.deletedIndexes.length = 0)
      } [Km]() {
        const mm = this[jm] ?? this;
        mm._needsCompaction && (mm._needsCompaction = !1, mm.items = mm.items.filter((mm => void 0 !== mm)))
      } [Om](mm, Tm, fm) {
        const hm = this[jm] ?? this,
          Am = hm.items;
        let am = !1;
        for (let xm = 0; xm < Am.length; xm++) {
          const wm = Am[xm];
          mm.has(xm) ? fm(wm) : (am = !0, Tm(wm, xm), hm[om](xm))
        }
        am && hm[Km]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((mm => "function" === typeof mm.toJSON ? mm.toJSON() : mm))
      }
      clone(mm) {
        let Tm;
        return mm ? (Tm = new ah, Tm.push(...this.items)) : Tm = new ah(...this.map((mm => mm[Ym] ? mm.clone() : mm))), Tm
      }
    }
    JT("array", {
      constructor: ah
    });
    class xh {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(mm) {
        const Tm = this.indexByKey[mm];
        return void 0 === Tm ? void 0 : Tm
      }
      assign(mm) {
        const Tm = this.nextIndex++;
        return this.indexByKey[mm] = Tm, this.keyByIndex.set(Tm, mm), Tm
      }
      snapshot(mm, Tm) {
        (this.snapshots ??= new Map).set(mm, Tm)
      }
      forgetSnapshot(mm) {
        this.snapshots?.delete(mm)
      }
      snapshotAt(mm) {
        return this.snapshots?.get(mm)
      }
      setIndex(mm, Tm) {
        this.keyByIndex.set(mm, Tm), this.indexByKey[Tm] = mm
      }
      keyOf(mm) {
        return this.keyByIndex.get(mm)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [mm] of this.snapshots) {
            const Tm = this.keyByIndex.get(mm);
            void 0 !== Tm && (delete this.indexByKey[Tm], this.keyByIndex.delete(mm))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class wh {
      [Ym];
      [wm];
      childType;
      [qm];
      $items = new Map;
      journal = new xh;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(mm) {
        (this._stream ??= ZT()).maxPerTick = mm
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(mm) {
        (this._stream ??= ZT()).priority = mm
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[im] = Cf;
      static[Rm] = Ff;
      static COLLECTION_KIND = Lf;
      static[pm](mm, Tm, fm) {
        if (!fm || "string" === typeof mm[qm]) return !0;
        const hm = mm[Em](Tm) ?? mm.journal.snapshotAt(Tm);
        return fm.isChangeTreeVisible(hm[Ym])
      }
      static is(mm) {
        return void 0 !== mm.map
      }
      constructor(mm) {
        if (Object.defineProperty(this, Ym, {
            value: new Gf(this),
            enumerable: !1,
            writable: !0
          }), this[qm] = void 0, mm)
          if (mm instanceof Map || mm instanceof wh) mm.forEach(((mm, Tm) => this.set(Tm, mm)));
          else
            for (const Tm in mm) this.set(Tm, mm[Tm])
      }
      static initializeForDecoder() {
        const mm = Object.create(wh.prototype);
        return mm.$items = new Map, mm.journal = new xh, mm[qm] = void 0, Pf(mm), mm
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return wh
      }
      set(mm, Tm) {
        if (void 0 === Tm || null === Tm) throw new Error(`MapSchema#set('${mm}', ${Tm}): trying to set ${Tm} value on '${mm}'.`);
        "object" === typeof Tm && this[qm] && fh(Tm, this[qm], this, mm), mm = mm.toString();
        const fm = this[Ym],
          hm = void 0 !== Tm[Ym],
          am = this.journal;
        let xm, wm = am.indexOf(mm);
        if (void 0 !== wm) {
          xm = Am.REPLACE;
          const fm = this.$items.get(mm);
          if (fm === Tm) return;
          hm && (xm = Am.DELETE_AND_ADD, void 0 !== fm && fm[Ym].root?.remove(fm[Ym])), void 0 !== am.snapshotAt(wm) && am.forgetSnapshot(wm)
        } else wm = am.assign(mm), xm = Am.ADD;
        return this.$items.set(mm, Tm), xm === Am.ADD && fm.isStreamCollection ? void 0 !== fm.root && bT(this, fm.root, wm) : fm.change(wm, xm), hm && Tm[Ym].setParent(this, fm.root, wm), this
      }
      get(mm) {
        return this.$items.get(mm)
      }
      getOrInsert(mm, Tm) {
        return this.$items.has(mm) ? this.$items.get(mm) : (this.set(mm, Tm), Tm)
      }
      getOrInsertComputed(mm, Tm) {
        if (this.$items.has(mm)) return this.$items.get(mm);
        const fm = Tm(mm);
        return this.set(mm, fm), fm
      }
      delete(mm) {
        if (!this.$items.has(mm)) return !1;
        const Tm = this.journal.indexOf(mm),
          fm = this.$items.get(mm),
          hm = this[Ym];
        if (hm.isStreamCollection) {
          const Am = hm.root;
          let am = !1;
          return void 0 !== Am && (am = ST(this, Am, this[wm], Tm)), void 0 !== fm?.[Ym] && Am?.remove(fm[Ym]), this.$items.delete(mm), am || this.journal.snapshot(Tm, fm), !0
        }
        return this.journal.snapshot(Tm, fm), hm.delete(Tm), this.$items.delete(mm)
      }
      clear() {
        const mm = this[Ym];
        mm.discard(), mm.forEachChild(((Tm, fm) => {
          mm.root?.remove(Tm)
        })), this.journal.reset(), this.$items.clear(), mm.operation(Am.CLEAR)
      } [Im]() {
        const mm = this[Ym];
        if (mm.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((mm => mm?.[Im]?.())), this.$items.clear(), this.journal.reset(), mm.recycle(), this[wm] = void 0
      }
      has(mm) {
        return this.$items.has(mm)
      }
      forEach(mm) {
        this.$items.forEach(mm)
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
        this[Ym].pause()
      }
      resumeTracking() {
        this[Ym].resume()
      }
      untracked(mm) {
        return this[Ym].untracked(mm)
      }
      get isTrackingPaused() {
        return this[Ym].paused
      }
      setIndex(mm, Tm) {
        this.journal.setIndex(mm, Tm)
      }
      getIndex(mm) {
        return this.journal.keyOf(mm)
      } [Em](mm) {
        const Tm = this.journal.keyOf(mm);
        return void 0 !== Tm ? this.$items.get(Tm) : void 0
      } [om](mm) {
        const Tm = this.journal.keyOf(mm);
        void 0 !== Tm && (this.$items.delete(Tm), this.journal.keyByIndex.delete(mm))
      } [Om](mm, Tm, fm) {
        let hm = null;
        if (this.$items.forEach(((Am, am) => {
            mm.has(am) ? fm(Am) : ((hm ??= new Set).add(am), Tm(Am, am))
          })), null !== hm) {
          hm.forEach((mm => {
            this.$items.delete(mm), delete this.journal.indexByKey[mm]
          }));
          const mm = [];
          this.journal.keyByIndex.forEach(((Tm, fm) => {
            hm.has(Tm) && mm.push(fm)
          }));
          for (let Tm = 0; Tm < mm.length; Tm++) this.journal.keyByIndex.delete(mm[Tm])
        }
      } [Vm]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(mm) {
        XT(this, mm)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (mm => {
          let [Tm, fm] = mm;
          return [Tm, "function" === typeof fm.toJSON ? fm.toJSON() : fm]
        })))
      }
      clone(mm) {
        let Tm;
        return mm ? Tm = Object.assign(new wh, this) : (Tm = new wh, this.forEach(((mm, fm) => {
          mm[Ym] ? Tm.set(fm, mm.clone()) : Tm.set(fm, mm)
        }))), Tm
      }
    }
    JT("map", {
      constructor: wh
    });
    class Dh {
      [Ym];
      [wm];
      [qm];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(mm) {
        (this._stream ??= ZT()).maxPerTick = mm
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(mm) {
        (this._stream ??= ZT()).priority = mm
      }
      static[im] = rf;
      static[Rm] = Ff;
      static COLLECTION_KIND = Uf;
      static[pm](mm, Tm, fm) {
        return !fm || "string" === typeof mm[qm] || fm.isChangeTreeVisible((mm[Em](Tm) ?? mm.deletedItems[Tm])[Ym])
      }
      static is(mm) {
        return void 0 !== mm.collection
      }
      constructor(mm) {
        Object.defineProperty(this, Ym, {
          value: new Gf(this),
          enumerable: !1,
          writable: !0
        }), this[qm] = void 0, mm && mm.forEach((mm => this.add(mm)))
      }
      static initializeForDecoder() {
        const mm = Object.create(Dh.prototype);
        return mm.$items = new Map, mm.deletedItems = {}, mm.$refId = 0, mm[qm] = void 0, Pf(mm), mm
      }
      add(mm) {
        const Tm = this.$refId++,
          fm = this[Ym];
        return this.$items.set(Tm, mm), fm.isStreamCollection ? void 0 !== fm.root && bT(this, fm.root, Tm) : fm.change(Tm), void 0 !== mm[Ym] && mm[Ym].setParent(this, fm.root, Tm), Tm
      }
      at(mm) {
        const Tm = Array.from(this.$items.keys())[mm];
        return this.$items.get(Tm)
      }
      entries() {
        return this.$items.entries()
      }
      delete(mm) {
        const Tm = this.$items.entries();
        let fm, hm;
        for (;
          (hm = Tm.next()) && !hm.done;)
          if (mm === hm.value[1]) {
            fm = hm.value[0];
            break
          } if (void 0 === fm) return !1;
        const Am = this[Ym];
        if (Am.isStreamCollection) {
          const mm = Am.root,
            Tm = this.$items.get(fm);
          return void 0 !== mm && ST(this, mm, this[wm], fm), void 0 !== Tm?.[Ym] && mm?.remove(Tm[Ym]), this.deletedItems[fm] = Tm, this.$items.delete(fm)
        }
        return this.deletedItems[fm] = Am.delete(fm), this.$items.delete(fm)
      }
      clear() {
        const mm = this[Ym];
        mm.discard(), mm.forEachChild(((Tm, fm) => {
          mm.root?.remove(Tm)
        })), this.$items.clear(), mm.operation(Am.CLEAR)
      } [Im]() {
        const mm = this[Ym];
        if (mm.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((mm => mm?.[Im]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, mm.recycle(), this[wm] = void 0
      }
      has(mm) {
        return Array.from(this.$items.values()).some((Tm => Tm === mm))
      }
      forEach(mm) {
        this.$items.forEach(((Tm, fm, hm) => mm(Tm, fm, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Ym].pause()
      }
      resumeTracking() {
        this[Ym].resume()
      }
      untracked(mm) {
        return this[Ym].untracked(mm)
      }
      get isTrackingPaused() {
        return this[Ym].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(mm, Tm) {}
      getIndex(mm) {
        return mm
      } [Em](mm) {
        return this.$items.get(mm)
      } [om](mm) {
        this.$items.delete(mm)
      } [Om](mm, Tm, fm) {
        let hm = null;
        if (this.$items.forEach(((Am, am) => {
            mm.has(am) ? fm(Am) : ((hm ??= []).push(am), Tm(Am, am))
          })), null !== hm)
          for (let Am = 0; Am < hm.length; Am++) this[om](hm[Am])
      } [Vm]() {
        for (const mm in this.deletedItems) delete this.deletedItems[mm]
      }
      _dropView(mm) {
        XT(this, mm)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const mm = [];
        return this.forEach(((Tm, fm) => {
          mm.push("function" === typeof Tm.toJSON ? Tm.toJSON() : Tm)
        })), mm
      }
      clone(mm) {
        let Tm;
        return mm ? Tm = Object.assign(new Dh, this) : (Tm = new Dh, this.forEach((mm => {
          mm[Ym] ? Tm.add(mm.clone()) : Tm.add(mm)
        }))), Tm
      }
    }
    JT("collection", {
      constructor: Dh
    });
    class ih {
      [Ym];
      [wm];
      [qm];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(mm) {
        (this._stream ??= ZT()).maxPerTick = mm
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(mm) {
        (this._stream ??= ZT()).priority = mm
      }
      static[im] = rf;
      static[Rm] = Ff;
      static COLLECTION_KIND = tf;
      static[pm](mm, Tm, fm) {
        return !fm || "string" === typeof mm[qm] || fm.isVisible((mm[Em](Tm) ?? mm.deletedItems[Tm])[Ym])
      }
      static is(mm) {
        return void 0 !== mm.set
      }
      constructor(mm) {
        Object.defineProperty(this, Ym, {
          value: new Gf(this),
          enumerable: !1,
          writable: !0
        }), this[qm] = void 0, mm && mm.forEach((mm => this.add(mm)))
      }
      static initializeForDecoder() {
        const mm = Object.create(ih.prototype);
        return mm.$items = new Map, mm.deletedItems = {}, mm.$refId = 0, mm[qm] = void 0, Pf(mm), mm
      }
      add(mm) {
        if (this.has(mm)) return !1;
        const Tm = this.$refId++,
          fm = this[Ym];
        return this.$items.set(Tm, mm), fm.isStreamCollection ? void 0 !== fm.root && bT(this, fm.root, Tm) : fm.change(Tm, Am.ADD), void 0 !== mm[Ym] && mm[Ym].setParent(this, fm.root, Tm), Tm
      }
      entries() {
        return this.$items.entries()
      }
      delete(mm) {
        const Tm = this.$items.entries();
        let fm, hm;
        for (;
          (hm = Tm.next()) && !hm.done;)
          if (mm === hm.value[1]) {
            fm = hm.value[0];
            break
          } if (void 0 === fm) return !1;
        const Am = this[Ym];
        if (Am.isStreamCollection) {
          const mm = Am.root,
            Tm = this.$items.get(fm);
          return void 0 !== mm && ST(this, mm, this[wm], fm), void 0 !== Tm?.[Ym] && mm?.remove(Tm[Ym]), this.deletedItems[fm] = Tm, this.$items.delete(fm)
        }
        return this.deletedItems[fm] = Am.delete(fm), this.$items.delete(fm)
      }
      clear() {
        const mm = this[Ym];
        mm.discard(), this.$items.clear(), mm.operation(Am.CLEAR)
      } [Im]() {
        const mm = this[Ym];
        if (mm.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((mm => mm?.[Im]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, mm.recycle(), this[wm] = void 0
      }
      has(mm) {
        const Tm = this.$items.values();
        let fm, hm = !1;
        for (;
          (fm = Tm.next()) && !fm.done;)
          if (mm === fm.value) {
            hm = !0;
            break
          } return hm
      }
      forEach(mm) {
        this.$items.forEach(((Tm, fm, hm) => mm(Tm, fm, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Ym].pause()
      }
      resumeTracking() {
        this[Ym].resume()
      }
      untracked(mm) {
        return this[Ym].untracked(mm)
      }
      get isTrackingPaused() {
        return this[Ym].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(mm, Tm) {}
      getIndex(mm) {
        return mm
      } [Em](mm) {
        return this.$items.get(mm)
      } [om](mm) {
        this.$items.delete(mm)
      } [Om](mm, Tm, fm) {
        let hm = null;
        if (this.$items.forEach(((Am, am) => {
            mm.has(am) ? fm(Am) : ((hm ??= []).push(am), Tm(Am, am))
          })), null !== hm)
          for (let Am = 0; Am < hm.length; Am++) this[om](hm[Am])
      } [Vm]() {
        for (const mm in this.deletedItems) delete this.deletedItems[mm]
      }
      _dropView(mm) {
        XT(this, mm)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const mm = [];
        return this.forEach(((Tm, fm) => {
          mm.push("function" === typeof Tm.toJSON ? Tm.toJSON() : Tm)
        })), mm
      }
      clone(mm) {
        let Tm;
        return mm ? Tm = Object.assign(new ih, this) : (Tm = new ih, this.forEach((mm => {
          mm[Ym] ? Tm.add(mm.clone()) : Tm.add(mm)
        }))), Tm
      }
    }
    JT("set", {
      constructor: ih
    });
    class Rh {
      [Ym];
      [wm];
      [qm];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(mm) {
        (this._stream ??= ZT()).maxPerTick = mm
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(mm) {
        (this._stream ??= ZT()).priority = mm
      }
      static $isStream = !0;
      static[im] = rf;
      static[Rm] = Ff;
      static COLLECTION_KIND = df;
      static[pm](mm, Tm, fm) {
        if (!fm) return !0;
        const hm = mm[Em](Tm);
        return void 0 !== hm && fm.isVisible(hm[Ym])
      }
      static is(mm) {
        return mm && void 0 !== mm.stream
      }
      constructor() {
        Object.defineProperty(this, Ym, {
          value: new Gf(this),
          enumerable: !1,
          writable: !0
        }), this[qm] = void 0
      }
      static initializeForDecoder() {
        const mm = Object.create(Rh.prototype);
        return mm.$items = new Map, mm.$nextPosition = 0, mm._itemIndex = new Map, mm[qm] = void 0, Pf(mm), mm
      }
      add(mm) {
        if (this._itemIndex.has(mm)) return -1;
        const Tm = this.$nextPosition++;
        this.$items.set(Tm, mm), this._itemIndex.set(mm, Tm);
        const fm = this[Ym].root;
        return void 0 !== mm[Ym] && mm[Ym].setParent(this, fm, Tm), void 0 !== fm && bT(this, fm, Tm), Tm
      }
      remove(mm) {
        const Tm = this._itemIndex.get(mm);
        if (void 0 === Tm) return !1;
        this._itemIndex.delete(mm), this.$items.delete(Tm);
        const fm = this[Ym].root;
        return void 0 !== fm && (ST(this, fm, this[wm], Tm), void 0 !== mm[Ym] && fm.remove(mm[Ym])), !0
      }
      has(mm) {
        return this._itemIndex.has(mm)
      }
      clear() {
        const mm = this[Ym].root;
        if (void 0 !== mm) {
          ! function(mm, Tm, fm) {
            const hm = mm._stream;
            if (void 0 !== hm) {
              hm.broadcastPending.clear();
              for (const mm of hm.sentBroadcast) hm.broadcastDeletes.add(mm);
              hm.sentBroadcast.clear(), Tm.forEachActiveView((mm => {
                hm.pendingByView.get(mm.id)?.clear();
                const Tm = hm.sentByView.get(mm.id);
                if (void 0 !== Tm && Tm.size > 0) {
                  let hm = mm.changes.get(fm);
                  void 0 === hm && (hm = new Map, mm.changes.set(fm, hm));
                  for (const mm of Tm) hm.set(mm, Am.DELETE);
                  Tm.clear()
                }
              }))
            }
          }(this, mm, this[wm]);
          for (const Tm of this.$items.values()) void 0 !== Tm[Ym] && mm.remove(Tm[Ym])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(mm) {
        for (const [Tm, fm] of this.$items) mm(fm, Tm, this)
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
      setIndex(mm, Tm) {}
      getIndex(mm) {
        return mm
      } [Em](mm) {
        return this.$items.get(mm)
      } [om](mm) {
        const Tm = this.$items.get(mm);
        void 0 !== Tm && (this._itemIndex.delete(Tm), this.$items.delete(mm))
      } [Om]() {} [Vm]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const mm = [];
        return this.forEach((Tm => {
          mm.push("function" === typeof Tm?.toJSON ? Tm.toJSON() : Tm)
        })), mm
      }
      clone(mm) {
        if (mm) {
          return Object.assign(new Rh, this)
        }
        const Tm = new Rh;
        return Tm.maxPerTick = this.maxPerTick, this.forEach((mm => {
          Tm.add("function" === typeof mm?.clone ? mm.clone() : mm)
        })), Tm
      }
      _dropView(mm) {
        XT(this, mm)
      }
      _unregister() {}
    }
    JT("stream", {
      constructor: Rh
    });
    class ph {
      [nm] = !0;
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
      constructor(mm) {
        this._type = mm
      }
      default (mm) {
        return this._default = mm, this._hasDefault = !0, this
      }
      view(mm) {
        return this._view = mm ?? -1, this
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
        const mm = this._type;
        if (mm && "object" === typeof mm && void 0 !== mm.array) throw new Error(zT);
        return this._stream = !0, this
      }
      priority(mm) {
        return this._streamPriority = mm, this
      }
      deprecated() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = mm, this
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

    function Eh(mm) {
      return null != mm && !0 === mm[nm]
    }

    function oh(mm) {
      return () => new ph(mm)
    }

    function Oh(mm) {
      if (Eh(mm)) {
        const Tm = mm._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Tm?`use the type name instead: t.array("${Tm}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return mm
    }

    function Yh(mm) {
      return new ph({
        quantized: HT(mm)
      })
    }
    const qh = Object.freeze({
        string: oh("string"),
        number: oh("number"),
        boolean: oh("boolean"),
        int8: oh("int8"),
        uint8: oh("uint8"),
        int16: oh("int16"),
        uint16: oh("uint16"),
        int32: oh("int32"),
        uint32: oh("uint32"),
        int64: oh("int64"),
        uint64: oh("uint64"),
        float32: oh("float32"),
        float64: oh("float64"),
        bigint64: oh("bigint64"),
        biguint64: oh("biguint64"),
        ref: mm => new ph(mm),
        array: mm => new ph({
          array: Oh(mm)
        }),
        map: mm => new ph({
          map: Oh(mm)
        }),
        set: mm => new ph({
          set: Oh(mm)
        }),
        collection: mm => new ph({
          collection: Oh(mm)
        }),
        stream: mm => {
          const Tm = new ph({
            stream: Oh(mm)
          });
          return Tm._stream = !0, Tm
        },
        quantized: Yh,
        angle: mm => Yh({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: mm?.bits ?? 16
        })
      }),
      jh = -1;

    function Vh(mm) {
      return lT.register(mm), mm
    }

    function Ih() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jh;
      return function(Tm, fm) {
        const hm = UT.initialize(Tm.constructor);
        UT.setTag(hm, fm, mm)
      }
    }

    function Kh(mm, Tm) {
      const fm = UT.initialize(mm.constructor);
      UT.setUnreliable(fm, Tm)
    }

    function Qh(mm, Tm) {
      const fm = UT.initialize(mm.constructor);
      UT.setPatchOnly(fm, Tm)
    }

    function nh(mm, Tm) {
      const fm = UT.initialize(mm.constructor);
      UT.setFullStateOnly(fm, Tm)
    }

    function Jh(mm, Tm) {
      return function(fm, hm) {
        const Am = fm.constructor;
        if (!mm) throw new Error(`${Am.name}: @type() reference provided for "${hm}" is undefined. Make sure you don't have any circular dependencies.`);
        mm = uT(mm, `${Am.name}.${hm}`), lT.register(Am);
        const am = Object.getPrototypeOf(Am)[Symbol.metadata],
          xm = UT.initialize(Am);
        let wm = xm[hm];
        if (void 0 !== xm[wm]) {
          if (xm[wm].deprecated) return;
          if (void 0 !== xm[wm].type) {
            const mm = new Error(`@colyseus/schema: Duplicate '${hm}' definition on '${Am.name}'.\nCheck @type() annotation`);
            throw new Error(`${mm.message} ${mm.stack.split("\n")[4].trim()}`)
          }
        } else wm = xm[Zm] ?? (am && am[Zm]) ?? -1, wm++;
        if (Tm && Tm.manual) UT.addField(xm, wm, hm, mm, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: Tm,
            childType: fm
          } = MT(mm);
          UT.addField(xm, wm, hm, mm, zh(hm, wm, fm, Tm))
        }
        xm[Jm][hm] && Object.defineProperty(fm, hm, xm[Jm][hm]), ("string" === typeof mm || yT(mm)) && (xm[zm] || Object.defineProperty(xm, zm, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), xm[zm][wm] = "string" === typeof mm ? fT[mm] : sT(mm.quantized))
      }
    }
    const ch = {
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

    function zh(mm, Tm, fm, hm) {
      let am;
      return am = hm ? function(mm, Tm, fm, hm) {
        const am = hm.constructor === ah,
          xm = hm.constructor === wh;
        return function(mm) {
          const hm = this[Qm],
            wm = hm[Tm];
          if (mm !== wm) {
            if (void 0 !== mm && null !== mm) {
              if (!am || mm instanceof ah)
                if (!xm || mm instanceof wh) mm[qm] = fm;
                else {
                  const Tm = new wh;
                  if (Tm[qm] = fm, mm instanceof Map) mm.forEach(((mm, fm) => Tm.set(fm, mm)));
                  else
                    for (const fm in mm) Tm.set(fm, mm[fm]);
                  mm = Tm
                }
              else {
                const Tm = new ah;
                Tm[qm] = fm, Tm.push(...mm), mm = Tm
              }
              const hm = this[Ym],
                im = this.constructor;
              void 0 !== wm && null !== wm && wm[Ym] ? (hm.root?.remove(wm[Ym]), im[Dm](hm, Tm, Am.DELETE_AND_ADD)) : im[Dm](hm, Tm, Am.ADD), mm[Ym]?.setParent(this, hm.root, Tm)
            } else void 0 !== wm && null !== wm && this[Ym].delete(Tm);
            hm[Tm] = mm
          }
        }
      }(0, Tm, fm, hm) : "string" === typeof fm ? function(mm, Tm, fm) {
        const hm = ch[fm],
          am = "string" === fm,
          xm = "boolean" === fm;
        return function(fm) {
          const wm = this[Qm],
            im = wm[Tm];
          if (fm !== im) {
            if (void 0 !== fm && null !== fm) {
              if (!xm && void 0 !== hm && typeof fm !== hm && (!am || null !== fm)) {
                const Tm = fm && fm.constructor ? ` (${fm.constructor.name})` : "";
                throw new Th(`a '${hm}' was expected, but '${JSON.stringify(fm)}'${Tm} was provided in ${this.constructor.name}#${mm}`)
              }
              this.constructor[Dm](this[Ym], Tm, Am.ADD)
            } else void 0 !== im && null !== im && this[Ym].delete(Tm);
            wm[Tm] = fm
          }
        }
      }(mm, Tm, fm) : yT(fm) ? function(mm, Tm, fm) {
        return function(hm) {
          const am = this[Qm],
            xm = am[Tm];
          if (void 0 !== hm && null !== hm) {
            if ("number" !== typeof hm) throw new Th(`a 'number' was expected, but '${JSON.stringify(hm)}' was provided in ${this.constructor.name}#${mm}`);
            if ((hm = rT(fm, CT(fm, hm))) === xm) return;
            this.constructor[Dm](this[Ym], Tm, Am.ADD)
          } else {
            if (hm === xm) return;
            void 0 !== xm && null !== xm && this[Ym].delete(Tm)
          }
          am[Tm] = hm
        }
      }(mm, Tm, fm.quantized) : function(mm, Tm, fm) {
        return function(hm) {
          const am = this[Qm],
            xm = am[Tm];
          if (hm !== xm) {
            if (void 0 !== hm && null !== hm) {
              fh(hm, fm, this, mm);
              const am = this[Ym],
                wm = this.constructor;
              void 0 !== xm && null !== xm && xm[Ym] ? (am.root?.remove(xm[Ym]), wm[Dm](am, Tm, Am.DELETE_AND_ADD)) : wm[Dm](am, Tm, Am.ADD), hm[Ym]?.setParent(this, am.root, Tm)
            } else void 0 !== xm && null !== xm && this[Ym].delete(Tm);
            am[Tm] = hm
          }
        }
      }(mm, Tm, fm), {
        get: function() {
          return this[Qm][Tm]
        },
        set: am,
        enumerable: !0,
        configurable: !0
      }
    }

    function Zh() {
      let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(Tm, fm) {
        const hm = UT.initialize(Tm.constructor);
        UT.setDeprecated(hm, fm), mm && (hm[Jm] ??= {}, hm[Jm][fm] = {
          get: function() {
            throw new Error(`${fm} is deprecated.`)
          },
          set: function(mm) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(Tm, fm, hm[Jm][fm]))
      }
    }
    let kh = !1;

    function bh(mm, Tm, fm) {
      kh || (kh = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let hm in Tm) Jh(Tm[hm], fm)(mm.prototype, hm);
      return mm
    }

    function Sh(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nh;
      if (null == mm || "object" !== typeof mm) throw new Error(`schema(): first argument must be a fields object (got ${typeof mm}).`);
      const hm = {},
        Am = {},
        am = {},
        xm = {},
        wm = (mm, Tm) => {
          if (Tm.hasDefault)((mm, Tm) => {
            "function" === typeof Tm ? xm[mm] = Tm : Tm && "function" === typeof Tm.clone ? xm[mm] = () => Tm.clone() : am[mm] = Tm
          })(mm, Tm.default);
          else if (!Tm.optional) {
            const fm = function(mm) {
              if (mm && "object" === typeof mm) {
                if (void 0 !== mm.array) return () => new ah;
                if (void 0 !== mm.map) return () => new wh;
                if (void 0 !== mm.set) return () => new ih;
                if (void 0 !== mm.collection) return () => new Dh;
                if (void 0 !== mm.stream) return () => new Rh
              } else if ("function" === typeof mm && Nh.is(mm) && (!mm.prototype.initialize || 0 === mm.prototype.initialize.length)) return () => new mm
            }(Tm.type);
            fm && (xm[mm] = fm)
          }
        },
        Dm = {},
        im = [],
        Rm = [],
        pm = {},
        Em = [],
        om = [],
        Om = {},
        Ym = [];
      for (const Qm in mm) {
        const fm = mm[Qm],
          am = `schema(${Tm?`'${Tm}'`:""}): field '${Qm}'`;
        if (Eh(fm)) {
          const mm = fm.toDefinition();
          if (mm.noSync) {
            if (void 0 !== mm.view || mm.unreliable || mm.patchOnly || mm.fullStateOnly || mm.stream) throw new Error(`${am} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            wm(Qm, mm);
            continue
          }
          if (mm.patchOnly && mm.fullStateOnly) throw new Error(`${am} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const Tm = uT(mm.type, am);
          if ("function" === typeof Tm && !Nh.is(Tm)) throw new Error(`${am} is a synced ref to non-Schema class '${Tm.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          hm[Qm] = Tm, void 0 !== mm.view && (Dm[Qm] = mm.view), mm.unreliable && im.push(Qm), mm.patchOnly && Rm.push(Qm), mm.deprecated && (pm[Qm] = mm.deprecatedThrows), mm.fullStateOnly && Em.push(Qm), mm.stream && om.push(Qm), void 0 !== mm.streamPriority && (Om[Qm] = mm.streamPriority), mm.optional && Ym.push(Qm), wm(Qm, mm)
        } else {
          if ("function" !== typeof fm) throw new Error(`${am} must be a t.* builder, Schema subclass, or method (got ${typeof fm}).`);
          Nh.is(fm) ? (hm[Qm] = fm, fm.prototype.initialize && 0 !== fm.prototype.initialize.length || (xm[Qm] = () => new fm)) : Am[Qm] = fm
        }
      }
      const qm = mm => {
          for (const Tm in am) mm[Tm] = am[Tm];
          for (const Tm in xm) mm[Tm] = xm[Tm]()
        },
        jm = () => {
          const mm = {};
          return qm(mm), mm
        },
        Vm = "function" === typeof Am.initialize,
        Im = Am.initialize ?? fm._initialize,
        Km = class extends fm {
          constructor() {
            for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
            const Am = Tm[0];
            void 0 === Am ? (super(), qm(this)) : super(Object.assign(jm(), Vm ? (mm => {
              const Tm = Object.keys(hm),
                fm = {};
              for (const hm in mm) Tm.includes(hm) || (fm[hm] = mm[hm]);
              return fm
            })(Am) : Am)), Im && new.target === Km && Im.apply(this, Tm)
          }
        };
      Tm && Object.defineProperty(Km, "name", {
        value: Tm
      }), UT.setFields(Km, hm), Km._getDefaultValues = jm, Km._initialize = Im, Object.assign(Km.prototype, Am);
      for (const Qm in Dm) Ih(Dm[Qm])(Km.prototype, Qm);
      for (const Qm of im) Kh(Km.prototype, Qm);
      for (const Qm of Rm) Qh(Km.prototype, Qm);
      for (const Qm in pm) Zh(pm[Qm])(Km.prototype, Qm);
      if (Em.length > 0 || om.length > 0) {
        const mm = Km[Symbol.metadata];
        for (const Tm of Em) UT.setFullStateOnly(mm, Tm);
        for (const Tm of om) UT.setStream(mm, Tm);
        for (const Tm in Om) UT.setStreamPriority(mm, Tm, Om[Tm])
      }
      if (Ym.length > 0) {
        const mm = Km[Symbol.metadata];
        for (const Tm of Ym) mm[mm[Tm]].optional = !0
      }
      return Km.extend = (mm, Tm) => Sh(mm, Tm, Km), Km
    }

    function eh(mm) {
      const Tm = mm[Ym].root,
        fm = {
          ops: {},
          refs: []
        };
      let hm = Tm.changes.next;
      for (; hm;) {
        const mm = hm.changeTree;
        void 0 !== mm ? (fm.refs.push(`refId#${mm.ref[wm]}`), mm.forEach(((mm, Tm) => {
          if (mm < 0 || !Tm) return;
          const hm = Am[Tm];
          fm.ops[hm] || (fm.ops[hm] = 0), fm.ops[hm]++
        })), hm = hm.next) : hm = hm.next
      }
      return fm
    }
    class Nh {
      static[im] = yf;
      static[Rm] = Wf;
      [wm];
      [Qm];
      static initialize(mm) {
        Object.defineProperty(mm, Ym, {
          value: new Gf(mm),
          enumerable: !1,
          writable: !0
        }), mm[Qm] = []
      }
      static initializeForDecoder() {
        const mm = Object.create(this.prototype);
        return Pf(mm), mm[Qm] = [], mm
      }
      static reset(mm) {
        const Tm = mm?.[Ym];
        if (void 0 === Tm || "function" !== typeof Tm.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== Tm.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${mm.constructor.name}) with multiple parents.`);
        mm[Im]()
      } [Im]() {
        const mm = this.constructor[Symbol.metadata],
          Tm = mm?.[km] ?? [],
          fm = this[Qm];
        for (let hm = 0; hm < Tm.length; hm++) {
          const mm = fm[Tm[hm]];
          mm?.[Im]?.()
        }
        this[Ym].recycle(), this[wm] = void 0
      }
      static is(mm) {
        const Tm = mm[Symbol.metadata];
        return "object" === typeof Tm && null !== Tm
      }
      static isSchema(mm) {
        return "function" === typeof mm?.assign
      }
      static[Dm](mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Am.ADD;
        mm.change(Tm, fm)
      }
      static[pm](mm, Tm, fm) {
        const hm = mm.constructor[Symbol.metadata],
          Am = hm[Tm]?.tag;
        return void 0 === fm ? void 0 === Am : void 0 === Am || (Am === jh ? fm.isChangeTreeVisible(mm[Ym]) : fm.hasTagOnTree(mm[Ym], Am))
      }
      constructor(mm) {
        Nh.initialize(this), mm && Nh.assignProps(this, mm)
      }
      assign(mm) {
        return Nh.assignProps(this, mm), this
      }
      static assignProps(mm, Tm) {
        const fm = mm.constructor[Symbol.metadata];
        if (fm && void 0 !== fm[Zm])
          for (let Am = 0; Am <= fm[Zm]; Am++) {
            const hm = fm[Am];
            if (!hm) continue;
            const am = Tm[hm.name];
            void 0 !== am && (mm[hm.name] = am)
          }
        const hm = Object.keys(Tm);
        for (let Am = 0; Am < hm.length; Am++) {
          const am = hm[Am];
          fm && void 0 !== fm[am] || (mm[am] = Tm[am])
        }
      }
      restore(mm) {
        const Tm = this.constructor[Symbol.metadata];
        for (const fm in Tm) {
          const hm = Tm[fm],
            Am = hm.name,
            am = hm.type,
            xm = mm[Am];
          if (void 0 !== xm && null !== xm)
            if ("string" === typeof am) this[Am] = xm;
            else if (Nh.is(am)) {
            const mm = new am;
            mm.restore(xm), this[Am] = mm
          } else if ("object" === typeof am) {
            const mm = Object.keys(am)[0],
              Tm = am[mm];
            if ("map" === mm) {
              const mm = this[Am];
              for (const fm in xm)
                if (Nh.is(Tm)) {
                  const hm = new Tm;
                  hm.restore(xm[fm]), mm.set(fm, hm)
                } else mm.set(fm, xm[fm])
            } else if ("array" === mm) {
              const mm = this[Am];
              for (let fm = 0; fm < xm.length; fm++)
                if (Nh.is(Tm)) {
                  const hm = new Tm;
                  hm.restore(xm[fm]), mm.push(hm)
                } else mm.push(xm[fm])
            }
          }
        }
        return this
      }
      setDirty(mm, Tm) {
        const fm = this.constructor[Symbol.metadata];
        this[Ym].change(fm[fm[mm]].index, Tm)
      }
      pauseTracking() {
        this[Ym].pause()
      }
      resumeTracking() {
        this[Ym].resume()
      }
      untracked(mm) {
        return this[Ym].untracked(mm)
      }
      get isTrackingPaused() {
        return this[Ym].paused
      }
      clone() {
        const mm = Object.create(this.constructor.prototype);
        Nh.initialize(mm);
        const Tm = this.constructor[Symbol.metadata];
        for (const fm in Tm) {
          const hm = Tm[fm].name;
          "object" === typeof this[hm] && "function" === typeof this[hm]?.clone ? mm[hm] = this[hm].clone() : mm[hm] = this[hm]
        }
        return mm
      }
      toJSON() {
        const mm = {},
          Tm = this.constructor[Symbol.metadata];
        for (const fm in Tm) {
          const hm = Tm[fm],
            Am = hm.name;
          hm.deprecated || null === this[Am] || "undefined" === typeof this[Am] || (mm[Am] = "function" === typeof this[Am].toJSON ? this[Am].toJSON() : this[Am])
        }
        return mm
      }
      discardAllChanges() {
        this[Ym].discardAll()
      } [Em](mm) {
        return this[this.constructor[Symbol.metadata][mm].name]
      } [om](mm) {
        this[this.constructor[Symbol.metadata][mm].name] = void 0
      }
      static debugRefIds(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 ? arguments[3] : void 0,
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const am = Tm ? ` - ${JSON.stringify(mm.toJSON())}` : "",
          xm = mm[Ym],
          Dm = mm[wm],
          im = hm ? hm.root.refCount[Dm] : xm.refCount,
          Rm = im > 1 ? ` [\xd7${im}]` : "";
        let pm = `${function(mm){return new Array(mm).fill(0).map(((Tm,fm)=>fm===mm-1?"\u2514\u2500 ":"   ")).join("")}(fm)}${Am}${mm.constructor.name} (refId: ${Dm})${Rm}${am}\n`;
        return xm.forEachChild(((Am, am) => {
          let xm = am;
          "number" === typeof am && mm.$indexes && (xm = mm.$indexes.get(am) ?? am);
          const wm = void 0 !== mm.forEach && void 0 !== xm ? `["${xm}"]: ` : "";
          pm += this.debugRefIds(Am.ref, Tm, fm + 1, hm, wm)
        })), pm
      }
      static debugRefIdEncodingOrder(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const fm = [],
          hm = mm[Ym];
        if ("changes" === Tm) {
          let mm = hm.root.changes?.next;
          for (; mm;) mm.changeTree && fm.push(mm.changeTree.ref[wm]), mm = mm.next;
          return fm
        }
        const Am = "allFilteredChanges" === Tm,
          am = new Set,
          xm = mm => {
            am.has(mm) || (am.add(mm), mm.isFiltered === Am && fm.push(mm.ref[wm]), mm.forEachChild(((mm, Tm) => xm(mm))))
          };
        return xm(hm), fm
      }
      static debugRefIdsFromDecoder(mm) {
        return this.debugRefIds(mm.state, !1, 0, mm)
      }
      static debugChanges(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = mm[Ym],
          hm = Tm ? "allChanges" : "changes";
        let am = `${mm.constructor.name} (${mm[wm]}) -> .${hm}:\n`;
        return Tm ? fm.forEachLive((mm => {
          am += `- [${mm}]: ADD (${JSON.stringify(fm.getValue(Number(mm),!0))})\n`
        })) : fm.forEach(((mm, Tm) => {
          mm < 0 || !Tm || (am += `- [${mm}]: ${Am[Tm]} (${JSON.stringify(fm.getValue(Number(mm),!1))})\n`)
        })), am
      }
    }
    am(Nh);
    const Gh = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Xh {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const mm = {};
        for (const Tm in this.changeTrees) mm[Tm] = this.changeTrees[Tm].refCount;
        return mm
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
      enqueueFilterRefresh(mm) {
        this.types.hasFilters && (mm.flags & ef || (mm.flags |= ef, this.pendingFilterRefresh.push(mm)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(mm) {
        this._freeViewIds.push(mm)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(mm) {
        this.activeViews.set(mm.id, new WeakRef(mm))
      }
      unregisterView(mm) {
        this.activeViews.delete(mm.id);
        const Tm = mm.id;
        for (const fm of this.streamTrees) fm._dropView(Tm)
      }
      forEachActiveView(mm) {
        for (const [Tm, fm] of this.activeViews) {
          const hm = fm.deref();
          if (void 0 !== hm) mm(hm);
          else {
            this.activeViews.delete(Tm);
            for (const mm of this.streamTrees) mm._dropView(Tm)
          }
        }
      }
      registerStream(mm) {
        this.streamTrees.add(mm)
      }
      unregisterStream(mm) {
        this.streamTrees.delete(mm)
      }
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = mm, this.nextUniqueId = Tm
      }
      add(mm) {
        const Tm = mm.ref;
        void 0 === Tm[wm] && (Gh.value = this.nextUniqueId++, Object.defineProperty(Tm, wm, Gh));
        const fm = Tm[wm],
          hm = void 0 === this.changeTrees[fm];
        hm && (this.changeTrees[fm] = mm), mm.needsRestage && (mm.needsRestage = !1, mm.forEachLiveWithCtx(mm, hf));
        const Am = hm ? 0 : mm.refCount;
        return mm.refCount = Am + 1, Am > 0 && this.enqueueFilterRefresh(mm), hm
      }
      remove(mm) {
        const Tm = mm.refCount - 1;
        if (Tm <= 0) {
          if (mm.root = void 0, delete this.changeTrees[mm.ref[wm]], mm.isStreamCollection) {
            const Tm = mm.ref;
            Tm._unregister?.(), this.unregisterStream(Tm)
          }
          this.removeFromQueue(mm), this.removeFromUnreliableQueue(mm), mm.refCount = 0, mm.needsRestage = !0, mm.forEachChild(((Tm, fm) => {
            Tm.removeParent(mm.ref) && (void 0 === Tm.parentRef || Tm.refCount > 0 ? this.remove(Tm) : this.moveNextToParent(Tm))
          }))
        } else mm.refCount = Tm, this.enqueueFilterRefresh(mm), this.recursivelyMoveNextToParent(mm);
        return Tm
      }
      recursivelyMoveNextToParent(mm) {
        this.moveNextToParent(mm), mm.forEachChild(((mm, Tm) => this.recursivelyMoveNextToParent(mm)))
      }
      moveNextToParent(mm) {
        mm.changesNode && this._moveNextToParentInList(this.changes, mm, mm.changesNode, "changesNode"), mm.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, mm, mm.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(mm, Tm, fm, hm) {
        const Am = Tm.parent;
        if (!Am || !Am[Ym]) return;
        const am = Am[Ym][hm];
        am && am !== fm && (fm.position > am.position || (fm.prev ? fm.prev.next = fm.next : mm.next = fm.next, fm.next ? fm.next.prev = fm.prev : mm.tail = fm.prev, fm.prev = mm.tail, fm.next = void 0, mm.tail.next = fm, mm.tail = fm, fm.position = mm.nextPosition++))
      }
      enqueueChangeTree(mm) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm.changesNode) || (mm.changesNode = this._appendToList(this.changes, mm))
      }
      enqueueUnreliable(mm) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm.unreliableChangesNode) || (mm.unreliableChangesNode = this._appendToList(this.unreliableChanges, mm))
      }
      _appendToList(mm, Tm) {
        const fm = this._nodePool;
        let hm;
        return fm.length > 0 ? (hm = fm.pop(), hm.changeTree = Tm, hm.next = void 0, hm.prev = void 0) : hm = {
          changeTree: Tm,
          next: void 0,
          prev: void 0,
          position: 0
        }, mm.next ? (hm.prev = mm.tail, mm.tail.next = hm, mm.tail = hm) : (mm.nextPosition = 0, mm.next = hm, mm.tail = hm), hm.position = mm.nextPosition++, hm
      }
      releaseNode(mm) {
        mm.changeTree = void 0, mm.prev = void 0, mm.next = void 0, this._nodePool.push(mm)
      }
      removeFromQueue(mm) {
        return this._removeNode(this.changes, mm, mm.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(mm) {
        return this._removeNode(this.unreliableChanges, mm, mm.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(mm, Tm, fm, hm) {
        return !(!fm || fm.changeTree !== Tm) && (fm.prev ? fm.prev.next = fm.next : mm.next = fm.next, fm.next ? fm.next.prev = fm.prev : mm.tail = fm.prev, Tm[hm] = void 0, this.releaseNode(fm), !0)
      }
    }

    function Ph(mm, Tm) {
      if (-1 === Tm || Tm >= mm.length) return !1;
      const fm = mm.length - 1;
      for (let hm = Tm; hm < fm; hm++) mm[hm] = mm[hm + 1];
      return mm.length = fm, !0
    }

    function Hh(mm, Tm, fm) {
      const hm = ~fm,
        Am = mm.changeTrees;
      for (const am in Am) {
        const mm = Am[am],
          fm = mm.visibleViews;
        void 0 !== fm && Tm < fm.length && (fm[Tm] &= hm);
        const xm = mm.subscribedViews;
        void 0 !== xm && Tm < xm.length && (xm[Tm] &= hm);
        const wm = mm.tagViews;
        void 0 !== wm && wm.forEach((mm => {
          Tm < mm.length && (mm[Tm] &= hm)
        }))
      }
    }
    const yh = new FinalizationRegistry((mm => {
      let {
        root: Tm,
        id: fm,
        slot: hm,
        bit: Am
      } = mm;
      Hh(Tm, hm, Am), Tm.activeViews.delete(fm);
      for (const am of Tm.streamTrees) am._dropView(fm);
      Tm.releaseViewId(fm)
    }));

    function Ch(mm) {
      if (void 0 === mm) return "undefined";
      if (null === mm) return "null";
      const Tm = typeof mm;
      return "string" === Tm ? JSON.stringify(mm.length > 30 ? `${mm.slice(0,30)}\u2026` : mm) : "object" !== Tm && "function" !== Tm ? `${Tm} ${String(mm)}` : Array.isArray(mm) ? `Array(${mm.length})` : mm.constructor?.name ?? "Object"
    }
    class rh {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = mm, mm && (this.items = [])
      }
      _bindRoot(mm) {
        void 0 === this._root && (this._root = mm, this.id = mm.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), mm.registerView(this), yh.register(this, {
          root: mm,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), Hh(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), yh.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(mm) {
        const Tm = mm.visibleViews,
          fm = this._slot;
        return void 0 !== Tm && fm < Tm.length && 0 !== (Tm[fm] & this._bit)
      }
      markVisible(mm) {
        const Tm = this._slot;
        let fm = mm.visibleViews;
        for (void 0 === fm && (fm = mm.visibleViews = []); fm.length <= Tm;) fm.push(0);
        fm[Tm] |= this._bit
      }
      unmarkVisible(mm) {
        const Tm = mm.visibleViews;
        if (void 0 === Tm) return;
        const fm = this._slot;
        fm < Tm.length && (Tm[fm] &= ~this._bit)
      }
      isSubscribed(mm) {
        const Tm = mm.subscribedViews,
          fm = this._slot;
        return void 0 !== Tm && fm < Tm.length && 0 !== (Tm[fm] & this._bit)
      }
      _setSubscribed(mm) {
        const Tm = this._slot;
        let fm = mm.subscribedViews;
        for (void 0 === fm && (fm = mm.subscribedViews = []); fm.length <= Tm;) fm.push(0);
        fm[Tm] |= this._bit
      }
      _clearSubscribed(mm) {
        const Tm = mm.subscribedViews;
        if (void 0 === Tm) return;
        const fm = this._slot;
        fm < Tm.length && (Tm[fm] &= ~this._bit)
      }
      hasTagOnTree(mm, Tm) {
        const fm = mm.tagViews;
        if (void 0 === fm) return !1;
        const hm = this._slot,
          Am = this._bit;
        for (let am = Tm; 0 !== am; am &= am - 1) {
          const mm = fm.get(am & -am);
          if (void 0 !== mm && hm < mm.length && 0 !== (mm[hm] & Am)) return !0
        }
        return !1
      }
      addTag(mm, Tm) {
        if (Tm === jh) return;
        let fm = mm.tagViews;
        void 0 === fm && (fm = mm.tagViews = new Map);
        const hm = this._slot,
          Am = this._bit;
        for (let am = Tm; am > 0; am &= am - 1) {
          const mm = am & -am;
          let Tm = fm.get(mm);
          for (void 0 === Tm && (Tm = [], fm.set(mm, Tm)); Tm.length <= hm;) Tm.push(0);
          Tm[hm] |= Am
        }
      }
      removeTag(mm, Tm) {
        if (Tm === jh) return;
        const fm = mm.tagViews;
        if (void 0 === fm) return;
        const hm = this._slot,
          Am = ~this._bit;
        for (let am = Tm; am > 0; am &= am - 1) {
          const mm = fm.get(am & -am);
          void 0 !== mm && hm < mm.length && (mm[hm] &= Am)
        }
      }
      removeAllTagsOnTree(mm) {
        const Tm = mm.tagViews;
        if (void 0 === Tm) return;
        const fm = this._slot,
          hm = ~this._bit;
        Tm.forEach((mm => {
          fm < mm.length && (mm[fm] &= hm)
        }))
      }
      add(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jh,
          fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(mm, Tm, fm, !1)
      }
      _addImmediate(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jh;
        this._add(mm, Tm, !0, !0)
      }
      _add(mm, Tm, fm, hm) {
        const am = mm?.[Ym];
        if (!am) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${Ch(mm)}`), !1;
        const xm = am.parent;
        if (!xm && 0 !== mm[wm]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${am.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== am.root && this._bindRoot(am.root);
        const Dm = xm?.[Ym];
        if (!hm && Dm?.isStreamCollection) return GT(xm, this.id, am.parentIndex), !0;
        const im = mm.constructor[Symbol.metadata],
          Rm = this.isVisible(am);
        if (!this.iterable || !fm || Rm && -1 !== this.items.indexOf(mm) || this.items.push(mm), this.markVisible(am), fm && xm && this.addParentOf(am, Tm), !hm && am.isStreamCollection) return !0;
        if (Tm === jh && am.isNew) return this._markSubtreeVisible(am, Tm), !1;
        let pm = this.changes.get(mm[wm]);
        void 0 === pm && (pm = new Map, this.changes.set(mm[wm], pm));
        let Em = !1;
        const om = am.encDescriptor.tags;
        if (am.forEachChild(((mm, fm) => {
            const hm = om[fm];
            if (void 0 !== hm) {
              if (!(hm === jh || Tm !== jh && 0 !== (hm & Tm))) return
            }
            this.add(mm.ref, Tm, !1) && (Em = !0)
          })), Tm !== jh) {
          this.addTag(am, Tm);
          const mm = im?.[Sm];
          if (void 0 !== mm)
            for (let fm = Tm; fm > 0; fm &= fm - 1) mm[fm & -fm]?.forEach((mm => {
              am.getChange(mm) !== Am.DELETE && pm.set(mm, Am.ADD)
            }))
        }
        if ((Tm === jh || !Rm) && (!am.isNew || Em))
          if (am.isArray && "string" !== typeof am.refTarget[qm]) am.refTarget.items.length > 0 && (pm.set(-1, Am.ADD), Em = !0);
          else {
            const mm = am.encDescriptor.tags;
            am.forEachLive((fm => {
              const hm = mm[fm];
              (void 0 === hm || hm === jh || Tm !== jh && 0 !== (hm & Tm)) && (pm.set(fm, Am.ADD), Em = !0)
            }))
          } return Em
      }
      _markSubtreeVisible(mm, Tm) {
        const fm = mm.encDescriptor.tags;
        mm.forEachChild(((mm, hm) => {
          const Am = fm[hm];
          if (void 0 !== Am) {
            if (!(Am === jh || Tm !== jh && 0 !== (Am & Tm))) return
          }
          mm.isNew ? (this.markVisible(mm), this._markSubtreeVisible(mm, Tm)) : this._add(mm.ref, Tm, !1, !1)
        }))
      }
      addParentOf(mm, Tm) {
        const fm = mm.parent[Ym],
          hm = mm.parentIndex;
        this.isVisible(fm) || this.markVisible(fm);
        const am = fm.parent?.[Ym];
        if (am && this.addParentOf(fm, Tm), fm.hasFilteredFields && fm.getChange(hm) !== Am.DELETE) {
          let am = this.changes.get(fm.ref[wm]);
          void 0 === am && (am = new Map, this.changes.set(fm.ref[wm], am));
          const xm = fm.encDescriptor.tags[hm];
          void 0 !== xm && xm !== jh && 0 !== (xm & Tm) && this.addTag(fm, Tm), am.set(fm.isArray ? mm : hm, Am.ADD)
        }
      }
      _touchAncestorsOf(mm) {
        let Tm = mm.parent?.[Ym];
        if (void 0 === Tm) return;
        const fm = [];
        for (; void 0 !== Tm;) {
          if (Tm.hasFilteredFields) {
            const mm = Tm.ref[wm];
            if (this.changes.has(mm)) break;
            fm.push(Tm)
          }
          Tm = Tm.parent?.[Ym]
        }
        for (let hm = fm.length - 1; hm >= 0; hm--) this.changes.set(fm[hm].ref[wm], new Map)
      }
      remove(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jh,
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = mm?.[Ym];
        if (!hm) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${Ch(mm)}`), this;
        const am = hm.parent?.[Ym];
        if (am?.isStreamCollection) return this.unmarkVisible(hm), this.iterable && !fm && Ph(this.items, this.items.indexOf(mm)),
          function(mm, Tm, fm, hm, am) {
            const xm = mm._stream;
            if (void 0 === xm) return !1;
            const wm = xm.pendingByView.get(Tm);
            if (wm?.has(hm)) return wm.delete(hm), !1;
            const Dm = xm.sentByView.get(Tm);
            if (Dm?.has(hm)) {
              Dm.delete(hm);
              let mm = am.get(fm);
              return void 0 === mm && (mm = new Map, am.set(fm, mm)), mm.set(hm, Am.DELETE), !0
            }
          }(hm.parent, this.id, hm.parent[wm], hm.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(hm), this;
        if (hm.isStreamCollection) {
          this.unmarkVisible(hm), this.iterable && !fm && Ph(this.items, this.items.indexOf(mm));
          const Tm = hm.ref,
            am = Tm._stream;
          if (void 0 !== am) {
            am.pendingByView.get(this.id)?.clear();
            const mm = am.sentByView.get(this.id);
            if (void 0 !== mm && mm.size > 0) {
              const fm = Tm[wm];
              let hm = this.changes.get(fm);
              void 0 === hm && (hm = new Map, this.changes.set(fm, hm));
              for (const Tm of mm) hm.set(Tm, Am.DELETE);
              mm.clear()
            }
          }
          return this
        }
        this.unmarkVisible(hm), this.iterable && !fm && Ph(this.items, this.items.indexOf(mm));
        const xm = hm.ref,
          Dm = xm.constructor[Symbol.metadata],
          im = xm[wm];
        this._touchAncestorsOf(hm);
        let Rm = this.changes.get(im);
        if (void 0 === Rm && (Rm = new Map, this.changes.set(im, Rm)), Tm === jh) {
          const mm = hm.parent;
          if (mm && !UT.isValidInstance(mm) && hm.isFiltered) {
            const Tm = am.isArray ? hm : hm.parentIndex,
              fm = mm[wm];
            let xm = this.changes.get(fm);
            void 0 === xm ? (xm = new Map, this.changes.set(fm, xm)) : xm.get(Tm) === Am.ADD && this._dropPendingEntries(hm), xm.set(Tm, Am.DELETE), this._recursiveDeleteVisibleChangeTree(hm)
          } else Dm?.[bm]?.forEach((mm => this._removeViewField(hm, Rm, mm)))
        } else {
          const mm = Dm?.[Sm];
          if (void 0 !== mm)
            for (let fm = Tm; fm > 0; fm &= fm - 1) mm[fm & -fm]?.forEach((mm => this._removeViewField(hm, Rm, mm)))
        }
        return void 0 === Tm ? this.removeAllTagsOnTree(hm) : this.removeTag(hm, Tm), this
      }
      has(mm) {
        return this.isVisible(mm[Ym])
      }
      hasTag(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jh;
        return this.hasTagOnTree(mm[Ym], Tm)
      }
      subscribe(mm, Tm) {
        const fm = mm?.[Ym];
        if (!fm) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${Ch(mm)}`), this;
        if (void 0 === this._root && void 0 !== fm.root && this._bindRoot(fm.root), void 0 !== Tm)
          if (fm.isStreamCollection) {
            const fm = kT(mm);
            null === Tm ? fm.priorityByView?.delete(this.id) : (fm.priorityByView ??= new Map).set(this.id, Tm)
          } else {
            const Tm = mm?.constructor?.name ?? "collection",
              hm = fm.parent;
            if (void 0 === hm) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Tm} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const mm = hm?.constructor?.[Symbol.metadata]?.[fm.parentIndex]?.name,
                Am = mm ? `${hm.constructor.name}#${mm}` : Tm;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Am} is a ${Tm}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(fm)) return this;
        const hm = void 0 !== fm.parent && !this.isVisible(fm);
        if (hm ? (this.addParentOf(fm, jh), this._add(mm, jh, !1, !1)) : this.markVisible(fm), this._setSubscribed(fm), fm.isStreamCollection) {
          const Tm = mm;
          fm.forEachChild(((mm, fm) => {
            GT(Tm, this.id, fm)
          }))
        } else hm || fm.forEachChild((mm => {
          this.markVisible(mm)
        }));
        return this
      }
      unsubscribe(mm) {
        const Tm = mm?.[Ym];
        if (!Tm) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${Ch(mm)}`), this;
        if (!this.isSubscribed(Tm)) return this;
        this._clearSubscribed(Tm);
        const fm = Tm.ref[wm];
        if (Tm.isStreamCollection) {
          const Tm = mm._stream;
          if (void 0 !== Tm) {
            Tm.pendingByView.get(this.id)?.clear();
            const mm = Tm.sentByView.get(this.id);
            if (void 0 !== mm && mm.size > 0) {
              let Tm = this.changes.get(fm);
              void 0 === Tm && (Tm = new Map, this.changes.set(fm, Tm));
              for (const fm of mm) Tm.set(fm, Am.DELETE);
              mm.clear()
            }
          }
        } else {
          const mm = Tm.isArray;
          let hm = this.changes.get(fm);
          Tm.forEachChild(((Tm, am) => {
            void 0 === hm && (hm = new Map, this.changes.set(fm, hm)), hm.set(mm ? Tm : am, Am.DELETE), this.unmarkVisible(Tm)
          }))
        }
        return this.unmarkVisible(Tm), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let mm = 0, Tm = this.items.length; mm < Tm; mm++) this.remove(this.items[mm], jh, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(mm) {
        let Tm = this.isVisible(mm);
        if (!Tm && mm.isVisibilitySharedWithParent)
          if (this.isVisible(mm.parent[Ym])) this.markVisible(mm), Tm = !0;
          else
            for (let fm = mm.extraParents; void 0 !== fm; fm = fm.next) {
              const hm = fm.ref[Ym];
              if (hm.isFiltered && this.isVisible(hm)) {
                this.markVisible(mm), Tm = !0;
                break
              }
            }
        return Tm
      }
      _recursiveDeleteVisibleChangeTree(mm) {
        mm.forEachChild((mm => {
          this.unmarkVisible(mm), this._recursiveDeleteVisibleChangeTree(mm)
        }))
      }
      _dropPendingEntries(mm) {
        this.changes.delete(mm.ref[wm]), mm.forEachChild((mm => this._dropPendingEntries(mm)))
      }
      _removeViewField(mm, Tm, fm) {
        const hm = Tm.get(fm) === Am.ADD;
        Tm.set(fm, Am.DELETE);
        const am = mm.ref[mm.encDescriptor.names[fm]],
          xm = am?.[Ym];
        xm && (this.unmarkVisible(xm), this._recursiveDeleteVisibleChangeTree(xm), hm && this._dropPendingEntries(xm))
      }
    }

    function sh(mm) {
      mm.structSwitchEmitted || (mm.shouldEmitSwitch && (mm.buffer[mm.it.offset++] = 255, fT.number(mm.buffer, mm.ref[wm], mm.it)), mm.structSwitchEmitted = !0)
    }

    function lh(mm, Tm) {
      Bh(mm, Tm, Am.ADD)
    }

    function Mh(mm, Tm) {
      if (Tm._fullSyncGen === mm.gen) return;
      Tm._fullSyncGen = mm.gen;
      if (!mm.hasView || mm.view.isChangeTreeVisible(Tm)) {
        const fm = Tm.encDescriptor;
        mm.changeTree = Tm, mm.ref = Tm.ref, mm.encoder = fm.encoder, mm.filter = fm.filter, mm.metadata = fm.metadata, mm.treeIsFiltered = Tm.isFiltered, mm.isSchema = fm.isSchema, mm.filterBitmask = fm.filterBitmask, mm.tags = fm.tags, mm.structSwitchEmitted = !1, mm.shouldEmitSwitch = mm.hasView || mm.it.offset > mm.initialOffset || Tm !== mm.rootChangeTree, Tm.isArray && Tm.collDirty.size > 0 && (Tm.flags |= 512), af(Tm, mm, lh)
      }
      If(Tm, mm, uh)
    }

    function uh(mm, Tm, fm) {
      Mh(mm, Tm)
    }

    function Bh(mm, Tm, fm) {
      if (Tm < 0) {
        if (mm.treeIsFiltered !== mm.emitFiltered) return;
        return sh(mm), void(mm.buffer[mm.it.offset++] = 255 & Math.abs(Tm))
      }
      if ((mm.isSchema ? mm.treeIsFiltered || (Tm < 32 ? 0 !== (mm.filterBitmask & 1 << Tm) : void 0 !== mm.tags[Tm]) : mm.treeIsFiltered) !== mm.emitFiltered) return;
      const hm = mm.isEncodeAll ? Am.ADD : fm;
      void 0 !== hm && (void 0 === mm.filter || mm.filter(mm.ref, Tm, mm.view)) && (sh(mm), mm.encoder(mm.self, mm.buffer, mm.changeTree, Tm, hm, mm.it, mm.isEncodeAll, mm.hasView, mm.metadata))
    }

    function Lh(mm, Tm) {
      const fm = new Uint8Array(mm.length + Tm.length);
      return fm.set(mm, 0), fm.set(Tm, mm.length), fm
    }
    class vh {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(vh.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(mm, Tm) {
        this.context = lT.cache(mm.constructor), this.root = Tm ?? new Xh(this.context), this.setState(mm)
      }
      setState(mm) {
        this.state = mm, this.state[Ym].setRoot(this.root)
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
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mm.offset;
        return this._encodeChannel(mm, Tm, fm, hm, !1)
      }
      encodeUnreliable() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mm.offset;
        return this._encodeChannel(mm, Tm, fm, hm, !0)
      }
      _encodeChannel(mm, Tm, fm, hm, Am) {
        this.root.pendingFilterRefresh.length > 0 && wf(this.root);
        const am = void 0 !== Tm,
          xm = this.state[Ym],
          wm = this._encodeCtx;
        wm.self = this, wm.buffer = fm, wm.it = mm, wm.view = Tm, wm.isEncodeAll = !1, wm.hasView = am, wm.emitFiltered = am;
        let Dm = Am ? this.root.unreliableChanges : this.root.changes;
        for (; Dm = Dm.next;) {
          const fm = Dm.changeTree;
          if (am && !Tm.isChangeTreeVisible(fm)) continue;
          const im = Am ? fm.unreliableRecorder : fm;
          if (!im || !im.has()) continue;
          const Rm = fm.encDescriptor;
          wm.changeTree = fm, wm.ref = fm.ref, wm.encoder = Rm.encoder, wm.filter = Rm.filter, wm.metadata = Rm.metadata, wm.treeIsFiltered = fm.isFiltered, wm.isSchema = Rm.isSchema, wm.filterBitmask = Rm.filterBitmask, wm.tags = Rm.tags, wm.structSwitchEmitted = !1, wm.isRootTree = fm === xm, wm.shouldEmitSwitch = am || mm.offset > hm || !wm.isRootTree, im.forEachWithCtx(wm, Bh)
        }
        return Am || am || !this._isStreamBroadcastMode || this._emitStreamBroadcast(fm, mm), mm.offset > fm.byteLength ? (fm = this._resizeBuffer(fm, mm.offset), mm.offset = hm, this._encodeChannel(mm, Tm, fm, hm, Am)) : fm.subarray(0, mm.offset)
      }
      encodeFullSync(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : mm.offset;
        this.root.pendingFilterRefresh.length > 0 && wf(this.root);
        const am = void 0 !== hm,
          xm = this.state[Ym],
          wm = this._encodeCtx;
        return wm.self = this, wm.buffer = Tm, wm.it = mm, wm.view = hm, wm.isEncodeAll = !0, wm.hasView = am, wm.emitFiltered = fm, wm.gen = ++this._fullSyncGen, wm.initialOffset = Am, wm.rootChangeTree = xm, Mh(wm, xm), mm.offset > Tm.byteLength ? (Tm = this._resizeBuffer(Tm, mm.offset), mm.offset = Am, this.encodeFullSync(mm, Tm, fm, hm, Am)) : Tm.subarray(0, mm.offset)
      }
      _resizeBuffer(mm, Tm) {
        const fm = Math.ceil(Tm / vh.BUFFER_SIZE) * vh.BUFFER_SIZE,
          hm = new Uint8Array(fm);
        return hm.set(mm), mm === this.sharedBuffer && (this.sharedBuffer = hm), hm
      }
      encodeAll() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(mm, Tm, !1)
      }
      encodeAllView(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Am = fm.offset;
        return hm = this.encodeFullSync(fm, hm, !0, mm, Am), Lh(hm.subarray(0, Tm), hm.subarray(Am, fm.offset))
      }
      ensureCapacity(mm, Tm) {
        if (Tm + vh.BUFFER_SIZE <= mm.byteLength) return mm;
        const fm = Math.ceil((Tm + vh.BUFFER_SIZE) / vh.BUFFER_SIZE) * vh.BUFFER_SIZE,
          hm = new Uint8Array(fm);
        return hm.set(mm.subarray(0, Tm)), mm === this.sharedBuffer && (this.sharedBuffer = hm), hm
      }
      encodeView(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const xm = fm.offset;
        this._emitStreamPriority(mm);
        for (const Dm of mm.changes.keys()) {
          const Tm = mm.changes.get(Dm),
            am = this.root.changeTrees[Dm];
          if (void 0 === am) {
            mm.changes.delete(Dm);
            continue
          }
          if (0 === Tm.size) continue;
          const xm = am.encDescriptor,
            im = xm.encoder,
            Rm = xm.metadata,
            pm = am.ref,
            om = am.refTarget;
          hm = this.ensureCapacity(hm, fm.offset), hm[fm.offset++] = 255, fT.number(hm, pm[wm], fm);
          for (const [Dm, Om] of Tm) {
            let Tm;
            if (-1 === Dm) {
              const mm = om.tmpItems,
                Tm = om.deletedIndexes;
              for (let xm = 0; xm < mm.length; xm++) void 0 !== mm[xm] && !0 !== Tm[xm] && im(this, hm, am, xm, Am.ADD, fm, !1, !0, Rm);
              continue
            }
            if ("number" === typeof Dm) Tm = Dm;
            else {
              const fm = Dm.indexInParent(pm);
              if (void 0 === fm) continue;
              if (Tm = fm, Om === Am.ADD && am.getChange(Tm) === Am.DELETE) {
                mm.changes.delete(Dm.ref[wm]);
                continue
              }
            }
            im(this, hm, am, Tm, void 0 !== om[Em](Tm) && Om || Am.DELETE, fm, !1, !0, Rm)
          }
        }
        return mm.changes.clear(), hm = this.encode(fm, mm, hm), am ? Lh(hm.subarray(0, Tm), hm.subarray(xm, fm.offset)) : hm.subarray(xm, fm.offset)
      }
      encodeUnreliableView(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Am = fm.offset;
        return hm = this.encodeUnreliable(fm, mm, hm, Am), Lh(hm.subarray(0, Tm), hm.subarray(Am, fm.offset))
      }
      _emitStreamBroadcast(mm, Tm) {
        const fm = this.root.streamTrees;
        for (const hm of fm) {
          const fm = hm,
            am = fm[Ym],
            xm = fm[wm];
          if (void 0 === xm) continue;
          const Dm = fm._stream,
            im = Dm.broadcastDeletes,
            Rm = Dm.broadcastPending,
            pm = Dm.sentBroadcast,
            om = im.size > 0,
            Om = Rm.size > 0,
            qm = am.encDescriptor,
            jm = qm.encoder,
            Vm = qm.metadata;
          if (om || Om) {
            if (mm[Tm.offset++] = 255, fT.number(mm, xm, Tm), om) {
              for (const fm of im) jm(this, mm, am, fm, Am.DELETE, Tm, !1, !1, Vm);
              im.clear()
            }
            const hm = Dm.maxPerTick,
              Om = [];
            let qm = 0;
            const Im = [];
            for (const xm of Rm) {
              if (qm >= hm) break;
              const wm = fm[Em](xm);
              void 0 !== wm ? (jm(this, mm, am, xm, Am.ADD, Tm, !1, !1, Vm), pm.add(xm), Om.push(wm), Im.push(xm), qm++) : Im.push(xm)
            }
            for (const mm of Im) Rm.delete(mm);
            for (const fm of Om) {
              const hm = fm[Ym];
              if (void 0 === hm) continue;
              const am = fm[wm];
              if (void 0 === am) continue;
              mm[Tm.offset++] = 255, fT.number(mm, am, Tm);
              const xm = hm.encDescriptor,
                Dm = xm.encoder,
                im = xm.metadata;
              hm.forEachLive((fm => {
                UT.hasUnreliableAtIndex(im, fm) || Dm(this, mm, hm, fm, Am.ADD, Tm, !1, !1, im)
              }))
            }
          }
          for (const hm of pm) {
            const Am = fm[Em](hm);
            if (void 0 === Am) continue;
            const am = Am[Ym];
            if (void 0 === am || !am.has()) continue;
            const xm = Am[wm];
            if (void 0 === xm) continue;
            mm[Tm.offset++] = 255, fT.number(mm, xm, Tm);
            const Dm = am.encDescriptor,
              im = Dm.encoder,
              Rm = Dm.metadata;
            am.forEach(((fm, hm) => {
              fm < 0 || UT.hasUnreliableAtIndex(Rm, fm) || im(this, mm, am, fm, hm, Tm, !1, !1, Rm)
            }))
          }
        }
      }
      _emitStreamPriority(mm) {
        const Tm = this.root.streamTrees;
        if (0 === Tm.size) return;
        const fm = mm.id;
        for (const hm of Tm) {
          const Tm = hm,
            am = Tm._stream,
            xm = am.pendingByView.get(fm);
          if (void 0 === xm || 0 === xm.size) continue;
          const Dm = am.priorityByView?.get(fm),
            im = void 0 !== Dm,
            Rm = am.priority,
            pm = am.maxPerTick,
            om = [],
            Om = [];
          if (im || void 0 !== Rm) {
            const fm = [],
              hm = [];
            let Am = 0;
            for (const am of xm) {
              const xm = Tm[Em](am);
              if (void 0 === xm) {
                Om.push(am);
                continue
              }
              const wm = im ? Dm(xm) : Rm(mm, xm);
              if (Am < pm) {
                let mm = Am++;
                for (; mm > 0 && hm[mm - 1] < wm;) hm[mm] = hm[mm - 1], fm[mm] = fm[mm - 1], mm--;
                hm[mm] = wm, fm[mm] = am
              } else if (wm > hm[pm - 1]) {
                let mm = pm - 1;
                for (; mm > 0 && hm[mm - 1] < wm;) hm[mm] = hm[mm - 1], fm[mm] = fm[mm - 1], mm--;
                hm[mm] = wm, fm[mm] = am
              }
            }
            for (let mm = 0; mm < Am; mm++) om.push(fm[mm])
          } else
            for (const mm of xm) {
              if (om.length >= pm) break;
              om.push(mm)
            }
          for (const mm of Om) xm.delete(mm);
          const qm = om.length;
          let jm = am.sentByView.get(fm);
          void 0 === jm && (jm = new Set, am.sentByView.set(fm, jm));
          for (let fm = 0; fm < qm; fm++) {
            const hm = om[fm],
              am = Tm[Em](hm);
            if (void 0 === am) {
              xm.delete(hm);
              continue
            }
            mm._addImmediate(am);
            const Dm = am[Ym];
            if (void 0 !== Dm) {
              const Tm = am[wm];
              let fm = mm.changes.get(Tm);
              void 0 === fm && (fm = new Map, mm.changes.set(Tm, fm));
              const hm = Dm.metadata;
              Dm.forEachLive((mm => {
                UT.hasUnreliableAtIndex(hm, mm) || fm.set(mm, Am.ADD)
              }))
            }
            xm.delete(hm), jm.add(hm)
          }
        }
      }
      discardChanges() {
        const mm = this.root.changes;
        let Tm = mm.next;
        const fm = this.root;
        for (; Tm;) {
          const mm = Tm.next;
          Tm.changeTree.endEncode(), fm.releaseNode(Tm), Tm = mm
        }
        mm.next = void 0, mm.tail = void 0
      }
      discardUnreliableChanges() {
        const mm = this.root.unreliableChanges;
        let Tm = mm.next;
        const fm = this.root;
        for (; Tm;) {
          const mm = Tm.next;
          Tm.changeTree.endEncodeUnreliable(), fm.releaseNode(Tm), Tm = mm
        }
        mm.next = void 0, mm.tail = void 0
      }
      tryEncodeTypeId(mm, Tm, fm, hm) {
        const Am = this.context.getTypeId(Tm),
          am = this.context.getTypeId(fm);
        void 0 !== am ? Am !== am && (mm[hm.offset++] = 213, fT.number(mm, am, hm)) : console.warn(`@colyseus/schema WARNING: Class "${fm.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const mm = this.root;
        if (0 === mm.streamTrees.size) return !1;
        const Tm = 0 === mm.activeViews.size;
        for (const fm of mm.streamTrees)
          if (Tm ? NT(fm) : eT(fm, mm)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class th extends Error {
      constructor(mm) {
        super(mm), this.name = "DecodingWarning"
      }
    }
    const Uh = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class dh {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(mm, Tm), void 0 === Tm[wm] ? (Uh.value = mm, Object.defineProperty(Tm, wm, Uh)) : Tm[wm] !== mm && (Tm[wm] = mm), fm && (this.refCount[mm] = (this.refCount[mm] || 0) + 1), this.deletedRefs.has(mm) && this.deletedRefs.delete(mm)
      }
      removeRef(mm) {
        const Tm = this.refCount[mm];
        if (void 0 !== Tm)
          if (0 !== Tm)(this.refCount[mm] = Tm - 1) <= 0 && this.deletedRefs.add(mm);
          else try {
            const Tm = this.refs.get(mm);
            throw new th(`trying to remove refId '${mm}' with 0 refCount (${Tm.constructor.name}: ${JSON.stringify(Tm)})`)
          } catch (DA) {
            console.warn(DA)
          } else try {
            throw new th("trying to remove refId that doesn't exist: " + mm)
          } catch (DA) {
            console.warn(DA)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((mm => {
          if (this.refCount[mm] > 0) return;
          const Tm = this.refs.get(mm),
            fm = Tm.constructor[Symbol.metadata];
          if (null != fm)
            for (const hm in fm) {
              const mm = Tm[fm[hm].name];
              if ("object" === typeof mm && mm) {
                const Tm = mm[wm];
                void 0 === Tm || this.deletedRefs.has(Tm) || this.removeRef(Tm)
              }
            } else "function" === typeof Tm[qm] && Array.from(Tm.values()).forEach((mm => {
              const Tm = mm[wm];
              void 0 === Tm || this.deletedRefs.has(Tm) || this.removeRef(Tm)
            }));
          this.refs.delete(mm), delete this.refCount[mm], delete this.callbacks[mm]
        })), this.deletedRefs.clear()
      }
      addCallback(mm, Tm, fm) {
        if (void 0 === mm) {
          const mm = "number" === typeof Tm ? Am[Tm] : Tm;
          throw new Error(`Can't addCallback on '${mm}' (refId is undefined)`)
        }
        return this.callbacks[mm] || (this.callbacks[mm] = {}), this.callbacks[mm][Tm] || (this.callbacks[mm][Tm] = []), this.callbacks[mm][Tm].push(fm), () => this.removeCallback(mm, Tm, fm)
      }
      removeCallback(mm, Tm, fm) {
        const hm = this.callbacks?.[mm]?.[Tm]?.indexOf(fm);
        void 0 !== hm && -1 !== hm && Ph(this.callbacks[mm][Tm], hm)
      }
    }
    class gh {
      context;
      state;
      root;
      currentRefId = 0;
      vN;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(mm, Tm) {
        this.setState(mm), this.context = Tm || new lT(mm.constructor)
      }
      setState(mm) {
        this.state = mm, this.root = new dh, this.root.addRef(0, mm)
      }
      decode(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Am = void 0 !== this.vN ? [] : null,
          am = this.root,
          xm = mm.byteLength;
        let wm = fm.constructor[Rm];
        for (this.currentRefId = 0; Tm.offset < xm;) {
          if (mm[Tm.offset] == hm) {
            Tm.offset++, fm[Km]?.();
            const hm = KT.number(mm, Tm),
              Am = am.refs.get(hm);
            Am ? (fm = Am, wm = fm.constructor[Rm], this.currentRefId = hm) : (console.error(`"refId" not found: ${hm}`, {
              previousRef: fm,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(mm, Tm, xm));
            continue
          } - 1 !== wm(this, mm, Tm, fm, Am) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(mm, Tm, xm))
        }
        return fm[Km]?.(), null !== this.resyncVisited && function(mm, Tm) {
          mm.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : uf(mm, mm.state, new Set, Tm)
        }(this, Am), null !== Am && this.vN?.(Am), am.garbageCollectDeletedRefs(), Am
      }
      decodeResync(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(mm, Tm)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(mm, Tm, fm) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Am = {
          offset: Tm.offset
        };
        for (; Tm.offset < fm && (mm[Tm.offset] !== hm || (Am.offset = Tm.offset + 1, !this.root.refs.has(KT.number(mm, Am))));) Tm.offset++
      }
      getInstanceType(mm, Tm, fm) {
        let hm;
        if (213 === mm[Tm.offset]) {
          Tm.offset++;
          const fm = KT.number(mm, Tm);
          hm = this.context.get(fm)
        }
        return hm || fm
      }
      createInstanceOfType(mm) {
        return mm.initializeForDecoder()
      }
      removeChildRefs(mm, Tm) {
        const fm = "string" !== typeof mm[qm],
          hm = mm[wm];
        mm.forEach(((am, xm) => {
          Tm?.push({
            ref: mm,
            refId: hm,
            op: Am.DELETE,
            field: xm,
            value: void 0,
            previousValue: am
          }), fm && this.root.removeRef(am[wm])
        }))
      }
    }
    const Wh = Sh({
        min: qh.float64(),
        max: qh.float64(),
        bits: qh.uint8(),
        mode: qh.uint8()
      }, "QuantizedDescriptor"),
      Fh = Sh({
        name: qh.string(),
        type: qh.string(),
        referencedType: qh.number(),
        childPrimitive: qh.string(),
        quantized: qh.ref(Wh).optional()
      }, "ReflectionField"),
      mA = Sh({
        id: qh.number(),
        extendsId: qh.number(),
        fields: qh.array(Fh)
      }, "ReflectionType"),
      TA = Sh({
        types: qh.array(mA),
        rootType: qh.number()
      }, "Reflection");

    function fA(mm) {
      const Tm = mm.root,
        fm = Tm.callbacks,
        hm = new WeakMap;
      let am;

      function xm(mm, fm) {
        let im = fm.instance?.constructor[Symbol.metadata] || mm,
          Rm = fm.instance && "function" === typeof fm.instance.forEach || mm && !Nh.is(mm);
        if (im && !Rm) {
          const mm = function(mm, Am, xm, Dm) {
            return Dm && void 0 !== fm.instance[Am] && !hm.has(am) && xm(fm.instance[Am], void 0), Tm.addCallback(mm[wm], Am, xm)
          };
          return new Proxy({
            listen: function(Tm, Am) {
              let xm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (fm.instance) return mm(fm.instance, Tm, Am, xm);
              {
                let wm = () => {};
                return fm.onInstanceAvailable(((fm, Dm) => {
                  wm = mm(fm, Tm, Am, xm && Dm && !hm.has(am))
                })), () => wm()
              }
            },
            onChange: function(mm) {
              return Tm.addCallback(fm.instance[wm], Am.REPLACE, mm)
            },
            bindTo: function(mm, hm) {
              return hm || (hm = Object.keys(im).map((mm => im[mm].name))), Tm.addCallback(fm.instance[wm], Am.REPLACE, (() => {
                hm.forEach((Tm => mm[Tm] = fm.instance[Tm]))
              }))
            }
          }, {
            get(mm, Tm) {
              const hm = im[im[Tm]];
              if (hm) {
                const mm = fm.instance?.[Tm],
                  Am = hm => {
                    const Am = Dm(fm.instance).listen(Tm, ((mm, Tm) => {
                      hm(mm, !1), Am?.()
                    }), !1);
                    void 0 !== mm?.[wm] && hm(mm, !0)
                  };
                return xm(hm.type, {
                  instance: void 0 !== mm?.[wm] && mm,
                  parentInstance: fm.instance,
                  onInstanceAvailable: Am
                })
              }
              return mm[Tm]
            },
            has: (mm, Tm) => void 0 !== im[Tm],
            set(mm, Tm, fm) {
              throw new Error("not allowed")
            },
            deleteProperty(mm, Tm) {
              throw new Error("not allowed")
            }
          })
        } {
          const mm = function(mm, fm, xm) {
              return xm && mm.forEach(((mm, Tm) => fm(mm, Tm))), Tm.addCallback(mm[wm], Am.ADD, ((mm, Tm) => {
                hm.set(fm, !0), am = fm, fm(mm, Tm), hm.delete(fm), am = void 0
              }))
            },
            xm = function(mm, fm) {
              return Tm.addCallback(mm[wm], Am.DELETE, fm)
            },
            Dm = function(mm, fm) {
              return Tm.addCallback(mm[wm], Am.REPLACE, fm)
            };
          return new Proxy({
            pI: function(Tm) {
              let Am = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (fm.instance) return mm(fm.instance, Tm, Am && !hm.has(am));
              if (fm.onInstanceAvailable) {
                let xm = () => {};
                return fm.onInstanceAvailable(((fm, wm) => {
                  xm = mm(fm, Tm, Am && wm && !hm.has(am))
                })), () => xm()
              }
            },
            oN: function(mm) {
              if (fm.instance) return xm(fm.instance, mm);
              if (fm.onInstanceAvailable) {
                let Tm = () => {};
                return fm.onInstanceAvailable((fm => {
                  Tm = xm(fm, mm)
                })), () => Tm()
              }
            },
            onChange: function(mm) {
              if (fm.instance) return Dm(fm.instance, mm);
              if (fm.onInstanceAvailable) {
                let Tm = () => {};
                return fm.onInstanceAvailable((fm => {
                  Tm = Dm(fm, mm)
                })), () => Tm()
              }
            }
          }, {
            get(mm, Tm) {
              if (!mm[Tm]) throw new Error(`Can't access '${Tm}' through callback proxy. access the instance directly.`);
              return mm[Tm]
            },
            has: (mm, Tm) => void 0 !== mm[Tm],
            set(mm, Tm, fm) {
              throw new Error("not allowed")
            },
            deleteProperty(mm, Tm) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Dm(mm) {
        return xm(void 0, {
          instance: mm
        })
      }
      return mm.vN = function(mm) {
        const Tm = new Set;
        for (let hm = 0, am = mm.length; hm < am; hm++) {
          const am = mm[hm],
            xm = am.refId,
            Dm = am.ref,
            im = fm[xm];
          if (im) {
            if ((am.op & Am.DELETE) === Am.DELETE && Nh.isSchema(am.previousValue)) {
              const mm = fm[am.previousValue[wm]]?.[Am.DELETE];
              for (let Tm = mm?.length - 1; Tm >= 0; Tm--) mm[Tm]()
            }
            if (Nh.isSchema(Dm)) {
              if (!Tm.has(xm)) {
                const mm = im?.[Am.REPLACE];
                for (let Tm = mm?.length - 1; Tm >= 0; Tm--) mm[Tm]()
              }
              if (im.hasOwnProperty(am.field)) {
                const mm = im[am.field];
                for (let Tm = mm?.length - 1; Tm >= 0; Tm--) mm[Tm](am.value, am.previousValue)
              }
            } else {
              if ((am.op & Am.DELETE) === Am.DELETE) {
                if (void 0 !== am.previousValue) {
                  const mm = im[Am.DELETE];
                  for (let Tm = mm?.length - 1; Tm >= 0; Tm--) mm[Tm](am.previousValue, am.dynamicIndex ?? am.field)
                }
                if ((am.op & Am.ADD) === Am.ADD) {
                  const mm = im[Am.ADD];
                  for (let Tm = mm?.length - 1; Tm >= 0; Tm--) mm[Tm](am.value, am.dynamicIndex ?? am.field)
                }
              } else if ((am.op & Am.ADD) === Am.ADD && am.previousValue !== am.value) {
                const mm = im[Am.ADD];
                for (let Tm = mm?.length - 1; Tm >= 0; Tm--) mm[Tm](am.value, am.dynamicIndex ?? am.field)
              }
              if (am.value !== am.previousValue && (void 0 !== am.value || void 0 !== am.previousValue)) {
                const mm = im[Am.REPLACE];
                for (let Tm = mm?.length - 1; Tm >= 0; Tm--) mm[Tm](am.value, am.dynamicIndex ?? am.field)
              }
            }
            Tm.add(xm)
          }
        }
      }, Dm
    }

    function hA(mm, Tm) {
      mm.vN = Tm
    }
    TA.encode = function(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const fm = mm.context,
        hm = new TA,
        Am = new vh(hm),
        am = fm.schemas.get(mm.state.constructor);
      am > 0 && (hm.rootType = am);
      const xm = new Set,
        wm = {},
        Dm = mm => {
          if (void 0 === mm.extendsId || xm.has(mm.extendsId)) {
            xm.add(mm.id), hm.types.push(mm);
            const Tm = wm[mm.id];
            void 0 !== Tm && (delete wm[mm.id], Tm.forEach((mm => Dm(mm))))
          } else void 0 === wm[mm.extendsId] && (wm[mm.extendsId] = []), wm[mm.extendsId].push(mm)
        };
      fm.schemas.forEach(((mm, Tm) => {
        const hm = new mA;
        hm.id = Number(mm);
        const Am = Object.getPrototypeOf(Tm);
        Am !== Nh && (hm.extendsId = fm.schemas.get(Am));
        const am = Tm[Symbol.metadata];
        if (am !== Am[Symbol.metadata]) {
          const mm = am[Zm] ?? -1;
          for (let Tm = 0; Tm <= mm; Tm++) {
            const mm = am[Tm];
            if (void 0 === mm) continue;
            const Am = mm.name;
            if (!Object.prototype.hasOwnProperty.call(am, Am)) continue;
            const xm = new Fh;
            let wm;
            if (xm.name = Am, "string" === typeof mm.type) wm = mm.type;
            else if (yT(mm.type)) {
              const Tm = mm.type.quantized;
              wm = "quantized";
              const fm = new Wh;
              fm.min = Tm.min, fm.max = Tm.max, fm.bits = Tm.bits, fm.mode = Tm.wrap ? 1 : 0, xm.quantized = fm
            } else {
              let Tm;
              Nh.is(mm.type) ? (wm = "ref", Tm = mm.type) : (wm = Object.keys(mm.type)[0], "string" === typeof mm.type[wm] ? xm.childPrimitive = mm.type[wm] : Tm = mm.type[wm]), xm.referencedType = Tm ? fm.getTypeId(Tm) : -1
            }
            xm.type = wm, hm.fields.push(xm)
          }
        }
        Dm(hm)
      }));
      for (const im in wm) wm[im].forEach((mm => hm.types.push(mm)));
      return Am.encodeAll(Tm).slice(0, Tm.offset)
    }, TA.decode = function(mm, Tm) {
      const fm = new TA;
      new gh(fm).decode(mm, Tm);
      const hm = new lT;
      fm.types.forEach((mm => {
        const Tm = hm.get(mm.extendsId) ?? Nh,
          fm = class extends Tm {};
        lT.register(fm), hm.add(fm, mm.id)
      }), {});
      fm.types.forEach((mm => {
        const Tm = hm.get(mm.id),
          Am = UT.initialize(Tm),
          am = [];
        let xm = mm;
        do {
          am.push(xm), xm = fm.types.find((mm => mm.id === xm.extendsId))
        } while (xm);
        let wm = 0;
        am.reverse().forEach((mm => {
          ((mm, Tm, fm) => {
            Tm.fields.forEach(((Tm, Am) => {
              const am = fm + Am;
              if (void 0 !== Tm.quantized) {
                const fm = Tm.quantized;
                UT.addField(mm, am, Tm.name, {
                  quantized: HT({
                    min: fm.min,
                    max: fm.max,
                    bits: fm.bits,
                    mode: 1 === fm.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== Tm.referencedType) {
                const fm = Tm.type,
                  Am = hm.get(Tm.referencedType) ?? Tm.childPrimitive;
                "ref" === fm ? UT.addField(mm, am, Tm.name, Am) : UT.addField(mm, am, Tm.name, {
                  [fm]: Am
                })
              } else UT.addField(mm, am, Tm.name, Tm.type)
            }))
          })(Am, mm, wm), wm += mm.fields.length
        }))
      }));
      const Am = new(hm.get(fm.rootType || 0));
      return new gh(Am, hm)
    }, TA.makeEncodable = function(mm) {
      const Tm = mm[Symbol.metadata];
      if (!Tm) return mm;
      const fm = Tm[Zm];
      if (void 0 === fm) return mm;
      for (let hm = 0; hm <= fm; hm++) {
        const fm = Tm[hm];
        fm && UT.defineField(mm, Tm, hm, fm.name, fm.type)
      }
      return Object.prototype.hasOwnProperty.call(mm, cm) && delete mm[cm], mm
    };
    class AA {
      JO;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(mm) {
        this.JO = mm, this.JO.vN = this.vN.bind(this)
      }
      get callbacks() {
        return this.JO.root.callbacks
      }
      get state() {
        return this.JO.state
      }
      addCallback(mm, Tm, fm) {
        return this.JO.root.addCallback(mm, Tm, fm)
      }
      addCallbackOrWaitCollectionAvailable(mm, Tm, fm, hm) {
        let am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          xm = () => {};
        const Dm = () => xm(),
          im = mm[Tm];
        if (im && void 0 !== im[wm]) return am = am && !1 === this.isTriggering, fm === Am.ADD && am && im.forEach(((mm, Tm) => {
          hm(mm, Tm)
        })), this.addCallback(im[wm], fm, hm);
        {
          let Am;
          return Am = this.addCallback(mm[wm], Tm, ((mm, Tm) => {
            null !== mm && void 0 !== mm && (Am(), xm = this.addCallback(mm[wm], fm, hm))
          })), xm = Am, Dm
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(mm, Tm, fm) {
        let hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        hm = hm && !1 === this.isTriggering;
        const Am = mm[Tm];
        return hm && null !== Am && void 0 !== Am && fm(Am, void 0), this.addCallback(mm[wm], Tm, fm)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const mm = arguments.length <= 0 ? void 0 : arguments[0],
            Tm = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(mm[wm], Am.REPLACE, Tm)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Am.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Am.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      pI() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Am.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Am.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      oN() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Am.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Am.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(mm, Tm, fm) {
        let hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const am = mm.constructor[Symbol.metadata];
        fm || (fm = Object.keys(am).filter((mm => !isNaN(Number(mm)))).map((mm => am[mm].name)));
        const xm = () => {
          for (const hm of fm) {
            const fm = mm[hm];
            void 0 !== fm && (Tm[hm] = fm)
          }
        };
        return hm && xm(), this.addCallback(mm[wm], Am.REPLACE, xm)
      }
      vN(mm) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let Tm = 0, fm = mm.length; Tm < fm; Tm++) {
          const fm = mm[Tm],
            hm = fm.refId,
            am = fm.ref,
            xm = this.callbacks[hm];
          if (xm) {
            if ((fm.op & Am.DELETE) === Am.DELETE && Nh.isSchema(fm.previousValue)) {
              const mm = fm.previousValue[wm],
                Tm = this.callbacks[mm]?.[Am.DELETE];
              if (Tm)
                for (let fm = Tm.length - 1; fm >= 0; fm--) try {
                  Tm[fm]()
                } catch (DA) {
                  console.error(DA)
                }
            }
            if (Nh.isSchema(am)) {
              if (!this.uniqueRefIds.has(hm)) {
                const mm = xm[Am.REPLACE];
                if (mm)
                  for (let Tm = mm.length - 1; Tm >= 0; Tm--) try {
                    mm[Tm]()
                  } catch (DA) {
                    console.error(DA)
                  }
              }
              const mm = xm[fm.field];
              if (mm)
                for (let Tm = mm.length - 1; Tm >= 0; Tm--) try {
                  mm[Tm](fm.value, fm.previousValue)
                } catch (DA) {
                  console.error(DA)
                }
            } else {
              const mm = fm.dynamicIndex ?? fm.field;
              if ((fm.op & Am.DELETE) === Am.DELETE) {
                if (void 0 !== fm.previousValue) {
                  const Tm = xm[Am.DELETE];
                  if (Tm)
                    for (let hm = Tm.length - 1; hm >= 0; hm--) try {
                      Tm[hm](fm.previousValue, mm)
                    } catch (DA) {
                      console.error(DA)
                    }
                }
                if ((fm.op & Am.ADD) === Am.ADD) {
                  const Tm = xm[Am.ADD];
                  if (Tm)
                    for (let hm = Tm.length - 1; hm >= 0; hm--) try {
                      Tm[hm](fm.value, mm)
                    } catch (DA) {
                      console.error(DA)
                    }
                }
              } else if ((fm.op & Am.ADD) === Am.ADD && fm.previousValue !== fm.value) {
                const Tm = xm[Am.ADD];
                if (Tm)
                  for (let hm = Tm.length - 1; hm >= 0; hm--) try {
                    Tm[hm](fm.value, mm)
                  } catch (DA) {
                    console.error(DA)
                  }
              }
              if (fm.value !== fm.previousValue) {
                const Tm = xm[Am.REPLACE];
                if (Tm)
                  for (let hm = Tm.length - 1; hm >= 0; hm--) try {
                    Tm[hm](mm, fm.value)
                  } catch (DA) {
                    console.error(DA)
                  }
              }
            }
            this.uniqueRefIds.add(hm)
          }
        }
        this.isTriggering = !1
      }
    }
    const aA = {
      get(mm) {
        if (mm instanceof gh) return new AA(mm);
        if ("JO" in mm.qV) return new AA(mm.qV.JO);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(mm) {
        if (mm instanceof gh) return fA(mm);
        if ("JO" in mm.qV) return fA(mm.qV.JO);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (mm, Tm) => hA(mm, Tm)
    };
    class xA {
      _free = [];
      _factory;
      _maxSize;
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = mm, this._maxSize = Tm.maxSize ?? 1 / 0;
        const fm = Tm.preallocate ?? 0;
        for (let hm = 0; hm < fm; hm++) this._free.push(mm())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(mm) {
        Nh.reset(mm), this._free.length < this._maxSize && this._free.push(mm)
      }
      get size() {
        return this._free.length
      }
    }

    function wA(mm) {
      return new xA((() => new mm), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    JT("map", {
      constructor: wh
    }), JT("array", {
      constructor: ah
    }), JT("set", {
      constructor: ih
    }), JT("collection", {
      constructor: Dh
    })
  },
  9018: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      __addDisposableResource: () => Hm,
      __assign: () => am,
      __asyncDelegator: () => zm,
      __asyncGenerator: () => cm,
      __asyncValues: () => Zm,
      __await: () => Jm,
      __awaiter: () => Om,
      __classPrivateFieldGet: () => Gm,
      __classPrivateFieldIn: () => Pm,
      __classPrivateFieldSet: () => Xm,
      __createBinding: () => qm,
      __decorate: () => wm,
      __disposeResources: () => Cm,
      __esDecorate: () => im,
      __exportStar: () => jm,
      __extends: () => Am,
      __generator: () => Ym,
      __importDefault: () => Nm,
      __importStar: () => em,
      __makeTemplateObject: () => km,
      __metadata: () => om,
      __param: () => Dm,
      __propKey: () => pm,
      __read: () => Im,
      __rest: () => xm,
      __rewriteRelativeImportExtension: () => rm,
      __runInitializers: () => Rm,
      __setFunctionName: () => Em,
      __spread: () => Km,
      __spreadArray: () => nm,
      __spreadArrays: () => Qm,
      __values: () => Vm,
      default: () => sm
    });
    var hm = function(mm, Tm) {
      return hm = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(mm, Tm) {
        mm.__proto__ = Tm
      } || function(mm, Tm) {
        for (var fm in Tm) Object.prototype.hasOwnProperty.call(Tm, fm) && (mm[fm] = Tm[fm])
      }, hm(mm, Tm)
    };

    function Am(mm, Tm) {
      if ("function" !== typeof Tm && null !== Tm) throw new TypeError("Class extends value " + String(Tm) + " is not a constructor or null");

      function fm() {
        this.constructor = mm
      }
      hm(mm, Tm), mm.prototype = null === Tm ? Object.create(Tm) : (fm.prototype = Tm.prototype, new fm)
    }
    var am = function() {
      return am = Object.assign || function(mm) {
        for (var Tm, fm = 1, hm = arguments.length; fm < hm; fm++)
          for (var Am in Tm = arguments[fm]) Object.prototype.hasOwnProperty.call(Tm, Am) && (mm[Am] = Tm[Am]);
        return mm
      }, am.apply(this, arguments)
    };

    function xm(mm, Tm) {
      var fm = {};
      for (var hm in mm) Object.prototype.hasOwnProperty.call(mm, hm) && Tm.indexOf(hm) < 0 && (fm[hm] = mm[hm]);
      if (null != mm && "function" === typeof Object.getOwnPropertySymbols) {
        var Am = 0;
        for (hm = Object.getOwnPropertySymbols(mm); Am < hm.length; Am++) Tm.indexOf(hm[Am]) < 0 && Object.prototype.propertyIsEnumerable.call(mm, hm[Am]) && (fm[hm[Am]] = mm[hm[Am]])
      }
      return fm
    }

    function wm(mm, Tm, fm, hm) {
      var Am, am = arguments.length,
        xm = am < 3 ? Tm : null === hm ? hm = Object.getOwnPropertyDescriptor(Tm, fm) : hm;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) xm = Reflect.decorate(mm, Tm, fm, hm);
      else
        for (var wm = mm.length - 1; wm >= 0; wm--)(Am = mm[wm]) && (xm = (am < 3 ? Am(xm) : am > 3 ? Am(Tm, fm, xm) : Am(Tm, fm)) || xm);
      return am > 3 && xm && Object.defineProperty(Tm, fm, xm), xm
    }

    function Dm(mm, Tm) {
      return function(fm, hm) {
        Tm(fm, hm, mm)
      }
    }

    function im(mm, Tm, fm, hm, Am, am) {
      function xm(mm) {
        if (void 0 !== mm && "function" !== typeof mm) throw new TypeError("Function expected");
        return mm
      }
      for (var wm, Dm = hm.kind, im = "getter" === Dm ? "get" : "setter" === Dm ? "set" : "value", Rm = !Tm && mm ? hm.static ? mm : mm.prototype : null, pm = Tm || (Rm ? Object.getOwnPropertyDescriptor(Rm, hm.name) : {}), Em = !1, om = fm.length - 1; om >= 0; om--) {
        var Om = {};
        for (var Ym in hm) Om[Ym] = "access" === Ym ? {} : hm[Ym];
        for (var Ym in hm.access) Om.access[Ym] = hm.access[Ym];
        Om.addInitializer = function(mm) {
          if (Em) throw new TypeError("Cannot add initializers after decoration has completed");
          am.push(xm(mm || null))
        };
        var qm = (0, fm[om])("accessor" === Dm ? {
          get: pm.get,
          set: pm.set
        } : pm[im], Om);
        if ("accessor" === Dm) {
          if (void 0 === qm) continue;
          if (null === qm || "object" !== typeof qm) throw new TypeError("Object expected");
          (wm = xm(qm.get)) && (pm.get = wm), (wm = xm(qm.set)) && (pm.set = wm), (wm = xm(qm.init)) && Am.unshift(wm)
        } else(wm = xm(qm)) && ("field" === Dm ? Am.unshift(wm) : pm[im] = wm)
      }
      Rm && Object.defineProperty(Rm, hm.name, pm), Em = !0
    }

    function Rm(mm, Tm, fm) {
      for (var hm = arguments.length > 2, Am = 0; Am < Tm.length; Am++) fm = hm ? Tm[Am].call(mm, fm) : Tm[Am].call(mm);
      return hm ? fm : void 0
    }

    function pm(mm) {
      return "symbol" === typeof mm ? mm : "".concat(mm)
    }

    function Em(mm, Tm, fm) {
      return "symbol" === typeof Tm && (Tm = Tm.description ? "[".concat(Tm.description, "]") : ""), Object.defineProperty(mm, "name", {
        configurable: !0,
        value: fm ? "".concat(fm, " ", Tm) : Tm
      })
    }

    function om(mm, Tm) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(mm, Tm)
    }

    function Om(mm, Tm, fm, hm) {
      return new(fm || (fm = Promise))((function(Am, am) {
        function xm(mm) {
          try {
            Dm(hm.next(mm))
          } catch (Tm) {
            am(Tm)
          }
        }

        function wm(mm) {
          try {
            Dm(hm.throw(mm))
          } catch (Tm) {
            am(Tm)
          }
        }

        function Dm(mm) {
          var Tm;
          mm.done ? Am(mm.value) : (Tm = mm.value, Tm instanceof fm ? Tm : new fm((function(mm) {
            mm(Tm)
          }))).then(xm, wm)
        }
        Dm((hm = hm.apply(mm, Tm || [])).next())
      }))
    }

    function Ym(mm, Tm) {
      var fm, hm, Am, am = {
          label: 0,
          sent: function() {
            if (1 & Am[0]) throw Am[1];
            return Am[1]
          },
          trys: [],
          ops: []
        },
        xm = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return xm.next = wm(0), xm.throw = wm(1), xm.return = wm(2), "function" === typeof Symbol && (xm[Symbol.iterator] = function() {
        return this
      }), xm;

      function wm(wm) {
        return function(Dm) {
          return function(wm) {
            if (fm) throw new TypeError("Generator is already executing.");
            for (; xm && (xm = 0, wm[0] && (am = 0)), am;) try {
              if (fm = 1, hm && (Am = 2 & wm[0] ? hm.return : wm[0] ? hm.throw || ((Am = hm.return) && Am.call(hm), 0) : hm.next) && !(Am = Am.call(hm, wm[1])).done) return Am;
              switch (hm = 0, Am && (wm = [2 & wm[0], Am.value]), wm[0]) {
                case 0:
                case 1:
                  Am = wm;
                  break;
                case 4:
                  return am.label++, {
                    value: wm[1],
                    done: !1
                  };
                case 5:
                  am.label++, hm = wm[1], wm = [0];
                  continue;
                case 7:
                  wm = am.ops.pop(), am.trys.pop();
                  continue;
                default:
                  if (!(Am = (Am = am.trys).length > 0 && Am[Am.length - 1]) && (6 === wm[0] || 2 === wm[0])) {
                    am = 0;
                    continue
                  }
                  if (3 === wm[0] && (!Am || wm[1] > Am[0] && wm[1] < Am[3])) {
                    am.label = wm[1];
                    break
                  }
                  if (6 === wm[0] && am.label < Am[1]) {
                    am.label = Am[1], Am = wm;
                    break
                  }
                  if (Am && am.label < Am[2]) {
                    am.label = Am[2], am.ops.push(wm);
                    break
                  }
                  Am[2] && am.ops.pop(), am.trys.pop();
                  continue
              }
              wm = Tm.call(mm, am)
            } catch (Dm) {
              wm = [6, Dm], hm = 0
            } finally {
              fm = Am = 0
            }
            if (5 & wm[0]) throw wm[1];
            return {
              value: wm[0] ? wm[1] : void 0,
              done: !0
            }
          }([wm, Dm])
        }
      }
    }
    var qm = Object.create ? function(mm, Tm, fm, hm) {
      void 0 === hm && (hm = fm);
      var Am = Object.getOwnPropertyDescriptor(Tm, fm);
      Am && !("get" in Am ? !Tm.__esModule : Am.writable || Am.configurable) || (Am = {
        enumerable: !0,
        get: function() {
          return Tm[fm]
        }
      }), Object.defineProperty(mm, hm, Am)
    } : function(mm, Tm, fm, hm) {
      void 0 === hm && (hm = fm), mm[hm] = Tm[fm]
    };

    function jm(mm, Tm) {
      for (var fm in mm) "default" === fm || Object.prototype.hasOwnProperty.call(Tm, fm) || qm(Tm, mm, fm)
    }

    function Vm(mm) {
      var Tm = "function" === typeof Symbol && Symbol.iterator,
        fm = Tm && mm[Tm],
        hm = 0;
      if (fm) return fm.call(mm);
      if (mm && "number" === typeof mm.length) return {
        next: function() {
          return mm && hm >= mm.length && (mm = void 0), {
            value: mm && mm[hm++],
            done: !mm
          }
        }
      };
      throw new TypeError(Tm ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Im(mm, Tm) {
      var fm = "function" === typeof Symbol && mm[Symbol.iterator];
      if (!fm) return mm;
      var hm, Am, am = fm.call(mm),
        xm = [];
      try {
        for (;
          (void 0 === Tm || Tm-- > 0) && !(hm = am.next()).done;) xm.push(hm.value)
      } catch (wm) {
        Am = {
          error: wm
        }
      } finally {
        try {
          hm && !hm.done && (fm = am.return) && fm.call(am)
        } finally {
          if (Am) throw Am.error
        }
      }
      return xm
    }

    function Km() {
      for (var mm = [], Tm = 0; Tm < arguments.length; Tm++) mm = mm.concat(Im(arguments[Tm]));
      return mm
    }

    function Qm() {
      for (var mm = 0, Tm = 0, fm = arguments.length; Tm < fm; Tm++) mm += arguments[Tm].length;
      var hm = Array(mm),
        Am = 0;
      for (Tm = 0; Tm < fm; Tm++)
        for (var am = arguments[Tm], xm = 0, wm = am.length; xm < wm; xm++, Am++) hm[Am] = am[xm];
      return hm
    }

    function nm(mm, Tm, fm) {
      if (fm || 2 === arguments.length)
        for (var hm, Am = 0, am = Tm.length; Am < am; Am++) !hm && Am in Tm || (hm || (hm = Array.prototype.slice.call(Tm, 0, Am)), hm[Am] = Tm[Am]);
      return mm.concat(hm || Array.prototype.slice.call(Tm))
    }

    function Jm(mm) {
      return this instanceof Jm ? (this.v = mm, this) : new Jm(mm)
    }

    function cm(mm, Tm, fm) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var hm, Am = fm.apply(mm, Tm || []),
        am = [];
      return hm = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), xm("next"), xm("throw"), xm("return", (function(mm) {
        return function(Tm) {
          return Promise.resolve(Tm).then(mm, im)
        }
      })), hm[Symbol.asyncIterator] = function() {
        return this
      }, hm;

      function xm(mm, Tm) {
        Am[mm] && (hm[mm] = function(Tm) {
          return new Promise((function(fm, hm) {
            am.push([mm, Tm, fm, hm]) > 1 || wm(mm, Tm)
          }))
        }, Tm && (hm[mm] = Tm(hm[mm])))
      }

      function wm(mm, Tm) {
        try {
          (fm = Am[mm](Tm)).value instanceof Jm ? Promise.resolve(fm.value.v).then(Dm, im) : Rm(am[0][2], fm)
        } catch (hm) {
          Rm(am[0][3], hm)
        }
        var fm
      }

      function Dm(mm) {
        wm("next", mm)
      }

      function im(mm) {
        wm("throw", mm)
      }

      function Rm(mm, Tm) {
        mm(Tm), am.shift(), am.length && wm(am[0][0], am[0][1])
      }
    }

    function zm(mm) {
      var Tm, fm;
      return Tm = {}, hm("next"), hm("throw", (function(mm) {
        throw mm
      })), hm("return"), Tm[Symbol.iterator] = function() {
        return this
      }, Tm;

      function hm(hm, Am) {
        Tm[hm] = mm[hm] ? function(Tm) {
          return (fm = !fm) ? {
            value: Jm(mm[hm](Tm)),
            done: !1
          } : Am ? Am(Tm) : Tm
        } : Am
      }
    }

    function Zm(mm) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Tm, fm = mm[Symbol.asyncIterator];
      return fm ? fm.call(mm) : (mm = Vm(mm), Tm = {}, hm("next"), hm("throw"), hm("return"), Tm[Symbol.asyncIterator] = function() {
        return this
      }, Tm);

      function hm(fm) {
        Tm[fm] = mm[fm] && function(Tm) {
          return new Promise((function(hm, Am) {
            (function(mm, Tm, fm, hm) {
              Promise.resolve(hm).then((function(Tm) {
                mm({
                  value: Tm,
                  done: fm
                })
              }), Tm)
            })(hm, Am, (Tm = mm[fm](Tm)).done, Tm.value)
          }))
        }
      }
    }

    function km(mm, Tm) {
      return Object.defineProperty ? Object.defineProperty(mm, "raw", {
        value: Tm
      }) : mm.raw = Tm, mm
    }
    var bm = Object.create ? function(mm, Tm) {
        Object.defineProperty(mm, "default", {
          enumerable: !0,
          value: Tm
        })
      } : function(mm, Tm) {
        mm.default = Tm
      },
      Sm = function(mm) {
        return Sm = Object.getOwnPropertyNames || function(mm) {
          var Tm = [];
          for (var fm in mm) Object.prototype.hasOwnProperty.call(mm, fm) && (Tm[Tm.length] = fm);
          return Tm
        }, Sm(mm)
      };

    function em(mm) {
      if (mm && mm.__esModule) return mm;
      var Tm = {};
      if (null != mm)
        for (var fm = Sm(mm), hm = 0; hm < fm.length; hm++) "default" !== fm[hm] && qm(Tm, mm, fm[hm]);
      return bm(Tm, mm), Tm
    }

    function Nm(mm) {
      return mm && mm.__esModule ? mm : {
        default: mm
      }
    }

    function Gm(mm, Tm, fm, hm) {
      if ("a" === fm && !hm) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Tm ? mm !== Tm || !hm : !Tm.has(mm)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === fm ? hm : "a" === fm ? hm.call(mm) : hm ? hm.value : Tm.get(mm)
    }

    function Xm(mm, Tm, fm, hm, Am) {
      if ("m" === hm) throw new TypeError("Private method is not writable");
      if ("a" === hm && !Am) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Tm ? mm !== Tm || !Am : !Tm.has(mm)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === hm ? Am.call(mm, fm) : Am ? Am.value = fm : Tm.set(mm, fm), fm
    }

    function Pm(mm, Tm) {
      if (null === Tm || "object" !== typeof Tm && "function" !== typeof Tm) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof mm ? Tm === mm : mm.has(Tm)
    }

    function Hm(mm, Tm, fm) {
      if (null !== Tm && void 0 !== Tm) {
        if ("object" !== typeof Tm && "function" !== typeof Tm) throw new TypeError("Object expected.");
        var hm, Am;
        if (fm) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          hm = Tm[Symbol.asyncDispose]
        }
        if (void 0 === hm) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          hm = Tm[Symbol.dispose], fm && (Am = hm)
        }
        if ("function" !== typeof hm) throw new TypeError("Object not disposable.");
        Am && (hm = function() {
          try {
            Am.call(this)
          } catch (mm) {
            return Promise.reject(mm)
          }
        }), mm.stack.push({
          value: Tm,
          dispose: hm,
          async: fm
        })
      } else fm && mm.stack.push({
        async: !0
      });
      return Tm
    }
    var ym = "function" === typeof SuppressedError ? SuppressedError : function(mm, Tm, fm) {
      var hm = new Error(fm);
      return hm.name = "SuppressedError", hm.error = mm, hm.suppressed = Tm, hm
    };

    function Cm(mm) {
      function Tm(Tm) {
        mm.error = mm.hasError ? new ym(Tm, mm.error, "An error was suppressed during disposal.") : Tm, mm.hasError = !0
      }
      var fm, hm = 0;
      return function Am() {
        for (; fm = mm.stack.pop();) try {
          if (!fm.async && 1 === hm) return hm = 0, mm.stack.push(fm), Promise.resolve().then(Am);
          if (fm.dispose) {
            var am = fm.dispose.call(fm.value);
            if (fm.async) return hm |= 2, Promise.resolve(am).then(Am, (function(mm) {
              return Tm(mm), Am()
            }))
          } else hm |= 1
        } catch (xm) {
          Tm(xm)
        }
        if (1 === hm) return mm.hasError ? Promise.reject(mm.error) : Promise.resolve();
        if (mm.hasError) throw mm.error
      }()
    }

    function rm(mm, Tm) {
      return "string" === typeof mm && /^\.\.?\//.test(mm) ? mm.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(mm, fm, hm, Am, am) {
        return fm ? Tm ? ".jsx" : ".js" : !hm || Am && am ? hm + Am + "." + am.toLowerCase() + "js" : mm
      })) : mm
    }
    const sm = {
      __extends: Am,
      __assign: am,
      __rest: xm,
      __decorate: wm,
      __param: Dm,
      __esDecorate: im,
      __runInitializers: Rm,
      __propKey: pm,
      __setFunctionName: Em,
      __metadata: om,
      __awaiter: Om,
      __generator: Ym,
      __createBinding: qm,
      __exportStar: jm,
      __values: Vm,
      __read: Im,
      __spread: Km,
      __spreadArrays: Qm,
      __spreadArray: nm,
      __await: Jm,
      __asyncGenerator: cm,
      __asyncDelegator: zm,
      __asyncValues: Zm,
      __makeTemplateObject: km,
      __importStar: em,
      __importDefault: Nm,
      __classPrivateFieldGet: Gm,
      __classPrivateFieldSet: Xm,
      __classPrivateFieldIn: Pm,
      __addDisposableResource: Hm,
      __disposeResources: Cm,
      __rewriteRelativeImportExtension: rm
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);