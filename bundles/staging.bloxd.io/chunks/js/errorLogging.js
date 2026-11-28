export const id = 38;
export const ids = [38];
export const modules = {
  7877: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      BaseExtension: () => wM,
      BaseInstrumentation: () => MM,
      BaseTransport: () => TH,
      CSPInstrumentation: () => KH,
      ConsoleInstrumentation: () => fM,
      ConsoleTransport: () => ep,
      EVENT_CLICK: () => mw,
      EVENT_NAVIGATION: () => hw,
      EVENT_ROUTE_CHANGE: () => rw,
      EVENT_SESSION_EXTEND: () => jw,
      EVENT_SESSION_RESUME: () => xw,
      EVENT_SESSION_START: () => Xw,
      EVENT_VIEW_CHANGED: () => zw,
      ErrorsInstrumentation: () => WM,
      FetchTransport: () => zp,
      InternalLoggerLevel: () => uw,
      LogLevel: () => hM,
      MAX_SESSION_PERSISTENCE_TIME: () => lb,
      NavigationInstrumentation: () => GH,
      Observable: () => mM,
      PerformanceInstrumentation: () => Pe,
      PersistentSessionsManager: () => Nw,
      SESSION_EXPIRATION_TIME: () => pb,
      SESSION_INACTIVITY_TIME: () => Vb,
      STORAGE_KEY: () => Hb,
      SessionInstrumentation: () => HM,
      TransportItemType: () => kH,
      UserActionInstrumentation: () => jH,
      UserActionState: () => EH,
      VERSION: () => eM,
      ViewInstrumentation: () => SM,
      VolatileSessionsManager: () => vw,
      WebVitalsInstrumentation: () => Ae,
      allLogLevels: () => XM,
      browserMeta: () => PH,
      buildStackFrame: () => pM,
      captureMetas: () => Sp,
      createInternalLogger: () => rp,
      createPromiseBuffer: () => tp,
      createSession: () => yH,
      deepEqual: () => sw,
      defaultEventDomain: () => eb,
      defaultExceptionType: () => rM,
      defaultGlobalObjectKey: () => Rp,
      defaultInternalLoggerLevel: () => Pw,
      defaultLogLevel: () => zM,
      faro: () => Eb,
      genShortID: () => Bw,
      getCurrentTimestamp: () => Cw,
      getDataFromSafariExtensions: () => tM,
      getIgnoreUrls: () => Pb,
      getInternalFaroFromGlobalObject: () => Ub,
      getStackFramesFromError: () => EM,
      getTransportBody: () => Mp,
      getUrlFromResource: () => yb,
      getWebInstrumentations: () => qH,
      globalObject: () => Ib,
      initializeFaro: () => kp,
      internalGlobalObjectKey: () => Ob,
      isArray: () => cb,
      isBoolean: () => Kb,
      isDomError: () => vb,
      isDomException: () => Qb,
      isElement: () => qb,
      isElementDefined: () => Gb,
      IO: () => db,
      isError: () => Sb,
      isErrorDefined: () => Jb,
      isErrorEvent: () => Nb,
      isEvent: () => Wb,
      isEventDefined: () => Ab,
      isFunction: () => Db,
      isInstanceOf: () => mb,
      isInt: () => jb,
      isInternalFaroOnGlobalObject: () => Cb,
      isMap: () => ib,
      isMapDefined: () => ab,
      isNull: () => zb,
      isNumber: () => xb,
      isObject: () => Rb,
      isPrimitive: () => fb,
      isRegExp: () => Yb,
      isString: () => Xb,
      isSymbol: () => rb,
      isSyntheticEvent: () => ub,
      isThenable: () => Zb,
      isToString: () => sb,
      isTypeof: () => Bb,
      isUndefined: () => hb,
      makeCoreConfig: () => Yp,
      noop: () => iw,
      osMeta: () => nH,
      parseStacktrace: () => FM,
      sdkMeta: () => oH,
      setInternalFaroOnGlobalObject: () => tb,
      transportItemTypeToBodyKey: () => bp,
      unknownString: () => JM,
      userActionDataAttribute: () => ne,
      userActionTimeoutDataAttribute: () => ye
    });
    const eb = "browser",
      Hb = "com.grafana.faro.session",
      pb = 144e5,
      Vb = 9e5,
      gb = 1e3,
      lb = Vb,
      Lb = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: lb
      };
    const Ib = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof Mb.g ? Mb.g : "undefined" !== typeof self ? self : void 0;
    const Ob = "_faroInternal";

    function Ub() {
      return Ib[Ob]
    }

    function tb(bb) {
      bb.config.isolate ? bb.internalLogger.debug("Skipping registering internal Faro instance on global object") : (bb.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Ib, Ob, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: bb
      }))
    }

    function Cb() {
      return Ob in Ib
    }
    let Eb = {
      api: {
        pushLog: () => {},
        pushError: () => {},
        changeStacktraceParser: () => {},
        getStacktraceParser: () => {},
        pushMeasurement: () => {},
        pushTraces: () => {},
        getOTEL: () => {},
        getTraceContext: () => {},
        initOTEL: () => {},
        isOTELInitialized: () => !1,
        setUser: () => {},
        resetUser: () => {},
        setSession: () => {},
        resetSession: () => {},
        getSession: () => {},
        setView: () => {},
        getView: () => {},
        setPage: () => {},
        getPage: () => {},
        pushEvent: () => {},
        startUserAction: () => {},
        getActiveUserAction: () => {}
      }
    };

    function Fb(bb, wb, Mb, eb, Hb, pb, Vb) {
      return wb.debug("Initializing Faro"), Eb = {
          api: pb,
          config: Mb,
          instrumentations: Vb,
          internalLogger: wb,
          metas: eb,
          pause: Hb.pause,
          transports: Hb,
          unpatchedConsole: bb,
          unpause: Hb.unpause
        }, tb(Eb),
        function(bb) {
          if (bb.config.preventGlobalExposure) bb.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (bb.internalLogger.debug(`Registering public faro reference in the global scope using "${bb.config.globalObjectKey}" key`), bb.config.globalObjectKey in Ib) return void bb.internalLogger.warn(`Skipping global registration due to key "${bb.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Ib, bb.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: bb
            })
          }
        }(Eb), Eb
    }

    function Bb(bb, wb) {
      return typeof bb === wb
    }

    function sb(bb, wb) {
      return Object.prototype.toString.call(bb) === `[object ${wb}]`
    }

    function mb(bb, wb) {
      try {
        return bb instanceof wb
      } catch (Mb) {
        return !1
      }
    }
    const hb = bb => Bb(bb, "undefined"),
      zb = bb => Bb(bb, "null"),
      Xb = bb => Bb(bb, "string"),
      xb = bb => Bb(bb, "number") && !isNaN(bb) || Bb(bb, "bigint"),
      jb = bb => xb(bb) && Number.isInteger(bb),
      Kb = bb => Bb(bb, "boolean"),
      rb = bb => Bb(bb, "symbol"),
      Rb = bb => !zb(bb) && Bb(bb, "object"),
      Db = bb => Bb(bb, "function"),
      cb = bb => sb(bb, "Array"),
      Yb = bb => sb(bb, "RegExp"),
      Zb = bb => Db(null === bb || void 0 === bb ? void 0 : bb.then),
      fb = bb => !Rb(bb) && !Db(bb),
      Ab = "undefined" !== typeof Event,
      Wb = bb => Ab && mb(bb, Event),
      Jb = "undefined" !== typeof Error,
      Sb = bb => Jb && mb(bb, Error),
      Nb = bb => sb(bb, "ErrorEvent"),
      vb = bb => sb(bb, "DOMError"),
      Qb = bb => sb(bb, "DOMException"),
      Gb = "undefined" !== typeof Element,
      qb = bb => Gb && mb(bb, Element),
      ab = "undefined" !== typeof Map,
      ib = bb => ab && mb(bb, Map),
      ub = bb => Rb(bb) && "nativeEvent" in bb && "preventDefault" in bb && "stopPropagation" in bb;

    function db(bb) {
      return null == bb || (cb(bb) || Xb(bb) ? 0 === bb.length : !!Rb(bb) && 0 === Object.keys(bb).length)
    }

    function Pb() {
      return Eb.transports.transports.flatMap((bb => bb.getIgnoreUrls()))
    }

    function nb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Pb().some((wb => bb && null != bb.match(wb)))
    }

    function yb(bb) {
      return Xb(bb) ? bb : bb instanceof URL ? bb.href : !db(bb) && Db(null === bb || void 0 === bb ? void 0 : bb.toString) ? bb.toString() : void 0
    }
    const ob = "sessionStorage",
      Tb = "localStorage";

    function kb(bb) {
      try {
        let wb;
        wb = window[bb];
        const Mb = "__faro_storage_test__";
        return wb.setItem(Mb, Mb), wb.removeItem(Mb), !0
      } catch (Mb) {
        var wb;
        return null === (wb = Eb.internalLogger) || void 0 === wb || wb.info(`Web storage of type ${bb} is not available. Reason: ${Mb}`), !1
      }
    }

    function bw(bb, wb) {
      return pw(wb) ? window[wb].getItem(bb) : null
    }

    function ww(bb, wb, Mb) {
      if (pw(Mb)) try {
        window[Mb].setItem(bb, wb)
      } catch (eb) {}
    }

    function Mw(bb, wb) {
      pw(wb) && window[wb].removeItem(bb)
    }
    const ew = kb(Tb),
      Hw = kb(ob);

    function pw(bb) {
      return bb === Tb ? ew : bb === ob && Hw
    }

    function Vw(bb) {
      return Vw = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Vw(bb)
    }

    function gw(bb) {
      var wb = function(bb, wb) {
        if ("object" != Vw(bb) || !bb) return bb;
        var Mb = bb[Symbol.toPrimitive];
        if (void 0 !== Mb) {
          var eb = Mb.call(bb, wb || "default");
          if ("object" != Vw(eb)) return eb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === wb ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Vw(wb) ? wb : wb + ""
    }

    function lw(bb, wb, Mb) {
      return (wb = gw(wb)) in bb ? Object.defineProperty(bb, wb, {
        value: Mb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[wb] = Mb, bb
    }

    function Lw(bb, wb) {
      var Mb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var eb = Object.getOwnPropertySymbols(bb);
        wb && (eb = eb.filter((function(wb) {
          return Object.getOwnPropertyDescriptor(bb, wb).enumerable
        }))), Mb.push.apply(Mb, eb)
      }
      return Mb
    }

    function Iw(bb) {
      for (var wb = 1; wb < arguments.length; wb++) {
        var Mb = null != arguments[wb] ? arguments[wb] : {};
        wb % 2 ? Lw(Object(Mb), !0).forEach((function(wb) {
          lw(bb, wb, Mb[wb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Mb)) : Lw(Object(Mb)).forEach((function(wb) {
          Object.defineProperty(bb, wb, Object.getOwnPropertyDescriptor(Mb, wb))
        }))
      }
      return bb
    }

    function Ow() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb;
      var wb, Mb, eb;
      const Hb = bb.config.sessionTracking,
        pb = null !== (wb = null !== (Mb = null === Hb || void 0 === Hb || null === (eb = Hb.sampler) || void 0 === eb ? void 0 : eb.call(Hb, {
          metas: bb.metas.value
        })) && void 0 !== Mb ? Mb : null === Hb || void 0 === Hb ? void 0 : Hb.samplingRate) && void 0 !== wb ? wb : 1,
        Vb = "number" === typeof pb ? function(bb) {
          return Math.min(1, Math.max(0, bb))
        }(pb) : 0;
      if (!(Vb > 0)) return !1;
      if (1 === Vb) return !0;
      try {
        const bb = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === bb || void 0 === bb ? void 0 : bb.getRandomValues)) {
          const wb = new Uint32Array(1);
          return bb.getRandomValues(wb), wb[0] / Math.pow(2, 32) < Vb
        }
      } catch (gb) {}
      return Math.random() < Vb
    }

    function Uw() {
      return Date.now()
    }

    function tw() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function Cw() {
      return (new Date).toISOString()
    }

    function Ew(bb) {
      return new Date(bb).toISOString()
    }
    const Fw = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function Bw() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const wb = new Uint32Array(bb),
        Mb = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === Mb || void 0 === Mb ? void 0 : Mb.getRandomValues) Mb.getRandomValues(wb);
      else
        for (let Hb = 0; Hb < bb; Hb++) wb[Hb] = Math.floor(4294967296 * Math.random());
      let eb = "";
      for (let Hb = 0; Hb < bb; Hb++) eb += Fw[wb[Hb] % 59];
      return eb
    }

    function sw(bb, wb) {
      if (bb === wb) return !0;
      if (Bb(bb, "number") && isNaN(bb)) return Bb(wb, "number") && isNaN(wb);
      const Mb = cb(bb),
        eb = cb(wb);
      if (Mb !== eb) return !1;
      if (Mb && eb) {
        const Mb = bb.length;
        if (Mb !== wb.length) return !1;
        for (let eb = Mb; 0 !== eb--;)
          if (!sw(bb[eb], wb[eb])) return !1;
        return !0
      }
      const Hb = Rb(bb),
        pb = Rb(wb);
      if (Hb !== pb) return !1;
      if (bb && wb && Hb && pb) {
        const Mb = Object.keys(bb),
          eb = Object.keys(wb);
        if (Mb.length !== eb.length) return !1;
        for (let bb of Mb)
          if (!eb.includes(bb)) return !1;
        for (let Hb of Mb)
          if (!sw(bb[Hb], wb[Hb])) return !1;
        return !0
      }
      return !1
    }
    const mw = "click",
      hw = "navigation",
      zw = "view_changed",
      Xw = "session_start",
      xw = "session_resume",
      jw = "session_extend",
      Kw = "service_name_override",
      rw = "route_change";

    function Rw() {
      let {
        sessionId: bb,
        started: wb,
        lastActivity: Mb,
        isSampled: eb = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eb;
      var pb;
      const Vb = Uw(),
        gb = null === (pb = Hb.config) || void 0 === pb || null === (pb = pb.sessionTracking) || void 0 === pb ? void 0 : pb.generateSessionId;
      return null == bb && (bb = "function" === typeof gb ? gb() : Bw()), {
        sessionId: bb,
        lastActivity: null !== Mb && void 0 !== Mb ? Mb : Vb,
        started: null !== wb && void 0 !== wb ? wb : Vb,
        isSampled: eb
      }
    }

    function Dw(bb) {
      if (null == bb) return !1;
      const wb = Uw();
      return wb - bb.started < 144e5 && wb - bb.lastActivity < Vb
    }

    function Yw(bb) {
      let {
        fetchUserSession: wb,
        storeUserSession: Mb,
        adoptSession: eb,
        updateInterval: Hb = 0
      } = bb, gb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eb, lb = 0;
      return function() {
        let {
          forceSessionExtend: bb = !1,
          refreshActivity: Lb = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Ib, Ob;
        if (!wb || !Mb) return;
        const Ub = Uw();
        if (!bb && Ub < lb && lb - Ub <= Hb) return;
        const tb = gb.config.sessionTracking,
          Cb = null === tb || void 0 === tb ? void 0 : tb.persistent;
        if (Cb && !ew || !Cb && !Hw) return;
        const Eb = wb();
        if (lb = Math.min(Ub + Hb, (null !== (Ib = null === Eb || void 0 === Eb ? void 0 : Eb.started) && void 0 !== Ib ? Ib : Ub) + pb, (null !== (Ob = null === Eb || void 0 === Eb ? void 0 : Eb.lastActivity) && void 0 !== Ob ? Ob : Ub) + Vb), !1 === bb && Dw(Eb)) {
          var Fb;
          Lb && Mb(Iw(Iw({}, Eb), {}, {
            lastActivity: Ub
          }));
          const bb = null === (Fb = gb.metas.value.session) || void 0 === Fb ? void 0 : Fb.id;
          null != eb && null != Eb.sessionMeta && Eb.sessionId !== bb && eb(Eb.sessionMeta)
        } else {
          var Bb, sb, mb;
          let bb = fw(Rw({
            isSampled: Ow(gb)
          }, gb), Eb, gb);
          lb = Ub + Hb, Mb(bb), null === (Bb = gb.api) || void 0 === Bb || Bb.setSession(bb.sessionMeta), null === tb || void 0 === tb || null === (sb = tb.onSessionChange) || void 0 === sb || sb.call(tb, null !== (mb = null === Eb || void 0 === Eb ? void 0 : Eb.sessionMeta) && void 0 !== mb ? mb : null, bb.sessionMeta)
        }
      }
    }

    function Zw(bb) {
      let wb, {
          fetchUserSession: Mb,
          storeUserSession: eb,
          updateInterval: Hb = 0
        } = bb,
        pb = 0;
      return bb => {
        const Vb = Uw();
        if (bb === wb && Vb < pb && pb - Vb <= Hb) return;
        wb = bb, pb = Vb + Hb;
        const gb = Mb();
        (null === gb || void 0 === gb ? void 0 : gb.sessionId) === bb && Dw(gb) && eb(Iw(Iw({}, gb), {}, {
          lastActivity: Vb
        }))
      }
    }

    function fw(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eb;
      var eb, Hb, pb, Vb, gb, lb;
      const Lb = Iw(Iw({}, bb), {}, {
          sessionMeta: {
            id: bb.sessionId,
            attributes: Ww(Iw(Iw(Iw({}, null === (eb = Mb.config.sessionTracking) || void 0 === eb || null === (eb = eb.session) || void 0 === eb ? void 0 : eb.attributes), null !== (Hb = null === (pb = Mb.metas.value.session) || void 0 === pb ? void 0 : pb.attributes) && void 0 !== Hb ? Hb : {}), {}, {
              isSampled: bb.isSampled.toString()
            }))
          }
        }),
        Ib = null !== (Vb = null === (gb = Mb.metas.value.session) || void 0 === gb ? void 0 : gb.overrides) && void 0 !== Vb ? Vb : null === wb || void 0 === wb || null === (lb = wb.sessionMeta) || void 0 === lb ? void 0 : lb.overrides;
      db(Ib) || (Lb.sessionMeta.overrides = Ib);
      const Ob = null === wb || void 0 === wb ? void 0 : wb.sessionId;
      return null != Ob && (Lb.sessionMeta.attributes.previousSession = Ob), Lb
    }

    function Aw(bb) {
      let {
        fetchUserSession: wb,
        storeUserSession: Mb
      } = bb, eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eb, Hb = !1;
      return function(bb) {
        if (Hb) return;
        const pb = bb.session,
          Vb = wb();
        let gb = null === pb || void 0 === pb ? void 0 : pb.id;
        const lb = null === pb || void 0 === pb ? void 0 : pb.attributes,
          Lb = null === pb || void 0 === pb ? void 0 : pb.overrides,
          Ib = null === Vb || void 0 === Vb ? void 0 : Vb.sessionMeta,
          Ob = null === Ib || void 0 === Ib ? void 0 : Ib.overrides,
          Ub = !!Lb && !sw(Lb, Ob),
          tb = !!lb && !sw(lb, null === Ib || void 0 === Ib ? void 0 : Ib.attributes);
        if (pb && gb !== (null === Vb || void 0 === Vb ? void 0 : Vb.sessionId) || tb || Ub) {
          var Cb, Eb;
          const bb = null != Vb && gb === Vb.sessionId,
            wb = fw(bb ? Vb : Rw({
              sessionId: gb,
              isSampled: Ow(eb)
            }, eb), Vb, eb),
            pb = null === Vb || void 0 === Vb || null === (Cb = Vb.sessionMeta) || void 0 === Cb || null === (Cb = Cb.attributes) || void 0 === Cb ? void 0 : Cb.previousSession;
          bb && null != pb && pb !== wb.sessionId && (wb.sessionMeta.attributes.previousSession = pb), (null === (Eb = wb.sessionMeta.attributes) || void 0 === Eb ? void 0 : Eb.previousSession) === wb.sessionId && delete wb.sessionMeta.attributes.previousSession, Mb(wb),
            function(bb, wb) {
              let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Hb, pb, Vb;
              if (!wb) return;
              const gb = Mb.serviceName,
                lb = null !== (Hb = null !== (pb = eb.serviceName) && void 0 !== pb ? pb : null === (Vb = bb.metas.value.app) || void 0 === Vb ? void 0 : Vb.name) && void 0 !== Hb ? Hb : "";
              gb && gb !== lb && bb.api.pushEvent(Kw, {
                serviceName: gb,
                previousServiceName: lb
              })
            }(eb, Ub, Lb, Ob), Hb = !0;
          try {
            eb.api.setSession(wb.sessionMeta)
          } finally {
            Hb = !1
          }
        }
      }
    }

    function Ww(bb) {
      const wb = {};
      for (const Mb of Object.keys(bb)) {
        const eb = bb[Mb];
        void 0 !== eb && (wb[Mb] = eb)
      }
      return wb
    }

    function Jw() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== bb && void 0 !== bb ? bb : {}, function() {
        const bb = new WeakSet;
        return function(wb, Mb) {
          if (Rb(Mb) && null !== Mb) {
            if (bb.has(Mb)) return null;
            bb.add(Mb)
          }
          return Mb
        }
      }())
    }

    function Sw() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const wb = {};
      for (const [Mb, eb] of Object.entries(bb)) wb[Mb] = Rb(eb) && null !== eb ? Jw(eb) : String(eb);
      return wb
    }
    var Nw = class bb {
      constructor() {
        var wb = this;
        let Mb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb;
        this.context = Mb, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = bb => {
          this.adopting = !0;
          try {
            var wb;
            null === (wb = this.context.api) || void 0 === wb || wb.setSession(bb)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: bb = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return wb.updateUserSession({
            refreshActivity: bb
          })
        }, this.recordActivity = Zw({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: gb
        }), this.updateUserSession = Yw({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: gb
        }, Mb), this.init()
      }
      static removeUserSession() {
        Mw(Hb, bb.storageTypeLocal)
      }
      static storeUserSession(wb) {
        ww(Hb, Jw(wb), bb.storageTypeLocal)
      }
      static fetchUserSession() {
        const wb = bw(Hb, bb.storageTypeLocal);
        return wb ? JSON.parse(wb) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var bb;
            this.updateSession({
              refreshActivity: !1
            });
            const wb = null === (bb = this.context.api) || void 0 === bb || null === (bb = bb.getSession()) || void 0 === bb ? void 0 : bb.id;
            wb && this.recordActivity(wb)
          }
        })), this.context.metas.addListener(Aw({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession
        }, this.context))
      }
    };
    Nw.storageTypeLocal = Tb;
    var vw = class bb {
      constructor() {
        var wb = this;
        let Mb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb;
        this.context = Mb, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: bb = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return wb.updateUserSession({
            refreshActivity: bb
          })
        }, this.recordActivity = Zw({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: gb
        }), this.updateUserSession = Yw({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: gb
        }, Mb), this.init()
      }
      static removeUserSession() {
        Mw(Hb, bb.storageTypeSession)
      }
      static storeUserSession(wb) {
        ww(Hb, Jw(wb), bb.storageTypeSession)
      }
      static fetchUserSession() {
        const wb = bw(Hb, bb.storageTypeSession);
        return wb ? JSON.parse(wb) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var bb;
            this.updateSession({
              refreshActivity: !1
            });
            const wb = null === (bb = this.context.api) || void 0 === bb || null === (bb = bb.getSession()) || void 0 === bb ? void 0 : bb.id;
            wb && this.recordActivity(wb)
          }
        })), this.context.metas.addListener(Aw({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession
        }, this.context))
      }
    };
    vw.storageTypeSession = ob;
    const Qw = new WeakMap;

    function Gw(bb) {
      let wb = Qw.get(bb);
      if (!wb) {
        let Mb = [],
          eb = [];
        wb = {
          addSessionUpdateListener: bb => {
            Mb.push(bb)
          },
          removeSessionUpdateListener: bb => {
            Mb = Mb.filter((wb => wb !== bb))
          },
          notifySessionUpdate: bb => {
            Mb.forEach((wb => wb(bb)))
          },
          shouldCapture: () => eb.every((bb => bb())),
          addCaptureFilter: bb => {
            eb.push(bb)
          },
          removeCaptureFilter: bb => {
            eb = eb.filter((wb => wb !== bb))
          }
        }, Qw.set(bb, wb)
      }
      return wb
    }
    var qw = class {
      constructor(bb, wb, Mb) {
        this.metas = bb, this.transports = wb, this.onActivate = Mb, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = bb => {
          var wb, Mb, eb;
          const Hb = this.pending;
          var pb, Vb;
          if ("overrides" === bb.type) return void(this.pending = {
            reset: null !== (pb = null === Hb || void 0 === Hb ? void 0 : Hb.reset) && void 0 !== pb && pb,
            inheritOverrides: null === (Vb = null === Hb || void 0 === Hb ? void 0 : Hb.inheritOverrides) || void 0 === Vb || Vb,
            session: Iw(Iw({}, null === Hb || void 0 === Hb ? void 0 : Hb.session), {}, {
              overrides: Iw(Iw({}, null === Hb || void 0 === Hb ? void 0 : Hb.session.overrides), bb.overrides)
            })
          });
          const gb = bb.session,
            lb = db(gb) || null != gb && "id" in gb && !gb.id,
            Lb = null !== (wb = null === gb || void 0 === gb ? void 0 : gb.overrides) && void 0 !== wb ? wb : null === Hb || void 0 === Hb ? void 0 : Hb.session.overrides;
          this.pending = {
            reset: lb || !(null === gb || void 0 === gb ? void 0 : gb.id) && null !== (Mb = null === Hb || void 0 === Hb ? void 0 : Hb.reset) && void 0 !== Mb && Mb,
            inheritOverrides: !(!bb.overrides && void 0 !== (null === gb || void 0 === gb ? void 0 : gb.overrides)) && (null === (eb = null === Hb || void 0 === Hb ? void 0 : Hb.inheritOverrides) || void 0 === eb || eb),
            session: {
              id: null === gb || void 0 === gb ? void 0 : gb.id,
              attributes: (null === gb || void 0 === gb ? void 0 : gb.attributes) && Iw({}, gb.attributes),
              overrides: bb.overrides ? Iw(Iw({}, null === Hb || void 0 === Hb ? void 0 : Hb.session.overrides), bb.overrides) : Lb && Iw({}, Lb)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var bb, wb;
        this.waiting = !0, Gw(this.metas).addSessionUpdateListener(this.recordUpdate), Gw(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (bb = (wb = this.metas).addCaptureListener) || void 0 === bb || bb.call(wb, this.activate), this.activate()
      }
      destroy() {
        var bb, wb;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), Gw(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (bb = (wb = this.metas).removeCaptureListener) || void 0 === bb || bb.call(wb, this.activate), Gw(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function aw(bb) {
      return (null === bb || void 0 === bb ? void 0 : bb.persistent) ? Nw : vw
    }

    function iw() {}
    let uw = function(bb) {
      return bb[bb.OFF = 0] = "OFF", bb[bb.ERROR = 1] = "ERROR", bb[bb.WARN = 2] = "WARN", bb[bb.INFO = 3] = "INFO", bb[bb.VERBOSE = 4] = "VERBOSE", bb
    }({});
    const dw = {
        debug: iw,
        error: iw,
        info: iw,
        prefix: "Faro",
        warn: iw
      },
      Pw = 1;

    function nw(bb) {
      return nw = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, nw(bb)
    }

    function yw(bb) {
      var wb = function(bb, wb) {
        if ("object" != nw(bb) || !bb) return bb;
        var Mb = bb[Symbol.toPrimitive];
        if (void 0 !== Mb) {
          var eb = Mb.call(bb, wb || "default");
          if ("object" != nw(eb)) return eb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === wb ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == nw(wb) ? wb : wb + ""
    }

    function ow(bb, wb, Mb) {
      return (wb = yw(wb)) in bb ? Object.defineProperty(bb, wb, {
        value: Mb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[wb] = Mb, bb
    }

    function Tw(bb, wb) {
      var Mb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var eb = Object.getOwnPropertySymbols(bb);
        wb && (eb = eb.filter((function(wb) {
          return Object.getOwnPropertyDescriptor(bb, wb).enumerable
        }))), Mb.push.apply(Mb, eb)
      }
      return Mb
    }

    function kw(bb) {
      for (var wb = 1; wb < arguments.length; wb++) {
        var Mb = null != arguments[wb] ? arguments[wb] : {};
        wb % 2 ? Tw(Object(Mb), !0).forEach((function(wb) {
          ow(bb, wb, Mb[wb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Mb)) : Tw(Object(Mb)).forEach((function(wb) {
          Object.defineProperty(bb, wb, Object.getOwnPropertyDescriptor(Mb, wb))
        }))
      }
      return bb
    }
    const bM = kw({}, console);
    var wM = class {
        constructor() {
          this.unpatchedConsole = bM, this.internalLogger = dw, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          this.internalLogger.debug(`${this.name}\n`, ...wb)
        }
        logInfo() {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          this.internalLogger.info(`${this.name}\n`, ...wb)
        }
        logWarn() {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          this.internalLogger.warn(`${this.name}\n`, ...wb)
        }
        logError() {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          this.internalLogger.error(`${this.name}\n`, ...wb)
        }
      },
      MM = class extends wM {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const eM = "2.12.1";
    var HM = class extends MM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = eM, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(bb) {
        var wb;
        const Mb = bb.session;
        if (Mb && Mb.id !== (null === (wb = this.notifiedSession) || void 0 === wb ? void 0 : wb.id)) {
          var eb;
          if (this.isAdoptingSession()) return void(this.notifiedSession = Mb);
          if (this.notifiedSession && this.notifiedSession.id === (null === (eb = Mb.attributes) || void 0 === eb ? void 0 : eb.previousSession)) return this.api.pushEvent(jw, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = Mb);
          this.notifiedSession = Mb, this.api.pushEvent(Xw, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(bb, wb, Mb) {
        const eb = null === Mb || void 0 === Mb ? void 0 : Mb.session;
        let Hb, pb, Vb = bb.fetchUserSession();
        if (wb.persistent && wb.maxSessionPersistenceTime && Vb) {
          const bb = Uw();
          Vb.lastActivity < bb - wb.maxSessionPersistenceTime && (Nw.removeUserSession(), Vb = null)
        }
        const gb = Dw(Vb);
        if ((null === Mb || void 0 === Mb ? void 0 : Mb.reset) || !gb || (null === eb || void 0 === eb ? void 0 : eb.id) && eb.id !== (null === Vb || void 0 === Vb ? void 0 : Vb.sessionId)) {
          var lb, Lb, Ib, Ob, Ub, tb;
          pb = Rw({
            sessionId: (null === Mb || void 0 === Mb ? void 0 : Mb.reset) ? void 0 : null !== (lb = null === eb || void 0 === eb ? void 0 : eb.id) && void 0 !== lb ? lb : null === (Lb = wb.session) || void 0 === Lb ? void 0 : Lb.id,
            isSampled: Ow(this)
          }, this);
          const bb = pb.sessionId,
            Cb = Mb && gb ? null === Vb || void 0 === Vb || null === (Ib = Vb.sessionMeta) || void 0 === Ib ? void 0 : Ib.overrides : void 0,
            Eb = Cb ? Iw(Iw({}, null === (Ob = wb.session) || void 0 === Ob ? void 0 : Ob.overrides), Cb) : null === (Ub = wb.session) || void 0 === Ub ? void 0 : Ub.overrides;
          pb.sessionMeta = Iw({
            id: bb,
            attributes: Iw({
              isSampled: pb.isSampled.toString()
            }, null === (tb = wb.session) || void 0 === tb ? void 0 : tb.attributes)
          }, Eb ? {
            overrides: Eb
          } : {}), Hb = Xw
        } else {
          var Cb, Eb;
          const bb = null === Vb || void 0 === Vb ? void 0 : Vb.sessionId;
          pb = Rw({
            sessionId: bb,
            isSampled: Vb.isSampled || !1,
            started: null === Vb || void 0 === Vb ? void 0 : Vb.started
          }, this);
          const Mb = null === Vb || void 0 === Vb ? void 0 : Vb.sessionMeta,
            eb = Iw(Iw({}, null === (Cb = wb.session) || void 0 === Cb ? void 0 : Cb.overrides), null === Mb || void 0 === Mb ? void 0 : Mb.overrides);
          pb.sessionMeta = Iw(Iw({}, wb.session), {}, {
            id: bb,
            attributes: Iw(Iw(Iw({}, null === (Eb = wb.session) || void 0 === Eb ? void 0 : Eb.attributes), null === Mb || void 0 === Mb ? void 0 : Mb.attributes), {}, {
              isSampled: pb.isSampled.toString()
            }),
            overrides: eb
          }), Hb = xw
        }
        var Fb;
        if (eb && (pb.sessionMeta = Iw(Iw({}, pb.sessionMeta), {}, {
            attributes: Iw(Iw(Iw({}, null === (Fb = pb.sessionMeta) || void 0 === Fb ? void 0 : Fb.attributes), eb.attributes), {}, {
              isSampled: pb.isSampled.toString()
            })
          }), eb.overrides)) {
          const bb = (null === Mb || void 0 === Mb ? void 0 : Mb.inheritOverrides) ? Iw(Iw({}, pb.sessionMeta.overrides), eb.overrides) : eb.overrides;
          Object.keys(bb).length > 0 ? pb.sessionMeta.overrides = bb : delete pb.sessionMeta.overrides
        }
        return {
          initialSession: pb,
          lifecycleType: Hb
        }
      }
      registerBeforeSendHook(bb) {
        var wb;
        this.beforeSendHook = wb => {
          var Mb, eb;
          const Hb = null === (Mb = wb.meta.session) || void 0 === Mb ? void 0 : Mb.id;
          Hb && !this.transports.isPaused() && bb(Hb);
          const pb = null === (eb = wb.meta.session) || void 0 === eb ? void 0 : eb.attributes;
          if (pb && "true" === (null === pb || void 0 === pb ? void 0 : pb.isSampled)) {
            var Vb;
            let bb = JSON.parse(JSON.stringify(wb));
            const Mb = null === (Vb = bb.meta.session) || void 0 === Vb ? void 0 : Vb.attributes;
            var gb;
            if (null === Mb || void 0 === Mb || delete Mb.isSampled, 0 === Object.keys(null !== Mb && void 0 !== Mb ? Mb : {}).length) null === (gb = bb.meta.session) || void 0 === gb || delete gb.attributes;
            return bb
          }
          return null
        }, null === (wb = this.transports) || void 0 === wb || wb.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var bb;
        this.logDebug("init session instrumentation");
        const wb = document.prerendering;
        var Mb;
        if ((null === (bb = this.config.sessionTracking) || void 0 === bb ? void 0 : bb.enabled) && (wb || this.prerenderSession)) return null !== (Mb = this.prerenderSession) && void 0 !== Mb || (this.prerenderSession = new qw(this.metas, this.transports, (bb => {
          this.prerenderSession = void 0, this.initializeSession(bb)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(bb) {
        const wb = this.config.sessionTracking;
        if (null === wb || void 0 === wb ? void 0 : wb.enabled) {
          var Mb, eb;
          const Hb = aw(wb),
            pb = new Hb(this);
          this.isAdoptingSession = pb.isAdopting, this.registerBeforeSendHook(pb.recordActivity);
          const {
            initialSession: Vb,
            lifecycleType: gb
          } = this.createInitialSession(Hb, wb, bb);
          Hb.storeUserSession(Vb);
          const lb = Vb.sessionMeta;
          this.notifiedSession = lb, this.api.setSession(lb), this.captureListener = () => {
            this.transports.isPaused() || pb.updateSession({
              refreshActivity: !1
            })
          }, null === (Mb = (eb = this.metas).addCaptureListener) || void 0 === Mb || Mb.call(eb, this.captureListener), gb === Xw && this.api.pushEvent(Xw, {}, void 0, {
            skipDedupe: !0
          }), gb === xw && this.api.pushEvent(xw, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var bb, wb, Mb;
        (null === (bb = this.prerenderSession) || void 0 === bb || bb.destroy(), this.captureListener) && (null === (wb = (Mb = this.metas).removeCaptureListener) || void 0 === wb || wb.call(Mb, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function pM(bb, wb, Mb, eb) {
      const Hb = {
        filename: bb || document.location.href,
        function: wb || "?"
      };
      return void 0 !== Mb && (Hb.lineno = Mb), void 0 !== eb && (Hb.colno = eb), Hb
    }
    const VM = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      gM = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      lM = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      LM = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      IM = "safari-extension",
      OM = "safari-web-extension",
      UM = /Minified React error #\d+;/i;

    function tM(bb, wb) {
      const Mb = null === bb || void 0 === bb ? void 0 : bb.includes(IM),
        eb = !Mb && (null === bb || void 0 === bb ? void 0 : bb.includes("safari-web-extension"));
      return Mb || eb ? [(null === bb || void 0 === bb ? void 0 : bb.includes("@")) ? bb.split("@")[0] : bb, Mb ? `${IM}:${wb}` : `${OM}:${wb}`] : [bb, wb]
    }
    const CM = 1024;

    function EM(bb) {
      let wb = [];
      bb.stacktrace ? wb = bb.stacktrace.split("\n").filter(((bb, wb) => wb % 2 === 0)) : bb.stack && (wb = bb.stack.split("\n"));
      const Mb = wb.reduce(((wb, Mb, eb) => {
        if (Mb.length > CM) return wb;
        let Hb, pb, Vb, gb, lb;
        if (Hb = VM.exec(Mb)) {
          if (pb = Hb[1], Vb = Hb[2], gb = Hb[3], lb = Hb[4], null === Vb || void 0 === Vb ? void 0 : Vb.startsWith("eval")) {
            const bb = gM.exec(Vb);
            bb && (Vb = bb[1], gb = bb[2], lb = bb[3])
          }
          Vb = (null === Vb || void 0 === Vb ? void 0 : Vb.startsWith("address at ")) ? Vb.substring(11) : Vb, [pb, Vb] = tM(pb, Vb)
        } else if (Hb = lM.exec(Mb)) {
          if (pb = Hb[1], Vb = Hb[3], gb = Hb[4], lb = Hb[5], Vb && Vb.includes(" > eval")) {
            const bb = LM.exec(Vb);
            bb && (pb = pb || "eval", Vb = bb[1], gb = bb[2])
          } else 0 === eb && !lb && xb(bb.columnNumber) && (lb = String(bb.columnNumber + 1));
          [pb, Vb] = tM(pb, Vb)
        }
        return (Vb || pb) && wb.push(pM(Vb, pb, gb ? Number(gb) : void 0, lb ? Number(lb) : void 0)), wb
      }), []);
      return UM.test(bb.message) ? Mb.slice(1) : Mb
    }

    function FM(bb) {
      return {
        frames: EM(bb)
      }
    }
    const BM = "http-request-start",
      sM = "http-request-end";
    var mM = class bb {
      constructor() {
        this.subscribers = []
      }
      subscribe(bb) {
        return this.subscribers.push(bb), {
          unsubscribe: () => this.unsubscribe(bb)
        }
      }
      unsubscribe(bb) {
        this.subscribers = this.subscribers.filter((wb => wb !== bb))
      }
      notify(bb) {
        this.subscribers.forEach((wb => wb(bb)))
      }
      first() {
        const wb = new bb,
          Mb = bb => {
            wb.notify(bb), eb.unsubscribe()
          },
          eb = this.subscribe(Mb),
          Hb = wb.unsubscribe.bind(wb);
        return this.withUnsubscribeOverride(wb, Hb, Mb)
      }
      takeWhile(wb) {
        const Mb = new bb,
          eb = bb => {
            wb(bb) ? Mb.notify(bb) : Mb.unsubscribe(eb)
          };
        this.subscribe(eb);
        const Hb = Mb.unsubscribe.bind(Mb);
        return this.withUnsubscribeOverride(Mb, Hb, eb)
      }
      filter(wb) {
        const Mb = new bb,
          eb = bb => {
            wb(bb) && Mb.notify(bb)
          };
        this.subscribe(eb);
        const Hb = Mb.unsubscribe.bind(Mb);
        return this.withUnsubscribeOverride(Mb, Hb, eb)
      }
      merge() {
        const wb = new bb,
          Mb = [];
        for (var eb = arguments.length, Hb = new Array(eb), pb = 0; pb < eb; pb++) Hb[pb] = arguments[pb];
        Hb.forEach((bb => {
          const eb = bb.subscribe((bb => {
            wb.notify(bb)
          }));
          Mb.push(eb)
        }));
        const Vb = wb.unsubscribeAll.bind(wb);
        return wb.unsubscribe = () => {
          Mb.forEach((bb => bb.unsubscribe())), Vb()
        }, wb
      }
      withUnsubscribeOverride(bb, wb, Mb) {
        return bb.unsubscribe = bb => {
          wb(bb), this.unsubscribe(Mb)
        }, bb
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let hM = function(bb) {
      return bb.TRACE = "trace", bb.DEBUG = "debug", bb.INFO = "info", bb.LOG = "log", bb.WARN = "warn", bb.ERROR = "error", bb
    }({});
    const zM = "log",
      XM = ["trace", "debug", "info", "log", "warn", "error"];
    let xM, jM = !1;
    const KM = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      rM = "Error",
      RM = bb => bb.map((bb => Rb(bb) ? Jw(bb) : String(bb))).join(" ");

    function DM(bb) {
      let wb, Mb, eb, Hb, pb = [];
      if (Nb(bb) && bb.error) wb = bb.error.message, Mb = bb.error.name, pb = EM(bb.error);
      else if ((eb = vb(bb)) || Qb(bb)) {
        const {
          name: Hb,
          message: pb
        } = bb;
        Mb = null !== Hb && void 0 !== Hb ? Hb : eb ? "DOMError" : "DOMException", wb = pb ? `${Mb}: ${pb}` : Mb
      } else Sb(bb) ? (Mb = bb.name, wb = bb.message, pb = EM(bb)) : (Rb(bb) || (Hb = Wb(bb))) && (Mb = Hb ? bb.constructor.name : void 0, wb = `Non-Error exception captured with keys: ${Object.keys(bb)}`);
      return [wb, Mb, pb]
    }

    function cM(bb) {
      const [wb, Mb, eb, Hb, pb] = bb;
      let Vb, gb, lb = [];
      const Lb = Xb(wb),
        Ib = pM(Mb, "?", eb, Hb);
      return pb || !Lb ? ([Vb, gb, lb] = DM(null !== pb && void 0 !== pb ? pb : wb), 0 === lb.length && (lb = [Ib])) : Lb && ([Vb, gb] = function(bb) {
        var wb, Mb;
        const eb = bb.match(KM),
          Hb = null !== (wb = null === eb || void 0 === eb ? void 0 : eb[1]) && void 0 !== wb ? wb : rM;
        return [null !== (Mb = null === eb || void 0 === eb ? void 0 : eb[2]) && void 0 !== Mb ? Mb : bb, Hb]
      }(wb), lb = [Ib]), {
        value: Vb,
        type: gb,
        stackFrames: lb
      }
    }

    function YM(bb, wb) {
      return Sb(bb[0]) ? cM(bb) : {
        value: wb(bb)
      }
    }
    const ZM = bb => bb.map((bb => {
      try {
        return String(bb)
      } catch (wb) {
        return ""
      }
    })).join(" ");
    var fM = class bb extends MM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = eM, this.errorSerializer = ZM
      }
      initialize() {
        var wb, Mb;
        const eb = this.config.consoleInstrumentation,
          Hb = (null === eb || void 0 === eb ? void 0 : eb.serializeErrors) || !!(null === eb || void 0 === eb ? void 0 : eb.errorSerializer);
        this.errorSerializer = Hb ? null !== (wb = null === eb || void 0 === eb ? void 0 : eb.errorSerializer) && void 0 !== wb ? wb : RM : ZM;
        const pb = null !== (Mb = null === eb || void 0 === eb ? void 0 : eb.disabledLevels) && void 0 !== Mb ? Mb : bb.defaultDisabledLevels,
          Vb = function(bb) {
            if (xM || (xM = new mM), !jM) {
              const wb = null !== bb && void 0 !== bb ? bb : bM;
              XM.forEach((bb => {
                console[bb] = function() {
                  for (var Mb, eb = arguments.length, Hb = new Array(eb), pb = 0; pb < eb; pb++) Hb[pb] = arguments[pb];
                  xM.notify({
                    type: "console",
                    level: bb,
                    args: Hb
                  }), null === (Mb = wb[bb]) || void 0 === Mb || Mb.apply(console, Hb)
                }
              })), jM = !0
            }
            return xM
          }(this.unpatchedConsole);
        this.subscription = Vb.subscribe((wb => {
          let {
            level: Mb,
            args: Hb
          } = wb;
          if (!pb.includes(Mb)) try {
            if (Mb !== hM.ERROR || (null === eb || void 0 === eb ? void 0 : eb.consoleErrorAsLog))
              if (Mb === hM.ERROR && (null === eb || void 0 === eb ? void 0 : eb.consoleErrorAsLog)) {
                const {
                  value: wb,
                  type: eb,
                  stackFrames: pb
                } = YM(Hb, this.errorSerializer);
                this.api.pushLog(wb ? [bb.consoleErrorPrefix + wb] : Hb, {
                  level: Mb,
                  context: {
                    value: null !== wb && void 0 !== wb ? wb : "",
                    type: null !== eb && void 0 !== eb ? eb : "",
                    stackFrames: (null === pb || void 0 === pb ? void 0 : pb.length) ? RM(pb) : ""
                  }
                })
              } else this.api.pushLog(Hb, {
                level: Mb
              });
            else {
              const {
                value: wb,
                type: Mb,
                stackFrames: eb
              } = YM(Hb, this.errorSerializer);
              if (wb && !Mb && !eb) return void this.api.pushError(new Error(bb.consoleErrorPrefix + wb));
              this.api.pushError(new Error(bb.consoleErrorPrefix + wb), {
                type: Mb,
                stackFrames: eb
              })
            }
          } catch (Vb) {
            this.logError(Vb)
          }
        }))
      }
      destroy() {
        var bb;
        null === (bb = this.subscription) || void 0 === bb || bb.unsubscribe(), this.subscription = void 0
      }
    };
    fM.defaultDisabledLevels = [hM.DEBUG, hM.TRACE, hM.LOG], fM.consoleErrorPrefix = "console.error: ";
    const AM = [];
    var WM = class extends MM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = eM
      }
      initialize() {
        this.logDebug("Initializing"),
          function(bb) {
            const wb = window.onerror;
            window.onerror = function() {
              for (var Mb = arguments.length, eb = new Array(Mb), Hb = 0; Hb < Mb; Hb++) eb[Hb] = arguments[Hb];
              try {
                const {
                  value: wb,
                  type: Mb,
                  stackFrames: Hb
                } = cM(eb), pb = eb[4];
                if (wb) {
                  const eb = {
                    type: Mb,
                    stackFrames: Hb
                  };
                  null != pb && (eb.originalError = pb), bb.pushError(new Error(wb), eb)
                }
              } finally {
                null === wb || void 0 === wb || wb.apply(window, eb)
              }
            }
          }(this.api),
          function(bb) {
            const wb = wb => {
              var Mb;
              let eb, Hb, pb = wb;
              if (pb.reason) pb = wb.reason;
              else if (null === (Mb = wb.detail) || void 0 === Mb ? void 0 : Mb.reason) {
                var Vb;
                pb = null === (Vb = wb.detail) || void 0 === Vb ? void 0 : Vb.reason
              }
              let gb = [];
              fb(pb) ? (eb = `Non-Error promise rejection captured with value: ${String(pb)}`, Hb = "UnhandledRejection") : [eb, Hb, gb] = DM(pb), eb && bb.pushError(new Error(eb), {
                type: Hb,
                stackFrames: gb
              })
            };
            window.addEventListener("unhandledrejection", wb), AM.push(wb)
          }(this.api)
      }
    };
    const JM = "unknown";
    var SM = class extends MM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = eM, this.waitingForActivation = !1, this.sendViewChangedEvent = bb => {
          var wb;
          if (this.waitingForActivation || document.prerendering) return;
          const Mb = bb.view;
          if (Mb && Mb.name !== (null === (wb = this.notifiedView) || void 0 === wb ? void 0 : wb.name)) {
            var eb, Hb, pb;
            const bb = null !== (eb = null === (Hb = this.notifiedView) || void 0 === Hb ? void 0 : Hb.name) && void 0 !== eb ? eb : JM;
            this.notifiedView = Mb, this.api.pushEvent(zw, {
              fromView: bb,
              toView: null !== (pb = Mb.name) && void 0 !== pb ? pb : JM
            }, void 0, {
              skipDedupe: !0
            })
          }
        }, this.prerenderListener = () => {
          window.queueMicrotask((() => {
            this.waitingForActivation && (this.waitingForActivation = !1, this.sendViewChangedEvent(this.metas.value))
          }))
        }
      }
      initialize() {
        this.metas.addListener(this.sendViewChangedEvent), document.prerendering && (this.waitingForActivation = !0, document.addEventListener("prerenderingchange", this.prerenderListener, {
          once: !0
        }))
      }
      destroy() {
        this.waitingForActivation = !1, this.metas.removeListener(this.sendViewChangedEvent), document.removeEventListener("prerenderingchange", this.prerenderListener)
      }
    };
    class NM {
      t;
      o = 0;
      i = [];
      l(bb) {
        if (bb.hadRecentInput) return;
        const wb = this.i[0],
          Mb = this.i.at(-1);
        this.o && wb && Mb && bb.startTime - Mb.startTime < 1e3 && bb.startTime - wb.startTime < 5e3 ? (this.o += bb.value, this.i.push(bb)) : (this.o = bb.value, this.i = [bb]), this.t?.(bb)
      }
    }
    const vM = () => {
        const bb = performance.getEntriesByType("navigation")[0];
        if (bb && bb.responseStart > 0 && bb.responseStart < performance.now()) return bb
      },
      QM = bb => {
        if ("loading" === document.readyState) return "loading";
        const wb = vM();
        if (wb) {
          if (bb < wb.domInteractive) return "loading";
          if (0 === wb.domContentLoadedEventStart || bb < wb.domContentLoadedEventStart) return "dom-interactive";
          if (0 === wb.domComplete || bb < wb.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      GM = bb => {
        const wb = bb.nodeName;
        return 1 === bb.nodeType ? wb.toLowerCase() : wb.toUpperCase().replace(/^#/, "")
      },
      qM = bb => {
        let wb = "";
        try {
          for (; 9 !== bb?.nodeType;) {
            const Mb = bb,
              eb = Mb.id ? "#" + Mb.id : [GM(Mb), ...Array.from(Mb.classList ?? []).sort()].join(".");
            if (wb.length + eb.length > 99) return wb || eb;
            if (wb = wb ? eb + ">" + wb : eb, Mb.id) break;
            bb = Mb.parentNode
          }
        } catch {}
        return wb
      },
      aM = new WeakMap;

    function iM(bb, wb) {
      let Mb = aM.get(wb);
      return Mb || (Mb = new WeakMap, aM.set(wb, Mb)), Mb.get(bb) || Mb.set(bb, new wb), Mb.get(bb)
    }
    let uM = -1;
    const dM = () => uM,
      PM = bb => {
        addEventListener("pageshow", (wb => {
          wb.persisted && (uM = wb.timeStamp, bb(wb))
        }), !0)
      },
      nM = (bb, wb, Mb, eb) => {
        let Hb, pb;
        return Vb => {
          wb.value >= 0 && (Vb || eb) && (pb = wb.value - (Hb ?? 0), (pb || void 0 === Hb) && (Hb = wb.value, wb.delta = pb, wb.rating = ((bb, wb) => bb > wb[1] ? "poor" : bb > wb[0] ? "needs-improvement" : "good")(wb.value, Mb), bb(wb)))
        }
      },
      yM = bb => {
        requestAnimationFrame((() => requestAnimationFrame((() => bb()))))
      },
      oM = () => vM()?.activationStart ?? 0;
    let TM = -1;
    const kM = new Set,
      be = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      we = bb => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === bb.type)
            for (const bb of kM) bb();
          isFinite(TM) || (TM = "visibilitychange" === bb.type ? bb.timeStamp : 0, removeEventListener("prerenderingchange", we, !0))
        }
      },
      Me = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (TM = 1 / 0), TM < 0) {
          const bb = oM(),
            wb = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((wb => "hidden" === wb.name && wb.startTime >= bb))?.startTime;
          TM = wb ?? be(), addEventListener("visibilitychange", we, !0), addEventListener("prerenderingchange", we, !0), PM((() => {
            setTimeout((() => {
              TM = be()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return TM
          },
          onHidden(bb) {
            kM.add(bb)
          }
        }
      },
      ee = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Hb = arguments.length > 4 ? arguments[4] : void 0,
          pb = arguments.length > 5 ? arguments[5] : void 0,
          Vb = arguments.length > 6 ? arguments[6] : void 0;
        const gb = vM(),
          lb = gb?.navigationId || 0;
        let Lb = "navigate";
        return Mb ? Lb = Mb : dM() >= 0 ? Lb = "back-forward-cache" : gb && (document.prerendering || oM() > 0 ? Lb = "prerender" : document.wasDiscarded ? Lb = "restore" : gb.type && (Lb = gb.type.replace(/_/g, "-"))), {
          name: bb,
          value: wb,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Lb,
          navigationId: eb || lb,
          navigationInteractionId: Hb,
          navigationURL: pb || gb?.name,
          navigationStartTime: Vb || 0
        }
      },
      He = function(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const eb = bb.filter((bb => PerformanceObserver.supportedEntryTypes.includes(bb)));
          if (eb.length > 0) {
            const bb = new PerformanceObserver((bb => {
              queueMicrotask((() => {
                const Mb = bb.getEntries();
                eb.length > 1 && Mb.sort(((bb, wb) => bb.startTime + bb.duration - (wb.startTime + wb.duration))), wb(Mb)
              }))
            }));
            for (const wb of eb) bb.observe({
              type: wb,
              buffered: !0,
              ...Mb
            });
            return bb
          }
        } catch {}
      },
      pe = bb => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && bb && bb.reportSoftNavs,
      Ve = (bb, wb) => {
        if (bb.set(wb.navigationId, wb), bb.size > 2) {
          const wb = bb.keys().next().value;
          void 0 !== wb && bb.delete(wb)
        }
      },
      ge = bb => {
        let wb = !1;
        return () => {
          wb || (bb(), wb = !0)
        }
      };
    class le {
      u
    }
    const Le = bb => {
        document.prerendering ? addEventListener("prerenderingchange", bb, !0) : bb()
      },
      Ie = [1800, 3e3],
      Oe = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Mb = pe(wb);
        Le((() => {
          const eb = iM(wb, le),
            Hb = Me();
          let pb, Vb = ee("FCP");
          const gb = He(["paint"], (bb => {
            for (const wb of bb) "first-contentful-paint" === wb.name && (gb.disconnect(), wb.startTime < Hb.firstHiddenTime && (Vb.value = Math.max(wb.startTime - oM(), 0), Vb.entries.push(wb), Vb.navigationId = wb.navigationId || Vb.navigationId, pb(!0)))
          }));
          gb && (pb = nM(bb, Vb, Ie, wb.reportAllChanges), PM((Mb => {
            Vb = ee("FCP", -1, "back-forward-cache", Vb.navigationId, Vb.navigationInteractionId, Vb.navigationURL, dM()), pb = nM(bb, Vb, Ie, wb.reportAllChanges), yM((() => {
              Vb.value = performance.now() - Mb.timeStamp, pb(!0)
            }))
          }))), Mb && He(["soft-navigation"], (Mb => {
            Mb.forEach((Mb => {
              eb.u && Mb.navigationId && Ve(eb.u, Mb);
              const Hb = Math.max((Mb.presentationTime || Mb.paintTime || 0) - Mb.startTime, 0);
              Vb = ee("FCP", Hb, "soft-navigation", Mb.navigationId, Mb.interactionId, Mb.name, Mb.startTime), pb = nM(bb, Vb, Ie, wb.reportAllChanges), pb(!0)
            }))
          }), wb)
        }))
      },
      Ue = [.1, .25],
      te = bb => bb.find((bb => 1 === bb.node?.nodeType)) || bb[0];
    let Ce = 0,
      Ee = 1 / 0,
      Fe = 0;
    const Be = bb => {
      for (const wb of bb) wb.interactionId && (Ee = Math.min(Ee, wb.interactionId), Fe = Math.max(Fe, wb.interactionId), Ce = Fe ? (Fe - Ee) / 7 + 1 : 0)
    };
    let se;
    const me = () => se ? Ce : performance.interactionCount ?? 0;
    class he {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return me() - this.h
      }
      D() {
        this.h = me(), this.v.length = 0, this.p.clear()
      }
      S(bb) {
        const wb = this.T(),
          Mb = Math.min(this.v.length - 1, Math.floor(wb / 50));
        return !wb || -1 !== Mb || "soft-navigation" !== bb && "back-forward-cache" !== bb ? this.v[Mb] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(bb) {
        if (this.m?.(bb), !bb.interactionId) return;
        const wb = this.v.at(-1);
        let Mb = this.p.get(bb.interactionId);
        if (Mb || this.v.length < 10 || bb.duration > wb.k) {
          if (Mb ? bb.duration > Mb.k ? (Mb.entries = [bb], Mb.k = bb.duration) : bb.duration === Mb.k && bb.startTime === Mb.entries[0].startTime && Mb.entries.push(bb) : (Mb = {
              id: bb.interactionId,
              entries: [bb],
              k: bb.duration
            }, this.p.set(Mb.id, Mb), this.v.push(Mb)), this.v.sort(((bb, wb) => wb.k - bb.k)), this.v.length > 10) {
            const bb = this.v.splice(10);
            for (const wb of bb) this.p.delete(wb.id)
          }
          this.M?.(Mb)
        }
      }
    }
    const ze = bb => {
        const wb = "requestIdleCallback" in globalThis ? 1e3 : 0,
          Mb = globalThis.requestIdleCallback || setTimeout,
          eb = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) bb();
        else {
          const Hb = ge(bb);
          let pb = -1;
          const Vb = () => {
            eb(pb), Hb()
          };
          addEventListener("visibilitychange", Vb, {
            once: !0,
            capture: !0
          }), pb = Mb((() => {
            removeEventListener("visibilitychange", Vb, {
              capture: !0
            }), Hb()
          }), {
            timeout: wb
          })
        }
      },
      Xe = [200, 500],
      xe = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Mb = iM(wb = Object.assign({}, wb), he);
        let eb = [],
          Hb = [],
          pb = 0;
        const Vb = new WeakMap,
          gb = new WeakMap;
        let lb = !1;
        const Lb = () => {
            lb || (lb = !0, ze(Ib))
          },
          Ib = () => {
            const bb = new Set(Mb.v.map((bb => Vb.get(bb.entries[0])))),
              wb = Hb.length - 10;
            Hb = Hb.filter(((Mb, eb) => eb >= wb || bb.has(Mb)));
            const gb = new Set;
            for (const Mb of Hb) {
              const bb = Ob(Mb.startTime, Mb.processingEnd);
              for (const wb of bb) gb.add(wb)
            }
            const Lb = eb.length - 10;
            eb = eb.filter(((bb, wb) => gb.has(bb) || wb >= Lb && bb.startTime > pb)), lb = !1
          };
        Mb.m = bb => {
          const Mb = bb.startTime + bb.duration;
          let eb;
          pb = Math.max(pb, bb.processingEnd);
          for (let pb = Hb.length - 1; pb >= 0; pb--) {
            const Vb = Hb[pb];
            if (Math.abs(Mb - Vb.renderTime) <= 8) {
              eb = Vb, eb.startTime = Math.min(bb.startTime, eb.startTime), eb.processingStart = Math.min(bb.processingStart, eb.processingStart), eb.processingEnd = Math.max(bb.processingEnd, eb.processingEnd), wb.includeProcessedEventEntries && eb.entries.push(bb);
              break
            }
          }
          eb || (eb = {
            startTime: bb.startTime,
            processingStart: bb.processingStart,
            processingEnd: bb.processingEnd,
            renderTime: Mb,
            entries: wb.includeProcessedEventEntries ? [bb] : []
          }, Hb.push(eb)), bb.interactionId && Vb.set(bb, eb), Lb()
        }, Mb.M = bb => {
          if (!gb.get(bb)) {
            const Mb = bb.entries.find((bb => bb.target))?.target;
            if (Mb) {
              const eb = wb.generateTarget?.(Mb) ?? qM(Mb);
              gb.set(bb, eb)
            } else {
              const wb = bb.entries.find((bb => bb.targetSelector))?.targetSelector;
              wb && gb.set(bb, wb)
            }
          }
        };
        const Ob = (bb, wb) => {
          const Mb = [];
          for (const Hb of eb)
            if (!(Hb.startTime + Hb.duration < bb)) {
              if (Hb.startTime > wb) break;
              Mb.push(Hb)
            } return Mb
        };
        He(["long-animation-frame"], (bb => {
            eb = eb.concat(bb), Lb()
          }), wb),
          function(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const Mb = Me();
            Le((() => {
              "interactionCount" in performance || se || (se = He(["event"], Be, {
                durationThreshold: 0
              }));
              let eb, Hb = ee("INP");
              const pb = iM(wb, he),
                Vb = (Mb, Vb, gb, lb, Lb) => {
                  pb.D(), Hb = ee("INP", -1, Mb, Vb, gb, lb, Lb), eb = nM(bb, Hb, Xe, wb.reportAllChanges)
                },
                gb = () => {
                  const bb = pb.S(Hb.navigationType);
                  bb && bb.k !== Hb.value && (Hb.value = bb.k, Hb.entries = bb.entries, eb())
                },
                lb = bb => {
                  gb(), eb(!0), Vb("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime)
                },
                Lb = function(bb) {
                  let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  ze((() => {
                    for (const wb of bb) "soft-navigation" !== wb.entryType ? pb.l(wb) : lb(wb);
                    gb(), wb && eb(!0)
                  }))
                },
                Ib = ["event", "first-input"];
              pe(wb) && Ib.push("soft-navigation");
              const Ob = He(Ib, Lb, {
                ...wb,
                durationThreshold: wb.durationThreshold ?? 40
              });
              eb = nM(bb, Hb, Xe, wb.reportAllChanges), Ob && (Mb.onHidden((() => {
                Lb(Ob.takeRecords(), !0)
              })), PM((() => {
                Vb("back-forward-cache", Hb.navigationId, Hb.navigationInteractionId, Hb.navigationURL, dM())
              })))
            }))
          }((wb => {
            bb((bb => {
              if (0 === bb.entries.length) {
                const wb = bb.navigationStartTime || 0,
                  Mb = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: bb.value,
                    loadState: QM(wb)
                  };
                return Object.assign(bb, {
                  attribution: Mb
                })
              }
              const wb = bb.entries[0],
                eb = Vb.get(wb),
                Hb = Math.max(eb.processingStart, wb.startTime),
                pb = Math.max(wb.startTime + wb.duration, Hb),
                lb = Math.min(eb.processingEnd, pb),
                Lb = eb.entries.sort(((bb, wb) => bb.processingStart - wb.processingStart)),
                Ib = Ob(wb.startTime, lb),
                Ub = Mb.p.get(wb.interactionId),
                tb = {
                  interactionTarget: gb.get(Ub),
                  interactionType: wb.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: wb.startTime,
                  nextPaintTime: pb,
                  processedEventEntries: Lb,
                  longAnimationFrameEntries: Ib,
                  inputDelay: Hb - wb.startTime,
                  processingDuration: lb - Hb,
                  presentationDelay: pb - lb,
                  loadState: QM(wb.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (bb => {
                const wb = bb.interactionTime,
                  Mb = bb.nextPaintTime;
                if (!bb.longAnimationFrameEntries?.length || !wb || !Mb) return;
                const eb = bb.inputDelay,
                  Hb = bb.processingDuration;
                let pb, Vb, gb = 0,
                  lb = 0,
                  Lb = 0,
                  Ib = 0;
                for (const tb of bb.longAnimationFrameEntries) {
                  lb = lb + tb.startTime + tb.duration - tb.styleAndLayoutStart;
                  for (const bb of tb.scripts) {
                    const Mb = bb.startTime + bb.duration;
                    if (Mb < wb) continue;
                    const Lb = Mb - Math.max(wb, bb.startTime),
                      Ob = bb.duration ? Lb / bb.duration * bb.forcedStyleAndLayoutDuration : 0;
                    gb += Lb - Ob, lb += Ob, Lb > Ib && (Vb = bb.startTime < wb + eb ? "input-delay" : bb.startTime >= wb + eb + Hb ? "presentation-delay" : "processing-duration", pb = bb, Ib = Lb)
                  }
                }
                const Ob = bb.longAnimationFrameEntries.at(-1),
                  Ub = Ob ? Ob.startTime + Ob.duration : 0;
                Ub >= wb + eb + Hb && (Lb = Mb - Ub), pb && Vb && (bb.longestScript = {
                  entry: pb,
                  subpart: Vb,
                  intersectingDuration: Ib
                }), bb.totalScriptDuration = gb, bb.totalStyleAndLayoutDuration = lb, bb.totalPaintDuration = Lb, bb.totalUnattributedDuration = Mb - wb - gb - lb - Lb
              })(tb), Object.assign(bb, {
                attribution: tb
              })
            })(wb))
          }), wb)
      };
    class je {
      m;
      u;
      l(bb) {
        this.m?.(bb)
      }
    }
    const Ke = [2500, 4e3];
    let re = 50;
    const Re = [];
    He(["resource"], (bb => {
      for (const wb of bb) Re.push(wb), Re.length > re && Re.shift()
    }));
    const De = [800, 1800],
      ce = bb => {
        document.prerendering ? Le((() => ce(bb))) : "complete" !== document.readyState ? addEventListener("load", (() => ce(bb)), !0) : setTimeout(bb)
      },
      Ye = "load_state",
      Ze = "time_to_first_byte";
    var fe = class {
        constructor(bb, wb) {
          this.corePushMeasurement = bb, this.webVitalConfig = wb
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var bb;
          ! function(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Mb = iM(wb = Object.assign({}, wb), NM),
              eb = new WeakMap;
            Mb.t = bb => {
                if (bb?.sources?.length) {
                  const Mb = te(bb.sources),
                    Hb = Mb?.node;
                  if (Hb) {
                    const bb = wb.generateTarget?.(Hb) ?? qM(Hb);
                    eb.set(Mb, bb)
                  }
                }
              },
              function(bb) {
                let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const Mb = Me();
                Oe(ge((() => {
                  let eb, Hb = ee("CLS", 0);
                  const pb = iM(wb, NM),
                    Vb = (Mb, Vb, gb, lb, Lb) => {
                      Hb = ee("CLS", 0, Mb, Vb, gb, lb, Lb), pb.o = 0, eb = nM(bb, Hb, Ue, wb.reportAllChanges)
                    },
                    gb = function() {
                      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      pb.o > Hb.value && (Hb.value = pb.o, Hb.entries = pb.i), eb(bb)
                    },
                    lb = bb => {
                      gb(!0), Vb("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime)
                    },
                    Lb = bb => {
                      for (const wb of bb) "soft-navigation" !== wb.entryType ? pb.l(wb) : lb(wb);
                      gb()
                    },
                    Ib = ["layout-shift"];
                  pe(wb) && Ib.push("soft-navigation");
                  const Ob = He(Ib, Lb);
                  Ob && (eb = nM(bb, Hb, Ue, wb.reportAllChanges), Mb.onHidden((() => {
                    Lb(Ob.takeRecords()), eb(!0)
                  })), PM((() => {
                    Vb("back-forward-cache", Hb.navigationId, Hb.navigationInteractionId, Hb.navigationURL, dM()), yM(eb)
                  })), setTimeout(eb))
                })))
              }((wb => {
                bb((bb => {
                  let wb = {};
                  if (bb.entries.length) {
                    const Mb = bb.entries.reduce(((bb, wb) => bb.value > wb.value ? bb : wb));
                    if (Mb?.sources?.length) {
                      const bb = te(Mb.sources);
                      bb && (wb = {
                        largestShiftTarget: eb.get(bb),
                        largestShiftTime: Mb.startTime,
                        largestShiftValue: Mb.value,
                        largestShiftSource: bb,
                        largestShiftEntry: Mb,
                        loadState: QM(Mb.startTime)
                      })
                    }
                  }
                  return Object.assign(bb, {
                    attribution: wb
                  })
                })(wb))
              }), wb)
          }((bb => {
            const {
              loadState: wb,
              largestShiftValue: Mb,
              largestShiftTime: eb,
              largestShiftTarget: Hb
            } = bb.attribution, pb = this.buildInitialValues(bb);
            this.addIfPresent(pb, "largest_shift_value", Mb), this.addIfPresent(pb, "largest_shift_time", eb);
            const Vb = this.buildInitialContext(bb);
            this.addIfPresent(Vb, Ye, wb), this.addIfPresent(Vb, "largest_shift_target", Hb), this.pushMeasurement(pb, Vb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureFCP() {
          var bb;
          ! function(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Mb = iM(wb = Object.assign({}, wb), le);
            pe(wb) && (Mb.u = new Map), Oe((wb => {
              bb((bb => {
                let wb = {
                  timeToFirstByte: 0,
                  firstByteToFCP: bb.value,
                  loadState: QM(dM())
                };
                if ("soft-navigation" !== bb.navigationType) {
                  if (bb.entries.length) {
                    const Mb = vM(),
                      eb = bb.entries.at(-1);
                    if (Mb) {
                      const Hb = Mb.responseStart,
                        pb = Mb.activationStart || 0,
                        Vb = Math.max(0, Hb - pb);
                      wb = {
                        timeToFirstByte: Vb,
                        firstByteToFCP: bb.value - Vb,
                        loadState: QM(bb.entries[0].startTime),
                        navigationEntry: Mb,
                        fcpEntry: eb
                      }
                    }
                  }
                } else {
                  const eb = Mb.u?.get(bb.navigationId);
                  eb && (wb = {
                    timeToFirstByte: 0,
                    firstByteToFCP: bb.value,
                    loadState: "complete",
                    navigationEntry: eb
                  })
                }
                return Object.assign(bb, {
                  attribution: wb
                })
              })(wb))
            }), wb)
          }((bb => {
            const {
              firstByteToFCP: wb,
              timeToFirstByte: Mb,
              loadState: eb
            } = bb.attribution, Hb = this.buildInitialValues(bb);
            this.addIfPresent(Hb, "first_byte_to_fcp", wb), this.addIfPresent(Hb, Ze, Mb);
            const pb = this.buildInitialContext(bb);
            this.addIfPresent(pb, Ye, eb), this.pushMeasurement(Hb, pb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureINP() {
          var bb;
          xe((bb => {
            var wb;
            const {
              interactionTime: Mb,
              presentationDelay: eb,
              inputDelay: Hb,
              processingDuration: pb,
              nextPaintTime: Vb,
              loadState: gb,
              interactionTarget: lb,
              interactionType: Lb,
              totalScriptDuration: Ib,
              totalStyleAndLayoutDuration: Ob,
              totalPaintDuration: Ub,
              totalUnattributedDuration: tb,
              longestScript: Cb
            } = bb.attribution, Eb = this.buildInitialValues(bb);
            this.addIfPresent(Eb, "interaction_time", Mb), this.addIfPresent(Eb, "presentation_delay", eb), this.addIfPresent(Eb, "input_delay", Hb), this.addIfPresent(Eb, "processing_duration", pb), this.addIfPresent(Eb, "next_paint_time", Vb), this.addNumberIfDefined(Eb, "total_script_duration", Ib), this.addNumberIfDefined(Eb, "total_style_and_layout_duration", Ob), this.addNumberIfDefined(Eb, "total_paint_duration", Ub), this.addNumberIfDefined(Eb, "total_unattributed_duration", tb), this.addNumberIfDefined(Eb, "longest_script_intersecting_duration", null === Cb || void 0 === Cb ? void 0 : Cb.intersectingDuration);
            const Fb = this.buildInitialContext(bb);
            this.addIfPresent(Fb, Ye, gb), this.addIfPresent(Fb, "interaction_target", lb), this.addIfPresent(Fb, "interaction_type", Lb), this.addIfPresent(Fb, "longest_script_subpart", null === Cb || void 0 === Cb ? void 0 : Cb.subpart), this.addIfPresent(Fb, "longest_script_invoker_type", null === Cb || void 0 === Cb ? void 0 : Cb.entry.invokerType), (null === (wb = this.webVitalConfig) || void 0 === wb ? void 0 : wb.trackAttributionSources) && (this.addIfPresent(Fb, "longest_script_invoker", null === Cb || void 0 === Cb ? void 0 : Cb.entry.invoker), this.addIfPresent(Fb, "longest_script_source_url", null === Cb || void 0 === Cb ? void 0 : Cb.entry.sourceURL), this.addIfPresent(Fb, "longest_script_source_function_name", null === Cb || void 0 === Cb ? void 0 : Cb.entry.sourceFunctionName), this.addIfPresent(Fb, "longest_script_source_char_position", void 0 !== (null === Cb || void 0 === Cb ? void 0 : Cb.entry.sourceCharPosition) ? String(Cb.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Eb, Fb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureLCP() {
          var bb;
          ! function(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (wb = Object.assign({}, wb)).resourceBufferSize && (re = wb.resourceBufferSize);
            const Mb = iM(wb, je),
              eb = new WeakMap;
            pe(wb) && (Mb.u = new Map), Mb.m = bb => {
                const Mb = bb.element;
                if (Mb) {
                  const Hb = wb.generateTarget?.(Mb) ?? qM(Mb);
                  eb.set(bb, Hb)
                } else bb.id && eb.set(bb, `#${bb.id}`)
              },
              function(bb) {
                let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  Mb = !1;
                const eb = pe(wb);
                Le((() => {
                  let Hb, pb = Me(),
                    Vb = ee("LCP");
                  const gb = iM(wb, je),
                    lb = (eb, gb, lb, Lb, Ib) => {
                      Vb = ee("LCP", -1, eb, gb, lb, Lb, Ib), Hb = nM(bb, Vb, Ke, wb.reportAllChanges), Mb = !1, "soft-navigation" === eb && (pb = Me(!0))
                    },
                    Lb = bb => {
                      gb.u && bb.navigationId && Ve(gb.u, bb), Mb || Hb(!0), lb("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime);
                      const wb = bb.getLargestInteractionContentfulPaint?.();
                      wb && Ib([wb])
                    },
                    Ib = bb => {
                      wb.reportAllChanges || eb || (bb = bb.slice(-1));
                      for (const wb of bb) {
                        if (!wb) continue;
                        if ("soft-navigation" === wb.entryType) {
                          Lb(wb);
                          continue
                        }
                        let bb = 0,
                          Mb = [],
                          eb = wb.startTime;
                        if ("largest-contentful-paint" === wb.entryType) bb = Math.max(wb.startTime - oM(), 0), gb.l(wb), Mb = [wb];
                        else if ("interaction-contentful-paint" === wb.entryType) {
                          const Hb = wb;
                          if (!Vb.navigationId) continue;
                          if ("interactionId" in Hb && Hb.interactionId != Vb.navigationInteractionId) continue;
                          eb = Hb.largestContentfulPaint?.renderTime || 0, bb = Math.max(eb - wb.startTime, 0), Hb.largestContentfulPaint && (gb.l(Hb.largestContentfulPaint), Mb = [Hb.largestContentfulPaint])
                        }
                        eb < pb.firstHiddenTime && (Vb.value = bb, Vb.entries = Mb, Hb())
                      }
                    },
                    Ob = ["largest-contentful-paint"];
                  eb && Ob.push("interaction-contentful-paint", "soft-navigation");
                  const Ub = He(Ob, Ib);
                  if (Ub) {
                    Hb = nM(bb, Vb, Ke, wb.reportAllChanges);
                    const pb = ["keydown", "click", "visibilitychange"],
                      gb = bb => {
                        if (bb.isTrusted && !Mb) {
                          const bb = Vb.id;
                          ze((() => {
                            if (!Mb) {
                              if (!eb) {
                                Ub.disconnect();
                                for (const bb of pb) removeEventListener(bb, gb, {
                                  capture: !0
                                })
                              }
                              bb === Vb.id && (Mb = !0, Hb(!0))
                            }
                          }))
                        }
                      };
                    for (const bb of pb) addEventListener(bb, gb, {
                      capture: !0
                    });
                    PM((eb => {
                      lb("back-forward-cache", Vb.navigationId, Vb.navigationInteractionId, Vb.navigationURL, dM()), Hb = nM(bb, Vb, Ke, wb.reportAllChanges), yM((() => {
                        Vb.value = performance.now() - eb.timeStamp, Mb = !0, Hb(!0)
                      }))
                    }))
                  }
                }))
              }((wb => {
                bb((bb => {
                  let wb = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: bb.value
                  };
                  if (bb.entries.length) {
                    const Hb = bb.entries.at(-1),
                      pb = bb => bb.name === Hb.url && (bb.requestStart || bb.startTime) <= Hb.startTime,
                      Vb = Hb.url && (Re.findLast(pb) || performance.getEntriesByType("resource").findLast(pb));
                    let gb;
                    wb.target = eb.get(Hb), wb.lcpEntry = Hb, Hb.url && (wb.url = Hb.url), Vb && (wb.lcpResourceEntry = Vb);
                    let lb = 0,
                      Lb = 0;
                    if ("soft-navigation" !== bb.navigationType ? (gb = vM(), lb = gb?.activationStart ?? 0, Lb = gb?.responseStart ?? 0) : (lb = bb.navigationStartTime || 0, gb = Mb.u?.get(bb.navigationId)), gb) {
                      const Mb = Math.max(0, Lb - lb),
                        eb = Math.max(Mb, Vb ? (Vb.requestStart || Vb.startTime) - lb : 0),
                        Hb = Math.min(bb.value, Math.max(eb, Vb ? Vb.responseEnd - lb : 0));
                      wb = {
                        ...wb,
                        timeToFirstByte: Mb,
                        resourceLoadDelay: eb - Mb,
                        resourceLoadDuration: Hb - eb,
                        elementRenderDelay: bb.value - Hb,
                        navigationEntry: gb
                      }
                    }
                  }
                  return Object.assign(bb, {
                    attribution: wb
                  })
                })(wb))
              }), wb)
          }((bb => {
            var wb;
            const {
              elementRenderDelay: Mb,
              resourceLoadDelay: eb,
              resourceLoadDuration: Hb,
              timeToFirstByte: pb,
              target: Vb,
              url: gb,
              lcpResourceEntry: lb
            } = bb.attribution, Lb = this.buildInitialValues(bb);
            this.addIfPresent(Lb, "element_render_delay", Mb), this.addIfPresent(Lb, "resource_load_delay", eb), this.addIfPresent(Lb, "resource_load_duration", Hb), this.addIfPresent(Lb, Ze, pb);
            const Ib = this.buildInitialContext(bb);
            this.addIfPresent(Ib, "element", Vb), (null === (wb = this.webVitalConfig) || void 0 === wb ? void 0 : wb.trackAttributionSources) && (this.addIfPresent(Ib, "resource_url", gb), this.addIfPresent(Ib, "resource_delivery_type", null === lb || void 0 === lb ? void 0 : lb.deliveryType), this.addIfPresent(Ib, "resource_initiator_type", null === lb || void 0 === lb ? void 0 : lb.initiatorType)), this.pushMeasurement(Lb, Ib)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureTTFB() {
          var bb;
          ! function(bb) {
            ! function(bb) {
              let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const Mb = pe(wb);
              let eb = ee("TTFB"),
                Hb = nM(bb, eb, De, wb.reportAllChanges);
              ce((() => {
                const pb = vM();
                if (pb) {
                  const Vb = pb.responseStart;
                  eb.value = Math.max(Vb - oM(), 0), eb.entries = [pb], Hb(!0), PM((() => {
                    eb = ee("TTFB", 0, "back-forward-cache", eb.navigationId, eb.navigationInteractionId, eb.navigationURL, dM()), Hb = nM(bb, eb, De, wb.reportAllChanges), Hb(!0)
                  })), Mb && He(["soft-navigation"], (Mb => {
                    Mb.forEach((Mb => {
                      Mb.navigationId && (eb = ee("TTFB", 0, "soft-navigation", Mb.navigationId, Mb.interactionId, Mb.name, Mb.startTime), eb.entries = [Mb], Hb = nM(bb, eb, De, wb.reportAllChanges), Hb(!0))
                    }))
                  }), wb)
                }
              }))
            }((wb => {
              bb((bb => {
                const wb = bb.entries[0];
                let Mb = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: wb
                };
                if (bb.entries.length && wb instanceof PerformanceNavigationTiming) {
                  const eb = wb.activationStart || 0,
                    Hb = Math.max((wb.workerStart || wb.fetchStart || 0) - eb, 0),
                    pb = Math.max(wb.domainLookupStart - eb, 0),
                    Vb = Math.max(wb.connectStart - eb, 0),
                    gb = Math.max(wb.connectEnd - eb, 0);
                  Mb = {
                    waitingDuration: Hb,
                    cacheDuration: pb - Hb,
                    dnsDuration: Vb - pb,
                    connectionDuration: gb - Vb,
                    requestDuration: bb.value - gb,
                    navigationEntry: wb
                  }
                }
                return Object.assign(bb, {
                  attribution: Mb
                })
              })(wb))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((bb => {
            const {
              dnsDuration: wb,
              connectionDuration: Mb,
              requestDuration: eb,
              waitingDuration: Hb,
              cacheDuration: pb
            } = bb.attribution, Vb = this.buildInitialValues(bb);
            this.addIfPresent(Vb, "dns_duration", wb), this.addIfPresent(Vb, "connection_duration", Mb), this.addIfPresent(Vb, "request_duration", eb), this.addIfPresent(Vb, "waiting_duration", Hb), this.addIfPresent(Vb, "cache_duration", pb);
            const gb = this.buildInitialContext(bb);
            this.pushMeasurement(Vb, gb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        buildInitialValues(bb) {
          return {
            [bb.name.toLowerCase()]: bb.value,
            delta: bb.delta
          }
        }
        buildInitialContext(bb) {
          var wb;
          const Mb = null !== (wb = bw("com.grafana.faro.lastNavigationId", ob)) && void 0 !== wb ? wb : JM;
          return {
            id: bb.id,
            rating: bb.rating,
            navigation_type: bb.navigationType,
            navigation_entry_id: Mb
          }
        }
        pushMeasurement(bb, wb) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: bb
          }, {
            context: wb
          })
        }
        addIfPresent(bb, wb, Mb) {
          Mb && (bb[wb] = Mb)
        }
        addNumberIfDefined(bb, wb, Mb) {
          void 0 !== Mb && (bb[wb] = Mb)
        }
      },
      Ae = class extends MM {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = eM
        }
        initialize() {
          this.logDebug("Initializing"), new fe(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const We = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function Je() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const wb of bb)
        if ("traceparent" === wb.name) {
          if (!We.test(wb.description)) continue;
          const [, bb, Mb] = wb.description.split("-");
          if (null != bb && null != Mb) return {
            traceId: bb,
            spanId: Mb
          };
          break
        }
    }

    function Se(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: Mb,
        monoNow: eb
      } = wb;
      return Math.min(Mb, Mb - (eb - bb))
    }

    function Ne(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [Mb, eb] of Object.entries(wb)) {
        const wb = bb[Mb];
        return null != wb && (cb(eb) ? eb.includes(wb) : wb === eb)
      }
      return !0
    }

    function ve(bb) {
      const {
        connectEnd: wb,
        connectStart: Mb,
        decodedBodySize: eb,
        domainLookupEnd: Hb,
        domainLookupStart: pb,
        duration: Vb,
        encodedBodySize: gb,
        fetchStart: lb,
        initiatorType: Lb,
        name: Ib,
        nextHopProtocol: Ob,
        redirectEnd: Ub,
        redirectStart: tb,
        renderBlockingStatus: Cb,
        requestStart: Eb,
        responseEnd: Fb,
        responseStart: Bb,
        responseStatus: sb,
        secureConnectionStart: mb,
        transferSize: hb,
        workerStart: zb
      } = bb;
      return {
        name: Ib,
        httpHost: Ge(Ib),
        duration: qe(Vb),
        tcpHandshakeTime: qe(wb - Mb),
        dnsLookupTime: qe(Hb - pb),
        tlsNegotiationTime: qe(wb - mb),
        responseStatus: qe(sb),
        redirectTime: qe(Ub - tb),
        requestTime: qe(Bb - Eb),
        responseTime: qe(Fb - Bb),
        fetchTime: qe(Fb - lb),
        serviceWorkerTime: qe(zb > 0 ? lb - zb : 0),
        decodedBodySize: qe(eb),
        encodedBodySize: qe(gb),
        cacheHitStatus: function() {
          let bb = "fullLoad";
          0 === hb ? eb > 0 && (bb = "cache") : null != sb ? 304 === sb && (bb = "conditionalFetch") : gb > 0 && hb < gb && (bb = "conditionalFetch");
          return bb
        }(),
        renderBlockingStatus: qe(Cb),
        protocol: Ob,
        initiatorType: Lb,
        visibilityState: document.visibilityState,
        ttfb: qe(Bb - Eb),
        transferSize: qe(hb)
      }
    }

    function Qe(bb) {
      const {
        activationStart: wb,
        domComplete: Mb,
        domContentLoadedEventEnd: eb,
        domContentLoadedEventStart: Hb,
        domInteractive: pb,
        fetchStart: Vb,
        loadEventEnd: gb,
        loadEventStart: lb,
        responseStart: Lb,
        type: Ib
      } = bb, Ob = function() {
        var bb;
        return null != (null === (bb = performance.timing) || void 0 === bb ? void 0 : bb.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Iw(Iw({}, ve(bb)), {}, {
        pageLoadTime: qe(Mb - Vb),
        documentParsingTime: qe(Ob ? pb - Ob : null),
        domProcessingTime: qe(Mb - pb),
        domContentLoadHandlerTime: qe(eb - Hb),
        onLoadTime: qe(gb - lb),
        ttfb: qe(Math.max(Lb - (null !== wb && void 0 !== wb ? wb : 0), 0)),
        type: Ib
      })
    }

    function Ge(bb) {
      try {
        return new URL(bb).host || JM
      } catch (wb) {
        return JM
      }
    }

    function qe(bb) {
      return null == bb ? JM : "number" === typeof bb ? Math.round(bb > 0 ? bb : 0).toString() : bb.toString()
    }
    const ae = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function ie(bb, wb, Mb, eb, Hb, pb, Vb) {
      try {
        var gb = bb[pb](Vb),
          lb = gb.value
      } catch (bb) {
        return void Mb(bb)
      }
      gb.done ? wb(lb) : Promise.resolve(lb).then(eb, Hb)
    }

    function ue(bb) {
      return function() {
        var wb = this,
          Mb = arguments;
        return new Promise((function(eb, Hb) {
          var pb = bb.apply(wb, Mb);

          function Vb(bb) {
            ie(pb, eb, Hb, Vb, gb, "next", bb)
          }

          function gb(bb) {
            ie(pb, eb, Hb, Vb, gb, "throw", bb)
          }
          Vb(void 0)
        }))
      }
    }
    const de = new mM;
    var Pe = class extends MM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = eM
      }
      initialize() {
        var bb = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let wb = !1;
        const Mb = () => {
          ! function(bb) {
            if ("complete" === document.readyState) bb();
            else {
              const wb = () => {
                "complete" === document.readyState && (bb(), document.removeEventListener("readystatechange", wb))
              };
              document.addEventListener("readystatechange", wb)
            }
          }(ue((function*() {
            if (wb) return;
            const Mb = bb.api.pushEvent,
              {
                faroNavigationId: eb
              } = yield function(bb) {
                let wb;
                const Mb = new Promise((bb => {
                  wb = bb
                }));
                return new PerformanceObserver((Mb => {
                  var eb;
                  const [Hb] = Mb.getEntries();
                  if (null == Hb || nb(Hb.name)) return;
                  const pb = Hb.toJSON();
                  let Vb = Je(null === pb || void 0 === pb ? void 0 : pb.serverTiming);
                  const gb = null !== (eb = bw("com.grafana.faro.lastNavigationId", ob)) && void 0 !== eb ? eb : JM,
                    lb = Iw(Iw({}, Qe(pb)), {}, {
                      faroNavigationId: Bw(),
                      faroPreviousNavigationId: gb
                    });
                  ww("com.grafana.faro.lastNavigationId", lb.faroNavigationId, ob), bb("faro.performance.navigation", lb, void 0, {
                    spanContext: Vb,
                    timestampOverwriteMs: Se(pb.startTime)
                  }), wb(lb)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), Mb
              }(Mb);
            wb || null == eb || function(bb, wb, Mb, eb) {
              const Hb = eb.trackResources;
              new PerformanceObserver((eb => {
                const pb = eb.getEntries(),
                  Vb = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const gb of pb) {
                  if (nb(gb.name)) continue;
                  null === Mb || void 0 === Mb || Mb.notify({
                    type: "resource"
                  });
                  const eb = gb.toJSON();
                  let pb = Je(null === eb || void 0 === eb ? void 0 : eb.serverTiming);
                  (null == Hb && Ne(eb, ae) || Hb) && wb("faro.performance.resource", Iw(Iw({}, ve(eb)), {}, {
                    faroNavigationId: bb,
                    faroResourceId: Bw()
                  }), void 0, {
                    spanContext: pb,
                    timestampOverwriteMs: Se(eb.startTime, Vb)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(eb, Mb, de, bb.config)
          })))
        };
        this.cancelInitialization = () => {
          wb = !0, document.removeEventListener("prerenderingchange", Mb)
        }, document.prerendering ? document.addEventListener("prerenderingchange", Mb, {
          once: !0
        }) : Mb()
      }
      destroy() {
        var bb;
        null === (bb = this.cancelInitialization) || void 0 === bb || bb.call(this), this.cancelInitialization = void 0
      }
    };
    const ne = "data-faro-user-action-name",
      ye = ne.replace(/-name$/, "-timeout"),
      oe = 1e3;

    function Te(bb) {
      return `data-${(bb.startsWith("data-")?bb.slice(5):bb).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function ke(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iw;
      if (void 0 === bb) return wb;
      let eb = NaN;
      try {
        eb = "string" === typeof bb && "" === bb.trim() ? NaN : Number(bb)
      } catch (Hb) {}
      return !Number.isFinite(eb) || eb <= 0 ? (Mb(`initialActivityTimeout must be a finite number greater than zero; using ${wb} ms`), wb) : eb > 1e3 ? (Mb(`initialActivityTimeout cannot exceed ${oe} ms; clamping to the maximum`), oe) : eb
    }

    function bH(bb, wb, Mb) {
      return void 0 !== bb && window.clearTimeout(bb), window.setTimeout((() => {
        wb()
      }), Mb)
    }

    function wH(bb) {
      return bb.type === sM
    }
    let MH, eH;

    function HH() {
      return MH || (MH = new mM), eH || (eH = new MutationObserver(((bb, wb) => {
        MH.notify({
          type: "dom-mutation"
        })
      })), eH.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), MH
    }
    const pH = "fetch",
      VH = "xhr";
    let gH, lH, LH, IH, OH = !1;

    function UH() {
      if (gH) return gH;

      function bb(bb) {
        gH.notify({
          type: BM,
          request: bb
        })
      }

      function wb(bb) {
        gH.notify({
          type: sM,
          request: bb
        })
      }
      return gH = new mM, OH || (! function(bb) {
        let {
          onRequestEnd: wb,
          onRequestStart: Mb
        } = bb;
        LH || (LH = window.fetch);
        window.fetch = function() {
          var bb, eb;
          const Hb = null !== (bb = yb(arguments[0])) && void 0 !== bb ? bb : "",
            pb = nb(Hb),
            Vb = (null !== (eb = arguments[1]) && void 0 !== eb ? eb : {}).method,
            gb = Bw();
          return pb || Mb({
            url: Hb,
            method: Vb,
            requestId: gb,
            apiType: pH
          }), LH.apply(this, arguments).then((bb => (pb || wb({
            url: Hb,
            method: Vb,
            requestId: gb,
            apiType: pH
          }), bb))).catch((bb => {
            throw pb || wb({
              url: Hb,
              method: Vb,
              requestId: gb,
              apiType: pH
            }), bb
          }))
        }
      }({
        onRequestStart: bb,
        onRequestEnd: wb
      }), function(bb) {
        let {
          onRequestStart: wb,
          onRequestEnd: Mb
        } = bb;
        lH || (lH = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const bb = arguments[1],
            eb = nb(bb),
            Hb = arguments[0],
            pb = Bw();
          this.addEventListener("loadstart", (function() {
            eb || wb({
              url: bb,
              method: Hb,
              requestId: pb,
              apiType: VH
            })
          })), this.addEventListener("load", (function() {
            eb || Mb({
              url: bb,
              method: Hb,
              requestId: pb,
              apiType: VH
            })
          })), this.addEventListener("error", (function() {
            eb || Mb({
              url: bb,
              method: Hb,
              requestId: pb,
              apiType: VH
            })
          })), this.addEventListener("abort", (function() {
            eb || Mb({
              url: bb,
              method: Hb,
              requestId: pb,
              apiType: VH
            })
          })), lH.apply(this, arguments)
        }
      }({
        onRequestStart: bb,
        onRequestEnd: wb
      }), OH = !0), gH
    }
    let tH, CH = !1;
    let EH = function(bb) {
      return bb[bb.Started = 0] = "Started", bb[bb.Halted = 1] = "Halted", bb[bb.Cancelled = 2] = "Cancelled", bb[bb.Ended = 3] = "Ended", bb
    }({});
    var FH = class {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = bb, this.logDebug = wb, this.initialActivityTimeout = Mb, this.http = UH(), this.dom = HH(), this.perf = (IH || (IH = new mM), CH || (tH = de.subscribe((bb => {
          "resource" === bb.type && IH.notify({
            type: "resource-entry"
          })
        })), CH = !0), IH), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new mM).merge(this.http, this.dom, this.perf).takeWhile((() => [EH.Started, EH.Halted].includes(this.userAction.getState()))).filter((bb => !!(this.userAction.getState() !== EH.Halted || wH(bb) && this.runningRequests.has(bb.request.requestId)))).subscribe((bb => {
          (function(bb) {
            return bb.type === BM
          })(bb) && this.runningRequests.set(bb.request.requestId, bb.request), wH(bb) && this.runningRequests.delete(bb.request.requestId), wH(bb) ? this.userAction.getState() === EH.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((bb => [EH.Ended, EH.Cancelled].includes(bb))).first().subscribe((() => this.cleanup())), this.startupTid = bH(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === EH.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === EH.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = bH(this.haltTid, (() => {
          this.userAction.getState() === EH.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var bb, wb;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (bb = this.allMonitorsSub) || void 0 === bb || bb.unsubscribe(), null === (wb = this.stateSub) || void 0 === wb || wb.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(bb) {
        void 0 !== bb && window.clearTimeout(bb)
      }
    };

    function BH(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iw;
      var Mb;
      const {
        api: eb,
        config: Hb,
        internalLogger: pb
      } = bb, Vb = ke(null === (Mb = Hb.userActionsInstrumentation) || void 0 === Mb ? void 0 : Mb.initialActivityTimeout, 100, wb);
      return {
        processUserEvent: function(bb) {
          var wb, Mb;
          const pb = null !== (wb = null === (Mb = Hb.userActionsInstrumentation) || void 0 === Mb ? void 0 : Mb.dataAttributeName) && void 0 !== wb ? wb : ne,
            Vb = bb.target;
          if (!(Vb instanceof Element)) return;
          const gb = function(bb, wb) {
              let Mb = bb;
              for (; Mb;) {
                if (Mb.hasAttribute(wb)) return Mb;
                Mb = Mb.parentElement
              }
              return null
            }(Vb, Te(pb)),
            lb = function(bb, wb) {
              if (!bb) return;
              const Mb = function(bb) {
                  return Te(bb).slice(5).replace(/-(.)/g, ((bb, wb) => wb.toUpperCase()))
                }(wb),
                eb = bb.dataset;
              for (const Hb in eb)
                if (Hb === Mb) return eb[Hb]
            }(gb, pb);
          if (!gb || !lb) return;
          const Lb = function(bb, wb) {
            const Mb = bb.getAttribute(function(bb) {
              const wb = Te(bb);
              return wb.endsWith("-name") ? `${wb.slice(0,-5)}-timeout` : `${wb}-timeout`
            }(wb));
            return null === Mb ? void 0 : Number(Mb)
          }(gb, pb);
          eb.startUserAction(lb, {}, {
            triggerName: bb.type,
            initialActivityTimeout: Lb
          })
        },
        processUserActionStarted: function(bb, Mb) {
          const eb = bb,
            Hb = ke(Mb, Vb, wb);
          new FH(eb, pb.debug, Hb).attach()
        }
      }
    }
    const sH = "user_action_start",
      mH = {
        Normal: "normal",
        Critical: "critical"
      };
    var hH = class {
        constructor() {
          this.buffer = []
        }
        addItem(bb) {
          this.buffer.push(bb)
        }
        flushBuffer(bb) {
          if (Db(bb))
            for (const wb of this.buffer) bb(wb);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      zH = class extends mM {
        constructor(bb) {
          let {
            name: wb,
            parentId: Mb,
            trigger: eb,
            transports: Hb,
            attributes: pb,
            trackUserActionsExcludeItem: Vb,
            importance: gb = mH.Normal,
            pushEvent: lb
          } = bb;
          super(), this.name = wb, this.attributes = pb, this.id = Bw(), this.trigger = eb, this.parentId = null !== Mb && void 0 !== Mb ? Mb : this.id, this.trackUserActionsExcludeItem = Vb, this.importance = gb, this._pushEvent = lb, this._itemBuffer = new hH, this._transports = Hb, this._state = 0, this._start()
        }
        addItem(bb) {
          return 0 === this._state && (this._itemBuffer.addItem(bb), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Uw(), this._startTimeMono = tw())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((bb => {
            this._transports.execute(bb)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const bb = Uw(),
            wb = tw() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((bb => {
            if (function(bb, wb) {
                return (null === wb || void 0 === wb ? void 0 : wb(bb)) || "measurement" === bb.type && "web-vitals" === bb.payload.type
              }(bb, this.trackUserActionsExcludeItem)) return void this._transports.execute(bb);
            const wb = kw(kw({}, bb), {}, {
              payload: kw(kw({}, bb.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(wb)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", kw({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: bb.toString(),
            userActionDuration: wb.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Sw(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: bb => (bb.action = {
              id: this.id,
              name: this.name
            }, bb)
          })
        }
        getState() {
          return this._state
        }
      };
    const XH = new mM;

    function xH(bb, wb) {
      return !!bb && (0 === (null === bb || void 0 === bb ? void 0 : bb.getState()) && (bb.addItem(wb), !0))
    }
    var jH = class extends MM {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = eM
        }
        initialize() {
          const {
            processUserEvent: bb,
            processUserActionStarted: wb
          } = BH(Eb, (bb => this.logWarn(bb)));
          this._processUserEvent = bb, this._processKeydown = wb => {
            [" ", "Enter"].includes(wb.key) && bb(wb)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = XH.subscribe((bb => {
            let {
              type: Mb,
              userAction: eb,
              initialActivityTimeout: Hb
            } = bb;
            "user_action_start" === Mb && wb(eb, Hb)
          }))
        }
        destroy() {
          var bb;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (bb = this._userActionSub) || void 0 === bb || bb.unsubscribe()
        }
      },
      KH = class extends MM {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = eM, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(bb) {
          const wb = {
            blockedURI: bb.blockedURI,
            columnNumber: bb.columnNumber,
            disposition: bb.disposition,
            documentURI: bb.documentURI,
            effectiveDirective: bb.effectiveDirective,
            lineNumber: bb.lineNumber,
            originalPolicy: bb.originalPolicy,
            referrer: bb.referrer,
            sample: bb.sample,
            sourceFile: bb.sourceFile,
            statusCode: bb.statusCode,
            violatedDirective: bb.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Sw(wb))
        }
      };
    var rH = class extends mM {
      constructor(bb, wb) {
        var Mb, eb, Hb, pb;
        super(), this._tracking = !1, this.eventsObservable = bb, this._options = {
          inactivityMs: null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.inactivityMs) && void 0 !== Mb ? Mb : 100,
          drainTimeoutMs: null !== (eb = null === wb || void 0 === wb ? void 0 : wb.drainTimeoutMs) && void 0 !== eb ? eb : 1e4,
          isOperationStart: null !== (Hb = null === wb || void 0 === wb ? void 0 : wb.isOperationStart) && void 0 !== Hb ? Hb : () => {},
          isOperationEnd: null !== (pb = null === wb || void 0 === wb ? void 0 : wb.isOperationEnd) && void 0 !== pb ? pb : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((bb => {
          var wb;
          this._lastEventTime = tw(), null === (wb = this._currentEvents) || void 0 === wb || wb.push(bb);
          const Mb = this._options.isOperationStart(bb);
          var eb;
          Mb && (null === (eb = this._activeOperations) || void 0 === eb || eb.set(Mb, !0));
          const Hb = this._options.isOperationEnd(bb);
          var pb;
          Hb && (null === (pb = this._activeOperations) || void 0 === pb || pb.delete(Hb));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = tw(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let bb;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), bb = this.hasActiveOperations() ? tw() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: bb
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = RH(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = RH(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(bb) {
        bb && clearTimeout(bb)
      }
    };

    function RH(bb, wb, Mb) {
      return bb && clearTimeout(bb), bb = setTimeout((() => {
        wb()
      }), Mb)
    }
    let DH;
    const cH = new Set,
      YH = new Map;
    let ZH, fH, AH, WH, JH, SH, NH, vH, QH = !1;
    var GH = class extends MM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = eM
      }
      initialize() {
        const bb = UH(),
          wb = HH(),
          Mb = function() {
            function bb(bb, wb) {
              const Mb = null !== wb && void 0 !== wb ? wb : location.href;
              Mb !== fH && (ZH.notify({
                type: "url-change",
                from: fH,
                to: Mb,
                trigger: bb
              }), fH = Mb)
            }
            if (ZH || (ZH = new mM, fH = location.href), !QH)
              if ("navigation" in window && "NavigateEvent" in window) {
                NH = wb => {
                  try {
                    const Mb = null === wb || void 0 === wb ? void 0 : wb.destination;
                    (null === Mb || void 0 === Mb ? void 0 : Mb.sameDocument) && "string" === typeof Mb.url && bb("navigate", Mb.url)
                  } catch (Mb) {}
                }, window.navigation.addEventListener("navigate", NH);
                const wb = window.NavigateEvent;
                wb && wb.prototype && "function" === typeof wb.prototype.intercept && (vH || (vH = wb.prototype.intercept), wb.prototype.intercept = function(wb) {
                  try {
                    const wb = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      Mb = null === this || void 0 === this ? void 0 : this.destination;
                    wb && Mb && !1 === Mb.sameDocument && "string" === typeof Mb.url && bb("navigate-intercept", Mb.url)
                  } catch (Mb) {}
                  return vH.call(this, wb)
                }), QH = !0
              } else AH || (AH = window.history.pushState), window.history.pushState = function() {
                for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
                const Hb = AH.apply(window.history, Mb);
                return bb("pushState"), Hb
              }, WH || (WH = window.history.replaceState), window.history.replaceState = function() {
                for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
                const Hb = WH.apply(window.history, Mb);
                return bb("replaceState"), Hb
              }, JH = () => bb("popstate"), SH = () => bb("hashchange"), window.addEventListener("popstate", JH), window.addEventListener("hashchange", SH), QH = !0;
            return ZH
          }(),
          eb = (Hb = ["pointerdown", "keydown"], DH || (DH = new mM), Hb.forEach((bb => {
            if (!cH.has(bb)) {
              const wb = () => {
                DH.notify({
                  type: "interaction",
                  name: bb
                })
              };
              window.addEventListener(bb, wb), cH.add(bb), YH.set(bb, wb)
            }
          })), DH);
        var Hb;
        const pb = new rH((new mM).merge(bb, wb, Mb), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: bb => function(bb) {
            return bb.type === BM
          }(bb) ? bb.request.requestId : void 0,
          isOperationEnd: bb => function(bb) {
            return bb.type === sM
          }(bb) ? bb.request.requestId : void 0
        });
        pb.filter((bb => "tracking-ended" === bb.message)).subscribe((bb => {
          var wb, Mb;
          if ((null === (wb = bb.events) || void 0 === wb ? void 0 : wb.some((bb => "url-change" === bb.type))) && (null === (Mb = bb.events) || void 0 === Mb ? void 0 : Mb.some((bb => "dom-mutation" === bb.type)))) {
            var eb;
            const wb = null === (eb = bb.events) || void 0 === eb ? void 0 : eb.find((bb => "url-change" === bb.type));
            Eb.api.pushEvent("faro.navigation", {
              fromUrl: null === wb || void 0 === wb ? void 0 : wb.from,
              toUrl: null === wb || void 0 === wb ? void 0 : wb.to,
              sameDocument: String(!0),
              duration: bb.duration
            })
          }
        })), eb.subscribe((() => {
          pb.startTracking()
        }))
      }
    };

    function qH() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const wb = [new jH, new WM, new Ae, new HM, new SM, new GH];
      return !1 !== bb.enablePerformanceInstrumentation && wb.unshift(new Pe), !1 !== bb.enableContentSecurityPolicyInstrumentation && wb.push(new KH), !1 !== bb.captureConsole && wb.push(new fM), wb
    }
    var aH = Mb(7884);
    let iH, uH;

    function dH() {
      const bb = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return iH === bb && uH || (uH = new aH.UAParser(bb).getResult(), iH = bb), uH
    }
    const PH = () => {
        const {
          browser: bb,
          os: wb,
          ua: Mb
        } = dH(), {
          name: eb,
          version: Hb
        } = bb, {
          name: pb,
          version: Vb
        } = wb, gb = navigator.language, lb = Mb.includes("Mobi"), Lb = function() {
          if (!eb || !Hb) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== eb && void 0 !== eb ? eb : JM,
            version: null !== Hb && void 0 !== Hb ? Hb : JM,
            os: `${null!==pb&&void 0!==pb?pb:JM} ${null!==Vb&&void 0!==Vb?Vb:JM}`,
            userAgent: null !== Mb && void 0 !== Mb ? Mb : JM,
            language: null !== gb && void 0 !== gb ? gb : JM,
            mobile: lb,
            brands: null !== Lb && void 0 !== Lb ? Lb : JM,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      nH = () => {
        const {
          name: bb,
          version: wb
        } = dH().os;
        if (!bb && !wb) return {};
        const Mb = {};
        return bb && (Mb.name = bb), wb && (Mb.version = wb), {
          os: Mb
        }
      };

    function yH(bb) {
      var wb, Mb, eb;
      return {
        id: null !== (wb = null === (Mb = Eb.config) || void 0 === Mb || null === (Mb = Mb.sessionTracking) || void 0 === Mb || null === (eb = Mb.generateSessionId) || void 0 === eb ? void 0 : eb.call(Mb)) && void 0 !== wb ? wb : Bw(),
        attributes: bb
      }
    }
    const oH = () => ({
      sdk: {
        name: "faro-web",
        version: eM
      }
    });
    var TH = class extends wM {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let kH = function(bb) {
      return bb.EXCEPTION = "exception", bb.LOG = "log", bb.MEASUREMENT = "measurement", bb.TRACE = "trace", bb.EVENT = "event", bb
    }({});
    const bp = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function wp(bb, wb) {
      var Mb, eb;
      if (void 0 === wb) return bb;
      if (void 0 === bb) return {
        resourceSpans: wb
      };
      const Hb = null === (Mb = bb.resourceSpans) || void 0 === Mb ? void 0 : Mb[0];
      if (void 0 === Hb) return bb;
      const pb = (null === Hb || void 0 === Hb ? void 0 : Hb.scopeSpans) || [],
        Vb = (null === wb || void 0 === wb || null === (eb = wb[0]) || void 0 === eb ? void 0 : eb.scopeSpans) || [];
      return kw(kw({}, bb), {}, {
        resourceSpans: [kw(kw({}, Hb), {}, {
          scopeSpans: [...pb, ...Vb]
        })]
      })
    }

    function Mp(bb) {
      let wb = {
        meta: {}
      };
      return void 0 !== bb[0] && (wb.meta = bb[0].meta), bb.forEach((bb => {
        switch (bb.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const Mb = bp[bb.type],
              eb = wb[Mb];
            wb = kw(kw({}, wb), {}, {
              [Mb]: void 0 === eb ? [bb.payload] : [...eb, bb.payload]
            });
            break
          }
          case "trace":
            wb = kw(kw({}, wb), {}, {
              traces: wp(wb.traces, bb.payload.resourceSpans)
            })
        }
      })), wb
    }
    var ep = class extends TH {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = bb, this.name = "@grafana/faro-web-sdk:transport-console", this.version = eM
      }
      send(bb) {
        var wb;
        return this.unpatchedConsole[null !== (wb = this.options.level) && void 0 !== wb ? wb : hM.DEBUG]("New event", Mp([bb]))
      }
    };
    const Hp = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      pp = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Vp = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      gp = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      lp = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      Lp = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Ip(bb) {
      let {
        weekday: wb,
        day: Mb,
        month: eb,
        year: Hb,
        hour: pb,
        minute: Vb,
        second: gb
      } = bb;
      if (Hb < 1900 || Mb < 1 || pb > 23 || Vb > 59 || gb > 60) return;
      const lb = 60 === gb,
        Lb = new Date(0);
      return Lb.setUTCFullYear(Hb, eb, Mb), Lb.setUTCHours(pb, Vb, lb ? 59 : gb, 0), Lb.getUTCDay() === wb && Lb.getUTCDate() === Mb && Lb.getUTCMonth() === eb && Lb.getUTCFullYear() === Hb && Lb.getUTCHours() === pb && Lb.getUTCMinutes() === Vb && Lb.getUTCSeconds() === (lb ? 59 : gb) ? Lb.getTime() + (lb ? 1e3 : 0) : void 0
    }
    var Op = class {
      constructor(bb) {
        this.options = bb, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var bb = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const wb = this.sequence++;
        let Mb = !1;
        return {
          deliver: function() {
            var Mb = ue((function*(Mb) {
              const eb = bb.options.getNow();
              let Hb, pb = 0;
              for (;;) {
                var Vb, gb, lb;
                const Lb = bb.options.retry.maxAttempts - pb,
                  Ib = yield bb.runAttempt((() => Mb(Lb, bb.unloading)), pb > 0);
                if (pb += Ib.attemptsMade, "success" === Ib.kind) return {
                  kind: "success",
                  attempts: pb,
                  elapsedTimeMs: bb.options.getNow() - eb
                };
                if (Hb = Ib.failure, "terminal" === Ib.kind || bb.unloading) return {
                  kind: "terminal",
                  attempts: pb,
                  elapsedTimeMs: bb.options.getNow() - eb,
                  failure: Hb
                };
                if (pb >= bb.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: pb,
                  elapsedTimeMs: bb.options.getNow() - eb,
                  failure: Hb,
                  reason: "retries-exhausted"
                };
                if (null != Ib.retryAfterMs && Ib.retryAfterMs > bb.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: pb,
                  elapsedTimeMs: bb.options.getNow() - eb,
                  failure: Hb,
                  reason: "retry-after-too-long"
                };
                const Ob = Math.min(null !== (Vb = Ib.retryAfterMs) && void 0 !== Vb ? Vb : bb.options.retry.initialBackoffMs * Math.pow(bb.options.retry.backoffMultiplier, pb - 1), bb.options.retry.maxBackoffMs);
                if (null === (gb = (lb = bb.options).onRetry) || void 0 === gb || gb.call(lb, Ob, pb + 1), yield bb.waitForTurn(wb, Ob)) {
                  const wb = bb.options.retry.maxAttempts - pb,
                    Hb = yield bb.runAttempt((() => Mb(wb, !0)));
                  return pb += Hb.attemptsMade, {
                    kind: "success" === Hb.kind ? "success" : "terminal",
                    attempts: pb,
                    elapsedTimeMs: bb.options.getNow() - eb,
                    failure: "success" === Hb.kind ? void 0 : Hb.failure
                  }
                }
              }
            }));
            return function(bb) {
              return Mb.apply(this, arguments)
            }
          }(),
          release: () => {
            Mb || (Mb = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const bb = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const wb of bb) wb.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((Mb, eb) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const wb = () => {
                this.inProgress--, this.runNextAttempt()
              };
              bb().then((bb => {
                wb(), Mb(bb)
              }), (bb => {
                wb(), eb(bb)
              }))
            },
            isRedelivery: wb
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const bb = this.options.getNow(),
            wb = this.attemptQueue.findIndex((wb => {
              let {
                isRedelivery: Mb
              } = wb;
              return this.unloading || !Mb || bb >= this.nextSendAt
            }));
          if (wb < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - bb)));
          const [Mb] = this.attemptQueue.splice(wb, 1);
          Mb.isRedelivery && !this.unloading && (this.nextSendAt = bb + 1), Mb.run()
        }
      }
      waitForTurn(bb, wb) {
        const Mb = Math.min(wb * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((wb => {
          this.waiting.push({
            sequence: bb,
            readyAt: this.options.getNow() + Mb,
            resolve: wb
          }), this.waiting.sort(((bb, wb) => bb.readyAt === wb.readyAt ? bb.sequence - wb.sequence : bb.readyAt - wb.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const bb = this.waiting[0],
          wb = bb.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const wb = this.waiting.indexOf(bb);
          wb >= 0 && this.waiting.splice(wb, 1), bb.resolve(!1), this.scheduleNext()
        }), Math.max(0, wb - this.options.getNow()))
      }
    };

    function Up(bb, wb) {
      if (null == bb) return {};
      var Mb, eb, Hb = function(bb, wb) {
        if (null == bb) return {};
        var Mb = {};
        for (var eb in bb)
          if ({}.hasOwnProperty.call(bb, eb)) {
            if (wb.includes(eb)) continue;
            Mb[eb] = bb[eb]
          } return Mb
      }(bb, wb);
      if (Object.getOwnPropertySymbols) {
        var pb = Object.getOwnPropertySymbols(bb);
        for (eb = 0; eb < pb.length; eb++) Mb = pb[eb], wb.includes(Mb) || {}.propertyIsEnumerable.call(bb, Mb) && (Hb[Mb] = bb[Mb])
      }
      return Hb
    }

    function tp(bb) {
      const {
        size: wb,
        concurrency: Mb
      } = bb, eb = [];
      let Hb = 0;
      const pb = () => {
        if (Hb < Mb && eb.length) {
          const {
            producer: bb,
            resolve: wb,
            reject: Mb
          } = eb.shift();
          Hb++, bb().then((bb => {
            Hb--, pb(), wb(bb)
          }), (bb => {
            Hb--, pb(), Mb(bb)
          }))
        }
      };
      return {
        add: bb => {
          if (eb.length + Hb >= wb) throw new Error("Task buffer full");
          return new Promise(((wb, Mb) => {
            eb.push({
              producer: bb,
              resolve: wb,
              reject: Mb
            }), pb()
          }))
        }
      }
    }
    const Cp = ["headers"],
      Ep = ["keepalive", "signal"],
      Fp = new Set([408, 425, 429, 500, 502, 503, 504]),
      Bp = new Set([429, 503]);
    let sp = 0,
      mp = 0;
    var hp = class extends Error {};
    var zp = class extends TH {
      constructor(bb) {
        var wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb;
        super(), this.options = bb, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = eM, this.pendingCustomSends = 0, this.getNow = null !== (wb = bb.getNow) && void 0 !== wb ? wb : Date.now, this.requestTimeoutMs = null !== (Mb = bb.requestTimeoutMs) && void 0 !== Mb ? Mb : 1e4, this.compressionEnabled = null !== (eb = bb.requestCompression) && void 0 !== eb && eb && "undefined" !== typeof CompressionStream, bb.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Op({
          bufferSize: null !== (Hb = bb.bufferSize) && void 0 !== Hb ? Hb : 30,
          concurrency: null !== (pb = bb.concurrency) && void 0 !== pb ? pb : 5,
          retry: {
            maxAttempts: null !== (Vb = null === (gb = bb.retry) || void 0 === gb ? void 0 : gb.maxAttempts) && void 0 !== Vb ? Vb : 3,
            initialBackoffMs: null !== (lb = null !== (Lb = null === (Ib = bb.retry) || void 0 === Ib ? void 0 : Ib.initialBackoffMs) && void 0 !== Lb ? Lb : bb.defaultRateLimitBackoffMs) && void 0 !== lb ? lb : 1e3,
            maxBackoffMs: null !== (Ob = null === (Ub = bb.retry) || void 0 === Ub ? void 0 : Ub.maxBackoffMs) && void 0 !== Ob ? Ob : 3e4,
            backoffMultiplier: null !== (tb = null === (Cb = bb.retry) || void 0 === Cb ? void 0 : Cb.backoffMultiplier) && void 0 !== tb ? tb : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Eb = bb.getRandom) && void 0 !== Eb ? Eb : Math.random,
          onRetry: (bb, wb) => {
            this.logDebug(`Retrying failed request after ${bb}ms. Attempt ${wb}.`)
          }
        }), this.customPromiseBuffer = tp({
          size: null !== (Fb = bb.bufferSize) && void 0 !== Fb ? Fb : 30,
          concurrency: null !== (Bb = bb.concurrency) && void 0 !== Bb ? Bb : 5
        }), this.defaultPromiseBuffer = {
          add: bb => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(bb);
            const wb = this.deliveryQueue.reserve();
            if (!wb) throw new Error("Task buffer full");
            return this.runBufferedTask(wb, bb)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (bb => {
          bb.persisted && this.deliveryQueue.resume()
        })))
      }
      send(bb) {
        var wb = this;
        return ue((function*() {
          const Mb = wb.promiseBuffer;
          if (Mb !== wb.defaultPromiseBuffer || Mb.add !== wb.defaultBufferAdd) {
            wb.pendingCustomSends++;
            try {
              yield Mb.add((() => wb.deliver(bb)))
            } catch (eb) {
              wb.logError("Permanent delivery failure", {
                error: eb,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              wb.pendingCustomSends--
            }
          } else yield wb.deliver(bb)
        }))()
      }
      runBufferedTask(bb, wb) {
        return ue((function*() {
          let Mb;
          try {
            return yield bb.deliver(ue((function*() {
              return Mb = yield wb(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), Mb
          } finally {
            bb.release()
          }
        }))()
      }
      deliver(bb) {
        var wb = this;
        return ue((function*() {
          const Mb = wb.deliveryQueue.reserve();
          if (Mb) try {
            const eb = yield wb.prepareRequest(bb), Hb = yield Mb.deliver(((bb, Mb) => wb.performAttempt(eb, bb, Mb)));
            "terminal" === Hb.kind && wb.logError("retries-exhausted" === Hb.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Iw(Iw({}, Hb.failure), {}, {
              reason: Hb.reason,
              attempts: Hb.attempts,
              elapsedTimeMs: Hb.elapsedTimeMs
            }))
          } catch (eb) {
            wb.logError("Permanent delivery failure", {
              error: eb,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            Mb.release()
          } else wb.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var bb;
        return [this.options.url].concat(null !== (bb = this.config.ignoreUrls) && void 0 !== bb ? bb : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(bb) {
        var wb = this;
        return ue((function*() {
          var Mb, eb;
          const Hb = Mp(bb),
            pb = null === (Mb = Hb.meta.session) || void 0 === Mb ? void 0 : Mb.id,
            Vb = JSON.stringify(Hb),
            gb = null !== (eb = wb.options.requestOptions) && void 0 !== eb ? eb : {},
            {
              headers: lb = {}
            } = gb,
            Lb = Up(gb, Cp),
            {
              keepalive: Ib,
              signal: Ob
            } = Lb,
            Ub = Up(Lb, Ep),
            tb = {};
          for (const [bb, wb] of Object.entries(lb)) tb[bb] = "function" === typeof wb ? yield wb(): wb;
          let Cb = Vb,
            Eb = function(bb) {
              return "undefined" === typeof TextEncoder ? bb.length : (new TextEncoder).encode(bb).byteLength
            }(Vb);
          const Fb = {};
          return wb.compressionEnabled && (Cb = yield wb.compress(Vb), Eb = Cb.size, Fb["Content-Encoding"] = "gzip"), {
            bodySize: Eb,
            sessionId: pb,
            requestInit: Iw({
              method: "POST",
              headers: Iw(Iw(Iw(Iw(Iw({
                "Content-Type": "application/json"
              }, Fb), tb), wb.options.apiKey ? {
                "x-api-key": wb.options.apiKey
              } : {}), pb ? {
                "x-faro-session-id": pb
              } : {}), {}, {
                "Idempotency-Key": Bw(20)
              }),
              body: Cb
            }, Ub)
          }
        }))()
      }
      performAttempt(bb, wb, Mb) {
        var eb = this;
        return ue((function*() {
          var Hb;
          const pb = null === (Hb = eb.options.requestOptions) || void 0 === Hb ? void 0 : Hb.signal;
          if (null === pb || void 0 === pb ? void 0 : pb.aborted) return {
            kind: "terminal",
            failure: {
              error: pb.reason
            },
            attemptsMade: 0
          };
          let Vb = 0;
          try {
            var gb;
            const Hb = yield eb.fetchWithKeepaliveFallback(bb.requestInit, bb.bodySize, !!Mb || (null === (gb = eb.options.requestOptions) || void 0 === gb ? void 0 : gb.keepalive), wb, (() => Vb++));
            if (eb.handleResponse(Hb, bb.sessionId), Hb.status >= 200 && Hb.status < 300) return {
              kind: "success",
              attemptsMade: Vb
            };
            const pb = {
              status: Hb.status
            };
            return !Fp.has(Hb.status) || Mb ? {
              kind: "terminal",
              failure: pb,
              attemptsMade: Vb
            } : {
              kind: "retry",
              failure: pb,
              attemptsMade: Vb,
              retryAfterMs: Bp.has(Hb.status) ? eb.getRetryAfterDelayMs(Hb) : void 0
            }
          } catch (lb) {
            const bb = {
              error: lb
            };
            return (null === pb || void 0 === pb ? void 0 : pb.aborted) || !eb.isFetchNetworkError(lb) || Mb ? {
              kind: "terminal",
              failure: bb,
              attemptsMade: Vb
            } : {
              kind: "retry",
              failure: bb,
              attemptsMade: Vb
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(bb, wb, Mb, eb, Hb) {
        var pb = this;
        return ue((function*() {
          const Vb = pb.getNow(),
            gb = pb.reserveKeepalive(wb, Mb);
          try {
            return yield pb.fetchWithTimeout(Iw(Iw({}, bb), {}, {
              keepalive: gb.keepalive
            }), pb.requestTimeoutMs, Hb)
          } catch (Lb) {
            var lb;
            if (gb.keepalive && eb > 1 && pb.isFetchNetworkError(Lb) && !(Lb instanceof hp) && !(null === (lb = pb.options.requestOptions) || void 0 === lb || null === (lb = lb.signal) || void 0 === lb ? void 0 : lb.aborted)) {
              pb.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const wb = pb.requestTimeoutMs - (pb.getNow() - Vb);
              return pb.fetchWithTimeout(Iw(Iw({}, bb), {}, {
                keepalive: !1
              }), wb, Hb)
            }
            throw Lb
          } finally {
            gb.release()
          }
        }))()
      }
      fetchWithTimeout(bb, wb, Mb) {
        var eb = this;
        return ue((function*() {
          var Hb;
          const pb = null === (Hb = eb.options.requestOptions) || void 0 === Hb ? void 0 : Hb.signal;
          if (eb.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return Mb(), fetch(eb.options.url, Iw(Iw({}, bb), {}, {
            signal: pb
          }));
          if (wb <= 0) throw new hp("Request timed out");
          const Vb = new AbortController,
            gb = () => Vb.abort(null === pb || void 0 === pb ? void 0 : pb.reason);
          null === pb || void 0 === pb || pb.addEventListener("abort", gb, {
            once: !0
          });
          let lb = !1;
          const Lb = setTimeout((() => {
            lb = !0, Vb.abort()
          }), wb);
          try {
            return Mb(), yield fetch(eb.options.url, Iw(Iw({}, bb), {}, {
              signal: Vb.signal
            }))
          } catch (Ib) {
            if (lb && !(null === pb || void 0 === pb ? void 0 : pb.aborted)) throw new hp("Request timed out");
            throw Ib
          } finally {
            clearTimeout(Lb), null === pb || void 0 === pb || pb.removeEventListener("abort", gb)
          }
        }))()
      }
      getRetryAfterDelayMs(bb) {
        const wb = bb.headers.get("Retry-After");
        if (!wb) return;
        if (/^\d+$/.test(wb)) {
          const bb = 1e3 * Number(wb);
          return Number.isFinite(bb) ? bb : Number.POSITIVE_INFINITY
        }
        const Mb = this.getNow(),
          eb = function(bb, wb) {
            const Mb = Hp.exec(bb);
            if (Mb) {
              const [, bb, wb, eb, Hb, pb, Vb, gb] = Mb;
              return Ip({
                weekday: gp.indexOf(bb),
                day: Number(wb),
                month: Lp.indexOf(eb),
                year: Number(Hb),
                hour: Number(pb),
                minute: Number(Vb),
                second: Number(gb)
              })
            }
            const eb = pp.exec(bb);
            if (eb) {
              const [, bb, Mb, Vb, gb, lb, Lb, Ib] = eb, Ob = new Date(wb);
              if (Number.isNaN(Ob.getTime())) return;
              const Ub = Ob.getUTCFullYear();
              let tb = 100 * Math.floor(Ub / 100) + Number(gb);
              tb < Ub && (tb += 100);
              const Cb = Lp.indexOf(Vb),
                Eb = {
                  month: Cb,
                  day: Number(Mb),
                  hour: Number(lb),
                  minute: Number(Lb),
                  second: Number(Ib),
                  millisecond: 0
                },
                Fb = {
                  month: Ob.getUTCMonth(),
                  day: Ob.getUTCDate(),
                  hour: Ob.getUTCHours(),
                  minute: Ob.getUTCMinutes(),
                  second: Ob.getUTCSeconds(),
                  millisecond: Ob.getUTCMilliseconds()
                };
              return (tb > Ub + 50 || tb === Ub + 50 && (pb = Fb, ((Hb = Eb).month - pb.month || Hb.day - pb.day || Hb.hour - pb.hour || Hb.minute - pb.minute || Hb.second - pb.second || Hb.millisecond - pb.millisecond) > 0)) && (tb -= 100), Ip({
                weekday: lp.indexOf(bb),
                day: Number(Mb),
                month: Cb,
                year: tb,
                hour: Number(lb),
                minute: Number(Lb),
                second: Number(Ib)
              })
            }
            var Hb, pb;
            const Vb = Vp.exec(bb);
            if (!Vb) return;
            const [, gb, lb, Lb, Ib, Ob, Ub, tb, Cb] = Vb;
            return Ip({
              weekday: gp.indexOf(gb),
              day: Number(null !== Lb && void 0 !== Lb ? Lb : Ib),
              month: Lp.indexOf(lb),
              year: Number(Cb),
              hour: Number(Ob),
              minute: Number(Ub),
              second: Number(tb)
            })
          }(wb, Mb);
        return null == eb ? void 0 : Math.max(0, eb - Mb)
      }
      reserveKeepalive(bb, wb) {
        if (!1 === wb || bb > 6e4 || sp + bb > 6e4 || mp >= 9) return {
          keepalive: !1,
          release: iw
        };
        sp += bb, mp++;
        let Mb = !1;
        return {
          keepalive: !0,
          release: () => {
            Mb || (Mb = !0, sp -= bb, mp--)
          }
        }
      }
      handleResponse(bb, wb) {
        202 === bb.status && "invalid" === bb.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), wb), bb.text().catch(iw)
      }
      isFetchNetworkError(bb) {
        return bb instanceof TypeError || bb instanceof hp || bb instanceof DOMException && "AbortError" === bb.name
      }
      compress(bb) {
        return ue((function*() {
          const wb = [],
            Mb = new ReadableStream({
              start(wb) {
                wb.enqueue((new TextEncoder).encode(bb)), wb.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: bb,
              value: eb
            } = yield Mb.read();
            if (bb) return new Blob(wb);
            wb.push(eb)
          }
        }))()
      }
      extendFaroSession(bb, wb, Mb) {
        var eb, Hb;
        const pb = bb.sessionTracking;
        if (!(null === pb || void 0 === pb ? void 0 : pb.enabled)) return void wb("Session expired.");
        const {
          fetchUserSession: Vb,
          storeUserSession: gb
        } = aw(pb), lb = null === (eb = this.metas.value.session) || void 0 === eb ? void 0 : eb.id, Lb = null === (Hb = Vb()) || void 0 === Hb ? void 0 : Hb.sessionId;
        Mb && Mb === lb && Mb === Lb ? (Yw({
          fetchUserSession: Vb,
          storeUserSession: gb
        })({
          forceSessionExtend: !0
        }), wb("Session expired; created new session.")) : wb("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const Xp = () => {
      const bb = window.k6;
      return {
        k6: Iw({
          isK6Browser: !0
        }, (null === bb || void 0 === bb ? void 0 : bb.testRunId) && {
          testRunId: null === bb || void 0 === bb ? void 0 : bb.testRunId
        })
      }
    };
    let xp, jp;

    function Kp() {
      let {
        generatePageId: bb,
        initialPageMeta: wb
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const Mb = location.href;
        return Db(bb) && xp !== Mb && (xp = Mb, jp = bb(location)), {
          page: Iw(Iw({
            url: Mb
          }, jp ? {
            id: jp
          } : {}), wb)
        }
      }
    }

    function rp() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bM,
        wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Mb = dw;
      return wb > 0 && (Mb.error = wb >= 1 ? function() {
        for (var wb = arguments.length, eb = new Array(wb), Hb = 0; Hb < wb; Hb++) eb[Hb] = arguments[Hb];
        bb.error(`${Mb.prefix}\n`, ...eb)
      } : iw, Mb.warn = wb >= 2 ? function() {
        for (var wb = arguments.length, eb = new Array(wb), Hb = 0; Hb < wb; Hb++) eb[Hb] = arguments[Hb];
        bb.warn(`${Mb.prefix}\n`, ...eb)
      } : iw, Mb.info = wb >= 3 ? function() {
        for (var wb = arguments.length, eb = new Array(wb), Hb = 0; Hb < wb; Hb++) eb[Hb] = arguments[Hb];
        bb.info(`${Mb.prefix}\n`, ...eb)
      } : iw, Mb.debug = wb >= 4 ? function() {
        for (var wb = arguments.length, eb = new Array(wb), Hb = 0; Hb < wb; Hb++) eb[Hb] = arguments[Hb];
        bb.debug(`${Mb.prefix}\n`, ...eb)
      } : iw), Mb
    }
    const Rp = "faro",
      Dp = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      cp = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Yp(bb) {
      var wb, Mb, Hb, pb, Vb, gb;
      const lb = [],
        Ib = rp(bb.unpatchedConsole, bb.internalLoggerLevel);
      bb.transports ? ((bb.url || bb.apiKey) && Ib.error('if "transports" is defined, "url" and "apiKey" should not be defined'), lb.push(...bb.transports)) : bb.url ? lb.push(new zp({
        url: bb.url,
        apiKey: bb.apiKey,
        requestCompression: bb.requestCompression
      })) : Ib.error('either "url" or "transports" must be defined');
      const {
        dedupe: Ob = !0,
        eventDomain: Ub = eb,
        globalObjectKey: tb = Rp,
        instrumentations: Cb = qH(),
        internalLoggerLevel: Eb = Pw,
        isolate: Fb = !1,
        logArgsSerializer: Bb = ZM,
        metas: sb = fp(bb),
        paused: mb = !1,
        preventGlobalExposure: hb = !1,
        unpatchedConsole: zb = bM,
        url: Xb,
        experimental: xb
      } = bb, jb = Up(bb, cp), Kb = null !== (wb = null === xb || void 0 === xb ? void 0 : xb.trackNavigation) && void 0 !== wb && wb, rb = {
        dataAttributeName: Te(null !== (Mb = null === (Hb = bb.userActionsInstrumentation) || void 0 === Hb ? void 0 : Hb.dataAttributeName) && void 0 !== Mb ? Mb : ne),
        excludeItem: null === (pb = bb.userActionsInstrumentation) || void 0 === pb ? void 0 : pb.excludeItem,
        initialActivityTimeout: ke(null === (Vb = bb.userActionsInstrumentation) || void 0 === Vb ? void 0 : Vb.initialActivityTimeout, 100, (bb => Ib.warn(bb)))
      };
      return Iw(Iw({}, jb), {}, {
        batching: Iw(Iw({}, Dp), bb.batching),
        dedupe: Ob,
        globalObjectKey: tb,
        instrumentations: Zp(Cb, bb),
        internalLoggerLevel: Eb,
        isolate: Fb,
        logArgsSerializer: Bb,
        metas: sb,
        parseStacktrace: FM,
        paused: mb,
        preventGlobalExposure: hb,
        transports: lb,
        unpatchedConsole: zb,
        eventDomain: Ub,
        ignoreUrls: [...null !== (gb = bb.ignoreUrls) && void 0 !== gb ? gb : [], ...Xb ? [Xb] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Iw(Iw(Iw({}, Lb), bb.sessionTracking), Ap({
          trackGeolocation: bb.trackGeolocation,
          sessionTracking: bb.sessionTracking
        })),
        userActionsInstrumentation: rb,
        experimental: {
          trackNavigation: Kb
        }
      })
    }

    function Zp(bb, wb) {
      let {
        experimental: Mb
      } = wb;
      var eb;
      const Hb = null !== (eb = null === Mb || void 0 === Mb ? void 0 : Mb.trackNavigation) && void 0 !== eb && eb;
      return bb.filter((bb => !("@grafana/faro-web-sdk:instrumentation-navigation" === bb.name && !Hb)))
    }

    function fp(bb) {
      var wb, Mb, eb;
      const {
        page: Hb,
        generatePageId: pb
      } = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.pageTracking) && void 0 !== wb ? wb : {}, Vb = [PH, nH, Kp({
        generatePageId: pb,
        initialPageMeta: Hb
      }), ...null !== (Mb = bb.metas) && void 0 !== Mb ? Mb : [], oH];
      return Rb(null === (eb = window) || void 0 === eb ? void 0 : eb.k6) ? [...Vb, Xp] : Vb
    }

    function Ap(bb) {
      let {
        trackGeolocation: wb,
        sessionTracking: Mb
      } = bb;
      var eb;
      const Hb = {};
      return Kb(wb) && (Hb.geoLocationTrackingEnabled = wb), db(Hb) ? {} : {
        session: Iw(Iw({}, null !== (eb = null === Mb || void 0 === Mb ? void 0 : Mb.session) && void 0 !== eb ? eb : {}), {}, {
          overrides: Hb
        })
      }
    }
    const Wp = new WeakSet;

    function Jp(bb) {
      return Wp.add(bb), bb
    }

    function Sp(bb, wb) {
      if (bb.capture) return Jp(bb.capture(wb));
      const Mb = Jp(bb.value);
      return null === wb || void 0 === wb || wb(), Mb
    }

    function Np(bb) {
      const wb = `__faroBundleId_${bb}`,
        Mb = null === Ib || void 0 === Ib ? void 0 : Ib[wb];
      if ("string" === typeof Mb && "" !== Mb) return Mb;
      const eb = "undefined" !== typeof window ? window[wb] : void 0;
      return "string" === typeof eb && "" !== eb ? eb : void 0
    }

    function vp(bb) {
      var wb, Mb;
      const eb = bb.config.app.name,
        Hb = eb ? function(bb) {
          return null === Ib || void 0 === Ib ? void 0 : Ib[`__faroGitHash_${bb}`]
        }(eb) : void 0,
        pb = {
          sdk: {
            version: eM,
            name: "faro"
          },
          app: kw({
            bundleId: eb && Np(eb)
          }, void 0 !== Hb ? {
            gitHash: Hb
          } : {})
        },
        Vb = null === (wb = bb.config.sessionTracking) || void 0 === wb ? void 0 : wb.session;
      Vb && bb.api.setSession(Vb), bb.config.app && (pb.app = kw(kw({}, bb.config.app), pb.app)), bb.config.user && (pb.user = bb.config.user), bb.config.view && (pb.view = bb.config.view), bb.metas.add(pb, ...null !== (Mb = bb.config.metas) && void 0 !== Mb ? Mb : [])
    }
    var Qp = class {
      constructor(bb, wb) {
        var Mb, eb;
        this.signalBuffer = [], this.itemLimit = null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.itemLimit) && void 0 !== Mb ? Mb : 50, this.sendTimeout = null !== (eb = null === wb || void 0 === wb ? void 0 : wb.sendTimeout) && void 0 !== eb ? eb : 250, this.paused = (null === wb || void 0 === wb ? void 0 : wb.paused) || !1, this.sendFn = bb, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(bb) {
        this.paused || (this.signalBuffer.push(bb), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(bb) {
        const wb = new Map;
        return bb.forEach((bb => {
          const Mb = JSON.stringify(bb.meta);
          let eb = wb.get(Mb);
          eb = void 0 === eb ? [bb] : [...eb, bb], wb.set(Mb, eb)
        })), Array.from(wb.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const bb = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(bb).forEach(this.sendFn)
        } catch (wb) {
          throw this.signalBuffer = [...bb, ...this.signalBuffer], this.trimBufferToLimit(), wb
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Gp(bb, wb, Mb, eb) {
      var Hb;
      wb.debug("Initializing transports");
      const pb = [];
      let Vb = [];
      const gb = bb => {
        let wb = bb;
        for (const eb of Vb) {
          const bb = wb.map(eb).filter(Boolean);
          if (0 === bb.length) return [];
          wb = qp(bb, Mb)
        }
        return wb
      };
      let lb;
      (null === (Hb = Mb.batching) || void 0 === Hb ? void 0 : Hb.enabled) && (lb = new Qp((bb => {
        const Mb = gb(bb);
        if (0 !== Mb.length)
          for (const eb of pb) wb.debug(`Transporting item using ${eb.name}\n`, Mb), eb.isBatched() && eb.send(Mb)
      }), {
        sendTimeout: Mb.batching.sendTimeout,
        itemLimit: Mb.batching.itemLimit,
        paused: Mb.paused
      }));
      return {
        add: function() {
          wb.debug("Adding transports");
          for (var Hb = arguments.length, Vb = new Array(Hb), gb = 0; gb < Hb; gb++) Vb[gb] = arguments[gb];
          Vb.forEach((Hb => {
            wb.debug(`Adding "${Hb.name}" transport`), pb.some((bb => bb === Hb)) ? wb.warn(`Transport ${Hb.name} is already added`) : (Hb.unpatchedConsole = bb, Hb.internalLogger = wb, Hb.config = Mb, Hb.metas = eb, pb.push(Hb))
          }))
        },
        addBeforeSendHooks: function() {
          wb.debug("Adding beforeSendHooks\n", Vb);
          for (var bb = arguments.length, Mb = new Array(bb), eb = 0; eb < bb; eb++) Mb[eb] = arguments[eb];
          Mb.forEach((bb => {
            bb && Vb.push(bb)
          }))
        },
        getBeforeSendHooks: () => [...Vb],
        execute: bb => {
          var Hb;
          if (!Mb.paused && Gw(eb).shouldCapture()) {
            if (Ob = bb.meta, !Wp.has(Ob)) {
              var Vb, Lb, Ib;
              const wb = null === (Vb = eb.value.session) || void 0 === Vb ? void 0 : Vb.id,
                Hb = Sp(eb);
              if (Mb.paused) return;
              const pb = kw({}, bb.meta);
              (null === (Lb = pb.session) || void 0 === Lb ? void 0 : Lb.id) === wb && (null === (Ib = Hb.session) || void 0 === Ib ? void 0 : Ib.id) !== wb && (void 0 === Hb.session ? delete pb.session : pb.session = Hb.session), bb = kw(kw({}, bb), {}, {
                meta: Jp(pb)
              })
            }
            var Ob;
            (null === (Hb = Mb.batching) || void 0 === Hb ? void 0 : Hb.enabled) && (null === lb || void 0 === lb || lb.addItem(bb)), (bb => {
              var eb;
              if ((null === (eb = Mb.batching) || void 0 === eb ? void 0 : eb.enabled) && pb.every((bb => bb.isBatched()))) return;
              const [Hb] = gb([bb]);
              if (void 0 !== Hb)
                for (const gb of pb) {
                  var Vb;
                  wb.debug(`Transporting item using ${gb.name}\n`, Hb), gb.isBatched() ? (null === (Vb = Mb.batching) || void 0 === Vb ? void 0 : Vb.enabled) || gb.send([Hb]) : gb.send(Hb)
                }
            })(bb)
          }
        },
        isPaused: () => Mb.paused,
        pause: () => {
          wb.debug("Pausing transports"), null === lb || void 0 === lb || lb.pause(), Mb.paused = !0
        },
        remove: function() {
          wb.debug("Removing transports");
          for (var bb = arguments.length, Mb = new Array(bb), eb = 0; eb < bb; eb++) Mb[eb] = arguments[eb];
          Mb.forEach((bb => {
            wb.debug(`Removing "${bb.name}" transport`);
            const Mb = pb.indexOf(bb); - 1 !== Mb ? pb.splice(Mb, 1) : wb.warn(`Transport "${bb.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var bb = arguments.length, Mb = new Array(bb), eb = 0; eb < bb; eb++) Mb[eb] = arguments[eb];
          wb.debug("Removing beforeSendHooks"), Vb = Vb.filter((bb => !Mb.includes(bb)))
        },
        get transports() {
          return [...pb]
        },
        unpause: () => {
          wb.debug("Unpausing transports"), null === lb || void 0 === lb || lb.start(), Mb.paused = !1
        }
      }
    }

    function qp(bb, wb) {
      if (wb.preserveOriginalError)
        for (const Mb of bb) "exception" === Mb.type && delete Mb.payload.originalError;
      return bb
    }
    let ap = bM;

    function ip(bb) {
      var wb;
      return ap = null !== (wb = bb.unpatchedConsole) && void 0 !== wb ? wb : ap, ap
    }
    let dp, Pp = dw;

    function np(bb, wb) {
      return Pp = rp(bb, wb.internalLoggerLevel), Pp
    }

    function yp(bb) {
      let {
        internalLogger: wb,
        config: Mb,
        metas: eb,
        transports: Hb,
        tracesApi: pb,
        userActionsApi: Vb
      } = bb;
      var gb;
      wb.debug("Initializing exceptions API");
      let lb = null;
      dp = null !== (gb = Mb.parseStacktrace) && void 0 !== gb ? gb : dp;
      const Lb = bb => {
          wb.debug("Changing stacktrace parser"), dp = null !== bb && void 0 !== bb ? bb : dp
        },
        {
          ignoreErrors: Ib = [],
          preserveOriginalError: Ob
        } = Mb;
      return Lb(Mb.parseStacktrace), {
        changeStacktraceParser: Lb,
        getStacktraceParser: () => dp,
        pushError: function(bb) {
          let {
            skipDedupe: gb,
            stackFrames: Lb,
            type: Ub,
            context: tb,
            spanContext: Cb,
            timestampOverwriteMs: Eb,
            originalError: Fb,
            fingerprint: Bb,
            fatal: sb
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(bb, wb) {
              const {
                message: Mb,
                name: eb,
                stack: Hb
              } = wb;
              return pb = bb, Vb = Mb + " " + eb + " " + Hb, pb.some((bb => Xb(bb) ? Vb.includes(bb) : !!Vb.match(bb)));
              var pb, Vb
            }(Ib, null !== Fb && void 0 !== Fb ? Fb : bb)) try {
            var mb, hb;
            if (!Gw(eb).shouldCapture()) return;
            const Ib = Sw(kw(kw({}, function(bb) {
                let wb = bb.cause;
                Sb(wb) ? wb = bb.cause.toString() : null !== wb && (Rb(bb.cause) || cb(bb.cause)) ? wb = Jw(bb.cause) : null != wb && (wb = bb.cause.toString());
                return null == wb ? {} : {
                  cause: wb
                }
              }(null !== Fb && void 0 !== Fb ? Fb : bb)), null !== tb && void 0 !== tb ? tb : {})),
              Xb = kw(kw(kw(kw({
                type: Ub || bb.name || "Error",
                value: bb.message,
                timestamp: Eb ? Ew(Eb) : Cw(),
                trace: Cb ? {
                  trace_id: Cb.traceId,
                  span_id: Cb.spanId
                } : pb.getTraceContext()
              }, db(Ib) ? {} : {
                context: Ib
              }), Ob ? {
                originalError: Fb
              } : {}), Bb ? {
                fingerprint: Bb
              } : {}), void 0 !== sb ? {
                fatal: sb
              } : {});
            Lb = null !== (mb = Lb) && void 0 !== mb ? mb : bb.stack ? null === dp || void 0 === dp ? void 0 : dp(bb).frames : void 0, (null === Lb || void 0 === Lb ? void 0 : Lb.length) && (Xb.stacktrace = {
              frames: Lb
            });
            const xb = {
              type: Xb.type,
              value: Xb.value,
              stacktrace: Xb.stacktrace,
              context: Xb.context,
              fingerprint: Xb.fingerprint,
              fatal: null !== (hb = Xb.fatal) && void 0 !== hb && hb
            };
            if (!gb && Mb.dedupe && !zb(lb) && sw(xb, lb)) return void wb.debug("Skipping error push because it is the same as the last one\n", Xb);
            const jb = lb,
              Kb = Sp(eb);
            if (lb !== jb && !gb && Mb.dedupe && sw(xb, lb)) return;
            lb = xb;
            const rb = {
              meta: Kb,
              payload: Xb,
              type: "exception"
            };
            wb.debug("Pushing exception\n", rb), xH(Vb.getActiveUserAction(), rb) || Hb.execute(rb)
          } catch (xb) {
            wb.error("Error pushing event", xb)
          }
        }
      }
    }

    function op(bb, wb, Mb, eb, Hb) {
      wb.debug("Initializing API");
      let pb = null;
      const Vb = function(bb) {
          let {
            transports: wb,
            internalLogger: Mb,
            config: eb,
            pushEvent: Hb
          } = bb;
          var pb;
          const Vb = null === (pb = eb.userActionsInstrumentation) || void 0 === pb ? void 0 : pb.excludeItem;
          let gb;
          const lb = () => gb;
          return {
            startUserAction: (bb, eb, pb) => {
              if (void 0 === lb()) {
                const Mb = new zH({
                  name: bb,
                  transports: wb,
                  attributes: eb,
                  trigger: (null === pb || void 0 === pb ? void 0 : pb.triggerName) || "faroApiCall",
                  importance: (null === pb || void 0 === pb ? void 0 : pb.importance) || mH.Normal,
                  trackUserActionsExcludeItem: Vb,
                  pushEvent: Hb
                });
                return Mb.filter((bb => [3, 2].includes(bb))).first().subscribe((() => {
                  gb = void 0
                })), XH.notify({
                  type: sH,
                  userAction: Mb,
                  initialActivityTimeout: null === pb || void 0 === pb ? void 0 : pb.initialActivityTimeout
                }), gb = Mb, gb
              }
              Mb.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: lb
          }
        }({
          transports: Hb,
          config: Mb,
          internalLogger: wb,
          pushEvent: (bb, Mb, eb, Hb) => {
            pb ? pb(bb, Mb, eb, Hb) : wb.warn("pushEventImpl is not initialized. Event dropped:", {
              name: bb,
              attributes: Mb,
              domain: eb,
              options: Hb
            })
          }
        }),
        gb = function(bb, wb, Mb, eb, Hb) {
          let pb;
          return wb.debug("Initializing traces API"), {
            getOTEL: () => pb,
            getTraceContext: () => {
              const bb = null === pb || void 0 === pb ? void 0 : pb.trace.getSpanContext(pb.context.active());
              return bb ? {
                trace_id: bb.traceId,
                span_id: bb.spanId
              } : void 0
            },
            initOTEL: (bb, Mb) => {
              wb.debug("Initializing OpenTelemetry"), pb = {
                trace: bb,
                context: Mb
              }
            },
            isOTELInitialized: () => !!pb,
            pushTraces: bb => {
              try {
                if (!Gw(eb).shouldCapture()) return;
                const Mb = {
                  type: "trace",
                  payload: bb,
                  meta: Sp(eb)
                };
                wb.debug("Pushing trace\n", Mb), Hb.execute(Mb)
              } catch (Mb) {
                wb.error("Error pushing trace\n", Mb)
              }
            }
          }
        }(0, wb, 0, eb, Hb),
        lb = {
          unpatchedConsole: bb,
          internalLogger: wb,
          userActionsApi: Vb,
          config: Mb,
          metas: eb,
          transports: Hb,
          tracesApi: gb
        },
        Lb = function(bb) {
          let {
            internalLogger: wb,
            config: Mb,
            metas: eb,
            transports: Hb,
            tracesApi: pb,
            userActionsApi: Vb
          } = bb, gb = null;
          return {
            pushEvent: function(bb, lb, Lb) {
              let {
                skipDedupe: Ib,
                spanContext: Ob,
                timestampOverwriteMs: Ub,
                customPayloadTransformer: tb = bb => bb
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!Gw(eb).shouldCapture()) return;
                const Cb = Sw(lb),
                  Eb = tb({
                    name: bb,
                    domain: null !== Lb && void 0 !== Lb ? Lb : Mb.eventDomain,
                    attributes: db(Cb) ? void 0 : Cb,
                    timestamp: Ub ? Ew(Ub) : Cw(),
                    trace: Ob ? {
                      trace_id: Ob.traceId,
                      span_id: Ob.spanId
                    } : pb.getTraceContext()
                  }),
                  Fb = {
                    name: Eb.name,
                    attributes: Eb.attributes,
                    domain: Eb.domain
                  };
                if (!Ib && Mb.dedupe && !zb(gb) && sw(Fb, gb)) return void wb.debug("Skipping event push because it is the same as the last one\n", Eb);
                const Bb = gb,
                  sb = Sp(eb);
                if (gb !== Bb && !Ib && Mb.dedupe && sw(Fb, gb)) return;
                gb = Fb;
                const mb = {
                  meta: sb,
                  payload: Eb,
                  type: "event"
                };
                wb.debug("Pushing event\n", mb), xH(Vb.getActiveUserAction(), mb) || Hb.execute(mb)
              } catch (Cb) {
                wb.error("Error pushing event", Cb)
              }
            }
          }
        }(lb);
      return pb = Lb.pushEvent, kw(kw(kw(kw(kw(kw(kw({}, gb), yp(lb)), function(bb) {
        let wb, Mb, eb, Hb, {
          internalLogger: pb,
          metas: Vb
        } = bb;
        pb.debug("Initializing meta API");
        const gb = bb => {
            Mb && Vb.remove(Mb), Mb = {
              user: bb
            }, Vb.add(Mb)
          },
          lb = (bb, Mb) => {
            var eb;
            const Hb = null === Mb || void 0 === Mb ? void 0 : Mb.overrides,
              pb = Hb ? {
                overrides: kw(kw({}, null === wb || void 0 === wb || null === (eb = wb.session) || void 0 === eb ? void 0 : eb.overrides), Hb)
              } : {};
            wb && Vb.remove(wb), wb = {
              session: kw(kw({}, db(bb) ? void 0 : bb), pb)
            }, Vb.add(wb)
          },
          Lb = (bb, wb) => {
            Gw(Vb).notifySessionUpdate({
              type: "replace",
              session: bb,
              overrides: null === wb || void 0 === wb ? void 0 : wb.overrides
            }), lb(bb, wb)
          },
          Ib = () => Vb.value.session,
          Ob = () => Vb.value.page;
        return {
          setUser: gb,
          resetUser: gb,
          setSession: Lb,
          resetSession: Lb,
          getSession: Ib,
          setView: (bb, wb) => {
            var Mb;
            if ((null === wb || void 0 === wb ? void 0 : wb.overrides) && (Gw(Vb).notifySessionUpdate({
                type: "overrides",
                overrides: wb.overrides
              }), lb(Ib(), {
                overrides: wb.overrides
              })), (null === eb || void 0 === eb || null === (Mb = eb.view) || void 0 === Mb ? void 0 : Mb.name) === (null === bb || void 0 === bb ? void 0 : bb.name)) return;
            const Hb = eb;
            eb = {
              view: bb
            }, Vb.add(eb), Hb && Vb.remove(Hb)
          },
          getView: () => Vb.value.view,
          setPage: bb => {
            var wb;
            const Mb = Xb(bb) ? kw(kw({}, null !== (wb = null === Hb || void 0 === Hb ? void 0 : Hb.page) && void 0 !== wb ? wb : Ob()), {}, {
              id: bb
            }) : bb;
            Hb && Vb.remove(Hb), Hb = {
              page: Mb
            }, Vb.add(Hb)
          },
          getPage: Ob
        }
      }(lb)), function(bb) {
        let {
          internalLogger: wb,
          config: Mb,
          metas: eb,
          transports: Hb,
          tracesApi: pb,
          userActionsApi: Vb
        } = bb;
        var gb;
        wb.debug("Initializing logs API");
        let lb = null;
        const Lb = null !== (gb = Mb.logArgsSerializer) && void 0 !== gb ? gb : ZM;
        return {
          pushLog: function(bb) {
            let {
              context: gb,
              level: Ib,
              skipDedupe: Ob,
              spanContext: Ub,
              timestampOverwriteMs: tb
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Gw(eb).shouldCapture()) return;
              const Cb = Sw(gb),
                Eb = {
                  message: Lb(bb),
                  level: null !== Ib && void 0 !== Ib ? Ib : "log",
                  context: db(Cb) ? void 0 : Cb,
                  timestamp: tb ? Ew(tb) : Cw(),
                  trace: Ub ? {
                    trace_id: Ub.traceId,
                    span_id: Ub.spanId
                  } : pb.getTraceContext()
                },
                Fb = {
                  message: Eb.message,
                  level: Eb.level,
                  context: Eb.context
                };
              if (!Ob && Mb.dedupe && !zb(lb) && sw(Fb, lb)) return void wb.debug("Skipping log push because it is the same as the last one\n", Eb);
              const Bb = lb,
                sb = Sp(eb);
              if (lb !== Bb && !Ob && Mb.dedupe && sw(Fb, lb)) return;
              lb = Fb;
              const mb = {
                type: "log",
                payload: Eb,
                meta: sb
              };
              wb.debug("Pushing log\n", mb), xH(Vb.getActiveUserAction(), mb) || Hb.execute(mb)
            } catch (Cb) {
              wb.error("Error pushing log\n", Cb)
            }
          }
        }
      }(lb)), function(bb) {
        let {
          internalLogger: wb,
          config: Mb,
          metas: eb,
          transports: Hb,
          tracesApi: pb,
          userActionsApi: Vb
        } = bb;
        wb.debug("Initializing measurements API");
        let gb = null;
        return {
          pushMeasurement: function(bb) {
            let {
              skipDedupe: lb,
              context: Lb,
              spanContext: Ib,
              timestampOverwriteMs: Ob
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Gw(eb).shouldCapture()) return;
              const Ub = Sw(Lb),
                tb = kw(kw({}, bb), {}, {
                  trace: Ib ? {
                    trace_id: Ib.traceId,
                    span_id: Ib.spanId
                  } : pb.getTraceContext(),
                  timestamp: Ob ? Ew(Ob) : Cw(),
                  context: db(Ub) ? void 0 : Ub
                }),
                Cb = {
                  type: tb.type,
                  values: tb.values,
                  context: tb.context
                };
              if (!lb && Mb.dedupe && !zb(gb) && sw(Cb, gb)) return void wb.debug("Skipping measurement push because it is the same as the last one\n", tb);
              const Eb = gb,
                Fb = Sp(eb);
              if (gb !== Eb && !lb && Mb.dedupe && sw(Cb, gb)) return;
              gb = Cb;
              const Bb = {
                type: "measurement",
                payload: tb,
                meta: Fb
              };
              wb.debug("Pushing measurement\n", Bb), xH(Vb.getActiveUserAction(), Bb) || Hb.execute(Bb)
            } catch (Ub) {
              wb.error("Error pushing measurement\n", Ub)
            }
          }
        }
      }(lb)), Lb), Vb)
    }

    function Tp(bb) {
      const wb = ip(bb),
        Mb = np(wb, bb);
      if (Cb() && !bb.isolate) return void Mb.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      Mb.debug("Initializing");
      const eb = function(bb, wb) {
          let Mb, eb = [],
            Hb = [],
            pb = [],
            Vb = 0,
            gb = 0;
          const lb = () => eb.reduce(((bb, wb) => Object.assign(bb, Db(wb) ? wb() : wb)), {}),
            Lb = () => {
              if (Hb.length) {
                const bb = lb();
                Hb.forEach((wb => wb(bb)))
              }
            };
          return {
            add: function() {
              for (var bb = arguments.length, Mb = new Array(bb), Hb = 0; Hb < bb; Hb++) Mb[Hb] = arguments[Hb];
              wb.debug("Adding metas\n", Mb), eb.push(...Mb), Lb()
            },
            remove: function() {
              for (var bb = arguments.length, Mb = new Array(bb), Hb = 0; Hb < bb; Hb++) Mb[Hb] = arguments[Hb];
              wb.debug("Removing metas\n", Mb), eb = eb.filter((bb => !Mb.includes(bb))), Lb()
            },
            addListener: bb => {
              wb.debug("Adding metas listener\n", bb), Hb.push(bb)
            },
            removeListener: bb => {
              wb.debug("Removing metas listener\n", bb), Hb = Hb.filter((wb => wb !== bb))
            },
            capture: bb => {
              var wb;
              const eb = void 0 !== Mb,
                Hb = null !== (wb = Mb) && void 0 !== wb ? wb : pb;
              eb || (Mb = Hb, Vb = 0, gb = Hb.length);
              try {
                for (; Vb < gb;) {
                  const bb = Hb[Vb++];
                  null === bb || void 0 === bb || bb()
                }
                const wb = Jp(lb());
                return null === bb || void 0 === bb || bb(), wb
              } finally {
                eb || (Mb = void 0)
              }
            },
            addCaptureListener: bb => {
              pb.push(bb)
            },
            removeCaptureListener: bb => {
              pb = pb.filter((wb => wb !== bb))
            },
            get value() {
              return lb()
            }
          }
        }(0, Mb),
        Hb = Gp(wb, Mb, bb, eb),
        pb = op(wb, Mb, bb, eb, Hb),
        Vb = function(bb, wb, Mb, eb, Hb, pb) {
          wb.debug("Initializing instrumentations");
          const Vb = [];
          return {
            add: function() {
              wb.debug("Adding instrumentations");
              for (var gb = arguments.length, lb = new Array(gb), Lb = 0; Lb < gb; Lb++) lb[Lb] = arguments[Lb];
              lb.forEach((gb => {
                wb.debug(`Adding "${gb.name}" instrumentation`), Vb.some((bb => bb.name === gb.name)) ? wb.warn(`Instrumentation ${gb.name} is already added`) : (gb.unpatchedConsole = bb, gb.internalLogger = wb, gb.config = Mb, gb.metas = eb, gb.transports = Hb, gb.api = pb, Vb.push(gb), gb.initialize())
              }))
            },
            get instrumentations() {
              return [...Vb]
            },
            remove: function() {
              wb.debug("Removing instrumentations");
              for (var bb = arguments.length, Mb = new Array(bb), eb = 0; eb < bb; eb++) Mb[eb] = arguments[eb];
              Mb.forEach((bb => {
                var Mb, eb;
                wb.debug(`Removing "${bb.name}" instrumentation`);
                const Hb = Vb.reduce(((wb, Mb, eb) => null === wb && Mb.name === bb.name ? eb : null), null);
                null !== Hb ? (null === (Mb = (eb = Vb[Hb]).destroy) || void 0 === Mb || Mb.call(eb), Vb.splice(Hb, 1)) : wb.warn(`Instrumentation "${bb.name}" is not added`)
              }))
            }
          }
        }(wb, Mb, bb, eb, Hb, pb),
        gb = Fb(wb, Mb, bb, eb, Hb, pb, Vb);
      return vp(gb),
        function(bb) {
          bb.transports.add(...bb.config.transports), bb.transports.addBeforeSendHooks(bb.config.beforeSend)
        }(gb),
        function(bb) {
          bb.instrumentations.add(...bb.config.instrumentations)
        }(gb), gb
    }

    function kp(bb) {
      const wb = Yp(bb);
      if (wb) return Tp(wb)
    }
  },
  7884: function(bb, wb, Mb) {
    var eb;
    ! function(Hb, pb) {
      var Vb = "function",
        gb = "undefined",
        lb = "object",
        Lb = "string",
        Ib = "major",
        Ob = "model",
        Ub = "name",
        tb = "type",
        Cb = "vendor",
        Eb = "version",
        Fb = "architecture",
        Bb = "console",
        sb = "mobile",
        mb = "tablet",
        hb = "smarttv",
        zb = "wearable",
        Xb = "embedded",
        xb = "Amazon",
        jb = "Apple",
        Kb = "ASUS",
        rb = "BlackBerry",
        Rb = "Browser",
        Db = "Chrome",
        cb = "Firefox",
        Yb = "Google",
        Zb = "Honor",
        fb = "Huawei",
        Ab = "LG",
        Wb = "Microsoft",
        Jb = "Motorola",
        Sb = "Nvidia",
        Nb = "OnePlus",
        vb = "Opera",
        Qb = "OPPO",
        Gb = "Samsung",
        qb = "Sharp",
        ab = "Sony",
        ib = "Xiaomi",
        ub = "Zebra",
        db = "Facebook",
        Pb = "Chromium OS",
        nb = "Mac OS",
        yb = " Browser",
        ob = function(bb) {
          for (var wb = {}, Mb = 0; Mb < bb.length; Mb++) wb[bb[Mb].toUpperCase()] = bb[Mb];
          return wb
        },
        Tb = function(bb, wb) {
          return typeof bb === Lb && -1 !== kb(wb).indexOf(kb(bb))
        },
        kb = function(bb) {
          return bb.toLowerCase()
        },
        bw = function(bb, wb) {
          if (typeof bb === Lb) return bb = bb.replace(/^\s\s*/, ""), typeof wb === gb ? bb : bb.substring(0, 500)
        },
        ww = function(bb, wb) {
          for (var Mb, eb, Hb, gb, Lb, Ib, Ob = 0; Ob < wb.length && !Lb;) {
            var Ub = wb[Ob],
              tb = wb[Ob + 1];
            for (Mb = eb = 0; Mb < Ub.length && !Lb && Ub[Mb];)
              if (Lb = Ub[Mb++].exec(bb))
                for (Hb = 0; Hb < tb.length; Hb++) Ib = Lb[++eb], typeof(gb = tb[Hb]) === lb && gb.length > 0 ? 2 === gb.length ? typeof gb[1] == Vb ? this[gb[0]] = gb[1].call(this, Ib) : this[gb[0]] = gb[1] : 3 === gb.length ? typeof gb[1] !== Vb || gb[1].exec && gb[1].test ? this[gb[0]] = Ib ? Ib.replace(gb[1], gb[2]) : pb : this[gb[0]] = Ib ? gb[1].call(this, Ib, gb[2]) : pb : 4 === gb.length && (this[gb[0]] = Ib ? gb[3].call(this, Ib.replace(gb[1], gb[2])) : pb) : this[gb] = Ib || pb;
            Ob += 2
          }
        },
        Mw = function(bb, wb) {
          for (var Mb in wb)
            if (typeof wb[Mb] === lb && wb[Mb].length > 0) {
              for (var eb = 0; eb < wb[Mb].length; eb++)
                if (Tb(wb[Mb][eb], bb)) return "?" === Mb ? pb : Mb
            } else if (Tb(wb[Mb], bb)) return "?" === Mb ? pb : Mb;
          return wb.hasOwnProperty("*") ? wb["*"] : bb
        },
        ew = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM"
        },
        Hw = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Eb, [Ub, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Eb, [Ub, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Ub, Eb],
            [/opios[\/ ]+([\w\.]+)/i],
            [Eb, [Ub, vb + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Eb, [Ub, vb + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Eb, [Ub, vb]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Eb, [Ub, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Eb, [Ub, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Ub, Eb],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Eb, [Ub, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Eb, [Ub, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Eb, [Ub, "UC" + Rb]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Eb, [Ub, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Eb, [Ub, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Eb, [Ub, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Eb, [Ub, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Eb, [Ub, "Smart Lenovo " + Rb]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Ub, /(.+)/, "$1 Secure " + Rb], Eb
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Eb, [Ub, cb + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Eb, [Ub, vb + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Eb, [Ub, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Eb, [Ub, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Eb, [Ub, vb + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Eb, [Ub, "MIUI" + yb]],
            [/fxios\/([\w\.-]+)/i],
            [Eb, [Ub, cb]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Eb, [Ub, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Ub, /(.+)/, "$1Browser"], Eb
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Ub, /(.+)/, "$1" + yb], Eb
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Eb, [Ub, Gb + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Eb, [Ub, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Ub, "Sogou Mobile"], Eb
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Ub, Eb],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Ub],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Eb, Ub],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Ub, db], Eb
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Ub, Eb],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Eb, [Ub, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Eb, [Ub, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Eb, [Ub, Db + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Ub, Db + " WebView"], Eb
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Eb, [Ub, "Android " + Rb]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Ub, Eb],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Eb, [Ub, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Eb, Ub],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Ub, [Eb, Mw, {
              "1.0": "/8",
              1.2: "/1",
              1.3: "/3",
              "2.0": "/412",
              "2.0.2": "/416",
              "2.0.3": "/417",
              "2.0.4": "/419",
              "?": "/"
            }]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [Ub, Eb],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Ub, "Netscape"], Eb
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Ub, Eb],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Eb, [Ub, cb + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Ub, [Eb, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Ub, [Eb, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [Fb, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [Fb, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [Fb, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [Fb, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [Fb, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [Fb, /ower/, "", kb]
            ],
            [/ sun4\w[;\)]/i],
            [
              [Fb, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [Fb, kb]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Ob, [Cb, Gb],
              [tb, mb]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Ob, [Cb, Gb],
              [tb, sb]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Ob, [Cb, jb],
              [tb, sb]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Ob, [Cb, jb],
              [tb, mb]
            ],
            [/(macintosh);/i],
            [Ob, [Cb, jb]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Ob, [Cb, qb],
              [tb, sb]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Ob, [Cb, Zb],
              [tb, mb]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Ob, [Cb, Zb],
              [tb, sb]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Ob, [Cb, fb],
              [tb, mb]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Ob, [Cb, fb],
              [tb, sb]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Ob, /_/g, " "],
              [Cb, ib],
              [tb, mb]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Ob, /_/g, " "],
              [Cb, ib],
              [tb, sb]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Ob, [Cb, Qb],
              [tb, sb]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Ob, [Cb, Mw, {
                OnePlus: ["304", "403", "203"],
                "*": Qb
              }],
              [tb, mb]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Ob, [Cb, "Vivo"],
              [tb, sb]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Ob, [Cb, "Realme"],
              [tb, sb]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Ob, [Cb, Jb],
              [tb, sb]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Ob, [Cb, Jb],
              [tb, mb]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Ob, [Cb, Ab],
              [tb, mb]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Ob, [Cb, Ab],
              [tb, sb]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Ob, [Cb, "Lenovo"],
              [tb, mb]
            ],
            [/(nokia) (t[12][01])/i],
            [Cb, Ob, [tb, mb]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Ob, /_/g, " "],
              [tb, sb],
              [Cb, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Ob, [Cb, Yb],
              [tb, mb]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Ob, [Cb, Yb],
              [tb, sb]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Ob, [Cb, ab],
              [tb, sb]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Ob, "Xperia Tablet"],
              [Cb, ab],
              [tb, mb]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Ob, [Cb, Nb],
              [tb, sb]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Ob, [Cb, xb],
              [tb, mb]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Ob, /(.+)/g, "Fire Phone $1"],
              [Cb, xb],
              [tb, sb]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Ob, Cb, [tb, mb]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Ob, [Cb, rb],
              [tb, sb]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Ob, [Cb, Kb],
              [tb, mb]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Ob, [Cb, Kb],
              [tb, sb]
            ],
            [/(nexus 9)/i],
            [Ob, [Cb, "HTC"],
              [tb, mb]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [Cb, [Ob, /_/g, " "],
              [tb, sb]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Ob, [Cb, "TCL"],
              [tb, mb]
            ],
            [/(itel) ((\w+))/i],
            [
              [Cb, kb], Ob, [tb, Mw, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Ob, [Cb, "Acer"],
              [tb, mb]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Ob, [Cb, "Meizu"],
              [tb, sb]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Ob, [Cb, "Ulefone"],
              [tb, sb]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Ob, [Cb, "Energizer"],
              [tb, sb]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Ob, [Cb, "Cat"],
              [tb, sb]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Ob, [Cb, "Smartfren"],
              [tb, sb]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Ob, [Cb, "Nothing"],
              [tb, sb]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Ob, [Cb, "Archos"],
              [tb, mb]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Ob, [Cb, "Archos"],
              [tb, sb]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [Cb, Ob, [tb, mb]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [Cb, Ob, [tb, sb]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [Cb, Ob, [tb, mb]],
            [/(surface duo)/i],
            [Ob, [Cb, Wb],
              [tb, mb]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Ob, [Cb, "Fairphone"],
              [tb, sb]
            ],
            [/(u304aa)/i],
            [Ob, [Cb, "AT&T"],
              [tb, sb]
            ],
            [/\bsie-(\w*)/i],
            [Ob, [Cb, "Siemens"],
              [tb, sb]
            ],
            [/\b(rct\w+) b/i],
            [Ob, [Cb, "RCA"],
              [tb, mb]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Ob, [Cb, "Dell"],
              [tb, mb]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Ob, [Cb, "Verizon"],
              [tb, mb]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Ob, [Cb, "Barnes & Noble"],
              [tb, mb]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Ob, [Cb, "NuVision"],
              [tb, mb]
            ],
            [/\b(k88) b/i],
            [Ob, [Cb, "ZTE"],
              [tb, mb]
            ],
            [/\b(nx\d{3}j) b/i],
            [Ob, [Cb, "ZTE"],
              [tb, sb]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Ob, [Cb, "Swiss"],
              [tb, sb]
            ],
            [/\b(zur\d{3}) b/i],
            [Ob, [Cb, "Swiss"],
              [tb, mb]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Ob, [Cb, "Zeki"],
              [tb, mb]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [Cb, "Dragon Touch"], Ob, [tb, mb]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Ob, [Cb, "Insignia"],
              [tb, mb]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Ob, [Cb, "NextBook"],
              [tb, mb]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [Cb, "Voice"], Ob, [tb, sb]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [Cb, "LvTel"], Ob, [tb, sb]
            ],
            [/\b(ph-1) /i],
            [Ob, [Cb, "Essential"],
              [tb, sb]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Ob, [Cb, "Envizen"],
              [tb, mb]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Ob, [Cb, "MachSpeed"],
              [tb, mb]
            ],
            [/\btu_(1491) b/i],
            [Ob, [Cb, "Rotor"],
              [tb, mb]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Ob, [Cb, Sb],
              [tb, mb]
            ],
            [/(sprint) (\w+)/i],
            [Cb, Ob, [tb, sb]],
            [/(kin\.[onetw]{3})/i],
            [
              [Ob, /\./g, " "],
              [Cb, Wb],
              [tb, sb]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Ob, [Cb, ub],
              [tb, mb]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Ob, [Cb, ub],
              [tb, sb]
            ],
            [/smart-tv.+(samsung)/i],
            [Cb, [tb, hb]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Ob, /^/, "SmartTV"],
              [Cb, Gb],
              [tb, hb]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [Cb, Ab],
              [tb, hb]
            ],
            [/(apple) ?tv/i],
            [Cb, [Ob, jb + " TV"],
              [tb, hb]
            ],
            [/crkey/i],
            [
              [Ob, Db + "cast"],
              [Cb, Yb],
              [tb, hb]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Ob, [Cb, xb],
              [tb, hb]
            ],
            [/(shield \w+ tv)/i],
            [Ob, [Cb, Sb],
              [tb, hb]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Ob, [Cb, qb],
              [tb, hb]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Ob, [Cb, ab],
              [tb, hb]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Ob, [Cb, ib],
              [tb, hb]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [Cb, Ob, [tb, hb]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [Cb, bw],
              [Ob, bw],
              [tb, hb]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Ob, [tb, hb]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [tb, hb]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [Cb, Ob, [tb, Bb]],
            [/droid.+; (shield)( bui|\))/i],
            [Ob, [Cb, Sb],
              [tb, Bb]
            ],
            [/(playstation \w+)/i],
            [Ob, [Cb, ab],
              [tb, Bb]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Ob, [Cb, Wb],
              [tb, Bb]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Ob, [Cb, Gb],
              [tb, zb]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [Cb, Ob, [tb, zb]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Ob, [Cb, Qb],
              [tb, zb]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Ob, [Cb, jb],
              [tb, zb]
            ],
            [/(opwwe\d{3})/i],
            [Ob, [Cb, Nb],
              [tb, zb]
            ],
            [/(moto 360)/i],
            [Ob, [Cb, Jb],
              [tb, zb]
            ],
            [/(smartwatch 3)/i],
            [Ob, [Cb, ab],
              [tb, zb]
            ],
            [/(g watch r)/i],
            [Ob, [Cb, Ab],
              [tb, zb]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Ob, [Cb, ub],
              [tb, zb]
            ],
            [/droid.+; (glass) \d/i],
            [Ob, [Cb, Yb],
              [tb, zb]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [Cb, Ob, [tb, zb]],
            [/; (quest( \d| pro)?)/i],
            [Ob, [Cb, db],
              [tb, zb]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [Cb, [tb, Xb]],
            [/(aeobc)\b/i],
            [Ob, [Cb, xb],
              [tb, Xb]
            ],
            [/(homepod).+mac os/i],
            [Ob, [Cb, jb],
              [tb, Xb]
            ],
            [/windows iot/i],
            [
              [tb, Xb]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Ob, [tb, sb]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Ob, [tb, mb]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [tb, mb]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [tb, sb]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Ob, [Cb, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Eb, [Ub, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Ub, Eb],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Eb, [Ub, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Ub, Eb],
            [/ladybird\//i],
            [
              [Ub, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Eb, Ub]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Ub, Eb],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Ub, [Eb, Mw, ew]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Eb, Mw, ew],
              [Ub, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Eb, /_/g, "."],
              [Ub, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Ub, nb],
              [Eb, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Eb, Ub],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Ub, /(.+)/, "$1 Touch"], Eb
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Ub, Eb],
            [/\(bb(10);/i],
            [Eb, [Ub, rb]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Eb, [Ub, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Eb, [Ub, cb + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Eb, [Ub, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Eb, [Ub, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Eb, [Ub, Db + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Ub, Pb], Eb
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Ub, Eb],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Ub, "Solaris"], Eb
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Ub, Eb]
          ]
        },
        pw = function(bb, wb) {
          if (typeof bb === lb && (wb = bb, bb = pb), !(this instanceof pw)) return new pw(bb, wb).getResult();
          var Mb = typeof Hb !== gb && Hb.navigator ? Hb.navigator : pb,
            eb = bb || (Mb && Mb.userAgent ? Mb.userAgent : ""),
            Bb = Mb && Mb.userAgentData ? Mb.userAgentData : pb,
            hb = wb ? function(bb, wb) {
              var Mb = {};
              for (var eb in bb) wb[eb] && wb[eb].length % 2 === 0 ? Mb[eb] = wb[eb].concat(bb[eb]) : Mb[eb] = bb[eb];
              return Mb
            }(Hw, wb) : Hw,
            zb = Mb && Mb.userAgent == eb;
          return this.getBrowser = function() {
            var bb, wb = {};
            return wb[Ub] = pb, wb[Eb] = pb, ww.call(wb, eb, hb.browser), wb[Ib] = typeof(bb = wb[Eb]) === Lb ? bb.replace(/[^\d\.]/g, "").split(".")[0] : pb, zb && Mb && Mb.brave && typeof Mb.brave.isBrave == Vb && (wb[Ub] = "Brave"), wb
          }, this.getCPU = function() {
            var bb = {};
            return bb[Fb] = pb, ww.call(bb, eb, hb.cpu), bb
          }, this.getDevice = function() {
            var bb = {};
            return bb[Cb] = pb, bb[Ob] = pb, bb[tb] = pb, ww.call(bb, eb, hb.device), zb && !bb[tb] && Bb && Bb.mobile && (bb[tb] = sb), zb && "Macintosh" == bb[Ob] && Mb && typeof Mb.standalone !== gb && Mb.maxTouchPoints && Mb.maxTouchPoints > 2 && (bb[Ob] = "iPad", bb[tb] = mb), bb
          }, this.DC = function() {
            var bb = {};
            return bb[Ub] = pb, bb[Eb] = pb, ww.call(bb, eb, hb.engine), bb
          }, this.getOS = function() {
            var bb = {};
            return bb[Ub] = pb, bb[Eb] = pb, ww.call(bb, eb, hb.os), zb && !bb[Ub] && Bb && Bb.platform && "Unknown" != Bb.platform && (bb[Ub] = Bb.platform.replace(/chrome os/i, Pb).replace(/macos/i, nb)), bb
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.DC(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return eb
          }, this.setUA = function(bb) {
            return eb = typeof bb === Lb && bb.length > 500 ? bw(bb, 500) : bb, this
          }, this.setUA(eb), this
        };
      pw.VERSION = "1.0.41", pw.BROWSER = ob([Ub, Eb, Ib]), pw.CPU = ob([Fb]), pw.DEVICE = ob([Ob, Cb, tb, Bb, sb, hb, mb, zb, Xb]), pw.ENGINE = pw.OS = ob([Ub, Eb]), typeof wb !== gb ? (bb.exports && (wb = bb.exports = pw), wb.UAParser = pw) : Mb.amdO ? (eb = function() {
        return pw
      }.call(wb, Mb, wb, bb)) === pb || (bb.exports = eb) : typeof Hb !== gb && (Hb.UAParser = pw);
      var Vw = typeof Hb !== gb && (Hb.jQuery || Hb.Zepto);
      if (Vw && !Vw.ua) {
        var gw = new pw;
        Vw.ua = gw.getResult(), Vw.ua.get = function() {
          return gw.getUA()
        }, Vw.ua.set = function(bb) {
          gw.setUA(bb);
          var wb = gw.getResult();
          for (var Mb in wb) Vw.ua[Mb] = wb[Mb]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);