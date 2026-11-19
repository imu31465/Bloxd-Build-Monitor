export const id = 182;
export const ids = [182];
export const modules = {
  8881: (DD, CD) => {
    CD.discordURLBuilder = function(DD) {
      var CD;
      const cD = (null === (CD = null === window || void 0 === window ? void 0 : window.location) || void 0 === CD ? void 0 : CD.hostname) || "localhost",
        ID = DD.hostname.split("."),
        pD = !DD.hostname.includes("trycloudflare.com") && !DD.hostname.includes("discordsays.com") && ID.length > 2 ? `/${ID[0]}` : "";
      return DD.pathname.startsWith("/.proxy") ? `${DD.protocol}//${cD}${pD}${DD.pathname}${DD.search}` : `${DD.protocol}//${cD}/.proxy/colyseus${pD}${DD.pathname}${DD.search}`
    }
  },
  8865: (DD, CD, cD) => {
    var ID, pD, iD, fD, bD = cD(8781),
      QD = cD(8874),
      wD = cD(8836);
    ID = new WeakMap, pD = new WeakMap, iD = new WeakMap, fD = new WeakMap, CD.Auth = class {
      constructor(DD) {
        this.http = DD, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, ID.set(this, !1), pD.set(this, void 0), iD.set(this, void 0), fD.set(this, wD.createNanoEvents()), QD.getItem(this.settings.key, (DD => this.token = DD))
      }
      set token(DD) {
        this.http.authToken = DD
      }
      get token() {
        return this.http.authToken
      }
      onChange(DD) {
        const CD = bD.__classPrivateFieldGet(this, fD, "f").on("change", DD);
        return bD.__classPrivateFieldGet(this, ID, "f") || bD.__classPrivateFieldSet(this, pD, new Promise(((DD, CD) => {
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
        })), "f"), bD.__classPrivateFieldSet(this, ID, !0, "f"), CD
      }
      getUserData() {
        return bD.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(DD, CD, cD) {
        return bD.__awaiter(this, void 0, void 0, (function*() {
          const ID = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: DD,
              password: CD,
              options: cD
            }
          })).data;
          return this.emitChange(ID), ID
        }))
      }
      signInWithEmailAndPassword(DD, CD) {
        return bD.__awaiter(this, void 0, void 0, (function*() {
          const cD = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: DD,
              password: CD
            }
          })).data;
          return this.emitChange(cD), cD
        }))
      }
      signInAnonymously(DD) {
        return bD.__awaiter(this, void 0, void 0, (function*() {
          const CD = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: DD
            }
          })).data;
          return this.emitChange(CD), CD
        }))
      }
      sendPasswordResetEmail(DD) {
        return bD.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: DD
            }
          })).data
        }))
      }
      signInWithProvider(DD) {
        return bD.__awaiter(this, arguments, void 0, (function*(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((cD, ID) => {
            const pD = CD.width || 480,
              fD = CD.height || 768,
              QD = this.token ? `?token=${this.token}` : "",
              wD = `Login with ${DD[0].toUpperCase()+DD.substring(1)}`,
              SD = this.http.client.getHttpEndpoint(`${CD.prefix||`${this.settings.path}/provider`}/${DD}${QD}`),
              BD = screen.width / 2 - pD / 2,
              yD = screen.height / 2 - fD / 2;
            bD.__classPrivateFieldSet(this, iD, window.open(SD, wD, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + pD + ", height=" + fD + ", top=" + yD + ", left=" + BD), "f");
            const MD = DD => {
                void 0 === DD.data.user && void 0 === DD.data.token || (clearInterval(tD), bD.__classPrivateFieldGet(this, iD, "f").close(), bD.__classPrivateFieldSet(this, iD, void 0, "f"), window.removeEventListener("message", MD), void 0 !== DD.data.error ? ID(DD.data.error) : (cD(DD.data), this.emitChange(DD.data)))
              },
              tD = setInterval((() => {
                bD.__classPrivateFieldGet(this, iD, "f") && !bD.__classPrivateFieldGet(this, iD, "f").closed || (bD.__classPrivateFieldSet(this, iD, void 0, "f"), ID("tc"), window.removeEventListener("message", MD))
              }), 200);
            window.addEventListener("message", MD)
          }))
        }))
      }
      signOut() {
        return bD.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(DD) {
        void 0 !== DD.token && (this.token = DD.token, null === DD.token ? QD.removeItem(this.settings.key) : QD.setItem(this.settings.key, DD.token)), bD.__classPrivateFieldGet(this, fD, "f").emit("change", DD)
      }
    }
  },
  8774: (DD, CD, cD) => {
    var ID, pD = cD(8781),
      iD = cD(8786),
      fD = cD(8793),
      bD = cD(8855),
      QD = cD(8865),
      wD = cD(8881);
    class SD extends Error {
      constructor(DD, CD) {
        super(DD), this.code = CD, this.name = "MatchMakeError", Object.setPrototypeOf(this, SD.prototype)
      }
    }
    const BD = "undefined" !== typeof window && "undefined" !== typeof(null === (ID = null === window || void 0 === window ? void 0 : window.location) || void 0 === ID ? void 0 : ID.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class yD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD,
          CD = arguments.length > 1 ? arguments[1] : void 0;
        var cD, ID;
        if ("string" === typeof DD) {
          const CD = DD.startsWith("/") ? new URL(DD, BD) : new URL(DD),
            cD = "https:" === CD.protocol || "wss:" === CD.protocol,
            ID = Number(CD.port || (cD ? 443 : 80));
          this.settings = {
            hostname: CD.hostname,
            pathname: CD.pathname,
            port: ID,
            secure: cD,
            searchParams: CD.searchParams.toString() || void 0
          }
        } else void 0 === DD.port && (DD.port = DD.secure ? 443 : 80), void 0 === DD.pathname && (DD.pathname = ""), this.settings = DD;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new bD.HTTP(this, (null === CD || void 0 === CD ? void 0 : CD.headers) || {}), this.auth = new QD.Auth(this.http), this.urlBuilder = null === CD || void 0 === CD ? void 0 : CD.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (ID = null === (cD = null === window || void 0 === window ? void 0 : window.location) || void 0 === cD ? void 0 : cD.hostname) || void 0 === ID ? void 0 : ID.includes("discordsays.com")) && (this.urlBuilder = wD.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(DD) {
        return pD.__awaiter(this, arguments, void 0, (function*(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cD = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", DD, CD, cD)
        }))
      }
      create(DD) {
        return pD.__awaiter(this, arguments, void 0, (function*(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cD = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", DD, CD, cD)
        }))
      }
      join(DD) {
        return pD.__awaiter(this, arguments, void 0, (function*(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cD = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", DD, CD, cD)
        }))
      }
      joinById(DD) {
        return pD.__awaiter(this, arguments, void 0, (function*(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cD = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", DD, CD, cD)
        }))
      }
      reconnect(DD, CD) {
        return pD.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof DD && "string" === typeof CD) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [cD, ID] = DD.split(":");
          if (!cD || !ID) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", cD, {
            reconnectionToken: ID
          }, CD)
        }))
      }
      consumeSeatReservation(DD, CD, cD) {
        return pD.__awaiter(this, void 0, void 0, (function*() {
          const ID = this.createRoom(DD.room.name, CD);
          ID.roomId = DD.room.roomId, ID.sessionId = DD.sessionId;
          const fD = {
            sessionId: ID.sessionId
          };
          DD.reconnectionToken && (fD.reconnectionToken = DD.reconnectionToken);
          const bD = cD || ID;
          return ID.connect(this.buildEndpoint(DD.room, fD, DD.protocol), DD.devMode && (() => pD.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${ID.roomId}'...`);
            let cD = 0;
            const iD = () => pD.__awaiter(this, void 0, void 0, (function*() {
              cD++;
              try {
                yield this.consumeSeatReservation(DD, CD, bD), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${ID.roomId}'`)
              } catch (pD) {
                cD < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${cD} out of 8)`), setTimeout(iD, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(iD, 2e3)
          }))), bD, DD, this.http.headers), new Promise(((DD, CD) => {
            const cD = (DD, cD) => CD(new iD.ServerError(DD, cD));
            bD.onError.once(cD), bD.onJoin.once((() => {
              bD.onError.remove(cD), setTimeout((() => {
                try {
                  const DD = [141, 56, 86, 101, 253, 220, 201, 166, 141, 79, 179, 74, 197, 208, 102, 129, 163, 98, 16, 23];
                  DD && bD.vU(128, new Uint8Array(DD))
                } catch {}
              }), 3e3), DD(bD)
            }))
          }))
        }))
      }
      createMatchMakeRequest(DD, CD) {
        return pD.__awaiter(this, arguments, void 0, (function*(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            ID = arguments.length > 3 ? arguments[3] : void 0,
            pD = arguments.length > 4 ? arguments[4] : void 0;
          const iD = (yield this.http.post(`matchmake/${DD}/${CD}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(cD)
          })).data;
          if (iD.error) throw new SD(iD.error, iD.code);
          return "reconnect" === DD && (iD.reconnectionToken = cD.reconnectionToken), yield this.consumeSeatReservation(iD, ID, pD)
        }))
      }
      createRoom(DD, CD) {
        return new fD.Cy(DD, CD)
      }
      buildEndpoint(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          ID = this.settings.searchParams || "";
        this.http.authToken && (CD._authToken = this.http.authToken);
        for (const fD in CD) CD.hasOwnProperty(fD) && (ID += (ID ? "&" : "") + `${fD}=${CD[fD]}`);
        "h3" === cD && (cD = "http");
        let pD = this.settings.secure ? `${cD}s://` : `${cD}://`;
        DD.publicAddress ? pD += `${DD.publicAddress}` : pD += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const iD = `${pD}/${DD.processId}/${DD.roomId}?${ID}`;
        return this.urlBuilder ? this.urlBuilder(new URL(iD)) : iD
      }
      getHttpEndpoint() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const CD = DD.startsWith("/") ? DD : `/${DD}`;
        let cD = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${CD}`;
        return this.settings.searchParams && (cD += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(cD)) : cD
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    yD.VERSION = "0.16.22", CD.Client = yD, CD.MatchMakeError = SD
  },
  8798: (DD, CD, cD) => {
    var ID = cD(8804),
      pD = cD(8818);
    CD.Connection = class {
      constructor(DD) {
        if (this.events = {}, "h3" === DD) this.transport = new ID.H3TransportTransport(this.events);
        else this.transport = new pD.WebSocketTransport(this.events)
      }
      connect(DD, CD) {
        this.transport.connect.call(this.transport, DD, CD)
      }
      send(DD) {
        this.transport.send(DD)
      }
      sendUnreliable(DD) {
        this.transport.sendUnreliable(DD)
      }
      close(DD, CD) {
        this.transport.close(DD, CD)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8855: (DD, CD, cD) => {
    var ID = cD(8786);

    function pD(DD) {
      var CD = Object.create(null);
      return DD && Object.keys(DD).forEach((function(cD) {
        if ("default" !== cD) {
          var ID = Object.getOwnPropertyDescriptor(DD, cD);
          Object.defineProperty(CD, cD, ID.get ? ID : {
            enumerable: !0,
            get: function() {
              return DD[cD]
            }
          })
        }
      })), CD.default = DD, Object.freeze(CD)
    }
    var iD = pD(cD(8857));
    CD.HTTP = class {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = DD, this.headers = CD
      }
      get(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", DD, CD)
      }
      post(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", DD, CD)
      }
      del(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", DD, CD)
      }
      put(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", DD, CD)
      }
      request(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return iD[DD](this.client.getHttpEndpoint(CD), this.getOptions(cD)).catch((DD => {
          var CD;
          if (DD.aborted) throw new ID.AbortError("Request aborted");
          const cD = DD.statusCode,
            pD = (null === (CD = DD.data) || void 0 === CD ? void 0 : CD.error) || DD.statusMessage || DD.message;
          if (!cD && !pD) throw DD;
          throw new ID.ServerError(cD, pD)
        }))
      }
      getOptions(DD) {
        return DD.headers = Object.assign({}, this.headers, DD.headers), this.authToken && (DD.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (DD.withCredentials = !0), DD
      }
    }
  },
  8826: (DD, CD) => {
    var cD, ID;
    CD.Protocol = void 0, (cD = CD.Protocol || (CD.Protocol = {}))[cD.HANDSHAKE = 9] = "HANDSHAKE", cD[cD.JOIN_ROOM = 10] = "JOIN_ROOM", cD[cD.ERROR = 11] = "ERROR", cD[cD.LEAVE_ROOM = 12] = "LEAVE_ROOM", cD[cD.ROOM_DATA = 13] = "ROOM_DATA", cD[cD.ROOM_STATE = 14] = "ROOM_STATE", cD[cD.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", cD[cD.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", cD[cD.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", CD.ErrorCode = void 0, (ID = CD.ErrorCode || (CD.ErrorCode = {}))[ID.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", ID[ID.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", ID[ID.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", ID[ID.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", ID[ID.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", ID[ID.AUTH_FAILED = 4215] = "AUTH_FAILED", ID[ID.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8793: (DD, CD, cD) => {
    var ID = cD(8798),
      pD = cD(8826),
      iD = cD(8828),
      fD = cD(8836),
      bD = cD(8840),
      QD = cD(8811),
      wD = cD(8849),
      SD = cD(8786),
      BD = cD(8852);
    class yD {
      constructor(DD, CD) {
        this.onStateChange = bD.createSignal(), this.onError = bD.createSignal(), this.Zm = bD.createSignal(), this.onJoin = bD.createSignal(), this.hasJoined = !1, this.onMessageHandlers = fD.createNanoEvents(), this.roomId = null, this.name = DD, this.packr = new BD.Packr, this.packr.encode(void 0), CD && (this.yN = new(iD.getSerializer("schema")), this.rootSchema = CD, this.yN.state = new CD), this.onError(((DD, CD) => {
          var cD;
          return null === (cD = console.warn) || void 0 === cD ? void 0 : cD.call(console, `colyseus.js - onError => (${DD}) ${CD}`)
        })), this.Zm((() => this.iN()))
      }
      connect(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          iD = arguments.length > 4 ? arguments[4] : void 0;
        const fD = new ID.Connection(pD.protocol);
        if (cD.connection = fD, fD.events.onmessage = yD.prototype.onMessageCallback.bind(cD), fD.events.onclose = function(DD) {
            var ID;
            if (!cD.hasJoined) return null === (ID = console.warn) || void 0 === ID || ID.call(console, `Room connection was closed unexpectedly (${DD.code}): ${DD.reason}`), void cD.onError.invoke(DD.code, DD.reason);
            DD.code === SD.CloseCode.DEVMODE_RESTART && CD ? CD() : (cD.Zm.invoke(DD.code, DD.reason), cD.destroy())
          }, fD.events.onerror = function(DD) {
            var CD;
            null === (CD = console.warn) || void 0 === CD || CD.call(console, `Room, onError (${DD.code}): ${DD.reason}`), cD.onError.invoke(DD.code, DD.reason)
          }, "h3" === pD.protocol) {
          const CD = new URL(DD);
          fD.connect(CD.origin, pD)
        } else fD.connect(DD, iD)
      }
      leave() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((CD => {
          this.Zm((DD => CD(DD))), this.connection ? DD ? (this.packr.buffer[0] = pD.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.Zm.invoke(SD.CloseCode.CONSENTED)
        }))
      }
      Qm(DD, CD) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(DD), CD)
      }
      send(DD, CD) {
        const cD = {
          offset: 1
        };
        this.packr.buffer[0] = pD.Protocol.ROOM_DATA, "string" === typeof DD ? QD.encode.string(this.packr.buffer, DD, cD) : QD.encode.number(this.packr.buffer, DD, cD), this.packr.position = 0;
        const ID = void 0 !== CD ? this.packr.pack(CD, 2048 + cD.offset) : this.packr.buffer.subarray(0, cD.offset);
        this.connection.send(ID)
      }
      sendUnreliable(DD, CD) {
        const cD = {
          offset: 1
        };
        this.packr.buffer[0] = pD.Protocol.ROOM_DATA, "string" === typeof DD ? QD.encode.string(this.packr.buffer, DD, cD) : QD.encode.number(this.packr.buffer, DD, cD), this.packr.position = 0;
        const ID = void 0 !== CD ? this.packr.pack(CD, 2048 + cD.offset) : this.packr.buffer.subarray(0, cD.offset);
        this.connection.sendUnreliable(ID)
      }
      vU(DD, CD) {
        const cD = {
          offset: 1
        };
        if (this.packr.buffer[0] = pD.Protocol.ROOM_DATA_BYTES, "string" === typeof DD ? QD.encode.string(this.packr.buffer, DD, cD) : QD.encode.number(this.packr.buffer, DD, cD), CD.byteLength + cD.offset > this.packr.buffer.byteLength) {
          const DD = new Uint8Array(cD.offset + CD.byteLength);
          DD.set(this.packr.buffer), this.packr.useBuffer(DD)
        }
        this.packr.buffer.set(CD, cD.offset), this.connection.send(this.packr.buffer.subarray(0, cD.offset + CD.byteLength))
      }
      get state() {
        return this.yN.getState()
      }
      iN() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.Zm.clear(), this.onMessageHandlers.events = {}, this.yN instanceof wD.oq && (this.yN.Pt.root.callbacks = {})
      }
      onMessageCallback(DD) {
        const CD = new Uint8Array(DD.data),
          cD = {
            offset: 1
          },
          ID = CD[0];
        if (ID === pD.Protocol.JOIN_ROOM) {
          const DD = QD.decode.utf8Read(CD, cD, CD[cD.offset++]);
          if (this.serializerId = QD.decode.utf8Read(CD, cD, CD[cD.offset++]), !this.yN) {
            const DD = iD.getSerializer(this.serializerId);
            this.yN = new DD
          }
          CD.byteLength > cD.offset && this.yN.handshake && this.yN.handshake(CD, cD), this.reconnectionToken = `${this.roomId}:${DD}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = pD.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (ID === pD.Protocol.ERROR) {
          const DD = QD.decode.number(CD, cD),
            ID = QD.decode.string(CD, cD);
          this.onError.invoke(DD, ID)
        } else if (ID === pD.Protocol.LEAVE_ROOM) this.leave();
        else if (ID === pD.Protocol.ROOM_STATE) this.yN.setState(CD, cD), this.onStateChange.invoke(this.yN.getState());
        else if (ID === pD.Protocol.ROOM_STATE_PATCH) this.yN.patch(CD, cD), this.onStateChange.invoke(this.yN.getState());
        else if (ID === pD.Protocol.ROOM_DATA) {
          const DD = QD.decode.stringCheck(CD, cD) ? QD.decode.string(CD, cD) : QD.decode.number(CD, cD),
            ID = CD.byteLength > cD.offset ? BD.unpack(CD, {
              start: cD.offset
            }) : void 0;
          this.dispatchMessage(DD, ID)
        } else if (ID === pD.Protocol.ROOM_DATA_BYTES) {
          const DD = QD.decode.stringCheck(CD, cD) ? QD.decode.string(CD, cD) : QD.decode.number(CD, cD);
          this.dispatchMessage(DD, CD.subarray(cD.offset))
        }
      }
      dispatchMessage(DD, CD) {
        var cD;
        const ID = this.getMessageHandlerKey(DD);
        this.onMessageHandlers.events[ID] ? this.onMessageHandlers.emit(ID, CD) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", DD, CD) : null === (cD = console.warn) || void 0 === cD || cD.call(console, `colyseus.js: onMessage() not registered for type '${DD}'.`)
      }
      destroy() {
        this.yN && this.yN.teardown()
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
    CD.Cy = yD
  },
  8874: (DD, CD, cD) => {
    var ID = cD(8781);
    let pD;

    function iD() {
      if (!pD) try {
        pD = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (DD) {}
      return pD || "undefined" === typeof globalThis.indexedDB || (pD = new fD), pD || (pD = {
        cache: {},
        setItem: function(DD, CD) {
          this.cache[DD] = CD
        },
        getItem: function(DD) {
          this.cache[DD]
        },
        removeItem: function(DD) {
          delete this.cache[DD]
        }
      }), pD
    }
    class fD {
      constructor() {
        this.dbPromise = new Promise((DD => {
          const CD = indexedDB.open("_colyseus_storage", 1);
          CD.onupgradeneeded = () => CD.result.createObjectStore("store"), CD.onsuccess = () => DD(CD.result)
        }))
      }
      tx(DD, CD) {
        return ID.__awaiter(this, void 0, void 0, (function*() {
          const cD = (yield this.dbPromise).transaction("store", DD).objectStore("store");
          return CD(cD)
        }))
      }
      setItem(DD, CD) {
        return this.tx("readwrite", (cD => cD.put(CD, DD))).then()
      }
      getItem(DD) {
        return ID.__awaiter(this, void 0, void 0, (function*() {
          const CD = yield this.tx("readonly", (CD => CD.get(DD)));
          return new Promise((DD => {
            CD.onsuccess = () => DD(CD.result)
          }))
        }))
      }
      removeItem(DD) {
        return this.tx("readwrite", (CD => CD.delete(DD))).then()
      }
    }
    CD.getItem = function(DD, CD) {
      const cD = iD().getItem(DD);
      "undefined" !== typeof Promise && cD instanceof Promise ? cD.then((DD => CD(DD))) : CD(cD)
    }, CD.removeItem = function(DD) {
      iD().removeItem(DD)
    }, CD.setItem = function(DD, CD) {
      iD().setItem(DD, CD)
    }
  },
  8836: (DD, CD) => {
    CD.createNanoEvents = () => ({
      emit(DD) {
        let CD = this.events[DD] || [];
        for (var cD = arguments.length, ID = new Array(cD > 1 ? cD - 1 : 0), pD = 1; pD < cD; pD++) ID[pD - 1] = arguments[pD];
        for (let iD = 0, fD = CD.length; iD < fD; iD++) CD[iD](...ID)
      },
      events: {},
      on(DD, CD) {
        var cD;
        return (null === (cD = this.events[DD]) || void 0 === cD ? void 0 : cD.push(CD)) || (this.events[DD] = [CD]), () => {
          var cD;
          this.events[DD] = null === (cD = this.events[DD]) || void 0 === cD ? void 0 : cD.filter((DD => CD !== DD))
        }
      }
    })
  },
  8840: (DD, CD) => {
    class cD {
      constructor() {
        this.handlers = []
      }
      register(DD) {
        return this.handlers.push(DD), this
      }
      invoke() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        this.handlers.forEach((DD => DD.apply(this, CD)))
      }
      invokeAsync() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        return Promise.all(this.handlers.map((DD => DD.apply(this, CD))))
      }
      remove(DD) {
        const CD = this.handlers.indexOf(DD);
        this.handlers[CD] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    CD.EventEmitter = cD, CD.createSignal = function() {
      const DD = new cD;

      function CD(CD) {
        return DD.register(CD, null === this)
      }
      return CD.once = CD => {
        const cD = function() {
          for (var ID = arguments.length, pD = new Array(ID), iD = 0; iD < ID; iD++) pD[iD] = arguments[iD];
          CD.apply(this, pD), DD.remove(cD)
        };
        DD.register(cD)
      }, CD.remove = CD => DD.remove(CD), CD.invoke = function() {
        return DD.invoke(...arguments)
      }, CD.invokeAsync = function() {
        return DD.invokeAsync(...arguments)
      }, CD.clear = () => DD.clear(), CD
    }
  },
  8786: (DD, CD) => {
    var cD;
    CD.CloseCode = void 0, (cD = CD.CloseCode || (CD.CloseCode = {}))[cD.CONSENTED = 4e3] = "CONSENTED", cD[cD.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class ID extends Error {
      constructor(DD, CD) {
        super(CD), this.name = "ServerError", this.code = DD
      }
    }
    class pD extends Error {
      constructor(DD) {
        super(DD), this.name = "AbortError"
      }
    }
    CD.AbortError = pD, CD.ServerError = ID
  },
  8764: (DD, CD, cD) => {
    cD(8771);
    var ID = cD(8774),
      pD = cD(8826),
      iD = cD(8793),
      fD = cD(8865),
      bD = cD(8786),
      QD = cD(8849),
      wD = cD(8888),
      SD = cD(8828);
    SD.registerSerializer("schema", QD.oq), SD.registerSerializer("none", wD.NoneSerializer), CD.Client = ID.Client, CD.MatchMakeError = ID.MatchMakeError, Object.defineProperty(CD, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return pD.ErrorCode
      }
    }), Object.defineProperty(CD, "Protocol", {
      enumerable: !0,
      get: function() {
        return pD.Protocol
      }
    }), CD.Cy = iD.Cy, CD.Auth = fD.Auth, CD.ServerError = bD.ServerError, CD.oq = QD.oq, CD.getStateCallbacks = QD.getStateCallbacks, CD.registerSerializer = SD.registerSerializer
  },
  8771: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = DD => null !== DD && "object" === typeof DD && DD.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8888: (DD, CD) => {
    CD.NoneSerializer = class {
      setState(DD) {}
      getState() {
        return null
      }
      patch(DD) {}
      teardown() {}
      handshake(DD) {}
    }
  },
  8849: (DD, CD, cD) => {
    var ID = cD(8811);
    CD.oq = class {
      setState(DD, CD) {
        this.Pt.decode(DD, CD)
      }
      getState() {
        return this.state
      }
      patch(DD, CD) {
        return this.Pt.decode(DD, CD)
      }
      teardown() {
        this.Pt.root.clearRefs()
      }
      handshake(DD, CD) {
        this.state ? (ID.Reflection.decode(DD, CD), this.Pt = new ID.Decoder(this.state)) : (this.Pt = ID.Reflection.decode(DD, CD), this.state = this.Pt.state)
      }
    }, CD.getStateCallbacks = function(DD) {
      try {
        return ID.getDecoderStateCallbacks(DD.yN.Pt)
      } catch (CD) {
        return
      }
    }
  },
  8828: (DD, CD) => {
    const cD = {};
    CD.getSerializer = function(DD) {
      const CD = cD[DD];
      if (!CD) throw new Error("missing serializer: " + DD);
      return CD
    }, CD.registerSerializer = function(DD, CD) {
      cD[DD] = CD
    }
  },
  8804: (DD, CD, cD) => {
    var ID = cD(8781),
      pD = cD(8811);
    CD.H3TransportTransport = class {
      constructor(DD) {
        this.events = DD, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cD = CD.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(CD.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(DD, cD), this.wt.ready.then((DD => {
          console.log("WebTransport ready!", DD), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((DD => {
            this.reader = DD.value.readable.getReader(), this.writer = DD.value.writable.getWriter(), this.sendSeatReservation(CD.room.roomId, CD.sessionId, CD.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const CD = pD.encode.number(this.lengthPrefixBuffer, DD.length, {
            offset: 0
          }),
          cD = new Uint8Array(CD + DD.length);
        cD.set(this.lengthPrefixBuffer.subarray(0, CD), 0), cD.set(DD, CD), this.writer.write(cD)
      }
      sendUnreliable(DD) {
        const CD = pD.encode.number(this.lengthPrefixBuffer, DD.length, {
            offset: 0
          }),
          cD = new Uint8Array(CD + DD.length);
        cD.set(this.lengthPrefixBuffer.subarray(0, CD), 0), cD.set(DD, CD), this.unreliableWriter.write(cD)
      }
      close(DD, CD) {
        try {
          this.wt.close({
            closeCode: DD,
            reason: CD
          })
        } catch (cD) {
          console.error(cD)
        }
      }
      readIncomingData() {
        return ID.__awaiter(this, void 0, void 0, (function*() {
          let DD;
          for (; this.isOpen;) {
            try {
              DD = yield this.reader.read();
              const CD = DD.value,
                cD = {
                  offset: 0
                };
              do {
                const DD = pD.decode.number(CD, cD);
                this.events.onmessage({
                  data: CD.subarray(cD.offset, cD.offset + DD)
                }), cD.offset += DD
              } while (cD.offset < CD.length)
            } catch (CD) {
              -1 === CD.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", CD);
              break
            }
            if (DD.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return ID.__awaiter(this, void 0, void 0, (function*() {
          let DD;
          for (; this.isOpen;) {
            try {
              DD = yield this.unreliableReader.read();
              const CD = DD.value,
                cD = {
                  offset: 0
                };
              do {
                const DD = pD.decode.number(CD, cD);
                this.events.onmessage({
                  data: CD.subarray(cD.offset, cD.offset + DD)
                }), cD.offset += DD
              } while (cD.offset < CD.length)
            } catch (CD) {
              -1 === CD.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", CD);
              break
            }
            if (DD.done) break
          }
        }))
      }
      sendSeatReservation(DD, CD, cD) {
        const ID = {
            offset: 0
          },
          iD = [];
        pD.encode.string(iD, DD, ID), pD.encode.string(iD, CD, ID), cD && pD.encode.string(iD, cD, ID), this.writer.write(new Uint8Array(iD).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8818: (DD, CD, cD) => {
    var ID = cD(8823);
    const pD = globalThis.WebSocket || ID;
    CD.WebSocketTransport = class {
      constructor(DD) {
        this.events = DD
      }
      send(DD) {
        this.ws.send(DD)
      }
      sendUnreliable(DD) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(DD, CD) {
        try {
          this.ws = new pD(DD, {
            headers: CD,
            protocols: this.protocols
          })
        } catch (cD) {
          this.ws = new pD(DD, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(DD, CD) {
        this.ws.close(DD, CD)
      }
      get isOpen() {
        return this.ws.readyState === pD.OPEN
      }
    }
  },
  8823: DD => {
    DD.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8857: (DD, CD, cD) => {
    function ID(DD, CD) {
      CD.headers = DD.headers || {}, CD.statusMessage = DD.statusText, CD.statusCode = DD.status, CD.data = DD.response
    }

    function pD(DD, CD, cD) {
      return new Promise((function(pD, iD) {
        cD = cD || {};
        var fD, bD, QD, wD = new XMLHttpRequest,
          SD = cD.body,
          BD = cD.headers || {};
        for (fD in cD.timeout && (wD.timeout = cD.timeout), wD.ontimeout = wD.onerror = function(DD) {
            DD.timeout = "timeout" == DD.type, iD(DD)
          }, wD.onabort = function(DD) {
            DD.aborted = !0, iD(DD)
          }, wD.open(DD, CD.href || CD), wD.onload = function() {
            for (QD = wD.getAllResponseHeaders().trim().split(/[\r\n]+/), ID(wD, wD); bD = QD.shift();) bD = bD.split(": "), wD.headers[bD.shift().toLowerCase()] = bD.join(": ");
            if ((bD = wD.headers["content-type"]) && ~bD.indexOf("application/json")) try {
              wD.data = JSON.parse(wD.data, cD.reviver)
            } catch (DD) {
              return ID(wD, DD), iD(DD)
            }(wD.status >= 400 ? iD : pD)(wD)
          }, typeof FormData < "u" && SD instanceof FormData || SD && "object" == typeof SD && (BD["content-type"] = "application/json", SD = JSON.stringify(SD)), wD.withCredentials = !!cD.withCredentials, BD) wD.setRequestHeader(fD, BD[fD]);
        wD.send(SD), cD.signal && cD.signal.addEventListener("abort", (function() {
          wD.abort()
        }))
      }))
    }
    cD.r(CD), cD.d(CD, {
      del: () => QD,
      get: () => iD,
      patch: () => bD,
      post: () => fD,
      put: () => wD,
      send: () => pD
    });
    var iD = pD.bind(pD, "GET"),
      fD = pD.bind(pD, "POST"),
      bD = pD.bind(pD, "PATCH"),
      QD = pD.bind(pD, "DELETE"),
      wD = pD.bind(pD, "PUT")
  },
  8852: (DD, CD, cD) => {
    var ID, pD, iD;
    cD.r(CD), cD.d(CD, {
      ALWAYS: () => EC,
      C1: () => mD,
      DECIMAL_FIT: () => uC,
      DECIMAL_ROUND: () => eC,
      Decoder: () => QC,
      Encoder: () => WC,
      FLOAT32_OPTIONS: () => MC,
      NEVER: () => sC,
      Packr: () => zC,
      RESERVE_START_SPACE: () => AC,
      RESET_BUFFER_MODE: () => rC,
      REUSE_BUFFER_MODE: () => hC,
      Unpackr: () => xD,
      addExtension: () => GC,
      clearSource: () => fC,
      decode: () => yC,
      decodeIter: () => FC,
      encode: () => YC,
      encodeIter: () => Dc,
      isNativeAccelerationEnabled: () => RD,
      mapsAsObjects: () => cc,
      pack: () => dC,
      roundFloat32: () => gC,
      unpack: () => SC,
      unpackMultiple: () => BC,
      useRecords: () => Cc
    });
    try {
      ID = new TextDecoder
    } catch (Ic) {}
    var fD = 0;
    const bD = [];
    var QD, wD, SD, BD, yD, MD = bD,
      tD = 0,
      ZD = {},
      oD = 0,
      vD = 0,
      ND = [],
      gD = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class XD {}
    const mD = new XD;
    mD.name = "MessagePack 0xC1";
    var nD, OD, PD, HD = !1,
      UD = 2;
    try {
      new Function("")
    } catch (Ic) {
      UD = 1 / 0
    }
    class xD {
      constructor(DD) {
        DD && (!1 === DD.useRecords && void 0 === DD.mapsAsObjects && (DD.mapsAsObjects = !0), DD.sequential && !1 !== DD.trusted && (DD.trusted = !0, DD.structures || 0 == DD.useRecords || (DD.structures = [], DD.maxSharedStructures || (DD.maxSharedStructures = 0))), DD.structures ? DD.structures.sharedLength = DD.structures.length : DD.getStructures && ((DD.structures = []).uninitialized = !0, DD.structures.sharedLength = 0), DD.int64AsNumber && (DD.int64AsType = "number")), Object.assign(this, DD)
      }
      unpack(DD, CD) {
        if (pD) return iC((() => (fC(), this ? this.unpack(DD, CD) : xD.prototype.unpack.call(gD, DD, CD))));
        DD.buffer || DD.constructor !== ArrayBuffer || (DD = "undefined" !== typeof Buffer ? Buffer.from(DD) : new Uint8Array(DD)), "object" === typeof CD ? (iD = CD.end || DD.length, fD = CD.start || 0) : (fD = 0, iD = CD > -1 ? CD : DD.length), tD = 0, vD = 0, wD = null, MD = bD, SD = null, pD = DD;
        try {
          yD = DD.dataView || (DD.dataView = new DataView(DD.buffer, DD.byteOffset, DD.byteLength))
        } catch (Ic) {
          if (pD = null, DD instanceof Uint8Array) throw Ic;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (DD && "object" == typeof DD ? DD.constructor.name : typeof DD))
        }
        if (this instanceof xD) {
          if (ZD = this, this.structures) return QD = this.structures, qD(CD);
          (!QD || QD.length > 0) && (QD = [])
        } else ZD = gD, (!QD || QD.length > 0) && (QD = []);
        return qD(CD)
      }
      unpackMultiple(DD, CD) {
        let cD, ID = 0;
        try {
          HD = !0;
          let pD = DD.length,
            iD = this ? this.unpack(DD, pD) : wC.unpack(DD, pD);
          if (!CD) {
            for (cD = [iD]; fD < pD;) ID = fD, cD.push(qD());
            return cD
          }
          if (!1 === CD(iD, ID, fD)) return;
          for (; fD < pD;)
            if (ID = fD, !1 === CD(qD(), ID, fD)) return
        } catch (Ic) {
          throw Ic.lastPosition = ID, Ic.values = cD, Ic
        } finally {
          HD = !1, fC()
        }
      }
      _mergeStructures(DD, CD) {
        OD && (DD = OD.call(this, DD)), DD = DD || [], Object.isFrozen(DD) && (DD = DD.map((DD => DD.slice(0))));
        for (let cD = 0, ID = DD.length; cD < ID; cD++) {
          let CD = DD[cD];
          CD && (CD.isShared = !0, cD >= 32 && (CD.highByte = cD - 32 >> 5))
        }
        DD.sharedLength = DD.length;
        for (let cD in CD || [])
          if (cD >= 0) {
            let ID = DD[cD],
              pD = CD[cD];
            pD && (ID && ((DD.restoreStructures || (DD.restoreStructures = []))[cD] = ID), DD[cD] = pD)
          } return this.structures = DD
      }
      decode(DD, CD) {
        return this.unpack(DD, CD)
      }
    }

    function qD(DD) {
      try {
        if (!ZD.trusted && !HD) {
          let DD = QD.sharedLength || 0;
          DD < QD.length && (QD.length = DD)
        }
        let CD;
        if (ZD.randomAccessStructure && pD[fD] < 64 && pD[fD] >= 32 && nD ? (CD = nD(pD, fD, iD, ZD), pD = null, DD && DD.lazy || !CD || (CD = CD.toJSON()), fD = iD) : CD = KD(), SD && (fD = SD.postBundlePosition, SD = null), HD && (QD.restoreStructures = null), fD == iD) QD && QD.restoreStructures && JD(), QD = null, pD = null, BD && (BD = null);
        else {
          if (fD > iD) throw new Error("Unexpected end of MessagePack data");
          if (!HD) {
            let DD;
            try {
              DD = JSON.stringify(CD, ((DD, CD) => "bigint" === typeof CD ? `${CD}n` : CD)).slice(0, 100)
            } catch (Ic) {
              DD = "(JSON view not available " + Ic + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + DD)
          }
        }
        return CD
      } catch (Ic) {
        throw QD && QD.restoreStructures && JD(), fC(), (Ic instanceof RangeError || Ic.message.startsWith("Unexpected end of buffer") || fD > iD) && (Ic.incomplete = !0), Ic
      }
    }

    function JD() {
      for (let DD in QD.restoreStructures) QD[DD] = QD.restoreStructures[DD];
      QD.restoreStructures = null
    }

    function KD() {
      let DD = pD[fD++];
      if (DD < 160) {
        if (DD < 128) {
          if (DD < 64) return DD;
          {
            let CD = QD[63 & DD] || ZD.getStructures && jD()[63 & DD];
            return CD ? (CD.read || (CD.read = VD(CD, 63 & DD)), CD.read()) : DD
          }
        }
        if (DD < 144) {
          if (DD -= 128, ZD.mapsAsObjects) {
            let CD = {};
            for (let cD = 0; cD < DD; cD++) {
              let DD = AD();
              "__proto__" === DD && (DD = "__proto_"), CD[DD] = KD()
            }
            return CD
          } {
            let CD = new Map;
            for (let cD = 0; cD < DD; cD++) CD.set(KD(), KD());
            return CD
          }
        } {
          DD -= 144;
          let CD = new Array(DD);
          for (let cD = 0; cD < DD; cD++) CD[cD] = KD();
          return ZD.freezeData ? Object.freeze(CD) : CD
        }
      }
      if (DD < 192) {
        let CD = DD - 160;
        if (vD >= fD) return wD.slice(fD - oD, (fD += CD) - oD);
        if (0 == vD && iD < 140) {
          let DD = CD < 16 ? ED(CD) : sD(CD);
          if (null != DD) return DD
        }
        return lD(CD)
      } {
        let CD;
        switch (DD) {
          case 192:
            return null;
          case 193:
            return SD ? (CD = KD(), CD > 0 ? SD[1].slice(SD.position1, SD.position1 += CD) : SD[0].slice(SD.position0, SD.position0 -= CD)) : mD;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (CD = pD[fD++], void 0 === CD) throw new Error("Unexpected end of buffer");
            return uD(CD);
          case 197:
            return CD = yD.getUint16(fD), fD += 2, uD(CD);
          case 198:
            return CD = yD.getUint32(fD), fD += 4, uD(CD);
          case 199:
            return hD(pD[fD++]);
          case 200:
            return CD = yD.getUint16(fD), fD += 2, hD(CD);
          case 201:
            return CD = yD.getUint32(fD), fD += 4, hD(CD);
          case 202:
            if (CD = yD.getFloat32(fD), ZD.useFloat32 > 2) {
              let DD = bC[(127 & pD[fD]) << 1 | pD[fD + 1] >> 7];
              return fD += 4, (DD * CD + (CD > 0 ? .5 : -.5) | 0) / DD
            }
            return fD += 4, CD;
          case 203:
            return CD = yD.getFloat64(fD), fD += 8, CD;
          case 204:
            return pD[fD++];
          case 205:
            return CD = yD.getUint16(fD), fD += 2, CD;
          case 206:
            return CD = yD.getUint32(fD), fD += 4, CD;
          case 207:
            return "number" === ZD.int64AsType ? (CD = 4294967296 * yD.getUint32(fD), CD += yD.getUint32(fD + 4)) : "string" === ZD.int64AsType ? CD = yD.getBigUint64(fD).toString() : "auto" === ZD.int64AsType ? (CD = yD.getBigUint64(fD), CD <= BigInt(2) << BigInt(52) && (CD = Number(CD))) : CD = yD.getBigUint64(fD), fD += 8, CD;
          case 208:
            return yD.getInt8(fD++);
          case 209:
            return CD = yD.getInt16(fD), fD += 2, CD;
          case 210:
            return CD = yD.getInt32(fD), fD += 4, CD;
          case 211:
            return "number" === ZD.int64AsType ? (CD = 4294967296 * yD.getInt32(fD), CD += yD.getUint32(fD + 4)) : "string" === ZD.int64AsType ? CD = yD.getBigInt64(fD).toString() : "auto" === ZD.int64AsType ? (CD = yD.getBigInt64(fD), CD >= BigInt(-2) << BigInt(52) && CD <= BigInt(2) << BigInt(52) && (CD = Number(CD))) : CD = yD.getBigInt64(fD), fD += 8, CD;
          case 212:
            if (CD = pD[fD++], 114 == CD) return DC(63 & pD[fD++]);
            {
              let DD = ND[CD];
              if (DD) return DD.read ? (fD++, DD.read(KD())) : DD.noBuffer ? (fD++, DD()) : DD(pD.subarray(fD, ++fD));
              throw new Error("Unknown extension " + CD)
            }
          case 213:
            return CD = pD[fD], 114 == CD ? (fD++, DC(63 & pD[fD++], pD[fD++])) : hD(2);
          case 214:
            return hD(4);
          case 215:
            return hD(8);
          case 216:
            return hD(16);
          case 217:
            return CD = pD[fD++], vD >= fD ? wD.slice(fD - oD, (fD += CD) - oD) : LD(CD);
          case 218:
            return CD = yD.getUint16(fD), vD >= (fD += 2) ? wD.slice(fD - oD, (fD += CD) - oD) : TD(CD);
          case 219:
            return CD = yD.getUint32(fD), vD >= (fD += 4) ? wD.slice(fD - oD, (fD += CD) - oD) : GD(CD);
          case 220:
            return CD = yD.getUint16(fD), fD += 2, dD(CD);
          case 221:
            return CD = yD.getUint32(fD), fD += 4, dD(CD);
          case 222:
            return CD = yD.getUint16(fD), fD += 2, YD(CD);
          case 223:
            return CD = yD.getUint32(fD), fD += 4, YD(CD);
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
    const aD = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function VD(DD, CD) {
      function cD() {
        if (cD.count++ > UD) {
          let cD = DD.read = new Function("r", "return function(){return " + (ZD.freezeData ? "Object.freeze" : "") + "({" + DD.map((DD => "__proto__" === DD ? "__proto_:r()" : aD.test(DD) ? DD + ":r()" : "[" + JSON.stringify(DD) + "]:r()")).join(",") + "})}")(KD);
          return 0 === DD.highByte && (DD.read = zD(CD, DD.read)), cD()
        }
        let ID = {};
        for (let CD = 0, cD = DD.length; CD < cD; CD++) {
          let cD = DD[CD];
          "__proto__" === cD && (cD = "__proto_"), ID[cD] = KD()
        }
        return ZD.freezeData ? Object.freeze(ID) : ID
      }
      return cD.count = 0, 0 === DD.highByte ? zD(CD, cD) : cD
    }
    const zD = (DD, CD) => function() {
      let cD = pD[fD++];
      if (0 === cD) return CD();
      let ID = DD < 32 ? -(DD + (cD << 5)) : DD + (cD << 5),
        iD = QD[ID] || jD()[ID];
      if (!iD) throw new Error("Record id is not defined for " + ID);
      return iD.read || (iD.read = VD(iD, DD)), iD.read()
    };

    function jD() {
      let DD = iC((() => (pD = null, ZD.getStructures())));
      return QD = ZD._mergeStructures(DD, QD)
    }
    var lD = kD,
      LD = kD,
      TD = kD,
      GD = kD;
    let RD = !1;

    function kD(DD) {
      let CD;
      if (DD < 16 && (CD = ED(DD))) return CD;
      if (DD > 64 && ID) return ID.decode(pD.subarray(fD, fD += DD));
      const cD = fD + DD,
        iD = [];
      for (CD = ""; fD < cD;) {
        const DD = pD[fD++];
        if (0 === (128 & DD)) iD.push(DD);
        else if (192 === (224 & DD)) {
          const CD = 63 & pD[fD++];
          iD.push((31 & DD) << 6 | CD)
        } else if (224 === (240 & DD)) {
          const CD = 63 & pD[fD++],
            cD = 63 & pD[fD++];
          iD.push((31 & DD) << 12 | CD << 6 | cD)
        } else if (240 === (248 & DD)) {
          let CD = (7 & DD) << 18 | (63 & pD[fD++]) << 12 | (63 & pD[fD++]) << 6 | 63 & pD[fD++];
          CD > 65535 && (CD -= 65536, iD.push(CD >>> 10 & 1023 | 55296), CD = 56320 | 1023 & CD), iD.push(CD)
        } else iD.push(DD);
        iD.length >= 4096 && (CD += WD.apply(String, iD), iD.length = 0)
      }
      return iD.length > 0 && (CD += WD.apply(String, iD)), CD
    }

    function dD(DD) {
      let CD = new Array(DD);
      for (let cD = 0; cD < DD; cD++) CD[cD] = KD();
      return ZD.freezeData ? Object.freeze(CD) : CD
    }

    function YD(DD) {
      if (ZD.mapsAsObjects) {
        let CD = {};
        for (let cD = 0; cD < DD; cD++) {
          let DD = AD();
          "__proto__" === DD && (DD = "__proto_"), CD[DD] = KD()
        }
        return CD
      } {
        let CD = new Map;
        for (let cD = 0; cD < DD; cD++) CD.set(KD(), KD());
        return CD
      }
    }
    var WD = String.fromCharCode;

    function sD(DD) {
      let CD = fD,
        cD = new Array(DD);
      for (let ID = 0; ID < DD; ID++) {
        const DD = pD[fD++];
        if ((128 & DD) > 0) return void(fD = CD);
        cD[ID] = DD
      }
      return WD.apply(String, cD)
    }

    function ED(DD) {
      if (DD < 4) {
        if (DD < 2) {
          if (0 === DD) return "";
          {
            let DD = pD[fD++];
            return (128 & DD) > 1 ? void(fD -= 1) : WD(DD)
          }
        } {
          let CD = pD[fD++],
            cD = pD[fD++];
          if ((128 & CD) > 0 || (128 & cD) > 0) return void(fD -= 2);
          if (DD < 3) return WD(CD, cD);
          let ID = pD[fD++];
          return (128 & ID) > 0 ? void(fD -= 3) : WD(CD, cD, ID)
        }
      } {
        let CD = pD[fD++],
          cD = pD[fD++],
          ID = pD[fD++],
          iD = pD[fD++];
        if ((128 & CD) > 0 || (128 & cD) > 0 || (128 & ID) > 0 || (128 & iD) > 0) return void(fD -= 4);
        if (DD < 6) {
          if (4 === DD) return WD(CD, cD, ID, iD);
          {
            let DD = pD[fD++];
            return (128 & DD) > 0 ? void(fD -= 5) : WD(CD, cD, ID, iD, DD)
          }
        }
        if (DD < 8) {
          let bD = pD[fD++],
            QD = pD[fD++];
          if ((128 & bD) > 0 || (128 & QD) > 0) return void(fD -= 6);
          if (DD < 7) return WD(CD, cD, ID, iD, bD, QD);
          let wD = pD[fD++];
          return (128 & wD) > 0 ? void(fD -= 7) : WD(CD, cD, ID, iD, bD, QD, wD)
        } {
          let bD = pD[fD++],
            QD = pD[fD++],
            wD = pD[fD++],
            SD = pD[fD++];
          if ((128 & bD) > 0 || (128 & QD) > 0 || (128 & wD) > 0 || (128 & SD) > 0) return void(fD -= 8);
          if (DD < 10) {
            if (8 === DD) return WD(CD, cD, ID, iD, bD, QD, wD, SD);
            {
              let DD = pD[fD++];
              return (128 & DD) > 0 ? void(fD -= 9) : WD(CD, cD, ID, iD, bD, QD, wD, SD, DD)
            }
          }
          if (DD < 12) {
            let BD = pD[fD++],
              yD = pD[fD++];
            if ((128 & BD) > 0 || (128 & yD) > 0) return void(fD -= 10);
            if (DD < 11) return WD(CD, cD, ID, iD, bD, QD, wD, SD, BD, yD);
            let MD = pD[fD++];
            return (128 & MD) > 0 ? void(fD -= 11) : WD(CD, cD, ID, iD, bD, QD, wD, SD, BD, yD, MD)
          } {
            let BD = pD[fD++],
              yD = pD[fD++],
              MD = pD[fD++],
              tD = pD[fD++];
            if ((128 & BD) > 0 || (128 & yD) > 0 || (128 & MD) > 0 || (128 & tD) > 0) return void(fD -= 12);
            if (DD < 14) {
              if (12 === DD) return WD(CD, cD, ID, iD, bD, QD, wD, SD, BD, yD, MD, tD);
              {
                let DD = pD[fD++];
                return (128 & DD) > 0 ? void(fD -= 13) : WD(CD, cD, ID, iD, bD, QD, wD, SD, BD, yD, MD, tD, DD)
              }
            } {
              let ZD = pD[fD++],
                oD = pD[fD++];
              if ((128 & ZD) > 0 || (128 & oD) > 0) return void(fD -= 14);
              if (DD < 15) return WD(CD, cD, ID, iD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD);
              let vD = pD[fD++];
              return (128 & vD) > 0 ? void(fD -= 15) : WD(CD, cD, ID, iD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD)
            }
          }
        }
      }
    }

    function eD() {
      let DD, CD = pD[fD++];
      if (CD < 192) DD = CD - 160;
      else switch (CD) {
        case 217:
          DD = pD[fD++];
          break;
        case 218:
          DD = yD.getUint16(fD), fD += 2;
          break;
        case 219:
          DD = yD.getUint32(fD), fD += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return kD(DD)
    }

    function uD(DD) {
      return ZD.copyBuffers ? Uint8Array.prototype.slice.call(pD, fD, fD += DD) : pD.subarray(fD, fD += DD)
    }

    function hD(DD) {
      let CD = pD[fD++];
      if (ND[CD]) {
        let cD;
        return ND[CD](pD.subarray(fD, cD = fD += DD), (DD => {
          fD = DD;
          try {
            return KD()
          } finally {
            fD = cD
          }
        }))
      }
      throw new Error("Unknown extension type " + CD)
    }
    var rD = new Array(4096);

    function AD() {
      let DD = pD[fD++];
      if (!(DD >= 160 && DD < 192)) return fD--, FD(KD());
      if (DD -= 160, vD >= fD) return wD.slice(fD - oD, (fD += DD) - oD);
      if (!(0 == vD && iD < 180)) return lD(DD);
      let CD, cD = 4095 & (DD << 5 ^ (DD > 1 ? yD.getUint16(fD) : DD > 0 ? pD[fD] : 0)),
        ID = rD[cD],
        bD = fD,
        QD = fD + DD - 3,
        SD = 0;
      if (ID && ID.bytes == DD) {
        for (; bD < QD;) {
          if (CD = yD.getUint32(bD), CD != ID[SD++]) {
            bD = 1879048192;
            break
          }
          bD += 4
        }
        for (QD += 3; bD < QD;)
          if (CD = pD[bD++], CD != ID[SD++]) {
            bD = 1879048192;
            break
          } if (bD === QD) return fD = bD, ID.string;
        QD -= 3, bD = fD
      }
      for (ID = [], rD[cD] = ID, ID.bytes = DD; bD < QD;) CD = yD.getUint32(bD), ID.push(CD), bD += 4;
      for (QD += 3; bD < QD;) CD = pD[bD++], ID.push(CD);
      let BD = DD < 16 ? ED(DD) : sD(DD);
      return ID.string = null != BD ? BD : lD(DD)
    }

    function FD(DD) {
      if ("string" === typeof DD) return DD;
      if ("number" === typeof DD || "boolean" === typeof DD || "bigint" === typeof DD) return DD.toString();
      if (null == DD) return DD + "";
      if (ZD.allowArraysInMapKeys && Array.isArray(DD) && DD.flat().every((DD => ["string", "number", "boolean", "bigint"].includes(typeof DD)))) return DD.flat().toString();
      throw new Error("Invalid property type for record: " + typeof DD)
    }
    const DC = (DD, CD) => {
      let cD = KD().map(FD),
        ID = DD;
      void 0 !== CD && (DD = DD < 32 ? -((CD << 5) + DD) : (CD << 5) + DD, cD.highByte = CD);
      let pD = QD[DD];
      return pD && (pD.isShared || HD) && ((QD.restoreStructures || (QD.restoreStructures = []))[DD] = pD), QD[DD] = cD, cD.read = VD(cD, ID), cD.read()
    };
    ND[0] = () => {}, ND[0].noBuffer = !0, ND[66] = DD => {
      let CD = DD.length,
        cD = BigInt(128 & DD[0] ? DD[0] - 256 : DD[0]);
      for (let ID = 1; ID < CD; ID++) cD <<= BigInt(8), cD += BigInt(DD[ID]);
      return cD
    };
    let CC = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    ND[101] = () => {
      let DD = KD();
      return (CC[DD[0]] || Error)(DD[1], {
        cause: DD[2]
      })
    }, ND[105] = DD => {
      if (!1 === ZD.structuredClone) throw new Error("Structured clone extension is disabled");
      let CD = yD.getUint32(fD - 4);
      BD || (BD = new Map);
      let cD, ID = pD[fD];
      cD = ID >= 144 && ID < 160 || 220 == ID || 221 == ID ? [] : {};
      let iD = {
        target: cD
      };
      BD.set(CD, iD);
      let bD = KD();
      return iD.used ? Object.assign(cD, bD) : (iD.target = bD, bD)
    }, ND[112] = DD => {
      if (!1 === ZD.structuredClone) throw new Error("Structured clone extension is disabled");
      let CD = yD.getUint32(fD - 4),
        cD = BD.get(CD);
      return cD.used = !0, cD.target
    }, ND[115] = () => new Set(KD());
    const cC = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((DD => DD + "Array"));
    let IC = "object" === typeof globalThis ? globalThis : window;
    ND[116] = DD => {
      let CD = DD[0],
        cD = cC[CD];
      if (!cD) {
        if (16 === CD) {
          let CD = new ArrayBuffer(DD.length - 1);
          return new Uint8Array(CD).set(DD.subarray(1)), CD
        }
        throw new Error("Could not find typed array for code " + CD)
      }
      return new IC[cD](Uint8Array.prototype.slice.call(DD, 1).buffer)
    }, ND[120] = () => {
      let DD = KD();
      return new RegExp(DD[0], DD[1])
    };
    const pC = [];

    function iC(DD) {
      PD && PD();
      let CD = iD,
        cD = fD,
        ID = tD,
        bD = oD,
        ND = vD,
        gD = wD,
        XD = MD,
        mD = BD,
        nD = SD,
        OD = new Uint8Array(pD.slice(0, iD)),
        UD = QD,
        xD = QD.slice(0, QD.length),
        qD = ZD,
        JD = HD,
        KD = DD();
      return iD = CD, fD = cD, tD = ID, oD = bD, vD = ND, wD = gD, MD = XD, BD = mD, SD = nD, pD = OD, HD = JD, (QD = UD).splice(0, QD.length, ...xD), ZD = qD, yD = new DataView(pD.buffer, pD.byteOffset, pD.byteLength), KD
    }

    function fC() {
      pD = null, BD = null, QD = null
    }
    ND[98] = DD => {
      let CD = (DD[0] << 24) + (DD[1] << 16) + (DD[2] << 8) + DD[3],
        cD = fD;
      return fD += CD - DD.length, SD = pC, (SD = [eD(), eD()]).position0 = 0, SD.position1 = 0, SD.postBundlePosition = fD, fD = cD, KD()
    }, ND[255] = DD => 4 == DD.length ? new Date(1e3 * (16777216 * DD[0] + (DD[1] << 16) + (DD[2] << 8) + DD[3])) : 8 == DD.length ? new Date(((DD[0] << 22) + (DD[1] << 14) + (DD[2] << 6) + (DD[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & DD[3]) + 16777216 * DD[4] + (DD[5] << 16) + (DD[6] << 8) + DD[7])) : 12 == DD.length ? new Date(((DD[0] << 24) + (DD[1] << 16) + (DD[2] << 8) + DD[3]) / 1e6 + 1e3 * ((128 & DD[4] ? -281474976710656 : 0) + 1099511627776 * DD[6] + 4294967296 * DD[7] + 16777216 * DD[8] + (DD[9] << 16) + (DD[10] << 8) + DD[11])) : new Date("invalid");
    const bC = new Array(147);
    for (let pc = 0; pc < 256; pc++) bC[pc] = +("1e" + Math.floor(45.15 - .30103 * pc));
    const QC = xD;
    var wC = new xD({
      useRecords: !1
    });
    const SC = wC.unpack,
      BC = wC.unpackMultiple,
      yC = wC.unpack,
      MC = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let tC, ZC, oC, vC = new Float32Array(1),
      NC = new Uint8Array(vC.buffer, 0, 4);

    function gC(DD) {
      vC[0] = DD;
      let CD = bC[(127 & NC[3]) << 1 | NC[2] >> 7];
      return (CD * DD + (DD > 0 ? .5 : -.5) | 0) / CD
    }
    try {
      tC = new TextEncoder
    } catch (Ic) {}
    const XC = "undefined" !== typeof Buffer,
      mC = XC ? function(DD) {
        return Buffer.allocUnsafeSlow(DD)
      } : Uint8Array,
      nC = XC ? Buffer : Uint8Array,
      OC = XC ? 4294967296 : 2144337920;
    let PC, HC, UC, xC, qC, JC = 0,
      KC = null;
    const aC = /[\u0080-\uFFFF]/,
      VC = Symbol("record-id");
    class zC extends xD {
      constructor(DD) {
        let CD, cD, ID, pD;
        super(DD), this.offset = 0;
        let iD = nC.prototype.utf8Write ? function(DD, CD) {
            return PC.utf8Write(DD, CD, PC.byteLength - CD)
          } : !(!tC || !tC.encodeInto) && function(DD, CD) {
            return tC.encodeInto(DD, PC.subarray(CD)).written
          },
          fD = this;
        DD || (DD = {});
        let bD = DD && DD.sequential,
          QD = DD.structures || DD.saveStructures,
          wD = DD.maxSharedStructures;
        if (null == wD && (wD = QD ? 32 : 0), wD > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        DD.structuredClone && void 0 == DD.moreTypes && (this.moreTypes = !0);
        let SD = DD.maxOwnStructures;
        null == SD && (SD = QD ? 32 : 64), this.structures || 0 == DD.useRecords || (this.structures = []);
        let BD = wD > 32 || SD + wD > 64,
          yD = wD + 64,
          MD = wD + SD + 64;
        if (MD > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let tD = [],
          ZD = 0,
          oD = 0;
        this.pack = this.encode = function(DD, iD) {
          if (PC || (PC = new mC(8192), UC = PC.dataView || (PC.dataView = new DataView(PC.buffer, 0, 8192)), JC = 0), xC = PC.length - 10, xC - JC < 2048 ? (PC = new mC(PC.length), UC = PC.dataView || (PC.dataView = new DataView(PC.buffer, 0, PC.length)), xC = PC.length - 10, JC = 0) : JC = JC + 7 & 2147483640, CD = JC, iD & AC && (JC += 255 & iD), pD = fD.structuredClone ? new Map : null, fD.bundleStrings && "string" !== typeof DD ? (KC = [], KC.size = 1 / 0) : KC = null, ID = fD.structures, ID) {
            ID.uninitialized && (ID = fD._mergeStructures(fD.getStructures()));
            let DD = ID.sharedLength || 0;
            if (DD > wD) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + ID.sharedLength);
            if (!ID.transitions) {
              ID.transitions = Object.create(null);
              for (let CD = 0; CD < DD; CD++) {
                let DD = ID[CD];
                if (!DD) continue;
                let cD, pD = ID.transitions;
                for (let CD = 0, ID = DD.length; CD < ID; CD++) {
                  let ID = DD[CD];
                  cD = pD[ID], cD || (cD = pD[ID] = Object.create(null)), pD = cD
                }
                pD[VC] = CD + 64
              }
              this.lastNamedStructuresLength = DD
            }
            bD || (ID.nextId = DD + 64)
          }
          let QD;
          cD && (cD = !1);
          try {
            fD.randomAccessStructure && DD && DD.constructor && DD.constructor === Object ? xD(DD) : gD(DD);
            let cD = KC;
            if (KC && TC(CD, gD, 0), pD && pD.idsToInsert) {
              let DD = pD.idsToInsert.sort(((DD, CD) => DD.offset > CD.offset ? 1 : -1)),
                ID = DD.length,
                iD = -1;
              for (; cD && ID > 0;) {
                let pD = DD[--ID].offset + CD;
                pD < cD.stringsPosition + CD && -1 === iD && (iD = 0), pD > cD.position + CD ? iD >= 0 && (iD += 6) : (iD >= 0 && (UC.setUint32(cD.position + CD, UC.getUint32(cD.position + CD) + iD), iD = -1), cD = cD.previous, ID++)
              }
              iD >= 0 && cD && UC.setUint32(cD.position + CD, UC.getUint32(cD.position + CD) + iD), JC += 6 * DD.length, JC > xC && PD(JC), fD.offset = JC;
              let bD = function(DD, CD) {
                let cD, ID = 6 * CD.length,
                  pD = DD.length - ID;
                for (; cD = CD.pop();) {
                  let CD = cD.offset,
                    iD = cD.id;
                  DD.copyWithin(CD + ID, CD, pD), ID -= 6;
                  let fD = CD + ID;
                  DD[fD++] = 214, DD[fD++] = 105, DD[fD++] = iD >> 24, DD[fD++] = iD >> 16 & 255, DD[fD++] = iD >> 8 & 255, DD[fD++] = 255 & iD, pD = CD
                }
                return DD
              }(PC.subarray(CD, JC), DD);
              return pD = null, bD
            }
            return fD.offset = JC, iD & hC ? (PC.start = CD, PC.end = JC, PC) : PC.subarray(CD, JC)
          } catch (Ic) {
            throw QD = Ic, Ic
          } finally {
            if (ID && (vD(), cD && fD.saveStructures)) {
              let cD = ID.sharedLength || 0,
                pD = PC.subarray(CD, JC),
                bD = RC(ID, fD);
              if (!QD) return !1 === fD.saveStructures(bD, bD.isCompatible) ? fD.pack(DD, iD) : (fD.lastNamedStructuresLength = cD, PC.length > 1073741824 && (PC = null), pD)
            }
            PC.length > 1073741824 && (PC = null), iD & rC && (JC = CD)
          }
        };
        const vD = () => {
            oD < 10 && oD++;
            let DD = ID.sharedLength || 0;
            if (ID.length > DD && !bD && (ID.length = DD), ZD > 1e4) ID.transitions = null, oD = 0, ZD = 0, tD.length > 0 && (tD = []);
            else if (tD.length > 0 && !bD) {
              for (let DD = 0, CD = tD.length; DD < CD; DD++) tD[DD][VC] = 0;
              tD = []
            }
          },
          ND = DD => {
            var CD = DD.length;
            CD < 16 ? PC[JC++] = 144 | CD : CD < 65536 ? (PC[JC++] = 220, PC[JC++] = CD >> 8, PC[JC++] = 255 & CD) : (PC[JC++] = 221, UC.setUint32(JC, CD), JC += 4);
            for (let cD = 0; cD < CD; cD++) gD(DD[cD])
          },
          gD = DD => {
            JC > xC && (PC = PD(JC));
            var cD, ID = typeof DD;
            if ("string" === ID) {
              let ID, pD = DD.length;
              if (KC && pD >= 4 && pD < 4096) {
                if ((KC.size += pD) > 21760) {
                  let DD, cD, ID = (KC[0] ? 3 * KC[0].length + KC[1].length : 0) + 10;
                  JC + ID > xC && (PC = PD(JC + ID)), KC.position ? (cD = KC, PC[JC] = 200, JC += 3, PC[JC++] = 98, DD = JC - CD, JC += 4, TC(CD, gD, 0), UC.setUint16(DD + CD - 3, JC - CD - DD)) : (PC[JC++] = 214, PC[JC++] = 98, DD = JC - CD, JC += 4), KC = ["", ""], KC.previous = cD, KC.size = 0, KC.position = DD
                }
                let cD = aC.test(DD);
                return KC[cD ? 0 : 1] += DD, PC[JC++] = 193, void gD(cD ? -pD : pD)
              }
              ID = pD < 32 ? 1 : pD < 256 ? 2 : pD < 65536 ? 3 : 5;
              let fD = 3 * pD;
              if (JC + fD > xC && (PC = PD(JC + fD)), pD < 64 || !iD) {
                let CD, iD, fD, bD = JC + ID;
                for (CD = 0; CD < pD; CD++) iD = DD.charCodeAt(CD), iD < 128 ? PC[bD++] = iD : iD < 2048 ? (PC[bD++] = iD >> 6 | 192, PC[bD++] = 63 & iD | 128) : 55296 === (64512 & iD) && 56320 === (64512 & (fD = DD.charCodeAt(CD + 1))) ? (iD = 65536 + ((1023 & iD) << 10) + (1023 & fD), CD++, PC[bD++] = iD >> 18 | 240, PC[bD++] = iD >> 12 & 63 | 128, PC[bD++] = iD >> 6 & 63 | 128, PC[bD++] = 63 & iD | 128) : (PC[bD++] = iD >> 12 | 224, PC[bD++] = iD >> 6 & 63 | 128, PC[bD++] = 63 & iD | 128);
                cD = bD - JC - ID
              } else cD = iD(DD, JC + ID);
              cD < 32 ? PC[JC++] = 160 | cD : cD < 256 ? (ID < 2 && PC.copyWithin(JC + 2, JC + 1, JC + 1 + cD), PC[JC++] = 217, PC[JC++] = cD) : cD < 65536 ? (ID < 3 && PC.copyWithin(JC + 3, JC + 2, JC + 2 + cD), PC[JC++] = 218, PC[JC++] = cD >> 8, PC[JC++] = 255 & cD) : (ID < 5 && PC.copyWithin(JC + 5, JC + 3, JC + 3 + cD), PC[JC++] = 219, UC.setUint32(JC, cD), JC += 4), JC += cD
            } else if ("number" === ID)
              if (DD >>> 0 === DD) DD < 32 || DD < 128 && !1 === this.useRecords || DD < 64 && !this.randomAccessStructure ? PC[JC++] = DD : DD < 256 ? (PC[JC++] = 204, PC[JC++] = DD) : DD < 65536 ? (PC[JC++] = 205, PC[JC++] = DD >> 8, PC[JC++] = 255 & DD) : (PC[JC++] = 206, UC.setUint32(JC, DD), JC += 4);
              else if ((DD | 0) === DD) DD >= -32 ? PC[JC++] = 256 + DD : DD >= -128 ? (PC[JC++] = 208, PC[JC++] = DD + 256) : DD >= -32768 ? (PC[JC++] = 209, UC.setInt16(JC, DD), JC += 2) : (PC[JC++] = 210, UC.setInt32(JC, DD), JC += 4);
            else {
              let CD;
              if ((CD = this.useFloat32) > 0 && DD < 4294967296 && DD >= -2147483648) {
                let cD;
                if (PC[JC++] = 202, UC.setFloat32(JC, DD), CD < 4 || ((cD = DD * bC[(127 & PC[JC]) << 1 | PC[JC + 1] >> 7]) | 0) === cD) return void(JC += 4);
                JC--
              }
              PC[JC++] = 203, UC.setFloat64(JC, DD), JC += 8
            } else if ("object" === ID || "function" === ID)
              if (DD) {
                if (pD) {
                  let cD = pD.get(DD);
                  if (cD) {
                    if (!cD.id) {
                      let DD = pD.idsToInsert || (pD.idsToInsert = []);
                      cD.id = DD.push(cD)
                    }
                    return PC[JC++] = 214, PC[JC++] = 112, UC.setUint32(JC, cD.id), void(JC += 4)
                  }
                  pD.set(DD, {
                    offset: JC - CD
                  })
                }
                let iD = DD.constructor;
                if (iD === Object) OD(DD);
                else if (iD === Array) ND(DD);
                else if (iD === Map)
                  if (this.mapAsEmptyObject) PC[JC++] = 128;
                  else {
                    (cD = DD.size) < 16 ? PC[JC++] = 128 | cD : cD < 65536 ? (PC[JC++] = 222, PC[JC++] = cD >> 8, PC[JC++] = 255 & cD) : (PC[JC++] = 223, UC.setUint32(JC, cD), JC += 4);
                    for (let [CD, cD] of DD) gD(CD), gD(cD)
                  }
                else {
                  for (let CD = 0, cD = ZC.length; CD < cD; CD++) {
                    if (DD instanceof oC[CD]) {
                      let cD = ZC[CD];
                      if (cD.write) {
                        cD.type && (PC[JC++] = 212, PC[JC++] = cD.type, PC[JC++] = 0);
                        let CD = cD.write.call(this, DD);
                        return void(CD === DD ? Array.isArray(DD) ? ND(DD) : OD(DD) : gD(CD))
                      }
                      let ID, pD = PC,
                        iD = UC,
                        fD = JC;
                      PC = null;
                      try {
                        ID = cD.pack.call(this, DD, (DD => (PC = pD, pD = null, JC += DD, JC > xC && PD(JC), {
                          target: PC,
                          targetView: UC,
                          position: JC - DD
                        })), gD)
                      } finally {
                        pD && (PC = pD, UC = iD, JC = fD, xC = PC.length - 10)
                      }
                      return void(ID && (ID.length + JC > xC && PD(ID.length + JC), JC = LC(ID, PC, JC, cD.type)))
                    }
                  }
                  if (Array.isArray(DD)) ND(DD);
                  else {
                    if (DD.toJSON) {
                      const CD = DD.toJSON();
                      if (CD !== DD) return gD(CD)
                    }
                    if ("function" === ID) return gD(this.writeFunction && this.writeFunction(DD));
                    OD(DD)
                  }
                }
              } else PC[JC++] = 192;
            else if ("boolean" === ID) PC[JC++] = DD ? 195 : 194;
            else if ("bigint" === ID) {
              if (DD < BigInt(1) << BigInt(63) && DD >= -(BigInt(1) << BigInt(63))) PC[JC++] = 211, UC.setBigInt64(JC, DD);
              else if (DD < BigInt(1) << BigInt(64) && DD > 0) PC[JC++] = 207, UC.setBigUint64(JC, DD);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return gD(DD.toString());
                  if (this.useBigIntExtension && DD < BigInt(2) ** BigInt(1023) && DD > -(BigInt(2) ** BigInt(1023))) {
                    PC[JC++] = 199, JC++, PC[JC++] = 66;
                    let CD, cD = [];
                    do {
                      let ID = DD & BigInt(255);
                      CD = (ID & BigInt(128)) === (DD < BigInt(0) ? BigInt(128) : BigInt(0)), cD.push(ID), DD >>= BigInt(8)
                    } while (DD !== BigInt(0) && DD !== BigInt(-1) || !CD);
                    PC[JC - 2] = cD.length;
                    for (let DD = cD.length; DD > 0;) PC[JC++] = Number(cD[--DD]);
                    return
                  }
                  throw new RangeError(DD + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                PC[JC++] = 203, UC.setFloat64(JC, Number(DD))
              }
              JC += 8
            } else {
              if ("undefined" !== ID) throw new Error("Unknown type: " + ID);
              this.encodeUndefinedAsNil ? PC[JC++] = 192 : (PC[JC++] = 212, PC[JC++] = 0, PC[JC++] = 0)
            }
          },
          XD = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? DD => {
            let CD;
            if (this.skipValues) {
              CD = [];
              for (let cD in DD) "function" === typeof DD.hasOwnProperty && !DD.hasOwnProperty(cD) || this.skipValues.includes(DD[cD]) || CD.push(cD)
            } else CD = Object.keys(DD);
            let cD, ID = CD.length;
            if (ID < 16 ? PC[JC++] = 128 | ID : ID < 65536 ? (PC[JC++] = 222, PC[JC++] = ID >> 8, PC[JC++] = 255 & ID) : (PC[JC++] = 223, UC.setUint32(JC, ID), JC += 4), this.coercibleKeyAsNumber)
              for (let pD = 0; pD < ID; pD++) {
                cD = CD[pD];
                let ID = Number(cD);
                gD(isNaN(ID) ? cD : ID), gD(DD[cD])
              } else
                for (let pD = 0; pD < ID; pD++) gD(cD = CD[pD]), gD(DD[cD])
          } : DD => {
            PC[JC++] = 222;
            let cD = JC - CD;
            JC += 2;
            let ID = 0;
            for (let CD in DD)("function" !== typeof DD.hasOwnProperty || DD.hasOwnProperty(CD)) && (gD(CD), gD(DD[CD]), ID++);
            if (ID > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            PC[cD++ + CD] = ID >> 8, PC[cD + CD] = 255 & ID
          },
          mD = !1 === this.useRecords ? XD : DD.progressiveRecords && !BD ? DD => {
            let cD, pD, iD = ID.transitions || (ID.transitions = Object.create(null)),
              fD = JC++ - CD;
            for (let bD in DD)
              if ("function" !== typeof DD.hasOwnProperty || DD.hasOwnProperty(bD)) {
                if (cD = iD[bD], cD) iD = cD;
                else {
                  let QD = Object.keys(DD),
                    wD = iD;
                  iD = ID.transitions;
                  let SD = 0;
                  for (let DD = 0, CD = QD.length; DD < CD; DD++) {
                    let CD = QD[DD];
                    cD = iD[CD], cD || (cD = iD[CD] = Object.create(null), SD++), iD = cD
                  }
                  fD + CD + 1 == JC ? (JC--, HD(iD, QD, SD)) : UD(iD, QD, fD, SD), pD = !0, iD = wD[bD]
                }
                gD(DD[bD])
              } if (!pD) {
              let cD = iD[VC];
              cD ? PC[fD + CD] = cD : UD(iD, Object.keys(DD), fD, 0)
            }
          } : DD => {
            let CD, cD = ID.transitions || (ID.transitions = Object.create(null)),
              pD = 0;
            for (let ID in DD)("function" !== typeof DD.hasOwnProperty || DD.hasOwnProperty(ID)) && (CD = cD[ID], CD || (CD = cD[ID] = Object.create(null), pD++), cD = CD);
            let iD = cD[VC];
            iD ? iD >= 96 && BD ? (PC[JC++] = 96 + (31 & (iD -= 96)), PC[JC++] = iD >> 5) : PC[JC++] = iD : HD(cD, cD.__keys__ || Object.keys(DD), pD);
            for (let ID in DD)("function" !== typeof DD.hasOwnProperty || DD.hasOwnProperty(ID)) && gD(DD[ID])
          },
          nD = "function" == typeof this.useRecords && this.useRecords,
          OD = nD ? DD => {
            nD(DD) ? mD(DD) : XD(DD)
          } : mD,
          PD = DD => {
            let cD;
            if (DD > 16777216) {
              if (DD - CD > OC) throw new Error("Packed buffer would be larger than maximum buffer size");
              cD = Math.min(OC, 4096 * Math.round(Math.max((DD - CD) * (DD > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else cD = 1 + (Math.max(DD - CD << 2, PC.length - 1) >> 12) << 12;
            let ID = new mC(cD);
            return UC = ID.dataView || (ID.dataView = new DataView(ID.buffer, 0, cD)), DD = Math.min(DD, PC.length), PC.copy ? PC.copy(ID, 0, CD, DD) : ID.set(PC.slice(CD, DD)), JC -= CD, CD = 0, xC = ID.length - 10, PC = ID
          },
          HD = (DD, CD, pD) => {
            let iD = ID.nextId;
            iD || (iD = 64), iD < yD && this.shouldShareStructure && !this.shouldShareStructure(CD) ? (iD = ID.nextOwnId, iD < MD || (iD = yD), ID.nextOwnId = iD + 1) : (iD >= MD && (iD = yD), ID.nextId = iD + 1);
            let fD = CD.highByte = iD >= 96 && BD ? iD - 96 >> 5 : -1;
            DD[VC] = iD, DD.__keys__ = CD, ID[iD - 64] = CD, iD < yD ? (CD.isShared = !0, ID.sharedLength = iD - 63, cD = !0, fD >= 0 ? (PC[JC++] = 96 + (31 & iD), PC[JC++] = fD) : PC[JC++] = iD) : (fD >= 0 ? (PC[JC++] = 213, PC[JC++] = 114, PC[JC++] = 96 + (31 & iD), PC[JC++] = fD) : (PC[JC++] = 212, PC[JC++] = 114, PC[JC++] = iD), pD && (ZD += oD * pD), tD.length >= SD && (tD.shift()[VC] = 0), tD.push(DD), gD(CD))
          },
          UD = (DD, cD, ID, pD) => {
            let iD = PC,
              fD = JC,
              bD = xC,
              QD = CD;
            PC = HC, JC = 0, CD = 0, PC || (HC = PC = new mC(8192)), xC = PC.length - 10, HD(DD, cD, pD), HC = PC;
            let wD = JC;
            if (PC = iD, JC = fD, xC = bD, CD = QD, wD > 1) {
              let DD = JC + wD - 1;
              DD > xC && PD(DD);
              let cD = ID + CD;
              PC.copyWithin(cD + wD, cD + 1, JC), PC.set(HC.slice(0, wD), cD), JC = DD
            } else PC[ID + CD] = HC[0]
          },
          xD = DD => {
            let pD = qC(DD, PC, CD, JC, ID, PD, ((DD, CD, ID) => {
              if (ID) return cD = !0;
              JC = CD;
              let pD = PC;
              return gD(DD), vD(), pD !== PC ? {
                position: JC,
                targetView: UC,
                target: PC
              } : JC
            }), this);
            if (0 === pD) return OD(DD);
            JC = pD
          }
      }
      useBuffer(DD) {
        PC = DD, UC = PC.dataView || (PC.dataView = new DataView(PC.buffer, PC.byteOffset, PC.byteLength)), JC = 0
      }
      set position(DD) {
        JC = DD
      }
      get position() {
        return JC
      }
      set buffer(DD) {
        PC = DD
      }
      get buffer() {
        return PC
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function jC(DD, CD, cD, ID) {
      let pD = DD.byteLength;
      if (pD + 1 < 256) {
        var {
          target: iD,
          position: fD
        } = cD(4 + pD);
        iD[fD++] = 199, iD[fD++] = pD + 1
      } else if (pD + 1 < 65536) {
        var {
          target: iD,
          position: fD
        } = cD(5 + pD);
        iD[fD++] = 200, iD[fD++] = pD + 1 >> 8, iD[fD++] = pD + 1 & 255
      } else {
        var {
          target: iD,
          position: fD,
          targetView: bD
        } = cD(7 + pD);
        iD[fD++] = 201, bD.setUint32(fD, pD + 1), fD += 4
      }
      iD[fD++] = 116, iD[fD++] = CD, DD.buffer || (DD = new Uint8Array(DD)), iD.set(new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength), fD)
    }

    function lC(DD, CD) {
      let cD = DD.byteLength;
      var ID, pD;
      if (cD < 256) {
        var {
          target: ID,
          position: pD
        } = CD(cD + 2);
        ID[pD++] = 196, ID[pD++] = cD
      } else if (cD < 65536) {
        var {
          target: ID,
          position: pD
        } = CD(cD + 3);
        ID[pD++] = 197, ID[pD++] = cD >> 8, ID[pD++] = 255 & cD
      } else {
        var {
          target: ID,
          position: pD,
          targetView: iD
        } = CD(cD + 5);
        ID[pD++] = 198, iD.setUint32(pD, cD), pD += 4
      }
      ID.set(DD, pD)
    }

    function LC(DD, CD, cD, ID) {
      let pD = DD.length;
      switch (pD) {
        case 1:
          CD[cD++] = 212;
          break;
        case 2:
          CD[cD++] = 213;
          break;
        case 4:
          CD[cD++] = 214;
          break;
        case 8:
          CD[cD++] = 215;
          break;
        case 16:
          CD[cD++] = 216;
          break;
        default:
          pD < 256 ? (CD[cD++] = 199, CD[cD++] = pD) : pD < 65536 ? (CD[cD++] = 200, CD[cD++] = pD >> 8, CD[cD++] = 255 & pD) : (CD[cD++] = 201, CD[cD++] = pD >> 24, CD[cD++] = pD >> 16 & 255, CD[cD++] = pD >> 8 & 255, CD[cD++] = 255 & pD)
      }
      return CD[cD++] = ID, CD.set(DD, cD), cD += pD
    }

    function TC(DD, CD, cD) {
      if (KC.length > 0) {
        UC.setUint32(KC.position + DD, JC + cD - KC.position - DD), KC.stringsPosition = JC - DD;
        let ID = KC;
        KC = null, CD(ID[0]), CD(ID[1])
      }
    }

    function GC(DD) {
      if (DD.Class) {
        if (!DD.pack && !DD.write) throw new Error("Extension has no pack or write function");
        if (DD.pack && !DD.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        oC.unshift(DD.Class), ZC.unshift(DD)
      }! function(DD) {
        DD.unpack ? ND[DD.type] = DD.unpack : ND[DD.type] = DD
      }(DD)
    }

    function RC(DD, CD) {
      return DD.isCompatible = DD => {
        let cD = !DD || (CD.lastNamedStructuresLength || 0) === DD.length;
        return cD || CD._mergeStructures(DD), cD
      }, DD
    }
    oC = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, XD], ZC = [{
      pack(DD, CD, cD) {
        let ID = DD.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === DD.getMilliseconds()) && ID >= 0 && ID < 4294967296) {
          let {
            target: DD,
            targetView: cD,
            position: pD
          } = CD(6);
          DD[pD++] = 214, DD[pD++] = 255, cD.setUint32(pD, ID)
        } else if (ID > 0 && ID < 4294967296) {
          let {
            target: cD,
            targetView: pD,
            position: iD
          } = CD(10);
          cD[iD++] = 215, cD[iD++] = 255, pD.setUint32(iD, 4e6 * DD.getMilliseconds() + (ID / 1e3 / 4294967296 | 0)), pD.setUint32(iD + 4, ID)
        } else if (isNaN(ID)) {
          if (this.onInvalidDate) return CD(0), cD(this.onInvalidDate());
          let {
            target: DD,
            targetView: ID,
            position: pD
          } = CD(3);
          DD[pD++] = 212, DD[pD++] = 255, DD[pD++] = 255
        } else {
          let {
            target: cD,
            targetView: pD,
            position: iD
          } = CD(15);
          cD[iD++] = 199, cD[iD++] = 12, cD[iD++] = 255, pD.setUint32(iD, 1e6 * DD.getMilliseconds()), pD.setBigInt64(iD + 4, BigInt(Math.floor(ID)))
        }
      }
    }, {
      pack(DD, CD, cD) {
        if (this.setAsEmptyObject) return CD(0), cD({});
        let ID = Array.from(DD),
          {
            target: pD,
            position: iD
          } = CD(this.moreTypes ? 3 : 0);
        this.moreTypes && (pD[iD++] = 212, pD[iD++] = 115, pD[iD++] = 0), cD(ID)
      }
    }, {
      pack(DD, CD, cD) {
        let {
          target: ID,
          position: pD
        } = CD(this.moreTypes ? 3 : 0);
        this.moreTypes && (ID[pD++] = 212, ID[pD++] = 101, ID[pD++] = 0), cD([DD.name, DD.message, DD.cause])
      }
    }, {
      pack(DD, CD, cD) {
        let {
          target: ID,
          position: pD
        } = CD(this.moreTypes ? 3 : 0);
        this.moreTypes && (ID[pD++] = 212, ID[pD++] = 120, ID[pD++] = 0), cD([DD.source, DD.flags])
      }
    }, {
      pack(DD, CD) {
        this.moreTypes ? jC(DD, 16, CD) : lC(XC ? Buffer.from(DD) : new Uint8Array(DD), CD)
      }
    }, {
      pack(DD, CD) {
        let cD = DD.constructor;
        cD !== nC && this.moreTypes ? jC(DD, cC.indexOf(cD.name), CD) : lC(DD, CD)
      }
    }, {
      pack(DD, CD) {
        let {
          target: cD,
          position: ID
        } = CD(1);
        cD[ID] = 193
      }
    }];
    let kC = new zC({
      useRecords: !1
    });
    const dC = kC.pack,
      YC = kC.pack,
      WC = zC,
      {
        NEVER: sC,
        ALWAYS: EC,
        DECIMAL_ROUND: eC,
        DECIMAL_FIT: uC
      } = MC,
      hC = 512,
      rC = 1024,
      AC = 2048;
    const FC = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!DD || "object" !== typeof DD) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const cD = new xD(CD);
        let ID;
        const pD = DD => {
          let CD;
          ID && (DD = Buffer.concat([ID, DD]), ID = void 0);
          try {
            CD = cD.unpackMultiple(DD)
          } catch (pD) {
            if (!pD.incomplete) throw pD;
            ID = DD.slice(pD.lastPosition), CD = pD.values
          }
          return CD
        };
        return "function" === typeof DD[Symbol.iterator] ? function*() {
          for (const CD of DD) yield* pD(CD)
        }() : "function" === typeof DD[Symbol.asyncIterator] ? async function*() {
          for await (const CD of DD) yield* pD(CD)
        }(): void 0
      },
      Dc = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (DD && "object" === typeof DD) {
          if ("function" === typeof DD[Symbol.iterator]) return function*(DD, CD) {
            const cD = new zC(CD);
            for (const ID of DD) yield cD.pack(ID)
          }(DD, CD);
          if ("function" === typeof DD.then || "function" === typeof DD[Symbol.asyncIterator]) return async function*(DD, CD) {
            const cD = new zC(CD);
            for await (const ID of DD) yield cD.pack(ID)
          }(DD, CD);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Cc = !1,
      cc = !0
  },
  8811: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      $changes: () => ZD,
      $childType: () => oD,
      $decoder: () => SD,
      $deleteByIndex: () => MD,
      $encoder: () => wD,
      $filter: () => BD,
      $getByIndex: () => yD,
      $numFields: () => UD,
      $refId: () => bD,
      $track: () => QD,
      $values: () => mD,
      ArraySchema: () => cI,
      Callbacks: () => cp,
      ChangeTree: () => Jc,
      CollectionSchema: () => iI,
      Decoder: () => eI,
      Encoder: () => YI,
      FieldBuilder: () => QI,
      MapSchema: () => pI,
      Metadata: () => eC,
      OPERATION: () => pD,
      Reflection: () => AI,
      ReflectionField: () => hI,
      ReflectionType: () => rI,
      Root: () => KI,
      Schema: () => qI,
      SetSchema: () => fI,
      StateCallbackStrategy: () => Cp,
      StateView: () => lI,
      StreamSchema: () => bI,
      TypeContext: () => RC,
      createPool: () => pp,
      decode: () => gC,
      decodeKeyValueOperation: () => hc,
      decodeSchemaOperation: () => uc,
      defineCustomTypes: () => OC,
      defineTypes: () => HI,
      deprecated: () => OI,
      dumpChanges: () => xI,
      encode: () => CC,
      encodeArray: () => Tc,
      encodeIndexedEntry: () => lc,
      encodeKeyValueOperation: () => Lc,
      encodeMapEntry: () => jc,
      encodeSchemaOperation: () => zc,
      qt: () => ZI,
      fullStateOnly: () => gI,
      getDecoderStateCallbacks: () => FI,
      getEncodeDescriptor: () => Dc,
      getRawChangesCallback: () => Dp,
      isBuilder: () => wI,
      patchOnly: () => NI,
      registerType: () => nC,
      schema: () => UI,
      t: () => MI,
      type: () => XI,
      unreliable: () => vI,
      view: () => oI
    });
    const ID = 255;
    var pD;

    function iD(DD) {
      Object.defineProperty(DD, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(DD) {
      DD[DD.ADD = 128] = "ADD", DD[DD.REPLACE = 0] = "REPLACE", DD[DD.DELETE = 64] = "DELETE", DD[DD.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", DD[DD.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", DD[DD.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", DD[DD.CLEAR = 10] = "CLEAR", DD[DD.REVERSE = 15] = "REVERSE", DD[DD.MOVE = 32] = "MOVE", DD[DD.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", DD[DD.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(pD || (pD = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const fD = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const DD = "colyseus.symbolRegistry",
        CD = fD[DD] || (fD[DD] = Object.create(null));
      Symbol.for = function(DD) {
        return CD[DD] || (CD[DD] = Symbol(DD))
      }, Symbol.keyFor = function(DD) {
        for (const cD in CD)
          if (CD[cD] === DD) return cD
      }
    }
    const bD = Symbol.for("$refId"),
      QD = "~track",
      wD = "~encoder",
      SD = "~decoder",
      BD = "~filter",
      yD = "~getByIndex",
      MD = "~deleteByIndex",
      tD = "~resyncPrune",
      ZD = Symbol.for("$changes"),
      oD = Symbol.for("$childType"),
      vD = Symbol.for("$proxyTarget"),
      ND = "~onEncodeEnd",
      gD = "~reset",
      XD = "~onDecodeEnd",
      mD = Symbol.for("$values"),
      nD = "~builder",
      OD = "~descriptors",
      PD = "~__encodeDescriptor",
      HD = "~encoders",
      UD = "~__numFields",
      xD = "~__refTypeFieldIndexes",
      qD = "~__viewFieldIndexes",
      JD = "$__fieldIndexesByViewTag",
      KD = "~__unreliableFieldIndexes",
      aD = "~__patchOnlyFieldIndexes",
      VD = "~__fullSyncSkipIndexes",
      zD = "~__fullStateOnlyFieldIndexes",
      jD = "~__streamFieldIndexes",
      lD = "~__streamPriorities";
    let LD;
    try {
      LD = new TextEncoder
    } catch (ip) {}
    const TD = new ArrayBuffer(8),
      GD = new Int32Array(TD),
      RD = new Float32Array(TD),
      kD = new Float64Array(TD),
      dD = new BigInt64Array(TD),
      YD = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(DD, CD) {
        for (var cD = 0, ID = 0, pD = 0, iD = DD.length; pD < iD; pD++)(cD = DD.charCodeAt(pD)) < 128 ? ID += 1 : cD < 2048 ? ID += 2 : cD < 55296 || cD >= 57344 ? ID += 3 : (pD++, ID += 4);
        return ID
      };

    function WD(DD, CD, cD) {
      for (var ID = 0, pD = 0, iD = CD.length; pD < iD; pD++)(ID = CD.charCodeAt(pD)) < 128 ? DD[cD.offset++] = ID : ID < 2048 ? (DD[cD.offset] = 192 | ID >> 6, DD[cD.offset + 1] = 128 | 63 & ID, cD.offset += 2) : ID < 55296 || ID >= 57344 ? (DD[cD.offset] = 224 | ID >> 12, DD[cD.offset + 1] = 128 | ID >> 6 & 63, DD[cD.offset + 2] = 128 | 63 & ID, cD.offset += 3) : (pD++, ID = 65536 + ((1023 & ID) << 10 | 1023 & CD.charCodeAt(pD)), DD[cD.offset] = 240 | ID >> 18, DD[cD.offset + 1] = 128 | ID >> 12 & 63, DD[cD.offset + 2] = 128 | ID >> 6 & 63, DD[cD.offset + 3] = 128 | 63 & ID, cD.offset += 4)
    }

    function sD(DD, CD, cD) {
      DD[cD.offset++] = 255 & CD
    }

    function ED(DD, CD, cD) {
      DD[cD.offset++] = 255 & CD, DD[cD.offset++] = CD >> 8 & 255
    }

    function eD(DD, CD, cD) {
      DD[cD.offset++] = 255 & CD, DD[cD.offset++] = CD >> 8 & 255
    }

    function uD(DD, CD, cD) {
      DD[cD.offset++] = 255 & CD, DD[cD.offset++] = CD >> 8 & 255, DD[cD.offset++] = CD >> 16 & 255, DD[cD.offset++] = CD >> 24 & 255
    }

    function hD(DD, CD, cD) {
      const ID = CD >> 24,
        pD = CD >> 16,
        iD = CD >> 8,
        fD = CD;
      DD[cD.offset++] = 255 & fD, DD[cD.offset++] = 255 & iD, DD[cD.offset++] = 255 & pD, DD[cD.offset++] = 255 & ID
    }

    function rD(DD, CD, cD) {
      const ID = Math.floor(CD / Math.pow(2, 32));
      hD(DD, CD >>> 0, cD), hD(DD, ID, cD)
    }

    function AD(DD, CD, cD) {
      const ID = CD / Math.pow(2, 32) | 0;
      hD(DD, CD >>> 0, cD), hD(DD, ID, cD)
    }

    function FD(DD, CD, cD) {
      RD[0] = CD, uD(DD, GD[0], cD)
    }

    function DC(DD, CD, cD) {
      kD[0] = CD, uD(DD, GD[0], cD), uD(DD, GD[1], cD)
    }
    const CC = {
        int8: sD,
        uint8: function(DD, CD, cD) {
          DD[cD.offset++] = 255 & CD
        },
        int16: ED,
        uint16: eD,
        int32: uD,
        uint32: hD,
        int64: rD,
        uint64: AD,
        bigint64: function(DD, CD, cD) {
          dD[0] = BigInt.asIntN(64, CD), uD(DD, GD[0], cD), uD(DD, GD[1], cD)
        },
        biguint64: function(DD, CD, cD) {
          dD[0] = BigInt.asIntN(64, CD), uD(DD, GD[0], cD), uD(DD, GD[1], cD)
        },
        float32: FD,
        float64: DC,
        boolean: function(DD, CD, cD) {
          DD[cD.offset++] = CD ? 1 : 0
        },
        string: function(DD, CD, cD) {
          CD || (CD = "");
          let ID = YD(CD, "utf8"),
            pD = 0;
          if (ID < 32) DD[cD.offset++] = 160 | ID, pD = 1;
          else if (ID < 256) DD[cD.offset++] = 217, DD[cD.offset++] = ID, pD = 2;
          else if (ID < 65536) DD[cD.offset++] = 218, eD(DD, ID, cD), pD = 3;
          else {
            if (!(ID < 4294967296)) throw new Error("String too long");
            DD[cD.offset++] = 219, hD(DD, ID, cD), pD = 5
          }
          return WD(DD, CD, cD), pD + ID
        },
        number: function DD(CD, cD, ID) {
          return isNaN(cD) ? DD(CD, 0, ID) : isFinite(cD) ? cD !== (0 | cD) ? Math.abs(cD) <= 34028235e31 && (RD[0] = cD, Math.abs(Math.abs(RD[0]) - Math.abs(cD)) < 1e-4) ? (CD[ID.offset++] = 202, FD(CD, cD, ID), 5) : (CD[ID.offset++] = 203, DC(CD, cD, ID), 9) : cD >= 0 ? cD < 128 ? (CD[ID.offset++] = 255 & cD, 1) : cD < 256 ? (CD[ID.offset++] = 204, CD[ID.offset++] = 255 & cD, 2) : cD < 65536 ? (CD[ID.offset++] = 205, eD(CD, cD, ID), 3) : cD < 4294967296 ? (CD[ID.offset++] = 206, hD(CD, cD, ID), 5) : (CD[ID.offset++] = 207, AD(CD, cD, ID), 9) : cD >= -32 ? (CD[ID.offset++] = 224 | cD + 32, 1) : cD >= -128 ? (CD[ID.offset++] = 208, sD(CD, cD, ID), 2) : cD >= -32768 ? (CD[ID.offset++] = 209, ED(CD, cD, ID), 3) : cD >= -2147483648 ? (CD[ID.offset++] = 210, uD(CD, cD, ID), 5) : (CD[ID.offset++] = 211, rD(CD, cD, ID), 9) : DD(CD, cD > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, ID)
        },
        utf8Write: WD,
        utf8Length: YD
      },
      cC = new ArrayBuffer(8),
      IC = new Int32Array(cC),
      pC = new Float32Array(cC),
      iC = new Float64Array(cC),
      fC = new BigUint64Array(cC),
      bC = new BigInt64Array(cC);

    function QC(DD, CD, cD) {
      cD > DD.length - CD.offset && (cD = DD.length - CD.offset);
      for (var ID = "", pD = 0, iD = CD.offset, fD = CD.offset + cD; iD < fD; iD++) {
        var bD = DD[iD];
        if (0 !== (128 & bD))
          if (192 !== (224 & bD))
            if (224 !== (240 & bD)) {
              if (240 !== (248 & bD)) {
                console.error("decode.utf8Read(): Invalid byte " + bD + " at offset " + iD + ". Skip to end of string: " + (CD.offset + cD));
                break
              }(pD = (7 & bD) << 18 | (63 & DD[++iD]) << 12 | (63 & DD[++iD]) << 6 | 63 & DD[++iD]) >= 65536 ? (pD -= 65536, ID += String.fromCharCode(55296 + (pD >>> 10), 56320 + (1023 & pD))) : ID += String.fromCharCode(pD)
            } else ID += String.fromCharCode((15 & bD) << 12 | (63 & DD[++iD]) << 6 | 63 & DD[++iD]);
        else ID += String.fromCharCode((31 & bD) << 6 | 63 & DD[++iD]);
        else ID += String.fromCharCode(bD)
      }
      return CD.offset += cD, ID
    }

    function wC(DD, CD) {
      return SC(DD, CD) << 24 >> 24
    }

    function SC(DD, CD) {
      return DD[CD.offset++]
    }

    function BC(DD, CD) {
      return yC(DD, CD) << 16 >> 16
    }

    function yC(DD, CD) {
      return DD[CD.offset++] | DD[CD.offset++] << 8
    }

    function MC(DD, CD) {
      return DD[CD.offset++] | DD[CD.offset++] << 8 | DD[CD.offset++] << 16 | DD[CD.offset++] << 24
    }

    function tC(DD, CD) {
      return MC(DD, CD) >>> 0
    }

    function ZC(DD, CD) {
      return IC[0] = MC(DD, CD), pC[0]
    }

    function oC(DD, CD) {
      return IC[0] = MC(DD, CD), IC[1] = MC(DD, CD), iC[0]
    }

    function vC(DD, CD) {
      const cD = tC(DD, CD);
      return MC(DD, CD) * Math.pow(2, 32) + cD
    }

    function NC(DD, CD) {
      const cD = tC(DD, CD);
      return tC(DD, CD) * Math.pow(2, 32) + cD
    }
    const gC = {
        utf8Read: QC,
        int8: wC,
        uint8: SC,
        int16: BC,
        uint16: yC,
        int32: MC,
        uint32: tC,
        float32: ZC,
        float64: oC,
        int64: vC,
        uint64: NC,
        bigint64: function(DD, CD) {
          return IC[0] = MC(DD, CD), IC[1] = MC(DD, CD), bC[0]
        },
        biguint64: function(DD, CD) {
          return IC[0] = MC(DD, CD), IC[1] = MC(DD, CD), fC[0]
        },
        boolean: function(DD, CD) {
          return SC(DD, CD) > 0
        },
        string: function(DD, CD) {
          const cD = DD[CD.offset++];
          let ID;
          return cD < 192 ? ID = 31 & cD : 217 === cD ? ID = SC(DD, CD) : 218 === cD ? ID = yC(DD, CD) : 219 === cD && (ID = tC(DD, CD)), QC(DD, CD, ID)
        },
        number: function(DD, CD) {
          const cD = DD[CD.offset++];
          return cD < 128 ? cD : 202 === cD ? ZC(DD, CD) : 203 === cD ? oC(DD, CD) : 204 === cD ? SC(DD, CD) : 205 === cD ? yC(DD, CD) : 206 === cD ? tC(DD, CD) : 207 === cD ? NC(DD, CD) : 208 === cD ? wC(DD, CD) : 209 === cD ? BC(DD, CD) : 210 === cD ? MC(DD, CD) : 211 === cD ? vC(DD, CD) : cD > 223 ? -1 * (255 - cD + 1) : void 0
        },
        stringCheck: function(DD, CD) {
          const cD = DD[CD.offset];
          return cD < 192 && cD > 160 || 217 === cD || 218 === cD || 219 === cD
        }
      },
      XC = {},
      mC = new Map;

    function nC(DD, CD) {
      CD.constructor && (Object.prototype.hasOwnProperty.call(CD, "constructor") && null == CD.constructor[Symbol.metadata] && iD(CD.constructor), mC.set(CD.constructor, DD), XC[DD] = CD), CD.encode && (CC[DD] = CD.encode), CD.decode && (gC[DD] = CD.decode)
    }

    function OC(DD) {
      for (const CD in DD) nC(CD, DD[CD]);
      return DD => XI(DD)
    }
    const PC = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function HC() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function UC(DD) {
      return DD._stream ??= HC()
    }

    function xC(DD, CD, cD) {
      0 === CD.activeViews.size && UC(DD).broadcastPending.add(cD)
    }

    function qC(DD, CD, cD, ID) {
      const iD = DD._stream;
      if (void 0 === iD) return !0;
      let fD = !1;
      return iD.broadcastPending.delete(ID) ? fD = !0 : iD.sentBroadcast.delete(ID) && iD.broadcastDeletes.add(ID), CD.forEachActiveView((DD => {
        const CD = iD.pendingByView.get(DD.id);
        if (CD?.has(ID)) return CD.delete(ID), void(fD = !0);
        const bD = iD.sentByView.get(DD.id);
        if (bD?.has(ID)) {
          bD.delete(ID);
          let CD = DD.changes.get(cD);
          void 0 === CD && (CD = new Map, DD.changes.set(cD, CD)), CD.set(ID, pD.DELETE)
        }
      })), fD
    }

    function JC(DD, CD) {
      const cD = DD._stream?.pendingByView;
      if (void 0 === cD) return !1;
      for (const [ID, pD] of cD)
        if (pD.size > 0 && void 0 !== CD.activeViews.get(ID)?.deref()) return !0;
      return !1
    }

    function KC(DD) {
      const CD = DD._stream;
      return void 0 !== CD && (CD.broadcastPending.size > 0 || CD.broadcastDeletes.size > 0)
    }

    function aC(DD, CD, cD) {
      const ID = UC(DD);
      let pD = ID.pendingByView.get(CD);
      void 0 === pD && (pD = new Set, ID.pendingByView.set(CD, pD)), pD.add(cD)
    }

    function VC(DD, CD) {
      const cD = DD._stream;
      void 0 !== cD && (cD.pendingByView.delete(CD), cD.sentByView.delete(CD), cD.priorityByView?.delete(CD))
    }
    const zC = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function jC(DD) {
      if (null == DD || "object" !== typeof DD) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: CD,
        max: cD
      } = DD;
      if ("number" !== typeof CD || "number" !== typeof cD || !(cD > CD) || !Number.isFinite(CD) || !Number.isFinite(cD)) throw new Error(`t.quantized(): require finite min < max (got min=${CD}, max=${cD}).`);
      const ID = DD.bits ?? 16;
      if (8 !== ID && 16 !== ID && 32 !== ID) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${ID}).`);
      const pD = DD.mode ?? "clamp";
      if ("clamp" !== pD && "wrap" !== pD) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(pD)}).`);
      const iD = "wrap" === pD,
        fD = Math.pow(2, ID);
      return {
        min: CD,
        max: cD,
        bits: ID,
        wrap: iD,
        wire: zC[ID],
        range: cD - CD,
        span: iD ? fD : CD === -cD ? fD - 2 : fD - 1
      }
    }

    function lC(DD) {
      return null !== DD && "object" === typeof DD && void 0 !== DD.quantized
    }

    function LC(DD, CD) {
      if (DD.wrap) {
        if (!Number.isFinite(CD)) return 0;
        const cD = DD.range;
        let ID = (CD - DD.min) % cD;
        ID < 0 && (ID += cD);
        const pD = DD.span;
        return Math.floor(ID / cD * pD + .5) % pD
      }
      if (CD !== CD) return 0;
      const cD = CD < DD.min ? DD.min : CD > DD.max ? DD.max : CD;
      return Math.floor((cD - DD.min) / DD.range * DD.span + .5)
    }

    function TC(DD, CD) {
      return DD.min + CD / DD.span * DD.range
    }

    function GC(DD) {
      const CD = CC[DD.wire];
      return (cD, ID, pD) => CD(cD, LC(DD, ID), pD)
    }
    class RC {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(DD) {
        const CD = Object.getPrototypeOf(DD);
        if (CD !== qI) {
          let cD = RC.inheritedTypes.get(CD);
          cD || (cD = new Set, RC.inheritedTypes.set(CD, cD)), cD.add(DD)
        }
      }
      static cache(DD) {
        let CD = RC.cachedContexts.get(DD);
        return CD || (CD = new RC(DD), RC.cachedContexts.set(DD, CD)), CD
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
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(DD) && (this.types[CD] = DD, null == DD[Symbol.metadata] && eC.initialize(DD), this.schemas.set(DD, CD), !0)
      }
      getTypeId(DD) {
        return this.schemas.get(DD)
      }
      discoverTypes(DD) {
        if (!this.add(DD)) return;
        RC.inheritedTypes.get(DD)?.forEach((DD => {
          this.discoverTypes(DD)
        }));
        let CD = DD;
        for (;
          (CD = Object.getPrototypeOf(CD)) && CD !== qI && CD !== Function.prototype;) this.discoverTypes(CD);
        const cD = DD[Symbol.metadata];
        (cD[qD] || cD[jD]) && (this.hasFilters = !0);
        for (const ID in cD) {
          const DD = cD[ID].type;
          if ("string" !== typeof DD && !lC(DD))
            if ("function" === typeof DD) this.discoverTypes(DD);
            else {
              const CD = Object.values(DD)[0];
              if ("string" === typeof CD) continue;
              this.discoverTypes(CD)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function kC(DD) {
      const CD = YC(DD);
      return CD ? {
        complexTypeKlass: XC[CD],
        childType: DD[CD]
      } : {
        complexTypeKlass: !1,
        childType: DD
      }
    }

    function dC(DD, CD) {
      const cD = WC(DD),
        ID = YC(cD),
        pD = ID && YC(cD[ID]);
      if (pD) throw new Error(`${CD?`${CD}: `:""}@colyseus/schema: nested collections are not supported ("${ID}" of "${pD}"). Collections can only hold primitive types or Schema classes, wrap the inner ${pD} in a Schema class.`);
      return cD
    }

    function YC(DD) {
      return "object" === typeof DD && null !== DD ? Object.keys(DD).find((DD => void 0 !== XC[DD])) : void 0
    }

    function WC(DD) {
      if ("object" !== typeof DD || null === DD) return DD;
      if (Array.isArray(DD)) return {
        array: WC(DD[0])
      };
      const CD = function(DD) {
        const CD = Object.keys(DD),
          cD = CD.filter((DD => /\d+/.test(DD)));
        if (cD.length > 0 && cD.length === CD.length / 2 && DD[DD[cD[0]]] == cD[0]) return "number";
        if (CD.length > 0 && CD.every((CD => DD[CD] === CD))) return "string"
      }(DD);
      if (CD) return CD;
      if (lC(DD)) return "string" === typeof DD.quantized.wire ? DD : {
        quantized: jC(DD.quantized)
      };
      if (void 0 !== DD.type) return WC(DD.type);
      const cD = YC(DD);
      return cD && (DD[cD] = WC(DD[cD])), DD
    }
    const sC = [xD, KD, aD, VD, zD, jD, HD];

    function EC(DD, CD, cD) {
      DD[CD] || Object.defineProperty(DD, CD, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), DD[CD].push(cD)
    }
    const eC = {
        addField(DD, CD, cD, ID, pD) {
          if (CD >= 63) throw new Error(`Can't define field '${cD}'.\nSchema instances may only have up to 63 fields.`);
          DD[CD] = Object.assign(DD[CD] || {}, {
            type: ID,
            index: CD,
            name: cD
          }), Object.defineProperty(DD, OD, {
            value: DD[OD] || {},
            enumerable: !1,
            configurable: !0
          }), DD[OD][cD] = pD || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(DD, UD, {
            value: CD,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(DD, cD, {
            value: CD,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof DD[CD].type || lC(DD[CD].type) || (void 0 === DD[xD] && Object.defineProperty(DD, xD, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), DD[xD].push(CD));
          const iD = DD[CD].type;
          if (iD && "object" === typeof iD && void 0 !== iD.stream) {
            if (void 0 !== iD.array) throw new Error(PC);
            DD[CD].stream = !0, DD[jD] || Object.defineProperty(DD, jD, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), DD[jD].includes(CD) || DD[jD].push(CD);
            const pD = ID?.priority;
            "function" === typeof pD && eC.setStreamPriority(DD, cD, pD)
          }
        },
        setTag(DD, CD, cD) {
          const ID = DD[CD];
          if (DD[ID].tag = cD, DD[qD] || (Object.defineProperty(DD, qD, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(DD, JD, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), DD[qD].push(ID), cD < 0) DD[JD][cD] || (DD[JD][cD] = []), DD[JD][cD].push(ID);
          else
            for (let pD = cD; pD > 0; pD &= pD - 1) {
              const CD = pD & -pD;
              DD[JD][CD] || (DD[JD][CD] = []), DD[JD][CD].push(ID)
            }
        },
        setUnreliable(DD, CD) {
          const cD = DD[CD];
          if ("string" !== typeof DD[cD].type) throw new Error(`@unreliable cannot be applied to ref-type field "${CD}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          DD[cD].unreliable = !0, DD[KD] || Object.defineProperty(DD, KD, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), DD[KD].push(cD)
        },
        setPatchOnly(DD, CD) {
          const cD = DD[CD];
          if (DD[cD].fullStateOnly) throw new Error(`field "${CD}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          DD[cD].patchOnly = !0, EC(DD, aD, cD), EC(DD, VD, cD)
        },
        setDeprecated(DD, CD) {
          const cD = DD[CD];
          DD[cD].deprecated = !0, EC(DD, VD, cD), Object.defineProperty(DD, cD, {
            value: DD[cD],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(DD, CD) {
          const cD = DD[CD];
          if (DD[cD].patchOnly) throw new Error(`field "${CD}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          DD[cD].fullStateOnly = !0, EC(DD, zD, cD)
        },
        setStream(DD, CD) {
          const cD = DD[CD];
          DD[cD].stream = !0, DD[jD] || Object.defineProperty(DD, jD, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), DD[jD].push(cD)
        },
        setStreamPriority(DD, CD, cD) {
          const ID = DD[CD];
          DD[lD] || Object.defineProperty(DD, lD, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), DD[lD][ID] = cD
        },
        getStreamPriority: (DD, CD) => DD?.[lD]?.[CD],
        defineField(DD, CD, cD, ID, pD) {
          const iD = dC(pD, `${DD.name}.${ID}`),
            {
              complexTypeKlass: fD,
              childType: bD
            } = kC(iD);
          eC.addField(CD, cD, ID, iD, nI(ID, cD, bD, fD)), CD[OD][ID] && Object.defineProperty(DD.prototype, ID, CD[OD][ID]), ("string" === typeof iD || lC(iD)) && (CD[HD] || Object.defineProperty(CD, HD, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), CD[HD][cD] = "string" === typeof iD ? CC[iD] : GC(iD.quantized))
        },
        setFields(DD, CD) {
          const cD = DD.prototype.constructor;
          RC.register(cD);
          const ID = Object.getPrototypeOf(cD),
            pD = ID && ID[Symbol.metadata],
            iD = eC.initialize(cD);
          cD[QD] || (cD[QD] = qI[QD]), cD[wD] || (cD[wD] = qI[wD]), cD[SD] || (cD[SD] = qI[SD]), cD.prototype.toJSON || (cD.prototype.toJSON = qI.prototype.toJSON);
          let fD = iD[UD] ?? (pD && pD[UD]) ?? -1;
          fD++, iD[HD] || Object.defineProperty(iD, HD, {
            value: pD?.[HD] ? [...pD[HD]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const bD in CD) {
            if (void 0 !== iD[bD]) throw new Error(`@colyseus/schema: Duplicate '${bD}' definition on '${cD.name||"(anonymous)"}'.`);
            eC.defineField(cD, iD, fD, bD, CD[bD]), fD++
          }
          return DD
        },
        isDeprecated: (DD, CD) => !0 === DD[CD].deprecated,
        initialize(DD) {
          const CD = Object.getPrototypeOf(DD),
            cD = CD[Symbol.metadata];
          let ID = DD[Symbol.metadata] ?? Object.create(null);
          if (CD !== qI && ID === cD && (ID = Object.create(null), cD)) {
            Object.setPrototypeOf(ID, cD), Object.defineProperty(ID, UD, {
              value: cD[UD],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== cD[qD] && (Object.defineProperty(ID, qD, {
              value: [...cD[qD]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(ID, JD, {
              value: {
                ...cD[JD]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const DD of sC) {
              const CD = cD[DD];
              void 0 !== CD && Object.defineProperty(ID, DD, {
                value: [...CD],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(ID, OD, {
              value: {
                ...cD[OD]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(DD, Symbol.metadata, {
            value: ID,
            writable: !1,
            configurable: !0
          }), ID
        },
        isValidInstance: DD => DD.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(DD.constructor[Symbol.metadata], UD),
        getFields(DD) {
          const CD = DD[Symbol.metadata],
            cD = {};
          for (let ID = 0; ID <= CD[UD]; ID++) cD[CD[ID].name] = CD[ID].type;
          return cD
        },
        hasViewTagAtIndex: (DD, CD) => DD?.[qD]?.includes(CD),
        hasUnreliableAtIndex: (DD, CD) => DD?.[KD]?.includes(CD),
        hasPatchOnlyAtIndex: (DD, CD) => DD?.[aD]?.includes(CD),
        hasFullStateOnlyAtIndex: (DD, CD) => DD?.[zD]?.includes(CD),
        hasStreamAtIndex: (DD, CD) => DD?.[jD]?.includes(CD)
      },
      uC = (DD, CD, cD) => DD(CD, cD);
    class hC {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(DD) {
        this.ops = new Uint8Array(Math.max(DD + 1, 1))
      }
      record(DD, CD) {
        const cD = this.ops[DD];
        0 === cD ? this.ops[DD] = CD : (cD === pD.DELETE || cD === pD.ADD && CD === pD.DELETE_AND_ADD) && (this.ops[DD] = pD.DELETE_AND_ADD), DD < 32 ? this.dirtyLow |= 1 << DD : this.dirtyHigh |= 1 << DD - 32
      }
      recordDelete(DD, CD) {
        this.ops[DD] = CD, DD < 32 ? this.dirtyLow |= 1 << DD : this.dirtyHigh |= 1 << DD - 32
      }
      recordRaw(DD, CD) {
        this.record(DD, CD)
      }
      operationAt(DD) {
        const CD = this.ops[DD];
        return 0 === CD ? void 0 : CD
      }
      setOperationAt(DD, CD) {
        this.ops[DD] = CD
      }
      forEach(DD) {
        this.forEachWithCtx(DD, uC)
      }
      forEachWithCtx(DD, CD) {
        let cD = this.dirtyLow,
          ID = this.dirtyHigh;
        const pD = this.ops;
        for (; 0 !== cD;) {
          const ID = cD & -cD,
            iD = 31 - Math.clz32(ID);
          cD ^= ID, CD(DD, iD, pD[iD])
        }
        for (; 0 !== ID;) {
          const cD = ID & -ID,
            iD = 31 - Math.clz32(cD) + 32;
          ID ^= cD, CD(DD, iD, pD[iD])
        }
      }
      size() {
        return AC(this.dirtyLow) + AC(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class rC {
      bZ = new Map;
      pureOps = [];
      record(DD, CD) {
        const cD = this.bZ.get(DD);
        void 0 === cD ? this.bZ.set(DD, CD) : (cD === pD.DELETE || cD === pD.ADD && CD === pD.DELETE_AND_ADD) && this.bZ.set(DD, pD.DELETE_AND_ADD)
      }
      recordDelete(DD, CD) {
        this.bZ.set(DD, CD)
      }
      recordRaw(DD, CD) {
        this.bZ.set(DD, CD)
      }
      recordPure(DD) {
        this.pureOps.push([this.bZ.size, DD])
      }
      operationAt(DD) {
        return this.bZ.get(DD)
      }
      setOperationAt(DD, CD) {
        this.bZ.has(DD) && this.bZ.set(DD, CD)
      }
      forEach(DD) {
        this.forEachWithCtx(DD, uC)
      }
      forEachWithCtx(DD, CD) {
        const cD = this.pureOps;
        if (cD.length > 0) {
          let ID = 0,
            pD = 0;
          for (const [iD, fD] of this.bZ) {
            for (; ID < cD.length && cD[ID][0] <= pD;) {
              const pD = cD[ID++][1];
              CD(DD, -pD, pD)
            }
            CD(DD, iD, fD), pD++
          }
          for (; ID < cD.length;) {
            const pD = cD[ID++][1];
            CD(DD, -pD, pD)
          }
        } else
          for (const [ID, pD] of this.bZ) CD(DD, ID, pD)
      }
      size() {
        return this.bZ.size + this.pureOps.length
      }
      has() {
        return this.bZ.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.bZ.clear(), this.pureOps.length = 0
      }
      shift(DD) {
        const CD = new Map;
        for (const [cD, ID] of this.bZ) CD.set(cD + DD, ID);
        this.bZ = CD
      }
    }

    function AC(DD) {
      return 16843009 * ((DD = (858993459 & (DD -= DD >>> 1 & 1431655765)) + (DD >>> 2 & 858993459)) + (DD >>> 4) & 252645135) >>> 24
    }

    function FC(DD) {
      if (void 0 === DD) return 0;
      let CD = 0;
      for (let cD = 0, ID = DD.length; cD < ID; cD++) {
        const ID = DD[cD];
        ID < 32 && (CD |= 1 << ID)
      }
      return CD
    }

    function Dc(DD) {
      const CD = DD.constructor;
      if (Object.prototype.hasOwnProperty.call(CD, PD)) return CD[PD];
      const cD = CD[Symbol.metadata],
        ID = eC.isValidInstance(DD),
        pD = (cD?.[qD]?.length ?? 0) > 0,
        iD = function(DD) {
          const CD = [],
            cD = [],
            ID = [],
            pD = [],
            iD = DD?.[UD];
          if (void 0 === iD) return {
            names: CD,
            types: cD,
            tags: ID,
            encoders: pD
          };
          const fD = DD[HD];
          for (let bD = 0; bD <= iD; bD++) {
            const iD = DD[bD];
            void 0 !== iD ? (CD[bD] = iD.name, cD[bD] = iD.type, ID[bD] = iD.tag, pD[bD] = fD?.[bD]) : (CD[bD] = void 0, cD[bD] = void 0, ID[bD] = void 0, pD[bD] = void 0)
          }
          return {
            names: CD,
            types: cD,
            tags: ID,
            encoders: pD
          }
        }(cD),
        fD = ID && !pD ? void 0 : CD[BD],
        bD = {
          encoder: CD[wD],
          filter: fD,
          metadata: cD,
          isSchema: ID,
          filterBitmask: ID ? FC(cD?.[qD]) : 0,
          hasAnyFullStateOnly: (cD?.[zD]?.length ?? 0) > 0,
          hasAnyUnreliable: (cD?.[KD]?.length ?? 0) > 0,
          hasAnyStream: (cD?.[jD]?.length ?? 0) > 0,
          hasAnyView: pD,
          fullStateOnlyBitmask: FC(cD?.[zD]),
          unreliableBitmask: FC(cD?.[KD]),
          streamBitmask: FC(cD?.[jD]),
          names: iD.names,
          types: iD.types,
          tags: iD.tags,
          encoders: iD.encoders
        };
      return Object.defineProperty(CD, PD, {
        value: bD,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), bD
    }

    function Cc(DD, CD) {
      if (void 0 !== DD.parentRef && CD(DD.parentRef, DD._parentIndex)) return !0;
      for (let cD = DD.extraParents; void 0 !== cD; cD = cD.next)
        if (CD(cD.ref, cD.index)) return !0;
      return !1
    }
    const cc = (DD, CD) => {
        DD.isFieldUnreliable(CD) ? DD.ensureUnreliableRecorder().record(CD, pD.ADD) : DD.record(CD, pD.ADD)
      },
      Ic = (DD, CD) => DD(CD);

    function pc(DD, CD, cD) {
      const ID = DD.refTarget;
      if (void 0 !== ID[oD]) {
        if (DD.isPatchOnly) return;
        if (Array.isArray(ID.items)) {
          const DD = ID.items;
          for (let ID = 0, pD = DD.length; ID < pD; ID++) void 0 !== DD[ID] && cD(CD, ID)
        } else if (void 0 !== ID.journal)
          for (const [DD, pD] of ID.journal.keyByIndex) ID.$items.has(pD) && cD(CD, DD);
        else if (void 0 !== ID.$items)
          for (const DD of ID.$items.keys()) cD(CD, DD)
      } else {
        const pD = DD.metadata;
        if (!pD) return;
        const iD = pD[UD] ?? -1,
          fD = pD[VD],
          bD = DD.encDescriptor.names;
        for (let DD = 0; DD <= iD; DD++) {
          const pD = bD[DD];
          if (void 0 === pD) continue;
          if (fD && fD.includes(DD)) continue;
          const iD = ID[pD];
          void 0 !== iD && null !== iD && cD(CD, DD)
        }
      }
    }

    function ic(DD, CD, cD, ID) {
      ! function(DD, CD, cD) {
        if (!CD) return;
        const ID = CD[ZD],
          pD = !ID._isSchema;
        let iD;
        pD ? (CD = ID.parent, cD = ID.parentIndex, iD = CD?.[ZD].metadata) : iD = ID.metadata;
        const fD = (iD?.[aD]?.includes(cD) ? Pc : 0) | (iD?.[zD]?.includes(cD) ? Hc : 0),
          bD = ID.flags & qc | fD,
          QD = DD.flags;
        DD.flags = QD | bD;
        bD & ~QD & Hc && (DD.reset(), DD.unreliableRecorder?.reset());
        const wD = DD.root?.types;
        if (!wD?.hasFilters) return;
        const SD = iD?.[qD]?.includes(cD) ?? !1,
          BD = iD?.[jD]?.includes(cD) ?? !1,
          yD = ID.isFiltered || SD || BD;
        if (DD.isFiltered = yD, BD && !pD) {
          DD.isStreamCollection = !0;
          const CD = UC(DD.ref);
          if (void 0 === CD.priority) {
            const DD = eC.getStreamPriority(iD, cD);
            void 0 !== DD && (CD.priority = DD)
          }
          DD.root?.registerStream(DD.ref)
        }
        if (yD) {
          const CD = bc(DD);
          DD.isVisibilitySharedWithParent = ID.isFiltered && CD && !BD && (!SD || pD && iD[cD].tag !== tI)
        }
      }(DD, CD, cD), DD.isFullStateOnly || (DD.has() && DD.root?.enqueueChangeTree(DD), DD.unreliableRecorder?.has() && DD.root?.enqueueUnreliable(DD), DD.has() || DD.unreliableRecorder?.has() || DD.root?.enqueueChangeTree(DD))
    }

    function fc(DD) {
      const CD = DD.pendingFilterRefresh;
      for (let cD = 0; cD < CD.length; cD++) {
        const DD = CD[cD];
        0 !== (DD.flags & xc) && Qc(DD)
      }
      CD.length = 0
    }

    function bc(DD) {
      return DD._isSchema || "string" !== typeof DD.refTarget[oD]
    }

    function Qc(DD) {
      DD.flags &= ~xc;
      const CD = DD.root;
      if (void 0 === CD || void 0 === DD.parentRef) return;
      const cD = bc(DD);
      let ID = Mc(DD, DD.parentRef, DD._parentIndex, cD);
      for (let iD = DD.extraParents; void 0 !== iD && ID !== yc; iD = iD.next) ID |= Mc(DD, iD.ref, iD.index, cD);
      if (0 === ID) return;
      DD.isVisibilitySharedWithParent = 0 !== (ID & Bc);
      const pD = 0 === (ID & Sc);
      pD !== DD.isFiltered && (DD.isFiltered = pD, pD || DD.isFullStateOnly || (DD.forEachLiveWithCtx(DD, cc), DD.has() && CD.enqueueChangeTree(DD), DD.unreliableRecorder?.has() && CD.enqueueUnreliable(DD)), DD.forEachChildWithCtx(DD, tc))
    }
    const wc = 1,
      Sc = 2,
      Bc = 4,
      yc = wc | Sc | Bc;

    function Mc(DD, CD, cD, ID) {
      const pD = CD[ZD];
      if (pD.root !== DD.root || ! function(DD, CD, cD) {
          const ID = CD.refTarget;
          if (CD.isArray) {
            const CD = ID.items,
              pD = CD[cD];
            if (void 0 !== pD && pD[ZD] === DD) return !0;
            for (let cD = 0, ID = CD.length; cD < ID; cD++) {
              const ID = CD[cD];
              if (void 0 !== ID && ID[ZD] === DD) return !0
            }
            return !1
          }
          const pD = CD.getValue(cD);
          return void 0 !== pD && pD[ZD] === DD
        }(DD, pD, cD)) return 0;
      pD.flags & xc && Qc(pD);
      let iD = wc;
      if (pD._isSchema) {
        void 0 !== pD.encDescriptor.tags[cD] || pD.isFieldStream(cD) || (pD.isFiltered ? ID && (iD |= Bc) : iD |= Sc)
      } else if (pD.isFiltered) {
        if (ID && !pD.isStreamCollection) {
          const DD = pD.parent?.[ZD];
          (DD?._isSchema ? DD.encDescriptor.tags[pD.parentIndex] : void 0) !== tI && (iD |= Bc)
        }
      } else iD |= Sc;
      return iD
    }
    const tc = (DD, CD, cD) => {
      Qc(CD)
    };

    function Zc(DD, CD, cD, ID) {
      if (DD.addParent(CD, ID), !cD) return;
      const pD = cD.add(DD);
      cD !== DD.root && (DD.root = cD, ic(DD, CD, ID));
      const iD = CD?.[ZD];
      if (void 0 !== iD && void 0 !== iD.subscribedViews && void 0 !== CD[oD] && function(DD, CD, cD, ID) {
          const pD = DD.subscribedViews;
          if (void 0 === pD) return;
          const iD = DD.isStreamCollection,
            fD = iD ? DD.ref : void 0,
            bD = iD ? void 0 : cD[ZD];
          for (let QD = 0, wD = pD.length; QD < wD; QD++) {
            let DD = pD[QD];
            for (; 0 !== DD;) {
              const cD = DD & -DD;
              DD ^= cD;
              const wD = 32 * QD + (31 - Math.clz32(cD)),
                SD = ID.activeViews.get(wD),
                BD = SD?.deref();
              void 0 !== BD ? iD ? aC(fD, wD, CD) : void 0 !== bD && BD.markVisible(bD) : pD[QD] &= ~cD
            }
          }
        }(iD, ID, DD.ref, cD), pD) {
        let CD = gc[Xc];
        void 0 === CD && (CD = {
          parentRef: void 0,
          root: void 0
        }, gc[Xc] = CD), CD.parentRef = DD.ref, CD.root = cD, Xc++, vc(DD, CD, mc), Xc--
      }
    }

    function oc(DD, CD, cD) {
      DD(CD, cD)
    }

    function vc(DD, CD, cD) {
      const ID = DD.refTarget;
      if (ID[oD]) {
        if ("string" !== typeof ID[oD]) {
          const DD = ID.items;
          if (void 0 !== DD)
            for (let ID = 0, pD = DD.length; ID < pD; ID++) {
              const pD = DD[ID];
              pD && cD(CD, pD[ZD], ID)
            } else {
              const DD = ID.$items,
                pD = ID._collectionIndexes;
              for (const ID of DD.keys()) {
                const iD = DD.get(ID);
                iD && cD(CD, iD[ZD], pD?.[ID] ?? ID)
              }
            }
        }
      } else {
        const pD = DD.metadata,
          iD = pD?.[xD];
        if (!iD) return;
        const fD = DD.encDescriptor.names;
        for (let DD = 0, bD = iD.length; DD < bD; DD++) {
          const pD = iD[DD],
            bD = ID[fD[pD]];
          bD && cD(CD, bD[ZD], pD)
        }
      }
    }

    function Nc(DD, CD, cD) {
      CD.root !== DD ? CD.setRoot(DD) : DD.add(CD)
    }
    const gc = [];
    let Xc = 0;

    function mc(DD, CD, cD) {
      if (CD.root === DD.root) return DD.root.add(CD), void DD.root.moveNextToParent(CD);
      CD.setParent(DD.parentRef, DD.root, cD)
    }

    function nc(DD, CD, cD) {
      const ID = (3 & cD) << 3;
      return cD < 4 ? DD >>> ID & 255 : CD >>> ID & 255
    }
    const Oc = (DD, CD, cD) => DD(CD, cD);
    const Pc = 16,
      Hc = 32,
      Uc = 128,
      xc = 256,
      qc = Pc | Hc;
    class Jc {
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
        return 0 !== (this.flags & Pc)
      }
      set isPatchOnly(DD) {
        this.flags = DD ? this.flags | Pc : this.flags & ~Pc
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & Hc)
      }
      set isFullStateOnly(DD) {
        this.flags = DD ? this.flags | Hc : this.flags & ~Hc
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(DD) {
        this.flags = DD ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Uc)
      }
      set needsRestage(DD) {
        this.flags = DD ? this.flags | Uc : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new hC(this.metadata?.[UD] ?? 0) : new rC), this.unreliableRecorder
      }
      isFieldUnreliable(DD) {
        const CD = this.encDescriptor;
        return !!CD.hasAnyUnreliable && (DD < 32 ? 0 !== (CD.unreliableBitmask & 1 << DD) : eC.hasUnreliableAtIndex(this.metadata, DD))
      }
      isFieldFullStateOnly(DD) {
        if (this.isFullStateOnly) return !0;
        const CD = this.encDescriptor;
        return !!CD.hasAnyFullStateOnly && (DD < 32 ? 0 !== (CD.fullStateOnlyBitmask & 1 << DD) : eC.hasFullStateOnlyAtIndex(this.metadata, DD))
      }
      isFieldStream(DD) {
        const CD = this.encDescriptor;
        return !!CD.hasAnyStream && (DD < 32 ? 0 !== (CD.streamBitmask & 1 << DD) : eC.hasStreamAtIndex(this.metadata, DD))
      }
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        this.ref = DD, this.refTarget = CD;
        const cD = Dc(DD);
        this.encDescriptor = cD, this.metadata = cD.metadata;
        const ID = cD.isSchema;
        if (this._isSchema = ID, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, ID) {
          const DD = this.metadata?.[UD] ?? 0;
          DD > 7 && (this.ops = new Uint8Array(DD + 1))
        } else this.collDirty = new Map
      }
      _opAt(DD) {
        const CD = this.ops;
        if (void 0 !== CD) return CD[DD];
        const cD = (3 & DD) << 3;
        return DD < 4 ? this.opsLow >>> cD & 255 : this.opsHigh >>> cD & 255
      }
      _opPut(DD, CD) {
        const cD = this.ops;
        if (void 0 !== cD) return void(cD[DD] = CD);
        const ID = (3 & DD) << 3,
          pD = ~(255 << ID);
        DD < 4 ? this.opsLow = this.opsLow & pD | CD << ID : this.opsHigh = this.opsHigh & pD | CD << ID
      }
      _markDirty(DD) {
        DD < 32 ? this.dirtyLow |= 1 << DD : this.dirtyHigh |= 1 << DD - 32
      }
      record(DD, CD) {
        if (this._isSchema) {
          const cD = this._opAt(DD);
          0 === cD ? this._opPut(DD, CD) : (cD === pD.DELETE || cD === pD.ADD && CD === pD.DELETE_AND_ADD) && this._opPut(DD, pD.DELETE_AND_ADD), this._markDirty(DD)
        } else {
          const cD = this.collDirty,
            ID = cD.get(DD);
          let iD;
          iD = void 0 === ID ? CD : ID === pD.DELETE || ID === pD.ADD && CD === pD.DELETE_AND_ADD ? pD.DELETE_AND_ADD : ID, cD.set(DD, iD)
        }
      }
      recordDelete(DD, CD) {
        this._isSchema ? (this._opPut(DD, CD), this._markDirty(DD)) : this.collDirty.set(DD, CD)
      }
      recordRaw(DD, CD) {
        this._isSchema ? (this._opPut(DD, CD), this._markDirty(DD)) : this.collDirty.set(DD, CD)
      }
      recordPure(DD) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, DD])
      }
      operationAt(DD) {
        if (this._isSchema) {
          const CD = this._opAt(DD);
          return 0 === CD ? void 0 : CD
        }
        return this.collDirty.get(DD)
      }
      setOperationAt(DD, CD) {
        if (this._isSchema) this._opPut(DD, CD);
        else {
          const cD = this.collDirty;
          cD.has(DD) && cD.set(DD, CD)
        }
      }
      forEach(DD) {
        this.forEachWithCtx(DD, Oc)
      }
      forEachWithCtx(DD, CD) {
        if (this._isSchema) {
          let cD = this.dirtyLow,
            ID = this.dirtyHigh;
          const pD = this.ops;
          if (void 0 !== pD) {
            for (; 0 !== cD;) {
              const ID = cD & -cD,
                iD = 31 - Math.clz32(ID);
              cD ^= ID, CD(DD, iD, pD[iD])
            }
            for (; 0 !== ID;) {
              const cD = ID & -ID,
                iD = 31 - Math.clz32(cD) + 32;
              ID ^= cD, CD(DD, iD, pD[iD])
            }
          } else {
            const ID = this.opsLow,
              pD = this.opsHigh;
            for (; 0 !== cD;) {
              const iD = cD & -cD,
                fD = 31 - Math.clz32(iD);
              cD ^= iD, CD(DD, fD, nc(ID, pD, fD))
            }
          }
          return
        }
        const cD = this.collDirty,
          ID = this.collPureOps;
        if (void 0 !== ID && ID.length > 0) {
          let pD = 0,
            iD = 0;
          for (const [fD, bD] of cD) {
            for (; pD < ID.length && ID[pD][0] <= iD;) {
              const cD = ID[pD++][1];
              CD(DD, -cD, cD)
            }
            CD(DD, fD, bD), iD++
          }
          for (; pD < ID.length;) {
            const cD = ID[pD++][1];
            CD(DD, -cD, cD)
          }
        } else
          for (const [pD, iD] of cD) CD(DD, pD, iD)
      }
      size() {
        return this._isSchema ? AC(this.dirtyLow) + AC(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(DD, CD) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const cD = this.collDirty,
          ID = new Map,
          iD = !this.paused && !this.isFullStateOnly;
        if (DD > 0)
          for (const [pD, fD] of cD) pD < DD && ID.set(pD, fD);
        if (iD)
          for (let fD = 0; fD < CD; fD++) ID.set(DD + fD, pD.ADD);
        for (const [pD, fD] of cD) pD >= DD && ID.set(pD + CD, fD);
        this.collDirty = ID, iD && this.root?.enqueueChangeTree(this)
      }
      removeAt(DD, CD) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const cD = this.collDirty,
          ID = DD + CD;
        let pD = !1;
        for (const fD of cD.keys())
          if (fD >= ID) {
            pD = !0;
            break
          } if (!pD) {
          for (let CD = DD; CD < ID; CD++) cD.delete(CD);
          return
        }
        const iD = new Map;
        for (const [fD, bD] of cD) fD < DD ? iD.set(fD, bD) : fD >= ID && iD.set(fD - CD, bD);
        this.collDirty = iD
      }
      unshift(DD) {
        this.insertAt(0, DD)
      }
      setRoot(DD) {
        ! function(DD, CD) {
          DD.root = CD;
          const cD = CD.add(DD);
          ic(DD, DD.parent, DD.parentIndex), cD && vc(DD, CD, Nc)
        }(this, DD)
      }
      setParent(DD, CD, cD) {
        Zc(this, DD, CD, cD)
      }
      forEachChild(DD) {
        vc(this, DD, oc)
      }
      forEachChildWithCtx(DD, CD) {
        vc(this, DD, CD)
      }
      forEachLive(DD) {
        pc(this, DD, Ic)
      }
      forEachLiveWithCtx(DD, CD) {
        pc(this, DD, CD)
      }
      operation(DD) {
        this.paused || this.isFullStateOnly || (this.recordPure(DD), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(DD, CD, cD) {
        if (!this.paused && !this.isFieldFullStateOnly(DD)) {
          if (this.isFieldUnreliable(DD) && !this.isNew) {
            const ID = this.ensureUnreliableRecorder();
            return cD ? ID.recordRaw(DD, CD) : ID.record(DD, CD), void this.root?.enqueueUnreliable(this)
          }
          cD ? this.recordRaw(DD, CD) : this.record(DD, CD), this.root?.enqueueChangeTree(this)
        }
      }
      change(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.ADD;
        this._routeAndRecord(DD, CD, !1)
      }
      indexedOperation(DD, CD) {
        this._routeAndRecord(DD, CD, !0)
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
        const CD = this.paused;
        this.paused = !0;
        try {
          return DD()
        } finally {
          this.paused = CD
        }
      }
      markDirty(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.ADD;
        const cD = this.paused;
        this.paused = !1;
        try {
          this.change(DD, CD)
        } finally {
          this.paused = cD
        }
      }
      getValue(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[yD](DD, CD)
      }
      delete(DD, CD) {
        if (void 0 === DD) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${DD}'`)
          } catch (ip) {
            console.warn(ip)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(DD)) return this.getValue(DD);
        const cD = this.isFieldUnreliable(DD) && !this.isNew;
        cD ? this.ensureUnreliableRecorder().recordDelete(DD, CD ?? pD.DELETE) : this.recordDelete(DD, CD ?? pD.DELETE);
        const ID = this.getValue(DD);
        return ID && ID[ZD] && this.root?.remove(ID[ZD]), cD ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), ID
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[ND]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[ND]?.()
      }
      discard() {
        this._isSchema || this.refTarget[ND]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const DD = DD => {
          if (DD < 0) return;
          const CD = this.getValue(DD);
          CD && CD[ZD] && CD[ZD].discardAll()
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
      addParent(DD, CD) {
        ! function(DD, CD, cD) {
          if (DD.parentRef) {
            if (DD.parentRef[ZD] === CD[ZD]) return void(DD._parentIndex = cD);
            if (Cc(DD, ((DD, cD) => DD[ZD] === CD[ZD]))) return void(DD._parentIndex = cD)
          }
          void 0 === DD.parentRef ? (DD.parentRef = CD, DD._parentIndex = cD) : (DD.extraParents = {
            ref: DD.parentRef,
            index: DD._parentIndex,
            next: DD.extraParents
          }, DD.parentRef = CD, DD._parentIndex = cD)
        }(this, DD, CD)
      }
      setParentIndex(DD, CD) {
        ! function(DD, CD, cD) {
          if (void 0 !== DD.extraParents)
            if (DD.parentRef[ZD] !== CD[ZD]) {
              for (let ID = DD.extraParents; void 0 !== ID; ID = ID.next)
                if (ID.ref[ZD] === CD[ZD]) return void(ID.index = cD)
            } else DD._parentIndex = cD;
          else DD._parentIndex = cD
        }(this, DD, CD)
      }
      removeParent() {
        return function(DD, CD) {
          if (DD.parentRef && DD.parentRef[ZD] === CD[ZD]) return DD.extraParents ? (DD.parentRef = DD.extraParents.ref, DD._parentIndex = DD.extraParents.index, DD.extraParents = DD.extraParents.next) : (DD.parentRef = void 0, DD._parentIndex = void 0), !0;
          let cD = DD.extraParents,
            ID = null;
          for (; cD;) {
            if (cD.ref[ZD] === CD[ZD]) return ID ? ID.next = cD.next : DD.extraParents = cD.next, !0;
            ID = cD, cD = cD.next
          }
          return void 0 === DD.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(DD) {
        return function(DD, CD) {
          if (void 0 !== DD.parentRef && CD(DD.parentRef, DD._parentIndex)) return {
            ref: DD.parentRef,
            index: DD._parentIndex
          };
          for (let cD = DD.extraParents; void 0 !== cD; cD = cD.next)
            if (CD(cD.ref, cD.index)) return {
              ref: cD.ref,
              index: cD.index
            }
        }(this, DD)
      }
      hasParent(DD) {
        return Cc(this, DD)
      }
      indexInParent(DD) {
        return function(DD, CD) {
          if (DD.parentRef && DD.parentRef[ZD] === CD[ZD]) return DD._parentIndex;
          for (let cD = DD.extraParents; void 0 !== cD; cD = cD.next)
            if (cD.ref[ZD] === CD[ZD]) return cD.index
        }(this, DD)
      }
      getAllParents() {
        return function(DD) {
          const CD = [];
          DD.parentRef && CD.push({
            ref: DD.parentRef,
            index: DD._parentIndex
          });
          let cD = DD.extraParents;
          for (; cD;) CD.push({
            ref: cD.ref,
            index: cD.index
          }), cD = cD.next;
          return CD
        }(this)
      }
    }
    class Kc {
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
        const CD = this.ref;
        if (CD[oD]) {
          if ("string" !== typeof CD[oD])
            for (const [cD, ID] of CD.entries()) ID && DD(ID[ZD], CD._collectionIndexes?.[cD] ?? cD);
          return
        }
        const cD = CD.constructor,
          ID = cD?.[Symbol.metadata];
        if (!ID) return;
        const pD = ID[xD] ?? [];
        for (let iD = 0; iD < pD.length; iD++) {
          const cD = pD[iD],
            fD = CD[ID[cD].name];
          fD && DD(fD[ZD], cD)
        }
      }
      forEachChildWithCtx(DD, CD) {
        this.forEachChild(((cD, ID) => CD(DD, cD, ID)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function ac(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
      var cD;
      Object.defineProperty(DD, ZD, {
        value: (cD = CD, new Kc(cD)),
        enumerable: !1,
        writable: !0
      })
    }

    function Vc(DD, CD, cD, ID, iD, fD, QD) {
      void 0 !== QD ? QD(CD, ID, fD) : "string" === typeof cD ? CC[cD]?.(CD, ID, fD) : null != cD[Symbol.metadata] ? (CC.number(CD, ID[bD], fD), (iD & pD.ADD) === pD.ADD && DD.tryEncodeTypeId(CD, cD, ID.constructor, fD)) : CC.number(CD, ID[bD], fD)
    }
    const zc = function(DD, CD, cD, ID, iD, fD, bD, QD) {
        if (CD[fD.offset++] = 255 & (ID | iD), iD === pD.DELETE) return;
        const wD = cD.encDescriptor,
          SD = cD.ref,
          BD = SD[mD][ID] ?? SD[wD.names[ID]];
        Vc(DD, CD, wD.types[ID], BD, iD, fD, wD.encoders[ID])
      },
      jc = function(DD, CD, cD, ID, iD, fD) {
        if (CD[fD.offset++] = 255 & iD, CC.number(CD, ID, fD), iD === pD.DELETE) return;
        const bD = cD.ref;
        if ((iD & pD.ADD) === pD.ADD) {
          const DD = bD.$indexes.get(ID);
          CC.string(CD, DD, fD)
        }
        Vc(DD, CD, bD[oD], bD[yD](ID), iD, fD)
      },
      lc = function(DD, CD, cD, ID, iD, fD) {
        if (CD[fD.offset++] = 255 & iD, CC.number(CD, ID, fD), iD === pD.DELETE) return;
        const bD = cD.ref;
        Vc(DD, CD, bD[oD], bD[yD](ID), iD, fD)
      },
      Lc = function(DD, CD, cD, ID, iD, fD) {
        const bD = cD.ref;
        (iD & pD.ADD) === pD.ADD && "function" === typeof bD.set ? jc(DD, CD, cD, ID, iD, fD) : lc(DD, CD, cD, ID, iD, fD)
      },
      Tc = function(DD, CD, cD, ID, iD, fD, QD, wD) {
        const SD = cD.refTarget,
          BD = SD[oD],
          MD = "string" !== typeof BD;
        let tD;
        if (wD && cD.isFiltered && MD) {
          const DD = SD.tmpItems[ID];
          if (!DD) return;
          if (tD = DD[bD], iD === pD.DELETE) iD = pD.DELETE_BY_REFID;
          else if ((iD & pD.ADD) === pD.ADD) iD = pD.ADD_BY_REFID;
          else if ((iD & pD.MOVE) === pD.MOVE) return
        } else if (iD === pD.DELETE && MD) {
          const DD = SD.tmpItems[ID];
          if (!DD) return;
          tD = DD[bD], iD = pD.DELETE_BY_REFID
        } else tD = ID;
        if (CD[fD.offset++] = 255 & iD, CC.number(CD, tD, fD), iD === pD.DELETE || iD === pD.DELETE_BY_REFID) return;
        Vc(DD, CD, BD, SD[yD](ID, QD), iD, fD)
      };

    function Gc(DD, CD, cD, ID, iD, fD, QD) {
      const wD = DD.resyncVisited;
      let SD = wD.get(DD.currentRefId);
      if (void 0 === SD && wD.set(DD.currentRefId, SD = new Set), SD.add(ID), void 0 !== iD && cD === pD.ADD && iD !== fD) {
        const cD = iD[bD];
        void 0 !== cD && (DD.root.removeRef(cD), QD?.push({
          ref: CD,
          refId: DD.currentRefId,
          op: pD.DELETE,
          dynamicIndex: ID,
          value: void 0,
          previousValue: iD
        }))
      }
    }

    function Rc(DD, CD, cD, ID) {
      const pD = CD[bD];
      if (void 0 === pD || cD.has(pD)) return;
      cD.add(pD);
      const iD = CD.constructor[Symbol.metadata],
        fD = iD?.[xD];
      if (void 0 === fD) return;
      const QD = iD[aD];
      for (let bD = 0; bD < fD.length; bD++) {
        const pD = fD[bD];
        if (void 0 !== QD && QD.includes(pD)) continue;
        const wD = iD[pD],
          SD = CD[wD.name];
        SD && (qI.is(wD.type) ? Rc(DD, SD, cD, ID) : kc(DD, SD, cD, ID))
      }
    }

    function kc(DD, CD, cD, ID) {
      const iD = CD[vD] ?? CD,
        fD = iD[bD];
      if (void 0 === fD || cD.has(fD)) return;
      cD.add(fD);
      const QD = DD.resyncVisited.get(fD);
      if (void 0 === QD) return;
      const wD = DD.root;
      iD[tD](QD, ((DD, cD) => {
        ID?.push({
          ref: CD,
          refId: fD,
          op: pD.DELETE,
          dynamicIndex: cD,
          value: void 0,
          previousValue: DD
        });
        const iD = DD?.[bD];
        void 0 !== iD && wD.removeRef(iD)
      }), (CD => {
        qI.isSchema(CD) && Rc(DD, CD, cD, ID)
      }))
    }
    const dc = 1,
      Yc = 2,
      Wc = 3,
      sc = 4,
      Ec = 5;

    function ec(DD, CD, cD, ID, iD, fD, QD, wD, SD) {
      const BD = DD.root;
      let yD;
      if ((CD & pD.DELETE) === pD.DELETE) {
        const DD = iD?.[bD];
        void 0 !== DD && BD.removeRef(DD), CD !== pD.DELETE_AND_ADD && cD[MD](ID), yD = void 0
      }
      if (CD === pD.DELETE);
      else if ("string" === typeof fD) yD = gC[fD](QD, wD);
      else if (lC(fD)) yD = function(DD, CD, cD) {
        return TC(DD, (0, gC[DD.wire])(CD, cD))
      }(fD.quantized, QD, wD);
      else if (qI.is(fD)) {
        const cD = gC.number(QD, wD);
        if (yD = BD.refs.get(cD), (CD & pD.ADD) === pD.ADD) {
          const ID = DD.getInstanceType(QD, wD, fD);
          yD || (yD = DD.createInstanceOfType(ID)), BD.addRef(cD, yD, yD !== iD || CD === pD.DELETE_AND_ADD && yD === iD)
        }
      } else {
        const cD = (tD = Object.keys(fD)[0], XC[tD]),
          ID = gC.number(QD, wD);
        null !== DD.resyncVisited && function(DD, CD) {
          const cD = DD.resyncVisited;
          cD.has(CD) || cD.set(CD, new Set)
        }(DD, ID);
        const MD = BD.refs.has(ID) ? iD || BD.refs.get(ID) : cD.constructor.initializeForDecoder();
        if (yD = MD.clone(!0), yD[oD] = Object.values(fD)[0], iD) {
          let DD = iD[bD];
          if (void 0 !== DD && ID !== DD) {
            (CD & pD.DELETE) !== pD.DELETE && BD.removeRef(DD);
            const cD = iD.entries();
            let ID;
            for (;
              (ID = cD.next()) && !ID.done;) {
              const [CD, cD] = ID.value;
              "object" === typeof cD && (DD = cD[bD]), SD?.push({
                ref: iD,
                refId: DD,
                op: pD.DELETE,
                field: CD,
                value: void 0,
                previousValue: cD
              })
            }
          }
        }
        BD.addRef(ID, yD, MD !== iD || CD === pD.DELETE_AND_ADD && MD === iD)
      }
      var tD;
      return yD
    }
    const uc = function(DD, CD, cD, ID, pD) {
        const iD = CD[cD.offset++],
          fD = ID.constructor[Symbol.metadata],
          bD = iD >> 6 << 6,
          QD = iD % (bD || 255),
          wD = fD[QD];
        if (void 0 === wD) return console.warn("@colyseus/schema: field not defined at", {
          index: QD,
          ref: ID.constructor.name,
          metadata: fD
        }), -1;
        const SD = !0 === wD.deprecated,
          BD = SD ? void 0 : ID[yD](QD),
          MD = ec(DD, bD, ID, QD, BD, wD.type, CD, cD, pD);
        SD || (null !== MD && void 0 !== MD && (ID[wD.name] = MD), BD !== MD && pD?.push({
          ref: ID,
          refId: DD.currentRefId,
          op: bD,
          field: wD.name,
          value: MD,
          previousValue: BD
        }))
      },
      hc = function(DD, CD, cD, ID, iD) {
        const fD = ID[vD] ?? ID,
          bD = CD[cD.offset++];
        if (bD === pD.CLEAR) return DD.removeChildRefs(fD, iD), void fD.clear();
        const QD = gC.number(CD, cD),
          wD = fD[oD],
          SD = fD.constructor.COLLECTION_KIND;
        let BD;
        (bD & pD.ADD) === pD.ADD ? SD === dc ? (BD = gC.string(CD, cD), fD.setIndex(QD, BD)) : BD = QD : BD = fD.getIndex(QD);
        const MD = fD[yD](QD),
          tD = ec(DD, bD, ID, QD, MD, wD, CD, cD, iD);
        if (null !== DD.resyncVisited && Gc(DD, ID, bD, BD, MD, tD, iD), null !== tD && void 0 !== tD) switch (SD) {
          case dc:
            fD.$items.set(BD, tD);
            break;
          case Yc:
            fD.$setAt(QD, tD, null !== DD.resyncVisited && bD === pD.ADD ? pD.REPLACE : bD);
            break;
          case Wc:
          case sc:
          case Ec:
            fD.$items.has(QD) || (fD.$items.set(QD, tD), "number" === typeof fD.$refId && QD >= fD.$refId && (fD.$refId = QD + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${fD.constructor?.name} \u2014 item at index ${QD} was not stored.`)
        }
        MD !== tD && iD?.push({
          ref: ID,
          refId: DD.currentRefId,
          op: bD,
          dynamicIndex: BD,
          value: tD,
          previousValue: MD
        })
      },
      rc = function(DD, CD, cD, ID, iD) {
        const fD = ID[vD] ?? ID;
        let bD, QD = CD[cD.offset++];
        if (QD === pD.CLEAR) return DD.removeChildRefs(fD, iD), void fD.clear();
        if (QD === pD.REVERSE) return void fD.items.reverse();
        if (QD === pD.DELETE_BY_REFID) {
          const QD = gC.number(CD, cD),
            wD = DD.root.refs.get(QD);
          if (void 0 === wD) return;
          if (DD.root.removeRef(QD), bD = fD.findIndex((DD => DD === wD)), -1 === bD) return;
          return fD[MD](bD), void iD?.push({
            ref: ID,
            refId: DD.currentRefId,
            op: pD.DELETE,
            dynamicIndex: bD,
            value: void 0,
            previousValue: wD
          })
        }
        if (QD === pD.ADD_BY_REFID) {
          const ID = gC.number(CD, cD),
            pD = DD.root.refs.get(ID);
          pD && (bD = fD.findIndex((DD => DD === pD))), -1 !== bD && void 0 !== bD || (bD = fD.length)
        } else bD = gC.number(CD, cD);
        const wD = fD[oD];
        let SD = bD;
        const BD = fD.items[bD],
          yD = ec(DD, QD, ID, bD, BD, wD, CD, cD, iD);
        null !== DD.resyncVisited && Gc(DD, ID, QD, bD, BD, yD, iD), null !== yD && void 0 !== yD && yD !== BD && fD.$setAt(bD, yD, null !== DD.resyncVisited && QD === pD.ADD ? pD.REPLACE : QD), BD !== yD && iD?.push({
          ref: ID,
          refId: DD.currentRefId,
          op: QD,
          dynamicIndex: SD,
          value: yD,
          previousValue: BD
        })
      };
    class Ac extends Error {}

    function Fc(DD, CD, cD, ID) {
      if (!(DD instanceof CD)) throw new Ac(`a '${CD.name}' was expected, but '${DD&&DD.constructor.name}' was provided in ${cD.constructor.name}#${ID}`)
    }
    const DI = (DD, CD) => {
        const cD = DD.toString(),
          ID = CD.toString();
        return cD < ID ? -1 : cD > ID ? 1 : 0
      },
      CI = {
        get: (DD, CD) => "symbol" === typeof CD || isNaN(CD) ? Reflect.get(DD, CD) : DD.items[CD],
        set: (DD, CD, cD) => {
          if ("symbol" !== typeof CD && !isNaN(CD)) {
            if (void 0 === cD || null === cD) DD.$deleteAt(CD);
            else {
              let ID;
              if (cD[ZD]) {
                Fc(cD, DD[oD], DD, CD);
                const iD = DD.items[CD];
                DD.isMovingItems ? (ID = DD.$wireIndex(Number(CD)), void 0 !== iD ? cD[ZD].isNew ? DD[ZD].indexedOperation(ID, pD.MOVE_AND_ADD) : (DD[ZD].getChange(ID) & pD.DELETE) === pD.DELETE ? DD[ZD].indexedOperation(ID, pD.DELETE_AND_MOVE) : DD[ZD].indexedOperation(ID, pD.MOVE) : cD[ZD].isNew && DD[ZD].indexedOperation(ID, pD.ADD), cD[ZD].setParent(DD, DD[ZD].root, ID)) : ID = DD.$changeAt(Number(CD), cD), void 0 !== iD && iD[ZD].root?.remove(iD[ZD])
              } else ID = DD.$changeAt(Number(CD), cD);
              DD.items[CD] = cD, void 0 !== ID && (DD.tmpItems[ID] = cD)
            }
            return !0
          }
          return Reflect.set(DD, CD, cD)
        },
        deleteProperty: (DD, CD) => ("number" === typeof CD ? DD.$deleteAt(CD) : delete DD[CD], !0),
        has: (DD, CD) => "symbol" === typeof CD || isNaN(Number(CD)) ? Reflect.has(DD, CD) : Reflect.has(DD.items, CD)
      };
    class cI {
      [ZD];
      [bD];
      [vD];
      [oD];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[wD] = Tc;
      static[SD] = rc;
      static COLLECTION_KIND = Yc;
      static[BD](DD, CD, cD) {
        if (!cD) return !0;
        const ID = DD[vD] ?? DD;
        return "string" === typeof ID[oD] || cD.isChangeTreeVisible(ID.tmpItems[CD]?.[ZD])
      }
      static is(DD) {
        return Array.isArray(DD) || void 0 !== DD.array
      }
      static from(DD) {
        return new cI(...Array.from(DD))
      }
      constructor() {
        this[oD] = void 0, this[vD] = this;
        const DD = new Proxy(this, CI);
        return Object.defineProperty(this, ZD, {
          value: new Jc(DD, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), DD
      }
      static initializeForDecoder() {
        const DD = Object.create(cI.prototype);
        DD.items = [], DD.isMovingItems = !1, DD._needsCompaction = !1, DD[oD] = void 0, DD[vD] = DD;
        const CD = new Proxy(DD, CI);
        return ac(DD, CD), CD
      }
      set length(DD) {
        0 === DD ? this.clear() : DD < this.items.length ? this.splice(DD, this.length - DD) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[ZD].pause()
      }
      resumeTracking() {
        this[ZD].resume()
      }
      untracked(DD) {
        return this[ZD].untracked(DD)
      }
      get isTrackingPaused() {
        return this[ZD].paused
      }
      push() {
        const DD = this[vD],
          CD = DD.items,
          cD = DD.tmpItems,
          ID = DD[ZD],
          iD = DD[oD];
        let fD = cD.length;
        for (let bD = 0, QD = arguments.length; bD < QD; bD++, fD++) {
          const QD = bD < 0 || arguments.length <= bD ? void 0 : arguments[bD];
          if (void 0 === QD || null === QD) return;
          "object" === typeof QD && iD && Fc(QD, iD, DD, bD), ID.indexedOperation(fD, pD.ADD), CD.push(QD), cD.push(QD), QD[ZD]?.setParent(this, ID.root, fD)
        }
        return fD
      }
      pop() {
        const DD = this[vD],
          CD = DD.tmpItems,
          cD = DD.deletedIndexes;
        let ID = -1;
        for (let iD = CD.length - 1; iD >= 0; iD--)
          if (!0 !== cD[iD]) {
            ID = iD;
            break
          } if (ID < 0) return;
        const pD = DD.$isUnsentAdd(ID);
        return DD[ZD].delete(ID), pD ? DD.$cancelAdd(ID) : cD[ID] = !0, DD.items.pop()
      }
      at(DD) {
        return DD < 0 && (DD += this.length), this.items[DD]
      }
      $wireIndex(DD) {
        const CD = this.deletedIndexes;
        if (0 === CD.length) return DD;
        const cD = this.tmpItems;
        let ID = 0;
        for (let pD = 0; pD < cD.length; pD++)
          if (!0 !== CD[pD]) {
            if (ID === DD) return pD;
            ID++
          } return cD.length + (DD - ID)
      }
      $isUnsentAdd(DD) {
        const CD = this[ZD];
        return 0 === (576 & CD.flags) && !CD.paused && "string" !== typeof this[oD] && CD.operationAt(DD) === pD.ADD
      }
      $cancelAdd(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cD = this[ZD],
          ID = this.tmpItems[DD];
        this.tmpItems.splice(DD, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(DD, 1), cD.removeAt(DD, 1);
        const pD = ID?.[ZD];
        void 0 !== pD && void 0 === pD.root && pD.removeParent(this), CD && this.$reindexChildren(DD)
      }
      $reindexChildren(DD, CD) {
        if (!this[ZD].hasFilteredFields) return;
        if ("string" === typeof this[oD]) return;
        const cD = this.tmpItems,
          ID = cD.length;
        if (void 0 !== CD)
          for (; DD < ID && cD[DD] === CD[DD];) DD++;
        for (let pD = DD; pD < ID; pD++) cD[pD]?.[ZD]?.setParentIndex(this, pD)
      }
      $changeAt(DD, CD) {
        if (void 0 === CD || null === CD) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[DD] === CD) return;
        const cD = void 0 !== this.items[DD] ? "object" === typeof CD ? pD.DELETE_AND_ADD : pD.REPLACE : pD.ADD,
          ID = this.$wireIndex(DD),
          iD = this[ZD];
        return iD.change(ID, cD), CD[ZD]?.setParent(this, iD.root, ID), ID
      }
      $deleteAt(DD, CD) {
        this[ZD].delete(this.$wireIndex(DD), CD)
      }
      $setAt(DD, CD, cD) {
        cD === pD.ADD && void 0 !== this.items[DD] ? this.items.splice(DD, 0, CD) : cD === pD.DELETE_AND_MOVE ? (this.items.splice(DD, 1), this.items[DD] = CD) : (DD > this.items.length && (this._needsCompaction = !0), this.items[DD] = CD)
      }
      clear() {
        const DD = this[vD];
        if (0 === DD.items.length) return;
        const CD = DD[ZD];
        CD.forEachChild(((DD, cD) => {
          CD.root?.remove(DD)
        })), CD.discard(), CD.operation(pD.CLEAR), DD.items.length = 0, DD.tmpItems.length = 0
      } [gD]() {
        const DD = this[vD] ?? this,
          CD = DD[ZD];
        if (CD.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const cD = DD.items;
        for (let ID = 0; ID < cD.length; ID++) cD[ID]?.[gD]?.();
        DD.items.length = 0, DD.tmpItems.length = 0, DD.deletedIndexes.length = 0, CD.recycle(), DD[bD] = void 0
      }
      concat() {
        return new cI(...this.items.concat(...arguments))
      }
      join(DD) {
        return this.items.join(DD)
      }
      reverse() {
        const DD = this[vD],
          CD = DD[ZD];
        if (CD.has() || DD.deletedIndexes.length > 0) {
          const CD = DD.items.slice().reverse();
          return this.clear(), this.push(...CD), this
        }
        return CD.operation(pD.REVERSE), DD.items.reverse(), DD.tmpItems.reverse(), DD.$reindexChildren(0), this
      }
      shift() {
        const DD = this[vD],
          CD = DD.items;
        if (0 === CD.length) return;
        const cD = DD[ZD],
          ID = DD.deletedIndexes;
        let iD = 0;
        for (; !0 === ID[iD];) iD++;
        const fD = DD.$isUnsentAdd(iD);
        return cD.delete(iD, pD.DELETE), fD ? DD.$cancelAdd(iD) : ID[iD] = !0, CD.shift()
      }
      slice(DD, CD) {
        const cD = new cI;
        return cD.push(...this.items.slice(DD, CD)), cD
      }
      sort() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DI;
        const CD = this[vD];
        CD.isMovingItems = !0;
        const cD = CD[ZD];
        return CD.items.sort(DD).forEach(((DD, CD) => cD.change(CD, pD.REPLACE))), CD.tmpItems.sort(DD), CD.$reindexChildren(0), CD.isMovingItems = !1, this
      }
      splice(DD, CD) {
        const cD = this[vD],
          ID = cD[ZD],
          iD = cD.items,
          fD = cD.tmpItems,
          bD = cD.deletedIndexes,
          QD = iD.length,
          wD = fD.length;
        for (var SD = arguments.length, BD = new Array(SD > 2 ? SD - 2 : 0), yD = 2; yD < SD; yD++) BD[yD - 2] = arguments[yD];
        const MD = BD.length,
          tD = [];
        for (let pD = 0; pD < wD; pD++) !0 !== bD[pD] && tD.push(pD);
        let oD;
        if (QD > DD) {
          void 0 === CD && (CD = QD - DD);
          for (let iD = DD; iD < DD + CD; iD++) {
            const DD = tD[iD],
              CD = cD.$isUnsentAdd(DD);
            ID.delete(DD, pD.DELETE), CD ? (oD ??= []).push(DD) : bD[DD] = !0
          }
        } else CD = 0;
        if (MD > 0) {
          const iD = tD[DD] ?? QD,
            wD = Math.min(MD, CD);
          for (let DD = 0; DD < wD; DD++) {
            const CD = iD + DD;
            let cD;
            const QD = void 0 !== oD ? oD.indexOf(CD) : -1; - 1 !== QD ? (oD.splice(QD, 1), cD = pD.ADD) : cD = bD[CD] ? pD.DELETE_AND_ADD : pD.ADD, ID.indexedOperation(CD, cD), fD[CD] = BD[DD], bD[CD] = !1, BD[DD][ZD]?.setParent(this, ID.root, CD)
          }
          const SD = MD - wD;
          if (SD > 0) {
            const DD = iD + wD;
            ID.insertAt(DD, SD);
            for (let CD = 0; CD < SD; CD++) BD[wD + CD][ZD]?.setParent(this, ID.root, DD + CD);
            bD.length > 0 && bD.splice(DD, 0, ...new Array(SD).fill(!1)), fD.splice(DD, 0, ...BD.slice(wD)), cD.$reindexChildren(DD + SD)
          }
        }
        if (void 0 !== oD && oD.length > 0) {
          for (let DD = oD.length - 1; DD >= 0; DD--) cD.$cancelAdd(oD[DD], !1);
          cD.$reindexChildren(oD[0])
        }
        return ID.root?.enqueueChangeTree(ID), iD.splice(DD, CD, ...BD)
      }
      unshift() {
        const DD = this[vD],
          CD = DD[ZD];
        CD.unshift(arguments.length);
        for (let ID = 0; ID < arguments.length; ID++)(ID < 0 || arguments.length <= ID ? void 0 : arguments[ID])?.[ZD]?.setParent(this, CD.root, ID);
        const cD = DD.deletedIndexes;
        return cD.length > 0 && cD.unshift(...new Array(arguments.length).fill(!1)), DD.tmpItems.unshift(...arguments), DD.$reindexChildren(arguments.length), DD.items.unshift(...arguments)
      }
      indexOf(DD, CD) {
        return this.items.indexOf(DD, CD)
      }
      lastIndexOf(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(DD, CD)
      }
      every(DD, CD) {
        return this.items.every(DD, CD)
      }
      some(DD, CD) {
        return this.items.some(DD, CD)
      }
      forEach(DD, CD) {
        return this.items.forEach(DD, CD)
      }
      map(DD, CD) {
        return this.items.map(DD, CD)
      }
      filter(DD, CD) {
        return this.items.filter(DD, CD)
      }
      reduce(DD, CD) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(DD, CD) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(DD, CD) {
        return this.items.find(DD, CD)
      }
      findIndex(DD, CD) {
        return this.items.findIndex(DD, CD)
      }
      fill(DD, CD, cD) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(DD, CD, cD) {
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
        return cI
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
      includes(DD, CD) {
        return this.items.includes(DD, CD)
      }
      flatMap(DD, CD) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(DD) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(DD, CD) {
        const cD = this.items.slice();
        return DD < 0 && (DD += this.length), cD[DD] = CD, new cI(...cD)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(DD) {
        return this.items.slice().sort(DD)
      }
      toSpliced(DD, CD) {
        for (var cD = arguments.length, ID = new Array(cD > 2 ? cD - 2 : 0), pD = 2; pD < cD; pD++) ID[pD - 2] = arguments[pD];
        const iD = this.items.slice();
        return iD.splice.apply(iD, arguments), iD
      }
      shuffle() {
        return this.move((DD => {
          let CD = this.items.length;
          for (; 0 != CD;) {
            let DD = Math.floor(Math.random() * CD);
            CD--, [this[CD], this[DD]] = [this[DD], this[CD]]
          }
        }))
      }
      move(DD) {
        return this.isMovingItems = !0, DD(this), this.isMovingItems = !1, this
      } [yD](DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = this[vD] ?? this;
        return CD || cD.deletedIndexes[DD] ? cD.items[DD] : cD.tmpItems[DD] || cD.items[DD]
      } [MD](DD) {
        const CD = this[vD] ?? this;
        CD.items[DD] = void 0, CD._needsCompaction = !0
      } [ND]() {
        const DD = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, DD), this.deletedIndexes.length = 0)
      } [XD]() {
        const DD = this[vD] ?? this;
        DD._needsCompaction && (DD._needsCompaction = !1, DD.items = DD.items.filter((DD => void 0 !== DD)))
      } [tD](DD, CD, cD) {
        const ID = this[vD] ?? this,
          pD = ID.items;
        let iD = !1;
        for (let fD = 0; fD < pD.length; fD++) {
          const bD = pD[fD];
          DD.has(fD) ? cD(bD) : (iD = !0, CD(bD, fD), ID[MD](fD))
        }
        iD && ID[XD]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((DD => "function" === typeof DD.toJSON ? DD.toJSON() : DD))
      }
      clone(DD) {
        let CD;
        return DD ? (CD = new cI, CD.push(...this.items)) : CD = new cI(...this.map((DD => DD[ZD] ? DD.clone() : DD))), CD
      }
    }
    nC("array", {
      constructor: cI
    });
    class II {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(DD) {
        const CD = this.indexByKey[DD];
        return void 0 === CD ? void 0 : CD
      }
      assign(DD) {
        const CD = this.nextIndex++;
        return this.indexByKey[DD] = CD, this.keyByIndex.set(CD, DD), CD
      }
      snapshot(DD, CD) {
        (this.snapshots ??= new Map).set(DD, CD)
      }
      forgetSnapshot(DD) {
        this.snapshots?.delete(DD)
      }
      snapshotAt(DD) {
        return this.snapshots?.get(DD)
      }
      setIndex(DD, CD) {
        this.keyByIndex.set(DD, CD), this.indexByKey[CD] = DD
      }
      keyOf(DD) {
        return this.keyByIndex.get(DD)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [DD] of this.snapshots) {
            const CD = this.keyByIndex.get(DD);
            void 0 !== CD && (delete this.indexByKey[CD], this.keyByIndex.delete(DD))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class pI {
      [ZD];
      [bD];
      childType;
      [oD];
      $items = new Map;
      journal = new II;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(DD) {
        (this._stream ??= HC()).maxPerTick = DD
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(DD) {
        (this._stream ??= HC()).priority = DD
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[wD] = jc;
      static[SD] = hc;
      static COLLECTION_KIND = dc;
      static[BD](DD, CD, cD) {
        if (!cD || "string" === typeof DD[oD]) return !0;
        const ID = DD[yD](CD) ?? DD.journal.snapshotAt(CD);
        return cD.isChangeTreeVisible(ID[ZD])
      }
      static is(DD) {
        return void 0 !== DD.map
      }
      constructor(DD) {
        if (Object.defineProperty(this, ZD, {
            value: new Jc(this),
            enumerable: !1,
            writable: !0
          }), this[oD] = void 0, DD)
          if (DD instanceof Map || DD instanceof pI) DD.forEach(((DD, CD) => this.set(CD, DD)));
          else
            for (const CD in DD) this.set(CD, DD[CD])
      }
      static initializeForDecoder() {
        const DD = Object.create(pI.prototype);
        return DD.$items = new Map, DD.journal = new II, DD[oD] = void 0, ac(DD), DD
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return pI
      }
      set(DD, CD) {
        if (void 0 === CD || null === CD) throw new Error(`MapSchema#set('${DD}', ${CD}): trying to set ${CD} value on '${DD}'.`);
        "object" === typeof CD && this[oD] && Fc(CD, this[oD], this, DD), DD = DD.toString();
        const cD = this[ZD],
          ID = void 0 !== CD[ZD],
          iD = this.journal;
        let fD, bD = iD.indexOf(DD);
        if (void 0 !== bD) {
          fD = pD.REPLACE;
          const cD = this.$items.get(DD);
          if (cD === CD) return;
          ID && (fD = pD.DELETE_AND_ADD, void 0 !== cD && cD[ZD].root?.remove(cD[ZD])), void 0 !== iD.snapshotAt(bD) && iD.forgetSnapshot(bD)
        } else bD = iD.assign(DD), fD = pD.ADD;
        return this.$items.set(DD, CD), fD === pD.ADD && cD.isStreamCollection ? void 0 !== cD.root && xC(this, cD.root, bD) : cD.change(bD, fD), ID && CD[ZD].setParent(this, cD.root, bD), this
      }
      get(DD) {
        return this.$items.get(DD)
      }
      getOrInsert(DD, CD) {
        return this.$items.has(DD) ? this.$items.get(DD) : (this.set(DD, CD), CD)
      }
      getOrInsertComputed(DD, CD) {
        if (this.$items.has(DD)) return this.$items.get(DD);
        const cD = CD(DD);
        return this.set(DD, cD), cD
      }
      delete(DD) {
        if (!this.$items.has(DD)) return !1;
        const CD = this.journal.indexOf(DD),
          cD = this.$items.get(DD),
          ID = this[ZD];
        if (ID.isStreamCollection) {
          const pD = ID.root;
          let iD = !1;
          return void 0 !== pD && (iD = qC(this, pD, this[bD], CD)), void 0 !== cD?.[ZD] && pD?.remove(cD[ZD]), this.$items.delete(DD), iD || this.journal.snapshot(CD, cD), !0
        }
        return this.journal.snapshot(CD, cD), ID.delete(CD), this.$items.delete(DD)
      }
      clear() {
        const DD = this[ZD];
        DD.discard(), DD.forEachChild(((CD, cD) => {
          DD.root?.remove(CD)
        })), this.journal.reset(), this.$items.clear(), DD.operation(pD.CLEAR)
      } [gD]() {
        const DD = this[ZD];
        if (DD.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((DD => DD?.[gD]?.())), this.$items.clear(), this.journal.reset(), DD.recycle(), this[bD] = void 0
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
        this[ZD].pause()
      }
      resumeTracking() {
        this[ZD].resume()
      }
      untracked(DD) {
        return this[ZD].untracked(DD)
      }
      get isTrackingPaused() {
        return this[ZD].paused
      }
      setIndex(DD, CD) {
        this.journal.setIndex(DD, CD)
      }
      getIndex(DD) {
        return this.journal.keyOf(DD)
      } [yD](DD) {
        const CD = this.journal.keyOf(DD);
        return void 0 !== CD ? this.$items.get(CD) : void 0
      } [MD](DD) {
        const CD = this.journal.keyOf(DD);
        void 0 !== CD && (this.$items.delete(CD), this.journal.keyByIndex.delete(DD))
      } [tD](DD, CD, cD) {
        let ID = null;
        if (this.$items.forEach(((pD, iD) => {
            DD.has(iD) ? cD(pD) : ((ID ??= new Set).add(iD), CD(pD, iD))
          })), null !== ID) {
          ID.forEach((DD => {
            this.$items.delete(DD), delete this.journal.indexByKey[DD]
          }));
          const DD = [];
          this.journal.keyByIndex.forEach(((CD, cD) => {
            ID.has(CD) && DD.push(cD)
          }));
          for (let CD = 0; CD < DD.length; CD++) this.journal.keyByIndex.delete(DD[CD])
        }
      } [ND]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(DD) {
        VC(this, DD)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (DD => {
          let [CD, cD] = DD;
          return [CD, "function" === typeof cD.toJSON ? cD.toJSON() : cD]
        })))
      }
      clone(DD) {
        let CD;
        return DD ? CD = Object.assign(new pI, this) : (CD = new pI, this.forEach(((DD, cD) => {
          DD[ZD] ? CD.set(cD, DD.clone()) : CD.set(cD, DD)
        }))), CD
      }
    }
    nC("map", {
      constructor: pI
    });
    class iI {
      [ZD];
      [bD];
      [oD];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(DD) {
        (this._stream ??= HC()).maxPerTick = DD
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(DD) {
        (this._stream ??= HC()).priority = DD
      }
      static[wD] = lc;
      static[SD] = hc;
      static COLLECTION_KIND = sc;
      static[BD](DD, CD, cD) {
        return !cD || "string" === typeof DD[oD] || cD.isChangeTreeVisible((DD[yD](CD) ?? DD.deletedItems[CD])[ZD])
      }
      static is(DD) {
        return void 0 !== DD.collection
      }
      constructor(DD) {
        Object.defineProperty(this, ZD, {
          value: new Jc(this),
          enumerable: !1,
          writable: !0
        }), this[oD] = void 0, DD && DD.forEach((DD => this.add(DD)))
      }
      static initializeForDecoder() {
        const DD = Object.create(iI.prototype);
        return DD.$items = new Map, DD.deletedItems = {}, DD.$refId = 0, DD[oD] = void 0, ac(DD), DD
      }
      add(DD) {
        const CD = this.$refId++,
          cD = this[ZD];
        return this.$items.set(CD, DD), cD.isStreamCollection ? void 0 !== cD.root && xC(this, cD.root, CD) : cD.change(CD), void 0 !== DD[ZD] && DD[ZD].setParent(this, cD.root, CD), CD
      }
      at(DD) {
        const CD = Array.from(this.$items.keys())[DD];
        return this.$items.get(CD)
      }
      entries() {
        return this.$items.entries()
      }
      delete(DD) {
        const CD = this.$items.entries();
        let cD, ID;
        for (;
          (ID = CD.next()) && !ID.done;)
          if (DD === ID.value[1]) {
            cD = ID.value[0];
            break
          } if (void 0 === cD) return !1;
        const pD = this[ZD];
        if (pD.isStreamCollection) {
          const DD = pD.root,
            CD = this.$items.get(cD);
          return void 0 !== DD && qC(this, DD, this[bD], cD), void 0 !== CD?.[ZD] && DD?.remove(CD[ZD]), this.deletedItems[cD] = CD, this.$items.delete(cD)
        }
        return this.deletedItems[cD] = pD.delete(cD), this.$items.delete(cD)
      }
      clear() {
        const DD = this[ZD];
        DD.discard(), DD.forEachChild(((CD, cD) => {
          DD.root?.remove(CD)
        })), this.$items.clear(), DD.operation(pD.CLEAR)
      } [gD]() {
        const DD = this[ZD];
        if (DD.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((DD => DD?.[gD]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, DD.recycle(), this[bD] = void 0
      }
      has(DD) {
        return Array.from(this.$items.values()).some((CD => CD === DD))
      }
      forEach(DD) {
        this.$items.forEach(((CD, cD, ID) => DD(CD, cD, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[ZD].pause()
      }
      resumeTracking() {
        this[ZD].resume()
      }
      untracked(DD) {
        return this[ZD].untracked(DD)
      }
      get isTrackingPaused() {
        return this[ZD].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(DD, CD) {}
      getIndex(DD) {
        return DD
      } [yD](DD) {
        return this.$items.get(DD)
      } [MD](DD) {
        this.$items.delete(DD)
      } [tD](DD, CD, cD) {
        let ID = null;
        if (this.$items.forEach(((pD, iD) => {
            DD.has(iD) ? cD(pD) : ((ID ??= []).push(iD), CD(pD, iD))
          })), null !== ID)
          for (let pD = 0; pD < ID.length; pD++) this[MD](ID[pD])
      } [ND]() {
        for (const DD in this.deletedItems) delete this.deletedItems[DD]
      }
      _dropView(DD) {
        VC(this, DD)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const DD = [];
        return this.forEach(((CD, cD) => {
          DD.push("function" === typeof CD.toJSON ? CD.toJSON() : CD)
        })), DD
      }
      clone(DD) {
        let CD;
        return DD ? CD = Object.assign(new iI, this) : (CD = new iI, this.forEach((DD => {
          DD[ZD] ? CD.add(DD.clone()) : CD.add(DD)
        }))), CD
      }
    }
    nC("collection", {
      constructor: iI
    });
    class fI {
      [ZD];
      [bD];
      [oD];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(DD) {
        (this._stream ??= HC()).maxPerTick = DD
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(DD) {
        (this._stream ??= HC()).priority = DD
      }
      static[wD] = lc;
      static[SD] = hc;
      static COLLECTION_KIND = Wc;
      static[BD](DD, CD, cD) {
        return !cD || "string" === typeof DD[oD] || cD.isVisible((DD[yD](CD) ?? DD.deletedItems[CD])[ZD])
      }
      static is(DD) {
        return void 0 !== DD.set
      }
      constructor(DD) {
        Object.defineProperty(this, ZD, {
          value: new Jc(this),
          enumerable: !1,
          writable: !0
        }), this[oD] = void 0, DD && DD.forEach((DD => this.add(DD)))
      }
      static initializeForDecoder() {
        const DD = Object.create(fI.prototype);
        return DD.$items = new Map, DD.deletedItems = {}, DD.$refId = 0, DD[oD] = void 0, ac(DD), DD
      }
      add(DD) {
        if (this.has(DD)) return !1;
        const CD = this.$refId++,
          cD = this[ZD];
        return this.$items.set(CD, DD), cD.isStreamCollection ? void 0 !== cD.root && xC(this, cD.root, CD) : cD.change(CD, pD.ADD), void 0 !== DD[ZD] && DD[ZD].setParent(this, cD.root, CD), CD
      }
      entries() {
        return this.$items.entries()
      }
      delete(DD) {
        const CD = this.$items.entries();
        let cD, ID;
        for (;
          (ID = CD.next()) && !ID.done;)
          if (DD === ID.value[1]) {
            cD = ID.value[0];
            break
          } if (void 0 === cD) return !1;
        const pD = this[ZD];
        if (pD.isStreamCollection) {
          const DD = pD.root,
            CD = this.$items.get(cD);
          return void 0 !== DD && qC(this, DD, this[bD], cD), void 0 !== CD?.[ZD] && DD?.remove(CD[ZD]), this.deletedItems[cD] = CD, this.$items.delete(cD)
        }
        return this.deletedItems[cD] = pD.delete(cD), this.$items.delete(cD)
      }
      clear() {
        const DD = this[ZD];
        DD.discard(), this.$items.clear(), DD.operation(pD.CLEAR)
      } [gD]() {
        const DD = this[ZD];
        if (DD.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((DD => DD?.[gD]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, DD.recycle(), this[bD] = void 0
      }
      has(DD) {
        const CD = this.$items.values();
        let cD, ID = !1;
        for (;
          (cD = CD.next()) && !cD.done;)
          if (DD === cD.value) {
            ID = !0;
            break
          } return ID
      }
      forEach(DD) {
        this.$items.forEach(((CD, cD, ID) => DD(CD, cD, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[ZD].pause()
      }
      resumeTracking() {
        this[ZD].resume()
      }
      untracked(DD) {
        return this[ZD].untracked(DD)
      }
      get isTrackingPaused() {
        return this[ZD].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(DD, CD) {}
      getIndex(DD) {
        return DD
      } [yD](DD) {
        return this.$items.get(DD)
      } [MD](DD) {
        this.$items.delete(DD)
      } [tD](DD, CD, cD) {
        let ID = null;
        if (this.$items.forEach(((pD, iD) => {
            DD.has(iD) ? cD(pD) : ((ID ??= []).push(iD), CD(pD, iD))
          })), null !== ID)
          for (let pD = 0; pD < ID.length; pD++) this[MD](ID[pD])
      } [ND]() {
        for (const DD in this.deletedItems) delete this.deletedItems[DD]
      }
      _dropView(DD) {
        VC(this, DD)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const DD = [];
        return this.forEach(((CD, cD) => {
          DD.push("function" === typeof CD.toJSON ? CD.toJSON() : CD)
        })), DD
      }
      clone(DD) {
        let CD;
        return DD ? CD = Object.assign(new fI, this) : (CD = new fI, this.forEach((DD => {
          DD[ZD] ? CD.add(DD.clone()) : CD.add(DD)
        }))), CD
      }
    }
    nC("set", {
      constructor: fI
    });
    class bI {
      [ZD];
      [bD];
      [oD];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(DD) {
        (this._stream ??= HC()).maxPerTick = DD
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(DD) {
        (this._stream ??= HC()).priority = DD
      }
      static $isStream = !0;
      static[wD] = lc;
      static[SD] = hc;
      static COLLECTION_KIND = Ec;
      static[BD](DD, CD, cD) {
        if (!cD) return !0;
        const ID = DD[yD](CD);
        return void 0 !== ID && cD.isVisible(ID[ZD])
      }
      static is(DD) {
        return DD && void 0 !== DD.stream
      }
      constructor() {
        Object.defineProperty(this, ZD, {
          value: new Jc(this),
          enumerable: !1,
          writable: !0
        }), this[oD] = void 0
      }
      static initializeForDecoder() {
        const DD = Object.create(bI.prototype);
        return DD.$items = new Map, DD.$nextPosition = 0, DD._itemIndex = new Map, DD[oD] = void 0, ac(DD), DD
      }
      add(DD) {
        if (this._itemIndex.has(DD)) return -1;
        const CD = this.$nextPosition++;
        this.$items.set(CD, DD), this._itemIndex.set(DD, CD);
        const cD = this[ZD].root;
        return void 0 !== DD[ZD] && DD[ZD].setParent(this, cD, CD), void 0 !== cD && xC(this, cD, CD), CD
      }
      remove(DD) {
        const CD = this._itemIndex.get(DD);
        if (void 0 === CD) return !1;
        this._itemIndex.delete(DD), this.$items.delete(CD);
        const cD = this[ZD].root;
        return void 0 !== cD && (qC(this, cD, this[bD], CD), void 0 !== DD[ZD] && cD.remove(DD[ZD])), !0
      }
      has(DD) {
        return this._itemIndex.has(DD)
      }
      clear() {
        const DD = this[ZD].root;
        if (void 0 !== DD) {
          ! function(DD, CD, cD) {
            const ID = DD._stream;
            if (void 0 !== ID) {
              ID.broadcastPending.clear();
              for (const DD of ID.sentBroadcast) ID.broadcastDeletes.add(DD);
              ID.sentBroadcast.clear(), CD.forEachActiveView((DD => {
                ID.pendingByView.get(DD.id)?.clear();
                const CD = ID.sentByView.get(DD.id);
                if (void 0 !== CD && CD.size > 0) {
                  let ID = DD.changes.get(cD);
                  void 0 === ID && (ID = new Map, DD.changes.set(cD, ID));
                  for (const DD of CD) ID.set(DD, pD.DELETE);
                  CD.clear()
                }
              }))
            }
          }(this, DD, this[bD]);
          for (const CD of this.$items.values()) void 0 !== CD[ZD] && DD.remove(CD[ZD])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(DD) {
        for (const [CD, cD] of this.$items) DD(cD, CD, this)
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
      setIndex(DD, CD) {}
      getIndex(DD) {
        return DD
      } [yD](DD) {
        return this.$items.get(DD)
      } [MD](DD) {
        const CD = this.$items.get(DD);
        void 0 !== CD && (this._itemIndex.delete(CD), this.$items.delete(DD))
      } [tD]() {} [ND]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const DD = [];
        return this.forEach((CD => {
          DD.push("function" === typeof CD?.toJSON ? CD.toJSON() : CD)
        })), DD
      }
      clone(DD) {
        if (DD) {
          return Object.assign(new bI, this)
        }
        const CD = new bI;
        return CD.maxPerTick = this.maxPerTick, this.forEach((DD => {
          CD.add("function" === typeof DD?.clone ? DD.clone() : DD)
        })), CD
      }
      _dropView(DD) {
        VC(this, DD)
      }
      _unregister() {}
    }
    nC("stream", {
      constructor: bI
    });
    class QI {
      [nD] = !0;
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
        if (DD && "object" === typeof DD && void 0 !== DD.array) throw new Error(PC);
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

    function wI(DD) {
      return null != DD && !0 === DD[nD]
    }

    function SI(DD) {
      return () => new QI(DD)
    }

    function BI(DD) {
      if (wI(DD)) {
        const CD = DD._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof CD?`use the type name instead: t.array("${CD}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return DD
    }

    function yI(DD) {
      return new QI({
        quantized: jC(DD)
      })
    }
    const MI = Object.freeze({
        string: SI("string"),
        number: SI("number"),
        boolean: SI("boolean"),
        int8: SI("int8"),
        uint8: SI("uint8"),
        int16: SI("int16"),
        uint16: SI("uint16"),
        int32: SI("int32"),
        uint32: SI("uint32"),
        int64: SI("int64"),
        uint64: SI("uint64"),
        float32: SI("float32"),
        float64: SI("float64"),
        bigint64: SI("bigint64"),
        biguint64: SI("biguint64"),
        ref: DD => new QI(DD),
        array: DD => new QI({
          array: BI(DD)
        }),
        map: DD => new QI({
          map: BI(DD)
        }),
        set: DD => new QI({
          set: BI(DD)
        }),
        collection: DD => new QI({
          collection: BI(DD)
        }),
        stream: DD => {
          const CD = new QI({
            stream: BI(DD)
          });
          return CD._stream = !0, CD
        },
        quantized: yI,
        angle: DD => yI({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: DD?.bits ?? 16
        })
      }),
      tI = -1;

    function ZI(DD) {
      return RC.register(DD), DD
    }

    function oI() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tI;
      return function(CD, cD) {
        const ID = eC.initialize(CD.constructor);
        eC.setTag(ID, cD, DD)
      }
    }

    function vI(DD, CD) {
      const cD = eC.initialize(DD.constructor);
      eC.setUnreliable(cD, CD)
    }

    function NI(DD, CD) {
      const cD = eC.initialize(DD.constructor);
      eC.setPatchOnly(cD, CD)
    }

    function gI(DD, CD) {
      const cD = eC.initialize(DD.constructor);
      eC.setFullStateOnly(cD, CD)
    }

    function XI(DD, CD) {
      return function(cD, ID) {
        const pD = cD.constructor;
        if (!DD) throw new Error(`${pD.name}: @type() reference provided for "${ID}" is undefined. Make sure you don't have any circular dependencies.`);
        DD = dC(DD, `${pD.name}.${ID}`), RC.register(pD);
        const iD = Object.getPrototypeOf(pD)[Symbol.metadata],
          fD = eC.initialize(pD);
        let bD = fD[ID];
        if (void 0 !== fD[bD]) {
          if (fD[bD].deprecated) return;
          if (void 0 !== fD[bD].type) {
            const DD = new Error(`@colyseus/schema: Duplicate '${ID}' definition on '${pD.name}'.\nCheck @type() annotation`);
            throw new Error(`${DD.message} ${DD.stack.split("\n")[4].trim()}`)
          }
        } else bD = fD[UD] ?? (iD && iD[UD]) ?? -1, bD++;
        if (CD && CD.manual) eC.addField(fD, bD, ID, DD, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: CD,
            childType: cD
          } = kC(DD);
          eC.addField(fD, bD, ID, DD, nI(ID, bD, cD, CD))
        }
        fD[OD][ID] && Object.defineProperty(cD, ID, fD[OD][ID]), ("string" === typeof DD || lC(DD)) && (fD[HD] || Object.defineProperty(fD, HD, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), fD[HD][bD] = "string" === typeof DD ? CC[DD] : GC(DD.quantized))
      }
    }
    const mI = {
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

    function nI(DD, CD, cD, ID) {
      let iD;
      return iD = ID ? function(DD, CD, cD, ID) {
        const iD = ID.constructor === cI,
          fD = ID.constructor === pI;
        return function(DD) {
          const ID = this[mD],
            bD = ID[CD];
          if (DD !== bD) {
            if (void 0 !== DD && null !== DD) {
              if (!iD || DD instanceof cI)
                if (!fD || DD instanceof pI) DD[oD] = cD;
                else {
                  const CD = new pI;
                  if (CD[oD] = cD, DD instanceof Map) DD.forEach(((DD, cD) => CD.set(cD, DD)));
                  else
                    for (const cD in DD) CD.set(cD, DD[cD]);
                  DD = CD
                }
              else {
                const CD = new cI;
                CD[oD] = cD, CD.push(...DD), DD = CD
              }
              const ID = this[ZD],
                wD = this.constructor;
              void 0 !== bD && null !== bD && bD[ZD] ? (ID.root?.remove(bD[ZD]), wD[QD](ID, CD, pD.DELETE_AND_ADD)) : wD[QD](ID, CD, pD.ADD), DD[ZD]?.setParent(this, ID.root, CD)
            } else void 0 !== bD && null !== bD && this[ZD].delete(CD);
            ID[CD] = DD
          }
        }
      }(0, CD, cD, ID) : "string" === typeof cD ? function(DD, CD, cD) {
        const ID = mI[cD],
          iD = "string" === cD,
          fD = "boolean" === cD;
        return function(cD) {
          const bD = this[mD],
            wD = bD[CD];
          if (cD !== wD) {
            if (void 0 !== cD && null !== cD) {
              if (!fD && void 0 !== ID && typeof cD !== ID && (!iD || null !== cD)) {
                const CD = cD && cD.constructor ? ` (${cD.constructor.name})` : "";
                throw new Ac(`a '${ID}' was expected, but '${JSON.stringify(cD)}'${CD} was provided in ${this.constructor.name}#${DD}`)
              }
              this.constructor[QD](this[ZD], CD, pD.ADD)
            } else void 0 !== wD && null !== wD && this[ZD].delete(CD);
            bD[CD] = cD
          }
        }
      }(DD, CD, cD) : lC(cD) ? function(DD, CD, cD) {
        return function(ID) {
          const iD = this[mD],
            fD = iD[CD];
          if (void 0 !== ID && null !== ID) {
            if ("number" !== typeof ID) throw new Ac(`a 'number' was expected, but '${JSON.stringify(ID)}' was provided in ${this.constructor.name}#${DD}`);
            if ((ID = TC(cD, LC(cD, ID))) === fD) return;
            this.constructor[QD](this[ZD], CD, pD.ADD)
          } else {
            if (ID === fD) return;
            void 0 !== fD && null !== fD && this[ZD].delete(CD)
          }
          iD[CD] = ID
        }
      }(DD, CD, cD.quantized) : function(DD, CD, cD) {
        return function(ID) {
          const iD = this[mD],
            fD = iD[CD];
          if (ID !== fD) {
            if (void 0 !== ID && null !== ID) {
              Fc(ID, cD, this, DD);
              const iD = this[ZD],
                bD = this.constructor;
              void 0 !== fD && null !== fD && fD[ZD] ? (iD.root?.remove(fD[ZD]), bD[QD](iD, CD, pD.DELETE_AND_ADD)) : bD[QD](iD, CD, pD.ADD), ID[ZD]?.setParent(this, iD.root, CD)
            } else void 0 !== fD && null !== fD && this[ZD].delete(CD);
            iD[CD] = ID
          }
        }
      }(DD, CD, cD), {
        get: function() {
          return this[mD][CD]
        },
        set: iD,
        enumerable: !0,
        configurable: !0
      }
    }

    function OI() {
      let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(CD, cD) {
        const ID = eC.initialize(CD.constructor);
        eC.setDeprecated(ID, cD), DD && (ID[OD] ??= {}, ID[OD][cD] = {
          get: function() {
            throw new Error(`${cD} is deprecated.`)
          },
          set: function(DD) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(CD, cD, ID[OD][cD]))
      }
    }
    let PI = !1;

    function HI(DD, CD, cD) {
      PI || (PI = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let ID in CD) XI(CD[ID], cD)(DD.prototype, ID);
      return DD
    }

    function UI(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qI;
      if (null == DD || "object" !== typeof DD) throw new Error(`schema(): first argument must be a fields object (got ${typeof DD}).`);
      const ID = {},
        pD = {},
        iD = {},
        fD = {},
        bD = (DD, CD) => {
          if (CD.hasDefault)((DD, CD) => {
            "function" === typeof CD ? fD[DD] = CD : CD && "function" === typeof CD.clone ? fD[DD] = () => CD.clone() : iD[DD] = CD
          })(DD, CD.default);
          else if (!CD.optional) {
            const cD = function(DD) {
              if (DD && "object" === typeof DD) {
                if (void 0 !== DD.array) return () => new cI;
                if (void 0 !== DD.map) return () => new pI;
                if (void 0 !== DD.set) return () => new fI;
                if (void 0 !== DD.collection) return () => new iI;
                if (void 0 !== DD.stream) return () => new bI
              } else if ("function" === typeof DD && qI.is(DD) && (!DD.prototype.initialize || 0 === DD.prototype.initialize.length)) return () => new DD
            }(CD.type);
            cD && (fD[DD] = cD)
          }
        },
        QD = {},
        wD = [],
        SD = [],
        BD = {},
        yD = [],
        MD = [],
        tD = {},
        ZD = [];
      for (const mD in DD) {
        const cD = DD[mD],
          iD = `schema(${CD?`'${CD}'`:""}): field '${mD}'`;
        if (wI(cD)) {
          const DD = cD.toDefinition();
          if (DD.noSync) {
            if (void 0 !== DD.view || DD.unreliable || DD.patchOnly || DD.fullStateOnly || DD.stream) throw new Error(`${iD} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            bD(mD, DD);
            continue
          }
          if (DD.patchOnly && DD.fullStateOnly) throw new Error(`${iD} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const CD = dC(DD.type, iD);
          if ("function" === typeof CD && !qI.is(CD)) throw new Error(`${iD} is a synced ref to non-Schema class '${CD.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          ID[mD] = CD, void 0 !== DD.view && (QD[mD] = DD.view), DD.unreliable && wD.push(mD), DD.patchOnly && SD.push(mD), DD.deprecated && (BD[mD] = DD.deprecatedThrows), DD.fullStateOnly && yD.push(mD), DD.stream && MD.push(mD), void 0 !== DD.streamPriority && (tD[mD] = DD.streamPriority), DD.optional && ZD.push(mD), bD(mD, DD)
        } else {
          if ("function" !== typeof cD) throw new Error(`${iD} must be a t.* builder, Schema subclass, or method (got ${typeof cD}).`);
          qI.is(cD) ? (ID[mD] = cD, cD.prototype.initialize && 0 !== cD.prototype.initialize.length || (fD[mD] = () => new cD)) : pD[mD] = cD
        }
      }
      const oD = DD => {
          for (const CD in iD) DD[CD] = iD[CD];
          for (const CD in fD) DD[CD] = fD[CD]()
        },
        vD = () => {
          const DD = {};
          return oD(DD), DD
        },
        ND = "function" === typeof pD.initialize,
        gD = pD.initialize ?? cD._initialize,
        XD = class extends cD {
          constructor() {
            for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
            const pD = CD[0];
            void 0 === pD ? (super(), oD(this)) : super(Object.assign(vD(), ND ? (DD => {
              const CD = Object.keys(ID),
                cD = {};
              for (const ID in DD) CD.includes(ID) || (cD[ID] = DD[ID]);
              return cD
            })(pD) : pD)), gD && new.target === XD && gD.apply(this, CD)
          }
        };
      CD && Object.defineProperty(XD, "name", {
        value: CD
      }), eC.setFields(XD, ID), XD._getDefaultValues = vD, XD._initialize = gD, Object.assign(XD.prototype, pD);
      for (const mD in QD) oI(QD[mD])(XD.prototype, mD);
      for (const mD of wD) vI(XD.prototype, mD);
      for (const mD of SD) NI(XD.prototype, mD);
      for (const mD in BD) OI(BD[mD])(XD.prototype, mD);
      if (yD.length > 0 || MD.length > 0) {
        const DD = XD[Symbol.metadata];
        for (const CD of yD) eC.setFullStateOnly(DD, CD);
        for (const CD of MD) eC.setStream(DD, CD);
        for (const CD in tD) eC.setStreamPriority(DD, CD, tD[CD])
      }
      if (ZD.length > 0) {
        const DD = XD[Symbol.metadata];
        for (const CD of ZD) DD[DD[CD]].optional = !0
      }
      return XD.extend = (DD, CD) => UI(DD, CD, XD), XD
    }

    function xI(DD) {
      const CD = DD[ZD].root,
        cD = {
          ops: {},
          refs: []
        };
      let ID = CD.changes.next;
      for (; ID;) {
        const DD = ID.changeTree;
        void 0 !== DD ? (cD.refs.push(`refId#${DD.ref[bD]}`), DD.forEach(((DD, CD) => {
          if (DD < 0 || !CD) return;
          const ID = pD[CD];
          cD.ops[ID] || (cD.ops[ID] = 0), cD.ops[ID]++
        })), ID = ID.next) : ID = ID.next
      }
      return cD
    }
    class qI {
      static[wD] = zc;
      static[SD] = uc;
      [bD];
      [mD];
      static initialize(DD) {
        Object.defineProperty(DD, ZD, {
          value: new Jc(DD),
          enumerable: !1,
          writable: !0
        }), DD[mD] = []
      }
      static initializeForDecoder() {
        const DD = Object.create(this.prototype);
        return ac(DD), DD[mD] = [], DD
      }
      static reset(DD) {
        const CD = DD?.[ZD];
        if (void 0 === CD || "function" !== typeof CD.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== CD.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${DD.constructor.name}) with multiple parents.`);
        DD[gD]()
      } [gD]() {
        const DD = this.constructor[Symbol.metadata],
          CD = DD?.[xD] ?? [],
          cD = this[mD];
        for (let ID = 0; ID < CD.length; ID++) {
          const DD = cD[CD[ID]];
          DD?.[gD]?.()
        }
        this[ZD].recycle(), this[bD] = void 0
      }
      static is(DD) {
        const CD = DD[Symbol.metadata];
        return "object" === typeof CD && null !== CD
      }
      static isSchema(DD) {
        return "function" === typeof DD?.assign
      }
      static[QD](DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD.ADD;
        DD.change(CD, cD)
      }
      static[BD](DD, CD, cD) {
        const ID = DD.constructor[Symbol.metadata],
          pD = ID[CD]?.tag;
        return void 0 === cD ? void 0 === pD : void 0 === pD || (pD === tI ? cD.isChangeTreeVisible(DD[ZD]) : cD.hasTagOnTree(DD[ZD], pD))
      }
      constructor(DD) {
        qI.initialize(this), DD && qI.assignProps(this, DD)
      }
      assign(DD) {
        return qI.assignProps(this, DD), this
      }
      static assignProps(DD, CD) {
        const cD = DD.constructor[Symbol.metadata];
        if (cD && void 0 !== cD[UD])
          for (let pD = 0; pD <= cD[UD]; pD++) {
            const ID = cD[pD];
            if (!ID) continue;
            const iD = CD[ID.name];
            void 0 !== iD && (DD[ID.name] = iD)
          }
        const ID = Object.keys(CD);
        for (let pD = 0; pD < ID.length; pD++) {
          const iD = ID[pD];
          cD && void 0 !== cD[iD] || (DD[iD] = CD[iD])
        }
      }
      restore(DD) {
        const CD = this.constructor[Symbol.metadata];
        for (const cD in CD) {
          const ID = CD[cD],
            pD = ID.name,
            iD = ID.type,
            fD = DD[pD];
          if (void 0 !== fD && null !== fD)
            if ("string" === typeof iD) this[pD] = fD;
            else if (qI.is(iD)) {
            const DD = new iD;
            DD.restore(fD), this[pD] = DD
          } else if ("object" === typeof iD) {
            const DD = Object.keys(iD)[0],
              CD = iD[DD];
            if ("map" === DD) {
              const DD = this[pD];
              for (const cD in fD)
                if (qI.is(CD)) {
                  const ID = new CD;
                  ID.restore(fD[cD]), DD.set(cD, ID)
                } else DD.set(cD, fD[cD])
            } else if ("array" === DD) {
              const DD = this[pD];
              for (let cD = 0; cD < fD.length; cD++)
                if (qI.is(CD)) {
                  const ID = new CD;
                  ID.restore(fD[cD]), DD.push(ID)
                } else DD.push(fD[cD])
            }
          }
        }
        return this
      }
      setDirty(DD, CD) {
        const cD = this.constructor[Symbol.metadata];
        this[ZD].change(cD[cD[DD]].index, CD)
      }
      pauseTracking() {
        this[ZD].pause()
      }
      resumeTracking() {
        this[ZD].resume()
      }
      untracked(DD) {
        return this[ZD].untracked(DD)
      }
      get isTrackingPaused() {
        return this[ZD].paused
      }
      clone() {
        const DD = Object.create(this.constructor.prototype);
        qI.initialize(DD);
        const CD = this.constructor[Symbol.metadata];
        for (const cD in CD) {
          const ID = CD[cD].name;
          "object" === typeof this[ID] && "function" === typeof this[ID]?.clone ? DD[ID] = this[ID].clone() : DD[ID] = this[ID]
        }
        return DD
      }
      toJSON() {
        const DD = {},
          CD = this.constructor[Symbol.metadata];
        for (const cD in CD) {
          const ID = CD[cD],
            pD = ID.name;
          ID.deprecated || null === this[pD] || "undefined" === typeof this[pD] || (DD[pD] = "function" === typeof this[pD].toJSON ? this[pD].toJSON() : this[pD])
        }
        return DD
      }
      discardAllChanges() {
        this[ZD].discardAll()
      } [yD](DD) {
        return this[this.constructor[Symbol.metadata][DD].name]
      } [MD](DD) {
        this[this.constructor[Symbol.metadata][DD].name] = void 0
      }
      static debugRefIds(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 ? arguments[3] : void 0,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const iD = CD ? ` - ${JSON.stringify(DD.toJSON())}` : "",
          fD = DD[ZD],
          QD = DD[bD],
          wD = ID ? ID.root.refCount[QD] : fD.refCount,
          SD = wD > 1 ? ` [\xd7${wD}]` : "";
        let BD = `${function(DD){return new Array(DD).fill(0).map(((CD,cD)=>cD===DD-1?"\u2514\u2500 ":"   ")).join("")}(cD)}${pD}${DD.constructor.name} (refId: ${QD})${SD}${iD}\n`;
        return fD.forEachChild(((pD, iD) => {
          let fD = iD;
          "number" === typeof iD && DD.$indexes && (fD = DD.$indexes.get(iD) ?? iD);
          const bD = void 0 !== DD.forEach && void 0 !== fD ? `["${fD}"]: ` : "";
          BD += this.debugRefIds(pD.ref, CD, cD + 1, ID, bD)
        })), BD
      }
      static debugRefIdEncodingOrder(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const cD = [],
          ID = DD[ZD];
        if ("changes" === CD) {
          let DD = ID.root.changes?.next;
          for (; DD;) DD.changeTree && cD.push(DD.changeTree.ref[bD]), DD = DD.next;
          return cD
        }
        const pD = "allFilteredChanges" === CD,
          iD = new Set,
          fD = DD => {
            iD.has(DD) || (iD.add(DD), DD.isFiltered === pD && cD.push(DD.ref[bD]), DD.forEachChild(((DD, CD) => fD(DD))))
          };
        return fD(ID), cD
      }
      static debugRefIdsFromDecoder(DD) {
        return this.debugRefIds(DD.state, !1, 0, DD)
      }
      static debugChanges(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = DD[ZD],
          ID = CD ? "allChanges" : "changes";
        let iD = `${DD.constructor.name} (${DD[bD]}) -> .${ID}:\n`;
        return CD ? cD.forEachLive((DD => {
          iD += `- [${DD}]: ADD (${JSON.stringify(cD.getValue(Number(DD),!0))})\n`
        })) : cD.forEach(((DD, CD) => {
          DD < 0 || !CD || (iD += `- [${DD}]: ${pD[CD]} (${JSON.stringify(cD.getValue(Number(DD),!1))})\n`)
        })), iD
      }
    }
    iD(qI);
    const JI = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class KI {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const DD = {};
        for (const CD in this.changeTrees) DD[CD] = this.changeTrees[CD].refCount;
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
        this.types.hasFilters && (DD.flags & xc || (DD.flags |= xc, this.pendingFilterRefresh.push(DD)))
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
        const CD = DD.id;
        for (const cD of this.streamTrees) cD._dropView(CD)
      }
      forEachActiveView(DD) {
        for (const [CD, cD] of this.activeViews) {
          const ID = cD.deref();
          if (void 0 !== ID) DD(ID);
          else {
            this.activeViews.delete(CD);
            for (const DD of this.streamTrees) DD._dropView(CD)
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
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = DD, this.nextUniqueId = CD
      }
      add(DD) {
        const CD = DD.ref;
        void 0 === CD[bD] && (JI.value = this.nextUniqueId++, Object.defineProperty(CD, bD, JI));
        const cD = CD[bD],
          ID = void 0 === this.changeTrees[cD];
        ID && (this.changeTrees[cD] = DD), DD.needsRestage && (DD.needsRestage = !1, DD.forEachLiveWithCtx(DD, cc));
        const pD = ID ? 0 : DD.refCount;
        return DD.refCount = pD + 1, pD > 0 && this.enqueueFilterRefresh(DD), ID
      }
      remove(DD) {
        const CD = DD.refCount - 1;
        if (CD <= 0) {
          if (DD.root = void 0, delete this.changeTrees[DD.ref[bD]], DD.isStreamCollection) {
            const CD = DD.ref;
            CD._unregister?.(), this.unregisterStream(CD)
          }
          this.removeFromQueue(DD), this.removeFromUnreliableQueue(DD), DD.refCount = 0, DD.needsRestage = !0, DD.forEachChild(((CD, cD) => {
            CD.removeParent(DD.ref) && (void 0 === CD.parentRef || CD.refCount > 0 ? this.remove(CD) : this.moveNextToParent(CD))
          }))
        } else DD.refCount = CD, this.enqueueFilterRefresh(DD), this.recursivelyMoveNextToParent(DD);
        return CD
      }
      recursivelyMoveNextToParent(DD) {
        this.moveNextToParent(DD), DD.forEachChild(((DD, CD) => this.recursivelyMoveNextToParent(DD)))
      }
      moveNextToParent(DD) {
        DD.changesNode && this._moveNextToParentInList(this.changes, DD, DD.changesNode, "changesNode"), DD.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, DD, DD.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(DD, CD, cD, ID) {
        const pD = CD.parent;
        if (!pD || !pD[ZD]) return;
        const iD = pD[ZD][ID];
        iD && iD !== cD && (cD.position > iD.position || (cD.prev ? cD.prev.next = cD.next : DD.next = cD.next, cD.next ? cD.next.prev = cD.prev : DD.tail = cD.prev, cD.prev = DD.tail, cD.next = void 0, DD.tail.next = cD, DD.tail = cD, cD.position = DD.nextPosition++))
      }
      enqueueChangeTree(DD) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.changesNode) || (DD.changesNode = this._appendToList(this.changes, DD))
      }
      enqueueUnreliable(DD) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.unreliableChangesNode) || (DD.unreliableChangesNode = this._appendToList(this.unreliableChanges, DD))
      }
      _appendToList(DD, CD) {
        const cD = this._nodePool;
        let ID;
        return cD.length > 0 ? (ID = cD.pop(), ID.changeTree = CD, ID.next = void 0, ID.prev = void 0) : ID = {
          changeTree: CD,
          next: void 0,
          prev: void 0,
          position: 0
        }, DD.next ? (ID.prev = DD.tail, DD.tail.next = ID, DD.tail = ID) : (DD.nextPosition = 0, DD.next = ID, DD.tail = ID), ID.position = DD.nextPosition++, ID
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
      _removeNode(DD, CD, cD, ID) {
        return !(!cD || cD.changeTree !== CD) && (cD.prev ? cD.prev.next = cD.next : DD.next = cD.next, cD.next ? cD.next.prev = cD.prev : DD.tail = cD.prev, CD[ID] = void 0, this.releaseNode(cD), !0)
      }
    }

    function aI(DD, CD) {
      if (-1 === CD || CD >= DD.length) return !1;
      const cD = DD.length - 1;
      for (let ID = CD; ID < cD; ID++) DD[ID] = DD[ID + 1];
      return DD.length = cD, !0
    }

    function VI(DD, CD, cD) {
      const ID = ~cD,
        pD = DD.changeTrees;
      for (const iD in pD) {
        const DD = pD[iD],
          cD = DD.visibleViews;
        void 0 !== cD && CD < cD.length && (cD[CD] &= ID);
        const fD = DD.subscribedViews;
        void 0 !== fD && CD < fD.length && (fD[CD] &= ID);
        const bD = DD.tagViews;
        void 0 !== bD && bD.forEach((DD => {
          CD < DD.length && (DD[CD] &= ID)
        }))
      }
    }
    const zI = new FinalizationRegistry((DD => {
      let {
        root: CD,
        id: cD,
        slot: ID,
        bit: pD
      } = DD;
      VI(CD, ID, pD), CD.activeViews.delete(cD);
      for (const iD of CD.streamTrees) iD._dropView(cD);
      CD.releaseViewId(cD)
    }));

    function jI(DD) {
      if (void 0 === DD) return "undefined";
      if (null === DD) return "null";
      const CD = typeof DD;
      return "string" === CD ? JSON.stringify(DD.length > 30 ? `${DD.slice(0,30)}\u2026` : DD) : "object" !== CD && "function" !== CD ? `${CD} ${String(DD)}` : Array.isArray(DD) ? `Array(${DD.length})` : DD.constructor?.name ?? "Object"
    }
    class lI {
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
        void 0 === this._root && (this._root = DD, this.id = DD.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), DD.registerView(this), zI.register(this, {
          root: DD,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), VI(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), zI.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(DD) {
        const CD = DD.visibleViews,
          cD = this._slot;
        return void 0 !== CD && cD < CD.length && 0 !== (CD[cD] & this._bit)
      }
      markVisible(DD) {
        const CD = this._slot;
        let cD = DD.visibleViews;
        for (void 0 === cD && (cD = DD.visibleViews = []); cD.length <= CD;) cD.push(0);
        cD[CD] |= this._bit
      }
      unmarkVisible(DD) {
        const CD = DD.visibleViews;
        if (void 0 === CD) return;
        const cD = this._slot;
        cD < CD.length && (CD[cD] &= ~this._bit)
      }
      isSubscribed(DD) {
        const CD = DD.subscribedViews,
          cD = this._slot;
        return void 0 !== CD && cD < CD.length && 0 !== (CD[cD] & this._bit)
      }
      _setSubscribed(DD) {
        const CD = this._slot;
        let cD = DD.subscribedViews;
        for (void 0 === cD && (cD = DD.subscribedViews = []); cD.length <= CD;) cD.push(0);
        cD[CD] |= this._bit
      }
      _clearSubscribed(DD) {
        const CD = DD.subscribedViews;
        if (void 0 === CD) return;
        const cD = this._slot;
        cD < CD.length && (CD[cD] &= ~this._bit)
      }
      hasTagOnTree(DD, CD) {
        const cD = DD.tagViews;
        if (void 0 === cD) return !1;
        const ID = this._slot,
          pD = this._bit;
        for (let iD = CD; 0 !== iD; iD &= iD - 1) {
          const DD = cD.get(iD & -iD);
          if (void 0 !== DD && ID < DD.length && 0 !== (DD[ID] & pD)) return !0
        }
        return !1
      }
      addTag(DD, CD) {
        if (CD === tI) return;
        let cD = DD.tagViews;
        void 0 === cD && (cD = DD.tagViews = new Map);
        const ID = this._slot,
          pD = this._bit;
        for (let iD = CD; iD > 0; iD &= iD - 1) {
          const DD = iD & -iD;
          let CD = cD.get(DD);
          for (void 0 === CD && (CD = [], cD.set(DD, CD)); CD.length <= ID;) CD.push(0);
          CD[ID] |= pD
        }
      }
      removeTag(DD, CD) {
        if (CD === tI) return;
        const cD = DD.tagViews;
        if (void 0 === cD) return;
        const ID = this._slot,
          pD = ~this._bit;
        for (let iD = CD; iD > 0; iD &= iD - 1) {
          const DD = cD.get(iD & -iD);
          void 0 !== DD && ID < DD.length && (DD[ID] &= pD)
        }
      }
      removeAllTagsOnTree(DD) {
        const CD = DD.tagViews;
        if (void 0 === CD) return;
        const cD = this._slot,
          ID = ~this._bit;
        CD.forEach((DD => {
          cD < DD.length && (DD[cD] &= ID)
        }))
      }
      add(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tI,
          cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(DD, CD, cD, !1)
      }
      _addImmediate(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tI;
        this._add(DD, CD, !0, !0)
      }
      _add(DD, CD, cD, ID) {
        const iD = DD?.[ZD];
        if (!iD) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${jI(DD)}`), !1;
        const fD = iD.parent;
        if (!fD && 0 !== DD[bD]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${iD.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== iD.root && this._bindRoot(iD.root);
        const QD = fD?.[ZD];
        if (!ID && QD?.isStreamCollection) return aC(fD, this.id, iD.parentIndex), !0;
        const wD = DD.constructor[Symbol.metadata],
          SD = this.isVisible(iD);
        if (!this.iterable || !cD || SD && -1 !== this.items.indexOf(DD) || this.items.push(DD), this.markVisible(iD), cD && fD && this.addParentOf(iD, CD), !ID && iD.isStreamCollection) return !0;
        if (CD === tI && iD.isNew) return this._markSubtreeVisible(iD, CD), !1;
        let BD = this.changes.get(DD[bD]);
        void 0 === BD && (BD = new Map, this.changes.set(DD[bD], BD));
        let yD = !1;
        const MD = iD.encDescriptor.tags;
        if (iD.forEachChild(((DD, cD) => {
            const ID = MD[cD];
            if (void 0 !== ID) {
              if (!(ID === tI || CD !== tI && 0 !== (ID & CD))) return
            }
            this.add(DD.ref, CD, !1) && (yD = !0)
          })), CD !== tI) {
          this.addTag(iD, CD);
          const DD = wD?.[JD];
          if (void 0 !== DD)
            for (let cD = CD; cD > 0; cD &= cD - 1) DD[cD & -cD]?.forEach((DD => {
              iD.getChange(DD) !== pD.DELETE && BD.set(DD, pD.ADD)
            }))
        }
        if ((CD === tI || !SD) && (!iD.isNew || yD))
          if (iD.isArray && "string" !== typeof iD.refTarget[oD]) iD.refTarget.items.length > 0 && (BD.set(-1, pD.ADD), yD = !0);
          else {
            const DD = iD.encDescriptor.tags;
            iD.forEachLive((cD => {
              const ID = DD[cD];
              (void 0 === ID || ID === tI || CD !== tI && 0 !== (ID & CD)) && (BD.set(cD, pD.ADD), yD = !0)
            }))
          } return yD
      }
      _markSubtreeVisible(DD, CD) {
        const cD = DD.encDescriptor.tags;
        DD.forEachChild(((DD, ID) => {
          const pD = cD[ID];
          if (void 0 !== pD) {
            if (!(pD === tI || CD !== tI && 0 !== (pD & CD))) return
          }
          DD.isNew ? (this.markVisible(DD), this._markSubtreeVisible(DD, CD)) : this._add(DD.ref, CD, !1, !1)
        }))
      }
      addParentOf(DD, CD) {
        const cD = DD.parent[ZD],
          ID = DD.parentIndex;
        this.isVisible(cD) || this.markVisible(cD);
        const iD = cD.parent?.[ZD];
        if (iD && this.addParentOf(cD, CD), cD.hasFilteredFields && cD.getChange(ID) !== pD.DELETE) {
          let iD = this.changes.get(cD.ref[bD]);
          void 0 === iD && (iD = new Map, this.changes.set(cD.ref[bD], iD));
          const fD = cD.encDescriptor.tags[ID];
          void 0 !== fD && fD !== tI && 0 !== (fD & CD) && this.addTag(cD, CD), iD.set(cD.isArray ? DD : ID, pD.ADD)
        }
      }
      _touchAncestorsOf(DD) {
        let CD = DD.parent?.[ZD];
        if (void 0 === CD) return;
        const cD = [];
        for (; void 0 !== CD;) {
          if (CD.hasFilteredFields) {
            const DD = CD.ref[bD];
            if (this.changes.has(DD)) break;
            cD.push(CD)
          }
          CD = CD.parent?.[ZD]
        }
        for (let ID = cD.length - 1; ID >= 0; ID--) this.changes.set(cD[ID].ref[bD], new Map)
      }
      remove(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tI,
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = DD?.[ZD];
        if (!ID) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${jI(DD)}`), this;
        const iD = ID.parent?.[ZD];
        if (iD?.isStreamCollection) return this.unmarkVisible(ID), this.iterable && !cD && aI(this.items, this.items.indexOf(DD)),
          function(DD, CD, cD, ID, iD) {
            const fD = DD._stream;
            if (void 0 === fD) return !1;
            const bD = fD.pendingByView.get(CD);
            if (bD?.has(ID)) return bD.delete(ID), !1;
            const QD = fD.sentByView.get(CD);
            if (QD?.has(ID)) {
              QD.delete(ID);
              let DD = iD.get(cD);
              return void 0 === DD && (DD = new Map, iD.set(cD, DD)), DD.set(ID, pD.DELETE), !0
            }
          }(ID.parent, this.id, ID.parent[bD], ID.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(ID), this;
        if (ID.isStreamCollection) {
          this.unmarkVisible(ID), this.iterable && !cD && aI(this.items, this.items.indexOf(DD));
          const CD = ID.ref,
            iD = CD._stream;
          if (void 0 !== iD) {
            iD.pendingByView.get(this.id)?.clear();
            const DD = iD.sentByView.get(this.id);
            if (void 0 !== DD && DD.size > 0) {
              const cD = CD[bD];
              let ID = this.changes.get(cD);
              void 0 === ID && (ID = new Map, this.changes.set(cD, ID));
              for (const CD of DD) ID.set(CD, pD.DELETE);
              DD.clear()
            }
          }
          return this
        }
        this.unmarkVisible(ID), this.iterable && !cD && aI(this.items, this.items.indexOf(DD));
        const fD = ID.ref,
          QD = fD.constructor[Symbol.metadata],
          wD = fD[bD];
        this._touchAncestorsOf(ID);
        let SD = this.changes.get(wD);
        if (void 0 === SD && (SD = new Map, this.changes.set(wD, SD)), CD === tI) {
          const DD = ID.parent;
          if (DD && !eC.isValidInstance(DD) && ID.isFiltered) {
            const CD = iD.isArray ? ID : ID.parentIndex,
              cD = DD[bD];
            let fD = this.changes.get(cD);
            void 0 === fD ? (fD = new Map, this.changes.set(cD, fD)) : fD.get(CD) === pD.ADD && this._dropPendingEntries(ID), fD.set(CD, pD.DELETE), this._recursiveDeleteVisibleChangeTree(ID)
          } else QD?.[qD]?.forEach((DD => this._removeViewField(ID, SD, DD)))
        } else {
          const DD = QD?.[JD];
          if (void 0 !== DD)
            for (let cD = CD; cD > 0; cD &= cD - 1) DD[cD & -cD]?.forEach((DD => this._removeViewField(ID, SD, DD)))
        }
        return void 0 === CD ? this.removeAllTagsOnTree(ID) : this.removeTag(ID, CD), this
      }
      has(DD) {
        return this.isVisible(DD[ZD])
      }
      hasTag(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tI;
        return this.hasTagOnTree(DD[ZD], CD)
      }
      subscribe(DD, CD) {
        const cD = DD?.[ZD];
        if (!cD) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${jI(DD)}`), this;
        if (void 0 === this._root && void 0 !== cD.root && this._bindRoot(cD.root), void 0 !== CD)
          if (cD.isStreamCollection) {
            const cD = UC(DD);
            null === CD ? cD.priorityByView?.delete(this.id) : (cD.priorityByView ??= new Map).set(this.id, CD)
          } else {
            const CD = DD?.constructor?.name ?? "collection",
              ID = cD.parent;
            if (void 0 === ID) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${CD} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const DD = ID?.constructor?.[Symbol.metadata]?.[cD.parentIndex]?.name,
                pD = DD ? `${ID.constructor.name}#${DD}` : CD;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${pD} is a ${CD}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(cD)) return this;
        const ID = void 0 !== cD.parent && !this.isVisible(cD);
        if (ID ? (this.addParentOf(cD, tI), this._add(DD, tI, !1, !1)) : this.markVisible(cD), this._setSubscribed(cD), cD.isStreamCollection) {
          const CD = DD;
          cD.forEachChild(((DD, cD) => {
            aC(CD, this.id, cD)
          }))
        } else ID || cD.forEachChild((DD => {
          this.markVisible(DD)
        }));
        return this
      }
      unsubscribe(DD) {
        const CD = DD?.[ZD];
        if (!CD) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${jI(DD)}`), this;
        if (!this.isSubscribed(CD)) return this;
        this._clearSubscribed(CD);
        const cD = CD.ref[bD];
        if (CD.isStreamCollection) {
          const CD = DD._stream;
          if (void 0 !== CD) {
            CD.pendingByView.get(this.id)?.clear();
            const DD = CD.sentByView.get(this.id);
            if (void 0 !== DD && DD.size > 0) {
              let CD = this.changes.get(cD);
              void 0 === CD && (CD = new Map, this.changes.set(cD, CD));
              for (const cD of DD) CD.set(cD, pD.DELETE);
              DD.clear()
            }
          }
        } else {
          const DD = CD.isArray;
          let ID = this.changes.get(cD);
          CD.forEachChild(((CD, iD) => {
            void 0 === ID && (ID = new Map, this.changes.set(cD, ID)), ID.set(DD ? CD : iD, pD.DELETE), this.unmarkVisible(CD)
          }))
        }
        return this.unmarkVisible(CD), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let DD = 0, CD = this.items.length; DD < CD; DD++) this.remove(this.items[DD], tI, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(DD) {
        let CD = this.isVisible(DD);
        if (!CD && DD.isVisibilitySharedWithParent)
          if (this.isVisible(DD.parent[ZD])) this.markVisible(DD), CD = !0;
          else
            for (let cD = DD.extraParents; void 0 !== cD; cD = cD.next) {
              const ID = cD.ref[ZD];
              if (ID.isFiltered && this.isVisible(ID)) {
                this.markVisible(DD), CD = !0;
                break
              }
            }
        return CD
      }
      _recursiveDeleteVisibleChangeTree(DD) {
        DD.forEachChild((DD => {
          this.unmarkVisible(DD), this._recursiveDeleteVisibleChangeTree(DD)
        }))
      }
      _dropPendingEntries(DD) {
        this.changes.delete(DD.ref[bD]), DD.forEachChild((DD => this._dropPendingEntries(DD)))
      }
      _removeViewField(DD, CD, cD) {
        const ID = CD.get(cD) === pD.ADD;
        CD.set(cD, pD.DELETE);
        const iD = DD.ref[DD.encDescriptor.names[cD]],
          fD = iD?.[ZD];
        fD && (this.unmarkVisible(fD), this._recursiveDeleteVisibleChangeTree(fD), ID && this._dropPendingEntries(fD))
      }
    }

    function LI(DD) {
      DD.structSwitchEmitted || (DD.shouldEmitSwitch && (DD.buffer[DD.it.offset++] = 255, CC.number(DD.buffer, DD.ref[bD], DD.it)), DD.structSwitchEmitted = !0)
    }

    function TI(DD, CD) {
      kI(DD, CD, pD.ADD)
    }

    function GI(DD, CD) {
      if (CD._fullSyncGen === DD.gen) return;
      CD._fullSyncGen = DD.gen;
      if (!DD.hasView || DD.view.isChangeTreeVisible(CD)) {
        const cD = CD.encDescriptor;
        DD.changeTree = CD, DD.ref = CD.ref, DD.encoder = cD.encoder, DD.filter = cD.filter, DD.metadata = cD.metadata, DD.treeIsFiltered = CD.isFiltered, DD.isSchema = cD.isSchema, DD.filterBitmask = cD.filterBitmask, DD.tags = cD.tags, DD.structSwitchEmitted = !1, DD.shouldEmitSwitch = DD.hasView || DD.it.offset > DD.initialOffset || CD !== DD.rootChangeTree, CD.isArray && CD.collDirty.size > 0 && (CD.flags |= 512), pc(CD, DD, TI)
      }
      vc(CD, DD, RI)
    }

    function RI(DD, CD, cD) {
      GI(DD, CD)
    }

    function kI(DD, CD, cD) {
      if (CD < 0) {
        if (DD.treeIsFiltered !== DD.emitFiltered) return;
        return LI(DD), void(DD.buffer[DD.it.offset++] = 255 & Math.abs(CD))
      }
      if ((DD.isSchema ? DD.treeIsFiltered || (CD < 32 ? 0 !== (DD.filterBitmask & 1 << CD) : void 0 !== DD.tags[CD]) : DD.treeIsFiltered) !== DD.emitFiltered) return;
      const ID = DD.isEncodeAll ? pD.ADD : cD;
      void 0 !== ID && (void 0 === DD.filter || DD.filter(DD.ref, CD, DD.view)) && (LI(DD), DD.encoder(DD.self, DD.buffer, DD.changeTree, CD, ID, DD.it, DD.isEncodeAll, DD.hasView, DD.metadata))
    }

    function dI(DD, CD) {
      const cD = new Uint8Array(DD.length + CD.length);
      return cD.set(DD, 0), cD.set(CD, DD.length), cD
    }
    class YI {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(YI.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(DD, CD) {
        this.context = RC.cache(DD.constructor), this.root = CD ?? new KI(this.context), this.setState(DD)
      }
      setState(DD) {
        this.state = DD, this.state[ZD].setRoot(this.root)
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
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.offset;
        return this._encodeChannel(DD, CD, cD, ID, !1)
      }
      encodeUnreliable() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.offset;
        return this._encodeChannel(DD, CD, cD, ID, !0)
      }
      _encodeChannel(DD, CD, cD, ID, pD) {
        this.root.pendingFilterRefresh.length > 0 && fc(this.root);
        const iD = void 0 !== CD,
          fD = this.state[ZD],
          bD = this._encodeCtx;
        bD.self = this, bD.buffer = cD, bD.it = DD, bD.view = CD, bD.isEncodeAll = !1, bD.hasView = iD, bD.emitFiltered = iD;
        let QD = pD ? this.root.unreliableChanges : this.root.changes;
        for (; QD = QD.next;) {
          const cD = QD.changeTree;
          if (iD && !CD.isChangeTreeVisible(cD)) continue;
          const wD = pD ? cD.unreliableRecorder : cD;
          if (!wD || !wD.has()) continue;
          const SD = cD.encDescriptor;
          bD.changeTree = cD, bD.ref = cD.ref, bD.encoder = SD.encoder, bD.filter = SD.filter, bD.metadata = SD.metadata, bD.treeIsFiltered = cD.isFiltered, bD.isSchema = SD.isSchema, bD.filterBitmask = SD.filterBitmask, bD.tags = SD.tags, bD.structSwitchEmitted = !1, bD.isRootTree = cD === fD, bD.shouldEmitSwitch = iD || DD.offset > ID || !bD.isRootTree, wD.forEachWithCtx(bD, kI)
        }
        return pD || iD || !this._isStreamBroadcastMode || this._emitStreamBroadcast(cD, DD), DD.offset > cD.byteLength ? (cD = this._resizeBuffer(cD, DD.offset), DD.offset = ID, this._encodeChannel(DD, CD, cD, ID, pD)) : cD.subarray(0, DD.offset)
      }
      encodeFullSync(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : DD.offset;
        this.root.pendingFilterRefresh.length > 0 && fc(this.root);
        const iD = void 0 !== ID,
          fD = this.state[ZD],
          bD = this._encodeCtx;
        return bD.self = this, bD.buffer = CD, bD.it = DD, bD.view = ID, bD.isEncodeAll = !0, bD.hasView = iD, bD.emitFiltered = cD, bD.gen = ++this._fullSyncGen, bD.initialOffset = pD, bD.rootChangeTree = fD, GI(bD, fD), DD.offset > CD.byteLength ? (CD = this._resizeBuffer(CD, DD.offset), DD.offset = pD, this.encodeFullSync(DD, CD, cD, ID, pD)) : CD.subarray(0, DD.offset)
      }
      _resizeBuffer(DD, CD) {
        const cD = Math.ceil(CD / YI.BUFFER_SIZE) * YI.BUFFER_SIZE,
          ID = new Uint8Array(cD);
        return ID.set(DD), DD === this.sharedBuffer && (this.sharedBuffer = ID), ID
      }
      encodeAll() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(DD, CD, !1)
      }
      encodeAllView(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const pD = cD.offset;
        return ID = this.encodeFullSync(cD, ID, !0, DD, pD), dI(ID.subarray(0, CD), ID.subarray(pD, cD.offset))
      }
      ensureCapacity(DD, CD) {
        if (CD + YI.BUFFER_SIZE <= DD.byteLength) return DD;
        const cD = Math.ceil((CD + YI.BUFFER_SIZE) / YI.BUFFER_SIZE) * YI.BUFFER_SIZE,
          ID = new Uint8Array(cD);
        return ID.set(DD.subarray(0, CD)), DD === this.sharedBuffer && (this.sharedBuffer = ID), ID
      }
      encodeView(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          iD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const fD = cD.offset;
        this._emitStreamPriority(DD);
        for (const QD of DD.changes.keys()) {
          const CD = DD.changes.get(QD),
            iD = this.root.changeTrees[QD];
          if (void 0 === iD) {
            DD.changes.delete(QD);
            continue
          }
          if (0 === CD.size) continue;
          const fD = iD.encDescriptor,
            wD = fD.encoder,
            SD = fD.metadata,
            BD = iD.ref,
            MD = iD.refTarget;
          ID = this.ensureCapacity(ID, cD.offset), ID[cD.offset++] = 255, CC.number(ID, BD[bD], cD);
          for (const [QD, tD] of CD) {
            let CD;
            if (-1 === QD) {
              const DD = MD.tmpItems,
                CD = MD.deletedIndexes;
              for (let fD = 0; fD < DD.length; fD++) void 0 !== DD[fD] && !0 !== CD[fD] && wD(this, ID, iD, fD, pD.ADD, cD, !1, !0, SD);
              continue
            }
            if ("number" === typeof QD) CD = QD;
            else {
              const cD = QD.indexInParent(BD);
              if (void 0 === cD) continue;
              if (CD = cD, tD === pD.ADD && iD.getChange(CD) === pD.DELETE) {
                DD.changes.delete(QD.ref[bD]);
                continue
              }
            }
            wD(this, ID, iD, CD, void 0 !== MD[yD](CD) && tD || pD.DELETE, cD, !1, !0, SD)
          }
        }
        return DD.changes.clear(), ID = this.encode(cD, DD, ID), iD ? dI(ID.subarray(0, CD), ID.subarray(fD, cD.offset)) : ID.subarray(fD, cD.offset)
      }
      encodeUnreliableView(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const pD = cD.offset;
        return ID = this.encodeUnreliable(cD, DD, ID, pD), dI(ID.subarray(0, CD), ID.subarray(pD, cD.offset))
      }
      _emitStreamBroadcast(DD, CD) {
        const cD = this.root.streamTrees;
        for (const ID of cD) {
          const cD = ID,
            iD = cD[ZD],
            fD = cD[bD];
          if (void 0 === fD) continue;
          const QD = cD._stream,
            wD = QD.broadcastDeletes,
            SD = QD.broadcastPending,
            BD = QD.sentBroadcast,
            MD = wD.size > 0,
            tD = SD.size > 0,
            oD = iD.encDescriptor,
            vD = oD.encoder,
            ND = oD.metadata;
          if (MD || tD) {
            if (DD[CD.offset++] = 255, CC.number(DD, fD, CD), MD) {
              for (const cD of wD) vD(this, DD, iD, cD, pD.DELETE, CD, !1, !1, ND);
              wD.clear()
            }
            const ID = QD.maxPerTick,
              tD = [];
            let oD = 0;
            const gD = [];
            for (const fD of SD) {
              if (oD >= ID) break;
              const bD = cD[yD](fD);
              void 0 !== bD ? (vD(this, DD, iD, fD, pD.ADD, CD, !1, !1, ND), BD.add(fD), tD.push(bD), gD.push(fD), oD++) : gD.push(fD)
            }
            for (const DD of gD) SD.delete(DD);
            for (const cD of tD) {
              const ID = cD[ZD];
              if (void 0 === ID) continue;
              const iD = cD[bD];
              if (void 0 === iD) continue;
              DD[CD.offset++] = 255, CC.number(DD, iD, CD);
              const fD = ID.encDescriptor,
                QD = fD.encoder,
                wD = fD.metadata;
              ID.forEachLive((cD => {
                eC.hasUnreliableAtIndex(wD, cD) || QD(this, DD, ID, cD, pD.ADD, CD, !1, !1, wD)
              }))
            }
          }
          for (const ID of BD) {
            const pD = cD[yD](ID);
            if (void 0 === pD) continue;
            const iD = pD[ZD];
            if (void 0 === iD || !iD.has()) continue;
            const fD = pD[bD];
            if (void 0 === fD) continue;
            DD[CD.offset++] = 255, CC.number(DD, fD, CD);
            const QD = iD.encDescriptor,
              wD = QD.encoder,
              SD = QD.metadata;
            iD.forEach(((cD, ID) => {
              cD < 0 || eC.hasUnreliableAtIndex(SD, cD) || wD(this, DD, iD, cD, ID, CD, !1, !1, SD)
            }))
          }
        }
      }
      _emitStreamPriority(DD) {
        const CD = this.root.streamTrees;
        if (0 === CD.size) return;
        const cD = DD.id;
        for (const ID of CD) {
          const CD = ID,
            iD = CD._stream,
            fD = iD.pendingByView.get(cD);
          if (void 0 === fD || 0 === fD.size) continue;
          const QD = iD.priorityByView?.get(cD),
            wD = void 0 !== QD,
            SD = iD.priority,
            BD = iD.maxPerTick,
            MD = [],
            tD = [];
          if (wD || void 0 !== SD) {
            const cD = [],
              ID = [];
            let pD = 0;
            for (const iD of fD) {
              const fD = CD[yD](iD);
              if (void 0 === fD) {
                tD.push(iD);
                continue
              }
              const bD = wD ? QD(fD) : SD(DD, fD);
              if (pD < BD) {
                let DD = pD++;
                for (; DD > 0 && ID[DD - 1] < bD;) ID[DD] = ID[DD - 1], cD[DD] = cD[DD - 1], DD--;
                ID[DD] = bD, cD[DD] = iD
              } else if (bD > ID[BD - 1]) {
                let DD = BD - 1;
                for (; DD > 0 && ID[DD - 1] < bD;) ID[DD] = ID[DD - 1], cD[DD] = cD[DD - 1], DD--;
                ID[DD] = bD, cD[DD] = iD
              }
            }
            for (let DD = 0; DD < pD; DD++) MD.push(cD[DD])
          } else
            for (const DD of fD) {
              if (MD.length >= BD) break;
              MD.push(DD)
            }
          for (const DD of tD) fD.delete(DD);
          const oD = MD.length;
          let vD = iD.sentByView.get(cD);
          void 0 === vD && (vD = new Set, iD.sentByView.set(cD, vD));
          for (let cD = 0; cD < oD; cD++) {
            const ID = MD[cD],
              iD = CD[yD](ID);
            if (void 0 === iD) {
              fD.delete(ID);
              continue
            }
            DD._addImmediate(iD);
            const QD = iD[ZD];
            if (void 0 !== QD) {
              const CD = iD[bD];
              let cD = DD.changes.get(CD);
              void 0 === cD && (cD = new Map, DD.changes.set(CD, cD));
              const ID = QD.metadata;
              QD.forEachLive((DD => {
                eC.hasUnreliableAtIndex(ID, DD) || cD.set(DD, pD.ADD)
              }))
            }
            fD.delete(ID), vD.add(ID)
          }
        }
      }
      discardChanges() {
        const DD = this.root.changes;
        let CD = DD.next;
        const cD = this.root;
        for (; CD;) {
          const DD = CD.next;
          CD.changeTree.endEncode(), cD.releaseNode(CD), CD = DD
        }
        DD.next = void 0, DD.tail = void 0
      }
      discardUnreliableChanges() {
        const DD = this.root.unreliableChanges;
        let CD = DD.next;
        const cD = this.root;
        for (; CD;) {
          const DD = CD.next;
          CD.changeTree.endEncodeUnreliable(), cD.releaseNode(CD), CD = DD
        }
        DD.next = void 0, DD.tail = void 0
      }
      tryEncodeTypeId(DD, CD, cD, ID) {
        const pD = this.context.getTypeId(CD),
          iD = this.context.getTypeId(cD);
        void 0 !== iD ? pD !== iD && (DD[ID.offset++] = 213, CC.number(DD, iD, ID)) : console.warn(`@colyseus/schema WARNING: Class "${cD.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const CD = 0 === DD.activeViews.size;
        for (const cD of DD.streamTrees)
          if (CD ? KC(cD) : JC(cD, DD)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class WI extends Error {
      constructor(DD) {
        super(DD), this.name = "DecodingWarning"
      }
    }
    const sI = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class EI {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(DD, CD), void 0 === CD[bD] ? (sI.value = DD, Object.defineProperty(CD, bD, sI)) : CD[bD] !== DD && (CD[bD] = DD), cD && (this.refCount[DD] = (this.refCount[DD] || 0) + 1), this.deletedRefs.has(DD) && this.deletedRefs.delete(DD)
      }
      removeRef(DD) {
        const CD = this.refCount[DD];
        if (void 0 !== CD)
          if (0 !== CD)(this.refCount[DD] = CD - 1) <= 0 && this.deletedRefs.add(DD);
          else try {
            const CD = this.refs.get(DD);
            throw new WI(`trying to remove refId '${DD}' with 0 refCount (${CD.constructor.name}: ${JSON.stringify(CD)})`)
          } catch (ip) {
            console.warn(ip)
          } else try {
            throw new WI("trying to remove refId that doesn't exist: " + DD)
          } catch (ip) {
            console.warn(ip)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((DD => {
          if (this.refCount[DD] > 0) return;
          const CD = this.refs.get(DD),
            cD = CD.constructor[Symbol.metadata];
          if (null != cD)
            for (const ID in cD) {
              const DD = CD[cD[ID].name];
              if ("object" === typeof DD && DD) {
                const CD = DD[bD];
                void 0 === CD || this.deletedRefs.has(CD) || this.removeRef(CD)
              }
            } else "function" === typeof CD[oD] && Array.from(CD.values()).forEach((DD => {
              const CD = DD[bD];
              void 0 === CD || this.deletedRefs.has(CD) || this.removeRef(CD)
            }));
          this.refs.delete(DD), delete this.refCount[DD], delete this.callbacks[DD]
        })), this.deletedRefs.clear()
      }
      addCallback(DD, CD, cD) {
        if (void 0 === DD) {
          const DD = "number" === typeof CD ? pD[CD] : CD;
          throw new Error(`Can't addCallback on '${DD}' (refId is undefined)`)
        }
        return this.callbacks[DD] || (this.callbacks[DD] = {}), this.callbacks[DD][CD] || (this.callbacks[DD][CD] = []), this.callbacks[DD][CD].push(cD), () => this.removeCallback(DD, CD, cD)
      }
      removeCallback(DD, CD, cD) {
        const ID = this.callbacks?.[DD]?.[CD]?.indexOf(cD);
        void 0 !== ID && -1 !== ID && aI(this.callbacks[DD][CD], ID)
      }
    }
    class eI {
      context;
      state;
      root;
      currentRefId = 0;
      mq;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(DD, CD) {
        this.setState(DD), this.context = CD || new RC(DD.constructor)
      }
      setState(DD) {
        this.state = DD, this.root = new EI, this.root.addRef(0, DD)
      }
      decode(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const pD = void 0 !== this.mq ? [] : null,
          iD = this.root,
          fD = DD.byteLength;
        let bD = cD.constructor[SD];
        for (this.currentRefId = 0; CD.offset < fD;) {
          if (DD[CD.offset] == ID) {
            CD.offset++, cD[XD]?.();
            const ID = gC.number(DD, CD),
              pD = iD.refs.get(ID);
            pD ? (cD = pD, bD = cD.constructor[SD], this.currentRefId = ID) : (console.error(`"refId" not found: ${ID}`, {
              previousRef: cD,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(DD, CD, fD));
            continue
          } - 1 !== bD(this, DD, CD, cD, pD) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(DD, CD, fD))
        }
        return cD[XD]?.(), null !== this.resyncVisited && function(DD, CD) {
          DD.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Rc(DD, DD.state, new Set, CD)
        }(this, pD), null !== pD && this.mq?.(pD), iD.garbageCollectDeletedRefs(), pD
      }
      decodeResync(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(DD, CD)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(DD, CD, cD) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const pD = {
          offset: CD.offset
        };
        for (; CD.offset < cD && (DD[CD.offset] !== ID || (pD.offset = CD.offset + 1, !this.root.refs.has(gC.number(DD, pD))));) CD.offset++
      }
      getInstanceType(DD, CD, cD) {
        let ID;
        if (213 === DD[CD.offset]) {
          CD.offset++;
          const cD = gC.number(DD, CD);
          ID = this.context.get(cD)
        }
        return ID || cD
      }
      createInstanceOfType(DD) {
        return DD.initializeForDecoder()
      }
      removeChildRefs(DD, CD) {
        const cD = "string" !== typeof DD[oD],
          ID = DD[bD];
        DD.forEach(((iD, fD) => {
          CD?.push({
            ref: DD,
            refId: ID,
            op: pD.DELETE,
            field: fD,
            value: void 0,
            previousValue: iD
          }), cD && this.root.removeRef(iD[bD])
        }))
      }
    }
    const uI = UI({
        min: MI.float64(),
        max: MI.float64(),
        bits: MI.uint8(),
        mode: MI.uint8()
      }, "QuantizedDescriptor"),
      hI = UI({
        name: MI.string(),
        type: MI.string(),
        referencedType: MI.number(),
        childPrimitive: MI.string(),
        quantized: MI.ref(uI).optional()
      }, "ReflectionField"),
      rI = UI({
        id: MI.number(),
        extendsId: MI.number(),
        fields: MI.array(hI)
      }, "ReflectionType"),
      AI = UI({
        types: MI.array(rI),
        rootType: MI.number()
      }, "Reflection");

    function FI(DD) {
      const CD = DD.root,
        cD = CD.callbacks,
        ID = new WeakMap;
      let iD;

      function fD(DD, cD) {
        let wD = cD.instance?.constructor[Symbol.metadata] || DD,
          SD = cD.instance && "function" === typeof cD.instance.forEach || DD && !qI.is(DD);
        if (wD && !SD) {
          const DD = function(DD, pD, fD, QD) {
            return QD && void 0 !== cD.instance[pD] && !ID.has(iD) && fD(cD.instance[pD], void 0), CD.addCallback(DD[bD], pD, fD)
          };
          return new Proxy({
            listen: function(CD, pD) {
              let fD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (cD.instance) return DD(cD.instance, CD, pD, fD);
              {
                let bD = () => {};
                return cD.onInstanceAvailable(((cD, QD) => {
                  bD = DD(cD, CD, pD, fD && QD && !ID.has(iD))
                })), () => bD()
              }
            },
            onChange: function(DD) {
              return CD.addCallback(cD.instance[bD], pD.REPLACE, DD)
            },
            bindTo: function(DD, ID) {
              return ID || (ID = Object.keys(wD).map((DD => wD[DD].name))), CD.addCallback(cD.instance[bD], pD.REPLACE, (() => {
                ID.forEach((CD => DD[CD] = cD.instance[CD]))
              }))
            }
          }, {
            get(DD, CD) {
              const ID = wD[wD[CD]];
              if (ID) {
                const DD = cD.instance?.[CD],
                  pD = ID => {
                    const pD = QD(cD.instance).listen(CD, ((DD, CD) => {
                      ID(DD, !1), pD?.()
                    }), !1);
                    void 0 !== DD?.[bD] && ID(DD, !0)
                  };
                return fD(ID.type, {
                  instance: void 0 !== DD?.[bD] && DD,
                  parentInstance: cD.instance,
                  onInstanceAvailable: pD
                })
              }
              return DD[CD]
            },
            has: (DD, CD) => void 0 !== wD[CD],
            set(DD, CD, cD) {
              throw new Error("not allowed")
            },
            deleteProperty(DD, CD) {
              throw new Error("not allowed")
            }
          })
        } {
          const DD = function(DD, cD, fD) {
              return fD && DD.forEach(((DD, CD) => cD(DD, CD))), CD.addCallback(DD[bD], pD.ADD, ((DD, CD) => {
                ID.set(cD, !0), iD = cD, cD(DD, CD), ID.delete(cD), iD = void 0
              }))
            },
            fD = function(DD, cD) {
              return CD.addCallback(DD[bD], pD.DELETE, cD)
            },
            QD = function(DD, cD) {
              return CD.addCallback(DD[bD], pD.REPLACE, cD)
            };
          return new Proxy({
            Jm: function(CD) {
              let pD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (cD.instance) return DD(cD.instance, CD, pD && !ID.has(iD));
              if (cD.onInstanceAvailable) {
                let fD = () => {};
                return cD.onInstanceAvailable(((cD, bD) => {
                  fD = DD(cD, CD, pD && bD && !ID.has(iD))
                })), () => fD()
              }
            },
            Zx: function(DD) {
              if (cD.instance) return fD(cD.instance, DD);
              if (cD.onInstanceAvailable) {
                let CD = () => {};
                return cD.onInstanceAvailable((cD => {
                  CD = fD(cD, DD)
                })), () => CD()
              }
            },
            onChange: function(DD) {
              if (cD.instance) return QD(cD.instance, DD);
              if (cD.onInstanceAvailable) {
                let CD = () => {};
                return cD.onInstanceAvailable((cD => {
                  CD = QD(cD, DD)
                })), () => CD()
              }
            }
          }, {
            get(DD, CD) {
              if (!DD[CD]) throw new Error(`Can't access '${CD}' through callback proxy. access the instance directly.`);
              return DD[CD]
            },
            has: (DD, CD) => void 0 !== DD[CD],
            set(DD, CD, cD) {
              throw new Error("not allowed")
            },
            deleteProperty(DD, CD) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function QD(DD) {
        return fD(void 0, {
          instance: DD
        })
      }
      return DD.mq = function(DD) {
        const CD = new Set;
        for (let ID = 0, iD = DD.length; ID < iD; ID++) {
          const iD = DD[ID],
            fD = iD.refId,
            QD = iD.ref,
            wD = cD[fD];
          if (wD) {
            if ((iD.op & pD.DELETE) === pD.DELETE && qI.isSchema(iD.previousValue)) {
              const DD = cD[iD.previousValue[bD]]?.[pD.DELETE];
              for (let CD = DD?.length - 1; CD >= 0; CD--) DD[CD]()
            }
            if (qI.isSchema(QD)) {
              if (!CD.has(fD)) {
                const DD = wD?.[pD.REPLACE];
                for (let CD = DD?.length - 1; CD >= 0; CD--) DD[CD]()
              }
              if (wD.hasOwnProperty(iD.field)) {
                const DD = wD[iD.field];
                for (let CD = DD?.length - 1; CD >= 0; CD--) DD[CD](iD.value, iD.previousValue)
              }
            } else {
              if ((iD.op & pD.DELETE) === pD.DELETE) {
                if (void 0 !== iD.previousValue) {
                  const DD = wD[pD.DELETE];
                  for (let CD = DD?.length - 1; CD >= 0; CD--) DD[CD](iD.previousValue, iD.dynamicIndex ?? iD.field)
                }
                if ((iD.op & pD.ADD) === pD.ADD) {
                  const DD = wD[pD.ADD];
                  for (let CD = DD?.length - 1; CD >= 0; CD--) DD[CD](iD.value, iD.dynamicIndex ?? iD.field)
                }
              } else if ((iD.op & pD.ADD) === pD.ADD && iD.previousValue !== iD.value) {
                const DD = wD[pD.ADD];
                for (let CD = DD?.length - 1; CD >= 0; CD--) DD[CD](iD.value, iD.dynamicIndex ?? iD.field)
              }
              if (iD.value !== iD.previousValue && (void 0 !== iD.value || void 0 !== iD.previousValue)) {
                const DD = wD[pD.REPLACE];
                for (let CD = DD?.length - 1; CD >= 0; CD--) DD[CD](iD.value, iD.dynamicIndex ?? iD.field)
              }
            }
            CD.add(fD)
          }
        }
      }, QD
    }

    function Dp(DD, CD) {
      DD.mq = CD
    }
    AI.encode = function(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const cD = DD.context,
        ID = new AI,
        pD = new YI(ID),
        iD = cD.schemas.get(DD.state.constructor);
      iD > 0 && (ID.rootType = iD);
      const fD = new Set,
        bD = {},
        QD = DD => {
          if (void 0 === DD.extendsId || fD.has(DD.extendsId)) {
            fD.add(DD.id), ID.types.push(DD);
            const CD = bD[DD.id];
            void 0 !== CD && (delete bD[DD.id], CD.forEach((DD => QD(DD))))
          } else void 0 === bD[DD.extendsId] && (bD[DD.extendsId] = []), bD[DD.extendsId].push(DD)
        };
      cD.schemas.forEach(((DD, CD) => {
        const ID = new rI;
        ID.id = Number(DD);
        const pD = Object.getPrototypeOf(CD);
        pD !== qI && (ID.extendsId = cD.schemas.get(pD));
        const iD = CD[Symbol.metadata];
        if (iD !== pD[Symbol.metadata]) {
          const DD = iD[UD] ?? -1;
          for (let CD = 0; CD <= DD; CD++) {
            const DD = iD[CD];
            if (void 0 === DD) continue;
            const pD = DD.name;
            if (!Object.prototype.hasOwnProperty.call(iD, pD)) continue;
            const fD = new hI;
            let bD;
            if (fD.name = pD, "string" === typeof DD.type) bD = DD.type;
            else if (lC(DD.type)) {
              const CD = DD.type.quantized;
              bD = "quantized";
              const cD = new uI;
              cD.min = CD.min, cD.max = CD.max, cD.bits = CD.bits, cD.mode = CD.wrap ? 1 : 0, fD.quantized = cD
            } else {
              let CD;
              qI.is(DD.type) ? (bD = "ref", CD = DD.type) : (bD = Object.keys(DD.type)[0], "string" === typeof DD.type[bD] ? fD.childPrimitive = DD.type[bD] : CD = DD.type[bD]), fD.referencedType = CD ? cD.getTypeId(CD) : -1
            }
            fD.type = bD, ID.fields.push(fD)
          }
        }
        QD(ID)
      }));
      for (const wD in bD) bD[wD].forEach((DD => ID.types.push(DD)));
      return pD.encodeAll(CD).slice(0, CD.offset)
    }, AI.decode = function(DD, CD) {
      const cD = new AI;
      new eI(cD).decode(DD, CD);
      const ID = new RC;
      cD.types.forEach((DD => {
        const CD = ID.get(DD.extendsId) ?? qI,
          cD = class extends CD {};
        RC.register(cD), ID.add(cD, DD.id)
      }), {});
      cD.types.forEach((DD => {
        const CD = ID.get(DD.id),
          pD = eC.initialize(CD),
          iD = [];
        let fD = DD;
        do {
          iD.push(fD), fD = cD.types.find((DD => DD.id === fD.extendsId))
        } while (fD);
        let bD = 0;
        iD.reverse().forEach((DD => {
          ((DD, CD, cD) => {
            CD.fields.forEach(((CD, pD) => {
              const iD = cD + pD;
              if (void 0 !== CD.quantized) {
                const cD = CD.quantized;
                eC.addField(DD, iD, CD.name, {
                  quantized: jC({
                    min: cD.min,
                    max: cD.max,
                    bits: cD.bits,
                    mode: 1 === cD.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== CD.referencedType) {
                const cD = CD.type,
                  pD = ID.get(CD.referencedType) ?? CD.childPrimitive;
                "ref" === cD ? eC.addField(DD, iD, CD.name, pD) : eC.addField(DD, iD, CD.name, {
                  [cD]: pD
                })
              } else eC.addField(DD, iD, CD.name, CD.type)
            }))
          })(pD, DD, bD), bD += DD.fields.length
        }))
      }));
      const pD = new(ID.get(cD.rootType || 0));
      return new eI(pD, ID)
    }, AI.makeEncodable = function(DD) {
      const CD = DD[Symbol.metadata];
      if (!CD) return DD;
      const cD = CD[UD];
      if (void 0 === cD) return DD;
      for (let ID = 0; ID <= cD; ID++) {
        const cD = CD[ID];
        cD && eC.defineField(DD, CD, ID, cD.name, cD.type)
      }
      return Object.prototype.hasOwnProperty.call(DD, PD) && delete DD[PD], DD
    };
    class Cp {
      Pt;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(DD) {
        this.Pt = DD, this.Pt.mq = this.mq.bind(this)
      }
      get callbacks() {
        return this.Pt.root.callbacks
      }
      get state() {
        return this.Pt.state
      }
      addCallback(DD, CD, cD) {
        return this.Pt.root.addCallback(DD, CD, cD)
      }
      addCallbackOrWaitCollectionAvailable(DD, CD, cD, ID) {
        let iD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fD = () => {};
        const QD = () => fD(),
          wD = DD[CD];
        if (wD && void 0 !== wD[bD]) return iD = iD && !1 === this.isTriggering, cD === pD.ADD && iD && wD.forEach(((DD, CD) => {
          ID(DD, CD)
        })), this.addCallback(wD[bD], cD, ID);
        {
          let pD;
          return pD = this.addCallback(DD[bD], CD, ((DD, CD) => {
            null !== DD && void 0 !== DD && (pD(), fD = this.addCallback(DD[bD], cD, ID))
          })), fD = pD, QD
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(DD, CD, cD) {
        let ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        ID = ID && !1 === this.isTriggering;
        const pD = DD[CD];
        return ID && null !== pD && void 0 !== pD && cD(pD, void 0), this.addCallback(DD[bD], CD, cD)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const DD = arguments.length <= 0 ? void 0 : arguments[0],
            CD = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(DD[bD], pD.REPLACE, CD)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], pD.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], pD.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Jm() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], pD.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], pD.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      Zx() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], pD.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], pD.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(DD, CD, cD) {
        let ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const iD = DD.constructor[Symbol.metadata];
        cD || (cD = Object.keys(iD).filter((DD => !isNaN(Number(DD)))).map((DD => iD[DD].name)));
        const fD = () => {
          for (const ID of cD) {
            const cD = DD[ID];
            void 0 !== cD && (CD[ID] = cD)
          }
        };
        return ID && fD(), this.addCallback(DD[bD], pD.REPLACE, fD)
      }
      mq(DD) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let CD = 0, cD = DD.length; CD < cD; CD++) {
          const cD = DD[CD],
            ID = cD.refId,
            iD = cD.ref,
            fD = this.callbacks[ID];
          if (fD) {
            if ((cD.op & pD.DELETE) === pD.DELETE && qI.isSchema(cD.previousValue)) {
              const DD = cD.previousValue[bD],
                CD = this.callbacks[DD]?.[pD.DELETE];
              if (CD)
                for (let cD = CD.length - 1; cD >= 0; cD--) try {
                  CD[cD]()
                } catch (ip) {
                  console.error(ip)
                }
            }
            if (qI.isSchema(iD)) {
              if (!this.uniqueRefIds.has(ID)) {
                const DD = fD[pD.REPLACE];
                if (DD)
                  for (let CD = DD.length - 1; CD >= 0; CD--) try {
                    DD[CD]()
                  } catch (ip) {
                    console.error(ip)
                  }
              }
              const DD = fD[cD.field];
              if (DD)
                for (let CD = DD.length - 1; CD >= 0; CD--) try {
                  DD[CD](cD.value, cD.previousValue)
                } catch (ip) {
                  console.error(ip)
                }
            } else {
              const DD = cD.dynamicIndex ?? cD.field;
              if ((cD.op & pD.DELETE) === pD.DELETE) {
                if (void 0 !== cD.previousValue) {
                  const CD = fD[pD.DELETE];
                  if (CD)
                    for (let ID = CD.length - 1; ID >= 0; ID--) try {
                      CD[ID](cD.previousValue, DD)
                    } catch (ip) {
                      console.error(ip)
                    }
                }
                if ((cD.op & pD.ADD) === pD.ADD) {
                  const CD = fD[pD.ADD];
                  if (CD)
                    for (let ID = CD.length - 1; ID >= 0; ID--) try {
                      CD[ID](cD.value, DD)
                    } catch (ip) {
                      console.error(ip)
                    }
                }
              } else if ((cD.op & pD.ADD) === pD.ADD && cD.previousValue !== cD.value) {
                const CD = fD[pD.ADD];
                if (CD)
                  for (let ID = CD.length - 1; ID >= 0; ID--) try {
                    CD[ID](cD.value, DD)
                  } catch (ip) {
                    console.error(ip)
                  }
              }
              if (cD.value !== cD.previousValue) {
                const CD = fD[pD.REPLACE];
                if (CD)
                  for (let ID = CD.length - 1; ID >= 0; ID--) try {
                    CD[ID](DD, cD.value)
                  } catch (ip) {
                    console.error(ip)
                  }
              }
            }
            this.uniqueRefIds.add(ID)
          }
        }
        this.isTriggering = !1
      }
    }
    const cp = {
      get(DD) {
        if (DD instanceof eI) return new Cp(DD);
        if ("Pt" in DD.yN) return new Cp(DD.yN.Pt);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(DD) {
        if (DD instanceof eI) return FI(DD);
        if ("Pt" in DD.yN) return FI(DD.yN.Pt);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (DD, CD) => Dp(DD, CD)
    };
    class Ip {
      _free = [];
      _factory;
      _maxSize;
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = DD, this._maxSize = CD.maxSize ?? 1 / 0;
        const cD = CD.preallocate ?? 0;
        for (let ID = 0; ID < cD; ID++) this._free.push(DD())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(DD) {
        qI.reset(DD), this._free.length < this._maxSize && this._free.push(DD)
      }
      get size() {
        return this._free.length
      }
    }

    function pp(DD) {
      return new Ip((() => new DD), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    nC("map", {
      constructor: pI
    }), nC("array", {
      constructor: cI
    }), nC("set", {
      constructor: fI
    }), nC("collection", {
      constructor: iI
    })
  },
  8781: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      __addDisposableResource: () => lD,
      __assign: () => iD,
      __asyncDelegator: () => HD,
      __asyncGenerator: () => PD,
      __asyncValues: () => UD,
      __await: () => OD,
      __awaiter: () => tD,
      __classPrivateFieldGet: () => VD,
      __classPrivateFieldIn: () => jD,
      __classPrivateFieldSet: () => zD,
      __createBinding: () => oD,
      __decorate: () => bD,
      __disposeResources: () => TD,
      __esDecorate: () => wD,
      __exportStar: () => vD,
      __extends: () => pD,
      __generator: () => ZD,
      __importDefault: () => aD,
      __importStar: () => KD,
      __makeTemplateObject: () => xD,
      __metadata: () => MD,
      __param: () => QD,
      __propKey: () => BD,
      __read: () => gD,
      __rest: () => fD,
      __rewriteRelativeImportExtension: () => GD,
      __runInitializers: () => SD,
      __setFunctionName: () => yD,
      __spread: () => XD,
      __spreadArray: () => nD,
      __spreadArrays: () => mD,
      __values: () => ND,
      default: () => RD
    });
    var ID = function(DD, CD) {
      return ID = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(DD, CD) {
        DD.__proto__ = CD
      } || function(DD, CD) {
        for (var cD in CD) Object.prototype.hasOwnProperty.call(CD, cD) && (DD[cD] = CD[cD])
      }, ID(DD, CD)
    };

    function pD(DD, CD) {
      if ("function" !== typeof CD && null !== CD) throw new TypeError("Class extends value " + String(CD) + " is not a constructor or null");

      function cD() {
        this.constructor = DD
      }
      ID(DD, CD), DD.prototype = null === CD ? Object.create(CD) : (cD.prototype = CD.prototype, new cD)
    }
    var iD = function() {
      return iD = Object.assign || function(DD) {
        for (var CD, cD = 1, ID = arguments.length; cD < ID; cD++)
          for (var pD in CD = arguments[cD]) Object.prototype.hasOwnProperty.call(CD, pD) && (DD[pD] = CD[pD]);
        return DD
      }, iD.apply(this, arguments)
    };

    function fD(DD, CD) {
      var cD = {};
      for (var ID in DD) Object.prototype.hasOwnProperty.call(DD, ID) && CD.indexOf(ID) < 0 && (cD[ID] = DD[ID]);
      if (null != DD && "function" === typeof Object.getOwnPropertySymbols) {
        var pD = 0;
        for (ID = Object.getOwnPropertySymbols(DD); pD < ID.length; pD++) CD.indexOf(ID[pD]) < 0 && Object.prototype.propertyIsEnumerable.call(DD, ID[pD]) && (cD[ID[pD]] = DD[ID[pD]])
      }
      return cD
    }

    function bD(DD, CD, cD, ID) {
      var pD, iD = arguments.length,
        fD = iD < 3 ? CD : null === ID ? ID = Object.getOwnPropertyDescriptor(CD, cD) : ID;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) fD = Reflect.decorate(DD, CD, cD, ID);
      else
        for (var bD = DD.length - 1; bD >= 0; bD--)(pD = DD[bD]) && (fD = (iD < 3 ? pD(fD) : iD > 3 ? pD(CD, cD, fD) : pD(CD, cD)) || fD);
      return iD > 3 && fD && Object.defineProperty(CD, cD, fD), fD
    }

    function QD(DD, CD) {
      return function(cD, ID) {
        CD(cD, ID, DD)
      }
    }

    function wD(DD, CD, cD, ID, pD, iD) {
      function fD(DD) {
        if (void 0 !== DD && "function" !== typeof DD) throw new TypeError("Function expected");
        return DD
      }
      for (var bD, QD = ID.kind, wD = "getter" === QD ? "get" : "setter" === QD ? "set" : "value", SD = !CD && DD ? ID.static ? DD : DD.prototype : null, BD = CD || (SD ? Object.getOwnPropertyDescriptor(SD, ID.name) : {}), yD = !1, MD = cD.length - 1; MD >= 0; MD--) {
        var tD = {};
        for (var ZD in ID) tD[ZD] = "access" === ZD ? {} : ID[ZD];
        for (var ZD in ID.access) tD.access[ZD] = ID.access[ZD];
        tD.addInitializer = function(DD) {
          if (yD) throw new TypeError("Cannot add initializers after decoration has completed");
          iD.push(fD(DD || null))
        };
        var oD = (0, cD[MD])("accessor" === QD ? {
          get: BD.get,
          set: BD.set
        } : BD[wD], tD);
        if ("accessor" === QD) {
          if (void 0 === oD) continue;
          if (null === oD || "object" !== typeof oD) throw new TypeError("Object expected");
          (bD = fD(oD.get)) && (BD.get = bD), (bD = fD(oD.set)) && (BD.set = bD), (bD = fD(oD.init)) && pD.unshift(bD)
        } else(bD = fD(oD)) && ("field" === QD ? pD.unshift(bD) : BD[wD] = bD)
      }
      SD && Object.defineProperty(SD, ID.name, BD), yD = !0
    }

    function SD(DD, CD, cD) {
      for (var ID = arguments.length > 2, pD = 0; pD < CD.length; pD++) cD = ID ? CD[pD].call(DD, cD) : CD[pD].call(DD);
      return ID ? cD : void 0
    }

    function BD(DD) {
      return "symbol" === typeof DD ? DD : "".concat(DD)
    }

    function yD(DD, CD, cD) {
      return "symbol" === typeof CD && (CD = CD.description ? "[".concat(CD.description, "]") : ""), Object.defineProperty(DD, "name", {
        configurable: !0,
        value: cD ? "".concat(cD, " ", CD) : CD
      })
    }

    function MD(DD, CD) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(DD, CD)
    }

    function tD(DD, CD, cD, ID) {
      return new(cD || (cD = Promise))((function(pD, iD) {
        function fD(DD) {
          try {
            QD(ID.next(DD))
          } catch (CD) {
            iD(CD)
          }
        }

        function bD(DD) {
          try {
            QD(ID.throw(DD))
          } catch (CD) {
            iD(CD)
          }
        }

        function QD(DD) {
          var CD;
          DD.done ? pD(DD.value) : (CD = DD.value, CD instanceof cD ? CD : new cD((function(DD) {
            DD(CD)
          }))).then(fD, bD)
        }
        QD((ID = ID.apply(DD, CD || [])).next())
      }))
    }

    function ZD(DD, CD) {
      var cD, ID, pD, iD = {
          label: 0,
          sent: function() {
            if (1 & pD[0]) throw pD[1];
            return pD[1]
          },
          trys: [],
          ops: []
        },
        fD = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return fD.next = bD(0), fD.throw = bD(1), fD.return = bD(2), "function" === typeof Symbol && (fD[Symbol.iterator] = function() {
        return this
      }), fD;

      function bD(bD) {
        return function(QD) {
          return function(bD) {
            if (cD) throw new TypeError("Generator is already executing.");
            for (; fD && (fD = 0, bD[0] && (iD = 0)), iD;) try {
              if (cD = 1, ID && (pD = 2 & bD[0] ? ID.return : bD[0] ? ID.throw || ((pD = ID.return) && pD.call(ID), 0) : ID.next) && !(pD = pD.call(ID, bD[1])).done) return pD;
              switch (ID = 0, pD && (bD = [2 & bD[0], pD.value]), bD[0]) {
                case 0:
                case 1:
                  pD = bD;
                  break;
                case 4:
                  return iD.label++, {
                    value: bD[1],
                    done: !1
                  };
                case 5:
                  iD.label++, ID = bD[1], bD = [0];
                  continue;
                case 7:
                  bD = iD.ops.pop(), iD.trys.pop();
                  continue;
                default:
                  if (!(pD = (pD = iD.trys).length > 0 && pD[pD.length - 1]) && (6 === bD[0] || 2 === bD[0])) {
                    iD = 0;
                    continue
                  }
                  if (3 === bD[0] && (!pD || bD[1] > pD[0] && bD[1] < pD[3])) {
                    iD.label = bD[1];
                    break
                  }
                  if (6 === bD[0] && iD.label < pD[1]) {
                    iD.label = pD[1], pD = bD;
                    break
                  }
                  if (pD && iD.label < pD[2]) {
                    iD.label = pD[2], iD.ops.push(bD);
                    break
                  }
                  pD[2] && iD.ops.pop(), iD.trys.pop();
                  continue
              }
              bD = CD.call(DD, iD)
            } catch (QD) {
              bD = [6, QD], ID = 0
            } finally {
              cD = pD = 0
            }
            if (5 & bD[0]) throw bD[1];
            return {
              value: bD[0] ? bD[1] : void 0,
              done: !0
            }
          }([bD, QD])
        }
      }
    }
    var oD = Object.create ? function(DD, CD, cD, ID) {
      void 0 === ID && (ID = cD);
      var pD = Object.getOwnPropertyDescriptor(CD, cD);
      pD && !("get" in pD ? !CD.__esModule : pD.writable || pD.configurable) || (pD = {
        enumerable: !0,
        get: function() {
          return CD[cD]
        }
      }), Object.defineProperty(DD, ID, pD)
    } : function(DD, CD, cD, ID) {
      void 0 === ID && (ID = cD), DD[ID] = CD[cD]
    };

    function vD(DD, CD) {
      for (var cD in DD) "default" === cD || Object.prototype.hasOwnProperty.call(CD, cD) || oD(CD, DD, cD)
    }

    function ND(DD) {
      var CD = "function" === typeof Symbol && Symbol.iterator,
        cD = CD && DD[CD],
        ID = 0;
      if (cD) return cD.call(DD);
      if (DD && "number" === typeof DD.length) return {
        next: function() {
          return DD && ID >= DD.length && (DD = void 0), {
            value: DD && DD[ID++],
            done: !DD
          }
        }
      };
      throw new TypeError(CD ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function gD(DD, CD) {
      var cD = "function" === typeof Symbol && DD[Symbol.iterator];
      if (!cD) return DD;
      var ID, pD, iD = cD.call(DD),
        fD = [];
      try {
        for (;
          (void 0 === CD || CD-- > 0) && !(ID = iD.next()).done;) fD.push(ID.value)
      } catch (bD) {
        pD = {
          error: bD
        }
      } finally {
        try {
          ID && !ID.done && (cD = iD.return) && cD.call(iD)
        } finally {
          if (pD) throw pD.error
        }
      }
      return fD
    }

    function XD() {
      for (var DD = [], CD = 0; CD < arguments.length; CD++) DD = DD.concat(gD(arguments[CD]));
      return DD
    }

    function mD() {
      for (var DD = 0, CD = 0, cD = arguments.length; CD < cD; CD++) DD += arguments[CD].length;
      var ID = Array(DD),
        pD = 0;
      for (CD = 0; CD < cD; CD++)
        for (var iD = arguments[CD], fD = 0, bD = iD.length; fD < bD; fD++, pD++) ID[pD] = iD[fD];
      return ID
    }

    function nD(DD, CD, cD) {
      if (cD || 2 === arguments.length)
        for (var ID, pD = 0, iD = CD.length; pD < iD; pD++) !ID && pD in CD || (ID || (ID = Array.prototype.slice.call(CD, 0, pD)), ID[pD] = CD[pD]);
      return DD.concat(ID || Array.prototype.slice.call(CD))
    }

    function OD(DD) {
      return this instanceof OD ? (this.v = DD, this) : new OD(DD)
    }

    function PD(DD, CD, cD) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var ID, pD = cD.apply(DD, CD || []),
        iD = [];
      return ID = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), fD("next"), fD("throw"), fD("return", (function(DD) {
        return function(CD) {
          return Promise.resolve(CD).then(DD, wD)
        }
      })), ID[Symbol.asyncIterator] = function() {
        return this
      }, ID;

      function fD(DD, CD) {
        pD[DD] && (ID[DD] = function(CD) {
          return new Promise((function(cD, ID) {
            iD.push([DD, CD, cD, ID]) > 1 || bD(DD, CD)
          }))
        }, CD && (ID[DD] = CD(ID[DD])))
      }

      function bD(DD, CD) {
        try {
          (cD = pD[DD](CD)).value instanceof OD ? Promise.resolve(cD.value.v).then(QD, wD) : SD(iD[0][2], cD)
        } catch (ID) {
          SD(iD[0][3], ID)
        }
        var cD
      }

      function QD(DD) {
        bD("next", DD)
      }

      function wD(DD) {
        bD("throw", DD)
      }

      function SD(DD, CD) {
        DD(CD), iD.shift(), iD.length && bD(iD[0][0], iD[0][1])
      }
    }

    function HD(DD) {
      var CD, cD;
      return CD = {}, ID("next"), ID("throw", (function(DD) {
        throw DD
      })), ID("return"), CD[Symbol.iterator] = function() {
        return this
      }, CD;

      function ID(ID, pD) {
        CD[ID] = DD[ID] ? function(CD) {
          return (cD = !cD) ? {
            value: OD(DD[ID](CD)),
            done: !1
          } : pD ? pD(CD) : CD
        } : pD
      }
    }

    function UD(DD) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var CD, cD = DD[Symbol.asyncIterator];
      return cD ? cD.call(DD) : (DD = ND(DD), CD = {}, ID("next"), ID("throw"), ID("return"), CD[Symbol.asyncIterator] = function() {
        return this
      }, CD);

      function ID(cD) {
        CD[cD] = DD[cD] && function(CD) {
          return new Promise((function(ID, pD) {
            (function(DD, CD, cD, ID) {
              Promise.resolve(ID).then((function(CD) {
                DD({
                  value: CD,
                  done: cD
                })
              }), CD)
            })(ID, pD, (CD = DD[cD](CD)).done, CD.value)
          }))
        }
      }
    }

    function xD(DD, CD) {
      return Object.defineProperty ? Object.defineProperty(DD, "raw", {
        value: CD
      }) : DD.raw = CD, DD
    }
    var qD = Object.create ? function(DD, CD) {
        Object.defineProperty(DD, "default", {
          enumerable: !0,
          value: CD
        })
      } : function(DD, CD) {
        DD.default = CD
      },
      JD = function(DD) {
        return JD = Object.getOwnPropertyNames || function(DD) {
          var CD = [];
          for (var cD in DD) Object.prototype.hasOwnProperty.call(DD, cD) && (CD[CD.length] = cD);
          return CD
        }, JD(DD)
      };

    function KD(DD) {
      if (DD && DD.__esModule) return DD;
      var CD = {};
      if (null != DD)
        for (var cD = JD(DD), ID = 0; ID < cD.length; ID++) "default" !== cD[ID] && oD(CD, DD, cD[ID]);
      return qD(CD, DD), CD
    }

    function aD(DD) {
      return DD && DD.__esModule ? DD : {
        default: DD
      }
    }

    function VD(DD, CD, cD, ID) {
      if ("a" === cD && !ID) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof CD ? DD !== CD || !ID : !CD.has(DD)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === cD ? ID : "a" === cD ? ID.call(DD) : ID ? ID.value : CD.get(DD)
    }

    function zD(DD, CD, cD, ID, pD) {
      if ("m" === ID) throw new TypeError("Private method is not writable");
      if ("a" === ID && !pD) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof CD ? DD !== CD || !pD : !CD.has(DD)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === ID ? pD.call(DD, cD) : pD ? pD.value = cD : CD.set(DD, cD), cD
    }

    function jD(DD, CD) {
      if (null === CD || "object" !== typeof CD && "function" !== typeof CD) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof DD ? CD === DD : DD.has(CD)
    }

    function lD(DD, CD, cD) {
      if (null !== CD && void 0 !== CD) {
        if ("object" !== typeof CD && "function" !== typeof CD) throw new TypeError("Object expected.");
        var ID, pD;
        if (cD) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          ID = CD[Symbol.asyncDispose]
        }
        if (void 0 === ID) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          ID = CD[Symbol.dispose], cD && (pD = ID)
        }
        if ("function" !== typeof ID) throw new TypeError("Object not disposable.");
        pD && (ID = function() {
          try {
            pD.call(this)
          } catch (DD) {
            return Promise.reject(DD)
          }
        }), DD.stack.push({
          value: CD,
          dispose: ID,
          async: cD
        })
      } else cD && DD.stack.push({
        async: !0
      });
      return CD
    }
    var LD = "function" === typeof SuppressedError ? SuppressedError : function(DD, CD, cD) {
      var ID = new Error(cD);
      return ID.name = "SuppressedError", ID.error = DD, ID.suppressed = CD, ID
    };

    function TD(DD) {
      function CD(CD) {
        DD.error = DD.hasError ? new LD(CD, DD.error, "An error was suppressed during disposal.") : CD, DD.hasError = !0
      }
      var cD, ID = 0;
      return function pD() {
        for (; cD = DD.stack.pop();) try {
          if (!cD.async && 1 === ID) return ID = 0, DD.stack.push(cD), Promise.resolve().then(pD);
          if (cD.dispose) {
            var iD = cD.dispose.call(cD.value);
            if (cD.async) return ID |= 2, Promise.resolve(iD).then(pD, (function(DD) {
              return CD(DD), pD()
            }))
          } else ID |= 1
        } catch (fD) {
          CD(fD)
        }
        if (1 === ID) return DD.hasError ? Promise.reject(DD.error) : Promise.resolve();
        if (DD.hasError) throw DD.error
      }()
    }

    function GD(DD, CD) {
      return "string" === typeof DD && /^\.\.?\//.test(DD) ? DD.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(DD, cD, ID, pD, iD) {
        return cD ? CD ? ".jsx" : ".js" : !ID || pD && iD ? ID + pD + "." + iD.toLowerCase() + "js" : DD
      })) : DD
    }
    const RD = {
      __extends: pD,
      __assign: iD,
      __rest: fD,
      __decorate: bD,
      __param: QD,
      __esDecorate: wD,
      __runInitializers: SD,
      __propKey: BD,
      __setFunctionName: yD,
      __metadata: MD,
      __awaiter: tD,
      __generator: ZD,
      __createBinding: oD,
      __exportStar: vD,
      __values: ND,
      __read: gD,
      __spread: XD,
      __spreadArrays: mD,
      __spreadArray: nD,
      __await: OD,
      __asyncGenerator: PD,
      __asyncDelegator: HD,
      __asyncValues: UD,
      __makeTemplateObject: xD,
      __importStar: KD,
      __importDefault: aD,
      __classPrivateFieldGet: VD,
      __classPrivateFieldSet: zD,
      __classPrivateFieldIn: jD,
      __addDisposableResource: lD,
      __disposeResources: TD,
      __rewriteRelativeImportExtension: GD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);