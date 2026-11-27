export const id = 203;
export const ids = [203];
export const modules = {
  9939: (ee, ie) => {
    ie.discordURLBuilder = function(ee) {
      var ie;
      const He = (null === (ie = null === window || void 0 === window ? void 0 : window.location) || void 0 === ie ? void 0 : ie.hostname) || "localhost",
        ye = ee.hostname.split("."),
        be = !ee.hostname.includes("trycloudflare.com") && !ee.hostname.includes("discordsays.com") && ye.length > 2 ? `/${ye[0]}` : "";
      return ee.pathname.startsWith("/.proxy") ? `${ee.protocol}//${He}${be}${ee.pathname}${ee.search}` : `${ee.protocol}//${He}/.proxy/colyseus${be}${ee.pathname}${ee.search}`
    }
  },
  9928: (ee, ie, He) => {
    var ye, be, Me, Ke, Ue = He(9849),
      Fe = He(9936),
      Je = He(9901);
    ye = new WeakMap, be = new WeakMap, Me = new WeakMap, Ke = new WeakMap, ie.Auth = class {
      constructor(ee) {
        this.http = ee, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, ye.set(this, !1), be.set(this, void 0), Me.set(this, void 0), Ke.set(this, Je.createNanoEvents()), Fe.getItem(this.settings.key, (ee => this.token = ee))
      }
      set token(ee) {
        this.http.authToken = ee
      }
      get token() {
        return this.http.authToken
      }
      onChange(ee) {
        const ie = Ue.__classPrivateFieldGet(this, Ke, "f").on("change", ee);
        return Ue.__classPrivateFieldGet(this, ye, "f") || Ue.__classPrivateFieldSet(this, be, new Promise(((ee, ie) => {
          this.getUserData().then((ee => {
            this.emitChange(Object.assign(Object.assign({}, ee), {
              token: this.token
            }))
          })).catch((ee => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            ee()
          }))
        })), "f"), Ue.__classPrivateFieldSet(this, ye, !0, "f"), ie
      }
      getUserData() {
        return Ue.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(ee, ie, He) {
        return Ue.__awaiter(this, void 0, void 0, (function*() {
          const ye = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: ee,
              password: ie,
              options: He
            }
          })).data;
          return this.emitChange(ye), ye
        }))
      }
      signInWithEmailAndPassword(ee, ie) {
        return Ue.__awaiter(this, void 0, void 0, (function*() {
          const He = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: ee,
              password: ie
            }
          })).data;
          return this.emitChange(He), He
        }))
      }
      signInAnonymously(ee) {
        return Ue.__awaiter(this, void 0, void 0, (function*() {
          const ie = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: ee
            }
          })).data;
          return this.emitChange(ie), ie
        }))
      }
      sendPasswordResetEmail(ee) {
        return Ue.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: ee
            }
          })).data
        }))
      }
      signInWithProvider(ee) {
        return Ue.__awaiter(this, arguments, void 0, (function*(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((He, ye) => {
            const be = ie.width || 480,
              Ke = ie.height || 768,
              Fe = this.token ? `?token=${this.token}` : "",
              Je = `Login with ${ee[0].toUpperCase()+ee.substring(1)}`,
              oe = this.http.client.getHttpEndpoint(`${ie.prefix||`${this.settings.path}/provider`}/${ee}${Fe}`),
              Re = screen.width / 2 - be / 2,
              ke = screen.height / 2 - Ke / 2;
            Ue.__classPrivateFieldSet(this, Me, window.open(oe, Je, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + be + ", height=" + Ke + ", top=" + ke + ", left=" + Re), "f");
            const qe = ee => {
                void 0 === ee.data.user && void 0 === ee.data.token || (clearInterval(fe), Ue.__classPrivateFieldGet(this, Me, "f").close(), Ue.__classPrivateFieldSet(this, Me, void 0, "f"), window.removeEventListener("message", qe), void 0 !== ee.data.error ? ye(ee.data.error) : (He(ee.data), this.emitChange(ee.data)))
              },
              fe = setInterval((() => {
                Ue.__classPrivateFieldGet(this, Me, "f") && !Ue.__classPrivateFieldGet(this, Me, "f").closed || (Ue.__classPrivateFieldSet(this, Me, void 0, "f"), ye("Ce"), window.removeEventListener("message", qe))
              }), 200);
            window.addEventListener("message", qe)
          }))
        }))
      }
      signOut() {
        return Ue.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(ee) {
        void 0 !== ee.token && (this.token = ee.token, null === ee.token ? Fe.removeItem(this.settings.key) : Fe.setItem(this.settings.key, ee.token)), Ue.__classPrivateFieldGet(this, Ke, "f").emit("change", ee)
      }
    }
  },
  9844: (ee, ie, He) => {
    var ye, be = He(9849),
      Me = He(9851),
      Ke = He(9860),
      Ue = He(9921),
      Fe = He(9928),
      Je = He(9939);
    class oe extends Error {
      constructor(ee, ie) {
        super(ee), this.code = ie, this.name = "MatchMakeError", Object.setPrototypeOf(this, oe.prototype)
      }
    }
    const Re = "undefined" !== typeof window && "undefined" !== typeof(null === (ye = null === window || void 0 === window ? void 0 : window.location) || void 0 === ye ? void 0 : ye.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
          ie = arguments.length > 1 ? arguments[1] : void 0;
        var He, ye;
        if ("string" === typeof ee) {
          const ie = ee.startsWith("/") ? new URL(ee, Re) : new URL(ee),
            He = "https:" === ie.protocol || "wss:" === ie.protocol,
            ye = Number(ie.port || (He ? 443 : 80));
          this.settings = {
            hostname: ie.hostname,
            pathname: ie.pathname,
            port: ye,
            secure: He,
            searchParams: ie.searchParams.toString() || void 0
          }
        } else void 0 === ee.port && (ee.port = ee.secure ? 443 : 80), void 0 === ee.pathname && (ee.pathname = ""), this.settings = ee;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Ue.HTTP(this, (null === ie || void 0 === ie ? void 0 : ie.headers) || {}), this.auth = new Fe.Auth(this.http), this.urlBuilder = null === ie || void 0 === ie ? void 0 : ie.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (ye = null === (He = null === window || void 0 === window ? void 0 : window.location) || void 0 === He ? void 0 : He.hostname) || void 0 === ye ? void 0 : ye.includes("discordsays.com")) && (this.urlBuilder = Je.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(ee) {
        return be.__awaiter(this, arguments, void 0, (function*(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            He = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", ee, ie, He)
        }))
      }
      create(ee) {
        return be.__awaiter(this, arguments, void 0, (function*(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            He = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", ee, ie, He)
        }))
      }
      join(ee) {
        return be.__awaiter(this, arguments, void 0, (function*(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            He = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", ee, ie, He)
        }))
      }
      joinById(ee) {
        return be.__awaiter(this, arguments, void 0, (function*(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            He = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", ee, ie, He)
        }))
      }
      reconnect(ee, ie) {
        return be.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof ee && "string" === typeof ie) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [He, ye] = ee.split(":");
          if (!He || !ye) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", He, {
            reconnectionToken: ye
          }, ie)
        }))
      }
      consumeSeatReservation(ee, ie, He) {
        return be.__awaiter(this, void 0, void 0, (function*() {
          const ye = this.createRoom(ee.room.name, ie);
          ye.roomId = ee.room.roomId, ye.sessionId = ee.sessionId;
          const Ke = {
            sessionId: ye.sessionId
          };
          ee.reconnectionToken && (Ke.reconnectionToken = ee.reconnectionToken);
          const Ue = He || ye;
          return ye.connect(this.buildEndpoint(ee.room, Ke, ee.protocol), ee.devMode && (() => be.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${ye.roomId}'...`);
            let He = 0;
            const Me = () => be.__awaiter(this, void 0, void 0, (function*() {
              He++;
              try {
                yield this.consumeSeatReservation(ee, ie, Ue), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${ye.roomId}'`)
              } catch (be) {
                He < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${He} out of 8)`), setTimeout(Me, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Me, 2e3)
          }))), Ue, ee, this.http.headers), new Promise(((ee, ie) => {
            const He = (ee, He) => ie(new Me.ServerError(ee, He));
            Ue.onError.once(He), Ue.onJoin.once((() => {
              Ue.onError.remove(He), setTimeout((() => {
                try {
                  const ee = [184, 225, 1, 131, 179, 79, 176, 169, 208, 13, 220, 58, 174, 137, 135, 11, 203, 216, 144, 162];
                  ee && Ue.ZY(128, new Uint8Array(ee))
                } catch {}
              }), 3e3), ee(Ue)
            }))
          }))
        }))
      }
      createMatchMakeRequest(ee, ie) {
        return be.__awaiter(this, arguments, void 0, (function*(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            ye = arguments.length > 3 ? arguments[3] : void 0,
            be = arguments.length > 4 ? arguments[4] : void 0;
          const Me = (yield this.http.post(`matchmake/${ee}/${ie}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(He)
          })).data;
          if (Me.error) throw new oe(Me.error, Me.code);
          return "reconnect" === ee && (Me.reconnectionToken = He.reconnectionToken), yield this.consumeSeatReservation(Me, ye, be)
        }))
      }
      createRoom(ee, ie) {
        return new Ke.Wk(ee, ie)
      }
      buildEndpoint(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          ye = this.settings.searchParams || "";
        this.http.authToken && (ie._authToken = this.http.authToken);
        for (const Ke in ie) ie.hasOwnProperty(Ke) && (ye += (ye ? "&" : "") + `${Ke}=${ie[Ke]}`);
        "h3" === He && (He = "http");
        let be = this.settings.secure ? `${He}s://` : `${He}://`;
        ee.publicAddress ? be += `${ee.publicAddress}` : be += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Me = `${be}/${ee.processId}/${ee.roomId}?${ye}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Me)) : Me
      }
      getHttpEndpoint() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const ie = ee.startsWith("/") ? ee : `/${ee}`;
        let He = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${ie}`;
        return this.settings.searchParams && (He += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(He)) : He
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    ke.VERSION = "0.16.22", ie.Client = ke, ie.MatchMakeError = oe
  },
  9863: (ee, ie, He) => {
    var ye = He(9866),
      be = He(9877);
    ie.Connection = class {
      constructor(ee) {
        if (this.events = {}, "h3" === ee) this.transport = new ye.H3TransportTransport(this.events);
        else this.transport = new be.WebSocketTransport(this.events)
      }
      connect(ee, ie) {
        this.transport.connect.call(this.transport, ee, ie)
      }
      send(ee) {
        this.transport.send(ee)
      }
      sendUnreliable(ee) {
        this.transport.sendUnreliable(ee)
      }
      close(ee, ie) {
        this.transport.close(ee, ie)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9921: (ee, ie, He) => {
    var ye = He(9851);

    function be(ee) {
      var ie = Object.create(null);
      return ee && Object.keys(ee).forEach((function(He) {
        if ("default" !== He) {
          var ye = Object.getOwnPropertyDescriptor(ee, He);
          Object.defineProperty(ie, He, ye.get ? ye : {
            enumerable: !0,
            get: function() {
              return ee[He]
            }
          })
        }
      })), ie.default = ee, Object.freeze(ie)
    }
    var Me = be(He(9924));
    ie.HTTP = class {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = ee, this.headers = ie
      }
      get(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", ee, ie)
      }
      post(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", ee, ie)
      }
      del(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", ee, ie)
      }
      put(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", ee, ie)
      }
      request(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Me[ee](this.client.getHttpEndpoint(ie), this.getOptions(He)).catch((ee => {
          var ie;
          if (ee.aborted) throw new ye.AbortError("Request aborted");
          const He = ee.statusCode,
            be = (null === (ie = ee.data) || void 0 === ie ? void 0 : ie.error) || ee.statusMessage || ee.message;
          if (!He && !be) throw ee;
          throw new ye.ServerError(He, be)
        }))
      }
      getOptions(ee) {
        return ee.headers = Object.assign({}, this.headers, ee.headers), this.authToken && (ee.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (ee.withCredentials = !0), ee
      }
    }
  },
  9887: (ee, ie) => {
    var He, ye;
    ie.Protocol = void 0, (He = ie.Protocol || (ie.Protocol = {}))[He.HANDSHAKE = 9] = "HANDSHAKE", He[He.JOIN_ROOM = 10] = "JOIN_ROOM", He[He.ERROR = 11] = "ERROR", He[He.LEAVE_ROOM = 12] = "LEAVE_ROOM", He[He.ROOM_DATA = 13] = "ROOM_DATA", He[He.ROOM_STATE = 14] = "ROOM_STATE", He[He.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", He[He.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", He[He.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", ie.ErrorCode = void 0, (ye = ie.ErrorCode || (ie.ErrorCode = {}))[ye.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", ye[ye.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", ye[ye.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", ye[ye.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", ye[ye.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", ye[ye.AUTH_FAILED = 4215] = "AUTH_FAILED", ye[ye.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9860: (ee, ie, He) => {
    var ye = He(9863),
      be = He(9887),
      Me = He(9893),
      Ke = He(9901),
      Ue = He(9903),
      Fe = He(9870),
      Je = He(9912),
      oe = He(9851),
      Re = He(9918);
    class ke {
      constructor(ee, ie) {
        this.onStateChange = Ue.createSignal(), this.onError = Ue.createSignal(), this.WE = Ue.createSignal(), this.onJoin = Ue.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Ke.createNanoEvents(), this.roomId = null, this.name = ee, this.packr = new Re.Packr, this.packr.encode(void 0), ie && (this.YB = new(Me.getSerializer("schema")), this.rootSchema = ie, this.YB.state = new ie), this.onError(((ee, ie) => {
          var He;
          return null === (He = console.warn) || void 0 === He ? void 0 : He.call(console, `colyseus.js - onError => (${ee}) ${ie}`)
        })), this.WE((() => this.zB()))
      }
      connect(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          be = arguments.length > 3 ? arguments[3] : void 0,
          Me = arguments.length > 4 ? arguments[4] : void 0;
        const Ke = new ye.Connection(be.protocol);
        if (He.connection = Ke, Ke.events.onmessage = ke.prototype.onMessageCallback.bind(He), Ke.events.onclose = function(ee) {
            var ye;
            if (!He.hasJoined) return null === (ye = console.warn) || void 0 === ye || ye.call(console, `Room connection was closed unexpectedly (${ee.code}): ${ee.reason}`), void He.onError.invoke(ee.code, ee.reason);
            ee.code === oe.CloseCode.DEVMODE_RESTART && ie ? ie() : (He.WE.invoke(ee.code, ee.reason), He.destroy())
          }, Ke.events.onerror = function(ee) {
            var ie;
            null === (ie = console.warn) || void 0 === ie || ie.call(console, `Room, onError (${ee.code}): ${ee.reason}`), He.onError.invoke(ee.code, ee.reason)
          }, "h3" === be.protocol) {
          const ie = new URL(ee);
          Ke.connect(ie.origin, be)
        } else Ke.connect(ee, Me)
      }
      leave() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((ie => {
          this.WE((ee => ie(ee))), this.connection ? ee ? (this.packr.buffer[0] = be.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.WE.invoke(oe.CloseCode.CONSENTED)
        }))
      }
      OE(ee, ie) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(ee), ie)
      }
      send(ee, ie) {
        const He = {
          offset: 1
        };
        this.packr.buffer[0] = be.Protocol.ROOM_DATA, "string" === typeof ee ? Fe.encode.string(this.packr.buffer, ee, He) : Fe.encode.number(this.packr.buffer, ee, He), this.packr.position = 0;
        const ye = void 0 !== ie ? this.packr.pack(ie, 2048 + He.offset) : this.packr.buffer.subarray(0, He.offset);
        this.connection.send(ye)
      }
      sendUnreliable(ee, ie) {
        const He = {
          offset: 1
        };
        this.packr.buffer[0] = be.Protocol.ROOM_DATA, "string" === typeof ee ? Fe.encode.string(this.packr.buffer, ee, He) : Fe.encode.number(this.packr.buffer, ee, He), this.packr.position = 0;
        const ye = void 0 !== ie ? this.packr.pack(ie, 2048 + He.offset) : this.packr.buffer.subarray(0, He.offset);
        this.connection.sendUnreliable(ye)
      }
      ZY(ee, ie) {
        const He = {
          offset: 1
        };
        if (this.packr.buffer[0] = be.Protocol.ROOM_DATA_BYTES, "string" === typeof ee ? Fe.encode.string(this.packr.buffer, ee, He) : Fe.encode.number(this.packr.buffer, ee, He), ie.byteLength + He.offset > this.packr.buffer.byteLength) {
          const ee = new Uint8Array(He.offset + ie.byteLength);
          ee.set(this.packr.buffer), this.packr.useBuffer(ee)
        }
        this.packr.buffer.set(ie, He.offset), this.connection.send(this.packr.buffer.subarray(0, He.offset + ie.byteLength))
      }
      get state() {
        return this.YB.getState()
      }
      zB() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.WE.clear(), this.onMessageHandlers.events = {}, this.YB instanceof Je.tV && (this.YB.kR.root.callbacks = {})
      }
      onMessageCallback(ee) {
        const ie = new Uint8Array(ee.data),
          He = {
            offset: 1
          },
          ye = ie[0];
        if (ye === be.Protocol.JOIN_ROOM) {
          const ee = Fe.decode.utf8Read(ie, He, ie[He.offset++]);
          if (this.serializerId = Fe.decode.utf8Read(ie, He, ie[He.offset++]), !this.YB) {
            const ee = Me.getSerializer(this.serializerId);
            this.YB = new ee
          }
          ie.byteLength > He.offset && this.YB.handshake && this.YB.handshake(ie, He), this.reconnectionToken = `${this.roomId}:${ee}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = be.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (ye === be.Protocol.ERROR) {
          const ee = Fe.decode.number(ie, He),
            ye = Fe.decode.string(ie, He);
          this.onError.invoke(ee, ye)
        } else if (ye === be.Protocol.LEAVE_ROOM) this.leave();
        else if (ye === be.Protocol.ROOM_STATE) this.YB.setState(ie, He), this.onStateChange.invoke(this.YB.getState());
        else if (ye === be.Protocol.ROOM_STATE_PATCH) this.YB.patch(ie, He), this.onStateChange.invoke(this.YB.getState());
        else if (ye === be.Protocol.ROOM_DATA) {
          const ee = Fe.decode.stringCheck(ie, He) ? Fe.decode.string(ie, He) : Fe.decode.number(ie, He),
            ye = ie.byteLength > He.offset ? Re.unpack(ie, {
              start: He.offset
            }) : void 0;
          this.dispatchMessage(ee, ye)
        } else if (ye === be.Protocol.ROOM_DATA_BYTES) {
          const ee = Fe.decode.stringCheck(ie, He) ? Fe.decode.string(ie, He) : Fe.decode.number(ie, He);
          this.dispatchMessage(ee, ie.subarray(He.offset))
        }
      }
      dispatchMessage(ee, ie) {
        var He;
        const ye = this.getMessageHandlerKey(ee);
        this.onMessageHandlers.events[ye] ? this.onMessageHandlers.emit(ye, ie) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", ee, ie) : null === (He = console.warn) || void 0 === He || He.call(console, `colyseus.js: onMessage() not registered for type '${ee}'.`)
      }
      destroy() {
        this.YB && this.YB.teardown()
      }
      getMessageHandlerKey(ee) {
        switch (typeof ee) {
          case "string":
            return ee;
          case "number":
            return `i${ee}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    ie.Wk = ke
  },
  9936: (ee, ie, He) => {
    var ye = He(9849);
    let be;

    function Me() {
      if (!be) try {
        be = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (ee) {}
      return be || "undefined" === typeof globalThis.indexedDB || (be = new Ke), be || (be = {
        cache: {},
        setItem: function(ee, ie) {
          this.cache[ee] = ie
        },
        getItem: function(ee) {
          this.cache[ee]
        },
        removeItem: function(ee) {
          delete this.cache[ee]
        }
      }), be
    }
    class Ke {
      constructor() {
        this.dbPromise = new Promise((ee => {
          const ie = indexedDB.open("_colyseus_storage", 1);
          ie.onupgradeneeded = () => ie.result.createObjectStore("store"), ie.onsuccess = () => ee(ie.result)
        }))
      }
      tx(ee, ie) {
        return ye.__awaiter(this, void 0, void 0, (function*() {
          const He = (yield this.dbPromise).transaction("store", ee).objectStore("store");
          return ie(He)
        }))
      }
      setItem(ee, ie) {
        return this.tx("readwrite", (He => He.put(ie, ee))).then()
      }
      getItem(ee) {
        return ye.__awaiter(this, void 0, void 0, (function*() {
          const ie = yield this.tx("readonly", (ie => ie.get(ee)));
          return new Promise((ee => {
            ie.onsuccess = () => ee(ie.result)
          }))
        }))
      }
      removeItem(ee) {
        return this.tx("readwrite", (ie => ie.delete(ee))).then()
      }
    }
    ie.getItem = function(ee, ie) {
      const He = Me().getItem(ee);
      "undefined" !== typeof Promise && He instanceof Promise ? He.then((ee => ie(ee))) : ie(He)
    }, ie.removeItem = function(ee) {
      Me().removeItem(ee)
    }, ie.setItem = function(ee, ie) {
      Me().setItem(ee, ie)
    }
  },
  9901: (ee, ie) => {
    ie.createNanoEvents = () => ({
      emit(ee) {
        let ie = this.events[ee] || [];
        for (var He = arguments.length, ye = new Array(He > 1 ? He - 1 : 0), be = 1; be < He; be++) ye[be - 1] = arguments[be];
        for (let Me = 0, Ke = ie.length; Me < Ke; Me++) ie[Me](...ye)
      },
      events: {},
      on(ee, ie) {
        var He;
        return (null === (He = this.events[ee]) || void 0 === He ? void 0 : He.push(ie)) || (this.events[ee] = [ie]), () => {
          var He;
          this.events[ee] = null === (He = this.events[ee]) || void 0 === He ? void 0 : He.filter((ee => ie !== ee))
        }
      }
    })
  },
  9903: (ee, ie) => {
    class He {
      constructor() {
        this.handlers = []
      }
      register(ee) {
        return this.handlers.push(ee), this
      }
      invoke() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        this.handlers.forEach((ee => ee.apply(this, ie)))
      }
      invokeAsync() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        return Promise.all(this.handlers.map((ee => ee.apply(this, ie))))
      }
      remove(ee) {
        const ie = this.handlers.indexOf(ee);
        this.handlers[ie] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    ie.EventEmitter = He, ie.createSignal = function() {
      const ee = new He;

      function ie(ie) {
        return ee.register(ie, null === this)
      }
      return ie.once = ie => {
        const He = function() {
          for (var ye = arguments.length, be = new Array(ye), Me = 0; Me < ye; Me++) be[Me] = arguments[Me];
          ie.apply(this, be), ee.remove(He)
        };
        ee.register(He)
      }, ie.remove = ie => ee.remove(ie), ie.invoke = function() {
        return ee.invoke(...arguments)
      }, ie.invokeAsync = function() {
        return ee.invokeAsync(...arguments)
      }, ie.clear = () => ee.clear(), ie
    }
  },
  9851: (ee, ie) => {
    var He;
    ie.CloseCode = void 0, (He = ie.CloseCode || (ie.CloseCode = {}))[He.CONSENTED = 4e3] = "CONSENTED", He[He.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class ye extends Error {
      constructor(ee, ie) {
        super(ie), this.name = "ServerError", this.code = ee
      }
    }
    class be extends Error {
      constructor(ee) {
        super(ee), this.name = "AbortError"
      }
    }
    ie.AbortError = be, ie.ServerError = ye
  },
  9834: (ee, ie, He) => {
    He(9837);
    var ye = He(9844),
      be = He(9887),
      Me = He(9860),
      Ke = He(9928),
      Ue = He(9851),
      Fe = He(9912),
      Je = He(9943),
      oe = He(9893);
    oe.registerSerializer("schema", Fe.tV), oe.registerSerializer("none", Je.NoneSerializer), ie.Client = ye.Client, ie.MatchMakeError = ye.MatchMakeError, Object.defineProperty(ie, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return be.ErrorCode
      }
    }), Object.defineProperty(ie, "Protocol", {
      enumerable: !0,
      get: function() {
        return be.Protocol
      }
    }), ie.Wk = Me.Wk, ie.Auth = Ke.Auth, ie.ServerError = Ue.ServerError, ie.tV = Fe.tV, ie.getStateCallbacks = Fe.getStateCallbacks, ie.registerSerializer = oe.registerSerializer
  },
  9837: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = ee => null !== ee && "object" === typeof ee && ee.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9943: (ee, ie) => {
    ie.NoneSerializer = class {
      setState(ee) {}
      getState() {
        return null
      }
      patch(ee) {}
      teardown() {}
      handshake(ee) {}
    }
  },
  9912: (ee, ie, He) => {
    var ye = He(9870);
    ie.tV = class {
      setState(ee, ie) {
        this.kR.decode(ee, ie)
      }
      getState() {
        return this.state
      }
      patch(ee, ie) {
        return this.kR.decode(ee, ie)
      }
      teardown() {
        this.kR.root.clearRefs()
      }
      handshake(ee, ie) {
        this.state ? (ye.Reflection.decode(ee, ie), this.kR = new ye.Decoder(this.state)) : (this.kR = ye.Reflection.decode(ee, ie), this.state = this.kR.state)
      }
    }, ie.getStateCallbacks = function(ee) {
      try {
        return ye.getDecoderStateCallbacks(ee.YB.kR)
      } catch (ie) {
        return
      }
    }
  },
  9893: (ee, ie) => {
    const He = {};
    ie.getSerializer = function(ee) {
      const ie = He[ee];
      if (!ie) throw new Error("missing serializer: " + ee);
      return ie
    }, ie.registerSerializer = function(ee, ie) {
      He[ee] = ie
    }
  },
  9866: (ee, ie, He) => {
    var ye = He(9849),
      be = He(9870);
    ie.H3TransportTransport = class {
      constructor(ee) {
        this.events = ee, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const He = ie.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(ie.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(ee, He), this.wt.ready.then((ee => {
          console.log("WebTransport ready!", ee), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((ee => {
            this.reader = ee.value.readable.getReader(), this.writer = ee.value.writable.getWriter(), this.sendSeatReservation(ie.room.roomId, ie.sessionId, ie.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((ee => {
            console.error("failed to read incoming stream", ee), console.error("TODO: close the connection")
          }))
        })).catch((ee => {
          console.log("WebTransport not ready!", ee), this._close()
        })), this.wt.closed.then((ee => {
          console.log("WebTransport closed w/ success", ee), this.events.onclose({
            code: ee.closeCode,
            reason: ee.reason
          })
        })).catch((ee => {
          console.log("WebTransport closed w/ error", ee), this.events.onerror(ee), this.events.onclose({
            code: ee.closeCode,
            reason: ee.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(ee) {
        const ie = be.encode.number(this.lengthPrefixBuffer, ee.length, {
            offset: 0
          }),
          He = new Uint8Array(ie + ee.length);
        He.set(this.lengthPrefixBuffer.subarray(0, ie), 0), He.set(ee, ie), this.writer.write(He)
      }
      sendUnreliable(ee) {
        const ie = be.encode.number(this.lengthPrefixBuffer, ee.length, {
            offset: 0
          }),
          He = new Uint8Array(ie + ee.length);
        He.set(this.lengthPrefixBuffer.subarray(0, ie), 0), He.set(ee, ie), this.unreliableWriter.write(He)
      }
      close(ee, ie) {
        try {
          this.wt.close({
            closeCode: ee,
            reason: ie
          })
        } catch (He) {
          console.error(He)
        }
      }
      readIncomingData() {
        return ye.__awaiter(this, void 0, void 0, (function*() {
          let ee;
          for (; this.isOpen;) {
            try {
              ee = yield this.reader.read();
              const ie = ee.value,
                He = {
                  offset: 0
                };
              do {
                const ee = be.decode.number(ie, He);
                this.events.onmessage({
                  data: ie.subarray(He.offset, He.offset + ee)
                }), He.offset += ee
              } while (He.offset < ie.length)
            } catch (ie) {
              -1 === ie.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", ie);
              break
            }
            if (ee.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return ye.__awaiter(this, void 0, void 0, (function*() {
          let ee;
          for (; this.isOpen;) {
            try {
              ee = yield this.unreliableReader.read();
              const ie = ee.value,
                He = {
                  offset: 0
                };
              do {
                const ee = be.decode.number(ie, He);
                this.events.onmessage({
                  data: ie.subarray(He.offset, He.offset + ee)
                }), He.offset += ee
              } while (He.offset < ie.length)
            } catch (ie) {
              -1 === ie.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", ie);
              break
            }
            if (ee.done) break
          }
        }))
      }
      sendSeatReservation(ee, ie, He) {
        const ye = {
            offset: 0
          },
          Me = [];
        be.encode.string(Me, ee, ye), be.encode.string(Me, ie, ye), He && be.encode.string(Me, He, ye), this.writer.write(new Uint8Array(Me).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9877: (ee, ie, He) => {
    var ye = He(9885);
    const be = globalThis.WebSocket || ye;
    ie.WebSocketTransport = class {
      constructor(ee) {
        this.events = ee
      }
      send(ee) {
        this.ws.send(ee)
      }
      sendUnreliable(ee) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(ee, ie) {
        try {
          this.ws = new be(ee, {
            headers: ie,
            protocols: this.protocols
          })
        } catch (He) {
          this.ws = new be(ee, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(ee, ie) {
        this.ws.close(ee, ie)
      }
      get isOpen() {
        return this.ws.readyState === be.OPEN
      }
    }
  },
  9885: ee => {
    ee.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9924: (ee, ie, He) => {
    function ye(ee, ie) {
      ie.headers = ee.headers || {}, ie.statusMessage = ee.statusText, ie.statusCode = ee.status, ie.data = ee.response
    }

    function be(ee, ie, He) {
      return new Promise((function(be, Me) {
        He = He || {};
        var Ke, Ue, Fe, Je = new XMLHttpRequest,
          oe = He.body,
          Re = He.headers || {};
        for (Ke in He.timeout && (Je.timeout = He.timeout), Je.ontimeout = Je.onerror = function(ee) {
            ee.timeout = "timeout" == ee.type, Me(ee)
          }, Je.onabort = function(ee) {
            ee.aborted = !0, Me(ee)
          }, Je.open(ee, ie.href || ie), Je.onload = function() {
            for (Fe = Je.getAllResponseHeaders().trim().split(/[\r\n]+/), ye(Je, Je); Ue = Fe.shift();) Ue = Ue.split(": "), Je.headers[Ue.shift().toLowerCase()] = Ue.join(": ");
            if ((Ue = Je.headers["content-type"]) && ~Ue.indexOf("application/json")) try {
              Je.data = JSON.parse(Je.data, He.reviver)
            } catch (ee) {
              return ye(Je, ee), Me(ee)
            }(Je.status >= 400 ? Me : be)(Je)
          }, typeof FormData < "u" && oe instanceof FormData || oe && "object" == typeof oe && (Re["content-type"] = "application/json", oe = JSON.stringify(oe)), Je.withCredentials = !!He.withCredentials, Re) Je.setRequestHeader(Ke, Re[Ke]);
        Je.send(oe), He.signal && He.signal.addEventListener("abort", (function() {
          Je.abort()
        }))
      }))
    }
    He.r(ie), He.d(ie, {
      del: () => Fe,
      get: () => Me,
      patch: () => Ue,
      post: () => Ke,
      put: () => Je,
      send: () => be
    });
    var Me = be.bind(be, "GET"),
      Ke = be.bind(be, "POST"),
      Ue = be.bind(be, "PATCH"),
      Fe = be.bind(be, "DELETE"),
      Je = be.bind(be, "PUT")
  },
  9918: (ee, ie, He) => {
    var ye, be, Me;
    He.r(ie), He.d(ie, {
      ALWAYS: () => Ii,
      C1: () => ge,
      DECIMAL_FIT: () => Gi,
      DECIMAL_ROUND: () => Ni,
      Decoder: () => Fi,
      Encoder: () => ji,
      FLOAT32_OPTIONS: () => qi,
      NEVER: () => si,
      Packr: () => ci,
      RESERVE_START_SPACE: () => eH,
      RESET_BUFFER_MODE: () => Qi,
      REUSE_BUFFER_MODE: () => ri,
      Unpackr: () => we,
      addExtension: () => ui,
      clearSource: () => Ki,
      decode: () => ki,
      decodeIter: () => iH,
      encode: () => ni,
      encodeIter: () => HH,
      isNativeAccelerationEnabled: () => ue,
      mapsAsObjects: () => bH,
      pack: () => Si,
      roundFloat32: () => Ei,
      unpack: () => oi,
      unpackMultiple: () => Ri,
      useRecords: () => yH
    });
    try {
      ye = new TextDecoder
    } catch (MH) {}
    var Ke = 0;
    const Ue = [];
    var Fe, Je, oe, Re, ke, qe = Ue,
      fe = 0,
      Te = {},
      pe = 0,
      Xe = 0,
      ze = [],
      Be = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class Ee {}
    const ge = new Ee;
    ge.name = "MessagePack 0xC1";
    var Oe, de, We, te = !1,
      Ze = 2;
    try {
      new Function("")
    } catch (MH) {
      Ze = 1 / 0
    }
    class we {
      constructor(ee) {
        ee && (!1 === ee.useRecords && void 0 === ee.mapsAsObjects && (ee.mapsAsObjects = !0), ee.sequential && !1 !== ee.trusted && (ee.trusted = !0, ee.structures || 0 == ee.useRecords || (ee.structures = [], ee.maxSharedStructures || (ee.maxSharedStructures = 0))), ee.structures ? ee.structures.sharedLength = ee.structures.length : ee.getStructures && ((ee.structures = []).uninitialized = !0, ee.structures.sharedLength = 0), ee.int64AsNumber && (ee.int64AsType = "number")), Object.assign(this, ee)
      }
      unpack(ee, ie) {
        if (be) return Mi((() => (Ki(), this ? this.unpack(ee, ie) : we.prototype.unpack.call(Be, ee, ie))));
        ee.buffer || ee.constructor !== ArrayBuffer || (ee = "undefined" !== typeof Buffer ? Buffer.from(ee) : new Uint8Array(ee)), "object" === typeof ie ? (Me = ie.end || ee.length, Ke = ie.start || 0) : (Ke = 0, Me = ie > -1 ? ie : ee.length), fe = 0, Xe = 0, Je = null, qe = Ue, oe = null, be = ee;
        try {
          ke = ee.dataView || (ee.dataView = new DataView(ee.buffer, ee.byteOffset, ee.byteLength))
        } catch (MH) {
          if (be = null, ee instanceof Uint8Array) throw MH;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (ee && "object" == typeof ee ? ee.constructor.name : typeof ee))
        }
        if (this instanceof we) {
          if (Te = this, this.structures) return Fe = this.structures, De(ie);
          (!Fe || Fe.length > 0) && (Fe = [])
        } else Te = Be, (!Fe || Fe.length > 0) && (Fe = []);
        return De(ie)
      }
      unpackMultiple(ee, ie) {
        let He, ye = 0;
        try {
          te = !0;
          let be = ee.length,
            Me = this ? this.unpack(ee, be) : Ji.unpack(ee, be);
          if (!ie) {
            for (He = [Me]; Ke < be;) ye = Ke, He.push(De());
            return He
          }
          if (!1 === ie(Me, ye, Ke)) return;
          for (; Ke < be;)
            if (ye = Ke, !1 === ie(De(), ye, Ke)) return
        } catch (MH) {
          throw MH.lastPosition = ye, MH.values = He, MH
        } finally {
          te = !1, Ki()
        }
      }
      _mergeStructures(ee, ie) {
        de && (ee = de.call(this, ee)), ee = ee || [], Object.isFrozen(ee) && (ee = ee.map((ee => ee.slice(0))));
        for (let He = 0, ye = ee.length; He < ye; He++) {
          let ie = ee[He];
          ie && (ie.isShared = !0, He >= 32 && (ie.highByte = He - 32 >> 5))
        }
        ee.sharedLength = ee.length;
        for (let He in ie || [])
          if (He >= 0) {
            let ye = ee[He],
              be = ie[He];
            be && (ye && ((ee.restoreStructures || (ee.restoreStructures = []))[He] = ye), ee[He] = be)
          } return this.structures = ee
      }
      decode(ee, ie) {
        return this.unpack(ee, ie)
      }
    }

    function De(ee) {
      try {
        if (!Te.trusted && !te) {
          let ee = Fe.sharedLength || 0;
          ee < Fe.length && (Fe.length = ee)
        }
        let ie;
        if (Te.randomAccessStructure && be[Ke] < 64 && be[Ke] >= 32 && Oe ? (ie = Oe(be, Ke, Me, Te), be = null, ee && ee.lazy || !ie || (ie = ie.toJSON()), Ke = Me) : ie = Ae(), oe && (Ke = oe.postBundlePosition, oe = null), te && (Fe.restoreStructures = null), Ke == Me) Fe && Fe.restoreStructures && Pe(), Fe = null, be = null, Re && (Re = null);
        else {
          if (Ke > Me) throw new Error("Unexpected end of MessagePack data");
          if (!te) {
            let ee;
            try {
              ee = JSON.stringify(ie, ((ee, ie) => "bigint" === typeof ie ? `${ie}n` : ie)).slice(0, 100)
            } catch (MH) {
              ee = "(JSON view not available " + MH + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + ee)
          }
        }
        return ie
      } catch (MH) {
        throw Fe && Fe.restoreStructures && Pe(), Ki(), (MH instanceof RangeError || MH.message.startsWith("Unexpected end of buffer") || Ke > Me) && (MH.incomplete = !0), MH
      }
    }

    function Pe() {
      for (let ee in Fe.restoreStructures) Fe[ee] = Fe.restoreStructures[ee];
      Fe.restoreStructures = null
    }

    function Ae() {
      let ee = be[Ke++];
      if (ee < 160) {
        if (ee < 128) {
          if (ee < 64) return ee;
          {
            let ie = Fe[63 & ee] || Te.getStructures && ce()[63 & ee];
            return ie ? (ie.read || (ie.read = Ve(ie, 63 & ee)), ie.read()) : ee
          }
        }
        if (ee < 144) {
          if (ee -= 128, Te.mapsAsObjects) {
            let ie = {};
            for (let He = 0; He < ee; He++) {
              let ee = re();
              "__proto__" === ee && (ee = "__proto_"), ie[ee] = Ae()
            }
            return ie
          } {
            let ie = new Map;
            for (let He = 0; He < ee; He++) ie.set(Ae(), Ae());
            return ie
          }
        } {
          ee -= 144;
          let ie = new Array(ee);
          for (let He = 0; He < ee; He++) ie[He] = Ae();
          return Te.freezeData ? Object.freeze(ie) : ie
        }
      }
      if (ee < 192) {
        let ie = ee - 160;
        if (Xe >= Ke) return Je.slice(Ke - pe, (Ke += ie) - pe);
        if (0 == Xe && Me < 140) {
          let ee = ie < 16 ? se(ie) : je(ie);
          if (null != ee) return ee
        }
        return xe(ie)
      } {
        let ie;
        switch (ee) {
          case 192:
            return null;
          case 193:
            return oe ? (ie = Ae(), ie > 0 ? oe[1].slice(oe.position1, oe.position1 += ie) : oe[0].slice(oe.position0, oe.position0 -= ie)) : ge;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (ie = be[Ke++], void 0 === ie) throw new Error("Unexpected end of buffer");
            return he(ie);
          case 197:
            return ie = ke.getUint16(Ke), Ke += 2, he(ie);
          case 198:
            return ie = ke.getUint32(Ke), Ke += 4, he(ie);
          case 199:
            return Ne(be[Ke++]);
          case 200:
            return ie = ke.getUint16(Ke), Ke += 2, Ne(ie);
          case 201:
            return ie = ke.getUint32(Ke), Ke += 4, Ne(ie);
          case 202:
            if (ie = ke.getFloat32(Ke), Te.useFloat32 > 2) {
              let ee = Ui[(127 & be[Ke]) << 1 | be[Ke + 1] >> 7];
              return Ke += 4, (ee * ie + (ie > 0 ? .5 : -.5) | 0) / ee
            }
            return Ke += 4, ie;
          case 203:
            return ie = ke.getFloat64(Ke), Ke += 8, ie;
          case 204:
            return be[Ke++];
          case 205:
            return ie = ke.getUint16(Ke), Ke += 2, ie;
          case 206:
            return ie = ke.getUint32(Ke), Ke += 4, ie;
          case 207:
            return "number" === Te.int64AsType ? (ie = 4294967296 * ke.getUint32(Ke), ie += ke.getUint32(Ke + 4)) : "string" === Te.int64AsType ? ie = ke.getBigUint64(Ke).toString() : "auto" === Te.int64AsType ? (ie = ke.getBigUint64(Ke), ie <= BigInt(2) << BigInt(52) && (ie = Number(ie))) : ie = ke.getBigUint64(Ke), Ke += 8, ie;
          case 208:
            return ke.getInt8(Ke++);
          case 209:
            return ie = ke.getInt16(Ke), Ke += 2, ie;
          case 210:
            return ie = ke.getInt32(Ke), Ke += 4, ie;
          case 211:
            return "number" === Te.int64AsType ? (ie = 4294967296 * ke.getInt32(Ke), ie += ke.getUint32(Ke + 4)) : "string" === Te.int64AsType ? ie = ke.getBigInt64(Ke).toString() : "auto" === Te.int64AsType ? (ie = ke.getBigInt64(Ke), ie >= BigInt(-2) << BigInt(52) && ie <= BigInt(2) << BigInt(52) && (ie = Number(ie))) : ie = ke.getBigInt64(Ke), Ke += 8, ie;
          case 212:
            if (ie = be[Ke++], 114 == ie) return ei(63 & be[Ke++]);
            {
              let ee = ze[ie];
              if (ee) return ee.read ? (Ke++, ee.read(Ae())) : ee.noBuffer ? (Ke++, ee()) : ee(be.subarray(Ke, ++Ke));
              throw new Error("Unknown extension " + ie)
            }
          case 213:
            return ie = be[Ke], 114 == ie ? (Ke++, ei(63 & be[Ke++], be[Ke++])) : Ne(2);
          case 214:
            return Ne(4);
          case 215:
            return Ne(8);
          case 216:
            return Ne(16);
          case 217:
            return ie = be[Ke++], Xe >= Ke ? Je.slice(Ke - pe, (Ke += ie) - pe) : Le(ie);
          case 218:
            return ie = ke.getUint16(Ke), Xe >= (Ke += 2) ? Je.slice(Ke - pe, (Ke += ie) - pe) : Ce(ie);
          case 219:
            return ie = ke.getUint32(Ke), Xe >= (Ke += 4) ? Je.slice(Ke - pe, (Ke += ie) - pe) : ve(ie);
          case 220:
            return ie = ke.getUint16(Ke), Ke += 2, le(ie);
          case 221:
            return ie = ke.getUint32(Ke), Ke += 4, le(ie);
          case 222:
            return ie = ke.getUint16(Ke), Ke += 2, Se(ie);
          case 223:
            return ie = ke.getUint32(Ke), Ke += 4, Se(ie);
          default:
            if (ee >= 224) return ee - 256;
            if (void 0 === ee) {
              let ee = new Error("Unexpected end of MessagePack data");
              throw ee.incomplete = !0, ee
            }
            throw new Error("Unknown MessagePack token " + ee)
        }
      }
    }
    const Ye = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function Ve(ee, ie) {
      function He() {
        if (He.count++ > Ze) {
          let He = ee.read = new Function("r", "return function(){return " + (Te.freezeData ? "Object.freeze" : "") + "({" + ee.map((ee => "__proto__" === ee ? "__proto_:r()" : Ye.test(ee) ? ee + ":r()" : "[" + JSON.stringify(ee) + "]:r()")).join(",") + "})}")(Ae);
          return 0 === ee.highByte && (ee.read = ae(ie, ee.read)), He()
        }
        let ye = {};
        for (let ie = 0, He = ee.length; ie < He; ie++) {
          let He = ee[ie];
          "__proto__" === He && (He = "__proto_"), ye[He] = Ae()
        }
        return Te.freezeData ? Object.freeze(ye) : ye
      }
      return He.count = 0, 0 === ee.highByte ? ae(ie, He) : He
    }
    const ae = (ee, ie) => function() {
      let He = be[Ke++];
      if (0 === He) return ie();
      let ye = ee < 32 ? -(ee + (He << 5)) : ee + (He << 5),
        Me = Fe[ye] || ce()[ye];
      if (!Me) throw new Error("Record id is not defined for " + ye);
      return Me.read || (Me.read = Ve(Me, ee)), Me.read()
    };

    function ce() {
      let ee = Mi((() => (be = null, Te.getStructures())));
      return Fe = Te._mergeStructures(ee, Fe)
    }
    var xe = me,
      Le = me,
      Ce = me,
      ve = me;
    let ue = !1;

    function me(ee) {
      let ie;
      if (ee < 16 && (ie = se(ee))) return ie;
      if (ee > 64 && ye) return ye.decode(be.subarray(Ke, Ke += ee));
      const He = Ke + ee,
        Me = [];
      for (ie = ""; Ke < He;) {
        const ee = be[Ke++];
        if (0 === (128 & ee)) Me.push(ee);
        else if (192 === (224 & ee)) {
          const ie = 63 & be[Ke++];
          Me.push((31 & ee) << 6 | ie)
        } else if (224 === (240 & ee)) {
          const ie = 63 & be[Ke++],
            He = 63 & be[Ke++];
          Me.push((31 & ee) << 12 | ie << 6 | He)
        } else if (240 === (248 & ee)) {
          let ie = (7 & ee) << 18 | (63 & be[Ke++]) << 12 | (63 & be[Ke++]) << 6 | 63 & be[Ke++];
          ie > 65535 && (ie -= 65536, Me.push(ie >>> 10 & 1023 | 55296), ie = 56320 | 1023 & ie), Me.push(ie)
        } else Me.push(ee);
        Me.length >= 4096 && (ie += ne.apply(String, Me), Me.length = 0)
      }
      return Me.length > 0 && (ie += ne.apply(String, Me)), ie
    }

    function le(ee) {
      let ie = new Array(ee);
      for (let He = 0; He < ee; He++) ie[He] = Ae();
      return Te.freezeData ? Object.freeze(ie) : ie
    }

    function Se(ee) {
      if (Te.mapsAsObjects) {
        let ie = {};
        for (let He = 0; He < ee; He++) {
          let ee = re();
          "__proto__" === ee && (ee = "__proto_"), ie[ee] = Ae()
        }
        return ie
      } {
        let ie = new Map;
        for (let He = 0; He < ee; He++) ie.set(Ae(), Ae());
        return ie
      }
    }
    var ne = String.fromCharCode;

    function je(ee) {
      let ie = Ke,
        He = new Array(ee);
      for (let ye = 0; ye < ee; ye++) {
        const ee = be[Ke++];
        if ((128 & ee) > 0) return void(Ke = ie);
        He[ye] = ee
      }
      return ne.apply(String, He)
    }

    function se(ee) {
      if (ee < 4) {
        if (ee < 2) {
          if (0 === ee) return "";
          {
            let ee = be[Ke++];
            return (128 & ee) > 1 ? void(Ke -= 1) : ne(ee)
          }
        } {
          let ie = be[Ke++],
            He = be[Ke++];
          if ((128 & ie) > 0 || (128 & He) > 0) return void(Ke -= 2);
          if (ee < 3) return ne(ie, He);
          let ye = be[Ke++];
          return (128 & ye) > 0 ? void(Ke -= 3) : ne(ie, He, ye)
        }
      } {
        let ie = be[Ke++],
          He = be[Ke++],
          ye = be[Ke++],
          Me = be[Ke++];
        if ((128 & ie) > 0 || (128 & He) > 0 || (128 & ye) > 0 || (128 & Me) > 0) return void(Ke -= 4);
        if (ee < 6) {
          if (4 === ee) return ne(ie, He, ye, Me);
          {
            let ee = be[Ke++];
            return (128 & ee) > 0 ? void(Ke -= 5) : ne(ie, He, ye, Me, ee)
          }
        }
        if (ee < 8) {
          let Ue = be[Ke++],
            Fe = be[Ke++];
          if ((128 & Ue) > 0 || (128 & Fe) > 0) return void(Ke -= 6);
          if (ee < 7) return ne(ie, He, ye, Me, Ue, Fe);
          let Je = be[Ke++];
          return (128 & Je) > 0 ? void(Ke -= 7) : ne(ie, He, ye, Me, Ue, Fe, Je)
        } {
          let Ue = be[Ke++],
            Fe = be[Ke++],
            Je = be[Ke++],
            oe = be[Ke++];
          if ((128 & Ue) > 0 || (128 & Fe) > 0 || (128 & Je) > 0 || (128 & oe) > 0) return void(Ke -= 8);
          if (ee < 10) {
            if (8 === ee) return ne(ie, He, ye, Me, Ue, Fe, Je, oe);
            {
              let ee = be[Ke++];
              return (128 & ee) > 0 ? void(Ke -= 9) : ne(ie, He, ye, Me, Ue, Fe, Je, oe, ee)
            }
          }
          if (ee < 12) {
            let Re = be[Ke++],
              ke = be[Ke++];
            if ((128 & Re) > 0 || (128 & ke) > 0) return void(Ke -= 10);
            if (ee < 11) return ne(ie, He, ye, Me, Ue, Fe, Je, oe, Re, ke);
            let qe = be[Ke++];
            return (128 & qe) > 0 ? void(Ke -= 11) : ne(ie, He, ye, Me, Ue, Fe, Je, oe, Re, ke, qe)
          } {
            let Re = be[Ke++],
              ke = be[Ke++],
              qe = be[Ke++],
              fe = be[Ke++];
            if ((128 & Re) > 0 || (128 & ke) > 0 || (128 & qe) > 0 || (128 & fe) > 0) return void(Ke -= 12);
            if (ee < 14) {
              if (12 === ee) return ne(ie, He, ye, Me, Ue, Fe, Je, oe, Re, ke, qe, fe);
              {
                let ee = be[Ke++];
                return (128 & ee) > 0 ? void(Ke -= 13) : ne(ie, He, ye, Me, Ue, Fe, Je, oe, Re, ke, qe, fe, ee)
              }
            } {
              let Te = be[Ke++],
                pe = be[Ke++];
              if ((128 & Te) > 0 || (128 & pe) > 0) return void(Ke -= 14);
              if (ee < 15) return ne(ie, He, ye, Me, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe);
              let Xe = be[Ke++];
              return (128 & Xe) > 0 ? void(Ke -= 15) : ne(ie, He, ye, Me, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe)
            }
          }
        }
      }
    }

    function Ie() {
      let ee, ie = be[Ke++];
      if (ie < 192) ee = ie - 160;
      else switch (ie) {
        case 217:
          ee = be[Ke++];
          break;
        case 218:
          ee = ke.getUint16(Ke), Ke += 2;
          break;
        case 219:
          ee = ke.getUint32(Ke), Ke += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return me(ee)
    }

    function he(ee) {
      return Te.copyBuffers ? Uint8Array.prototype.slice.call(be, Ke, Ke += ee) : be.subarray(Ke, Ke += ee)
    }

    function Ne(ee) {
      let ie = be[Ke++];
      if (ze[ie]) {
        let He;
        return ze[ie](be.subarray(Ke, He = Ke += ee), (ee => {
          Ke = ee;
          try {
            return Ae()
          } finally {
            Ke = He
          }
        }))
      }
      throw new Error("Unknown extension type " + ie)
    }
    var Ge = new Array(4096);

    function re() {
      let ee = be[Ke++];
      if (!(ee >= 160 && ee < 192)) return Ke--, Qe(Ae());
      if (ee -= 160, Xe >= Ke) return Je.slice(Ke - pe, (Ke += ee) - pe);
      if (!(0 == Xe && Me < 180)) return xe(ee);
      let ie, He = 4095 & (ee << 5 ^ (ee > 1 ? ke.getUint16(Ke) : ee > 0 ? be[Ke] : 0)),
        ye = Ge[He],
        Ue = Ke,
        Fe = Ke + ee - 3,
        oe = 0;
      if (ye && ye.bytes == ee) {
        for (; Ue < Fe;) {
          if (ie = ke.getUint32(Ue), ie != ye[oe++]) {
            Ue = 1879048192;
            break
          }
          Ue += 4
        }
        for (Fe += 3; Ue < Fe;)
          if (ie = be[Ue++], ie != ye[oe++]) {
            Ue = 1879048192;
            break
          } if (Ue === Fe) return Ke = Ue, ye.string;
        Fe -= 3, Ue = Ke
      }
      for (ye = [], Ge[He] = ye, ye.bytes = ee; Ue < Fe;) ie = ke.getUint32(Ue), ye.push(ie), Ue += 4;
      for (Fe += 3; Ue < Fe;) ie = be[Ue++], ye.push(ie);
      let Re = ee < 16 ? se(ee) : je(ee);
      return ye.string = null != Re ? Re : xe(ee)
    }

    function Qe(ee) {
      if ("string" === typeof ee) return ee;
      if ("number" === typeof ee || "boolean" === typeof ee || "bigint" === typeof ee) return ee.toString();
      if (null == ee) return ee + "";
      if (Te.allowArraysInMapKeys && Array.isArray(ee) && ee.flat().every((ee => ["string", "number", "boolean", "bigint"].includes(typeof ee)))) return ee.flat().toString();
      throw new Error("Invalid property type for record: " + typeof ee)
    }
    const ei = (ee, ie) => {
      let He = Ae().map(Qe),
        ye = ee;
      void 0 !== ie && (ee = ee < 32 ? -((ie << 5) + ee) : (ie << 5) + ee, He.highByte = ie);
      let be = Fe[ee];
      return be && (be.isShared || te) && ((Fe.restoreStructures || (Fe.restoreStructures = []))[ee] = be), Fe[ee] = He, He.read = Ve(He, ye), He.read()
    };
    ze[0] = () => {}, ze[0].noBuffer = !0, ze[66] = ee => {
      let ie = ee.length,
        He = BigInt(128 & ee[0] ? ee[0] - 256 : ee[0]);
      for (let ye = 1; ye < ie; ye++) He <<= BigInt(8), He += BigInt(ee[ye]);
      return He
    };
    let ii = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    ze[101] = () => {
      let ee = Ae();
      return (ii[ee[0]] || Error)(ee[1], {
        cause: ee[2]
      })
    }, ze[105] = ee => {
      if (!1 === Te.structuredClone) throw new Error("Structured clone extension is disabled");
      let ie = ke.getUint32(Ke - 4);
      Re || (Re = new Map);
      let He, ye = be[Ke];
      He = ye >= 144 && ye < 160 || 220 == ye || 221 == ye ? [] : {};
      let Me = {
        target: He
      };
      Re.set(ie, Me);
      let Ue = Ae();
      return Me.used ? Object.assign(He, Ue) : (Me.target = Ue, Ue)
    }, ze[112] = ee => {
      if (!1 === Te.structuredClone) throw new Error("Structured clone extension is disabled");
      let ie = ke.getUint32(Ke - 4),
        He = Re.get(ie);
      return He.used = !0, He.target
    }, ze[115] = () => new Set(Ae());
    const Hi = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((ee => ee + "Array"));
    let yi = "object" === typeof globalThis ? globalThis : window;
    ze[116] = ee => {
      let ie = ee[0],
        He = Hi[ie];
      if (!He) {
        if (16 === ie) {
          let ie = new ArrayBuffer(ee.length - 1);
          return new Uint8Array(ie).set(ee.subarray(1)), ie
        }
        throw new Error("Could not find typed array for code " + ie)
      }
      return new yi[He](Uint8Array.prototype.slice.call(ee, 1).buffer)
    }, ze[120] = () => {
      let ee = Ae();
      return new RegExp(ee[0], ee[1])
    };
    const bi = [];

    function Mi(ee) {
      We && We();
      let ie = Me,
        He = Ke,
        ye = fe,
        Ue = pe,
        ze = Xe,
        Be = Je,
        Ee = qe,
        ge = Re,
        Oe = oe,
        de = new Uint8Array(be.slice(0, Me)),
        Ze = Fe,
        we = Fe.slice(0, Fe.length),
        De = Te,
        Pe = te,
        Ae = ee();
      return Me = ie, Ke = He, fe = ye, pe = Ue, Xe = ze, Je = Be, qe = Ee, Re = ge, oe = Oe, be = de, te = Pe, (Fe = Ze).splice(0, Fe.length, ...we), Te = De, ke = new DataView(be.buffer, be.byteOffset, be.byteLength), Ae
    }

    function Ki() {
      be = null, Re = null, Fe = null
    }
    ze[98] = ee => {
      let ie = (ee[0] << 24) + (ee[1] << 16) + (ee[2] << 8) + ee[3],
        He = Ke;
      return Ke += ie - ee.length, oe = bi, (oe = [Ie(), Ie()]).position0 = 0, oe.position1 = 0, oe.postBundlePosition = Ke, Ke = He, Ae()
    }, ze[255] = ee => 4 == ee.length ? new Date(1e3 * (16777216 * ee[0] + (ee[1] << 16) + (ee[2] << 8) + ee[3])) : 8 == ee.length ? new Date(((ee[0] << 22) + (ee[1] << 14) + (ee[2] << 6) + (ee[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & ee[3]) + 16777216 * ee[4] + (ee[5] << 16) + (ee[6] << 8) + ee[7])) : 12 == ee.length ? new Date(((ee[0] << 24) + (ee[1] << 16) + (ee[2] << 8) + ee[3]) / 1e6 + 1e3 * ((128 & ee[4] ? -281474976710656 : 0) + 1099511627776 * ee[6] + 4294967296 * ee[7] + 16777216 * ee[8] + (ee[9] << 16) + (ee[10] << 8) + ee[11])) : new Date("invalid");
    const Ui = new Array(147);
    for (let KH = 0; KH < 256; KH++) Ui[KH] = +("1e" + Math.floor(45.15 - .30103 * KH));
    const Fi = we;
    var Ji = new we({
      useRecords: !1
    });
    const oi = Ji.unpack,
      Ri = Ji.unpackMultiple,
      ki = Ji.unpack,
      qi = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let fi, Ti, Xi, zi = new Float32Array(1),
      Bi = new Uint8Array(zi.buffer, 0, 4);

    function Ei(ee) {
      zi[0] = ee;
      let ie = Ui[(127 & Bi[3]) << 1 | Bi[2] >> 7];
      return (ie * ee + (ee > 0 ? .5 : -.5) | 0) / ie
    }
    try {
      fi = new TextEncoder
    } catch (MH) {}
    const gi = "undefined" !== typeof Buffer,
      Oi = gi ? function(ee) {
        return Buffer.allocUnsafeSlow(ee)
      } : Uint8Array,
      di = gi ? Buffer : Uint8Array,
      Wi = gi ? 4294967296 : 2144337920;
    let ti, Zi, wi, Di, Pi, Ai = 0,
      Yi = null;
    const Vi = /[\u0080-\uFFFF]/,
      ai = Symbol("record-id");
    class ci extends we {
      constructor(ee) {
        let ie, He, ye, be;
        super(ee), this.offset = 0;
        let Me = di.prototype.utf8Write ? function(ee, ie) {
            return ti.utf8Write(ee, ie, ti.byteLength - ie)
          } : !(!fi || !fi.encodeInto) && function(ee, ie) {
            return fi.encodeInto(ee, ti.subarray(ie)).written
          },
          Ke = this;
        ee || (ee = {});
        let Ue = ee && ee.sequential,
          Fe = ee.structures || ee.saveStructures,
          Je = ee.maxSharedStructures;
        if (null == Je && (Je = Fe ? 32 : 0), Je > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        ee.structuredClone && void 0 == ee.moreTypes && (this.moreTypes = !0);
        let oe = ee.maxOwnStructures;
        null == oe && (oe = Fe ? 32 : 64), this.structures || 0 == ee.useRecords || (this.structures = []);
        let Re = Je > 32 || oe + Je > 64,
          ke = Je + 64,
          qe = Je + oe + 64;
        if (qe > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let fe = [],
          Te = 0,
          pe = 0;
        this.pack = this.encode = function(ee, Me) {
          if (ti || (ti = new Oi(8192), wi = ti.dataView || (ti.dataView = new DataView(ti.buffer, 0, 8192)), Ai = 0), Di = ti.length - 10, Di - Ai < 2048 ? (ti = new Oi(ti.length), wi = ti.dataView || (ti.dataView = new DataView(ti.buffer, 0, ti.length)), Di = ti.length - 10, Ai = 0) : Ai = Ai + 7 & 2147483640, ie = Ai, Me & eH && (Ai += 255 & Me), be = Ke.structuredClone ? new Map : null, Ke.bundleStrings && "string" !== typeof ee ? (Yi = [], Yi.size = 1 / 0) : Yi = null, ye = Ke.structures, ye) {
            ye.uninitialized && (ye = Ke._mergeStructures(Ke.getStructures()));
            let ee = ye.sharedLength || 0;
            if (ee > Je) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + ye.sharedLength);
            if (!ye.transitions) {
              ye.transitions = Object.create(null);
              for (let ie = 0; ie < ee; ie++) {
                let ee = ye[ie];
                if (!ee) continue;
                let He, be = ye.transitions;
                for (let ie = 0, ye = ee.length; ie < ye; ie++) {
                  let ye = ee[ie];
                  He = be[ye], He || (He = be[ye] = Object.create(null)), be = He
                }
                be[ai] = ie + 64
              }
              this.lastNamedStructuresLength = ee
            }
            Ue || (ye.nextId = ee + 64)
          }
          let Fe;
          He && (He = !1);
          try {
            Ke.randomAccessStructure && ee && ee.constructor && ee.constructor === Object ? we(ee) : Be(ee);
            let He = Yi;
            if (Yi && vi(ie, Be, 0), be && be.idsToInsert) {
              let ee = be.idsToInsert.sort(((ee, ie) => ee.offset > ie.offset ? 1 : -1)),
                ye = ee.length,
                Me = -1;
              for (; He && ye > 0;) {
                let be = ee[--ye].offset + ie;
                be < He.stringsPosition + ie && -1 === Me && (Me = 0), be > He.position + ie ? Me >= 0 && (Me += 6) : (Me >= 0 && (wi.setUint32(He.position + ie, wi.getUint32(He.position + ie) + Me), Me = -1), He = He.previous, ye++)
              }
              Me >= 0 && He && wi.setUint32(He.position + ie, wi.getUint32(He.position + ie) + Me), Ai += 6 * ee.length, Ai > Di && We(Ai), Ke.offset = Ai;
              let Ue = function(ee, ie) {
                let He, ye = 6 * ie.length,
                  be = ee.length - ye;
                for (; He = ie.pop();) {
                  let ie = He.offset,
                    Me = He.id;
                  ee.copyWithin(ie + ye, ie, be), ye -= 6;
                  let Ke = ie + ye;
                  ee[Ke++] = 214, ee[Ke++] = 105, ee[Ke++] = Me >> 24, ee[Ke++] = Me >> 16 & 255, ee[Ke++] = Me >> 8 & 255, ee[Ke++] = 255 & Me, be = ie
                }
                return ee
              }(ti.subarray(ie, Ai), ee);
              return be = null, Ue
            }
            return Ke.offset = Ai, Me & ri ? (ti.start = ie, ti.end = Ai, ti) : ti.subarray(ie, Ai)
          } catch (MH) {
            throw Fe = MH, MH
          } finally {
            if (ye && (Xe(), He && Ke.saveStructures)) {
              let He = ye.sharedLength || 0,
                be = ti.subarray(ie, Ai),
                Ue = mi(ye, Ke);
              if (!Fe) return !1 === Ke.saveStructures(Ue, Ue.isCompatible) ? Ke.pack(ee, Me) : (Ke.lastNamedStructuresLength = He, ti.length > 1073741824 && (ti = null), be)
            }
            ti.length > 1073741824 && (ti = null), Me & Qi && (Ai = ie)
          }
        };
        const Xe = () => {
            pe < 10 && pe++;
            let ee = ye.sharedLength || 0;
            if (ye.length > ee && !Ue && (ye.length = ee), Te > 1e4) ye.transitions = null, pe = 0, Te = 0, fe.length > 0 && (fe = []);
            else if (fe.length > 0 && !Ue) {
              for (let ee = 0, ie = fe.length; ee < ie; ee++) fe[ee][ai] = 0;
              fe = []
            }
          },
          ze = ee => {
            var ie = ee.length;
            ie < 16 ? ti[Ai++] = 144 | ie : ie < 65536 ? (ti[Ai++] = 220, ti[Ai++] = ie >> 8, ti[Ai++] = 255 & ie) : (ti[Ai++] = 221, wi.setUint32(Ai, ie), Ai += 4);
            for (let He = 0; He < ie; He++) Be(ee[He])
          },
          Be = ee => {
            Ai > Di && (ti = We(Ai));
            var He, ye = typeof ee;
            if ("string" === ye) {
              let ye, be = ee.length;
              if (Yi && be >= 4 && be < 4096) {
                if ((Yi.size += be) > 21760) {
                  let ee, He, ye = (Yi[0] ? 3 * Yi[0].length + Yi[1].length : 0) + 10;
                  Ai + ye > Di && (ti = We(Ai + ye)), Yi.position ? (He = Yi, ti[Ai] = 200, Ai += 3, ti[Ai++] = 98, ee = Ai - ie, Ai += 4, vi(ie, Be, 0), wi.setUint16(ee + ie - 3, Ai - ie - ee)) : (ti[Ai++] = 214, ti[Ai++] = 98, ee = Ai - ie, Ai += 4), Yi = ["", ""], Yi.previous = He, Yi.size = 0, Yi.position = ee
                }
                let He = Vi.test(ee);
                return Yi[He ? 0 : 1] += ee, ti[Ai++] = 193, void Be(He ? -be : be)
              }
              ye = be < 32 ? 1 : be < 256 ? 2 : be < 65536 ? 3 : 5;
              let Ke = 3 * be;
              if (Ai + Ke > Di && (ti = We(Ai + Ke)), be < 64 || !Me) {
                let ie, Me, Ke, Ue = Ai + ye;
                for (ie = 0; ie < be; ie++) Me = ee.charCodeAt(ie), Me < 128 ? ti[Ue++] = Me : Me < 2048 ? (ti[Ue++] = Me >> 6 | 192, ti[Ue++] = 63 & Me | 128) : 55296 === (64512 & Me) && 56320 === (64512 & (Ke = ee.charCodeAt(ie + 1))) ? (Me = 65536 + ((1023 & Me) << 10) + (1023 & Ke), ie++, ti[Ue++] = Me >> 18 | 240, ti[Ue++] = Me >> 12 & 63 | 128, ti[Ue++] = Me >> 6 & 63 | 128, ti[Ue++] = 63 & Me | 128) : (ti[Ue++] = Me >> 12 | 224, ti[Ue++] = Me >> 6 & 63 | 128, ti[Ue++] = 63 & Me | 128);
                He = Ue - Ai - ye
              } else He = Me(ee, Ai + ye);
              He < 32 ? ti[Ai++] = 160 | He : He < 256 ? (ye < 2 && ti.copyWithin(Ai + 2, Ai + 1, Ai + 1 + He), ti[Ai++] = 217, ti[Ai++] = He) : He < 65536 ? (ye < 3 && ti.copyWithin(Ai + 3, Ai + 2, Ai + 2 + He), ti[Ai++] = 218, ti[Ai++] = He >> 8, ti[Ai++] = 255 & He) : (ye < 5 && ti.copyWithin(Ai + 5, Ai + 3, Ai + 3 + He), ti[Ai++] = 219, wi.setUint32(Ai, He), Ai += 4), Ai += He
            } else if ("number" === ye)
              if (ee >>> 0 === ee) ee < 32 || ee < 128 && !1 === this.useRecords || ee < 64 && !this.randomAccessStructure ? ti[Ai++] = ee : ee < 256 ? (ti[Ai++] = 204, ti[Ai++] = ee) : ee < 65536 ? (ti[Ai++] = 205, ti[Ai++] = ee >> 8, ti[Ai++] = 255 & ee) : (ti[Ai++] = 206, wi.setUint32(Ai, ee), Ai += 4);
              else if ((ee | 0) === ee) ee >= -32 ? ti[Ai++] = 256 + ee : ee >= -128 ? (ti[Ai++] = 208, ti[Ai++] = ee + 256) : ee >= -32768 ? (ti[Ai++] = 209, wi.setInt16(Ai, ee), Ai += 2) : (ti[Ai++] = 210, wi.setInt32(Ai, ee), Ai += 4);
            else {
              let ie;
              if ((ie = this.useFloat32) > 0 && ee < 4294967296 && ee >= -2147483648) {
                let He;
                if (ti[Ai++] = 202, wi.setFloat32(Ai, ee), ie < 4 || ((He = ee * Ui[(127 & ti[Ai]) << 1 | ti[Ai + 1] >> 7]) | 0) === He) return void(Ai += 4);
                Ai--
              }
              ti[Ai++] = 203, wi.setFloat64(Ai, ee), Ai += 8
            } else if ("object" === ye || "function" === ye)
              if (ee) {
                if (be) {
                  let He = be.get(ee);
                  if (He) {
                    if (!He.id) {
                      let ee = be.idsToInsert || (be.idsToInsert = []);
                      He.id = ee.push(He)
                    }
                    return ti[Ai++] = 214, ti[Ai++] = 112, wi.setUint32(Ai, He.id), void(Ai += 4)
                  }
                  be.set(ee, {
                    offset: Ai - ie
                  })
                }
                let Me = ee.constructor;
                if (Me === Object) de(ee);
                else if (Me === Array) ze(ee);
                else if (Me === Map)
                  if (this.mapAsEmptyObject) ti[Ai++] = 128;
                  else {
                    (He = ee.size) < 16 ? ti[Ai++] = 128 | He : He < 65536 ? (ti[Ai++] = 222, ti[Ai++] = He >> 8, ti[Ai++] = 255 & He) : (ti[Ai++] = 223, wi.setUint32(Ai, He), Ai += 4);
                    for (let [ie, He] of ee) Be(ie), Be(He)
                  }
                else {
                  for (let ie = 0, He = Ti.length; ie < He; ie++) {
                    if (ee instanceof Xi[ie]) {
                      let He = Ti[ie];
                      if (He.write) {
                        He.type && (ti[Ai++] = 212, ti[Ai++] = He.type, ti[Ai++] = 0);
                        let ie = He.write.call(this, ee);
                        return void(ie === ee ? Array.isArray(ee) ? ze(ee) : de(ee) : Be(ie))
                      }
                      let ye, be = ti,
                        Me = wi,
                        Ke = Ai;
                      ti = null;
                      try {
                        ye = He.pack.call(this, ee, (ee => (ti = be, be = null, Ai += ee, Ai > Di && We(Ai), {
                          target: ti,
                          targetView: wi,
                          position: Ai - ee
                        })), Be)
                      } finally {
                        be && (ti = be, wi = Me, Ai = Ke, Di = ti.length - 10)
                      }
                      return void(ye && (ye.length + Ai > Di && We(ye.length + Ai), Ai = Ci(ye, ti, Ai, He.type)))
                    }
                  }
                  if (Array.isArray(ee)) ze(ee);
                  else {
                    if (ee.toJSON) {
                      const ie = ee.toJSON();
                      if (ie !== ee) return Be(ie)
                    }
                    if ("function" === ye) return Be(this.writeFunction && this.writeFunction(ee));
                    de(ee)
                  }
                }
              } else ti[Ai++] = 192;
            else if ("boolean" === ye) ti[Ai++] = ee ? 195 : 194;
            else if ("bigint" === ye) {
              if (ee < BigInt(1) << BigInt(63) && ee >= -(BigInt(1) << BigInt(63))) ti[Ai++] = 211, wi.setBigInt64(Ai, ee);
              else if (ee < BigInt(1) << BigInt(64) && ee > 0) ti[Ai++] = 207, wi.setBigUint64(Ai, ee);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Be(ee.toString());
                  if (this.useBigIntExtension && ee < BigInt(2) ** BigInt(1023) && ee > -(BigInt(2) ** BigInt(1023))) {
                    ti[Ai++] = 199, Ai++, ti[Ai++] = 66;
                    let ie, He = [];
                    do {
                      let ye = ee & BigInt(255);
                      ie = (ye & BigInt(128)) === (ee < BigInt(0) ? BigInt(128) : BigInt(0)), He.push(ye), ee >>= BigInt(8)
                    } while (ee !== BigInt(0) && ee !== BigInt(-1) || !ie);
                    ti[Ai - 2] = He.length;
                    for (let ee = He.length; ee > 0;) ti[Ai++] = Number(He[--ee]);
                    return
                  }
                  throw new RangeError(ee + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                ti[Ai++] = 203, wi.setFloat64(Ai, Number(ee))
              }
              Ai += 8
            } else {
              if ("undefined" !== ye) throw new Error("Unknown type: " + ye);
              this.encodeUndefinedAsNil ? ti[Ai++] = 192 : (ti[Ai++] = 212, ti[Ai++] = 0, ti[Ai++] = 0)
            }
          },
          Ee = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? ee => {
            let ie;
            if (this.skipValues) {
              ie = [];
              for (let He in ee) "function" === typeof ee.hasOwnProperty && !ee.hasOwnProperty(He) || this.skipValues.includes(ee[He]) || ie.push(He)
            } else ie = Object.keys(ee);
            let He, ye = ie.length;
            if (ye < 16 ? ti[Ai++] = 128 | ye : ye < 65536 ? (ti[Ai++] = 222, ti[Ai++] = ye >> 8, ti[Ai++] = 255 & ye) : (ti[Ai++] = 223, wi.setUint32(Ai, ye), Ai += 4), this.coercibleKeyAsNumber)
              for (let be = 0; be < ye; be++) {
                He = ie[be];
                let ye = Number(He);
                Be(isNaN(ye) ? He : ye), Be(ee[He])
              } else
                for (let be = 0; be < ye; be++) Be(He = ie[be]), Be(ee[He])
          } : ee => {
            ti[Ai++] = 222;
            let He = Ai - ie;
            Ai += 2;
            let ye = 0;
            for (let ie in ee)("function" !== typeof ee.hasOwnProperty || ee.hasOwnProperty(ie)) && (Be(ie), Be(ee[ie]), ye++);
            if (ye > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            ti[He++ + ie] = ye >> 8, ti[He + ie] = 255 & ye
          },
          ge = !1 === this.useRecords ? Ee : ee.progressiveRecords && !Re ? ee => {
            let He, be, Me = ye.transitions || (ye.transitions = Object.create(null)),
              Ke = Ai++ - ie;
            for (let Ue in ee)
              if ("function" !== typeof ee.hasOwnProperty || ee.hasOwnProperty(Ue)) {
                if (He = Me[Ue], He) Me = He;
                else {
                  let Fe = Object.keys(ee),
                    Je = Me;
                  Me = ye.transitions;
                  let oe = 0;
                  for (let ee = 0, ie = Fe.length; ee < ie; ee++) {
                    let ie = Fe[ee];
                    He = Me[ie], He || (He = Me[ie] = Object.create(null), oe++), Me = He
                  }
                  Ke + ie + 1 == Ai ? (Ai--, te(Me, Fe, oe)) : Ze(Me, Fe, Ke, oe), be = !0, Me = Je[Ue]
                }
                Be(ee[Ue])
              } if (!be) {
              let He = Me[ai];
              He ? ti[Ke + ie] = He : Ze(Me, Object.keys(ee), Ke, 0)
            }
          } : ee => {
            let ie, He = ye.transitions || (ye.transitions = Object.create(null)),
              be = 0;
            for (let ye in ee)("function" !== typeof ee.hasOwnProperty || ee.hasOwnProperty(ye)) && (ie = He[ye], ie || (ie = He[ye] = Object.create(null), be++), He = ie);
            let Me = He[ai];
            Me ? Me >= 96 && Re ? (ti[Ai++] = 96 + (31 & (Me -= 96)), ti[Ai++] = Me >> 5) : ti[Ai++] = Me : te(He, He.__keys__ || Object.keys(ee), be);
            for (let ye in ee)("function" !== typeof ee.hasOwnProperty || ee.hasOwnProperty(ye)) && Be(ee[ye])
          },
          Oe = "function" == typeof this.useRecords && this.useRecords,
          de = Oe ? ee => {
            Oe(ee) ? ge(ee) : Ee(ee)
          } : ge,
          We = ee => {
            let He;
            if (ee > 16777216) {
              if (ee - ie > Wi) throw new Error("Packed buffer would be larger than maximum buffer size");
              He = Math.min(Wi, 4096 * Math.round(Math.max((ee - ie) * (ee > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else He = 1 + (Math.max(ee - ie << 2, ti.length - 1) >> 12) << 12;
            let ye = new Oi(He);
            return wi = ye.dataView || (ye.dataView = new DataView(ye.buffer, 0, He)), ee = Math.min(ee, ti.length), ti.copy ? ti.copy(ye, 0, ie, ee) : ye.set(ti.slice(ie, ee)), Ai -= ie, ie = 0, Di = ye.length - 10, ti = ye
          },
          te = (ee, ie, be) => {
            let Me = ye.nextId;
            Me || (Me = 64), Me < ke && this.shouldShareStructure && !this.shouldShareStructure(ie) ? (Me = ye.nextOwnId, Me < qe || (Me = ke), ye.nextOwnId = Me + 1) : (Me >= qe && (Me = ke), ye.nextId = Me + 1);
            let Ke = ie.highByte = Me >= 96 && Re ? Me - 96 >> 5 : -1;
            ee[ai] = Me, ee.__keys__ = ie, ye[Me - 64] = ie, Me < ke ? (ie.isShared = !0, ye.sharedLength = Me - 63, He = !0, Ke >= 0 ? (ti[Ai++] = 96 + (31 & Me), ti[Ai++] = Ke) : ti[Ai++] = Me) : (Ke >= 0 ? (ti[Ai++] = 213, ti[Ai++] = 114, ti[Ai++] = 96 + (31 & Me), ti[Ai++] = Ke) : (ti[Ai++] = 212, ti[Ai++] = 114, ti[Ai++] = Me), be && (Te += pe * be), fe.length >= oe && (fe.shift()[ai] = 0), fe.push(ee), Be(ie))
          },
          Ze = (ee, He, ye, be) => {
            let Me = ti,
              Ke = Ai,
              Ue = Di,
              Fe = ie;
            ti = Zi, Ai = 0, ie = 0, ti || (Zi = ti = new Oi(8192)), Di = ti.length - 10, te(ee, He, be), Zi = ti;
            let Je = Ai;
            if (ti = Me, Ai = Ke, Di = Ue, ie = Fe, Je > 1) {
              let ee = Ai + Je - 1;
              ee > Di && We(ee);
              let He = ye + ie;
              ti.copyWithin(He + Je, He + 1, Ai), ti.set(Zi.slice(0, Je), He), Ai = ee
            } else ti[ye + ie] = Zi[0]
          },
          we = ee => {
            let be = Pi(ee, ti, ie, Ai, ye, We, ((ee, ie, ye) => {
              if (ye) return He = !0;
              Ai = ie;
              let be = ti;
              return Be(ee), Xe(), be !== ti ? {
                position: Ai,
                targetView: wi,
                target: ti
              } : Ai
            }), this);
            if (0 === be) return de(ee);
            Ai = be
          }
      }
      useBuffer(ee) {
        ti = ee, wi = ti.dataView || (ti.dataView = new DataView(ti.buffer, ti.byteOffset, ti.byteLength)), Ai = 0
      }
      set position(ee) {
        Ai = ee
      }
      get position() {
        return Ai
      }
      set buffer(ee) {
        ti = ee
      }
      get buffer() {
        return ti
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function xi(ee, ie, He, ye) {
      let be = ee.byteLength;
      if (be + 1 < 256) {
        var {
          target: Me,
          position: Ke
        } = He(4 + be);
        Me[Ke++] = 199, Me[Ke++] = be + 1
      } else if (be + 1 < 65536) {
        var {
          target: Me,
          position: Ke
        } = He(5 + be);
        Me[Ke++] = 200, Me[Ke++] = be + 1 >> 8, Me[Ke++] = be + 1 & 255
      } else {
        var {
          target: Me,
          position: Ke,
          targetView: Ue
        } = He(7 + be);
        Me[Ke++] = 201, Ue.setUint32(Ke, be + 1), Ke += 4
      }
      Me[Ke++] = 116, Me[Ke++] = ie, ee.buffer || (ee = new Uint8Array(ee)), Me.set(new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength), Ke)
    }

    function Li(ee, ie) {
      let He = ee.byteLength;
      var ye, be;
      if (He < 256) {
        var {
          target: ye,
          position: be
        } = ie(He + 2);
        ye[be++] = 196, ye[be++] = He
      } else if (He < 65536) {
        var {
          target: ye,
          position: be
        } = ie(He + 3);
        ye[be++] = 197, ye[be++] = He >> 8, ye[be++] = 255 & He
      } else {
        var {
          target: ye,
          position: be,
          targetView: Me
        } = ie(He + 5);
        ye[be++] = 198, Me.setUint32(be, He), be += 4
      }
      ye.set(ee, be)
    }

    function Ci(ee, ie, He, ye) {
      let be = ee.length;
      switch (be) {
        case 1:
          ie[He++] = 212;
          break;
        case 2:
          ie[He++] = 213;
          break;
        case 4:
          ie[He++] = 214;
          break;
        case 8:
          ie[He++] = 215;
          break;
        case 16:
          ie[He++] = 216;
          break;
        default:
          be < 256 ? (ie[He++] = 199, ie[He++] = be) : be < 65536 ? (ie[He++] = 200, ie[He++] = be >> 8, ie[He++] = 255 & be) : (ie[He++] = 201, ie[He++] = be >> 24, ie[He++] = be >> 16 & 255, ie[He++] = be >> 8 & 255, ie[He++] = 255 & be)
      }
      return ie[He++] = ye, ie.set(ee, He), He += be
    }

    function vi(ee, ie, He) {
      if (Yi.length > 0) {
        wi.setUint32(Yi.position + ee, Ai + He - Yi.position - ee), Yi.stringsPosition = Ai - ee;
        let ye = Yi;
        Yi = null, ie(ye[0]), ie(ye[1])
      }
    }

    function ui(ee) {
      if (ee.Class) {
        if (!ee.pack && !ee.write) throw new Error("Extension has no pack or write function");
        if (ee.pack && !ee.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        Xi.unshift(ee.Class), Ti.unshift(ee)
      }! function(ee) {
        ee.unpack ? ze[ee.type] = ee.unpack : ze[ee.type] = ee
      }(ee)
    }

    function mi(ee, ie) {
      return ee.isCompatible = ee => {
        let He = !ee || (ie.lastNamedStructuresLength || 0) === ee.length;
        return He || ie._mergeStructures(ee), He
      }, ee
    }
    Xi = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Ee], Ti = [{
      pack(ee, ie, He) {
        let ye = ee.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === ee.getMilliseconds()) && ye >= 0 && ye < 4294967296) {
          let {
            target: ee,
            targetView: He,
            position: be
          } = ie(6);
          ee[be++] = 214, ee[be++] = 255, He.setUint32(be, ye)
        } else if (ye > 0 && ye < 4294967296) {
          let {
            target: He,
            targetView: be,
            position: Me
          } = ie(10);
          He[Me++] = 215, He[Me++] = 255, be.setUint32(Me, 4e6 * ee.getMilliseconds() + (ye / 1e3 / 4294967296 | 0)), be.setUint32(Me + 4, ye)
        } else if (isNaN(ye)) {
          if (this.onInvalidDate) return ie(0), He(this.onInvalidDate());
          let {
            target: ee,
            targetView: ye,
            position: be
          } = ie(3);
          ee[be++] = 212, ee[be++] = 255, ee[be++] = 255
        } else {
          let {
            target: He,
            targetView: be,
            position: Me
          } = ie(15);
          He[Me++] = 199, He[Me++] = 12, He[Me++] = 255, be.setUint32(Me, 1e6 * ee.getMilliseconds()), be.setBigInt64(Me + 4, BigInt(Math.floor(ye)))
        }
      }
    }, {
      pack(ee, ie, He) {
        if (this.setAsEmptyObject) return ie(0), He({});
        let ye = Array.from(ee),
          {
            target: be,
            position: Me
          } = ie(this.moreTypes ? 3 : 0);
        this.moreTypes && (be[Me++] = 212, be[Me++] = 115, be[Me++] = 0), He(ye)
      }
    }, {
      pack(ee, ie, He) {
        let {
          target: ye,
          position: be
        } = ie(this.moreTypes ? 3 : 0);
        this.moreTypes && (ye[be++] = 212, ye[be++] = 101, ye[be++] = 0), He([ee.name, ee.message, ee.cause])
      }
    }, {
      pack(ee, ie, He) {
        let {
          target: ye,
          position: be
        } = ie(this.moreTypes ? 3 : 0);
        this.moreTypes && (ye[be++] = 212, ye[be++] = 120, ye[be++] = 0), He([ee.source, ee.flags])
      }
    }, {
      pack(ee, ie) {
        this.moreTypes ? xi(ee, 16, ie) : Li(gi ? Buffer.from(ee) : new Uint8Array(ee), ie)
      }
    }, {
      pack(ee, ie) {
        let He = ee.constructor;
        He !== di && this.moreTypes ? xi(ee, Hi.indexOf(He.name), ie) : Li(ee, ie)
      }
    }, {
      pack(ee, ie) {
        let {
          target: He,
          position: ye
        } = ie(1);
        He[ye] = 193
      }
    }];
    let li = new ci({
      useRecords: !1
    });
    const Si = li.pack,
      ni = li.pack,
      ji = ci,
      {
        NEVER: si,
        ALWAYS: Ii,
        DECIMAL_ROUND: Ni,
        DECIMAL_FIT: Gi
      } = qi,
      ri = 512,
      Qi = 1024,
      eH = 2048;
    const iH = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!ee || "object" !== typeof ee) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const He = new we(ie);
        let ye;
        const be = ee => {
          let ie;
          ye && (ee = Buffer.concat([ye, ee]), ye = void 0);
          try {
            ie = He.unpackMultiple(ee)
          } catch (be) {
            if (!be.incomplete) throw be;
            ye = ee.slice(be.lastPosition), ie = be.values
          }
          return ie
        };
        return "function" === typeof ee[Symbol.iterator] ? function*() {
          for (const ie of ee) yield* be(ie)
        }() : "function" === typeof ee[Symbol.asyncIterator] ? async function*() {
          for await (const ie of ee) yield* be(ie)
        }(): void 0
      },
      HH = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (ee && "object" === typeof ee) {
          if ("function" === typeof ee[Symbol.iterator]) return function*(ee, ie) {
            const He = new ci(ie);
            for (const ye of ee) yield He.pack(ye)
          }(ee, ie);
          if ("function" === typeof ee.then || "function" === typeof ee[Symbol.asyncIterator]) return async function*(ee, ie) {
            const He = new ci(ie);
            for await (const ye of ee) yield He.pack(ye)
          }(ee, ie);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      yH = !1,
      bH = !0
  },
  9870: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      $changes: () => Te,
      $childType: () => pe,
      $decoder: () => oe,
      $deleteByIndex: () => qe,
      $encoder: () => Je,
      $filter: () => Re,
      $getByIndex: () => ke,
      $numFields: () => Ze,
      $refId: () => Ue,
      $track: () => Fe,
      $values: () => ge,
      ArraySchema: () => by,
      Callbacks: () => bb,
      ChangeTree: () => YH,
      CollectionSchema: () => Uy,
      Decoder: () => Ny,
      Encoder: () => jy,
      FieldBuilder: () => oy,
      MapSchema: () => Ky,
      Metadata: () => Ni,
      OPERATION: () => be,
      Reflection: () => eb,
      ReflectionField: () => ry,
      ReflectionType: () => Qy,
      Root: () => Vy,
      Schema: () => Ay,
      SetSchema: () => Fy,
      StateCallbackStrategy: () => yb,
      StateView: () => Cy,
      StreamSchema: () => Jy,
      TypeContext: () => mi,
      createPool: () => Kb,
      decode: () => Ei,
      decodeKeyValueOperation: () => rH,
      decodeSchemaOperation: () => GH,
      defineCustomTypes: () => Wi,
      defineTypes: () => wy,
      deprecated: () => ty,
      dumpChanges: () => Py,
      encode: () => ii,
      encodeArray: () => uH,
      encodeIndexedEntry: () => CH,
      encodeKeyValueOperation: () => vH,
      encodeMapEntry: () => LH,
      encodeSchemaOperation: () => xH,
      Df: () => Xy,
      fullStateOnly: () => gy,
      getDecoderStateCallbacks: () => ib,
      getEncodeDescriptor: () => HH,
      getRawChangesCallback: () => Hb,
      isBuilder: () => Ry,
      patchOnly: () => Ey,
      registerType: () => di,
      schema: () => Dy,
      t: () => Ty,
      type: () => Oy,
      unreliable: () => By,
      view: () => zy
    });
    const ye = 255;
    var be;

    function Me(ee) {
      Object.defineProperty(ee, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(ee) {
      ee[ee.ADD = 128] = "ADD", ee[ee.REPLACE = 0] = "REPLACE", ee[ee.DELETE = 64] = "DELETE", ee[ee.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", ee[ee.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", ee[ee.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", ee[ee.CLEAR = 10] = "CLEAR", ee[ee.REVERSE = 15] = "REVERSE", ee[ee.MOVE = 32] = "MOVE", ee[ee.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", ee[ee.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(be || (be = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Ke = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const ee = "colyseus.symbolRegistry",
        ie = Ke[ee] || (Ke[ee] = Object.create(null));
      Symbol.for = function(ee) {
        return ie[ee] || (ie[ee] = Symbol(ee))
      }, Symbol.keyFor = function(ee) {
        for (const He in ie)
          if (ie[He] === ee) return He
      }
    }
    const Ue = Symbol.for("$refId"),
      Fe = "~track",
      Je = "~encoder",
      oe = "~decoder",
      Re = "~filter",
      ke = "~getByIndex",
      qe = "~deleteByIndex",
      fe = "~resyncPrune",
      Te = Symbol.for("$changes"),
      pe = Symbol.for("$childType"),
      Xe = Symbol.for("$proxyTarget"),
      ze = "~onEncodeEnd",
      Be = "~reset",
      Ee = "~onDecodeEnd",
      ge = Symbol.for("$values"),
      Oe = "~builder",
      de = "~descriptors",
      We = "~__encodeDescriptor",
      te = "~encoders",
      Ze = "~__numFields",
      we = "~__refTypeFieldIndexes",
      De = "~__viewFieldIndexes",
      Pe = "$__fieldIndexesByViewTag",
      Ae = "~__unreliableFieldIndexes",
      Ye = "~__patchOnlyFieldIndexes",
      Ve = "~__fullSyncSkipIndexes",
      ae = "~__fullStateOnlyFieldIndexes",
      ce = "~__streamFieldIndexes",
      xe = "~__streamPriorities";
    let Le;
    try {
      Le = new TextEncoder
    } catch (Ub) {}
    const Ce = new ArrayBuffer(8),
      ve = new Int32Array(Ce),
      ue = new Float32Array(Ce),
      me = new Float64Array(Ce),
      le = new BigInt64Array(Ce),
      Se = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(ee, ie) {
        for (var He = 0, ye = 0, be = 0, Me = ee.length; be < Me; be++)(He = ee.charCodeAt(be)) < 128 ? ye += 1 : He < 2048 ? ye += 2 : He < 55296 || He >= 57344 ? ye += 3 : (be++, ye += 4);
        return ye
      };

    function ne(ee, ie, He) {
      for (var ye = 0, be = 0, Me = ie.length; be < Me; be++)(ye = ie.charCodeAt(be)) < 128 ? ee[He.offset++] = ye : ye < 2048 ? (ee[He.offset] = 192 | ye >> 6, ee[He.offset + 1] = 128 | 63 & ye, He.offset += 2) : ye < 55296 || ye >= 57344 ? (ee[He.offset] = 224 | ye >> 12, ee[He.offset + 1] = 128 | ye >> 6 & 63, ee[He.offset + 2] = 128 | 63 & ye, He.offset += 3) : (be++, ye = 65536 + ((1023 & ye) << 10 | 1023 & ie.charCodeAt(be)), ee[He.offset] = 240 | ye >> 18, ee[He.offset + 1] = 128 | ye >> 12 & 63, ee[He.offset + 2] = 128 | ye >> 6 & 63, ee[He.offset + 3] = 128 | 63 & ye, He.offset += 4)
    }

    function je(ee, ie, He) {
      ee[He.offset++] = 255 & ie
    }

    function se(ee, ie, He) {
      ee[He.offset++] = 255 & ie, ee[He.offset++] = ie >> 8 & 255
    }

    function Ie(ee, ie, He) {
      ee[He.offset++] = 255 & ie, ee[He.offset++] = ie >> 8 & 255
    }

    function he(ee, ie, He) {
      ee[He.offset++] = 255 & ie, ee[He.offset++] = ie >> 8 & 255, ee[He.offset++] = ie >> 16 & 255, ee[He.offset++] = ie >> 24 & 255
    }

    function Ne(ee, ie, He) {
      const ye = ie >> 24,
        be = ie >> 16,
        Me = ie >> 8,
        Ke = ie;
      ee[He.offset++] = 255 & Ke, ee[He.offset++] = 255 & Me, ee[He.offset++] = 255 & be, ee[He.offset++] = 255 & ye
    }

    function Ge(ee, ie, He) {
      const ye = Math.floor(ie / Math.pow(2, 32));
      Ne(ee, ie >>> 0, He), Ne(ee, ye, He)
    }

    function re(ee, ie, He) {
      const ye = ie / Math.pow(2, 32) | 0;
      Ne(ee, ie >>> 0, He), Ne(ee, ye, He)
    }

    function Qe(ee, ie, He) {
      ue[0] = ie, he(ee, ve[0], He)
    }

    function ei(ee, ie, He) {
      me[0] = ie, he(ee, ve[0], He), he(ee, ve[1], He)
    }
    const ii = {
        int8: je,
        uint8: function(ee, ie, He) {
          ee[He.offset++] = 255 & ie
        },
        int16: se,
        uint16: Ie,
        int32: he,
        uint32: Ne,
        int64: Ge,
        uint64: re,
        bigint64: function(ee, ie, He) {
          le[0] = BigInt.asIntN(64, ie), he(ee, ve[0], He), he(ee, ve[1], He)
        },
        biguint64: function(ee, ie, He) {
          le[0] = BigInt.asIntN(64, ie), he(ee, ve[0], He), he(ee, ve[1], He)
        },
        float32: Qe,
        float64: ei,
        boolean: function(ee, ie, He) {
          ee[He.offset++] = ie ? 1 : 0
        },
        string: function(ee, ie, He) {
          ie || (ie = "");
          let ye = Se(ie, "utf8"),
            be = 0;
          if (ye < 32) ee[He.offset++] = 160 | ye, be = 1;
          else if (ye < 256) ee[He.offset++] = 217, ee[He.offset++] = ye, be = 2;
          else if (ye < 65536) ee[He.offset++] = 218, Ie(ee, ye, He), be = 3;
          else {
            if (!(ye < 4294967296)) throw new Error("String too long");
            ee[He.offset++] = 219, Ne(ee, ye, He), be = 5
          }
          return ne(ee, ie, He), be + ye
        },
        number: function ee(ie, He, ye) {
          return isNaN(He) ? ee(ie, 0, ye) : isFinite(He) ? He !== (0 | He) ? Math.abs(He) <= 34028235e31 && (ue[0] = He, Math.abs(Math.abs(ue[0]) - Math.abs(He)) < 1e-4) ? (ie[ye.offset++] = 202, Qe(ie, He, ye), 5) : (ie[ye.offset++] = 203, ei(ie, He, ye), 9) : He >= 0 ? He < 128 ? (ie[ye.offset++] = 255 & He, 1) : He < 256 ? (ie[ye.offset++] = 204, ie[ye.offset++] = 255 & He, 2) : He < 65536 ? (ie[ye.offset++] = 205, Ie(ie, He, ye), 3) : He < 4294967296 ? (ie[ye.offset++] = 206, Ne(ie, He, ye), 5) : (ie[ye.offset++] = 207, re(ie, He, ye), 9) : He >= -32 ? (ie[ye.offset++] = 224 | He + 32, 1) : He >= -128 ? (ie[ye.offset++] = 208, je(ie, He, ye), 2) : He >= -32768 ? (ie[ye.offset++] = 209, se(ie, He, ye), 3) : He >= -2147483648 ? (ie[ye.offset++] = 210, he(ie, He, ye), 5) : (ie[ye.offset++] = 211, Ge(ie, He, ye), 9) : ee(ie, He > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, ye)
        },
        utf8Write: ne,
        utf8Length: Se
      },
      Hi = new ArrayBuffer(8),
      yi = new Int32Array(Hi),
      bi = new Float32Array(Hi),
      Mi = new Float64Array(Hi),
      Ki = new BigUint64Array(Hi),
      Ui = new BigInt64Array(Hi);

    function Fi(ee, ie, He) {
      He > ee.length - ie.offset && (He = ee.length - ie.offset);
      for (var ye = "", be = 0, Me = ie.offset, Ke = ie.offset + He; Me < Ke; Me++) {
        var Ue = ee[Me];
        if (0 !== (128 & Ue))
          if (192 !== (224 & Ue))
            if (224 !== (240 & Ue)) {
              if (240 !== (248 & Ue)) {
                console.error("decode.utf8Read(): Invalid byte " + Ue + " at offset " + Me + ". Skip to end of string: " + (ie.offset + He));
                break
              }(be = (7 & Ue) << 18 | (63 & ee[++Me]) << 12 | (63 & ee[++Me]) << 6 | 63 & ee[++Me]) >= 65536 ? (be -= 65536, ye += String.fromCharCode(55296 + (be >>> 10), 56320 + (1023 & be))) : ye += String.fromCharCode(be)
            } else ye += String.fromCharCode((15 & Ue) << 12 | (63 & ee[++Me]) << 6 | 63 & ee[++Me]);
        else ye += String.fromCharCode((31 & Ue) << 6 | 63 & ee[++Me]);
        else ye += String.fromCharCode(Ue)
      }
      return ie.offset += He, ye
    }

    function Ji(ee, ie) {
      return oi(ee, ie) << 24 >> 24
    }

    function oi(ee, ie) {
      return ee[ie.offset++]
    }

    function Ri(ee, ie) {
      return ki(ee, ie) << 16 >> 16
    }

    function ki(ee, ie) {
      return ee[ie.offset++] | ee[ie.offset++] << 8
    }

    function qi(ee, ie) {
      return ee[ie.offset++] | ee[ie.offset++] << 8 | ee[ie.offset++] << 16 | ee[ie.offset++] << 24
    }

    function fi(ee, ie) {
      return qi(ee, ie) >>> 0
    }

    function Ti(ee, ie) {
      return yi[0] = qi(ee, ie), bi[0]
    }

    function Xi(ee, ie) {
      return yi[0] = qi(ee, ie), yi[1] = qi(ee, ie), Mi[0]
    }

    function zi(ee, ie) {
      const He = fi(ee, ie);
      return qi(ee, ie) * Math.pow(2, 32) + He
    }

    function Bi(ee, ie) {
      const He = fi(ee, ie);
      return fi(ee, ie) * Math.pow(2, 32) + He
    }
    const Ei = {
        utf8Read: Fi,
        int8: Ji,
        uint8: oi,
        int16: Ri,
        uint16: ki,
        int32: qi,
        uint32: fi,
        float32: Ti,
        float64: Xi,
        int64: zi,
        uint64: Bi,
        bigint64: function(ee, ie) {
          return yi[0] = qi(ee, ie), yi[1] = qi(ee, ie), Ui[0]
        },
        biguint64: function(ee, ie) {
          return yi[0] = qi(ee, ie), yi[1] = qi(ee, ie), Ki[0]
        },
        boolean: function(ee, ie) {
          return oi(ee, ie) > 0
        },
        string: function(ee, ie) {
          const He = ee[ie.offset++];
          let ye;
          return He < 192 ? ye = 31 & He : 217 === He ? ye = oi(ee, ie) : 218 === He ? ye = ki(ee, ie) : 219 === He && (ye = fi(ee, ie)), Fi(ee, ie, ye)
        },
        number: function(ee, ie) {
          const He = ee[ie.offset++];
          return He < 128 ? He : 202 === He ? Ti(ee, ie) : 203 === He ? Xi(ee, ie) : 204 === He ? oi(ee, ie) : 205 === He ? ki(ee, ie) : 206 === He ? fi(ee, ie) : 207 === He ? Bi(ee, ie) : 208 === He ? Ji(ee, ie) : 209 === He ? Ri(ee, ie) : 210 === He ? qi(ee, ie) : 211 === He ? zi(ee, ie) : He > 223 ? -1 * (255 - He + 1) : void 0
        },
        stringCheck: function(ee, ie) {
          const He = ee[ie.offset];
          return He < 192 && He > 160 || 217 === He || 218 === He || 219 === He
        }
      },
      gi = {},
      Oi = new Map;

    function di(ee, ie) {
      ie.constructor && (Object.prototype.hasOwnProperty.call(ie, "constructor") && null == ie.constructor[Symbol.metadata] && Me(ie.constructor), Oi.set(ie.constructor, ee), gi[ee] = ie), ie.encode && (ii[ee] = ie.encode), ie.decode && (Ei[ee] = ie.decode)
    }

    function Wi(ee) {
      for (const ie in ee) di(ie, ee[ie]);
      return ee => Oy(ee)
    }
    const ti = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function Zi() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function wi(ee) {
      return ee._stream ??= Zi()
    }

    function Di(ee, ie, He) {
      0 === ie.activeViews.size && wi(ee).broadcastPending.add(He)
    }

    function Pi(ee, ie, He, ye) {
      const Me = ee._stream;
      if (void 0 === Me) return !0;
      let Ke = !1;
      return Me.broadcastPending.delete(ye) ? Ke = !0 : Me.sentBroadcast.delete(ye) && Me.broadcastDeletes.add(ye), ie.forEachActiveView((ee => {
        const ie = Me.pendingByView.get(ee.id);
        if (ie?.has(ye)) return ie.delete(ye), void(Ke = !0);
        const Ue = Me.sentByView.get(ee.id);
        if (Ue?.has(ye)) {
          Ue.delete(ye);
          let ie = ee.changes.get(He);
          void 0 === ie && (ie = new Map, ee.changes.set(He, ie)), ie.set(ye, be.DELETE)
        }
      })), Ke
    }

    function Ai(ee, ie) {
      const He = ee._stream?.pendingByView;
      if (void 0 === He) return !1;
      for (const [ye, be] of He)
        if (be.size > 0 && void 0 !== ie.activeViews.get(ye)?.deref()) return !0;
      return !1
    }

    function Yi(ee) {
      const ie = ee._stream;
      return void 0 !== ie && (ie.broadcastPending.size > 0 || ie.broadcastDeletes.size > 0)
    }

    function Vi(ee, ie, He) {
      const ye = wi(ee);
      let be = ye.pendingByView.get(ie);
      void 0 === be && (be = new Set, ye.pendingByView.set(ie, be)), be.add(He)
    }

    function ai(ee, ie) {
      const He = ee._stream;
      void 0 !== He && (He.pendingByView.delete(ie), He.sentByView.delete(ie), He.priorityByView?.delete(ie))
    }
    const ci = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function xi(ee) {
      if (null == ee || "object" !== typeof ee) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: ie,
        max: He
      } = ee;
      if ("number" !== typeof ie || "number" !== typeof He || !(He > ie) || !Number.isFinite(ie) || !Number.isFinite(He)) throw new Error(`t.quantized(): require finite min < max (got min=${ie}, max=${He}).`);
      const ye = ee.bits ?? 16;
      if (8 !== ye && 16 !== ye && 32 !== ye) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${ye}).`);
      const be = ee.mode ?? "clamp";
      if ("clamp" !== be && "wrap" !== be) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(be)}).`);
      const Me = "wrap" === be,
        Ke = Math.pow(2, ye);
      return {
        min: ie,
        max: He,
        bits: ye,
        wrap: Me,
        wire: ci[ye],
        range: He - ie,
        span: Me ? Ke : ie === -He ? Ke - 2 : Ke - 1
      }
    }

    function Li(ee) {
      return null !== ee && "object" === typeof ee && void 0 !== ee.quantized
    }

    function Ci(ee, ie) {
      if (ee.wrap) {
        if (!Number.isFinite(ie)) return 0;
        const He = ee.range;
        let ye = (ie - ee.min) % He;
        ye < 0 && (ye += He);
        const be = ee.span;
        return Math.floor(ye / He * be + .5) % be
      }
      if (ie !== ie) return 0;
      const He = ie < ee.min ? ee.min : ie > ee.max ? ee.max : ie;
      return Math.floor((He - ee.min) / ee.range * ee.span + .5)
    }

    function vi(ee, ie) {
      return ee.min + ie / ee.span * ee.range
    }

    function ui(ee) {
      const ie = ii[ee.wire];
      return (He, ye, be) => ie(He, Ci(ee, ye), be)
    }
    class mi {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(ee) {
        const ie = Object.getPrototypeOf(ee);
        if (ie !== Ay) {
          let He = mi.inheritedTypes.get(ie);
          He || (He = new Set, mi.inheritedTypes.set(ie, He)), He.add(ee)
        }
      }
      static cache(ee) {
        let ie = mi.cachedContexts.get(ee);
        return ie || (ie = new mi(ee), mi.cachedContexts.set(ee, ie)), ie
      }
      constructor(ee) {
        ee && this.discoverTypes(ee)
      }
      has(ee) {
        return this.schemas.has(ee)
      }
      get(ee) {
        return this.types[ee]
      }
      add(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(ee) && (this.types[ie] = ee, null == ee[Symbol.metadata] && Ni.initialize(ee), this.schemas.set(ee, ie), !0)
      }
      getTypeId(ee) {
        return this.schemas.get(ee)
      }
      discoverTypes(ee) {
        if (!this.add(ee)) return;
        mi.inheritedTypes.get(ee)?.forEach((ee => {
          this.discoverTypes(ee)
        }));
        let ie = ee;
        for (;
          (ie = Object.getPrototypeOf(ie)) && ie !== Ay && ie !== Function.prototype;) this.discoverTypes(ie);
        const He = ee[Symbol.metadata];
        (He[De] || He[ce]) && (this.hasFilters = !0);
        for (const ye in He) {
          const ee = He[ye].type;
          if ("string" !== typeof ee && !Li(ee))
            if ("function" === typeof ee) this.discoverTypes(ee);
            else {
              const ie = Object.values(ee)[0];
              if ("string" === typeof ie) continue;
              this.discoverTypes(ie)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function li(ee) {
      const ie = ni(ee);
      return ie ? {
        complexTypeKlass: gi[ie],
        childType: ee[ie]
      } : {
        complexTypeKlass: !1,
        childType: ee
      }
    }

    function Si(ee, ie) {
      const He = ji(ee),
        ye = ni(He),
        be = ye && ni(He[ye]);
      if (be) throw new Error(`${ie?`${ie}: `:""}@colyseus/schema: nested collections are not supported ("${ye}" of "${be}"). Collections can only hold primitive types or Schema classes, wrap the inner ${be} in a Schema class.`);
      return He
    }

    function ni(ee) {
      return "object" === typeof ee && null !== ee ? Object.keys(ee).find((ee => void 0 !== gi[ee])) : void 0
    }

    function ji(ee) {
      if ("object" !== typeof ee || null === ee) return ee;
      if (Array.isArray(ee)) return {
        array: ji(ee[0])
      };
      const ie = function(ee) {
        const ie = Object.keys(ee),
          He = ie.filter((ee => /\d+/.test(ee)));
        if (He.length > 0 && He.length === ie.length / 2 && ee[ee[He[0]]] == He[0]) return "number";
        if (ie.length > 0 && ie.every((ie => ee[ie] === ie))) return "string"
      }(ee);
      if (ie) return ie;
      if (Li(ee)) return "string" === typeof ee.quantized.wire ? ee : {
        quantized: xi(ee.quantized)
      };
      if (void 0 !== ee.type) return ji(ee.type);
      const He = ni(ee);
      return He && (ee[He] = ji(ee[He])), ee
    }
    const si = [we, Ae, Ye, Ve, ae, ce, te];

    function Ii(ee, ie, He) {
      ee[ie] || Object.defineProperty(ee, ie, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), ee[ie].push(He)
    }
    const Ni = {
        addField(ee, ie, He, ye, be) {
          if (ie >= 63) throw new Error(`Can't define field '${He}'.\nSchema instances may only have up to 63 fields.`);
          ee[ie] = Object.assign(ee[ie] || {}, {
            type: ye,
            index: ie,
            name: He
          }), Object.defineProperty(ee, de, {
            value: ee[de] || {},
            enumerable: !1,
            configurable: !0
          }), ee[de][He] = be || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(ee, Ze, {
            value: ie,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ee, He, {
            value: ie,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof ee[ie].type || Li(ee[ie].type) || (void 0 === ee[we] && Object.defineProperty(ee, we, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), ee[we].push(ie));
          const Me = ee[ie].type;
          if (Me && "object" === typeof Me && void 0 !== Me.stream) {
            if (void 0 !== Me.array) throw new Error(ti);
            ee[ie].stream = !0, ee[ce] || Object.defineProperty(ee, ce, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), ee[ce].includes(ie) || ee[ce].push(ie);
            const be = ye?.priority;
            "function" === typeof be && Ni.setStreamPriority(ee, He, be)
          }
        },
        setTag(ee, ie, He) {
          const ye = ee[ie];
          if (ee[ye].tag = He, ee[De] || (Object.defineProperty(ee, De, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(ee, Pe, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), ee[De].push(ye), He < 0) ee[Pe][He] || (ee[Pe][He] = []), ee[Pe][He].push(ye);
          else
            for (let be = He; be > 0; be &= be - 1) {
              const ie = be & -be;
              ee[Pe][ie] || (ee[Pe][ie] = []), ee[Pe][ie].push(ye)
            }
        },
        setUnreliable(ee, ie) {
          const He = ee[ie];
          if ("string" !== typeof ee[He].type) throw new Error(`@unreliable cannot be applied to ref-type field "${ie}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          ee[He].unreliable = !0, ee[Ae] || Object.defineProperty(ee, Ae, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), ee[Ae].push(He)
        },
        setPatchOnly(ee, ie) {
          const He = ee[ie];
          if (ee[He].fullStateOnly) throw new Error(`field "${ie}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          ee[He].patchOnly = !0, Ii(ee, Ye, He), Ii(ee, Ve, He)
        },
        setDeprecated(ee, ie) {
          const He = ee[ie];
          ee[He].deprecated = !0, Ii(ee, Ve, He), Object.defineProperty(ee, He, {
            value: ee[He],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(ee, ie) {
          const He = ee[ie];
          if (ee[He].patchOnly) throw new Error(`field "${ie}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          ee[He].fullStateOnly = !0, Ii(ee, ae, He)
        },
        setStream(ee, ie) {
          const He = ee[ie];
          ee[He].stream = !0, ee[ce] || Object.defineProperty(ee, ce, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), ee[ce].push(He)
        },
        setStreamPriority(ee, ie, He) {
          const ye = ee[ie];
          ee[xe] || Object.defineProperty(ee, xe, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), ee[xe][ye] = He
        },
        getStreamPriority: (ee, ie) => ee?.[xe]?.[ie],
        defineField(ee, ie, He, ye, be) {
          const Me = Si(be, `${ee.name}.${ye}`),
            {
              complexTypeKlass: Ke,
              childType: Ue
            } = li(Me);
          Ni.addField(ie, He, ye, Me, Wy(ye, He, Ue, Ke)), ie[de][ye] && Object.defineProperty(ee.prototype, ye, ie[de][ye]), ("string" === typeof Me || Li(Me)) && (ie[te] || Object.defineProperty(ie, te, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), ie[te][He] = "string" === typeof Me ? ii[Me] : ui(Me.quantized))
        },
        setFields(ee, ie) {
          const He = ee.prototype.constructor;
          mi.register(He);
          const ye = Object.getPrototypeOf(He),
            be = ye && ye[Symbol.metadata],
            Me = Ni.initialize(He);
          He[Fe] || (He[Fe] = Ay[Fe]), He[Je] || (He[Je] = Ay[Je]), He[oe] || (He[oe] = Ay[oe]), He.prototype.toJSON || (He.prototype.toJSON = Ay.prototype.toJSON);
          let Ke = Me[Ze] ?? (be && be[Ze]) ?? -1;
          Ke++, Me[te] || Object.defineProperty(Me, te, {
            value: be?.[te] ? [...be[te]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const Ue in ie) {
            if (void 0 !== Me[Ue]) throw new Error(`@colyseus/schema: Duplicate '${Ue}' definition on '${He.name||"(anonymous)"}'.`);
            Ni.defineField(He, Me, Ke, Ue, ie[Ue]), Ke++
          }
          return ee
        },
        isDeprecated: (ee, ie) => !0 === ee[ie].deprecated,
        initialize(ee) {
          const ie = Object.getPrototypeOf(ee),
            He = ie[Symbol.metadata];
          let ye = ee[Symbol.metadata] ?? Object.create(null);
          if (ie !== Ay && ye === He && (ye = Object.create(null), He)) {
            Object.setPrototypeOf(ye, He), Object.defineProperty(ye, Ze, {
              value: He[Ze],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== He[De] && (Object.defineProperty(ye, De, {
              value: [...He[De]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(ye, Pe, {
              value: {
                ...He[Pe]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const ee of si) {
              const ie = He[ee];
              void 0 !== ie && Object.defineProperty(ye, ee, {
                value: [...ie],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(ye, de, {
              value: {
                ...He[de]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(ee, Symbol.metadata, {
            value: ye,
            writable: !1,
            configurable: !0
          }), ye
        },
        isValidInstance: ee => ee.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(ee.constructor[Symbol.metadata], Ze),
        getFields(ee) {
          const ie = ee[Symbol.metadata],
            He = {};
          for (let ye = 0; ye <= ie[Ze]; ye++) He[ie[ye].name] = ie[ye].type;
          return He
        },
        hasViewTagAtIndex: (ee, ie) => ee?.[De]?.includes(ie),
        hasUnreliableAtIndex: (ee, ie) => ee?.[Ae]?.includes(ie),
        hasPatchOnlyAtIndex: (ee, ie) => ee?.[Ye]?.includes(ie),
        hasFullStateOnlyAtIndex: (ee, ie) => ee?.[ae]?.includes(ie),
        hasStreamAtIndex: (ee, ie) => ee?.[ce]?.includes(ie)
      },
      Gi = (ee, ie, He) => ee(ie, He);
    class ri {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(ee) {
        this.ops = new Uint8Array(Math.max(ee + 1, 1))
      }
      record(ee, ie) {
        const He = this.ops[ee];
        0 === He ? this.ops[ee] = ie : (He === be.DELETE || He === be.ADD && ie === be.DELETE_AND_ADD) && (this.ops[ee] = be.DELETE_AND_ADD), ee < 32 ? this.dirtyLow |= 1 << ee : this.dirtyHigh |= 1 << ee - 32
      }
      recordDelete(ee, ie) {
        this.ops[ee] = ie, ee < 32 ? this.dirtyLow |= 1 << ee : this.dirtyHigh |= 1 << ee - 32
      }
      recordRaw(ee, ie) {
        this.record(ee, ie)
      }
      operationAt(ee) {
        const ie = this.ops[ee];
        return 0 === ie ? void 0 : ie
      }
      setOperationAt(ee, ie) {
        this.ops[ee] = ie
      }
      forEach(ee) {
        this.forEachWithCtx(ee, Gi)
      }
      forEachWithCtx(ee, ie) {
        let He = this.dirtyLow,
          ye = this.dirtyHigh;
        const be = this.ops;
        for (; 0 !== He;) {
          const ye = He & -He,
            Me = 31 - Math.clz32(ye);
          He ^= ye, ie(ee, Me, be[Me])
        }
        for (; 0 !== ye;) {
          const He = ye & -ye,
            Me = 31 - Math.clz32(He) + 32;
          ye ^= He, ie(ee, Me, be[Me])
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
    class Qi {
      yT = new Map;
      pureOps = [];
      record(ee, ie) {
        const He = this.yT.get(ee);
        void 0 === He ? this.yT.set(ee, ie) : (He === be.DELETE || He === be.ADD && ie === be.DELETE_AND_ADD) && this.yT.set(ee, be.DELETE_AND_ADD)
      }
      recordDelete(ee, ie) {
        this.yT.set(ee, ie)
      }
      recordRaw(ee, ie) {
        this.yT.set(ee, ie)
      }
      recordPure(ee) {
        this.pureOps.push([this.yT.size, ee])
      }
      operationAt(ee) {
        return this.yT.get(ee)
      }
      setOperationAt(ee, ie) {
        this.yT.has(ee) && this.yT.set(ee, ie)
      }
      forEach(ee) {
        this.forEachWithCtx(ee, Gi)
      }
      forEachWithCtx(ee, ie) {
        const He = this.pureOps;
        if (He.length > 0) {
          let ye = 0,
            be = 0;
          for (const [Me, Ke] of this.yT) {
            for (; ye < He.length && He[ye][0] <= be;) {
              const be = He[ye++][1];
              ie(ee, -be, be)
            }
            ie(ee, Me, Ke), be++
          }
          for (; ye < He.length;) {
            const be = He[ye++][1];
            ie(ee, -be, be)
          }
        } else
          for (const [ye, be] of this.yT) ie(ee, ye, be)
      }
      size() {
        return this.yT.size + this.pureOps.length
      }
      has() {
        return this.yT.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.yT.clear(), this.pureOps.length = 0
      }
      shift(ee) {
        const ie = new Map;
        for (const [He, ye] of this.yT) ie.set(He + ee, ye);
        this.yT = ie
      }
    }

    function eH(ee) {
      return 16843009 * ((ee = (858993459 & (ee -= ee >>> 1 & 1431655765)) + (ee >>> 2 & 858993459)) + (ee >>> 4) & 252645135) >>> 24
    }

    function iH(ee) {
      if (void 0 === ee) return 0;
      let ie = 0;
      for (let He = 0, ye = ee.length; He < ye; He++) {
        const ye = ee[He];
        ye < 32 && (ie |= 1 << ye)
      }
      return ie
    }

    function HH(ee) {
      const ie = ee.constructor;
      if (Object.prototype.hasOwnProperty.call(ie, We)) return ie[We];
      const He = ie[Symbol.metadata],
        ye = Ni.isValidInstance(ee),
        be = (He?.[De]?.length ?? 0) > 0,
        Me = function(ee) {
          const ie = [],
            He = [],
            ye = [],
            be = [],
            Me = ee?.[Ze];
          if (void 0 === Me) return {
            names: ie,
            types: He,
            tags: ye,
            encoders: be
          };
          const Ke = ee[te];
          for (let Ue = 0; Ue <= Me; Ue++) {
            const Me = ee[Ue];
            void 0 !== Me ? (ie[Ue] = Me.name, He[Ue] = Me.type, ye[Ue] = Me.tag, be[Ue] = Ke?.[Ue]) : (ie[Ue] = void 0, He[Ue] = void 0, ye[Ue] = void 0, be[Ue] = void 0)
          }
          return {
            names: ie,
            types: He,
            tags: ye,
            encoders: be
          }
        }(He),
        Ke = ye && !be ? void 0 : ie[Re],
        Ue = {
          encoder: ie[Je],
          filter: Ke,
          metadata: He,
          isSchema: ye,
          filterBitmask: ye ? iH(He?.[De]) : 0,
          hasAnyFullStateOnly: (He?.[ae]?.length ?? 0) > 0,
          hasAnyUnreliable: (He?.[Ae]?.length ?? 0) > 0,
          hasAnyStream: (He?.[ce]?.length ?? 0) > 0,
          hasAnyView: be,
          fullStateOnlyBitmask: iH(He?.[ae]),
          unreliableBitmask: iH(He?.[Ae]),
          streamBitmask: iH(He?.[ce]),
          names: Me.names,
          types: Me.types,
          tags: Me.tags,
          encoders: Me.encoders
        };
      return Object.defineProperty(ie, We, {
        value: Ue,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), Ue
    }

    function yH(ee, ie) {
      if (void 0 !== ee.parentRef && ie(ee.parentRef, ee._parentIndex)) return !0;
      for (let He = ee.extraParents; void 0 !== He; He = He.next)
        if (ie(He.ref, He.index)) return !0;
      return !1
    }
    const bH = (ee, ie) => {
        ee.isFieldUnreliable(ie) ? ee.ensureUnreliableRecorder().record(ie, be.ADD) : ee.record(ie, be.ADD)
      },
      MH = (ee, ie) => ee(ie);

    function KH(ee, ie, He) {
      const ye = ee.refTarget;
      if (void 0 !== ye[pe]) {
        if (ee.isPatchOnly) return;
        if (Array.isArray(ye.items)) {
          const ee = ye.items;
          for (let ye = 0, be = ee.length; ye < be; ye++) void 0 !== ee[ye] && He(ie, ye)
        } else if (void 0 !== ye.journal)
          for (const [ee, be] of ye.journal.keyByIndex) ye.$items.has(be) && He(ie, ee);
        else if (void 0 !== ye.$items)
          for (const ee of ye.$items.keys()) He(ie, ee)
      } else {
        const be = ee.metadata;
        if (!be) return;
        const Me = be[Ze] ?? -1,
          Ke = be[Ve],
          Ue = ee.encDescriptor.names;
        for (let ee = 0; ee <= Me; ee++) {
          const be = Ue[ee];
          if (void 0 === be) continue;
          if (Ke && Ke.includes(ee)) continue;
          const Me = ye[be];
          void 0 !== Me && null !== Me && He(ie, ee)
        }
      }
    }

    function UH(ee, ie, He, ye) {
      ! function(ee, ie, He) {
        if (!ie) return;
        const ye = ie[Te],
          be = !ye._isSchema;
        let Me;
        be ? (ie = ye.parent, He = ye.parentIndex, Me = ie?.[Te].metadata) : Me = ye.metadata;
        const Ke = (Me?.[Ye]?.includes(He) ? ZH : 0) | (Me?.[ae]?.includes(He) ? wH : 0),
          Ue = ye.flags & AH | Ke,
          Fe = ee.flags;
        ee.flags = Fe | Ue;
        Ue & ~Fe & wH && (ee.reset(), ee.unreliableRecorder?.reset());
        const Je = ee.root?.types;
        if (!Je?.hasFilters) return;
        const oe = Me?.[De]?.includes(He) ?? !1,
          Re = Me?.[ce]?.includes(He) ?? !1,
          ke = ye.isFiltered || oe || Re;
        if (ee.isFiltered = ke, Re && !be) {
          ee.isStreamCollection = !0;
          const ie = wi(ee.ref);
          if (void 0 === ie.priority) {
            const ee = Ni.getStreamPriority(Me, He);
            void 0 !== ee && (ie.priority = ee)
          }
          ee.root?.registerStream(ee.ref)
        }
        if (ke) {
          const ie = JH(ee);
          ee.isVisibilitySharedWithParent = ye.isFiltered && ie && !Re && (!oe || be && Me[He].tag !== py)
        }
      }(ee, ie, He), ee.isFullStateOnly || (ee.has() && ee.root?.enqueueChangeTree(ee), ee.unreliableRecorder?.has() && ee.root?.enqueueUnreliable(ee), ee.has() || ee.unreliableRecorder?.has() || ee.root?.enqueueChangeTree(ee))
    }

    function FH(ee) {
      const ie = ee.pendingFilterRefresh;
      for (let He = 0; He < ie.length; He++) {
        const ee = ie[He];
        0 !== (ee.flags & PH) && oH(ee)
      }
      ie.length = 0
    }

    function JH(ee) {
      return ee._isSchema || "string" !== typeof ee.refTarget[pe]
    }

    function oH(ee) {
      ee.flags &= ~PH;
      const ie = ee.root;
      if (void 0 === ie || void 0 === ee.parentRef) return;
      const He = JH(ee);
      let ye = TH(ee, ee.parentRef, ee._parentIndex, He);
      for (let Me = ee.extraParents; void 0 !== Me && ye !== fH; Me = Me.next) ye |= TH(ee, Me.ref, Me.index, He);
      if (0 === ye) return;
      ee.isVisibilitySharedWithParent = 0 !== (ye & qH);
      const be = 0 === (ye & kH);
      be !== ee.isFiltered && (ee.isFiltered = be, be || ee.isFullStateOnly || (ee.forEachLiveWithCtx(ee, bH), ee.has() && ie.enqueueChangeTree(ee), ee.unreliableRecorder?.has() && ie.enqueueUnreliable(ee)), ee.forEachChildWithCtx(ee, pH))
    }
    const RH = 1,
      kH = 2,
      qH = 4,
      fH = RH | kH | qH;

    function TH(ee, ie, He, ye) {
      const be = ie[Te];
      if (be.root !== ee.root || ! function(ee, ie, He) {
          const ye = ie.refTarget;
          if (ie.isArray) {
            const ie = ye.items,
              be = ie[He];
            if (void 0 !== be && be[Te] === ee) return !0;
            for (let He = 0, ye = ie.length; He < ye; He++) {
              const ye = ie[He];
              if (void 0 !== ye && ye[Te] === ee) return !0
            }
            return !1
          }
          const be = ie.getValue(He);
          return void 0 !== be && be[Te] === ee
        }(ee, be, He)) return 0;
      be.flags & PH && oH(be);
      let Me = RH;
      if (be._isSchema) {
        void 0 !== be.encDescriptor.tags[He] || be.isFieldStream(He) || (be.isFiltered ? ye && (Me |= qH) : Me |= kH)
      } else if (be.isFiltered) {
        if (ye && !be.isStreamCollection) {
          const ee = be.parent?.[Te];
          (ee?._isSchema ? ee.encDescriptor.tags[be.parentIndex] : void 0) !== py && (Me |= qH)
        }
      } else Me |= kH;
      return Me
    }
    const pH = (ee, ie, He) => {
      oH(ie)
    };

    function XH(ee, ie, He, ye) {
      if (ee.addParent(ie, ye), !He) return;
      const be = He.add(ee);
      He !== ee.root && (ee.root = He, UH(ee, ie, ye));
      const Me = ie?.[Te];
      if (void 0 !== Me && void 0 !== Me.subscribedViews && void 0 !== ie[pe] && function(ee, ie, He, ye) {
          const be = ee.subscribedViews;
          if (void 0 === be) return;
          const Me = ee.isStreamCollection,
            Ke = Me ? ee.ref : void 0,
            Ue = Me ? void 0 : He[Te];
          for (let Fe = 0, Je = be.length; Fe < Je; Fe++) {
            let ee = be[Fe];
            for (; 0 !== ee;) {
              const He = ee & -ee;
              ee ^= He;
              const Je = 32 * Fe + (31 - Math.clz32(He)),
                oe = ye.activeViews.get(Je),
                Re = oe?.deref();
              void 0 !== Re ? Me ? Vi(Ke, Je, ie) : void 0 !== Ue && Re.markVisible(Ue) : be[Fe] &= ~He
            }
          }
        }(Me, ye, ee.ref, He), be) {
        let ie = gH[OH];
        void 0 === ie && (ie = {
          parentRef: void 0,
          root: void 0
        }, gH[OH] = ie), ie.parentRef = ee.ref, ie.root = He, OH++, BH(ee, ie, dH), OH--
      }
    }

    function zH(ee, ie, He) {
      ee(ie, He)
    }

    function BH(ee, ie, He) {
      const ye = ee.refTarget;
      if (ye[pe]) {
        if ("string" !== typeof ye[pe]) {
          const ee = ye.items;
          if (void 0 !== ee)
            for (let ye = 0, be = ee.length; ye < be; ye++) {
              const be = ee[ye];
              be && He(ie, be[Te], ye)
            } else {
              const ee = ye.$items,
                be = ye._collectionIndexes;
              for (const ye of ee.keys()) {
                const Me = ee.get(ye);
                Me && He(ie, Me[Te], be?.[ye] ?? ye)
              }
            }
        }
      } else {
        const be = ee.metadata,
          Me = be?.[we];
        if (!Me) return;
        const Ke = ee.encDescriptor.names;
        for (let ee = 0, Ue = Me.length; ee < Ue; ee++) {
          const be = Me[ee],
            Ue = ye[Ke[be]];
          Ue && He(ie, Ue[Te], be)
        }
      }
    }

    function EH(ee, ie, He) {
      ie.root !== ee ? ie.setRoot(ee) : ee.add(ie)
    }
    const gH = [];
    let OH = 0;

    function dH(ee, ie, He) {
      if (ie.root === ee.root) return ee.root.add(ie), void ee.root.moveNextToParent(ie);
      ie.setParent(ee.parentRef, ee.root, He)
    }

    function WH(ee, ie, He) {
      const ye = (3 & He) << 3;
      return He < 4 ? ee >>> ye & 255 : ie >>> ye & 255
    }
    const tH = (ee, ie, He) => ee(ie, He);
    const ZH = 16,
      wH = 32,
      DH = 128,
      PH = 256,
      AH = ZH | wH;
    class YH {
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
      set isFiltered(ee) {
        this.flags = ee ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(ee) {
        this.flags = ee ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(ee) {
        this.flags = ee ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(ee) {
        this.flags = ee ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & ZH)
      }
      set isPatchOnly(ee) {
        this.flags = ee ? this.flags | ZH : this.flags & ~ZH
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & wH)
      }
      set isFullStateOnly(ee) {
        this.flags = ee ? this.flags | wH : this.flags & ~wH
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(ee) {
        this.flags = ee ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & DH)
      }
      set needsRestage(ee) {
        this.flags = ee ? this.flags | DH : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new ri(this.metadata?.[Ze] ?? 0) : new Qi), this.unreliableRecorder
      }
      isFieldUnreliable(ee) {
        const ie = this.encDescriptor;
        return !!ie.hasAnyUnreliable && (ee < 32 ? 0 !== (ie.unreliableBitmask & 1 << ee) : Ni.hasUnreliableAtIndex(this.metadata, ee))
      }
      isFieldFullStateOnly(ee) {
        if (this.isFullStateOnly) return !0;
        const ie = this.encDescriptor;
        return !!ie.hasAnyFullStateOnly && (ee < 32 ? 0 !== (ie.fullStateOnlyBitmask & 1 << ee) : Ni.hasFullStateOnlyAtIndex(this.metadata, ee))
      }
      isFieldStream(ee) {
        const ie = this.encDescriptor;
        return !!ie.hasAnyStream && (ee < 32 ? 0 !== (ie.streamBitmask & 1 << ee) : Ni.hasStreamAtIndex(this.metadata, ee))
      }
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee;
        this.ref = ee, this.refTarget = ie;
        const He = HH(ee);
        this.encDescriptor = He, this.metadata = He.metadata;
        const ye = He.isSchema;
        if (this._isSchema = ye, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, ye) {
          const ee = this.metadata?.[Ze] ?? 0;
          ee > 7 && (this.ops = new Uint8Array(ee + 1))
        } else this.collDirty = new Map
      }
      _opAt(ee) {
        const ie = this.ops;
        if (void 0 !== ie) return ie[ee];
        const He = (3 & ee) << 3;
        return ee < 4 ? this.opsLow >>> He & 255 : this.opsHigh >>> He & 255
      }
      _opPut(ee, ie) {
        const He = this.ops;
        if (void 0 !== He) return void(He[ee] = ie);
        const ye = (3 & ee) << 3,
          be = ~(255 << ye);
        ee < 4 ? this.opsLow = this.opsLow & be | ie << ye : this.opsHigh = this.opsHigh & be | ie << ye
      }
      _markDirty(ee) {
        ee < 32 ? this.dirtyLow |= 1 << ee : this.dirtyHigh |= 1 << ee - 32
      }
      record(ee, ie) {
        if (this._isSchema) {
          const He = this._opAt(ee);
          0 === He ? this._opPut(ee, ie) : (He === be.DELETE || He === be.ADD && ie === be.DELETE_AND_ADD) && this._opPut(ee, be.DELETE_AND_ADD), this._markDirty(ee)
        } else {
          const He = this.collDirty,
            ye = He.get(ee);
          let Me;
          Me = void 0 === ye ? ie : ye === be.DELETE || ye === be.ADD && ie === be.DELETE_AND_ADD ? be.DELETE_AND_ADD : ye, He.set(ee, Me)
        }
      }
      recordDelete(ee, ie) {
        this._isSchema ? (this._opPut(ee, ie), this._markDirty(ee)) : this.collDirty.set(ee, ie)
      }
      recordRaw(ee, ie) {
        this._isSchema ? (this._opPut(ee, ie), this._markDirty(ee)) : this.collDirty.set(ee, ie)
      }
      recordPure(ee) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, ee])
      }
      operationAt(ee) {
        if (this._isSchema) {
          const ie = this._opAt(ee);
          return 0 === ie ? void 0 : ie
        }
        return this.collDirty.get(ee)
      }
      setOperationAt(ee, ie) {
        if (this._isSchema) this._opPut(ee, ie);
        else {
          const He = this.collDirty;
          He.has(ee) && He.set(ee, ie)
        }
      }
      forEach(ee) {
        this.forEachWithCtx(ee, tH)
      }
      forEachWithCtx(ee, ie) {
        if (this._isSchema) {
          let He = this.dirtyLow,
            ye = this.dirtyHigh;
          const be = this.ops;
          if (void 0 !== be) {
            for (; 0 !== He;) {
              const ye = He & -He,
                Me = 31 - Math.clz32(ye);
              He ^= ye, ie(ee, Me, be[Me])
            }
            for (; 0 !== ye;) {
              const He = ye & -ye,
                Me = 31 - Math.clz32(He) + 32;
              ye ^= He, ie(ee, Me, be[Me])
            }
          } else {
            const ye = this.opsLow,
              be = this.opsHigh;
            for (; 0 !== He;) {
              const Me = He & -He,
                Ke = 31 - Math.clz32(Me);
              He ^= Me, ie(ee, Ke, WH(ye, be, Ke))
            }
          }
          return
        }
        const He = this.collDirty,
          ye = this.collPureOps;
        if (void 0 !== ye && ye.length > 0) {
          let be = 0,
            Me = 0;
          for (const [Ke, Ue] of He) {
            for (; be < ye.length && ye[be][0] <= Me;) {
              const He = ye[be++][1];
              ie(ee, -He, He)
            }
            ie(ee, Ke, Ue), Me++
          }
          for (; be < ye.length;) {
            const He = ye[be++][1];
            ie(ee, -He, He)
          }
        } else
          for (const [be, Me] of He) ie(ee, be, Me)
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
      insertAt(ee, ie) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const He = this.collDirty,
          ye = new Map,
          Me = !this.paused && !this.isFullStateOnly;
        if (ee > 0)
          for (const [be, Ke] of He) be < ee && ye.set(be, Ke);
        if (Me)
          for (let Ke = 0; Ke < ie; Ke++) ye.set(ee + Ke, be.ADD);
        for (const [be, Ke] of He) be >= ee && ye.set(be + ie, Ke);
        this.collDirty = ye, Me && this.root?.enqueueChangeTree(this)
      }
      removeAt(ee, ie) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const He = this.collDirty,
          ye = ee + ie;
        let be = !1;
        for (const Ke of He.keys())
          if (Ke >= ye) {
            be = !0;
            break
          } if (!be) {
          for (let ie = ee; ie < ye; ie++) He.delete(ie);
          return
        }
        const Me = new Map;
        for (const [Ke, Ue] of He) Ke < ee ? Me.set(Ke, Ue) : Ke >= ye && Me.set(Ke - ie, Ue);
        this.collDirty = Me
      }
      unshift(ee) {
        this.insertAt(0, ee)
      }
      setRoot(ee) {
        ! function(ee, ie) {
          ee.root = ie;
          const He = ie.add(ee);
          UH(ee, ee.parent, ee.parentIndex), He && BH(ee, ie, EH)
        }(this, ee)
      }
      setParent(ee, ie, He) {
        XH(this, ee, ie, He)
      }
      forEachChild(ee) {
        BH(this, ee, zH)
      }
      forEachChildWithCtx(ee, ie) {
        BH(this, ee, ie)
      }
      forEachLive(ee) {
        KH(this, ee, MH)
      }
      forEachLiveWithCtx(ee, ie) {
        KH(this, ee, ie)
      }
      operation(ee) {
        this.paused || this.isFullStateOnly || (this.recordPure(ee), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(ee, ie, He) {
        if (!this.paused && !this.isFieldFullStateOnly(ee)) {
          if (this.isFieldUnreliable(ee) && !this.isNew) {
            const ye = this.ensureUnreliableRecorder();
            return He ? ye.recordRaw(ee, ie) : ye.record(ee, ie), void this.root?.enqueueUnreliable(this)
          }
          He ? this.recordRaw(ee, ie) : this.record(ee, ie), this.root?.enqueueChangeTree(this)
        }
      }
      change(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be.ADD;
        this._routeAndRecord(ee, ie, !1)
      }
      indexedOperation(ee, ie) {
        this._routeAndRecord(ee, ie, !0)
      }
      getChange(ee) {
        return this.operationAt(ee)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(ee) {
        const ie = this.paused;
        this.paused = !0;
        try {
          return ee()
        } finally {
          this.paused = ie
        }
      }
      markDirty(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be.ADD;
        const He = this.paused;
        this.paused = !1;
        try {
          this.change(ee, ie)
        } finally {
          this.paused = He
        }
      }
      getValue(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[ke](ee, ie)
      }
      delete(ee, ie) {
        if (void 0 === ee) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${ee}'`)
          } catch (Ub) {
            console.warn(Ub)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(ee)) return this.getValue(ee);
        const He = this.isFieldUnreliable(ee) && !this.isNew;
        He ? this.ensureUnreliableRecorder().recordDelete(ee, ie ?? be.DELETE) : this.recordDelete(ee, ie ?? be.DELETE);
        const ye = this.getValue(ee);
        return ye && ye[Te] && this.root?.remove(ye[Te]), He ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), ye
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[ze]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[ze]?.()
      }
      discard() {
        this._isSchema || this.refTarget[ze]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const ee = ee => {
          if (ee < 0) return;
          const ie = this.getValue(ee);
          ie && ie[Te] && ie[Te].discardAll()
        };
        this.forEach(ee), this.unreliableRecorder?.forEach(ee), this.discard()
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
      addParent(ee, ie) {
        ! function(ee, ie, He) {
          if (ee.parentRef) {
            if (ee.parentRef[Te] === ie[Te]) return void(ee._parentIndex = He);
            if (yH(ee, ((ee, He) => ee[Te] === ie[Te]))) return void(ee._parentIndex = He)
          }
          void 0 === ee.parentRef ? (ee.parentRef = ie, ee._parentIndex = He) : (ee.extraParents = {
            ref: ee.parentRef,
            index: ee._parentIndex,
            next: ee.extraParents
          }, ee.parentRef = ie, ee._parentIndex = He)
        }(this, ee, ie)
      }
      setParentIndex(ee, ie) {
        ! function(ee, ie, He) {
          if (void 0 !== ee.extraParents)
            if (ee.parentRef[Te] !== ie[Te]) {
              for (let ye = ee.extraParents; void 0 !== ye; ye = ye.next)
                if (ye.ref[Te] === ie[Te]) return void(ye.index = He)
            } else ee._parentIndex = He;
          else ee._parentIndex = He
        }(this, ee, ie)
      }
      removeParent() {
        return function(ee, ie) {
          if (ee.parentRef && ee.parentRef[Te] === ie[Te]) return ee.extraParents ? (ee.parentRef = ee.extraParents.ref, ee._parentIndex = ee.extraParents.index, ee.extraParents = ee.extraParents.next) : (ee.parentRef = void 0, ee._parentIndex = void 0), !0;
          let He = ee.extraParents,
            ye = null;
          for (; He;) {
            if (He.ref[Te] === ie[Te]) return ye ? ye.next = He.next : ee.extraParents = He.next, !0;
            ye = He, He = He.next
          }
          return void 0 === ee.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(ee) {
        return function(ee, ie) {
          if (void 0 !== ee.parentRef && ie(ee.parentRef, ee._parentIndex)) return {
            ref: ee.parentRef,
            index: ee._parentIndex
          };
          for (let He = ee.extraParents; void 0 !== He; He = He.next)
            if (ie(He.ref, He.index)) return {
              ref: He.ref,
              index: He.index
            }
        }(this, ee)
      }
      hasParent(ee) {
        return yH(this, ee)
      }
      indexInParent(ee) {
        return function(ee, ie) {
          if (ee.parentRef && ee.parentRef[Te] === ie[Te]) return ee._parentIndex;
          for (let He = ee.extraParents; void 0 !== He; He = He.next)
            if (He.ref[Te] === ie[Te]) return He.index
        }(this, ee)
      }
      getAllParents() {
        return function(ee) {
          const ie = [];
          ee.parentRef && ie.push({
            ref: ee.parentRef,
            index: ee._parentIndex
          });
          let He = ee.extraParents;
          for (; He;) ie.push({
            ref: He.ref,
            index: He.index
          }), He = He.next;
          return ie
        }(this)
      }
    }
    class VH {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(ee) {
        this.ref = ee
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
      untracked(ee) {
        return ee()
      }
      markDirty() {}
      forEachChild(ee) {
        const ie = this.ref;
        if (ie[pe]) {
          if ("string" !== typeof ie[pe])
            for (const [He, ye] of ie.entries()) ye && ee(ye[Te], ie._collectionIndexes?.[He] ?? He);
          return
        }
        const He = ie.constructor,
          ye = He?.[Symbol.metadata];
        if (!ye) return;
        const be = ye[we] ?? [];
        for (let Me = 0; Me < be.length; Me++) {
          const He = be[Me],
            Ke = ie[ye[He].name];
          Ke && ee(Ke[Te], He)
        }
      }
      forEachChildWithCtx(ee, ie) {
        this.forEachChild(((He, ye) => ie(ee, He, ye)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function aH(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee;
      var He;
      Object.defineProperty(ee, Te, {
        value: (He = ie, new VH(He)),
        enumerable: !1,
        writable: !0
      })
    }

    function cH(ee, ie, He, ye, Me, Ke, Fe) {
      void 0 !== Fe ? Fe(ie, ye, Ke) : "string" === typeof He ? ii[He]?.(ie, ye, Ke) : null != He[Symbol.metadata] ? (ii.number(ie, ye[Ue], Ke), (Me & be.ADD) === be.ADD && ee.tryEncodeTypeId(ie, He, ye.constructor, Ke)) : ii.number(ie, ye[Ue], Ke)
    }
    const xH = function(ee, ie, He, ye, Me, Ke, Ue, Fe) {
        if (ie[Ke.offset++] = 255 & (ye | Me), Me === be.DELETE) return;
        const Je = He.encDescriptor,
          oe = He.ref,
          Re = oe[ge][ye] ?? oe[Je.names[ye]];
        cH(ee, ie, Je.types[ye], Re, Me, Ke, Je.encoders[ye])
      },
      LH = function(ee, ie, He, ye, Me, Ke) {
        if (ie[Ke.offset++] = 255 & Me, ii.number(ie, ye, Ke), Me === be.DELETE) return;
        const Ue = He.ref;
        if ((Me & be.ADD) === be.ADD) {
          const ee = Ue.$indexes.get(ye);
          ii.string(ie, ee, Ke)
        }
        cH(ee, ie, Ue[pe], Ue[ke](ye), Me, Ke)
      },
      CH = function(ee, ie, He, ye, Me, Ke) {
        if (ie[Ke.offset++] = 255 & Me, ii.number(ie, ye, Ke), Me === be.DELETE) return;
        const Ue = He.ref;
        cH(ee, ie, Ue[pe], Ue[ke](ye), Me, Ke)
      },
      vH = function(ee, ie, He, ye, Me, Ke) {
        const Ue = He.ref;
        (Me & be.ADD) === be.ADD && "function" === typeof Ue.set ? LH(ee, ie, He, ye, Me, Ke) : CH(ee, ie, He, ye, Me, Ke)
      },
      uH = function(ee, ie, He, ye, Me, Ke, Fe, Je) {
        const oe = He.refTarget,
          Re = oe[pe],
          qe = "string" !== typeof Re;
        let fe;
        if (Je && He.isFiltered && qe) {
          const ee = oe.tmpItems[ye];
          if (!ee) return;
          if (fe = ee[Ue], Me === be.DELETE) Me = be.DELETE_BY_REFID;
          else if ((Me & be.ADD) === be.ADD) Me = be.ADD_BY_REFID;
          else if ((Me & be.MOVE) === be.MOVE) return
        } else if (Me === be.DELETE && qe) {
          const ee = oe.tmpItems[ye];
          if (!ee) return;
          fe = ee[Ue], Me = be.DELETE_BY_REFID
        } else fe = ye;
        if (ie[Ke.offset++] = 255 & Me, ii.number(ie, fe, Ke), Me === be.DELETE || Me === be.DELETE_BY_REFID) return;
        cH(ee, ie, Re, oe[ke](ye, Fe), Me, Ke)
      };

    function mH(ee, ie, He, ye, Me, Ke, Fe) {
      const Je = ee.resyncVisited;
      let oe = Je.get(ee.currentRefId);
      if (void 0 === oe && Je.set(ee.currentRefId, oe = new Set), oe.add(ye), void 0 !== Me && He === be.ADD && Me !== Ke) {
        const He = Me[Ue];
        void 0 !== He && (ee.root.removeRef(He), Fe?.push({
          ref: ie,
          refId: ee.currentRefId,
          op: be.DELETE,
          dynamicIndex: ye,
          value: void 0,
          previousValue: Me
        }))
      }
    }

    function lH(ee, ie, He, ye) {
      const be = ie[Ue];
      if (void 0 === be || He.has(be)) return;
      He.add(be);
      const Me = ie.constructor[Symbol.metadata],
        Ke = Me?.[we];
      if (void 0 === Ke) return;
      const Fe = Me[Ye];
      for (let Ue = 0; Ue < Ke.length; Ue++) {
        const be = Ke[Ue];
        if (void 0 !== Fe && Fe.includes(be)) continue;
        const Je = Me[be],
          oe = ie[Je.name];
        oe && (Ay.is(Je.type) ? lH(ee, oe, He, ye) : SH(ee, oe, He, ye))
      }
    }

    function SH(ee, ie, He, ye) {
      const Me = ie[Xe] ?? ie,
        Ke = Me[Ue];
      if (void 0 === Ke || He.has(Ke)) return;
      He.add(Ke);
      const Fe = ee.resyncVisited.get(Ke);
      if (void 0 === Fe) return;
      const Je = ee.root;
      Me[fe](Fe, ((ee, He) => {
        ye?.push({
          ref: ie,
          refId: Ke,
          op: be.DELETE,
          dynamicIndex: He,
          value: void 0,
          previousValue: ee
        });
        const Me = ee?.[Ue];
        void 0 !== Me && Je.removeRef(Me)
      }), (ie => {
        Ay.isSchema(ie) && lH(ee, ie, He, ye)
      }))
    }
    const nH = 1,
      jH = 2,
      sH = 3,
      IH = 4,
      hH = 5;

    function NH(ee, ie, He, ye, Me, Ke, Fe, Je, oe) {
      const Re = ee.root;
      let ke;
      if ((ie & be.DELETE) === be.DELETE) {
        const ee = Me?.[Ue];
        void 0 !== ee && Re.removeRef(ee), ie !== be.DELETE_AND_ADD && He[qe](ye), ke = void 0
      }
      if (ie === be.DELETE);
      else if ("string" === typeof Ke) ke = Ei[Ke](Fe, Je);
      else if (Li(Ke)) ke = function(ee, ie, He) {
        return vi(ee, (0, Ei[ee.wire])(ie, He))
      }(Ke.quantized, Fe, Je);
      else if (Ay.is(Ke)) {
        const He = Ei.number(Fe, Je);
        if (ke = Re.refs.get(He), (ie & be.ADD) === be.ADD) {
          const ye = ee.getInstanceType(Fe, Je, Ke);
          ke || (ke = ee.createInstanceOfType(ye)), Re.addRef(He, ke, ke !== Me || ie === be.DELETE_AND_ADD && ke === Me)
        }
      } else {
        const He = (fe = Object.keys(Ke)[0], gi[fe]),
          ye = Ei.number(Fe, Je);
        null !== ee.resyncVisited && function(ee, ie) {
          const He = ee.resyncVisited;
          He.has(ie) || He.set(ie, new Set)
        }(ee, ye);
        const qe = Re.refs.has(ye) ? Me || Re.refs.get(ye) : He.constructor.initializeForDecoder();
        if (ke = qe.clone(!0), ke[pe] = Object.values(Ke)[0], Me) {
          let ee = Me[Ue];
          if (void 0 !== ee && ye !== ee) {
            (ie & be.DELETE) !== be.DELETE && Re.removeRef(ee);
            const He = Me.entries();
            let ye;
            for (;
              (ye = He.next()) && !ye.done;) {
              const [ie, He] = ye.value;
              "object" === typeof He && (ee = He[Ue]), oe?.push({
                ref: Me,
                refId: ee,
                op: be.DELETE,
                field: ie,
                value: void 0,
                previousValue: He
              })
            }
          }
        }
        Re.addRef(ye, ke, qe !== Me || ie === be.DELETE_AND_ADD && qe === Me)
      }
      var fe;
      return ke
    }
    const GH = function(ee, ie, He, ye, be) {
        const Me = ie[He.offset++],
          Ke = ye.constructor[Symbol.metadata],
          Ue = Me >> 6 << 6,
          Fe = Me % (Ue || 255),
          Je = Ke[Fe];
        if (void 0 === Je) return console.warn("@colyseus/schema: field not defined at", {
          index: Fe,
          ref: ye.constructor.name,
          metadata: Ke
        }), -1;
        const oe = !0 === Je.deprecated,
          Re = oe ? void 0 : ye[ke](Fe),
          qe = NH(ee, Ue, ye, Fe, Re, Je.type, ie, He, be);
        oe || (null !== qe && void 0 !== qe && (ye[Je.name] = qe), Re !== qe && be?.push({
          ref: ye,
          refId: ee.currentRefId,
          op: Ue,
          field: Je.name,
          value: qe,
          previousValue: Re
        }))
      },
      rH = function(ee, ie, He, ye, Me) {
        const Ke = ye[Xe] ?? ye,
          Ue = ie[He.offset++];
        if (Ue === be.CLEAR) return ee.removeChildRefs(Ke, Me), void Ke.clear();
        const Fe = Ei.number(ie, He),
          Je = Ke[pe],
          oe = Ke.constructor.COLLECTION_KIND;
        let Re;
        (Ue & be.ADD) === be.ADD ? oe === nH ? (Re = Ei.string(ie, He), Ke.setIndex(Fe, Re)) : Re = Fe : Re = Ke.getIndex(Fe);
        const qe = Ke[ke](Fe),
          fe = NH(ee, Ue, ye, Fe, qe, Je, ie, He, Me);
        if (null !== ee.resyncVisited && mH(ee, ye, Ue, Re, qe, fe, Me), null !== fe && void 0 !== fe) switch (oe) {
          case nH:
            Ke.$items.set(Re, fe);
            break;
          case jH:
            Ke.$setAt(Fe, fe, null !== ee.resyncVisited && Ue === be.ADD ? be.REPLACE : Ue);
            break;
          case sH:
          case IH:
          case hH:
            Ke.$items.has(Fe) || (Ke.$items.set(Fe, fe), "number" === typeof Ke.$refId && Fe >= Ke.$refId && (Ke.$refId = Fe + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Ke.constructor?.name} \u2014 item at index ${Fe} was not stored.`)
        }
        qe !== fe && Me?.push({
          ref: ye,
          refId: ee.currentRefId,
          op: Ue,
          dynamicIndex: Re,
          value: fe,
          previousValue: qe
        })
      },
      QH = function(ee, ie, He, ye, Me) {
        const Ke = ye[Xe] ?? ye;
        let Ue, Fe = ie[He.offset++];
        if (Fe === be.CLEAR) return ee.removeChildRefs(Ke, Me), void Ke.clear();
        if (Fe === be.REVERSE) return void Ke.items.reverse();
        if (Fe === be.DELETE_BY_REFID) {
          const Fe = Ei.number(ie, He),
            Je = ee.root.refs.get(Fe);
          if (void 0 === Je) return;
          if (ee.root.removeRef(Fe), Ue = Ke.findIndex((ee => ee === Je)), -1 === Ue) return;
          return Ke[qe](Ue), void Me?.push({
            ref: ye,
            refId: ee.currentRefId,
            op: be.DELETE,
            dynamicIndex: Ue,
            value: void 0,
            previousValue: Je
          })
        }
        if (Fe === be.ADD_BY_REFID) {
          const ye = Ei.number(ie, He),
            be = ee.root.refs.get(ye);
          be && (Ue = Ke.findIndex((ee => ee === be))), -1 !== Ue && void 0 !== Ue || (Ue = Ke.length)
        } else Ue = Ei.number(ie, He);
        const Je = Ke[pe];
        let oe = Ue;
        const Re = Ke.items[Ue],
          ke = NH(ee, Fe, ye, Ue, Re, Je, ie, He, Me);
        null !== ee.resyncVisited && mH(ee, ye, Fe, Ue, Re, ke, Me), null !== ke && void 0 !== ke && ke !== Re && Ke.$setAt(Ue, ke, null !== ee.resyncVisited && Fe === be.ADD ? be.REPLACE : Fe), Re !== ke && Me?.push({
          ref: ye,
          refId: ee.currentRefId,
          op: Fe,
          dynamicIndex: oe,
          value: ke,
          previousValue: Re
        })
      };
    class ey extends Error {}

    function iy(ee, ie, He, ye) {
      if (!(ee instanceof ie)) throw new ey(`a '${ie.name}' was expected, but '${ee&&ee.constructor.name}' was provided in ${He.constructor.name}#${ye}`)
    }
    const Hy = (ee, ie) => {
        const He = ee.toString(),
          ye = ie.toString();
        return He < ye ? -1 : He > ye ? 1 : 0
      },
      yy = {
        get: (ee, ie) => "symbol" === typeof ie || isNaN(ie) ? Reflect.get(ee, ie) : ee.items[ie],
        set: (ee, ie, He) => {
          if ("symbol" !== typeof ie && !isNaN(ie)) {
            if (void 0 === He || null === He) ee.$deleteAt(ie);
            else {
              let ye;
              if (He[Te]) {
                iy(He, ee[pe], ee, ie);
                const Me = ee.items[ie];
                ee.isMovingItems ? (ye = ee.$wireIndex(Number(ie)), void 0 !== Me ? He[Te].isNew ? ee[Te].indexedOperation(ye, be.MOVE_AND_ADD) : (ee[Te].getChange(ye) & be.DELETE) === be.DELETE ? ee[Te].indexedOperation(ye, be.DELETE_AND_MOVE) : ee[Te].indexedOperation(ye, be.MOVE) : He[Te].isNew && ee[Te].indexedOperation(ye, be.ADD), He[Te].setParent(ee, ee[Te].root, ye)) : ye = ee.$changeAt(Number(ie), He), void 0 !== Me && Me[Te].root?.remove(Me[Te])
              } else ye = ee.$changeAt(Number(ie), He);
              ee.items[ie] = He, void 0 !== ye && (ee.tmpItems[ye] = He)
            }
            return !0
          }
          return Reflect.set(ee, ie, He)
        },
        deleteProperty: (ee, ie) => ("number" === typeof ie ? ee.$deleteAt(ie) : delete ee[ie], !0),
        has: (ee, ie) => "symbol" === typeof ie || isNaN(Number(ie)) ? Reflect.has(ee, ie) : Reflect.has(ee.items, ie)
      };
    class by {
      [Te];
      [Ue];
      [Xe];
      [pe];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Je] = uH;
      static[oe] = QH;
      static COLLECTION_KIND = jH;
      static[Re](ee, ie, He) {
        if (!He) return !0;
        const ye = ee[Xe] ?? ee;
        return "string" === typeof ye[pe] || He.isChangeTreeVisible(ye.tmpItems[ie]?.[Te])
      }
      static is(ee) {
        return Array.isArray(ee) || void 0 !== ee.array
      }
      static from(ee) {
        return new by(...Array.from(ee))
      }
      constructor() {
        this[pe] = void 0, this[Xe] = this;
        const ee = new Proxy(this, yy);
        return Object.defineProperty(this, Te, {
          value: new YH(ee, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), ee
      }
      static initializeForDecoder() {
        const ee = Object.create(by.prototype);
        ee.items = [], ee.isMovingItems = !1, ee._needsCompaction = !1, ee[pe] = void 0, ee[Xe] = ee;
        const ie = new Proxy(ee, yy);
        return aH(ee, ie), ie
      }
      set length(ee) {
        0 === ee ? this.clear() : ee < this.items.length ? this.splice(ee, this.length - ee) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Te].pause()
      }
      resumeTracking() {
        this[Te].resume()
      }
      untracked(ee) {
        return this[Te].untracked(ee)
      }
      get isTrackingPaused() {
        return this[Te].paused
      }
      push() {
        const ee = this[Xe],
          ie = ee.items,
          He = ee.tmpItems,
          ye = ee[Te],
          Me = ee[pe];
        let Ke = He.length;
        for (let Ue = 0, Fe = arguments.length; Ue < Fe; Ue++, Ke++) {
          const Fe = Ue < 0 || arguments.length <= Ue ? void 0 : arguments[Ue];
          if (void 0 === Fe || null === Fe) return;
          "object" === typeof Fe && Me && iy(Fe, Me, ee, Ue), ye.indexedOperation(Ke, be.ADD), ie.push(Fe), He.push(Fe), Fe[Te]?.setParent(this, ye.root, Ke)
        }
        return Ke
      }
      pop() {
        const ee = this[Xe],
          ie = ee.tmpItems,
          He = ee.deletedIndexes;
        let ye = -1;
        for (let Me = ie.length - 1; Me >= 0; Me--)
          if (!0 !== He[Me]) {
            ye = Me;
            break
          } if (ye < 0) return;
        const be = ee.$isUnsentAdd(ye);
        return ee[Te].delete(ye), be ? ee.$cancelAdd(ye) : He[ye] = !0, ee.items.pop()
      }
      at(ee) {
        return ee < 0 && (ee += this.length), this.items[ee]
      }
      $wireIndex(ee) {
        const ie = this.deletedIndexes;
        if (0 === ie.length) return ee;
        const He = this.tmpItems;
        let ye = 0;
        for (let be = 0; be < He.length; be++)
          if (!0 !== ie[be]) {
            if (ye === ee) return be;
            ye++
          } return He.length + (ee - ye)
      }
      $isUnsentAdd(ee) {
        const ie = this[Te];
        return 0 === (576 & ie.flags) && !ie.paused && "string" !== typeof this[pe] && ie.operationAt(ee) === be.ADD
      }
      $cancelAdd(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const He = this[Te],
          ye = this.tmpItems[ee];
        this.tmpItems.splice(ee, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(ee, 1), He.removeAt(ee, 1);
        const be = ye?.[Te];
        void 0 !== be && void 0 === be.root && be.removeParent(this), ie && this.$reindexChildren(ee)
      }
      $reindexChildren(ee, ie) {
        if (!this[Te].hasFilteredFields) return;
        if ("string" === typeof this[pe]) return;
        const He = this.tmpItems,
          ye = He.length;
        if (void 0 !== ie)
          for (; ee < ye && He[ee] === ie[ee];) ee++;
        for (let be = ee; be < ye; be++) He[be]?.[Te]?.setParentIndex(this, be)
      }
      $changeAt(ee, ie) {
        if (void 0 === ie || null === ie) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[ee] === ie) return;
        const He = void 0 !== this.items[ee] ? "object" === typeof ie ? be.DELETE_AND_ADD : be.REPLACE : be.ADD,
          ye = this.$wireIndex(ee),
          Me = this[Te];
        return Me.change(ye, He), ie[Te]?.setParent(this, Me.root, ye), ye
      }
      $deleteAt(ee, ie) {
        this[Te].delete(this.$wireIndex(ee), ie)
      }
      $setAt(ee, ie, He) {
        He === be.ADD && void 0 !== this.items[ee] ? this.items.splice(ee, 0, ie) : He === be.DELETE_AND_MOVE ? (this.items.splice(ee, 1), this.items[ee] = ie) : (ee > this.items.length && (this._needsCompaction = !0), this.items[ee] = ie)
      }
      clear() {
        const ee = this[Xe];
        if (0 === ee.items.length) return;
        const ie = ee[Te];
        ie.forEachChild(((ee, He) => {
          ie.root?.remove(ee)
        })), ie.discard(), ie.operation(be.CLEAR), ee.items.length = 0, ee.tmpItems.length = 0
      } [Be]() {
        const ee = this[Xe] ?? this,
          ie = ee[Te];
        if (ie.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const He = ee.items;
        for (let ye = 0; ye < He.length; ye++) He[ye]?.[Be]?.();
        ee.items.length = 0, ee.tmpItems.length = 0, ee.deletedIndexes.length = 0, ie.recycle(), ee[Ue] = void 0
      }
      concat() {
        return new by(...this.items.concat(...arguments))
      }
      join(ee) {
        return this.items.join(ee)
      }
      reverse() {
        const ee = this[Xe],
          ie = ee[Te];
        if (ie.has() || ee.deletedIndexes.length > 0) {
          const ie = ee.items.slice().reverse();
          return this.clear(), this.push(...ie), this
        }
        return ie.operation(be.REVERSE), ee.items.reverse(), ee.tmpItems.reverse(), ee.$reindexChildren(0), this
      }
      shift() {
        const ee = this[Xe],
          ie = ee.items;
        if (0 === ie.length) return;
        const He = ee[Te],
          ye = ee.deletedIndexes;
        let Me = 0;
        for (; !0 === ye[Me];) Me++;
        const Ke = ee.$isUnsentAdd(Me);
        return He.delete(Me, be.DELETE), Ke ? ee.$cancelAdd(Me) : ye[Me] = !0, ie.shift()
      }
      slice(ee, ie) {
        const He = new by;
        return He.push(...this.items.slice(ee, ie)), He
      }
      sort() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hy;
        const ie = this[Xe];
        ie.isMovingItems = !0;
        const He = ie[Te];
        return ie.items.sort(ee).forEach(((ee, ie) => He.change(ie, be.REPLACE))), ie.tmpItems.sort(ee), ie.$reindexChildren(0), ie.isMovingItems = !1, this
      }
      splice(ee, ie) {
        const He = this[Xe],
          ye = He[Te],
          Me = He.items,
          Ke = He.tmpItems,
          Ue = He.deletedIndexes,
          Fe = Me.length,
          Je = Ke.length;
        for (var oe = arguments.length, Re = new Array(oe > 2 ? oe - 2 : 0), ke = 2; ke < oe; ke++) Re[ke - 2] = arguments[ke];
        const qe = Re.length,
          fe = [];
        for (let be = 0; be < Je; be++) !0 !== Ue[be] && fe.push(be);
        let pe;
        if (Fe > ee) {
          void 0 === ie && (ie = Fe - ee);
          for (let Me = ee; Me < ee + ie; Me++) {
            const ee = fe[Me],
              ie = He.$isUnsentAdd(ee);
            ye.delete(ee, be.DELETE), ie ? (pe ??= []).push(ee) : Ue[ee] = !0
          }
        } else ie = 0;
        if (qe > 0) {
          const Me = fe[ee] ?? Fe,
            Je = Math.min(qe, ie);
          for (let ee = 0; ee < Je; ee++) {
            const ie = Me + ee;
            let He;
            const Fe = void 0 !== pe ? pe.indexOf(ie) : -1; - 1 !== Fe ? (pe.splice(Fe, 1), He = be.ADD) : He = Ue[ie] ? be.DELETE_AND_ADD : be.ADD, ye.indexedOperation(ie, He), Ke[ie] = Re[ee], Ue[ie] = !1, Re[ee][Te]?.setParent(this, ye.root, ie)
          }
          const oe = qe - Je;
          if (oe > 0) {
            const ee = Me + Je;
            ye.insertAt(ee, oe);
            for (let ie = 0; ie < oe; ie++) Re[Je + ie][Te]?.setParent(this, ye.root, ee + ie);
            Ue.length > 0 && Ue.splice(ee, 0, ...new Array(oe).fill(!1)), Ke.splice(ee, 0, ...Re.slice(Je)), He.$reindexChildren(ee + oe)
          }
        }
        if (void 0 !== pe && pe.length > 0) {
          for (let ee = pe.length - 1; ee >= 0; ee--) He.$cancelAdd(pe[ee], !1);
          He.$reindexChildren(pe[0])
        }
        return ye.root?.enqueueChangeTree(ye), Me.splice(ee, ie, ...Re)
      }
      unshift() {
        const ee = this[Xe],
          ie = ee[Te];
        ie.unshift(arguments.length);
        for (let ye = 0; ye < arguments.length; ye++)(ye < 0 || arguments.length <= ye ? void 0 : arguments[ye])?.[Te]?.setParent(this, ie.root, ye);
        const He = ee.deletedIndexes;
        return He.length > 0 && He.unshift(...new Array(arguments.length).fill(!1)), ee.tmpItems.unshift(...arguments), ee.$reindexChildren(arguments.length), ee.items.unshift(...arguments)
      }
      indexOf(ee, ie) {
        return this.items.indexOf(ee, ie)
      }
      lastIndexOf(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(ee, ie)
      }
      every(ee, ie) {
        return this.items.every(ee, ie)
      }
      some(ee, ie) {
        return this.items.some(ee, ie)
      }
      forEach(ee, ie) {
        return this.items.forEach(ee, ie)
      }
      map(ee, ie) {
        return this.items.map(ee, ie)
      }
      filter(ee, ie) {
        return this.items.filter(ee, ie)
      }
      reduce(ee, ie) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(ee, ie) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(ee, ie) {
        return this.items.find(ee, ie)
      }
      findIndex(ee, ie) {
        return this.items.findIndex(ee, ie)
      }
      fill(ee, ie, He) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(ee, ie, He) {
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
        return by
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
      includes(ee, ie) {
        return this.items.includes(ee, ie)
      }
      flatMap(ee, ie) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(ee) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(ee, ie) {
        const He = this.items.slice();
        return ee < 0 && (ee += this.length), He[ee] = ie, new by(...He)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(ee) {
        return this.items.slice().sort(ee)
      }
      toSpliced(ee, ie) {
        for (var He = arguments.length, ye = new Array(He > 2 ? He - 2 : 0), be = 2; be < He; be++) ye[be - 2] = arguments[be];
        const Me = this.items.slice();
        return Me.splice.apply(Me, arguments), Me
      }
      shuffle() {
        return this.move((ee => {
          let ie = this.items.length;
          for (; 0 != ie;) {
            let ee = Math.floor(Math.random() * ie);
            ie--, [this[ie], this[ee]] = [this[ee], this[ie]]
          }
        }))
      }
      move(ee) {
        return this.isMovingItems = !0, ee(this), this.isMovingItems = !1, this
      } [ke](ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = this[Xe] ?? this;
        return ie || He.deletedIndexes[ee] ? He.items[ee] : He.tmpItems[ee] || He.items[ee]
      } [qe](ee) {
        const ie = this[Xe] ?? this;
        ie.items[ee] = void 0, ie._needsCompaction = !0
      } [ze]() {
        const ee = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, ee), this.deletedIndexes.length = 0)
      } [Ee]() {
        const ee = this[Xe] ?? this;
        ee._needsCompaction && (ee._needsCompaction = !1, ee.items = ee.items.filter((ee => void 0 !== ee)))
      } [fe](ee, ie, He) {
        const ye = this[Xe] ?? this,
          be = ye.items;
        let Me = !1;
        for (let Ke = 0; Ke < be.length; Ke++) {
          const Ue = be[Ke];
          ee.has(Ke) ? He(Ue) : (Me = !0, ie(Ue, Ke), ye[qe](Ke))
        }
        Me && ye[Ee]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((ee => "function" === typeof ee.toJSON ? ee.toJSON() : ee))
      }
      clone(ee) {
        let ie;
        return ee ? (ie = new by, ie.push(...this.items)) : ie = new by(...this.map((ee => ee[Te] ? ee.clone() : ee))), ie
      }
    }
    di("array", {
      constructor: by
    });
    class My {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(ee) {
        const ie = this.indexByKey[ee];
        return void 0 === ie ? void 0 : ie
      }
      assign(ee) {
        const ie = this.nextIndex++;
        return this.indexByKey[ee] = ie, this.keyByIndex.set(ie, ee), ie
      }
      snapshot(ee, ie) {
        (this.snapshots ??= new Map).set(ee, ie)
      }
      forgetSnapshot(ee) {
        this.snapshots?.delete(ee)
      }
      snapshotAt(ee) {
        return this.snapshots?.get(ee)
      }
      setIndex(ee, ie) {
        this.keyByIndex.set(ee, ie), this.indexByKey[ie] = ee
      }
      keyOf(ee) {
        return this.keyByIndex.get(ee)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [ee] of this.snapshots) {
            const ie = this.keyByIndex.get(ee);
            void 0 !== ie && (delete this.indexByKey[ie], this.keyByIndex.delete(ee))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Ky {
      [Te];
      [Ue];
      childType;
      [pe];
      $items = new Map;
      journal = new My;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(ee) {
        (this._stream ??= Zi()).maxPerTick = ee
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(ee) {
        (this._stream ??= Zi()).priority = ee
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Je] = LH;
      static[oe] = rH;
      static COLLECTION_KIND = nH;
      static[Re](ee, ie, He) {
        if (!He || "string" === typeof ee[pe]) return !0;
        const ye = ee[ke](ie) ?? ee.journal.snapshotAt(ie);
        return He.isChangeTreeVisible(ye[Te])
      }
      static is(ee) {
        return void 0 !== ee.map
      }
      constructor(ee) {
        if (Object.defineProperty(this, Te, {
            value: new YH(this),
            enumerable: !1,
            writable: !0
          }), this[pe] = void 0, ee)
          if (ee instanceof Map || ee instanceof Ky) ee.forEach(((ee, ie) => this.set(ie, ee)));
          else
            for (const ie in ee) this.set(ie, ee[ie])
      }
      static initializeForDecoder() {
        const ee = Object.create(Ky.prototype);
        return ee.$items = new Map, ee.journal = new My, ee[pe] = void 0, aH(ee), ee
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Ky
      }
      set(ee, ie) {
        if (void 0 === ie || null === ie) throw new Error(`MapSchema#set('${ee}', ${ie}): trying to set ${ie} value on '${ee}'.`);
        "object" === typeof ie && this[pe] && iy(ie, this[pe], this, ee), ee = ee.toString();
        const He = this[Te],
          ye = void 0 !== ie[Te],
          Me = this.journal;
        let Ke, Ue = Me.indexOf(ee);
        if (void 0 !== Ue) {
          Ke = be.REPLACE;
          const He = this.$items.get(ee);
          if (He === ie) return;
          ye && (Ke = be.DELETE_AND_ADD, void 0 !== He && He[Te].root?.remove(He[Te])), void 0 !== Me.snapshotAt(Ue) && Me.forgetSnapshot(Ue)
        } else Ue = Me.assign(ee), Ke = be.ADD;
        return this.$items.set(ee, ie), Ke === be.ADD && He.isStreamCollection ? void 0 !== He.root && Di(this, He.root, Ue) : He.change(Ue, Ke), ye && ie[Te].setParent(this, He.root, Ue), this
      }
      get(ee) {
        return this.$items.get(ee)
      }
      getOrInsert(ee, ie) {
        return this.$items.has(ee) ? this.$items.get(ee) : (this.set(ee, ie), ie)
      }
      getOrInsertComputed(ee, ie) {
        if (this.$items.has(ee)) return this.$items.get(ee);
        const He = ie(ee);
        return this.set(ee, He), He
      }
      delete(ee) {
        if (!this.$items.has(ee)) return !1;
        const ie = this.journal.indexOf(ee),
          He = this.$items.get(ee),
          ye = this[Te];
        if (ye.isStreamCollection) {
          const be = ye.root;
          let Me = !1;
          return void 0 !== be && (Me = Pi(this, be, this[Ue], ie)), void 0 !== He?.[Te] && be?.remove(He[Te]), this.$items.delete(ee), Me || this.journal.snapshot(ie, He), !0
        }
        return this.journal.snapshot(ie, He), ye.delete(ie), this.$items.delete(ee)
      }
      clear() {
        const ee = this[Te];
        ee.discard(), ee.forEachChild(((ie, He) => {
          ee.root?.remove(ie)
        })), this.journal.reset(), this.$items.clear(), ee.operation(be.CLEAR)
      } [Be]() {
        const ee = this[Te];
        if (ee.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((ee => ee?.[Be]?.())), this.$items.clear(), this.journal.reset(), ee.recycle(), this[Ue] = void 0
      }
      has(ee) {
        return this.$items.has(ee)
      }
      forEach(ee) {
        this.$items.forEach(ee)
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
        this[Te].pause()
      }
      resumeTracking() {
        this[Te].resume()
      }
      untracked(ee) {
        return this[Te].untracked(ee)
      }
      get isTrackingPaused() {
        return this[Te].paused
      }
      setIndex(ee, ie) {
        this.journal.setIndex(ee, ie)
      }
      getIndex(ee) {
        return this.journal.keyOf(ee)
      } [ke](ee) {
        const ie = this.journal.keyOf(ee);
        return void 0 !== ie ? this.$items.get(ie) : void 0
      } [qe](ee) {
        const ie = this.journal.keyOf(ee);
        void 0 !== ie && (this.$items.delete(ie), this.journal.keyByIndex.delete(ee))
      } [fe](ee, ie, He) {
        let ye = null;
        if (this.$items.forEach(((be, Me) => {
            ee.has(Me) ? He(be) : ((ye ??= new Set).add(Me), ie(be, Me))
          })), null !== ye) {
          ye.forEach((ee => {
            this.$items.delete(ee), delete this.journal.indexByKey[ee]
          }));
          const ee = [];
          this.journal.keyByIndex.forEach(((ie, He) => {
            ye.has(ie) && ee.push(He)
          }));
          for (let ie = 0; ie < ee.length; ie++) this.journal.keyByIndex.delete(ee[ie])
        }
      } [ze]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(ee) {
        ai(this, ee)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (ee => {
          let [ie, He] = ee;
          return [ie, "function" === typeof He.toJSON ? He.toJSON() : He]
        })))
      }
      clone(ee) {
        let ie;
        return ee ? ie = Object.assign(new Ky, this) : (ie = new Ky, this.forEach(((ee, He) => {
          ee[Te] ? ie.set(He, ee.clone()) : ie.set(He, ee)
        }))), ie
      }
    }
    di("map", {
      constructor: Ky
    });
    class Uy {
      [Te];
      [Ue];
      [pe];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(ee) {
        (this._stream ??= Zi()).maxPerTick = ee
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(ee) {
        (this._stream ??= Zi()).priority = ee
      }
      static[Je] = CH;
      static[oe] = rH;
      static COLLECTION_KIND = IH;
      static[Re](ee, ie, He) {
        return !He || "string" === typeof ee[pe] || He.isChangeTreeVisible((ee[ke](ie) ?? ee.deletedItems[ie])[Te])
      }
      static is(ee) {
        return void 0 !== ee.collection
      }
      constructor(ee) {
        Object.defineProperty(this, Te, {
          value: new YH(this),
          enumerable: !1,
          writable: !0
        }), this[pe] = void 0, ee && ee.forEach((ee => this.add(ee)))
      }
      static initializeForDecoder() {
        const ee = Object.create(Uy.prototype);
        return ee.$items = new Map, ee.deletedItems = {}, ee.$refId = 0, ee[pe] = void 0, aH(ee), ee
      }
      add(ee) {
        const ie = this.$refId++,
          He = this[Te];
        return this.$items.set(ie, ee), He.isStreamCollection ? void 0 !== He.root && Di(this, He.root, ie) : He.change(ie), void 0 !== ee[Te] && ee[Te].setParent(this, He.root, ie), ie
      }
      at(ee) {
        const ie = Array.from(this.$items.keys())[ee];
        return this.$items.get(ie)
      }
      entries() {
        return this.$items.entries()
      }
      delete(ee) {
        const ie = this.$items.entries();
        let He, ye;
        for (;
          (ye = ie.next()) && !ye.done;)
          if (ee === ye.value[1]) {
            He = ye.value[0];
            break
          } if (void 0 === He) return !1;
        const be = this[Te];
        if (be.isStreamCollection) {
          const ee = be.root,
            ie = this.$items.get(He);
          return void 0 !== ee && Pi(this, ee, this[Ue], He), void 0 !== ie?.[Te] && ee?.remove(ie[Te]), this.deletedItems[He] = ie, this.$items.delete(He)
        }
        return this.deletedItems[He] = be.delete(He), this.$items.delete(He)
      }
      clear() {
        const ee = this[Te];
        ee.discard(), ee.forEachChild(((ie, He) => {
          ee.root?.remove(ie)
        })), this.$items.clear(), ee.operation(be.CLEAR)
      } [Be]() {
        const ee = this[Te];
        if (ee.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((ee => ee?.[Be]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, ee.recycle(), this[Ue] = void 0
      }
      has(ee) {
        return Array.from(this.$items.values()).some((ie => ie === ee))
      }
      forEach(ee) {
        this.$items.forEach(((ie, He, ye) => ee(ie, He, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Te].pause()
      }
      resumeTracking() {
        this[Te].resume()
      }
      untracked(ee) {
        return this[Te].untracked(ee)
      }
      get isTrackingPaused() {
        return this[Te].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(ee, ie) {}
      getIndex(ee) {
        return ee
      } [ke](ee) {
        return this.$items.get(ee)
      } [qe](ee) {
        this.$items.delete(ee)
      } [fe](ee, ie, He) {
        let ye = null;
        if (this.$items.forEach(((be, Me) => {
            ee.has(Me) ? He(be) : ((ye ??= []).push(Me), ie(be, Me))
          })), null !== ye)
          for (let be = 0; be < ye.length; be++) this[qe](ye[be])
      } [ze]() {
        for (const ee in this.deletedItems) delete this.deletedItems[ee]
      }
      _dropView(ee) {
        ai(this, ee)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const ee = [];
        return this.forEach(((ie, He) => {
          ee.push("function" === typeof ie.toJSON ? ie.toJSON() : ie)
        })), ee
      }
      clone(ee) {
        let ie;
        return ee ? ie = Object.assign(new Uy, this) : (ie = new Uy, this.forEach((ee => {
          ee[Te] ? ie.add(ee.clone()) : ie.add(ee)
        }))), ie
      }
    }
    di("collection", {
      constructor: Uy
    });
    class Fy {
      [Te];
      [Ue];
      [pe];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(ee) {
        (this._stream ??= Zi()).maxPerTick = ee
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(ee) {
        (this._stream ??= Zi()).priority = ee
      }
      static[Je] = CH;
      static[oe] = rH;
      static COLLECTION_KIND = sH;
      static[Re](ee, ie, He) {
        return !He || "string" === typeof ee[pe] || He.isVisible((ee[ke](ie) ?? ee.deletedItems[ie])[Te])
      }
      static is(ee) {
        return void 0 !== ee.set
      }
      constructor(ee) {
        Object.defineProperty(this, Te, {
          value: new YH(this),
          enumerable: !1,
          writable: !0
        }), this[pe] = void 0, ee && ee.forEach((ee => this.add(ee)))
      }
      static initializeForDecoder() {
        const ee = Object.create(Fy.prototype);
        return ee.$items = new Map, ee.deletedItems = {}, ee.$refId = 0, ee[pe] = void 0, aH(ee), ee
      }
      add(ee) {
        if (this.has(ee)) return !1;
        const ie = this.$refId++,
          He = this[Te];
        return this.$items.set(ie, ee), He.isStreamCollection ? void 0 !== He.root && Di(this, He.root, ie) : He.change(ie, be.ADD), void 0 !== ee[Te] && ee[Te].setParent(this, He.root, ie), ie
      }
      entries() {
        return this.$items.entries()
      }
      delete(ee) {
        const ie = this.$items.entries();
        let He, ye;
        for (;
          (ye = ie.next()) && !ye.done;)
          if (ee === ye.value[1]) {
            He = ye.value[0];
            break
          } if (void 0 === He) return !1;
        const be = this[Te];
        if (be.isStreamCollection) {
          const ee = be.root,
            ie = this.$items.get(He);
          return void 0 !== ee && Pi(this, ee, this[Ue], He), void 0 !== ie?.[Te] && ee?.remove(ie[Te]), this.deletedItems[He] = ie, this.$items.delete(He)
        }
        return this.deletedItems[He] = be.delete(He), this.$items.delete(He)
      }
      clear() {
        const ee = this[Te];
        ee.discard(), this.$items.clear(), ee.operation(be.CLEAR)
      } [Be]() {
        const ee = this[Te];
        if (ee.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((ee => ee?.[Be]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, ee.recycle(), this[Ue] = void 0
      }
      has(ee) {
        const ie = this.$items.values();
        let He, ye = !1;
        for (;
          (He = ie.next()) && !He.done;)
          if (ee === He.value) {
            ye = !0;
            break
          } return ye
      }
      forEach(ee) {
        this.$items.forEach(((ie, He, ye) => ee(ie, He, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Te].pause()
      }
      resumeTracking() {
        this[Te].resume()
      }
      untracked(ee) {
        return this[Te].untracked(ee)
      }
      get isTrackingPaused() {
        return this[Te].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(ee, ie) {}
      getIndex(ee) {
        return ee
      } [ke](ee) {
        return this.$items.get(ee)
      } [qe](ee) {
        this.$items.delete(ee)
      } [fe](ee, ie, He) {
        let ye = null;
        if (this.$items.forEach(((be, Me) => {
            ee.has(Me) ? He(be) : ((ye ??= []).push(Me), ie(be, Me))
          })), null !== ye)
          for (let be = 0; be < ye.length; be++) this[qe](ye[be])
      } [ze]() {
        for (const ee in this.deletedItems) delete this.deletedItems[ee]
      }
      _dropView(ee) {
        ai(this, ee)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const ee = [];
        return this.forEach(((ie, He) => {
          ee.push("function" === typeof ie.toJSON ? ie.toJSON() : ie)
        })), ee
      }
      clone(ee) {
        let ie;
        return ee ? ie = Object.assign(new Fy, this) : (ie = new Fy, this.forEach((ee => {
          ee[Te] ? ie.add(ee.clone()) : ie.add(ee)
        }))), ie
      }
    }
    di("set", {
      constructor: Fy
    });
    class Jy {
      [Te];
      [Ue];
      [pe];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(ee) {
        (this._stream ??= Zi()).maxPerTick = ee
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(ee) {
        (this._stream ??= Zi()).priority = ee
      }
      static $isStream = !0;
      static[Je] = CH;
      static[oe] = rH;
      static COLLECTION_KIND = hH;
      static[Re](ee, ie, He) {
        if (!He) return !0;
        const ye = ee[ke](ie);
        return void 0 !== ye && He.isVisible(ye[Te])
      }
      static is(ee) {
        return ee && void 0 !== ee.stream
      }
      constructor() {
        Object.defineProperty(this, Te, {
          value: new YH(this),
          enumerable: !1,
          writable: !0
        }), this[pe] = void 0
      }
      static initializeForDecoder() {
        const ee = Object.create(Jy.prototype);
        return ee.$items = new Map, ee.$nextPosition = 0, ee._itemIndex = new Map, ee[pe] = void 0, aH(ee), ee
      }
      add(ee) {
        if (this._itemIndex.has(ee)) return -1;
        const ie = this.$nextPosition++;
        this.$items.set(ie, ee), this._itemIndex.set(ee, ie);
        const He = this[Te].root;
        return void 0 !== ee[Te] && ee[Te].setParent(this, He, ie), void 0 !== He && Di(this, He, ie), ie
      }
      remove(ee) {
        const ie = this._itemIndex.get(ee);
        if (void 0 === ie) return !1;
        this._itemIndex.delete(ee), this.$items.delete(ie);
        const He = this[Te].root;
        return void 0 !== He && (Pi(this, He, this[Ue], ie), void 0 !== ee[Te] && He.remove(ee[Te])), !0
      }
      has(ee) {
        return this._itemIndex.has(ee)
      }
      clear() {
        const ee = this[Te].root;
        if (void 0 !== ee) {
          ! function(ee, ie, He) {
            const ye = ee._stream;
            if (void 0 !== ye) {
              ye.broadcastPending.clear();
              for (const ee of ye.sentBroadcast) ye.broadcastDeletes.add(ee);
              ye.sentBroadcast.clear(), ie.forEachActiveView((ee => {
                ye.pendingByView.get(ee.id)?.clear();
                const ie = ye.sentByView.get(ee.id);
                if (void 0 !== ie && ie.size > 0) {
                  let ye = ee.changes.get(He);
                  void 0 === ye && (ye = new Map, ee.changes.set(He, ye));
                  for (const ee of ie) ye.set(ee, be.DELETE);
                  ie.clear()
                }
              }))
            }
          }(this, ee, this[Ue]);
          for (const ie of this.$items.values()) void 0 !== ie[Te] && ee.remove(ie[Te])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(ee) {
        for (const [ie, He] of this.$items) ee(He, ie, this)
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
      setIndex(ee, ie) {}
      getIndex(ee) {
        return ee
      } [ke](ee) {
        return this.$items.get(ee)
      } [qe](ee) {
        const ie = this.$items.get(ee);
        void 0 !== ie && (this._itemIndex.delete(ie), this.$items.delete(ee))
      } [fe]() {} [ze]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const ee = [];
        return this.forEach((ie => {
          ee.push("function" === typeof ie?.toJSON ? ie.toJSON() : ie)
        })), ee
      }
      clone(ee) {
        if (ee) {
          return Object.assign(new Jy, this)
        }
        const ie = new Jy;
        return ie.maxPerTick = this.maxPerTick, this.forEach((ee => {
          ie.add("function" === typeof ee?.clone ? ee.clone() : ee)
        })), ie
      }
      _dropView(ee) {
        ai(this, ee)
      }
      _unregister() {}
    }
    di("stream", {
      constructor: Jy
    });
    class oy {
      [Oe] = !0;
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
      constructor(ee) {
        this._type = ee
      }
      default (ee) {
        return this._default = ee, this._hasDefault = !0, this
      }
      view(ee) {
        return this._view = ee ?? -1, this
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
        const ee = this._type;
        if (ee && "object" === typeof ee && void 0 !== ee.array) throw new Error(ti);
        return this._stream = !0, this
      }
      priority(ee) {
        return this._streamPriority = ee, this
      }
      deprecated() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = ee, this
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

    function Ry(ee) {
      return null != ee && !0 === ee[Oe]
    }

    function ky(ee) {
      return () => new oy(ee)
    }

    function qy(ee) {
      if (Ry(ee)) {
        const ie = ee._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof ie?`use the type name instead: t.array("${ie}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return ee
    }

    function fy(ee) {
      return new oy({
        quantized: xi(ee)
      })
    }
    const Ty = Object.freeze({
        string: ky("string"),
        number: ky("number"),
        boolean: ky("boolean"),
        int8: ky("int8"),
        uint8: ky("uint8"),
        int16: ky("int16"),
        uint16: ky("uint16"),
        int32: ky("int32"),
        uint32: ky("uint32"),
        int64: ky("int64"),
        uint64: ky("uint64"),
        float32: ky("float32"),
        float64: ky("float64"),
        bigint64: ky("bigint64"),
        biguint64: ky("biguint64"),
        ref: ee => new oy(ee),
        array: ee => new oy({
          array: qy(ee)
        }),
        map: ee => new oy({
          map: qy(ee)
        }),
        set: ee => new oy({
          set: qy(ee)
        }),
        collection: ee => new oy({
          collection: qy(ee)
        }),
        stream: ee => {
          const ie = new oy({
            stream: qy(ee)
          });
          return ie._stream = !0, ie
        },
        quantized: fy,
        angle: ee => fy({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: ee?.bits ?? 16
        })
      }),
      py = -1;

    function Xy(ee) {
      return mi.register(ee), ee
    }

    function zy() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : py;
      return function(ie, He) {
        const ye = Ni.initialize(ie.constructor);
        Ni.setTag(ye, He, ee)
      }
    }

    function By(ee, ie) {
      const He = Ni.initialize(ee.constructor);
      Ni.setUnreliable(He, ie)
    }

    function Ey(ee, ie) {
      const He = Ni.initialize(ee.constructor);
      Ni.setPatchOnly(He, ie)
    }

    function gy(ee, ie) {
      const He = Ni.initialize(ee.constructor);
      Ni.setFullStateOnly(He, ie)
    }

    function Oy(ee, ie) {
      return function(He, ye) {
        const be = He.constructor;
        if (!ee) throw new Error(`${be.name}: @type() reference provided for "${ye}" is undefined. Make sure you don't have any circular dependencies.`);
        ee = Si(ee, `${be.name}.${ye}`), mi.register(be);
        const Me = Object.getPrototypeOf(be)[Symbol.metadata],
          Ke = Ni.initialize(be);
        let Ue = Ke[ye];
        if (void 0 !== Ke[Ue]) {
          if (Ke[Ue].deprecated) return;
          if (void 0 !== Ke[Ue].type) {
            const ee = new Error(`@colyseus/schema: Duplicate '${ye}' definition on '${be.name}'.\nCheck @type() annotation`);
            throw new Error(`${ee.message} ${ee.stack.split("\n")[4].trim()}`)
          }
        } else Ue = Ke[Ze] ?? (Me && Me[Ze]) ?? -1, Ue++;
        if (ie && ie.manual) Ni.addField(Ke, Ue, ye, ee, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: ie,
            childType: He
          } = li(ee);
          Ni.addField(Ke, Ue, ye, ee, Wy(ye, Ue, He, ie))
        }
        Ke[de][ye] && Object.defineProperty(He, ye, Ke[de][ye]), ("string" === typeof ee || Li(ee)) && (Ke[te] || Object.defineProperty(Ke, te, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Ke[te][Ue] = "string" === typeof ee ? ii[ee] : ui(ee.quantized))
      }
    }
    const dy = {
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

    function Wy(ee, ie, He, ye) {
      let Me;
      return Me = ye ? function(ee, ie, He, ye) {
        const Me = ye.constructor === by,
          Ke = ye.constructor === Ky;
        return function(ee) {
          const ye = this[ge],
            Ue = ye[ie];
          if (ee !== Ue) {
            if (void 0 !== ee && null !== ee) {
              if (!Me || ee instanceof by)
                if (!Ke || ee instanceof Ky) ee[pe] = He;
                else {
                  const ie = new Ky;
                  if (ie[pe] = He, ee instanceof Map) ee.forEach(((ee, He) => ie.set(He, ee)));
                  else
                    for (const He in ee) ie.set(He, ee[He]);
                  ee = ie
                }
              else {
                const ie = new by;
                ie[pe] = He, ie.push(...ee), ee = ie
              }
              const ye = this[Te],
                Je = this.constructor;
              void 0 !== Ue && null !== Ue && Ue[Te] ? (ye.root?.remove(Ue[Te]), Je[Fe](ye, ie, be.DELETE_AND_ADD)) : Je[Fe](ye, ie, be.ADD), ee[Te]?.setParent(this, ye.root, ie)
            } else void 0 !== Ue && null !== Ue && this[Te].delete(ie);
            ye[ie] = ee
          }
        }
      }(0, ie, He, ye) : "string" === typeof He ? function(ee, ie, He) {
        const ye = dy[He],
          Me = "string" === He,
          Ke = "boolean" === He;
        return function(He) {
          const Ue = this[ge],
            Je = Ue[ie];
          if (He !== Je) {
            if (void 0 !== He && null !== He) {
              if (!Ke && void 0 !== ye && typeof He !== ye && (!Me || null !== He)) {
                const ie = He && He.constructor ? ` (${He.constructor.name})` : "";
                throw new ey(`a '${ye}' was expected, but '${JSON.stringify(He)}'${ie} was provided in ${this.constructor.name}#${ee}`)
              }
              this.constructor[Fe](this[Te], ie, be.ADD)
            } else void 0 !== Je && null !== Je && this[Te].delete(ie);
            Ue[ie] = He
          }
        }
      }(ee, ie, He) : Li(He) ? function(ee, ie, He) {
        return function(ye) {
          const Me = this[ge],
            Ke = Me[ie];
          if (void 0 !== ye && null !== ye) {
            if ("number" !== typeof ye) throw new ey(`a 'number' was expected, but '${JSON.stringify(ye)}' was provided in ${this.constructor.name}#${ee}`);
            if ((ye = vi(He, Ci(He, ye))) === Ke) return;
            this.constructor[Fe](this[Te], ie, be.ADD)
          } else {
            if (ye === Ke) return;
            void 0 !== Ke && null !== Ke && this[Te].delete(ie)
          }
          Me[ie] = ye
        }
      }(ee, ie, He.quantized) : function(ee, ie, He) {
        return function(ye) {
          const Me = this[ge],
            Ke = Me[ie];
          if (ye !== Ke) {
            if (void 0 !== ye && null !== ye) {
              iy(ye, He, this, ee);
              const Me = this[Te],
                Ue = this.constructor;
              void 0 !== Ke && null !== Ke && Ke[Te] ? (Me.root?.remove(Ke[Te]), Ue[Fe](Me, ie, be.DELETE_AND_ADD)) : Ue[Fe](Me, ie, be.ADD), ye[Te]?.setParent(this, Me.root, ie)
            } else void 0 !== Ke && null !== Ke && this[Te].delete(ie);
            Me[ie] = ye
          }
        }
      }(ee, ie, He), {
        get: function() {
          return this[ge][ie]
        },
        set: Me,
        enumerable: !0,
        configurable: !0
      }
    }

    function ty() {
      let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(ie, He) {
        const ye = Ni.initialize(ie.constructor);
        Ni.setDeprecated(ye, He), ee && (ye[de] ??= {}, ye[de][He] = {
          get: function() {
            throw new Error(`${He} is deprecated.`)
          },
          set: function(ee) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(ie, He, ye[de][He]))
      }
    }
    let Zy = !1;

    function wy(ee, ie, He) {
      Zy || (Zy = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let ye in ie) Oy(ie[ye], He)(ee.prototype, ye);
      return ee
    }

    function Dy(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ay;
      if (null == ee || "object" !== typeof ee) throw new Error(`schema(): first argument must be a fields object (got ${typeof ee}).`);
      const ye = {},
        be = {},
        Me = {},
        Ke = {},
        Ue = (ee, ie) => {
          if (ie.hasDefault)((ee, ie) => {
            "function" === typeof ie ? Ke[ee] = ie : ie && "function" === typeof ie.clone ? Ke[ee] = () => ie.clone() : Me[ee] = ie
          })(ee, ie.default);
          else if (!ie.optional) {
            const He = function(ee) {
              if (ee && "object" === typeof ee) {
                if (void 0 !== ee.array) return () => new by;
                if (void 0 !== ee.map) return () => new Ky;
                if (void 0 !== ee.set) return () => new Fy;
                if (void 0 !== ee.collection) return () => new Uy;
                if (void 0 !== ee.stream) return () => new Jy
              } else if ("function" === typeof ee && Ay.is(ee) && (!ee.prototype.initialize || 0 === ee.prototype.initialize.length)) return () => new ee
            }(ie.type);
            He && (Ke[ee] = He)
          }
        },
        Fe = {},
        Je = [],
        oe = [],
        Re = {},
        ke = [],
        qe = [],
        fe = {},
        Te = [];
      for (const ge in ee) {
        const He = ee[ge],
          Me = `schema(${ie?`'${ie}'`:""}): field '${ge}'`;
        if (Ry(He)) {
          const ee = He.toDefinition();
          if (ee.noSync) {
            if (void 0 !== ee.view || ee.unreliable || ee.patchOnly || ee.fullStateOnly || ee.stream) throw new Error(`${Me} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            Ue(ge, ee);
            continue
          }
          if (ee.patchOnly && ee.fullStateOnly) throw new Error(`${Me} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const ie = Si(ee.type, Me);
          if ("function" === typeof ie && !Ay.is(ie)) throw new Error(`${Me} is a synced ref to non-Schema class '${ie.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          ye[ge] = ie, void 0 !== ee.view && (Fe[ge] = ee.view), ee.unreliable && Je.push(ge), ee.patchOnly && oe.push(ge), ee.deprecated && (Re[ge] = ee.deprecatedThrows), ee.fullStateOnly && ke.push(ge), ee.stream && qe.push(ge), void 0 !== ee.streamPriority && (fe[ge] = ee.streamPriority), ee.optional && Te.push(ge), Ue(ge, ee)
        } else {
          if ("function" !== typeof He) throw new Error(`${Me} must be a t.* builder, Schema subclass, or method (got ${typeof He}).`);
          Ay.is(He) ? (ye[ge] = He, He.prototype.initialize && 0 !== He.prototype.initialize.length || (Ke[ge] = () => new He)) : be[ge] = He
        }
      }
      const pe = ee => {
          for (const ie in Me) ee[ie] = Me[ie];
          for (const ie in Ke) ee[ie] = Ke[ie]()
        },
        Xe = () => {
          const ee = {};
          return pe(ee), ee
        },
        ze = "function" === typeof be.initialize,
        Be = be.initialize ?? He._initialize,
        Ee = class extends He {
          constructor() {
            for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
            const be = ie[0];
            void 0 === be ? (super(), pe(this)) : super(Object.assign(Xe(), ze ? (ee => {
              const ie = Object.keys(ye),
                He = {};
              for (const ye in ee) ie.includes(ye) || (He[ye] = ee[ye]);
              return He
            })(be) : be)), Be && new.target === Ee && Be.apply(this, ie)
          }
        };
      ie && Object.defineProperty(Ee, "name", {
        value: ie
      }), Ni.setFields(Ee, ye), Ee._getDefaultValues = Xe, Ee._initialize = Be, Object.assign(Ee.prototype, be);
      for (const ge in Fe) zy(Fe[ge])(Ee.prototype, ge);
      for (const ge of Je) By(Ee.prototype, ge);
      for (const ge of oe) Ey(Ee.prototype, ge);
      for (const ge in Re) ty(Re[ge])(Ee.prototype, ge);
      if (ke.length > 0 || qe.length > 0) {
        const ee = Ee[Symbol.metadata];
        for (const ie of ke) Ni.setFullStateOnly(ee, ie);
        for (const ie of qe) Ni.setStream(ee, ie);
        for (const ie in fe) Ni.setStreamPriority(ee, ie, fe[ie])
      }
      if (Te.length > 0) {
        const ee = Ee[Symbol.metadata];
        for (const ie of Te) ee[ee[ie]].optional = !0
      }
      return Ee.extend = (ee, ie) => Dy(ee, ie, Ee), Ee
    }

    function Py(ee) {
      const ie = ee[Te].root,
        He = {
          ops: {},
          refs: []
        };
      let ye = ie.changes.next;
      for (; ye;) {
        const ee = ye.changeTree;
        void 0 !== ee ? (He.refs.push(`refId#${ee.ref[Ue]}`), ee.forEach(((ee, ie) => {
          if (ee < 0 || !ie) return;
          const ye = be[ie];
          He.ops[ye] || (He.ops[ye] = 0), He.ops[ye]++
        })), ye = ye.next) : ye = ye.next
      }
      return He
    }
    class Ay {
      static[Je] = xH;
      static[oe] = GH;
      [Ue];
      [ge];
      static initialize(ee) {
        Object.defineProperty(ee, Te, {
          value: new YH(ee),
          enumerable: !1,
          writable: !0
        }), ee[ge] = []
      }
      static initializeForDecoder() {
        const ee = Object.create(this.prototype);
        return aH(ee), ee[ge] = [], ee
      }
      static reset(ee) {
        const ie = ee?.[Te];
        if (void 0 === ie || "function" !== typeof ie.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== ie.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${ee.constructor.name}) with multiple parents.`);
        ee[Be]()
      } [Be]() {
        const ee = this.constructor[Symbol.metadata],
          ie = ee?.[we] ?? [],
          He = this[ge];
        for (let ye = 0; ye < ie.length; ye++) {
          const ee = He[ie[ye]];
          ee?.[Be]?.()
        }
        this[Te].recycle(), this[Ue] = void 0
      }
      static is(ee) {
        const ie = ee[Symbol.metadata];
        return "object" === typeof ie && null !== ie
      }
      static isSchema(ee) {
        return "function" === typeof ee?.assign
      }
      static[Fe](ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be.ADD;
        ee.change(ie, He)
      }
      static[Re](ee, ie, He) {
        const ye = ee.constructor[Symbol.metadata],
          be = ye[ie]?.tag;
        return void 0 === He ? void 0 === be : void 0 === be || (be === py ? He.isChangeTreeVisible(ee[Te]) : He.hasTagOnTree(ee[Te], be))
      }
      constructor(ee) {
        Ay.initialize(this), ee && Ay.assignProps(this, ee)
      }
      assign(ee) {
        return Ay.assignProps(this, ee), this
      }
      static assignProps(ee, ie) {
        const He = ee.constructor[Symbol.metadata];
        if (He && void 0 !== He[Ze])
          for (let be = 0; be <= He[Ze]; be++) {
            const ye = He[be];
            if (!ye) continue;
            const Me = ie[ye.name];
            void 0 !== Me && (ee[ye.name] = Me)
          }
        const ye = Object.keys(ie);
        for (let be = 0; be < ye.length; be++) {
          const Me = ye[be];
          He && void 0 !== He[Me] || (ee[Me] = ie[Me])
        }
      }
      restore(ee) {
        const ie = this.constructor[Symbol.metadata];
        for (const He in ie) {
          const ye = ie[He],
            be = ye.name,
            Me = ye.type,
            Ke = ee[be];
          if (void 0 !== Ke && null !== Ke)
            if ("string" === typeof Me) this[be] = Ke;
            else if (Ay.is(Me)) {
            const ee = new Me;
            ee.restore(Ke), this[be] = ee
          } else if ("object" === typeof Me) {
            const ee = Object.keys(Me)[0],
              ie = Me[ee];
            if ("map" === ee) {
              const ee = this[be];
              for (const He in Ke)
                if (Ay.is(ie)) {
                  const ye = new ie;
                  ye.restore(Ke[He]), ee.set(He, ye)
                } else ee.set(He, Ke[He])
            } else if ("array" === ee) {
              const ee = this[be];
              for (let He = 0; He < Ke.length; He++)
                if (Ay.is(ie)) {
                  const ye = new ie;
                  ye.restore(Ke[He]), ee.push(ye)
                } else ee.push(Ke[He])
            }
          }
        }
        return this
      }
      setDirty(ee, ie) {
        const He = this.constructor[Symbol.metadata];
        this[Te].change(He[He[ee]].index, ie)
      }
      pauseTracking() {
        this[Te].pause()
      }
      resumeTracking() {
        this[Te].resume()
      }
      untracked(ee) {
        return this[Te].untracked(ee)
      }
      get isTrackingPaused() {
        return this[Te].paused
      }
      clone() {
        const ee = Object.create(this.constructor.prototype);
        Ay.initialize(ee);
        const ie = this.constructor[Symbol.metadata];
        for (const He in ie) {
          const ye = ie[He].name;
          "object" === typeof this[ye] && "function" === typeof this[ye]?.clone ? ee[ye] = this[ye].clone() : ee[ye] = this[ye]
        }
        return ee
      }
      toJSON() {
        const ee = {},
          ie = this.constructor[Symbol.metadata];
        for (const He in ie) {
          const ye = ie[He],
            be = ye.name;
          ye.deprecated || null === this[be] || "undefined" === typeof this[be] || (ee[be] = "function" === typeof this[be].toJSON ? this[be].toJSON() : this[be])
        }
        return ee
      }
      discardAllChanges() {
        this[Te].discardAll()
      } [ke](ee) {
        return this[this.constructor[Symbol.metadata][ee].name]
      } [qe](ee) {
        this[this.constructor[Symbol.metadata][ee].name] = void 0
      }
      static debugRefIds(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 ? arguments[3] : void 0,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Me = ie ? ` - ${JSON.stringify(ee.toJSON())}` : "",
          Ke = ee[Te],
          Fe = ee[Ue],
          Je = ye ? ye.root.refCount[Fe] : Ke.refCount,
          oe = Je > 1 ? ` [\xd7${Je}]` : "";
        let Re = `${function(ee){return new Array(ee).fill(0).map(((ie,He)=>He===ee-1?"\u2514\u2500 ":"   ")).join("")}(He)}${be}${ee.constructor.name} (refId: ${Fe})${oe}${Me}\n`;
        return Ke.forEachChild(((be, Me) => {
          let Ke = Me;
          "number" === typeof Me && ee.$indexes && (Ke = ee.$indexes.get(Me) ?? Me);
          const Ue = void 0 !== ee.forEach && void 0 !== Ke ? `["${Ke}"]: ` : "";
          Re += this.debugRefIds(be.ref, ie, He + 1, ye, Ue)
        })), Re
      }
      static debugRefIdEncodingOrder(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const He = [],
          ye = ee[Te];
        if ("changes" === ie) {
          let ee = ye.root.changes?.next;
          for (; ee;) ee.changeTree && He.push(ee.changeTree.ref[Ue]), ee = ee.next;
          return He
        }
        const be = "allFilteredChanges" === ie,
          Me = new Set,
          Ke = ee => {
            Me.has(ee) || (Me.add(ee), ee.isFiltered === be && He.push(ee.ref[Ue]), ee.forEachChild(((ee, ie) => Ke(ee))))
          };
        return Ke(ye), He
      }
      static debugRefIdsFromDecoder(ee) {
        return this.debugRefIds(ee.state, !1, 0, ee)
      }
      static debugChanges(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = ee[Te],
          ye = ie ? "allChanges" : "changes";
        let Me = `${ee.constructor.name} (${ee[Ue]}) -> .${ye}:\n`;
        return ie ? He.forEachLive((ee => {
          Me += `- [${ee}]: ADD (${JSON.stringify(He.getValue(Number(ee),!0))})\n`
        })) : He.forEach(((ee, ie) => {
          ee < 0 || !ie || (Me += `- [${ee}]: ${be[ie]} (${JSON.stringify(He.getValue(Number(ee),!1))})\n`)
        })), Me
      }
    }
    Me(Ay);
    const Yy = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Vy {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const ee = {};
        for (const ie in this.changeTrees) ee[ie] = this.changeTrees[ie].refCount;
        return ee
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
      enqueueFilterRefresh(ee) {
        this.types.hasFilters && (ee.flags & PH || (ee.flags |= PH, this.pendingFilterRefresh.push(ee)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(ee) {
        this._freeViewIds.push(ee)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(ee) {
        this.activeViews.set(ee.id, new WeakRef(ee))
      }
      unregisterView(ee) {
        this.activeViews.delete(ee.id);
        const ie = ee.id;
        for (const He of this.streamTrees) He._dropView(ie)
      }
      forEachActiveView(ee) {
        for (const [ie, He] of this.activeViews) {
          const ye = He.deref();
          if (void 0 !== ye) ee(ye);
          else {
            this.activeViews.delete(ie);
            for (const ee of this.streamTrees) ee._dropView(ie)
          }
        }
      }
      registerStream(ee) {
        this.streamTrees.add(ee)
      }
      unregisterStream(ee) {
        this.streamTrees.delete(ee)
      }
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = ee, this.nextUniqueId = ie
      }
      add(ee) {
        const ie = ee.ref;
        void 0 === ie[Ue] && (Yy.value = this.nextUniqueId++, Object.defineProperty(ie, Ue, Yy));
        const He = ie[Ue],
          ye = void 0 === this.changeTrees[He];
        ye && (this.changeTrees[He] = ee), ee.needsRestage && (ee.needsRestage = !1, ee.forEachLiveWithCtx(ee, bH));
        const be = ye ? 0 : ee.refCount;
        return ee.refCount = be + 1, be > 0 && this.enqueueFilterRefresh(ee), ye
      }
      remove(ee) {
        const ie = ee.refCount - 1;
        if (ie <= 0) {
          if (ee.root = void 0, delete this.changeTrees[ee.ref[Ue]], ee.isStreamCollection) {
            const ie = ee.ref;
            ie._unregister?.(), this.unregisterStream(ie)
          }
          this.removeFromQueue(ee), this.removeFromUnreliableQueue(ee), ee.refCount = 0, ee.needsRestage = !0, ee.forEachChild(((ie, He) => {
            ie.removeParent(ee.ref) && (void 0 === ie.parentRef || ie.refCount > 0 ? this.remove(ie) : this.moveNextToParent(ie))
          }))
        } else ee.refCount = ie, this.enqueueFilterRefresh(ee), this.recursivelyMoveNextToParent(ee);
        return ie
      }
      recursivelyMoveNextToParent(ee) {
        this.moveNextToParent(ee), ee.forEachChild(((ee, ie) => this.recursivelyMoveNextToParent(ee)))
      }
      moveNextToParent(ee) {
        ee.changesNode && this._moveNextToParentInList(this.changes, ee, ee.changesNode, "changesNode"), ee.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, ee, ee.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(ee, ie, He, ye) {
        const be = ie.parent;
        if (!be || !be[Te]) return;
        const Me = be[Te][ye];
        Me && Me !== He && (He.position > Me.position || (He.prev ? He.prev.next = He.next : ee.next = He.next, He.next ? He.next.prev = He.prev : ee.tail = He.prev, He.prev = ee.tail, He.next = void 0, ee.tail.next = He, ee.tail = He, He.position = ee.nextPosition++))
      }
      enqueueChangeTree(ee) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.changesNode) || (ee.changesNode = this._appendToList(this.changes, ee))
      }
      enqueueUnreliable(ee) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.unreliableChangesNode) || (ee.unreliableChangesNode = this._appendToList(this.unreliableChanges, ee))
      }
      _appendToList(ee, ie) {
        const He = this._nodePool;
        let ye;
        return He.length > 0 ? (ye = He.pop(), ye.changeTree = ie, ye.next = void 0, ye.prev = void 0) : ye = {
          changeTree: ie,
          next: void 0,
          prev: void 0,
          position: 0
        }, ee.next ? (ye.prev = ee.tail, ee.tail.next = ye, ee.tail = ye) : (ee.nextPosition = 0, ee.next = ye, ee.tail = ye), ye.position = ee.nextPosition++, ye
      }
      releaseNode(ee) {
        ee.changeTree = void 0, ee.prev = void 0, ee.next = void 0, this._nodePool.push(ee)
      }
      removeFromQueue(ee) {
        return this._removeNode(this.changes, ee, ee.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(ee) {
        return this._removeNode(this.unreliableChanges, ee, ee.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(ee, ie, He, ye) {
        return !(!He || He.changeTree !== ie) && (He.prev ? He.prev.next = He.next : ee.next = He.next, He.next ? He.next.prev = He.prev : ee.tail = He.prev, ie[ye] = void 0, this.releaseNode(He), !0)
      }
    }

    function ay(ee, ie) {
      if (-1 === ie || ie >= ee.length) return !1;
      const He = ee.length - 1;
      for (let ye = ie; ye < He; ye++) ee[ye] = ee[ye + 1];
      return ee.length = He, !0
    }

    function cy(ee, ie, He) {
      const ye = ~He,
        be = ee.changeTrees;
      for (const Me in be) {
        const ee = be[Me],
          He = ee.visibleViews;
        void 0 !== He && ie < He.length && (He[ie] &= ye);
        const Ke = ee.subscribedViews;
        void 0 !== Ke && ie < Ke.length && (Ke[ie] &= ye);
        const Ue = ee.tagViews;
        void 0 !== Ue && Ue.forEach((ee => {
          ie < ee.length && (ee[ie] &= ye)
        }))
      }
    }
    const xy = new FinalizationRegistry((ee => {
      let {
        root: ie,
        id: He,
        slot: ye,
        bit: be
      } = ee;
      cy(ie, ye, be), ie.activeViews.delete(He);
      for (const Me of ie.streamTrees) Me._dropView(He);
      ie.releaseViewId(He)
    }));

    function Ly(ee) {
      if (void 0 === ee) return "undefined";
      if (null === ee) return "null";
      const ie = typeof ee;
      return "string" === ie ? JSON.stringify(ee.length > 30 ? `${ee.slice(0,30)}\u2026` : ee) : "object" !== ie && "function" !== ie ? `${ie} ${String(ee)}` : Array.isArray(ee) ? `Array(${ee.length})` : ee.constructor?.name ?? "Object"
    }
    class Cy {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = ee, ee && (this.items = [])
      }
      _bindRoot(ee) {
        void 0 === this._root && (this._root = ee, this.id = ee.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), ee.registerView(this), xy.register(this, {
          root: ee,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), cy(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), xy.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(ee) {
        const ie = ee.visibleViews,
          He = this._slot;
        return void 0 !== ie && He < ie.length && 0 !== (ie[He] & this._bit)
      }
      markVisible(ee) {
        const ie = this._slot;
        let He = ee.visibleViews;
        for (void 0 === He && (He = ee.visibleViews = []); He.length <= ie;) He.push(0);
        He[ie] |= this._bit
      }
      unmarkVisible(ee) {
        const ie = ee.visibleViews;
        if (void 0 === ie) return;
        const He = this._slot;
        He < ie.length && (ie[He] &= ~this._bit)
      }
      isSubscribed(ee) {
        const ie = ee.subscribedViews,
          He = this._slot;
        return void 0 !== ie && He < ie.length && 0 !== (ie[He] & this._bit)
      }
      _setSubscribed(ee) {
        const ie = this._slot;
        let He = ee.subscribedViews;
        for (void 0 === He && (He = ee.subscribedViews = []); He.length <= ie;) He.push(0);
        He[ie] |= this._bit
      }
      _clearSubscribed(ee) {
        const ie = ee.subscribedViews;
        if (void 0 === ie) return;
        const He = this._slot;
        He < ie.length && (ie[He] &= ~this._bit)
      }
      hasTagOnTree(ee, ie) {
        const He = ee.tagViews;
        if (void 0 === He) return !1;
        const ye = this._slot,
          be = this._bit;
        for (let Me = ie; 0 !== Me; Me &= Me - 1) {
          const ee = He.get(Me & -Me);
          if (void 0 !== ee && ye < ee.length && 0 !== (ee[ye] & be)) return !0
        }
        return !1
      }
      addTag(ee, ie) {
        if (ie === py) return;
        let He = ee.tagViews;
        void 0 === He && (He = ee.tagViews = new Map);
        const ye = this._slot,
          be = this._bit;
        for (let Me = ie; Me > 0; Me &= Me - 1) {
          const ee = Me & -Me;
          let ie = He.get(ee);
          for (void 0 === ie && (ie = [], He.set(ee, ie)); ie.length <= ye;) ie.push(0);
          ie[ye] |= be
        }
      }
      removeTag(ee, ie) {
        if (ie === py) return;
        const He = ee.tagViews;
        if (void 0 === He) return;
        const ye = this._slot,
          be = ~this._bit;
        for (let Me = ie; Me > 0; Me &= Me - 1) {
          const ee = He.get(Me & -Me);
          void 0 !== ee && ye < ee.length && (ee[ye] &= be)
        }
      }
      removeAllTagsOnTree(ee) {
        const ie = ee.tagViews;
        if (void 0 === ie) return;
        const He = this._slot,
          ye = ~this._bit;
        ie.forEach((ee => {
          He < ee.length && (ee[He] &= ye)
        }))
      }
      add(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : py,
          He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(ee, ie, He, !1)
      }
      _addImmediate(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : py;
        this._add(ee, ie, !0, !0)
      }
      _add(ee, ie, He, ye) {
        const Me = ee?.[Te];
        if (!Me) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${Ly(ee)}`), !1;
        const Ke = Me.parent;
        if (!Ke && 0 !== ee[Ue]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Me.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Me.root && this._bindRoot(Me.root);
        const Fe = Ke?.[Te];
        if (!ye && Fe?.isStreamCollection) return Vi(Ke, this.id, Me.parentIndex), !0;
        const Je = ee.constructor[Symbol.metadata],
          oe = this.isVisible(Me);
        if (!this.iterable || !He || oe && -1 !== this.items.indexOf(ee) || this.items.push(ee), this.markVisible(Me), He && Ke && this.addParentOf(Me, ie), !ye && Me.isStreamCollection) return !0;
        if (ie === py && Me.isNew) return this._markSubtreeVisible(Me, ie), !1;
        let Re = this.changes.get(ee[Ue]);
        void 0 === Re && (Re = new Map, this.changes.set(ee[Ue], Re));
        let ke = !1;
        const qe = Me.encDescriptor.tags;
        if (Me.forEachChild(((ee, He) => {
            const ye = qe[He];
            if (void 0 !== ye) {
              if (!(ye === py || ie !== py && 0 !== (ye & ie))) return
            }
            this.add(ee.ref, ie, !1) && (ke = !0)
          })), ie !== py) {
          this.addTag(Me, ie);
          const ee = Je?.[Pe];
          if (void 0 !== ee)
            for (let He = ie; He > 0; He &= He - 1) ee[He & -He]?.forEach((ee => {
              Me.getChange(ee) !== be.DELETE && Re.set(ee, be.ADD)
            }))
        }
        if ((ie === py || !oe) && (!Me.isNew || ke))
          if (Me.isArray && "string" !== typeof Me.refTarget[pe]) Me.refTarget.items.length > 0 && (Re.set(-1, be.ADD), ke = !0);
          else {
            const ee = Me.encDescriptor.tags;
            Me.forEachLive((He => {
              const ye = ee[He];
              (void 0 === ye || ye === py || ie !== py && 0 !== (ye & ie)) && (Re.set(He, be.ADD), ke = !0)
            }))
          } return ke
      }
      _markSubtreeVisible(ee, ie) {
        const He = ee.encDescriptor.tags;
        ee.forEachChild(((ee, ye) => {
          const be = He[ye];
          if (void 0 !== be) {
            if (!(be === py || ie !== py && 0 !== (be & ie))) return
          }
          ee.isNew ? (this.markVisible(ee), this._markSubtreeVisible(ee, ie)) : this._add(ee.ref, ie, !1, !1)
        }))
      }
      addParentOf(ee, ie) {
        const He = ee.parent[Te],
          ye = ee.parentIndex;
        this.isVisible(He) || this.markVisible(He);
        const Me = He.parent?.[Te];
        if (Me && this.addParentOf(He, ie), He.hasFilteredFields && He.getChange(ye) !== be.DELETE) {
          let Me = this.changes.get(He.ref[Ue]);
          void 0 === Me && (Me = new Map, this.changes.set(He.ref[Ue], Me));
          const Ke = He.encDescriptor.tags[ye];
          void 0 !== Ke && Ke !== py && 0 !== (Ke & ie) && this.addTag(He, ie), Me.set(He.isArray ? ee : ye, be.ADD)
        }
      }
      _touchAncestorsOf(ee) {
        let ie = ee.parent?.[Te];
        if (void 0 === ie) return;
        const He = [];
        for (; void 0 !== ie;) {
          if (ie.hasFilteredFields) {
            const ee = ie.ref[Ue];
            if (this.changes.has(ee)) break;
            He.push(ie)
          }
          ie = ie.parent?.[Te]
        }
        for (let ye = He.length - 1; ye >= 0; ye--) this.changes.set(He[ye].ref[Ue], new Map)
      }
      remove(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : py,
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = ee?.[Te];
        if (!ye) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${Ly(ee)}`), this;
        const Me = ye.parent?.[Te];
        if (Me?.isStreamCollection) return this.unmarkVisible(ye), this.iterable && !He && ay(this.items, this.items.indexOf(ee)),
          function(ee, ie, He, ye, Me) {
            const Ke = ee._stream;
            if (void 0 === Ke) return !1;
            const Ue = Ke.pendingByView.get(ie);
            if (Ue?.has(ye)) return Ue.delete(ye), !1;
            const Fe = Ke.sentByView.get(ie);
            if (Fe?.has(ye)) {
              Fe.delete(ye);
              let ee = Me.get(He);
              return void 0 === ee && (ee = new Map, Me.set(He, ee)), ee.set(ye, be.DELETE), !0
            }
          }(ye.parent, this.id, ye.parent[Ue], ye.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(ye), this;
        if (ye.isStreamCollection) {
          this.unmarkVisible(ye), this.iterable && !He && ay(this.items, this.items.indexOf(ee));
          const ie = ye.ref,
            Me = ie._stream;
          if (void 0 !== Me) {
            Me.pendingByView.get(this.id)?.clear();
            const ee = Me.sentByView.get(this.id);
            if (void 0 !== ee && ee.size > 0) {
              const He = ie[Ue];
              let ye = this.changes.get(He);
              void 0 === ye && (ye = new Map, this.changes.set(He, ye));
              for (const ie of ee) ye.set(ie, be.DELETE);
              ee.clear()
            }
          }
          return this
        }
        this.unmarkVisible(ye), this.iterable && !He && ay(this.items, this.items.indexOf(ee));
        const Ke = ye.ref,
          Fe = Ke.constructor[Symbol.metadata],
          Je = Ke[Ue];
        this._touchAncestorsOf(ye);
        let oe = this.changes.get(Je);
        if (void 0 === oe && (oe = new Map, this.changes.set(Je, oe)), ie === py) {
          const ee = ye.parent;
          if (ee && !Ni.isValidInstance(ee) && ye.isFiltered) {
            const ie = Me.isArray ? ye : ye.parentIndex,
              He = ee[Ue];
            let Ke = this.changes.get(He);
            void 0 === Ke ? (Ke = new Map, this.changes.set(He, Ke)) : Ke.get(ie) === be.ADD && this._dropPendingEntries(ye), Ke.set(ie, be.DELETE), this._recursiveDeleteVisibleChangeTree(ye)
          } else Fe?.[De]?.forEach((ee => this._removeViewField(ye, oe, ee)))
        } else {
          const ee = Fe?.[Pe];
          if (void 0 !== ee)
            for (let He = ie; He > 0; He &= He - 1) ee[He & -He]?.forEach((ee => this._removeViewField(ye, oe, ee)))
        }
        return void 0 === ie ? this.removeAllTagsOnTree(ye) : this.removeTag(ye, ie), this
      }
      has(ee) {
        return this.isVisible(ee[Te])
      }
      hasTag(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : py;
        return this.hasTagOnTree(ee[Te], ie)
      }
      subscribe(ee, ie) {
        const He = ee?.[Te];
        if (!He) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${Ly(ee)}`), this;
        if (void 0 === this._root && void 0 !== He.root && this._bindRoot(He.root), void 0 !== ie)
          if (He.isStreamCollection) {
            const He = wi(ee);
            null === ie ? He.priorityByView?.delete(this.id) : (He.priorityByView ??= new Map).set(this.id, ie)
          } else {
            const ie = ee?.constructor?.name ?? "collection",
              ye = He.parent;
            if (void 0 === ye) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${ie} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const ee = ye?.constructor?.[Symbol.metadata]?.[He.parentIndex]?.name,
                be = ee ? `${ye.constructor.name}#${ee}` : ie;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${be} is a ${ie}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(He)) return this;
        const ye = void 0 !== He.parent && !this.isVisible(He);
        if (ye ? (this.addParentOf(He, py), this._add(ee, py, !1, !1)) : this.markVisible(He), this._setSubscribed(He), He.isStreamCollection) {
          const ie = ee;
          He.forEachChild(((ee, He) => {
            Vi(ie, this.id, He)
          }))
        } else ye || He.forEachChild((ee => {
          this.markVisible(ee)
        }));
        return this
      }
      unsubscribe(ee) {
        const ie = ee?.[Te];
        if (!ie) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${Ly(ee)}`), this;
        if (!this.isSubscribed(ie)) return this;
        this._clearSubscribed(ie);
        const He = ie.ref[Ue];
        if (ie.isStreamCollection) {
          const ie = ee._stream;
          if (void 0 !== ie) {
            ie.pendingByView.get(this.id)?.clear();
            const ee = ie.sentByView.get(this.id);
            if (void 0 !== ee && ee.size > 0) {
              let ie = this.changes.get(He);
              void 0 === ie && (ie = new Map, this.changes.set(He, ie));
              for (const He of ee) ie.set(He, be.DELETE);
              ee.clear()
            }
          }
        } else {
          const ee = ie.isArray;
          let ye = this.changes.get(He);
          ie.forEachChild(((ie, Me) => {
            void 0 === ye && (ye = new Map, this.changes.set(He, ye)), ye.set(ee ? ie : Me, be.DELETE), this.unmarkVisible(ie)
          }))
        }
        return this.unmarkVisible(ie), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let ee = 0, ie = this.items.length; ee < ie; ee++) this.remove(this.items[ee], py, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(ee) {
        let ie = this.isVisible(ee);
        if (!ie && ee.isVisibilitySharedWithParent)
          if (this.isVisible(ee.parent[Te])) this.markVisible(ee), ie = !0;
          else
            for (let He = ee.extraParents; void 0 !== He; He = He.next) {
              const ye = He.ref[Te];
              if (ye.isFiltered && this.isVisible(ye)) {
                this.markVisible(ee), ie = !0;
                break
              }
            }
        return ie
      }
      _recursiveDeleteVisibleChangeTree(ee) {
        ee.forEachChild((ee => {
          this.unmarkVisible(ee), this._recursiveDeleteVisibleChangeTree(ee)
        }))
      }
      _dropPendingEntries(ee) {
        this.changes.delete(ee.ref[Ue]), ee.forEachChild((ee => this._dropPendingEntries(ee)))
      }
      _removeViewField(ee, ie, He) {
        const ye = ie.get(He) === be.ADD;
        ie.set(He, be.DELETE);
        const Me = ee.ref[ee.encDescriptor.names[He]],
          Ke = Me?.[Te];
        Ke && (this.unmarkVisible(Ke), this._recursiveDeleteVisibleChangeTree(Ke), ye && this._dropPendingEntries(Ke))
      }
    }

    function vy(ee) {
      ee.structSwitchEmitted || (ee.shouldEmitSwitch && (ee.buffer[ee.it.offset++] = 255, ii.number(ee.buffer, ee.ref[Ue], ee.it)), ee.structSwitchEmitted = !0)
    }

    function uy(ee, ie) {
      Sy(ee, ie, be.ADD)
    }

    function my(ee, ie) {
      if (ie._fullSyncGen === ee.gen) return;
      ie._fullSyncGen = ee.gen;
      if (!ee.hasView || ee.view.isChangeTreeVisible(ie)) {
        const He = ie.encDescriptor;
        ee.changeTree = ie, ee.ref = ie.ref, ee.encoder = He.encoder, ee.filter = He.filter, ee.metadata = He.metadata, ee.treeIsFiltered = ie.isFiltered, ee.isSchema = He.isSchema, ee.filterBitmask = He.filterBitmask, ee.tags = He.tags, ee.structSwitchEmitted = !1, ee.shouldEmitSwitch = ee.hasView || ee.it.offset > ee.initialOffset || ie !== ee.rootChangeTree, ie.isArray && ie.collDirty.size > 0 && (ie.flags |= 512), KH(ie, ee, uy)
      }
      BH(ie, ee, ly)
    }

    function ly(ee, ie, He) {
      my(ee, ie)
    }

    function Sy(ee, ie, He) {
      if (ie < 0) {
        if (ee.treeIsFiltered !== ee.emitFiltered) return;
        return vy(ee), void(ee.buffer[ee.it.offset++] = 255 & Math.abs(ie))
      }
      if ((ee.isSchema ? ee.treeIsFiltered || (ie < 32 ? 0 !== (ee.filterBitmask & 1 << ie) : void 0 !== ee.tags[ie]) : ee.treeIsFiltered) !== ee.emitFiltered) return;
      const ye = ee.isEncodeAll ? be.ADD : He;
      void 0 !== ye && (void 0 === ee.filter || ee.filter(ee.ref, ie, ee.view)) && (vy(ee), ee.encoder(ee.self, ee.buffer, ee.changeTree, ie, ye, ee.it, ee.isEncodeAll, ee.hasView, ee.metadata))
    }

    function ny(ee, ie) {
      const He = new Uint8Array(ee.length + ie.length);
      return He.set(ee, 0), He.set(ie, ee.length), He
    }
    class jy {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(jy.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(ee, ie) {
        this.context = mi.cache(ee.constructor), this.root = ie ?? new Vy(this.context), this.setState(ee)
      }
      setState(ee) {
        this.state = ee, this.state[Te].setRoot(this.root)
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
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee.offset;
        return this._encodeChannel(ee, ie, He, ye, !1)
      }
      encodeUnreliable() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee.offset;
        return this._encodeChannel(ee, ie, He, ye, !0)
      }
      _encodeChannel(ee, ie, He, ye, be) {
        this.root.pendingFilterRefresh.length > 0 && FH(this.root);
        const Me = void 0 !== ie,
          Ke = this.state[Te],
          Ue = this._encodeCtx;
        Ue.self = this, Ue.buffer = He, Ue.it = ee, Ue.view = ie, Ue.isEncodeAll = !1, Ue.hasView = Me, Ue.emitFiltered = Me;
        let Fe = be ? this.root.unreliableChanges : this.root.changes;
        for (; Fe = Fe.next;) {
          const He = Fe.changeTree;
          if (Me && !ie.isChangeTreeVisible(He)) continue;
          const Je = be ? He.unreliableRecorder : He;
          if (!Je || !Je.has()) continue;
          const oe = He.encDescriptor;
          Ue.changeTree = He, Ue.ref = He.ref, Ue.encoder = oe.encoder, Ue.filter = oe.filter, Ue.metadata = oe.metadata, Ue.treeIsFiltered = He.isFiltered, Ue.isSchema = oe.isSchema, Ue.filterBitmask = oe.filterBitmask, Ue.tags = oe.tags, Ue.structSwitchEmitted = !1, Ue.isRootTree = He === Ke, Ue.shouldEmitSwitch = Me || ee.offset > ye || !Ue.isRootTree, Je.forEachWithCtx(Ue, Sy)
        }
        return be || Me || !this._isStreamBroadcastMode || this._emitStreamBroadcast(He, ee), ee.offset > He.byteLength ? (He = this._resizeBuffer(He, ee.offset), ee.offset = ye, this._encodeChannel(ee, ie, He, ye, be)) : He.subarray(0, ee.offset)
      }
      encodeFullSync(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ee.offset;
        this.root.pendingFilterRefresh.length > 0 && FH(this.root);
        const Me = void 0 !== ye,
          Ke = this.state[Te],
          Ue = this._encodeCtx;
        return Ue.self = this, Ue.buffer = ie, Ue.it = ee, Ue.view = ye, Ue.isEncodeAll = !0, Ue.hasView = Me, Ue.emitFiltered = He, Ue.gen = ++this._fullSyncGen, Ue.initialOffset = be, Ue.rootChangeTree = Ke, my(Ue, Ke), ee.offset > ie.byteLength ? (ie = this._resizeBuffer(ie, ee.offset), ee.offset = be, this.encodeFullSync(ee, ie, He, ye, be)) : ie.subarray(0, ee.offset)
      }
      _resizeBuffer(ee, ie) {
        const He = Math.ceil(ie / jy.BUFFER_SIZE) * jy.BUFFER_SIZE,
          ye = new Uint8Array(He);
        return ye.set(ee), ee === this.sharedBuffer && (this.sharedBuffer = ye), ye
      }
      encodeAll() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(ee, ie, !1)
      }
      encodeAllView(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const be = He.offset;
        return ye = this.encodeFullSync(He, ye, !0, ee, be), ny(ye.subarray(0, ie), ye.subarray(be, He.offset))
      }
      ensureCapacity(ee, ie) {
        if (ie + jy.BUFFER_SIZE <= ee.byteLength) return ee;
        const He = Math.ceil((ie + jy.BUFFER_SIZE) / jy.BUFFER_SIZE) * jy.BUFFER_SIZE,
          ye = new Uint8Array(He);
        return ye.set(ee.subarray(0, ie)), ee === this.sharedBuffer && (this.sharedBuffer = ye), ye
      }
      encodeView(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Me = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Ke = He.offset;
        this._emitStreamPriority(ee);
        for (const Fe of ee.changes.keys()) {
          const ie = ee.changes.get(Fe),
            Me = this.root.changeTrees[Fe];
          if (void 0 === Me) {
            ee.changes.delete(Fe);
            continue
          }
          if (0 === ie.size) continue;
          const Ke = Me.encDescriptor,
            Je = Ke.encoder,
            oe = Ke.metadata,
            Re = Me.ref,
            qe = Me.refTarget;
          ye = this.ensureCapacity(ye, He.offset), ye[He.offset++] = 255, ii.number(ye, Re[Ue], He);
          for (const [Fe, fe] of ie) {
            let ie;
            if (-1 === Fe) {
              const ee = qe.tmpItems,
                ie = qe.deletedIndexes;
              for (let Ke = 0; Ke < ee.length; Ke++) void 0 !== ee[Ke] && !0 !== ie[Ke] && Je(this, ye, Me, Ke, be.ADD, He, !1, !0, oe);
              continue
            }
            if ("number" === typeof Fe) ie = Fe;
            else {
              const He = Fe.indexInParent(Re);
              if (void 0 === He) continue;
              if (ie = He, fe === be.ADD && Me.getChange(ie) === be.DELETE) {
                ee.changes.delete(Fe.ref[Ue]);
                continue
              }
            }
            Je(this, ye, Me, ie, void 0 !== qe[ke](ie) && fe || be.DELETE, He, !1, !0, oe)
          }
        }
        return ee.changes.clear(), ye = this.encode(He, ee, ye), Me ? ny(ye.subarray(0, ie), ye.subarray(Ke, He.offset)) : ye.subarray(Ke, He.offset)
      }
      encodeUnreliableView(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const be = He.offset;
        return ye = this.encodeUnreliable(He, ee, ye, be), ny(ye.subarray(0, ie), ye.subarray(be, He.offset))
      }
      _emitStreamBroadcast(ee, ie) {
        const He = this.root.streamTrees;
        for (const ye of He) {
          const He = ye,
            Me = He[Te],
            Ke = He[Ue];
          if (void 0 === Ke) continue;
          const Fe = He._stream,
            Je = Fe.broadcastDeletes,
            oe = Fe.broadcastPending,
            Re = Fe.sentBroadcast,
            qe = Je.size > 0,
            fe = oe.size > 0,
            pe = Me.encDescriptor,
            Xe = pe.encoder,
            ze = pe.metadata;
          if (qe || fe) {
            if (ee[ie.offset++] = 255, ii.number(ee, Ke, ie), qe) {
              for (const He of Je) Xe(this, ee, Me, He, be.DELETE, ie, !1, !1, ze);
              Je.clear()
            }
            const ye = Fe.maxPerTick,
              fe = [];
            let pe = 0;
            const Be = [];
            for (const Ke of oe) {
              if (pe >= ye) break;
              const Ue = He[ke](Ke);
              void 0 !== Ue ? (Xe(this, ee, Me, Ke, be.ADD, ie, !1, !1, ze), Re.add(Ke), fe.push(Ue), Be.push(Ke), pe++) : Be.push(Ke)
            }
            for (const ee of Be) oe.delete(ee);
            for (const He of fe) {
              const ye = He[Te];
              if (void 0 === ye) continue;
              const Me = He[Ue];
              if (void 0 === Me) continue;
              ee[ie.offset++] = 255, ii.number(ee, Me, ie);
              const Ke = ye.encDescriptor,
                Fe = Ke.encoder,
                Je = Ke.metadata;
              ye.forEachLive((He => {
                Ni.hasUnreliableAtIndex(Je, He) || Fe(this, ee, ye, He, be.ADD, ie, !1, !1, Je)
              }))
            }
          }
          for (const ye of Re) {
            const be = He[ke](ye);
            if (void 0 === be) continue;
            const Me = be[Te];
            if (void 0 === Me || !Me.has()) continue;
            const Ke = be[Ue];
            if (void 0 === Ke) continue;
            ee[ie.offset++] = 255, ii.number(ee, Ke, ie);
            const Fe = Me.encDescriptor,
              Je = Fe.encoder,
              oe = Fe.metadata;
            Me.forEach(((He, ye) => {
              He < 0 || Ni.hasUnreliableAtIndex(oe, He) || Je(this, ee, Me, He, ye, ie, !1, !1, oe)
            }))
          }
        }
      }
      _emitStreamPriority(ee) {
        const ie = this.root.streamTrees;
        if (0 === ie.size) return;
        const He = ee.id;
        for (const ye of ie) {
          const ie = ye,
            Me = ie._stream,
            Ke = Me.pendingByView.get(He);
          if (void 0 === Ke || 0 === Ke.size) continue;
          const Fe = Me.priorityByView?.get(He),
            Je = void 0 !== Fe,
            oe = Me.priority,
            Re = Me.maxPerTick,
            qe = [],
            fe = [];
          if (Je || void 0 !== oe) {
            const He = [],
              ye = [];
            let be = 0;
            for (const Me of Ke) {
              const Ke = ie[ke](Me);
              if (void 0 === Ke) {
                fe.push(Me);
                continue
              }
              const Ue = Je ? Fe(Ke) : oe(ee, Ke);
              if (be < Re) {
                let ee = be++;
                for (; ee > 0 && ye[ee - 1] < Ue;) ye[ee] = ye[ee - 1], He[ee] = He[ee - 1], ee--;
                ye[ee] = Ue, He[ee] = Me
              } else if (Ue > ye[Re - 1]) {
                let ee = Re - 1;
                for (; ee > 0 && ye[ee - 1] < Ue;) ye[ee] = ye[ee - 1], He[ee] = He[ee - 1], ee--;
                ye[ee] = Ue, He[ee] = Me
              }
            }
            for (let ee = 0; ee < be; ee++) qe.push(He[ee])
          } else
            for (const ee of Ke) {
              if (qe.length >= Re) break;
              qe.push(ee)
            }
          for (const ee of fe) Ke.delete(ee);
          const pe = qe.length;
          let Xe = Me.sentByView.get(He);
          void 0 === Xe && (Xe = new Set, Me.sentByView.set(He, Xe));
          for (let He = 0; He < pe; He++) {
            const ye = qe[He],
              Me = ie[ke](ye);
            if (void 0 === Me) {
              Ke.delete(ye);
              continue
            }
            ee._addImmediate(Me);
            const Fe = Me[Te];
            if (void 0 !== Fe) {
              const ie = Me[Ue];
              let He = ee.changes.get(ie);
              void 0 === He && (He = new Map, ee.changes.set(ie, He));
              const ye = Fe.metadata;
              Fe.forEachLive((ee => {
                Ni.hasUnreliableAtIndex(ye, ee) || He.set(ee, be.ADD)
              }))
            }
            Ke.delete(ye), Xe.add(ye)
          }
        }
      }
      discardChanges() {
        const ee = this.root.changes;
        let ie = ee.next;
        const He = this.root;
        for (; ie;) {
          const ee = ie.next;
          ie.changeTree.endEncode(), He.releaseNode(ie), ie = ee
        }
        ee.next = void 0, ee.tail = void 0
      }
      discardUnreliableChanges() {
        const ee = this.root.unreliableChanges;
        let ie = ee.next;
        const He = this.root;
        for (; ie;) {
          const ee = ie.next;
          ie.changeTree.endEncodeUnreliable(), He.releaseNode(ie), ie = ee
        }
        ee.next = void 0, ee.tail = void 0
      }
      tryEncodeTypeId(ee, ie, He, ye) {
        const be = this.context.getTypeId(ie),
          Me = this.context.getTypeId(He);
        void 0 !== Me ? be !== Me && (ee[ye.offset++] = 213, ii.number(ee, Me, ye)) : console.warn(`@colyseus/schema WARNING: Class "${He.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const ee = this.root;
        if (0 === ee.streamTrees.size) return !1;
        const ie = 0 === ee.activeViews.size;
        for (const He of ee.streamTrees)
          if (ie ? Yi(He) : Ai(He, ee)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class sy extends Error {
      constructor(ee) {
        super(ee), this.name = "DecodingWarning"
      }
    }
    const Iy = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class hy {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(ee, ie), void 0 === ie[Ue] ? (Iy.value = ee, Object.defineProperty(ie, Ue, Iy)) : ie[Ue] !== ee && (ie[Ue] = ee), He && (this.refCount[ee] = (this.refCount[ee] || 0) + 1), this.deletedRefs.has(ee) && this.deletedRefs.delete(ee)
      }
      removeRef(ee) {
        const ie = this.refCount[ee];
        if (void 0 !== ie)
          if (0 !== ie)(this.refCount[ee] = ie - 1) <= 0 && this.deletedRefs.add(ee);
          else try {
            const ie = this.refs.get(ee);
            throw new sy(`trying to remove refId '${ee}' with 0 refCount (${ie.constructor.name}: ${JSON.stringify(ie)})`)
          } catch (Ub) {
            console.warn(Ub)
          } else try {
            throw new sy("trying to remove refId that doesn't exist: " + ee)
          } catch (Ub) {
            console.warn(Ub)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((ee => {
          if (this.refCount[ee] > 0) return;
          const ie = this.refs.get(ee),
            He = ie.constructor[Symbol.metadata];
          if (null != He)
            for (const ye in He) {
              const ee = ie[He[ye].name];
              if ("object" === typeof ee && ee) {
                const ie = ee[Ue];
                void 0 === ie || this.deletedRefs.has(ie) || this.removeRef(ie)
              }
            } else "function" === typeof ie[pe] && Array.from(ie.values()).forEach((ee => {
              const ie = ee[Ue];
              void 0 === ie || this.deletedRefs.has(ie) || this.removeRef(ie)
            }));
          this.refs.delete(ee), delete this.refCount[ee], delete this.callbacks[ee]
        })), this.deletedRefs.clear()
      }
      addCallback(ee, ie, He) {
        if (void 0 === ee) {
          const ee = "number" === typeof ie ? be[ie] : ie;
          throw new Error(`Can't addCallback on '${ee}' (refId is undefined)`)
        }
        return this.callbacks[ee] || (this.callbacks[ee] = {}), this.callbacks[ee][ie] || (this.callbacks[ee][ie] = []), this.callbacks[ee][ie].push(He), () => this.removeCallback(ee, ie, He)
      }
      removeCallback(ee, ie, He) {
        const ye = this.callbacks?.[ee]?.[ie]?.indexOf(He);
        void 0 !== ye && -1 !== ye && ay(this.callbacks[ee][ie], ye)
      }
    }
    class Ny {
      context;
      state;
      root;
      currentRefId = 0;
      wV;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(ee, ie) {
        this.setState(ee), this.context = ie || new mi(ee.constructor)
      }
      setState(ee) {
        this.state = ee, this.root = new hy, this.root.addRef(0, ee)
      }
      decode(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const be = void 0 !== this.wV ? [] : null,
          Me = this.root,
          Ke = ee.byteLength;
        let Ue = He.constructor[oe];
        for (this.currentRefId = 0; ie.offset < Ke;) {
          if (ee[ie.offset] == ye) {
            ie.offset++, He[Ee]?.();
            const ye = Ei.number(ee, ie),
              be = Me.refs.get(ye);
            be ? (He = be, Ue = He.constructor[oe], this.currentRefId = ye) : (console.error(`"refId" not found: ${ye}`, {
              previousRef: He,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(ee, ie, Ke));
            continue
          } - 1 !== Ue(this, ee, ie, He, be) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(ee, ie, Ke))
        }
        return He[Ee]?.(), null !== this.resyncVisited && function(ee, ie) {
          ee.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : lH(ee, ee.state, new Set, ie)
        }(this, be), null !== be && this.wV?.(be), Me.garbageCollectDeletedRefs(), be
      }
      decodeResync(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(ee, ie)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(ee, ie, He) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const be = {
          offset: ie.offset
        };
        for (; ie.offset < He && (ee[ie.offset] !== ye || (be.offset = ie.offset + 1, !this.root.refs.has(Ei.number(ee, be))));) ie.offset++
      }
      getInstanceType(ee, ie, He) {
        let ye;
        if (213 === ee[ie.offset]) {
          ie.offset++;
          const He = Ei.number(ee, ie);
          ye = this.context.get(He)
        }
        return ye || He
      }
      createInstanceOfType(ee) {
        return ee.initializeForDecoder()
      }
      removeChildRefs(ee, ie) {
        const He = "string" !== typeof ee[pe],
          ye = ee[Ue];
        ee.forEach(((Me, Ke) => {
          ie?.push({
            ref: ee,
            refId: ye,
            op: be.DELETE,
            field: Ke,
            value: void 0,
            previousValue: Me
          }), He && this.root.removeRef(Me[Ue])
        }))
      }
    }
    const Gy = Dy({
        min: Ty.float64(),
        max: Ty.float64(),
        bits: Ty.uint8(),
        mode: Ty.uint8()
      }, "QuantizedDescriptor"),
      ry = Dy({
        name: Ty.string(),
        type: Ty.string(),
        referencedType: Ty.number(),
        childPrimitive: Ty.string(),
        quantized: Ty.ref(Gy).optional()
      }, "ReflectionField"),
      Qy = Dy({
        id: Ty.number(),
        extendsId: Ty.number(),
        fields: Ty.array(ry)
      }, "ReflectionType"),
      eb = Dy({
        types: Ty.array(Qy),
        rootType: Ty.number()
      }, "Reflection");

    function ib(ee) {
      const ie = ee.root,
        He = ie.callbacks,
        ye = new WeakMap;
      let Me;

      function Ke(ee, He) {
        let Je = He.instance?.constructor[Symbol.metadata] || ee,
          oe = He.instance && "function" === typeof He.instance.forEach || ee && !Ay.is(ee);
        if (Je && !oe) {
          const ee = function(ee, be, Ke, Fe) {
            return Fe && void 0 !== He.instance[be] && !ye.has(Me) && Ke(He.instance[be], void 0), ie.addCallback(ee[Ue], be, Ke)
          };
          return new Proxy({
            listen: function(ie, be) {
              let Ke = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (He.instance) return ee(He.instance, ie, be, Ke);
              {
                let Ue = () => {};
                return He.onInstanceAvailable(((He, Fe) => {
                  Ue = ee(He, ie, be, Ke && Fe && !ye.has(Me))
                })), () => Ue()
              }
            },
            onChange: function(ee) {
              return ie.addCallback(He.instance[Ue], be.REPLACE, ee)
            },
            bindTo: function(ee, ye) {
              return ye || (ye = Object.keys(Je).map((ee => Je[ee].name))), ie.addCallback(He.instance[Ue], be.REPLACE, (() => {
                ye.forEach((ie => ee[ie] = He.instance[ie]))
              }))
            }
          }, {
            get(ee, ie) {
              const ye = Je[Je[ie]];
              if (ye) {
                const ee = He.instance?.[ie],
                  be = ye => {
                    const be = Fe(He.instance).listen(ie, ((ee, ie) => {
                      ye(ee, !1), be?.()
                    }), !1);
                    void 0 !== ee?.[Ue] && ye(ee, !0)
                  };
                return Ke(ye.type, {
                  instance: void 0 !== ee?.[Ue] && ee,
                  parentInstance: He.instance,
                  onInstanceAvailable: be
                })
              }
              return ee[ie]
            },
            has: (ee, ie) => void 0 !== Je[ie],
            set(ee, ie, He) {
              throw new Error("not allowed")
            },
            deleteProperty(ee, ie) {
              throw new Error("not allowed")
            }
          })
        } {
          const ee = function(ee, He, Ke) {
              return Ke && ee.forEach(((ee, ie) => He(ee, ie))), ie.addCallback(ee[Ue], be.ADD, ((ee, ie) => {
                ye.set(He, !0), Me = He, He(ee, ie), ye.delete(He), Me = void 0
              }))
            },
            Ke = function(ee, He) {
              return ie.addCallback(ee[Ue], be.DELETE, He)
            },
            Fe = function(ee, He) {
              return ie.addCallback(ee[Ue], be.REPLACE, He)
            };
          return new Proxy({
            lE: function(ie) {
              let be = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (He.instance) return ee(He.instance, ie, be && !ye.has(Me));
              if (He.onInstanceAvailable) {
                let Ke = () => {};
                return He.onInstanceAvailable(((He, Ue) => {
                  Ke = ee(He, ie, be && Ue && !ye.has(Me))
                })), () => Ke()
              }
            },
            JV: function(ee) {
              if (He.instance) return Ke(He.instance, ee);
              if (He.onInstanceAvailable) {
                let ie = () => {};
                return He.onInstanceAvailable((He => {
                  ie = Ke(He, ee)
                })), () => ie()
              }
            },
            onChange: function(ee) {
              if (He.instance) return Fe(He.instance, ee);
              if (He.onInstanceAvailable) {
                let ie = () => {};
                return He.onInstanceAvailable((He => {
                  ie = Fe(He, ee)
                })), () => ie()
              }
            }
          }, {
            get(ee, ie) {
              if (!ee[ie]) throw new Error(`Can't access '${ie}' through callback proxy. access the instance directly.`);
              return ee[ie]
            },
            has: (ee, ie) => void 0 !== ee[ie],
            set(ee, ie, He) {
              throw new Error("not allowed")
            },
            deleteProperty(ee, ie) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Fe(ee) {
        return Ke(void 0, {
          instance: ee
        })
      }
      return ee.wV = function(ee) {
        const ie = new Set;
        for (let ye = 0, Me = ee.length; ye < Me; ye++) {
          const Me = ee[ye],
            Ke = Me.refId,
            Fe = Me.ref,
            Je = He[Ke];
          if (Je) {
            if ((Me.op & be.DELETE) === be.DELETE && Ay.isSchema(Me.previousValue)) {
              const ee = He[Me.previousValue[Ue]]?.[be.DELETE];
              for (let ie = ee?.length - 1; ie >= 0; ie--) ee[ie]()
            }
            if (Ay.isSchema(Fe)) {
              if (!ie.has(Ke)) {
                const ee = Je?.[be.REPLACE];
                for (let ie = ee?.length - 1; ie >= 0; ie--) ee[ie]()
              }
              if (Je.hasOwnProperty(Me.field)) {
                const ee = Je[Me.field];
                for (let ie = ee?.length - 1; ie >= 0; ie--) ee[ie](Me.value, Me.previousValue)
              }
            } else {
              if ((Me.op & be.DELETE) === be.DELETE) {
                if (void 0 !== Me.previousValue) {
                  const ee = Je[be.DELETE];
                  for (let ie = ee?.length - 1; ie >= 0; ie--) ee[ie](Me.previousValue, Me.dynamicIndex ?? Me.field)
                }
                if ((Me.op & be.ADD) === be.ADD) {
                  const ee = Je[be.ADD];
                  for (let ie = ee?.length - 1; ie >= 0; ie--) ee[ie](Me.value, Me.dynamicIndex ?? Me.field)
                }
              } else if ((Me.op & be.ADD) === be.ADD && Me.previousValue !== Me.value) {
                const ee = Je[be.ADD];
                for (let ie = ee?.length - 1; ie >= 0; ie--) ee[ie](Me.value, Me.dynamicIndex ?? Me.field)
              }
              if (Me.value !== Me.previousValue && (void 0 !== Me.value || void 0 !== Me.previousValue)) {
                const ee = Je[be.REPLACE];
                for (let ie = ee?.length - 1; ie >= 0; ie--) ee[ie](Me.value, Me.dynamicIndex ?? Me.field)
              }
            }
            ie.add(Ke)
          }
        }
      }, Fe
    }

    function Hb(ee, ie) {
      ee.wV = ie
    }
    eb.encode = function(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const He = ee.context,
        ye = new eb,
        be = new jy(ye),
        Me = He.schemas.get(ee.state.constructor);
      Me > 0 && (ye.rootType = Me);
      const Ke = new Set,
        Ue = {},
        Fe = ee => {
          if (void 0 === ee.extendsId || Ke.has(ee.extendsId)) {
            Ke.add(ee.id), ye.types.push(ee);
            const ie = Ue[ee.id];
            void 0 !== ie && (delete Ue[ee.id], ie.forEach((ee => Fe(ee))))
          } else void 0 === Ue[ee.extendsId] && (Ue[ee.extendsId] = []), Ue[ee.extendsId].push(ee)
        };
      He.schemas.forEach(((ee, ie) => {
        const ye = new Qy;
        ye.id = Number(ee);
        const be = Object.getPrototypeOf(ie);
        be !== Ay && (ye.extendsId = He.schemas.get(be));
        const Me = ie[Symbol.metadata];
        if (Me !== be[Symbol.metadata]) {
          const ee = Me[Ze] ?? -1;
          for (let ie = 0; ie <= ee; ie++) {
            const ee = Me[ie];
            if (void 0 === ee) continue;
            const be = ee.name;
            if (!Object.prototype.hasOwnProperty.call(Me, be)) continue;
            const Ke = new ry;
            let Ue;
            if (Ke.name = be, "string" === typeof ee.type) Ue = ee.type;
            else if (Li(ee.type)) {
              const ie = ee.type.quantized;
              Ue = "quantized";
              const He = new Gy;
              He.min = ie.min, He.max = ie.max, He.bits = ie.bits, He.mode = ie.wrap ? 1 : 0, Ke.quantized = He
            } else {
              let ie;
              Ay.is(ee.type) ? (Ue = "ref", ie = ee.type) : (Ue = Object.keys(ee.type)[0], "string" === typeof ee.type[Ue] ? Ke.childPrimitive = ee.type[Ue] : ie = ee.type[Ue]), Ke.referencedType = ie ? He.getTypeId(ie) : -1
            }
            Ke.type = Ue, ye.fields.push(Ke)
          }
        }
        Fe(ye)
      }));
      for (const Je in Ue) Ue[Je].forEach((ee => ye.types.push(ee)));
      return be.encodeAll(ie).slice(0, ie.offset)
    }, eb.decode = function(ee, ie) {
      const He = new eb;
      new Ny(He).decode(ee, ie);
      const ye = new mi;
      He.types.forEach((ee => {
        const ie = ye.get(ee.extendsId) ?? Ay,
          He = class extends ie {};
        mi.register(He), ye.add(He, ee.id)
      }), {});
      He.types.forEach((ee => {
        const ie = ye.get(ee.id),
          be = Ni.initialize(ie),
          Me = [];
        let Ke = ee;
        do {
          Me.push(Ke), Ke = He.types.find((ee => ee.id === Ke.extendsId))
        } while (Ke);
        let Ue = 0;
        Me.reverse().forEach((ee => {
          ((ee, ie, He) => {
            ie.fields.forEach(((ie, be) => {
              const Me = He + be;
              if (void 0 !== ie.quantized) {
                const He = ie.quantized;
                Ni.addField(ee, Me, ie.name, {
                  quantized: xi({
                    min: He.min,
                    max: He.max,
                    bits: He.bits,
                    mode: 1 === He.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== ie.referencedType) {
                const He = ie.type,
                  be = ye.get(ie.referencedType) ?? ie.childPrimitive;
                "ref" === He ? Ni.addField(ee, Me, ie.name, be) : Ni.addField(ee, Me, ie.name, {
                  [He]: be
                })
              } else Ni.addField(ee, Me, ie.name, ie.type)
            }))
          })(be, ee, Ue), Ue += ee.fields.length
        }))
      }));
      const be = new(ye.get(He.rootType || 0));
      return new Ny(be, ye)
    }, eb.makeEncodable = function(ee) {
      const ie = ee[Symbol.metadata];
      if (!ie) return ee;
      const He = ie[Ze];
      if (void 0 === He) return ee;
      for (let ye = 0; ye <= He; ye++) {
        const He = ie[ye];
        He && Ni.defineField(ee, ie, ye, He.name, He.type)
      }
      return Object.prototype.hasOwnProperty.call(ee, We) && delete ee[We], ee
    };
    class yb {
      kR;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(ee) {
        this.kR = ee, this.kR.wV = this.wV.bind(this)
      }
      get callbacks() {
        return this.kR.root.callbacks
      }
      get state() {
        return this.kR.state
      }
      addCallback(ee, ie, He) {
        return this.kR.root.addCallback(ee, ie, He)
      }
      addCallbackOrWaitCollectionAvailable(ee, ie, He, ye) {
        let Me = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ke = () => {};
        const Fe = () => Ke(),
          Je = ee[ie];
        if (Je && void 0 !== Je[Ue]) return Me = Me && !1 === this.isTriggering, He === be.ADD && Me && Je.forEach(((ee, ie) => {
          ye(ee, ie)
        })), this.addCallback(Je[Ue], He, ye);
        {
          let be;
          return be = this.addCallback(ee[Ue], ie, ((ee, ie) => {
            null !== ee && void 0 !== ee && (be(), Ke = this.addCallback(ee[Ue], He, ye))
          })), Ke = be, Fe
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(ee, ie, He) {
        let ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        ye = ye && !1 === this.isTriggering;
        const be = ee[ie];
        return ye && null !== be && void 0 !== be && He(be, void 0), this.addCallback(ee[Ue], ie, He)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const ee = arguments.length <= 0 ? void 0 : arguments[0],
            ie = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(ee[Ue], be.REPLACE, ie)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], be.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], be.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      lE() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], be.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], be.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      JV() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], be.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], be.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(ee, ie, He) {
        let ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Me = ee.constructor[Symbol.metadata];
        He || (He = Object.keys(Me).filter((ee => !isNaN(Number(ee)))).map((ee => Me[ee].name)));
        const Ke = () => {
          for (const ye of He) {
            const He = ee[ye];
            void 0 !== He && (ie[ye] = He)
          }
        };
        return ye && Ke(), this.addCallback(ee[Ue], be.REPLACE, Ke)
      }
      wV(ee) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let ie = 0, He = ee.length; ie < He; ie++) {
          const He = ee[ie],
            ye = He.refId,
            Me = He.ref,
            Ke = this.callbacks[ye];
          if (Ke) {
            if ((He.op & be.DELETE) === be.DELETE && Ay.isSchema(He.previousValue)) {
              const ee = He.previousValue[Ue],
                ie = this.callbacks[ee]?.[be.DELETE];
              if (ie)
                for (let He = ie.length - 1; He >= 0; He--) try {
                  ie[He]()
                } catch (Ub) {
                  console.error(Ub)
                }
            }
            if (Ay.isSchema(Me)) {
              if (!this.uniqueRefIds.has(ye)) {
                const ee = Ke[be.REPLACE];
                if (ee)
                  for (let ie = ee.length - 1; ie >= 0; ie--) try {
                    ee[ie]()
                  } catch (Ub) {
                    console.error(Ub)
                  }
              }
              const ee = Ke[He.field];
              if (ee)
                for (let ie = ee.length - 1; ie >= 0; ie--) try {
                  ee[ie](He.value, He.previousValue)
                } catch (Ub) {
                  console.error(Ub)
                }
            } else {
              const ee = He.dynamicIndex ?? He.field;
              if ((He.op & be.DELETE) === be.DELETE) {
                if (void 0 !== He.previousValue) {
                  const ie = Ke[be.DELETE];
                  if (ie)
                    for (let ye = ie.length - 1; ye >= 0; ye--) try {
                      ie[ye](He.previousValue, ee)
                    } catch (Ub) {
                      console.error(Ub)
                    }
                }
                if ((He.op & be.ADD) === be.ADD) {
                  const ie = Ke[be.ADD];
                  if (ie)
                    for (let ye = ie.length - 1; ye >= 0; ye--) try {
                      ie[ye](He.value, ee)
                    } catch (Ub) {
                      console.error(Ub)
                    }
                }
              } else if ((He.op & be.ADD) === be.ADD && He.previousValue !== He.value) {
                const ie = Ke[be.ADD];
                if (ie)
                  for (let ye = ie.length - 1; ye >= 0; ye--) try {
                    ie[ye](He.value, ee)
                  } catch (Ub) {
                    console.error(Ub)
                  }
              }
              if (He.value !== He.previousValue) {
                const ie = Ke[be.REPLACE];
                if (ie)
                  for (let ye = ie.length - 1; ye >= 0; ye--) try {
                    ie[ye](ee, He.value)
                  } catch (Ub) {
                    console.error(Ub)
                  }
              }
            }
            this.uniqueRefIds.add(ye)
          }
        }
        this.isTriggering = !1
      }
    }
    const bb = {
      get(ee) {
        if (ee instanceof Ny) return new yb(ee);
        if ("kR" in ee.YB) return new yb(ee.YB.kR);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(ee) {
        if (ee instanceof Ny) return ib(ee);
        if ("kR" in ee.YB) return ib(ee.YB.kR);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (ee, ie) => Hb(ee, ie)
    };
    class Mb {
      _free = [];
      _factory;
      _maxSize;
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = ee, this._maxSize = ie.maxSize ?? 1 / 0;
        const He = ie.preallocate ?? 0;
        for (let ye = 0; ye < He; ye++) this._free.push(ee())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(ee) {
        Ay.reset(ee), this._free.length < this._maxSize && this._free.push(ee)
      }
      get size() {
        return this._free.length
      }
    }

    function Kb(ee) {
      return new Mb((() => new ee), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    di("map", {
      constructor: Ky
    }), di("array", {
      constructor: by
    }), di("set", {
      constructor: Fy
    }), di("collection", {
      constructor: Uy
    })
  },
  9849: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      __addDisposableResource: () => xe,
      __assign: () => Me,
      __asyncDelegator: () => te,
      __asyncGenerator: () => We,
      __asyncValues: () => Ze,
      __await: () => de,
      __awaiter: () => fe,
      __classPrivateFieldGet: () => Ve,
      __classPrivateFieldIn: () => ce,
      __classPrivateFieldSet: () => ae,
      __createBinding: () => pe,
      __decorate: () => Ue,
      __disposeResources: () => Ce,
      __esDecorate: () => Je,
      __exportStar: () => Xe,
      __extends: () => be,
      __generator: () => Te,
      __importDefault: () => Ye,
      __importStar: () => Ae,
      __makeTemplateObject: () => we,
      __metadata: () => qe,
      __param: () => Fe,
      __propKey: () => Re,
      __read: () => Be,
      __rest: () => Ke,
      __rewriteRelativeImportExtension: () => ve,
      __runInitializers: () => oe,
      __setFunctionName: () => ke,
      __spread: () => Ee,
      __spreadArray: () => Oe,
      __spreadArrays: () => ge,
      __values: () => ze,
      default: () => ue
    });
    var ye = function(ee, ie) {
      return ye = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(ee, ie) {
        ee.__proto__ = ie
      } || function(ee, ie) {
        for (var He in ie) Object.prototype.hasOwnProperty.call(ie, He) && (ee[He] = ie[He])
      }, ye(ee, ie)
    };

    function be(ee, ie) {
      if ("function" !== typeof ie && null !== ie) throw new TypeError("Class extends value " + String(ie) + " is not a constructor or null");

      function He() {
        this.constructor = ee
      }
      ye(ee, ie), ee.prototype = null === ie ? Object.create(ie) : (He.prototype = ie.prototype, new He)
    }
    var Me = function() {
      return Me = Object.assign || function(ee) {
        for (var ie, He = 1, ye = arguments.length; He < ye; He++)
          for (var be in ie = arguments[He]) Object.prototype.hasOwnProperty.call(ie, be) && (ee[be] = ie[be]);
        return ee
      }, Me.apply(this, arguments)
    };

    function Ke(ee, ie) {
      var He = {};
      for (var ye in ee) Object.prototype.hasOwnProperty.call(ee, ye) && ie.indexOf(ye) < 0 && (He[ye] = ee[ye]);
      if (null != ee && "function" === typeof Object.getOwnPropertySymbols) {
        var be = 0;
        for (ye = Object.getOwnPropertySymbols(ee); be < ye.length; be++) ie.indexOf(ye[be]) < 0 && Object.prototype.propertyIsEnumerable.call(ee, ye[be]) && (He[ye[be]] = ee[ye[be]])
      }
      return He
    }

    function Ue(ee, ie, He, ye) {
      var be, Me = arguments.length,
        Ke = Me < 3 ? ie : null === ye ? ye = Object.getOwnPropertyDescriptor(ie, He) : ye;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Ke = Reflect.decorate(ee, ie, He, ye);
      else
        for (var Ue = ee.length - 1; Ue >= 0; Ue--)(be = ee[Ue]) && (Ke = (Me < 3 ? be(Ke) : Me > 3 ? be(ie, He, Ke) : be(ie, He)) || Ke);
      return Me > 3 && Ke && Object.defineProperty(ie, He, Ke), Ke
    }

    function Fe(ee, ie) {
      return function(He, ye) {
        ie(He, ye, ee)
      }
    }

    function Je(ee, ie, He, ye, be, Me) {
      function Ke(ee) {
        if (void 0 !== ee && "function" !== typeof ee) throw new TypeError("Function expected");
        return ee
      }
      for (var Ue, Fe = ye.kind, Je = "getter" === Fe ? "get" : "setter" === Fe ? "set" : "value", oe = !ie && ee ? ye.static ? ee : ee.prototype : null, Re = ie || (oe ? Object.getOwnPropertyDescriptor(oe, ye.name) : {}), ke = !1, qe = He.length - 1; qe >= 0; qe--) {
        var fe = {};
        for (var Te in ye) fe[Te] = "access" === Te ? {} : ye[Te];
        for (var Te in ye.access) fe.access[Te] = ye.access[Te];
        fe.addInitializer = function(ee) {
          if (ke) throw new TypeError("Cannot add initializers after decoration has completed");
          Me.push(Ke(ee || null))
        };
        var pe = (0, He[qe])("accessor" === Fe ? {
          get: Re.get,
          set: Re.set
        } : Re[Je], fe);
        if ("accessor" === Fe) {
          if (void 0 === pe) continue;
          if (null === pe || "object" !== typeof pe) throw new TypeError("Object expected");
          (Ue = Ke(pe.get)) && (Re.get = Ue), (Ue = Ke(pe.set)) && (Re.set = Ue), (Ue = Ke(pe.init)) && be.unshift(Ue)
        } else(Ue = Ke(pe)) && ("field" === Fe ? be.unshift(Ue) : Re[Je] = Ue)
      }
      oe && Object.defineProperty(oe, ye.name, Re), ke = !0
    }

    function oe(ee, ie, He) {
      for (var ye = arguments.length > 2, be = 0; be < ie.length; be++) He = ye ? ie[be].call(ee, He) : ie[be].call(ee);
      return ye ? He : void 0
    }

    function Re(ee) {
      return "symbol" === typeof ee ? ee : "".concat(ee)
    }

    function ke(ee, ie, He) {
      return "symbol" === typeof ie && (ie = ie.description ? "[".concat(ie.description, "]") : ""), Object.defineProperty(ee, "name", {
        configurable: !0,
        value: He ? "".concat(He, " ", ie) : ie
      })
    }

    function qe(ee, ie) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(ee, ie)
    }

    function fe(ee, ie, He, ye) {
      return new(He || (He = Promise))((function(be, Me) {
        function Ke(ee) {
          try {
            Fe(ye.next(ee))
          } catch (ie) {
            Me(ie)
          }
        }

        function Ue(ee) {
          try {
            Fe(ye.throw(ee))
          } catch (ie) {
            Me(ie)
          }
        }

        function Fe(ee) {
          var ie;
          ee.done ? be(ee.value) : (ie = ee.value, ie instanceof He ? ie : new He((function(ee) {
            ee(ie)
          }))).then(Ke, Ue)
        }
        Fe((ye = ye.apply(ee, ie || [])).next())
      }))
    }

    function Te(ee, ie) {
      var He, ye, be, Me = {
          label: 0,
          sent: function() {
            if (1 & be[0]) throw be[1];
            return be[1]
          },
          trys: [],
          ops: []
        },
        Ke = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Ke.next = Ue(0), Ke.throw = Ue(1), Ke.return = Ue(2), "function" === typeof Symbol && (Ke[Symbol.iterator] = function() {
        return this
      }), Ke;

      function Ue(Ue) {
        return function(Fe) {
          return function(Ue) {
            if (He) throw new TypeError("Generator is already executing.");
            for (; Ke && (Ke = 0, Ue[0] && (Me = 0)), Me;) try {
              if (He = 1, ye && (be = 2 & Ue[0] ? ye.return : Ue[0] ? ye.throw || ((be = ye.return) && be.call(ye), 0) : ye.next) && !(be = be.call(ye, Ue[1])).done) return be;
              switch (ye = 0, be && (Ue = [2 & Ue[0], be.value]), Ue[0]) {
                case 0:
                case 1:
                  be = Ue;
                  break;
                case 4:
                  return Me.label++, {
                    value: Ue[1],
                    done: !1
                  };
                case 5:
                  Me.label++, ye = Ue[1], Ue = [0];
                  continue;
                case 7:
                  Ue = Me.ops.pop(), Me.trys.pop();
                  continue;
                default:
                  if (!(be = (be = Me.trys).length > 0 && be[be.length - 1]) && (6 === Ue[0] || 2 === Ue[0])) {
                    Me = 0;
                    continue
                  }
                  if (3 === Ue[0] && (!be || Ue[1] > be[0] && Ue[1] < be[3])) {
                    Me.label = Ue[1];
                    break
                  }
                  if (6 === Ue[0] && Me.label < be[1]) {
                    Me.label = be[1], be = Ue;
                    break
                  }
                  if (be && Me.label < be[2]) {
                    Me.label = be[2], Me.ops.push(Ue);
                    break
                  }
                  be[2] && Me.ops.pop(), Me.trys.pop();
                  continue
              }
              Ue = ie.call(ee, Me)
            } catch (Fe) {
              Ue = [6, Fe], ye = 0
            } finally {
              He = be = 0
            }
            if (5 & Ue[0]) throw Ue[1];
            return {
              value: Ue[0] ? Ue[1] : void 0,
              done: !0
            }
          }([Ue, Fe])
        }
      }
    }
    var pe = Object.create ? function(ee, ie, He, ye) {
      void 0 === ye && (ye = He);
      var be = Object.getOwnPropertyDescriptor(ie, He);
      be && !("get" in be ? !ie.__esModule : be.writable || be.configurable) || (be = {
        enumerable: !0,
        get: function() {
          return ie[He]
        }
      }), Object.defineProperty(ee, ye, be)
    } : function(ee, ie, He, ye) {
      void 0 === ye && (ye = He), ee[ye] = ie[He]
    };

    function Xe(ee, ie) {
      for (var He in ee) "default" === He || Object.prototype.hasOwnProperty.call(ie, He) || pe(ie, ee, He)
    }

    function ze(ee) {
      var ie = "function" === typeof Symbol && Symbol.iterator,
        He = ie && ee[ie],
        ye = 0;
      if (He) return He.call(ee);
      if (ee && "number" === typeof ee.length) return {
        next: function() {
          return ee && ye >= ee.length && (ee = void 0), {
            value: ee && ee[ye++],
            done: !ee
          }
        }
      };
      throw new TypeError(ie ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Be(ee, ie) {
      var He = "function" === typeof Symbol && ee[Symbol.iterator];
      if (!He) return ee;
      var ye, be, Me = He.call(ee),
        Ke = [];
      try {
        for (;
          (void 0 === ie || ie-- > 0) && !(ye = Me.next()).done;) Ke.push(ye.value)
      } catch (Ue) {
        be = {
          error: Ue
        }
      } finally {
        try {
          ye && !ye.done && (He = Me.return) && He.call(Me)
        } finally {
          if (be) throw be.error
        }
      }
      return Ke
    }

    function Ee() {
      for (var ee = [], ie = 0; ie < arguments.length; ie++) ee = ee.concat(Be(arguments[ie]));
      return ee
    }

    function ge() {
      for (var ee = 0, ie = 0, He = arguments.length; ie < He; ie++) ee += arguments[ie].length;
      var ye = Array(ee),
        be = 0;
      for (ie = 0; ie < He; ie++)
        for (var Me = arguments[ie], Ke = 0, Ue = Me.length; Ke < Ue; Ke++, be++) ye[be] = Me[Ke];
      return ye
    }

    function Oe(ee, ie, He) {
      if (He || 2 === arguments.length)
        for (var ye, be = 0, Me = ie.length; be < Me; be++) !ye && be in ie || (ye || (ye = Array.prototype.slice.call(ie, 0, be)), ye[be] = ie[be]);
      return ee.concat(ye || Array.prototype.slice.call(ie))
    }

    function de(ee) {
      return this instanceof de ? (this.v = ee, this) : new de(ee)
    }

    function We(ee, ie, He) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var ye, be = He.apply(ee, ie || []),
        Me = [];
      return ye = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Ke("next"), Ke("throw"), Ke("return", (function(ee) {
        return function(ie) {
          return Promise.resolve(ie).then(ee, Je)
        }
      })), ye[Symbol.asyncIterator] = function() {
        return this
      }, ye;

      function Ke(ee, ie) {
        be[ee] && (ye[ee] = function(ie) {
          return new Promise((function(He, ye) {
            Me.push([ee, ie, He, ye]) > 1 || Ue(ee, ie)
          }))
        }, ie && (ye[ee] = ie(ye[ee])))
      }

      function Ue(ee, ie) {
        try {
          (He = be[ee](ie)).value instanceof de ? Promise.resolve(He.value.v).then(Fe, Je) : oe(Me[0][2], He)
        } catch (ye) {
          oe(Me[0][3], ye)
        }
        var He
      }

      function Fe(ee) {
        Ue("next", ee)
      }

      function Je(ee) {
        Ue("throw", ee)
      }

      function oe(ee, ie) {
        ee(ie), Me.shift(), Me.length && Ue(Me[0][0], Me[0][1])
      }
    }

    function te(ee) {
      var ie, He;
      return ie = {}, ye("next"), ye("throw", (function(ee) {
        throw ee
      })), ye("return"), ie[Symbol.iterator] = function() {
        return this
      }, ie;

      function ye(ye, be) {
        ie[ye] = ee[ye] ? function(ie) {
          return (He = !He) ? {
            value: de(ee[ye](ie)),
            done: !1
          } : be ? be(ie) : ie
        } : be
      }
    }

    function Ze(ee) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var ie, He = ee[Symbol.asyncIterator];
      return He ? He.call(ee) : (ee = ze(ee), ie = {}, ye("next"), ye("throw"), ye("return"), ie[Symbol.asyncIterator] = function() {
        return this
      }, ie);

      function ye(He) {
        ie[He] = ee[He] && function(ie) {
          return new Promise((function(ye, be) {
            (function(ee, ie, He, ye) {
              Promise.resolve(ye).then((function(ie) {
                ee({
                  value: ie,
                  done: He
                })
              }), ie)
            })(ye, be, (ie = ee[He](ie)).done, ie.value)
          }))
        }
      }
    }

    function we(ee, ie) {
      return Object.defineProperty ? Object.defineProperty(ee, "raw", {
        value: ie
      }) : ee.raw = ie, ee
    }
    var De = Object.create ? function(ee, ie) {
        Object.defineProperty(ee, "default", {
          enumerable: !0,
          value: ie
        })
      } : function(ee, ie) {
        ee.default = ie
      },
      Pe = function(ee) {
        return Pe = Object.getOwnPropertyNames || function(ee) {
          var ie = [];
          for (var He in ee) Object.prototype.hasOwnProperty.call(ee, He) && (ie[ie.length] = He);
          return ie
        }, Pe(ee)
      };

    function Ae(ee) {
      if (ee && ee.__esModule) return ee;
      var ie = {};
      if (null != ee)
        for (var He = Pe(ee), ye = 0; ye < He.length; ye++) "default" !== He[ye] && pe(ie, ee, He[ye]);
      return De(ie, ee), ie
    }

    function Ye(ee) {
      return ee && ee.__esModule ? ee : {
        default: ee
      }
    }

    function Ve(ee, ie, He, ye) {
      if ("a" === He && !ye) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof ie ? ee !== ie || !ye : !ie.has(ee)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === He ? ye : "a" === He ? ye.call(ee) : ye ? ye.value : ie.get(ee)
    }

    function ae(ee, ie, He, ye, be) {
      if ("m" === ye) throw new TypeError("Private method is not writable");
      if ("a" === ye && !be) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof ie ? ee !== ie || !be : !ie.has(ee)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === ye ? be.call(ee, He) : be ? be.value = He : ie.set(ee, He), He
    }

    function ce(ee, ie) {
      if (null === ie || "object" !== typeof ie && "function" !== typeof ie) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof ee ? ie === ee : ee.has(ie)
    }

    function xe(ee, ie, He) {
      if (null !== ie && void 0 !== ie) {
        if ("object" !== typeof ie && "function" !== typeof ie) throw new TypeError("Object expected.");
        var ye, be;
        if (He) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          ye = ie[Symbol.asyncDispose]
        }
        if (void 0 === ye) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          ye = ie[Symbol.dispose], He && (be = ye)
        }
        if ("function" !== typeof ye) throw new TypeError("Object not disposable.");
        be && (ye = function() {
          try {
            be.call(this)
          } catch (ee) {
            return Promise.reject(ee)
          }
        }), ee.stack.push({
          value: ie,
          dispose: ye,
          async: He
        })
      } else He && ee.stack.push({
        async: !0
      });
      return ie
    }
    var Le = "function" === typeof SuppressedError ? SuppressedError : function(ee, ie, He) {
      var ye = new Error(He);
      return ye.name = "SuppressedError", ye.error = ee, ye.suppressed = ie, ye
    };

    function Ce(ee) {
      function ie(ie) {
        ee.error = ee.hasError ? new Le(ie, ee.error, "An error was suppressed during disposal.") : ie, ee.hasError = !0
      }
      var He, ye = 0;
      return function be() {
        for (; He = ee.stack.pop();) try {
          if (!He.async && 1 === ye) return ye = 0, ee.stack.push(He), Promise.resolve().then(be);
          if (He.dispose) {
            var Me = He.dispose.call(He.value);
            if (He.async) return ye |= 2, Promise.resolve(Me).then(be, (function(ee) {
              return ie(ee), be()
            }))
          } else ye |= 1
        } catch (Ke) {
          ie(Ke)
        }
        if (1 === ye) return ee.hasError ? Promise.reject(ee.error) : Promise.resolve();
        if (ee.hasError) throw ee.error
      }()
    }

    function ve(ee, ie) {
      return "string" === typeof ee && /^\.\.?\//.test(ee) ? ee.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(ee, He, ye, be, Me) {
        return He ? ie ? ".jsx" : ".js" : !ye || be && Me ? ye + be + "." + Me.toLowerCase() + "js" : ee
      })) : ee
    }
    const ue = {
      __extends: be,
      __assign: Me,
      __rest: Ke,
      __decorate: Ue,
      __param: Fe,
      __esDecorate: Je,
      __runInitializers: oe,
      __propKey: Re,
      __setFunctionName: ke,
      __metadata: qe,
      __awaiter: fe,
      __generator: Te,
      __createBinding: pe,
      __exportStar: Xe,
      __values: ze,
      __read: Be,
      __spread: Ee,
      __spreadArrays: ge,
      __spreadArray: Oe,
      __await: de,
      __asyncGenerator: We,
      __asyncDelegator: te,
      __asyncValues: Ze,
      __makeTemplateObject: we,
      __importStar: Ae,
      __importDefault: Ye,
      __classPrivateFieldGet: Ve,
      __classPrivateFieldSet: ae,
      __classPrivateFieldIn: ce,
      __addDisposableResource: xe,
      __disposeResources: Ce,
      __rewriteRelativeImportExtension: ve
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);