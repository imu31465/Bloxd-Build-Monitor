export const id = 31;
export const ids = [31];
export const modules = {
  6909: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      BaseExtension: () => eV,
      BaseInstrumentation: () => VV,
      BaseTransport: () => sq,
      CSPInstrumentation: () => hq,
      ConsoleInstrumentation: () => PV,
      ConsoleTransport: () => OD,
      EVENT_CLICK: () => be,
      EVENT_NAVIGATION: () => Je,
      EVENT_ROUTE_CHANGE: () => We,
      EVENT_SESSION_EXTEND: () => he,
      EVENT_SESSION_RESUME: () => Ke,
      EVENT_SESSION_START: () => ue,
      EVENT_VIEW_CHANGED: () => Ce,
      ErrorsInstrumentation: () => LV,
      FetchTransport: () => JD,
      InternalLoggerLevel: () => Ye,
      LogLevel: () => bV,
      MAX_SESSION_PERSISTENCE_TIME: () => jt,
      NavigationInstrumentation: () => rq,
      Observable: () => MV,
      PerformanceInstrumentation: () => pO,
      PersistentSessionsManager: () => Ge,
      SESSION_EXPIRATION_TIME: () => Dt,
      SESSION_INACTIVITY_TIME: () => mt,
      STORAGE_KEY: () => qt,
      SessionInstrumentation: () => qV,
      TransportItemType: () => nq,
      UserActionInstrumentation: () => Kq,
      UserActionState: () => wq,
      VERSION: () => OV,
      ViewInstrumentation: () => kV,
      VolatileSessionsManager: () => ze,
      WebVitalsInstrumentation: () => ZO,
      allLogLevels: () => CV,
      browserMeta: () => pq,
      buildStackFrame: () => DV,
      captureMetas: () => kD,
      createInternalLogger: () => vD,
      createPromiseBuffer: () => ED,
      createSession: () => Tq,
      deepEqual: () => Me,
      defaultEventDomain: () => Ot,
      defaultExceptionType: () => vV,
      defaultGlobalObjectKey: () => WD,
      defaultInternalLoggerLevel: () => pe,
      defaultLogLevel: () => JV,
      faro: () => wt,
      genShortID: () => ae,
      getCurrentTimestamp: () => we,
      getDataFromSafariExtensions: () => EV,
      getIgnoreUrls: () => xt,
      getInternalFaroFromGlobalObject: () => lt,
      getStackFramesFromError: () => wV,
      getTransportBody: () => VD,
      getUrlFromResource: () => gt,
      getWebInstrumentations: () => Uq,
      globalObject: () => Xt,
      initializeFaro: () => sD,
      internalGlobalObjectKey: () => Qt,
      isArray: () => Rt,
      isBoolean: () => vt,
      isDomError: () => ot,
      isDomException: () => rt,
      isElement: () => At,
      isElementDefined: () => Ut,
      sE: () => pt,
      isError: () => Gt,
      isErrorDefined: () => kt,
      isErrorEvent: () => zt,
      isEvent: () => Ft,
      isEventDefined: () => Lt,
      isFunction: () => ct,
      isInstanceOf: () => bt,
      isInt: () => ht,
      isInternalFaroOnGlobalObject: () => ft,
      isMap: () => Yt,
      isMapDefined: () => it,
      isNull: () => Ct,
      isNumber: () => Kt,
      isObject: () => St,
      isPrimitive: () => Zt,
      isRegExp: () => It,
      isString: () => ut,
      isSymbol: () => Wt,
      isSyntheticEvent: () => Bt,
      isThenable: () => Pt,
      isToString: () => Mt,
      isTypeof: () => Nt,
      isUndefined: () => Jt,
      makeCoreConfig: () => RD,
      noop: () => ie,
      osMeta: () => xq,
      parseStacktrace: () => yV,
      sdkMeta: () => gq,
      setInternalFaroOnGlobalObject: () => Et,
      transportItemTypeToBodyKey: () => tD,
      unknownString: () => FV,
      userActionDataAttribute: () => xO,
      userActionTimeoutDataAttribute: () => TO
    });
    const Ot = "browser",
      qt = "com.grafana.faro.session",
      Dt = 144e5,
      mt = 9e5,
      dt = 1e3,
      jt = mt,
      Ht = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: jt
      };
    const Xt = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof Vt.g ? Vt.g : "undefined" !== typeof self ? self : void 0;
    const Qt = "_faroInternal";

    function lt() {
      return Xt[Qt]
    }

    function Et(tt) {
      tt.config.isolate ? tt.internalLogger.debug("Skipping registering internal Faro instance on global object") : (tt.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Xt, Qt, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: tt
      }))
    }

    function ft() {
      return Qt in Xt
    }
    let wt = {
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

    function yt(tt, et, Vt, Ot, qt, Dt, mt) {
      return et.debug("Initializing Faro"), wt = {
          api: Dt,
          config: Vt,
          instrumentations: mt,
          internalLogger: et,
          metas: Ot,
          pause: qt.pause,
          transports: qt,
          unpatchedConsole: tt,
          unpause: qt.unpause
        }, Et(wt),
        function(tt) {
          if (tt.config.preventGlobalExposure) tt.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (tt.internalLogger.debug(`Registering public faro reference in the global scope using "${tt.config.globalObjectKey}" key`), tt.config.globalObjectKey in Xt) return void tt.internalLogger.warn(`Skipping global registration due to key "${tt.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Xt, tt.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: tt
            })
          }
        }(wt), wt
    }

    function Nt(tt, et) {
      return typeof tt === et
    }

    function Mt(tt, et) {
      return Object.prototype.toString.call(tt) === `[object ${et}]`
    }

    function bt(tt, et) {
      try {
        return tt instanceof et
      } catch (Vt) {
        return !1
      }
    }
    const Jt = tt => Nt(tt, "undefined"),
      Ct = tt => Nt(tt, "null"),
      ut = tt => Nt(tt, "string"),
      Kt = tt => Nt(tt, "number") && !isNaN(tt) || Nt(tt, "bigint"),
      ht = tt => Kt(tt) && Number.isInteger(tt),
      vt = tt => Nt(tt, "boolean"),
      Wt = tt => Nt(tt, "symbol"),
      St = tt => !Ct(tt) && Nt(tt, "object"),
      ct = tt => Nt(tt, "function"),
      Rt = tt => Mt(tt, "Array"),
      It = tt => Mt(tt, "RegExp"),
      Pt = tt => ct(null === tt || void 0 === tt ? void 0 : tt.then),
      Zt = tt => !St(tt) && !ct(tt),
      Lt = "undefined" !== typeof Event,
      Ft = tt => Lt && bt(tt, Event),
      kt = "undefined" !== typeof Error,
      Gt = tt => kt && bt(tt, Error),
      zt = tt => Mt(tt, "ErrorEvent"),
      ot = tt => Mt(tt, "DOMError"),
      rt = tt => Mt(tt, "DOMException"),
      Ut = "undefined" !== typeof Element,
      At = tt => Ut && bt(tt, Element),
      it = "undefined" !== typeof Map,
      Yt = tt => it && bt(tt, Map),
      Bt = tt => St(tt) && "nativeEvent" in tt && "preventDefault" in tt && "stopPropagation" in tt;

    function pt(tt) {
      return null == tt || (Rt(tt) || ut(tt) ? 0 === tt.length : !!St(tt) && 0 === Object.keys(tt).length)
    }

    function xt() {
      return wt.transports.transports.flatMap((tt => tt.getIgnoreUrls()))
    }

    function Tt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return xt().some((et => tt && null != tt.match(et)))
    }

    function gt(tt) {
      return ut(tt) ? tt : tt instanceof URL ? tt.href : !pt(tt) && ct(null === tt || void 0 === tt ? void 0 : tt.toString) ? tt.toString() : void 0
    }
    const st = "sessionStorage",
      nt = "localStorage";

    function te(tt) {
      try {
        let et;
        et = window[tt];
        const Vt = "__faro_storage_test__";
        return et.setItem(Vt, Vt), et.removeItem(Vt), !0
      } catch (Vt) {
        var et;
        return null === (et = wt.internalLogger) || void 0 === et || et.info(`Web storage of type ${tt} is not available. Reason: ${Vt}`), !1
      }
    }

    function ee(tt, et) {
      return me(et) ? window[et].getItem(tt) : null
    }

    function Ve(tt, et, Vt) {
      if (me(Vt)) try {
        window[Vt].setItem(tt, et)
      } catch (Ot) {}
    }

    function Oe(tt, et) {
      me(et) && window[et].removeItem(tt)
    }
    const qe = te(nt),
      De = te(st);

    function me(tt) {
      return tt === nt ? qe : tt === st && De
    }

    function de(tt) {
      return de = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, de(tt)
    }

    function je(tt) {
      var et = function(tt, et) {
        if ("object" != de(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != de(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == de(et) ? et : et + ""
    }

    function He(tt, et, Vt) {
      return (et = je(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Xe(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Qe(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Xe(Object(Vt), !0).forEach((function(et) {
          He(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Xe(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function le() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wt;
      var et, Vt, Ot;
      const qt = tt.config.sessionTracking,
        Dt = null !== (et = null !== (Vt = null === qt || void 0 === qt || null === (Ot = qt.sampler) || void 0 === Ot ? void 0 : Ot.call(qt, {
          metas: tt.metas.value
        })) && void 0 !== Vt ? Vt : null === qt || void 0 === qt ? void 0 : qt.samplingRate) && void 0 !== et ? et : 1,
        mt = "number" === typeof Dt ? function(tt) {
          return Math.min(1, Math.max(0, tt))
        }(Dt) : 0;
      if (!(mt > 0)) return !1;
      if (1 === mt) return !0;
      try {
        const tt = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === tt || void 0 === tt ? void 0 : tt.getRandomValues)) {
          const et = new Uint32Array(1);
          return tt.getRandomValues(et), et[0] / Math.pow(2, 32) < mt
        }
      } catch (dt) {}
      return Math.random() < mt
    }

    function Ee() {
      return Date.now()
    }

    function fe() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function we() {
      return (new Date).toISOString()
    }

    function ye(tt) {
      return new Date(tt).toISOString()
    }
    const Ne = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function ae() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const et = new Uint32Array(tt),
        Vt = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === Vt || void 0 === Vt ? void 0 : Vt.getRandomValues) Vt.getRandomValues(et);
      else
        for (let qt = 0; qt < tt; qt++) et[qt] = Math.floor(4294967296 * Math.random());
      let Ot = "";
      for (let qt = 0; qt < tt; qt++) Ot += Ne[et[qt] % 59];
      return Ot
    }

    function Me(tt, et) {
      if (tt === et) return !0;
      if (Nt(tt, "number") && isNaN(tt)) return Nt(et, "number") && isNaN(et);
      const Vt = Rt(tt),
        Ot = Rt(et);
      if (Vt !== Ot) return !1;
      if (Vt && Ot) {
        const Vt = tt.length;
        if (Vt !== et.length) return !1;
        for (let Ot = Vt; 0 !== Ot--;)
          if (!Me(tt[Ot], et[Ot])) return !1;
        return !0
      }
      const qt = St(tt),
        Dt = St(et);
      if (qt !== Dt) return !1;
      if (tt && et && qt && Dt) {
        const Vt = Object.keys(tt),
          Ot = Object.keys(et);
        if (Vt.length !== Ot.length) return !1;
        for (let tt of Vt)
          if (!Ot.includes(tt)) return !1;
        for (let qt of Vt)
          if (!Me(tt[qt], et[qt])) return !1;
        return !0
      }
      return !1
    }
    const be = "click",
      Je = "navigation",
      Ce = "view_changed",
      ue = "session_start",
      Ke = "session_resume",
      he = "session_extend",
      ve = "service_name_override",
      We = "route_change";

    function Se() {
      let {
        sessionId: tt,
        started: et,
        lastActivity: Vt,
        isSampled: Ot = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, qt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wt;
      var Dt;
      const mt = Ee(),
        dt = null === (Dt = qt.config) || void 0 === Dt || null === (Dt = Dt.sessionTracking) || void 0 === Dt ? void 0 : Dt.generateSessionId;
      return null == tt && (tt = "function" === typeof dt ? dt() : ae()), {
        sessionId: tt,
        lastActivity: null !== Vt && void 0 !== Vt ? Vt : mt,
        started: null !== et && void 0 !== et ? et : mt,
        isSampled: Ot
      }
    }

    function ce(tt) {
      if (null == tt) return !1;
      const et = Ee();
      return et - tt.started < 144e5 && et - tt.lastActivity < mt
    }

    function Re(tt) {
      let {
        fetchUserSession: et,
        storeUserSession: Vt,
        adoptSession: Ot,
        updateInterval: qt = 0
      } = tt, dt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wt, jt = 0;
      return function() {
        let {
          forceSessionExtend: tt = !1,
          refreshActivity: Ht = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Xt, Qt;
        if (!et || !Vt) return;
        const lt = Ee();
        if (!tt && lt < jt && jt - lt <= qt) return;
        const Et = dt.config.sessionTracking,
          ft = null === Et || void 0 === Et ? void 0 : Et.persistent;
        if (ft && !qe || !ft && !De) return;
        const wt = et();
        if (jt = Math.min(lt + qt, (null !== (Xt = null === wt || void 0 === wt ? void 0 : wt.started) && void 0 !== Xt ? Xt : lt) + Dt, (null !== (Qt = null === wt || void 0 === wt ? void 0 : wt.lastActivity) && void 0 !== Qt ? Qt : lt) + mt), !1 === tt && ce(wt)) {
          var yt;
          Ht && Vt(Qe(Qe({}, wt), {}, {
            lastActivity: lt
          }));
          const tt = null === (yt = dt.metas.value.session) || void 0 === yt ? void 0 : yt.id;
          null != Ot && null != wt.sessionMeta && wt.sessionId !== tt && Ot(wt.sessionMeta)
        } else {
          var Nt, Mt, bt;
          let tt = Pe(Se({
            isSampled: le(dt)
          }, dt), wt, dt);
          jt = lt + qt, Vt(tt), null === (Nt = dt.api) || void 0 === Nt || Nt.setSession(tt.sessionMeta), null === Et || void 0 === Et || null === (Mt = Et.onSessionChange) || void 0 === Mt || Mt.call(Et, null !== (bt = null === wt || void 0 === wt ? void 0 : wt.sessionMeta) && void 0 !== bt ? bt : null, tt.sessionMeta)
        }
      }
    }

    function Ie(tt) {
      let et, {
          fetchUserSession: Vt,
          storeUserSession: Ot,
          updateInterval: qt = 0
        } = tt,
        Dt = 0;
      return tt => {
        const mt = Ee();
        if (tt === et && mt < Dt && Dt - mt <= qt) return;
        et = tt, Dt = mt + qt;
        const dt = Vt();
        (null === dt || void 0 === dt ? void 0 : dt.sessionId) === tt && ce(dt) && Ot(Qe(Qe({}, dt), {}, {
          lastActivity: mt
        }))
      }
    }

    function Pe(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wt;
      var Ot, qt, Dt, mt, dt, jt;
      const Ht = Qe(Qe({}, tt), {}, {
          sessionMeta: {
            id: tt.sessionId,
            attributes: Le(Qe(Qe(Qe({}, null === (Ot = Vt.config.sessionTracking) || void 0 === Ot || null === (Ot = Ot.session) || void 0 === Ot ? void 0 : Ot.attributes), null !== (qt = null === (Dt = Vt.metas.value.session) || void 0 === Dt ? void 0 : Dt.attributes) && void 0 !== qt ? qt : {}), {}, {
              isSampled: tt.isSampled.toString()
            }))
          }
        }),
        Xt = null !== (mt = null === (dt = Vt.metas.value.session) || void 0 === dt ? void 0 : dt.overrides) && void 0 !== mt ? mt : null === et || void 0 === et || null === (jt = et.sessionMeta) || void 0 === jt ? void 0 : jt.overrides;
      pt(Xt) || (Ht.sessionMeta.overrides = Xt);
      const Qt = null === et || void 0 === et ? void 0 : et.sessionId;
      return null != Qt && (Ht.sessionMeta.attributes.previousSession = Qt), Ht
    }

    function Ze(tt) {
      let {
        fetchUserSession: et,
        storeUserSession: Vt
      } = tt, Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wt, qt = !1;
      return function(tt) {
        if (qt) return;
        const Dt = tt.session,
          mt = et();
        let dt = null === Dt || void 0 === Dt ? void 0 : Dt.id;
        const jt = null === Dt || void 0 === Dt ? void 0 : Dt.attributes,
          Ht = null === Dt || void 0 === Dt ? void 0 : Dt.overrides,
          Xt = null === mt || void 0 === mt ? void 0 : mt.sessionMeta,
          Qt = null === Xt || void 0 === Xt ? void 0 : Xt.overrides,
          lt = !!Ht && !Me(Ht, Qt),
          Et = !!jt && !Me(jt, null === Xt || void 0 === Xt ? void 0 : Xt.attributes);
        if (Dt && dt !== (null === mt || void 0 === mt ? void 0 : mt.sessionId) || Et || lt) {
          var ft, wt;
          const tt = null != mt && dt === mt.sessionId,
            et = Pe(tt ? mt : Se({
              sessionId: dt,
              isSampled: le(Ot)
            }, Ot), mt, Ot),
            Dt = null === mt || void 0 === mt || null === (ft = mt.sessionMeta) || void 0 === ft || null === (ft = ft.attributes) || void 0 === ft ? void 0 : ft.previousSession;
          tt && null != Dt && Dt !== et.sessionId && (et.sessionMeta.attributes.previousSession = Dt), (null === (wt = et.sessionMeta.attributes) || void 0 === wt ? void 0 : wt.previousSession) === et.sessionId && delete et.sessionMeta.attributes.previousSession, Vt(et),
            function(tt, et) {
              let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var qt, Dt, mt;
              if (!et) return;
              const dt = Vt.serviceName,
                jt = null !== (qt = null !== (Dt = Ot.serviceName) && void 0 !== Dt ? Dt : null === (mt = tt.metas.value.app) || void 0 === mt ? void 0 : mt.name) && void 0 !== qt ? qt : "";
              dt && dt !== jt && tt.api.pushEvent(ve, {
                serviceName: dt,
                previousServiceName: jt
              })
            }(Ot, lt, Ht, Qt), qt = !0;
          try {
            Ot.api.setSession(et.sessionMeta)
          } finally {
            qt = !1
          }
        }
      }
    }

    function Le(tt) {
      const et = {};
      for (const Vt of Object.keys(tt)) {
        const Ot = tt[Vt];
        void 0 !== Ot && (et[Vt] = Ot)
      }
      return et
    }

    function Fe() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== tt && void 0 !== tt ? tt : {}, function() {
        const tt = new WeakSet;
        return function(et, Vt) {
          if (St(Vt) && null !== Vt) {
            if (tt.has(Vt)) return null;
            tt.add(Vt)
          }
          return Vt
        }
      }())
    }

    function ke() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const et = {};
      for (const [Vt, Ot] of Object.entries(tt)) et[Vt] = St(Ot) && null !== Ot ? Fe(Ot) : String(Ot);
      return et
    }
    var Ge = class tt {
      constructor() {
        var et = this;
        let Vt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wt;
        this.context = Vt, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = tt => {
          this.adopting = !0;
          try {
            var et;
            null === (et = this.context.api) || void 0 === et || et.setSession(tt)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: tt = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return et.updateUserSession({
            refreshActivity: tt
          })
        }, this.recordActivity = Ie({
          fetchUserSession: tt.fetchUserSession,
          storeUserSession: tt.storeUserSession,
          updateInterval: dt
        }), this.updateUserSession = Re({
          fetchUserSession: tt.fetchUserSession,
          storeUserSession: tt.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: dt
        }, Vt), this.init()
      }
      static removeUserSession() {
        Oe(qt, tt.storageTypeLocal)
      }
      static storeUserSession(et) {
        Ve(qt, Fe(et), tt.storageTypeLocal)
      }
      static fetchUserSession() {
        const et = ee(qt, tt.storageTypeLocal);
        return et ? JSON.parse(et) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var tt;
            this.updateSession({
              refreshActivity: !1
            });
            const et = null === (tt = this.context.api) || void 0 === tt || null === (tt = tt.getSession()) || void 0 === tt ? void 0 : tt.id;
            et && this.recordActivity(et)
          }
        })), this.context.metas.addListener(Ze({
          fetchUserSession: tt.fetchUserSession,
          storeUserSession: tt.storeUserSession
        }, this.context))
      }
    };
    Ge.storageTypeLocal = nt;
    var ze = class tt {
      constructor() {
        var et = this;
        let Vt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wt;
        this.context = Vt, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: tt = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return et.updateUserSession({
            refreshActivity: tt
          })
        }, this.recordActivity = Ie({
          fetchUserSession: tt.fetchUserSession,
          storeUserSession: tt.storeUserSession,
          updateInterval: dt
        }), this.updateUserSession = Re({
          fetchUserSession: tt.fetchUserSession,
          storeUserSession: tt.storeUserSession,
          updateInterval: dt
        }, Vt), this.init()
      }
      static removeUserSession() {
        Oe(qt, tt.storageTypeSession)
      }
      static storeUserSession(et) {
        Ve(qt, Fe(et), tt.storageTypeSession)
      }
      static fetchUserSession() {
        const et = ee(qt, tt.storageTypeSession);
        return et ? JSON.parse(et) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var tt;
            this.updateSession({
              refreshActivity: !1
            });
            const et = null === (tt = this.context.api) || void 0 === tt || null === (tt = tt.getSession()) || void 0 === tt ? void 0 : tt.id;
            et && this.recordActivity(et)
          }
        })), this.context.metas.addListener(Ze({
          fetchUserSession: tt.fetchUserSession,
          storeUserSession: tt.storeUserSession
        }, this.context))
      }
    };
    ze.storageTypeSession = st;
    const oe = new WeakMap;

    function re(tt) {
      let et = oe.get(tt);
      if (!et) {
        let Vt = [],
          Ot = [];
        et = {
          addSessionUpdateListener: tt => {
            Vt.push(tt)
          },
          removeSessionUpdateListener: tt => {
            Vt = Vt.filter((et => et !== tt))
          },
          notifySessionUpdate: tt => {
            Vt.forEach((et => et(tt)))
          },
          shouldCapture: () => Ot.every((tt => tt())),
          addCaptureFilter: tt => {
            Ot.push(tt)
          },
          removeCaptureFilter: tt => {
            Ot = Ot.filter((et => et !== tt))
          }
        }, oe.set(tt, et)
      }
      return et
    }
    var Ue = class {
      constructor(tt, et, Vt) {
        this.metas = tt, this.transports = et, this.onActivate = Vt, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = tt => {
          var et, Vt, Ot;
          const qt = this.pending;
          var Dt, mt;
          if ("overrides" === tt.type) return void(this.pending = {
            reset: null !== (Dt = null === qt || void 0 === qt ? void 0 : qt.reset) && void 0 !== Dt && Dt,
            inheritOverrides: null === (mt = null === qt || void 0 === qt ? void 0 : qt.inheritOverrides) || void 0 === mt || mt,
            session: Qe(Qe({}, null === qt || void 0 === qt ? void 0 : qt.session), {}, {
              overrides: Qe(Qe({}, null === qt || void 0 === qt ? void 0 : qt.session.overrides), tt.overrides)
            })
          });
          const dt = tt.session,
            jt = pt(dt) || null != dt && "id" in dt && !dt.id,
            Ht = null !== (et = null === dt || void 0 === dt ? void 0 : dt.overrides) && void 0 !== et ? et : null === qt || void 0 === qt ? void 0 : qt.session.overrides;
          this.pending = {
            reset: jt || !(null === dt || void 0 === dt ? void 0 : dt.id) && null !== (Vt = null === qt || void 0 === qt ? void 0 : qt.reset) && void 0 !== Vt && Vt,
            inheritOverrides: !(!tt.overrides && void 0 !== (null === dt || void 0 === dt ? void 0 : dt.overrides)) && (null === (Ot = null === qt || void 0 === qt ? void 0 : qt.inheritOverrides) || void 0 === Ot || Ot),
            session: {
              id: null === dt || void 0 === dt ? void 0 : dt.id,
              attributes: (null === dt || void 0 === dt ? void 0 : dt.attributes) && Qe({}, dt.attributes),
              overrides: tt.overrides ? Qe(Qe({}, null === qt || void 0 === qt ? void 0 : qt.session.overrides), tt.overrides) : Ht && Qe({}, Ht)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var tt, et;
        this.waiting = !0, re(this.metas).addSessionUpdateListener(this.recordUpdate), re(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (tt = (et = this.metas).addCaptureListener) || void 0 === tt || tt.call(et, this.activate), this.activate()
      }
      destroy() {
        var tt, et;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), re(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (tt = (et = this.metas).removeCaptureListener) || void 0 === tt || tt.call(et, this.activate), re(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function Ae(tt) {
      return (null === tt || void 0 === tt ? void 0 : tt.persistent) ? Ge : ze
    }

    function ie() {}
    let Ye = function(tt) {
      return tt[tt.OFF = 0] = "OFF", tt[tt.ERROR = 1] = "ERROR", tt[tt.WARN = 2] = "WARN", tt[tt.INFO = 3] = "INFO", tt[tt.VERBOSE = 4] = "VERBOSE", tt
    }({});
    const Be = {
        debug: ie,
        error: ie,
        info: ie,
        prefix: "Faro",
        warn: ie
      },
      pe = 1;

    function xe(tt) {
      return xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, xe(tt)
    }

    function Te(tt) {
      var et = function(tt, et) {
        if ("object" != xe(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != xe(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == xe(et) ? et : et + ""
    }

    function ge(tt, et, Vt) {
      return (et = Te(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function se(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function ne(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? se(Object(Vt), !0).forEach((function(et) {
          ge(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : se(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }
    const tV = ne({}, console);
    var eV = class {
        constructor() {
          this.unpatchedConsole = tV, this.internalLogger = Be, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
          this.internalLogger.debug(`${this.name}\n`, ...et)
        }
        logInfo() {
          for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
          this.internalLogger.info(`${this.name}\n`, ...et)
        }
        logWarn() {
          for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
          this.internalLogger.warn(`${this.name}\n`, ...et)
        }
        logError() {
          for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
          this.internalLogger.error(`${this.name}\n`, ...et)
        }
      },
      VV = class extends eV {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const OV = "2.12.1";
    var qV = class extends VV {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = OV, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(tt) {
        var et;
        const Vt = tt.session;
        if (Vt && Vt.id !== (null === (et = this.notifiedSession) || void 0 === et ? void 0 : et.id)) {
          var Ot;
          if (this.isAdoptingSession()) return void(this.notifiedSession = Vt);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Ot = Vt.attributes) || void 0 === Ot ? void 0 : Ot.previousSession)) return this.api.pushEvent(he, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = Vt);
          this.notifiedSession = Vt, this.api.pushEvent(ue, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(tt, et, Vt) {
        const Ot = null === Vt || void 0 === Vt ? void 0 : Vt.session;
        let qt, Dt, mt = tt.fetchUserSession();
        if (et.persistent && et.maxSessionPersistenceTime && mt) {
          const tt = Ee();
          mt.lastActivity < tt - et.maxSessionPersistenceTime && (Ge.removeUserSession(), mt = null)
        }
        const dt = ce(mt);
        if ((null === Vt || void 0 === Vt ? void 0 : Vt.reset) || !dt || (null === Ot || void 0 === Ot ? void 0 : Ot.id) && Ot.id !== (null === mt || void 0 === mt ? void 0 : mt.sessionId)) {
          var jt, Ht, Xt, Qt, lt, Et;
          Dt = Se({
            sessionId: (null === Vt || void 0 === Vt ? void 0 : Vt.reset) ? void 0 : null !== (jt = null === Ot || void 0 === Ot ? void 0 : Ot.id) && void 0 !== jt ? jt : null === (Ht = et.session) || void 0 === Ht ? void 0 : Ht.id,
            isSampled: le(this)
          }, this);
          const tt = Dt.sessionId,
            ft = Vt && dt ? null === mt || void 0 === mt || null === (Xt = mt.sessionMeta) || void 0 === Xt ? void 0 : Xt.overrides : void 0,
            wt = ft ? Qe(Qe({}, null === (Qt = et.session) || void 0 === Qt ? void 0 : Qt.overrides), ft) : null === (lt = et.session) || void 0 === lt ? void 0 : lt.overrides;
          Dt.sessionMeta = Qe({
            id: tt,
            attributes: Qe({
              isSampled: Dt.isSampled.toString()
            }, null === (Et = et.session) || void 0 === Et ? void 0 : Et.attributes)
          }, wt ? {
            overrides: wt
          } : {}), qt = ue
        } else {
          var ft, wt;
          const tt = null === mt || void 0 === mt ? void 0 : mt.sessionId;
          Dt = Se({
            sessionId: tt,
            isSampled: mt.isSampled || !1,
            started: null === mt || void 0 === mt ? void 0 : mt.started
          }, this);
          const Vt = null === mt || void 0 === mt ? void 0 : mt.sessionMeta,
            Ot = Qe(Qe({}, null === (ft = et.session) || void 0 === ft ? void 0 : ft.overrides), null === Vt || void 0 === Vt ? void 0 : Vt.overrides);
          Dt.sessionMeta = Qe(Qe({}, et.session), {}, {
            id: tt,
            attributes: Qe(Qe(Qe({}, null === (wt = et.session) || void 0 === wt ? void 0 : wt.attributes), null === Vt || void 0 === Vt ? void 0 : Vt.attributes), {}, {
              isSampled: Dt.isSampled.toString()
            }),
            overrides: Ot
          }), qt = Ke
        }
        var yt;
        if (Ot && (Dt.sessionMeta = Qe(Qe({}, Dt.sessionMeta), {}, {
            attributes: Qe(Qe(Qe({}, null === (yt = Dt.sessionMeta) || void 0 === yt ? void 0 : yt.attributes), Ot.attributes), {}, {
              isSampled: Dt.isSampled.toString()
            })
          }), Ot.overrides)) {
          const tt = (null === Vt || void 0 === Vt ? void 0 : Vt.inheritOverrides) ? Qe(Qe({}, Dt.sessionMeta.overrides), Ot.overrides) : Ot.overrides;
          Object.keys(tt).length > 0 ? Dt.sessionMeta.overrides = tt : delete Dt.sessionMeta.overrides
        }
        return {
          initialSession: Dt,
          lifecycleType: qt
        }
      }
      registerBeforeSendHook(tt) {
        var et;
        this.beforeSendHook = et => {
          var Vt, Ot;
          const qt = null === (Vt = et.meta.session) || void 0 === Vt ? void 0 : Vt.id;
          qt && !this.transports.isPaused() && tt(qt);
          const Dt = null === (Ot = et.meta.session) || void 0 === Ot ? void 0 : Ot.attributes;
          if (Dt && "true" === (null === Dt || void 0 === Dt ? void 0 : Dt.isSampled)) {
            var mt;
            let tt = JSON.parse(JSON.stringify(et));
            const Vt = null === (mt = tt.meta.session) || void 0 === mt ? void 0 : mt.attributes;
            var dt;
            if (null === Vt || void 0 === Vt || delete Vt.isSampled, 0 === Object.keys(null !== Vt && void 0 !== Vt ? Vt : {}).length) null === (dt = tt.meta.session) || void 0 === dt || delete dt.attributes;
            return tt
          }
          return null
        }, null === (et = this.transports) || void 0 === et || et.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var tt;
        this.logDebug("init session instrumentation");
        const et = document.prerendering;
        var Vt;
        if ((null === (tt = this.config.sessionTracking) || void 0 === tt ? void 0 : tt.enabled) && (et || this.prerenderSession)) return null !== (Vt = this.prerenderSession) && void 0 !== Vt || (this.prerenderSession = new Ue(this.metas, this.transports, (tt => {
          this.prerenderSession = void 0, this.initializeSession(tt)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(tt) {
        const et = this.config.sessionTracking;
        if (null === et || void 0 === et ? void 0 : et.enabled) {
          var Vt, Ot;
          const qt = Ae(et),
            Dt = new qt(this);
          this.isAdoptingSession = Dt.isAdopting, this.registerBeforeSendHook(Dt.recordActivity);
          const {
            initialSession: mt,
            lifecycleType: dt
          } = this.createInitialSession(qt, et, tt);
          qt.storeUserSession(mt);
          const jt = mt.sessionMeta;
          this.notifiedSession = jt, this.api.setSession(jt), this.captureListener = () => {
            this.transports.isPaused() || Dt.updateSession({
              refreshActivity: !1
            })
          }, null === (Vt = (Ot = this.metas).addCaptureListener) || void 0 === Vt || Vt.call(Ot, this.captureListener), dt === ue && this.api.pushEvent(ue, {}, void 0, {
            skipDedupe: !0
          }), dt === Ke && this.api.pushEvent(Ke, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var tt, et, Vt;
        (null === (tt = this.prerenderSession) || void 0 === tt || tt.destroy(), this.captureListener) && (null === (et = (Vt = this.metas).removeCaptureListener) || void 0 === et || et.call(Vt, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function DV(tt, et, Vt, Ot) {
      const qt = {
        filename: tt || document.location.href,
        function: et || "?"
      };
      return void 0 !== Vt && (qt.lineno = Vt), void 0 !== Ot && (qt.colno = Ot), qt
    }
    const mV = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      dV = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      jV = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      HV = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      XV = "safari-extension",
      QV = "safari-web-extension",
      lV = /Minified React error #\d+;/i;

    function EV(tt, et) {
      const Vt = null === tt || void 0 === tt ? void 0 : tt.includes(XV),
        Ot = !Vt && (null === tt || void 0 === tt ? void 0 : tt.includes("safari-web-extension"));
      return Vt || Ot ? [(null === tt || void 0 === tt ? void 0 : tt.includes("@")) ? tt.split("@")[0] : tt, Vt ? `${XV}:${et}` : `${QV}:${et}`] : [tt, et]
    }
    const fV = 1024;

    function wV(tt) {
      let et = [];
      tt.stacktrace ? et = tt.stacktrace.split("\n").filter(((tt, et) => et % 2 === 0)) : tt.stack && (et = tt.stack.split("\n"));
      const Vt = et.reduce(((et, Vt, Ot) => {
        if (Vt.length > fV) return et;
        let qt, Dt, mt, dt, jt;
        if (qt = mV.exec(Vt)) {
          if (Dt = qt[1], mt = qt[2], dt = qt[3], jt = qt[4], null === mt || void 0 === mt ? void 0 : mt.startsWith("eval")) {
            const tt = dV.exec(mt);
            tt && (mt = tt[1], dt = tt[2], jt = tt[3])
          }
          mt = (null === mt || void 0 === mt ? void 0 : mt.startsWith("address at ")) ? mt.substring(11) : mt, [Dt, mt] = EV(Dt, mt)
        } else if (qt = jV.exec(Vt)) {
          if (Dt = qt[1], mt = qt[3], dt = qt[4], jt = qt[5], mt && mt.includes(" > eval")) {
            const tt = HV.exec(mt);
            tt && (Dt = Dt || "eval", mt = tt[1], dt = tt[2])
          } else 0 === Ot && !jt && Kt(tt.columnNumber) && (jt = String(tt.columnNumber + 1));
          [Dt, mt] = EV(Dt, mt)
        }
        return (mt || Dt) && et.push(DV(mt, Dt, dt ? Number(dt) : void 0, jt ? Number(jt) : void 0)), et
      }), []);
      return lV.test(tt.message) ? Vt.slice(1) : Vt
    }

    function yV(tt) {
      return {
        frames: wV(tt)
      }
    }
    const NV = "http-request-start",
      aV = "http-request-end";
    var MV = class tt {
      constructor() {
        this.subscribers = []
      }
      subscribe(tt) {
        return this.subscribers.push(tt), {
          unsubscribe: () => this.unsubscribe(tt)
        }
      }
      unsubscribe(tt) {
        this.subscribers = this.subscribers.filter((et => et !== tt))
      }
      notify(tt) {
        this.subscribers.forEach((et => et(tt)))
      }
      first() {
        const et = new tt,
          Vt = tt => {
            et.notify(tt), Ot.unsubscribe()
          },
          Ot = this.subscribe(Vt),
          qt = et.unsubscribe.bind(et);
        return this.withUnsubscribeOverride(et, qt, Vt)
      }
      takeWhile(et) {
        const Vt = new tt,
          Ot = tt => {
            et(tt) ? Vt.notify(tt) : Vt.unsubscribe(Ot)
          };
        this.subscribe(Ot);
        const qt = Vt.unsubscribe.bind(Vt);
        return this.withUnsubscribeOverride(Vt, qt, Ot)
      }
      filter(et) {
        const Vt = new tt,
          Ot = tt => {
            et(tt) && Vt.notify(tt)
          };
        this.subscribe(Ot);
        const qt = Vt.unsubscribe.bind(Vt);
        return this.withUnsubscribeOverride(Vt, qt, Ot)
      }
      merge() {
        const et = new tt,
          Vt = [];
        for (var Ot = arguments.length, qt = new Array(Ot), Dt = 0; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
        qt.forEach((tt => {
          const Ot = tt.subscribe((tt => {
            et.notify(tt)
          }));
          Vt.push(Ot)
        }));
        const mt = et.unsubscribeAll.bind(et);
        return et.unsubscribe = () => {
          Vt.forEach((tt => tt.unsubscribe())), mt()
        }, et
      }
      withUnsubscribeOverride(tt, et, Vt) {
        return tt.unsubscribe = tt => {
          et(tt), this.unsubscribe(Vt)
        }, tt
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let bV = function(tt) {
      return tt.TRACE = "trace", tt.DEBUG = "debug", tt.INFO = "info", tt.LOG = "log", tt.WARN = "warn", tt.ERROR = "error", tt
    }({});
    const JV = "log",
      CV = ["trace", "debug", "info", "log", "warn", "error"];
    let uV, KV = !1;
    const hV = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      vV = "Error",
      WV = tt => tt.map((tt => St(tt) ? Fe(tt) : String(tt))).join(" ");

    function SV(tt) {
      let et, Vt, Ot, qt, Dt = [];
      if (zt(tt) && tt.error) et = tt.error.message, Vt = tt.error.name, Dt = wV(tt.error);
      else if ((Ot = ot(tt)) || rt(tt)) {
        const {
          name: qt,
          message: Dt
        } = tt;
        Vt = null !== qt && void 0 !== qt ? qt : Ot ? "DOMError" : "DOMException", et = Dt ? `${Vt}: ${Dt}` : Vt
      } else Gt(tt) ? (Vt = tt.name, et = tt.message, Dt = wV(tt)) : (St(tt) || (qt = Ft(tt))) && (Vt = qt ? tt.constructor.name : void 0, et = `Non-Error exception captured with keys: ${Object.keys(tt)}`);
      return [et, Vt, Dt]
    }

    function cV(tt) {
      const [et, Vt, Ot, qt, Dt] = tt;
      let mt, dt, jt = [];
      const Ht = ut(et),
        Xt = DV(Vt, "?", Ot, qt);
      return Dt || !Ht ? ([mt, dt, jt] = SV(null !== Dt && void 0 !== Dt ? Dt : et), 0 === jt.length && (jt = [Xt])) : Ht && ([mt, dt] = function(tt) {
        var et, Vt;
        const Ot = tt.match(hV),
          qt = null !== (et = null === Ot || void 0 === Ot ? void 0 : Ot[1]) && void 0 !== et ? et : vV;
        return [null !== (Vt = null === Ot || void 0 === Ot ? void 0 : Ot[2]) && void 0 !== Vt ? Vt : tt, qt]
      }(et), jt = [Xt]), {
        value: mt,
        type: dt,
        stackFrames: jt
      }
    }

    function RV(tt, et) {
      return Gt(tt[0]) ? cV(tt) : {
        value: et(tt)
      }
    }
    const IV = tt => tt.map((tt => {
      try {
        return String(tt)
      } catch (et) {
        return ""
      }
    })).join(" ");
    var PV = class tt extends VV {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = OV, this.errorSerializer = IV
      }
      initialize() {
        var et, Vt;
        const Ot = this.config.consoleInstrumentation,
          qt = (null === Ot || void 0 === Ot ? void 0 : Ot.serializeErrors) || !!(null === Ot || void 0 === Ot ? void 0 : Ot.errorSerializer);
        this.errorSerializer = qt ? null !== (et = null === Ot || void 0 === Ot ? void 0 : Ot.errorSerializer) && void 0 !== et ? et : WV : IV;
        const Dt = null !== (Vt = null === Ot || void 0 === Ot ? void 0 : Ot.disabledLevels) && void 0 !== Vt ? Vt : tt.defaultDisabledLevels,
          mt = function(tt) {
            if (uV || (uV = new MV), !KV) {
              const et = null !== tt && void 0 !== tt ? tt : tV;
              CV.forEach((tt => {
                console[tt] = function() {
                  for (var Vt, Ot = arguments.length, qt = new Array(Ot), Dt = 0; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
                  uV.notify({
                    type: "console",
                    level: tt,
                    args: qt
                  }), null === (Vt = et[tt]) || void 0 === Vt || Vt.apply(console, qt)
                }
              })), KV = !0
            }
            return uV
          }(this.unpatchedConsole);
        this.subscription = mt.subscribe((et => {
          let {
            level: Vt,
            args: qt
          } = et;
          if (!Dt.includes(Vt)) try {
            if (Vt !== bV.ERROR || (null === Ot || void 0 === Ot ? void 0 : Ot.consoleErrorAsLog))
              if (Vt === bV.ERROR && (null === Ot || void 0 === Ot ? void 0 : Ot.consoleErrorAsLog)) {
                const {
                  value: et,
                  type: Ot,
                  stackFrames: Dt
                } = RV(qt, this.errorSerializer);
                this.api.pushLog(et ? [tt.consoleErrorPrefix + et] : qt, {
                  level: Vt,
                  context: {
                    value: null !== et && void 0 !== et ? et : "",
                    type: null !== Ot && void 0 !== Ot ? Ot : "",
                    stackFrames: (null === Dt || void 0 === Dt ? void 0 : Dt.length) ? WV(Dt) : ""
                  }
                })
              } else this.api.pushLog(qt, {
                level: Vt
              });
            else {
              const {
                value: et,
                type: Vt,
                stackFrames: Ot
              } = RV(qt, this.errorSerializer);
              if (et && !Vt && !Ot) return void this.api.pushError(new Error(tt.consoleErrorPrefix + et));
              this.api.pushError(new Error(tt.consoleErrorPrefix + et), {
                type: Vt,
                stackFrames: Ot
              })
            }
          } catch (mt) {
            this.logError(mt)
          }
        }))
      }
      destroy() {
        var tt;
        null === (tt = this.subscription) || void 0 === tt || tt.unsubscribe(), this.subscription = void 0
      }
    };
    PV.defaultDisabledLevels = [bV.DEBUG, bV.TRACE, bV.LOG], PV.consoleErrorPrefix = "console.error: ";
    const ZV = [];
    var LV = class extends VV {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = OV
      }
      initialize() {
        this.logDebug("Initializing"),
          function(tt) {
            const et = window.onerror;
            window.onerror = function() {
              for (var Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
              try {
                const {
                  value: et,
                  type: Vt,
                  stackFrames: qt
                } = cV(Ot), Dt = Ot[4];
                if (et) {
                  const Ot = {
                    type: Vt,
                    stackFrames: qt
                  };
                  null != Dt && (Ot.originalError = Dt), tt.pushError(new Error(et), Ot)
                }
              } finally {
                null === et || void 0 === et || et.apply(window, Ot)
              }
            }
          }(this.api),
          function(tt) {
            const et = et => {
              var Vt;
              let Ot, qt, Dt = et;
              if (Dt.reason) Dt = et.reason;
              else if (null === (Vt = et.detail) || void 0 === Vt ? void 0 : Vt.reason) {
                var mt;
                Dt = null === (mt = et.detail) || void 0 === mt ? void 0 : mt.reason
              }
              let dt = [];
              Zt(Dt) ? (Ot = `Non-Error promise rejection captured with value: ${String(Dt)}`, qt = "UnhandledRejection") : [Ot, qt, dt] = SV(Dt), Ot && tt.pushError(new Error(Ot), {
                type: qt,
                stackFrames: dt
              })
            };
            window.addEventListener("unhandledrejection", et), ZV.push(et)
          }(this.api)
      }
    };
    const FV = "unknown";
    var kV = class extends VV {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = OV, this.waitingForActivation = !1, this.sendViewChangedEvent = tt => {
          var et;
          if (this.waitingForActivation || document.prerendering) return;
          const Vt = tt.view;
          if (Vt && Vt.name !== (null === (et = this.notifiedView) || void 0 === et ? void 0 : et.name)) {
            var Ot, qt, Dt;
            const tt = null !== (Ot = null === (qt = this.notifiedView) || void 0 === qt ? void 0 : qt.name) && void 0 !== Ot ? Ot : FV;
            this.notifiedView = Vt, this.api.pushEvent(Ce, {
              fromView: tt,
              toView: null !== (Dt = Vt.name) && void 0 !== Dt ? Dt : FV
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
    class GV {
      t;
      o = 0;
      i = [];
      l(tt) {
        if (tt.hadRecentInput) return;
        const et = this.i[0],
          Vt = this.i.at(-1);
        this.o && et && Vt && tt.startTime - Vt.startTime < 1e3 && tt.startTime - et.startTime < 5e3 ? (this.o += tt.value, this.i.push(tt)) : (this.o = tt.value, this.i = [tt]), this.t?.(tt)
      }
    }
    const zV = () => {
        const tt = performance.getEntriesByType("navigation")[0];
        if (tt && tt.responseStart > 0 && tt.responseStart < performance.now()) return tt
      },
      oV = tt => {
        if ("loading" === document.readyState) return "loading";
        const et = zV();
        if (et) {
          if (tt < et.domInteractive) return "loading";
          if (0 === et.domContentLoadedEventStart || tt < et.domContentLoadedEventStart) return "dom-interactive";
          if (0 === et.domComplete || tt < et.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      rV = tt => {
        const et = tt.nodeName;
        return 1 === tt.nodeType ? et.toLowerCase() : et.toUpperCase().replace(/^#/, "")
      },
      UV = tt => {
        let et = "";
        try {
          for (; 9 !== tt?.nodeType;) {
            const Vt = tt,
              Ot = Vt.id ? "#" + Vt.id : [rV(Vt), ...Array.from(Vt.classList ?? []).sort()].join(".");
            if (et.length + Ot.length > 99) return et || Ot;
            if (et = et ? Ot + ">" + et : Ot, Vt.id) break;
            tt = Vt.parentNode
          }
        } catch {}
        return et
      },
      AV = new WeakMap;

    function iV(tt, et) {
      let Vt = AV.get(et);
      return Vt || (Vt = new WeakMap, AV.set(et, Vt)), Vt.get(tt) || Vt.set(tt, new et), Vt.get(tt)
    }
    let YV = -1;
    const BV = () => YV,
      pV = tt => {
        addEventListener("pageshow", (et => {
          et.persisted && (YV = et.timeStamp, tt(et))
        }), !0)
      },
      xV = (tt, et, Vt, Ot) => {
        let qt, Dt;
        return mt => {
          et.value >= 0 && (mt || Ot) && (Dt = et.value - (qt ?? 0), (Dt || void 0 === qt) && (qt = et.value, et.delta = Dt, et.rating = ((tt, et) => tt > et[1] ? "poor" : tt > et[0] ? "needs-improvement" : "good")(et.value, Vt), tt(et)))
        }
      },
      TV = tt => {
        requestAnimationFrame((() => requestAnimationFrame((() => tt()))))
      },
      gV = () => zV()?.activationStart ?? 0;
    let sV = -1;
    const nV = new Set,
      tO = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      eO = tt => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === tt.type)
            for (const tt of nV) tt();
          isFinite(sV) || (sV = "visibilitychange" === tt.type ? tt.timeStamp : 0, removeEventListener("prerenderingchange", eO, !0))
        }
      },
      VO = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (sV = 1 / 0), sV < 0) {
          const tt = gV(),
            et = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((et => "hidden" === et.name && et.startTime >= tt))?.startTime;
          sV = et ?? tO(), addEventListener("visibilitychange", eO, !0), addEventListener("prerenderingchange", eO, !0), pV((() => {
            setTimeout((() => {
              sV = tO()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return sV
          },
          onHidden(tt) {
            nV.add(tt)
          }
        }
      },
      OO = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qt = arguments.length > 4 ? arguments[4] : void 0,
          Dt = arguments.length > 5 ? arguments[5] : void 0,
          mt = arguments.length > 6 ? arguments[6] : void 0;
        const dt = zV(),
          jt = dt?.navigationId || 0;
        let Ht = "navigate";
        return Vt ? Ht = Vt : BV() >= 0 ? Ht = "back-forward-cache" : dt && (document.prerendering || gV() > 0 ? Ht = "prerender" : document.wasDiscarded ? Ht = "restore" : dt.type && (Ht = dt.type.replace(/_/g, "-"))), {
          name: tt,
          value: et,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Ht,
          navigationId: Ot || jt,
          navigationInteractionId: qt,
          navigationURL: Dt || dt?.name,
          navigationStartTime: mt || 0
        }
      },
      qO = function(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Ot = tt.filter((tt => PerformanceObserver.supportedEntryTypes.includes(tt)));
          if (Ot.length > 0) {
            const tt = new PerformanceObserver((tt => {
              queueMicrotask((() => {
                const Vt = tt.getEntries();
                Ot.length > 1 && Vt.sort(((tt, et) => tt.startTime + tt.duration - (et.startTime + et.duration))), et(Vt)
              }))
            }));
            for (const et of Ot) tt.observe({
              type: et,
              buffered: !0,
              ...Vt
            });
            return tt
          }
        } catch {}
      },
      DO = tt => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && tt && tt.reportSoftNavs,
      mO = (tt, et) => {
        if (tt.set(et.navigationId, et), tt.size > 2) {
          const et = tt.keys().next().value;
          void 0 !== et && tt.delete(et)
        }
      },
      dO = tt => {
        let et = !1;
        return () => {
          et || (tt(), et = !0)
        }
      };
    class jO {
      u
    }
    const HO = tt => {
        document.prerendering ? addEventListener("prerenderingchange", tt, !0) : tt()
      },
      XO = [1800, 3e3],
      QO = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Vt = DO(et);
        HO((() => {
          const Ot = iV(et, jO),
            qt = VO();
          let Dt, mt = OO("FCP");
          const dt = qO(["paint"], (tt => {
            for (const et of tt) "first-contentful-paint" === et.name && (dt.disconnect(), et.startTime < qt.firstHiddenTime && (mt.value = Math.max(et.startTime - gV(), 0), mt.entries.push(et), mt.navigationId = et.navigationId || mt.navigationId, Dt(!0)))
          }));
          dt && (Dt = xV(tt, mt, XO, et.reportAllChanges), pV((Vt => {
            mt = OO("FCP", -1, "back-forward-cache", mt.navigationId, mt.navigationInteractionId, mt.navigationURL, BV()), Dt = xV(tt, mt, XO, et.reportAllChanges), TV((() => {
              mt.value = performance.now() - Vt.timeStamp, Dt(!0)
            }))
          }))), Vt && qO(["soft-navigation"], (Vt => {
            Vt.forEach((Vt => {
              Ot.u && Vt.navigationId && mO(Ot.u, Vt);
              const qt = Math.max((Vt.presentationTime || Vt.paintTime || 0) - Vt.startTime, 0);
              mt = OO("FCP", qt, "soft-navigation", Vt.navigationId, Vt.interactionId, Vt.name, Vt.startTime), Dt = xV(tt, mt, XO, et.reportAllChanges), Dt(!0)
            }))
          }), et)
        }))
      },
      lO = [.1, .25],
      EO = tt => tt.find((tt => 1 === tt.node?.nodeType)) || tt[0];
    let fO = 0,
      wO = 1 / 0,
      yO = 0;
    const NO = tt => {
      for (const et of tt) et.interactionId && (wO = Math.min(wO, et.interactionId), yO = Math.max(yO, et.interactionId), fO = yO ? (yO - wO) / 7 + 1 : 0)
    };
    let aO;
    const MO = () => aO ? fO : performance.interactionCount ?? 0;
    class bO {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return MO() - this.h
      }
      D() {
        this.h = MO(), this.v.length = 0, this.p.clear()
      }
      S(tt) {
        const et = this.T(),
          Vt = Math.min(this.v.length - 1, Math.floor(et / 50));
        return !et || -1 !== Vt || "soft-navigation" !== tt && "back-forward-cache" !== tt ? this.v[Vt] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(tt) {
        if (this.m?.(tt), !tt.interactionId) return;
        const et = this.v.at(-1);
        let Vt = this.p.get(tt.interactionId);
        if (Vt || this.v.length < 10 || tt.duration > et.k) {
          if (Vt ? tt.duration > Vt.k ? (Vt.entries = [tt], Vt.k = tt.duration) : tt.duration === Vt.k && tt.startTime === Vt.entries[0].startTime && Vt.entries.push(tt) : (Vt = {
              id: tt.interactionId,
              entries: [tt],
              k: tt.duration
            }, this.p.set(Vt.id, Vt), this.v.push(Vt)), this.v.sort(((tt, et) => et.k - tt.k)), this.v.length > 10) {
            const tt = this.v.splice(10);
            for (const et of tt) this.p.delete(et.id)
          }
          this.M?.(Vt)
        }
      }
    }
    const JO = tt => {
        const et = "requestIdleCallback" in globalThis ? 1e3 : 0,
          Vt = globalThis.requestIdleCallback || setTimeout,
          Ot = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) tt();
        else {
          const qt = dO(tt);
          let Dt = -1;
          const mt = () => {
            Ot(Dt), qt()
          };
          addEventListener("visibilitychange", mt, {
            once: !0,
            capture: !0
          }), Dt = Vt((() => {
            removeEventListener("visibilitychange", mt, {
              capture: !0
            }), qt()
          }), {
            timeout: et
          })
        }
      },
      CO = [200, 500],
      uO = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Vt = iV(et = Object.assign({}, et), bO);
        let Ot = [],
          qt = [],
          Dt = 0;
        const mt = new WeakMap,
          dt = new WeakMap;
        let jt = !1;
        const Ht = () => {
            jt || (jt = !0, JO(Xt))
          },
          Xt = () => {
            const tt = new Set(Vt.v.map((tt => mt.get(tt.entries[0])))),
              et = qt.length - 10;
            qt = qt.filter(((Vt, Ot) => Ot >= et || tt.has(Vt)));
            const dt = new Set;
            for (const Vt of qt) {
              const tt = Qt(Vt.startTime, Vt.processingEnd);
              for (const et of tt) dt.add(et)
            }
            const Ht = Ot.length - 10;
            Ot = Ot.filter(((tt, et) => dt.has(tt) || et >= Ht && tt.startTime > Dt)), jt = !1
          };
        Vt.m = tt => {
          const Vt = tt.startTime + tt.duration;
          let Ot;
          Dt = Math.max(Dt, tt.processingEnd);
          for (let Dt = qt.length - 1; Dt >= 0; Dt--) {
            const mt = qt[Dt];
            if (Math.abs(Vt - mt.renderTime) <= 8) {
              Ot = mt, Ot.startTime = Math.min(tt.startTime, Ot.startTime), Ot.processingStart = Math.min(tt.processingStart, Ot.processingStart), Ot.processingEnd = Math.max(tt.processingEnd, Ot.processingEnd), et.includeProcessedEventEntries && Ot.entries.push(tt);
              break
            }
          }
          Ot || (Ot = {
            startTime: tt.startTime,
            processingStart: tt.processingStart,
            processingEnd: tt.processingEnd,
            renderTime: Vt,
            entries: et.includeProcessedEventEntries ? [tt] : []
          }, qt.push(Ot)), tt.interactionId && mt.set(tt, Ot), Ht()
        }, Vt.M = tt => {
          if (!dt.get(tt)) {
            const Vt = tt.entries.find((tt => tt.target))?.target;
            if (Vt) {
              const Ot = et.generateTarget?.(Vt) ?? UV(Vt);
              dt.set(tt, Ot)
            } else {
              const et = tt.entries.find((tt => tt.targetSelector))?.targetSelector;
              et && dt.set(tt, et)
            }
          }
        };
        const Qt = (tt, et) => {
          const Vt = [];
          for (const qt of Ot)
            if (!(qt.startTime + qt.duration < tt)) {
              if (qt.startTime > et) break;
              Vt.push(qt)
            } return Vt
        };
        qO(["long-animation-frame"], (tt => {
            Ot = Ot.concat(tt), Ht()
          }), et),
          function(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const Vt = VO();
            HO((() => {
              "interactionCount" in performance || aO || (aO = qO(["event"], NO, {
                durationThreshold: 0
              }));
              let Ot, qt = OO("INP");
              const Dt = iV(et, bO),
                mt = (Vt, mt, dt, jt, Ht) => {
                  Dt.D(), qt = OO("INP", -1, Vt, mt, dt, jt, Ht), Ot = xV(tt, qt, CO, et.reportAllChanges)
                },
                dt = () => {
                  const tt = Dt.S(qt.navigationType);
                  tt && tt.k !== qt.value && (qt.value = tt.k, qt.entries = tt.entries, Ot())
                },
                jt = tt => {
                  dt(), Ot(!0), mt("soft-navigation", tt.navigationId, tt.interactionId, tt.name, tt.startTime)
                },
                Ht = function(tt) {
                  let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  JO((() => {
                    for (const et of tt) "soft-navigation" !== et.entryType ? Dt.l(et) : jt(et);
                    dt(), et && Ot(!0)
                  }))
                },
                Xt = ["event", "first-input"];
              DO(et) && Xt.push("soft-navigation");
              const Qt = qO(Xt, Ht, {
                ...et,
                durationThreshold: et.durationThreshold ?? 40
              });
              Ot = xV(tt, qt, CO, et.reportAllChanges), Qt && (Vt.onHidden((() => {
                Ht(Qt.takeRecords(), !0)
              })), pV((() => {
                mt("back-forward-cache", qt.navigationId, qt.navigationInteractionId, qt.navigationURL, BV())
              })))
            }))
          }((et => {
            tt((tt => {
              if (0 === tt.entries.length) {
                const et = tt.navigationStartTime || 0,
                  Vt = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: tt.value,
                    loadState: oV(et)
                  };
                return Object.assign(tt, {
                  attribution: Vt
                })
              }
              const et = tt.entries[0],
                Ot = mt.get(et),
                qt = Math.max(Ot.processingStart, et.startTime),
                Dt = Math.max(et.startTime + et.duration, qt),
                jt = Math.min(Ot.processingEnd, Dt),
                Ht = Ot.entries.sort(((tt, et) => tt.processingStart - et.processingStart)),
                Xt = Qt(et.startTime, jt),
                lt = Vt.p.get(et.interactionId),
                Et = {
                  interactionTarget: dt.get(lt),
                  interactionType: et.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: et.startTime,
                  nextPaintTime: Dt,
                  processedEventEntries: Ht,
                  longAnimationFrameEntries: Xt,
                  inputDelay: qt - et.startTime,
                  processingDuration: jt - qt,
                  presentationDelay: Dt - jt,
                  loadState: oV(et.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (tt => {
                const et = tt.interactionTime,
                  Vt = tt.nextPaintTime;
                if (!tt.longAnimationFrameEntries?.length || !et || !Vt) return;
                const Ot = tt.inputDelay,
                  qt = tt.processingDuration;
                let Dt, mt, dt = 0,
                  jt = 0,
                  Ht = 0,
                  Xt = 0;
                for (const Et of tt.longAnimationFrameEntries) {
                  jt = jt + Et.startTime + Et.duration - Et.styleAndLayoutStart;
                  for (const tt of Et.scripts) {
                    const Vt = tt.startTime + tt.duration;
                    if (Vt < et) continue;
                    const Ht = Vt - Math.max(et, tt.startTime),
                      Qt = tt.duration ? Ht / tt.duration * tt.forcedStyleAndLayoutDuration : 0;
                    dt += Ht - Qt, jt += Qt, Ht > Xt && (mt = tt.startTime < et + Ot ? "input-delay" : tt.startTime >= et + Ot + qt ? "presentation-delay" : "processing-duration", Dt = tt, Xt = Ht)
                  }
                }
                const Qt = tt.longAnimationFrameEntries.at(-1),
                  lt = Qt ? Qt.startTime + Qt.duration : 0;
                lt >= et + Ot + qt && (Ht = Vt - lt), Dt && mt && (tt.longestScript = {
                  entry: Dt,
                  subpart: mt,
                  intersectingDuration: Xt
                }), tt.totalScriptDuration = dt, tt.totalStyleAndLayoutDuration = jt, tt.totalPaintDuration = Ht, tt.totalUnattributedDuration = Vt - et - dt - jt - Ht
              })(Et), Object.assign(tt, {
                attribution: Et
              })
            })(et))
          }), et)
      };
    class KO {
      m;
      u;
      l(tt) {
        this.m?.(tt)
      }
    }
    const hO = [2500, 4e3];
    let vO = 50;
    const WO = [];
    qO(["resource"], (tt => {
      for (const et of tt) WO.push(et), WO.length > vO && WO.shift()
    }));
    const SO = [800, 1800],
      cO = tt => {
        document.prerendering ? HO((() => cO(tt))) : "complete" !== document.readyState ? addEventListener("load", (() => cO(tt)), !0) : setTimeout(tt)
      },
      RO = "load_state",
      IO = "time_to_first_byte";
    var PO = class {
        constructor(tt, et) {
          this.corePushMeasurement = tt, this.webVitalConfig = et
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var tt;
          ! function(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Vt = iV(et = Object.assign({}, et), GV),
              Ot = new WeakMap;
            Vt.t = tt => {
                if (tt?.sources?.length) {
                  const Vt = EO(tt.sources),
                    qt = Vt?.node;
                  if (qt) {
                    const tt = et.generateTarget?.(qt) ?? UV(qt);
                    Ot.set(Vt, tt)
                  }
                }
              },
              function(tt) {
                let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const Vt = VO();
                QO(dO((() => {
                  let Ot, qt = OO("CLS", 0);
                  const Dt = iV(et, GV),
                    mt = (Vt, mt, dt, jt, Ht) => {
                      qt = OO("CLS", 0, Vt, mt, dt, jt, Ht), Dt.o = 0, Ot = xV(tt, qt, lO, et.reportAllChanges)
                    },
                    dt = function() {
                      let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Dt.o > qt.value && (qt.value = Dt.o, qt.entries = Dt.i), Ot(tt)
                    },
                    jt = tt => {
                      dt(!0), mt("soft-navigation", tt.navigationId, tt.interactionId, tt.name, tt.startTime)
                    },
                    Ht = tt => {
                      for (const et of tt) "soft-navigation" !== et.entryType ? Dt.l(et) : jt(et);
                      dt()
                    },
                    Xt = ["layout-shift"];
                  DO(et) && Xt.push("soft-navigation");
                  const Qt = qO(Xt, Ht);
                  Qt && (Ot = xV(tt, qt, lO, et.reportAllChanges), Vt.onHidden((() => {
                    Ht(Qt.takeRecords()), Ot(!0)
                  })), pV((() => {
                    mt("back-forward-cache", qt.navigationId, qt.navigationInteractionId, qt.navigationURL, BV()), TV(Ot)
                  })), setTimeout(Ot))
                })))
              }((et => {
                tt((tt => {
                  let et = {};
                  if (tt.entries.length) {
                    const Vt = tt.entries.reduce(((tt, et) => tt.value > et.value ? tt : et));
                    if (Vt?.sources?.length) {
                      const tt = EO(Vt.sources);
                      tt && (et = {
                        largestShiftTarget: Ot.get(tt),
                        largestShiftTime: Vt.startTime,
                        largestShiftValue: Vt.value,
                        largestShiftSource: tt,
                        largestShiftEntry: Vt,
                        loadState: oV(Vt.startTime)
                      })
                    }
                  }
                  return Object.assign(tt, {
                    attribution: et
                  })
                })(et))
              }), et)
          }((tt => {
            const {
              loadState: et,
              largestShiftValue: Vt,
              largestShiftTime: Ot,
              largestShiftTarget: qt
            } = tt.attribution, Dt = this.buildInitialValues(tt);
            this.addIfPresent(Dt, "largest_shift_value", Vt), this.addIfPresent(Dt, "largest_shift_time", Ot);
            const mt = this.buildInitialContext(tt);
            this.addIfPresent(mt, RO, et), this.addIfPresent(mt, "largest_shift_target", qt), this.pushMeasurement(Dt, mt)
          }), {
            reportAllChanges: null === (tt = this.webVitalConfig) || void 0 === tt ? void 0 : tt.reportAllChanges
          })
        }
        measureFCP() {
          var tt;
          ! function(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Vt = iV(et = Object.assign({}, et), jO);
            DO(et) && (Vt.u = new Map), QO((et => {
              tt((tt => {
                let et = {
                  timeToFirstByte: 0,
                  firstByteToFCP: tt.value,
                  loadState: oV(BV())
                };
                if ("soft-navigation" !== tt.navigationType) {
                  if (tt.entries.length) {
                    const Vt = zV(),
                      Ot = tt.entries.at(-1);
                    if (Vt) {
                      const qt = Vt.responseStart,
                        Dt = Vt.activationStart || 0,
                        mt = Math.max(0, qt - Dt);
                      et = {
                        timeToFirstByte: mt,
                        firstByteToFCP: tt.value - mt,
                        loadState: oV(tt.entries[0].startTime),
                        navigationEntry: Vt,
                        fcpEntry: Ot
                      }
                    }
                  }
                } else {
                  const Ot = Vt.u?.get(tt.navigationId);
                  Ot && (et = {
                    timeToFirstByte: 0,
                    firstByteToFCP: tt.value,
                    loadState: "complete",
                    navigationEntry: Ot
                  })
                }
                return Object.assign(tt, {
                  attribution: et
                })
              })(et))
            }), et)
          }((tt => {
            const {
              firstByteToFCP: et,
              timeToFirstByte: Vt,
              loadState: Ot
            } = tt.attribution, qt = this.buildInitialValues(tt);
            this.addIfPresent(qt, "first_byte_to_fcp", et), this.addIfPresent(qt, IO, Vt);
            const Dt = this.buildInitialContext(tt);
            this.addIfPresent(Dt, RO, Ot), this.pushMeasurement(qt, Dt)
          }), {
            reportAllChanges: null === (tt = this.webVitalConfig) || void 0 === tt ? void 0 : tt.reportAllChanges
          })
        }
        measureINP() {
          var tt;
          uO((tt => {
            var et;
            const {
              interactionTime: Vt,
              presentationDelay: Ot,
              inputDelay: qt,
              processingDuration: Dt,
              nextPaintTime: mt,
              loadState: dt,
              interactionTarget: jt,
              interactionType: Ht,
              totalScriptDuration: Xt,
              totalStyleAndLayoutDuration: Qt,
              totalPaintDuration: lt,
              totalUnattributedDuration: Et,
              longestScript: ft
            } = tt.attribution, wt = this.buildInitialValues(tt);
            this.addIfPresent(wt, "interaction_time", Vt), this.addIfPresent(wt, "presentation_delay", Ot), this.addIfPresent(wt, "input_delay", qt), this.addIfPresent(wt, "processing_duration", Dt), this.addIfPresent(wt, "next_paint_time", mt), this.addNumberIfDefined(wt, "total_script_duration", Xt), this.addNumberIfDefined(wt, "total_style_and_layout_duration", Qt), this.addNumberIfDefined(wt, "total_paint_duration", lt), this.addNumberIfDefined(wt, "total_unattributed_duration", Et), this.addNumberIfDefined(wt, "longest_script_intersecting_duration", null === ft || void 0 === ft ? void 0 : ft.intersectingDuration);
            const yt = this.buildInitialContext(tt);
            this.addIfPresent(yt, RO, dt), this.addIfPresent(yt, "interaction_target", jt), this.addIfPresent(yt, "interaction_type", Ht), this.addIfPresent(yt, "longest_script_subpart", null === ft || void 0 === ft ? void 0 : ft.subpart), this.addIfPresent(yt, "longest_script_invoker_type", null === ft || void 0 === ft ? void 0 : ft.entry.invokerType), (null === (et = this.webVitalConfig) || void 0 === et ? void 0 : et.trackAttributionSources) && (this.addIfPresent(yt, "longest_script_invoker", null === ft || void 0 === ft ? void 0 : ft.entry.invoker), this.addIfPresent(yt, "longest_script_source_url", null === ft || void 0 === ft ? void 0 : ft.entry.sourceURL), this.addIfPresent(yt, "longest_script_source_function_name", null === ft || void 0 === ft ? void 0 : ft.entry.sourceFunctionName), this.addIfPresent(yt, "longest_script_source_char_position", void 0 !== (null === ft || void 0 === ft ? void 0 : ft.entry.sourceCharPosition) ? String(ft.entry.sourceCharPosition) : void 0)), this.pushMeasurement(wt, yt)
          }), {
            reportAllChanges: null === (tt = this.webVitalConfig) || void 0 === tt ? void 0 : tt.reportAllChanges
          })
        }
        measureLCP() {
          var tt;
          ! function(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (et = Object.assign({}, et)).resourceBufferSize && (vO = et.resourceBufferSize);
            const Vt = iV(et, KO),
              Ot = new WeakMap;
            DO(et) && (Vt.u = new Map), Vt.m = tt => {
                const Vt = tt.element;
                if (Vt) {
                  const qt = et.generateTarget?.(Vt) ?? UV(Vt);
                  Ot.set(tt, qt)
                } else tt.id && Ot.set(tt, `#${tt.id}`)
              },
              function(tt) {
                let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  Vt = !1;
                const Ot = DO(et);
                HO((() => {
                  let qt, Dt = VO(),
                    mt = OO("LCP");
                  const dt = iV(et, KO),
                    jt = (Ot, dt, jt, Ht, Xt) => {
                      mt = OO("LCP", -1, Ot, dt, jt, Ht, Xt), qt = xV(tt, mt, hO, et.reportAllChanges), Vt = !1, "soft-navigation" === Ot && (Dt = VO(!0))
                    },
                    Ht = tt => {
                      dt.u && tt.navigationId && mO(dt.u, tt), Vt || qt(!0), jt("soft-navigation", tt.navigationId, tt.interactionId, tt.name, tt.startTime);
                      const et = tt.getLargestInteractionContentfulPaint?.();
                      et && Xt([et])
                    },
                    Xt = tt => {
                      et.reportAllChanges || Ot || (tt = tt.slice(-1));
                      for (const et of tt) {
                        if (!et) continue;
                        if ("soft-navigation" === et.entryType) {
                          Ht(et);
                          continue
                        }
                        let tt = 0,
                          Vt = [],
                          Ot = et.startTime;
                        if ("largest-contentful-paint" === et.entryType) tt = Math.max(et.startTime - gV(), 0), dt.l(et), Vt = [et];
                        else if ("interaction-contentful-paint" === et.entryType) {
                          const qt = et;
                          if (!mt.navigationId) continue;
                          if ("interactionId" in qt && qt.interactionId != mt.navigationInteractionId) continue;
                          Ot = qt.largestContentfulPaint?.renderTime || 0, tt = Math.max(Ot - et.startTime, 0), qt.largestContentfulPaint && (dt.l(qt.largestContentfulPaint), Vt = [qt.largestContentfulPaint])
                        }
                        Ot < Dt.firstHiddenTime && (mt.value = tt, mt.entries = Vt, qt())
                      }
                    },
                    Qt = ["largest-contentful-paint"];
                  Ot && Qt.push("interaction-contentful-paint", "soft-navigation");
                  const lt = qO(Qt, Xt);
                  if (lt) {
                    qt = xV(tt, mt, hO, et.reportAllChanges);
                    const Dt = ["keydown", "click", "visibilitychange"],
                      dt = tt => {
                        if (tt.isTrusted && !Vt) {
                          const tt = mt.id;
                          JO((() => {
                            if (!Vt) {
                              if (!Ot) {
                                lt.disconnect();
                                for (const tt of Dt) removeEventListener(tt, dt, {
                                  capture: !0
                                })
                              }
                              tt === mt.id && (Vt = !0, qt(!0))
                            }
                          }))
                        }
                      };
                    for (const tt of Dt) addEventListener(tt, dt, {
                      capture: !0
                    });
                    pV((Ot => {
                      jt("back-forward-cache", mt.navigationId, mt.navigationInteractionId, mt.navigationURL, BV()), qt = xV(tt, mt, hO, et.reportAllChanges), TV((() => {
                        mt.value = performance.now() - Ot.timeStamp, Vt = !0, qt(!0)
                      }))
                    }))
                  }
                }))
              }((et => {
                tt((tt => {
                  let et = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: tt.value
                  };
                  if (tt.entries.length) {
                    const qt = tt.entries.at(-1),
                      Dt = tt => tt.name === qt.url && (tt.requestStart || tt.startTime) <= qt.startTime,
                      mt = qt.url && (WO.findLast(Dt) || performance.getEntriesByType("resource").findLast(Dt));
                    let dt;
                    et.target = Ot.get(qt), et.lcpEntry = qt, qt.url && (et.url = qt.url), mt && (et.lcpResourceEntry = mt);
                    let jt = 0,
                      Ht = 0;
                    if ("soft-navigation" !== tt.navigationType ? (dt = zV(), jt = dt?.activationStart ?? 0, Ht = dt?.responseStart ?? 0) : (jt = tt.navigationStartTime || 0, dt = Vt.u?.get(tt.navigationId)), dt) {
                      const Vt = Math.max(0, Ht - jt),
                        Ot = Math.max(Vt, mt ? (mt.requestStart || mt.startTime) - jt : 0),
                        qt = Math.min(tt.value, Math.max(Ot, mt ? mt.responseEnd - jt : 0));
                      et = {
                        ...et,
                        timeToFirstByte: Vt,
                        resourceLoadDelay: Ot - Vt,
                        resourceLoadDuration: qt - Ot,
                        elementRenderDelay: tt.value - qt,
                        navigationEntry: dt
                      }
                    }
                  }
                  return Object.assign(tt, {
                    attribution: et
                  })
                })(et))
              }), et)
          }((tt => {
            var et;
            const {
              elementRenderDelay: Vt,
              resourceLoadDelay: Ot,
              resourceLoadDuration: qt,
              timeToFirstByte: Dt,
              target: mt,
              url: dt,
              lcpResourceEntry: jt
            } = tt.attribution, Ht = this.buildInitialValues(tt);
            this.addIfPresent(Ht, "element_render_delay", Vt), this.addIfPresent(Ht, "resource_load_delay", Ot), this.addIfPresent(Ht, "resource_load_duration", qt), this.addIfPresent(Ht, IO, Dt);
            const Xt = this.buildInitialContext(tt);
            this.addIfPresent(Xt, "element", mt), (null === (et = this.webVitalConfig) || void 0 === et ? void 0 : et.trackAttributionSources) && (this.addIfPresent(Xt, "resource_url", dt), this.addIfPresent(Xt, "resource_delivery_type", null === jt || void 0 === jt ? void 0 : jt.deliveryType), this.addIfPresent(Xt, "resource_initiator_type", null === jt || void 0 === jt ? void 0 : jt.initiatorType)), this.pushMeasurement(Ht, Xt)
          }), {
            reportAllChanges: null === (tt = this.webVitalConfig) || void 0 === tt ? void 0 : tt.reportAllChanges
          })
        }
        measureTTFB() {
          var tt;
          ! function(tt) {
            ! function(tt) {
              let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const Vt = DO(et);
              let Ot = OO("TTFB"),
                qt = xV(tt, Ot, SO, et.reportAllChanges);
              cO((() => {
                const Dt = zV();
                if (Dt) {
                  const mt = Dt.responseStart;
                  Ot.value = Math.max(mt - gV(), 0), Ot.entries = [Dt], qt(!0), pV((() => {
                    Ot = OO("TTFB", 0, "back-forward-cache", Ot.navigationId, Ot.navigationInteractionId, Ot.navigationURL, BV()), qt = xV(tt, Ot, SO, et.reportAllChanges), qt(!0)
                  })), Vt && qO(["soft-navigation"], (Vt => {
                    Vt.forEach((Vt => {
                      Vt.navigationId && (Ot = OO("TTFB", 0, "soft-navigation", Vt.navigationId, Vt.interactionId, Vt.name, Vt.startTime), Ot.entries = [Vt], qt = xV(tt, Ot, SO, et.reportAllChanges), qt(!0))
                    }))
                  }), et)
                }
              }))
            }((et => {
              tt((tt => {
                const et = tt.entries[0];
                let Vt = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: et
                };
                if (tt.entries.length && et instanceof PerformanceNavigationTiming) {
                  const Ot = et.activationStart || 0,
                    qt = Math.max((et.workerStart || et.fetchStart || 0) - Ot, 0),
                    Dt = Math.max(et.domainLookupStart - Ot, 0),
                    mt = Math.max(et.connectStart - Ot, 0),
                    dt = Math.max(et.connectEnd - Ot, 0);
                  Vt = {
                    waitingDuration: qt,
                    cacheDuration: Dt - qt,
                    dnsDuration: mt - Dt,
                    connectionDuration: dt - mt,
                    requestDuration: tt.value - dt,
                    navigationEntry: et
                  }
                }
                return Object.assign(tt, {
                  attribution: Vt
                })
              })(et))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((tt => {
            const {
              dnsDuration: et,
              connectionDuration: Vt,
              requestDuration: Ot,
              waitingDuration: qt,
              cacheDuration: Dt
            } = tt.attribution, mt = this.buildInitialValues(tt);
            this.addIfPresent(mt, "dns_duration", et), this.addIfPresent(mt, "connection_duration", Vt), this.addIfPresent(mt, "request_duration", Ot), this.addIfPresent(mt, "waiting_duration", qt), this.addIfPresent(mt, "cache_duration", Dt);
            const dt = this.buildInitialContext(tt);
            this.pushMeasurement(mt, dt)
          }), {
            reportAllChanges: null === (tt = this.webVitalConfig) || void 0 === tt ? void 0 : tt.reportAllChanges
          })
        }
        buildInitialValues(tt) {
          return {
            [tt.name.toLowerCase()]: tt.value,
            delta: tt.delta
          }
        }
        buildInitialContext(tt) {
          var et;
          const Vt = null !== (et = ee("com.grafana.faro.lastNavigationId", st)) && void 0 !== et ? et : FV;
          return {
            id: tt.id,
            rating: tt.rating,
            navigation_type: tt.navigationType,
            navigation_entry_id: Vt
          }
        }
        pushMeasurement(tt, et) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: tt
          }, {
            context: et
          })
        }
        addIfPresent(tt, et, Vt) {
          Vt && (tt[et] = Vt)
        }
        addNumberIfDefined(tt, et, Vt) {
          void 0 !== Vt && (tt[et] = Vt)
        }
      },
      ZO = class extends VV {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = OV
        }
        initialize() {
          this.logDebug("Initializing"), new PO(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const LO = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function FO() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const et of tt)
        if ("traceparent" === et.name) {
          if (!LO.test(et.description)) continue;
          const [, tt, Vt] = et.description.split("-");
          if (null != tt && null != Vt) return {
            traceId: tt,
            spanId: Vt
          };
          break
        }
    }

    function kO(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: Vt,
        monoNow: Ot
      } = et;
      return Math.min(Vt, Vt - (Ot - tt))
    }

    function GO(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [Vt, Ot] of Object.entries(et)) {
        const et = tt[Vt];
        return null != et && (Rt(Ot) ? Ot.includes(et) : et === Ot)
      }
      return !0
    }

    function zO(tt) {
      const {
        connectEnd: et,
        connectStart: Vt,
        decodedBodySize: Ot,
        domainLookupEnd: qt,
        domainLookupStart: Dt,
        duration: mt,
        encodedBodySize: dt,
        fetchStart: jt,
        initiatorType: Ht,
        name: Xt,
        nextHopProtocol: Qt,
        redirectEnd: lt,
        redirectStart: Et,
        renderBlockingStatus: ft,
        requestStart: wt,
        responseEnd: yt,
        responseStart: Nt,
        responseStatus: Mt,
        secureConnectionStart: bt,
        transferSize: Jt,
        workerStart: Ct
      } = tt;
      return {
        name: Xt,
        httpHost: rO(Xt),
        duration: UO(mt),
        tcpHandshakeTime: UO(et - Vt),
        dnsLookupTime: UO(qt - Dt),
        tlsNegotiationTime: UO(et - bt),
        responseStatus: UO(Mt),
        redirectTime: UO(lt - Et),
        requestTime: UO(Nt - wt),
        responseTime: UO(yt - Nt),
        fetchTime: UO(yt - jt),
        serviceWorkerTime: UO(Ct > 0 ? jt - Ct : 0),
        decodedBodySize: UO(Ot),
        encodedBodySize: UO(dt),
        cacheHitStatus: function() {
          let tt = "fullLoad";
          0 === Jt ? Ot > 0 && (tt = "cache") : null != Mt ? 304 === Mt && (tt = "conditionalFetch") : dt > 0 && Jt < dt && (tt = "conditionalFetch");
          return tt
        }(),
        renderBlockingStatus: UO(ft),
        protocol: Qt,
        initiatorType: Ht,
        visibilityState: document.visibilityState,
        ttfb: UO(Nt - wt),
        transferSize: UO(Jt)
      }
    }

    function oO(tt) {
      const {
        activationStart: et,
        domComplete: Vt,
        domContentLoadedEventEnd: Ot,
        domContentLoadedEventStart: qt,
        domInteractive: Dt,
        fetchStart: mt,
        loadEventEnd: dt,
        loadEventStart: jt,
        responseStart: Ht,
        type: Xt
      } = tt, Qt = function() {
        var tt;
        return null != (null === (tt = performance.timing) || void 0 === tt ? void 0 : tt.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Qe(Qe({}, zO(tt)), {}, {
        pageLoadTime: UO(Vt - mt),
        documentParsingTime: UO(Qt ? Dt - Qt : null),
        domProcessingTime: UO(Vt - Dt),
        domContentLoadHandlerTime: UO(Ot - qt),
        onLoadTime: UO(dt - jt),
        ttfb: UO(Math.max(Ht - (null !== et && void 0 !== et ? et : 0), 0)),
        type: Xt
      })
    }

    function rO(tt) {
      try {
        return new URL(tt).host || FV
      } catch (et) {
        return FV
      }
    }

    function UO(tt) {
      return null == tt ? FV : "number" === typeof tt ? Math.round(tt > 0 ? tt : 0).toString() : tt.toString()
    }
    const AO = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function iO(tt, et, Vt, Ot, qt, Dt, mt) {
      try {
        var dt = tt[Dt](mt),
          jt = dt.value
      } catch (tt) {
        return void Vt(tt)
      }
      dt.done ? et(jt) : Promise.resolve(jt).then(Ot, qt)
    }

    function YO(tt) {
      return function() {
        var et = this,
          Vt = arguments;
        return new Promise((function(Ot, qt) {
          var Dt = tt.apply(et, Vt);

          function mt(tt) {
            iO(Dt, Ot, qt, mt, dt, "next", tt)
          }

          function dt(tt) {
            iO(Dt, Ot, qt, mt, dt, "throw", tt)
          }
          mt(void 0)
        }))
      }
    }
    const BO = new MV;
    var pO = class extends VV {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = OV
      }
      initialize() {
        var tt = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let et = !1;
        const Vt = () => {
          ! function(tt) {
            if ("complete" === document.readyState) tt();
            else {
              const et = () => {
                "complete" === document.readyState && (tt(), document.removeEventListener("readystatechange", et))
              };
              document.addEventListener("readystatechange", et)
            }
          }(YO((function*() {
            if (et) return;
            const Vt = tt.api.pushEvent,
              {
                faroNavigationId: Ot
              } = yield function(tt) {
                let et;
                const Vt = new Promise((tt => {
                  et = tt
                }));
                return new PerformanceObserver((Vt => {
                  var Ot;
                  const [qt] = Vt.getEntries();
                  if (null == qt || Tt(qt.name)) return;
                  const Dt = qt.toJSON();
                  let mt = FO(null === Dt || void 0 === Dt ? void 0 : Dt.serverTiming);
                  const dt = null !== (Ot = ee("com.grafana.faro.lastNavigationId", st)) && void 0 !== Ot ? Ot : FV,
                    jt = Qe(Qe({}, oO(Dt)), {}, {
                      faroNavigationId: ae(),
                      faroPreviousNavigationId: dt
                    });
                  Ve("com.grafana.faro.lastNavigationId", jt.faroNavigationId, st), tt("faro.performance.navigation", jt, void 0, {
                    spanContext: mt,
                    timestampOverwriteMs: kO(Dt.startTime)
                  }), et(jt)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), Vt
              }(Vt);
            et || null == Ot || function(tt, et, Vt, Ot) {
              const qt = Ot.trackResources;
              new PerformanceObserver((Ot => {
                const Dt = Ot.getEntries(),
                  mt = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const dt of Dt) {
                  if (Tt(dt.name)) continue;
                  null === Vt || void 0 === Vt || Vt.notify({
                    type: "resource"
                  });
                  const Ot = dt.toJSON();
                  let Dt = FO(null === Ot || void 0 === Ot ? void 0 : Ot.serverTiming);
                  (null == qt && GO(Ot, AO) || qt) && et("faro.performance.resource", Qe(Qe({}, zO(Ot)), {}, {
                    faroNavigationId: tt,
                    faroResourceId: ae()
                  }), void 0, {
                    spanContext: Dt,
                    timestampOverwriteMs: kO(Ot.startTime, mt)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Ot, Vt, BO, tt.config)
          })))
        };
        this.cancelInitialization = () => {
          et = !0, document.removeEventListener("prerenderingchange", Vt)
        }, document.prerendering ? document.addEventListener("prerenderingchange", Vt, {
          once: !0
        }) : Vt()
      }
      destroy() {
        var tt;
        null === (tt = this.cancelInitialization) || void 0 === tt || tt.call(this), this.cancelInitialization = void 0
      }
    };
    const xO = "data-faro-user-action-name",
      TO = xO.replace(/-name$/, "-timeout"),
      gO = 1e3;

    function sO(tt) {
      return `data-${(tt.startsWith("data-")?tt.slice(5):tt).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function nO(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ie;
      if (void 0 === tt) return et;
      let Ot = NaN;
      try {
        Ot = "string" === typeof tt && "" === tt.trim() ? NaN : Number(tt)
      } catch (qt) {}
      return !Number.isFinite(Ot) || Ot <= 0 ? (Vt(`initialActivityTimeout must be a finite number greater than zero; using ${et} ms`), et) : Ot > 1e3 ? (Vt(`initialActivityTimeout cannot exceed ${gO} ms; clamping to the maximum`), gO) : Ot
    }

    function tq(tt, et, Vt) {
      return void 0 !== tt && window.clearTimeout(tt), window.setTimeout((() => {
        et()
      }), Vt)
    }

    function eq(tt) {
      return tt.type === aV
    }
    let Vq, Oq;

    function qq() {
      return Vq || (Vq = new MV), Oq || (Oq = new MutationObserver(((tt, et) => {
        Vq.notify({
          type: "dom-mutation"
        })
      })), Oq.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), Vq
    }
    const Dq = "fetch",
      mq = "xhr";
    let dq, jq, Hq, Xq, Qq = !1;

    function lq() {
      if (dq) return dq;

      function tt(tt) {
        dq.notify({
          type: NV,
          request: tt
        })
      }

      function et(tt) {
        dq.notify({
          type: aV,
          request: tt
        })
      }
      return dq = new MV, Qq || (! function(tt) {
        let {
          onRequestEnd: et,
          onRequestStart: Vt
        } = tt;
        Hq || (Hq = window.fetch);
        window.fetch = function() {
          var tt, Ot;
          const qt = null !== (tt = gt(arguments[0])) && void 0 !== tt ? tt : "",
            Dt = Tt(qt),
            mt = (null !== (Ot = arguments[1]) && void 0 !== Ot ? Ot : {}).method,
            dt = ae();
          return Dt || Vt({
            url: qt,
            method: mt,
            requestId: dt,
            apiType: Dq
          }), Hq.apply(this, arguments).then((tt => (Dt || et({
            url: qt,
            method: mt,
            requestId: dt,
            apiType: Dq
          }), tt))).catch((tt => {
            throw Dt || et({
              url: qt,
              method: mt,
              requestId: dt,
              apiType: Dq
            }), tt
          }))
        }
      }({
        onRequestStart: tt,
        onRequestEnd: et
      }), function(tt) {
        let {
          onRequestStart: et,
          onRequestEnd: Vt
        } = tt;
        jq || (jq = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const tt = arguments[1],
            Ot = Tt(tt),
            qt = arguments[0],
            Dt = ae();
          this.addEventListener("loadstart", (function() {
            Ot || et({
              url: tt,
              method: qt,
              requestId: Dt,
              apiType: mq
            })
          })), this.addEventListener("load", (function() {
            Ot || Vt({
              url: tt,
              method: qt,
              requestId: Dt,
              apiType: mq
            })
          })), this.addEventListener("error", (function() {
            Ot || Vt({
              url: tt,
              method: qt,
              requestId: Dt,
              apiType: mq
            })
          })), this.addEventListener("abort", (function() {
            Ot || Vt({
              url: tt,
              method: qt,
              requestId: Dt,
              apiType: mq
            })
          })), jq.apply(this, arguments)
        }
      }({
        onRequestStart: tt,
        onRequestEnd: et
      }), Qq = !0), dq
    }
    let Eq, fq = !1;
    let wq = function(tt) {
      return tt[tt.Started = 0] = "Started", tt[tt.Halted = 1] = "Halted", tt[tt.Cancelled = 2] = "Cancelled", tt[tt.Ended = 3] = "Ended", tt
    }({});
    var yq = class {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = tt, this.logDebug = et, this.initialActivityTimeout = Vt, this.http = lq(), this.dom = qq(), this.perf = (Xq || (Xq = new MV), fq || (Eq = BO.subscribe((tt => {
          "resource" === tt.type && Xq.notify({
            type: "resource-entry"
          })
        })), fq = !0), Xq), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new MV).merge(this.http, this.dom, this.perf).takeWhile((() => [wq.Started, wq.Halted].includes(this.userAction.getState()))).filter((tt => !!(this.userAction.getState() !== wq.Halted || eq(tt) && this.runningRequests.has(tt.request.requestId)))).subscribe((tt => {
          (function(tt) {
            return tt.type === NV
          })(tt) && this.runningRequests.set(tt.request.requestId, tt.request), eq(tt) && this.runningRequests.delete(tt.request.requestId), eq(tt) ? this.userAction.getState() === wq.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((tt => [wq.Ended, wq.Cancelled].includes(tt))).first().subscribe((() => this.cleanup())), this.startupTid = tq(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === wq.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === wq.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = tq(this.haltTid, (() => {
          this.userAction.getState() === wq.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var tt, et;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (tt = this.allMonitorsSub) || void 0 === tt || tt.unsubscribe(), null === (et = this.stateSub) || void 0 === et || et.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(tt) {
        void 0 !== tt && window.clearTimeout(tt)
      }
    };

    function Nq(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ie;
      var Vt;
      const {
        api: Ot,
        config: qt,
        internalLogger: Dt
      } = tt, mt = nO(null === (Vt = qt.userActionsInstrumentation) || void 0 === Vt ? void 0 : Vt.initialActivityTimeout, 100, et);
      return {
        processUserEvent: function(tt) {
          var et, Vt;
          const Dt = null !== (et = null === (Vt = qt.userActionsInstrumentation) || void 0 === Vt ? void 0 : Vt.dataAttributeName) && void 0 !== et ? et : xO,
            mt = tt.target;
          if (!(mt instanceof Element)) return;
          const dt = function(tt, et) {
              let Vt = tt;
              for (; Vt;) {
                if (Vt.hasAttribute(et)) return Vt;
                Vt = Vt.parentElement
              }
              return null
            }(mt, sO(Dt)),
            jt = function(tt, et) {
              if (!tt) return;
              const Vt = function(tt) {
                  return sO(tt).slice(5).replace(/-(.)/g, ((tt, et) => et.toUpperCase()))
                }(et),
                Ot = tt.dataset;
              for (const qt in Ot)
                if (qt === Vt) return Ot[qt]
            }(dt, Dt);
          if (!dt || !jt) return;
          const Ht = function(tt, et) {
            const Vt = tt.getAttribute(function(tt) {
              const et = sO(tt);
              return et.endsWith("-name") ? `${et.slice(0,-5)}-timeout` : `${et}-timeout`
            }(et));
            return null === Vt ? void 0 : Number(Vt)
          }(dt, Dt);
          Ot.startUserAction(jt, {}, {
            triggerName: tt.type,
            initialActivityTimeout: Ht
          })
        },
        processUserActionStarted: function(tt, Vt) {
          const Ot = tt,
            qt = nO(Vt, mt, et);
          new yq(Ot, Dt.debug, qt).attach()
        }
      }
    }
    const aq = "user_action_start",
      Mq = {
        Normal: "normal",
        Critical: "critical"
      };
    var bq = class {
        constructor() {
          this.buffer = []
        }
        addItem(tt) {
          this.buffer.push(tt)
        }
        flushBuffer(tt) {
          if (ct(tt))
            for (const et of this.buffer) tt(et);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Jq = class extends MV {
        constructor(tt) {
          let {
            name: et,
            parentId: Vt,
            trigger: Ot,
            transports: qt,
            attributes: Dt,
            trackUserActionsExcludeItem: mt,
            importance: dt = Mq.Normal,
            pushEvent: jt
          } = tt;
          super(), this.name = et, this.attributes = Dt, this.id = ae(), this.trigger = Ot, this.parentId = null !== Vt && void 0 !== Vt ? Vt : this.id, this.trackUserActionsExcludeItem = mt, this.importance = dt, this._pushEvent = jt, this._itemBuffer = new bq, this._transports = qt, this._state = 0, this._start()
        }
        addItem(tt) {
          return 0 === this._state && (this._itemBuffer.addItem(tt), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Ee(), this._startTimeMono = fe())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((tt => {
            this._transports.execute(tt)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const tt = Ee(),
            et = fe() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((tt => {
            if (function(tt, et) {
                return (null === et || void 0 === et ? void 0 : et(tt)) || "measurement" === tt.type && "web-vitals" === tt.payload.type
              }(tt, this.trackUserActionsExcludeItem)) return void this._transports.execute(tt);
            const et = ne(ne({}, tt), {}, {
              payload: ne(ne({}, tt.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(et)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", ne({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: tt.toString(),
            userActionDuration: et.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, ke(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: tt => (tt.action = {
              id: this.id,
              name: this.name
            }, tt)
          })
        }
        getState() {
          return this._state
        }
      };
    const Cq = new MV;

    function uq(tt, et) {
      return !!tt && (0 === (null === tt || void 0 === tt ? void 0 : tt.getState()) && (tt.addItem(et), !0))
    }
    var Kq = class extends VV {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = OV
        }
        initialize() {
          const {
            processUserEvent: tt,
            processUserActionStarted: et
          } = Nq(wt, (tt => this.logWarn(tt)));
          this._processUserEvent = tt, this._processKeydown = et => {
            [" ", "Enter"].includes(et.key) && tt(et)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Cq.subscribe((tt => {
            let {
              type: Vt,
              userAction: Ot,
              initialActivityTimeout: qt
            } = tt;
            "user_action_start" === Vt && et(Ot, qt)
          }))
        }
        destroy() {
          var tt;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (tt = this._userActionSub) || void 0 === tt || tt.unsubscribe()
        }
      },
      hq = class extends VV {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = OV, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(tt) {
          const et = {
            blockedURI: tt.blockedURI,
            columnNumber: tt.columnNumber,
            disposition: tt.disposition,
            documentURI: tt.documentURI,
            effectiveDirective: tt.effectiveDirective,
            lineNumber: tt.lineNumber,
            originalPolicy: tt.originalPolicy,
            referrer: tt.referrer,
            sample: tt.sample,
            sourceFile: tt.sourceFile,
            statusCode: tt.statusCode,
            violatedDirective: tt.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", ke(et))
        }
      };
    var vq = class extends MV {
      constructor(tt, et) {
        var Vt, Ot, qt, Dt;
        super(), this._tracking = !1, this.eventsObservable = tt, this._options = {
          inactivityMs: null !== (Vt = null === et || void 0 === et ? void 0 : et.inactivityMs) && void 0 !== Vt ? Vt : 100,
          drainTimeoutMs: null !== (Ot = null === et || void 0 === et ? void 0 : et.drainTimeoutMs) && void 0 !== Ot ? Ot : 1e4,
          isOperationStart: null !== (qt = null === et || void 0 === et ? void 0 : et.isOperationStart) && void 0 !== qt ? qt : () => {},
          isOperationEnd: null !== (Dt = null === et || void 0 === et ? void 0 : et.isOperationEnd) && void 0 !== Dt ? Dt : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((tt => {
          var et;
          this._lastEventTime = fe(), null === (et = this._currentEvents) || void 0 === et || et.push(tt);
          const Vt = this._options.isOperationStart(tt);
          var Ot;
          Vt && (null === (Ot = this._activeOperations) || void 0 === Ot || Ot.set(Vt, !0));
          const qt = this._options.isOperationEnd(tt);
          var Dt;
          qt && (null === (Dt = this._activeOperations) || void 0 === Dt || Dt.delete(qt));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = fe(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let tt;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), tt = this.hasActiveOperations() ? fe() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: tt
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = Wq(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Wq(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(tt) {
        tt && clearTimeout(tt)
      }
    };

    function Wq(tt, et, Vt) {
      return tt && clearTimeout(tt), tt = setTimeout((() => {
        et()
      }), Vt)
    }
    let Sq;
    const cq = new Set,
      Rq = new Map;
    let Iq, Pq, Zq, Lq, Fq, kq, Gq, zq, oq = !1;
    var rq = class extends VV {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = OV
      }
      initialize() {
        const tt = lq(),
          et = qq(),
          Vt = function() {
            function tt(tt, et) {
              const Vt = null !== et && void 0 !== et ? et : location.href;
              Vt !== Pq && (Iq.notify({
                type: "url-change",
                from: Pq,
                to: Vt,
                trigger: tt
              }), Pq = Vt)
            }
            if (Iq || (Iq = new MV, Pq = location.href), !oq)
              if ("navigation" in window && "NavigateEvent" in window) {
                Gq = et => {
                  try {
                    const Vt = null === et || void 0 === et ? void 0 : et.destination;
                    (null === Vt || void 0 === Vt ? void 0 : Vt.sameDocument) && "string" === typeof Vt.url && tt("navigate", Vt.url)
                  } catch (Vt) {}
                }, window.navigation.addEventListener("navigate", Gq);
                const et = window.NavigateEvent;
                et && et.prototype && "function" === typeof et.prototype.intercept && (zq || (zq = et.prototype.intercept), et.prototype.intercept = function(et) {
                  try {
                    const et = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      Vt = null === this || void 0 === this ? void 0 : this.destination;
                    et && Vt && !1 === Vt.sameDocument && "string" === typeof Vt.url && tt("navigate-intercept", Vt.url)
                  } catch (Vt) {}
                  return zq.call(this, et)
                }), oq = !0
              } else Zq || (Zq = window.history.pushState), window.history.pushState = function() {
                for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
                const qt = Zq.apply(window.history, Vt);
                return tt("pushState"), qt
              }, Lq || (Lq = window.history.replaceState), window.history.replaceState = function() {
                for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
                const qt = Lq.apply(window.history, Vt);
                return tt("replaceState"), qt
              }, Fq = () => tt("popstate"), kq = () => tt("hashchange"), window.addEventListener("popstate", Fq), window.addEventListener("hashchange", kq), oq = !0;
            return Iq
          }(),
          Ot = (qt = ["pointerdown", "keydown"], Sq || (Sq = new MV), qt.forEach((tt => {
            if (!cq.has(tt)) {
              const et = () => {
                Sq.notify({
                  type: "interaction",
                  name: tt
                })
              };
              window.addEventListener(tt, et), cq.add(tt), Rq.set(tt, et)
            }
          })), Sq);
        var qt;
        const Dt = new vq((new MV).merge(tt, et, Vt), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: tt => function(tt) {
            return tt.type === NV
          }(tt) ? tt.request.requestId : void 0,
          isOperationEnd: tt => function(tt) {
            return tt.type === aV
          }(tt) ? tt.request.requestId : void 0
        });
        Dt.filter((tt => "tracking-ended" === tt.message)).subscribe((tt => {
          var et, Vt;
          if ((null === (et = tt.events) || void 0 === et ? void 0 : et.some((tt => "url-change" === tt.type))) && (null === (Vt = tt.events) || void 0 === Vt ? void 0 : Vt.some((tt => "dom-mutation" === tt.type)))) {
            var Ot;
            const et = null === (Ot = tt.events) || void 0 === Ot ? void 0 : Ot.find((tt => "url-change" === tt.type));
            wt.api.pushEvent("faro.navigation", {
              fromUrl: null === et || void 0 === et ? void 0 : et.from,
              toUrl: null === et || void 0 === et ? void 0 : et.to,
              sameDocument: String(!0),
              duration: tt.duration
            })
          }
        })), Ot.subscribe((() => {
          Dt.startTracking()
        }))
      }
    };

    function Uq() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const et = [new Kq, new LV, new ZO, new qV, new kV, new rq];
      return !1 !== tt.enablePerformanceInstrumentation && et.unshift(new pO), !1 !== tt.enableContentSecurityPolicyInstrumentation && et.push(new hq), !1 !== tt.captureConsole && et.push(new PV), et
    }
    var Aq = Vt(6918);
    let iq, Yq;

    function Bq() {
      const tt = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return iq === tt && Yq || (Yq = new Aq.UAParser(tt).getResult(), iq = tt), Yq
    }
    const pq = () => {
        const {
          browser: tt,
          os: et,
          ua: Vt
        } = Bq(), {
          name: Ot,
          version: qt
        } = tt, {
          name: Dt,
          version: mt
        } = et, dt = navigator.language, jt = Vt.includes("Mobi"), Ht = function() {
          if (!Ot || !qt) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Ot && void 0 !== Ot ? Ot : FV,
            version: null !== qt && void 0 !== qt ? qt : FV,
            os: `${null!==Dt&&void 0!==Dt?Dt:FV} ${null!==mt&&void 0!==mt?mt:FV}`,
            userAgent: null !== Vt && void 0 !== Vt ? Vt : FV,
            language: null !== dt && void 0 !== dt ? dt : FV,
            mobile: jt,
            brands: null !== Ht && void 0 !== Ht ? Ht : FV,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      xq = () => {
        const {
          name: tt,
          version: et
        } = Bq().os;
        if (!tt && !et) return {};
        const Vt = {};
        return tt && (Vt.name = tt), et && (Vt.version = et), {
          os: Vt
        }
      };

    function Tq(tt) {
      var et, Vt, Ot;
      return {
        id: null !== (et = null === (Vt = wt.config) || void 0 === Vt || null === (Vt = Vt.sessionTracking) || void 0 === Vt || null === (Ot = Vt.generateSessionId) || void 0 === Ot ? void 0 : Ot.call(Vt)) && void 0 !== et ? et : ae(),
        attributes: tt
      }
    }
    const gq = () => ({
      sdk: {
        name: "faro-web",
        version: OV
      }
    });
    var sq = class extends eV {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let nq = function(tt) {
      return tt.EXCEPTION = "exception", tt.LOG = "log", tt.MEASUREMENT = "measurement", tt.TRACE = "trace", tt.EVENT = "event", tt
    }({});
    const tD = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function eD(tt, et) {
      var Vt, Ot;
      if (void 0 === et) return tt;
      if (void 0 === tt) return {
        resourceSpans: et
      };
      const qt = null === (Vt = tt.resourceSpans) || void 0 === Vt ? void 0 : Vt[0];
      if (void 0 === qt) return tt;
      const Dt = (null === qt || void 0 === qt ? void 0 : qt.scopeSpans) || [],
        mt = (null === et || void 0 === et || null === (Ot = et[0]) || void 0 === Ot ? void 0 : Ot.scopeSpans) || [];
      return ne(ne({}, tt), {}, {
        resourceSpans: [ne(ne({}, qt), {}, {
          scopeSpans: [...Dt, ...mt]
        })]
      })
    }

    function VD(tt) {
      let et = {
        meta: {}
      };
      return void 0 !== tt[0] && (et.meta = tt[0].meta), tt.forEach((tt => {
        switch (tt.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const Vt = tD[tt.type],
              Ot = et[Vt];
            et = ne(ne({}, et), {}, {
              [Vt]: void 0 === Ot ? [tt.payload] : [...Ot, tt.payload]
            });
            break
          }
          case "trace":
            et = ne(ne({}, et), {}, {
              traces: eD(et.traces, tt.payload.resourceSpans)
            })
        }
      })), et
    }
    var OD = class extends sq {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = tt, this.name = "@grafana/faro-web-sdk:transport-console", this.version = OV
      }
      send(tt) {
        var et;
        return this.unpatchedConsole[null !== (et = this.options.level) && void 0 !== et ? et : bV.DEBUG]("New event", VD([tt]))
      }
    };
    const qD = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      DD = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      mD = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      dD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      jD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      HD = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function XD(tt) {
      let {
        weekday: et,
        day: Vt,
        month: Ot,
        year: qt,
        hour: Dt,
        minute: mt,
        second: dt
      } = tt;
      if (qt < 1900 || Vt < 1 || Dt > 23 || mt > 59 || dt > 60) return;
      const jt = 60 === dt,
        Ht = new Date(0);
      return Ht.setUTCFullYear(qt, Ot, Vt), Ht.setUTCHours(Dt, mt, jt ? 59 : dt, 0), Ht.getUTCDay() === et && Ht.getUTCDate() === Vt && Ht.getUTCMonth() === Ot && Ht.getUTCFullYear() === qt && Ht.getUTCHours() === Dt && Ht.getUTCMinutes() === mt && Ht.getUTCSeconds() === (jt ? 59 : dt) ? Ht.getTime() + (jt ? 1e3 : 0) : void 0
    }
    var QD = class {
      constructor(tt) {
        this.options = tt, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var tt = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const et = this.sequence++;
        let Vt = !1;
        return {
          deliver: function() {
            var Vt = YO((function*(Vt) {
              const Ot = tt.options.getNow();
              let qt, Dt = 0;
              for (;;) {
                var mt, dt, jt;
                const Ht = tt.options.retry.maxAttempts - Dt,
                  Xt = yield tt.runAttempt((() => Vt(Ht, tt.unloading)), Dt > 0);
                if (Dt += Xt.attemptsMade, "success" === Xt.kind) return {
                  kind: "success",
                  attempts: Dt,
                  elapsedTimeMs: tt.options.getNow() - Ot
                };
                if (qt = Xt.failure, "terminal" === Xt.kind || tt.unloading) return {
                  kind: "terminal",
                  attempts: Dt,
                  elapsedTimeMs: tt.options.getNow() - Ot,
                  failure: qt
                };
                if (Dt >= tt.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Dt,
                  elapsedTimeMs: tt.options.getNow() - Ot,
                  failure: qt,
                  reason: "retries-exhausted"
                };
                if (null != Xt.retryAfterMs && Xt.retryAfterMs > tt.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Dt,
                  elapsedTimeMs: tt.options.getNow() - Ot,
                  failure: qt,
                  reason: "retry-after-too-long"
                };
                const Qt = Math.min(null !== (mt = Xt.retryAfterMs) && void 0 !== mt ? mt : tt.options.retry.initialBackoffMs * Math.pow(tt.options.retry.backoffMultiplier, Dt - 1), tt.options.retry.maxBackoffMs);
                if (null === (dt = (jt = tt.options).onRetry) || void 0 === dt || dt.call(jt, Qt, Dt + 1), yield tt.waitForTurn(et, Qt)) {
                  const et = tt.options.retry.maxAttempts - Dt,
                    qt = yield tt.runAttempt((() => Vt(et, !0)));
                  return Dt += qt.attemptsMade, {
                    kind: "success" === qt.kind ? "success" : "terminal",
                    attempts: Dt,
                    elapsedTimeMs: tt.options.getNow() - Ot,
                    failure: "success" === qt.kind ? void 0 : qt.failure
                  }
                }
              }
            }));
            return function(tt) {
              return Vt.apply(this, arguments)
            }
          }(),
          release: () => {
            Vt || (Vt = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const tt = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const et of tt) et.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((Vt, Ot) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const et = () => {
                this.inProgress--, this.runNextAttempt()
              };
              tt().then((tt => {
                et(), Vt(tt)
              }), (tt => {
                et(), Ot(tt)
              }))
            },
            isRedelivery: et
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const tt = this.options.getNow(),
            et = this.attemptQueue.findIndex((et => {
              let {
                isRedelivery: Vt
              } = et;
              return this.unloading || !Vt || tt >= this.nextSendAt
            }));
          if (et < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - tt)));
          const [Vt] = this.attemptQueue.splice(et, 1);
          Vt.isRedelivery && !this.unloading && (this.nextSendAt = tt + 1), Vt.run()
        }
      }
      waitForTurn(tt, et) {
        const Vt = Math.min(et * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((et => {
          this.waiting.push({
            sequence: tt,
            readyAt: this.options.getNow() + Vt,
            resolve: et
          }), this.waiting.sort(((tt, et) => tt.readyAt === et.readyAt ? tt.sequence - et.sequence : tt.readyAt - et.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const tt = this.waiting[0],
          et = tt.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const et = this.waiting.indexOf(tt);
          et >= 0 && this.waiting.splice(et, 1), tt.resolve(!1), this.scheduleNext()
        }), Math.max(0, et - this.options.getNow()))
      }
    };

    function lD(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if ({}.hasOwnProperty.call(tt, Ot)) {
            if (et.includes(Ot)) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.includes(Vt) || {}.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function ED(tt) {
      const {
        size: et,
        concurrency: Vt
      } = tt, Ot = [];
      let qt = 0;
      const Dt = () => {
        if (qt < Vt && Ot.length) {
          const {
            producer: tt,
            resolve: et,
            reject: Vt
          } = Ot.shift();
          qt++, tt().then((tt => {
            qt--, Dt(), et(tt)
          }), (tt => {
            qt--, Dt(), Vt(tt)
          }))
        }
      };
      return {
        add: tt => {
          if (Ot.length + qt >= et) throw new Error("Task buffer full");
          return new Promise(((et, Vt) => {
            Ot.push({
              producer: tt,
              resolve: et,
              reject: Vt
            }), Dt()
          }))
        }
      }
    }
    const fD = ["headers"],
      wD = ["keepalive", "signal"],
      yD = new Set([408, 425, 429, 500, 502, 503, 504]),
      ND = new Set([429, 503]);
    let aD = 0,
      MD = 0;
    var bD = class extends Error {};
    var JD = class extends sq {
      constructor(tt) {
        var et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt;
        super(), this.options = tt, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = OV, this.pendingCustomSends = 0, this.getNow = null !== (et = tt.getNow) && void 0 !== et ? et : Date.now, this.requestTimeoutMs = null !== (Vt = tt.requestTimeoutMs) && void 0 !== Vt ? Vt : 1e4, this.compressionEnabled = null !== (Ot = tt.requestCompression) && void 0 !== Ot && Ot && "undefined" !== typeof CompressionStream, tt.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new QD({
          bufferSize: null !== (qt = tt.bufferSize) && void 0 !== qt ? qt : 30,
          concurrency: null !== (Dt = tt.concurrency) && void 0 !== Dt ? Dt : 5,
          retry: {
            maxAttempts: null !== (mt = null === (dt = tt.retry) || void 0 === dt ? void 0 : dt.maxAttempts) && void 0 !== mt ? mt : 3,
            initialBackoffMs: null !== (jt = null !== (Ht = null === (Xt = tt.retry) || void 0 === Xt ? void 0 : Xt.initialBackoffMs) && void 0 !== Ht ? Ht : tt.defaultRateLimitBackoffMs) && void 0 !== jt ? jt : 1e3,
            maxBackoffMs: null !== (Qt = null === (lt = tt.retry) || void 0 === lt ? void 0 : lt.maxBackoffMs) && void 0 !== Qt ? Qt : 3e4,
            backoffMultiplier: null !== (Et = null === (ft = tt.retry) || void 0 === ft ? void 0 : ft.backoffMultiplier) && void 0 !== Et ? Et : 2
          },
          getNow: this.getNow,
          getRandom: null !== (wt = tt.getRandom) && void 0 !== wt ? wt : Math.random,
          onRetry: (tt, et) => {
            this.logDebug(`Retrying failed request after ${tt}ms. Attempt ${et}.`)
          }
        }), this.customPromiseBuffer = ED({
          size: null !== (yt = tt.bufferSize) && void 0 !== yt ? yt : 30,
          concurrency: null !== (Nt = tt.concurrency) && void 0 !== Nt ? Nt : 5
        }), this.defaultPromiseBuffer = {
          add: tt => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(tt);
            const et = this.deliveryQueue.reserve();
            if (!et) throw new Error("Task buffer full");
            return this.runBufferedTask(et, tt)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (tt => {
          tt.persisted && this.deliveryQueue.resume()
        })))
      }
      send(tt) {
        var et = this;
        return YO((function*() {
          const Vt = et.promiseBuffer;
          if (Vt !== et.defaultPromiseBuffer || Vt.add !== et.defaultBufferAdd) {
            et.pendingCustomSends++;
            try {
              yield Vt.add((() => et.deliver(tt)))
            } catch (Ot) {
              et.logError("Permanent delivery failure", {
                error: Ot,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              et.pendingCustomSends--
            }
          } else yield et.deliver(tt)
        }))()
      }
      runBufferedTask(tt, et) {
        return YO((function*() {
          let Vt;
          try {
            return yield tt.deliver(YO((function*() {
              return Vt = yield et(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), Vt
          } finally {
            tt.release()
          }
        }))()
      }
      deliver(tt) {
        var et = this;
        return YO((function*() {
          const Vt = et.deliveryQueue.reserve();
          if (Vt) try {
            const Ot = yield et.prepareRequest(tt), qt = yield Vt.deliver(((tt, Vt) => et.performAttempt(Ot, tt, Vt)));
            "terminal" === qt.kind && et.logError("retries-exhausted" === qt.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Qe(Qe({}, qt.failure), {}, {
              reason: qt.reason,
              attempts: qt.attempts,
              elapsedTimeMs: qt.elapsedTimeMs
            }))
          } catch (Ot) {
            et.logError("Permanent delivery failure", {
              error: Ot,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            Vt.release()
          } else et.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var tt;
        return [this.options.url].concat(null !== (tt = this.config.ignoreUrls) && void 0 !== tt ? tt : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(tt) {
        var et = this;
        return YO((function*() {
          var Vt, Ot;
          const qt = VD(tt),
            Dt = null === (Vt = qt.meta.session) || void 0 === Vt ? void 0 : Vt.id,
            mt = JSON.stringify(qt),
            dt = null !== (Ot = et.options.requestOptions) && void 0 !== Ot ? Ot : {},
            {
              headers: jt = {}
            } = dt,
            Ht = lD(dt, fD),
            {
              keepalive: Xt,
              signal: Qt
            } = Ht,
            lt = lD(Ht, wD),
            Et = {};
          for (const [tt, et] of Object.entries(jt)) Et[tt] = "function" === typeof et ? yield et(): et;
          let ft = mt,
            wt = function(tt) {
              return "undefined" === typeof TextEncoder ? tt.length : (new TextEncoder).encode(tt).byteLength
            }(mt);
          const yt = {};
          return et.compressionEnabled && (ft = yield et.compress(mt), wt = ft.size, yt["Content-Encoding"] = "gzip"), {
            bodySize: wt,
            sessionId: Dt,
            requestInit: Qe({
              method: "POST",
              headers: Qe(Qe(Qe(Qe(Qe({
                "Content-Type": "application/json"
              }, yt), Et), et.options.apiKey ? {
                "x-api-key": et.options.apiKey
              } : {}), Dt ? {
                "x-faro-session-id": Dt
              } : {}), {}, {
                "Idempotency-Key": ae(20)
              }),
              body: ft
            }, lt)
          }
        }))()
      }
      performAttempt(tt, et, Vt) {
        var Ot = this;
        return YO((function*() {
          var qt;
          const Dt = null === (qt = Ot.options.requestOptions) || void 0 === qt ? void 0 : qt.signal;
          if (null === Dt || void 0 === Dt ? void 0 : Dt.aborted) return {
            kind: "terminal",
            failure: {
              error: Dt.reason
            },
            attemptsMade: 0
          };
          let mt = 0;
          try {
            var dt;
            const qt = yield Ot.fetchWithKeepaliveFallback(tt.requestInit, tt.bodySize, !!Vt || (null === (dt = Ot.options.requestOptions) || void 0 === dt ? void 0 : dt.keepalive), et, (() => mt++));
            if (Ot.handleResponse(qt, tt.sessionId), qt.status >= 200 && qt.status < 300) return {
              kind: "success",
              attemptsMade: mt
            };
            const Dt = {
              status: qt.status
            };
            return !yD.has(qt.status) || Vt ? {
              kind: "terminal",
              failure: Dt,
              attemptsMade: mt
            } : {
              kind: "retry",
              failure: Dt,
              attemptsMade: mt,
              retryAfterMs: ND.has(qt.status) ? Ot.getRetryAfterDelayMs(qt) : void 0
            }
          } catch (jt) {
            const tt = {
              error: jt
            };
            return (null === Dt || void 0 === Dt ? void 0 : Dt.aborted) || !Ot.isFetchNetworkError(jt) || Vt ? {
              kind: "terminal",
              failure: tt,
              attemptsMade: mt
            } : {
              kind: "retry",
              failure: tt,
              attemptsMade: mt
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(tt, et, Vt, Ot, qt) {
        var Dt = this;
        return YO((function*() {
          const mt = Dt.getNow(),
            dt = Dt.reserveKeepalive(et, Vt);
          try {
            return yield Dt.fetchWithTimeout(Qe(Qe({}, tt), {}, {
              keepalive: dt.keepalive
            }), Dt.requestTimeoutMs, qt)
          } catch (Ht) {
            var jt;
            if (dt.keepalive && Ot > 1 && Dt.isFetchNetworkError(Ht) && !(Ht instanceof bD) && !(null === (jt = Dt.options.requestOptions) || void 0 === jt || null === (jt = jt.signal) || void 0 === jt ? void 0 : jt.aborted)) {
              Dt.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const et = Dt.requestTimeoutMs - (Dt.getNow() - mt);
              return Dt.fetchWithTimeout(Qe(Qe({}, tt), {}, {
                keepalive: !1
              }), et, qt)
            }
            throw Ht
          } finally {
            dt.release()
          }
        }))()
      }
      fetchWithTimeout(tt, et, Vt) {
        var Ot = this;
        return YO((function*() {
          var qt;
          const Dt = null === (qt = Ot.options.requestOptions) || void 0 === qt ? void 0 : qt.signal;
          if (Ot.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return Vt(), fetch(Ot.options.url, Qe(Qe({}, tt), {}, {
            signal: Dt
          }));
          if (et <= 0) throw new bD("Request timed out");
          const mt = new AbortController,
            dt = () => mt.abort(null === Dt || void 0 === Dt ? void 0 : Dt.reason);
          null === Dt || void 0 === Dt || Dt.addEventListener("abort", dt, {
            once: !0
          });
          let jt = !1;
          const Ht = setTimeout((() => {
            jt = !0, mt.abort()
          }), et);
          try {
            return Vt(), yield fetch(Ot.options.url, Qe(Qe({}, tt), {}, {
              signal: mt.signal
            }))
          } catch (Xt) {
            if (jt && !(null === Dt || void 0 === Dt ? void 0 : Dt.aborted)) throw new bD("Request timed out");
            throw Xt
          } finally {
            clearTimeout(Ht), null === Dt || void 0 === Dt || Dt.removeEventListener("abort", dt)
          }
        }))()
      }
      getRetryAfterDelayMs(tt) {
        const et = tt.headers.get("Retry-After");
        if (!et) return;
        if (/^\d+$/.test(et)) {
          const tt = 1e3 * Number(et);
          return Number.isFinite(tt) ? tt : Number.POSITIVE_INFINITY
        }
        const Vt = this.getNow(),
          Ot = function(tt, et) {
            const Vt = qD.exec(tt);
            if (Vt) {
              const [, tt, et, Ot, qt, Dt, mt, dt] = Vt;
              return XD({
                weekday: dD.indexOf(tt),
                day: Number(et),
                month: HD.indexOf(Ot),
                year: Number(qt),
                hour: Number(Dt),
                minute: Number(mt),
                second: Number(dt)
              })
            }
            const Ot = DD.exec(tt);
            if (Ot) {
              const [, tt, Vt, mt, dt, jt, Ht, Xt] = Ot, Qt = new Date(et);
              if (Number.isNaN(Qt.getTime())) return;
              const lt = Qt.getUTCFullYear();
              let Et = 100 * Math.floor(lt / 100) + Number(dt);
              Et < lt && (Et += 100);
              const ft = HD.indexOf(mt),
                wt = {
                  month: ft,
                  day: Number(Vt),
                  hour: Number(jt),
                  minute: Number(Ht),
                  second: Number(Xt),
                  millisecond: 0
                },
                yt = {
                  month: Qt.getUTCMonth(),
                  day: Qt.getUTCDate(),
                  hour: Qt.getUTCHours(),
                  minute: Qt.getUTCMinutes(),
                  second: Qt.getUTCSeconds(),
                  millisecond: Qt.getUTCMilliseconds()
                };
              return (Et > lt + 50 || Et === lt + 50 && (Dt = yt, ((qt = wt).month - Dt.month || qt.day - Dt.day || qt.hour - Dt.hour || qt.minute - Dt.minute || qt.second - Dt.second || qt.millisecond - Dt.millisecond) > 0)) && (Et -= 100), XD({
                weekday: jD.indexOf(tt),
                day: Number(Vt),
                month: ft,
                year: Et,
                hour: Number(jt),
                minute: Number(Ht),
                second: Number(Xt)
              })
            }
            var qt, Dt;
            const mt = mD.exec(tt);
            if (!mt) return;
            const [, dt, jt, Ht, Xt, Qt, lt, Et, ft] = mt;
            return XD({
              weekday: dD.indexOf(dt),
              day: Number(null !== Ht && void 0 !== Ht ? Ht : Xt),
              month: HD.indexOf(jt),
              year: Number(ft),
              hour: Number(Qt),
              minute: Number(lt),
              second: Number(Et)
            })
          }(et, Vt);
        return null == Ot ? void 0 : Math.max(0, Ot - Vt)
      }
      reserveKeepalive(tt, et) {
        if (!1 === et || tt > 6e4 || aD + tt > 6e4 || MD >= 9) return {
          keepalive: !1,
          release: ie
        };
        aD += tt, MD++;
        let Vt = !1;
        return {
          keepalive: !0,
          release: () => {
            Vt || (Vt = !0, aD -= tt, MD--)
          }
        }
      }
      handleResponse(tt, et) {
        202 === tt.status && "invalid" === tt.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), et), tt.text().catch(ie)
      }
      isFetchNetworkError(tt) {
        return tt instanceof TypeError || tt instanceof bD || tt instanceof DOMException && "AbortError" === tt.name
      }
      compress(tt) {
        return YO((function*() {
          const et = [],
            Vt = new ReadableStream({
              start(et) {
                et.enqueue((new TextEncoder).encode(tt)), et.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: tt,
              value: Ot
            } = yield Vt.read();
            if (tt) return new Blob(et);
            et.push(Ot)
          }
        }))()
      }
      extendFaroSession(tt, et, Vt) {
        var Ot, qt;
        const Dt = tt.sessionTracking;
        if (!(null === Dt || void 0 === Dt ? void 0 : Dt.enabled)) return void et("Session expired.");
        const {
          fetchUserSession: mt,
          storeUserSession: dt
        } = Ae(Dt), jt = null === (Ot = this.metas.value.session) || void 0 === Ot ? void 0 : Ot.id, Ht = null === (qt = mt()) || void 0 === qt ? void 0 : qt.sessionId;
        Vt && Vt === jt && Vt === Ht ? (Re({
          fetchUserSession: mt,
          storeUserSession: dt
        })({
          forceSessionExtend: !0
        }), et("Session expired; created new session.")) : et("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const CD = () => {
      const tt = window.k6;
      return {
        k6: Qe({
          isK6Browser: !0
        }, (null === tt || void 0 === tt ? void 0 : tt.testRunId) && {
          testRunId: null === tt || void 0 === tt ? void 0 : tt.testRunId
        })
      }
    };
    let uD, KD;

    function hD() {
      let {
        generatePageId: tt,
        initialPageMeta: et
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const Vt = location.href;
        return ct(tt) && uD !== Vt && (uD = Vt, KD = tt(location)), {
          page: Qe(Qe({
            url: Vt
          }, KD ? {
            id: KD
          } : {}), et)
        }
      }
    }

    function vD() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tV,
        et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Vt = Be;
      return et > 0 && (Vt.error = et >= 1 ? function() {
        for (var et = arguments.length, Ot = new Array(et), qt = 0; qt < et; qt++) Ot[qt] = arguments[qt];
        tt.error(`${Vt.prefix}\n`, ...Ot)
      } : ie, Vt.warn = et >= 2 ? function() {
        for (var et = arguments.length, Ot = new Array(et), qt = 0; qt < et; qt++) Ot[qt] = arguments[qt];
        tt.warn(`${Vt.prefix}\n`, ...Ot)
      } : ie, Vt.info = et >= 3 ? function() {
        for (var et = arguments.length, Ot = new Array(et), qt = 0; qt < et; qt++) Ot[qt] = arguments[qt];
        tt.info(`${Vt.prefix}\n`, ...Ot)
      } : ie, Vt.debug = et >= 4 ? function() {
        for (var et = arguments.length, Ot = new Array(et), qt = 0; qt < et; qt++) Ot[qt] = arguments[qt];
        tt.debug(`${Vt.prefix}\n`, ...Ot)
      } : ie), Vt
    }
    const WD = "faro",
      SD = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      cD = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function RD(tt) {
      var et, Vt, qt, Dt, mt, dt;
      const jt = [],
        Xt = vD(tt.unpatchedConsole, tt.internalLoggerLevel);
      tt.transports ? ((tt.url || tt.apiKey) && Xt.error('if "transports" is defined, "url" and "apiKey" should not be defined'), jt.push(...tt.transports)) : tt.url ? jt.push(new JD({
        url: tt.url,
        apiKey: tt.apiKey,
        requestCompression: tt.requestCompression
      })) : Xt.error('either "url" or "transports" must be defined');
      const {
        dedupe: Qt = !0,
        eventDomain: lt = Ot,
        globalObjectKey: Et = WD,
        instrumentations: ft = Uq(),
        internalLoggerLevel: wt = pe,
        isolate: yt = !1,
        logArgsSerializer: Nt = IV,
        metas: Mt = PD(tt),
        paused: bt = !1,
        preventGlobalExposure: Jt = !1,
        unpatchedConsole: Ct = tV,
        url: ut,
        experimental: Kt
      } = tt, ht = lD(tt, cD), vt = null !== (et = null === Kt || void 0 === Kt ? void 0 : Kt.trackNavigation) && void 0 !== et && et, Wt = {
        dataAttributeName: sO(null !== (Vt = null === (qt = tt.userActionsInstrumentation) || void 0 === qt ? void 0 : qt.dataAttributeName) && void 0 !== Vt ? Vt : xO),
        excludeItem: null === (Dt = tt.userActionsInstrumentation) || void 0 === Dt ? void 0 : Dt.excludeItem,
        initialActivityTimeout: nO(null === (mt = tt.userActionsInstrumentation) || void 0 === mt ? void 0 : mt.initialActivityTimeout, 100, (tt => Xt.warn(tt)))
      };
      return Qe(Qe({}, ht), {}, {
        batching: Qe(Qe({}, SD), tt.batching),
        dedupe: Qt,
        globalObjectKey: Et,
        instrumentations: ID(ft, tt),
        internalLoggerLevel: wt,
        isolate: yt,
        logArgsSerializer: Nt,
        metas: Mt,
        parseStacktrace: yV,
        paused: bt,
        preventGlobalExposure: Jt,
        transports: jt,
        unpatchedConsole: Ct,
        eventDomain: lt,
        ignoreUrls: [...null !== (dt = tt.ignoreUrls) && void 0 !== dt ? dt : [], ...ut ? [ut] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Qe(Qe(Qe({}, Ht), tt.sessionTracking), ZD({
          trackGeolocation: tt.trackGeolocation,
          sessionTracking: tt.sessionTracking
        })),
        userActionsInstrumentation: Wt,
        experimental: {
          trackNavigation: vt
        }
      })
    }

    function ID(tt, et) {
      let {
        experimental: Vt
      } = et;
      var Ot;
      const qt = null !== (Ot = null === Vt || void 0 === Vt ? void 0 : Vt.trackNavigation) && void 0 !== Ot && Ot;
      return tt.filter((tt => !("@grafana/faro-web-sdk:instrumentation-navigation" === tt.name && !qt)))
    }

    function PD(tt) {
      var et, Vt, Ot;
      const {
        page: qt,
        generatePageId: Dt
      } = null !== (et = null === tt || void 0 === tt ? void 0 : tt.pageTracking) && void 0 !== et ? et : {}, mt = [pq, xq, hD({
        generatePageId: Dt,
        initialPageMeta: qt
      }), ...null !== (Vt = tt.metas) && void 0 !== Vt ? Vt : [], gq];
      return St(null === (Ot = window) || void 0 === Ot ? void 0 : Ot.k6) ? [...mt, CD] : mt
    }

    function ZD(tt) {
      let {
        trackGeolocation: et,
        sessionTracking: Vt
      } = tt;
      var Ot;
      const qt = {};
      return vt(et) && (qt.geoLocationTrackingEnabled = et), pt(qt) ? {} : {
        session: Qe(Qe({}, null !== (Ot = null === Vt || void 0 === Vt ? void 0 : Vt.session) && void 0 !== Ot ? Ot : {}), {}, {
          overrides: qt
        })
      }
    }
    const LD = new WeakSet;

    function FD(tt) {
      return LD.add(tt), tt
    }

    function kD(tt, et) {
      if (tt.capture) return FD(tt.capture(et));
      const Vt = FD(tt.value);
      return null === et || void 0 === et || et(), Vt
    }

    function GD(tt) {
      const et = `__faroBundleId_${tt}`,
        Vt = null === Xt || void 0 === Xt ? void 0 : Xt[et];
      if ("string" === typeof Vt && "" !== Vt) return Vt;
      const Ot = "undefined" !== typeof window ? window[et] : void 0;
      return "string" === typeof Ot && "" !== Ot ? Ot : void 0
    }

    function zD(tt) {
      var et, Vt;
      const Ot = tt.config.app.name,
        qt = Ot ? function(tt) {
          return null === Xt || void 0 === Xt ? void 0 : Xt[`__faroGitHash_${tt}`]
        }(Ot) : void 0,
        Dt = {
          sdk: {
            version: OV,
            name: "faro"
          },
          app: ne({
            bundleId: Ot && GD(Ot)
          }, void 0 !== qt ? {
            gitHash: qt
          } : {})
        },
        mt = null === (et = tt.config.sessionTracking) || void 0 === et ? void 0 : et.session;
      mt && tt.api.setSession(mt), tt.config.app && (Dt.app = ne(ne({}, tt.config.app), Dt.app)), tt.config.user && (Dt.user = tt.config.user), tt.config.view && (Dt.view = tt.config.view), tt.metas.add(Dt, ...null !== (Vt = tt.config.metas) && void 0 !== Vt ? Vt : [])
    }
    var oD = class {
      constructor(tt, et) {
        var Vt, Ot;
        this.signalBuffer = [], this.itemLimit = null !== (Vt = null === et || void 0 === et ? void 0 : et.itemLimit) && void 0 !== Vt ? Vt : 50, this.sendTimeout = null !== (Ot = null === et || void 0 === et ? void 0 : et.sendTimeout) && void 0 !== Ot ? Ot : 250, this.paused = (null === et || void 0 === et ? void 0 : et.paused) || !1, this.sendFn = tt, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(tt) {
        this.paused || (this.signalBuffer.push(tt), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(tt) {
        const et = new Map;
        return tt.forEach((tt => {
          const Vt = JSON.stringify(tt.meta);
          let Ot = et.get(Vt);
          Ot = void 0 === Ot ? [tt] : [...Ot, tt], et.set(Vt, Ot)
        })), Array.from(et.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const tt = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(tt).forEach(this.sendFn)
        } catch (et) {
          throw this.signalBuffer = [...tt, ...this.signalBuffer], this.trimBufferToLimit(), et
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function rD(tt, et, Vt, Ot) {
      var qt;
      et.debug("Initializing transports");
      const Dt = [];
      let mt = [];
      const dt = tt => {
        let et = tt;
        for (const Ot of mt) {
          const tt = et.map(Ot).filter(Boolean);
          if (0 === tt.length) return [];
          et = UD(tt, Vt)
        }
        return et
      };
      let jt;
      (null === (qt = Vt.batching) || void 0 === qt ? void 0 : qt.enabled) && (jt = new oD((tt => {
        const Vt = dt(tt);
        if (0 !== Vt.length)
          for (const Ot of Dt) et.debug(`Transporting item using ${Ot.name}\n`, Vt), Ot.isBatched() && Ot.send(Vt)
      }), {
        sendTimeout: Vt.batching.sendTimeout,
        itemLimit: Vt.batching.itemLimit,
        paused: Vt.paused
      }));
      return {
        add: function() {
          et.debug("Adding transports");
          for (var qt = arguments.length, mt = new Array(qt), dt = 0; dt < qt; dt++) mt[dt] = arguments[dt];
          mt.forEach((qt => {
            et.debug(`Adding "${qt.name}" transport`), Dt.some((tt => tt === qt)) ? et.warn(`Transport ${qt.name} is already added`) : (qt.unpatchedConsole = tt, qt.internalLogger = et, qt.config = Vt, qt.metas = Ot, Dt.push(qt))
          }))
        },
        addBeforeSendHooks: function() {
          et.debug("Adding beforeSendHooks\n", mt);
          for (var tt = arguments.length, Vt = new Array(tt), Ot = 0; Ot < tt; Ot++) Vt[Ot] = arguments[Ot];
          Vt.forEach((tt => {
            tt && mt.push(tt)
          }))
        },
        getBeforeSendHooks: () => [...mt],
        execute: tt => {
          var qt;
          if (!Vt.paused && re(Ot).shouldCapture()) {
            if (Qt = tt.meta, !LD.has(Qt)) {
              var mt, Ht, Xt;
              const et = null === (mt = Ot.value.session) || void 0 === mt ? void 0 : mt.id,
                qt = kD(Ot);
              if (Vt.paused) return;
              const Dt = ne({}, tt.meta);
              (null === (Ht = Dt.session) || void 0 === Ht ? void 0 : Ht.id) === et && (null === (Xt = qt.session) || void 0 === Xt ? void 0 : Xt.id) !== et && (void 0 === qt.session ? delete Dt.session : Dt.session = qt.session), tt = ne(ne({}, tt), {}, {
                meta: FD(Dt)
              })
            }
            var Qt;
            (null === (qt = Vt.batching) || void 0 === qt ? void 0 : qt.enabled) && (null === jt || void 0 === jt || jt.addItem(tt)), (tt => {
              var Ot;
              if ((null === (Ot = Vt.batching) || void 0 === Ot ? void 0 : Ot.enabled) && Dt.every((tt => tt.isBatched()))) return;
              const [qt] = dt([tt]);
              if (void 0 !== qt)
                for (const dt of Dt) {
                  var mt;
                  et.debug(`Transporting item using ${dt.name}\n`, qt), dt.isBatched() ? (null === (mt = Vt.batching) || void 0 === mt ? void 0 : mt.enabled) || dt.send([qt]) : dt.send(qt)
                }
            })(tt)
          }
        },
        isPaused: () => Vt.paused,
        pause: () => {
          et.debug("Pausing transports"), null === jt || void 0 === jt || jt.pause(), Vt.paused = !0
        },
        remove: function() {
          et.debug("Removing transports");
          for (var tt = arguments.length, Vt = new Array(tt), Ot = 0; Ot < tt; Ot++) Vt[Ot] = arguments[Ot];
          Vt.forEach((tt => {
            et.debug(`Removing "${tt.name}" transport`);
            const Vt = Dt.indexOf(tt); - 1 !== Vt ? Dt.splice(Vt, 1) : et.warn(`Transport "${tt.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var tt = arguments.length, Vt = new Array(tt), Ot = 0; Ot < tt; Ot++) Vt[Ot] = arguments[Ot];
          et.debug("Removing beforeSendHooks"), mt = mt.filter((tt => !Vt.includes(tt)))
        },
        get transports() {
          return [...Dt]
        },
        unpause: () => {
          et.debug("Unpausing transports"), null === jt || void 0 === jt || jt.start(), Vt.paused = !1
        }
      }
    }

    function UD(tt, et) {
      if (et.preserveOriginalError)
        for (const Vt of tt) "exception" === Vt.type && delete Vt.payload.originalError;
      return tt
    }
    let AD = tV;

    function iD(tt) {
      var et;
      return AD = null !== (et = tt.unpatchedConsole) && void 0 !== et ? et : AD, AD
    }
    let YD, BD = Be;

    function pD(tt, et) {
      return BD = vD(tt, et.internalLoggerLevel), BD
    }

    function xD(tt) {
      let {
        internalLogger: et,
        config: Vt,
        metas: Ot,
        transports: qt,
        tracesApi: Dt,
        userActionsApi: mt
      } = tt;
      var dt;
      et.debug("Initializing exceptions API");
      let jt = null;
      YD = null !== (dt = Vt.parseStacktrace) && void 0 !== dt ? dt : YD;
      const Ht = tt => {
          et.debug("Changing stacktrace parser"), YD = null !== tt && void 0 !== tt ? tt : YD
        },
        {
          ignoreErrors: Xt = [],
          preserveOriginalError: Qt
        } = Vt;
      return Ht(Vt.parseStacktrace), {
        changeStacktraceParser: Ht,
        getStacktraceParser: () => YD,
        pushError: function(tt) {
          let {
            skipDedupe: dt,
            stackFrames: Ht,
            type: lt,
            context: Et,
            spanContext: ft,
            timestampOverwriteMs: wt,
            originalError: yt,
            fingerprint: Nt,
            fatal: Mt
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(tt, et) {
              const {
                message: Vt,
                name: Ot,
                stack: qt
              } = et;
              return Dt = tt, mt = Vt + " " + Ot + " " + qt, Dt.some((tt => ut(tt) ? mt.includes(tt) : !!mt.match(tt)));
              var Dt, mt
            }(Xt, null !== yt && void 0 !== yt ? yt : tt)) try {
            var bt, Jt;
            if (!re(Ot).shouldCapture()) return;
            const Xt = ke(ne(ne({}, function(tt) {
                let et = tt.cause;
                Gt(et) ? et = tt.cause.toString() : null !== et && (St(tt.cause) || Rt(tt.cause)) ? et = Fe(tt.cause) : null != et && (et = tt.cause.toString());
                return null == et ? {} : {
                  cause: et
                }
              }(null !== yt && void 0 !== yt ? yt : tt)), null !== Et && void 0 !== Et ? Et : {})),
              ut = ne(ne(ne(ne({
                type: lt || tt.name || "Error",
                value: tt.message,
                timestamp: wt ? ye(wt) : we(),
                trace: ft ? {
                  trace_id: ft.traceId,
                  span_id: ft.spanId
                } : Dt.getTraceContext()
              }, pt(Xt) ? {} : {
                context: Xt
              }), Qt ? {
                originalError: yt
              } : {}), Nt ? {
                fingerprint: Nt
              } : {}), void 0 !== Mt ? {
                fatal: Mt
              } : {});
            Ht = null !== (bt = Ht) && void 0 !== bt ? bt : tt.stack ? null === YD || void 0 === YD ? void 0 : YD(tt).frames : void 0, (null === Ht || void 0 === Ht ? void 0 : Ht.length) && (ut.stacktrace = {
              frames: Ht
            });
            const Kt = {
              type: ut.type,
              value: ut.value,
              stacktrace: ut.stacktrace,
              context: ut.context,
              fingerprint: ut.fingerprint,
              fatal: null !== (Jt = ut.fatal) && void 0 !== Jt && Jt
            };
            if (!dt && Vt.dedupe && !Ct(jt) && Me(Kt, jt)) return void et.debug("Skipping error push because it is the same as the last one\n", ut);
            const ht = jt,
              vt = kD(Ot);
            if (jt !== ht && !dt && Vt.dedupe && Me(Kt, jt)) return;
            jt = Kt;
            const Wt = {
              meta: vt,
              payload: ut,
              type: "exception"
            };
            et.debug("Pushing exception\n", Wt), uq(mt.getActiveUserAction(), Wt) || qt.execute(Wt)
          } catch (Kt) {
            et.error("Error pushing event", Kt)
          }
        }
      }
    }

    function TD(tt, et, Vt, Ot, qt) {
      et.debug("Initializing API");
      let Dt = null;
      const mt = function(tt) {
          let {
            transports: et,
            internalLogger: Vt,
            config: Ot,
            pushEvent: qt
          } = tt;
          var Dt;
          const mt = null === (Dt = Ot.userActionsInstrumentation) || void 0 === Dt ? void 0 : Dt.excludeItem;
          let dt;
          const jt = () => dt;
          return {
            startUserAction: (tt, Ot, Dt) => {
              if (void 0 === jt()) {
                const Vt = new Jq({
                  name: tt,
                  transports: et,
                  attributes: Ot,
                  trigger: (null === Dt || void 0 === Dt ? void 0 : Dt.triggerName) || "faroApiCall",
                  importance: (null === Dt || void 0 === Dt ? void 0 : Dt.importance) || Mq.Normal,
                  trackUserActionsExcludeItem: mt,
                  pushEvent: qt
                });
                return Vt.filter((tt => [3, 2].includes(tt))).first().subscribe((() => {
                  dt = void 0
                })), Cq.notify({
                  type: aq,
                  userAction: Vt,
                  initialActivityTimeout: null === Dt || void 0 === Dt ? void 0 : Dt.initialActivityTimeout
                }), dt = Vt, dt
              }
              Vt.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: jt
          }
        }({
          transports: qt,
          config: Vt,
          internalLogger: et,
          pushEvent: (tt, Vt, Ot, qt) => {
            Dt ? Dt(tt, Vt, Ot, qt) : et.warn("pushEventImpl is not initialized. Event dropped:", {
              name: tt,
              attributes: Vt,
              domain: Ot,
              options: qt
            })
          }
        }),
        dt = function(tt, et, Vt, Ot, qt) {
          let Dt;
          return et.debug("Initializing traces API"), {
            getOTEL: () => Dt,
            getTraceContext: () => {
              const tt = null === Dt || void 0 === Dt ? void 0 : Dt.trace.getSpanContext(Dt.context.active());
              return tt ? {
                trace_id: tt.traceId,
                span_id: tt.spanId
              } : void 0
            },
            initOTEL: (tt, Vt) => {
              et.debug("Initializing OpenTelemetry"), Dt = {
                trace: tt,
                context: Vt
              }
            },
            isOTELInitialized: () => !!Dt,
            pushTraces: tt => {
              try {
                if (!re(Ot).shouldCapture()) return;
                const Vt = {
                  type: "trace",
                  payload: tt,
                  meta: kD(Ot)
                };
                et.debug("Pushing trace\n", Vt), qt.execute(Vt)
              } catch (Vt) {
                et.error("Error pushing trace\n", Vt)
              }
            }
          }
        }(0, et, 0, Ot, qt),
        jt = {
          unpatchedConsole: tt,
          internalLogger: et,
          userActionsApi: mt,
          config: Vt,
          metas: Ot,
          transports: qt,
          tracesApi: dt
        },
        Ht = function(tt) {
          let {
            internalLogger: et,
            config: Vt,
            metas: Ot,
            transports: qt,
            tracesApi: Dt,
            userActionsApi: mt
          } = tt, dt = null;
          return {
            pushEvent: function(tt, jt, Ht) {
              let {
                skipDedupe: Xt,
                spanContext: Qt,
                timestampOverwriteMs: lt,
                customPayloadTransformer: Et = tt => tt
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!re(Ot).shouldCapture()) return;
                const ft = ke(jt),
                  wt = Et({
                    name: tt,
                    domain: null !== Ht && void 0 !== Ht ? Ht : Vt.eventDomain,
                    attributes: pt(ft) ? void 0 : ft,
                    timestamp: lt ? ye(lt) : we(),
                    trace: Qt ? {
                      trace_id: Qt.traceId,
                      span_id: Qt.spanId
                    } : Dt.getTraceContext()
                  }),
                  yt = {
                    name: wt.name,
                    attributes: wt.attributes,
                    domain: wt.domain
                  };
                if (!Xt && Vt.dedupe && !Ct(dt) && Me(yt, dt)) return void et.debug("Skipping event push because it is the same as the last one\n", wt);
                const Nt = dt,
                  Mt = kD(Ot);
                if (dt !== Nt && !Xt && Vt.dedupe && Me(yt, dt)) return;
                dt = yt;
                const bt = {
                  meta: Mt,
                  payload: wt,
                  type: "event"
                };
                et.debug("Pushing event\n", bt), uq(mt.getActiveUserAction(), bt) || qt.execute(bt)
              } catch (ft) {
                et.error("Error pushing event", ft)
              }
            }
          }
        }(jt);
      return Dt = Ht.pushEvent, ne(ne(ne(ne(ne(ne(ne({}, dt), xD(jt)), function(tt) {
        let et, Vt, Ot, qt, {
          internalLogger: Dt,
          metas: mt
        } = tt;
        Dt.debug("Initializing meta API");
        const dt = tt => {
            Vt && mt.remove(Vt), Vt = {
              user: tt
            }, mt.add(Vt)
          },
          jt = (tt, Vt) => {
            var Ot;
            const qt = null === Vt || void 0 === Vt ? void 0 : Vt.overrides,
              Dt = qt ? {
                overrides: ne(ne({}, null === et || void 0 === et || null === (Ot = et.session) || void 0 === Ot ? void 0 : Ot.overrides), qt)
              } : {};
            et && mt.remove(et), et = {
              session: ne(ne({}, pt(tt) ? void 0 : tt), Dt)
            }, mt.add(et)
          },
          Ht = (tt, et) => {
            re(mt).notifySessionUpdate({
              type: "replace",
              session: tt,
              overrides: null === et || void 0 === et ? void 0 : et.overrides
            }), jt(tt, et)
          },
          Xt = () => mt.value.session,
          Qt = () => mt.value.page;
        return {
          setUser: dt,
          resetUser: dt,
          setSession: Ht,
          resetSession: Ht,
          getSession: Xt,
          setView: (tt, et) => {
            var Vt;
            if ((null === et || void 0 === et ? void 0 : et.overrides) && (re(mt).notifySessionUpdate({
                type: "overrides",
                overrides: et.overrides
              }), jt(Xt(), {
                overrides: et.overrides
              })), (null === Ot || void 0 === Ot || null === (Vt = Ot.view) || void 0 === Vt ? void 0 : Vt.name) === (null === tt || void 0 === tt ? void 0 : tt.name)) return;
            const qt = Ot;
            Ot = {
              view: tt
            }, mt.add(Ot), qt && mt.remove(qt)
          },
          getView: () => mt.value.view,
          setPage: tt => {
            var et;
            const Vt = ut(tt) ? ne(ne({}, null !== (et = null === qt || void 0 === qt ? void 0 : qt.page) && void 0 !== et ? et : Qt()), {}, {
              id: tt
            }) : tt;
            qt && mt.remove(qt), qt = {
              page: Vt
            }, mt.add(qt)
          },
          getPage: Qt
        }
      }(jt)), function(tt) {
        let {
          internalLogger: et,
          config: Vt,
          metas: Ot,
          transports: qt,
          tracesApi: Dt,
          userActionsApi: mt
        } = tt;
        var dt;
        et.debug("Initializing logs API");
        let jt = null;
        const Ht = null !== (dt = Vt.logArgsSerializer) && void 0 !== dt ? dt : IV;
        return {
          pushLog: function(tt) {
            let {
              context: dt,
              level: Xt,
              skipDedupe: Qt,
              spanContext: lt,
              timestampOverwriteMs: Et
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!re(Ot).shouldCapture()) return;
              const ft = ke(dt),
                wt = {
                  message: Ht(tt),
                  level: null !== Xt && void 0 !== Xt ? Xt : "log",
                  context: pt(ft) ? void 0 : ft,
                  timestamp: Et ? ye(Et) : we(),
                  trace: lt ? {
                    trace_id: lt.traceId,
                    span_id: lt.spanId
                  } : Dt.getTraceContext()
                },
                yt = {
                  message: wt.message,
                  level: wt.level,
                  context: wt.context
                };
              if (!Qt && Vt.dedupe && !Ct(jt) && Me(yt, jt)) return void et.debug("Skipping log push because it is the same as the last one\n", wt);
              const Nt = jt,
                Mt = kD(Ot);
              if (jt !== Nt && !Qt && Vt.dedupe && Me(yt, jt)) return;
              jt = yt;
              const bt = {
                type: "log",
                payload: wt,
                meta: Mt
              };
              et.debug("Pushing log\n", bt), uq(mt.getActiveUserAction(), bt) || qt.execute(bt)
            } catch (ft) {
              et.error("Error pushing log\n", ft)
            }
          }
        }
      }(jt)), function(tt) {
        let {
          internalLogger: et,
          config: Vt,
          metas: Ot,
          transports: qt,
          tracesApi: Dt,
          userActionsApi: mt
        } = tt;
        et.debug("Initializing measurements API");
        let dt = null;
        return {
          pushMeasurement: function(tt) {
            let {
              skipDedupe: jt,
              context: Ht,
              spanContext: Xt,
              timestampOverwriteMs: Qt
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!re(Ot).shouldCapture()) return;
              const lt = ke(Ht),
                Et = ne(ne({}, tt), {}, {
                  trace: Xt ? {
                    trace_id: Xt.traceId,
                    span_id: Xt.spanId
                  } : Dt.getTraceContext(),
                  timestamp: Qt ? ye(Qt) : we(),
                  context: pt(lt) ? void 0 : lt
                }),
                ft = {
                  type: Et.type,
                  values: Et.values,
                  context: Et.context
                };
              if (!jt && Vt.dedupe && !Ct(dt) && Me(ft, dt)) return void et.debug("Skipping measurement push because it is the same as the last one\n", Et);
              const wt = dt,
                yt = kD(Ot);
              if (dt !== wt && !jt && Vt.dedupe && Me(ft, dt)) return;
              dt = ft;
              const Nt = {
                type: "measurement",
                payload: Et,
                meta: yt
              };
              et.debug("Pushing measurement\n", Nt), uq(mt.getActiveUserAction(), Nt) || qt.execute(Nt)
            } catch (lt) {
              et.error("Error pushing measurement\n", lt)
            }
          }
        }
      }(jt)), Ht), mt)
    }

    function gD(tt) {
      const et = iD(tt),
        Vt = pD(et, tt);
      if (ft() && !tt.isolate) return void Vt.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      Vt.debug("Initializing");
      const Ot = function(tt, et) {
          let Vt, Ot = [],
            qt = [],
            Dt = [],
            mt = 0,
            dt = 0;
          const jt = () => Ot.reduce(((tt, et) => Object.assign(tt, ct(et) ? et() : et)), {}),
            Ht = () => {
              if (qt.length) {
                const tt = jt();
                qt.forEach((et => et(tt)))
              }
            };
          return {
            add: function() {
              for (var tt = arguments.length, Vt = new Array(tt), qt = 0; qt < tt; qt++) Vt[qt] = arguments[qt];
              et.debug("Adding metas\n", Vt), Ot.push(...Vt), Ht()
            },
            remove: function() {
              for (var tt = arguments.length, Vt = new Array(tt), qt = 0; qt < tt; qt++) Vt[qt] = arguments[qt];
              et.debug("Removing metas\n", Vt), Ot = Ot.filter((tt => !Vt.includes(tt))), Ht()
            },
            addListener: tt => {
              et.debug("Adding metas listener\n", tt), qt.push(tt)
            },
            removeListener: tt => {
              et.debug("Removing metas listener\n", tt), qt = qt.filter((et => et !== tt))
            },
            capture: tt => {
              var et;
              const Ot = void 0 !== Vt,
                qt = null !== (et = Vt) && void 0 !== et ? et : Dt;
              Ot || (Vt = qt, mt = 0, dt = qt.length);
              try {
                for (; mt < dt;) {
                  const tt = qt[mt++];
                  null === tt || void 0 === tt || tt()
                }
                const et = FD(jt());
                return null === tt || void 0 === tt || tt(), et
              } finally {
                Ot || (Vt = void 0)
              }
            },
            addCaptureListener: tt => {
              Dt.push(tt)
            },
            removeCaptureListener: tt => {
              Dt = Dt.filter((et => et !== tt))
            },
            get value() {
              return jt()
            }
          }
        }(0, Vt),
        qt = rD(et, Vt, tt, Ot),
        Dt = TD(et, Vt, tt, Ot, qt),
        mt = function(tt, et, Vt, Ot, qt, Dt) {
          et.debug("Initializing instrumentations");
          const mt = [];
          return {
            add: function() {
              et.debug("Adding instrumentations");
              for (var dt = arguments.length, jt = new Array(dt), Ht = 0; Ht < dt; Ht++) jt[Ht] = arguments[Ht];
              jt.forEach((dt => {
                et.debug(`Adding "${dt.name}" instrumentation`), mt.some((tt => tt.name === dt.name)) ? et.warn(`Instrumentation ${dt.name} is already added`) : (dt.unpatchedConsole = tt, dt.internalLogger = et, dt.config = Vt, dt.metas = Ot, dt.transports = qt, dt.api = Dt, mt.push(dt), dt.initialize())
              }))
            },
            get instrumentations() {
              return [...mt]
            },
            remove: function() {
              et.debug("Removing instrumentations");
              for (var tt = arguments.length, Vt = new Array(tt), Ot = 0; Ot < tt; Ot++) Vt[Ot] = arguments[Ot];
              Vt.forEach((tt => {
                var Vt, Ot;
                et.debug(`Removing "${tt.name}" instrumentation`);
                const qt = mt.reduce(((et, Vt, Ot) => null === et && Vt.name === tt.name ? Ot : null), null);
                null !== qt ? (null === (Vt = (Ot = mt[qt]).destroy) || void 0 === Vt || Vt.call(Ot), mt.splice(qt, 1)) : et.warn(`Instrumentation "${tt.name}" is not added`)
              }))
            }
          }
        }(et, Vt, tt, Ot, qt, Dt),
        dt = yt(et, Vt, tt, Ot, qt, Dt, mt);
      return zD(dt),
        function(tt) {
          tt.transports.add(...tt.config.transports), tt.transports.addBeforeSendHooks(tt.config.beforeSend)
        }(dt),
        function(tt) {
          tt.instrumentations.add(...tt.config.instrumentations)
        }(dt), dt
    }

    function sD(tt) {
      const et = RD(tt);
      if (et) return gD(et)
    }
  },
  6918: function(tt, et, Vt) {
    var Ot;
    ! function(qt, Dt) {
      var mt = "function",
        dt = "undefined",
        jt = "object",
        Ht = "string",
        Xt = "major",
        Qt = "model",
        lt = "name",
        Et = "type",
        ft = "vendor",
        wt = "version",
        yt = "architecture",
        Nt = "console",
        Mt = "mobile",
        bt = "tablet",
        Jt = "smarttv",
        Ct = "wearable",
        ut = "embedded",
        Kt = "Amazon",
        ht = "Apple",
        vt = "ASUS",
        Wt = "BlackBerry",
        St = "Browser",
        ct = "Chrome",
        Rt = "Firefox",
        It = "Google",
        Pt = "Honor",
        Zt = "Huawei",
        Lt = "LG",
        Ft = "Microsoft",
        kt = "Motorola",
        Gt = "Nvidia",
        zt = "OnePlus",
        ot = "Opera",
        rt = "OPPO",
        Ut = "Samsung",
        At = "Sharp",
        it = "Sony",
        Yt = "Xiaomi",
        Bt = "Zebra",
        pt = "Facebook",
        xt = "Chromium OS",
        Tt = "Mac OS",
        gt = " Browser",
        st = function(tt) {
          for (var et = {}, Vt = 0; Vt < tt.length; Vt++) et[tt[Vt].toUpperCase()] = tt[Vt];
          return et
        },
        nt = function(tt, et) {
          return typeof tt === Ht && -1 !== te(et).indexOf(te(tt))
        },
        te = function(tt) {
          return tt.toLowerCase()
        },
        ee = function(tt, et) {
          if (typeof tt === Ht) return tt = tt.replace(/^\s\s*/, ""), typeof et === dt ? tt : tt.substring(0, 500)
        },
        Ve = function(tt, et) {
          for (var Vt, Ot, qt, dt, Ht, Xt, Qt = 0; Qt < et.length && !Ht;) {
            var lt = et[Qt],
              Et = et[Qt + 1];
            for (Vt = Ot = 0; Vt < lt.length && !Ht && lt[Vt];)
              if (Ht = lt[Vt++].exec(tt))
                for (qt = 0; qt < Et.length; qt++) Xt = Ht[++Ot], typeof(dt = Et[qt]) === jt && dt.length > 0 ? 2 === dt.length ? typeof dt[1] == mt ? this[dt[0]] = dt[1].call(this, Xt) : this[dt[0]] = dt[1] : 3 === dt.length ? typeof dt[1] !== mt || dt[1].exec && dt[1].test ? this[dt[0]] = Xt ? Xt.replace(dt[1], dt[2]) : Dt : this[dt[0]] = Xt ? dt[1].call(this, Xt, dt[2]) : Dt : 4 === dt.length && (this[dt[0]] = Xt ? dt[3].call(this, Xt.replace(dt[1], dt[2])) : Dt) : this[dt] = Xt || Dt;
            Qt += 2
          }
        },
        Oe = function(tt, et) {
          for (var Vt in et)
            if (typeof et[Vt] === jt && et[Vt].length > 0) {
              for (var Ot = 0; Ot < et[Vt].length; Ot++)
                if (nt(et[Vt][Ot], tt)) return "?" === Vt ? Dt : Vt
            } else if (nt(et[Vt], tt)) return "?" === Vt ? Dt : Vt;
          return et.hasOwnProperty("*") ? et["*"] : tt
        },
        qe = {
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
        De = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [wt, [lt, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [wt, [lt, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [lt, wt],
            [/opios[\/ ]+([\w\.]+)/i],
            [wt, [lt, ot + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [wt, [lt, ot + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [wt, [lt, ot]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [wt, [lt, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [wt, [lt, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [lt, wt],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [wt, [lt, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [wt, [lt, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [wt, [lt, "UC" + St]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [wt, [lt, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [wt, [lt, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [wt, [lt, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [wt, [lt, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [wt, [lt, "Smart Lenovo " + St]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [lt, /(.+)/, "$1 Secure " + St], wt
            ],
            [/\bfocus\/([\w\.]+)/i],
            [wt, [lt, Rt + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [wt, [lt, ot + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [wt, [lt, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [wt, [lt, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [wt, [lt, ot + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [wt, [lt, "MIUI" + gt]],
            [/fxios\/([\w\.-]+)/i],
            [wt, [lt, Rt]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [wt, [lt, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [lt, /(.+)/, "$1Browser"], wt
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [lt, /(.+)/, "$1" + gt], wt
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [wt, [lt, Ut + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [wt, [lt, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [lt, "Sogou Mobile"], wt
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [lt, wt],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [lt],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [wt, lt],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [lt, pt], wt
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [lt, wt],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [wt, [lt, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [wt, [lt, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [wt, [lt, ct + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [lt, ct + " WebView"], wt
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [wt, [lt, "Android " + St]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [lt, wt],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [wt, [lt, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [wt, lt],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [lt, [wt, Oe, {
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
            [lt, wt],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [lt, "Netscape"], wt
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [lt, wt],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [wt, [lt, Rt + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [lt, [wt, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [lt, [wt, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [yt, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [yt, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [yt, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [yt, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [yt, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [yt, /ower/, "", te]
            ],
            [/ sun4\w[;\)]/i],
            [
              [yt, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [yt, te]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Qt, [ft, Ut],
              [Et, bt]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Qt, [ft, Ut],
              [Et, Mt]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Qt, [ft, ht],
              [Et, Mt]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Qt, [ft, ht],
              [Et, bt]
            ],
            [/(macintosh);/i],
            [Qt, [ft, ht]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Qt, [ft, At],
              [Et, Mt]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Qt, [ft, Pt],
              [Et, bt]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Qt, [ft, Pt],
              [Et, Mt]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Qt, [ft, Zt],
              [Et, bt]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Qt, [ft, Zt],
              [Et, Mt]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Qt, /_/g, " "],
              [ft, Yt],
              [Et, bt]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Qt, /_/g, " "],
              [ft, Yt],
              [Et, Mt]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Qt, [ft, rt],
              [Et, Mt]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Qt, [ft, Oe, {
                OnePlus: ["304", "403", "203"],
                "*": rt
              }],
              [Et, bt]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Qt, [ft, "Vivo"],
              [Et, Mt]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Qt, [ft, "Realme"],
              [Et, Mt]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Qt, [ft, kt],
              [Et, Mt]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Qt, [ft, kt],
              [Et, bt]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Qt, [ft, Lt],
              [Et, bt]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Qt, [ft, Lt],
              [Et, Mt]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Qt, [ft, "Lenovo"],
              [Et, bt]
            ],
            [/(nokia) (t[12][01])/i],
            [ft, Qt, [Et, bt]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Qt, /_/g, " "],
              [Et, Mt],
              [ft, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Qt, [ft, It],
              [Et, bt]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Qt, [ft, It],
              [Et, Mt]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Qt, [ft, it],
              [Et, Mt]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Qt, "Xperia Tablet"],
              [ft, it],
              [Et, bt]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Qt, [ft, zt],
              [Et, Mt]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Qt, [ft, Kt],
              [Et, bt]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Qt, /(.+)/g, "Fire Phone $1"],
              [ft, Kt],
              [Et, Mt]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Qt, ft, [Et, bt]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Qt, [ft, Wt],
              [Et, Mt]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Qt, [ft, vt],
              [Et, bt]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Qt, [ft, vt],
              [Et, Mt]
            ],
            [/(nexus 9)/i],
            [Qt, [ft, "HTC"],
              [Et, bt]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [ft, [Qt, /_/g, " "],
              [Et, Mt]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Qt, [ft, "TCL"],
              [Et, bt]
            ],
            [/(itel) ((\w+))/i],
            [
              [ft, te], Qt, [Et, Oe, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Qt, [ft, "Acer"],
              [Et, bt]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Qt, [ft, "Meizu"],
              [Et, Mt]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Qt, [ft, "Ulefone"],
              [Et, Mt]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Qt, [ft, "Energizer"],
              [Et, Mt]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Qt, [ft, "Cat"],
              [Et, Mt]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Qt, [ft, "Smartfren"],
              [Et, Mt]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Qt, [ft, "Nothing"],
              [Et, Mt]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Qt, [ft, "Archos"],
              [Et, bt]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Qt, [ft, "Archos"],
              [Et, Mt]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [ft, Qt, [Et, bt]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [ft, Qt, [Et, Mt]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [ft, Qt, [Et, bt]],
            [/(surface duo)/i],
            [Qt, [ft, Ft],
              [Et, bt]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Qt, [ft, "Fairphone"],
              [Et, Mt]
            ],
            [/(u304aa)/i],
            [Qt, [ft, "AT&T"],
              [Et, Mt]
            ],
            [/\bsie-(\w*)/i],
            [Qt, [ft, "Siemens"],
              [Et, Mt]
            ],
            [/\b(rct\w+) b/i],
            [Qt, [ft, "RCA"],
              [Et, bt]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Qt, [ft, "Dell"],
              [Et, bt]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Qt, [ft, "Verizon"],
              [Et, bt]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Qt, [ft, "Barnes & Noble"],
              [Et, bt]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Qt, [ft, "NuVision"],
              [Et, bt]
            ],
            [/\b(k88) b/i],
            [Qt, [ft, "ZTE"],
              [Et, bt]
            ],
            [/\b(nx\d{3}j) b/i],
            [Qt, [ft, "ZTE"],
              [Et, Mt]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Qt, [ft, "Swiss"],
              [Et, Mt]
            ],
            [/\b(zur\d{3}) b/i],
            [Qt, [ft, "Swiss"],
              [Et, bt]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Qt, [ft, "Zeki"],
              [Et, bt]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [ft, "Dragon Touch"], Qt, [Et, bt]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Qt, [ft, "Insignia"],
              [Et, bt]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Qt, [ft, "NextBook"],
              [Et, bt]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [ft, "Voice"], Qt, [Et, Mt]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [ft, "LvTel"], Qt, [Et, Mt]
            ],
            [/\b(ph-1) /i],
            [Qt, [ft, "Essential"],
              [Et, Mt]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Qt, [ft, "Envizen"],
              [Et, bt]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Qt, [ft, "MachSpeed"],
              [Et, bt]
            ],
            [/\btu_(1491) b/i],
            [Qt, [ft, "Rotor"],
              [Et, bt]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Qt, [ft, Gt],
              [Et, bt]
            ],
            [/(sprint) (\w+)/i],
            [ft, Qt, [Et, Mt]],
            [/(kin\.[onetw]{3})/i],
            [
              [Qt, /\./g, " "],
              [ft, Ft],
              [Et, Mt]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Qt, [ft, Bt],
              [Et, bt]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Qt, [ft, Bt],
              [Et, Mt]
            ],
            [/smart-tv.+(samsung)/i],
            [ft, [Et, Jt]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Qt, /^/, "SmartTV"],
              [ft, Ut],
              [Et, Jt]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [ft, Lt],
              [Et, Jt]
            ],
            [/(apple) ?tv/i],
            [ft, [Qt, ht + " TV"],
              [Et, Jt]
            ],
            [/crkey/i],
            [
              [Qt, ct + "cast"],
              [ft, It],
              [Et, Jt]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Qt, [ft, Kt],
              [Et, Jt]
            ],
            [/(shield \w+ tv)/i],
            [Qt, [ft, Gt],
              [Et, Jt]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Qt, [ft, At],
              [Et, Jt]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Qt, [ft, it],
              [Et, Jt]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Qt, [ft, Yt],
              [Et, Jt]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [ft, Qt, [Et, Jt]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [ft, ee],
              [Qt, ee],
              [Et, Jt]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Qt, [Et, Jt]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Et, Jt]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [ft, Qt, [Et, Nt]],
            [/droid.+; (shield)( bui|\))/i],
            [Qt, [ft, Gt],
              [Et, Nt]
            ],
            [/(playstation \w+)/i],
            [Qt, [ft, it],
              [Et, Nt]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Qt, [ft, Ft],
              [Et, Nt]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Qt, [ft, Ut],
              [Et, Ct]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [ft, Qt, [Et, Ct]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Qt, [ft, rt],
              [Et, Ct]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Qt, [ft, ht],
              [Et, Ct]
            ],
            [/(opwwe\d{3})/i],
            [Qt, [ft, zt],
              [Et, Ct]
            ],
            [/(moto 360)/i],
            [Qt, [ft, kt],
              [Et, Ct]
            ],
            [/(smartwatch 3)/i],
            [Qt, [ft, it],
              [Et, Ct]
            ],
            [/(g watch r)/i],
            [Qt, [ft, Lt],
              [Et, Ct]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Qt, [ft, Bt],
              [Et, Ct]
            ],
            [/droid.+; (glass) \d/i],
            [Qt, [ft, It],
              [Et, Ct]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [ft, Qt, [Et, Ct]],
            [/; (quest( \d| pro)?)/i],
            [Qt, [ft, pt],
              [Et, Ct]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [ft, [Et, ut]],
            [/(aeobc)\b/i],
            [Qt, [ft, Kt],
              [Et, ut]
            ],
            [/(homepod).+mac os/i],
            [Qt, [ft, ht],
              [Et, ut]
            ],
            [/windows iot/i],
            [
              [Et, ut]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Qt, [Et, Mt]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Qt, [Et, bt]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Et, bt]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Et, Mt]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Qt, [ft, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [wt, [lt, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [lt, wt],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [wt, [lt, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [lt, wt],
            [/ladybird\//i],
            [
              [lt, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [wt, lt]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [lt, wt],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [lt, [wt, Oe, qe]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [wt, Oe, qe],
              [lt, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [wt, /_/g, "."],
              [lt, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [lt, Tt],
              [wt, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [wt, lt],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [lt, /(.+)/, "$1 Touch"], wt
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [lt, wt],
            [/\(bb(10);/i],
            [wt, [lt, Wt]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [wt, [lt, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [wt, [lt, Rt + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [wt, [lt, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [wt, [lt, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [wt, [lt, ct + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [lt, xt], wt
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [lt, wt],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [lt, "Solaris"], wt
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [lt, wt]
          ]
        },
        me = function(tt, et) {
          if (typeof tt === jt && (et = tt, tt = Dt), !(this instanceof me)) return new me(tt, et).getResult();
          var Vt = typeof qt !== dt && qt.navigator ? qt.navigator : Dt,
            Ot = tt || (Vt && Vt.userAgent ? Vt.userAgent : ""),
            Nt = Vt && Vt.userAgentData ? Vt.userAgentData : Dt,
            Jt = et ? function(tt, et) {
              var Vt = {};
              for (var Ot in tt) et[Ot] && et[Ot].length % 2 === 0 ? Vt[Ot] = et[Ot].concat(tt[Ot]) : Vt[Ot] = tt[Ot];
              return Vt
            }(De, et) : De,
            Ct = Vt && Vt.userAgent == Ot;
          return this.getBrowser = function() {
            var tt, et = {};
            return et[lt] = Dt, et[wt] = Dt, Ve.call(et, Ot, Jt.browser), et[Xt] = typeof(tt = et[wt]) === Ht ? tt.replace(/[^\d\.]/g, "").split(".")[0] : Dt, Ct && Vt && Vt.brave && typeof Vt.brave.isBrave == mt && (et[lt] = "Brave"), et
          }, this.getCPU = function() {
            var tt = {};
            return tt[yt] = Dt, Ve.call(tt, Ot, Jt.cpu), tt
          }, this.getDevice = function() {
            var tt = {};
            return tt[ft] = Dt, tt[Qt] = Dt, tt[Et] = Dt, Ve.call(tt, Ot, Jt.device), Ct && !tt[Et] && Nt && Nt.mobile && (tt[Et] = Mt), Ct && "Macintosh" == tt[Qt] && Vt && typeof Vt.standalone !== dt && Vt.maxTouchPoints && Vt.maxTouchPoints > 2 && (tt[Qt] = "iPad", tt[Et] = bt), tt
          }, this.Jf = function() {
            var tt = {};
            return tt[lt] = Dt, tt[wt] = Dt, Ve.call(tt, Ot, Jt.engine), tt
          }, this.getOS = function() {
            var tt = {};
            return tt[lt] = Dt, tt[wt] = Dt, Ve.call(tt, Ot, Jt.os), Ct && !tt[lt] && Nt && Nt.platform && "Unknown" != Nt.platform && (tt[lt] = Nt.platform.replace(/chrome os/i, xt).replace(/macos/i, Tt)), tt
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Jf(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Ot
          }, this.setUA = function(tt) {
            return Ot = typeof tt === Ht && tt.length > 500 ? ee(tt, 500) : tt, this
          }, this.setUA(Ot), this
        };
      me.VERSION = "1.0.41", me.BROWSER = st([lt, wt, Xt]), me.CPU = st([yt]), me.DEVICE = st([Qt, ft, Et, Nt, Mt, Jt, bt, Ct, ut]), me.ENGINE = me.OS = st([lt, wt]), typeof et !== dt ? (tt.exports && (et = tt.exports = me), et.UAParser = me) : Vt.amdO ? (Ot = function() {
        return me
      }.call(et, Vt, et, tt)) === Dt || (tt.exports = Ot) : typeof qt !== dt && (qt.UAParser = me);
      var de = typeof qt !== dt && (qt.jQuery || qt.Zepto);
      if (de && !de.ua) {
        var je = new me;
        de.ua = je.getResult(), de.ua.get = function() {
          return je.getUA()
        }, de.ua.set = function(tt) {
          je.setUA(tt);
          var et = je.getResult();
          for (var Vt in et) de.ua[Vt] = et[Vt]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);