export const id = 185;
export const ids = [185];
export const modules = {
  9346: (SS, HS) => {
    HS.discordURLBuilder = function(SS) {
      var HS;
      const gS = (null === (HS = null === window || void 0 === window ? void 0 : window.location) || void 0 === HS ? void 0 : HS.hostname) || "localhost",
        tS = SS.hostname.split("."),
        bS = !SS.hostname.includes("trycloudflare.com") && !SS.hostname.includes("discordsays.com") && tS.length > 2 ? `/${tS[0]}` : "";
      return SS.pathname.startsWith("/.proxy") ? `${SS.protocol}//${gS}${bS}${SS.pathname}${SS.search}` : `${SS.protocol}//${gS}/.proxy/colyseus${bS}${SS.pathname}${SS.search}`
    }
  },
  9328: (SS, HS, gS) => {
    var tS, bS, XS, xS, NS = gS(9249),
      qS = gS(9337),
      uS = gS(9300);
    tS = new WeakMap, bS = new WeakMap, XS = new WeakMap, xS = new WeakMap, HS.Auth = class {
      constructor(SS) {
        this.http = SS, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, tS.set(this, !1), bS.set(this, void 0), XS.set(this, void 0), xS.set(this, uS.createNanoEvents()), qS.getItem(this.settings.key, (SS => this.token = SS))
      }
      set token(SS) {
        this.http.authToken = SS
      }
      get token() {
        return this.http.authToken
      }
      onChange(SS) {
        const HS = NS.__classPrivateFieldGet(this, xS, "f").on("change", SS);
        return NS.__classPrivateFieldGet(this, tS, "f") || NS.__classPrivateFieldSet(this, bS, new Promise(((SS, HS) => {
          this.getUserData().then((SS => {
            this.emitChange(Object.assign(Object.assign({}, SS), {
              token: this.token
            }))
          })).catch((SS => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            SS()
          }))
        })), "f"), NS.__classPrivateFieldSet(this, tS, !0, "f"), HS
      }
      getUserData() {
        return NS.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(SS, HS, gS) {
        return NS.__awaiter(this, void 0, void 0, (function*() {
          const tS = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: SS,
              password: HS,
              options: gS
            }
          })).data;
          return this.emitChange(tS), tS
        }))
      }
      signInWithEmailAndPassword(SS, HS) {
        return NS.__awaiter(this, void 0, void 0, (function*() {
          const gS = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: SS,
              password: HS
            }
          })).data;
          return this.emitChange(gS), gS
        }))
      }
      signInAnonymously(SS) {
        return NS.__awaiter(this, void 0, void 0, (function*() {
          const HS = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: SS
            }
          })).data;
          return this.emitChange(HS), HS
        }))
      }
      sendPasswordResetEmail(SS) {
        return NS.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: SS
            }
          })).data
        }))
      }
      signInWithProvider(SS) {
        return NS.__awaiter(this, arguments, void 0, (function*(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((gS, tS) => {
            const bS = HS.width || 480,
              xS = HS.height || 768,
              qS = this.token ? `?token=${this.token}` : "",
              uS = `Login with ${SS[0].toUpperCase()+SS.substring(1)}`,
              IS = this.http.client.getHttpEndpoint(`${HS.prefix||`${this.settings.path}/provider`}/${SS}${qS}`),
              fS = screen.width / 2 - bS / 2,
              kS = screen.height / 2 - xS / 2;
            NS.__classPrivateFieldSet(this, XS, window.open(IS, uS, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + bS + ", height=" + xS + ", top=" + kS + ", left=" + fS), "f");
            const aS = SS => {
                void 0 === SS.data.user && void 0 === SS.data.token || (clearInterval(KS), NS.__classPrivateFieldGet(this, XS, "f").close(), NS.__classPrivateFieldSet(this, XS, void 0, "f"), window.removeEventListener("message", aS), void 0 !== SS.data.error ? tS(SS.data.error) : (gS(SS.data), this.emitChange(SS.data)))
              },
              KS = setInterval((() => {
                NS.__classPrivateFieldGet(this, XS, "f") && !NS.__classPrivateFieldGet(this, XS, "f").closed || (NS.__classPrivateFieldSet(this, XS, void 0, "f"), tS("Hg"), window.removeEventListener("message", aS))
              }), 200);
            window.addEventListener("message", aS)
          }))
        }))
      }
      signOut() {
        return NS.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(SS) {
        void 0 !== SS.token && (this.token = SS.token, null === SS.token ? qS.removeItem(this.settings.key) : qS.setItem(this.settings.key, SS.token)), NS.__classPrivateFieldGet(this, xS, "f").emit("change", SS)
      }
    }
  },
  9244: (SS, HS, gS) => {
    var tS, bS = gS(9249),
      XS = gS(9252),
      xS = gS(9255),
      NS = gS(9323),
      qS = gS(9328),
      uS = gS(9346);
    class IS extends Error {
      constructor(SS, HS) {
        super(SS), this.code = HS, this.name = "MatchMakeError", Object.setPrototypeOf(this, IS.prototype)
      }
    }
    const fS = "undefined" !== typeof window && "undefined" !== typeof(null === (tS = null === window || void 0 === window ? void 0 : window.location) || void 0 === tS ? void 0 : tS.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class kS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fS,
          HS = arguments.length > 1 ? arguments[1] : void 0;
        var gS, tS;
        if ("string" === typeof SS) {
          const HS = SS.startsWith("/") ? new URL(SS, fS) : new URL(SS),
            gS = "https:" === HS.protocol || "wss:" === HS.protocol,
            tS = Number(HS.port || (gS ? 443 : 80));
          this.settings = {
            hostname: HS.hostname,
            pathname: HS.pathname,
            port: tS,
            secure: gS,
            searchParams: HS.searchParams.toString() || void 0
          }
        } else void 0 === SS.port && (SS.port = SS.secure ? 443 : 80), void 0 === SS.pathname && (SS.pathname = ""), this.settings = SS;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new NS.HTTP(this, (null === HS || void 0 === HS ? void 0 : HS.headers) || {}), this.auth = new qS.Auth(this.http), this.urlBuilder = null === HS || void 0 === HS ? void 0 : HS.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (tS = null === (gS = null === window || void 0 === window ? void 0 : window.location) || void 0 === gS ? void 0 : gS.hostname) || void 0 === tS ? void 0 : tS.includes("discordsays.com")) && (this.urlBuilder = uS.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(SS) {
        return bS.__awaiter(this, arguments, void 0, (function*(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gS = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", SS, HS, gS)
        }))
      }
      create(SS) {
        return bS.__awaiter(this, arguments, void 0, (function*(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gS = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", SS, HS, gS)
        }))
      }
      join(SS) {
        return bS.__awaiter(this, arguments, void 0, (function*(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gS = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", SS, HS, gS)
        }))
      }
      joinById(SS) {
        return bS.__awaiter(this, arguments, void 0, (function*(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gS = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", SS, HS, gS)
        }))
      }
      reconnect(SS, HS) {
        return bS.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof SS && "string" === typeof HS) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [gS, tS] = SS.split(":");
          if (!gS || !tS) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", gS, {
            reconnectionToken: tS
          }, HS)
        }))
      }
      consumeSeatReservation(SS, HS, gS) {
        return bS.__awaiter(this, void 0, void 0, (function*() {
          const tS = this.createRoom(SS.room.name, HS);
          tS.roomId = SS.room.roomId, tS.sessionId = SS.sessionId;
          const xS = {
            sessionId: tS.sessionId
          };
          SS.reconnectionToken && (xS.reconnectionToken = SS.reconnectionToken);
          const NS = gS || tS;
          return tS.connect(this.buildEndpoint(SS.room, xS, SS.protocol), SS.devMode && (() => bS.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${tS.roomId}'...`);
            let gS = 0;
            const XS = () => bS.__awaiter(this, void 0, void 0, (function*() {
              gS++;
              try {
                yield this.consumeSeatReservation(SS, HS, NS), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${tS.roomId}'`)
              } catch (bS) {
                gS < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${gS} out of 8)`), setTimeout(XS, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(XS, 2e3)
          }))), NS, SS, this.http.headers), new Promise(((SS, HS) => {
            const gS = (SS, gS) => HS(new XS.ServerError(SS, gS));
            NS.onError.once(gS), NS.onJoin.once((() => {
              NS.onError.remove(gS), setTimeout((() => {
                try {
                  const SS = [96, 98, 63, 61, 198, 165, 255, 148, 109, 255, 166, 172, 119, 97, 118, 161, 237, 220, 8, 144];
                  SS && NS.Av(128, new Uint8Array(SS))
                } catch {}
              }), 3e3), SS(NS)
            }))
          }))
        }))
      }
      createMatchMakeRequest(SS, HS) {
        return bS.__awaiter(this, arguments, void 0, (function*(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            tS = arguments.length > 3 ? arguments[3] : void 0,
            bS = arguments.length > 4 ? arguments[4] : void 0;
          const XS = (yield this.http.post(`matchmake/${SS}/${HS}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(gS)
          })).data;
          if (XS.error) throw new IS(XS.error, XS.code);
          return "reconnect" === SS && (XS.reconnectionToken = gS.reconnectionToken), yield this.consumeSeatReservation(XS, tS, bS)
        }))
      }
      createRoom(SS, HS) {
        return new xS.Mf(SS, HS)
      }
      buildEndpoint(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          tS = this.settings.searchParams || "";
        this.http.authToken && (HS._authToken = this.http.authToken);
        for (const xS in HS) HS.hasOwnProperty(xS) && (tS += (tS ? "&" : "") + `${xS}=${HS[xS]}`);
        "h3" === gS && (gS = "http");
        let bS = this.settings.secure ? `${gS}s://` : `${gS}://`;
        SS.publicAddress ? bS += `${SS.publicAddress}` : bS += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const XS = `${bS}/${SS.processId}/${SS.roomId}?${tS}`;
        return this.urlBuilder ? this.urlBuilder(new URL(XS)) : XS
      }
      getHttpEndpoint() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const HS = SS.startsWith("/") ? SS : `/${SS}`;
        let gS = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${HS}`;
        return this.settings.searchParams && (gS += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(gS)) : gS
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    kS.VERSION = "0.16.22", HS.Client = kS, HS.MatchMakeError = IS
  },
  9261: (SS, HS, gS) => {
    var tS = gS(9268),
      bS = gS(9280);
    HS.Connection = class {
      constructor(SS) {
        if (this.events = {}, "h3" === SS) this.transport = new tS.H3TransportTransport(this.events);
        else this.transport = new bS.WebSocketTransport(this.events)
      }
      connect(SS, HS) {
        this.transport.connect.call(this.transport, SS, HS)
      }
      send(SS) {
        this.transport.send(SS)
      }
      sendUnreliable(SS) {
        this.transport.sendUnreliable(SS)
      }
      close(SS, HS) {
        this.transport.close(SS, HS)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9323: (SS, HS, gS) => {
    var tS = gS(9252);

    function bS(SS) {
      var HS = Object.create(null);
      return SS && Object.keys(SS).forEach((function(gS) {
        if ("default" !== gS) {
          var tS = Object.getOwnPropertyDescriptor(SS, gS);
          Object.defineProperty(HS, gS, tS.get ? tS : {
            enumerable: !0,
            get: function() {
              return SS[gS]
            }
          })
        }
      })), HS.default = SS, Object.freeze(HS)
    }
    var XS = bS(gS(9326));
    HS.HTTP = class {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = SS, this.headers = HS
      }
      get(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", SS, HS)
      }
      post(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", SS, HS)
      }
      del(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", SS, HS)
      }
      put(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", SS, HS)
      }
      request(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return XS[SS](this.client.getHttpEndpoint(HS), this.getOptions(gS)).catch((SS => {
          var HS;
          if (SS.aborted) throw new tS.AbortError("Request aborted");
          const gS = SS.statusCode,
            bS = (null === (HS = SS.data) || void 0 === HS ? void 0 : HS.error) || SS.statusMessage || SS.message;
          if (!gS && !bS) throw SS;
          throw new tS.ServerError(gS, bS)
        }))
      }
      getOptions(SS) {
        return SS.headers = Object.assign({}, this.headers, SS.headers), this.authToken && (SS.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (SS.withCredentials = !0), SS
      }
    }
  },
  9290: (SS, HS) => {
    var gS, tS;
    HS.Protocol = void 0, (gS = HS.Protocol || (HS.Protocol = {}))[gS.HANDSHAKE = 9] = "HANDSHAKE", gS[gS.JOIN_ROOM = 10] = "JOIN_ROOM", gS[gS.ERROR = 11] = "ERROR", gS[gS.LEAVE_ROOM = 12] = "LEAVE_ROOM", gS[gS.ROOM_DATA = 13] = "ROOM_DATA", gS[gS.ROOM_STATE = 14] = "ROOM_STATE", gS[gS.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", gS[gS.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", gS[gS.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", HS.ErrorCode = void 0, (tS = HS.ErrorCode || (HS.ErrorCode = {}))[tS.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", tS[tS.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", tS[tS.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", tS[tS.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", tS[tS.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", tS[tS.AUTH_FAILED = 4215] = "AUTH_FAILED", tS[tS.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9255: (SS, HS, gS) => {
    var tS = gS(9261),
      bS = gS(9290),
      XS = gS(9294),
      xS = gS(9300),
      NS = gS(9302),
      qS = gS(9273),
      uS = gS(9311),
      IS = gS(9252),
      fS = gS(9318);
    class kS {
      constructor(SS, HS) {
        this.onStateChange = NS.createSignal(), this.onError = NS.createSignal(), this.rC = NS.createSignal(), this.onJoin = NS.createSignal(), this.hasJoined = !1, this.onMessageHandlers = xS.createNanoEvents(), this.roomId = null, this.name = SS, this.packr = new fS.Packr, this.packr.encode(void 0), HS && (this.nC = new(XS.getSerializer("schema")), this.rootSchema = HS, this.nC.state = new HS), this.onError(((SS, HS) => {
          var gS;
          return null === (gS = console.warn) || void 0 === gS ? void 0 : gS.call(console, `colyseus.js - onError => (${SS}) ${HS}`)
        })), this.rC((() => this.fC()))
      }
      connect(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          bS = arguments.length > 3 ? arguments[3] : void 0,
          XS = arguments.length > 4 ? arguments[4] : void 0;
        const xS = new tS.Connection(bS.protocol);
        if (gS.connection = xS, xS.events.onmessage = kS.prototype.onMessageCallback.bind(gS), xS.events.onclose = function(SS) {
            var tS;
            if (!gS.hasJoined) return null === (tS = console.warn) || void 0 === tS || tS.call(console, `Room connection was closed unexpectedly (${SS.code}): ${SS.reason}`), void gS.onError.invoke(SS.code, SS.reason);
            SS.code === IS.CloseCode.DEVMODE_RESTART && HS ? HS() : (gS.rC.invoke(SS.code, SS.reason), gS.destroy())
          }, xS.events.onerror = function(SS) {
            var HS;
            null === (HS = console.warn) || void 0 === HS || HS.call(console, `Room, onError (${SS.code}): ${SS.reason}`), gS.onError.invoke(SS.code, SS.reason)
          }, "h3" === bS.protocol) {
          const HS = new URL(SS);
          xS.connect(HS.origin, bS)
        } else xS.connect(SS, XS)
      }
      leave() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((HS => {
          this.rC((SS => HS(SS))), this.connection ? SS ? (this.packr.buffer[0] = bS.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.rC.invoke(IS.CloseCode.CONSENTED)
        }))
      }
      eC(SS, HS) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(SS), HS)
      }
      send(SS, HS) {
        const gS = {
          offset: 1
        };
        this.packr.buffer[0] = bS.Protocol.ROOM_DATA, "string" === typeof SS ? qS.encode.string(this.packr.buffer, SS, gS) : qS.encode.number(this.packr.buffer, SS, gS), this.packr.position = 0;
        const tS = void 0 !== HS ? this.packr.pack(HS, 2048 + gS.offset) : this.packr.buffer.subarray(0, gS.offset);
        this.connection.send(tS)
      }
      sendUnreliable(SS, HS) {
        const gS = {
          offset: 1
        };
        this.packr.buffer[0] = bS.Protocol.ROOM_DATA, "string" === typeof SS ? qS.encode.string(this.packr.buffer, SS, gS) : qS.encode.number(this.packr.buffer, SS, gS), this.packr.position = 0;
        const tS = void 0 !== HS ? this.packr.pack(HS, 2048 + gS.offset) : this.packr.buffer.subarray(0, gS.offset);
        this.connection.sendUnreliable(tS)
      }
      Av(SS, HS) {
        const gS = {
          offset: 1
        };
        if (this.packr.buffer[0] = bS.Protocol.ROOM_DATA_BYTES, "string" === typeof SS ? qS.encode.string(this.packr.buffer, SS, gS) : qS.encode.number(this.packr.buffer, SS, gS), HS.byteLength + gS.offset > this.packr.buffer.byteLength) {
          const SS = new Uint8Array(gS.offset + HS.byteLength);
          SS.set(this.packr.buffer), this.packr.useBuffer(SS)
        }
        this.packr.buffer.set(HS, gS.offset), this.connection.send(this.packr.buffer.subarray(0, gS.offset + HS.byteLength))
      }
      get state() {
        return this.nC.getState()
      }
      fC() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.rC.clear(), this.onMessageHandlers.events = {}, this.nC instanceof uS.uL && (this.nC.NK.root.callbacks = {})
      }
      onMessageCallback(SS) {
        const HS = new Uint8Array(SS.data),
          gS = {
            offset: 1
          },
          tS = HS[0];
        if (tS === bS.Protocol.JOIN_ROOM) {
          const SS = qS.decode.utf8Read(HS, gS, HS[gS.offset++]);
          if (this.serializerId = qS.decode.utf8Read(HS, gS, HS[gS.offset++]), !this.nC) {
            const SS = XS.getSerializer(this.serializerId);
            this.nC = new SS
          }
          HS.byteLength > gS.offset && this.nC.handshake && this.nC.handshake(HS, gS), this.reconnectionToken = `${this.roomId}:${SS}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = bS.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (tS === bS.Protocol.ERROR) {
          const SS = qS.decode.number(HS, gS),
            tS = qS.decode.string(HS, gS);
          this.onError.invoke(SS, tS)
        } else if (tS === bS.Protocol.LEAVE_ROOM) this.leave();
        else if (tS === bS.Protocol.ROOM_STATE) this.nC.setState(HS, gS), this.onStateChange.invoke(this.nC.getState());
        else if (tS === bS.Protocol.ROOM_STATE_PATCH) this.nC.patch(HS, gS), this.onStateChange.invoke(this.nC.getState());
        else if (tS === bS.Protocol.ROOM_DATA) {
          const SS = qS.decode.stringCheck(HS, gS) ? qS.decode.string(HS, gS) : qS.decode.number(HS, gS),
            tS = HS.byteLength > gS.offset ? fS.unpack(HS, {
              start: gS.offset
            }) : void 0;
          this.dispatchMessage(SS, tS)
        } else if (tS === bS.Protocol.ROOM_DATA_BYTES) {
          const SS = qS.decode.stringCheck(HS, gS) ? qS.decode.string(HS, gS) : qS.decode.number(HS, gS);
          this.dispatchMessage(SS, HS.subarray(gS.offset))
        }
      }
      dispatchMessage(SS, HS) {
        var gS;
        const tS = this.getMessageHandlerKey(SS);
        this.onMessageHandlers.events[tS] ? this.onMessageHandlers.emit(tS, HS) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", SS, HS) : null === (gS = console.warn) || void 0 === gS || gS.call(console, `colyseus.js: onMessage() not registered for type '${SS}'.`)
      }
      destroy() {
        this.nC && this.nC.teardown()
      }
      getMessageHandlerKey(SS) {
        switch (typeof SS) {
          case "string":
            return SS;
          case "number":
            return `i${SS}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    HS.Mf = kS
  },
  9337: (SS, HS, gS) => {
    var tS = gS(9249);
    let bS;

    function XS() {
      if (!bS) try {
        bS = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (SS) {}
      return bS || "undefined" === typeof globalThis.indexedDB || (bS = new xS), bS || (bS = {
        cache: {},
        setItem: function(SS, HS) {
          this.cache[SS] = HS
        },
        getItem: function(SS) {
          this.cache[SS]
        },
        removeItem: function(SS) {
          delete this.cache[SS]
        }
      }), bS
    }
    class xS {
      constructor() {
        this.dbPromise = new Promise((SS => {
          const HS = indexedDB.open("_colyseus_storage", 1);
          HS.onupgradeneeded = () => HS.result.createObjectStore("store"), HS.onsuccess = () => SS(HS.result)
        }))
      }
      tx(SS, HS) {
        return tS.__awaiter(this, void 0, void 0, (function*() {
          const gS = (yield this.dbPromise).transaction("store", SS).objectStore("store");
          return HS(gS)
        }))
      }
      setItem(SS, HS) {
        return this.tx("readwrite", (gS => gS.put(HS, SS))).then()
      }
      getItem(SS) {
        return tS.__awaiter(this, void 0, void 0, (function*() {
          const HS = yield this.tx("readonly", (HS => HS.get(SS)));
          return new Promise((SS => {
            HS.onsuccess = () => SS(HS.result)
          }))
        }))
      }
      removeItem(SS) {
        return this.tx("readwrite", (HS => HS.delete(SS))).then()
      }
    }
    HS.getItem = function(SS, HS) {
      const gS = XS().getItem(SS);
      "undefined" !== typeof Promise && gS instanceof Promise ? gS.then((SS => HS(SS))) : HS(gS)
    }, HS.removeItem = function(SS) {
      XS().removeItem(SS)
    }, HS.setItem = function(SS, HS) {
      XS().setItem(SS, HS)
    }
  },
  9300: (SS, HS) => {
    HS.createNanoEvents = () => ({
      emit(SS) {
        let HS = this.events[SS] || [];
        for (var gS = arguments.length, tS = new Array(gS > 1 ? gS - 1 : 0), bS = 1; bS < gS; bS++) tS[bS - 1] = arguments[bS];
        for (let XS = 0, xS = HS.length; XS < xS; XS++) HS[XS](...tS)
      },
      events: {},
      on(SS, HS) {
        var gS;
        return (null === (gS = this.events[SS]) || void 0 === gS ? void 0 : gS.push(HS)) || (this.events[SS] = [HS]), () => {
          var gS;
          this.events[SS] = null === (gS = this.events[SS]) || void 0 === gS ? void 0 : gS.filter((SS => HS !== SS))
        }
      }
    })
  },
  9302: (SS, HS) => {
    class gS {
      constructor() {
        this.handlers = []
      }
      register(SS) {
        return this.handlers.push(SS), this
      }
      invoke() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        this.handlers.forEach((SS => SS.apply(this, HS)))
      }
      invokeAsync() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        return Promise.all(this.handlers.map((SS => SS.apply(this, HS))))
      }
      remove(SS) {
        const HS = this.handlers.indexOf(SS);
        this.handlers[HS] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    HS.EventEmitter = gS, HS.createSignal = function() {
      const SS = new gS;

      function HS(HS) {
        return SS.register(HS, null === this)
      }
      return HS.once = HS => {
        const gS = function() {
          for (var tS = arguments.length, bS = new Array(tS), XS = 0; XS < tS; XS++) bS[XS] = arguments[XS];
          HS.apply(this, bS), SS.remove(gS)
        };
        SS.register(gS)
      }, HS.remove = HS => SS.remove(HS), HS.invoke = function() {
        return SS.invoke(...arguments)
      }, HS.invokeAsync = function() {
        return SS.invokeAsync(...arguments)
      }, HS.clear = () => SS.clear(), HS
    }
  },
  9252: (SS, HS) => {
    var gS;
    HS.CloseCode = void 0, (gS = HS.CloseCode || (HS.CloseCode = {}))[gS.CONSENTED = 4e3] = "CONSENTED", gS[gS.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class tS extends Error {
      constructor(SS, HS) {
        super(HS), this.name = "ServerError", this.code = SS
      }
    }
    class bS extends Error {
      constructor(SS) {
        super(SS), this.name = "AbortError"
      }
    }
    HS.AbortError = bS, HS.ServerError = tS
  },
  9233: (SS, HS, gS) => {
    gS(9242);
    var tS = gS(9244),
      bS = gS(9290),
      XS = gS(9255),
      xS = gS(9328),
      NS = gS(9252),
      qS = gS(9311),
      uS = gS(9353),
      IS = gS(9294);
    IS.registerSerializer("schema", qS.uL), IS.registerSerializer("none", uS.NoneSerializer), HS.Client = tS.Client, HS.MatchMakeError = tS.MatchMakeError, Object.defineProperty(HS, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return bS.ErrorCode
      }
    }), Object.defineProperty(HS, "Protocol", {
      enumerable: !0,
      get: function() {
        return bS.Protocol
      }
    }), HS.Mf = XS.Mf, HS.Auth = xS.Auth, HS.ServerError = NS.ServerError, HS.uL = qS.uL, HS.getStateCallbacks = qS.getStateCallbacks, HS.registerSerializer = IS.registerSerializer
  },
  9242: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = SS => null !== SS && "object" === typeof SS && SS.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9353: (SS, HS) => {
    HS.NoneSerializer = class {
      setState(SS) {}
      getState() {
        return null
      }
      patch(SS) {}
      teardown() {}
      handshake(SS) {}
    }
  },
  9311: (SS, HS, gS) => {
    var tS = gS(9273);
    HS.uL = class {
      setState(SS, HS) {
        this.NK.decode(SS, HS)
      }
      getState() {
        return this.state
      }
      patch(SS, HS) {
        return this.NK.decode(SS, HS)
      }
      teardown() {
        this.NK.root.clearRefs()
      }
      handshake(SS, HS) {
        this.state ? (tS.Reflection.decode(SS, HS), this.NK = new tS.Decoder(this.state)) : (this.NK = tS.Reflection.decode(SS, HS), this.state = this.NK.state)
      }
    }, HS.getStateCallbacks = function(SS) {
      try {
        return tS.getDecoderStateCallbacks(SS.nC.NK)
      } catch (HS) {
        return
      }
    }
  },
  9294: (SS, HS) => {
    const gS = {};
    HS.getSerializer = function(SS) {
      const HS = gS[SS];
      if (!HS) throw new Error("missing serializer: " + SS);
      return HS
    }, HS.registerSerializer = function(SS, HS) {
      gS[SS] = HS
    }
  },
  9268: (SS, HS, gS) => {
    var tS = gS(9249),
      bS = gS(9273);
    HS.H3TransportTransport = class {
      constructor(SS) {
        this.events = SS, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gS = HS.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(HS.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(SS, gS), this.wt.ready.then((SS => {
          console.log("WebTransport ready!", SS), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((SS => {
            this.reader = SS.value.readable.getReader(), this.writer = SS.value.writable.getWriter(), this.sendSeatReservation(HS.room.roomId, HS.sessionId, HS.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((SS => {
            console.error("failed to read incoming stream", SS), console.error("TODO: close the connection")
          }))
        })).catch((SS => {
          console.log("WebTransport not ready!", SS), this._close()
        })), this.wt.closed.then((SS => {
          console.log("WebTransport closed w/ success", SS), this.events.onclose({
            code: SS.closeCode,
            reason: SS.reason
          })
        })).catch((SS => {
          console.log("WebTransport closed w/ error", SS), this.events.onerror(SS), this.events.onclose({
            code: SS.closeCode,
            reason: SS.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(SS) {
        const HS = bS.encode.number(this.lengthPrefixBuffer, SS.length, {
            offset: 0
          }),
          gS = new Uint8Array(HS + SS.length);
        gS.set(this.lengthPrefixBuffer.subarray(0, HS), 0), gS.set(SS, HS), this.writer.write(gS)
      }
      sendUnreliable(SS) {
        const HS = bS.encode.number(this.lengthPrefixBuffer, SS.length, {
            offset: 0
          }),
          gS = new Uint8Array(HS + SS.length);
        gS.set(this.lengthPrefixBuffer.subarray(0, HS), 0), gS.set(SS, HS), this.unreliableWriter.write(gS)
      }
      close(SS, HS) {
        try {
          this.wt.close({
            closeCode: SS,
            reason: HS
          })
        } catch (gS) {
          console.error(gS)
        }
      }
      readIncomingData() {
        return tS.__awaiter(this, void 0, void 0, (function*() {
          let SS;
          for (; this.isOpen;) {
            try {
              SS = yield this.reader.read();
              const HS = SS.value,
                gS = {
                  offset: 0
                };
              do {
                const SS = bS.decode.number(HS, gS);
                this.events.onmessage({
                  data: HS.subarray(gS.offset, gS.offset + SS)
                }), gS.offset += SS
              } while (gS.offset < HS.length)
            } catch (HS) {
              -1 === HS.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", HS);
              break
            }
            if (SS.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return tS.__awaiter(this, void 0, void 0, (function*() {
          let SS;
          for (; this.isOpen;) {
            try {
              SS = yield this.unreliableReader.read();
              const HS = SS.value,
                gS = {
                  offset: 0
                };
              do {
                const SS = bS.decode.number(HS, gS);
                this.events.onmessage({
                  data: HS.subarray(gS.offset, gS.offset + SS)
                }), gS.offset += SS
              } while (gS.offset < HS.length)
            } catch (HS) {
              -1 === HS.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", HS);
              break
            }
            if (SS.done) break
          }
        }))
      }
      sendSeatReservation(SS, HS, gS) {
        const tS = {
            offset: 0
          },
          XS = [];
        bS.encode.string(XS, SS, tS), bS.encode.string(XS, HS, tS), gS && bS.encode.string(XS, gS, tS), this.writer.write(new Uint8Array(XS).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9280: (SS, HS, gS) => {
    var tS = gS(9285);
    const bS = globalThis.WebSocket || tS;
    HS.WebSocketTransport = class {
      constructor(SS) {
        this.events = SS
      }
      send(SS) {
        this.ws.send(SS)
      }
      sendUnreliable(SS) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(SS, HS) {
        try {
          this.ws = new bS(SS, {
            headers: HS,
            protocols: this.protocols
          })
        } catch (gS) {
          this.ws = new bS(SS, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(SS, HS) {
        this.ws.close(SS, HS)
      }
      get isOpen() {
        return this.ws.readyState === bS.OPEN
      }
    }
  },
  9285: SS => {
    SS.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9326: (SS, HS, gS) => {
    function tS(SS, HS) {
      HS.headers = SS.headers || {}, HS.statusMessage = SS.statusText, HS.statusCode = SS.status, HS.data = SS.response
    }

    function bS(SS, HS, gS) {
      return new Promise((function(bS, XS) {
        gS = gS || {};
        var xS, NS, qS, uS = new XMLHttpRequest,
          IS = gS.body,
          fS = gS.headers || {};
        for (xS in gS.timeout && (uS.timeout = gS.timeout), uS.ontimeout = uS.onerror = function(SS) {
            SS.timeout = "timeout" == SS.type, XS(SS)
          }, uS.onabort = function(SS) {
            SS.aborted = !0, XS(SS)
          }, uS.open(SS, HS.href || HS), uS.onload = function() {
            for (qS = uS.getAllResponseHeaders().trim().split(/[\r\n]+/), tS(uS, uS); NS = qS.shift();) NS = NS.split(": "), uS.headers[NS.shift().toLowerCase()] = NS.join(": ");
            if ((NS = uS.headers["content-type"]) && ~NS.indexOf("application/json")) try {
              uS.data = JSON.parse(uS.data, gS.reviver)
            } catch (SS) {
              return tS(uS, SS), XS(SS)
            }(uS.status >= 400 ? XS : bS)(uS)
          }, typeof FormData < "u" && IS instanceof FormData || IS && "object" == typeof IS && (fS["content-type"] = "application/json", IS = JSON.stringify(IS)), uS.withCredentials = !!gS.withCredentials, fS) uS.setRequestHeader(xS, fS[xS]);
        uS.send(IS), gS.signal && gS.signal.addEventListener("abort", (function() {
          uS.abort()
        }))
      }))
    }
    gS.r(HS), gS.d(HS, {
      del: () => qS,
      get: () => XS,
      patch: () => NS,
      post: () => xS,
      put: () => uS,
      send: () => bS
    });
    var XS = bS.bind(bS, "GET"),
      xS = bS.bind(bS, "POST"),
      NS = bS.bind(bS, "PATCH"),
      qS = bS.bind(bS, "DELETE"),
      uS = bS.bind(bS, "PUT")
  },
  9318: (SS, HS, gS) => {
    var tS, bS, XS;
    gS.r(HS), gS.d(HS, {
      ALWAYS: () => RH,
      C1: () => DS,
      DECIMAL_FIT: () => oH,
      DECIMAL_ROUND: () => TH,
      Decoder: () => qH,
      Encoder: () => MH,
      FLOAT32_OPTIONS: () => aH,
      NEVER: () => FH,
      Packr: () => AH,
      RESERVE_START_SPACE: () => eH,
      RESET_BUFFER_MODE: () => mH,
      REUSE_BUFFER_MODE: () => lH,
      Unpackr: () => dS,
      addExtension: () => zH,
      clearSource: () => xH,
      decode: () => kH,
      decodeIter: () => rH,
      encode: () => BH,
      encodeIter: () => Sg,
      isNativeAccelerationEnabled: () => US,
      mapsAsObjects: () => gg,
      pack: () => sH,
      roundFloat32: () => PH,
      unpack: () => IH,
      unpackMultiple: () => fH,
      useRecords: () => Hg
    });
    try {
      tS = new TextDecoder
    } catch (tg) {}
    var xS = 0;
    const NS = [];
    var qS, uS, IS, fS, kS, aS = NS,
      KS = 0,
      jS = {},
      GS = 0,
      CS = 0,
      nS = [],
      PS = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class QS {}
    const DS = new QS;
    DS.name = "MessagePack 0xC1";
    var wS, hS, ZS, JS = !1,
      OS = 2;
    try {
      new Function("")
    } catch (tg) {
      OS = 1 / 0
    }
    class dS {
      constructor(SS) {
        SS && (!1 === SS.useRecords && void 0 === SS.mapsAsObjects && (SS.mapsAsObjects = !0), SS.sequential && !1 !== SS.trusted && (SS.trusted = !0, SS.structures || 0 == SS.useRecords || (SS.structures = [], SS.maxSharedStructures || (SS.maxSharedStructures = 0))), SS.structures ? SS.structures.sharedLength = SS.structures.length : SS.getStructures && ((SS.structures = []).uninitialized = !0, SS.structures.sharedLength = 0), SS.int64AsNumber && (SS.int64AsType = "number")), Object.assign(this, SS)
      }
      unpack(SS, HS) {
        if (bS) return XH((() => (xH(), this ? this.unpack(SS, HS) : dS.prototype.unpack.call(PS, SS, HS))));
        SS.buffer || SS.constructor !== ArrayBuffer || (SS = "undefined" !== typeof Buffer ? Buffer.from(SS) : new Uint8Array(SS)), "object" === typeof HS ? (XS = HS.end || SS.length, xS = HS.start || 0) : (xS = 0, XS = HS > -1 ? HS : SS.length), KS = 0, CS = 0, uS = null, aS = NS, IS = null, bS = SS;
        try {
          kS = SS.dataView || (SS.dataView = new DataView(SS.buffer, SS.byteOffset, SS.byteLength))
        } catch (tg) {
          if (bS = null, SS instanceof Uint8Array) throw tg;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (SS && "object" == typeof SS ? SS.constructor.name : typeof SS))
        }
        if (this instanceof dS) {
          if (jS = this, this.structures) return qS = this.structures, cS(HS);
          (!qS || qS.length > 0) && (qS = [])
        } else jS = PS, (!qS || qS.length > 0) && (qS = []);
        return cS(HS)
      }
      unpackMultiple(SS, HS) {
        let gS, tS = 0;
        try {
          JS = !0;
          let bS = SS.length,
            XS = this ? this.unpack(SS, bS) : uH.unpack(SS, bS);
          if (!HS) {
            for (gS = [XS]; xS < bS;) tS = xS, gS.push(cS());
            return gS
          }
          if (!1 === HS(XS, tS, xS)) return;
          for (; xS < bS;)
            if (tS = xS, !1 === HS(cS(), tS, xS)) return
        } catch (tg) {
          throw tg.lastPosition = tS, tg.values = gS, tg
        } finally {
          JS = !1, xH()
        }
      }
      _mergeStructures(SS, HS) {
        hS && (SS = hS.call(this, SS)), SS = SS || [], Object.isFrozen(SS) && (SS = SS.map((SS => SS.slice(0))));
        for (let gS = 0, tS = SS.length; gS < tS; gS++) {
          let HS = SS[gS];
          HS && (HS.isShared = !0, gS >= 32 && (HS.highByte = gS - 32 >> 5))
        }
        SS.sharedLength = SS.length;
        for (let gS in HS || [])
          if (gS >= 0) {
            let tS = SS[gS],
              bS = HS[gS];
            bS && (tS && ((SS.restoreStructures || (SS.restoreStructures = []))[gS] = tS), SS[gS] = bS)
          } return this.structures = SS
      }
      decode(SS, HS) {
        return this.unpack(SS, HS)
      }
    }

    function cS(SS) {
      try {
        if (!jS.trusted && !JS) {
          let SS = qS.sharedLength || 0;
          SS < qS.length && (qS.length = SS)
        }
        let HS;
        if (jS.randomAccessStructure && bS[xS] < 64 && bS[xS] >= 32 && wS ? (HS = wS(bS, xS, XS, jS), bS = null, SS && SS.lazy || !HS || (HS = HS.toJSON()), xS = XS) : HS = ES(), IS && (xS = IS.postBundlePosition, IS = null), JS && (qS.restoreStructures = null), xS == XS) qS && qS.restoreStructures && vS(), qS = null, bS = null, fS && (fS = null);
        else {
          if (xS > XS) throw new Error("Unexpected end of MessagePack data");
          if (!JS) {
            let SS;
            try {
              SS = JSON.stringify(HS, ((SS, HS) => "bigint" === typeof HS ? `${HS}n` : HS)).slice(0, 100)
            } catch (tg) {
              SS = "(JSON view not available " + tg + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + SS)
          }
        }
        return HS
      } catch (tg) {
        throw qS && qS.restoreStructures && vS(), xH(), (tg instanceof RangeError || tg.message.startsWith("Unexpected end of buffer") || xS > XS) && (tg.incomplete = !0), tg
      }
    }

    function vS() {
      for (let SS in qS.restoreStructures) qS[SS] = qS.restoreStructures[SS];
      qS.restoreStructures = null
    }

    function ES() {
      let SS = bS[xS++];
      if (SS < 160) {
        if (SS < 128) {
          if (SS < 64) return SS;
          {
            let HS = qS[63 & SS] || jS.getStructures && yS()[63 & SS];
            return HS ? (HS.read || (HS.read = YS(HS, 63 & SS)), HS.read()) : SS
          }
        }
        if (SS < 144) {
          if (SS -= 128, jS.mapsAsObjects) {
            let HS = {};
            for (let gS = 0; gS < SS; gS++) {
              let SS = eS();
              "__proto__" === SS && (SS = "__proto_"), HS[SS] = ES()
            }
            return HS
          } {
            let HS = new Map;
            for (let gS = 0; gS < SS; gS++) HS.set(ES(), ES());
            return HS
          }
        } {
          SS -= 144;
          let HS = new Array(SS);
          for (let gS = 0; gS < SS; gS++) HS[gS] = ES();
          return jS.freezeData ? Object.freeze(HS) : HS
        }
      }
      if (SS < 192) {
        let HS = SS - 160;
        if (CS >= xS) return uS.slice(xS - GS, (xS += HS) - GS);
        if (0 == CS && XS < 140) {
          let SS = HS < 16 ? RS(HS) : FS(HS);
          if (null != SS) return SS
        }
        return VS(HS)
      } {
        let HS;
        switch (SS) {
          case 192:
            return null;
          case 193:
            return IS ? (HS = ES(), HS > 0 ? IS[1].slice(IS.position1, IS.position1 += HS) : IS[0].slice(IS.position0, IS.position0 -= HS)) : DS;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (HS = bS[xS++], void 0 === HS) throw new Error("Unexpected end of buffer");
            return oS(HS);
          case 197:
            return HS = kS.getUint16(xS), xS += 2, oS(HS);
          case 198:
            return HS = kS.getUint32(xS), xS += 4, oS(HS);
          case 199:
            return lS(bS[xS++]);
          case 200:
            return HS = kS.getUint16(xS), xS += 2, lS(HS);
          case 201:
            return HS = kS.getUint32(xS), xS += 4, lS(HS);
          case 202:
            if (HS = kS.getFloat32(xS), jS.useFloat32 > 2) {
              let SS = NH[(127 & bS[xS]) << 1 | bS[xS + 1] >> 7];
              return xS += 4, (SS * HS + (HS > 0 ? .5 : -.5) | 0) / SS
            }
            return xS += 4, HS;
          case 203:
            return HS = kS.getFloat64(xS), xS += 8, HS;
          case 204:
            return bS[xS++];
          case 205:
            return HS = kS.getUint16(xS), xS += 2, HS;
          case 206:
            return HS = kS.getUint32(xS), xS += 4, HS;
          case 207:
            return "number" === jS.int64AsType ? (HS = 4294967296 * kS.getUint32(xS), HS += kS.getUint32(xS + 4)) : "string" === jS.int64AsType ? HS = kS.getBigUint64(xS).toString() : "auto" === jS.int64AsType ? (HS = kS.getBigUint64(xS), HS <= BigInt(2) << BigInt(52) && (HS = Number(HS))) : HS = kS.getBigUint64(xS), xS += 8, HS;
          case 208:
            return kS.getInt8(xS++);
          case 209:
            return HS = kS.getInt16(xS), xS += 2, HS;
          case 210:
            return HS = kS.getInt32(xS), xS += 4, HS;
          case 211:
            return "number" === jS.int64AsType ? (HS = 4294967296 * kS.getInt32(xS), HS += kS.getUint32(xS + 4)) : "string" === jS.int64AsType ? HS = kS.getBigInt64(xS).toString() : "auto" === jS.int64AsType ? (HS = kS.getBigInt64(xS), HS >= BigInt(-2) << BigInt(52) && HS <= BigInt(2) << BigInt(52) && (HS = Number(HS))) : HS = kS.getBigInt64(xS), xS += 8, HS;
          case 212:
            if (HS = bS[xS++], 114 == HS) return SH(63 & bS[xS++]);
            {
              let SS = nS[HS];
              if (SS) return SS.read ? (xS++, SS.read(ES())) : SS.noBuffer ? (xS++, SS()) : SS(bS.subarray(xS, ++xS));
              throw new Error("Unknown extension " + HS)
            }
          case 213:
            return HS = bS[xS], 114 == HS ? (xS++, SH(63 & bS[xS++], bS[xS++])) : lS(2);
          case 214:
            return lS(4);
          case 215:
            return lS(8);
          case 216:
            return lS(16);
          case 217:
            return HS = bS[xS++], CS >= xS ? uS.slice(xS - GS, (xS += HS) - GS) : iS(HS);
          case 218:
            return HS = kS.getUint16(xS), CS >= (xS += 2) ? uS.slice(xS - GS, (xS += HS) - GS) : WS(HS);
          case 219:
            return HS = kS.getUint32(xS), CS >= (xS += 4) ? uS.slice(xS - GS, (xS += HS) - GS) : zS(HS);
          case 220:
            return HS = kS.getUint16(xS), xS += 2, sS(HS);
          case 221:
            return HS = kS.getUint32(xS), xS += 4, sS(HS);
          case 222:
            return HS = kS.getUint16(xS), xS += 2, BS(HS);
          case 223:
            return HS = kS.getUint32(xS), xS += 4, BS(HS);
          default:
            if (SS >= 224) return SS - 256;
            if (void 0 === SS) {
              let SS = new Error("Unexpected end of MessagePack data");
              throw SS.incomplete = !0, SS
            }
            throw new Error("Unknown MessagePack token " + SS)
        }
      }
    }
    const LS = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function YS(SS, HS) {
      function gS() {
        if (gS.count++ > OS) {
          let gS = SS.read = new Function("r", "return function(){return " + (jS.freezeData ? "Object.freeze" : "") + "({" + SS.map((SS => "__proto__" === SS ? "__proto_:r()" : LS.test(SS) ? SS + ":r()" : "[" + JSON.stringify(SS) + "]:r()")).join(",") + "})}")(ES);
          return 0 === SS.highByte && (SS.read = AS(HS, SS.read)), gS()
        }
        let tS = {};
        for (let HS = 0, gS = SS.length; HS < gS; HS++) {
          let gS = SS[HS];
          "__proto__" === gS && (gS = "__proto_"), tS[gS] = ES()
        }
        return jS.freezeData ? Object.freeze(tS) : tS
      }
      return gS.count = 0, 0 === SS.highByte ? AS(HS, gS) : gS
    }
    const AS = (SS, HS) => function() {
      let gS = bS[xS++];
      if (0 === gS) return HS();
      let tS = SS < 32 ? -(SS + (gS << 5)) : SS + (gS << 5),
        XS = qS[tS] || yS()[tS];
      if (!XS) throw new Error("Record id is not defined for " + tS);
      return XS.read || (XS.read = YS(XS, SS)), XS.read()
    };

    function yS() {
      let SS = XH((() => (bS = null, jS.getStructures())));
      return qS = jS._mergeStructures(SS, qS)
    }
    var VS = pS,
      iS = pS,
      WS = pS,
      zS = pS;
    let US = !1;

    function pS(SS) {
      let HS;
      if (SS < 16 && (HS = RS(SS))) return HS;
      if (SS > 64 && tS) return tS.decode(bS.subarray(xS, xS += SS));
      const gS = xS + SS,
        XS = [];
      for (HS = ""; xS < gS;) {
        const SS = bS[xS++];
        if (0 === (128 & SS)) XS.push(SS);
        else if (192 === (224 & SS)) {
          const HS = 63 & bS[xS++];
          XS.push((31 & SS) << 6 | HS)
        } else if (224 === (240 & SS)) {
          const HS = 63 & bS[xS++],
            gS = 63 & bS[xS++];
          XS.push((31 & SS) << 12 | HS << 6 | gS)
        } else if (240 === (248 & SS)) {
          let HS = (7 & SS) << 18 | (63 & bS[xS++]) << 12 | (63 & bS[xS++]) << 6 | 63 & bS[xS++];
          HS > 65535 && (HS -= 65536, XS.push(HS >>> 10 & 1023 | 55296), HS = 56320 | 1023 & HS), XS.push(HS)
        } else XS.push(SS);
        XS.length >= 4096 && (HS += MS.apply(String, XS), XS.length = 0)
      }
      return XS.length > 0 && (HS += MS.apply(String, XS)), HS
    }

    function sS(SS) {
      let HS = new Array(SS);
      for (let gS = 0; gS < SS; gS++) HS[gS] = ES();
      return jS.freezeData ? Object.freeze(HS) : HS
    }

    function BS(SS) {
      if (jS.mapsAsObjects) {
        let HS = {};
        for (let gS = 0; gS < SS; gS++) {
          let SS = eS();
          "__proto__" === SS && (SS = "__proto_"), HS[SS] = ES()
        }
        return HS
      } {
        let HS = new Map;
        for (let gS = 0; gS < SS; gS++) HS.set(ES(), ES());
        return HS
      }
    }
    var MS = String.fromCharCode;

    function FS(SS) {
      let HS = xS,
        gS = new Array(SS);
      for (let tS = 0; tS < SS; tS++) {
        const SS = bS[xS++];
        if ((128 & SS) > 0) return void(xS = HS);
        gS[tS] = SS
      }
      return MS.apply(String, gS)
    }

    function RS(SS) {
      if (SS < 4) {
        if (SS < 2) {
          if (0 === SS) return "";
          {
            let SS = bS[xS++];
            return (128 & SS) > 1 ? void(xS -= 1) : MS(SS)
          }
        } {
          let HS = bS[xS++],
            gS = bS[xS++];
          if ((128 & HS) > 0 || (128 & gS) > 0) return void(xS -= 2);
          if (SS < 3) return MS(HS, gS);
          let tS = bS[xS++];
          return (128 & tS) > 0 ? void(xS -= 3) : MS(HS, gS, tS)
        }
      } {
        let HS = bS[xS++],
          gS = bS[xS++],
          tS = bS[xS++],
          XS = bS[xS++];
        if ((128 & HS) > 0 || (128 & gS) > 0 || (128 & tS) > 0 || (128 & XS) > 0) return void(xS -= 4);
        if (SS < 6) {
          if (4 === SS) return MS(HS, gS, tS, XS);
          {
            let SS = bS[xS++];
            return (128 & SS) > 0 ? void(xS -= 5) : MS(HS, gS, tS, XS, SS)
          }
        }
        if (SS < 8) {
          let NS = bS[xS++],
            qS = bS[xS++];
          if ((128 & NS) > 0 || (128 & qS) > 0) return void(xS -= 6);
          if (SS < 7) return MS(HS, gS, tS, XS, NS, qS);
          let uS = bS[xS++];
          return (128 & uS) > 0 ? void(xS -= 7) : MS(HS, gS, tS, XS, NS, qS, uS)
        } {
          let NS = bS[xS++],
            qS = bS[xS++],
            uS = bS[xS++],
            IS = bS[xS++];
          if ((128 & NS) > 0 || (128 & qS) > 0 || (128 & uS) > 0 || (128 & IS) > 0) return void(xS -= 8);
          if (SS < 10) {
            if (8 === SS) return MS(HS, gS, tS, XS, NS, qS, uS, IS);
            {
              let SS = bS[xS++];
              return (128 & SS) > 0 ? void(xS -= 9) : MS(HS, gS, tS, XS, NS, qS, uS, IS, SS)
            }
          }
          if (SS < 12) {
            let fS = bS[xS++],
              kS = bS[xS++];
            if ((128 & fS) > 0 || (128 & kS) > 0) return void(xS -= 10);
            if (SS < 11) return MS(HS, gS, tS, XS, NS, qS, uS, IS, fS, kS);
            let aS = bS[xS++];
            return (128 & aS) > 0 ? void(xS -= 11) : MS(HS, gS, tS, XS, NS, qS, uS, IS, fS, kS, aS)
          } {
            let fS = bS[xS++],
              kS = bS[xS++],
              aS = bS[xS++],
              KS = bS[xS++];
            if ((128 & fS) > 0 || (128 & kS) > 0 || (128 & aS) > 0 || (128 & KS) > 0) return void(xS -= 12);
            if (SS < 14) {
              if (12 === SS) return MS(HS, gS, tS, XS, NS, qS, uS, IS, fS, kS, aS, KS);
              {
                let SS = bS[xS++];
                return (128 & SS) > 0 ? void(xS -= 13) : MS(HS, gS, tS, XS, NS, qS, uS, IS, fS, kS, aS, KS, SS)
              }
            } {
              let jS = bS[xS++],
                GS = bS[xS++];
              if ((128 & jS) > 0 || (128 & GS) > 0) return void(xS -= 14);
              if (SS < 15) return MS(HS, gS, tS, XS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS);
              let CS = bS[xS++];
              return (128 & CS) > 0 ? void(xS -= 15) : MS(HS, gS, tS, XS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS)
            }
          }
        }
      }
    }

    function TS() {
      let SS, HS = bS[xS++];
      if (HS < 192) SS = HS - 160;
      else switch (HS) {
        case 217:
          SS = bS[xS++];
          break;
        case 218:
          SS = kS.getUint16(xS), xS += 2;
          break;
        case 219:
          SS = kS.getUint32(xS), xS += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return pS(SS)
    }

    function oS(SS) {
      return jS.copyBuffers ? Uint8Array.prototype.slice.call(bS, xS, xS += SS) : bS.subarray(xS, xS += SS)
    }

    function lS(SS) {
      let HS = bS[xS++];
      if (nS[HS]) {
        let gS;
        return nS[HS](bS.subarray(xS, gS = xS += SS), (SS => {
          xS = SS;
          try {
            return ES()
          } finally {
            xS = gS
          }
        }))
      }
      throw new Error("Unknown extension type " + HS)
    }
    var mS = new Array(4096);

    function eS() {
      let SS = bS[xS++];
      if (!(SS >= 160 && SS < 192)) return xS--, rS(ES());
      if (SS -= 160, CS >= xS) return uS.slice(xS - GS, (xS += SS) - GS);
      if (!(0 == CS && XS < 180)) return VS(SS);
      let HS, gS = 4095 & (SS << 5 ^ (SS > 1 ? kS.getUint16(xS) : SS > 0 ? bS[xS] : 0)),
        tS = mS[gS],
        NS = xS,
        qS = xS + SS - 3,
        IS = 0;
      if (tS && tS.bytes == SS) {
        for (; NS < qS;) {
          if (HS = kS.getUint32(NS), HS != tS[IS++]) {
            NS = 1879048192;
            break
          }
          NS += 4
        }
        for (qS += 3; NS < qS;)
          if (HS = bS[NS++], HS != tS[IS++]) {
            NS = 1879048192;
            break
          } if (NS === qS) return xS = NS, tS.string;
        qS -= 3, NS = xS
      }
      for (tS = [], mS[gS] = tS, tS.bytes = SS; NS < qS;) HS = kS.getUint32(NS), tS.push(HS), NS += 4;
      for (qS += 3; NS < qS;) HS = bS[NS++], tS.push(HS);
      let fS = SS < 16 ? RS(SS) : FS(SS);
      return tS.string = null != fS ? fS : VS(SS)
    }

    function rS(SS) {
      if ("string" === typeof SS) return SS;
      if ("number" === typeof SS || "boolean" === typeof SS || "bigint" === typeof SS) return SS.toString();
      if (null == SS) return SS + "";
      if (jS.allowArraysInMapKeys && Array.isArray(SS) && SS.flat().every((SS => ["string", "number", "boolean", "bigint"].includes(typeof SS)))) return SS.flat().toString();
      throw new Error("Invalid property type for record: " + typeof SS)
    }
    const SH = (SS, HS) => {
      let gS = ES().map(rS),
        tS = SS;
      void 0 !== HS && (SS = SS < 32 ? -((HS << 5) + SS) : (HS << 5) + SS, gS.highByte = HS);
      let bS = qS[SS];
      return bS && (bS.isShared || JS) && ((qS.restoreStructures || (qS.restoreStructures = []))[SS] = bS), qS[SS] = gS, gS.read = YS(gS, tS), gS.read()
    };
    nS[0] = () => {}, nS[0].noBuffer = !0, nS[66] = SS => {
      let HS = SS.length,
        gS = BigInt(128 & SS[0] ? SS[0] - 256 : SS[0]);
      for (let tS = 1; tS < HS; tS++) gS <<= BigInt(8), gS += BigInt(SS[tS]);
      return gS
    };
    let HH = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    nS[101] = () => {
      let SS = ES();
      return (HH[SS[0]] || Error)(SS[1], {
        cause: SS[2]
      })
    }, nS[105] = SS => {
      if (!1 === jS.structuredClone) throw new Error("Structured clone extension is disabled");
      let HS = kS.getUint32(xS - 4);
      fS || (fS = new Map);
      let gS, tS = bS[xS];
      gS = tS >= 144 && tS < 160 || 220 == tS || 221 == tS ? [] : {};
      let XS = {
        target: gS
      };
      fS.set(HS, XS);
      let NS = ES();
      return XS.used ? Object.assign(gS, NS) : (XS.target = NS, NS)
    }, nS[112] = SS => {
      if (!1 === jS.structuredClone) throw new Error("Structured clone extension is disabled");
      let HS = kS.getUint32(xS - 4),
        gS = fS.get(HS);
      return gS.used = !0, gS.target
    }, nS[115] = () => new Set(ES());
    const gH = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((SS => SS + "Array"));
    let tH = "object" === typeof globalThis ? globalThis : window;
    nS[116] = SS => {
      let HS = SS[0],
        gS = gH[HS];
      if (!gS) {
        if (16 === HS) {
          let HS = new ArrayBuffer(SS.length - 1);
          return new Uint8Array(HS).set(SS.subarray(1)), HS
        }
        throw new Error("Could not find typed array for code " + HS)
      }
      return new tH[gS](Uint8Array.prototype.slice.call(SS, 1).buffer)
    }, nS[120] = () => {
      let SS = ES();
      return new RegExp(SS[0], SS[1])
    };
    const bH = [];

    function XH(SS) {
      ZS && ZS();
      let HS = XS,
        gS = xS,
        tS = KS,
        NS = GS,
        nS = CS,
        PS = uS,
        QS = aS,
        DS = fS,
        wS = IS,
        hS = new Uint8Array(bS.slice(0, XS)),
        OS = qS,
        dS = qS.slice(0, qS.length),
        cS = jS,
        vS = JS,
        ES = SS();
      return XS = HS, xS = gS, KS = tS, GS = NS, CS = nS, uS = PS, aS = QS, fS = DS, IS = wS, bS = hS, JS = vS, (qS = OS).splice(0, qS.length, ...dS), jS = cS, kS = new DataView(bS.buffer, bS.byteOffset, bS.byteLength), ES
    }

    function xH() {
      bS = null, fS = null, qS = null
    }
    nS[98] = SS => {
      let HS = (SS[0] << 24) + (SS[1] << 16) + (SS[2] << 8) + SS[3],
        gS = xS;
      return xS += HS - SS.length, IS = bH, (IS = [TS(), TS()]).position0 = 0, IS.position1 = 0, IS.postBundlePosition = xS, xS = gS, ES()
    }, nS[255] = SS => 4 == SS.length ? new Date(1e3 * (16777216 * SS[0] + (SS[1] << 16) + (SS[2] << 8) + SS[3])) : 8 == SS.length ? new Date(((SS[0] << 22) + (SS[1] << 14) + (SS[2] << 6) + (SS[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & SS[3]) + 16777216 * SS[4] + (SS[5] << 16) + (SS[6] << 8) + SS[7])) : 12 == SS.length ? new Date(((SS[0] << 24) + (SS[1] << 16) + (SS[2] << 8) + SS[3]) / 1e6 + 1e3 * ((128 & SS[4] ? -281474976710656 : 0) + 1099511627776 * SS[6] + 4294967296 * SS[7] + 16777216 * SS[8] + (SS[9] << 16) + (SS[10] << 8) + SS[11])) : new Date("invalid");
    const NH = new Array(147);
    for (let bg = 0; bg < 256; bg++) NH[bg] = +("1e" + Math.floor(45.15 - .30103 * bg));
    const qH = dS;
    var uH = new dS({
      useRecords: !1
    });
    const IH = uH.unpack,
      fH = uH.unpackMultiple,
      kH = uH.unpack,
      aH = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let KH, jH, GH, CH = new Float32Array(1),
      nH = new Uint8Array(CH.buffer, 0, 4);

    function PH(SS) {
      CH[0] = SS;
      let HS = NH[(127 & nH[3]) << 1 | nH[2] >> 7];
      return (HS * SS + (SS > 0 ? .5 : -.5) | 0) / HS
    }
    try {
      KH = new TextEncoder
    } catch (tg) {}
    const QH = "undefined" !== typeof Buffer,
      DH = QH ? function(SS) {
        return Buffer.allocUnsafeSlow(SS)
      } : Uint8Array,
      wH = QH ? Buffer : Uint8Array,
      hH = QH ? 4294967296 : 2144337920;
    let ZH, JH, OH, dH, cH, vH = 0,
      EH = null;
    const LH = /[\u0080-\uFFFF]/,
      YH = Symbol("record-id");
    class AH extends dS {
      constructor(SS) {
        let HS, gS, tS, bS;
        super(SS), this.offset = 0;
        let XS = wH.prototype.utf8Write ? function(SS, HS) {
            return ZH.utf8Write(SS, HS, ZH.byteLength - HS)
          } : !(!KH || !KH.encodeInto) && function(SS, HS) {
            return KH.encodeInto(SS, ZH.subarray(HS)).written
          },
          xS = this;
        SS || (SS = {});
        let NS = SS && SS.sequential,
          qS = SS.structures || SS.saveStructures,
          uS = SS.maxSharedStructures;
        if (null == uS && (uS = qS ? 32 : 0), uS > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        SS.structuredClone && void 0 == SS.moreTypes && (this.moreTypes = !0);
        let IS = SS.maxOwnStructures;
        null == IS && (IS = qS ? 32 : 64), this.structures || 0 == SS.useRecords || (this.structures = []);
        let fS = uS > 32 || IS + uS > 64,
          kS = uS + 64,
          aS = uS + IS + 64;
        if (aS > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let KS = [],
          jS = 0,
          GS = 0;
        this.pack = this.encode = function(SS, XS) {
          if (ZH || (ZH = new DH(8192), OH = ZH.dataView || (ZH.dataView = new DataView(ZH.buffer, 0, 8192)), vH = 0), dH = ZH.length - 10, dH - vH < 2048 ? (ZH = new DH(ZH.length), OH = ZH.dataView || (ZH.dataView = new DataView(ZH.buffer, 0, ZH.length)), dH = ZH.length - 10, vH = 0) : vH = vH + 7 & 2147483640, HS = vH, XS & eH && (vH += 255 & XS), bS = xS.structuredClone ? new Map : null, xS.bundleStrings && "string" !== typeof SS ? (EH = [], EH.size = 1 / 0) : EH = null, tS = xS.structures, tS) {
            tS.uninitialized && (tS = xS._mergeStructures(xS.getStructures()));
            let SS = tS.sharedLength || 0;
            if (SS > uS) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + tS.sharedLength);
            if (!tS.transitions) {
              tS.transitions = Object.create(null);
              for (let HS = 0; HS < SS; HS++) {
                let SS = tS[HS];
                if (!SS) continue;
                let gS, bS = tS.transitions;
                for (let HS = 0, tS = SS.length; HS < tS; HS++) {
                  let tS = SS[HS];
                  gS = bS[tS], gS || (gS = bS[tS] = Object.create(null)), bS = gS
                }
                bS[YH] = HS + 64
              }
              this.lastNamedStructuresLength = SS
            }
            NS || (tS.nextId = SS + 64)
          }
          let qS;
          gS && (gS = !1);
          try {
            xS.randomAccessStructure && SS && SS.constructor && SS.constructor === Object ? dS(SS) : PS(SS);
            let gS = EH;
            if (EH && WH(HS, PS, 0), bS && bS.idsToInsert) {
              let SS = bS.idsToInsert.sort(((SS, HS) => SS.offset > HS.offset ? 1 : -1)),
                tS = SS.length,
                XS = -1;
              for (; gS && tS > 0;) {
                let bS = SS[--tS].offset + HS;
                bS < gS.stringsPosition + HS && -1 === XS && (XS = 0), bS > gS.position + HS ? XS >= 0 && (XS += 6) : (XS >= 0 && (OH.setUint32(gS.position + HS, OH.getUint32(gS.position + HS) + XS), XS = -1), gS = gS.previous, tS++)
              }
              XS >= 0 && gS && OH.setUint32(gS.position + HS, OH.getUint32(gS.position + HS) + XS), vH += 6 * SS.length, vH > dH && ZS(vH), xS.offset = vH;
              let NS = function(SS, HS) {
                let gS, tS = 6 * HS.length,
                  bS = SS.length - tS;
                for (; gS = HS.pop();) {
                  let HS = gS.offset,
                    XS = gS.id;
                  SS.copyWithin(HS + tS, HS, bS), tS -= 6;
                  let xS = HS + tS;
                  SS[xS++] = 214, SS[xS++] = 105, SS[xS++] = XS >> 24, SS[xS++] = XS >> 16 & 255, SS[xS++] = XS >> 8 & 255, SS[xS++] = 255 & XS, bS = HS
                }
                return SS
              }(ZH.subarray(HS, vH), SS);
              return bS = null, NS
            }
            return xS.offset = vH, XS & lH ? (ZH.start = HS, ZH.end = vH, ZH) : ZH.subarray(HS, vH)
          } catch (tg) {
            throw qS = tg, tg
          } finally {
            if (tS && (CS(), gS && xS.saveStructures)) {
              let gS = tS.sharedLength || 0,
                bS = ZH.subarray(HS, vH),
                NS = UH(tS, xS);
              if (!qS) return !1 === xS.saveStructures(NS, NS.isCompatible) ? xS.pack(SS, XS) : (xS.lastNamedStructuresLength = gS, ZH.length > 1073741824 && (ZH = null), bS)
            }
            ZH.length > 1073741824 && (ZH = null), XS & mH && (vH = HS)
          }
        };
        const CS = () => {
            GS < 10 && GS++;
            let SS = tS.sharedLength || 0;
            if (tS.length > SS && !NS && (tS.length = SS), jS > 1e4) tS.transitions = null, GS = 0, jS = 0, KS.length > 0 && (KS = []);
            else if (KS.length > 0 && !NS) {
              for (let SS = 0, HS = KS.length; SS < HS; SS++) KS[SS][YH] = 0;
              KS = []
            }
          },
          nS = SS => {
            var HS = SS.length;
            HS < 16 ? ZH[vH++] = 144 | HS : HS < 65536 ? (ZH[vH++] = 220, ZH[vH++] = HS >> 8, ZH[vH++] = 255 & HS) : (ZH[vH++] = 221, OH.setUint32(vH, HS), vH += 4);
            for (let gS = 0; gS < HS; gS++) PS(SS[gS])
          },
          PS = SS => {
            vH > dH && (ZH = ZS(vH));
            var gS, tS = typeof SS;
            if ("string" === tS) {
              let tS, bS = SS.length;
              if (EH && bS >= 4 && bS < 4096) {
                if ((EH.size += bS) > 21760) {
                  let SS, gS, tS = (EH[0] ? 3 * EH[0].length + EH[1].length : 0) + 10;
                  vH + tS > dH && (ZH = ZS(vH + tS)), EH.position ? (gS = EH, ZH[vH] = 200, vH += 3, ZH[vH++] = 98, SS = vH - HS, vH += 4, WH(HS, PS, 0), OH.setUint16(SS + HS - 3, vH - HS - SS)) : (ZH[vH++] = 214, ZH[vH++] = 98, SS = vH - HS, vH += 4), EH = ["", ""], EH.previous = gS, EH.size = 0, EH.position = SS
                }
                let gS = LH.test(SS);
                return EH[gS ? 0 : 1] += SS, ZH[vH++] = 193, void PS(gS ? -bS : bS)
              }
              tS = bS < 32 ? 1 : bS < 256 ? 2 : bS < 65536 ? 3 : 5;
              let xS = 3 * bS;
              if (vH + xS > dH && (ZH = ZS(vH + xS)), bS < 64 || !XS) {
                let HS, XS, xS, NS = vH + tS;
                for (HS = 0; HS < bS; HS++) XS = SS.charCodeAt(HS), XS < 128 ? ZH[NS++] = XS : XS < 2048 ? (ZH[NS++] = XS >> 6 | 192, ZH[NS++] = 63 & XS | 128) : 55296 === (64512 & XS) && 56320 === (64512 & (xS = SS.charCodeAt(HS + 1))) ? (XS = 65536 + ((1023 & XS) << 10) + (1023 & xS), HS++, ZH[NS++] = XS >> 18 | 240, ZH[NS++] = XS >> 12 & 63 | 128, ZH[NS++] = XS >> 6 & 63 | 128, ZH[NS++] = 63 & XS | 128) : (ZH[NS++] = XS >> 12 | 224, ZH[NS++] = XS >> 6 & 63 | 128, ZH[NS++] = 63 & XS | 128);
                gS = NS - vH - tS
              } else gS = XS(SS, vH + tS);
              gS < 32 ? ZH[vH++] = 160 | gS : gS < 256 ? (tS < 2 && ZH.copyWithin(vH + 2, vH + 1, vH + 1 + gS), ZH[vH++] = 217, ZH[vH++] = gS) : gS < 65536 ? (tS < 3 && ZH.copyWithin(vH + 3, vH + 2, vH + 2 + gS), ZH[vH++] = 218, ZH[vH++] = gS >> 8, ZH[vH++] = 255 & gS) : (tS < 5 && ZH.copyWithin(vH + 5, vH + 3, vH + 3 + gS), ZH[vH++] = 219, OH.setUint32(vH, gS), vH += 4), vH += gS
            } else if ("number" === tS)
              if (SS >>> 0 === SS) SS < 32 || SS < 128 && !1 === this.useRecords || SS < 64 && !this.randomAccessStructure ? ZH[vH++] = SS : SS < 256 ? (ZH[vH++] = 204, ZH[vH++] = SS) : SS < 65536 ? (ZH[vH++] = 205, ZH[vH++] = SS >> 8, ZH[vH++] = 255 & SS) : (ZH[vH++] = 206, OH.setUint32(vH, SS), vH += 4);
              else if ((SS | 0) === SS) SS >= -32 ? ZH[vH++] = 256 + SS : SS >= -128 ? (ZH[vH++] = 208, ZH[vH++] = SS + 256) : SS >= -32768 ? (ZH[vH++] = 209, OH.setInt16(vH, SS), vH += 2) : (ZH[vH++] = 210, OH.setInt32(vH, SS), vH += 4);
            else {
              let HS;
              if ((HS = this.useFloat32) > 0 && SS < 4294967296 && SS >= -2147483648) {
                let gS;
                if (ZH[vH++] = 202, OH.setFloat32(vH, SS), HS < 4 || ((gS = SS * NH[(127 & ZH[vH]) << 1 | ZH[vH + 1] >> 7]) | 0) === gS) return void(vH += 4);
                vH--
              }
              ZH[vH++] = 203, OH.setFloat64(vH, SS), vH += 8
            } else if ("object" === tS || "function" === tS)
              if (SS) {
                if (bS) {
                  let gS = bS.get(SS);
                  if (gS) {
                    if (!gS.id) {
                      let SS = bS.idsToInsert || (bS.idsToInsert = []);
                      gS.id = SS.push(gS)
                    }
                    return ZH[vH++] = 214, ZH[vH++] = 112, OH.setUint32(vH, gS.id), void(vH += 4)
                  }
                  bS.set(SS, {
                    offset: vH - HS
                  })
                }
                let XS = SS.constructor;
                if (XS === Object) hS(SS);
                else if (XS === Array) nS(SS);
                else if (XS === Map)
                  if (this.mapAsEmptyObject) ZH[vH++] = 128;
                  else {
                    (gS = SS.size) < 16 ? ZH[vH++] = 128 | gS : gS < 65536 ? (ZH[vH++] = 222, ZH[vH++] = gS >> 8, ZH[vH++] = 255 & gS) : (ZH[vH++] = 223, OH.setUint32(vH, gS), vH += 4);
                    for (let [HS, gS] of SS) PS(HS), PS(gS)
                  }
                else {
                  for (let HS = 0, gS = jH.length; HS < gS; HS++) {
                    if (SS instanceof GH[HS]) {
                      let gS = jH[HS];
                      if (gS.write) {
                        gS.type && (ZH[vH++] = 212, ZH[vH++] = gS.type, ZH[vH++] = 0);
                        let HS = gS.write.call(this, SS);
                        return void(HS === SS ? Array.isArray(SS) ? nS(SS) : hS(SS) : PS(HS))
                      }
                      let tS, bS = ZH,
                        XS = OH,
                        xS = vH;
                      ZH = null;
                      try {
                        tS = gS.pack.call(this, SS, (SS => (ZH = bS, bS = null, vH += SS, vH > dH && ZS(vH), {
                          target: ZH,
                          targetView: OH,
                          position: vH - SS
                        })), PS)
                      } finally {
                        bS && (ZH = bS, OH = XS, vH = xS, dH = ZH.length - 10)
                      }
                      return void(tS && (tS.length + vH > dH && ZS(tS.length + vH), vH = iH(tS, ZH, vH, gS.type)))
                    }
                  }
                  if (Array.isArray(SS)) nS(SS);
                  else {
                    if (SS.toJSON) {
                      const HS = SS.toJSON();
                      if (HS !== SS) return PS(HS)
                    }
                    if ("function" === tS) return PS(this.writeFunction && this.writeFunction(SS));
                    hS(SS)
                  }
                }
              } else ZH[vH++] = 192;
            else if ("boolean" === tS) ZH[vH++] = SS ? 195 : 194;
            else if ("bigint" === tS) {
              if (SS < BigInt(1) << BigInt(63) && SS >= -(BigInt(1) << BigInt(63))) ZH[vH++] = 211, OH.setBigInt64(vH, SS);
              else if (SS < BigInt(1) << BigInt(64) && SS > 0) ZH[vH++] = 207, OH.setBigUint64(vH, SS);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return PS(SS.toString());
                  if (this.useBigIntExtension && SS < BigInt(2) ** BigInt(1023) && SS > -(BigInt(2) ** BigInt(1023))) {
                    ZH[vH++] = 199, vH++, ZH[vH++] = 66;
                    let HS, gS = [];
                    do {
                      let tS = SS & BigInt(255);
                      HS = (tS & BigInt(128)) === (SS < BigInt(0) ? BigInt(128) : BigInt(0)), gS.push(tS), SS >>= BigInt(8)
                    } while (SS !== BigInt(0) && SS !== BigInt(-1) || !HS);
                    ZH[vH - 2] = gS.length;
                    for (let SS = gS.length; SS > 0;) ZH[vH++] = Number(gS[--SS]);
                    return
                  }
                  throw new RangeError(SS + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                ZH[vH++] = 203, OH.setFloat64(vH, Number(SS))
              }
              vH += 8
            } else {
              if ("undefined" !== tS) throw new Error("Unknown type: " + tS);
              this.encodeUndefinedAsNil ? ZH[vH++] = 192 : (ZH[vH++] = 212, ZH[vH++] = 0, ZH[vH++] = 0)
            }
          },
          QS = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? SS => {
            let HS;
            if (this.skipValues) {
              HS = [];
              for (let gS in SS) "function" === typeof SS.hasOwnProperty && !SS.hasOwnProperty(gS) || this.skipValues.includes(SS[gS]) || HS.push(gS)
            } else HS = Object.keys(SS);
            let gS, tS = HS.length;
            if (tS < 16 ? ZH[vH++] = 128 | tS : tS < 65536 ? (ZH[vH++] = 222, ZH[vH++] = tS >> 8, ZH[vH++] = 255 & tS) : (ZH[vH++] = 223, OH.setUint32(vH, tS), vH += 4), this.coercibleKeyAsNumber)
              for (let bS = 0; bS < tS; bS++) {
                gS = HS[bS];
                let tS = Number(gS);
                PS(isNaN(tS) ? gS : tS), PS(SS[gS])
              } else
                for (let bS = 0; bS < tS; bS++) PS(gS = HS[bS]), PS(SS[gS])
          } : SS => {
            ZH[vH++] = 222;
            let gS = vH - HS;
            vH += 2;
            let tS = 0;
            for (let HS in SS)("function" !== typeof SS.hasOwnProperty || SS.hasOwnProperty(HS)) && (PS(HS), PS(SS[HS]), tS++);
            if (tS > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            ZH[gS++ + HS] = tS >> 8, ZH[gS + HS] = 255 & tS
          },
          DS = !1 === this.useRecords ? QS : SS.progressiveRecords && !fS ? SS => {
            let gS, bS, XS = tS.transitions || (tS.transitions = Object.create(null)),
              xS = vH++ - HS;
            for (let NS in SS)
              if ("function" !== typeof SS.hasOwnProperty || SS.hasOwnProperty(NS)) {
                if (gS = XS[NS], gS) XS = gS;
                else {
                  let qS = Object.keys(SS),
                    uS = XS;
                  XS = tS.transitions;
                  let IS = 0;
                  for (let SS = 0, HS = qS.length; SS < HS; SS++) {
                    let HS = qS[SS];
                    gS = XS[HS], gS || (gS = XS[HS] = Object.create(null), IS++), XS = gS
                  }
                  xS + HS + 1 == vH ? (vH--, JS(XS, qS, IS)) : OS(XS, qS, xS, IS), bS = !0, XS = uS[NS]
                }
                PS(SS[NS])
              } if (!bS) {
              let gS = XS[YH];
              gS ? ZH[xS + HS] = gS : OS(XS, Object.keys(SS), xS, 0)
            }
          } : SS => {
            let HS, gS = tS.transitions || (tS.transitions = Object.create(null)),
              bS = 0;
            for (let tS in SS)("function" !== typeof SS.hasOwnProperty || SS.hasOwnProperty(tS)) && (HS = gS[tS], HS || (HS = gS[tS] = Object.create(null), bS++), gS = HS);
            let XS = gS[YH];
            XS ? XS >= 96 && fS ? (ZH[vH++] = 96 + (31 & (XS -= 96)), ZH[vH++] = XS >> 5) : ZH[vH++] = XS : JS(gS, gS.__keys__ || Object.keys(SS), bS);
            for (let tS in SS)("function" !== typeof SS.hasOwnProperty || SS.hasOwnProperty(tS)) && PS(SS[tS])
          },
          wS = "function" == typeof this.useRecords && this.useRecords,
          hS = wS ? SS => {
            wS(SS) ? DS(SS) : QS(SS)
          } : DS,
          ZS = SS => {
            let gS;
            if (SS > 16777216) {
              if (SS - HS > hH) throw new Error("Packed buffer would be larger than maximum buffer size");
              gS = Math.min(hH, 4096 * Math.round(Math.max((SS - HS) * (SS > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else gS = 1 + (Math.max(SS - HS << 2, ZH.length - 1) >> 12) << 12;
            let tS = new DH(gS);
            return OH = tS.dataView || (tS.dataView = new DataView(tS.buffer, 0, gS)), SS = Math.min(SS, ZH.length), ZH.copy ? ZH.copy(tS, 0, HS, SS) : tS.set(ZH.slice(HS, SS)), vH -= HS, HS = 0, dH = tS.length - 10, ZH = tS
          },
          JS = (SS, HS, bS) => {
            let XS = tS.nextId;
            XS || (XS = 64), XS < kS && this.shouldShareStructure && !this.shouldShareStructure(HS) ? (XS = tS.nextOwnId, XS < aS || (XS = kS), tS.nextOwnId = XS + 1) : (XS >= aS && (XS = kS), tS.nextId = XS + 1);
            let xS = HS.highByte = XS >= 96 && fS ? XS - 96 >> 5 : -1;
            SS[YH] = XS, SS.__keys__ = HS, tS[XS - 64] = HS, XS < kS ? (HS.isShared = !0, tS.sharedLength = XS - 63, gS = !0, xS >= 0 ? (ZH[vH++] = 96 + (31 & XS), ZH[vH++] = xS) : ZH[vH++] = XS) : (xS >= 0 ? (ZH[vH++] = 213, ZH[vH++] = 114, ZH[vH++] = 96 + (31 & XS), ZH[vH++] = xS) : (ZH[vH++] = 212, ZH[vH++] = 114, ZH[vH++] = XS), bS && (jS += GS * bS), KS.length >= IS && (KS.shift()[YH] = 0), KS.push(SS), PS(HS))
          },
          OS = (SS, gS, tS, bS) => {
            let XS = ZH,
              xS = vH,
              NS = dH,
              qS = HS;
            ZH = JH, vH = 0, HS = 0, ZH || (JH = ZH = new DH(8192)), dH = ZH.length - 10, JS(SS, gS, bS), JH = ZH;
            let uS = vH;
            if (ZH = XS, vH = xS, dH = NS, HS = qS, uS > 1) {
              let SS = vH + uS - 1;
              SS > dH && ZS(SS);
              let gS = tS + HS;
              ZH.copyWithin(gS + uS, gS + 1, vH), ZH.set(JH.slice(0, uS), gS), vH = SS
            } else ZH[tS + HS] = JH[0]
          },
          dS = SS => {
            let bS = cH(SS, ZH, HS, vH, tS, ZS, ((SS, HS, tS) => {
              if (tS) return gS = !0;
              vH = HS;
              let bS = ZH;
              return PS(SS), CS(), bS !== ZH ? {
                position: vH,
                targetView: OH,
                target: ZH
              } : vH
            }), this);
            if (0 === bS) return hS(SS);
            vH = bS
          }
      }
      useBuffer(SS) {
        ZH = SS, OH = ZH.dataView || (ZH.dataView = new DataView(ZH.buffer, ZH.byteOffset, ZH.byteLength)), vH = 0
      }
      set position(SS) {
        vH = SS
      }
      get position() {
        return vH
      }
      set buffer(SS) {
        ZH = SS
      }
      get buffer() {
        return ZH
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function yH(SS, HS, gS, tS) {
      let bS = SS.byteLength;
      if (bS + 1 < 256) {
        var {
          target: XS,
          position: xS
        } = gS(4 + bS);
        XS[xS++] = 199, XS[xS++] = bS + 1
      } else if (bS + 1 < 65536) {
        var {
          target: XS,
          position: xS
        } = gS(5 + bS);
        XS[xS++] = 200, XS[xS++] = bS + 1 >> 8, XS[xS++] = bS + 1 & 255
      } else {
        var {
          target: XS,
          position: xS,
          targetView: NS
        } = gS(7 + bS);
        XS[xS++] = 201, NS.setUint32(xS, bS + 1), xS += 4
      }
      XS[xS++] = 116, XS[xS++] = HS, SS.buffer || (SS = new Uint8Array(SS)), XS.set(new Uint8Array(SS.buffer, SS.byteOffset, SS.byteLength), xS)
    }

    function VH(SS, HS) {
      let gS = SS.byteLength;
      var tS, bS;
      if (gS < 256) {
        var {
          target: tS,
          position: bS
        } = HS(gS + 2);
        tS[bS++] = 196, tS[bS++] = gS
      } else if (gS < 65536) {
        var {
          target: tS,
          position: bS
        } = HS(gS + 3);
        tS[bS++] = 197, tS[bS++] = gS >> 8, tS[bS++] = 255 & gS
      } else {
        var {
          target: tS,
          position: bS,
          targetView: XS
        } = HS(gS + 5);
        tS[bS++] = 198, XS.setUint32(bS, gS), bS += 4
      }
      tS.set(SS, bS)
    }

    function iH(SS, HS, gS, tS) {
      let bS = SS.length;
      switch (bS) {
        case 1:
          HS[gS++] = 212;
          break;
        case 2:
          HS[gS++] = 213;
          break;
        case 4:
          HS[gS++] = 214;
          break;
        case 8:
          HS[gS++] = 215;
          break;
        case 16:
          HS[gS++] = 216;
          break;
        default:
          bS < 256 ? (HS[gS++] = 199, HS[gS++] = bS) : bS < 65536 ? (HS[gS++] = 200, HS[gS++] = bS >> 8, HS[gS++] = 255 & bS) : (HS[gS++] = 201, HS[gS++] = bS >> 24, HS[gS++] = bS >> 16 & 255, HS[gS++] = bS >> 8 & 255, HS[gS++] = 255 & bS)
      }
      return HS[gS++] = tS, HS.set(SS, gS), gS += bS
    }

    function WH(SS, HS, gS) {
      if (EH.length > 0) {
        OH.setUint32(EH.position + SS, vH + gS - EH.position - SS), EH.stringsPosition = vH - SS;
        let tS = EH;
        EH = null, HS(tS[0]), HS(tS[1])
      }
    }

    function zH(SS) {
      if (SS.Class) {
        if (!SS.pack && !SS.write) throw new Error("Extension has no pack or write function");
        if (SS.pack && !SS.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        GH.unshift(SS.Class), jH.unshift(SS)
      }! function(SS) {
        SS.unpack ? nS[SS.type] = SS.unpack : nS[SS.type] = SS
      }(SS)
    }

    function UH(SS, HS) {
      return SS.isCompatible = SS => {
        let gS = !SS || (HS.lastNamedStructuresLength || 0) === SS.length;
        return gS || HS._mergeStructures(SS), gS
      }, SS
    }
    GH = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, QS], jH = [{
      pack(SS, HS, gS) {
        let tS = SS.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === SS.getMilliseconds()) && tS >= 0 && tS < 4294967296) {
          let {
            target: SS,
            targetView: gS,
            position: bS
          } = HS(6);
          SS[bS++] = 214, SS[bS++] = 255, gS.setUint32(bS, tS)
        } else if (tS > 0 && tS < 4294967296) {
          let {
            target: gS,
            targetView: bS,
            position: XS
          } = HS(10);
          gS[XS++] = 215, gS[XS++] = 255, bS.setUint32(XS, 4e6 * SS.getMilliseconds() + (tS / 1e3 / 4294967296 | 0)), bS.setUint32(XS + 4, tS)
        } else if (isNaN(tS)) {
          if (this.onInvalidDate) return HS(0), gS(this.onInvalidDate());
          let {
            target: SS,
            targetView: tS,
            position: bS
          } = HS(3);
          SS[bS++] = 212, SS[bS++] = 255, SS[bS++] = 255
        } else {
          let {
            target: gS,
            targetView: bS,
            position: XS
          } = HS(15);
          gS[XS++] = 199, gS[XS++] = 12, gS[XS++] = 255, bS.setUint32(XS, 1e6 * SS.getMilliseconds()), bS.setBigInt64(XS + 4, BigInt(Math.floor(tS)))
        }
      }
    }, {
      pack(SS, HS, gS) {
        if (this.setAsEmptyObject) return HS(0), gS({});
        let tS = Array.from(SS),
          {
            target: bS,
            position: XS
          } = HS(this.moreTypes ? 3 : 0);
        this.moreTypes && (bS[XS++] = 212, bS[XS++] = 115, bS[XS++] = 0), gS(tS)
      }
    }, {
      pack(SS, HS, gS) {
        let {
          target: tS,
          position: bS
        } = HS(this.moreTypes ? 3 : 0);
        this.moreTypes && (tS[bS++] = 212, tS[bS++] = 101, tS[bS++] = 0), gS([SS.name, SS.message, SS.cause])
      }
    }, {
      pack(SS, HS, gS) {
        let {
          target: tS,
          position: bS
        } = HS(this.moreTypes ? 3 : 0);
        this.moreTypes && (tS[bS++] = 212, tS[bS++] = 120, tS[bS++] = 0), gS([SS.source, SS.flags])
      }
    }, {
      pack(SS, HS) {
        this.moreTypes ? yH(SS, 16, HS) : VH(QH ? Buffer.from(SS) : new Uint8Array(SS), HS)
      }
    }, {
      pack(SS, HS) {
        let gS = SS.constructor;
        gS !== wH && this.moreTypes ? yH(SS, gH.indexOf(gS.name), HS) : VH(SS, HS)
      }
    }, {
      pack(SS, HS) {
        let {
          target: gS,
          position: tS
        } = HS(1);
        gS[tS] = 193
      }
    }];
    let pH = new AH({
      useRecords: !1
    });
    const sH = pH.pack,
      BH = pH.pack,
      MH = AH,
      {
        NEVER: FH,
        ALWAYS: RH,
        DECIMAL_ROUND: TH,
        DECIMAL_FIT: oH
      } = aH,
      lH = 512,
      mH = 1024,
      eH = 2048;
    const rH = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!SS || "object" !== typeof SS) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const gS = new dS(HS);
        let tS;
        const bS = SS => {
          let HS;
          tS && (SS = Buffer.concat([tS, SS]), tS = void 0);
          try {
            HS = gS.unpackMultiple(SS)
          } catch (bS) {
            if (!bS.incomplete) throw bS;
            tS = SS.slice(bS.lastPosition), HS = bS.values
          }
          return HS
        };
        return "function" === typeof SS[Symbol.iterator] ? function*() {
          for (const HS of SS) yield* bS(HS)
        }() : "function" === typeof SS[Symbol.asyncIterator] ? async function*() {
          for await (const HS of SS) yield* bS(HS)
        }(): void 0
      },
      Sg = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (SS && "object" === typeof SS) {
          if ("function" === typeof SS[Symbol.iterator]) return function*(SS, HS) {
            const gS = new AH(HS);
            for (const tS of SS) yield gS.pack(tS)
          }(SS, HS);
          if ("function" === typeof SS.then || "function" === typeof SS[Symbol.asyncIterator]) return async function*(SS, HS) {
            const gS = new AH(HS);
            for await (const tS of SS) yield gS.pack(tS)
          }(SS, HS);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Hg = !1,
      gg = !0
  },
  9273: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      $changes: () => jS,
      $childType: () => GS,
      $decoder: () => IS,
      $deleteByIndex: () => aS,
      $encoder: () => uS,
      $filter: () => fS,
      $getByIndex: () => kS,
      $numFields: () => OS,
      $refId: () => NS,
      $track: () => qS,
      $values: () => DS,
      ArraySchema: () => gt,
      Callbacks: () => tb,
      ChangeTree: () => vg,
      CollectionSchema: () => Xt,
      Decoder: () => ot,
      Encoder: () => Mt,
      FieldBuilder: () => qt,
      MapSchema: () => bt,
      Metadata: () => TH,
      OPERATION: () => bS,
      Reflection: () => rt,
      ReflectionField: () => mt,
      ReflectionType: () => et,
      Root: () => Lt,
      Schema: () => vt,
      SetSchema: () => xt,
      StateCallbackStrategy: () => gb,
      StateView: () => it,
      StreamSchema: () => Nt,
      TypeContext: () => UH,
      createPool: () => Xb,
      decode: () => PH,
      decodeKeyValueOperation: () => lg,
      decodeSchemaOperation: () => og,
      defineCustomTypes: () => hH,
      defineTypes: () => Ot,
      deprecated: () => Zt,
      dumpChanges: () => ct,
      encode: () => HH,
      encodeArray: () => Wg,
      encodeIndexedEntry: () => Vg,
      encodeKeyValueOperation: () => ig,
      encodeMapEntry: () => yg,
      encodeSchemaOperation: () => Ag,
      fK: () => Gt,
      fullStateOnly: () => Qt,
      getDecoderStateCallbacks: () => Sb,
      getEncodeDescriptor: () => Sg,
      getRawChangesCallback: () => Hb,
      isBuilder: () => ut,
      patchOnly: () => Pt,
      registerType: () => wH,
      schema: () => dt,
      t: () => Kt,
      type: () => Dt,
      unreliable: () => nt,
      view: () => Ct
    });
    const tS = 255;
    var bS;

    function XS(SS) {
      Object.defineProperty(SS, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(SS) {
      SS[SS.ADD = 128] = "ADD", SS[SS.REPLACE = 0] = "REPLACE", SS[SS.DELETE = 64] = "DELETE", SS[SS.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", SS[SS.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", SS[SS.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", SS[SS.CLEAR = 10] = "CLEAR", SS[SS.REVERSE = 15] = "REVERSE", SS[SS.MOVE = 32] = "MOVE", SS[SS.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", SS[SS.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(bS || (bS = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const xS = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const SS = "colyseus.symbolRegistry",
        HS = xS[SS] || (xS[SS] = Object.create(null));
      Symbol.for = function(SS) {
        return HS[SS] || (HS[SS] = Symbol(SS))
      }, Symbol.keyFor = function(SS) {
        for (const gS in HS)
          if (HS[gS] === SS) return gS
      }
    }
    const NS = Symbol.for("$refId"),
      qS = "~track",
      uS = "~encoder",
      IS = "~decoder",
      fS = "~filter",
      kS = "~getByIndex",
      aS = "~deleteByIndex",
      KS = "~resyncPrune",
      jS = Symbol.for("$changes"),
      GS = Symbol.for("$childType"),
      CS = Symbol.for("$proxyTarget"),
      nS = "~onEncodeEnd",
      PS = "~reset",
      QS = "~onDecodeEnd",
      DS = Symbol.for("$values"),
      wS = "~builder",
      hS = "~descriptors",
      ZS = "~__encodeDescriptor",
      JS = "~encoders",
      OS = "~__numFields",
      dS = "~__refTypeFieldIndexes",
      cS = "~__viewFieldIndexes",
      vS = "$__fieldIndexesByViewTag",
      ES = "~__unreliableFieldIndexes",
      LS = "~__patchOnlyFieldIndexes",
      YS = "~__fullSyncSkipIndexes",
      AS = "~__fullStateOnlyFieldIndexes",
      yS = "~__streamFieldIndexes",
      VS = "~__streamPriorities";
    let iS;
    try {
      iS = new TextEncoder
    } catch (xb) {}
    const WS = new ArrayBuffer(8),
      zS = new Int32Array(WS),
      US = new Float32Array(WS),
      pS = new Float64Array(WS),
      sS = new BigInt64Array(WS),
      BS = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(SS, HS) {
        for (var gS = 0, tS = 0, bS = 0, XS = SS.length; bS < XS; bS++)(gS = SS.charCodeAt(bS)) < 128 ? tS += 1 : gS < 2048 ? tS += 2 : gS < 55296 || gS >= 57344 ? tS += 3 : (bS++, tS += 4);
        return tS
      };

    function MS(SS, HS, gS) {
      for (var tS = 0, bS = 0, XS = HS.length; bS < XS; bS++)(tS = HS.charCodeAt(bS)) < 128 ? SS[gS.offset++] = tS : tS < 2048 ? (SS[gS.offset] = 192 | tS >> 6, SS[gS.offset + 1] = 128 | 63 & tS, gS.offset += 2) : tS < 55296 || tS >= 57344 ? (SS[gS.offset] = 224 | tS >> 12, SS[gS.offset + 1] = 128 | tS >> 6 & 63, SS[gS.offset + 2] = 128 | 63 & tS, gS.offset += 3) : (bS++, tS = 65536 + ((1023 & tS) << 10 | 1023 & HS.charCodeAt(bS)), SS[gS.offset] = 240 | tS >> 18, SS[gS.offset + 1] = 128 | tS >> 12 & 63, SS[gS.offset + 2] = 128 | tS >> 6 & 63, SS[gS.offset + 3] = 128 | 63 & tS, gS.offset += 4)
    }

    function FS(SS, HS, gS) {
      SS[gS.offset++] = 255 & HS
    }

    function RS(SS, HS, gS) {
      SS[gS.offset++] = 255 & HS, SS[gS.offset++] = HS >> 8 & 255
    }

    function TS(SS, HS, gS) {
      SS[gS.offset++] = 255 & HS, SS[gS.offset++] = HS >> 8 & 255
    }

    function oS(SS, HS, gS) {
      SS[gS.offset++] = 255 & HS, SS[gS.offset++] = HS >> 8 & 255, SS[gS.offset++] = HS >> 16 & 255, SS[gS.offset++] = HS >> 24 & 255
    }

    function lS(SS, HS, gS) {
      const tS = HS >> 24,
        bS = HS >> 16,
        XS = HS >> 8,
        xS = HS;
      SS[gS.offset++] = 255 & xS, SS[gS.offset++] = 255 & XS, SS[gS.offset++] = 255 & bS, SS[gS.offset++] = 255 & tS
    }

    function mS(SS, HS, gS) {
      const tS = Math.floor(HS / Math.pow(2, 32));
      lS(SS, HS >>> 0, gS), lS(SS, tS, gS)
    }

    function eS(SS, HS, gS) {
      const tS = HS / Math.pow(2, 32) | 0;
      lS(SS, HS >>> 0, gS), lS(SS, tS, gS)
    }

    function rS(SS, HS, gS) {
      US[0] = HS, oS(SS, zS[0], gS)
    }

    function SH(SS, HS, gS) {
      pS[0] = HS, oS(SS, zS[0], gS), oS(SS, zS[1], gS)
    }
    const HH = {
        int8: FS,
        uint8: function(SS, HS, gS) {
          SS[gS.offset++] = 255 & HS
        },
        int16: RS,
        uint16: TS,
        int32: oS,
        uint32: lS,
        int64: mS,
        uint64: eS,
        bigint64: function(SS, HS, gS) {
          sS[0] = BigInt.asIntN(64, HS), oS(SS, zS[0], gS), oS(SS, zS[1], gS)
        },
        biguint64: function(SS, HS, gS) {
          sS[0] = BigInt.asIntN(64, HS), oS(SS, zS[0], gS), oS(SS, zS[1], gS)
        },
        float32: rS,
        float64: SH,
        boolean: function(SS, HS, gS) {
          SS[gS.offset++] = HS ? 1 : 0
        },
        string: function(SS, HS, gS) {
          HS || (HS = "");
          let tS = BS(HS, "utf8"),
            bS = 0;
          if (tS < 32) SS[gS.offset++] = 160 | tS, bS = 1;
          else if (tS < 256) SS[gS.offset++] = 217, SS[gS.offset++] = tS, bS = 2;
          else if (tS < 65536) SS[gS.offset++] = 218, TS(SS, tS, gS), bS = 3;
          else {
            if (!(tS < 4294967296)) throw new Error("String too long");
            SS[gS.offset++] = 219, lS(SS, tS, gS), bS = 5
          }
          return MS(SS, HS, gS), bS + tS
        },
        number: function SS(HS, gS, tS) {
          return isNaN(gS) ? SS(HS, 0, tS) : isFinite(gS) ? gS !== (0 | gS) ? Math.abs(gS) <= 34028235e31 && (US[0] = gS, Math.abs(Math.abs(US[0]) - Math.abs(gS)) < 1e-4) ? (HS[tS.offset++] = 202, rS(HS, gS, tS), 5) : (HS[tS.offset++] = 203, SH(HS, gS, tS), 9) : gS >= 0 ? gS < 128 ? (HS[tS.offset++] = 255 & gS, 1) : gS < 256 ? (HS[tS.offset++] = 204, HS[tS.offset++] = 255 & gS, 2) : gS < 65536 ? (HS[tS.offset++] = 205, TS(HS, gS, tS), 3) : gS < 4294967296 ? (HS[tS.offset++] = 206, lS(HS, gS, tS), 5) : (HS[tS.offset++] = 207, eS(HS, gS, tS), 9) : gS >= -32 ? (HS[tS.offset++] = 224 | gS + 32, 1) : gS >= -128 ? (HS[tS.offset++] = 208, FS(HS, gS, tS), 2) : gS >= -32768 ? (HS[tS.offset++] = 209, RS(HS, gS, tS), 3) : gS >= -2147483648 ? (HS[tS.offset++] = 210, oS(HS, gS, tS), 5) : (HS[tS.offset++] = 211, mS(HS, gS, tS), 9) : SS(HS, gS > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, tS)
        },
        utf8Write: MS,
        utf8Length: BS
      },
      gH = new ArrayBuffer(8),
      tH = new Int32Array(gH),
      bH = new Float32Array(gH),
      XH = new Float64Array(gH),
      xH = new BigUint64Array(gH),
      NH = new BigInt64Array(gH);

    function qH(SS, HS, gS) {
      gS > SS.length - HS.offset && (gS = SS.length - HS.offset);
      for (var tS = "", bS = 0, XS = HS.offset, xS = HS.offset + gS; XS < xS; XS++) {
        var NS = SS[XS];
        if (0 !== (128 & NS))
          if (192 !== (224 & NS))
            if (224 !== (240 & NS)) {
              if (240 !== (248 & NS)) {
                console.error("decode.utf8Read(): Invalid byte " + NS + " at offset " + XS + ". Skip to end of string: " + (HS.offset + gS));
                break
              }(bS = (7 & NS) << 18 | (63 & SS[++XS]) << 12 | (63 & SS[++XS]) << 6 | 63 & SS[++XS]) >= 65536 ? (bS -= 65536, tS += String.fromCharCode(55296 + (bS >>> 10), 56320 + (1023 & bS))) : tS += String.fromCharCode(bS)
            } else tS += String.fromCharCode((15 & NS) << 12 | (63 & SS[++XS]) << 6 | 63 & SS[++XS]);
        else tS += String.fromCharCode((31 & NS) << 6 | 63 & SS[++XS]);
        else tS += String.fromCharCode(NS)
      }
      return HS.offset += gS, tS
    }

    function uH(SS, HS) {
      return IH(SS, HS) << 24 >> 24
    }

    function IH(SS, HS) {
      return SS[HS.offset++]
    }

    function fH(SS, HS) {
      return kH(SS, HS) << 16 >> 16
    }

    function kH(SS, HS) {
      return SS[HS.offset++] | SS[HS.offset++] << 8
    }

    function aH(SS, HS) {
      return SS[HS.offset++] | SS[HS.offset++] << 8 | SS[HS.offset++] << 16 | SS[HS.offset++] << 24
    }

    function KH(SS, HS) {
      return aH(SS, HS) >>> 0
    }

    function jH(SS, HS) {
      return tH[0] = aH(SS, HS), bH[0]
    }

    function GH(SS, HS) {
      return tH[0] = aH(SS, HS), tH[1] = aH(SS, HS), XH[0]
    }

    function CH(SS, HS) {
      const gS = KH(SS, HS);
      return aH(SS, HS) * Math.pow(2, 32) + gS
    }

    function nH(SS, HS) {
      const gS = KH(SS, HS);
      return KH(SS, HS) * Math.pow(2, 32) + gS
    }
    const PH = {
        utf8Read: qH,
        int8: uH,
        uint8: IH,
        int16: fH,
        uint16: kH,
        int32: aH,
        uint32: KH,
        float32: jH,
        float64: GH,
        int64: CH,
        uint64: nH,
        bigint64: function(SS, HS) {
          return tH[0] = aH(SS, HS), tH[1] = aH(SS, HS), NH[0]
        },
        biguint64: function(SS, HS) {
          return tH[0] = aH(SS, HS), tH[1] = aH(SS, HS), xH[0]
        },
        boolean: function(SS, HS) {
          return IH(SS, HS) > 0
        },
        string: function(SS, HS) {
          const gS = SS[HS.offset++];
          let tS;
          return gS < 192 ? tS = 31 & gS : 217 === gS ? tS = IH(SS, HS) : 218 === gS ? tS = kH(SS, HS) : 219 === gS && (tS = KH(SS, HS)), qH(SS, HS, tS)
        },
        number: function(SS, HS) {
          const gS = SS[HS.offset++];
          return gS < 128 ? gS : 202 === gS ? jH(SS, HS) : 203 === gS ? GH(SS, HS) : 204 === gS ? IH(SS, HS) : 205 === gS ? kH(SS, HS) : 206 === gS ? KH(SS, HS) : 207 === gS ? nH(SS, HS) : 208 === gS ? uH(SS, HS) : 209 === gS ? fH(SS, HS) : 210 === gS ? aH(SS, HS) : 211 === gS ? CH(SS, HS) : gS > 223 ? -1 * (255 - gS + 1) : void 0
        },
        stringCheck: function(SS, HS) {
          const gS = SS[HS.offset];
          return gS < 192 && gS > 160 || 217 === gS || 218 === gS || 219 === gS
        }
      },
      QH = {},
      DH = new Map;

    function wH(SS, HS) {
      HS.constructor && (Object.prototype.hasOwnProperty.call(HS, "constructor") && null == HS.constructor[Symbol.metadata] && XS(HS.constructor), DH.set(HS.constructor, SS), QH[SS] = HS), HS.encode && (HH[SS] = HS.encode), HS.decode && (PH[SS] = HS.decode)
    }

    function hH(SS) {
      for (const HS in SS) wH(HS, SS[HS]);
      return SS => Dt(SS)
    }
    const ZH = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function JH() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function OH(SS) {
      return SS._stream ??= JH()
    }

    function dH(SS, HS, gS) {
      0 === HS.activeViews.size && OH(SS).broadcastPending.add(gS)
    }

    function cH(SS, HS, gS, tS) {
      const XS = SS._stream;
      if (void 0 === XS) return !0;
      let xS = !1;
      return XS.broadcastPending.delete(tS) ? xS = !0 : XS.sentBroadcast.delete(tS) && XS.broadcastDeletes.add(tS), HS.forEachActiveView((SS => {
        const HS = XS.pendingByView.get(SS.id);
        if (HS?.has(tS)) return HS.delete(tS), void(xS = !0);
        const NS = XS.sentByView.get(SS.id);
        if (NS?.has(tS)) {
          NS.delete(tS);
          let HS = SS.changes.get(gS);
          void 0 === HS && (HS = new Map, SS.changes.set(gS, HS)), HS.set(tS, bS.DELETE)
        }
      })), xS
    }

    function vH(SS, HS) {
      const gS = SS._stream?.pendingByView;
      if (void 0 === gS) return !1;
      for (const [tS, bS] of gS)
        if (bS.size > 0 && void 0 !== HS.activeViews.get(tS)?.deref()) return !0;
      return !1
    }

    function EH(SS) {
      const HS = SS._stream;
      return void 0 !== HS && (HS.broadcastPending.size > 0 || HS.broadcastDeletes.size > 0)
    }

    function LH(SS, HS, gS) {
      const tS = OH(SS);
      let bS = tS.pendingByView.get(HS);
      void 0 === bS && (bS = new Set, tS.pendingByView.set(HS, bS)), bS.add(gS)
    }

    function YH(SS, HS) {
      const gS = SS._stream;
      void 0 !== gS && (gS.pendingByView.delete(HS), gS.sentByView.delete(HS), gS.priorityByView?.delete(HS))
    }
    const AH = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function yH(SS) {
      if (null == SS || "object" !== typeof SS) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: HS,
        max: gS
      } = SS;
      if ("number" !== typeof HS || "number" !== typeof gS || !(gS > HS) || !Number.isFinite(HS) || !Number.isFinite(gS)) throw new Error(`t.quantized(): require finite min < max (got min=${HS}, max=${gS}).`);
      const tS = SS.bits ?? 16;
      if (8 !== tS && 16 !== tS && 32 !== tS) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${tS}).`);
      const bS = SS.mode ?? "clamp";
      if ("clamp" !== bS && "wrap" !== bS) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(bS)}).`);
      const XS = "wrap" === bS,
        xS = Math.pow(2, tS);
      return {
        min: HS,
        max: gS,
        bits: tS,
        wrap: XS,
        wire: AH[tS],
        range: gS - HS,
        span: XS ? xS : HS === -gS ? xS - 2 : xS - 1
      }
    }

    function VH(SS) {
      return null !== SS && "object" === typeof SS && void 0 !== SS.quantized
    }

    function iH(SS, HS) {
      if (SS.wrap) {
        if (!Number.isFinite(HS)) return 0;
        const gS = SS.range;
        let tS = (HS - SS.min) % gS;
        tS < 0 && (tS += gS);
        const bS = SS.span;
        return Math.floor(tS / gS * bS + .5) % bS
      }
      if (HS !== HS) return 0;
      const gS = HS < SS.min ? SS.min : HS > SS.max ? SS.max : HS;
      return Math.floor((gS - SS.min) / SS.range * SS.span + .5)
    }

    function WH(SS, HS) {
      return SS.min + HS / SS.span * SS.range
    }

    function zH(SS) {
      const HS = HH[SS.wire];
      return (gS, tS, bS) => HS(gS, iH(SS, tS), bS)
    }
    class UH {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(SS) {
        const HS = Object.getPrototypeOf(SS);
        if (HS !== vt) {
          let gS = UH.inheritedTypes.get(HS);
          gS || (gS = new Set, UH.inheritedTypes.set(HS, gS)), gS.add(SS)
        }
      }
      static cache(SS) {
        let HS = UH.cachedContexts.get(SS);
        return HS || (HS = new UH(SS), UH.cachedContexts.set(SS, HS)), HS
      }
      constructor(SS) {
        SS && this.discoverTypes(SS)
      }
      has(SS) {
        return this.schemas.has(SS)
      }
      get(SS) {
        return this.types[SS]
      }
      add(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(SS) && (this.types[HS] = SS, null == SS[Symbol.metadata] && TH.initialize(SS), this.schemas.set(SS, HS), !0)
      }
      getTypeId(SS) {
        return this.schemas.get(SS)
      }
      discoverTypes(SS) {
        if (!this.add(SS)) return;
        UH.inheritedTypes.get(SS)?.forEach((SS => {
          this.discoverTypes(SS)
        }));
        let HS = SS;
        for (;
          (HS = Object.getPrototypeOf(HS)) && HS !== vt && HS !== Function.prototype;) this.discoverTypes(HS);
        const gS = SS[Symbol.metadata];
        (gS[cS] || gS[yS]) && (this.hasFilters = !0);
        for (const tS in gS) {
          const SS = gS[tS].type;
          if ("string" !== typeof SS && !VH(SS))
            if ("function" === typeof SS) this.discoverTypes(SS);
            else {
              const HS = Object.values(SS)[0];
              if ("string" === typeof HS) continue;
              this.discoverTypes(HS)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function pH(SS) {
      const HS = BH(SS);
      return HS ? {
        complexTypeKlass: QH[HS],
        childType: SS[HS]
      } : {
        complexTypeKlass: !1,
        childType: SS
      }
    }

    function sH(SS, HS) {
      const gS = MH(SS),
        tS = BH(gS),
        bS = tS && BH(gS[tS]);
      if (bS) throw new Error(`${HS?`${HS}: `:""}@colyseus/schema: nested collections are not supported ("${tS}" of "${bS}"). Collections can only hold primitive types or Schema classes, wrap the inner ${bS} in a Schema class.`);
      return gS
    }

    function BH(SS) {
      return "object" === typeof SS && null !== SS ? Object.keys(SS).find((SS => void 0 !== QH[SS])) : void 0
    }

    function MH(SS) {
      if ("object" !== typeof SS || null === SS) return SS;
      if (Array.isArray(SS)) return {
        array: MH(SS[0])
      };
      const HS = function(SS) {
        const HS = Object.keys(SS),
          gS = HS.filter((SS => /\d+/.test(SS)));
        if (gS.length > 0 && gS.length === HS.length / 2 && SS[SS[gS[0]]] == gS[0]) return "number";
        if (HS.length > 0 && HS.every((HS => SS[HS] === HS))) return "string"
      }(SS);
      if (HS) return HS;
      if (VH(SS)) return "string" === typeof SS.quantized.wire ? SS : {
        quantized: yH(SS.quantized)
      };
      if (void 0 !== SS.type) return MH(SS.type);
      const gS = BH(SS);
      return gS && (SS[gS] = MH(SS[gS])), SS
    }
    const FH = [dS, ES, LS, YS, AS, yS, JS];

    function RH(SS, HS, gS) {
      SS[HS] || Object.defineProperty(SS, HS, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), SS[HS].push(gS)
    }
    const TH = {
        addField(SS, HS, gS, tS, bS) {
          if (HS >= 63) throw new Error(`Can't define field '${gS}'.\nSchema instances may only have up to 63 fields.`);
          SS[HS] = Object.assign(SS[HS] || {}, {
            type: tS,
            index: HS,
            name: gS
          }), Object.defineProperty(SS, hS, {
            value: SS[hS] || {},
            enumerable: !1,
            configurable: !0
          }), SS[hS][gS] = bS || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(SS, OS, {
            value: HS,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(SS, gS, {
            value: HS,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof SS[HS].type || VH(SS[HS].type) || (void 0 === SS[dS] && Object.defineProperty(SS, dS, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), SS[dS].push(HS));
          const XS = SS[HS].type;
          if (XS && "object" === typeof XS && void 0 !== XS.stream) {
            if (void 0 !== XS.array) throw new Error(ZH);
            SS[HS].stream = !0, SS[yS] || Object.defineProperty(SS, yS, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), SS[yS].includes(HS) || SS[yS].push(HS);
            const bS = tS?.priority;
            "function" === typeof bS && TH.setStreamPriority(SS, gS, bS)
          }
        },
        setTag(SS, HS, gS) {
          const tS = SS[HS];
          if (SS[tS].tag = gS, SS[cS] || (Object.defineProperty(SS, cS, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(SS, vS, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), SS[cS].push(tS), gS < 0) SS[vS][gS] || (SS[vS][gS] = []), SS[vS][gS].push(tS);
          else
            for (let bS = gS; bS > 0; bS &= bS - 1) {
              const HS = bS & -bS;
              SS[vS][HS] || (SS[vS][HS] = []), SS[vS][HS].push(tS)
            }
        },
        setUnreliable(SS, HS) {
          const gS = SS[HS];
          if ("string" !== typeof SS[gS].type) throw new Error(`@unreliable cannot be applied to ref-type field "${HS}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          SS[gS].unreliable = !0, SS[ES] || Object.defineProperty(SS, ES, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), SS[ES].push(gS)
        },
        setPatchOnly(SS, HS) {
          const gS = SS[HS];
          if (SS[gS].fullStateOnly) throw new Error(`field "${HS}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          SS[gS].patchOnly = !0, RH(SS, LS, gS), RH(SS, YS, gS)
        },
        setDeprecated(SS, HS) {
          const gS = SS[HS];
          SS[gS].deprecated = !0, RH(SS, YS, gS), Object.defineProperty(SS, gS, {
            value: SS[gS],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(SS, HS) {
          const gS = SS[HS];
          if (SS[gS].patchOnly) throw new Error(`field "${HS}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          SS[gS].fullStateOnly = !0, RH(SS, AS, gS)
        },
        setStream(SS, HS) {
          const gS = SS[HS];
          SS[gS].stream = !0, SS[yS] || Object.defineProperty(SS, yS, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), SS[yS].push(gS)
        },
        setStreamPriority(SS, HS, gS) {
          const tS = SS[HS];
          SS[VS] || Object.defineProperty(SS, VS, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), SS[VS][tS] = gS
        },
        getStreamPriority: (SS, HS) => SS?.[VS]?.[HS],
        defineField(SS, HS, gS, tS, bS) {
          const XS = sH(bS, `${SS.name}.${tS}`),
            {
              complexTypeKlass: xS,
              childType: NS
            } = pH(XS);
          TH.addField(HS, gS, tS, XS, ht(tS, gS, NS, xS)), HS[hS][tS] && Object.defineProperty(SS.prototype, tS, HS[hS][tS]), ("string" === typeof XS || VH(XS)) && (HS[JS] || Object.defineProperty(HS, JS, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), HS[JS][gS] = "string" === typeof XS ? HH[XS] : zH(XS.quantized))
        },
        setFields(SS, HS) {
          const gS = SS.prototype.constructor;
          UH.register(gS);
          const tS = Object.getPrototypeOf(gS),
            bS = tS && tS[Symbol.metadata],
            XS = TH.initialize(gS);
          gS[qS] || (gS[qS] = vt[qS]), gS[uS] || (gS[uS] = vt[uS]), gS[IS] || (gS[IS] = vt[IS]), gS.prototype.toJSON || (gS.prototype.toJSON = vt.prototype.toJSON);
          let xS = XS[OS] ?? (bS && bS[OS]) ?? -1;
          xS++, XS[JS] || Object.defineProperty(XS, JS, {
            value: bS?.[JS] ? [...bS[JS]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const NS in HS) {
            if (void 0 !== XS[NS]) throw new Error(`@colyseus/schema: Duplicate '${NS}' definition on '${gS.name||"(anonymous)"}'.`);
            TH.defineField(gS, XS, xS, NS, HS[NS]), xS++
          }
          return SS
        },
        isDeprecated: (SS, HS) => !0 === SS[HS].deprecated,
        initialize(SS) {
          const HS = Object.getPrototypeOf(SS),
            gS = HS[Symbol.metadata];
          let tS = SS[Symbol.metadata] ?? Object.create(null);
          if (HS !== vt && tS === gS && (tS = Object.create(null), gS)) {
            Object.setPrototypeOf(tS, gS), Object.defineProperty(tS, OS, {
              value: gS[OS],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== gS[cS] && (Object.defineProperty(tS, cS, {
              value: [...gS[cS]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(tS, vS, {
              value: {
                ...gS[vS]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const SS of FH) {
              const HS = gS[SS];
              void 0 !== HS && Object.defineProperty(tS, SS, {
                value: [...HS],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(tS, hS, {
              value: {
                ...gS[hS]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(SS, Symbol.metadata, {
            value: tS,
            writable: !1,
            configurable: !0
          }), tS
        },
        isValidInstance: SS => SS.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(SS.constructor[Symbol.metadata], OS),
        getFields(SS) {
          const HS = SS[Symbol.metadata],
            gS = {};
          for (let tS = 0; tS <= HS[OS]; tS++) gS[HS[tS].name] = HS[tS].type;
          return gS
        },
        hasViewTagAtIndex: (SS, HS) => SS?.[cS]?.includes(HS),
        hasUnreliableAtIndex: (SS, HS) => SS?.[ES]?.includes(HS),
        hasPatchOnlyAtIndex: (SS, HS) => SS?.[LS]?.includes(HS),
        hasFullStateOnlyAtIndex: (SS, HS) => SS?.[AS]?.includes(HS),
        hasStreamAtIndex: (SS, HS) => SS?.[yS]?.includes(HS)
      },
      oH = (SS, HS, gS) => SS(HS, gS);
    class lH {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(SS) {
        this.ops = new Uint8Array(Math.max(SS + 1, 1))
      }
      record(SS, HS) {
        const gS = this.ops[SS];
        0 === gS ? this.ops[SS] = HS : (gS === bS.DELETE || gS === bS.ADD && HS === bS.DELETE_AND_ADD) && (this.ops[SS] = bS.DELETE_AND_ADD), SS < 32 ? this.dirtyLow |= 1 << SS : this.dirtyHigh |= 1 << SS - 32
      }
      recordDelete(SS, HS) {
        this.ops[SS] = HS, SS < 32 ? this.dirtyLow |= 1 << SS : this.dirtyHigh |= 1 << SS - 32
      }
      recordRaw(SS, HS) {
        this.record(SS, HS)
      }
      operationAt(SS) {
        const HS = this.ops[SS];
        return 0 === HS ? void 0 : HS
      }
      setOperationAt(SS, HS) {
        this.ops[SS] = HS
      }
      forEach(SS) {
        this.forEachWithCtx(SS, oH)
      }
      forEachWithCtx(SS, HS) {
        let gS = this.dirtyLow,
          tS = this.dirtyHigh;
        const bS = this.ops;
        for (; 0 !== gS;) {
          const tS = gS & -gS,
            XS = 31 - Math.clz32(tS);
          gS ^= tS, HS(SS, XS, bS[XS])
        }
        for (; 0 !== tS;) {
          const gS = tS & -tS,
            XS = 31 - Math.clz32(gS) + 32;
          tS ^= gS, HS(SS, XS, bS[XS])
        }
      }
      size() {
        return eH(this.dirtyLow) + eH(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class mH {
      pK = new Map;
      pureOps = [];
      record(SS, HS) {
        const gS = this.pK.get(SS);
        void 0 === gS ? this.pK.set(SS, HS) : (gS === bS.DELETE || gS === bS.ADD && HS === bS.DELETE_AND_ADD) && this.pK.set(SS, bS.DELETE_AND_ADD)
      }
      recordDelete(SS, HS) {
        this.pK.set(SS, HS)
      }
      recordRaw(SS, HS) {
        this.pK.set(SS, HS)
      }
      recordPure(SS) {
        this.pureOps.push([this.pK.size, SS])
      }
      operationAt(SS) {
        return this.pK.get(SS)
      }
      setOperationAt(SS, HS) {
        this.pK.has(SS) && this.pK.set(SS, HS)
      }
      forEach(SS) {
        this.forEachWithCtx(SS, oH)
      }
      forEachWithCtx(SS, HS) {
        const gS = this.pureOps;
        if (gS.length > 0) {
          let tS = 0,
            bS = 0;
          for (const [XS, xS] of this.pK) {
            for (; tS < gS.length && gS[tS][0] <= bS;) {
              const bS = gS[tS++][1];
              HS(SS, -bS, bS)
            }
            HS(SS, XS, xS), bS++
          }
          for (; tS < gS.length;) {
            const bS = gS[tS++][1];
            HS(SS, -bS, bS)
          }
        } else
          for (const [tS, bS] of this.pK) HS(SS, tS, bS)
      }
      size() {
        return this.pK.size + this.pureOps.length
      }
      has() {
        return this.pK.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.pK.clear(), this.pureOps.length = 0
      }
      shift(SS) {
        const HS = new Map;
        for (const [gS, tS] of this.pK) HS.set(gS + SS, tS);
        this.pK = HS
      }
    }

    function eH(SS) {
      return 16843009 * ((SS = (858993459 & (SS -= SS >>> 1 & 1431655765)) + (SS >>> 2 & 858993459)) + (SS >>> 4) & 252645135) >>> 24
    }

    function rH(SS) {
      if (void 0 === SS) return 0;
      let HS = 0;
      for (let gS = 0, tS = SS.length; gS < tS; gS++) {
        const tS = SS[gS];
        tS < 32 && (HS |= 1 << tS)
      }
      return HS
    }

    function Sg(SS) {
      const HS = SS.constructor;
      if (Object.prototype.hasOwnProperty.call(HS, ZS)) return HS[ZS];
      const gS = HS[Symbol.metadata],
        tS = TH.isValidInstance(SS),
        bS = (gS?.[cS]?.length ?? 0) > 0,
        XS = function(SS) {
          const HS = [],
            gS = [],
            tS = [],
            bS = [],
            XS = SS?.[OS];
          if (void 0 === XS) return {
            names: HS,
            types: gS,
            tags: tS,
            encoders: bS
          };
          const xS = SS[JS];
          for (let NS = 0; NS <= XS; NS++) {
            const XS = SS[NS];
            void 0 !== XS ? (HS[NS] = XS.name, gS[NS] = XS.type, tS[NS] = XS.tag, bS[NS] = xS?.[NS]) : (HS[NS] = void 0, gS[NS] = void 0, tS[NS] = void 0, bS[NS] = void 0)
          }
          return {
            names: HS,
            types: gS,
            tags: tS,
            encoders: bS
          }
        }(gS),
        xS = tS && !bS ? void 0 : HS[fS],
        NS = {
          encoder: HS[uS],
          filter: xS,
          metadata: gS,
          isSchema: tS,
          filterBitmask: tS ? rH(gS?.[cS]) : 0,
          hasAnyFullStateOnly: (gS?.[AS]?.length ?? 0) > 0,
          hasAnyUnreliable: (gS?.[ES]?.length ?? 0) > 0,
          hasAnyStream: (gS?.[yS]?.length ?? 0) > 0,
          hasAnyView: bS,
          fullStateOnlyBitmask: rH(gS?.[AS]),
          unreliableBitmask: rH(gS?.[ES]),
          streamBitmask: rH(gS?.[yS]),
          names: XS.names,
          types: XS.types,
          tags: XS.tags,
          encoders: XS.encoders
        };
      return Object.defineProperty(HS, ZS, {
        value: NS,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), NS
    }

    function Hg(SS, HS) {
      if (void 0 !== SS.parentRef && HS(SS.parentRef, SS._parentIndex)) return !0;
      for (let gS = SS.extraParents; void 0 !== gS; gS = gS.next)
        if (HS(gS.ref, gS.index)) return !0;
      return !1
    }
    const gg = (SS, HS) => {
        SS.isFieldUnreliable(HS) ? SS.ensureUnreliableRecorder().record(HS, bS.ADD) : SS.record(HS, bS.ADD)
      },
      tg = (SS, HS) => SS(HS);

    function bg(SS, HS, gS) {
      const tS = SS.refTarget;
      if (void 0 !== tS[GS]) {
        if (SS.isPatchOnly) return;
        if (Array.isArray(tS.items)) {
          const SS = tS.items;
          for (let tS = 0, bS = SS.length; tS < bS; tS++) void 0 !== SS[tS] && gS(HS, tS)
        } else if (void 0 !== tS.journal)
          for (const [SS, bS] of tS.journal.keyByIndex) tS.$items.has(bS) && gS(HS, SS);
        else if (void 0 !== tS.$items)
          for (const SS of tS.$items.keys()) gS(HS, SS)
      } else {
        const bS = SS.metadata;
        if (!bS) return;
        const XS = bS[OS] ?? -1,
          xS = bS[YS],
          NS = SS.encDescriptor.names;
        for (let SS = 0; SS <= XS; SS++) {
          const bS = NS[SS];
          if (void 0 === bS) continue;
          if (xS && xS.includes(SS)) continue;
          const XS = tS[bS];
          void 0 !== XS && null !== XS && gS(HS, SS)
        }
      }
    }

    function Xg(SS, HS, gS, tS) {
      ! function(SS, HS, gS) {
        if (!HS) return;
        const tS = HS[jS],
          bS = !tS._isSchema;
        let XS;
        bS ? (HS = tS.parent, gS = tS.parentIndex, XS = HS?.[jS].metadata) : XS = tS.metadata;
        const xS = (XS?.[LS]?.includes(gS) ? Zg : 0) | (XS?.[AS]?.includes(gS) ? Jg : 0),
          NS = tS.flags & cg | xS,
          qS = SS.flags;
        SS.flags = qS | NS;
        NS & ~qS & Jg && (SS.reset(), SS.unreliableRecorder?.reset());
        const uS = SS.root?.types;
        if (!uS?.hasFilters) return;
        const IS = XS?.[cS]?.includes(gS) ?? !1,
          fS = XS?.[yS]?.includes(gS) ?? !1,
          kS = tS.isFiltered || IS || fS;
        if (SS.isFiltered = kS, fS && !bS) {
          SS.isStreamCollection = !0;
          const HS = OH(SS.ref);
          if (void 0 === HS.priority) {
            const SS = TH.getStreamPriority(XS, gS);
            void 0 !== SS && (HS.priority = SS)
          }
          SS.root?.registerStream(SS.ref)
        }
        if (kS) {
          const HS = Ng(SS);
          SS.isVisibilitySharedWithParent = tS.isFiltered && HS && !fS && (!IS || bS && XS[gS].tag !== jt)
        }
      }(SS, HS, gS), SS.isFullStateOnly || (SS.has() && SS.root?.enqueueChangeTree(SS), SS.unreliableRecorder?.has() && SS.root?.enqueueUnreliable(SS), SS.has() || SS.unreliableRecorder?.has() || SS.root?.enqueueChangeTree(SS))
    }

    function xg(SS) {
      const HS = SS.pendingFilterRefresh;
      for (let gS = 0; gS < HS.length; gS++) {
        const SS = HS[gS];
        0 !== (SS.flags & dg) && qg(SS)
      }
      HS.length = 0
    }

    function Ng(SS) {
      return SS._isSchema || "string" !== typeof SS.refTarget[GS]
    }

    function qg(SS) {
      SS.flags &= ~dg;
      const HS = SS.root;
      if (void 0 === HS || void 0 === SS.parentRef) return;
      const gS = Ng(SS);
      let tS = ag(SS, SS.parentRef, SS._parentIndex, gS);
      for (let XS = SS.extraParents; void 0 !== XS && tS !== kg; XS = XS.next) tS |= ag(SS, XS.ref, XS.index, gS);
      if (0 === tS) return;
      SS.isVisibilitySharedWithParent = 0 !== (tS & fg);
      const bS = 0 === (tS & Ig);
      bS !== SS.isFiltered && (SS.isFiltered = bS, bS || SS.isFullStateOnly || (SS.forEachLiveWithCtx(SS, gg), SS.has() && HS.enqueueChangeTree(SS), SS.unreliableRecorder?.has() && HS.enqueueUnreliable(SS)), SS.forEachChildWithCtx(SS, Kg))
    }
    const ug = 1,
      Ig = 2,
      fg = 4,
      kg = ug | Ig | fg;

    function ag(SS, HS, gS, tS) {
      const bS = HS[jS];
      if (bS.root !== SS.root || ! function(SS, HS, gS) {
          const tS = HS.refTarget;
          if (HS.isArray) {
            const HS = tS.items,
              bS = HS[gS];
            if (void 0 !== bS && bS[jS] === SS) return !0;
            for (let gS = 0, tS = HS.length; gS < tS; gS++) {
              const tS = HS[gS];
              if (void 0 !== tS && tS[jS] === SS) return !0
            }
            return !1
          }
          const bS = HS.getValue(gS);
          return void 0 !== bS && bS[jS] === SS
        }(SS, bS, gS)) return 0;
      bS.flags & dg && qg(bS);
      let XS = ug;
      if (bS._isSchema) {
        void 0 !== bS.encDescriptor.tags[gS] || bS.isFieldStream(gS) || (bS.isFiltered ? tS && (XS |= fg) : XS |= Ig)
      } else if (bS.isFiltered) {
        if (tS && !bS.isStreamCollection) {
          const SS = bS.parent?.[jS];
          (SS?._isSchema ? SS.encDescriptor.tags[bS.parentIndex] : void 0) !== jt && (XS |= fg)
        }
      } else XS |= Ig;
      return XS
    }
    const Kg = (SS, HS, gS) => {
      qg(HS)
    };

    function jg(SS, HS, gS, tS) {
      if (SS.addParent(HS, tS), !gS) return;
      const bS = gS.add(SS);
      gS !== SS.root && (SS.root = gS, Xg(SS, HS, tS));
      const XS = HS?.[jS];
      if (void 0 !== XS && void 0 !== XS.subscribedViews && void 0 !== HS[GS] && function(SS, HS, gS, tS) {
          const bS = SS.subscribedViews;
          if (void 0 === bS) return;
          const XS = SS.isStreamCollection,
            xS = XS ? SS.ref : void 0,
            NS = XS ? void 0 : gS[jS];
          for (let qS = 0, uS = bS.length; qS < uS; qS++) {
            let SS = bS[qS];
            for (; 0 !== SS;) {
              const gS = SS & -SS;
              SS ^= gS;
              const uS = 32 * qS + (31 - Math.clz32(gS)),
                IS = tS.activeViews.get(uS),
                fS = IS?.deref();
              void 0 !== fS ? XS ? LH(xS, uS, HS) : void 0 !== NS && fS.markVisible(NS) : bS[qS] &= ~gS
            }
          }
        }(XS, tS, SS.ref, gS), bS) {
        let HS = Pg[Qg];
        void 0 === HS && (HS = {
          parentRef: void 0,
          root: void 0
        }, Pg[Qg] = HS), HS.parentRef = SS.ref, HS.root = gS, Qg++, Cg(SS, HS, Dg), Qg--
      }
    }

    function Gg(SS, HS, gS) {
      SS(HS, gS)
    }

    function Cg(SS, HS, gS) {
      const tS = SS.refTarget;
      if (tS[GS]) {
        if ("string" !== typeof tS[GS]) {
          const SS = tS.items;
          if (void 0 !== SS)
            for (let tS = 0, bS = SS.length; tS < bS; tS++) {
              const bS = SS[tS];
              bS && gS(HS, bS[jS], tS)
            } else {
              const SS = tS.$items,
                bS = tS._collectionIndexes;
              for (const tS of SS.keys()) {
                const XS = SS.get(tS);
                XS && gS(HS, XS[jS], bS?.[tS] ?? tS)
              }
            }
        }
      } else {
        const bS = SS.metadata,
          XS = bS?.[dS];
        if (!XS) return;
        const xS = SS.encDescriptor.names;
        for (let SS = 0, NS = XS.length; SS < NS; SS++) {
          const bS = XS[SS],
            NS = tS[xS[bS]];
          NS && gS(HS, NS[jS], bS)
        }
      }
    }

    function ng(SS, HS, gS) {
      HS.root !== SS ? HS.setRoot(SS) : SS.add(HS)
    }
    const Pg = [];
    let Qg = 0;

    function Dg(SS, HS, gS) {
      if (HS.root === SS.root) return SS.root.add(HS), void SS.root.moveNextToParent(HS);
      HS.setParent(SS.parentRef, SS.root, gS)
    }

    function wg(SS, HS, gS) {
      const tS = (3 & gS) << 3;
      return gS < 4 ? SS >>> tS & 255 : HS >>> tS & 255
    }
    const hg = (SS, HS, gS) => SS(HS, gS);
    const Zg = 16,
      Jg = 32,
      Og = 128,
      dg = 256,
      cg = Zg | Jg;
    class vg {
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
      set isFiltered(SS) {
        this.flags = SS ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(SS) {
        this.flags = SS ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(SS) {
        this.flags = SS ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(SS) {
        this.flags = SS ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & Zg)
      }
      set isPatchOnly(SS) {
        this.flags = SS ? this.flags | Zg : this.flags & ~Zg
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & Jg)
      }
      set isFullStateOnly(SS) {
        this.flags = SS ? this.flags | Jg : this.flags & ~Jg
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(SS) {
        this.flags = SS ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Og)
      }
      set needsRestage(SS) {
        this.flags = SS ? this.flags | Og : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new lH(this.metadata?.[OS] ?? 0) : new mH), this.unreliableRecorder
      }
      isFieldUnreliable(SS) {
        const HS = this.encDescriptor;
        return !!HS.hasAnyUnreliable && (SS < 32 ? 0 !== (HS.unreliableBitmask & 1 << SS) : TH.hasUnreliableAtIndex(this.metadata, SS))
      }
      isFieldFullStateOnly(SS) {
        if (this.isFullStateOnly) return !0;
        const HS = this.encDescriptor;
        return !!HS.hasAnyFullStateOnly && (SS < 32 ? 0 !== (HS.fullStateOnlyBitmask & 1 << SS) : TH.hasFullStateOnlyAtIndex(this.metadata, SS))
      }
      isFieldStream(SS) {
        const HS = this.encDescriptor;
        return !!HS.hasAnyStream && (SS < 32 ? 0 !== (HS.streamBitmask & 1 << SS) : TH.hasStreamAtIndex(this.metadata, SS))
      }
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS;
        this.ref = SS, this.refTarget = HS;
        const gS = Sg(SS);
        this.encDescriptor = gS, this.metadata = gS.metadata;
        const tS = gS.isSchema;
        if (this._isSchema = tS, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, tS) {
          const SS = this.metadata?.[OS] ?? 0;
          SS > 7 && (this.ops = new Uint8Array(SS + 1))
        } else this.collDirty = new Map
      }
      _opAt(SS) {
        const HS = this.ops;
        if (void 0 !== HS) return HS[SS];
        const gS = (3 & SS) << 3;
        return SS < 4 ? this.opsLow >>> gS & 255 : this.opsHigh >>> gS & 255
      }
      _opPut(SS, HS) {
        const gS = this.ops;
        if (void 0 !== gS) return void(gS[SS] = HS);
        const tS = (3 & SS) << 3,
          bS = ~(255 << tS);
        SS < 4 ? this.opsLow = this.opsLow & bS | HS << tS : this.opsHigh = this.opsHigh & bS | HS << tS
      }
      _markDirty(SS) {
        SS < 32 ? this.dirtyLow |= 1 << SS : this.dirtyHigh |= 1 << SS - 32
      }
      record(SS, HS) {
        if (this._isSchema) {
          const gS = this._opAt(SS);
          0 === gS ? this._opPut(SS, HS) : (gS === bS.DELETE || gS === bS.ADD && HS === bS.DELETE_AND_ADD) && this._opPut(SS, bS.DELETE_AND_ADD), this._markDirty(SS)
        } else {
          const gS = this.collDirty,
            tS = gS.get(SS);
          let XS;
          XS = void 0 === tS ? HS : tS === bS.DELETE || tS === bS.ADD && HS === bS.DELETE_AND_ADD ? bS.DELETE_AND_ADD : tS, gS.set(SS, XS)
        }
      }
      recordDelete(SS, HS) {
        this._isSchema ? (this._opPut(SS, HS), this._markDirty(SS)) : this.collDirty.set(SS, HS)
      }
      recordRaw(SS, HS) {
        this._isSchema ? (this._opPut(SS, HS), this._markDirty(SS)) : this.collDirty.set(SS, HS)
      }
      recordPure(SS) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, SS])
      }
      operationAt(SS) {
        if (this._isSchema) {
          const HS = this._opAt(SS);
          return 0 === HS ? void 0 : HS
        }
        return this.collDirty.get(SS)
      }
      setOperationAt(SS, HS) {
        if (this._isSchema) this._opPut(SS, HS);
        else {
          const gS = this.collDirty;
          gS.has(SS) && gS.set(SS, HS)
        }
      }
      forEach(SS) {
        this.forEachWithCtx(SS, hg)
      }
      forEachWithCtx(SS, HS) {
        if (this._isSchema) {
          let gS = this.dirtyLow,
            tS = this.dirtyHigh;
          const bS = this.ops;
          if (void 0 !== bS) {
            for (; 0 !== gS;) {
              const tS = gS & -gS,
                XS = 31 - Math.clz32(tS);
              gS ^= tS, HS(SS, XS, bS[XS])
            }
            for (; 0 !== tS;) {
              const gS = tS & -tS,
                XS = 31 - Math.clz32(gS) + 32;
              tS ^= gS, HS(SS, XS, bS[XS])
            }
          } else {
            const tS = this.opsLow,
              bS = this.opsHigh;
            for (; 0 !== gS;) {
              const XS = gS & -gS,
                xS = 31 - Math.clz32(XS);
              gS ^= XS, HS(SS, xS, wg(tS, bS, xS))
            }
          }
          return
        }
        const gS = this.collDirty,
          tS = this.collPureOps;
        if (void 0 !== tS && tS.length > 0) {
          let bS = 0,
            XS = 0;
          for (const [xS, NS] of gS) {
            for (; bS < tS.length && tS[bS][0] <= XS;) {
              const gS = tS[bS++][1];
              HS(SS, -gS, gS)
            }
            HS(SS, xS, NS), XS++
          }
          for (; bS < tS.length;) {
            const gS = tS[bS++][1];
            HS(SS, -gS, gS)
          }
        } else
          for (const [bS, XS] of gS) HS(SS, bS, XS)
      }
      size() {
        return this._isSchema ? eH(this.dirtyLow) + eH(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(SS, HS) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const gS = this.collDirty,
          tS = new Map,
          XS = !this.paused && !this.isFullStateOnly;
        if (SS > 0)
          for (const [bS, xS] of gS) bS < SS && tS.set(bS, xS);
        if (XS)
          for (let xS = 0; xS < HS; xS++) tS.set(SS + xS, bS.ADD);
        for (const [bS, xS] of gS) bS >= SS && tS.set(bS + HS, xS);
        this.collDirty = tS, XS && this.root?.enqueueChangeTree(this)
      }
      removeAt(SS, HS) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const gS = this.collDirty,
          tS = SS + HS;
        let bS = !1;
        for (const xS of gS.keys())
          if (xS >= tS) {
            bS = !0;
            break
          } if (!bS) {
          for (let HS = SS; HS < tS; HS++) gS.delete(HS);
          return
        }
        const XS = new Map;
        for (const [xS, NS] of gS) xS < SS ? XS.set(xS, NS) : xS >= tS && XS.set(xS - HS, NS);
        this.collDirty = XS
      }
      unshift(SS) {
        this.insertAt(0, SS)
      }
      setRoot(SS) {
        ! function(SS, HS) {
          SS.root = HS;
          const gS = HS.add(SS);
          Xg(SS, SS.parent, SS.parentIndex), gS && Cg(SS, HS, ng)
        }(this, SS)
      }
      setParent(SS, HS, gS) {
        jg(this, SS, HS, gS)
      }
      forEachChild(SS) {
        Cg(this, SS, Gg)
      }
      forEachChildWithCtx(SS, HS) {
        Cg(this, SS, HS)
      }
      forEachLive(SS) {
        bg(this, SS, tg)
      }
      forEachLiveWithCtx(SS, HS) {
        bg(this, SS, HS)
      }
      operation(SS) {
        this.paused || this.isFullStateOnly || (this.recordPure(SS), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(SS, HS, gS) {
        if (!this.paused && !this.isFieldFullStateOnly(SS)) {
          if (this.isFieldUnreliable(SS) && !this.isNew) {
            const tS = this.ensureUnreliableRecorder();
            return gS ? tS.recordRaw(SS, HS) : tS.record(SS, HS), void this.root?.enqueueUnreliable(this)
          }
          gS ? this.recordRaw(SS, HS) : this.record(SS, HS), this.root?.enqueueChangeTree(this)
        }
      }
      change(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bS.ADD;
        this._routeAndRecord(SS, HS, !1)
      }
      indexedOperation(SS, HS) {
        this._routeAndRecord(SS, HS, !0)
      }
      getChange(SS) {
        return this.operationAt(SS)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(SS) {
        const HS = this.paused;
        this.paused = !0;
        try {
          return SS()
        } finally {
          this.paused = HS
        }
      }
      markDirty(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bS.ADD;
        const gS = this.paused;
        this.paused = !1;
        try {
          this.change(SS, HS)
        } finally {
          this.paused = gS
        }
      }
      getValue(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[kS](SS, HS)
      }
      delete(SS, HS) {
        if (void 0 === SS) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${SS}'`)
          } catch (xb) {
            console.warn(xb)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(SS)) return this.getValue(SS);
        const gS = this.isFieldUnreliable(SS) && !this.isNew;
        gS ? this.ensureUnreliableRecorder().recordDelete(SS, HS ?? bS.DELETE) : this.recordDelete(SS, HS ?? bS.DELETE);
        const tS = this.getValue(SS);
        return tS && tS[jS] && this.root?.remove(tS[jS]), gS ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), tS
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[nS]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[nS]?.()
      }
      discard() {
        this._isSchema || this.refTarget[nS]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const SS = SS => {
          if (SS < 0) return;
          const HS = this.getValue(SS);
          HS && HS[jS] && HS[jS].discardAll()
        };
        this.forEach(SS), this.unreliableRecorder?.forEach(SS), this.discard()
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
      addParent(SS, HS) {
        ! function(SS, HS, gS) {
          if (SS.parentRef) {
            if (SS.parentRef[jS] === HS[jS]) return void(SS._parentIndex = gS);
            if (Hg(SS, ((SS, gS) => SS[jS] === HS[jS]))) return void(SS._parentIndex = gS)
          }
          void 0 === SS.parentRef ? (SS.parentRef = HS, SS._parentIndex = gS) : (SS.extraParents = {
            ref: SS.parentRef,
            index: SS._parentIndex,
            next: SS.extraParents
          }, SS.parentRef = HS, SS._parentIndex = gS)
        }(this, SS, HS)
      }
      setParentIndex(SS, HS) {
        ! function(SS, HS, gS) {
          if (void 0 !== SS.extraParents)
            if (SS.parentRef[jS] !== HS[jS]) {
              for (let tS = SS.extraParents; void 0 !== tS; tS = tS.next)
                if (tS.ref[jS] === HS[jS]) return void(tS.index = gS)
            } else SS._parentIndex = gS;
          else SS._parentIndex = gS
        }(this, SS, HS)
      }
      removeParent() {
        return function(SS, HS) {
          if (SS.parentRef && SS.parentRef[jS] === HS[jS]) return SS.extraParents ? (SS.parentRef = SS.extraParents.ref, SS._parentIndex = SS.extraParents.index, SS.extraParents = SS.extraParents.next) : (SS.parentRef = void 0, SS._parentIndex = void 0), !0;
          let gS = SS.extraParents,
            tS = null;
          for (; gS;) {
            if (gS.ref[jS] === HS[jS]) return tS ? tS.next = gS.next : SS.extraParents = gS.next, !0;
            tS = gS, gS = gS.next
          }
          return void 0 === SS.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(SS) {
        return function(SS, HS) {
          if (void 0 !== SS.parentRef && HS(SS.parentRef, SS._parentIndex)) return {
            ref: SS.parentRef,
            index: SS._parentIndex
          };
          for (let gS = SS.extraParents; void 0 !== gS; gS = gS.next)
            if (HS(gS.ref, gS.index)) return {
              ref: gS.ref,
              index: gS.index
            }
        }(this, SS)
      }
      hasParent(SS) {
        return Hg(this, SS)
      }
      indexInParent(SS) {
        return function(SS, HS) {
          if (SS.parentRef && SS.parentRef[jS] === HS[jS]) return SS._parentIndex;
          for (let gS = SS.extraParents; void 0 !== gS; gS = gS.next)
            if (gS.ref[jS] === HS[jS]) return gS.index
        }(this, SS)
      }
      getAllParents() {
        return function(SS) {
          const HS = [];
          SS.parentRef && HS.push({
            ref: SS.parentRef,
            index: SS._parentIndex
          });
          let gS = SS.extraParents;
          for (; gS;) HS.push({
            ref: gS.ref,
            index: gS.index
          }), gS = gS.next;
          return HS
        }(this)
      }
    }
    class Eg {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(SS) {
        this.ref = SS
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
      untracked(SS) {
        return SS()
      }
      markDirty() {}
      forEachChild(SS) {
        const HS = this.ref;
        if (HS[GS]) {
          if ("string" !== typeof HS[GS])
            for (const [gS, tS] of HS.entries()) tS && SS(tS[jS], HS._collectionIndexes?.[gS] ?? gS);
          return
        }
        const gS = HS.constructor,
          tS = gS?.[Symbol.metadata];
        if (!tS) return;
        const bS = tS[dS] ?? [];
        for (let XS = 0; XS < bS.length; XS++) {
          const gS = bS[XS],
            xS = HS[tS[gS].name];
          xS && SS(xS[jS], gS)
        }
      }
      forEachChildWithCtx(SS, HS) {
        this.forEachChild(((gS, tS) => HS(SS, gS, tS)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Lg(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS;
      var gS;
      Object.defineProperty(SS, jS, {
        value: (gS = HS, new Eg(gS)),
        enumerable: !1,
        writable: !0
      })
    }

    function Yg(SS, HS, gS, tS, XS, xS, qS) {
      void 0 !== qS ? qS(HS, tS, xS) : "string" === typeof gS ? HH[gS]?.(HS, tS, xS) : null != gS[Symbol.metadata] ? (HH.number(HS, tS[NS], xS), (XS & bS.ADD) === bS.ADD && SS.tryEncodeTypeId(HS, gS, tS.constructor, xS)) : HH.number(HS, tS[NS], xS)
    }
    const Ag = function(SS, HS, gS, tS, XS, xS, NS, qS) {
        if (HS[xS.offset++] = 255 & (tS | XS), XS === bS.DELETE) return;
        const uS = gS.encDescriptor,
          IS = gS.ref,
          fS = IS[DS][tS] ?? IS[uS.names[tS]];
        Yg(SS, HS, uS.types[tS], fS, XS, xS, uS.encoders[tS])
      },
      yg = function(SS, HS, gS, tS, XS, xS) {
        if (HS[xS.offset++] = 255 & XS, HH.number(HS, tS, xS), XS === bS.DELETE) return;
        const NS = gS.ref;
        if ((XS & bS.ADD) === bS.ADD) {
          const SS = NS.$indexes.get(tS);
          HH.string(HS, SS, xS)
        }
        Yg(SS, HS, NS[GS], NS[kS](tS), XS, xS)
      },
      Vg = function(SS, HS, gS, tS, XS, xS) {
        if (HS[xS.offset++] = 255 & XS, HH.number(HS, tS, xS), XS === bS.DELETE) return;
        const NS = gS.ref;
        Yg(SS, HS, NS[GS], NS[kS](tS), XS, xS)
      },
      ig = function(SS, HS, gS, tS, XS, xS) {
        const NS = gS.ref;
        (XS & bS.ADD) === bS.ADD && "function" === typeof NS.set ? yg(SS, HS, gS, tS, XS, xS) : Vg(SS, HS, gS, tS, XS, xS)
      },
      Wg = function(SS, HS, gS, tS, XS, xS, qS, uS) {
        const IS = gS.refTarget,
          fS = IS[GS],
          aS = "string" !== typeof fS;
        let KS;
        if (uS && gS.isFiltered && aS) {
          const SS = IS.tmpItems[tS];
          if (!SS) return;
          if (KS = SS[NS], XS === bS.DELETE) XS = bS.DELETE_BY_REFID;
          else if ((XS & bS.ADD) === bS.ADD) XS = bS.ADD_BY_REFID;
          else if ((XS & bS.MOVE) === bS.MOVE) return
        } else if (XS === bS.DELETE && aS) {
          const SS = IS.tmpItems[tS];
          if (!SS) return;
          KS = SS[NS], XS = bS.DELETE_BY_REFID
        } else KS = tS;
        if (HS[xS.offset++] = 255 & XS, HH.number(HS, KS, xS), XS === bS.DELETE || XS === bS.DELETE_BY_REFID) return;
        Yg(SS, HS, fS, IS[kS](tS, qS), XS, xS)
      };

    function zg(SS, HS, gS, tS, XS, xS, qS) {
      const uS = SS.resyncVisited;
      let IS = uS.get(SS.currentRefId);
      if (void 0 === IS && uS.set(SS.currentRefId, IS = new Set), IS.add(tS), void 0 !== XS && gS === bS.ADD && XS !== xS) {
        const gS = XS[NS];
        void 0 !== gS && (SS.root.removeRef(gS), qS?.push({
          ref: HS,
          refId: SS.currentRefId,
          op: bS.DELETE,
          dynamicIndex: tS,
          value: void 0,
          previousValue: XS
        }))
      }
    }

    function Ug(SS, HS, gS, tS) {
      const bS = HS[NS];
      if (void 0 === bS || gS.has(bS)) return;
      gS.add(bS);
      const XS = HS.constructor[Symbol.metadata],
        xS = XS?.[dS];
      if (void 0 === xS) return;
      const qS = XS[LS];
      for (let NS = 0; NS < xS.length; NS++) {
        const bS = xS[NS];
        if (void 0 !== qS && qS.includes(bS)) continue;
        const uS = XS[bS],
          IS = HS[uS.name];
        IS && (vt.is(uS.type) ? Ug(SS, IS, gS, tS) : pg(SS, IS, gS, tS))
      }
    }

    function pg(SS, HS, gS, tS) {
      const XS = HS[CS] ?? HS,
        xS = XS[NS];
      if (void 0 === xS || gS.has(xS)) return;
      gS.add(xS);
      const qS = SS.resyncVisited.get(xS);
      if (void 0 === qS) return;
      const uS = SS.root;
      XS[KS](qS, ((SS, gS) => {
        tS?.push({
          ref: HS,
          refId: xS,
          op: bS.DELETE,
          dynamicIndex: gS,
          value: void 0,
          previousValue: SS
        });
        const XS = SS?.[NS];
        void 0 !== XS && uS.removeRef(XS)
      }), (HS => {
        vt.isSchema(HS) && Ug(SS, HS, gS, tS)
      }))
    }
    const sg = 1,
      Bg = 2,
      Mg = 3,
      Fg = 4,
      Rg = 5;

    function Tg(SS, HS, gS, tS, XS, xS, qS, uS, IS) {
      const fS = SS.root;
      let kS;
      if ((HS & bS.DELETE) === bS.DELETE) {
        const SS = XS?.[NS];
        void 0 !== SS && fS.removeRef(SS), HS !== bS.DELETE_AND_ADD && gS[aS](tS), kS = void 0
      }
      if (HS === bS.DELETE);
      else if ("string" === typeof xS) kS = PH[xS](qS, uS);
      else if (VH(xS)) kS = function(SS, HS, gS) {
        return WH(SS, (0, PH[SS.wire])(HS, gS))
      }(xS.quantized, qS, uS);
      else if (vt.is(xS)) {
        const gS = PH.number(qS, uS);
        if (kS = fS.refs.get(gS), (HS & bS.ADD) === bS.ADD) {
          const tS = SS.getInstanceType(qS, uS, xS);
          kS || (kS = SS.createInstanceOfType(tS)), fS.addRef(gS, kS, kS !== XS || HS === bS.DELETE_AND_ADD && kS === XS)
        }
      } else {
        const gS = (KS = Object.keys(xS)[0], QH[KS]),
          tS = PH.number(qS, uS);
        null !== SS.resyncVisited && function(SS, HS) {
          const gS = SS.resyncVisited;
          gS.has(HS) || gS.set(HS, new Set)
        }(SS, tS);
        const aS = fS.refs.has(tS) ? XS || fS.refs.get(tS) : gS.constructor.initializeForDecoder();
        if (kS = aS.clone(!0), kS[GS] = Object.values(xS)[0], XS) {
          let SS = XS[NS];
          if (void 0 !== SS && tS !== SS) {
            (HS & bS.DELETE) !== bS.DELETE && fS.removeRef(SS);
            const gS = XS.entries();
            let tS;
            for (;
              (tS = gS.next()) && !tS.done;) {
              const [HS, gS] = tS.value;
              "object" === typeof gS && (SS = gS[NS]), IS?.push({
                ref: XS,
                refId: SS,
                op: bS.DELETE,
                field: HS,
                value: void 0,
                previousValue: gS
              })
            }
          }
        }
        fS.addRef(tS, kS, aS !== XS || HS === bS.DELETE_AND_ADD && aS === XS)
      }
      var KS;
      return kS
    }
    const og = function(SS, HS, gS, tS, bS) {
        const XS = HS[gS.offset++],
          xS = tS.constructor[Symbol.metadata],
          NS = XS >> 6 << 6,
          qS = XS % (NS || 255),
          uS = xS[qS];
        if (void 0 === uS) return console.warn("@colyseus/schema: field not defined at", {
          index: qS,
          ref: tS.constructor.name,
          metadata: xS
        }), -1;
        const IS = !0 === uS.deprecated,
          fS = IS ? void 0 : tS[kS](qS),
          aS = Tg(SS, NS, tS, qS, fS, uS.type, HS, gS, bS);
        IS || (null !== aS && void 0 !== aS && (tS[uS.name] = aS), fS !== aS && bS?.push({
          ref: tS,
          refId: SS.currentRefId,
          op: NS,
          field: uS.name,
          value: aS,
          previousValue: fS
        }))
      },
      lg = function(SS, HS, gS, tS, XS) {
        const xS = tS[CS] ?? tS,
          NS = HS[gS.offset++];
        if (NS === bS.CLEAR) return SS.removeChildRefs(xS, XS), void xS.clear();
        const qS = PH.number(HS, gS),
          uS = xS[GS],
          IS = xS.constructor.COLLECTION_KIND;
        let fS;
        (NS & bS.ADD) === bS.ADD ? IS === sg ? (fS = PH.string(HS, gS), xS.setIndex(qS, fS)) : fS = qS : fS = xS.getIndex(qS);
        const aS = xS[kS](qS),
          KS = Tg(SS, NS, tS, qS, aS, uS, HS, gS, XS);
        if (null !== SS.resyncVisited && zg(SS, tS, NS, fS, aS, KS, XS), null !== KS && void 0 !== KS) switch (IS) {
          case sg:
            xS.$items.set(fS, KS);
            break;
          case Bg:
            xS.$setAt(qS, KS, null !== SS.resyncVisited && NS === bS.ADD ? bS.REPLACE : NS);
            break;
          case Mg:
          case Fg:
          case Rg:
            xS.$items.has(qS) || (xS.$items.set(qS, KS), "number" === typeof xS.$refId && qS >= xS.$refId && (xS.$refId = qS + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${xS.constructor?.name} \u2014 item at index ${qS} was not stored.`)
        }
        aS !== KS && XS?.push({
          ref: tS,
          refId: SS.currentRefId,
          op: NS,
          dynamicIndex: fS,
          value: KS,
          previousValue: aS
        })
      },
      mg = function(SS, HS, gS, tS, XS) {
        const xS = tS[CS] ?? tS;
        let NS, qS = HS[gS.offset++];
        if (qS === bS.CLEAR) return SS.removeChildRefs(xS, XS), void xS.clear();
        if (qS === bS.REVERSE) return void xS.items.reverse();
        if (qS === bS.DELETE_BY_REFID) {
          const qS = PH.number(HS, gS),
            uS = SS.root.refs.get(qS);
          if (void 0 === uS) return;
          if (SS.root.removeRef(qS), NS = xS.findIndex((SS => SS === uS)), -1 === NS) return;
          return xS[aS](NS), void XS?.push({
            ref: tS,
            refId: SS.currentRefId,
            op: bS.DELETE,
            dynamicIndex: NS,
            value: void 0,
            previousValue: uS
          })
        }
        if (qS === bS.ADD_BY_REFID) {
          const tS = PH.number(HS, gS),
            bS = SS.root.refs.get(tS);
          bS && (NS = xS.findIndex((SS => SS === bS))), -1 !== NS && void 0 !== NS || (NS = xS.length)
        } else NS = PH.number(HS, gS);
        const uS = xS[GS];
        let IS = NS;
        const fS = xS.items[NS],
          kS = Tg(SS, qS, tS, NS, fS, uS, HS, gS, XS);
        null !== SS.resyncVisited && zg(SS, tS, qS, NS, fS, kS, XS), null !== kS && void 0 !== kS && kS !== fS && xS.$setAt(NS, kS, null !== SS.resyncVisited && qS === bS.ADD ? bS.REPLACE : qS), fS !== kS && XS?.push({
          ref: tS,
          refId: SS.currentRefId,
          op: qS,
          dynamicIndex: IS,
          value: kS,
          previousValue: fS
        })
      };
    class eg extends Error {}

    function rg(SS, HS, gS, tS) {
      if (!(SS instanceof HS)) throw new eg(`a '${HS.name}' was expected, but '${SS&&SS.constructor.name}' was provided in ${gS.constructor.name}#${tS}`)
    }
    const St = (SS, HS) => {
        const gS = SS.toString(),
          tS = HS.toString();
        return gS < tS ? -1 : gS > tS ? 1 : 0
      },
      Ht = {
        get: (SS, HS) => "symbol" === typeof HS || isNaN(HS) ? Reflect.get(SS, HS) : SS.items[HS],
        set: (SS, HS, gS) => {
          if ("symbol" !== typeof HS && !isNaN(HS)) {
            if (void 0 === gS || null === gS) SS.$deleteAt(HS);
            else {
              let tS;
              if (gS[jS]) {
                rg(gS, SS[GS], SS, HS);
                const XS = SS.items[HS];
                SS.isMovingItems ? (tS = SS.$wireIndex(Number(HS)), void 0 !== XS ? gS[jS].isNew ? SS[jS].indexedOperation(tS, bS.MOVE_AND_ADD) : (SS[jS].getChange(tS) & bS.DELETE) === bS.DELETE ? SS[jS].indexedOperation(tS, bS.DELETE_AND_MOVE) : SS[jS].indexedOperation(tS, bS.MOVE) : gS[jS].isNew && SS[jS].indexedOperation(tS, bS.ADD), gS[jS].setParent(SS, SS[jS].root, tS)) : tS = SS.$changeAt(Number(HS), gS), void 0 !== XS && XS[jS].root?.remove(XS[jS])
              } else tS = SS.$changeAt(Number(HS), gS);
              SS.items[HS] = gS, void 0 !== tS && (SS.tmpItems[tS] = gS)
            }
            return !0
          }
          return Reflect.set(SS, HS, gS)
        },
        deleteProperty: (SS, HS) => ("number" === typeof HS ? SS.$deleteAt(HS) : delete SS[HS], !0),
        has: (SS, HS) => "symbol" === typeof HS || isNaN(Number(HS)) ? Reflect.has(SS, HS) : Reflect.has(SS.items, HS)
      };
    class gt {
      [jS];
      [NS];
      [CS];
      [GS];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[uS] = Wg;
      static[IS] = mg;
      static COLLECTION_KIND = Bg;
      static[fS](SS, HS, gS) {
        if (!gS) return !0;
        const tS = SS[CS] ?? SS;
        return "string" === typeof tS[GS] || gS.isChangeTreeVisible(tS.tmpItems[HS]?.[jS])
      }
      static is(SS) {
        return Array.isArray(SS) || void 0 !== SS.array
      }
      static from(SS) {
        return new gt(...Array.from(SS))
      }
      constructor() {
        this[GS] = void 0, this[CS] = this;
        const SS = new Proxy(this, Ht);
        return Object.defineProperty(this, jS, {
          value: new vg(SS, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), SS
      }
      static initializeForDecoder() {
        const SS = Object.create(gt.prototype);
        SS.items = [], SS.isMovingItems = !1, SS._needsCompaction = !1, SS[GS] = void 0, SS[CS] = SS;
        const HS = new Proxy(SS, Ht);
        return Lg(SS, HS), HS
      }
      set length(SS) {
        0 === SS ? this.clear() : SS < this.items.length ? this.splice(SS, this.length - SS) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[jS].pause()
      }
      resumeTracking() {
        this[jS].resume()
      }
      untracked(SS) {
        return this[jS].untracked(SS)
      }
      get isTrackingPaused() {
        return this[jS].paused
      }
      push() {
        const SS = this[CS],
          HS = SS.items,
          gS = SS.tmpItems,
          tS = SS[jS],
          XS = SS[GS];
        let xS = gS.length;
        for (let NS = 0, qS = arguments.length; NS < qS; NS++, xS++) {
          const qS = NS < 0 || arguments.length <= NS ? void 0 : arguments[NS];
          if (void 0 === qS || null === qS) return;
          "object" === typeof qS && XS && rg(qS, XS, SS, NS), tS.indexedOperation(xS, bS.ADD), HS.push(qS), gS.push(qS), qS[jS]?.setParent(this, tS.root, xS)
        }
        return xS
      }
      pop() {
        const SS = this[CS],
          HS = SS.tmpItems,
          gS = SS.deletedIndexes;
        let tS = -1;
        for (let XS = HS.length - 1; XS >= 0; XS--)
          if (!0 !== gS[XS]) {
            tS = XS;
            break
          } if (tS < 0) return;
        const bS = SS.$isUnsentAdd(tS);
        return SS[jS].delete(tS), bS ? SS.$cancelAdd(tS) : gS[tS] = !0, SS.items.pop()
      }
      at(SS) {
        return SS < 0 && (SS += this.length), this.items[SS]
      }
      $wireIndex(SS) {
        const HS = this.deletedIndexes;
        if (0 === HS.length) return SS;
        const gS = this.tmpItems;
        let tS = 0;
        for (let bS = 0; bS < gS.length; bS++)
          if (!0 !== HS[bS]) {
            if (tS === SS) return bS;
            tS++
          } return gS.length + (SS - tS)
      }
      $isUnsentAdd(SS) {
        const HS = this[jS];
        return 0 === (576 & HS.flags) && !HS.paused && "string" !== typeof this[GS] && HS.operationAt(SS) === bS.ADD
      }
      $cancelAdd(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gS = this[jS],
          tS = this.tmpItems[SS];
        this.tmpItems.splice(SS, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(SS, 1), gS.removeAt(SS, 1);
        const bS = tS?.[jS];
        void 0 !== bS && void 0 === bS.root && bS.removeParent(this), HS && this.$reindexChildren(SS)
      }
      $reindexChildren(SS, HS) {
        if (!this[jS].hasFilteredFields) return;
        if ("string" === typeof this[GS]) return;
        const gS = this.tmpItems,
          tS = gS.length;
        if (void 0 !== HS)
          for (; SS < tS && gS[SS] === HS[SS];) SS++;
        for (let bS = SS; bS < tS; bS++) gS[bS]?.[jS]?.setParentIndex(this, bS)
      }
      $changeAt(SS, HS) {
        if (void 0 === HS || null === HS) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[SS] === HS) return;
        const gS = void 0 !== this.items[SS] ? "object" === typeof HS ? bS.DELETE_AND_ADD : bS.REPLACE : bS.ADD,
          tS = this.$wireIndex(SS),
          XS = this[jS];
        return XS.change(tS, gS), HS[jS]?.setParent(this, XS.root, tS), tS
      }
      $deleteAt(SS, HS) {
        this[jS].delete(this.$wireIndex(SS), HS)
      }
      $setAt(SS, HS, gS) {
        gS === bS.ADD && void 0 !== this.items[SS] ? this.items.splice(SS, 0, HS) : gS === bS.DELETE_AND_MOVE ? (this.items.splice(SS, 1), this.items[SS] = HS) : (SS > this.items.length && (this._needsCompaction = !0), this.items[SS] = HS)
      }
      clear() {
        const SS = this[CS];
        if (0 === SS.items.length) return;
        const HS = SS[jS];
        HS.forEachChild(((SS, gS) => {
          HS.root?.remove(SS)
        })), HS.discard(), HS.operation(bS.CLEAR), SS.items.length = 0, SS.tmpItems.length = 0
      } [PS]() {
        const SS = this[CS] ?? this,
          HS = SS[jS];
        if (HS.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const gS = SS.items;
        for (let tS = 0; tS < gS.length; tS++) gS[tS]?.[PS]?.();
        SS.items.length = 0, SS.tmpItems.length = 0, SS.deletedIndexes.length = 0, HS.recycle(), SS[NS] = void 0
      }
      concat() {
        return new gt(...this.items.concat(...arguments))
      }
      join(SS) {
        return this.items.join(SS)
      }
      reverse() {
        const SS = this[CS],
          HS = SS[jS];
        if (HS.has() || SS.deletedIndexes.length > 0) {
          const HS = SS.items.slice().reverse();
          return this.clear(), this.push(...HS), this
        }
        return HS.operation(bS.REVERSE), SS.items.reverse(), SS.tmpItems.reverse(), SS.$reindexChildren(0), this
      }
      shift() {
        const SS = this[CS],
          HS = SS.items;
        if (0 === HS.length) return;
        const gS = SS[jS],
          tS = SS.deletedIndexes;
        let XS = 0;
        for (; !0 === tS[XS];) XS++;
        const xS = SS.$isUnsentAdd(XS);
        return gS.delete(XS, bS.DELETE), xS ? SS.$cancelAdd(XS) : tS[XS] = !0, HS.shift()
      }
      slice(SS, HS) {
        const gS = new gt;
        return gS.push(...this.items.slice(SS, HS)), gS
      }
      sort() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : St;
        const HS = this[CS];
        HS.isMovingItems = !0;
        const gS = HS[jS];
        return HS.items.sort(SS).forEach(((SS, HS) => gS.change(HS, bS.REPLACE))), HS.tmpItems.sort(SS), HS.$reindexChildren(0), HS.isMovingItems = !1, this
      }
      splice(SS, HS) {
        const gS = this[CS],
          tS = gS[jS],
          XS = gS.items,
          xS = gS.tmpItems,
          NS = gS.deletedIndexes,
          qS = XS.length,
          uS = xS.length;
        for (var IS = arguments.length, fS = new Array(IS > 2 ? IS - 2 : 0), kS = 2; kS < IS; kS++) fS[kS - 2] = arguments[kS];
        const aS = fS.length,
          KS = [];
        for (let bS = 0; bS < uS; bS++) !0 !== NS[bS] && KS.push(bS);
        let GS;
        if (qS > SS) {
          void 0 === HS && (HS = qS - SS);
          for (let XS = SS; XS < SS + HS; XS++) {
            const SS = KS[XS],
              HS = gS.$isUnsentAdd(SS);
            tS.delete(SS, bS.DELETE), HS ? (GS ??= []).push(SS) : NS[SS] = !0
          }
        } else HS = 0;
        if (aS > 0) {
          const XS = KS[SS] ?? qS,
            uS = Math.min(aS, HS);
          for (let SS = 0; SS < uS; SS++) {
            const HS = XS + SS;
            let gS;
            const qS = void 0 !== GS ? GS.indexOf(HS) : -1; - 1 !== qS ? (GS.splice(qS, 1), gS = bS.ADD) : gS = NS[HS] ? bS.DELETE_AND_ADD : bS.ADD, tS.indexedOperation(HS, gS), xS[HS] = fS[SS], NS[HS] = !1, fS[SS][jS]?.setParent(this, tS.root, HS)
          }
          const IS = aS - uS;
          if (IS > 0) {
            const SS = XS + uS;
            tS.insertAt(SS, IS);
            for (let HS = 0; HS < IS; HS++) fS[uS + HS][jS]?.setParent(this, tS.root, SS + HS);
            NS.length > 0 && NS.splice(SS, 0, ...new Array(IS).fill(!1)), xS.splice(SS, 0, ...fS.slice(uS)), gS.$reindexChildren(SS + IS)
          }
        }
        if (void 0 !== GS && GS.length > 0) {
          for (let SS = GS.length - 1; SS >= 0; SS--) gS.$cancelAdd(GS[SS], !1);
          gS.$reindexChildren(GS[0])
        }
        return tS.root?.enqueueChangeTree(tS), XS.splice(SS, HS, ...fS)
      }
      unshift() {
        const SS = this[CS],
          HS = SS[jS];
        HS.unshift(arguments.length);
        for (let tS = 0; tS < arguments.length; tS++)(tS < 0 || arguments.length <= tS ? void 0 : arguments[tS])?.[jS]?.setParent(this, HS.root, tS);
        const gS = SS.deletedIndexes;
        return gS.length > 0 && gS.unshift(...new Array(arguments.length).fill(!1)), SS.tmpItems.unshift(...arguments), SS.$reindexChildren(arguments.length), SS.items.unshift(...arguments)
      }
      indexOf(SS, HS) {
        return this.items.indexOf(SS, HS)
      }
      lastIndexOf(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(SS, HS)
      }
      every(SS, HS) {
        return this.items.every(SS, HS)
      }
      some(SS, HS) {
        return this.items.some(SS, HS)
      }
      forEach(SS, HS) {
        return this.items.forEach(SS, HS)
      }
      map(SS, HS) {
        return this.items.map(SS, HS)
      }
      filter(SS, HS) {
        return this.items.filter(SS, HS)
      }
      reduce(SS, HS) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(SS, HS) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(SS, HS) {
        return this.items.find(SS, HS)
      }
      findIndex(SS, HS) {
        return this.items.findIndex(SS, HS)
      }
      fill(SS, HS, gS) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(SS, HS, gS) {
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
        return gt
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
      includes(SS, HS) {
        return this.items.includes(SS, HS)
      }
      flatMap(SS, HS) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(SS) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(SS, HS) {
        const gS = this.items.slice();
        return SS < 0 && (SS += this.length), gS[SS] = HS, new gt(...gS)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(SS) {
        return this.items.slice().sort(SS)
      }
      toSpliced(SS, HS) {
        for (var gS = arguments.length, tS = new Array(gS > 2 ? gS - 2 : 0), bS = 2; bS < gS; bS++) tS[bS - 2] = arguments[bS];
        const XS = this.items.slice();
        return XS.splice.apply(XS, arguments), XS
      }
      shuffle() {
        return this.move((SS => {
          let HS = this.items.length;
          for (; 0 != HS;) {
            let SS = Math.floor(Math.random() * HS);
            HS--, [this[HS], this[SS]] = [this[SS], this[HS]]
          }
        }))
      }
      move(SS) {
        return this.isMovingItems = !0, SS(this), this.isMovingItems = !1, this
      } [kS](SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = this[CS] ?? this;
        return HS || gS.deletedIndexes[SS] ? gS.items[SS] : gS.tmpItems[SS] || gS.items[SS]
      } [aS](SS) {
        const HS = this[CS] ?? this;
        HS.items[SS] = void 0, HS._needsCompaction = !0
      } [nS]() {
        const SS = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, SS), this.deletedIndexes.length = 0)
      } [QS]() {
        const SS = this[CS] ?? this;
        SS._needsCompaction && (SS._needsCompaction = !1, SS.items = SS.items.filter((SS => void 0 !== SS)))
      } [KS](SS, HS, gS) {
        const tS = this[CS] ?? this,
          bS = tS.items;
        let XS = !1;
        for (let xS = 0; xS < bS.length; xS++) {
          const NS = bS[xS];
          SS.has(xS) ? gS(NS) : (XS = !0, HS(NS, xS), tS[aS](xS))
        }
        XS && tS[QS]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((SS => "function" === typeof SS.toJSON ? SS.toJSON() : SS))
      }
      clone(SS) {
        let HS;
        return SS ? (HS = new gt, HS.push(...this.items)) : HS = new gt(...this.map((SS => SS[jS] ? SS.clone() : SS))), HS
      }
    }
    wH("array", {
      constructor: gt
    });
    class tt {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(SS) {
        const HS = this.indexByKey[SS];
        return void 0 === HS ? void 0 : HS
      }
      assign(SS) {
        const HS = this.nextIndex++;
        return this.indexByKey[SS] = HS, this.keyByIndex.set(HS, SS), HS
      }
      snapshot(SS, HS) {
        (this.snapshots ??= new Map).set(SS, HS)
      }
      forgetSnapshot(SS) {
        this.snapshots?.delete(SS)
      }
      snapshotAt(SS) {
        return this.snapshots?.get(SS)
      }
      setIndex(SS, HS) {
        this.keyByIndex.set(SS, HS), this.indexByKey[HS] = SS
      }
      keyOf(SS) {
        return this.keyByIndex.get(SS)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [SS] of this.snapshots) {
            const HS = this.keyByIndex.get(SS);
            void 0 !== HS && (delete this.indexByKey[HS], this.keyByIndex.delete(SS))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class bt {
      [jS];
      [NS];
      childType;
      [GS];
      $items = new Map;
      journal = new tt;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(SS) {
        (this._stream ??= JH()).maxPerTick = SS
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(SS) {
        (this._stream ??= JH()).priority = SS
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[uS] = yg;
      static[IS] = lg;
      static COLLECTION_KIND = sg;
      static[fS](SS, HS, gS) {
        if (!gS || "string" === typeof SS[GS]) return !0;
        const tS = SS[kS](HS) ?? SS.journal.snapshotAt(HS);
        return gS.isChangeTreeVisible(tS[jS])
      }
      static is(SS) {
        return void 0 !== SS.map
      }
      constructor(SS) {
        if (Object.defineProperty(this, jS, {
            value: new vg(this),
            enumerable: !1,
            writable: !0
          }), this[GS] = void 0, SS)
          if (SS instanceof Map || SS instanceof bt) SS.forEach(((SS, HS) => this.set(HS, SS)));
          else
            for (const HS in SS) this.set(HS, SS[HS])
      }
      static initializeForDecoder() {
        const SS = Object.create(bt.prototype);
        return SS.$items = new Map, SS.journal = new tt, SS[GS] = void 0, Lg(SS), SS
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return bt
      }
      set(SS, HS) {
        if (void 0 === HS || null === HS) throw new Error(`MapSchema#set('${SS}', ${HS}): trying to set ${HS} value on '${SS}'.`);
        "object" === typeof HS && this[GS] && rg(HS, this[GS], this, SS), SS = SS.toString();
        const gS = this[jS],
          tS = void 0 !== HS[jS],
          XS = this.journal;
        let xS, NS = XS.indexOf(SS);
        if (void 0 !== NS) {
          xS = bS.REPLACE;
          const gS = this.$items.get(SS);
          if (gS === HS) return;
          tS && (xS = bS.DELETE_AND_ADD, void 0 !== gS && gS[jS].root?.remove(gS[jS])), void 0 !== XS.snapshotAt(NS) && XS.forgetSnapshot(NS)
        } else NS = XS.assign(SS), xS = bS.ADD;
        return this.$items.set(SS, HS), xS === bS.ADD && gS.isStreamCollection ? void 0 !== gS.root && dH(this, gS.root, NS) : gS.change(NS, xS), tS && HS[jS].setParent(this, gS.root, NS), this
      }
      get(SS) {
        return this.$items.get(SS)
      }
      getOrInsert(SS, HS) {
        return this.$items.has(SS) ? this.$items.get(SS) : (this.set(SS, HS), HS)
      }
      getOrInsertComputed(SS, HS) {
        if (this.$items.has(SS)) return this.$items.get(SS);
        const gS = HS(SS);
        return this.set(SS, gS), gS
      }
      delete(SS) {
        if (!this.$items.has(SS)) return !1;
        const HS = this.journal.indexOf(SS),
          gS = this.$items.get(SS),
          tS = this[jS];
        if (tS.isStreamCollection) {
          const bS = tS.root;
          let XS = !1;
          return void 0 !== bS && (XS = cH(this, bS, this[NS], HS)), void 0 !== gS?.[jS] && bS?.remove(gS[jS]), this.$items.delete(SS), XS || this.journal.snapshot(HS, gS), !0
        }
        return this.journal.snapshot(HS, gS), tS.delete(HS), this.$items.delete(SS)
      }
      clear() {
        const SS = this[jS];
        SS.discard(), SS.forEachChild(((HS, gS) => {
          SS.root?.remove(HS)
        })), this.journal.reset(), this.$items.clear(), SS.operation(bS.CLEAR)
      } [PS]() {
        const SS = this[jS];
        if (SS.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((SS => SS?.[PS]?.())), this.$items.clear(), this.journal.reset(), SS.recycle(), this[NS] = void 0
      }
      has(SS) {
        return this.$items.has(SS)
      }
      forEach(SS) {
        this.$items.forEach(SS)
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
        this[jS].pause()
      }
      resumeTracking() {
        this[jS].resume()
      }
      untracked(SS) {
        return this[jS].untracked(SS)
      }
      get isTrackingPaused() {
        return this[jS].paused
      }
      setIndex(SS, HS) {
        this.journal.setIndex(SS, HS)
      }
      getIndex(SS) {
        return this.journal.keyOf(SS)
      } [kS](SS) {
        const HS = this.journal.keyOf(SS);
        return void 0 !== HS ? this.$items.get(HS) : void 0
      } [aS](SS) {
        const HS = this.journal.keyOf(SS);
        void 0 !== HS && (this.$items.delete(HS), this.journal.keyByIndex.delete(SS))
      } [KS](SS, HS, gS) {
        let tS = null;
        if (this.$items.forEach(((bS, XS) => {
            SS.has(XS) ? gS(bS) : ((tS ??= new Set).add(XS), HS(bS, XS))
          })), null !== tS) {
          tS.forEach((SS => {
            this.$items.delete(SS), delete this.journal.indexByKey[SS]
          }));
          const SS = [];
          this.journal.keyByIndex.forEach(((HS, gS) => {
            tS.has(HS) && SS.push(gS)
          }));
          for (let HS = 0; HS < SS.length; HS++) this.journal.keyByIndex.delete(SS[HS])
        }
      } [nS]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(SS) {
        YH(this, SS)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (SS => {
          let [HS, gS] = SS;
          return [HS, "function" === typeof gS.toJSON ? gS.toJSON() : gS]
        })))
      }
      clone(SS) {
        let HS;
        return SS ? HS = Object.assign(new bt, this) : (HS = new bt, this.forEach(((SS, gS) => {
          SS[jS] ? HS.set(gS, SS.clone()) : HS.set(gS, SS)
        }))), HS
      }
    }
    wH("map", {
      constructor: bt
    });
    class Xt {
      [jS];
      [NS];
      [GS];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(SS) {
        (this._stream ??= JH()).maxPerTick = SS
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(SS) {
        (this._stream ??= JH()).priority = SS
      }
      static[uS] = Vg;
      static[IS] = lg;
      static COLLECTION_KIND = Fg;
      static[fS](SS, HS, gS) {
        return !gS || "string" === typeof SS[GS] || gS.isChangeTreeVisible((SS[kS](HS) ?? SS.deletedItems[HS])[jS])
      }
      static is(SS) {
        return void 0 !== SS.collection
      }
      constructor(SS) {
        Object.defineProperty(this, jS, {
          value: new vg(this),
          enumerable: !1,
          writable: !0
        }), this[GS] = void 0, SS && SS.forEach((SS => this.add(SS)))
      }
      static initializeForDecoder() {
        const SS = Object.create(Xt.prototype);
        return SS.$items = new Map, SS.deletedItems = {}, SS.$refId = 0, SS[GS] = void 0, Lg(SS), SS
      }
      add(SS) {
        const HS = this.$refId++,
          gS = this[jS];
        return this.$items.set(HS, SS), gS.isStreamCollection ? void 0 !== gS.root && dH(this, gS.root, HS) : gS.change(HS), void 0 !== SS[jS] && SS[jS].setParent(this, gS.root, HS), HS
      }
      at(SS) {
        const HS = Array.from(this.$items.keys())[SS];
        return this.$items.get(HS)
      }
      entries() {
        return this.$items.entries()
      }
      delete(SS) {
        const HS = this.$items.entries();
        let gS, tS;
        for (;
          (tS = HS.next()) && !tS.done;)
          if (SS === tS.value[1]) {
            gS = tS.value[0];
            break
          } if (void 0 === gS) return !1;
        const bS = this[jS];
        if (bS.isStreamCollection) {
          const SS = bS.root,
            HS = this.$items.get(gS);
          return void 0 !== SS && cH(this, SS, this[NS], gS), void 0 !== HS?.[jS] && SS?.remove(HS[jS]), this.deletedItems[gS] = HS, this.$items.delete(gS)
        }
        return this.deletedItems[gS] = bS.delete(gS), this.$items.delete(gS)
      }
      clear() {
        const SS = this[jS];
        SS.discard(), SS.forEachChild(((HS, gS) => {
          SS.root?.remove(HS)
        })), this.$items.clear(), SS.operation(bS.CLEAR)
      } [PS]() {
        const SS = this[jS];
        if (SS.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((SS => SS?.[PS]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, SS.recycle(), this[NS] = void 0
      }
      has(SS) {
        return Array.from(this.$items.values()).some((HS => HS === SS))
      }
      forEach(SS) {
        this.$items.forEach(((HS, gS, tS) => SS(HS, gS, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[jS].pause()
      }
      resumeTracking() {
        this[jS].resume()
      }
      untracked(SS) {
        return this[jS].untracked(SS)
      }
      get isTrackingPaused() {
        return this[jS].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(SS, HS) {}
      getIndex(SS) {
        return SS
      } [kS](SS) {
        return this.$items.get(SS)
      } [aS](SS) {
        this.$items.delete(SS)
      } [KS](SS, HS, gS) {
        let tS = null;
        if (this.$items.forEach(((bS, XS) => {
            SS.has(XS) ? gS(bS) : ((tS ??= []).push(XS), HS(bS, XS))
          })), null !== tS)
          for (let bS = 0; bS < tS.length; bS++) this[aS](tS[bS])
      } [nS]() {
        for (const SS in this.deletedItems) delete this.deletedItems[SS]
      }
      _dropView(SS) {
        YH(this, SS)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const SS = [];
        return this.forEach(((HS, gS) => {
          SS.push("function" === typeof HS.toJSON ? HS.toJSON() : HS)
        })), SS
      }
      clone(SS) {
        let HS;
        return SS ? HS = Object.assign(new Xt, this) : (HS = new Xt, this.forEach((SS => {
          SS[jS] ? HS.add(SS.clone()) : HS.add(SS)
        }))), HS
      }
    }
    wH("collection", {
      constructor: Xt
    });
    class xt {
      [jS];
      [NS];
      [GS];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(SS) {
        (this._stream ??= JH()).maxPerTick = SS
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(SS) {
        (this._stream ??= JH()).priority = SS
      }
      static[uS] = Vg;
      static[IS] = lg;
      static COLLECTION_KIND = Mg;
      static[fS](SS, HS, gS) {
        return !gS || "string" === typeof SS[GS] || gS.isVisible((SS[kS](HS) ?? SS.deletedItems[HS])[jS])
      }
      static is(SS) {
        return void 0 !== SS.set
      }
      constructor(SS) {
        Object.defineProperty(this, jS, {
          value: new vg(this),
          enumerable: !1,
          writable: !0
        }), this[GS] = void 0, SS && SS.forEach((SS => this.add(SS)))
      }
      static initializeForDecoder() {
        const SS = Object.create(xt.prototype);
        return SS.$items = new Map, SS.deletedItems = {}, SS.$refId = 0, SS[GS] = void 0, Lg(SS), SS
      }
      add(SS) {
        if (this.has(SS)) return !1;
        const HS = this.$refId++,
          gS = this[jS];
        return this.$items.set(HS, SS), gS.isStreamCollection ? void 0 !== gS.root && dH(this, gS.root, HS) : gS.change(HS, bS.ADD), void 0 !== SS[jS] && SS[jS].setParent(this, gS.root, HS), HS
      }
      entries() {
        return this.$items.entries()
      }
      delete(SS) {
        const HS = this.$items.entries();
        let gS, tS;
        for (;
          (tS = HS.next()) && !tS.done;)
          if (SS === tS.value[1]) {
            gS = tS.value[0];
            break
          } if (void 0 === gS) return !1;
        const bS = this[jS];
        if (bS.isStreamCollection) {
          const SS = bS.root,
            HS = this.$items.get(gS);
          return void 0 !== SS && cH(this, SS, this[NS], gS), void 0 !== HS?.[jS] && SS?.remove(HS[jS]), this.deletedItems[gS] = HS, this.$items.delete(gS)
        }
        return this.deletedItems[gS] = bS.delete(gS), this.$items.delete(gS)
      }
      clear() {
        const SS = this[jS];
        SS.discard(), this.$items.clear(), SS.operation(bS.CLEAR)
      } [PS]() {
        const SS = this[jS];
        if (SS.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((SS => SS?.[PS]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, SS.recycle(), this[NS] = void 0
      }
      has(SS) {
        const HS = this.$items.values();
        let gS, tS = !1;
        for (;
          (gS = HS.next()) && !gS.done;)
          if (SS === gS.value) {
            tS = !0;
            break
          } return tS
      }
      forEach(SS) {
        this.$items.forEach(((HS, gS, tS) => SS(HS, gS, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[jS].pause()
      }
      resumeTracking() {
        this[jS].resume()
      }
      untracked(SS) {
        return this[jS].untracked(SS)
      }
      get isTrackingPaused() {
        return this[jS].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(SS, HS) {}
      getIndex(SS) {
        return SS
      } [kS](SS) {
        return this.$items.get(SS)
      } [aS](SS) {
        this.$items.delete(SS)
      } [KS](SS, HS, gS) {
        let tS = null;
        if (this.$items.forEach(((bS, XS) => {
            SS.has(XS) ? gS(bS) : ((tS ??= []).push(XS), HS(bS, XS))
          })), null !== tS)
          for (let bS = 0; bS < tS.length; bS++) this[aS](tS[bS])
      } [nS]() {
        for (const SS in this.deletedItems) delete this.deletedItems[SS]
      }
      _dropView(SS) {
        YH(this, SS)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const SS = [];
        return this.forEach(((HS, gS) => {
          SS.push("function" === typeof HS.toJSON ? HS.toJSON() : HS)
        })), SS
      }
      clone(SS) {
        let HS;
        return SS ? HS = Object.assign(new xt, this) : (HS = new xt, this.forEach((SS => {
          SS[jS] ? HS.add(SS.clone()) : HS.add(SS)
        }))), HS
      }
    }
    wH("set", {
      constructor: xt
    });
    class Nt {
      [jS];
      [NS];
      [GS];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(SS) {
        (this._stream ??= JH()).maxPerTick = SS
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(SS) {
        (this._stream ??= JH()).priority = SS
      }
      static $isStream = !0;
      static[uS] = Vg;
      static[IS] = lg;
      static COLLECTION_KIND = Rg;
      static[fS](SS, HS, gS) {
        if (!gS) return !0;
        const tS = SS[kS](HS);
        return void 0 !== tS && gS.isVisible(tS[jS])
      }
      static is(SS) {
        return SS && void 0 !== SS.stream
      }
      constructor() {
        Object.defineProperty(this, jS, {
          value: new vg(this),
          enumerable: !1,
          writable: !0
        }), this[GS] = void 0
      }
      static initializeForDecoder() {
        const SS = Object.create(Nt.prototype);
        return SS.$items = new Map, SS.$nextPosition = 0, SS._itemIndex = new Map, SS[GS] = void 0, Lg(SS), SS
      }
      add(SS) {
        if (this._itemIndex.has(SS)) return -1;
        const HS = this.$nextPosition++;
        this.$items.set(HS, SS), this._itemIndex.set(SS, HS);
        const gS = this[jS].root;
        return void 0 !== SS[jS] && SS[jS].setParent(this, gS, HS), void 0 !== gS && dH(this, gS, HS), HS
      }
      remove(SS) {
        const HS = this._itemIndex.get(SS);
        if (void 0 === HS) return !1;
        this._itemIndex.delete(SS), this.$items.delete(HS);
        const gS = this[jS].root;
        return void 0 !== gS && (cH(this, gS, this[NS], HS), void 0 !== SS[jS] && gS.remove(SS[jS])), !0
      }
      has(SS) {
        return this._itemIndex.has(SS)
      }
      clear() {
        const SS = this[jS].root;
        if (void 0 !== SS) {
          ! function(SS, HS, gS) {
            const tS = SS._stream;
            if (void 0 !== tS) {
              tS.broadcastPending.clear();
              for (const SS of tS.sentBroadcast) tS.broadcastDeletes.add(SS);
              tS.sentBroadcast.clear(), HS.forEachActiveView((SS => {
                tS.pendingByView.get(SS.id)?.clear();
                const HS = tS.sentByView.get(SS.id);
                if (void 0 !== HS && HS.size > 0) {
                  let tS = SS.changes.get(gS);
                  void 0 === tS && (tS = new Map, SS.changes.set(gS, tS));
                  for (const SS of HS) tS.set(SS, bS.DELETE);
                  HS.clear()
                }
              }))
            }
          }(this, SS, this[NS]);
          for (const HS of this.$items.values()) void 0 !== HS[jS] && SS.remove(HS[jS])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(SS) {
        for (const [HS, gS] of this.$items) SS(gS, HS, this)
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
      setIndex(SS, HS) {}
      getIndex(SS) {
        return SS
      } [kS](SS) {
        return this.$items.get(SS)
      } [aS](SS) {
        const HS = this.$items.get(SS);
        void 0 !== HS && (this._itemIndex.delete(HS), this.$items.delete(SS))
      } [KS]() {} [nS]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const SS = [];
        return this.forEach((HS => {
          SS.push("function" === typeof HS?.toJSON ? HS.toJSON() : HS)
        })), SS
      }
      clone(SS) {
        if (SS) {
          return Object.assign(new Nt, this)
        }
        const HS = new Nt;
        return HS.maxPerTick = this.maxPerTick, this.forEach((SS => {
          HS.add("function" === typeof SS?.clone ? SS.clone() : SS)
        })), HS
      }
      _dropView(SS) {
        YH(this, SS)
      }
      _unregister() {}
    }
    wH("stream", {
      constructor: Nt
    });
    class qt {
      [wS] = !0;
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
      constructor(SS) {
        this._type = SS
      }
      default (SS) {
        return this._default = SS, this._hasDefault = !0, this
      }
      view(SS) {
        return this._view = SS ?? -1, this
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
        const SS = this._type;
        if (SS && "object" === typeof SS && void 0 !== SS.array) throw new Error(ZH);
        return this._stream = !0, this
      }
      priority(SS) {
        return this._streamPriority = SS, this
      }
      deprecated() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = SS, this
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

    function ut(SS) {
      return null != SS && !0 === SS[wS]
    }

    function It(SS) {
      return () => new qt(SS)
    }

    function ft(SS) {
      if (ut(SS)) {
        const HS = SS._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof HS?`use the type name instead: t.array("${HS}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return SS
    }

    function kt(SS) {
      return new qt({
        quantized: yH(SS)
      })
    }
    const Kt = Object.freeze({
        string: It("string"),
        number: It("number"),
        boolean: It("boolean"),
        int8: It("int8"),
        uint8: It("uint8"),
        int16: It("int16"),
        uint16: It("uint16"),
        int32: It("int32"),
        uint32: It("uint32"),
        int64: It("int64"),
        uint64: It("uint64"),
        float32: It("float32"),
        float64: It("float64"),
        bigint64: It("bigint64"),
        biguint64: It("biguint64"),
        ref: SS => new qt(SS),
        array: SS => new qt({
          array: ft(SS)
        }),
        map: SS => new qt({
          map: ft(SS)
        }),
        set: SS => new qt({
          set: ft(SS)
        }),
        collection: SS => new qt({
          collection: ft(SS)
        }),
        stream: SS => {
          const HS = new qt({
            stream: ft(SS)
          });
          return HS._stream = !0, HS
        },
        quantized: kt,
        angle: SS => kt({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: SS?.bits ?? 16
        })
      }),
      jt = -1;

    function Gt(SS) {
      return UH.register(SS), SS
    }

    function Ct() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt;
      return function(HS, gS) {
        const tS = TH.initialize(HS.constructor);
        TH.setTag(tS, gS, SS)
      }
    }

    function nt(SS, HS) {
      const gS = TH.initialize(SS.constructor);
      TH.setUnreliable(gS, HS)
    }

    function Pt(SS, HS) {
      const gS = TH.initialize(SS.constructor);
      TH.setPatchOnly(gS, HS)
    }

    function Qt(SS, HS) {
      const gS = TH.initialize(SS.constructor);
      TH.setFullStateOnly(gS, HS)
    }

    function Dt(SS, HS) {
      return function(gS, tS) {
        const bS = gS.constructor;
        if (!SS) throw new Error(`${bS.name}: @type() reference provided for "${tS}" is undefined. Make sure you don't have any circular dependencies.`);
        SS = sH(SS, `${bS.name}.${tS}`), UH.register(bS);
        const XS = Object.getPrototypeOf(bS)[Symbol.metadata],
          xS = TH.initialize(bS);
        let NS = xS[tS];
        if (void 0 !== xS[NS]) {
          if (xS[NS].deprecated) return;
          if (void 0 !== xS[NS].type) {
            const SS = new Error(`@colyseus/schema: Duplicate '${tS}' definition on '${bS.name}'.\nCheck @type() annotation`);
            throw new Error(`${SS.message} ${SS.stack.split("\n")[4].trim()}`)
          }
        } else NS = xS[OS] ?? (XS && XS[OS]) ?? -1, NS++;
        if (HS && HS.manual) TH.addField(xS, NS, tS, SS, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: HS,
            childType: gS
          } = pH(SS);
          TH.addField(xS, NS, tS, SS, ht(tS, NS, gS, HS))
        }
        xS[hS][tS] && Object.defineProperty(gS, tS, xS[hS][tS]), ("string" === typeof SS || VH(SS)) && (xS[JS] || Object.defineProperty(xS, JS, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), xS[JS][NS] = "string" === typeof SS ? HH[SS] : zH(SS.quantized))
      }
    }
    const wt = {
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

    function ht(SS, HS, gS, tS) {
      let XS;
      return XS = tS ? function(SS, HS, gS, tS) {
        const XS = tS.constructor === gt,
          xS = tS.constructor === bt;
        return function(SS) {
          const tS = this[DS],
            NS = tS[HS];
          if (SS !== NS) {
            if (void 0 !== SS && null !== SS) {
              if (!XS || SS instanceof gt)
                if (!xS || SS instanceof bt) SS[GS] = gS;
                else {
                  const HS = new bt;
                  if (HS[GS] = gS, SS instanceof Map) SS.forEach(((SS, gS) => HS.set(gS, SS)));
                  else
                    for (const gS in SS) HS.set(gS, SS[gS]);
                  SS = HS
                }
              else {
                const HS = new gt;
                HS[GS] = gS, HS.push(...SS), SS = HS
              }
              const tS = this[jS],
                uS = this.constructor;
              void 0 !== NS && null !== NS && NS[jS] ? (tS.root?.remove(NS[jS]), uS[qS](tS, HS, bS.DELETE_AND_ADD)) : uS[qS](tS, HS, bS.ADD), SS[jS]?.setParent(this, tS.root, HS)
            } else void 0 !== NS && null !== NS && this[jS].delete(HS);
            tS[HS] = SS
          }
        }
      }(0, HS, gS, tS) : "string" === typeof gS ? function(SS, HS, gS) {
        const tS = wt[gS],
          XS = "string" === gS,
          xS = "boolean" === gS;
        return function(gS) {
          const NS = this[DS],
            uS = NS[HS];
          if (gS !== uS) {
            if (void 0 !== gS && null !== gS) {
              if (!xS && void 0 !== tS && typeof gS !== tS && (!XS || null !== gS)) {
                const HS = gS && gS.constructor ? ` (${gS.constructor.name})` : "";
                throw new eg(`a '${tS}' was expected, but '${JSON.stringify(gS)}'${HS} was provided in ${this.constructor.name}#${SS}`)
              }
              this.constructor[qS](this[jS], HS, bS.ADD)
            } else void 0 !== uS && null !== uS && this[jS].delete(HS);
            NS[HS] = gS
          }
        }
      }(SS, HS, gS) : VH(gS) ? function(SS, HS, gS) {
        return function(tS) {
          const XS = this[DS],
            xS = XS[HS];
          if (void 0 !== tS && null !== tS) {
            if ("number" !== typeof tS) throw new eg(`a 'number' was expected, but '${JSON.stringify(tS)}' was provided in ${this.constructor.name}#${SS}`);
            if ((tS = WH(gS, iH(gS, tS))) === xS) return;
            this.constructor[qS](this[jS], HS, bS.ADD)
          } else {
            if (tS === xS) return;
            void 0 !== xS && null !== xS && this[jS].delete(HS)
          }
          XS[HS] = tS
        }
      }(SS, HS, gS.quantized) : function(SS, HS, gS) {
        return function(tS) {
          const XS = this[DS],
            xS = XS[HS];
          if (tS !== xS) {
            if (void 0 !== tS && null !== tS) {
              rg(tS, gS, this, SS);
              const XS = this[jS],
                NS = this.constructor;
              void 0 !== xS && null !== xS && xS[jS] ? (XS.root?.remove(xS[jS]), NS[qS](XS, HS, bS.DELETE_AND_ADD)) : NS[qS](XS, HS, bS.ADD), tS[jS]?.setParent(this, XS.root, HS)
            } else void 0 !== xS && null !== xS && this[jS].delete(HS);
            XS[HS] = tS
          }
        }
      }(SS, HS, gS), {
        get: function() {
          return this[DS][HS]
        },
        set: XS,
        enumerable: !0,
        configurable: !0
      }
    }

    function Zt() {
      let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(HS, gS) {
        const tS = TH.initialize(HS.constructor);
        TH.setDeprecated(tS, gS), SS && (tS[hS] ??= {}, tS[hS][gS] = {
          get: function() {
            throw new Error(`${gS} is deprecated.`)
          },
          set: function(SS) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(HS, gS, tS[hS][gS]))
      }
    }
    let Jt = !1;

    function Ot(SS, HS, gS) {
      Jt || (Jt = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let tS in HS) Dt(HS[tS], gS)(SS.prototype, tS);
      return SS
    }

    function dt(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vt;
      if (null == SS || "object" !== typeof SS) throw new Error(`schema(): first argument must be a fields object (got ${typeof SS}).`);
      const tS = {},
        bS = {},
        XS = {},
        xS = {},
        NS = (SS, HS) => {
          if (HS.hasDefault)((SS, HS) => {
            "function" === typeof HS ? xS[SS] = HS : HS && "function" === typeof HS.clone ? xS[SS] = () => HS.clone() : XS[SS] = HS
          })(SS, HS.default);
          else if (!HS.optional) {
            const gS = function(SS) {
              if (SS && "object" === typeof SS) {
                if (void 0 !== SS.array) return () => new gt;
                if (void 0 !== SS.map) return () => new bt;
                if (void 0 !== SS.set) return () => new xt;
                if (void 0 !== SS.collection) return () => new Xt;
                if (void 0 !== SS.stream) return () => new Nt
              } else if ("function" === typeof SS && vt.is(SS) && (!SS.prototype.initialize || 0 === SS.prototype.initialize.length)) return () => new SS
            }(HS.type);
            gS && (xS[SS] = gS)
          }
        },
        qS = {},
        uS = [],
        IS = [],
        fS = {},
        kS = [],
        aS = [],
        KS = {},
        jS = [];
      for (const DS in SS) {
        const gS = SS[DS],
          XS = `schema(${HS?`'${HS}'`:""}): field '${DS}'`;
        if (ut(gS)) {
          const SS = gS.toDefinition();
          if (SS.noSync) {
            if (void 0 !== SS.view || SS.unreliable || SS.patchOnly || SS.fullStateOnly || SS.stream) throw new Error(`${XS} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            NS(DS, SS);
            continue
          }
          if (SS.patchOnly && SS.fullStateOnly) throw new Error(`${XS} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const HS = sH(SS.type, XS);
          if ("function" === typeof HS && !vt.is(HS)) throw new Error(`${XS} is a synced ref to non-Schema class '${HS.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          tS[DS] = HS, void 0 !== SS.view && (qS[DS] = SS.view), SS.unreliable && uS.push(DS), SS.patchOnly && IS.push(DS), SS.deprecated && (fS[DS] = SS.deprecatedThrows), SS.fullStateOnly && kS.push(DS), SS.stream && aS.push(DS), void 0 !== SS.streamPriority && (KS[DS] = SS.streamPriority), SS.optional && jS.push(DS), NS(DS, SS)
        } else {
          if ("function" !== typeof gS) throw new Error(`${XS} must be a t.* builder, Schema subclass, or method (got ${typeof gS}).`);
          vt.is(gS) ? (tS[DS] = gS, gS.prototype.initialize && 0 !== gS.prototype.initialize.length || (xS[DS] = () => new gS)) : bS[DS] = gS
        }
      }
      const GS = SS => {
          for (const HS in XS) SS[HS] = XS[HS];
          for (const HS in xS) SS[HS] = xS[HS]()
        },
        CS = () => {
          const SS = {};
          return GS(SS), SS
        },
        nS = "function" === typeof bS.initialize,
        PS = bS.initialize ?? gS._initialize,
        QS = class extends gS {
          constructor() {
            for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
            const bS = HS[0];
            void 0 === bS ? (super(), GS(this)) : super(Object.assign(CS(), nS ? (SS => {
              const HS = Object.keys(tS),
                gS = {};
              for (const tS in SS) HS.includes(tS) || (gS[tS] = SS[tS]);
              return gS
            })(bS) : bS)), PS && new.target === QS && PS.apply(this, HS)
          }
        };
      HS && Object.defineProperty(QS, "name", {
        value: HS
      }), TH.setFields(QS, tS), QS._getDefaultValues = CS, QS._initialize = PS, Object.assign(QS.prototype, bS);
      for (const DS in qS) Ct(qS[DS])(QS.prototype, DS);
      for (const DS of uS) nt(QS.prototype, DS);
      for (const DS of IS) Pt(QS.prototype, DS);
      for (const DS in fS) Zt(fS[DS])(QS.prototype, DS);
      if (kS.length > 0 || aS.length > 0) {
        const SS = QS[Symbol.metadata];
        for (const HS of kS) TH.setFullStateOnly(SS, HS);
        for (const HS of aS) TH.setStream(SS, HS);
        for (const HS in KS) TH.setStreamPriority(SS, HS, KS[HS])
      }
      if (jS.length > 0) {
        const SS = QS[Symbol.metadata];
        for (const HS of jS) SS[SS[HS]].optional = !0
      }
      return QS.extend = (SS, HS) => dt(SS, HS, QS), QS
    }

    function ct(SS) {
      const HS = SS[jS].root,
        gS = {
          ops: {},
          refs: []
        };
      let tS = HS.changes.next;
      for (; tS;) {
        const SS = tS.changeTree;
        void 0 !== SS ? (gS.refs.push(`refId#${SS.ref[NS]}`), SS.forEach(((SS, HS) => {
          if (SS < 0 || !HS) return;
          const tS = bS[HS];
          gS.ops[tS] || (gS.ops[tS] = 0), gS.ops[tS]++
        })), tS = tS.next) : tS = tS.next
      }
      return gS
    }
    class vt {
      static[uS] = Ag;
      static[IS] = og;
      [NS];
      [DS];
      static initialize(SS) {
        Object.defineProperty(SS, jS, {
          value: new vg(SS),
          enumerable: !1,
          writable: !0
        }), SS[DS] = []
      }
      static initializeForDecoder() {
        const SS = Object.create(this.prototype);
        return Lg(SS), SS[DS] = [], SS
      }
      static reset(SS) {
        const HS = SS?.[jS];
        if (void 0 === HS || "function" !== typeof HS.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== HS.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${SS.constructor.name}) with multiple parents.`);
        SS[PS]()
      } [PS]() {
        const SS = this.constructor[Symbol.metadata],
          HS = SS?.[dS] ?? [],
          gS = this[DS];
        for (let tS = 0; tS < HS.length; tS++) {
          const SS = gS[HS[tS]];
          SS?.[PS]?.()
        }
        this[jS].recycle(), this[NS] = void 0
      }
      static is(SS) {
        const HS = SS[Symbol.metadata];
        return "object" === typeof HS && null !== HS
      }
      static isSchema(SS) {
        return "function" === typeof SS?.assign
      }
      static[qS](SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bS.ADD;
        SS.change(HS, gS)
      }
      static[fS](SS, HS, gS) {
        const tS = SS.constructor[Symbol.metadata],
          bS = tS[HS]?.tag;
        return void 0 === gS ? void 0 === bS : void 0 === bS || (bS === jt ? gS.isChangeTreeVisible(SS[jS]) : gS.hasTagOnTree(SS[jS], bS))
      }
      constructor(SS) {
        vt.initialize(this), SS && vt.assignProps(this, SS)
      }
      assign(SS) {
        return vt.assignProps(this, SS), this
      }
      static assignProps(SS, HS) {
        const gS = SS.constructor[Symbol.metadata];
        if (gS && void 0 !== gS[OS])
          for (let bS = 0; bS <= gS[OS]; bS++) {
            const tS = gS[bS];
            if (!tS) continue;
            const XS = HS[tS.name];
            void 0 !== XS && (SS[tS.name] = XS)
          }
        const tS = Object.keys(HS);
        for (let bS = 0; bS < tS.length; bS++) {
          const XS = tS[bS];
          gS && void 0 !== gS[XS] || (SS[XS] = HS[XS])
        }
      }
      restore(SS) {
        const HS = this.constructor[Symbol.metadata];
        for (const gS in HS) {
          const tS = HS[gS],
            bS = tS.name,
            XS = tS.type,
            xS = SS[bS];
          if (void 0 !== xS && null !== xS)
            if ("string" === typeof XS) this[bS] = xS;
            else if (vt.is(XS)) {
            const SS = new XS;
            SS.restore(xS), this[bS] = SS
          } else if ("object" === typeof XS) {
            const SS = Object.keys(XS)[0],
              HS = XS[SS];
            if ("map" === SS) {
              const SS = this[bS];
              for (const gS in xS)
                if (vt.is(HS)) {
                  const tS = new HS;
                  tS.restore(xS[gS]), SS.set(gS, tS)
                } else SS.set(gS, xS[gS])
            } else if ("array" === SS) {
              const SS = this[bS];
              for (let gS = 0; gS < xS.length; gS++)
                if (vt.is(HS)) {
                  const tS = new HS;
                  tS.restore(xS[gS]), SS.push(tS)
                } else SS.push(xS[gS])
            }
          }
        }
        return this
      }
      setDirty(SS, HS) {
        const gS = this.constructor[Symbol.metadata];
        this[jS].change(gS[gS[SS]].index, HS)
      }
      pauseTracking() {
        this[jS].pause()
      }
      resumeTracking() {
        this[jS].resume()
      }
      untracked(SS) {
        return this[jS].untracked(SS)
      }
      get isTrackingPaused() {
        return this[jS].paused
      }
      clone() {
        const SS = Object.create(this.constructor.prototype);
        vt.initialize(SS);
        const HS = this.constructor[Symbol.metadata];
        for (const gS in HS) {
          const tS = HS[gS].name;
          "object" === typeof this[tS] && "function" === typeof this[tS]?.clone ? SS[tS] = this[tS].clone() : SS[tS] = this[tS]
        }
        return SS
      }
      toJSON() {
        const SS = {},
          HS = this.constructor[Symbol.metadata];
        for (const gS in HS) {
          const tS = HS[gS],
            bS = tS.name;
          tS.deprecated || null === this[bS] || "undefined" === typeof this[bS] || (SS[bS] = "function" === typeof this[bS].toJSON ? this[bS].toJSON() : this[bS])
        }
        return SS
      }
      discardAllChanges() {
        this[jS].discardAll()
      } [kS](SS) {
        return this[this.constructor[Symbol.metadata][SS].name]
      } [aS](SS) {
        this[this.constructor[Symbol.metadata][SS].name] = void 0
      }
      static debugRefIds(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 ? arguments[3] : void 0,
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const XS = HS ? ` - ${JSON.stringify(SS.toJSON())}` : "",
          xS = SS[jS],
          qS = SS[NS],
          uS = tS ? tS.root.refCount[qS] : xS.refCount,
          IS = uS > 1 ? ` [\xd7${uS}]` : "";
        let fS = `${function(SS){return new Array(SS).fill(0).map(((HS,gS)=>gS===SS-1?"\u2514\u2500 ":"   ")).join("")}(gS)}${bS}${SS.constructor.name} (refId: ${qS})${IS}${XS}\n`;
        return xS.forEachChild(((bS, XS) => {
          let xS = XS;
          "number" === typeof XS && SS.$indexes && (xS = SS.$indexes.get(XS) ?? XS);
          const NS = void 0 !== SS.forEach && void 0 !== xS ? `["${xS}"]: ` : "";
          fS += this.debugRefIds(bS.ref, HS, gS + 1, tS, NS)
        })), fS
      }
      static debugRefIdEncodingOrder(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const gS = [],
          tS = SS[jS];
        if ("changes" === HS) {
          let SS = tS.root.changes?.next;
          for (; SS;) SS.changeTree && gS.push(SS.changeTree.ref[NS]), SS = SS.next;
          return gS
        }
        const bS = "allFilteredChanges" === HS,
          XS = new Set,
          xS = SS => {
            XS.has(SS) || (XS.add(SS), SS.isFiltered === bS && gS.push(SS.ref[NS]), SS.forEachChild(((SS, HS) => xS(SS))))
          };
        return xS(tS), gS
      }
      static debugRefIdsFromDecoder(SS) {
        return this.debugRefIds(SS.state, !1, 0, SS)
      }
      static debugChanges(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = SS[jS],
          tS = HS ? "allChanges" : "changes";
        let XS = `${SS.constructor.name} (${SS[NS]}) -> .${tS}:\n`;
        return HS ? gS.forEachLive((SS => {
          XS += `- [${SS}]: ADD (${JSON.stringify(gS.getValue(Number(SS),!0))})\n`
        })) : gS.forEach(((SS, HS) => {
          SS < 0 || !HS || (XS += `- [${SS}]: ${bS[HS]} (${JSON.stringify(gS.getValue(Number(SS),!1))})\n`)
        })), XS
      }
    }
    XS(vt);
    const Et = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Lt {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const SS = {};
        for (const HS in this.changeTrees) SS[HS] = this.changeTrees[HS].refCount;
        return SS
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
      enqueueFilterRefresh(SS) {
        this.types.hasFilters && (SS.flags & dg || (SS.flags |= dg, this.pendingFilterRefresh.push(SS)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(SS) {
        this._freeViewIds.push(SS)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(SS) {
        this.activeViews.set(SS.id, new WeakRef(SS))
      }
      unregisterView(SS) {
        this.activeViews.delete(SS.id);
        const HS = SS.id;
        for (const gS of this.streamTrees) gS._dropView(HS)
      }
      forEachActiveView(SS) {
        for (const [HS, gS] of this.activeViews) {
          const tS = gS.deref();
          if (void 0 !== tS) SS(tS);
          else {
            this.activeViews.delete(HS);
            for (const SS of this.streamTrees) SS._dropView(HS)
          }
        }
      }
      registerStream(SS) {
        this.streamTrees.add(SS)
      }
      unregisterStream(SS) {
        this.streamTrees.delete(SS)
      }
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = SS, this.nextUniqueId = HS
      }
      add(SS) {
        const HS = SS.ref;
        void 0 === HS[NS] && (Et.value = this.nextUniqueId++, Object.defineProperty(HS, NS, Et));
        const gS = HS[NS],
          tS = void 0 === this.changeTrees[gS];
        tS && (this.changeTrees[gS] = SS), SS.needsRestage && (SS.needsRestage = !1, SS.forEachLiveWithCtx(SS, gg));
        const bS = tS ? 0 : SS.refCount;
        return SS.refCount = bS + 1, bS > 0 && this.enqueueFilterRefresh(SS), tS
      }
      remove(SS) {
        const HS = SS.refCount - 1;
        if (HS <= 0) {
          if (SS.root = void 0, delete this.changeTrees[SS.ref[NS]], SS.isStreamCollection) {
            const HS = SS.ref;
            HS._unregister?.(), this.unregisterStream(HS)
          }
          this.removeFromQueue(SS), this.removeFromUnreliableQueue(SS), SS.refCount = 0, SS.needsRestage = !0, SS.forEachChild(((HS, gS) => {
            HS.removeParent(SS.ref) && (void 0 === HS.parentRef || HS.refCount > 0 ? this.remove(HS) : this.moveNextToParent(HS))
          }))
        } else SS.refCount = HS, this.enqueueFilterRefresh(SS), this.recursivelyMoveNextToParent(SS);
        return HS
      }
      recursivelyMoveNextToParent(SS) {
        this.moveNextToParent(SS), SS.forEachChild(((SS, HS) => this.recursivelyMoveNextToParent(SS)))
      }
      moveNextToParent(SS) {
        SS.changesNode && this._moveNextToParentInList(this.changes, SS, SS.changesNode, "changesNode"), SS.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, SS, SS.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(SS, HS, gS, tS) {
        const bS = HS.parent;
        if (!bS || !bS[jS]) return;
        const XS = bS[jS][tS];
        XS && XS !== gS && (gS.position > XS.position || (gS.prev ? gS.prev.next = gS.next : SS.next = gS.next, gS.next ? gS.next.prev = gS.prev : SS.tail = gS.prev, gS.prev = SS.tail, gS.next = void 0, SS.tail.next = gS, SS.tail = gS, gS.position = SS.nextPosition++))
      }
      enqueueChangeTree(SS) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS.changesNode) || (SS.changesNode = this._appendToList(this.changes, SS))
      }
      enqueueUnreliable(SS) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS.unreliableChangesNode) || (SS.unreliableChangesNode = this._appendToList(this.unreliableChanges, SS))
      }
      _appendToList(SS, HS) {
        const gS = this._nodePool;
        let tS;
        return gS.length > 0 ? (tS = gS.pop(), tS.changeTree = HS, tS.next = void 0, tS.prev = void 0) : tS = {
          changeTree: HS,
          next: void 0,
          prev: void 0,
          position: 0
        }, SS.next ? (tS.prev = SS.tail, SS.tail.next = tS, SS.tail = tS) : (SS.nextPosition = 0, SS.next = tS, SS.tail = tS), tS.position = SS.nextPosition++, tS
      }
      releaseNode(SS) {
        SS.changeTree = void 0, SS.prev = void 0, SS.next = void 0, this._nodePool.push(SS)
      }
      removeFromQueue(SS) {
        return this._removeNode(this.changes, SS, SS.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(SS) {
        return this._removeNode(this.unreliableChanges, SS, SS.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(SS, HS, gS, tS) {
        return !(!gS || gS.changeTree !== HS) && (gS.prev ? gS.prev.next = gS.next : SS.next = gS.next, gS.next ? gS.next.prev = gS.prev : SS.tail = gS.prev, HS[tS] = void 0, this.releaseNode(gS), !0)
      }
    }

    function Yt(SS, HS) {
      if (-1 === HS || HS >= SS.length) return !1;
      const gS = SS.length - 1;
      for (let tS = HS; tS < gS; tS++) SS[tS] = SS[tS + 1];
      return SS.length = gS, !0
    }

    function At(SS, HS, gS) {
      const tS = ~gS,
        bS = SS.changeTrees;
      for (const XS in bS) {
        const SS = bS[XS],
          gS = SS.visibleViews;
        void 0 !== gS && HS < gS.length && (gS[HS] &= tS);
        const xS = SS.subscribedViews;
        void 0 !== xS && HS < xS.length && (xS[HS] &= tS);
        const NS = SS.tagViews;
        void 0 !== NS && NS.forEach((SS => {
          HS < SS.length && (SS[HS] &= tS)
        }))
      }
    }
    const yt = new FinalizationRegistry((SS => {
      let {
        root: HS,
        id: gS,
        slot: tS,
        bit: bS
      } = SS;
      At(HS, tS, bS), HS.activeViews.delete(gS);
      for (const XS of HS.streamTrees) XS._dropView(gS);
      HS.releaseViewId(gS)
    }));

    function Vt(SS) {
      if (void 0 === SS) return "undefined";
      if (null === SS) return "null";
      const HS = typeof SS;
      return "string" === HS ? JSON.stringify(SS.length > 30 ? `${SS.slice(0,30)}\u2026` : SS) : "object" !== HS && "function" !== HS ? `${HS} ${String(SS)}` : Array.isArray(SS) ? `Array(${SS.length})` : SS.constructor?.name ?? "Object"
    }
    class it {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = SS, SS && (this.items = [])
      }
      _bindRoot(SS) {
        void 0 === this._root && (this._root = SS, this.id = SS.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), SS.registerView(this), yt.register(this, {
          root: SS,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), At(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), yt.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(SS) {
        const HS = SS.visibleViews,
          gS = this._slot;
        return void 0 !== HS && gS < HS.length && 0 !== (HS[gS] & this._bit)
      }
      markVisible(SS) {
        const HS = this._slot;
        let gS = SS.visibleViews;
        for (void 0 === gS && (gS = SS.visibleViews = []); gS.length <= HS;) gS.push(0);
        gS[HS] |= this._bit
      }
      unmarkVisible(SS) {
        const HS = SS.visibleViews;
        if (void 0 === HS) return;
        const gS = this._slot;
        gS < HS.length && (HS[gS] &= ~this._bit)
      }
      isSubscribed(SS) {
        const HS = SS.subscribedViews,
          gS = this._slot;
        return void 0 !== HS && gS < HS.length && 0 !== (HS[gS] & this._bit)
      }
      _setSubscribed(SS) {
        const HS = this._slot;
        let gS = SS.subscribedViews;
        for (void 0 === gS && (gS = SS.subscribedViews = []); gS.length <= HS;) gS.push(0);
        gS[HS] |= this._bit
      }
      _clearSubscribed(SS) {
        const HS = SS.subscribedViews;
        if (void 0 === HS) return;
        const gS = this._slot;
        gS < HS.length && (HS[gS] &= ~this._bit)
      }
      hasTagOnTree(SS, HS) {
        const gS = SS.tagViews;
        if (void 0 === gS) return !1;
        const tS = this._slot,
          bS = this._bit;
        for (let XS = HS; 0 !== XS; XS &= XS - 1) {
          const SS = gS.get(XS & -XS);
          if (void 0 !== SS && tS < SS.length && 0 !== (SS[tS] & bS)) return !0
        }
        return !1
      }
      addTag(SS, HS) {
        if (HS === jt) return;
        let gS = SS.tagViews;
        void 0 === gS && (gS = SS.tagViews = new Map);
        const tS = this._slot,
          bS = this._bit;
        for (let XS = HS; XS > 0; XS &= XS - 1) {
          const SS = XS & -XS;
          let HS = gS.get(SS);
          for (void 0 === HS && (HS = [], gS.set(SS, HS)); HS.length <= tS;) HS.push(0);
          HS[tS] |= bS
        }
      }
      removeTag(SS, HS) {
        if (HS === jt) return;
        const gS = SS.tagViews;
        if (void 0 === gS) return;
        const tS = this._slot,
          bS = ~this._bit;
        for (let XS = HS; XS > 0; XS &= XS - 1) {
          const SS = gS.get(XS & -XS);
          void 0 !== SS && tS < SS.length && (SS[tS] &= bS)
        }
      }
      removeAllTagsOnTree(SS) {
        const HS = SS.tagViews;
        if (void 0 === HS) return;
        const gS = this._slot,
          tS = ~this._bit;
        HS.forEach((SS => {
          gS < SS.length && (SS[gS] &= tS)
        }))
      }
      add(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jt,
          gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(SS, HS, gS, !1)
      }
      _addImmediate(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jt;
        this._add(SS, HS, !0, !0)
      }
      _add(SS, HS, gS, tS) {
        const XS = SS?.[jS];
        if (!XS) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${Vt(SS)}`), !1;
        const xS = XS.parent;
        if (!xS && 0 !== SS[NS]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${XS.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== XS.root && this._bindRoot(XS.root);
        const qS = xS?.[jS];
        if (!tS && qS?.isStreamCollection) return LH(xS, this.id, XS.parentIndex), !0;
        const uS = SS.constructor[Symbol.metadata],
          IS = this.isVisible(XS);
        if (!this.iterable || !gS || IS && -1 !== this.items.indexOf(SS) || this.items.push(SS), this.markVisible(XS), gS && xS && this.addParentOf(XS, HS), !tS && XS.isStreamCollection) return !0;
        if (HS === jt && XS.isNew) return this._markSubtreeVisible(XS, HS), !1;
        let fS = this.changes.get(SS[NS]);
        void 0 === fS && (fS = new Map, this.changes.set(SS[NS], fS));
        let kS = !1;
        const aS = XS.encDescriptor.tags;
        if (XS.forEachChild(((SS, gS) => {
            const tS = aS[gS];
            if (void 0 !== tS) {
              if (!(tS === jt || HS !== jt && 0 !== (tS & HS))) return
            }
            this.add(SS.ref, HS, !1) && (kS = !0)
          })), HS !== jt) {
          this.addTag(XS, HS);
          const SS = uS?.[vS];
          if (void 0 !== SS)
            for (let gS = HS; gS > 0; gS &= gS - 1) SS[gS & -gS]?.forEach((SS => {
              XS.getChange(SS) !== bS.DELETE && fS.set(SS, bS.ADD)
            }))
        }
        if ((HS === jt || !IS) && (!XS.isNew || kS))
          if (XS.isArray && "string" !== typeof XS.refTarget[GS]) XS.refTarget.items.length > 0 && (fS.set(-1, bS.ADD), kS = !0);
          else {
            const SS = XS.encDescriptor.tags;
            XS.forEachLive((gS => {
              const tS = SS[gS];
              (void 0 === tS || tS === jt || HS !== jt && 0 !== (tS & HS)) && (fS.set(gS, bS.ADD), kS = !0)
            }))
          } return kS
      }
      _markSubtreeVisible(SS, HS) {
        const gS = SS.encDescriptor.tags;
        SS.forEachChild(((SS, tS) => {
          const bS = gS[tS];
          if (void 0 !== bS) {
            if (!(bS === jt || HS !== jt && 0 !== (bS & HS))) return
          }
          SS.isNew ? (this.markVisible(SS), this._markSubtreeVisible(SS, HS)) : this._add(SS.ref, HS, !1, !1)
        }))
      }
      addParentOf(SS, HS) {
        const gS = SS.parent[jS],
          tS = SS.parentIndex;
        this.isVisible(gS) || this.markVisible(gS);
        const XS = gS.parent?.[jS];
        if (XS && this.addParentOf(gS, HS), gS.hasFilteredFields && gS.getChange(tS) !== bS.DELETE) {
          let XS = this.changes.get(gS.ref[NS]);
          void 0 === XS && (XS = new Map, this.changes.set(gS.ref[NS], XS));
          const xS = gS.encDescriptor.tags[tS];
          void 0 !== xS && xS !== jt && 0 !== (xS & HS) && this.addTag(gS, HS), XS.set(gS.isArray ? SS : tS, bS.ADD)
        }
      }
      _touchAncestorsOf(SS) {
        let HS = SS.parent?.[jS];
        if (void 0 === HS) return;
        const gS = [];
        for (; void 0 !== HS;) {
          if (HS.hasFilteredFields) {
            const SS = HS.ref[NS];
            if (this.changes.has(SS)) break;
            gS.push(HS)
          }
          HS = HS.parent?.[jS]
        }
        for (let tS = gS.length - 1; tS >= 0; tS--) this.changes.set(gS[tS].ref[NS], new Map)
      }
      remove(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jt,
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = SS?.[jS];
        if (!tS) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${Vt(SS)}`), this;
        const XS = tS.parent?.[jS];
        if (XS?.isStreamCollection) return this.unmarkVisible(tS), this.iterable && !gS && Yt(this.items, this.items.indexOf(SS)),
          function(SS, HS, gS, tS, XS) {
            const xS = SS._stream;
            if (void 0 === xS) return !1;
            const NS = xS.pendingByView.get(HS);
            if (NS?.has(tS)) return NS.delete(tS), !1;
            const qS = xS.sentByView.get(HS);
            if (qS?.has(tS)) {
              qS.delete(tS);
              let SS = XS.get(gS);
              return void 0 === SS && (SS = new Map, XS.set(gS, SS)), SS.set(tS, bS.DELETE), !0
            }
          }(tS.parent, this.id, tS.parent[NS], tS.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(tS), this;
        if (tS.isStreamCollection) {
          this.unmarkVisible(tS), this.iterable && !gS && Yt(this.items, this.items.indexOf(SS));
          const HS = tS.ref,
            XS = HS._stream;
          if (void 0 !== XS) {
            XS.pendingByView.get(this.id)?.clear();
            const SS = XS.sentByView.get(this.id);
            if (void 0 !== SS && SS.size > 0) {
              const gS = HS[NS];
              let tS = this.changes.get(gS);
              void 0 === tS && (tS = new Map, this.changes.set(gS, tS));
              for (const HS of SS) tS.set(HS, bS.DELETE);
              SS.clear()
            }
          }
          return this
        }
        this.unmarkVisible(tS), this.iterable && !gS && Yt(this.items, this.items.indexOf(SS));
        const xS = tS.ref,
          qS = xS.constructor[Symbol.metadata],
          uS = xS[NS];
        this._touchAncestorsOf(tS);
        let IS = this.changes.get(uS);
        if (void 0 === IS && (IS = new Map, this.changes.set(uS, IS)), HS === jt) {
          const SS = tS.parent;
          if (SS && !TH.isValidInstance(SS) && tS.isFiltered) {
            const HS = XS.isArray ? tS : tS.parentIndex,
              gS = SS[NS];
            let xS = this.changes.get(gS);
            void 0 === xS ? (xS = new Map, this.changes.set(gS, xS)) : xS.get(HS) === bS.ADD && this._dropPendingEntries(tS), xS.set(HS, bS.DELETE), this._recursiveDeleteVisibleChangeTree(tS)
          } else qS?.[cS]?.forEach((SS => this._removeViewField(tS, IS, SS)))
        } else {
          const SS = qS?.[vS];
          if (void 0 !== SS)
            for (let gS = HS; gS > 0; gS &= gS - 1) SS[gS & -gS]?.forEach((SS => this._removeViewField(tS, IS, SS)))
        }
        return void 0 === HS ? this.removeAllTagsOnTree(tS) : this.removeTag(tS, HS), this
      }
      has(SS) {
        return this.isVisible(SS[jS])
      }
      hasTag(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jt;
        return this.hasTagOnTree(SS[jS], HS)
      }
      subscribe(SS, HS) {
        const gS = SS?.[jS];
        if (!gS) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${Vt(SS)}`), this;
        if (void 0 === this._root && void 0 !== gS.root && this._bindRoot(gS.root), void 0 !== HS)
          if (gS.isStreamCollection) {
            const gS = OH(SS);
            null === HS ? gS.priorityByView?.delete(this.id) : (gS.priorityByView ??= new Map).set(this.id, HS)
          } else {
            const HS = SS?.constructor?.name ?? "collection",
              tS = gS.parent;
            if (void 0 === tS) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${HS} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const SS = tS?.constructor?.[Symbol.metadata]?.[gS.parentIndex]?.name,
                bS = SS ? `${tS.constructor.name}#${SS}` : HS;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${bS} is a ${HS}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(gS)) return this;
        const tS = void 0 !== gS.parent && !this.isVisible(gS);
        if (tS ? (this.addParentOf(gS, jt), this._add(SS, jt, !1, !1)) : this.markVisible(gS), this._setSubscribed(gS), gS.isStreamCollection) {
          const HS = SS;
          gS.forEachChild(((SS, gS) => {
            LH(HS, this.id, gS)
          }))
        } else tS || gS.forEachChild((SS => {
          this.markVisible(SS)
        }));
        return this
      }
      unsubscribe(SS) {
        const HS = SS?.[jS];
        if (!HS) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${Vt(SS)}`), this;
        if (!this.isSubscribed(HS)) return this;
        this._clearSubscribed(HS);
        const gS = HS.ref[NS];
        if (HS.isStreamCollection) {
          const HS = SS._stream;
          if (void 0 !== HS) {
            HS.pendingByView.get(this.id)?.clear();
            const SS = HS.sentByView.get(this.id);
            if (void 0 !== SS && SS.size > 0) {
              let HS = this.changes.get(gS);
              void 0 === HS && (HS = new Map, this.changes.set(gS, HS));
              for (const gS of SS) HS.set(gS, bS.DELETE);
              SS.clear()
            }
          }
        } else {
          const SS = HS.isArray;
          let tS = this.changes.get(gS);
          HS.forEachChild(((HS, XS) => {
            void 0 === tS && (tS = new Map, this.changes.set(gS, tS)), tS.set(SS ? HS : XS, bS.DELETE), this.unmarkVisible(HS)
          }))
        }
        return this.unmarkVisible(HS), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let SS = 0, HS = this.items.length; SS < HS; SS++) this.remove(this.items[SS], jt, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(SS) {
        let HS = this.isVisible(SS);
        if (!HS && SS.isVisibilitySharedWithParent)
          if (this.isVisible(SS.parent[jS])) this.markVisible(SS), HS = !0;
          else
            for (let gS = SS.extraParents; void 0 !== gS; gS = gS.next) {
              const tS = gS.ref[jS];
              if (tS.isFiltered && this.isVisible(tS)) {
                this.markVisible(SS), HS = !0;
                break
              }
            }
        return HS
      }
      _recursiveDeleteVisibleChangeTree(SS) {
        SS.forEachChild((SS => {
          this.unmarkVisible(SS), this._recursiveDeleteVisibleChangeTree(SS)
        }))
      }
      _dropPendingEntries(SS) {
        this.changes.delete(SS.ref[NS]), SS.forEachChild((SS => this._dropPendingEntries(SS)))
      }
      _removeViewField(SS, HS, gS) {
        const tS = HS.get(gS) === bS.ADD;
        HS.set(gS, bS.DELETE);
        const XS = SS.ref[SS.encDescriptor.names[gS]],
          xS = XS?.[jS];
        xS && (this.unmarkVisible(xS), this._recursiveDeleteVisibleChangeTree(xS), tS && this._dropPendingEntries(xS))
      }
    }

    function Wt(SS) {
      SS.structSwitchEmitted || (SS.shouldEmitSwitch && (SS.buffer[SS.it.offset++] = 255, HH.number(SS.buffer, SS.ref[NS], SS.it)), SS.structSwitchEmitted = !0)
    }

    function zt(SS, HS) {
      st(SS, HS, bS.ADD)
    }

    function Ut(SS, HS) {
      if (HS._fullSyncGen === SS.gen) return;
      HS._fullSyncGen = SS.gen;
      if (!SS.hasView || SS.view.isChangeTreeVisible(HS)) {
        const gS = HS.encDescriptor;
        SS.changeTree = HS, SS.ref = HS.ref, SS.encoder = gS.encoder, SS.filter = gS.filter, SS.metadata = gS.metadata, SS.treeIsFiltered = HS.isFiltered, SS.isSchema = gS.isSchema, SS.filterBitmask = gS.filterBitmask, SS.tags = gS.tags, SS.structSwitchEmitted = !1, SS.shouldEmitSwitch = SS.hasView || SS.it.offset > SS.initialOffset || HS !== SS.rootChangeTree, HS.isArray && HS.collDirty.size > 0 && (HS.flags |= 512), bg(HS, SS, zt)
      }
      Cg(HS, SS, pt)
    }

    function pt(SS, HS, gS) {
      Ut(SS, HS)
    }

    function st(SS, HS, gS) {
      if (HS < 0) {
        if (SS.treeIsFiltered !== SS.emitFiltered) return;
        return Wt(SS), void(SS.buffer[SS.it.offset++] = 255 & Math.abs(HS))
      }
      if ((SS.isSchema ? SS.treeIsFiltered || (HS < 32 ? 0 !== (SS.filterBitmask & 1 << HS) : void 0 !== SS.tags[HS]) : SS.treeIsFiltered) !== SS.emitFiltered) return;
      const tS = SS.isEncodeAll ? bS.ADD : gS;
      void 0 !== tS && (void 0 === SS.filter || SS.filter(SS.ref, HS, SS.view)) && (Wt(SS), SS.encoder(SS.self, SS.buffer, SS.changeTree, HS, tS, SS.it, SS.isEncodeAll, SS.hasView, SS.metadata))
    }

    function Bt(SS, HS) {
      const gS = new Uint8Array(SS.length + HS.length);
      return gS.set(SS, 0), gS.set(HS, SS.length), gS
    }
    class Mt {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(Mt.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(SS, HS) {
        this.context = UH.cache(SS.constructor), this.root = HS ?? new Lt(this.context), this.setState(SS)
      }
      setState(SS) {
        this.state = SS, this.state[jS].setRoot(this.root)
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
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS.offset;
        return this._encodeChannel(SS, HS, gS, tS, !1)
      }
      encodeUnreliable() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS.offset;
        return this._encodeChannel(SS, HS, gS, tS, !0)
      }
      _encodeChannel(SS, HS, gS, tS, bS) {
        this.root.pendingFilterRefresh.length > 0 && xg(this.root);
        const XS = void 0 !== HS,
          xS = this.state[jS],
          NS = this._encodeCtx;
        NS.self = this, NS.buffer = gS, NS.it = SS, NS.view = HS, NS.isEncodeAll = !1, NS.hasView = XS, NS.emitFiltered = XS;
        let qS = bS ? this.root.unreliableChanges : this.root.changes;
        for (; qS = qS.next;) {
          const gS = qS.changeTree;
          if (XS && !HS.isChangeTreeVisible(gS)) continue;
          const uS = bS ? gS.unreliableRecorder : gS;
          if (!uS || !uS.has()) continue;
          const IS = gS.encDescriptor;
          NS.changeTree = gS, NS.ref = gS.ref, NS.encoder = IS.encoder, NS.filter = IS.filter, NS.metadata = IS.metadata, NS.treeIsFiltered = gS.isFiltered, NS.isSchema = IS.isSchema, NS.filterBitmask = IS.filterBitmask, NS.tags = IS.tags, NS.structSwitchEmitted = !1, NS.isRootTree = gS === xS, NS.shouldEmitSwitch = XS || SS.offset > tS || !NS.isRootTree, uS.forEachWithCtx(NS, st)
        }
        return bS || XS || !this._isStreamBroadcastMode || this._emitStreamBroadcast(gS, SS), SS.offset > gS.byteLength ? (gS = this._resizeBuffer(gS, SS.offset), SS.offset = tS, this._encodeChannel(SS, HS, gS, tS, bS)) : gS.subarray(0, SS.offset)
      }
      encodeFullSync(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : SS.offset;
        this.root.pendingFilterRefresh.length > 0 && xg(this.root);
        const XS = void 0 !== tS,
          xS = this.state[jS],
          NS = this._encodeCtx;
        return NS.self = this, NS.buffer = HS, NS.it = SS, NS.view = tS, NS.isEncodeAll = !0, NS.hasView = XS, NS.emitFiltered = gS, NS.gen = ++this._fullSyncGen, NS.initialOffset = bS, NS.rootChangeTree = xS, Ut(NS, xS), SS.offset > HS.byteLength ? (HS = this._resizeBuffer(HS, SS.offset), SS.offset = bS, this.encodeFullSync(SS, HS, gS, tS, bS)) : HS.subarray(0, SS.offset)
      }
      _resizeBuffer(SS, HS) {
        const gS = Math.ceil(HS / Mt.BUFFER_SIZE) * Mt.BUFFER_SIZE,
          tS = new Uint8Array(gS);
        return tS.set(SS), SS === this.sharedBuffer && (this.sharedBuffer = tS), tS
      }
      encodeAll() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(SS, HS, !1)
      }
      encodeAllView(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const bS = gS.offset;
        return tS = this.encodeFullSync(gS, tS, !0, SS, bS), Bt(tS.subarray(0, HS), tS.subarray(bS, gS.offset))
      }
      ensureCapacity(SS, HS) {
        if (HS + Mt.BUFFER_SIZE <= SS.byteLength) return SS;
        const gS = Math.ceil((HS + Mt.BUFFER_SIZE) / Mt.BUFFER_SIZE) * Mt.BUFFER_SIZE,
          tS = new Uint8Array(gS);
        return tS.set(SS.subarray(0, HS)), SS === this.sharedBuffer && (this.sharedBuffer = tS), tS
      }
      encodeView(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          XS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const xS = gS.offset;
        this._emitStreamPriority(SS);
        for (const qS of SS.changes.keys()) {
          const HS = SS.changes.get(qS),
            XS = this.root.changeTrees[qS];
          if (void 0 === XS) {
            SS.changes.delete(qS);
            continue
          }
          if (0 === HS.size) continue;
          const xS = XS.encDescriptor,
            uS = xS.encoder,
            IS = xS.metadata,
            fS = XS.ref,
            aS = XS.refTarget;
          tS = this.ensureCapacity(tS, gS.offset), tS[gS.offset++] = 255, HH.number(tS, fS[NS], gS);
          for (const [qS, KS] of HS) {
            let HS;
            if (-1 === qS) {
              const SS = aS.tmpItems,
                HS = aS.deletedIndexes;
              for (let xS = 0; xS < SS.length; xS++) void 0 !== SS[xS] && !0 !== HS[xS] && uS(this, tS, XS, xS, bS.ADD, gS, !1, !0, IS);
              continue
            }
            if ("number" === typeof qS) HS = qS;
            else {
              const gS = qS.indexInParent(fS);
              if (void 0 === gS) continue;
              if (HS = gS, KS === bS.ADD && XS.getChange(HS) === bS.DELETE) {
                SS.changes.delete(qS.ref[NS]);
                continue
              }
            }
            uS(this, tS, XS, HS, void 0 !== aS[kS](HS) && KS || bS.DELETE, gS, !1, !0, IS)
          }
        }
        return SS.changes.clear(), tS = this.encode(gS, SS, tS), XS ? Bt(tS.subarray(0, HS), tS.subarray(xS, gS.offset)) : tS.subarray(xS, gS.offset)
      }
      encodeUnreliableView(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const bS = gS.offset;
        return tS = this.encodeUnreliable(gS, SS, tS, bS), Bt(tS.subarray(0, HS), tS.subarray(bS, gS.offset))
      }
      _emitStreamBroadcast(SS, HS) {
        const gS = this.root.streamTrees;
        for (const tS of gS) {
          const gS = tS,
            XS = gS[jS],
            xS = gS[NS];
          if (void 0 === xS) continue;
          const qS = gS._stream,
            uS = qS.broadcastDeletes,
            IS = qS.broadcastPending,
            fS = qS.sentBroadcast,
            aS = uS.size > 0,
            KS = IS.size > 0,
            GS = XS.encDescriptor,
            CS = GS.encoder,
            nS = GS.metadata;
          if (aS || KS) {
            if (SS[HS.offset++] = 255, HH.number(SS, xS, HS), aS) {
              for (const gS of uS) CS(this, SS, XS, gS, bS.DELETE, HS, !1, !1, nS);
              uS.clear()
            }
            const tS = qS.maxPerTick,
              KS = [];
            let GS = 0;
            const PS = [];
            for (const xS of IS) {
              if (GS >= tS) break;
              const NS = gS[kS](xS);
              void 0 !== NS ? (CS(this, SS, XS, xS, bS.ADD, HS, !1, !1, nS), fS.add(xS), KS.push(NS), PS.push(xS), GS++) : PS.push(xS)
            }
            for (const SS of PS) IS.delete(SS);
            for (const gS of KS) {
              const tS = gS[jS];
              if (void 0 === tS) continue;
              const XS = gS[NS];
              if (void 0 === XS) continue;
              SS[HS.offset++] = 255, HH.number(SS, XS, HS);
              const xS = tS.encDescriptor,
                qS = xS.encoder,
                uS = xS.metadata;
              tS.forEachLive((gS => {
                TH.hasUnreliableAtIndex(uS, gS) || qS(this, SS, tS, gS, bS.ADD, HS, !1, !1, uS)
              }))
            }
          }
          for (const tS of fS) {
            const bS = gS[kS](tS);
            if (void 0 === bS) continue;
            const XS = bS[jS];
            if (void 0 === XS || !XS.has()) continue;
            const xS = bS[NS];
            if (void 0 === xS) continue;
            SS[HS.offset++] = 255, HH.number(SS, xS, HS);
            const qS = XS.encDescriptor,
              uS = qS.encoder,
              IS = qS.metadata;
            XS.forEach(((gS, tS) => {
              gS < 0 || TH.hasUnreliableAtIndex(IS, gS) || uS(this, SS, XS, gS, tS, HS, !1, !1, IS)
            }))
          }
        }
      }
      _emitStreamPriority(SS) {
        const HS = this.root.streamTrees;
        if (0 === HS.size) return;
        const gS = SS.id;
        for (const tS of HS) {
          const HS = tS,
            XS = HS._stream,
            xS = XS.pendingByView.get(gS);
          if (void 0 === xS || 0 === xS.size) continue;
          const qS = XS.priorityByView?.get(gS),
            uS = void 0 !== qS,
            IS = XS.priority,
            fS = XS.maxPerTick,
            aS = [],
            KS = [];
          if (uS || void 0 !== IS) {
            const gS = [],
              tS = [];
            let bS = 0;
            for (const XS of xS) {
              const xS = HS[kS](XS);
              if (void 0 === xS) {
                KS.push(XS);
                continue
              }
              const NS = uS ? qS(xS) : IS(SS, xS);
              if (bS < fS) {
                let SS = bS++;
                for (; SS > 0 && tS[SS - 1] < NS;) tS[SS] = tS[SS - 1], gS[SS] = gS[SS - 1], SS--;
                tS[SS] = NS, gS[SS] = XS
              } else if (NS > tS[fS - 1]) {
                let SS = fS - 1;
                for (; SS > 0 && tS[SS - 1] < NS;) tS[SS] = tS[SS - 1], gS[SS] = gS[SS - 1], SS--;
                tS[SS] = NS, gS[SS] = XS
              }
            }
            for (let SS = 0; SS < bS; SS++) aS.push(gS[SS])
          } else
            for (const SS of xS) {
              if (aS.length >= fS) break;
              aS.push(SS)
            }
          for (const SS of KS) xS.delete(SS);
          const GS = aS.length;
          let CS = XS.sentByView.get(gS);
          void 0 === CS && (CS = new Set, XS.sentByView.set(gS, CS));
          for (let gS = 0; gS < GS; gS++) {
            const tS = aS[gS],
              XS = HS[kS](tS);
            if (void 0 === XS) {
              xS.delete(tS);
              continue
            }
            SS._addImmediate(XS);
            const qS = XS[jS];
            if (void 0 !== qS) {
              const HS = XS[NS];
              let gS = SS.changes.get(HS);
              void 0 === gS && (gS = new Map, SS.changes.set(HS, gS));
              const tS = qS.metadata;
              qS.forEachLive((SS => {
                TH.hasUnreliableAtIndex(tS, SS) || gS.set(SS, bS.ADD)
              }))
            }
            xS.delete(tS), CS.add(tS)
          }
        }
      }
      discardChanges() {
        const SS = this.root.changes;
        let HS = SS.next;
        const gS = this.root;
        for (; HS;) {
          const SS = HS.next;
          HS.changeTree.endEncode(), gS.releaseNode(HS), HS = SS
        }
        SS.next = void 0, SS.tail = void 0
      }
      discardUnreliableChanges() {
        const SS = this.root.unreliableChanges;
        let HS = SS.next;
        const gS = this.root;
        for (; HS;) {
          const SS = HS.next;
          HS.changeTree.endEncodeUnreliable(), gS.releaseNode(HS), HS = SS
        }
        SS.next = void 0, SS.tail = void 0
      }
      tryEncodeTypeId(SS, HS, gS, tS) {
        const bS = this.context.getTypeId(HS),
          XS = this.context.getTypeId(gS);
        void 0 !== XS ? bS !== XS && (SS[tS.offset++] = 213, HH.number(SS, XS, tS)) : console.warn(`@colyseus/schema WARNING: Class "${gS.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const SS = this.root;
        if (0 === SS.streamTrees.size) return !1;
        const HS = 0 === SS.activeViews.size;
        for (const gS of SS.streamTrees)
          if (HS ? EH(gS) : vH(gS, SS)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class Ft extends Error {
      constructor(SS) {
        super(SS), this.name = "DecodingWarning"
      }
    }
    const Rt = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Tt {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(SS, HS), void 0 === HS[NS] ? (Rt.value = SS, Object.defineProperty(HS, NS, Rt)) : HS[NS] !== SS && (HS[NS] = SS), gS && (this.refCount[SS] = (this.refCount[SS] || 0) + 1), this.deletedRefs.has(SS) && this.deletedRefs.delete(SS)
      }
      removeRef(SS) {
        const HS = this.refCount[SS];
        if (void 0 !== HS)
          if (0 !== HS)(this.refCount[SS] = HS - 1) <= 0 && this.deletedRefs.add(SS);
          else try {
            const HS = this.refs.get(SS);
            throw new Ft(`trying to remove refId '${SS}' with 0 refCount (${HS.constructor.name}: ${JSON.stringify(HS)})`)
          } catch (xb) {
            console.warn(xb)
          } else try {
            throw new Ft("trying to remove refId that doesn't exist: " + SS)
          } catch (xb) {
            console.warn(xb)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((SS => {
          if (this.refCount[SS] > 0) return;
          const HS = this.refs.get(SS),
            gS = HS.constructor[Symbol.metadata];
          if (null != gS)
            for (const tS in gS) {
              const SS = HS[gS[tS].name];
              if ("object" === typeof SS && SS) {
                const HS = SS[NS];
                void 0 === HS || this.deletedRefs.has(HS) || this.removeRef(HS)
              }
            } else "function" === typeof HS[GS] && Array.from(HS.values()).forEach((SS => {
              const HS = SS[NS];
              void 0 === HS || this.deletedRefs.has(HS) || this.removeRef(HS)
            }));
          this.refs.delete(SS), delete this.refCount[SS], delete this.callbacks[SS]
        })), this.deletedRefs.clear()
      }
      addCallback(SS, HS, gS) {
        if (void 0 === SS) {
          const SS = "number" === typeof HS ? bS[HS] : HS;
          throw new Error(`Can't addCallback on '${SS}' (refId is undefined)`)
        }
        return this.callbacks[SS] || (this.callbacks[SS] = {}), this.callbacks[SS][HS] || (this.callbacks[SS][HS] = []), this.callbacks[SS][HS].push(gS), () => this.removeCallback(SS, HS, gS)
      }
      removeCallback(SS, HS, gS) {
        const tS = this.callbacks?.[SS]?.[HS]?.indexOf(gS);
        void 0 !== tS && -1 !== tS && Yt(this.callbacks[SS][HS], tS)
      }
    }
    class ot {
      context;
      state;
      root;
      currentRefId = 0;
      fL;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(SS, HS) {
        this.setState(SS), this.context = HS || new UH(SS.constructor)
      }
      setState(SS) {
        this.state = SS, this.root = new Tt, this.root.addRef(0, SS)
      }
      decode(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const bS = void 0 !== this.fL ? [] : null,
          XS = this.root,
          xS = SS.byteLength;
        let NS = gS.constructor[IS];
        for (this.currentRefId = 0; HS.offset < xS;) {
          if (SS[HS.offset] == tS) {
            HS.offset++, gS[QS]?.();
            const tS = PH.number(SS, HS),
              bS = XS.refs.get(tS);
            bS ? (gS = bS, NS = gS.constructor[IS], this.currentRefId = tS) : (console.error(`"refId" not found: ${tS}`, {
              previousRef: gS,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(SS, HS, xS));
            continue
          } - 1 !== NS(this, SS, HS, gS, bS) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(SS, HS, xS))
        }
        return gS[QS]?.(), null !== this.resyncVisited && function(SS, HS) {
          SS.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Ug(SS, SS.state, new Set, HS)
        }(this, bS), null !== bS && this.fL?.(bS), XS.garbageCollectDeletedRefs(), bS
      }
      decodeResync(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(SS, HS)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(SS, HS, gS) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const bS = {
          offset: HS.offset
        };
        for (; HS.offset < gS && (SS[HS.offset] !== tS || (bS.offset = HS.offset + 1, !this.root.refs.has(PH.number(SS, bS))));) HS.offset++
      }
      getInstanceType(SS, HS, gS) {
        let tS;
        if (213 === SS[HS.offset]) {
          HS.offset++;
          const gS = PH.number(SS, HS);
          tS = this.context.get(gS)
        }
        return tS || gS
      }
      createInstanceOfType(SS) {
        return SS.initializeForDecoder()
      }
      removeChildRefs(SS, HS) {
        const gS = "string" !== typeof SS[GS],
          tS = SS[NS];
        SS.forEach(((XS, xS) => {
          HS?.push({
            ref: SS,
            refId: tS,
            op: bS.DELETE,
            field: xS,
            value: void 0,
            previousValue: XS
          }), gS && this.root.removeRef(XS[NS])
        }))
      }
    }
    const lt = dt({
        min: Kt.float64(),
        max: Kt.float64(),
        bits: Kt.uint8(),
        mode: Kt.uint8()
      }, "QuantizedDescriptor"),
      mt = dt({
        name: Kt.string(),
        type: Kt.string(),
        referencedType: Kt.number(),
        childPrimitive: Kt.string(),
        quantized: Kt.ref(lt).optional()
      }, "ReflectionField"),
      et = dt({
        id: Kt.number(),
        extendsId: Kt.number(),
        fields: Kt.array(mt)
      }, "ReflectionType"),
      rt = dt({
        types: Kt.array(et),
        rootType: Kt.number()
      }, "Reflection");

    function Sb(SS) {
      const HS = SS.root,
        gS = HS.callbacks,
        tS = new WeakMap;
      let XS;

      function xS(SS, gS) {
        let uS = gS.instance?.constructor[Symbol.metadata] || SS,
          IS = gS.instance && "function" === typeof gS.instance.forEach || SS && !vt.is(SS);
        if (uS && !IS) {
          const SS = function(SS, bS, xS, qS) {
            return qS && void 0 !== gS.instance[bS] && !tS.has(XS) && xS(gS.instance[bS], void 0), HS.addCallback(SS[NS], bS, xS)
          };
          return new Proxy({
            listen: function(HS, bS) {
              let xS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (gS.instance) return SS(gS.instance, HS, bS, xS);
              {
                let NS = () => {};
                return gS.onInstanceAvailable(((gS, qS) => {
                  NS = SS(gS, HS, bS, xS && qS && !tS.has(XS))
                })), () => NS()
              }
            },
            onChange: function(SS) {
              return HS.addCallback(gS.instance[NS], bS.REPLACE, SS)
            },
            bindTo: function(SS, tS) {
              return tS || (tS = Object.keys(uS).map((SS => uS[SS].name))), HS.addCallback(gS.instance[NS], bS.REPLACE, (() => {
                tS.forEach((HS => SS[HS] = gS.instance[HS]))
              }))
            }
          }, {
            get(SS, HS) {
              const tS = uS[uS[HS]];
              if (tS) {
                const SS = gS.instance?.[HS],
                  bS = tS => {
                    const bS = qS(gS.instance).listen(HS, ((SS, HS) => {
                      tS(SS, !1), bS?.()
                    }), !1);
                    void 0 !== SS?.[NS] && tS(SS, !0)
                  };
                return xS(tS.type, {
                  instance: void 0 !== SS?.[NS] && SS,
                  parentInstance: gS.instance,
                  onInstanceAvailable: bS
                })
              }
              return SS[HS]
            },
            has: (SS, HS) => void 0 !== uS[HS],
            set(SS, HS, gS) {
              throw new Error("not allowed")
            },
            deleteProperty(SS, HS) {
              throw new Error("not allowed")
            }
          })
        } {
          const SS = function(SS, gS, xS) {
              return xS && SS.forEach(((SS, HS) => gS(SS, HS))), HS.addCallback(SS[NS], bS.ADD, ((SS, HS) => {
                tS.set(gS, !0), XS = gS, gS(SS, HS), tS.delete(gS), XS = void 0
              }))
            },
            xS = function(SS, gS) {
              return HS.addCallback(SS[NS], bS.DELETE, gS)
            },
            qS = function(SS, gS) {
              return HS.addCallback(SS[NS], bS.REPLACE, gS)
            };
          return new Proxy({
            EQ: function(HS) {
              let bS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (gS.instance) return SS(gS.instance, HS, bS && !tS.has(XS));
              if (gS.onInstanceAvailable) {
                let xS = () => {};
                return gS.onInstanceAvailable(((gS, NS) => {
                  xS = SS(gS, HS, bS && NS && !tS.has(XS))
                })), () => xS()
              }
            },
            pE: function(SS) {
              if (gS.instance) return xS(gS.instance, SS);
              if (gS.onInstanceAvailable) {
                let HS = () => {};
                return gS.onInstanceAvailable((gS => {
                  HS = xS(gS, SS)
                })), () => HS()
              }
            },
            onChange: function(SS) {
              if (gS.instance) return qS(gS.instance, SS);
              if (gS.onInstanceAvailable) {
                let HS = () => {};
                return gS.onInstanceAvailable((gS => {
                  HS = qS(gS, SS)
                })), () => HS()
              }
            }
          }, {
            get(SS, HS) {
              if (!SS[HS]) throw new Error(`Can't access '${HS}' through callback proxy. access the instance directly.`);
              return SS[HS]
            },
            has: (SS, HS) => void 0 !== SS[HS],
            set(SS, HS, gS) {
              throw new Error("not allowed")
            },
            deleteProperty(SS, HS) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function qS(SS) {
        return xS(void 0, {
          instance: SS
        })
      }
      return SS.fL = function(SS) {
        const HS = new Set;
        for (let tS = 0, XS = SS.length; tS < XS; tS++) {
          const XS = SS[tS],
            xS = XS.refId,
            qS = XS.ref,
            uS = gS[xS];
          if (uS) {
            if ((XS.op & bS.DELETE) === bS.DELETE && vt.isSchema(XS.previousValue)) {
              const SS = gS[XS.previousValue[NS]]?.[bS.DELETE];
              for (let HS = SS?.length - 1; HS >= 0; HS--) SS[HS]()
            }
            if (vt.isSchema(qS)) {
              if (!HS.has(xS)) {
                const SS = uS?.[bS.REPLACE];
                for (let HS = SS?.length - 1; HS >= 0; HS--) SS[HS]()
              }
              if (uS.hasOwnProperty(XS.field)) {
                const SS = uS[XS.field];
                for (let HS = SS?.length - 1; HS >= 0; HS--) SS[HS](XS.value, XS.previousValue)
              }
            } else {
              if ((XS.op & bS.DELETE) === bS.DELETE) {
                if (void 0 !== XS.previousValue) {
                  const SS = uS[bS.DELETE];
                  for (let HS = SS?.length - 1; HS >= 0; HS--) SS[HS](XS.previousValue, XS.dynamicIndex ?? XS.field)
                }
                if ((XS.op & bS.ADD) === bS.ADD) {
                  const SS = uS[bS.ADD];
                  for (let HS = SS?.length - 1; HS >= 0; HS--) SS[HS](XS.value, XS.dynamicIndex ?? XS.field)
                }
              } else if ((XS.op & bS.ADD) === bS.ADD && XS.previousValue !== XS.value) {
                const SS = uS[bS.ADD];
                for (let HS = SS?.length - 1; HS >= 0; HS--) SS[HS](XS.value, XS.dynamicIndex ?? XS.field)
              }
              if (XS.value !== XS.previousValue && (void 0 !== XS.value || void 0 !== XS.previousValue)) {
                const SS = uS[bS.REPLACE];
                for (let HS = SS?.length - 1; HS >= 0; HS--) SS[HS](XS.value, XS.dynamicIndex ?? XS.field)
              }
            }
            HS.add(xS)
          }
        }
      }, qS
    }

    function Hb(SS, HS) {
      SS.fL = HS
    }
    rt.encode = function(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const gS = SS.context,
        tS = new rt,
        bS = new Mt(tS),
        XS = gS.schemas.get(SS.state.constructor);
      XS > 0 && (tS.rootType = XS);
      const xS = new Set,
        NS = {},
        qS = SS => {
          if (void 0 === SS.extendsId || xS.has(SS.extendsId)) {
            xS.add(SS.id), tS.types.push(SS);
            const HS = NS[SS.id];
            void 0 !== HS && (delete NS[SS.id], HS.forEach((SS => qS(SS))))
          } else void 0 === NS[SS.extendsId] && (NS[SS.extendsId] = []), NS[SS.extendsId].push(SS)
        };
      gS.schemas.forEach(((SS, HS) => {
        const tS = new et;
        tS.id = Number(SS);
        const bS = Object.getPrototypeOf(HS);
        bS !== vt && (tS.extendsId = gS.schemas.get(bS));
        const XS = HS[Symbol.metadata];
        if (XS !== bS[Symbol.metadata]) {
          const SS = XS[OS] ?? -1;
          for (let HS = 0; HS <= SS; HS++) {
            const SS = XS[HS];
            if (void 0 === SS) continue;
            const bS = SS.name;
            if (!Object.prototype.hasOwnProperty.call(XS, bS)) continue;
            const xS = new mt;
            let NS;
            if (xS.name = bS, "string" === typeof SS.type) NS = SS.type;
            else if (VH(SS.type)) {
              const HS = SS.type.quantized;
              NS = "quantized";
              const gS = new lt;
              gS.min = HS.min, gS.max = HS.max, gS.bits = HS.bits, gS.mode = HS.wrap ? 1 : 0, xS.quantized = gS
            } else {
              let HS;
              vt.is(SS.type) ? (NS = "ref", HS = SS.type) : (NS = Object.keys(SS.type)[0], "string" === typeof SS.type[NS] ? xS.childPrimitive = SS.type[NS] : HS = SS.type[NS]), xS.referencedType = HS ? gS.getTypeId(HS) : -1
            }
            xS.type = NS, tS.fields.push(xS)
          }
        }
        qS(tS)
      }));
      for (const uS in NS) NS[uS].forEach((SS => tS.types.push(SS)));
      return bS.encodeAll(HS).slice(0, HS.offset)
    }, rt.decode = function(SS, HS) {
      const gS = new rt;
      new ot(gS).decode(SS, HS);
      const tS = new UH;
      gS.types.forEach((SS => {
        const HS = tS.get(SS.extendsId) ?? vt,
          gS = class extends HS {};
        UH.register(gS), tS.add(gS, SS.id)
      }), {});
      gS.types.forEach((SS => {
        const HS = tS.get(SS.id),
          bS = TH.initialize(HS),
          XS = [];
        let xS = SS;
        do {
          XS.push(xS), xS = gS.types.find((SS => SS.id === xS.extendsId))
        } while (xS);
        let NS = 0;
        XS.reverse().forEach((SS => {
          ((SS, HS, gS) => {
            HS.fields.forEach(((HS, bS) => {
              const XS = gS + bS;
              if (void 0 !== HS.quantized) {
                const gS = HS.quantized;
                TH.addField(SS, XS, HS.name, {
                  quantized: yH({
                    min: gS.min,
                    max: gS.max,
                    bits: gS.bits,
                    mode: 1 === gS.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== HS.referencedType) {
                const gS = HS.type,
                  bS = tS.get(HS.referencedType) ?? HS.childPrimitive;
                "ref" === gS ? TH.addField(SS, XS, HS.name, bS) : TH.addField(SS, XS, HS.name, {
                  [gS]: bS
                })
              } else TH.addField(SS, XS, HS.name, HS.type)
            }))
          })(bS, SS, NS), NS += SS.fields.length
        }))
      }));
      const bS = new(tS.get(gS.rootType || 0));
      return new ot(bS, tS)
    }, rt.makeEncodable = function(SS) {
      const HS = SS[Symbol.metadata];
      if (!HS) return SS;
      const gS = HS[OS];
      if (void 0 === gS) return SS;
      for (let tS = 0; tS <= gS; tS++) {
        const gS = HS[tS];
        gS && TH.defineField(SS, HS, tS, gS.name, gS.type)
      }
      return Object.prototype.hasOwnProperty.call(SS, ZS) && delete SS[ZS], SS
    };
    class gb {
      NK;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(SS) {
        this.NK = SS, this.NK.fL = this.fL.bind(this)
      }
      get callbacks() {
        return this.NK.root.callbacks
      }
      get state() {
        return this.NK.state
      }
      addCallback(SS, HS, gS) {
        return this.NK.root.addCallback(SS, HS, gS)
      }
      addCallbackOrWaitCollectionAvailable(SS, HS, gS, tS) {
        let XS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          xS = () => {};
        const qS = () => xS(),
          uS = SS[HS];
        if (uS && void 0 !== uS[NS]) return XS = XS && !1 === this.isTriggering, gS === bS.ADD && XS && uS.forEach(((SS, HS) => {
          tS(SS, HS)
        })), this.addCallback(uS[NS], gS, tS);
        {
          let bS;
          return bS = this.addCallback(SS[NS], HS, ((SS, HS) => {
            null !== SS && void 0 !== SS && (bS(), xS = this.addCallback(SS[NS], gS, tS))
          })), xS = bS, qS
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(SS, HS, gS) {
        let tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        tS = tS && !1 === this.isTriggering;
        const bS = SS[HS];
        return tS && null !== bS && void 0 !== bS && gS(bS, void 0), this.addCallback(SS[NS], HS, gS)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const SS = arguments.length <= 0 ? void 0 : arguments[0],
            HS = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(SS[NS], bS.REPLACE, HS)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], bS.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], bS.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      EQ() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], bS.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], bS.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      pE() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], bS.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], bS.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(SS, HS, gS) {
        let tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const XS = SS.constructor[Symbol.metadata];
        gS || (gS = Object.keys(XS).filter((SS => !isNaN(Number(SS)))).map((SS => XS[SS].name)));
        const xS = () => {
          for (const tS of gS) {
            const gS = SS[tS];
            void 0 !== gS && (HS[tS] = gS)
          }
        };
        return tS && xS(), this.addCallback(SS[NS], bS.REPLACE, xS)
      }
      fL(SS) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let HS = 0, gS = SS.length; HS < gS; HS++) {
          const gS = SS[HS],
            tS = gS.refId,
            XS = gS.ref,
            xS = this.callbacks[tS];
          if (xS) {
            if ((gS.op & bS.DELETE) === bS.DELETE && vt.isSchema(gS.previousValue)) {
              const SS = gS.previousValue[NS],
                HS = this.callbacks[SS]?.[bS.DELETE];
              if (HS)
                for (let gS = HS.length - 1; gS >= 0; gS--) try {
                  HS[gS]()
                } catch (xb) {
                  console.error(xb)
                }
            }
            if (vt.isSchema(XS)) {
              if (!this.uniqueRefIds.has(tS)) {
                const SS = xS[bS.REPLACE];
                if (SS)
                  for (let HS = SS.length - 1; HS >= 0; HS--) try {
                    SS[HS]()
                  } catch (xb) {
                    console.error(xb)
                  }
              }
              const SS = xS[gS.field];
              if (SS)
                for (let HS = SS.length - 1; HS >= 0; HS--) try {
                  SS[HS](gS.value, gS.previousValue)
                } catch (xb) {
                  console.error(xb)
                }
            } else {
              const SS = gS.dynamicIndex ?? gS.field;
              if ((gS.op & bS.DELETE) === bS.DELETE) {
                if (void 0 !== gS.previousValue) {
                  const HS = xS[bS.DELETE];
                  if (HS)
                    for (let tS = HS.length - 1; tS >= 0; tS--) try {
                      HS[tS](gS.previousValue, SS)
                    } catch (xb) {
                      console.error(xb)
                    }
                }
                if ((gS.op & bS.ADD) === bS.ADD) {
                  const HS = xS[bS.ADD];
                  if (HS)
                    for (let tS = HS.length - 1; tS >= 0; tS--) try {
                      HS[tS](gS.value, SS)
                    } catch (xb) {
                      console.error(xb)
                    }
                }
              } else if ((gS.op & bS.ADD) === bS.ADD && gS.previousValue !== gS.value) {
                const HS = xS[bS.ADD];
                if (HS)
                  for (let tS = HS.length - 1; tS >= 0; tS--) try {
                    HS[tS](gS.value, SS)
                  } catch (xb) {
                    console.error(xb)
                  }
              }
              if (gS.value !== gS.previousValue) {
                const HS = xS[bS.REPLACE];
                if (HS)
                  for (let tS = HS.length - 1; tS >= 0; tS--) try {
                    HS[tS](SS, gS.value)
                  } catch (xb) {
                    console.error(xb)
                  }
              }
            }
            this.uniqueRefIds.add(tS)
          }
        }
        this.isTriggering = !1
      }
    }
    const tb = {
      get(SS) {
        if (SS instanceof ot) return new gb(SS);
        if ("NK" in SS.nC) return new gb(SS.nC.NK);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(SS) {
        if (SS instanceof ot) return Sb(SS);
        if ("NK" in SS.nC) return Sb(SS.nC.NK);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (SS, HS) => Hb(SS, HS)
    };
    class bb {
      _free = [];
      _factory;
      _maxSize;
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = SS, this._maxSize = HS.maxSize ?? 1 / 0;
        const gS = HS.preallocate ?? 0;
        for (let tS = 0; tS < gS; tS++) this._free.push(SS())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(SS) {
        vt.reset(SS), this._free.length < this._maxSize && this._free.push(SS)
      }
      get size() {
        return this._free.length
      }
    }

    function Xb(SS) {
      return new bb((() => new SS), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    wH("map", {
      constructor: bt
    }), wH("array", {
      constructor: gt
    }), wH("set", {
      constructor: xt
    }), wH("collection", {
      constructor: Xt
    })
  },
  9249: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      __addDisposableResource: () => VS,
      __assign: () => XS,
      __asyncDelegator: () => JS,
      __asyncGenerator: () => ZS,
      __asyncValues: () => OS,
      __await: () => hS,
      __awaiter: () => KS,
      __classPrivateFieldGet: () => YS,
      __classPrivateFieldIn: () => yS,
      __classPrivateFieldSet: () => AS,
      __createBinding: () => GS,
      __decorate: () => NS,
      __disposeResources: () => WS,
      __esDecorate: () => uS,
      __exportStar: () => CS,
      __extends: () => bS,
      __generator: () => jS,
      __importDefault: () => LS,
      __importStar: () => ES,
      __makeTemplateObject: () => dS,
      __metadata: () => aS,
      __param: () => qS,
      __propKey: () => fS,
      __read: () => PS,
      __rest: () => xS,
      __rewriteRelativeImportExtension: () => zS,
      __runInitializers: () => IS,
      __setFunctionName: () => kS,
      __spread: () => QS,
      __spreadArray: () => wS,
      __spreadArrays: () => DS,
      __values: () => nS,
      default: () => US
    });
    var tS = function(SS, HS) {
      return tS = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(SS, HS) {
        SS.__proto__ = HS
      } || function(SS, HS) {
        for (var gS in HS) Object.prototype.hasOwnProperty.call(HS, gS) && (SS[gS] = HS[gS])
      }, tS(SS, HS)
    };

    function bS(SS, HS) {
      if ("function" !== typeof HS && null !== HS) throw new TypeError("Class extends value " + String(HS) + " is not a constructor or null");

      function gS() {
        this.constructor = SS
      }
      tS(SS, HS), SS.prototype = null === HS ? Object.create(HS) : (gS.prototype = HS.prototype, new gS)
    }
    var XS = function() {
      return XS = Object.assign || function(SS) {
        for (var HS, gS = 1, tS = arguments.length; gS < tS; gS++)
          for (var bS in HS = arguments[gS]) Object.prototype.hasOwnProperty.call(HS, bS) && (SS[bS] = HS[bS]);
        return SS
      }, XS.apply(this, arguments)
    };

    function xS(SS, HS) {
      var gS = {};
      for (var tS in SS) Object.prototype.hasOwnProperty.call(SS, tS) && HS.indexOf(tS) < 0 && (gS[tS] = SS[tS]);
      if (null != SS && "function" === typeof Object.getOwnPropertySymbols) {
        var bS = 0;
        for (tS = Object.getOwnPropertySymbols(SS); bS < tS.length; bS++) HS.indexOf(tS[bS]) < 0 && Object.prototype.propertyIsEnumerable.call(SS, tS[bS]) && (gS[tS[bS]] = SS[tS[bS]])
      }
      return gS
    }

    function NS(SS, HS, gS, tS) {
      var bS, XS = arguments.length,
        xS = XS < 3 ? HS : null === tS ? tS = Object.getOwnPropertyDescriptor(HS, gS) : tS;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) xS = Reflect.decorate(SS, HS, gS, tS);
      else
        for (var NS = SS.length - 1; NS >= 0; NS--)(bS = SS[NS]) && (xS = (XS < 3 ? bS(xS) : XS > 3 ? bS(HS, gS, xS) : bS(HS, gS)) || xS);
      return XS > 3 && xS && Object.defineProperty(HS, gS, xS), xS
    }

    function qS(SS, HS) {
      return function(gS, tS) {
        HS(gS, tS, SS)
      }
    }

    function uS(SS, HS, gS, tS, bS, XS) {
      function xS(SS) {
        if (void 0 !== SS && "function" !== typeof SS) throw new TypeError("Function expected");
        return SS
      }
      for (var NS, qS = tS.kind, uS = "getter" === qS ? "get" : "setter" === qS ? "set" : "value", IS = !HS && SS ? tS.static ? SS : SS.prototype : null, fS = HS || (IS ? Object.getOwnPropertyDescriptor(IS, tS.name) : {}), kS = !1, aS = gS.length - 1; aS >= 0; aS--) {
        var KS = {};
        for (var jS in tS) KS[jS] = "access" === jS ? {} : tS[jS];
        for (var jS in tS.access) KS.access[jS] = tS.access[jS];
        KS.addInitializer = function(SS) {
          if (kS) throw new TypeError("Cannot add initializers after decoration has completed");
          XS.push(xS(SS || null))
        };
        var GS = (0, gS[aS])("accessor" === qS ? {
          get: fS.get,
          set: fS.set
        } : fS[uS], KS);
        if ("accessor" === qS) {
          if (void 0 === GS) continue;
          if (null === GS || "object" !== typeof GS) throw new TypeError("Object expected");
          (NS = xS(GS.get)) && (fS.get = NS), (NS = xS(GS.set)) && (fS.set = NS), (NS = xS(GS.init)) && bS.unshift(NS)
        } else(NS = xS(GS)) && ("field" === qS ? bS.unshift(NS) : fS[uS] = NS)
      }
      IS && Object.defineProperty(IS, tS.name, fS), kS = !0
    }

    function IS(SS, HS, gS) {
      for (var tS = arguments.length > 2, bS = 0; bS < HS.length; bS++) gS = tS ? HS[bS].call(SS, gS) : HS[bS].call(SS);
      return tS ? gS : void 0
    }

    function fS(SS) {
      return "symbol" === typeof SS ? SS : "".concat(SS)
    }

    function kS(SS, HS, gS) {
      return "symbol" === typeof HS && (HS = HS.description ? "[".concat(HS.description, "]") : ""), Object.defineProperty(SS, "name", {
        configurable: !0,
        value: gS ? "".concat(gS, " ", HS) : HS
      })
    }

    function aS(SS, HS) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(SS, HS)
    }

    function KS(SS, HS, gS, tS) {
      return new(gS || (gS = Promise))((function(bS, XS) {
        function xS(SS) {
          try {
            qS(tS.next(SS))
          } catch (HS) {
            XS(HS)
          }
        }

        function NS(SS) {
          try {
            qS(tS.throw(SS))
          } catch (HS) {
            XS(HS)
          }
        }

        function qS(SS) {
          var HS;
          SS.done ? bS(SS.value) : (HS = SS.value, HS instanceof gS ? HS : new gS((function(SS) {
            SS(HS)
          }))).then(xS, NS)
        }
        qS((tS = tS.apply(SS, HS || [])).next())
      }))
    }

    function jS(SS, HS) {
      var gS, tS, bS, XS = {
          label: 0,
          sent: function() {
            if (1 & bS[0]) throw bS[1];
            return bS[1]
          },
          trys: [],
          ops: []
        },
        xS = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return xS.next = NS(0), xS.throw = NS(1), xS.return = NS(2), "function" === typeof Symbol && (xS[Symbol.iterator] = function() {
        return this
      }), xS;

      function NS(NS) {
        return function(qS) {
          return function(NS) {
            if (gS) throw new TypeError("Generator is already executing.");
            for (; xS && (xS = 0, NS[0] && (XS = 0)), XS;) try {
              if (gS = 1, tS && (bS = 2 & NS[0] ? tS.return : NS[0] ? tS.throw || ((bS = tS.return) && bS.call(tS), 0) : tS.next) && !(bS = bS.call(tS, NS[1])).done) return bS;
              switch (tS = 0, bS && (NS = [2 & NS[0], bS.value]), NS[0]) {
                case 0:
                case 1:
                  bS = NS;
                  break;
                case 4:
                  return XS.label++, {
                    value: NS[1],
                    done: !1
                  };
                case 5:
                  XS.label++, tS = NS[1], NS = [0];
                  continue;
                case 7:
                  NS = XS.ops.pop(), XS.trys.pop();
                  continue;
                default:
                  if (!(bS = (bS = XS.trys).length > 0 && bS[bS.length - 1]) && (6 === NS[0] || 2 === NS[0])) {
                    XS = 0;
                    continue
                  }
                  if (3 === NS[0] && (!bS || NS[1] > bS[0] && NS[1] < bS[3])) {
                    XS.label = NS[1];
                    break
                  }
                  if (6 === NS[0] && XS.label < bS[1]) {
                    XS.label = bS[1], bS = NS;
                    break
                  }
                  if (bS && XS.label < bS[2]) {
                    XS.label = bS[2], XS.ops.push(NS);
                    break
                  }
                  bS[2] && XS.ops.pop(), XS.trys.pop();
                  continue
              }
              NS = HS.call(SS, XS)
            } catch (qS) {
              NS = [6, qS], tS = 0
            } finally {
              gS = bS = 0
            }
            if (5 & NS[0]) throw NS[1];
            return {
              value: NS[0] ? NS[1] : void 0,
              done: !0
            }
          }([NS, qS])
        }
      }
    }
    var GS = Object.create ? function(SS, HS, gS, tS) {
      void 0 === tS && (tS = gS);
      var bS = Object.getOwnPropertyDescriptor(HS, gS);
      bS && !("get" in bS ? !HS.__esModule : bS.writable || bS.configurable) || (bS = {
        enumerable: !0,
        get: function() {
          return HS[gS]
        }
      }), Object.defineProperty(SS, tS, bS)
    } : function(SS, HS, gS, tS) {
      void 0 === tS && (tS = gS), SS[tS] = HS[gS]
    };

    function CS(SS, HS) {
      for (var gS in SS) "default" === gS || Object.prototype.hasOwnProperty.call(HS, gS) || GS(HS, SS, gS)
    }

    function nS(SS) {
      var HS = "function" === typeof Symbol && Symbol.iterator,
        gS = HS && SS[HS],
        tS = 0;
      if (gS) return gS.call(SS);
      if (SS && "number" === typeof SS.length) return {
        next: function() {
          return SS && tS >= SS.length && (SS = void 0), {
            value: SS && SS[tS++],
            done: !SS
          }
        }
      };
      throw new TypeError(HS ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function PS(SS, HS) {
      var gS = "function" === typeof Symbol && SS[Symbol.iterator];
      if (!gS) return SS;
      var tS, bS, XS = gS.call(SS),
        xS = [];
      try {
        for (;
          (void 0 === HS || HS-- > 0) && !(tS = XS.next()).done;) xS.push(tS.value)
      } catch (NS) {
        bS = {
          error: NS
        }
      } finally {
        try {
          tS && !tS.done && (gS = XS.return) && gS.call(XS)
        } finally {
          if (bS) throw bS.error
        }
      }
      return xS
    }

    function QS() {
      for (var SS = [], HS = 0; HS < arguments.length; HS++) SS = SS.concat(PS(arguments[HS]));
      return SS
    }

    function DS() {
      for (var SS = 0, HS = 0, gS = arguments.length; HS < gS; HS++) SS += arguments[HS].length;
      var tS = Array(SS),
        bS = 0;
      for (HS = 0; HS < gS; HS++)
        for (var XS = arguments[HS], xS = 0, NS = XS.length; xS < NS; xS++, bS++) tS[bS] = XS[xS];
      return tS
    }

    function wS(SS, HS, gS) {
      if (gS || 2 === arguments.length)
        for (var tS, bS = 0, XS = HS.length; bS < XS; bS++) !tS && bS in HS || (tS || (tS = Array.prototype.slice.call(HS, 0, bS)), tS[bS] = HS[bS]);
      return SS.concat(tS || Array.prototype.slice.call(HS))
    }

    function hS(SS) {
      return this instanceof hS ? (this.v = SS, this) : new hS(SS)
    }

    function ZS(SS, HS, gS) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var tS, bS = gS.apply(SS, HS || []),
        XS = [];
      return tS = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), xS("next"), xS("throw"), xS("return", (function(SS) {
        return function(HS) {
          return Promise.resolve(HS).then(SS, uS)
        }
      })), tS[Symbol.asyncIterator] = function() {
        return this
      }, tS;

      function xS(SS, HS) {
        bS[SS] && (tS[SS] = function(HS) {
          return new Promise((function(gS, tS) {
            XS.push([SS, HS, gS, tS]) > 1 || NS(SS, HS)
          }))
        }, HS && (tS[SS] = HS(tS[SS])))
      }

      function NS(SS, HS) {
        try {
          (gS = bS[SS](HS)).value instanceof hS ? Promise.resolve(gS.value.v).then(qS, uS) : IS(XS[0][2], gS)
        } catch (tS) {
          IS(XS[0][3], tS)
        }
        var gS
      }

      function qS(SS) {
        NS("next", SS)
      }

      function uS(SS) {
        NS("throw", SS)
      }

      function IS(SS, HS) {
        SS(HS), XS.shift(), XS.length && NS(XS[0][0], XS[0][1])
      }
    }

    function JS(SS) {
      var HS, gS;
      return HS = {}, tS("next"), tS("throw", (function(SS) {
        throw SS
      })), tS("return"), HS[Symbol.iterator] = function() {
        return this
      }, HS;

      function tS(tS, bS) {
        HS[tS] = SS[tS] ? function(HS) {
          return (gS = !gS) ? {
            value: hS(SS[tS](HS)),
            done: !1
          } : bS ? bS(HS) : HS
        } : bS
      }
    }

    function OS(SS) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var HS, gS = SS[Symbol.asyncIterator];
      return gS ? gS.call(SS) : (SS = nS(SS), HS = {}, tS("next"), tS("throw"), tS("return"), HS[Symbol.asyncIterator] = function() {
        return this
      }, HS);

      function tS(gS) {
        HS[gS] = SS[gS] && function(HS) {
          return new Promise((function(tS, bS) {
            (function(SS, HS, gS, tS) {
              Promise.resolve(tS).then((function(HS) {
                SS({
                  value: HS,
                  done: gS
                })
              }), HS)
            })(tS, bS, (HS = SS[gS](HS)).done, HS.value)
          }))
        }
      }
    }

    function dS(SS, HS) {
      return Object.defineProperty ? Object.defineProperty(SS, "raw", {
        value: HS
      }) : SS.raw = HS, SS
    }
    var cS = Object.create ? function(SS, HS) {
        Object.defineProperty(SS, "default", {
          enumerable: !0,
          value: HS
        })
      } : function(SS, HS) {
        SS.default = HS
      },
      vS = function(SS) {
        return vS = Object.getOwnPropertyNames || function(SS) {
          var HS = [];
          for (var gS in SS) Object.prototype.hasOwnProperty.call(SS, gS) && (HS[HS.length] = gS);
          return HS
        }, vS(SS)
      };

    function ES(SS) {
      if (SS && SS.__esModule) return SS;
      var HS = {};
      if (null != SS)
        for (var gS = vS(SS), tS = 0; tS < gS.length; tS++) "default" !== gS[tS] && GS(HS, SS, gS[tS]);
      return cS(HS, SS), HS
    }

    function LS(SS) {
      return SS && SS.__esModule ? SS : {
        default: SS
      }
    }

    function YS(SS, HS, gS, tS) {
      if ("a" === gS && !tS) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof HS ? SS !== HS || !tS : !HS.has(SS)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === gS ? tS : "a" === gS ? tS.call(SS) : tS ? tS.value : HS.get(SS)
    }

    function AS(SS, HS, gS, tS, bS) {
      if ("m" === tS) throw new TypeError("Private method is not writable");
      if ("a" === tS && !bS) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof HS ? SS !== HS || !bS : !HS.has(SS)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === tS ? bS.call(SS, gS) : bS ? bS.value = gS : HS.set(SS, gS), gS
    }

    function yS(SS, HS) {
      if (null === HS || "object" !== typeof HS && "function" !== typeof HS) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof SS ? HS === SS : SS.has(HS)
    }

    function VS(SS, HS, gS) {
      if (null !== HS && void 0 !== HS) {
        if ("object" !== typeof HS && "function" !== typeof HS) throw new TypeError("Object expected.");
        var tS, bS;
        if (gS) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          tS = HS[Symbol.asyncDispose]
        }
        if (void 0 === tS) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          tS = HS[Symbol.dispose], gS && (bS = tS)
        }
        if ("function" !== typeof tS) throw new TypeError("Object not disposable.");
        bS && (tS = function() {
          try {
            bS.call(this)
          } catch (SS) {
            return Promise.reject(SS)
          }
        }), SS.stack.push({
          value: HS,
          dispose: tS,
          async: gS
        })
      } else gS && SS.stack.push({
        async: !0
      });
      return HS
    }
    var iS = "function" === typeof SuppressedError ? SuppressedError : function(SS, HS, gS) {
      var tS = new Error(gS);
      return tS.name = "SuppressedError", tS.error = SS, tS.suppressed = HS, tS
    };

    function WS(SS) {
      function HS(HS) {
        SS.error = SS.hasError ? new iS(HS, SS.error, "An error was suppressed during disposal.") : HS, SS.hasError = !0
      }
      var gS, tS = 0;
      return function bS() {
        for (; gS = SS.stack.pop();) try {
          if (!gS.async && 1 === tS) return tS = 0, SS.stack.push(gS), Promise.resolve().then(bS);
          if (gS.dispose) {
            var XS = gS.dispose.call(gS.value);
            if (gS.async) return tS |= 2, Promise.resolve(XS).then(bS, (function(SS) {
              return HS(SS), bS()
            }))
          } else tS |= 1
        } catch (xS) {
          HS(xS)
        }
        if (1 === tS) return SS.hasError ? Promise.reject(SS.error) : Promise.resolve();
        if (SS.hasError) throw SS.error
      }()
    }

    function zS(SS, HS) {
      return "string" === typeof SS && /^\.\.?\//.test(SS) ? SS.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(SS, gS, tS, bS, XS) {
        return gS ? HS ? ".jsx" : ".js" : !tS || bS && XS ? tS + bS + "." + XS.toLowerCase() + "js" : SS
      })) : SS
    }
    const US = {
      __extends: bS,
      __assign: XS,
      __rest: xS,
      __decorate: NS,
      __param: qS,
      __esDecorate: uS,
      __runInitializers: IS,
      __propKey: fS,
      __setFunctionName: kS,
      __metadata: aS,
      __awaiter: KS,
      __generator: jS,
      __createBinding: GS,
      __exportStar: CS,
      __values: nS,
      __read: PS,
      __spread: QS,
      __spreadArrays: DS,
      __spreadArray: wS,
      __await: hS,
      __asyncGenerator: ZS,
      __asyncDelegator: JS,
      __asyncValues: OS,
      __makeTemplateObject: dS,
      __importStar: ES,
      __importDefault: LS,
      __classPrivateFieldGet: YS,
      __classPrivateFieldSet: AS,
      __classPrivateFieldIn: yS,
      __addDisposableResource: VS,
      __disposeResources: WS,
      __rewriteRelativeImportExtension: zS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);