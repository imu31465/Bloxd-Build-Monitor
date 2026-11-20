export const id = 183;
export const ids = [183];
export const modules = {
  9119: (qq, Eq) => {
    Eq.discordURLBuilder = function(qq) {
      var Eq;
      const gq = (null === (Eq = null === window || void 0 === window ? void 0 : window.location) || void 0 === Eq ? void 0 : Eq.hostname) || "localhost",
        Yq = qq.hostname.split("."),
        lq = !qq.hostname.includes("trycloudflare.com") && !qq.hostname.includes("discordsays.com") && Yq.length > 2 ? `/${Yq[0]}` : "";
      return qq.pathname.startsWith("/.proxy") ? `${qq.protocol}//${gq}${lq}${qq.pathname}${qq.search}` : `${qq.protocol}//${gq}/.proxy/colyseus${lq}${qq.pathname}${qq.search}`
    }
  },
  9113: (qq, Eq, gq) => {
    var Yq, lq, Oq, mq, xq = gq(9034),
      Aq = gq(9117),
      cq = gq(9082);
    Yq = new WeakMap, lq = new WeakMap, Oq = new WeakMap, mq = new WeakMap, Eq.Auth = class {
      constructor(qq) {
        this.http = qq, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Yq.set(this, !1), lq.set(this, void 0), Oq.set(this, void 0), mq.set(this, cq.createNanoEvents()), Aq.getItem(this.settings.key, (qq => this.token = qq))
      }
      set token(qq) {
        this.http.authToken = qq
      }
      get token() {
        return this.http.authToken
      }
      onChange(qq) {
        const Eq = xq.__classPrivateFieldGet(this, mq, "f").on("change", qq);
        return xq.__classPrivateFieldGet(this, Yq, "f") || xq.__classPrivateFieldSet(this, lq, new Promise(((qq, Eq) => {
          this.getUserData().then((qq => {
            this.emitChange(Object.assign(Object.assign({}, qq), {
              token: this.token
            }))
          })).catch((qq => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            qq()
          }))
        })), "f"), xq.__classPrivateFieldSet(this, Yq, !0, "f"), Eq
      }
      getUserData() {
        return xq.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(qq, Eq, gq) {
        return xq.__awaiter(this, void 0, void 0, (function*() {
          const Yq = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: qq,
              password: Eq,
              options: gq
            }
          })).data;
          return this.emitChange(Yq), Yq
        }))
      }
      signInWithEmailAndPassword(qq, Eq) {
        return xq.__awaiter(this, void 0, void 0, (function*() {
          const gq = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: qq,
              password: Eq
            }
          })).data;
          return this.emitChange(gq), gq
        }))
      }
      signInAnonymously(qq) {
        return xq.__awaiter(this, void 0, void 0, (function*() {
          const Eq = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: qq
            }
          })).data;
          return this.emitChange(Eq), Eq
        }))
      }
      sendPasswordResetEmail(qq) {
        return xq.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: qq
            }
          })).data
        }))
      }
      signInWithProvider(qq) {
        return xq.__awaiter(this, arguments, void 0, (function*(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((gq, Yq) => {
            const lq = Eq.width || 480,
              mq = Eq.height || 768,
              Aq = this.token ? `?token=${this.token}` : "",
              cq = `Login with ${qq[0].toUpperCase()+qq.substring(1)}`,
              uq = this.http.client.getHttpEndpoint(`${Eq.prefix||`${this.settings.path}/provider`}/${qq}${Aq}`),
              Bq = screen.width / 2 - lq / 2,
              Wq = screen.height / 2 - mq / 2;
            xq.__classPrivateFieldSet(this, Oq, window.open(uq, cq, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + lq + ", height=" + mq + ", top=" + Wq + ", left=" + Bq), "f");
            const Nq = qq => {
                void 0 === qq.data.user && void 0 === qq.data.token || (clearInterval(aq), xq.__classPrivateFieldGet(this, Oq, "f").close(), xq.__classPrivateFieldSet(this, Oq, void 0, "f"), window.removeEventListener("message", Nq), void 0 !== qq.data.error ? Yq(qq.data.error) : (gq(qq.data), this.emitChange(qq.data)))
              },
              aq = setInterval((() => {
                xq.__classPrivateFieldGet(this, Oq, "f") && !xq.__classPrivateFieldGet(this, Oq, "f").closed || (xq.__classPrivateFieldSet(this, Oq, void 0, "f"), Yq("lE"), window.removeEventListener("message", Nq))
              }), 200);
            window.addEventListener("message", Nq)
          }))
        }))
      }
      signOut() {
        return xq.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(qq) {
        void 0 !== qq.token && (this.token = qq.token, null === qq.token ? Aq.removeItem(this.settings.key) : Aq.setItem(this.settings.key, qq.token)), xq.__classPrivateFieldGet(this, mq, "f").emit("change", qq)
      }
    }
  },
  9027: (qq, Eq, gq) => {
    var Yq, lq = gq(9034),
      Oq = gq(9037),
      mq = gq(9039),
      xq = gq(9101),
      Aq = gq(9113),
      cq = gq(9119);
    class uq extends Error {
      constructor(qq, Eq) {
        super(qq), this.code = Eq, this.name = "MatchMakeError", Object.setPrototypeOf(this, uq.prototype)
      }
    }
    const Bq = "undefined" !== typeof window && "undefined" !== typeof(null === (Yq = null === window || void 0 === window ? void 0 : window.location) || void 0 === Yq ? void 0 : Yq.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Wq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bq,
          Eq = arguments.length > 1 ? arguments[1] : void 0;
        var gq, Yq;
        if ("string" === typeof qq) {
          const Eq = qq.startsWith("/") ? new URL(qq, Bq) : new URL(qq),
            gq = "https:" === Eq.protocol || "wss:" === Eq.protocol,
            Yq = Number(Eq.port || (gq ? 443 : 80));
          this.settings = {
            hostname: Eq.hostname,
            pathname: Eq.pathname,
            port: Yq,
            secure: gq,
            searchParams: Eq.searchParams.toString() || void 0
          }
        } else void 0 === qq.port && (qq.port = qq.secure ? 443 : 80), void 0 === qq.pathname && (qq.pathname = ""), this.settings = qq;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new xq.HTTP(this, (null === Eq || void 0 === Eq ? void 0 : Eq.headers) || {}), this.auth = new Aq.Auth(this.http), this.urlBuilder = null === Eq || void 0 === Eq ? void 0 : Eq.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Yq = null === (gq = null === window || void 0 === window ? void 0 : window.location) || void 0 === gq ? void 0 : gq.hostname) || void 0 === Yq ? void 0 : Yq.includes("discordsays.com")) && (this.urlBuilder = cq.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(qq) {
        return lq.__awaiter(this, arguments, void 0, (function*(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gq = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", qq, Eq, gq)
        }))
      }
      create(qq) {
        return lq.__awaiter(this, arguments, void 0, (function*(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gq = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", qq, Eq, gq)
        }))
      }
      join(qq) {
        return lq.__awaiter(this, arguments, void 0, (function*(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gq = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", qq, Eq, gq)
        }))
      }
      joinById(qq) {
        return lq.__awaiter(this, arguments, void 0, (function*(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gq = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", qq, Eq, gq)
        }))
      }
      reconnect(qq, Eq) {
        return lq.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof qq && "string" === typeof Eq) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [gq, Yq] = qq.split(":");
          if (!gq || !Yq) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", gq, {
            reconnectionToken: Yq
          }, Eq)
        }))
      }
      consumeSeatReservation(qq, Eq, gq) {
        return lq.__awaiter(this, void 0, void 0, (function*() {
          const Yq = this.createRoom(qq.room.name, Eq);
          Yq.roomId = qq.room.roomId, Yq.sessionId = qq.sessionId;
          const mq = {
            sessionId: Yq.sessionId
          };
          qq.reconnectionToken && (mq.reconnectionToken = qq.reconnectionToken);
          const xq = gq || Yq;
          return Yq.connect(this.buildEndpoint(qq.room, mq, qq.protocol), qq.devMode && (() => lq.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Yq.roomId}'...`);
            let gq = 0;
            const Oq = () => lq.__awaiter(this, void 0, void 0, (function*() {
              gq++;
              try {
                yield this.consumeSeatReservation(qq, Eq, xq), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Yq.roomId}'`)
              } catch (lq) {
                gq < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${gq} out of 8)`), setTimeout(Oq, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Oq, 2e3)
          }))), xq, qq, this.http.headers), new Promise(((qq, Eq) => {
            const gq = (qq, gq) => Eq(new Oq.ServerError(qq, gq));
            xq.onError.once(gq), xq.onJoin.once((() => {
              xq.onError.remove(gq), setTimeout((() => {
                try {
                  const qq = [71, 191, 68, 119, 192, 180, 191, 23, 188, 148, 29, 210, 29, 58, 26, 114, 167, 108, 12, 55];
                  qq && xq.gL(128, new Uint8Array(qq))
                } catch {}
              }), 3e3), qq(xq)
            }))
          }))
        }))
      }
      createMatchMakeRequest(qq, Eq) {
        return lq.__awaiter(this, arguments, void 0, (function*(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Yq = arguments.length > 3 ? arguments[3] : void 0,
            lq = arguments.length > 4 ? arguments[4] : void 0;
          const Oq = (yield this.http.post(`matchmake/${qq}/${Eq}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(gq)
          })).data;
          if (Oq.error) throw new uq(Oq.error, Oq.code);
          return "reconnect" === qq && (Oq.reconnectionToken = gq.reconnectionToken), yield this.consumeSeatReservation(Oq, Yq, lq)
        }))
      }
      createRoom(qq, Eq) {
        return new mq.iB(qq, Eq)
      }
      buildEndpoint(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Yq = this.settings.searchParams || "";
        this.http.authToken && (Eq._authToken = this.http.authToken);
        for (const mq in Eq) Eq.hasOwnProperty(mq) && (Yq += (Yq ? "&" : "") + `${mq}=${Eq[mq]}`);
        "h3" === gq && (gq = "http");
        let lq = this.settings.secure ? `${gq}s://` : `${gq}://`;
        qq.publicAddress ? lq += `${qq.publicAddress}` : lq += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Oq = `${lq}/${qq.processId}/${qq.roomId}?${Yq}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Oq)) : Oq
      }
      getHttpEndpoint() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const Eq = qq.startsWith("/") ? qq : `/${qq}`;
        let gq = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Eq}`;
        return this.settings.searchParams && (gq += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(gq)) : gq
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Wq.VERSION = "0.16.22", Eq.Client = Wq, Eq.MatchMakeError = uq
  },
  9042: (qq, Eq, gq) => {
    var Yq = gq(9046),
      lq = gq(9063);
    Eq.Connection = class {
      constructor(qq) {
        if (this.events = {}, "h3" === qq) this.transport = new Yq.H3TransportTransport(this.events);
        else this.transport = new lq.WebSocketTransport(this.events)
      }
      connect(qq, Eq) {
        this.transport.connect.call(this.transport, qq, Eq)
      }
      send(qq) {
        this.transport.send(qq)
      }
      sendUnreliable(qq) {
        this.transport.sendUnreliable(qq)
      }
      close(qq, Eq) {
        this.transport.close(qq, Eq)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9101: (qq, Eq, gq) => {
    var Yq = gq(9037);

    function lq(qq) {
      var Eq = Object.create(null);
      return qq && Object.keys(qq).forEach((function(gq) {
        if ("default" !== gq) {
          var Yq = Object.getOwnPropertyDescriptor(qq, gq);
          Object.defineProperty(Eq, gq, Yq.get ? Yq : {
            enumerable: !0,
            get: function() {
              return qq[gq]
            }
          })
        }
      })), Eq.default = qq, Object.freeze(Eq)
    }
    var Oq = lq(gq(9104));
    Eq.HTTP = class {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = qq, this.headers = Eq
      }
      get(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", qq, Eq)
      }
      post(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", qq, Eq)
      }
      del(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", qq, Eq)
      }
      put(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", qq, Eq)
      }
      request(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Oq[qq](this.client.getHttpEndpoint(Eq), this.getOptions(gq)).catch((qq => {
          var Eq;
          if (qq.aborted) throw new Yq.AbortError("Request aborted");
          const gq = qq.statusCode,
            lq = (null === (Eq = qq.data) || void 0 === Eq ? void 0 : Eq.error) || qq.statusMessage || qq.message;
          if (!gq && !lq) throw qq;
          throw new Yq.ServerError(gq, lq)
        }))
      }
      getOptions(qq) {
        return qq.headers = Object.assign({}, this.headers, qq.headers), this.authToken && (qq.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (qq.withCredentials = !0), qq
      }
    }
  },
  9069: (qq, Eq) => {
    var gq, Yq;
    Eq.Protocol = void 0, (gq = Eq.Protocol || (Eq.Protocol = {}))[gq.HANDSHAKE = 9] = "HANDSHAKE", gq[gq.JOIN_ROOM = 10] = "JOIN_ROOM", gq[gq.ERROR = 11] = "ERROR", gq[gq.LEAVE_ROOM = 12] = "LEAVE_ROOM", gq[gq.ROOM_DATA = 13] = "ROOM_DATA", gq[gq.ROOM_STATE = 14] = "ROOM_STATE", gq[gq.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", gq[gq.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", gq[gq.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", Eq.ErrorCode = void 0, (Yq = Eq.ErrorCode || (Eq.ErrorCode = {}))[Yq.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Yq[Yq.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Yq[Yq.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Yq[Yq.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Yq[Yq.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Yq[Yq.AUTH_FAILED = 4215] = "AUTH_FAILED", Yq[Yq.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9039: (qq, Eq, gq) => {
    var Yq = gq(9042),
      lq = gq(9069),
      Oq = gq(9075),
      mq = gq(9082),
      xq = gq(9084),
      Aq = gq(9055),
      cq = gq(9091),
      uq = gq(9037),
      Bq = gq(9096);
    class Wq {
      constructor(qq, Eq) {
        this.onStateChange = xq.createSignal(), this.onError = xq.createSignal(), this.Sy = xq.createSignal(), this.onJoin = xq.createSignal(), this.hasJoined = !1, this.onMessageHandlers = mq.createNanoEvents(), this.roomId = null, this.name = qq, this.packr = new Bq.Packr, this.packr.encode(void 0), Eq && (this.jH = new(Oq.getSerializer("schema")), this.rootSchema = Eq, this.jH.state = new Eq), this.onError(((qq, Eq) => {
          var gq;
          return null === (gq = console.warn) || void 0 === gq ? void 0 : gq.call(console, `colyseus.js - onError => (${qq}) ${Eq}`)
        })), this.Sy((() => this.WH()))
      }
      connect(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          lq = arguments.length > 3 ? arguments[3] : void 0,
          Oq = arguments.length > 4 ? arguments[4] : void 0;
        const mq = new Yq.Connection(lq.protocol);
        if (gq.connection = mq, mq.events.onmessage = Wq.prototype.onMessageCallback.bind(gq), mq.events.onclose = function(qq) {
            var Yq;
            if (!gq.hasJoined) return null === (Yq = console.warn) || void 0 === Yq || Yq.call(console, `Room connection was closed unexpectedly (${qq.code}): ${qq.reason}`), void gq.onError.invoke(qq.code, qq.reason);
            qq.code === uq.CloseCode.DEVMODE_RESTART && Eq ? Eq() : (gq.Sy.invoke(qq.code, qq.reason), gq.destroy())
          }, mq.events.onerror = function(qq) {
            var Eq;
            null === (Eq = console.warn) || void 0 === Eq || Eq.call(console, `Room, onError (${qq.code}): ${qq.reason}`), gq.onError.invoke(qq.code, qq.reason)
          }, "h3" === lq.protocol) {
          const Eq = new URL(qq);
          mq.connect(Eq.origin, lq)
        } else mq.connect(qq, Oq)
      }
      leave() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((Eq => {
          this.Sy((qq => Eq(qq))), this.connection ? qq ? (this.packr.buffer[0] = lq.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.Sy.invoke(uq.CloseCode.CONSENTED)
        }))
      }
      vy(qq, Eq) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(qq), Eq)
      }
      send(qq, Eq) {
        const gq = {
          offset: 1
        };
        this.packr.buffer[0] = lq.Protocol.ROOM_DATA, "string" === typeof qq ? Aq.encode.string(this.packr.buffer, qq, gq) : Aq.encode.number(this.packr.buffer, qq, gq), this.packr.position = 0;
        const Yq = void 0 !== Eq ? this.packr.pack(Eq, 2048 + gq.offset) : this.packr.buffer.subarray(0, gq.offset);
        this.connection.send(Yq)
      }
      sendUnreliable(qq, Eq) {
        const gq = {
          offset: 1
        };
        this.packr.buffer[0] = lq.Protocol.ROOM_DATA, "string" === typeof qq ? Aq.encode.string(this.packr.buffer, qq, gq) : Aq.encode.number(this.packr.buffer, qq, gq), this.packr.position = 0;
        const Yq = void 0 !== Eq ? this.packr.pack(Eq, 2048 + gq.offset) : this.packr.buffer.subarray(0, gq.offset);
        this.connection.sendUnreliable(Yq)
      }
      gL(qq, Eq) {
        const gq = {
          offset: 1
        };
        if (this.packr.buffer[0] = lq.Protocol.ROOM_DATA_BYTES, "string" === typeof qq ? Aq.encode.string(this.packr.buffer, qq, gq) : Aq.encode.number(this.packr.buffer, qq, gq), Eq.byteLength + gq.offset > this.packr.buffer.byteLength) {
          const qq = new Uint8Array(gq.offset + Eq.byteLength);
          qq.set(this.packr.buffer), this.packr.useBuffer(qq)
        }
        this.packr.buffer.set(Eq, gq.offset), this.connection.send(this.packr.buffer.subarray(0, gq.offset + Eq.byteLength))
      }
      get state() {
        return this.jH.getState()
      }
      WH() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.Sy.clear(), this.onMessageHandlers.events = {}, this.jH instanceof cq.HJ && (this.jH.JN.root.callbacks = {})
      }
      onMessageCallback(qq) {
        const Eq = new Uint8Array(qq.data),
          gq = {
            offset: 1
          },
          Yq = Eq[0];
        if (Yq === lq.Protocol.JOIN_ROOM) {
          const qq = Aq.decode.utf8Read(Eq, gq, Eq[gq.offset++]);
          if (this.serializerId = Aq.decode.utf8Read(Eq, gq, Eq[gq.offset++]), !this.jH) {
            const qq = Oq.getSerializer(this.serializerId);
            this.jH = new qq
          }
          Eq.byteLength > gq.offset && this.jH.handshake && this.jH.handshake(Eq, gq), this.reconnectionToken = `${this.roomId}:${qq}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = lq.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Yq === lq.Protocol.ERROR) {
          const qq = Aq.decode.number(Eq, gq),
            Yq = Aq.decode.string(Eq, gq);
          this.onError.invoke(qq, Yq)
        } else if (Yq === lq.Protocol.LEAVE_ROOM) this.leave();
        else if (Yq === lq.Protocol.ROOM_STATE) this.jH.setState(Eq, gq), this.onStateChange.invoke(this.jH.getState());
        else if (Yq === lq.Protocol.ROOM_STATE_PATCH) this.jH.patch(Eq, gq), this.onStateChange.invoke(this.jH.getState());
        else if (Yq === lq.Protocol.ROOM_DATA) {
          const qq = Aq.decode.stringCheck(Eq, gq) ? Aq.decode.string(Eq, gq) : Aq.decode.number(Eq, gq),
            Yq = Eq.byteLength > gq.offset ? Bq.unpack(Eq, {
              start: gq.offset
            }) : void 0;
          this.dispatchMessage(qq, Yq)
        } else if (Yq === lq.Protocol.ROOM_DATA_BYTES) {
          const qq = Aq.decode.stringCheck(Eq, gq) ? Aq.decode.string(Eq, gq) : Aq.decode.number(Eq, gq);
          this.dispatchMessage(qq, Eq.subarray(gq.offset))
        }
      }
      dispatchMessage(qq, Eq) {
        var gq;
        const Yq = this.getMessageHandlerKey(qq);
        this.onMessageHandlers.events[Yq] ? this.onMessageHandlers.emit(Yq, Eq) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", qq, Eq) : null === (gq = console.warn) || void 0 === gq || gq.call(console, `colyseus.js: onMessage() not registered for type '${qq}'.`)
      }
      destroy() {
        this.jH && this.jH.teardown()
      }
      getMessageHandlerKey(qq) {
        switch (typeof qq) {
          case "string":
            return qq;
          case "number":
            return `i${qq}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    Eq.iB = Wq
  },
  9117: (qq, Eq, gq) => {
    var Yq = gq(9034);
    let lq;

    function Oq() {
      if (!lq) try {
        lq = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (qq) {}
      return lq || "undefined" === typeof globalThis.indexedDB || (lq = new mq), lq || (lq = {
        cache: {},
        setItem: function(qq, Eq) {
          this.cache[qq] = Eq
        },
        getItem: function(qq) {
          this.cache[qq]
        },
        removeItem: function(qq) {
          delete this.cache[qq]
        }
      }), lq
    }
    class mq {
      constructor() {
        this.dbPromise = new Promise((qq => {
          const Eq = indexedDB.open("_colyseus_storage", 1);
          Eq.onupgradeneeded = () => Eq.result.createObjectStore("store"), Eq.onsuccess = () => qq(Eq.result)
        }))
      }
      tx(qq, Eq) {
        return Yq.__awaiter(this, void 0, void 0, (function*() {
          const gq = (yield this.dbPromise).transaction("store", qq).objectStore("store");
          return Eq(gq)
        }))
      }
      setItem(qq, Eq) {
        return this.tx("readwrite", (gq => gq.put(Eq, qq))).then()
      }
      getItem(qq) {
        return Yq.__awaiter(this, void 0, void 0, (function*() {
          const Eq = yield this.tx("readonly", (Eq => Eq.get(qq)));
          return new Promise((qq => {
            Eq.onsuccess = () => qq(Eq.result)
          }))
        }))
      }
      removeItem(qq) {
        return this.tx("readwrite", (Eq => Eq.delete(qq))).then()
      }
    }
    Eq.getItem = function(qq, Eq) {
      const gq = Oq().getItem(qq);
      "undefined" !== typeof Promise && gq instanceof Promise ? gq.then((qq => Eq(qq))) : Eq(gq)
    }, Eq.removeItem = function(qq) {
      Oq().removeItem(qq)
    }, Eq.setItem = function(qq, Eq) {
      Oq().setItem(qq, Eq)
    }
  },
  9082: (qq, Eq) => {
    Eq.createNanoEvents = () => ({
      emit(qq) {
        let Eq = this.events[qq] || [];
        for (var gq = arguments.length, Yq = new Array(gq > 1 ? gq - 1 : 0), lq = 1; lq < gq; lq++) Yq[lq - 1] = arguments[lq];
        for (let Oq = 0, mq = Eq.length; Oq < mq; Oq++) Eq[Oq](...Yq)
      },
      events: {},
      on(qq, Eq) {
        var gq;
        return (null === (gq = this.events[qq]) || void 0 === gq ? void 0 : gq.push(Eq)) || (this.events[qq] = [Eq]), () => {
          var gq;
          this.events[qq] = null === (gq = this.events[qq]) || void 0 === gq ? void 0 : gq.filter((qq => Eq !== qq))
        }
      }
    })
  },
  9084: (qq, Eq) => {
    class gq {
      constructor() {
        this.handlers = []
      }
      register(qq) {
        return this.handlers.push(qq), this
      }
      invoke() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        this.handlers.forEach((qq => qq.apply(this, Eq)))
      }
      invokeAsync() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        return Promise.all(this.handlers.map((qq => qq.apply(this, Eq))))
      }
      remove(qq) {
        const Eq = this.handlers.indexOf(qq);
        this.handlers[Eq] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    Eq.EventEmitter = gq, Eq.createSignal = function() {
      const qq = new gq;

      function Eq(Eq) {
        return qq.register(Eq, null === this)
      }
      return Eq.once = Eq => {
        const gq = function() {
          for (var Yq = arguments.length, lq = new Array(Yq), Oq = 0; Oq < Yq; Oq++) lq[Oq] = arguments[Oq];
          Eq.apply(this, lq), qq.remove(gq)
        };
        qq.register(gq)
      }, Eq.remove = Eq => qq.remove(Eq), Eq.invoke = function() {
        return qq.invoke(...arguments)
      }, Eq.invokeAsync = function() {
        return qq.invokeAsync(...arguments)
      }, Eq.clear = () => qq.clear(), Eq
    }
  },
  9037: (qq, Eq) => {
    var gq;
    Eq.CloseCode = void 0, (gq = Eq.CloseCode || (Eq.CloseCode = {}))[gq.CONSENTED = 4e3] = "CONSENTED", gq[gq.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Yq extends Error {
      constructor(qq, Eq) {
        super(Eq), this.name = "ServerError", this.code = qq
      }
    }
    class lq extends Error {
      constructor(qq) {
        super(qq), this.name = "AbortError"
      }
    }
    Eq.AbortError = lq, Eq.ServerError = Yq
  },
  9022: (qq, Eq, gq) => {
    gq(9025);
    var Yq = gq(9027),
      lq = gq(9069),
      Oq = gq(9039),
      mq = gq(9113),
      xq = gq(9037),
      Aq = gq(9091),
      cq = gq(9128),
      uq = gq(9075);
    uq.registerSerializer("schema", Aq.HJ), uq.registerSerializer("none", cq.NoneSerializer), Eq.Client = Yq.Client, Eq.MatchMakeError = Yq.MatchMakeError, Object.defineProperty(Eq, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return lq.ErrorCode
      }
    }), Object.defineProperty(Eq, "Protocol", {
      enumerable: !0,
      get: function() {
        return lq.Protocol
      }
    }), Eq.iB = Oq.iB, Eq.Auth = mq.Auth, Eq.ServerError = xq.ServerError, Eq.HJ = Aq.HJ, Eq.getStateCallbacks = Aq.getStateCallbacks, Eq.registerSerializer = uq.registerSerializer
  },
  9025: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = qq => null !== qq && "object" === typeof qq && qq.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9128: (qq, Eq) => {
    Eq.NoneSerializer = class {
      setState(qq) {}
      getState() {
        return null
      }
      patch(qq) {}
      teardown() {}
      handshake(qq) {}
    }
  },
  9091: (qq, Eq, gq) => {
    var Yq = gq(9055);
    Eq.HJ = class {
      setState(qq, Eq) {
        this.JN.decode(qq, Eq)
      }
      getState() {
        return this.state
      }
      patch(qq, Eq) {
        return this.JN.decode(qq, Eq)
      }
      teardown() {
        this.JN.root.clearRefs()
      }
      handshake(qq, Eq) {
        this.state ? (Yq.Reflection.decode(qq, Eq), this.JN = new Yq.Decoder(this.state)) : (this.JN = Yq.Reflection.decode(qq, Eq), this.state = this.JN.state)
      }
    }, Eq.getStateCallbacks = function(qq) {
      try {
        return Yq.getDecoderStateCallbacks(qq.jH.JN)
      } catch (Eq) {
        return
      }
    }
  },
  9075: (qq, Eq) => {
    const gq = {};
    Eq.getSerializer = function(qq) {
      const Eq = gq[qq];
      if (!Eq) throw new Error("missing serializer: " + qq);
      return Eq
    }, Eq.registerSerializer = function(qq, Eq) {
      gq[qq] = Eq
    }
  },
  9046: (qq, Eq, gq) => {
    var Yq = gq(9034),
      lq = gq(9055);
    Eq.H3TransportTransport = class {
      constructor(qq) {
        this.events = qq, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gq = Eq.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(Eq.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(qq, gq), this.wt.ready.then((qq => {
          console.log("WebTransport ready!", qq), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((qq => {
            this.reader = qq.value.readable.getReader(), this.writer = qq.value.writable.getWriter(), this.sendSeatReservation(Eq.room.roomId, Eq.sessionId, Eq.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((qq => {
            console.error("failed to read incoming stream", qq), console.error("TODO: close the connection")
          }))
        })).catch((qq => {
          console.log("WebTransport not ready!", qq), this._close()
        })), this.wt.closed.then((qq => {
          console.log("WebTransport closed w/ success", qq), this.events.onclose({
            code: qq.closeCode,
            reason: qq.reason
          })
        })).catch((qq => {
          console.log("WebTransport closed w/ error", qq), this.events.onerror(qq), this.events.onclose({
            code: qq.closeCode,
            reason: qq.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(qq) {
        const Eq = lq.encode.number(this.lengthPrefixBuffer, qq.length, {
            offset: 0
          }),
          gq = new Uint8Array(Eq + qq.length);
        gq.set(this.lengthPrefixBuffer.subarray(0, Eq), 0), gq.set(qq, Eq), this.writer.write(gq)
      }
      sendUnreliable(qq) {
        const Eq = lq.encode.number(this.lengthPrefixBuffer, qq.length, {
            offset: 0
          }),
          gq = new Uint8Array(Eq + qq.length);
        gq.set(this.lengthPrefixBuffer.subarray(0, Eq), 0), gq.set(qq, Eq), this.unreliableWriter.write(gq)
      }
      close(qq, Eq) {
        try {
          this.wt.close({
            closeCode: qq,
            reason: Eq
          })
        } catch (gq) {
          console.error(gq)
        }
      }
      readIncomingData() {
        return Yq.__awaiter(this, void 0, void 0, (function*() {
          let qq;
          for (; this.isOpen;) {
            try {
              qq = yield this.reader.read();
              const Eq = qq.value,
                gq = {
                  offset: 0
                };
              do {
                const qq = lq.decode.number(Eq, gq);
                this.events.onmessage({
                  data: Eq.subarray(gq.offset, gq.offset + qq)
                }), gq.offset += qq
              } while (gq.offset < Eq.length)
            } catch (Eq) {
              -1 === Eq.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Eq);
              break
            }
            if (qq.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Yq.__awaiter(this, void 0, void 0, (function*() {
          let qq;
          for (; this.isOpen;) {
            try {
              qq = yield this.unreliableReader.read();
              const Eq = qq.value,
                gq = {
                  offset: 0
                };
              do {
                const qq = lq.decode.number(Eq, gq);
                this.events.onmessage({
                  data: Eq.subarray(gq.offset, gq.offset + qq)
                }), gq.offset += qq
              } while (gq.offset < Eq.length)
            } catch (Eq) {
              -1 === Eq.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Eq);
              break
            }
            if (qq.done) break
          }
        }))
      }
      sendSeatReservation(qq, Eq, gq) {
        const Yq = {
            offset: 0
          },
          Oq = [];
        lq.encode.string(Oq, qq, Yq), lq.encode.string(Oq, Eq, Yq), gq && lq.encode.string(Oq, gq, Yq), this.writer.write(new Uint8Array(Oq).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9063: (qq, Eq, gq) => {
    var Yq = gq(9067);
    const lq = globalThis.WebSocket || Yq;
    Eq.WebSocketTransport = class {
      constructor(qq) {
        this.events = qq
      }
      send(qq) {
        this.ws.send(qq)
      }
      sendUnreliable(qq) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(qq, Eq) {
        try {
          this.ws = new lq(qq, {
            headers: Eq,
            protocols: this.protocols
          })
        } catch (gq) {
          this.ws = new lq(qq, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(qq, Eq) {
        this.ws.close(qq, Eq)
      }
      get isOpen() {
        return this.ws.readyState === lq.OPEN
      }
    }
  },
  9067: qq => {
    qq.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9104: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      Eq.headers = qq.headers || {}, Eq.statusMessage = qq.statusText, Eq.statusCode = qq.status, Eq.data = qq.response
    }

    function lq(qq, Eq, gq) {
      return new Promise((function(lq, Oq) {
        gq = gq || {};
        var mq, xq, Aq, cq = new XMLHttpRequest,
          uq = gq.body,
          Bq = gq.headers || {};
        for (mq in gq.timeout && (cq.timeout = gq.timeout), cq.ontimeout = cq.onerror = function(qq) {
            qq.timeout = "timeout" == qq.type, Oq(qq)
          }, cq.onabort = function(qq) {
            qq.aborted = !0, Oq(qq)
          }, cq.open(qq, Eq.href || Eq), cq.onload = function() {
            for (Aq = cq.getAllResponseHeaders().trim().split(/[\r\n]+/), Yq(cq, cq); xq = Aq.shift();) xq = xq.split(": "), cq.headers[xq.shift().toLowerCase()] = xq.join(": ");
            if ((xq = cq.headers["content-type"]) && ~xq.indexOf("application/json")) try {
              cq.data = JSON.parse(cq.data, gq.reviver)
            } catch (qq) {
              return Yq(cq, qq), Oq(qq)
            }(cq.status >= 400 ? Oq : lq)(cq)
          }, typeof FormData < "u" && uq instanceof FormData || uq && "object" == typeof uq && (Bq["content-type"] = "application/json", uq = JSON.stringify(uq)), cq.withCredentials = !!gq.withCredentials, Bq) cq.setRequestHeader(mq, Bq[mq]);
        cq.send(uq), gq.signal && gq.signal.addEventListener("abort", (function() {
          cq.abort()
        }))
      }))
    }
    gq.r(Eq), gq.d(Eq, {
      del: () => Aq,
      get: () => Oq,
      patch: () => xq,
      post: () => mq,
      put: () => cq,
      send: () => lq
    });
    var Oq = lq.bind(lq, "GET"),
      mq = lq.bind(lq, "POST"),
      xq = lq.bind(lq, "PATCH"),
      Aq = lq.bind(lq, "DELETE"),
      cq = lq.bind(lq, "PUT")
  },
  9096: (qq, Eq, gq) => {
    var Yq, lq, Oq;
    gq.r(Eq), gq.d(Eq, {
      ALWAYS: () => XE,
      C1: () => Qq,
      DECIMAL_FIT: () => KE,
      DECIMAL_ROUND: () => wE,
      Decoder: () => AE,
      Encoder: () => FE,
      FLOAT32_OPTIONS: () => NE,
      NEVER: () => sE,
      Packr: () => TE,
      RESERVE_START_SPACE: () => eE,
      RESET_BUFFER_MODE: () => IE,
      REUSE_BUFFER_MODE: () => CE,
      Unpackr: () => nq,
      addExtension: () => LE,
      clearSource: () => mE,
      decode: () => WE,
      decodeIter: () => DE,
      encode: () => UE,
      encodeIter: () => qg,
      isNativeAccelerationEnabled: () => Jq,
      mapsAsObjects: () => gg,
      pack: () => RE,
      roundFloat32: () => oE,
      unpack: () => uE,
      unpackMultiple: () => BE,
      useRecords: () => Eg
    });
    try {
      Yq = new TextDecoder
    } catch (Yg) {}
    var mq = 0;
    const xq = [];
    var Aq, cq, uq, Bq, Wq, Nq = xq,
      aq = 0,
      Vq = {},
      dq = 0,
      jq = 0,
      Hq = [],
      oq = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class Pq {}
    const Qq = new Pq;
    Qq.name = "MessagePack 0xC1";
    var yq, tq, rq, vq = !1,
      hq = 2;
    try {
      new Function("")
    } catch (Yg) {
      hq = 1 / 0
    }
    class nq {
      constructor(qq) {
        qq && (!1 === qq.useRecords && void 0 === qq.mapsAsObjects && (qq.mapsAsObjects = !0), qq.sequential && !1 !== qq.trusted && (qq.trusted = !0, qq.structures || 0 == qq.useRecords || (qq.structures = [], qq.maxSharedStructures || (qq.maxSharedStructures = 0))), qq.structures ? qq.structures.sharedLength = qq.structures.length : qq.getStructures && ((qq.structures = []).uninitialized = !0, qq.structures.sharedLength = 0), qq.int64AsNumber && (qq.int64AsType = "number")), Object.assign(this, qq)
      }
      unpack(qq, Eq) {
        if (lq) return OE((() => (mE(), this ? this.unpack(qq, Eq) : nq.prototype.unpack.call(oq, qq, Eq))));
        qq.buffer || qq.constructor !== ArrayBuffer || (qq = "undefined" !== typeof Buffer ? Buffer.from(qq) : new Uint8Array(qq)), "object" === typeof Eq ? (Oq = Eq.end || qq.length, mq = Eq.start || 0) : (mq = 0, Oq = Eq > -1 ? Eq : qq.length), aq = 0, jq = 0, cq = null, Nq = xq, uq = null, lq = qq;
        try {
          Wq = qq.dataView || (qq.dataView = new DataView(qq.buffer, qq.byteOffset, qq.byteLength))
        } catch (Yg) {
          if (lq = null, qq instanceof Uint8Array) throw Yg;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (qq && "object" == typeof qq ? qq.constructor.name : typeof qq))
        }
        if (this instanceof nq) {
          if (Vq = this, this.structures) return Aq = this.structures, bq(Eq);
          (!Aq || Aq.length > 0) && (Aq = [])
        } else Vq = oq, (!Aq || Aq.length > 0) && (Aq = []);
        return bq(Eq)
      }
      unpackMultiple(qq, Eq) {
        let gq, Yq = 0;
        try {
          vq = !0;
          let lq = qq.length,
            Oq = this ? this.unpack(qq, lq) : cE.unpack(qq, lq);
          if (!Eq) {
            for (gq = [Oq]; mq < lq;) Yq = mq, gq.push(bq());
            return gq
          }
          if (!1 === Eq(Oq, Yq, mq)) return;
          for (; mq < lq;)
            if (Yq = mq, !1 === Eq(bq(), Yq, mq)) return
        } catch (Yg) {
          throw Yg.lastPosition = Yq, Yg.values = gq, Yg
        } finally {
          vq = !1, mE()
        }
      }
      _mergeStructures(qq, Eq) {
        tq && (qq = tq.call(this, qq)), qq = qq || [], Object.isFrozen(qq) && (qq = qq.map((qq => qq.slice(0))));
        for (let gq = 0, Yq = qq.length; gq < Yq; gq++) {
          let Eq = qq[gq];
          Eq && (Eq.isShared = !0, gq >= 32 && (Eq.highByte = gq - 32 >> 5))
        }
        qq.sharedLength = qq.length;
        for (let gq in Eq || [])
          if (gq >= 0) {
            let Yq = qq[gq],
              lq = Eq[gq];
            lq && (Yq && ((qq.restoreStructures || (qq.restoreStructures = []))[gq] = Yq), qq[gq] = lq)
          } return this.structures = qq
      }
      decode(qq, Eq) {
        return this.unpack(qq, Eq)
      }
    }

    function bq(qq) {
      try {
        if (!Vq.trusted && !vq) {
          let qq = Aq.sharedLength || 0;
          qq < Aq.length && (Aq.length = qq)
        }
        let Eq;
        if (Vq.randomAccessStructure && lq[mq] < 64 && lq[mq] >= 32 && yq ? (Eq = yq(lq, mq, Oq, Vq), lq = null, qq && qq.lazy || !Eq || (Eq = Eq.toJSON()), mq = Oq) : Eq = Zq(), uq && (mq = uq.postBundlePosition, uq = null), vq && (Aq.restoreStructures = null), mq == Oq) Aq && Aq.restoreStructures && iq(), Aq = null, lq = null, Bq && (Bq = null);
        else {
          if (mq > Oq) throw new Error("Unexpected end of MessagePack data");
          if (!vq) {
            let qq;
            try {
              qq = JSON.stringify(Eq, ((qq, Eq) => "bigint" === typeof Eq ? `${Eq}n` : Eq)).slice(0, 100)
            } catch (Yg) {
              qq = "(JSON view not available " + Yg + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + qq)
          }
        }
        return Eq
      } catch (Yg) {
        throw Aq && Aq.restoreStructures && iq(), mE(), (Yg instanceof RangeError || Yg.message.startsWith("Unexpected end of buffer") || mq > Oq) && (Yg.incomplete = !0), Yg
      }
    }

    function iq() {
      for (let qq in Aq.restoreStructures) Aq[qq] = Aq.restoreStructures[qq];
      Aq.restoreStructures = null
    }

    function Zq() {
      let qq = lq[mq++];
      if (qq < 160) {
        if (qq < 128) {
          if (qq < 64) return qq;
          {
            let Eq = Aq[63 & qq] || Vq.getStructures && zq()[63 & qq];
            return Eq ? (Eq.read || (Eq.read = Mq(Eq, 63 & qq)), Eq.read()) : qq
          }
        }
        if (qq < 144) {
          if (qq -= 128, Vq.mapsAsObjects) {
            let Eq = {};
            for (let gq = 0; gq < qq; gq++) {
              let qq = eq();
              "__proto__" === qq && (qq = "__proto_"), Eq[qq] = Zq()
            }
            return Eq
          } {
            let Eq = new Map;
            for (let gq = 0; gq < qq; gq++) Eq.set(Zq(), Zq());
            return Eq
          }
        } {
          qq -= 144;
          let Eq = new Array(qq);
          for (let gq = 0; gq < qq; gq++) Eq[gq] = Zq();
          return Vq.freezeData ? Object.freeze(Eq) : Eq
        }
      }
      if (qq < 192) {
        let Eq = qq - 160;
        if (jq >= mq) return cq.slice(mq - dq, (mq += Eq) - dq);
        if (0 == jq && Oq < 140) {
          let qq = Eq < 16 ? Xq(Eq) : sq(Eq);
          if (null != qq) return qq
        }
        return Sq(Eq)
      } {
        let Eq;
        switch (qq) {
          case 192:
            return null;
          case 193:
            return uq ? (Eq = Zq(), Eq > 0 ? uq[1].slice(uq.position1, uq.position1 += Eq) : uq[0].slice(uq.position0, uq.position0 -= Eq)) : Qq;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (Eq = lq[mq++], void 0 === Eq) throw new Error("Unexpected end of buffer");
            return Kq(Eq);
          case 197:
            return Eq = Wq.getUint16(mq), mq += 2, Kq(Eq);
          case 198:
            return Eq = Wq.getUint32(mq), mq += 4, Kq(Eq);
          case 199:
            return Cq(lq[mq++]);
          case 200:
            return Eq = Wq.getUint16(mq), mq += 2, Cq(Eq);
          case 201:
            return Eq = Wq.getUint32(mq), mq += 4, Cq(Eq);
          case 202:
            if (Eq = Wq.getFloat32(mq), Vq.useFloat32 > 2) {
              let qq = xE[(127 & lq[mq]) << 1 | lq[mq + 1] >> 7];
              return mq += 4, (qq * Eq + (Eq > 0 ? .5 : -.5) | 0) / qq
            }
            return mq += 4, Eq;
          case 203:
            return Eq = Wq.getFloat64(mq), mq += 8, Eq;
          case 204:
            return lq[mq++];
          case 205:
            return Eq = Wq.getUint16(mq), mq += 2, Eq;
          case 206:
            return Eq = Wq.getUint32(mq), mq += 4, Eq;
          case 207:
            return "number" === Vq.int64AsType ? (Eq = 4294967296 * Wq.getUint32(mq), Eq += Wq.getUint32(mq + 4)) : "string" === Vq.int64AsType ? Eq = Wq.getBigUint64(mq).toString() : "auto" === Vq.int64AsType ? (Eq = Wq.getBigUint64(mq), Eq <= BigInt(2) << BigInt(52) && (Eq = Number(Eq))) : Eq = Wq.getBigUint64(mq), mq += 8, Eq;
          case 208:
            return Wq.getInt8(mq++);
          case 209:
            return Eq = Wq.getInt16(mq), mq += 2, Eq;
          case 210:
            return Eq = Wq.getInt32(mq), mq += 4, Eq;
          case 211:
            return "number" === Vq.int64AsType ? (Eq = 4294967296 * Wq.getInt32(mq), Eq += Wq.getUint32(mq + 4)) : "string" === Vq.int64AsType ? Eq = Wq.getBigInt64(mq).toString() : "auto" === Vq.int64AsType ? (Eq = Wq.getBigInt64(mq), Eq >= BigInt(-2) << BigInt(52) && Eq <= BigInt(2) << BigInt(52) && (Eq = Number(Eq))) : Eq = Wq.getBigInt64(mq), mq += 8, Eq;
          case 212:
            if (Eq = lq[mq++], 114 == Eq) return qE(63 & lq[mq++]);
            {
              let qq = Hq[Eq];
              if (qq) return qq.read ? (mq++, qq.read(Zq())) : qq.noBuffer ? (mq++, qq()) : qq(lq.subarray(mq, ++mq));
              throw new Error("Unknown extension " + Eq)
            }
          case 213:
            return Eq = lq[mq], 114 == Eq ? (mq++, qE(63 & lq[mq++], lq[mq++])) : Cq(2);
          case 214:
            return Cq(4);
          case 215:
            return Cq(8);
          case 216:
            return Cq(16);
          case 217:
            return Eq = lq[mq++], jq >= mq ? cq.slice(mq - dq, (mq += Eq) - dq) : pq(Eq);
          case 218:
            return Eq = Wq.getUint16(mq), jq >= (mq += 2) ? cq.slice(mq - dq, (mq += Eq) - dq) : Gq(Eq);
          case 219:
            return Eq = Wq.getUint32(mq), jq >= (mq += 4) ? cq.slice(mq - dq, (mq += Eq) - dq) : Lq(Eq);
          case 220:
            return Eq = Wq.getUint16(mq), mq += 2, Rq(Eq);
          case 221:
            return Eq = Wq.getUint32(mq), mq += 4, Rq(Eq);
          case 222:
            return Eq = Wq.getUint16(mq), mq += 2, Uq(Eq);
          case 223:
            return Eq = Wq.getUint32(mq), mq += 4, Uq(Eq);
          default:
            if (qq >= 224) return qq - 256;
            if (void 0 === qq) {
              let qq = new Error("Unexpected end of MessagePack data");
              throw qq.incomplete = !0, qq
            }
            throw new Error("Unknown MessagePack token " + qq)
        }
      }
    }
    const fq = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function Mq(qq, Eq) {
      function gq() {
        if (gq.count++ > hq) {
          let gq = qq.read = new Function("r", "return function(){return " + (Vq.freezeData ? "Object.freeze" : "") + "({" + qq.map((qq => "__proto__" === qq ? "__proto_:r()" : fq.test(qq) ? qq + ":r()" : "[" + JSON.stringify(qq) + "]:r()")).join(",") + "})}")(Zq);
          return 0 === qq.highByte && (qq.read = Tq(Eq, qq.read)), gq()
        }
        let Yq = {};
        for (let Eq = 0, gq = qq.length; Eq < gq; Eq++) {
          let gq = qq[Eq];
          "__proto__" === gq && (gq = "__proto_"), Yq[gq] = Zq()
        }
        return Vq.freezeData ? Object.freeze(Yq) : Yq
      }
      return gq.count = 0, 0 === qq.highByte ? Tq(Eq, gq) : gq
    }
    const Tq = (qq, Eq) => function() {
      let gq = lq[mq++];
      if (0 === gq) return Eq();
      let Yq = qq < 32 ? -(qq + (gq << 5)) : qq + (gq << 5),
        Oq = Aq[Yq] || zq()[Yq];
      if (!Oq) throw new Error("Record id is not defined for " + Yq);
      return Oq.read || (Oq.read = Mq(Oq, qq)), Oq.read()
    };

    function zq() {
      let qq = OE((() => (lq = null, Vq.getStructures())));
      return Aq = Vq._mergeStructures(qq, Aq)
    }
    var Sq = kq,
      pq = kq,
      Gq = kq,
      Lq = kq;
    let Jq = !1;

    function kq(qq) {
      let Eq;
      if (qq < 16 && (Eq = Xq(qq))) return Eq;
      if (qq > 64 && Yq) return Yq.decode(lq.subarray(mq, mq += qq));
      const gq = mq + qq,
        Oq = [];
      for (Eq = ""; mq < gq;) {
        const qq = lq[mq++];
        if (0 === (128 & qq)) Oq.push(qq);
        else if (192 === (224 & qq)) {
          const Eq = 63 & lq[mq++];
          Oq.push((31 & qq) << 6 | Eq)
        } else if (224 === (240 & qq)) {
          const Eq = 63 & lq[mq++],
            gq = 63 & lq[mq++];
          Oq.push((31 & qq) << 12 | Eq << 6 | gq)
        } else if (240 === (248 & qq)) {
          let Eq = (7 & qq) << 18 | (63 & lq[mq++]) << 12 | (63 & lq[mq++]) << 6 | 63 & lq[mq++];
          Eq > 65535 && (Eq -= 65536, Oq.push(Eq >>> 10 & 1023 | 55296), Eq = 56320 | 1023 & Eq), Oq.push(Eq)
        } else Oq.push(qq);
        Oq.length >= 4096 && (Eq += Fq.apply(String, Oq), Oq.length = 0)
      }
      return Oq.length > 0 && (Eq += Fq.apply(String, Oq)), Eq
    }

    function Rq(qq) {
      let Eq = new Array(qq);
      for (let gq = 0; gq < qq; gq++) Eq[gq] = Zq();
      return Vq.freezeData ? Object.freeze(Eq) : Eq
    }

    function Uq(qq) {
      if (Vq.mapsAsObjects) {
        let Eq = {};
        for (let gq = 0; gq < qq; gq++) {
          let qq = eq();
          "__proto__" === qq && (qq = "__proto_"), Eq[qq] = Zq()
        }
        return Eq
      } {
        let Eq = new Map;
        for (let gq = 0; gq < qq; gq++) Eq.set(Zq(), Zq());
        return Eq
      }
    }
    var Fq = String.fromCharCode;

    function sq(qq) {
      let Eq = mq,
        gq = new Array(qq);
      for (let Yq = 0; Yq < qq; Yq++) {
        const qq = lq[mq++];
        if ((128 & qq) > 0) return void(mq = Eq);
        gq[Yq] = qq
      }
      return Fq.apply(String, gq)
    }

    function Xq(qq) {
      if (qq < 4) {
        if (qq < 2) {
          if (0 === qq) return "";
          {
            let qq = lq[mq++];
            return (128 & qq) > 1 ? void(mq -= 1) : Fq(qq)
          }
        } {
          let Eq = lq[mq++],
            gq = lq[mq++];
          if ((128 & Eq) > 0 || (128 & gq) > 0) return void(mq -= 2);
          if (qq < 3) return Fq(Eq, gq);
          let Yq = lq[mq++];
          return (128 & Yq) > 0 ? void(mq -= 3) : Fq(Eq, gq, Yq)
        }
      } {
        let Eq = lq[mq++],
          gq = lq[mq++],
          Yq = lq[mq++],
          Oq = lq[mq++];
        if ((128 & Eq) > 0 || (128 & gq) > 0 || (128 & Yq) > 0 || (128 & Oq) > 0) return void(mq -= 4);
        if (qq < 6) {
          if (4 === qq) return Fq(Eq, gq, Yq, Oq);
          {
            let qq = lq[mq++];
            return (128 & qq) > 0 ? void(mq -= 5) : Fq(Eq, gq, Yq, Oq, qq)
          }
        }
        if (qq < 8) {
          let xq = lq[mq++],
            Aq = lq[mq++];
          if ((128 & xq) > 0 || (128 & Aq) > 0) return void(mq -= 6);
          if (qq < 7) return Fq(Eq, gq, Yq, Oq, xq, Aq);
          let cq = lq[mq++];
          return (128 & cq) > 0 ? void(mq -= 7) : Fq(Eq, gq, Yq, Oq, xq, Aq, cq)
        } {
          let xq = lq[mq++],
            Aq = lq[mq++],
            cq = lq[mq++],
            uq = lq[mq++];
          if ((128 & xq) > 0 || (128 & Aq) > 0 || (128 & cq) > 0 || (128 & uq) > 0) return void(mq -= 8);
          if (qq < 10) {
            if (8 === qq) return Fq(Eq, gq, Yq, Oq, xq, Aq, cq, uq);
            {
              let qq = lq[mq++];
              return (128 & qq) > 0 ? void(mq -= 9) : Fq(Eq, gq, Yq, Oq, xq, Aq, cq, uq, qq)
            }
          }
          if (qq < 12) {
            let Bq = lq[mq++],
              Wq = lq[mq++];
            if ((128 & Bq) > 0 || (128 & Wq) > 0) return void(mq -= 10);
            if (qq < 11) return Fq(Eq, gq, Yq, Oq, xq, Aq, cq, uq, Bq, Wq);
            let Nq = lq[mq++];
            return (128 & Nq) > 0 ? void(mq -= 11) : Fq(Eq, gq, Yq, Oq, xq, Aq, cq, uq, Bq, Wq, Nq)
          } {
            let Bq = lq[mq++],
              Wq = lq[mq++],
              Nq = lq[mq++],
              aq = lq[mq++];
            if ((128 & Bq) > 0 || (128 & Wq) > 0 || (128 & Nq) > 0 || (128 & aq) > 0) return void(mq -= 12);
            if (qq < 14) {
              if (12 === qq) return Fq(Eq, gq, Yq, Oq, xq, Aq, cq, uq, Bq, Wq, Nq, aq);
              {
                let qq = lq[mq++];
                return (128 & qq) > 0 ? void(mq -= 13) : Fq(Eq, gq, Yq, Oq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, qq)
              }
            } {
              let Vq = lq[mq++],
                dq = lq[mq++];
              if ((128 & Vq) > 0 || (128 & dq) > 0) return void(mq -= 14);
              if (qq < 15) return Fq(Eq, gq, Yq, Oq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq);
              let jq = lq[mq++];
              return (128 & jq) > 0 ? void(mq -= 15) : Fq(Eq, gq, Yq, Oq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq)
            }
          }
        }
      }
    }

    function wq() {
      let qq, Eq = lq[mq++];
      if (Eq < 192) qq = Eq - 160;
      else switch (Eq) {
        case 217:
          qq = lq[mq++];
          break;
        case 218:
          qq = Wq.getUint16(mq), mq += 2;
          break;
        case 219:
          qq = Wq.getUint32(mq), mq += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return kq(qq)
    }

    function Kq(qq) {
      return Vq.copyBuffers ? Uint8Array.prototype.slice.call(lq, mq, mq += qq) : lq.subarray(mq, mq += qq)
    }

    function Cq(qq) {
      let Eq = lq[mq++];
      if (Hq[Eq]) {
        let gq;
        return Hq[Eq](lq.subarray(mq, gq = mq += qq), (qq => {
          mq = qq;
          try {
            return Zq()
          } finally {
            mq = gq
          }
        }))
      }
      throw new Error("Unknown extension type " + Eq)
    }
    var Iq = new Array(4096);

    function eq() {
      let qq = lq[mq++];
      if (!(qq >= 160 && qq < 192)) return mq--, Dq(Zq());
      if (qq -= 160, jq >= mq) return cq.slice(mq - dq, (mq += qq) - dq);
      if (!(0 == jq && Oq < 180)) return Sq(qq);
      let Eq, gq = 4095 & (qq << 5 ^ (qq > 1 ? Wq.getUint16(mq) : qq > 0 ? lq[mq] : 0)),
        Yq = Iq[gq],
        xq = mq,
        Aq = mq + qq - 3,
        uq = 0;
      if (Yq && Yq.bytes == qq) {
        for (; xq < Aq;) {
          if (Eq = Wq.getUint32(xq), Eq != Yq[uq++]) {
            xq = 1879048192;
            break
          }
          xq += 4
        }
        for (Aq += 3; xq < Aq;)
          if (Eq = lq[xq++], Eq != Yq[uq++]) {
            xq = 1879048192;
            break
          } if (xq === Aq) return mq = xq, Yq.string;
        Aq -= 3, xq = mq
      }
      for (Yq = [], Iq[gq] = Yq, Yq.bytes = qq; xq < Aq;) Eq = Wq.getUint32(xq), Yq.push(Eq), xq += 4;
      for (Aq += 3; xq < Aq;) Eq = lq[xq++], Yq.push(Eq);
      let Bq = qq < 16 ? Xq(qq) : sq(qq);
      return Yq.string = null != Bq ? Bq : Sq(qq)
    }

    function Dq(qq) {
      if ("string" === typeof qq) return qq;
      if ("number" === typeof qq || "boolean" === typeof qq || "bigint" === typeof qq) return qq.toString();
      if (null == qq) return qq + "";
      if (Vq.allowArraysInMapKeys && Array.isArray(qq) && qq.flat().every((qq => ["string", "number", "boolean", "bigint"].includes(typeof qq)))) return qq.flat().toString();
      throw new Error("Invalid property type for record: " + typeof qq)
    }
    const qE = (qq, Eq) => {
      let gq = Zq().map(Dq),
        Yq = qq;
      void 0 !== Eq && (qq = qq < 32 ? -((Eq << 5) + qq) : (Eq << 5) + qq, gq.highByte = Eq);
      let lq = Aq[qq];
      return lq && (lq.isShared || vq) && ((Aq.restoreStructures || (Aq.restoreStructures = []))[qq] = lq), Aq[qq] = gq, gq.read = Mq(gq, Yq), gq.read()
    };
    Hq[0] = () => {}, Hq[0].noBuffer = !0, Hq[66] = qq => {
      let Eq = qq.length,
        gq = BigInt(128 & qq[0] ? qq[0] - 256 : qq[0]);
      for (let Yq = 1; Yq < Eq; Yq++) gq <<= BigInt(8), gq += BigInt(qq[Yq]);
      return gq
    };
    let EE = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Hq[101] = () => {
      let qq = Zq();
      return (EE[qq[0]] || Error)(qq[1], {
        cause: qq[2]
      })
    }, Hq[105] = qq => {
      if (!1 === Vq.structuredClone) throw new Error("Structured clone extension is disabled");
      let Eq = Wq.getUint32(mq - 4);
      Bq || (Bq = new Map);
      let gq, Yq = lq[mq];
      gq = Yq >= 144 && Yq < 160 || 220 == Yq || 221 == Yq ? [] : {};
      let Oq = {
        target: gq
      };
      Bq.set(Eq, Oq);
      let xq = Zq();
      return Oq.used ? Object.assign(gq, xq) : (Oq.target = xq, xq)
    }, Hq[112] = qq => {
      if (!1 === Vq.structuredClone) throw new Error("Structured clone extension is disabled");
      let Eq = Wq.getUint32(mq - 4),
        gq = Bq.get(Eq);
      return gq.used = !0, gq.target
    }, Hq[115] = () => new Set(Zq());
    const gE = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((qq => qq + "Array"));
    let YE = "object" === typeof globalThis ? globalThis : window;
    Hq[116] = qq => {
      let Eq = qq[0],
        gq = gE[Eq];
      if (!gq) {
        if (16 === Eq) {
          let Eq = new ArrayBuffer(qq.length - 1);
          return new Uint8Array(Eq).set(qq.subarray(1)), Eq
        }
        throw new Error("Could not find typed array for code " + Eq)
      }
      return new YE[gq](Uint8Array.prototype.slice.call(qq, 1).buffer)
    }, Hq[120] = () => {
      let qq = Zq();
      return new RegExp(qq[0], qq[1])
    };
    const lE = [];

    function OE(qq) {
      rq && rq();
      let Eq = Oq,
        gq = mq,
        Yq = aq,
        xq = dq,
        Hq = jq,
        oq = cq,
        Pq = Nq,
        Qq = Bq,
        yq = uq,
        tq = new Uint8Array(lq.slice(0, Oq)),
        hq = Aq,
        nq = Aq.slice(0, Aq.length),
        bq = Vq,
        iq = vq,
        Zq = qq();
      return Oq = Eq, mq = gq, aq = Yq, dq = xq, jq = Hq, cq = oq, Nq = Pq, Bq = Qq, uq = yq, lq = tq, vq = iq, (Aq = hq).splice(0, Aq.length, ...nq), Vq = bq, Wq = new DataView(lq.buffer, lq.byteOffset, lq.byteLength), Zq
    }

    function mE() {
      lq = null, Bq = null, Aq = null
    }
    Hq[98] = qq => {
      let Eq = (qq[0] << 24) + (qq[1] << 16) + (qq[2] << 8) + qq[3],
        gq = mq;
      return mq += Eq - qq.length, uq = lE, (uq = [wq(), wq()]).position0 = 0, uq.position1 = 0, uq.postBundlePosition = mq, mq = gq, Zq()
    }, Hq[255] = qq => 4 == qq.length ? new Date(1e3 * (16777216 * qq[0] + (qq[1] << 16) + (qq[2] << 8) + qq[3])) : 8 == qq.length ? new Date(((qq[0] << 22) + (qq[1] << 14) + (qq[2] << 6) + (qq[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & qq[3]) + 16777216 * qq[4] + (qq[5] << 16) + (qq[6] << 8) + qq[7])) : 12 == qq.length ? new Date(((qq[0] << 24) + (qq[1] << 16) + (qq[2] << 8) + qq[3]) / 1e6 + 1e3 * ((128 & qq[4] ? -281474976710656 : 0) + 1099511627776 * qq[6] + 4294967296 * qq[7] + 16777216 * qq[8] + (qq[9] << 16) + (qq[10] << 8) + qq[11])) : new Date("invalid");
    const xE = new Array(147);
    for (let lg = 0; lg < 256; lg++) xE[lg] = +("1e" + Math.floor(45.15 - .30103 * lg));
    const AE = nq;
    var cE = new nq({
      useRecords: !1
    });
    const uE = cE.unpack,
      BE = cE.unpackMultiple,
      WE = cE.unpack,
      NE = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let aE, VE, dE, jE = new Float32Array(1),
      HE = new Uint8Array(jE.buffer, 0, 4);

    function oE(qq) {
      jE[0] = qq;
      let Eq = xE[(127 & HE[3]) << 1 | HE[2] >> 7];
      return (Eq * qq + (qq > 0 ? .5 : -.5) | 0) / Eq
    }
    try {
      aE = new TextEncoder
    } catch (Yg) {}
    const PE = "undefined" !== typeof Buffer,
      QE = PE ? function(qq) {
        return Buffer.allocUnsafeSlow(qq)
      } : Uint8Array,
      yE = PE ? Buffer : Uint8Array,
      tE = PE ? 4294967296 : 2144337920;
    let rE, vE, hE, nE, bE, iE = 0,
      ZE = null;
    const fE = /[\u0080-\uFFFF]/,
      ME = Symbol("record-id");
    class TE extends nq {
      constructor(qq) {
        let Eq, gq, Yq, lq;
        super(qq), this.offset = 0;
        let Oq = yE.prototype.utf8Write ? function(qq, Eq) {
            return rE.utf8Write(qq, Eq, rE.byteLength - Eq)
          } : !(!aE || !aE.encodeInto) && function(qq, Eq) {
            return aE.encodeInto(qq, rE.subarray(Eq)).written
          },
          mq = this;
        qq || (qq = {});
        let xq = qq && qq.sequential,
          Aq = qq.structures || qq.saveStructures,
          cq = qq.maxSharedStructures;
        if (null == cq && (cq = Aq ? 32 : 0), cq > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        qq.structuredClone && void 0 == qq.moreTypes && (this.moreTypes = !0);
        let uq = qq.maxOwnStructures;
        null == uq && (uq = Aq ? 32 : 64), this.structures || 0 == qq.useRecords || (this.structures = []);
        let Bq = cq > 32 || uq + cq > 64,
          Wq = cq + 64,
          Nq = cq + uq + 64;
        if (Nq > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let aq = [],
          Vq = 0,
          dq = 0;
        this.pack = this.encode = function(qq, Oq) {
          if (rE || (rE = new QE(8192), hE = rE.dataView || (rE.dataView = new DataView(rE.buffer, 0, 8192)), iE = 0), nE = rE.length - 10, nE - iE < 2048 ? (rE = new QE(rE.length), hE = rE.dataView || (rE.dataView = new DataView(rE.buffer, 0, rE.length)), nE = rE.length - 10, iE = 0) : iE = iE + 7 & 2147483640, Eq = iE, Oq & eE && (iE += 255 & Oq), lq = mq.structuredClone ? new Map : null, mq.bundleStrings && "string" !== typeof qq ? (ZE = [], ZE.size = 1 / 0) : ZE = null, Yq = mq.structures, Yq) {
            Yq.uninitialized && (Yq = mq._mergeStructures(mq.getStructures()));
            let qq = Yq.sharedLength || 0;
            if (qq > cq) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Yq.sharedLength);
            if (!Yq.transitions) {
              Yq.transitions = Object.create(null);
              for (let Eq = 0; Eq < qq; Eq++) {
                let qq = Yq[Eq];
                if (!qq) continue;
                let gq, lq = Yq.transitions;
                for (let Eq = 0, Yq = qq.length; Eq < Yq; Eq++) {
                  let Yq = qq[Eq];
                  gq = lq[Yq], gq || (gq = lq[Yq] = Object.create(null)), lq = gq
                }
                lq[ME] = Eq + 64
              }
              this.lastNamedStructuresLength = qq
            }
            xq || (Yq.nextId = qq + 64)
          }
          let Aq;
          gq && (gq = !1);
          try {
            mq.randomAccessStructure && qq && qq.constructor && qq.constructor === Object ? nq(qq) : oq(qq);
            let gq = ZE;
            if (ZE && GE(Eq, oq, 0), lq && lq.idsToInsert) {
              let qq = lq.idsToInsert.sort(((qq, Eq) => qq.offset > Eq.offset ? 1 : -1)),
                Yq = qq.length,
                Oq = -1;
              for (; gq && Yq > 0;) {
                let lq = qq[--Yq].offset + Eq;
                lq < gq.stringsPosition + Eq && -1 === Oq && (Oq = 0), lq > gq.position + Eq ? Oq >= 0 && (Oq += 6) : (Oq >= 0 && (hE.setUint32(gq.position + Eq, hE.getUint32(gq.position + Eq) + Oq), Oq = -1), gq = gq.previous, Yq++)
              }
              Oq >= 0 && gq && hE.setUint32(gq.position + Eq, hE.getUint32(gq.position + Eq) + Oq), iE += 6 * qq.length, iE > nE && rq(iE), mq.offset = iE;
              let xq = function(qq, Eq) {
                let gq, Yq = 6 * Eq.length,
                  lq = qq.length - Yq;
                for (; gq = Eq.pop();) {
                  let Eq = gq.offset,
                    Oq = gq.id;
                  qq.copyWithin(Eq + Yq, Eq, lq), Yq -= 6;
                  let mq = Eq + Yq;
                  qq[mq++] = 214, qq[mq++] = 105, qq[mq++] = Oq >> 24, qq[mq++] = Oq >> 16 & 255, qq[mq++] = Oq >> 8 & 255, qq[mq++] = 255 & Oq, lq = Eq
                }
                return qq
              }(rE.subarray(Eq, iE), qq);
              return lq = null, xq
            }
            return mq.offset = iE, Oq & CE ? (rE.start = Eq, rE.end = iE, rE) : rE.subarray(Eq, iE)
          } catch (Yg) {
            throw Aq = Yg, Yg
          } finally {
            if (Yq && (jq(), gq && mq.saveStructures)) {
              let gq = Yq.sharedLength || 0,
                lq = rE.subarray(Eq, iE),
                xq = JE(Yq, mq);
              if (!Aq) return !1 === mq.saveStructures(xq, xq.isCompatible) ? mq.pack(qq, Oq) : (mq.lastNamedStructuresLength = gq, rE.length > 1073741824 && (rE = null), lq)
            }
            rE.length > 1073741824 && (rE = null), Oq & IE && (iE = Eq)
          }
        };
        const jq = () => {
            dq < 10 && dq++;
            let qq = Yq.sharedLength || 0;
            if (Yq.length > qq && !xq && (Yq.length = qq), Vq > 1e4) Yq.transitions = null, dq = 0, Vq = 0, aq.length > 0 && (aq = []);
            else if (aq.length > 0 && !xq) {
              for (let qq = 0, Eq = aq.length; qq < Eq; qq++) aq[qq][ME] = 0;
              aq = []
            }
          },
          Hq = qq => {
            var Eq = qq.length;
            Eq < 16 ? rE[iE++] = 144 | Eq : Eq < 65536 ? (rE[iE++] = 220, rE[iE++] = Eq >> 8, rE[iE++] = 255 & Eq) : (rE[iE++] = 221, hE.setUint32(iE, Eq), iE += 4);
            for (let gq = 0; gq < Eq; gq++) oq(qq[gq])
          },
          oq = qq => {
            iE > nE && (rE = rq(iE));
            var gq, Yq = typeof qq;
            if ("string" === Yq) {
              let Yq, lq = qq.length;
              if (ZE && lq >= 4 && lq < 4096) {
                if ((ZE.size += lq) > 21760) {
                  let qq, gq, Yq = (ZE[0] ? 3 * ZE[0].length + ZE[1].length : 0) + 10;
                  iE + Yq > nE && (rE = rq(iE + Yq)), ZE.position ? (gq = ZE, rE[iE] = 200, iE += 3, rE[iE++] = 98, qq = iE - Eq, iE += 4, GE(Eq, oq, 0), hE.setUint16(qq + Eq - 3, iE - Eq - qq)) : (rE[iE++] = 214, rE[iE++] = 98, qq = iE - Eq, iE += 4), ZE = ["", ""], ZE.previous = gq, ZE.size = 0, ZE.position = qq
                }
                let gq = fE.test(qq);
                return ZE[gq ? 0 : 1] += qq, rE[iE++] = 193, void oq(gq ? -lq : lq)
              }
              Yq = lq < 32 ? 1 : lq < 256 ? 2 : lq < 65536 ? 3 : 5;
              let mq = 3 * lq;
              if (iE + mq > nE && (rE = rq(iE + mq)), lq < 64 || !Oq) {
                let Eq, Oq, mq, xq = iE + Yq;
                for (Eq = 0; Eq < lq; Eq++) Oq = qq.charCodeAt(Eq), Oq < 128 ? rE[xq++] = Oq : Oq < 2048 ? (rE[xq++] = Oq >> 6 | 192, rE[xq++] = 63 & Oq | 128) : 55296 === (64512 & Oq) && 56320 === (64512 & (mq = qq.charCodeAt(Eq + 1))) ? (Oq = 65536 + ((1023 & Oq) << 10) + (1023 & mq), Eq++, rE[xq++] = Oq >> 18 | 240, rE[xq++] = Oq >> 12 & 63 | 128, rE[xq++] = Oq >> 6 & 63 | 128, rE[xq++] = 63 & Oq | 128) : (rE[xq++] = Oq >> 12 | 224, rE[xq++] = Oq >> 6 & 63 | 128, rE[xq++] = 63 & Oq | 128);
                gq = xq - iE - Yq
              } else gq = Oq(qq, iE + Yq);
              gq < 32 ? rE[iE++] = 160 | gq : gq < 256 ? (Yq < 2 && rE.copyWithin(iE + 2, iE + 1, iE + 1 + gq), rE[iE++] = 217, rE[iE++] = gq) : gq < 65536 ? (Yq < 3 && rE.copyWithin(iE + 3, iE + 2, iE + 2 + gq), rE[iE++] = 218, rE[iE++] = gq >> 8, rE[iE++] = 255 & gq) : (Yq < 5 && rE.copyWithin(iE + 5, iE + 3, iE + 3 + gq), rE[iE++] = 219, hE.setUint32(iE, gq), iE += 4), iE += gq
            } else if ("number" === Yq)
              if (qq >>> 0 === qq) qq < 32 || qq < 128 && !1 === this.useRecords || qq < 64 && !this.randomAccessStructure ? rE[iE++] = qq : qq < 256 ? (rE[iE++] = 204, rE[iE++] = qq) : qq < 65536 ? (rE[iE++] = 205, rE[iE++] = qq >> 8, rE[iE++] = 255 & qq) : (rE[iE++] = 206, hE.setUint32(iE, qq), iE += 4);
              else if ((qq | 0) === qq) qq >= -32 ? rE[iE++] = 256 + qq : qq >= -128 ? (rE[iE++] = 208, rE[iE++] = qq + 256) : qq >= -32768 ? (rE[iE++] = 209, hE.setInt16(iE, qq), iE += 2) : (rE[iE++] = 210, hE.setInt32(iE, qq), iE += 4);
            else {
              let Eq;
              if ((Eq = this.useFloat32) > 0 && qq < 4294967296 && qq >= -2147483648) {
                let gq;
                if (rE[iE++] = 202, hE.setFloat32(iE, qq), Eq < 4 || ((gq = qq * xE[(127 & rE[iE]) << 1 | rE[iE + 1] >> 7]) | 0) === gq) return void(iE += 4);
                iE--
              }
              rE[iE++] = 203, hE.setFloat64(iE, qq), iE += 8
            } else if ("object" === Yq || "function" === Yq)
              if (qq) {
                if (lq) {
                  let gq = lq.get(qq);
                  if (gq) {
                    if (!gq.id) {
                      let qq = lq.idsToInsert || (lq.idsToInsert = []);
                      gq.id = qq.push(gq)
                    }
                    return rE[iE++] = 214, rE[iE++] = 112, hE.setUint32(iE, gq.id), void(iE += 4)
                  }
                  lq.set(qq, {
                    offset: iE - Eq
                  })
                }
                let Oq = qq.constructor;
                if (Oq === Object) tq(qq);
                else if (Oq === Array) Hq(qq);
                else if (Oq === Map)
                  if (this.mapAsEmptyObject) rE[iE++] = 128;
                  else {
                    (gq = qq.size) < 16 ? rE[iE++] = 128 | gq : gq < 65536 ? (rE[iE++] = 222, rE[iE++] = gq >> 8, rE[iE++] = 255 & gq) : (rE[iE++] = 223, hE.setUint32(iE, gq), iE += 4);
                    for (let [Eq, gq] of qq) oq(Eq), oq(gq)
                  }
                else {
                  for (let Eq = 0, gq = VE.length; Eq < gq; Eq++) {
                    if (qq instanceof dE[Eq]) {
                      let gq = VE[Eq];
                      if (gq.write) {
                        gq.type && (rE[iE++] = 212, rE[iE++] = gq.type, rE[iE++] = 0);
                        let Eq = gq.write.call(this, qq);
                        return void(Eq === qq ? Array.isArray(qq) ? Hq(qq) : tq(qq) : oq(Eq))
                      }
                      let Yq, lq = rE,
                        Oq = hE,
                        mq = iE;
                      rE = null;
                      try {
                        Yq = gq.pack.call(this, qq, (qq => (rE = lq, lq = null, iE += qq, iE > nE && rq(iE), {
                          target: rE,
                          targetView: hE,
                          position: iE - qq
                        })), oq)
                      } finally {
                        lq && (rE = lq, hE = Oq, iE = mq, nE = rE.length - 10)
                      }
                      return void(Yq && (Yq.length + iE > nE && rq(Yq.length + iE), iE = pE(Yq, rE, iE, gq.type)))
                    }
                  }
                  if (Array.isArray(qq)) Hq(qq);
                  else {
                    if (qq.toJSON) {
                      const Eq = qq.toJSON();
                      if (Eq !== qq) return oq(Eq)
                    }
                    if ("function" === Yq) return oq(this.writeFunction && this.writeFunction(qq));
                    tq(qq)
                  }
                }
              } else rE[iE++] = 192;
            else if ("boolean" === Yq) rE[iE++] = qq ? 195 : 194;
            else if ("bigint" === Yq) {
              if (qq < BigInt(1) << BigInt(63) && qq >= -(BigInt(1) << BigInt(63))) rE[iE++] = 211, hE.setBigInt64(iE, qq);
              else if (qq < BigInt(1) << BigInt(64) && qq > 0) rE[iE++] = 207, hE.setBigUint64(iE, qq);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return oq(qq.toString());
                  if (this.useBigIntExtension && qq < BigInt(2) ** BigInt(1023) && qq > -(BigInt(2) ** BigInt(1023))) {
                    rE[iE++] = 199, iE++, rE[iE++] = 66;
                    let Eq, gq = [];
                    do {
                      let Yq = qq & BigInt(255);
                      Eq = (Yq & BigInt(128)) === (qq < BigInt(0) ? BigInt(128) : BigInt(0)), gq.push(Yq), qq >>= BigInt(8)
                    } while (qq !== BigInt(0) && qq !== BigInt(-1) || !Eq);
                    rE[iE - 2] = gq.length;
                    for (let qq = gq.length; qq > 0;) rE[iE++] = Number(gq[--qq]);
                    return
                  }
                  throw new RangeError(qq + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                rE[iE++] = 203, hE.setFloat64(iE, Number(qq))
              }
              iE += 8
            } else {
              if ("undefined" !== Yq) throw new Error("Unknown type: " + Yq);
              this.encodeUndefinedAsNil ? rE[iE++] = 192 : (rE[iE++] = 212, rE[iE++] = 0, rE[iE++] = 0)
            }
          },
          Pq = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? qq => {
            let Eq;
            if (this.skipValues) {
              Eq = [];
              for (let gq in qq) "function" === typeof qq.hasOwnProperty && !qq.hasOwnProperty(gq) || this.skipValues.includes(qq[gq]) || Eq.push(gq)
            } else Eq = Object.keys(qq);
            let gq, Yq = Eq.length;
            if (Yq < 16 ? rE[iE++] = 128 | Yq : Yq < 65536 ? (rE[iE++] = 222, rE[iE++] = Yq >> 8, rE[iE++] = 255 & Yq) : (rE[iE++] = 223, hE.setUint32(iE, Yq), iE += 4), this.coercibleKeyAsNumber)
              for (let lq = 0; lq < Yq; lq++) {
                gq = Eq[lq];
                let Yq = Number(gq);
                oq(isNaN(Yq) ? gq : Yq), oq(qq[gq])
              } else
                for (let lq = 0; lq < Yq; lq++) oq(gq = Eq[lq]), oq(qq[gq])
          } : qq => {
            rE[iE++] = 222;
            let gq = iE - Eq;
            iE += 2;
            let Yq = 0;
            for (let Eq in qq)("function" !== typeof qq.hasOwnProperty || qq.hasOwnProperty(Eq)) && (oq(Eq), oq(qq[Eq]), Yq++);
            if (Yq > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            rE[gq++ + Eq] = Yq >> 8, rE[gq + Eq] = 255 & Yq
          },
          Qq = !1 === this.useRecords ? Pq : qq.progressiveRecords && !Bq ? qq => {
            let gq, lq, Oq = Yq.transitions || (Yq.transitions = Object.create(null)),
              mq = iE++ - Eq;
            for (let xq in qq)
              if ("function" !== typeof qq.hasOwnProperty || qq.hasOwnProperty(xq)) {
                if (gq = Oq[xq], gq) Oq = gq;
                else {
                  let Aq = Object.keys(qq),
                    cq = Oq;
                  Oq = Yq.transitions;
                  let uq = 0;
                  for (let qq = 0, Eq = Aq.length; qq < Eq; qq++) {
                    let Eq = Aq[qq];
                    gq = Oq[Eq], gq || (gq = Oq[Eq] = Object.create(null), uq++), Oq = gq
                  }
                  mq + Eq + 1 == iE ? (iE--, vq(Oq, Aq, uq)) : hq(Oq, Aq, mq, uq), lq = !0, Oq = cq[xq]
                }
                oq(qq[xq])
              } if (!lq) {
              let gq = Oq[ME];
              gq ? rE[mq + Eq] = gq : hq(Oq, Object.keys(qq), mq, 0)
            }
          } : qq => {
            let Eq, gq = Yq.transitions || (Yq.transitions = Object.create(null)),
              lq = 0;
            for (let Yq in qq)("function" !== typeof qq.hasOwnProperty || qq.hasOwnProperty(Yq)) && (Eq = gq[Yq], Eq || (Eq = gq[Yq] = Object.create(null), lq++), gq = Eq);
            let Oq = gq[ME];
            Oq ? Oq >= 96 && Bq ? (rE[iE++] = 96 + (31 & (Oq -= 96)), rE[iE++] = Oq >> 5) : rE[iE++] = Oq : vq(gq, gq.__keys__ || Object.keys(qq), lq);
            for (let Yq in qq)("function" !== typeof qq.hasOwnProperty || qq.hasOwnProperty(Yq)) && oq(qq[Yq])
          },
          yq = "function" == typeof this.useRecords && this.useRecords,
          tq = yq ? qq => {
            yq(qq) ? Qq(qq) : Pq(qq)
          } : Qq,
          rq = qq => {
            let gq;
            if (qq > 16777216) {
              if (qq - Eq > tE) throw new Error("Packed buffer would be larger than maximum buffer size");
              gq = Math.min(tE, 4096 * Math.round(Math.max((qq - Eq) * (qq > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else gq = 1 + (Math.max(qq - Eq << 2, rE.length - 1) >> 12) << 12;
            let Yq = new QE(gq);
            return hE = Yq.dataView || (Yq.dataView = new DataView(Yq.buffer, 0, gq)), qq = Math.min(qq, rE.length), rE.copy ? rE.copy(Yq, 0, Eq, qq) : Yq.set(rE.slice(Eq, qq)), iE -= Eq, Eq = 0, nE = Yq.length - 10, rE = Yq
          },
          vq = (qq, Eq, lq) => {
            let Oq = Yq.nextId;
            Oq || (Oq = 64), Oq < Wq && this.shouldShareStructure && !this.shouldShareStructure(Eq) ? (Oq = Yq.nextOwnId, Oq < Nq || (Oq = Wq), Yq.nextOwnId = Oq + 1) : (Oq >= Nq && (Oq = Wq), Yq.nextId = Oq + 1);
            let mq = Eq.highByte = Oq >= 96 && Bq ? Oq - 96 >> 5 : -1;
            qq[ME] = Oq, qq.__keys__ = Eq, Yq[Oq - 64] = Eq, Oq < Wq ? (Eq.isShared = !0, Yq.sharedLength = Oq - 63, gq = !0, mq >= 0 ? (rE[iE++] = 96 + (31 & Oq), rE[iE++] = mq) : rE[iE++] = Oq) : (mq >= 0 ? (rE[iE++] = 213, rE[iE++] = 114, rE[iE++] = 96 + (31 & Oq), rE[iE++] = mq) : (rE[iE++] = 212, rE[iE++] = 114, rE[iE++] = Oq), lq && (Vq += dq * lq), aq.length >= uq && (aq.shift()[ME] = 0), aq.push(qq), oq(Eq))
          },
          hq = (qq, gq, Yq, lq) => {
            let Oq = rE,
              mq = iE,
              xq = nE,
              Aq = Eq;
            rE = vE, iE = 0, Eq = 0, rE || (vE = rE = new QE(8192)), nE = rE.length - 10, vq(qq, gq, lq), vE = rE;
            let cq = iE;
            if (rE = Oq, iE = mq, nE = xq, Eq = Aq, cq > 1) {
              let qq = iE + cq - 1;
              qq > nE && rq(qq);
              let gq = Yq + Eq;
              rE.copyWithin(gq + cq, gq + 1, iE), rE.set(vE.slice(0, cq), gq), iE = qq
            } else rE[Yq + Eq] = vE[0]
          },
          nq = qq => {
            let lq = bE(qq, rE, Eq, iE, Yq, rq, ((qq, Eq, Yq) => {
              if (Yq) return gq = !0;
              iE = Eq;
              let lq = rE;
              return oq(qq), jq(), lq !== rE ? {
                position: iE,
                targetView: hE,
                target: rE
              } : iE
            }), this);
            if (0 === lq) return tq(qq);
            iE = lq
          }
      }
      useBuffer(qq) {
        rE = qq, hE = rE.dataView || (rE.dataView = new DataView(rE.buffer, rE.byteOffset, rE.byteLength)), iE = 0
      }
      set position(qq) {
        iE = qq
      }
      get position() {
        return iE
      }
      set buffer(qq) {
        rE = qq
      }
      get buffer() {
        return rE
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function zE(qq, Eq, gq, Yq) {
      let lq = qq.byteLength;
      if (lq + 1 < 256) {
        var {
          target: Oq,
          position: mq
        } = gq(4 + lq);
        Oq[mq++] = 199, Oq[mq++] = lq + 1
      } else if (lq + 1 < 65536) {
        var {
          target: Oq,
          position: mq
        } = gq(5 + lq);
        Oq[mq++] = 200, Oq[mq++] = lq + 1 >> 8, Oq[mq++] = lq + 1 & 255
      } else {
        var {
          target: Oq,
          position: mq,
          targetView: xq
        } = gq(7 + lq);
        Oq[mq++] = 201, xq.setUint32(mq, lq + 1), mq += 4
      }
      Oq[mq++] = 116, Oq[mq++] = Eq, qq.buffer || (qq = new Uint8Array(qq)), Oq.set(new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength), mq)
    }

    function SE(qq, Eq) {
      let gq = qq.byteLength;
      var Yq, lq;
      if (gq < 256) {
        var {
          target: Yq,
          position: lq
        } = Eq(gq + 2);
        Yq[lq++] = 196, Yq[lq++] = gq
      } else if (gq < 65536) {
        var {
          target: Yq,
          position: lq
        } = Eq(gq + 3);
        Yq[lq++] = 197, Yq[lq++] = gq >> 8, Yq[lq++] = 255 & gq
      } else {
        var {
          target: Yq,
          position: lq,
          targetView: Oq
        } = Eq(gq + 5);
        Yq[lq++] = 198, Oq.setUint32(lq, gq), lq += 4
      }
      Yq.set(qq, lq)
    }

    function pE(qq, Eq, gq, Yq) {
      let lq = qq.length;
      switch (lq) {
        case 1:
          Eq[gq++] = 212;
          break;
        case 2:
          Eq[gq++] = 213;
          break;
        case 4:
          Eq[gq++] = 214;
          break;
        case 8:
          Eq[gq++] = 215;
          break;
        case 16:
          Eq[gq++] = 216;
          break;
        default:
          lq < 256 ? (Eq[gq++] = 199, Eq[gq++] = lq) : lq < 65536 ? (Eq[gq++] = 200, Eq[gq++] = lq >> 8, Eq[gq++] = 255 & lq) : (Eq[gq++] = 201, Eq[gq++] = lq >> 24, Eq[gq++] = lq >> 16 & 255, Eq[gq++] = lq >> 8 & 255, Eq[gq++] = 255 & lq)
      }
      return Eq[gq++] = Yq, Eq.set(qq, gq), gq += lq
    }

    function GE(qq, Eq, gq) {
      if (ZE.length > 0) {
        hE.setUint32(ZE.position + qq, iE + gq - ZE.position - qq), ZE.stringsPosition = iE - qq;
        let Yq = ZE;
        ZE = null, Eq(Yq[0]), Eq(Yq[1])
      }
    }

    function LE(qq) {
      if (qq.Class) {
        if (!qq.pack && !qq.write) throw new Error("Extension has no pack or write function");
        if (qq.pack && !qq.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        dE.unshift(qq.Class), VE.unshift(qq)
      }! function(qq) {
        qq.unpack ? Hq[qq.type] = qq.unpack : Hq[qq.type] = qq
      }(qq)
    }

    function JE(qq, Eq) {
      return qq.isCompatible = qq => {
        let gq = !qq || (Eq.lastNamedStructuresLength || 0) === qq.length;
        return gq || Eq._mergeStructures(qq), gq
      }, qq
    }
    dE = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Pq], VE = [{
      pack(qq, Eq, gq) {
        let Yq = qq.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === qq.getMilliseconds()) && Yq >= 0 && Yq < 4294967296) {
          let {
            target: qq,
            targetView: gq,
            position: lq
          } = Eq(6);
          qq[lq++] = 214, qq[lq++] = 255, gq.setUint32(lq, Yq)
        } else if (Yq > 0 && Yq < 4294967296) {
          let {
            target: gq,
            targetView: lq,
            position: Oq
          } = Eq(10);
          gq[Oq++] = 215, gq[Oq++] = 255, lq.setUint32(Oq, 4e6 * qq.getMilliseconds() + (Yq / 1e3 / 4294967296 | 0)), lq.setUint32(Oq + 4, Yq)
        } else if (isNaN(Yq)) {
          if (this.onInvalidDate) return Eq(0), gq(this.onInvalidDate());
          let {
            target: qq,
            targetView: Yq,
            position: lq
          } = Eq(3);
          qq[lq++] = 212, qq[lq++] = 255, qq[lq++] = 255
        } else {
          let {
            target: gq,
            targetView: lq,
            position: Oq
          } = Eq(15);
          gq[Oq++] = 199, gq[Oq++] = 12, gq[Oq++] = 255, lq.setUint32(Oq, 1e6 * qq.getMilliseconds()), lq.setBigInt64(Oq + 4, BigInt(Math.floor(Yq)))
        }
      }
    }, {
      pack(qq, Eq, gq) {
        if (this.setAsEmptyObject) return Eq(0), gq({});
        let Yq = Array.from(qq),
          {
            target: lq,
            position: Oq
          } = Eq(this.moreTypes ? 3 : 0);
        this.moreTypes && (lq[Oq++] = 212, lq[Oq++] = 115, lq[Oq++] = 0), gq(Yq)
      }
    }, {
      pack(qq, Eq, gq) {
        let {
          target: Yq,
          position: lq
        } = Eq(this.moreTypes ? 3 : 0);
        this.moreTypes && (Yq[lq++] = 212, Yq[lq++] = 101, Yq[lq++] = 0), gq([qq.name, qq.message, qq.cause])
      }
    }, {
      pack(qq, Eq, gq) {
        let {
          target: Yq,
          position: lq
        } = Eq(this.moreTypes ? 3 : 0);
        this.moreTypes && (Yq[lq++] = 212, Yq[lq++] = 120, Yq[lq++] = 0), gq([qq.source, qq.flags])
      }
    }, {
      pack(qq, Eq) {
        this.moreTypes ? zE(qq, 16, Eq) : SE(PE ? Buffer.from(qq) : new Uint8Array(qq), Eq)
      }
    }, {
      pack(qq, Eq) {
        let gq = qq.constructor;
        gq !== yE && this.moreTypes ? zE(qq, gE.indexOf(gq.name), Eq) : SE(qq, Eq)
      }
    }, {
      pack(qq, Eq) {
        let {
          target: gq,
          position: Yq
        } = Eq(1);
        gq[Yq] = 193
      }
    }];
    let kE = new TE({
      useRecords: !1
    });
    const RE = kE.pack,
      UE = kE.pack,
      FE = TE,
      {
        NEVER: sE,
        ALWAYS: XE,
        DECIMAL_ROUND: wE,
        DECIMAL_FIT: KE
      } = NE,
      CE = 512,
      IE = 1024,
      eE = 2048;
    const DE = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!qq || "object" !== typeof qq) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const gq = new nq(Eq);
        let Yq;
        const lq = qq => {
          let Eq;
          Yq && (qq = Buffer.concat([Yq, qq]), Yq = void 0);
          try {
            Eq = gq.unpackMultiple(qq)
          } catch (lq) {
            if (!lq.incomplete) throw lq;
            Yq = qq.slice(lq.lastPosition), Eq = lq.values
          }
          return Eq
        };
        return "function" === typeof qq[Symbol.iterator] ? function*() {
          for (const Eq of qq) yield* lq(Eq)
        }() : "function" === typeof qq[Symbol.asyncIterator] ? async function*() {
          for await (const Eq of qq) yield* lq(Eq)
        }(): void 0
      },
      qg = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (qq && "object" === typeof qq) {
          if ("function" === typeof qq[Symbol.iterator]) return function*(qq, Eq) {
            const gq = new TE(Eq);
            for (const Yq of qq) yield gq.pack(Yq)
          }(qq, Eq);
          if ("function" === typeof qq.then || "function" === typeof qq[Symbol.asyncIterator]) return async function*(qq, Eq) {
            const gq = new TE(Eq);
            for await (const Yq of qq) yield gq.pack(Yq)
          }(qq, Eq);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Eg = !1,
      gg = !0
  },
  9055: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      $changes: () => Vq,
      $childType: () => dq,
      $decoder: () => uq,
      $deleteByIndex: () => Nq,
      $encoder: () => cq,
      $filter: () => Bq,
      $getByIndex: () => Wq,
      $numFields: () => hq,
      $refId: () => xq,
      $track: () => Aq,
      $values: () => Qq,
      ArraySchema: () => gY,
      Callbacks: () => gl,
      ChangeTree: () => ig,
      CollectionSchema: () => OY,
      Decoder: () => wY,
      Encoder: () => UY,
      FieldBuilder: () => AY,
      MapSchema: () => lY,
      Metadata: () => wE,
      OPERATION: () => lq,
      Reflection: () => eY,
      ReflectionField: () => CY,
      ReflectionType: () => IY,
      Root: () => ZY,
      Schema: () => bY,
      SetSchema: () => mY,
      StateCallbackStrategy: () => El,
      StateView: () => SY,
      StreamSchema: () => xY,
      TypeContext: () => JE,
      createPool: () => ll,
      decode: () => oE,
      decodeKeyValueOperation: () => Cg,
      decodeSchemaOperation: () => Kg,
      defineCustomTypes: () => tE,
      defineTypes: () => vY,
      deprecated: () => tY,
      dumpChanges: () => nY,
      encode: () => EE,
      encodeArray: () => Gg,
      encodeIndexedEntry: () => Sg,
      encodeKeyValueOperation: () => pg,
      encodeMapEntry: () => zg,
      encodeSchemaOperation: () => Tg,
      FN: () => VY,
      fullStateOnly: () => oY,
      getDecoderStateCallbacks: () => DY,
      getEncodeDescriptor: () => qg,
      getRawChangesCallback: () => ql,
      isBuilder: () => cY,
      patchOnly: () => HY,
      registerType: () => yE,
      schema: () => hY,
      t: () => NY,
      type: () => PY,
      unreliable: () => jY,
      view: () => dY
    });
    const Yq = 255;
    var lq;

    function Oq(qq) {
      Object.defineProperty(qq, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(qq) {
      qq[qq.ADD = 128] = "ADD", qq[qq.REPLACE = 0] = "REPLACE", qq[qq.DELETE = 64] = "DELETE", qq[qq.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", qq[qq.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", qq[qq.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", qq[qq.CLEAR = 10] = "CLEAR", qq[qq.REVERSE = 15] = "REVERSE", qq[qq.MOVE = 32] = "MOVE", qq[qq.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", qq[qq.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(lq || (lq = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const mq = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const qq = "colyseus.symbolRegistry",
        Eq = mq[qq] || (mq[qq] = Object.create(null));
      Symbol.for = function(qq) {
        return Eq[qq] || (Eq[qq] = Symbol(qq))
      }, Symbol.keyFor = function(qq) {
        for (const gq in Eq)
          if (Eq[gq] === qq) return gq
      }
    }
    const xq = Symbol.for("$refId"),
      Aq = "~track",
      cq = "~encoder",
      uq = "~decoder",
      Bq = "~filter",
      Wq = "~getByIndex",
      Nq = "~deleteByIndex",
      aq = "~resyncPrune",
      Vq = Symbol.for("$changes"),
      dq = Symbol.for("$childType"),
      jq = Symbol.for("$proxyTarget"),
      Hq = "~onEncodeEnd",
      oq = "~reset",
      Pq = "~onDecodeEnd",
      Qq = Symbol.for("$values"),
      yq = "~builder",
      tq = "~descriptors",
      rq = "~__encodeDescriptor",
      vq = "~encoders",
      hq = "~__numFields",
      nq = "~__refTypeFieldIndexes",
      bq = "~__viewFieldIndexes",
      iq = "$__fieldIndexesByViewTag",
      Zq = "~__unreliableFieldIndexes",
      fq = "~__patchOnlyFieldIndexes",
      Mq = "~__fullSyncSkipIndexes",
      Tq = "~__fullStateOnlyFieldIndexes",
      zq = "~__streamFieldIndexes",
      Sq = "~__streamPriorities";
    let pq;
    try {
      pq = new TextEncoder
    } catch (Ol) {}
    const Gq = new ArrayBuffer(8),
      Lq = new Int32Array(Gq),
      Jq = new Float32Array(Gq),
      kq = new Float64Array(Gq),
      Rq = new BigInt64Array(Gq),
      Uq = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(qq, Eq) {
        for (var gq = 0, Yq = 0, lq = 0, Oq = qq.length; lq < Oq; lq++)(gq = qq.charCodeAt(lq)) < 128 ? Yq += 1 : gq < 2048 ? Yq += 2 : gq < 55296 || gq >= 57344 ? Yq += 3 : (lq++, Yq += 4);
        return Yq
      };

    function Fq(qq, Eq, gq) {
      for (var Yq = 0, lq = 0, Oq = Eq.length; lq < Oq; lq++)(Yq = Eq.charCodeAt(lq)) < 128 ? qq[gq.offset++] = Yq : Yq < 2048 ? (qq[gq.offset] = 192 | Yq >> 6, qq[gq.offset + 1] = 128 | 63 & Yq, gq.offset += 2) : Yq < 55296 || Yq >= 57344 ? (qq[gq.offset] = 224 | Yq >> 12, qq[gq.offset + 1] = 128 | Yq >> 6 & 63, qq[gq.offset + 2] = 128 | 63 & Yq, gq.offset += 3) : (lq++, Yq = 65536 + ((1023 & Yq) << 10 | 1023 & Eq.charCodeAt(lq)), qq[gq.offset] = 240 | Yq >> 18, qq[gq.offset + 1] = 128 | Yq >> 12 & 63, qq[gq.offset + 2] = 128 | Yq >> 6 & 63, qq[gq.offset + 3] = 128 | 63 & Yq, gq.offset += 4)
    }

    function sq(qq, Eq, gq) {
      qq[gq.offset++] = 255 & Eq
    }

    function Xq(qq, Eq, gq) {
      qq[gq.offset++] = 255 & Eq, qq[gq.offset++] = Eq >> 8 & 255
    }

    function wq(qq, Eq, gq) {
      qq[gq.offset++] = 255 & Eq, qq[gq.offset++] = Eq >> 8 & 255
    }

    function Kq(qq, Eq, gq) {
      qq[gq.offset++] = 255 & Eq, qq[gq.offset++] = Eq >> 8 & 255, qq[gq.offset++] = Eq >> 16 & 255, qq[gq.offset++] = Eq >> 24 & 255
    }

    function Cq(qq, Eq, gq) {
      const Yq = Eq >> 24,
        lq = Eq >> 16,
        Oq = Eq >> 8,
        mq = Eq;
      qq[gq.offset++] = 255 & mq, qq[gq.offset++] = 255 & Oq, qq[gq.offset++] = 255 & lq, qq[gq.offset++] = 255 & Yq
    }

    function Iq(qq, Eq, gq) {
      const Yq = Math.floor(Eq / Math.pow(2, 32));
      Cq(qq, Eq >>> 0, gq), Cq(qq, Yq, gq)
    }

    function eq(qq, Eq, gq) {
      const Yq = Eq / Math.pow(2, 32) | 0;
      Cq(qq, Eq >>> 0, gq), Cq(qq, Yq, gq)
    }

    function Dq(qq, Eq, gq) {
      Jq[0] = Eq, Kq(qq, Lq[0], gq)
    }

    function qE(qq, Eq, gq) {
      kq[0] = Eq, Kq(qq, Lq[0], gq), Kq(qq, Lq[1], gq)
    }
    const EE = {
        int8: sq,
        uint8: function(qq, Eq, gq) {
          qq[gq.offset++] = 255 & Eq
        },
        int16: Xq,
        uint16: wq,
        int32: Kq,
        uint32: Cq,
        int64: Iq,
        uint64: eq,
        bigint64: function(qq, Eq, gq) {
          Rq[0] = BigInt.asIntN(64, Eq), Kq(qq, Lq[0], gq), Kq(qq, Lq[1], gq)
        },
        biguint64: function(qq, Eq, gq) {
          Rq[0] = BigInt.asIntN(64, Eq), Kq(qq, Lq[0], gq), Kq(qq, Lq[1], gq)
        },
        float32: Dq,
        float64: qE,
        boolean: function(qq, Eq, gq) {
          qq[gq.offset++] = Eq ? 1 : 0
        },
        string: function(qq, Eq, gq) {
          Eq || (Eq = "");
          let Yq = Uq(Eq, "utf8"),
            lq = 0;
          if (Yq < 32) qq[gq.offset++] = 160 | Yq, lq = 1;
          else if (Yq < 256) qq[gq.offset++] = 217, qq[gq.offset++] = Yq, lq = 2;
          else if (Yq < 65536) qq[gq.offset++] = 218, wq(qq, Yq, gq), lq = 3;
          else {
            if (!(Yq < 4294967296)) throw new Error("String too long");
            qq[gq.offset++] = 219, Cq(qq, Yq, gq), lq = 5
          }
          return Fq(qq, Eq, gq), lq + Yq
        },
        number: function qq(Eq, gq, Yq) {
          return isNaN(gq) ? qq(Eq, 0, Yq) : isFinite(gq) ? gq !== (0 | gq) ? Math.abs(gq) <= 34028235e31 && (Jq[0] = gq, Math.abs(Math.abs(Jq[0]) - Math.abs(gq)) < 1e-4) ? (Eq[Yq.offset++] = 202, Dq(Eq, gq, Yq), 5) : (Eq[Yq.offset++] = 203, qE(Eq, gq, Yq), 9) : gq >= 0 ? gq < 128 ? (Eq[Yq.offset++] = 255 & gq, 1) : gq < 256 ? (Eq[Yq.offset++] = 204, Eq[Yq.offset++] = 255 & gq, 2) : gq < 65536 ? (Eq[Yq.offset++] = 205, wq(Eq, gq, Yq), 3) : gq < 4294967296 ? (Eq[Yq.offset++] = 206, Cq(Eq, gq, Yq), 5) : (Eq[Yq.offset++] = 207, eq(Eq, gq, Yq), 9) : gq >= -32 ? (Eq[Yq.offset++] = 224 | gq + 32, 1) : gq >= -128 ? (Eq[Yq.offset++] = 208, sq(Eq, gq, Yq), 2) : gq >= -32768 ? (Eq[Yq.offset++] = 209, Xq(Eq, gq, Yq), 3) : gq >= -2147483648 ? (Eq[Yq.offset++] = 210, Kq(Eq, gq, Yq), 5) : (Eq[Yq.offset++] = 211, Iq(Eq, gq, Yq), 9) : qq(Eq, gq > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Yq)
        },
        utf8Write: Fq,
        utf8Length: Uq
      },
      gE = new ArrayBuffer(8),
      YE = new Int32Array(gE),
      lE = new Float32Array(gE),
      OE = new Float64Array(gE),
      mE = new BigUint64Array(gE),
      xE = new BigInt64Array(gE);

    function AE(qq, Eq, gq) {
      gq > qq.length - Eq.offset && (gq = qq.length - Eq.offset);
      for (var Yq = "", lq = 0, Oq = Eq.offset, mq = Eq.offset + gq; Oq < mq; Oq++) {
        var xq = qq[Oq];
        if (0 !== (128 & xq))
          if (192 !== (224 & xq))
            if (224 !== (240 & xq)) {
              if (240 !== (248 & xq)) {
                console.error("decode.utf8Read(): Invalid byte " + xq + " at offset " + Oq + ". Skip to end of string: " + (Eq.offset + gq));
                break
              }(lq = (7 & xq) << 18 | (63 & qq[++Oq]) << 12 | (63 & qq[++Oq]) << 6 | 63 & qq[++Oq]) >= 65536 ? (lq -= 65536, Yq += String.fromCharCode(55296 + (lq >>> 10), 56320 + (1023 & lq))) : Yq += String.fromCharCode(lq)
            } else Yq += String.fromCharCode((15 & xq) << 12 | (63 & qq[++Oq]) << 6 | 63 & qq[++Oq]);
        else Yq += String.fromCharCode((31 & xq) << 6 | 63 & qq[++Oq]);
        else Yq += String.fromCharCode(xq)
      }
      return Eq.offset += gq, Yq
    }

    function cE(qq, Eq) {
      return uE(qq, Eq) << 24 >> 24
    }

    function uE(qq, Eq) {
      return qq[Eq.offset++]
    }

    function BE(qq, Eq) {
      return WE(qq, Eq) << 16 >> 16
    }

    function WE(qq, Eq) {
      return qq[Eq.offset++] | qq[Eq.offset++] << 8
    }

    function NE(qq, Eq) {
      return qq[Eq.offset++] | qq[Eq.offset++] << 8 | qq[Eq.offset++] << 16 | qq[Eq.offset++] << 24
    }

    function aE(qq, Eq) {
      return NE(qq, Eq) >>> 0
    }

    function VE(qq, Eq) {
      return YE[0] = NE(qq, Eq), lE[0]
    }

    function dE(qq, Eq) {
      return YE[0] = NE(qq, Eq), YE[1] = NE(qq, Eq), OE[0]
    }

    function jE(qq, Eq) {
      const gq = aE(qq, Eq);
      return NE(qq, Eq) * Math.pow(2, 32) + gq
    }

    function HE(qq, Eq) {
      const gq = aE(qq, Eq);
      return aE(qq, Eq) * Math.pow(2, 32) + gq
    }
    const oE = {
        utf8Read: AE,
        int8: cE,
        uint8: uE,
        int16: BE,
        uint16: WE,
        int32: NE,
        uint32: aE,
        float32: VE,
        float64: dE,
        int64: jE,
        uint64: HE,
        bigint64: function(qq, Eq) {
          return YE[0] = NE(qq, Eq), YE[1] = NE(qq, Eq), xE[0]
        },
        biguint64: function(qq, Eq) {
          return YE[0] = NE(qq, Eq), YE[1] = NE(qq, Eq), mE[0]
        },
        boolean: function(qq, Eq) {
          return uE(qq, Eq) > 0
        },
        string: function(qq, Eq) {
          const gq = qq[Eq.offset++];
          let Yq;
          return gq < 192 ? Yq = 31 & gq : 217 === gq ? Yq = uE(qq, Eq) : 218 === gq ? Yq = WE(qq, Eq) : 219 === gq && (Yq = aE(qq, Eq)), AE(qq, Eq, Yq)
        },
        number: function(qq, Eq) {
          const gq = qq[Eq.offset++];
          return gq < 128 ? gq : 202 === gq ? VE(qq, Eq) : 203 === gq ? dE(qq, Eq) : 204 === gq ? uE(qq, Eq) : 205 === gq ? WE(qq, Eq) : 206 === gq ? aE(qq, Eq) : 207 === gq ? HE(qq, Eq) : 208 === gq ? cE(qq, Eq) : 209 === gq ? BE(qq, Eq) : 210 === gq ? NE(qq, Eq) : 211 === gq ? jE(qq, Eq) : gq > 223 ? -1 * (255 - gq + 1) : void 0
        },
        stringCheck: function(qq, Eq) {
          const gq = qq[Eq.offset];
          return gq < 192 && gq > 160 || 217 === gq || 218 === gq || 219 === gq
        }
      },
      PE = {},
      QE = new Map;

    function yE(qq, Eq) {
      Eq.constructor && (Object.prototype.hasOwnProperty.call(Eq, "constructor") && null == Eq.constructor[Symbol.metadata] && Oq(Eq.constructor), QE.set(Eq.constructor, qq), PE[qq] = Eq), Eq.encode && (EE[qq] = Eq.encode), Eq.decode && (oE[qq] = Eq.decode)
    }

    function tE(qq) {
      for (const Eq in qq) yE(Eq, qq[Eq]);
      return qq => PY(qq)
    }
    const rE = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function vE() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function hE(qq) {
      return qq._stream ??= vE()
    }

    function nE(qq, Eq, gq) {
      0 === Eq.activeViews.size && hE(qq).broadcastPending.add(gq)
    }

    function bE(qq, Eq, gq, Yq) {
      const Oq = qq._stream;
      if (void 0 === Oq) return !0;
      let mq = !1;
      return Oq.broadcastPending.delete(Yq) ? mq = !0 : Oq.sentBroadcast.delete(Yq) && Oq.broadcastDeletes.add(Yq), Eq.forEachActiveView((qq => {
        const Eq = Oq.pendingByView.get(qq.id);
        if (Eq?.has(Yq)) return Eq.delete(Yq), void(mq = !0);
        const xq = Oq.sentByView.get(qq.id);
        if (xq?.has(Yq)) {
          xq.delete(Yq);
          let Eq = qq.changes.get(gq);
          void 0 === Eq && (Eq = new Map, qq.changes.set(gq, Eq)), Eq.set(Yq, lq.DELETE)
        }
      })), mq
    }

    function iE(qq, Eq) {
      const gq = qq._stream?.pendingByView;
      if (void 0 === gq) return !1;
      for (const [Yq, lq] of gq)
        if (lq.size > 0 && void 0 !== Eq.activeViews.get(Yq)?.deref()) return !0;
      return !1
    }

    function ZE(qq) {
      const Eq = qq._stream;
      return void 0 !== Eq && (Eq.broadcastPending.size > 0 || Eq.broadcastDeletes.size > 0)
    }

    function fE(qq, Eq, gq) {
      const Yq = hE(qq);
      let lq = Yq.pendingByView.get(Eq);
      void 0 === lq && (lq = new Set, Yq.pendingByView.set(Eq, lq)), lq.add(gq)
    }

    function ME(qq, Eq) {
      const gq = qq._stream;
      void 0 !== gq && (gq.pendingByView.delete(Eq), gq.sentByView.delete(Eq), gq.priorityByView?.delete(Eq))
    }
    const TE = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function zE(qq) {
      if (null == qq || "object" !== typeof qq) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: Eq,
        max: gq
      } = qq;
      if ("number" !== typeof Eq || "number" !== typeof gq || !(gq > Eq) || !Number.isFinite(Eq) || !Number.isFinite(gq)) throw new Error(`t.quantized(): require finite min < max (got min=${Eq}, max=${gq}).`);
      const Yq = qq.bits ?? 16;
      if (8 !== Yq && 16 !== Yq && 32 !== Yq) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Yq}).`);
      const lq = qq.mode ?? "clamp";
      if ("clamp" !== lq && "wrap" !== lq) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(lq)}).`);
      const Oq = "wrap" === lq,
        mq = Math.pow(2, Yq);
      return {
        min: Eq,
        max: gq,
        bits: Yq,
        wrap: Oq,
        wire: TE[Yq],
        range: gq - Eq,
        span: Oq ? mq : Eq === -gq ? mq - 2 : mq - 1
      }
    }

    function SE(qq) {
      return null !== qq && "object" === typeof qq && void 0 !== qq.quantized
    }

    function pE(qq, Eq) {
      if (qq.wrap) {
        if (!Number.isFinite(Eq)) return 0;
        const gq = qq.range;
        let Yq = (Eq - qq.min) % gq;
        Yq < 0 && (Yq += gq);
        const lq = qq.span;
        return Math.floor(Yq / gq * lq + .5) % lq
      }
      if (Eq !== Eq) return 0;
      const gq = Eq < qq.min ? qq.min : Eq > qq.max ? qq.max : Eq;
      return Math.floor((gq - qq.min) / qq.range * qq.span + .5)
    }

    function GE(qq, Eq) {
      return qq.min + Eq / qq.span * qq.range
    }

    function LE(qq) {
      const Eq = EE[qq.wire];
      return (gq, Yq, lq) => Eq(gq, pE(qq, Yq), lq)
    }
    class JE {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(qq) {
        const Eq = Object.getPrototypeOf(qq);
        if (Eq !== bY) {
          let gq = JE.inheritedTypes.get(Eq);
          gq || (gq = new Set, JE.inheritedTypes.set(Eq, gq)), gq.add(qq)
        }
      }
      static cache(qq) {
        let Eq = JE.cachedContexts.get(qq);
        return Eq || (Eq = new JE(qq), JE.cachedContexts.set(qq, Eq)), Eq
      }
      constructor(qq) {
        qq && this.discoverTypes(qq)
      }
      has(qq) {
        return this.schemas.has(qq)
      }
      get(qq) {
        return this.types[qq]
      }
      add(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(qq) && (this.types[Eq] = qq, null == qq[Symbol.metadata] && wE.initialize(qq), this.schemas.set(qq, Eq), !0)
      }
      getTypeId(qq) {
        return this.schemas.get(qq)
      }
      discoverTypes(qq) {
        if (!this.add(qq)) return;
        JE.inheritedTypes.get(qq)?.forEach((qq => {
          this.discoverTypes(qq)
        }));
        let Eq = qq;
        for (;
          (Eq = Object.getPrototypeOf(Eq)) && Eq !== bY && Eq !== Function.prototype;) this.discoverTypes(Eq);
        const gq = qq[Symbol.metadata];
        (gq[bq] || gq[zq]) && (this.hasFilters = !0);
        for (const Yq in gq) {
          const qq = gq[Yq].type;
          if ("string" !== typeof qq && !SE(qq))
            if ("function" === typeof qq) this.discoverTypes(qq);
            else {
              const Eq = Object.values(qq)[0];
              if ("string" === typeof Eq) continue;
              this.discoverTypes(Eq)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function kE(qq) {
      const Eq = UE(qq);
      return Eq ? {
        complexTypeKlass: PE[Eq],
        childType: qq[Eq]
      } : {
        complexTypeKlass: !1,
        childType: qq
      }
    }

    function RE(qq, Eq) {
      const gq = FE(qq),
        Yq = UE(gq),
        lq = Yq && UE(gq[Yq]);
      if (lq) throw new Error(`${Eq?`${Eq}: `:""}@colyseus/schema: nested collections are not supported ("${Yq}" of "${lq}"). Collections can only hold primitive types or Schema classes, wrap the inner ${lq} in a Schema class.`);
      return gq
    }

    function UE(qq) {
      return "object" === typeof qq && null !== qq ? Object.keys(qq).find((qq => void 0 !== PE[qq])) : void 0
    }

    function FE(qq) {
      if ("object" !== typeof qq || null === qq) return qq;
      if (Array.isArray(qq)) return {
        array: FE(qq[0])
      };
      const Eq = function(qq) {
        const Eq = Object.keys(qq),
          gq = Eq.filter((qq => /\d+/.test(qq)));
        if (gq.length > 0 && gq.length === Eq.length / 2 && qq[qq[gq[0]]] == gq[0]) return "number";
        if (Eq.length > 0 && Eq.every((Eq => qq[Eq] === Eq))) return "string"
      }(qq);
      if (Eq) return Eq;
      if (SE(qq)) return "string" === typeof qq.quantized.wire ? qq : {
        quantized: zE(qq.quantized)
      };
      if (void 0 !== qq.type) return FE(qq.type);
      const gq = UE(qq);
      return gq && (qq[gq] = FE(qq[gq])), qq
    }
    const sE = [nq, Zq, fq, Mq, Tq, zq, vq];

    function XE(qq, Eq, gq) {
      qq[Eq] || Object.defineProperty(qq, Eq, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), qq[Eq].push(gq)
    }
    const wE = {
        addField(qq, Eq, gq, Yq, lq) {
          if (Eq >= 63) throw new Error(`Can't define field '${gq}'.\nSchema instances may only have up to 63 fields.`);
          qq[Eq] = Object.assign(qq[Eq] || {}, {
            type: Yq,
            index: Eq,
            name: gq
          }), Object.defineProperty(qq, tq, {
            value: qq[tq] || {},
            enumerable: !1,
            configurable: !0
          }), qq[tq][gq] = lq || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(qq, hq, {
            value: Eq,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(qq, gq, {
            value: Eq,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof qq[Eq].type || SE(qq[Eq].type) || (void 0 === qq[nq] && Object.defineProperty(qq, nq, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), qq[nq].push(Eq));
          const Oq = qq[Eq].type;
          if (Oq && "object" === typeof Oq && void 0 !== Oq.stream) {
            if (void 0 !== Oq.array) throw new Error(rE);
            qq[Eq].stream = !0, qq[zq] || Object.defineProperty(qq, zq, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), qq[zq].includes(Eq) || qq[zq].push(Eq);
            const lq = Yq?.priority;
            "function" === typeof lq && wE.setStreamPriority(qq, gq, lq)
          }
        },
        setTag(qq, Eq, gq) {
          const Yq = qq[Eq];
          if (qq[Yq].tag = gq, qq[bq] || (Object.defineProperty(qq, bq, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(qq, iq, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), qq[bq].push(Yq), gq < 0) qq[iq][gq] || (qq[iq][gq] = []), qq[iq][gq].push(Yq);
          else
            for (let lq = gq; lq > 0; lq &= lq - 1) {
              const Eq = lq & -lq;
              qq[iq][Eq] || (qq[iq][Eq] = []), qq[iq][Eq].push(Yq)
            }
        },
        setUnreliable(qq, Eq) {
          const gq = qq[Eq];
          if ("string" !== typeof qq[gq].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Eq}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          qq[gq].unreliable = !0, qq[Zq] || Object.defineProperty(qq, Zq, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), qq[Zq].push(gq)
        },
        setPatchOnly(qq, Eq) {
          const gq = qq[Eq];
          if (qq[gq].fullStateOnly) throw new Error(`field "${Eq}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          qq[gq].patchOnly = !0, XE(qq, fq, gq), XE(qq, Mq, gq)
        },
        setDeprecated(qq, Eq) {
          const gq = qq[Eq];
          qq[gq].deprecated = !0, XE(qq, Mq, gq), Object.defineProperty(qq, gq, {
            value: qq[gq],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(qq, Eq) {
          const gq = qq[Eq];
          if (qq[gq].patchOnly) throw new Error(`field "${Eq}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          qq[gq].fullStateOnly = !0, XE(qq, Tq, gq)
        },
        setStream(qq, Eq) {
          const gq = qq[Eq];
          qq[gq].stream = !0, qq[zq] || Object.defineProperty(qq, zq, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), qq[zq].push(gq)
        },
        setStreamPriority(qq, Eq, gq) {
          const Yq = qq[Eq];
          qq[Sq] || Object.defineProperty(qq, Sq, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), qq[Sq][Yq] = gq
        },
        getStreamPriority: (qq, Eq) => qq?.[Sq]?.[Eq],
        defineField(qq, Eq, gq, Yq, lq) {
          const Oq = RE(lq, `${qq.name}.${Yq}`),
            {
              complexTypeKlass: mq,
              childType: xq
            } = kE(Oq);
          wE.addField(Eq, gq, Yq, Oq, yY(Yq, gq, xq, mq)), Eq[tq][Yq] && Object.defineProperty(qq.prototype, Yq, Eq[tq][Yq]), ("string" === typeof Oq || SE(Oq)) && (Eq[vq] || Object.defineProperty(Eq, vq, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Eq[vq][gq] = "string" === typeof Oq ? EE[Oq] : LE(Oq.quantized))
        },
        setFields(qq, Eq) {
          const gq = qq.prototype.constructor;
          JE.register(gq);
          const Yq = Object.getPrototypeOf(gq),
            lq = Yq && Yq[Symbol.metadata],
            Oq = wE.initialize(gq);
          gq[Aq] || (gq[Aq] = bY[Aq]), gq[cq] || (gq[cq] = bY[cq]), gq[uq] || (gq[uq] = bY[uq]), gq.prototype.toJSON || (gq.prototype.toJSON = bY.prototype.toJSON);
          let mq = Oq[hq] ?? (lq && lq[hq]) ?? -1;
          mq++, Oq[vq] || Object.defineProperty(Oq, vq, {
            value: lq?.[vq] ? [...lq[vq]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const xq in Eq) {
            if (void 0 !== Oq[xq]) throw new Error(`@colyseus/schema: Duplicate '${xq}' definition on '${gq.name||"(anonymous)"}'.`);
            wE.defineField(gq, Oq, mq, xq, Eq[xq]), mq++
          }
          return qq
        },
        isDeprecated: (qq, Eq) => !0 === qq[Eq].deprecated,
        initialize(qq) {
          const Eq = Object.getPrototypeOf(qq),
            gq = Eq[Symbol.metadata];
          let Yq = qq[Symbol.metadata] ?? Object.create(null);
          if (Eq !== bY && Yq === gq && (Yq = Object.create(null), gq)) {
            Object.setPrototypeOf(Yq, gq), Object.defineProperty(Yq, hq, {
              value: gq[hq],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== gq[bq] && (Object.defineProperty(Yq, bq, {
              value: [...gq[bq]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Yq, iq, {
              value: {
                ...gq[iq]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const qq of sE) {
              const Eq = gq[qq];
              void 0 !== Eq && Object.defineProperty(Yq, qq, {
                value: [...Eq],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Yq, tq, {
              value: {
                ...gq[tq]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(qq, Symbol.metadata, {
            value: Yq,
            writable: !1,
            configurable: !0
          }), Yq
        },
        isValidInstance: qq => qq.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(qq.constructor[Symbol.metadata], hq),
        getFields(qq) {
          const Eq = qq[Symbol.metadata],
            gq = {};
          for (let Yq = 0; Yq <= Eq[hq]; Yq++) gq[Eq[Yq].name] = Eq[Yq].type;
          return gq
        },
        hasViewTagAtIndex: (qq, Eq) => qq?.[bq]?.includes(Eq),
        hasUnreliableAtIndex: (qq, Eq) => qq?.[Zq]?.includes(Eq),
        hasPatchOnlyAtIndex: (qq, Eq) => qq?.[fq]?.includes(Eq),
        hasFullStateOnlyAtIndex: (qq, Eq) => qq?.[Tq]?.includes(Eq),
        hasStreamAtIndex: (qq, Eq) => qq?.[zq]?.includes(Eq)
      },
      KE = (qq, Eq, gq) => qq(Eq, gq);
    class CE {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(qq) {
        this.ops = new Uint8Array(Math.max(qq + 1, 1))
      }
      record(qq, Eq) {
        const gq = this.ops[qq];
        0 === gq ? this.ops[qq] = Eq : (gq === lq.DELETE || gq === lq.ADD && Eq === lq.DELETE_AND_ADD) && (this.ops[qq] = lq.DELETE_AND_ADD), qq < 32 ? this.dirtyLow |= 1 << qq : this.dirtyHigh |= 1 << qq - 32
      }
      recordDelete(qq, Eq) {
        this.ops[qq] = Eq, qq < 32 ? this.dirtyLow |= 1 << qq : this.dirtyHigh |= 1 << qq - 32
      }
      recordRaw(qq, Eq) {
        this.record(qq, Eq)
      }
      operationAt(qq) {
        const Eq = this.ops[qq];
        return 0 === Eq ? void 0 : Eq
      }
      setOperationAt(qq, Eq) {
        this.ops[qq] = Eq
      }
      forEach(qq) {
        this.forEachWithCtx(qq, KE)
      }
      forEachWithCtx(qq, Eq) {
        let gq = this.dirtyLow,
          Yq = this.dirtyHigh;
        const lq = this.ops;
        for (; 0 !== gq;) {
          const Yq = gq & -gq,
            Oq = 31 - Math.clz32(Yq);
          gq ^= Yq, Eq(qq, Oq, lq[Oq])
        }
        for (; 0 !== Yq;) {
          const gq = Yq & -Yq,
            Oq = 31 - Math.clz32(gq) + 32;
          Yq ^= gq, Eq(qq, Oq, lq[Oq])
        }
      }
      size() {
        return eE(this.dirtyLow) + eE(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class IE {
      Ha = new Map;
      pureOps = [];
      record(qq, Eq) {
        const gq = this.Ha.get(qq);
        void 0 === gq ? this.Ha.set(qq, Eq) : (gq === lq.DELETE || gq === lq.ADD && Eq === lq.DELETE_AND_ADD) && this.Ha.set(qq, lq.DELETE_AND_ADD)
      }
      recordDelete(qq, Eq) {
        this.Ha.set(qq, Eq)
      }
      recordRaw(qq, Eq) {
        this.Ha.set(qq, Eq)
      }
      recordPure(qq) {
        this.pureOps.push([this.Ha.size, qq])
      }
      operationAt(qq) {
        return this.Ha.get(qq)
      }
      setOperationAt(qq, Eq) {
        this.Ha.has(qq) && this.Ha.set(qq, Eq)
      }
      forEach(qq) {
        this.forEachWithCtx(qq, KE)
      }
      forEachWithCtx(qq, Eq) {
        const gq = this.pureOps;
        if (gq.length > 0) {
          let Yq = 0,
            lq = 0;
          for (const [Oq, mq] of this.Ha) {
            for (; Yq < gq.length && gq[Yq][0] <= lq;) {
              const lq = gq[Yq++][1];
              Eq(qq, -lq, lq)
            }
            Eq(qq, Oq, mq), lq++
          }
          for (; Yq < gq.length;) {
            const lq = gq[Yq++][1];
            Eq(qq, -lq, lq)
          }
        } else
          for (const [Yq, lq] of this.Ha) Eq(qq, Yq, lq)
      }
      size() {
        return this.Ha.size + this.pureOps.length
      }
      has() {
        return this.Ha.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Ha.clear(), this.pureOps.length = 0
      }
      shift(qq) {
        const Eq = new Map;
        for (const [gq, Yq] of this.Ha) Eq.set(gq + qq, Yq);
        this.Ha = Eq
      }
    }

    function eE(qq) {
      return 16843009 * ((qq = (858993459 & (qq -= qq >>> 1 & 1431655765)) + (qq >>> 2 & 858993459)) + (qq >>> 4) & 252645135) >>> 24
    }

    function DE(qq) {
      if (void 0 === qq) return 0;
      let Eq = 0;
      for (let gq = 0, Yq = qq.length; gq < Yq; gq++) {
        const Yq = qq[gq];
        Yq < 32 && (Eq |= 1 << Yq)
      }
      return Eq
    }

    function qg(qq) {
      const Eq = qq.constructor;
      if (Object.prototype.hasOwnProperty.call(Eq, rq)) return Eq[rq];
      const gq = Eq[Symbol.metadata],
        Yq = wE.isValidInstance(qq),
        lq = (gq?.[bq]?.length ?? 0) > 0,
        Oq = function(qq) {
          const Eq = [],
            gq = [],
            Yq = [],
            lq = [],
            Oq = qq?.[hq];
          if (void 0 === Oq) return {
            names: Eq,
            types: gq,
            tags: Yq,
            encoders: lq
          };
          const mq = qq[vq];
          for (let xq = 0; xq <= Oq; xq++) {
            const Oq = qq[xq];
            void 0 !== Oq ? (Eq[xq] = Oq.name, gq[xq] = Oq.type, Yq[xq] = Oq.tag, lq[xq] = mq?.[xq]) : (Eq[xq] = void 0, gq[xq] = void 0, Yq[xq] = void 0, lq[xq] = void 0)
          }
          return {
            names: Eq,
            types: gq,
            tags: Yq,
            encoders: lq
          }
        }(gq),
        mq = Yq && !lq ? void 0 : Eq[Bq],
        xq = {
          encoder: Eq[cq],
          filter: mq,
          metadata: gq,
          isSchema: Yq,
          filterBitmask: Yq ? DE(gq?.[bq]) : 0,
          hasAnyFullStateOnly: (gq?.[Tq]?.length ?? 0) > 0,
          hasAnyUnreliable: (gq?.[Zq]?.length ?? 0) > 0,
          hasAnyStream: (gq?.[zq]?.length ?? 0) > 0,
          hasAnyView: lq,
          fullStateOnlyBitmask: DE(gq?.[Tq]),
          unreliableBitmask: DE(gq?.[Zq]),
          streamBitmask: DE(gq?.[zq]),
          names: Oq.names,
          types: Oq.types,
          tags: Oq.tags,
          encoders: Oq.encoders
        };
      return Object.defineProperty(Eq, rq, {
        value: xq,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), xq
    }

    function Eg(qq, Eq) {
      if (void 0 !== qq.parentRef && Eq(qq.parentRef, qq._parentIndex)) return !0;
      for (let gq = qq.extraParents; void 0 !== gq; gq = gq.next)
        if (Eq(gq.ref, gq.index)) return !0;
      return !1
    }
    const gg = (qq, Eq) => {
        qq.isFieldUnreliable(Eq) ? qq.ensureUnreliableRecorder().record(Eq, lq.ADD) : qq.record(Eq, lq.ADD)
      },
      Yg = (qq, Eq) => qq(Eq);

    function lg(qq, Eq, gq) {
      const Yq = qq.refTarget;
      if (void 0 !== Yq[dq]) {
        if (qq.isPatchOnly) return;
        if (Array.isArray(Yq.items)) {
          const qq = Yq.items;
          for (let Yq = 0, lq = qq.length; Yq < lq; Yq++) void 0 !== qq[Yq] && gq(Eq, Yq)
        } else if (void 0 !== Yq.journal)
          for (const [qq, lq] of Yq.journal.keyByIndex) Yq.$items.has(lq) && gq(Eq, qq);
        else if (void 0 !== Yq.$items)
          for (const qq of Yq.$items.keys()) gq(Eq, qq)
      } else {
        const lq = qq.metadata;
        if (!lq) return;
        const Oq = lq[hq] ?? -1,
          mq = lq[Mq],
          xq = qq.encDescriptor.names;
        for (let qq = 0; qq <= Oq; qq++) {
          const lq = xq[qq];
          if (void 0 === lq) continue;
          if (mq && mq.includes(qq)) continue;
          const Oq = Yq[lq];
          void 0 !== Oq && null !== Oq && gq(Eq, qq)
        }
      }
    }

    function Og(qq, Eq, gq, Yq) {
      ! function(qq, Eq, gq) {
        if (!Eq) return;
        const Yq = Eq[Vq],
          lq = !Yq._isSchema;
        let Oq;
        lq ? (Eq = Yq.parent, gq = Yq.parentIndex, Oq = Eq?.[Vq].metadata) : Oq = Yq.metadata;
        const mq = (Oq?.[fq]?.includes(gq) ? rg : 0) | (Oq?.[Tq]?.includes(gq) ? vg : 0),
          xq = Yq.flags & bg | mq,
          Aq = qq.flags;
        qq.flags = Aq | xq;
        xq & ~Aq & vg && (qq.reset(), qq.unreliableRecorder?.reset());
        const cq = qq.root?.types;
        if (!cq?.hasFilters) return;
        const uq = Oq?.[bq]?.includes(gq) ?? !1,
          Bq = Oq?.[zq]?.includes(gq) ?? !1,
          Wq = Yq.isFiltered || uq || Bq;
        if (qq.isFiltered = Wq, Bq && !lq) {
          qq.isStreamCollection = !0;
          const Eq = hE(qq.ref);
          if (void 0 === Eq.priority) {
            const qq = wE.getStreamPriority(Oq, gq);
            void 0 !== qq && (Eq.priority = qq)
          }
          qq.root?.registerStream(qq.ref)
        }
        if (Wq) {
          const Eq = xg(qq);
          qq.isVisibilitySharedWithParent = Yq.isFiltered && Eq && !Bq && (!uq || lq && Oq[gq].tag !== aY)
        }
      }(qq, Eq, gq), qq.isFullStateOnly || (qq.has() && qq.root?.enqueueChangeTree(qq), qq.unreliableRecorder?.has() && qq.root?.enqueueUnreliable(qq), qq.has() || qq.unreliableRecorder?.has() || qq.root?.enqueueChangeTree(qq))
    }

    function mg(qq) {
      const Eq = qq.pendingFilterRefresh;
      for (let gq = 0; gq < Eq.length; gq++) {
        const qq = Eq[gq];
        0 !== (qq.flags & ng) && Ag(qq)
      }
      Eq.length = 0
    }

    function xg(qq) {
      return qq._isSchema || "string" !== typeof qq.refTarget[dq]
    }

    function Ag(qq) {
      qq.flags &= ~ng;
      const Eq = qq.root;
      if (void 0 === Eq || void 0 === qq.parentRef) return;
      const gq = xg(qq);
      let Yq = Ng(qq, qq.parentRef, qq._parentIndex, gq);
      for (let Oq = qq.extraParents; void 0 !== Oq && Yq !== Wg; Oq = Oq.next) Yq |= Ng(qq, Oq.ref, Oq.index, gq);
      if (0 === Yq) return;
      qq.isVisibilitySharedWithParent = 0 !== (Yq & Bg);
      const lq = 0 === (Yq & ug);
      lq !== qq.isFiltered && (qq.isFiltered = lq, lq || qq.isFullStateOnly || (qq.forEachLiveWithCtx(qq, gg), qq.has() && Eq.enqueueChangeTree(qq), qq.unreliableRecorder?.has() && Eq.enqueueUnreliable(qq)), qq.forEachChildWithCtx(qq, ag))
    }
    const cg = 1,
      ug = 2,
      Bg = 4,
      Wg = cg | ug | Bg;

    function Ng(qq, Eq, gq, Yq) {
      const lq = Eq[Vq];
      if (lq.root !== qq.root || ! function(qq, Eq, gq) {
          const Yq = Eq.refTarget;
          if (Eq.isArray) {
            const Eq = Yq.items,
              lq = Eq[gq];
            if (void 0 !== lq && lq[Vq] === qq) return !0;
            for (let gq = 0, Yq = Eq.length; gq < Yq; gq++) {
              const Yq = Eq[gq];
              if (void 0 !== Yq && Yq[Vq] === qq) return !0
            }
            return !1
          }
          const lq = Eq.getValue(gq);
          return void 0 !== lq && lq[Vq] === qq
        }(qq, lq, gq)) return 0;
      lq.flags & ng && Ag(lq);
      let Oq = cg;
      if (lq._isSchema) {
        void 0 !== lq.encDescriptor.tags[gq] || lq.isFieldStream(gq) || (lq.isFiltered ? Yq && (Oq |= Bg) : Oq |= ug)
      } else if (lq.isFiltered) {
        if (Yq && !lq.isStreamCollection) {
          const qq = lq.parent?.[Vq];
          (qq?._isSchema ? qq.encDescriptor.tags[lq.parentIndex] : void 0) !== aY && (Oq |= Bg)
        }
      } else Oq |= ug;
      return Oq
    }
    const ag = (qq, Eq, gq) => {
      Ag(Eq)
    };

    function Vg(qq, Eq, gq, Yq) {
      if (qq.addParent(Eq, Yq), !gq) return;
      const lq = gq.add(qq);
      gq !== qq.root && (qq.root = gq, Og(qq, Eq, Yq));
      const Oq = Eq?.[Vq];
      if (void 0 !== Oq && void 0 !== Oq.subscribedViews && void 0 !== Eq[dq] && function(qq, Eq, gq, Yq) {
          const lq = qq.subscribedViews;
          if (void 0 === lq) return;
          const Oq = qq.isStreamCollection,
            mq = Oq ? qq.ref : void 0,
            xq = Oq ? void 0 : gq[Vq];
          for (let Aq = 0, cq = lq.length; Aq < cq; Aq++) {
            let qq = lq[Aq];
            for (; 0 !== qq;) {
              const gq = qq & -qq;
              qq ^= gq;
              const cq = 32 * Aq + (31 - Math.clz32(gq)),
                uq = Yq.activeViews.get(cq),
                Bq = uq?.deref();
              void 0 !== Bq ? Oq ? fE(mq, cq, Eq) : void 0 !== xq && Bq.markVisible(xq) : lq[Aq] &= ~gq
            }
          }
        }(Oq, Yq, qq.ref, gq), lq) {
        let Eq = og[Pg];
        void 0 === Eq && (Eq = {
          parentRef: void 0,
          root: void 0
        }, og[Pg] = Eq), Eq.parentRef = qq.ref, Eq.root = gq, Pg++, jg(qq, Eq, Qg), Pg--
      }
    }

    function dg(qq, Eq, gq) {
      qq(Eq, gq)
    }

    function jg(qq, Eq, gq) {
      const Yq = qq.refTarget;
      if (Yq[dq]) {
        if ("string" !== typeof Yq[dq]) {
          const qq = Yq.items;
          if (void 0 !== qq)
            for (let Yq = 0, lq = qq.length; Yq < lq; Yq++) {
              const lq = qq[Yq];
              lq && gq(Eq, lq[Vq], Yq)
            } else {
              const qq = Yq.$items,
                lq = Yq._collectionIndexes;
              for (const Yq of qq.keys()) {
                const Oq = qq.get(Yq);
                Oq && gq(Eq, Oq[Vq], lq?.[Yq] ?? Yq)
              }
            }
        }
      } else {
        const lq = qq.metadata,
          Oq = lq?.[nq];
        if (!Oq) return;
        const mq = qq.encDescriptor.names;
        for (let qq = 0, xq = Oq.length; qq < xq; qq++) {
          const lq = Oq[qq],
            xq = Yq[mq[lq]];
          xq && gq(Eq, xq[Vq], lq)
        }
      }
    }

    function Hg(qq, Eq, gq) {
      Eq.root !== qq ? Eq.setRoot(qq) : qq.add(Eq)
    }
    const og = [];
    let Pg = 0;

    function Qg(qq, Eq, gq) {
      if (Eq.root === qq.root) return qq.root.add(Eq), void qq.root.moveNextToParent(Eq);
      Eq.setParent(qq.parentRef, qq.root, gq)
    }

    function yg(qq, Eq, gq) {
      const Yq = (3 & gq) << 3;
      return gq < 4 ? qq >>> Yq & 255 : Eq >>> Yq & 255
    }
    const tg = (qq, Eq, gq) => qq(Eq, gq);
    const rg = 16,
      vg = 32,
      hg = 128,
      ng = 256,
      bg = rg | vg;
    class ig {
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
      set isFiltered(qq) {
        this.flags = qq ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(qq) {
        this.flags = qq ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(qq) {
        this.flags = qq ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(qq) {
        this.flags = qq ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & rg)
      }
      set isPatchOnly(qq) {
        this.flags = qq ? this.flags | rg : this.flags & ~rg
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & vg)
      }
      set isFullStateOnly(qq) {
        this.flags = qq ? this.flags | vg : this.flags & ~vg
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(qq) {
        this.flags = qq ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & hg)
      }
      set needsRestage(qq) {
        this.flags = qq ? this.flags | hg : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new CE(this.metadata?.[hq] ?? 0) : new IE), this.unreliableRecorder
      }
      isFieldUnreliable(qq) {
        const Eq = this.encDescriptor;
        return !!Eq.hasAnyUnreliable && (qq < 32 ? 0 !== (Eq.unreliableBitmask & 1 << qq) : wE.hasUnreliableAtIndex(this.metadata, qq))
      }
      isFieldFullStateOnly(qq) {
        if (this.isFullStateOnly) return !0;
        const Eq = this.encDescriptor;
        return !!Eq.hasAnyFullStateOnly && (qq < 32 ? 0 !== (Eq.fullStateOnlyBitmask & 1 << qq) : wE.hasFullStateOnlyAtIndex(this.metadata, qq))
      }
      isFieldStream(qq) {
        const Eq = this.encDescriptor;
        return !!Eq.hasAnyStream && (qq < 32 ? 0 !== (Eq.streamBitmask & 1 << qq) : wE.hasStreamAtIndex(this.metadata, qq))
      }
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq;
        this.ref = qq, this.refTarget = Eq;
        const gq = qg(qq);
        this.encDescriptor = gq, this.metadata = gq.metadata;
        const Yq = gq.isSchema;
        if (this._isSchema = Yq, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Yq) {
          const qq = this.metadata?.[hq] ?? 0;
          qq > 7 && (this.ops = new Uint8Array(qq + 1))
        } else this.collDirty = new Map
      }
      _opAt(qq) {
        const Eq = this.ops;
        if (void 0 !== Eq) return Eq[qq];
        const gq = (3 & qq) << 3;
        return qq < 4 ? this.opsLow >>> gq & 255 : this.opsHigh >>> gq & 255
      }
      _opPut(qq, Eq) {
        const gq = this.ops;
        if (void 0 !== gq) return void(gq[qq] = Eq);
        const Yq = (3 & qq) << 3,
          lq = ~(255 << Yq);
        qq < 4 ? this.opsLow = this.opsLow & lq | Eq << Yq : this.opsHigh = this.opsHigh & lq | Eq << Yq
      }
      _markDirty(qq) {
        qq < 32 ? this.dirtyLow |= 1 << qq : this.dirtyHigh |= 1 << qq - 32
      }
      record(qq, Eq) {
        if (this._isSchema) {
          const gq = this._opAt(qq);
          0 === gq ? this._opPut(qq, Eq) : (gq === lq.DELETE || gq === lq.ADD && Eq === lq.DELETE_AND_ADD) && this._opPut(qq, lq.DELETE_AND_ADD), this._markDirty(qq)
        } else {
          const gq = this.collDirty,
            Yq = gq.get(qq);
          let Oq;
          Oq = void 0 === Yq ? Eq : Yq === lq.DELETE || Yq === lq.ADD && Eq === lq.DELETE_AND_ADD ? lq.DELETE_AND_ADD : Yq, gq.set(qq, Oq)
        }
      }
      recordDelete(qq, Eq) {
        this._isSchema ? (this._opPut(qq, Eq), this._markDirty(qq)) : this.collDirty.set(qq, Eq)
      }
      recordRaw(qq, Eq) {
        this._isSchema ? (this._opPut(qq, Eq), this._markDirty(qq)) : this.collDirty.set(qq, Eq)
      }
      recordPure(qq) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, qq])
      }
      operationAt(qq) {
        if (this._isSchema) {
          const Eq = this._opAt(qq);
          return 0 === Eq ? void 0 : Eq
        }
        return this.collDirty.get(qq)
      }
      setOperationAt(qq, Eq) {
        if (this._isSchema) this._opPut(qq, Eq);
        else {
          const gq = this.collDirty;
          gq.has(qq) && gq.set(qq, Eq)
        }
      }
      forEach(qq) {
        this.forEachWithCtx(qq, tg)
      }
      forEachWithCtx(qq, Eq) {
        if (this._isSchema) {
          let gq = this.dirtyLow,
            Yq = this.dirtyHigh;
          const lq = this.ops;
          if (void 0 !== lq) {
            for (; 0 !== gq;) {
              const Yq = gq & -gq,
                Oq = 31 - Math.clz32(Yq);
              gq ^= Yq, Eq(qq, Oq, lq[Oq])
            }
            for (; 0 !== Yq;) {
              const gq = Yq & -Yq,
                Oq = 31 - Math.clz32(gq) + 32;
              Yq ^= gq, Eq(qq, Oq, lq[Oq])
            }
          } else {
            const Yq = this.opsLow,
              lq = this.opsHigh;
            for (; 0 !== gq;) {
              const Oq = gq & -gq,
                mq = 31 - Math.clz32(Oq);
              gq ^= Oq, Eq(qq, mq, yg(Yq, lq, mq))
            }
          }
          return
        }
        const gq = this.collDirty,
          Yq = this.collPureOps;
        if (void 0 !== Yq && Yq.length > 0) {
          let lq = 0,
            Oq = 0;
          for (const [mq, xq] of gq) {
            for (; lq < Yq.length && Yq[lq][0] <= Oq;) {
              const gq = Yq[lq++][1];
              Eq(qq, -gq, gq)
            }
            Eq(qq, mq, xq), Oq++
          }
          for (; lq < Yq.length;) {
            const gq = Yq[lq++][1];
            Eq(qq, -gq, gq)
          }
        } else
          for (const [lq, Oq] of gq) Eq(qq, lq, Oq)
      }
      size() {
        return this._isSchema ? eE(this.dirtyLow) + eE(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(qq, Eq) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const gq = this.collDirty,
          Yq = new Map,
          Oq = !this.paused && !this.isFullStateOnly;
        if (qq > 0)
          for (const [lq, mq] of gq) lq < qq && Yq.set(lq, mq);
        if (Oq)
          for (let mq = 0; mq < Eq; mq++) Yq.set(qq + mq, lq.ADD);
        for (const [lq, mq] of gq) lq >= qq && Yq.set(lq + Eq, mq);
        this.collDirty = Yq, Oq && this.root?.enqueueChangeTree(this)
      }
      removeAt(qq, Eq) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const gq = this.collDirty,
          Yq = qq + Eq;
        let lq = !1;
        for (const mq of gq.keys())
          if (mq >= Yq) {
            lq = !0;
            break
          } if (!lq) {
          for (let Eq = qq; Eq < Yq; Eq++) gq.delete(Eq);
          return
        }
        const Oq = new Map;
        for (const [mq, xq] of gq) mq < qq ? Oq.set(mq, xq) : mq >= Yq && Oq.set(mq - Eq, xq);
        this.collDirty = Oq
      }
      unshift(qq) {
        this.insertAt(0, qq)
      }
      setRoot(qq) {
        ! function(qq, Eq) {
          qq.root = Eq;
          const gq = Eq.add(qq);
          Og(qq, qq.parent, qq.parentIndex), gq && jg(qq, Eq, Hg)
        }(this, qq)
      }
      setParent(qq, Eq, gq) {
        Vg(this, qq, Eq, gq)
      }
      forEachChild(qq) {
        jg(this, qq, dg)
      }
      forEachChildWithCtx(qq, Eq) {
        jg(this, qq, Eq)
      }
      forEachLive(qq) {
        lg(this, qq, Yg)
      }
      forEachLiveWithCtx(qq, Eq) {
        lg(this, qq, Eq)
      }
      operation(qq) {
        this.paused || this.isFullStateOnly || (this.recordPure(qq), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(qq, Eq, gq) {
        if (!this.paused && !this.isFieldFullStateOnly(qq)) {
          if (this.isFieldUnreliable(qq) && !this.isNew) {
            const Yq = this.ensureUnreliableRecorder();
            return gq ? Yq.recordRaw(qq, Eq) : Yq.record(qq, Eq), void this.root?.enqueueUnreliable(this)
          }
          gq ? this.recordRaw(qq, Eq) : this.record(qq, Eq), this.root?.enqueueChangeTree(this)
        }
      }
      change(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lq.ADD;
        this._routeAndRecord(qq, Eq, !1)
      }
      indexedOperation(qq, Eq) {
        this._routeAndRecord(qq, Eq, !0)
      }
      getChange(qq) {
        return this.operationAt(qq)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(qq) {
        const Eq = this.paused;
        this.paused = !0;
        try {
          return qq()
        } finally {
          this.paused = Eq
        }
      }
      markDirty(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lq.ADD;
        const gq = this.paused;
        this.paused = !1;
        try {
          this.change(qq, Eq)
        } finally {
          this.paused = gq
        }
      }
      getValue(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Wq](qq, Eq)
      }
      delete(qq, Eq) {
        if (void 0 === qq) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${qq}'`)
          } catch (Ol) {
            console.warn(Ol)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(qq)) return this.getValue(qq);
        const gq = this.isFieldUnreliable(qq) && !this.isNew;
        gq ? this.ensureUnreliableRecorder().recordDelete(qq, Eq ?? lq.DELETE) : this.recordDelete(qq, Eq ?? lq.DELETE);
        const Yq = this.getValue(qq);
        return Yq && Yq[Vq] && this.root?.remove(Yq[Vq]), gq ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Yq
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Hq]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Hq]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Hq]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const qq = qq => {
          if (qq < 0) return;
          const Eq = this.getValue(qq);
          Eq && Eq[Vq] && Eq[Vq].discardAll()
        };
        this.forEach(qq), this.unreliableRecorder?.forEach(qq), this.discard()
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
      addParent(qq, Eq) {
        ! function(qq, Eq, gq) {
          if (qq.parentRef) {
            if (qq.parentRef[Vq] === Eq[Vq]) return void(qq._parentIndex = gq);
            if (Eg(qq, ((qq, gq) => qq[Vq] === Eq[Vq]))) return void(qq._parentIndex = gq)
          }
          void 0 === qq.parentRef ? (qq.parentRef = Eq, qq._parentIndex = gq) : (qq.extraParents = {
            ref: qq.parentRef,
            index: qq._parentIndex,
            next: qq.extraParents
          }, qq.parentRef = Eq, qq._parentIndex = gq)
        }(this, qq, Eq)
      }
      setParentIndex(qq, Eq) {
        ! function(qq, Eq, gq) {
          if (void 0 !== qq.extraParents)
            if (qq.parentRef[Vq] !== Eq[Vq]) {
              for (let Yq = qq.extraParents; void 0 !== Yq; Yq = Yq.next)
                if (Yq.ref[Vq] === Eq[Vq]) return void(Yq.index = gq)
            } else qq._parentIndex = gq;
          else qq._parentIndex = gq
        }(this, qq, Eq)
      }
      removeParent() {
        return function(qq, Eq) {
          if (qq.parentRef && qq.parentRef[Vq] === Eq[Vq]) return qq.extraParents ? (qq.parentRef = qq.extraParents.ref, qq._parentIndex = qq.extraParents.index, qq.extraParents = qq.extraParents.next) : (qq.parentRef = void 0, qq._parentIndex = void 0), !0;
          let gq = qq.extraParents,
            Yq = null;
          for (; gq;) {
            if (gq.ref[Vq] === Eq[Vq]) return Yq ? Yq.next = gq.next : qq.extraParents = gq.next, !0;
            Yq = gq, gq = gq.next
          }
          return void 0 === qq.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(qq) {
        return function(qq, Eq) {
          if (void 0 !== qq.parentRef && Eq(qq.parentRef, qq._parentIndex)) return {
            ref: qq.parentRef,
            index: qq._parentIndex
          };
          for (let gq = qq.extraParents; void 0 !== gq; gq = gq.next)
            if (Eq(gq.ref, gq.index)) return {
              ref: gq.ref,
              index: gq.index
            }
        }(this, qq)
      }
      hasParent(qq) {
        return Eg(this, qq)
      }
      indexInParent(qq) {
        return function(qq, Eq) {
          if (qq.parentRef && qq.parentRef[Vq] === Eq[Vq]) return qq._parentIndex;
          for (let gq = qq.extraParents; void 0 !== gq; gq = gq.next)
            if (gq.ref[Vq] === Eq[Vq]) return gq.index
        }(this, qq)
      }
      getAllParents() {
        return function(qq) {
          const Eq = [];
          qq.parentRef && Eq.push({
            ref: qq.parentRef,
            index: qq._parentIndex
          });
          let gq = qq.extraParents;
          for (; gq;) Eq.push({
            ref: gq.ref,
            index: gq.index
          }), gq = gq.next;
          return Eq
        }(this)
      }
    }
    class Zg {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(qq) {
        this.ref = qq
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
      untracked(qq) {
        return qq()
      }
      markDirty() {}
      forEachChild(qq) {
        const Eq = this.ref;
        if (Eq[dq]) {
          if ("string" !== typeof Eq[dq])
            for (const [gq, Yq] of Eq.entries()) Yq && qq(Yq[Vq], Eq._collectionIndexes?.[gq] ?? gq);
          return
        }
        const gq = Eq.constructor,
          Yq = gq?.[Symbol.metadata];
        if (!Yq) return;
        const lq = Yq[nq] ?? [];
        for (let Oq = 0; Oq < lq.length; Oq++) {
          const gq = lq[Oq],
            mq = Eq[Yq[gq].name];
          mq && qq(mq[Vq], gq)
        }
      }
      forEachChildWithCtx(qq, Eq) {
        this.forEachChild(((gq, Yq) => Eq(qq, gq, Yq)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function fg(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq;
      var gq;
      Object.defineProperty(qq, Vq, {
        value: (gq = Eq, new Zg(gq)),
        enumerable: !1,
        writable: !0
      })
    }

    function Mg(qq, Eq, gq, Yq, Oq, mq, Aq) {
      void 0 !== Aq ? Aq(Eq, Yq, mq) : "string" === typeof gq ? EE[gq]?.(Eq, Yq, mq) : null != gq[Symbol.metadata] ? (EE.number(Eq, Yq[xq], mq), (Oq & lq.ADD) === lq.ADD && qq.tryEncodeTypeId(Eq, gq, Yq.constructor, mq)) : EE.number(Eq, Yq[xq], mq)
    }
    const Tg = function(qq, Eq, gq, Yq, Oq, mq, xq, Aq) {
        if (Eq[mq.offset++] = 255 & (Yq | Oq), Oq === lq.DELETE) return;
        const cq = gq.encDescriptor,
          uq = gq.ref,
          Bq = uq[Qq][Yq] ?? uq[cq.names[Yq]];
        Mg(qq, Eq, cq.types[Yq], Bq, Oq, mq, cq.encoders[Yq])
      },
      zg = function(qq, Eq, gq, Yq, Oq, mq) {
        if (Eq[mq.offset++] = 255 & Oq, EE.number(Eq, Yq, mq), Oq === lq.DELETE) return;
        const xq = gq.ref;
        if ((Oq & lq.ADD) === lq.ADD) {
          const qq = xq.$indexes.get(Yq);
          EE.string(Eq, qq, mq)
        }
        Mg(qq, Eq, xq[dq], xq[Wq](Yq), Oq, mq)
      },
      Sg = function(qq, Eq, gq, Yq, Oq, mq) {
        if (Eq[mq.offset++] = 255 & Oq, EE.number(Eq, Yq, mq), Oq === lq.DELETE) return;
        const xq = gq.ref;
        Mg(qq, Eq, xq[dq], xq[Wq](Yq), Oq, mq)
      },
      pg = function(qq, Eq, gq, Yq, Oq, mq) {
        const xq = gq.ref;
        (Oq & lq.ADD) === lq.ADD && "function" === typeof xq.set ? zg(qq, Eq, gq, Yq, Oq, mq) : Sg(qq, Eq, gq, Yq, Oq, mq)
      },
      Gg = function(qq, Eq, gq, Yq, Oq, mq, Aq, cq) {
        const uq = gq.refTarget,
          Bq = uq[dq],
          Nq = "string" !== typeof Bq;
        let aq;
        if (cq && gq.isFiltered && Nq) {
          const qq = uq.tmpItems[Yq];
          if (!qq) return;
          if (aq = qq[xq], Oq === lq.DELETE) Oq = lq.DELETE_BY_REFID;
          else if ((Oq & lq.ADD) === lq.ADD) Oq = lq.ADD_BY_REFID;
          else if ((Oq & lq.MOVE) === lq.MOVE) return
        } else if (Oq === lq.DELETE && Nq) {
          const qq = uq.tmpItems[Yq];
          if (!qq) return;
          aq = qq[xq], Oq = lq.DELETE_BY_REFID
        } else aq = Yq;
        if (Eq[mq.offset++] = 255 & Oq, EE.number(Eq, aq, mq), Oq === lq.DELETE || Oq === lq.DELETE_BY_REFID) return;
        Mg(qq, Eq, Bq, uq[Wq](Yq, Aq), Oq, mq)
      };

    function Lg(qq, Eq, gq, Yq, Oq, mq, Aq) {
      const cq = qq.resyncVisited;
      let uq = cq.get(qq.currentRefId);
      if (void 0 === uq && cq.set(qq.currentRefId, uq = new Set), uq.add(Yq), void 0 !== Oq && gq === lq.ADD && Oq !== mq) {
        const gq = Oq[xq];
        void 0 !== gq && (qq.root.removeRef(gq), Aq?.push({
          ref: Eq,
          refId: qq.currentRefId,
          op: lq.DELETE,
          dynamicIndex: Yq,
          value: void 0,
          previousValue: Oq
        }))
      }
    }

    function Jg(qq, Eq, gq, Yq) {
      const lq = Eq[xq];
      if (void 0 === lq || gq.has(lq)) return;
      gq.add(lq);
      const Oq = Eq.constructor[Symbol.metadata],
        mq = Oq?.[nq];
      if (void 0 === mq) return;
      const Aq = Oq[fq];
      for (let xq = 0; xq < mq.length; xq++) {
        const lq = mq[xq];
        if (void 0 !== Aq && Aq.includes(lq)) continue;
        const cq = Oq[lq],
          uq = Eq[cq.name];
        uq && (bY.is(cq.type) ? Jg(qq, uq, gq, Yq) : kg(qq, uq, gq, Yq))
      }
    }

    function kg(qq, Eq, gq, Yq) {
      const Oq = Eq[jq] ?? Eq,
        mq = Oq[xq];
      if (void 0 === mq || gq.has(mq)) return;
      gq.add(mq);
      const Aq = qq.resyncVisited.get(mq);
      if (void 0 === Aq) return;
      const cq = qq.root;
      Oq[aq](Aq, ((qq, gq) => {
        Yq?.push({
          ref: Eq,
          refId: mq,
          op: lq.DELETE,
          dynamicIndex: gq,
          value: void 0,
          previousValue: qq
        });
        const Oq = qq?.[xq];
        void 0 !== Oq && cq.removeRef(Oq)
      }), (Eq => {
        bY.isSchema(Eq) && Jg(qq, Eq, gq, Yq)
      }))
    }
    const Rg = 1,
      Ug = 2,
      Fg = 3,
      sg = 4,
      Xg = 5;

    function wg(qq, Eq, gq, Yq, Oq, mq, Aq, cq, uq) {
      const Bq = qq.root;
      let Wq;
      if ((Eq & lq.DELETE) === lq.DELETE) {
        const qq = Oq?.[xq];
        void 0 !== qq && Bq.removeRef(qq), Eq !== lq.DELETE_AND_ADD && gq[Nq](Yq), Wq = void 0
      }
      if (Eq === lq.DELETE);
      else if ("string" === typeof mq) Wq = oE[mq](Aq, cq);
      else if (SE(mq)) Wq = function(qq, Eq, gq) {
        return GE(qq, (0, oE[qq.wire])(Eq, gq))
      }(mq.quantized, Aq, cq);
      else if (bY.is(mq)) {
        const gq = oE.number(Aq, cq);
        if (Wq = Bq.refs.get(gq), (Eq & lq.ADD) === lq.ADD) {
          const Yq = qq.getInstanceType(Aq, cq, mq);
          Wq || (Wq = qq.createInstanceOfType(Yq)), Bq.addRef(gq, Wq, Wq !== Oq || Eq === lq.DELETE_AND_ADD && Wq === Oq)
        }
      } else {
        const gq = (aq = Object.keys(mq)[0], PE[aq]),
          Yq = oE.number(Aq, cq);
        null !== qq.resyncVisited && function(qq, Eq) {
          const gq = qq.resyncVisited;
          gq.has(Eq) || gq.set(Eq, new Set)
        }(qq, Yq);
        const Nq = Bq.refs.has(Yq) ? Oq || Bq.refs.get(Yq) : gq.constructor.initializeForDecoder();
        if (Wq = Nq.clone(!0), Wq[dq] = Object.values(mq)[0], Oq) {
          let qq = Oq[xq];
          if (void 0 !== qq && Yq !== qq) {
            (Eq & lq.DELETE) !== lq.DELETE && Bq.removeRef(qq);
            const gq = Oq.entries();
            let Yq;
            for (;
              (Yq = gq.next()) && !Yq.done;) {
              const [Eq, gq] = Yq.value;
              "object" === typeof gq && (qq = gq[xq]), uq?.push({
                ref: Oq,
                refId: qq,
                op: lq.DELETE,
                field: Eq,
                value: void 0,
                previousValue: gq
              })
            }
          }
        }
        Bq.addRef(Yq, Wq, Nq !== Oq || Eq === lq.DELETE_AND_ADD && Nq === Oq)
      }
      var aq;
      return Wq
    }
    const Kg = function(qq, Eq, gq, Yq, lq) {
        const Oq = Eq[gq.offset++],
          mq = Yq.constructor[Symbol.metadata],
          xq = Oq >> 6 << 6,
          Aq = Oq % (xq || 255),
          cq = mq[Aq];
        if (void 0 === cq) return console.warn("@colyseus/schema: field not defined at", {
          index: Aq,
          ref: Yq.constructor.name,
          metadata: mq
        }), -1;
        const uq = !0 === cq.deprecated,
          Bq = uq ? void 0 : Yq[Wq](Aq),
          Nq = wg(qq, xq, Yq, Aq, Bq, cq.type, Eq, gq, lq);
        uq || (null !== Nq && void 0 !== Nq && (Yq[cq.name] = Nq), Bq !== Nq && lq?.push({
          ref: Yq,
          refId: qq.currentRefId,
          op: xq,
          field: cq.name,
          value: Nq,
          previousValue: Bq
        }))
      },
      Cg = function(qq, Eq, gq, Yq, Oq) {
        const mq = Yq[jq] ?? Yq,
          xq = Eq[gq.offset++];
        if (xq === lq.CLEAR) return qq.removeChildRefs(mq, Oq), void mq.clear();
        const Aq = oE.number(Eq, gq),
          cq = mq[dq],
          uq = mq.constructor.COLLECTION_KIND;
        let Bq;
        (xq & lq.ADD) === lq.ADD ? uq === Rg ? (Bq = oE.string(Eq, gq), mq.setIndex(Aq, Bq)) : Bq = Aq : Bq = mq.getIndex(Aq);
        const Nq = mq[Wq](Aq),
          aq = wg(qq, xq, Yq, Aq, Nq, cq, Eq, gq, Oq);
        if (null !== qq.resyncVisited && Lg(qq, Yq, xq, Bq, Nq, aq, Oq), null !== aq && void 0 !== aq) switch (uq) {
          case Rg:
            mq.$items.set(Bq, aq);
            break;
          case Ug:
            mq.$setAt(Aq, aq, null !== qq.resyncVisited && xq === lq.ADD ? lq.REPLACE : xq);
            break;
          case Fg:
          case sg:
          case Xg:
            mq.$items.has(Aq) || (mq.$items.set(Aq, aq), "number" === typeof mq.$refId && Aq >= mq.$refId && (mq.$refId = Aq + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${mq.constructor?.name} \u2014 item at index ${Aq} was not stored.`)
        }
        Nq !== aq && Oq?.push({
          ref: Yq,
          refId: qq.currentRefId,
          op: xq,
          dynamicIndex: Bq,
          value: aq,
          previousValue: Nq
        })
      },
      Ig = function(qq, Eq, gq, Yq, Oq) {
        const mq = Yq[jq] ?? Yq;
        let xq, Aq = Eq[gq.offset++];
        if (Aq === lq.CLEAR) return qq.removeChildRefs(mq, Oq), void mq.clear();
        if (Aq === lq.REVERSE) return void mq.items.reverse();
        if (Aq === lq.DELETE_BY_REFID) {
          const Aq = oE.number(Eq, gq),
            cq = qq.root.refs.get(Aq);
          if (void 0 === cq) return;
          if (qq.root.removeRef(Aq), xq = mq.findIndex((qq => qq === cq)), -1 === xq) return;
          return mq[Nq](xq), void Oq?.push({
            ref: Yq,
            refId: qq.currentRefId,
            op: lq.DELETE,
            dynamicIndex: xq,
            value: void 0,
            previousValue: cq
          })
        }
        if (Aq === lq.ADD_BY_REFID) {
          const Yq = oE.number(Eq, gq),
            lq = qq.root.refs.get(Yq);
          lq && (xq = mq.findIndex((qq => qq === lq))), -1 !== xq && void 0 !== xq || (xq = mq.length)
        } else xq = oE.number(Eq, gq);
        const cq = mq[dq];
        let uq = xq;
        const Bq = mq.items[xq],
          Wq = wg(qq, Aq, Yq, xq, Bq, cq, Eq, gq, Oq);
        null !== qq.resyncVisited && Lg(qq, Yq, Aq, xq, Bq, Wq, Oq), null !== Wq && void 0 !== Wq && Wq !== Bq && mq.$setAt(xq, Wq, null !== qq.resyncVisited && Aq === lq.ADD ? lq.REPLACE : Aq), Bq !== Wq && Oq?.push({
          ref: Yq,
          refId: qq.currentRefId,
          op: Aq,
          dynamicIndex: uq,
          value: Wq,
          previousValue: Bq
        })
      };
    class eg extends Error {}

    function Dg(qq, Eq, gq, Yq) {
      if (!(qq instanceof Eq)) throw new eg(`a '${Eq.name}' was expected, but '${qq&&qq.constructor.name}' was provided in ${gq.constructor.name}#${Yq}`)
    }
    const qY = (qq, Eq) => {
        const gq = qq.toString(),
          Yq = Eq.toString();
        return gq < Yq ? -1 : gq > Yq ? 1 : 0
      },
      EY = {
        get: (qq, Eq) => "symbol" === typeof Eq || isNaN(Eq) ? Reflect.get(qq, Eq) : qq.items[Eq],
        set: (qq, Eq, gq) => {
          if ("symbol" !== typeof Eq && !isNaN(Eq)) {
            if (void 0 === gq || null === gq) qq.$deleteAt(Eq);
            else {
              let Yq;
              if (gq[Vq]) {
                Dg(gq, qq[dq], qq, Eq);
                const Oq = qq.items[Eq];
                qq.isMovingItems ? (Yq = qq.$wireIndex(Number(Eq)), void 0 !== Oq ? gq[Vq].isNew ? qq[Vq].indexedOperation(Yq, lq.MOVE_AND_ADD) : (qq[Vq].getChange(Yq) & lq.DELETE) === lq.DELETE ? qq[Vq].indexedOperation(Yq, lq.DELETE_AND_MOVE) : qq[Vq].indexedOperation(Yq, lq.MOVE) : gq[Vq].isNew && qq[Vq].indexedOperation(Yq, lq.ADD), gq[Vq].setParent(qq, qq[Vq].root, Yq)) : Yq = qq.$changeAt(Number(Eq), gq), void 0 !== Oq && Oq[Vq].root?.remove(Oq[Vq])
              } else Yq = qq.$changeAt(Number(Eq), gq);
              qq.items[Eq] = gq, void 0 !== Yq && (qq.tmpItems[Yq] = gq)
            }
            return !0
          }
          return Reflect.set(qq, Eq, gq)
        },
        deleteProperty: (qq, Eq) => ("number" === typeof Eq ? qq.$deleteAt(Eq) : delete qq[Eq], !0),
        has: (qq, Eq) => "symbol" === typeof Eq || isNaN(Number(Eq)) ? Reflect.has(qq, Eq) : Reflect.has(qq.items, Eq)
      };
    class gY {
      [Vq];
      [xq];
      [jq];
      [dq];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[cq] = Gg;
      static[uq] = Ig;
      static COLLECTION_KIND = Ug;
      static[Bq](qq, Eq, gq) {
        if (!gq) return !0;
        const Yq = qq[jq] ?? qq;
        return "string" === typeof Yq[dq] || gq.isChangeTreeVisible(Yq.tmpItems[Eq]?.[Vq])
      }
      static is(qq) {
        return Array.isArray(qq) || void 0 !== qq.array
      }
      static from(qq) {
        return new gY(...Array.from(qq))
      }
      constructor() {
        this[dq] = void 0, this[jq] = this;
        const qq = new Proxy(this, EY);
        return Object.defineProperty(this, Vq, {
          value: new ig(qq, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), qq
      }
      static initializeForDecoder() {
        const qq = Object.create(gY.prototype);
        qq.items = [], qq.isMovingItems = !1, qq._needsCompaction = !1, qq[dq] = void 0, qq[jq] = qq;
        const Eq = new Proxy(qq, EY);
        return fg(qq, Eq), Eq
      }
      set length(qq) {
        0 === qq ? this.clear() : qq < this.items.length ? this.splice(qq, this.length - qq) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Vq].pause()
      }
      resumeTracking() {
        this[Vq].resume()
      }
      untracked(qq) {
        return this[Vq].untracked(qq)
      }
      get isTrackingPaused() {
        return this[Vq].paused
      }
      push() {
        const qq = this[jq],
          Eq = qq.items,
          gq = qq.tmpItems,
          Yq = qq[Vq],
          Oq = qq[dq];
        let mq = gq.length;
        for (let xq = 0, Aq = arguments.length; xq < Aq; xq++, mq++) {
          const Aq = xq < 0 || arguments.length <= xq ? void 0 : arguments[xq];
          if (void 0 === Aq || null === Aq) return;
          "object" === typeof Aq && Oq && Dg(Aq, Oq, qq, xq), Yq.indexedOperation(mq, lq.ADD), Eq.push(Aq), gq.push(Aq), Aq[Vq]?.setParent(this, Yq.root, mq)
        }
        return mq
      }
      pop() {
        const qq = this[jq],
          Eq = qq.tmpItems,
          gq = qq.deletedIndexes;
        let Yq = -1;
        for (let Oq = Eq.length - 1; Oq >= 0; Oq--)
          if (!0 !== gq[Oq]) {
            Yq = Oq;
            break
          } if (Yq < 0) return;
        const lq = qq.$isUnsentAdd(Yq);
        return qq[Vq].delete(Yq), lq ? qq.$cancelAdd(Yq) : gq[Yq] = !0, qq.items.pop()
      }
      at(qq) {
        return qq < 0 && (qq += this.length), this.items[qq]
      }
      $wireIndex(qq) {
        const Eq = this.deletedIndexes;
        if (0 === Eq.length) return qq;
        const gq = this.tmpItems;
        let Yq = 0;
        for (let lq = 0; lq < gq.length; lq++)
          if (!0 !== Eq[lq]) {
            if (Yq === qq) return lq;
            Yq++
          } return gq.length + (qq - Yq)
      }
      $isUnsentAdd(qq) {
        const Eq = this[Vq];
        return 0 === (576 & Eq.flags) && !Eq.paused && "string" !== typeof this[dq] && Eq.operationAt(qq) === lq.ADD
      }
      $cancelAdd(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gq = this[Vq],
          Yq = this.tmpItems[qq];
        this.tmpItems.splice(qq, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(qq, 1), gq.removeAt(qq, 1);
        const lq = Yq?.[Vq];
        void 0 !== lq && void 0 === lq.root && lq.removeParent(this), Eq && this.$reindexChildren(qq)
      }
      $reindexChildren(qq, Eq) {
        if (!this[Vq].hasFilteredFields) return;
        if ("string" === typeof this[dq]) return;
        const gq = this.tmpItems,
          Yq = gq.length;
        if (void 0 !== Eq)
          for (; qq < Yq && gq[qq] === Eq[qq];) qq++;
        for (let lq = qq; lq < Yq; lq++) gq[lq]?.[Vq]?.setParentIndex(this, lq)
      }
      $changeAt(qq, Eq) {
        if (void 0 === Eq || null === Eq) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[qq] === Eq) return;
        const gq = void 0 !== this.items[qq] ? "object" === typeof Eq ? lq.DELETE_AND_ADD : lq.REPLACE : lq.ADD,
          Yq = this.$wireIndex(qq),
          Oq = this[Vq];
        return Oq.change(Yq, gq), Eq[Vq]?.setParent(this, Oq.root, Yq), Yq
      }
      $deleteAt(qq, Eq) {
        this[Vq].delete(this.$wireIndex(qq), Eq)
      }
      $setAt(qq, Eq, gq) {
        gq === lq.ADD && void 0 !== this.items[qq] ? this.items.splice(qq, 0, Eq) : gq === lq.DELETE_AND_MOVE ? (this.items.splice(qq, 1), this.items[qq] = Eq) : (qq > this.items.length && (this._needsCompaction = !0), this.items[qq] = Eq)
      }
      clear() {
        const qq = this[jq];
        if (0 === qq.items.length) return;
        const Eq = qq[Vq];
        Eq.forEachChild(((qq, gq) => {
          Eq.root?.remove(qq)
        })), Eq.discard(), Eq.operation(lq.CLEAR), qq.items.length = 0, qq.tmpItems.length = 0
      } [oq]() {
        const qq = this[jq] ?? this,
          Eq = qq[Vq];
        if (Eq.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const gq = qq.items;
        for (let Yq = 0; Yq < gq.length; Yq++) gq[Yq]?.[oq]?.();
        qq.items.length = 0, qq.tmpItems.length = 0, qq.deletedIndexes.length = 0, Eq.recycle(), qq[xq] = void 0
      }
      concat() {
        return new gY(...this.items.concat(...arguments))
      }
      join(qq) {
        return this.items.join(qq)
      }
      reverse() {
        const qq = this[jq],
          Eq = qq[Vq];
        if (Eq.has() || qq.deletedIndexes.length > 0) {
          const Eq = qq.items.slice().reverse();
          return this.clear(), this.push(...Eq), this
        }
        return Eq.operation(lq.REVERSE), qq.items.reverse(), qq.tmpItems.reverse(), qq.$reindexChildren(0), this
      }
      shift() {
        const qq = this[jq],
          Eq = qq.items;
        if (0 === Eq.length) return;
        const gq = qq[Vq],
          Yq = qq.deletedIndexes;
        let Oq = 0;
        for (; !0 === Yq[Oq];) Oq++;
        const mq = qq.$isUnsentAdd(Oq);
        return gq.delete(Oq, lq.DELETE), mq ? qq.$cancelAdd(Oq) : Yq[Oq] = !0, Eq.shift()
      }
      slice(qq, Eq) {
        const gq = new gY;
        return gq.push(...this.items.slice(qq, Eq)), gq
      }
      sort() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qY;
        const Eq = this[jq];
        Eq.isMovingItems = !0;
        const gq = Eq[Vq];
        return Eq.items.sort(qq).forEach(((qq, Eq) => gq.change(Eq, lq.REPLACE))), Eq.tmpItems.sort(qq), Eq.$reindexChildren(0), Eq.isMovingItems = !1, this
      }
      splice(qq, Eq) {
        const gq = this[jq],
          Yq = gq[Vq],
          Oq = gq.items,
          mq = gq.tmpItems,
          xq = gq.deletedIndexes,
          Aq = Oq.length,
          cq = mq.length;
        for (var uq = arguments.length, Bq = new Array(uq > 2 ? uq - 2 : 0), Wq = 2; Wq < uq; Wq++) Bq[Wq - 2] = arguments[Wq];
        const Nq = Bq.length,
          aq = [];
        for (let lq = 0; lq < cq; lq++) !0 !== xq[lq] && aq.push(lq);
        let dq;
        if (Aq > qq) {
          void 0 === Eq && (Eq = Aq - qq);
          for (let Oq = qq; Oq < qq + Eq; Oq++) {
            const qq = aq[Oq],
              Eq = gq.$isUnsentAdd(qq);
            Yq.delete(qq, lq.DELETE), Eq ? (dq ??= []).push(qq) : xq[qq] = !0
          }
        } else Eq = 0;
        if (Nq > 0) {
          const Oq = aq[qq] ?? Aq,
            cq = Math.min(Nq, Eq);
          for (let qq = 0; qq < cq; qq++) {
            const Eq = Oq + qq;
            let gq;
            const Aq = void 0 !== dq ? dq.indexOf(Eq) : -1; - 1 !== Aq ? (dq.splice(Aq, 1), gq = lq.ADD) : gq = xq[Eq] ? lq.DELETE_AND_ADD : lq.ADD, Yq.indexedOperation(Eq, gq), mq[Eq] = Bq[qq], xq[Eq] = !1, Bq[qq][Vq]?.setParent(this, Yq.root, Eq)
          }
          const uq = Nq - cq;
          if (uq > 0) {
            const qq = Oq + cq;
            Yq.insertAt(qq, uq);
            for (let Eq = 0; Eq < uq; Eq++) Bq[cq + Eq][Vq]?.setParent(this, Yq.root, qq + Eq);
            xq.length > 0 && xq.splice(qq, 0, ...new Array(uq).fill(!1)), mq.splice(qq, 0, ...Bq.slice(cq)), gq.$reindexChildren(qq + uq)
          }
        }
        if (void 0 !== dq && dq.length > 0) {
          for (let qq = dq.length - 1; qq >= 0; qq--) gq.$cancelAdd(dq[qq], !1);
          gq.$reindexChildren(dq[0])
        }
        return Yq.root?.enqueueChangeTree(Yq), Oq.splice(qq, Eq, ...Bq)
      }
      unshift() {
        const qq = this[jq],
          Eq = qq[Vq];
        Eq.unshift(arguments.length);
        for (let Yq = 0; Yq < arguments.length; Yq++)(Yq < 0 || arguments.length <= Yq ? void 0 : arguments[Yq])?.[Vq]?.setParent(this, Eq.root, Yq);
        const gq = qq.deletedIndexes;
        return gq.length > 0 && gq.unshift(...new Array(arguments.length).fill(!1)), qq.tmpItems.unshift(...arguments), qq.$reindexChildren(arguments.length), qq.items.unshift(...arguments)
      }
      indexOf(qq, Eq) {
        return this.items.indexOf(qq, Eq)
      }
      lastIndexOf(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(qq, Eq)
      }
      every(qq, Eq) {
        return this.items.every(qq, Eq)
      }
      some(qq, Eq) {
        return this.items.some(qq, Eq)
      }
      forEach(qq, Eq) {
        return this.items.forEach(qq, Eq)
      }
      map(qq, Eq) {
        return this.items.map(qq, Eq)
      }
      filter(qq, Eq) {
        return this.items.filter(qq, Eq)
      }
      reduce(qq, Eq) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(qq, Eq) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(qq, Eq) {
        return this.items.find(qq, Eq)
      }
      findIndex(qq, Eq) {
        return this.items.findIndex(qq, Eq)
      }
      fill(qq, Eq, gq) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(qq, Eq, gq) {
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
        return gY
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
      includes(qq, Eq) {
        return this.items.includes(qq, Eq)
      }
      flatMap(qq, Eq) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(qq) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(qq, Eq) {
        const gq = this.items.slice();
        return qq < 0 && (qq += this.length), gq[qq] = Eq, new gY(...gq)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(qq) {
        return this.items.slice().sort(qq)
      }
      toSpliced(qq, Eq) {
        for (var gq = arguments.length, Yq = new Array(gq > 2 ? gq - 2 : 0), lq = 2; lq < gq; lq++) Yq[lq - 2] = arguments[lq];
        const Oq = this.items.slice();
        return Oq.splice.apply(Oq, arguments), Oq
      }
      shuffle() {
        return this.move((qq => {
          let Eq = this.items.length;
          for (; 0 != Eq;) {
            let qq = Math.floor(Math.random() * Eq);
            Eq--, [this[Eq], this[qq]] = [this[qq], this[Eq]]
          }
        }))
      }
      move(qq) {
        return this.isMovingItems = !0, qq(this), this.isMovingItems = !1, this
      } [Wq](qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = this[jq] ?? this;
        return Eq || gq.deletedIndexes[qq] ? gq.items[qq] : gq.tmpItems[qq] || gq.items[qq]
      } [Nq](qq) {
        const Eq = this[jq] ?? this;
        Eq.items[qq] = void 0, Eq._needsCompaction = !0
      } [Hq]() {
        const qq = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, qq), this.deletedIndexes.length = 0)
      } [Pq]() {
        const qq = this[jq] ?? this;
        qq._needsCompaction && (qq._needsCompaction = !1, qq.items = qq.items.filter((qq => void 0 !== qq)))
      } [aq](qq, Eq, gq) {
        const Yq = this[jq] ?? this,
          lq = Yq.items;
        let Oq = !1;
        for (let mq = 0; mq < lq.length; mq++) {
          const xq = lq[mq];
          qq.has(mq) ? gq(xq) : (Oq = !0, Eq(xq, mq), Yq[Nq](mq))
        }
        Oq && Yq[Pq]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((qq => "function" === typeof qq.toJSON ? qq.toJSON() : qq))
      }
      clone(qq) {
        let Eq;
        return qq ? (Eq = new gY, Eq.push(...this.items)) : Eq = new gY(...this.map((qq => qq[Vq] ? qq.clone() : qq))), Eq
      }
    }
    yE("array", {
      constructor: gY
    });
    class YY {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(qq) {
        const Eq = this.indexByKey[qq];
        return void 0 === Eq ? void 0 : Eq
      }
      assign(qq) {
        const Eq = this.nextIndex++;
        return this.indexByKey[qq] = Eq, this.keyByIndex.set(Eq, qq), Eq
      }
      snapshot(qq, Eq) {
        (this.snapshots ??= new Map).set(qq, Eq)
      }
      forgetSnapshot(qq) {
        this.snapshots?.delete(qq)
      }
      snapshotAt(qq) {
        return this.snapshots?.get(qq)
      }
      setIndex(qq, Eq) {
        this.keyByIndex.set(qq, Eq), this.indexByKey[Eq] = qq
      }
      keyOf(qq) {
        return this.keyByIndex.get(qq)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [qq] of this.snapshots) {
            const Eq = this.keyByIndex.get(qq);
            void 0 !== Eq && (delete this.indexByKey[Eq], this.keyByIndex.delete(qq))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class lY {
      [Vq];
      [xq];
      childType;
      [dq];
      $items = new Map;
      journal = new YY;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(qq) {
        (this._stream ??= vE()).maxPerTick = qq
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(qq) {
        (this._stream ??= vE()).priority = qq
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[cq] = zg;
      static[uq] = Cg;
      static COLLECTION_KIND = Rg;
      static[Bq](qq, Eq, gq) {
        if (!gq || "string" === typeof qq[dq]) return !0;
        const Yq = qq[Wq](Eq) ?? qq.journal.snapshotAt(Eq);
        return gq.isChangeTreeVisible(Yq[Vq])
      }
      static is(qq) {
        return void 0 !== qq.map
      }
      constructor(qq) {
        if (Object.defineProperty(this, Vq, {
            value: new ig(this),
            enumerable: !1,
            writable: !0
          }), this[dq] = void 0, qq)
          if (qq instanceof Map || qq instanceof lY) qq.forEach(((qq, Eq) => this.set(Eq, qq)));
          else
            for (const Eq in qq) this.set(Eq, qq[Eq])
      }
      static initializeForDecoder() {
        const qq = Object.create(lY.prototype);
        return qq.$items = new Map, qq.journal = new YY, qq[dq] = void 0, fg(qq), qq
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return lY
      }
      set(qq, Eq) {
        if (void 0 === Eq || null === Eq) throw new Error(`MapSchema#set('${qq}', ${Eq}): trying to set ${Eq} value on '${qq}'.`);
        "object" === typeof Eq && this[dq] && Dg(Eq, this[dq], this, qq), qq = qq.toString();
        const gq = this[Vq],
          Yq = void 0 !== Eq[Vq],
          Oq = this.journal;
        let mq, xq = Oq.indexOf(qq);
        if (void 0 !== xq) {
          mq = lq.REPLACE;
          const gq = this.$items.get(qq);
          if (gq === Eq) return;
          Yq && (mq = lq.DELETE_AND_ADD, void 0 !== gq && gq[Vq].root?.remove(gq[Vq])), void 0 !== Oq.snapshotAt(xq) && Oq.forgetSnapshot(xq)
        } else xq = Oq.assign(qq), mq = lq.ADD;
        return this.$items.set(qq, Eq), mq === lq.ADD && gq.isStreamCollection ? void 0 !== gq.root && nE(this, gq.root, xq) : gq.change(xq, mq), Yq && Eq[Vq].setParent(this, gq.root, xq), this
      }
      get(qq) {
        return this.$items.get(qq)
      }
      getOrInsert(qq, Eq) {
        return this.$items.has(qq) ? this.$items.get(qq) : (this.set(qq, Eq), Eq)
      }
      getOrInsertComputed(qq, Eq) {
        if (this.$items.has(qq)) return this.$items.get(qq);
        const gq = Eq(qq);
        return this.set(qq, gq), gq
      }
      delete(qq) {
        if (!this.$items.has(qq)) return !1;
        const Eq = this.journal.indexOf(qq),
          gq = this.$items.get(qq),
          Yq = this[Vq];
        if (Yq.isStreamCollection) {
          const lq = Yq.root;
          let Oq = !1;
          return void 0 !== lq && (Oq = bE(this, lq, this[xq], Eq)), void 0 !== gq?.[Vq] && lq?.remove(gq[Vq]), this.$items.delete(qq), Oq || this.journal.snapshot(Eq, gq), !0
        }
        return this.journal.snapshot(Eq, gq), Yq.delete(Eq), this.$items.delete(qq)
      }
      clear() {
        const qq = this[Vq];
        qq.discard(), qq.forEachChild(((Eq, gq) => {
          qq.root?.remove(Eq)
        })), this.journal.reset(), this.$items.clear(), qq.operation(lq.CLEAR)
      } [oq]() {
        const qq = this[Vq];
        if (qq.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((qq => qq?.[oq]?.())), this.$items.clear(), this.journal.reset(), qq.recycle(), this[xq] = void 0
      }
      has(qq) {
        return this.$items.has(qq)
      }
      forEach(qq) {
        this.$items.forEach(qq)
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
        this[Vq].pause()
      }
      resumeTracking() {
        this[Vq].resume()
      }
      untracked(qq) {
        return this[Vq].untracked(qq)
      }
      get isTrackingPaused() {
        return this[Vq].paused
      }
      setIndex(qq, Eq) {
        this.journal.setIndex(qq, Eq)
      }
      getIndex(qq) {
        return this.journal.keyOf(qq)
      } [Wq](qq) {
        const Eq = this.journal.keyOf(qq);
        return void 0 !== Eq ? this.$items.get(Eq) : void 0
      } [Nq](qq) {
        const Eq = this.journal.keyOf(qq);
        void 0 !== Eq && (this.$items.delete(Eq), this.journal.keyByIndex.delete(qq))
      } [aq](qq, Eq, gq) {
        let Yq = null;
        if (this.$items.forEach(((lq, Oq) => {
            qq.has(Oq) ? gq(lq) : ((Yq ??= new Set).add(Oq), Eq(lq, Oq))
          })), null !== Yq) {
          Yq.forEach((qq => {
            this.$items.delete(qq), delete this.journal.indexByKey[qq]
          }));
          const qq = [];
          this.journal.keyByIndex.forEach(((Eq, gq) => {
            Yq.has(Eq) && qq.push(gq)
          }));
          for (let Eq = 0; Eq < qq.length; Eq++) this.journal.keyByIndex.delete(qq[Eq])
        }
      } [Hq]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(qq) {
        ME(this, qq)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (qq => {
          let [Eq, gq] = qq;
          return [Eq, "function" === typeof gq.toJSON ? gq.toJSON() : gq]
        })))
      }
      clone(qq) {
        let Eq;
        return qq ? Eq = Object.assign(new lY, this) : (Eq = new lY, this.forEach(((qq, gq) => {
          qq[Vq] ? Eq.set(gq, qq.clone()) : Eq.set(gq, qq)
        }))), Eq
      }
    }
    yE("map", {
      constructor: lY
    });
    class OY {
      [Vq];
      [xq];
      [dq];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(qq) {
        (this._stream ??= vE()).maxPerTick = qq
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(qq) {
        (this._stream ??= vE()).priority = qq
      }
      static[cq] = Sg;
      static[uq] = Cg;
      static COLLECTION_KIND = sg;
      static[Bq](qq, Eq, gq) {
        return !gq || "string" === typeof qq[dq] || gq.isChangeTreeVisible((qq[Wq](Eq) ?? qq.deletedItems[Eq])[Vq])
      }
      static is(qq) {
        return void 0 !== qq.collection
      }
      constructor(qq) {
        Object.defineProperty(this, Vq, {
          value: new ig(this),
          enumerable: !1,
          writable: !0
        }), this[dq] = void 0, qq && qq.forEach((qq => this.add(qq)))
      }
      static initializeForDecoder() {
        const qq = Object.create(OY.prototype);
        return qq.$items = new Map, qq.deletedItems = {}, qq.$refId = 0, qq[dq] = void 0, fg(qq), qq
      }
      add(qq) {
        const Eq = this.$refId++,
          gq = this[Vq];
        return this.$items.set(Eq, qq), gq.isStreamCollection ? void 0 !== gq.root && nE(this, gq.root, Eq) : gq.change(Eq), void 0 !== qq[Vq] && qq[Vq].setParent(this, gq.root, Eq), Eq
      }
      at(qq) {
        const Eq = Array.from(this.$items.keys())[qq];
        return this.$items.get(Eq)
      }
      entries() {
        return this.$items.entries()
      }
      delete(qq) {
        const Eq = this.$items.entries();
        let gq, Yq;
        for (;
          (Yq = Eq.next()) && !Yq.done;)
          if (qq === Yq.value[1]) {
            gq = Yq.value[0];
            break
          } if (void 0 === gq) return !1;
        const lq = this[Vq];
        if (lq.isStreamCollection) {
          const qq = lq.root,
            Eq = this.$items.get(gq);
          return void 0 !== qq && bE(this, qq, this[xq], gq), void 0 !== Eq?.[Vq] && qq?.remove(Eq[Vq]), this.deletedItems[gq] = Eq, this.$items.delete(gq)
        }
        return this.deletedItems[gq] = lq.delete(gq), this.$items.delete(gq)
      }
      clear() {
        const qq = this[Vq];
        qq.discard(), qq.forEachChild(((Eq, gq) => {
          qq.root?.remove(Eq)
        })), this.$items.clear(), qq.operation(lq.CLEAR)
      } [oq]() {
        const qq = this[Vq];
        if (qq.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((qq => qq?.[oq]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, qq.recycle(), this[xq] = void 0
      }
      has(qq) {
        return Array.from(this.$items.values()).some((Eq => Eq === qq))
      }
      forEach(qq) {
        this.$items.forEach(((Eq, gq, Yq) => qq(Eq, gq, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Vq].pause()
      }
      resumeTracking() {
        this[Vq].resume()
      }
      untracked(qq) {
        return this[Vq].untracked(qq)
      }
      get isTrackingPaused() {
        return this[Vq].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(qq, Eq) {}
      getIndex(qq) {
        return qq
      } [Wq](qq) {
        return this.$items.get(qq)
      } [Nq](qq) {
        this.$items.delete(qq)
      } [aq](qq, Eq, gq) {
        let Yq = null;
        if (this.$items.forEach(((lq, Oq) => {
            qq.has(Oq) ? gq(lq) : ((Yq ??= []).push(Oq), Eq(lq, Oq))
          })), null !== Yq)
          for (let lq = 0; lq < Yq.length; lq++) this[Nq](Yq[lq])
      } [Hq]() {
        for (const qq in this.deletedItems) delete this.deletedItems[qq]
      }
      _dropView(qq) {
        ME(this, qq)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const qq = [];
        return this.forEach(((Eq, gq) => {
          qq.push("function" === typeof Eq.toJSON ? Eq.toJSON() : Eq)
        })), qq
      }
      clone(qq) {
        let Eq;
        return qq ? Eq = Object.assign(new OY, this) : (Eq = new OY, this.forEach((qq => {
          qq[Vq] ? Eq.add(qq.clone()) : Eq.add(qq)
        }))), Eq
      }
    }
    yE("collection", {
      constructor: OY
    });
    class mY {
      [Vq];
      [xq];
      [dq];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(qq) {
        (this._stream ??= vE()).maxPerTick = qq
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(qq) {
        (this._stream ??= vE()).priority = qq
      }
      static[cq] = Sg;
      static[uq] = Cg;
      static COLLECTION_KIND = Fg;
      static[Bq](qq, Eq, gq) {
        return !gq || "string" === typeof qq[dq] || gq.isVisible((qq[Wq](Eq) ?? qq.deletedItems[Eq])[Vq])
      }
      static is(qq) {
        return void 0 !== qq.set
      }
      constructor(qq) {
        Object.defineProperty(this, Vq, {
          value: new ig(this),
          enumerable: !1,
          writable: !0
        }), this[dq] = void 0, qq && qq.forEach((qq => this.add(qq)))
      }
      static initializeForDecoder() {
        const qq = Object.create(mY.prototype);
        return qq.$items = new Map, qq.deletedItems = {}, qq.$refId = 0, qq[dq] = void 0, fg(qq), qq
      }
      add(qq) {
        if (this.has(qq)) return !1;
        const Eq = this.$refId++,
          gq = this[Vq];
        return this.$items.set(Eq, qq), gq.isStreamCollection ? void 0 !== gq.root && nE(this, gq.root, Eq) : gq.change(Eq, lq.ADD), void 0 !== qq[Vq] && qq[Vq].setParent(this, gq.root, Eq), Eq
      }
      entries() {
        return this.$items.entries()
      }
      delete(qq) {
        const Eq = this.$items.entries();
        let gq, Yq;
        for (;
          (Yq = Eq.next()) && !Yq.done;)
          if (qq === Yq.value[1]) {
            gq = Yq.value[0];
            break
          } if (void 0 === gq) return !1;
        const lq = this[Vq];
        if (lq.isStreamCollection) {
          const qq = lq.root,
            Eq = this.$items.get(gq);
          return void 0 !== qq && bE(this, qq, this[xq], gq), void 0 !== Eq?.[Vq] && qq?.remove(Eq[Vq]), this.deletedItems[gq] = Eq, this.$items.delete(gq)
        }
        return this.deletedItems[gq] = lq.delete(gq), this.$items.delete(gq)
      }
      clear() {
        const qq = this[Vq];
        qq.discard(), this.$items.clear(), qq.operation(lq.CLEAR)
      } [oq]() {
        const qq = this[Vq];
        if (qq.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((qq => qq?.[oq]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, qq.recycle(), this[xq] = void 0
      }
      has(qq) {
        const Eq = this.$items.values();
        let gq, Yq = !1;
        for (;
          (gq = Eq.next()) && !gq.done;)
          if (qq === gq.value) {
            Yq = !0;
            break
          } return Yq
      }
      forEach(qq) {
        this.$items.forEach(((Eq, gq, Yq) => qq(Eq, gq, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Vq].pause()
      }
      resumeTracking() {
        this[Vq].resume()
      }
      untracked(qq) {
        return this[Vq].untracked(qq)
      }
      get isTrackingPaused() {
        return this[Vq].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(qq, Eq) {}
      getIndex(qq) {
        return qq
      } [Wq](qq) {
        return this.$items.get(qq)
      } [Nq](qq) {
        this.$items.delete(qq)
      } [aq](qq, Eq, gq) {
        let Yq = null;
        if (this.$items.forEach(((lq, Oq) => {
            qq.has(Oq) ? gq(lq) : ((Yq ??= []).push(Oq), Eq(lq, Oq))
          })), null !== Yq)
          for (let lq = 0; lq < Yq.length; lq++) this[Nq](Yq[lq])
      } [Hq]() {
        for (const qq in this.deletedItems) delete this.deletedItems[qq]
      }
      _dropView(qq) {
        ME(this, qq)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const qq = [];
        return this.forEach(((Eq, gq) => {
          qq.push("function" === typeof Eq.toJSON ? Eq.toJSON() : Eq)
        })), qq
      }
      clone(qq) {
        let Eq;
        return qq ? Eq = Object.assign(new mY, this) : (Eq = new mY, this.forEach((qq => {
          qq[Vq] ? Eq.add(qq.clone()) : Eq.add(qq)
        }))), Eq
      }
    }
    yE("set", {
      constructor: mY
    });
    class xY {
      [Vq];
      [xq];
      [dq];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(qq) {
        (this._stream ??= vE()).maxPerTick = qq
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(qq) {
        (this._stream ??= vE()).priority = qq
      }
      static $isStream = !0;
      static[cq] = Sg;
      static[uq] = Cg;
      static COLLECTION_KIND = Xg;
      static[Bq](qq, Eq, gq) {
        if (!gq) return !0;
        const Yq = qq[Wq](Eq);
        return void 0 !== Yq && gq.isVisible(Yq[Vq])
      }
      static is(qq) {
        return qq && void 0 !== qq.stream
      }
      constructor() {
        Object.defineProperty(this, Vq, {
          value: new ig(this),
          enumerable: !1,
          writable: !0
        }), this[dq] = void 0
      }
      static initializeForDecoder() {
        const qq = Object.create(xY.prototype);
        return qq.$items = new Map, qq.$nextPosition = 0, qq._itemIndex = new Map, qq[dq] = void 0, fg(qq), qq
      }
      add(qq) {
        if (this._itemIndex.has(qq)) return -1;
        const Eq = this.$nextPosition++;
        this.$items.set(Eq, qq), this._itemIndex.set(qq, Eq);
        const gq = this[Vq].root;
        return void 0 !== qq[Vq] && qq[Vq].setParent(this, gq, Eq), void 0 !== gq && nE(this, gq, Eq), Eq
      }
      remove(qq) {
        const Eq = this._itemIndex.get(qq);
        if (void 0 === Eq) return !1;
        this._itemIndex.delete(qq), this.$items.delete(Eq);
        const gq = this[Vq].root;
        return void 0 !== gq && (bE(this, gq, this[xq], Eq), void 0 !== qq[Vq] && gq.remove(qq[Vq])), !0
      }
      has(qq) {
        return this._itemIndex.has(qq)
      }
      clear() {
        const qq = this[Vq].root;
        if (void 0 !== qq) {
          ! function(qq, Eq, gq) {
            const Yq = qq._stream;
            if (void 0 !== Yq) {
              Yq.broadcastPending.clear();
              for (const qq of Yq.sentBroadcast) Yq.broadcastDeletes.add(qq);
              Yq.sentBroadcast.clear(), Eq.forEachActiveView((qq => {
                Yq.pendingByView.get(qq.id)?.clear();
                const Eq = Yq.sentByView.get(qq.id);
                if (void 0 !== Eq && Eq.size > 0) {
                  let Yq = qq.changes.get(gq);
                  void 0 === Yq && (Yq = new Map, qq.changes.set(gq, Yq));
                  for (const qq of Eq) Yq.set(qq, lq.DELETE);
                  Eq.clear()
                }
              }))
            }
          }(this, qq, this[xq]);
          for (const Eq of this.$items.values()) void 0 !== Eq[Vq] && qq.remove(Eq[Vq])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(qq) {
        for (const [Eq, gq] of this.$items) qq(gq, Eq, this)
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
      setIndex(qq, Eq) {}
      getIndex(qq) {
        return qq
      } [Wq](qq) {
        return this.$items.get(qq)
      } [Nq](qq) {
        const Eq = this.$items.get(qq);
        void 0 !== Eq && (this._itemIndex.delete(Eq), this.$items.delete(qq))
      } [aq]() {} [Hq]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const qq = [];
        return this.forEach((Eq => {
          qq.push("function" === typeof Eq?.toJSON ? Eq.toJSON() : Eq)
        })), qq
      }
      clone(qq) {
        if (qq) {
          return Object.assign(new xY, this)
        }
        const Eq = new xY;
        return Eq.maxPerTick = this.maxPerTick, this.forEach((qq => {
          Eq.add("function" === typeof qq?.clone ? qq.clone() : qq)
        })), Eq
      }
      _dropView(qq) {
        ME(this, qq)
      }
      _unregister() {}
    }
    yE("stream", {
      constructor: xY
    });
    class AY {
      [yq] = !0;
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
      constructor(qq) {
        this._type = qq
      }
      default (qq) {
        return this._default = qq, this._hasDefault = !0, this
      }
      view(qq) {
        return this._view = qq ?? -1, this
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
        const qq = this._type;
        if (qq && "object" === typeof qq && void 0 !== qq.array) throw new Error(rE);
        return this._stream = !0, this
      }
      priority(qq) {
        return this._streamPriority = qq, this
      }
      deprecated() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = qq, this
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

    function cY(qq) {
      return null != qq && !0 === qq[yq]
    }

    function uY(qq) {
      return () => new AY(qq)
    }

    function BY(qq) {
      if (cY(qq)) {
        const Eq = qq._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Eq?`use the type name instead: t.array("${Eq}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return qq
    }

    function WY(qq) {
      return new AY({
        quantized: zE(qq)
      })
    }
    const NY = Object.freeze({
        string: uY("string"),
        number: uY("number"),
        boolean: uY("boolean"),
        int8: uY("int8"),
        uint8: uY("uint8"),
        int16: uY("int16"),
        uint16: uY("uint16"),
        int32: uY("int32"),
        uint32: uY("uint32"),
        int64: uY("int64"),
        uint64: uY("uint64"),
        float32: uY("float32"),
        float64: uY("float64"),
        bigint64: uY("bigint64"),
        biguint64: uY("biguint64"),
        ref: qq => new AY(qq),
        array: qq => new AY({
          array: BY(qq)
        }),
        map: qq => new AY({
          map: BY(qq)
        }),
        set: qq => new AY({
          set: BY(qq)
        }),
        collection: qq => new AY({
          collection: BY(qq)
        }),
        stream: qq => {
          const Eq = new AY({
            stream: BY(qq)
          });
          return Eq._stream = !0, Eq
        },
        quantized: WY,
        angle: qq => WY({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: qq?.bits ?? 16
        })
      }),
      aY = -1;

    function VY(qq) {
      return JE.register(qq), qq
    }

    function dY() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aY;
      return function(Eq, gq) {
        const Yq = wE.initialize(Eq.constructor);
        wE.setTag(Yq, gq, qq)
      }
    }

    function jY(qq, Eq) {
      const gq = wE.initialize(qq.constructor);
      wE.setUnreliable(gq, Eq)
    }

    function HY(qq, Eq) {
      const gq = wE.initialize(qq.constructor);
      wE.setPatchOnly(gq, Eq)
    }

    function oY(qq, Eq) {
      const gq = wE.initialize(qq.constructor);
      wE.setFullStateOnly(gq, Eq)
    }

    function PY(qq, Eq) {
      return function(gq, Yq) {
        const lq = gq.constructor;
        if (!qq) throw new Error(`${lq.name}: @type() reference provided for "${Yq}" is undefined. Make sure you don't have any circular dependencies.`);
        qq = RE(qq, `${lq.name}.${Yq}`), JE.register(lq);
        const Oq = Object.getPrototypeOf(lq)[Symbol.metadata],
          mq = wE.initialize(lq);
        let xq = mq[Yq];
        if (void 0 !== mq[xq]) {
          if (mq[xq].deprecated) return;
          if (void 0 !== mq[xq].type) {
            const qq = new Error(`@colyseus/schema: Duplicate '${Yq}' definition on '${lq.name}'.\nCheck @type() annotation`);
            throw new Error(`${qq.message} ${qq.stack.split("\n")[4].trim()}`)
          }
        } else xq = mq[hq] ?? (Oq && Oq[hq]) ?? -1, xq++;
        if (Eq && Eq.manual) wE.addField(mq, xq, Yq, qq, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: Eq,
            childType: gq
          } = kE(qq);
          wE.addField(mq, xq, Yq, qq, yY(Yq, xq, gq, Eq))
        }
        mq[tq][Yq] && Object.defineProperty(gq, Yq, mq[tq][Yq]), ("string" === typeof qq || SE(qq)) && (mq[vq] || Object.defineProperty(mq, vq, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), mq[vq][xq] = "string" === typeof qq ? EE[qq] : LE(qq.quantized))
      }
    }
    const QY = {
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

    function yY(qq, Eq, gq, Yq) {
      let Oq;
      return Oq = Yq ? function(qq, Eq, gq, Yq) {
        const Oq = Yq.constructor === gY,
          mq = Yq.constructor === lY;
        return function(qq) {
          const Yq = this[Qq],
            xq = Yq[Eq];
          if (qq !== xq) {
            if (void 0 !== qq && null !== qq) {
              if (!Oq || qq instanceof gY)
                if (!mq || qq instanceof lY) qq[dq] = gq;
                else {
                  const Eq = new lY;
                  if (Eq[dq] = gq, qq instanceof Map) qq.forEach(((qq, gq) => Eq.set(gq, qq)));
                  else
                    for (const gq in qq) Eq.set(gq, qq[gq]);
                  qq = Eq
                }
              else {
                const Eq = new gY;
                Eq[dq] = gq, Eq.push(...qq), qq = Eq
              }
              const Yq = this[Vq],
                cq = this.constructor;
              void 0 !== xq && null !== xq && xq[Vq] ? (Yq.root?.remove(xq[Vq]), cq[Aq](Yq, Eq, lq.DELETE_AND_ADD)) : cq[Aq](Yq, Eq, lq.ADD), qq[Vq]?.setParent(this, Yq.root, Eq)
            } else void 0 !== xq && null !== xq && this[Vq].delete(Eq);
            Yq[Eq] = qq
          }
        }
      }(0, Eq, gq, Yq) : "string" === typeof gq ? function(qq, Eq, gq) {
        const Yq = QY[gq],
          Oq = "string" === gq,
          mq = "boolean" === gq;
        return function(gq) {
          const xq = this[Qq],
            cq = xq[Eq];
          if (gq !== cq) {
            if (void 0 !== gq && null !== gq) {
              if (!mq && void 0 !== Yq && typeof gq !== Yq && (!Oq || null !== gq)) {
                const Eq = gq && gq.constructor ? ` (${gq.constructor.name})` : "";
                throw new eg(`a '${Yq}' was expected, but '${JSON.stringify(gq)}'${Eq} was provided in ${this.constructor.name}#${qq}`)
              }
              this.constructor[Aq](this[Vq], Eq, lq.ADD)
            } else void 0 !== cq && null !== cq && this[Vq].delete(Eq);
            xq[Eq] = gq
          }
        }
      }(qq, Eq, gq) : SE(gq) ? function(qq, Eq, gq) {
        return function(Yq) {
          const Oq = this[Qq],
            mq = Oq[Eq];
          if (void 0 !== Yq && null !== Yq) {
            if ("number" !== typeof Yq) throw new eg(`a 'number' was expected, but '${JSON.stringify(Yq)}' was provided in ${this.constructor.name}#${qq}`);
            if ((Yq = GE(gq, pE(gq, Yq))) === mq) return;
            this.constructor[Aq](this[Vq], Eq, lq.ADD)
          } else {
            if (Yq === mq) return;
            void 0 !== mq && null !== mq && this[Vq].delete(Eq)
          }
          Oq[Eq] = Yq
        }
      }(qq, Eq, gq.quantized) : function(qq, Eq, gq) {
        return function(Yq) {
          const Oq = this[Qq],
            mq = Oq[Eq];
          if (Yq !== mq) {
            if (void 0 !== Yq && null !== Yq) {
              Dg(Yq, gq, this, qq);
              const Oq = this[Vq],
                xq = this.constructor;
              void 0 !== mq && null !== mq && mq[Vq] ? (Oq.root?.remove(mq[Vq]), xq[Aq](Oq, Eq, lq.DELETE_AND_ADD)) : xq[Aq](Oq, Eq, lq.ADD), Yq[Vq]?.setParent(this, Oq.root, Eq)
            } else void 0 !== mq && null !== mq && this[Vq].delete(Eq);
            Oq[Eq] = Yq
          }
        }
      }(qq, Eq, gq), {
        get: function() {
          return this[Qq][Eq]
        },
        set: Oq,
        enumerable: !0,
        configurable: !0
      }
    }

    function tY() {
      let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(Eq, gq) {
        const Yq = wE.initialize(Eq.constructor);
        wE.setDeprecated(Yq, gq), qq && (Yq[tq] ??= {}, Yq[tq][gq] = {
          get: function() {
            throw new Error(`${gq} is deprecated.`)
          },
          set: function(qq) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(Eq, gq, Yq[tq][gq]))
      }
    }
    let rY = !1;

    function vY(qq, Eq, gq) {
      rY || (rY = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Yq in Eq) PY(Eq[Yq], gq)(qq.prototype, Yq);
      return qq
    }

    function hY(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bY;
      if (null == qq || "object" !== typeof qq) throw new Error(`schema(): first argument must be a fields object (got ${typeof qq}).`);
      const Yq = {},
        lq = {},
        Oq = {},
        mq = {},
        xq = (qq, Eq) => {
          if (Eq.hasDefault)((qq, Eq) => {
            "function" === typeof Eq ? mq[qq] = Eq : Eq && "function" === typeof Eq.clone ? mq[qq] = () => Eq.clone() : Oq[qq] = Eq
          })(qq, Eq.default);
          else if (!Eq.optional) {
            const gq = function(qq) {
              if (qq && "object" === typeof qq) {
                if (void 0 !== qq.array) return () => new gY;
                if (void 0 !== qq.map) return () => new lY;
                if (void 0 !== qq.set) return () => new mY;
                if (void 0 !== qq.collection) return () => new OY;
                if (void 0 !== qq.stream) return () => new xY
              } else if ("function" === typeof qq && bY.is(qq) && (!qq.prototype.initialize || 0 === qq.prototype.initialize.length)) return () => new qq
            }(Eq.type);
            gq && (mq[qq] = gq)
          }
        },
        Aq = {},
        cq = [],
        uq = [],
        Bq = {},
        Wq = [],
        Nq = [],
        aq = {},
        Vq = [];
      for (const Qq in qq) {
        const gq = qq[Qq],
          Oq = `schema(${Eq?`'${Eq}'`:""}): field '${Qq}'`;
        if (cY(gq)) {
          const qq = gq.toDefinition();
          if (qq.noSync) {
            if (void 0 !== qq.view || qq.unreliable || qq.patchOnly || qq.fullStateOnly || qq.stream) throw new Error(`${Oq} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            xq(Qq, qq);
            continue
          }
          if (qq.patchOnly && qq.fullStateOnly) throw new Error(`${Oq} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const Eq = RE(qq.type, Oq);
          if ("function" === typeof Eq && !bY.is(Eq)) throw new Error(`${Oq} is a synced ref to non-Schema class '${Eq.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Yq[Qq] = Eq, void 0 !== qq.view && (Aq[Qq] = qq.view), qq.unreliable && cq.push(Qq), qq.patchOnly && uq.push(Qq), qq.deprecated && (Bq[Qq] = qq.deprecatedThrows), qq.fullStateOnly && Wq.push(Qq), qq.stream && Nq.push(Qq), void 0 !== qq.streamPriority && (aq[Qq] = qq.streamPriority), qq.optional && Vq.push(Qq), xq(Qq, qq)
        } else {
          if ("function" !== typeof gq) throw new Error(`${Oq} must be a t.* builder, Schema subclass, or method (got ${typeof gq}).`);
          bY.is(gq) ? (Yq[Qq] = gq, gq.prototype.initialize && 0 !== gq.prototype.initialize.length || (mq[Qq] = () => new gq)) : lq[Qq] = gq
        }
      }
      const dq = qq => {
          for (const Eq in Oq) qq[Eq] = Oq[Eq];
          for (const Eq in mq) qq[Eq] = mq[Eq]()
        },
        jq = () => {
          const qq = {};
          return dq(qq), qq
        },
        Hq = "function" === typeof lq.initialize,
        oq = lq.initialize ?? gq._initialize,
        Pq = class extends gq {
          constructor() {
            for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
            const lq = Eq[0];
            void 0 === lq ? (super(), dq(this)) : super(Object.assign(jq(), Hq ? (qq => {
              const Eq = Object.keys(Yq),
                gq = {};
              for (const Yq in qq) Eq.includes(Yq) || (gq[Yq] = qq[Yq]);
              return gq
            })(lq) : lq)), oq && new.target === Pq && oq.apply(this, Eq)
          }
        };
      Eq && Object.defineProperty(Pq, "name", {
        value: Eq
      }), wE.setFields(Pq, Yq), Pq._getDefaultValues = jq, Pq._initialize = oq, Object.assign(Pq.prototype, lq);
      for (const Qq in Aq) dY(Aq[Qq])(Pq.prototype, Qq);
      for (const Qq of cq) jY(Pq.prototype, Qq);
      for (const Qq of uq) HY(Pq.prototype, Qq);
      for (const Qq in Bq) tY(Bq[Qq])(Pq.prototype, Qq);
      if (Wq.length > 0 || Nq.length > 0) {
        const qq = Pq[Symbol.metadata];
        for (const Eq of Wq) wE.setFullStateOnly(qq, Eq);
        for (const Eq of Nq) wE.setStream(qq, Eq);
        for (const Eq in aq) wE.setStreamPriority(qq, Eq, aq[Eq])
      }
      if (Vq.length > 0) {
        const qq = Pq[Symbol.metadata];
        for (const Eq of Vq) qq[qq[Eq]].optional = !0
      }
      return Pq.extend = (qq, Eq) => hY(qq, Eq, Pq), Pq
    }

    function nY(qq) {
      const Eq = qq[Vq].root,
        gq = {
          ops: {},
          refs: []
        };
      let Yq = Eq.changes.next;
      for (; Yq;) {
        const qq = Yq.changeTree;
        void 0 !== qq ? (gq.refs.push(`refId#${qq.ref[xq]}`), qq.forEach(((qq, Eq) => {
          if (qq < 0 || !Eq) return;
          const Yq = lq[Eq];
          gq.ops[Yq] || (gq.ops[Yq] = 0), gq.ops[Yq]++
        })), Yq = Yq.next) : Yq = Yq.next
      }
      return gq
    }
    class bY {
      static[cq] = Tg;
      static[uq] = Kg;
      [xq];
      [Qq];
      static initialize(qq) {
        Object.defineProperty(qq, Vq, {
          value: new ig(qq),
          enumerable: !1,
          writable: !0
        }), qq[Qq] = []
      }
      static initializeForDecoder() {
        const qq = Object.create(this.prototype);
        return fg(qq), qq[Qq] = [], qq
      }
      static reset(qq) {
        const Eq = qq?.[Vq];
        if (void 0 === Eq || "function" !== typeof Eq.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== Eq.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${qq.constructor.name}) with multiple parents.`);
        qq[oq]()
      } [oq]() {
        const qq = this.constructor[Symbol.metadata],
          Eq = qq?.[nq] ?? [],
          gq = this[Qq];
        for (let Yq = 0; Yq < Eq.length; Yq++) {
          const qq = gq[Eq[Yq]];
          qq?.[oq]?.()
        }
        this[Vq].recycle(), this[xq] = void 0
      }
      static is(qq) {
        const Eq = qq[Symbol.metadata];
        return "object" === typeof Eq && null !== Eq
      }
      static isSchema(qq) {
        return "function" === typeof qq?.assign
      }
      static[Aq](qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.ADD;
        qq.change(Eq, gq)
      }
      static[Bq](qq, Eq, gq) {
        const Yq = qq.constructor[Symbol.metadata],
          lq = Yq[Eq]?.tag;
        return void 0 === gq ? void 0 === lq : void 0 === lq || (lq === aY ? gq.isChangeTreeVisible(qq[Vq]) : gq.hasTagOnTree(qq[Vq], lq))
      }
      constructor(qq) {
        bY.initialize(this), qq && bY.assignProps(this, qq)
      }
      assign(qq) {
        return bY.assignProps(this, qq), this
      }
      static assignProps(qq, Eq) {
        const gq = qq.constructor[Symbol.metadata];
        if (gq && void 0 !== gq[hq])
          for (let lq = 0; lq <= gq[hq]; lq++) {
            const Yq = gq[lq];
            if (!Yq) continue;
            const Oq = Eq[Yq.name];
            void 0 !== Oq && (qq[Yq.name] = Oq)
          }
        const Yq = Object.keys(Eq);
        for (let lq = 0; lq < Yq.length; lq++) {
          const Oq = Yq[lq];
          gq && void 0 !== gq[Oq] || (qq[Oq] = Eq[Oq])
        }
      }
      restore(qq) {
        const Eq = this.constructor[Symbol.metadata];
        for (const gq in Eq) {
          const Yq = Eq[gq],
            lq = Yq.name,
            Oq = Yq.type,
            mq = qq[lq];
          if (void 0 !== mq && null !== mq)
            if ("string" === typeof Oq) this[lq] = mq;
            else if (bY.is(Oq)) {
            const qq = new Oq;
            qq.restore(mq), this[lq] = qq
          } else if ("object" === typeof Oq) {
            const qq = Object.keys(Oq)[0],
              Eq = Oq[qq];
            if ("map" === qq) {
              const qq = this[lq];
              for (const gq in mq)
                if (bY.is(Eq)) {
                  const Yq = new Eq;
                  Yq.restore(mq[gq]), qq.set(gq, Yq)
                } else qq.set(gq, mq[gq])
            } else if ("array" === qq) {
              const qq = this[lq];
              for (let gq = 0; gq < mq.length; gq++)
                if (bY.is(Eq)) {
                  const Yq = new Eq;
                  Yq.restore(mq[gq]), qq.push(Yq)
                } else qq.push(mq[gq])
            }
          }
        }
        return this
      }
      setDirty(qq, Eq) {
        const gq = this.constructor[Symbol.metadata];
        this[Vq].change(gq[gq[qq]].index, Eq)
      }
      pauseTracking() {
        this[Vq].pause()
      }
      resumeTracking() {
        this[Vq].resume()
      }
      untracked(qq) {
        return this[Vq].untracked(qq)
      }
      get isTrackingPaused() {
        return this[Vq].paused
      }
      clone() {
        const qq = Object.create(this.constructor.prototype);
        bY.initialize(qq);
        const Eq = this.constructor[Symbol.metadata];
        for (const gq in Eq) {
          const Yq = Eq[gq].name;
          "object" === typeof this[Yq] && "function" === typeof this[Yq]?.clone ? qq[Yq] = this[Yq].clone() : qq[Yq] = this[Yq]
        }
        return qq
      }
      toJSON() {
        const qq = {},
          Eq = this.constructor[Symbol.metadata];
        for (const gq in Eq) {
          const Yq = Eq[gq],
            lq = Yq.name;
          Yq.deprecated || null === this[lq] || "undefined" === typeof this[lq] || (qq[lq] = "function" === typeof this[lq].toJSON ? this[lq].toJSON() : this[lq])
        }
        return qq
      }
      discardAllChanges() {
        this[Vq].discardAll()
      } [Wq](qq) {
        return this[this.constructor[Symbol.metadata][qq].name]
      } [Nq](qq) {
        this[this.constructor[Symbol.metadata][qq].name] = void 0
      }
      static debugRefIds(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Oq = Eq ? ` - ${JSON.stringify(qq.toJSON())}` : "",
          mq = qq[Vq],
          Aq = qq[xq],
          cq = Yq ? Yq.root.refCount[Aq] : mq.refCount,
          uq = cq > 1 ? ` [\xd7${cq}]` : "";
        let Bq = `${function(qq){return new Array(qq).fill(0).map(((Eq,gq)=>gq===qq-1?"\u2514\u2500 ":"   ")).join("")}(gq)}${lq}${qq.constructor.name} (refId: ${Aq})${uq}${Oq}\n`;
        return mq.forEachChild(((lq, Oq) => {
          let mq = Oq;
          "number" === typeof Oq && qq.$indexes && (mq = qq.$indexes.get(Oq) ?? Oq);
          const xq = void 0 !== qq.forEach && void 0 !== mq ? `["${mq}"]: ` : "";
          Bq += this.debugRefIds(lq.ref, Eq, gq + 1, Yq, xq)
        })), Bq
      }
      static debugRefIdEncodingOrder(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const gq = [],
          Yq = qq[Vq];
        if ("changes" === Eq) {
          let qq = Yq.root.changes?.next;
          for (; qq;) qq.changeTree && gq.push(qq.changeTree.ref[xq]), qq = qq.next;
          return gq
        }
        const lq = "allFilteredChanges" === Eq,
          Oq = new Set,
          mq = qq => {
            Oq.has(qq) || (Oq.add(qq), qq.isFiltered === lq && gq.push(qq.ref[xq]), qq.forEachChild(((qq, Eq) => mq(qq))))
          };
        return mq(Yq), gq
      }
      static debugRefIdsFromDecoder(qq) {
        return this.debugRefIds(qq.state, !1, 0, qq)
      }
      static debugChanges(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = qq[Vq],
          Yq = Eq ? "allChanges" : "changes";
        let Oq = `${qq.constructor.name} (${qq[xq]}) -> .${Yq}:\n`;
        return Eq ? gq.forEachLive((qq => {
          Oq += `- [${qq}]: ADD (${JSON.stringify(gq.getValue(Number(qq),!0))})\n`
        })) : gq.forEach(((qq, Eq) => {
          qq < 0 || !Eq || (Oq += `- [${qq}]: ${lq[Eq]} (${JSON.stringify(gq.getValue(Number(qq),!1))})\n`)
        })), Oq
      }
    }
    Oq(bY);
    const iY = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class ZY {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const qq = {};
        for (const Eq in this.changeTrees) qq[Eq] = this.changeTrees[Eq].refCount;
        return qq
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
      enqueueFilterRefresh(qq) {
        this.types.hasFilters && (qq.flags & ng || (qq.flags |= ng, this.pendingFilterRefresh.push(qq)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(qq) {
        this._freeViewIds.push(qq)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(qq) {
        this.activeViews.set(qq.id, new WeakRef(qq))
      }
      unregisterView(qq) {
        this.activeViews.delete(qq.id);
        const Eq = qq.id;
        for (const gq of this.streamTrees) gq._dropView(Eq)
      }
      forEachActiveView(qq) {
        for (const [Eq, gq] of this.activeViews) {
          const Yq = gq.deref();
          if (void 0 !== Yq) qq(Yq);
          else {
            this.activeViews.delete(Eq);
            for (const qq of this.streamTrees) qq._dropView(Eq)
          }
        }
      }
      registerStream(qq) {
        this.streamTrees.add(qq)
      }
      unregisterStream(qq) {
        this.streamTrees.delete(qq)
      }
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = qq, this.nextUniqueId = Eq
      }
      add(qq) {
        const Eq = qq.ref;
        void 0 === Eq[xq] && (iY.value = this.nextUniqueId++, Object.defineProperty(Eq, xq, iY));
        const gq = Eq[xq],
          Yq = void 0 === this.changeTrees[gq];
        Yq && (this.changeTrees[gq] = qq), qq.needsRestage && (qq.needsRestage = !1, qq.forEachLiveWithCtx(qq, gg));
        const lq = Yq ? 0 : qq.refCount;
        return qq.refCount = lq + 1, lq > 0 && this.enqueueFilterRefresh(qq), Yq
      }
      remove(qq) {
        const Eq = qq.refCount - 1;
        if (Eq <= 0) {
          if (qq.root = void 0, delete this.changeTrees[qq.ref[xq]], qq.isStreamCollection) {
            const Eq = qq.ref;
            Eq._unregister?.(), this.unregisterStream(Eq)
          }
          this.removeFromQueue(qq), this.removeFromUnreliableQueue(qq), qq.refCount = 0, qq.needsRestage = !0, qq.forEachChild(((Eq, gq) => {
            Eq.removeParent(qq.ref) && (void 0 === Eq.parentRef || Eq.refCount > 0 ? this.remove(Eq) : this.moveNextToParent(Eq))
          }))
        } else qq.refCount = Eq, this.enqueueFilterRefresh(qq), this.recursivelyMoveNextToParent(qq);
        return Eq
      }
      recursivelyMoveNextToParent(qq) {
        this.moveNextToParent(qq), qq.forEachChild(((qq, Eq) => this.recursivelyMoveNextToParent(qq)))
      }
      moveNextToParent(qq) {
        qq.changesNode && this._moveNextToParentInList(this.changes, qq, qq.changesNode, "changesNode"), qq.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, qq, qq.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(qq, Eq, gq, Yq) {
        const lq = Eq.parent;
        if (!lq || !lq[Vq]) return;
        const Oq = lq[Vq][Yq];
        Oq && Oq !== gq && (gq.position > Oq.position || (gq.prev ? gq.prev.next = gq.next : qq.next = gq.next, gq.next ? gq.next.prev = gq.prev : qq.tail = gq.prev, gq.prev = qq.tail, gq.next = void 0, qq.tail.next = gq, qq.tail = gq, gq.position = qq.nextPosition++))
      }
      enqueueChangeTree(qq) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq.changesNode) || (qq.changesNode = this._appendToList(this.changes, qq))
      }
      enqueueUnreliable(qq) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq.unreliableChangesNode) || (qq.unreliableChangesNode = this._appendToList(this.unreliableChanges, qq))
      }
      _appendToList(qq, Eq) {
        const gq = this._nodePool;
        let Yq;
        return gq.length > 0 ? (Yq = gq.pop(), Yq.changeTree = Eq, Yq.next = void 0, Yq.prev = void 0) : Yq = {
          changeTree: Eq,
          next: void 0,
          prev: void 0,
          position: 0
        }, qq.next ? (Yq.prev = qq.tail, qq.tail.next = Yq, qq.tail = Yq) : (qq.nextPosition = 0, qq.next = Yq, qq.tail = Yq), Yq.position = qq.nextPosition++, Yq
      }
      releaseNode(qq) {
        qq.changeTree = void 0, qq.prev = void 0, qq.next = void 0, this._nodePool.push(qq)
      }
      removeFromQueue(qq) {
        return this._removeNode(this.changes, qq, qq.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(qq) {
        return this._removeNode(this.unreliableChanges, qq, qq.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(qq, Eq, gq, Yq) {
        return !(!gq || gq.changeTree !== Eq) && (gq.prev ? gq.prev.next = gq.next : qq.next = gq.next, gq.next ? gq.next.prev = gq.prev : qq.tail = gq.prev, Eq[Yq] = void 0, this.releaseNode(gq), !0)
      }
    }

    function fY(qq, Eq) {
      if (-1 === Eq || Eq >= qq.length) return !1;
      const gq = qq.length - 1;
      for (let Yq = Eq; Yq < gq; Yq++) qq[Yq] = qq[Yq + 1];
      return qq.length = gq, !0
    }

    function MY(qq, Eq, gq) {
      const Yq = ~gq,
        lq = qq.changeTrees;
      for (const Oq in lq) {
        const qq = lq[Oq],
          gq = qq.visibleViews;
        void 0 !== gq && Eq < gq.length && (gq[Eq] &= Yq);
        const mq = qq.subscribedViews;
        void 0 !== mq && Eq < mq.length && (mq[Eq] &= Yq);
        const xq = qq.tagViews;
        void 0 !== xq && xq.forEach((qq => {
          Eq < qq.length && (qq[Eq] &= Yq)
        }))
      }
    }
    const TY = new FinalizationRegistry((qq => {
      let {
        root: Eq,
        id: gq,
        slot: Yq,
        bit: lq
      } = qq;
      MY(Eq, Yq, lq), Eq.activeViews.delete(gq);
      for (const Oq of Eq.streamTrees) Oq._dropView(gq);
      Eq.releaseViewId(gq)
    }));

    function zY(qq) {
      if (void 0 === qq) return "undefined";
      if (null === qq) return "null";
      const Eq = typeof qq;
      return "string" === Eq ? JSON.stringify(qq.length > 30 ? `${qq.slice(0,30)}\u2026` : qq) : "object" !== Eq && "function" !== Eq ? `${Eq} ${String(qq)}` : Array.isArray(qq) ? `Array(${qq.length})` : qq.constructor?.name ?? "Object"
    }
    class SY {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = qq, qq && (this.items = [])
      }
      _bindRoot(qq) {
        void 0 === this._root && (this._root = qq, this.id = qq.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), qq.registerView(this), TY.register(this, {
          root: qq,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), MY(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), TY.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(qq) {
        const Eq = qq.visibleViews,
          gq = this._slot;
        return void 0 !== Eq && gq < Eq.length && 0 !== (Eq[gq] & this._bit)
      }
      markVisible(qq) {
        const Eq = this._slot;
        let gq = qq.visibleViews;
        for (void 0 === gq && (gq = qq.visibleViews = []); gq.length <= Eq;) gq.push(0);
        gq[Eq] |= this._bit
      }
      unmarkVisible(qq) {
        const Eq = qq.visibleViews;
        if (void 0 === Eq) return;
        const gq = this._slot;
        gq < Eq.length && (Eq[gq] &= ~this._bit)
      }
      isSubscribed(qq) {
        const Eq = qq.subscribedViews,
          gq = this._slot;
        return void 0 !== Eq && gq < Eq.length && 0 !== (Eq[gq] & this._bit)
      }
      _setSubscribed(qq) {
        const Eq = this._slot;
        let gq = qq.subscribedViews;
        for (void 0 === gq && (gq = qq.subscribedViews = []); gq.length <= Eq;) gq.push(0);
        gq[Eq] |= this._bit
      }
      _clearSubscribed(qq) {
        const Eq = qq.subscribedViews;
        if (void 0 === Eq) return;
        const gq = this._slot;
        gq < Eq.length && (Eq[gq] &= ~this._bit)
      }
      hasTagOnTree(qq, Eq) {
        const gq = qq.tagViews;
        if (void 0 === gq) return !1;
        const Yq = this._slot,
          lq = this._bit;
        for (let Oq = Eq; 0 !== Oq; Oq &= Oq - 1) {
          const qq = gq.get(Oq & -Oq);
          if (void 0 !== qq && Yq < qq.length && 0 !== (qq[Yq] & lq)) return !0
        }
        return !1
      }
      addTag(qq, Eq) {
        if (Eq === aY) return;
        let gq = qq.tagViews;
        void 0 === gq && (gq = qq.tagViews = new Map);
        const Yq = this._slot,
          lq = this._bit;
        for (let Oq = Eq; Oq > 0; Oq &= Oq - 1) {
          const qq = Oq & -Oq;
          let Eq = gq.get(qq);
          for (void 0 === Eq && (Eq = [], gq.set(qq, Eq)); Eq.length <= Yq;) Eq.push(0);
          Eq[Yq] |= lq
        }
      }
      removeTag(qq, Eq) {
        if (Eq === aY) return;
        const gq = qq.tagViews;
        if (void 0 === gq) return;
        const Yq = this._slot,
          lq = ~this._bit;
        for (let Oq = Eq; Oq > 0; Oq &= Oq - 1) {
          const qq = gq.get(Oq & -Oq);
          void 0 !== qq && Yq < qq.length && (qq[Yq] &= lq)
        }
      }
      removeAllTagsOnTree(qq) {
        const Eq = qq.tagViews;
        if (void 0 === Eq) return;
        const gq = this._slot,
          Yq = ~this._bit;
        Eq.forEach((qq => {
          gq < qq.length && (qq[gq] &= Yq)
        }))
      }
      add(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aY,
          gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(qq, Eq, gq, !1)
      }
      _addImmediate(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aY;
        this._add(qq, Eq, !0, !0)
      }
      _add(qq, Eq, gq, Yq) {
        const Oq = qq?.[Vq];
        if (!Oq) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${zY(qq)}`), !1;
        const mq = Oq.parent;
        if (!mq && 0 !== qq[xq]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Oq.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Oq.root && this._bindRoot(Oq.root);
        const Aq = mq?.[Vq];
        if (!Yq && Aq?.isStreamCollection) return fE(mq, this.id, Oq.parentIndex), !0;
        const cq = qq.constructor[Symbol.metadata],
          uq = this.isVisible(Oq);
        if (!this.iterable || !gq || uq && -1 !== this.items.indexOf(qq) || this.items.push(qq), this.markVisible(Oq), gq && mq && this.addParentOf(Oq, Eq), !Yq && Oq.isStreamCollection) return !0;
        if (Eq === aY && Oq.isNew) return this._markSubtreeVisible(Oq, Eq), !1;
        let Bq = this.changes.get(qq[xq]);
        void 0 === Bq && (Bq = new Map, this.changes.set(qq[xq], Bq));
        let Wq = !1;
        const Nq = Oq.encDescriptor.tags;
        if (Oq.forEachChild(((qq, gq) => {
            const Yq = Nq[gq];
            if (void 0 !== Yq) {
              if (!(Yq === aY || Eq !== aY && 0 !== (Yq & Eq))) return
            }
            this.add(qq.ref, Eq, !1) && (Wq = !0)
          })), Eq !== aY) {
          this.addTag(Oq, Eq);
          const qq = cq?.[iq];
          if (void 0 !== qq)
            for (let gq = Eq; gq > 0; gq &= gq - 1) qq[gq & -gq]?.forEach((qq => {
              Oq.getChange(qq) !== lq.DELETE && Bq.set(qq, lq.ADD)
            }))
        }
        if ((Eq === aY || !uq) && (!Oq.isNew || Wq))
          if (Oq.isArray && "string" !== typeof Oq.refTarget[dq]) Oq.refTarget.items.length > 0 && (Bq.set(-1, lq.ADD), Wq = !0);
          else {
            const qq = Oq.encDescriptor.tags;
            Oq.forEachLive((gq => {
              const Yq = qq[gq];
              (void 0 === Yq || Yq === aY || Eq !== aY && 0 !== (Yq & Eq)) && (Bq.set(gq, lq.ADD), Wq = !0)
            }))
          } return Wq
      }
      _markSubtreeVisible(qq, Eq) {
        const gq = qq.encDescriptor.tags;
        qq.forEachChild(((qq, Yq) => {
          const lq = gq[Yq];
          if (void 0 !== lq) {
            if (!(lq === aY || Eq !== aY && 0 !== (lq & Eq))) return
          }
          qq.isNew ? (this.markVisible(qq), this._markSubtreeVisible(qq, Eq)) : this._add(qq.ref, Eq, !1, !1)
        }))
      }
      addParentOf(qq, Eq) {
        const gq = qq.parent[Vq],
          Yq = qq.parentIndex;
        this.isVisible(gq) || this.markVisible(gq);
        const Oq = gq.parent?.[Vq];
        if (Oq && this.addParentOf(gq, Eq), gq.hasFilteredFields && gq.getChange(Yq) !== lq.DELETE) {
          let Oq = this.changes.get(gq.ref[xq]);
          void 0 === Oq && (Oq = new Map, this.changes.set(gq.ref[xq], Oq));
          const mq = gq.encDescriptor.tags[Yq];
          void 0 !== mq && mq !== aY && 0 !== (mq & Eq) && this.addTag(gq, Eq), Oq.set(gq.isArray ? qq : Yq, lq.ADD)
        }
      }
      _touchAncestorsOf(qq) {
        let Eq = qq.parent?.[Vq];
        if (void 0 === Eq) return;
        const gq = [];
        for (; void 0 !== Eq;) {
          if (Eq.hasFilteredFields) {
            const qq = Eq.ref[xq];
            if (this.changes.has(qq)) break;
            gq.push(Eq)
          }
          Eq = Eq.parent?.[Vq]
        }
        for (let Yq = gq.length - 1; Yq >= 0; Yq--) this.changes.set(gq[Yq].ref[xq], new Map)
      }
      remove(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aY,
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = qq?.[Vq];
        if (!Yq) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${zY(qq)}`), this;
        const Oq = Yq.parent?.[Vq];
        if (Oq?.isStreamCollection) return this.unmarkVisible(Yq), this.iterable && !gq && fY(this.items, this.items.indexOf(qq)),
          function(qq, Eq, gq, Yq, Oq) {
            const mq = qq._stream;
            if (void 0 === mq) return !1;
            const xq = mq.pendingByView.get(Eq);
            if (xq?.has(Yq)) return xq.delete(Yq), !1;
            const Aq = mq.sentByView.get(Eq);
            if (Aq?.has(Yq)) {
              Aq.delete(Yq);
              let qq = Oq.get(gq);
              return void 0 === qq && (qq = new Map, Oq.set(gq, qq)), qq.set(Yq, lq.DELETE), !0
            }
          }(Yq.parent, this.id, Yq.parent[xq], Yq.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Yq), this;
        if (Yq.isStreamCollection) {
          this.unmarkVisible(Yq), this.iterable && !gq && fY(this.items, this.items.indexOf(qq));
          const Eq = Yq.ref,
            Oq = Eq._stream;
          if (void 0 !== Oq) {
            Oq.pendingByView.get(this.id)?.clear();
            const qq = Oq.sentByView.get(this.id);
            if (void 0 !== qq && qq.size > 0) {
              const gq = Eq[xq];
              let Yq = this.changes.get(gq);
              void 0 === Yq && (Yq = new Map, this.changes.set(gq, Yq));
              for (const Eq of qq) Yq.set(Eq, lq.DELETE);
              qq.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Yq), this.iterable && !gq && fY(this.items, this.items.indexOf(qq));
        const mq = Yq.ref,
          Aq = mq.constructor[Symbol.metadata],
          cq = mq[xq];
        this._touchAncestorsOf(Yq);
        let uq = this.changes.get(cq);
        if (void 0 === uq && (uq = new Map, this.changes.set(cq, uq)), Eq === aY) {
          const qq = Yq.parent;
          if (qq && !wE.isValidInstance(qq) && Yq.isFiltered) {
            const Eq = Oq.isArray ? Yq : Yq.parentIndex,
              gq = qq[xq];
            let mq = this.changes.get(gq);
            void 0 === mq ? (mq = new Map, this.changes.set(gq, mq)) : mq.get(Eq) === lq.ADD && this._dropPendingEntries(Yq), mq.set(Eq, lq.DELETE), this._recursiveDeleteVisibleChangeTree(Yq)
          } else Aq?.[bq]?.forEach((qq => this._removeViewField(Yq, uq, qq)))
        } else {
          const qq = Aq?.[iq];
          if (void 0 !== qq)
            for (let gq = Eq; gq > 0; gq &= gq - 1) qq[gq & -gq]?.forEach((qq => this._removeViewField(Yq, uq, qq)))
        }
        return void 0 === Eq ? this.removeAllTagsOnTree(Yq) : this.removeTag(Yq, Eq), this
      }
      has(qq) {
        return this.isVisible(qq[Vq])
      }
      hasTag(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aY;
        return this.hasTagOnTree(qq[Vq], Eq)
      }
      subscribe(qq, Eq) {
        const gq = qq?.[Vq];
        if (!gq) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${zY(qq)}`), this;
        if (void 0 === this._root && void 0 !== gq.root && this._bindRoot(gq.root), void 0 !== Eq)
          if (gq.isStreamCollection) {
            const gq = hE(qq);
            null === Eq ? gq.priorityByView?.delete(this.id) : (gq.priorityByView ??= new Map).set(this.id, Eq)
          } else {
            const Eq = qq?.constructor?.name ?? "collection",
              Yq = gq.parent;
            if (void 0 === Yq) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Eq} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const qq = Yq?.constructor?.[Symbol.metadata]?.[gq.parentIndex]?.name,
                lq = qq ? `${Yq.constructor.name}#${qq}` : Eq;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${lq} is a ${Eq}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(gq)) return this;
        const Yq = void 0 !== gq.parent && !this.isVisible(gq);
        if (Yq ? (this.addParentOf(gq, aY), this._add(qq, aY, !1, !1)) : this.markVisible(gq), this._setSubscribed(gq), gq.isStreamCollection) {
          const Eq = qq;
          gq.forEachChild(((qq, gq) => {
            fE(Eq, this.id, gq)
          }))
        } else Yq || gq.forEachChild((qq => {
          this.markVisible(qq)
        }));
        return this
      }
      unsubscribe(qq) {
        const Eq = qq?.[Vq];
        if (!Eq) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${zY(qq)}`), this;
        if (!this.isSubscribed(Eq)) return this;
        this._clearSubscribed(Eq);
        const gq = Eq.ref[xq];
        if (Eq.isStreamCollection) {
          const Eq = qq._stream;
          if (void 0 !== Eq) {
            Eq.pendingByView.get(this.id)?.clear();
            const qq = Eq.sentByView.get(this.id);
            if (void 0 !== qq && qq.size > 0) {
              let Eq = this.changes.get(gq);
              void 0 === Eq && (Eq = new Map, this.changes.set(gq, Eq));
              for (const gq of qq) Eq.set(gq, lq.DELETE);
              qq.clear()
            }
          }
        } else {
          const qq = Eq.isArray;
          let Yq = this.changes.get(gq);
          Eq.forEachChild(((Eq, Oq) => {
            void 0 === Yq && (Yq = new Map, this.changes.set(gq, Yq)), Yq.set(qq ? Eq : Oq, lq.DELETE), this.unmarkVisible(Eq)
          }))
        }
        return this.unmarkVisible(Eq), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let qq = 0, Eq = this.items.length; qq < Eq; qq++) this.remove(this.items[qq], aY, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(qq) {
        let Eq = this.isVisible(qq);
        if (!Eq && qq.isVisibilitySharedWithParent)
          if (this.isVisible(qq.parent[Vq])) this.markVisible(qq), Eq = !0;
          else
            for (let gq = qq.extraParents; void 0 !== gq; gq = gq.next) {
              const Yq = gq.ref[Vq];
              if (Yq.isFiltered && this.isVisible(Yq)) {
                this.markVisible(qq), Eq = !0;
                break
              }
            }
        return Eq
      }
      _recursiveDeleteVisibleChangeTree(qq) {
        qq.forEachChild((qq => {
          this.unmarkVisible(qq), this._recursiveDeleteVisibleChangeTree(qq)
        }))
      }
      _dropPendingEntries(qq) {
        this.changes.delete(qq.ref[xq]), qq.forEachChild((qq => this._dropPendingEntries(qq)))
      }
      _removeViewField(qq, Eq, gq) {
        const Yq = Eq.get(gq) === lq.ADD;
        Eq.set(gq, lq.DELETE);
        const Oq = qq.ref[qq.encDescriptor.names[gq]],
          mq = Oq?.[Vq];
        mq && (this.unmarkVisible(mq), this._recursiveDeleteVisibleChangeTree(mq), Yq && this._dropPendingEntries(mq))
      }
    }

    function pY(qq) {
      qq.structSwitchEmitted || (qq.shouldEmitSwitch && (qq.buffer[qq.it.offset++] = 255, EE.number(qq.buffer, qq.ref[xq], qq.it)), qq.structSwitchEmitted = !0)
    }

    function GY(qq, Eq) {
      kY(qq, Eq, lq.ADD)
    }

    function LY(qq, Eq) {
      if (Eq._fullSyncGen === qq.gen) return;
      Eq._fullSyncGen = qq.gen;
      if (!qq.hasView || qq.view.isChangeTreeVisible(Eq)) {
        const gq = Eq.encDescriptor;
        qq.changeTree = Eq, qq.ref = Eq.ref, qq.encoder = gq.encoder, qq.filter = gq.filter, qq.metadata = gq.metadata, qq.treeIsFiltered = Eq.isFiltered, qq.isSchema = gq.isSchema, qq.filterBitmask = gq.filterBitmask, qq.tags = gq.tags, qq.structSwitchEmitted = !1, qq.shouldEmitSwitch = qq.hasView || qq.it.offset > qq.initialOffset || Eq !== qq.rootChangeTree, Eq.isArray && Eq.collDirty.size > 0 && (Eq.flags |= 512), lg(Eq, qq, GY)
      }
      jg(Eq, qq, JY)
    }

    function JY(qq, Eq, gq) {
      LY(qq, Eq)
    }

    function kY(qq, Eq, gq) {
      if (Eq < 0) {
        if (qq.treeIsFiltered !== qq.emitFiltered) return;
        return pY(qq), void(qq.buffer[qq.it.offset++] = 255 & Math.abs(Eq))
      }
      if ((qq.isSchema ? qq.treeIsFiltered || (Eq < 32 ? 0 !== (qq.filterBitmask & 1 << Eq) : void 0 !== qq.tags[Eq]) : qq.treeIsFiltered) !== qq.emitFiltered) return;
      const Yq = qq.isEncodeAll ? lq.ADD : gq;
      void 0 !== Yq && (void 0 === qq.filter || qq.filter(qq.ref, Eq, qq.view)) && (pY(qq), qq.encoder(qq.self, qq.buffer, qq.changeTree, Eq, Yq, qq.it, qq.isEncodeAll, qq.hasView, qq.metadata))
    }

    function RY(qq, Eq) {
      const gq = new Uint8Array(qq.length + Eq.length);
      return gq.set(qq, 0), gq.set(Eq, qq.length), gq
    }
    class UY {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(UY.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(qq, Eq) {
        this.context = JE.cache(qq.constructor), this.root = Eq ?? new ZY(this.context), this.setState(qq)
      }
      setState(qq) {
        this.state = qq, this.state[Vq].setRoot(this.root)
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
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.offset;
        return this._encodeChannel(qq, Eq, gq, Yq, !1)
      }
      encodeUnreliable() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.offset;
        return this._encodeChannel(qq, Eq, gq, Yq, !0)
      }
      _encodeChannel(qq, Eq, gq, Yq, lq) {
        this.root.pendingFilterRefresh.length > 0 && mg(this.root);
        const Oq = void 0 !== Eq,
          mq = this.state[Vq],
          xq = this._encodeCtx;
        xq.self = this, xq.buffer = gq, xq.it = qq, xq.view = Eq, xq.isEncodeAll = !1, xq.hasView = Oq, xq.emitFiltered = Oq;
        let Aq = lq ? this.root.unreliableChanges : this.root.changes;
        for (; Aq = Aq.next;) {
          const gq = Aq.changeTree;
          if (Oq && !Eq.isChangeTreeVisible(gq)) continue;
          const cq = lq ? gq.unreliableRecorder : gq;
          if (!cq || !cq.has()) continue;
          const uq = gq.encDescriptor;
          xq.changeTree = gq, xq.ref = gq.ref, xq.encoder = uq.encoder, xq.filter = uq.filter, xq.metadata = uq.metadata, xq.treeIsFiltered = gq.isFiltered, xq.isSchema = uq.isSchema, xq.filterBitmask = uq.filterBitmask, xq.tags = uq.tags, xq.structSwitchEmitted = !1, xq.isRootTree = gq === mq, xq.shouldEmitSwitch = Oq || qq.offset > Yq || !xq.isRootTree, cq.forEachWithCtx(xq, kY)
        }
        return lq || Oq || !this._isStreamBroadcastMode || this._emitStreamBroadcast(gq, qq), qq.offset > gq.byteLength ? (gq = this._resizeBuffer(gq, qq.offset), qq.offset = Yq, this._encodeChannel(qq, Eq, gq, Yq, lq)) : gq.subarray(0, qq.offset)
      }
      encodeFullSync(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : qq.offset;
        this.root.pendingFilterRefresh.length > 0 && mg(this.root);
        const Oq = void 0 !== Yq,
          mq = this.state[Vq],
          xq = this._encodeCtx;
        return xq.self = this, xq.buffer = Eq, xq.it = qq, xq.view = Yq, xq.isEncodeAll = !0, xq.hasView = Oq, xq.emitFiltered = gq, xq.gen = ++this._fullSyncGen, xq.initialOffset = lq, xq.rootChangeTree = mq, LY(xq, mq), qq.offset > Eq.byteLength ? (Eq = this._resizeBuffer(Eq, qq.offset), qq.offset = lq, this.encodeFullSync(qq, Eq, gq, Yq, lq)) : Eq.subarray(0, qq.offset)
      }
      _resizeBuffer(qq, Eq) {
        const gq = Math.ceil(Eq / UY.BUFFER_SIZE) * UY.BUFFER_SIZE,
          Yq = new Uint8Array(gq);
        return Yq.set(qq), qq === this.sharedBuffer && (this.sharedBuffer = Yq), Yq
      }
      encodeAll() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(qq, Eq, !1)
      }
      encodeAllView(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const lq = gq.offset;
        return Yq = this.encodeFullSync(gq, Yq, !0, qq, lq), RY(Yq.subarray(0, Eq), Yq.subarray(lq, gq.offset))
      }
      ensureCapacity(qq, Eq) {
        if (Eq + UY.BUFFER_SIZE <= qq.byteLength) return qq;
        const gq = Math.ceil((Eq + UY.BUFFER_SIZE) / UY.BUFFER_SIZE) * UY.BUFFER_SIZE,
          Yq = new Uint8Array(gq);
        return Yq.set(qq.subarray(0, Eq)), qq === this.sharedBuffer && (this.sharedBuffer = Yq), Yq
      }
      encodeView(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Oq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const mq = gq.offset;
        this._emitStreamPriority(qq);
        for (const Aq of qq.changes.keys()) {
          const Eq = qq.changes.get(Aq),
            Oq = this.root.changeTrees[Aq];
          if (void 0 === Oq) {
            qq.changes.delete(Aq);
            continue
          }
          if (0 === Eq.size) continue;
          const mq = Oq.encDescriptor,
            cq = mq.encoder,
            uq = mq.metadata,
            Bq = Oq.ref,
            Nq = Oq.refTarget;
          Yq = this.ensureCapacity(Yq, gq.offset), Yq[gq.offset++] = 255, EE.number(Yq, Bq[xq], gq);
          for (const [Aq, aq] of Eq) {
            let Eq;
            if (-1 === Aq) {
              const qq = Nq.tmpItems,
                Eq = Nq.deletedIndexes;
              for (let mq = 0; mq < qq.length; mq++) void 0 !== qq[mq] && !0 !== Eq[mq] && cq(this, Yq, Oq, mq, lq.ADD, gq, !1, !0, uq);
              continue
            }
            if ("number" === typeof Aq) Eq = Aq;
            else {
              const gq = Aq.indexInParent(Bq);
              if (void 0 === gq) continue;
              if (Eq = gq, aq === lq.ADD && Oq.getChange(Eq) === lq.DELETE) {
                qq.changes.delete(Aq.ref[xq]);
                continue
              }
            }
            cq(this, Yq, Oq, Eq, void 0 !== Nq[Wq](Eq) && aq || lq.DELETE, gq, !1, !0, uq)
          }
        }
        return qq.changes.clear(), Yq = this.encode(gq, qq, Yq), Oq ? RY(Yq.subarray(0, Eq), Yq.subarray(mq, gq.offset)) : Yq.subarray(mq, gq.offset)
      }
      encodeUnreliableView(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const lq = gq.offset;
        return Yq = this.encodeUnreliable(gq, qq, Yq, lq), RY(Yq.subarray(0, Eq), Yq.subarray(lq, gq.offset))
      }
      _emitStreamBroadcast(qq, Eq) {
        const gq = this.root.streamTrees;
        for (const Yq of gq) {
          const gq = Yq,
            Oq = gq[Vq],
            mq = gq[xq];
          if (void 0 === mq) continue;
          const Aq = gq._stream,
            cq = Aq.broadcastDeletes,
            uq = Aq.broadcastPending,
            Bq = Aq.sentBroadcast,
            Nq = cq.size > 0,
            aq = uq.size > 0,
            dq = Oq.encDescriptor,
            jq = dq.encoder,
            Hq = dq.metadata;
          if (Nq || aq) {
            if (qq[Eq.offset++] = 255, EE.number(qq, mq, Eq), Nq) {
              for (const gq of cq) jq(this, qq, Oq, gq, lq.DELETE, Eq, !1, !1, Hq);
              cq.clear()
            }
            const Yq = Aq.maxPerTick,
              aq = [];
            let dq = 0;
            const oq = [];
            for (const mq of uq) {
              if (dq >= Yq) break;
              const xq = gq[Wq](mq);
              void 0 !== xq ? (jq(this, qq, Oq, mq, lq.ADD, Eq, !1, !1, Hq), Bq.add(mq), aq.push(xq), oq.push(mq), dq++) : oq.push(mq)
            }
            for (const qq of oq) uq.delete(qq);
            for (const gq of aq) {
              const Yq = gq[Vq];
              if (void 0 === Yq) continue;
              const Oq = gq[xq];
              if (void 0 === Oq) continue;
              qq[Eq.offset++] = 255, EE.number(qq, Oq, Eq);
              const mq = Yq.encDescriptor,
                Aq = mq.encoder,
                cq = mq.metadata;
              Yq.forEachLive((gq => {
                wE.hasUnreliableAtIndex(cq, gq) || Aq(this, qq, Yq, gq, lq.ADD, Eq, !1, !1, cq)
              }))
            }
          }
          for (const Yq of Bq) {
            const lq = gq[Wq](Yq);
            if (void 0 === lq) continue;
            const Oq = lq[Vq];
            if (void 0 === Oq || !Oq.has()) continue;
            const mq = lq[xq];
            if (void 0 === mq) continue;
            qq[Eq.offset++] = 255, EE.number(qq, mq, Eq);
            const Aq = Oq.encDescriptor,
              cq = Aq.encoder,
              uq = Aq.metadata;
            Oq.forEach(((gq, Yq) => {
              gq < 0 || wE.hasUnreliableAtIndex(uq, gq) || cq(this, qq, Oq, gq, Yq, Eq, !1, !1, uq)
            }))
          }
        }
      }
      _emitStreamPriority(qq) {
        const Eq = this.root.streamTrees;
        if (0 === Eq.size) return;
        const gq = qq.id;
        for (const Yq of Eq) {
          const Eq = Yq,
            Oq = Eq._stream,
            mq = Oq.pendingByView.get(gq);
          if (void 0 === mq || 0 === mq.size) continue;
          const Aq = Oq.priorityByView?.get(gq),
            cq = void 0 !== Aq,
            uq = Oq.priority,
            Bq = Oq.maxPerTick,
            Nq = [],
            aq = [];
          if (cq || void 0 !== uq) {
            const gq = [],
              Yq = [];
            let lq = 0;
            for (const Oq of mq) {
              const mq = Eq[Wq](Oq);
              if (void 0 === mq) {
                aq.push(Oq);
                continue
              }
              const xq = cq ? Aq(mq) : uq(qq, mq);
              if (lq < Bq) {
                let qq = lq++;
                for (; qq > 0 && Yq[qq - 1] < xq;) Yq[qq] = Yq[qq - 1], gq[qq] = gq[qq - 1], qq--;
                Yq[qq] = xq, gq[qq] = Oq
              } else if (xq > Yq[Bq - 1]) {
                let qq = Bq - 1;
                for (; qq > 0 && Yq[qq - 1] < xq;) Yq[qq] = Yq[qq - 1], gq[qq] = gq[qq - 1], qq--;
                Yq[qq] = xq, gq[qq] = Oq
              }
            }
            for (let qq = 0; qq < lq; qq++) Nq.push(gq[qq])
          } else
            for (const qq of mq) {
              if (Nq.length >= Bq) break;
              Nq.push(qq)
            }
          for (const qq of aq) mq.delete(qq);
          const dq = Nq.length;
          let jq = Oq.sentByView.get(gq);
          void 0 === jq && (jq = new Set, Oq.sentByView.set(gq, jq));
          for (let gq = 0; gq < dq; gq++) {
            const Yq = Nq[gq],
              Oq = Eq[Wq](Yq);
            if (void 0 === Oq) {
              mq.delete(Yq);
              continue
            }
            qq._addImmediate(Oq);
            const Aq = Oq[Vq];
            if (void 0 !== Aq) {
              const Eq = Oq[xq];
              let gq = qq.changes.get(Eq);
              void 0 === gq && (gq = new Map, qq.changes.set(Eq, gq));
              const Yq = Aq.metadata;
              Aq.forEachLive((qq => {
                wE.hasUnreliableAtIndex(Yq, qq) || gq.set(qq, lq.ADD)
              }))
            }
            mq.delete(Yq), jq.add(Yq)
          }
        }
      }
      discardChanges() {
        const qq = this.root.changes;
        let Eq = qq.next;
        const gq = this.root;
        for (; Eq;) {
          const qq = Eq.next;
          Eq.changeTree.endEncode(), gq.releaseNode(Eq), Eq = qq
        }
        qq.next = void 0, qq.tail = void 0
      }
      discardUnreliableChanges() {
        const qq = this.root.unreliableChanges;
        let Eq = qq.next;
        const gq = this.root;
        for (; Eq;) {
          const qq = Eq.next;
          Eq.changeTree.endEncodeUnreliable(), gq.releaseNode(Eq), Eq = qq
        }
        qq.next = void 0, qq.tail = void 0
      }
      tryEncodeTypeId(qq, Eq, gq, Yq) {
        const lq = this.context.getTypeId(Eq),
          Oq = this.context.getTypeId(gq);
        void 0 !== Oq ? lq !== Oq && (qq[Yq.offset++] = 213, EE.number(qq, Oq, Yq)) : console.warn(`@colyseus/schema WARNING: Class "${gq.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const qq = this.root;
        if (0 === qq.streamTrees.size) return !1;
        const Eq = 0 === qq.activeViews.size;
        for (const gq of qq.streamTrees)
          if (Eq ? ZE(gq) : iE(gq, qq)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class FY extends Error {
      constructor(qq) {
        super(qq), this.name = "DecodingWarning"
      }
    }
    const sY = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class XY {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(qq, Eq), void 0 === Eq[xq] ? (sY.value = qq, Object.defineProperty(Eq, xq, sY)) : Eq[xq] !== qq && (Eq[xq] = qq), gq && (this.refCount[qq] = (this.refCount[qq] || 0) + 1), this.deletedRefs.has(qq) && this.deletedRefs.delete(qq)
      }
      removeRef(qq) {
        const Eq = this.refCount[qq];
        if (void 0 !== Eq)
          if (0 !== Eq)(this.refCount[qq] = Eq - 1) <= 0 && this.deletedRefs.add(qq);
          else try {
            const Eq = this.refs.get(qq);
            throw new FY(`trying to remove refId '${qq}' with 0 refCount (${Eq.constructor.name}: ${JSON.stringify(Eq)})`)
          } catch (Ol) {
            console.warn(Ol)
          } else try {
            throw new FY("trying to remove refId that doesn't exist: " + qq)
          } catch (Ol) {
            console.warn(Ol)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((qq => {
          if (this.refCount[qq] > 0) return;
          const Eq = this.refs.get(qq),
            gq = Eq.constructor[Symbol.metadata];
          if (null != gq)
            for (const Yq in gq) {
              const qq = Eq[gq[Yq].name];
              if ("object" === typeof qq && qq) {
                const Eq = qq[xq];
                void 0 === Eq || this.deletedRefs.has(Eq) || this.removeRef(Eq)
              }
            } else "function" === typeof Eq[dq] && Array.from(Eq.values()).forEach((qq => {
              const Eq = qq[xq];
              void 0 === Eq || this.deletedRefs.has(Eq) || this.removeRef(Eq)
            }));
          this.refs.delete(qq), delete this.refCount[qq], delete this.callbacks[qq]
        })), this.deletedRefs.clear()
      }
      addCallback(qq, Eq, gq) {
        if (void 0 === qq) {
          const qq = "number" === typeof Eq ? lq[Eq] : Eq;
          throw new Error(`Can't addCallback on '${qq}' (refId is undefined)`)
        }
        return this.callbacks[qq] || (this.callbacks[qq] = {}), this.callbacks[qq][Eq] || (this.callbacks[qq][Eq] = []), this.callbacks[qq][Eq].push(gq), () => this.removeCallback(qq, Eq, gq)
      }
      removeCallback(qq, Eq, gq) {
        const Yq = this.callbacks?.[qq]?.[Eq]?.indexOf(gq);
        void 0 !== Yq && -1 !== Yq && fY(this.callbacks[qq][Eq], Yq)
      }
    }
    class wY {
      context;
      state;
      root;
      currentRefId = 0;
      PJ;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(qq, Eq) {
        this.setState(qq), this.context = Eq || new JE(qq.constructor)
      }
      setState(qq) {
        this.state = qq, this.root = new XY, this.root.addRef(0, qq)
      }
      decode(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const lq = void 0 !== this.PJ ? [] : null,
          Oq = this.root,
          mq = qq.byteLength;
        let xq = gq.constructor[uq];
        for (this.currentRefId = 0; Eq.offset < mq;) {
          if (qq[Eq.offset] == Yq) {
            Eq.offset++, gq[Pq]?.();
            const Yq = oE.number(qq, Eq),
              lq = Oq.refs.get(Yq);
            lq ? (gq = lq, xq = gq.constructor[uq], this.currentRefId = Yq) : (console.error(`"refId" not found: ${Yq}`, {
              previousRef: gq,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(qq, Eq, mq));
            continue
          } - 1 !== xq(this, qq, Eq, gq, lq) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(qq, Eq, mq))
        }
        return gq[Pq]?.(), null !== this.resyncVisited && function(qq, Eq) {
          qq.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Jg(qq, qq.state, new Set, Eq)
        }(this, lq), null !== lq && this.PJ?.(lq), Oq.garbageCollectDeletedRefs(), lq
      }
      decodeResync(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(qq, Eq)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(qq, Eq, gq) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const lq = {
          offset: Eq.offset
        };
        for (; Eq.offset < gq && (qq[Eq.offset] !== Yq || (lq.offset = Eq.offset + 1, !this.root.refs.has(oE.number(qq, lq))));) Eq.offset++
      }
      getInstanceType(qq, Eq, gq) {
        let Yq;
        if (213 === qq[Eq.offset]) {
          Eq.offset++;
          const gq = oE.number(qq, Eq);
          Yq = this.context.get(gq)
        }
        return Yq || gq
      }
      createInstanceOfType(qq) {
        return qq.initializeForDecoder()
      }
      removeChildRefs(qq, Eq) {
        const gq = "string" !== typeof qq[dq],
          Yq = qq[xq];
        qq.forEach(((Oq, mq) => {
          Eq?.push({
            ref: qq,
            refId: Yq,
            op: lq.DELETE,
            field: mq,
            value: void 0,
            previousValue: Oq
          }), gq && this.root.removeRef(Oq[xq])
        }))
      }
    }
    const KY = hY({
        min: NY.float64(),
        max: NY.float64(),
        bits: NY.uint8(),
        mode: NY.uint8()
      }, "QuantizedDescriptor"),
      CY = hY({
        name: NY.string(),
        type: NY.string(),
        referencedType: NY.number(),
        childPrimitive: NY.string(),
        quantized: NY.ref(KY).optional()
      }, "ReflectionField"),
      IY = hY({
        id: NY.number(),
        extendsId: NY.number(),
        fields: NY.array(CY)
      }, "ReflectionType"),
      eY = hY({
        types: NY.array(IY),
        rootType: NY.number()
      }, "Reflection");

    function DY(qq) {
      const Eq = qq.root,
        gq = Eq.callbacks,
        Yq = new WeakMap;
      let Oq;

      function mq(qq, gq) {
        let cq = gq.instance?.constructor[Symbol.metadata] || qq,
          uq = gq.instance && "function" === typeof gq.instance.forEach || qq && !bY.is(qq);
        if (cq && !uq) {
          const qq = function(qq, lq, mq, Aq) {
            return Aq && void 0 !== gq.instance[lq] && !Yq.has(Oq) && mq(gq.instance[lq], void 0), Eq.addCallback(qq[xq], lq, mq)
          };
          return new Proxy({
            listen: function(Eq, lq) {
              let mq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (gq.instance) return qq(gq.instance, Eq, lq, mq);
              {
                let xq = () => {};
                return gq.onInstanceAvailable(((gq, Aq) => {
                  xq = qq(gq, Eq, lq, mq && Aq && !Yq.has(Oq))
                })), () => xq()
              }
            },
            onChange: function(qq) {
              return Eq.addCallback(gq.instance[xq], lq.REPLACE, qq)
            },
            bindTo: function(qq, Yq) {
              return Yq || (Yq = Object.keys(cq).map((qq => cq[qq].name))), Eq.addCallback(gq.instance[xq], lq.REPLACE, (() => {
                Yq.forEach((Eq => qq[Eq] = gq.instance[Eq]))
              }))
            }
          }, {
            get(qq, Eq) {
              const Yq = cq[cq[Eq]];
              if (Yq) {
                const qq = gq.instance?.[Eq],
                  lq = Yq => {
                    const lq = Aq(gq.instance).listen(Eq, ((qq, Eq) => {
                      Yq(qq, !1), lq?.()
                    }), !1);
                    void 0 !== qq?.[xq] && Yq(qq, !0)
                  };
                return mq(Yq.type, {
                  instance: void 0 !== qq?.[xq] && qq,
                  parentInstance: gq.instance,
                  onInstanceAvailable: lq
                })
              }
              return qq[Eq]
            },
            has: (qq, Eq) => void 0 !== cq[Eq],
            set(qq, Eq, gq) {
              throw new Error("not allowed")
            },
            deleteProperty(qq, Eq) {
              throw new Error("not allowed")
            }
          })
        } {
          const qq = function(qq, gq, mq) {
              return mq && qq.forEach(((qq, Eq) => gq(qq, Eq))), Eq.addCallback(qq[xq], lq.ADD, ((qq, Eq) => {
                Yq.set(gq, !0), Oq = gq, gq(qq, Eq), Yq.delete(gq), Oq = void 0
              }))
            },
            mq = function(qq, gq) {
              return Eq.addCallback(qq[xq], lq.DELETE, gq)
            },
            Aq = function(qq, gq) {
              return Eq.addCallback(qq[xq], lq.REPLACE, gq)
            };
          return new Proxy({
            Fy: function(Eq) {
              let lq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (gq.instance) return qq(gq.instance, Eq, lq && !Yq.has(Oq));
              if (gq.onInstanceAvailable) {
                let mq = () => {};
                return gq.onInstanceAvailable(((gq, xq) => {
                  mq = qq(gq, Eq, lq && xq && !Yq.has(Oq))
                })), () => mq()
              }
            },
            OJ: function(qq) {
              if (gq.instance) return mq(gq.instance, qq);
              if (gq.onInstanceAvailable) {
                let Eq = () => {};
                return gq.onInstanceAvailable((gq => {
                  Eq = mq(gq, qq)
                })), () => Eq()
              }
            },
            onChange: function(qq) {
              if (gq.instance) return Aq(gq.instance, qq);
              if (gq.onInstanceAvailable) {
                let Eq = () => {};
                return gq.onInstanceAvailable((gq => {
                  Eq = Aq(gq, qq)
                })), () => Eq()
              }
            }
          }, {
            get(qq, Eq) {
              if (!qq[Eq]) throw new Error(`Can't access '${Eq}' through callback proxy. access the instance directly.`);
              return qq[Eq]
            },
            has: (qq, Eq) => void 0 !== qq[Eq],
            set(qq, Eq, gq) {
              throw new Error("not allowed")
            },
            deleteProperty(qq, Eq) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Aq(qq) {
        return mq(void 0, {
          instance: qq
        })
      }
      return qq.PJ = function(qq) {
        const Eq = new Set;
        for (let Yq = 0, Oq = qq.length; Yq < Oq; Yq++) {
          const Oq = qq[Yq],
            mq = Oq.refId,
            Aq = Oq.ref,
            cq = gq[mq];
          if (cq) {
            if ((Oq.op & lq.DELETE) === lq.DELETE && bY.isSchema(Oq.previousValue)) {
              const qq = gq[Oq.previousValue[xq]]?.[lq.DELETE];
              for (let Eq = qq?.length - 1; Eq >= 0; Eq--) qq[Eq]()
            }
            if (bY.isSchema(Aq)) {
              if (!Eq.has(mq)) {
                const qq = cq?.[lq.REPLACE];
                for (let Eq = qq?.length - 1; Eq >= 0; Eq--) qq[Eq]()
              }
              if (cq.hasOwnProperty(Oq.field)) {
                const qq = cq[Oq.field];
                for (let Eq = qq?.length - 1; Eq >= 0; Eq--) qq[Eq](Oq.value, Oq.previousValue)
              }
            } else {
              if ((Oq.op & lq.DELETE) === lq.DELETE) {
                if (void 0 !== Oq.previousValue) {
                  const qq = cq[lq.DELETE];
                  for (let Eq = qq?.length - 1; Eq >= 0; Eq--) qq[Eq](Oq.previousValue, Oq.dynamicIndex ?? Oq.field)
                }
                if ((Oq.op & lq.ADD) === lq.ADD) {
                  const qq = cq[lq.ADD];
                  for (let Eq = qq?.length - 1; Eq >= 0; Eq--) qq[Eq](Oq.value, Oq.dynamicIndex ?? Oq.field)
                }
              } else if ((Oq.op & lq.ADD) === lq.ADD && Oq.previousValue !== Oq.value) {
                const qq = cq[lq.ADD];
                for (let Eq = qq?.length - 1; Eq >= 0; Eq--) qq[Eq](Oq.value, Oq.dynamicIndex ?? Oq.field)
              }
              if (Oq.value !== Oq.previousValue && (void 0 !== Oq.value || void 0 !== Oq.previousValue)) {
                const qq = cq[lq.REPLACE];
                for (let Eq = qq?.length - 1; Eq >= 0; Eq--) qq[Eq](Oq.value, Oq.dynamicIndex ?? Oq.field)
              }
            }
            Eq.add(mq)
          }
        }
      }, Aq
    }

    function ql(qq, Eq) {
      qq.PJ = Eq
    }
    eY.encode = function(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const gq = qq.context,
        Yq = new eY,
        lq = new UY(Yq),
        Oq = gq.schemas.get(qq.state.constructor);
      Oq > 0 && (Yq.rootType = Oq);
      const mq = new Set,
        xq = {},
        Aq = qq => {
          if (void 0 === qq.extendsId || mq.has(qq.extendsId)) {
            mq.add(qq.id), Yq.types.push(qq);
            const Eq = xq[qq.id];
            void 0 !== Eq && (delete xq[qq.id], Eq.forEach((qq => Aq(qq))))
          } else void 0 === xq[qq.extendsId] && (xq[qq.extendsId] = []), xq[qq.extendsId].push(qq)
        };
      gq.schemas.forEach(((qq, Eq) => {
        const Yq = new IY;
        Yq.id = Number(qq);
        const lq = Object.getPrototypeOf(Eq);
        lq !== bY && (Yq.extendsId = gq.schemas.get(lq));
        const Oq = Eq[Symbol.metadata];
        if (Oq !== lq[Symbol.metadata]) {
          const qq = Oq[hq] ?? -1;
          for (let Eq = 0; Eq <= qq; Eq++) {
            const qq = Oq[Eq];
            if (void 0 === qq) continue;
            const lq = qq.name;
            if (!Object.prototype.hasOwnProperty.call(Oq, lq)) continue;
            const mq = new CY;
            let xq;
            if (mq.name = lq, "string" === typeof qq.type) xq = qq.type;
            else if (SE(qq.type)) {
              const Eq = qq.type.quantized;
              xq = "quantized";
              const gq = new KY;
              gq.min = Eq.min, gq.max = Eq.max, gq.bits = Eq.bits, gq.mode = Eq.wrap ? 1 : 0, mq.quantized = gq
            } else {
              let Eq;
              bY.is(qq.type) ? (xq = "ref", Eq = qq.type) : (xq = Object.keys(qq.type)[0], "string" === typeof qq.type[xq] ? mq.childPrimitive = qq.type[xq] : Eq = qq.type[xq]), mq.referencedType = Eq ? gq.getTypeId(Eq) : -1
            }
            mq.type = xq, Yq.fields.push(mq)
          }
        }
        Aq(Yq)
      }));
      for (const cq in xq) xq[cq].forEach((qq => Yq.types.push(qq)));
      return lq.encodeAll(Eq).slice(0, Eq.offset)
    }, eY.decode = function(qq, Eq) {
      const gq = new eY;
      new wY(gq).decode(qq, Eq);
      const Yq = new JE;
      gq.types.forEach((qq => {
        const Eq = Yq.get(qq.extendsId) ?? bY,
          gq = class extends Eq {};
        JE.register(gq), Yq.add(gq, qq.id)
      }), {});
      gq.types.forEach((qq => {
        const Eq = Yq.get(qq.id),
          lq = wE.initialize(Eq),
          Oq = [];
        let mq = qq;
        do {
          Oq.push(mq), mq = gq.types.find((qq => qq.id === mq.extendsId))
        } while (mq);
        let xq = 0;
        Oq.reverse().forEach((qq => {
          ((qq, Eq, gq) => {
            Eq.fields.forEach(((Eq, lq) => {
              const Oq = gq + lq;
              if (void 0 !== Eq.quantized) {
                const gq = Eq.quantized;
                wE.addField(qq, Oq, Eq.name, {
                  quantized: zE({
                    min: gq.min,
                    max: gq.max,
                    bits: gq.bits,
                    mode: 1 === gq.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== Eq.referencedType) {
                const gq = Eq.type,
                  lq = Yq.get(Eq.referencedType) ?? Eq.childPrimitive;
                "ref" === gq ? wE.addField(qq, Oq, Eq.name, lq) : wE.addField(qq, Oq, Eq.name, {
                  [gq]: lq
                })
              } else wE.addField(qq, Oq, Eq.name, Eq.type)
            }))
          })(lq, qq, xq), xq += qq.fields.length
        }))
      }));
      const lq = new(Yq.get(gq.rootType || 0));
      return new wY(lq, Yq)
    }, eY.makeEncodable = function(qq) {
      const Eq = qq[Symbol.metadata];
      if (!Eq) return qq;
      const gq = Eq[hq];
      if (void 0 === gq) return qq;
      for (let Yq = 0; Yq <= gq; Yq++) {
        const gq = Eq[Yq];
        gq && wE.defineField(qq, Eq, Yq, gq.name, gq.type)
      }
      return Object.prototype.hasOwnProperty.call(qq, rq) && delete qq[rq], qq
    };
    class El {
      JN;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(qq) {
        this.JN = qq, this.JN.PJ = this.PJ.bind(this)
      }
      get callbacks() {
        return this.JN.root.callbacks
      }
      get state() {
        return this.JN.state
      }
      addCallback(qq, Eq, gq) {
        return this.JN.root.addCallback(qq, Eq, gq)
      }
      addCallbackOrWaitCollectionAvailable(qq, Eq, gq, Yq) {
        let Oq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mq = () => {};
        const Aq = () => mq(),
          cq = qq[Eq];
        if (cq && void 0 !== cq[xq]) return Oq = Oq && !1 === this.isTriggering, gq === lq.ADD && Oq && cq.forEach(((qq, Eq) => {
          Yq(qq, Eq)
        })), this.addCallback(cq[xq], gq, Yq);
        {
          let lq;
          return lq = this.addCallback(qq[xq], Eq, ((qq, Eq) => {
            null !== qq && void 0 !== qq && (lq(), mq = this.addCallback(qq[xq], gq, Yq))
          })), mq = lq, Aq
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(qq, Eq, gq) {
        let Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Yq = Yq && !1 === this.isTriggering;
        const lq = qq[Eq];
        return Yq && null !== lq && void 0 !== lq && gq(lq, void 0), this.addCallback(qq[xq], Eq, gq)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const qq = arguments.length <= 0 ? void 0 : arguments[0],
            Eq = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(qq[xq], lq.REPLACE, Eq)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], lq.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], lq.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Fy() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], lq.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], lq.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      OJ() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], lq.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], lq.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(qq, Eq, gq) {
        let Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Oq = qq.constructor[Symbol.metadata];
        gq || (gq = Object.keys(Oq).filter((qq => !isNaN(Number(qq)))).map((qq => Oq[qq].name)));
        const mq = () => {
          for (const Yq of gq) {
            const gq = qq[Yq];
            void 0 !== gq && (Eq[Yq] = gq)
          }
        };
        return Yq && mq(), this.addCallback(qq[xq], lq.REPLACE, mq)
      }
      PJ(qq) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let Eq = 0, gq = qq.length; Eq < gq; Eq++) {
          const gq = qq[Eq],
            Yq = gq.refId,
            Oq = gq.ref,
            mq = this.callbacks[Yq];
          if (mq) {
            if ((gq.op & lq.DELETE) === lq.DELETE && bY.isSchema(gq.previousValue)) {
              const qq = gq.previousValue[xq],
                Eq = this.callbacks[qq]?.[lq.DELETE];
              if (Eq)
                for (let gq = Eq.length - 1; gq >= 0; gq--) try {
                  Eq[gq]()
                } catch (Ol) {
                  console.error(Ol)
                }
            }
            if (bY.isSchema(Oq)) {
              if (!this.uniqueRefIds.has(Yq)) {
                const qq = mq[lq.REPLACE];
                if (qq)
                  for (let Eq = qq.length - 1; Eq >= 0; Eq--) try {
                    qq[Eq]()
                  } catch (Ol) {
                    console.error(Ol)
                  }
              }
              const qq = mq[gq.field];
              if (qq)
                for (let Eq = qq.length - 1; Eq >= 0; Eq--) try {
                  qq[Eq](gq.value, gq.previousValue)
                } catch (Ol) {
                  console.error(Ol)
                }
            } else {
              const qq = gq.dynamicIndex ?? gq.field;
              if ((gq.op & lq.DELETE) === lq.DELETE) {
                if (void 0 !== gq.previousValue) {
                  const Eq = mq[lq.DELETE];
                  if (Eq)
                    for (let Yq = Eq.length - 1; Yq >= 0; Yq--) try {
                      Eq[Yq](gq.previousValue, qq)
                    } catch (Ol) {
                      console.error(Ol)
                    }
                }
                if ((gq.op & lq.ADD) === lq.ADD) {
                  const Eq = mq[lq.ADD];
                  if (Eq)
                    for (let Yq = Eq.length - 1; Yq >= 0; Yq--) try {
                      Eq[Yq](gq.value, qq)
                    } catch (Ol) {
                      console.error(Ol)
                    }
                }
              } else if ((gq.op & lq.ADD) === lq.ADD && gq.previousValue !== gq.value) {
                const Eq = mq[lq.ADD];
                if (Eq)
                  for (let Yq = Eq.length - 1; Yq >= 0; Yq--) try {
                    Eq[Yq](gq.value, qq)
                  } catch (Ol) {
                    console.error(Ol)
                  }
              }
              if (gq.value !== gq.previousValue) {
                const Eq = mq[lq.REPLACE];
                if (Eq)
                  for (let Yq = Eq.length - 1; Yq >= 0; Yq--) try {
                    Eq[Yq](qq, gq.value)
                  } catch (Ol) {
                    console.error(Ol)
                  }
              }
            }
            this.uniqueRefIds.add(Yq)
          }
        }
        this.isTriggering = !1
      }
    }
    const gl = {
      get(qq) {
        if (qq instanceof wY) return new El(qq);
        if ("JN" in qq.jH) return new El(qq.jH.JN);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(qq) {
        if (qq instanceof wY) return DY(qq);
        if ("JN" in qq.jH) return DY(qq.jH.JN);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (qq, Eq) => ql(qq, Eq)
    };
    class Yl {
      _free = [];
      _factory;
      _maxSize;
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = qq, this._maxSize = Eq.maxSize ?? 1 / 0;
        const gq = Eq.preallocate ?? 0;
        for (let Yq = 0; Yq < gq; Yq++) this._free.push(qq())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(qq) {
        bY.reset(qq), this._free.length < this._maxSize && this._free.push(qq)
      }
      get size() {
        return this._free.length
      }
    }

    function ll(qq) {
      return new Yl((() => new qq), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    yE("map", {
      constructor: lY
    }), yE("array", {
      constructor: gY
    }), yE("set", {
      constructor: mY
    }), yE("collection", {
      constructor: OY
    })
  },
  9034: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      __addDisposableResource: () => Sq,
      __assign: () => Oq,
      __asyncDelegator: () => vq,
      __asyncGenerator: () => rq,
      __asyncValues: () => hq,
      __await: () => tq,
      __awaiter: () => aq,
      __classPrivateFieldGet: () => Mq,
      __classPrivateFieldIn: () => zq,
      __classPrivateFieldSet: () => Tq,
      __createBinding: () => dq,
      __decorate: () => xq,
      __disposeResources: () => Gq,
      __esDecorate: () => cq,
      __exportStar: () => jq,
      __extends: () => lq,
      __generator: () => Vq,
      __importDefault: () => fq,
      __importStar: () => Zq,
      __makeTemplateObject: () => nq,
      __metadata: () => Nq,
      __param: () => Aq,
      __propKey: () => Bq,
      __read: () => oq,
      __rest: () => mq,
      __rewriteRelativeImportExtension: () => Lq,
      __runInitializers: () => uq,
      __setFunctionName: () => Wq,
      __spread: () => Pq,
      __spreadArray: () => yq,
      __spreadArrays: () => Qq,
      __values: () => Hq,
      default: () => Jq
    });
    var Yq = function(qq, Eq) {
      return Yq = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(qq, Eq) {
        qq.__proto__ = Eq
      } || function(qq, Eq) {
        for (var gq in Eq) Object.prototype.hasOwnProperty.call(Eq, gq) && (qq[gq] = Eq[gq])
      }, Yq(qq, Eq)
    };

    function lq(qq, Eq) {
      if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Class extends value " + String(Eq) + " is not a constructor or null");

      function gq() {
        this.constructor = qq
      }
      Yq(qq, Eq), qq.prototype = null === Eq ? Object.create(Eq) : (gq.prototype = Eq.prototype, new gq)
    }
    var Oq = function() {
      return Oq = Object.assign || function(qq) {
        for (var Eq, gq = 1, Yq = arguments.length; gq < Yq; gq++)
          for (var lq in Eq = arguments[gq]) Object.prototype.hasOwnProperty.call(Eq, lq) && (qq[lq] = Eq[lq]);
        return qq
      }, Oq.apply(this, arguments)
    };

    function mq(qq, Eq) {
      var gq = {};
      for (var Yq in qq) Object.prototype.hasOwnProperty.call(qq, Yq) && Eq.indexOf(Yq) < 0 && (gq[Yq] = qq[Yq]);
      if (null != qq && "function" === typeof Object.getOwnPropertySymbols) {
        var lq = 0;
        for (Yq = Object.getOwnPropertySymbols(qq); lq < Yq.length; lq++) Eq.indexOf(Yq[lq]) < 0 && Object.prototype.propertyIsEnumerable.call(qq, Yq[lq]) && (gq[Yq[lq]] = qq[Yq[lq]])
      }
      return gq
    }

    function xq(qq, Eq, gq, Yq) {
      var lq, Oq = arguments.length,
        mq = Oq < 3 ? Eq : null === Yq ? Yq = Object.getOwnPropertyDescriptor(Eq, gq) : Yq;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) mq = Reflect.decorate(qq, Eq, gq, Yq);
      else
        for (var xq = qq.length - 1; xq >= 0; xq--)(lq = qq[xq]) && (mq = (Oq < 3 ? lq(mq) : Oq > 3 ? lq(Eq, gq, mq) : lq(Eq, gq)) || mq);
      return Oq > 3 && mq && Object.defineProperty(Eq, gq, mq), mq
    }

    function Aq(qq, Eq) {
      return function(gq, Yq) {
        Eq(gq, Yq, qq)
      }
    }

    function cq(qq, Eq, gq, Yq, lq, Oq) {
      function mq(qq) {
        if (void 0 !== qq && "function" !== typeof qq) throw new TypeError("Function expected");
        return qq
      }
      for (var xq, Aq = Yq.kind, cq = "getter" === Aq ? "get" : "setter" === Aq ? "set" : "value", uq = !Eq && qq ? Yq.static ? qq : qq.prototype : null, Bq = Eq || (uq ? Object.getOwnPropertyDescriptor(uq, Yq.name) : {}), Wq = !1, Nq = gq.length - 1; Nq >= 0; Nq--) {
        var aq = {};
        for (var Vq in Yq) aq[Vq] = "access" === Vq ? {} : Yq[Vq];
        for (var Vq in Yq.access) aq.access[Vq] = Yq.access[Vq];
        aq.addInitializer = function(qq) {
          if (Wq) throw new TypeError("Cannot add initializers after decoration has completed");
          Oq.push(mq(qq || null))
        };
        var dq = (0, gq[Nq])("accessor" === Aq ? {
          get: Bq.get,
          set: Bq.set
        } : Bq[cq], aq);
        if ("accessor" === Aq) {
          if (void 0 === dq) continue;
          if (null === dq || "object" !== typeof dq) throw new TypeError("Object expected");
          (xq = mq(dq.get)) && (Bq.get = xq), (xq = mq(dq.set)) && (Bq.set = xq), (xq = mq(dq.init)) && lq.unshift(xq)
        } else(xq = mq(dq)) && ("field" === Aq ? lq.unshift(xq) : Bq[cq] = xq)
      }
      uq && Object.defineProperty(uq, Yq.name, Bq), Wq = !0
    }

    function uq(qq, Eq, gq) {
      for (var Yq = arguments.length > 2, lq = 0; lq < Eq.length; lq++) gq = Yq ? Eq[lq].call(qq, gq) : Eq[lq].call(qq);
      return Yq ? gq : void 0
    }

    function Bq(qq) {
      return "symbol" === typeof qq ? qq : "".concat(qq)
    }

    function Wq(qq, Eq, gq) {
      return "symbol" === typeof Eq && (Eq = Eq.description ? "[".concat(Eq.description, "]") : ""), Object.defineProperty(qq, "name", {
        configurable: !0,
        value: gq ? "".concat(gq, " ", Eq) : Eq
      })
    }

    function Nq(qq, Eq) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(qq, Eq)
    }

    function aq(qq, Eq, gq, Yq) {
      return new(gq || (gq = Promise))((function(lq, Oq) {
        function mq(qq) {
          try {
            Aq(Yq.next(qq))
          } catch (Eq) {
            Oq(Eq)
          }
        }

        function xq(qq) {
          try {
            Aq(Yq.throw(qq))
          } catch (Eq) {
            Oq(Eq)
          }
        }

        function Aq(qq) {
          var Eq;
          qq.done ? lq(qq.value) : (Eq = qq.value, Eq instanceof gq ? Eq : new gq((function(qq) {
            qq(Eq)
          }))).then(mq, xq)
        }
        Aq((Yq = Yq.apply(qq, Eq || [])).next())
      }))
    }

    function Vq(qq, Eq) {
      var gq, Yq, lq, Oq = {
          label: 0,
          sent: function() {
            if (1 & lq[0]) throw lq[1];
            return lq[1]
          },
          trys: [],
          ops: []
        },
        mq = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return mq.next = xq(0), mq.throw = xq(1), mq.return = xq(2), "function" === typeof Symbol && (mq[Symbol.iterator] = function() {
        return this
      }), mq;

      function xq(xq) {
        return function(Aq) {
          return function(xq) {
            if (gq) throw new TypeError("Generator is already executing.");
            for (; mq && (mq = 0, xq[0] && (Oq = 0)), Oq;) try {
              if (gq = 1, Yq && (lq = 2 & xq[0] ? Yq.return : xq[0] ? Yq.throw || ((lq = Yq.return) && lq.call(Yq), 0) : Yq.next) && !(lq = lq.call(Yq, xq[1])).done) return lq;
              switch (Yq = 0, lq && (xq = [2 & xq[0], lq.value]), xq[0]) {
                case 0:
                case 1:
                  lq = xq;
                  break;
                case 4:
                  return Oq.label++, {
                    value: xq[1],
                    done: !1
                  };
                case 5:
                  Oq.label++, Yq = xq[1], xq = [0];
                  continue;
                case 7:
                  xq = Oq.ops.pop(), Oq.trys.pop();
                  continue;
                default:
                  if (!(lq = (lq = Oq.trys).length > 0 && lq[lq.length - 1]) && (6 === xq[0] || 2 === xq[0])) {
                    Oq = 0;
                    continue
                  }
                  if (3 === xq[0] && (!lq || xq[1] > lq[0] && xq[1] < lq[3])) {
                    Oq.label = xq[1];
                    break
                  }
                  if (6 === xq[0] && Oq.label < lq[1]) {
                    Oq.label = lq[1], lq = xq;
                    break
                  }
                  if (lq && Oq.label < lq[2]) {
                    Oq.label = lq[2], Oq.ops.push(xq);
                    break
                  }
                  lq[2] && Oq.ops.pop(), Oq.trys.pop();
                  continue
              }
              xq = Eq.call(qq, Oq)
            } catch (Aq) {
              xq = [6, Aq], Yq = 0
            } finally {
              gq = lq = 0
            }
            if (5 & xq[0]) throw xq[1];
            return {
              value: xq[0] ? xq[1] : void 0,
              done: !0
            }
          }([xq, Aq])
        }
      }
    }
    var dq = Object.create ? function(qq, Eq, gq, Yq) {
      void 0 === Yq && (Yq = gq);
      var lq = Object.getOwnPropertyDescriptor(Eq, gq);
      lq && !("get" in lq ? !Eq.__esModule : lq.writable || lq.configurable) || (lq = {
        enumerable: !0,
        get: function() {
          return Eq[gq]
        }
      }), Object.defineProperty(qq, Yq, lq)
    } : function(qq, Eq, gq, Yq) {
      void 0 === Yq && (Yq = gq), qq[Yq] = Eq[gq]
    };

    function jq(qq, Eq) {
      for (var gq in qq) "default" === gq || Object.prototype.hasOwnProperty.call(Eq, gq) || dq(Eq, qq, gq)
    }

    function Hq(qq) {
      var Eq = "function" === typeof Symbol && Symbol.iterator,
        gq = Eq && qq[Eq],
        Yq = 0;
      if (gq) return gq.call(qq);
      if (qq && "number" === typeof qq.length) return {
        next: function() {
          return qq && Yq >= qq.length && (qq = void 0), {
            value: qq && qq[Yq++],
            done: !qq
          }
        }
      };
      throw new TypeError(Eq ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function oq(qq, Eq) {
      var gq = "function" === typeof Symbol && qq[Symbol.iterator];
      if (!gq) return qq;
      var Yq, lq, Oq = gq.call(qq),
        mq = [];
      try {
        for (;
          (void 0 === Eq || Eq-- > 0) && !(Yq = Oq.next()).done;) mq.push(Yq.value)
      } catch (xq) {
        lq = {
          error: xq
        }
      } finally {
        try {
          Yq && !Yq.done && (gq = Oq.return) && gq.call(Oq)
        } finally {
          if (lq) throw lq.error
        }
      }
      return mq
    }

    function Pq() {
      for (var qq = [], Eq = 0; Eq < arguments.length; Eq++) qq = qq.concat(oq(arguments[Eq]));
      return qq
    }

    function Qq() {
      for (var qq = 0, Eq = 0, gq = arguments.length; Eq < gq; Eq++) qq += arguments[Eq].length;
      var Yq = Array(qq),
        lq = 0;
      for (Eq = 0; Eq < gq; Eq++)
        for (var Oq = arguments[Eq], mq = 0, xq = Oq.length; mq < xq; mq++, lq++) Yq[lq] = Oq[mq];
      return Yq
    }

    function yq(qq, Eq, gq) {
      if (gq || 2 === arguments.length)
        for (var Yq, lq = 0, Oq = Eq.length; lq < Oq; lq++) !Yq && lq in Eq || (Yq || (Yq = Array.prototype.slice.call(Eq, 0, lq)), Yq[lq] = Eq[lq]);
      return qq.concat(Yq || Array.prototype.slice.call(Eq))
    }

    function tq(qq) {
      return this instanceof tq ? (this.v = qq, this) : new tq(qq)
    }

    function rq(qq, Eq, gq) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Yq, lq = gq.apply(qq, Eq || []),
        Oq = [];
      return Yq = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), mq("next"), mq("throw"), mq("return", (function(qq) {
        return function(Eq) {
          return Promise.resolve(Eq).then(qq, cq)
        }
      })), Yq[Symbol.asyncIterator] = function() {
        return this
      }, Yq;

      function mq(qq, Eq) {
        lq[qq] && (Yq[qq] = function(Eq) {
          return new Promise((function(gq, Yq) {
            Oq.push([qq, Eq, gq, Yq]) > 1 || xq(qq, Eq)
          }))
        }, Eq && (Yq[qq] = Eq(Yq[qq])))
      }

      function xq(qq, Eq) {
        try {
          (gq = lq[qq](Eq)).value instanceof tq ? Promise.resolve(gq.value.v).then(Aq, cq) : uq(Oq[0][2], gq)
        } catch (Yq) {
          uq(Oq[0][3], Yq)
        }
        var gq
      }

      function Aq(qq) {
        xq("next", qq)
      }

      function cq(qq) {
        xq("throw", qq)
      }

      function uq(qq, Eq) {
        qq(Eq), Oq.shift(), Oq.length && xq(Oq[0][0], Oq[0][1])
      }
    }

    function vq(qq) {
      var Eq, gq;
      return Eq = {}, Yq("next"), Yq("throw", (function(qq) {
        throw qq
      })), Yq("return"), Eq[Symbol.iterator] = function() {
        return this
      }, Eq;

      function Yq(Yq, lq) {
        Eq[Yq] = qq[Yq] ? function(Eq) {
          return (gq = !gq) ? {
            value: tq(qq[Yq](Eq)),
            done: !1
          } : lq ? lq(Eq) : Eq
        } : lq
      }
    }

    function hq(qq) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Eq, gq = qq[Symbol.asyncIterator];
      return gq ? gq.call(qq) : (qq = Hq(qq), Eq = {}, Yq("next"), Yq("throw"), Yq("return"), Eq[Symbol.asyncIterator] = function() {
        return this
      }, Eq);

      function Yq(gq) {
        Eq[gq] = qq[gq] && function(Eq) {
          return new Promise((function(Yq, lq) {
            (function(qq, Eq, gq, Yq) {
              Promise.resolve(Yq).then((function(Eq) {
                qq({
                  value: Eq,
                  done: gq
                })
              }), Eq)
            })(Yq, lq, (Eq = qq[gq](Eq)).done, Eq.value)
          }))
        }
      }
    }

    function nq(qq, Eq) {
      return Object.defineProperty ? Object.defineProperty(qq, "raw", {
        value: Eq
      }) : qq.raw = Eq, qq
    }
    var bq = Object.create ? function(qq, Eq) {
        Object.defineProperty(qq, "default", {
          enumerable: !0,
          value: Eq
        })
      } : function(qq, Eq) {
        qq.default = Eq
      },
      iq = function(qq) {
        return iq = Object.getOwnPropertyNames || function(qq) {
          var Eq = [];
          for (var gq in qq) Object.prototype.hasOwnProperty.call(qq, gq) && (Eq[Eq.length] = gq);
          return Eq
        }, iq(qq)
      };

    function Zq(qq) {
      if (qq && qq.__esModule) return qq;
      var Eq = {};
      if (null != qq)
        for (var gq = iq(qq), Yq = 0; Yq < gq.length; Yq++) "default" !== gq[Yq] && dq(Eq, qq, gq[Yq]);
      return bq(Eq, qq), Eq
    }

    function fq(qq) {
      return qq && qq.__esModule ? qq : {
        default: qq
      }
    }

    function Mq(qq, Eq, gq, Yq) {
      if ("a" === gq && !Yq) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Eq ? qq !== Eq || !Yq : !Eq.has(qq)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === gq ? Yq : "a" === gq ? Yq.call(qq) : Yq ? Yq.value : Eq.get(qq)
    }

    function Tq(qq, Eq, gq, Yq, lq) {
      if ("m" === Yq) throw new TypeError("Private method is not writable");
      if ("a" === Yq && !lq) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Eq ? qq !== Eq || !lq : !Eq.has(qq)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Yq ? lq.call(qq, gq) : lq ? lq.value = gq : Eq.set(qq, gq), gq
    }

    function zq(qq, Eq) {
      if (null === Eq || "object" !== typeof Eq && "function" !== typeof Eq) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof qq ? Eq === qq : qq.has(Eq)
    }

    function Sq(qq, Eq, gq) {
      if (null !== Eq && void 0 !== Eq) {
        if ("object" !== typeof Eq && "function" !== typeof Eq) throw new TypeError("Object expected.");
        var Yq, lq;
        if (gq) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Yq = Eq[Symbol.asyncDispose]
        }
        if (void 0 === Yq) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Yq = Eq[Symbol.dispose], gq && (lq = Yq)
        }
        if ("function" !== typeof Yq) throw new TypeError("Object not disposable.");
        lq && (Yq = function() {
          try {
            lq.call(this)
          } catch (qq) {
            return Promise.reject(qq)
          }
        }), qq.stack.push({
          value: Eq,
          dispose: Yq,
          async: gq
        })
      } else gq && qq.stack.push({
        async: !0
      });
      return Eq
    }
    var pq = "function" === typeof SuppressedError ? SuppressedError : function(qq, Eq, gq) {
      var Yq = new Error(gq);
      return Yq.name = "SuppressedError", Yq.error = qq, Yq.suppressed = Eq, Yq
    };

    function Gq(qq) {
      function Eq(Eq) {
        qq.error = qq.hasError ? new pq(Eq, qq.error, "An error was suppressed during disposal.") : Eq, qq.hasError = !0
      }
      var gq, Yq = 0;
      return function lq() {
        for (; gq = qq.stack.pop();) try {
          if (!gq.async && 1 === Yq) return Yq = 0, qq.stack.push(gq), Promise.resolve().then(lq);
          if (gq.dispose) {
            var Oq = gq.dispose.call(gq.value);
            if (gq.async) return Yq |= 2, Promise.resolve(Oq).then(lq, (function(qq) {
              return Eq(qq), lq()
            }))
          } else Yq |= 1
        } catch (mq) {
          Eq(mq)
        }
        if (1 === Yq) return qq.hasError ? Promise.reject(qq.error) : Promise.resolve();
        if (qq.hasError) throw qq.error
      }()
    }

    function Lq(qq, Eq) {
      return "string" === typeof qq && /^\.\.?\//.test(qq) ? qq.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(qq, gq, Yq, lq, Oq) {
        return gq ? Eq ? ".jsx" : ".js" : !Yq || lq && Oq ? Yq + lq + "." + Oq.toLowerCase() + "js" : qq
      })) : qq
    }
    const Jq = {
      __extends: lq,
      __assign: Oq,
      __rest: mq,
      __decorate: xq,
      __param: Aq,
      __esDecorate: cq,
      __runInitializers: uq,
      __propKey: Bq,
      __setFunctionName: Wq,
      __metadata: Nq,
      __awaiter: aq,
      __generator: Vq,
      __createBinding: dq,
      __exportStar: jq,
      __values: Hq,
      __read: oq,
      __spread: Pq,
      __spreadArrays: Qq,
      __spreadArray: yq,
      __await: tq,
      __asyncGenerator: rq,
      __asyncDelegator: vq,
      __asyncValues: hq,
      __makeTemplateObject: nq,
      __importStar: Zq,
      __importDefault: fq,
      __classPrivateFieldGet: Mq,
      __classPrivateFieldSet: Tq,
      __classPrivateFieldIn: zq,
      __addDisposableResource: Sq,
      __disposeResources: Gq,
      __rewriteRelativeImportExtension: Lq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);