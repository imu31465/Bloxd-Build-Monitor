export const id = 201;
export const ids = [201];
export const modules = {
  9794: (MM, rM) => {
    rM.discordURLBuilder = function(MM) {
      var rM;
      const iM = (null === (rM = null === window || void 0 === window ? void 0 : window.location) || void 0 === rM ? void 0 : rM.hostname) || "localhost",
        OM = MM.hostname.split("."),
        SM = !MM.hostname.includes("trycloudflare.com") && !MM.hostname.includes("discordsays.com") && OM.length > 2 ? `/${OM[0]}` : "";
      return MM.pathname.startsWith("/.proxy") ? `${MM.protocol}//${iM}${SM}${MM.pathname}${MM.search}` : `${MM.protocol}//${iM}/.proxy/colyseus${SM}${MM.pathname}${MM.search}`
    }
  },
  9782: (MM, rM, iM) => {
    var OM, SM, jM, aM, PM = iM(9696),
      nM = iM(9788),
      QM = iM(9751);
    OM = new WeakMap, SM = new WeakMap, jM = new WeakMap, aM = new WeakMap, rM.Auth = class {
      constructor(MM) {
        this.http = MM, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, OM.set(this, !1), SM.set(this, void 0), jM.set(this, void 0), aM.set(this, QM.createNanoEvents()), nM.getItem(this.settings.key, (MM => this.token = MM))
      }
      set token(MM) {
        this.http.authToken = MM
      }
      get token() {
        return this.http.authToken
      }
      onChange(MM) {
        const rM = PM.__classPrivateFieldGet(this, aM, "f").on("change", MM);
        return PM.__classPrivateFieldGet(this, OM, "f") || PM.__classPrivateFieldSet(this, SM, new Promise(((MM, rM) => {
          this.getUserData().then((MM => {
            this.emitChange(Object.assign(Object.assign({}, MM), {
              token: this.token
            }))
          })).catch((MM => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            MM()
          }))
        })), "f"), PM.__classPrivateFieldSet(this, OM, !0, "f"), rM
      }
      getUserData() {
        return PM.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(MM, rM, iM) {
        return PM.__awaiter(this, void 0, void 0, (function*() {
          const OM = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: MM,
              password: rM,
              options: iM
            }
          })).data;
          return this.emitChange(OM), OM
        }))
      }
      signInWithEmailAndPassword(MM, rM) {
        return PM.__awaiter(this, void 0, void 0, (function*() {
          const iM = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: MM,
              password: rM
            }
          })).data;
          return this.emitChange(iM), iM
        }))
      }
      signInAnonymously(MM) {
        return PM.__awaiter(this, void 0, void 0, (function*() {
          const rM = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: MM
            }
          })).data;
          return this.emitChange(rM), rM
        }))
      }
      sendPasswordResetEmail(MM) {
        return PM.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: MM
            }
          })).data
        }))
      }
      signInWithProvider(MM) {
        return PM.__awaiter(this, arguments, void 0, (function*(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((iM, OM) => {
            const SM = rM.width || 480,
              aM = rM.height || 768,
              nM = this.token ? `?token=${this.token}` : "",
              QM = `Login with ${MM[0].toUpperCase()+MM.substring(1)}`,
              zM = this.http.client.getHttpEndpoint(`${rM.prefix||`${this.settings.path}/provider`}/${MM}${nM}`),
              LM = screen.width / 2 - SM / 2,
              mM = screen.height / 2 - aM / 2;
            PM.__classPrivateFieldSet(this, jM, window.open(zM, QM, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + SM + ", height=" + aM + ", top=" + mM + ", left=" + LM), "f");
            const HM = MM => {
                void 0 === MM.data.user && void 0 === MM.data.token || (clearInterval(hM), PM.__classPrivateFieldGet(this, jM, "f").close(), PM.__classPrivateFieldSet(this, jM, void 0, "f"), window.removeEventListener("message", HM), void 0 !== MM.data.error ? OM(MM.data.error) : (iM(MM.data), this.emitChange(MM.data)))
              },
              hM = setInterval((() => {
                PM.__classPrivateFieldGet(this, jM, "f") && !PM.__classPrivateFieldGet(this, jM, "f").closed || (PM.__classPrivateFieldSet(this, jM, void 0, "f"), OM("Ti"), window.removeEventListener("message", HM))
              }), 200);
            window.addEventListener("message", HM)
          }))
        }))
      }
      signOut() {
        return PM.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(MM) {
        void 0 !== MM.token && (this.token = MM.token, null === MM.token ? nM.removeItem(this.settings.key) : nM.setItem(this.settings.key, MM.token)), PM.__classPrivateFieldGet(this, aM, "f").emit("change", MM)
      }
    }
  },
  9693: (MM, rM, iM) => {
    var OM, SM = iM(9696),
      jM = iM(9701),
      aM = iM(9703),
      PM = iM(9776),
      nM = iM(9782),
      QM = iM(9794);
    class zM extends Error {
      constructor(MM, rM) {
        super(MM), this.code = rM, this.name = "MatchMakeError", Object.setPrototypeOf(this, zM.prototype)
      }
    }
    const LM = "undefined" !== typeof window && "undefined" !== typeof(null === (OM = null === window || void 0 === window ? void 0 : window.location) || void 0 === OM ? void 0 : OM.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class mM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LM,
          rM = arguments.length > 1 ? arguments[1] : void 0;
        var iM, OM;
        if ("string" === typeof MM) {
          const rM = MM.startsWith("/") ? new URL(MM, LM) : new URL(MM),
            iM = "https:" === rM.protocol || "wss:" === rM.protocol,
            OM = Number(rM.port || (iM ? 443 : 80));
          this.settings = {
            hostname: rM.hostname,
            pathname: rM.pathname,
            port: OM,
            secure: iM,
            searchParams: rM.searchParams.toString() || void 0
          }
        } else void 0 === MM.port && (MM.port = MM.secure ? 443 : 80), void 0 === MM.pathname && (MM.pathname = ""), this.settings = MM;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new PM.HTTP(this, (null === rM || void 0 === rM ? void 0 : rM.headers) || {}), this.auth = new nM.Auth(this.http), this.urlBuilder = null === rM || void 0 === rM ? void 0 : rM.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (OM = null === (iM = null === window || void 0 === window ? void 0 : window.location) || void 0 === iM ? void 0 : iM.hostname) || void 0 === OM ? void 0 : OM.includes("discordsays.com")) && (this.urlBuilder = QM.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(MM) {
        return SM.__awaiter(this, arguments, void 0, (function*(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            iM = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", MM, rM, iM)
        }))
      }
      create(MM) {
        return SM.__awaiter(this, arguments, void 0, (function*(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            iM = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", MM, rM, iM)
        }))
      }
      join(MM) {
        return SM.__awaiter(this, arguments, void 0, (function*(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            iM = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", MM, rM, iM)
        }))
      }
      joinById(MM) {
        return SM.__awaiter(this, arguments, void 0, (function*(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            iM = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", MM, rM, iM)
        }))
      }
      reconnect(MM, rM) {
        return SM.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof MM && "string" === typeof rM) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [iM, OM] = MM.split(":");
          if (!iM || !OM) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", iM, {
            reconnectionToken: OM
          }, rM)
        }))
      }
      consumeSeatReservation(MM, rM, iM) {
        return SM.__awaiter(this, void 0, void 0, (function*() {
          const OM = this.createRoom(MM.room.name, rM);
          OM.roomId = MM.room.roomId, OM.sessionId = MM.sessionId;
          const aM = {
            sessionId: OM.sessionId
          };
          MM.reconnectionToken && (aM.reconnectionToken = MM.reconnectionToken);
          const PM = iM || OM;
          return OM.connect(this.buildEndpoint(MM.room, aM, MM.protocol), MM.devMode && (() => SM.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${OM.roomId}'...`);
            let iM = 0;
            const jM = () => SM.__awaiter(this, void 0, void 0, (function*() {
              iM++;
              try {
                yield this.consumeSeatReservation(MM, rM, PM), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${OM.roomId}'`)
              } catch (SM) {
                iM < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${iM} out of 8)`), setTimeout(jM, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(jM, 2e3)
          }))), PM, MM, this.http.headers), new Promise(((MM, rM) => {
            const iM = (MM, iM) => rM(new jM.ServerError(MM, iM));
            PM.onError.once(iM), PM.onJoin.once((() => {
              PM.onError.remove(iM), setTimeout((() => {
                try {
                  const MM = [168, 12, 229, 90, 152, 197, 228, 169, 185, 87, 165, 22, 250, 192, 18, 74, 166, 78, 118, 66];
                  MM && PM.Xp(128, new Uint8Array(MM))
                } catch {}
              }), 3e3), MM(PM)
            }))
          }))
        }))
      }
      createMatchMakeRequest(MM, rM) {
        return SM.__awaiter(this, arguments, void 0, (function*(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            OM = arguments.length > 3 ? arguments[3] : void 0,
            SM = arguments.length > 4 ? arguments[4] : void 0;
          const jM = (yield this.http.post(`matchmake/${MM}/${rM}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(iM)
          })).data;
          if (jM.error) throw new zM(jM.error, jM.code);
          return "reconnect" === MM && (jM.reconnectionToken = iM.reconnectionToken), yield this.consumeSeatReservation(jM, OM, SM)
        }))
      }
      createRoom(MM, rM) {
        return new aM.Pm(MM, rM)
      }
      buildEndpoint(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          OM = this.settings.searchParams || "";
        this.http.authToken && (rM._authToken = this.http.authToken);
        for (const aM in rM) rM.hasOwnProperty(aM) && (OM += (OM ? "&" : "") + `${aM}=${rM[aM]}`);
        "h3" === iM && (iM = "http");
        let SM = this.settings.secure ? `${iM}s://` : `${iM}://`;
        MM.publicAddress ? SM += `${MM.publicAddress}` : SM += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const jM = `${SM}/${MM.processId}/${MM.roomId}?${OM}`;
        return this.urlBuilder ? this.urlBuilder(new URL(jM)) : jM
      }
      getHttpEndpoint() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const rM = MM.startsWith("/") ? MM : `/${MM}`;
        let iM = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${rM}`;
        return this.settings.searchParams && (iM += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(iM)) : iM
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    mM.VERSION = "0.16.22", rM.Client = mM, rM.MatchMakeError = zM
  },
  9711: (MM, rM, iM) => {
    var OM = iM(9720),
      SM = iM(9735);
    rM.Connection = class {
      constructor(MM) {
        if (this.events = {}, "h3" === MM) this.transport = new OM.H3TransportTransport(this.events);
        else this.transport = new SM.WebSocketTransport(this.events)
      }
      connect(MM, rM) {
        this.transport.connect.call(this.transport, MM, rM)
      }
      send(MM) {
        this.transport.send(MM)
      }
      sendUnreliable(MM) {
        this.transport.sendUnreliable(MM)
      }
      close(MM, rM) {
        this.transport.close(MM, rM)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9776: (MM, rM, iM) => {
    var OM = iM(9701);

    function SM(MM) {
      var rM = Object.create(null);
      return MM && Object.keys(MM).forEach((function(iM) {
        if ("default" !== iM) {
          var OM = Object.getOwnPropertyDescriptor(MM, iM);
          Object.defineProperty(rM, iM, OM.get ? OM : {
            enumerable: !0,
            get: function() {
              return MM[iM]
            }
          })
        }
      })), rM.default = MM, Object.freeze(rM)
    }
    var jM = SM(iM(9779));
    rM.HTTP = class {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = MM, this.headers = rM
      }
      get(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", MM, rM)
      }
      post(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", MM, rM)
      }
      del(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", MM, rM)
      }
      put(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", MM, rM)
      }
      request(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return jM[MM](this.client.getHttpEndpoint(rM), this.getOptions(iM)).catch((MM => {
          var rM;
          if (MM.aborted) throw new OM.AbortError("Request aborted");
          const iM = MM.statusCode,
            SM = (null === (rM = MM.data) || void 0 === rM ? void 0 : rM.error) || MM.statusMessage || MM.message;
          if (!iM && !SM) throw MM;
          throw new OM.ServerError(iM, SM)
        }))
      }
      getOptions(MM) {
        return MM.headers = Object.assign({}, this.headers, MM.headers), this.authToken && (MM.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (MM.withCredentials = !0), MM
      }
    }
  },
  9741: (MM, rM) => {
    var iM, OM;
    rM.Protocol = void 0, (iM = rM.Protocol || (rM.Protocol = {}))[iM.HANDSHAKE = 9] = "HANDSHAKE", iM[iM.JOIN_ROOM = 10] = "JOIN_ROOM", iM[iM.ERROR = 11] = "ERROR", iM[iM.LEAVE_ROOM = 12] = "LEAVE_ROOM", iM[iM.ROOM_DATA = 13] = "ROOM_DATA", iM[iM.ROOM_STATE = 14] = "ROOM_STATE", iM[iM.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", iM[iM.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", iM[iM.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", rM.ErrorCode = void 0, (OM = rM.ErrorCode || (rM.ErrorCode = {}))[OM.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", OM[OM.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", OM[OM.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", OM[OM.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", OM[OM.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", OM[OM.AUTH_FAILED = 4215] = "AUTH_FAILED", OM[OM.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9703: (MM, rM, iM) => {
    var OM = iM(9711),
      SM = iM(9741),
      jM = iM(9747),
      aM = iM(9751),
      PM = iM(9759),
      nM = iM(9726),
      QM = iM(9765),
      zM = iM(9701),
      LM = iM(9769);
    class mM {
      constructor(MM, rM) {
        this.onStateChange = PM.createSignal(), this.onError = PM.createSignal(), this.rU = PM.createSignal(), this.onJoin = PM.createSignal(), this.hasJoined = !1, this.onMessageHandlers = aM.createNanoEvents(), this.roomId = null, this.name = MM, this.packr = new LM.Packr, this.packr.encode(void 0), rM && (this.QE = new(jM.getSerializer("schema")), this.rootSchema = rM, this.QE.state = new rM), this.onError(((MM, rM) => {
          var iM;
          return null === (iM = console.warn) || void 0 === iM ? void 0 : iM.call(console, `colyseus.js - onError => (${MM}) ${rM}`)
        })), this.rU((() => this.aE()))
      }
      connect(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          SM = arguments.length > 3 ? arguments[3] : void 0,
          jM = arguments.length > 4 ? arguments[4] : void 0;
        const aM = new OM.Connection(SM.protocol);
        if (iM.connection = aM, aM.events.onmessage = mM.prototype.onMessageCallback.bind(iM), aM.events.onclose = function(MM) {
            var OM;
            if (!iM.hasJoined) return null === (OM = console.warn) || void 0 === OM || OM.call(console, `Room connection was closed unexpectedly (${MM.code}): ${MM.reason}`), void iM.onError.invoke(MM.code, MM.reason);
            MM.code === zM.CloseCode.DEVMODE_RESTART && rM ? rM() : (iM.rU.invoke(MM.code, MM.reason), iM.destroy())
          }, aM.events.onerror = function(MM) {
            var rM;
            null === (rM = console.warn) || void 0 === rM || rM.call(console, `Room, onError (${MM.code}): ${MM.reason}`), iM.onError.invoke(MM.code, MM.reason)
          }, "h3" === SM.protocol) {
          const rM = new URL(MM);
          aM.connect(rM.origin, SM)
        } else aM.connect(MM, jM)
      }
      leave() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((rM => {
          this.rU((MM => rM(MM))), this.connection ? MM ? (this.packr.buffer[0] = SM.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.rU.invoke(zM.CloseCode.CONSENTED)
        }))
      }
      TE(MM, rM) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(MM), rM)
      }
      send(MM, rM) {
        const iM = {
          offset: 1
        };
        this.packr.buffer[0] = SM.Protocol.ROOM_DATA, "string" === typeof MM ? nM.encode.string(this.packr.buffer, MM, iM) : nM.encode.number(this.packr.buffer, MM, iM), this.packr.position = 0;
        const OM = void 0 !== rM ? this.packr.pack(rM, 2048 + iM.offset) : this.packr.buffer.subarray(0, iM.offset);
        this.connection.send(OM)
      }
      sendUnreliable(MM, rM) {
        const iM = {
          offset: 1
        };
        this.packr.buffer[0] = SM.Protocol.ROOM_DATA, "string" === typeof MM ? nM.encode.string(this.packr.buffer, MM, iM) : nM.encode.number(this.packr.buffer, MM, iM), this.packr.position = 0;
        const OM = void 0 !== rM ? this.packr.pack(rM, 2048 + iM.offset) : this.packr.buffer.subarray(0, iM.offset);
        this.connection.sendUnreliable(OM)
      }
      Xp(MM, rM) {
        const iM = {
          offset: 1
        };
        if (this.packr.buffer[0] = SM.Protocol.ROOM_DATA_BYTES, "string" === typeof MM ? nM.encode.string(this.packr.buffer, MM, iM) : nM.encode.number(this.packr.buffer, MM, iM), rM.byteLength + iM.offset > this.packr.buffer.byteLength) {
          const MM = new Uint8Array(iM.offset + rM.byteLength);
          MM.set(this.packr.buffer), this.packr.useBuffer(MM)
        }
        this.packr.buffer.set(rM, iM.offset), this.connection.send(this.packr.buffer.subarray(0, iM.offset + rM.byteLength))
      }
      get state() {
        return this.QE.getState()
      }
      aE() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.rU.clear(), this.onMessageHandlers.events = {}, this.QE instanceof QM.zD && (this.QE.PL.root.callbacks = {})
      }
      onMessageCallback(MM) {
        const rM = new Uint8Array(MM.data),
          iM = {
            offset: 1
          },
          OM = rM[0];
        if (OM === SM.Protocol.JOIN_ROOM) {
          const MM = nM.decode.utf8Read(rM, iM, rM[iM.offset++]);
          if (this.serializerId = nM.decode.utf8Read(rM, iM, rM[iM.offset++]), !this.QE) {
            const MM = jM.getSerializer(this.serializerId);
            this.QE = new MM
          }
          rM.byteLength > iM.offset && this.QE.handshake && this.QE.handshake(rM, iM), this.reconnectionToken = `${this.roomId}:${MM}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = SM.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (OM === SM.Protocol.ERROR) {
          const MM = nM.decode.number(rM, iM),
            OM = nM.decode.string(rM, iM);
          this.onError.invoke(MM, OM)
        } else if (OM === SM.Protocol.LEAVE_ROOM) this.leave();
        else if (OM === SM.Protocol.ROOM_STATE) this.QE.setState(rM, iM), this.onStateChange.invoke(this.QE.getState());
        else if (OM === SM.Protocol.ROOM_STATE_PATCH) this.QE.patch(rM, iM), this.onStateChange.invoke(this.QE.getState());
        else if (OM === SM.Protocol.ROOM_DATA) {
          const MM = nM.decode.stringCheck(rM, iM) ? nM.decode.string(rM, iM) : nM.decode.number(rM, iM),
            OM = rM.byteLength > iM.offset ? LM.unpack(rM, {
              start: iM.offset
            }) : void 0;
          this.dispatchMessage(MM, OM)
        } else if (OM === SM.Protocol.ROOM_DATA_BYTES) {
          const MM = nM.decode.stringCheck(rM, iM) ? nM.decode.string(rM, iM) : nM.decode.number(rM, iM);
          this.dispatchMessage(MM, rM.subarray(iM.offset))
        }
      }
      dispatchMessage(MM, rM) {
        var iM;
        const OM = this.getMessageHandlerKey(MM);
        this.onMessageHandlers.events[OM] ? this.onMessageHandlers.emit(OM, rM) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", MM, rM) : null === (iM = console.warn) || void 0 === iM || iM.call(console, `colyseus.js: onMessage() not registered for type '${MM}'.`)
      }
      destroy() {
        this.QE && this.QE.teardown()
      }
      getMessageHandlerKey(MM) {
        switch (typeof MM) {
          case "string":
            return MM;
          case "number":
            return `i${MM}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    rM.Pm = mM
  },
  9788: (MM, rM, iM) => {
    var OM = iM(9696);
    let SM;

    function jM() {
      if (!SM) try {
        SM = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (MM) {}
      return SM || "undefined" === typeof globalThis.indexedDB || (SM = new aM), SM || (SM = {
        cache: {},
        setItem: function(MM, rM) {
          this.cache[MM] = rM
        },
        getItem: function(MM) {
          this.cache[MM]
        },
        removeItem: function(MM) {
          delete this.cache[MM]
        }
      }), SM
    }
    class aM {
      constructor() {
        this.dbPromise = new Promise((MM => {
          const rM = indexedDB.open("_colyseus_storage", 1);
          rM.onupgradeneeded = () => rM.result.createObjectStore("store"), rM.onsuccess = () => MM(rM.result)
        }))
      }
      tx(MM, rM) {
        return OM.__awaiter(this, void 0, void 0, (function*() {
          const iM = (yield this.dbPromise).transaction("store", MM).objectStore("store");
          return rM(iM)
        }))
      }
      setItem(MM, rM) {
        return this.tx("readwrite", (iM => iM.put(rM, MM))).then()
      }
      getItem(MM) {
        return OM.__awaiter(this, void 0, void 0, (function*() {
          const rM = yield this.tx("readonly", (rM => rM.get(MM)));
          return new Promise((MM => {
            rM.onsuccess = () => MM(rM.result)
          }))
        }))
      }
      removeItem(MM) {
        return this.tx("readwrite", (rM => rM.delete(MM))).then()
      }
    }
    rM.getItem = function(MM, rM) {
      const iM = jM().getItem(MM);
      "undefined" !== typeof Promise && iM instanceof Promise ? iM.then((MM => rM(MM))) : rM(iM)
    }, rM.removeItem = function(MM) {
      jM().removeItem(MM)
    }, rM.setItem = function(MM, rM) {
      jM().setItem(MM, rM)
    }
  },
  9751: (MM, rM) => {
    rM.createNanoEvents = () => ({
      emit(MM) {
        let rM = this.events[MM] || [];
        for (var iM = arguments.length, OM = new Array(iM > 1 ? iM - 1 : 0), SM = 1; SM < iM; SM++) OM[SM - 1] = arguments[SM];
        for (let jM = 0, aM = rM.length; jM < aM; jM++) rM[jM](...OM)
      },
      events: {},
      on(MM, rM) {
        var iM;
        return (null === (iM = this.events[MM]) || void 0 === iM ? void 0 : iM.push(rM)) || (this.events[MM] = [rM]), () => {
          var iM;
          this.events[MM] = null === (iM = this.events[MM]) || void 0 === iM ? void 0 : iM.filter((MM => rM !== MM))
        }
      }
    })
  },
  9759: (MM, rM) => {
    class iM {
      constructor() {
        this.handlers = []
      }
      register(MM) {
        return this.handlers.push(MM), this
      }
      invoke() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        this.handlers.forEach((MM => MM.apply(this, rM)))
      }
      invokeAsync() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        return Promise.all(this.handlers.map((MM => MM.apply(this, rM))))
      }
      remove(MM) {
        const rM = this.handlers.indexOf(MM);
        this.handlers[rM] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    rM.EventEmitter = iM, rM.createSignal = function() {
      const MM = new iM;

      function rM(rM) {
        return MM.register(rM, null === this)
      }
      return rM.once = rM => {
        const iM = function() {
          for (var OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
          rM.apply(this, SM), MM.remove(iM)
        };
        MM.register(iM)
      }, rM.remove = rM => MM.remove(rM), rM.invoke = function() {
        return MM.invoke(...arguments)
      }, rM.invokeAsync = function() {
        return MM.invokeAsync(...arguments)
      }, rM.clear = () => MM.clear(), rM
    }
  },
  9701: (MM, rM) => {
    var iM;
    rM.CloseCode = void 0, (iM = rM.CloseCode || (rM.CloseCode = {}))[iM.CONSENTED = 4e3] = "CONSENTED", iM[iM.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class OM extends Error {
      constructor(MM, rM) {
        super(rM), this.name = "ServerError", this.code = MM
      }
    }
    class SM extends Error {
      constructor(MM) {
        super(MM), this.name = "AbortError"
      }
    }
    rM.AbortError = SM, rM.ServerError = OM
  },
  9689: (MM, rM, iM) => {
    iM(9691);
    var OM = iM(9693),
      SM = iM(9741),
      jM = iM(9703),
      aM = iM(9782),
      PM = iM(9701),
      nM = iM(9765),
      QM = iM(9802),
      zM = iM(9747);
    zM.registerSerializer("schema", nM.zD), zM.registerSerializer("none", QM.NoneSerializer), rM.Client = OM.Client, rM.MatchMakeError = OM.MatchMakeError, Object.defineProperty(rM, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return SM.ErrorCode
      }
    }), Object.defineProperty(rM, "Protocol", {
      enumerable: !0,
      get: function() {
        return SM.Protocol
      }
    }), rM.Pm = jM.Pm, rM.Auth = aM.Auth, rM.ServerError = PM.ServerError, rM.zD = nM.zD, rM.getStateCallbacks = nM.getStateCallbacks, rM.registerSerializer = zM.registerSerializer
  },
  9691: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = MM => null !== MM && "object" === typeof MM && MM.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9802: (MM, rM) => {
    rM.NoneSerializer = class {
      setState(MM) {}
      getState() {
        return null
      }
      patch(MM) {}
      teardown() {}
      handshake(MM) {}
    }
  },
  9765: (MM, rM, iM) => {
    var OM = iM(9726);
    rM.zD = class {
      setState(MM, rM) {
        this.PL.decode(MM, rM)
      }
      getState() {
        return this.state
      }
      patch(MM, rM) {
        return this.PL.decode(MM, rM)
      }
      teardown() {
        this.PL.root.clearRefs()
      }
      handshake(MM, rM) {
        this.state ? (OM.Reflection.decode(MM, rM), this.PL = new OM.Decoder(this.state)) : (this.PL = OM.Reflection.decode(MM, rM), this.state = this.PL.state)
      }
    }, rM.getStateCallbacks = function(MM) {
      try {
        return OM.getDecoderStateCallbacks(MM.QE.PL)
      } catch (rM) {
        return
      }
    }
  },
  9747: (MM, rM) => {
    const iM = {};
    rM.getSerializer = function(MM) {
      const rM = iM[MM];
      if (!rM) throw new Error("missing serializer: " + MM);
      return rM
    }, rM.registerSerializer = function(MM, rM) {
      iM[MM] = rM
    }
  },
  9720: (MM, rM, iM) => {
    var OM = iM(9696),
      SM = iM(9726);
    rM.H3TransportTransport = class {
      constructor(MM) {
        this.events = MM, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const iM = rM.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(rM.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(MM, iM), this.wt.ready.then((MM => {
          console.log("WebTransport ready!", MM), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((MM => {
            this.reader = MM.value.readable.getReader(), this.writer = MM.value.writable.getWriter(), this.sendSeatReservation(rM.room.roomId, rM.sessionId, rM.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((MM => {
            console.error("failed to read incoming stream", MM), console.error("TODO: close the connection")
          }))
        })).catch((MM => {
          console.log("WebTransport not ready!", MM), this._close()
        })), this.wt.closed.then((MM => {
          console.log("WebTransport closed w/ success", MM), this.events.onclose({
            code: MM.closeCode,
            reason: MM.reason
          })
        })).catch((MM => {
          console.log("WebTransport closed w/ error", MM), this.events.onerror(MM), this.events.onclose({
            code: MM.closeCode,
            reason: MM.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(MM) {
        const rM = SM.encode.number(this.lengthPrefixBuffer, MM.length, {
            offset: 0
          }),
          iM = new Uint8Array(rM + MM.length);
        iM.set(this.lengthPrefixBuffer.subarray(0, rM), 0), iM.set(MM, rM), this.writer.write(iM)
      }
      sendUnreliable(MM) {
        const rM = SM.encode.number(this.lengthPrefixBuffer, MM.length, {
            offset: 0
          }),
          iM = new Uint8Array(rM + MM.length);
        iM.set(this.lengthPrefixBuffer.subarray(0, rM), 0), iM.set(MM, rM), this.unreliableWriter.write(iM)
      }
      close(MM, rM) {
        try {
          this.wt.close({
            closeCode: MM,
            reason: rM
          })
        } catch (iM) {
          console.error(iM)
        }
      }
      readIncomingData() {
        return OM.__awaiter(this, void 0, void 0, (function*() {
          let MM;
          for (; this.isOpen;) {
            try {
              MM = yield this.reader.read();
              const rM = MM.value,
                iM = {
                  offset: 0
                };
              do {
                const MM = SM.decode.number(rM, iM);
                this.events.onmessage({
                  data: rM.subarray(iM.offset, iM.offset + MM)
                }), iM.offset += MM
              } while (iM.offset < rM.length)
            } catch (rM) {
              -1 === rM.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", rM);
              break
            }
            if (MM.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return OM.__awaiter(this, void 0, void 0, (function*() {
          let MM;
          for (; this.isOpen;) {
            try {
              MM = yield this.unreliableReader.read();
              const rM = MM.value,
                iM = {
                  offset: 0
                };
              do {
                const MM = SM.decode.number(rM, iM);
                this.events.onmessage({
                  data: rM.subarray(iM.offset, iM.offset + MM)
                }), iM.offset += MM
              } while (iM.offset < rM.length)
            } catch (rM) {
              -1 === rM.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", rM);
              break
            }
            if (MM.done) break
          }
        }))
      }
      sendSeatReservation(MM, rM, iM) {
        const OM = {
            offset: 0
          },
          jM = [];
        SM.encode.string(jM, MM, OM), SM.encode.string(jM, rM, OM), iM && SM.encode.string(jM, iM, OM), this.writer.write(new Uint8Array(jM).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9735: (MM, rM, iM) => {
    var OM = iM(9739);
    const SM = globalThis.WebSocket || OM;
    rM.WebSocketTransport = class {
      constructor(MM) {
        this.events = MM
      }
      send(MM) {
        this.ws.send(MM)
      }
      sendUnreliable(MM) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(MM, rM) {
        try {
          this.ws = new SM(MM, {
            headers: rM,
            protocols: this.protocols
          })
        } catch (iM) {
          this.ws = new SM(MM, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(MM, rM) {
        this.ws.close(MM, rM)
      }
      get isOpen() {
        return this.ws.readyState === SM.OPEN
      }
    }
  },
  9739: MM => {
    MM.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9779: (MM, rM, iM) => {
    function OM(MM, rM) {
      rM.headers = MM.headers || {}, rM.statusMessage = MM.statusText, rM.statusCode = MM.status, rM.data = MM.response
    }

    function SM(MM, rM, iM) {
      return new Promise((function(SM, jM) {
        iM = iM || {};
        var aM, PM, nM, QM = new XMLHttpRequest,
          zM = iM.body,
          LM = iM.headers || {};
        for (aM in iM.timeout && (QM.timeout = iM.timeout), QM.ontimeout = QM.onerror = function(MM) {
            MM.timeout = "timeout" == MM.type, jM(MM)
          }, QM.onabort = function(MM) {
            MM.aborted = !0, jM(MM)
          }, QM.open(MM, rM.href || rM), QM.onload = function() {
            for (nM = QM.getAllResponseHeaders().trim().split(/[\r\n]+/), OM(QM, QM); PM = nM.shift();) PM = PM.split(": "), QM.headers[PM.shift().toLowerCase()] = PM.join(": ");
            if ((PM = QM.headers["content-type"]) && ~PM.indexOf("application/json")) try {
              QM.data = JSON.parse(QM.data, iM.reviver)
            } catch (MM) {
              return OM(QM, MM), jM(MM)
            }(QM.status >= 400 ? jM : SM)(QM)
          }, typeof FormData < "u" && zM instanceof FormData || zM && "object" == typeof zM && (LM["content-type"] = "application/json", zM = JSON.stringify(zM)), QM.withCredentials = !!iM.withCredentials, LM) QM.setRequestHeader(aM, LM[aM]);
        QM.send(zM), iM.signal && iM.signal.addEventListener("abort", (function() {
          QM.abort()
        }))
      }))
    }
    iM.r(rM), iM.d(rM, {
      del: () => nM,
      get: () => jM,
      patch: () => PM,
      post: () => aM,
      put: () => QM,
      send: () => SM
    });
    var jM = SM.bind(SM, "GET"),
      aM = SM.bind(SM, "POST"),
      PM = SM.bind(SM, "PATCH"),
      nM = SM.bind(SM, "DELETE"),
      QM = SM.bind(SM, "PUT")
  },
  9769: (MM, rM, iM) => {
    var OM, SM, jM;
    iM.r(rM), iM.d(rM, {
      ALWAYS: () => Xr,
      C1: () => GM,
      DECIMAL_FIT: () => Kr,
      DECIMAL_ROUND: () => Ir,
      Decoder: () => nr,
      Encoder: () => Fr,
      FLOAT32_OPTIONS: () => Hr,
      NEVER: () => Br,
      Packr: () => Dr,
      RESERVE_START_SPACE: () => Vr,
      RESET_BUFFER_MODE: () => Tr,
      REUSE_BUFFER_MODE: () => qr,
      Unpackr: () => gM,
      addExtension: () => Yr,
      clearSource: () => ar,
      decode: () => mr,
      decodeIter: () => cr,
      encode: () => vr,
      encodeIter: () => Mi,
      isNativeAccelerationEnabled: () => NM,
      mapsAsObjects: () => ii,
      pack: () => xr,
      roundFloat32: () => Er,
      unpack: () => zr,
      unpackMultiple: () => Lr,
      useRecords: () => ri
    });
    try {
      OM = new TextDecoder
    } catch (Oi) {}
    var aM = 0;
    const PM = [];
    var nM, QM, zM, LM, mM, HM = PM,
      hM = 0,
      JM = {},
      dM = 0,
      yM = 0,
      lM = [],
      EM = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class UM {}
    const GM = new UM;
    GM.name = "MessagePack 0xC1";
    var CM, eM, bM, wM = !1,
      tM = 2;
    try {
      new Function("")
    } catch (Oi) {
      tM = 1 / 0
    }
    class gM {
      constructor(MM) {
        MM && (!1 === MM.useRecords && void 0 === MM.mapsAsObjects && (MM.mapsAsObjects = !0), MM.sequential && !1 !== MM.trusted && (MM.trusted = !0, MM.structures || 0 == MM.useRecords || (MM.structures = [], MM.maxSharedStructures || (MM.maxSharedStructures = 0))), MM.structures ? MM.structures.sharedLength = MM.structures.length : MM.getStructures && ((MM.structures = []).uninitialized = !0, MM.structures.sharedLength = 0), MM.int64AsNumber && (MM.int64AsType = "number")), Object.assign(this, MM)
      }
      unpack(MM, rM) {
        if (SM) return jr((() => (ar(), this ? this.unpack(MM, rM) : gM.prototype.unpack.call(EM, MM, rM))));
        MM.buffer || MM.constructor !== ArrayBuffer || (MM = "undefined" !== typeof Buffer ? Buffer.from(MM) : new Uint8Array(MM)), "object" === typeof rM ? (jM = rM.end || MM.length, aM = rM.start || 0) : (aM = 0, jM = rM > -1 ? rM : MM.length), hM = 0, yM = 0, QM = null, HM = PM, zM = null, SM = MM;
        try {
          mM = MM.dataView || (MM.dataView = new DataView(MM.buffer, MM.byteOffset, MM.byteLength))
        } catch (Oi) {
          if (SM = null, MM instanceof Uint8Array) throw Oi;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (MM && "object" == typeof MM ? MM.constructor.name : typeof MM))
        }
        if (this instanceof gM) {
          if (JM = this, this.structures) return nM = this.structures, uM(rM);
          (!nM || nM.length > 0) && (nM = [])
        } else JM = EM, (!nM || nM.length > 0) && (nM = []);
        return uM(rM)
      }
      unpackMultiple(MM, rM) {
        let iM, OM = 0;
        try {
          wM = !0;
          let SM = MM.length,
            jM = this ? this.unpack(MM, SM) : Qr.unpack(MM, SM);
          if (!rM) {
            for (iM = [jM]; aM < SM;) OM = aM, iM.push(uM());
            return iM
          }
          if (!1 === rM(jM, OM, aM)) return;
          for (; aM < SM;)
            if (OM = aM, !1 === rM(uM(), OM, aM)) return
        } catch (Oi) {
          throw Oi.lastPosition = OM, Oi.values = iM, Oi
        } finally {
          wM = !1, ar()
        }
      }
      _mergeStructures(MM, rM) {
        eM && (MM = eM.call(this, MM)), MM = MM || [], Object.isFrozen(MM) && (MM = MM.map((MM => MM.slice(0))));
        for (let iM = 0, OM = MM.length; iM < OM; iM++) {
          let rM = MM[iM];
          rM && (rM.isShared = !0, iM >= 32 && (rM.highByte = iM - 32 >> 5))
        }
        MM.sharedLength = MM.length;
        for (let iM in rM || [])
          if (iM >= 0) {
            let OM = MM[iM],
              SM = rM[iM];
            SM && (OM && ((MM.restoreStructures || (MM.restoreStructures = []))[iM] = OM), MM[iM] = SM)
          } return this.structures = MM
      }
      decode(MM, rM) {
        return this.unpack(MM, rM)
      }
    }

    function uM(MM) {
      try {
        if (!JM.trusted && !wM) {
          let MM = nM.sharedLength || 0;
          MM < nM.length && (nM.length = MM)
        }
        let rM;
        if (JM.randomAccessStructure && SM[aM] < 64 && SM[aM] >= 32 && CM ? (rM = CM(SM, aM, jM, JM), SM = null, MM && MM.lazy || !rM || (rM = rM.toJSON()), aM = jM) : rM = pM(), zM && (aM = zM.postBundlePosition, zM = null), wM && (nM.restoreStructures = null), aM == jM) nM && nM.restoreStructures && RM(), nM = null, SM = null, LM && (LM = null);
        else {
          if (aM > jM) throw new Error("Unexpected end of MessagePack data");
          if (!wM) {
            let MM;
            try {
              MM = JSON.stringify(rM, ((MM, rM) => "bigint" === typeof rM ? `${rM}n` : rM)).slice(0, 100)
            } catch (Oi) {
              MM = "(JSON view not available " + Oi + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + MM)
          }
        }
        return rM
      } catch (Oi) {
        throw nM && nM.restoreStructures && RM(), ar(), (Oi instanceof RangeError || Oi.message.startsWith("Unexpected end of buffer") || aM > jM) && (Oi.incomplete = !0), Oi
      }
    }

    function RM() {
      for (let MM in nM.restoreStructures) nM[MM] = nM.restoreStructures[MM];
      nM.restoreStructures = null
    }

    function pM() {
      let MM = SM[aM++];
      if (MM < 160) {
        if (MM < 128) {
          if (MM < 64) return MM;
          {
            let rM = nM[63 & MM] || JM.getStructures && kM()[63 & MM];
            return rM ? (rM.read || (rM.read = sM(rM, 63 & MM)), rM.read()) : MM
          }
        }
        if (MM < 144) {
          if (MM -= 128, JM.mapsAsObjects) {
            let rM = {};
            for (let iM = 0; iM < MM; iM++) {
              let MM = VM();
              "__proto__" === MM && (MM = "__proto_"), rM[MM] = pM()
            }
            return rM
          } {
            let rM = new Map;
            for (let iM = 0; iM < MM; iM++) rM.set(pM(), pM());
            return rM
          }
        } {
          MM -= 144;
          let rM = new Array(MM);
          for (let iM = 0; iM < MM; iM++) rM[iM] = pM();
          return JM.freezeData ? Object.freeze(rM) : rM
        }
      }
      if (MM < 192) {
        let rM = MM - 160;
        if (yM >= aM) return QM.slice(aM - dM, (aM += rM) - dM);
        if (0 == yM && jM < 140) {
          let MM = rM < 16 ? XM(rM) : BM(rM);
          if (null != MM) return MM
        }
        return ZM(rM)
      } {
        let rM;
        switch (MM) {
          case 192:
            return null;
          case 193:
            return zM ? (rM = pM(), rM > 0 ? zM[1].slice(zM.position1, zM.position1 += rM) : zM[0].slice(zM.position0, zM.position0 -= rM)) : GM;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (rM = SM[aM++], void 0 === rM) throw new Error("Unexpected end of buffer");
            return KM(rM);
          case 197:
            return rM = mM.getUint16(aM), aM += 2, KM(rM);
          case 198:
            return rM = mM.getUint32(aM), aM += 4, KM(rM);
          case 199:
            return qM(SM[aM++]);
          case 200:
            return rM = mM.getUint16(aM), aM += 2, qM(rM);
          case 201:
            return rM = mM.getUint32(aM), aM += 4, qM(rM);
          case 202:
            if (rM = mM.getFloat32(aM), JM.useFloat32 > 2) {
              let MM = Pr[(127 & SM[aM]) << 1 | SM[aM + 1] >> 7];
              return aM += 4, (MM * rM + (rM > 0 ? .5 : -.5) | 0) / MM
            }
            return aM += 4, rM;
          case 203:
            return rM = mM.getFloat64(aM), aM += 8, rM;
          case 204:
            return SM[aM++];
          case 205:
            return rM = mM.getUint16(aM), aM += 2, rM;
          case 206:
            return rM = mM.getUint32(aM), aM += 4, rM;
          case 207:
            return "number" === JM.int64AsType ? (rM = 4294967296 * mM.getUint32(aM), rM += mM.getUint32(aM + 4)) : "string" === JM.int64AsType ? rM = mM.getBigUint64(aM).toString() : "auto" === JM.int64AsType ? (rM = mM.getBigUint64(aM), rM <= BigInt(2) << BigInt(52) && (rM = Number(rM))) : rM = mM.getBigUint64(aM), aM += 8, rM;
          case 208:
            return mM.getInt8(aM++);
          case 209:
            return rM = mM.getInt16(aM), aM += 2, rM;
          case 210:
            return rM = mM.getInt32(aM), aM += 4, rM;
          case 211:
            return "number" === JM.int64AsType ? (rM = 4294967296 * mM.getInt32(aM), rM += mM.getUint32(aM + 4)) : "string" === JM.int64AsType ? rM = mM.getBigInt64(aM).toString() : "auto" === JM.int64AsType ? (rM = mM.getBigInt64(aM), rM >= BigInt(-2) << BigInt(52) && rM <= BigInt(2) << BigInt(52) && (rM = Number(rM))) : rM = mM.getBigInt64(aM), aM += 8, rM;
          case 212:
            if (rM = SM[aM++], 114 == rM) return Mr(63 & SM[aM++]);
            {
              let MM = lM[rM];
              if (MM) return MM.read ? (aM++, MM.read(pM())) : MM.noBuffer ? (aM++, MM()) : MM(SM.subarray(aM, ++aM));
              throw new Error("Unknown extension " + rM)
            }
          case 213:
            return rM = SM[aM], 114 == rM ? (aM++, Mr(63 & SM[aM++], SM[aM++])) : qM(2);
          case 214:
            return qM(4);
          case 215:
            return qM(8);
          case 216:
            return qM(16);
          case 217:
            return rM = SM[aM++], yM >= aM ? QM.slice(aM - dM, (aM += rM) - dM) : oM(rM);
          case 218:
            return rM = mM.getUint16(aM), yM >= (aM += 2) ? QM.slice(aM - dM, (aM += rM) - dM) : fM(rM);
          case 219:
            return rM = mM.getUint32(aM), yM >= (aM += 4) ? QM.slice(aM - dM, (aM += rM) - dM) : YM(rM);
          case 220:
            return rM = mM.getUint16(aM), aM += 2, xM(rM);
          case 221:
            return rM = mM.getUint32(aM), aM += 4, xM(rM);
          case 222:
            return rM = mM.getUint16(aM), aM += 2, vM(rM);
          case 223:
            return rM = mM.getUint32(aM), aM += 4, vM(rM);
          default:
            if (MM >= 224) return MM - 256;
            if (void 0 === MM) {
              let MM = new Error("Unexpected end of MessagePack data");
              throw MM.incomplete = !0, MM
            }
            throw new Error("Unknown MessagePack token " + MM)
        }
      }
    }
    const WM = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function sM(MM, rM) {
      function iM() {
        if (iM.count++ > tM) {
          let iM = MM.read = new Function("r", "return function(){return " + (JM.freezeData ? "Object.freeze" : "") + "({" + MM.map((MM => "__proto__" === MM ? "__proto_:r()" : WM.test(MM) ? MM + ":r()" : "[" + JSON.stringify(MM) + "]:r()")).join(",") + "})}")(pM);
          return 0 === MM.highByte && (MM.read = DM(rM, MM.read)), iM()
        }
        let OM = {};
        for (let rM = 0, iM = MM.length; rM < iM; rM++) {
          let iM = MM[rM];
          "__proto__" === iM && (iM = "__proto_"), OM[iM] = pM()
        }
        return JM.freezeData ? Object.freeze(OM) : OM
      }
      return iM.count = 0, 0 === MM.highByte ? DM(rM, iM) : iM
    }
    const DM = (MM, rM) => function() {
      let iM = SM[aM++];
      if (0 === iM) return rM();
      let OM = MM < 32 ? -(MM + (iM << 5)) : MM + (iM << 5),
        jM = nM[OM] || kM()[OM];
      if (!jM) throw new Error("Record id is not defined for " + OM);
      return jM.read || (jM.read = sM(jM, MM)), jM.read()
    };

    function kM() {
      let MM = jr((() => (SM = null, JM.getStructures())));
      return nM = JM._mergeStructures(MM, nM)
    }
    var ZM = AM,
      oM = AM,
      fM = AM,
      YM = AM;
    let NM = !1;

    function AM(MM) {
      let rM;
      if (MM < 16 && (rM = XM(MM))) return rM;
      if (MM > 64 && OM) return OM.decode(SM.subarray(aM, aM += MM));
      const iM = aM + MM,
        jM = [];
      for (rM = ""; aM < iM;) {
        const MM = SM[aM++];
        if (0 === (128 & MM)) jM.push(MM);
        else if (192 === (224 & MM)) {
          const rM = 63 & SM[aM++];
          jM.push((31 & MM) << 6 | rM)
        } else if (224 === (240 & MM)) {
          const rM = 63 & SM[aM++],
            iM = 63 & SM[aM++];
          jM.push((31 & MM) << 12 | rM << 6 | iM)
        } else if (240 === (248 & MM)) {
          let rM = (7 & MM) << 18 | (63 & SM[aM++]) << 12 | (63 & SM[aM++]) << 6 | 63 & SM[aM++];
          rM > 65535 && (rM -= 65536, jM.push(rM >>> 10 & 1023 | 55296), rM = 56320 | 1023 & rM), jM.push(rM)
        } else jM.push(MM);
        jM.length >= 4096 && (rM += FM.apply(String, jM), jM.length = 0)
      }
      return jM.length > 0 && (rM += FM.apply(String, jM)), rM
    }

    function xM(MM) {
      let rM = new Array(MM);
      for (let iM = 0; iM < MM; iM++) rM[iM] = pM();
      return JM.freezeData ? Object.freeze(rM) : rM
    }

    function vM(MM) {
      if (JM.mapsAsObjects) {
        let rM = {};
        for (let iM = 0; iM < MM; iM++) {
          let MM = VM();
          "__proto__" === MM && (MM = "__proto_"), rM[MM] = pM()
        }
        return rM
      } {
        let rM = new Map;
        for (let iM = 0; iM < MM; iM++) rM.set(pM(), pM());
        return rM
      }
    }
    var FM = String.fromCharCode;

    function BM(MM) {
      let rM = aM,
        iM = new Array(MM);
      for (let OM = 0; OM < MM; OM++) {
        const MM = SM[aM++];
        if ((128 & MM) > 0) return void(aM = rM);
        iM[OM] = MM
      }
      return FM.apply(String, iM)
    }

    function XM(MM) {
      if (MM < 4) {
        if (MM < 2) {
          if (0 === MM) return "";
          {
            let MM = SM[aM++];
            return (128 & MM) > 1 ? void(aM -= 1) : FM(MM)
          }
        } {
          let rM = SM[aM++],
            iM = SM[aM++];
          if ((128 & rM) > 0 || (128 & iM) > 0) return void(aM -= 2);
          if (MM < 3) return FM(rM, iM);
          let OM = SM[aM++];
          return (128 & OM) > 0 ? void(aM -= 3) : FM(rM, iM, OM)
        }
      } {
        let rM = SM[aM++],
          iM = SM[aM++],
          OM = SM[aM++],
          jM = SM[aM++];
        if ((128 & rM) > 0 || (128 & iM) > 0 || (128 & OM) > 0 || (128 & jM) > 0) return void(aM -= 4);
        if (MM < 6) {
          if (4 === MM) return FM(rM, iM, OM, jM);
          {
            let MM = SM[aM++];
            return (128 & MM) > 0 ? void(aM -= 5) : FM(rM, iM, OM, jM, MM)
          }
        }
        if (MM < 8) {
          let PM = SM[aM++],
            nM = SM[aM++];
          if ((128 & PM) > 0 || (128 & nM) > 0) return void(aM -= 6);
          if (MM < 7) return FM(rM, iM, OM, jM, PM, nM);
          let QM = SM[aM++];
          return (128 & QM) > 0 ? void(aM -= 7) : FM(rM, iM, OM, jM, PM, nM, QM)
        } {
          let PM = SM[aM++],
            nM = SM[aM++],
            QM = SM[aM++],
            zM = SM[aM++];
          if ((128 & PM) > 0 || (128 & nM) > 0 || (128 & QM) > 0 || (128 & zM) > 0) return void(aM -= 8);
          if (MM < 10) {
            if (8 === MM) return FM(rM, iM, OM, jM, PM, nM, QM, zM);
            {
              let MM = SM[aM++];
              return (128 & MM) > 0 ? void(aM -= 9) : FM(rM, iM, OM, jM, PM, nM, QM, zM, MM)
            }
          }
          if (MM < 12) {
            let LM = SM[aM++],
              mM = SM[aM++];
            if ((128 & LM) > 0 || (128 & mM) > 0) return void(aM -= 10);
            if (MM < 11) return FM(rM, iM, OM, jM, PM, nM, QM, zM, LM, mM);
            let HM = SM[aM++];
            return (128 & HM) > 0 ? void(aM -= 11) : FM(rM, iM, OM, jM, PM, nM, QM, zM, LM, mM, HM)
          } {
            let LM = SM[aM++],
              mM = SM[aM++],
              HM = SM[aM++],
              hM = SM[aM++];
            if ((128 & LM) > 0 || (128 & mM) > 0 || (128 & HM) > 0 || (128 & hM) > 0) return void(aM -= 12);
            if (MM < 14) {
              if (12 === MM) return FM(rM, iM, OM, jM, PM, nM, QM, zM, LM, mM, HM, hM);
              {
                let MM = SM[aM++];
                return (128 & MM) > 0 ? void(aM -= 13) : FM(rM, iM, OM, jM, PM, nM, QM, zM, LM, mM, HM, hM, MM)
              }
            } {
              let JM = SM[aM++],
                dM = SM[aM++];
              if ((128 & JM) > 0 || (128 & dM) > 0) return void(aM -= 14);
              if (MM < 15) return FM(rM, iM, OM, jM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM);
              let yM = SM[aM++];
              return (128 & yM) > 0 ? void(aM -= 15) : FM(rM, iM, OM, jM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM)
            }
          }
        }
      }
    }

    function IM() {
      let MM, rM = SM[aM++];
      if (rM < 192) MM = rM - 160;
      else switch (rM) {
        case 217:
          MM = SM[aM++];
          break;
        case 218:
          MM = mM.getUint16(aM), aM += 2;
          break;
        case 219:
          MM = mM.getUint32(aM), aM += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return AM(MM)
    }

    function KM(MM) {
      return JM.copyBuffers ? Uint8Array.prototype.slice.call(SM, aM, aM += MM) : SM.subarray(aM, aM += MM)
    }

    function qM(MM) {
      let rM = SM[aM++];
      if (lM[rM]) {
        let iM;
        return lM[rM](SM.subarray(aM, iM = aM += MM), (MM => {
          aM = MM;
          try {
            return pM()
          } finally {
            aM = iM
          }
        }))
      }
      throw new Error("Unknown extension type " + rM)
    }
    var TM = new Array(4096);

    function VM() {
      let MM = SM[aM++];
      if (!(MM >= 160 && MM < 192)) return aM--, cM(pM());
      if (MM -= 160, yM >= aM) return QM.slice(aM - dM, (aM += MM) - dM);
      if (!(0 == yM && jM < 180)) return ZM(MM);
      let rM, iM = 4095 & (MM << 5 ^ (MM > 1 ? mM.getUint16(aM) : MM > 0 ? SM[aM] : 0)),
        OM = TM[iM],
        PM = aM,
        nM = aM + MM - 3,
        zM = 0;
      if (OM && OM.bytes == MM) {
        for (; PM < nM;) {
          if (rM = mM.getUint32(PM), rM != OM[zM++]) {
            PM = 1879048192;
            break
          }
          PM += 4
        }
        for (nM += 3; PM < nM;)
          if (rM = SM[PM++], rM != OM[zM++]) {
            PM = 1879048192;
            break
          } if (PM === nM) return aM = PM, OM.string;
        nM -= 3, PM = aM
      }
      for (OM = [], TM[iM] = OM, OM.bytes = MM; PM < nM;) rM = mM.getUint32(PM), OM.push(rM), PM += 4;
      for (nM += 3; PM < nM;) rM = SM[PM++], OM.push(rM);
      let LM = MM < 16 ? XM(MM) : BM(MM);
      return OM.string = null != LM ? LM : ZM(MM)
    }

    function cM(MM) {
      if ("string" === typeof MM) return MM;
      if ("number" === typeof MM || "boolean" === typeof MM || "bigint" === typeof MM) return MM.toString();
      if (null == MM) return MM + "";
      if (JM.allowArraysInMapKeys && Array.isArray(MM) && MM.flat().every((MM => ["string", "number", "boolean", "bigint"].includes(typeof MM)))) return MM.flat().toString();
      throw new Error("Invalid property type for record: " + typeof MM)
    }
    const Mr = (MM, rM) => {
      let iM = pM().map(cM),
        OM = MM;
      void 0 !== rM && (MM = MM < 32 ? -((rM << 5) + MM) : (rM << 5) + MM, iM.highByte = rM);
      let SM = nM[MM];
      return SM && (SM.isShared || wM) && ((nM.restoreStructures || (nM.restoreStructures = []))[MM] = SM), nM[MM] = iM, iM.read = sM(iM, OM), iM.read()
    };
    lM[0] = () => {}, lM[0].noBuffer = !0, lM[66] = MM => {
      let rM = MM.length,
        iM = BigInt(128 & MM[0] ? MM[0] - 256 : MM[0]);
      for (let OM = 1; OM < rM; OM++) iM <<= BigInt(8), iM += BigInt(MM[OM]);
      return iM
    };
    let rr = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    lM[101] = () => {
      let MM = pM();
      return (rr[MM[0]] || Error)(MM[1], {
        cause: MM[2]
      })
    }, lM[105] = MM => {
      if (!1 === JM.structuredClone) throw new Error("Structured clone extension is disabled");
      let rM = mM.getUint32(aM - 4);
      LM || (LM = new Map);
      let iM, OM = SM[aM];
      iM = OM >= 144 && OM < 160 || 220 == OM || 221 == OM ? [] : {};
      let jM = {
        target: iM
      };
      LM.set(rM, jM);
      let PM = pM();
      return jM.used ? Object.assign(iM, PM) : (jM.target = PM, PM)
    }, lM[112] = MM => {
      if (!1 === JM.structuredClone) throw new Error("Structured clone extension is disabled");
      let rM = mM.getUint32(aM - 4),
        iM = LM.get(rM);
      return iM.used = !0, iM.target
    }, lM[115] = () => new Set(pM());
    const ir = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((MM => MM + "Array"));
    let Or = "object" === typeof globalThis ? globalThis : window;
    lM[116] = MM => {
      let rM = MM[0],
        iM = ir[rM];
      if (!iM) {
        if (16 === rM) {
          let rM = new ArrayBuffer(MM.length - 1);
          return new Uint8Array(rM).set(MM.subarray(1)), rM
        }
        throw new Error("Could not find typed array for code " + rM)
      }
      return new Or[iM](Uint8Array.prototype.slice.call(MM, 1).buffer)
    }, lM[120] = () => {
      let MM = pM();
      return new RegExp(MM[0], MM[1])
    };
    const Sr = [];

    function jr(MM) {
      bM && bM();
      let rM = jM,
        iM = aM,
        OM = hM,
        PM = dM,
        lM = yM,
        EM = QM,
        UM = HM,
        GM = LM,
        CM = zM,
        eM = new Uint8Array(SM.slice(0, jM)),
        tM = nM,
        gM = nM.slice(0, nM.length),
        uM = JM,
        RM = wM,
        pM = MM();
      return jM = rM, aM = iM, hM = OM, dM = PM, yM = lM, QM = EM, HM = UM, LM = GM, zM = CM, SM = eM, wM = RM, (nM = tM).splice(0, nM.length, ...gM), JM = uM, mM = new DataView(SM.buffer, SM.byteOffset, SM.byteLength), pM
    }

    function ar() {
      SM = null, LM = null, nM = null
    }
    lM[98] = MM => {
      let rM = (MM[0] << 24) + (MM[1] << 16) + (MM[2] << 8) + MM[3],
        iM = aM;
      return aM += rM - MM.length, zM = Sr, (zM = [IM(), IM()]).position0 = 0, zM.position1 = 0, zM.postBundlePosition = aM, aM = iM, pM()
    }, lM[255] = MM => 4 == MM.length ? new Date(1e3 * (16777216 * MM[0] + (MM[1] << 16) + (MM[2] << 8) + MM[3])) : 8 == MM.length ? new Date(((MM[0] << 22) + (MM[1] << 14) + (MM[2] << 6) + (MM[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & MM[3]) + 16777216 * MM[4] + (MM[5] << 16) + (MM[6] << 8) + MM[7])) : 12 == MM.length ? new Date(((MM[0] << 24) + (MM[1] << 16) + (MM[2] << 8) + MM[3]) / 1e6 + 1e3 * ((128 & MM[4] ? -281474976710656 : 0) + 1099511627776 * MM[6] + 4294967296 * MM[7] + 16777216 * MM[8] + (MM[9] << 16) + (MM[10] << 8) + MM[11])) : new Date("invalid");
    const Pr = new Array(147);
    for (let Si = 0; Si < 256; Si++) Pr[Si] = +("1e" + Math.floor(45.15 - .30103 * Si));
    const nr = gM;
    var Qr = new gM({
      useRecords: !1
    });
    const zr = Qr.unpack,
      Lr = Qr.unpackMultiple,
      mr = Qr.unpack,
      Hr = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let hr, Jr, dr, yr = new Float32Array(1),
      lr = new Uint8Array(yr.buffer, 0, 4);

    function Er(MM) {
      yr[0] = MM;
      let rM = Pr[(127 & lr[3]) << 1 | lr[2] >> 7];
      return (rM * MM + (MM > 0 ? .5 : -.5) | 0) / rM
    }
    try {
      hr = new TextEncoder
    } catch (Oi) {}
    const Ur = "undefined" !== typeof Buffer,
      Gr = Ur ? function(MM) {
        return Buffer.allocUnsafeSlow(MM)
      } : Uint8Array,
      Cr = Ur ? Buffer : Uint8Array,
      er = Ur ? 4294967296 : 2144337920;
    let br, wr, tr, gr, ur, Rr = 0,
      pr = null;
    const Wr = /[\u0080-\uFFFF]/,
      sr = Symbol("record-id");
    class Dr extends gM {
      constructor(MM) {
        let rM, iM, OM, SM;
        super(MM), this.offset = 0;
        let jM = Cr.prototype.utf8Write ? function(MM, rM) {
            return br.utf8Write(MM, rM, br.byteLength - rM)
          } : !(!hr || !hr.encodeInto) && function(MM, rM) {
            return hr.encodeInto(MM, br.subarray(rM)).written
          },
          aM = this;
        MM || (MM = {});
        let PM = MM && MM.sequential,
          nM = MM.structures || MM.saveStructures,
          QM = MM.maxSharedStructures;
        if (null == QM && (QM = nM ? 32 : 0), QM > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        MM.structuredClone && void 0 == MM.moreTypes && (this.moreTypes = !0);
        let zM = MM.maxOwnStructures;
        null == zM && (zM = nM ? 32 : 64), this.structures || 0 == MM.useRecords || (this.structures = []);
        let LM = QM > 32 || zM + QM > 64,
          mM = QM + 64,
          HM = QM + zM + 64;
        if (HM > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let hM = [],
          JM = 0,
          dM = 0;
        this.pack = this.encode = function(MM, jM) {
          if (br || (br = new Gr(8192), tr = br.dataView || (br.dataView = new DataView(br.buffer, 0, 8192)), Rr = 0), gr = br.length - 10, gr - Rr < 2048 ? (br = new Gr(br.length), tr = br.dataView || (br.dataView = new DataView(br.buffer, 0, br.length)), gr = br.length - 10, Rr = 0) : Rr = Rr + 7 & 2147483640, rM = Rr, jM & Vr && (Rr += 255 & jM), SM = aM.structuredClone ? new Map : null, aM.bundleStrings && "string" !== typeof MM ? (pr = [], pr.size = 1 / 0) : pr = null, OM = aM.structures, OM) {
            OM.uninitialized && (OM = aM._mergeStructures(aM.getStructures()));
            let MM = OM.sharedLength || 0;
            if (MM > QM) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + OM.sharedLength);
            if (!OM.transitions) {
              OM.transitions = Object.create(null);
              for (let rM = 0; rM < MM; rM++) {
                let MM = OM[rM];
                if (!MM) continue;
                let iM, SM = OM.transitions;
                for (let rM = 0, OM = MM.length; rM < OM; rM++) {
                  let OM = MM[rM];
                  iM = SM[OM], iM || (iM = SM[OM] = Object.create(null)), SM = iM
                }
                SM[sr] = rM + 64
              }
              this.lastNamedStructuresLength = MM
            }
            PM || (OM.nextId = MM + 64)
          }
          let nM;
          iM && (iM = !1);
          try {
            aM.randomAccessStructure && MM && MM.constructor && MM.constructor === Object ? gM(MM) : EM(MM);
            let iM = pr;
            if (pr && fr(rM, EM, 0), SM && SM.idsToInsert) {
              let MM = SM.idsToInsert.sort(((MM, rM) => MM.offset > rM.offset ? 1 : -1)),
                OM = MM.length,
                jM = -1;
              for (; iM && OM > 0;) {
                let SM = MM[--OM].offset + rM;
                SM < iM.stringsPosition + rM && -1 === jM && (jM = 0), SM > iM.position + rM ? jM >= 0 && (jM += 6) : (jM >= 0 && (tr.setUint32(iM.position + rM, tr.getUint32(iM.position + rM) + jM), jM = -1), iM = iM.previous, OM++)
              }
              jM >= 0 && iM && tr.setUint32(iM.position + rM, tr.getUint32(iM.position + rM) + jM), Rr += 6 * MM.length, Rr > gr && bM(Rr), aM.offset = Rr;
              let PM = function(MM, rM) {
                let iM, OM = 6 * rM.length,
                  SM = MM.length - OM;
                for (; iM = rM.pop();) {
                  let rM = iM.offset,
                    jM = iM.id;
                  MM.copyWithin(rM + OM, rM, SM), OM -= 6;
                  let aM = rM + OM;
                  MM[aM++] = 214, MM[aM++] = 105, MM[aM++] = jM >> 24, MM[aM++] = jM >> 16 & 255, MM[aM++] = jM >> 8 & 255, MM[aM++] = 255 & jM, SM = rM
                }
                return MM
              }(br.subarray(rM, Rr), MM);
              return SM = null, PM
            }
            return aM.offset = Rr, jM & qr ? (br.start = rM, br.end = Rr, br) : br.subarray(rM, Rr)
          } catch (Oi) {
            throw nM = Oi, Oi
          } finally {
            if (OM && (yM(), iM && aM.saveStructures)) {
              let iM = OM.sharedLength || 0,
                SM = br.subarray(rM, Rr),
                PM = Nr(OM, aM);
              if (!nM) return !1 === aM.saveStructures(PM, PM.isCompatible) ? aM.pack(MM, jM) : (aM.lastNamedStructuresLength = iM, br.length > 1073741824 && (br = null), SM)
            }
            br.length > 1073741824 && (br = null), jM & Tr && (Rr = rM)
          }
        };
        const yM = () => {
            dM < 10 && dM++;
            let MM = OM.sharedLength || 0;
            if (OM.length > MM && !PM && (OM.length = MM), JM > 1e4) OM.transitions = null, dM = 0, JM = 0, hM.length > 0 && (hM = []);
            else if (hM.length > 0 && !PM) {
              for (let MM = 0, rM = hM.length; MM < rM; MM++) hM[MM][sr] = 0;
              hM = []
            }
          },
          lM = MM => {
            var rM = MM.length;
            rM < 16 ? br[Rr++] = 144 | rM : rM < 65536 ? (br[Rr++] = 220, br[Rr++] = rM >> 8, br[Rr++] = 255 & rM) : (br[Rr++] = 221, tr.setUint32(Rr, rM), Rr += 4);
            for (let iM = 0; iM < rM; iM++) EM(MM[iM])
          },
          EM = MM => {
            Rr > gr && (br = bM(Rr));
            var iM, OM = typeof MM;
            if ("string" === OM) {
              let OM, SM = MM.length;
              if (pr && SM >= 4 && SM < 4096) {
                if ((pr.size += SM) > 21760) {
                  let MM, iM, OM = (pr[0] ? 3 * pr[0].length + pr[1].length : 0) + 10;
                  Rr + OM > gr && (br = bM(Rr + OM)), pr.position ? (iM = pr, br[Rr] = 200, Rr += 3, br[Rr++] = 98, MM = Rr - rM, Rr += 4, fr(rM, EM, 0), tr.setUint16(MM + rM - 3, Rr - rM - MM)) : (br[Rr++] = 214, br[Rr++] = 98, MM = Rr - rM, Rr += 4), pr = ["", ""], pr.previous = iM, pr.size = 0, pr.position = MM
                }
                let iM = Wr.test(MM);
                return pr[iM ? 0 : 1] += MM, br[Rr++] = 193, void EM(iM ? -SM : SM)
              }
              OM = SM < 32 ? 1 : SM < 256 ? 2 : SM < 65536 ? 3 : 5;
              let aM = 3 * SM;
              if (Rr + aM > gr && (br = bM(Rr + aM)), SM < 64 || !jM) {
                let rM, jM, aM, PM = Rr + OM;
                for (rM = 0; rM < SM; rM++) jM = MM.charCodeAt(rM), jM < 128 ? br[PM++] = jM : jM < 2048 ? (br[PM++] = jM >> 6 | 192, br[PM++] = 63 & jM | 128) : 55296 === (64512 & jM) && 56320 === (64512 & (aM = MM.charCodeAt(rM + 1))) ? (jM = 65536 + ((1023 & jM) << 10) + (1023 & aM), rM++, br[PM++] = jM >> 18 | 240, br[PM++] = jM >> 12 & 63 | 128, br[PM++] = jM >> 6 & 63 | 128, br[PM++] = 63 & jM | 128) : (br[PM++] = jM >> 12 | 224, br[PM++] = jM >> 6 & 63 | 128, br[PM++] = 63 & jM | 128);
                iM = PM - Rr - OM
              } else iM = jM(MM, Rr + OM);
              iM < 32 ? br[Rr++] = 160 | iM : iM < 256 ? (OM < 2 && br.copyWithin(Rr + 2, Rr + 1, Rr + 1 + iM), br[Rr++] = 217, br[Rr++] = iM) : iM < 65536 ? (OM < 3 && br.copyWithin(Rr + 3, Rr + 2, Rr + 2 + iM), br[Rr++] = 218, br[Rr++] = iM >> 8, br[Rr++] = 255 & iM) : (OM < 5 && br.copyWithin(Rr + 5, Rr + 3, Rr + 3 + iM), br[Rr++] = 219, tr.setUint32(Rr, iM), Rr += 4), Rr += iM
            } else if ("number" === OM)
              if (MM >>> 0 === MM) MM < 32 || MM < 128 && !1 === this.useRecords || MM < 64 && !this.randomAccessStructure ? br[Rr++] = MM : MM < 256 ? (br[Rr++] = 204, br[Rr++] = MM) : MM < 65536 ? (br[Rr++] = 205, br[Rr++] = MM >> 8, br[Rr++] = 255 & MM) : (br[Rr++] = 206, tr.setUint32(Rr, MM), Rr += 4);
              else if ((MM | 0) === MM) MM >= -32 ? br[Rr++] = 256 + MM : MM >= -128 ? (br[Rr++] = 208, br[Rr++] = MM + 256) : MM >= -32768 ? (br[Rr++] = 209, tr.setInt16(Rr, MM), Rr += 2) : (br[Rr++] = 210, tr.setInt32(Rr, MM), Rr += 4);
            else {
              let rM;
              if ((rM = this.useFloat32) > 0 && MM < 4294967296 && MM >= -2147483648) {
                let iM;
                if (br[Rr++] = 202, tr.setFloat32(Rr, MM), rM < 4 || ((iM = MM * Pr[(127 & br[Rr]) << 1 | br[Rr + 1] >> 7]) | 0) === iM) return void(Rr += 4);
                Rr--
              }
              br[Rr++] = 203, tr.setFloat64(Rr, MM), Rr += 8
            } else if ("object" === OM || "function" === OM)
              if (MM) {
                if (SM) {
                  let iM = SM.get(MM);
                  if (iM) {
                    if (!iM.id) {
                      let MM = SM.idsToInsert || (SM.idsToInsert = []);
                      iM.id = MM.push(iM)
                    }
                    return br[Rr++] = 214, br[Rr++] = 112, tr.setUint32(Rr, iM.id), void(Rr += 4)
                  }
                  SM.set(MM, {
                    offset: Rr - rM
                  })
                }
                let jM = MM.constructor;
                if (jM === Object) eM(MM);
                else if (jM === Array) lM(MM);
                else if (jM === Map)
                  if (this.mapAsEmptyObject) br[Rr++] = 128;
                  else {
                    (iM = MM.size) < 16 ? br[Rr++] = 128 | iM : iM < 65536 ? (br[Rr++] = 222, br[Rr++] = iM >> 8, br[Rr++] = 255 & iM) : (br[Rr++] = 223, tr.setUint32(Rr, iM), Rr += 4);
                    for (let [rM, iM] of MM) EM(rM), EM(iM)
                  }
                else {
                  for (let rM = 0, iM = Jr.length; rM < iM; rM++) {
                    if (MM instanceof dr[rM]) {
                      let iM = Jr[rM];
                      if (iM.write) {
                        iM.type && (br[Rr++] = 212, br[Rr++] = iM.type, br[Rr++] = 0);
                        let rM = iM.write.call(this, MM);
                        return void(rM === MM ? Array.isArray(MM) ? lM(MM) : eM(MM) : EM(rM))
                      }
                      let OM, SM = br,
                        jM = tr,
                        aM = Rr;
                      br = null;
                      try {
                        OM = iM.pack.call(this, MM, (MM => (br = SM, SM = null, Rr += MM, Rr > gr && bM(Rr), {
                          target: br,
                          targetView: tr,
                          position: Rr - MM
                        })), EM)
                      } finally {
                        SM && (br = SM, tr = jM, Rr = aM, gr = br.length - 10)
                      }
                      return void(OM && (OM.length + Rr > gr && bM(OM.length + Rr), Rr = or(OM, br, Rr, iM.type)))
                    }
                  }
                  if (Array.isArray(MM)) lM(MM);
                  else {
                    if (MM.toJSON) {
                      const rM = MM.toJSON();
                      if (rM !== MM) return EM(rM)
                    }
                    if ("function" === OM) return EM(this.writeFunction && this.writeFunction(MM));
                    eM(MM)
                  }
                }
              } else br[Rr++] = 192;
            else if ("boolean" === OM) br[Rr++] = MM ? 195 : 194;
            else if ("bigint" === OM) {
              if (MM < BigInt(1) << BigInt(63) && MM >= -(BigInt(1) << BigInt(63))) br[Rr++] = 211, tr.setBigInt64(Rr, MM);
              else if (MM < BigInt(1) << BigInt(64) && MM > 0) br[Rr++] = 207, tr.setBigUint64(Rr, MM);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return EM(MM.toString());
                  if (this.useBigIntExtension && MM < BigInt(2) ** BigInt(1023) && MM > -(BigInt(2) ** BigInt(1023))) {
                    br[Rr++] = 199, Rr++, br[Rr++] = 66;
                    let rM, iM = [];
                    do {
                      let OM = MM & BigInt(255);
                      rM = (OM & BigInt(128)) === (MM < BigInt(0) ? BigInt(128) : BigInt(0)), iM.push(OM), MM >>= BigInt(8)
                    } while (MM !== BigInt(0) && MM !== BigInt(-1) || !rM);
                    br[Rr - 2] = iM.length;
                    for (let MM = iM.length; MM > 0;) br[Rr++] = Number(iM[--MM]);
                    return
                  }
                  throw new RangeError(MM + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                br[Rr++] = 203, tr.setFloat64(Rr, Number(MM))
              }
              Rr += 8
            } else {
              if ("undefined" !== OM) throw new Error("Unknown type: " + OM);
              this.encodeUndefinedAsNil ? br[Rr++] = 192 : (br[Rr++] = 212, br[Rr++] = 0, br[Rr++] = 0)
            }
          },
          UM = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? MM => {
            let rM;
            if (this.skipValues) {
              rM = [];
              for (let iM in MM) "function" === typeof MM.hasOwnProperty && !MM.hasOwnProperty(iM) || this.skipValues.includes(MM[iM]) || rM.push(iM)
            } else rM = Object.keys(MM);
            let iM, OM = rM.length;
            if (OM < 16 ? br[Rr++] = 128 | OM : OM < 65536 ? (br[Rr++] = 222, br[Rr++] = OM >> 8, br[Rr++] = 255 & OM) : (br[Rr++] = 223, tr.setUint32(Rr, OM), Rr += 4), this.coercibleKeyAsNumber)
              for (let SM = 0; SM < OM; SM++) {
                iM = rM[SM];
                let OM = Number(iM);
                EM(isNaN(OM) ? iM : OM), EM(MM[iM])
              } else
                for (let SM = 0; SM < OM; SM++) EM(iM = rM[SM]), EM(MM[iM])
          } : MM => {
            br[Rr++] = 222;
            let iM = Rr - rM;
            Rr += 2;
            let OM = 0;
            for (let rM in MM)("function" !== typeof MM.hasOwnProperty || MM.hasOwnProperty(rM)) && (EM(rM), EM(MM[rM]), OM++);
            if (OM > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            br[iM++ + rM] = OM >> 8, br[iM + rM] = 255 & OM
          },
          GM = !1 === this.useRecords ? UM : MM.progressiveRecords && !LM ? MM => {
            let iM, SM, jM = OM.transitions || (OM.transitions = Object.create(null)),
              aM = Rr++ - rM;
            for (let PM in MM)
              if ("function" !== typeof MM.hasOwnProperty || MM.hasOwnProperty(PM)) {
                if (iM = jM[PM], iM) jM = iM;
                else {
                  let nM = Object.keys(MM),
                    QM = jM;
                  jM = OM.transitions;
                  let zM = 0;
                  for (let MM = 0, rM = nM.length; MM < rM; MM++) {
                    let rM = nM[MM];
                    iM = jM[rM], iM || (iM = jM[rM] = Object.create(null), zM++), jM = iM
                  }
                  aM + rM + 1 == Rr ? (Rr--, wM(jM, nM, zM)) : tM(jM, nM, aM, zM), SM = !0, jM = QM[PM]
                }
                EM(MM[PM])
              } if (!SM) {
              let iM = jM[sr];
              iM ? br[aM + rM] = iM : tM(jM, Object.keys(MM), aM, 0)
            }
          } : MM => {
            let rM, iM = OM.transitions || (OM.transitions = Object.create(null)),
              SM = 0;
            for (let OM in MM)("function" !== typeof MM.hasOwnProperty || MM.hasOwnProperty(OM)) && (rM = iM[OM], rM || (rM = iM[OM] = Object.create(null), SM++), iM = rM);
            let jM = iM[sr];
            jM ? jM >= 96 && LM ? (br[Rr++] = 96 + (31 & (jM -= 96)), br[Rr++] = jM >> 5) : br[Rr++] = jM : wM(iM, iM.__keys__ || Object.keys(MM), SM);
            for (let OM in MM)("function" !== typeof MM.hasOwnProperty || MM.hasOwnProperty(OM)) && EM(MM[OM])
          },
          CM = "function" == typeof this.useRecords && this.useRecords,
          eM = CM ? MM => {
            CM(MM) ? GM(MM) : UM(MM)
          } : GM,
          bM = MM => {
            let iM;
            if (MM > 16777216) {
              if (MM - rM > er) throw new Error("Packed buffer would be larger than maximum buffer size");
              iM = Math.min(er, 4096 * Math.round(Math.max((MM - rM) * (MM > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else iM = 1 + (Math.max(MM - rM << 2, br.length - 1) >> 12) << 12;
            let OM = new Gr(iM);
            return tr = OM.dataView || (OM.dataView = new DataView(OM.buffer, 0, iM)), MM = Math.min(MM, br.length), br.copy ? br.copy(OM, 0, rM, MM) : OM.set(br.slice(rM, MM)), Rr -= rM, rM = 0, gr = OM.length - 10, br = OM
          },
          wM = (MM, rM, SM) => {
            let jM = OM.nextId;
            jM || (jM = 64), jM < mM && this.shouldShareStructure && !this.shouldShareStructure(rM) ? (jM = OM.nextOwnId, jM < HM || (jM = mM), OM.nextOwnId = jM + 1) : (jM >= HM && (jM = mM), OM.nextId = jM + 1);
            let aM = rM.highByte = jM >= 96 && LM ? jM - 96 >> 5 : -1;
            MM[sr] = jM, MM.__keys__ = rM, OM[jM - 64] = rM, jM < mM ? (rM.isShared = !0, OM.sharedLength = jM - 63, iM = !0, aM >= 0 ? (br[Rr++] = 96 + (31 & jM), br[Rr++] = aM) : br[Rr++] = jM) : (aM >= 0 ? (br[Rr++] = 213, br[Rr++] = 114, br[Rr++] = 96 + (31 & jM), br[Rr++] = aM) : (br[Rr++] = 212, br[Rr++] = 114, br[Rr++] = jM), SM && (JM += dM * SM), hM.length >= zM && (hM.shift()[sr] = 0), hM.push(MM), EM(rM))
          },
          tM = (MM, iM, OM, SM) => {
            let jM = br,
              aM = Rr,
              PM = gr,
              nM = rM;
            br = wr, Rr = 0, rM = 0, br || (wr = br = new Gr(8192)), gr = br.length - 10, wM(MM, iM, SM), wr = br;
            let QM = Rr;
            if (br = jM, Rr = aM, gr = PM, rM = nM, QM > 1) {
              let MM = Rr + QM - 1;
              MM > gr && bM(MM);
              let iM = OM + rM;
              br.copyWithin(iM + QM, iM + 1, Rr), br.set(wr.slice(0, QM), iM), Rr = MM
            } else br[OM + rM] = wr[0]
          },
          gM = MM => {
            let SM = ur(MM, br, rM, Rr, OM, bM, ((MM, rM, OM) => {
              if (OM) return iM = !0;
              Rr = rM;
              let SM = br;
              return EM(MM), yM(), SM !== br ? {
                position: Rr,
                targetView: tr,
                target: br
              } : Rr
            }), this);
            if (0 === SM) return eM(MM);
            Rr = SM
          }
      }
      useBuffer(MM) {
        br = MM, tr = br.dataView || (br.dataView = new DataView(br.buffer, br.byteOffset, br.byteLength)), Rr = 0
      }
      set position(MM) {
        Rr = MM
      }
      get position() {
        return Rr
      }
      set buffer(MM) {
        br = MM
      }
      get buffer() {
        return br
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function kr(MM, rM, iM, OM) {
      let SM = MM.byteLength;
      if (SM + 1 < 256) {
        var {
          target: jM,
          position: aM
        } = iM(4 + SM);
        jM[aM++] = 199, jM[aM++] = SM + 1
      } else if (SM + 1 < 65536) {
        var {
          target: jM,
          position: aM
        } = iM(5 + SM);
        jM[aM++] = 200, jM[aM++] = SM + 1 >> 8, jM[aM++] = SM + 1 & 255
      } else {
        var {
          target: jM,
          position: aM,
          targetView: PM
        } = iM(7 + SM);
        jM[aM++] = 201, PM.setUint32(aM, SM + 1), aM += 4
      }
      jM[aM++] = 116, jM[aM++] = rM, MM.buffer || (MM = new Uint8Array(MM)), jM.set(new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength), aM)
    }

    function Zr(MM, rM) {
      let iM = MM.byteLength;
      var OM, SM;
      if (iM < 256) {
        var {
          target: OM,
          position: SM
        } = rM(iM + 2);
        OM[SM++] = 196, OM[SM++] = iM
      } else if (iM < 65536) {
        var {
          target: OM,
          position: SM
        } = rM(iM + 3);
        OM[SM++] = 197, OM[SM++] = iM >> 8, OM[SM++] = 255 & iM
      } else {
        var {
          target: OM,
          position: SM,
          targetView: jM
        } = rM(iM + 5);
        OM[SM++] = 198, jM.setUint32(SM, iM), SM += 4
      }
      OM.set(MM, SM)
    }

    function or(MM, rM, iM, OM) {
      let SM = MM.length;
      switch (SM) {
        case 1:
          rM[iM++] = 212;
          break;
        case 2:
          rM[iM++] = 213;
          break;
        case 4:
          rM[iM++] = 214;
          break;
        case 8:
          rM[iM++] = 215;
          break;
        case 16:
          rM[iM++] = 216;
          break;
        default:
          SM < 256 ? (rM[iM++] = 199, rM[iM++] = SM) : SM < 65536 ? (rM[iM++] = 200, rM[iM++] = SM >> 8, rM[iM++] = 255 & SM) : (rM[iM++] = 201, rM[iM++] = SM >> 24, rM[iM++] = SM >> 16 & 255, rM[iM++] = SM >> 8 & 255, rM[iM++] = 255 & SM)
      }
      return rM[iM++] = OM, rM.set(MM, iM), iM += SM
    }

    function fr(MM, rM, iM) {
      if (pr.length > 0) {
        tr.setUint32(pr.position + MM, Rr + iM - pr.position - MM), pr.stringsPosition = Rr - MM;
        let OM = pr;
        pr = null, rM(OM[0]), rM(OM[1])
      }
    }

    function Yr(MM) {
      if (MM.Class) {
        if (!MM.pack && !MM.write) throw new Error("Extension has no pack or write function");
        if (MM.pack && !MM.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        dr.unshift(MM.Class), Jr.unshift(MM)
      }! function(MM) {
        MM.unpack ? lM[MM.type] = MM.unpack : lM[MM.type] = MM
      }(MM)
    }

    function Nr(MM, rM) {
      return MM.isCompatible = MM => {
        let iM = !MM || (rM.lastNamedStructuresLength || 0) === MM.length;
        return iM || rM._mergeStructures(MM), iM
      }, MM
    }
    dr = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, UM], Jr = [{
      pack(MM, rM, iM) {
        let OM = MM.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === MM.getMilliseconds()) && OM >= 0 && OM < 4294967296) {
          let {
            target: MM,
            targetView: iM,
            position: SM
          } = rM(6);
          MM[SM++] = 214, MM[SM++] = 255, iM.setUint32(SM, OM)
        } else if (OM > 0 && OM < 4294967296) {
          let {
            target: iM,
            targetView: SM,
            position: jM
          } = rM(10);
          iM[jM++] = 215, iM[jM++] = 255, SM.setUint32(jM, 4e6 * MM.getMilliseconds() + (OM / 1e3 / 4294967296 | 0)), SM.setUint32(jM + 4, OM)
        } else if (isNaN(OM)) {
          if (this.onInvalidDate) return rM(0), iM(this.onInvalidDate());
          let {
            target: MM,
            targetView: OM,
            position: SM
          } = rM(3);
          MM[SM++] = 212, MM[SM++] = 255, MM[SM++] = 255
        } else {
          let {
            target: iM,
            targetView: SM,
            position: jM
          } = rM(15);
          iM[jM++] = 199, iM[jM++] = 12, iM[jM++] = 255, SM.setUint32(jM, 1e6 * MM.getMilliseconds()), SM.setBigInt64(jM + 4, BigInt(Math.floor(OM)))
        }
      }
    }, {
      pack(MM, rM, iM) {
        if (this.setAsEmptyObject) return rM(0), iM({});
        let OM = Array.from(MM),
          {
            target: SM,
            position: jM
          } = rM(this.moreTypes ? 3 : 0);
        this.moreTypes && (SM[jM++] = 212, SM[jM++] = 115, SM[jM++] = 0), iM(OM)
      }
    }, {
      pack(MM, rM, iM) {
        let {
          target: OM,
          position: SM
        } = rM(this.moreTypes ? 3 : 0);
        this.moreTypes && (OM[SM++] = 212, OM[SM++] = 101, OM[SM++] = 0), iM([MM.name, MM.message, MM.cause])
      }
    }, {
      pack(MM, rM, iM) {
        let {
          target: OM,
          position: SM
        } = rM(this.moreTypes ? 3 : 0);
        this.moreTypes && (OM[SM++] = 212, OM[SM++] = 120, OM[SM++] = 0), iM([MM.source, MM.flags])
      }
    }, {
      pack(MM, rM) {
        this.moreTypes ? kr(MM, 16, rM) : Zr(Ur ? Buffer.from(MM) : new Uint8Array(MM), rM)
      }
    }, {
      pack(MM, rM) {
        let iM = MM.constructor;
        iM !== Cr && this.moreTypes ? kr(MM, ir.indexOf(iM.name), rM) : Zr(MM, rM)
      }
    }, {
      pack(MM, rM) {
        let {
          target: iM,
          position: OM
        } = rM(1);
        iM[OM] = 193
      }
    }];
    let Ar = new Dr({
      useRecords: !1
    });
    const xr = Ar.pack,
      vr = Ar.pack,
      Fr = Dr,
      {
        NEVER: Br,
        ALWAYS: Xr,
        DECIMAL_ROUND: Ir,
        DECIMAL_FIT: Kr
      } = Hr,
      qr = 512,
      Tr = 1024,
      Vr = 2048;
    const cr = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!MM || "object" !== typeof MM) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const iM = new gM(rM);
        let OM;
        const SM = MM => {
          let rM;
          OM && (MM = Buffer.concat([OM, MM]), OM = void 0);
          try {
            rM = iM.unpackMultiple(MM)
          } catch (SM) {
            if (!SM.incomplete) throw SM;
            OM = MM.slice(SM.lastPosition), rM = SM.values
          }
          return rM
        };
        return "function" === typeof MM[Symbol.iterator] ? function*() {
          for (const rM of MM) yield* SM(rM)
        }() : "function" === typeof MM[Symbol.asyncIterator] ? async function*() {
          for await (const rM of MM) yield* SM(rM)
        }(): void 0
      },
      Mi = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (MM && "object" === typeof MM) {
          if ("function" === typeof MM[Symbol.iterator]) return function*(MM, rM) {
            const iM = new Dr(rM);
            for (const OM of MM) yield iM.pack(OM)
          }(MM, rM);
          if ("function" === typeof MM.then || "function" === typeof MM[Symbol.asyncIterator]) return async function*(MM, rM) {
            const iM = new Dr(rM);
            for await (const OM of MM) yield iM.pack(OM)
          }(MM, rM);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      ri = !1,
      ii = !0
  },
  9726: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      $changes: () => JM,
      $childType: () => dM,
      $decoder: () => zM,
      $deleteByIndex: () => HM,
      $encoder: () => QM,
      $filter: () => LM,
      $getByIndex: () => mM,
      $numFields: () => tM,
      $refId: () => PM,
      $track: () => nM,
      $values: () => GM,
      ArraySchema: () => SO,
      Callbacks: () => SS,
      ChangeTree: () => Wi,
      CollectionSchema: () => PO,
      Decoder: () => qO,
      Encoder: () => BO,
      FieldBuilder: () => zO,
      MapSchema: () => aO,
      Metadata: () => Ir,
      OPERATION: () => SM,
      Reflection: () => MS,
      ReflectionField: () => VO,
      ReflectionType: () => cO,
      Root: () => sO,
      Schema: () => pO,
      SetSchema: () => nO,
      StateCallbackStrategy: () => OS,
      StateView: () => fO,
      StreamSchema: () => QO,
      TypeContext: () => Nr,
      createPool: () => aS,
      decode: () => Er,
      decodeKeyValueOperation: () => Vi,
      decodeSchemaOperation: () => Ti,
      defineCustomTypes: () => er,
      defineTypes: () => gO,
      deprecated: () => wO,
      dumpChanges: () => RO,
      encode: () => rr,
      encodeArray: () => Ni,
      encodeIndexedEntry: () => fi,
      encodeKeyValueOperation: () => Yi,
      encodeMapEntry: () => oi,
      encodeSchemaOperation: () => Zi,
      zh: () => yO,
      fullStateOnly: () => GO,
      getDecoderStateCallbacks: () => rS,
      getEncodeDescriptor: () => Mi,
      getRawChangesCallback: () => iS,
      isBuilder: () => LO,
      patchOnly: () => UO,
      registerType: () => Cr,
      schema: () => uO,
      t: () => JO,
      type: () => CO,
      unreliable: () => EO,
      view: () => lO
    });
    const OM = 255;
    var SM;

    function jM(MM) {
      Object.defineProperty(MM, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(MM) {
      MM[MM.ADD = 128] = "ADD", MM[MM.REPLACE = 0] = "REPLACE", MM[MM.DELETE = 64] = "DELETE", MM[MM.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", MM[MM.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", MM[MM.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", MM[MM.CLEAR = 10] = "CLEAR", MM[MM.REVERSE = 15] = "REVERSE", MM[MM.MOVE = 32] = "MOVE", MM[MM.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", MM[MM.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(SM || (SM = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const aM = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const MM = "colyseus.symbolRegistry",
        rM = aM[MM] || (aM[MM] = Object.create(null));
      Symbol.for = function(MM) {
        return rM[MM] || (rM[MM] = Symbol(MM))
      }, Symbol.keyFor = function(MM) {
        for (const iM in rM)
          if (rM[iM] === MM) return iM
      }
    }
    const PM = Symbol.for("$refId"),
      nM = "~track",
      QM = "~encoder",
      zM = "~decoder",
      LM = "~filter",
      mM = "~getByIndex",
      HM = "~deleteByIndex",
      hM = "~resyncPrune",
      JM = Symbol.for("$changes"),
      dM = Symbol.for("$childType"),
      yM = Symbol.for("$proxyTarget"),
      lM = "~onEncodeEnd",
      EM = "~reset",
      UM = "~onDecodeEnd",
      GM = Symbol.for("$values"),
      CM = "~builder",
      eM = "~descriptors",
      bM = "~__encodeDescriptor",
      wM = "~encoders",
      tM = "~__numFields",
      gM = "~__refTypeFieldIndexes",
      uM = "~__viewFieldIndexes",
      RM = "$__fieldIndexesByViewTag",
      pM = "~__unreliableFieldIndexes",
      WM = "~__patchOnlyFieldIndexes",
      sM = "~__fullSyncSkipIndexes",
      DM = "~__fullStateOnlyFieldIndexes",
      kM = "~__streamFieldIndexes",
      ZM = "~__streamPriorities";
    let oM;
    try {
      oM = new TextEncoder
    } catch (PS) {}
    const fM = new ArrayBuffer(8),
      YM = new Int32Array(fM),
      NM = new Float32Array(fM),
      AM = new Float64Array(fM),
      xM = new BigInt64Array(fM),
      vM = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(MM, rM) {
        for (var iM = 0, OM = 0, SM = 0, jM = MM.length; SM < jM; SM++)(iM = MM.charCodeAt(SM)) < 128 ? OM += 1 : iM < 2048 ? OM += 2 : iM < 55296 || iM >= 57344 ? OM += 3 : (SM++, OM += 4);
        return OM
      };

    function FM(MM, rM, iM) {
      for (var OM = 0, SM = 0, jM = rM.length; SM < jM; SM++)(OM = rM.charCodeAt(SM)) < 128 ? MM[iM.offset++] = OM : OM < 2048 ? (MM[iM.offset] = 192 | OM >> 6, MM[iM.offset + 1] = 128 | 63 & OM, iM.offset += 2) : OM < 55296 || OM >= 57344 ? (MM[iM.offset] = 224 | OM >> 12, MM[iM.offset + 1] = 128 | OM >> 6 & 63, MM[iM.offset + 2] = 128 | 63 & OM, iM.offset += 3) : (SM++, OM = 65536 + ((1023 & OM) << 10 | 1023 & rM.charCodeAt(SM)), MM[iM.offset] = 240 | OM >> 18, MM[iM.offset + 1] = 128 | OM >> 12 & 63, MM[iM.offset + 2] = 128 | OM >> 6 & 63, MM[iM.offset + 3] = 128 | 63 & OM, iM.offset += 4)
    }

    function BM(MM, rM, iM) {
      MM[iM.offset++] = 255 & rM
    }

    function XM(MM, rM, iM) {
      MM[iM.offset++] = 255 & rM, MM[iM.offset++] = rM >> 8 & 255
    }

    function IM(MM, rM, iM) {
      MM[iM.offset++] = 255 & rM, MM[iM.offset++] = rM >> 8 & 255
    }

    function KM(MM, rM, iM) {
      MM[iM.offset++] = 255 & rM, MM[iM.offset++] = rM >> 8 & 255, MM[iM.offset++] = rM >> 16 & 255, MM[iM.offset++] = rM >> 24 & 255
    }

    function qM(MM, rM, iM) {
      const OM = rM >> 24,
        SM = rM >> 16,
        jM = rM >> 8,
        aM = rM;
      MM[iM.offset++] = 255 & aM, MM[iM.offset++] = 255 & jM, MM[iM.offset++] = 255 & SM, MM[iM.offset++] = 255 & OM
    }

    function TM(MM, rM, iM) {
      const OM = Math.floor(rM / Math.pow(2, 32));
      qM(MM, rM >>> 0, iM), qM(MM, OM, iM)
    }

    function VM(MM, rM, iM) {
      const OM = rM / Math.pow(2, 32) | 0;
      qM(MM, rM >>> 0, iM), qM(MM, OM, iM)
    }

    function cM(MM, rM, iM) {
      NM[0] = rM, KM(MM, YM[0], iM)
    }

    function Mr(MM, rM, iM) {
      AM[0] = rM, KM(MM, YM[0], iM), KM(MM, YM[1], iM)
    }
    const rr = {
        int8: BM,
        uint8: function(MM, rM, iM) {
          MM[iM.offset++] = 255 & rM
        },
        int16: XM,
        uint16: IM,
        int32: KM,
        uint32: qM,
        int64: TM,
        uint64: VM,
        bigint64: function(MM, rM, iM) {
          xM[0] = BigInt.asIntN(64, rM), KM(MM, YM[0], iM), KM(MM, YM[1], iM)
        },
        biguint64: function(MM, rM, iM) {
          xM[0] = BigInt.asIntN(64, rM), KM(MM, YM[0], iM), KM(MM, YM[1], iM)
        },
        float32: cM,
        float64: Mr,
        boolean: function(MM, rM, iM) {
          MM[iM.offset++] = rM ? 1 : 0
        },
        string: function(MM, rM, iM) {
          rM || (rM = "");
          let OM = vM(rM, "utf8"),
            SM = 0;
          if (OM < 32) MM[iM.offset++] = 160 | OM, SM = 1;
          else if (OM < 256) MM[iM.offset++] = 217, MM[iM.offset++] = OM, SM = 2;
          else if (OM < 65536) MM[iM.offset++] = 218, IM(MM, OM, iM), SM = 3;
          else {
            if (!(OM < 4294967296)) throw new Error("String too long");
            MM[iM.offset++] = 219, qM(MM, OM, iM), SM = 5
          }
          return FM(MM, rM, iM), SM + OM
        },
        number: function MM(rM, iM, OM) {
          return isNaN(iM) ? MM(rM, 0, OM) : isFinite(iM) ? iM !== (0 | iM) ? Math.abs(iM) <= 34028235e31 && (NM[0] = iM, Math.abs(Math.abs(NM[0]) - Math.abs(iM)) < 1e-4) ? (rM[OM.offset++] = 202, cM(rM, iM, OM), 5) : (rM[OM.offset++] = 203, Mr(rM, iM, OM), 9) : iM >= 0 ? iM < 128 ? (rM[OM.offset++] = 255 & iM, 1) : iM < 256 ? (rM[OM.offset++] = 204, rM[OM.offset++] = 255 & iM, 2) : iM < 65536 ? (rM[OM.offset++] = 205, IM(rM, iM, OM), 3) : iM < 4294967296 ? (rM[OM.offset++] = 206, qM(rM, iM, OM), 5) : (rM[OM.offset++] = 207, VM(rM, iM, OM), 9) : iM >= -32 ? (rM[OM.offset++] = 224 | iM + 32, 1) : iM >= -128 ? (rM[OM.offset++] = 208, BM(rM, iM, OM), 2) : iM >= -32768 ? (rM[OM.offset++] = 209, XM(rM, iM, OM), 3) : iM >= -2147483648 ? (rM[OM.offset++] = 210, KM(rM, iM, OM), 5) : (rM[OM.offset++] = 211, TM(rM, iM, OM), 9) : MM(rM, iM > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, OM)
        },
        utf8Write: FM,
        utf8Length: vM
      },
      ir = new ArrayBuffer(8),
      Or = new Int32Array(ir),
      Sr = new Float32Array(ir),
      jr = new Float64Array(ir),
      ar = new BigUint64Array(ir),
      Pr = new BigInt64Array(ir);

    function nr(MM, rM, iM) {
      iM > MM.length - rM.offset && (iM = MM.length - rM.offset);
      for (var OM = "", SM = 0, jM = rM.offset, aM = rM.offset + iM; jM < aM; jM++) {
        var PM = MM[jM];
        if (0 !== (128 & PM))
          if (192 !== (224 & PM))
            if (224 !== (240 & PM)) {
              if (240 !== (248 & PM)) {
                console.error("decode.utf8Read(): Invalid byte " + PM + " at offset " + jM + ". Skip to end of string: " + (rM.offset + iM));
                break
              }(SM = (7 & PM) << 18 | (63 & MM[++jM]) << 12 | (63 & MM[++jM]) << 6 | 63 & MM[++jM]) >= 65536 ? (SM -= 65536, OM += String.fromCharCode(55296 + (SM >>> 10), 56320 + (1023 & SM))) : OM += String.fromCharCode(SM)
            } else OM += String.fromCharCode((15 & PM) << 12 | (63 & MM[++jM]) << 6 | 63 & MM[++jM]);
        else OM += String.fromCharCode((31 & PM) << 6 | 63 & MM[++jM]);
        else OM += String.fromCharCode(PM)
      }
      return rM.offset += iM, OM
    }

    function Qr(MM, rM) {
      return zr(MM, rM) << 24 >> 24
    }

    function zr(MM, rM) {
      return MM[rM.offset++]
    }

    function Lr(MM, rM) {
      return mr(MM, rM) << 16 >> 16
    }

    function mr(MM, rM) {
      return MM[rM.offset++] | MM[rM.offset++] << 8
    }

    function Hr(MM, rM) {
      return MM[rM.offset++] | MM[rM.offset++] << 8 | MM[rM.offset++] << 16 | MM[rM.offset++] << 24
    }

    function hr(MM, rM) {
      return Hr(MM, rM) >>> 0
    }

    function Jr(MM, rM) {
      return Or[0] = Hr(MM, rM), Sr[0]
    }

    function dr(MM, rM) {
      return Or[0] = Hr(MM, rM), Or[1] = Hr(MM, rM), jr[0]
    }

    function yr(MM, rM) {
      const iM = hr(MM, rM);
      return Hr(MM, rM) * Math.pow(2, 32) + iM
    }

    function lr(MM, rM) {
      const iM = hr(MM, rM);
      return hr(MM, rM) * Math.pow(2, 32) + iM
    }
    const Er = {
        utf8Read: nr,
        int8: Qr,
        uint8: zr,
        int16: Lr,
        uint16: mr,
        int32: Hr,
        uint32: hr,
        float32: Jr,
        float64: dr,
        int64: yr,
        uint64: lr,
        bigint64: function(MM, rM) {
          return Or[0] = Hr(MM, rM), Or[1] = Hr(MM, rM), Pr[0]
        },
        biguint64: function(MM, rM) {
          return Or[0] = Hr(MM, rM), Or[1] = Hr(MM, rM), ar[0]
        },
        boolean: function(MM, rM) {
          return zr(MM, rM) > 0
        },
        string: function(MM, rM) {
          const iM = MM[rM.offset++];
          let OM;
          return iM < 192 ? OM = 31 & iM : 217 === iM ? OM = zr(MM, rM) : 218 === iM ? OM = mr(MM, rM) : 219 === iM && (OM = hr(MM, rM)), nr(MM, rM, OM)
        },
        number: function(MM, rM) {
          const iM = MM[rM.offset++];
          return iM < 128 ? iM : 202 === iM ? Jr(MM, rM) : 203 === iM ? dr(MM, rM) : 204 === iM ? zr(MM, rM) : 205 === iM ? mr(MM, rM) : 206 === iM ? hr(MM, rM) : 207 === iM ? lr(MM, rM) : 208 === iM ? Qr(MM, rM) : 209 === iM ? Lr(MM, rM) : 210 === iM ? Hr(MM, rM) : 211 === iM ? yr(MM, rM) : iM > 223 ? -1 * (255 - iM + 1) : void 0
        },
        stringCheck: function(MM, rM) {
          const iM = MM[rM.offset];
          return iM < 192 && iM > 160 || 217 === iM || 218 === iM || 219 === iM
        }
      },
      Ur = {},
      Gr = new Map;

    function Cr(MM, rM) {
      rM.constructor && (Object.prototype.hasOwnProperty.call(rM, "constructor") && null == rM.constructor[Symbol.metadata] && jM(rM.constructor), Gr.set(rM.constructor, MM), Ur[MM] = rM), rM.encode && (rr[MM] = rM.encode), rM.decode && (Er[MM] = rM.decode)
    }

    function er(MM) {
      for (const rM in MM) Cr(rM, MM[rM]);
      return MM => CO(MM)
    }
    const br = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function wr() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function tr(MM) {
      return MM._stream ??= wr()
    }

    function gr(MM, rM, iM) {
      0 === rM.activeViews.size && tr(MM).broadcastPending.add(iM)
    }

    function ur(MM, rM, iM, OM) {
      const jM = MM._stream;
      if (void 0 === jM) return !0;
      let aM = !1;
      return jM.broadcastPending.delete(OM) ? aM = !0 : jM.sentBroadcast.delete(OM) && jM.broadcastDeletes.add(OM), rM.forEachActiveView((MM => {
        const rM = jM.pendingByView.get(MM.id);
        if (rM?.has(OM)) return rM.delete(OM), void(aM = !0);
        const PM = jM.sentByView.get(MM.id);
        if (PM?.has(OM)) {
          PM.delete(OM);
          let rM = MM.changes.get(iM);
          void 0 === rM && (rM = new Map, MM.changes.set(iM, rM)), rM.set(OM, SM.DELETE)
        }
      })), aM
    }

    function Rr(MM, rM) {
      const iM = MM._stream?.pendingByView;
      if (void 0 === iM) return !1;
      for (const [OM, SM] of iM)
        if (SM.size > 0 && void 0 !== rM.activeViews.get(OM)?.deref()) return !0;
      return !1
    }

    function pr(MM) {
      const rM = MM._stream;
      return void 0 !== rM && (rM.broadcastPending.size > 0 || rM.broadcastDeletes.size > 0)
    }

    function Wr(MM, rM, iM) {
      const OM = tr(MM);
      let SM = OM.pendingByView.get(rM);
      void 0 === SM && (SM = new Set, OM.pendingByView.set(rM, SM)), SM.add(iM)
    }

    function sr(MM, rM) {
      const iM = MM._stream;
      void 0 !== iM && (iM.pendingByView.delete(rM), iM.sentByView.delete(rM), iM.priorityByView?.delete(rM))
    }
    const Dr = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function kr(MM) {
      if (null == MM || "object" !== typeof MM) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: rM,
        max: iM
      } = MM;
      if ("number" !== typeof rM || "number" !== typeof iM || !(iM > rM) || !Number.isFinite(rM) || !Number.isFinite(iM)) throw new Error(`t.quantized(): require finite min < max (got min=${rM}, max=${iM}).`);
      const OM = MM.bits ?? 16;
      if (8 !== OM && 16 !== OM && 32 !== OM) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${OM}).`);
      const SM = MM.mode ?? "clamp";
      if ("clamp" !== SM && "wrap" !== SM) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(SM)}).`);
      const jM = "wrap" === SM,
        aM = Math.pow(2, OM);
      return {
        min: rM,
        max: iM,
        bits: OM,
        wrap: jM,
        wire: Dr[OM],
        range: iM - rM,
        span: jM ? aM : rM === -iM ? aM - 2 : aM - 1
      }
    }

    function Zr(MM) {
      return null !== MM && "object" === typeof MM && void 0 !== MM.quantized
    }

    function or(MM, rM) {
      if (MM.wrap) {
        if (!Number.isFinite(rM)) return 0;
        const iM = MM.range;
        let OM = (rM - MM.min) % iM;
        OM < 0 && (OM += iM);
        const SM = MM.span;
        return Math.floor(OM / iM * SM + .5) % SM
      }
      if (rM !== rM) return 0;
      const iM = rM < MM.min ? MM.min : rM > MM.max ? MM.max : rM;
      return Math.floor((iM - MM.min) / MM.range * MM.span + .5)
    }

    function fr(MM, rM) {
      return MM.min + rM / MM.span * MM.range
    }

    function Yr(MM) {
      const rM = rr[MM.wire];
      return (iM, OM, SM) => rM(iM, or(MM, OM), SM)
    }
    class Nr {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(MM) {
        const rM = Object.getPrototypeOf(MM);
        if (rM !== pO) {
          let iM = Nr.inheritedTypes.get(rM);
          iM || (iM = new Set, Nr.inheritedTypes.set(rM, iM)), iM.add(MM)
        }
      }
      static cache(MM) {
        let rM = Nr.cachedContexts.get(MM);
        return rM || (rM = new Nr(MM), Nr.cachedContexts.set(MM, rM)), rM
      }
      constructor(MM) {
        MM && this.discoverTypes(MM)
      }
      has(MM) {
        return this.schemas.has(MM)
      }
      get(MM) {
        return this.types[MM]
      }
      add(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(MM) && (this.types[rM] = MM, null == MM[Symbol.metadata] && Ir.initialize(MM), this.schemas.set(MM, rM), !0)
      }
      getTypeId(MM) {
        return this.schemas.get(MM)
      }
      discoverTypes(MM) {
        if (!this.add(MM)) return;
        Nr.inheritedTypes.get(MM)?.forEach((MM => {
          this.discoverTypes(MM)
        }));
        let rM = MM;
        for (;
          (rM = Object.getPrototypeOf(rM)) && rM !== pO && rM !== Function.prototype;) this.discoverTypes(rM);
        const iM = MM[Symbol.metadata];
        (iM[uM] || iM[kM]) && (this.hasFilters = !0);
        for (const OM in iM) {
          const MM = iM[OM].type;
          if ("string" !== typeof MM && !Zr(MM))
            if ("function" === typeof MM) this.discoverTypes(MM);
            else {
              const rM = Object.values(MM)[0];
              if ("string" === typeof rM) continue;
              this.discoverTypes(rM)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Ar(MM) {
      const rM = vr(MM);
      return rM ? {
        complexTypeKlass: Ur[rM],
        childType: MM[rM]
      } : {
        complexTypeKlass: !1,
        childType: MM
      }
    }

    function xr(MM, rM) {
      const iM = Fr(MM),
        OM = vr(iM),
        SM = OM && vr(iM[OM]);
      if (SM) throw new Error(`${rM?`${rM}: `:""}@colyseus/schema: nested collections are not supported ("${OM}" of "${SM}"). Collections can only hold primitive types or Schema classes, wrap the inner ${SM} in a Schema class.`);
      return iM
    }

    function vr(MM) {
      return "object" === typeof MM && null !== MM ? Object.keys(MM).find((MM => void 0 !== Ur[MM])) : void 0
    }

    function Fr(MM) {
      if ("object" !== typeof MM || null === MM) return MM;
      if (Array.isArray(MM)) return {
        array: Fr(MM[0])
      };
      const rM = function(MM) {
        const rM = Object.keys(MM),
          iM = rM.filter((MM => /\d+/.test(MM)));
        if (iM.length > 0 && iM.length === rM.length / 2 && MM[MM[iM[0]]] == iM[0]) return "number";
        if (rM.length > 0 && rM.every((rM => MM[rM] === rM))) return "string"
      }(MM);
      if (rM) return rM;
      if (Zr(MM)) return "string" === typeof MM.quantized.wire ? MM : {
        quantized: kr(MM.quantized)
      };
      if (void 0 !== MM.type) return Fr(MM.type);
      const iM = vr(MM);
      return iM && (MM[iM] = Fr(MM[iM])), MM
    }
    const Br = [gM, pM, WM, sM, DM, kM, wM];

    function Xr(MM, rM, iM) {
      MM[rM] || Object.defineProperty(MM, rM, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), MM[rM].push(iM)
    }
    const Ir = {
        addField(MM, rM, iM, OM, SM) {
          if (rM >= 63) throw new Error(`Can't define field '${iM}'.\nSchema instances may only have up to 63 fields.`);
          MM[rM] = Object.assign(MM[rM] || {}, {
            type: OM,
            index: rM,
            name: iM
          }), Object.defineProperty(MM, eM, {
            value: MM[eM] || {},
            enumerable: !1,
            configurable: !0
          }), MM[eM][iM] = SM || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(MM, tM, {
            value: rM,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(MM, iM, {
            value: rM,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof MM[rM].type || Zr(MM[rM].type) || (void 0 === MM[gM] && Object.defineProperty(MM, gM, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), MM[gM].push(rM));
          const jM = MM[rM].type;
          if (jM && "object" === typeof jM && void 0 !== jM.stream) {
            if (void 0 !== jM.array) throw new Error(br);
            MM[rM].stream = !0, MM[kM] || Object.defineProperty(MM, kM, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), MM[kM].includes(rM) || MM[kM].push(rM);
            const SM = OM?.priority;
            "function" === typeof SM && Ir.setStreamPriority(MM, iM, SM)
          }
        },
        setTag(MM, rM, iM) {
          const OM = MM[rM];
          if (MM[OM].tag = iM, MM[uM] || (Object.defineProperty(MM, uM, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(MM, RM, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), MM[uM].push(OM), iM < 0) MM[RM][iM] || (MM[RM][iM] = []), MM[RM][iM].push(OM);
          else
            for (let SM = iM; SM > 0; SM &= SM - 1) {
              const rM = SM & -SM;
              MM[RM][rM] || (MM[RM][rM] = []), MM[RM][rM].push(OM)
            }
        },
        setUnreliable(MM, rM) {
          const iM = MM[rM];
          if ("string" !== typeof MM[iM].type) throw new Error(`@unreliable cannot be applied to ref-type field "${rM}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          MM[iM].unreliable = !0, MM[pM] || Object.defineProperty(MM, pM, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), MM[pM].push(iM)
        },
        setPatchOnly(MM, rM) {
          const iM = MM[rM];
          if (MM[iM].fullStateOnly) throw new Error(`field "${rM}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          MM[iM].patchOnly = !0, Xr(MM, WM, iM), Xr(MM, sM, iM)
        },
        setDeprecated(MM, rM) {
          const iM = MM[rM];
          MM[iM].deprecated = !0, Xr(MM, sM, iM), Object.defineProperty(MM, iM, {
            value: MM[iM],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(MM, rM) {
          const iM = MM[rM];
          if (MM[iM].patchOnly) throw new Error(`field "${rM}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          MM[iM].fullStateOnly = !0, Xr(MM, DM, iM)
        },
        setStream(MM, rM) {
          const iM = MM[rM];
          MM[iM].stream = !0, MM[kM] || Object.defineProperty(MM, kM, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), MM[kM].push(iM)
        },
        setStreamPriority(MM, rM, iM) {
          const OM = MM[rM];
          MM[ZM] || Object.defineProperty(MM, ZM, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), MM[ZM][OM] = iM
        },
        getStreamPriority: (MM, rM) => MM?.[ZM]?.[rM],
        defineField(MM, rM, iM, OM, SM) {
          const jM = xr(SM, `${MM.name}.${OM}`),
            {
              complexTypeKlass: aM,
              childType: PM
            } = Ar(jM);
          Ir.addField(rM, iM, OM, jM, bO(OM, iM, PM, aM)), rM[eM][OM] && Object.defineProperty(MM.prototype, OM, rM[eM][OM]), ("string" === typeof jM || Zr(jM)) && (rM[wM] || Object.defineProperty(rM, wM, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), rM[wM][iM] = "string" === typeof jM ? rr[jM] : Yr(jM.quantized))
        },
        setFields(MM, rM) {
          const iM = MM.prototype.constructor;
          Nr.register(iM);
          const OM = Object.getPrototypeOf(iM),
            SM = OM && OM[Symbol.metadata],
            jM = Ir.initialize(iM);
          iM[nM] || (iM[nM] = pO[nM]), iM[QM] || (iM[QM] = pO[QM]), iM[zM] || (iM[zM] = pO[zM]), iM.prototype.toJSON || (iM.prototype.toJSON = pO.prototype.toJSON);
          let aM = jM[tM] ?? (SM && SM[tM]) ?? -1;
          aM++, jM[wM] || Object.defineProperty(jM, wM, {
            value: SM?.[wM] ? [...SM[wM]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const PM in rM) {
            if (void 0 !== jM[PM]) throw new Error(`@colyseus/schema: Duplicate '${PM}' definition on '${iM.name||"(anonymous)"}'.`);
            Ir.defineField(iM, jM, aM, PM, rM[PM]), aM++
          }
          return MM
        },
        isDeprecated: (MM, rM) => !0 === MM[rM].deprecated,
        initialize(MM) {
          const rM = Object.getPrototypeOf(MM),
            iM = rM[Symbol.metadata];
          let OM = MM[Symbol.metadata] ?? Object.create(null);
          if (rM !== pO && OM === iM && (OM = Object.create(null), iM)) {
            Object.setPrototypeOf(OM, iM), Object.defineProperty(OM, tM, {
              value: iM[tM],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== iM[uM] && (Object.defineProperty(OM, uM, {
              value: [...iM[uM]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(OM, RM, {
              value: {
                ...iM[RM]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const MM of Br) {
              const rM = iM[MM];
              void 0 !== rM && Object.defineProperty(OM, MM, {
                value: [...rM],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(OM, eM, {
              value: {
                ...iM[eM]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(MM, Symbol.metadata, {
            value: OM,
            writable: !1,
            configurable: !0
          }), OM
        },
        isValidInstance: MM => MM.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(MM.constructor[Symbol.metadata], tM),
        getFields(MM) {
          const rM = MM[Symbol.metadata],
            iM = {};
          for (let OM = 0; OM <= rM[tM]; OM++) iM[rM[OM].name] = rM[OM].type;
          return iM
        },
        hasViewTagAtIndex: (MM, rM) => MM?.[uM]?.includes(rM),
        hasUnreliableAtIndex: (MM, rM) => MM?.[pM]?.includes(rM),
        hasPatchOnlyAtIndex: (MM, rM) => MM?.[WM]?.includes(rM),
        hasFullStateOnlyAtIndex: (MM, rM) => MM?.[DM]?.includes(rM),
        hasStreamAtIndex: (MM, rM) => MM?.[kM]?.includes(rM)
      },
      Kr = (MM, rM, iM) => MM(rM, iM);
    class qr {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(MM) {
        this.ops = new Uint8Array(Math.max(MM + 1, 1))
      }
      record(MM, rM) {
        const iM = this.ops[MM];
        0 === iM ? this.ops[MM] = rM : (iM === SM.DELETE || iM === SM.ADD && rM === SM.DELETE_AND_ADD) && (this.ops[MM] = SM.DELETE_AND_ADD), MM < 32 ? this.dirtyLow |= 1 << MM : this.dirtyHigh |= 1 << MM - 32
      }
      recordDelete(MM, rM) {
        this.ops[MM] = rM, MM < 32 ? this.dirtyLow |= 1 << MM : this.dirtyHigh |= 1 << MM - 32
      }
      recordRaw(MM, rM) {
        this.record(MM, rM)
      }
      operationAt(MM) {
        const rM = this.ops[MM];
        return 0 === rM ? void 0 : rM
      }
      setOperationAt(MM, rM) {
        this.ops[MM] = rM
      }
      forEach(MM) {
        this.forEachWithCtx(MM, Kr)
      }
      forEachWithCtx(MM, rM) {
        let iM = this.dirtyLow,
          OM = this.dirtyHigh;
        const SM = this.ops;
        for (; 0 !== iM;) {
          const OM = iM & -iM,
            jM = 31 - Math.clz32(OM);
          iM ^= OM, rM(MM, jM, SM[jM])
        }
        for (; 0 !== OM;) {
          const iM = OM & -OM,
            jM = 31 - Math.clz32(iM) + 32;
          OM ^= iM, rM(MM, jM, SM[jM])
        }
      }
      size() {
        return Vr(this.dirtyLow) + Vr(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Tr {
      fh = new Map;
      pureOps = [];
      record(MM, rM) {
        const iM = this.fh.get(MM);
        void 0 === iM ? this.fh.set(MM, rM) : (iM === SM.DELETE || iM === SM.ADD && rM === SM.DELETE_AND_ADD) && this.fh.set(MM, SM.DELETE_AND_ADD)
      }
      recordDelete(MM, rM) {
        this.fh.set(MM, rM)
      }
      recordRaw(MM, rM) {
        this.fh.set(MM, rM)
      }
      recordPure(MM) {
        this.pureOps.push([this.fh.size, MM])
      }
      operationAt(MM) {
        return this.fh.get(MM)
      }
      setOperationAt(MM, rM) {
        this.fh.has(MM) && this.fh.set(MM, rM)
      }
      forEach(MM) {
        this.forEachWithCtx(MM, Kr)
      }
      forEachWithCtx(MM, rM) {
        const iM = this.pureOps;
        if (iM.length > 0) {
          let OM = 0,
            SM = 0;
          for (const [jM, aM] of this.fh) {
            for (; OM < iM.length && iM[OM][0] <= SM;) {
              const SM = iM[OM++][1];
              rM(MM, -SM, SM)
            }
            rM(MM, jM, aM), SM++
          }
          for (; OM < iM.length;) {
            const SM = iM[OM++][1];
            rM(MM, -SM, SM)
          }
        } else
          for (const [OM, SM] of this.fh) rM(MM, OM, SM)
      }
      size() {
        return this.fh.size + this.pureOps.length
      }
      has() {
        return this.fh.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.fh.clear(), this.pureOps.length = 0
      }
      shift(MM) {
        const rM = new Map;
        for (const [iM, OM] of this.fh) rM.set(iM + MM, OM);
        this.fh = rM
      }
    }

    function Vr(MM) {
      return 16843009 * ((MM = (858993459 & (MM -= MM >>> 1 & 1431655765)) + (MM >>> 2 & 858993459)) + (MM >>> 4) & 252645135) >>> 24
    }

    function cr(MM) {
      if (void 0 === MM) return 0;
      let rM = 0;
      for (let iM = 0, OM = MM.length; iM < OM; iM++) {
        const OM = MM[iM];
        OM < 32 && (rM |= 1 << OM)
      }
      return rM
    }

    function Mi(MM) {
      const rM = MM.constructor;
      if (Object.prototype.hasOwnProperty.call(rM, bM)) return rM[bM];
      const iM = rM[Symbol.metadata],
        OM = Ir.isValidInstance(MM),
        SM = (iM?.[uM]?.length ?? 0) > 0,
        jM = function(MM) {
          const rM = [],
            iM = [],
            OM = [],
            SM = [],
            jM = MM?.[tM];
          if (void 0 === jM) return {
            names: rM,
            types: iM,
            tags: OM,
            encoders: SM
          };
          const aM = MM[wM];
          for (let PM = 0; PM <= jM; PM++) {
            const jM = MM[PM];
            void 0 !== jM ? (rM[PM] = jM.name, iM[PM] = jM.type, OM[PM] = jM.tag, SM[PM] = aM?.[PM]) : (rM[PM] = void 0, iM[PM] = void 0, OM[PM] = void 0, SM[PM] = void 0)
          }
          return {
            names: rM,
            types: iM,
            tags: OM,
            encoders: SM
          }
        }(iM),
        aM = OM && !SM ? void 0 : rM[LM],
        PM = {
          encoder: rM[QM],
          filter: aM,
          metadata: iM,
          isSchema: OM,
          filterBitmask: OM ? cr(iM?.[uM]) : 0,
          hasAnyFullStateOnly: (iM?.[DM]?.length ?? 0) > 0,
          hasAnyUnreliable: (iM?.[pM]?.length ?? 0) > 0,
          hasAnyStream: (iM?.[kM]?.length ?? 0) > 0,
          hasAnyView: SM,
          fullStateOnlyBitmask: cr(iM?.[DM]),
          unreliableBitmask: cr(iM?.[pM]),
          streamBitmask: cr(iM?.[kM]),
          names: jM.names,
          types: jM.types,
          tags: jM.tags,
          encoders: jM.encoders
        };
      return Object.defineProperty(rM, bM, {
        value: PM,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), PM
    }

    function ri(MM, rM) {
      if (void 0 !== MM.parentRef && rM(MM.parentRef, MM._parentIndex)) return !0;
      for (let iM = MM.extraParents; void 0 !== iM; iM = iM.next)
        if (rM(iM.ref, iM.index)) return !0;
      return !1
    }
    const ii = (MM, rM) => {
        MM.isFieldUnreliable(rM) ? MM.ensureUnreliableRecorder().record(rM, SM.ADD) : MM.record(rM, SM.ADD)
      },
      Oi = (MM, rM) => MM(rM);

    function Si(MM, rM, iM) {
      const OM = MM.refTarget;
      if (void 0 !== OM[dM]) {
        if (MM.isPatchOnly) return;
        if (Array.isArray(OM.items)) {
          const MM = OM.items;
          for (let OM = 0, SM = MM.length; OM < SM; OM++) void 0 !== MM[OM] && iM(rM, OM)
        } else if (void 0 !== OM.journal)
          for (const [MM, SM] of OM.journal.keyByIndex) OM.$items.has(SM) && iM(rM, MM);
        else if (void 0 !== OM.$items)
          for (const MM of OM.$items.keys()) iM(rM, MM)
      } else {
        const SM = MM.metadata;
        if (!SM) return;
        const jM = SM[tM] ?? -1,
          aM = SM[sM],
          PM = MM.encDescriptor.names;
        for (let MM = 0; MM <= jM; MM++) {
          const SM = PM[MM];
          if (void 0 === SM) continue;
          if (aM && aM.includes(MM)) continue;
          const jM = OM[SM];
          void 0 !== jM && null !== jM && iM(rM, MM)
        }
      }
    }

    function ji(MM, rM, iM, OM) {
      ! function(MM, rM, iM) {
        if (!rM) return;
        const OM = rM[JM],
          SM = !OM._isSchema;
        let jM;
        SM ? (rM = OM.parent, iM = OM.parentIndex, jM = rM?.[JM].metadata) : jM = OM.metadata;
        const aM = (jM?.[WM]?.includes(iM) ? wi : 0) | (jM?.[DM]?.includes(iM) ? ti : 0),
          PM = OM.flags & Ri | aM,
          nM = MM.flags;
        MM.flags = nM | PM;
        PM & ~nM & ti && (MM.reset(), MM.unreliableRecorder?.reset());
        const QM = MM.root?.types;
        if (!QM?.hasFilters) return;
        const zM = jM?.[uM]?.includes(iM) ?? !1,
          LM = jM?.[kM]?.includes(iM) ?? !1,
          mM = OM.isFiltered || zM || LM;
        if (MM.isFiltered = mM, LM && !SM) {
          MM.isStreamCollection = !0;
          const rM = tr(MM.ref);
          if (void 0 === rM.priority) {
            const MM = Ir.getStreamPriority(jM, iM);
            void 0 !== MM && (rM.priority = MM)
          }
          MM.root?.registerStream(MM.ref)
        }
        if (mM) {
          const rM = Pi(MM);
          MM.isVisibilitySharedWithParent = OM.isFiltered && rM && !LM && (!zM || SM && jM[iM].tag !== dO)
        }
      }(MM, rM, iM), MM.isFullStateOnly || (MM.has() && MM.root?.enqueueChangeTree(MM), MM.unreliableRecorder?.has() && MM.root?.enqueueUnreliable(MM), MM.has() || MM.unreliableRecorder?.has() || MM.root?.enqueueChangeTree(MM))
    }

    function ai(MM) {
      const rM = MM.pendingFilterRefresh;
      for (let iM = 0; iM < rM.length; iM++) {
        const MM = rM[iM];
        0 !== (MM.flags & ui) && ni(MM)
      }
      rM.length = 0
    }

    function Pi(MM) {
      return MM._isSchema || "string" !== typeof MM.refTarget[dM]
    }

    function ni(MM) {
      MM.flags &= ~ui;
      const rM = MM.root;
      if (void 0 === rM || void 0 === MM.parentRef) return;
      const iM = Pi(MM);
      let OM = Hi(MM, MM.parentRef, MM._parentIndex, iM);
      for (let jM = MM.extraParents; void 0 !== jM && OM !== mi; jM = jM.next) OM |= Hi(MM, jM.ref, jM.index, iM);
      if (0 === OM) return;
      MM.isVisibilitySharedWithParent = 0 !== (OM & Li);
      const SM = 0 === (OM & zi);
      SM !== MM.isFiltered && (MM.isFiltered = SM, SM || MM.isFullStateOnly || (MM.forEachLiveWithCtx(MM, ii), MM.has() && rM.enqueueChangeTree(MM), MM.unreliableRecorder?.has() && rM.enqueueUnreliable(MM)), MM.forEachChildWithCtx(MM, Ji))
    }
    const Qi = 1,
      zi = 2,
      Li = 4,
      mi = Qi | zi | Li;

    function Hi(MM, rM, iM, OM) {
      const SM = rM[JM];
      if (SM.root !== MM.root || ! function(MM, rM, iM) {
          const OM = rM.refTarget;
          if (rM.isArray) {
            const rM = OM.items,
              SM = rM[iM];
            if (void 0 !== SM && SM[JM] === MM) return !0;
            for (let iM = 0, OM = rM.length; iM < OM; iM++) {
              const OM = rM[iM];
              if (void 0 !== OM && OM[JM] === MM) return !0
            }
            return !1
          }
          const SM = rM.getValue(iM);
          return void 0 !== SM && SM[JM] === MM
        }(MM, SM, iM)) return 0;
      SM.flags & ui && ni(SM);
      let jM = Qi;
      if (SM._isSchema) {
        void 0 !== SM.encDescriptor.tags[iM] || SM.isFieldStream(iM) || (SM.isFiltered ? OM && (jM |= Li) : jM |= zi)
      } else if (SM.isFiltered) {
        if (OM && !SM.isStreamCollection) {
          const MM = SM.parent?.[JM];
          (MM?._isSchema ? MM.encDescriptor.tags[SM.parentIndex] : void 0) !== dO && (jM |= Li)
        }
      } else jM |= zi;
      return jM
    }
    const Ji = (MM, rM, iM) => {
      ni(rM)
    };

    function di(MM, rM, iM, OM) {
      if (MM.addParent(rM, OM), !iM) return;
      const SM = iM.add(MM);
      iM !== MM.root && (MM.root = iM, ji(MM, rM, OM));
      const jM = rM?.[JM];
      if (void 0 !== jM && void 0 !== jM.subscribedViews && void 0 !== rM[dM] && function(MM, rM, iM, OM) {
          const SM = MM.subscribedViews;
          if (void 0 === SM) return;
          const jM = MM.isStreamCollection,
            aM = jM ? MM.ref : void 0,
            PM = jM ? void 0 : iM[JM];
          for (let nM = 0, QM = SM.length; nM < QM; nM++) {
            let MM = SM[nM];
            for (; 0 !== MM;) {
              const iM = MM & -MM;
              MM ^= iM;
              const QM = 32 * nM + (31 - Math.clz32(iM)),
                zM = OM.activeViews.get(QM),
                LM = zM?.deref();
              void 0 !== LM ? jM ? Wr(aM, QM, rM) : void 0 !== PM && LM.markVisible(PM) : SM[nM] &= ~iM
            }
          }
        }(jM, OM, MM.ref, iM), SM) {
        let rM = Ui[Gi];
        void 0 === rM && (rM = {
          parentRef: void 0,
          root: void 0
        }, Ui[Gi] = rM), rM.parentRef = MM.ref, rM.root = iM, Gi++, li(MM, rM, Ci), Gi--
      }
    }

    function yi(MM, rM, iM) {
      MM(rM, iM)
    }

    function li(MM, rM, iM) {
      const OM = MM.refTarget;
      if (OM[dM]) {
        if ("string" !== typeof OM[dM]) {
          const MM = OM.items;
          if (void 0 !== MM)
            for (let OM = 0, SM = MM.length; OM < SM; OM++) {
              const SM = MM[OM];
              SM && iM(rM, SM[JM], OM)
            } else {
              const MM = OM.$items,
                SM = OM._collectionIndexes;
              for (const OM of MM.keys()) {
                const jM = MM.get(OM);
                jM && iM(rM, jM[JM], SM?.[OM] ?? OM)
              }
            }
        }
      } else {
        const SM = MM.metadata,
          jM = SM?.[gM];
        if (!jM) return;
        const aM = MM.encDescriptor.names;
        for (let MM = 0, PM = jM.length; MM < PM; MM++) {
          const SM = jM[MM],
            PM = OM[aM[SM]];
          PM && iM(rM, PM[JM], SM)
        }
      }
    }

    function Ei(MM, rM, iM) {
      rM.root !== MM ? rM.setRoot(MM) : MM.add(rM)
    }
    const Ui = [];
    let Gi = 0;

    function Ci(MM, rM, iM) {
      if (rM.root === MM.root) return MM.root.add(rM), void MM.root.moveNextToParent(rM);
      rM.setParent(MM.parentRef, MM.root, iM)
    }

    function ei(MM, rM, iM) {
      const OM = (3 & iM) << 3;
      return iM < 4 ? MM >>> OM & 255 : rM >>> OM & 255
    }
    const bi = (MM, rM, iM) => MM(rM, iM);
    const wi = 16,
      ti = 32,
      gi = 128,
      ui = 256,
      Ri = wi | ti;
    class Wi {
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
      set isFiltered(MM) {
        this.flags = MM ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(MM) {
        this.flags = MM ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(MM) {
        this.flags = MM ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(MM) {
        this.flags = MM ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & wi)
      }
      set isPatchOnly(MM) {
        this.flags = MM ? this.flags | wi : this.flags & ~wi
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & ti)
      }
      set isFullStateOnly(MM) {
        this.flags = MM ? this.flags | ti : this.flags & ~ti
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(MM) {
        this.flags = MM ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & gi)
      }
      set needsRestage(MM) {
        this.flags = MM ? this.flags | gi : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new qr(this.metadata?.[tM] ?? 0) : new Tr), this.unreliableRecorder
      }
      isFieldUnreliable(MM) {
        const rM = this.encDescriptor;
        return !!rM.hasAnyUnreliable && (MM < 32 ? 0 !== (rM.unreliableBitmask & 1 << MM) : Ir.hasUnreliableAtIndex(this.metadata, MM))
      }
      isFieldFullStateOnly(MM) {
        if (this.isFullStateOnly) return !0;
        const rM = this.encDescriptor;
        return !!rM.hasAnyFullStateOnly && (MM < 32 ? 0 !== (rM.fullStateOnlyBitmask & 1 << MM) : Ir.hasFullStateOnlyAtIndex(this.metadata, MM))
      }
      isFieldStream(MM) {
        const rM = this.encDescriptor;
        return !!rM.hasAnyStream && (MM < 32 ? 0 !== (rM.streamBitmask & 1 << MM) : Ir.hasStreamAtIndex(this.metadata, MM))
      }
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM;
        this.ref = MM, this.refTarget = rM;
        const iM = Mi(MM);
        this.encDescriptor = iM, this.metadata = iM.metadata;
        const OM = iM.isSchema;
        if (this._isSchema = OM, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, OM) {
          const MM = this.metadata?.[tM] ?? 0;
          MM > 7 && (this.ops = new Uint8Array(MM + 1))
        } else this.collDirty = new Map
      }
      _opAt(MM) {
        const rM = this.ops;
        if (void 0 !== rM) return rM[MM];
        const iM = (3 & MM) << 3;
        return MM < 4 ? this.opsLow >>> iM & 255 : this.opsHigh >>> iM & 255
      }
      _opPut(MM, rM) {
        const iM = this.ops;
        if (void 0 !== iM) return void(iM[MM] = rM);
        const OM = (3 & MM) << 3,
          SM = ~(255 << OM);
        MM < 4 ? this.opsLow = this.opsLow & SM | rM << OM : this.opsHigh = this.opsHigh & SM | rM << OM
      }
      _markDirty(MM) {
        MM < 32 ? this.dirtyLow |= 1 << MM : this.dirtyHigh |= 1 << MM - 32
      }
      record(MM, rM) {
        if (this._isSchema) {
          const iM = this._opAt(MM);
          0 === iM ? this._opPut(MM, rM) : (iM === SM.DELETE || iM === SM.ADD && rM === SM.DELETE_AND_ADD) && this._opPut(MM, SM.DELETE_AND_ADD), this._markDirty(MM)
        } else {
          const iM = this.collDirty,
            OM = iM.get(MM);
          let jM;
          jM = void 0 === OM ? rM : OM === SM.DELETE || OM === SM.ADD && rM === SM.DELETE_AND_ADD ? SM.DELETE_AND_ADD : OM, iM.set(MM, jM)
        }
      }
      recordDelete(MM, rM) {
        this._isSchema ? (this._opPut(MM, rM), this._markDirty(MM)) : this.collDirty.set(MM, rM)
      }
      recordRaw(MM, rM) {
        this._isSchema ? (this._opPut(MM, rM), this._markDirty(MM)) : this.collDirty.set(MM, rM)
      }
      recordPure(MM) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, MM])
      }
      operationAt(MM) {
        if (this._isSchema) {
          const rM = this._opAt(MM);
          return 0 === rM ? void 0 : rM
        }
        return this.collDirty.get(MM)
      }
      setOperationAt(MM, rM) {
        if (this._isSchema) this._opPut(MM, rM);
        else {
          const iM = this.collDirty;
          iM.has(MM) && iM.set(MM, rM)
        }
      }
      forEach(MM) {
        this.forEachWithCtx(MM, bi)
      }
      forEachWithCtx(MM, rM) {
        if (this._isSchema) {
          let iM = this.dirtyLow,
            OM = this.dirtyHigh;
          const SM = this.ops;
          if (void 0 !== SM) {
            for (; 0 !== iM;) {
              const OM = iM & -iM,
                jM = 31 - Math.clz32(OM);
              iM ^= OM, rM(MM, jM, SM[jM])
            }
            for (; 0 !== OM;) {
              const iM = OM & -OM,
                jM = 31 - Math.clz32(iM) + 32;
              OM ^= iM, rM(MM, jM, SM[jM])
            }
          } else {
            const OM = this.opsLow,
              SM = this.opsHigh;
            for (; 0 !== iM;) {
              const jM = iM & -iM,
                aM = 31 - Math.clz32(jM);
              iM ^= jM, rM(MM, aM, ei(OM, SM, aM))
            }
          }
          return
        }
        const iM = this.collDirty,
          OM = this.collPureOps;
        if (void 0 !== OM && OM.length > 0) {
          let SM = 0,
            jM = 0;
          for (const [aM, PM] of iM) {
            for (; SM < OM.length && OM[SM][0] <= jM;) {
              const iM = OM[SM++][1];
              rM(MM, -iM, iM)
            }
            rM(MM, aM, PM), jM++
          }
          for (; SM < OM.length;) {
            const iM = OM[SM++][1];
            rM(MM, -iM, iM)
          }
        } else
          for (const [SM, jM] of iM) rM(MM, SM, jM)
      }
      size() {
        return this._isSchema ? Vr(this.dirtyLow) + Vr(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(MM, rM) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const iM = this.collDirty,
          OM = new Map,
          jM = !this.paused && !this.isFullStateOnly;
        if (MM > 0)
          for (const [SM, aM] of iM) SM < MM && OM.set(SM, aM);
        if (jM)
          for (let aM = 0; aM < rM; aM++) OM.set(MM + aM, SM.ADD);
        for (const [SM, aM] of iM) SM >= MM && OM.set(SM + rM, aM);
        this.collDirty = OM, jM && this.root?.enqueueChangeTree(this)
      }
      removeAt(MM, rM) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const iM = this.collDirty,
          OM = MM + rM;
        let SM = !1;
        for (const aM of iM.keys())
          if (aM >= OM) {
            SM = !0;
            break
          } if (!SM) {
          for (let rM = MM; rM < OM; rM++) iM.delete(rM);
          return
        }
        const jM = new Map;
        for (const [aM, PM] of iM) aM < MM ? jM.set(aM, PM) : aM >= OM && jM.set(aM - rM, PM);
        this.collDirty = jM
      }
      unshift(MM) {
        this.insertAt(0, MM)
      }
      setRoot(MM) {
        ! function(MM, rM) {
          MM.root = rM;
          const iM = rM.add(MM);
          ji(MM, MM.parent, MM.parentIndex), iM && li(MM, rM, Ei)
        }(this, MM)
      }
      setParent(MM, rM, iM) {
        di(this, MM, rM, iM)
      }
      forEachChild(MM) {
        li(this, MM, yi)
      }
      forEachChildWithCtx(MM, rM) {
        li(this, MM, rM)
      }
      forEachLive(MM) {
        Si(this, MM, Oi)
      }
      forEachLiveWithCtx(MM, rM) {
        Si(this, MM, rM)
      }
      operation(MM) {
        this.paused || this.isFullStateOnly || (this.recordPure(MM), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(MM, rM, iM) {
        if (!this.paused && !this.isFieldFullStateOnly(MM)) {
          if (this.isFieldUnreliable(MM) && !this.isNew) {
            const OM = this.ensureUnreliableRecorder();
            return iM ? OM.recordRaw(MM, rM) : OM.record(MM, rM), void this.root?.enqueueUnreliable(this)
          }
          iM ? this.recordRaw(MM, rM) : this.record(MM, rM), this.root?.enqueueChangeTree(this)
        }
      }
      change(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM.ADD;
        this._routeAndRecord(MM, rM, !1)
      }
      indexedOperation(MM, rM) {
        this._routeAndRecord(MM, rM, !0)
      }
      getChange(MM) {
        return this.operationAt(MM)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(MM) {
        const rM = this.paused;
        this.paused = !0;
        try {
          return MM()
        } finally {
          this.paused = rM
        }
      }
      markDirty(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM.ADD;
        const iM = this.paused;
        this.paused = !1;
        try {
          this.change(MM, rM)
        } finally {
          this.paused = iM
        }
      }
      getValue(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[mM](MM, rM)
      }
      delete(MM, rM) {
        if (void 0 === MM) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${MM}'`)
          } catch (PS) {
            console.warn(PS)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(MM)) return this.getValue(MM);
        const iM = this.isFieldUnreliable(MM) && !this.isNew;
        iM ? this.ensureUnreliableRecorder().recordDelete(MM, rM ?? SM.DELETE) : this.recordDelete(MM, rM ?? SM.DELETE);
        const OM = this.getValue(MM);
        return OM && OM[JM] && this.root?.remove(OM[JM]), iM ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), OM
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[lM]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[lM]?.()
      }
      discard() {
        this._isSchema || this.refTarget[lM]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const MM = MM => {
          if (MM < 0) return;
          const rM = this.getValue(MM);
          rM && rM[JM] && rM[JM].discardAll()
        };
        this.forEach(MM), this.unreliableRecorder?.forEach(MM), this.discard()
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
      addParent(MM, rM) {
        ! function(MM, rM, iM) {
          if (MM.parentRef) {
            if (MM.parentRef[JM] === rM[JM]) return void(MM._parentIndex = iM);
            if (ri(MM, ((MM, iM) => MM[JM] === rM[JM]))) return void(MM._parentIndex = iM)
          }
          void 0 === MM.parentRef ? (MM.parentRef = rM, MM._parentIndex = iM) : (MM.extraParents = {
            ref: MM.parentRef,
            index: MM._parentIndex,
            next: MM.extraParents
          }, MM.parentRef = rM, MM._parentIndex = iM)
        }(this, MM, rM)
      }
      setParentIndex(MM, rM) {
        ! function(MM, rM, iM) {
          if (void 0 !== MM.extraParents)
            if (MM.parentRef[JM] !== rM[JM]) {
              for (let OM = MM.extraParents; void 0 !== OM; OM = OM.next)
                if (OM.ref[JM] === rM[JM]) return void(OM.index = iM)
            } else MM._parentIndex = iM;
          else MM._parentIndex = iM
        }(this, MM, rM)
      }
      removeParent() {
        return function(MM, rM) {
          if (MM.parentRef && MM.parentRef[JM] === rM[JM]) return MM.extraParents ? (MM.parentRef = MM.extraParents.ref, MM._parentIndex = MM.extraParents.index, MM.extraParents = MM.extraParents.next) : (MM.parentRef = void 0, MM._parentIndex = void 0), !0;
          let iM = MM.extraParents,
            OM = null;
          for (; iM;) {
            if (iM.ref[JM] === rM[JM]) return OM ? OM.next = iM.next : MM.extraParents = iM.next, !0;
            OM = iM, iM = iM.next
          }
          return void 0 === MM.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(MM) {
        return function(MM, rM) {
          if (void 0 !== MM.parentRef && rM(MM.parentRef, MM._parentIndex)) return {
            ref: MM.parentRef,
            index: MM._parentIndex
          };
          for (let iM = MM.extraParents; void 0 !== iM; iM = iM.next)
            if (rM(iM.ref, iM.index)) return {
              ref: iM.ref,
              index: iM.index
            }
        }(this, MM)
      }
      hasParent(MM) {
        return ri(this, MM)
      }
      indexInParent(MM) {
        return function(MM, rM) {
          if (MM.parentRef && MM.parentRef[JM] === rM[JM]) return MM._parentIndex;
          for (let iM = MM.extraParents; void 0 !== iM; iM = iM.next)
            if (iM.ref[JM] === rM[JM]) return iM.index
        }(this, MM)
      }
      getAllParents() {
        return function(MM) {
          const rM = [];
          MM.parentRef && rM.push({
            ref: MM.parentRef,
            index: MM._parentIndex
          });
          let iM = MM.extraParents;
          for (; iM;) rM.push({
            ref: iM.ref,
            index: iM.index
          }), iM = iM.next;
          return rM
        }(this)
      }
    }
    class si {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(MM) {
        this.ref = MM
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
      untracked(MM) {
        return MM()
      }
      markDirty() {}
      forEachChild(MM) {
        const rM = this.ref;
        if (rM[dM]) {
          if ("string" !== typeof rM[dM])
            for (const [iM, OM] of rM.entries()) OM && MM(OM[JM], rM._collectionIndexes?.[iM] ?? iM);
          return
        }
        const iM = rM.constructor,
          OM = iM?.[Symbol.metadata];
        if (!OM) return;
        const SM = OM[gM] ?? [];
        for (let jM = 0; jM < SM.length; jM++) {
          const iM = SM[jM],
            aM = rM[OM[iM].name];
          aM && MM(aM[JM], iM)
        }
      }
      forEachChildWithCtx(MM, rM) {
        this.forEachChild(((iM, OM) => rM(MM, iM, OM)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Di(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM;
      var iM;
      Object.defineProperty(MM, JM, {
        value: (iM = rM, new si(iM)),
        enumerable: !1,
        writable: !0
      })
    }

    function ki(MM, rM, iM, OM, jM, aM, nM) {
      void 0 !== nM ? nM(rM, OM, aM) : "string" === typeof iM ? rr[iM]?.(rM, OM, aM) : null != iM[Symbol.metadata] ? (rr.number(rM, OM[PM], aM), (jM & SM.ADD) === SM.ADD && MM.tryEncodeTypeId(rM, iM, OM.constructor, aM)) : rr.number(rM, OM[PM], aM)
    }
    const Zi = function(MM, rM, iM, OM, jM, aM, PM, nM) {
        if (rM[aM.offset++] = 255 & (OM | jM), jM === SM.DELETE) return;
        const QM = iM.encDescriptor,
          zM = iM.ref,
          LM = zM[GM][OM] ?? zM[QM.names[OM]];
        ki(MM, rM, QM.types[OM], LM, jM, aM, QM.encoders[OM])
      },
      oi = function(MM, rM, iM, OM, jM, aM) {
        if (rM[aM.offset++] = 255 & jM, rr.number(rM, OM, aM), jM === SM.DELETE) return;
        const PM = iM.ref;
        if ((jM & SM.ADD) === SM.ADD) {
          const MM = PM.$indexes.get(OM);
          rr.string(rM, MM, aM)
        }
        ki(MM, rM, PM[dM], PM[mM](OM), jM, aM)
      },
      fi = function(MM, rM, iM, OM, jM, aM) {
        if (rM[aM.offset++] = 255 & jM, rr.number(rM, OM, aM), jM === SM.DELETE) return;
        const PM = iM.ref;
        ki(MM, rM, PM[dM], PM[mM](OM), jM, aM)
      },
      Yi = function(MM, rM, iM, OM, jM, aM) {
        const PM = iM.ref;
        (jM & SM.ADD) === SM.ADD && "function" === typeof PM.set ? oi(MM, rM, iM, OM, jM, aM) : fi(MM, rM, iM, OM, jM, aM)
      },
      Ni = function(MM, rM, iM, OM, jM, aM, nM, QM) {
        const zM = iM.refTarget,
          LM = zM[dM],
          HM = "string" !== typeof LM;
        let hM;
        if (QM && iM.isFiltered && HM) {
          const MM = zM.tmpItems[OM];
          if (!MM) return;
          if (hM = MM[PM], jM === SM.DELETE) jM = SM.DELETE_BY_REFID;
          else if ((jM & SM.ADD) === SM.ADD) jM = SM.ADD_BY_REFID;
          else if ((jM & SM.MOVE) === SM.MOVE) return
        } else if (jM === SM.DELETE && HM) {
          const MM = zM.tmpItems[OM];
          if (!MM) return;
          hM = MM[PM], jM = SM.DELETE_BY_REFID
        } else hM = OM;
        if (rM[aM.offset++] = 255 & jM, rr.number(rM, hM, aM), jM === SM.DELETE || jM === SM.DELETE_BY_REFID) return;
        ki(MM, rM, LM, zM[mM](OM, nM), jM, aM)
      };

    function Ai(MM, rM, iM, OM, jM, aM, nM) {
      const QM = MM.resyncVisited;
      let zM = QM.get(MM.currentRefId);
      if (void 0 === zM && QM.set(MM.currentRefId, zM = new Set), zM.add(OM), void 0 !== jM && iM === SM.ADD && jM !== aM) {
        const iM = jM[PM];
        void 0 !== iM && (MM.root.removeRef(iM), nM?.push({
          ref: rM,
          refId: MM.currentRefId,
          op: SM.DELETE,
          dynamicIndex: OM,
          value: void 0,
          previousValue: jM
        }))
      }
    }

    function xi(MM, rM, iM, OM) {
      const SM = rM[PM];
      if (void 0 === SM || iM.has(SM)) return;
      iM.add(SM);
      const jM = rM.constructor[Symbol.metadata],
        aM = jM?.[gM];
      if (void 0 === aM) return;
      const nM = jM[WM];
      for (let PM = 0; PM < aM.length; PM++) {
        const SM = aM[PM];
        if (void 0 !== nM && nM.includes(SM)) continue;
        const QM = jM[SM],
          zM = rM[QM.name];
        zM && (pO.is(QM.type) ? xi(MM, zM, iM, OM) : vi(MM, zM, iM, OM))
      }
    }

    function vi(MM, rM, iM, OM) {
      const jM = rM[yM] ?? rM,
        aM = jM[PM];
      if (void 0 === aM || iM.has(aM)) return;
      iM.add(aM);
      const nM = MM.resyncVisited.get(aM);
      if (void 0 === nM) return;
      const QM = MM.root;
      jM[hM](nM, ((MM, iM) => {
        OM?.push({
          ref: rM,
          refId: aM,
          op: SM.DELETE,
          dynamicIndex: iM,
          value: void 0,
          previousValue: MM
        });
        const jM = MM?.[PM];
        void 0 !== jM && QM.removeRef(jM)
      }), (rM => {
        pO.isSchema(rM) && xi(MM, rM, iM, OM)
      }))
    }
    const Fi = 1,
      Bi = 2,
      Xi = 3,
      Ii = 4,
      Ki = 5;

    function qi(MM, rM, iM, OM, jM, aM, nM, QM, zM) {
      const LM = MM.root;
      let mM;
      if ((rM & SM.DELETE) === SM.DELETE) {
        const MM = jM?.[PM];
        void 0 !== MM && LM.removeRef(MM), rM !== SM.DELETE_AND_ADD && iM[HM](OM), mM = void 0
      }
      if (rM === SM.DELETE);
      else if ("string" === typeof aM) mM = Er[aM](nM, QM);
      else if (Zr(aM)) mM = function(MM, rM, iM) {
        return fr(MM, (0, Er[MM.wire])(rM, iM))
      }(aM.quantized, nM, QM);
      else if (pO.is(aM)) {
        const iM = Er.number(nM, QM);
        if (mM = LM.refs.get(iM), (rM & SM.ADD) === SM.ADD) {
          const OM = MM.getInstanceType(nM, QM, aM);
          mM || (mM = MM.createInstanceOfType(OM)), LM.addRef(iM, mM, mM !== jM || rM === SM.DELETE_AND_ADD && mM === jM)
        }
      } else {
        const iM = (hM = Object.keys(aM)[0], Ur[hM]),
          OM = Er.number(nM, QM);
        null !== MM.resyncVisited && function(MM, rM) {
          const iM = MM.resyncVisited;
          iM.has(rM) || iM.set(rM, new Set)
        }(MM, OM);
        const HM = LM.refs.has(OM) ? jM || LM.refs.get(OM) : iM.constructor.initializeForDecoder();
        if (mM = HM.clone(!0), mM[dM] = Object.values(aM)[0], jM) {
          let MM = jM[PM];
          if (void 0 !== MM && OM !== MM) {
            (rM & SM.DELETE) !== SM.DELETE && LM.removeRef(MM);
            const iM = jM.entries();
            let OM;
            for (;
              (OM = iM.next()) && !OM.done;) {
              const [rM, iM] = OM.value;
              "object" === typeof iM && (MM = iM[PM]), zM?.push({
                ref: jM,
                refId: MM,
                op: SM.DELETE,
                field: rM,
                value: void 0,
                previousValue: iM
              })
            }
          }
        }
        LM.addRef(OM, mM, HM !== jM || rM === SM.DELETE_AND_ADD && HM === jM)
      }
      var hM;
      return mM
    }
    const Ti = function(MM, rM, iM, OM, SM) {
        const jM = rM[iM.offset++],
          aM = OM.constructor[Symbol.metadata],
          PM = jM >> 6 << 6,
          nM = jM % (PM || 255),
          QM = aM[nM];
        if (void 0 === QM) return console.warn("@colyseus/schema: field not defined at", {
          index: nM,
          ref: OM.constructor.name,
          metadata: aM
        }), -1;
        const zM = !0 === QM.deprecated,
          LM = zM ? void 0 : OM[mM](nM),
          HM = qi(MM, PM, OM, nM, LM, QM.type, rM, iM, SM);
        zM || (null !== HM && void 0 !== HM && (OM[QM.name] = HM), LM !== HM && SM?.push({
          ref: OM,
          refId: MM.currentRefId,
          op: PM,
          field: QM.name,
          value: HM,
          previousValue: LM
        }))
      },
      Vi = function(MM, rM, iM, OM, jM) {
        const aM = OM[yM] ?? OM,
          PM = rM[iM.offset++];
        if (PM === SM.CLEAR) return MM.removeChildRefs(aM, jM), void aM.clear();
        const nM = Er.number(rM, iM),
          QM = aM[dM],
          zM = aM.constructor.COLLECTION_KIND;
        let LM;
        (PM & SM.ADD) === SM.ADD ? zM === Fi ? (LM = Er.string(rM, iM), aM.setIndex(nM, LM)) : LM = nM : LM = aM.getIndex(nM);
        const HM = aM[mM](nM),
          hM = qi(MM, PM, OM, nM, HM, QM, rM, iM, jM);
        if (null !== MM.resyncVisited && Ai(MM, OM, PM, LM, HM, hM, jM), null !== hM && void 0 !== hM) switch (zM) {
          case Fi:
            aM.$items.set(LM, hM);
            break;
          case Bi:
            aM.$setAt(nM, hM, null !== MM.resyncVisited && PM === SM.ADD ? SM.REPLACE : PM);
            break;
          case Xi:
          case Ii:
          case Ki:
            aM.$items.has(nM) || (aM.$items.set(nM, hM), "number" === typeof aM.$refId && nM >= aM.$refId && (aM.$refId = nM + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${aM.constructor?.name} \u2014 item at index ${nM} was not stored.`)
        }
        HM !== hM && jM?.push({
          ref: OM,
          refId: MM.currentRefId,
          op: PM,
          dynamicIndex: LM,
          value: hM,
          previousValue: HM
        })
      },
      ci = function(MM, rM, iM, OM, jM) {
        const aM = OM[yM] ?? OM;
        let PM, nM = rM[iM.offset++];
        if (nM === SM.CLEAR) return MM.removeChildRefs(aM, jM), void aM.clear();
        if (nM === SM.REVERSE) return void aM.items.reverse();
        if (nM === SM.DELETE_BY_REFID) {
          const nM = Er.number(rM, iM),
            QM = MM.root.refs.get(nM);
          if (void 0 === QM) return;
          if (MM.root.removeRef(nM), PM = aM.findIndex((MM => MM === QM)), -1 === PM) return;
          return aM[HM](PM), void jM?.push({
            ref: OM,
            refId: MM.currentRefId,
            op: SM.DELETE,
            dynamicIndex: PM,
            value: void 0,
            previousValue: QM
          })
        }
        if (nM === SM.ADD_BY_REFID) {
          const OM = Er.number(rM, iM),
            SM = MM.root.refs.get(OM);
          SM && (PM = aM.findIndex((MM => MM === SM))), -1 !== PM && void 0 !== PM || (PM = aM.length)
        } else PM = Er.number(rM, iM);
        const QM = aM[dM];
        let zM = PM;
        const LM = aM.items[PM],
          mM = qi(MM, nM, OM, PM, LM, QM, rM, iM, jM);
        null !== MM.resyncVisited && Ai(MM, OM, nM, PM, LM, mM, jM), null !== mM && void 0 !== mM && mM !== LM && aM.$setAt(PM, mM, null !== MM.resyncVisited && nM === SM.ADD ? SM.REPLACE : nM), LM !== mM && jM?.push({
          ref: OM,
          refId: MM.currentRefId,
          op: nM,
          dynamicIndex: zM,
          value: mM,
          previousValue: LM
        })
      };
    class MO extends Error {}

    function rO(MM, rM, iM, OM) {
      if (!(MM instanceof rM)) throw new MO(`a '${rM.name}' was expected, but '${MM&&MM.constructor.name}' was provided in ${iM.constructor.name}#${OM}`)
    }
    const iO = (MM, rM) => {
        const iM = MM.toString(),
          OM = rM.toString();
        return iM < OM ? -1 : iM > OM ? 1 : 0
      },
      OO = {
        get: (MM, rM) => "symbol" === typeof rM || isNaN(rM) ? Reflect.get(MM, rM) : MM.items[rM],
        set: (MM, rM, iM) => {
          if ("symbol" !== typeof rM && !isNaN(rM)) {
            if (void 0 === iM || null === iM) MM.$deleteAt(rM);
            else {
              let OM;
              if (iM[JM]) {
                rO(iM, MM[dM], MM, rM);
                const jM = MM.items[rM];
                MM.isMovingItems ? (OM = MM.$wireIndex(Number(rM)), void 0 !== jM ? iM[JM].isNew ? MM[JM].indexedOperation(OM, SM.MOVE_AND_ADD) : (MM[JM].getChange(OM) & SM.DELETE) === SM.DELETE ? MM[JM].indexedOperation(OM, SM.DELETE_AND_MOVE) : MM[JM].indexedOperation(OM, SM.MOVE) : iM[JM].isNew && MM[JM].indexedOperation(OM, SM.ADD), iM[JM].setParent(MM, MM[JM].root, OM)) : OM = MM.$changeAt(Number(rM), iM), void 0 !== jM && jM[JM].root?.remove(jM[JM])
              } else OM = MM.$changeAt(Number(rM), iM);
              MM.items[rM] = iM, void 0 !== OM && (MM.tmpItems[OM] = iM)
            }
            return !0
          }
          return Reflect.set(MM, rM, iM)
        },
        deleteProperty: (MM, rM) => ("number" === typeof rM ? MM.$deleteAt(rM) : delete MM[rM], !0),
        has: (MM, rM) => "symbol" === typeof rM || isNaN(Number(rM)) ? Reflect.has(MM, rM) : Reflect.has(MM.items, rM)
      };
    class SO {
      [JM];
      [PM];
      [yM];
      [dM];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[QM] = Ni;
      static[zM] = ci;
      static COLLECTION_KIND = Bi;
      static[LM](MM, rM, iM) {
        if (!iM) return !0;
        const OM = MM[yM] ?? MM;
        return "string" === typeof OM[dM] || iM.isChangeTreeVisible(OM.tmpItems[rM]?.[JM])
      }
      static is(MM) {
        return Array.isArray(MM) || void 0 !== MM.array
      }
      static from(MM) {
        return new SO(...Array.from(MM))
      }
      constructor() {
        this[dM] = void 0, this[yM] = this;
        const MM = new Proxy(this, OO);
        return Object.defineProperty(this, JM, {
          value: new Wi(MM, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), MM
      }
      static initializeForDecoder() {
        const MM = Object.create(SO.prototype);
        MM.items = [], MM.isMovingItems = !1, MM._needsCompaction = !1, MM[dM] = void 0, MM[yM] = MM;
        const rM = new Proxy(MM, OO);
        return Di(MM, rM), rM
      }
      set length(MM) {
        0 === MM ? this.clear() : MM < this.items.length ? this.splice(MM, this.length - MM) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[JM].pause()
      }
      resumeTracking() {
        this[JM].resume()
      }
      untracked(MM) {
        return this[JM].untracked(MM)
      }
      get isTrackingPaused() {
        return this[JM].paused
      }
      push() {
        const MM = this[yM],
          rM = MM.items,
          iM = MM.tmpItems,
          OM = MM[JM],
          jM = MM[dM];
        let aM = iM.length;
        for (let PM = 0, nM = arguments.length; PM < nM; PM++, aM++) {
          const nM = PM < 0 || arguments.length <= PM ? void 0 : arguments[PM];
          if (void 0 === nM || null === nM) return;
          "object" === typeof nM && jM && rO(nM, jM, MM, PM), OM.indexedOperation(aM, SM.ADD), rM.push(nM), iM.push(nM), nM[JM]?.setParent(this, OM.root, aM)
        }
        return aM
      }
      pop() {
        const MM = this[yM],
          rM = MM.tmpItems,
          iM = MM.deletedIndexes;
        let OM = -1;
        for (let jM = rM.length - 1; jM >= 0; jM--)
          if (!0 !== iM[jM]) {
            OM = jM;
            break
          } if (OM < 0) return;
        const SM = MM.$isUnsentAdd(OM);
        return MM[JM].delete(OM), SM ? MM.$cancelAdd(OM) : iM[OM] = !0, MM.items.pop()
      }
      at(MM) {
        return MM < 0 && (MM += this.length), this.items[MM]
      }
      $wireIndex(MM) {
        const rM = this.deletedIndexes;
        if (0 === rM.length) return MM;
        const iM = this.tmpItems;
        let OM = 0;
        for (let SM = 0; SM < iM.length; SM++)
          if (!0 !== rM[SM]) {
            if (OM === MM) return SM;
            OM++
          } return iM.length + (MM - OM)
      }
      $isUnsentAdd(MM) {
        const rM = this[JM];
        return 0 === (576 & rM.flags) && !rM.paused && "string" !== typeof this[dM] && rM.operationAt(MM) === SM.ADD
      }
      $cancelAdd(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const iM = this[JM],
          OM = this.tmpItems[MM];
        this.tmpItems.splice(MM, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(MM, 1), iM.removeAt(MM, 1);
        const SM = OM?.[JM];
        void 0 !== SM && void 0 === SM.root && SM.removeParent(this), rM && this.$reindexChildren(MM)
      }
      $reindexChildren(MM, rM) {
        if (!this[JM].hasFilteredFields) return;
        if ("string" === typeof this[dM]) return;
        const iM = this.tmpItems,
          OM = iM.length;
        if (void 0 !== rM)
          for (; MM < OM && iM[MM] === rM[MM];) MM++;
        for (let SM = MM; SM < OM; SM++) iM[SM]?.[JM]?.setParentIndex(this, SM)
      }
      $changeAt(MM, rM) {
        if (void 0 === rM || null === rM) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[MM] === rM) return;
        const iM = void 0 !== this.items[MM] ? "object" === typeof rM ? SM.DELETE_AND_ADD : SM.REPLACE : SM.ADD,
          OM = this.$wireIndex(MM),
          jM = this[JM];
        return jM.change(OM, iM), rM[JM]?.setParent(this, jM.root, OM), OM
      }
      $deleteAt(MM, rM) {
        this[JM].delete(this.$wireIndex(MM), rM)
      }
      $setAt(MM, rM, iM) {
        iM === SM.ADD && void 0 !== this.items[MM] ? this.items.splice(MM, 0, rM) : iM === SM.DELETE_AND_MOVE ? (this.items.splice(MM, 1), this.items[MM] = rM) : (MM > this.items.length && (this._needsCompaction = !0), this.items[MM] = rM)
      }
      clear() {
        const MM = this[yM];
        if (0 === MM.items.length) return;
        const rM = MM[JM];
        rM.forEachChild(((MM, iM) => {
          rM.root?.remove(MM)
        })), rM.discard(), rM.operation(SM.CLEAR), MM.items.length = 0, MM.tmpItems.length = 0
      } [EM]() {
        const MM = this[yM] ?? this,
          rM = MM[JM];
        if (rM.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const iM = MM.items;
        for (let OM = 0; OM < iM.length; OM++) iM[OM]?.[EM]?.();
        MM.items.length = 0, MM.tmpItems.length = 0, MM.deletedIndexes.length = 0, rM.recycle(), MM[PM] = void 0
      }
      concat() {
        return new SO(...this.items.concat(...arguments))
      }
      join(MM) {
        return this.items.join(MM)
      }
      reverse() {
        const MM = this[yM],
          rM = MM[JM];
        if (rM.has() || MM.deletedIndexes.length > 0) {
          const rM = MM.items.slice().reverse();
          return this.clear(), this.push(...rM), this
        }
        return rM.operation(SM.REVERSE), MM.items.reverse(), MM.tmpItems.reverse(), MM.$reindexChildren(0), this
      }
      shift() {
        const MM = this[yM],
          rM = MM.items;
        if (0 === rM.length) return;
        const iM = MM[JM],
          OM = MM.deletedIndexes;
        let jM = 0;
        for (; !0 === OM[jM];) jM++;
        const aM = MM.$isUnsentAdd(jM);
        return iM.delete(jM, SM.DELETE), aM ? MM.$cancelAdd(jM) : OM[jM] = !0, rM.shift()
      }
      slice(MM, rM) {
        const iM = new SO;
        return iM.push(...this.items.slice(MM, rM)), iM
      }
      sort() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iO;
        const rM = this[yM];
        rM.isMovingItems = !0;
        const iM = rM[JM];
        return rM.items.sort(MM).forEach(((MM, rM) => iM.change(rM, SM.REPLACE))), rM.tmpItems.sort(MM), rM.$reindexChildren(0), rM.isMovingItems = !1, this
      }
      splice(MM, rM) {
        const iM = this[yM],
          OM = iM[JM],
          jM = iM.items,
          aM = iM.tmpItems,
          PM = iM.deletedIndexes,
          nM = jM.length,
          QM = aM.length;
        for (var zM = arguments.length, LM = new Array(zM > 2 ? zM - 2 : 0), mM = 2; mM < zM; mM++) LM[mM - 2] = arguments[mM];
        const HM = LM.length,
          hM = [];
        for (let SM = 0; SM < QM; SM++) !0 !== PM[SM] && hM.push(SM);
        let dM;
        if (nM > MM) {
          void 0 === rM && (rM = nM - MM);
          for (let jM = MM; jM < MM + rM; jM++) {
            const MM = hM[jM],
              rM = iM.$isUnsentAdd(MM);
            OM.delete(MM, SM.DELETE), rM ? (dM ??= []).push(MM) : PM[MM] = !0
          }
        } else rM = 0;
        if (HM > 0) {
          const jM = hM[MM] ?? nM,
            QM = Math.min(HM, rM);
          for (let MM = 0; MM < QM; MM++) {
            const rM = jM + MM;
            let iM;
            const nM = void 0 !== dM ? dM.indexOf(rM) : -1; - 1 !== nM ? (dM.splice(nM, 1), iM = SM.ADD) : iM = PM[rM] ? SM.DELETE_AND_ADD : SM.ADD, OM.indexedOperation(rM, iM), aM[rM] = LM[MM], PM[rM] = !1, LM[MM][JM]?.setParent(this, OM.root, rM)
          }
          const zM = HM - QM;
          if (zM > 0) {
            const MM = jM + QM;
            OM.insertAt(MM, zM);
            for (let rM = 0; rM < zM; rM++) LM[QM + rM][JM]?.setParent(this, OM.root, MM + rM);
            PM.length > 0 && PM.splice(MM, 0, ...new Array(zM).fill(!1)), aM.splice(MM, 0, ...LM.slice(QM)), iM.$reindexChildren(MM + zM)
          }
        }
        if (void 0 !== dM && dM.length > 0) {
          for (let MM = dM.length - 1; MM >= 0; MM--) iM.$cancelAdd(dM[MM], !1);
          iM.$reindexChildren(dM[0])
        }
        return OM.root?.enqueueChangeTree(OM), jM.splice(MM, rM, ...LM)
      }
      unshift() {
        const MM = this[yM],
          rM = MM[JM];
        rM.unshift(arguments.length);
        for (let OM = 0; OM < arguments.length; OM++)(OM < 0 || arguments.length <= OM ? void 0 : arguments[OM])?.[JM]?.setParent(this, rM.root, OM);
        const iM = MM.deletedIndexes;
        return iM.length > 0 && iM.unshift(...new Array(arguments.length).fill(!1)), MM.tmpItems.unshift(...arguments), MM.$reindexChildren(arguments.length), MM.items.unshift(...arguments)
      }
      indexOf(MM, rM) {
        return this.items.indexOf(MM, rM)
      }
      lastIndexOf(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(MM, rM)
      }
      every(MM, rM) {
        return this.items.every(MM, rM)
      }
      some(MM, rM) {
        return this.items.some(MM, rM)
      }
      forEach(MM, rM) {
        return this.items.forEach(MM, rM)
      }
      map(MM, rM) {
        return this.items.map(MM, rM)
      }
      filter(MM, rM) {
        return this.items.filter(MM, rM)
      }
      reduce(MM, rM) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(MM, rM) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(MM, rM) {
        return this.items.find(MM, rM)
      }
      findIndex(MM, rM) {
        return this.items.findIndex(MM, rM)
      }
      fill(MM, rM, iM) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(MM, rM, iM) {
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
        return SO
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
      includes(MM, rM) {
        return this.items.includes(MM, rM)
      }
      flatMap(MM, rM) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(MM) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(MM, rM) {
        const iM = this.items.slice();
        return MM < 0 && (MM += this.length), iM[MM] = rM, new SO(...iM)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(MM) {
        return this.items.slice().sort(MM)
      }
      toSpliced(MM, rM) {
        for (var iM = arguments.length, OM = new Array(iM > 2 ? iM - 2 : 0), SM = 2; SM < iM; SM++) OM[SM - 2] = arguments[SM];
        const jM = this.items.slice();
        return jM.splice.apply(jM, arguments), jM
      }
      shuffle() {
        return this.move((MM => {
          let rM = this.items.length;
          for (; 0 != rM;) {
            let MM = Math.floor(Math.random() * rM);
            rM--, [this[rM], this[MM]] = [this[MM], this[rM]]
          }
        }))
      }
      move(MM) {
        return this.isMovingItems = !0, MM(this), this.isMovingItems = !1, this
      } [mM](MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = this[yM] ?? this;
        return rM || iM.deletedIndexes[MM] ? iM.items[MM] : iM.tmpItems[MM] || iM.items[MM]
      } [HM](MM) {
        const rM = this[yM] ?? this;
        rM.items[MM] = void 0, rM._needsCompaction = !0
      } [lM]() {
        const MM = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, MM), this.deletedIndexes.length = 0)
      } [UM]() {
        const MM = this[yM] ?? this;
        MM._needsCompaction && (MM._needsCompaction = !1, MM.items = MM.items.filter((MM => void 0 !== MM)))
      } [hM](MM, rM, iM) {
        const OM = this[yM] ?? this,
          SM = OM.items;
        let jM = !1;
        for (let aM = 0; aM < SM.length; aM++) {
          const PM = SM[aM];
          MM.has(aM) ? iM(PM) : (jM = !0, rM(PM, aM), OM[HM](aM))
        }
        jM && OM[UM]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((MM => "function" === typeof MM.toJSON ? MM.toJSON() : MM))
      }
      clone(MM) {
        let rM;
        return MM ? (rM = new SO, rM.push(...this.items)) : rM = new SO(...this.map((MM => MM[JM] ? MM.clone() : MM))), rM
      }
    }
    Cr("array", {
      constructor: SO
    });
    class jO {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(MM) {
        const rM = this.indexByKey[MM];
        return void 0 === rM ? void 0 : rM
      }
      assign(MM) {
        const rM = this.nextIndex++;
        return this.indexByKey[MM] = rM, this.keyByIndex.set(rM, MM), rM
      }
      snapshot(MM, rM) {
        (this.snapshots ??= new Map).set(MM, rM)
      }
      forgetSnapshot(MM) {
        this.snapshots?.delete(MM)
      }
      snapshotAt(MM) {
        return this.snapshots?.get(MM)
      }
      setIndex(MM, rM) {
        this.keyByIndex.set(MM, rM), this.indexByKey[rM] = MM
      }
      keyOf(MM) {
        return this.keyByIndex.get(MM)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [MM] of this.snapshots) {
            const rM = this.keyByIndex.get(MM);
            void 0 !== rM && (delete this.indexByKey[rM], this.keyByIndex.delete(MM))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class aO {
      [JM];
      [PM];
      childType;
      [dM];
      $items = new Map;
      journal = new jO;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(MM) {
        (this._stream ??= wr()).maxPerTick = MM
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(MM) {
        (this._stream ??= wr()).priority = MM
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[QM] = oi;
      static[zM] = Vi;
      static COLLECTION_KIND = Fi;
      static[LM](MM, rM, iM) {
        if (!iM || "string" === typeof MM[dM]) return !0;
        const OM = MM[mM](rM) ?? MM.journal.snapshotAt(rM);
        return iM.isChangeTreeVisible(OM[JM])
      }
      static is(MM) {
        return void 0 !== MM.map
      }
      constructor(MM) {
        if (Object.defineProperty(this, JM, {
            value: new Wi(this),
            enumerable: !1,
            writable: !0
          }), this[dM] = void 0, MM)
          if (MM instanceof Map || MM instanceof aO) MM.forEach(((MM, rM) => this.set(rM, MM)));
          else
            for (const rM in MM) this.set(rM, MM[rM])
      }
      static initializeForDecoder() {
        const MM = Object.create(aO.prototype);
        return MM.$items = new Map, MM.journal = new jO, MM[dM] = void 0, Di(MM), MM
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return aO
      }
      set(MM, rM) {
        if (void 0 === rM || null === rM) throw new Error(`MapSchema#set('${MM}', ${rM}): trying to set ${rM} value on '${MM}'.`);
        "object" === typeof rM && this[dM] && rO(rM, this[dM], this, MM), MM = MM.toString();
        const iM = this[JM],
          OM = void 0 !== rM[JM],
          jM = this.journal;
        let aM, PM = jM.indexOf(MM);
        if (void 0 !== PM) {
          aM = SM.REPLACE;
          const iM = this.$items.get(MM);
          if (iM === rM) return;
          OM && (aM = SM.DELETE_AND_ADD, void 0 !== iM && iM[JM].root?.remove(iM[JM])), void 0 !== jM.snapshotAt(PM) && jM.forgetSnapshot(PM)
        } else PM = jM.assign(MM), aM = SM.ADD;
        return this.$items.set(MM, rM), aM === SM.ADD && iM.isStreamCollection ? void 0 !== iM.root && gr(this, iM.root, PM) : iM.change(PM, aM), OM && rM[JM].setParent(this, iM.root, PM), this
      }
      get(MM) {
        return this.$items.get(MM)
      }
      getOrInsert(MM, rM) {
        return this.$items.has(MM) ? this.$items.get(MM) : (this.set(MM, rM), rM)
      }
      getOrInsertComputed(MM, rM) {
        if (this.$items.has(MM)) return this.$items.get(MM);
        const iM = rM(MM);
        return this.set(MM, iM), iM
      }
      delete(MM) {
        if (!this.$items.has(MM)) return !1;
        const rM = this.journal.indexOf(MM),
          iM = this.$items.get(MM),
          OM = this[JM];
        if (OM.isStreamCollection) {
          const SM = OM.root;
          let jM = !1;
          return void 0 !== SM && (jM = ur(this, SM, this[PM], rM)), void 0 !== iM?.[JM] && SM?.remove(iM[JM]), this.$items.delete(MM), jM || this.journal.snapshot(rM, iM), !0
        }
        return this.journal.snapshot(rM, iM), OM.delete(rM), this.$items.delete(MM)
      }
      clear() {
        const MM = this[JM];
        MM.discard(), MM.forEachChild(((rM, iM) => {
          MM.root?.remove(rM)
        })), this.journal.reset(), this.$items.clear(), MM.operation(SM.CLEAR)
      } [EM]() {
        const MM = this[JM];
        if (MM.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((MM => MM?.[EM]?.())), this.$items.clear(), this.journal.reset(), MM.recycle(), this[PM] = void 0
      }
      has(MM) {
        return this.$items.has(MM)
      }
      forEach(MM) {
        this.$items.forEach(MM)
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
        this[JM].pause()
      }
      resumeTracking() {
        this[JM].resume()
      }
      untracked(MM) {
        return this[JM].untracked(MM)
      }
      get isTrackingPaused() {
        return this[JM].paused
      }
      setIndex(MM, rM) {
        this.journal.setIndex(MM, rM)
      }
      getIndex(MM) {
        return this.journal.keyOf(MM)
      } [mM](MM) {
        const rM = this.journal.keyOf(MM);
        return void 0 !== rM ? this.$items.get(rM) : void 0
      } [HM](MM) {
        const rM = this.journal.keyOf(MM);
        void 0 !== rM && (this.$items.delete(rM), this.journal.keyByIndex.delete(MM))
      } [hM](MM, rM, iM) {
        let OM = null;
        if (this.$items.forEach(((SM, jM) => {
            MM.has(jM) ? iM(SM) : ((OM ??= new Set).add(jM), rM(SM, jM))
          })), null !== OM) {
          OM.forEach((MM => {
            this.$items.delete(MM), delete this.journal.indexByKey[MM]
          }));
          const MM = [];
          this.journal.keyByIndex.forEach(((rM, iM) => {
            OM.has(rM) && MM.push(iM)
          }));
          for (let rM = 0; rM < MM.length; rM++) this.journal.keyByIndex.delete(MM[rM])
        }
      } [lM]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(MM) {
        sr(this, MM)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (MM => {
          let [rM, iM] = MM;
          return [rM, "function" === typeof iM.toJSON ? iM.toJSON() : iM]
        })))
      }
      clone(MM) {
        let rM;
        return MM ? rM = Object.assign(new aO, this) : (rM = new aO, this.forEach(((MM, iM) => {
          MM[JM] ? rM.set(iM, MM.clone()) : rM.set(iM, MM)
        }))), rM
      }
    }
    Cr("map", {
      constructor: aO
    });
    class PO {
      [JM];
      [PM];
      [dM];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(MM) {
        (this._stream ??= wr()).maxPerTick = MM
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(MM) {
        (this._stream ??= wr()).priority = MM
      }
      static[QM] = fi;
      static[zM] = Vi;
      static COLLECTION_KIND = Ii;
      static[LM](MM, rM, iM) {
        return !iM || "string" === typeof MM[dM] || iM.isChangeTreeVisible((MM[mM](rM) ?? MM.deletedItems[rM])[JM])
      }
      static is(MM) {
        return void 0 !== MM.collection
      }
      constructor(MM) {
        Object.defineProperty(this, JM, {
          value: new Wi(this),
          enumerable: !1,
          writable: !0
        }), this[dM] = void 0, MM && MM.forEach((MM => this.add(MM)))
      }
      static initializeForDecoder() {
        const MM = Object.create(PO.prototype);
        return MM.$items = new Map, MM.deletedItems = {}, MM.$refId = 0, MM[dM] = void 0, Di(MM), MM
      }
      add(MM) {
        const rM = this.$refId++,
          iM = this[JM];
        return this.$items.set(rM, MM), iM.isStreamCollection ? void 0 !== iM.root && gr(this, iM.root, rM) : iM.change(rM), void 0 !== MM[JM] && MM[JM].setParent(this, iM.root, rM), rM
      }
      at(MM) {
        const rM = Array.from(this.$items.keys())[MM];
        return this.$items.get(rM)
      }
      entries() {
        return this.$items.entries()
      }
      delete(MM) {
        const rM = this.$items.entries();
        let iM, OM;
        for (;
          (OM = rM.next()) && !OM.done;)
          if (MM === OM.value[1]) {
            iM = OM.value[0];
            break
          } if (void 0 === iM) return !1;
        const SM = this[JM];
        if (SM.isStreamCollection) {
          const MM = SM.root,
            rM = this.$items.get(iM);
          return void 0 !== MM && ur(this, MM, this[PM], iM), void 0 !== rM?.[JM] && MM?.remove(rM[JM]), this.deletedItems[iM] = rM, this.$items.delete(iM)
        }
        return this.deletedItems[iM] = SM.delete(iM), this.$items.delete(iM)
      }
      clear() {
        const MM = this[JM];
        MM.discard(), MM.forEachChild(((rM, iM) => {
          MM.root?.remove(rM)
        })), this.$items.clear(), MM.operation(SM.CLEAR)
      } [EM]() {
        const MM = this[JM];
        if (MM.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((MM => MM?.[EM]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, MM.recycle(), this[PM] = void 0
      }
      has(MM) {
        return Array.from(this.$items.values()).some((rM => rM === MM))
      }
      forEach(MM) {
        this.$items.forEach(((rM, iM, OM) => MM(rM, iM, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[JM].pause()
      }
      resumeTracking() {
        this[JM].resume()
      }
      untracked(MM) {
        return this[JM].untracked(MM)
      }
      get isTrackingPaused() {
        return this[JM].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(MM, rM) {}
      getIndex(MM) {
        return MM
      } [mM](MM) {
        return this.$items.get(MM)
      } [HM](MM) {
        this.$items.delete(MM)
      } [hM](MM, rM, iM) {
        let OM = null;
        if (this.$items.forEach(((SM, jM) => {
            MM.has(jM) ? iM(SM) : ((OM ??= []).push(jM), rM(SM, jM))
          })), null !== OM)
          for (let SM = 0; SM < OM.length; SM++) this[HM](OM[SM])
      } [lM]() {
        for (const MM in this.deletedItems) delete this.deletedItems[MM]
      }
      _dropView(MM) {
        sr(this, MM)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const MM = [];
        return this.forEach(((rM, iM) => {
          MM.push("function" === typeof rM.toJSON ? rM.toJSON() : rM)
        })), MM
      }
      clone(MM) {
        let rM;
        return MM ? rM = Object.assign(new PO, this) : (rM = new PO, this.forEach((MM => {
          MM[JM] ? rM.add(MM.clone()) : rM.add(MM)
        }))), rM
      }
    }
    Cr("collection", {
      constructor: PO
    });
    class nO {
      [JM];
      [PM];
      [dM];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(MM) {
        (this._stream ??= wr()).maxPerTick = MM
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(MM) {
        (this._stream ??= wr()).priority = MM
      }
      static[QM] = fi;
      static[zM] = Vi;
      static COLLECTION_KIND = Xi;
      static[LM](MM, rM, iM) {
        return !iM || "string" === typeof MM[dM] || iM.isVisible((MM[mM](rM) ?? MM.deletedItems[rM])[JM])
      }
      static is(MM) {
        return void 0 !== MM.set
      }
      constructor(MM) {
        Object.defineProperty(this, JM, {
          value: new Wi(this),
          enumerable: !1,
          writable: !0
        }), this[dM] = void 0, MM && MM.forEach((MM => this.add(MM)))
      }
      static initializeForDecoder() {
        const MM = Object.create(nO.prototype);
        return MM.$items = new Map, MM.deletedItems = {}, MM.$refId = 0, MM[dM] = void 0, Di(MM), MM
      }
      add(MM) {
        if (this.has(MM)) return !1;
        const rM = this.$refId++,
          iM = this[JM];
        return this.$items.set(rM, MM), iM.isStreamCollection ? void 0 !== iM.root && gr(this, iM.root, rM) : iM.change(rM, SM.ADD), void 0 !== MM[JM] && MM[JM].setParent(this, iM.root, rM), rM
      }
      entries() {
        return this.$items.entries()
      }
      delete(MM) {
        const rM = this.$items.entries();
        let iM, OM;
        for (;
          (OM = rM.next()) && !OM.done;)
          if (MM === OM.value[1]) {
            iM = OM.value[0];
            break
          } if (void 0 === iM) return !1;
        const SM = this[JM];
        if (SM.isStreamCollection) {
          const MM = SM.root,
            rM = this.$items.get(iM);
          return void 0 !== MM && ur(this, MM, this[PM], iM), void 0 !== rM?.[JM] && MM?.remove(rM[JM]), this.deletedItems[iM] = rM, this.$items.delete(iM)
        }
        return this.deletedItems[iM] = SM.delete(iM), this.$items.delete(iM)
      }
      clear() {
        const MM = this[JM];
        MM.discard(), this.$items.clear(), MM.operation(SM.CLEAR)
      } [EM]() {
        const MM = this[JM];
        if (MM.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((MM => MM?.[EM]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, MM.recycle(), this[PM] = void 0
      }
      has(MM) {
        const rM = this.$items.values();
        let iM, OM = !1;
        for (;
          (iM = rM.next()) && !iM.done;)
          if (MM === iM.value) {
            OM = !0;
            break
          } return OM
      }
      forEach(MM) {
        this.$items.forEach(((rM, iM, OM) => MM(rM, iM, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[JM].pause()
      }
      resumeTracking() {
        this[JM].resume()
      }
      untracked(MM) {
        return this[JM].untracked(MM)
      }
      get isTrackingPaused() {
        return this[JM].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(MM, rM) {}
      getIndex(MM) {
        return MM
      } [mM](MM) {
        return this.$items.get(MM)
      } [HM](MM) {
        this.$items.delete(MM)
      } [hM](MM, rM, iM) {
        let OM = null;
        if (this.$items.forEach(((SM, jM) => {
            MM.has(jM) ? iM(SM) : ((OM ??= []).push(jM), rM(SM, jM))
          })), null !== OM)
          for (let SM = 0; SM < OM.length; SM++) this[HM](OM[SM])
      } [lM]() {
        for (const MM in this.deletedItems) delete this.deletedItems[MM]
      }
      _dropView(MM) {
        sr(this, MM)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const MM = [];
        return this.forEach(((rM, iM) => {
          MM.push("function" === typeof rM.toJSON ? rM.toJSON() : rM)
        })), MM
      }
      clone(MM) {
        let rM;
        return MM ? rM = Object.assign(new nO, this) : (rM = new nO, this.forEach((MM => {
          MM[JM] ? rM.add(MM.clone()) : rM.add(MM)
        }))), rM
      }
    }
    Cr("set", {
      constructor: nO
    });
    class QO {
      [JM];
      [PM];
      [dM];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(MM) {
        (this._stream ??= wr()).maxPerTick = MM
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(MM) {
        (this._stream ??= wr()).priority = MM
      }
      static $isStream = !0;
      static[QM] = fi;
      static[zM] = Vi;
      static COLLECTION_KIND = Ki;
      static[LM](MM, rM, iM) {
        if (!iM) return !0;
        const OM = MM[mM](rM);
        return void 0 !== OM && iM.isVisible(OM[JM])
      }
      static is(MM) {
        return MM && void 0 !== MM.stream
      }
      constructor() {
        Object.defineProperty(this, JM, {
          value: new Wi(this),
          enumerable: !1,
          writable: !0
        }), this[dM] = void 0
      }
      static initializeForDecoder() {
        const MM = Object.create(QO.prototype);
        return MM.$items = new Map, MM.$nextPosition = 0, MM._itemIndex = new Map, MM[dM] = void 0, Di(MM), MM
      }
      add(MM) {
        if (this._itemIndex.has(MM)) return -1;
        const rM = this.$nextPosition++;
        this.$items.set(rM, MM), this._itemIndex.set(MM, rM);
        const iM = this[JM].root;
        return void 0 !== MM[JM] && MM[JM].setParent(this, iM, rM), void 0 !== iM && gr(this, iM, rM), rM
      }
      remove(MM) {
        const rM = this._itemIndex.get(MM);
        if (void 0 === rM) return !1;
        this._itemIndex.delete(MM), this.$items.delete(rM);
        const iM = this[JM].root;
        return void 0 !== iM && (ur(this, iM, this[PM], rM), void 0 !== MM[JM] && iM.remove(MM[JM])), !0
      }
      has(MM) {
        return this._itemIndex.has(MM)
      }
      clear() {
        const MM = this[JM].root;
        if (void 0 !== MM) {
          ! function(MM, rM, iM) {
            const OM = MM._stream;
            if (void 0 !== OM) {
              OM.broadcastPending.clear();
              for (const MM of OM.sentBroadcast) OM.broadcastDeletes.add(MM);
              OM.sentBroadcast.clear(), rM.forEachActiveView((MM => {
                OM.pendingByView.get(MM.id)?.clear();
                const rM = OM.sentByView.get(MM.id);
                if (void 0 !== rM && rM.size > 0) {
                  let OM = MM.changes.get(iM);
                  void 0 === OM && (OM = new Map, MM.changes.set(iM, OM));
                  for (const MM of rM) OM.set(MM, SM.DELETE);
                  rM.clear()
                }
              }))
            }
          }(this, MM, this[PM]);
          for (const rM of this.$items.values()) void 0 !== rM[JM] && MM.remove(rM[JM])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(MM) {
        for (const [rM, iM] of this.$items) MM(iM, rM, this)
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
      setIndex(MM, rM) {}
      getIndex(MM) {
        return MM
      } [mM](MM) {
        return this.$items.get(MM)
      } [HM](MM) {
        const rM = this.$items.get(MM);
        void 0 !== rM && (this._itemIndex.delete(rM), this.$items.delete(MM))
      } [hM]() {} [lM]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const MM = [];
        return this.forEach((rM => {
          MM.push("function" === typeof rM?.toJSON ? rM.toJSON() : rM)
        })), MM
      }
      clone(MM) {
        if (MM) {
          return Object.assign(new QO, this)
        }
        const rM = new QO;
        return rM.maxPerTick = this.maxPerTick, this.forEach((MM => {
          rM.add("function" === typeof MM?.clone ? MM.clone() : MM)
        })), rM
      }
      _dropView(MM) {
        sr(this, MM)
      }
      _unregister() {}
    }
    Cr("stream", {
      constructor: QO
    });
    class zO {
      [CM] = !0;
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
      constructor(MM) {
        this._type = MM
      }
      default (MM) {
        return this._default = MM, this._hasDefault = !0, this
      }
      view(MM) {
        return this._view = MM ?? -1, this
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
        const MM = this._type;
        if (MM && "object" === typeof MM && void 0 !== MM.array) throw new Error(br);
        return this._stream = !0, this
      }
      priority(MM) {
        return this._streamPriority = MM, this
      }
      deprecated() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = MM, this
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

    function LO(MM) {
      return null != MM && !0 === MM[CM]
    }

    function mO(MM) {
      return () => new zO(MM)
    }

    function HO(MM) {
      if (LO(MM)) {
        const rM = MM._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof rM?`use the type name instead: t.array("${rM}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return MM
    }

    function hO(MM) {
      return new zO({
        quantized: kr(MM)
      })
    }
    const JO = Object.freeze({
        string: mO("string"),
        number: mO("number"),
        boolean: mO("boolean"),
        int8: mO("int8"),
        uint8: mO("uint8"),
        int16: mO("int16"),
        uint16: mO("uint16"),
        int32: mO("int32"),
        uint32: mO("uint32"),
        int64: mO("int64"),
        uint64: mO("uint64"),
        float32: mO("float32"),
        float64: mO("float64"),
        bigint64: mO("bigint64"),
        biguint64: mO("biguint64"),
        ref: MM => new zO(MM),
        array: MM => new zO({
          array: HO(MM)
        }),
        map: MM => new zO({
          map: HO(MM)
        }),
        set: MM => new zO({
          set: HO(MM)
        }),
        collection: MM => new zO({
          collection: HO(MM)
        }),
        stream: MM => {
          const rM = new zO({
            stream: HO(MM)
          });
          return rM._stream = !0, rM
        },
        quantized: hO,
        angle: MM => hO({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: MM?.bits ?? 16
        })
      }),
      dO = -1;

    function yO(MM) {
      return Nr.register(MM), MM
    }

    function lO() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dO;
      return function(rM, iM) {
        const OM = Ir.initialize(rM.constructor);
        Ir.setTag(OM, iM, MM)
      }
    }

    function EO(MM, rM) {
      const iM = Ir.initialize(MM.constructor);
      Ir.setUnreliable(iM, rM)
    }

    function UO(MM, rM) {
      const iM = Ir.initialize(MM.constructor);
      Ir.setPatchOnly(iM, rM)
    }

    function GO(MM, rM) {
      const iM = Ir.initialize(MM.constructor);
      Ir.setFullStateOnly(iM, rM)
    }

    function CO(MM, rM) {
      return function(iM, OM) {
        const SM = iM.constructor;
        if (!MM) throw new Error(`${SM.name}: @type() reference provided for "${OM}" is undefined. Make sure you don't have any circular dependencies.`);
        MM = xr(MM, `${SM.name}.${OM}`), Nr.register(SM);
        const jM = Object.getPrototypeOf(SM)[Symbol.metadata],
          aM = Ir.initialize(SM);
        let PM = aM[OM];
        if (void 0 !== aM[PM]) {
          if (aM[PM].deprecated) return;
          if (void 0 !== aM[PM].type) {
            const MM = new Error(`@colyseus/schema: Duplicate '${OM}' definition on '${SM.name}'.\nCheck @type() annotation`);
            throw new Error(`${MM.message} ${MM.stack.split("\n")[4].trim()}`)
          }
        } else PM = aM[tM] ?? (jM && jM[tM]) ?? -1, PM++;
        if (rM && rM.manual) Ir.addField(aM, PM, OM, MM, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: rM,
            childType: iM
          } = Ar(MM);
          Ir.addField(aM, PM, OM, MM, bO(OM, PM, iM, rM))
        }
        aM[eM][OM] && Object.defineProperty(iM, OM, aM[eM][OM]), ("string" === typeof MM || Zr(MM)) && (aM[wM] || Object.defineProperty(aM, wM, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), aM[wM][PM] = "string" === typeof MM ? rr[MM] : Yr(MM.quantized))
      }
    }
    const eO = {
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

    function bO(MM, rM, iM, OM) {
      let jM;
      return jM = OM ? function(MM, rM, iM, OM) {
        const jM = OM.constructor === SO,
          aM = OM.constructor === aO;
        return function(MM) {
          const OM = this[GM],
            PM = OM[rM];
          if (MM !== PM) {
            if (void 0 !== MM && null !== MM) {
              if (!jM || MM instanceof SO)
                if (!aM || MM instanceof aO) MM[dM] = iM;
                else {
                  const rM = new aO;
                  if (rM[dM] = iM, MM instanceof Map) MM.forEach(((MM, iM) => rM.set(iM, MM)));
                  else
                    for (const iM in MM) rM.set(iM, MM[iM]);
                  MM = rM
                }
              else {
                const rM = new SO;
                rM[dM] = iM, rM.push(...MM), MM = rM
              }
              const OM = this[JM],
                QM = this.constructor;
              void 0 !== PM && null !== PM && PM[JM] ? (OM.root?.remove(PM[JM]), QM[nM](OM, rM, SM.DELETE_AND_ADD)) : QM[nM](OM, rM, SM.ADD), MM[JM]?.setParent(this, OM.root, rM)
            } else void 0 !== PM && null !== PM && this[JM].delete(rM);
            OM[rM] = MM
          }
        }
      }(0, rM, iM, OM) : "string" === typeof iM ? function(MM, rM, iM) {
        const OM = eO[iM],
          jM = "string" === iM,
          aM = "boolean" === iM;
        return function(iM) {
          const PM = this[GM],
            QM = PM[rM];
          if (iM !== QM) {
            if (void 0 !== iM && null !== iM) {
              if (!aM && void 0 !== OM && typeof iM !== OM && (!jM || null !== iM)) {
                const rM = iM && iM.constructor ? ` (${iM.constructor.name})` : "";
                throw new MO(`a '${OM}' was expected, but '${JSON.stringify(iM)}'${rM} was provided in ${this.constructor.name}#${MM}`)
              }
              this.constructor[nM](this[JM], rM, SM.ADD)
            } else void 0 !== QM && null !== QM && this[JM].delete(rM);
            PM[rM] = iM
          }
        }
      }(MM, rM, iM) : Zr(iM) ? function(MM, rM, iM) {
        return function(OM) {
          const jM = this[GM],
            aM = jM[rM];
          if (void 0 !== OM && null !== OM) {
            if ("number" !== typeof OM) throw new MO(`a 'number' was expected, but '${JSON.stringify(OM)}' was provided in ${this.constructor.name}#${MM}`);
            if ((OM = fr(iM, or(iM, OM))) === aM) return;
            this.constructor[nM](this[JM], rM, SM.ADD)
          } else {
            if (OM === aM) return;
            void 0 !== aM && null !== aM && this[JM].delete(rM)
          }
          jM[rM] = OM
        }
      }(MM, rM, iM.quantized) : function(MM, rM, iM) {
        return function(OM) {
          const jM = this[GM],
            aM = jM[rM];
          if (OM !== aM) {
            if (void 0 !== OM && null !== OM) {
              rO(OM, iM, this, MM);
              const jM = this[JM],
                PM = this.constructor;
              void 0 !== aM && null !== aM && aM[JM] ? (jM.root?.remove(aM[JM]), PM[nM](jM, rM, SM.DELETE_AND_ADD)) : PM[nM](jM, rM, SM.ADD), OM[JM]?.setParent(this, jM.root, rM)
            } else void 0 !== aM && null !== aM && this[JM].delete(rM);
            jM[rM] = OM
          }
        }
      }(MM, rM, iM), {
        get: function() {
          return this[GM][rM]
        },
        set: jM,
        enumerable: !0,
        configurable: !0
      }
    }

    function wO() {
      let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(rM, iM) {
        const OM = Ir.initialize(rM.constructor);
        Ir.setDeprecated(OM, iM), MM && (OM[eM] ??= {}, OM[eM][iM] = {
          get: function() {
            throw new Error(`${iM} is deprecated.`)
          },
          set: function(MM) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(rM, iM, OM[eM][iM]))
      }
    }
    let tO = !1;

    function gO(MM, rM, iM) {
      tO || (tO = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let OM in rM) CO(rM[OM], iM)(MM.prototype, OM);
      return MM
    }

    function uO(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pO;
      if (null == MM || "object" !== typeof MM) throw new Error(`schema(): first argument must be a fields object (got ${typeof MM}).`);
      const OM = {},
        SM = {},
        jM = {},
        aM = {},
        PM = (MM, rM) => {
          if (rM.hasDefault)((MM, rM) => {
            "function" === typeof rM ? aM[MM] = rM : rM && "function" === typeof rM.clone ? aM[MM] = () => rM.clone() : jM[MM] = rM
          })(MM, rM.default);
          else if (!rM.optional) {
            const iM = function(MM) {
              if (MM && "object" === typeof MM) {
                if (void 0 !== MM.array) return () => new SO;
                if (void 0 !== MM.map) return () => new aO;
                if (void 0 !== MM.set) return () => new nO;
                if (void 0 !== MM.collection) return () => new PO;
                if (void 0 !== MM.stream) return () => new QO
              } else if ("function" === typeof MM && pO.is(MM) && (!MM.prototype.initialize || 0 === MM.prototype.initialize.length)) return () => new MM
            }(rM.type);
            iM && (aM[MM] = iM)
          }
        },
        nM = {},
        QM = [],
        zM = [],
        LM = {},
        mM = [],
        HM = [],
        hM = {},
        JM = [];
      for (const GM in MM) {
        const iM = MM[GM],
          jM = `schema(${rM?`'${rM}'`:""}): field '${GM}'`;
        if (LO(iM)) {
          const MM = iM.toDefinition();
          if (MM.noSync) {
            if (void 0 !== MM.view || MM.unreliable || MM.patchOnly || MM.fullStateOnly || MM.stream) throw new Error(`${jM} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            PM(GM, MM);
            continue
          }
          if (MM.patchOnly && MM.fullStateOnly) throw new Error(`${jM} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const rM = xr(MM.type, jM);
          if ("function" === typeof rM && !pO.is(rM)) throw new Error(`${jM} is a synced ref to non-Schema class '${rM.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          OM[GM] = rM, void 0 !== MM.view && (nM[GM] = MM.view), MM.unreliable && QM.push(GM), MM.patchOnly && zM.push(GM), MM.deprecated && (LM[GM] = MM.deprecatedThrows), MM.fullStateOnly && mM.push(GM), MM.stream && HM.push(GM), void 0 !== MM.streamPriority && (hM[GM] = MM.streamPriority), MM.optional && JM.push(GM), PM(GM, MM)
        } else {
          if ("function" !== typeof iM) throw new Error(`${jM} must be a t.* builder, Schema subclass, or method (got ${typeof iM}).`);
          pO.is(iM) ? (OM[GM] = iM, iM.prototype.initialize && 0 !== iM.prototype.initialize.length || (aM[GM] = () => new iM)) : SM[GM] = iM
        }
      }
      const dM = MM => {
          for (const rM in jM) MM[rM] = jM[rM];
          for (const rM in aM) MM[rM] = aM[rM]()
        },
        yM = () => {
          const MM = {};
          return dM(MM), MM
        },
        lM = "function" === typeof SM.initialize,
        EM = SM.initialize ?? iM._initialize,
        UM = class extends iM {
          constructor() {
            for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
            const SM = rM[0];
            void 0 === SM ? (super(), dM(this)) : super(Object.assign(yM(), lM ? (MM => {
              const rM = Object.keys(OM),
                iM = {};
              for (const OM in MM) rM.includes(OM) || (iM[OM] = MM[OM]);
              return iM
            })(SM) : SM)), EM && new.target === UM && EM.apply(this, rM)
          }
        };
      rM && Object.defineProperty(UM, "name", {
        value: rM
      }), Ir.setFields(UM, OM), UM._getDefaultValues = yM, UM._initialize = EM, Object.assign(UM.prototype, SM);
      for (const GM in nM) lO(nM[GM])(UM.prototype, GM);
      for (const GM of QM) EO(UM.prototype, GM);
      for (const GM of zM) UO(UM.prototype, GM);
      for (const GM in LM) wO(LM[GM])(UM.prototype, GM);
      if (mM.length > 0 || HM.length > 0) {
        const MM = UM[Symbol.metadata];
        for (const rM of mM) Ir.setFullStateOnly(MM, rM);
        for (const rM of HM) Ir.setStream(MM, rM);
        for (const rM in hM) Ir.setStreamPriority(MM, rM, hM[rM])
      }
      if (JM.length > 0) {
        const MM = UM[Symbol.metadata];
        for (const rM of JM) MM[MM[rM]].optional = !0
      }
      return UM.extend = (MM, rM) => uO(MM, rM, UM), UM
    }

    function RO(MM) {
      const rM = MM[JM].root,
        iM = {
          ops: {},
          refs: []
        };
      let OM = rM.changes.next;
      for (; OM;) {
        const MM = OM.changeTree;
        void 0 !== MM ? (iM.refs.push(`refId#${MM.ref[PM]}`), MM.forEach(((MM, rM) => {
          if (MM < 0 || !rM) return;
          const OM = SM[rM];
          iM.ops[OM] || (iM.ops[OM] = 0), iM.ops[OM]++
        })), OM = OM.next) : OM = OM.next
      }
      return iM
    }
    class pO {
      static[QM] = Zi;
      static[zM] = Ti;
      [PM];
      [GM];
      static initialize(MM) {
        Object.defineProperty(MM, JM, {
          value: new Wi(MM),
          enumerable: !1,
          writable: !0
        }), MM[GM] = []
      }
      static initializeForDecoder() {
        const MM = Object.create(this.prototype);
        return Di(MM), MM[GM] = [], MM
      }
      static reset(MM) {
        const rM = MM?.[JM];
        if (void 0 === rM || "function" !== typeof rM.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== rM.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${MM.constructor.name}) with multiple parents.`);
        MM[EM]()
      } [EM]() {
        const MM = this.constructor[Symbol.metadata],
          rM = MM?.[gM] ?? [],
          iM = this[GM];
        for (let OM = 0; OM < rM.length; OM++) {
          const MM = iM[rM[OM]];
          MM?.[EM]?.()
        }
        this[JM].recycle(), this[PM] = void 0
      }
      static is(MM) {
        const rM = MM[Symbol.metadata];
        return "object" === typeof rM && null !== rM
      }
      static isSchema(MM) {
        return "function" === typeof MM?.assign
      }
      static[nM](MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SM.ADD;
        MM.change(rM, iM)
      }
      static[LM](MM, rM, iM) {
        const OM = MM.constructor[Symbol.metadata],
          SM = OM[rM]?.tag;
        return void 0 === iM ? void 0 === SM : void 0 === SM || (SM === dO ? iM.isChangeTreeVisible(MM[JM]) : iM.hasTagOnTree(MM[JM], SM))
      }
      constructor(MM) {
        pO.initialize(this), MM && pO.assignProps(this, MM)
      }
      assign(MM) {
        return pO.assignProps(this, MM), this
      }
      static assignProps(MM, rM) {
        const iM = MM.constructor[Symbol.metadata];
        if (iM && void 0 !== iM[tM])
          for (let SM = 0; SM <= iM[tM]; SM++) {
            const OM = iM[SM];
            if (!OM) continue;
            const jM = rM[OM.name];
            void 0 !== jM && (MM[OM.name] = jM)
          }
        const OM = Object.keys(rM);
        for (let SM = 0; SM < OM.length; SM++) {
          const jM = OM[SM];
          iM && void 0 !== iM[jM] || (MM[jM] = rM[jM])
        }
      }
      restore(MM) {
        const rM = this.constructor[Symbol.metadata];
        for (const iM in rM) {
          const OM = rM[iM],
            SM = OM.name,
            jM = OM.type,
            aM = MM[SM];
          if (void 0 !== aM && null !== aM)
            if ("string" === typeof jM) this[SM] = aM;
            else if (pO.is(jM)) {
            const MM = new jM;
            MM.restore(aM), this[SM] = MM
          } else if ("object" === typeof jM) {
            const MM = Object.keys(jM)[0],
              rM = jM[MM];
            if ("map" === MM) {
              const MM = this[SM];
              for (const iM in aM)
                if (pO.is(rM)) {
                  const OM = new rM;
                  OM.restore(aM[iM]), MM.set(iM, OM)
                } else MM.set(iM, aM[iM])
            } else if ("array" === MM) {
              const MM = this[SM];
              for (let iM = 0; iM < aM.length; iM++)
                if (pO.is(rM)) {
                  const OM = new rM;
                  OM.restore(aM[iM]), MM.push(OM)
                } else MM.push(aM[iM])
            }
          }
        }
        return this
      }
      setDirty(MM, rM) {
        const iM = this.constructor[Symbol.metadata];
        this[JM].change(iM[iM[MM]].index, rM)
      }
      pauseTracking() {
        this[JM].pause()
      }
      resumeTracking() {
        this[JM].resume()
      }
      untracked(MM) {
        return this[JM].untracked(MM)
      }
      get isTrackingPaused() {
        return this[JM].paused
      }
      clone() {
        const MM = Object.create(this.constructor.prototype);
        pO.initialize(MM);
        const rM = this.constructor[Symbol.metadata];
        for (const iM in rM) {
          const OM = rM[iM].name;
          "object" === typeof this[OM] && "function" === typeof this[OM]?.clone ? MM[OM] = this[OM].clone() : MM[OM] = this[OM]
        }
        return MM
      }
      toJSON() {
        const MM = {},
          rM = this.constructor[Symbol.metadata];
        for (const iM in rM) {
          const OM = rM[iM],
            SM = OM.name;
          OM.deprecated || null === this[SM] || "undefined" === typeof this[SM] || (MM[SM] = "function" === typeof this[SM].toJSON ? this[SM].toJSON() : this[SM])
        }
        return MM
      }
      discardAllChanges() {
        this[JM].discardAll()
      } [mM](MM) {
        return this[this.constructor[Symbol.metadata][MM].name]
      } [HM](MM) {
        this[this.constructor[Symbol.metadata][MM].name] = void 0
      }
      static debugRefIds(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 ? arguments[3] : void 0,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const jM = rM ? ` - ${JSON.stringify(MM.toJSON())}` : "",
          aM = MM[JM],
          nM = MM[PM],
          QM = OM ? OM.root.refCount[nM] : aM.refCount,
          zM = QM > 1 ? ` [\xd7${QM}]` : "";
        let LM = `${function(MM){return new Array(MM).fill(0).map(((rM,iM)=>iM===MM-1?"\u2514\u2500 ":"   ")).join("")}(iM)}${SM}${MM.constructor.name} (refId: ${nM})${zM}${jM}\n`;
        return aM.forEachChild(((SM, jM) => {
          let aM = jM;
          "number" === typeof jM && MM.$indexes && (aM = MM.$indexes.get(jM) ?? jM);
          const PM = void 0 !== MM.forEach && void 0 !== aM ? `["${aM}"]: ` : "";
          LM += this.debugRefIds(SM.ref, rM, iM + 1, OM, PM)
        })), LM
      }
      static debugRefIdEncodingOrder(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const iM = [],
          OM = MM[JM];
        if ("changes" === rM) {
          let MM = OM.root.changes?.next;
          for (; MM;) MM.changeTree && iM.push(MM.changeTree.ref[PM]), MM = MM.next;
          return iM
        }
        const SM = "allFilteredChanges" === rM,
          jM = new Set,
          aM = MM => {
            jM.has(MM) || (jM.add(MM), MM.isFiltered === SM && iM.push(MM.ref[PM]), MM.forEachChild(((MM, rM) => aM(MM))))
          };
        return aM(OM), iM
      }
      static debugRefIdsFromDecoder(MM) {
        return this.debugRefIds(MM.state, !1, 0, MM)
      }
      static debugChanges(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = MM[JM],
          OM = rM ? "allChanges" : "changes";
        let jM = `${MM.constructor.name} (${MM[PM]}) -> .${OM}:\n`;
        return rM ? iM.forEachLive((MM => {
          jM += `- [${MM}]: ADD (${JSON.stringify(iM.getValue(Number(MM),!0))})\n`
        })) : iM.forEach(((MM, rM) => {
          MM < 0 || !rM || (jM += `- [${MM}]: ${SM[rM]} (${JSON.stringify(iM.getValue(Number(MM),!1))})\n`)
        })), jM
      }
    }
    jM(pO);
    const WO = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class sO {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const MM = {};
        for (const rM in this.changeTrees) MM[rM] = this.changeTrees[rM].refCount;
        return MM
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
      enqueueFilterRefresh(MM) {
        this.types.hasFilters && (MM.flags & ui || (MM.flags |= ui, this.pendingFilterRefresh.push(MM)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(MM) {
        this._freeViewIds.push(MM)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(MM) {
        this.activeViews.set(MM.id, new WeakRef(MM))
      }
      unregisterView(MM) {
        this.activeViews.delete(MM.id);
        const rM = MM.id;
        for (const iM of this.streamTrees) iM._dropView(rM)
      }
      forEachActiveView(MM) {
        for (const [rM, iM] of this.activeViews) {
          const OM = iM.deref();
          if (void 0 !== OM) MM(OM);
          else {
            this.activeViews.delete(rM);
            for (const MM of this.streamTrees) MM._dropView(rM)
          }
        }
      }
      registerStream(MM) {
        this.streamTrees.add(MM)
      }
      unregisterStream(MM) {
        this.streamTrees.delete(MM)
      }
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = MM, this.nextUniqueId = rM
      }
      add(MM) {
        const rM = MM.ref;
        void 0 === rM[PM] && (WO.value = this.nextUniqueId++, Object.defineProperty(rM, PM, WO));
        const iM = rM[PM],
          OM = void 0 === this.changeTrees[iM];
        OM && (this.changeTrees[iM] = MM), MM.needsRestage && (MM.needsRestage = !1, MM.forEachLiveWithCtx(MM, ii));
        const SM = OM ? 0 : MM.refCount;
        return MM.refCount = SM + 1, SM > 0 && this.enqueueFilterRefresh(MM), OM
      }
      remove(MM) {
        const rM = MM.refCount - 1;
        if (rM <= 0) {
          if (MM.root = void 0, delete this.changeTrees[MM.ref[PM]], MM.isStreamCollection) {
            const rM = MM.ref;
            rM._unregister?.(), this.unregisterStream(rM)
          }
          this.removeFromQueue(MM), this.removeFromUnreliableQueue(MM), MM.refCount = 0, MM.needsRestage = !0, MM.forEachChild(((rM, iM) => {
            rM.removeParent(MM.ref) && (void 0 === rM.parentRef || rM.refCount > 0 ? this.remove(rM) : this.moveNextToParent(rM))
          }))
        } else MM.refCount = rM, this.enqueueFilterRefresh(MM), this.recursivelyMoveNextToParent(MM);
        return rM
      }
      recursivelyMoveNextToParent(MM) {
        this.moveNextToParent(MM), MM.forEachChild(((MM, rM) => this.recursivelyMoveNextToParent(MM)))
      }
      moveNextToParent(MM) {
        MM.changesNode && this._moveNextToParentInList(this.changes, MM, MM.changesNode, "changesNode"), MM.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, MM, MM.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(MM, rM, iM, OM) {
        const SM = rM.parent;
        if (!SM || !SM[JM]) return;
        const jM = SM[JM][OM];
        jM && jM !== iM && (iM.position > jM.position || (iM.prev ? iM.prev.next = iM.next : MM.next = iM.next, iM.next ? iM.next.prev = iM.prev : MM.tail = iM.prev, iM.prev = MM.tail, iM.next = void 0, MM.tail.next = iM, MM.tail = iM, iM.position = MM.nextPosition++))
      }
      enqueueChangeTree(MM) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM.changesNode) || (MM.changesNode = this._appendToList(this.changes, MM))
      }
      enqueueUnreliable(MM) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM.unreliableChangesNode) || (MM.unreliableChangesNode = this._appendToList(this.unreliableChanges, MM))
      }
      _appendToList(MM, rM) {
        const iM = this._nodePool;
        let OM;
        return iM.length > 0 ? (OM = iM.pop(), OM.changeTree = rM, OM.next = void 0, OM.prev = void 0) : OM = {
          changeTree: rM,
          next: void 0,
          prev: void 0,
          position: 0
        }, MM.next ? (OM.prev = MM.tail, MM.tail.next = OM, MM.tail = OM) : (MM.nextPosition = 0, MM.next = OM, MM.tail = OM), OM.position = MM.nextPosition++, OM
      }
      releaseNode(MM) {
        MM.changeTree = void 0, MM.prev = void 0, MM.next = void 0, this._nodePool.push(MM)
      }
      removeFromQueue(MM) {
        return this._removeNode(this.changes, MM, MM.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(MM) {
        return this._removeNode(this.unreliableChanges, MM, MM.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(MM, rM, iM, OM) {
        return !(!iM || iM.changeTree !== rM) && (iM.prev ? iM.prev.next = iM.next : MM.next = iM.next, iM.next ? iM.next.prev = iM.prev : MM.tail = iM.prev, rM[OM] = void 0, this.releaseNode(iM), !0)
      }
    }

    function DO(MM, rM) {
      if (-1 === rM || rM >= MM.length) return !1;
      const iM = MM.length - 1;
      for (let OM = rM; OM < iM; OM++) MM[OM] = MM[OM + 1];
      return MM.length = iM, !0
    }

    function kO(MM, rM, iM) {
      const OM = ~iM,
        SM = MM.changeTrees;
      for (const jM in SM) {
        const MM = SM[jM],
          iM = MM.visibleViews;
        void 0 !== iM && rM < iM.length && (iM[rM] &= OM);
        const aM = MM.subscribedViews;
        void 0 !== aM && rM < aM.length && (aM[rM] &= OM);
        const PM = MM.tagViews;
        void 0 !== PM && PM.forEach((MM => {
          rM < MM.length && (MM[rM] &= OM)
        }))
      }
    }
    const ZO = new FinalizationRegistry((MM => {
      let {
        root: rM,
        id: iM,
        slot: OM,
        bit: SM
      } = MM;
      kO(rM, OM, SM), rM.activeViews.delete(iM);
      for (const jM of rM.streamTrees) jM._dropView(iM);
      rM.releaseViewId(iM)
    }));

    function oO(MM) {
      if (void 0 === MM) return "undefined";
      if (null === MM) return "null";
      const rM = typeof MM;
      return "string" === rM ? JSON.stringify(MM.length > 30 ? `${MM.slice(0,30)}\u2026` : MM) : "object" !== rM && "function" !== rM ? `${rM} ${String(MM)}` : Array.isArray(MM) ? `Array(${MM.length})` : MM.constructor?.name ?? "Object"
    }
    class fO {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = MM, MM && (this.items = [])
      }
      _bindRoot(MM) {
        void 0 === this._root && (this._root = MM, this.id = MM.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), MM.registerView(this), ZO.register(this, {
          root: MM,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), kO(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), ZO.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(MM) {
        const rM = MM.visibleViews,
          iM = this._slot;
        return void 0 !== rM && iM < rM.length && 0 !== (rM[iM] & this._bit)
      }
      markVisible(MM) {
        const rM = this._slot;
        let iM = MM.visibleViews;
        for (void 0 === iM && (iM = MM.visibleViews = []); iM.length <= rM;) iM.push(0);
        iM[rM] |= this._bit
      }
      unmarkVisible(MM) {
        const rM = MM.visibleViews;
        if (void 0 === rM) return;
        const iM = this._slot;
        iM < rM.length && (rM[iM] &= ~this._bit)
      }
      isSubscribed(MM) {
        const rM = MM.subscribedViews,
          iM = this._slot;
        return void 0 !== rM && iM < rM.length && 0 !== (rM[iM] & this._bit)
      }
      _setSubscribed(MM) {
        const rM = this._slot;
        let iM = MM.subscribedViews;
        for (void 0 === iM && (iM = MM.subscribedViews = []); iM.length <= rM;) iM.push(0);
        iM[rM] |= this._bit
      }
      _clearSubscribed(MM) {
        const rM = MM.subscribedViews;
        if (void 0 === rM) return;
        const iM = this._slot;
        iM < rM.length && (rM[iM] &= ~this._bit)
      }
      hasTagOnTree(MM, rM) {
        const iM = MM.tagViews;
        if (void 0 === iM) return !1;
        const OM = this._slot,
          SM = this._bit;
        for (let jM = rM; 0 !== jM; jM &= jM - 1) {
          const MM = iM.get(jM & -jM);
          if (void 0 !== MM && OM < MM.length && 0 !== (MM[OM] & SM)) return !0
        }
        return !1
      }
      addTag(MM, rM) {
        if (rM === dO) return;
        let iM = MM.tagViews;
        void 0 === iM && (iM = MM.tagViews = new Map);
        const OM = this._slot,
          SM = this._bit;
        for (let jM = rM; jM > 0; jM &= jM - 1) {
          const MM = jM & -jM;
          let rM = iM.get(MM);
          for (void 0 === rM && (rM = [], iM.set(MM, rM)); rM.length <= OM;) rM.push(0);
          rM[OM] |= SM
        }
      }
      removeTag(MM, rM) {
        if (rM === dO) return;
        const iM = MM.tagViews;
        if (void 0 === iM) return;
        const OM = this._slot,
          SM = ~this._bit;
        for (let jM = rM; jM > 0; jM &= jM - 1) {
          const MM = iM.get(jM & -jM);
          void 0 !== MM && OM < MM.length && (MM[OM] &= SM)
        }
      }
      removeAllTagsOnTree(MM) {
        const rM = MM.tagViews;
        if (void 0 === rM) return;
        const iM = this._slot,
          OM = ~this._bit;
        rM.forEach((MM => {
          iM < MM.length && (MM[iM] &= OM)
        }))
      }
      add(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dO,
          iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(MM, rM, iM, !1)
      }
      _addImmediate(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dO;
        this._add(MM, rM, !0, !0)
      }
      _add(MM, rM, iM, OM) {
        const jM = MM?.[JM];
        if (!jM) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${oO(MM)}`), !1;
        const aM = jM.parent;
        if (!aM && 0 !== MM[PM]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${jM.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== jM.root && this._bindRoot(jM.root);
        const nM = aM?.[JM];
        if (!OM && nM?.isStreamCollection) return Wr(aM, this.id, jM.parentIndex), !0;
        const QM = MM.constructor[Symbol.metadata],
          zM = this.isVisible(jM);
        if (!this.iterable || !iM || zM && -1 !== this.items.indexOf(MM) || this.items.push(MM), this.markVisible(jM), iM && aM && this.addParentOf(jM, rM), !OM && jM.isStreamCollection) return !0;
        if (rM === dO && jM.isNew) return this._markSubtreeVisible(jM, rM), !1;
        let LM = this.changes.get(MM[PM]);
        void 0 === LM && (LM = new Map, this.changes.set(MM[PM], LM));
        let mM = !1;
        const HM = jM.encDescriptor.tags;
        if (jM.forEachChild(((MM, iM) => {
            const OM = HM[iM];
            if (void 0 !== OM) {
              if (!(OM === dO || rM !== dO && 0 !== (OM & rM))) return
            }
            this.add(MM.ref, rM, !1) && (mM = !0)
          })), rM !== dO) {
          this.addTag(jM, rM);
          const MM = QM?.[RM];
          if (void 0 !== MM)
            for (let iM = rM; iM > 0; iM &= iM - 1) MM[iM & -iM]?.forEach((MM => {
              jM.getChange(MM) !== SM.DELETE && LM.set(MM, SM.ADD)
            }))
        }
        if ((rM === dO || !zM) && (!jM.isNew || mM))
          if (jM.isArray && "string" !== typeof jM.refTarget[dM]) jM.refTarget.items.length > 0 && (LM.set(-1, SM.ADD), mM = !0);
          else {
            const MM = jM.encDescriptor.tags;
            jM.forEachLive((iM => {
              const OM = MM[iM];
              (void 0 === OM || OM === dO || rM !== dO && 0 !== (OM & rM)) && (LM.set(iM, SM.ADD), mM = !0)
            }))
          } return mM
      }
      _markSubtreeVisible(MM, rM) {
        const iM = MM.encDescriptor.tags;
        MM.forEachChild(((MM, OM) => {
          const SM = iM[OM];
          if (void 0 !== SM) {
            if (!(SM === dO || rM !== dO && 0 !== (SM & rM))) return
          }
          MM.isNew ? (this.markVisible(MM), this._markSubtreeVisible(MM, rM)) : this._add(MM.ref, rM, !1, !1)
        }))
      }
      addParentOf(MM, rM) {
        const iM = MM.parent[JM],
          OM = MM.parentIndex;
        this.isVisible(iM) || this.markVisible(iM);
        const jM = iM.parent?.[JM];
        if (jM && this.addParentOf(iM, rM), iM.hasFilteredFields && iM.getChange(OM) !== SM.DELETE) {
          let jM = this.changes.get(iM.ref[PM]);
          void 0 === jM && (jM = new Map, this.changes.set(iM.ref[PM], jM));
          const aM = iM.encDescriptor.tags[OM];
          void 0 !== aM && aM !== dO && 0 !== (aM & rM) && this.addTag(iM, rM), jM.set(iM.isArray ? MM : OM, SM.ADD)
        }
      }
      _touchAncestorsOf(MM) {
        let rM = MM.parent?.[JM];
        if (void 0 === rM) return;
        const iM = [];
        for (; void 0 !== rM;) {
          if (rM.hasFilteredFields) {
            const MM = rM.ref[PM];
            if (this.changes.has(MM)) break;
            iM.push(rM)
          }
          rM = rM.parent?.[JM]
        }
        for (let OM = iM.length - 1; OM >= 0; OM--) this.changes.set(iM[OM].ref[PM], new Map)
      }
      remove(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dO,
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = MM?.[JM];
        if (!OM) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${oO(MM)}`), this;
        const jM = OM.parent?.[JM];
        if (jM?.isStreamCollection) return this.unmarkVisible(OM), this.iterable && !iM && DO(this.items, this.items.indexOf(MM)),
          function(MM, rM, iM, OM, jM) {
            const aM = MM._stream;
            if (void 0 === aM) return !1;
            const PM = aM.pendingByView.get(rM);
            if (PM?.has(OM)) return PM.delete(OM), !1;
            const nM = aM.sentByView.get(rM);
            if (nM?.has(OM)) {
              nM.delete(OM);
              let MM = jM.get(iM);
              return void 0 === MM && (MM = new Map, jM.set(iM, MM)), MM.set(OM, SM.DELETE), !0
            }
          }(OM.parent, this.id, OM.parent[PM], OM.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(OM), this;
        if (OM.isStreamCollection) {
          this.unmarkVisible(OM), this.iterable && !iM && DO(this.items, this.items.indexOf(MM));
          const rM = OM.ref,
            jM = rM._stream;
          if (void 0 !== jM) {
            jM.pendingByView.get(this.id)?.clear();
            const MM = jM.sentByView.get(this.id);
            if (void 0 !== MM && MM.size > 0) {
              const iM = rM[PM];
              let OM = this.changes.get(iM);
              void 0 === OM && (OM = new Map, this.changes.set(iM, OM));
              for (const rM of MM) OM.set(rM, SM.DELETE);
              MM.clear()
            }
          }
          return this
        }
        this.unmarkVisible(OM), this.iterable && !iM && DO(this.items, this.items.indexOf(MM));
        const aM = OM.ref,
          nM = aM.constructor[Symbol.metadata],
          QM = aM[PM];
        this._touchAncestorsOf(OM);
        let zM = this.changes.get(QM);
        if (void 0 === zM && (zM = new Map, this.changes.set(QM, zM)), rM === dO) {
          const MM = OM.parent;
          if (MM && !Ir.isValidInstance(MM) && OM.isFiltered) {
            const rM = jM.isArray ? OM : OM.parentIndex,
              iM = MM[PM];
            let aM = this.changes.get(iM);
            void 0 === aM ? (aM = new Map, this.changes.set(iM, aM)) : aM.get(rM) === SM.ADD && this._dropPendingEntries(OM), aM.set(rM, SM.DELETE), this._recursiveDeleteVisibleChangeTree(OM)
          } else nM?.[uM]?.forEach((MM => this._removeViewField(OM, zM, MM)))
        } else {
          const MM = nM?.[RM];
          if (void 0 !== MM)
            for (let iM = rM; iM > 0; iM &= iM - 1) MM[iM & -iM]?.forEach((MM => this._removeViewField(OM, zM, MM)))
        }
        return void 0 === rM ? this.removeAllTagsOnTree(OM) : this.removeTag(OM, rM), this
      }
      has(MM) {
        return this.isVisible(MM[JM])
      }
      hasTag(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dO;
        return this.hasTagOnTree(MM[JM], rM)
      }
      subscribe(MM, rM) {
        const iM = MM?.[JM];
        if (!iM) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${oO(MM)}`), this;
        if (void 0 === this._root && void 0 !== iM.root && this._bindRoot(iM.root), void 0 !== rM)
          if (iM.isStreamCollection) {
            const iM = tr(MM);
            null === rM ? iM.priorityByView?.delete(this.id) : (iM.priorityByView ??= new Map).set(this.id, rM)
          } else {
            const rM = MM?.constructor?.name ?? "collection",
              OM = iM.parent;
            if (void 0 === OM) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${rM} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const MM = OM?.constructor?.[Symbol.metadata]?.[iM.parentIndex]?.name,
                SM = MM ? `${OM.constructor.name}#${MM}` : rM;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${SM} is a ${rM}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(iM)) return this;
        const OM = void 0 !== iM.parent && !this.isVisible(iM);
        if (OM ? (this.addParentOf(iM, dO), this._add(MM, dO, !1, !1)) : this.markVisible(iM), this._setSubscribed(iM), iM.isStreamCollection) {
          const rM = MM;
          iM.forEachChild(((MM, iM) => {
            Wr(rM, this.id, iM)
          }))
        } else OM || iM.forEachChild((MM => {
          this.markVisible(MM)
        }));
        return this
      }
      unsubscribe(MM) {
        const rM = MM?.[JM];
        if (!rM) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${oO(MM)}`), this;
        if (!this.isSubscribed(rM)) return this;
        this._clearSubscribed(rM);
        const iM = rM.ref[PM];
        if (rM.isStreamCollection) {
          const rM = MM._stream;
          if (void 0 !== rM) {
            rM.pendingByView.get(this.id)?.clear();
            const MM = rM.sentByView.get(this.id);
            if (void 0 !== MM && MM.size > 0) {
              let rM = this.changes.get(iM);
              void 0 === rM && (rM = new Map, this.changes.set(iM, rM));
              for (const iM of MM) rM.set(iM, SM.DELETE);
              MM.clear()
            }
          }
        } else {
          const MM = rM.isArray;
          let OM = this.changes.get(iM);
          rM.forEachChild(((rM, jM) => {
            void 0 === OM && (OM = new Map, this.changes.set(iM, OM)), OM.set(MM ? rM : jM, SM.DELETE), this.unmarkVisible(rM)
          }))
        }
        return this.unmarkVisible(rM), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let MM = 0, rM = this.items.length; MM < rM; MM++) this.remove(this.items[MM], dO, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(MM) {
        let rM = this.isVisible(MM);
        if (!rM && MM.isVisibilitySharedWithParent)
          if (this.isVisible(MM.parent[JM])) this.markVisible(MM), rM = !0;
          else
            for (let iM = MM.extraParents; void 0 !== iM; iM = iM.next) {
              const OM = iM.ref[JM];
              if (OM.isFiltered && this.isVisible(OM)) {
                this.markVisible(MM), rM = !0;
                break
              }
            }
        return rM
      }
      _recursiveDeleteVisibleChangeTree(MM) {
        MM.forEachChild((MM => {
          this.unmarkVisible(MM), this._recursiveDeleteVisibleChangeTree(MM)
        }))
      }
      _dropPendingEntries(MM) {
        this.changes.delete(MM.ref[PM]), MM.forEachChild((MM => this._dropPendingEntries(MM)))
      }
      _removeViewField(MM, rM, iM) {
        const OM = rM.get(iM) === SM.ADD;
        rM.set(iM, SM.DELETE);
        const jM = MM.ref[MM.encDescriptor.names[iM]],
          aM = jM?.[JM];
        aM && (this.unmarkVisible(aM), this._recursiveDeleteVisibleChangeTree(aM), OM && this._dropPendingEntries(aM))
      }
    }

    function YO(MM) {
      MM.structSwitchEmitted || (MM.shouldEmitSwitch && (MM.buffer[MM.it.offset++] = 255, rr.number(MM.buffer, MM.ref[PM], MM.it)), MM.structSwitchEmitted = !0)
    }

    function NO(MM, rM) {
      vO(MM, rM, SM.ADD)
    }

    function AO(MM, rM) {
      if (rM._fullSyncGen === MM.gen) return;
      rM._fullSyncGen = MM.gen;
      if (!MM.hasView || MM.view.isChangeTreeVisible(rM)) {
        const iM = rM.encDescriptor;
        MM.changeTree = rM, MM.ref = rM.ref, MM.encoder = iM.encoder, MM.filter = iM.filter, MM.metadata = iM.metadata, MM.treeIsFiltered = rM.isFiltered, MM.isSchema = iM.isSchema, MM.filterBitmask = iM.filterBitmask, MM.tags = iM.tags, MM.structSwitchEmitted = !1, MM.shouldEmitSwitch = MM.hasView || MM.it.offset > MM.initialOffset || rM !== MM.rootChangeTree, rM.isArray && rM.collDirty.size > 0 && (rM.flags |= 512), Si(rM, MM, NO)
      }
      li(rM, MM, xO)
    }

    function xO(MM, rM, iM) {
      AO(MM, rM)
    }

    function vO(MM, rM, iM) {
      if (rM < 0) {
        if (MM.treeIsFiltered !== MM.emitFiltered) return;
        return YO(MM), void(MM.buffer[MM.it.offset++] = 255 & Math.abs(rM))
      }
      if ((MM.isSchema ? MM.treeIsFiltered || (rM < 32 ? 0 !== (MM.filterBitmask & 1 << rM) : void 0 !== MM.tags[rM]) : MM.treeIsFiltered) !== MM.emitFiltered) return;
      const OM = MM.isEncodeAll ? SM.ADD : iM;
      void 0 !== OM && (void 0 === MM.filter || MM.filter(MM.ref, rM, MM.view)) && (YO(MM), MM.encoder(MM.self, MM.buffer, MM.changeTree, rM, OM, MM.it, MM.isEncodeAll, MM.hasView, MM.metadata))
    }

    function FO(MM, rM) {
      const iM = new Uint8Array(MM.length + rM.length);
      return iM.set(MM, 0), iM.set(rM, MM.length), iM
    }
    class BO {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(BO.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(MM, rM) {
        this.context = Nr.cache(MM.constructor), this.root = rM ?? new sO(this.context), this.setState(MM)
      }
      setState(MM) {
        this.state = MM, this.state[JM].setRoot(this.root)
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
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.offset;
        return this._encodeChannel(MM, rM, iM, OM, !1)
      }
      encodeUnreliable() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.offset;
        return this._encodeChannel(MM, rM, iM, OM, !0)
      }
      _encodeChannel(MM, rM, iM, OM, SM) {
        this.root.pendingFilterRefresh.length > 0 && ai(this.root);
        const jM = void 0 !== rM,
          aM = this.state[JM],
          PM = this._encodeCtx;
        PM.self = this, PM.buffer = iM, PM.it = MM, PM.view = rM, PM.isEncodeAll = !1, PM.hasView = jM, PM.emitFiltered = jM;
        let nM = SM ? this.root.unreliableChanges : this.root.changes;
        for (; nM = nM.next;) {
          const iM = nM.changeTree;
          if (jM && !rM.isChangeTreeVisible(iM)) continue;
          const QM = SM ? iM.unreliableRecorder : iM;
          if (!QM || !QM.has()) continue;
          const zM = iM.encDescriptor;
          PM.changeTree = iM, PM.ref = iM.ref, PM.encoder = zM.encoder, PM.filter = zM.filter, PM.metadata = zM.metadata, PM.treeIsFiltered = iM.isFiltered, PM.isSchema = zM.isSchema, PM.filterBitmask = zM.filterBitmask, PM.tags = zM.tags, PM.structSwitchEmitted = !1, PM.isRootTree = iM === aM, PM.shouldEmitSwitch = jM || MM.offset > OM || !PM.isRootTree, QM.forEachWithCtx(PM, vO)
        }
        return SM || jM || !this._isStreamBroadcastMode || this._emitStreamBroadcast(iM, MM), MM.offset > iM.byteLength ? (iM = this._resizeBuffer(iM, MM.offset), MM.offset = OM, this._encodeChannel(MM, rM, iM, OM, SM)) : iM.subarray(0, MM.offset)
      }
      encodeFullSync(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : MM.offset;
        this.root.pendingFilterRefresh.length > 0 && ai(this.root);
        const jM = void 0 !== OM,
          aM = this.state[JM],
          PM = this._encodeCtx;
        return PM.self = this, PM.buffer = rM, PM.it = MM, PM.view = OM, PM.isEncodeAll = !0, PM.hasView = jM, PM.emitFiltered = iM, PM.gen = ++this._fullSyncGen, PM.initialOffset = SM, PM.rootChangeTree = aM, AO(PM, aM), MM.offset > rM.byteLength ? (rM = this._resizeBuffer(rM, MM.offset), MM.offset = SM, this.encodeFullSync(MM, rM, iM, OM, SM)) : rM.subarray(0, MM.offset)
      }
      _resizeBuffer(MM, rM) {
        const iM = Math.ceil(rM / BO.BUFFER_SIZE) * BO.BUFFER_SIZE,
          OM = new Uint8Array(iM);
        return OM.set(MM), MM === this.sharedBuffer && (this.sharedBuffer = OM), OM
      }
      encodeAll() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(MM, rM, !1)
      }
      encodeAllView(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const SM = iM.offset;
        return OM = this.encodeFullSync(iM, OM, !0, MM, SM), FO(OM.subarray(0, rM), OM.subarray(SM, iM.offset))
      }
      ensureCapacity(MM, rM) {
        if (rM + BO.BUFFER_SIZE <= MM.byteLength) return MM;
        const iM = Math.ceil((rM + BO.BUFFER_SIZE) / BO.BUFFER_SIZE) * BO.BUFFER_SIZE,
          OM = new Uint8Array(iM);
        return OM.set(MM.subarray(0, rM)), MM === this.sharedBuffer && (this.sharedBuffer = OM), OM
      }
      encodeView(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          jM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const aM = iM.offset;
        this._emitStreamPriority(MM);
        for (const nM of MM.changes.keys()) {
          const rM = MM.changes.get(nM),
            jM = this.root.changeTrees[nM];
          if (void 0 === jM) {
            MM.changes.delete(nM);
            continue
          }
          if (0 === rM.size) continue;
          const aM = jM.encDescriptor,
            QM = aM.encoder,
            zM = aM.metadata,
            LM = jM.ref,
            HM = jM.refTarget;
          OM = this.ensureCapacity(OM, iM.offset), OM[iM.offset++] = 255, rr.number(OM, LM[PM], iM);
          for (const [nM, hM] of rM) {
            let rM;
            if (-1 === nM) {
              const MM = HM.tmpItems,
                rM = HM.deletedIndexes;
              for (let aM = 0; aM < MM.length; aM++) void 0 !== MM[aM] && !0 !== rM[aM] && QM(this, OM, jM, aM, SM.ADD, iM, !1, !0, zM);
              continue
            }
            if ("number" === typeof nM) rM = nM;
            else {
              const iM = nM.indexInParent(LM);
              if (void 0 === iM) continue;
              if (rM = iM, hM === SM.ADD && jM.getChange(rM) === SM.DELETE) {
                MM.changes.delete(nM.ref[PM]);
                continue
              }
            }
            QM(this, OM, jM, rM, void 0 !== HM[mM](rM) && hM || SM.DELETE, iM, !1, !0, zM)
          }
        }
        return MM.changes.clear(), OM = this.encode(iM, MM, OM), jM ? FO(OM.subarray(0, rM), OM.subarray(aM, iM.offset)) : OM.subarray(aM, iM.offset)
      }
      encodeUnreliableView(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const SM = iM.offset;
        return OM = this.encodeUnreliable(iM, MM, OM, SM), FO(OM.subarray(0, rM), OM.subarray(SM, iM.offset))
      }
      _emitStreamBroadcast(MM, rM) {
        const iM = this.root.streamTrees;
        for (const OM of iM) {
          const iM = OM,
            jM = iM[JM],
            aM = iM[PM];
          if (void 0 === aM) continue;
          const nM = iM._stream,
            QM = nM.broadcastDeletes,
            zM = nM.broadcastPending,
            LM = nM.sentBroadcast,
            HM = QM.size > 0,
            hM = zM.size > 0,
            dM = jM.encDescriptor,
            yM = dM.encoder,
            lM = dM.metadata;
          if (HM || hM) {
            if (MM[rM.offset++] = 255, rr.number(MM, aM, rM), HM) {
              for (const iM of QM) yM(this, MM, jM, iM, SM.DELETE, rM, !1, !1, lM);
              QM.clear()
            }
            const OM = nM.maxPerTick,
              hM = [];
            let dM = 0;
            const EM = [];
            for (const aM of zM) {
              if (dM >= OM) break;
              const PM = iM[mM](aM);
              void 0 !== PM ? (yM(this, MM, jM, aM, SM.ADD, rM, !1, !1, lM), LM.add(aM), hM.push(PM), EM.push(aM), dM++) : EM.push(aM)
            }
            for (const MM of EM) zM.delete(MM);
            for (const iM of hM) {
              const OM = iM[JM];
              if (void 0 === OM) continue;
              const jM = iM[PM];
              if (void 0 === jM) continue;
              MM[rM.offset++] = 255, rr.number(MM, jM, rM);
              const aM = OM.encDescriptor,
                nM = aM.encoder,
                QM = aM.metadata;
              OM.forEachLive((iM => {
                Ir.hasUnreliableAtIndex(QM, iM) || nM(this, MM, OM, iM, SM.ADD, rM, !1, !1, QM)
              }))
            }
          }
          for (const OM of LM) {
            const SM = iM[mM](OM);
            if (void 0 === SM) continue;
            const jM = SM[JM];
            if (void 0 === jM || !jM.has()) continue;
            const aM = SM[PM];
            if (void 0 === aM) continue;
            MM[rM.offset++] = 255, rr.number(MM, aM, rM);
            const nM = jM.encDescriptor,
              QM = nM.encoder,
              zM = nM.metadata;
            jM.forEach(((iM, OM) => {
              iM < 0 || Ir.hasUnreliableAtIndex(zM, iM) || QM(this, MM, jM, iM, OM, rM, !1, !1, zM)
            }))
          }
        }
      }
      _emitStreamPriority(MM) {
        const rM = this.root.streamTrees;
        if (0 === rM.size) return;
        const iM = MM.id;
        for (const OM of rM) {
          const rM = OM,
            jM = rM._stream,
            aM = jM.pendingByView.get(iM);
          if (void 0 === aM || 0 === aM.size) continue;
          const nM = jM.priorityByView?.get(iM),
            QM = void 0 !== nM,
            zM = jM.priority,
            LM = jM.maxPerTick,
            HM = [],
            hM = [];
          if (QM || void 0 !== zM) {
            const iM = [],
              OM = [];
            let SM = 0;
            for (const jM of aM) {
              const aM = rM[mM](jM);
              if (void 0 === aM) {
                hM.push(jM);
                continue
              }
              const PM = QM ? nM(aM) : zM(MM, aM);
              if (SM < LM) {
                let MM = SM++;
                for (; MM > 0 && OM[MM - 1] < PM;) OM[MM] = OM[MM - 1], iM[MM] = iM[MM - 1], MM--;
                OM[MM] = PM, iM[MM] = jM
              } else if (PM > OM[LM - 1]) {
                let MM = LM - 1;
                for (; MM > 0 && OM[MM - 1] < PM;) OM[MM] = OM[MM - 1], iM[MM] = iM[MM - 1], MM--;
                OM[MM] = PM, iM[MM] = jM
              }
            }
            for (let MM = 0; MM < SM; MM++) HM.push(iM[MM])
          } else
            for (const MM of aM) {
              if (HM.length >= LM) break;
              HM.push(MM)
            }
          for (const MM of hM) aM.delete(MM);
          const dM = HM.length;
          let yM = jM.sentByView.get(iM);
          void 0 === yM && (yM = new Set, jM.sentByView.set(iM, yM));
          for (let iM = 0; iM < dM; iM++) {
            const OM = HM[iM],
              jM = rM[mM](OM);
            if (void 0 === jM) {
              aM.delete(OM);
              continue
            }
            MM._addImmediate(jM);
            const nM = jM[JM];
            if (void 0 !== nM) {
              const rM = jM[PM];
              let iM = MM.changes.get(rM);
              void 0 === iM && (iM = new Map, MM.changes.set(rM, iM));
              const OM = nM.metadata;
              nM.forEachLive((MM => {
                Ir.hasUnreliableAtIndex(OM, MM) || iM.set(MM, SM.ADD)
              }))
            }
            aM.delete(OM), yM.add(OM)
          }
        }
      }
      discardChanges() {
        const MM = this.root.changes;
        let rM = MM.next;
        const iM = this.root;
        for (; rM;) {
          const MM = rM.next;
          rM.changeTree.endEncode(), iM.releaseNode(rM), rM = MM
        }
        MM.next = void 0, MM.tail = void 0
      }
      discardUnreliableChanges() {
        const MM = this.root.unreliableChanges;
        let rM = MM.next;
        const iM = this.root;
        for (; rM;) {
          const MM = rM.next;
          rM.changeTree.endEncodeUnreliable(), iM.releaseNode(rM), rM = MM
        }
        MM.next = void 0, MM.tail = void 0
      }
      tryEncodeTypeId(MM, rM, iM, OM) {
        const SM = this.context.getTypeId(rM),
          jM = this.context.getTypeId(iM);
        void 0 !== jM ? SM !== jM && (MM[OM.offset++] = 213, rr.number(MM, jM, OM)) : console.warn(`@colyseus/schema WARNING: Class "${iM.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const MM = this.root;
        if (0 === MM.streamTrees.size) return !1;
        const rM = 0 === MM.activeViews.size;
        for (const iM of MM.streamTrees)
          if (rM ? pr(iM) : Rr(iM, MM)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class XO extends Error {
      constructor(MM) {
        super(MM), this.name = "DecodingWarning"
      }
    }
    const IO = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class KO {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(MM, rM), void 0 === rM[PM] ? (IO.value = MM, Object.defineProperty(rM, PM, IO)) : rM[PM] !== MM && (rM[PM] = MM), iM && (this.refCount[MM] = (this.refCount[MM] || 0) + 1), this.deletedRefs.has(MM) && this.deletedRefs.delete(MM)
      }
      removeRef(MM) {
        const rM = this.refCount[MM];
        if (void 0 !== rM)
          if (0 !== rM)(this.refCount[MM] = rM - 1) <= 0 && this.deletedRefs.add(MM);
          else try {
            const rM = this.refs.get(MM);
            throw new XO(`trying to remove refId '${MM}' with 0 refCount (${rM.constructor.name}: ${JSON.stringify(rM)})`)
          } catch (PS) {
            console.warn(PS)
          } else try {
            throw new XO("trying to remove refId that doesn't exist: " + MM)
          } catch (PS) {
            console.warn(PS)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((MM => {
          if (this.refCount[MM] > 0) return;
          const rM = this.refs.get(MM),
            iM = rM.constructor[Symbol.metadata];
          if (null != iM)
            for (const OM in iM) {
              const MM = rM[iM[OM].name];
              if ("object" === typeof MM && MM) {
                const rM = MM[PM];
                void 0 === rM || this.deletedRefs.has(rM) || this.removeRef(rM)
              }
            } else "function" === typeof rM[dM] && Array.from(rM.values()).forEach((MM => {
              const rM = MM[PM];
              void 0 === rM || this.deletedRefs.has(rM) || this.removeRef(rM)
            }));
          this.refs.delete(MM), delete this.refCount[MM], delete this.callbacks[MM]
        })), this.deletedRefs.clear()
      }
      addCallback(MM, rM, iM) {
        if (void 0 === MM) {
          const MM = "number" === typeof rM ? SM[rM] : rM;
          throw new Error(`Can't addCallback on '${MM}' (refId is undefined)`)
        }
        return this.callbacks[MM] || (this.callbacks[MM] = {}), this.callbacks[MM][rM] || (this.callbacks[MM][rM] = []), this.callbacks[MM][rM].push(iM), () => this.removeCallback(MM, rM, iM)
      }
      removeCallback(MM, rM, iM) {
        const OM = this.callbacks?.[MM]?.[rM]?.indexOf(iM);
        void 0 !== OM && -1 !== OM && DO(this.callbacks[MM][rM], OM)
      }
    }
    class qO {
      context;
      state;
      root;
      currentRefId = 0;
      mD;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(MM, rM) {
        this.setState(MM), this.context = rM || new Nr(MM.constructor)
      }
      setState(MM) {
        this.state = MM, this.root = new KO, this.root.addRef(0, MM)
      }
      decode(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const SM = void 0 !== this.mD ? [] : null,
          jM = this.root,
          aM = MM.byteLength;
        let PM = iM.constructor[zM];
        for (this.currentRefId = 0; rM.offset < aM;) {
          if (MM[rM.offset] == OM) {
            rM.offset++, iM[UM]?.();
            const OM = Er.number(MM, rM),
              SM = jM.refs.get(OM);
            SM ? (iM = SM, PM = iM.constructor[zM], this.currentRefId = OM) : (console.error(`"refId" not found: ${OM}`, {
              previousRef: iM,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(MM, rM, aM));
            continue
          } - 1 !== PM(this, MM, rM, iM, SM) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(MM, rM, aM))
        }
        return iM[UM]?.(), null !== this.resyncVisited && function(MM, rM) {
          MM.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : xi(MM, MM.state, new Set, rM)
        }(this, SM), null !== SM && this.mD?.(SM), jM.garbageCollectDeletedRefs(), SM
      }
      decodeResync(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(MM, rM)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(MM, rM, iM) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const SM = {
          offset: rM.offset
        };
        for (; rM.offset < iM && (MM[rM.offset] !== OM || (SM.offset = rM.offset + 1, !this.root.refs.has(Er.number(MM, SM))));) rM.offset++
      }
      getInstanceType(MM, rM, iM) {
        let OM;
        if (213 === MM[rM.offset]) {
          rM.offset++;
          const iM = Er.number(MM, rM);
          OM = this.context.get(iM)
        }
        return OM || iM
      }
      createInstanceOfType(MM) {
        return MM.initializeForDecoder()
      }
      removeChildRefs(MM, rM) {
        const iM = "string" !== typeof MM[dM],
          OM = MM[PM];
        MM.forEach(((jM, aM) => {
          rM?.push({
            ref: MM,
            refId: OM,
            op: SM.DELETE,
            field: aM,
            value: void 0,
            previousValue: jM
          }), iM && this.root.removeRef(jM[PM])
        }))
      }
    }
    const TO = uO({
        min: JO.float64(),
        max: JO.float64(),
        bits: JO.uint8(),
        mode: JO.uint8()
      }, "QuantizedDescriptor"),
      VO = uO({
        name: JO.string(),
        type: JO.string(),
        referencedType: JO.number(),
        childPrimitive: JO.string(),
        quantized: JO.ref(TO).optional()
      }, "ReflectionField"),
      cO = uO({
        id: JO.number(),
        extendsId: JO.number(),
        fields: JO.array(VO)
      }, "ReflectionType"),
      MS = uO({
        types: JO.array(cO),
        rootType: JO.number()
      }, "Reflection");

    function rS(MM) {
      const rM = MM.root,
        iM = rM.callbacks,
        OM = new WeakMap;
      let jM;

      function aM(MM, iM) {
        let QM = iM.instance?.constructor[Symbol.metadata] || MM,
          zM = iM.instance && "function" === typeof iM.instance.forEach || MM && !pO.is(MM);
        if (QM && !zM) {
          const MM = function(MM, SM, aM, nM) {
            return nM && void 0 !== iM.instance[SM] && !OM.has(jM) && aM(iM.instance[SM], void 0), rM.addCallback(MM[PM], SM, aM)
          };
          return new Proxy({
            listen: function(rM, SM) {
              let aM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (iM.instance) return MM(iM.instance, rM, SM, aM);
              {
                let PM = () => {};
                return iM.onInstanceAvailable(((iM, nM) => {
                  PM = MM(iM, rM, SM, aM && nM && !OM.has(jM))
                })), () => PM()
              }
            },
            onChange: function(MM) {
              return rM.addCallback(iM.instance[PM], SM.REPLACE, MM)
            },
            bindTo: function(MM, OM) {
              return OM || (OM = Object.keys(QM).map((MM => QM[MM].name))), rM.addCallback(iM.instance[PM], SM.REPLACE, (() => {
                OM.forEach((rM => MM[rM] = iM.instance[rM]))
              }))
            }
          }, {
            get(MM, rM) {
              const OM = QM[QM[rM]];
              if (OM) {
                const MM = iM.instance?.[rM],
                  SM = OM => {
                    const SM = nM(iM.instance).listen(rM, ((MM, rM) => {
                      OM(MM, !1), SM?.()
                    }), !1);
                    void 0 !== MM?.[PM] && OM(MM, !0)
                  };
                return aM(OM.type, {
                  instance: void 0 !== MM?.[PM] && MM,
                  parentInstance: iM.instance,
                  onInstanceAvailable: SM
                })
              }
              return MM[rM]
            },
            has: (MM, rM) => void 0 !== QM[rM],
            set(MM, rM, iM) {
              throw new Error("not allowed")
            },
            deleteProperty(MM, rM) {
              throw new Error("not allowed")
            }
          })
        } {
          const MM = function(MM, iM, aM) {
              return aM && MM.forEach(((MM, rM) => iM(MM, rM))), rM.addCallback(MM[PM], SM.ADD, ((MM, rM) => {
                OM.set(iM, !0), jM = iM, iM(MM, rM), OM.delete(iM), jM = void 0
              }))
            },
            aM = function(MM, iM) {
              return rM.addCallback(MM[PM], SM.DELETE, iM)
            },
            nM = function(MM, iM) {
              return rM.addCallback(MM[PM], SM.REPLACE, iM)
            };
          return new Proxy({
            PU: function(rM) {
              let SM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (iM.instance) return MM(iM.instance, rM, SM && !OM.has(jM));
              if (iM.onInstanceAvailable) {
                let aM = () => {};
                return iM.onInstanceAvailable(((iM, PM) => {
                  aM = MM(iM, rM, SM && PM && !OM.has(jM))
                })), () => aM()
              }
            },
            vW: function(MM) {
              if (iM.instance) return aM(iM.instance, MM);
              if (iM.onInstanceAvailable) {
                let rM = () => {};
                return iM.onInstanceAvailable((iM => {
                  rM = aM(iM, MM)
                })), () => rM()
              }
            },
            onChange: function(MM) {
              if (iM.instance) return nM(iM.instance, MM);
              if (iM.onInstanceAvailable) {
                let rM = () => {};
                return iM.onInstanceAvailable((iM => {
                  rM = nM(iM, MM)
                })), () => rM()
              }
            }
          }, {
            get(MM, rM) {
              if (!MM[rM]) throw new Error(`Can't access '${rM}' through callback proxy. access the instance directly.`);
              return MM[rM]
            },
            has: (MM, rM) => void 0 !== MM[rM],
            set(MM, rM, iM) {
              throw new Error("not allowed")
            },
            deleteProperty(MM, rM) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function nM(MM) {
        return aM(void 0, {
          instance: MM
        })
      }
      return MM.mD = function(MM) {
        const rM = new Set;
        for (let OM = 0, jM = MM.length; OM < jM; OM++) {
          const jM = MM[OM],
            aM = jM.refId,
            nM = jM.ref,
            QM = iM[aM];
          if (QM) {
            if ((jM.op & SM.DELETE) === SM.DELETE && pO.isSchema(jM.previousValue)) {
              const MM = iM[jM.previousValue[PM]]?.[SM.DELETE];
              for (let rM = MM?.length - 1; rM >= 0; rM--) MM[rM]()
            }
            if (pO.isSchema(nM)) {
              if (!rM.has(aM)) {
                const MM = QM?.[SM.REPLACE];
                for (let rM = MM?.length - 1; rM >= 0; rM--) MM[rM]()
              }
              if (QM.hasOwnProperty(jM.field)) {
                const MM = QM[jM.field];
                for (let rM = MM?.length - 1; rM >= 0; rM--) MM[rM](jM.value, jM.previousValue)
              }
            } else {
              if ((jM.op & SM.DELETE) === SM.DELETE) {
                if (void 0 !== jM.previousValue) {
                  const MM = QM[SM.DELETE];
                  for (let rM = MM?.length - 1; rM >= 0; rM--) MM[rM](jM.previousValue, jM.dynamicIndex ?? jM.field)
                }
                if ((jM.op & SM.ADD) === SM.ADD) {
                  const MM = QM[SM.ADD];
                  for (let rM = MM?.length - 1; rM >= 0; rM--) MM[rM](jM.value, jM.dynamicIndex ?? jM.field)
                }
              } else if ((jM.op & SM.ADD) === SM.ADD && jM.previousValue !== jM.value) {
                const MM = QM[SM.ADD];
                for (let rM = MM?.length - 1; rM >= 0; rM--) MM[rM](jM.value, jM.dynamicIndex ?? jM.field)
              }
              if (jM.value !== jM.previousValue && (void 0 !== jM.value || void 0 !== jM.previousValue)) {
                const MM = QM[SM.REPLACE];
                for (let rM = MM?.length - 1; rM >= 0; rM--) MM[rM](jM.value, jM.dynamicIndex ?? jM.field)
              }
            }
            rM.add(aM)
          }
        }
      }, nM
    }

    function iS(MM, rM) {
      MM.mD = rM
    }
    MS.encode = function(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const iM = MM.context,
        OM = new MS,
        SM = new BO(OM),
        jM = iM.schemas.get(MM.state.constructor);
      jM > 0 && (OM.rootType = jM);
      const aM = new Set,
        PM = {},
        nM = MM => {
          if (void 0 === MM.extendsId || aM.has(MM.extendsId)) {
            aM.add(MM.id), OM.types.push(MM);
            const rM = PM[MM.id];
            void 0 !== rM && (delete PM[MM.id], rM.forEach((MM => nM(MM))))
          } else void 0 === PM[MM.extendsId] && (PM[MM.extendsId] = []), PM[MM.extendsId].push(MM)
        };
      iM.schemas.forEach(((MM, rM) => {
        const OM = new cO;
        OM.id = Number(MM);
        const SM = Object.getPrototypeOf(rM);
        SM !== pO && (OM.extendsId = iM.schemas.get(SM));
        const jM = rM[Symbol.metadata];
        if (jM !== SM[Symbol.metadata]) {
          const MM = jM[tM] ?? -1;
          for (let rM = 0; rM <= MM; rM++) {
            const MM = jM[rM];
            if (void 0 === MM) continue;
            const SM = MM.name;
            if (!Object.prototype.hasOwnProperty.call(jM, SM)) continue;
            const aM = new VO;
            let PM;
            if (aM.name = SM, "string" === typeof MM.type) PM = MM.type;
            else if (Zr(MM.type)) {
              const rM = MM.type.quantized;
              PM = "quantized";
              const iM = new TO;
              iM.min = rM.min, iM.max = rM.max, iM.bits = rM.bits, iM.mode = rM.wrap ? 1 : 0, aM.quantized = iM
            } else {
              let rM;
              pO.is(MM.type) ? (PM = "ref", rM = MM.type) : (PM = Object.keys(MM.type)[0], "string" === typeof MM.type[PM] ? aM.childPrimitive = MM.type[PM] : rM = MM.type[PM]), aM.referencedType = rM ? iM.getTypeId(rM) : -1
            }
            aM.type = PM, OM.fields.push(aM)
          }
        }
        nM(OM)
      }));
      for (const QM in PM) PM[QM].forEach((MM => OM.types.push(MM)));
      return SM.encodeAll(rM).slice(0, rM.offset)
    }, MS.decode = function(MM, rM) {
      const iM = new MS;
      new qO(iM).decode(MM, rM);
      const OM = new Nr;
      iM.types.forEach((MM => {
        const rM = OM.get(MM.extendsId) ?? pO,
          iM = class extends rM {};
        Nr.register(iM), OM.add(iM, MM.id)
      }), {});
      iM.types.forEach((MM => {
        const rM = OM.get(MM.id),
          SM = Ir.initialize(rM),
          jM = [];
        let aM = MM;
        do {
          jM.push(aM), aM = iM.types.find((MM => MM.id === aM.extendsId))
        } while (aM);
        let PM = 0;
        jM.reverse().forEach((MM => {
          ((MM, rM, iM) => {
            rM.fields.forEach(((rM, SM) => {
              const jM = iM + SM;
              if (void 0 !== rM.quantized) {
                const iM = rM.quantized;
                Ir.addField(MM, jM, rM.name, {
                  quantized: kr({
                    min: iM.min,
                    max: iM.max,
                    bits: iM.bits,
                    mode: 1 === iM.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== rM.referencedType) {
                const iM = rM.type,
                  SM = OM.get(rM.referencedType) ?? rM.childPrimitive;
                "ref" === iM ? Ir.addField(MM, jM, rM.name, SM) : Ir.addField(MM, jM, rM.name, {
                  [iM]: SM
                })
              } else Ir.addField(MM, jM, rM.name, rM.type)
            }))
          })(SM, MM, PM), PM += MM.fields.length
        }))
      }));
      const SM = new(OM.get(iM.rootType || 0));
      return new qO(SM, OM)
    }, MS.makeEncodable = function(MM) {
      const rM = MM[Symbol.metadata];
      if (!rM) return MM;
      const iM = rM[tM];
      if (void 0 === iM) return MM;
      for (let OM = 0; OM <= iM; OM++) {
        const iM = rM[OM];
        iM && Ir.defineField(MM, rM, OM, iM.name, iM.type)
      }
      return Object.prototype.hasOwnProperty.call(MM, bM) && delete MM[bM], MM
    };
    class OS {
      PL;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(MM) {
        this.PL = MM, this.PL.mD = this.mD.bind(this)
      }
      get callbacks() {
        return this.PL.root.callbacks
      }
      get state() {
        return this.PL.state
      }
      addCallback(MM, rM, iM) {
        return this.PL.root.addCallback(MM, rM, iM)
      }
      addCallbackOrWaitCollectionAvailable(MM, rM, iM, OM) {
        let jM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          aM = () => {};
        const nM = () => aM(),
          QM = MM[rM];
        if (QM && void 0 !== QM[PM]) return jM = jM && !1 === this.isTriggering, iM === SM.ADD && jM && QM.forEach(((MM, rM) => {
          OM(MM, rM)
        })), this.addCallback(QM[PM], iM, OM);
        {
          let SM;
          return SM = this.addCallback(MM[PM], rM, ((MM, rM) => {
            null !== MM && void 0 !== MM && (SM(), aM = this.addCallback(MM[PM], iM, OM))
          })), aM = SM, nM
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(MM, rM, iM) {
        let OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        OM = OM && !1 === this.isTriggering;
        const SM = MM[rM];
        return OM && null !== SM && void 0 !== SM && iM(SM, void 0), this.addCallback(MM[PM], rM, iM)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const MM = arguments.length <= 0 ? void 0 : arguments[0],
            rM = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(MM[PM], SM.REPLACE, rM)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], SM.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], SM.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      PU() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], SM.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], SM.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      vW() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], SM.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], SM.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(MM, rM, iM) {
        let OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const jM = MM.constructor[Symbol.metadata];
        iM || (iM = Object.keys(jM).filter((MM => !isNaN(Number(MM)))).map((MM => jM[MM].name)));
        const aM = () => {
          for (const OM of iM) {
            const iM = MM[OM];
            void 0 !== iM && (rM[OM] = iM)
          }
        };
        return OM && aM(), this.addCallback(MM[PM], SM.REPLACE, aM)
      }
      mD(MM) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let rM = 0, iM = MM.length; rM < iM; rM++) {
          const iM = MM[rM],
            OM = iM.refId,
            jM = iM.ref,
            aM = this.callbacks[OM];
          if (aM) {
            if ((iM.op & SM.DELETE) === SM.DELETE && pO.isSchema(iM.previousValue)) {
              const MM = iM.previousValue[PM],
                rM = this.callbacks[MM]?.[SM.DELETE];
              if (rM)
                for (let iM = rM.length - 1; iM >= 0; iM--) try {
                  rM[iM]()
                } catch (PS) {
                  console.error(PS)
                }
            }
            if (pO.isSchema(jM)) {
              if (!this.uniqueRefIds.has(OM)) {
                const MM = aM[SM.REPLACE];
                if (MM)
                  for (let rM = MM.length - 1; rM >= 0; rM--) try {
                    MM[rM]()
                  } catch (PS) {
                    console.error(PS)
                  }
              }
              const MM = aM[iM.field];
              if (MM)
                for (let rM = MM.length - 1; rM >= 0; rM--) try {
                  MM[rM](iM.value, iM.previousValue)
                } catch (PS) {
                  console.error(PS)
                }
            } else {
              const MM = iM.dynamicIndex ?? iM.field;
              if ((iM.op & SM.DELETE) === SM.DELETE) {
                if (void 0 !== iM.previousValue) {
                  const rM = aM[SM.DELETE];
                  if (rM)
                    for (let OM = rM.length - 1; OM >= 0; OM--) try {
                      rM[OM](iM.previousValue, MM)
                    } catch (PS) {
                      console.error(PS)
                    }
                }
                if ((iM.op & SM.ADD) === SM.ADD) {
                  const rM = aM[SM.ADD];
                  if (rM)
                    for (let OM = rM.length - 1; OM >= 0; OM--) try {
                      rM[OM](iM.value, MM)
                    } catch (PS) {
                      console.error(PS)
                    }
                }
              } else if ((iM.op & SM.ADD) === SM.ADD && iM.previousValue !== iM.value) {
                const rM = aM[SM.ADD];
                if (rM)
                  for (let OM = rM.length - 1; OM >= 0; OM--) try {
                    rM[OM](iM.value, MM)
                  } catch (PS) {
                    console.error(PS)
                  }
              }
              if (iM.value !== iM.previousValue) {
                const rM = aM[SM.REPLACE];
                if (rM)
                  for (let OM = rM.length - 1; OM >= 0; OM--) try {
                    rM[OM](MM, iM.value)
                  } catch (PS) {
                    console.error(PS)
                  }
              }
            }
            this.uniqueRefIds.add(OM)
          }
        }
        this.isTriggering = !1
      }
    }
    const SS = {
      get(MM) {
        if (MM instanceof qO) return new OS(MM);
        if ("PL" in MM.QE) return new OS(MM.QE.PL);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(MM) {
        if (MM instanceof qO) return rS(MM);
        if ("PL" in MM.QE) return rS(MM.QE.PL);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (MM, rM) => iS(MM, rM)
    };
    class jS {
      _free = [];
      _factory;
      _maxSize;
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = MM, this._maxSize = rM.maxSize ?? 1 / 0;
        const iM = rM.preallocate ?? 0;
        for (let OM = 0; OM < iM; OM++) this._free.push(MM())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(MM) {
        pO.reset(MM), this._free.length < this._maxSize && this._free.push(MM)
      }
      get size() {
        return this._free.length
      }
    }

    function aS(MM) {
      return new jS((() => new MM), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Cr("map", {
      constructor: aO
    }), Cr("array", {
      constructor: SO
    }), Cr("set", {
      constructor: nO
    }), Cr("collection", {
      constructor: PO
    })
  },
  9696: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      __addDisposableResource: () => ZM,
      __assign: () => jM,
      __asyncDelegator: () => wM,
      __asyncGenerator: () => bM,
      __asyncValues: () => tM,
      __await: () => eM,
      __awaiter: () => hM,
      __classPrivateFieldGet: () => sM,
      __classPrivateFieldIn: () => kM,
      __classPrivateFieldSet: () => DM,
      __createBinding: () => dM,
      __decorate: () => PM,
      __disposeResources: () => fM,
      __esDecorate: () => QM,
      __exportStar: () => yM,
      __extends: () => SM,
      __generator: () => JM,
      __importDefault: () => WM,
      __importStar: () => pM,
      __makeTemplateObject: () => gM,
      __metadata: () => HM,
      __param: () => nM,
      __propKey: () => LM,
      __read: () => EM,
      __rest: () => aM,
      __rewriteRelativeImportExtension: () => YM,
      __runInitializers: () => zM,
      __setFunctionName: () => mM,
      __spread: () => UM,
      __spreadArray: () => CM,
      __spreadArrays: () => GM,
      __values: () => lM,
      default: () => NM
    });
    var OM = function(MM, rM) {
      return OM = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(MM, rM) {
        MM.__proto__ = rM
      } || function(MM, rM) {
        for (var iM in rM) Object.prototype.hasOwnProperty.call(rM, iM) && (MM[iM] = rM[iM])
      }, OM(MM, rM)
    };

    function SM(MM, rM) {
      if ("function" !== typeof rM && null !== rM) throw new TypeError("Class extends value " + String(rM) + " is not a constructor or null");

      function iM() {
        this.constructor = MM
      }
      OM(MM, rM), MM.prototype = null === rM ? Object.create(rM) : (iM.prototype = rM.prototype, new iM)
    }
    var jM = function() {
      return jM = Object.assign || function(MM) {
        for (var rM, iM = 1, OM = arguments.length; iM < OM; iM++)
          for (var SM in rM = arguments[iM]) Object.prototype.hasOwnProperty.call(rM, SM) && (MM[SM] = rM[SM]);
        return MM
      }, jM.apply(this, arguments)
    };

    function aM(MM, rM) {
      var iM = {};
      for (var OM in MM) Object.prototype.hasOwnProperty.call(MM, OM) && rM.indexOf(OM) < 0 && (iM[OM] = MM[OM]);
      if (null != MM && "function" === typeof Object.getOwnPropertySymbols) {
        var SM = 0;
        for (OM = Object.getOwnPropertySymbols(MM); SM < OM.length; SM++) rM.indexOf(OM[SM]) < 0 && Object.prototype.propertyIsEnumerable.call(MM, OM[SM]) && (iM[OM[SM]] = MM[OM[SM]])
      }
      return iM
    }

    function PM(MM, rM, iM, OM) {
      var SM, jM = arguments.length,
        aM = jM < 3 ? rM : null === OM ? OM = Object.getOwnPropertyDescriptor(rM, iM) : OM;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) aM = Reflect.decorate(MM, rM, iM, OM);
      else
        for (var PM = MM.length - 1; PM >= 0; PM--)(SM = MM[PM]) && (aM = (jM < 3 ? SM(aM) : jM > 3 ? SM(rM, iM, aM) : SM(rM, iM)) || aM);
      return jM > 3 && aM && Object.defineProperty(rM, iM, aM), aM
    }

    function nM(MM, rM) {
      return function(iM, OM) {
        rM(iM, OM, MM)
      }
    }

    function QM(MM, rM, iM, OM, SM, jM) {
      function aM(MM) {
        if (void 0 !== MM && "function" !== typeof MM) throw new TypeError("Function expected");
        return MM
      }
      for (var PM, nM = OM.kind, QM = "getter" === nM ? "get" : "setter" === nM ? "set" : "value", zM = !rM && MM ? OM.static ? MM : MM.prototype : null, LM = rM || (zM ? Object.getOwnPropertyDescriptor(zM, OM.name) : {}), mM = !1, HM = iM.length - 1; HM >= 0; HM--) {
        var hM = {};
        for (var JM in OM) hM[JM] = "access" === JM ? {} : OM[JM];
        for (var JM in OM.access) hM.access[JM] = OM.access[JM];
        hM.addInitializer = function(MM) {
          if (mM) throw new TypeError("Cannot add initializers after decoration has completed");
          jM.push(aM(MM || null))
        };
        var dM = (0, iM[HM])("accessor" === nM ? {
          get: LM.get,
          set: LM.set
        } : LM[QM], hM);
        if ("accessor" === nM) {
          if (void 0 === dM) continue;
          if (null === dM || "object" !== typeof dM) throw new TypeError("Object expected");
          (PM = aM(dM.get)) && (LM.get = PM), (PM = aM(dM.set)) && (LM.set = PM), (PM = aM(dM.init)) && SM.unshift(PM)
        } else(PM = aM(dM)) && ("field" === nM ? SM.unshift(PM) : LM[QM] = PM)
      }
      zM && Object.defineProperty(zM, OM.name, LM), mM = !0
    }

    function zM(MM, rM, iM) {
      for (var OM = arguments.length > 2, SM = 0; SM < rM.length; SM++) iM = OM ? rM[SM].call(MM, iM) : rM[SM].call(MM);
      return OM ? iM : void 0
    }

    function LM(MM) {
      return "symbol" === typeof MM ? MM : "".concat(MM)
    }

    function mM(MM, rM, iM) {
      return "symbol" === typeof rM && (rM = rM.description ? "[".concat(rM.description, "]") : ""), Object.defineProperty(MM, "name", {
        configurable: !0,
        value: iM ? "".concat(iM, " ", rM) : rM
      })
    }

    function HM(MM, rM) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(MM, rM)
    }

    function hM(MM, rM, iM, OM) {
      return new(iM || (iM = Promise))((function(SM, jM) {
        function aM(MM) {
          try {
            nM(OM.next(MM))
          } catch (rM) {
            jM(rM)
          }
        }

        function PM(MM) {
          try {
            nM(OM.throw(MM))
          } catch (rM) {
            jM(rM)
          }
        }

        function nM(MM) {
          var rM;
          MM.done ? SM(MM.value) : (rM = MM.value, rM instanceof iM ? rM : new iM((function(MM) {
            MM(rM)
          }))).then(aM, PM)
        }
        nM((OM = OM.apply(MM, rM || [])).next())
      }))
    }

    function JM(MM, rM) {
      var iM, OM, SM, jM = {
          label: 0,
          sent: function() {
            if (1 & SM[0]) throw SM[1];
            return SM[1]
          },
          trys: [],
          ops: []
        },
        aM = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return aM.next = PM(0), aM.throw = PM(1), aM.return = PM(2), "function" === typeof Symbol && (aM[Symbol.iterator] = function() {
        return this
      }), aM;

      function PM(PM) {
        return function(nM) {
          return function(PM) {
            if (iM) throw new TypeError("Generator is already executing.");
            for (; aM && (aM = 0, PM[0] && (jM = 0)), jM;) try {
              if (iM = 1, OM && (SM = 2 & PM[0] ? OM.return : PM[0] ? OM.throw || ((SM = OM.return) && SM.call(OM), 0) : OM.next) && !(SM = SM.call(OM, PM[1])).done) return SM;
              switch (OM = 0, SM && (PM = [2 & PM[0], SM.value]), PM[0]) {
                case 0:
                case 1:
                  SM = PM;
                  break;
                case 4:
                  return jM.label++, {
                    value: PM[1],
                    done: !1
                  };
                case 5:
                  jM.label++, OM = PM[1], PM = [0];
                  continue;
                case 7:
                  PM = jM.ops.pop(), jM.trys.pop();
                  continue;
                default:
                  if (!(SM = (SM = jM.trys).length > 0 && SM[SM.length - 1]) && (6 === PM[0] || 2 === PM[0])) {
                    jM = 0;
                    continue
                  }
                  if (3 === PM[0] && (!SM || PM[1] > SM[0] && PM[1] < SM[3])) {
                    jM.label = PM[1];
                    break
                  }
                  if (6 === PM[0] && jM.label < SM[1]) {
                    jM.label = SM[1], SM = PM;
                    break
                  }
                  if (SM && jM.label < SM[2]) {
                    jM.label = SM[2], jM.ops.push(PM);
                    break
                  }
                  SM[2] && jM.ops.pop(), jM.trys.pop();
                  continue
              }
              PM = rM.call(MM, jM)
            } catch (nM) {
              PM = [6, nM], OM = 0
            } finally {
              iM = SM = 0
            }
            if (5 & PM[0]) throw PM[1];
            return {
              value: PM[0] ? PM[1] : void 0,
              done: !0
            }
          }([PM, nM])
        }
      }
    }
    var dM = Object.create ? function(MM, rM, iM, OM) {
      void 0 === OM && (OM = iM);
      var SM = Object.getOwnPropertyDescriptor(rM, iM);
      SM && !("get" in SM ? !rM.__esModule : SM.writable || SM.configurable) || (SM = {
        enumerable: !0,
        get: function() {
          return rM[iM]
        }
      }), Object.defineProperty(MM, OM, SM)
    } : function(MM, rM, iM, OM) {
      void 0 === OM && (OM = iM), MM[OM] = rM[iM]
    };

    function yM(MM, rM) {
      for (var iM in MM) "default" === iM || Object.prototype.hasOwnProperty.call(rM, iM) || dM(rM, MM, iM)
    }

    function lM(MM) {
      var rM = "function" === typeof Symbol && Symbol.iterator,
        iM = rM && MM[rM],
        OM = 0;
      if (iM) return iM.call(MM);
      if (MM && "number" === typeof MM.length) return {
        next: function() {
          return MM && OM >= MM.length && (MM = void 0), {
            value: MM && MM[OM++],
            done: !MM
          }
        }
      };
      throw new TypeError(rM ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function EM(MM, rM) {
      var iM = "function" === typeof Symbol && MM[Symbol.iterator];
      if (!iM) return MM;
      var OM, SM, jM = iM.call(MM),
        aM = [];
      try {
        for (;
          (void 0 === rM || rM-- > 0) && !(OM = jM.next()).done;) aM.push(OM.value)
      } catch (PM) {
        SM = {
          error: PM
        }
      } finally {
        try {
          OM && !OM.done && (iM = jM.return) && iM.call(jM)
        } finally {
          if (SM) throw SM.error
        }
      }
      return aM
    }

    function UM() {
      for (var MM = [], rM = 0; rM < arguments.length; rM++) MM = MM.concat(EM(arguments[rM]));
      return MM
    }

    function GM() {
      for (var MM = 0, rM = 0, iM = arguments.length; rM < iM; rM++) MM += arguments[rM].length;
      var OM = Array(MM),
        SM = 0;
      for (rM = 0; rM < iM; rM++)
        for (var jM = arguments[rM], aM = 0, PM = jM.length; aM < PM; aM++, SM++) OM[SM] = jM[aM];
      return OM
    }

    function CM(MM, rM, iM) {
      if (iM || 2 === arguments.length)
        for (var OM, SM = 0, jM = rM.length; SM < jM; SM++) !OM && SM in rM || (OM || (OM = Array.prototype.slice.call(rM, 0, SM)), OM[SM] = rM[SM]);
      return MM.concat(OM || Array.prototype.slice.call(rM))
    }

    function eM(MM) {
      return this instanceof eM ? (this.v = MM, this) : new eM(MM)
    }

    function bM(MM, rM, iM) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var OM, SM = iM.apply(MM, rM || []),
        jM = [];
      return OM = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), aM("next"), aM("throw"), aM("return", (function(MM) {
        return function(rM) {
          return Promise.resolve(rM).then(MM, QM)
        }
      })), OM[Symbol.asyncIterator] = function() {
        return this
      }, OM;

      function aM(MM, rM) {
        SM[MM] && (OM[MM] = function(rM) {
          return new Promise((function(iM, OM) {
            jM.push([MM, rM, iM, OM]) > 1 || PM(MM, rM)
          }))
        }, rM && (OM[MM] = rM(OM[MM])))
      }

      function PM(MM, rM) {
        try {
          (iM = SM[MM](rM)).value instanceof eM ? Promise.resolve(iM.value.v).then(nM, QM) : zM(jM[0][2], iM)
        } catch (OM) {
          zM(jM[0][3], OM)
        }
        var iM
      }

      function nM(MM) {
        PM("next", MM)
      }

      function QM(MM) {
        PM("throw", MM)
      }

      function zM(MM, rM) {
        MM(rM), jM.shift(), jM.length && PM(jM[0][0], jM[0][1])
      }
    }

    function wM(MM) {
      var rM, iM;
      return rM = {}, OM("next"), OM("throw", (function(MM) {
        throw MM
      })), OM("return"), rM[Symbol.iterator] = function() {
        return this
      }, rM;

      function OM(OM, SM) {
        rM[OM] = MM[OM] ? function(rM) {
          return (iM = !iM) ? {
            value: eM(MM[OM](rM)),
            done: !1
          } : SM ? SM(rM) : rM
        } : SM
      }
    }

    function tM(MM) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var rM, iM = MM[Symbol.asyncIterator];
      return iM ? iM.call(MM) : (MM = lM(MM), rM = {}, OM("next"), OM("throw"), OM("return"), rM[Symbol.asyncIterator] = function() {
        return this
      }, rM);

      function OM(iM) {
        rM[iM] = MM[iM] && function(rM) {
          return new Promise((function(OM, SM) {
            (function(MM, rM, iM, OM) {
              Promise.resolve(OM).then((function(rM) {
                MM({
                  value: rM,
                  done: iM
                })
              }), rM)
            })(OM, SM, (rM = MM[iM](rM)).done, rM.value)
          }))
        }
      }
    }

    function gM(MM, rM) {
      return Object.defineProperty ? Object.defineProperty(MM, "raw", {
        value: rM
      }) : MM.raw = rM, MM
    }
    var uM = Object.create ? function(MM, rM) {
        Object.defineProperty(MM, "default", {
          enumerable: !0,
          value: rM
        })
      } : function(MM, rM) {
        MM.default = rM
      },
      RM = function(MM) {
        return RM = Object.getOwnPropertyNames || function(MM) {
          var rM = [];
          for (var iM in MM) Object.prototype.hasOwnProperty.call(MM, iM) && (rM[rM.length] = iM);
          return rM
        }, RM(MM)
      };

    function pM(MM) {
      if (MM && MM.__esModule) return MM;
      var rM = {};
      if (null != MM)
        for (var iM = RM(MM), OM = 0; OM < iM.length; OM++) "default" !== iM[OM] && dM(rM, MM, iM[OM]);
      return uM(rM, MM), rM
    }

    function WM(MM) {
      return MM && MM.__esModule ? MM : {
        default: MM
      }
    }

    function sM(MM, rM, iM, OM) {
      if ("a" === iM && !OM) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof rM ? MM !== rM || !OM : !rM.has(MM)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === iM ? OM : "a" === iM ? OM.call(MM) : OM ? OM.value : rM.get(MM)
    }

    function DM(MM, rM, iM, OM, SM) {
      if ("m" === OM) throw new TypeError("Private method is not writable");
      if ("a" === OM && !SM) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof rM ? MM !== rM || !SM : !rM.has(MM)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === OM ? SM.call(MM, iM) : SM ? SM.value = iM : rM.set(MM, iM), iM
    }

    function kM(MM, rM) {
      if (null === rM || "object" !== typeof rM && "function" !== typeof rM) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof MM ? rM === MM : MM.has(rM)
    }

    function ZM(MM, rM, iM) {
      if (null !== rM && void 0 !== rM) {
        if ("object" !== typeof rM && "function" !== typeof rM) throw new TypeError("Object expected.");
        var OM, SM;
        if (iM) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          OM = rM[Symbol.asyncDispose]
        }
        if (void 0 === OM) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          OM = rM[Symbol.dispose], iM && (SM = OM)
        }
        if ("function" !== typeof OM) throw new TypeError("Object not disposable.");
        SM && (OM = function() {
          try {
            SM.call(this)
          } catch (MM) {
            return Promise.reject(MM)
          }
        }), MM.stack.push({
          value: rM,
          dispose: OM,
          async: iM
        })
      } else iM && MM.stack.push({
        async: !0
      });
      return rM
    }
    var oM = "function" === typeof SuppressedError ? SuppressedError : function(MM, rM, iM) {
      var OM = new Error(iM);
      return OM.name = "SuppressedError", OM.error = MM, OM.suppressed = rM, OM
    };

    function fM(MM) {
      function rM(rM) {
        MM.error = MM.hasError ? new oM(rM, MM.error, "An error was suppressed during disposal.") : rM, MM.hasError = !0
      }
      var iM, OM = 0;
      return function SM() {
        for (; iM = MM.stack.pop();) try {
          if (!iM.async && 1 === OM) return OM = 0, MM.stack.push(iM), Promise.resolve().then(SM);
          if (iM.dispose) {
            var jM = iM.dispose.call(iM.value);
            if (iM.async) return OM |= 2, Promise.resolve(jM).then(SM, (function(MM) {
              return rM(MM), SM()
            }))
          } else OM |= 1
        } catch (aM) {
          rM(aM)
        }
        if (1 === OM) return MM.hasError ? Promise.reject(MM.error) : Promise.resolve();
        if (MM.hasError) throw MM.error
      }()
    }

    function YM(MM, rM) {
      return "string" === typeof MM && /^\.\.?\//.test(MM) ? MM.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(MM, iM, OM, SM, jM) {
        return iM ? rM ? ".jsx" : ".js" : !OM || SM && jM ? OM + SM + "." + jM.toLowerCase() + "js" : MM
      })) : MM
    }
    const NM = {
      __extends: SM,
      __assign: jM,
      __rest: aM,
      __decorate: PM,
      __param: nM,
      __esDecorate: QM,
      __runInitializers: zM,
      __propKey: LM,
      __setFunctionName: mM,
      __metadata: HM,
      __awaiter: hM,
      __generator: JM,
      __createBinding: dM,
      __exportStar: yM,
      __values: lM,
      __read: EM,
      __spread: UM,
      __spreadArrays: GM,
      __spreadArray: CM,
      __await: eM,
      __asyncGenerator: bM,
      __asyncDelegator: wM,
      __asyncValues: tM,
      __makeTemplateObject: gM,
      __importStar: pM,
      __importDefault: WM,
      __classPrivateFieldGet: sM,
      __classPrivateFieldSet: DM,
      __classPrivateFieldIn: kM,
      __addDisposableResource: ZM,
      __disposeResources: fM,
      __rewriteRelativeImportExtension: YM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);