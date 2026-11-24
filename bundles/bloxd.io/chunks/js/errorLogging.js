export const id = 31;
export const ids = [31];
export const modules = {
  6638: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      BaseExtension: () => Tf,
      BaseInstrumentation: () => ff,
      BaseTransport: () => ma,
      CSPInstrumentation: () => kA,
      ConsoleInstrumentation: () => Pf,
      ConsoleTransport: () => aa,
      EVENT_CLICK: () => KT,
      EVENT_NAVIGATION: () => QT,
      EVENT_ROUTE_CHANGE: () => kT,
      EVENT_SESSION_EXTEND: () => zT,
      EVENT_SESSION_RESUME: () => cT,
      EVENT_SESSION_START: () => JT,
      EVENT_VIEW_CHANGED: () => nT,
      ErrorsInstrumentation: () => yf,
      FetchTransport: () => Ja,
      InternalLoggerLevel: () => LT,
      LogLevel: () => Qf,
      MAX_SESSION_PERSISTENCE_TIME: () => Dm,
      NavigationInstrumentation: () => uA,
      Observable: () => Kf,
      PerformanceInstrumentation: () => dh,
      PersistentSessionsManager: () => CT,
      SESSION_EXPIRATION_TIME: () => am,
      SESSION_INACTIVITY_TIME: () => xm,
      STORAGE_KEY: () => Am,
      SessionInstrumentation: () => Af,
      TransportItemType: () => Ta,
      UserActionInstrumentation: () => ZA,
      UserActionState: () => jA,
      VERSION: () => hf,
      ViewInstrumentation: () => rf,
      VolatileSessionsManager: () => rT,
      WebVitalsInstrumentation: () => Hh,
      allLogLevels: () => Jf,
      browserMeta: () => dA,
      buildStackFrame: () => af,
      captureMetas: () => ra,
      createInternalLogger: () => ba,
      createPromiseBuffer: () => Ya,
      createSession: () => WA,
      deepEqual: () => IT,
      defaultEventDomain: () => hm,
      defaultExceptionType: () => bf,
      defaultGlobalObjectKey: () => Sa,
      defaultInternalLoggerLevel: () => tT,
      defaultLogLevel: () => nf,
      faro: () => Ym,
      genShortID: () => VT,
      getCurrentTimestamp: () => YT,
      getDataFromSafariExtensions: () => Of,
      getIgnoreUrls: () => Um,
      getInternalFaroFromGlobalObject: () => Em,
      getStackFramesFromError: () => qf,
      getTransportBody: () => Aa,
      getUrlFromResource: () => gm,
      getWebInstrumentations: () => BA,
      globalObject: () => Rm,
      initializeFaro: () => mx,
      internalGlobalObjectKey: () => pm,
      isArray: () => Sm,
      isBoolean: () => zm,
      isDomError: () => rm,
      isDomException: () => sm,
      isElement: () => Mm,
      isElementDefined: () => lm,
      ZO: () => tm,
      isError: () => ym,
      isErrorDefined: () => Hm,
      isErrorEvent: () => Cm,
      isEvent: () => Pm,
      isEventDefined: () => Xm,
      isFunction: () => bm,
      isInstanceOf: () => Im,
      isInt: () => cm,
      isInternalFaroOnGlobalObject: () => Om,
      isMap: () => Bm,
      isMapDefined: () => um,
      isNull: () => Qm,
      isNumber: () => Jm,
      isObject: () => km,
      isPrimitive: () => Gm,
      isRegExp: () => em,
      isString: () => nm,
      isSymbol: () => Zm,
      isSyntheticEvent: () => Lm,
      isThenable: () => Nm,
      isToString: () => Vm,
      isTypeof: () => jm,
      isUndefined: () => Km,
      makeCoreConfig: () => Ga,
      noop: () => BT,
      osMeta: () => gA,
      parseStacktrace: () => jf,
      sdkMeta: () => FA,
      setInternalFaroOnGlobalObject: () => om,
      transportItemTypeToBodyKey: () => fa,
      unknownString: () => Cf,
      userActionDataAttribute: () => gh,
      userActionTimeoutDataAttribute: () => Wh
    });
    const hm = "browser",
      Am = "com.grafana.faro.session",
      am = 144e5,
      xm = 9e5,
      wm = 1e3,
      Dm = xm,
      im = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Dm
      };
    const Rm = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof fm.g ? fm.g : "undefined" !== typeof self ? self : void 0;
    const pm = "_faroInternal";

    function Em() {
      return Rm[pm]
    }

    function om(mm) {
      mm.config.isolate ? mm.internalLogger.debug("Skipping registering internal Faro instance on global object") : (mm.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Rm, pm, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: mm
      }))
    }

    function Om() {
      return pm in Rm
    }
    let Ym = {
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

    function qm(mm, Tm, fm, hm, Am, am, xm) {
      return Tm.debug("Initializing Faro"), Ym = {
          api: am,
          config: fm,
          instrumentations: xm,
          internalLogger: Tm,
          metas: hm,
          pause: Am.pause,
          transports: Am,
          unpatchedConsole: mm,
          unpause: Am.unpause
        }, om(Ym),
        function(mm) {
          if (mm.config.preventGlobalExposure) mm.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (mm.internalLogger.debug(`Registering public faro reference in the global scope using "${mm.config.globalObjectKey}" key`), mm.config.globalObjectKey in Rm) return void mm.internalLogger.warn(`Skipping global registration due to key "${mm.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Rm, mm.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: mm
            })
          }
        }(Ym), Ym
    }

    function jm(mm, Tm) {
      return typeof mm === Tm
    }

    function Vm(mm, Tm) {
      return Object.prototype.toString.call(mm) === `[object ${Tm}]`
    }

    function Im(mm, Tm) {
      try {
        return mm instanceof Tm
      } catch (fm) {
        return !1
      }
    }
    const Km = mm => jm(mm, "undefined"),
      Qm = mm => jm(mm, "null"),
      nm = mm => jm(mm, "string"),
      Jm = mm => jm(mm, "number") && !isNaN(mm) || jm(mm, "bigint"),
      cm = mm => Jm(mm) && Number.isInteger(mm),
      zm = mm => jm(mm, "boolean"),
      Zm = mm => jm(mm, "symbol"),
      km = mm => !Qm(mm) && jm(mm, "object"),
      bm = mm => jm(mm, "function"),
      Sm = mm => Vm(mm, "Array"),
      em = mm => Vm(mm, "RegExp"),
      Nm = mm => bm(null === mm || void 0 === mm ? void 0 : mm.then),
      Gm = mm => !km(mm) && !bm(mm),
      Xm = "undefined" !== typeof Event,
      Pm = mm => Xm && Im(mm, Event),
      Hm = "undefined" !== typeof Error,
      ym = mm => Hm && Im(mm, Error),
      Cm = mm => Vm(mm, "ErrorEvent"),
      rm = mm => Vm(mm, "DOMError"),
      sm = mm => Vm(mm, "DOMException"),
      lm = "undefined" !== typeof Element,
      Mm = mm => lm && Im(mm, Element),
      um = "undefined" !== typeof Map,
      Bm = mm => um && Im(mm, Map),
      Lm = mm => km(mm) && "nativeEvent" in mm && "preventDefault" in mm && "stopPropagation" in mm;

    function tm(mm) {
      return null == mm || (Sm(mm) || nm(mm) ? 0 === mm.length : !!km(mm) && 0 === Object.keys(mm).length)
    }

    function Um() {
      return Ym.transports.transports.flatMap((mm => mm.getIgnoreUrls()))
    }

    function dm() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Um().some((Tm => mm && null != mm.match(Tm)))
    }

    function gm(mm) {
      return nm(mm) ? mm : mm instanceof URL ? mm.href : !tm(mm) && bm(null === mm || void 0 === mm ? void 0 : mm.toString) ? mm.toString() : void 0
    }
    const Wm = "sessionStorage",
      Fm = "localStorage";

    function mT(mm) {
      try {
        let Tm;
        Tm = window[mm];
        const fm = "__faro_storage_test__";
        return Tm.setItem(fm, fm), Tm.removeItem(fm), !0
      } catch (fm) {
        var Tm;
        return null === (Tm = Ym.internalLogger) || void 0 === Tm || Tm.info(`Web storage of type ${mm} is not available. Reason: ${fm}`), !1
      }
    }

    function TT(mm, Tm) {
      return xT(Tm) ? window[Tm].getItem(mm) : null
    }

    function fT(mm, Tm, fm) {
      if (xT(fm)) try {
        window[fm].setItem(mm, Tm)
      } catch (hm) {}
    }

    function hT(mm, Tm) {
      xT(Tm) && window[Tm].removeItem(mm)
    }
    const AT = mT(Fm),
      aT = mT(Wm);

    function xT(mm) {
      return mm === Fm ? AT : mm === Wm && aT
    }

    function wT(mm) {
      return wT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(mm) {
        return typeof mm
      } : function(mm) {
        return mm && "function" == typeof Symbol && mm.constructor === Symbol && mm !== Symbol.prototype ? "symbol" : typeof mm
      }, wT(mm)
    }

    function DT(mm) {
      var Tm = function(mm, Tm) {
        if ("object" != wT(mm) || !mm) return mm;
        var fm = mm[Symbol.toPrimitive];
        if (void 0 !== fm) {
          var hm = fm.call(mm, Tm || "default");
          if ("object" != wT(hm)) return hm;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Tm ? String : Number)(mm)
      }(mm, "string");
      return "symbol" == wT(Tm) ? Tm : Tm + ""
    }

    function iT(mm, Tm, fm) {
      return (Tm = DT(Tm)) in mm ? Object.defineProperty(mm, Tm, {
        value: fm,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : mm[Tm] = fm, mm
    }

    function RT(mm, Tm) {
      var fm = Object.keys(mm);
      if (Object.getOwnPropertySymbols) {
        var hm = Object.getOwnPropertySymbols(mm);
        Tm && (hm = hm.filter((function(Tm) {
          return Object.getOwnPropertyDescriptor(mm, Tm).enumerable
        }))), fm.push.apply(fm, hm)
      }
      return fm
    }

    function pT(mm) {
      for (var Tm = 1; Tm < arguments.length; Tm++) {
        var fm = null != arguments[Tm] ? arguments[Tm] : {};
        Tm % 2 ? RT(Object(fm), !0).forEach((function(Tm) {
          iT(mm, Tm, fm[Tm])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(mm, Object.getOwnPropertyDescriptors(fm)) : RT(Object(fm)).forEach((function(Tm) {
          Object.defineProperty(mm, Tm, Object.getOwnPropertyDescriptor(fm, Tm))
        }))
      }
      return mm
    }

    function ET() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ym;
      var Tm, fm, hm;
      const Am = mm.config.sessionTracking,
        am = null !== (Tm = null !== (fm = null === Am || void 0 === Am || null === (hm = Am.sampler) || void 0 === hm ? void 0 : hm.call(Am, {
          metas: mm.metas.value
        })) && void 0 !== fm ? fm : null === Am || void 0 === Am ? void 0 : Am.samplingRate) && void 0 !== Tm ? Tm : 1,
        xm = "number" === typeof am ? function(mm) {
          return Math.min(1, Math.max(0, mm))
        }(am) : 0;
      if (!(xm > 0)) return !1;
      if (1 === xm) return !0;
      try {
        const mm = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === mm || void 0 === mm ? void 0 : mm.getRandomValues)) {
          const Tm = new Uint32Array(1);
          return mm.getRandomValues(Tm), Tm[0] / Math.pow(2, 32) < xm
        }
      } catch (wm) {}
      return Math.random() < xm
    }

    function oT() {
      return Date.now()
    }

    function OT() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function YT() {
      return (new Date).toISOString()
    }

    function qT(mm) {
      return new Date(mm).toISOString()
    }
    const jT = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function VT() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const Tm = new Uint32Array(mm),
        fm = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === fm || void 0 === fm ? void 0 : fm.getRandomValues) fm.getRandomValues(Tm);
      else
        for (let Am = 0; Am < mm; Am++) Tm[Am] = Math.floor(4294967296 * Math.random());
      let hm = "";
      for (let Am = 0; Am < mm; Am++) hm += jT[Tm[Am] % 59];
      return hm
    }

    function IT(mm, Tm) {
      if (mm === Tm) return !0;
      if (jm(mm, "number") && isNaN(mm)) return jm(Tm, "number") && isNaN(Tm);
      const fm = Sm(mm),
        hm = Sm(Tm);
      if (fm !== hm) return !1;
      if (fm && hm) {
        const fm = mm.length;
        if (fm !== Tm.length) return !1;
        for (let hm = fm; 0 !== hm--;)
          if (!IT(mm[hm], Tm[hm])) return !1;
        return !0
      }
      const Am = km(mm),
        am = km(Tm);
      if (Am !== am) return !1;
      if (mm && Tm && Am && am) {
        const fm = Object.keys(mm),
          hm = Object.keys(Tm);
        if (fm.length !== hm.length) return !1;
        for (let mm of fm)
          if (!hm.includes(mm)) return !1;
        for (let Am of fm)
          if (!IT(mm[Am], Tm[Am])) return !1;
        return !0
      }
      return !1
    }
    const KT = "click",
      QT = "navigation",
      nT = "view_changed",
      JT = "session_start",
      cT = "session_resume",
      zT = "session_extend",
      ZT = "service_name_override",
      kT = "route_change";

    function bT() {
      let {
        sessionId: mm,
        started: Tm,
        lastActivity: fm,
        isSampled: hm = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Am = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ym;
      var am;
      const xm = oT(),
        wm = null === (am = Am.config) || void 0 === am || null === (am = am.sessionTracking) || void 0 === am ? void 0 : am.generateSessionId;
      return null == mm && (mm = "function" === typeof wm ? wm() : VT()), {
        sessionId: mm,
        lastActivity: null !== fm && void 0 !== fm ? fm : xm,
        started: null !== Tm && void 0 !== Tm ? Tm : xm,
        isSampled: hm
      }
    }

    function ST(mm) {
      if (null == mm) return !1;
      const Tm = oT();
      return Tm - mm.started < 144e5 && Tm - mm.lastActivity < xm
    }

    function eT(mm) {
      let {
        fetchUserSession: Tm,
        storeUserSession: fm,
        adoptSession: hm,
        updateInterval: Am = 0
      } = mm, wm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ym, Dm = 0;
      return function() {
        let {
          forceSessionExtend: mm = !1,
          refreshActivity: im = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Rm, pm;
        if (!Tm || !fm) return;
        const Em = oT();
        if (!mm && Em < Dm && Dm - Em <= Am) return;
        const om = wm.config.sessionTracking,
          Om = null === om || void 0 === om ? void 0 : om.persistent;
        if (Om && !AT || !Om && !aT) return;
        const Ym = Tm();
        if (Dm = Math.min(Em + Am, (null !== (Rm = null === Ym || void 0 === Ym ? void 0 : Ym.started) && void 0 !== Rm ? Rm : Em) + am, (null !== (pm = null === Ym || void 0 === Ym ? void 0 : Ym.lastActivity) && void 0 !== pm ? pm : Em) + xm), !1 === mm && ST(Ym)) {
          var qm;
          im && fm(pT(pT({}, Ym), {}, {
            lastActivity: Em
          }));
          const mm = null === (qm = wm.metas.value.session) || void 0 === qm ? void 0 : qm.id;
          null != hm && null != Ym.sessionMeta && Ym.sessionId !== mm && hm(Ym.sessionMeta)
        } else {
          var jm, Vm, Im;
          let mm = GT(bT({
            isSampled: ET(wm)
          }, wm), Ym, wm);
          Dm = Em + Am, fm(mm), null === (jm = wm.api) || void 0 === jm || jm.setSession(mm.sessionMeta), null === om || void 0 === om || null === (Vm = om.onSessionChange) || void 0 === Vm || Vm.call(om, null !== (Im = null === Ym || void 0 === Ym ? void 0 : Ym.sessionMeta) && void 0 !== Im ? Im : null, mm.sessionMeta)
        }
      }
    }

    function NT(mm) {
      let Tm, {
          fetchUserSession: fm,
          storeUserSession: hm,
          updateInterval: Am = 0
        } = mm,
        am = 0;
      return mm => {
        const xm = oT();
        if (mm === Tm && xm < am && am - xm <= Am) return;
        Tm = mm, am = xm + Am;
        const wm = fm();
        (null === wm || void 0 === wm ? void 0 : wm.sessionId) === mm && ST(wm) && hm(pT(pT({}, wm), {}, {
          lastActivity: xm
        }))
      }
    }

    function GT(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ym;
      var hm, Am, am, xm, wm, Dm;
      const im = pT(pT({}, mm), {}, {
          sessionMeta: {
            id: mm.sessionId,
            attributes: PT(pT(pT(pT({}, null === (hm = fm.config.sessionTracking) || void 0 === hm || null === (hm = hm.session) || void 0 === hm ? void 0 : hm.attributes), null !== (Am = null === (am = fm.metas.value.session) || void 0 === am ? void 0 : am.attributes) && void 0 !== Am ? Am : {}), {}, {
              isSampled: mm.isSampled.toString()
            }))
          }
        }),
        Rm = null !== (xm = null === (wm = fm.metas.value.session) || void 0 === wm ? void 0 : wm.overrides) && void 0 !== xm ? xm : null === Tm || void 0 === Tm || null === (Dm = Tm.sessionMeta) || void 0 === Dm ? void 0 : Dm.overrides;
      tm(Rm) || (im.sessionMeta.overrides = Rm);
      const pm = null === Tm || void 0 === Tm ? void 0 : Tm.sessionId;
      return null != pm && (im.sessionMeta.attributes.previousSession = pm), im
    }

    function XT(mm) {
      let {
        fetchUserSession: Tm,
        storeUserSession: fm
      } = mm, hm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ym, Am = !1;
      return function(mm) {
        if (Am) return;
        const am = mm.session,
          xm = Tm();
        let wm = null === am || void 0 === am ? void 0 : am.id;
        const Dm = null === am || void 0 === am ? void 0 : am.attributes,
          im = null === am || void 0 === am ? void 0 : am.overrides,
          Rm = null === xm || void 0 === xm ? void 0 : xm.sessionMeta,
          pm = null === Rm || void 0 === Rm ? void 0 : Rm.overrides,
          Em = !!im && !IT(im, pm),
          om = !!Dm && !IT(Dm, null === Rm || void 0 === Rm ? void 0 : Rm.attributes);
        if (am && wm !== (null === xm || void 0 === xm ? void 0 : xm.sessionId) || om || Em) {
          var Om, Ym;
          const mm = null != xm && wm === xm.sessionId,
            Tm = GT(mm ? xm : bT({
              sessionId: wm,
              isSampled: ET(hm)
            }, hm), xm, hm),
            am = null === xm || void 0 === xm || null === (Om = xm.sessionMeta) || void 0 === Om || null === (Om = Om.attributes) || void 0 === Om ? void 0 : Om.previousSession;
          mm && null != am && am !== Tm.sessionId && (Tm.sessionMeta.attributes.previousSession = am), (null === (Ym = Tm.sessionMeta.attributes) || void 0 === Ym ? void 0 : Ym.previousSession) === Tm.sessionId && delete Tm.sessionMeta.attributes.previousSession, fm(Tm),
            function(mm, Tm) {
              let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Am, am, xm;
              if (!Tm) return;
              const wm = fm.serviceName,
                Dm = null !== (Am = null !== (am = hm.serviceName) && void 0 !== am ? am : null === (xm = mm.metas.value.app) || void 0 === xm ? void 0 : xm.name) && void 0 !== Am ? Am : "";
              wm && wm !== Dm && mm.api.pushEvent(ZT, {
                serviceName: wm,
                previousServiceName: Dm
              })
            }(hm, Em, im, pm), Am = !0;
          try {
            hm.api.setSession(Tm.sessionMeta)
          } finally {
            Am = !1
          }
        }
      }
    }

    function PT(mm) {
      const Tm = {};
      for (const fm of Object.keys(mm)) {
        const hm = mm[fm];
        void 0 !== hm && (Tm[fm] = hm)
      }
      return Tm
    }

    function HT() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== mm && void 0 !== mm ? mm : {}, function() {
        const mm = new WeakSet;
        return function(Tm, fm) {
          if (km(fm) && null !== fm) {
            if (mm.has(fm)) return null;
            mm.add(fm)
          }
          return fm
        }
      }())
    }

    function yT() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Tm = {};
      for (const [fm, hm] of Object.entries(mm)) Tm[fm] = km(hm) && null !== hm ? HT(hm) : String(hm);
      return Tm
    }
    var CT = class mm {
      constructor() {
        var Tm = this;
        let fm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ym;
        this.context = fm, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = mm => {
          this.adopting = !0;
          try {
            var Tm;
            null === (Tm = this.context.api) || void 0 === Tm || Tm.setSession(mm)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: mm = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Tm.updateUserSession({
            refreshActivity: mm
          })
        }, this.recordActivity = NT({
          fetchUserSession: mm.fetchUserSession,
          storeUserSession: mm.storeUserSession,
          updateInterval: wm
        }), this.updateUserSession = eT({
          fetchUserSession: mm.fetchUserSession,
          storeUserSession: mm.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: wm
        }, fm), this.init()
      }
      static removeUserSession() {
        hT(Am, mm.storageTypeLocal)
      }
      static storeUserSession(Tm) {
        fT(Am, HT(Tm), mm.storageTypeLocal)
      }
      static fetchUserSession() {
        const Tm = TT(Am, mm.storageTypeLocal);
        return Tm ? JSON.parse(Tm) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var mm;
            this.updateSession({
              refreshActivity: !1
            });
            const Tm = null === (mm = this.context.api) || void 0 === mm || null === (mm = mm.getSession()) || void 0 === mm ? void 0 : mm.id;
            Tm && this.recordActivity(Tm)
          }
        })), this.context.metas.addListener(XT({
          fetchUserSession: mm.fetchUserSession,
          storeUserSession: mm.storeUserSession
        }, this.context))
      }
    };
    CT.storageTypeLocal = Fm;
    var rT = class mm {
      constructor() {
        var Tm = this;
        let fm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ym;
        this.context = fm, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: mm = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Tm.updateUserSession({
            refreshActivity: mm
          })
        }, this.recordActivity = NT({
          fetchUserSession: mm.fetchUserSession,
          storeUserSession: mm.storeUserSession,
          updateInterval: wm
        }), this.updateUserSession = eT({
          fetchUserSession: mm.fetchUserSession,
          storeUserSession: mm.storeUserSession,
          updateInterval: wm
        }, fm), this.init()
      }
      static removeUserSession() {
        hT(Am, mm.storageTypeSession)
      }
      static storeUserSession(Tm) {
        fT(Am, HT(Tm), mm.storageTypeSession)
      }
      static fetchUserSession() {
        const Tm = TT(Am, mm.storageTypeSession);
        return Tm ? JSON.parse(Tm) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var mm;
            this.updateSession({
              refreshActivity: !1
            });
            const Tm = null === (mm = this.context.api) || void 0 === mm || null === (mm = mm.getSession()) || void 0 === mm ? void 0 : mm.id;
            Tm && this.recordActivity(Tm)
          }
        })), this.context.metas.addListener(XT({
          fetchUserSession: mm.fetchUserSession,
          storeUserSession: mm.storeUserSession
        }, this.context))
      }
    };
    rT.storageTypeSession = Wm;
    const sT = new WeakMap;

    function lT(mm) {
      let Tm = sT.get(mm);
      if (!Tm) {
        let fm = [],
          hm = [];
        Tm = {
          addSessionUpdateListener: mm => {
            fm.push(mm)
          },
          removeSessionUpdateListener: mm => {
            fm = fm.filter((Tm => Tm !== mm))
          },
          notifySessionUpdate: mm => {
            fm.forEach((Tm => Tm(mm)))
          },
          shouldCapture: () => hm.every((mm => mm())),
          addCaptureFilter: mm => {
            hm.push(mm)
          },
          removeCaptureFilter: mm => {
            hm = hm.filter((Tm => Tm !== mm))
          }
        }, sT.set(mm, Tm)
      }
      return Tm
    }
    var MT = class {
      constructor(mm, Tm, fm) {
        this.metas = mm, this.transports = Tm, this.onActivate = fm, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = mm => {
          var Tm, fm, hm;
          const Am = this.pending;
          var am, xm;
          if ("overrides" === mm.type) return void(this.pending = {
            reset: null !== (am = null === Am || void 0 === Am ? void 0 : Am.reset) && void 0 !== am && am,
            inheritOverrides: null === (xm = null === Am || void 0 === Am ? void 0 : Am.inheritOverrides) || void 0 === xm || xm,
            session: pT(pT({}, null === Am || void 0 === Am ? void 0 : Am.session), {}, {
              overrides: pT(pT({}, null === Am || void 0 === Am ? void 0 : Am.session.overrides), mm.overrides)
            })
          });
          const wm = mm.session,
            Dm = tm(wm) || null != wm && "id" in wm && !wm.id,
            im = null !== (Tm = null === wm || void 0 === wm ? void 0 : wm.overrides) && void 0 !== Tm ? Tm : null === Am || void 0 === Am ? void 0 : Am.session.overrides;
          this.pending = {
            reset: Dm || !(null === wm || void 0 === wm ? void 0 : wm.id) && null !== (fm = null === Am || void 0 === Am ? void 0 : Am.reset) && void 0 !== fm && fm,
            inheritOverrides: !(!mm.overrides && void 0 !== (null === wm || void 0 === wm ? void 0 : wm.overrides)) && (null === (hm = null === Am || void 0 === Am ? void 0 : Am.inheritOverrides) || void 0 === hm || hm),
            session: {
              id: null === wm || void 0 === wm ? void 0 : wm.id,
              attributes: (null === wm || void 0 === wm ? void 0 : wm.attributes) && pT({}, wm.attributes),
              overrides: mm.overrides ? pT(pT({}, null === Am || void 0 === Am ? void 0 : Am.session.overrides), mm.overrides) : im && pT({}, im)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var mm, Tm;
        this.waiting = !0, lT(this.metas).addSessionUpdateListener(this.recordUpdate), lT(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (mm = (Tm = this.metas).addCaptureListener) || void 0 === mm || mm.call(Tm, this.activate), this.activate()
      }
      destroy() {
        var mm, Tm;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), lT(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (mm = (Tm = this.metas).removeCaptureListener) || void 0 === mm || mm.call(Tm, this.activate), lT(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function uT(mm) {
      return (null === mm || void 0 === mm ? void 0 : mm.persistent) ? CT : rT
    }

    function BT() {}
    let LT = function(mm) {
      return mm[mm.OFF = 0] = "OFF", mm[mm.ERROR = 1] = "ERROR", mm[mm.WARN = 2] = "WARN", mm[mm.INFO = 3] = "INFO", mm[mm.VERBOSE = 4] = "VERBOSE", mm
    }({});
    const vT = {
        debug: BT,
        error: BT,
        info: BT,
        prefix: "Faro",
        warn: BT
      },
      tT = 1;

    function UT(mm) {
      return UT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(mm) {
        return typeof mm
      } : function(mm) {
        return mm && "function" == typeof Symbol && mm.constructor === Symbol && mm !== Symbol.prototype ? "symbol" : typeof mm
      }, UT(mm)
    }

    function dT(mm) {
      var Tm = function(mm, Tm) {
        if ("object" != UT(mm) || !mm) return mm;
        var fm = mm[Symbol.toPrimitive];
        if (void 0 !== fm) {
          var hm = fm.call(mm, Tm || "default");
          if ("object" != UT(hm)) return hm;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Tm ? String : Number)(mm)
      }(mm, "string");
      return "symbol" == UT(Tm) ? Tm : Tm + ""
    }

    function gT(mm, Tm, fm) {
      return (Tm = dT(Tm)) in mm ? Object.defineProperty(mm, Tm, {
        value: fm,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : mm[Tm] = fm, mm
    }

    function WT(mm, Tm) {
      var fm = Object.keys(mm);
      if (Object.getOwnPropertySymbols) {
        var hm = Object.getOwnPropertySymbols(mm);
        Tm && (hm = hm.filter((function(Tm) {
          return Object.getOwnPropertyDescriptor(mm, Tm).enumerable
        }))), fm.push.apply(fm, hm)
      }
      return fm
    }

    function FT(mm) {
      for (var Tm = 1; Tm < arguments.length; Tm++) {
        var fm = null != arguments[Tm] ? arguments[Tm] : {};
        Tm % 2 ? WT(Object(fm), !0).forEach((function(Tm) {
          gT(mm, Tm, fm[Tm])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(mm, Object.getOwnPropertyDescriptors(fm)) : WT(Object(fm)).forEach((function(Tm) {
          Object.defineProperty(mm, Tm, Object.getOwnPropertyDescriptor(fm, Tm))
        }))
      }
      return mm
    }
    const mf = FT({}, console);
    var Tf = class {
        constructor() {
          this.unpatchedConsole = mf, this.internalLogger = vT, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
          this.internalLogger.debug(`${this.name}\n`, ...Tm)
        }
        logInfo() {
          for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
          this.internalLogger.info(`${this.name}\n`, ...Tm)
        }
        logWarn() {
          for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
          this.internalLogger.warn(`${this.name}\n`, ...Tm)
        }
        logError() {
          for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
          this.internalLogger.error(`${this.name}\n`, ...Tm)
        }
      },
      ff = class extends Tf {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const hf = "2.12.1";
    var Af = class extends ff {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = hf, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(mm) {
        var Tm;
        const fm = mm.session;
        if (fm && fm.id !== (null === (Tm = this.notifiedSession) || void 0 === Tm ? void 0 : Tm.id)) {
          var hm;
          if (this.isAdoptingSession()) return void(this.notifiedSession = fm);
          if (this.notifiedSession && this.notifiedSession.id === (null === (hm = fm.attributes) || void 0 === hm ? void 0 : hm.previousSession)) return this.api.pushEvent(zT, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = fm);
          this.notifiedSession = fm, this.api.pushEvent(JT, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(mm, Tm, fm) {
        const hm = null === fm || void 0 === fm ? void 0 : fm.session;
        let Am, am, xm = mm.fetchUserSession();
        if (Tm.persistent && Tm.maxSessionPersistenceTime && xm) {
          const mm = oT();
          xm.lastActivity < mm - Tm.maxSessionPersistenceTime && (CT.removeUserSession(), xm = null)
        }
        const wm = ST(xm);
        if ((null === fm || void 0 === fm ? void 0 : fm.reset) || !wm || (null === hm || void 0 === hm ? void 0 : hm.id) && hm.id !== (null === xm || void 0 === xm ? void 0 : xm.sessionId)) {
          var Dm, im, Rm, pm, Em, om;
          am = bT({
            sessionId: (null === fm || void 0 === fm ? void 0 : fm.reset) ? void 0 : null !== (Dm = null === hm || void 0 === hm ? void 0 : hm.id) && void 0 !== Dm ? Dm : null === (im = Tm.session) || void 0 === im ? void 0 : im.id,
            isSampled: ET(this)
          }, this);
          const mm = am.sessionId,
            Om = fm && wm ? null === xm || void 0 === xm || null === (Rm = xm.sessionMeta) || void 0 === Rm ? void 0 : Rm.overrides : void 0,
            Ym = Om ? pT(pT({}, null === (pm = Tm.session) || void 0 === pm ? void 0 : pm.overrides), Om) : null === (Em = Tm.session) || void 0 === Em ? void 0 : Em.overrides;
          am.sessionMeta = pT({
            id: mm,
            attributes: pT({
              isSampled: am.isSampled.toString()
            }, null === (om = Tm.session) || void 0 === om ? void 0 : om.attributes)
          }, Ym ? {
            overrides: Ym
          } : {}), Am = JT
        } else {
          var Om, Ym;
          const mm = null === xm || void 0 === xm ? void 0 : xm.sessionId;
          am = bT({
            sessionId: mm,
            isSampled: xm.isSampled || !1,
            started: null === xm || void 0 === xm ? void 0 : xm.started
          }, this);
          const fm = null === xm || void 0 === xm ? void 0 : xm.sessionMeta,
            hm = pT(pT({}, null === (Om = Tm.session) || void 0 === Om ? void 0 : Om.overrides), null === fm || void 0 === fm ? void 0 : fm.overrides);
          am.sessionMeta = pT(pT({}, Tm.session), {}, {
            id: mm,
            attributes: pT(pT(pT({}, null === (Ym = Tm.session) || void 0 === Ym ? void 0 : Ym.attributes), null === fm || void 0 === fm ? void 0 : fm.attributes), {}, {
              isSampled: am.isSampled.toString()
            }),
            overrides: hm
          }), Am = cT
        }
        var qm;
        if (hm && (am.sessionMeta = pT(pT({}, am.sessionMeta), {}, {
            attributes: pT(pT(pT({}, null === (qm = am.sessionMeta) || void 0 === qm ? void 0 : qm.attributes), hm.attributes), {}, {
              isSampled: am.isSampled.toString()
            })
          }), hm.overrides)) {
          const mm = (null === fm || void 0 === fm ? void 0 : fm.inheritOverrides) ? pT(pT({}, am.sessionMeta.overrides), hm.overrides) : hm.overrides;
          Object.keys(mm).length > 0 ? am.sessionMeta.overrides = mm : delete am.sessionMeta.overrides
        }
        return {
          initialSession: am,
          lifecycleType: Am
        }
      }
      registerBeforeSendHook(mm) {
        var Tm;
        this.beforeSendHook = Tm => {
          var fm, hm;
          const Am = null === (fm = Tm.meta.session) || void 0 === fm ? void 0 : fm.id;
          Am && !this.transports.isPaused() && mm(Am);
          const am = null === (hm = Tm.meta.session) || void 0 === hm ? void 0 : hm.attributes;
          if (am && "true" === (null === am || void 0 === am ? void 0 : am.isSampled)) {
            var xm;
            let mm = JSON.parse(JSON.stringify(Tm));
            const fm = null === (xm = mm.meta.session) || void 0 === xm ? void 0 : xm.attributes;
            var wm;
            if (null === fm || void 0 === fm || delete fm.isSampled, 0 === Object.keys(null !== fm && void 0 !== fm ? fm : {}).length) null === (wm = mm.meta.session) || void 0 === wm || delete wm.attributes;
            return mm
          }
          return null
        }, null === (Tm = this.transports) || void 0 === Tm || Tm.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var mm;
        this.logDebug("init session instrumentation");
        const Tm = document.prerendering;
        var fm;
        if ((null === (mm = this.config.sessionTracking) || void 0 === mm ? void 0 : mm.enabled) && (Tm || this.prerenderSession)) return null !== (fm = this.prerenderSession) && void 0 !== fm || (this.prerenderSession = new MT(this.metas, this.transports, (mm => {
          this.prerenderSession = void 0, this.initializeSession(mm)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(mm) {
        const Tm = this.config.sessionTracking;
        if (null === Tm || void 0 === Tm ? void 0 : Tm.enabled) {
          var fm, hm;
          const Am = uT(Tm),
            am = new Am(this);
          this.isAdoptingSession = am.isAdopting, this.registerBeforeSendHook(am.recordActivity);
          const {
            initialSession: xm,
            lifecycleType: wm
          } = this.createInitialSession(Am, Tm, mm);
          Am.storeUserSession(xm);
          const Dm = xm.sessionMeta;
          this.notifiedSession = Dm, this.api.setSession(Dm), this.captureListener = () => {
            this.transports.isPaused() || am.updateSession({
              refreshActivity: !1
            })
          }, null === (fm = (hm = this.metas).addCaptureListener) || void 0 === fm || fm.call(hm, this.captureListener), wm === JT && this.api.pushEvent(JT, {}, void 0, {
            skipDedupe: !0
          }), wm === cT && this.api.pushEvent(cT, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var mm, Tm, fm;
        (null === (mm = this.prerenderSession) || void 0 === mm || mm.destroy(), this.captureListener) && (null === (Tm = (fm = this.metas).removeCaptureListener) || void 0 === Tm || Tm.call(fm, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function af(mm, Tm, fm, hm) {
      const Am = {
        filename: mm || document.location.href,
        function: Tm || "?"
      };
      return void 0 !== fm && (Am.lineno = fm), void 0 !== hm && (Am.colno = hm), Am
    }
    const xf = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      wf = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Df = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Rf = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      pf = "safari-extension",
      Ef = "safari-web-extension",
      of = /Minified React error #\d+;/i;

    function Of(mm, Tm) {
      const fm = null === mm || void 0 === mm ? void 0 : mm.includes(pf),
        hm = !fm && (null === mm || void 0 === mm ? void 0 : mm.includes("safari-web-extension"));
      return fm || hm ? [(null === mm || void 0 === mm ? void 0 : mm.includes("@")) ? mm.split("@")[0] : mm, fm ? `${pf}:${Tm}` : `${Ef}:${Tm}`] : [mm, Tm]
    }
    const Yf = 1024;

    function qf(mm) {
      let Tm = [];
      mm.stacktrace ? Tm = mm.stacktrace.split("\n").filter(((mm, Tm) => Tm % 2 === 0)) : mm.stack && (Tm = mm.stack.split("\n"));
      const fm = Tm.reduce(((Tm, fm, hm) => {
        if (fm.length > Yf) return Tm;
        let Am, am, xm, wm, Dm;
        if (Am = xf.exec(fm)) {
          if (am = Am[1], xm = Am[2], wm = Am[3], Dm = Am[4], null === xm || void 0 === xm ? void 0 : xm.startsWith("eval")) {
            const mm = wf.exec(xm);
            mm && (xm = mm[1], wm = mm[2], Dm = mm[3])
          }
          xm = (null === xm || void 0 === xm ? void 0 : xm.startsWith("address at ")) ? xm.substring(11) : xm, [am, xm] = Of(am, xm)
        } else if (Am = Df.exec(fm)) {
          if (am = Am[1], xm = Am[3], wm = Am[4], Dm = Am[5], xm && xm.includes(" > eval")) {
            const mm = Rf.exec(xm);
            mm && (am = am || "eval", xm = mm[1], wm = mm[2])
          } else 0 === hm && !Dm && Jm(mm.columnNumber) && (Dm = String(mm.columnNumber + 1));
          [am, xm] = Of(am, xm)
        }
        return (xm || am) && Tm.push(af(xm, am, wm ? Number(wm) : void 0, Dm ? Number(Dm) : void 0)), Tm
      }), []);
      return of.test(mm.message) ? fm.slice(1) : fm
    }

    function jf(mm) {
      return {
        frames: qf(mm)
      }
    }
    const Vf = "http-request-start",
      If = "http-request-end";
    var Kf = class mm {
      constructor() {
        this.subscribers = []
      }
      subscribe(mm) {
        return this.subscribers.push(mm), {
          unsubscribe: () => this.unsubscribe(mm)
        }
      }
      unsubscribe(mm) {
        this.subscribers = this.subscribers.filter((Tm => Tm !== mm))
      }
      notify(mm) {
        this.subscribers.forEach((Tm => Tm(mm)))
      }
      first() {
        const Tm = new mm,
          fm = mm => {
            Tm.notify(mm), hm.unsubscribe()
          },
          hm = this.subscribe(fm),
          Am = Tm.unsubscribe.bind(Tm);
        return this.withUnsubscribeOverride(Tm, Am, fm)
      }
      takeWhile(Tm) {
        const fm = new mm,
          hm = mm => {
            Tm(mm) ? fm.notify(mm) : fm.unsubscribe(hm)
          };
        this.subscribe(hm);
        const Am = fm.unsubscribe.bind(fm);
        return this.withUnsubscribeOverride(fm, Am, hm)
      }
      filter(Tm) {
        const fm = new mm,
          hm = mm => {
            Tm(mm) && fm.notify(mm)
          };
        this.subscribe(hm);
        const Am = fm.unsubscribe.bind(fm);
        return this.withUnsubscribeOverride(fm, Am, hm)
      }
      merge() {
        const Tm = new mm,
          fm = [];
        for (var hm = arguments.length, Am = new Array(hm), am = 0; am < hm; am++) Am[am] = arguments[am];
        Am.forEach((mm => {
          const hm = mm.subscribe((mm => {
            Tm.notify(mm)
          }));
          fm.push(hm)
        }));
        const xm = Tm.unsubscribeAll.bind(Tm);
        return Tm.unsubscribe = () => {
          fm.forEach((mm => mm.unsubscribe())), xm()
        }, Tm
      }
      withUnsubscribeOverride(mm, Tm, fm) {
        return mm.unsubscribe = mm => {
          Tm(mm), this.unsubscribe(fm)
        }, mm
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Qf = function(mm) {
      return mm.TRACE = "trace", mm.DEBUG = "debug", mm.INFO = "info", mm.LOG = "log", mm.WARN = "warn", mm.ERROR = "error", mm
    }({});
    const nf = "log",
      Jf = ["trace", "debug", "info", "log", "warn", "error"];
    let zf, Zf = !1;
    const kf = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      bf = "Error",
      Sf = mm => mm.map((mm => km(mm) ? HT(mm) : String(mm))).join(" ");

    function ef(mm) {
      let Tm, fm, hm, Am, am = [];
      if (Cm(mm) && mm.error) Tm = mm.error.message, fm = mm.error.name, am = qf(mm.error);
      else if ((hm = rm(mm)) || sm(mm)) {
        const {
          name: Am,
          message: am
        } = mm;
        fm = null !== Am && void 0 !== Am ? Am : hm ? "DOMError" : "DOMException", Tm = am ? `${fm}: ${am}` : fm
      } else ym(mm) ? (fm = mm.name, Tm = mm.message, am = qf(mm)) : (km(mm) || (Am = Pm(mm))) && (fm = Am ? mm.constructor.name : void 0, Tm = `Non-Error exception captured with keys: ${Object.keys(mm)}`);
      return [Tm, fm, am]
    }

    function Nf(mm) {
      const [Tm, fm, hm, Am, am] = mm;
      let xm, wm, Dm = [];
      const im = nm(Tm),
        Rm = af(fm, "?", hm, Am);
      return am || !im ? ([xm, wm, Dm] = ef(null !== am && void 0 !== am ? am : Tm), 0 === Dm.length && (Dm = [Rm])) : im && ([xm, wm] = function(mm) {
        var Tm, fm;
        const hm = mm.match(kf),
          Am = null !== (Tm = null === hm || void 0 === hm ? void 0 : hm[1]) && void 0 !== Tm ? Tm : bf;
        return [null !== (fm = null === hm || void 0 === hm ? void 0 : hm[2]) && void 0 !== fm ? fm : mm, Am]
      }(Tm), Dm = [Rm]), {
        value: xm,
        type: wm,
        stackFrames: Dm
      }
    }

    function Gf(mm, Tm) {
      return ym(mm[0]) ? Nf(mm) : {
        value: Tm(mm)
      }
    }
    const Xf = mm => mm.map((mm => {
      try {
        return String(mm)
      } catch (Tm) {
        return ""
      }
    })).join(" ");
    var Pf = class mm extends ff {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = hf, this.errorSerializer = Xf
      }
      initialize() {
        var Tm, fm;
        const hm = this.config.consoleInstrumentation,
          Am = (null === hm || void 0 === hm ? void 0 : hm.serializeErrors) || !!(null === hm || void 0 === hm ? void 0 : hm.errorSerializer);
        this.errorSerializer = Am ? null !== (Tm = null === hm || void 0 === hm ? void 0 : hm.errorSerializer) && void 0 !== Tm ? Tm : Sf : Xf;
        const am = null !== (fm = null === hm || void 0 === hm ? void 0 : hm.disabledLevels) && void 0 !== fm ? fm : mm.defaultDisabledLevels,
          xm = function(mm) {
            if (zf || (zf = new Kf), !Zf) {
              const Tm = null !== mm && void 0 !== mm ? mm : mf;
              Jf.forEach((mm => {
                console[mm] = function() {
                  for (var fm, hm = arguments.length, Am = new Array(hm), am = 0; am < hm; am++) Am[am] = arguments[am];
                  zf.notify({
                    type: "console",
                    level: mm,
                    args: Am
                  }), null === (fm = Tm[mm]) || void 0 === fm || fm.apply(console, Am)
                }
              })), Zf = !0
            }
            return zf
          }(this.unpatchedConsole);
        this.subscription = xm.subscribe((Tm => {
          let {
            level: fm,
            args: Am
          } = Tm;
          if (!am.includes(fm)) try {
            if (fm !== Qf.ERROR || (null === hm || void 0 === hm ? void 0 : hm.consoleErrorAsLog))
              if (fm === Qf.ERROR && (null === hm || void 0 === hm ? void 0 : hm.consoleErrorAsLog)) {
                const {
                  value: Tm,
                  type: hm,
                  stackFrames: am
                } = Gf(Am, this.errorSerializer);
                this.api.pushLog(Tm ? [mm.consoleErrorPrefix + Tm] : Am, {
                  level: fm,
                  context: {
                    value: null !== Tm && void 0 !== Tm ? Tm : "",
                    type: null !== hm && void 0 !== hm ? hm : "",
                    stackFrames: (null === am || void 0 === am ? void 0 : am.length) ? Sf(am) : ""
                  }
                })
              } else this.api.pushLog(Am, {
                level: fm
              });
            else {
              const {
                value: Tm,
                type: fm,
                stackFrames: hm
              } = Gf(Am, this.errorSerializer);
              if (Tm && !fm && !hm) return void this.api.pushError(new Error(mm.consoleErrorPrefix + Tm));
              this.api.pushError(new Error(mm.consoleErrorPrefix + Tm), {
                type: fm,
                stackFrames: hm
              })
            }
          } catch (xm) {
            this.logError(xm)
          }
        }))
      }
      destroy() {
        var mm;
        null === (mm = this.subscription) || void 0 === mm || mm.unsubscribe(), this.subscription = void 0
      }
    };
    Pf.defaultDisabledLevels = [Qf.DEBUG, Qf.TRACE, Qf.LOG], Pf.consoleErrorPrefix = "console.error: ";
    const Hf = [];
    var yf = class extends ff {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = hf
      }
      initialize() {
        this.logDebug("Initializing"),
          function(mm) {
            const Tm = window.onerror;
            window.onerror = function() {
              for (var fm = arguments.length, hm = new Array(fm), Am = 0; Am < fm; Am++) hm[Am] = arguments[Am];
              try {
                const {
                  value: Tm,
                  type: fm,
                  stackFrames: Am
                } = Nf(hm), am = hm[4];
                if (Tm) {
                  const hm = {
                    type: fm,
                    stackFrames: Am
                  };
                  null != am && (hm.originalError = am), mm.pushError(new Error(Tm), hm)
                }
              } finally {
                null === Tm || void 0 === Tm || Tm.apply(window, hm)
              }
            }
          }(this.api),
          function(mm) {
            const Tm = Tm => {
              var fm;
              let hm, Am, am = Tm;
              if (am.reason) am = Tm.reason;
              else if (null === (fm = Tm.detail) || void 0 === fm ? void 0 : fm.reason) {
                var xm;
                am = null === (xm = Tm.detail) || void 0 === xm ? void 0 : xm.reason
              }
              let wm = [];
              Gm(am) ? (hm = `Non-Error promise rejection captured with value: ${String(am)}`, Am = "UnhandledRejection") : [hm, Am, wm] = ef(am), hm && mm.pushError(new Error(hm), {
                type: Am,
                stackFrames: wm
              })
            };
            window.addEventListener("unhandledrejection", Tm), Hf.push(Tm)
          }(this.api)
      }
    };
    const Cf = "unknown";
    var rf = class extends ff {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = hf, this.waitingForActivation = !1, this.sendViewChangedEvent = mm => {
          var Tm;
          if (this.waitingForActivation || document.prerendering) return;
          const fm = mm.view;
          if (fm && fm.name !== (null === (Tm = this.notifiedView) || void 0 === Tm ? void 0 : Tm.name)) {
            var hm, Am, am;
            const mm = null !== (hm = null === (Am = this.notifiedView) || void 0 === Am ? void 0 : Am.name) && void 0 !== hm ? hm : Cf;
            this.notifiedView = fm, this.api.pushEvent(nT, {
              fromView: mm,
              toView: null !== (am = fm.name) && void 0 !== am ? am : Cf
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
    class sf {
      t;
      o = 0;
      i = [];
      l(mm) {
        if (mm.hadRecentInput) return;
        const Tm = this.i[0],
          fm = this.i.at(-1);
        this.o && Tm && fm && mm.startTime - fm.startTime < 1e3 && mm.startTime - Tm.startTime < 5e3 ? (this.o += mm.value, this.i.push(mm)) : (this.o = mm.value, this.i = [mm]), this.t?.(mm)
      }
    }
    const lf = () => {
        const mm = performance.getEntriesByType("navigation")[0];
        if (mm && mm.responseStart > 0 && mm.responseStart < performance.now()) return mm
      },
      Mf = mm => {
        if ("loading" === document.readyState) return "loading";
        const Tm = lf();
        if (Tm) {
          if (mm < Tm.domInteractive) return "loading";
          if (0 === Tm.domContentLoadedEventStart || mm < Tm.domContentLoadedEventStart) return "dom-interactive";
          if (0 === Tm.domComplete || mm < Tm.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      uf = mm => {
        const Tm = mm.nodeName;
        return 1 === mm.nodeType ? Tm.toLowerCase() : Tm.toUpperCase().replace(/^#/, "")
      },
      Bf = mm => {
        let Tm = "";
        try {
          for (; 9 !== mm?.nodeType;) {
            const fm = mm,
              hm = fm.id ? "#" + fm.id : [uf(fm), ...Array.from(fm.classList ?? []).sort()].join(".");
            if (Tm.length + hm.length > 99) return Tm || hm;
            if (Tm = Tm ? hm + ">" + Tm : hm, fm.id) break;
            mm = fm.parentNode
          }
        } catch {}
        return Tm
      },
      Lf = new WeakMap;

    function vf(mm, Tm) {
      let fm = Lf.get(Tm);
      return fm || (fm = new WeakMap, Lf.set(Tm, fm)), fm.get(mm) || fm.set(mm, new Tm), fm.get(mm)
    }
    let tf = -1;
    const Uf = () => tf,
      df = mm => {
        addEventListener("pageshow", (Tm => {
          Tm.persisted && (tf = Tm.timeStamp, mm(Tm))
        }), !0)
      },
      gf = (mm, Tm, fm, hm) => {
        let Am, am;
        return xm => {
          Tm.value >= 0 && (xm || hm) && (am = Tm.value - (Am ?? 0), (am || void 0 === Am) && (Am = Tm.value, Tm.delta = am, Tm.rating = ((mm, Tm) => mm > Tm[1] ? "poor" : mm > Tm[0] ? "needs-improvement" : "good")(Tm.value, fm), mm(Tm)))
        }
      },
      Wf = mm => {
        requestAnimationFrame((() => requestAnimationFrame((() => mm()))))
      },
      Ff = () => lf()?.activationStart ?? 0;
    let mh = -1;
    const Th = new Set,
      fh = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      hh = mm => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === mm.type)
            for (const mm of Th) mm();
          isFinite(mh) || (mh = "visibilitychange" === mm.type ? mm.timeStamp : 0, removeEventListener("prerenderingchange", hh, !0))
        }
      },
      Ah = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (mh = 1 / 0), mh < 0) {
          const mm = Ff(),
            Tm = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((Tm => "hidden" === Tm.name && Tm.startTime >= mm))?.startTime;
          mh = Tm ?? fh(), addEventListener("visibilitychange", hh, !0), addEventListener("prerenderingchange", hh, !0), df((() => {
            setTimeout((() => {
              mh = fh()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return mh
          },
          onHidden(mm) {
            Th.add(mm)
          }
        }
      },
      ah = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Am = arguments.length > 4 ? arguments[4] : void 0,
          am = arguments.length > 5 ? arguments[5] : void 0,
          xm = arguments.length > 6 ? arguments[6] : void 0;
        const wm = lf(),
          Dm = wm?.navigationId || 0;
        let im = "navigate";
        return fm ? im = fm : Uf() >= 0 ? im = "back-forward-cache" : wm && (document.prerendering || Ff() > 0 ? im = "prerender" : document.wasDiscarded ? im = "restore" : wm.type && (im = wm.type.replace(/_/g, "-"))), {
          name: mm,
          value: Tm,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: im,
          navigationId: hm || Dm,
          navigationInteractionId: Am,
          navigationURL: am || wm?.name,
          navigationStartTime: xm || 0
        }
      },
      xh = function(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const hm = mm.filter((mm => PerformanceObserver.supportedEntryTypes.includes(mm)));
          if (hm.length > 0) {
            const mm = new PerformanceObserver((mm => {
              queueMicrotask((() => {
                const fm = mm.getEntries();
                hm.length > 1 && fm.sort(((mm, Tm) => mm.startTime + mm.duration - (Tm.startTime + Tm.duration))), Tm(fm)
              }))
            }));
            for (const Tm of hm) mm.observe({
              type: Tm,
              buffered: !0,
              ...fm
            });
            return mm
          }
        } catch {}
      },
      wh = mm => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && mm && mm.reportSoftNavs,
      Dh = (mm, Tm) => {
        if (mm.set(Tm.navigationId, Tm), mm.size > 2) {
          const Tm = mm.keys().next().value;
          void 0 !== Tm && mm.delete(Tm)
        }
      },
      ih = mm => {
        let Tm = !1;
        return () => {
          Tm || (mm(), Tm = !0)
        }
      };
    class Rh {
      u
    }
    const ph = mm => {
        document.prerendering ? addEventListener("prerenderingchange", mm, !0) : mm()
      },
      Eh = [1800, 3e3],
      oh = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const fm = wh(Tm);
        ph((() => {
          const hm = vf(Tm, Rh),
            Am = Ah();
          let am, xm = ah("FCP");
          const wm = xh(["paint"], (mm => {
            for (const Tm of mm) "first-contentful-paint" === Tm.name && (wm.disconnect(), Tm.startTime < Am.firstHiddenTime && (xm.value = Math.max(Tm.startTime - Ff(), 0), xm.entries.push(Tm), xm.navigationId = Tm.navigationId || xm.navigationId, am(!0)))
          }));
          wm && (am = gf(mm, xm, Eh, Tm.reportAllChanges), df((fm => {
            xm = ah("FCP", -1, "back-forward-cache", xm.navigationId, xm.navigationInteractionId, xm.navigationURL, Uf()), am = gf(mm, xm, Eh, Tm.reportAllChanges), Wf((() => {
              xm.value = performance.now() - fm.timeStamp, am(!0)
            }))
          }))), fm && xh(["soft-navigation"], (fm => {
            fm.forEach((fm => {
              hm.u && fm.navigationId && Dh(hm.u, fm);
              const Am = Math.max((fm.presentationTime || fm.paintTime || 0) - fm.startTime, 0);
              xm = ah("FCP", Am, "soft-navigation", fm.navigationId, fm.interactionId, fm.name, fm.startTime), am = gf(mm, xm, Eh, Tm.reportAllChanges), am(!0)
            }))
          }), Tm)
        }))
      },
      Oh = [.1, .25],
      Yh = mm => mm.find((mm => 1 === mm.node?.nodeType)) || mm[0];
    let qh = 0,
      jh = 1 / 0,
      Vh = 0;
    const Ih = mm => {
      for (const Tm of mm) Tm.interactionId && (jh = Math.min(jh, Tm.interactionId), Vh = Math.max(Vh, Tm.interactionId), qh = Vh ? (Vh - jh) / 7 + 1 : 0)
    };
    let Kh;
    const Qh = () => Kh ? qh : performance.interactionCount ?? 0;
    class nh {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Qh() - this.h
      }
      D() {
        this.h = Qh(), this.v.length = 0, this.p.clear()
      }
      S(mm) {
        const Tm = this.T(),
          fm = Math.min(this.v.length - 1, Math.floor(Tm / 50));
        return !Tm || -1 !== fm || "soft-navigation" !== mm && "back-forward-cache" !== mm ? this.v[fm] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(mm) {
        if (this.m?.(mm), !mm.interactionId) return;
        const Tm = this.v.at(-1);
        let fm = this.p.get(mm.interactionId);
        if (fm || this.v.length < 10 || mm.duration > Tm.k) {
          if (fm ? mm.duration > fm.k ? (fm.entries = [mm], fm.k = mm.duration) : mm.duration === fm.k && mm.startTime === fm.entries[0].startTime && fm.entries.push(mm) : (fm = {
              id: mm.interactionId,
              entries: [mm],
              k: mm.duration
            }, this.p.set(fm.id, fm), this.v.push(fm)), this.v.sort(((mm, Tm) => Tm.k - mm.k)), this.v.length > 10) {
            const mm = this.v.splice(10);
            for (const Tm of mm) this.p.delete(Tm.id)
          }
          this.M?.(fm)
        }
      }
    }
    const Jh = mm => {
        const Tm = "requestIdleCallback" in globalThis ? 1e3 : 0,
          fm = globalThis.requestIdleCallback || setTimeout,
          hm = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) mm();
        else {
          const Am = ih(mm);
          let am = -1;
          const xm = () => {
            hm(am), Am()
          };
          addEventListener("visibilitychange", xm, {
            once: !0,
            capture: !0
          }), am = fm((() => {
            removeEventListener("visibilitychange", xm, {
              capture: !0
            }), Am()
          }), {
            timeout: Tm
          })
        }
      },
      ch = [200, 500],
      zh = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const fm = vf(Tm = Object.assign({}, Tm), nh);
        let hm = [],
          Am = [],
          am = 0;
        const xm = new WeakMap,
          wm = new WeakMap;
        let Dm = !1;
        const im = () => {
            Dm || (Dm = !0, Jh(Rm))
          },
          Rm = () => {
            const mm = new Set(fm.v.map((mm => xm.get(mm.entries[0])))),
              Tm = Am.length - 10;
            Am = Am.filter(((fm, hm) => hm >= Tm || mm.has(fm)));
            const wm = new Set;
            for (const fm of Am) {
              const mm = pm(fm.startTime, fm.processingEnd);
              for (const Tm of mm) wm.add(Tm)
            }
            const im = hm.length - 10;
            hm = hm.filter(((mm, Tm) => wm.has(mm) || Tm >= im && mm.startTime > am)), Dm = !1
          };
        fm.m = mm => {
          const fm = mm.startTime + mm.duration;
          let hm;
          am = Math.max(am, mm.processingEnd);
          for (let am = Am.length - 1; am >= 0; am--) {
            const xm = Am[am];
            if (Math.abs(fm - xm.renderTime) <= 8) {
              hm = xm, hm.startTime = Math.min(mm.startTime, hm.startTime), hm.processingStart = Math.min(mm.processingStart, hm.processingStart), hm.processingEnd = Math.max(mm.processingEnd, hm.processingEnd), Tm.includeProcessedEventEntries && hm.entries.push(mm);
              break
            }
          }
          hm || (hm = {
            startTime: mm.startTime,
            processingStart: mm.processingStart,
            processingEnd: mm.processingEnd,
            renderTime: fm,
            entries: Tm.includeProcessedEventEntries ? [mm] : []
          }, Am.push(hm)), mm.interactionId && xm.set(mm, hm), im()
        }, fm.M = mm => {
          if (!wm.get(mm)) {
            const fm = mm.entries.find((mm => mm.target))?.target;
            if (fm) {
              const hm = Tm.generateTarget?.(fm) ?? Bf(fm);
              wm.set(mm, hm)
            } else {
              const Tm = mm.entries.find((mm => mm.targetSelector))?.targetSelector;
              Tm && wm.set(mm, Tm)
            }
          }
        };
        const pm = (mm, Tm) => {
          const fm = [];
          for (const Am of hm)
            if (!(Am.startTime + Am.duration < mm)) {
              if (Am.startTime > Tm) break;
              fm.push(Am)
            } return fm
        };
        xh(["long-animation-frame"], (mm => {
            hm = hm.concat(mm), im()
          }), Tm),
          function(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const fm = Ah();
            ph((() => {
              "interactionCount" in performance || Kh || (Kh = xh(["event"], Ih, {
                durationThreshold: 0
              }));
              let hm, Am = ah("INP");
              const am = vf(Tm, nh),
                xm = (fm, xm, wm, Dm, im) => {
                  am.D(), Am = ah("INP", -1, fm, xm, wm, Dm, im), hm = gf(mm, Am, ch, Tm.reportAllChanges)
                },
                wm = () => {
                  const mm = am.S(Am.navigationType);
                  mm && mm.k !== Am.value && (Am.value = mm.k, Am.entries = mm.entries, hm())
                },
                Dm = mm => {
                  wm(), hm(!0), xm("soft-navigation", mm.navigationId, mm.interactionId, mm.name, mm.startTime)
                },
                im = function(mm) {
                  let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Jh((() => {
                    for (const Tm of mm) "soft-navigation" !== Tm.entryType ? am.l(Tm) : Dm(Tm);
                    wm(), Tm && hm(!0)
                  }))
                },
                Rm = ["event", "first-input"];
              wh(Tm) && Rm.push("soft-navigation");
              const pm = xh(Rm, im, {
                ...Tm,
                durationThreshold: Tm.durationThreshold ?? 40
              });
              hm = gf(mm, Am, ch, Tm.reportAllChanges), pm && (fm.onHidden((() => {
                im(pm.takeRecords(), !0)
              })), df((() => {
                xm("back-forward-cache", Am.navigationId, Am.navigationInteractionId, Am.navigationURL, Uf())
              })))
            }))
          }((Tm => {
            mm((mm => {
              if (0 === mm.entries.length) {
                const Tm = mm.navigationStartTime || 0,
                  fm = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: mm.value,
                    loadState: Mf(Tm)
                  };
                return Object.assign(mm, {
                  attribution: fm
                })
              }
              const Tm = mm.entries[0],
                hm = xm.get(Tm),
                Am = Math.max(hm.processingStart, Tm.startTime),
                am = Math.max(Tm.startTime + Tm.duration, Am),
                Dm = Math.min(hm.processingEnd, am),
                im = hm.entries.sort(((mm, Tm) => mm.processingStart - Tm.processingStart)),
                Rm = pm(Tm.startTime, Dm),
                Em = fm.p.get(Tm.interactionId),
                om = {
                  interactionTarget: wm.get(Em),
                  interactionType: Tm.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: Tm.startTime,
                  nextPaintTime: am,
                  processedEventEntries: im,
                  longAnimationFrameEntries: Rm,
                  inputDelay: Am - Tm.startTime,
                  processingDuration: Dm - Am,
                  presentationDelay: am - Dm,
                  loadState: Mf(Tm.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (mm => {
                const Tm = mm.interactionTime,
                  fm = mm.nextPaintTime;
                if (!mm.longAnimationFrameEntries?.length || !Tm || !fm) return;
                const hm = mm.inputDelay,
                  Am = mm.processingDuration;
                let am, xm, wm = 0,
                  Dm = 0,
                  im = 0,
                  Rm = 0;
                for (const om of mm.longAnimationFrameEntries) {
                  Dm = Dm + om.startTime + om.duration - om.styleAndLayoutStart;
                  for (const mm of om.scripts) {
                    const fm = mm.startTime + mm.duration;
                    if (fm < Tm) continue;
                    const im = fm - Math.max(Tm, mm.startTime),
                      pm = mm.duration ? im / mm.duration * mm.forcedStyleAndLayoutDuration : 0;
                    wm += im - pm, Dm += pm, im > Rm && (xm = mm.startTime < Tm + hm ? "input-delay" : mm.startTime >= Tm + hm + Am ? "presentation-delay" : "processing-duration", am = mm, Rm = im)
                  }
                }
                const pm = mm.longAnimationFrameEntries.at(-1),
                  Em = pm ? pm.startTime + pm.duration : 0;
                Em >= Tm + hm + Am && (im = fm - Em), am && xm && (mm.longestScript = {
                  entry: am,
                  subpart: xm,
                  intersectingDuration: Rm
                }), mm.totalScriptDuration = wm, mm.totalStyleAndLayoutDuration = Dm, mm.totalPaintDuration = im, mm.totalUnattributedDuration = fm - Tm - wm - Dm - im
              })(om), Object.assign(mm, {
                attribution: om
              })
            })(Tm))
          }), Tm)
      };
    class Zh {
      m;
      u;
      l(mm) {
        this.m?.(mm)
      }
    }
    const kh = [2500, 4e3];
    let bh = 50;
    const Sh = [];
    xh(["resource"], (mm => {
      for (const Tm of mm) Sh.push(Tm), Sh.length > bh && Sh.shift()
    }));
    const eh = [800, 1800],
      Nh = mm => {
        document.prerendering ? ph((() => Nh(mm))) : "complete" !== document.readyState ? addEventListener("load", (() => Nh(mm)), !0) : setTimeout(mm)
      },
      Gh = "load_state",
      Xh = "time_to_first_byte";
    var Ph = class {
        constructor(mm, Tm) {
          this.corePushMeasurement = mm, this.webVitalConfig = Tm
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var mm;
          ! function(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const fm = vf(Tm = Object.assign({}, Tm), sf),
              hm = new WeakMap;
            fm.t = mm => {
                if (mm?.sources?.length) {
                  const fm = Yh(mm.sources),
                    Am = fm?.node;
                  if (Am) {
                    const mm = Tm.generateTarget?.(Am) ?? Bf(Am);
                    hm.set(fm, mm)
                  }
                }
              },
              function(mm) {
                let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const fm = Ah();
                oh(ih((() => {
                  let hm, Am = ah("CLS", 0);
                  const am = vf(Tm, sf),
                    xm = (fm, xm, wm, Dm, im) => {
                      Am = ah("CLS", 0, fm, xm, wm, Dm, im), am.o = 0, hm = gf(mm, Am, Oh, Tm.reportAllChanges)
                    },
                    wm = function() {
                      let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      am.o > Am.value && (Am.value = am.o, Am.entries = am.i), hm(mm)
                    },
                    Dm = mm => {
                      wm(!0), xm("soft-navigation", mm.navigationId, mm.interactionId, mm.name, mm.startTime)
                    },
                    im = mm => {
                      for (const Tm of mm) "soft-navigation" !== Tm.entryType ? am.l(Tm) : Dm(Tm);
                      wm()
                    },
                    Rm = ["layout-shift"];
                  wh(Tm) && Rm.push("soft-navigation");
                  const pm = xh(Rm, im);
                  pm && (hm = gf(mm, Am, Oh, Tm.reportAllChanges), fm.onHidden((() => {
                    im(pm.takeRecords()), hm(!0)
                  })), df((() => {
                    xm("back-forward-cache", Am.navigationId, Am.navigationInteractionId, Am.navigationURL, Uf()), Wf(hm)
                  })), setTimeout(hm))
                })))
              }((Tm => {
                mm((mm => {
                  let Tm = {};
                  if (mm.entries.length) {
                    const fm = mm.entries.reduce(((mm, Tm) => mm.value > Tm.value ? mm : Tm));
                    if (fm?.sources?.length) {
                      const mm = Yh(fm.sources);
                      mm && (Tm = {
                        largestShiftTarget: hm.get(mm),
                        largestShiftTime: fm.startTime,
                        largestShiftValue: fm.value,
                        largestShiftSource: mm,
                        largestShiftEntry: fm,
                        loadState: Mf(fm.startTime)
                      })
                    }
                  }
                  return Object.assign(mm, {
                    attribution: Tm
                  })
                })(Tm))
              }), Tm)
          }((mm => {
            const {
              loadState: Tm,
              largestShiftValue: fm,
              largestShiftTime: hm,
              largestShiftTarget: Am
            } = mm.attribution, am = this.buildInitialValues(mm);
            this.addIfPresent(am, "largest_shift_value", fm), this.addIfPresent(am, "largest_shift_time", hm);
            const xm = this.buildInitialContext(mm);
            this.addIfPresent(xm, Gh, Tm), this.addIfPresent(xm, "largest_shift_target", Am), this.pushMeasurement(am, xm)
          }), {
            reportAllChanges: null === (mm = this.webVitalConfig) || void 0 === mm ? void 0 : mm.reportAllChanges
          })
        }
        measureFCP() {
          var mm;
          ! function(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const fm = vf(Tm = Object.assign({}, Tm), Rh);
            wh(Tm) && (fm.u = new Map), oh((Tm => {
              mm((mm => {
                let Tm = {
                  timeToFirstByte: 0,
                  firstByteToFCP: mm.value,
                  loadState: Mf(Uf())
                };
                if ("soft-navigation" !== mm.navigationType) {
                  if (mm.entries.length) {
                    const fm = lf(),
                      hm = mm.entries.at(-1);
                    if (fm) {
                      const Am = fm.responseStart,
                        am = fm.activationStart || 0,
                        xm = Math.max(0, Am - am);
                      Tm = {
                        timeToFirstByte: xm,
                        firstByteToFCP: mm.value - xm,
                        loadState: Mf(mm.entries[0].startTime),
                        navigationEntry: fm,
                        fcpEntry: hm
                      }
                    }
                  }
                } else {
                  const hm = fm.u?.get(mm.navigationId);
                  hm && (Tm = {
                    timeToFirstByte: 0,
                    firstByteToFCP: mm.value,
                    loadState: "complete",
                    navigationEntry: hm
                  })
                }
                return Object.assign(mm, {
                  attribution: Tm
                })
              })(Tm))
            }), Tm)
          }((mm => {
            const {
              firstByteToFCP: Tm,
              timeToFirstByte: fm,
              loadState: hm
            } = mm.attribution, Am = this.buildInitialValues(mm);
            this.addIfPresent(Am, "first_byte_to_fcp", Tm), this.addIfPresent(Am, Xh, fm);
            const am = this.buildInitialContext(mm);
            this.addIfPresent(am, Gh, hm), this.pushMeasurement(Am, am)
          }), {
            reportAllChanges: null === (mm = this.webVitalConfig) || void 0 === mm ? void 0 : mm.reportAllChanges
          })
        }
        measureINP() {
          var mm;
          zh((mm => {
            var Tm;
            const {
              interactionTime: fm,
              presentationDelay: hm,
              inputDelay: Am,
              processingDuration: am,
              nextPaintTime: xm,
              loadState: wm,
              interactionTarget: Dm,
              interactionType: im,
              totalScriptDuration: Rm,
              totalStyleAndLayoutDuration: pm,
              totalPaintDuration: Em,
              totalUnattributedDuration: om,
              longestScript: Om
            } = mm.attribution, Ym = this.buildInitialValues(mm);
            this.addIfPresent(Ym, "interaction_time", fm), this.addIfPresent(Ym, "presentation_delay", hm), this.addIfPresent(Ym, "input_delay", Am), this.addIfPresent(Ym, "processing_duration", am), this.addIfPresent(Ym, "next_paint_time", xm), this.addNumberIfDefined(Ym, "total_script_duration", Rm), this.addNumberIfDefined(Ym, "total_style_and_layout_duration", pm), this.addNumberIfDefined(Ym, "total_paint_duration", Em), this.addNumberIfDefined(Ym, "total_unattributed_duration", om), this.addNumberIfDefined(Ym, "longest_script_intersecting_duration", null === Om || void 0 === Om ? void 0 : Om.intersectingDuration);
            const qm = this.buildInitialContext(mm);
            this.addIfPresent(qm, Gh, wm), this.addIfPresent(qm, "interaction_target", Dm), this.addIfPresent(qm, "interaction_type", im), this.addIfPresent(qm, "longest_script_subpart", null === Om || void 0 === Om ? void 0 : Om.subpart), this.addIfPresent(qm, "longest_script_invoker_type", null === Om || void 0 === Om ? void 0 : Om.entry.invokerType), (null === (Tm = this.webVitalConfig) || void 0 === Tm ? void 0 : Tm.trackAttributionSources) && (this.addIfPresent(qm, "longest_script_invoker", null === Om || void 0 === Om ? void 0 : Om.entry.invoker), this.addIfPresent(qm, "longest_script_source_url", null === Om || void 0 === Om ? void 0 : Om.entry.sourceURL), this.addIfPresent(qm, "longest_script_source_function_name", null === Om || void 0 === Om ? void 0 : Om.entry.sourceFunctionName), this.addIfPresent(qm, "longest_script_source_char_position", void 0 !== (null === Om || void 0 === Om ? void 0 : Om.entry.sourceCharPosition) ? String(Om.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Ym, qm)
          }), {
            reportAllChanges: null === (mm = this.webVitalConfig) || void 0 === mm ? void 0 : mm.reportAllChanges
          })
        }
        measureLCP() {
          var mm;
          ! function(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (Tm = Object.assign({}, Tm)).resourceBufferSize && (bh = Tm.resourceBufferSize);
            const fm = vf(Tm, Zh),
              hm = new WeakMap;
            wh(Tm) && (fm.u = new Map), fm.m = mm => {
                const fm = mm.element;
                if (fm) {
                  const Am = Tm.generateTarget?.(fm) ?? Bf(fm);
                  hm.set(mm, Am)
                } else mm.id && hm.set(mm, `#${mm.id}`)
              },
              function(mm) {
                let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  fm = !1;
                const hm = wh(Tm);
                ph((() => {
                  let Am, am = Ah(),
                    xm = ah("LCP");
                  const wm = vf(Tm, Zh),
                    Dm = (hm, wm, Dm, im, Rm) => {
                      xm = ah("LCP", -1, hm, wm, Dm, im, Rm), Am = gf(mm, xm, kh, Tm.reportAllChanges), fm = !1, "soft-navigation" === hm && (am = Ah(!0))
                    },
                    im = mm => {
                      wm.u && mm.navigationId && Dh(wm.u, mm), fm || Am(!0), Dm("soft-navigation", mm.navigationId, mm.interactionId, mm.name, mm.startTime);
                      const Tm = mm.getLargestInteractionContentfulPaint?.();
                      Tm && Rm([Tm])
                    },
                    Rm = mm => {
                      Tm.reportAllChanges || hm || (mm = mm.slice(-1));
                      for (const Tm of mm) {
                        if (!Tm) continue;
                        if ("soft-navigation" === Tm.entryType) {
                          im(Tm);
                          continue
                        }
                        let mm = 0,
                          fm = [],
                          hm = Tm.startTime;
                        if ("largest-contentful-paint" === Tm.entryType) mm = Math.max(Tm.startTime - Ff(), 0), wm.l(Tm), fm = [Tm];
                        else if ("interaction-contentful-paint" === Tm.entryType) {
                          const Am = Tm;
                          if (!xm.navigationId) continue;
                          if ("interactionId" in Am && Am.interactionId != xm.navigationInteractionId) continue;
                          hm = Am.largestContentfulPaint?.renderTime || 0, mm = Math.max(hm - Tm.startTime, 0), Am.largestContentfulPaint && (wm.l(Am.largestContentfulPaint), fm = [Am.largestContentfulPaint])
                        }
                        hm < am.firstHiddenTime && (xm.value = mm, xm.entries = fm, Am())
                      }
                    },
                    pm = ["largest-contentful-paint"];
                  hm && pm.push("interaction-contentful-paint", "soft-navigation");
                  const Em = xh(pm, Rm);
                  if (Em) {
                    Am = gf(mm, xm, kh, Tm.reportAllChanges);
                    const am = ["keydown", "click", "visibilitychange"],
                      wm = mm => {
                        if (mm.isTrusted && !fm) {
                          const mm = xm.id;
                          Jh((() => {
                            if (!fm) {
                              if (!hm) {
                                Em.disconnect();
                                for (const mm of am) removeEventListener(mm, wm, {
                                  capture: !0
                                })
                              }
                              mm === xm.id && (fm = !0, Am(!0))
                            }
                          }))
                        }
                      };
                    for (const mm of am) addEventListener(mm, wm, {
                      capture: !0
                    });
                    df((hm => {
                      Dm("back-forward-cache", xm.navigationId, xm.navigationInteractionId, xm.navigationURL, Uf()), Am = gf(mm, xm, kh, Tm.reportAllChanges), Wf((() => {
                        xm.value = performance.now() - hm.timeStamp, fm = !0, Am(!0)
                      }))
                    }))
                  }
                }))
              }((Tm => {
                mm((mm => {
                  let Tm = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: mm.value
                  };
                  if (mm.entries.length) {
                    const Am = mm.entries.at(-1),
                      am = mm => mm.name === Am.url && (mm.requestStart || mm.startTime) <= Am.startTime,
                      xm = Am.url && (Sh.findLast(am) || performance.getEntriesByType("resource").findLast(am));
                    let wm;
                    Tm.target = hm.get(Am), Tm.lcpEntry = Am, Am.url && (Tm.url = Am.url), xm && (Tm.lcpResourceEntry = xm);
                    let Dm = 0,
                      im = 0;
                    if ("soft-navigation" !== mm.navigationType ? (wm = lf(), Dm = wm?.activationStart ?? 0, im = wm?.responseStart ?? 0) : (Dm = mm.navigationStartTime || 0, wm = fm.u?.get(mm.navigationId)), wm) {
                      const fm = Math.max(0, im - Dm),
                        hm = Math.max(fm, xm ? (xm.requestStart || xm.startTime) - Dm : 0),
                        Am = Math.min(mm.value, Math.max(hm, xm ? xm.responseEnd - Dm : 0));
                      Tm = {
                        ...Tm,
                        timeToFirstByte: fm,
                        resourceLoadDelay: hm - fm,
                        resourceLoadDuration: Am - hm,
                        elementRenderDelay: mm.value - Am,
                        navigationEntry: wm
                      }
                    }
                  }
                  return Object.assign(mm, {
                    attribution: Tm
                  })
                })(Tm))
              }), Tm)
          }((mm => {
            var Tm;
            const {
              elementRenderDelay: fm,
              resourceLoadDelay: hm,
              resourceLoadDuration: Am,
              timeToFirstByte: am,
              target: xm,
              url: wm,
              lcpResourceEntry: Dm
            } = mm.attribution, im = this.buildInitialValues(mm);
            this.addIfPresent(im, "element_render_delay", fm), this.addIfPresent(im, "resource_load_delay", hm), this.addIfPresent(im, "resource_load_duration", Am), this.addIfPresent(im, Xh, am);
            const Rm = this.buildInitialContext(mm);
            this.addIfPresent(Rm, "element", xm), (null === (Tm = this.webVitalConfig) || void 0 === Tm ? void 0 : Tm.trackAttributionSources) && (this.addIfPresent(Rm, "resource_url", wm), this.addIfPresent(Rm, "resource_delivery_type", null === Dm || void 0 === Dm ? void 0 : Dm.deliveryType), this.addIfPresent(Rm, "resource_initiator_type", null === Dm || void 0 === Dm ? void 0 : Dm.initiatorType)), this.pushMeasurement(im, Rm)
          }), {
            reportAllChanges: null === (mm = this.webVitalConfig) || void 0 === mm ? void 0 : mm.reportAllChanges
          })
        }
        measureTTFB() {
          var mm;
          ! function(mm) {
            ! function(mm) {
              let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const fm = wh(Tm);
              let hm = ah("TTFB"),
                Am = gf(mm, hm, eh, Tm.reportAllChanges);
              Nh((() => {
                const am = lf();
                if (am) {
                  const xm = am.responseStart;
                  hm.value = Math.max(xm - Ff(), 0), hm.entries = [am], Am(!0), df((() => {
                    hm = ah("TTFB", 0, "back-forward-cache", hm.navigationId, hm.navigationInteractionId, hm.navigationURL, Uf()), Am = gf(mm, hm, eh, Tm.reportAllChanges), Am(!0)
                  })), fm && xh(["soft-navigation"], (fm => {
                    fm.forEach((fm => {
                      fm.navigationId && (hm = ah("TTFB", 0, "soft-navigation", fm.navigationId, fm.interactionId, fm.name, fm.startTime), hm.entries = [fm], Am = gf(mm, hm, eh, Tm.reportAllChanges), Am(!0))
                    }))
                  }), Tm)
                }
              }))
            }((Tm => {
              mm((mm => {
                const Tm = mm.entries[0];
                let fm = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: Tm
                };
                if (mm.entries.length && Tm instanceof PerformanceNavigationTiming) {
                  const hm = Tm.activationStart || 0,
                    Am = Math.max((Tm.workerStart || Tm.fetchStart || 0) - hm, 0),
                    am = Math.max(Tm.domainLookupStart - hm, 0),
                    xm = Math.max(Tm.connectStart - hm, 0),
                    wm = Math.max(Tm.connectEnd - hm, 0);
                  fm = {
                    waitingDuration: Am,
                    cacheDuration: am - Am,
                    dnsDuration: xm - am,
                    connectionDuration: wm - xm,
                    requestDuration: mm.value - wm,
                    navigationEntry: Tm
                  }
                }
                return Object.assign(mm, {
                  attribution: fm
                })
              })(Tm))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((mm => {
            const {
              dnsDuration: Tm,
              connectionDuration: fm,
              requestDuration: hm,
              waitingDuration: Am,
              cacheDuration: am
            } = mm.attribution, xm = this.buildInitialValues(mm);
            this.addIfPresent(xm, "dns_duration", Tm), this.addIfPresent(xm, "connection_duration", fm), this.addIfPresent(xm, "request_duration", hm), this.addIfPresent(xm, "waiting_duration", Am), this.addIfPresent(xm, "cache_duration", am);
            const wm = this.buildInitialContext(mm);
            this.pushMeasurement(xm, wm)
          }), {
            reportAllChanges: null === (mm = this.webVitalConfig) || void 0 === mm ? void 0 : mm.reportAllChanges
          })
        }
        buildInitialValues(mm) {
          return {
            [mm.name.toLowerCase()]: mm.value,
            delta: mm.delta
          }
        }
        buildInitialContext(mm) {
          var Tm;
          const fm = null !== (Tm = TT("com.grafana.faro.lastNavigationId", Wm)) && void 0 !== Tm ? Tm : Cf;
          return {
            id: mm.id,
            rating: mm.rating,
            navigation_type: mm.navigationType,
            navigation_entry_id: fm
          }
        }
        pushMeasurement(mm, Tm) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: mm
          }, {
            context: Tm
          })
        }
        addIfPresent(mm, Tm, fm) {
          fm && (mm[Tm] = fm)
        }
        addNumberIfDefined(mm, Tm, fm) {
          void 0 !== fm && (mm[Tm] = fm)
        }
      },
      Hh = class extends ff {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = hf
        }
        initialize() {
          this.logDebug("Initializing"), new Ph(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const yh = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function Ch() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const Tm of mm)
        if ("traceparent" === Tm.name) {
          if (!yh.test(Tm.description)) continue;
          const [, mm, fm] = Tm.description.split("-");
          if (null != mm && null != fm) return {
            traceId: mm,
            spanId: fm
          };
          break
        }
    }

    function rh(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: fm,
        monoNow: hm
      } = Tm;
      return Math.min(fm, fm - (hm - mm))
    }

    function sh(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [fm, hm] of Object.entries(Tm)) {
        const Tm = mm[fm];
        return null != Tm && (Sm(hm) ? hm.includes(Tm) : Tm === hm)
      }
      return !0
    }

    function lh(mm) {
      const {
        connectEnd: Tm,
        connectStart: fm,
        decodedBodySize: hm,
        domainLookupEnd: Am,
        domainLookupStart: am,
        duration: xm,
        encodedBodySize: wm,
        fetchStart: Dm,
        initiatorType: im,
        name: Rm,
        nextHopProtocol: pm,
        redirectEnd: Em,
        redirectStart: om,
        renderBlockingStatus: Om,
        requestStart: Ym,
        responseEnd: qm,
        responseStart: jm,
        responseStatus: Vm,
        secureConnectionStart: Im,
        transferSize: Km,
        workerStart: Qm
      } = mm;
      return {
        name: Rm,
        httpHost: uh(Rm),
        duration: Bh(xm),
        tcpHandshakeTime: Bh(Tm - fm),
        dnsLookupTime: Bh(Am - am),
        tlsNegotiationTime: Bh(Tm - Im),
        responseStatus: Bh(Vm),
        redirectTime: Bh(Em - om),
        requestTime: Bh(jm - Ym),
        responseTime: Bh(qm - jm),
        fetchTime: Bh(qm - Dm),
        serviceWorkerTime: Bh(Qm > 0 ? Dm - Qm : 0),
        decodedBodySize: Bh(hm),
        encodedBodySize: Bh(wm),
        cacheHitStatus: function() {
          let mm = "fullLoad";
          0 === Km ? hm > 0 && (mm = "cache") : null != Vm ? 304 === Vm && (mm = "conditionalFetch") : wm > 0 && Km < wm && (mm = "conditionalFetch");
          return mm
        }(),
        renderBlockingStatus: Bh(Om),
        protocol: pm,
        initiatorType: im,
        visibilityState: document.visibilityState,
        ttfb: Bh(jm - Ym),
        transferSize: Bh(Km)
      }
    }

    function Mh(mm) {
      const {
        activationStart: Tm,
        domComplete: fm,
        domContentLoadedEventEnd: hm,
        domContentLoadedEventStart: Am,
        domInteractive: am,
        fetchStart: xm,
        loadEventEnd: wm,
        loadEventStart: Dm,
        responseStart: im,
        type: Rm
      } = mm, pm = function() {
        var mm;
        return null != (null === (mm = performance.timing) || void 0 === mm ? void 0 : mm.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return pT(pT({}, lh(mm)), {}, {
        pageLoadTime: Bh(fm - xm),
        documentParsingTime: Bh(pm ? am - pm : null),
        domProcessingTime: Bh(fm - am),
        domContentLoadHandlerTime: Bh(hm - Am),
        onLoadTime: Bh(wm - Dm),
        ttfb: Bh(Math.max(im - (null !== Tm && void 0 !== Tm ? Tm : 0), 0)),
        type: Rm
      })
    }

    function uh(mm) {
      try {
        return new URL(mm).host || Cf
      } catch (Tm) {
        return Cf
      }
    }

    function Bh(mm) {
      return null == mm ? Cf : "number" === typeof mm ? Math.round(mm > 0 ? mm : 0).toString() : mm.toString()
    }
    const Lh = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function vh(mm, Tm, fm, hm, Am, am, xm) {
      try {
        var wm = mm[am](xm),
          Dm = wm.value
      } catch (mm) {
        return void fm(mm)
      }
      wm.done ? Tm(Dm) : Promise.resolve(Dm).then(hm, Am)
    }

    function th(mm) {
      return function() {
        var Tm = this,
          fm = arguments;
        return new Promise((function(hm, Am) {
          var am = mm.apply(Tm, fm);

          function xm(mm) {
            vh(am, hm, Am, xm, wm, "next", mm)
          }

          function wm(mm) {
            vh(am, hm, Am, xm, wm, "throw", mm)
          }
          xm(void 0)
        }))
      }
    }
    const Uh = new Kf;
    var dh = class extends ff {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = hf
      }
      initialize() {
        var mm = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let Tm = !1;
        const fm = () => {
          ! function(mm) {
            if ("complete" === document.readyState) mm();
            else {
              const Tm = () => {
                "complete" === document.readyState && (mm(), document.removeEventListener("readystatechange", Tm))
              };
              document.addEventListener("readystatechange", Tm)
            }
          }(th((function*() {
            if (Tm) return;
            const fm = mm.api.pushEvent,
              {
                faroNavigationId: hm
              } = yield function(mm) {
                let Tm;
                const fm = new Promise((mm => {
                  Tm = mm
                }));
                return new PerformanceObserver((fm => {
                  var hm;
                  const [Am] = fm.getEntries();
                  if (null == Am || dm(Am.name)) return;
                  const am = Am.toJSON();
                  let xm = Ch(null === am || void 0 === am ? void 0 : am.serverTiming);
                  const wm = null !== (hm = TT("com.grafana.faro.lastNavigationId", Wm)) && void 0 !== hm ? hm : Cf,
                    Dm = pT(pT({}, Mh(am)), {}, {
                      faroNavigationId: VT(),
                      faroPreviousNavigationId: wm
                    });
                  fT("com.grafana.faro.lastNavigationId", Dm.faroNavigationId, Wm), mm("faro.performance.navigation", Dm, void 0, {
                    spanContext: xm,
                    timestampOverwriteMs: rh(am.startTime)
                  }), Tm(Dm)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), fm
              }(fm);
            Tm || null == hm || function(mm, Tm, fm, hm) {
              const Am = hm.trackResources;
              new PerformanceObserver((hm => {
                const am = hm.getEntries(),
                  xm = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const wm of am) {
                  if (dm(wm.name)) continue;
                  null === fm || void 0 === fm || fm.notify({
                    type: "resource"
                  });
                  const hm = wm.toJSON();
                  let am = Ch(null === hm || void 0 === hm ? void 0 : hm.serverTiming);
                  (null == Am && sh(hm, Lh) || Am) && Tm("faro.performance.resource", pT(pT({}, lh(hm)), {}, {
                    faroNavigationId: mm,
                    faroResourceId: VT()
                  }), void 0, {
                    spanContext: am,
                    timestampOverwriteMs: rh(hm.startTime, xm)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(hm, fm, Uh, mm.config)
          })))
        };
        this.cancelInitialization = () => {
          Tm = !0, document.removeEventListener("prerenderingchange", fm)
        }, document.prerendering ? document.addEventListener("prerenderingchange", fm, {
          once: !0
        }) : fm()
      }
      destroy() {
        var mm;
        null === (mm = this.cancelInitialization) || void 0 === mm || mm.call(this), this.cancelInitialization = void 0
      }
    };
    const gh = "data-faro-user-action-name",
      Wh = gh.replace(/-name$/, "-timeout"),
      Fh = 1e3;

    function mA(mm) {
      return `data-${(mm.startsWith("data-")?mm.slice(5):mm).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function TA(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BT;
      if (void 0 === mm) return Tm;
      let hm = NaN;
      try {
        hm = "string" === typeof mm && "" === mm.trim() ? NaN : Number(mm)
      } catch (Am) {}
      return !Number.isFinite(hm) || hm <= 0 ? (fm(`initialActivityTimeout must be a finite number greater than zero; using ${Tm} ms`), Tm) : hm > 1e3 ? (fm(`initialActivityTimeout cannot exceed ${Fh} ms; clamping to the maximum`), Fh) : hm
    }

    function fA(mm, Tm, fm) {
      return void 0 !== mm && window.clearTimeout(mm), window.setTimeout((() => {
        Tm()
      }), fm)
    }

    function hA(mm) {
      return mm.type === If
    }
    let AA, aA;

    function xA() {
      return AA || (AA = new Kf), aA || (aA = new MutationObserver(((mm, Tm) => {
        AA.notify({
          type: "dom-mutation"
        })
      })), aA.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), AA
    }
    const wA = "fetch",
      DA = "xhr";
    let iA, RA, pA, EA, oA = !1;

    function OA() {
      if (iA) return iA;

      function mm(mm) {
        iA.notify({
          type: Vf,
          request: mm
        })
      }

      function Tm(mm) {
        iA.notify({
          type: If,
          request: mm
        })
      }
      return iA = new Kf, oA || (! function(mm) {
        let {
          onRequestEnd: Tm,
          onRequestStart: fm
        } = mm;
        pA || (pA = window.fetch);
        window.fetch = function() {
          var mm, hm;
          const Am = null !== (mm = gm(arguments[0])) && void 0 !== mm ? mm : "",
            am = dm(Am),
            xm = (null !== (hm = arguments[1]) && void 0 !== hm ? hm : {}).method,
            wm = VT();
          return am || fm({
            url: Am,
            method: xm,
            requestId: wm,
            apiType: wA
          }), pA.apply(this, arguments).then((mm => (am || Tm({
            url: Am,
            method: xm,
            requestId: wm,
            apiType: wA
          }), mm))).catch((mm => {
            throw am || Tm({
              url: Am,
              method: xm,
              requestId: wm,
              apiType: wA
            }), mm
          }))
        }
      }({
        onRequestStart: mm,
        onRequestEnd: Tm
      }), function(mm) {
        let {
          onRequestStart: Tm,
          onRequestEnd: fm
        } = mm;
        RA || (RA = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const mm = arguments[1],
            hm = dm(mm),
            Am = arguments[0],
            am = VT();
          this.addEventListener("loadstart", (function() {
            hm || Tm({
              url: mm,
              method: Am,
              requestId: am,
              apiType: DA
            })
          })), this.addEventListener("load", (function() {
            hm || fm({
              url: mm,
              method: Am,
              requestId: am,
              apiType: DA
            })
          })), this.addEventListener("error", (function() {
            hm || fm({
              url: mm,
              method: Am,
              requestId: am,
              apiType: DA
            })
          })), this.addEventListener("abort", (function() {
            hm || fm({
              url: mm,
              method: Am,
              requestId: am,
              apiType: DA
            })
          })), RA.apply(this, arguments)
        }
      }({
        onRequestStart: mm,
        onRequestEnd: Tm
      }), oA = !0), iA
    }
    let YA, qA = !1;
    let jA = function(mm) {
      return mm[mm.Started = 0] = "Started", mm[mm.Halted = 1] = "Halted", mm[mm.Cancelled = 2] = "Cancelled", mm[mm.Ended = 3] = "Ended", mm
    }({});
    var VA = class {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = mm, this.logDebug = Tm, this.initialActivityTimeout = fm, this.http = OA(), this.dom = xA(), this.perf = (EA || (EA = new Kf), qA || (YA = Uh.subscribe((mm => {
          "resource" === mm.type && EA.notify({
            type: "resource-entry"
          })
        })), qA = !0), EA), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Kf).merge(this.http, this.dom, this.perf).takeWhile((() => [jA.Started, jA.Halted].includes(this.userAction.getState()))).filter((mm => !!(this.userAction.getState() !== jA.Halted || hA(mm) && this.runningRequests.has(mm.request.requestId)))).subscribe((mm => {
          (function(mm) {
            return mm.type === Vf
          })(mm) && this.runningRequests.set(mm.request.requestId, mm.request), hA(mm) && this.runningRequests.delete(mm.request.requestId), hA(mm) ? this.userAction.getState() === jA.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((mm => [jA.Ended, jA.Cancelled].includes(mm))).first().subscribe((() => this.cleanup())), this.startupTid = fA(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === jA.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === jA.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = fA(this.haltTid, (() => {
          this.userAction.getState() === jA.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var mm, Tm;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (mm = this.allMonitorsSub) || void 0 === mm || mm.unsubscribe(), null === (Tm = this.stateSub) || void 0 === Tm || Tm.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(mm) {
        void 0 !== mm && window.clearTimeout(mm)
      }
    };

    function IA(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BT;
      var fm;
      const {
        api: hm,
        config: Am,
        internalLogger: am
      } = mm, xm = TA(null === (fm = Am.userActionsInstrumentation) || void 0 === fm ? void 0 : fm.initialActivityTimeout, 100, Tm);
      return {
        processUserEvent: function(mm) {
          var Tm, fm;
          const am = null !== (Tm = null === (fm = Am.userActionsInstrumentation) || void 0 === fm ? void 0 : fm.dataAttributeName) && void 0 !== Tm ? Tm : gh,
            xm = mm.target;
          if (!(xm instanceof Element)) return;
          const wm = function(mm, Tm) {
              let fm = mm;
              for (; fm;) {
                if (fm.hasAttribute(Tm)) return fm;
                fm = fm.parentElement
              }
              return null
            }(xm, mA(am)),
            Dm = function(mm, Tm) {
              if (!mm) return;
              const fm = function(mm) {
                  return mA(mm).slice(5).replace(/-(.)/g, ((mm, Tm) => Tm.toUpperCase()))
                }(Tm),
                hm = mm.dataset;
              for (const Am in hm)
                if (Am === fm) return hm[Am]
            }(wm, am);
          if (!wm || !Dm) return;
          const im = function(mm, Tm) {
            const fm = mm.getAttribute(function(mm) {
              const Tm = mA(mm);
              return Tm.endsWith("-name") ? `${Tm.slice(0,-5)}-timeout` : `${Tm}-timeout`
            }(Tm));
            return null === fm ? void 0 : Number(fm)
          }(wm, am);
          hm.startUserAction(Dm, {}, {
            triggerName: mm.type,
            initialActivityTimeout: im
          })
        },
        processUserActionStarted: function(mm, fm) {
          const hm = mm,
            Am = TA(fm, xm, Tm);
          new VA(hm, am.debug, Am).attach()
        }
      }
    }
    const KA = "user_action_start",
      QA = {
        Normal: "normal",
        Critical: "critical"
      };
    var nA = class {
        constructor() {
          this.buffer = []
        }
        addItem(mm) {
          this.buffer.push(mm)
        }
        flushBuffer(mm) {
          if (bm(mm))
            for (const Tm of this.buffer) mm(Tm);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      JA = class extends Kf {
        constructor(mm) {
          let {
            name: Tm,
            parentId: fm,
            trigger: hm,
            transports: Am,
            attributes: am,
            trackUserActionsExcludeItem: xm,
            importance: wm = QA.Normal,
            pushEvent: Dm
          } = mm;
          super(), this.name = Tm, this.attributes = am, this.id = VT(), this.trigger = hm, this.parentId = null !== fm && void 0 !== fm ? fm : this.id, this.trackUserActionsExcludeItem = xm, this.importance = wm, this._pushEvent = Dm, this._itemBuffer = new nA, this._transports = Am, this._state = 0, this._start()
        }
        addItem(mm) {
          return 0 === this._state && (this._itemBuffer.addItem(mm), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = oT(), this._startTimeMono = OT())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((mm => {
            this._transports.execute(mm)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const mm = oT(),
            Tm = OT() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((mm => {
            if (function(mm, Tm) {
                return (null === Tm || void 0 === Tm ? void 0 : Tm(mm)) || "measurement" === mm.type && "web-vitals" === mm.payload.type
              }(mm, this.trackUserActionsExcludeItem)) return void this._transports.execute(mm);
            const Tm = FT(FT({}, mm), {}, {
              payload: FT(FT({}, mm.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(Tm)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", FT({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: mm.toString(),
            userActionDuration: Tm.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, yT(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: mm => (mm.action = {
              id: this.id,
              name: this.name
            }, mm)
          })
        }
        getState() {
          return this._state
        }
      };
    const cA = new Kf;

    function zA(mm, Tm) {
      return !!mm && (0 === (null === mm || void 0 === mm ? void 0 : mm.getState()) && (mm.addItem(Tm), !0))
    }
    var ZA = class extends ff {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = hf
        }
        initialize() {
          const {
            processUserEvent: mm,
            processUserActionStarted: Tm
          } = IA(Ym, (mm => this.logWarn(mm)));
          this._processUserEvent = mm, this._processKeydown = Tm => {
            [" ", "Enter"].includes(Tm.key) && mm(Tm)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = cA.subscribe((mm => {
            let {
              type: fm,
              userAction: hm,
              initialActivityTimeout: Am
            } = mm;
            "user_action_start" === fm && Tm(hm, Am)
          }))
        }
        destroy() {
          var mm;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (mm = this._userActionSub) || void 0 === mm || mm.unsubscribe()
        }
      },
      kA = class extends ff {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = hf, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(mm) {
          const Tm = {
            blockedURI: mm.blockedURI,
            columnNumber: mm.columnNumber,
            disposition: mm.disposition,
            documentURI: mm.documentURI,
            effectiveDirective: mm.effectiveDirective,
            lineNumber: mm.lineNumber,
            originalPolicy: mm.originalPolicy,
            referrer: mm.referrer,
            sample: mm.sample,
            sourceFile: mm.sourceFile,
            statusCode: mm.statusCode,
            violatedDirective: mm.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", yT(Tm))
        }
      };
    var bA = class extends Kf {
      constructor(mm, Tm) {
        var fm, hm, Am, am;
        super(), this._tracking = !1, this.eventsObservable = mm, this._options = {
          inactivityMs: null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.inactivityMs) && void 0 !== fm ? fm : 100,
          drainTimeoutMs: null !== (hm = null === Tm || void 0 === Tm ? void 0 : Tm.drainTimeoutMs) && void 0 !== hm ? hm : 1e4,
          isOperationStart: null !== (Am = null === Tm || void 0 === Tm ? void 0 : Tm.isOperationStart) && void 0 !== Am ? Am : () => {},
          isOperationEnd: null !== (am = null === Tm || void 0 === Tm ? void 0 : Tm.isOperationEnd) && void 0 !== am ? am : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((mm => {
          var Tm;
          this._lastEventTime = OT(), null === (Tm = this._currentEvents) || void 0 === Tm || Tm.push(mm);
          const fm = this._options.isOperationStart(mm);
          var hm;
          fm && (null === (hm = this._activeOperations) || void 0 === hm || hm.set(fm, !0));
          const Am = this._options.isOperationEnd(mm);
          var am;
          Am && (null === (am = this._activeOperations) || void 0 === am || am.delete(Am));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = OT(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let mm;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), mm = this.hasActiveOperations() ? OT() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: mm
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = SA(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = SA(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(mm) {
        mm && clearTimeout(mm)
      }
    };

    function SA(mm, Tm, fm) {
      return mm && clearTimeout(mm), mm = setTimeout((() => {
        Tm()
      }), fm)
    }
    let eA;
    const NA = new Set,
      GA = new Map;
    let XA, PA, HA, yA, CA, rA, sA, lA, MA = !1;
    var uA = class extends ff {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = hf
      }
      initialize() {
        const mm = OA(),
          Tm = xA(),
          fm = function() {
            function mm(mm, Tm) {
              const fm = null !== Tm && void 0 !== Tm ? Tm : location.href;
              fm !== PA && (XA.notify({
                type: "url-change",
                from: PA,
                to: fm,
                trigger: mm
              }), PA = fm)
            }
            if (XA || (XA = new Kf, PA = location.href), !MA)
              if ("navigation" in window && "NavigateEvent" in window) {
                sA = Tm => {
                  try {
                    const fm = null === Tm || void 0 === Tm ? void 0 : Tm.destination;
                    (null === fm || void 0 === fm ? void 0 : fm.sameDocument) && "string" === typeof fm.url && mm("navigate", fm.url)
                  } catch (fm) {}
                }, window.navigation.addEventListener("navigate", sA);
                const Tm = window.NavigateEvent;
                Tm && Tm.prototype && "function" === typeof Tm.prototype.intercept && (lA || (lA = Tm.prototype.intercept), Tm.prototype.intercept = function(Tm) {
                  try {
                    const Tm = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      fm = null === this || void 0 === this ? void 0 : this.destination;
                    Tm && fm && !1 === fm.sameDocument && "string" === typeof fm.url && mm("navigate-intercept", fm.url)
                  } catch (fm) {}
                  return lA.call(this, Tm)
                }), MA = !0
              } else HA || (HA = window.history.pushState), window.history.pushState = function() {
                for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
                const Am = HA.apply(window.history, fm);
                return mm("pushState"), Am
              }, yA || (yA = window.history.replaceState), window.history.replaceState = function() {
                for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
                const Am = yA.apply(window.history, fm);
                return mm("replaceState"), Am
              }, CA = () => mm("popstate"), rA = () => mm("hashchange"), window.addEventListener("popstate", CA), window.addEventListener("hashchange", rA), MA = !0;
            return XA
          }(),
          hm = (Am = ["pointerdown", "keydown"], eA || (eA = new Kf), Am.forEach((mm => {
            if (!NA.has(mm)) {
              const Tm = () => {
                eA.notify({
                  type: "interaction",
                  name: mm
                })
              };
              window.addEventListener(mm, Tm), NA.add(mm), GA.set(mm, Tm)
            }
          })), eA);
        var Am;
        const am = new bA((new Kf).merge(mm, Tm, fm), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: mm => function(mm) {
            return mm.type === Vf
          }(mm) ? mm.request.requestId : void 0,
          isOperationEnd: mm => function(mm) {
            return mm.type === If
          }(mm) ? mm.request.requestId : void 0
        });
        am.filter((mm => "tracking-ended" === mm.message)).subscribe((mm => {
          var Tm, fm;
          if ((null === (Tm = mm.events) || void 0 === Tm ? void 0 : Tm.some((mm => "url-change" === mm.type))) && (null === (fm = mm.events) || void 0 === fm ? void 0 : fm.some((mm => "dom-mutation" === mm.type)))) {
            var hm;
            const Tm = null === (hm = mm.events) || void 0 === hm ? void 0 : hm.find((mm => "url-change" === mm.type));
            Ym.api.pushEvent("faro.navigation", {
              fromUrl: null === Tm || void 0 === Tm ? void 0 : Tm.from,
              toUrl: null === Tm || void 0 === Tm ? void 0 : Tm.to,
              sameDocument: String(!0),
              duration: mm.duration
            })
          }
        })), hm.subscribe((() => {
          am.startTracking()
        }))
      }
    };

    function BA() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Tm = [new ZA, new yf, new Hh, new Af, new rf, new uA];
      return !1 !== mm.enablePerformanceInstrumentation && Tm.unshift(new dh), !1 !== mm.enableContentSecurityPolicyInstrumentation && Tm.push(new kA), !1 !== mm.captureConsole && Tm.push(new Pf), Tm
    }
    var LA = fm(6641);
    let vA, tA;

    function UA() {
      const mm = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return vA === mm && tA || (tA = new LA.UAParser(mm).getResult(), vA = mm), tA
    }
    const dA = () => {
        const {
          browser: mm,
          os: Tm,
          ua: fm
        } = UA(), {
          name: hm,
          version: Am
        } = mm, {
          name: am,
          version: xm
        } = Tm, wm = navigator.language, Dm = fm.includes("Mobi"), im = function() {
          if (!hm || !Am) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== hm && void 0 !== hm ? hm : Cf,
            version: null !== Am && void 0 !== Am ? Am : Cf,
            os: `${null!==am&&void 0!==am?am:Cf} ${null!==xm&&void 0!==xm?xm:Cf}`,
            userAgent: null !== fm && void 0 !== fm ? fm : Cf,
            language: null !== wm && void 0 !== wm ? wm : Cf,
            mobile: Dm,
            brands: null !== im && void 0 !== im ? im : Cf,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      gA = () => {
        const {
          name: mm,
          version: Tm
        } = UA().os;
        if (!mm && !Tm) return {};
        const fm = {};
        return mm && (fm.name = mm), Tm && (fm.version = Tm), {
          os: fm
        }
      };

    function WA(mm) {
      var Tm, fm, hm;
      return {
        id: null !== (Tm = null === (fm = Ym.config) || void 0 === fm || null === (fm = fm.sessionTracking) || void 0 === fm || null === (hm = fm.generateSessionId) || void 0 === hm ? void 0 : hm.call(fm)) && void 0 !== Tm ? Tm : VT(),
        attributes: mm
      }
    }
    const FA = () => ({
      sdk: {
        name: "faro-web",
        version: hf
      }
    });
    var ma = class extends Tf {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let Ta = function(mm) {
      return mm.EXCEPTION = "exception", mm.LOG = "log", mm.MEASUREMENT = "measurement", mm.TRACE = "trace", mm.EVENT = "event", mm
    }({});
    const fa = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function ha(mm, Tm) {
      var fm, hm;
      if (void 0 === Tm) return mm;
      if (void 0 === mm) return {
        resourceSpans: Tm
      };
      const Am = null === (fm = mm.resourceSpans) || void 0 === fm ? void 0 : fm[0];
      if (void 0 === Am) return mm;
      const am = (null === Am || void 0 === Am ? void 0 : Am.scopeSpans) || [],
        xm = (null === Tm || void 0 === Tm || null === (hm = Tm[0]) || void 0 === hm ? void 0 : hm.scopeSpans) || [];
      return FT(FT({}, mm), {}, {
        resourceSpans: [FT(FT({}, Am), {}, {
          scopeSpans: [...am, ...xm]
        })]
      })
    }

    function Aa(mm) {
      let Tm = {
        meta: {}
      };
      return void 0 !== mm[0] && (Tm.meta = mm[0].meta), mm.forEach((mm => {
        switch (mm.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const fm = fa[mm.type],
              hm = Tm[fm];
            Tm = FT(FT({}, Tm), {}, {
              [fm]: void 0 === hm ? [mm.payload] : [...hm, mm.payload]
            });
            break
          }
          case "trace":
            Tm = FT(FT({}, Tm), {}, {
              traces: ha(Tm.traces, mm.payload.resourceSpans)
            })
        }
      })), Tm
    }
    var aa = class extends ma {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = mm, this.name = "@grafana/faro-web-sdk:transport-console", this.version = hf
      }
      send(mm) {
        var Tm;
        return this.unpatchedConsole[null !== (Tm = this.options.level) && void 0 !== Tm ? Tm : Qf.DEBUG]("New event", Aa([mm]))
      }
    };
    const xa = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      wa = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Da = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      ia = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      Ra = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      pa = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Ea(mm) {
      let {
        weekday: Tm,
        day: fm,
        month: hm,
        year: Am,
        hour: am,
        minute: xm,
        second: wm
      } = mm;
      if (Am < 1900 || fm < 1 || am > 23 || xm > 59 || wm > 60) return;
      const Dm = 60 === wm,
        im = new Date(0);
      return im.setUTCFullYear(Am, hm, fm), im.setUTCHours(am, xm, Dm ? 59 : wm, 0), im.getUTCDay() === Tm && im.getUTCDate() === fm && im.getUTCMonth() === hm && im.getUTCFullYear() === Am && im.getUTCHours() === am && im.getUTCMinutes() === xm && im.getUTCSeconds() === (Dm ? 59 : wm) ? im.getTime() + (Dm ? 1e3 : 0) : void 0
    }
    var oa = class {
      constructor(mm) {
        this.options = mm, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var mm = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const Tm = this.sequence++;
        let fm = !1;
        return {
          deliver: function() {
            var fm = th((function*(fm) {
              const hm = mm.options.getNow();
              let Am, am = 0;
              for (;;) {
                var xm, wm, Dm;
                const im = mm.options.retry.maxAttempts - am,
                  Rm = yield mm.runAttempt((() => fm(im, mm.unloading)), am > 0);
                if (am += Rm.attemptsMade, "success" === Rm.kind) return {
                  kind: "success",
                  attempts: am,
                  elapsedTimeMs: mm.options.getNow() - hm
                };
                if (Am = Rm.failure, "terminal" === Rm.kind || mm.unloading) return {
                  kind: "terminal",
                  attempts: am,
                  elapsedTimeMs: mm.options.getNow() - hm,
                  failure: Am
                };
                if (am >= mm.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: am,
                  elapsedTimeMs: mm.options.getNow() - hm,
                  failure: Am,
                  reason: "retries-exhausted"
                };
                if (null != Rm.retryAfterMs && Rm.retryAfterMs > mm.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: am,
                  elapsedTimeMs: mm.options.getNow() - hm,
                  failure: Am,
                  reason: "retry-after-too-long"
                };
                const pm = Math.min(null !== (xm = Rm.retryAfterMs) && void 0 !== xm ? xm : mm.options.retry.initialBackoffMs * Math.pow(mm.options.retry.backoffMultiplier, am - 1), mm.options.retry.maxBackoffMs);
                if (null === (wm = (Dm = mm.options).onRetry) || void 0 === wm || wm.call(Dm, pm, am + 1), yield mm.waitForTurn(Tm, pm)) {
                  const Tm = mm.options.retry.maxAttempts - am,
                    Am = yield mm.runAttempt((() => fm(Tm, !0)));
                  return am += Am.attemptsMade, {
                    kind: "success" === Am.kind ? "success" : "terminal",
                    attempts: am,
                    elapsedTimeMs: mm.options.getNow() - hm,
                    failure: "success" === Am.kind ? void 0 : Am.failure
                  }
                }
              }
            }));
            return function(mm) {
              return fm.apply(this, arguments)
            }
          }(),
          release: () => {
            fm || (fm = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const mm = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const Tm of mm) Tm.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((fm, hm) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const Tm = () => {
                this.inProgress--, this.runNextAttempt()
              };
              mm().then((mm => {
                Tm(), fm(mm)
              }), (mm => {
                Tm(), hm(mm)
              }))
            },
            isRedelivery: Tm
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const mm = this.options.getNow(),
            Tm = this.attemptQueue.findIndex((Tm => {
              let {
                isRedelivery: fm
              } = Tm;
              return this.unloading || !fm || mm >= this.nextSendAt
            }));
          if (Tm < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - mm)));
          const [fm] = this.attemptQueue.splice(Tm, 1);
          fm.isRedelivery && !this.unloading && (this.nextSendAt = mm + 1), fm.run()
        }
      }
      waitForTurn(mm, Tm) {
        const fm = Math.min(Tm * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((Tm => {
          this.waiting.push({
            sequence: mm,
            readyAt: this.options.getNow() + fm,
            resolve: Tm
          }), this.waiting.sort(((mm, Tm) => mm.readyAt === Tm.readyAt ? mm.sequence - Tm.sequence : mm.readyAt - Tm.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const mm = this.waiting[0],
          Tm = mm.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const Tm = this.waiting.indexOf(mm);
          Tm >= 0 && this.waiting.splice(Tm, 1), mm.resolve(!1), this.scheduleNext()
        }), Math.max(0, Tm - this.options.getNow()))
      }
    };

    function Oa(mm, Tm) {
      if (null == mm) return {};
      var fm, hm, Am = function(mm, Tm) {
        if (null == mm) return {};
        var fm = {};
        for (var hm in mm)
          if ({}.hasOwnProperty.call(mm, hm)) {
            if (Tm.includes(hm)) continue;
            fm[hm] = mm[hm]
          } return fm
      }(mm, Tm);
      if (Object.getOwnPropertySymbols) {
        var am = Object.getOwnPropertySymbols(mm);
        for (hm = 0; hm < am.length; hm++) fm = am[hm], Tm.includes(fm) || {}.propertyIsEnumerable.call(mm, fm) && (Am[fm] = mm[fm])
      }
      return Am
    }

    function Ya(mm) {
      const {
        size: Tm,
        concurrency: fm
      } = mm, hm = [];
      let Am = 0;
      const am = () => {
        if (Am < fm && hm.length) {
          const {
            producer: mm,
            resolve: Tm,
            reject: fm
          } = hm.shift();
          Am++, mm().then((mm => {
            Am--, am(), Tm(mm)
          }), (mm => {
            Am--, am(), fm(mm)
          }))
        }
      };
      return {
        add: mm => {
          if (hm.length + Am >= Tm) throw new Error("Task buffer full");
          return new Promise(((Tm, fm) => {
            hm.push({
              producer: mm,
              resolve: Tm,
              reject: fm
            }), am()
          }))
        }
      }
    }
    const qa = ["headers"],
      ja = ["keepalive", "signal"],
      Va = new Set([408, 425, 429, 500, 502, 503, 504]),
      Ia = new Set([429, 503]);
    let Ka = 0,
      Qa = 0;
    var na = class extends Error {};
    var Ja = class extends ma {
      constructor(mm) {
        var Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm;
        super(), this.options = mm, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = hf, this.pendingCustomSends = 0, this.getNow = null !== (Tm = mm.getNow) && void 0 !== Tm ? Tm : Date.now, this.requestTimeoutMs = null !== (fm = mm.requestTimeoutMs) && void 0 !== fm ? fm : 1e4, this.compressionEnabled = null !== (hm = mm.requestCompression) && void 0 !== hm && hm && "undefined" !== typeof CompressionStream, mm.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new oa({
          bufferSize: null !== (Am = mm.bufferSize) && void 0 !== Am ? Am : 30,
          concurrency: null !== (am = mm.concurrency) && void 0 !== am ? am : 5,
          retry: {
            maxAttempts: null !== (xm = null === (wm = mm.retry) || void 0 === wm ? void 0 : wm.maxAttempts) && void 0 !== xm ? xm : 3,
            initialBackoffMs: null !== (Dm = null !== (im = null === (Rm = mm.retry) || void 0 === Rm ? void 0 : Rm.initialBackoffMs) && void 0 !== im ? im : mm.defaultRateLimitBackoffMs) && void 0 !== Dm ? Dm : 1e3,
            maxBackoffMs: null !== (pm = null === (Em = mm.retry) || void 0 === Em ? void 0 : Em.maxBackoffMs) && void 0 !== pm ? pm : 3e4,
            backoffMultiplier: null !== (om = null === (Om = mm.retry) || void 0 === Om ? void 0 : Om.backoffMultiplier) && void 0 !== om ? om : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Ym = mm.getRandom) && void 0 !== Ym ? Ym : Math.random,
          onRetry: (mm, Tm) => {
            this.logDebug(`Retrying failed request after ${mm}ms. Attempt ${Tm}.`)
          }
        }), this.customPromiseBuffer = Ya({
          size: null !== (qm = mm.bufferSize) && void 0 !== qm ? qm : 30,
          concurrency: null !== (jm = mm.concurrency) && void 0 !== jm ? jm : 5
        }), this.defaultPromiseBuffer = {
          add: mm => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(mm);
            const Tm = this.deliveryQueue.reserve();
            if (!Tm) throw new Error("Task buffer full");
            return this.runBufferedTask(Tm, mm)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (mm => {
          mm.persisted && this.deliveryQueue.resume()
        })))
      }
      send(mm) {
        var Tm = this;
        return th((function*() {
          const fm = Tm.promiseBuffer;
          if (fm !== Tm.defaultPromiseBuffer || fm.add !== Tm.defaultBufferAdd) {
            Tm.pendingCustomSends++;
            try {
              yield fm.add((() => Tm.deliver(mm)))
            } catch (hm) {
              Tm.logError("Permanent delivery failure", {
                error: hm,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              Tm.pendingCustomSends--
            }
          } else yield Tm.deliver(mm)
        }))()
      }
      runBufferedTask(mm, Tm) {
        return th((function*() {
          let fm;
          try {
            return yield mm.deliver(th((function*() {
              return fm = yield Tm(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), fm
          } finally {
            mm.release()
          }
        }))()
      }
      deliver(mm) {
        var Tm = this;
        return th((function*() {
          const fm = Tm.deliveryQueue.reserve();
          if (fm) try {
            const hm = yield Tm.prepareRequest(mm), Am = yield fm.deliver(((mm, fm) => Tm.performAttempt(hm, mm, fm)));
            "terminal" === Am.kind && Tm.logError("retries-exhausted" === Am.reason ? "Delivery retries exhausted" : "Permanent delivery failure", pT(pT({}, Am.failure), {}, {
              reason: Am.reason,
              attempts: Am.attempts,
              elapsedTimeMs: Am.elapsedTimeMs
            }))
          } catch (hm) {
            Tm.logError("Permanent delivery failure", {
              error: hm,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            fm.release()
          } else Tm.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var mm;
        return [this.options.url].concat(null !== (mm = this.config.ignoreUrls) && void 0 !== mm ? mm : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(mm) {
        var Tm = this;
        return th((function*() {
          var fm, hm;
          const Am = Aa(mm),
            am = null === (fm = Am.meta.session) || void 0 === fm ? void 0 : fm.id,
            xm = JSON.stringify(Am),
            wm = null !== (hm = Tm.options.requestOptions) && void 0 !== hm ? hm : {},
            {
              headers: Dm = {}
            } = wm,
            im = Oa(wm, qa),
            {
              keepalive: Rm,
              signal: pm
            } = im,
            Em = Oa(im, ja),
            om = {};
          for (const [mm, Tm] of Object.entries(Dm)) om[mm] = "function" === typeof Tm ? yield Tm(): Tm;
          let Om = xm,
            Ym = function(mm) {
              return "undefined" === typeof TextEncoder ? mm.length : (new TextEncoder).encode(mm).byteLength
            }(xm);
          const qm = {};
          return Tm.compressionEnabled && (Om = yield Tm.compress(xm), Ym = Om.size, qm["Content-Encoding"] = "gzip"), {
            bodySize: Ym,
            sessionId: am,
            requestInit: pT({
              method: "POST",
              headers: pT(pT(pT(pT(pT({
                "Content-Type": "application/json"
              }, qm), om), Tm.options.apiKey ? {
                "x-api-key": Tm.options.apiKey
              } : {}), am ? {
                "x-faro-session-id": am
              } : {}), {}, {
                "Idempotency-Key": VT(20)
              }),
              body: Om
            }, Em)
          }
        }))()
      }
      performAttempt(mm, Tm, fm) {
        var hm = this;
        return th((function*() {
          var Am;
          const am = null === (Am = hm.options.requestOptions) || void 0 === Am ? void 0 : Am.signal;
          if (null === am || void 0 === am ? void 0 : am.aborted) return {
            kind: "terminal",
            failure: {
              error: am.reason
            },
            attemptsMade: 0
          };
          let xm = 0;
          try {
            var wm;
            const Am = yield hm.fetchWithKeepaliveFallback(mm.requestInit, mm.bodySize, !!fm || (null === (wm = hm.options.requestOptions) || void 0 === wm ? void 0 : wm.keepalive), Tm, (() => xm++));
            if (hm.handleResponse(Am, mm.sessionId), Am.status >= 200 && Am.status < 300) return {
              kind: "success",
              attemptsMade: xm
            };
            const am = {
              status: Am.status
            };
            return !Va.has(Am.status) || fm ? {
              kind: "terminal",
              failure: am,
              attemptsMade: xm
            } : {
              kind: "retry",
              failure: am,
              attemptsMade: xm,
              retryAfterMs: Ia.has(Am.status) ? hm.getRetryAfterDelayMs(Am) : void 0
            }
          } catch (Dm) {
            const mm = {
              error: Dm
            };
            return (null === am || void 0 === am ? void 0 : am.aborted) || !hm.isFetchNetworkError(Dm) || fm ? {
              kind: "terminal",
              failure: mm,
              attemptsMade: xm
            } : {
              kind: "retry",
              failure: mm,
              attemptsMade: xm
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(mm, Tm, fm, hm, Am) {
        var am = this;
        return th((function*() {
          const xm = am.getNow(),
            wm = am.reserveKeepalive(Tm, fm);
          try {
            return yield am.fetchWithTimeout(pT(pT({}, mm), {}, {
              keepalive: wm.keepalive
            }), am.requestTimeoutMs, Am)
          } catch (im) {
            var Dm;
            if (wm.keepalive && hm > 1 && am.isFetchNetworkError(im) && !(im instanceof na) && !(null === (Dm = am.options.requestOptions) || void 0 === Dm || null === (Dm = Dm.signal) || void 0 === Dm ? void 0 : Dm.aborted)) {
              am.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const Tm = am.requestTimeoutMs - (am.getNow() - xm);
              return am.fetchWithTimeout(pT(pT({}, mm), {}, {
                keepalive: !1
              }), Tm, Am)
            }
            throw im
          } finally {
            wm.release()
          }
        }))()
      }
      fetchWithTimeout(mm, Tm, fm) {
        var hm = this;
        return th((function*() {
          var Am;
          const am = null === (Am = hm.options.requestOptions) || void 0 === Am ? void 0 : Am.signal;
          if (hm.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return fm(), fetch(hm.options.url, pT(pT({}, mm), {}, {
            signal: am
          }));
          if (Tm <= 0) throw new na("Request timed out");
          const xm = new AbortController,
            wm = () => xm.abort(null === am || void 0 === am ? void 0 : am.reason);
          null === am || void 0 === am || am.addEventListener("abort", wm, {
            once: !0
          });
          let Dm = !1;
          const im = setTimeout((() => {
            Dm = !0, xm.abort()
          }), Tm);
          try {
            return fm(), yield fetch(hm.options.url, pT(pT({}, mm), {}, {
              signal: xm.signal
            }))
          } catch (Rm) {
            if (Dm && !(null === am || void 0 === am ? void 0 : am.aborted)) throw new na("Request timed out");
            throw Rm
          } finally {
            clearTimeout(im), null === am || void 0 === am || am.removeEventListener("abort", wm)
          }
        }))()
      }
      getRetryAfterDelayMs(mm) {
        const Tm = mm.headers.get("Retry-After");
        if (!Tm) return;
        if (/^\d+$/.test(Tm)) {
          const mm = 1e3 * Number(Tm);
          return Number.isFinite(mm) ? mm : Number.POSITIVE_INFINITY
        }
        const fm = this.getNow(),
          hm = function(mm, Tm) {
            const fm = xa.exec(mm);
            if (fm) {
              const [, mm, Tm, hm, Am, am, xm, wm] = fm;
              return Ea({
                weekday: ia.indexOf(mm),
                day: Number(Tm),
                month: pa.indexOf(hm),
                year: Number(Am),
                hour: Number(am),
                minute: Number(xm),
                second: Number(wm)
              })
            }
            const hm = wa.exec(mm);
            if (hm) {
              const [, mm, fm, xm, wm, Dm, im, Rm] = hm, pm = new Date(Tm);
              if (Number.isNaN(pm.getTime())) return;
              const Em = pm.getUTCFullYear();
              let om = 100 * Math.floor(Em / 100) + Number(wm);
              om < Em && (om += 100);
              const Om = pa.indexOf(xm),
                Ym = {
                  month: Om,
                  day: Number(fm),
                  hour: Number(Dm),
                  minute: Number(im),
                  second: Number(Rm),
                  millisecond: 0
                },
                qm = {
                  month: pm.getUTCMonth(),
                  day: pm.getUTCDate(),
                  hour: pm.getUTCHours(),
                  minute: pm.getUTCMinutes(),
                  second: pm.getUTCSeconds(),
                  millisecond: pm.getUTCMilliseconds()
                };
              return (om > Em + 50 || om === Em + 50 && (am = qm, ((Am = Ym).month - am.month || Am.day - am.day || Am.hour - am.hour || Am.minute - am.minute || Am.second - am.second || Am.millisecond - am.millisecond) > 0)) && (om -= 100), Ea({
                weekday: Ra.indexOf(mm),
                day: Number(fm),
                month: Om,
                year: om,
                hour: Number(Dm),
                minute: Number(im),
                second: Number(Rm)
              })
            }
            var Am, am;
            const xm = Da.exec(mm);
            if (!xm) return;
            const [, wm, Dm, im, Rm, pm, Em, om, Om] = xm;
            return Ea({
              weekday: ia.indexOf(wm),
              day: Number(null !== im && void 0 !== im ? im : Rm),
              month: pa.indexOf(Dm),
              year: Number(Om),
              hour: Number(pm),
              minute: Number(Em),
              second: Number(om)
            })
          }(Tm, fm);
        return null == hm ? void 0 : Math.max(0, hm - fm)
      }
      reserveKeepalive(mm, Tm) {
        if (!1 === Tm || mm > 6e4 || Ka + mm > 6e4 || Qa >= 9) return {
          keepalive: !1,
          release: BT
        };
        Ka += mm, Qa++;
        let fm = !1;
        return {
          keepalive: !0,
          release: () => {
            fm || (fm = !0, Ka -= mm, Qa--)
          }
        }
      }
      handleResponse(mm, Tm) {
        202 === mm.status && "invalid" === mm.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), Tm), mm.text().catch(BT)
      }
      isFetchNetworkError(mm) {
        return mm instanceof TypeError || mm instanceof na || mm instanceof DOMException && "AbortError" === mm.name
      }
      compress(mm) {
        return th((function*() {
          const Tm = [],
            fm = new ReadableStream({
              start(Tm) {
                Tm.enqueue((new TextEncoder).encode(mm)), Tm.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: mm,
              value: hm
            } = yield fm.read();
            if (mm) return new Blob(Tm);
            Tm.push(hm)
          }
        }))()
      }
      extendFaroSession(mm, Tm, fm) {
        var hm, Am;
        const am = mm.sessionTracking;
        if (!(null === am || void 0 === am ? void 0 : am.enabled)) return void Tm("Session expired.");
        const {
          fetchUserSession: xm,
          storeUserSession: wm
        } = uT(am), Dm = null === (hm = this.metas.value.session) || void 0 === hm ? void 0 : hm.id, im = null === (Am = xm()) || void 0 === Am ? void 0 : Am.sessionId;
        fm && fm === Dm && fm === im ? (eT({
          fetchUserSession: xm,
          storeUserSession: wm
        })({
          forceSessionExtend: !0
        }), Tm("Session expired; created new session.")) : Tm("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const ca = () => {
      const mm = window.k6;
      return {
        k6: pT({
          isK6Browser: !0
        }, (null === mm || void 0 === mm ? void 0 : mm.testRunId) && {
          testRunId: null === mm || void 0 === mm ? void 0 : mm.testRunId
        })
      }
    };
    let za, Za;

    function ka() {
      let {
        generatePageId: mm,
        initialPageMeta: Tm
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const fm = location.href;
        return bm(mm) && za !== fm && (za = fm, Za = mm(location)), {
          page: pT(pT({
            url: fm
          }, Za ? {
            id: Za
          } : {}), Tm)
        }
      }
    }

    function ba() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mf,
        Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const fm = vT;
      return Tm > 0 && (fm.error = Tm >= 1 ? function() {
        for (var Tm = arguments.length, hm = new Array(Tm), Am = 0; Am < Tm; Am++) hm[Am] = arguments[Am];
        mm.error(`${fm.prefix}\n`, ...hm)
      } : BT, fm.warn = Tm >= 2 ? function() {
        for (var Tm = arguments.length, hm = new Array(Tm), Am = 0; Am < Tm; Am++) hm[Am] = arguments[Am];
        mm.warn(`${fm.prefix}\n`, ...hm)
      } : BT, fm.info = Tm >= 3 ? function() {
        for (var Tm = arguments.length, hm = new Array(Tm), Am = 0; Am < Tm; Am++) hm[Am] = arguments[Am];
        mm.info(`${fm.prefix}\n`, ...hm)
      } : BT, fm.debug = Tm >= 4 ? function() {
        for (var Tm = arguments.length, hm = new Array(Tm), Am = 0; Am < Tm; Am++) hm[Am] = arguments[Am];
        mm.debug(`${fm.prefix}\n`, ...hm)
      } : BT), fm
    }
    const Sa = "faro",
      ea = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Na = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Ga(mm) {
      var Tm, fm, Am, am, xm, wm;
      const Dm = [],
        Rm = ba(mm.unpatchedConsole, mm.internalLoggerLevel);
      mm.transports ? ((mm.url || mm.apiKey) && Rm.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Dm.push(...mm.transports)) : mm.url ? Dm.push(new Ja({
        url: mm.url,
        apiKey: mm.apiKey,
        requestCompression: mm.requestCompression
      })) : Rm.error('either "url" or "transports" must be defined');
      const {
        dedupe: pm = !0,
        eventDomain: Em = hm,
        globalObjectKey: om = Sa,
        instrumentations: Om = BA(),
        internalLoggerLevel: Ym = tT,
        isolate: qm = !1,
        logArgsSerializer: jm = Xf,
        metas: Vm = Pa(mm),
        paused: Im = !1,
        preventGlobalExposure: Km = !1,
        unpatchedConsole: Qm = mf,
        url: nm,
        experimental: Jm
      } = mm, cm = Oa(mm, Na), zm = null !== (Tm = null === Jm || void 0 === Jm ? void 0 : Jm.trackNavigation) && void 0 !== Tm && Tm, Zm = {
        dataAttributeName: mA(null !== (fm = null === (Am = mm.userActionsInstrumentation) || void 0 === Am ? void 0 : Am.dataAttributeName) && void 0 !== fm ? fm : gh),
        excludeItem: null === (am = mm.userActionsInstrumentation) || void 0 === am ? void 0 : am.excludeItem,
        initialActivityTimeout: TA(null === (xm = mm.userActionsInstrumentation) || void 0 === xm ? void 0 : xm.initialActivityTimeout, 100, (mm => Rm.warn(mm)))
      };
      return pT(pT({}, cm), {}, {
        batching: pT(pT({}, ea), mm.batching),
        dedupe: pm,
        globalObjectKey: om,
        instrumentations: Xa(Om, mm),
        internalLoggerLevel: Ym,
        isolate: qm,
        logArgsSerializer: jm,
        metas: Vm,
        parseStacktrace: jf,
        paused: Im,
        preventGlobalExposure: Km,
        transports: Dm,
        unpatchedConsole: Qm,
        eventDomain: Em,
        ignoreUrls: [...null !== (wm = mm.ignoreUrls) && void 0 !== wm ? wm : [], ...nm ? [nm] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: pT(pT(pT({}, im), mm.sessionTracking), Ha({
          trackGeolocation: mm.trackGeolocation,
          sessionTracking: mm.sessionTracking
        })),
        userActionsInstrumentation: Zm,
        experimental: {
          trackNavigation: zm
        }
      })
    }

    function Xa(mm, Tm) {
      let {
        experimental: fm
      } = Tm;
      var hm;
      const Am = null !== (hm = null === fm || void 0 === fm ? void 0 : fm.trackNavigation) && void 0 !== hm && hm;
      return mm.filter((mm => !("@grafana/faro-web-sdk:instrumentation-navigation" === mm.name && !Am)))
    }

    function Pa(mm) {
      var Tm, fm, hm;
      const {
        page: Am,
        generatePageId: am
      } = null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.pageTracking) && void 0 !== Tm ? Tm : {}, xm = [dA, gA, ka({
        generatePageId: am,
        initialPageMeta: Am
      }), ...null !== (fm = mm.metas) && void 0 !== fm ? fm : [], FA];
      return km(null === (hm = window) || void 0 === hm ? void 0 : hm.k6) ? [...xm, ca] : xm
    }

    function Ha(mm) {
      let {
        trackGeolocation: Tm,
        sessionTracking: fm
      } = mm;
      var hm;
      const Am = {};
      return zm(Tm) && (Am.geoLocationTrackingEnabled = Tm), tm(Am) ? {} : {
        session: pT(pT({}, null !== (hm = null === fm || void 0 === fm ? void 0 : fm.session) && void 0 !== hm ? hm : {}), {}, {
          overrides: Am
        })
      }
    }
    const ya = new WeakSet;

    function Ca(mm) {
      return ya.add(mm), mm
    }

    function ra(mm, Tm) {
      if (mm.capture) return Ca(mm.capture(Tm));
      const fm = Ca(mm.value);
      return null === Tm || void 0 === Tm || Tm(), fm
    }

    function sa(mm) {
      const Tm = `__faroBundleId_${mm}`,
        fm = null === Rm || void 0 === Rm ? void 0 : Rm[Tm];
      if ("string" === typeof fm && "" !== fm) return fm;
      const hm = "undefined" !== typeof window ? window[Tm] : void 0;
      return "string" === typeof hm && "" !== hm ? hm : void 0
    }

    function la(mm) {
      var Tm, fm;
      const hm = mm.config.app.name,
        Am = hm ? function(mm) {
          return null === Rm || void 0 === Rm ? void 0 : Rm[`__faroGitHash_${mm}`]
        }(hm) : void 0,
        am = {
          sdk: {
            version: hf,
            name: "faro"
          },
          app: FT({
            bundleId: hm && sa(hm)
          }, void 0 !== Am ? {
            gitHash: Am
          } : {})
        },
        xm = null === (Tm = mm.config.sessionTracking) || void 0 === Tm ? void 0 : Tm.session;
      xm && mm.api.setSession(xm), mm.config.app && (am.app = FT(FT({}, mm.config.app), am.app)), mm.config.user && (am.user = mm.config.user), mm.config.view && (am.view = mm.config.view), mm.metas.add(am, ...null !== (fm = mm.config.metas) && void 0 !== fm ? fm : [])
    }
    var Ma = class {
      constructor(mm, Tm) {
        var fm, hm;
        this.signalBuffer = [], this.itemLimit = null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.itemLimit) && void 0 !== fm ? fm : 50, this.sendTimeout = null !== (hm = null === Tm || void 0 === Tm ? void 0 : Tm.sendTimeout) && void 0 !== hm ? hm : 250, this.paused = (null === Tm || void 0 === Tm ? void 0 : Tm.paused) || !1, this.sendFn = mm, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(mm) {
        this.paused || (this.signalBuffer.push(mm), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(mm) {
        const Tm = new Map;
        return mm.forEach((mm => {
          const fm = JSON.stringify(mm.meta);
          let hm = Tm.get(fm);
          hm = void 0 === hm ? [mm] : [...hm, mm], Tm.set(fm, hm)
        })), Array.from(Tm.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const mm = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(mm).forEach(this.sendFn)
        } catch (Tm) {
          throw this.signalBuffer = [...mm, ...this.signalBuffer], this.trimBufferToLimit(), Tm
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function ua(mm, Tm, fm, hm) {
      var Am;
      Tm.debug("Initializing transports");
      const am = [];
      let xm = [];
      const wm = mm => {
        let Tm = mm;
        for (const hm of xm) {
          const mm = Tm.map(hm).filter(Boolean);
          if (0 === mm.length) return [];
          Tm = Ba(mm, fm)
        }
        return Tm
      };
      let Dm;
      (null === (Am = fm.batching) || void 0 === Am ? void 0 : Am.enabled) && (Dm = new Ma((mm => {
        const fm = wm(mm);
        if (0 !== fm.length)
          for (const hm of am) Tm.debug(`Transporting item using ${hm.name}\n`, fm), hm.isBatched() && hm.send(fm)
      }), {
        sendTimeout: fm.batching.sendTimeout,
        itemLimit: fm.batching.itemLimit,
        paused: fm.paused
      }));
      return {
        add: function() {
          Tm.debug("Adding transports");
          for (var Am = arguments.length, xm = new Array(Am), wm = 0; wm < Am; wm++) xm[wm] = arguments[wm];
          xm.forEach((Am => {
            Tm.debug(`Adding "${Am.name}" transport`), am.some((mm => mm === Am)) ? Tm.warn(`Transport ${Am.name} is already added`) : (Am.unpatchedConsole = mm, Am.internalLogger = Tm, Am.config = fm, Am.metas = hm, am.push(Am))
          }))
        },
        addBeforeSendHooks: function() {
          Tm.debug("Adding beforeSendHooks\n", xm);
          for (var mm = arguments.length, fm = new Array(mm), hm = 0; hm < mm; hm++) fm[hm] = arguments[hm];
          fm.forEach((mm => {
            mm && xm.push(mm)
          }))
        },
        getBeforeSendHooks: () => [...xm],
        execute: mm => {
          var Am;
          if (!fm.paused && lT(hm).shouldCapture()) {
            if (pm = mm.meta, !ya.has(pm)) {
              var xm, im, Rm;
              const Tm = null === (xm = hm.value.session) || void 0 === xm ? void 0 : xm.id,
                Am = ra(hm);
              if (fm.paused) return;
              const am = FT({}, mm.meta);
              (null === (im = am.session) || void 0 === im ? void 0 : im.id) === Tm && (null === (Rm = Am.session) || void 0 === Rm ? void 0 : Rm.id) !== Tm && (void 0 === Am.session ? delete am.session : am.session = Am.session), mm = FT(FT({}, mm), {}, {
                meta: Ca(am)
              })
            }
            var pm;
            (null === (Am = fm.batching) || void 0 === Am ? void 0 : Am.enabled) && (null === Dm || void 0 === Dm || Dm.addItem(mm)), (mm => {
              var hm;
              if ((null === (hm = fm.batching) || void 0 === hm ? void 0 : hm.enabled) && am.every((mm => mm.isBatched()))) return;
              const [Am] = wm([mm]);
              if (void 0 !== Am)
                for (const wm of am) {
                  var xm;
                  Tm.debug(`Transporting item using ${wm.name}\n`, Am), wm.isBatched() ? (null === (xm = fm.batching) || void 0 === xm ? void 0 : xm.enabled) || wm.send([Am]) : wm.send(Am)
                }
            })(mm)
          }
        },
        isPaused: () => fm.paused,
        pause: () => {
          Tm.debug("Pausing transports"), null === Dm || void 0 === Dm || Dm.pause(), fm.paused = !0
        },
        remove: function() {
          Tm.debug("Removing transports");
          for (var mm = arguments.length, fm = new Array(mm), hm = 0; hm < mm; hm++) fm[hm] = arguments[hm];
          fm.forEach((mm => {
            Tm.debug(`Removing "${mm.name}" transport`);
            const fm = am.indexOf(mm); - 1 !== fm ? am.splice(fm, 1) : Tm.warn(`Transport "${mm.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var mm = arguments.length, fm = new Array(mm), hm = 0; hm < mm; hm++) fm[hm] = arguments[hm];
          Tm.debug("Removing beforeSendHooks"), xm = xm.filter((mm => !fm.includes(mm)))
        },
        get transports() {
          return [...am]
        },
        unpause: () => {
          Tm.debug("Unpausing transports"), null === Dm || void 0 === Dm || Dm.start(), fm.paused = !1
        }
      }
    }

    function Ba(mm, Tm) {
      if (Tm.preserveOriginalError)
        for (const fm of mm) "exception" === fm.type && delete fm.payload.originalError;
      return mm
    }
    let La = mf;

    function va(mm) {
      var Tm;
      return La = null !== (Tm = mm.unpatchedConsole) && void 0 !== Tm ? Tm : La, La
    }
    let ta, Ua = vT;

    function da(mm, Tm) {
      return Ua = ba(mm, Tm.internalLoggerLevel), Ua
    }

    function ga(mm) {
      let {
        internalLogger: Tm,
        config: fm,
        metas: hm,
        transports: Am,
        tracesApi: am,
        userActionsApi: xm
      } = mm;
      var wm;
      Tm.debug("Initializing exceptions API");
      let Dm = null;
      ta = null !== (wm = fm.parseStacktrace) && void 0 !== wm ? wm : ta;
      const im = mm => {
          Tm.debug("Changing stacktrace parser"), ta = null !== mm && void 0 !== mm ? mm : ta
        },
        {
          ignoreErrors: Rm = [],
          preserveOriginalError: pm
        } = fm;
      return im(fm.parseStacktrace), {
        changeStacktraceParser: im,
        getStacktraceParser: () => ta,
        pushError: function(mm) {
          let {
            skipDedupe: wm,
            stackFrames: im,
            type: Em,
            context: om,
            spanContext: Om,
            timestampOverwriteMs: Ym,
            originalError: qm,
            fingerprint: jm,
            fatal: Vm
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(mm, Tm) {
              const {
                message: fm,
                name: hm,
                stack: Am
              } = Tm;
              return am = mm, xm = fm + " " + hm + " " + Am, am.some((mm => nm(mm) ? xm.includes(mm) : !!xm.match(mm)));
              var am, xm
            }(Rm, null !== qm && void 0 !== qm ? qm : mm)) try {
            var Im, Km;
            if (!lT(hm).shouldCapture()) return;
            const Rm = yT(FT(FT({}, function(mm) {
                let Tm = mm.cause;
                ym(Tm) ? Tm = mm.cause.toString() : null !== Tm && (km(mm.cause) || Sm(mm.cause)) ? Tm = HT(mm.cause) : null != Tm && (Tm = mm.cause.toString());
                return null == Tm ? {} : {
                  cause: Tm
                }
              }(null !== qm && void 0 !== qm ? qm : mm)), null !== om && void 0 !== om ? om : {})),
              nm = FT(FT(FT(FT({
                type: Em || mm.name || "Error",
                value: mm.message,
                timestamp: Ym ? qT(Ym) : YT(),
                trace: Om ? {
                  trace_id: Om.traceId,
                  span_id: Om.spanId
                } : am.getTraceContext()
              }, tm(Rm) ? {} : {
                context: Rm
              }), pm ? {
                originalError: qm
              } : {}), jm ? {
                fingerprint: jm
              } : {}), void 0 !== Vm ? {
                fatal: Vm
              } : {});
            im = null !== (Im = im) && void 0 !== Im ? Im : mm.stack ? null === ta || void 0 === ta ? void 0 : ta(mm).frames : void 0, (null === im || void 0 === im ? void 0 : im.length) && (nm.stacktrace = {
              frames: im
            });
            const Jm = {
              type: nm.type,
              value: nm.value,
              stacktrace: nm.stacktrace,
              context: nm.context,
              fingerprint: nm.fingerprint,
              fatal: null !== (Km = nm.fatal) && void 0 !== Km && Km
            };
            if (!wm && fm.dedupe && !Qm(Dm) && IT(Jm, Dm)) return void Tm.debug("Skipping error push because it is the same as the last one\n", nm);
            const cm = Dm,
              zm = ra(hm);
            if (Dm !== cm && !wm && fm.dedupe && IT(Jm, Dm)) return;
            Dm = Jm;
            const Zm = {
              meta: zm,
              payload: nm,
              type: "exception"
            };
            Tm.debug("Pushing exception\n", Zm), zA(xm.getActiveUserAction(), Zm) || Am.execute(Zm)
          } catch (Jm) {
            Tm.error("Error pushing event", Jm)
          }
        }
      }
    }

    function Wa(mm, Tm, fm, hm, Am) {
      Tm.debug("Initializing API");
      let am = null;
      const xm = function(mm) {
          let {
            transports: Tm,
            internalLogger: fm,
            config: hm,
            pushEvent: Am
          } = mm;
          var am;
          const xm = null === (am = hm.userActionsInstrumentation) || void 0 === am ? void 0 : am.excludeItem;
          let wm;
          const Dm = () => wm;
          return {
            startUserAction: (mm, hm, am) => {
              if (void 0 === Dm()) {
                const fm = new JA({
                  name: mm,
                  transports: Tm,
                  attributes: hm,
                  trigger: (null === am || void 0 === am ? void 0 : am.triggerName) || "faroApiCall",
                  importance: (null === am || void 0 === am ? void 0 : am.importance) || QA.Normal,
                  trackUserActionsExcludeItem: xm,
                  pushEvent: Am
                });
                return fm.filter((mm => [3, 2].includes(mm))).first().subscribe((() => {
                  wm = void 0
                })), cA.notify({
                  type: KA,
                  userAction: fm,
                  initialActivityTimeout: null === am || void 0 === am ? void 0 : am.initialActivityTimeout
                }), wm = fm, wm
              }
              fm.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Dm
          }
        }({
          transports: Am,
          config: fm,
          internalLogger: Tm,
          pushEvent: (mm, fm, hm, Am) => {
            am ? am(mm, fm, hm, Am) : Tm.warn("pushEventImpl is not initialized. Event dropped:", {
              name: mm,
              attributes: fm,
              domain: hm,
              options: Am
            })
          }
        }),
        wm = function(mm, Tm, fm, hm, Am) {
          let am;
          return Tm.debug("Initializing traces API"), {
            getOTEL: () => am,
            getTraceContext: () => {
              const mm = null === am || void 0 === am ? void 0 : am.trace.getSpanContext(am.context.active());
              return mm ? {
                trace_id: mm.traceId,
                span_id: mm.spanId
              } : void 0
            },
            initOTEL: (mm, fm) => {
              Tm.debug("Initializing OpenTelemetry"), am = {
                trace: mm,
                context: fm
              }
            },
            isOTELInitialized: () => !!am,
            pushTraces: mm => {
              try {
                if (!lT(hm).shouldCapture()) return;
                const fm = {
                  type: "trace",
                  payload: mm,
                  meta: ra(hm)
                };
                Tm.debug("Pushing trace\n", fm), Am.execute(fm)
              } catch (fm) {
                Tm.error("Error pushing trace\n", fm)
              }
            }
          }
        }(0, Tm, 0, hm, Am),
        Dm = {
          unpatchedConsole: mm,
          internalLogger: Tm,
          userActionsApi: xm,
          config: fm,
          metas: hm,
          transports: Am,
          tracesApi: wm
        },
        im = function(mm) {
          let {
            internalLogger: Tm,
            config: fm,
            metas: hm,
            transports: Am,
            tracesApi: am,
            userActionsApi: xm
          } = mm, wm = null;
          return {
            pushEvent: function(mm, Dm, im) {
              let {
                skipDedupe: Rm,
                spanContext: pm,
                timestampOverwriteMs: Em,
                customPayloadTransformer: om = mm => mm
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!lT(hm).shouldCapture()) return;
                const Om = yT(Dm),
                  Ym = om({
                    name: mm,
                    domain: null !== im && void 0 !== im ? im : fm.eventDomain,
                    attributes: tm(Om) ? void 0 : Om,
                    timestamp: Em ? qT(Em) : YT(),
                    trace: pm ? {
                      trace_id: pm.traceId,
                      span_id: pm.spanId
                    } : am.getTraceContext()
                  }),
                  qm = {
                    name: Ym.name,
                    attributes: Ym.attributes,
                    domain: Ym.domain
                  };
                if (!Rm && fm.dedupe && !Qm(wm) && IT(qm, wm)) return void Tm.debug("Skipping event push because it is the same as the last one\n", Ym);
                const jm = wm,
                  Vm = ra(hm);
                if (wm !== jm && !Rm && fm.dedupe && IT(qm, wm)) return;
                wm = qm;
                const Im = {
                  meta: Vm,
                  payload: Ym,
                  type: "event"
                };
                Tm.debug("Pushing event\n", Im), zA(xm.getActiveUserAction(), Im) || Am.execute(Im)
              } catch (Om) {
                Tm.error("Error pushing event", Om)
              }
            }
          }
        }(Dm);
      return am = im.pushEvent, FT(FT(FT(FT(FT(FT(FT({}, wm), ga(Dm)), function(mm) {
        let Tm, fm, hm, Am, {
          internalLogger: am,
          metas: xm
        } = mm;
        am.debug("Initializing meta API");
        const wm = mm => {
            fm && xm.remove(fm), fm = {
              user: mm
            }, xm.add(fm)
          },
          Dm = (mm, fm) => {
            var hm;
            const Am = null === fm || void 0 === fm ? void 0 : fm.overrides,
              am = Am ? {
                overrides: FT(FT({}, null === Tm || void 0 === Tm || null === (hm = Tm.session) || void 0 === hm ? void 0 : hm.overrides), Am)
              } : {};
            Tm && xm.remove(Tm), Tm = {
              session: FT(FT({}, tm(mm) ? void 0 : mm), am)
            }, xm.add(Tm)
          },
          im = (mm, Tm) => {
            lT(xm).notifySessionUpdate({
              type: "replace",
              session: mm,
              overrides: null === Tm || void 0 === Tm ? void 0 : Tm.overrides
            }), Dm(mm, Tm)
          },
          Rm = () => xm.value.session,
          pm = () => xm.value.page;
        return {
          setUser: wm,
          resetUser: wm,
          setSession: im,
          resetSession: im,
          getSession: Rm,
          setView: (mm, Tm) => {
            var fm;
            if ((null === Tm || void 0 === Tm ? void 0 : Tm.overrides) && (lT(xm).notifySessionUpdate({
                type: "overrides",
                overrides: Tm.overrides
              }), Dm(Rm(), {
                overrides: Tm.overrides
              })), (null === hm || void 0 === hm || null === (fm = hm.view) || void 0 === fm ? void 0 : fm.name) === (null === mm || void 0 === mm ? void 0 : mm.name)) return;
            const Am = hm;
            hm = {
              view: mm
            }, xm.add(hm), Am && xm.remove(Am)
          },
          getView: () => xm.value.view,
          setPage: mm => {
            var Tm;
            const fm = nm(mm) ? FT(FT({}, null !== (Tm = null === Am || void 0 === Am ? void 0 : Am.page) && void 0 !== Tm ? Tm : pm()), {}, {
              id: mm
            }) : mm;
            Am && xm.remove(Am), Am = {
              page: fm
            }, xm.add(Am)
          },
          getPage: pm
        }
      }(Dm)), function(mm) {
        let {
          internalLogger: Tm,
          config: fm,
          metas: hm,
          transports: Am,
          tracesApi: am,
          userActionsApi: xm
        } = mm;
        var wm;
        Tm.debug("Initializing logs API");
        let Dm = null;
        const im = null !== (wm = fm.logArgsSerializer) && void 0 !== wm ? wm : Xf;
        return {
          pushLog: function(mm) {
            let {
              context: wm,
              level: Rm,
              skipDedupe: pm,
              spanContext: Em,
              timestampOverwriteMs: om
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!lT(hm).shouldCapture()) return;
              const Om = yT(wm),
                Ym = {
                  message: im(mm),
                  level: null !== Rm && void 0 !== Rm ? Rm : "log",
                  context: tm(Om) ? void 0 : Om,
                  timestamp: om ? qT(om) : YT(),
                  trace: Em ? {
                    trace_id: Em.traceId,
                    span_id: Em.spanId
                  } : am.getTraceContext()
                },
                qm = {
                  message: Ym.message,
                  level: Ym.level,
                  context: Ym.context
                };
              if (!pm && fm.dedupe && !Qm(Dm) && IT(qm, Dm)) return void Tm.debug("Skipping log push because it is the same as the last one\n", Ym);
              const jm = Dm,
                Vm = ra(hm);
              if (Dm !== jm && !pm && fm.dedupe && IT(qm, Dm)) return;
              Dm = qm;
              const Im = {
                type: "log",
                payload: Ym,
                meta: Vm
              };
              Tm.debug("Pushing log\n", Im), zA(xm.getActiveUserAction(), Im) || Am.execute(Im)
            } catch (Om) {
              Tm.error("Error pushing log\n", Om)
            }
          }
        }
      }(Dm)), function(mm) {
        let {
          internalLogger: Tm,
          config: fm,
          metas: hm,
          transports: Am,
          tracesApi: am,
          userActionsApi: xm
        } = mm;
        Tm.debug("Initializing measurements API");
        let wm = null;
        return {
          pushMeasurement: function(mm) {
            let {
              skipDedupe: Dm,
              context: im,
              spanContext: Rm,
              timestampOverwriteMs: pm
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!lT(hm).shouldCapture()) return;
              const Em = yT(im),
                om = FT(FT({}, mm), {}, {
                  trace: Rm ? {
                    trace_id: Rm.traceId,
                    span_id: Rm.spanId
                  } : am.getTraceContext(),
                  timestamp: pm ? qT(pm) : YT(),
                  context: tm(Em) ? void 0 : Em
                }),
                Om = {
                  type: om.type,
                  values: om.values,
                  context: om.context
                };
              if (!Dm && fm.dedupe && !Qm(wm) && IT(Om, wm)) return void Tm.debug("Skipping measurement push because it is the same as the last one\n", om);
              const Ym = wm,
                qm = ra(hm);
              if (wm !== Ym && !Dm && fm.dedupe && IT(Om, wm)) return;
              wm = Om;
              const jm = {
                type: "measurement",
                payload: om,
                meta: qm
              };
              Tm.debug("Pushing measurement\n", jm), zA(xm.getActiveUserAction(), jm) || Am.execute(jm)
            } catch (Em) {
              Tm.error("Error pushing measurement\n", Em)
            }
          }
        }
      }(Dm)), im), xm)
    }

    function Fa(mm) {
      const Tm = va(mm),
        fm = da(Tm, mm);
      if (Om() && !mm.isolate) return void fm.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      fm.debug("Initializing");
      const hm = function(mm, Tm) {
          let fm, hm = [],
            Am = [],
            am = [],
            xm = 0,
            wm = 0;
          const Dm = () => hm.reduce(((mm, Tm) => Object.assign(mm, bm(Tm) ? Tm() : Tm)), {}),
            im = () => {
              if (Am.length) {
                const mm = Dm();
                Am.forEach((Tm => Tm(mm)))
              }
            };
          return {
            add: function() {
              for (var mm = arguments.length, fm = new Array(mm), Am = 0; Am < mm; Am++) fm[Am] = arguments[Am];
              Tm.debug("Adding metas\n", fm), hm.push(...fm), im()
            },
            remove: function() {
              for (var mm = arguments.length, fm = new Array(mm), Am = 0; Am < mm; Am++) fm[Am] = arguments[Am];
              Tm.debug("Removing metas\n", fm), hm = hm.filter((mm => !fm.includes(mm))), im()
            },
            addListener: mm => {
              Tm.debug("Adding metas listener\n", mm), Am.push(mm)
            },
            removeListener: mm => {
              Tm.debug("Removing metas listener\n", mm), Am = Am.filter((Tm => Tm !== mm))
            },
            capture: mm => {
              var Tm;
              const hm = void 0 !== fm,
                Am = null !== (Tm = fm) && void 0 !== Tm ? Tm : am;
              hm || (fm = Am, xm = 0, wm = Am.length);
              try {
                for (; xm < wm;) {
                  const mm = Am[xm++];
                  null === mm || void 0 === mm || mm()
                }
                const Tm = Ca(Dm());
                return null === mm || void 0 === mm || mm(), Tm
              } finally {
                hm || (fm = void 0)
              }
            },
            addCaptureListener: mm => {
              am.push(mm)
            },
            removeCaptureListener: mm => {
              am = am.filter((Tm => Tm !== mm))
            },
            get value() {
              return Dm()
            }
          }
        }(0, fm),
        Am = ua(Tm, fm, mm, hm),
        am = Wa(Tm, fm, mm, hm, Am),
        xm = function(mm, Tm, fm, hm, Am, am) {
          Tm.debug("Initializing instrumentations");
          const xm = [];
          return {
            add: function() {
              Tm.debug("Adding instrumentations");
              for (var wm = arguments.length, Dm = new Array(wm), im = 0; im < wm; im++) Dm[im] = arguments[im];
              Dm.forEach((wm => {
                Tm.debug(`Adding "${wm.name}" instrumentation`), xm.some((mm => mm.name === wm.name)) ? Tm.warn(`Instrumentation ${wm.name} is already added`) : (wm.unpatchedConsole = mm, wm.internalLogger = Tm, wm.config = fm, wm.metas = hm, wm.transports = Am, wm.api = am, xm.push(wm), wm.initialize())
              }))
            },
            get instrumentations() {
              return [...xm]
            },
            remove: function() {
              Tm.debug("Removing instrumentations");
              for (var mm = arguments.length, fm = new Array(mm), hm = 0; hm < mm; hm++) fm[hm] = arguments[hm];
              fm.forEach((mm => {
                var fm, hm;
                Tm.debug(`Removing "${mm.name}" instrumentation`);
                const Am = xm.reduce(((Tm, fm, hm) => null === Tm && fm.name === mm.name ? hm : null), null);
                null !== Am ? (null === (fm = (hm = xm[Am]).destroy) || void 0 === fm || fm.call(hm), xm.splice(Am, 1)) : Tm.warn(`Instrumentation "${mm.name}" is not added`)
              }))
            }
          }
        }(Tm, fm, mm, hm, Am, am),
        wm = qm(Tm, fm, mm, hm, Am, am, xm);
      return la(wm),
        function(mm) {
          mm.transports.add(...mm.config.transports), mm.transports.addBeforeSendHooks(mm.config.beforeSend)
        }(wm),
        function(mm) {
          mm.instrumentations.add(...mm.config.instrumentations)
        }(wm), wm
    }

    function mx(mm) {
      const Tm = Ga(mm);
      if (Tm) return Fa(Tm)
    }
  },
  6641: function(mm, Tm, fm) {
    var hm;
    ! function(Am, am) {
      var xm = "function",
        wm = "undefined",
        Dm = "object",
        im = "string",
        Rm = "major",
        pm = "model",
        Em = "name",
        om = "type",
        Om = "vendor",
        Ym = "version",
        qm = "architecture",
        jm = "console",
        Vm = "mobile",
        Im = "tablet",
        Km = "smarttv",
        Qm = "wearable",
        nm = "embedded",
        Jm = "Amazon",
        cm = "Apple",
        zm = "ASUS",
        Zm = "BlackBerry",
        km = "Browser",
        bm = "Chrome",
        Sm = "Firefox",
        em = "Google",
        Nm = "Honor",
        Gm = "Huawei",
        Xm = "LG",
        Pm = "Microsoft",
        Hm = "Motorola",
        ym = "Nvidia",
        Cm = "OnePlus",
        rm = "Opera",
        sm = "OPPO",
        lm = "Samsung",
        Mm = "Sharp",
        um = "Sony",
        Bm = "Xiaomi",
        Lm = "Zebra",
        tm = "Facebook",
        Um = "Chromium OS",
        dm = "Mac OS",
        gm = " Browser",
        Wm = function(mm) {
          for (var Tm = {}, fm = 0; fm < mm.length; fm++) Tm[mm[fm].toUpperCase()] = mm[fm];
          return Tm
        },
        Fm = function(mm, Tm) {
          return typeof mm === im && -1 !== mT(Tm).indexOf(mT(mm))
        },
        mT = function(mm) {
          return mm.toLowerCase()
        },
        TT = function(mm, Tm) {
          if (typeof mm === im) return mm = mm.replace(/^\s\s*/, ""), typeof Tm === wm ? mm : mm.substring(0, 500)
        },
        fT = function(mm, Tm) {
          for (var fm, hm, Am, wm, im, Rm, pm = 0; pm < Tm.length && !im;) {
            var Em = Tm[pm],
              om = Tm[pm + 1];
            for (fm = hm = 0; fm < Em.length && !im && Em[fm];)
              if (im = Em[fm++].exec(mm))
                for (Am = 0; Am < om.length; Am++) Rm = im[++hm], typeof(wm = om[Am]) === Dm && wm.length > 0 ? 2 === wm.length ? typeof wm[1] == xm ? this[wm[0]] = wm[1].call(this, Rm) : this[wm[0]] = wm[1] : 3 === wm.length ? typeof wm[1] !== xm || wm[1].exec && wm[1].test ? this[wm[0]] = Rm ? Rm.replace(wm[1], wm[2]) : am : this[wm[0]] = Rm ? wm[1].call(this, Rm, wm[2]) : am : 4 === wm.length && (this[wm[0]] = Rm ? wm[3].call(this, Rm.replace(wm[1], wm[2])) : am) : this[wm] = Rm || am;
            pm += 2
          }
        },
        hT = function(mm, Tm) {
          for (var fm in Tm)
            if (typeof Tm[fm] === Dm && Tm[fm].length > 0) {
              for (var hm = 0; hm < Tm[fm].length; hm++)
                if (Fm(Tm[fm][hm], mm)) return "?" === fm ? am : fm
            } else if (Fm(Tm[fm], mm)) return "?" === fm ? am : fm;
          return Tm.hasOwnProperty("*") ? Tm["*"] : mm
        },
        AT = {
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
        aT = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Ym, [Em, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Ym, [Em, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Em, Ym],
            [/opios[\/ ]+([\w\.]+)/i],
            [Ym, [Em, rm + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Ym, [Em, rm + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Ym, [Em, rm]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Ym, [Em, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Ym, [Em, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Em, Ym],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Ym, [Em, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Ym, [Em, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Ym, [Em, "UC" + km]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Ym, [Em, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Ym, [Em, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Ym, [Em, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Ym, [Em, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Ym, [Em, "Smart Lenovo " + km]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Em, /(.+)/, "$1 Secure " + km], Ym
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Ym, [Em, Sm + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Ym, [Em, rm + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Ym, [Em, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Ym, [Em, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Ym, [Em, rm + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Ym, [Em, "MIUI" + gm]],
            [/fxios\/([\w\.-]+)/i],
            [Ym, [Em, Sm]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Ym, [Em, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Em, /(.+)/, "$1Browser"], Ym
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Em, /(.+)/, "$1" + gm], Ym
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Ym, [Em, lm + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Ym, [Em, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Em, "Sogou Mobile"], Ym
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Em, Ym],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Em],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Ym, Em],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Em, tm], Ym
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Em, Ym],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Ym, [Em, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Ym, [Em, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Ym, [Em, bm + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Em, bm + " WebView"], Ym
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Ym, [Em, "Android " + km]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Em, Ym],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Ym, [Em, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Ym, Em],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Em, [Ym, hT, {
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
            [Em, Ym],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Em, "Netscape"], Ym
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Em, Ym],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Ym, [Em, Sm + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Em, [Ym, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Em, [Ym, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [qm, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [qm, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [qm, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [qm, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [qm, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [qm, /ower/, "", mT]
            ],
            [/ sun4\w[;\)]/i],
            [
              [qm, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [qm, mT]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [pm, [Om, lm],
              [om, Im]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [pm, [Om, lm],
              [om, Vm]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [pm, [Om, cm],
              [om, Vm]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [pm, [Om, cm],
              [om, Im]
            ],
            [/(macintosh);/i],
            [pm, [Om, cm]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [pm, [Om, Mm],
              [om, Vm]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [pm, [Om, Nm],
              [om, Im]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [pm, [Om, Nm],
              [om, Vm]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [pm, [Om, Gm],
              [om, Im]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [pm, [Om, Gm],
              [om, Vm]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [pm, /_/g, " "],
              [Om, Bm],
              [om, Im]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [pm, /_/g, " "],
              [Om, Bm],
              [om, Vm]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [pm, [Om, sm],
              [om, Vm]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [pm, [Om, hT, {
                OnePlus: ["304", "403", "203"],
                "*": sm
              }],
              [om, Im]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [pm, [Om, "Vivo"],
              [om, Vm]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [pm, [Om, "Realme"],
              [om, Vm]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [pm, [Om, Hm],
              [om, Vm]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [pm, [Om, Hm],
              [om, Im]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [pm, [Om, Xm],
              [om, Im]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [pm, [Om, Xm],
              [om, Vm]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [pm, [Om, "Lenovo"],
              [om, Im]
            ],
            [/(nokia) (t[12][01])/i],
            [Om, pm, [om, Im]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [pm, /_/g, " "],
              [om, Vm],
              [Om, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [pm, [Om, em],
              [om, Im]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [pm, [Om, em],
              [om, Vm]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [pm, [Om, um],
              [om, Vm]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [pm, "Xperia Tablet"],
              [Om, um],
              [om, Im]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [pm, [Om, Cm],
              [om, Vm]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [pm, [Om, Jm],
              [om, Im]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [pm, /(.+)/g, "Fire Phone $1"],
              [Om, Jm],
              [om, Vm]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [pm, Om, [om, Im]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [pm, [Om, Zm],
              [om, Vm]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [pm, [Om, zm],
              [om, Im]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [pm, [Om, zm],
              [om, Vm]
            ],
            [/(nexus 9)/i],
            [pm, [Om, "HTC"],
              [om, Im]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [Om, [pm, /_/g, " "],
              [om, Vm]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [pm, [Om, "TCL"],
              [om, Im]
            ],
            [/(itel) ((\w+))/i],
            [
              [Om, mT], pm, [om, hT, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [pm, [Om, "Acer"],
              [om, Im]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [pm, [Om, "Meizu"],
              [om, Vm]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [pm, [Om, "Ulefone"],
              [om, Vm]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [pm, [Om, "Energizer"],
              [om, Vm]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [pm, [Om, "Cat"],
              [om, Vm]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [pm, [Om, "Smartfren"],
              [om, Vm]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [pm, [Om, "Nothing"],
              [om, Vm]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [pm, [Om, "Archos"],
              [om, Im]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [pm, [Om, "Archos"],
              [om, Vm]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [Om, pm, [om, Im]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [Om, pm, [om, Vm]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [Om, pm, [om, Im]],
            [/(surface duo)/i],
            [pm, [Om, Pm],
              [om, Im]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [pm, [Om, "Fairphone"],
              [om, Vm]
            ],
            [/(u304aa)/i],
            [pm, [Om, "AT&T"],
              [om, Vm]
            ],
            [/\bsie-(\w*)/i],
            [pm, [Om, "Siemens"],
              [om, Vm]
            ],
            [/\b(rct\w+) b/i],
            [pm, [Om, "RCA"],
              [om, Im]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [pm, [Om, "Dell"],
              [om, Im]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [pm, [Om, "Verizon"],
              [om, Im]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [pm, [Om, "Barnes & Noble"],
              [om, Im]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [pm, [Om, "NuVision"],
              [om, Im]
            ],
            [/\b(k88) b/i],
            [pm, [Om, "ZTE"],
              [om, Im]
            ],
            [/\b(nx\d{3}j) b/i],
            [pm, [Om, "ZTE"],
              [om, Vm]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [pm, [Om, "Swiss"],
              [om, Vm]
            ],
            [/\b(zur\d{3}) b/i],
            [pm, [Om, "Swiss"],
              [om, Im]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [pm, [Om, "Zeki"],
              [om, Im]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [Om, "Dragon Touch"], pm, [om, Im]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [pm, [Om, "Insignia"],
              [om, Im]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [pm, [Om, "NextBook"],
              [om, Im]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [Om, "Voice"], pm, [om, Vm]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [Om, "LvTel"], pm, [om, Vm]
            ],
            [/\b(ph-1) /i],
            [pm, [Om, "Essential"],
              [om, Vm]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [pm, [Om, "Envizen"],
              [om, Im]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [pm, [Om, "MachSpeed"],
              [om, Im]
            ],
            [/\btu_(1491) b/i],
            [pm, [Om, "Rotor"],
              [om, Im]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [pm, [Om, ym],
              [om, Im]
            ],
            [/(sprint) (\w+)/i],
            [Om, pm, [om, Vm]],
            [/(kin\.[onetw]{3})/i],
            [
              [pm, /\./g, " "],
              [Om, Pm],
              [om, Vm]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [pm, [Om, Lm],
              [om, Im]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [pm, [Om, Lm],
              [om, Vm]
            ],
            [/smart-tv.+(samsung)/i],
            [Om, [om, Km]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [pm, /^/, "SmartTV"],
              [Om, lm],
              [om, Km]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [Om, Xm],
              [om, Km]
            ],
            [/(apple) ?tv/i],
            [Om, [pm, cm + " TV"],
              [om, Km]
            ],
            [/crkey/i],
            [
              [pm, bm + "cast"],
              [Om, em],
              [om, Km]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [pm, [Om, Jm],
              [om, Km]
            ],
            [/(shield \w+ tv)/i],
            [pm, [Om, ym],
              [om, Km]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [pm, [Om, Mm],
              [om, Km]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [pm, [Om, um],
              [om, Km]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [pm, [Om, Bm],
              [om, Km]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [Om, pm, [om, Km]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [Om, TT],
              [pm, TT],
              [om, Km]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [pm, [om, Km]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [om, Km]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [Om, pm, [om, jm]],
            [/droid.+; (shield)( bui|\))/i],
            [pm, [Om, ym],
              [om, jm]
            ],
            [/(playstation \w+)/i],
            [pm, [Om, um],
              [om, jm]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [pm, [Om, Pm],
              [om, jm]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [pm, [Om, lm],
              [om, Qm]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [Om, pm, [om, Qm]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [pm, [Om, sm],
              [om, Qm]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [pm, [Om, cm],
              [om, Qm]
            ],
            [/(opwwe\d{3})/i],
            [pm, [Om, Cm],
              [om, Qm]
            ],
            [/(moto 360)/i],
            [pm, [Om, Hm],
              [om, Qm]
            ],
            [/(smartwatch 3)/i],
            [pm, [Om, um],
              [om, Qm]
            ],
            [/(g watch r)/i],
            [pm, [Om, Xm],
              [om, Qm]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [pm, [Om, Lm],
              [om, Qm]
            ],
            [/droid.+; (glass) \d/i],
            [pm, [Om, em],
              [om, Qm]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [Om, pm, [om, Qm]],
            [/; (quest( \d| pro)?)/i],
            [pm, [Om, tm],
              [om, Qm]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [Om, [om, nm]],
            [/(aeobc)\b/i],
            [pm, [Om, Jm],
              [om, nm]
            ],
            [/(homepod).+mac os/i],
            [pm, [Om, cm],
              [om, nm]
            ],
            [/windows iot/i],
            [
              [om, nm]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [pm, [om, Vm]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [pm, [om, Im]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [om, Im]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [om, Vm]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [pm, [Om, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Ym, [Em, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Em, Ym],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Ym, [Em, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Em, Ym],
            [/ladybird\//i],
            [
              [Em, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Ym, Em]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Em, Ym],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Em, [Ym, hT, AT]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Ym, hT, AT],
              [Em, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Ym, /_/g, "."],
              [Em, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Em, dm],
              [Ym, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Ym, Em],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Em, /(.+)/, "$1 Touch"], Ym
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Em, Ym],
            [/\(bb(10);/i],
            [Ym, [Em, Zm]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Ym, [Em, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Ym, [Em, Sm + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Ym, [Em, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Ym, [Em, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Ym, [Em, bm + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Em, Um], Ym
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Em, Ym],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Em, "Solaris"], Ym
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Em, Ym]
          ]
        },
        xT = function(mm, Tm) {
          if (typeof mm === Dm && (Tm = mm, mm = am), !(this instanceof xT)) return new xT(mm, Tm).getResult();
          var fm = typeof Am !== wm && Am.navigator ? Am.navigator : am,
            hm = mm || (fm && fm.userAgent ? fm.userAgent : ""),
            jm = fm && fm.userAgentData ? fm.userAgentData : am,
            Km = Tm ? function(mm, Tm) {
              var fm = {};
              for (var hm in mm) Tm[hm] && Tm[hm].length % 2 === 0 ? fm[hm] = Tm[hm].concat(mm[hm]) : fm[hm] = mm[hm];
              return fm
            }(aT, Tm) : aT,
            Qm = fm && fm.userAgent == hm;
          return this.getBrowser = function() {
            var mm, Tm = {};
            return Tm[Em] = am, Tm[Ym] = am, fT.call(Tm, hm, Km.browser), Tm[Rm] = typeof(mm = Tm[Ym]) === im ? mm.replace(/[^\d\.]/g, "").split(".")[0] : am, Qm && fm && fm.brave && typeof fm.brave.isBrave == xm && (Tm[Em] = "Brave"), Tm
          }, this.getCPU = function() {
            var mm = {};
            return mm[qm] = am, fT.call(mm, hm, Km.cpu), mm
          }, this.getDevice = function() {
            var mm = {};
            return mm[Om] = am, mm[pm] = am, mm[om] = am, fT.call(mm, hm, Km.device), Qm && !mm[om] && jm && jm.mobile && (mm[om] = Vm), Qm && "Macintosh" == mm[pm] && fm && typeof fm.standalone !== wm && fm.maxTouchPoints && fm.maxTouchPoints > 2 && (mm[pm] = "iPad", mm[om] = Im), mm
          }, this.dO = function() {
            var mm = {};
            return mm[Em] = am, mm[Ym] = am, fT.call(mm, hm, Km.engine), mm
          }, this.getOS = function() {
            var mm = {};
            return mm[Em] = am, mm[Ym] = am, fT.call(mm, hm, Km.os), Qm && !mm[Em] && jm && jm.platform && "Unknown" != jm.platform && (mm[Em] = jm.platform.replace(/chrome os/i, Um).replace(/macos/i, dm)), mm
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.dO(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return hm
          }, this.setUA = function(mm) {
            return hm = typeof mm === im && mm.length > 500 ? TT(mm, 500) : mm, this
          }, this.setUA(hm), this
        };
      xT.VERSION = "1.0.41", xT.BROWSER = Wm([Em, Ym, Rm]), xT.CPU = Wm([qm]), xT.DEVICE = Wm([pm, Om, om, jm, Vm, Km, Im, Qm, nm]), xT.ENGINE = xT.OS = Wm([Em, Ym]), typeof Tm !== wm ? (mm.exports && (Tm = mm.exports = xT), Tm.UAParser = xT) : fm.amdO ? (hm = function() {
        return xT
      }.call(Tm, fm, Tm, mm)) === am || (mm.exports = hm) : typeof Am !== wm && (Am.UAParser = xT);
      var wT = typeof Am !== wm && (Am.jQuery || Am.Zepto);
      if (wT && !wT.ua) {
        var DT = new xT;
        wT.ua = DT.getResult(), wT.ua.get = function() {
          return DT.getUA()
        }, wT.ua.set = function(mm) {
          DT.setUA(mm);
          var Tm = DT.getResult();
          for (var fm in Tm) wT.ua[fm] = Tm[fm]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);